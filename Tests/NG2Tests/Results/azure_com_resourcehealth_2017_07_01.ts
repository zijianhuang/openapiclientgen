import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Error details. */
	export interface ErrorResponse {

		/** The error code. */
		code?: string | null;

		/** The error details. */
		details?: string | null;

		/** The error message. */
		message?: string | null;
	}

	/** Error details. */
	export interface ErrorResponseFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error details. */
		details: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** availabilityStatus of a resource. */
	export interface AvailabilityStatus {

		/** Azure Resource Manager Identity for the availabilityStatuses resource. */
		id?: string | null;

		/** Azure Resource Manager geo location of the resource. */
		location?: string | null;

		/** current. */
		name?: string | null;

		/** Properties of availability state. */
		properties?: AvailabilityStatusProperties;

		/** Microsoft.ResourceHealth/AvailabilityStatuses. */
		type?: string | null;
	}

	/** availabilityStatus of a resource. */
	export interface AvailabilityStatusFormProperties {

		/** Azure Resource Manager Identity for the availabilityStatuses resource. */
		id: FormControl<string | null | undefined>,

		/** Azure Resource Manager geo location of the resource. */
		location: FormControl<string | null | undefined>,

		/** current. */
		name: FormControl<string | null | undefined>,

		/** Microsoft.ResourceHealth/AvailabilityStatuses. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAvailabilityStatusFormGroup() {
		return new FormGroup<AvailabilityStatusFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AvailabilityStatusProperties {

		/** Availability status of the resource. When it is null, this availabilityStatus object represents an availability impacting event */
		availabilityState?: AvailabilityStatusPropertiesAvailabilityState | null;

		/** Details of the availability status. */
		detailedStatus?: string | null;

		/** In case of an availability impacting event, it describes the category of a PlatformInitiated health impacting event. Examples are Planned, Unplanned etc. */
		healthEventCategory?: string | null;

		/** In case of an availability impacting event, it describes where the health impacting event was originated. Examples are PlatformInitiated, UserInitiated etc. */
		healthEventCause?: string | null;

		/** It is a unique Id that identifies the event */
		healthEventId?: string | null;

		/** In case of an availability impacting event, it describes when the health impacting event was originated. Examples are Lifecycle, Downtime, Fault Analysis etc. */
		healthEventType?: string | null;

		/** Timestamp for when last change in health status occurred. */
		occuredTime?: Date | null;

		/** Chronicity of the availability transition. */
		reasonChronicity?: AvailabilityStatusPropertiesReasonChronicity | null;

		/** When the resource's availabilityState is Unavailable, it describes where the health impacting event was originated. Examples are planned, unplanned, user initiated or an outage etc. */
		reasonType?: string | null;

		/** An annotation describing a change in the availabilityState to Available from Unavailable with a reasonType of type Unplanned */
		recentlyResolvedState?: AvailabilityStatusPropertiesRecentlyResolvedState;

		/** Lists actions the user can take based on the current availabilityState of the resource. */
		recommendedActions?: Array<RecommendedAction>;

		/** Timestamp for when the health was last checked. */
		reportedTime?: Date | null;

		/** When the resource's availabilityState is Unavailable and the reasonType is not User Initiated, it provides the date and time for when the issue is expected to be resolved. */
		resolutionETA?: Date | null;

		/** When the resource's availabilityState is Unavailable, it provides the Timestamp for when the health impacting event was received. */
		rootCauseAttributionTime?: Date | null;

		/** Lists the service impacting events that may be affecting the health of the resource. */
		serviceImpactingEvents?: Array<ServiceImpactingEvent>;

		/** Summary description of the availability status. */
		summary?: string | null;
	}
	export interface AvailabilityStatusPropertiesFormProperties {

		/** Availability status of the resource. When it is null, this availabilityStatus object represents an availability impacting event */
		availabilityState: FormControl<AvailabilityStatusPropertiesAvailabilityState | null | undefined>,

		/** Details of the availability status. */
		detailedStatus: FormControl<string | null | undefined>,

		/** In case of an availability impacting event, it describes the category of a PlatformInitiated health impacting event. Examples are Planned, Unplanned etc. */
		healthEventCategory: FormControl<string | null | undefined>,

		/** In case of an availability impacting event, it describes where the health impacting event was originated. Examples are PlatformInitiated, UserInitiated etc. */
		healthEventCause: FormControl<string | null | undefined>,

		/** It is a unique Id that identifies the event */
		healthEventId: FormControl<string | null | undefined>,

		/** In case of an availability impacting event, it describes when the health impacting event was originated. Examples are Lifecycle, Downtime, Fault Analysis etc. */
		healthEventType: FormControl<string | null | undefined>,

		/** Timestamp for when last change in health status occurred. */
		occuredTime: FormControl<Date | null | undefined>,

		/** Chronicity of the availability transition. */
		reasonChronicity: FormControl<AvailabilityStatusPropertiesReasonChronicity | null | undefined>,

		/** When the resource's availabilityState is Unavailable, it describes where the health impacting event was originated. Examples are planned, unplanned, user initiated or an outage etc. */
		reasonType: FormControl<string | null | undefined>,

		/** Timestamp for when the health was last checked. */
		reportedTime: FormControl<Date | null | undefined>,

		/** When the resource's availabilityState is Unavailable and the reasonType is not User Initiated, it provides the date and time for when the issue is expected to be resolved. */
		resolutionETA: FormControl<Date | null | undefined>,

		/** When the resource's availabilityState is Unavailable, it provides the Timestamp for when the health impacting event was received. */
		rootCauseAttributionTime: FormControl<Date | null | undefined>,

		/** Summary description of the availability status. */
		summary: FormControl<string | null | undefined>,
	}
	export function CreateAvailabilityStatusPropertiesFormGroup() {
		return new FormGroup<AvailabilityStatusPropertiesFormProperties>({
			availabilityState: new FormControl<AvailabilityStatusPropertiesAvailabilityState | null | undefined>(undefined),
			detailedStatus: new FormControl<string | null | undefined>(undefined),
			healthEventCategory: new FormControl<string | null | undefined>(undefined),
			healthEventCause: new FormControl<string | null | undefined>(undefined),
			healthEventId: new FormControl<string | null | undefined>(undefined),
			healthEventType: new FormControl<string | null | undefined>(undefined),
			occuredTime: new FormControl<Date | null | undefined>(undefined),
			reasonChronicity: new FormControl<AvailabilityStatusPropertiesReasonChronicity | null | undefined>(undefined),
			reasonType: new FormControl<string | null | undefined>(undefined),
			reportedTime: new FormControl<Date | null | undefined>(undefined),
			resolutionETA: new FormControl<Date | null | undefined>(undefined),
			rootCauseAttributionTime: new FormControl<Date | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AvailabilityStatusPropertiesAvailabilityState { Available = 'Available', Unavailable = 'Unavailable', Unknown = 'Unknown' }

	export enum AvailabilityStatusPropertiesReasonChronicity { Transient = 'Transient', Persistent = 'Persistent' }

	export interface AvailabilityStatusPropertiesRecentlyResolvedState {

		/** Timestamp when the availabilityState changes to Available. */
		resolvedTime?: Date | null;

		/** Brief description of cause of the resource becoming unavailable. */
		unavailabilitySummary?: string | null;

		/** Timestamp for when the availabilityState changed to Unavailable */
		unavailableOccurredTime?: Date | null;
	}
	export interface AvailabilityStatusPropertiesRecentlyResolvedStateFormProperties {

		/** Timestamp when the availabilityState changes to Available. */
		resolvedTime: FormControl<Date | null | undefined>,

		/** Brief description of cause of the resource becoming unavailable. */
		unavailabilitySummary: FormControl<string | null | undefined>,

		/** Timestamp for when the availabilityState changed to Unavailable */
		unavailableOccurredTime: FormControl<Date | null | undefined>,
	}
	export function CreateAvailabilityStatusPropertiesRecentlyResolvedStateFormGroup() {
		return new FormGroup<AvailabilityStatusPropertiesRecentlyResolvedStateFormProperties>({
			resolvedTime: new FormControl<Date | null | undefined>(undefined),
			unavailabilitySummary: new FormControl<string | null | undefined>(undefined),
			unavailableOccurredTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Lists actions the user can take based on the current availabilityState of the resource. */
	export interface RecommendedAction {

		/** Recommended action. */
		action?: string | null;

		/** Link to the action */
		actionUrl?: string | null;

		/** Substring of action, it describes which text should host the action url. */
		actionUrlText?: string | null;
	}

	/** Lists actions the user can take based on the current availabilityState of the resource. */
	export interface RecommendedActionFormProperties {

		/** Recommended action. */
		action: FormControl<string | null | undefined>,

		/** Link to the action */
		actionUrl: FormControl<string | null | undefined>,

		/** Substring of action, it describes which text should host the action url. */
		actionUrlText: FormControl<string | null | undefined>,
	}
	export function CreateRecommendedActionFormGroup() {
		return new FormGroup<RecommendedActionFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			actionUrl: new FormControl<string | null | undefined>(undefined),
			actionUrlText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lists the service impacting events that may be affecting the health of the resource. */
	export interface ServiceImpactingEvent {

		/** Correlation id for the event */
		correlationId?: string | null;

		/** Timestamp for when the event started. */
		eventStartTime?: Date | null;

		/** Timestamp for when event was submitted/detected. */
		eventStatusLastModifiedTime?: Date | null;

		/** Properties of the service impacting event. */
		incidentProperties?: ServiceImpactingEventIncidentProperties;

		/** Status of the service impacting event. */
		status?: ServiceImpactingEventStatus;
	}

	/** Lists the service impacting events that may be affecting the health of the resource. */
	export interface ServiceImpactingEventFormProperties {

		/** Correlation id for the event */
		correlationId: FormControl<string | null | undefined>,

		/** Timestamp for when the event started. */
		eventStartTime: FormControl<Date | null | undefined>,

		/** Timestamp for when event was submitted/detected. */
		eventStatusLastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateServiceImpactingEventFormGroup() {
		return new FormGroup<ServiceImpactingEventFormProperties>({
			correlationId: new FormControl<string | null | undefined>(undefined),
			eventStartTime: new FormControl<Date | null | undefined>(undefined),
			eventStatusLastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ServiceImpactingEventIncidentProperties {

		/** Type of Event. */
		incidentType?: string | null;

		/** Region impacted by the event. */
		region?: string | null;

		/** Service impacted by the event. */
		service?: string | null;

		/** Title of the incident. */
		title?: string | null;
	}
	export interface ServiceImpactingEventIncidentPropertiesFormProperties {

		/** Type of Event. */
		incidentType: FormControl<string | null | undefined>,

		/** Region impacted by the event. */
		region: FormControl<string | null | undefined>,

		/** Service impacted by the event. */
		service: FormControl<string | null | undefined>,

		/** Title of the incident. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateServiceImpactingEventIncidentPropertiesFormGroup() {
		return new FormGroup<ServiceImpactingEventIncidentPropertiesFormProperties>({
			incidentType: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceImpactingEventStatus {

		/** Current status of the event */
		value?: string | null;
	}
	export interface ServiceImpactingEventStatusFormProperties {

		/** Current status of the event */
		value: FormControl<string | null | undefined>,
	}
	export function CreateServiceImpactingEventStatusFormGroup() {
		return new FormGroup<ServiceImpactingEventStatusFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List availabilityStatus operation response. */
	export interface AvailabilityStatusListResult {

		/** The URI to fetch the next page of availabilityStatuses. Call ListNext() with this URI to fetch the next page of availabilityStatuses. */
		nextLink?: string | null;

		/**
		 * The list of availabilityStatuses.
		 * Required
		 */
		value: Array<AvailabilityStatus>;
	}

	/** The List availabilityStatus operation response. */
	export interface AvailabilityStatusListResultFormProperties {

		/** The URI to fetch the next page of availabilityStatuses. Call ListNext() with this URI to fetch the next page of availabilityStatuses. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAvailabilityStatusListResultFormGroup() {
		return new FormGroup<AvailabilityStatusListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** On-going emerging issue from azure status. */
	export interface EmergingIssue {

		/** Timestamp for when last time refreshed for ongoing emerging issue. */
		refreshTimestamp?: Date | null;

		/** The list of emerging issues of active event type. */
		statusActiveEvents?: Array<StatusActiveEvent>;

		/** The list of emerging issues of banner type. */
		statusBanners?: Array<StatusBanner>;
	}

	/** On-going emerging issue from azure status. */
	export interface EmergingIssueFormProperties {

		/** Timestamp for when last time refreshed for ongoing emerging issue. */
		refreshTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateEmergingIssueFormGroup() {
		return new FormGroup<EmergingIssueFormProperties>({
			refreshTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Active event type of emerging issue. */
	export interface StatusActiveEvent {

		/** The cloud type of this active event. */
		cloud?: string | null;

		/** The details of active event. */
		description?: string | null;

		/** The list of emerging issues impacts. */
		impacts?: Array<EmergingIssueImpact>;

		/** The last time modified on this banner. */
		lastModifiedTime?: Date | null;

		/** The boolean value of this active event if published or not. */
		published?: boolean | null;

		/** The severity level of this active event. */
		severity?: StatusActiveEventSeverity | null;

		/** The stage of this active event. */
		stage?: StatusActiveEventStage | null;

		/** The impact start time on this active event. */
		startTime?: Date | null;

		/** The active event title. */
		title?: string | null;

		/** The tracking id of this active event. */
		trackingId?: string | null;
	}

	/** Active event type of emerging issue. */
	export interface StatusActiveEventFormProperties {

		/** The cloud type of this active event. */
		cloud: FormControl<string | null | undefined>,

		/** The details of active event. */
		description: FormControl<string | null | undefined>,

		/** The last time modified on this banner. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** The boolean value of this active event if published or not. */
		published: FormControl<boolean | null | undefined>,

		/** The severity level of this active event. */
		severity: FormControl<StatusActiveEventSeverity | null | undefined>,

		/** The stage of this active event. */
		stage: FormControl<StatusActiveEventStage | null | undefined>,

		/** The impact start time on this active event. */
		startTime: FormControl<Date | null | undefined>,

		/** The active event title. */
		title: FormControl<string | null | undefined>,

		/** The tracking id of this active event. */
		trackingId: FormControl<string | null | undefined>,
	}
	export function CreateStatusActiveEventFormGroup() {
		return new FormGroup<StatusActiveEventFormProperties>({
			cloud: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			published: new FormControl<boolean | null | undefined>(undefined),
			severity: new FormControl<StatusActiveEventSeverity | null | undefined>(undefined),
			stage: new FormControl<StatusActiveEventStage | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object of the emerging issue impact on services and regions. */
	export interface EmergingIssueImpact {

		/** The impacted service id. */
		id?: string | null;

		/** The impacted service name. */
		name?: string | null;

		/** The list of impacted regions for corresponding emerging issues. */
		regions?: Array<ImpactedRegion>;
	}

	/** Object of the emerging issue impact on services and regions. */
	export interface EmergingIssueImpactFormProperties {

		/** The impacted service id. */
		id: FormControl<string | null | undefined>,

		/** The impacted service name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEmergingIssueImpactFormGroup() {
		return new FormGroup<EmergingIssueImpactFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object of impacted region. */
	export interface ImpactedRegion {

		/** The impacted region id. */
		id?: string | null;

		/** The impacted region name. */
		name?: string | null;
	}

	/** Object of impacted region. */
	export interface ImpactedRegionFormProperties {

		/** The impacted region id. */
		id: FormControl<string | null | undefined>,

		/** The impacted region name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateImpactedRegionFormGroup() {
		return new FormGroup<ImpactedRegionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StatusActiveEventSeverity { Information = 'Information', Warning = 'Warning', Error = 'Error' }

	export enum StatusActiveEventStage { Active = 'Active', Resolve = 'Resolve', Archived = 'Archived' }


	/** Banner type of emerging issue. */
	export interface StatusBanner {

		/** The cloud type of this banner. */
		cloud?: string | null;

		/** The last time modified on this banner. */
		lastModifiedTime?: Date | null;

		/** The details of banner. */
		message?: string | null;

		/** The banner title. */
		title?: string | null;
	}

	/** Banner type of emerging issue. */
	export interface StatusBannerFormProperties {

		/** The cloud type of this banner. */
		cloud: FormControl<string | null | undefined>,

		/** The last time modified on this banner. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** The details of banner. */
		message: FormControl<string | null | undefined>,

		/** The banner title. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateStatusBannerFormGroup() {
		return new FormGroup<StatusBannerFormProperties>({
			cloud: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of emerging issues. */
	export interface EmergingIssueListResult {

		/** The link used to get the next page of emerging issues. */
		nextLink?: string | null;

		/** The list of emerging issues. */
		value?: Array<EmergingIssuesGetResult>;
	}

	/** The list of emerging issues. */
	export interface EmergingIssueListResultFormProperties {

		/** The link used to get the next page of emerging issues. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateEmergingIssueListResultFormGroup() {
		return new FormGroup<EmergingIssueListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Get EmergingIssues operation response. */
	export interface EmergingIssuesGetResult {

		/** On-going emerging issue from azure status. */
		properties?: EmergingIssue;
	}

	/** The Get EmergingIssues operation response. */
	export interface EmergingIssuesGetResultFormProperties {
	}
	export function CreateEmergingIssuesGetResultFormGroup() {
		return new FormGroup<EmergingIssuesGetResultFormProperties>({
		});

	}


	/** Operation available in the resourcehealth resource provider. */
	export interface Operation {

		/** Properties of the operation. */
		display?: OperationDisplay;

		/** Name of the operation. */
		name?: string | null;
	}

	/** Operation available in the resourcehealth resource provider. */
	export interface OperationFormProperties {

		/** Name of the operation. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OperationDisplay {

		/** Description of the operation. */
		description?: string | null;

		/** Operation name. */
		operation?: string | null;

		/** Provider name. */
		provider?: string | null;

		/** Resource name. */
		resource?: string | null;
	}
	export interface OperationDisplayFormProperties {

		/** Description of the operation. */
		description: FormControl<string | null | undefined>,

		/** Operation name. */
		operation: FormControl<string | null | undefined>,

		/** Provider name. */
		provider: FormControl<string | null | undefined>,

		/** Resource name. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayFormGroup() {
		return new FormGroup<OperationDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lists the operations response. */
	export interface OperationListResult {

		/**
		 * List of operations available in the resourcehealth resource provider.
		 * Required
		 */
		value: Array<Operation>;
	}

	/** Lists the operations response. */
	export interface OperationListResultFormProperties {
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists Azure services' emerging issues.
		 * Get providers/Microsoft.ResourceHealth/emergingIssues
		 * @param {string} api_version Client Api Version.
		 * @return {EmergingIssueListResult} The body contains a list of azure emerging issues.
		 */
		EmergingIssues_List(api_version: string): Observable<EmergingIssueListResult> {
			return this.http.get<EmergingIssueListResult>(this.baseUri + 'providers/Microsoft.ResourceHealth/emergingIssues?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets Azure services' emerging issues.
		 * Get providers/Microsoft.ResourceHealth/emergingIssues/{issueName}
		 * @param {EmergingIssues_GetIssueName} issueName The name of the emerging issue.
		 * @param {string} api_version Client Api Version.
		 * @return {EmergingIssuesGetResult} The body contains properties of azure emerging issues, which includes a list of status banner and status active events.
		 */
		EmergingIssues_Get(issueName: EmergingIssues_GetIssueName, api_version: string): Observable<EmergingIssuesGetResult> {
			return this.http.get<EmergingIssuesGetResult>(this.baseUri + 'providers/Microsoft.ResourceHealth/emergingIssues/' + issueName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists available operations for the resourcehealth resource provider
		 * Get providers/Microsoft.ResourceHealth/operations
		 * @param {string} api_version Client Api Version.
		 * @return {OperationListResult} The body contains the list of available operations for the resourcehealth resource provider
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.ResourceHealth/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists the current availability status for all the resources in the subscription. Use the nextLink property in the response to get the next page of availability statuses.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.ResourceHealth/availabilityStatuses
		 * @param {string} api_version Client Api Version.
		 * @param {string} filter The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} expand Setting $expand=recommendedactions in url query expands the recommendedactions in the response.
		 * @return {AvailabilityStatusListResult} The body contains the list of the current availability status for all the resources in the subscription
		 */
		AvailabilityStatuses_ListBySubscriptionId(api_version: string, filter: string | null | undefined, subscriptionId: string, expand: string | null | undefined): Observable<AvailabilityStatusListResult> {
			return this.http.get<AvailabilityStatusListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ResourceHealth/availabilityStatuses?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), {});
		}

		/**
		 * Lists the current availability status for all the resources in the resource group. Use the nextLink property in the response to get the next page of availability statuses.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceHealth/availabilityStatuses
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client Api Version.
		 * @param {string} filter The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
		 * @param {string} expand Setting $expand=recommendedactions in url query expands the recommendedactions in the response.
		 * @return {AvailabilityStatusListResult} The body contains the list of the current availability status for all the resources in the resource group
		 */
		AvailabilityStatuses_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string, filter: string | null | undefined, expand: string | null | undefined): Observable<AvailabilityStatusListResult> {
			return this.http.get<AvailabilityStatusListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ResourceHealth/availabilityStatuses&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), {});
		}

		/**
		 * Lists all historical availability transitions and impacting events for a single resource. Use the nextLink property in the response to get the next page of availability status
		 * Get {resourceUri}/providers/Microsoft.ResourceHealth/availabilityStatuses
		 * @param {string} resourceUri The fully qualified ID of the resource, including the resource name and resource type. Currently the API support not nested and one nesting level resource types : /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name} and /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} filter The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
		 * @param {string} expand Setting $expand=recommendedactions in url query expands the recommendedactions in the response.
		 * @return {AvailabilityStatusListResult} The body contains the list of the historical availability statuses for a single resource
		 */
		AvailabilityStatuses_List(resourceUri: string, api_version: string, filter: string | null | undefined, expand: string | null | undefined): Observable<AvailabilityStatusListResult> {
			return this.http.get<AvailabilityStatusListResult>(this.baseUri + (resourceUri == null ? '' : encodeURIComponent(resourceUri)) + '/providers/Microsoft.ResourceHealth/availabilityStatuses&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '', {});
		}

		/**
		 * Gets current availability status for a single resource
		 * Get {resourceUri}/providers/Microsoft.ResourceHealth/availabilityStatuses/current
		 * @param {string} resourceUri The fully qualified ID of the resource, including the resource name and resource type. Currently the API support not nested and one nesting level resource types : /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name} and /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} filter The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
		 * @param {string} expand Setting $expand=recommendedactions in url query expands the recommendedactions in the response.
		 * @return {AvailabilityStatus} The body contains the current availability status for a single resource
		 */
		AvailabilityStatuses_GetByResource(resourceUri: string, api_version: string, filter: string | null | undefined, expand: string | null | undefined): Observable<AvailabilityStatus> {
			return this.http.get<AvailabilityStatus>(this.baseUri + (resourceUri == null ? '' : encodeURIComponent(resourceUri)) + '/providers/Microsoft.ResourceHealth/availabilityStatuses/current&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '', {});
		}

		/**
		 * Lists the historical availability statuses for a single child resource. Use the nextLink property in the response to get the next page of availability status
		 * Get {resourceUri}/providers/Microsoft.ResourceHealth/childAvailabilityStatuses
		 * @param {string} resourceUri The fully qualified ID of the resource, including the resource name and resource type. Currently the API only support one nesting level resource types : /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} filter The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
		 * @param {string} expand Setting $expand=recommendedactions in url query expands the recommendedactions in the response.
		 * @return {AvailabilityStatusListResult} The body contains the list of the historical availability statuses for a single child resource
		 */
		ChildAvailabilityStatuses_List(resourceUri: string, api_version: string, filter: string | null | undefined, expand: string | null | undefined): Observable<AvailabilityStatusListResult> {
			return this.http.get<AvailabilityStatusListResult>(this.baseUri + (resourceUri == null ? '' : encodeURIComponent(resourceUri)) + '/providers/Microsoft.ResourceHealth/childAvailabilityStatuses&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '', {});
		}

		/**
		 * Gets current availability status for a single resource
		 * Get {resourceUri}/providers/Microsoft.ResourceHealth/childAvailabilityStatuses/current
		 * @param {string} resourceUri The fully qualified ID of the resource, including the resource name and resource type. Currently the API only support one nesting level resource types : /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} filter The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
		 * @param {string} expand Setting $expand=recommendedactions in url query expands the recommendedactions in the response.
		 * @return {AvailabilityStatus} The body contains the current availability status for a single resource
		 */
		ChildAvailabilityStatuses_GetByResource(resourceUri: string, api_version: string, filter: string | null | undefined, expand: string | null | undefined): Observable<AvailabilityStatus> {
			return this.http.get<AvailabilityStatus>(this.baseUri + (resourceUri == null ? '' : encodeURIComponent(resourceUri)) + '/providers/Microsoft.ResourceHealth/childAvailabilityStatuses/current&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '', {});
		}

		/**
		 * Lists the all the children and its current health status for a parent resource. Use the nextLink property in the response to get the next page of children current health
		 * Get {resourceUri}/providers/Microsoft.ResourceHealth/childResources
		 * @param {string} resourceUri The fully qualified ID of the resource, including the resource name and resource type. Currently the API only support not nested parent resource type: /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
		 * @param {string} api_version Client Api Version.
		 * @param {string} filter The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
		 * @param {string} expand Setting $expand=recommendedactions in url query expands the recommendedactions in the response.
		 * @return {AvailabilityStatusListResult} The body contains the list of the children's current availability statuses for a single resource which contains children
		 */
		ChildResources_List(resourceUri: string, api_version: string, filter: string | null | undefined, expand: string | null | undefined): Observable<AvailabilityStatusListResult> {
			return this.http.get<AvailabilityStatusListResult>(this.baseUri + (resourceUri == null ? '' : encodeURIComponent(resourceUri)) + '/providers/Microsoft.ResourceHealth/childResources&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '', {});
		}
	}

	export enum EmergingIssues_GetIssueName { default = 'default' }

}

