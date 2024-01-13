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
		 * Returns settings (including
		 * current trend, geo and sleep time information) for the authenticating user.
		 * Get account/settings.json
		 * @return {void} Successful Response
		 */
		Account_settings_get(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'account/settings.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the
		 * authenticating user's settings.
		 * Post account/settings.json
		 * @return {void} Successful Response
		 */
		Account_settings_post(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/settings.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets which
		 * device Twitter delivers updates to for the authenticating user. Sending none as the device parameter
		 * will disable SMS updates.
		 * Post account/update_delivery_device.json
		 * @return {void} Successful Response
		 */
		Account_update_delivery_device(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/update_delivery_device.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets values that
		 * users are able to set under the Account tab of their settings page. Only the parameters specified
		 * will be updated.
		 * Post account/update_profile.json
		 * @return {void} Successful Response
		 */
		Account_update_profile(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/update_profile.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the authenticating user's profile background image. This method can also be used to enable
		 * or disable the profile background image. Although each parameter is marked as optional, at least one
		 * of image, tile or use must be provided when making this request.
		 * Post account/update_profile_background_image.json
		 * @return {void} Successful Response
		 */
		Accounts_update_profile_background_image(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/update_profile_background_image.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets one or
		 * more hex values that control the color scheme of the authenticating user's profile page on
		 * twitter.com.
		 * Each parameter's value must be a valid hexidecimal value, and may be either three or six characters
		 * (ex: #fff or #ffffff).
		 * Post account/update_profile_colors.json
		 * @return {void} Successful Response
		 */
		Accounts_update_profile_colors(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/update_profile_colors.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the
		 * authenticating user's profile image. Note that this method expects raw multipart data, not a URL to
		 * an image. This method asynchronously processes the uploaded file before updating the user's profile
		 * image URL. You can either update your local cache the next time you request the user's information,
		 * or, at least 5 seconds after uploading the image, ask for the updated URL using GET
		 * users/profile_image/:screen_name
		 * (https://dev.twitter.com/docs/api/1/get/users/profile_image/:screen_name).
		 * Post account/update_profile_image.json
		 * @return {void} Successful Response
		 */
		Accounts_update_profile_image(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/update_profile_image.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the
		 * current rate limits for
		 * methods belonging to the specified resource families.
		 * Each 1.1 API resource belongs to a "resource family" which is indicated in its method documentation.
		 * You can typically determine a method's resource family from the first component of the path after
		 * the resource version.
		 * This method responds with a map of methods belonging to the families specified by the resources
		 * parameter, the current remaining uses for each of those resources within the current rate limiting
		 * window, and its expiration time in epoch time. It also includes a rate_limit_context field that
		 * indicates the current access token context.
		 * You may also issue requests to this method without any parameters to receive a map of all rate
		 * limited GET methods. If your application only uses a few of methods, please explicitly provide a
		 * resources parameter with the specified resource families you work with.
		 * Get application/rate_limit_status.json
		 * @return {void} Successful Response
		 */
		Application_rate_limit_status(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'application/rate_limit_status.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Blocks the specified user from
		 * following the authenticating user. In addition the blocked user will not show in the authenticating
		 * users mentions or timeline (unless retweeted by another user). If a follow or friend relationship
		 * exists it is destroyed.
		 * Post blocks/create.json
		 * @return {void} Successful Response
		 */
		Blocks_create(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'blocks/create.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Un-blocks the user specified
		 * in the ID parameter for the authenticating user. Returns the un-blocked user in the requested format
		 * when successful. If relationships existed before the block was instated, they will not be restored.
		 * Post blocks/destroy.json
		 * @return {void} Successful Response
		 */
		Blocks_destroy(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'blocks/destroy.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns an array of numeric user
		 * ids the authenticating user is blocking.
		 * Get blocks/ids.json
		 * @return {void} Successful Response
		 */
		Blocks_ids(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'blocks/ids.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows one to enable or
		 * disable retweets and device notifications from the specified user.
		 * Get blocks/list.json
		 * @return {void} Successful Response
		 */
		Blocks_list(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'blocks/list.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the 20 most recent
		 * direct messages sent to the authenticating user. Includes detailed information about the sender and
		 * recipient user. You can request up to 200 direct messages per call, up to a maximum of 800 incoming
		 * DMs.
		 * Important: This method requires an access token with RWD (read, write and direct message)
		 * permissions.
		 * Consult The Application Permission Model for more information.
		 * Get direct_messages.json
		 * @return {void} Successful Response
		 */
		Direct_messages(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'direct_messages.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Destroys the direct
		 * message specified in the required ID parameter. The authenticating user must be the recipient of the
		 * specified direct message.
		 * Important: This method requires an access token with RWD (read, write and direct message)
		 * permissions.
		 * Consult The Application Permission Model for more information.
		 * Post direct_messages/destroy.json
		 * @return {void} Successful Response
		 */
		Direct_messages_destroy(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'direct_messages/destroy.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sends a new direct
		 * message to the specified user from the authenticating user. Requires both the user and text
		 * parameters and must be a POST. Returns the sent message in the requested format if successful.
		 * Post direct_messages/new.json
		 * @return {void} Successful Response
		 */
		Direct_messages_new(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'direct_messages/new.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the 20 most
		 * recent direct messages sent by the authenticating user. Includes detailed information about the
		 * sender and recipient user. You can request up to 200 direct messages per call, up to a maximum of
		 * 800 outgoing DMs.
		 * Important: This method requires an access token with RWD (read, write and direct message)
		 * permissions. Consult The Application Permission Model for more information.
		 * Get direct_messages/sent.json
		 * @return {void} Successful Response
		 */
		Direct_messages_sent(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'direct_messages/sent.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single direct
		 * message, specified by an id parameter. Like the /1.1/direct_messages.format request, this method
		 * will include the user objects of the sender and recipient.
		 * Important: This method requires an access token with RWD (read, write and direct message)
		 * permissions.
		 * Consult The Application Permission Model for more information.
		 * Get direct_messages/show.json
		 * @return {void} Successful Response
		 */
		Direct_messages_show(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'direct_messages/show.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Favorites the status
		 * specified in the ID parameter as the authenticating user. Returns the favorite status when
		 * successful.
		 * This process invoked by this method is asynchronous. The immediately returned status may not
		 * indicate the resultant favorited status of the tweet. A 200 OK response from this method will
		 * indicate whether the intended action was successful or not.
		 * Post favorites/create.json
		 * @return {void} Successful Response
		 */
		Favorites_create(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'favorites/create.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Un-favorites the status
		 * specified in the ID parameter as the authenticating user. Returns the un-favorited status in the
		 * requested format when successful.
		 * This process invoked by this method is asynchronous. The immediately returned status may not
		 * indicate the resultant favorited status of the tweet. A 200 OK response from this method will
		 * indicate whether the intended action was successful or not.
		 * Post favorites/destroy.json
		 * @return {void} Successful Response
		 */
		Favorites_destroy(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'favorites/destroy.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the 20 most recent
		 * Tweets favorited by the authenticating or specified user.
		 * Get favorites/list.json
		 * @return {void} Successful Response
		 */
		Favorites_list(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'favorites/list.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a cursored collection
		 * of user IDs for every user following the specified user.
		 * At this time, results are ordered with the most recent following first — however, this ordering is
		 * subject to unannounced change and eventual consistency issues. Results are given in groups of 5,000
		 * user IDs and multiple "pages" of results can be navigated through using the next_cursor value in
		 * subsequent requests. See Using cursors to navigate collections for more information.
		 * This method is especially powerful when used in conjunction with GET users/lookup, a method that
		 * allows you to convert user IDs into full user objects in bulk.
		 * Get followers/ids.json
		 * @return {void} Successful Response
		 */
		Followers_ids(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'followers/ids.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a cursored collection of
		 * user IDs for every user the specified user is following (otherwise known as their "friends").
		 * At this time, results are ordered with the most recent following first — however, this ordering is
		 * subject to unannounced change and eventual consistency issues. Results are given in groups of 5,000
		 * user IDs and multiple "pages" of results can be navigated through using the next_cursor value in
		 * subsequent requests. See Using cursors to navigate collections for more information.
		 * This method is especially powerful when used in conjunction with GET users/lookup, a method that
		 * allows you to convert user IDs into full user objects in bulk.
		 * Get friends/ids.json
		 * @return {void} Successful Response
		 */
		Friends_ids(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'friends/ids.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows the authenticating
		 * users to follow the user specified in the ID parameter.
		 * Returns the befriended user in the requested format when successful. Returns a string describing the
		 * failure condition when unsuccessful. If you are already friends with the user a HTTP 403 may be
		 * returned, though for performance reasons you may get a 200 OK message even if the friendship already
		 * exists.
		 * Actions taken in this method are asynchronous and changes will be eventually consistent.
		 * Post friendships/create.json
		 * @return {void} Successful Response
		 */
		Friendships_create(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'friendships/create.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows the
		 * authenticating
		 * user to unfollow the user specified in the ID parameter.
		 * Returns the unfollowed user in the requested format when successful. Returns a string describing the
		 * failure condition when unsuccessful.
		 * Actions taken in this method are asynchronous and changes will be eventually consistent.
		 * Post friendships/destroy.json
		 * @return {void} Successful Response
		 */
		Friendships_destroy(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'friendships/destroy.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the
		 * relationships
		 * of the authenticating user to the comma-separated list of up to 100 screen_names or user_ids
		 * provided. Values for connections can be: following, following_requested, followed_by, none.
		 * Get friendships/incoming.json
		 * @return {void} Successful Response
		 */
		Friendships_incoming(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'friendships/incoming.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the relationships
		 * of the authenticating user to the comma-separated list of up to 100 screen_names or user_ids
		 * provided. Values for connections can be: following, following_requested, followed_by, none.
		 * Get friendships/lookup.json
		 * @return {void} Successful Response
		 */
		Friendships_lookup(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'friendships/lookup.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a collection of
		 * numeric IDs for every protected user for whom the authenticating user has a pending follow request.
		 * Get friendships/outgoing.json
		 * @return {void} Successful Response
		 */
		Friendships_outgoing(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'friendships/outgoing.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns detailed information
		 * about the relationship between two arbitrary users.
		 * Get friendships/show.json
		 * @return {void} Successful Response
		 */
		Friendships_show(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'friendships/show.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows one to enable or
		 * disable retweets and device notifications from the specified user.
		 * Post friendships/update.json
		 * @return {void} Successful Response
		 */
		Friendships_update(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'friendships/update.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all the
		 * information about a known place.Example Values: df51dec6f4ee2b2c
		 * Get geo/id/{place_id}.json
		 * @return {void} Successful Response
		 */
		Geo_place_id(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'geo/id/{place_id}.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new place object at the
		 * given latitude and longitude.
		 * Before creating a place you need to query GET geo/similar_places with the latitude, longitude and
		 * name of the place you wish to create. The query will return an array of places which are similar to
		 * the one you wish to create, and a token. If the place you wish to create isn't in the returned array
		 * you can use the token with this method to create a new one.
		 * Post geo/places.json
		 * @return {void} Successful Response
		 */
		Geo_places(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'geo/places.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Given a latitude and a
		 * longitude, searches for up to 20 places that can be used as a place_id when updating a status.
		 * This request is an informative call and will deliver generalized results about geography
		 * Get geo/reverse_geocode.json
		 * @return {void} Successful Response
		 */
		Geo_reverse_geocode(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'geo/reverse_geocode.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search for places that can be
		 * attached to a statuses/update. Given a latitude and a longitude pair, an IP address, or a name, this
		 * request will return a list of all the valid places that can be used as the place_id when updating a
		 * status.
		 * Conceptually, a query can be made from the user's location, retrieve a list of places, have the user
		 * validate the location he or she is at, and then send the ID of this location with a call to POST
		 * statuses/update.
		 * This is the recommended method to use find places that can be attached to statuses/update. Unlike
		 * GET geo/reverse_geocode which provides raw data access, this endpoint can potentially re-order
		 * places with regards to the user who is authenticated. This approach is also preferred for
		 * interactive place matching with the user.
		 * Get geo/search.json
		 * @return {void} Successful Response
		 */
		Geo_search(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'geo/search.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Locates places near the
		 * given coordinates which are similar in name.
		 * Conceptually you would use this method to get a list of known places to choose from first. Then, if
		 * the desired place doesn't exist, make a request to POST geo/place to create a new one.
		 * The token contained in the response is the token needed to be able to create a new place.
		 * Get geo/similar_places.json
		 * @return {void} Successful Response
		 */
		Geo_similar_places(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'geo/similar_places.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the current
		 * configuration used by Twitter including twitter.com slugs which are not usernames, maximum photo
		 * resolutions, and t.co URL lengths.
		 * It is recommended applications request this endpoint when they are loaded, but no more than once a
		 * day.
		 * Get help/configuration.json
		 * @return {void} Successful Response
		 */
		Help_configurations(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'help/configuration.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the list of languages
		 * supported by Twitter along with their ISO 639-1 code. The ISO 639-1 code is the two letter value to
		 * use if you include lang with any of your requests.
		 * Get help/languages.json
		 * @return {void} Successful Response
		 */
		Help_languages(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'help/languages.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns Twitter's Privacy Policy
		 * Get help/privacy.json
		 * @return {void} Successful Response
		 */
		Help_privacy(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'help/privacy.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the Twitter Terms of Service
		 * in the requested format. These are not the same as the Developer Rules of the Road.
		 * Get help/tos.json
		 * @return {void} Successful Response
		 */
		Help_tos(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'help/tos.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new list for the
		 * authenticated user. Note that you can't create more than 20 lists per account.
		 * Post lists/create.json
		 * @return {void} Successful Response
		 */
		Lists_create(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lists/create.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified list.
		 * The authenticated user must own the list to be able to destroy it.
		 * Post lists/destroy.json
		 * @return {void} Successful Response
		 */
		Lists_destroy(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lists/destroy.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all lists the
		 * authenticating or specified user subscribes to, including their own. The user is specified using the
		 * user_id or screen_name parameters. If no user is given, the authenticating user is used.
		 * This method used to be GET lists in version 1.0 of the API and has been renamed for consistency with
		 * other call.
		 * Get lists/list.json
		 * @return {void} Successful Response
		 */
		Lists_list(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lists/list.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the members of the
		 * specified list. Private list members will only be shown if the authenticated user owns the specified
		 * list.
		 * Get lists/members.json
		 * @return {void} Successful Response
		 */
		Lists_members(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lists/members.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a member to a list.
		 * The authenticated user must own the list to be able to add members to it. Note that lists can't have
		 * more than 500 members.
		 * Post lists/members/create.json
		 * @return {void} Successful Response
		 */
		Lists_members_create(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lists/members/create.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds multiple
		 * members to a list, by specifying a comma-separated list of member ids or screen names. The
		 * authenticated user must own the list to be able to add members to it. Note that lists can't have
		 * more than 500 members, and you are limited to adding up to 100 members to a list at a time with this
		 * method.
		 * Please note that there can be issues with lists that rapidly remove and add memberships. Take care
		 * when using these methods such that you are not too rapidly switching between removals and adds on
		 * the same list.
		 * Post lists/members/create_all.json
		 * @return {void} Successful Response
		 */
		Lists_members_create_all(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lists/members/create_all.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes the specified
		 * member from the list. The authenticated user must be the list's owner to remove members from the
		 * list.
		 * Post lists/members/destroy.json
		 * @return {void} Successful Response
		 */
		Lists_members_destroy(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lists/members/destroy.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes multiple
		 * members from a list, by specifying a comma-separated list of member ids or screen names. The
		 * authenticated user must own the list to be able to remove members from it. Note that lists can't
		 * have more than 500 members, and you are limited to removing up to 100 members to a list at a time
		 * with this method.
		 * Please note that there can be issues with lists that rapidly remove and add memberships. Take care
		 * when using these methods such that you are not too rapidly switching between removals and adds on
		 * the same list.
		 * Post lists/members/destroy_all.json
		 * @return {void} Successful Response
		 */
		Lists_members_destroy_all(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lists/members/destroy_all.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if the specified
		 * user is a member of the specified list.
		 * Get lists/members/show.json
		 * @return {void} Successful Response
		 */
		Lists_members_show(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lists/members/show.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the lists the
		 * specified user has been added to. If user_id or screen_name are not provided the memberships for the
		 * authenticating user are returned.
		 * Get lists/memberships.json
		 * @return {void} Successful Response
		 */
		Lists_memberships(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lists/memberships.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the specified list.
		 * Private lists will only be shown if the authenticated user owns the specified list.
		 * Get lists/show.json
		 * @return {void} Successful Response
		 */
		Lists_show(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lists/show.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns tweet timeline for
		 * members of the specified list. Retweets are included by default. You can use the include_rts=false
		 * parameter to omit retweet objects.
		 * Get lists/statuses.json
		 * @return {void} Successful Response
		 */
		Lists_statuses(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lists/statuses.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the subscribers of
		 * the specified list. Private list subscribers will only be shown if the authenticated user owns the
		 * specified list.
		 * Get lists/subscribers.json
		 * @return {void} Successful Response
		 */
		Lists_subscribers(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lists/subscribers.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Subscribes the
		 * authenticated user to the specified list.
		 * Post lists/subscribers/create.json
		 * @return {void} Successful Response
		 */
		Lists_subscribers_create(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lists/subscribers/create.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Unsubscribes the
		 * authenticated user from the specified list.
		 * Post lists/subscribers/destroy.json
		 * @return {void} Successful Response
		 */
		Lists_subscribers_destroy(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lists/subscribers/destroy.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if the specified
		 * user is a subscriber of the specified list. Returns the user if they are subscriber.
		 * Get lists/subscribers/show.json
		 * @return {void} Successful Response
		 */
		Lists_subscribers_show(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lists/subscribers/show.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Obtain a collection of
		 * the lists the specified user is subscribed to, 20 lists per page by default. Does not include the
		 * user's own lists.
		 * Get lists/subscriptions.json
		 * @return {void} Successful Response
		 */
		Lists_subscriptions(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lists/subscriptions.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified list. The
		 * authenticated user must own the list to be able to update it.
		 * Post lists/update.json
		 * @return {void} Successful Response
		 */
		Lists_update(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lists/update.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new saved
		 * search for the authenticated user. A user may only have 25 saved searches.
		 * Post saved_searches/create.json
		 * @return {void} Successful Response
		 */
		Saved_searches_create(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'saved_searches/create.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Destroys a
		 * saved
		 * search for the authenticating user. The authenticating user must be the owner of saved search id
		 * being destroyed.
		 * Post saved_searches/destroy/{id}.json
		 * @return {void} Successful Response
		 */
		Saved_searches_destroy(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'saved_searches/destroy/{id}.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the authenticated
		 * user's saved search queries.
		 * Get saved_searches/list.json
		 * @return {void} Successful Response
		 */
		Saved_searches_list(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'saved_searches/list.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the
		 * authenticated user's saved search queries.
		 * Get saved_searches/show/{id}.json
		 * @return {void} Successful Response
		 */
		Savedsearchesid(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'saved_searches/show/{id}.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a collection of
		 * relevant Tweets matching a specified query.
		 * Please note that Twitter's search service and, by extension, the Search API is not meant to be an
		 * exhaustive source of Tweets. Not all Tweets will be indexed or made available via the search
		 * interface.
		 * In API v1.1, the response format of the Search API has been improved to return Tweet objects more
		 * similar to the objects you'll find across the REST API and platform. You may need to tolerate some
		 * inconsistencies and variance in perspectival values (fields that pertain to the perspective of the
		 * authenticating user) and embedded user objects.
		 * Get search/tweets.json
		 * @return {void} Successful Response
		 */
		Search_tweets(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search/tweets.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Destroys the status
		 * specified by the required ID parameter. The authenticating user must be the author of the specified
		 * status. Returns the destroyed status if successful.
		 * Post statuses/destroy/{id}.json
		 * @return {void} Successful Response
		 */
		Statuses_destroy(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'statuses/destroy/{id}.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a collection
		 * of the most recent Tweets and retweets posted by the authenticating user and the users they follow.
		 * The home timeline is central to how most users interact with the Twitter service.
		 * Up to 800 Tweets are obtainable on the home timeline. It is more volatile for users that follow many
		 * users or follow users who tweet frequently.
		 * Get statuses/home_timeline.json
		 * @return {void} Successful Response
		 */
		Statuses_home_timeline(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'statuses/home_timeline.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the 20
		 * most recent mentions (tweets containing a users's @screen_name) for the authenticating user.The
		 * timeline returned is the equivalent of the one seen when you view your mentions on twitter.com.This
		 * method can only return up to 800 statuses.This method will include retweets in the JSON response
		 * regardless of whether the include_rts parameter is set.
		 * Get statuses/mentions_timeline.json
		 * @return {void} Successful Response
		 */
		Statuses_mentions_timeline(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'statuses/mentions_timeline.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information allowing
		 * the creation of an embedded representation of a Tweet on third party sites. See the oEmbed
		 * specification (http://oembed.com) for information about the response format. Either the id or url
		 * parameters must be specified in a request, it is not necessary to include both. While this endpoint
		 * allows a bit of customization for the final appearance of the embedded Tweet, be aware that the
		 * appearance of the rendered Tweet may change over time to be consistent with Twitter's Display
		 * Guidelines (https://dev.twitter.com/terms/display-guidelines). Do not rely on any class or id
		 * parameters to stay constant in the returned markup.
		 * Get statuses/oembed.json
		 * @return {void} Successful Response
		 */
		Statuses_oembed(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'statuses/oembed.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retweets a tweet.
		 * Returns
		 * the original tweet with retweet details embedded.
		 * Post statuses/retweet/{id}.json
		 * @return {void} Successful Response
		 */
		Statusesretweetid(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'statuses/retweet/{id}.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns up to 100 of
		 * the
		 * first retweets of a given tweet.
		 * Get statuses/retweets/{id}.json
		 * @return {void} Successful Response
		 */
		Statuses_retweets(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'statuses/retweets/{id}.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single status,
		 * specified by the id parameter below. The status's author will be returned inline.
		 * Get statuses/show/{id}.json
		 * @return {void} Successful Response
		 */
		Statuses_show(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'statuses/show/' + (id == null ? '' : encodeURIComponent(id)) + '.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the authenticating
		 * user's status, also known as tweeting. To upload an image to accompany the tweet, use POST
		 * statuses/update_with_media (https://dev.twitter.com/docs/api/1/post/statuses/update_with_media). For
		 * each update attempt, the update text is compared with the authenticating user's recent tweets. Any
		 * attempt that would result in duplication will be blocked, resulting in a 403 error. Therefore, a
		 * user cannot submit the same status twice in a row. While not rate limited by the API a user is
		 * limited in the number of tweets they can create at a time. If the number of updates posted by the
		 * user reaches the current allowed limit this method will return an HTTP 403 error.
		 * Post statuses/update.json
		 * @return {void} Successful Response
		 */
		Statuses_update(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'statuses/update.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the
		 * authenticating user's status and attaches media for upload. Unlike POST statuses/update
		 * (https://dev.twitter.com/docs/api/1.1/post/statuses/update), this method expects raw multipart data.
		 * Your POST request's Content-Type should be set to multipart/form-data with the media[] parameter.
		 * The Tweet text will be rewritten to include the media URL(s), which will reduce the number of
		 * characters allowed in the Tweet text. If the URL(s) cannot be appended without text truncation, the
		 * tweet will be rejected and this method will return an HTTP 403 error. Important: Make sure that
		 * you're using upload.twitter.com as your host while posting statuses with media. It is strongly
		 * recommended to use SSL with this method.
		 * Post statuses/update_with_media.json
		 * @return {void} Successful Response
		 */
		Statuses_update_with_media(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'statuses/update_with_media.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the 20 most
		 * recent statuses posted by the authenticating user. It is also possible to request another user's
		 * timeline by using the screen_name or user_id parameter. The other users timeline will only be
		 * visible if they are not protected, or if the authenticating user's follow request was accepted by
		 * the protected user. The timeline returned is the equivalent of the one seen when you view a user's
		 * profile on twitter.com. This method can only return up to 3,200 of a user's most recent statuses.
		 * Native retweets of other statuses by the user is included in this total, regardless of whether
		 * include_rts is specified when requesting this resource. This method will not include retweets in the
		 * XML and JSON responses unless the include_rts parameter is set. The RSS and Atom responses will
		 * always include retweets as statuses prefixed with RT, regardless of provided parameters. Always
		 * specify either an user_id or screen_name when requesting a user timeline.
		 * Get statuses/user_timeline.json
		 * @return {void} Successful Response
		 */
		Statuses_user_timeline(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'statuses/user_timeline.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the locations that
		 * Twitter has trending topic information for.
		 * The response is an array of "locations" that encode the location's WOEID and some other
		 * human-readable information such as a canonical name and country the location belongs in.
		 * A WOEID is a Yahoo! Where On Earth ID.
		 * Get trends/available.json
		 * @return {void} Successful Response
		 */
		Trends_available(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'trends/available.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the locations that
		 * Twitter has trending topic information for, closest to a specified location.
		 * The response is an array of "locations" that encode the location's WOEID and some other
		 * human-readable information such as a canonical name and country the location belongs in.
		 * A WOEID is a Yahoo! Where On Earth ID.
		 * Get trends/closest.json
		 * @return {void} Successful Response
		 */
		Trends_closest(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'trends/closest.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the top 10 trending
		 * topics for a specific WOEID, if trending information is available for it.
		 * The response is an array of "trend" objects that encode the name of the trending topic, the query
		 * parameter that can be used to search for the topic on Twitter Search, and the Twitter Search URL.
		 * This information is cached for 5 minutes. Requesting more frequently than that will not return any
		 * more data, and will count against your rate limit usage.
		 * Get trends/place.json
		 * @return {void} Successful Response
		 */
		Trends_place(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'trends/place.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a collection of
		 * users that the specified user can contribute to.
		 * Get users/contributees.json
		 * @return {void} Successful Response
		 */
		Users_contributees(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/contributees.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a collection of
		 * users who can contribute to the specified account.
		 * Get users/contributors.json
		 * @return {void} Successful Response
		 */
		Users_contributors(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/contributors.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns fully-hydrated user
		 * objects for up to 100 users per request, as specified by comma-separated values passed to the
		 * user_id and/or screen_name parameters.
		 * This method is especially useful when used in conjunction with collections of user IDs returned from
		 * GET friends/ids and GET followers/ids.
		 * GET users/show is used to retrieve a single user object.
		 * Get users/lookup.json
		 * @return {void} Successful Response
		 */
		Users_lookup(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/lookup.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * The user
		 * specified in the id is blocked by the authenticated user and reported as a spammer.
		 * Post users/report_spam.json
		 * @return {void} Successful Response
		 */
		Users_report_spam(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/report_spam.json', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Provides a simple,
		 * relevance-based search interface to public user accounts on Twitter. Try querying by topical
		 * interest, full name, company name, location, or other criteria. Exact match searches are not
		 * supported.
		 * Only the first 1,000 matching results are available.
		 * Get users/search.json
		 * @return {void} Successful Response
		 */
		Users_search(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/search.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a variety of information
		 * about the user specified by the required user_id or screen_name parameter. The author's most recent
		 * Tweet will be returned inline when possible.
		 * GET users/lookup is used to retrieve a bulk collection of user objects.
		 * Get users/show.json
		 * @return {void} Successful Response
		 */
		Users_show(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/show.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Access to Twitter's
		 * suggested user list. This returns the list of suggested user categories. The category can be used in
		 * GET users/suggestions/:slug to get the users in that category.
		 * Get users/suggestions.json
		 * @return {void} Successful Response
		 */
		Users_suggestions(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/suggestions.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Access the users in
		 * a given category of the Twitter suggested user list. It is recommended that applications cache this
		 * data for no more than one hour.
		 * Get users/suggestions/{slug}.json
		 * @return {void} Successful Response
		 */
		Users_suggestions_slug(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/suggestions/{slug}.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Access the
		 * users in a given category of the Twitter suggested user list and return their most recent status if
		 * they are not a protected user.
		 * Get users/suggestions/{slug}/members.json
		 * @return {void} Successful Response
		 */
		Users_suggestionsslugmembers(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/suggestions/{slug}/members.json', { observe: 'response', responseType: 'text' });
		}
	}

}

