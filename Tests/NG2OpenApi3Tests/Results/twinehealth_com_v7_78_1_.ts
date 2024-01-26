import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ActionMetric {
		goal?: string | null;
		metric_type?: string | null;
		unit?: string | null;
		validations?: ActionMetricValidations;
	}
	export interface ActionMetricFormProperties {
		goal: FormControl<string | null | undefined>,
		metric_type: FormControl<string | null | undefined>,
		unit: FormControl<string | null | undefined>,
	}
	export function CreateActionMetricFormGroup() {
		return new FormGroup<ActionMetricFormProperties>({
			goal: new FormControl<string | null | undefined>(undefined),
			metric_type: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActionMetricValidations {
		maximum?: ActionMetricValidationsMaximum;
		minimum?: ActionMetricValidationsMinimum;
	}
	export interface ActionMetricValidationsFormProperties {
	}
	export function CreateActionMetricValidationsFormGroup() {
		return new FormGroup<ActionMetricValidationsFormProperties>({
		});

	}

	export interface ActionMetricValidationsMaximum {
		unit?: string | null;
		value?: number | null;
	}
	export interface ActionMetricValidationsMaximumFormProperties {
		unit: FormControl<string | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateActionMetricValidationsMaximumFormGroup() {
		return new FormGroup<ActionMetricValidationsMaximumFormProperties>({
			unit: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ActionMetricValidationsMinimum {
		unit?: string | null;
		value?: number | null;
	}
	export interface ActionMetricValidationsMinimumFormProperties {
		unit: FormControl<string | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateActionMetricValidationsMinimumFormGroup() {
		return new FormGroup<ActionMetricValidationsMinimumFormProperties>({
			unit: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ActionResource {
		attributes?: ActionResourceAttributes;

		/** Required */
		id: string;
		relationships?: ActionResourceRelationships;

		/** Required */
		type: string;
	}
	export interface ActionResourceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateActionResourceFormGroup() {
		return new FormGroup<ActionResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ActionResourceAttributes {
		_thread?: string | null;
		adherence?: ActionResourceAttributesAdherence;
		details?: string | null;

		/** Required */
		effective_from: string;
		effective_to?: string | null;
		frequency_goal?: ActionResourceAttributesFrequency_goal;
		identifiers?: Array<Identifier>;
		intake?: string | null;
		metric_required?: boolean | null;
		metrics?: Array<ActionMetric>;
		static_title?: string | null;

		/** Required */
		title: string;
		tracking?: boolean | null;

		/** Required */
		type: ActionResourceAttributesType;
		windows?: Array<ActionWindow>;
	}
	export interface ActionResourceAttributesFormProperties {
		_thread: FormControl<string | null | undefined>,
		details: FormControl<string | null | undefined>,

		/** Required */
		effective_from: FormControl<string | null | undefined>,
		effective_to: FormControl<string | null | undefined>,
		intake: FormControl<string | null | undefined>,
		metric_required: FormControl<boolean | null | undefined>,
		static_title: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
		tracking: FormControl<boolean | null | undefined>,

		/** Required */
		type: FormControl<ActionResourceAttributesType | null | undefined>,
	}
	export function CreateActionResourceAttributesFormGroup() {
		return new FormGroup<ActionResourceAttributesFormProperties>({
			_thread: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			effective_from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			effective_to: new FormControl<string | null | undefined>(undefined),
			intake: new FormControl<string | null | undefined>(undefined),
			metric_required: new FormControl<boolean | null | undefined>(undefined),
			static_title: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tracking: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<ActionResourceAttributesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ActionResourceAttributesAdherence {
		complete?: number | null;
		due?: number | null;
		streak?: ActionResourceAttributesAdherenceStreak;
	}
	export interface ActionResourceAttributesAdherenceFormProperties {
		complete: FormControl<number | null | undefined>,
		due: FormControl<number | null | undefined>,
	}
	export function CreateActionResourceAttributesAdherenceFormGroup() {
		return new FormGroup<ActionResourceAttributesAdherenceFormProperties>({
			complete: new FormControl<number | null | undefined>(undefined),
			due: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ActionResourceAttributesAdherenceStreak {
		count?: number | null;
		updated_at?: string | null;
	}
	export interface ActionResourceAttributesAdherenceStreakFormProperties {
		count: FormControl<number | null | undefined>,
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateActionResourceAttributesAdherenceStreakFormGroup() {
		return new FormGroup<ActionResourceAttributesAdherenceStreakFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActionResourceAttributesFrequency_goal {
		weeks?: ActionResourceAttributesFrequency_goalWeeks;
	}
	export interface ActionResourceAttributesFrequency_goalFormProperties {
	}
	export function CreateActionResourceAttributesFrequency_goalFormGroup() {
		return new FormGroup<ActionResourceAttributesFrequency_goalFormProperties>({
		});

	}

	export interface ActionResourceAttributesFrequency_goalWeeks {
		days?: Array<number>;
	}
	export interface ActionResourceAttributesFrequency_goalWeeksFormProperties {
	}
	export function CreateActionResourceAttributesFrequency_goalWeeksFormGroup() {
		return new FormGroup<ActionResourceAttributesFrequency_goalWeeksFormProperties>({
		});

	}

	export interface Identifier {
		label?: string | null;

		/** Required */
		system: string;

		/** Required */
		value: string;
	}
	export interface IdentifierFormProperties {
		label: FormControl<string | null | undefined>,

		/** Required */
		system: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateIdentifierFormGroup() {
		return new FormGroup<IdentifierFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			system: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ActionResourceAttributesType { other_lifestyle = 0 }

	export interface ActionWindow {
		_id?: string | null;
		title?: string | null;

		/** Required */
		type: string;
	}
	export interface ActionWindowFormProperties {
		_id: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateActionWindowFormGroup() {
		return new FormGroup<ActionWindowFormProperties>({
			_id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ActionResourceRelationships {
		plan?: ActionResourceRelationshipsPlan;
	}
	export interface ActionResourceRelationshipsFormProperties {
	}
	export function CreateActionResourceRelationshipsFormGroup() {
		return new FormGroup<ActionResourceRelationshipsFormProperties>({
		});

	}

	export interface ActionResourceRelationshipsPlan {
		data?: ActionResourceRelationshipsPlanData;
		links?: string | null;
	}
	export interface ActionResourceRelationshipsPlanFormProperties {
		links: FormControl<string | null | undefined>,
	}
	export function CreateActionResourceRelationshipsPlanFormGroup() {
		return new FormGroup<ActionResourceRelationshipsPlanFormProperties>({
			links: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActionResourceRelationshipsPlanData {
		id?: string | null;
		type?: string | null;
	}
	export interface ActionResourceRelationshipsPlanDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateActionResourceRelationshipsPlanDataFormGroup() {
		return new FormGroup<ActionResourceRelationshipsPlanDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Address {
		city?: string | null;
		country?: string | null;
		district?: string | null;
		lines?: Array<string>;
		postal_code?: string | null;
		state?: string | null;
		text?: string | null;
		type?: string | null;
		use?: string | null;
	}
	export interface AddressFormProperties {
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		district: FormControl<string | null | undefined>,
		postal_code: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		use: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			district: new FormControl<string | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			use: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ArchiveHistory {
		archived?: boolean | null;
		modified_at?: string | null;
		notes?: string | null;
		reason?: string | null;
	}
	export interface ArchiveHistoryFormProperties {
		archived: FormControl<boolean | null | undefined>,
		modified_at: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateArchiveHistoryFormGroup() {
		return new FormGroup<ArchiveHistoryFormProperties>({
			archived: new FormControl<boolean | null | undefined>(undefined),
			modified_at: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BundleResource {
		attributes?: BundleResourceAttributes;

		/** Required */
		id: string;
		relationships?: BundleResourceRelationships;

		/** Required */
		type: string;
	}
	export interface BundleResourceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateBundleResourceFormGroup() {
		return new FormGroup<BundleResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BundleResourceAttributes {
		_thread?: string | null;

		/** Required */
		effective_from: string;
		effective_to?: string | null;

		/** Required */
		title: string;

		/** Required */
		type: string;
	}
	export interface BundleResourceAttributesFormProperties {
		_thread: FormControl<string | null | undefined>,

		/** Required */
		effective_from: FormControl<string | null | undefined>,
		effective_to: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateBundleResourceAttributesFormGroup() {
		return new FormGroup<BundleResourceAttributesFormProperties>({
			_thread: new FormControl<string | null | undefined>(undefined),
			effective_from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			effective_to: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BundleResourceRelationships {
		actions?: BundleResourceRelationshipsActions;
		plan?: BundleResourceRelationshipsPlan;
	}
	export interface BundleResourceRelationshipsFormProperties {
	}
	export function CreateBundleResourceRelationshipsFormGroup() {
		return new FormGroup<BundleResourceRelationshipsFormProperties>({
		});

	}

	export interface BundleResourceRelationshipsActions {
		data?: BundleResourceRelationshipsActionsData;
		links?: string | null;
	}
	export interface BundleResourceRelationshipsActionsFormProperties {
		links: FormControl<string | null | undefined>,
	}
	export function CreateBundleResourceRelationshipsActionsFormGroup() {
		return new FormGroup<BundleResourceRelationshipsActionsFormProperties>({
			links: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BundleResourceRelationshipsActionsData {
		id?: string | null;
		type?: string | null;
	}
	export interface BundleResourceRelationshipsActionsDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateBundleResourceRelationshipsActionsDataFormGroup() {
		return new FormGroup<BundleResourceRelationshipsActionsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BundleResourceRelationshipsPlan {
		data?: BundleResourceRelationshipsPlanData;
		links?: string | null;
	}
	export interface BundleResourceRelationshipsPlanFormProperties {
		links: FormControl<string | null | undefined>,
	}
	export function CreateBundleResourceRelationshipsPlanFormGroup() {
		return new FormGroup<BundleResourceRelationshipsPlanFormProperties>({
			links: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BundleResourceRelationshipsPlanData {
		id?: string | null;
		type?: string | null;
	}
	export interface BundleResourceRelationshipsPlanDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateBundleResourceRelationshipsPlanDataFormGroup() {
		return new FormGroup<BundleResourceRelationshipsPlanDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CalendarEventResource {
		attributes?: CalendarEventResourceAttributes;
		id?: string | null;
		links?: CalendarEventResourceLinks;
		relationships?: CalendarEventResourceRelationships;
		type?: CalendarEventResourceType | null;
	}
	export interface CalendarEventResourceFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<CalendarEventResourceType | null | undefined>,
	}
	export function CreateCalendarEventResourceFormGroup() {
		return new FormGroup<CalendarEventResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CalendarEventResourceType | null | undefined>(undefined),
		});

	}

	export interface CalendarEventResourceAttributes {

		/** True if the calendar event is an all day event, false otherwise. Must be set to true for `plan-check-in` event type. If it is true, then `start_at` and `end_at` must also be set to beginning of day, except `plan-check-in` event type does not need an `end_at` date. If it is false, then `start_at` and `end_at` must be on the same day. */
		all_day?: boolean | null;

		/** List of attendees for the calendar event */
		CalendarEventResourceAttributesAttendees?: Array<CalendarEventResourceAttributesAttendees>;

		/** The date and time when the calendar event is marked as completed. Only valid for `plan-check-in` event type. */
		completed_at?: string | null;

		/** The coach who marked the calendar event as completed. Only valid for `plan-check-in` event type. */
		completed_by?: string | null;
		description?: string | null;

		/** The date and time when the calendar event ends. Not valid for `plan-check-in` event type. */
		end_at?: string | null;
		location?: string | null;

		/** The date and time when the calendar event starts */
		start_at?: string | null;

		/** The time zone in which the dates for the calendar event are specified */
		time_zone?: string | null;

		/** The title of the calendar event. Must not be empty or null */
		title?: string | null;

		/** The type of calendar event. Immutable after event creation. */
		type?: CalendarEventResourceAttributesType | null;
	}
	export interface CalendarEventResourceAttributesFormProperties {

		/** True if the calendar event is an all day event, false otherwise. Must be set to true for `plan-check-in` event type. If it is true, then `start_at` and `end_at` must also be set to beginning of day, except `plan-check-in` event type does not need an `end_at` date. If it is false, then `start_at` and `end_at` must be on the same day. */
		all_day: FormControl<boolean | null | undefined>,

		/** The date and time when the calendar event is marked as completed. Only valid for `plan-check-in` event type. */
		completed_at: FormControl<string | null | undefined>,

		/** The coach who marked the calendar event as completed. Only valid for `plan-check-in` event type. */
		completed_by: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** The date and time when the calendar event ends. Not valid for `plan-check-in` event type. */
		end_at: FormControl<string | null | undefined>,
		location: FormControl<string | null | undefined>,

		/** The date and time when the calendar event starts */
		start_at: FormControl<string | null | undefined>,

		/** The time zone in which the dates for the calendar event are specified */
		time_zone: FormControl<string | null | undefined>,

		/** The title of the calendar event. Must not be empty or null */
		title: FormControl<string | null | undefined>,

		/** The type of calendar event. Immutable after event creation. */
		type: FormControl<CalendarEventResourceAttributesType | null | undefined>,
	}
	export function CreateCalendarEventResourceAttributesFormGroup() {
		return new FormGroup<CalendarEventResourceAttributesFormProperties>({
			all_day: new FormControl<boolean | null | undefined>(undefined),
			completed_at: new FormControl<string | null | undefined>(undefined),
			completed_by: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			end_at: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			start_at: new FormControl<string | null | undefined>(undefined),
			time_zone: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CalendarEventResourceAttributesType | null | undefined>(undefined),
		});

	}

	export interface CalendarEventResourceAttributesAttendees {

		/** Status of responses from attendees */
		response_status?: CalendarEventResourceAttributesAttendeesResponse_status | null;
		user?: string | null;
	}
	export interface CalendarEventResourceAttributesAttendeesFormProperties {

		/** Status of responses from attendees */
		response_status: FormControl<CalendarEventResourceAttributesAttendeesResponse_status | null | undefined>,
		user: FormControl<string | null | undefined>,
	}
	export function CreateCalendarEventResourceAttributesAttendeesFormGroup() {
		return new FormGroup<CalendarEventResourceAttributesAttendeesFormProperties>({
			response_status: new FormControl<CalendarEventResourceAttributesAttendeesResponse_status | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CalendarEventResourceAttributesAttendeesResponse_status { needsAction = 0, declined = 1, tentative = 2, accepted = 3 }

	export enum CalendarEventResourceAttributesType { 'plan-check-in' = 0, reminder = 1, 'telephone-call' = 2, 'office-visit' = 3, 'video-call' = 4 }

	export interface CalendarEventResourceLinks {
		self?: string | null;
	}
	export interface CalendarEventResourceLinksFormProperties {
		self: FormControl<string | null | undefined>,
	}
	export function CreateCalendarEventResourceLinksFormGroup() {
		return new FormGroup<CalendarEventResourceLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.pattern('/calendar_event/[0-9a-z]+')]),
		});

	}

	export interface CalendarEventResourceRelationships {

		/** The owner is the patient for whom the calendar event is created specificially for */
		owner?: CalendarEventResourceRelationshipsOwner;
	}
	export interface CalendarEventResourceRelationshipsFormProperties {
	}
	export function CreateCalendarEventResourceRelationshipsFormGroup() {
		return new FormGroup<CalendarEventResourceRelationshipsFormProperties>({
		});

	}

	export interface CalendarEventResourceRelationshipsOwner {

		/** Required */
		data: CalendarEventResourceRelationshipsOwnerData;
		links?: CalendarEventResourceRelationshipsOwnerLinks;
	}
	export interface CalendarEventResourceRelationshipsOwnerFormProperties {
	}
	export function CreateCalendarEventResourceRelationshipsOwnerFormGroup() {
		return new FormGroup<CalendarEventResourceRelationshipsOwnerFormProperties>({
		});

	}

	export interface CalendarEventResourceRelationshipsOwnerData {
		id?: string | null;
		type?: string | null;
	}
	export interface CalendarEventResourceRelationshipsOwnerDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateCalendarEventResourceRelationshipsOwnerDataFormGroup() {
		return new FormGroup<CalendarEventResourceRelationshipsOwnerDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CalendarEventResourceRelationshipsOwnerLinks {
		related?: string | null;
	}
	export interface CalendarEventResourceRelationshipsOwnerLinksFormProperties {
		related: FormControl<string | null | undefined>,
	}
	export function CreateCalendarEventResourceRelationshipsOwnerLinksFormGroup() {
		return new FormGroup<CalendarEventResourceRelationshipsOwnerLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined, [Validators.pattern('/pub/calendar_event/[0-9a-z]+')]),
		});

	}

	export enum CalendarEventResourceType { calendar_event = 0 }

	export interface CalendarEventResponseResource {
		attributes?: CalendarEventResponseResourceAttributes;
		id?: string | null;
		links?: CalendarEventResponseResourceLinks;
		relationships?: CalendarEventResponseResourceRelationships;
		type?: CalendarEventResponseResourceType | null;
	}
	export interface CalendarEventResponseResourceFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<CalendarEventResponseResourceType | null | undefined>,
	}
	export function CreateCalendarEventResponseResourceFormGroup() {
		return new FormGroup<CalendarEventResponseResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CalendarEventResponseResourceType | null | undefined>(undefined),
		});

	}

	export interface CalendarEventResponseResourceAttributes {

		/** The attendee in the attendees list of the calendar event. */
		attendee?: string | null;

		/** The response status for the attendee. */
		response_status?: CalendarEventResponseResourceAttributesResponse_status | null;
	}
	export interface CalendarEventResponseResourceAttributesFormProperties {

		/** The attendee in the attendees list of the calendar event. */
		attendee: FormControl<string | null | undefined>,

		/** The response status for the attendee. */
		response_status: FormControl<CalendarEventResponseResourceAttributesResponse_status | null | undefined>,
	}
	export function CreateCalendarEventResponseResourceAttributesFormGroup() {
		return new FormGroup<CalendarEventResponseResourceAttributesFormProperties>({
			attendee: new FormControl<string | null | undefined>(undefined),
			response_status: new FormControl<CalendarEventResponseResourceAttributesResponse_status | null | undefined>(undefined),
		});

	}

	export enum CalendarEventResponseResourceAttributesResponse_status { accepted = 0, declined = 1, tentative = 2 }

	export interface CalendarEventResponseResourceLinks {
		self?: string | null;
	}
	export interface CalendarEventResponseResourceLinksFormProperties {
		self: FormControl<string | null | undefined>,
	}
	export function CreateCalendarEventResponseResourceLinksFormGroup() {
		return new FormGroup<CalendarEventResponseResourceLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.pattern('/calendar_event_response/[0-9a-z]+')]),
		});

	}

	export interface CalendarEventResponseResourceRelationships {

		/** The calendar_event is the calendar event for which the calendar event response is created specificially for */
		calendar_event?: CalendarEventResponseResourceRelationshipsCalendar_event;

		/** The user is the coach or patient for whom the calendar event response is created specificially for */
		user?: CalendarEventResponseResourceRelationshipsUser;
	}
	export interface CalendarEventResponseResourceRelationshipsFormProperties {
	}
	export function CreateCalendarEventResponseResourceRelationshipsFormGroup() {
		return new FormGroup<CalendarEventResponseResourceRelationshipsFormProperties>({
		});

	}

	export interface CalendarEventResponseResourceRelationshipsCalendar_event {

		/** Required */
		data: CalendarEventResponseResourceRelationshipsCalendar_eventData;
		links?: CalendarEventResponseResourceRelationshipsCalendar_eventLinks;
	}
	export interface CalendarEventResponseResourceRelationshipsCalendar_eventFormProperties {
	}
	export function CreateCalendarEventResponseResourceRelationshipsCalendar_eventFormGroup() {
		return new FormGroup<CalendarEventResponseResourceRelationshipsCalendar_eventFormProperties>({
		});

	}

	export interface CalendarEventResponseResourceRelationshipsCalendar_eventData {
		id?: string | null;
		type?: string | null;
	}
	export interface CalendarEventResponseResourceRelationshipsCalendar_eventDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateCalendarEventResponseResourceRelationshipsCalendar_eventDataFormGroup() {
		return new FormGroup<CalendarEventResponseResourceRelationshipsCalendar_eventDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CalendarEventResponseResourceRelationshipsCalendar_eventLinks {
		related?: string | null;
	}
	export interface CalendarEventResponseResourceRelationshipsCalendar_eventLinksFormProperties {
		related: FormControl<string | null | undefined>,
	}
	export function CreateCalendarEventResponseResourceRelationshipsCalendar_eventLinksFormGroup() {
		return new FormGroup<CalendarEventResponseResourceRelationshipsCalendar_eventLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined, [Validators.pattern('/pub/calendar_event_response/[0-9a-z]+')]),
		});

	}

	export interface CalendarEventResponseResourceRelationshipsUser {

		/** Required */
		data: CalendarEventResponseResourceRelationshipsUserData;
		links?: CalendarEventResponseResourceRelationshipsUserLinks;
	}
	export interface CalendarEventResponseResourceRelationshipsUserFormProperties {
	}
	export function CreateCalendarEventResponseResourceRelationshipsUserFormGroup() {
		return new FormGroup<CalendarEventResponseResourceRelationshipsUserFormProperties>({
		});

	}

	export interface CalendarEventResponseResourceRelationshipsUserData {
		id?: string | null;
		type?: string | null;
	}
	export interface CalendarEventResponseResourceRelationshipsUserDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateCalendarEventResponseResourceRelationshipsUserDataFormGroup() {
		return new FormGroup<CalendarEventResponseResourceRelationshipsUserDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CalendarEventResponseResourceRelationshipsUserLinks {
		related?: string | null;
	}
	export interface CalendarEventResponseResourceRelationshipsUserLinksFormProperties {
		related: FormControl<string | null | undefined>,
	}
	export function CreateCalendarEventResponseResourceRelationshipsUserLinksFormGroup() {
		return new FormGroup<CalendarEventResponseResourceRelationshipsUserLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined, [Validators.pattern('/pub/calendar_event_response/[0-9a-z]+')]),
		});

	}

	export enum CalendarEventResponseResourceType { calendar_event_response = 0 }

	export interface CoachResource {

		/** Required */
		attributes: CoachResourceAttributes;

		/** Required */
		id: string;
		links?: CoachResourceLinks;

		/** Required */
		type: CoachResourceType;
	}
	export interface CoachResourceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<CoachResourceType | null | undefined>,
	}
	export function CreateCoachResourceFormGroup() {
		return new FormGroup<CoachResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CoachResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CoachResourceAttributes {
		first_name?: string | null;
		last_name?: string | null;
	}
	export interface CoachResourceAttributesFormProperties {
		first_name: FormControl<string | null | undefined>,
		last_name: FormControl<string | null | undefined>,
	}
	export function CreateCoachResourceAttributesFormGroup() {
		return new FormGroup<CoachResourceAttributesFormProperties>({
			first_name: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CoachResourceLinks {

		/** Required */
		self: string;
	}
	export interface CoachResourceLinksFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateCoachResourceLinksFormGroup() {
		return new FormGroup<CoachResourceLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('/coach/[0-9a-z]+')]),
		});

	}

	export enum CoachResourceType { coach = 0 }

	export interface CollectionResponseLinks {
		last?: string | null;
		next?: string | null;
		prev?: string | null;
		self?: string | null;
	}
	export interface CollectionResponseLinksFormProperties {
		last: FormControl<string | null | undefined>,
		next: FormControl<string | null | undefined>,
		prev: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateCollectionResponseLinksFormGroup() {
		return new FormGroup<CollectionResponseLinksFormProperties>({
			last: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateActionRequest {

		/** Required */
		data: ActionResource;
	}
	export interface CreateActionRequestFormProperties {
	}
	export function CreateCreateActionRequestFormGroup() {
		return new FormGroup<CreateActionRequestFormProperties>({
		});

	}

	export interface CreateActionResponse {

		/** Required */
		data: ActionResource;
		meta?: CreateOrUpdateMetaResponse;
	}
	export interface CreateActionResponseFormProperties {
	}
	export function CreateCreateActionResponseFormGroup() {
		return new FormGroup<CreateActionResponseFormProperties>({
		});

	}

	export interface CreateOrUpdateMetaResponse {
		ignored?: Array<string>;
		req_id?: string | null;
	}
	export interface CreateOrUpdateMetaResponseFormProperties {
		req_id: FormControl<string | null | undefined>,
	}
	export function CreateCreateOrUpdateMetaResponseFormGroup() {
		return new FormGroup<CreateOrUpdateMetaResponseFormProperties>({
			req_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBundleRequest {

		/** Required */
		data: BundleResource;
	}
	export interface CreateBundleRequestFormProperties {
	}
	export function CreateCreateBundleRequestFormGroup() {
		return new FormGroup<CreateBundleRequestFormProperties>({
		});

	}

	export interface CreateBundleResponse {

		/** Required */
		data: BundleResource;
		meta?: CreateOrUpdateMetaResponse;
	}
	export interface CreateBundleResponseFormProperties {
	}
	export function CreateCreateBundleResponseFormGroup() {
		return new FormGroup<CreateBundleResponseFormProperties>({
		});

	}

	export interface CreateCalendarEventRequest {

		/** Required */
		data: CreateCalendarEventRequestData;
	}
	export interface CreateCalendarEventRequestFormProperties {
	}
	export function CreateCreateCalendarEventRequestFormGroup() {
		return new FormGroup<CreateCalendarEventRequestFormProperties>({
		});

	}

	export interface CreateCalendarEventRequestData {

		/** Required */
		attributes: CalendarEventResource;

		/** Required */
		relationships: CreateCalendarEventRequestDataRelationships;

		/** Required */
		type: CalendarEventResource;
	}
	export interface CreateCalendarEventRequestDataFormProperties {
	}
	export function CreateCreateCalendarEventRequestDataFormGroup() {
		return new FormGroup<CreateCalendarEventRequestDataFormProperties>({
		});

	}

	export interface CreateCalendarEventRequestDataRelationships {
		owner?: CreateCalendarEventRequestDataRelationshipsOwner;
	}
	export interface CreateCalendarEventRequestDataRelationshipsFormProperties {
	}
	export function CreateCreateCalendarEventRequestDataRelationshipsFormGroup() {
		return new FormGroup<CreateCalendarEventRequestDataRelationshipsFormProperties>({
		});

	}

	export interface CreateCalendarEventRequestDataRelationshipsOwner {

		/** Required */
		data: CalendarEventResource;
	}
	export interface CreateCalendarEventRequestDataRelationshipsOwnerFormProperties {
	}
	export function CreateCreateCalendarEventRequestDataRelationshipsOwnerFormGroup() {
		return new FormGroup<CreateCalendarEventRequestDataRelationshipsOwnerFormProperties>({
		});

	}

	export interface CreateCalendarEventResponse {
		data?: CalendarEventResource;
		meta?: CreateOrUpdateMetaResponse;
	}
	export interface CreateCalendarEventResponseFormProperties {
	}
	export function CreateCreateCalendarEventResponseFormGroup() {
		return new FormGroup<CreateCalendarEventResponseFormProperties>({
		});

	}

	export interface CreateCalendarEventResponseRequest {

		/** Required */
		data: CreateCalendarEventResponseRequestData;
	}
	export interface CreateCalendarEventResponseRequestFormProperties {
	}
	export function CreateCreateCalendarEventResponseRequestFormGroup() {
		return new FormGroup<CreateCalendarEventResponseRequestFormProperties>({
		});

	}

	export interface CreateCalendarEventResponseRequestData {

		/** Required */
		attributes: CalendarEventResponseResource;

		/** Required */
		relationships: CreateCalendarEventResponseRequestDataRelationships;

		/** Required */
		type: CalendarEventResponseResource;
	}
	export interface CreateCalendarEventResponseRequestDataFormProperties {
	}
	export function CreateCreateCalendarEventResponseRequestDataFormGroup() {
		return new FormGroup<CreateCalendarEventResponseRequestDataFormProperties>({
		});

	}

	export interface CreateCalendarEventResponseRequestDataRelationships {
		calendar_event?: CreateCalendarEventResponseRequestDataRelationshipsCalendar_event;
		user?: CreateCalendarEventResponseRequestDataRelationshipsUser;
	}
	export interface CreateCalendarEventResponseRequestDataRelationshipsFormProperties {
	}
	export function CreateCreateCalendarEventResponseRequestDataRelationshipsFormGroup() {
		return new FormGroup<CreateCalendarEventResponseRequestDataRelationshipsFormProperties>({
		});

	}

	export interface CreateCalendarEventResponseRequestDataRelationshipsCalendar_event {

		/** Required */
		data: CalendarEventResponseResource;
	}
	export interface CreateCalendarEventResponseRequestDataRelationshipsCalendar_eventFormProperties {
	}
	export function CreateCreateCalendarEventResponseRequestDataRelationshipsCalendar_eventFormGroup() {
		return new FormGroup<CreateCalendarEventResponseRequestDataRelationshipsCalendar_eventFormProperties>({
		});

	}

	export interface CreateCalendarEventResponseRequestDataRelationshipsUser {

		/** Required */
		data: CalendarEventResponseResource;
	}
	export interface CreateCalendarEventResponseRequestDataRelationshipsUserFormProperties {
	}
	export function CreateCreateCalendarEventResponseRequestDataRelationshipsUserFormGroup() {
		return new FormGroup<CreateCalendarEventResponseRequestDataRelationshipsUserFormProperties>({
		});

	}

	export interface CreateGroupRequest {

		/** Required */
		data: GroupResource;
	}
	export interface CreateGroupRequestFormProperties {
	}
	export function CreateCreateGroupRequestFormGroup() {
		return new FormGroup<CreateGroupRequestFormProperties>({
		});

	}

	export interface GroupResource {

		/** Required */
		attributes: GroupResourceAttributes;

		/** Required */
		id: string;
		links?: GroupResourceLinks;

		/** Required */
		type: GroupResourceType;
	}
	export interface GroupResourceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<GroupResourceType | null | undefined>,
	}
	export function CreateGroupResourceFormGroup() {
		return new FormGroup<GroupResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<GroupResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GroupResourceAttributes {

		/** A description of the group */
		bio?: string | null;

		/**
		 * The name of the group
		 * Required
		 */
		name: string;
	}
	export interface GroupResourceAttributesFormProperties {

		/** A description of the group */
		bio: FormControl<string | null | undefined>,

		/**
		 * The name of the group
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGroupResourceAttributesFormGroup() {
		return new FormGroup<GroupResourceAttributesFormProperties>({
			bio: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GroupResourceLinks {

		/** Required */
		self: string;
	}
	export interface GroupResourceLinksFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateGroupResourceLinksFormGroup() {
		return new FormGroup<GroupResourceLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('/group/[0-9a-z]+')]),
		});

	}

	export enum GroupResourceType { group = 0 }

	export interface CreateGroupResponse {

		/** Required */
		data: GroupResource;
		meta?: CreateOrUpdateMetaResponse;
	}
	export interface CreateGroupResponseFormProperties {
	}
	export function CreateCreateGroupResponseFormGroup() {
		return new FormGroup<CreateGroupResponseFormProperties>({
		});

	}

	export interface CreateOrUpdateErrorResponse {
		errors?: Error;
		meta?: CreateOrUpdateMetaResponse;
	}
	export interface CreateOrUpdateErrorResponseFormProperties {
	}
	export function CreateCreateOrUpdateErrorResponseFormGroup() {
		return new FormGroup<CreateOrUpdateErrorResponseFormProperties>({
		});

	}

	export interface Error {
		code?: ErrorCode | null;
		detail?: string | null;
		source?: ErrorSource;
		status?: string | null;
		title?: string | null;
	}
	export interface ErrorFormProperties {
		code: FormControl<ErrorCode | null | undefined>,
		detail: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<ErrorCode | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorCode { Forbidden = 0, InvalidParameter = 1, InvalidBodyParameter = 2, ResourceNotFound = 3, Unauthorized = 4, InvalidCredentials = 5, InvalidGrantType = 6 }

	export interface ErrorSource {
		parameter?: string | null;
		pointer?: string | null;
	}
	export interface ErrorSourceFormProperties {
		parameter: FormControl<string | null | undefined>,
		pointer: FormControl<string | null | undefined>,
	}
	export function CreateErrorSourceFormGroup() {
		return new FormGroup<ErrorSourceFormProperties>({
			parameter: new FormControl<string | null | undefined>(undefined),
			pointer: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePatientHealthMetricRequest {

		/** Required */
		data: PatientHealthMetricCreateResource;
		meta?: CreatePatientHealthMetricRequestMeta;
	}
	export interface CreatePatientHealthMetricRequestFormProperties {
	}
	export function CreateCreatePatientHealthMetricRequestFormGroup() {
		return new FormGroup<CreatePatientHealthMetricRequestFormProperties>({
		});

	}

	export interface PatientHealthMetricCreateResource {
	}
	export interface PatientHealthMetricCreateResourceFormProperties {
	}
	export function CreatePatientHealthMetricCreateResourceFormGroup() {
		return new FormGroup<PatientHealthMetricCreateResourceFormProperties>({
		});

	}

	export interface CreatePatientHealthMetricRequestMeta {

		/**
		 * If `true`, the patient health metric will be ignored if there is an existing patient health metric for
		 * the same patient, with the same `type` and same `occurred_at`.
		 */
		ignore_duplicates?: boolean | null;
	}
	export interface CreatePatientHealthMetricRequestMetaFormProperties {

		/**
		 * If `true`, the patient health metric will be ignored if there is an existing patient health metric for
		 * the same patient, with the same `type` and same `occurred_at`.
		 */
		ignore_duplicates: FormControl<boolean | null | undefined>,
	}
	export function CreateCreatePatientHealthMetricRequestMetaFormGroup() {
		return new FormGroup<CreatePatientHealthMetricRequestMetaFormProperties>({
			ignore_duplicates: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreatePatientHealthMetricResponse {

		/** Required */
		data: PatientHealthMetricResource;
		meta?: CreateOrUpdateMetaResponse;
	}
	export interface CreatePatientHealthMetricResponseFormProperties {
	}
	export function CreateCreatePatientHealthMetricResponseFormGroup() {
		return new FormGroup<CreatePatientHealthMetricResponseFormProperties>({
		});

	}

	export interface PatientHealthMetricResource {
		attributes?: PatientHealthMetricResourceAttributes;

		/** Required */
		id: string;
		relationships?: PatientHealthMetricResourceRelationships;

		/** Required */
		type: string;
	}
	export interface PatientHealthMetricResourceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePatientHealthMetricResourceFormGroup() {
		return new FormGroup<PatientHealthMetricResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientHealthMetricResourceAttributes {
		code?: PatientHealthMetricResourceAttributesCode;
		diastolic?: number | null;
		occurred_at?: string | null;
		systolic?: number | null;
		type?: PatientHealthMetricResourceAttributesType | null;
		unit?: string | null;

		/** Can be any value (number, boolean, string, object) depending on the metric type. Most values are of type number. */
		value?: any;
	}
	export interface PatientHealthMetricResourceAttributesFormProperties {
		diastolic: FormControl<number | null | undefined>,
		occurred_at: FormControl<string | null | undefined>,
		systolic: FormControl<number | null | undefined>,
		type: FormControl<PatientHealthMetricResourceAttributesType | null | undefined>,
		unit: FormControl<string | null | undefined>,

		/** Can be any value (number, boolean, string, object) depending on the metric type. Most values are of type number. */
		value: FormControl<any | null | undefined>,
	}
	export function CreatePatientHealthMetricResourceAttributesFormGroup() {
		return new FormGroup<PatientHealthMetricResourceAttributesFormProperties>({
			diastolic: new FormControl<number | null | undefined>(undefined),
			occurred_at: new FormControl<string | null | undefined>(undefined),
			systolic: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<PatientHealthMetricResourceAttributesType | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface PatientHealthMetricResourceAttributesCode {

		/** Required */
		system: string;

		/** Required */
		value: string;
	}
	export interface PatientHealthMetricResourceAttributesCodeFormProperties {

		/** Required */
		system: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePatientHealthMetricResourceAttributesCodeFormGroup() {
		return new FormGroup<PatientHealthMetricResourceAttributesCodeFormProperties>({
			system: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PatientHealthMetricResourceAttributesType { blood_pressure_systolic = 0, blood_pressure_diastolic = 1, hemoglobin_a1c = 2, hdl_cholesterol = 3, ldl_cholesterol = 4, total_cholesterol = 5, triglycerides = 6, blood_urea_nitrogen = 7, creatinine = 8, hemoglobin = 9, hematocrit = 10, total_serum_iron = 11, thyroid_stimulating_hormone = 12, free_thyroxine = 13, free_triiodothyronine = 14, total_triiodothyronine = 15, cd4_cell_count = 16, hiv_viral_load = 17, inr = 18, free_testosterone = 19, total_testosterone = 20, c_reactive_protein = 21, prostate_specific_antigen = 22, cotinine = 23, c_peptide = 24, blood_pressure = 25, blood_glucose = 26, weight = 27, heart_rate = 28, body_fat_percentage = 29, body_mass_index = 30, body_temperature = 31, forced_expiratory_volume1 = 32, forced_vital_capacity = 33, lean_body_mass = 34, nausea_level = 35, oxygen_saturation = 36, pain_level = 37, peak_expiratory_flow_rate = 38, peripheral_perfusion_index = 39, respiratory_rate = 40, inhaler_usage = 41 }

	export interface PatientHealthMetricResourceRelationships {
		patient?: PatientHealthMetricResourceRelationshipsPatient;
	}
	export interface PatientHealthMetricResourceRelationshipsFormProperties {
	}
	export function CreatePatientHealthMetricResourceRelationshipsFormGroup() {
		return new FormGroup<PatientHealthMetricResourceRelationshipsFormProperties>({
		});

	}

	export interface PatientHealthMetricResourceRelationshipsPatient {
		data?: PatientHealthMetricResourceRelationshipsPatientData;
		links?: string | null;
	}
	export interface PatientHealthMetricResourceRelationshipsPatientFormProperties {
		links: FormControl<string | null | undefined>,
	}
	export function CreatePatientHealthMetricResourceRelationshipsPatientFormGroup() {
		return new FormGroup<PatientHealthMetricResourceRelationshipsPatientFormProperties>({
			links: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientHealthMetricResourceRelationshipsPatientData {

		/** Required if the `meta.query` is not defined. */
		id?: string | null;

		/** Allows the specification of a query for a patient rather than providing a patient id directly */
		meta?: PatientHealthMetricResourceRelationshipsPatientDataMeta;
		type?: string | null;
	}
	export interface PatientHealthMetricResourceRelationshipsPatientDataFormProperties {

		/** Required if the `meta.query` is not defined. */
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreatePatientHealthMetricResourceRelationshipsPatientDataFormGroup() {
		return new FormGroup<PatientHealthMetricResourceRelationshipsPatientDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientHealthMetricResourceRelationshipsPatientDataMeta {

		/**
		 * The query must return one and only one patient.
		 * Required
		 */
		query: PatientHealthMetricResourceRelationshipsPatientDataMetaQuery;
	}
	export interface PatientHealthMetricResourceRelationshipsPatientDataMetaFormProperties {
	}
	export function CreatePatientHealthMetricResourceRelationshipsPatientDataMetaFormGroup() {
		return new FormGroup<PatientHealthMetricResourceRelationshipsPatientDataMetaFormProperties>({
		});

	}

	export interface PatientHealthMetricResourceRelationshipsPatientDataMetaQuery {
		groups?: Array<string>;

		/** Required */
		identifier: PatientHealthMetricResourceRelationshipsPatientDataMetaQueryIdentifier;
		organization?: string | null;
	}
	export interface PatientHealthMetricResourceRelationshipsPatientDataMetaQueryFormProperties {
		organization: FormControl<string | null | undefined>,
	}
	export function CreatePatientHealthMetricResourceRelationshipsPatientDataMetaQueryFormGroup() {
		return new FormGroup<PatientHealthMetricResourceRelationshipsPatientDataMetaQueryFormProperties>({
			organization: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientHealthMetricResourceRelationshipsPatientDataMetaQueryIdentifier {

		/** Required */
		system: string;

		/** Required */
		value: string;
	}
	export interface PatientHealthMetricResourceRelationshipsPatientDataMetaQueryIdentifierFormProperties {

		/** Required */
		system: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePatientHealthMetricResourceRelationshipsPatientDataMetaQueryIdentifierFormGroup() {
		return new FormGroup<PatientHealthMetricResourceRelationshipsPatientDataMetaQueryIdentifierFormProperties>({
			system: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePatientRequest {

		/** Required */
		data: PatientCreateResource;
		meta?: CreatePatientRequestMeta;
	}
	export interface CreatePatientRequestFormProperties {
	}
	export function CreateCreatePatientRequestFormGroup() {
		return new FormGroup<CreatePatientRequestFormProperties>({
		});

	}

	export interface PatientCreateResource {
	}
	export interface PatientCreateResourceFormProperties {
	}
	export function CreatePatientCreateResourceFormGroup() {
		return new FormGroup<PatientCreateResourceFormProperties>({
		});

	}

	export interface CreatePatientRequestMeta {

		/**
		 * If `true`, patients with any conflicting identifiers (same `system` and `value`) will be ignored.
		 * Useful for gracefully skipping duplicates after errors occur during bulk create.
		 */
		ignore_duplicates?: boolean | null;
	}
	export interface CreatePatientRequestMetaFormProperties {

		/**
		 * If `true`, patients with any conflicting identifiers (same `system` and `value`) will be ignored.
		 * Useful for gracefully skipping duplicates after errors occur during bulk create.
		 */
		ignore_duplicates: FormControl<boolean | null | undefined>,
	}
	export function CreateCreatePatientRequestMetaFormGroup() {
		return new FormGroup<CreatePatientRequestMetaFormProperties>({
			ignore_duplicates: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreatePatientResponse {

		/** Required */
		data: PatientResource;
		meta?: CreateOrUpdateMetaResponse;
	}
	export interface CreatePatientResponseFormProperties {
	}
	export function CreateCreatePatientResponseFormGroup() {
		return new FormGroup<CreatePatientResponseFormProperties>({
		});

	}

	export interface PatientResource {

		/** Required */
		attributes: PatientResourceAttributes;
		id?: string | null;
		links?: PatientResourceLinks;
		relationships?: PatientResourceRelationships;

		/** Required */
		type: PatientResourceType;
	}
	export interface PatientResourceFormProperties {
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<PatientResourceType | null | undefined>,
	}
	export function CreatePatientResourceFormGroup() {
		return new FormGroup<PatientResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PatientResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientResourceAttributes {
		addresses?: Array<Address>;
		archive_history?: Array<ArchiveHistory>;
		archived?: boolean | null;
		birth_date?: Date | null;
		email_address?: string | null;
		enrolled_at?: string | null;
		first_access_at?: string | null;
		first_name?: string | null;
		gender?: PatientResourceAttributesGender | null;
		identifiers?: Array<PatientIdentifier>;
		invited_at?: string | null;
		last_access_at?: string | null;
		last_name?: string | null;

		/** Coach's note about the patient. Not visible to the patient. */
		note?: string | null;
		phone_numbers?: Array<PhoneNumber>;

		/** A patient's motivation statement. */
		statement?: PatientResourceAttributesStatement;
		updated_at?: string | null;
	}
	export interface PatientResourceAttributesFormProperties {
		archived: FormControl<boolean | null | undefined>,
		birth_date: FormControl<Date | null | undefined>,
		email_address: FormControl<string | null | undefined>,
		enrolled_at: FormControl<string | null | undefined>,
		first_access_at: FormControl<string | null | undefined>,
		first_name: FormControl<string | null | undefined>,
		gender: FormControl<PatientResourceAttributesGender | null | undefined>,
		invited_at: FormControl<string | null | undefined>,
		last_access_at: FormControl<string | null | undefined>,
		last_name: FormControl<string | null | undefined>,

		/** Coach's note about the patient. Not visible to the patient. */
		note: FormControl<string | null | undefined>,
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreatePatientResourceAttributesFormGroup() {
		return new FormGroup<PatientResourceAttributesFormProperties>({
			archived: new FormControl<boolean | null | undefined>(undefined),
			birth_date: new FormControl<Date | null | undefined>(undefined),
			email_address: new FormControl<string | null | undefined>(undefined),
			enrolled_at: new FormControl<string | null | undefined>(undefined),
			first_access_at: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<PatientResourceAttributesGender | null | undefined>(undefined),
			invited_at: new FormControl<string | null | undefined>(undefined),
			last_access_at: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PatientResourceAttributesGender { male = 0, female = 1, other = 2 }

	export interface PatientIdentifier {
		label?: string | null;

		/** Required */
		system: string;

		/** If `true`, the combination of system and value must be global unique among all patients and coaches in Fitbit Plus. */
		unique?: boolean | null;

		/** Required */
		value: string;
	}
	export interface PatientIdentifierFormProperties {
		label: FormControl<string | null | undefined>,

		/** Required */
		system: FormControl<string | null | undefined>,

		/** If `true`, the combination of system and value must be global unique among all patients and coaches in Fitbit Plus. */
		unique: FormControl<boolean | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePatientIdentifierFormGroup() {
		return new FormGroup<PatientIdentifierFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			system: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unique: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PhoneNumber {

		/** Required */
		primary: boolean;

		/** Required */
		type: PhoneNumberType;

		/** Required */
		value: string;
	}
	export interface PhoneNumberFormProperties {

		/** Required */
		primary: FormControl<boolean | null | undefined>,

		/** Required */
		type: FormControl<PhoneNumberType | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePhoneNumberFormGroup() {
		return new FormGroup<PhoneNumberFormProperties>({
			primary: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<PhoneNumberType | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PhoneNumberType { home = 0, work = 1, mobile = 2, 'home-fax' = 3, 'work-fax' = 4, other = 5 }

	export interface PatientResourceAttributesStatement {
		updated_at?: string | null;
		updated_by?: string | null;
		value?: string | null;
	}
	export interface PatientResourceAttributesStatementFormProperties {
		updated_at: FormControl<string | null | undefined>,
		updated_by: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreatePatientResourceAttributesStatementFormGroup() {
		return new FormGroup<PatientResourceAttributesStatementFormProperties>({
			updated_at: new FormControl<string | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientResourceLinks {
		self?: string | null;

		/** A link to the patient record in the Fitbit Plus web application. */
		twine_web_app?: string | null;
	}
	export interface PatientResourceLinksFormProperties {
		self: FormControl<string | null | undefined>,

		/** A link to the patient record in the Fitbit Plus web application. */
		twine_web_app: FormControl<string | null | undefined>,
	}
	export function CreatePatientResourceLinksFormGroup() {
		return new FormGroup<PatientResourceLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.pattern('/patient/[0-9a-z]+')]),
			twine_web_app: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientResourceRelationships {
		coaches?: any;

		/** Required */
		groups: any;
	}
	export interface PatientResourceRelationshipsFormProperties {
		coaches: FormControl<any | null | undefined>,

		/** Required */
		groups: FormControl<any | null | undefined>,
	}
	export function CreatePatientResourceRelationshipsFormGroup() {
		return new FormGroup<PatientResourceRelationshipsFormProperties>({
			coaches: new FormControl<any | null | undefined>(undefined),
			groups: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PatientResourceType { patient = 0 }

	export interface CreateRewardEarningFulfillmentRequest {

		/** Required */
		data: RewardEarningFulfillmentResource;
	}
	export interface CreateRewardEarningFulfillmentRequestFormProperties {
	}
	export function CreateCreateRewardEarningFulfillmentRequestFormGroup() {
		return new FormGroup<CreateRewardEarningFulfillmentRequestFormProperties>({
		});

	}

	export interface RewardEarningFulfillmentResource {
		attributes?: RewardEarningFulfillmentResourceAttributes;
		id?: string | null;
		relationships?: RewardEarningFulfillmentResourceRelationships;

		/** Required */
		type: string;
	}
	export interface RewardEarningFulfillmentResourceFormProperties {
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRewardEarningFulfillmentResourceFormGroup() {
		return new FormGroup<RewardEarningFulfillmentResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RewardEarningFulfillmentResourceAttributes {

		/**
		 * Date at which the reward earning was fulfilled. (Must be at the same time or after the reward was earned)
		 * Required
		 */
		fulfilled_at: string;

		/** Unit of the earned reward that has been fulfilled. (Read-only property) */
		fulfilled_unit?: string | null;

		/**
		 * Value of the earned reward that has been fulfilled. (Must be greater than or equal to 0)
		 * Required
		 */
		fulfilled_value: number;
	}
	export interface RewardEarningFulfillmentResourceAttributesFormProperties {

		/**
		 * Date at which the reward earning was fulfilled. (Must be at the same time or after the reward was earned)
		 * Required
		 */
		fulfilled_at: FormControl<string | null | undefined>,

		/** Unit of the earned reward that has been fulfilled. (Read-only property) */
		fulfilled_unit: FormControl<string | null | undefined>,

		/**
		 * Value of the earned reward that has been fulfilled. (Must be greater than or equal to 0)
		 * Required
		 */
		fulfilled_value: FormControl<number | null | undefined>,
	}
	export function CreateRewardEarningFulfillmentResourceAttributesFormGroup() {
		return new FormGroup<RewardEarningFulfillmentResourceAttributesFormProperties>({
			fulfilled_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fulfilled_unit: new FormControl<string | null | undefined>(undefined),
			fulfilled_value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RewardEarningFulfillmentResourceRelationships {
		patient?: RewardEarningFulfillmentResourceRelationshipsPatient;

		/** Required */
		reward_earning: RewardEarningFulfillmentResourceRelationshipsReward_earning;
	}
	export interface RewardEarningFulfillmentResourceRelationshipsFormProperties {
	}
	export function CreateRewardEarningFulfillmentResourceRelationshipsFormGroup() {
		return new FormGroup<RewardEarningFulfillmentResourceRelationshipsFormProperties>({
		});

	}

	export interface RewardEarningFulfillmentResourceRelationshipsPatient {
		data?: RewardEarningFulfillmentResourceRelationshipsPatientData;
	}
	export interface RewardEarningFulfillmentResourceRelationshipsPatientFormProperties {
	}
	export function CreateRewardEarningFulfillmentResourceRelationshipsPatientFormGroup() {
		return new FormGroup<RewardEarningFulfillmentResourceRelationshipsPatientFormProperties>({
		});

	}

	export interface RewardEarningFulfillmentResourceRelationshipsPatientData {
		id?: string | null;
		type?: string | null;
	}
	export interface RewardEarningFulfillmentResourceRelationshipsPatientDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRewardEarningFulfillmentResourceRelationshipsPatientDataFormGroup() {
		return new FormGroup<RewardEarningFulfillmentResourceRelationshipsPatientDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RewardEarningFulfillmentResourceRelationshipsReward_earning {
		data?: RewardEarningFulfillmentResourceRelationshipsReward_earningData;
	}
	export interface RewardEarningFulfillmentResourceRelationshipsReward_earningFormProperties {
	}
	export function CreateRewardEarningFulfillmentResourceRelationshipsReward_earningFormGroup() {
		return new FormGroup<RewardEarningFulfillmentResourceRelationshipsReward_earningFormProperties>({
		});

	}

	export interface RewardEarningFulfillmentResourceRelationshipsReward_earningData {
		id?: string | null;
		type?: string | null;
	}
	export interface RewardEarningFulfillmentResourceRelationshipsReward_earningDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRewardEarningFulfillmentResourceRelationshipsReward_earningDataFormGroup() {
		return new FormGroup<RewardEarningFulfillmentResourceRelationshipsReward_earningDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRewardEarningFulfillmentResponse {

		/** Required */
		data: RewardEarningFulfillmentResource;
		meta?: CreateOrUpdateMetaResponse;
	}
	export interface CreateRewardEarningFulfillmentResponseFormProperties {
	}
	export function CreateCreateRewardEarningFulfillmentResponseFormGroup() {
		return new FormGroup<CreateRewardEarningFulfillmentResponseFormProperties>({
		});

	}

	export interface CreateRewardEarningRequest {

		/** Required */
		data: RewardEarningResource;
	}
	export interface CreateRewardEarningRequestFormProperties {
	}
	export function CreateCreateRewardEarningRequestFormGroup() {
		return new FormGroup<CreateRewardEarningRequestFormProperties>({
		});

	}

	export interface RewardEarningResource {
		attributes?: RewardEarningResourceAttributes;
		id?: string | null;
		relationships?: RewardEarningResourceRelationships;

		/** Required */
		type: string;
	}
	export interface RewardEarningResourceFormProperties {
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRewardEarningResourceFormGroup() {
		return new FormGroup<RewardEarningResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RewardEarningResourceAttributes {

		/**
		 * Date at which the reward was earned. (Must be after the reward was allocated and before the reward program activation was deactivated or expired)
		 * Required
		 */
		earned_at: string;

		/** Unit of the reward that has been earned. (Read-only property) */
		earned_unit?: string | null;

		/**
		 * Value of the reward that has been earned. (Must not exceed the allocated value for the reward)
		 * Required
		 */
		earned_value: number;

		/** Date at which the reward earning was fulfilled. (Read-only property) */
		fulfilled_at?: string | null;

		/** Value of the earned reward that has been fulfilled. (Read-only property) */
		fulfilled_value?: number | null;

		/** If true, the reward earning is ready to be fulfilled, either because the reward program activation was fulfill_as_earned or because the reward program activation has been deactivated. (Read-only property) */
		ready_for_fulfillment?: boolean | null;
	}
	export interface RewardEarningResourceAttributesFormProperties {

		/**
		 * Date at which the reward was earned. (Must be after the reward was allocated and before the reward program activation was deactivated or expired)
		 * Required
		 */
		earned_at: FormControl<string | null | undefined>,

		/** Unit of the reward that has been earned. (Read-only property) */
		earned_unit: FormControl<string | null | undefined>,

		/**
		 * Value of the reward that has been earned. (Must not exceed the allocated value for the reward)
		 * Required
		 */
		earned_value: FormControl<number | null | undefined>,

		/** Date at which the reward earning was fulfilled. (Read-only property) */
		fulfilled_at: FormControl<string | null | undefined>,

		/** Value of the earned reward that has been fulfilled. (Read-only property) */
		fulfilled_value: FormControl<number | null | undefined>,

		/** If true, the reward earning is ready to be fulfilled, either because the reward program activation was fulfill_as_earned or because the reward program activation has been deactivated. (Read-only property) */
		ready_for_fulfillment: FormControl<boolean | null | undefined>,
	}
	export function CreateRewardEarningResourceAttributesFormGroup() {
		return new FormGroup<RewardEarningResourceAttributesFormProperties>({
			earned_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			earned_unit: new FormControl<string | null | undefined>(undefined),
			earned_value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			fulfilled_at: new FormControl<string | null | undefined>(undefined),
			fulfilled_value: new FormControl<number | null | undefined>(undefined),
			ready_for_fulfillment: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RewardEarningResourceRelationships {
		group?: RewardEarningResourceRelationshipsGroup;
		patient?: RewardEarningResourceRelationshipsPatient;

		/** Required */
		reward: RewardEarningResourceRelationshipsReward;
		reward_program_activation?: RewardEarningResourceRelationshipsReward_program_activation;
	}
	export interface RewardEarningResourceRelationshipsFormProperties {
	}
	export function CreateRewardEarningResourceRelationshipsFormGroup() {
		return new FormGroup<RewardEarningResourceRelationshipsFormProperties>({
		});

	}

	export interface RewardEarningResourceRelationshipsGroup {
		data?: RewardEarningResourceRelationshipsGroupData;
	}
	export interface RewardEarningResourceRelationshipsGroupFormProperties {
	}
	export function CreateRewardEarningResourceRelationshipsGroupFormGroup() {
		return new FormGroup<RewardEarningResourceRelationshipsGroupFormProperties>({
		});

	}

	export interface RewardEarningResourceRelationshipsGroupData {
		id?: string | null;
		type?: string | null;
	}
	export interface RewardEarningResourceRelationshipsGroupDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRewardEarningResourceRelationshipsGroupDataFormGroup() {
		return new FormGroup<RewardEarningResourceRelationshipsGroupDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RewardEarningResourceRelationshipsPatient {
		data?: RewardEarningResourceRelationshipsPatientData;
	}
	export interface RewardEarningResourceRelationshipsPatientFormProperties {
	}
	export function CreateRewardEarningResourceRelationshipsPatientFormGroup() {
		return new FormGroup<RewardEarningResourceRelationshipsPatientFormProperties>({
		});

	}

	export interface RewardEarningResourceRelationshipsPatientData {
		id?: string | null;
		type?: string | null;
	}
	export interface RewardEarningResourceRelationshipsPatientDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRewardEarningResourceRelationshipsPatientDataFormGroup() {
		return new FormGroup<RewardEarningResourceRelationshipsPatientDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RewardEarningResourceRelationshipsReward {
		data?: RewardEarningResourceRelationshipsRewardData;
	}
	export interface RewardEarningResourceRelationshipsRewardFormProperties {
	}
	export function CreateRewardEarningResourceRelationshipsRewardFormGroup() {
		return new FormGroup<RewardEarningResourceRelationshipsRewardFormProperties>({
		});

	}

	export interface RewardEarningResourceRelationshipsRewardData {
		id?: string | null;
		type?: string | null;
	}
	export interface RewardEarningResourceRelationshipsRewardDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRewardEarningResourceRelationshipsRewardDataFormGroup() {
		return new FormGroup<RewardEarningResourceRelationshipsRewardDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RewardEarningResourceRelationshipsReward_program_activation {
		data?: RewardEarningResourceRelationshipsReward_program_activationData;
	}
	export interface RewardEarningResourceRelationshipsReward_program_activationFormProperties {
	}
	export function CreateRewardEarningResourceRelationshipsReward_program_activationFormGroup() {
		return new FormGroup<RewardEarningResourceRelationshipsReward_program_activationFormProperties>({
		});

	}

	export interface RewardEarningResourceRelationshipsReward_program_activationData {
		id?: string | null;
		type?: string | null;
	}
	export interface RewardEarningResourceRelationshipsReward_program_activationDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRewardEarningResourceRelationshipsReward_program_activationDataFormGroup() {
		return new FormGroup<RewardEarningResourceRelationshipsReward_program_activationDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRewardEarningResponse {

		/** Required */
		data: RewardEarningResource;
		meta?: CreateOrUpdateMetaResponse;
	}
	export interface CreateRewardEarningResponseFormProperties {
	}
	export function CreateCreateRewardEarningResponseFormGroup() {
		return new FormGroup<CreateRewardEarningResponseFormProperties>({
		});

	}

	export interface CreateRewardProgramActivationRequest {

		/** Required */
		data: RewardProgramActivationResource;
	}
	export interface CreateRewardProgramActivationRequestFormProperties {
	}
	export function CreateCreateRewardProgramActivationRequestFormGroup() {
		return new FormGroup<CreateRewardProgramActivationRequestFormProperties>({
		});

	}

	export interface RewardProgramActivationResource {
		attributes?: RewardProgramActivationResourceAttributes;
		id?: string | null;
		relationships?: RewardProgramActivationResourceRelationships;

		/** Required */
		type: string;
	}
	export interface RewardProgramActivationResourceFormProperties {
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRewardProgramActivationResourceFormGroup() {
		return new FormGroup<RewardProgramActivationResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RewardProgramActivationResourceAttributes {

		/**
		 * Date at which the reward program was activated for the patient. (Must be between the start_at and end_at dates for the reward program)
		 * Required
		 */
		activated_at: string;

		/** If true, the reward program is currently active. */
		active?: boolean | null;

		/** Number of rewards allocated. (Read-only property) */
		allocated_count?: number | null;

		/** Unit of the reward program budget. (Read-only property) */
		budget_unit?: string | null;

		/** Date at which the reward program was deactivated. (Must be after the activated_at date) */
		deactivated_at?: string | null;

		/** Number of reward earnings. (Read-only property) */
		earned_count?: number | null;

		/** Date at which the reward program activation expires. (Read-only property set by adding the days_active from the reward program to the activated_at date) */
		expires_at?: string | null;

		/** If true, the rewards created for a patient for the program can be fulfulled as they are earned. If false, the rewards should only be fulfilled when the program is deactivated. (Read-only property denormalized from the reward program) */
		fulfill_as_earned?: boolean | null;

		/** Total value of reward allocated. (Read-only property) */
		total_allocated_value?: number | null;

		/** Total value of reward earnings. (Read-only property) */
		total_earned_value?: number | null;
	}
	export interface RewardProgramActivationResourceAttributesFormProperties {

		/**
		 * Date at which the reward program was activated for the patient. (Must be between the start_at and end_at dates for the reward program)
		 * Required
		 */
		activated_at: FormControl<string | null | undefined>,

		/** If true, the reward program is currently active. */
		active: FormControl<boolean | null | undefined>,

		/** Number of rewards allocated. (Read-only property) */
		allocated_count: FormControl<number | null | undefined>,

		/** Unit of the reward program budget. (Read-only property) */
		budget_unit: FormControl<string | null | undefined>,

		/** Date at which the reward program was deactivated. (Must be after the activated_at date) */
		deactivated_at: FormControl<string | null | undefined>,

		/** Number of reward earnings. (Read-only property) */
		earned_count: FormControl<number | null | undefined>,

		/** Date at which the reward program activation expires. (Read-only property set by adding the days_active from the reward program to the activated_at date) */
		expires_at: FormControl<string | null | undefined>,

		/** If true, the rewards created for a patient for the program can be fulfulled as they are earned. If false, the rewards should only be fulfilled when the program is deactivated. (Read-only property denormalized from the reward program) */
		fulfill_as_earned: FormControl<boolean | null | undefined>,

		/** Total value of reward allocated. (Read-only property) */
		total_allocated_value: FormControl<number | null | undefined>,

		/** Total value of reward earnings. (Read-only property) */
		total_earned_value: FormControl<number | null | undefined>,
	}
	export function CreateRewardProgramActivationResourceAttributesFormGroup() {
		return new FormGroup<RewardProgramActivationResourceAttributesFormProperties>({
			activated_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			active: new FormControl<boolean | null | undefined>(undefined),
			allocated_count: new FormControl<number | null | undefined>(undefined),
			budget_unit: new FormControl<string | null | undefined>(undefined),
			deactivated_at: new FormControl<string | null | undefined>(undefined),
			earned_count: new FormControl<number | null | undefined>(undefined),
			expires_at: new FormControl<string | null | undefined>(undefined),
			fulfill_as_earned: new FormControl<boolean | null | undefined>(undefined),
			total_allocated_value: new FormControl<number | null | undefined>(undefined),
			total_earned_value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RewardProgramActivationResourceRelationships {

		/** Required */
		patient: RewardProgramActivationResourceRelationshipsPatient;

		/** Required */
		reward_program: RewardProgramActivationResourceRelationshipsReward_program;
	}
	export interface RewardProgramActivationResourceRelationshipsFormProperties {
	}
	export function CreateRewardProgramActivationResourceRelationshipsFormGroup() {
		return new FormGroup<RewardProgramActivationResourceRelationshipsFormProperties>({
		});

	}

	export interface RewardProgramActivationResourceRelationshipsPatient {
		data?: RewardProgramActivationResourceRelationshipsPatientData;
	}
	export interface RewardProgramActivationResourceRelationshipsPatientFormProperties {
	}
	export function CreateRewardProgramActivationResourceRelationshipsPatientFormGroup() {
		return new FormGroup<RewardProgramActivationResourceRelationshipsPatientFormProperties>({
		});

	}

	export interface RewardProgramActivationResourceRelationshipsPatientData {
		id?: string | null;
		type?: string | null;
	}
	export interface RewardProgramActivationResourceRelationshipsPatientDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRewardProgramActivationResourceRelationshipsPatientDataFormGroup() {
		return new FormGroup<RewardProgramActivationResourceRelationshipsPatientDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RewardProgramActivationResourceRelationshipsReward_program {
		data?: RewardProgramActivationResourceRelationshipsReward_programData;
	}
	export interface RewardProgramActivationResourceRelationshipsReward_programFormProperties {
	}
	export function CreateRewardProgramActivationResourceRelationshipsReward_programFormGroup() {
		return new FormGroup<RewardProgramActivationResourceRelationshipsReward_programFormProperties>({
		});

	}

	export interface RewardProgramActivationResourceRelationshipsReward_programData {
		id?: string | null;
		type?: string | null;
	}
	export interface RewardProgramActivationResourceRelationshipsReward_programDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRewardProgramActivationResourceRelationshipsReward_programDataFormGroup() {
		return new FormGroup<RewardProgramActivationResourceRelationshipsReward_programDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRewardProgramActivationResponse {

		/** Required */
		data: RewardProgramActivationResource;
		meta?: CreateOrUpdateMetaResponse;
	}
	export interface CreateRewardProgramActivationResponseFormProperties {
	}
	export function CreateCreateRewardProgramActivationResponseFormGroup() {
		return new FormGroup<CreateRewardProgramActivationResponseFormProperties>({
		});

	}

	export interface CreateRewardProgramRequest {

		/** Required */
		data: RewardProgramResource;
	}
	export interface CreateRewardProgramRequestFormProperties {
	}
	export function CreateCreateRewardProgramRequestFormGroup() {
		return new FormGroup<CreateRewardProgramRequestFormProperties>({
		});

	}

	export interface RewardProgramResource {
		attributes?: RewardProgramResourceAttributes;
		id?: string | null;
		relationships?: RewardProgramResourceRelationships;

		/** Required */
		type: string;
	}
	export interface RewardProgramResourceFormProperties {
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRewardProgramResourceFormGroup() {
		return new FormGroup<RewardProgramResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RewardProgramResourceAttributes {

		/** Unit of the budget for the reard program. */
		budget_unit?: RewardProgramResourceAttributesBudget_unit | null;

		/**
		 * Value of the budget for the reward program. (Must be greater than 0)
		 * Required
		 */
		budget_value: number;

		/** Description of the reward program - designed to be a comprehensive text description */
		description?: string | null;

		/** Number of days that a program can be active after it has been activated for a patient. (Must be greater than 0) */
		duration_active?: number | null;

		/**
		 * Date at which the reward program ends. (Must be after the start_at)
		 * Required
		 */
		end_at: string;

		/** If true, the reward program cannot be activated for a patient and new rewards cannot be created for the program. */
		frozen?: boolean | null;

		/** If true, the rewards created for a patient for the program can be fulfulled as they are earned. If false, the rewards should only be fulfilled when the program is deactivated. */
		fulfill_as_earned?: boolean | null;

		/**
		 * Name of the reward program
		 * Required
		 */
		name: string;

		/**
		 * Date at which the reward program starts.
		 * Required
		 */
		start_at: string;

		/** Tagline of the reward program - designed to be one line */
		tagline?: string | null;
	}
	export interface RewardProgramResourceAttributesFormProperties {

		/** Unit of the budget for the reard program. */
		budget_unit: FormControl<RewardProgramResourceAttributesBudget_unit | null | undefined>,

		/**
		 * Value of the budget for the reward program. (Must be greater than 0)
		 * Required
		 */
		budget_value: FormControl<number | null | undefined>,

		/** Description of the reward program - designed to be a comprehensive text description */
		description: FormControl<string | null | undefined>,

		/** Number of days that a program can be active after it has been activated for a patient. (Must be greater than 0) */
		duration_active: FormControl<number | null | undefined>,

		/**
		 * Date at which the reward program ends. (Must be after the start_at)
		 * Required
		 */
		end_at: FormControl<string | null | undefined>,

		/** If true, the reward program cannot be activated for a patient and new rewards cannot be created for the program. */
		frozen: FormControl<boolean | null | undefined>,

		/** If true, the rewards created for a patient for the program can be fulfulled as they are earned. If false, the rewards should only be fulfilled when the program is deactivated. */
		fulfill_as_earned: FormControl<boolean | null | undefined>,

		/**
		 * Name of the reward program
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Date at which the reward program starts.
		 * Required
		 */
		start_at: FormControl<string | null | undefined>,

		/** Tagline of the reward program - designed to be one line */
		tagline: FormControl<string | null | undefined>,
	}
	export function CreateRewardProgramResourceAttributesFormGroup() {
		return new FormGroup<RewardProgramResourceAttributesFormProperties>({
			budget_unit: new FormControl<RewardProgramResourceAttributesBudget_unit | null | undefined>(undefined),
			budget_value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			duration_active: new FormControl<number | null | undefined>(undefined),
			end_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			frozen: new FormControl<boolean | null | undefined>(undefined),
			fulfill_as_earned: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			start_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tagline: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RewardProgramResourceAttributesBudget_unit { dollar = 0, point = 1, credit = 2 }

	export interface RewardProgramResourceRelationships {

		/** Required */
		group: RewardProgramResourceRelationshipsGroup;
	}
	export interface RewardProgramResourceRelationshipsFormProperties {
	}
	export function CreateRewardProgramResourceRelationshipsFormGroup() {
		return new FormGroup<RewardProgramResourceRelationshipsFormProperties>({
		});

	}

	export interface RewardProgramResourceRelationshipsGroup {

		/** Required */
		data: RewardProgramResourceRelationshipsGroupData;
	}
	export interface RewardProgramResourceRelationshipsGroupFormProperties {
	}
	export function CreateRewardProgramResourceRelationshipsGroupFormGroup() {
		return new FormGroup<RewardProgramResourceRelationshipsGroupFormProperties>({
		});

	}

	export interface RewardProgramResourceRelationshipsGroupData {

		/** Required */
		id: string;

		/** Required */
		type: string;
	}
	export interface RewardProgramResourceRelationshipsGroupDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRewardProgramResourceRelationshipsGroupDataFormGroup() {
		return new FormGroup<RewardProgramResourceRelationshipsGroupDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRewardProgramResponse {

		/** Required */
		data: RewardProgramResource;
		meta?: CreateOrUpdateMetaResponse;
	}
	export interface CreateRewardProgramResponseFormProperties {
	}
	export function CreateCreateRewardProgramResponseFormGroup() {
		return new FormGroup<CreateRewardProgramResponseFormProperties>({
		});

	}

	export interface CreateRewardRequest {

		/** Required */
		data: RewardResource;
	}
	export interface CreateRewardRequestFormProperties {
	}
	export function CreateCreateRewardRequestFormGroup() {
		return new FormGroup<CreateRewardRequestFormProperties>({
		});

	}

	export interface RewardResource {
		attributes?: RewardResourceAttributes;
		id?: string | null;
		relationships?: RewardResourceRelationships;

		/** Required */
		type: string;
	}
	export interface RewardResourceFormProperties {
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRewardResourceFormGroup() {
		return new FormGroup<RewardResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RewardResourceAttributes {

		/** Unique string identifying the health action with which the reward is associated. */
		_thread?: string | null;

		/**
		 * Date at which the reward was allocated. (Must be after the reward program is activated and before it is deactivated or expires)
		 * Required
		 */
		allocated_at: string;

		/** Unit of the reward program. (Read-only property) */
		allocated_unit?: string | null;

		/**
		 * Value of the reward program budget allocated for the reward. (Must not exceed the remaining budget for the reward program activation)
		 * Required
		 */
		allocated_value: number;

		/**
		 * Description of the reward.
		 * Required
		 */
		description: string;

		/** Date at which the reward was earned. (Read-only property) */
		earned_at?: string | null;

		/** Value of the reward that has been earned. (Read-only property) */
		earned_value?: number | null;

		/** Date at which the reward earning was fulfilled. (Read-only property) */
		fulfilled_at?: string | null;

		/** Value of the earned reward that has been fulfilled. (Read-only property) */
		fulfilled_value?: number | null;

		/** Date at which the patient aspires to achieve the reward. (Must be the same or after the allocated_at date) */
		target_at?: string | null;
	}
	export interface RewardResourceAttributesFormProperties {

		/** Unique string identifying the health action with which the reward is associated. */
		_thread: FormControl<string | null | undefined>,

		/**
		 * Date at which the reward was allocated. (Must be after the reward program is activated and before it is deactivated or expires)
		 * Required
		 */
		allocated_at: FormControl<string | null | undefined>,

		/** Unit of the reward program. (Read-only property) */
		allocated_unit: FormControl<string | null | undefined>,

		/**
		 * Value of the reward program budget allocated for the reward. (Must not exceed the remaining budget for the reward program activation)
		 * Required
		 */
		allocated_value: FormControl<number | null | undefined>,

		/**
		 * Description of the reward.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/** Date at which the reward was earned. (Read-only property) */
		earned_at: FormControl<string | null | undefined>,

		/** Value of the reward that has been earned. (Read-only property) */
		earned_value: FormControl<number | null | undefined>,

		/** Date at which the reward earning was fulfilled. (Read-only property) */
		fulfilled_at: FormControl<string | null | undefined>,

		/** Value of the earned reward that has been fulfilled. (Read-only property) */
		fulfilled_value: FormControl<number | null | undefined>,

		/** Date at which the patient aspires to achieve the reward. (Must be the same or after the allocated_at date) */
		target_at: FormControl<string | null | undefined>,
	}
	export function CreateRewardResourceAttributesFormGroup() {
		return new FormGroup<RewardResourceAttributesFormProperties>({
			_thread: new FormControl<string | null | undefined>(undefined),
			allocated_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			allocated_unit: new FormControl<string | null | undefined>(undefined),
			allocated_value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			earned_at: new FormControl<string | null | undefined>(undefined),
			earned_value: new FormControl<number | null | undefined>(undefined),
			fulfilled_at: new FormControl<string | null | undefined>(undefined),
			fulfilled_value: new FormControl<number | null | undefined>(undefined),
			target_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RewardResourceRelationships {
		patient?: RewardResourceRelationshipsPatient;

		/** Required */
		reward_program_activation: RewardResourceRelationshipsReward_program_activation;
	}
	export interface RewardResourceRelationshipsFormProperties {
	}
	export function CreateRewardResourceRelationshipsFormGroup() {
		return new FormGroup<RewardResourceRelationshipsFormProperties>({
		});

	}

	export interface RewardResourceRelationshipsPatient {
		data?: RewardResourceRelationshipsPatientData;
	}
	export interface RewardResourceRelationshipsPatientFormProperties {
	}
	export function CreateRewardResourceRelationshipsPatientFormGroup() {
		return new FormGroup<RewardResourceRelationshipsPatientFormProperties>({
		});

	}

	export interface RewardResourceRelationshipsPatientData {
		id?: string | null;
		type?: string | null;
	}
	export interface RewardResourceRelationshipsPatientDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRewardResourceRelationshipsPatientDataFormGroup() {
		return new FormGroup<RewardResourceRelationshipsPatientDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RewardResourceRelationshipsReward_program_activation {
		data?: RewardResourceRelationshipsReward_program_activationData;
	}
	export interface RewardResourceRelationshipsReward_program_activationFormProperties {
	}
	export function CreateRewardResourceRelationshipsReward_program_activationFormGroup() {
		return new FormGroup<RewardResourceRelationshipsReward_program_activationFormProperties>({
		});

	}

	export interface RewardResourceRelationshipsReward_program_activationData {
		id?: string | null;
		type?: string | null;
	}
	export interface RewardResourceRelationshipsReward_program_activationDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRewardResourceRelationshipsReward_program_activationDataFormGroup() {
		return new FormGroup<RewardResourceRelationshipsReward_program_activationDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRewardResponse {

		/** Required */
		data: RewardResource;
		meta?: CreateOrUpdateMetaResponse;
	}
	export interface CreateRewardResponseFormProperties {
	}
	export function CreateCreateRewardResponseFormGroup() {
		return new FormGroup<CreateRewardResponseFormProperties>({
		});

	}

	export interface CreateTokenRequest {

		/** Required */
		data: CreateTokenRequestData;
	}
	export interface CreateTokenRequestFormProperties {
	}
	export function CreateCreateTokenRequestFormGroup() {
		return new FormGroup<CreateTokenRequestFormProperties>({
		});

	}

	export interface CreateTokenRequestData {

		/** Required */
		attributes: CreateTokenRequestDataAttributes;
		type?: CreateTokenRequestDataType | null;
	}
	export interface CreateTokenRequestDataFormProperties {
		type: FormControl<CreateTokenRequestDataType | null | undefined>,
	}
	export function CreateCreateTokenRequestDataFormGroup() {
		return new FormGroup<CreateTokenRequestDataFormProperties>({
			type: new FormControl<CreateTokenRequestDataType | null | undefined>(undefined),
		});

	}

	export interface CreateTokenRequestDataAttributes {

		/**
		 * Contact Fitbit Plus API Support to get a client id and secret.
		 * Required
		 */
		client_id: string;

		/** Contact Fitbit Plus API Support to get a client id and secret. Secret is required if grant_type is "client_credentials" */
		client_secret?: string | null;

		/** Required */
		grant_type: CreateTokenRequestDataAttributesGrant_type;

		/** Required if grant_type is "refresh_token" */
		refresh_token?: string | null;
	}
	export interface CreateTokenRequestDataAttributesFormProperties {

		/**
		 * Contact Fitbit Plus API Support to get a client id and secret.
		 * Required
		 */
		client_id: FormControl<string | null | undefined>,

		/** Contact Fitbit Plus API Support to get a client id and secret. Secret is required if grant_type is "client_credentials" */
		client_secret: FormControl<string | null | undefined>,

		/** Required */
		grant_type: FormControl<CreateTokenRequestDataAttributesGrant_type | null | undefined>,

		/** Required if grant_type is "refresh_token" */
		refresh_token: FormControl<string | null | undefined>,
	}
	export function CreateCreateTokenRequestDataAttributesFormGroup() {
		return new FormGroup<CreateTokenRequestDataAttributesFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			client_secret: new FormControl<string | null | undefined>(undefined),
			grant_type: new FormControl<CreateTokenRequestDataAttributesGrant_type | null | undefined>(undefined, [Validators.required]),
			refresh_token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateTokenRequestDataAttributesGrant_type { refresh_token = 0, client_credentials = 1 }

	export enum CreateTokenRequestDataType { token = 0 }

	export interface CreateTokenResponse {

		/** Required */
		data: TokenResource;
		included?: Array<GroupResource>;
		meta?: CreateOrUpdateMetaResponse;
	}
	export interface CreateTokenResponseFormProperties {
	}
	export function CreateCreateTokenResponseFormGroup() {
		return new FormGroup<CreateTokenResponseFormProperties>({
		});

	}

	export interface TokenResource {
		attributes?: any;

		/** Required */
		id: string;
		relationships?: TokenResourceRelationships;

		/** Required */
		type: CreateTokenRequestDataType;
	}
	export interface TokenResourceFormProperties {
		attributes: FormControl<any | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<CreateTokenRequestDataType | null | undefined>,
	}
	export function CreateTokenResourceFormGroup() {
		return new FormGroup<TokenResourceFormProperties>({
			attributes: new FormControl<any | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CreateTokenRequestDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TokenResourceRelationships {
		groups?: any;
		organization?: any;
	}
	export interface TokenResourceRelationshipsFormProperties {
		groups: FormControl<any | null | undefined>,
		organization: FormControl<any | null | undefined>,
	}
	export function CreateTokenResourceRelationshipsFormGroup() {
		return new FormGroup<TokenResourceRelationshipsFormProperties>({
			groups: new FormControl<any | null | undefined>(undefined),
			organization: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface EmailHistoryResource {
		attributes?: EmailHistoryResourceAttributes;
		id?: string | null;
		relationships?: EmailHistoryResourceRelationships;

		/** Required */
		type: string;
	}
	export interface EmailHistoryResourceFormProperties {
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateEmailHistoryResourceFormGroup() {
		return new FormGroup<EmailHistoryResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EmailHistoryResourceAttributes {

		/** Address email was sent to. */
		email_address?: string | null;

		/** Type of email. */
		email_type?: string | null;

		/** Time email was sent. */
		send_time?: string | null;

		/** Status of email. Multiple statuses may be defined. The current status is the one with the most recent date. */
		status_times?: EmailHistoryResourceAttributesStatus_times;

		/** Unique identifier for this email. */
		twine_email_id?: string | null;
	}
	export interface EmailHistoryResourceAttributesFormProperties {

		/** Address email was sent to. */
		email_address: FormControl<string | null | undefined>,

		/** Type of email. */
		email_type: FormControl<string | null | undefined>,

		/** Time email was sent. */
		send_time: FormControl<string | null | undefined>,

		/** Unique identifier for this email. */
		twine_email_id: FormControl<string | null | undefined>,
	}
	export function CreateEmailHistoryResourceAttributesFormGroup() {
		return new FormGroup<EmailHistoryResourceAttributesFormProperties>({
			email_address: new FormControl<string | null | undefined>(undefined),
			email_type: new FormControl<string | null | undefined>(undefined),
			send_time: new FormControl<string | null | undefined>(undefined),
			twine_email_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmailHistoryResourceAttributesStatus_times {

		/** Time email was bounced. */
		bounce?: string | null;

		/** Time email was clicked. */
		click?: string | null;

		/** Time email was deferred. */
		deferred?: string | null;

		/** Time email was delivered. */
		delivered?: string | null;

		/** Time email was dropped. */
		dropped?: string | null;

		/** Time email was opened. */
		open?: string | null;

		/** Time email was processed. */
		processed?: string | null;

		/** Time email was reported as spam. */
		spamreport?: string | null;

		/** Time email was unsubscribed from. */
		unsubscribe?: string | null;
	}
	export interface EmailHistoryResourceAttributesStatus_timesFormProperties {

		/** Time email was bounced. */
		bounce: FormControl<string | null | undefined>,

		/** Time email was clicked. */
		click: FormControl<string | null | undefined>,

		/** Time email was deferred. */
		deferred: FormControl<string | null | undefined>,

		/** Time email was delivered. */
		delivered: FormControl<string | null | undefined>,

		/** Time email was dropped. */
		dropped: FormControl<string | null | undefined>,

		/** Time email was opened. */
		open: FormControl<string | null | undefined>,

		/** Time email was processed. */
		processed: FormControl<string | null | undefined>,

		/** Time email was reported as spam. */
		spamreport: FormControl<string | null | undefined>,

		/** Time email was unsubscribed from. */
		unsubscribe: FormControl<string | null | undefined>,
	}
	export function CreateEmailHistoryResourceAttributesStatus_timesFormGroup() {
		return new FormGroup<EmailHistoryResourceAttributesStatus_timesFormProperties>({
			bounce: new FormControl<string | null | undefined>(undefined),
			click: new FormControl<string | null | undefined>(undefined),
			deferred: new FormControl<string | null | undefined>(undefined),
			delivered: new FormControl<string | null | undefined>(undefined),
			dropped: new FormControl<string | null | undefined>(undefined),
			open: new FormControl<string | null | undefined>(undefined),
			processed: new FormControl<string | null | undefined>(undefined),
			spamreport: new FormControl<string | null | undefined>(undefined),
			unsubscribe: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmailHistoryResourceRelationships {
		receiver?: EmailHistoryResourceRelationshipsReceiver;
		sender?: EmailHistoryResourceRelationshipsSender;
	}
	export interface EmailHistoryResourceRelationshipsFormProperties {
	}
	export function CreateEmailHistoryResourceRelationshipsFormGroup() {
		return new FormGroup<EmailHistoryResourceRelationshipsFormProperties>({
		});

	}

	export interface EmailHistoryResourceRelationshipsReceiver {
		data?: EmailHistoryResourceRelationshipsReceiverData;
	}
	export interface EmailHistoryResourceRelationshipsReceiverFormProperties {
	}
	export function CreateEmailHistoryResourceRelationshipsReceiverFormGroup() {
		return new FormGroup<EmailHistoryResourceRelationshipsReceiverFormProperties>({
		});

	}

	export interface EmailHistoryResourceRelationshipsReceiverData {
		id?: string | null;
		type?: string | null;
	}
	export interface EmailHistoryResourceRelationshipsReceiverDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateEmailHistoryResourceRelationshipsReceiverDataFormGroup() {
		return new FormGroup<EmailHistoryResourceRelationshipsReceiverDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmailHistoryResourceRelationshipsSender {
		data?: EmailHistoryResourceRelationshipsSenderData;
	}
	export interface EmailHistoryResourceRelationshipsSenderFormProperties {
	}
	export function CreateEmailHistoryResourceRelationshipsSenderFormGroup() {
		return new FormGroup<EmailHistoryResourceRelationshipsSenderFormProperties>({
		});

	}

	export interface EmailHistoryResourceRelationshipsSenderData {
		id?: string | null;
		type?: string | null;
	}
	export interface EmailHistoryResourceRelationshipsSenderDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateEmailHistoryResourceRelationshipsSenderDataFormGroup() {
		return new FormGroup<EmailHistoryResourceRelationshipsSenderDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FetchActionResponse {

		/** Required */
		data: ActionResource;
		meta?: FetchMetaResponse;
	}
	export interface FetchActionResponseFormProperties {
	}
	export function CreateFetchActionResponseFormGroup() {
		return new FormGroup<FetchActionResponseFormProperties>({
		});

	}

	export interface FetchMetaResponse {
		count?: number | null;
		req_id?: string | null;
	}
	export interface FetchMetaResponseFormProperties {
		count: FormControl<number | null | undefined>,
		req_id: FormControl<string | null | undefined>,
	}
	export function CreateFetchMetaResponseFormGroup() {
		return new FormGroup<FetchMetaResponseFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			req_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FetchBundleResponse {

		/** Required */
		data: BundleResource;
		meta?: FetchMetaResponse;
	}
	export interface FetchBundleResponseFormProperties {
	}
	export function CreateFetchBundleResponseFormGroup() {
		return new FormGroup<FetchBundleResponseFormProperties>({
		});

	}

	export interface FetchCalendarEventResponse {
		data?: CalendarEventResource;

		/**
		 * Related resources which are included in the response based on the `include` param.
		 * Attributes of each resource will vary depending on the type.
		 * See [patient](#operation/fetchPatient)
		 */
		included?: Array<Resource>;
		meta?: FetchMetaResponse;
	}
	export interface FetchCalendarEventResponseFormProperties {
	}
	export function CreateFetchCalendarEventResponseFormGroup() {
		return new FormGroup<FetchCalendarEventResponseFormProperties>({
		});

	}

	export interface Resource {
		attributes?: string | null;
		id?: string | null;
		type?: string | null;
	}
	export interface ResourceFormProperties {
		attributes: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			attributes: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FetchCalendarEventsResponse {
		data?: Array<CalendarEventResource>;

		/**
		 * Related resources which are included in the response based on the `include` param.
		 * Attributes of each resource will vary depending on the type.
		 * See [patient](#operation/fetchPatient)
		 */
		included?: Array<Resource>;
		links?: CollectionResponseLinks;
		meta?: FetchMetaResponse;
	}
	export interface FetchCalendarEventsResponseFormProperties {
	}
	export function CreateFetchCalendarEventsResponseFormGroup() {
		return new FormGroup<FetchCalendarEventsResponseFormProperties>({
		});

	}

	export interface FetchCoachResponse {

		/** Required */
		data: CoachResource;
		meta?: FetchMetaResponse;
	}
	export interface FetchCoachResponseFormProperties {
	}
	export function CreateFetchCoachResponseFormGroup() {
		return new FormGroup<FetchCoachResponseFormProperties>({
		});

	}

	export interface FetchCoachesResponse {

		/** Required */
		data: Array<CoachResource>;
		meta?: FetchMetaResponse;
	}
	export interface FetchCoachesResponseFormProperties {
	}
	export function CreateFetchCoachesResponseFormGroup() {
		return new FormGroup<FetchCoachesResponseFormProperties>({
		});

	}

	export interface FetchEmailHistoriesResponse {

		/** Required */
		data: Array<EmailHistoryResource>;
		meta?: FetchMetaResponse;
	}
	export interface FetchEmailHistoriesResponseFormProperties {
	}
	export function CreateFetchEmailHistoriesResponseFormGroup() {
		return new FormGroup<FetchEmailHistoriesResponseFormProperties>({
		});

	}

	export interface FetchEmailHistoryResponse {

		/** Required */
		data: EmailHistoryResource;
		meta?: FetchMetaResponse;
	}
	export interface FetchEmailHistoryResponseFormProperties {
	}
	export function CreateFetchEmailHistoryResponseFormGroup() {
		return new FormGroup<FetchEmailHistoryResponseFormProperties>({
		});

	}

	export interface FetchErrorResponse {
		errors?: Error;
		meta?: FetchMetaResponse;
	}
	export interface FetchErrorResponseFormProperties {
	}
	export function CreateFetchErrorResponseFormGroup() {
		return new FormGroup<FetchErrorResponseFormProperties>({
		});

	}

	export interface FetchGroupResponse {

		/** Required */
		data: GroupResource;
		meta?: FetchMetaResponse;
	}
	export interface FetchGroupResponseFormProperties {
	}
	export function CreateFetchGroupResponseFormGroup() {
		return new FormGroup<FetchGroupResponseFormProperties>({
		});

	}

	export interface FetchGroupsResponse {

		/** Required */
		data: Array<GroupResource>;
		meta?: FetchMetaResponse;
	}
	export interface FetchGroupsResponseFormProperties {
	}
	export function CreateFetchGroupsResponseFormGroup() {
		return new FormGroup<FetchGroupsResponseFormProperties>({
		});

	}

	export interface FetchHealthProfileAnswerResponse {

		/** Required */
		data: HealthProfileAnswerResource;

		/**
		 * Related resources which are included in the response based on the `include` param.
		 * Attributes of each resource will vary depending on the type.
		 * See [patient](#operation/fetchPatient)
		 */
		included?: Array<Resource>;
		meta?: FetchMetaResponse;
	}
	export interface FetchHealthProfileAnswerResponseFormProperties {
	}
	export function CreateFetchHealthProfileAnswerResponseFormGroup() {
		return new FormGroup<FetchHealthProfileAnswerResponseFormProperties>({
		});

	}

	export interface HealthProfileAnswerResource {
		attributes?: HealthProfileAnswerResourceAttributes;

		/** Required */
		id: string;
		links?: HealthProfileAnswerResourceLinks;
		relationships?: HealthProfileAnswerResourceRelationships;

		/** Required */
		type: string;
	}
	export interface HealthProfileAnswerResourceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateHealthProfileAnswerResourceFormGroup() {
		return new FormGroup<HealthProfileAnswerResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HealthProfileAnswerResourceAttributes {

		/** List of details of previous answers for a health profile question */
		HealthProfileAnswerResourceAttributesHistory?: Array<HealthProfileAnswerResourceAttributesHistory>;

		/** The details of the latest answer for a health profile question */
		latest?: HealthProfileAnswerResourceAttributesLatest;
		question_id?: string | null;
	}
	export interface HealthProfileAnswerResourceAttributesFormProperties {
		question_id: FormControl<string | null | undefined>,
	}
	export function CreateHealthProfileAnswerResourceAttributesFormGroup() {
		return new FormGroup<HealthProfileAnswerResourceAttributesFormProperties>({
			question_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HealthProfileAnswerResourceAttributesHistory {

		/** The id of the patient or coach who answered the health profile question */
		_created_by?: string | null;

		/** The date when the health profile question is answered */
		answered_at?: string | null;

		/** The value of the answer entered for the health profile question */
		value?: string | null;
	}
	export interface HealthProfileAnswerResourceAttributesHistoryFormProperties {

		/** The id of the patient or coach who answered the health profile question */
		_created_by: FormControl<string | null | undefined>,

		/** The date when the health profile question is answered */
		answered_at: FormControl<string | null | undefined>,

		/** The value of the answer entered for the health profile question */
		value: FormControl<string | null | undefined>,
	}
	export function CreateHealthProfileAnswerResourceAttributesHistoryFormGroup() {
		return new FormGroup<HealthProfileAnswerResourceAttributesHistoryFormProperties>({
			_created_by: new FormControl<string | null | undefined>(undefined),
			answered_at: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HealthProfileAnswerResourceAttributesLatest {

		/** The id of the patient or coach who answered the health profile question */
		_created_by?: string | null;

		/** The date when the health profile question is answered */
		answered_at?: string | null;

		/** The value of the answer entered for the health profile question */
		value?: string | null;
	}
	export interface HealthProfileAnswerResourceAttributesLatestFormProperties {

		/** The id of the patient or coach who answered the health profile question */
		_created_by: FormControl<string | null | undefined>,

		/** The date when the health profile question is answered */
		answered_at: FormControl<string | null | undefined>,

		/** The value of the answer entered for the health profile question */
		value: FormControl<string | null | undefined>,
	}
	export function CreateHealthProfileAnswerResourceAttributesLatestFormGroup() {
		return new FormGroup<HealthProfileAnswerResourceAttributesLatestFormProperties>({
			_created_by: new FormControl<string | null | undefined>(undefined),
			answered_at: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HealthProfileAnswerResourceLinks {

		/** Required */
		self: string;
	}
	export interface HealthProfileAnswerResourceLinksFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateHealthProfileAnswerResourceLinksFormGroup() {
		return new FormGroup<HealthProfileAnswerResourceLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('/health_profile_answer/[0-9a-z]+')]),
		});

	}

	export interface HealthProfileAnswerResourceRelationships {
		patient?: HealthProfileAnswerResourceRelationshipsPatient;
	}
	export interface HealthProfileAnswerResourceRelationshipsFormProperties {
	}
	export function CreateHealthProfileAnswerResourceRelationshipsFormGroup() {
		return new FormGroup<HealthProfileAnswerResourceRelationshipsFormProperties>({
		});

	}

	export interface HealthProfileAnswerResourceRelationshipsPatient {
		data?: HealthProfileAnswerResourceRelationshipsPatientData;
		links?: HealthProfileAnswerResourceRelationshipsPatientLinks;
	}
	export interface HealthProfileAnswerResourceRelationshipsPatientFormProperties {
	}
	export function CreateHealthProfileAnswerResourceRelationshipsPatientFormGroup() {
		return new FormGroup<HealthProfileAnswerResourceRelationshipsPatientFormProperties>({
		});

	}

	export interface HealthProfileAnswerResourceRelationshipsPatientData {
		id?: string | null;
		type?: string | null;
	}
	export interface HealthProfileAnswerResourceRelationshipsPatientDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateHealthProfileAnswerResourceRelationshipsPatientDataFormGroup() {
		return new FormGroup<HealthProfileAnswerResourceRelationshipsPatientDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HealthProfileAnswerResourceRelationshipsPatientLinks {
		related?: string | null;
	}
	export interface HealthProfileAnswerResourceRelationshipsPatientLinksFormProperties {
		related: FormControl<string | null | undefined>,
	}
	export function CreateHealthProfileAnswerResourceRelationshipsPatientLinksFormGroup() {
		return new FormGroup<HealthProfileAnswerResourceRelationshipsPatientLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined, [Validators.pattern('/pub/health_profile_answer/[0-9a-z]+')]),
		});

	}

	export interface FetchHealthProfileAnswersResponse {

		/** Required */
		data: Array<HealthProfileAnswerResource>;

		/**
		 * Related resources which are included in the response based on the `include` param.
		 * Attributes of each resource will vary depending on the type.
		 * See [patient](#operation/fetchPatient)
		 */
		included?: Array<Resource>;
		links?: CollectionResponseLinks;
		meta?: FetchMetaResponse;
	}
	export interface FetchHealthProfileAnswersResponseFormProperties {
	}
	export function CreateFetchHealthProfileAnswersResponseFormGroup() {
		return new FormGroup<FetchHealthProfileAnswersResponseFormProperties>({
		});

	}

	export interface FetchHealthProfileQuestionResponse {

		/** Required */
		data: HealthProfileQuestionResource;

		/**
		 * Related resources which are included in the response based on the `include` param.
		 * Attributes of each resource will vary depending on the type.
		 * See [question_definition](#operation/fetchHealthQuestionDefinition), [answer](#operation/fetchHealthProfileAnswer)
		 */
		included?: Array<Resource>;
		meta?: FetchMetaResponse;
	}
	export interface FetchHealthProfileQuestionResponseFormProperties {
	}
	export function CreateFetchHealthProfileQuestionResponseFormGroup() {
		return new FormGroup<FetchHealthProfileQuestionResponseFormProperties>({
		});

	}

	export interface HealthProfileQuestionResource {

		/**
		 * A health profile question does not have any attribute since it only relates an answer to the corresponding question definition.
		 */
		attributes?: string | null;

		/** Required */
		id: string;
		links?: HealthProfileQuestionResourceLinks;
		relationships?: HealthProfileQuestionResourceRelationships;

		/** Required */
		type: string;
	}
	export interface HealthProfileQuestionResourceFormProperties {

		/**
		 * A health profile question does not have any attribute since it only relates an answer to the corresponding question definition.
		 */
		attributes: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateHealthProfileQuestionResourceFormGroup() {
		return new FormGroup<HealthProfileQuestionResourceFormProperties>({
			attributes: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HealthProfileQuestionResourceLinks {

		/** Required */
		self: string;
	}
	export interface HealthProfileQuestionResourceLinksFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateHealthProfileQuestionResourceLinksFormGroup() {
		return new FormGroup<HealthProfileQuestionResourceLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('/pub/health_profile_question/[0-9a-z]+')]),
		});

	}

	export interface HealthProfileQuestionResourceRelationships {
		answer?: HealthProfileQuestionResourceRelationshipsAnswer;
		profile?: HealthProfileQuestionResourceRelationshipsProfile;
		question_definition?: HealthProfileQuestionResourceRelationshipsQuestion_definition;
	}
	export interface HealthProfileQuestionResourceRelationshipsFormProperties {
	}
	export function CreateHealthProfileQuestionResourceRelationshipsFormGroup() {
		return new FormGroup<HealthProfileQuestionResourceRelationshipsFormProperties>({
		});

	}

	export interface HealthProfileQuestionResourceRelationshipsAnswer {
		data?: HealthProfileQuestionResourceRelationshipsAnswerData;
		links?: HealthProfileQuestionResourceRelationshipsAnswerLinks;
	}
	export interface HealthProfileQuestionResourceRelationshipsAnswerFormProperties {
	}
	export function CreateHealthProfileQuestionResourceRelationshipsAnswerFormGroup() {
		return new FormGroup<HealthProfileQuestionResourceRelationshipsAnswerFormProperties>({
		});

	}

	export interface HealthProfileQuestionResourceRelationshipsAnswerData {
		id?: string | null;
		type?: string | null;
	}
	export interface HealthProfileQuestionResourceRelationshipsAnswerDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateHealthProfileQuestionResourceRelationshipsAnswerDataFormGroup() {
		return new FormGroup<HealthProfileQuestionResourceRelationshipsAnswerDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HealthProfileQuestionResourceRelationshipsAnswerLinks {
		related?: string | null;
	}
	export interface HealthProfileQuestionResourceRelationshipsAnswerLinksFormProperties {
		related: FormControl<string | null | undefined>,
	}
	export function CreateHealthProfileQuestionResourceRelationshipsAnswerLinksFormGroup() {
		return new FormGroup<HealthProfileQuestionResourceRelationshipsAnswerLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined, [Validators.pattern('/pub/health_profile_question/[0-9a-z]+/answer')]),
		});

	}

	export interface HealthProfileQuestionResourceRelationshipsProfile {
		links?: HealthProfileQuestionResourceRelationshipsProfileLinks;
	}
	export interface HealthProfileQuestionResourceRelationshipsProfileFormProperties {
	}
	export function CreateHealthProfileQuestionResourceRelationshipsProfileFormGroup() {
		return new FormGroup<HealthProfileQuestionResourceRelationshipsProfileFormProperties>({
		});

	}

	export interface HealthProfileQuestionResourceRelationshipsProfileLinks {
		related?: string | null;
	}
	export interface HealthProfileQuestionResourceRelationshipsProfileLinksFormProperties {
		related: FormControl<string | null | undefined>,
	}
	export function CreateHealthProfileQuestionResourceRelationshipsProfileLinksFormGroup() {
		return new FormGroup<HealthProfileQuestionResourceRelationshipsProfileLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined, [Validators.pattern('/pub/health_profile_question/[0-9a-z]+/profile')]),
		});

	}

	export interface HealthProfileQuestionResourceRelationshipsQuestion_definition {
		data?: HealthProfileQuestionResourceRelationshipsQuestion_definitionData;
		links?: any;
	}
	export interface HealthProfileQuestionResourceRelationshipsQuestion_definitionFormProperties {
		links: FormControl<any | null | undefined>,
	}
	export function CreateHealthProfileQuestionResourceRelationshipsQuestion_definitionFormGroup() {
		return new FormGroup<HealthProfileQuestionResourceRelationshipsQuestion_definitionFormProperties>({
			links: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface HealthProfileQuestionResourceRelationshipsQuestion_definitionData {
		id?: string | null;
		type?: string | null;
	}
	export interface HealthProfileQuestionResourceRelationshipsQuestion_definitionDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateHealthProfileQuestionResourceRelationshipsQuestion_definitionDataFormGroup() {
		return new FormGroup<HealthProfileQuestionResourceRelationshipsQuestion_definitionDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FetchHealthProfileQuestionsResponse {

		/** Required */
		data: Array<HealthProfileQuestionResource>;

		/**
		 * Related resources which are included in the response based on the `include` param.
		 * Attributes of each resource will vary depending on the type.
		 * See [question_definition](#operation/fetchHealthQuestionDefinition), [answer](#operation/fetchHealthProfileAnswer)
		 */
		included?: Array<Resource>;
		links?: CollectionResponseLinks;
		meta?: FetchMetaResponse;
	}
	export interface FetchHealthProfileQuestionsResponseFormProperties {
	}
	export function CreateFetchHealthProfileQuestionsResponseFormGroup() {
		return new FormGroup<FetchHealthProfileQuestionsResponseFormProperties>({
		});

	}

	export interface FetchHealthProfileResponse {

		/** Required */
		data: HealthProfileResource;

		/**
		 * Related resources which are included in the response based on the `include` param.
		 * Attributes of each resource will vary depending on the type.
		 * See [patient](#operation/fetchPatient), [question](#operation/fetchHealthProfileQuestion)
		 */
		included?: Array<Resource>;
		meta?: FetchMetaResponse;
	}
	export interface FetchHealthProfileResponseFormProperties {
	}
	export function CreateFetchHealthProfileResponseFormGroup() {
		return new FormGroup<FetchHealthProfileResponseFormProperties>({
		});

	}

	export interface HealthProfileResource {
		attributes?: HealthProfileResourceAttributes;
		id?: string | null;
		links?: HealthProfileResourceLinks;
		relationships?: HealthProfileResourceRelationships;

		/** Required */
		type: string;
	}
	export interface HealthProfileResourceFormProperties {
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateHealthProfileResourceFormGroup() {
		return new FormGroup<HealthProfileResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HealthProfileResourceAttributes {

		/** List of category, answered and total counts for questions in the health profile */
		HealthProfileResourceAttributesStats?: Array<HealthProfileResourceAttributesStats>;
	}
	export interface HealthProfileResourceAttributesFormProperties {
	}
	export function CreateHealthProfileResourceAttributesFormGroup() {
		return new FormGroup<HealthProfileResourceAttributesFormProperties>({
		});

	}

	export interface HealthProfileResourceAttributesStats {
		answered?: number | null;
		category?: HealthProfileResourceAttributesStatsCategory | null;
		total?: number | null;
	}
	export interface HealthProfileResourceAttributesStatsFormProperties {
		answered: FormControl<number | null | undefined>,
		category: FormControl<HealthProfileResourceAttributesStatsCategory | null | undefined>,
		total: FormControl<number | null | undefined>,
	}
	export function CreateHealthProfileResourceAttributesStatsFormGroup() {
		return new FormGroup<HealthProfileResourceAttributesStatsFormProperties>({
			answered: new FormControl<number | null | undefined>(undefined),
			category: new FormControl<HealthProfileResourceAttributesStatsCategory | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum HealthProfileResourceAttributesStatsCategory { lifestyle_behaviors = 0, mental_wellbeing = 1, preventative_care = 2, overall = 3 }

	export interface HealthProfileResourceLinks {

		/** Required */
		self: string;
	}
	export interface HealthProfileResourceLinksFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateHealthProfileResourceLinksFormGroup() {
		return new FormGroup<HealthProfileResourceLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('/health_profile/[0-9a-z]+')]),
		});

	}

	export interface HealthProfileResourceRelationships {
		patient?: HealthProfileResourceRelationshipsPatient;
		questions?: HealthProfileResourceRelationshipsQuestions;
	}
	export interface HealthProfileResourceRelationshipsFormProperties {
	}
	export function CreateHealthProfileResourceRelationshipsFormGroup() {
		return new FormGroup<HealthProfileResourceRelationshipsFormProperties>({
		});

	}

	export interface HealthProfileResourceRelationshipsPatient {
		data?: HealthProfileResourceRelationshipsPatientData;
		links?: HealthProfileResourceRelationshipsPatientLinks;
	}
	export interface HealthProfileResourceRelationshipsPatientFormProperties {
	}
	export function CreateHealthProfileResourceRelationshipsPatientFormGroup() {
		return new FormGroup<HealthProfileResourceRelationshipsPatientFormProperties>({
		});

	}

	export interface HealthProfileResourceRelationshipsPatientData {
		id?: string | null;
		type?: string | null;
	}
	export interface HealthProfileResourceRelationshipsPatientDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateHealthProfileResourceRelationshipsPatientDataFormGroup() {
		return new FormGroup<HealthProfileResourceRelationshipsPatientDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HealthProfileResourceRelationshipsPatientLinks {
		related?: string | null;
	}
	export interface HealthProfileResourceRelationshipsPatientLinksFormProperties {
		related: FormControl<string | null | undefined>,
	}
	export function CreateHealthProfileResourceRelationshipsPatientLinksFormGroup() {
		return new FormGroup<HealthProfileResourceRelationshipsPatientLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined, [Validators.pattern('/pub/health_profile/[0-9a-z]+')]),
		});

	}

	export interface HealthProfileResourceRelationshipsQuestions {
		HealthProfileResourceRelationshipsQuestionsData?: Array<HealthProfileResourceRelationshipsQuestionsData>;
		links?: HealthProfileResourceRelationshipsQuestionsLinks;
	}
	export interface HealthProfileResourceRelationshipsQuestionsFormProperties {
	}
	export function CreateHealthProfileResourceRelationshipsQuestionsFormGroup() {
		return new FormGroup<HealthProfileResourceRelationshipsQuestionsFormProperties>({
		});

	}

	export interface HealthProfileResourceRelationshipsQuestionsData {
		id?: string | null;
		type?: string | null;
	}
	export interface HealthProfileResourceRelationshipsQuestionsDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateHealthProfileResourceRelationshipsQuestionsDataFormGroup() {
		return new FormGroup<HealthProfileResourceRelationshipsQuestionsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HealthProfileResourceRelationshipsQuestionsLinks {
		related?: string | null;
	}
	export interface HealthProfileResourceRelationshipsQuestionsLinksFormProperties {
		related: FormControl<string | null | undefined>,
	}
	export function CreateHealthProfileResourceRelationshipsQuestionsLinksFormGroup() {
		return new FormGroup<HealthProfileResourceRelationshipsQuestionsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined, [Validators.pattern('/pub/health_profile/[0-9a-z]+')]),
		});

	}

	export interface FetchHealthProfilesResponse {

		/** Required */
		data: Array<HealthProfileResource>;

		/**
		 * Related resources which are included in the response based on the `include` param.
		 * Attributes of each resource will vary depending on the type.
		 * See [patient](#operation/fetchPatient), [question](#operation/fetchHealthProfileQuestion)
		 */
		included?: Array<Resource>;
		links?: CollectionResponseLinks;
		meta?: FetchMetaResponse;
	}
	export interface FetchHealthProfilesResponseFormProperties {
	}
	export function CreateFetchHealthProfilesResponseFormGroup() {
		return new FormGroup<FetchHealthProfilesResponseFormProperties>({
		});

	}

	export interface FetchHealthQuestionDefinitionResponse {

		/** Required */
		data: HealthQuestionDefinitionResource;
		meta?: FetchMetaResponse;
	}
	export interface FetchHealthQuestionDefinitionResponseFormProperties {
	}
	export function CreateFetchHealthQuestionDefinitionResponseFormGroup() {
		return new FormGroup<FetchHealthQuestionDefinitionResponseFormProperties>({
		});

	}

	export interface HealthQuestionDefinitionResource {
		attributes?: HealthQuestionDefinitionResourceAttributes;

		/** Required */
		id: string;
		links?: HealthQuestionDefinitionResourceLinks;
		relationships?: string | null;

		/** Required */
		type: string;
	}
	export interface HealthQuestionDefinitionResourceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		relationships: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateHealthQuestionDefinitionResourceFormGroup() {
		return new FormGroup<HealthQuestionDefinitionResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			relationships: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HealthQuestionDefinitionResourceAttributes {

		/** The category for the health profile definition */
		category?: HealthQuestionDefinitionResourceAttributesCategory | null;

		/** The list of formats for the health profile definition */
		format?: HealthQuestionDefinitionResourceAttributesFormat;

		/** The lsit of age and gender requirements for the question to be included */
		HealthQuestionDefinitionResourceAttributesRequirements?: Array<HealthQuestionDefinitionResourceAttributesRequirements>;

		/** The question text which corresponds to the answer choices */
		text?: string | null;
	}
	export interface HealthQuestionDefinitionResourceAttributesFormProperties {

		/** The category for the health profile definition */
		category: FormControl<HealthQuestionDefinitionResourceAttributesCategory | null | undefined>,

		/** The question text which corresponds to the answer choices */
		text: FormControl<string | null | undefined>,
	}
	export function CreateHealthQuestionDefinitionResourceAttributesFormGroup() {
		return new FormGroup<HealthQuestionDefinitionResourceAttributesFormProperties>({
			category: new FormControl<HealthQuestionDefinitionResourceAttributesCategory | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HealthQuestionDefinitionResourceAttributesCategory { lifestyle_behaviors = 0, mental_wellbeing = 1, preventative_care = 2 }

	export interface HealthQuestionDefinitionResourceAttributesFormat {
		HealthQuestionDefinitionResourceAttributesFormatData?: Array<HealthQuestionDefinitionResourceAttributesFormatData>;
		type?: string | null;
	}
	export interface HealthQuestionDefinitionResourceAttributesFormatFormProperties {
		type: FormControl<string | null | undefined>,
	}
	export function CreateHealthQuestionDefinitionResourceAttributesFormatFormGroup() {
		return new FormGroup<HealthQuestionDefinitionResourceAttributesFormatFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HealthQuestionDefinitionResourceAttributesFormatData {
		icon?: string | null;
		label?: string | null;
		value?: string | null;
	}
	export interface HealthQuestionDefinitionResourceAttributesFormatDataFormProperties {
		icon: FormControl<string | null | undefined>,
		label: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateHealthQuestionDefinitionResourceAttributesFormatDataFormGroup() {
		return new FormGroup<HealthQuestionDefinitionResourceAttributesFormatDataFormProperties>({
			icon: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HealthQuestionDefinitionResourceAttributesRequirements {
		property?: string | null;

		/** Specifies if the value in property should be equal to the one in value */
		shouldBeEqual?: boolean | null;

		/** Specifies if the value in property should be greater than the one in value */
		shouldBeGreaterThan?: number | null;

		/** Specifies if the value in property should be less than the one in value */
		shouldBeLessThan?: number | null;

		/** The value to be compared with the one in property, based on shouldBeEqual, shouldBeGreaterThan, or shouldBeLessThan */
		value?: string | null;
	}
	export interface HealthQuestionDefinitionResourceAttributesRequirementsFormProperties {
		property: FormControl<string | null | undefined>,

		/** Specifies if the value in property should be equal to the one in value */
		shouldBeEqual: FormControl<boolean | null | undefined>,

		/** Specifies if the value in property should be greater than the one in value */
		shouldBeGreaterThan: FormControl<number | null | undefined>,

		/** Specifies if the value in property should be less than the one in value */
		shouldBeLessThan: FormControl<number | null | undefined>,

		/** The value to be compared with the one in property, based on shouldBeEqual, shouldBeGreaterThan, or shouldBeLessThan */
		value: FormControl<string | null | undefined>,
	}
	export function CreateHealthQuestionDefinitionResourceAttributesRequirementsFormGroup() {
		return new FormGroup<HealthQuestionDefinitionResourceAttributesRequirementsFormProperties>({
			property: new FormControl<string | null | undefined>(undefined),
			shouldBeEqual: new FormControl<boolean | null | undefined>(undefined),
			shouldBeGreaterThan: new FormControl<number | null | undefined>(undefined),
			shouldBeLessThan: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HealthQuestionDefinitionResourceLinks {

		/** Required */
		self: string;
	}
	export interface HealthQuestionDefinitionResourceLinksFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreateHealthQuestionDefinitionResourceLinksFormGroup() {
		return new FormGroup<HealthQuestionDefinitionResourceLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('/health_question_definition/[0-9]+')]),
		});

	}

	export interface FetchHealthQuestionDefinitionsResponse {

		/** Required */
		data: Array<HealthQuestionDefinitionResource>;
		links?: CollectionResponseLinks;
		meta?: FetchMetaResponse;
	}
	export interface FetchHealthQuestionDefinitionsResponseFormProperties {
	}
	export function CreateFetchHealthQuestionDefinitionsResponseFormGroup() {
		return new FormGroup<FetchHealthQuestionDefinitionsResponseFormProperties>({
		});

	}

	export interface FetchOrganizationResponse {

		/** Required */
		data: OrganizationResource;
		meta?: FetchMetaResponse;
	}
	export interface FetchOrganizationResponseFormProperties {
	}
	export function CreateFetchOrganizationResponseFormGroup() {
		return new FormGroup<FetchOrganizationResponseFormProperties>({
		});

	}

	export interface OrganizationResource {

		/** Required */
		attributes: any;

		/** Required */
		id: string;
		links?: any;

		/** Required */
		type: OrganizationResourceType;
	}
	export interface OrganizationResourceFormProperties {

		/** Required */
		attributes: FormControl<any | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		links: FormControl<any | null | undefined>,

		/** Required */
		type: FormControl<OrganizationResourceType | null | undefined>,
	}
	export function CreateOrganizationResourceFormGroup() {
		return new FormGroup<OrganizationResourceFormProperties>({
			attributes: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			links: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<OrganizationResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OrganizationResourceType { organization = 0 }

	export interface FetchPatientHealthMetricResponse {

		/** Required */
		data: Array<PatientHealthMetricResource>;
		links?: CollectionResponseLinks;
		meta?: FetchMetaResponse;
	}
	export interface FetchPatientHealthMetricResponseFormProperties {
	}
	export function CreateFetchPatientHealthMetricResponseFormGroup() {
		return new FormGroup<FetchPatientHealthMetricResponseFormProperties>({
		});

	}

	export interface FetchPatientHealthResultResponse {

		/** Required */
		data: Array<PatientHealthResultResource>;
		links?: CollectionResponseLinks;
		meta?: FetchMetaResponse;
	}
	export interface FetchPatientHealthResultResponseFormProperties {
	}
	export function CreateFetchPatientHealthResultResponseFormGroup() {
		return new FormGroup<FetchPatientHealthResultResponseFormProperties>({
		});

	}

	export interface PatientHealthResultResource {
		attributes?: PatientHealthResultResourceAttributes;

		/** Required */
		id: string;
		relationships?: PatientHealthResultResourceRelationships;

		/** Required */
		type: string;
	}
	export interface PatientHealthResultResourceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePatientHealthResultResourceFormGroup() {
		return new FormGroup<PatientHealthResultResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientHealthResultResourceAttributes {

		/** Links together results. This should be the same as the thread of _action, if it is defined */
		_thread?: string | null;
		aggregation?: string | null;
		PatientHealthResultResourceAttributesAnnotations?: Array<PatientHealthResultResourceAttributesAnnotations>;
		channel?: string | null;
		data?: PatientHealthResultResourceAttributesData;
		external_id?: string | null;
		metric_type?: PatientHealthMetricResourceAttributesType | null;
		occurred_at?: string | null;
		occurred_at_time_zone?: string | null;
		skipped?: boolean | null;
		source?: PatientHealthResultResourceAttributesSource;

		/** Type of result. Usually the same as metric_type except for lifestyle actions */
		type?: string | null;
		window?: string | null;
	}
	export interface PatientHealthResultResourceAttributesFormProperties {

		/** Links together results. This should be the same as the thread of _action, if it is defined */
		_thread: FormControl<string | null | undefined>,
		aggregation: FormControl<string | null | undefined>,
		channel: FormControl<string | null | undefined>,
		external_id: FormControl<string | null | undefined>,
		metric_type: FormControl<PatientHealthMetricResourceAttributesType | null | undefined>,
		occurred_at: FormControl<string | null | undefined>,
		occurred_at_time_zone: FormControl<string | null | undefined>,
		skipped: FormControl<boolean | null | undefined>,

		/** Type of result. Usually the same as metric_type except for lifestyle actions */
		type: FormControl<string | null | undefined>,
		window: FormControl<string | null | undefined>,
	}
	export function CreatePatientHealthResultResourceAttributesFormGroup() {
		return new FormGroup<PatientHealthResultResourceAttributesFormProperties>({
			_thread: new FormControl<string | null | undefined>(undefined),
			aggregation: new FormControl<string | null | undefined>(undefined),
			channel: new FormControl<string | null | undefined>(undefined),
			external_id: new FormControl<string | null | undefined>(undefined),
			metric_type: new FormControl<PatientHealthMetricResourceAttributesType | null | undefined>(undefined),
			occurred_at: new FormControl<string | null | undefined>(undefined),
			occurred_at_time_zone: new FormControl<string | null | undefined>(undefined),
			skipped: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			window: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientHealthResultResourceAttributesAnnotations {
		text?: string | null;
		title?: string | null;
	}
	export interface PatientHealthResultResourceAttributesAnnotationsFormProperties {
		text: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreatePatientHealthResultResourceAttributesAnnotationsFormGroup() {
		return new FormGroup<PatientHealthResultResourceAttributesAnnotationsFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientHealthResultResourceAttributesData {

		/** Can be any value (number, boolean, string, object) depending on the metric type. Most values are of type number */
		value?: any;
	}
	export interface PatientHealthResultResourceAttributesDataFormProperties {

		/** Can be any value (number, boolean, string, object) depending on the metric type. Most values are of type number */
		value: FormControl<any | null | undefined>,
	}
	export function CreatePatientHealthResultResourceAttributesDataFormGroup() {
		return new FormGroup<PatientHealthResultResourceAttributesDataFormProperties>({
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface PatientHealthResultResourceAttributesSource {

		/** Can be any value */
		metadata?: any;
		name?: string | null;
		source_id?: string | null;
	}
	export interface PatientHealthResultResourceAttributesSourceFormProperties {

		/** Can be any value */
		metadata: FormControl<any | null | undefined>,
		name: FormControl<string | null | undefined>,
		source_id: FormControl<string | null | undefined>,
	}
	export function CreatePatientHealthResultResourceAttributesSourceFormGroup() {
		return new FormGroup<PatientHealthResultResourceAttributesSourceFormProperties>({
			metadata: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientHealthResultResourceRelationships {
		action?: PatientHealthResultResourceRelationshipsAction;
		metric?: PatientHealthResultResourceRelationshipsMetric;
		patient?: PatientHealthResultResourceRelationshipsPatient;
	}
	export interface PatientHealthResultResourceRelationshipsFormProperties {
	}
	export function CreatePatientHealthResultResourceRelationshipsFormGroup() {
		return new FormGroup<PatientHealthResultResourceRelationshipsFormProperties>({
		});

	}

	export interface PatientHealthResultResourceRelationshipsAction {
		data?: PatientHealthResultResourceRelationshipsActionData;
		links?: string | null;
	}
	export interface PatientHealthResultResourceRelationshipsActionFormProperties {
		links: FormControl<string | null | undefined>,
	}
	export function CreatePatientHealthResultResourceRelationshipsActionFormGroup() {
		return new FormGroup<PatientHealthResultResourceRelationshipsActionFormProperties>({
			links: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientHealthResultResourceRelationshipsActionData {
		id?: string | null;
		type?: string | null;
	}
	export interface PatientHealthResultResourceRelationshipsActionDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreatePatientHealthResultResourceRelationshipsActionDataFormGroup() {
		return new FormGroup<PatientHealthResultResourceRelationshipsActionDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientHealthResultResourceRelationshipsMetric {
		data?: PatientHealthResultResourceRelationshipsMetricData;
		links?: string | null;
	}
	export interface PatientHealthResultResourceRelationshipsMetricFormProperties {
		links: FormControl<string | null | undefined>,
	}
	export function CreatePatientHealthResultResourceRelationshipsMetricFormGroup() {
		return new FormGroup<PatientHealthResultResourceRelationshipsMetricFormProperties>({
			links: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientHealthResultResourceRelationshipsMetricData {
		id?: string | null;
		type?: string | null;
	}
	export interface PatientHealthResultResourceRelationshipsMetricDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreatePatientHealthResultResourceRelationshipsMetricDataFormGroup() {
		return new FormGroup<PatientHealthResultResourceRelationshipsMetricDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientHealthResultResourceRelationshipsPatient {
		data?: PatientHealthResultResourceRelationshipsPatientData;
		links?: string | null;
	}
	export interface PatientHealthResultResourceRelationshipsPatientFormProperties {
		links: FormControl<string | null | undefined>,
	}
	export function CreatePatientHealthResultResourceRelationshipsPatientFormGroup() {
		return new FormGroup<PatientHealthResultResourceRelationshipsPatientFormProperties>({
			links: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientHealthResultResourceRelationshipsPatientData {

		/** Required if the `meta.query` is not defined. */
		id?: string | null;

		/** Allows the specification of a query for a patient rather than providing a patient id directly */
		meta?: PatientHealthResultResourceRelationshipsPatientDataMeta;
		type?: string | null;
	}
	export interface PatientHealthResultResourceRelationshipsPatientDataFormProperties {

		/** Required if the `meta.query` is not defined. */
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreatePatientHealthResultResourceRelationshipsPatientDataFormGroup() {
		return new FormGroup<PatientHealthResultResourceRelationshipsPatientDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientHealthResultResourceRelationshipsPatientDataMeta {

		/**
		 * The query must return one and only one patient.
		 * Required
		 */
		query: PatientHealthResultResourceRelationshipsPatientDataMetaQuery;
	}
	export interface PatientHealthResultResourceRelationshipsPatientDataMetaFormProperties {
	}
	export function CreatePatientHealthResultResourceRelationshipsPatientDataMetaFormGroup() {
		return new FormGroup<PatientHealthResultResourceRelationshipsPatientDataMetaFormProperties>({
		});

	}

	export interface PatientHealthResultResourceRelationshipsPatientDataMetaQuery {
		groups?: Array<string>;

		/** Required */
		identifier: PatientHealthResultResourceRelationshipsPatientDataMetaQueryIdentifier;
		organization?: string | null;
	}
	export interface PatientHealthResultResourceRelationshipsPatientDataMetaQueryFormProperties {
		organization: FormControl<string | null | undefined>,
	}
	export function CreatePatientHealthResultResourceRelationshipsPatientDataMetaQueryFormGroup() {
		return new FormGroup<PatientHealthResultResourceRelationshipsPatientDataMetaQueryFormProperties>({
			organization: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientHealthResultResourceRelationshipsPatientDataMetaQueryIdentifier {

		/** Required */
		system: string;

		/** Required */
		value: string;
	}
	export interface PatientHealthResultResourceRelationshipsPatientDataMetaQueryIdentifierFormProperties {

		/** Required */
		system: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePatientHealthResultResourceRelationshipsPatientDataMetaQueryIdentifierFormGroup() {
		return new FormGroup<PatientHealthResultResourceRelationshipsPatientDataMetaQueryIdentifierFormProperties>({
			system: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FetchPatientPlanSummariesResponse {

		/** Required */
		data: Array<PatientPlanSummaryResource>;

		/**
		 * Related resources which are included in the response based on the `include` param.
		 * Attributes of each resource will vary depending on the type.
		 * See [action](#operation/fetchAction), [bundle](#operation/fetchBundle) and [patient](#operation/fetchPatient)
		 */
		included?: Array<Resource>;
		meta?: FetchMetaResponse;
	}
	export interface FetchPatientPlanSummariesResponseFormProperties {
	}
	export function CreateFetchPatientPlanSummariesResponseFormGroup() {
		return new FormGroup<FetchPatientPlanSummariesResponseFormProperties>({
		});

	}

	export interface PatientPlanSummaryResource {
		attributes?: PatientPlanSummaryResourceAttributes;

		/** Required */
		id: string;
		links?: PatientPlanSummaryResourceLinks;
		relationships?: PatientPlanSummaryResourceRelationships;

		/** Required */
		type: PatientPlanSummaryResourceType;
	}
	export interface PatientPlanSummaryResourceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<PatientPlanSummaryResourceType | null | undefined>,
	}
	export function CreatePatientPlanSummaryResourceFormGroup() {
		return new FormGroup<PatientPlanSummaryResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<PatientPlanSummaryResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientPlanSummaryResourceAttributes {
		adherence?: string | null;
		critical?: string | null;
		effective_from?: string | null;
		time_zone?: string | null;
		window_notification_times?: PatientPlanSummaryResourceAttributesWindow_notification_times;
		PatientPlanSummaryResourceAttributesWindow_order?: Array<PatientPlanSummaryResourceAttributesWindow_order>;
	}
	export interface PatientPlanSummaryResourceAttributesFormProperties {
		adherence: FormControl<string | null | undefined>,
		critical: FormControl<string | null | undefined>,
		effective_from: FormControl<string | null | undefined>,
		time_zone: FormControl<string | null | undefined>,
	}
	export function CreatePatientPlanSummaryResourceAttributesFormGroup() {
		return new FormGroup<PatientPlanSummaryResourceAttributesFormProperties>({
			adherence: new FormControl<string | null | undefined>(undefined),
			critical: new FormControl<string | null | undefined>(undefined),
			effective_from: new FormControl<string | null | undefined>(undefined),
			time_zone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientPlanSummaryResourceAttributesWindow_notification_times {
		afternoon?: number | null;
		evening?: number | null;
		morning?: number | null;
		night?: number | null;
	}
	export interface PatientPlanSummaryResourceAttributesWindow_notification_timesFormProperties {
		afternoon: FormControl<number | null | undefined>,
		evening: FormControl<number | null | undefined>,
		morning: FormControl<number | null | undefined>,
		night: FormControl<number | null | undefined>,
	}
	export function CreatePatientPlanSummaryResourceAttributesWindow_notification_timesFormGroup() {
		return new FormGroup<PatientPlanSummaryResourceAttributesWindow_notification_timesFormProperties>({
			afternoon: new FormControl<number | null | undefined>(undefined),
			evening: new FormControl<number | null | undefined>(undefined),
			morning: new FormControl<number | null | undefined>(undefined),
			night: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PatientPlanSummaryResourceAttributesWindow_order {
		_actions?: Array<string>;
		type?: string | null;
	}
	export interface PatientPlanSummaryResourceAttributesWindow_orderFormProperties {
		type: FormControl<string | null | undefined>,
	}
	export function CreatePatientPlanSummaryResourceAttributesWindow_orderFormGroup() {
		return new FormGroup<PatientPlanSummaryResourceAttributesWindow_orderFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientPlanSummaryResourceLinks {

		/** Required */
		self: string;
	}
	export interface PatientPlanSummaryResourceLinksFormProperties {

		/** Required */
		self: FormControl<string | null | undefined>,
	}
	export function CreatePatientPlanSummaryResourceLinksFormGroup() {
		return new FormGroup<PatientPlanSummaryResourceLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('/patient_plan_summary/[0-9a-z]+')]),
		});

	}

	export interface PatientPlanSummaryResourceRelationships {

		/** Required */
		actions: PatientPlanSummaryResourceRelationshipsActions;

		/** Required */
		bundles: PatientPlanSummaryResourceRelationshipsBundles;
		current_results?: PatientPlanSummaryResourceRelationshipsCurrent_results;

		/** Required */
		patient: PatientPlanSummaryResourceRelationshipsPatient;
	}
	export interface PatientPlanSummaryResourceRelationshipsFormProperties {
	}
	export function CreatePatientPlanSummaryResourceRelationshipsFormGroup() {
		return new FormGroup<PatientPlanSummaryResourceRelationshipsFormProperties>({
		});

	}

	export interface PatientPlanSummaryResourceRelationshipsActions {
		PatientPlanSummaryResourceRelationshipsActionsData?: Array<PatientPlanSummaryResourceRelationshipsActionsData>;
		links?: PatientPlanSummaryResourceRelationshipsActionsLinks;
	}
	export interface PatientPlanSummaryResourceRelationshipsActionsFormProperties {
	}
	export function CreatePatientPlanSummaryResourceRelationshipsActionsFormGroup() {
		return new FormGroup<PatientPlanSummaryResourceRelationshipsActionsFormProperties>({
		});

	}

	export interface PatientPlanSummaryResourceRelationshipsActionsData {

		/** Required */
		id: string;

		/** Required */
		type: string;
	}
	export interface PatientPlanSummaryResourceRelationshipsActionsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePatientPlanSummaryResourceRelationshipsActionsDataFormGroup() {
		return new FormGroup<PatientPlanSummaryResourceRelationshipsActionsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientPlanSummaryResourceRelationshipsActionsLinks {
		related?: string | null;
	}
	export interface PatientPlanSummaryResourceRelationshipsActionsLinksFormProperties {
		related: FormControl<string | null | undefined>,
	}
	export function CreatePatientPlanSummaryResourceRelationshipsActionsLinksFormGroup() {
		return new FormGroup<PatientPlanSummaryResourceRelationshipsActionsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientPlanSummaryResourceRelationshipsBundles {
		PatientPlanSummaryResourceRelationshipsBundlesData?: Array<PatientPlanSummaryResourceRelationshipsBundlesData>;
		links?: PatientPlanSummaryResourceRelationshipsBundlesLinks;
	}
	export interface PatientPlanSummaryResourceRelationshipsBundlesFormProperties {
	}
	export function CreatePatientPlanSummaryResourceRelationshipsBundlesFormGroup() {
		return new FormGroup<PatientPlanSummaryResourceRelationshipsBundlesFormProperties>({
		});

	}

	export interface PatientPlanSummaryResourceRelationshipsBundlesData {

		/** Required */
		id: string;

		/** Required */
		type: string;
	}
	export interface PatientPlanSummaryResourceRelationshipsBundlesDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePatientPlanSummaryResourceRelationshipsBundlesDataFormGroup() {
		return new FormGroup<PatientPlanSummaryResourceRelationshipsBundlesDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientPlanSummaryResourceRelationshipsBundlesLinks {
		related?: string | null;
	}
	export interface PatientPlanSummaryResourceRelationshipsBundlesLinksFormProperties {
		related: FormControl<string | null | undefined>,
	}
	export function CreatePatientPlanSummaryResourceRelationshipsBundlesLinksFormGroup() {
		return new FormGroup<PatientPlanSummaryResourceRelationshipsBundlesLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientPlanSummaryResourceRelationshipsCurrent_results {
		PatientPlanSummaryResourceRelationshipsCurrent_resultsData?: Array<PatientPlanSummaryResourceRelationshipsCurrent_resultsData>;
		links?: PatientPlanSummaryResourceRelationshipsCurrent_resultsLinks;
	}
	export interface PatientPlanSummaryResourceRelationshipsCurrent_resultsFormProperties {
	}
	export function CreatePatientPlanSummaryResourceRelationshipsCurrent_resultsFormGroup() {
		return new FormGroup<PatientPlanSummaryResourceRelationshipsCurrent_resultsFormProperties>({
		});

	}

	export interface PatientPlanSummaryResourceRelationshipsCurrent_resultsData {

		/** Required */
		id: string;

		/** Required */
		type: string;
	}
	export interface PatientPlanSummaryResourceRelationshipsCurrent_resultsDataFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePatientPlanSummaryResourceRelationshipsCurrent_resultsDataFormGroup() {
		return new FormGroup<PatientPlanSummaryResourceRelationshipsCurrent_resultsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatientPlanSummaryResourceRelationshipsCurrent_resultsLinks {
		related?: string | null;
	}
	export interface PatientPlanSummaryResourceRelationshipsCurrent_resultsLinksFormProperties {
		related: FormControl<string | null | undefined>,
	}
	export function CreatePatientPlanSummaryResourceRelationshipsCurrent_resultsLinksFormGroup() {
		return new FormGroup<PatientPlanSummaryResourceRelationshipsCurrent_resultsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientPlanSummaryResourceRelationshipsPatient {
		data?: PatientPlanSummaryResourceRelationshipsPatientData;
		links?: PatientPlanSummaryResourceRelationshipsPatientLinks;
	}
	export interface PatientPlanSummaryResourceRelationshipsPatientFormProperties {
	}
	export function CreatePatientPlanSummaryResourceRelationshipsPatientFormGroup() {
		return new FormGroup<PatientPlanSummaryResourceRelationshipsPatientFormProperties>({
		});

	}

	export interface PatientPlanSummaryResourceRelationshipsPatientData {
		id?: string | null;
		type?: string | null;
	}
	export interface PatientPlanSummaryResourceRelationshipsPatientDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreatePatientPlanSummaryResourceRelationshipsPatientDataFormGroup() {
		return new FormGroup<PatientPlanSummaryResourceRelationshipsPatientDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatientPlanSummaryResourceRelationshipsPatientLinks {
		related?: string | null;
	}
	export interface PatientPlanSummaryResourceRelationshipsPatientLinksFormProperties {
		related: FormControl<string | null | undefined>,
	}
	export function CreatePatientPlanSummaryResourceRelationshipsPatientLinksFormGroup() {
		return new FormGroup<PatientPlanSummaryResourceRelationshipsPatientLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PatientPlanSummaryResourceType { patient_plan_summary = 0 }

	export interface FetchPatientPlanSummaryResponse {

		/** Required */
		data: PatientPlanSummaryResource;

		/**
		 * Related resources which are included in the response based on the `include` param.
		 * Attributes of each resource will vary depending on the type.
		 * See [action](#operation/fetchAction), [bundle](#operation/fetchBundle) and [patient](#operation/fetchPatient)
		 */
		included?: Array<Resource>;
		meta?: FetchMetaResponse;
	}
	export interface FetchPatientPlanSummaryResponseFormProperties {
	}
	export function CreateFetchPatientPlanSummaryResponseFormGroup() {
		return new FormGroup<FetchPatientPlanSummaryResponseFormProperties>({
		});

	}

	export interface FetchPatientResponse {

		/** Required */
		data: PatientResource;
		meta?: FetchMetaResponse;
	}
	export interface FetchPatientResponseFormProperties {
	}
	export function CreateFetchPatientResponseFormGroup() {
		return new FormGroup<FetchPatientResponseFormProperties>({
		});

	}

	export interface FetchPatientsResponse {

		/** Required */
		data: Array<PatientResource>;
		links?: CollectionResponseLinks;
		meta?: FetchMetaResponse;
	}
	export interface FetchPatientsResponseFormProperties {
	}
	export function CreateFetchPatientsResponseFormGroup() {
		return new FormGroup<FetchPatientsResponseFormProperties>({
		});

	}

	export interface FetchRewardEarningFulfillmentResponse {

		/** Required */
		data: RewardEarningFulfillmentResource;
		meta?: FetchMetaResponse;
	}
	export interface FetchRewardEarningFulfillmentResponseFormProperties {
	}
	export function CreateFetchRewardEarningFulfillmentResponseFormGroup() {
		return new FormGroup<FetchRewardEarningFulfillmentResponseFormProperties>({
		});

	}

	export interface FetchRewardEarningFulfillmentsResponse {

		/** Required */
		data: Array<RewardEarningFulfillmentResource>;
		meta?: FetchMetaResponse;
	}
	export interface FetchRewardEarningFulfillmentsResponseFormProperties {
	}
	export function CreateFetchRewardEarningFulfillmentsResponseFormGroup() {
		return new FormGroup<FetchRewardEarningFulfillmentsResponseFormProperties>({
		});

	}

	export interface FetchRewardEarningResponse {

		/** Required */
		data: RewardEarningResource;
		meta?: FetchMetaResponse;
	}
	export interface FetchRewardEarningResponseFormProperties {
	}
	export function CreateFetchRewardEarningResponseFormGroup() {
		return new FormGroup<FetchRewardEarningResponseFormProperties>({
		});

	}

	export interface FetchRewardEarningsResponse {

		/** Required */
		data: Array<RewardEarningResource>;
		meta?: FetchMetaResponse;
	}
	export interface FetchRewardEarningsResponseFormProperties {
	}
	export function CreateFetchRewardEarningsResponseFormGroup() {
		return new FormGroup<FetchRewardEarningsResponseFormProperties>({
		});

	}

	export interface FetchRewardProgramActivationResponse {

		/** Required */
		data: RewardProgramActivationResource;
		meta?: FetchMetaResponse;
	}
	export interface FetchRewardProgramActivationResponseFormProperties {
	}
	export function CreateFetchRewardProgramActivationResponseFormGroup() {
		return new FormGroup<FetchRewardProgramActivationResponseFormProperties>({
		});

	}

	export interface FetchRewardProgramActivationsResponse {

		/** Required */
		data: Array<RewardProgramActivationResource>;
		meta?: FetchMetaResponse;
	}
	export interface FetchRewardProgramActivationsResponseFormProperties {
	}
	export function CreateFetchRewardProgramActivationsResponseFormGroup() {
		return new FormGroup<FetchRewardProgramActivationsResponseFormProperties>({
		});

	}

	export interface FetchRewardProgramResponse {

		/** Required */
		data: RewardProgramResource;
		meta?: FetchMetaResponse;
	}
	export interface FetchRewardProgramResponseFormProperties {
	}
	export function CreateFetchRewardProgramResponseFormGroup() {
		return new FormGroup<FetchRewardProgramResponseFormProperties>({
		});

	}

	export interface FetchRewardProgramsResponse {

		/** Required */
		data: Array<RewardProgramResource>;
		meta?: FetchMetaResponse;
	}
	export interface FetchRewardProgramsResponseFormProperties {
	}
	export function CreateFetchRewardProgramsResponseFormGroup() {
		return new FormGroup<FetchRewardProgramsResponseFormProperties>({
		});

	}

	export interface FetchRewardResponse {

		/** Required */
		data: RewardResource;
		meta?: FetchMetaResponse;
	}
	export interface FetchRewardResponseFormProperties {
	}
	export function CreateFetchRewardResponseFormGroup() {
		return new FormGroup<FetchRewardResponseFormProperties>({
		});

	}

	export interface FetchRewardsResponse {

		/** Required */
		data: Array<RewardResource>;
		meta?: FetchMetaResponse;
	}
	export interface FetchRewardsResponseFormProperties {
	}
	export function CreateFetchRewardsResponseFormGroup() {
		return new FormGroup<FetchRewardsResponseFormProperties>({
		});

	}

	export interface UpdateActionRequest {

		/** Required */
		data: ActionResource;
	}
	export interface UpdateActionRequestFormProperties {
	}
	export function CreateUpdateActionRequestFormGroup() {
		return new FormGroup<UpdateActionRequestFormProperties>({
		});

	}

	export interface UpdateActionResponse {

		/** Required */
		data: ActionResource;
		meta?: CreateOrUpdateMetaResponse;
	}
	export interface UpdateActionResponseFormProperties {
	}
	export function CreateUpdateActionResponseFormGroup() {
		return new FormGroup<UpdateActionResponseFormProperties>({
		});

	}

	export interface UpdateBundleRequest {

		/** Required */
		data: BundleResource;
	}
	export interface UpdateBundleRequestFormProperties {
	}
	export function CreateUpdateBundleRequestFormGroup() {
		return new FormGroup<UpdateBundleRequestFormProperties>({
		});

	}

	export interface UpdateBundleResponse {

		/** Required */
		data: BundleResource;
		meta?: CreateOrUpdateMetaResponse;
	}
	export interface UpdateBundleResponseFormProperties {
	}
	export function CreateUpdateBundleResponseFormGroup() {
		return new FormGroup<UpdateBundleResponseFormProperties>({
		});

	}

	export interface UpdateCalendarEventRequest {
		data?: UpdateCalendarEventRequestData;
	}
	export interface UpdateCalendarEventRequestFormProperties {
	}
	export function CreateUpdateCalendarEventRequestFormGroup() {
		return new FormGroup<UpdateCalendarEventRequestFormProperties>({
		});

	}

	export interface UpdateCalendarEventRequestData {
		attributes?: CalendarEventResource;

		/** Required */
		id: CalendarEventResource;
		relationships?: UpdateCalendarEventRequestDataRelationships;

		/** Required */
		type: CalendarEventResource;
	}
	export interface UpdateCalendarEventRequestDataFormProperties {
	}
	export function CreateUpdateCalendarEventRequestDataFormGroup() {
		return new FormGroup<UpdateCalendarEventRequestDataFormProperties>({
		});

	}

	export interface UpdateCalendarEventRequestDataRelationships {
		owner?: UpdateCalendarEventRequestDataRelationshipsOwner;
	}
	export interface UpdateCalendarEventRequestDataRelationshipsFormProperties {
	}
	export function CreateUpdateCalendarEventRequestDataRelationshipsFormGroup() {
		return new FormGroup<UpdateCalendarEventRequestDataRelationshipsFormProperties>({
		});

	}

	export interface UpdateCalendarEventRequestDataRelationshipsOwner {
		data?: CalendarEventResource;
	}
	export interface UpdateCalendarEventRequestDataRelationshipsOwnerFormProperties {
	}
	export function CreateUpdateCalendarEventRequestDataRelationshipsOwnerFormGroup() {
		return new FormGroup<UpdateCalendarEventRequestDataRelationshipsOwnerFormProperties>({
		});

	}

	export interface UpdateCalendarEventResponse {
		data?: CalendarEventResource;
		meta?: CreateOrUpdateMetaResponse;
	}
	export interface UpdateCalendarEventResponseFormProperties {
	}
	export function CreateUpdateCalendarEventResponseFormGroup() {
		return new FormGroup<UpdateCalendarEventResponseFormProperties>({
		});

	}

	export interface UpdatePatientPlanSummaryRequest {

		/** Required */
		data: PatientPlanSummaryResource;
	}
	export interface UpdatePatientPlanSummaryRequestFormProperties {
	}
	export function CreateUpdatePatientPlanSummaryRequestFormGroup() {
		return new FormGroup<UpdatePatientPlanSummaryRequestFormProperties>({
		});

	}

	export interface UpdatePatientPlanSummaryResponse {

		/** Required */
		data: PatientPlanSummaryResource;
		meta?: CreateOrUpdateMetaResponse;
	}
	export interface UpdatePatientPlanSummaryResponseFormProperties {
	}
	export function CreateUpdatePatientPlanSummaryResponseFormGroup() {
		return new FormGroup<UpdatePatientPlanSummaryResponseFormProperties>({
		});

	}

	export interface UpdatePatientRequest {

		/** Required */
		data: PatientResource;
	}
	export interface UpdatePatientRequestFormProperties {
	}
	export function CreateUpdatePatientRequestFormGroup() {
		return new FormGroup<UpdatePatientRequestFormProperties>({
		});

	}

	export interface UpdatePatientResponse {

		/** Required */
		data: PatientResource;
		meta?: CreateOrUpdateMetaResponse;
	}
	export interface UpdatePatientResponseFormProperties {
	}
	export function CreateUpdatePatientResponseFormGroup() {
		return new FormGroup<UpdatePatientResponseFormProperties>({
		});

	}

	export interface UpsertPatientRequest {

		/** Required */
		data: PatientResource;

		/** Required */
		meta: UpsertPatientRequestMeta;
	}
	export interface UpsertPatientRequestFormProperties {
	}
	export function CreateUpsertPatientRequestFormGroup() {
		return new FormGroup<UpsertPatientRequestFormProperties>({
		});

	}

	export interface UpsertPatientRequestMeta {

		/** Required */
		query: UpsertPatientRequestMetaQuery;
	}
	export interface UpsertPatientRequestMetaFormProperties {
	}
	export function CreateUpsertPatientRequestMetaFormGroup() {
		return new FormGroup<UpsertPatientRequestMetaFormProperties>({
		});

	}

	export interface UpsertPatientRequestMetaQuery {

		/**
		 * Group to create/update patient in.
		 * Required
		 */
		groups: Array<string>;

		/**
		 * Identifier to match patient
		 * Required
		 */
		identifier: UpsertPatientRequestMetaQueryIdentifier;
	}
	export interface UpsertPatientRequestMetaQueryFormProperties {
	}
	export function CreateUpsertPatientRequestMetaQueryFormGroup() {
		return new FormGroup<UpsertPatientRequestMetaQueryFormProperties>({
		});

	}

	export interface UpsertPatientRequestMetaQueryIdentifier {

		/** Name of system */
		system?: string | null;

		/** Value in system */
		value?: string | null;
	}
	export interface UpsertPatientRequestMetaQueryIdentifierFormProperties {

		/** Name of system */
		system: FormControl<string | null | undefined>,

		/** Value in system */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUpsertPatientRequestMetaQueryIdentifierFormGroup() {
		return new FormGroup<UpsertPatientRequestMetaQueryIdentifierFormProperties>({
			system: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get an action
		 * Get a health action from a patient's plan.
		 * Get action/{id}
		 * @param {string} id Action identifier
		 * @return {void} OK
		 */
		FetchAction(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'action/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a bundle
		 * Get a bundle from a patient's plan.
		 * Get bundle/{id}
		 * @param {string} id Bundle identifier
		 * @return {void} OK
		 */
		FetchBundle(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'bundle/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List calendar events
		 * Get a list of calendar events
		 * Get calendar_event
		 * @param {string} filter_patient Patient id to fetch calendar event. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, `filter[organization]`, or `filter[attendees]`.
		 * @param {string} filter_groups Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, `filter[organization]`, or `filter[attendees]`.
		 * @param {string} filter_organization Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, `filter[organization]`, or `filter[attendees]`.
		 * @param {string} filter_attendees Comma-separated list of coach or patient ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, `filter[organization]`, or `filter[attendees]`.
		 * @param {CalendarEventResourceAttributesType} filter_type Calendar event type
		 * @param {boolean} filter_completed If not specified, return all calendar events. If set to `true` return only events marked as completed, if set to `false`, return only events not marked as completed yet.
		 * @param {string} filter_start_at The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events starting in November 2017 (America/New_York): `filter[start_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
		 * @param {string} filter_end_at The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events ending in November 2017 (America/New_York): `filter[end_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
		 * @param {string} filter_completed_at The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events completed in November 2017 (America/New_York): `filter[completed_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
		 * @param {string} filter_created_at The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events created in November 2017 (America/New_York): `filter[created_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
		 * @param {string} filter_updated_at The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events updated in November 2017 (America/New_York): `filter[updated_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
		 * @param {number} page_number Page number
		 * @param {number} page_size Page size
		 * @param {number} page_limit Page limit
		 * @param {string} page_cursor Page cursor
		 * @param {FetchCalendarEventsInclude} include List of related resources to include in the response
		 * @return {void} OK
		 */
		FetchCalendarEvents(filter_patient: string | null | undefined, filter_groups: string | null | undefined, filter_organization: string | null | undefined, filter_attendees: string | null | undefined, filter_type: CalendarEventResourceAttributesType | null | undefined, filter_completed: boolean | null | undefined, filter_start_at: string | null | undefined, filter_end_at: string | null | undefined, filter_completed_at: string | null | undefined, filter_created_at: string | null | undefined, filter_updated_at: string | null | undefined, page_number: number | null | undefined, page_size: number | null | undefined, page_limit: number | null | undefined, page_cursor: string | null | undefined, include: FetchCalendarEventsInclude | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'calendar_event?filter_patient=' + (filter_patient == null ? '' : encodeURIComponent(filter_patient)) + '&filter_groups=' + (filter_groups == null ? '' : encodeURIComponent(filter_groups)) + '&filter_organization=' + (filter_organization == null ? '' : encodeURIComponent(filter_organization)) + '&filter_attendees=' + (filter_attendees == null ? '' : encodeURIComponent(filter_attendees)) + '&filter_type=' + filter_type + '&filter_completed=' + filter_completed + '&filter_start_at=' + (filter_start_at == null ? '' : encodeURIComponent(filter_start_at)) + '&filter_end_at=' + (filter_end_at == null ? '' : encodeURIComponent(filter_end_at)) + '&filter_completed_at=' + (filter_completed_at == null ? '' : encodeURIComponent(filter_completed_at)) + '&filter_created_at=' + (filter_created_at == null ? '' : encodeURIComponent(filter_created_at)) + '&filter_updated_at=' + (filter_updated_at == null ? '' : encodeURIComponent(filter_updated_at)) + '&page_number=' + page_number + '&page_size=' + page_size + '&page_limit=' + page_limit + '&page_cursor=' + (page_cursor == null ? '' : encodeURIComponent(page_cursor)) + '&include=' + include, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a calendar event
		 * Delete a calendar event by id
		 * Delete calendar_event/{id}
		 * @param {string} id Calendar event identifier
		 * @return {void} OK
		 */
		DeleteCalendarEvent(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'calendar_event/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a calendar event
		 * Get a calendar event by id
		 * Get calendar_event/{id}
		 * @param {string} id Calendar event identifier
		 * @return {void} OK
		 */
		FetchCalendarEvent(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'calendar_event/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List coaches
		 * Get a list of coaches matching the specified filters.
		 * Get coach
		 * @param {string} filter_groups Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[groups]`, `filter[organization]`.
		 * @param {string} filter_organization Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[groups]`, `filter[organization]`.
		 * @return {void} OK
		 */
		FetchCoaches(filter_groups: string | null | undefined, filter_organization: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'coach?filter_groups=' + (filter_groups == null ? '' : encodeURIComponent(filter_groups)) + '&filter_organization=' + (filter_organization == null ? '' : encodeURIComponent(filter_organization)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a coach
		 * Get a coach record by id.
		 * Get coach/{id}
		 * @param {string} id Coach identifier
		 * @return {void} OK
		 */
		FetchCoach(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'coach/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List email histories
		 * Get a list of email histories
		 * Get email_history
		 * @param {string} filter_receiver Fitbit Plus user id of email recipient. Required if filter[sender] is not defined.
		 * @param {string} filter_sender Fitbit Plus user id of email sender. Required if filter[receiver] is not defined.
		 * @param {string} filter_emailType Type of email
		 * @param {FetchEmailHistoriesSort} sort valid sorts:
		 *   * send_time - ascending by send_time
		 *   * -send_time - descending by send_time
		 * @return {void} OK
		 */
		FetchEmailHistories(filter_receiver: string | null | undefined, filter_sender: string | null | undefined, filter_emailType: string | null | undefined, sort: FetchEmailHistoriesSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'email_history?filter_receiver=' + (filter_receiver == null ? '' : encodeURIComponent(filter_receiver)) + '&filter_sender=' + (filter_sender == null ? '' : encodeURIComponent(filter_sender)) + '&filter_emailType=' + (filter_emailType == null ? '' : encodeURIComponent(filter_emailType)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an email history
		 * Get an email history by id
		 * Get email_history/{id}
		 * @param {string} id Email history identifier
		 * @return {void} OK
		 */
		FetchEmailHistory(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'email_history/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List groups
		 * Get a list of groups matching the specified filters.
		 * Get group
		 * @param {string} filter_organization Organization identifier
		 * @param {string} filter_name Group name
		 * @return {void} OK
		 */
		FetchGroups(filter_organization: string, filter_name: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'group?filter_organization=' + (filter_organization == null ? '' : encodeURIComponent(filter_organization)) + '&filter_name=' + (filter_name == null ? '' : encodeURIComponent(filter_name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a group
		 * Get a group record by id.
		 * Get group/{id}
		 * @param {string} id Group identifier
		 * @return {void} OK
		 */
		FetchGroup(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'group/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List health profiles
		 * Get a list of health profiles
		 * Get health_profile
		 * @param {string} filter_patient Patient id to fetch health profile. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.
		 * @param {string} filter_groups Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.
		 * @param {string} filter_organization Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.
		 * @param {number} page_number Page number
		 * @param {number} page_size Page size
		 * @param {number} page_limit Page limit
		 * @param {string} page_cursor Page cursor
		 * @param {FetchHealthProfilesInclude} include List of related resources to include in the response
		 * @return {void} OK
		 */
		FetchHealthProfiles(filter_patient: string | null | undefined, filter_groups: string | null | undefined, filter_organization: string | null | undefined, page_number: number | null | undefined, page_size: number | null | undefined, page_limit: number | null | undefined, page_cursor: string | null | undefined, include: FetchHealthProfilesInclude | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health_profile?filter_patient=' + (filter_patient == null ? '' : encodeURIComponent(filter_patient)) + '&filter_groups=' + (filter_groups == null ? '' : encodeURIComponent(filter_groups)) + '&filter_organization=' + (filter_organization == null ? '' : encodeURIComponent(filter_organization)) + '&page_number=' + page_number + '&page_size=' + page_size + '&page_limit=' + page_limit + '&page_cursor=' + (page_cursor == null ? '' : encodeURIComponent(page_cursor)) + '&include=' + include, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a health profile
		 * Get a health profile by id
		 * Get health_profile/{id}
		 * @param {string} id Health profile identifier
		 * @param {FetchHealthProfilesInclude} include List of related resources to include in the response
		 * @return {void} OK
		 */
		FetchHealthProfile(id: string, include: FetchHealthProfilesInclude | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health_profile/' + (id == null ? '' : encodeURIComponent(id)) + '&include=' + include, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List health profile answers
		 * Get a list of health profile answers
		 * Get health_profile_answer
		 * @param {string} filter_patient Patient id to fetch healt profile answers. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.
		 * @param {string} filter_groups Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.
		 * @param {string} filter_organization Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.
		 * @param {number} page_number Page number
		 * @param {number} page_size Page size
		 * @param {number} page_limit Page limit
		 * @param {string} page_cursor Page cursor
		 * @param {PatientResourceType} include List of related resources to include in the response
		 * @return {void} OK
		 */
		FetchHealthProfileAnswers(filter_patient: string | null | undefined, filter_groups: string | null | undefined, filter_organization: string | null | undefined, page_number: number | null | undefined, page_size: number | null | undefined, page_limit: number | null | undefined, page_cursor: string | null | undefined, include: PatientResourceType | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health_profile_answer?filter_patient=' + (filter_patient == null ? '' : encodeURIComponent(filter_patient)) + '&filter_groups=' + (filter_groups == null ? '' : encodeURIComponent(filter_groups)) + '&filter_organization=' + (filter_organization == null ? '' : encodeURIComponent(filter_organization)) + '&page_number=' + page_number + '&page_size=' + page_size + '&page_limit=' + page_limit + '&page_cursor=' + (page_cursor == null ? '' : encodeURIComponent(page_cursor)) + '&include=' + include, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a health profile answer
		 * Get a health profile answer by id
		 * Get health_profile_answer/{id}
		 * @param {string} id Health profile answer identifier
		 * @param {PatientResourceType} include List of related resources to include in the response
		 * @return {void} OK
		 */
		FetchHealthProfileAnswer(id: string, include: PatientResourceType | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health_profile_answer/' + (id == null ? '' : encodeURIComponent(id)) + '&include=' + include, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List health profile questions
		 * Get a list of health profile questions
		 * Get health_profile_question
		 * @param {string} filter_patient Patient id to fetch healt profile questions. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.
		 * @param {string} filter_groups Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.
		 * @param {string} filter_organization Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.
		 * @param {FetchHealthProfileQuestionsInclude} include List of related resources to include in the response
		 * @return {void} OK
		 */
		FetchHealthProfileQuestions(filter_patient: string | null | undefined, filter_groups: string | null | undefined, filter_organization: string | null | undefined, include: FetchHealthProfileQuestionsInclude | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health_profile_question?filter_patient=' + (filter_patient == null ? '' : encodeURIComponent(filter_patient)) + '&filter_groups=' + (filter_groups == null ? '' : encodeURIComponent(filter_groups)) + '&filter_organization=' + (filter_organization == null ? '' : encodeURIComponent(filter_organization)) + '&include=' + include, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a health profile question
		 * Get a health profile by id
		 * Get health_profile_question/{id}
		 * @param {string} id Health profile question identifier
		 * @param {FetchHealthProfileQuestionsInclude} include List of related resources to include in the response
		 * @return {void} OK
		 */
		FetchHealthProfileQuestion(id: string, include: FetchHealthProfileQuestionsInclude | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health_profile_question/' + (id == null ? '' : encodeURIComponent(id)) + '&include=' + include, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List health question definitions
		 * Get a list of all health question definitions
		 * Get health_question_definition
		 * @return {void} OK
		 */
		FetchHealthQuestionDefinitions(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health_question_definition', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a health question definition
		 * Get a health question definition by id
		 * Get health_question_definition/{id}
		 * @param {string} id Health question definition identifier
		 * @return {void} OK
		 */
		FetchHealthQuestionDefinition(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health_question_definition/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create an oauth token
		 * Create an OAuth 2.0 Bearer token. A valid bearer token is required for all other API requests.
		 * Be sure to set the header `Content-Type: "application/vnd.api+json"`. Otherwise, you will get an error
		 * 403 Forbidden. Using `Content-Type: "application/json"` is permitted (to support older oauth clients) but when
		 * using `application/json` the body should have a body in the following format instead of nesting under
		 * `data.attributes`:
		 * ```
		 * {
		 * "grant_type": "client_credentials",
		 * "client_id": "95c78ab2-167f-40b8-8bec-8398d4b87454",
		 * "client_secret": "35d18dc9-a3dd-4948-b787-063a490b9354"
		 * }
		 * ```
		 * Post oauth/token
		 * @param {CreateTokenInclude} include List of related resources to include in the response
		 * @return {void} 
		 */
		CreateToken(include: CreateTokenInclude | null | undefined, requestBody: CreateTokenRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'oauth/token?include=' + include, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the groups for a token
		 * Get the list of groups a token can be used to access.
		 * Get oauth/token/{id}/groups
		 * @param {string} id Token identifier
		 * @return {void} OK
		 */
		FetchTokenGroups(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'oauth/token/' + (id == null ? '' : encodeURIComponent(id)) + '/groups', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the organization for a token
		 * Get the organization a token can be used to access.
		 * Get oauth/token/{id}/organization
		 * @param {string} id Token identifier
		 * @return {void} OK
		 */
		FetchTokenOrganization(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'oauth/token/' + (id == null ? '' : encodeURIComponent(id)) + '/organization', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an organization
		 * Get an organization record by id.
		 * Get organization/{id}
		 * @param {string} id Organization identifier
		 * @return {void} OK
		 */
		FetchOrganization(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organization/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List patients
		 * Get a list of patients.
		 * Get patient
		 * @param {string} filter_groups Comma-separated list of group ids. Note that either `filter[group]` or `filter[organization]` must be specified.
		 * @param {string} filter_organization Fitbit Plus organization id. Note that either `filter[group]` or `filter[organization]` must be specified.
		 * @param {string} filter_identifier_system Identifier system (example: "MyEHR") - requires a "filter[identifier][value]" parameter
		 * @param {string} filter_identifier_value Identifier value (example: "12345") - requires a "filter[identifier][system]" parameter
		 * @param {boolean} filter_archived If not specified, return all patients. If set to 'true' return only archived patients, if set to 'false', return only patients who are not archived.
		 * @param {string} filter_created_at The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for patients created in November 2017 (America/New_York): `filter[created_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
		 * @param {string} filter_updated_at The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for patients updated in November 2017 (America/New_York): `filter[updated_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
		 * @param {number} page_number Page number
		 * @param {number} page_size Page size
		 * @param {number} page_limit Page limit
		 * @param {string} page_cursor Page cursor
		 * @return {void} OK
		 */
		FetchPatients(filter_groups: string | null | undefined, filter_organization: string | null | undefined, filter_identifier_system: string | null | undefined, filter_identifier_value: string | null | undefined, filter_archived: boolean | null | undefined, filter_created_at: string | null | undefined, filter_updated_at: string | null | undefined, page_number: number | null | undefined, page_size: number | null | undefined, page_limit: number | null | undefined, page_cursor: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patient?filter_groups=' + (filter_groups == null ? '' : encodeURIComponent(filter_groups)) + '&filter_organization=' + (filter_organization == null ? '' : encodeURIComponent(filter_organization)) + '&filter_identifier_system=' + (filter_identifier_system == null ? '' : encodeURIComponent(filter_identifier_system)) + '&filter_identifier_value=' + (filter_identifier_value == null ? '' : encodeURIComponent(filter_identifier_value)) + '&filter_archived=' + filter_archived + '&filter_created_at=' + (filter_created_at == null ? '' : encodeURIComponent(filter_created_at)) + '&filter_updated_at=' + (filter_updated_at == null ? '' : encodeURIComponent(filter_updated_at)) + '&page_number=' + page_number + '&page_size=' + page_size + '&page_limit=' + page_limit + '&page_cursor=' + (page_cursor == null ? '' : encodeURIComponent(page_cursor)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a patient
		 * Gets a patient record by id.
		 * Get patient/{id}
		 * @param {string} id Patient identifier
		 * @return {void} OK
		 */
		FetchPatient(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patient/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List coaches for a patient
		 * Get the list of coaches for a patient.
		 * Get patient/{id}/coaches
		 * @param {string} id Patient identifier
		 * @return {void} OK
		 */
		FetchPatientCoaches(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patient/' + (id == null ? '' : encodeURIComponent(id)) + '/coaches', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List groups for a patient
		 * Get the list of groups for a patient.
		 * Get patient/{id}/groups
		 * @param {string} id Patient identifier
		 * @return {void} OK
		 */
		FetchPatientGroups(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patient/' + (id == null ? '' : encodeURIComponent(id)) + '/groups', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List patient health metrics
		 * Get a list of patient health metrics.
		 * Get patient_health_metric
		 * @param {string} filter_patient Filter the patient health metrics for a specified patient. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
		 * @param {string} filter_groups Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
		 * @param {string} filter_organization Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
		 * @param {number} page_number Page number
		 * @param {number} page_size Page size
		 * @param {number} page_limit Page limit
		 * @param {string} page_cursor Page cursor
		 * @return {void} OK
		 */
		FetchPatientHealthMetrics(filter_patient: string | null | undefined, filter_groups: string | null | undefined, filter_organization: string | null | undefined, page_number: number | null | undefined, page_size: number | null | undefined, page_limit: number | null | undefined, page_cursor: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patient_health_metric?filter_patient=' + (filter_patient == null ? '' : encodeURIComponent(filter_patient)) + '&filter_groups=' + (filter_groups == null ? '' : encodeURIComponent(filter_groups)) + '&filter_organization=' + (filter_organization == null ? '' : encodeURIComponent(filter_organization)) + '&page_number=' + page_number + '&page_size=' + page_size + '&page_limit=' + page_limit + '&page_cursor=' + (page_cursor == null ? '' : encodeURIComponent(page_cursor)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a patient health metric
		 * Get the plan summary for a patient.
		 * Get patient_health_metric/{id}
		 * @param {string} id Patient health metric identifier
		 * @return {void} OK
		 */
		FetchPatientHealthMetric(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patient_health_metric/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List patient plan summaries
		 * Get a list of patient plan summaries
		 * Get patient_plan_summary
		 * @param {string} filter_patient Patient id to fetch plan summary for. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
		 * @param {string} filter_groups Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
		 * @param {string} filter_organization Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
		 * @param {FetchPatientPlanSummariesInclude} include List of related resources to include in the response
		 * @return {void} OK
		 */
		FetchPatientPlanSummaries(filter_patient: string | null | undefined, filter_groups: string | null | undefined, filter_organization: string | null | undefined, include: FetchPatientPlanSummariesInclude | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patient_plan_summary?filter_patient=' + (filter_patient == null ? '' : encodeURIComponent(filter_patient)) + '&filter_groups=' + (filter_groups == null ? '' : encodeURIComponent(filter_groups)) + '&filter_organization=' + (filter_organization == null ? '' : encodeURIComponent(filter_organization)) + '&include=' + include, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the plan summary for a patient
		 * Get the plan summary for a patient.
		 * Get patient_plan_summary/{id}
		 * @param {string} id Plan summary identifier
		 * @param {FetchPatientPlanSummariesInclude} include List of related resources to include in the response
		 * @return {void} OK
		 */
		FetchPatientPlanSummary(id: string, include: FetchPatientPlanSummariesInclude | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patient_plan_summary/' + (id == null ? '' : encodeURIComponent(id)) + '&include=' + include, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List patient health results
		 * Get a list of patient health results.
		 * Get result
		 * @param {string} filter_patient Filter the patient health results for a specified patient
		 * @param {string} filter_actions A comma-separated list of action identifiers
		 * @param {string} filter_start_at Filter results that occurred after the passed ISO date and time string
		 * @param {string} filter_end_at Filter results that occurred before the passed ISO date and time string
		 * @param {string} filter_threads A comma-separated list of thread identifiers
		 * @param {string} filter_created_at The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for results created in November 2017 (America/New_York): `filter[created_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
		 * @param {string} filter_updated_at The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for results updated in November 2017 (America/New_York): `filter[updated_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
		 * @param {number} page_number Page number
		 * @param {number} page_size Page size
		 * @param {number} page_limit Page limit
		 * @param {string} page_after Page cursor
		 * @return {void} OK
		 */
		FetchPatientHealthResults(filter_patient: string, filter_actions: string | null | undefined, filter_start_at: string | null | undefined, filter_end_at: string | null | undefined, filter_threads: string | null | undefined, filter_created_at: string | null | undefined, filter_updated_at: string | null | undefined, page_number: number | null | undefined, page_size: number | null | undefined, page_limit: number | null | undefined, page_after: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'result?filter_patient=' + (filter_patient == null ? '' : encodeURIComponent(filter_patient)) + '&filter_actions=' + (filter_actions == null ? '' : encodeURIComponent(filter_actions)) + '&filter_start_at=' + (filter_start_at == null ? '' : encodeURIComponent(filter_start_at)) + '&filter_end_at=' + (filter_end_at == null ? '' : encodeURIComponent(filter_end_at)) + '&filter_threads=' + (filter_threads == null ? '' : encodeURIComponent(filter_threads)) + '&filter_created_at=' + (filter_created_at == null ? '' : encodeURIComponent(filter_created_at)) + '&filter_updated_at=' + (filter_updated_at == null ? '' : encodeURIComponent(filter_updated_at)) + '&page_number=' + page_number + '&page_size=' + page_size + '&page_limit=' + page_limit + '&page_after=' + (page_after == null ? '' : encodeURIComponent(page_after)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a patient health result
		 * Get patient health result by id.
		 * Get result/{id}
		 * @param {string} id Patient health result identifier
		 * @return {void} OK
		 */
		FetchPatientHealthResult(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'result/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List rewards
		 * Get a list of rewards matching the specified filters.
		 * Get reward
		 * @param {string} filter_patient Patient identifier. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
		 * @param {string} filter_reward_program_activation Reward program activation identifier
		 * @param {string} filter_thread Thread identifier
		 * @param {string} filter_groups Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
		 * @param {string} filter_organization Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
		 * @return {void} OK
		 */
		FetchRewards(filter_patient: string | null | undefined, filter_reward_program_activation: string | null | undefined, filter_thread: string | null | undefined, filter_groups: string | null | undefined, filter_organization: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reward?filter_patient=' + (filter_patient == null ? '' : encodeURIComponent(filter_patient)) + '&filter_reward_program_activation=' + (filter_reward_program_activation == null ? '' : encodeURIComponent(filter_reward_program_activation)) + '&filter_thread=' + (filter_thread == null ? '' : encodeURIComponent(filter_thread)) + '&filter_groups=' + (filter_groups == null ? '' : encodeURIComponent(filter_groups)) + '&filter_organization=' + (filter_organization == null ? '' : encodeURIComponent(filter_organization)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a reward
		 * Get a reward record by id.
		 * Get reward/{id}
		 * @param {string} id Reward identifier
		 * @return {void} OK
		 */
		FetchReward(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reward/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List reward earnings
		 * Get a list of reward earnings matching the specified filters.
		 * Get reward_earning
		 * @param {string} filter_groups Group identifiers
		 * @param {string} filter_patient Patient identifier
		 * @param {boolean} filter_ready_for_fulfillment If true, only returns those reward earnings for which ready_for_fulfillment is true and fulfilled_at is null. If false, only returns those reward earnings for which ready_for_fulfillment is false and fulfilled_at is null.
		 * @return {void} OK
		 */
		FetchRewardEarnings(filter_groups: string, filter_patient: string, filter_ready_for_fulfillment: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reward_earning?filter_groups=' + (filter_groups == null ? '' : encodeURIComponent(filter_groups)) + '&filter_patient=' + (filter_patient == null ? '' : encodeURIComponent(filter_patient)) + '&filter_ready_for_fulfillment=' + filter_ready_for_fulfillment, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a reward earning
		 * Get a reward earning record by id.
		 * Get reward_earning/{id}
		 * @param {string} id Reward earning identifier
		 * @return {void} OK
		 */
		FetchRewardEarning(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reward_earning/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List reward earning fulfillments
		 * Get a list of reward earning fulfillments matching the specified filters.
		 * Get reward_earning_fulfillment
		 * @param {string} filter_patient Patient identifier
		 * @return {void} OK
		 */
		FetchRewardEarningFulfillments(filter_patient: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reward_earning_fulfillment?filter_patient=' + (filter_patient == null ? '' : encodeURIComponent(filter_patient)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a reward earning fulfillment
		 * Get a reward earning fulfillment record by id.
		 * Get reward_earning_fulfillment/{id}
		 * @param {string} id Reward earning fulfillment identifier
		 * @return {void} OK
		 */
		FetchRewardEarningFulfillment(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reward_earning_fulfillment/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List reward programs
		 * Get a list of reward programs matching the specified filters.
		 * Get reward_program
		 * @param {string} filter_groups Comma-separated list of group identifiers. Note that one of the following filters must be specified: `filter[groups]`, `filter[organization]`.
		 * @param {string} filter_organization Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[groups]`, `filter[organization]`.
		 * @return {void} OK
		 */
		FetchRewardPrograms(filter_groups: string | null | undefined, filter_organization: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reward_program?filter_groups=' + (filter_groups == null ? '' : encodeURIComponent(filter_groups)) + '&filter_organization=' + (filter_organization == null ? '' : encodeURIComponent(filter_organization)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a reward program
		 * Get a reward program record by id.
		 * Get reward_program/{id}
		 * @param {string} id Reward program identifier
		 * @return {void} OK
		 */
		FetchRewardProgram(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reward_program/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get group for a reward program
		 * Get the group related to a reward program.
		 * Get reward_program/{id}/group
		 * @param {string} id Reward program identifier
		 * @return {void} OK
		 */
		FetchRewardProgramGroup(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reward_program/' + (id == null ? '' : encodeURIComponent(id)) + '/group', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List reward program activations
		 * Get a list of reward program activations matching the specified filters.
		 * Get reward_program_activation
		 * @param {string} filter_patient Patient identifier. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
		 * @param {string} filter_groups Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
		 * @param {string} filter_organization Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
		 * @return {void} OK
		 */
		FetchRewardProgramActivations(filter_patient: string | null | undefined, filter_groups: string | null | undefined, filter_organization: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reward_program_activation?filter_patient=' + (filter_patient == null ? '' : encodeURIComponent(filter_patient)) + '&filter_groups=' + (filter_groups == null ? '' : encodeURIComponent(filter_groups)) + '&filter_organization=' + (filter_organization == null ? '' : encodeURIComponent(filter_organization)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a reward program activation
		 * Get a reward program activationrecord by id.
		 * Get reward_program_activation/{id}
		 * @param {string} id Reward program activation identifier
		 * @return {void} OK
		 */
		FetchRewardProgramActivation(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reward_program_activation/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum FetchCalendarEventsInclude { owner = 0 }

	export enum FetchEmailHistoriesSort { send_time = 0, '-send_time' = 1 }

	export enum FetchHealthProfilesInclude { patient = 0, questions = 1 }

	export enum FetchHealthProfileQuestionsInclude { question_definition = 0, answer = 1 }

	export enum CreateTokenInclude { groups = 0, organization = 1 }

	export enum FetchPatientPlanSummariesInclude { actions = 0, bundles = 1, patient = 2, current_results = 3 }

}

