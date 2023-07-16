import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface Acl {

		/** ETag of the collection. */
		etag?: string;

		/** List of rules on the access control list. */
		items?: Array<AclRule>;

		/** Type of the collection ("calendar#acl"). */
		kind?: string;

		/** Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided. */
		nextPageToken?: string;

		/** Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided. */
		nextSyncToken?: string;
	}

	export interface AclRule {

		/** ETag of the resource. */
		etag?: string;

		/** Identifier of the ACL rule. */
		id?: string;

		/** Type of the resource ("calendar#aclRule"). */
		kind?: string;

		/**
		 * The role assigned to the scope. Possible values are:
		 * - "none" - Provides no access.
		 * - "freeBusyReader" - Provides read access to free/busy information.
		 * - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
		 * - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
		 * - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
		 */
		role?: string;

		/** The scope of the rule. */
		scope?: AclRuleScope;
	}

	export interface AclRuleScope {

		/**
		 * The type of the scope. Possible values are:
		 * - "default" - The public scope. This is the default value.
		 * - "user" - Limits the scope to a single user.
		 * - "group" - Limits the scope to a group.
		 * - "domain" - Limits the scope to a domain.  Note: The permissions granted to the "default", or public, scope apply to any user, authenticated or not.
		 */
		type?: string;

		/** The email address of a user or group, or the name of a domain, depending on the scope type. Omitted for type "default". */
		value?: string;
	}

	export interface Calendar {
		conferenceProperties?: ConferenceProperties;

		/** Description of the calendar. Optional. */
		description?: string;

		/** ETag of the resource. */
		etag?: string;

		/** Identifier of the calendar. To retrieve IDs call the calendarList.list() method. */
		id?: string;

		/** Type of the resource ("calendar#calendar"). */
		kind?: string;

		/** Geographic location of the calendar as free-form text. Optional. */
		location?: string;

		/** Title of the calendar. */
		summary?: string;

		/** The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional. */
		timeZone?: string;
	}

	export interface ConferenceProperties {

		/**
		 * The types of conference solutions that are supported for this calendar.
		 * The possible values are:
		 * - "eventHangout"
		 * - "eventNamedHangout"
		 * - "hangoutsMeet"  Optional.
		 */
		allowedConferenceSolutionTypes?: Array<string>;
	}

	export interface CalendarList {

		/** ETag of the collection. */
		etag?: string;

		/** Calendars that are present on the user's calendar list. */
		items?: Array<CalendarListEntry>;

		/** Type of the collection ("calendar#calendarList"). */
		kind?: string;

		/** Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided. */
		nextPageToken?: string;

		/** Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided. */
		nextSyncToken?: string;
	}

	export interface CalendarListEntry {

		/**
		 * The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:
		 * - "freeBusyReader" - Provides read access to free/busy information.
		 * - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
		 * - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
		 * - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
		 */
		accessRole?: string;

		/** The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional. */
		backgroundColor?: string;

		/** The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition (see the colors endpoint). This property is superseded by the backgroundColor and foregroundColor properties and can be ignored when using these properties. Optional. */
		colorId?: string;
		conferenceProperties?: ConferenceProperties;

		/** The default reminders that the authenticated user has for this calendar. */
		defaultReminders?: Array<EventReminder>;

		/** Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False. */
		deleted?: boolean;

		/** Description of the calendar. Optional. Read-only. */
		description?: string;

		/** ETag of the resource. */
		etag?: string;

		/** The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional. */
		foregroundColor?: string;

		/** Whether the calendar has been hidden from the list. Optional. The default is False. */
		hidden?: boolean;

		/** Identifier of the calendar. */
		id?: string;

		/** Type of the resource ("calendar#calendarListEntry"). */
		kind?: string;

		/** Geographic location of the calendar as free-form text. Optional. Read-only. */
		location?: string;

		/** The notifications that the authenticated user is receiving for this calendar. */
		notificationSettings?: CalendarListEntryNotificationSettings;

		/** Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False. */
		primary?: boolean;

		/** Whether the calendar content shows up in the calendar UI. Optional. The default is False. */
		selected?: boolean;

		/** Title of the calendar. Read-only. */
		summary?: string;

		/** The summary that the authenticated user has set for this calendar. Optional. */
		summaryOverride?: string;

		/** The time zone of the calendar. Optional. Read-only. */
		timeZone?: string;
	}

	export interface EventReminder {

		/**
		 * The method used by this reminder. Possible values are:
		 * - "email" - Reminders are sent via email.
		 * - "popup" - Reminders are sent via a UI popup.
		 * Required when adding a reminder.
		 */
		method?: string;

		/**
		 * Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).
		 * Required when adding a reminder.
		 */
		minutes?: number;
	}

	export interface CalendarListEntryNotificationSettings {

		/** The list of notifications set for this calendar. */
		notifications?: Array<CalendarNotification>;
	}

	export interface CalendarNotification {

		/**
		 * The method used to deliver the notification. The possible value is:
		 * - "email" - Notifications are sent via email.
		 * Required when adding a notification.
		 */
		method?: string;

		/**
		 * The type of notification. Possible values are:
		 * - "eventCreation" - Notification sent when a new event is put on the calendar.
		 * - "eventChange" - Notification sent when an event is changed.
		 * - "eventCancellation" - Notification sent when an event is cancelled.
		 * - "eventResponse" - Notification sent when an attendee responds to the event invitation.
		 * - "agenda" - An agenda with the events of the day (sent out in the morning).
		 * Required when adding a notification.
		 */
		type?: string;
	}

	export interface Channel {

		/** The address where notifications are delivered for this channel. */
		address?: string;

		/** Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional. */
		expiration?: string;

		/** A UUID or similar unique string that identifies this channel. */
		id?: string;

		/** Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel". */
		kind?: string;

		/** Additional parameters controlling delivery channel behavior. Optional. */
		params?: {[id: string]: string };

		/** A Boolean value to indicate whether payload is wanted. Optional. */
		payload?: boolean;

		/** An opaque ID that identifies the resource being watched on this channel. Stable across different API versions. */
		resourceId?: string;

		/** A version-specific identifier for the watched resource. */
		resourceUri?: string;

		/** An arbitrary string delivered to the target address with each notification delivered over this channel. Optional. */
		token?: string;

		/** The type of delivery mechanism used for this channel. */
		type?: string;
	}

	export interface ColorDefinition {

		/** The background color associated with this color definition. */
		background?: string;

		/** The foreground color that can be used to write on top of a background with 'background' color. */
		foreground?: string;
	}

	export interface Colors {

		/** A global palette of calendar colors, mapping from the color ID to its definition. A calendarListEntry resource refers to one of these color IDs in its color field. Read-only. */
		calendar?: {[id: string]: ColorDefinition };

		/** A global palette of event colors, mapping from the color ID to its definition. An event resource may refer to one of these color IDs in its color field. Read-only. */
		event?: {[id: string]: ColorDefinition };

		/** Type of the resource ("calendar#colors"). */
		kind?: string;

		/** Last modification time of the color palette (as a RFC3339 timestamp). Read-only. */
		updated?: Date;
	}

	export interface ConferenceData {

		/**
		 * The ID of the conference.
		 * Can be used by developers to keep track of conferences, should not be displayed to users.
		 * Values for solution types:
		 * - "eventHangout": unset.
		 * - "eventNamedHangout": the name of the Hangout.
		 * - "hangoutsMeet": the 10-letter meeting code, for example "aaa-bbbb-ccc".
		 * - "addOn": defined by 3P conference provider.  Optional.
		 */
		conferenceId?: string;
		conferenceSolution?: ConferenceSolution;
		createRequest?: CreateConferenceRequest;

		/**
		 * Information about individual conference entry points, such as URLs or phone numbers.
		 * All of them must belong to the same conference.
		 * Either conferenceSolution and at least one entryPoint, or createRequest is required.
		 */
		entryPoints?: Array<EntryPoint>;

		/** Additional notes (such as instructions from the domain administrator, legal notices) to display to the user. Can contain HTML. The maximum length is 2048 characters. Optional. */
		notes?: string;
		parameters?: ConferenceParameters;

		/**
		 * The signature of the conference data.
		 * Generated on server side. Must be preserved while copying the conference data between events, otherwise the conference data will not be copied.
		 * Unset for a conference with a failed create request.
		 * Optional for a conference with a pending create request.
		 */
		signature?: string;
	}

	export interface ConferenceSolution {

		/** The user-visible icon for this solution. */
		iconUri?: string;
		key?: ConferenceSolutionKey;

		/** The user-visible name of this solution. Not localized. */
		name?: string;
	}

	export interface ConferenceSolutionKey {

		/**
		 * The conference solution type.
		 * If a client encounters an unfamiliar or empty type, it should still be able to display the entry points. However, it should disallow modifications.
		 * The possible values are:
		 * - "eventHangout" for Hangouts for consumers (http://hangouts.google.com)
		 * - "eventNamedHangout" for classic Hangouts for G Suite users (http://hangouts.google.com)
		 * - "hangoutsMeet" for Hangouts Meet (http://meet.google.com)
		 * - "addOn" for 3P conference providers
		 */
		type?: string;
	}

	export interface CreateConferenceRequest {
		conferenceSolutionKey?: ConferenceSolutionKey;

		/**
		 * The client-generated unique ID for this request.
		 * Clients should regenerate this ID for every new request. If an ID provided is the same as for the previous request, the request is ignored.
		 */
		requestId?: string;
		status?: ConferenceRequestStatus;
	}

	export interface ConferenceRequestStatus {

		/**
		 * The current status of the conference create request. Read-only.
		 * The possible values are:
		 * - "pending": the conference create request is still being processed.
		 * - "success": the conference create request succeeded, the entry points are populated.
		 * - "failure": the conference create request failed, there are no entry points.
		 */
		statusCode?: string;
	}

	export interface EntryPoint {

		/**
		 * The access code to access the conference. The maximum length is 128 characters.
		 * When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
		 * Optional.
		 */
		accessCode?: string;

		/** Features of the entry point, such as being toll or toll-free. One entry point can have multiple features. However, toll and toll-free cannot be both set on the same entry point. */
		entryPointFeatures?: Array<string>;

		/**
		 * The type of the conference entry point.
		 * Possible values are:
		 * - "video" - joining a conference over HTTP. A conference can have zero or one video entry point.
		 * - "phone" - joining a conference by dialing a phone number. A conference can have zero or more phone entry points.
		 * - "sip" - joining a conference over SIP. A conference can have zero or one sip entry point.
		 * - "more" - further conference joining instructions, for example additional phone numbers. A conference can have zero or one more entry point. A conference with only a more entry point is not a valid conference.
		 */
		entryPointType?: string;

		/**
		 * The label for the URI. Visible to end users. Not localized. The maximum length is 512 characters.
		 * Examples:
		 * - for video: meet.google.com/aaa-bbbb-ccc
		 * - for phone: +1 123 268 2601
		 * - for sip: 12345678@altostrat.com
		 * - for more: should not be filled
		 * Optional.
		 */
		label?: string;

		/**
		 * The meeting code to access the conference. The maximum length is 128 characters.
		 * When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
		 * Optional.
		 */
		meetingCode?: string;

		/**
		 * The passcode to access the conference. The maximum length is 128 characters.
		 * When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
		 */
		passcode?: string;

		/**
		 * The password to access the conference. The maximum length is 128 characters.
		 * When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
		 * Optional.
		 */
		password?: string;

		/**
		 * The PIN to access the conference. The maximum length is 128 characters.
		 * When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
		 * Optional.
		 */
		pin?: string;

		/**
		 * The CLDR/ISO 3166 region code for the country associated with this phone access. Example: "SE" for Sweden.
		 * Calendar backend will populate this field only for EntryPointType.PHONE.
		 */
		regionCode?: string;

		/**
		 * The URI of the entry point. The maximum length is 1300 characters.
		 * Format:
		 * - for video, http: or https: schema is required.
		 * - for phone, tel: schema is required. The URI should include the entire dial sequence (e.g., tel:+12345678900,,,123456789;1234).
		 * - for sip, sip: schema is required, e.g., sip:12345678@myprovider.com.
		 * - for more, http: or https: schema is required.
		 */
		uri?: string;
	}

	export interface ConferenceParameters {
		addOnParameters?: ConferenceParametersAddOnParameters;
	}

	export interface ConferenceParametersAddOnParameters {
		parameters?: {[id: string]: string };
	}

	export interface Error {

		/** Domain, or broad category, of the error. */
		domain?: string;

		/**
		 * Specific reason for the error. Some of the possible values are:
		 * - "groupTooBig" - The group of users requested is too large for a single query.
		 * - "tooManyCalendarsRequested" - The number of calendars requested is too large for a single query.
		 * - "notFound" - The requested resource was not found.
		 * - "internalError" - The API service has encountered an internal error.  Additional error types may be added in the future, so clients should gracefully handle additional error statuses not included in this list.
		 */
		reason?: string;
	}

	export interface Event {

		/** Whether anyone can invite themselves to the event (currently works for Google+ events only). Optional. The default is False. */
		anyoneCanAddSelf?: boolean;

		/**
		 * File attachments for the event. Currently only Google Drive attachments are supported.
		 * In order to modify attachments the supportsAttachments request parameter should be set to true.
		 * There can be at most 25 attachments per event,
		 */
		attachments?: Array<EventAttachment>;

		/** The attendees of the event. See the Events with attendees guide for more information on scheduling events with other calendar users. */
		attendees?: Array<EventAttendee>;

		/** Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the participant's response. Optional. The default is False. */
		attendeesOmitted?: boolean;

		/** The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional. */
		colorId?: string;
		conferenceData?: ConferenceData;

		/** Creation time of the event (as a RFC3339 timestamp). Read-only. */
		created?: Date;

		/** The creator of the event. Read-only. */
		creator?: EventCreator;

		/** Description of the event. Can contain HTML. Optional. */
		description?: string;
		end?: EventDateTime;

		/** Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False. */
		endTimeUnspecified?: boolean;

		/** ETag of the resource. */
		etag?: string;

		/** Extended properties of the event. */
		extendedProperties?: EventExtendedProperties;

		/** A gadget that extends this event. */
		gadget?: EventGadget;

		/** Whether attendees other than the organizer can invite others to the event. Optional. The default is True. */
		guestsCanInviteOthers?: boolean;

		/** Whether attendees other than the organizer can modify the event. Optional. The default is False. */
		guestsCanModify?: boolean;

		/** Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True. */
		guestsCanSeeOtherGuests?: boolean;

		/** An absolute link to the Google+ hangout associated with this event. Read-only. */
		hangoutLink?: string;

		/** An absolute link to this event in the Google Calendar Web UI. Read-only. */
		htmlLink?: string;

		/**
		 * Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.
		 * Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.
		 */
		iCalUID?: string;

		/**
		 * Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:
		 * - characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938
		 * - the length of the ID must be between 5 and 1024 characters
		 * - the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122.
		 * If you do not specify an ID, it will be automatically generated by the server.
		 * Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.
		 */
		id?: string;

		/** Type of the resource ("calendar#event"). */
		kind?: string;

		/** Geographic location of the event as free-form text. Optional. */
		location?: string;

		/** Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only. */
		locked?: boolean;

		/** The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event. */
		organizer?: EventOrganizer;
		originalStartTime?: EventDateTime;

		/** If set to True, Event propagation is disabled. Note that it is not the same thing as Private event properties. Optional. Immutable. The default is False. */
		privateCopy?: boolean;

		/** List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This field is omitted for single events or instances of recurring events. */
		recurrence?: Array<string>;

		/** For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable. */
		recurringEventId?: string;

		/** Information about the event's reminders for the authenticated user. */
		reminders?: EventReminders;

		/** Sequence number as per iCalendar. */
		sequence?: number;

		/** Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event. */
		source?: EventSource;
		start?: EventDateTime;

		/**
		 * Status of the event. Optional. Possible values are:
		 * - "confirmed" - The event is confirmed. This is the default status.
		 * - "tentative" - The event is tentatively confirmed.
		 * - "cancelled" - The event is cancelled (deleted). The list method returns cancelled events only on incremental sync (when syncToken or updatedMin are specified) or if the showDeleted flag is set to true. The get method always returns them.
		 * A cancelled status represents two different states depending on the event type:
		 * - Cancelled exceptions of an uncancelled recurring event indicate that this instance should no longer be presented to the user. Clients should store these events for the lifetime of the parent recurring event.
		 * Cancelled exceptions are only guaranteed to have values for the id, recurringEventId and originalStartTime fields populated. The other fields might be empty.
		 * - All other cancelled events represent deleted events. Clients should remove their locally synced copies. Such cancelled events will eventually disappear, so do not rely on them being available indefinitely.
		 * Deleted events are only guaranteed to have the id field populated.   On the organizer's calendar, cancelled events continue to expose event details (summary, location, etc.) so that they can be restored (undeleted). Similarly, the events to which the user was invited and that they manually removed continue to provide details. However, incremental sync requests with showDeleted set to false will not return these details.
		 * If an event changes its organizer (for example via the move operation) and the original organizer is not on the attendee list, it will leave behind a cancelled event where only the id field is guaranteed to be populated.
		 */
		status?: string;

		/** Title of the event. */
		summary?: string;

		/**
		 * Whether the event blocks time on the calendar. Optional. Possible values are:
		 * - "opaque" - Default value. The event does block time on the calendar. This is equivalent to setting Show me as to Busy in the Calendar UI.
		 * - "transparent" - The event does not block time on the calendar. This is equivalent to setting Show me as to Available in the Calendar UI.
		 */
		transparency?: string;

		/** Last modification time of the event (as a RFC3339 timestamp). Read-only. */
		updated?: Date;

		/**
		 * Visibility of the event. Optional. Possible values are:
		 * - "default" - Uses the default visibility for events on the calendar. This is the default value.
		 * - "public" - The event is public and event details are visible to all readers of the calendar.
		 * - "private" - The event is private and only event attendees may view event details.
		 * - "confidential" - The event is private. This value is provided for compatibility reasons.
		 */
		visibility?: string;
	}

	export interface EventAttachment {

		/**
		 * ID of the attached file. Read-only.
		 * For Google Drive files, this is the ID of the corresponding Files resource entry in the Drive API.
		 */
		fileId?: string;

		/**
		 * URL link to the attachment.
		 * For adding Google Drive file attachments use the same format as in alternateLink property of the Files resource in the Drive API.
		 * Required when adding an attachment.
		 */
		fileUrl?: string;

		/** URL link to the attachment's icon. Read-only. */
		iconLink?: string;

		/** Internet media type (MIME type) of the attachment. */
		mimeType?: string;

		/** Attachment title. */
		title?: string;
	}

	export interface EventAttendee {

		/** Number of additional guests. Optional. The default is 0. */
		additionalGuests?: number;

		/** The attendee's response comment. Optional. */
		comment?: string;

		/** The attendee's name, if available. Optional. */
		displayName?: string;

		/**
		 * The attendee's email address, if available. This field must be present when adding an attendee. It must be a valid email address as per RFC5322.
		 * Required when adding an attendee.
		 */
		email?: string;

		/** The attendee's Profile ID, if available. It corresponds to the id field in the People collection of the Google+ API */
		id?: string;

		/** Whether this is an optional attendee. Optional. The default is False. */
		optional?: boolean;

		/** Whether the attendee is the organizer of the event. Read-only. The default is False. */
		organizer?: boolean;

		/** Whether the attendee is a resource. Can only be set when the attendee is added to the event for the first time. Subsequent modifications are ignored. Optional. The default is False. */
		resource?: boolean;

		/**
		 * The attendee's response status. Possible values are:
		 * - "needsAction" - The attendee has not responded to the invitation.
		 * - "declined" - The attendee has declined the invitation.
		 * - "tentative" - The attendee has tentatively accepted the invitation.
		 * - "accepted" - The attendee has accepted the invitation.
		 */
		responseStatus?: string;

		/** Whether this entry represents the calendar on which this copy of the event appears. Read-only. The default is False. */
		self?: boolean;
	}

	export interface EventCreator {

		/** The creator's name, if available. */
		displayName?: string;

		/** The creator's email address, if available. */
		email?: string;

		/** The creator's Profile ID, if available. It corresponds to the id field in the People collection of the Google+ API */
		id?: string;

		/** Whether the creator corresponds to the calendar on which this copy of the event appears. Read-only. The default is False. */
		self?: boolean;
	}

	export interface EventDateTime {

		/** The date, in the format "yyyy-mm-dd", if this is an all-day event. */
		date?: Date;

		/** The time, as a combined date-time value (formatted according to RFC3339). A time zone offset is required unless a time zone is explicitly specified in timeZone. */
		dateTime?: Date;

		/** The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) For recurring events this field is required and specifies the time zone in which the recurrence is expanded. For single events this field is optional and indicates a custom time zone for the event start/end. */
		timeZone?: string;
	}

	export interface EventExtendedProperties {

		/** Properties that are private to the copy of the event that appears on this calendar. */
		private?: {[id: string]: string };

		/** Properties that are shared between copies of the event on other attendees' calendars. */
		shared?: {[id: string]: string };
	}

	export interface EventGadget {

		/**
		 * The gadget's display mode. Optional. Possible values are:
		 * - "icon" - The gadget displays next to the event's title in the calendar view.
		 * - "chip" - The gadget displays when the event is clicked.
		 */
		display?: string;

		/** The gadget's height in pixels. The height must be an integer greater than 0. Optional. */
		height?: number;

		/** The gadget's icon URL. The URL scheme must be HTTPS. */
		iconLink?: string;

		/** The gadget's URL. The URL scheme must be HTTPS. */
		link?: string;

		/** Preferences. */
		preferences?: {[id: string]: string };

		/** The gadget's title. */
		title?: string;

		/** The gadget's type. */
		type?: string;

		/** The gadget's width in pixels. The width must be an integer greater than 0. Optional. */
		width?: number;
	}

	export interface EventOrganizer {

		/** The organizer's name, if available. */
		displayName?: string;

		/** The organizer's email address, if available. It must be a valid email address as per RFC5322. */
		email?: string;

		/** The organizer's Profile ID, if available. It corresponds to the id field in the People collection of the Google+ API */
		id?: string;

		/** Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is False. */
		self?: boolean;
	}

	export interface EventReminders {

		/** If the event doesn't use the default reminders, this lists the reminders specific to the event, or, if not set, indicates that no reminders are set for this event. The maximum number of override reminders is 5. */
		overrides?: Array<EventReminder>;

		/** Whether the default reminders of the calendar apply to the event. */
		useDefault?: boolean;
	}

	export interface EventSource {

		/** Title of the source; for example a title of a web page or an email subject. */
		title?: string;

		/** URL of the source pointing to a resource. The URL scheme must be HTTP or HTTPS. */
		url?: string;
	}

	export interface Events {

		/**
		 * The user's access role for this calendar. Read-only. Possible values are:
		 * - "none" - The user has no access.
		 * - "freeBusyReader" - The user has read access to free/busy information.
		 * - "reader" - The user has read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
		 * - "writer" - The user has read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
		 * - "owner" - The user has ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
		 */
		accessRole?: string;

		/** The default reminders on the calendar for the authenticated user. These reminders apply to all events on this calendar that do not explicitly override them (i.e. do not have reminders.useDefault set to True). */
		defaultReminders?: Array<EventReminder>;

		/** Description of the calendar. Read-only. */
		description?: string;

		/** ETag of the collection. */
		etag?: string;

		/** List of events on the calendar. */
		items?: Array<Event>;

		/** Type of the collection ("calendar#events"). */
		kind?: string;

		/** Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided. */
		nextPageToken?: string;

		/** Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided. */
		nextSyncToken?: string;

		/** Title of the calendar. Read-only. */
		summary?: string;

		/** The time zone of the calendar. Read-only. */
		timeZone?: string;

		/** Last modification time of the calendar (as a RFC3339 timestamp). Read-only. */
		updated?: Date;
	}

	export interface FreeBusyCalendar {

		/** List of time ranges during which this calendar should be regarded as busy. */
		busy?: Array<TimePeriod>;

		/** Optional error(s) (if computation for the calendar failed). */
		errors?: Array<Error>;
	}

	export interface TimePeriod {

		/** The (exclusive) end of the time period. */
		end?: Date;

		/** The (inclusive) start of the time period. */
		start?: Date;
	}

	export interface FreeBusyGroup {

		/** List of calendars' identifiers within a group. */
		calendars?: Array<string>;

		/** Optional error(s) (if computation for the group failed). */
		errors?: Array<Error>;
	}

	export interface FreeBusyRequest {

		/** Maximal number of calendars for which FreeBusy information is to be provided. Optional. Maximum value is 50. */
		calendarExpansionMax?: number;

		/** Maximal number of calendar identifiers to be provided for a single group. Optional. An error is returned for a group with more members than this value. Maximum value is 100. */
		groupExpansionMax?: number;

		/** List of calendars and/or groups to query. */
		items?: Array<FreeBusyRequestItem>;

		/** The end of the interval for the query formatted as per RFC3339. */
		timeMax?: Date;

		/** The start of the interval for the query formatted as per RFC3339. */
		timeMin?: Date;

		/** Time zone used in the response. Optional. The default is UTC. */
		timeZone?: string;
	}

	export interface FreeBusyRequestItem {

		/** The identifier of a calendar or a group. */
		id?: string;
	}

	export interface FreeBusyResponse {

		/** List of free/busy information for calendars. */
		calendars?: {[id: string]: FreeBusyCalendar };

		/** Expansion of groups. */
		groups?: {[id: string]: FreeBusyGroup };

		/** Type of the resource ("calendar#freeBusy"). */
		kind?: string;

		/** The end of the interval. */
		timeMax?: Date;

		/** The start of the interval. */
		timeMin?: Date;
	}

	export interface Setting {

		/** ETag of the resource. */
		etag?: string;

		/** The id of the user setting. */
		id?: string;

		/** Type of the resource ("calendar#setting"). */
		kind?: string;

		/** Value of the user setting. The format of the value depends on the ID of the setting. It must always be a UTF-8 string of length up to 1024 characters. */
		value?: string;
	}

	export interface Settings {

		/** Etag of the collection. */
		etag?: string;

		/** List of user settings. */
		items?: Array<Setting>;

		/** Type of the collection ("calendar#settings"). */
		kind?: string;

		/** Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided. */
		nextPageToken?: string;

		/** Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided. */
		nextSyncToken?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a secondary calendar.
		 * Post calendars
		 * @return {void} Successful response
		 */
		Calendar_calendars_insert(requestBody: Calendar): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'calendars', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
		 * Delete calendars/{calendarId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @return {void} Successful response
		 */
		Calendar_calendars_delete(calendarId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns metadata for a calendar.
		 * Get calendars/{calendarId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @return {void} Successful response
		 */
		Calendar_calendars_get(calendarId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates metadata for a calendar. This method supports patch semantics.
		 * Patch calendars/{calendarId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @return {void} Successful response
		 */
		Calendar_calendars_patch(calendarId: string, requestBody: Calendar): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates metadata for a calendar.
		 * Put calendars/{calendarId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @return {void} Successful response
		 */
		Calendar_calendars_update(calendarId: string, requestBody: Calendar): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the rules in the access control list for the calendar.
		 * Get calendars/{calendarId}/acl
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {number} maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
		 * @param {string} pageToken Token specifying which result page to return. Optional.
		 * @param {boolean} showDeleted Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.
		 * @param {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
		 * If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
		 * Learn more about incremental synchronization.
		 * Optional. The default is to return all entries.
		 * @return {void} Successful response
		 */
		Calendar_acl_list(calendarId: string, maxResults: number, pageToken: string, showDeleted: boolean, syncToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/acl&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted + '&syncToken=' + (syncToken == null ? '' : encodeURIComponent(syncToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an access control rule.
		 * Post calendars/{calendarId}/acl
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {boolean} sendNotifications Whether to send notifications about the calendar sharing change. Optional. The default is True.
		 * @return {void} Successful response
		 */
		Calendar_acl_insert(calendarId: string, sendNotifications: boolean, requestBody: AclRule): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/acl&sendNotifications=' + sendNotifications, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Watch for changes to ACL resources.
		 * Post calendars/{calendarId}/acl/watch
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {number} maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
		 * @param {string} pageToken Token specifying which result page to return. Optional.
		 * @param {boolean} showDeleted Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.
		 * @param {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
		 * If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
		 * Learn more about incremental synchronization.
		 * Optional. The default is to return all entries.
		 * @return {void} Successful response
		 */
		Calendar_acl_watch(calendarId: string, maxResults: number, pageToken: string, showDeleted: boolean, syncToken: string, requestBody: Channel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/acl/watch&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted + '&syncToken=' + (syncToken == null ? '' : encodeURIComponent(syncToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an access control rule.
		 * Delete calendars/{calendarId}/acl/{ruleId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {string} ruleId ACL rule identifier.
		 * @return {void} Successful response
		 */
		Calendar_acl_delete(calendarId: string, ruleId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/acl/' + (ruleId == null ? '' : encodeURIComponent(ruleId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns an access control rule.
		 * Get calendars/{calendarId}/acl/{ruleId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {string} ruleId ACL rule identifier.
		 * @return {void} Successful response
		 */
		Calendar_acl_get(calendarId: string, ruleId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/acl/' + (ruleId == null ? '' : encodeURIComponent(ruleId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an access control rule. This method supports patch semantics.
		 * Patch calendars/{calendarId}/acl/{ruleId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {string} ruleId ACL rule identifier.
		 * @param {boolean} sendNotifications Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.
		 * @return {void} Successful response
		 */
		Calendar_acl_patch(calendarId: string, ruleId: string, sendNotifications: boolean, requestBody: AclRule): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/acl/' + (ruleId == null ? '' : encodeURIComponent(ruleId)) + '&sendNotifications=' + sendNotifications, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an access control rule.
		 * Put calendars/{calendarId}/acl/{ruleId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {string} ruleId ACL rule identifier.
		 * @param {boolean} sendNotifications Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.
		 * @return {void} Successful response
		 */
		Calendar_acl_update(calendarId: string, ruleId: string, sendNotifications: boolean, requestBody: AclRule): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/acl/' + (ruleId == null ? '' : encodeURIComponent(ruleId)) + '&sendNotifications=' + sendNotifications, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
		 * Post calendars/{calendarId}/clear
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @return {void} Successful response
		 */
		Calendar_calendars_clear(calendarId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/clear', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns events on the specified calendar.
		 * Get calendars/{calendarId}/events
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {boolean} alwaysIncludeEmail Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).
		 * @param {string} iCalUID Specifies event ID in the iCalendar format to be included in the response. Optional.
		 * @param {number} maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
		 * @param {number} maxResults Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
		 * @param {Calendar_events_listOrderBy} orderBy The order of the events returned in the result. Optional. The default is an unspecified, stable order.
		 * @param {string} pageToken Token specifying which result page to return. Optional.
		 * @param {Array<string>} privateExtendedProperty Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.
		 * @param {string} q Free text search terms to find events that match these terms in any field, except for extended properties. Optional.
		 * @param {Array<string>} sharedExtendedProperty Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.
		 * @param {boolean} showDeleted Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.
		 * @param {boolean} showHiddenInvitations Whether to include hidden invitations in the result. Optional. The default is False.
		 * @param {boolean} singleEvents Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.
		 * @param {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
		 * There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.
		 * These are: 
		 * - iCalUID 
		 * - orderBy 
		 * - privateExtendedProperty 
		 * - q 
		 * - sharedExtendedProperty 
		 * - timeMin 
		 * - timeMax 
		 * - updatedMin If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
		 * Learn more about incremental synchronization.
		 * Optional. The default is to return all entries.
		 * @param {string} timeMax Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin.
		 * @param {string} timeMin Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax.
		 * @param {string} timeZone Time zone used in the response. Optional. The default is the time zone of the calendar.
		 * @param {string} updatedMin Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.
		 * @return {void} Successful response
		 */
		Calendar_events_list(calendarId: string, alwaysIncludeEmail: boolean, iCalUID: string, maxAttendees: number, maxResults: number, orderBy: Calendar_events_listOrderBy, pageToken: string, privateExtendedProperty: Array<string>, q: string, sharedExtendedProperty: Array<string>, showDeleted: boolean, showHiddenInvitations: boolean, singleEvents: boolean, syncToken: string, timeMax: string, timeMin: string, timeZone: string, updatedMin: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/events&alwaysIncludeEmail=' + alwaysIncludeEmail + '&iCalUID=' + (iCalUID == null ? '' : encodeURIComponent(iCalUID)) + '&maxAttendees=' + maxAttendees + '&maxResults=' + maxResults + '&orderBy=' + orderBy + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&' + privateExtendedProperty.map(z => `privateExtendedProperty=${encodeURIComponent(z)}`).join('&') + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&' + sharedExtendedProperty.map(z => `sharedExtendedProperty=${encodeURIComponent(z)}`).join('&') + '&showDeleted=' + showDeleted + '&showHiddenInvitations=' + showHiddenInvitations + '&singleEvents=' + singleEvents + '&syncToken=' + (syncToken == null ? '' : encodeURIComponent(syncToken)) + '&timeMax=' + (timeMax == null ? '' : encodeURIComponent(timeMax)) + '&timeMin=' + (timeMin == null ? '' : encodeURIComponent(timeMin)) + '&timeZone=' + (timeZone == null ? '' : encodeURIComponent(timeZone)) + '&updatedMin=' + (updatedMin == null ? '' : encodeURIComponent(updatedMin)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an event.
		 * Post calendars/{calendarId}/events
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {number} conferenceDataVersion Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
		 * @param {number} maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
		 * @param {boolean} sendNotifications Deprecated. Please use sendUpdates instead.
		 * Whether to send notifications about the creation of the new event. Note that some emails might still be sent even if you set the value to false. The default is false.
		 * @param {Calendar_events_insertSendUpdates} sendUpdates Whether to send notifications about the creation of the new event. Note that some emails might still be sent. The default is false.
		 * @param {boolean} supportsAttachments Whether API client performing operation supports event attachments. Optional. The default is False.
		 * @return {void} Successful response
		 */
		Calendar_events_insert(calendarId: string, conferenceDataVersion: number, maxAttendees: number, sendNotifications: boolean, sendUpdates: Calendar_events_insertSendUpdates, supportsAttachments: boolean, requestBody: Event): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/events&conferenceDataVersion=' + conferenceDataVersion + '&maxAttendees=' + maxAttendees + '&sendNotifications=' + sendNotifications + '&sendUpdates=' + sendUpdates + '&supportsAttachments=' + supportsAttachments, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Imports an event. This operation is used to add a private copy of an existing event to a calendar.
		 * Post calendars/{calendarId}/events/import
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {number} conferenceDataVersion Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
		 * @param {boolean} supportsAttachments Whether API client performing operation supports event attachments. Optional. The default is False.
		 * @return {void} Successful response
		 */
		Calendar_events_import(calendarId: string, conferenceDataVersion: number, supportsAttachments: boolean, requestBody: Event): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/events/import&conferenceDataVersion=' + conferenceDataVersion + '&supportsAttachments=' + supportsAttachments, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an event based on a simple text string.
		 * Post calendars/{calendarId}/events/quickAdd
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {string} text The text describing the event to be created.
		 * @param {boolean} sendNotifications Deprecated. Please use sendUpdates instead.
		 * Whether to send notifications about the creation of the event. Note that some emails might still be sent even if you set the value to false. The default is false.
		 * @param {Calendar_events_insertSendUpdates} sendUpdates Guests who should receive notifications about the creation of the new event.
		 * @return {void} Successful response
		 */
		Calendar_events_quickAdd(calendarId: string, text: string, sendNotifications: boolean, sendUpdates: Calendar_events_insertSendUpdates): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/events/quickAdd&text=' + (text == null ? '' : encodeURIComponent(text)) + '&sendNotifications=' + sendNotifications + '&sendUpdates=' + sendUpdates, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Watch for changes to Events resources.
		 * Post calendars/{calendarId}/events/watch
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {boolean} alwaysIncludeEmail Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).
		 * @param {string} iCalUID Specifies event ID in the iCalendar format to be included in the response. Optional.
		 * @param {number} maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
		 * @param {number} maxResults Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
		 * @param {Calendar_events_listOrderBy} orderBy The order of the events returned in the result. Optional. The default is an unspecified, stable order.
		 * @param {string} pageToken Token specifying which result page to return. Optional.
		 * @param {Array<string>} privateExtendedProperty Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.
		 * @param {string} q Free text search terms to find events that match these terms in any field, except for extended properties. Optional.
		 * @param {Array<string>} sharedExtendedProperty Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.
		 * @param {boolean} showDeleted Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.
		 * @param {boolean} showHiddenInvitations Whether to include hidden invitations in the result. Optional. The default is False.
		 * @param {boolean} singleEvents Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.
		 * @param {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
		 * There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.
		 * These are: 
		 * - iCalUID 
		 * - orderBy 
		 * - privateExtendedProperty 
		 * - q 
		 * - sharedExtendedProperty 
		 * - timeMin 
		 * - timeMax 
		 * - updatedMin If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
		 * Learn more about incremental synchronization.
		 * Optional. The default is to return all entries.
		 * @param {string} timeMax Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin.
		 * @param {string} timeMin Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax.
		 * @param {string} timeZone Time zone used in the response. Optional. The default is the time zone of the calendar.
		 * @param {string} updatedMin Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.
		 * @return {void} Successful response
		 */
		Calendar_events_watch(calendarId: string, alwaysIncludeEmail: boolean, iCalUID: string, maxAttendees: number, maxResults: number, orderBy: Calendar_events_listOrderBy, pageToken: string, privateExtendedProperty: Array<string>, q: string, sharedExtendedProperty: Array<string>, showDeleted: boolean, showHiddenInvitations: boolean, singleEvents: boolean, syncToken: string, timeMax: string, timeMin: string, timeZone: string, updatedMin: string, requestBody: Channel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/events/watch&alwaysIncludeEmail=' + alwaysIncludeEmail + '&iCalUID=' + (iCalUID == null ? '' : encodeURIComponent(iCalUID)) + '&maxAttendees=' + maxAttendees + '&maxResults=' + maxResults + '&orderBy=' + orderBy + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&' + privateExtendedProperty.map(z => `privateExtendedProperty=${encodeURIComponent(z)}`).join('&') + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&' + sharedExtendedProperty.map(z => `sharedExtendedProperty=${encodeURIComponent(z)}`).join('&') + '&showDeleted=' + showDeleted + '&showHiddenInvitations=' + showHiddenInvitations + '&singleEvents=' + singleEvents + '&syncToken=' + (syncToken == null ? '' : encodeURIComponent(syncToken)) + '&timeMax=' + (timeMax == null ? '' : encodeURIComponent(timeMax)) + '&timeMin=' + (timeMin == null ? '' : encodeURIComponent(timeMin)) + '&timeZone=' + (timeZone == null ? '' : encodeURIComponent(timeZone)) + '&updatedMin=' + (updatedMin == null ? '' : encodeURIComponent(updatedMin)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an event.
		 * Delete calendars/{calendarId}/events/{eventId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {string} eventId Event identifier.
		 * @param {boolean} sendNotifications Deprecated. Please use sendUpdates instead.
		 * Whether to send notifications about the deletion of the event. Note that some emails might still be sent even if you set the value to false. The default is false.
		 * @param {Calendar_events_insertSendUpdates} sendUpdates Guests who should receive notifications about the deletion of the event.
		 * @return {void} Successful response
		 */
		Calendar_events_delete(calendarId: string, eventId: string, sendNotifications: boolean, sendUpdates: Calendar_events_insertSendUpdates): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/events/' + (eventId == null ? '' : encodeURIComponent(eventId)) + '&sendNotifications=' + sendNotifications + '&sendUpdates=' + sendUpdates, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns an event.
		 * Get calendars/{calendarId}/events/{eventId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {string} eventId Event identifier.
		 * @param {boolean} alwaysIncludeEmail Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).
		 * @param {number} maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
		 * @param {string} timeZone Time zone used in the response. Optional. The default is the time zone of the calendar.
		 * @return {void} Successful response
		 */
		Calendar_events_get(calendarId: string, eventId: string, alwaysIncludeEmail: boolean, maxAttendees: number, timeZone: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/events/' + (eventId == null ? '' : encodeURIComponent(eventId)) + '&alwaysIncludeEmail=' + alwaysIncludeEmail + '&maxAttendees=' + maxAttendees + '&timeZone=' + (timeZone == null ? '' : encodeURIComponent(timeZone)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an event. This method supports patch semantics.
		 * Patch calendars/{calendarId}/events/{eventId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {string} eventId Event identifier.
		 * @param {boolean} alwaysIncludeEmail Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).
		 * @param {number} conferenceDataVersion Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
		 * @param {number} maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
		 * @param {boolean} sendNotifications Deprecated. Please use sendUpdates instead.
		 * Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false.
		 * @param {Calendar_events_insertSendUpdates} sendUpdates Guests who should receive notifications about the event update (for example, title changes, etc.).
		 * @param {boolean} supportsAttachments Whether API client performing operation supports event attachments. Optional. The default is False.
		 * @return {void} Successful response
		 */
		Calendar_events_patch(calendarId: string, eventId: string, alwaysIncludeEmail: boolean, conferenceDataVersion: number, maxAttendees: number, sendNotifications: boolean, sendUpdates: Calendar_events_insertSendUpdates, supportsAttachments: boolean, requestBody: Event): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/events/' + (eventId == null ? '' : encodeURIComponent(eventId)) + '&alwaysIncludeEmail=' + alwaysIncludeEmail + '&conferenceDataVersion=' + conferenceDataVersion + '&maxAttendees=' + maxAttendees + '&sendNotifications=' + sendNotifications + '&sendUpdates=' + sendUpdates + '&supportsAttachments=' + supportsAttachments, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an event.
		 * Put calendars/{calendarId}/events/{eventId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {string} eventId Event identifier.
		 * @param {boolean} alwaysIncludeEmail Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).
		 * @param {number} conferenceDataVersion Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
		 * @param {number} maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
		 * @param {boolean} sendNotifications Deprecated. Please use sendUpdates instead.
		 * Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false.
		 * @param {Calendar_events_insertSendUpdates} sendUpdates Guests who should receive notifications about the event update (for example, title changes, etc.).
		 * @param {boolean} supportsAttachments Whether API client performing operation supports event attachments. Optional. The default is False.
		 * @return {void} Successful response
		 */
		Calendar_events_update(calendarId: string, eventId: string, alwaysIncludeEmail: boolean, conferenceDataVersion: number, maxAttendees: number, sendNotifications: boolean, sendUpdates: Calendar_events_insertSendUpdates, supportsAttachments: boolean, requestBody: Event): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/events/' + (eventId == null ? '' : encodeURIComponent(eventId)) + '&alwaysIncludeEmail=' + alwaysIncludeEmail + '&conferenceDataVersion=' + conferenceDataVersion + '&maxAttendees=' + maxAttendees + '&sendNotifications=' + sendNotifications + '&sendUpdates=' + sendUpdates + '&supportsAttachments=' + supportsAttachments, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns instances of the specified recurring event.
		 * Get calendars/{calendarId}/events/{eventId}/instances
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {string} eventId Recurring event identifier.
		 * @param {boolean} alwaysIncludeEmail Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).
		 * @param {number} maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
		 * @param {number} maxResults Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
		 * @param {string} originalStart The original start time of the instance in the result. Optional.
		 * @param {string} pageToken Token specifying which result page to return. Optional.
		 * @param {boolean} showDeleted Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events will still be included if singleEvents is False. Optional. The default is False.
		 * @param {string} timeMax Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset.
		 * @param {string} timeMin Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset.
		 * @param {string} timeZone Time zone used in the response. Optional. The default is the time zone of the calendar.
		 * @return {void} Successful response
		 */
		Calendar_events_instances(calendarId: string, eventId: string, alwaysIncludeEmail: boolean, maxAttendees: number, maxResults: number, originalStart: string, pageToken: string, showDeleted: boolean, timeMax: string, timeMin: string, timeZone: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/events/' + (eventId == null ? '' : encodeURIComponent(eventId)) + '/instances&alwaysIncludeEmail=' + alwaysIncludeEmail + '&maxAttendees=' + maxAttendees + '&maxResults=' + maxResults + '&originalStart=' + (originalStart == null ? '' : encodeURIComponent(originalStart)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted + '&timeMax=' + (timeMax == null ? '' : encodeURIComponent(timeMax)) + '&timeMin=' + (timeMin == null ? '' : encodeURIComponent(timeMin)) + '&timeZone=' + (timeZone == null ? '' : encodeURIComponent(timeZone)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Moves an event to another calendar, i.e. changes an event's organizer.
		 * Post calendars/{calendarId}/events/{eventId}/move
		 * @param {string} calendarId Calendar identifier of the source calendar where the event currently is on.
		 * @param {string} eventId Event identifier.
		 * @param {string} destination Calendar identifier of the target calendar where the event is to be moved to.
		 * @param {boolean} sendNotifications Deprecated. Please use sendUpdates instead.
		 * Whether to send notifications about the change of the event's organizer. Note that some emails might still be sent even if you set the value to false. The default is false.
		 * @param {Calendar_events_insertSendUpdates} sendUpdates Guests who should receive notifications about the change of the event's organizer.
		 * @return {void} Successful response
		 */
		Calendar_events_move(calendarId: string, eventId: string, destination: string, sendNotifications: boolean, sendUpdates: Calendar_events_insertSendUpdates): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'calendars/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '/events/' + (eventId == null ? '' : encodeURIComponent(eventId)) + '/move&destination=' + (destination == null ? '' : encodeURIComponent(destination)) + '&sendNotifications=' + sendNotifications + '&sendUpdates=' + sendUpdates, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stop watching resources through this channel
		 * Post channels/stop
		 * @return {void} Successful response
		 */
		Calendar_channels_stop(requestBody: Channel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'channels/stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the color definitions for calendars and events.
		 * Get colors
		 * @return {void} Successful response
		 */
		Calendar_colors_get(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'colors', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns free/busy information for a set of calendars.
		 * Post freeBusy
		 * @return {void} Successful response
		 */
		Calendar_freebusy_query(requestBody: FreeBusyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'freeBusy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the calendars on the user's calendar list.
		 * Get users/me/calendarList
		 * @param {number} maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
		 * @param {Calendar_calendarList_listMinAccessRole} minAccessRole The minimum access role for the user in the returned entries. Optional. The default is no restriction.
		 * @param {string} pageToken Token specifying which result page to return. Optional.
		 * @param {boolean} showDeleted Whether to include deleted calendar list entries in the result. Optional. The default is False.
		 * @param {boolean} showHidden Whether to show hidden entries. Optional. The default is False.
		 * @param {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.
		 * To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.
		 * If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
		 * Learn more about incremental synchronization.
		 * Optional. The default is to return all entries.
		 * @return {void} Successful response
		 */
		Calendar_calendarList_list(maxResults: number, minAccessRole: Calendar_calendarList_listMinAccessRole, pageToken: string, showDeleted: boolean, showHidden: boolean, syncToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/me/calendarList?maxResults=' + maxResults + '&minAccessRole=' + minAccessRole + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted + '&showHidden=' + showHidden + '&syncToken=' + (syncToken == null ? '' : encodeURIComponent(syncToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts an existing calendar into the user's calendar list.
		 * Post users/me/calendarList
		 * @param {boolean} colorRgbFormat Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
		 * @return {void} Successful response
		 */
		Calendar_calendarList_insert(colorRgbFormat: boolean, requestBody: CalendarListEntry): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/me/calendarList?colorRgbFormat=' + colorRgbFormat, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Watch for changes to CalendarList resources.
		 * Post users/me/calendarList/watch
		 * @param {number} maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
		 * @param {Calendar_calendarList_listMinAccessRole} minAccessRole The minimum access role for the user in the returned entries. Optional. The default is no restriction.
		 * @param {string} pageToken Token specifying which result page to return. Optional.
		 * @param {boolean} showDeleted Whether to include deleted calendar list entries in the result. Optional. The default is False.
		 * @param {boolean} showHidden Whether to show hidden entries. Optional. The default is False.
		 * @param {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.
		 * To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.
		 * If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
		 * Learn more about incremental synchronization.
		 * Optional. The default is to return all entries.
		 * @return {void} Successful response
		 */
		Calendar_calendarList_watch(maxResults: number, minAccessRole: Calendar_calendarList_listMinAccessRole, pageToken: string, showDeleted: boolean, showHidden: boolean, syncToken: string, requestBody: Channel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/me/calendarList/watch?maxResults=' + maxResults + '&minAccessRole=' + minAccessRole + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted + '&showHidden=' + showHidden + '&syncToken=' + (syncToken == null ? '' : encodeURIComponent(syncToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a calendar from the user's calendar list.
		 * Delete users/me/calendarList/{calendarId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @return {void} Successful response
		 */
		Calendar_calendarList_delete(calendarId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/me/calendarList/' + (calendarId == null ? '' : encodeURIComponent(calendarId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a calendar from the user's calendar list.
		 * Get users/me/calendarList/{calendarId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @return {void} Successful response
		 */
		Calendar_calendarList_get(calendarId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/me/calendarList/' + (calendarId == null ? '' : encodeURIComponent(calendarId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing calendar on the user's calendar list. This method supports patch semantics.
		 * Patch users/me/calendarList/{calendarId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {boolean} colorRgbFormat Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
		 * @return {void} Successful response
		 */
		Calendar_calendarList_patch(calendarId: string, colorRgbFormat: boolean, requestBody: CalendarListEntry): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'users/me/calendarList/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '&colorRgbFormat=' + colorRgbFormat, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing calendar on the user's calendar list.
		 * Put users/me/calendarList/{calendarId}
		 * @param {string} calendarId Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
		 * @param {boolean} colorRgbFormat Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
		 * @return {void} Successful response
		 */
		Calendar_calendarList_update(calendarId: string, colorRgbFormat: boolean, requestBody: CalendarListEntry): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/me/calendarList/' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '&colorRgbFormat=' + colorRgbFormat, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all user settings for the authenticated user.
		 * Get users/me/settings
		 * @param {number} maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
		 * @param {string} pageToken Token specifying which result page to return. Optional.
		 * @param {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.
		 * If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
		 * Learn more about incremental synchronization.
		 * Optional. The default is to return all entries.
		 * @return {void} Successful response
		 */
		Calendar_settings_list(maxResults: number, pageToken: string, syncToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/me/settings?maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&syncToken=' + (syncToken == null ? '' : encodeURIComponent(syncToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Watch for changes to Settings resources.
		 * Post users/me/settings/watch
		 * @param {number} maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
		 * @param {string} pageToken Token specifying which result page to return. Optional.
		 * @param {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.
		 * If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
		 * Learn more about incremental synchronization.
		 * Optional. The default is to return all entries.
		 * @return {void} Successful response
		 */
		Calendar_settings_watch(maxResults: number, pageToken: string, syncToken: string, requestBody: Channel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/me/settings/watch?maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&syncToken=' + (syncToken == null ? '' : encodeURIComponent(syncToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single user setting.
		 * Get users/me/settings/{setting}
		 * @param {string} setting The id of the user setting.
		 * @return {void} Successful response
		 */
		Calendar_settings_get(setting: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/me/settings/' + (setting == null ? '' : encodeURIComponent(setting)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum Calendar_events_listOrderBy { startTime = 0, updated = 1 }

	export enum Calendar_events_insertSendUpdates { all = 0, externalOnly = 1, none = 2 }

	export enum Calendar_calendarList_listMinAccessRole { freeBusyReader = 0, owner = 1, reader = 2, writer = 3 }

}

