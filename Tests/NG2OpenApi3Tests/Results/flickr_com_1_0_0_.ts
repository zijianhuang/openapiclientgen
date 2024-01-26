import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Album {
		can_comment?: boolean | null;
		count_comments?: number | null;
		count_views?: number | null;
		date_create?: number | null;
		date_update?: number | null;
		description?: string | null;
		farm?: string | null;
		id?: string | null;
		photos?: number | null;
		primary?: string | null;
		secret?: string | null;
		server?: string | null;
		title?: string | null;
		videos?: number | null;
	}
	export interface AlbumFormProperties {
		can_comment: FormControl<boolean | null | undefined>,
		count_comments: FormControl<number | null | undefined>,
		count_views: FormControl<number | null | undefined>,
		date_create: FormControl<number | null | undefined>,
		date_update: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		farm: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		photos: FormControl<number | null | undefined>,
		primary: FormControl<string | null | undefined>,
		secret: FormControl<string | null | undefined>,
		server: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		videos: FormControl<number | null | undefined>,
	}
	export function CreateAlbumFormGroup() {
		return new FormGroup<AlbumFormProperties>({
			can_comment: new FormControl<boolean | null | undefined>(undefined),
			count_comments: new FormControl<number | null | undefined>(undefined),
			count_views: new FormControl<number | null | undefined>(undefined),
			date_create: new FormControl<number | null | undefined>(undefined),
			date_update: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			farm: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			photos: new FormControl<number | null | undefined>(undefined),
			primary: new FormControl<string | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			videos: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ContextPhoto {
		farm?: string | null;
		id?: string | null;
		is_faved?: boolean | null;
		license?: number | null;
		media?: string | null;
		owner?: string | null;
		safe?: boolean | null;
		secret?: string | null;
		server?: string | null;
		thumb?: string | null;
		title?: string | null;
		url?: string | null;
	}
	export interface ContextPhotoFormProperties {
		farm: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		is_faved: FormControl<boolean | null | undefined>,
		license: FormControl<number | null | undefined>,
		media: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
		safe: FormControl<boolean | null | undefined>,
		secret: FormControl<string | null | undefined>,
		server: FormControl<string | null | undefined>,
		thumb: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateContextPhotoFormGroup() {
		return new FormGroup<ContextPhotoFormProperties>({
			farm: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_faved: new FormControl<boolean | null | undefined>(undefined),
			license: new FormControl<number | null | undefined>(undefined),
			media: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			safe: new FormControl<boolean | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined),
			thumb: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContextPhotos {
		photos?: Array<ContextPhoto>;
	}
	export interface ContextPhotosFormProperties {
	}
	export function CreateContextPhotosFormGroup() {
		return new FormGroup<ContextPhotosFormProperties>({
		});

	}

	export interface Cover {
		farm?: string | null;
		id?: string | null;
		isfamily?: boolean | null;
		isfriend?: boolean | null;
		ispublic?: boolean | null;
		owner?: string | null;
		secret?: string | null;
		server?: string | null;
		title?: string | null;
		y?: string | null;
	}
	export interface CoverFormProperties {
		farm: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		isfamily: FormControl<boolean | null | undefined>,
		isfriend: FormControl<boolean | null | undefined>,
		ispublic: FormControl<boolean | null | undefined>,
		owner: FormControl<string | null | undefined>,
		secret: FormControl<string | null | undefined>,
		server: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		y: FormControl<string | null | undefined>,
	}
	export function CreateCoverFormGroup() {
		return new FormGroup<CoverFormProperties>({
			farm: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isfamily: new FormControl<boolean | null | undefined>(undefined),
			isfriend: new FormControl<boolean | null | undefined>(undefined),
			ispublic: new FormControl<boolean | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			y: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Group {
		blast?: GroupBlast;
		cover?: Cover;
		coverphoto_farm?: string | null;
		coverphoto_server?: string | null;
		coverphoto_url?: PhotoURLs;
		description?: GroupDescription;
		iconfarm?: string | null;
		iconserver?: string | null;
		id?: string | null;
		is_admin?: boolean | null;
		is_member?: boolean | null;
		is_moderator?: boolean | null;
		ispoolmoderated?: boolean | null;
		lang?: string | null;
		members?: GroupMembers;
		name?: GroupName;
		path_alias?: string | null;
		pool_count?: GroupPool_count;
		pool_rows?: number | null;
		privacy?: GroupPrivacy;
		restrictions?: GroupRestrictions;
		roles?: GroupRoles;
		rules?: GroupRules;
		throttle?: GroupThrottle;
		topic_count?: GroupTopic_count;
	}
	export interface GroupFormProperties {
		coverphoto_farm: FormControl<string | null | undefined>,
		coverphoto_server: FormControl<string | null | undefined>,
		iconfarm: FormControl<string | null | undefined>,
		iconserver: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		is_admin: FormControl<boolean | null | undefined>,
		is_member: FormControl<boolean | null | undefined>,
		is_moderator: FormControl<boolean | null | undefined>,
		ispoolmoderated: FormControl<boolean | null | undefined>,
		lang: FormControl<string | null | undefined>,
		path_alias: FormControl<string | null | undefined>,
		pool_rows: FormControl<number | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			coverphoto_farm: new FormControl<string | null | undefined>(undefined),
			coverphoto_server: new FormControl<string | null | undefined>(undefined),
			iconfarm: new FormControl<string | null | undefined>(undefined),
			iconserver: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_admin: new FormControl<boolean | null | undefined>(undefined),
			is_member: new FormControl<boolean | null | undefined>(undefined),
			is_moderator: new FormControl<boolean | null | undefined>(undefined),
			ispoolmoderated: new FormControl<boolean | null | undefined>(undefined),
			lang: new FormControl<string | null | undefined>(undefined),
			path_alias: new FormControl<string | null | undefined>(undefined),
			pool_rows: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GroupBlast {
		_content?: string | null;
		date_blast_added?: string | null;
		user_id?: string | null;
	}
	export interface GroupBlastFormProperties {
		_content: FormControl<string | null | undefined>,
		date_blast_added: FormControl<string | null | undefined>,
		user_id: FormControl<string | null | undefined>,
	}
	export function CreateGroupBlastFormGroup() {
		return new FormGroup<GroupBlastFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
			date_blast_added: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhotoURLs {
		h?: string | null;
		l?: string | null;
		s?: string | null;
		t?: string | null;
	}
	export interface PhotoURLsFormProperties {
		h: FormControl<string | null | undefined>,
		l: FormControl<string | null | undefined>,
		s: FormControl<string | null | undefined>,
		t: FormControl<string | null | undefined>,
	}
	export function CreatePhotoURLsFormGroup() {
		return new FormGroup<PhotoURLsFormProperties>({
			h: new FormControl<string | null | undefined>(undefined),
			l: new FormControl<string | null | undefined>(undefined),
			s: new FormControl<string | null | undefined>(undefined),
			t: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GroupDescription {
		_content?: string | null;
	}
	export interface GroupDescriptionFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreateGroupDescriptionFormGroup() {
		return new FormGroup<GroupDescriptionFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GroupMembers {
		_content?: string | null;
	}
	export interface GroupMembersFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreateGroupMembersFormGroup() {
		return new FormGroup<GroupMembersFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GroupName {
		_content?: string | null;
	}
	export interface GroupNameFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreateGroupNameFormGroup() {
		return new FormGroup<GroupNameFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GroupPool_count {
		_content?: string | null;
	}
	export interface GroupPool_countFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreateGroupPool_countFormGroup() {
		return new FormGroup<GroupPool_countFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GroupPrivacy {
		_content?: string | null;
	}
	export interface GroupPrivacyFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreateGroupPrivacyFormGroup() {
		return new FormGroup<GroupPrivacyFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GroupRestrictions {
		art_ok?: boolean | null;
		has_geo?: boolean | null;
		images_ok?: boolean | null;
		moderate_ok?: boolean | null;
		photos_ok?: boolean | null;
		restricted_ok?: boolean | null;
		safe_ok?: boolean | null;
		screens_ok?: boolean | null;
		videos_ok?: boolean | null;
	}
	export interface GroupRestrictionsFormProperties {
		art_ok: FormControl<boolean | null | undefined>,
		has_geo: FormControl<boolean | null | undefined>,
		images_ok: FormControl<boolean | null | undefined>,
		moderate_ok: FormControl<boolean | null | undefined>,
		photos_ok: FormControl<boolean | null | undefined>,
		restricted_ok: FormControl<boolean | null | undefined>,
		safe_ok: FormControl<boolean | null | undefined>,
		screens_ok: FormControl<boolean | null | undefined>,
		videos_ok: FormControl<boolean | null | undefined>,
	}
	export function CreateGroupRestrictionsFormGroup() {
		return new FormGroup<GroupRestrictionsFormProperties>({
			art_ok: new FormControl<boolean | null | undefined>(undefined),
			has_geo: new FormControl<boolean | null | undefined>(undefined),
			images_ok: new FormControl<boolean | null | undefined>(undefined),
			moderate_ok: new FormControl<boolean | null | undefined>(undefined),
			photos_ok: new FormControl<boolean | null | undefined>(undefined),
			restricted_ok: new FormControl<boolean | null | undefined>(undefined),
			safe_ok: new FormControl<boolean | null | undefined>(undefined),
			screens_ok: new FormControl<boolean | null | undefined>(undefined),
			videos_ok: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GroupRoles {
		admin?: string | null;
		member?: string | null;
		moderator?: string | null;
	}
	export interface GroupRolesFormProperties {
		admin: FormControl<string | null | undefined>,
		member: FormControl<string | null | undefined>,
		moderator: FormControl<string | null | undefined>,
	}
	export function CreateGroupRolesFormGroup() {
		return new FormGroup<GroupRolesFormProperties>({
			admin: new FormControl<string | null | undefined>(undefined),
			member: new FormControl<string | null | undefined>(undefined),
			moderator: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GroupRules {
		_content?: string | null;
	}
	export interface GroupRulesFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreateGroupRulesFormGroup() {
		return new FormGroup<GroupRulesFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GroupThrottle {
		count?: number | null;
		mode?: string | null;
		remaining?: string | null;
	}
	export interface GroupThrottleFormProperties {
		count: FormControl<number | null | undefined>,
		mode: FormControl<string | null | undefined>,
		remaining: FormControl<string | null | undefined>,
	}
	export function CreateGroupThrottleFormGroup() {
		return new FormGroup<GroupThrottleFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
			remaining: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GroupTopic_count {
		_content?: string | null;
	}
	export interface GroupTopic_countFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreateGroupTopic_countFormGroup() {
		return new FormGroup<GroupTopic_countFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Note {
		description?: string | null;
	}
	export interface NoteFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateNoteFormGroup() {
		return new FormGroup<NoteFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Owner {
		iconfarm?: string | null;
		iconserver?: string | null;
		is_ad_free?: boolean | null;
		ispro?: boolean | null;
		location?: string | null;
		noindexfollow?: boolean | null;
		nsid?: string | null;
		path_alias?: string | null;
		realname?: string | null;
		username?: string | null;
	}
	export interface OwnerFormProperties {
		iconfarm: FormControl<string | null | undefined>,
		iconserver: FormControl<string | null | undefined>,
		is_ad_free: FormControl<boolean | null | undefined>,
		ispro: FormControl<boolean | null | undefined>,
		location: FormControl<string | null | undefined>,
		noindexfollow: FormControl<boolean | null | undefined>,
		nsid: FormControl<string | null | undefined>,
		path_alias: FormControl<string | null | undefined>,
		realname: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateOwnerFormGroup() {
		return new FormGroup<OwnerFormProperties>({
			iconfarm: new FormControl<string | null | undefined>(undefined),
			iconserver: new FormControl<string | null | undefined>(undefined),
			is_ad_free: new FormControl<boolean | null | undefined>(undefined),
			ispro: new FormControl<boolean | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			noindexfollow: new FormControl<boolean | null | undefined>(undefined),
			nsid: new FormControl<string | null | undefined>(undefined),
			path_alias: new FormControl<string | null | undefined>(undefined),
			realname: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Person {
		can_buy_pro?: boolean | null;
		cover?: Cover;
		coverphoto?: PhotoURLs;
		coverphoto_farm?: string | null;
		coverphoto_server?: string | null;
		description?: PersonDescription;
		disable_keyboard_shortcuts?: PersonDisable_keyboard_shortcuts;
		expire?: boolean | null;
		has_stats?: boolean | null;
		iconfarm?: string | null;
		iconserver?: string | null;
		id?: string | null;
		is_ad_free?: boolean | null;
		ispro?: boolean | null;
		location?: PersonLocation;
		mbox_sha1sum?: PersonMbox_sha1sum;
		mobileurl?: PersonMobileurl;
		nsid?: string | null;
		path_alias?: string | null;
		photos?: PersonPhotos;
		photosurl?: PersonPhotosurl;
		profileurl?: PersonProfileurl;
		realname?: PersonRealname;
		timezone?: PersonTimezone;
		unread_messages?: PersonUnread_messages;
		user_secret?: string | null;
		username?: PersonUsername;
		yintl?: string | null;
	}
	export interface PersonFormProperties {
		can_buy_pro: FormControl<boolean | null | undefined>,
		coverphoto_farm: FormControl<string | null | undefined>,
		coverphoto_server: FormControl<string | null | undefined>,
		expire: FormControl<boolean | null | undefined>,
		has_stats: FormControl<boolean | null | undefined>,
		iconfarm: FormControl<string | null | undefined>,
		iconserver: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		is_ad_free: FormControl<boolean | null | undefined>,
		ispro: FormControl<boolean | null | undefined>,
		nsid: FormControl<string | null | undefined>,
		path_alias: FormControl<string | null | undefined>,
		user_secret: FormControl<string | null | undefined>,
		yintl: FormControl<string | null | undefined>,
	}
	export function CreatePersonFormGroup() {
		return new FormGroup<PersonFormProperties>({
			can_buy_pro: new FormControl<boolean | null | undefined>(undefined),
			coverphoto_farm: new FormControl<string | null | undefined>(undefined),
			coverphoto_server: new FormControl<string | null | undefined>(undefined),
			expire: new FormControl<boolean | null | undefined>(undefined),
			has_stats: new FormControl<boolean | null | undefined>(undefined),
			iconfarm: new FormControl<string | null | undefined>(undefined),
			iconserver: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_ad_free: new FormControl<boolean | null | undefined>(undefined),
			ispro: new FormControl<boolean | null | undefined>(undefined),
			nsid: new FormControl<string | null | undefined>(undefined),
			path_alias: new FormControl<string | null | undefined>(undefined),
			user_secret: new FormControl<string | null | undefined>(undefined),
			yintl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonDescription {
		_content?: string | null;
	}
	export interface PersonDescriptionFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreatePersonDescriptionFormGroup() {
		return new FormGroup<PersonDescriptionFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonDisable_keyboard_shortcuts {
		_content?: string | null;
	}
	export interface PersonDisable_keyboard_shortcutsFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreatePersonDisable_keyboard_shortcutsFormGroup() {
		return new FormGroup<PersonDisable_keyboard_shortcutsFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonLocation {
		_content?: string | null;
	}
	export interface PersonLocationFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreatePersonLocationFormGroup() {
		return new FormGroup<PersonLocationFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonMbox_sha1sum {
		_content?: string | null;
	}
	export interface PersonMbox_sha1sumFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreatePersonMbox_sha1sumFormGroup() {
		return new FormGroup<PersonMbox_sha1sumFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonMobileurl {
		_content?: string | null;
	}
	export interface PersonMobileurlFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreatePersonMobileurlFormGroup() {
		return new FormGroup<PersonMobileurlFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonPhotos {
		count?: PersonPhotosCount;
		firstdate?: PersonPhotosFirstdate;
		firstdatetaken?: PersonPhotosFirstdatetaken;
		views?: PersonPhotosViews;
	}
	export interface PersonPhotosFormProperties {
	}
	export function CreatePersonPhotosFormGroup() {
		return new FormGroup<PersonPhotosFormProperties>({
		});

	}

	export interface PersonPhotosCount {
		_content?: string | null;
	}
	export interface PersonPhotosCountFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreatePersonPhotosCountFormGroup() {
		return new FormGroup<PersonPhotosCountFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonPhotosFirstdate {
		_content?: string | null;
	}
	export interface PersonPhotosFirstdateFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreatePersonPhotosFirstdateFormGroup() {
		return new FormGroup<PersonPhotosFirstdateFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonPhotosFirstdatetaken {
		_content?: string | null;
	}
	export interface PersonPhotosFirstdatetakenFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreatePersonPhotosFirstdatetakenFormGroup() {
		return new FormGroup<PersonPhotosFirstdatetakenFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonPhotosViews {
		_content?: string | null;
	}
	export interface PersonPhotosViewsFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreatePersonPhotosViewsFormGroup() {
		return new FormGroup<PersonPhotosViewsFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonPhotosurl {
		_content?: string | null;
	}
	export interface PersonPhotosurlFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreatePersonPhotosurlFormGroup() {
		return new FormGroup<PersonPhotosurlFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonProfileurl {
		_content?: string | null;
	}
	export interface PersonProfileurlFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreatePersonProfileurlFormGroup() {
		return new FormGroup<PersonProfileurlFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonRealname {
		_content?: string | null;
	}
	export interface PersonRealnameFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreatePersonRealnameFormGroup() {
		return new FormGroup<PersonRealnameFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonTimezone {
		label?: string | null;
		offset?: string | null;
		timezone_id?: string | null;
	}
	export interface PersonTimezoneFormProperties {
		label: FormControl<string | null | undefined>,
		offset: FormControl<string | null | undefined>,
		timezone_id: FormControl<string | null | undefined>,
	}
	export function CreatePersonTimezoneFormGroup() {
		return new FormGroup<PersonTimezoneFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<string | null | undefined>(undefined),
			timezone_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonUnread_messages {
		_content?: string | null;
	}
	export interface PersonUnread_messagesFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreatePersonUnread_messagesFormGroup() {
		return new FormGroup<PersonUnread_messagesFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonUsername {
		_content?: string | null;
	}
	export interface PersonUsernameFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreatePersonUsernameFormGroup() {
		return new FormGroup<PersonUsernameFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Photo {
		comments?: PhotoComments;
		dates?: PhotoDates;
		dateuploaded?: string | null;
		description?: PhotoDescription;
		editability?: PhotoEditability;
		farm?: string | null;
		id?: string | null;
		isfavorite?: boolean | null;
		license?: string | null;
		media?: string | null;
		notes?: PhotoNotes;
		originalsecret?: string | null;
		owner?: Owner;
		people?: PhotoPeople;
		permissions?: PhotoPermissions;
		publiceditability?: PhotoPubliceditability;
		rotation?: string | null;
		safe?: boolean | null;
		safety_level?: string | null;
		secret?: string | null;
		server?: string | null;
		tags?: PhotoTags;
		title?: PhotoTitle;
		urls?: PhotoUrls;
		usage?: PhotoUsage;
		views?: string | null;
		visibility?: PhotoVisibility;
	}
	export interface PhotoFormProperties {
		dateuploaded: FormControl<string | null | undefined>,
		farm: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		isfavorite: FormControl<boolean | null | undefined>,
		license: FormControl<string | null | undefined>,
		media: FormControl<string | null | undefined>,
		originalsecret: FormControl<string | null | undefined>,
		rotation: FormControl<string | null | undefined>,
		safe: FormControl<boolean | null | undefined>,
		safety_level: FormControl<string | null | undefined>,
		secret: FormControl<string | null | undefined>,
		server: FormControl<string | null | undefined>,
		views: FormControl<string | null | undefined>,
	}
	export function CreatePhotoFormGroup() {
		return new FormGroup<PhotoFormProperties>({
			dateuploaded: new FormControl<string | null | undefined>(undefined),
			farm: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isfavorite: new FormControl<boolean | null | undefined>(undefined),
			license: new FormControl<string | null | undefined>(undefined),
			media: new FormControl<string | null | undefined>(undefined),
			originalsecret: new FormControl<string | null | undefined>(undefined),
			rotation: new FormControl<string | null | undefined>(undefined),
			safe: new FormControl<boolean | null | undefined>(undefined),
			safety_level: new FormControl<string | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined),
			views: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhotoComments {
		_content?: string | null;
	}
	export interface PhotoCommentsFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreatePhotoCommentsFormGroup() {
		return new FormGroup<PhotoCommentsFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhotoDates {
		lastupdate?: string | null;
		posted?: string | null;
		taken?: string | null;
		takengranularity?: string | null;
		takenunknown?: boolean | null;
	}
	export interface PhotoDatesFormProperties {
		lastupdate: FormControl<string | null | undefined>,
		posted: FormControl<string | null | undefined>,
		taken: FormControl<string | null | undefined>,
		takengranularity: FormControl<string | null | undefined>,
		takenunknown: FormControl<boolean | null | undefined>,
	}
	export function CreatePhotoDatesFormGroup() {
		return new FormGroup<PhotoDatesFormProperties>({
			lastupdate: new FormControl<string | null | undefined>(undefined),
			posted: new FormControl<string | null | undefined>(undefined),
			taken: new FormControl<string | null | undefined>(undefined),
			takengranularity: new FormControl<string | null | undefined>(undefined),
			takenunknown: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PhotoDescription {
		_content?: string | null;
	}
	export interface PhotoDescriptionFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreatePhotoDescriptionFormGroup() {
		return new FormGroup<PhotoDescriptionFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhotoEditability {
		canaddmeta?: boolean | null;
		cancomment?: boolean | null;
	}
	export interface PhotoEditabilityFormProperties {
		canaddmeta: FormControl<boolean | null | undefined>,
		cancomment: FormControl<boolean | null | undefined>,
	}
	export function CreatePhotoEditabilityFormGroup() {
		return new FormGroup<PhotoEditabilityFormProperties>({
			canaddmeta: new FormControl<boolean | null | undefined>(undefined),
			cancomment: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PhotoNotes {
		note?: Array<Note>;
	}
	export interface PhotoNotesFormProperties {
	}
	export function CreatePhotoNotesFormGroup() {
		return new FormGroup<PhotoNotesFormProperties>({
		});

	}

	export interface PhotoPeople {
		haspeople?: boolean | null;
	}
	export interface PhotoPeopleFormProperties {
		haspeople: FormControl<boolean | null | undefined>,
	}
	export function CreatePhotoPeopleFormGroup() {
		return new FormGroup<PhotoPeopleFormProperties>({
			haspeople: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PhotoPermissions {
		permaddmeta?: string | null;
		permcomment?: string | null;
	}
	export interface PhotoPermissionsFormProperties {
		permaddmeta: FormControl<string | null | undefined>,
		permcomment: FormControl<string | null | undefined>,
	}
	export function CreatePhotoPermissionsFormGroup() {
		return new FormGroup<PhotoPermissionsFormProperties>({
			permaddmeta: new FormControl<string | null | undefined>(undefined),
			permcomment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhotoPubliceditability {
		canaddmeta?: boolean | null;
		cancomment?: boolean | null;
	}
	export interface PhotoPubliceditabilityFormProperties {
		canaddmeta: FormControl<boolean | null | undefined>,
		cancomment: FormControl<boolean | null | undefined>,
	}
	export function CreatePhotoPubliceditabilityFormGroup() {
		return new FormGroup<PhotoPubliceditabilityFormProperties>({
			canaddmeta: new FormControl<boolean | null | undefined>(undefined),
			cancomment: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PhotoTags {
		tag?: Array<Tag>;
	}
	export interface PhotoTagsFormProperties {
	}
	export function CreatePhotoTagsFormGroup() {
		return new FormGroup<PhotoTagsFormProperties>({
		});

	}

	export interface Tag {
		_content?: string | null;
		author?: string | null;
		authorname?: string | null;
		id?: string | null;
		machine_tag?: boolean | null;
		raw?: string | null;
	}
	export interface TagFormProperties {
		_content: FormControl<string | null | undefined>,
		author: FormControl<string | null | undefined>,
		authorname: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		machine_tag: FormControl<boolean | null | undefined>,
		raw: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
			author: new FormControl<string | null | undefined>(undefined),
			authorname: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			machine_tag: new FormControl<boolean | null | undefined>(undefined),
			raw: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhotoTitle {
		_content?: string | null;
	}
	export interface PhotoTitleFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreatePhotoTitleFormGroup() {
		return new FormGroup<PhotoTitleFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhotoUrls {
		url?: Array<URL>;
	}
	export interface PhotoUrlsFormProperties {
	}
	export function CreatePhotoUrlsFormGroup() {
		return new FormGroup<PhotoUrlsFormProperties>({
		});

	}

	export interface URL {
		_content?: string | null;
		type?: string | null;
	}
	export interface URLFormProperties {
		_content: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateURLFormGroup() {
		return new FormGroup<URLFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhotoUsage {
		canblog?: boolean | null;
		candownload?: boolean | null;
		canprint?: boolean | null;
		canshare?: boolean | null;
	}
	export interface PhotoUsageFormProperties {
		canblog: FormControl<boolean | null | undefined>,
		candownload: FormControl<boolean | null | undefined>,
		canprint: FormControl<boolean | null | undefined>,
		canshare: FormControl<boolean | null | undefined>,
	}
	export function CreatePhotoUsageFormGroup() {
		return new FormGroup<PhotoUsageFormProperties>({
			canblog: new FormControl<boolean | null | undefined>(undefined),
			candownload: new FormControl<boolean | null | undefined>(undefined),
			canprint: new FormControl<boolean | null | undefined>(undefined),
			canshare: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PhotoVisibility {
		isfamily?: boolean | null;
		isfriend?: boolean | null;
		ispublic?: boolean | null;
	}
	export interface PhotoVisibilityFormProperties {
		isfamily: FormControl<boolean | null | undefined>,
		isfriend: FormControl<boolean | null | undefined>,
		ispublic: FormControl<boolean | null | undefined>,
	}
	export function CreatePhotoVisibilityFormGroup() {
		return new FormGroup<PhotoVisibilityFormProperties>({
			isfamily: new FormControl<boolean | null | undefined>(undefined),
			isfriend: new FormControl<boolean | null | undefined>(undefined),
			ispublic: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Size {
		height?: number | null;
		label?: string | null;
		media?: string | null;
		source?: string | null;
		url?: string | null;
		width?: number | null;
	}
	export interface SizeFormProperties {
		height: FormControl<number | null | undefined>,
		label: FormControl<string | null | undefined>,
		media: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
		width: FormControl<number | null | undefined>,
	}
	export function CreateSizeFormGroup() {
		return new FormGroup<SizeFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			media: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Topic {
		author?: string | null;
		author_is_deleted?: boolean | null;
		author_path_alias?: string | null;
		authorname?: string | null;
		can_delete?: boolean | null;
		can_edit?: boolean | null;
		can_reply?: boolean | null;
		count_replies?: number | null;
		datecreate?: string | null;
		datelastpost?: string | null;
		iconfarm?: string | null;
		iconserver?: string | null;
		id?: string | null;
		is_locked?: boolean | null;
		is_pro?: boolean | null;
		is_sticky?: boolean | null;
		last_reply?: string | null;
		lastedit?: string | null;
		message?: TopicMessage;
		role?: string | null;
		subject?: string | null;
	}
	export interface TopicFormProperties {
		author: FormControl<string | null | undefined>,
		author_is_deleted: FormControl<boolean | null | undefined>,
		author_path_alias: FormControl<string | null | undefined>,
		authorname: FormControl<string | null | undefined>,
		can_delete: FormControl<boolean | null | undefined>,
		can_edit: FormControl<boolean | null | undefined>,
		can_reply: FormControl<boolean | null | undefined>,
		count_replies: FormControl<number | null | undefined>,
		datecreate: FormControl<string | null | undefined>,
		datelastpost: FormControl<string | null | undefined>,
		iconfarm: FormControl<string | null | undefined>,
		iconserver: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		is_locked: FormControl<boolean | null | undefined>,
		is_pro: FormControl<boolean | null | undefined>,
		is_sticky: FormControl<boolean | null | undefined>,
		last_reply: FormControl<string | null | undefined>,
		lastedit: FormControl<string | null | undefined>,
		role: FormControl<string | null | undefined>,
		subject: FormControl<string | null | undefined>,
	}
	export function CreateTopicFormGroup() {
		return new FormGroup<TopicFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			author_is_deleted: new FormControl<boolean | null | undefined>(undefined),
			author_path_alias: new FormControl<string | null | undefined>(undefined),
			authorname: new FormControl<string | null | undefined>(undefined),
			can_delete: new FormControl<boolean | null | undefined>(undefined),
			can_edit: new FormControl<boolean | null | undefined>(undefined),
			can_reply: new FormControl<boolean | null | undefined>(undefined),
			count_replies: new FormControl<number | null | undefined>(undefined),
			datecreate: new FormControl<string | null | undefined>(undefined),
			datelastpost: new FormControl<string | null | undefined>(undefined),
			iconfarm: new FormControl<string | null | undefined>(undefined),
			iconserver: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_locked: new FormControl<boolean | null | undefined>(undefined),
			is_pro: new FormControl<boolean | null | undefined>(undefined),
			is_sticky: new FormControl<boolean | null | undefined>(undefined),
			last_reply: new FormControl<string | null | undefined>(undefined),
			lastedit: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TopicMessage {
		_content?: string | null;
	}
	export interface TopicMessageFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreateTopicMessageFormGroup() {
		return new FormGroup<TopicMessageFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TopicReply {
		author?: string | null;
		author_is_deleted?: boolean | null;
		author_path_alias?: string | null;
		authorname?: string | null;
		can_delete?: boolean | null;
		can_edit?: boolean | null;
		datecreate?: string | null;
		iconfarm?: string | null;
		iconserver?: string | null;
		id?: string | null;
		is_pro?: boolean | null;
		lastedit?: string | null;
		message?: TopicReplyMessage;
	}
	export interface TopicReplyFormProperties {
		author: FormControl<string | null | undefined>,
		author_is_deleted: FormControl<boolean | null | undefined>,
		author_path_alias: FormControl<string | null | undefined>,
		authorname: FormControl<string | null | undefined>,
		can_delete: FormControl<boolean | null | undefined>,
		can_edit: FormControl<boolean | null | undefined>,
		datecreate: FormControl<string | null | undefined>,
		iconfarm: FormControl<string | null | undefined>,
		iconserver: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		is_pro: FormControl<boolean | null | undefined>,
		lastedit: FormControl<string | null | undefined>,
	}
	export function CreateTopicReplyFormGroup() {
		return new FormGroup<TopicReplyFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			author_is_deleted: new FormControl<boolean | null | undefined>(undefined),
			author_path_alias: new FormControl<string | null | undefined>(undefined),
			authorname: new FormControl<string | null | undefined>(undefined),
			can_delete: new FormControl<boolean | null | undefined>(undefined),
			can_edit: new FormControl<boolean | null | undefined>(undefined),
			datecreate: new FormControl<string | null | undefined>(undefined),
			iconfarm: new FormControl<string | null | undefined>(undefined),
			iconserver: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_pro: new FormControl<boolean | null | undefined>(undefined),
			lastedit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TopicReplyMessage {
		_content?: string | null;
	}
	export interface TopicReplyMessageFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreateTopicReplyMessageFormGroup() {
		return new FormGroup<TopicReplyMessageFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns an access token
		 * Get oauth/access_token
		 * @return {string} OK
		 */
		GetAccessToken(oauth_consumer_key: string, oauth_nonce: string, oauth_timestamp: string, oauth_signature_method: string, oauth_version: string, oauth_signature: string, oauth_verifier: string, oauth_token: string): Observable<string> {
			return this.http.get(this.baseUri + 'oauth/access_token?oauth_consumer_key=' + (oauth_consumer_key == null ? '' : encodeURIComponent(oauth_consumer_key)) + '&oauth_nonce=' + (oauth_nonce == null ? '' : encodeURIComponent(oauth_nonce)) + '&oauth_timestamp=' + (oauth_timestamp == null ? '' : encodeURIComponent(oauth_timestamp)) + '&oauth_signature_method=' + (oauth_signature_method == null ? '' : encodeURIComponent(oauth_signature_method)) + '&oauth_version=' + (oauth_version == null ? '' : encodeURIComponent(oauth_version)) + '&oauth_signature=' + (oauth_signature == null ? '' : encodeURIComponent(oauth_signature)) + '&oauth_verifier=' + (oauth_verifier == null ? '' : encodeURIComponent(oauth_verifier)) + '&oauth_token=' + (oauth_token == null ? '' : encodeURIComponent(oauth_token)), { responseType: 'text' });
		}

		/**
		 * Returns an oauth token and oauth token secret
		 * Get oauth/request_token
		 * @return {string} OK
		 */
		GetRequestToken(oauth_consumer_key: string, oauth_nonce: string, oauth_timestamp: string, oauth_signature_method: string, oauth_version: string, oauth_signature: string, oauth_callback: string): Observable<string> {
			return this.http.get(this.baseUri + 'oauth/request_token?oauth_consumer_key=' + (oauth_consumer_key == null ? '' : encodeURIComponent(oauth_consumer_key)) + '&oauth_nonce=' + (oauth_nonce == null ? '' : encodeURIComponent(oauth_nonce)) + '&oauth_timestamp=' + (oauth_timestamp == null ? '' : encodeURIComponent(oauth_timestamp)) + '&oauth_signature_method=' + (oauth_signature_method == null ? '' : encodeURIComponent(oauth_signature_method)) + '&oauth_version=' + (oauth_version == null ? '' : encodeURIComponent(oauth_version)) + '&oauth_signature=' + (oauth_signature == null ? '' : encodeURIComponent(oauth_signature)) + '&oauth_callback=' + (oauth_callback == null ? '' : encodeURIComponent(oauth_callback)), { responseType: 'text' });
		}

		/**
		 * Returns next and previous favorites for a photo in a user's favorites
		 * Get rest?method=flickr.favorites.getContext
		 * @return {GetFavoritesContextByIDReturn} OK
		 */
		GetFavoritesContextByID(api_key: string, photo_id: string, user_id: string | null | undefined): Observable<GetFavoritesContextByIDReturn> {
			return this.http.get<GetFavoritesContextByIDReturn>(this.baseUri + 'rest?method=flickr.favorites.getContext&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&photo_id=' + (photo_id == null ? '' : encodeURIComponent(photo_id)) + '&user_id=' + (user_id == null ? '' : encodeURIComponent(user_id)), {});
		}

		/**
		 * Returns a list of the user's favorite photos. Only photos which the calling user has permission to see are returned.
		 * Get rest?method=flickr.favorites.getList
		 * @return {GetFavoritesByPersonIDReturn} OK
		 */
		GetFavoritesByPersonID(api_key: string, user_id: string, min_fave_date: number | null | undefined, max_fave_date: number | null | undefined, page: number | null | undefined, per_page: number | null | undefined): Observable<GetFavoritesByPersonIDReturn> {
			return this.http.get<GetFavoritesByPersonIDReturn>(this.baseUri + 'rest?method=flickr.favorites.getList&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&user_id=' + (user_id == null ? '' : encodeURIComponent(user_id)) + '&min_fave_date=' + min_fave_date + '&max_fave_date=' + max_fave_date + '&page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Returns a list of photos in a gallery.
		 * Get rest?method=flickr.galleries.getPhotos
		 * @return {GetGalleryPhotosByIDReturn} OK
		 */
		GetGalleryPhotosByID(api_key: string, gallery_id: string): Observable<GetGalleryPhotosByIDReturn> {
			return this.http.get<GetGalleryPhotosByIDReturn>(this.baseUri + 'rest?method=flickr.galleries.getPhotos&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&gallery_id=' + (gallery_id == null ? '' : encodeURIComponent(gallery_id)), {});
		}

		/**
		 * Get information on a group topic reply
		 * Get rest?method=flickr.groups.discuss.replies.getInfo
		 * @return {GetGroupTopicRepliesByIDReturn} OK
		 */
		GetGroupTopicRepliesByID(api_key: string, group_id: string | null | undefined, topic_id: string, reply_id: string): Observable<GetGroupTopicRepliesByIDReturn> {
			return this.http.get<GetGroupTopicRepliesByIDReturn>(this.baseUri + 'rest?method=flickr.groups.discuss.replies.getInfo&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&group_id=' + (group_id == null ? '' : encodeURIComponent(group_id)) + '&topic_id=' + (topic_id == null ? '' : encodeURIComponent(topic_id)) + '&reply_id=' + (reply_id == null ? '' : encodeURIComponent(reply_id)), {});
		}

		/**
		 * Get information about a group discussion topic
		 * Get rest?method=flickr.groups.discuss.topics.getInfo
		 * @return {GetGroupTopicByIDReturn} OK
		 */
		GetGroupTopicByID(api_key: string, group_id: string | null | undefined, topic_id: string): Observable<GetGroupTopicByIDReturn> {
			return this.http.get<GetGroupTopicByIDReturn>(this.baseUri + 'rest?method=flickr.groups.discuss.topics.getInfo&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&group_id=' + (group_id == null ? '' : encodeURIComponent(group_id)) + '&topic_id=' + (topic_id == null ? '' : encodeURIComponent(topic_id)), {});
		}

		/**
		 * Get a list of discussion topics in a group.
		 * Get rest?method=flickr.groups.discuss.topics.getList
		 * @return {GetGroupDiscussionsByIDReturn} OK
		 */
		GetGroupDiscussionsByID(api_key: string, group_id: string | null | undefined, page: number | null | undefined, per_page: number | null | undefined): Observable<GetGroupDiscussionsByIDReturn> {
			return this.http.get<GetGroupDiscussionsByIDReturn>(this.baseUri + 'rest?method=flickr.groups.discuss.topics.getList&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&group_id=' + (group_id == null ? '' : encodeURIComponent(group_id)) + '&page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Get information about a group
		 * Get rest?method=flickr.groups.getInfo
		 * @return {GetGroupByIDReturn} OK
		 */
		GetGroupByID(api_key: string, group_id: string | null | undefined, group_path_alias: string | null | undefined, lang: string | null | undefined): Observable<GetGroupByIDReturn> {
			return this.http.get<GetGroupByIDReturn>(this.baseUri + 'rest?method=flickr.groups.getInfo&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&group_id=' + (group_id == null ? '' : encodeURIComponent(group_id)) + '&group_path_alias=' + (group_path_alias == null ? '' : encodeURIComponent(group_path_alias)) + '&lang=' + (lang == null ? '' : encodeURIComponent(lang)), {});
		}

		/**
		 * Returns next and previous photos for a photo in a group pool
		 * Get rest?method=flickr.groups.pools.getContext
		 * @return {PublicGetByApi_keyAndPhoto_idAndGroup_idReturn} OK
		 */
		PublicGetByApi_keyAndPhoto_idAndGroup_id(api_key: string, photo_id: string, group_id: string | null | undefined): Observable<PublicGetByApi_keyAndPhoto_idAndGroup_idReturn> {
			return this.http.get<PublicGetByApi_keyAndPhoto_idAndGroup_idReturn>(this.baseUri + 'rest?method=flickr.groups.pools.getContext&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&photo_id=' + (photo_id == null ? '' : encodeURIComponent(photo_id)) + '&group_id=' + (group_id == null ? '' : encodeURIComponent(group_id)), {});
		}

		/**
		 * Returns a list of pool photos for a given group
		 * Get rest?method=flickr.groups.pools.getPhotos
		 * @return {GetGroupPhotosByIDReturn} OK
		 */
		GetGroupPhotosByID(api_key: string, group_id: string | null | undefined): Observable<GetGroupPhotosByIDReturn> {
			return this.http.get<GetGroupPhotosByIDReturn>(this.baseUri + 'rest?method=flickr.groups.pools.getPhotos&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&group_id=' + (group_id == null ? '' : encodeURIComponent(group_id)), {});
		}

		/**
		 * Returns a person
		 * Get rest?method=flickr.people.getInfo
		 * @return {GetPersonByIDReturn} OK
		 */
		GetPersonByID(api_key: string, user_id: string | null | undefined): Observable<GetPersonByIDReturn> {
			return this.http.get<GetPersonByIDReturn>(this.baseUri + 'rest?method=flickr.people.getInfo&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&user_id=' + (user_id == null ? '' : encodeURIComponent(user_id)), {});
		}

		/**
		 * Return photos from the given user's photostream
		 * Get rest?method=flickr.people.getPhotos
		 * @return {GetMediaByPersonIDReturn} OK
		 */
		GetMediaByPersonID(api_key: string, user_id: string, safe_search: number | null | undefined, min_upload_date: number | null | undefined, max_upload_date: number | null | undefined, min_taken_date: number | null | undefined, max_taken_date: number | null | undefined, content_type: number | null | undefined, privacy_filter: number | null | undefined, page: number | null | undefined, per_page: number | null | undefined): Observable<GetMediaByPersonIDReturn> {
			return this.http.get<GetMediaByPersonIDReturn>(this.baseUri + 'rest?method=flickr.people.getPhotos&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&user_id=' + (user_id == null ? '' : encodeURIComponent(user_id)) + '&safe_search=' + safe_search + '&min_upload_date=' + min_upload_date + '&max_upload_date=' + max_upload_date + '&min_taken_date=' + min_taken_date + '&max_taken_date=' + max_taken_date + '&content_type=' + content_type + '&privacy_filter=' + privacy_filter + '&page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Returns next and previous photos in a photo list
		 * Get rest?method=flickr.photolist.getContext
		 * @return {GetPhotolistContextByIDReturn} OK
		 */
		GetPhotolistContextByID(api_key: string, photo_id: string, photolist_id: string): Observable<GetPhotolistContextByIDReturn> {
			return this.http.get<GetPhotolistContextByIDReturn>(this.baseUri + 'rest?method=flickr.photolist.getContext&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&photo_id=' + (photo_id == null ? '' : encodeURIComponent(photo_id)) + '&photolist_id=' + (photolist_id == null ? '' : encodeURIComponent(photolist_id)), {});
		}

		/**
		 * Returns next and previous photos for a photo in a photostream
		 * Get rest?method=flickr.photos.getContext
		 * @return {GetPhotostreamContextByIDReturn} OK
		 */
		GetPhotostreamContextByID(api_key: string, photo_id: string): Observable<GetPhotostreamContextByIDReturn> {
			return this.http.get<GetPhotostreamContextByIDReturn>(this.baseUri + 'rest?method=flickr.photos.getContext&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&photo_id=' + (photo_id == null ? '' : encodeURIComponent(photo_id)), {});
		}

		/**
		 * Retrieves a list of EXIF/TIFF/GPS tags for a given photo. The calling user must have permission to view the photo.
		 * Get rest?method=flickr.photos.getExif
		 * @return {GetPhotoExifByIDReturn} OK
		 */
		GetPhotoExifByID(api_key: string, photo_id: string, secret: string | null | undefined): Observable<GetPhotoExifByIDReturn> {
			return this.http.get<GetPhotoExifByIDReturn>(this.baseUri + 'rest?method=flickr.photos.getExif&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&photo_id=' + (photo_id == null ? '' : encodeURIComponent(photo_id)) + '&secret=' + (secret == null ? '' : encodeURIComponent(secret)), {});
		}

		/**
		 * Returns a photo
		 * Get rest?method=flickr.photos.getInfo
		 * @return {GetPhotoByIDReturn} a photo
		 */
		GetPhotoByID(api_key: string, photo_id: string): Observable<GetPhotoByIDReturn> {
			return this.http.get<GetPhotoByIDReturn>(this.baseUri + 'rest?method=flickr.photos.getInfo&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&photo_id=' + (photo_id == null ? '' : encodeURIComponent(photo_id)), {});
		}

		/**
		 * Returns photo sizes
		 * Get rest?method=flickr.photos.getSizes
		 * @return {GetPhotoSizesByIDReturn} Photo sizes
		 */
		GetPhotoSizesByID(api_key: string, photo_id: string): Observable<GetPhotoSizesByIDReturn> {
			return this.http.get<GetPhotoSizesByIDReturn>(this.baseUri + 'rest?method=flickr.photos.getSizes&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&photo_id=' + (photo_id == null ? '' : encodeURIComponent(photo_id)), {});
		}

		/**
		 * Fetches a list of available photo licenses for Flickr
		 * Get rest?method=flickr.photos.licenses.getInfo
		 * @return {GetLicenseByIDReturn} OK
		 */
		GetLicenseByID(api_key: string): Observable<GetLicenseByIDReturn> {
			return this.http.get<GetLicenseByIDReturn>(this.baseUri + 'rest?method=flickr.photos.licenses.getInfo&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)), {});
		}

		/**
		 * Return a list of photos matching some criteria.
		 * Get rest?method=flickr.photos.search
		 * @param {string} text A free text search. Photos who's title, description or tags contain the text will be returned. You can exclude results that match a term by prepending it with a - character.
		 * @param {string} tags A comma-delimited list of tags. Photos with one or more of the tags listed will be returned. You can exclude results that match a term by prepending it with a - character.
		 * @param {string} user_id The NSID of the user who's photo to search. If this parameter isn't passed then everybody's public photos will be searched. A value of "me" will search against the calling user's photos for authenticated calls.
		 * @param {string} min_upload_date Minimum upload date. Photos with an upload date greater than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime.
		 * @param {string} max_upload_date Maximum upload date. Photos with an upload date less than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime.
		 * @param {string} min_taken_date Minimum taken date. Photos with an taken date greater than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp.
		 * @param {string} max_taken_date Maximum taken date. Photos with an taken date less than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp.
		 * @param {string} license The license id for photos (for possible values see the flickr.photos.licenses.getInfo method). Multiple licenses may be comma-separated.
		 * @param {string} sort The order in which to sort returned photos. Deafults to date-posted-desc (unless you are doing a radial geo query, in which case the default sorting is by ascending distance from the point specified). The possible values are:
		 *   date-posted-asc,
		 *   date-posted-desc,
		 *   date-taken-asc,
		 *   date-taken-desc,
		 *   interestingness-desc,
		 *   interestingness-asc, and
		 *   relevance.
		 * @param {number} privacy_filter Return photos only matching a certain privacy level. This only applies when making an authenticated call to view photos you own. Valid values are:,
		 *   1: public photos,
		 *   2: private photos visible to friends,
		 *   3: private photos visible to family,
		 *   4: private photos visible to friends & family,
		 *   5: completely private photos
		 * @param {string} bbox A comma-delimited list of 4 values defining the Bounding Box of the area that will be searched.
		 * @param {string} accuracy Recorded accuracy level of the location information. Current range is 1-16:
		 *   World level is 1
		 *   Country is ~3
		 *   Region is ~6
		 *   City is ~11
		 *   Street is ~16
		 * @param {number} safe_search Safe search setting:
		 *   1: for safe,
		 *   2: for moderate,
		 *   3: for restricted
		 * @param {number} content_type Content Type setting:
		 *   1: photos only.
		 *   2: screenshots only.
		 *   3: 'other' only.
		 *   4: photos and screenshots.
		 *   5: screenshots and 'other'.
		 *   6: photos and 'other'.
		 *   7: photos, screenshots, and 'other' (all).
		 * @param {string} machine_tags Aside from passing in a fully formed machine tag, there is a special syntax for searching on specific properties : Find photos using the 'dc' namespace : "machine_tags" => "dc:" Find photos with a title in the 'dc' namespace : "machine_tags" => "dc:title=" Find photos titled "mr. camera" in the 'dc' namespace : "machine_tags" => "dc:title=\"mr. camera\" Find photos whose value is "mr. camera" : "machine_tags" => "*:*=\"mr. camera\"" Find photos that have a title, in any namespace : "machine_tags" => "*:title=" Find photos that have a title, in any namespace, whose value is "mr. camera" : "machine_tags" => "*:title=\"mr. camera\"" Find photos, in the 'dc' namespace whose value is "mr. camera" : "machine_tags" => "dc:*=\"mr. camera\"" Multiple machine tags may be queried by passing a comma-separated list. The number of machine tags you can pass in a single query depends on the tag mode (AND or OR) that you are querying with. "AND" queries are limited to (16) machine tags. "OR" queries are limited to (8).
		 * @param {string} machine_tag_mode Either 'any' for an OR combination of tags, or 'all' for an AND combination. Defaults to 'any' if not specified.
		 * @param {string} group_id The id of a group who's pool to search. If specified, only matching photos posted to the group's pool will be returned.
		 * @param {string} contacts Search your contacts. Either 'all' or 'ff' for just friends and family. (Experimental)
		 * @param {string} woe_id A 32-bit identifier that uniquely represents spatial entities. (not used if bbox argument is present).
		 * @param {string} place_id A Flickr place id. (not used if bbox argument is present). Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).
		 * @param {string} media Filter results by media type. Possible values are all (default), photos or videos
		 * @param {string} has_geo Any photo that has been geotagged, or if the value is "0" any photo that has not been geotagged. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).
		 * @param {string} geo_context Geo context is a numeric value representing the photo's geotagginess beyond latitude and longitude. For example, you may wish to search for photos that were taken "indoors" or "outdoors". The current list of context IDs is: 0, not defined. 1, indoors. 2, outdoors. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).
		 * @param {string} lat A valid latitude, in decimal format, for doing radial geo queries. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).
		 * @param {string} lon A valid longitude, in decimal format, for doing radial geo queries. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).
		 * @param {number} radius A valid radius used for geo queries, greater than zero and less than 20 miles (or 32 kilometers), for use with point-based geo queries. The default value is 5 (km).
		 * @param {string} radius_units The unit of measure when doing radial geo queries. Valid options are "mi" (miles) and "km" (kilometers). The default is "km".
		 * @param {boolean} is_commons Limit the scope of the search to only photos that are part of the Flickr Commons project. Default is false.
		 * @param {boolean} in_gallery Limit the scope of the search to only photos that are in a gallery? Default is false, search all photos.
		 * @param {boolean} is_getty Limit the scope of the search to only photos that are for sale on Getty. Default is false.
		 * @param {number} per_page Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.
		 * @param {number} page The page of results to return. If this argument is omitted, it defaults to 1.
		 * @return {GetMediaBySearchReturn} OK
		 */
		GetMediaBySearch(api_key: string, text: string | null | undefined, tags: string | null | undefined, user_id: string | null | undefined, min_upload_date: string | null | undefined, max_upload_date: string | null | undefined, min_taken_date: string | null | undefined, max_taken_date: string | null | undefined, license: string | null | undefined, sort: string | null | undefined, privacy_filter: number | null | undefined, bbox: string | null | undefined, accuracy: string | null | undefined, safe_search: number | null | undefined, content_type: number | null | undefined, machine_tags: string | null | undefined, machine_tag_mode: string | null | undefined, group_id: string | null | undefined, contacts: string | null | undefined, woe_id: string | null | undefined, place_id: string | null | undefined, media: string | null | undefined, has_geo: string | null | undefined, geo_context: string | null | undefined, lat: string | null | undefined, lon: string | null | undefined, radius: number | null | undefined, radius_units: string | null | undefined, is_commons: boolean | null | undefined, in_gallery: boolean | null | undefined, is_getty: boolean | null | undefined, per_page: number | null | undefined, page: number | null | undefined): Observable<GetMediaBySearchReturn> {
			return this.http.get<GetMediaBySearchReturn>(this.baseUri + 'rest?method=flickr.photos.search&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&text=' + (text == null ? '' : encodeURIComponent(text)) + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)) + '&user_id=' + (user_id == null ? '' : encodeURIComponent(user_id)) + '&min_upload_date=' + (min_upload_date == null ? '' : encodeURIComponent(min_upload_date)) + '&max_upload_date=' + (max_upload_date == null ? '' : encodeURIComponent(max_upload_date)) + '&min_taken_date=' + (min_taken_date == null ? '' : encodeURIComponent(min_taken_date)) + '&max_taken_date=' + (max_taken_date == null ? '' : encodeURIComponent(max_taken_date)) + '&license=' + (license == null ? '' : encodeURIComponent(license)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&privacy_filter=' + privacy_filter + '&bbox=' + (bbox == null ? '' : encodeURIComponent(bbox)) + '&accuracy=' + (accuracy == null ? '' : encodeURIComponent(accuracy)) + '&safe_search=' + safe_search + '&content_type=' + content_type + '&machine_tags=' + (machine_tags == null ? '' : encodeURIComponent(machine_tags)) + '&machine_tag_mode=' + (machine_tag_mode == null ? '' : encodeURIComponent(machine_tag_mode)) + '&group_id=' + (group_id == null ? '' : encodeURIComponent(group_id)) + '&contacts=' + (contacts == null ? '' : encodeURIComponent(contacts)) + '&woe_id=' + (woe_id == null ? '' : encodeURIComponent(woe_id)) + '&place_id=' + (place_id == null ? '' : encodeURIComponent(place_id)) + '&media=' + (media == null ? '' : encodeURIComponent(media)) + '&has_geo=' + (has_geo == null ? '' : encodeURIComponent(has_geo)) + '&geo_context=' + (geo_context == null ? '' : encodeURIComponent(geo_context)) + '&lat=' + (lat == null ? '' : encodeURIComponent(lat)) + '&lon=' + (lon == null ? '' : encodeURIComponent(lon)) + '&radius=' + radius + '&radius_units=' + (radius_units == null ? '' : encodeURIComponent(radius_units)) + '&is_commons=' + is_commons + '&in_gallery=' + in_gallery + '&is_getty=' + is_getty + '&per_page=' + per_page + '&page=' + page, {});
		}

		/**
		 * Returns next and previous photos for a photo in a set
		 * Get rest?method=flickr.photosets.getContext
		 * @return {GetAlbumContextByIDReturn} OK
		 */
		GetAlbumContextByID(api_key: string, photo_id: string, photoset_id: string | null | undefined): Observable<GetAlbumContextByIDReturn> {
			return this.http.get<GetAlbumContextByIDReturn>(this.baseUri + 'rest?method=flickr.photosets.getContext&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&photo_id=' + (photo_id == null ? '' : encodeURIComponent(photo_id)) + '&photoset_id=' + (photoset_id == null ? '' : encodeURIComponent(photoset_id)), {});
		}

		/**
		 * Returns the albums belonging to the specified user
		 * Get rest?method=flickr.photosets.getList
		 * @return {GetAlbumsByPersonIDReturn} OK
		 */
		GetAlbumsByPersonID(api_key: string, user_id: string, page: number | null | undefined, per_page: number | null | undefined): Observable<GetAlbumsByPersonIDReturn> {
			return this.http.get<GetAlbumsByPersonIDReturn>(this.baseUri + 'rest?method=flickr.photosets.getList&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&user_id=' + (user_id == null ? '' : encodeURIComponent(user_id)) + '&page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Returns a list of photos in an album.
		 * Get rest?method=flickr.photosets.getPhotos
		 * @return {GetAlbumByIDReturn} OK
		 */
		GetAlbumByID(api_key: string, photoset_id: string): Observable<GetAlbumByIDReturn> {
			return this.http.get<GetAlbumByIDReturn>(this.baseUri + 'rest?method=flickr.photosets.getPhotos&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&photoset_id=' + (photoset_id == null ? '' : encodeURIComponent(photoset_id)), {});
		}

		/**
		 * Echos the input parameters back in the response
		 * Get rest?method=flickr.test.echo
		 * @return {EchoReturn} OK
		 */
		Echo(api_key: string, echo: string | null | undefined): Observable<EchoReturn> {
			return this.http.get<EchoReturn>(this.baseUri + 'rest?method=flickr.test.echo&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&echo=' + (echo == null ? '' : encodeURIComponent(echo)), {});
		}
	}

	export interface GetFavoritesContextByIDReturn {
		count?: GetFavoritesContextByIDReturnCount;
		nextphoto?: ContextPhoto;
		prevphoto?: ContextPhoto;
		stat?: string | null;
	}
	export interface GetFavoritesContextByIDReturnFormProperties {
		stat: FormControl<string | null | undefined>,
	}
	export function CreateGetFavoritesContextByIDReturnFormGroup() {
		return new FormGroup<GetFavoritesContextByIDReturnFormProperties>({
			stat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFavoritesContextByIDReturnCount {
		_content?: string | null;
	}
	export interface GetFavoritesContextByIDReturnCountFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreateGetFavoritesContextByIDReturnCountFormGroup() {
		return new FormGroup<GetFavoritesContextByIDReturnCountFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFavoritesByPersonIDReturn {
		page?: number | null;
		pages?: number | null;
		perpage?: number | null;
		photos?: Array<Photo>;
		total?: number | null;
	}
	export interface GetFavoritesByPersonIDReturnFormProperties {
		page: FormControl<number | null | undefined>,
		pages: FormControl<number | null | undefined>,
		perpage: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
	}
	export function CreateGetFavoritesByPersonIDReturnFormGroup() {
		return new FormGroup<GetFavoritesByPersonIDReturnFormProperties>({
			page: new FormControl<number | null | undefined>(undefined),
			pages: new FormControl<number | null | undefined>(undefined),
			perpage: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetGalleryPhotosByIDReturn {
		photos?: Array<Photo>;
	}
	export interface GetGalleryPhotosByIDReturnFormProperties {
	}
	export function CreateGetGalleryPhotosByIDReturnFormGroup() {
		return new FormGroup<GetGalleryPhotosByIDReturnFormProperties>({
		});

	}

	export interface GetGroupTopicRepliesByIDReturn {
		reply?: TopicReply;
		stat?: string | null;
	}
	export interface GetGroupTopicRepliesByIDReturnFormProperties {
		stat: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupTopicRepliesByIDReturnFormGroup() {
		return new FormGroup<GetGroupTopicRepliesByIDReturnFormProperties>({
			stat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGroupTopicByIDReturn {
		stat?: string | null;
		topic?: Topic;
	}
	export interface GetGroupTopicByIDReturnFormProperties {
		stat: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupTopicByIDReturnFormGroup() {
		return new FormGroup<GetGroupTopicByIDReturnFormProperties>({
			stat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGroupDiscussionsByIDReturn {
		iconfarm?: number | null;
		iconserver?: number | null;
		ispoolmoderated?: boolean | null;
		lang?: string | null;
		members?: number | null;
		name?: string | null;
		page?: number | null;
		pages?: number | null;
		per_page?: number | null;
		privacy?: number | null;
		topics?: Array<Topic>;
		total?: number | null;
	}
	export interface GetGroupDiscussionsByIDReturnFormProperties {
		iconfarm: FormControl<number | null | undefined>,
		iconserver: FormControl<number | null | undefined>,
		ispoolmoderated: FormControl<boolean | null | undefined>,
		lang: FormControl<string | null | undefined>,
		members: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		pages: FormControl<number | null | undefined>,
		per_page: FormControl<number | null | undefined>,
		privacy: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
	}
	export function CreateGetGroupDiscussionsByIDReturnFormGroup() {
		return new FormGroup<GetGroupDiscussionsByIDReturnFormProperties>({
			iconfarm: new FormControl<number | null | undefined>(undefined),
			iconserver: new FormControl<number | null | undefined>(undefined),
			ispoolmoderated: new FormControl<boolean | null | undefined>(undefined),
			lang: new FormControl<string | null | undefined>(undefined),
			members: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			pages: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			privacy: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetGroupByIDReturn {
		group?: Group;
		stat?: string | null;
	}
	export interface GetGroupByIDReturnFormProperties {
		stat: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupByIDReturnFormGroup() {
		return new FormGroup<GetGroupByIDReturnFormProperties>({
			stat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PublicGetByApi_keyAndPhoto_idAndGroup_idReturn {
		count?: PublicGetByApi_keyAndPhoto_idAndGroup_idReturnCount;
		nextphoto?: ContextPhoto;
		prevphoto?: ContextPhoto;
		stat?: string | null;
	}
	export interface PublicGetByApi_keyAndPhoto_idAndGroup_idReturnFormProperties {
		stat: FormControl<string | null | undefined>,
	}
	export function CreatePublicGetByApi_keyAndPhoto_idAndGroup_idReturnFormGroup() {
		return new FormGroup<PublicGetByApi_keyAndPhoto_idAndGroup_idReturnFormProperties>({
			stat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PublicGetByApi_keyAndPhoto_idAndGroup_idReturnCount {
		_content?: string | null;
	}
	export interface PublicGetByApi_keyAndPhoto_idAndGroup_idReturnCountFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreatePublicGetByApi_keyAndPhoto_idAndGroup_idReturnCountFormGroup() {
		return new FormGroup<PublicGetByApi_keyAndPhoto_idAndGroup_idReturnCountFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGroupPhotosByIDReturn {
		photos?: Array<Photo>;
	}
	export interface GetGroupPhotosByIDReturnFormProperties {
	}
	export function CreateGetGroupPhotosByIDReturnFormGroup() {
		return new FormGroup<GetGroupPhotosByIDReturnFormProperties>({
		});

	}

	export interface GetPersonByIDReturn {
		person?: Person;
		stat?: string | null;
	}
	export interface GetPersonByIDReturnFormProperties {
		stat: FormControl<string | null | undefined>,
	}
	export function CreateGetPersonByIDReturnFormGroup() {
		return new FormGroup<GetPersonByIDReturnFormProperties>({
			stat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMediaByPersonIDReturn {
		page?: number | null;
		pages?: number | null;
		perpage?: number | null;
		photos?: Array<Photo>;
		total?: number | null;
	}
	export interface GetMediaByPersonIDReturnFormProperties {
		page: FormControl<number | null | undefined>,
		pages: FormControl<number | null | undefined>,
		perpage: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
	}
	export function CreateGetMediaByPersonIDReturnFormGroup() {
		return new FormGroup<GetMediaByPersonIDReturnFormProperties>({
			page: new FormControl<number | null | undefined>(undefined),
			pages: new FormControl<number | null | undefined>(undefined),
			perpage: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetPhotolistContextByIDReturn {
		count?: GetPhotolistContextByIDReturnCount;
		nextphoto?: ContextPhoto;
		prevphoto?: ContextPhoto;
		stat?: string | null;
	}
	export interface GetPhotolistContextByIDReturnFormProperties {
		stat: FormControl<string | null | undefined>,
	}
	export function CreateGetPhotolistContextByIDReturnFormGroup() {
		return new FormGroup<GetPhotolistContextByIDReturnFormProperties>({
			stat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPhotolistContextByIDReturnCount {
		_content?: string | null;
	}
	export interface GetPhotolistContextByIDReturnCountFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreateGetPhotolistContextByIDReturnCountFormGroup() {
		return new FormGroup<GetPhotolistContextByIDReturnCountFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPhotostreamContextByIDReturn {
		count?: GetPhotostreamContextByIDReturnCount;
		nextphoto?: ContextPhoto;
		prevphoto?: ContextPhoto;
		stat?: string | null;
	}
	export interface GetPhotostreamContextByIDReturnFormProperties {
		stat: FormControl<string | null | undefined>,
	}
	export function CreateGetPhotostreamContextByIDReturnFormGroup() {
		return new FormGroup<GetPhotostreamContextByIDReturnFormProperties>({
			stat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPhotostreamContextByIDReturnCount {
		_content?: string | null;
	}
	export interface GetPhotostreamContextByIDReturnCountFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreateGetPhotostreamContextByIDReturnCountFormGroup() {
		return new FormGroup<GetPhotostreamContextByIDReturnCountFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPhotoExifByIDReturn {
		photo?: GetPhotoExifByIDReturnPhoto;
		stat?: string | null;
	}
	export interface GetPhotoExifByIDReturnFormProperties {
		stat: FormControl<string | null | undefined>,
	}
	export function CreateGetPhotoExifByIDReturnFormGroup() {
		return new FormGroup<GetPhotoExifByIDReturnFormProperties>({
			stat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPhotoExifByIDReturnPhoto {
		camera?: string | null;
		GetPhotoExifByIDReturnPhotoExif?: Array<GetPhotoExifByIDReturnPhotoExif>;
		farm?: string | null;
		id?: string | null;
		secret?: string | null;
		server?: string | null;
	}
	export interface GetPhotoExifByIDReturnPhotoFormProperties {
		camera: FormControl<string | null | undefined>,
		farm: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		secret: FormControl<string | null | undefined>,
		server: FormControl<string | null | undefined>,
	}
	export function CreateGetPhotoExifByIDReturnPhotoFormGroup() {
		return new FormGroup<GetPhotoExifByIDReturnPhotoFormProperties>({
			camera: new FormControl<string | null | undefined>(undefined),
			farm: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPhotoExifByIDReturnPhotoExif {
		label?: string | null;
		raw?: GetPhotoExifByIDReturnPhotoExifRaw;
		tag?: string | null;
		tagspace?: string | null;
		tagspaceid?: string | null;
	}
	export interface GetPhotoExifByIDReturnPhotoExifFormProperties {
		label: FormControl<string | null | undefined>,
		tag: FormControl<string | null | undefined>,
		tagspace: FormControl<string | null | undefined>,
		tagspaceid: FormControl<string | null | undefined>,
	}
	export function CreateGetPhotoExifByIDReturnPhotoExifFormGroup() {
		return new FormGroup<GetPhotoExifByIDReturnPhotoExifFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
			tagspace: new FormControl<string | null | undefined>(undefined),
			tagspaceid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPhotoExifByIDReturnPhotoExifRaw {
		_content?: string | null;
	}
	export interface GetPhotoExifByIDReturnPhotoExifRawFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreateGetPhotoExifByIDReturnPhotoExifRawFormGroup() {
		return new FormGroup<GetPhotoExifByIDReturnPhotoExifRawFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPhotoByIDReturn {
		photo?: Photo;
		stat?: string | null;
	}
	export interface GetPhotoByIDReturnFormProperties {
		stat: FormControl<string | null | undefined>,
	}
	export function CreateGetPhotoByIDReturnFormGroup() {
		return new FormGroup<GetPhotoByIDReturnFormProperties>({
			stat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPhotoSizesByIDReturn {
		sizes?: GetPhotoSizesByIDReturnSizes;
		stat?: string | null;
	}
	export interface GetPhotoSizesByIDReturnFormProperties {
		stat: FormControl<string | null | undefined>,
	}
	export function CreateGetPhotoSizesByIDReturnFormGroup() {
		return new FormGroup<GetPhotoSizesByIDReturnFormProperties>({
			stat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPhotoSizesByIDReturnSizes {
		canblog?: number | null;
		candownload?: number | null;
		canprint?: number | null;
		sizes?: Array<Size>;
	}
	export interface GetPhotoSizesByIDReturnSizesFormProperties {
		canblog: FormControl<number | null | undefined>,
		candownload: FormControl<number | null | undefined>,
		canprint: FormControl<number | null | undefined>,
	}
	export function CreateGetPhotoSizesByIDReturnSizesFormGroup() {
		return new FormGroup<GetPhotoSizesByIDReturnSizesFormProperties>({
			canblog: new FormControl<number | null | undefined>(undefined),
			candownload: new FormControl<number | null | undefined>(undefined),
			canprint: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetLicenseByIDReturn {
		licenses?: GetLicenseByIDReturnLicenses;
		stat?: string | null;
	}
	export interface GetLicenseByIDReturnFormProperties {
		stat: FormControl<string | null | undefined>,
	}
	export function CreateGetLicenseByIDReturnFormGroup() {
		return new FormGroup<GetLicenseByIDReturnFormProperties>({
			stat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLicenseByIDReturnLicenses {
		GetLicenseByIDReturnLicensesLicense?: Array<GetLicenseByIDReturnLicensesLicense>;
	}
	export interface GetLicenseByIDReturnLicensesFormProperties {
	}
	export function CreateGetLicenseByIDReturnLicensesFormGroup() {
		return new FormGroup<GetLicenseByIDReturnLicensesFormProperties>({
		});

	}

	export interface GetLicenseByIDReturnLicensesLicense {
		id?: number | null;
		name?: string | null;
		url?: string | null;
	}
	export interface GetLicenseByIDReturnLicensesLicenseFormProperties {
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateGetLicenseByIDReturnLicensesLicenseFormGroup() {
		return new FormGroup<GetLicenseByIDReturnLicensesLicenseFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMediaBySearchReturn {
		page?: number | null;
		pages?: number | null;
		perpage?: number | null;
		photos?: Array<Photo>;
		total?: number | null;
	}
	export interface GetMediaBySearchReturnFormProperties {
		page: FormControl<number | null | undefined>,
		pages: FormControl<number | null | undefined>,
		perpage: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
	}
	export function CreateGetMediaBySearchReturnFormGroup() {
		return new FormGroup<GetMediaBySearchReturnFormProperties>({
			page: new FormControl<number | null | undefined>(undefined),
			pages: new FormControl<number | null | undefined>(undefined),
			perpage: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAlbumContextByIDReturn {
		count?: GetAlbumContextByIDReturnCount;
		nextphoto?: ContextPhoto;
		prevphoto?: ContextPhoto;
		stat?: string | null;
	}
	export interface GetAlbumContextByIDReturnFormProperties {
		stat: FormControl<string | null | undefined>,
	}
	export function CreateGetAlbumContextByIDReturnFormGroup() {
		return new FormGroup<GetAlbumContextByIDReturnFormProperties>({
			stat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAlbumContextByIDReturnCount {
		_content?: string | null;
	}
	export interface GetAlbumContextByIDReturnCountFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreateGetAlbumContextByIDReturnCountFormGroup() {
		return new FormGroup<GetAlbumContextByIDReturnCountFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAlbumsByPersonIDReturn {
		page?: number | null;
		pages?: number | null;
		perpage?: number | null;
		photosets?: Array<Album>;
		total?: number | null;
	}
	export interface GetAlbumsByPersonIDReturnFormProperties {
		page: FormControl<number | null | undefined>,
		pages: FormControl<number | null | undefined>,
		perpage: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
	}
	export function CreateGetAlbumsByPersonIDReturnFormGroup() {
		return new FormGroup<GetAlbumsByPersonIDReturnFormProperties>({
			page: new FormControl<number | null | undefined>(undefined),
			pages: new FormControl<number | null | undefined>(undefined),
			perpage: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAlbumByIDReturn {
		photoset?: Array<Photo>;
	}
	export interface GetAlbumByIDReturnFormProperties {
	}
	export function CreateGetAlbumByIDReturnFormGroup() {
		return new FormGroup<GetAlbumByIDReturnFormProperties>({
		});

	}

	export interface EchoReturn {
		echo?: EchoReturnEcho;
	}
	export interface EchoReturnFormProperties {
	}
	export function CreateEchoReturnFormGroup() {
		return new FormGroup<EchoReturnFormProperties>({
		});

	}

	export interface EchoReturnEcho {
		_content?: string | null;
	}
	export interface EchoReturnEchoFormProperties {
		_content: FormControl<string | null | undefined>,
	}
	export function CreateEchoReturnEchoFormGroup() {
		return new FormGroup<EchoReturnEchoFormProperties>({
			_content: new FormControl<string | null | undefined>(undefined),
		});

	}

}

