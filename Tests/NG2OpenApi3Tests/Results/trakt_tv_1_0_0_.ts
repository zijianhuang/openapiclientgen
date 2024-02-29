import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Add_Hidden_Items {
	}
	export interface Add_Hidden_ItemsFormProperties {
	}
	export function CreateAdd_Hidden_ItemsFormGroup() {
		return new FormGroup<Add_Hidden_ItemsFormProperties>({
		});

	}

	export interface Add_List_Items {
	}
	export interface Add_List_ItemsFormProperties {
	}
	export function CreateAdd_List_ItemsFormGroup() {
		return new FormGroup<Add_List_ItemsFormProperties>({
		});

	}

	export interface Add_Ratings {
	}
	export interface Add_RatingsFormProperties {
	}
	export function CreateAdd_RatingsFormGroup() {
		return new FormGroup<Add_RatingsFormProperties>({
		});

	}

	export interface Add_to_Collection {
	}
	export interface Add_to_CollectionFormProperties {
	}
	export function CreateAdd_to_CollectionFormGroup() {
		return new FormGroup<Add_to_CollectionFormProperties>({
		});

	}

	export interface Add_to_History {
	}
	export interface Add_to_HistoryFormProperties {
	}
	export function CreateAdd_to_HistoryFormGroup() {
		return new FormGroup<Add_to_HistoryFormProperties>({
		});

	}

	export interface Add_to_Personal_Recommendations___BETA {
	}
	export interface Add_to_Personal_Recommendations___BETAFormProperties {
	}
	export function CreateAdd_to_Personal_Recommendations___BETAFormGroup() {
		return new FormGroup<Add_to_Personal_Recommendations___BETAFormProperties>({
		});

	}

	export interface Add_to_Watchlist {
	}
	export interface Add_to_WatchlistFormProperties {
	}
	export function CreateAdd_to_WatchlistFormGroup() {
		return new FormGroup<Add_to_WatchlistFormProperties>({
		});

	}

	export interface Aliases {
	}
	export interface AliasesFormProperties {
	}
	export function CreateAliasesFormGroup() {
		return new FormGroup<AliasesFormProperties>({
		});

	}

	export interface All_DVD {
	}
	export interface All_DVDFormProperties {
	}
	export function CreateAll_DVDFormGroup() {
		return new FormGroup<All_DVDFormProperties>({
		});

	}

	export interface All_Movies {
	}
	export interface All_MoviesFormProperties {
	}
	export function CreateAll_MoviesFormGroup() {
		return new FormGroup<All_MoviesFormProperties>({
		});

	}

	export interface All_New_Shows {
	}
	export interface All_New_ShowsFormProperties {
	}
	export function CreateAll_New_ShowsFormGroup() {
		return new FormGroup<All_New_ShowsFormProperties>({
		});

	}

	export interface All_Season_Premieres {
	}
	export interface All_Season_PremieresFormProperties {
	}
	export function CreateAll_Season_PremieresFormGroup() {
		return new FormGroup<All_Season_PremieresFormProperties>({
		});

	}

	export interface All_Shows {
	}
	export interface All_ShowsFormProperties {
	}
	export function CreateAll_ShowsFormGroup() {
		return new FormGroup<All_ShowsFormProperties>({
		});

	}

	export interface Anticipated {
	}
	export interface AnticipatedFormProperties {
	}
	export function CreateAnticipatedFormGroup() {
		return new FormGroup<AnticipatedFormProperties>({
		});

	}

	export interface Approve_or_Deny_Follower_Requests {
	}
	export interface Approve_or_Deny_Follower_RequestsFormProperties {
	}
	export function CreateApprove_or_Deny_Follower_RequestsFormGroup() {
		return new FormGroup<Approve_or_Deny_Follower_RequestsFormProperties>({
		});

	}

	export interface Authorize {
	}
	export interface AuthorizeFormProperties {
	}
	export function CreateAuthorizeFormGroup() {
		return new FormGroup<AuthorizeFormProperties>({
		});

	}

	export interface Box_Office {
	}
	export interface Box_OfficeFormProperties {
	}
	export function CreateBox_OfficeFormGroup() {
		return new FormGroup<Box_OfficeFormProperties>({
		});

	}

	export interface Certifications {
	}
	export interface CertificationsFormProperties {
	}
	export function CreateCertificationsFormGroup() {
		return new FormGroup<CertificationsFormProperties>({
		});

	}

	export interface Checkin {
	}
	export interface CheckinFormProperties {
	}
	export function CreateCheckinFormGroup() {
		return new FormGroup<CheckinFormProperties>({
		});

	}

	export interface Collaborations {
	}
	export interface CollaborationsFormProperties {
	}
	export function CreateCollaborationsFormGroup() {
		return new FormGroup<CollaborationsFormProperties>({
		});

	}

	export interface Collected {
	}
	export interface CollectedFormProperties {
	}
	export function CreateCollectedFormGroup() {
		return new FormGroup<CollectedFormProperties>({
		});

	}

	export interface Collection {
	}
	export interface CollectionFormProperties {
	}
	export function CreateCollectionFormGroup() {
		return new FormGroup<CollectionFormProperties>({
		});

	}

	export interface Collection_Progress {
	}
	export interface Collection_ProgressFormProperties {
	}
	export function CreateCollection_ProgressFormGroup() {
		return new FormGroup<Collection_ProgressFormProperties>({
		});

	}

	export interface Comment {
	}
	export interface CommentFormProperties {
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
		});

	}

	export interface Comments {
	}
	export interface CommentsFormProperties {
	}
	export function CreateCommentsFormGroup() {
		return new FormGroup<CommentsFormProperties>({
		});

	}

	export interface Device_Code {
	}
	export interface Device_CodeFormProperties {
	}
	export function CreateDevice_CodeFormGroup() {
		return new FormGroup<Device_CodeFormProperties>({
		});

	}

	export interface Follow {
	}
	export interface FollowFormProperties {
	}
	export function CreateFollowFormGroup() {
		return new FormGroup<FollowFormProperties>({
		});

	}

	export interface Follower_Requests {
	}
	export interface Follower_RequestsFormProperties {
	}
	export function CreateFollower_RequestsFormGroup() {
		return new FormGroup<Follower_RequestsFormProperties>({
		});

	}

	export interface Followers {
	}
	export interface FollowersFormProperties {
	}
	export function CreateFollowersFormGroup() {
		return new FormGroup<FollowersFormProperties>({
		});

	}

	export interface Following {
	}
	export interface FollowingFormProperties {
	}
	export function CreateFollowingFormGroup() {
		return new FormGroup<FollowingFormProperties>({
		});

	}

	export interface Following_Requests {
	}
	export interface Following_RequestsFormProperties {
	}
	export function CreateFollowing_RequestsFormGroup() {
		return new FormGroup<Following_RequestsFormProperties>({
		});

	}

	export interface Friends {
	}
	export interface FriendsFormProperties {
	}
	export function CreateFriendsFormGroup() {
		return new FormGroup<FriendsFormProperties>({
		});

	}

	export interface Get_Collection {
	}
	export interface Get_CollectionFormProperties {
	}
	export function CreateGet_CollectionFormGroup() {
		return new FormGroup<Get_CollectionFormProperties>({
		});

	}

	export interface Get_History {
	}
	export interface Get_HistoryFormProperties {
	}
	export function CreateGet_HistoryFormGroup() {
		return new FormGroup<Get_HistoryFormProperties>({
		});

	}

	export interface Get_Personal_Recommendations___BETA {
	}
	export interface Get_Personal_Recommendations___BETAFormProperties {
	}
	export function CreateGet_Personal_Recommendations___BETAFormGroup() {
		return new FormGroup<Get_Personal_Recommendations___BETAFormProperties>({
		});

	}

	export interface Get_Ratings {
	}
	export interface Get_RatingsFormProperties {
	}
	export function CreateGet_RatingsFormGroup() {
		return new FormGroup<Get_RatingsFormProperties>({
		});

	}

	export interface Get_Token {
	}
	export interface Get_TokenFormProperties {
	}
	export function CreateGet_TokenFormGroup() {
		return new FormGroup<Get_TokenFormProperties>({
		});

	}

	export interface Get_Watched {
	}
	export interface Get_WatchedFormProperties {
	}
	export function CreateGet_WatchedFormGroup() {
		return new FormGroup<Get_WatchedFormProperties>({
		});

	}

	export interface Get_Watchlist {
	}
	export interface Get_WatchlistFormProperties {
	}
	export function CreateGet_WatchlistFormGroup() {
		return new FormGroup<Get_WatchlistFormProperties>({
		});

	}

	export interface Hidden_Items {
	}
	export interface Hidden_ItemsFormProperties {
	}
	export function CreateHidden_ItemsFormGroup() {
		return new FormGroup<Hidden_ItemsFormProperties>({
		});

	}

	export interface Hide_Movie {
	}
	export interface Hide_MovieFormProperties {
	}
	export function CreateHide_MovieFormGroup() {
		return new FormGroup<Hide_MovieFormProperties>({
		});

	}

	export interface Hide_Show {
	}
	export interface Hide_ShowFormProperties {
	}
	export function CreateHide_ShowFormGroup() {
		return new FormGroup<Hide_ShowFormProperties>({
		});

	}

	export interface History {
	}
	export interface HistoryFormProperties {
	}
	export function CreateHistoryFormGroup() {
		return new FormGroup<HistoryFormProperties>({
		});

	}

	export interface ID_Lookup {
	}
	export interface ID_LookupFormProperties {
	}
	export function CreateID_LookupFormGroup() {
		return new FormGroup<ID_LookupFormProperties>({
		});

	}

	export interface Item {
	}
	export interface ItemFormProperties {
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
		});

	}

	export interface Last_Activities {
	}
	export interface Last_ActivitiesFormProperties {
	}
	export function CreateLast_ActivitiesFormGroup() {
		return new FormGroup<Last_ActivitiesFormProperties>({
		});

	}

	export interface Last_Episode {
	}
	export interface Last_EpisodeFormProperties {
	}
	export function CreateLast_EpisodeFormGroup() {
		return new FormGroup<Last_EpisodeFormProperties>({
		});

	}

	export interface Like {
	}
	export interface LikeFormProperties {
	}
	export function CreateLikeFormGroup() {
		return new FormGroup<LikeFormProperties>({
		});

	}

	export interface Likes {
	}
	export interface LikesFormProperties {
	}
	export function CreateLikesFormGroup() {
		return new FormGroup<LikesFormProperties>({
		});

	}

	export interface List {
	}
	export interface ListFormProperties {
	}
	export function CreateListFormGroup() {
		return new FormGroup<ListFormProperties>({
		});

	}

	export interface List_Comments {
	}
	export interface List_CommentsFormProperties {
	}
	export function CreateList_CommentsFormGroup() {
		return new FormGroup<List_CommentsFormProperties>({
		});

	}

	export interface List_Items {
	}
	export interface List_ItemsFormProperties {
	}
	export function CreateList_ItemsFormGroup() {
		return new FormGroup<List_ItemsFormProperties>({
		});

	}

	export interface List_Like {
	}
	export interface List_LikeFormProperties {
	}
	export function CreateList_LikeFormGroup() {
		return new FormGroup<List_LikeFormProperties>({
		});

	}

	export interface List_Likes {
	}
	export interface List_LikesFormProperties {
	}
	export function CreateList_LikesFormGroup() {
		return new FormGroup<List_LikesFormProperties>({
		});

	}

	export interface Lists {
	}
	export interface ListsFormProperties {
	}
	export function CreateListsFormGroup() {
		return new FormGroup<ListsFormProperties>({
		});

	}

	export interface Movies {
	}
	export interface MoviesFormProperties {
	}
	export function CreateMoviesFormGroup() {
		return new FormGroup<MoviesFormProperties>({
		});

	}

	export interface My_DVD {
	}
	export interface My_DVDFormProperties {
	}
	export function CreateMy_DVDFormGroup() {
		return new FormGroup<My_DVDFormProperties>({
		});

	}

	export interface My_Movies {
	}
	export interface My_MoviesFormProperties {
	}
	export function CreateMy_MoviesFormGroup() {
		return new FormGroup<My_MoviesFormProperties>({
		});

	}

	export interface My_New_Shows {
	}
	export interface My_New_ShowsFormProperties {
	}
	export function CreateMy_New_ShowsFormGroup() {
		return new FormGroup<My_New_ShowsFormProperties>({
		});

	}

	export interface My_Season_Premieres {
	}
	export interface My_Season_PremieresFormProperties {
	}
	export function CreateMy_Season_PremieresFormGroup() {
		return new FormGroup<My_Season_PremieresFormProperties>({
		});

	}

	export interface My_Shows {
	}
	export interface My_ShowsFormProperties {
	}
	export function CreateMy_ShowsFormGroup() {
		return new FormGroup<My_ShowsFormProperties>({
		});

	}

	export interface Next_Episode {
	}
	export interface Next_EpisodeFormProperties {
	}
	export function CreateNext_EpisodeFormGroup() {
		return new FormGroup<Next_EpisodeFormProperties>({
		});

	}

	export interface Pause {
	}
	export interface PauseFormProperties {
	}
	export function CreatePauseFormGroup() {
		return new FormGroup<PauseFormProperties>({
		});

	}

	export interface People {
	}
	export interface PeopleFormProperties {
	}
	export function CreatePeopleFormGroup() {
		return new FormGroup<PeopleFormProperties>({
		});

	}

	export interface Personal_Recommendations___BETA {
	}
	export interface Personal_Recommendations___BETAFormProperties {
	}
	export function CreatePersonal_Recommendations___BETAFormGroup() {
		return new FormGroup<Personal_Recommendations___BETAFormProperties>({
		});

	}

	export interface Playback {
	}
	export interface PlaybackFormProperties {
	}
	export function CreatePlaybackFormGroup() {
		return new FormGroup<PlaybackFormProperties>({
		});

	}

	export interface Played {
	}
	export interface PlayedFormProperties {
	}
	export function CreatePlayedFormGroup() {
		return new FormGroup<PlayedFormProperties>({
		});

	}

	export interface Popular {
	}
	export interface PopularFormProperties {
	}
	export function CreatePopularFormGroup() {
		return new FormGroup<PopularFormProperties>({
		});

	}

	export interface Profile {
	}
	export interface ProfileFormProperties {
	}
	export function CreateProfileFormGroup() {
		return new FormGroup<ProfileFormProperties>({
		});

	}

	export interface Ratings {
	}
	export interface RatingsFormProperties {
	}
	export function CreateRatingsFormGroup() {
		return new FormGroup<RatingsFormProperties>({
		});

	}

	export interface Recent {
	}
	export interface RecentFormProperties {
	}
	export function CreateRecentFormGroup() {
		return new FormGroup<RecentFormProperties>({
		});

	}

	export interface Recommended {
	}
	export interface RecommendedFormProperties {
	}
	export function CreateRecommendedFormGroup() {
		return new FormGroup<RecommendedFormProperties>({
		});

	}

	export interface Refresh_Token {
	}
	export interface Refresh_TokenFormProperties {
	}
	export function CreateRefresh_TokenFormGroup() {
		return new FormGroup<Refresh_TokenFormProperties>({
		});

	}

	export interface Related {
	}
	export interface RelatedFormProperties {
	}
	export function CreateRelatedFormGroup() {
		return new FormGroup<RelatedFormProperties>({
		});

	}

	export interface Releases {
	}
	export interface ReleasesFormProperties {
	}
	export function CreateReleasesFormGroup() {
		return new FormGroup<ReleasesFormProperties>({
		});

	}

	export interface Remove_Hidden_Items {
	}
	export interface Remove_Hidden_ItemsFormProperties {
	}
	export function CreateRemove_Hidden_ItemsFormGroup() {
		return new FormGroup<Remove_Hidden_ItemsFormProperties>({
		});

	}

	export interface Remove_List_Items {
	}
	export interface Remove_List_ItemsFormProperties {
	}
	export function CreateRemove_List_ItemsFormGroup() {
		return new FormGroup<Remove_List_ItemsFormProperties>({
		});

	}

	export interface Remove_Playback {
	}
	export interface Remove_PlaybackFormProperties {
	}
	export function CreateRemove_PlaybackFormGroup() {
		return new FormGroup<Remove_PlaybackFormProperties>({
		});

	}

	export interface Remove_Ratings {
	}
	export interface Remove_RatingsFormProperties {
	}
	export function CreateRemove_RatingsFormGroup() {
		return new FormGroup<Remove_RatingsFormProperties>({
		});

	}

	export interface Remove_from_Collection {
	}
	export interface Remove_from_CollectionFormProperties {
	}
	export function CreateRemove_from_CollectionFormGroup() {
		return new FormGroup<Remove_from_CollectionFormProperties>({
		});

	}

	export interface Remove_from_History {
	}
	export interface Remove_from_HistoryFormProperties {
	}
	export function CreateRemove_from_HistoryFormGroup() {
		return new FormGroup<Remove_from_HistoryFormProperties>({
		});

	}

	export interface Remove_from_Personal_Recommendations___BETA {
	}
	export interface Remove_from_Personal_Recommendations___BETAFormProperties {
	}
	export function CreateRemove_from_Personal_Recommendations___BETAFormGroup() {
		return new FormGroup<Remove_from_Personal_Recommendations___BETAFormProperties>({
		});

	}

	export interface Remove_from_Watchlist {
	}
	export interface Remove_from_WatchlistFormProperties {
	}
	export function CreateRemove_from_WatchlistFormGroup() {
		return new FormGroup<Remove_from_WatchlistFormProperties>({
		});

	}

	export interface Reorder_List_Items {
	}
	export interface Reorder_List_ItemsFormProperties {
	}
	export function CreateReorder_List_ItemsFormGroup() {
		return new FormGroup<Reorder_List_ItemsFormProperties>({
		});

	}

	export interface Reorder_Lists {
	}
	export interface Reorder_ListsFormProperties {
	}
	export function CreateReorder_ListsFormGroup() {
		return new FormGroup<Reorder_ListsFormProperties>({
		});

	}

	export interface Reorder_Personal_Recommendations___BETA {
	}
	export interface Reorder_Personal_Recommendations___BETAFormProperties {
	}
	export function CreateReorder_Personal_Recommendations___BETAFormGroup() {
		return new FormGroup<Reorder_Personal_Recommendations___BETAFormProperties>({
		});

	}

	export interface Reorder_Watchlist {
	}
	export interface Reorder_WatchlistFormProperties {
	}
	export function CreateReorder_WatchlistFormGroup() {
		return new FormGroup<Reorder_WatchlistFormProperties>({
		});

	}

	export interface Replies {
	}
	export interface RepliesFormProperties {
	}
	export function CreateRepliesFormGroup() {
		return new FormGroup<RepliesFormProperties>({
		});

	}

	export interface Reset_Watched_Progress {
	}
	export interface Reset_Watched_ProgressFormProperties {
	}
	export function CreateReset_Watched_ProgressFormGroup() {
		return new FormGroup<Reset_Watched_ProgressFormProperties>({
		});

	}

	export interface Revoke_Token {
	}
	export interface Revoke_TokenFormProperties {
	}
	export function CreateRevoke_TokenFormGroup() {
		return new FormGroup<Revoke_TokenFormProperties>({
		});

	}

	export interface Saved_Filters {
	}
	export interface Saved_FiltersFormProperties {
	}
	export function CreateSaved_FiltersFormGroup() {
		return new FormGroup<Saved_FiltersFormProperties>({
		});

	}

	export interface Season {
	}
	export interface SeasonFormProperties {
	}
	export function CreateSeasonFormGroup() {
		return new FormGroup<SeasonFormProperties>({
		});

	}

	export interface Settings {
	}
	export interface SettingsFormProperties {
	}
	export function CreateSettingsFormGroup() {
		return new FormGroup<SettingsFormProperties>({
		});

	}

	export interface Shows {
	}
	export interface ShowsFormProperties {
	}
	export function CreateShowsFormGroup() {
		return new FormGroup<ShowsFormProperties>({
		});

	}

	export interface Start {
	}
	export interface StartFormProperties {
	}
	export function CreateStartFormGroup() {
		return new FormGroup<StartFormProperties>({
		});

	}

	export interface Stats {
	}
	export interface StatsFormProperties {
	}
	export function CreateStatsFormGroup() {
		return new FormGroup<StatsFormProperties>({
		});

	}

	export interface Stop {
	}
	export interface StopFormProperties {
	}
	export function CreateStopFormGroup() {
		return new FormGroup<StopFormProperties>({
		});

	}

	export interface Studios {
	}
	export interface StudiosFormProperties {
	}
	export function CreateStudiosFormGroup() {
		return new FormGroup<StudiosFormProperties>({
		});

	}

	export interface Summary {
	}
	export interface SummaryFormProperties {
	}
	export function CreateSummaryFormGroup() {
		return new FormGroup<SummaryFormProperties>({
		});

	}

	export interface Text_Query {
	}
	export interface Text_QueryFormProperties {
	}
	export function CreateText_QueryFormGroup() {
		return new FormGroup<Text_QueryFormProperties>({
		});

	}

	export interface Translations {
	}
	export interface TranslationsFormProperties {
	}
	export function CreateTranslationsFormGroup() {
		return new FormGroup<TranslationsFormProperties>({
		});

	}

	export interface Trending {
	}
	export interface TrendingFormProperties {
	}
	export function CreateTrendingFormGroup() {
		return new FormGroup<TrendingFormProperties>({
		});

	}

	export interface Updated_IDs {
	}
	export interface Updated_IDsFormProperties {
	}
	export function CreateUpdated_IDsFormGroup() {
		return new FormGroup<Updated_IDsFormProperties>({
		});

	}

	export interface Updates {
	}
	export interface UpdatesFormProperties {
	}
	export function CreateUpdatesFormGroup() {
		return new FormGroup<UpdatesFormProperties>({
		});

	}

	export interface Watched {
	}
	export interface WatchedFormProperties {
	}
	export function CreateWatchedFormGroup() {
		return new FormGroup<WatchedFormProperties>({
		});

	}

	export interface Watched_Progress {
	}
	export interface Watched_ProgressFormProperties {
	}
	export function CreateWatched_ProgressFormGroup() {
		return new FormGroup<Watched_ProgressFormProperties>({
		});

	}

	export interface Watching {
	}
	export interface WatchingFormProperties {
	}
	export function CreateWatchingFormGroup() {
		return new FormGroup<WatchingFormProperties>({
		});

	}

	export interface Watchlist {
	}
	export interface WatchlistFormProperties {
	}
	export function CreateWatchlistFormGroup() {
		return new FormGroup<WatchlistFormProperties>({
		});

	}

	export interface Add_hidden_itemsBody {
		Add_hidden_itemsBodyMovies?: Array<Add_hidden_itemsBodyMovies>;
		Add_hidden_itemsBodySeasons?: Array<Add_hidden_itemsBodySeasons>;
		Add_hidden_itemsBodyShows?: Array<Add_hidden_itemsBodyShows>;
	}
	export interface Add_hidden_itemsBodyFormProperties {
	}
	export function CreateAdd_hidden_itemsBodyFormGroup() {
		return new FormGroup<Add_hidden_itemsBodyFormProperties>({
		});

	}

	export interface Add_hidden_itemsBodyMovies {

		/** Required */
		ids: Add_hidden_itemsBodyMoviesIds;
		title?: string | null;

		/** Type: double */
		year?: number | null;
	}
	export interface Add_hidden_itemsBodyMoviesFormProperties {
		title: FormControl<string | null | undefined>,

		/** Type: double */
		year: FormControl<number | null | undefined>,
	}
	export function CreateAdd_hidden_itemsBodyMoviesFormGroup() {
		return new FormGroup<Add_hidden_itemsBodyMoviesFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Add_hidden_itemsBodyMoviesIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;
	}
	export interface Add_hidden_itemsBodyMoviesIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,
	}
	export function CreateAdd_hidden_itemsBodyMoviesIdsFormGroup() {
		return new FormGroup<Add_hidden_itemsBodyMoviesIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Add_hidden_itemsBodySeasons {
		ids?: Add_hidden_itemsBodySeasonsIds;
	}
	export interface Add_hidden_itemsBodySeasonsFormProperties {
	}
	export function CreateAdd_hidden_itemsBodySeasonsFormGroup() {
		return new FormGroup<Add_hidden_itemsBodySeasonsFormProperties>({
		});

	}

	export interface Add_hidden_itemsBodySeasonsIds {

		/** Type: double */
		trakt?: number | null;
	}
	export interface Add_hidden_itemsBodySeasonsIdsFormProperties {

		/** Type: double */
		trakt: FormControl<number | null | undefined>,
	}
	export function CreateAdd_hidden_itemsBodySeasonsIdsFormGroup() {
		return new FormGroup<Add_hidden_itemsBodySeasonsIdsFormProperties>({
			trakt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Add_hidden_itemsBodyShows {

		/** Required */
		ids: Add_hidden_itemsBodyShowsIds;
		Add_hidden_itemsBodyShowsSeasons?: Array<Add_hidden_itemsBodyShowsSeasons>;

		/** Required */
		title: string;

		/**
		 * Required
		 * Type: double
		 */
		year: number;
	}
	export interface Add_hidden_itemsBodyShowsFormProperties {

		/** Required */
		title: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateAdd_hidden_itemsBodyShowsFormGroup() {
		return new FormGroup<Add_hidden_itemsBodyShowsFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			year: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Add_hidden_itemsBodyShowsIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface Add_hidden_itemsBodyShowsIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateAdd_hidden_itemsBodyShowsIdsFormGroup() {
		return new FormGroup<Add_hidden_itemsBodyShowsIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Add_hidden_itemsBodyShowsSeasons {

		/** Type: double */
		number?: number | null;
	}
	export interface Add_hidden_itemsBodyShowsSeasonsFormProperties {

		/** Type: double */
		number: FormControl<number | null | undefined>,
	}
	export function CreateAdd_hidden_itemsBodyShowsSeasonsFormGroup() {
		return new FormGroup<Add_hidden_itemsBodyShowsSeasonsFormProperties>({
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Remove_items_from_collectionBody {
		Remove_items_from_collectionBodyEpisodes?: Array<Remove_items_from_collectionBodyEpisodes>;
		Remove_items_from_collectionBodyMovies?: Array<Remove_items_from_collectionBodyMovies>;
		Remove_items_from_collectionBodySeasons?: Array<Remove_items_from_collectionBodySeasons>;
		Remove_items_from_collectionBodyShows?: Array<Remove_items_from_collectionBodyShows>;
	}
	export interface Remove_items_from_collectionBodyFormProperties {
	}
	export function CreateRemove_items_from_collectionBodyFormGroup() {
		return new FormGroup<Remove_items_from_collectionBodyFormProperties>({
		});

	}

	export interface Remove_items_from_collectionBodyEpisodes {
		ids?: Remove_items_from_collectionBodyEpisodesIds;
	}
	export interface Remove_items_from_collectionBodyEpisodesFormProperties {
	}
	export function CreateRemove_items_from_collectionBodyEpisodesFormGroup() {
		return new FormGroup<Remove_items_from_collectionBodyEpisodesFormProperties>({
		});

	}

	export interface Remove_items_from_collectionBodyEpisodesIds {
		imdb?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface Remove_items_from_collectionBodyEpisodesIdsFormProperties {
		imdb: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateRemove_items_from_collectionBodyEpisodesIdsFormGroup() {
		return new FormGroup<Remove_items_from_collectionBodyEpisodesIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Remove_items_from_collectionBodyMovies {

		/** Required */
		ids: Remove_items_from_collectionBodyMoviesIds;
		title?: string | null;

		/** Type: double */
		year?: number | null;
	}
	export interface Remove_items_from_collectionBodyMoviesFormProperties {
		title: FormControl<string | null | undefined>,

		/** Type: double */
		year: FormControl<number | null | undefined>,
	}
	export function CreateRemove_items_from_collectionBodyMoviesFormGroup() {
		return new FormGroup<Remove_items_from_collectionBodyMoviesFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Remove_items_from_collectionBodyMoviesIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;
	}
	export interface Remove_items_from_collectionBodyMoviesIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,
	}
	export function CreateRemove_items_from_collectionBodyMoviesIdsFormGroup() {
		return new FormGroup<Remove_items_from_collectionBodyMoviesIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Remove_items_from_collectionBodySeasons {
		ids?: Remove_items_from_collectionBodySeasonsIds;
	}
	export interface Remove_items_from_collectionBodySeasonsFormProperties {
	}
	export function CreateRemove_items_from_collectionBodySeasonsFormGroup() {
		return new FormGroup<Remove_items_from_collectionBodySeasonsFormProperties>({
		});

	}

	export interface Remove_items_from_collectionBodySeasonsIds {

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface Remove_items_from_collectionBodySeasonsIdsFormProperties {

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateRemove_items_from_collectionBodySeasonsIdsFormGroup() {
		return new FormGroup<Remove_items_from_collectionBodySeasonsIdsFormProperties>({
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Remove_items_from_collectionBodyShows {

		/** Required */
		ids: Remove_items_from_collectionBodyShowsIds;

		/** Required */
		Remove_items_from_collectionBodyShowsSeasons: Array<Remove_items_from_collectionBodyShowsSeasons>;

		/** Required */
		title: string;

		/**
		 * Required
		 * Type: double
		 */
		year: number;
	}
	export interface Remove_items_from_collectionBodyShowsFormProperties {

		/** Required */
		title: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateRemove_items_from_collectionBodyShowsFormGroup() {
		return new FormGroup<Remove_items_from_collectionBodyShowsFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			year: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Remove_items_from_collectionBodyShowsIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface Remove_items_from_collectionBodyShowsIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateRemove_items_from_collectionBodyShowsIdsFormGroup() {
		return new FormGroup<Remove_items_from_collectionBodyShowsIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Remove_items_from_collectionBodyShowsSeasons {
		Remove_items_from_collectionBodyShowsSeasonsEpisodes?: Array<Remove_items_from_collectionBodyShowsSeasonsEpisodes>;

		/**
		 * Required
		 * Type: double
		 */
		number: number;
	}
	export interface Remove_items_from_collectionBodyShowsSeasonsFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		number: FormControl<number | null | undefined>,
	}
	export function CreateRemove_items_from_collectionBodyShowsSeasonsFormGroup() {
		return new FormGroup<Remove_items_from_collectionBodyShowsSeasonsFormProperties>({
			number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Remove_items_from_collectionBodyShowsSeasonsEpisodes {

		/**
		 * Required
		 * Type: double
		 */
		number: number;
	}
	export interface Remove_items_from_collectionBodyShowsSeasonsEpisodesFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		number: FormControl<number | null | undefined>,
	}
	export function CreateRemove_items_from_collectionBodyShowsSeasonsEpisodesFormGroup() {
		return new FormGroup<Remove_items_from_collectionBodyShowsSeasonsEpisodesFormProperties>({
			number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Reorder_watchlist_itemsBody {
		rank?: Array<number>;
	}
	export interface Reorder_watchlist_itemsBodyFormProperties {
	}
	export function CreateReorder_watchlist_itemsBodyFormGroup() {
		return new FormGroup<Reorder_watchlist_itemsBodyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get DVD releases
		 * #### &#10024; Extended Info &#127898; Filters
		 * Returns all movies with a DVD release date during the time period specified.
		 * Get calendars/all/dvd/{start_date}/{days}
		 * @param {string} start_date Start the calendar on this date.
		 * @param {number} days Number of days to display.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		CalendarsAllDvd_start_date_daysGet(start_date: string, days: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'calendars/all/dvd/' + (start_date == null ? '' : encodeURIComponent(start_date)) + '/' + days, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get movies
		 * #### &#10024; Extended Info &#127898; Filters
		 * Returns all movies with a release date during the time period specified.
		 * Get calendars/all/movies/{start_date}/{days}
		 * @param {string} start_date Start the calendar on this date.
		 * @param {number} days Number of days to display.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		CalendarsAllMovies_start_date_daysGet(start_date: string, days: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'calendars/all/movies/' + (start_date == null ? '' : encodeURIComponent(start_date)) + '/' + days, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get new shows
		 * #### &#10024; Extended Info &#127898; Filters
		 * Returns all new show premieres (season 1, episode 1) airing during the time period specified.
		 * Get calendars/all/shows/new/{start_date}/{days}
		 * @param {string} start_date Start the calendar on this date.
		 * @param {number} days Number of days to display.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		CalendarsAllShowsNew_start_date_daysGet(start_date: string, days: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'calendars/all/shows/new/' + (start_date == null ? '' : encodeURIComponent(start_date)) + '/' + days, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get season premieres
		 * #### &#10024; Extended Info &#127898; Filters
		 * Returns all show premieres (any season, episode 1) airing during the time period specified.
		 * Get calendars/all/shows/premieres/{start_date}/{days}
		 * @param {string} start_date Start the calendar on this date.
		 * @param {number} days Number of days to display.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		CalendarsAllShowsPremieres_start_date_daysGet(start_date: string, days: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'calendars/all/shows/premieres/' + (start_date == null ? '' : encodeURIComponent(start_date)) + '/' + days, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get shows
		 * #### &#10024; Extended Info &#127898; Filters
		 * Returns all shows airing during the time period specified.
		 * Get calendars/all/shows/{start_date}/{days}
		 * @param {string} start_date Start the calendar on this date.
		 * @param {number} days Number of days to display.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		CalendarsAllShows_start_date_daysGet(start_date: string, days: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'calendars/all/shows/' + (start_date == null ? '' : encodeURIComponent(start_date)) + '/' + days, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get DVD releases
		 * #### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters
		 * Returns all movies with a DVD release date during the time period specified.
		 * Get calendars/my/dvd/{start_date}/{days}
		 * @param {string} start_date Start the calendar on this date.
		 * @param {number} days Number of days to display.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		CalendarsMyDvd_start_date_daysGet(start_date: string, days: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'calendars/my/dvd/' + (start_date == null ? '' : encodeURIComponent(start_date)) + '/' + days, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get movies
		 * #### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters
		 * Returns all movies with a release date during the time period specified.
		 * Get calendars/my/movies/{start_date}/{days}
		 * @param {string} start_date Start the calendar on this date.
		 * @param {number} days Number of days to display.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		CalendarsMyMovies_start_date_daysGet(start_date: string, days: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'calendars/my/movies/' + (start_date == null ? '' : encodeURIComponent(start_date)) + '/' + days, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get new shows
		 * #### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters
		 * Returns all new show premieres (season 1, episode 1) airing during the time period specified.
		 * Get calendars/my/shows/new/{start_date}/{days}
		 * @param {string} start_date Start the calendar on this date.
		 * @param {number} days Number of days to display.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		CalendarsMyShowsNew_start_date_daysGet(start_date: string, days: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'calendars/my/shows/new/' + (start_date == null ? '' : encodeURIComponent(start_date)) + '/' + days, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get season premieres
		 * #### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters
		 * Returns all show premieres (any season, episode 1) airing during the time period specified.
		 * Get calendars/my/shows/premieres/{start_date}/{days}
		 * @param {string} start_date Start the calendar on this date.
		 * @param {number} days Number of days to display.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		CalendarsMyShowsPremieres_start_date_daysGet(start_date: string, days: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'calendars/my/shows/premieres/' + (start_date == null ? '' : encodeURIComponent(start_date)) + '/' + days, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get shows
		 * #### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters
		 * Returns all shows airing during the time period specified.
		 * Get calendars/my/shows/{start_date}/{days}
		 * @param {string} start_date Start the calendar on this date.
		 * @param {number} days Number of days to display.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		CalendarsMyShows_start_date_daysGet(start_date: string, days: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'calendars/my/shows/' + (start_date == null ? '' : encodeURIComponent(start_date)) + '/' + days, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get certifications
		 * Get a list of all certifications, including names, slugs, and descriptions.
		 * Get certifications/{type}
		 * @return {void} OK
		 */
		Certifications_typeGet(type: Certifications_typeGetType, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'certifications/' + type, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete any active checkins
		 * #### &#128274; OAuth Required
		 * Removes any active checkins, no need to provide a specific item.
		 * Delete checkin
		 * @return {void} 
		 */
		CheckinDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'checkin', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Check into an item
		 * #### &#128274; OAuth Required
		 * Check into a movie or episode. This should be tied to a user action to manually indicate they are watching something. The item will display as *watching* on the site, then automatically switch to *watched* status once the duration has elapsed. A unique history `id` (64-bit integer) will be returned and can be used to reference this checkin directly.
		 * #### JSON POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | item <span style="color:red;">*</a> | object | `movie` or `episode` object. (see examples &#8594;) |
		 * | `sharing`  | object | Control sharing to any connected social networks. (see below &#8595;) |
		 * | `message`  | string | Message used for sharing. If not sent, it will use the watching string in the user settings. |
		 * | `venue_id` | string | Foursquare venue ID. |
		 * | `venue_name` | string | Foursquare venue name. |
		 * | `app_version` | string | Version number of the app. |
		 * | `app_date` | string | Build date of the app. |
		 * #### Sharing
		 * The `sharing` object is optional and will apply the user's settings if not sent. If `sharing` is sent, each key will override the user's setting for that social network. Send `true` to post or `false` to not post on the indicated social network. You can see which social networks a user has connected with the [*users/settings**](/reference/users/settings) method.
		 * | Key | Type |
		 * |---|---|
		 * | `twitter` | boolean |
		 * | `mastodon` | boolean |
		 * | `tumblr` | boolean |
		 * **Note:** If a checkin is already in progress, a `409` HTTP status code will returned. The response will contain an `expires_at` timestamp which is when the user can check in again.
		 * Post checkin
		 * @return {void} 
		 */
		CheckinPost(requestBody: CheckinPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'checkin', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post a comment
		 * #### &#128274; OAuth Required &#128513; Emojis
		 * Add a new comment to a movie, show, season, episode, or list. Make sure to allow and encourage *spoilers* to be indicated in your app and follow the rules listed above.
		 * #### JSON POST Data
		 * | Key | Type | Default | Value |
		 * |---|---|---|---|
		 * | item <span style="color:red;">*</a> | object | | `movie`, `show`, `season`, `episode`, or `list` object. (see examples &#8594;) |
		 * | `comment` <span style="color:red;">*</a> | string |  | Text for the comment. |
		 * | `spoiler` | boolean | `false` | Is this a spoiler? |
		 * | `sharing`  | object | | Control sharing to any connected social networks. (see below &#8595;) |
		 * #### Sharing
		 * The `sharing` object is optional and will apply the user's settings if not sent. If `sharing` is sent, each key will override the user's setting for that social network. Send `true` to post or `false` to not post on the indicated social network. You can see which social networks a user has connected with the [*users/settings**](/reference/users/settings) method.
		 * | Key | Type |
		 * |---|---|
		 * | `twitter` | boolean |
		 * | `tumblr` | boolean |
		 * | `medium` | boolean |
		 * Post comments
		 * @return {void} 
		 */
		CommentsPost(requestBody: CommentsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'comments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get recently created comments
		 * #### &#128196; Pagination &#10024; Extended Info &#128513; Emojis
		 * Returns the most recently written comments across all of Trakt. You can optionally filter by the `comment_type` and media `type` to limit what gets returned. If you want to `include_replies` that will return replies in place alongside top level comments.
		 * Get comments/recent/{comment_type}/{type}
		 * @param {string} include_replies include comment replies
		 * @return {void} OK
		 */
		CommentsRecent_comment_type_typeGetByInclude_replies(comment_type: CommentsRecent_comment_type_typeGetByInclude_repliesComment_type, type: CommentsRecent_comment_type_typeGetByInclude_repliesType, include_replies: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'comments/recent/' + comment_type + '/' + type + '?include_replies=' + (include_replies == null ? '' : encodeURIComponent(include_replies)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get trending comments
		 * #### &#128196; Pagination &#10024; Extended Info &#128513; Emojis
		 * Returns all comments with the most likes and replies over the last 7 days. You can optionally filter by the `comment_type` and media `type` to limit what gets returned. If you want to `include_replies` that will return replies in place alongside top level comments.
		 * Get comments/trending/{comment_type}/{type}
		 * @param {string} include_replies include comment replies
		 * @return {void} OK
		 */
		CommentsTrending_comment_type_typeGetByInclude_replies(comment_type: CommentsRecent_comment_type_typeGetByInclude_repliesComment_type, type: CommentsRecent_comment_type_typeGetByInclude_repliesType, include_replies: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'comments/trending/' + comment_type + '/' + type + '?include_replies=' + (include_replies == null ? '' : encodeURIComponent(include_replies)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get recently updated comments
		 * #### &#128196; Pagination &#10024; Extended Info &#128513; Emojis
		 * Returns the most recently updated comments across all of Trakt. You can optionally filter by the `comment_type` and media `type` to limit what gets returned. If you want to `include_replies` that will return replies in place alongside top level comments.
		 * Get comments/updates/{comment_type}/{type}
		 * @param {string} include_replies include comment replies
		 * @return {void} OK
		 */
		CommentsUpdates_comment_type_typeGetByInclude_replies(comment_type: CommentsRecent_comment_type_typeGetByInclude_repliesComment_type, type: CommentsRecent_comment_type_typeGetByInclude_repliesType, include_replies: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'comments/updates/' + comment_type + '/' + type + '?include_replies=' + (include_replies == null ? '' : encodeURIComponent(include_replies)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a comment or reply
		 * #### &#128274; OAuth Required
		 * Delete a single comment. The OAuth user must match the author of the comment in order to delete it. If not, a `401` HTTP status code is returned. The comment must also be less than 2 weeks old or have 0 replies. If not, a `409` HTTP status is returned.
		 * Delete comments/{id}
		 * @param {string} id Automatically added
		 * @return {void} 
		 */
		Comments_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'comments/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a comment or reply
		 * ####  &#128513; Emojis
		 * Returns a single comment and indicates how many replies it has. Use [*comments/:id/replies**](/reference/comments/replies/) to get the actual replies.
		 * Get comments/{id}
		 * @param {string} id A specific comment ID.
		 * @return {void} OK
		 */
		Comments_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'comments/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a comment or reply
		 * #### &#128274; OAuth Required &#128513; Emojis
		 * Update a single comment. The OAuth user must match the author of the comment in order to update it. If not, a `401` HTTP status is returned.
		 * #### JSON POST Data
		 * | Key | Type | Default | Value |
		 * |---|---|---|---|
		 * | `comment` | string |  | Text for the comment. |
		 * | `spoiler` | boolean | `false` | Is this a spoiler? |
		 * Put comments/{id}
		 * @param {string} id Automatically added
		 * @return {void} OK
		 */
		Comments_idPut(id: string, requestBody: Comments_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'comments/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the attached media item
		 * #### &#10024; Extended Info
		 * Returns the media item this comment is attached to. The media type can be `movie`, `show`, `season`, `episode`, or `list` and it also returns the standard media object for that media type.
		 * Get comments/{id}/item
		 * @param {number} id A specific comment ID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		Comments_idItemGet(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'comments/' + id + '/item', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove like on a comment
		 * #### &#128274; OAuth Required
		 * Remove a like on a comment.
		 * Delete comments/{id}/like
		 * @param {string} id Automatically added
		 * @return {void} 
		 */
		Comments_idLikeDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'comments/' + (id == null ? '' : encodeURIComponent(id)) + '/like', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Like a comment
		 * #### &#128274; OAuth Required
		 * Votes help determine popular comments. Only one like is allowed per comment per user.
		 * Post comments/{id}/like
		 * @param {string} id A specific comment ID.
		 * @return {void} 
		 */
		Comments_idLikePost(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'comments/' + (id == null ? '' : encodeURIComponent(id)) + '/like', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all users who liked a comment
		 * #### &#128196; Pagination
		 * Returns all users who liked a comment. If you only need the `replies` count, the main `comment` object already has that, so no need to use this method.
		 * Get comments/{id}/likes
		 * @param {number} id A specific comment ID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		Comments_idLikesGet(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'comments/' + id + '/likes', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get replies for a comment
		 * #### &#128196; Pagination &#128513; Emojis
		 * Returns all replies for a comment. It is possible these replies could have replies themselves, so in that case you would just call [*comments/:id/replies**](/reference/comments/replies/) again with the new comment `id`.
		 * Get comments/{id}/replies
		 * @param {string} id A specific comment ID.
		 * @return {void} OK
		 */
		Comments_idRepliesGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'comments/' + (id == null ? '' : encodeURIComponent(id)) + '/replies', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post a reply for a comment
		 * #### &#128274; OAuth Required &#128513; Emojis
		 * Add a new reply to an existing comment. Make sure to allow and encourage *spoilers* to be indicated in your app and follow the rules listed above.
		 * #### JSON POST Data
		 * | Key | Type | Default | Value |
		 * |---|---|---|---|
		 * | `comment` <span style="color:red;">*</a> | string |  | Text for the reply. |
		 * | `spoiler` | boolean | `false` | Is this a spoiler? |
		 * Post comments/{id}/replies
		 * @param {string} id Automatically added
		 * @return {void} 
		 */
		Comments_idRepliesPost(id: string, requestBody: Comments_idRepliesPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'comments/' + (id == null ? '' : encodeURIComponent(id)) + '/replies', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get countries
		 * Get a list of all countries, including names and codes.
		 * Get countries/{type}
		 * @return {void} OK
		 */
		Countries_typeGet(type: Certifications_typeGetType, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'countries/' + type, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get genres
		 * Get a list of all genres, including names and slugs.
		 * Get genres/{type}
		 * @return {void} OK
		 */
		Genres_typeGet(type: Certifications_typeGetType, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'genres/' + type, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get languages
		 * Get a list of all langauges, including names and codes.
		 * Get languages/{type}
		 * @return {void} OK
		 */
		Languages_typeGet(type: Certifications_typeGetType, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'languages/' + type, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get popular lists
		 * #### &#128196; Pagination &#128513; Emojis
		 * Returns the most popular lists. Popularity is calculated using total number of likes and comments.
		 * Get lists/popular
		 * @return {void} OK
		 */
		ListsPopularGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lists/popular', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get trending lists
		 * #### &#128196; Pagination &#128513; Emojis
		 * Returns all lists with the most likes and comments over the last 7 days.
		 * Get lists/trending
		 * @return {void} OK
		 */
		ListsTrendingGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lists/trending', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get list
		 * #### &#128513; Emojis
		 * Returns a single list. Use the [*lists/:id/items**](#reference/lists/list-items) method to get the actual items this list contains.
		 * **Note:** You must use an integer `id`, and only public lists will return data.
		 * Get lists/{id}
		 * @param {number} id Trakt ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		Lists_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lists/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all list comments
		 * #### &#128196; Pagination &#128513; Emojis
		 * Returns all top level comments for a list. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, and most `replies`.
		 * Get lists/{id}/comments/{sort}
		 * @param {number} id Trakt ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Lists_idComments_sortGetSort} sort how to sort
		 * @return {void} OK
		 */
		Lists_idComments_sortGet(id: number, sort: Lists_idComments_sortGetSort, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lists/' + id + '/comments/' + sort, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get items on a list
		 * #### &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis
		 * Get all items on a personal list. Items can be a `movie`, `show`, `season`, `episode`, or `person`. You can optionally specify the `type` parameter with a single value or comma delimited string for multiple item types.
		 * #### Notes
		 * Each list item contains a `notes` field with text entered by the user.
		 * #### Sorting Headers
		 * All list items are sorted by ascending `rank`. We also send `X-Sort-By` and `X-Sort-How` headers which can be used to custom sort the list _**in your app**_ based on the user's preference. Values for `X-Sort-By` include `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, `votes`, `my_rating`, `random`, `watched`, and `collected`. Values for `X-Sort-How` include `asc` and `desc`.
		 * Get lists/{id}/items/{type}
		 * @param {string} id Trakt ID
		 * @param {Lists_idItems_typeGetType} type Filter for a specific item type
		 * @return {void} OK
		 */
		Lists_idItems_typeGet(id: string, type: Lists_idItems_typeGetType, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lists/' + (id == null ? '' : encodeURIComponent(id)) + '/items/' + type, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all users who liked a list
		 * #### &#128196; Pagination
		 * Returns all users who liked a list.
		 * Get lists/{id}/likes
		 * @param {string} id Trakt ID
		 * @return {void} OK
		 */
		Lists_idLikesGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lists/' + (id == null ? '' : encodeURIComponent(id)) + '/likes', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the most anticipated movies
		 * #### &#128196; Pagination &#10024; Extended Info &#127898; Filters
		 * Returns the most anticipated movies based on the number of lists a movie appears on.
		 * Get movies/anticipated
		 * @return {void} OK
		 */
		MoviesAnticipatedGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'movies/anticipated', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the weekend box office
		 * #### &#10024; Extended Info
		 * Returns the top 10 grossing movies in the U.S. box office last weekend. Updated every Monday morning.
		 * Get movies/boxoffice
		 * @return {void} OK
		 */
		MoviesBoxofficeGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'movies/boxoffice', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the most Collected movies
		 * #### &#128196; Pagination &#10024; Extended Info &#127898; Filters
		 * Returns the most collected (unique users) movies in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.
		 * Get movies/collected/{period}
		 * @param {MoviesCollected_periodGetPeriod} period Time period.
		 * @return {void} OK
		 */
		MoviesCollected_periodGet(period: MoviesCollected_periodGetPeriod, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'movies/collected/' + period, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the most played movies
		 * #### &#128196; Pagination &#10024; Extended Info &#127898; Filters
		 * Returns the most played (a single user can watch multiple times) movies in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.
		 * Get movies/played/{period}
		 * @param {MoviesCollected_periodGetPeriod} period Time period.
		 * @return {void} OK
		 */
		MoviesPlayed_periodGet(period: MoviesCollected_periodGetPeriod, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'movies/played/' + period, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get popular movies
		 * #### &#128196; Pagination &#10024; Extended Info &#127898; Filters
		 * Returns the most popular movies. Popularity is calculated using the rating percentage and the number of ratings.
		 * Get movies/popular
		 * @return {void} OK
		 */
		MoviesPopularGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'movies/popular', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the most recommended movies
		 * #### &#128196; Pagination &#10024; Extended Info &#127898; Filters
		 * Returns the most recommended movies in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.
		 * Get movies/recommended/{period}
		 * @param {MoviesCollected_periodGetPeriod} period Time period.
		 * @return {void} OK
		 */
		MoviesRecommended_periodGet(period: MoviesCollected_periodGetPeriod, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'movies/recommended/' + period, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get trending movies
		 * #### &#128196; Pagination &#10024; Extended Info &#127898; Filters
		 * Returns all movies being watched right now. Movies with the most users are returned first.
		 * Get movies/trending
		 * @return {void} OK
		 */
		MoviesTrendingGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'movies/trending', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get recently updated movie Trakt IDs
		 * #### &#128196; Pagination
		 * Returns all movie Trakt IDs updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.
		 * **Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.
		 * **Note:** The `start_date` can only be a maximum of 30 days in the past.
		 * Get movies/updates/id/{start_date}
		 * @param {string} start_date Updated since this date and time.
		 * @return {void} OK
		 */
		MoviesUpdatesId_start_dateGet(start_date: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'movies/updates/id/' + (start_date == null ? '' : encodeURIComponent(start_date)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get recently updated movies
		 * #### &#128196; Pagination &#10024; Extended Info
		 * Returns all movies updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.
		 * **Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.
		 * **Note:** The `start_date` can only be a maximum of 30 days in the past.
		 * Get movies/updates/{start_date}
		 * @param {string} start_date Updated since this date and time.
		 * @return {void} OK
		 */
		MoviesUpdates_start_dateGet(start_date: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'movies/updates/' + (start_date == null ? '' : encodeURIComponent(start_date)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the most watched movies
		 * #### &#128196; Pagination &#10024; Extended Info &#127898; Filters
		 * Returns the most watched (unique users) movies in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.
		 * Get movies/watched/{period}
		 * @param {MoviesCollected_periodGetPeriod} period Time period.
		 * @return {void} OK
		 */
		MoviesWatched_periodGet(period: MoviesCollected_periodGetPeriod, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'movies/watched/' + period, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a movie
		 * #### &#10024; Extended Info
		 * Returns a single movie's details.
		 * **Note:** When getting `full` extended info, the `status` field can have a value of `released`, `in production`, `post production`, `planned`, `rumored`, or `canceled`.
		 * Get movies/{id}
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} ```
		 * /movies/tron-legacy-2010?extended=full
		 * ```
		 */
		Movies_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'movies/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all movie aliases
		 * Returns all title aliases for a movie.  Includes country where name is different.
		 * Get movies/{id}/aliases
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} OK
		 */
		Movies_idAliasesGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'movies/' + (id == null ? '' : encodeURIComponent(id)) + '/aliases', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all movie comments
		 * #### &#128196; Pagination &#128513; Emojis
		 * Returns all top level comments for a movie. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, most `replies`, `highest` rated, `lowest` rated, and most `plays`.
		 * Get movies/{id}/comments/{sort}
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {Movies_idComments_sortGetSort} sort how to sort
		 * @return {void} OK
		 */
		Movies_idComments_sortGet(id: string, sort: Movies_idComments_sortGetSort, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'movies/' + (id == null ? '' : encodeURIComponent(id)) + '/comments/' + sort, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get lists containing this movie
		 * #### &#128196; Pagination &#128513; Emojis
		 * Returns all lists that contain this movie. By default, `personal` lists are returned sorted by the most `popular`.
		 * Get movies/{id}/lists/{type}/{sort}
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {Movies_idLists_type_sortGetType} type Filter for a specific list type
		 * @param {Movies_idLists_type_sortGetSort} sort How to sort
		 * @return {void} OK
		 */
		Movies_idLists_type_sortGet(id: string, type: Movies_idLists_type_sortGetType, sort: Movies_idLists_type_sortGetSort, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'movies/' + (id == null ? '' : encodeURIComponent(id)) + '/lists/' + type + '/' + sort, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all people for a movie
		 * #### &#10024; Extended Info
		 * Returns all `cast` and `crew` for a movie. Each `cast` member will have a `characters` array and a standard `person` object.
		 * The `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, and `editing` (if there are people for those crew positions). Each of those members will have a `jobs` array and a standard `person` object.
		 * Get movies/{id}/people
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} OK
		 */
		Movies_idPeopleGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'movies/' + (id == null ? '' : encodeURIComponent(id)) + '/people', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get movie ratings
		 * Returns rating (between 0 and 10) and distribution for a movie.
		 * Get movies/{id}/ratings
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} OK
		 */
		Movies_idRatingsGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'movies/' + (id == null ? '' : encodeURIComponent(id)) + '/ratings', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get related movies
		 * #### &#128196; Pagination &#10024; Extended Info
		 * Returns related and similar movies.
		 * Get movies/{id}/related
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} OK
		 */
		Movies_idRelatedGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'movies/' + (id == null ? '' : encodeURIComponent(id)) + '/related', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all movie releases
		 * Returns all releases for a movie including country, certification, release date, release type, and note. The release type can be set to `unknown`, `premiere`, `limited`, `theatrical`, `digital`, `physical`, or `tv`. The `note` might have optional info such as the film festival name for a `premiere` release or Blu-ray specs for a `physical` release. We pull this info from [TMDB](https://developers.themoviedb.org/3/movies/get-movie-release-dates).
		 * Get movies/{id}/releases/{country}
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {string} country 2 character country code
		 * @return {void} OK
		 */
		Movies_idReleases_countryGet(id: string, country: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'movies/' + (id == null ? '' : encodeURIComponent(id)) + '/releases/' + (country == null ? '' : encodeURIComponent(country)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get movie stats
		 * Returns lots of movie stats.
		 * Get movies/{id}/stats
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} OK
		 */
		Movies_idStatsGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'movies/' + (id == null ? '' : encodeURIComponent(id)) + '/stats', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get movie studios
		 * Returns all studios for a movie.
		 * Get movies/{id}/studios
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} OK
		 */
		Movies_idStudiosGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'movies/' + (id == null ? '' : encodeURIComponent(id)) + '/studios', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all movie translations
		 * Returns all translations for a movie, including language and translated values for title, tagline and overview.
		 * Get movies/{id}/translations/{language}
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {string} language 2 character language code
		 * @return {void} OK
		 */
		Movies_idTranslations_languageGet(id: string, language: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'movies/' + (id == null ? '' : encodeURIComponent(id)) + '/translations/' + (language == null ? '' : encodeURIComponent(language)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get users watching right now
		 * #### &#10024; Extended Info
		 * Returns all users watching this movie right now.
		 * Get movies/{id}/watching
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} OK
		 */
		Movies_idWatchingGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'movies/' + (id == null ? '' : encodeURIComponent(id)) + '/watching', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get networks
		 * Get a list of all TV networks, including the name.
		 * Get networks
		 * @return {void} OK
		 */
		NetworksGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'networks', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Authorize Application
		 * Construct then redirect to this URL. The Trakt website will request permissions for your app, which the user needs to approve. If the user isn't signed into Trakt, it will ask them to do so. Send `signup=true` if you prefer the account sign up page to be the default.
		 * **Note:** You should use the normal **https://trakt.tv** hostname when creating this URL and not the API URL.
		 * Get oauth/authorize
		 * @param {string} response_type Must be set to code.
		 * @param {string} client_id Get this from your app settings.
		 * @param {string} redirect_uri URI specified in your app settings.
		 * @param {string} state State variable for CSRF purposes.
		 * @return {void} OK
		 */
		OauthAuthorizeGetByResponse_typeAndClient_idAndRedirect_uriAndState(response_type: string, client_id: string, redirect_uri: string, state: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'oauth/authorize?response_type=' + (response_type == null ? '' : encodeURIComponent(response_type)) + '&client_id=' + (client_id == null ? '' : encodeURIComponent(client_id)) + '&redirect_uri=' + (redirect_uri == null ? '' : encodeURIComponent(redirect_uri)) + '&state=' + (state == null ? '' : encodeURIComponent(state)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate new device codes
		 * Generate new codes to start the device authentication process. The `device_code` and `interval` will be used later to poll for the `access_token`. The `user_code` and `verification_url` should be presented to the user as mentioned in the flow steps above.
		 * #### JSON POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | `client_id` <span style="color:red;">*</a> | string | Get this from your app settings. |
		 * Post oauth/device/code
		 * @return {void} OK
		 */
		OauthDeviceCodePost(requestBody: OauthDeviceCodePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'oauth/device/code', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Poll for the access_token
		 * Use the `device_code` and poll at the `interval` (in seconds) to check if the user has authorized you app. Use `expires_in` to stop polling after that many seconds, and gracefully instruct the user to restart the process. **It is important to poll at the correct interval and also stop polling when expired.**
		 * When you receive a `200` success response, save the `access_token` so your app can authenticate the user in methods that require it. The `access_token` is valid for 3 months. Save and use the `refresh_token` to get a new `access_token` without asking the user to re-authenticate. Check below for all the error codes that you should handle.
		 * #### JSON POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | `code` <span style="color:red;">*</a> | string | `device_code` from the initial method. |
		 * | `client_id` <span style="color:red;">*</a> | string | Get this from your app settings. |
		 * | `client_secret` <span style="color:red;">*</a> | string | Get this from your app settings. |
		 * ####  Status Codes
		 * This method will send various HTTP status codes that you should handle accordingly.
		 * | Code | Description |
		 * |---|---|
		 * | `200` | Success - *save the `access_token`*
		 * | `400` | Pending - *waiting for the user to authorize your app*
		 * | `404` | Not Found - *invalid `device_code`*
		 * | `409` | Already Used - *user already approved this code*
		 * | `410` | Expired - *the tokens have expired, restart the process*
		 * | `418` | Denied - *user explicitly denied this code*
		 * | `429` | Slow Down - *your app is polling too quickly*
		 * Post oauth/device/token
		 * @return {void} OK
		 */
		OauthDeviceTokenPost(requestBody: OauthDeviceTokenPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'oauth/device/token', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Revoke an access_token
		 * An `access_token` can be revoked when a user signs out of their Trakt account in your app. This is not required, but might improve the user experience so the user doesn't have an unused app connection hanging around.
		 * #### JSON POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | `token` <span style="color:red;">*</a> | string | A valid OAuth `access_token`. |
		 * | `client_id` <span style="color:red;">*</a> | string | Get this from your app settings. |
		 * | `client_secret` <span style="color:red;">*</a> | string | Get this from your app settings. |
		 * Post oauth/revoke
		 * @return {void} OK
		 */
		OauthRevokePost(requestBody: OauthRevokePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'oauth/revoke', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Exchange refresh_token for access_token
		 * Use the `refresh_token` to get a new `access_token` without asking the user to re-authenticate. The `access_token` is valid for 3 months before it needs to be refreshed again.
		 * #### JSON POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | `refresh_token` <span style="color:red;">*</a> | string | Saved from the initial token method. |
		 * | `client_id` <span style="color:red;">*</a> | string | Get this from your app settings. |
		 * | `client_secret` <span style="color:red;">*</a> | string | Get this from your app settings. |
		 * | `redirect_uri` <span style="color:red;">*</a> | string | URI specified in your app settings. |
		 * | `grant_type` <span style="color:red;">* </a> | string | `refresh_token` |
		 * Post oauth/token
		 * @return {void} If the `refresh_token` is valid, you'll get the `access_token` back.
		 */
		OauthTokenPost(requestBody: OauthTokenPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'oauth/token', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get recently updated people Trakt IDs
		 * #### &#128196; Pagination
		 * Returns all people Trakt IDs updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.
		 * **Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.
		 * **Note:** The `start_date` can only be a maximum of 30 days in the past.
		 * Get people/updates/id/{start_date}
		 * @param {string} start_date Updated since this date and time.
		 * @return {void} OK
		 */
		PeopleUpdatesId_start_dateGet(start_date: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'people/updates/id/' + (start_date == null ? '' : encodeURIComponent(start_date)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get recently updated people
		 * #### &#128196; Pagination &#10024; Extended Info
		 * Returns all people updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.
		 * **Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.
		 * **Note:** The `start_date` can only be a maximum of 30 days in the past.
		 * Get people/updates/{start_date}
		 * @param {string} start_date Updated since this date and time.
		 * @return {void} OK
		 */
		PeopleUpdates_start_dateGet(start_date: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'people/updates/' + (start_date == null ? '' : encodeURIComponent(start_date)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a single person
		 * #### &#10024; Extended Info
		 * Returns a single person's details.
		 * #### Gender
		 * If available, the `gender` property will be set to `male`, `female`, or `non_binary`.
		 * #### Known For Department
		 * If available, the `known_for_department` property will be set to `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, or `editing`. Many people have credits across departments, `known_for` allows you to select their default credits more accurately.
		 * Get people/{id}
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} ```
		 * /people/bryan-cranston?extended=full
		 * ```
		 */
		People_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'people/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get lists containing this person
		 * #### &#128196; Pagination &#128513; Emojis
		 * Returns all lists that contain this person. By default, `personal` lists are returned sorted by the most `popular`.
		 * Get people/{id}/lists/{type}/{sort}
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {People_idLists_type_sortGetType} type Filter for a specific list type
		 * @param {Movies_idLists_type_sortGetSort} sort How to sort
		 * @return {void} OK
		 */
		People_idLists_type_sortGet(id: string, type: People_idLists_type_sortGetType, sort: Movies_idLists_type_sortGetSort, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'people/' + (id == null ? '' : encodeURIComponent(id)) + '/lists/' + type + '/' + sort, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get movie credits
		 * #### &#10024; Extended Info
		 * Returns all movies where this person is in the `cast` or `crew`. Each `cast` object will have a `characters` array and a standard `movie` object.
		 * The `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, and `editing` (if there are people for those crew positions). Each of those members will have a `jobs` array and a standard `movie` object.
		 * Get people/{id}/movies
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} OK
		 */
		People_idMoviesGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'people/' + (id == null ? '' : encodeURIComponent(id)) + '/movies', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get show credits
		 * #### &#10024; Extended Info
		 * Returns all shows where this person is in the `cast` or `crew`, including the `episode_count` for which they appear. Each `cast` object will have a `characters` array and a standard `show` object. If `series_regular` is `true`, this person is a series regular and not simply a guest star.
		 * The `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, `editing`, and `created  by` (if there are people for those crew positions). Each of those members will have a `jobs` array and a standard `show` object.
		 * Get people/{id}/shows
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} OK
		 */
		People_idShowsGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'people/' + (id == null ? '' : encodeURIComponent(id)) + '/shows', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get movie recommendations
		 * #### &#128274; OAuth Required &#10024; Extended Info
		 * Movie recommendations for a user. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page. Set `ignore_collected=true` to filter out movies the user has already collected or `ignore_watchlisted=true` to filter out movies the user has already watchlisted.
		 * The `recommended_by` array contains all users who recommended the item along with any notes they added.
		 * Get recommendations/movies
		 * @param {RecommendationsMoviesGetByIgnore_collectedAndIgnore_watchlistedIgnore_collected} ignore_collected filter out collected movies
		 * @param {RecommendationsMoviesGetByIgnore_collectedAndIgnore_watchlistedIgnore_collected} ignore_watchlisted filter out watchlisted movies
		 * @return {void} OK
		 */
		RecommendationsMoviesGetByIgnore_collectedAndIgnore_watchlisted(ignore_collected: RecommendationsMoviesGetByIgnore_collectedAndIgnore_watchlistedIgnore_collected | null | undefined, ignore_watchlisted: RecommendationsMoviesGetByIgnore_collectedAndIgnore_watchlistedIgnore_collected | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'recommendations/movies?ignore_collected=' + ignore_collected + '&ignore_watchlisted=' + ignore_watchlisted, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Hide a movie recommendation
		 * #### &#128274; OAuth Required
		 * Hide a movie from getting recommended anymore.
		 * Delete recommendations/movies/{id}
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} 
		 */
		RecommendationsMovies_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'recommendations/movies/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get show recommendations
		 * #### &#128274; OAuth Required &#10024; Extended Info
		 * TV show recommendations for a user. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page. Set `ignore_collected=true` to filter out shows the user has already collected or `ignore_watchlisted=true` to filter out shows the user has already watchlisted.
		 * The `recommended_by` array contains all users who recommended the item along with any notes they added.
		 * Get recommendations/shows
		 * @param {RecommendationsMoviesGetByIgnore_collectedAndIgnore_watchlistedIgnore_collected} ignore_collected filter out collected shows
		 * @param {RecommendationsMoviesGetByIgnore_collectedAndIgnore_watchlistedIgnore_collected} ignore_watchlisted filter out watchlisted movies
		 * @return {void} OK
		 */
		RecommendationsShowsGetByIgnore_collectedAndIgnore_watchlisted(ignore_collected: RecommendationsMoviesGetByIgnore_collectedAndIgnore_watchlistedIgnore_collected | null | undefined, ignore_watchlisted: RecommendationsMoviesGetByIgnore_collectedAndIgnore_watchlistedIgnore_collected | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'recommendations/shows?ignore_collected=' + ignore_collected + '&ignore_watchlisted=' + ignore_watchlisted, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Hide a show recommendation
		 * #### &#128274; OAuth Required
		 * Hide a show from getting recommended anymore.
		 * Delete recommendations/shows/{id}
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} 
		 */
		RecommendationsShows_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'recommendations/shows/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Pause watching in a media center
		 * #### &#128274; OAuth Required
		 * Use this method when the video is paused. The playback progress will be saved and [*sync/playback**](/reference/sync/playback/) can be used to resume the video from this exact position. Unpause a video by calling the [*scrobble/start**](/reference/scrobble/start/) method again.
		 * #### JSON POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | item <span style="color:red;">*</a> | object | `movie` or `episode` object. (see examples &#8594;) |
		 * | `progress` <span style="color:red;">*</a> | float | Progress percentage between 0 and 100. |
		 * | `app_version` | string | Version number of the app. |
		 * | `app_date` | string | Build date of the app. |
		 * Post scrobble/pause
		 * @return {void} 
		 */
		ScrobblePausePost(requestBody: ScrobblePausePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'scrobble/pause', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Start watching in a media center
		 * #### &#128274; OAuth Required
		 * Use this method when the video initially starts playing or is unpaused. This will remove any playback progress if it exists.
		 * **Note:** A watching status will auto expire after the remaining runtime has elapsed. There is no need to call this method again while continuing to watch the same item.
		 * #### JSON POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | item <span style="color:red;">*</a> | object | `movie` or `episode` object. (see examples &#8594;) |
		 * | `progress` <span style="color:red;">*</a> | float | Progress percentage between 0 and 100. |
		 * | `app_version` | string | Version number of the app. |
		 * | `app_date` | string | Build date of the app. |
		 * Post scrobble/start
		 * @return {void} 
		 */
		ScrobbleStartPost(requestBody: ScrobbleStartPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'scrobble/start', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Stop or finish watching in a media center
		 * #### &#128274; OAuth Required
		 * Use this method when the video is stopped or finishes playing on its own. If the progress is above 80%, the video will be scrobbled and the `action` will be set to **scrobble**. A unique history `id` (64-bit integer) will be returned and can be used to reference this `scrobble` directly.
		 * If the progress is less than 80%, it will be treated as a *pause* and the `action` will be set to **pause**. The playback progress will be saved and [*sync/playback**](/reference/sync/playback/) can be used to resume the video from this exact position.
		 * **Note:** If you prefer to use a threshold higher than 80%, you should use [*scrobble/pause**](/reference/scrobble/pause/) yourself so it doesn't create duplicate scrobbles.
		 * #### JSON POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | item <span style="color:red;">*</a> | object | `movie` or `episode` object. (see examples &#8594;) |
		 * | `progress` <span style="color:red;">*</a> | flloat | Progress percentage between 0 and 100. |
		 * | `app_version` | string | Version number of the app. |
		 * | `app_date` | string | Build date of the app. |
		 * **Note:** If the same item was just scrobbled, a `409` HTTP status code will returned to avoid scrobbling a duplicate. The response will contain a `watched_at` timestamp when the item was last scrobbled and a `expires_at` timestamp when the item can be scrobbled again.
		 * Post scrobble/stop
		 * @return {void} 
		 */
		ScrobbleStopPost(requestBody: ScrobbleStopPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'scrobble/stop', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get ID lookup results
		 * #### &#128196; Pagination &#10024; Extended Info
		 * Lookup items by their Trakt, IMDB, TMDB, or TVDB ID. If you use the search url without a `type` it might return multiple items if the `id_type` is not globally unique. Specify the `type` of results by sending a single value or a comma delimited string for multiple types.
		 * | Type | URL |
		 * |---|---|
		 * | `trakt` | `/search/trakt/:id` |
		 * |  | `/search/trakt/:id?type=movie` |
		 * |  | `/search/trakt/:id?type=show` |
		 * |  | `/search/trakt/:id?type=episode` |
		 * |  | `/search/trakt/:id?type=person` |
		 * | `imdb` | `/search/imdb/:id` |
		 * | `tmdb` | `/search/tmdb/:id` |
		 * |  | `/search/tmdb/:id?type=movie` |
		 * |  | `/search/tmdb/:id?type=show` |
		 * |  | `/search/tmdb/:id?type=episode` |
		 * |  | `/search/tmdb/:id?type=person` |
		 * | `tvdb` | `/search/tvdb/:id` |
		 * |  | `/search/tvdb/:id?type=show` |
		 * |  | `/search/tvdb/:id?type=episode` |
		 * Get search/{id_type}/{id}
		 * @param {Search_id_type_idGetByTypeId_type} id_type Type of ID to lookup.
		 * @param {string} id ID that matches with the type.
		 * @param {Search_id_type_idGetByTypeType} type Search type.
		 * @return {void} ```
		 * /search/trakt/12601?type=movie
		 * /search/imdb/tt1104001
		 * ```
		 */
		Search_id_type_idGetByType(id_type: Search_id_type_idGetByTypeId_type, id: string, type: Search_id_type_idGetByTypeType | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search/' + id_type + '/' + (id == null ? '' : encodeURIComponent(id)) + '&type=' + type, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get text query results
		 * #### &#128196; Pagination &#10024; Extended Info &#127898; Filters
		 * Search all text fields that a media object contains (i.e. title, overview, etc). Results are ordered by the most relevant score. Specify the `type` of results by sending a single value or a comma delimited string for multiple types.
		 * #### Special Characters
		 * Our search engine (Solr) gives the following characters special meaning when they appear in a query:
		 * `+ - && || ! ( ) { } [ ] ^ " ~ * ? : /`
		 * To interpret any of these characters literally (and not as a special character), precede the character with a backslash `\` character.
		 * #### Search Fields
		 * By default, all text fields are used to search for the `query`. You can optionally specify the `fields` parameter with a single value or comma delimited string for multiple fields. Each `type` has specific `fields` that can be specified. This can be useful if you want to support more strict searches (i.e. title only).
		 * | Type | Field |
		 * |---|---|
		 * | `movie` | `title` |
		 * |  | `tagline` |
		 * |  | `overview` |
		 * |  | `people` |
		 * |  | `translations` |
		 * |  | `aliases` |
		 * | `show` | `title` |
		 * |  | `overview` |
		 * |  | `people` |
		 * |  | `translations` |
		 * |  | `aliases` |
		 * | `episode` | `title` |
		 * |  | `overview` |
		 * | `person` | `name` |
		 * |  | `biography` |
		 * | `list` | `name` |
		 * |  | `description` |
		 * Get search/{type}
		 * @param {Search_id_type_idGetByTypeType} type Search type.
		 * @param {string} query Search all text based fields.
		 * @return {void} ```
		 * /search/movie,show,episode,person,list?query=tron
		 * ```
		 */
		Search_typeGetByQuery(type: Search_id_type_idGetByTypeType, query: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search/' + type + '?query=' + (query == null ? '' : encodeURIComponent(query)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the most anticipated shows
		 * #### &#128196; Pagination &#10024; Extended Info &#127898; Filters
		 * Returns the most anticipated shows based on the number of lists a show appears on.
		 * Get shows/anticipated
		 * @return {void} OK
		 */
		ShowsAnticipatedGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/anticipated', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the most collected shows
		 * #### &#128196; Pagination &#10024; Extended Info &#127898; Filters
		 * Returns the most collected (unique users) shows in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.
		 * Get shows/collected/{period}
		 * @param {MoviesCollected_periodGetPeriod} period Time period.
		 * @return {void} OK
		 */
		ShowsCollected_periodGet(period: MoviesCollected_periodGetPeriod, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/collected/' + period, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the most played shows
		 * #### &#128196; Pagination &#10024; Extended Info &#127898; Filters
		 * Returns the most played (a single user can watch multiple episodes multiple times) shows in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.
		 * Get shows/played/{period}
		 * @param {MoviesCollected_periodGetPeriod} period Time period.
		 * @return {void} OK
		 */
		ShowsPlayed_periodGet(period: MoviesCollected_periodGetPeriod, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/played/' + period, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get popular shows
		 * #### &#128196; Pagination &#10024; Extended Info &#127898; Filters
		 * Returns the most popular shows. Popularity is calculated using the rating percentage and the number of ratings.
		 * Get shows/popular
		 * @return {void} OK
		 */
		ShowsPopularGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/popular', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the most recommended shows
		 * #### &#128196; Pagination &#10024; Extended Info &#127898; Filters
		 * Returns the most recommended shows in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.
		 * Get shows/recommended/{period}
		 * @param {MoviesCollected_periodGetPeriod} period Time period.
		 * @return {void} OK
		 */
		ShowsRecommended_periodGet(period: MoviesCollected_periodGetPeriod, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/recommended/' + period, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get trending shows
		 * #### &#128196; Pagination &#10024; Extended Info &#127898; Filters
		 * Returns all shows being watched right now. Shows with the most users are returned first.
		 * Get shows/trending
		 * @return {void} OK
		 */
		ShowsTrendingGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/trending', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get recently updated show Trakt IDs
		 * #### &#128196; Pagination
		 * Returns all show Trakt IDs updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.
		 * **Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.
		 * **Note:** The `start_date` can only be a maximum of 30 days in the past.
		 * Get shows/updates/id/{start_date}
		 * @param {string} start_date Updated since this date and time.
		 * @return {void} OK
		 */
		ShowsUpdatesId_start_dateGet(start_date: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/updates/id/' + (start_date == null ? '' : encodeURIComponent(start_date)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get recently updated shows
		 * #### &#128196; Pagination &#10024; Extended Info
		 * Returns all shows updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.
		 * **Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.
		 * **Note:** The `start_date` can only be a maximum of 30 days in the past.
		 * Get shows/updates/{start_date}
		 * @param {string} start_date Updated since this date and time.
		 * @return {void} OK
		 */
		ShowsUpdates_start_dateGet(start_date: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/updates/' + (start_date == null ? '' : encodeURIComponent(start_date)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the most watched shows
		 * #### &#128196; Pagination &#10024; Extended Info &#127898; Filters
		 * Returns the most watched (unique users) shows in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.
		 * Get shows/watched/{period}
		 * @param {MoviesCollected_periodGetPeriod} period Time period.
		 * @return {void} OK
		 */
		ShowsWatched_periodGet(period: MoviesCollected_periodGetPeriod, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/watched/' + period, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a single show
		 * #### &#10024; Extended Info
		 * Returns a single shows's details. If you request extended info, the `airs` object is relative to the show's country. You can use the `day`, `time`, and `timezone` to construct your own date then convert it to whatever timezone your user is in.
		 * **Note:** When getting `full` extended info, the `status` field can have a value of `returning series` (airing right now),  `continuing` (airing right now), `in production` (airing soon), `planned` (in development), `upcoming` (in development),  `pilot`, `canceled`, or `ended`.
		 * Get shows/{id}
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} ```
		 * /shows/game-of-thrones?extended=full
		 * ```
		 */
		Shows_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all show aliases
		 * Returns all title aliases for a show.  Includes country where name is different.
		 * Get shows/{id}/aliases
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} OK
		 */
		Shows_idAliasesGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/aliases', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all show certifications
		 * Returns all content certifications for a show, including the country.
		 * Get shows/{id}/certifications
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} OK
		 */
		Shows_idCertificationsGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/certifications', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all show comments
		 * #### &#128196; Pagination &#128513; Emojis
		 * Returns all top level comments for a show. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, most `replies`, `highest` rated, `lowest` rated, most `plays`, and highest `watched` percentage.
		 * Get shows/{id}/comments/{sort}
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {Shows_idComments_sortGetSort} sort how to sort
		 * @return {void} OK
		 */
		Shows_idComments_sortGet(id: string, sort: Shows_idComments_sortGetSort, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/comments/' + sort, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get last episode
		 * #### &#10024; Extended Info
		 * Returns the most recently aired episode. If no episode is found, a `204` HTTP status code will be returned.
		 * Get shows/{id}/last_episode
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} OK
		 */
		Shows_idLast_episodeGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/last_episode', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get lists containing this show
		 * #### &#128196; Pagination &#128513; Emojis
		 * Returns all lists that contain this show. By default, `personal` lists are returned sorted by the most `popular`.
		 * Get shows/{id}/lists/{type}/{sort}
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {Movies_idLists_type_sortGetType} type Filter for a specific list type
		 * @param {Movies_idLists_type_sortGetSort} sort How to sort
		 * @return {void} OK
		 */
		Shows_idLists_type_sortGet(id: string, type: Movies_idLists_type_sortGetType, sort: Movies_idLists_type_sortGetSort, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/lists/' + type + '/' + sort, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get next episode
		 * #### &#10024; Extended Info
		 * Returns the next scheduled to air episode. If no episode is found, a `204` HTTP status code will be returned.
		 * Get shows/{id}/next_episode
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} OK
		 */
		Shows_idNext_episodeGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/next_episode', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all people for a show
		 * #### &#10024; Extended Info
		 * Returns all `cast` and `crew` for a show, including the `episode_count` for which they appears. Each `cast` member will have a `characters` array and a standard `person` object.
		 * The `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, `editing`, and `created  by` (if there are people for those crew positions). Each of those members will have a `jobs` array and a standard `person` object.
		 * #### Guest Stars
		 * If you add `?extended=guest_stars` to the URL, it will return all guest stars that appeared in at least 1 episode of the show.
		 * **Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!
		 * Get shows/{id}/people
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} ```
		 * /shows/game-of-thrones/people?extended=guest_stars
		 * ```
		 */
		Shows_idPeopleGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/people', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get show collection progress
		 * #### &#128274; OAuth Required
		 * Returns collection progress for a show including details on all aired seasons and episodes. The `next_episode` will be the next episode the user should collect, if there are no upcoming episodes it will be set to `null`.
		 * By default, any hidden seasons will be removed from the response and stats. To include these and adjust the completion stats, set the `hidden` flag to `true`.
		 * By default, specials will be excluded from the response. Set the `specials` flag to `true` to include season 0 and adjust the stats accordingly. If you'd like to include specials, but not adjust the stats, set `count_specials` to `false`.
		 * By default, the `last_episode` and `next_episode` are calculated using the last `aired` episode the user has collected, even if they've collected older episodes more recently. To use their last collected episode for these calculations, set the `last_activity` flag to `collected`.
		 * **Note:** Only aired episodes are used to calculate progress. Episodes in the future or without an air date are ignored.
		 * Get shows/{id}/progress/collection
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {string} hidden include any hidden seasons
		 * @param {string} specials include specials as season 0
		 * @param {string} count_specials count specials in the overall stats (only applies if specials are included)
		 * @return {void} OK
		 */
		Shows_idProgressCollectionGetByHiddenAndSpecialsAndCount_specials(id: string, hidden: string | null | undefined, specials: string | null | undefined, count_specials: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/progress/collection&hidden=' + (hidden == null ? '' : encodeURIComponent(hidden)) + '&specials=' + (specials == null ? '' : encodeURIComponent(specials)) + '&count_specials=' + (count_specials == null ? '' : encodeURIComponent(count_specials)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get show watched progress
		 * #### &#128274; OAuth Required
		 * Returns watched progress for a show including details on all aired seasons and episodes. The `next_episode` will be the next episode the user should watch, if there are no upcoming episodes it will be set to `null`. If not `null`, the `reset_at` date is when the user started re-watching the show. Your app can adjust the progress by ignoring episodes with a `last_watched_at` prior to the `reset_at`.
		 * By default, any hidden seasons will be removed from the response and stats. To include these and adjust the completion stats, set the `hidden` flag to `true`.
		 * By default, specials will be excluded from the response. Set the `specials` flag to `true` to include season 0 and adjust the stats accordingly. If you'd like to include specials, but not adjust the stats, set `count_specials` to `false`.
		 * By default, the `last_episode` and `next_episode` are calculated using the last `aired` episode the user has watched, even if they've watched older episodes more recently. To use their last watched episode for these calculations, set the `last_activity` flag to `watched`.
		 * **Note:** Only aired episodes are used to calculate progress. Episodes in the future or without an air date are ignored.
		 * Get shows/{id}/progress/watched
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {string} hidden include any hidden seasons
		 * @param {string} specials include specials as season 0
		 * @param {string} count_specials count specials in the overall stats (only applies if specials are included)
		 * @return {void} OK
		 */
		Shows_idProgressWatchedGetByHiddenAndSpecialsAndCount_specials(id: string, hidden: string | null | undefined, specials: string | null | undefined, count_specials: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/progress/watched&hidden=' + (hidden == null ? '' : encodeURIComponent(hidden)) + '&specials=' + (specials == null ? '' : encodeURIComponent(specials)) + '&count_specials=' + (count_specials == null ? '' : encodeURIComponent(count_specials)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Undo reset show progress
		 * #### &#128274; OAuth Required 🔥 VIP Only
		 * Undo the reset and have watched progress use all watched history for the show.
		 * Delete shows/{id}/progress/watched/reset
		 * @param {string} id Automatically added
		 * @return {void} 
		 */
		Shows_idProgressWatchedResetDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/progress/watched/reset', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset show progress
		 * #### &#128274; OAuth Required 🔥 VIP Only
		 * Reset a show's progress when the user started re-watching the show. You can optionally specify the `reset_at` date to have it calculate progress from that specific date onwards.
		 * Post shows/{id}/progress/watched/reset
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} OK
		 */
		Shows_idProgressWatchedResetPost(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/progress/watched/reset', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get show ratings
		 * Returns rating (between 0 and 10) and distribution for a show.
		 * Get shows/{id}/ratings
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} OK
		 */
		Shows_idRatingsGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/ratings', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get related shows
		 * #### &#128196; Pagination &#10024; Extended Info
		 * Returns related and similar shows.
		 * Get shows/{id}/related
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} OK
		 */
		Shows_idRelatedGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/related', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all seasons for a show
		 * #### &#10024; Extended Info
		 * Returns all seasons for a show including the number of episodes in each season.
		 * #### Episodes
		 * If you add `?extended=episodes` to the URL, it will return all episodes for all seasons.
		 * **Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!
		 * Get shows/{id}/seasons
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} ```
		 * /shows/game-of-thrones/seasons?extended=episodes
		 * ```
		 */
		Shows_idSeasonsGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/seasons', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get single season for a show
		 * #### &#10024; Extended Info
		 * Returns all episodes for a specific season of a show.
		 * #### Translations
		 * If you'd like to included translated episode titles and overviews in the response, include the `translations` parameter in the URL. Include all languages by setting the parameter to `all` or use a specific 2 digit country language code to further limit it.
		 * **Note:** This returns a lot of data, so please only use this parameter if you actually need it!
		 * Get shows/{id}/seasons/{season}
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {number} season season number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} translations include episode translations
		 * @return {void} OK
		 */
		Shows_idSeasons_seasonGetByTranslations(id: string, season: number, translations: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/seasons/' + season + '&translations=' + (translations == null ? '' : encodeURIComponent(translations)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all season comments
		 * #### &#128196; Pagination &#128513; Emojis
		 * Returns all top level comments for a season. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, most `replies`, `highest` rated, `lowest` rated, most `plays`, and highest `watched` percentage.
		 * Get shows/{id}/seasons/{season}/comments/{sort}
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {number} season season number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Shows_idComments_sortGetSort} sort how to sort
		 * @return {void} OK
		 */
		Shows_idSeasons_seasonComments_sortGet(id: string, season: number, sort: Shows_idComments_sortGetSort, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/seasons/' + season + '/comments/' + sort, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a single episode for a show
		 * #### &#10024; Extended Info
		 * Returns a single episode's details. All date and times are in UTC and were calculated using the episode's `air_date` and show's `country` and `air_time`.
		 * **Note:** If the `first_aired` is unknown, it will be set to `null`.
		 * Get shows/{id}/seasons/{season}/episodes/{episode}
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {number} season season number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} episode episode number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} ```
		 * /shows/game-of-thrones/seasons/1/episodes/1?extended=full
		 * ```
		 */
		Shows_idSeasons_seasonEpisodes_episodeGet(id: string, season: number, episode: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/seasons/' + season + '/episodes/' + episode, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all episode comments
		 * #### &#128196; Pagination &#128513; Emojis
		 * Returns all top level comments for an episode. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, most `replies`, `highest` rated, `lowest` rated, and most `plays`.
		 * Get shows/{id}/seasons/{season}/episodes/{episode}/comments/{sort}
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {number} season season number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} episode episode number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Movies_idComments_sortGetSort} sort how to sort
		 * @return {void} OK
		 */
		Shows_idSeasons_seasonEpisodes_episodeComments_sortGet(id: string, season: number, episode: number, sort: Movies_idComments_sortGetSort, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/seasons/' + season + '/episodes/' + episode + '/comments/' + sort, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get lists containing this episode
		 * #### &#128196; Pagination &#128513; Emojis
		 * Returns all lists that contain this episode. By default, `personal` lists are returned sorted by the most `popular`.
		 * Get shows/{id}/seasons/{season}/episodes/{episode}/lists/{type}/{sort}
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {number} season season number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} episode episode number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Shows_idSeasons_seasonEpisodes_episodeLists_type_sortGetType} type Filter for a specific list type
		 * @param {Movies_idLists_type_sortGetSort} sort How to sort
		 * @return {void} OK
		 */
		Shows_idSeasons_seasonEpisodes_episodeLists_type_sortGet(id: string, season: number, episode: number, type: Shows_idSeasons_seasonEpisodes_episodeLists_type_sortGetType, sort: Movies_idLists_type_sortGetSort, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/seasons/' + season + '/episodes/' + episode + '/lists/' + type + '/' + sort, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all people for an episode
		 * #### &#10024; Extended Info
		 * Returns all `cast` and `crew` for an episode. Each `cast` member will have a `characters` array and a standard `person` object.
		 * The `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, and `editing` (if there are people for those crew positions). Each of those members will have a `jobs` array and a standard `person` object.
		 * #### Guest Stars
		 * If you add `?extended=guest_stars` to the URL, it will return all guest stars that appeared in the episode.
		 * **Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!
		 * Get shows/{id}/seasons/{season}/episodes/{episode}/people
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {number} season season number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} episode episode number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} ```
		 * /shows/game-of-thrones/seasons/1/episodes/1/people?extended=guest_stars
		 * ```
		 */
		Shows_idSeasons_seasonEpisodes_episodePeopleGet(id: string, season: number, episode: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/seasons/' + season + '/episodes/' + episode + '/people', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get episode ratings
		 * Returns rating (between 0 and 10) and distribution for an episode.
		 * Get shows/{id}/seasons/{season}/episodes/{episode}/ratings
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {number} season season number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} episode episode number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		Shows_idSeasons_seasonEpisodes_episodeRatingsGet(id: string, season: number, episode: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/seasons/' + season + '/episodes/' + episode + '/ratings', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get episode stats
		 * Returns lots of episode stats.
		 * Get shows/{id}/seasons/{season}/episodes/{episode}/stats
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {number} season season number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} episode episode number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		Shows_idSeasons_seasonEpisodes_episodeStatsGet(id: string, season: number, episode: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/seasons/' + season + '/episodes/' + episode + '/stats', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all episode translations
		 * Returns all translations for an episode, including language and translated values for title and overview.
		 * Get shows/{id}/seasons/{season}/episodes/{episode}/translations/{language}
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {number} season season number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} episode episode number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} language 2 character language code
		 * @return {void} OK
		 */
		Shows_idSeasons_seasonEpisodes_episodeTranslations_languageGet(id: string, season: number, episode: number, language: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/seasons/' + season + '/episodes/' + episode + '/translations/' + (language == null ? '' : encodeURIComponent(language)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get users watching right now
		 * #### &#10024; Extended Info
		 * Returns all users watching this episode right now.
		 * Get shows/{id}/seasons/{season}/episodes/{episode}/watching
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {number} season season number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} episode episode number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		Shows_idSeasons_seasonEpisodes_episodeWatchingGet(id: string, season: number, episode: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/seasons/' + season + '/episodes/' + episode + '/watching', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get lists containing this season
		 * #### &#128196; Pagination &#128513; Emojis
		 * Returns all lists that contain this season. By default, `personal` lists are returned sorted by the most `popular`.
		 * Get shows/{id}/seasons/{season}/lists/{type}/{sort}
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {number} season season number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Shows_idSeasons_seasonEpisodes_episodeLists_type_sortGetType} type Filter for a specific list type
		 * @param {Movies_idLists_type_sortGetSort} sort How to sort
		 * @return {void} OK
		 */
		Shows_idSeasons_seasonLists_type_sortGet(id: string, season: number, type: Shows_idSeasons_seasonEpisodes_episodeLists_type_sortGetType, sort: Movies_idLists_type_sortGetSort, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/seasons/' + season + '/lists/' + type + '/' + sort, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all people for a season
		 * #### &#10024; Extended Info
		 * Returns all `cast` and `crew` for a season, including the `episode_count` for which they appear. Each `cast` member will have a `characters` array and a standard `person` object.
		 * The `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, and `editing` (if there are people for those crew positions).. Each of those members will have a `jobs` array and a standard `person` object.
		 * #### Guest Stars
		 * If you add `?extended=guest_stars` to the URL, it will return all guest stars that appeared in at least 1 episode of the season.
		 * **Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!
		 * Get shows/{id}/seasons/{season}/people
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {number} season season number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} ```
		 * /shows/game-of-thrones/seasons/1/people?extended=guest_stars
		 * ```
		 */
		Shows_idSeasons_seasonPeopleGet(id: string, season: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/seasons/' + season + '/people', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get season ratings
		 * Returns rating (between 0 and 10) and distribution for a season.
		 * Get shows/{id}/seasons/{season}/ratings
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {number} season season number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		Shows_idSeasons_seasonRatingsGet(id: string, season: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/seasons/' + season + '/ratings', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get season stats
		 * Returns lots of season stats.
		 * Get shows/{id}/seasons/{season}/stats
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {number} season season number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		Shows_idSeasons_seasonStatsGet(id: string, season: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/seasons/' + season + '/stats', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all season translations
		 * Returns all translations for an season, including language and translated values for title and overview.
		 * Get shows/{id}/seasons/{season}/translations/{language}
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {number} season season number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} language 2 character language code
		 * @return {void} OK
		 */
		Shows_idSeasons_seasonTranslations_languageGet(id: string, season: number, language: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/seasons/' + season + '/translations/' + (language == null ? '' : encodeURIComponent(language)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get users watching right now
		 * #### &#10024; Extended Info
		 * Returns all users watching this season right now.
		 * Get shows/{id}/seasons/{season}/watching
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {number} season season number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		Shows_idSeasons_seasonWatchingGet(id: string, season: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/seasons/' + season + '/watching', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get show stats
		 * Returns lots of show stats.
		 * Get shows/{id}/stats
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} OK
		 */
		Shows_idStatsGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/stats', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get show studios
		 * Returns all studios for a show.
		 * Get shows/{id}/studios
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} OK
		 */
		Shows_idStudiosGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/studios', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all show translations
		 * Returns all translations for a show, including language and translated values for title and overview.
		 * Get shows/{id}/translations/{language}
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @param {string} language 2 character language code
		 * @return {void} OK
		 */
		Shows_idTranslations_languageGet(id: string, language: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/translations/' + (language == null ? '' : encodeURIComponent(language)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get users watching right now
		 * #### &#10024; Extended Info
		 * Returns all users watching this show right now.
		 * Get shows/{id}/watching
		 * @param {string} id Trakt ID, Trakt slug, or IMDB ID
		 * @return {void} OK
		 */
		Shows_idWatchingGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shows/' + (id == null ? '' : encodeURIComponent(id)) + '/watching', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add items to collection
		 * #### &#128274; OAuth Required
		 * Add items to a user's collection. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be collected. If seasons are specified, all episodes in those seasons will be collected.
		 * Send a `collected_at` UTC datetime to mark items as collected in the past. You can also send additional metadata about the media itself to have a very accurate collection. Showcase what is available to watch from your epic HD DVD collection down to your downloaded iTunes movies.
		 * **Note:** You can resend items already in your collection and they will be updated with any new values. This includes the `collected_at` and any other metadata.
		 * #### JSON POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | `movies` | array | Array of `movie` objects. (see examples &#8594;) |
		 * | `shows` | array | Array of `show` objects. |
		 * | `seasons` | array | Array of `season` objects. |
		 * | `episodes` | array | Array of `episode` objects. |
		 * #### Media Object POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | item <span style="color:red;">*</a> | object | `movie`, `show`, or `episode` object. |
		 * | `collected_at` | datetime | UTC datetime when the item was collected. Set to `released` to automatically use the inital release date + runtime *(episodes only)*). |
		 * | `media_type` | string | Set to `digital`, `bluray`, `hddvd`, `dvd`, `vcd`, `vhs`, `betamax`, or `laserdisc`. |
		 * | `resolution` | string | Set to `uhd_4k`, `hd_1080p`, `hd_1080i`, `hd_720p`, `sd_480p`, `sd_480i`, `sd_576p`, or `sd_576i`. |
		 * | `hdr` | string | Set to `dolby_vision`, `hdr10`, `hdr10_plus`, or `hlg`. |
		 * | `audio` | string | Set to `dolby_digital`, `dolby_digital_plus`, `dolby_digital_plus_atmos`, `dolby_truehd`, `dolby_atmos` *(Dolby TrueHD Atmos)*, `dolby_prologic`, `dts`, `dts_ma`, `dts_hr`, `dts_x`, `auro_3d`, `mp3`, `mp2`, `aac`, `lpcm`, `ogg` *(Ogg Vorbis)*, `ogg_opus`, `wma`, or `flac`. |
		 * | `audio_channels` | string | Set to `1.0`, `2.0`, `2.1`, `3.0`, `3.1`, `4.0`, `4.1`, `5.0`, `5.1`, `5.1.2`, `5.1.4`, `6.1`, `7.1`, `7.1.2`, `7.1.4`, `9.1`, or `10.1` |
		 * | `3d` | boolean | Set `true` if in 3D. |
		 * Post sync/collection
		 * @return {void} 
		 */
		SyncCollectionPost(requestBody: SyncCollectionPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sync/collection', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove items from collection
		 * #### &#128274; OAuth Required
		 * Remove one or more items from a user's collection.
		 * #### JSON POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | `movies` | array | Array of `movie` objects. (see examples &#8594;) |
		 * | `shows` | array | Array of `show` objects. |
		 * | `seasons` | array | Array of `season` objects. |
		 * | `episodes` | array | Array of `episode` objects. |
		 * Post sync/collection/remove
		 * @return {void} OK
		 */
		SyncCollectionRemovePost(requestBody: Remove_items_from_collectionBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sync/collection/remove', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get collection
		 * #### &#128274; OAuth Required &#10024; Extended Info
		 * Get all collected items in a user's collection. A collected item indicates availability to watch digitally or on physical media.
		 * Each `movie` object contains `collected_at` and `updated_at` timestamps. Since users can set custom dates when they collected movies, it is possible for `collected_at` to be in the past. We also include `updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movie if you see a newer timestamp.
		 * Each `show` object contains `last_collected_at` and `last_updated_at` timestamps. Since users can set custom dates when they collected episodes, it is possible for `last_collected_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the show if you see a newer timestamp.
		 * If you add `?extended=metadata` to the URL, it will return the additional `media_type`, `resolution`, `hdr`, `audio`, `audio_channels` and '3d' metadata. It will use `null` if the metadata isn't set for an item.
		 * Get sync/collection/{type}
		 * @return {void} ```
		 * /sync/collection/shows?extended=metadata
		 * ```
		 */
		SyncCollection_typeGet(type: Certifications_typeGetType, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sync/collection/' + type, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add items to watched history
		 * #### &#128274; OAuth Required
		 * Add items to a user's watch history. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be added. If seasons are specified, only episodes in those seasons will be added.
		 * Send a `watched_at` UTC datetime to mark items as watched in the past. This is useful for syncing past watches from a media center.
		 * **Note:** Please be careful with sending duplicate data. We don't verify the `item` + `watched_at` to ensure it's unique, it is up to your app to veify this and not send duplicate plays.
		 * #### JSON POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | `movies` | array | Array of `movie` objects. (see examples &#8594;) |
		 * | `shows` | array | Array of `show` objects. |
		 * | `seasons` | array | Array of `season` objects. |
		 * | `episodes` | array | Array of `episode` objects. |
		 * #### Media Object POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | item <span style="color:red;">*</a> | object | `movie`, `show`, or `episode` object. |
		 * | `watched_at` | datetime | UTC datetime when the item was watched. Set to `released` to automatically use the initial release date + runtime *(episodes only)*. |
		 * Post sync/history
		 * @return {void} 
		 */
		SyncHistoryPost(requestBody: SyncHistoryPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sync/history', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove items from history
		 * #### &#128274; OAuth Required
		 * Remove items from a user's watch history including all watches, scrobbles, and checkins. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be removed. If seasons are specified, only episodes in those seasons will be removed.
		 * You can also send a list of raw history `ids` _(64-bit integers)_ to delete single plays from the watched history. The [*sync/history**](#reference/sync/get-history) method will return an individual `id` _(64-bit integer)_ for each history item.
		 * #### JSON POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | `movies` | array | Array of `movie` objects. (see examples &#8594;) |
		 * | `shows` | array | Array of `show` objects. |
		 * | `seasons` | array | Array of `season` objects. |
		 * | `episodes` | array | Array of `episode` objects. |
		 * | `ids` | array | Array of history ids. |
		 * Post sync/history/remove
		 * @return {void} OK
		 */
		SyncHistoryRemovePost(requestBody: SyncHistoryRemovePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sync/history/remove', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get watched history
		 * #### &#128274; OAuth Required &#128196; Pagination &#10024; Extended Info
		 * Returns movies and episodes that a user has watched, sorted by most recent. You can optionally limit the `type` to `movies` or `episodes`. The `id` _(64-bit integer)_ in each history item uniquely identifies the event and can be used to remove individual events by using the [*sync/history/remove**](#reference/sync/remove-from-history/get-watched-history) method. The `action` will be set to `scrobble`, `checkin`, or `watch`.
		 * Specify a `type` and trakt `id` to limit the history for just that item. If the `id` is valid, but there is no history, an empty array will be returned.
		 * | Example URL | Returns watches for... |
		 * |---|---|
		 * | `/history/movies/12601` | TRON: Legacy |
		 * | `/history/shows/1388` | All episodes of Breaking Bad |
		 * | `/history/seasons/3950` | All episodes of Breaking Bad: Season 1 |
		 * | `/history/episodes/73482` | Only episode 1 for Breaking Bad: Season 1 |
		 * Get sync/history/{type}/{id}
		 * @param {number} id Trakt ID for a specific item.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} start_at Starting date.
		 * @param {string} end_at Ending date.
		 * @return {void} ```
		 * /sync/history/episodes
		 * ```
		 */
		SyncHistory_type_idGetByStart_atAndEnd_at(type: SyncHistory_type_idGetByStart_atAndEnd_atType, id: number, start_at: string | null | undefined, end_at: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sync/history/' + type + '/' + id + '?start_at=' + (start_at == null ? '' : encodeURIComponent(start_at)) + '&end_at=' + (end_at == null ? '' : encodeURIComponent(end_at)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get last activity
		 * #### &#128274; OAuth Required
		 * This method is a useful first step in the syncing process. We recommended caching these dates locally, then you can compare to know exactly what data has changed recently. This can greatly optimize your syncs so you don't pull down a ton of data only to see nothing has actually changed.
		 * #### Account
		 * `settings_at` is set when the OAuth user updates any of their Trakt settings on the website. `followed_at` is set when another Trakt user follows or unfollows the OAuth user. `following_at` is set when the OAuth user follows or unfollows another Trakt user. `pending_at` is set when the OAuth user follows a private account, which requires their approval. `requested_at` is set when the OAuth user has a private account and someone requests to follow them.
		 * Get sync/last_activities
		 * @return {void} OK
		 */
		SyncLast_activitiesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sync/last_activities', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a playback item
		 * #### &#128274; OAuth Required
		 * Remove a playback item from a user's playback progress list. A `404` will be returned if the `id` is invalid.
		 * Delete sync/playback/{id}
		 * @param {number} id playback ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		SyncPlayback_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sync/playback/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get playback progress
		 * #### &#128274; OAuth Required &#128196; Pagination Optional
		 * Whenever a scrobble is paused, the playback progress is saved. Use this progress to sync up playback across different media centers or apps. For example, you can start watching a movie in a media center, stop it, then resume on your tablet from the same spot. Each item will have the `progress` percentage between 0 and 100.
		 * You can optionally specify a `type` to only get `movies` or `episodes`.
		 * By default, all results will be returned. Pagination is optional and can be used for something like an "on deck" feature, or if you only need a limited data set.
		 * **Note:** We only save playback progress for the last 6 months.
		 * Get sync/playback/{type}
		 * @param {string} start_at Starting date.
		 * @param {string} end_at Ending date.
		 * @return {void} OK
		 */
		SyncPlayback_typeGetByStart_atAndEnd_at(type: SyncPlayback_typeGetByStart_atAndEnd_atType, start_at: string | null | undefined, end_at: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sync/playback/' + type + '?start_at=' + (start_at == null ? '' : encodeURIComponent(start_at)) + '&end_at=' + (end_at == null ? '' : encodeURIComponent(end_at)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add new ratings
		 * #### &#128274; OAuth Required
		 * Rate one or more items. Accepts shows, seasons, episodes and movies. If only a show is passed, only the show itself will be rated. If seasons are specified, all of those seasons will be rated.
		 * Send a `rated_at` UTC datetime to mark items as rated in the past. This is useful for syncing ratings from a media center.
		 * #### JSON POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | `movies` | array | Array of `movie` objects. (see examples &#8594;) |
		 * | `shows` | array | Array of `show` objects. |
		 * | `seasons` | array | Array of `season` objects. |
		 * | `episodes` | array | Array of `episode` objects. |
		 * #### Media Object POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | item <span style="color:red;">*</a> | object | `movie`, `show`, `season`, or `episode` object. |
		 * | `rating` <span style="color:red;">*</a> | integer | Between 1 and 10. |
		 * | `rated_at` | datetime | UTC datetime when the item was rated. |
		 * Post sync/ratings
		 * @return {void} 
		 */
		SyncRatingsPost(requestBody: SyncRatingsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sync/ratings', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove ratings
		 * #### &#128274; OAuth Required
		 * Remove ratings for one or more items.
		 * #### JSON POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | `movies` | array | Array of `movie` objects. (see examples &#8594;) |
		 * | `shows` | array | Array of `show` objects. |
		 * | `seasons` | array | Array of `season` objects. |
		 * | `episodes` | array | Array of `episode` objects. |
		 * Post sync/ratings/remove
		 * @return {void} OK
		 */
		SyncRatingsRemovePost(requestBody: Remove_items_from_collectionBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sync/ratings/remove', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get ratings
		 * #### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info
		 * Get a user's ratings filtered by `type`. You can optionally filter for a specific `rating` between 1 and 10. Send a comma separated string for `rating` if you need multiple ratings.
		 * Get sync/ratings/{type}/{rating}
		 * @param {SyncRatings_type_ratingGetRating} rating Filter for a specific rating.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} ```
		 * /sync/ratings/episodes
		 * ```
		 */
		SyncRatings_type_ratingGet(type: SyncRatings_type_ratingGetType, rating: SyncRatings_type_ratingGetRating, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sync/ratings/' + type + '/' + rating, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add items to personal recommendations
		 * #### &#128274; OAuth Required &#128513; Emojis
		 * If the user only had 50 movies and TV shows to bring with them on a desert island, what would they be? These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.
		 * #### Notes
		 * Each recommendation can optionally accept a `notes` *(255 maximum characters)* field explaining why the user recommended the item.
		 * #### Limits
		 * If the user has recommended 50 items already, a `420` HTTP error code is returned. This limit applies to all users.
		 * #### JSON POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | `movies` | array | Array of `movie` objects. (see examples &#8594;) |
		 * | `shows` | array | Array of `show` objects. |
		 * Post sync/recommendations
		 * @return {void} 
		 */
		SyncRecommendationsPost(requestBody: SyncRecommendationsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sync/recommendations', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove items from personal recommendations
		 * #### &#128274; OAuth Required
		 * Remove items from a user's personal recommendations. These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.
		 * #### JSON POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | `movies` | array | Array of `movie` objects. (see examples &#8594;) |
		 * | `shows` | array | Array of `show` objects. |
		 * Post sync/recommendations/remove
		 * @return {void} OK
		 */
		SyncRecommendationsRemovePost(requestBody: SyncRecommendationsRemovePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sync/recommendations/remove', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Reorder personally recommended items
		 * #### &#128274; OAuth Required
		 * Reorder all items on a user's personal recommendations by sending the updated `rank` of list item ids. Use the [*sync/recommendations**](#reference/sync/get-personal-recommendations) method to get all list item ids.
		 * Post sync/recommendations/reorder
		 * @return {void} OK
		 */
		SyncRecommendationsReorderPost(requestBody: Reorder_watchlist_itemsBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sync/recommendations/reorder', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get personal recommendations
		 * #### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis
		 * If the user only had 50 movies and TV shows to bring with them on a desert island, what would they be? These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.
		 * #### Notes
		 * Each recommendation contains a `notes` field explaining why the user recommended the item.
		 * Get sync/recommendations/{type}/{sort}
		 * @param {Certifications_typeGetType} type Filter for a specific item type
		 * @param {SyncRecommendations_type_sortGetSort} sort How to sort (only if type is also sent)
		 * @return {void} ```
		 * /sync/recommendations/shows
		 * ```
		 */
		SyncRecommendations_type_sortGet(type: Certifications_typeGetType, sort: SyncRecommendations_type_sortGetSort, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sync/recommendations/' + type + '/' + sort, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get watched
		 * #### &#128274; OAuth Required &#10024; Extended Info
		 * Returns all movies or shows a user has watched sorted by most plays.
		 * If `type` is set to _shows_ and you add `?extended=noseasons` to the URL, it won't return season or episode info.
		 * Each `movie` and `show` object contains `last_watched_at` and `last_updated_at` timestamps. Since users can set custom dates when they watched movies and episodes, it is possible for `last_watched_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movies and shows if you see a newer timestamp.
		 * Each `show` object contains a `reset_at` timestamp. If not `null`, this is when the user started re-watching the show. Your app can adjust the progress by ignoring episodes with a `last_watched_at` prior to the `reset_at`.
		 * Get sync/watched/{type}
		 * @return {void} ```
		 * /sync/watched/shows?extended=noseasons
		 * ```
		 */
		SyncWatched_typeGet(type: Certifications_typeGetType, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sync/watched/' + type, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add items to watchlist
		 * #### &#128274; OAuth Required &#128513; Emojis 🔥 VIP Enhanced
		 * Add one of more items to a user's watchlist. Accepts shows, seasons, episodes and movies. If only a show is passed, only the show itself will be added. If seasons are specified, all of those seasons will be added.
		 * #### Notes
		 * Each watchlist item can optionally accept a `notes` *(255 maximum characters)* field with custom text. The user must be a [**Trakt VIP**](https://trakt.tv/vip) to send `notes`.
		 * #### Limits
		 * If the user's watchlist limit is exceeded, a `420` HTTP error code is returned. Use the [*users/settings**](/reference/users/settings) method to get all limits for a user account. In most cases, upgrading to [**Trakt VIP**](https://trakt.tv/vip) will increase the limits.
		 * #### JSON POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | `movies` | array | Array of `movie` objects. (see examples &#8594;) |
		 * | `shows` | array | Array of `show` objects. |
		 * | `seasons` | array | Array of `season` objects. |
		 * | `episodes` | array | Array of `episode` objects. |
		 * Post sync/watchlist
		 * @return {void} 
		 */
		SyncWatchlistPost(requestBody: SyncWatchlistPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sync/watchlist', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove items from watchlist
		 * #### &#128274; OAuth Required
		 * Remove one or more items from a user's watchlist.
		 * #### JSON POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | `movies` | array | Array of `movie` objects. (see examples &#8594;) |
		 * | `shows` | array | Array of `show` objects. |
		 * | `seasons` | array | Array of `season` objects. |
		 * | `episodes` | array | Array of `episode` objects. |
		 * Post sync/watchlist/remove
		 * @return {void} OK
		 */
		SyncWatchlistRemovePost(requestBody: Remove_items_from_collectionBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sync/watchlist/remove', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Reorder watchlist items
		 * #### &#128274; OAuth Required
		 * Reorder all items on a user's watchlist by sending the updated `rank` of list item ids. Use the [*sync/watchlist**](#reference/sync/get-watchlist) method to get all list item ids.
		 * Post sync/watchlist/reorder
		 * @return {void} OK
		 */
		SyncWatchlistReorderPost(requestBody: Reorder_watchlist_itemsBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sync/watchlist/reorder', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get watchlist
		 * #### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis
		 * Returns all items in a user's watchlist filtered by type.
		 * #### Notes
		 * Each watchlist item contains a `notes` field with text entered by the user.
		 * #### Sorting Headers
		 * By default, all list items are sorted by `rank` `asc`. We send `X-Applied-Sort-By` and `X-Applied-Sort-How` headers to indicate how the results are actually being sorted.
		 * We also send `X-Sort-By` and `X-Sort-How` headers which indicate the user's sort preference. Use these to to custom sort the watchlist _**in your app**_ for more advanced sort abilities we can't do in the API. Values for `X-Sort-By` include `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, and `votes`. Values for `X-Sort-How` include `asc` and `desc`.
		 * #### Auto Removal
		 * When an item is watched, it will be automatically removed from the watchlist. For shows and seasons, watching 1 episode will remove the entire show or season.
		 * _**The watchlist should not be used as a list of what the user is actively watching.**_
		 * Use a combination of the [*sync/watched**](/reference/sync/get-watched) and [*shows/:id/progress**](/reference/shows/watched-progress) methods to get what the user is actively watching.
		 * Get sync/watchlist/{type}/{sort}
		 * @param {SyncHistory_type_idGetByStart_atAndEnd_atType} type Filter for a specific item type
		 * @param {SyncRecommendations_type_sortGetSort} sort How to sort (only if type is also sent)
		 * @return {void} ```
		 * /sync/watchlist/episodes
		 * ```
		 */
		SyncWatchlist_type_sortGet(type: SyncHistory_type_idGetByStart_atAndEnd_atType, sort: SyncRecommendations_type_sortGetSort, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sync/watchlist/' + type + '/' + sort, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get hidden items
		 * #### &#128274; OAuth Required &#128196; Pagination &#10024; Extended Info
		 * Get hidden items for a section. This will return an array of standard media objects. You can optionally limit the `type` of results to return.
		 * Get users/hidden/{section}
		 * @param {UsersHidden_sectionGetByTypeType} type Narrow down by element type.
		 * @return {void} OK
		 */
		UsersHidden_sectionGetByType(section: UsersHidden_sectionGetByTypeSection, type: UsersHidden_sectionGetByTypeType | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/hidden/' + section + '?type=' + type, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add hidden items
		 * #### &#128274; OAuth Required
		 * Hide items for a specific section. Here's what type of items can hidden for each section.
		 * #### Hideable Media Objects
		 * | Section | Objects |
		 * |---|---|---|
		 * | `calendar` | `movie`, `show` |
		 * | `progress_watched` | `show`, `season` |
		 * | `progress_collected` | `show`, `season` |
		 * | `recommendations` | `movie`, `show` |
		 * | `comments` | `user` |
		 * #### JSON POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | `movies` | array | Array of `movie` objects. (see examples &#8594;) |
		 * | `shows` | array | Array of `show` objects. |
		 * | `seasons` | array | Array of `season` objects. |
		 * | `users` | array | Array of `user` objects. |
		 * Post users/hidden/{section}
		 * @return {void} 
		 */
		UsersHidden_sectionPost(section: UsersHidden_sectionPostSection, requestBody: Add_hidden_itemsBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/hidden/' + section, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove hidden items
		 * #### &#128274; OAuth Required
		 * Unhide items for a specific section. Here's what type of items can unhidden for each section.
		 * #### Unhideable Media Objects
		 * | Section | Objects |
		 * |---|---|---|
		 * | `calendar` | `movie`, `show` |
		 * | `progress_watched` | `show`, `season` |
		 * | `progress_collected` | `show`, `season` |
		 * | `recommendations` | `movie`, `show` |
		 * | `comments` | `user` |
		 * #### JSON POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | `movies` | array | Array of `movie` objects. (see examples &#8594;) |
		 * | `shows` | array | Array of `show` objects. |
		 * | `seasons` | array | Array of `season` objects. |
		 * | `users` | array | Array of `user` objects. |
		 * Post users/hidden/{section}/remove
		 * @return {void} OK
		 */
		UsersHidden_sectionRemovePost(section: UsersHidden_sectionRemovePostSection, requestBody: Add_hidden_itemsBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/hidden/' + section + '/remove', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get follow requests
		 * #### &#128274; OAuth Required &#10024; Extended Info
		 * List a user's pending follow requests so they can either approve or deny them.
		 * Get users/requests
		 * @return {void} OK
		 */
		UsersRequestsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/requests', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get pending following requests
		 * #### &#128274; OAuth Required &#10024; Extended Info
		 * List a user's pending following requests that they're waiting for the other user's to approve.
		 * Get users/requests/following
		 * @return {void} OK
		 */
		UsersRequestsFollowingGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/requests/following', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deny follow request
		 * #### &#128274; OAuth Required
		 * Deny a follower using the `id` of the request. If the `id` is not found, was already approved, or was already denied, a `404` error will be returned.
		 * Delete users/requests/{id}
		 * @param {string} id Automatically added
		 * @return {void} 
		 */
		UsersRequests_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/requests/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Approve follow request
		 * #### &#128274; OAuth Required
		 * Approve a follower using the `id` of the request. If the `id` is not found, was already approved, or was already denied, a `404` error will be returned.
		 * Post users/requests/{id}
		 * @param {string} id ID of the follower request.
		 * @return {void} OK
		 */
		UsersRequests_idPost(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/requests/' + (id == null ? '' : encodeURIComponent(id)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get saved filters
		 * #### &#128274; OAuth Required &#128196; Pagination 🔥 VIP Only
		 * Get all saved filters a user has created. The `path` and `query` can be used to construct an API path to retrieve the saved data. Think of this like a dynamically updated list.
		 * Get users/saved_filters/{section}
		 * @return {void} OK
		 */
		UsersSaved_filters_sectionGet(section: UsersSaved_filters_sectionGetSection, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/saved_filters/' + section, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve settings
		 * #### &#128274; OAuth Required
		 * Get the user's settings so you can align your app's experience with what they're used to on the trakt website. A globally unique `uuid` is also returned, which can be used to identify the user locally in your app if needed. However, the `uuid` can't be used to retrieve data from the Trakt API.
		 * Get users/settings
		 * @return {void} OK
		 */
		UsersSettingsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/settings', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get user profile
		 * #### &#128275; OAuth Optional &#10024; Extended Info
		 * Get a user's profile information. If the user is private, info will only be returned if you send OAuth and are either that user or an approved follower. Adding `?extended=vip` will return some additional VIP related fields so you can display the user's Trakt VIP status and year count.
		 * Get users/{id}
		 * @param {string} id User slug
		 * @return {void} ```
		 * /users/sean?extended=vip
		 * ```
		 */
		Users_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get collection
		 * #### &#128275; OAuth Optional &#10024; Extended Info
		 * Get all collected items in a user's collection. A collected item indicates availability to watch digitally or on physical media.
		 * Each `movie` object contains `collected_at` and `updated_at` timestamps. Since users can set custom dates when they collected movies, it is possible for `collected_at` to be in the past. We also include `updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movie if you see a newer timestamp.
		 * Each `show` object contains `last_collected_at` and `last_updated_at` timestamps. Since users can set custom dates when they collected episodes, it is possible for `last_collected_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the show if you see a newer timestamp.
		 * If you add `?extended=metadata` to the URL, it will return the additional `media_type`, `resolution`, `hdr`, `audio`, `audio_channels` and '3d' metadata. It will use `null` if the metadata isn't set for an item.
		 * Get users/{id}/collection/{type}
		 * @param {string} id User slug
		 * @return {void} ```
		 * /users/sean/collection/shows?extended=metadata
		 * ```
		 */
		Users_idCollection_typeGet(id: string, type: Certifications_typeGetType, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/collection/' + type, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get comments
		 * #### &#128275; OAuth Optional &#128196; Pagination &#10024; Extended Info
		 * Returns the most recently written comments for the user. You can optionally filter by the `comment_type` and media `type` to limit what gets returned.
		 * By default, only top level comments are returned. Set `?include_replies=true` to return replies in addition to top level comments. Set `?include_replies=only` to return only replies and no top level comments.
		 * Get users/{id}/comments/{comment_type}/{type}
		 * @param {string} id User slug
		 * @param {Users_idComments_comment_type_typeGetByInclude_repliesInclude_replies} include_replies include comment replies
		 * @return {void} ```
		 * /users/sean/comments
		 * ```
		 */
		Users_idComments_comment_type_typeGetByInclude_replies(id: string, comment_type: CommentsRecent_comment_type_typeGetByInclude_repliesComment_type, type: CommentsRecent_comment_type_typeGetByInclude_repliesType, include_replies: Users_idComments_comment_type_typeGetByInclude_repliesInclude_replies | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/comments/' + comment_type + '/' + type + '&include_replies=' + include_replies, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unfollow this user
		 * #### &#128274; OAuth Required
		 * Unfollow someone you already follow.
		 * Delete users/{id}/follow
		 * @param {string} id Automatically added
		 * @return {void} 
		 */
		Users_idFollowDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/follow', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Follow this user
		 * #### &#128274; OAuth Required
		 * If the user has a private profile, the follow request will require approval (`approved_at` will be null). If a user is public, they will be followed immediately (`approved_at` will have a date).
		 * **Note:** If this user is already being followed, a `409` HTTP status code will returned.
		 * Post users/{id}/follow
		 * @param {string} id User slug
		 * @return {void} 
		 */
		Users_idFollowPost(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/follow', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get followers
		 * #### &#128275; OAuth Optional &#10024; Extended Info
		 * Returns all followers including when the relationship began.
		 * Get users/{id}/followers
		 * @param {string} id User slug
		 * @return {void} OK
		 */
		Users_idFollowersGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/followers', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get following
		 * #### &#128275; OAuth Optional &#10024; Extended Info
		 * Returns all user's they follow including when the relationship began.
		 * Get users/{id}/following
		 * @param {string} id User slug
		 * @return {void} OK
		 */
		Users_idFollowingGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/following', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get friends
		 * #### &#128275; OAuth Optional &#10024; Extended Info
		 * Returns all friends for a user including when the relationship began. Friendship is a 2 way relationship where each user follows the other.
		 * Get users/{id}/friends
		 * @param {string} id User slug
		 * @return {void} OK
		 */
		Users_idFriendsGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/friends', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get watched history
		 * #### &#128275; OAuth Optional &#128196; Pagination &#10024; Extended Info
		 * Returns movies and episodes that a user has watched, sorted by most recent. You can optionally limit the `type` to `movies` or `episodes`. The `id` _(64-bit integer)_ in each history item uniquely identifies the event and can be used to remove individual events by using the [*sync/history/remove**](#reference/sync/remove-from-history/get-watched-history) method. The `action` will be set to `scrobble`, `checkin`, or `watch`.
		 * Specify a `type` and trakt `item_id` to limit the history for just that item. If the `item_id` is valid, but there is no history, an empty array will be returned.
		 * | Example URL | Returns watches for... |
		 * |---|---|
		 * | `/history/movies/12601` | TRON: Legacy |
		 * | `/history/shows/1388` | All episodes of Breaking Bad |
		 * | `/history/seasons/3950` | All episodes of Breaking Bad: Season 1 |
		 * | `/history/episodes/73482` | Only episode 1 for Breaking Bad: Season 1 |
		 * Get users/{id}/history/{type}/{item_id}
		 * @param {string} id User slug
		 * @param {number} item_id Trakt ID for a specific item.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} start_at Starting date.
		 * @param {string} end_at Ending date.
		 * @return {void} ```
		 * /users/sean/history/episodes
		 * ```
		 */
		Users_idHistory_type_item_idGetByStart_atAndEnd_at(id: string, type: SyncHistory_type_idGetByStart_atAndEnd_atType, item_id: number, start_at: string | null | undefined, end_at: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/history/' + type + '/' + item_id + '&start_at=' + (start_at == null ? '' : encodeURIComponent(start_at)) + '&end_at=' + (end_at == null ? '' : encodeURIComponent(end_at)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get likes
		 * #### &#128274; OAuth Optional &#128196; Pagination
		 * Get items a user likes. This will return an array of standard media objects. You can optionally limit the `type` of results to return.
		 * #### Comment Media Objects
		 * If you add `?extended=comments` to the URL, it will return media objects for each comment like.
		 * **Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!
		 * Get users/{id}/likes/{type}
		 * @param {string} id User slug
		 * @return {void} ```
		 * /users/sean/likes/lists
		 * ```
		 */
		Users_idLikes_typeGet(id: string, type: Users_idLikes_typeGetType, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/likes/' + type, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a user's personal lists
		 * #### &#128275; OAuth Optional &#128513; Emojis
		 * Returns all personal lists for a user. Use the [*users/:id/lists/:list_id/items**](#reference/users/list-items) method to get the actual items a specific list contains.
		 * Get users/{id}/lists
		 * @param {string} id User slug
		 * @return {void} OK
		 */
		Users_idListsGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/lists', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create personal list
		 * #### &#128274; OAuth Required 🔥 VIP Enhanced
		 * Create a new personal list. The `name` is the only required field, but the other info is recommended to ask for.
		 * #### Limits
		 * If the user's list limit is exceeded, a `420` HTTP error code is returned. Use the [*users/settings**](/reference/users/settings) method to get all limits for a user account. In most cases, upgrading to [**Trakt VIP**](https://trakt.tv/vip) will increase the limits.
		 * #### Privacy
		 * Lists will be `private` by default. Here is what each value means.
		 * | Value | Privacy impact... |
		 * |---|---|
		 * | `private` | Only you can see the list. |
		 * | `link` | Anyone with the `share_link` can see the list. |
		 * | `friends` | Only your friends can see the list. |
		 * | `public` | Anyone can see the list. |
		 * #### JSON POST Data
		 * | Key | Type | Default | Value |
		 * |---|---|---|---|
		 * | `name` <span style="color:red;">*</a> | string |  | Name of the list. |
		 * | `description` | string |  | Description for this list. |
		 * | `privacy` | string | `private` | `private`, `link`, `friends`, `public` |
		 * | `display_numbers` | boolean | `false` | Should each item be numbered? |
		 * | `allow_comments` | boolean | `true` | Are comments allowed? |
		 * | `sort_by` | string | `rank` | `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, `votes`, `my_rating`, `random`, `watched`, `collected` |
		 * | `sort_how` | string | `asc` | `asc`, `desc` |
		 * Post users/{id}/lists
		 * @param {string} id Automatically added
		 * @return {void} 
		 */
		Users_idListsPost(id: string, requestBody: Users_idListsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/lists', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all lists a user can collaborate on
		 * #### &#128275; OAuth Optional
		 * Returns all lists a user can collaborate on. This gives full access to add, remove, and re-order list items. It essentially works just like a list owned by the user, just make sure to use the correct list owner `user` when building the API URLs.
		 * Get users/{id}/lists/collaborations
		 * @param {string} id User slug
		 * @return {void} OK
		 */
		Users_idListsCollaborationsGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/lists/collaborations', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reorder a user's lists
		 * #### &#128274; OAuth Required
		 * Reorder all lists by sending the updated `rank` of list ids. Use the [*users/:id/lists**](#reference/users/lists) method to get all list ids.
		 * Post users/{id}/lists/reorder
		 * @param {string} id User slug
		 * @return {void} OK
		 */
		Users_idListsReorderPost(id: string, requestBody: Users_idListsReorderPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/lists/reorder', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a user's personal list
		 * #### &#128274; OAuth Required
		 * Remove a personal list and all items it contains.
		 * Delete users/{id}/lists/{list_id}
		 * @param {string} id Automatically added
		 * @param {string} list_id Automatically added
		 * @return {void} 
		 */
		Users_idLists_list_idDelete(id: string, list_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/lists/' + (list_id == null ? '' : encodeURIComponent(list_id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get personal list
		 * #### &#128275; OAuth Optional &#128513; Emojis
		 * Returns a single personal list. Use the [*users/:id/lists/:list_id/items**](#reference/users/list-items) method to get the actual items this list contains.
		 * Get users/{id}/lists/{list_id}
		 * @param {string} id User slug
		 * @param {string} list_id Trakt ID or Trakt slug
		 * @return {void} OK
		 */
		Users_idLists_list_idGet(id: string, list_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/lists/' + (list_id == null ? '' : encodeURIComponent(list_id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update personal list
		 * #### &#128274; OAuth Required
		 * Update a personal list by sending 1 or more parameters. If you update the list name, the original slug will still be retained so existing references to this list won't break.
		 * #### Privacy
		 * Lists will be `private` by default. Here is what each value means.
		 * | Value | Privacy impact... |
		 * |---|---|
		 * | `private` | Only you can see the list. |
		 * | `link` | Anyone with the `share_link` can see the list. |
		 * | `friends` | Only your friends can see the list. |
		 * | `public` | Anyone can see the list. |
		 * #### JSON POST Data
		 * | Key | Type | Value |
		 * |---|---|---|---|
		 * | `name` | string | Name of the list. |
		 * | `description` | string | Description for this list. |
		 * | `privacy` | string | `private`, `link`, `friends`, `public` |
		 * | `display_numbers` | boolean | Should each item be numbered? |
		 * | `allow_comments` | boolean | Are comments allowed? |
		 * | `sort_by` | string | `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, `votes`, `my_rating`, `random`, `watched`, `collected` |
		 * | `sort_how` | string | `asc`, `desc` |
		 * Put users/{id}/lists/{list_id}
		 * @param {string} id Automatically added
		 * @param {string} list_id Automatically added
		 * @return {void} OK
		 */
		Users_idLists_list_idPut(id: string, list_id: string, requestBody: Users_idLists_list_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/lists/' + (list_id == null ? '' : encodeURIComponent(list_id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all list comments
		 * #### &#128275; OAuth Optional &#128196; Pagination &#128513; Emojis
		 * Returns all top level comments for a list. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, and most `replies`.
		 * Get users/{id}/lists/{list_id}/comments/{sort}
		 * @param {string} id User slug
		 * @param {string} list_id Trakt ID or Trakt slug
		 * @param {Lists_idComments_sortGetSort} sort how to sort
		 * @return {void} OK
		 */
		Users_idLists_list_idComments_sortGet(id: string, list_id: string, sort: Lists_idComments_sortGetSort, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/lists/' + (list_id == null ? '' : encodeURIComponent(list_id)) + '/comments/' + sort, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add items to personal list
		 * #### &#128274; OAuth Required &#128513; Emojis 🔥 VIP Enhanced
		 * Add one or more items to a personal list. Items can be movies, shows, seasons, episodes, or people.
		 * #### Notes
		 * Each list item can optionally accept a `notes` *(255 maximum characters)* field with custom text. The user must be a [**Trakt VIP**](https://trakt.tv/vip) to send `notes`.
		 * #### Limits
		 * If the user's list item limit is exceeded, a `420` HTTP error code is returned. Use the [*users/settings**](/reference/users/settings) method to get all limits for a user account. In most cases, upgrading to [**Trakt VIP**](https://trakt.tv/vip) will increase the limits.
		 * #### JSON POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | `movies` | array | Array of `movie` objects. (see examples &#8594;) |
		 * | `shows` | array | Array of `show` objects. |
		 * | `seasons` | array | Array of `season` objects. |
		 * | `episodes` | array | Array of `episode` objects. |
		 * | `people` | array | Array of `person` objects. |
		 * Post users/{id}/lists/{list_id}/items
		 * @param {string} id User slug
		 * @param {string} list_id Trakt ID or Trakt slug
		 * @return {void} 
		 */
		Users_idLists_list_idItemsPost(id: string, list_id: string, requestBody: Users_idLists_list_idItemsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/lists/' + (list_id == null ? '' : encodeURIComponent(list_id)) + '/items', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove items from personal list
		 * #### &#128274; OAuth Required
		 * Remove one or more items from a personal list.
		 * #### JSON POST Data
		 * | Key | Type | Value |
		 * |---|---|---|
		 * | `movies` | array | Array of `movie` objects. (see examples &#8594;) |
		 * | `shows` | array | Array of `show` objects. |
		 * | `seasons` | array | Array of `season` objects. |
		 * | `episodes` | array | Array of `episode` objects. |
		 * | `people` | array | Array of `person` objects. |
		 * Post users/{id}/lists/{list_id}/items/remove
		 * @param {string} id User slug
		 * @param {string} list_id Trakt ID or Trakt slug
		 * @return {void} OK
		 */
		Users_idLists_list_idItemsRemovePost(id: string, list_id: string, requestBody: Users_idLists_list_idItemsRemovePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/lists/' + (list_id == null ? '' : encodeURIComponent(list_id)) + '/items/remove', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Reorder items on a list
		 * #### &#128274; OAuth Required
		 * Reorder all items on a list by sending the updated `rank` of list item ids. Use the [*users/:id/lists/:list_id/items**](#reference/users/list-items) method to get all list item ids.
		 * Post users/{id}/lists/{list_id}/items/reorder
		 * @param {string} id User slug
		 * @param {string} list_id Trakt ID or Trakt slug
		 * @return {void} OK
		 */
		Users_idLists_list_idItemsReorderPost(id: string, list_id: string, requestBody: Reorder_watchlist_itemsBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/lists/' + (list_id == null ? '' : encodeURIComponent(list_id)) + '/items/reorder', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get items on a personal list
		 * #### &#128275; OAuth Optional &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis
		 * Get all items on a personal list. Items can be a `movie`, `show`, `season`, `episode`, or `person`. You can optionally specify the `type` parameter with a single value or comma delimited string for multiple item types.
		 * #### Notes
		 * Each list item contains a `notes` field with text entered by the user.
		 * #### Sorting Headers
		 * All list items are sorted by ascending `rank`. We also send `X-Sort-By` and `X-Sort-How` headers which can be used to custom sort the list _**in your app**_ based on the user's preference. Values for `X-Sort-By` include `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, `votes`, `my_rating`, `random`, `watched`, and `collected`. Values for `X-Sort-How` include `asc` and `desc`.
		 * Get users/{id}/lists/{list_id}/items/{type}
		 * @param {string} id User slug
		 * @param {string} list_id Trakt ID or Trakt slug
		 * @param {Lists_idItems_typeGetType} type Filter for a specific item type
		 * @return {void} OK
		 */
		Users_idLists_list_idItems_typeGet(id: string, list_id: string, type: Lists_idItems_typeGetType, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/lists/' + (list_id == null ? '' : encodeURIComponent(list_id)) + '/items/' + type, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove like on a list
		 * #### &#128274; OAuth Required
		 * Remove a like on a list.
		 * Delete users/{id}/lists/{list_id}/like
		 * @param {string} id Automatically added
		 * @param {string} list_id Automatically added
		 * @return {void} 
		 */
		Users_idLists_list_idLikeDelete(id: string, list_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/lists/' + (list_id == null ? '' : encodeURIComponent(list_id)) + '/like', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Like a list
		 * #### &#128274; OAuth Required
		 * Votes help determine popular lists. Only one like is allowed per list per user.
		 * Post users/{id}/lists/{list_id}/like
		 * @param {string} id User slug
		 * @param {string} list_id Trakt ID or Trakt slug
		 * @return {void} 
		 */
		Users_idLists_list_idLikePost(id: string, list_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/lists/' + (list_id == null ? '' : encodeURIComponent(list_id)) + '/like', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all users who liked a list
		 * #### &#128275; OAuth Optional &#128196; Pagination
		 * Returns all users who liked a list.
		 * Get users/{id}/lists/{list_id}/likes
		 * @param {string} id User slug
		 * @param {string} list_id Trakt ID or Trakt slug
		 * @return {void} OK
		 */
		Users_idLists_list_idLikesGet(id: string, list_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/lists/' + (list_id == null ? '' : encodeURIComponent(list_id)) + '/likes', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get ratings
		 * #### &#128275; OAuth Optional &#128196; Pagination Optional &#10024; Extended Info
		 * Get a user's ratings filtered by `type`. You can optionally filter for a specific `rating` between 1 and 10. Send a comma separated string for `rating` if you need multiple ratings.
		 * Get users/{id}/ratings/{type}/{rating}
		 * @param {string} id User slug
		 * @param {Users_idRatings_type_ratingGetRating} rating Filter for a specific rating.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} ```
		 * /users/sean/ratings/episodes
		 * ```
		 */
		Users_idRatings_type_ratingGet(id: string, type: SyncRatings_type_ratingGetType, rating: Users_idRatings_type_ratingGetRating, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/ratings/' + type + '/' + rating, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get personal recommendations
		 * #### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis
		 * Returns the top 50 items a user personally recommendeds to others. These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.
		 * #### Notes
		 * Each recommendation contains a `notes` field explaining why the user recommended the item.
		 * Get users/{id}/recommendations/{type}/{sort}
		 * @param {string} id User slug
		 * @param {Certifications_typeGetType} type Filter for a specific item type
		 * @param {SyncRecommendations_type_sortGetSort} sort How to sort (only if type is also sent)
		 * @return {void} ```
		 * /users/justin/recommendations/shows
		 * ```
		 */
		Users_idRecommendations_type_sortGet(id: string, type: Certifications_typeGetType, sort: SyncRecommendations_type_sortGetSort, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/recommendations/' + type + '/' + sort, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get stats
		 * #### &#128275; OAuth Optional
		 * Returns stats about the movies, shows, and episodes a user has watched, collected, and rated.
		 * Get users/{id}/stats
		 * @param {string} id User slug
		 * @return {void} OK
		 */
		Users_idStatsGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/stats', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get watched
		 * #### &#128275; OAuth Optional &#10024; Extended Info
		 * Returns all movies or shows a user has watched sorted by most plays.
		 * If `type` is set to _shows_ and you add `?extended=noseasons` to the URL, it won't return season or episode info.
		 * Each `movie` and `show` object contains `last_watched_at` and `last_updated_at` timestamps. Since users can set custom dates when they watched movies and episodes, it is possible for `last_watched_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movies and shows if you see a newer timestamp.
		 * Each `show` object contains a `reset_at` timestamp. If not `null`, this is when the user started re-watching the show. Your app can adjust the progress by ignoring episodes with a `last_watched_at` prior to the `reset_at`.
		 * Get users/{id}/watched/{type}
		 * @param {string} id User slug
		 * @return {void} ```
		 * /users/sean/watched/shows?extended=noseasons
		 * ```
		 */
		Users_idWatched_typeGet(id: string, type: Certifications_typeGetType, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/watched/' + type, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get watching
		 * #### &#128275; OAuth Optional &#10024; Extended Info
		 * Returns a movie or episode if the user is currently watching something.  If they are not, it returns no data and a `204` HTTP status code.
		 * Get users/{id}/watching
		 * @param {string} id User slug
		 * @return {void} Currently watching a `movie`.
		 */
		Users_idWatchingGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/watching', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get watchlist
		 * #### &#128275; OAuth Optional &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis
		 * Returns all items in a user's watchlist filtered by type.
		 * #### Notes
		 * Each watchlist item contains a `notes` field with text entered by the user.
		 * #### Sorting Headers
		 * By default, all list items are sorted by `rank` `asc`. We send `X-Applied-Sort-By` and `X-Applied-Sort-How` headers to indicate how the results are actually being sorted.
		 * We also send `X-Sort-By` and `X-Sort-How` headers which indicate the user's sort preference. Use these to to custom sort the watchlist _**in your app**_ for more advanced sort abilities we can't do in the API. Values for `X-Sort-By` include `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, and `votes`. Values for `X-Sort-How` include `asc` and `desc`.
		 * #### Auto Removal
		 * When an item is watched, it will be automatically removed from the watchlist. For shows and seasons, watching 1 episode will remove the entire show or season.
		 * _**The watchlist should not be used as a list of what the user is actively watching.**_
		 * Use a combination of the [*sync/watched**](/reference/sync/get-watched) and [*shows/:id/progress**](/reference/shows/watched-progress) methods to get what the user is actively watching.
		 * Get users/{id}/watchlist/{type}/{sort}
		 * @param {string} id User slug
		 * @param {SyncHistory_type_idGetByStart_atAndEnd_atType} type Filter for a specific item type
		 * @param {SyncRecommendations_type_sortGetSort} sort How to sort (only if type is also sent)
		 * @return {void} ```
		 * /users/sean/watchlist/episodes
		 * ```
		 */
		Users_idWatchlist_type_sortGet(id: string, type: SyncHistory_type_idGetByStart_atAndEnd_atType, sort: SyncRecommendations_type_sortGetSort, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/watchlist/' + type + '/' + sort, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum Certifications_typeGetType { movies = 'movies', shows = 'shows' }

	export interface CheckinPostPostBody {
		app_date?: string | null;
		app_version?: string | null;
		message?: string | null;
		movie?: CheckinPostPostBodyMovie;
		sharing?: CheckinPostPostBodySharing;
	}
	export interface CheckinPostPostBodyFormProperties {
		app_date: FormControl<string | null | undefined>,
		app_version: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCheckinPostPostBodyFormGroup() {
		return new FormGroup<CheckinPostPostBodyFormProperties>({
			app_date: new FormControl<string | null | undefined>(undefined),
			app_version: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CheckinPostPostBodyMovie {
		ids?: CheckinPostPostBodyMovieIds;
		title?: string | null;

		/** Type: double */
		year?: number | null;
	}
	export interface CheckinPostPostBodyMovieFormProperties {
		title: FormControl<string | null | undefined>,

		/** Type: double */
		year: FormControl<number | null | undefined>,
	}
	export function CreateCheckinPostPostBodyMovieFormGroup() {
		return new FormGroup<CheckinPostPostBodyMovieFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CheckinPostPostBodyMovieIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;
	}
	export interface CheckinPostPostBodyMovieIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,
	}
	export function CreateCheckinPostPostBodyMovieIdsFormGroup() {
		return new FormGroup<CheckinPostPostBodyMovieIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CheckinPostPostBodySharing {
		mastodon?: boolean | null;
		tumblr?: boolean | null;
		twitter?: boolean | null;
	}
	export interface CheckinPostPostBodySharingFormProperties {
		mastodon: FormControl<boolean | null | undefined>,
		tumblr: FormControl<boolean | null | undefined>,
		twitter: FormControl<boolean | null | undefined>,
	}
	export function CreateCheckinPostPostBodySharingFormGroup() {
		return new FormGroup<CheckinPostPostBodySharingFormProperties>({
			mastodon: new FormControl<boolean | null | undefined>(undefined),
			tumblr: new FormControl<boolean | null | undefined>(undefined),
			twitter: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CommentsPostPostBody {
		comment?: string | null;
		movie?: CommentsPostPostBodyMovie;
		sharing?: CommentsPostPostBodySharing;
		spoiler?: boolean | null;
	}
	export interface CommentsPostPostBodyFormProperties {
		comment: FormControl<string | null | undefined>,
		spoiler: FormControl<boolean | null | undefined>,
	}
	export function CreateCommentsPostPostBodyFormGroup() {
		return new FormGroup<CommentsPostPostBodyFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			spoiler: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CommentsPostPostBodyMovie {
		ids?: CommentsPostPostBodyMovieIds;
		title?: string | null;

		/** Type: double */
		year?: number | null;
	}
	export interface CommentsPostPostBodyMovieFormProperties {
		title: FormControl<string | null | undefined>,

		/** Type: double */
		year: FormControl<number | null | undefined>,
	}
	export function CreateCommentsPostPostBodyMovieFormGroup() {
		return new FormGroup<CommentsPostPostBodyMovieFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CommentsPostPostBodyMovieIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;
	}
	export interface CommentsPostPostBodyMovieIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,
	}
	export function CreateCommentsPostPostBodyMovieIdsFormGroup() {
		return new FormGroup<CommentsPostPostBodyMovieIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CommentsPostPostBodySharing {
		medium?: boolean | null;
		tumblr?: boolean | null;
		twitter?: boolean | null;
	}
	export interface CommentsPostPostBodySharingFormProperties {
		medium: FormControl<boolean | null | undefined>,
		tumblr: FormControl<boolean | null | undefined>,
		twitter: FormControl<boolean | null | undefined>,
	}
	export function CreateCommentsPostPostBodySharingFormGroup() {
		return new FormGroup<CommentsPostPostBodySharingFormProperties>({
			medium: new FormControl<boolean | null | undefined>(undefined),
			tumblr: new FormControl<boolean | null | undefined>(undefined),
			twitter: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CommentsRecent_comment_type_typeGetByInclude_repliesComment_type { all = 'all', reviews = 'reviews', shouts = 'shouts' }

	export enum CommentsRecent_comment_type_typeGetByInclude_repliesType { all = 'all', movies = 'movies', shows = 'shows', seasons = 'seasons', episodes = 'episodes', lists = 'lists' }

	export interface Comments_idPutPutBody {
		comment?: string | null;
		spoiler?: boolean | null;
	}
	export interface Comments_idPutPutBodyFormProperties {
		comment: FormControl<string | null | undefined>,
		spoiler: FormControl<boolean | null | undefined>,
	}
	export function CreateComments_idPutPutBodyFormGroup() {
		return new FormGroup<Comments_idPutPutBodyFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			spoiler: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Comments_idRepliesPostPostBody {
		comment?: string | null;
		spoiler?: boolean | null;
	}
	export interface Comments_idRepliesPostPostBodyFormProperties {
		comment: FormControl<string | null | undefined>,
		spoiler: FormControl<boolean | null | undefined>,
	}
	export function CreateComments_idRepliesPostPostBodyFormGroup() {
		return new FormGroup<Comments_idRepliesPostPostBodyFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			spoiler: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum Lists_idComments_sortGetSort { newest = 'newest', oldest = 'oldest', likes = 'likes', replies = 'replies' }

	export enum Lists_idItems_typeGetType { movie = 'movie', show = 'show', season = 'season', episode = 'episode', person = 'person' }

	export enum MoviesCollected_periodGetPeriod { daily = 'daily', weekly = 'weekly', monthly = 'monthly', yearly = 'yearly', all = 'all' }

	export enum Movies_idComments_sortGetSort { newest = 'newest', oldest = 'oldest', likes = 'likes', replies = 'replies', highest = 'highest', lowest = 'lowest', plays = 'plays' }

	export enum Movies_idLists_type_sortGetType { all = 'all', personal = 'personal', official = 'official', watchlists = 'watchlists', recommendations = 'recommendations' }

	export enum Movies_idLists_type_sortGetSort { popular = 'popular', likes = 'likes', comments = 'comments', items = 'items', added = 'added', updated = 'updated' }

	export interface OauthDeviceCodePostPostBody {
		client_id?: string | null;
	}
	export interface OauthDeviceCodePostPostBodyFormProperties {
		client_id: FormControl<string | null | undefined>,
	}
	export function CreateOauthDeviceCodePostPostBodyFormGroup() {
		return new FormGroup<OauthDeviceCodePostPostBodyFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OauthDeviceTokenPostPostBody {
		client_id?: string | null;
		client_secret?: string | null;
		code?: string | null;
	}
	export interface OauthDeviceTokenPostPostBodyFormProperties {
		client_id: FormControl<string | null | undefined>,
		client_secret: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,
	}
	export function CreateOauthDeviceTokenPostPostBodyFormGroup() {
		return new FormGroup<OauthDeviceTokenPostPostBodyFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined),
			client_secret: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OauthRevokePostPostBody {
		client_id?: string | null;
		client_secret?: string | null;
		token?: string | null;
	}
	export interface OauthRevokePostPostBodyFormProperties {
		client_id: FormControl<string | null | undefined>,
		client_secret: FormControl<string | null | undefined>,
		token: FormControl<string | null | undefined>,
	}
	export function CreateOauthRevokePostPostBodyFormGroup() {
		return new FormGroup<OauthRevokePostPostBodyFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined),
			client_secret: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OauthTokenPostPostBody {
		client_id?: string | null;
		client_secret?: string | null;
		grant_type?: string | null;
		redirect_uri?: string | null;
		refresh_token?: string | null;
	}
	export interface OauthTokenPostPostBodyFormProperties {
		client_id: FormControl<string | null | undefined>,
		client_secret: FormControl<string | null | undefined>,
		grant_type: FormControl<string | null | undefined>,
		redirect_uri: FormControl<string | null | undefined>,
		refresh_token: FormControl<string | null | undefined>,
	}
	export function CreateOauthTokenPostPostBodyFormGroup() {
		return new FormGroup<OauthTokenPostPostBodyFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined),
			client_secret: new FormControl<string | null | undefined>(undefined),
			grant_type: new FormControl<string | null | undefined>(undefined),
			redirect_uri: new FormControl<string | null | undefined>(undefined),
			refresh_token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum People_idLists_type_sortGetType { all = 'all', personal = 'personal', official = 'official' }

	export enum RecommendationsMoviesGetByIgnore_collectedAndIgnore_watchlistedIgnore_collected { true = 'true', false = 'false' }

	export interface ScrobblePausePostPostBody {
		app_date?: string | null;
		app_version?: string | null;
		movie?: ScrobblePausePostPostBodyMovie;

		/** Type: double */
		progress?: number | null;
	}
	export interface ScrobblePausePostPostBodyFormProperties {
		app_date: FormControl<string | null | undefined>,
		app_version: FormControl<string | null | undefined>,

		/** Type: double */
		progress: FormControl<number | null | undefined>,
	}
	export function CreateScrobblePausePostPostBodyFormGroup() {
		return new FormGroup<ScrobblePausePostPostBodyFormProperties>({
			app_date: new FormControl<string | null | undefined>(undefined),
			app_version: new FormControl<string | null | undefined>(undefined),
			progress: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScrobblePausePostPostBodyMovie {
		ids?: ScrobblePausePostPostBodyMovieIds;
		title?: string | null;

		/** Type: double */
		year?: number | null;
	}
	export interface ScrobblePausePostPostBodyMovieFormProperties {
		title: FormControl<string | null | undefined>,

		/** Type: double */
		year: FormControl<number | null | undefined>,
	}
	export function CreateScrobblePausePostPostBodyMovieFormGroup() {
		return new FormGroup<ScrobblePausePostPostBodyMovieFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScrobblePausePostPostBodyMovieIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;
	}
	export interface ScrobblePausePostPostBodyMovieIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,
	}
	export function CreateScrobblePausePostPostBodyMovieIdsFormGroup() {
		return new FormGroup<ScrobblePausePostPostBodyMovieIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScrobbleStartPostPostBody {
		app_date?: string | null;
		app_version?: string | null;
		movie?: ScrobbleStartPostPostBodyMovie;

		/** Type: double */
		progress?: number | null;
	}
	export interface ScrobbleStartPostPostBodyFormProperties {
		app_date: FormControl<string | null | undefined>,
		app_version: FormControl<string | null | undefined>,

		/** Type: double */
		progress: FormControl<number | null | undefined>,
	}
	export function CreateScrobbleStartPostPostBodyFormGroup() {
		return new FormGroup<ScrobbleStartPostPostBodyFormProperties>({
			app_date: new FormControl<string | null | undefined>(undefined),
			app_version: new FormControl<string | null | undefined>(undefined),
			progress: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScrobbleStartPostPostBodyMovie {
		ids?: ScrobbleStartPostPostBodyMovieIds;
		title?: string | null;

		/** Type: double */
		year?: number | null;
	}
	export interface ScrobbleStartPostPostBodyMovieFormProperties {
		title: FormControl<string | null | undefined>,

		/** Type: double */
		year: FormControl<number | null | undefined>,
	}
	export function CreateScrobbleStartPostPostBodyMovieFormGroup() {
		return new FormGroup<ScrobbleStartPostPostBodyMovieFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScrobbleStartPostPostBodyMovieIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;
	}
	export interface ScrobbleStartPostPostBodyMovieIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,
	}
	export function CreateScrobbleStartPostPostBodyMovieIdsFormGroup() {
		return new FormGroup<ScrobbleStartPostPostBodyMovieIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScrobbleStopPostPostBody {
		app_date?: string | null;
		app_version?: string | null;
		movie?: ScrobbleStopPostPostBodyMovie;

		/** Type: double */
		progress?: number | null;
	}
	export interface ScrobbleStopPostPostBodyFormProperties {
		app_date: FormControl<string | null | undefined>,
		app_version: FormControl<string | null | undefined>,

		/** Type: double */
		progress: FormControl<number | null | undefined>,
	}
	export function CreateScrobbleStopPostPostBodyFormGroup() {
		return new FormGroup<ScrobbleStopPostPostBodyFormProperties>({
			app_date: new FormControl<string | null | undefined>(undefined),
			app_version: new FormControl<string | null | undefined>(undefined),
			progress: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScrobbleStopPostPostBodyMovie {
		ids?: ScrobbleStopPostPostBodyMovieIds;
		title?: string | null;

		/** Type: double */
		year?: number | null;
	}
	export interface ScrobbleStopPostPostBodyMovieFormProperties {
		title: FormControl<string | null | undefined>,

		/** Type: double */
		year: FormControl<number | null | undefined>,
	}
	export function CreateScrobbleStopPostPostBodyMovieFormGroup() {
		return new FormGroup<ScrobbleStopPostPostBodyMovieFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScrobbleStopPostPostBodyMovieIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;
	}
	export interface ScrobbleStopPostPostBodyMovieIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,
	}
	export function CreateScrobbleStopPostPostBodyMovieIdsFormGroup() {
		return new FormGroup<ScrobbleStopPostPostBodyMovieIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Search_id_type_idGetByTypeId_type { trakt = 'trakt', imdb = 'imdb', tmdb = 'tmdb', tvdb = 'tvdb' }

	export enum Search_id_type_idGetByTypeType { movie = 'movie', show = 'show', episode = 'episode', person = 'person', list = 'list' }

	export enum Shows_idComments_sortGetSort { newest = 'newest', oldest = 'oldest', likes = 'likes', replies = 'replies', highest = 'highest', lowest = 'lowest', plays = 'plays', watched = 'watched' }

	export enum Shows_idSeasons_seasonEpisodes_episodeLists_type_sortGetType { all = 'all', personal = 'personal', official = 'official', watchlists = 'watchlists' }

	export interface SyncCollectionPostPostBody {
		SyncCollectionPostPostBodyEpisodes?: Array<SyncCollectionPostPostBodyEpisodes>;
		SyncCollectionPostPostBodyMovies?: Array<SyncCollectionPostPostBodyMovies>;
		SyncCollectionPostPostBodySeasons?: Array<SyncCollectionPostPostBodySeasons>;
		SyncCollectionPostPostBodyShows?: Array<SyncCollectionPostPostBodyShows>;
	}
	export interface SyncCollectionPostPostBodyFormProperties {
	}
	export function CreateSyncCollectionPostPostBodyFormGroup() {
		return new FormGroup<SyncCollectionPostPostBodyFormProperties>({
		});

	}

	export interface SyncCollectionPostPostBodyEpisodes {
		ids?: SyncCollectionPostPostBodyEpisodesIds;
	}
	export interface SyncCollectionPostPostBodyEpisodesFormProperties {
	}
	export function CreateSyncCollectionPostPostBodyEpisodesFormGroup() {
		return new FormGroup<SyncCollectionPostPostBodyEpisodesFormProperties>({
		});

	}

	export interface SyncCollectionPostPostBodyEpisodesIds {
		imdb?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface SyncCollectionPostPostBodyEpisodesIdsFormProperties {
		imdb: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateSyncCollectionPostPostBodyEpisodesIdsFormGroup() {
		return new FormGroup<SyncCollectionPostPostBodyEpisodesIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncCollectionPostPostBodyMovies {
		audio?: string | null;
		audio_channels?: string | null;
		collected_at?: string | null;
		hdr?: string | null;

		/** Required */
		ids: SyncCollectionPostPostBodyMoviesIds;
		media_type?: string | null;
		resolution?: string | null;
		title?: string | null;

		/** Type: double */
		year?: number | null;
	}
	export interface SyncCollectionPostPostBodyMoviesFormProperties {
		audio: FormControl<string | null | undefined>,
		audio_channels: FormControl<string | null | undefined>,
		collected_at: FormControl<string | null | undefined>,
		hdr: FormControl<string | null | undefined>,
		media_type: FormControl<string | null | undefined>,
		resolution: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Type: double */
		year: FormControl<number | null | undefined>,
	}
	export function CreateSyncCollectionPostPostBodyMoviesFormGroup() {
		return new FormGroup<SyncCollectionPostPostBodyMoviesFormProperties>({
			audio: new FormControl<string | null | undefined>(undefined),
			audio_channels: new FormControl<string | null | undefined>(undefined),
			collected_at: new FormControl<string | null | undefined>(undefined),
			hdr: new FormControl<string | null | undefined>(undefined),
			media_type: new FormControl<string | null | undefined>(undefined),
			resolution: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncCollectionPostPostBodyMoviesIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;
	}
	export interface SyncCollectionPostPostBodyMoviesIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,
	}
	export function CreateSyncCollectionPostPostBodyMoviesIdsFormGroup() {
		return new FormGroup<SyncCollectionPostPostBodyMoviesIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncCollectionPostPostBodySeasons {
		ids?: SyncCollectionPostPostBodySeasonsIds;
	}
	export interface SyncCollectionPostPostBodySeasonsFormProperties {
	}
	export function CreateSyncCollectionPostPostBodySeasonsFormGroup() {
		return new FormGroup<SyncCollectionPostPostBodySeasonsFormProperties>({
		});

	}

	export interface SyncCollectionPostPostBodySeasonsIds {

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface SyncCollectionPostPostBodySeasonsIdsFormProperties {

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateSyncCollectionPostPostBodySeasonsIdsFormGroup() {
		return new FormGroup<SyncCollectionPostPostBodySeasonsIdsFormProperties>({
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncCollectionPostPostBodyShows {

		/** Required */
		ids: SyncCollectionPostPostBodyShowsIds;

		/** Required */
		SyncCollectionPostPostBodyShowsSeasons: Array<SyncCollectionPostPostBodyShowsSeasons>;

		/** Required */
		title: string;

		/**
		 * Required
		 * Type: double
		 */
		year: number;
	}
	export interface SyncCollectionPostPostBodyShowsFormProperties {

		/** Required */
		title: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateSyncCollectionPostPostBodyShowsFormGroup() {
		return new FormGroup<SyncCollectionPostPostBodyShowsFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			year: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SyncCollectionPostPostBodyShowsIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface SyncCollectionPostPostBodyShowsIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateSyncCollectionPostPostBodyShowsIdsFormGroup() {
		return new FormGroup<SyncCollectionPostPostBodyShowsIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncCollectionPostPostBodyShowsSeasons {
		SyncCollectionPostPostBodyShowsSeasonsEpisodes?: Array<SyncCollectionPostPostBodyShowsSeasonsEpisodes>;

		/**
		 * Required
		 * Type: double
		 */
		number: number;
	}
	export interface SyncCollectionPostPostBodyShowsSeasonsFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		number: FormControl<number | null | undefined>,
	}
	export function CreateSyncCollectionPostPostBodyShowsSeasonsFormGroup() {
		return new FormGroup<SyncCollectionPostPostBodyShowsSeasonsFormProperties>({
			number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SyncCollectionPostPostBodyShowsSeasonsEpisodes {
		audio?: string | null;
		audio_channels?: string | null;
		media_type?: string | null;

		/**
		 * Required
		 * Type: double
		 */
		number: number;
		resolution?: string | null;
	}
	export interface SyncCollectionPostPostBodyShowsSeasonsEpisodesFormProperties {
		audio: FormControl<string | null | undefined>,
		audio_channels: FormControl<string | null | undefined>,
		media_type: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		number: FormControl<number | null | undefined>,
		resolution: FormControl<string | null | undefined>,
	}
	export function CreateSyncCollectionPostPostBodyShowsSeasonsEpisodesFormGroup() {
		return new FormGroup<SyncCollectionPostPostBodyShowsSeasonsEpisodesFormProperties>({
			audio: new FormControl<string | null | undefined>(undefined),
			audio_channels: new FormControl<string | null | undefined>(undefined),
			media_type: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SyncHistoryPostPostBody {
		SyncHistoryPostPostBodyEpisodes?: Array<SyncHistoryPostPostBodyEpisodes>;
		SyncHistoryPostPostBodyMovies?: Array<SyncHistoryPostPostBodyMovies>;
		SyncHistoryPostPostBodySeasons?: Array<SyncHistoryPostPostBodySeasons>;
		SyncHistoryPostPostBodyShows?: Array<SyncHistoryPostPostBodyShows>;
	}
	export interface SyncHistoryPostPostBodyFormProperties {
	}
	export function CreateSyncHistoryPostPostBodyFormGroup() {
		return new FormGroup<SyncHistoryPostPostBodyFormProperties>({
		});

	}

	export interface SyncHistoryPostPostBodyEpisodes {
		ids?: SyncHistoryPostPostBodyEpisodesIds;
		watched_at?: string | null;
	}
	export interface SyncHistoryPostPostBodyEpisodesFormProperties {
		watched_at: FormControl<string | null | undefined>,
	}
	export function CreateSyncHistoryPostPostBodyEpisodesFormGroup() {
		return new FormGroup<SyncHistoryPostPostBodyEpisodesFormProperties>({
			watched_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SyncHistoryPostPostBodyEpisodesIds {
		imdb?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface SyncHistoryPostPostBodyEpisodesIdsFormProperties {
		imdb: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateSyncHistoryPostPostBodyEpisodesIdsFormGroup() {
		return new FormGroup<SyncHistoryPostPostBodyEpisodesIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncHistoryPostPostBodyMovies {

		/** Required */
		ids: SyncHistoryPostPostBodyMoviesIds;
		title?: string | null;
		watched_at?: string | null;

		/** Type: double */
		year?: number | null;
	}
	export interface SyncHistoryPostPostBodyMoviesFormProperties {
		title: FormControl<string | null | undefined>,
		watched_at: FormControl<string | null | undefined>,

		/** Type: double */
		year: FormControl<number | null | undefined>,
	}
	export function CreateSyncHistoryPostPostBodyMoviesFormGroup() {
		return new FormGroup<SyncHistoryPostPostBodyMoviesFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
			watched_at: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncHistoryPostPostBodyMoviesIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;
	}
	export interface SyncHistoryPostPostBodyMoviesIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,
	}
	export function CreateSyncHistoryPostPostBodyMoviesIdsFormGroup() {
		return new FormGroup<SyncHistoryPostPostBodyMoviesIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncHistoryPostPostBodySeasons {
		ids?: SyncHistoryPostPostBodySeasonsIds;
		watched_at?: string | null;
	}
	export interface SyncHistoryPostPostBodySeasonsFormProperties {
		watched_at: FormControl<string | null | undefined>,
	}
	export function CreateSyncHistoryPostPostBodySeasonsFormGroup() {
		return new FormGroup<SyncHistoryPostPostBodySeasonsFormProperties>({
			watched_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SyncHistoryPostPostBodySeasonsIds {

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface SyncHistoryPostPostBodySeasonsIdsFormProperties {

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateSyncHistoryPostPostBodySeasonsIdsFormGroup() {
		return new FormGroup<SyncHistoryPostPostBodySeasonsIdsFormProperties>({
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncHistoryPostPostBodyShows {

		/** Required */
		ids: SyncHistoryPostPostBodyShowsIds;

		/** Required */
		SyncHistoryPostPostBodyShowsSeasons: Array<SyncHistoryPostPostBodyShowsSeasons>;

		/** Required */
		title: string;

		/**
		 * Required
		 * Type: double
		 */
		year: number;
	}
	export interface SyncHistoryPostPostBodyShowsFormProperties {

		/** Required */
		title: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateSyncHistoryPostPostBodyShowsFormGroup() {
		return new FormGroup<SyncHistoryPostPostBodyShowsFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			year: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SyncHistoryPostPostBodyShowsIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface SyncHistoryPostPostBodyShowsIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateSyncHistoryPostPostBodyShowsIdsFormGroup() {
		return new FormGroup<SyncHistoryPostPostBodyShowsIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncHistoryPostPostBodyShowsSeasons {
		SyncHistoryPostPostBodyShowsSeasonsEpisodes?: Array<SyncHistoryPostPostBodyShowsSeasonsEpisodes>;

		/**
		 * Required
		 * Type: double
		 */
		number: number;
		watched_at?: string | null;
	}
	export interface SyncHistoryPostPostBodyShowsSeasonsFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		number: FormControl<number | null | undefined>,
		watched_at: FormControl<string | null | undefined>,
	}
	export function CreateSyncHistoryPostPostBodyShowsSeasonsFormGroup() {
		return new FormGroup<SyncHistoryPostPostBodyShowsSeasonsFormProperties>({
			number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			watched_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SyncHistoryPostPostBodyShowsSeasonsEpisodes {

		/**
		 * Required
		 * Type: double
		 */
		number: number;
		watched_at?: string | null;
	}
	export interface SyncHistoryPostPostBodyShowsSeasonsEpisodesFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		number: FormControl<number | null | undefined>,
		watched_at: FormControl<string | null | undefined>,
	}
	export function CreateSyncHistoryPostPostBodyShowsSeasonsEpisodesFormGroup() {
		return new FormGroup<SyncHistoryPostPostBodyShowsSeasonsEpisodesFormProperties>({
			number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			watched_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SyncHistoryRemovePostPostBody {
		SyncHistoryRemovePostPostBodyEpisodes?: Array<SyncHistoryRemovePostPostBodyEpisodes>;
		ids?: Array<number>;
		SyncHistoryRemovePostPostBodyMovies?: Array<SyncHistoryRemovePostPostBodyMovies>;
		SyncHistoryRemovePostPostBodySeasons?: Array<SyncHistoryRemovePostPostBodySeasons>;
		SyncHistoryRemovePostPostBodyShows?: Array<SyncHistoryRemovePostPostBodyShows>;
	}
	export interface SyncHistoryRemovePostPostBodyFormProperties {
	}
	export function CreateSyncHistoryRemovePostPostBodyFormGroup() {
		return new FormGroup<SyncHistoryRemovePostPostBodyFormProperties>({
		});

	}

	export interface SyncHistoryRemovePostPostBodyEpisodes {
		ids?: SyncHistoryRemovePostPostBodyEpisodesIds;
	}
	export interface SyncHistoryRemovePostPostBodyEpisodesFormProperties {
	}
	export function CreateSyncHistoryRemovePostPostBodyEpisodesFormGroup() {
		return new FormGroup<SyncHistoryRemovePostPostBodyEpisodesFormProperties>({
		});

	}

	export interface SyncHistoryRemovePostPostBodyEpisodesIds {
		imdb?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface SyncHistoryRemovePostPostBodyEpisodesIdsFormProperties {
		imdb: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateSyncHistoryRemovePostPostBodyEpisodesIdsFormGroup() {
		return new FormGroup<SyncHistoryRemovePostPostBodyEpisodesIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncHistoryRemovePostPostBodyMovies {

		/** Required */
		ids: SyncHistoryRemovePostPostBodyMoviesIds;
		title?: string | null;

		/** Type: double */
		year?: number | null;
	}
	export interface SyncHistoryRemovePostPostBodyMoviesFormProperties {
		title: FormControl<string | null | undefined>,

		/** Type: double */
		year: FormControl<number | null | undefined>,
	}
	export function CreateSyncHistoryRemovePostPostBodyMoviesFormGroup() {
		return new FormGroup<SyncHistoryRemovePostPostBodyMoviesFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncHistoryRemovePostPostBodyMoviesIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;
	}
	export interface SyncHistoryRemovePostPostBodyMoviesIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,
	}
	export function CreateSyncHistoryRemovePostPostBodyMoviesIdsFormGroup() {
		return new FormGroup<SyncHistoryRemovePostPostBodyMoviesIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncHistoryRemovePostPostBodySeasons {
		ids?: SyncHistoryRemovePostPostBodySeasonsIds;
	}
	export interface SyncHistoryRemovePostPostBodySeasonsFormProperties {
	}
	export function CreateSyncHistoryRemovePostPostBodySeasonsFormGroup() {
		return new FormGroup<SyncHistoryRemovePostPostBodySeasonsFormProperties>({
		});

	}

	export interface SyncHistoryRemovePostPostBodySeasonsIds {

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface SyncHistoryRemovePostPostBodySeasonsIdsFormProperties {

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateSyncHistoryRemovePostPostBodySeasonsIdsFormGroup() {
		return new FormGroup<SyncHistoryRemovePostPostBodySeasonsIdsFormProperties>({
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncHistoryRemovePostPostBodyShows {

		/** Required */
		ids: SyncHistoryRemovePostPostBodyShowsIds;

		/** Required */
		SyncHistoryRemovePostPostBodyShowsSeasons: Array<SyncHistoryRemovePostPostBodyShowsSeasons>;

		/** Required */
		title: string;

		/**
		 * Required
		 * Type: double
		 */
		year: number;
	}
	export interface SyncHistoryRemovePostPostBodyShowsFormProperties {

		/** Required */
		title: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateSyncHistoryRemovePostPostBodyShowsFormGroup() {
		return new FormGroup<SyncHistoryRemovePostPostBodyShowsFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			year: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SyncHistoryRemovePostPostBodyShowsIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface SyncHistoryRemovePostPostBodyShowsIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateSyncHistoryRemovePostPostBodyShowsIdsFormGroup() {
		return new FormGroup<SyncHistoryRemovePostPostBodyShowsIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncHistoryRemovePostPostBodyShowsSeasons {
		SyncHistoryRemovePostPostBodyShowsSeasonsEpisodes?: Array<SyncHistoryRemovePostPostBodyShowsSeasonsEpisodes>;

		/**
		 * Required
		 * Type: double
		 */
		number: number;
	}
	export interface SyncHistoryRemovePostPostBodyShowsSeasonsFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		number: FormControl<number | null | undefined>,
	}
	export function CreateSyncHistoryRemovePostPostBodyShowsSeasonsFormGroup() {
		return new FormGroup<SyncHistoryRemovePostPostBodyShowsSeasonsFormProperties>({
			number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SyncHistoryRemovePostPostBodyShowsSeasonsEpisodes {

		/**
		 * Required
		 * Type: double
		 */
		number: number;
	}
	export interface SyncHistoryRemovePostPostBodyShowsSeasonsEpisodesFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		number: FormControl<number | null | undefined>,
	}
	export function CreateSyncHistoryRemovePostPostBodyShowsSeasonsEpisodesFormGroup() {
		return new FormGroup<SyncHistoryRemovePostPostBodyShowsSeasonsEpisodesFormProperties>({
			number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SyncHistory_type_idGetByStart_atAndEnd_atType { movies = 'movies', shows = 'shows', seasons = 'seasons', episodes = 'episodes' }

	export enum SyncPlayback_typeGetByStart_atAndEnd_atType { movies = 'movies', episodes = 'episodes' }

	export interface SyncRatingsPostPostBody {
		SyncRatingsPostPostBodyEpisodes?: Array<SyncRatingsPostPostBodyEpisodes>;
		SyncRatingsPostPostBodyMovies?: Array<SyncRatingsPostPostBodyMovies>;
		SyncRatingsPostPostBodySeasons?: Array<SyncRatingsPostPostBodySeasons>;
		SyncRatingsPostPostBodyShows?: Array<SyncRatingsPostPostBodyShows>;
	}
	export interface SyncRatingsPostPostBodyFormProperties {
	}
	export function CreateSyncRatingsPostPostBodyFormGroup() {
		return new FormGroup<SyncRatingsPostPostBodyFormProperties>({
		});

	}

	export interface SyncRatingsPostPostBodyEpisodes {
		ids?: SyncRatingsPostPostBodyEpisodesIds;

		/** Type: double */
		rating?: number | null;
	}
	export interface SyncRatingsPostPostBodyEpisodesFormProperties {

		/** Type: double */
		rating: FormControl<number | null | undefined>,
	}
	export function CreateSyncRatingsPostPostBodyEpisodesFormGroup() {
		return new FormGroup<SyncRatingsPostPostBodyEpisodesFormProperties>({
			rating: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncRatingsPostPostBodyEpisodesIds {
		imdb?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface SyncRatingsPostPostBodyEpisodesIdsFormProperties {
		imdb: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateSyncRatingsPostPostBodyEpisodesIdsFormGroup() {
		return new FormGroup<SyncRatingsPostPostBodyEpisodesIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncRatingsPostPostBodyMovies {

		/** Required */
		ids: SyncRatingsPostPostBodyMoviesIds;
		rated_at?: string | null;

		/**
		 * Required
		 * Type: double
		 */
		rating: number;
		title?: string | null;

		/** Type: double */
		year?: number | null;
	}
	export interface SyncRatingsPostPostBodyMoviesFormProperties {
		rated_at: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		rating: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Type: double */
		year: FormControl<number | null | undefined>,
	}
	export function CreateSyncRatingsPostPostBodyMoviesFormGroup() {
		return new FormGroup<SyncRatingsPostPostBodyMoviesFormProperties>({
			rated_at: new FormControl<string | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncRatingsPostPostBodyMoviesIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;
	}
	export interface SyncRatingsPostPostBodyMoviesIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,
	}
	export function CreateSyncRatingsPostPostBodyMoviesIdsFormGroup() {
		return new FormGroup<SyncRatingsPostPostBodyMoviesIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncRatingsPostPostBodySeasons {
		ids?: SyncRatingsPostPostBodySeasonsIds;

		/** Type: double */
		rating?: number | null;
	}
	export interface SyncRatingsPostPostBodySeasonsFormProperties {

		/** Type: double */
		rating: FormControl<number | null | undefined>,
	}
	export function CreateSyncRatingsPostPostBodySeasonsFormGroup() {
		return new FormGroup<SyncRatingsPostPostBodySeasonsFormProperties>({
			rating: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncRatingsPostPostBodySeasonsIds {

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface SyncRatingsPostPostBodySeasonsIdsFormProperties {

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateSyncRatingsPostPostBodySeasonsIdsFormGroup() {
		return new FormGroup<SyncRatingsPostPostBodySeasonsIdsFormProperties>({
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncRatingsPostPostBodyShows {

		/** Required */
		ids: SyncRatingsPostPostBodyShowsIds;

		/** Type: double */
		rating?: number | null;

		/** Required */
		SyncRatingsPostPostBodyShowsSeasons: Array<SyncRatingsPostPostBodyShowsSeasons>;

		/** Required */
		title: string;

		/**
		 * Required
		 * Type: double
		 */
		year: number;
	}
	export interface SyncRatingsPostPostBodyShowsFormProperties {

		/** Type: double */
		rating: FormControl<number | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateSyncRatingsPostPostBodyShowsFormGroup() {
		return new FormGroup<SyncRatingsPostPostBodyShowsFormProperties>({
			rating: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			year: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SyncRatingsPostPostBodyShowsIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface SyncRatingsPostPostBodyShowsIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateSyncRatingsPostPostBodyShowsIdsFormGroup() {
		return new FormGroup<SyncRatingsPostPostBodyShowsIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncRatingsPostPostBodyShowsSeasons {
		SyncRatingsPostPostBodyShowsSeasonsEpisodes?: Array<SyncRatingsPostPostBodyShowsSeasonsEpisodes>;

		/**
		 * Required
		 * Type: double
		 */
		number: number;

		/** Type: double */
		rating?: number | null;
	}
	export interface SyncRatingsPostPostBodyShowsSeasonsFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		number: FormControl<number | null | undefined>,

		/** Type: double */
		rating: FormControl<number | null | undefined>,
	}
	export function CreateSyncRatingsPostPostBodyShowsSeasonsFormGroup() {
		return new FormGroup<SyncRatingsPostPostBodyShowsSeasonsFormProperties>({
			number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			rating: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncRatingsPostPostBodyShowsSeasonsEpisodes {

		/**
		 * Required
		 * Type: double
		 */
		number: number;

		/**
		 * Required
		 * Type: double
		 */
		rating: number;
	}
	export interface SyncRatingsPostPostBodyShowsSeasonsEpisodesFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		number: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		rating: FormControl<number | null | undefined>,
	}
	export function CreateSyncRatingsPostPostBodyShowsSeasonsEpisodesFormGroup() {
		return new FormGroup<SyncRatingsPostPostBodyShowsSeasonsEpisodesFormProperties>({
			number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			rating: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SyncRatings_type_ratingGetType { movies = 'movies', shows = 'shows', seasons = 'seasons', episodes = 'episodes', all = 'all' }

	export enum SyncRatings_type_ratingGetRating { _1 = '1', _2 = '2', _3 = '3', _4 = '4', _5 = '5', _6 = '6', _7 = '7', _8 = '8', _9 = '9', _10 = '10' }

	export interface SyncRecommendationsPostPostBody {
		SyncRecommendationsPostPostBodyMovies?: Array<SyncRecommendationsPostPostBodyMovies>;
		SyncRecommendationsPostPostBodyShows?: Array<SyncRecommendationsPostPostBodyShows>;
	}
	export interface SyncRecommendationsPostPostBodyFormProperties {
	}
	export function CreateSyncRecommendationsPostPostBodyFormGroup() {
		return new FormGroup<SyncRecommendationsPostPostBodyFormProperties>({
		});

	}

	export interface SyncRecommendationsPostPostBodyMovies {

		/** Required */
		ids: SyncRecommendationsPostPostBodyMoviesIds;
		notes?: string | null;
		title?: string | null;

		/** Type: double */
		year?: number | null;
	}
	export interface SyncRecommendationsPostPostBodyMoviesFormProperties {
		notes: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Type: double */
		year: FormControl<number | null | undefined>,
	}
	export function CreateSyncRecommendationsPostPostBodyMoviesFormGroup() {
		return new FormGroup<SyncRecommendationsPostPostBodyMoviesFormProperties>({
			notes: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncRecommendationsPostPostBodyMoviesIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;
	}
	export interface SyncRecommendationsPostPostBodyMoviesIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,
	}
	export function CreateSyncRecommendationsPostPostBodyMoviesIdsFormGroup() {
		return new FormGroup<SyncRecommendationsPostPostBodyMoviesIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncRecommendationsPostPostBodyShows {

		/** Required */
		ids: SyncRecommendationsPostPostBodyShowsIds;
		notes?: string | null;

		/** Required */
		title: string;

		/**
		 * Required
		 * Type: double
		 */
		year: number;
	}
	export interface SyncRecommendationsPostPostBodyShowsFormProperties {
		notes: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateSyncRecommendationsPostPostBodyShowsFormGroup() {
		return new FormGroup<SyncRecommendationsPostPostBodyShowsFormProperties>({
			notes: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			year: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SyncRecommendationsPostPostBodyShowsIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface SyncRecommendationsPostPostBodyShowsIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateSyncRecommendationsPostPostBodyShowsIdsFormGroup() {
		return new FormGroup<SyncRecommendationsPostPostBodyShowsIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncRecommendationsRemovePostPostBody {
		SyncRecommendationsRemovePostPostBodyMovies?: Array<SyncRecommendationsRemovePostPostBodyMovies>;
		SyncRecommendationsRemovePostPostBodyShows?: Array<SyncRecommendationsRemovePostPostBodyShows>;
	}
	export interface SyncRecommendationsRemovePostPostBodyFormProperties {
	}
	export function CreateSyncRecommendationsRemovePostPostBodyFormGroup() {
		return new FormGroup<SyncRecommendationsRemovePostPostBodyFormProperties>({
		});

	}

	export interface SyncRecommendationsRemovePostPostBodyMovies {

		/** Required */
		ids: SyncRecommendationsRemovePostPostBodyMoviesIds;
		title?: string | null;

		/** Type: double */
		year?: number | null;
	}
	export interface SyncRecommendationsRemovePostPostBodyMoviesFormProperties {
		title: FormControl<string | null | undefined>,

		/** Type: double */
		year: FormControl<number | null | undefined>,
	}
	export function CreateSyncRecommendationsRemovePostPostBodyMoviesFormGroup() {
		return new FormGroup<SyncRecommendationsRemovePostPostBodyMoviesFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncRecommendationsRemovePostPostBodyMoviesIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;
	}
	export interface SyncRecommendationsRemovePostPostBodyMoviesIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,
	}
	export function CreateSyncRecommendationsRemovePostPostBodyMoviesIdsFormGroup() {
		return new FormGroup<SyncRecommendationsRemovePostPostBodyMoviesIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncRecommendationsRemovePostPostBodyShows {
		ids?: SyncRecommendationsRemovePostPostBodyShowsIds;
		title?: string | null;

		/** Type: double */
		year?: number | null;
	}
	export interface SyncRecommendationsRemovePostPostBodyShowsFormProperties {
		title: FormControl<string | null | undefined>,

		/** Type: double */
		year: FormControl<number | null | undefined>,
	}
	export function CreateSyncRecommendationsRemovePostPostBodyShowsFormGroup() {
		return new FormGroup<SyncRecommendationsRemovePostPostBodyShowsFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncRecommendationsRemovePostPostBodyShowsIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface SyncRecommendationsRemovePostPostBodyShowsIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateSyncRecommendationsRemovePostPostBodyShowsIdsFormGroup() {
		return new FormGroup<SyncRecommendationsRemovePostPostBodyShowsIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SyncRecommendations_type_sortGetSort { rank = 'rank', added = 'added', released = 'released', title = 'title' }

	export interface SyncWatchlistPostPostBody {
		SyncWatchlistPostPostBodyEpisodes?: Array<SyncWatchlistPostPostBodyEpisodes>;
		SyncWatchlistPostPostBodyMovies?: Array<SyncWatchlistPostPostBodyMovies>;
		SyncWatchlistPostPostBodySeasons?: Array<SyncWatchlistPostPostBodySeasons>;
		SyncWatchlistPostPostBodyShows?: Array<SyncWatchlistPostPostBodyShows>;
	}
	export interface SyncWatchlistPostPostBodyFormProperties {
	}
	export function CreateSyncWatchlistPostPostBodyFormGroup() {
		return new FormGroup<SyncWatchlistPostPostBodyFormProperties>({
		});

	}

	export interface SyncWatchlistPostPostBodyEpisodes {
		ids?: SyncWatchlistPostPostBodyEpisodesIds;
	}
	export interface SyncWatchlistPostPostBodyEpisodesFormProperties {
	}
	export function CreateSyncWatchlistPostPostBodyEpisodesFormGroup() {
		return new FormGroup<SyncWatchlistPostPostBodyEpisodesFormProperties>({
		});

	}

	export interface SyncWatchlistPostPostBodyEpisodesIds {
		imdb?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface SyncWatchlistPostPostBodyEpisodesIdsFormProperties {
		imdb: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateSyncWatchlistPostPostBodyEpisodesIdsFormGroup() {
		return new FormGroup<SyncWatchlistPostPostBodyEpisodesIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncWatchlistPostPostBodyMovies {

		/** Required */
		ids: SyncWatchlistPostPostBodyMoviesIds;
		notes?: string | null;
		title?: string | null;

		/** Type: double */
		year?: number | null;
	}
	export interface SyncWatchlistPostPostBodyMoviesFormProperties {
		notes: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Type: double */
		year: FormControl<number | null | undefined>,
	}
	export function CreateSyncWatchlistPostPostBodyMoviesFormGroup() {
		return new FormGroup<SyncWatchlistPostPostBodyMoviesFormProperties>({
			notes: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncWatchlistPostPostBodyMoviesIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;
	}
	export interface SyncWatchlistPostPostBodyMoviesIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,
	}
	export function CreateSyncWatchlistPostPostBodyMoviesIdsFormGroup() {
		return new FormGroup<SyncWatchlistPostPostBodyMoviesIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncWatchlistPostPostBodySeasons {
		ids?: SyncWatchlistPostPostBodySeasonsIds;
	}
	export interface SyncWatchlistPostPostBodySeasonsFormProperties {
	}
	export function CreateSyncWatchlistPostPostBodySeasonsFormGroup() {
		return new FormGroup<SyncWatchlistPostPostBodySeasonsFormProperties>({
		});

	}

	export interface SyncWatchlistPostPostBodySeasonsIds {

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface SyncWatchlistPostPostBodySeasonsIdsFormProperties {

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateSyncWatchlistPostPostBodySeasonsIdsFormGroup() {
		return new FormGroup<SyncWatchlistPostPostBodySeasonsIdsFormProperties>({
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncWatchlistPostPostBodyShows {

		/** Required */
		ids: SyncWatchlistPostPostBodyShowsIds;
		notes?: string | null;

		/** Required */
		SyncWatchlistPostPostBodyShowsSeasons: Array<SyncWatchlistPostPostBodyShowsSeasons>;

		/** Required */
		title: string;

		/**
		 * Required
		 * Type: double
		 */
		year: number;
	}
	export interface SyncWatchlistPostPostBodyShowsFormProperties {
		notes: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateSyncWatchlistPostPostBodyShowsFormGroup() {
		return new FormGroup<SyncWatchlistPostPostBodyShowsFormProperties>({
			notes: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			year: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SyncWatchlistPostPostBodyShowsIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface SyncWatchlistPostPostBodyShowsIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateSyncWatchlistPostPostBodyShowsIdsFormGroup() {
		return new FormGroup<SyncWatchlistPostPostBodyShowsIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncWatchlistPostPostBodyShowsSeasons {
		SyncWatchlistPostPostBodyShowsSeasonsEpisodes?: Array<SyncWatchlistPostPostBodyShowsSeasonsEpisodes>;

		/**
		 * Required
		 * Type: double
		 */
		number: number;
	}
	export interface SyncWatchlistPostPostBodyShowsSeasonsFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		number: FormControl<number | null | undefined>,
	}
	export function CreateSyncWatchlistPostPostBodyShowsSeasonsFormGroup() {
		return new FormGroup<SyncWatchlistPostPostBodyShowsSeasonsFormProperties>({
			number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SyncWatchlistPostPostBodyShowsSeasonsEpisodes {

		/**
		 * Required
		 * Type: double
		 */
		number: number;
	}
	export interface SyncWatchlistPostPostBodyShowsSeasonsEpisodesFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		number: FormControl<number | null | undefined>,
	}
	export function CreateSyncWatchlistPostPostBodyShowsSeasonsEpisodesFormGroup() {
		return new FormGroup<SyncWatchlistPostPostBodyShowsSeasonsEpisodesFormProperties>({
			number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UsersHidden_sectionGetByTypeSection { calendar = 'calendar', progress_watched = 'progress_watched', progress_watched_reset = 'progress_watched_reset', progress_collected = 'progress_collected', recommendations = 'recommendations', comments = 'comments' }

	export enum UsersHidden_sectionGetByTypeType { movie = 'movie', show = 'show', season = 'season', user = 'user' }

	export enum UsersHidden_sectionPostSection { calendar = 'calendar', progress_watched = 'progress_watched', progress_collected = 'progress_collected', recommendations = 'recommendations' }

	export enum UsersHidden_sectionRemovePostSection { calendar = 'calendar', progress_watched = 'progress_watched', progress_collected = 'progress_collected', recommendations = 'recommendations', comments = 'comments' }

	export enum UsersSaved_filters_sectionGetSection { movies = 'movies', shows = 'shows', calendars = 'calendars', search = 'search' }

	export enum Users_idComments_comment_type_typeGetByInclude_repliesInclude_replies { true = 'true', false = 'false', only = 'only' }

	export enum Users_idLikes_typeGetType { comments = 'comments', lists = 'lists' }

	export interface Users_idListsPostPostBody {
		allow_comments?: boolean | null;
		description?: string | null;
		display_numbers?: boolean | null;
		name?: string | null;
		privacy?: string | null;
		sort_by?: string | null;
		sort_how?: string | null;
	}
	export interface Users_idListsPostPostBodyFormProperties {
		allow_comments: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		display_numbers: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		privacy: FormControl<string | null | undefined>,
		sort_by: FormControl<string | null | undefined>,
		sort_how: FormControl<string | null | undefined>,
	}
	export function CreateUsers_idListsPostPostBodyFormGroup() {
		return new FormGroup<Users_idListsPostPostBodyFormProperties>({
			allow_comments: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			display_numbers: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			privacy: new FormControl<string | null | undefined>(undefined),
			sort_by: new FormControl<string | null | undefined>(undefined),
			sort_how: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Users_idListsReorderPostPostBody {
		rank?: Array<number>;
	}
	export interface Users_idListsReorderPostPostBodyFormProperties {
	}
	export function CreateUsers_idListsReorderPostPostBodyFormGroup() {
		return new FormGroup<Users_idListsReorderPostPostBodyFormProperties>({
		});

	}

	export interface Users_idLists_list_idPutPutBody {
		display_numbers?: boolean | null;
		name?: string | null;
		privacy?: string | null;
		sort_by?: string | null;
		sort_how?: string | null;
	}
	export interface Users_idLists_list_idPutPutBodyFormProperties {
		display_numbers: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		privacy: FormControl<string | null | undefined>,
		sort_by: FormControl<string | null | undefined>,
		sort_how: FormControl<string | null | undefined>,
	}
	export function CreateUsers_idLists_list_idPutPutBodyFormGroup() {
		return new FormGroup<Users_idLists_list_idPutPutBodyFormProperties>({
			display_numbers: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			privacy: new FormControl<string | null | undefined>(undefined),
			sort_by: new FormControl<string | null | undefined>(undefined),
			sort_how: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Users_idLists_list_idItemsPostPostBody {
		Users_idLists_list_idItemsPostPostBodyEpisodes?: Array<Users_idLists_list_idItemsPostPostBodyEpisodes>;
		Users_idLists_list_idItemsPostPostBodyMovies?: Array<Users_idLists_list_idItemsPostPostBodyMovies>;
		Users_idLists_list_idItemsPostPostBodyPeople?: Array<Users_idLists_list_idItemsPostPostBodyPeople>;
		Users_idLists_list_idItemsPostPostBodySeasons?: Array<Users_idLists_list_idItemsPostPostBodySeasons>;
		Users_idLists_list_idItemsPostPostBodyShows?: Array<Users_idLists_list_idItemsPostPostBodyShows>;
	}
	export interface Users_idLists_list_idItemsPostPostBodyFormProperties {
	}
	export function CreateUsers_idLists_list_idItemsPostPostBodyFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsPostPostBodyFormProperties>({
		});

	}

	export interface Users_idLists_list_idItemsPostPostBodyEpisodes {
		ids?: Users_idLists_list_idItemsPostPostBodyEpisodesIds;
	}
	export interface Users_idLists_list_idItemsPostPostBodyEpisodesFormProperties {
	}
	export function CreateUsers_idLists_list_idItemsPostPostBodyEpisodesFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsPostPostBodyEpisodesFormProperties>({
		});

	}

	export interface Users_idLists_list_idItemsPostPostBodyEpisodesIds {
		imdb?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface Users_idLists_list_idItemsPostPostBodyEpisodesIdsFormProperties {
		imdb: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateUsers_idLists_list_idItemsPostPostBodyEpisodesIdsFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsPostPostBodyEpisodesIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Users_idLists_list_idItemsPostPostBodyMovies {

		/** Required */
		ids: Users_idLists_list_idItemsPostPostBodyMoviesIds;
		notes?: string | null;
	}
	export interface Users_idLists_list_idItemsPostPostBodyMoviesFormProperties {
		notes: FormControl<string | null | undefined>,
	}
	export function CreateUsers_idLists_list_idItemsPostPostBodyMoviesFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsPostPostBodyMoviesFormProperties>({
			notes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Users_idLists_list_idItemsPostPostBodyMoviesIds {
		imdb?: string | null;

		/** Type: double */
		trakt?: number | null;
	}
	export interface Users_idLists_list_idItemsPostPostBodyMoviesIdsFormProperties {
		imdb: FormControl<string | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,
	}
	export function CreateUsers_idLists_list_idItemsPostPostBodyMoviesIdsFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsPostPostBodyMoviesIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Users_idLists_list_idItemsPostPostBodyPeople {
		ids?: Users_idLists_list_idItemsPostPostBodyPeopleIds;
		name?: string | null;
	}
	export interface Users_idLists_list_idItemsPostPostBodyPeopleFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateUsers_idLists_list_idItemsPostPostBodyPeopleFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsPostPostBodyPeopleFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Users_idLists_list_idItemsPostPostBodyPeopleIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;
	}
	export interface Users_idLists_list_idItemsPostPostBodyPeopleIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,
	}
	export function CreateUsers_idLists_list_idItemsPostPostBodyPeopleIdsFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsPostPostBodyPeopleIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Users_idLists_list_idItemsPostPostBodySeasons {
		ids?: Users_idLists_list_idItemsPostPostBodySeasonsIds;
	}
	export interface Users_idLists_list_idItemsPostPostBodySeasonsFormProperties {
	}
	export function CreateUsers_idLists_list_idItemsPostPostBodySeasonsFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsPostPostBodySeasonsFormProperties>({
		});

	}

	export interface Users_idLists_list_idItemsPostPostBodySeasonsIds {

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface Users_idLists_list_idItemsPostPostBodySeasonsIdsFormProperties {

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateUsers_idLists_list_idItemsPostPostBodySeasonsIdsFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsPostPostBodySeasonsIdsFormProperties>({
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Users_idLists_list_idItemsPostPostBodyShows {

		/** Required */
		ids: Users_idLists_list_idItemsPostPostBodyShowsIds;
		notes?: string | null;

		/** Required */
		Users_idLists_list_idItemsPostPostBodyShowsSeasons: Array<Users_idLists_list_idItemsPostPostBodyShowsSeasons>;
	}
	export interface Users_idLists_list_idItemsPostPostBodyShowsFormProperties {
		notes: FormControl<string | null | undefined>,
	}
	export function CreateUsers_idLists_list_idItemsPostPostBodyShowsFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsPostPostBodyShowsFormProperties>({
			notes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Users_idLists_list_idItemsPostPostBodyShowsIds {

		/** Type: double */
		trakt?: number | null;
	}
	export interface Users_idLists_list_idItemsPostPostBodyShowsIdsFormProperties {

		/** Type: double */
		trakt: FormControl<number | null | undefined>,
	}
	export function CreateUsers_idLists_list_idItemsPostPostBodyShowsIdsFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsPostPostBodyShowsIdsFormProperties>({
			trakt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Users_idLists_list_idItemsPostPostBodyShowsSeasons {
		Users_idLists_list_idItemsPostPostBodyShowsSeasonsEpisodes?: Array<Users_idLists_list_idItemsPostPostBodyShowsSeasonsEpisodes>;

		/**
		 * Required
		 * Type: double
		 */
		number: number;
	}
	export interface Users_idLists_list_idItemsPostPostBodyShowsSeasonsFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		number: FormControl<number | null | undefined>,
	}
	export function CreateUsers_idLists_list_idItemsPostPostBodyShowsSeasonsFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsPostPostBodyShowsSeasonsFormProperties>({
			number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Users_idLists_list_idItemsPostPostBodyShowsSeasonsEpisodes {

		/**
		 * Required
		 * Type: double
		 */
		number: number;
	}
	export interface Users_idLists_list_idItemsPostPostBodyShowsSeasonsEpisodesFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		number: FormControl<number | null | undefined>,
	}
	export function CreateUsers_idLists_list_idItemsPostPostBodyShowsSeasonsEpisodesFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsPostPostBodyShowsSeasonsEpisodesFormProperties>({
			number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Users_idLists_list_idItemsRemovePostPostBody {
		Users_idLists_list_idItemsRemovePostPostBodyEpisodes?: Array<Users_idLists_list_idItemsRemovePostPostBodyEpisodes>;
		Users_idLists_list_idItemsRemovePostPostBodyMovies?: Array<Users_idLists_list_idItemsRemovePostPostBodyMovies>;
		Users_idLists_list_idItemsRemovePostPostBodyPeople?: Array<Users_idLists_list_idItemsRemovePostPostBodyPeople>;
		Users_idLists_list_idItemsRemovePostPostBodySeasons?: Array<Users_idLists_list_idItemsRemovePostPostBodySeasons>;
		Users_idLists_list_idItemsRemovePostPostBodyShows?: Array<Users_idLists_list_idItemsRemovePostPostBodyShows>;
	}
	export interface Users_idLists_list_idItemsRemovePostPostBodyFormProperties {
	}
	export function CreateUsers_idLists_list_idItemsRemovePostPostBodyFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsRemovePostPostBodyFormProperties>({
		});

	}

	export interface Users_idLists_list_idItemsRemovePostPostBodyEpisodes {
		ids?: Users_idLists_list_idItemsRemovePostPostBodyEpisodesIds;
	}
	export interface Users_idLists_list_idItemsRemovePostPostBodyEpisodesFormProperties {
	}
	export function CreateUsers_idLists_list_idItemsRemovePostPostBodyEpisodesFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsRemovePostPostBodyEpisodesFormProperties>({
		});

	}

	export interface Users_idLists_list_idItemsRemovePostPostBodyEpisodesIds {
		imdb?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface Users_idLists_list_idItemsRemovePostPostBodyEpisodesIdsFormProperties {
		imdb: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateUsers_idLists_list_idItemsRemovePostPostBodyEpisodesIdsFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsRemovePostPostBodyEpisodesIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Users_idLists_list_idItemsRemovePostPostBodyMovies {

		/** Required */
		ids: Users_idLists_list_idItemsRemovePostPostBodyMoviesIds;
	}
	export interface Users_idLists_list_idItemsRemovePostPostBodyMoviesFormProperties {
	}
	export function CreateUsers_idLists_list_idItemsRemovePostPostBodyMoviesFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsRemovePostPostBodyMoviesFormProperties>({
		});

	}

	export interface Users_idLists_list_idItemsRemovePostPostBodyMoviesIds {
		imdb?: string | null;

		/** Type: double */
		trakt?: number | null;
	}
	export interface Users_idLists_list_idItemsRemovePostPostBodyMoviesIdsFormProperties {
		imdb: FormControl<string | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,
	}
	export function CreateUsers_idLists_list_idItemsRemovePostPostBodyMoviesIdsFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsRemovePostPostBodyMoviesIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Users_idLists_list_idItemsRemovePostPostBodyPeople {
		ids?: Users_idLists_list_idItemsRemovePostPostBodyPeopleIds;
		name?: string | null;
	}
	export interface Users_idLists_list_idItemsRemovePostPostBodyPeopleFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateUsers_idLists_list_idItemsRemovePostPostBodyPeopleFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsRemovePostPostBodyPeopleFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Users_idLists_list_idItemsRemovePostPostBodyPeopleIds {
		imdb?: string | null;
		slug?: string | null;

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;
	}
	export interface Users_idLists_list_idItemsRemovePostPostBodyPeopleIdsFormProperties {
		imdb: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,
	}
	export function CreateUsers_idLists_list_idItemsRemovePostPostBodyPeopleIdsFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsRemovePostPostBodyPeopleIdsFormProperties>({
			imdb: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Users_idLists_list_idItemsRemovePostPostBodySeasons {
		ids?: Users_idLists_list_idItemsRemovePostPostBodySeasonsIds;
	}
	export interface Users_idLists_list_idItemsRemovePostPostBodySeasonsFormProperties {
	}
	export function CreateUsers_idLists_list_idItemsRemovePostPostBodySeasonsFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsRemovePostPostBodySeasonsFormProperties>({
		});

	}

	export interface Users_idLists_list_idItemsRemovePostPostBodySeasonsIds {

		/** Type: double */
		tmdb?: number | null;

		/** Type: double */
		trakt?: number | null;

		/** Type: double */
		tvdb?: number | null;
	}
	export interface Users_idLists_list_idItemsRemovePostPostBodySeasonsIdsFormProperties {

		/** Type: double */
		tmdb: FormControl<number | null | undefined>,

		/** Type: double */
		trakt: FormControl<number | null | undefined>,

		/** Type: double */
		tvdb: FormControl<number | null | undefined>,
	}
	export function CreateUsers_idLists_list_idItemsRemovePostPostBodySeasonsIdsFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsRemovePostPostBodySeasonsIdsFormProperties>({
			tmdb: new FormControl<number | null | undefined>(undefined),
			trakt: new FormControl<number | null | undefined>(undefined),
			tvdb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Users_idLists_list_idItemsRemovePostPostBodyShows {

		/** Required */
		ids: Users_idLists_list_idItemsRemovePostPostBodyShowsIds;

		/** Required */
		Users_idLists_list_idItemsRemovePostPostBodyShowsSeasons: Array<Users_idLists_list_idItemsRemovePostPostBodyShowsSeasons>;
	}
	export interface Users_idLists_list_idItemsRemovePostPostBodyShowsFormProperties {
	}
	export function CreateUsers_idLists_list_idItemsRemovePostPostBodyShowsFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsRemovePostPostBodyShowsFormProperties>({
		});

	}

	export interface Users_idLists_list_idItemsRemovePostPostBodyShowsIds {

		/** Type: double */
		trakt?: number | null;
	}
	export interface Users_idLists_list_idItemsRemovePostPostBodyShowsIdsFormProperties {

		/** Type: double */
		trakt: FormControl<number | null | undefined>,
	}
	export function CreateUsers_idLists_list_idItemsRemovePostPostBodyShowsIdsFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsRemovePostPostBodyShowsIdsFormProperties>({
			trakt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Users_idLists_list_idItemsRemovePostPostBodyShowsSeasons {
		Users_idLists_list_idItemsRemovePostPostBodyShowsSeasonsEpisodes?: Array<Users_idLists_list_idItemsRemovePostPostBodyShowsSeasonsEpisodes>;

		/**
		 * Required
		 * Type: double
		 */
		number: number;
	}
	export interface Users_idLists_list_idItemsRemovePostPostBodyShowsSeasonsFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		number: FormControl<number | null | undefined>,
	}
	export function CreateUsers_idLists_list_idItemsRemovePostPostBodyShowsSeasonsFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsRemovePostPostBodyShowsSeasonsFormProperties>({
			number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Users_idLists_list_idItemsRemovePostPostBodyShowsSeasonsEpisodes {

		/**
		 * Required
		 * Type: double
		 */
		number: number;
	}
	export interface Users_idLists_list_idItemsRemovePostPostBodyShowsSeasonsEpisodesFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		number: FormControl<number | null | undefined>,
	}
	export function CreateUsers_idLists_list_idItemsRemovePostPostBodyShowsSeasonsEpisodesFormGroup() {
		return new FormGroup<Users_idLists_list_idItemsRemovePostPostBodyShowsSeasonsEpisodesFormProperties>({
			number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Users_idRatings_type_ratingGetRating { _1 = '1', _2 = '2', _3 = '3', _4 = '4', _5 = '5', _6 = '6', _7 = '7', _8 = '8', _9 = '9', _10 = '10' }

}

