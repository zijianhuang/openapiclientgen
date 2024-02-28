import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CaptionData {

		/** Caption creation UNIX timestamp */
		created_time?: string | null;
		from?: UserShortInfo;

		/** ID of this caption */
		id?: string | null;

		/** Caption text */
		text?: string | null;
	}
	export interface CaptionDataFormProperties {

		/** Caption creation UNIX timestamp */
		created_time: FormControl<string | null | undefined>,

		/** ID of this caption */
		id: FormControl<string | null | undefined>,

		/** Caption text */
		text: FormControl<string | null | undefined>,
	}
	export function CreateCaptionDataFormGroup() {
		return new FormGroup<CaptionDataFormProperties>({
			created_time: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserShortInfo {

		/** User full name */
		full_name?: string | null;

		/** User ID */
		id?: string | null;

		/** URL to user profile picture */
		profile_picture?: string | null;

		/** User name, nickname */
		username?: string | null;
	}
	export interface UserShortInfoFormProperties {

		/** User full name */
		full_name: FormControl<string | null | undefined>,

		/** User ID */
		id: FormControl<string | null | undefined>,

		/** URL to user profile picture */
		profile_picture: FormControl<string | null | undefined>,

		/** User name, nickname */
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserShortInfoFormGroup() {
		return new FormGroup<UserShortInfoFormProperties>({
			full_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			profile_picture: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentEntry {

		/** Comment creation UNIX timestamp */
		created_time?: string | null;
		from?: UserShortInfo;

		/** ID of this comment */
		id?: string | null;

		/** Text of the comment */
		text?: string | null;
	}
	export interface CommentEntryFormProperties {

		/** Comment creation UNIX timestamp */
		created_time: FormControl<string | null | undefined>,

		/** ID of this comment */
		id: FormControl<string | null | undefined>,

		/** Text of the comment */
		text: FormControl<string | null | undefined>,
	}
	export function CreateCommentEntryFormGroup() {
		return new FormGroup<CommentEntryFormProperties>({
			created_time: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentsCollection {

		/**
		 * Nember of comments available, data does not necessary contain all comments
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/** Collection of comment entries; **warning:** deprecated for Apps [created on or after Nov 17, 2015](http://instagram.com/developer/changelog/) */
		data?: Array<CommentEntry>;
	}
	export interface CommentsCollectionFormProperties {

		/**
		 * Nember of comments available, data does not necessary contain all comments
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
	}
	export function CreateCommentsCollectionFormGroup() {
		return new FormGroup<CommentsCollectionFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CommentsResponse {

		/** Collection of comments */
		data?: Array<CommentEntry>;
		meta?: MetaData;
	}
	export interface CommentsResponseFormProperties {
	}
	export function CreateCommentsResponseFormGroup() {
		return new FormGroup<CommentsResponseFormProperties>({
		});

	}

	export interface MetaData {

		/**
		 * HTTP result code
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;
	}
	export interface MetaDataFormProperties {

		/**
		 * HTTP result code
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,
	}
	export function CreateMetaDataFormGroup() {
		return new FormGroup<MetaDataFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CursorPaginationInfo {

		/** The cursor ID of the next page */
		next_cursor?: string | null;

		/** URL to retrieve next page of entries */
		next_url?: string | null;
	}
	export interface CursorPaginationInfoFormProperties {

		/** The cursor ID of the next page */
		next_cursor: FormControl<string | null | undefined>,

		/** URL to retrieve next page of entries */
		next_url: FormControl<string | null | undefined>,
	}
	export function CreateCursorPaginationInfoFormGroup() {
		return new FormGroup<CursorPaginationInfoFormProperties>({
			next_cursor: new FormControl<string | null | undefined>(undefined),
			next_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IdPaginationInfo {

		/** The max ID of the next page */
		next_max_id?: string | null;

		/** URL to retrieve next page of entries */
		next_url?: string | null;
	}
	export interface IdPaginationInfoFormProperties {

		/** The max ID of the next page */
		next_max_id: FormControl<string | null | undefined>,

		/** URL to retrieve next page of entries */
		next_url: FormControl<string | null | undefined>,
	}
	export function CreateIdPaginationInfoFormGroup() {
		return new FormGroup<IdPaginationInfoFormProperties>({
			next_max_id: new FormControl<string | null | undefined>(undefined),
			next_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImageInfo {

		/**
		 * Image/video height in pixels
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/** URL of the image/video resource */
		url?: string | null;

		/**
		 * Image/video width in pixels
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}
	export interface ImageInfoFormProperties {

		/**
		 * Image/video height in pixels
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/** URL of the image/video resource */
		url: FormControl<string | null | undefined>,

		/**
		 * Image/video width in pixels
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateImageInfoFormGroup() {
		return new FormGroup<ImageInfoFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ImagesData {
		low_resolution?: ImageInfo;
		standard_resolution?: ImageInfo;
		thumbnail?: ImageInfo;
	}
	export interface ImagesDataFormProperties {
	}
	export function CreateImagesDataFormGroup() {
		return new FormGroup<ImagesDataFormProperties>({
		});

	}

	export interface LikesCollection {

		/**
		 * Nember of likes available, data does not necessary contain all comments
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/** Collection of users who liked; **warning:** deprecated for Apps [created on or after Nov 17, 2015](http://instagram.com/developer/changelog/) */
		data?: Array<UserShortInfo>;
	}
	export interface LikesCollectionFormProperties {

		/**
		 * Nember of likes available, data does not necessary contain all comments
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
	}
	export function CreateLikesCollectionFormGroup() {
		return new FormGroup<LikesCollectionFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LocationInfo {

		/** ID of this location (in some responses it has a type of 'integer') */
		id?: string | null;

		/**
		 * Location latitude
		 * Type: double
		 */
		latitude?: number | null;

		/**
		 * Location longitude
		 * Type: double
		 */
		longitude?: number | null;

		/** Location name */
		name?: string | null;
	}
	export interface LocationInfoFormProperties {

		/** ID of this location (in some responses it has a type of 'integer') */
		id: FormControl<string | null | undefined>,

		/**
		 * Location latitude
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Location longitude
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,

		/** Location name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationInfoFormGroup() {
		return new FormGroup<LocationInfoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LocationInfoResponse {
		data?: LocationInfo;
		meta?: MetaData;
	}
	export interface LocationInfoResponseFormProperties {
	}
	export function CreateLocationInfoResponseFormGroup() {
		return new FormGroup<LocationInfoResponseFormProperties>({
		});

	}

	export interface LocationSearchResponse {

		/** List of found locations */
		data?: Array<LocationInfo>;
		meta?: MetaData;
	}
	export interface LocationSearchResponseFormProperties {
	}
	export function CreateLocationSearchResponseFormGroup() {
		return new FormGroup<LocationSearchResponseFormProperties>({
		});

	}

	export interface MediaEntry {

		/** ??? Unknown ??? */
		attribution?: string | null;
		caption?: CaptionData;
		comments?: CommentsCollection;

		/** Media creation UNIX timestamp */
		created_time?: string | null;

		/** Filter of this media entry */
		filter?: string | null;

		/** ID of a media entry */
		id?: string | null;
		images?: ImagesData;
		likes?: LikesCollection;

		/** Fixed URL of this media entry */
		link?: string | null;
		location?: LocationInfo;

		/** List of tags assigned to this media */
		tags?: Array<string>;

		/** Type of this media entry */
		type?: MediaEntryType | null;
		user?: UserShortInfo;

		/** Indicates whether authenticated user has liked this media or not */
		user_has_liked?: boolean | null;

		/** Users located on this media entry */
		users_in_photo?: Array<UserInPhoto>;
		videos?: VideosData;
	}
	export interface MediaEntryFormProperties {

		/** ??? Unknown ??? */
		attribution: FormControl<string | null | undefined>,

		/** Media creation UNIX timestamp */
		created_time: FormControl<string | null | undefined>,

		/** Filter of this media entry */
		filter: FormControl<string | null | undefined>,

		/** ID of a media entry */
		id: FormControl<string | null | undefined>,

		/** Fixed URL of this media entry */
		link: FormControl<string | null | undefined>,

		/** Type of this media entry */
		type: FormControl<MediaEntryType | null | undefined>,

		/** Indicates whether authenticated user has liked this media or not */
		user_has_liked: FormControl<boolean | null | undefined>,
	}
	export function CreateMediaEntryFormGroup() {
		return new FormGroup<MediaEntryFormProperties>({
			attribution: new FormControl<string | null | undefined>(undefined),
			created_time: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<MediaEntryType | null | undefined>(undefined),
			user_has_liked: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum MediaEntryType { image = 0, video = 1 }

	export interface UserInPhoto {
		position?: Position;
		user?: UserShortInfo;
	}
	export interface UserInPhotoFormProperties {
	}
	export function CreateUserInPhotoFormGroup() {
		return new FormGroup<UserInPhotoFormProperties>({
		});

	}

	export interface Position {

		/**
		 * X position (horizontal)
		 * Type: float
		 */
		x?: number | null;

		/**
		 * Y position (vertical)
		 * Type: float
		 */
		y?: number | null;
	}
	export interface PositionFormProperties {

		/**
		 * X position (horizontal)
		 * Type: float
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Y position (vertical)
		 * Type: float
		 */
		y: FormControl<number | null | undefined>,
	}
	export function CreatePositionFormGroup() {
		return new FormGroup<PositionFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface VideosData {
		low_resolution?: ImageInfo;
		standard_resolution?: ImageInfo;
	}
	export interface VideosDataFormProperties {
	}
	export function CreateVideosDataFormGroup() {
		return new FormGroup<VideosDataFormProperties>({
		});

	}

	export interface MediaEntryResponse {
		data?: MediaEntry;
		meta?: MetaData;
	}
	export interface MediaEntryResponseFormProperties {
	}
	export function CreateMediaEntryResponseFormGroup() {
		return new FormGroup<MediaEntryResponseFormProperties>({
		});

	}

	export interface MediaListResponse {

		/** List of media entries */
		data?: Array<MediaEntry>;
		meta?: MetaData;
		pagination?: IdPaginationInfo;
	}
	export interface MediaListResponseFormProperties {
	}
	export function CreateMediaListResponseFormGroup() {
		return new FormGroup<MediaListResponseFormProperties>({
		});

	}

	export interface MediaSearchResponse {

		/** Found media entries; some end-points do not return likes informtaion */
		data?: Array<MediaEntry>;
		meta?: MetaData;
	}
	export interface MediaSearchResponseFormProperties {
	}
	export function CreateMediaSearchResponseFormGroup() {
		return new FormGroup<MediaSearchResponseFormProperties>({
		});

	}

	export interface RelationshipInfo {

		/** Status of incoming relationship */
		incoming_status?: RelationshipInfoIncoming_status | null;

		/** Status of outgoing relationship */
		outgoing_status?: RelationshipInfoOutgoing_status | null;

		/** Indicates whether target user is private or not */
		target_user_is_private?: boolean | null;
	}
	export interface RelationshipInfoFormProperties {

		/** Status of incoming relationship */
		incoming_status: FormControl<RelationshipInfoIncoming_status | null | undefined>,

		/** Status of outgoing relationship */
		outgoing_status: FormControl<RelationshipInfoOutgoing_status | null | undefined>,

		/** Indicates whether target user is private or not */
		target_user_is_private: FormControl<boolean | null | undefined>,
	}
	export function CreateRelationshipInfoFormGroup() {
		return new FormGroup<RelationshipInfoFormProperties>({
			incoming_status: new FormControl<RelationshipInfoIncoming_status | null | undefined>(undefined),
			outgoing_status: new FormControl<RelationshipInfoOutgoing_status | null | undefined>(undefined),
			target_user_is_private: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum RelationshipInfoIncoming_status { none = 0, followed_by = 1, requested_by = 2 }

	export enum RelationshipInfoOutgoing_status { none = 0, follows = 1, requested = 2 }

	export interface RelationshipPostResponse {
		data?: RelationshipStatus;
		meta?: MetaData;
	}
	export interface RelationshipPostResponseFormProperties {
	}
	export function CreateRelationshipPostResponseFormGroup() {
		return new FormGroup<RelationshipPostResponseFormProperties>({
		});

	}

	export interface RelationshipStatus {

		/** Status of outgoing relationship */
		outgoing_status?: RelationshipInfoOutgoing_status | null;
	}
	export interface RelationshipStatusFormProperties {

		/** Status of outgoing relationship */
		outgoing_status: FormControl<RelationshipInfoOutgoing_status | null | undefined>,
	}
	export function CreateRelationshipStatusFormGroup() {
		return new FormGroup<RelationshipStatusFormProperties>({
			outgoing_status: new FormControl<RelationshipInfoOutgoing_status | null | undefined>(undefined),
		});

	}

	export interface RelationshipResponse {
		data?: RelationshipInfo;
		meta?: MetaData;
	}
	export interface RelationshipResponseFormProperties {
	}
	export function CreateRelationshipResponseFormGroup() {
		return new FormGroup<RelationshipResponseFormProperties>({
		});

	}

	export interface StatusResponse {

		/** No data - 'null' */
		data?: string | null;
		meta?: MetaData;
	}
	export interface StatusResponseFormProperties {

		/** No data - 'null' */
		data: FormControl<string | null | undefined>,
	}
	export function CreateStatusResponseFormGroup() {
		return new FormGroup<StatusResponseFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagInfo {

		/**
		 * Overall number of media entries taged with this name
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		media_count?: string | null;

		/** Tag name */
		name?: string | null;
	}
	export interface TagInfoFormProperties {

		/**
		 * Overall number of media entries taged with this name
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		media_count: FormControl<string | null | undefined>,

		/** Tag name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTagInfoFormGroup() {
		return new FormGroup<TagInfoFormProperties>({
			media_count: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagInfoResponse {
		data?: TagInfo;
		meta?: MetaData;
	}
	export interface TagInfoResponseFormProperties {
	}
	export function CreateTagInfoResponseFormGroup() {
		return new FormGroup<TagInfoResponseFormProperties>({
		});

	}

	export interface TagMediaListResponse {

		/** List of media entries with this tag */
		data?: Array<MediaEntry>;
		meta?: MetaData;
		pagination?: TagPaginationInfo;
	}
	export interface TagMediaListResponseFormProperties {
	}
	export function CreateTagMediaListResponseFormGroup() {
		return new FormGroup<TagMediaListResponseFormProperties>({
		});

	}

	export interface TagPaginationInfo {

		/** The deprication warning, if information is available */
		deprecation_warning?: string | null;

		/** The min ID of a tag for the next page */
		min_tag_id?: string | null;

		/** Depricated. Use min_tag_id instead */
		next_max_id?: string | null;

		/** The max ID of a tag for the next page */
		next_max_tag_id?: string | null;

		/** Depricated. Use max_tag_id instead */
		next_min_id?: string | null;

		/** URL to retrieve next page of entries */
		next_url?: string | null;
	}
	export interface TagPaginationInfoFormProperties {

		/** The deprication warning, if information is available */
		deprecation_warning: FormControl<string | null | undefined>,

		/** The min ID of a tag for the next page */
		min_tag_id: FormControl<string | null | undefined>,

		/** Depricated. Use min_tag_id instead */
		next_max_id: FormControl<string | null | undefined>,

		/** The max ID of a tag for the next page */
		next_max_tag_id: FormControl<string | null | undefined>,

		/** Depricated. Use max_tag_id instead */
		next_min_id: FormControl<string | null | undefined>,

		/** URL to retrieve next page of entries */
		next_url: FormControl<string | null | undefined>,
	}
	export function CreateTagPaginationInfoFormGroup() {
		return new FormGroup<TagPaginationInfoFormProperties>({
			deprecation_warning: new FormControl<string | null | undefined>(undefined),
			min_tag_id: new FormControl<string | null | undefined>(undefined),
			next_max_id: new FormControl<string | null | undefined>(undefined),
			next_max_tag_id: new FormControl<string | null | undefined>(undefined),
			next_min_id: new FormControl<string | null | undefined>(undefined),
			next_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagSearchResponse {

		/** List of found tags with brief statistics */
		data?: Array<TagInfo>;
		meta?: MetaData;
	}
	export interface TagSearchResponseFormProperties {
	}
	export function CreateTagSearchResponseFormGroup() {
		return new FormGroup<TagSearchResponseFormProperties>({
		});

	}

	export interface UserCounts {

		/**
		 * Number of followers of this user
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		followed_by?: number | null;

		/**
		 * Number of users followed by this user
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		follows?: number | null;

		/**
		 * Number of user media
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		media?: number | null;
	}
	export interface UserCountsFormProperties {

		/**
		 * Number of followers of this user
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		followed_by: FormControl<number | null | undefined>,

		/**
		 * Number of users followed by this user
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		follows: FormControl<number | null | undefined>,

		/**
		 * Number of user media
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		media: FormControl<number | null | undefined>,
	}
	export function CreateUserCountsFormGroup() {
		return new FormGroup<UserCountsFormProperties>({
			followed_by: new FormControl<number | null | undefined>(undefined),
			follows: new FormControl<number | null | undefined>(undefined),
			media: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UserInfo {

		/** User biography */
		bio?: string | null;
		counts?: UserCounts;

		/** User full name */
		full_name?: string | null;

		/** User ID */
		id?: string | null;

		/** URL to user profile picture */
		profile_picture?: string | null;

		/** User name, nickname */
		username?: string | null;

		/** URL to user web-site */
		website?: string | null;
	}
	export interface UserInfoFormProperties {

		/** User biography */
		bio: FormControl<string | null | undefined>,

		/** User full name */
		full_name: FormControl<string | null | undefined>,

		/** User ID */
		id: FormControl<string | null | undefined>,

		/** URL to user profile picture */
		profile_picture: FormControl<string | null | undefined>,

		/** User name, nickname */
		username: FormControl<string | null | undefined>,

		/** URL to user web-site */
		website: FormControl<string | null | undefined>,
	}
	export function CreateUserInfoFormGroup() {
		return new FormGroup<UserInfoFormProperties>({
			bio: new FormControl<string | null | undefined>(undefined),
			full_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			profile_picture: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserResponse {
		data?: UserInfo;
		meta?: MetaData;
	}
	export interface UserResponseFormProperties {
	}
	export function CreateUserResponseFormGroup() {
		return new FormGroup<UserResponseFormProperties>({
		});

	}

	export interface UsersInfoResponse {

		/** User short information entries */
		data?: Array<UserShortInfo>;
		meta?: MetaData;
	}
	export interface UsersInfoResponseFormProperties {
	}
	export function CreateUsersInfoResponseFormGroup() {
		return new FormGroup<UsersInfoResponseFormProperties>({
		});

	}

	export interface UsersPagingResponse {

		/** List of user short information entries */
		data?: Array<UserShortInfo>;
		meta?: MetaData;
		pagination?: CursorPaginationInfo;
	}
	export interface UsersPagingResponseFormProperties {
	}
	export function CreateUsersPagingResponseFormGroup() {
		return new FormGroup<UsersPagingResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get recent media from a custom geo-id.
		 * Get recent media from a geography subscription that you created.
		 * **Note:** You can only access Geographies that were explicitly created by your OAuth client. Check the
		 * Geography Subscriptions section of the [real-time updates page](https://instagram.com/developer/realtime/).
		 * When you create a subscription to some geography that you define, you will be returned a unique `geo-id` that
		 * can be used in this query. To backfill photos from the location covered by this geography, use the
		 * [media search endpoint](https://instagram.com/developer/endpoints/media/).
		 * **Warning:** [Deprecated](http://instagram.com/developer/changelog/) for Apps created **on or after** Nov 17, 2015
		 * Get geographies/{geo_id}/media/recent
		 * @param {string} geo_id The geography ID.
		 * @param {number} count Max number of media to return.
		 * @param {string} min_id Return media before this `min_id`.
		 * @return {MediaListResponse} List of recent media entries from a geography subscription.
		 */
		Geographies_geo_idMediaRecentGetByCountAndMin_id(geo_id: string, count: number | null | undefined, min_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<MediaListResponse> {
			return this.http.get<MediaListResponse>(this.baseUri + 'geographies/{geo_id}/media/recent?count=' + count + '&min_id=' + (min_id == null ? '' : encodeURIComponent(min_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search for a location by geographic coordinate.
		 * Search for a location by geographic coordinate.
		 * Get locations/search
		 * @param {number} distance Default is 1000m (distance=1000), max distance is 5000.
		 * @param {string} facebook_places_id Returns a location mapped off of a Facebook places id. If used, a Foursquare id and `lat`, `lng` are not required.
		 * @param {string} foursquare_id Returns a location mapped off of a foursquare v1 api location id. If used, you are not required to use
		 * `lat` and `lng`. Note that this method is deprecated; you should use the new foursquare IDs with V2 of their API.
		 * @param {number} lat Latitude of the center search coordinate. If used, `lng` is required.
		 * @param {number} lng Longitude of the center search coordinate. If used, `lat` is required.
		 * @param {string} foursquare_v2_id Returns a location mapped off of a foursquare v2 api location id. If used, you are not required to use
		 * `lat` and `lng`.
		 * @return {LocationSearchResponse} List of found locations.
		 */
		LocationsSearchGetByDistanceAndFacebook_places_idAndFoursquare_idAndLatAndLngAndFoursquare_v2_id(distance: number | null | undefined, facebook_places_id: string | null | undefined, foursquare_id: string | null | undefined, lat: number | null | undefined, lng: number | null | undefined, foursquare_v2_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<LocationSearchResponse> {
			return this.http.get<LocationSearchResponse>(this.baseUri + 'locations/search?distance=' + distance + '&facebook_places_id=' + (facebook_places_id == null ? '' : encodeURIComponent(facebook_places_id)) + '&foursquare_id=' + (foursquare_id == null ? '' : encodeURIComponent(foursquare_id)) + '&lat=' + lat + '&lng=' + lng + '&foursquare_v2_id=' + (foursquare_v2_id == null ? '' : encodeURIComponent(foursquare_v2_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get information about a location.
		 * Get information about a location.
		 * Get locations/{location_id}
		 * @param {string} location_id The location ID.
		 * @return {LocationInfoResponse} Location information response.
		 */
		Locations_location_idGet(location_id: string, headersHandler?: () => HttpHeaders): Observable<LocationInfoResponse> {
			return this.http.get<LocationInfoResponse>(this.baseUri + 'locations/{location_id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a list of recent media objects from a given location.
		 * Get a list of recent media objects from a given location.
		 * Get locations/{location_id}/media/recent
		 * @param {string} location_id The location ID.
		 * @param {string} min_timestamp Return media after this UNIX timestamp.
		 * @param {string} max_timestamp Return media before this UNIX timestamp.
		 * @param {string} min_id Return media before this `min_id`.
		 * @param {string} max_id Return media after this `max_id`.
		 * @return {MediaListResponse} List of media entries from this location.
		 */
		Locations_location_idMediaRecentGetByMin_timestampAndMax_timestampAndMin_idAndMax_id(location_id: string, min_timestamp: string | null | undefined, max_timestamp: string | null | undefined, min_id: string | null | undefined, max_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<MediaListResponse> {
			return this.http.get<MediaListResponse>(this.baseUri + 'locations/{location_id}/media/recent?min_timestamp=' + min_timestamp + '&max_timestamp=' + max_timestamp + '&min_id=' + (min_id == null ? '' : encodeURIComponent(min_id)) + '&max_id=' + (max_id == null ? '' : encodeURIComponent(max_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a list of currently popular media.
		 * Get a list of what media is most popular at the moment. Can return mix of `image` and `video` types.
		 * **Warning:** [Deprecated](http://instagram.com/developer/changelog/) for Apps created **on or after** Nov 17, 2015
		 * Get media/popular
		 * @return {MediaSearchResponse} Found media resources (without likes information).
		 */
		MediaPopularGet(headersHandler?: () => HttpHeaders): Observable<MediaSearchResponse> {
			return this.http.get<MediaSearchResponse>(this.baseUri + 'media/popular', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search for media in a given area.
		 * Search for media in a given area. The default time span is set to 5 days. The time span must not exceed 7 days.
		 * Defaults time stamps cover the last 5 days. Can return mix of `image` and `video` types.
		 * Get media/search
		 * @param {number} lat Latitude of the center search coordinate. If used, `lng` is required.
		 * @param {number} lng Longitude of the center search coordinate. If used, `lat` is required.
		 * @param {string} min_timestamp A unix timestamp. All media returned will be taken later than this timestamp.
		 * @param {string} max_timestamp A unix timestamp. All media returned will be taken earlier than this timestamp.
		 * @param {number} distance Default is 1km (distance=1000), max distance is 5km.
		 * @return {MediaSearchResponse} Found media resources (without likes information) in a given area.
		 */
		MediaSearchGetByLatAndLngAndMin_timestampAndMax_timestampAndDistance(lat: number, lng: number, min_timestamp: string | null | undefined, max_timestamp: string | null | undefined, distance: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<MediaSearchResponse> {
			return this.http.get<MediaSearchResponse>(this.baseUri + 'media/search?lat=' + lat + '&lng=' + lng + '&min_timestamp=' + min_timestamp + '&max_timestamp=' + max_timestamp + '&distance=' + distance, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get information about a media object.
		 * This endpoint returns the same response as `GET /media/{media-id}`.
		 * A media object's shortcode can be found in its shortlink URL. An example shortlink is
		 * `http://instagram.com/p/D/`, its corresponding shortcode is `D`.
		 * Get media/shortcode/{shortcode}
		 * @param {string} shortcode The short code of the media resource.
		 * @return {MediaEntryResponse} Media resource information.
		 */
		MediaShortcode_shortcodeGet(shortcode: string, headersHandler?: () => HttpHeaders): Observable<MediaEntryResponse> {
			return this.http.get<MediaEntryResponse>(this.baseUri + 'media/shortcode/' + (shortcode == null ? '' : encodeURIComponent(shortcode)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get information about a media object.
		 * Get information about a media object. The returned type key will allow you to differentiate between image and
		 * video media.
		 * **Note:** if you authenticate with an OAuth Token, you will receive the user_has_liked key which quickly tells
		 * you whether the current user has liked this media item.
		 * Get media/{media_id}
		 * @param {string} media_id The ID of the media resource.
		 * @return {MediaEntryResponse} Media resource information.
		 */
		Media_media_idGet(media_id: string, headersHandler?: () => HttpHeaders): Observable<MediaEntryResponse> {
			return this.http.get<MediaEntryResponse>(this.baseUri + 'media/{media_id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a list of recent comments on a media object.
		 * Get a list of recent comments on a media object.
		 * Get media/{media_id}/comments
		 * @param {string} media_id The ID of the media resource.
		 * @return {CommentsResponse} List of comments of the media resource.
		 */
		Media_media_idCommentsGet(media_id: string, headersHandler?: () => HttpHeaders): Observable<CommentsResponse> {
			return this.http.get<CommentsResponse>(this.baseUri + 'media/{media_id}/comments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a comment on a media object.
		 * Create a comment on a media object with the following rules:
		 * * The total length of the comment cannot exceed 300 characters.
		 * * The comment cannot contain more than 4 hashtags.
		 * * The comment cannot contain more than 1 URL.
		 * * The comment cannot consist of all capital letters.
		 * Post media/{media_id}/comments
		 * @param {string} media_id The ID of the media resource.
		 * @param {string} text Text to post as a comment on the media object as specified in `media-id`.
		 * @return {StatusResponse} Result of posting a comment.
		 */
		Media_media_idCommentsPostByText(media_id: string, text: string, headersHandler?: () => HttpHeaders): Observable<StatusResponse> {
			return this.http.post<StatusResponse>(this.baseUri + 'media/{media_id}/comments?text=' + (text == null ? '' : encodeURIComponent(text)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Remove a comment.
		 * Remove a comment either on the authenticated user's media object or authored by the authenticated user.
		 * Delete media/{media_id}/comments/{comment_id}
		 * @param {string} media_id The ID of the media resource.
		 * @param {string} comment_id The ID of the comment entry.
		 * @return {StatusResponse} Result of deleting a comment.
		 */
		Media_media_idComments_comment_idDelete(media_id: string, comment_id: string, headersHandler?: () => HttpHeaders): Observable<StatusResponse> {
			return this.http.delete<StatusResponse>(this.baseUri + 'media/{media_id}/comments/{comment_id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a list of users who have liked this media.
		 * Get a list of users who have liked this media.
		 * Get media/{media_id}/likes
		 * @param {string} media_id The ID of the media resource.
		 * @return {UsersInfoResponse} List of users who liked the media resource.
		 */
		Media_media_idLikesGet(media_id: string, headersHandler?: () => HttpHeaders): Observable<UsersInfoResponse> {
			return this.http.get<UsersInfoResponse>(this.baseUri + 'media/{media_id}/likes', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Set a like on this media by the current user.
		 * Set a like on this media by the currently authenticated user.
		 * Post media/{media_id}/likes
		 * @param {string} media_id The ID of the media resource.
		 * @return {StatusResponse} Result of setting a like.
		 */
		Media_media_idLikesPost(media_id: string, headersHandler?: () => HttpHeaders): Observable<StatusResponse> {
			return this.http.post<StatusResponse>(this.baseUri + 'media/{media_id}/likes', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Remove a like on this media by the current user.
		 * Remove a like on this media by the currently authenticated user.
		 * Delete media/{media_id}/likes
		 * @param {string} media_id The ID of the media resource.
		 * @return {StatusResponse} Result of removing a like.
		 */
		Media_media_idLikesDelete(media_id: string, headersHandler?: () => HttpHeaders): Observable<StatusResponse> {
			return this.http.delete<StatusResponse>(this.baseUri + 'media/{media_id}/likes', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search for tags by name.
		 * Search for tags by name.
		 * Get tags/search
		 * @param {string} q A valid tag name without a leading \#. (eg. snowy, nofilter)
		 * @return {TagSearchResponse} List of found tags and their statistics.
		 */
		TagsSearchGetByQ(q: string, headersHandler?: () => HttpHeaders): Observable<TagSearchResponse> {
			return this.http.get<TagSearchResponse>(this.baseUri + 'tags/search?q=' + (q == null ? '' : encodeURIComponent(q)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get information about a tag object.
		 * Get information about a tag object.
		 * Get tags/{tag_name}
		 * @param {string} tag_name The tag name.
		 * @return {TagInfoResponse} Tag information response.
		 */
		Tags_tag_nameGet(tag_name: string, headersHandler?: () => HttpHeaders): Observable<TagInfoResponse> {
			return this.http.get<TagInfoResponse>(this.baseUri + 'tags/{tag_name}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a list of recently tagged media.
		 * Get a list of recently tagged media. Use the `max_tag_id` and `min_tag_id` parameters in the pagination
		 * response to paginate through these objects.
		 * Get tags/{tag_name}/media/recent
		 * @param {string} tag_name The tag name.
		 * @param {number} count Count of tagged media to return.
		 * @param {string} min_tag_id Return media before this `min_tag_id`.
		 * @param {string} max_tag_id Return media after this `max_tag_id`.
		 * @return {TagMediaListResponse} List of media entries with this tag.
		 */
		Tags_tag_nameMediaRecentGetByCountAndMin_tag_idAndMax_tag_id(tag_name: string, count: number | null | undefined, min_tag_id: string | null | undefined, max_tag_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<TagMediaListResponse> {
			return this.http.get<TagMediaListResponse>(this.baseUri + 'tags/{tag_name}/media/recent?count=' + count + '&min_tag_id=' + (min_tag_id == null ? '' : encodeURIComponent(min_tag_id)) + '&max_tag_id=' + (max_tag_id == null ? '' : encodeURIComponent(max_tag_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search for a user by name.
		 * Search for a user by name.
		 * Get users/search
		 * @param {string} q A query string.
		 * @param {number} count Number of users to return.
		 * @return {UsersInfoResponse} List of found users.
		 */
		UsersSearchGetByQAndCount(q: string, count: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<UsersInfoResponse> {
			return this.http.get<UsersInfoResponse>(this.baseUri + 'users/search?q=' + (q == null ? '' : encodeURIComponent(q)) + '&count=' + count, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * See the authenticated user's feed.
		 * See the authenticated user's feed.
		 * **Warning:** [Deprecated](http://instagram.com/developer/changelog/) for Apps created **on or after** Nov 17, 2015
		 * Get users/self/feed
		 * @param {number} count Count of media to return.
		 * @param {string} min_id Return media later than this `min_id`.
		 * @param {string} max_id Return media earlier than this `max_id`.
		 * @return {MediaListResponse} Users feed entries.
		 */
		UsersSelfFeedGetByCountAndMin_idAndMax_id(count: number | null | undefined, min_id: string | null | undefined, max_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<MediaListResponse> {
			return this.http.get<MediaListResponse>(this.baseUri + 'users/self/feed?count=' + count + '&min_id=' + (min_id == null ? '' : encodeURIComponent(min_id)) + '&max_id=' + (max_id == null ? '' : encodeURIComponent(max_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * See the list of media liked by the authenticated user.
		 * See the list of media liked by the authenticated user. Private media is returned as long as the authenticated
		 * user has permission to view that media. Liked media lists are only available for the currently authenticated
		 * user.
		 * Get users/self/media/liked
		 * @param {number} count Count of media to return.
		 * @param {string} max_like_id Return media liked before this id.
		 * @return {MediaListResponse} Users media entries.
		 */
		UsersSelfMediaLikedGetByCountAndMax_like_id(count: number | null | undefined, max_like_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<MediaListResponse> {
			return this.http.get<MediaListResponse>(this.baseUri + 'users/self/media/liked?count=' + count + '&max_like_id=' + (max_like_id == null ? '' : encodeURIComponent(max_like_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List the users who have requested this user's permission to follow.
		 * List the users who have requested this user's permission to follow.
		 * Get users/self/requested-by
		 * @return {UsersInfoResponse} List of users who have requested this user's permission to follow.
		 */
		UsersSelfRequested_byGet(headersHandler?: () => HttpHeaders): Observable<UsersInfoResponse> {
			return this.http.get<UsersInfoResponse>(this.baseUri + 'users/self/requested-by', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get basic information about a user.
		 * Get basic information about a user. To get information about the owner of the access token, you can use
		 * **self** instead of the `user-id`.
		 * Security scope `public_content` is required to read information about other users.
		 * Get users/{user_id}
		 * @param {string} user_id The ID of a user to get information about, or **self** to retrieve information about authenticated user.
		 * @return {UserResponse} User basic information.
		 */
		Users_user_idGet(user_id: string, headersHandler?: () => HttpHeaders): Observable<UserResponse> {
			return this.http.get<UserResponse>(this.baseUri + 'users/{user_id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the list of users this user is followed by.
		 * Get the list of users this user is followed by. To get users followed by the owner of the access token, you
		 * can use **self** instead of the `user-id`.
		 * Get users/{user_id}/followed-by
		 * @param {string} user_id The ID of a user, or **self** to retrieve information about authenticated user.
		 * @return {UsersPagingResponse} List of users this user is followed by.
		 */
		Users_user_idFollowed_byGet(user_id: string, headersHandler?: () => HttpHeaders): Observable<UsersPagingResponse> {
			return this.http.get<UsersPagingResponse>(this.baseUri + 'users/{user_id}/followed-by', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the list of users this user follows.
		 * Get the list of users this user follows. To get follows of the owner of the access token, you can use **self**
		 * instead of the `user-id`.
		 * Get users/{user_id}/follows
		 * @param {string} user_id The ID of a user, or **self** to retrieve information about authenticated user.
		 * @return {UsersPagingResponse} List of users this user follows.
		 */
		Users_user_idFollowsGet(user_id: string, headersHandler?: () => HttpHeaders): Observable<UsersPagingResponse> {
			return this.http.get<UsersPagingResponse>(this.baseUri + 'users/{user_id}/follows', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the most recent media published by a user.
		 * Get the most recent media published by a user. To get the most recent media published by the owner of the
		 * access token, you can use **self** instead of the `user-id`.
		 * Security scope `public_content` is required to read information about other users.
		 * Get users/{user_id}/media/recent
		 * @param {string} user_id The ID of a user to get recent media of, or **self** to retrieve media of authenticated user.
		 * @param {number} count Count of media to return.
		 * @param {string} max_timestamp Return media before this UNIX timestamp.
		 * @param {string} min_timestamp Return media after this UNIX timestamp.
		 * @param {string} min_id Return media later than this `min_id`.
		 * @param {string} max_id Return media earlier than this `max_id`.
		 * @return {MediaListResponse} Users media entries.
		 */
		Users_user_idMediaRecentGetByCountAndMax_timestampAndMin_timestampAndMin_idAndMax_id(user_id: string, count: number | null | undefined, max_timestamp: string | null | undefined, min_timestamp: string | null | undefined, min_id: string | null | undefined, max_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<MediaListResponse> {
			return this.http.get<MediaListResponse>(this.baseUri + 'users/{user_id}/media/recent?count=' + count + '&max_timestamp=' + max_timestamp + '&min_timestamp=' + min_timestamp + '&min_id=' + (min_id == null ? '' : encodeURIComponent(min_id)) + '&max_id=' + (max_id == null ? '' : encodeURIComponent(max_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get information about a relationship to another user.
		 * Get information about a relationship to another user.
		 * Get users/{user_id}/relationship
		 * @param {string} user_id The ID of a user to get information about.
		 * @return {RelationshipResponse} Relationship information.
		 */
		Users_user_idRelationshipGet(user_id: string, headersHandler?: () => HttpHeaders): Observable<RelationshipResponse> {
			return this.http.get<RelationshipResponse>(this.baseUri + 'users/{user_id}/relationship', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modify the relationship between the current user and the target user.
		 * Modify the relationship between the current user and the target user.
		 * Post users/{user_id}/relationship
		 * @param {string} user_id The ID of the target user.
		 * @param {Users_user_idRelationshipPostByActionAction} action Type of action to apply for relationship with the user.
		 * @return {RelationshipPostResponse} Relationship information.
		 */
		Users_user_idRelationshipPostByAction(user_id: string, action: Users_user_idRelationshipPostByActionAction, headersHandler?: () => HttpHeaders): Observable<RelationshipPostResponse> {
			return this.http.post<RelationshipPostResponse>(this.baseUri + 'users/{user_id}/relationship?action=' + action, null, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export enum Users_user_idRelationshipPostByActionAction { follow = 0, unfollow = 1, block = 2, unblock = 3, approve = 4, ignore = 5 }

}

