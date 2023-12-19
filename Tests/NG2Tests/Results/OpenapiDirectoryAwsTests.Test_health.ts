import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DescribeAffectedAccountsForOrganizationResponse {
		affectedAccounts?: Array<string>;
		eventScopeCode?: DescribeAffectedAccountsForOrganizationResponseEventScopeCode | null;
		nextToken?: string | null;
	}
	export interface DescribeAffectedAccountsForOrganizationResponseFormProperties {
		eventScopeCode: FormControl<DescribeAffectedAccountsForOrganizationResponseEventScopeCode | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAffectedAccountsForOrganizationResponseFormGroup() {
		return new FormGroup<DescribeAffectedAccountsForOrganizationResponseFormProperties>({
			eventScopeCode: new FormControl<DescribeAffectedAccountsForOrganizationResponseEventScopeCode | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DescribeAffectedAccountsForOrganizationResponseEventScopeCode { PUBLIC = 0, ACCOUNT_SPECIFIC = 1, NONE = 2 }

	export interface DescribeAffectedAccountsForOrganizationRequest {
		eventArn: string;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface DescribeAffectedAccountsForOrganizationRequestFormProperties {
		eventArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeAffectedAccountsForOrganizationRequestFormGroup() {
		return new FormGroup<DescribeAffectedAccountsForOrganizationRequestFormProperties>({
			eventArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvalidPaginationToken {
	}
	export interface InvalidPaginationTokenFormProperties {
	}
	export function CreateInvalidPaginationTokenFormGroup() {
		return new FormGroup<InvalidPaginationTokenFormProperties>({
		});

	}

	export interface DescribeAffectedEntitiesResponse {
		entities?: Array<AffectedEntity>;
		nextToken?: string | null;
	}
	export interface DescribeAffectedEntitiesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAffectedEntitiesResponseFormGroup() {
		return new FormGroup<DescribeAffectedEntitiesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an entity that is affected by a Health event. */
	export interface AffectedEntity {
		entityArn?: string | null;
		eventArn?: string | null;
		entityValue?: string | null;
		entityUrl?: string | null;
		awsAccountId?: string | null;
		lastUpdatedTime?: Date | null;
		statusCode?: AffectedEntityStatusCode | null;
		tags?: TagSet;
	}

	/** Information about an entity that is affected by a Health event. */
	export interface AffectedEntityFormProperties {
		entityArn: FormControl<string | null | undefined>,
		eventArn: FormControl<string | null | undefined>,
		entityValue: FormControl<string | null | undefined>,
		entityUrl: FormControl<string | null | undefined>,
		awsAccountId: FormControl<string | null | undefined>,
		lastUpdatedTime: FormControl<Date | null | undefined>,
		statusCode: FormControl<AffectedEntityStatusCode | null | undefined>,
	}
	export function CreateAffectedEntityFormGroup() {
		return new FormGroup<AffectedEntityFormProperties>({
			entityArn: new FormControl<string | null | undefined>(undefined),
			eventArn: new FormControl<string | null | undefined>(undefined),
			entityValue: new FormControl<string | null | undefined>(undefined),
			entityUrl: new FormControl<string | null | undefined>(undefined),
			awsAccountId: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			statusCode: new FormControl<AffectedEntityStatusCode | null | undefined>(undefined),
		});

	}

	export enum AffectedEntityStatusCode { IMPAIRED = 0, UNIMPAIRED = 1, UNKNOWN = 2 }

	export interface TagSet {
	}
	export interface TagSetFormProperties {
	}
	export function CreateTagSetFormGroup() {
		return new FormGroup<TagSetFormProperties>({
		});

	}

	export interface DescribeAffectedEntitiesRequest {

		/**
		 * The values to use to filter results from the <a>DescribeAffectedEntities</a> operation.
		 * Required
		 */
		filter: EntityFilter;
		locale?: string | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface DescribeAffectedEntitiesRequestFormProperties {
		locale: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeAffectedEntitiesRequestFormGroup() {
		return new FormGroup<DescribeAffectedEntitiesRequestFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The values to use to filter results from the <a>DescribeAffectedEntities</a> operation. */
	export interface EntityFilter {
		eventArns: Array<string>;
		entityArns?: Array<string>;
		entityValues?: Array<string>;
		lastUpdatedTimes?: Array<DateTimeRange>;
		tags?: Array<TagSet>;
		statusCodes?: Array<EntityStatusCode>;
	}

	/** The values to use to filter results from the <a>DescribeAffectedEntities</a> operation. */
	export interface EntityFilterFormProperties {
	}
	export function CreateEntityFilterFormGroup() {
		return new FormGroup<EntityFilterFormProperties>({
		});

	}


	/** A range of dates and times that is used by the <a>EventFilter</a> and <a>EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>. */
	export interface DateTimeRange {
		from?: Date | null;
		to?: Date | null;
	}

	/** A range of dates and times that is used by the <a>EventFilter</a> and <a>EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>. */
	export interface DateTimeRangeFormProperties {
		from: FormControl<Date | null | undefined>,
		to: FormControl<Date | null | undefined>,
	}
	export function CreateDateTimeRangeFormGroup() {
		return new FormGroup<DateTimeRangeFormProperties>({
			from: new FormControl<Date | null | undefined>(undefined),
			to: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum EntityStatusCode { IMPAIRED = 0, UNIMPAIRED = 1, UNKNOWN = 2 }

	export interface UnsupportedLocale {
	}
	export interface UnsupportedLocaleFormProperties {
	}
	export function CreateUnsupportedLocaleFormGroup() {
		return new FormGroup<UnsupportedLocaleFormProperties>({
		});

	}

	export interface DescribeAffectedEntitiesForOrganizationResponse {
		entities?: Array<AffectedEntity>;
		failedSet?: Array<OrganizationAffectedEntitiesErrorItem>;
		nextToken?: string | null;
	}
	export interface DescribeAffectedEntitiesForOrganizationResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAffectedEntitiesForOrganizationResponseFormGroup() {
		return new FormGroup<DescribeAffectedEntitiesForOrganizationResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error information returned when a <a>DescribeAffectedEntitiesForOrganization</a> operation cannot find or process a specific entity. */
	export interface OrganizationAffectedEntitiesErrorItem {
		awsAccountId?: string | null;
		eventArn?: string | null;
		errorName?: string | null;
		errorMessage?: string | null;
	}

	/** Error information returned when a <a>DescribeAffectedEntitiesForOrganization</a> operation cannot find or process a specific entity. */
	export interface OrganizationAffectedEntitiesErrorItemFormProperties {
		awsAccountId: FormControl<string | null | undefined>,
		eventArn: FormControl<string | null | undefined>,
		errorName: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationAffectedEntitiesErrorItemFormGroup() {
		return new FormGroup<OrganizationAffectedEntitiesErrorItemFormProperties>({
			awsAccountId: new FormControl<string | null | undefined>(undefined),
			eventArn: new FormControl<string | null | undefined>(undefined),
			errorName: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAffectedEntitiesForOrganizationRequest {
		organizationEntityFilters: Array<EventAccountFilter>;
		locale?: string | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface DescribeAffectedEntitiesForOrganizationRequestFormProperties {
		locale: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeAffectedEntitiesForOrganizationRequestFormGroup() {
		return new FormGroup<DescribeAffectedEntitiesForOrganizationRequestFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The values used to filter results from the <a>DescribeEventDetailsForOrganization</a> and <a>DescribeAffectedEntitiesForOrganization</a> operations. */
	export interface EventAccountFilter {
		eventArn: string;
		awsAccountId?: string | null;
	}

	/** The values used to filter results from the <a>DescribeEventDetailsForOrganization</a> and <a>DescribeAffectedEntitiesForOrganization</a> operations. */
	export interface EventAccountFilterFormProperties {
		eventArn: FormControl<string | null | undefined>,
		awsAccountId: FormControl<string | null | undefined>,
	}
	export function CreateEventAccountFilterFormGroup() {
		return new FormGroup<EventAccountFilterFormProperties>({
			eventArn: new FormControl<string | null | undefined>(undefined),
			awsAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEntityAggregatesResponse {
		entityAggregates?: Array<EntityAggregate>;
	}
	export interface DescribeEntityAggregatesResponseFormProperties {
	}
	export function CreateDescribeEntityAggregatesResponseFormGroup() {
		return new FormGroup<DescribeEntityAggregatesResponseFormProperties>({
		});

	}


	/** The number of entities that are affected by one or more events. Returned by the <a>DescribeEntityAggregates</a> operation. */
	export interface EntityAggregate {
		eventArn?: string | null;
		count?: number | null;
	}

	/** The number of entities that are affected by one or more events. Returned by the <a>DescribeEntityAggregates</a> operation. */
	export interface EntityAggregateFormProperties {
		eventArn: FormControl<string | null | undefined>,
		count: FormControl<number | null | undefined>,
	}
	export function CreateEntityAggregateFormGroup() {
		return new FormGroup<EntityAggregateFormProperties>({
			eventArn: new FormControl<string | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeEntityAggregatesRequest {
		eventArns?: Array<string>;
	}
	export interface DescribeEntityAggregatesRequestFormProperties {
	}
	export function CreateDescribeEntityAggregatesRequestFormGroup() {
		return new FormGroup<DescribeEntityAggregatesRequestFormProperties>({
		});

	}

	export interface DescribeEventAggregatesResponse {
		eventAggregates?: Array<EventAggregate>;
		nextToken?: string | null;
	}
	export interface DescribeEventAggregatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventAggregatesResponseFormGroup() {
		return new FormGroup<DescribeEventAggregatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The number of events of each issue type. Returned by the <a>DescribeEventAggregates</a> operation. */
	export interface EventAggregate {
		aggregateValue?: string | null;
		count?: number | null;
	}

	/** The number of events of each issue type. Returned by the <a>DescribeEventAggregates</a> operation. */
	export interface EventAggregateFormProperties {
		aggregateValue: FormControl<string | null | undefined>,
		count: FormControl<number | null | undefined>,
	}
	export function CreateEventAggregateFormGroup() {
		return new FormGroup<EventAggregateFormProperties>({
			aggregateValue: new FormControl<string | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeEventAggregatesRequest {

		/** The values to use to filter results from the <a>DescribeEvents</a> and <a>DescribeEventAggregates</a> operations. */
		filter?: EventFilter;
		aggregateField: DescribeEventAggregatesRequestAggregateField;
		maxResults?: number | null;
		nextToken?: string | null;
	}
	export interface DescribeEventAggregatesRequestFormProperties {
		aggregateField: FormControl<DescribeEventAggregatesRequestAggregateField | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventAggregatesRequestFormGroup() {
		return new FormGroup<DescribeEventAggregatesRequestFormProperties>({
			aggregateField: new FormControl<DescribeEventAggregatesRequestAggregateField | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The values to use to filter results from the <a>DescribeEvents</a> and <a>DescribeEventAggregates</a> operations. */
	export interface EventFilter {
		eventArns?: Array<string>;
		eventTypeCodes?: Array<string>;
		services?: Array<string>;
		regions?: Array<string>;
		availabilityZones?: Array<string>;
		startTimes?: Array<DateTimeRange>;
		endTimes?: Array<DateTimeRange>;
		lastUpdatedTimes?: Array<DateTimeRange>;
		entityArns?: Array<string>;
		entityValues?: Array<string>;
		eventTypeCategories?: Array<EventTypeCategory>;
		tags?: Array<TagSet>;
		eventStatusCodes?: Array<EventStatusCode>;
	}

	/** The values to use to filter results from the <a>DescribeEvents</a> and <a>DescribeEventAggregates</a> operations. */
	export interface EventFilterFormProperties {
	}
	export function CreateEventFilterFormGroup() {
		return new FormGroup<EventFilterFormProperties>({
		});

	}

	export enum EventTypeCategory { issue = 0, accountNotification = 1, scheduledChange = 2, investigation = 3 }

	export enum EventStatusCode { open = 0, closed = 1, upcoming = 2 }

	export enum DescribeEventAggregatesRequestAggregateField { eventTypeCategory = 0 }

	export interface DescribeEventDetailsResponse {
		successfulSet?: Array<EventDetails>;
		failedSet?: Array<EventDetailsErrorItem>;
	}
	export interface DescribeEventDetailsResponseFormProperties {
	}
	export function CreateDescribeEventDetailsResponseFormGroup() {
		return new FormGroup<DescribeEventDetailsResponseFormProperties>({
		});

	}


	/** Detailed information about an event. A combination of an <a>Event</a> object, an <a>EventDescription</a> object, and additional metadata about the event. Returned by the <a>DescribeEventDetails</a> operation. */
	export interface EventDetails {

		/** Summary information about an AWS Health event. */
		event?: Event;

		/** The detailed description of the event. Included in the information returned by the <a>DescribeEventDetails</a> operation. */
		eventDescription?: EventDescription;
		eventMetadata?: EventMetadata;
	}

	/** Detailed information about an event. A combination of an <a>Event</a> object, an <a>EventDescription</a> object, and additional metadata about the event. Returned by the <a>DescribeEventDetails</a> operation. */
	export interface EventDetailsFormProperties {
	}
	export function CreateEventDetailsFormGroup() {
		return new FormGroup<EventDetailsFormProperties>({
		});

	}


	/** Summary information about an AWS Health event. */
	export interface Event {
		arn?: string | null;
		service?: string | null;
		eventTypeCode?: string | null;
		eventTypeCategory?: EventTypeCategory | null;
		region?: string | null;
		availabilityZone?: string | null;
		startTime?: Date | null;
		endTime?: Date | null;
		lastUpdatedTime?: Date | null;
		statusCode?: EventStatusCode | null;
		eventScopeCode?: DescribeAffectedAccountsForOrganizationResponseEventScopeCode | null;
	}

	/** Summary information about an AWS Health event. */
	export interface EventFormProperties {
		arn: FormControl<string | null | undefined>,
		service: FormControl<string | null | undefined>,
		eventTypeCode: FormControl<string | null | undefined>,
		eventTypeCategory: FormControl<EventTypeCategory | null | undefined>,
		region: FormControl<string | null | undefined>,
		availabilityZone: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		lastUpdatedTime: FormControl<Date | null | undefined>,
		statusCode: FormControl<EventStatusCode | null | undefined>,
		eventScopeCode: FormControl<DescribeAffectedAccountsForOrganizationResponseEventScopeCode | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
			eventTypeCode: new FormControl<string | null | undefined>(undefined),
			eventTypeCategory: new FormControl<EventTypeCategory | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			availabilityZone: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			statusCode: new FormControl<EventStatusCode | null | undefined>(undefined),
			eventScopeCode: new FormControl<DescribeAffectedAccountsForOrganizationResponseEventScopeCode | null | undefined>(undefined),
		});

	}


	/** The detailed description of the event. Included in the information returned by the <a>DescribeEventDetails</a> operation. */
	export interface EventDescription {
		latestDescription?: string | null;
	}

	/** The detailed description of the event. Included in the information returned by the <a>DescribeEventDetails</a> operation. */
	export interface EventDescriptionFormProperties {
		latestDescription: FormControl<string | null | undefined>,
	}
	export function CreateEventDescriptionFormGroup() {
		return new FormGroup<EventDescriptionFormProperties>({
			latestDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventMetadata {
	}
	export interface EventMetadataFormProperties {
	}
	export function CreateEventMetadataFormGroup() {
		return new FormGroup<EventMetadataFormProperties>({
		});

	}


	/** Error information returned when a <a>DescribeEventDetails</a> operation cannot find a specified event. */
	export interface EventDetailsErrorItem {
		eventArn?: string | null;
		errorName?: string | null;
		errorMessage?: string | null;
	}

	/** Error information returned when a <a>DescribeEventDetails</a> operation cannot find a specified event. */
	export interface EventDetailsErrorItemFormProperties {
		eventArn: FormControl<string | null | undefined>,
		errorName: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateEventDetailsErrorItemFormGroup() {
		return new FormGroup<EventDetailsErrorItemFormProperties>({
			eventArn: new FormControl<string | null | undefined>(undefined),
			errorName: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEventDetailsRequest {
		eventArns: Array<string>;
		locale?: string | null;
	}
	export interface DescribeEventDetailsRequestFormProperties {
		locale: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventDetailsRequestFormGroup() {
		return new FormGroup<DescribeEventDetailsRequestFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEventDetailsForOrganizationResponse {
		successfulSet?: Array<OrganizationEventDetails>;
		failedSet?: Array<OrganizationEventDetailsErrorItem>;
	}
	export interface DescribeEventDetailsForOrganizationResponseFormProperties {
	}
	export function CreateDescribeEventDetailsForOrganizationResponseFormGroup() {
		return new FormGroup<DescribeEventDetailsForOrganizationResponseFormProperties>({
		});

	}


	/** Detailed information about an event. A combination of an <a>Event</a> object, an <a>EventDescription</a> object, and additional metadata about the event. Returned by the <a>DescribeEventDetailsForOrganization</a> operation. */
	export interface OrganizationEventDetails {
		awsAccountId?: string | null;

		/** Summary information about an AWS Health event. */
		event?: Event;

		/** The detailed description of the event. Included in the information returned by the <a>DescribeEventDetails</a> operation. */
		eventDescription?: EventDescription;
		eventMetadata?: EventMetadata;
	}

	/** Detailed information about an event. A combination of an <a>Event</a> object, an <a>EventDescription</a> object, and additional metadata about the event. Returned by the <a>DescribeEventDetailsForOrganization</a> operation. */
	export interface OrganizationEventDetailsFormProperties {
		awsAccountId: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationEventDetailsFormGroup() {
		return new FormGroup<OrganizationEventDetailsFormProperties>({
			awsAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error information returned when a <a>DescribeEventDetailsForOrganization</a> operation cannot find a specified event. */
	export interface OrganizationEventDetailsErrorItem {
		awsAccountId?: string | null;
		eventArn?: string | null;
		errorName?: string | null;
		errorMessage?: string | null;
	}

	/** Error information returned when a <a>DescribeEventDetailsForOrganization</a> operation cannot find a specified event. */
	export interface OrganizationEventDetailsErrorItemFormProperties {
		awsAccountId: FormControl<string | null | undefined>,
		eventArn: FormControl<string | null | undefined>,
		errorName: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationEventDetailsErrorItemFormGroup() {
		return new FormGroup<OrganizationEventDetailsErrorItemFormProperties>({
			awsAccountId: new FormControl<string | null | undefined>(undefined),
			eventArn: new FormControl<string | null | undefined>(undefined),
			errorName: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEventDetailsForOrganizationRequest {
		organizationEventDetailFilters: Array<EventAccountFilter>;
		locale?: string | null;
	}
	export interface DescribeEventDetailsForOrganizationRequestFormProperties {
		locale: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventDetailsForOrganizationRequestFormGroup() {
		return new FormGroup<DescribeEventDetailsForOrganizationRequestFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEventTypesResponse {
		eventTypes?: Array<EventType>;
		nextToken?: string | null;
	}
	export interface DescribeEventTypesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventTypesResponseFormGroup() {
		return new FormGroup<DescribeEventTypesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata about a type of event that is reported by AWS Health. Data consists of the category (for example, <code>issue</code>), the service (for example, <code>EC2</code>), and the event type code (for example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>). */
	export interface EventType {
		service?: string | null;
		code?: string | null;
		category?: EventTypeCategory | null;
	}

	/** Metadata about a type of event that is reported by AWS Health. Data consists of the category (for example, <code>issue</code>), the service (for example, <code>EC2</code>), and the event type code (for example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>). */
	export interface EventTypeFormProperties {
		service: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,
		category: FormControl<EventTypeCategory | null | undefined>,
	}
	export function CreateEventTypeFormGroup() {
		return new FormGroup<EventTypeFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<EventTypeCategory | null | undefined>(undefined),
		});

	}

	export interface DescribeEventTypesRequest {

		/** The values to use to filter results from the <a>DescribeEventTypes</a> operation. */
		filter?: EventTypeFilter;
		locale?: string | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface DescribeEventTypesRequestFormProperties {
		locale: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeEventTypesRequestFormGroup() {
		return new FormGroup<DescribeEventTypesRequestFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The values to use to filter results from the <a>DescribeEventTypes</a> operation. */
	export interface EventTypeFilter {
		eventTypeCodes?: Array<string>;
		services?: Array<string>;
		eventTypeCategories?: Array<EventTypeCategory>;
	}

	/** The values to use to filter results from the <a>DescribeEventTypes</a> operation. */
	export interface EventTypeFilterFormProperties {
	}
	export function CreateEventTypeFilterFormGroup() {
		return new FormGroup<EventTypeFilterFormProperties>({
		});

	}

	export interface DescribeEventsResponse {
		events?: Array<Event>;
		nextToken?: string | null;
	}
	export interface DescribeEventsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventsResponseFormGroup() {
		return new FormGroup<DescribeEventsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEventsRequest {

		/** The values to use to filter results from the <a>DescribeEvents</a> and <a>DescribeEventAggregates</a> operations. */
		filter?: EventFilter;
		nextToken?: string | null;
		maxResults?: number | null;
		locale?: string | null;
	}
	export interface DescribeEventsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		locale: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventsRequestFormGroup() {
		return new FormGroup<DescribeEventsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEventsForOrganizationResponse {
		events?: Array<OrganizationEvent>;
		nextToken?: string | null;
	}
	export interface DescribeEventsForOrganizationResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventsForOrganizationResponseFormGroup() {
		return new FormGroup<DescribeEventsForOrganizationResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about an event, returned by the <a>DescribeEventsForOrganization</a> operation. */
	export interface OrganizationEvent {
		arn?: string | null;
		service?: string | null;
		eventTypeCode?: string | null;
		eventTypeCategory?: EventTypeCategory | null;
		eventScopeCode?: DescribeAffectedAccountsForOrganizationResponseEventScopeCode | null;
		region?: string | null;
		startTime?: Date | null;
		endTime?: Date | null;
		lastUpdatedTime?: Date | null;
		statusCode?: EventStatusCode | null;
	}

	/** Summary information about an event, returned by the <a>DescribeEventsForOrganization</a> operation. */
	export interface OrganizationEventFormProperties {
		arn: FormControl<string | null | undefined>,
		service: FormControl<string | null | undefined>,
		eventTypeCode: FormControl<string | null | undefined>,
		eventTypeCategory: FormControl<EventTypeCategory | null | undefined>,
		eventScopeCode: FormControl<DescribeAffectedAccountsForOrganizationResponseEventScopeCode | null | undefined>,
		region: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		lastUpdatedTime: FormControl<Date | null | undefined>,
		statusCode: FormControl<EventStatusCode | null | undefined>,
	}
	export function CreateOrganizationEventFormGroup() {
		return new FormGroup<OrganizationEventFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
			eventTypeCode: new FormControl<string | null | undefined>(undefined),
			eventTypeCategory: new FormControl<EventTypeCategory | null | undefined>(undefined),
			eventScopeCode: new FormControl<DescribeAffectedAccountsForOrganizationResponseEventScopeCode | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			statusCode: new FormControl<EventStatusCode | null | undefined>(undefined),
		});

	}

	export interface DescribeEventsForOrganizationRequest {

		/** The values to filter results from the <a>DescribeEventsForOrganization</a> operation. */
		filter?: OrganizationEventFilter;
		nextToken?: string | null;
		maxResults?: number | null;
		locale?: string | null;
	}
	export interface DescribeEventsForOrganizationRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		locale: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventsForOrganizationRequestFormGroup() {
		return new FormGroup<DescribeEventsForOrganizationRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The values to filter results from the <a>DescribeEventsForOrganization</a> operation. */
	export interface OrganizationEventFilter {
		eventTypeCodes?: Array<string>;
		awsAccountIds?: Array<string>;
		services?: Array<string>;
		regions?: Array<string>;

		/** A range of dates and times that is used by the <a>EventFilter</a> and <a>EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>. */
		startTime?: DateTimeRange;

		/** A range of dates and times that is used by the <a>EventFilter</a> and <a>EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>. */
		endTime?: DateTimeRange;

		/** A range of dates and times that is used by the <a>EventFilter</a> and <a>EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>. */
		lastUpdatedTime?: DateTimeRange;
		entityArns?: Array<string>;
		entityValues?: Array<string>;
		eventTypeCategories?: Array<EventTypeCategory>;
		eventStatusCodes?: Array<EventStatusCode>;
	}

	/** The values to filter results from the <a>DescribeEventsForOrganization</a> operation. */
	export interface OrganizationEventFilterFormProperties {
	}
	export function CreateOrganizationEventFilterFormGroup() {
		return new FormGroup<OrganizationEventFilterFormProperties>({
		});

	}

	export interface DescribeHealthServiceStatusForOrganizationResponse {
		healthServiceAccessStatusForOrganization?: string | null;
	}
	export interface DescribeHealthServiceStatusForOrganizationResponseFormProperties {
		healthServiceAccessStatusForOrganization: FormControl<string | null | undefined>,
	}
	export function CreateDescribeHealthServiceStatusForOrganizationResponseFormGroup() {
		return new FormGroup<DescribeHealthServiceStatusForOrganizationResponseFormProperties>({
			healthServiceAccessStatusForOrganization: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConcurrentModificationException {
	}
	export interface ConcurrentModificationExceptionFormProperties {
	}
	export function CreateConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ConcurrentModificationExceptionFormProperties>({
		});

	}

	export enum EventScopeCode { PUBLIC = 0, ACCOUNT_SPECIFIC = 1, NONE = 2 }

	export enum EventAggregateField { eventTypeCategory = 0 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Returns a list of accounts in the organization from AWS Organizations that are affected by the provided event.</p> <p>Before you can call this operation, you must first enable AWS Health to work with AWS Organizations. To do this, call the <a>EnableHealthServiceAccessForOrganization</a> operation from your organization's master account.</p>
		 * Post #X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeAffectedAccountsForOrganizationResponse} Success
		 */
		DescribeAffectedAccountsForOrganization(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeAffectedAccountsForOrganizationRequest): Observable<DescribeAffectedAccountsForOrganizationResponse> {
			return this.http.post<DescribeAffectedAccountsForOrganizationResponse>(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of entities that have been affected by the specified events, based on the specified filter criteria. Entities can refer to individual customer resources, groups of customer resources, or any other construct, depending on the AWS service. Events that have impact beyond that of the affected entities, or where the extent of impact is unknown, include at least one entity indicating this.</p> <p>At least one event ARN is required. Results are sorted by the <code>lastUpdatedTime</code> of the entity, starting with the most recent.</p>
		 * Post #X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeAffectedEntitiesResponse} Success
		 */
		DescribeAffectedEntities(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeAffectedEntitiesRequest): Observable<DescribeAffectedEntitiesResponse> {
			return this.http.post<DescribeAffectedEntitiesResponse>(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of entities that have been affected by one or more events for one or more accounts in your organization in AWS Organizations, based on the filter criteria. Entities can refer to individual customer resources, groups of customer resources, or any other construct, depending on the AWS service.</p> <p>At least one event ARN and account ID are required. Results are sorted by the <code>lastUpdatedTime</code> of the entity, starting with the most recent.</p> <p>Before you can call this operation, you must first enable AWS Health to work with AWS Organizations. To do this, call the <a>EnableHealthServiceAccessForOrganization</a> operation from your organization's master account. </p>
		 * Post #X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeAffectedEntitiesForOrganizationResponse} Success
		 */
		DescribeAffectedEntitiesForOrganization(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeAffectedEntitiesForOrganizationRequest): Observable<DescribeAffectedEntitiesForOrganizationResponse> {
			return this.http.post<DescribeAffectedEntitiesForOrganizationResponse>(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the number of entities that are affected by each of the specified events. If no events are specified, the counts of all affected entities are returned.
		 * Post #X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates
		 * @return {DescribeEntityAggregatesResponse} Success
		 */
		DescribeEntityAggregates(requestBody: DescribeEntityAggregatesRequest): Observable<DescribeEntityAggregatesResponse> {
			return this.http.post<DescribeEntityAggregatesResponse>(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the number of events of each event type (issue, scheduled change, and account notification). If no filter is specified, the counts of all events in each category are returned.
		 * Post #X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeEventAggregatesResponse} Success
		 */
		DescribeEventAggregates(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeEventAggregatesRequest): Observable<DescribeEventAggregatesResponse> {
			return this.http.post<DescribeEventAggregatesResponse>(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns detailed information about one or more specified events. Information includes standard event data (region, service, and so on, as returned by <a>DescribeEvents</a>), a detailed event description, and possible additional metadata that depends upon the nature of the event. Affected entities are not included; to retrieve those, use the <a>DescribeAffectedEntities</a> operation.</p> <p>If a specified event cannot be retrieved, an error message is returned for that event.</p>
		 * Post #X-Amz-Target=AWSHealth_20160804.DescribeEventDetails
		 * @return {DescribeEventDetailsResponse} Success
		 */
		DescribeEventDetails(requestBody: DescribeEventDetailsRequest): Observable<DescribeEventDetailsResponse> {
			return this.http.post<DescribeEventDetailsResponse>(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns detailed information about one or more specified events for one or more accounts in your organization. Information includes standard event data (Region, service, and so on, as returned by <a>DescribeEventsForOrganization</a>, a detailed event description, and possible additional metadata that depends upon the nature of the event. Affected entities are not included; to retrieve those, use the <a>DescribeAffectedEntitiesForOrganization</a> operation.</p> <p>Before you can call this operation, you must first enable AWS Health to work with AWS Organizations. To do this, call the <a>EnableHealthServiceAccessForOrganization</a> operation from your organization's master account.</p>
		 * Post #X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization
		 * @return {DescribeEventDetailsForOrganizationResponse} Success
		 */
		DescribeEventDetailsForOrganization(requestBody: DescribeEventDetailsForOrganizationRequest): Observable<DescribeEventDetailsForOrganizationResponse> {
			return this.http.post<DescribeEventDetailsForOrganizationResponse>(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the event types that meet the specified filter criteria. If no filter criteria are specified, all event types are returned, in no particular order.
		 * Post #X-Amz-Target=AWSHealth_20160804.DescribeEventTypes
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeEventTypesResponse} Success
		 */
		DescribeEventTypes(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeEventTypesRequest): Observable<DescribeEventTypesResponse> {
			return this.http.post<DescribeEventTypesResponse>(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about events that meet the specified filter criteria. Events are returned in a summary form and do not include the detailed description, any additional metadata that depends on the event type, or any affected resources. To retrieve that information, use the <a>DescribeEventDetails</a> and <a>DescribeAffectedEntities</a> operations.</p> <p>If no filter criteria are specified, all events are returned. Results are sorted by <code>lastModifiedTime</code>, starting with the most recent.</p>
		 * Post #X-Amz-Target=AWSHealth_20160804.DescribeEvents
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeEventsResponse} Success
		 */
		DescribeEvents(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeEventsRequest): Observable<DescribeEventsResponse> {
			return this.http.post<DescribeEventsResponse>(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DescribeEvents?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about events across your organization in AWS Organizations, meeting the specified filter criteria. Events are returned in a summary form and do not include the accounts impacted, detailed description, any additional metadata that depends on the event type, or any affected resources. To retrieve that information, use the <a>DescribeAffectedAccountsForOrganization</a>, <a>DescribeEventDetailsForOrganization</a>, and <a>DescribeAffectedEntitiesForOrganization</a> operations.</p> <p>If no filter criteria are specified, all events across your organization are returned. Results are sorted by <code>lastModifiedTime</code>, starting with the most recent.</p> <p>Before you can call this operation, you must first enable Health to work with AWS Organizations. To do this, call the <a>EnableHealthServiceAccessForOrganization</a> operation from your organization's master account.</p>
		 * Post #X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeEventsForOrganizationResponse} Success
		 */
		DescribeEventsForOrganization(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeEventsForOrganizationRequest): Observable<DescribeEventsForOrganizationResponse> {
			return this.http.post<DescribeEventsForOrganizationResponse>(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation provides status information on enabling or disabling AWS Health to work with your organization. To call this operation, you must sign in as an IAM user, assume an IAM role, or sign in as the root user (not recommended) in the organization's master account.
		 * Post #X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization
		 * @return {DescribeHealthServiceStatusForOrganizationResponse} Success
		 */
		DescribeHealthServiceStatusForOrganization(): Observable<DescribeHealthServiceStatusForOrganizationResponse> {
			return this.http.post<DescribeHealthServiceStatusForOrganizationResponse>(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization', null, {});
		}

		/**
		 * Calling this operation disables Health from working with AWS Organizations. This does not remove the Service Linked Role (SLR) from the the master account in your organization. Use the IAM console, API, or AWS CLI to remove the SLR if desired. To call this operation, you must sign in as an IAM user, assume an IAM role, or sign in as the root user (not recommended) in the organization's master account.
		 * Post #X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization
		 * @return {void} Success
		 */
		DisableHealthServiceAccessForOrganization(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Calling this operation enables AWS Health to work with AWS Organizations. This applies a Service Linked Role (SLR) to the master account in the organization. To learn more about the steps in this process, visit enabling service access for AWS Health in AWS Organizations. To call this operation, you must sign in as an IAM user, assume an IAM role, or sign in as the root user (not recommended) in the organization's master account.
		 * Post #X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization
		 * @return {void} Success
		 */
		EnableHealthServiceAccessForOrganization(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization', null, { observe: 'response', responseType: 'text' });
		}
	}

	export enum DescribeAffectedAccountsForOrganizationX_Amz_Target { AWSHealth_20160804_DescribeAffectedAccountsForOrganization = 0 }

	export enum DescribeAffectedEntitiesX_Amz_Target { AWSHealth_20160804_DescribeAffectedEntities = 0 }

	export enum DescribeAffectedEntitiesForOrganizationX_Amz_Target { AWSHealth_20160804_DescribeAffectedEntitiesForOrganization = 0 }

	export enum DescribeEntityAggregatesX_Amz_Target { AWSHealth_20160804_DescribeEntityAggregates = 0 }

	export enum DescribeEventAggregatesX_Amz_Target { AWSHealth_20160804_DescribeEventAggregates = 0 }

	export enum DescribeEventDetailsX_Amz_Target { AWSHealth_20160804_DescribeEventDetails = 0 }

	export enum DescribeEventDetailsForOrganizationX_Amz_Target { AWSHealth_20160804_DescribeEventDetailsForOrganization = 0 }

	export enum DescribeEventTypesX_Amz_Target { AWSHealth_20160804_DescribeEventTypes = 0 }

	export enum DescribeEventsX_Amz_Target { AWSHealth_20160804_DescribeEvents = 0 }

	export enum DescribeEventsForOrganizationX_Amz_Target { AWSHealth_20160804_DescribeEventsForOrganization = 0 }

	export enum DescribeHealthServiceStatusForOrganizationX_Amz_Target { AWSHealth_20160804_DescribeHealthServiceStatusForOrganization = 0 }

	export enum DisableHealthServiceAccessForOrganizationX_Amz_Target { AWSHealth_20160804_DisableHealthServiceAccessForOrganization = 0 }

	export enum EnableHealthServiceAccessForOrganizationX_Amz_Target { AWSHealth_20160804_EnableHealthServiceAccessForOrganization = 0 }

}

