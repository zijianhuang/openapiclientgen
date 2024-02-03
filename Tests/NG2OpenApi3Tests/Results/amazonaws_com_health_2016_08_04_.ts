import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DescribeAffectedAccountsForOrganizationResponse {
		affectedAccounts?: Array<string>;
		eventScopeCode?: EventScopeCode;
		nextToken?: string;
	}
	export interface DescribeAffectedAccountsForOrganizationResponseFormProperties {
		eventScopeCode: FormControl<EventScopeCode | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAffectedAccountsForOrganizationResponseFormGroup() {
		return new FormGroup<DescribeAffectedAccountsForOrganizationResponseFormProperties>({
			eventScopeCode: new FormControl<EventScopeCode | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventScopeCode { PUBLIC = 'PUBLIC', ACCOUNT_SPECIFIC = 'ACCOUNT_SPECIFIC', NONE = 'NONE' }

	export interface DescribeAffectedAccountsForOrganizationRequest {

		/** Required */
		eventArn: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface DescribeAffectedAccountsForOrganizationRequestFormProperties {

		/** Required */
		eventArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeAffectedAccountsForOrganizationRequestFormGroup() {
		return new FormGroup<DescribeAffectedAccountsForOrganizationRequestFormProperties>({
			eventArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		nextToken?: string;
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
		entityArn?: string;
		eventArn?: string;
		entityValue?: string;
		entityUrl?: string;
		awsAccountId?: string;
		lastUpdatedTime?: Date;
		statusCode?: EntityStatusCode;
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
		statusCode: FormControl<EntityStatusCode | null | undefined>,
	}
	export function CreateAffectedEntityFormGroup() {
		return new FormGroup<AffectedEntityFormProperties>({
			entityArn: new FormControl<string | null | undefined>(undefined),
			eventArn: new FormControl<string | null | undefined>(undefined),
			entityValue: new FormControl<string | null | undefined>(undefined),
			entityUrl: new FormControl<string | null | undefined>(undefined),
			awsAccountId: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			statusCode: new FormControl<EntityStatusCode | null | undefined>(undefined),
		});

	}

	export enum EntityStatusCode { IMPAIRED = 'IMPAIRED', UNIMPAIRED = 'UNIMPAIRED', UNKNOWN = 'UNKNOWN' }

	export interface TagSet {
	}
	export interface TagSetFormProperties {
	}
	export function CreateTagSetFormGroup() {
		return new FormGroup<TagSetFormProperties>({
		});

	}

	export interface DescribeAffectedEntitiesRequest {

		/** Required */
		filter: EntityFilter;
		locale?: string;
		nextToken?: string;
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


	/** The values to use to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html">DescribeAffectedEntities</a> operation. */
	export interface EntityFilter {

		/** Required */
		eventArns: Array<string>;
		entityArns?: Array<string>;
		entityValues?: Array<string>;
		lastUpdatedTimes?: Array<DateTimeRange>;
		tags?: Array<TagSet>;
		statusCodes?: Array<EntityStatusCode>;
	}

	/** The values to use to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html">DescribeAffectedEntities</a> operation. */
	export interface EntityFilterFormProperties {
	}
	export function CreateEntityFilterFormGroup() {
		return new FormGroup<EntityFilterFormProperties>({
		});

	}


	/** A range of dates and times that is used by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html">EventFilter</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html">EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>. */
	export interface DateTimeRange {
		from?: Date;
		to?: Date;
	}

	/** A range of dates and times that is used by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html">EventFilter</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html">EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>. */
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
		nextToken?: string;
	}
	export interface DescribeAffectedEntitiesForOrganizationResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAffectedEntitiesForOrganizationResponseFormGroup() {
		return new FormGroup<DescribeAffectedEntitiesForOrganizationResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> operation can't find or process a specific entity. */
	export interface OrganizationAffectedEntitiesErrorItem {
		awsAccountId?: string;
		eventArn?: string;
		errorName?: string;
		errorMessage?: string;
	}

	/** Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> operation can't find or process a specific entity. */
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

		/** Required */
		organizationEntityFilters: Array<EventAccountFilter>;
		locale?: string;
		nextToken?: string;
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


	/** The values used to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> operations. */
	export interface EventAccountFilter {

		/** Required */
		eventArn: string;
		awsAccountId?: string;
	}

	/** The values used to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> operations. */
	export interface EventAccountFilterFormProperties {

		/** Required */
		eventArn: FormControl<string | null | undefined>,
		awsAccountId: FormControl<string | null | undefined>,
	}
	export function CreateEventAccountFilterFormGroup() {
		return new FormGroup<EventAccountFilterFormProperties>({
			eventArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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


	/** The number of entities that are affected by one or more events. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEntityAggregates.html">DescribeEntityAggregates</a> operation. */
	export interface EntityAggregate {
		eventArn?: string;
		count?: number | null;
	}

	/** The number of entities that are affected by one or more events. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEntityAggregates.html">DescribeEntityAggregates</a> operation. */
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
		nextToken?: string;
	}
	export interface DescribeEventAggregatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventAggregatesResponseFormGroup() {
		return new FormGroup<DescribeEventAggregatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The number of events of each issue type. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html">DescribeEventAggregates</a> operation. */
	export interface EventAggregate {
		aggregateValue?: string;
		count?: number | null;
	}

	/** The number of events of each issue type. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html">DescribeEventAggregates</a> operation. */
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
		filter?: EventFilter;

		/** Required */
		aggregateField: EventAggregateField;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface DescribeEventAggregatesRequestFormProperties {

		/** Required */
		aggregateField: FormControl<EventAggregateField | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventAggregatesRequestFormGroup() {
		return new FormGroup<DescribeEventAggregatesRequestFormProperties>({
			aggregateField: new FormControl<EventAggregateField | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The values to use to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html">DescribeEventAggregates</a> operations. */
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

	/** The values to use to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html">DescribeEventAggregates</a> operations. */
	export interface EventFilterFormProperties {
	}
	export function CreateEventFilterFormGroup() {
		return new FormGroup<EventFilterFormProperties>({
		});

	}

	export enum EventTypeCategory { issue = 'issue', accountNotification = 'accountNotification', scheduledChange = 'scheduledChange', investigation = 'investigation' }

	export enum EventStatusCode { open = 'open', closed = 'closed', upcoming = 'upcoming' }

	export enum EventAggregateField { eventTypeCategory = 'eventTypeCategory' }

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


	/** Detailed information about an event. A combination of an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a> object, an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventDescription.html">EventDescription</a> object, and additional metadata about the event. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation. */
	export interface EventDetails {
		event?: Event;
		eventDescription?: EventDescription;
		eventMetadata?: EventMetadata;
	}

	/** Detailed information about an event. A combination of an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a> object, an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventDescription.html">EventDescription</a> object, and additional metadata about the event. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation. */
	export interface EventDetailsFormProperties {
	}
	export function CreateEventDetailsFormGroup() {
		return new FormGroup<EventDetailsFormProperties>({
		});

	}


	/** <p>Summary information about an Health event.</p> <p>Health events can be public or account-specific:</p> <ul> <li> <p> <i>Public events</i> might be service events that are not specific to an Amazon Web Services account. For example, if there is an issue with an Amazon Web Services Region, Health provides information about the event, even if you don't use services or resources in that Region.</p> </li> <li> <p> <i>Account-specific</i> events are specific to either your Amazon Web Services account or an account in your organization. For example, if there's an issue with Amazon Elastic Compute Cloud in a Region that you use, Health provides information about the event and the affected resources in the account.</p> </li> </ul> <p>You can determine if an event is public or account-specific by using the <code>eventScopeCode</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html#AWSHealth-Type-Event-eventScopeCode">eventScopeCode</a>.</p> */
	export interface Event {
		arn?: string;
		service?: string;
		eventTypeCode?: string;
		eventTypeCategory?: EventTypeCategory;
		region?: string;
		availabilityZone?: string;
		startTime?: Date;
		endTime?: Date;
		lastUpdatedTime?: Date;
		statusCode?: EventStatusCode;
		eventScopeCode?: EventScopeCode;
	}

	/** <p>Summary information about an Health event.</p> <p>Health events can be public or account-specific:</p> <ul> <li> <p> <i>Public events</i> might be service events that are not specific to an Amazon Web Services account. For example, if there is an issue with an Amazon Web Services Region, Health provides information about the event, even if you don't use services or resources in that Region.</p> </li> <li> <p> <i>Account-specific</i> events are specific to either your Amazon Web Services account or an account in your organization. For example, if there's an issue with Amazon Elastic Compute Cloud in a Region that you use, Health provides information about the event and the affected resources in the account.</p> </li> </ul> <p>You can determine if an event is public or account-specific by using the <code>eventScopeCode</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html#AWSHealth-Type-Event-eventScopeCode">eventScopeCode</a>.</p> */
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
		eventScopeCode: FormControl<EventScopeCode | null | undefined>,
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
			eventScopeCode: new FormControl<EventScopeCode | null | undefined>(undefined),
		});

	}


	/** The detailed description of the event. Included in the information returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation. */
	export interface EventDescription {
		latestDescription?: string;
	}

	/** The detailed description of the event. Included in the information returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation. */
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


	/** Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation can't find a specified event. */
	export interface EventDetailsErrorItem {
		eventArn?: string;
		errorName?: string;
		errorMessage?: string;
	}

	/** Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation can't find a specified event. */
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

		/** Required */
		eventArns: Array<string>;
		locale?: string;
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


	/** Detailed information about an event. A combination of an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a> object, an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventDescription.html">EventDescription</a> object, and additional metadata about the event. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> operation. */
	export interface OrganizationEventDetails {
		awsAccountId?: string;

		/** <p>Summary information about an Health event.</p> <p>Health events can be public or account-specific:</p> <ul> <li> <p> <i>Public events</i> might be service events that are not specific to an Amazon Web Services account. For example, if there is an issue with an Amazon Web Services Region, Health provides information about the event, even if you don't use services or resources in that Region.</p> </li> <li> <p> <i>Account-specific</i> events are specific to either your Amazon Web Services account or an account in your organization. For example, if there's an issue with Amazon Elastic Compute Cloud in a Region that you use, Health provides information about the event and the affected resources in the account.</p> </li> </ul> <p>You can determine if an event is public or account-specific by using the <code>eventScopeCode</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html#AWSHealth-Type-Event-eventScopeCode">eventScopeCode</a>.</p> */
		event?: Event;

		/** The detailed description of the event. Included in the information returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation. */
		eventDescription?: EventDescription;
		eventMetadata?: EventMetadata;
	}

	/** Detailed information about an event. A combination of an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a> object, an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventDescription.html">EventDescription</a> object, and additional metadata about the event. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> operation. */
	export interface OrganizationEventDetailsFormProperties {
		awsAccountId: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationEventDetailsFormGroup() {
		return new FormGroup<OrganizationEventDetailsFormProperties>({
			awsAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> operation can't find a specified event. */
	export interface OrganizationEventDetailsErrorItem {
		awsAccountId?: string;
		eventArn?: string;
		errorName?: string;
		errorMessage?: string;
	}

	/** Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> operation can't find a specified event. */
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

		/** Required */
		organizationEventDetailFilters: Array<EventAccountFilter>;
		locale?: string;
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
		nextToken?: string;
	}
	export interface DescribeEventTypesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventTypesResponseFormGroup() {
		return new FormGroup<DescribeEventTypesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains the metadata about a type of event that is reported by Health. The <code>EventType</code> shows the category, service, and the event type code of the event. For example, an <code>issue</code> might be the category, <code>EC2</code> the service, and <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code> the event type code.</p> <p>You can use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventTypes.html">DescribeEventTypes</a> API operation to return this information about an event.</p> <p>You can also use the Amazon CloudWatch Events console to create a rule so that you can get notified or take action when Health delivers a specific event to your Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/cloudwatch-events-health.html">Monitor for Health events with Amazon CloudWatch Events</a> in the <i>Health User Guide</i>.</p> */
	export interface EventType {
		service?: string;
		code?: string;
		category?: EventTypeCategory;
	}

	/** <p>Contains the metadata about a type of event that is reported by Health. The <code>EventType</code> shows the category, service, and the event type code of the event. For example, an <code>issue</code> might be the category, <code>EC2</code> the service, and <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code> the event type code.</p> <p>You can use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventTypes.html">DescribeEventTypes</a> API operation to return this information about an event.</p> <p>You can also use the Amazon CloudWatch Events console to create a rule so that you can get notified or take action when Health delivers a specific event to your Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/cloudwatch-events-health.html">Monitor for Health events with Amazon CloudWatch Events</a> in the <i>Health User Guide</i>.</p> */
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
		filter?: EventTypeFilter;
		locale?: string;
		nextToken?: string;
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


	/** The values to use to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventTypes.html">DescribeEventTypes</a> operation. */
	export interface EventTypeFilter {
		eventTypeCodes?: Array<string>;
		services?: Array<string>;
		eventTypeCategories?: Array<EventTypeCategory>;
	}

	/** The values to use to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventTypes.html">DescribeEventTypes</a> operation. */
	export interface EventTypeFilterFormProperties {
	}
	export function CreateEventTypeFilterFormGroup() {
		return new FormGroup<EventTypeFilterFormProperties>({
		});

	}

	export interface DescribeEventsResponse {
		events?: Array<Event>;
		nextToken?: string;
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
		filter?: EventFilter;
		nextToken?: string;
		maxResults?: number | null;
		locale?: string;
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
		nextToken?: string;
	}
	export interface DescribeEventsForOrganizationResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventsForOrganizationResponseFormGroup() {
		return new FormGroup<DescribeEventsForOrganizationResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about an event, returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html">DescribeEventsForOrganization</a> operation. */
	export interface OrganizationEvent {
		arn?: string;
		service?: string;
		eventTypeCode?: string;
		eventTypeCategory?: EventTypeCategory;
		eventScopeCode?: EventScopeCode;
		region?: string;
		startTime?: Date;
		endTime?: Date;
		lastUpdatedTime?: Date;
		statusCode?: EventStatusCode;
	}

	/** Summary information about an event, returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html">DescribeEventsForOrganization</a> operation. */
	export interface OrganizationEventFormProperties {
		arn: FormControl<string | null | undefined>,
		service: FormControl<string | null | undefined>,
		eventTypeCode: FormControl<string | null | undefined>,
		eventTypeCategory: FormControl<EventTypeCategory | null | undefined>,
		eventScopeCode: FormControl<EventScopeCode | null | undefined>,
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
			eventScopeCode: new FormControl<EventScopeCode | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			statusCode: new FormControl<EventStatusCode | null | undefined>(undefined),
		});

	}

	export interface DescribeEventsForOrganizationRequest {
		filter?: OrganizationEventFilter;
		nextToken?: string;
		maxResults?: number | null;
		locale?: string;
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


	/** The values to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html">DescribeEventsForOrganization</a> operation. */
	export interface OrganizationEventFilter {
		eventTypeCodes?: Array<string>;
		awsAccountIds?: Array<string>;
		services?: Array<string>;
		regions?: Array<string>;

		/** A range of dates and times that is used by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html">EventFilter</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html">EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>. */
		startTime?: DateTimeRange;

		/** A range of dates and times that is used by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html">EventFilter</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html">EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>. */
		endTime?: DateTimeRange;

		/** A range of dates and times that is used by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html">EventFilter</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html">EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>. */
		lastUpdatedTime?: DateTimeRange;
		entityArns?: Array<string>;
		entityValues?: Array<string>;
		eventTypeCategories?: Array<EventTypeCategory>;
		eventStatusCodes?: Array<EventStatusCode>;
	}

	/** The values to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html">DescribeEventsForOrganization</a> operation. */
	export interface OrganizationEventFilterFormProperties {
	}
	export function CreateOrganizationEventFilterFormGroup() {
		return new FormGroup<OrganizationEventFilterFormProperties>({
		});

	}

	export interface DescribeHealthServiceStatusForOrganizationResponse {
		healthServiceAccessStatusForOrganization?: string;
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Returns a list of accounts in the organization from Organizations that are affected by the provided event. For more information about the different types of Health events, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>. </p> <p>Before you can call this operation, you must first enable Health to work with Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's management account.</p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p> </note>
		 * Post #X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeAffectedAccountsForOrganizationResponse} Success
		 */
		DescribeAffectedAccountsForOrganization(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeAffectedAccountsForOrganizationRequest): Observable<DescribeAffectedAccountsForOrganizationResponse> {
			return this.http.post<DescribeAffectedAccountsForOrganizationResponse>(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of entities that have been affected by the specified events, based on the specified filter criteria. Entities can refer to individual customer resources, groups of customer resources, or any other construct, depending on the Amazon Web Service. Events that have impact beyond that of the affected entities, or where the extent of impact is unknown, include at least one entity indicating this.</p> <p>At least one event ARN is required.</p> <note> <ul> <li> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p> </li> <li> <p>This operation supports resource-level permissions. You can use this operation to allow or deny access to specific Health events. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeAffectedEntitiesResponse} Success
		 */
		DescribeAffectedEntities(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeAffectedEntitiesRequest): Observable<DescribeAffectedEntitiesResponse> {
			return this.http.post<DescribeAffectedEntitiesResponse>(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of entities that have been affected by one or more events for one or more accounts in your organization in Organizations, based on the filter criteria. Entities can refer to individual customer resources, groups of customer resources, or any other construct, depending on the Amazon Web Service.</p> <p>At least one event Amazon Resource Name (ARN) and account ID are required.</p> <p>Before you can call this operation, you must first enable Health to work with Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's management account.</p> <note> <ul> <li> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p> </li> <li> <p>This operation doesn't support resource-level permissions. You can't use this operation to allow or deny access to specific Health events. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeAffectedEntitiesForOrganizationResponse} Success
		 */
		DescribeAffectedEntitiesForOrganization(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeAffectedEntitiesForOrganizationRequest): Observable<DescribeAffectedEntitiesForOrganizationResponse> {
			return this.http.post<DescribeAffectedEntitiesForOrganizationResponse>(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the number of entities that are affected by each of the specified events.
		 * Post #X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates
		 * @return {DescribeEntityAggregatesResponse} Success
		 */
		DescribeEntityAggregates(requestBody: DescribeEntityAggregatesRequest): Observable<DescribeEntityAggregatesResponse> {
			return this.http.post<DescribeEntityAggregatesResponse>(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the number of events of each event type (issue, scheduled change, and account notification). If no filter is specified, the counts of all events in each category are returned.</p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p> </note>
		 * Post #X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeEventAggregatesResponse} Success
		 */
		DescribeEventAggregates(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeEventAggregatesRequest): Observable<DescribeEventAggregatesResponse> {
			return this.http.post<DescribeEventAggregatesResponse>(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns detailed information about one or more specified events. Information includes standard event data (Amazon Web Services Region, service, and so on, as returned by <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a>), a detailed event description, and possible additional metadata that depends upon the nature of the event. Affected entities are not included. To retrieve the entities, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html">DescribeAffectedEntities</a> operation.</p> <p>If a specified event can't be retrieved, an error message is returned for that event.</p> <note> <p>This operation supports resource-level permissions. You can use this operation to allow or deny access to specific Health events. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p> </note>
		 * Post #X-Amz-Target=AWSHealth_20160804.DescribeEventDetails
		 * @return {DescribeEventDetailsResponse} Success
		 */
		DescribeEventDetails(requestBody: DescribeEventDetailsRequest): Observable<DescribeEventDetailsResponse> {
			return this.http.post<DescribeEventDetailsResponse>(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns detailed information about one or more specified events for one or more Amazon Web Services accounts in your organization. This information includes standard event data (such as the Amazon Web Services Region and service), an event description, and (depending on the event) possible metadata. This operation doesn't return affected entities, such as the resources related to the event. To return affected entities, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> operation.</p> <note> <p>Before you can call this operation, you must first enable Health to work with Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's management account.</p> </note> <p>When you call the <code>DescribeEventDetailsForOrganization</code> operation, specify the <code>organizationEventDetailFilters</code> object in the request. Depending on the Health event type, note the following differences:</p> <ul> <li> <p>To return event details for a public event, you must specify a null value for the <code>awsAccountId</code> parameter. If you specify an account ID for a public event, Health returns an error message because public events aren't specific to an account.</p> </li> <li> <p>To return event details for an event that is specific to an account in your organization, you must specify the <code>awsAccountId</code> parameter in the request. If you don't specify an account ID, Health returns an error message because the event is specific to an account in your organization. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p> <note> <p>This operation doesn't support resource-level permissions. You can't use this operation to allow or deny access to specific Health events. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p> </note>
		 * Post #X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization
		 * @return {DescribeEventDetailsForOrganizationResponse} Success
		 */
		DescribeEventDetailsForOrganization(requestBody: DescribeEventDetailsForOrganizationRequest): Observable<DescribeEventDetailsForOrganizationResponse> {
			return this.http.post<DescribeEventDetailsForOrganizationResponse>(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the event types that meet the specified filter criteria. You can use this API operation to find information about the Health event, such as the category, Amazon Web Service, and event code. The metadata for each event appears in the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventType.html">EventType</a> object. </p> <p>If you don't specify a filter criteria, the API operation returns all event types, in no particular order. </p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p> </note>
		 * Post #X-Amz-Target=AWSHealth_20160804.DescribeEventTypes
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeEventTypesResponse} Success
		 */
		DescribeEventTypes(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeEventTypesRequest): Observable<DescribeEventTypesResponse> {
			return this.http.post<DescribeEventTypesResponse>(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Returns information about events that meet the specified filter criteria. Events are returned in a summary form and do not include the detailed description, any additional metadata that depends on the event type, or any affected resources. To retrieve that information, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html">DescribeAffectedEntities</a> operations.</p> <p>If no filter criteria are specified, all events are returned. Results are sorted by <code>lastModifiedTime</code>, starting with the most recent event.</p> <note> <ul> <li> <p>When you call the <code>DescribeEvents</code> operation and specify an entity for the <code>entityValues</code> parameter, Health might return public events that aren't specific to that resource. For example, if you call <code>DescribeEvents</code> and specify an ID for an Amazon Elastic Compute Cloud (Amazon EC2) instance, Health might return events that aren't specific to that resource or service. To get events that are specific to a service, use the <code>services</code> parameter in the <code>filter</code> object. For more information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p> </li> <li> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSHealth_20160804.DescribeEvents
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeEventsResponse} Success
		 */
		DescribeEvents(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeEventsRequest): Observable<DescribeEventsResponse> {
			return this.http.post<DescribeEventsResponse>(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DescribeEvents?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about events across your organization in Organizations. You can use the<code>filters</code> parameter to specify the events that you want to return. Events are returned in a summary form and don't include the affected accounts, detailed description, any additional metadata that depends on the event type, or any affected resources. To retrieve that information, use the following operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedAccountsForOrganization.html">DescribeAffectedAccountsForOrganization</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> </p> </li> </ul> <p>If you don't specify a <code>filter</code>, the <code>DescribeEventsForOrganizations</code> returns all events across your organization. Results are sorted by <code>lastModifiedTime</code>, starting with the most recent event. </p> <p>For more information about the different types of Health events, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p> <p>Before you can call this operation, you must first enable Health to work with Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's management account.</p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p> </note>
		 * Post #X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeEventsForOrganizationResponse} Success
		 */
		DescribeEventsForOrganization(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeEventsForOrganizationRequest): Observable<DescribeEventsForOrganizationResponse> {
			return this.http.post<DescribeEventsForOrganizationResponse>(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation provides status information on enabling or disabling Health to work with your organization. To call this operation, you must use the organization's management account.
		 * Post #X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization
		 * @return {DescribeHealthServiceStatusForOrganizationResponse} Success
		 */
		DescribeHealthServiceStatusForOrganization(): Observable<DescribeHealthServiceStatusForOrganizationResponse> {
			return this.http.post<DescribeHealthServiceStatusForOrganizationResponse>(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization', null, {});
		}

		/**
		 * <p>Disables Health from working with Organizations. To call this operation, you must sign in to the organization's management account. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating Health events</a> in the <i>Health User Guide</i>.</p> <p>This operation doesn't remove the service-linked role from the management account in your organization. You must use the IAM console, API, or Command Line Interface (CLI) to remove the service-linked role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html#delete-service-linked-role">Deleting a Service-Linked Role</a> in the <i>IAM User Guide</i>.</p> <note> <p>You can also disable the organizational feature by using the Organizations <a href="https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisableAWSServiceAccess.html">DisableAWSServiceAccess</a> API operation. After you call this operation, Health stops aggregating events for all other Amazon Web Services accounts in your organization. If you call the Health API operations for organizational view, Health returns an error. Health continues to aggregate health events for your Amazon Web Services account.</p> </note>
		 * Post #X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization
		 * @return {void} Success
		 */
		DisableHealthServiceAccessForOrganization(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Enables Health to work with Organizations. You can use the organizational view feature to aggregate events from all Amazon Web Services accounts in your organization in a centralized location. </p> <p>This operation also creates a service-linked role for the management account in the organization. </p> <note> <p>To call this operation, you must meet the following requirements:</p> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan from <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a> to use the Health API. If you call the Health API from an Amazon Web Services account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, you receive a <code>SubscriptionRequiredException</code> error.</p> </li> <li> <p>You must have permission to call this operation from the organization's management account. For example IAM policies, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html">Health identity-based policy examples</a>.</p> </li> </ul> </note> <p>If you don't have the required support plan, you can instead use the Health console to enable the organizational view feature. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating Health events</a> in the <i>Health User Guide</i>.</p>
		 * Post #X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization
		 * @return {void} Success
		 */
		EnableHealthServiceAccessForOrganization(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization', null, { observe: 'response', responseType: 'text' });
		}
	}

	export enum DescribeAffectedAccountsForOrganizationX_Amz_Target { 'AWSHealth_20160804.DescribeAffectedAccountsForOrganization' = 'AWSHealth_20160804.DescribeAffectedAccountsForOrganization' }

	export enum DescribeAffectedEntitiesX_Amz_Target { 'AWSHealth_20160804.DescribeAffectedEntities' = 'AWSHealth_20160804.DescribeAffectedEntities' }

	export enum DescribeAffectedEntitiesForOrganizationX_Amz_Target { 'AWSHealth_20160804.DescribeAffectedEntitiesForOrganization' = 'AWSHealth_20160804.DescribeAffectedEntitiesForOrganization' }

	export enum DescribeEntityAggregatesX_Amz_Target { 'AWSHealth_20160804.DescribeEntityAggregates' = 'AWSHealth_20160804.DescribeEntityAggregates' }

	export enum DescribeEventAggregatesX_Amz_Target { 'AWSHealth_20160804.DescribeEventAggregates' = 'AWSHealth_20160804.DescribeEventAggregates' }

	export enum DescribeEventDetailsX_Amz_Target { 'AWSHealth_20160804.DescribeEventDetails' = 'AWSHealth_20160804.DescribeEventDetails' }

	export enum DescribeEventDetailsForOrganizationX_Amz_Target { 'AWSHealth_20160804.DescribeEventDetailsForOrganization' = 'AWSHealth_20160804.DescribeEventDetailsForOrganization' }

	export enum DescribeEventTypesX_Amz_Target { 'AWSHealth_20160804.DescribeEventTypes' = 'AWSHealth_20160804.DescribeEventTypes' }

	export enum DescribeEventsX_Amz_Target { 'AWSHealth_20160804.DescribeEvents' = 'AWSHealth_20160804.DescribeEvents' }

	export enum DescribeEventsForOrganizationX_Amz_Target { 'AWSHealth_20160804.DescribeEventsForOrganization' = 'AWSHealth_20160804.DescribeEventsForOrganization' }

	export enum DescribeHealthServiceStatusForOrganizationX_Amz_Target { 'AWSHealth_20160804.DescribeHealthServiceStatusForOrganization' = 'AWSHealth_20160804.DescribeHealthServiceStatusForOrganization' }

	export enum DisableHealthServiceAccessForOrganizationX_Amz_Target { 'AWSHealth_20160804.DisableHealthServiceAccessForOrganization' = 'AWSHealth_20160804.DisableHealthServiceAccessForOrganization' }

	export enum EnableHealthServiceAccessForOrganizationX_Amz_Target { 'AWSHealth_20160804.EnableHealthServiceAccessForOrganization' = 'AWSHealth_20160804.EnableHealthServiceAccessForOrganization' }

}

