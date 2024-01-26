import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Call phone number auth.
		 * Post call_phone_number_auth
		 * @return {void} success
		 */
		Call_phone_number_authPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'call_phone_number_auth', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Clubhouse uses this to check for updates when app is not installed from App Store (eg TestFlight)
		 * Get check_for_update
		 * @return {void} successful response
		 */
		Check_for_updateGetByIs_testflight(is_testflight: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'check_for_update?is_testflight=' + is_testflight, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * checks waitlist status.
		 * Post check_waitlist_status
		 * @return {void} got waitlist status
		 */
		Check_waitlist_statusPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'check_waitlist_status', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Call phone number auth.
		 * Post complete_phone_number_auth
		 * @return {void} success
		 */
		Complete_phone_number_authPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'complete_phone_number_auth', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * creates a channel
		 * Post create_channel
		 * @return {void} 
		 */
		Create_channelPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'create_channel', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * follows a user
		 * Post follow
		 * @return {void} 
		 */
		FollowPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'follow', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * get actionable notifications (the bell again)
		 * Get get_actionable_notifications
		 * @return {void} Returns a list of actionable notifications.
		 */
		Get_actionable_notificationsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'get_actionable_notifications', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * gets all topics.
		 * Get get_all_topics
		 * @return {void} a list of topics
		 */
		Get_all_topicsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'get_all_topics', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * get all channels
		 * Get get_channels
		 * @return {void} list of channels
		 */
		Get_channelsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'get_channels', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * gets club by id
		 * Post get_club
		 * @return {void} returns club object
		 */
		Get_clubPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'get_club', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * looks up clubs by topic.
		 * Post get_clubs_for_topic
		 * @return {void} returns list of clubs with pagination
		 */
		Get_clubs_for_topicPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'get_clubs_for_topic', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * is fetched when you tap Create Room
		 * Post get_create_channel_targets
		 * @return {void} 
		 */
		Get_create_channel_targetsPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'get_create_channel_targets', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * the Upcoming for You page
		 * Get get_events
		 * @return {void} a list of events
		 */
		Get_eventsGetByIs_filteredAndPage_sizeAndPage(is_filtered: boolean | null | undefined, page_size: number | null | undefined, page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'get_events?is_filtered=' + is_filtered + '&page_size=' + page_size + '&page=' + page, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * get a list of the users and clubs that this user is following. Returned users have bios truncated to ~80 characters.
		 * Post get_following
		 * @return {void} returns list of users and clubs
		 */
		Get_followingPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'get_following', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * get notifications (the bell icon)
		 * Get get_notifications
		 * @return {void} Returns a list of notifications.
		 */
		Get_notificationsGetByPage_sizeAndPage(page_size: number | null | undefined, page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'get_notifications?page_size=' + page_size + '&page=' + page, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * gets online friends on the app homepage.
		 * Post get_online_friends
		 * @return {void} a list of online clubs and users.
		 */
		Get_online_friendsPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'get_online_friends', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * looks up user profile by ID.
		 * Post get_profile
		 * @return {void} returns user profile info
		 */
		Get_profilePost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'get_profile', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * gets release notes.
		 * Post get_release_notes
		 * @return {void} the response
		 */
		Get_release_notesPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'get_release_notes', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * get notification settings
		 * Get get_settings
		 * @return {void} notification settings
		 */
		Get_settingsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'get_settings', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * find users to invite to clubs based on phone number
		 * Post get_suggested_club_invites
		 * @return {void} returns list of suggested invites.
		 */
		Get_suggested_club_invitesPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'get_suggested_club_invites', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * gets suggested follows during signup
		 * Get get_suggested_follows_all
		 * @return {void} a list of users to follow. bios truncated to 80 chars.
		 */
		Get_suggested_follows_allGetByIn_onboardingAndPage_sizeAndPage(in_onboarding: boolean | null | undefined, page_size: number | null | undefined, page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'get_suggested_follows_all?in_onboarding=' + in_onboarding + '&page_size=' + page_size + '&page=' + page, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * find people to follow by uploading contacts during signup
		 * Post get_suggested_follows_friends_only
		 * @return {void} returns list of users and clubs
		 */
		Get_suggested_follows_friends_onlyPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'get_suggested_follows_friends_only', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * find similar users. (The Sparkles button on Clubhouse's profile page)
		 * Post get_suggested_follows_similar
		 * @return {void} Returns a list of users. Bios truncated to 80 chars.
		 */
		Get_suggested_follows_similarPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'get_suggested_follows_similar', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * find users to invite based on phone number.
		 * (also see https://zerforschung.org/posts/clubhouse-telefonnummern-en/ for @zerforschung's analysis of the privacy implications of this API)
		 * Post get_suggested_invites
		 * @return {void} returns list of users that can be invited.
		 */
		Get_suggested_invitesPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'get_suggested_invites', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * gets suggested users when you start a private room
		 * Post get_suggested_speakers
		 * @return {void} Returns a list of actionable notifications.
		 */
		Get_suggested_speakersPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'get_suggested_speakers', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * looks up topic by ID.
		 * Post get_topic
		 * @return {void} returns topic info
		 */
		Get_topicPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'get_topic', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * looks up users by topic.
		 * Get get_users_for_topic
		 * @return {void} returns list of users with pagination. Bios truncated to 80 chars.
		 */
		Get_users_for_topicGetByTopic_idAndPage_sizeAndPage(topic_id: number | null | undefined, page_size: number | null | undefined, page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'get_users_for_topic?topic_id=' + topic_id + '&page_size=' + page_size + '&page=' + page, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * called during signup
		 * Get get_welcome_channel
		 * @return {void} empty???
		 */
		Get_welcome_channelGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'get_welcome_channel', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * wave to another user on the waitlist to give them access
		 * Post invite_from_waitlist
		 * @return {void} 
		 */
		Invite_from_waitlistPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'invite_from_waitlist', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * invite a user to the app, using one of your invites
		 * Post invite_to_app
		 * @return {void} 
		 */
		Invite_to_appPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'invite_to_app', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * join a channel.
		 * Post join_channel
		 * @return {void} stuff needed to actually join a channel
		 */
		Join_channelPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'join_channel', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * leave a channel.
		 * Post leave_channel
		 * @return {void} left the channel
		 */
		Leave_channelPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'leave_channel', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * gets user
		 * Post me
		 * @return {void} the response
		 */
		MePost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'me', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * analytics
		 * Post record_action_trails
		 * @return {void} always empty
		 */
		Record_action_trailsPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'record_action_trails', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * gets an access_token from a refresh_token.
		 * Post refresh_token
		 * @return {void} returns new access and refresh token
		 */
		Refresh_tokenPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'refresh_token', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Resend phone number auth.
		 * Post resend_phone_number_auth
		 * @return {void} success
		 */
		Resend_phone_number_authPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'resend_phone_number_auth', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * search clubs.
		 * Post search_clubs
		 * @return {void} Returns a list of clubs.
		 */
		Search_clubsPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'search_clubs', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * search for users
		 * Post search_users
		 * @return {void} Returns a list of users.
		 */
		Search_usersPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'search_users', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts phone number auth.
		 * Post start_phone_number_auth
		 * @return {void} success
		 */
		Start_phone_number_authPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'start_phone_number_auth', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * updates notification during signup.
		 * Post update_notifications
		 * @return {void} 
		 */
		Update_notificationsPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'update_notifications', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * edits username.
		 * Post update_username
		 * @return {void} username successfully set
		 */
		Update_usernamePost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'update_username', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

}

