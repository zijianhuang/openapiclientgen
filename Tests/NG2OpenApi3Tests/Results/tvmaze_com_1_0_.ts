import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BulkResponseElement {

		/**
		 * The HTTP code that corresponds to this item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of validation errors for this item (in case of error) */
		errors?: string | null;

		/** The request data that belonged to this response (in case of error) */
		input?: string | null;

		/** A human-readable error message (in case of error) */
		message?: string | null;

		/** The resulting created/updated object (in case of success) */
		result?: string | null;
	}
	export interface BulkResponseElementFormProperties {

		/**
		 * The HTTP code that corresponds to this item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** A list of validation errors for this item (in case of error) */
		errors: FormControl<string | null | undefined>,

		/** The request data that belonged to this response (in case of error) */
		input: FormControl<string | null | undefined>,

		/** A human-readable error message (in case of error) */
		message: FormControl<string | null | undefined>,

		/** The resulting created/updated object (in case of success) */
		result: FormControl<string | null | undefined>,
	}
	export function CreateBulkResponseElementFormGroup() {
		return new FormGroup<BulkResponseElementFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			errors: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			result: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Episode {
	}
	export interface EpisodeFormProperties {
	}
	export function CreateEpisodeFormGroup() {
		return new FormGroup<EpisodeFormProperties>({
		});

	}

	export interface EpisodeVote {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		episode_id?: number | null;

		/**
		 * The vote number
		 * Minimum: 1
		 * Maximum: 10
		 */
		vote?: number | null;

		/**
		 * Epoch timestamp for when the user voted for the episode
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		voted_at?: number | null;
	}
	export interface EpisodeVoteFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		episode_id: FormControl<number | null | undefined>,

		/**
		 * The vote number
		 * Minimum: 1
		 * Maximum: 10
		 */
		vote: FormControl<number | null | undefined>,

		/**
		 * Epoch timestamp for when the user voted for the episode
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		voted_at: FormControl<number | null | undefined>,
	}
	export function CreateEpisodeVoteFormGroup() {
		return new FormGroup<EpisodeVoteFormProperties>({
			episode_id: new FormControl<number | null | undefined>(undefined),
			vote: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
			voted_at: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** 0 for watched, 1 for acquired, 2 for skipped */
	export interface MarkType {
	}

	/** 0 for watched, 1 for acquired, 2 for skipped */
	export interface MarkTypeFormProperties {
	}
	export function CreateMarkTypeFormGroup() {
		return new FormGroup<MarkTypeFormProperties>({
		});

	}

	export interface MarkedEpisode {
		_embedded?: MarkedEpisode_embedded;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		episode_id?: number | null;

		/**
		 * Epoch timestamp for when the user watched the episode, or 0 for unknown.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		marked_at?: number | null;

		/** 0 for watched, 1 for acquired, 2 for skipped */
		type?: MarkType;
	}
	export interface MarkedEpisodeFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		episode_id: FormControl<number | null | undefined>,

		/**
		 * Epoch timestamp for when the user watched the episode, or 0 for unknown.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		marked_at: FormControl<number | null | undefined>,
	}
	export function CreateMarkedEpisodeFormGroup() {
		return new FormGroup<MarkedEpisodeFormProperties>({
			episode_id: new FormControl<number | null | undefined>(undefined),
			marked_at: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MarkedEpisode_embedded {
		episode?: Episode;
	}
	export interface MarkedEpisode_embeddedFormProperties {
	}
	export function CreateMarkedEpisode_embeddedFormGroup() {
		return new FormGroup<MarkedEpisode_embeddedFormProperties>({
		});

	}

	export interface Network {
	}
	export interface NetworkFormProperties {
	}
	export function CreateNetworkFormGroup() {
		return new FormGroup<NetworkFormProperties>({
		});

	}

	export interface NetworkFollow {
		_embedded?: NetworkFollow_embedded;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		network_id?: number | null;
	}
	export interface NetworkFollowFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		network_id: FormControl<number | null | undefined>,
	}
	export function CreateNetworkFollowFormGroup() {
		return new FormGroup<NetworkFollowFormProperties>({
			network_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface NetworkFollow_embedded {
		network?: Network;
	}
	export interface NetworkFollow_embeddedFormProperties {
	}
	export function CreateNetworkFollow_embeddedFormGroup() {
		return new FormGroup<NetworkFollow_embeddedFormProperties>({
		});

	}

	export interface Person {
	}
	export interface PersonFormProperties {
	}
	export function CreatePersonFormGroup() {
		return new FormGroup<PersonFormProperties>({
		});

	}

	export interface PersonFollow {
		_embedded?: PersonFollow_embedded;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		person_id?: number | null;
	}
	export interface PersonFollowFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		person_id: FormControl<number | null | undefined>,
	}
	export function CreatePersonFollowFormGroup() {
		return new FormGroup<PersonFollowFormProperties>({
			person_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PersonFollow_embedded {
		person?: Person;
	}
	export interface PersonFollow_embeddedFormProperties {
	}
	export function CreatePersonFollow_embeddedFormGroup() {
		return new FormGroup<PersonFollow_embeddedFormProperties>({
		});

	}

	export interface Show {
	}
	export interface ShowFormProperties {
	}
	export function CreateShowFormGroup() {
		return new FormGroup<ShowFormProperties>({
		});

	}

	export interface ShowFollow {
		_embedded?: ShowFollow_embedded;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		show_id?: number | null;
	}
	export interface ShowFollowFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		show_id: FormControl<number | null | undefined>,
	}
	export function CreateShowFollowFormGroup() {
		return new FormGroup<ShowFollowFormProperties>({
			show_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ShowFollow_embedded {
		show?: Show;
	}
	export interface ShowFollow_embeddedFormProperties {
	}
	export function CreateShowFollow_embeddedFormGroup() {
		return new FormGroup<ShowFollow_embeddedFormProperties>({
		});

	}

	export interface ShowVote {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		show_id?: number | null;

		/**
		 * The vote number
		 * Minimum: 1
		 * Maximum: 10
		 */
		vote?: number | null;

		/**
		 * Epoch timestamp for when the user voted for the episode
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		voted_at?: number | null;
	}
	export interface ShowVoteFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		show_id: FormControl<number | null | undefined>,

		/**
		 * The vote number
		 * Minimum: 1
		 * Maximum: 10
		 */
		vote: FormControl<number | null | undefined>,

		/**
		 * Epoch timestamp for when the user voted for the episode
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		voted_at: FormControl<number | null | undefined>,
	}
	export function CreateShowVoteFormGroup() {
		return new FormGroup<ShowVoteFormProperties>({
			show_id: new FormControl<number | null | undefined>(undefined),
			vote: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
			voted_at: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Tag {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;
	}
	export interface TagFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagInstance {
		_embedded?: TagInstance_embedded;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		show_id?: number | null;
	}
	export interface TagInstanceFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		show_id: FormControl<number | null | undefined>,
	}
	export function CreateTagInstanceFormGroup() {
		return new FormGroup<TagInstanceFormProperties>({
			show_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TagInstance_embedded {
		show?: Show;
	}
	export interface TagInstance_embeddedFormProperties {
	}
	export function CreateTagInstance_embeddedFormGroup() {
		return new FormGroup<TagInstance_embeddedFormProperties>({
		});

	}

	export interface Webchannel {
	}
	export interface WebchannelFormProperties {
	}
	export function CreateWebchannelFormGroup() {
		return new FormGroup<WebchannelFormProperties>({
		});

	}

	export interface WebchannelFollow {
		_embedded?: WebchannelFollow_embedded;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		webchannel_id?: number | null;
	}
	export interface WebchannelFollowFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		webchannel_id: FormControl<number | null | undefined>,
	}
	export function CreateWebchannelFollowFormGroup() {
		return new FormGroup<WebchannelFollowFormProperties>({
			webchannel_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface WebchannelFollow_embedded {
		webchannel?: Webchannel;
	}
	export interface WebchannelFollow_embeddedFormProperties {
	}
	export function CreateWebchannelFollow_embeddedFormGroup() {
		return new FormGroup<WebchannelFollow_embeddedFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Poll whether an authentication request was confirmed
		 * Using the token acquired in the `start` endpoint, you can start polling this endpoint once every 10 seconds.
		 * When the user has confirmed the authentication request on their end, this endpoint will return the user's API key that you can use in subsequent authenticated endpoints. Note that it'll do so only once, subsequent requests after the initial 200 response will return a 404.
		 * For as long as the user did not yet confirm their authentication request, this endpoint will return a 403.
		 * Post auth/poll
		 * @return {AuthPollPostReturn} The user confirmed the authentication request
		 */
		AuthPollPost(requestBody: AuthPollPostPostBody, headersHandler?: () => HttpHeaders): Observable<AuthPollPostReturn> {
			return this.http.post<AuthPollPostReturn>(this.baseUri + 'auth/poll', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Start an authentication request
		 * If you want to access the TVmaze API on behalf of a user without querying them for their password, use this endpoint.
		 * To get started, send a POST request containing the user's email address. The response will contain a `token`, which you can use as input to the `poll` endpoint. The user will receive an email prompting them to confirm the authentication request.
		 * Alternatively, if you expect the user to be logged in to TVmaze on the device they are currently interacting with, you can set `email_confirmation` to false and redirect them to the `confirm_url` URL. If they are logged in to TVmaze, they will be able to confirm the authentication request instantly.
		 * Post auth/start
		 * @return {AuthStartPostReturn} The authentication request was succesfully started
		 */
		AuthStartPost(requestBody: AuthStartPostPostBody, headersHandler?: () => HttpHeaders): Observable<AuthStartPostReturn> {
			return this.http.post<AuthStartPostReturn>(this.baseUri + 'auth/start', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Validate your authentication credentials
		 * If the credentials supplied as HTTP basic are valid, the user's level of premium - if any - is returned.
		 * Get auth/validate
		 * @return {AuthValidateGetReturn} The supplied credentials are valid
		 */
		AuthValidateGet(headersHandler?: () => HttpHeaders): Observable<AuthValidateGetReturn> {
			return this.http.get<AuthValidateGetReturn>(this.baseUri + 'auth/validate', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Mark episodes as acquired or watched based on their IDs
		 * This endpoint can be used by all users, even without premium
		 * Post scrobble/episodes
		 * @return {Array<ScrobbleEpisodesPostReturn>} All episodes were succesfully marked
		 */
		ScrobbleEpisodesPost(requestBody: Array<ScrobbleEpisodesPostPostBody>, headersHandler?: () => HttpHeaders): Observable<Array<ScrobbleEpisodesPostReturn>> {
			return this.http.post<Array<ScrobbleEpisodesPostReturn>>(this.baseUri + 'scrobble/episodes', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Mark an episode as acquired or watched based on its ID
		 * This endpoint can be used by all users, even without premium
		 * Put scrobble/episodes/{episode_id}
		 * @return {MarkedEpisode} this episode is now marked
		 */
		ScrobbleEpisodes_episode_idPut(requestBody: MarkedEpisode, headersHandler?: () => HttpHeaders): Observable<MarkedEpisode> {
			return this.http.put<MarkedEpisode>(this.baseUri + 'scrobble/episodes/{episode_id}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Mark episodes within a show as acquired or watched based on their attributes
		 * To specify a show, supply either `tvmaze_id`, `thetvdb_id` or `imdb_id`. To specify an episode, supply either both `season` and `episode`, or `airdate`.
		 * This endpoint can be used by all users, even without premium.
		 * Post scrobble/shows
		 * @param {number} tvmaze_id The show's TVmaze ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} thetvdb_id The show's TheTVDB ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} imdb_id The show's IMDB ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<ScrobbleShowsPostByTvmaze_idAndThetvdb_idAndImdb_idReturn>} All episodes were succesfully marked
		 */
		ScrobbleShowsPostByTvmaze_idAndThetvdb_idAndImdb_id(tvmaze_id: number | null | undefined, thetvdb_id: number | null | undefined, imdb_id: number | null | undefined, requestBody: Array<ScrobbleShowsPostByTvmaze_idAndThetvdb_idAndImdb_idPostBody>, headersHandler?: () => HttpHeaders): Observable<Array<ScrobbleShowsPostByTvmaze_idAndThetvdb_idAndImdb_idReturn>> {
			return this.http.post<Array<ScrobbleShowsPostByTvmaze_idAndThetvdb_idAndImdb_idReturn>>(this.baseUri + 'scrobble/shows?tvmaze_id=' + tvmaze_id + '&thetvdb_id=' + thetvdb_id + '&imdb_id=' + imdb_id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List watched and acquired episodes for a show
		 * This endpoint can be used by all users, even without premium
		 * Get scrobble/shows/{show_id}
		 * @return {Array<MarkedEpisode>} An array of marked episodes
		 */
		ScrobbleShows_show_idGet(headersHandler?: () => HttpHeaders): Observable<Array<MarkedEpisode>> {
			return this.http.get<Array<MarkedEpisode>>(this.baseUri + 'scrobble/shows/{show_id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List the marked episodes
		 * Get user/episodes
		 * @param {number} show_id Only return episodes from this specific show
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<MarkedEpisode>} An array of marked episodes
		 */
		UserEpisodesGetByShow_id(show_id: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<MarkedEpisode>> {
			return this.http.get<Array<MarkedEpisode>>(this.baseUri + 'user/episodes?show_id=' + show_id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Unmark an episode
		 * Delete user/episodes/{episode_id}
		 * @return {void} the episode is now unmarked
		 */
		UserEpisodes_episode_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'user/episodes/{episode_id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if an episode is marked
		 * Get user/episodes/{episode_id}
		 * @return {MarkedEpisode} The marked episode
		 */
		UserEpisodes_episode_idGet(headersHandler?: () => HttpHeaders): Observable<MarkedEpisode> {
			return this.http.get<MarkedEpisode>(this.baseUri + 'user/episodes/{episode_id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Mark an episode
		 * Set `marked_at` to `NULL` or leave it out to use the current time.
		 * Put user/episodes/{episode_id}
		 * @return {MarkedEpisode} this episode is now marked
		 */
		UserEpisodes_episode_idPut(requestBody: MarkedEpisode, headersHandler?: () => HttpHeaders): Observable<MarkedEpisode> {
			return this.http.put<MarkedEpisode>(this.baseUri + 'user/episodes/{episode_id}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List the followed networks
		 * Get user/follows/networks
		 * @param {UserFollowsNetworksGetByEmbedEmbed} embed Embed full network info
		 * @return {Array<NetworkFollow>} An array of followed networks
		 */
		UserFollowsNetworksGetByEmbed(embed: UserFollowsNetworksGetByEmbedEmbed | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<NetworkFollow>> {
			return this.http.get<Array<NetworkFollow>>(this.baseUri + 'user/follows/networks?embed=' + embed, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Unfollow a network
		 * Delete user/follows/networks/{network_id}
		 * @return {void} the network is now unfollowed
		 */
		UserFollowsNetworks_network_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'user/follows/networks/{network_id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a network is followed
		 * Get user/follows/networks/{network_id}
		 * @return {NetworkFollow} The followed network
		 */
		UserFollowsNetworks_network_idGet(headersHandler?: () => HttpHeaders): Observable<NetworkFollow> {
			return this.http.get<NetworkFollow>(this.baseUri + 'user/follows/networks/{network_id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Follow a network
		 * Put user/follows/networks/{network_id}
		 * @return {NetworkFollow} this network is now followed
		 */
		UserFollowsNetworks_network_idPut(headersHandler?: () => HttpHeaders): Observable<NetworkFollow> {
			return this.http.put<NetworkFollow>(this.baseUri + 'user/follows/networks/{network_id}', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List the followed people
		 * Get user/follows/people
		 * @param {UserFollowsPeopleGetByEmbedEmbed} embed Embed full person info
		 * @return {Array<PersonFollow>} An array of followed people
		 */
		UserFollowsPeopleGetByEmbed(embed: UserFollowsPeopleGetByEmbedEmbed | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<PersonFollow>> {
			return this.http.get<Array<PersonFollow>>(this.baseUri + 'user/follows/people?embed=' + embed, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Unfollow a person
		 * Delete user/follows/people/{person_id}
		 * @return {void} the person is now unfollowed
		 */
		UserFollowsPeople_person_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'user/follows/people/{person_id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a person is followed
		 * Get user/follows/people/{person_id}
		 * @return {PersonFollow} The followed person
		 */
		UserFollowsPeople_person_idGet(headersHandler?: () => HttpHeaders): Observable<PersonFollow> {
			return this.http.get<PersonFollow>(this.baseUri + 'user/follows/people/{person_id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Follow a person
		 * Put user/follows/people/{person_id}
		 * @return {PersonFollow} this person is now followed
		 */
		UserFollowsPeople_person_idPut(headersHandler?: () => HttpHeaders): Observable<PersonFollow> {
			return this.http.put<PersonFollow>(this.baseUri + 'user/follows/people/{person_id}', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List the followed shows
		 * Get user/follows/shows
		 * @param {UserFollowsShowsGetByEmbedEmbed} embed Embed full show info
		 * @return {Array<ShowFollow>} An array of followed shows
		 */
		UserFollowsShowsGetByEmbed(embed: UserFollowsShowsGetByEmbedEmbed | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<ShowFollow>> {
			return this.http.get<Array<ShowFollow>>(this.baseUri + 'user/follows/shows?embed=' + embed, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Unfollow a show
		 * Delete user/follows/shows/{show_id}
		 * @return {void} The show is now unfollowed
		 */
		UserFollowsShows_show_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'user/follows/shows/{show_id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a show is followed
		 * Get user/follows/shows/{show_id}
		 * @return {ShowFollow} The followed show
		 */
		UserFollowsShows_show_idGet(headersHandler?: () => HttpHeaders): Observable<ShowFollow> {
			return this.http.get<ShowFollow>(this.baseUri + 'user/follows/shows/{show_id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Follow a show
		 * Put user/follows/shows/{show_id}
		 * @return {ShowFollow} This show is now followed
		 */
		UserFollowsShows_show_idPut(headersHandler?: () => HttpHeaders): Observable<ShowFollow> {
			return this.http.put<ShowFollow>(this.baseUri + 'user/follows/shows/{show_id}', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List the followed webchannels
		 * Get user/follows/webchannels
		 * @param {UserFollowsWebchannelsGetByEmbedEmbed} embed Embed full webchannel info
		 * @return {Array<WebchannelFollow>} An array of followed webchannels
		 */
		UserFollowsWebchannelsGetByEmbed(embed: UserFollowsWebchannelsGetByEmbedEmbed | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<WebchannelFollow>> {
			return this.http.get<Array<WebchannelFollow>>(this.baseUri + 'user/follows/webchannels?embed=' + embed, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Unfollow a webchannel
		 * Delete user/follows/webchannels/{webchannel_id}
		 * @return {void} the webchannel is now unfollowed
		 */
		UserFollowsWebchannels_webchannel_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'user/follows/webchannels/{webchannel_id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a webchannel is followed
		 * Get user/follows/webchannels/{webchannel_id}
		 * @return {WebchannelFollow} The followed webchannel
		 */
		UserFollowsWebchannels_webchannel_idGet(headersHandler?: () => HttpHeaders): Observable<WebchannelFollow> {
			return this.http.get<WebchannelFollow>(this.baseUri + 'user/follows/webchannels/{webchannel_id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Follow a webchannel
		 * Put user/follows/webchannels/{webchannel_id}
		 * @return {WebchannelFollow} this webchannel is now followed
		 */
		UserFollowsWebchannels_webchannel_idPut(headersHandler?: () => HttpHeaders): Observable<WebchannelFollow> {
			return this.http.put<WebchannelFollow>(this.baseUri + 'user/follows/webchannels/{webchannel_id}', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List all tags
		 * Get user/tags
		 * @return {Array<Tag>} An array of tags
		 */
		UserTagsGet(headersHandler?: () => HttpHeaders): Observable<Array<Tag>> {
			return this.http.get<Array<Tag>>(this.baseUri + 'user/tags', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new tag
		 * Post user/tags
		 * @return {Tag} The newly created tag
		 */
		UserTagsPost(requestBody: Tag, headersHandler?: () => HttpHeaders): Observable<Tag> {
			return this.http.post<Tag>(this.baseUri + 'user/tags', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a specific tag
		 * Delete user/tags/{tag_id}
		 * @param {number} tag_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} The tag was deleted
		 */
		UserTags_tag_idDelete(tag_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'user/tags/' + tag_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a specific tag
		 * Patch user/tags/{tag_id}
		 * @param {number} tag_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Tag} The tag was updated
		 */
		UserTags_tag_idPatch(tag_id: number, requestBody: Tag, headersHandler?: () => HttpHeaders): Observable<Tag> {
			return this.http.patch<Tag>(this.baseUri + 'user/tags/' + tag_id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List all shows under this tag
		 * Get user/tags/{tag_id}/shows
		 * @param {number} tag_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {UserFollowsShowsGetByEmbedEmbed} embed Embed full show info
		 * @return {Array<TagInstance>} A list of tagged shows
		 */
		UserTags_tag_idShowsGetByEmbed(tag_id: number, embed: UserFollowsShowsGetByEmbedEmbed | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<TagInstance>> {
			return this.http.get<Array<TagInstance>>(this.baseUri + 'user/tags/' + tag_id + '/shows?embed=' + embed, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Untag a show
		 * Delete user/tags/{tag_id}/shows/{show_id}
		 * @param {number} tag_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} show_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} The show was untagged
		 */
		UserTags_tag_idShows_show_idDelete(tag_id: number, show_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'user/tags/' + tag_id + '/shows/' + show_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Tag a show
		 * Put user/tags/{tag_id}/shows/{show_id}
		 * @param {number} tag_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} show_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {TagInstance} The show was tagged
		 */
		UserTags_tag_idShows_show_idPut(tag_id: number, show_id: number, headersHandler?: () => HttpHeaders): Observable<TagInstance> {
			return this.http.put<TagInstance>(this.baseUri + 'user/tags/' + tag_id + '/shows/' + show_id, null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List the episodes voted for
		 * Get user/votes/episodes
		 * @return {Array<EpisodeVote>} An array of episode votes
		 */
		UserVotesEpisodesGet(headersHandler?: () => HttpHeaders): Observable<Array<EpisodeVote>> {
			return this.http.get<Array<EpisodeVote>>(this.baseUri + 'user/votes/episodes', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Remove an episode vote
		 * Delete user/votes/episodes/{episode_id}
		 * @return {void} The episode vote is now removed
		 */
		UserVotesEpisodes_episode_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'user/votes/episodes/{episode_id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if an episode is voted for
		 * Get user/votes/episodes/{episode_id}
		 * @return {EpisodeVote} The episode vote
		 */
		UserVotesEpisodes_episode_idGet(headersHandler?: () => HttpHeaders): Observable<EpisodeVote> {
			return this.http.get<EpisodeVote>(this.baseUri + 'user/votes/episodes/{episode_id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Vote for an episode
		 * Put user/votes/episodes/{episode_id}
		 * @return {EpisodeVote} This episode is now voted for
		 */
		UserVotesEpisodes_episode_idPut(requestBody: EpisodeVote, headersHandler?: () => HttpHeaders): Observable<EpisodeVote> {
			return this.http.put<EpisodeVote>(this.baseUri + 'user/votes/episodes/{episode_id}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List the shows voted for
		 * Get user/votes/shows
		 * @param {UserFollowsShowsGetByEmbedEmbed} embed Embed full show info
		 * @return {Array<ShowVote>} An array of show votes
		 */
		UserVotesShowsGetByEmbed(embed: UserFollowsShowsGetByEmbedEmbed | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<ShowVote>> {
			return this.http.get<Array<ShowVote>>(this.baseUri + 'user/votes/shows?embed=' + embed, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Remove a show vote
		 * Delete user/votes/shows/{show_id}
		 * @return {void} The show vote is now removed
		 */
		UserVotesShows_show_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'user/votes/shows/{show_id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a show is voted for
		 * Get user/votes/shows/{show_id}
		 * @return {ShowVote} The show vote
		 */
		UserVotesShows_show_idGet(headersHandler?: () => HttpHeaders): Observable<ShowVote> {
			return this.http.get<ShowVote>(this.baseUri + 'user/votes/shows/{show_id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Vote for a show
		 * Set `voted_at` to `NULL` or leave it out to use the current time.
		 * Put user/votes/shows/{show_id}
		 * @return {ShowVote} This show is now voted for
		 */
		UserVotesShows_show_idPut(requestBody: ShowVote, headersHandler?: () => HttpHeaders): Observable<ShowVote> {
			return this.http.put<ShowVote>(this.baseUri + 'user/votes/shows/{show_id}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

	export interface AuthPollPostPostBody {
		token?: string | null;
	}
	export interface AuthPollPostPostBodyFormProperties {
		token: FormControl<string | null | undefined>,
	}
	export function CreateAuthPollPostPostBodyFormGroup() {
		return new FormGroup<AuthPollPostPostBodyFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthPollPostReturn {

		/** The user's API key */
		apikey?: string | null;

		/** The user's username */
		username?: string | null;
	}
	export interface AuthPollPostReturnFormProperties {

		/** The user's API key */
		apikey: FormControl<string | null | undefined>,

		/** The user's username */
		username: FormControl<string | null | undefined>,
	}
	export function CreateAuthPollPostReturnFormGroup() {
		return new FormGroup<AuthPollPostReturnFormProperties>({
			apikey: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthStartPostPostBody {

		/** The user's email address */
		email?: string | null;

		/** Whether to email the user a confirmation link */
		email_confirmation?: boolean | null;
	}
	export interface AuthStartPostPostBodyFormProperties {

		/** The user's email address */
		email: FormControl<string | null | undefined>,

		/** Whether to email the user a confirmation link */
		email_confirmation: FormControl<boolean | null | undefined>,
	}
	export function CreateAuthStartPostPostBodyFormGroup() {
		return new FormGroup<AuthStartPostPostBodyFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			email_confirmation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AuthStartPostReturn {

		/** URL where the user can confirm the authentication request */
		confirm_url?: string | null;

		/** Authentication token to use in the `poll` endpoint */
		token?: string | null;
	}
	export interface AuthStartPostReturnFormProperties {

		/** URL where the user can confirm the authentication request */
		confirm_url: FormControl<string | null | undefined>,

		/** Authentication token to use in the `poll` endpoint */
		token: FormControl<string | null | undefined>,
	}
	export function CreateAuthStartPostReturnFormGroup() {
		return new FormGroup<AuthStartPostReturnFormProperties>({
			confirm_url: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthValidateGetReturn {

		/**
		 * The user's premium level; 1 for Bronze, 2 for Silver, 3 for Gold; or 0 for none
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		premium?: number | null;
	}
	export interface AuthValidateGetReturnFormProperties {

		/**
		 * The user's premium level; 1 for Bronze, 2 for Silver, 3 for Gold; or 0 for none
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		premium: FormControl<number | null | undefined>,
	}
	export function CreateAuthValidateGetReturnFormGroup() {
		return new FormGroup<AuthValidateGetReturnFormProperties>({
			premium: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScrobbleEpisodesPostPostBody {

		/**
		 * The TVmaze episode ID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		episode_id?: number | null;

		/**
		 * Epoch timestamp for when the user watched the episode, or 0 for unknown.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		marked_at?: number | null;

		/** 0 for watched, 1 for acquired, 2 for skipped */
		type?: MarkType;
	}
	export interface ScrobbleEpisodesPostPostBodyFormProperties {

		/**
		 * The TVmaze episode ID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		episode_id: FormControl<number | null | undefined>,

		/**
		 * Epoch timestamp for when the user watched the episode, or 0 for unknown.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		marked_at: FormControl<number | null | undefined>,
	}
	export function CreateScrobbleEpisodesPostPostBodyFormGroup() {
		return new FormGroup<ScrobbleEpisodesPostPostBodyFormProperties>({
			episode_id: new FormControl<number | null | undefined>(undefined),
			marked_at: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScrobbleEpisodesPostReturn {

		/**
		 * The HTTP code that corresponds to this item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of validation errors for this item (in case of error) */
		errors?: string | null;

		/** The request data that belonged to this response (in case of error) */
		input?: string | null;

		/** A human-readable error message (in case of error) */
		message?: string | null;

		/** The resulting created/updated object (in case of success) */
		result?: string | null;
	}
	export interface ScrobbleEpisodesPostReturnFormProperties {

		/**
		 * The HTTP code that corresponds to this item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** A list of validation errors for this item (in case of error) */
		errors: FormControl<string | null | undefined>,

		/** The request data that belonged to this response (in case of error) */
		input: FormControl<string | null | undefined>,

		/** A human-readable error message (in case of error) */
		message: FormControl<string | null | undefined>,

		/** The resulting created/updated object (in case of success) */
		result: FormControl<string | null | undefined>,
	}
	export function CreateScrobbleEpisodesPostReturnFormGroup() {
		return new FormGroup<ScrobbleEpisodesPostReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			errors: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			result: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScrobbleShowsPostByTvmaze_idAndThetvdb_idAndImdb_idPostBody {

		/**
		 * The episode airdate
		 * Type: DateOnly
		 */
		airdate?: Date | null;

		/**
		 * The episode number
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		episode?: number | null;

		/**
		 * Epoch timestamp for when the user watched the episode, or 0 for unknown.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		marked_at?: number | null;

		/**
		 * The season number
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		season?: number | null;

		/** 0 for watched, 1 for acquired, 2 for skipped */
		type?: MarkType;
	}
	export interface ScrobbleShowsPostByTvmaze_idAndThetvdb_idAndImdb_idPostBodyFormProperties {

		/**
		 * The episode airdate
		 * Type: DateOnly
		 */
		airdate: FormControl<Date | null | undefined>,

		/**
		 * The episode number
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		episode: FormControl<number | null | undefined>,

		/**
		 * Epoch timestamp for when the user watched the episode, or 0 for unknown.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		marked_at: FormControl<number | null | undefined>,

		/**
		 * The season number
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		season: FormControl<number | null | undefined>,
	}
	export function CreateScrobbleShowsPostByTvmaze_idAndThetvdb_idAndImdb_idPostBodyFormGroup() {
		return new FormGroup<ScrobbleShowsPostByTvmaze_idAndThetvdb_idAndImdb_idPostBodyFormProperties>({
			airdate: new FormControl<Date | null | undefined>(undefined),
			episode: new FormControl<number | null | undefined>(undefined),
			marked_at: new FormControl<number | null | undefined>(undefined),
			season: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScrobbleShowsPostByTvmaze_idAndThetvdb_idAndImdb_idReturn {

		/**
		 * The HTTP code that corresponds to this item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of validation errors for this item (in case of error) */
		errors?: string | null;

		/** The request data that belonged to this response (in case of error) */
		input?: string | null;

		/** A human-readable error message (in case of error) */
		message?: string | null;

		/** The resulting created/updated object (in case of success) */
		result?: string | null;
	}
	export interface ScrobbleShowsPostByTvmaze_idAndThetvdb_idAndImdb_idReturnFormProperties {

		/**
		 * The HTTP code that corresponds to this item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** A list of validation errors for this item (in case of error) */
		errors: FormControl<string | null | undefined>,

		/** The request data that belonged to this response (in case of error) */
		input: FormControl<string | null | undefined>,

		/** A human-readable error message (in case of error) */
		message: FormControl<string | null | undefined>,

		/** The resulting created/updated object (in case of success) */
		result: FormControl<string | null | undefined>,
	}
	export function CreateScrobbleShowsPostByTvmaze_idAndThetvdb_idAndImdb_idReturnFormGroup() {
		return new FormGroup<ScrobbleShowsPostByTvmaze_idAndThetvdb_idAndImdb_idReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			errors: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			result: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserFollowsNetworksGetByEmbedEmbed { network = 'network' }

	export enum UserFollowsPeopleGetByEmbedEmbed { person = 'person' }

	export enum UserFollowsShowsGetByEmbedEmbed { show = 'show' }

	export enum UserFollowsWebchannelsGetByEmbedEmbed { webchannel = 'webchannel' }

}

