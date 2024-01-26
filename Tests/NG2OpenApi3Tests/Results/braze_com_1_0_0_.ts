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
		 * Campaign Analytics
		 * This endpoint allows you to retrieve a daily series of various stats for a campaign over time. Data returned includes how many messages were sent, opened, clicked, converted, etc., broken down by message channel.
		 * ### Components Used
		 * -[Campaign Identifier](https://www.braze.com/docs/api/identifier_types/)
		 * ### Responses
		 * #### Multi-Channel Response
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "message": (required, string) the status of the export, returns 'success' when completed without errors,
		 * "data" : [
		 * {
		 * "time" : (string) date as ISO 8601 date,
		 * "messages" : {
		 * "ios_push" : [
		 * {
		 * "variation_name": "iOS_Push",
		 * "sent" : (int),
		 * "direct_opens" : (int),
		 * "total_opens" : (int),
		 * "bounces" : (int),
		 * "body_clicks" : (int)
		 * "revenue": 0,
		 * "unique_recipients": 1,
		 * "conversions": 0,
		 * "conversions_by_send_time": 0,
		 * "conversions1": 0,
		 * "conversions1_by_send_time": 0,
		 * "conversions2": 0,
		 * "conversions2_by_send_time": 0,
		 * "conversions3": 0,
		 * "conversions3_by_send_time": 0,
		 * "carousel_slide_[NUM]_[TITLE]_click": (optional, int),
		 * "notif_button_[NUM]_[TITLE]_click": (optional, int)
		 * }
		 * ],
		 * "android_push" : [
		 * {
		 * "sent" : (int),
		 * "direct_opens" : (int),
		 * "total_opens" : (int),
		 * "bounces" : (int),
		 * "body_clicks" : (int)
		 * }
		 * ],
		 * "webhook": [
		 * {
		 * "sent": (int),
		 * "errors": (int)
		 * }
		 * ],
		 * "email" : [
		 * {
		 * "sent": (int),
		 * "opens": (int),
		 * "unique_opens": (int),
		 * "clicks": (int),
		 * "unique_clicks": (int),
		 * "unsubscribes": (int),
		 * "bounces": (int),
		 * "delivered": (int),
		 * "reported_spam": (int)
		 * }
		 * ],
		 * "sms" : [
		 * {
		 * "sent": (int),
		 * "delivered": (int),
		 * "undelivered": (int),
		 * "delivery_failed": (int)
		 * }
		 * ]
		 * },
		 * "conversions_by_send_time": (optional, int),
		 * "conversions1_by_send_time": (optional, int),
		 * "conversions2_by_send_time": (optional, int),
		 * "conversions3_by_send_time": (optional, int),
		 * "conversions": (int),
		 * "conversions1": (optional, int),
		 * "conversions2": (optional, int),
		 * "conversions3": (optional, int),
		 * "unique_recipients": (int),
		 * "revenue": (optional, float)
		 * },
		 * ...
		 * ],
		 * ...
		 * }
		 * ```
		 * #### Multivariate Response
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "data" : [
		 * {
		 * "time" : (string) date as ISO 8601 date,
		 * "conversions" : (int),
		 * "revenue": (float),
		 * "conversions_by_send_time": (int),
		 * "messages" : {
		 * "trigger_in_app_message": [{
		 * "variation_name": (optional, string),
		 * "impressions": (int),
		 * "clicks": (int),
		 * "first_button_clicks": (int),
		 * "second_button_clicks": (int),
		 * "revenue": (optional, float),,
		 * "unique_recipients": (int),
		 * "conversions": (optional, int),
		 * "conversions_by_send_time": (optional, int),
		 * "conversions1": (optional, int),
		 * "conversions1_by_send_time": (optional, int),
		 * "conversions2": (optional, int),
		 * "conversions2_by_send_time": (optional, int),
		 * "conversions3": (optional, int),
		 * "conversions3_by_send_time": (optional, int)
		 * }, {
		 * "variation_name": (optional, string),
		 * "impressions": (int),
		 * "clicks": (int),
		 * "first_button_clicks": (int),
		 * "second_button_clicks": (int),
		 * "revenue": (optional, float),,
		 * "unique_recipients": (int),
		 * "conversions": (optional, int),
		 * "conversions_by_send_time": (optional, int),
		 * "conversions1": (optional, int),
		 * "conversions1_by_send_time": (optional, int),
		 * "conversions2": (optional, int),
		 * "conversions2_by_send_time": (optional, int),
		 * "conversions3": (optional, int).
		 * "conversions3_by_send_time": (optional, int)
		 * }, {
		 * "variation_name": (optional, string),
		 * "revenue": (optional, float),,
		 * "unique_recipients": (int),
		 * "conversions": (optional, int),
		 * "conversions_by_send_time": (optional, int),
		 * "conversions1": (optional, int),
		 * "conversions1_by_send_time": (optional, int),
		 * "conversions2": (optional, int),
		 * "conversions2_by_send_time": (optional, int),
		 * "conversions3": (optional, int),
		 * "conversions3_by_send_time": (optional, int),
		 * "enrolled": (optional, int)
		 * }]
		 * },
		 * "conversions_by_send_time": (optional, int),
		 * "conversions1_by_send_time": (optional, int),
		 * "conversions2_by_send_time": (optional, int),
		 * "conversions3_by_send_time": (optional, int),
		 * "conversions": (optional, int,
		 * "conversions1": (optional, int),
		 * "conversions2": (optional, int),
		 * "conversions3": (optional, int),
		 * "unique_recipients": (int),
		 * "revenue": (optional, float)
		 * }],
		 * ...
		 * }
		 * ```
		 * Possible message types are `email`, `in_app_message`, `webhook`, `android_push`, `apple_push`, `kindle_push`, `web_push`, `windows_phone8_push`, and `windows_universal_push`. All push message types will have the same statistics shown for `android_push` above.
		 * Get campaigns/data_series
		 * @param {string} campaign_id (Required) String
		 * Campaign API identifier
		 * @param {string} length (Required) Integer
		 * Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive
		 * @param {string} ending_at (Optional) DateTime (ISO 8601 string)
		 * Date on which the data series should end - defaults to time of the request
		 * @return {void} 
		 */
		CampaignAnalytics(campaign_id: string | null | undefined, length: string | null | undefined, ending_at: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'campaigns/data_series?campaign_id=' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '&length=' + (length == null ? '' : encodeURIComponent(length)) + '&ending_at=' + (ending_at == null ? '' : encodeURIComponent(ending_at)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Campaign Details
		 * This endpoint allows you to retrieve relevant information on a specified campaign, which can be identified by the `campaign_id`.
		 * > The campaign_id for API campaigns can be found on the Developer Console page and the campaign details page within your dashboard or you can use the Campaign List Endpoint.
		 * ### Components Used
		 * - [Campaign Identifier](https://www.braze.com/docs/api/identifier_types/)
		 * ### Campaign Details Endpoint API Response
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "message": (required, string) the status of the export, returns 'success' when completed without errors,
		 * "created_at" : (string) date created as ISO 8601 date,
		 * "updated_at" : (string) date last updated as ISO 8601 date,
		 * "archived": (boolean) whether this Campaign is archived,
		 * "draft": (boolean) whether this Campaign is a draft,
		 * "name" : (string) campaign name,
		 * "description" : (string) campaign description,
		 * "schedule_type" : (string) type of scheduling action,
		 * "channels" : (array) list of channels to send via,
		 * "first_sent" : (string) date and hour of first sent as ISO 8601 date,
		 * "last_sent" : (string) date and hour of last sent as ISO 8601 date,
		 * "tags" : (array) tag names associated with the campaign,
		 * "messages": {
		 * "message_variation_id": (string) { // <=This is the actual id
		 * "channel": (string) channel type of the message (as in, "email", "ios_push", "webhook", "content_card", "in-app_message", "sms"),
		 * "name": (string) name of the message in the Dashboard (eg., "Variation 1")
		 * ... channel-specific fields for this message, see below ...
		 * }
		 * },
		 * "conversion_behaviors": (array) conversion event behaviors assigned to the campaign (see below)
		 * }
		 * ```
		 * #### Messages
		 * The `messages` response will contain information about each message. Example message responses for channels are below:
		 * ##### Push Channels
		 * ```json
		 * {
		 * "channel": (string) description of the channel, such as "ios_push" or "android_push"
		 * "alert": (string) alert body text,
		 * "extras": (hash) any key value pairs provided
		 * }
		 * ```
		 * ##### Email Channel
		 * ```json
		 * {
		 * "channel": "email",
		 * "subject": (string) subject,
		 * "body": (string) HTML body,
		 * "from": (string) from address and display name,
		 * "reply_to": (string) reply-to for message, if different than "from" address,
		 * "title": (string) name of the email,
		 * "extras": (hash) any key value pairs provided
		 * }
		 * ```
		 * ##### Content Card Channel
		 * ```json
		 * {
		 * "channel": "content_cards",
		 * "name": (string) name of variant,
		 * "extras": (hash) any key value pairs provided; only present if at least one key-value pair has been set
		 * }
		 * ```
		 * ##### Webhook Channel
		 * ```json
		 * {
		 * "channel": "webhook",
		 * "url": (string) url for webhook,
		 * "body": (string) payload body,
		 * "type": (string) body content type,
		 * "headers": (hash) specified request headers,
		 * "method": (string) HTTP method (e.g., "POST" or "GET"),
		 * }
		 * ```
		 * ##### SMS Channel
		 * ```json
		 * {
		 * "channel": "sms",
		 * "body": (string) payload body,
		 * "from": (string) list of numbers associated with the subscription group,
		 * "subscription_group_id": (string) API id of the subscription group targeted in the SMS message
		 * }
		 * ```
		 * ##### Control Messages
		 * ```json
		 * {
		 * "channel": (string) description of the channel that the control is for,
		 * "type": "control"
		 * }
		 * ```
		 * #### Conversion Behaviors
		 * The `conversion_behaviors` array will contain information about each conversion event behavior set for the campaign. These behaviors are in order as set by the campaign. For example, Conversion Event A will be the first item in the array, Conversion Event B will be second, etc. Example conversion event behavior responses for are below:
		 * ##### Clicks Email
		 * ```json
		 * {
		 * "type": "Clicks Email",
		 * "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours
		 * }
		 * ```
		 * ##### Opens Email
		 * ```json
		 * {
		 * "type": "Opens Email",
		 * "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours
		 * }
		 * ```
		 * ##### Makes Purchase (any purchase)
		 * ```json
		 * {
		 * "type": "Makes Any Purchase",
		 * "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours
		 * }
		 * ```
		 * ##### Makes Purchase (specific product)
		 * ```json
		 * {
		 * "type": "Makes Specific Purchase",
		 * "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,
		 * "product": (string) name of the product, i.e. - "Feline Body Armor"
		 * }
		 * ```
		 * ##### Performs Custom Event
		 * ```json
		 * {
		 * "type": "Performs Custom Event",
		 * "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,
		 * "custom_event_name": (string) name of the event, i.e. - "Used Feline Body Armor"
		 * }
		 * ```
		 * ##### Upgrades App
		 * ```json
		 * {
		 * "type": "Upgrades App",
		 * "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,
		 * "app_ids": (array|null) array of app ids, i.e. - ["12345", "67890"], or `null` if "Track sessions for any app" is selected in the UI
		 * }
		 * ```
		 * ##### Uses App
		 * ```json
		 * {
		 * "type": "Starts Session",
		 * "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,
		 * "app_ids": (array|null) array of app ids, i.e. - ["12345", "67890"], or `null` if "Track sessions for any app" is selected in the UI
		 * }
		 * ```
		 * Get campaigns/details
		 * @param {string} campaign_id (Required) String
		 * Campaign API identifier
		 * @return {void} 
		 */
		CampaignDetails(campaign_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'campaigns/details?campaign_id=' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Campaign List
		 * This endpoint allows you to export a list of campaigns, each of which will include its name, Campaign API Identifier, whether it is an API Campaign, and Tags associated with the campaign. The campaigns are returned in groups of 100 sorted by time of creation (oldest to newest by default).
		 * ## Campaign List Endpoint API Response
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "message": (required, string) the status of the export, returns 'success' when completed without errors,
		 * "campaigns" : [
		 * {
		 * "id" : (string) Campaign API Identifier,
		 * "last_edited": (ISO 8601 string) the last edited time for the message
		 * "name" : (string) campaign name,
		 * "is_api_campaign" : (boolean) whether the campaign is an API Campaign,
		 * "tags" : (array) tag names associated with the campaign
		 * },
		 * ...
		 * ]
		 * }
		 * ```
		 * Get campaigns/list
		 * @param {string} page (Optional) Integer
		 * The page of campaigns to return, defaults to 0 (returns the first set of up to 100)
		 * @param {string} include_archived (Optional) Boolean
		 * Whether or not to include archived campaigns, defaults to false
		 * @param {string} sort_direction (Optional) String
		 * Pass in the value `desc` to sort by creation time from newest to oldest. Pass in `asc` to sort from oldest to newest. If sort_direction is not included, the default order is oldest to newest.
		 * @param {string} last_edit_time_gt (Optional) DateTime (ISO 8601 string)
		 * Filters the results and only returns campaigns that were edited greater than the time provided till now. 
		 * @return {void} 
		 */
		CampaignList(page: string | null | undefined, include_archived: string | null | undefined, sort_direction: string | null | undefined, last_edit_time_gt: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'campaigns/list?page=' + (page == null ? '' : encodeURIComponent(page)) + '&include_archived=' + (include_archived == null ? '' : encodeURIComponent(include_archived)) + '&sort_direction=' + (sort_direction == null ? '' : encodeURIComponent(sort_direction)) + '&last_edit_time_gt=' + (last_edit_time_gt == null ? '' : encodeURIComponent(last_edit_time_gt)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Canvas Data Series Analytics
		 * This endpoint allows you to export time series data for a Canvas.
		 * ### Components Used
		 * - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)
		 * ## Response
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "data": {
		 * "name": (string) Canvas name,
		 * "stats": [
		 * {
		 * "time": (string) date as ISO 8601 date,
		 * "total_stats": {
		 * "revenue": (float),
		 * "conversions": (int),
		 * "conversions_by_entry_time": (int),
		 * "entries": (int)
		 * },
		 * "variant_stats": (optional) {
		 * "00000000-0000-0000-0000-0000000000000": (API identifier for variant) {
		 * "name": (string) name of variant,
		 * "revenue": (int),
		 * "conversions": (int),
		 * "conversions_by_entry_time": (int),
		 * "entries": (int)
		 * },
		 * ... (more variants)
		 * },
		 * "step_stats": (optional) {
		 * "00000000-0000-0000-0000-0000000000000": (API identifier for step) {
		 * "name": (string) name of step,
		 * "revenue": (float),
		 * "conversions": (int),
		 * "conversions_by_entry_time": (int),
		 * "messages": {
		 * "email": [
		 * {
		 * "sent": (int),
		 * "opens": (int),
		 * "unique_opens": (int),
		 * "clicks": (int),
		 * ... (more stats)
		 * }
		 * ],
		 * ... (more channels)
		 * }
		 * },
		 * ... (more steps)
		 * }
		 * },
		 * ... (more stats by time)
		 * ]
		 * },
		 * "message": (required, string) the status of the export, returns 'success' when completed without errors
		 * }
		 * ```
		 * Get canvas/data_series
		 * @param {string} canvas_id (Required) String
		 * Canvas API Identifier
		 * @param {string} ending_at (Required) DateTime (ISO 8601 string)
		 * Date on which the data export should end - defaults to time of the request
		 * @param {string} starting_at (Optional) DateTime (ISO 8601 string) 
		 * Date on which the data export should begin (either length or starting_at are required)
		 * @param {string} length (Optional) DateTime (ISO 8601 string)
		 * Max number of days before ending_at to include in the returned series - must be between 1 and 14 inclusive (either length or starting_at required)
		 * @param {string} include_variant_breakdown (Optional) Boolean
		 * Whether or not to include variant stats (defaults to false)
		 * @param {string} include_step_breakdown (Optional) Boolean
		 * Whether or not to include step stats (defaults to false)
		 * @param {string} include_deleted_step_data (Optional) Boolean
		 * Whether or not to include step stats for deleted steps (defaults to false)
		 * @return {void} 
		 */
		CanvasDataSeriesAnalytics(canvas_id: string | null | undefined, ending_at: string | null | undefined, starting_at: string | null | undefined, length: string | null | undefined, include_variant_breakdown: string | null | undefined, include_step_breakdown: string | null | undefined, include_deleted_step_data: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'canvas/data_series?canvas_id=' + (canvas_id == null ? '' : encodeURIComponent(canvas_id)) + '&ending_at=' + (ending_at == null ? '' : encodeURIComponent(ending_at)) + '&starting_at=' + (starting_at == null ? '' : encodeURIComponent(starting_at)) + '&length=' + (length == null ? '' : encodeURIComponent(length)) + '&include_variant_breakdown=' + (include_variant_breakdown == null ? '' : encodeURIComponent(include_variant_breakdown)) + '&include_step_breakdown=' + (include_step_breakdown == null ? '' : encodeURIComponent(include_step_breakdown)) + '&include_deleted_step_data=' + (include_deleted_step_data == null ? '' : encodeURIComponent(include_deleted_step_data)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Canvas Data Analytics Summary
		 * This endpoint allows you to export rollups of time series data for a Canvas, providing a concise summary of a Canvas' results.
		 * ### Components Used
		 * - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)
		 * ## Response
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "data": {
		 * "name": (string) Canvas name,
		 * "total_stats": {
		 * "revenue": (float),
		 * "conversions": (int),
		 * "conversions_by_entry_time": (int),
		 * "entries": (int)
		 * },
		 * "variant_stats": (optional) {
		 * "00000000-0000-0000-0000-0000000000000": (API identifier for variant) {
		 * "name": (string) name of variant,
		 * "revenue": (float),
		 * "conversions": (int),
		 * "entries": (int)
		 * },
		 * ... (more variants)
		 * },
		 * "step_stats": (optional) {
		 * "00000000-0000-0000-0000-0000000000000": (API identifier for step) {
		 * "name": (string) name of step,
		 * "revenue": (float),
		 * "conversions": (int),
		 * "conversions_by_entry_time": (int),
		 * "messages": {
		 * "android_push": (name of channel) [
		 * {
		 * "sent": (int),
		 * "opens": (int),
		 * "influenced_opens": (int),
		 * "bounces": (int)
		 * ... (more stats for channel)
		 * }
		 * ],
		 * ... (more channels)
		 * }
		 * },
		 * ... (more steps)
		 * }
		 * },
		 * "message": (required, string) the status of the export, returns 'success' when completed without errors
		 * }
		 * ```
		 * Get canvas/data_summary
		 * @param {string} canvas_id (Required) String 
		 * Canvas API identifier
		 * @param {string} ending_at (Required) DateTime (ISO 8601 string)
		 * Date on which the data export should end - defaults to time of the request
		 * @param {string} starting_at (Optional) DateTime (ISO 8601 string)
		 * Date on which the data export should begin (either length or starting_at required)
		 * @param {string} length (Optional) Integer
		 * Max number of days before ending_at to include in the returned series - must be between 1 and 14 inclusive (either length or starting_at required)
		 * @param {string} include_variant_breakdown (Optional) Boolean
		 * Whether or not to include variant stats (defaults to false)
		 * @param {string} include_step_breakdown (Optional) Boolean
		 * Whether or not to include step stats (defaults to false)
		 * @param {string} include_deleted_step_data (Optional) Boolean
		 * Whether or not to include step stats for deleted steps (defaults to false)
		 * @return {void} 
		 */
		CanvasDataAnalyticsSummary(canvas_id: string | null | undefined, ending_at: string | null | undefined, starting_at: string | null | undefined, length: string | null | undefined, include_variant_breakdown: string | null | undefined, include_step_breakdown: string | null | undefined, include_deleted_step_data: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'canvas/data_summary?canvas_id=' + (canvas_id == null ? '' : encodeURIComponent(canvas_id)) + '&ending_at=' + (ending_at == null ? '' : encodeURIComponent(ending_at)) + '&starting_at=' + (starting_at == null ? '' : encodeURIComponent(starting_at)) + '&length=' + (length == null ? '' : encodeURIComponent(length)) + '&include_variant_breakdown=' + (include_variant_breakdown == null ? '' : encodeURIComponent(include_variant_breakdown)) + '&include_step_breakdown=' + (include_step_breakdown == null ? '' : encodeURIComponent(include_step_breakdown)) + '&include_deleted_step_data=' + (include_deleted_step_data == null ? '' : encodeURIComponent(include_deleted_step_data)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Canvas Details
		 * This endpoint allows you to export metadata about a Canvas, such as its name, when it was created, its current status, and more.
		 * ### Components Used
		 * - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)
		 * ## Response
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "created_at": (string) date created as ISO 8601 date,
		 * "updated_at": (string) date updated as ISO 8601 date,
		 * "name": (string) Canvas name,
		 * "description": (string) Canvas description,
		 * "archived": (boolean) whether this Canvas is archived,
		 * "draft": (boolean) whether this Canvas is a draft,
		 * "schedule_type": (string) type of scheduling action,
		 * "first_entry": (string) date of first entry as ISO 8601 date,
		 * "last_entry": (string) date of last entry as ISO 8601 date,
		 * "channels": (array of strings) step channels used with Canvas,
		 * "variants": [
		 * {
		 * "name": (string) name of variant,
		 * "id": (string) API identifier of the variant,
		 * "first_step_ids": (array of strings) API identifiers for first steps in variant,
		 * "first_step_id": (string) API identifier of first step in variant (deprecated in November 2017, only included if the variant has only one first step)
		 * },
		 * ... (more variations)
		 * ],
		 * "tags": (array of strings) tag names associated with the Canvas,
		 * "steps": [
		 * {
		 * "name": (string) name of step,
		 * "id": (string) API identifier of the step,
		 * "next_step_ids": (array of strings) API identifiers of steps following step,
		 * "channels": (array of strings) channels used in step,
		 * "messages": {
		 * "message_variation_id": (string) {  // <=This is the actual id
		 * "channel": (string) channel type of the message (eg., "email"),
		 * ... channel-specific fields for this message, see Campaign Details Endpoint API Response for example message responses ...
		 * }
		 * }
		 * },
		 * ... (more steps)
		 * ],
		 * "message": (required, string) the status of the export, returns 'success' when completed without errors
		 * }
		 * ```
		 * Get canvas/details
		 * @param {string} canvas_id (Required) String
		 * Canvas API Identifier 
		 * @return {void} 
		 */
		CanvasDetails(canvas_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'canvas/details?canvas_id=' + (canvas_id == null ? '' : encodeURIComponent(canvas_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Canvas List
		 * This endpoint allows you to export a list of Canvases, including the name, Canvas API Identifier and associated Tags. The Canvases are returned in groups of 100 sorted by time of creation (oldest to newest by default).
		 * > Archived Canvases will not be included in the API response unless the `include_archived` field is specified. Canvases that are stopped but not archived, however, will be returned by default.
		 * ## Response
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "canvases" : [
		 * {
		 * "id" : (string) Canvas API Identifier,
		 * "last_edited": (ISO 8601 string) the last edited time for the message,
		 * "name" : (string) Canvas name,
		 * "tags" : (array) tag names associated with the Canvas,
		 * },
		 * ... (more Canvases)
		 * ],
		 * "message": (required, string) the status of the export, returns 'success' when completed without errors
		 * }
		 * ```
		 * Get canvas/list
		 * @param {string} page (Optional) Integer
		 * The page of Canvases to return, defaults to `0` (returns the first set of up to 100)
		 * @param {string} include_archived (Optional) Boolean
		 * Whether or not to include archived Canvases, defaults to `false`.
		 * @param {string} sort_direction (Optional) String
		 * Pass in the value `desc` to sort by creation time from newest to oldest. Pass in `asc` to sort from oldest to newest. If sort_direction is not included, the default order is oldest to newest.
		 * @param {string} last_edit_time_gt (Optional) DateTime (ISO 8601 string)
		 * Filters the results and only returns Canvases that were edited greater than the time provided till now.
		 * @return {void} 
		 */
		CanvasList(page: string | null | undefined, include_archived: string | null | undefined, sort_direction: string | null | undefined, last_edit_time_gt: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'canvas/list?page=' + (page == null ? '' : encodeURIComponent(page)) + '&include_archived=' + (include_archived == null ? '' : encodeURIComponent(include_archived)) + '&sort_direction=' + (sort_direction == null ? '' : encodeURIComponent(sort_direction)) + '&last_edit_time_gt=' + (last_edit_time_gt == null ? '' : encodeURIComponent(last_edit_time_gt)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Schedule API Triggered Canvases
		 * Use this endpoint to trigger API Triggered Canvases, which are created on the Dashboard and initiated via the API. You can pass in `canvas_entry_properties` that will be templated into the messages sent by the first steps of the Canvas.
		 * This endpoint allows you to schedule Canvas messages (up to 90 days in advance) via API Triggered delivery, allowing you to decide what action should trigger the message to be sent. Please note that to send messages with this endpoint, you must have a Canvas ID, created when you build a Canvas.
		 * ### Request Parameters
		 * | Parameter | Required | Data Type | Description |
		 * | --------- | ---------| --------- | ----------- |
		 * |`canvas_id`|Required|String| See canvas identifier|
		 * |`send_id` | Optional | String | See send identifier |
		 * |`recipients` | Optional | Array of recipient objects | See recipients object |
		 * |`audience` | Optional | Connected audience object | See connected audience |
		 * |`broadcast` | Optional | Boolean | See broadcast -- defaults to false on 8/31/17, must be set to true if "recipients" object is omitted |
		 * | `trigger_properties` | Optional | Object | Personalization key value pairs for all users in this send; see trigger properties |
		 * | `schedule` | Required | Schedule object | See schedule object |
		 * ## Request Components
		 * - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)
		 * - [Recipients](https://www.braze.com/docs/api/objects_filters/recipient_object/)
		 * - [Connected Audience](https://www.braze.com/docs/api/objects_filters/connected_audience/)
		 * - [Broadcast](https://www.braze.com/docs/api/parameters/#broadcast)
		 * - [Trigger Properties](https://www.braze.com/docs/api/objects_filters/trigger_properties_object/)
		 * - [Schedule Object](https://www.braze.com/docs/api/objects_filters/schedule_object/)
		 * Post canvas/trigger/schedule/create
		 * @return {void} 
		 */
		ScheduleApiTriggeredCanvases(requestBody: ScheduleApiTriggeredCanvasesPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'canvas/trigger/schedule/create', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * See Content Block Information
		 * This endpoint will call information for an existing Content Block.
		 * ### Successful Response Properties
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR_REST_API_KEY
		 * {
		 * "content_block_id": "string",
		 * "name": "string",
		 * "content": "string",
		 * "description": "string",
		 * "content_type": "html or text",
		 * "tags":  "array of strings",
		 * "created_at": "time-in-iso",
		 * "last_edited": "time-in-iso",
		 * "inclusion_count" : "integer",
		 * "message": "success"
		 * }
		 * ```
		 * ### Possible Errors
		 * - `Content Block ID cannot be blank.` - A Content Block has not been listed or is not encapsulated in quotes.
		 * - `Content Block ID is invalid for this App Group.` - This Content Block does not exist or is in a different company account or app group.
		 * - `Content Block has been deleted - content not available.` - This Content Block, though it may have existed earlier, has been deleted.
		 * - `Include Inclusion Data - error` - One of true or false is not provided.
		 * Get content_blocks/info
		 * @param {string} content_block_id (Required) String
		 * The Content Block ID. This can be found by either listing Content Block information or going to the Developer Console, then API Settings, then scrolling to the bottom and searching for your Content Block API Identifier.
		 * @param {string} include_inclusion_data (Optional) Boolean
		 * When set to ‘true’, the API returns back the Message Variation API ID of Campaigns and Canvases where this content block is included, to be used in subsequent calls. The results exclude archived or deleted Campaigns or Canvases.
		 * @return {void} 
		 */
		SeeContentBlockInformation(content_block_id: string | null | undefined, include_inclusion_data: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'content_blocks/info?content_block_id=' + (content_block_id == null ? '' : encodeURIComponent(content_block_id)) + '&include_inclusion_data=' + (include_inclusion_data == null ? '' : encodeURIComponent(include_inclusion_data)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List Available Content Blocks
		 * This endpoint will list existing Content Block information.
		 * ### Successful Response Properties
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR_REST_API_KEY
		 * {
		 * "count": "integer",
		 * "content_blocks": [
		 * {
		 * "content_block_id": "string",
		 * "name": "string",
		 * "content_type": "html or text",
		 * "liquid_tag": "string",
		 * "inclusion_count" : "integer",
		 * "created_at": "time-in-iso",
		 * "last_edited": "time-in-iso",
		 * "tags" : "array of strings"
		 * }
		 * ]
		 * }
		 * ```
		 * ### Possible Errors
		 * - `Modified after time is invalid.`
		 * The date you have provided is not a valid or parsable date. Please reformat this value as a string in ISO 8601 format (`yyyy-mm-ddThh:mm:ss.ffffff`).
		 * - `Modified before time is invalid.`
		 * The date you have provided is not a valid or parsable date. Please reformat this value as a string in ISO 8601 format (`yyyy-mm-ddThh:mm:ss.ffffff`).
		 * - `Modified after time must be earlier than or the same as modified before time.`
		 * - `Content Block number limit is invalid.`
		 * The `limit` parameter must be an integer (positive number) greater than 0.
		 * - `Content Block number limit must be greater than 0.`
		 * The `limit` parameter must be an integer (positive number) greater than 0.
		 * - `Content Block number limit exceeds maximum of 1000.`
		 * The `limit` parameter must be an integer (positive number) greater than 0.
		 * - `Offset is invalid.`
		 * The `offset` parameter must be an integer (positive number) greater than 0.
		 * - `Offset must be greater than 0.`
		 * The `offset` parameter must be an integer (positive number) greater than 0.
		 * Get content_blocks/list
		 * @param {string} modified_after (Optional) String in ISO 8601
		 * Retrieve only content blocks updated at or after the given time.
		 * @param {string} modified_before (Optional) String in ISO 8601
		 * Retrieve only content blocks updated at or before the given time.
		 * @param {string} limit (Optional) Positive Number
		 * Maximum number of content blocks to retrieve, default to 100 if not provided, maximum acceptable value is 1000.
		 * @param {string} offset (Optional) Positive Number
		 * Number of content blocks to skip before returning rest of the templates that fit the search criteria.
		 * @return {void} 
		 */
		ListAvailableContentBlocks(modified_after: string | null | undefined, modified_before: string | null | undefined, limit: string | null | undefined, offset: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'content_blocks/list?modified_after=' + (modified_after == null ? '' : encodeURIComponent(modified_after)) + '&modified_before=' + (modified_before == null ? '' : encodeURIComponent(modified_before)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Query Hard Bounced Emails
		 * This endpoint allows you to pull a list of email addresses that have “hard bounced” your email messages within a certain time frame.
		 * > You must provide an `end_date`, as well as either an `email` or a `start_date`.<br><br>If your date range has more than `limit` number of hard bounces, you will need to make multiple API calls, each time increasing the `offset` until a call returns either fewer than `limit` or zero results.
		 * ## Response
		 * Entries are listed in descending order.
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "emails": [
		 * {
		 * "email": "example1@braze.com",
		 * "hard_bounced_at": "2016-08-25 15:24:32 +0000"
		 * },
		 * {
		 * "email": "example2@braze.com",
		 * "hard_bounced_at": "2016-08-24 17:41:58 +0000"
		 * },
		 * {
		 * "email": "example3@braze.com",
		 * "hard_bounced_at": "2016-08-24 12:01:13 +0000"
		 * }
		 * ],
		 * "message": "success"
		 * }
		 * ```
		 * Get email/hard_bounces
		 * @param {string} start_date (Optional*) String in YYYY-MM-DD format 
		 * Start date of the range to retrieve hard bounces, must be earlier than `end_date`. This is treated as midnight in UTC time by the API.
		 * *You must provide either an `email` or a `start_date`, and an `end_date`.
		 * @param {string} end_date (Optional*) String in YYYY-MM-DD format
		 * String in YYYY-MM-DD format. End date of the range to retrieve hard bounces. This is treated as midnight in UTC time by the API.
		 * *You must provide either an `email` or a `start_date`, and an `end_date`.
		 * @param {string} limit (Optional) Integer
		 * Optional field to limit the number of results returned. Defaults to 100, maximum is 500.
		 * @param {string} offset (Optional) Integer
		 * Optional beginning point in the list to retrieve from.
		 * @param {string} email (Optional*) String
		 * If provided, we will return whether or not the user has hard bounced.
		 * *You must provide either an `email` or a `start_date`, and an `end_date`.
		 * @return {void} 
		 */
		QueryHardBouncedEmails(start_date: string | null | undefined, end_date: string | null | undefined, limit: string | null | undefined, offset: string | null | undefined, email: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'email/hard_bounces?start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&email=' + (email == null ? '' : encodeURIComponent(email)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Query List of Unsubscribed Email Addresses
		 * Use the /email/unsubscribes endpoint to return emails that have unsubscribed during the time period from `start_date` to `end_date`. You can use this endpoint to set up a bi-directional sync between Braze and other email systems or your own database.
		 * > You must provide either an email or a start_date and an end_date. <br><br>If your date range has more than `limit` number of unsubscribes, you will need to make multiple API calls, each time increasing the `offset` until a call returns either fewer than `limit` or zero results.
		 * Get email/unsubscribes
		 * @param {string} start_date (Optional*) String in YYYY-MM-DD format
		 * Start date of the range to retrieve unsubscribes, must be earlier than end_date. This is treated as midnight in UTC time by the API.
		 * @param {string} end_date (Optional*)  String in YYYY-MM-DD format
		 * End date of the range to retrieve unsubscribes. This is treated as midnight in UTC time by the API.
		 * @param {string} limit (Optional) Integer
		 * Optional field to limit the number of results returned. Limit must be greater than 1. Defaults to 100, maximum is 500.
		 * @param {string} offset (Optional) Integer 
		 * Optional beginning point in the list to retrieve from
		 * @param {string} sort_direction (Optional) String
		 * Pass in the value `asc` to sort unsubscribes from oldest to newest. Pass in `desc` to sort from newest to oldest. If sort_direction is not included, the default order is newest to oldest.
		 * @param {string} email (Optional*) String
		 * If provided, we will return whether or not the user has unsubscribed
		 * @return {void} 
		 */
		QueryListOfUnsubscribedEmailAddresses(start_date: string | null | undefined, end_date: string | null | undefined, limit: string | null | undefined, offset: string | null | undefined, sort_direction: string | null | undefined, email: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'email/unsubscribes?start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&sort_direction=' + (sort_direction == null ? '' : encodeURIComponent(sort_direction)) + '&email=' + (email == null ? '' : encodeURIComponent(email)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Custom Events Analytics
		 * This endpoint allows you to retrieve a series of the number of occurrences of a custom event in your app over a designated time period.
		 * ### Components Used
		 * -[Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
		 * ## Response
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "message": (required, string) the status of the export, returns 'success' when completed without errors,
		 * "data" : [
		 * {
		 * "time" : (string) point in time - as ISO 8601 extended when unit is "hour" and as ISO 8601 date when unit is "day",
		 * "count" : (int)
		 * },
		 * ...
		 * ]
		 * }
		 * ```
		 * ### Fatal Error Response Codes
		 * The following status codes and associated error messages will be returned if your request encounters a fatal error. Any of these error codes indicate that no data will be processed.
		 * | Error Code       | Reason / Cause                                                   |
		 * | ---------------- | ---------------------------------------------------------------- |
		 * | 400 Bad Request  | Bad Syntax                                                       |
		 * | 401 Unauthorized | Unknown or missing REST API Key                                  |
		 * | 429 Rate Limited | Over rate limit                                                  |
		 * | 5XX              | Internal server error, you should retry with exponential backoff |
		 * Get events/data_series
		 * @param {string} _event (Required) String
		 * The name of the custom event for which to return analytics 
		 * @param {string} length (Required) Integer
		 * Max number of units (days or hours) before ending_at to include in the returned series - must be between 1 and 100 inclusive
		 * @param {string} unit (Optional) String
		 * Unit of time between data points - can be "day" or "hour" (defaults to "day")
		 * @param {string} ending_at (Optional) DateTime (ISO 8601 string)
		 * Point in time when the data series should end - defaults to time of the request
		 * @param {string} app_id (Optional) String
		 * App API identifier retrieved from the Developer Console to limit analytics to a specific app
		 * @param {string} segment_id (Optional) String
		 * Segment API identifier indicating the analytics enabled segment for which event analytics should be returned
		 * @return {void} 
		 */
		CustomEventsAnalytics(_event: string | null | undefined, length: string | null | undefined, unit: string | null | undefined, ending_at: string | null | undefined, app_id: string | null | undefined, segment_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'events/data_series?_event=' + (_event == null ? '' : encodeURIComponent(_event)) + '&length=' + (length == null ? '' : encodeURIComponent(length)) + '&unit=' + (unit == null ? '' : encodeURIComponent(unit)) + '&ending_at=' + (ending_at == null ? '' : encodeURIComponent(ending_at)) + '&app_id=' + (app_id == null ? '' : encodeURIComponent(app_id)) + '&segment_id=' + (segment_id == null ? '' : encodeURIComponent(segment_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Custom Events List
		 * This endpoint allows you to export a list of custom events that have been recorded for your app. The event names are returned in groups of 250, sorted alphabetically.
		 * ## Response
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "message": (required, string) the status of the export, returns 'success' when completed without errors,
		 * "events" : [
		 * "Event A",
		 * "Event B",
		 * "Event C",
		 * ...
		 * ]
		 * }
		 * ```
		 * ### Fatal Error Response Codes
		 * The following status codes and associated error messages will be returned if your request encounters a fatal error. Any of these error codes indicate that no data will be processed.
		 * | Error Code       | Reason / Cause                                                   |
		 * | ---------------- | ---------------------------------------------------------------- |
		 * | 400 Bad Request  | Bad Syntax                                                       |
		 * | 401 Unauthorized | Unknown or missing REST API Key                                  |
		 * | 429 Rate Limited | Over rate limit                                                  |
		 * | 5XX              | Internal server error, you should retry with exponential backoff |
		 * Get events/list
		 * @param {string} page (Optional) Integer
		 * The page of event names to return, defaults to 0 (returns the first set of up to 250)
		 * @return {void} 
		 */
		CustomEventsList(page: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'events/list?page=' + (page == null ? '' : encodeURIComponent(page)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * News Feed Card Analytics
		 * This endpoint allows you to retrieve a daily series of engagement stats for a card over time.
		 * ### Components Used
		 * - [Card ID](https://www.braze.com/docs/api/identifier_types/)
		 * - [News Feed List](https://www.braze.com/docs/api/endpoints/export/news_feed/get_news_feed_cards/)
		 * ## Response
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "message": (required, string) the status of the export, returns 'success' when completed without errors,
		 * "data" : [
		 * {
		 * "time" : (string) point in time - as ISO 8601 extended when unit is "hour" and as ISO 8601 date when unit is "day",
		 * "clicks" : (int) ,
		 * "impressions" : (int),
		 * "unique_clicks" : (int),
		 * "unique_impressions" : (int)
		 * },
		 * ...
		 * ]
		 * }
		 * ```
		 * Get feed/data_series
		 * @param {string} card_id (Required) String
		 * Card API identifier
		 * @param {string} length (Required) Integer
		 * Max number of units (days or hours) before ending_at to include in the returned series - must be between 1 and 100 inclusive
		 * @param {string} unit (Optional) String
		 * Unit of time between data points - can be "day" or "hour" (defaults to "day")
		 * @param {string} ending_at (Optional) DateTime (ISO 8601 string)
		 * Date on which the data series should end - defaults to time of the request
		 * @return {void} 
		 */
		NewsFeedCardAnalytics(card_id: string | null | undefined, length: string | null | undefined, unit: string | null | undefined, ending_at: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'feed/data_series?card_id=' + (card_id == null ? '' : encodeURIComponent(card_id)) + '&length=' + (length == null ? '' : encodeURIComponent(length)) + '&unit=' + (unit == null ? '' : encodeURIComponent(unit)) + '&ending_at=' + (ending_at == null ? '' : encodeURIComponent(ending_at)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * News Feed Cards Details
		 * This endpoint allows you to retrieve relevant information on the card, which can be identified by the `card_id`.
		 * ### Components Used
		 * - [Card ID](https://www.braze.com/docs/api/identifier_types/)
		 * - [News Feed List](https://www.braze.com/docs/api/endpoints/export/news_feed/get_news_feed_cards/)
		 * ## Response
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "message": (required, string) The status of the export, returns 'success' when completed without errors,
		 * "created_at" : (string) Date created as ISO 8601 date,
		 * "updated_at" : (string) Date last updated as ISO 8601 date,
		 * "name" : (string) Card name,
		 * "publish_at" : (string) Date card was published as ISO 8601 date,
		 * "end_at" : (string) Date card will stop displaying for users as ISO 8601 date,
		 * "tags" : (array) Tag names associated with the card,
		 * "title" : (string) Title of the card,
		 * "image_url" : (string) Image URL used by this card,
		 * "extras" : (dictionary) Dictionary containing key-value pair data attached to this card,
		 * "description" : (string) Description text used by this card,
		 * "archived": (boolean) whether this Card is archived,
		 * "draft": (boolean) whether this Card is a draft,
		 * }
		 * ```
		 * Get feed/details
		 * @param {string} card_id (Required) String
		 * Card API identifier 
		 * @return {void} 
		 */
		NewsFeedCardsDetails(card_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'feed/details?card_id=' + (card_id == null ? '' : encodeURIComponent(card_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * News Feed Cards List
		 * This endpoint allows you to export a list of News Feed cards, each of which will include its name and Card API Identifier. The cards are returned in groups of 100 sorted by time of creation (oldest to newest by default).
		 * ## Response
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "message": (required, string) the status of the export, returns 'success' when completed without errors,
		 * "cards" : [
		 * {
		 * "id" : (string) Card API Identifier,
		 * "type" : (string) type of the card - NewsItem (classic cards), CaptionedImage, Banner or DevPick (cross-promotional cards),
		 * "title" : (string) title of the card,
		 * "tags" : (array) tag names associated with the card
		 * },
		 * ...
		 * ]
		 * }
		 * ```
		 * Get feed/list
		 * @param {string} page (Optional) Integer
		 * The page of cards to return, defaults to 0 (returns the first set of up to 100)
		 * @param {string} include_archived (Optional) Boolean
		 * Whether or not to include archived cards, defaults to false
		 * @param {string} sort_direction (Optional) String
		 * Pass in the value `desc` to sort by creation time from newest to oldest. Pass in `asc` to sort from oldest to newest. If sort_direction is not included, the default order is oldest to newest.
		 * @return {void} 
		 */
		NewsFeedCardsList(page: string | null | undefined, include_archived: string | null | undefined, sort_direction: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'feed/list?page=' + (page == null ? '' : encodeURIComponent(page)) + '&include_archived=' + (include_archived == null ? '' : encodeURIComponent(include_archived)) + '&sort_direction=' + (sort_direction == null ? '' : encodeURIComponent(sort_direction)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Daily Active Users by Date
		 * This endpoint allows you to retrieve a daily series of the total number of unique active users on each date.
		 * ## Response
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "message": (required, string) the status of the export, returns 'success' when completed without errors,
		 * "data" : [
		 * {
		 * "time" : (string) date as ISO 8601 date,
		 * "dau" : (int)
		 * },
		 * ...
		 * ]
		 * }
		 * ```
		 * Get kpi/dau/data_series
		 * @param {string} length (Required) Integer
		 * Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive
		 * @param {string} ending_at (Optional) DateTime (ISO 8601 string)
		 * Point in time when the data series should end - defaults to time of the request
		 * @param {string} app_id (Optional) String
		 * App API identifier; if excluded, results for all apps in app group will be returned
		 * @return {void} 
		 */
		DailyActiveUsersByDate(length: string | null | undefined, ending_at: string | null | undefined, app_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'kpi/dau/data_series?length=' + (length == null ? '' : encodeURIComponent(length)) + '&ending_at=' + (ending_at == null ? '' : encodeURIComponent(ending_at)) + '&app_id=' + (app_id == null ? '' : encodeURIComponent(app_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Monthly Active Users for Last 30 Days
		 * This endpoint allows you to retrieve a daily series of the total number of unique active users over a 30-day rolling window.
		 * ## Response
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "message": (required, string) the status of the export, returns 'success' when completed without errors,
		 * "data" : [
		 * {
		 * "time" : (string) date as ISO 8601 date,
		 * "mau" : (int)
		 * },
		 * ...
		 * ]
		 * }
		 * ```
		 * Get kpi/mau/data_series
		 * @param {string} length (Required) Integer
		 * Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive
		 * @param {string} ending_at (Optional) DateTime (ISO 8601 string)
		 * Point in time when the data series should end - defaults to time of the request
		 * @param {string} app_id (Optional) String
		 * App API identifier; if excluded, results for all apps in app group will be returned
		 * @return {void} 
		 */
		MonthlyActiveUsersForLast30Days(length: string | null | undefined, ending_at: string | null | undefined, app_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'kpi/mau/data_series?length=' + (length == null ? '' : encodeURIComponent(length)) + '&ending_at=' + (ending_at == null ? '' : encodeURIComponent(ending_at)) + '&app_id=' + (app_id == null ? '' : encodeURIComponent(app_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Daily New Users by Date
		 * This endpoint allows you to retrieve a daily series of the total number of new users on each date.
		 * ## Response
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "message": (required, string) the status of the export, returns 'success' when completed without errors,
		 * "data" : [
		 * {
		 * "time" : (string) date as ISO 8601 date,
		 * "new_users" : (int)
		 * },
		 * ...
		 * ]
		 * }
		 * ```
		 * Get kpi/new_users/data_series
		 * @param {string} length (Required) Integer
		 * Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive
		 * @param {string} ending_at (Optional) DateTime (ISO 8601 string)
		 * Point in time when the data series should end - defaults to time of the request
		 * @param {string} app_id (Optional) String
		 * App API identifier; if excluded, results for all apps in app group will be returned
		 * @return {void} 
		 */
		DailyNewUsersByDate(length: string | null | undefined, ending_at: string | null | undefined, app_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'kpi/new_users/data_series?length=' + (length == null ? '' : encodeURIComponent(length)) + '&ending_at=' + (ending_at == null ? '' : encodeURIComponent(ending_at)) + '&app_id=' + (app_id == null ? '' : encodeURIComponent(app_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * KPIs for Daily App Uninstalls by Date
		 * This endpoint allows you to retrieve a daily series of the total number of uninstalls on each date.
		 * ## Response
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "message": (required, string) the status of the export, returns 'success' when completed without errors,
		 * "data" : [
		 * {
		 * "time" : (string) date as ISO 8601 date,
		 * "uninstalls" : (int)
		 * },
		 * ...
		 * ]
		 * }
		 * ```
		 * Get kpi/uninstalls/data_series
		 * @param {string} length (Required) Integer
		 * Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive
		 * @param {string} ending_at (Optional) DateTime (ISO 8601 string)
		 * Point in time when the data series should end - defaults to time of the request
		 * @param {string} app_id (Optional) String
		 * App API identifier; if excluded, results for all apps in app group will be returned
		 * @return {void} 
		 */
		KpIsForDailyAppUninstallsByDate(length: string | null | undefined, ending_at: string | null | undefined, app_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'kpi/uninstalls/data_series?length=' + (length == null ? '' : encodeURIComponent(length)) + '&ending_at=' + (ending_at == null ? '' : encodeURIComponent(ending_at)) + '&app_id=' + (app_id == null ? '' : encodeURIComponent(app_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Upcoming Scheduled Campaigns and Canvases
		 * You can view a JSON list of upcoming and scheduled Campaigns and Canvases using the following information and parameters. The endpoint will return information about scheduled Campaigns and entry Canvases between now and the designated end_time (ISO 8601 format) specified in the request. Daily, recurring messages will only appear once with their next occurrence. Results returned in this endpoint are only for Campaigns and Canvases created and scheduled in Braze.
		 * ## Response
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "scheduled_broadcasts": [
		 * # Example Canvas
		 * {
		 * "name" => String,
		 * "id" => String,
		 * "type" => "Canvas",
		 * "tags" => [String tag names],
		 * "next_send_time" => "YYYY-MM-DD HH:mm:ss" (may also include time zone if not local/intelligent delivery)
		 * "schedule_type" => one of "local_time_zones", "intelligent_delivery", or the name of your company's time zone
		 * },
		 * # Example Campaign
		 * {
		 * "name" => String,
		 * "id" => String,
		 * "type" => "Campaign",
		 * "tags" => [String tag names],
		 * "next_send_time" => "YYYY-MM-DD HH:mm:ss" (may also include time zone if not local/intelligent delivery)
		 * "schedule_type" => one of "local_time_zones", "intelligent_delivery", or the name of your company's time zone
		 * },
		 * ]
		 * }
		 * ```
		 * Get messages/scheduled_broadcasts
		 * @param {string} end_time (Required) String in ISO 8601 format
		 * End date of the range to retrieve upcoming scheduled Campaigns and Canvases. This is treated as midnight in UTC time by the API.
		 * @return {void} 
		 */
		GetUpcomingScheduledCampaignsAndCanvases(end_time: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'messages/scheduled_broadcasts?end_time=' + (end_time == null ? '' : encodeURIComponent(end_time)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Segment Analytics
		 * This endpoint allows you to retrieve a daily series of the size of a segment over time for a segment.
		 * ### Request Components
		 * - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
		 * ## Response
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "message": (required, string) the status of the export, returns 'success' when completed without errors,
		 * "data" : [
		 * {
		 * "time" : (string) date as ISO 8601 date,
		 * "size" : (int) size of the segment on that date
		 * },
		 * ...
		 * ]
		 * }
		 * ```
		 * Get segments/data_series
		 * @param {string} segment_id (Required) String
		 * Segment API identifier.
		 * @param {string} length (Required) Integer
		 * Max number of days before `ending_at` to include in the returned series - must be between 1 and 100 inclusive.
		 * @param {string} ending_at (Optional) DateTime (ISO 8601 string)
		 * Point in time when the data series should end - defaults to time of the request.
		 * @return {void} 
		 */
		SegmentAnalytics(segment_id: string | null | undefined, length: string | null | undefined, ending_at: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'segments/data_series?segment_id=' + (segment_id == null ? '' : encodeURIComponent(segment_id)) + '&length=' + (length == null ? '' : encodeURIComponent(length)) + '&ending_at=' + (ending_at == null ? '' : encodeURIComponent(ending_at)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Segment Details
		 * This endpoint allows you to retrieve relevant information on the segment, which can be identified by the `segment_id`.
		 * ### Request Components
		 * - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
		 * ## Response
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "message": (required, string) the status of the export, returns 'success' when completed without errors,
		 * "created_at" : (string) date created as ISO 8601 date,
		 * "updated_at" : (string) date last updated as ISO 8601 date,
		 * "name" : (string) segment name,
		 * "description" : (string) human-readable description of filters,
		 * "text_description" : (string) segment description,
		 * "tags" : (array) tag names associated with the segment
		 * }
		 * ```
		 * Get segments/details
		 * @param {string} segment_id (Required) String
		 * Segment API identifier
		 * @return {void} 
		 */
		SegmentDetails(segment_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'segments/details?segment_id=' + (segment_id == null ? '' : encodeURIComponent(segment_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Segment List
		 * This endpoint allows you to export a list of segments, each of which will include its name, Segment API Identifier, and whether it has analytics tracking enabled. The segments are returned in groups of 100 sorted by time of creation (oldest to newest by default). Archived segments are not included.
		 * ### Request Components
		 * - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
		 * ## Response
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "message": (required, string) the status of the export, returns 'success' when completed without errors,
		 * "segments" : [
		 * {
		 * "id" : (string) Segment API Identifier,
		 * "name" : (string) segment name,
		 * "analytics_tracking_enabled" : (boolean) whether the segment has analytics tracking enabled,
		 * "tags" : (array) tag names associated with the segment
		 * },
		 * ...
		 * ]
		 * }
		 * ```
		 * Get segments/list
		 * @param {string} page (Optional) Integer
		 * The page of segments to return, defaults to 0 (returns the first set of up to 100)
		 * @param {string} sort_direction (Optional) String
		 * Pass in the value `desc` to sort by creation time from newest to oldest. Pass in `asc` to sort from oldest to newest. If `sort_direction` is not included, the default order is oldest to newest.
		 * @return {void} 
		 */
		SegmentList(page: string | null | undefined, sort_direction: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'segments/list?page=' + (page == null ? '' : encodeURIComponent(page)) + '&sort_direction=' + (sort_direction == null ? '' : encodeURIComponent(sort_direction)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Send Analytics
		 * This endpoint allows you to retrieve a daily series of various stats for a tracked `send_id`. Braze stores send analytics for 14 days after the send.
		 * Campaign conversions will be attributed towards the most recent send id that a given user has received from the campaign.
		 * > The `send_id` is only generated for API campaign sends targeting segments, connected audiences or broadcasts. When relevant, the `send_id` is included in response for the `messages/send`, `messages/schedule`, `campaign/trigger/send` and `campaign/trigger/schedule` endpoints.
		 * ### Components Used
		 * - [Campaign Identifier](https://www.braze.com/docs/api/identifier_types/)
		 * ### Send Analytics Endpoint API Response
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "variation_name": (string) variation name,
		 * "sent": (int) the number of sends,
		 * "delivered": (int) the number of messages successfully delivered,
		 * "undelivered": (int) the number of undelivered,
		 * "delivery_failed": (int) the number of rejected,
		 * "direct_opens": (int) the number of direct opens,
		 * "total_opens": (int) the number of total opens,
		 * "bounces": (int) the number of bounces,
		 * "body_clicks": (int) the number of body clicks,
		 * "revenue": (float) the number of dollars of revenue (USD),
		 * "unique_recipients": (int) the number of unique recipients,
		 * "conversions": (int) the number of conversions,
		 * "conversions_by_send_time": (int) the number of conversions,
		 * "conversions1": (int, optional) the number of conversions for the second conversion event,
		 * "conversions1_by_send_time": (int, optional) the number of conversions for the second conversion event by send time,
		 * "conversions2": (int, optional) the number of conversions for the third conversion event,
		 * "conversions2_by_send_time": (int, optional) the number of conversions for the third conversion event by send time,
		 * "conversions3": (int, optional) the number of conversions for the fourth conversion event,
		 * "conversions3_by_send_time": (int, optional) the number of conversions for the fourth conversion event by send time
		 * }
		 * ]
		 * },
		 * "conversions_by_send_time": 0,
		 * "conversions1_by_send_time": 0,
		 * "conversions2_by_send_time": 0,
		 * "conversions3_by_send_time": 0,
		 * "conversions": 0,
		 * "conversions1": 0,
		 * "conversions2": 0,
		 * "conversions3": 0,
		 * "unique_recipients": 1,
		 * "revenue": 0
		 * }
		 * ],
		 * "message": "success"
		 * }
		 * ```
		 * Get sends/data_series
		 * @param {string} campaign_id (Required) String
		 * Campaign API identifier.
		 * @param {string} send_id (Required) String
		 * Send API identifier.
		 * @param {string} length (Required) Integer
		 * Maximum number of days before `ending_at` to include in the returned series. Must be between 1 and 100 inclusive.
		 * @param {string} ending_at (Optional) Datetime ISO 8601 string
		 * Date on which the data series should end. Defaults to time of the request.
		 * @return {void} 
		 */
		SendAnalytics(campaign_id: string | null | undefined, send_id: string | null | undefined, length: string | null | undefined, ending_at: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sends/data_series?campaign_id=' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '&send_id=' + (send_id == null ? '' : encodeURIComponent(send_id)) + '&length=' + (length == null ? '' : encodeURIComponent(length)) + '&ending_at=' + (ending_at == null ? '' : encodeURIComponent(ending_at)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * App Sessions by Time
		 * This endpoint allows you to retrieve a series of the number of sessions for your app over a designated time period.
		 * ### Components Used
		 * - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
		 * ## Response
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "message": (required, string) the status of the export, returns 'success' when completed without errors,
		 * "data" : [
		 * {
		 * "time" : (string) point in time - as ISO 8601 extended when unit is "hour" and as ISO 8601 date when unit is "day",
		 * "sessions" : (int)
		 * },
		 * ...
		 * ]
		 * }
		 * ```
		 * Get sessions/data_series
		 * @param {string} length (Required) Integer
		 * Max number of units (days or hours) before ending_at to include in the returned series - must be between 1 and 100 inclusive.
		 * @param {string} unit (Optional) String
		 * Unit of time between data points - can be "day" or "hour" (defaults to "day"). 
		 * @param {string} ending_at (Optional) DateTime (ISO 8601 string)
		 * Point in time when the data series should end - defaults to time of the request.
		 * @param {string} app_id (Optional) String
		 * App API identifier retrieved from the Developer Console to limit analytics to a specific app.
		 * @param {string} segment_id (Optional) String
		 * Segment API identifier indicating the analytics enabled segment for which sessions should be returned.
		 * @return {void} 
		 */
		AppSessionsByTime(length: string | null | undefined, unit: string | null | undefined, ending_at: string | null | undefined, app_id: string | null | undefined, segment_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sessions/data_series?length=' + (length == null ? '' : encodeURIComponent(length)) + '&unit=' + (unit == null ? '' : encodeURIComponent(unit)) + '&ending_at=' + (ending_at == null ? '' : encodeURIComponent(ending_at)) + '&app_id=' + (app_id == null ? '' : encodeURIComponent(app_id)) + '&segment_id=' + (segment_id == null ? '' : encodeURIComponent(segment_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List User's  Subscription Group Status - SMS
		 * Use the endpoint below to get the subscription state of a user in a subscription group. The response from this endpoint will include the external ID and either subscribed, unsubscribed, or unknown for the specific subscription group requested in the API call. This can be used to update the subscription group state in subsequent API calls or to be displayed on a hosted web page.
		 * > *Either `external_id` or `email` are required.
		 * ## Response
		 * All successful responses will return `subscribed`, `unsubscribed`, or `unknown` depending on status and user history with the subscription group.
		 * ```json
		 * Content-Type: application/json
		 * Authorization: Bearer YOUR-REST-API-KEY
		 * {
		 * "status": {
		 * "1": "Unsubscribed",
		 * "2": "Subscribed"
		 * },
		 * "message": "success"
		 * }
		 * ```
		 * Get subscription/status/get
		 * @param {string} subscription_group_id (Required) String
		 * The `id` of your subscription group.
		 * @param {string} external_id (Required*) String
		 * The `external_id` of the user (must include at least one and at most 50 `external_ids`).
		 * Only external_id or phone is accepted for SMS subscription groups
		 * @param {string} phone (Required*) String
		 * The phone number of the user (must include at least one phone number and at most 50 phone numbers). The recommendation is to provide this in the E.164 format.
		 * Only external_id or phone is accepted for SMS subscription groups
		 * @return {void} 
		 */
		ListUser_sSubscriptionGroupStatusSms(subscription_group_id: string | null | undefined, external_id: string | null | undefined, phone: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscription/status/get?subscription_group_id=' + (subscription_group_id == null ? '' : encodeURIComponent(subscription_group_id)) + '&external_id=' + (external_id == null ? '' : encodeURIComponent(external_id)) + '&phone=' + (phone == null ? '' : encodeURIComponent(phone)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List User's Subscription Group - SMS
		 * Use the endpoint below to list and get the subscription groups of a certain user.
		 * > If there are multiple users (multiple external ids) who share the same email address, all users will be returned as a separate user (even if they have the same email address or subscription group).
		 * Get subscription/user/status
		 * @param {string} external_id (Required*) String
		 * The external_id of the user. Must include at least one and at most 50 `external_ids`.
		 * @param {string} limit (Optional) Integer
		 * The limit on the maximum number of results returned. Default (and max) limit is 100.
		 * @param {string} offset (Optional) Integer
		 * Number of templates to skip before returning rest of the templates that fit the search criteria.
		 * @param {string} phone (Required*) String
		 * The phone number of the user (must include at least one phone number and at most 50 phone numbers). The recommendation is to provide this in the E.164 format.
		 * @return {void} 
		 */
		ListUser_sSubscriptionGroupSms(external_id: string | null | undefined, limit: string | null | undefined, offset: string | null | undefined, phone: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscription/user/status?external_id=' + (external_id == null ? '' : encodeURIComponent(external_id)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&phone=' + (phone == null ? '' : encodeURIComponent(phone)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * See Email Template Information
		 * Use to get information on your email templates.
		 * Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.
		 * ### Request Components
		 * - [Template Identifier](https://www.braze.com/docs/api/identifier_types/)
		 * Get templates/email/info
		 * @param {string} email_template_id (Required) String
		 * Your email template's API Identifier.
		 * @return {void} 
		 */
		SeeEmailTemplateInformation(email_template_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'templates/email/info?email_template_id=' + (email_template_id == null ? '' : encodeURIComponent(email_template_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List Available Email Templates
		 * Use this endpoint to get a list of available templates in your Braze account.
		 * Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.
		 * ### Successful Response Properties
		 * ```json
		 * {
		 * "count": number of templates returned
		 * "templates": [template with the following properties]:
		 * "email_template_id": (string) your email template's API Identifier,
		 * "template_name": (string) the name of your email template,
		 * "created_at": (string, in ISO 8601),
		 * "updated_at": (string, in ISO 8601),
		 * "tags": (array of strings) tags appended to the template
		 * }
		 * ```
		 * Get templates/email/list
		 * @param {string} modified_after (Optional) String in ISO 8601
		 * Retrieve only templates updated at or after the given time.
		 * @param {string} modified_before (Optional) String in ISO 8601
		 * Retrieve only templates updated at or before the given time
		 * @param {string} limit (Optional) Positive Number
		 * Maximum number of templates to retrieve, default to 100 if not provided, maximum acceptable value is 1000.
		 * @param {string} offset (Optional) Positive Number
		 * Number of templates to skip before returning rest of the templates that fit the search criteria.
		 * @return {void} 
		 */
		ListAvailableEmailTemplates(modified_after: string | null | undefined, modified_before: string | null | undefined, limit: string | null | undefined, offset: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'templates/email/list?modified_after=' + (modified_after == null ? '' : encodeURIComponent(modified_after)) + '&modified_before=' + (modified_before == null ? '' : encodeURIComponent(modified_before)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), { observe: 'response', responseType: 'text' });
		}
	}

	export interface ScheduleApiTriggeredCanvasesPostBody {
		audience?: ScheduleApiTriggeredCanvasesPostBodyAudience;
		broadcast?: boolean | null;
		canvas_entry_properties?: string | null;
		canvas_id?: string | null;
		ScheduleApiTriggeredCanvasesPostBodyRecipients?: Array<ScheduleApiTriggeredCanvasesPostBodyRecipients>;
		schedule?: ScheduleApiTriggeredCanvasesPostBodySchedule;
	}
	export interface ScheduleApiTriggeredCanvasesPostBodyFormProperties {
		broadcast: FormControl<boolean | null | undefined>,
		canvas_entry_properties: FormControl<string | null | undefined>,
		canvas_id: FormControl<string | null | undefined>,
	}
	export function CreateScheduleApiTriggeredCanvasesPostBodyFormGroup() {
		return new FormGroup<ScheduleApiTriggeredCanvasesPostBodyFormProperties>({
			broadcast: new FormControl<boolean | null | undefined>(undefined),
			canvas_entry_properties: new FormControl<string | null | undefined>(undefined),
			canvas_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScheduleApiTriggeredCanvasesPostBodyAudience {
		ScheduleApiTriggeredCanvasesPostBodyAudienceAND?: Array<ScheduleApiTriggeredCanvasesPostBodyAudienceAND>;
	}
	export interface ScheduleApiTriggeredCanvasesPostBodyAudienceFormProperties {
	}
	export function CreateScheduleApiTriggeredCanvasesPostBodyAudienceFormGroup() {
		return new FormGroup<ScheduleApiTriggeredCanvasesPostBodyAudienceFormProperties>({
		});

	}

	export interface ScheduleApiTriggeredCanvasesPostBodyAudienceAND {
		custom_attribute?: ScheduleApiTriggeredCanvasesPostBodyAudienceANDCustom_attribute;
	}
	export interface ScheduleApiTriggeredCanvasesPostBodyAudienceANDFormProperties {
	}
	export function CreateScheduleApiTriggeredCanvasesPostBodyAudienceANDFormGroup() {
		return new FormGroup<ScheduleApiTriggeredCanvasesPostBodyAudienceANDFormProperties>({
		});

	}

	export interface ScheduleApiTriggeredCanvasesPostBodyAudienceANDCustom_attribute {
		comparison?: string | null;
		custom_attribute_name?: string | null;
		value?: string | null;
	}
	export interface ScheduleApiTriggeredCanvasesPostBodyAudienceANDCustom_attributeFormProperties {
		comparison: FormControl<string | null | undefined>,
		custom_attribute_name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateScheduleApiTriggeredCanvasesPostBodyAudienceANDCustom_attributeFormGroup() {
		return new FormGroup<ScheduleApiTriggeredCanvasesPostBodyAudienceANDCustom_attributeFormProperties>({
			comparison: new FormControl<string | null | undefined>(undefined),
			custom_attribute_name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScheduleApiTriggeredCanvasesPostBodyRecipients {
		canvas_entry_properties?: string | null;
		external_user_id?: string | null;
		trigger_properties?: string | null;
		user_alias?: string | null;
	}
	export interface ScheduleApiTriggeredCanvasesPostBodyRecipientsFormProperties {
		canvas_entry_properties: FormControl<string | null | undefined>,
		external_user_id: FormControl<string | null | undefined>,
		trigger_properties: FormControl<string | null | undefined>,
		user_alias: FormControl<string | null | undefined>,
	}
	export function CreateScheduleApiTriggeredCanvasesPostBodyRecipientsFormGroup() {
		return new FormGroup<ScheduleApiTriggeredCanvasesPostBodyRecipientsFormProperties>({
			canvas_entry_properties: new FormControl<string | null | undefined>(undefined),
			external_user_id: new FormControl<string | null | undefined>(undefined),
			trigger_properties: new FormControl<string | null | undefined>(undefined),
			user_alias: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScheduleApiTriggeredCanvasesPostBodySchedule {
		at_optimal_time?: boolean | null;
		in_local_time?: boolean | null;
		time?: string | null;
	}
	export interface ScheduleApiTriggeredCanvasesPostBodyScheduleFormProperties {
		at_optimal_time: FormControl<boolean | null | undefined>,
		in_local_time: FormControl<boolean | null | undefined>,
		time: FormControl<string | null | undefined>,
	}
	export function CreateScheduleApiTriggeredCanvasesPostBodyScheduleFormGroup() {
		return new FormGroup<ScheduleApiTriggeredCanvasesPostBodyScheduleFormProperties>({
			at_optimal_time: new FormControl<boolean | null | undefined>(undefined),
			in_local_time: new FormControl<boolean | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined),
		});

	}

}

