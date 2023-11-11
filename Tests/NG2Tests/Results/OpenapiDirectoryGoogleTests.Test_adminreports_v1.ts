import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** JSON template for a collection of activites. */
	export interface Activities {

		/** ETag of the resource. */
		etag?: string | null;

		/** Each activity record in the response. */
		items?: Array<Activity> | null;

		/** The type of API resource. For an activity report, the value is reports#activities. */
		kind?: string | null;

		/** Token for retrieving the follow-on next page of the report. The nextPageToken value is used in the request's pageToken query string. */
		nextPageToken?: string | null;
	}


	/** JSON template for the activity resource. */
	export interface Activity {

		/** User doing the action. */
		actor?: ActivityActor | null;

		/** ETag of the entry. */
		etag?: string | null;

		/** Activity events in the report. */
		ActivityEvents?: Array<ActivityEvents> | null;

		/** Unique identifier for each activity record. */
		id?: ActivityId | null;

		/** IP address of the user doing the action. This is the Internet Protocol (IP) address of the user when logging into G Suite which may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. The API supports IPv4 and IPv6. */
		ipAddress?: string | null;

		/** The type of API resource. For an activity report, the value is audit#activity. */
		kind?: string | null;

		/** This is the domain that is affected by the report's event. For example domain of Admin console or the Drive application's document owner. */
		ownerDomain?: string | null;
	}

	export interface ActivityActor {

		/** The type of actor. */
		callerType?: string | null;

		/** The primary email address of the actor. May be absent if there is no email address associated with the actor. */
		email?: string | null;

		/** Only present when callerType is KEY. Can be the consumer_key of the requestor for OAuth 2LO API requests or an identifier for robot accounts. */
		key?: string | null;

		/** The unique G Suite profile ID of the actor. May be absent if the actor is not a G Suite user. */
		profileId?: string | null;
	}

	export interface ActivityEvents {

		/**
		 * Name of the event. This is the specific name of the activity reported by the API. And each eventName is related to a specific G Suite service or feature which the API organizes into types of events.
		 * For eventName request parameters in general:
		 * - If no eventName is given, the report returns all possible instances of an eventName.
		 * - When you request an eventName, the API's response returns all activities which contain that eventName. It is possible that the returned activities will have other eventName properties in addition to the one requested.
		 * For more information about eventName properties, see the list of event names for various applications above in applicationName.
		 */
		name?: string | null;

		/** Parameter value pairs for various applications. For more information about eventName parameters, see the list of event names for various applications above in applicationName. */
		ActivityEventsParameters?: Array<ActivityEventsParameters> | null;

		/** Type of event. The G Suite service or feature that an administrator changes is identified in the type property which identifies an event using the eventName property. For a full list of the API's type categories, see the list of event names for various applications above in applicationName. */
		type?: string | null;
	}

	export interface ActivityEventsParameters {

		/** Boolean value of the parameter. */
		boolValue?: boolean | null;

		/** Integer value of the parameter. */
		intValue?: string | null;

		/** Nested parameter value pairs associated with this parameter. Complex value type for a parameter are returned as a list of parameter values. For example, the address parameter may have a value as [{parameter: [{name: city, value: abc}]}] */
		messageValue?: ActivityMessageValue | null;

		/** Integer values of the parameter. */
		multiIntValue?: Array<string> | null;

		/** List of messageValue objects. */
		ActivityEventsParametersMultiMessageValue?: Array<ActivityEventsParametersMultiMessageValue> | null;

		/** String values of the parameter. */
		multiValue?: Array<string> | null;

		/** The name of the parameter. */
		name?: string | null;

		/** String value of the parameter. */
		value?: string | null;
	}

	export interface ActivityMessageValue {

		/** Parameter values */
		parameter?: Array<NestedParameter> | null;
	}


	/** JSON template for a parameter used in various reports. */
	export interface NestedParameter {

		/** Boolean value of the parameter. */
		boolValue?: boolean | null;

		/** Integer value of the parameter. */
		intValue?: string | null;

		/** Multiple boolean values of the parameter. */
		multiBoolValue?: Array<boolean> | null;

		/** Multiple integer values of the parameter. */
		multiIntValue?: Array<string> | null;

		/** Multiple string values of the parameter. */
		multiValue?: Array<string> | null;

		/** The name of the parameter. */
		name?: string | null;

		/** String value of the parameter. */
		value?: string | null;
	}

	export interface ActivityEventsParametersMultiMessageValue {

		/** Parameter values */
		parameter?: Array<NestedParameter> | null;
	}

	export interface ActivityId {

		/** Application name to which the event belongs. For possible values see the list of applications above in applicationName. */
		applicationName?: string | null;

		/** The unique identifier for a G suite account. */
		customerId?: string | null;

		/** Time of occurrence of the activity. This is in UNIX epoch time in seconds. */
		time?: Date | null;

		/** Unique qualifier if multiple events have the same time. */
		uniqueQualifier?: string | null;
	}


	/** An notification channel used to watch for resource changes. */
	export interface Channel {

		/** The address where notifications are delivered for this channel. */
		address?: string | null;

		/** Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional. */
		expiration?: string | null;

		/** A UUID or similar unique string that identifies this channel. */
		id?: string | null;

		/** Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel". */
		kind?: string | null;

		/** Additional parameters controlling delivery channel behavior. Optional. */
		params?: {[id: string]: string } | null;

		/** A Boolean value to indicate whether payload is wanted. Optional. */
		payload?: boolean | null;

		/** An opaque ID that identifies the resource being watched on this channel. Stable across different API versions. */
		resourceId?: string | null;

		/** A version-specific identifier for the watched resource. */
		resourceUri?: string | null;

		/** An arbitrary string delivered to the target address with each notification delivered over this channel. Optional. */
		token?: string | null;

		/** The type of delivery mechanism used for this channel. */
		type?: string | null;
	}


	/** JSON template for a usage report. */
	export interface UsageReport {

		/** The date of the report request. */
		date?: string | null;

		/** Information about the type of the item. */
		entity?: UsageReportEntity | null;

		/** ETag of the resource. */
		etag?: string | null;

		/** The type of API resource. For a usage report, the value is admin#reports#usageReport. */
		kind?: string | null;

		/** Parameter value pairs for various applications. For the Customers usage report parameters and values, see the customer usage parameters reference. */
		UsageReportParameters?: Array<UsageReportParameters> | null;
	}

	export interface UsageReportEntity {

		/** The unique identifier of the customer's account. */
		customerId?: string | null;

		/** Object key. Only relevant if entity.type = "OBJECT" Note: external-facing name of report is "Entities" rather than "Objects". */
		entityId?: string | null;

		/** The user's immutable G Suite profile identifier. */
		profileId?: string | null;

		/** The type of item. The value is customer. */
		type?: string | null;

		/** The user's email address. Only relevant if entity.type = "USER" */
		userEmail?: string | null;
	}

	export interface UsageReportParameters {

		/** Boolean value of the parameter. */
		boolValue?: boolean | null;

		/** The RFC 3339 formatted value of the parameter, for example 2010-10-28T10:26:35.000Z. */
		datetimeValue?: Date | null;

		/** Integer value of the parameter. */
		intValue?: string | null;

		/** Nested message value of the parameter. */
		msgValue?: Array<string> | null;
		name?: string | null;

		/** String value of the parameter. */
		stringValue?: string | null;
	}

	export interface UsageReports {

		/** ETag of the resource. */
		etag?: string | null;

		/** The type of API resource. For a usage report, the value is admin#reports#usageReports. */
		kind?: string | null;

		/** Token to specify next page. A report with multiple pages has a nextPageToken property in the response. For your follow-on requests getting all of the report's pages, enter the nextPageToken value in the pageToken query string. */
		nextPageToken?: string | null;

		/** Various application parameter records. */
		usageReports?: Array<UsageReport> | null;

		/** Warnings, if any. */
		UsageReportsWarnings?: Array<UsageReportsWarnings> | null;
	}

	export interface UsageReportsWarnings {

		/** Machine readable code or warning type. The warning code value is 200. */
		code?: string | null;

		/** Key-value pairs to give detailed information on the warning. */
		UsageReportsWarningsData?: Array<UsageReportsWarningsData> | null;

		/**
		 * The human readable messages for a warning are:
		 * - Data is not available warning - Sorry, data for date yyyy-mm-dd for application "application name" is not available.
		 * - Partial data is available warning - Data for date yyyy-mm-dd for application "application name" is not available right now, please try again after a few hours.
		 */
		message?: string | null;
	}

	export interface UsageReportsWarningsData {

		/** Key associated with a key-value pair to give detailed information on the warning. */
		key?: string | null;

		/** Value associated with a key-value pair to give detailed information on the warning. */
		value?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves a list of activities for a specific customer's account and application such as the Admin console application or the Google Drive application. For more information, see the guides for administrator and Google Drive activity reports. For more information about the activity report's parameters, see the activity parameters reference guides.
		 * Get activity/users/{userKey}/applications/{applicationName}
		 * @param {string} userKey Represents the profile ID or the user email for which the data should be filtered. Can be all for all information, or userKey for a user's unique G Suite profile ID or their primary email address.
		 * @param {Reports_activities_listApplicationName} applicationName Application name for which the events are to be retrieved.
		 * @param {string} actorIpAddress The Internet Protocol (IP) Address of host where the event was performed. This is an additional way to filter a report's summary using the IP address of the user whose activity is being reported. This IP address may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. This parameter supports both IPv4 and IPv6 address versions.
		 * @param {string} customerId The unique ID of the customer to retrieve data for.
		 * @param {string} endTime Sets the end of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The default value is the approximate time of the API request. An API report has three basic time concepts:  
		 * - Date of the API's request for a report: When the API created and retrieved the report. 
		 * - Report's start time: The beginning of the timespan shown in the report. The startTime must be before the endTime (if specified) and the current time when the request is made, or the API returns an error. 
		 * - Report's end time: The end of the timespan shown in the report. For example, the timespan of events summarized in a report can start in April and end in May. The report itself can be requested in August.  If the endTime is not specified, the report returns all activities from the startTime until the current time or the most recent 180 days if the startTime is more than 180 days in the past.
		 * @param {string} eventName The name of the event being queried by the API. Each eventName is related to a specific G Suite service or feature which the API organizes into types of events. An example is the Google Calendar events in the Admin console application's reports. The Calendar Settings type structure has all of the Calendar eventName activities reported by the API. When an administrator changes a Calendar setting, the API reports this activity in the Calendar Settings type and eventName parameters. For more information about eventName query strings and parameters, see the list of event names for various applications above in applicationName.
		 * @param {string} filters The filters query string is a comma-separated list. The list is composed of event parameters that are manipulated by relational operators. Event parameters are in the form [parameter1 name][relational operator][parameter1 value],[parameter2 name][relational operator][parameter2 value],... 
		 * These event parameters are associated with a specific eventName. An empty report is returned if the filtered request's parameter does not belong to the eventName. For more information about eventName parameters, see the list of event names for various applications above in applicationName.
		 * In the following Admin Activity example, the <> operator is URL-encoded in the request's query string (%3C%3E):
		 * GET...&eventName=CHANGE_CALENDAR_SETTING &filters=NEW_VALUE%3C%3EREAD_ONLY_ACCESS
		 * In the following Drive example, the list can be a view or edit event's doc_id parameter with a value that is manipulated by an 'equal to' (==) or 'not equal to' (<>) relational operator. In the first example, the report returns each edited document's doc_id. In the second example, the report returns each viewed document's doc_id that equals the value 12345 and does not return any viewed document's which have a doc_id value of 98765. The <> operator is URL-encoded in the request's query string (%3C%3E):
		 * GET...&eventName=edit&filters=doc_id GET...&eventName=view&filters=doc_id==12345,doc_id%3C%3E98765
		 * The relational operators include:  
		 * - == - 'equal to'. 
		 * - <> - 'not equal to'. It is URL-encoded (%3C%3E). 
		 * - < - 'less than'. It is URL-encoded (%3C). 
		 * - <= - 'less than or equal to'. It is URL-encoded (%3C=). 
		 * - > - 'greater than'. It is URL-encoded (%3E). 
		 * - >= - 'greater than or equal to'. It is URL-encoded (%3E=).  
		 * Note: The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter.
		 * In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters. If no parameters are requested, all parameters are returned.
		 * @param {number} maxResults Determines how many activity records are shown on each response page. For example, if the request sets maxResults=1 and the report has two activities, the report has two pages. The response's nextPageToken property has the token to the second page. The maxResults query string is optional in the request. The default value is 1000.
		 * @param {string} orgUnitID ID of the organizational unit to report on. Activity records will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn't appear in the filtered results.
		 * @param {string} pageToken The token to specify next page. A report with multiple pages has a nextPageToken property in the response. In your follow-on request getting the next page of the report, enter the nextPageToken value in the pageToken query string.
		 * @param {string} startTime Sets the beginning of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The report returns all activities from startTime until endTime. The startTime must be before the endTime (if specified) and the current time when the request is made, or the API returns an error.
		 * @return {void} Successful response
		 */
		Reports_activities_list(userKey: string, applicationName: Reports_activities_listApplicationName, actorIpAddress: string, customerId: string, endTime: string, eventName: string, filters: string, maxResults: number, orgUnitID: string, pageToken: string, startTime: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'activity/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/applications/' + applicationName + '&actorIpAddress=' + (actorIpAddress == null ? '' : encodeURIComponent(actorIpAddress)) + '&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)) + '&endTime=' + (endTime == null ? '' : encodeURIComponent(endTime)) + '&eventName=' + (eventName == null ? '' : encodeURIComponent(eventName)) + '&filters=' + (filters == null ? '' : encodeURIComponent(filters)) + '&maxResults=' + maxResults + '&orgUnitID=' + (orgUnitID == null ? '' : encodeURIComponent(orgUnitID)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startTime=' + (startTime == null ? '' : encodeURIComponent(startTime)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Start receiving notifications for account activities. For more information, see Receiving Push Notifications.
		 * Post activity/users/{userKey}/applications/{applicationName}/watch
		 * @param {string} userKey Represents the profile ID or the user email for which the data should be filtered. Can be all for all information, or userKey for a user's unique G Suite profile ID or their primary email address.
		 * @param {Reports_activities_listApplicationName} applicationName Application name for which the events are to be retrieved.
		 * @param {string} actorIpAddress The Internet Protocol (IP) Address of host where the event was performed. This is an additional way to filter a report's summary using the IP address of the user whose activity is being reported. This IP address may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. This parameter supports both IPv4 and IPv6 address versions.
		 * @param {string} customerId The unique ID of the customer to retrieve data for.
		 * @param {string} endTime Sets the end of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The default value is the approximate time of the API request. An API report has three basic time concepts:  
		 * - Date of the API's request for a report: When the API created and retrieved the report. 
		 * - Report's start time: The beginning of the timespan shown in the report. The startTime must be before the endTime (if specified) and the current time when the request is made, or the API returns an error. 
		 * - Report's end time: The end of the timespan shown in the report. For example, the timespan of events summarized in a report can start in April and end in May. The report itself can be requested in August.  If the endTime is not specified, the report returns all activities from the startTime until the current time or the most recent 180 days if the startTime is more than 180 days in the past.
		 * @param {string} eventName The name of the event being queried by the API. Each eventName is related to a specific G Suite service or feature which the API organizes into types of events. An example is the Google Calendar events in the Admin console application's reports. The Calendar Settings type structure has all of the Calendar eventName activities reported by the API. When an administrator changes a Calendar setting, the API reports this activity in the Calendar Settings type and eventName parameters. For more information about eventName query strings and parameters, see the list of event names for various applications above in applicationName.
		 * @param {string} filters The filters query string is a comma-separated list. The list is composed of event parameters that are manipulated by relational operators. Event parameters are in the form [parameter1 name][relational operator][parameter1 value],[parameter2 name][relational operator][parameter2 value],... 
		 * These event parameters are associated with a specific eventName. An empty report is returned if the filtered request's parameter does not belong to the eventName. For more information about eventName parameters, see the list of event names for various applications above in applicationName.
		 * In the following Admin Activity example, the <> operator is URL-encoded in the request's query string (%3C%3E):
		 * GET...&eventName=CHANGE_CALENDAR_SETTING &filters=NEW_VALUE%3C%3EREAD_ONLY_ACCESS
		 * In the following Drive example, the list can be a view or edit event's doc_id parameter with a value that is manipulated by an 'equal to' (==) or 'not equal to' (<>) relational operator. In the first example, the report returns each edited document's doc_id. In the second example, the report returns each viewed document's doc_id that equals the value 12345 and does not return any viewed document's which have a doc_id value of 98765. The <> operator is URL-encoded in the request's query string (%3C%3E):
		 * GET...&eventName=edit&filters=doc_id GET...&eventName=view&filters=doc_id==12345,doc_id%3C%3E98765
		 * The relational operators include:  
		 * - == - 'equal to'. 
		 * - <> - 'not equal to'. It is URL-encoded (%3C%3E). 
		 * - < - 'less than'. It is URL-encoded (%3C). 
		 * - <= - 'less than or equal to'. It is URL-encoded (%3C=). 
		 * - > - 'greater than'. It is URL-encoded (%3E). 
		 * - >= - 'greater than or equal to'. It is URL-encoded (%3E=).  
		 * Note: The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter.
		 * In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters. If no parameters are requested, all parameters are returned.
		 * @param {number} maxResults Determines how many activity records are shown on each response page. For example, if the request sets maxResults=1 and the report has two activities, the report has two pages. The response's nextPageToken property has the token to the second page. The maxResults query string is optional in the request. The default value is 1000.
		 * @param {string} orgUnitID ID of the organizational unit to report on. Activity records will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn't appear in the filtered results.
		 * @param {string} pageToken The token to specify next page. A report with multiple pages has a nextPageToken property in the response. In your follow-on request getting the next page of the report, enter the nextPageToken value in the pageToken query string.
		 * @param {string} startTime Sets the beginning of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The report returns all activities from startTime until endTime. The startTime must be before the endTime (if specified) and the current time when the request is made, or the API returns an error.
		 * @return {void} Successful response
		 */
		Reports_activities_watch(userKey: string, applicationName: Reports_activities_listApplicationName, actorIpAddress: string, customerId: string, endTime: string, eventName: string, filters: string, maxResults: number, orgUnitID: string, pageToken: string, startTime: string, requestBody: Channel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'activity/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/applications/' + applicationName + '/watch&actorIpAddress=' + (actorIpAddress == null ? '' : encodeURIComponent(actorIpAddress)) + '&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)) + '&endTime=' + (endTime == null ? '' : encodeURIComponent(endTime)) + '&eventName=' + (eventName == null ? '' : encodeURIComponent(eventName)) + '&filters=' + (filters == null ? '' : encodeURIComponent(filters)) + '&maxResults=' + maxResults + '&orgUnitID=' + (orgUnitID == null ? '' : encodeURIComponent(orgUnitID)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startTime=' + (startTime == null ? '' : encodeURIComponent(startTime)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Stop watching resources through this channel
		 * Post admin/reports_v1/channels/stop
		 * @return {void} Successful response
		 */
		Admin_channels_stop(requestBody: Channel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'admin/reports_v1/channels/stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a report which is a collection of properties and statistics for a specific customer's account. For more information, see the Customers Usage Report guide. For more information about the customer report's parameters, see the Customers Usage parameters reference guides.
		 * Get usage/dates/{date}
		 * @param {string} date Represents the date the usage occurred. The timestamp is in the ISO 8601 format, yyyy-mm-dd. We recommend you use your account's time zone for this.
		 * @param {string} customerId The unique ID of the customer to retrieve data for.
		 * @param {string} pageToken Token to specify next page. A report with multiple pages has a nextPageToken property in the response. For your follow-on requests getting all of the report's pages, enter the nextPageToken value in the pageToken query string.
		 * @param {string} parameters The parameters query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Customers usage report include accounts, app_maker, apps_scripts, calendar, classroom, cros, docs, gmail, gplus, device_management, meet, and sites.
		 * A parameters query string is in the CSV form of app_name1:param_name1, app_name2:param_name2.
		 * Note: The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter.
		 * In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters.
		 * An example of an invalid request parameter is one that does not belong to the application. If no parameters are requested, all parameters are returned.
		 * @return {void} Successful response
		 */
		Reports_customerUsageReports_get(date: string, customerId: string, pageToken: string, parameters: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'usage/dates/' + (date == null ? '' : encodeURIComponent(date)) + '&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parameters=' + (parameters == null ? '' : encodeURIComponent(parameters)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a report which is a collection of properties and statistics for a set of users with the account. For more information, see the User Usage Report guide. For more information about the user report's parameters, see the Users Usage parameters reference guides.
		 * Get usage/users/{userKey}/dates/{date}
		 * @param {string} userKey Represents the profile ID or the user email for which the data should be filtered. Can be all for all information, or userKey for a user's unique G Suite profile ID or their primary email address.
		 * @param {string} date Represents the date the usage occurred. The timestamp is in the ISO 8601 format, yyyy-mm-dd. We recommend you use your account's time zone for this.
		 * @param {string} customerId The unique ID of the customer to retrieve data for.
		 * @param {string} filters The filters query string is a comma-separated list of an application's event parameters where the parameter's value is manipulated by a relational operator. The filters query string includes the name of the application whose usage is returned in the report. The application values for the Users Usage Report include accounts, docs, and gmail.
		 * Filters are in the form [application name]:[parameter name][relational operator][parameter value],....
		 * In this example, the <> 'not equal to' operator is URL-encoded in the request's query string (%3C%3E):
		 * GET https://www.googleapis.com/admin/reports/v1/usage/users/all/dates/2013-03-03 ?parameters=accounts:last_login_time &filters=accounts:last_login_time>2010-10-28T10:26:35.000Z
		 * The relational operators include:  
		 * - == - 'equal to'. 
		 * - <> - 'not equal to'. It is URL-encoded (%3C%3E). 
		 * - < - 'less than'. It is URL-encoded (%3C). 
		 * - <= - 'less than or equal to'. It is URL-encoded (%3C=). 
		 * - > - 'greater than'. It is URL-encoded (%3E). 
		 * - >= - 'greater than or equal to'. It is URL-encoded (%3E=).
		 * @param {number} maxResults Determines how many activity records are shown on each response page. For example, if the request sets maxResults=1 and the report has two activities, the report has two pages. The response's nextPageToken property has the token to the second page.
		 * The maxResults query string is optional.
		 * @param {string} orgUnitID ID of the organizational unit to report on. User activity will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn't appear in the filtered results.
		 * @param {string} pageToken Token to specify next page. A report with multiple pages has a nextPageToken property in the response. In your follow-on request getting the next page of the report, enter the nextPageToken value in the pageToken query string.
		 * @param {string} parameters The parameters query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Customers usage report include accounts, app_maker, apps_scripts, calendar, classroom, cros, docs, gmail, gplus, device_management, meet, and sites.
		 * A parameters query string is in the CSV form of app_name1:param_name1, app_name2:param_name2.
		 * Note: The API doesn't accept multiple values of a parameter.
		 * If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters.
		 * An example of an invalid request parameter is one that does not belong to the application. If no parameters are requested, all parameters are returned.
		 * @return {void} Successful response
		 */
		Reports_userUsageReport_get(userKey: string, date: string, customerId: string, filters: string, maxResults: number, orgUnitID: string, pageToken: string, parameters: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'usage/users/' + (userKey == null ? '' : encodeURIComponent(userKey)) + '/dates/' + (date == null ? '' : encodeURIComponent(date)) + '&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)) + '&filters=' + (filters == null ? '' : encodeURIComponent(filters)) + '&maxResults=' + maxResults + '&orgUnitID=' + (orgUnitID == null ? '' : encodeURIComponent(orgUnitID)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parameters=' + (parameters == null ? '' : encodeURIComponent(parameters)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a report which is a collection of properties and statistics for entities used by users within the account. For more information, see the Entities Usage Report guide. For more information about the entities report's parameters, see the Entities Usage parameters reference guides.
		 * Get usage/{entityType}/{entityKey}/dates/{date}
		 * @param {Reports_entityUsageReports_getEntityType} entityType Represents the type of entity for the report.
		 * @param {Reports_entityUsageReports_getEntityKey} entityKey Represents the key of the object to filter the data with.
		 * @param {string} date Represents the date the usage occurred. The timestamp is in the ISO 8601 format, yyyy-mm-dd. We recommend you use your account's time zone for this.
		 * @param {string} customerId The unique ID of the customer to retrieve data for.
		 * @param {string} filters The filters query string is a comma-separated list of an application's event parameters where the parameter's value is manipulated by a relational operator. The filters query string includes the name of the application whose usage is returned in the report. The application values for the Entities usage report include accounts, docs, and gmail.
		 * Filters are in the form [application name]:[parameter name][relational operator][parameter value],....
		 * In this example, the <> 'not equal to' operator is URL-encoded in the request's query string (%3C%3E):
		 * GET https://www.googleapis.com/admin/reports/v1/usage/gplus_communities/all/dates/2017-12-01 ?parameters=gplus:community_name,gplus:num_total_members &filters=gplus:num_total_members>0
		 * The relational operators include:  
		 * - == - 'equal to'. 
		 * - <> - 'not equal to'. It is URL-encoded (%3C%3E). 
		 * - < - 'less than'. It is URL-encoded (%3C). 
		 * - <= - 'less than or equal to'. It is URL-encoded (%3C=). 
		 * - > - 'greater than'. It is URL-encoded (%3E). 
		 * - >= - 'greater than or equal to'. It is URL-encoded (%3E=).  Filters can only be applied to numeric parameters.
		 * @param {number} maxResults Determines how many activity records are shown on each response page. For example, if the request sets maxResults=1 and the report has two activities, the report has two pages. The response's nextPageToken property has the token to the second page.
		 * @param {string} pageToken Token to specify next page. A report with multiple pages has a nextPageToken property in the response. In your follow-on request getting the next page of the report, enter the nextPageToken value in the pageToken query string.
		 * @param {string} parameters The parameters query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Entities usage report are only gplus.
		 * A parameter query string is in the CSV form of [app_name1:param_name1], [app_name2:param_name2]....
		 * Note: The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter.
		 * In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters.
		 * An example of an invalid request parameter is one that does not belong to the application. If no parameters are requested, all parameters are returned.
		 * @return {void} Successful response
		 */
		Reports_entityUsageReports_get(entityType: Reports_entityUsageReports_getEntityType, entityKey: Reports_entityUsageReports_getEntityKey, date: string, customerId: string, filters: string, maxResults: number, pageToken: string, parameters: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'usage/' + entityType + '/' + entityKey + '/dates/' + (date == null ? '' : encodeURIComponent(date)) + '&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)) + '&filters=' + (filters == null ? '' : encodeURIComponent(filters)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parameters=' + (parameters == null ? '' : encodeURIComponent(parameters)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum Reports_activities_listApplicationName { access_transparency = 0, admin = 1, calendar = 2, chat = 3, drive = 4, gcp = 5, gplus = 6, groups = 7, groups_enterprise = 8, jamboard = 9, login = 10, meet = 11, mobile = 12, rules = 13, saml = 14, token = 15, user_accounts = 16 }

	export enum Reports_entityUsageReports_getEntityType { gplus_communities = 0 }

	export enum Reports_entityUsageReports_getEntityKey { all = 0, entityKey = 1 }

}

