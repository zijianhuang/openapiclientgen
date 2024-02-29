import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateParticipantTokenResponse {
		participantToken?: ParticipantToken;
	}
	export interface CreateParticipantTokenResponseFormProperties {
	}
	export function CreateCreateParticipantTokenResponseFormGroup() {
		return new FormGroup<CreateParticipantTokenResponseFormProperties>({
		});

	}


	/** Object specifying a participant token in a stage. */
	export interface ParticipantToken {
		attributes?: ParticipantTokenAttributes;
		capabilities?: Array<ParticipantTokenCapability>;
		duration?: number | null;
		expirationTime?: Date;
		participantId?: string;
		token?: string;
		userId?: string;
	}

	/** Object specifying a participant token in a stage. */
	export interface ParticipantTokenFormProperties {
		duration: FormControl<number | null | undefined>,
		expirationTime: FormControl<Date | null | undefined>,
		participantId: FormControl<string | null | undefined>,
		token: FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateParticipantTokenFormGroup() {
		return new FormGroup<ParticipantTokenFormProperties>({
			duration: new FormControl<number | null | undefined>(undefined),
			expirationTime: new FormControl<Date | null | undefined>(undefined),
			participantId: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ParticipantTokenAttributes {
	}
	export interface ParticipantTokenAttributesFormProperties {
	}
	export function CreateParticipantTokenAttributesFormGroup() {
		return new FormGroup<ParticipantTokenAttributesFormProperties>({
		});

	}

	export enum ParticipantTokenCapability { PUBLISH = 'PUBLISH', SUBSCRIBE = 'SUBSCRIBE' }

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface PendingVerification {
	}
	export interface PendingVerificationFormProperties {
	}
	export function CreatePendingVerificationFormGroup() {
		return new FormGroup<PendingVerificationFormProperties>({
		});

	}

	export interface CreateStageResponse {
		participantTokens?: Array<ParticipantToken>;
		stage?: Stage;
	}
	export interface CreateStageResponseFormProperties {
	}
	export function CreateCreateStageResponseFormGroup() {
		return new FormGroup<CreateStageResponseFormProperties>({
		});

	}


	/** Object specifying a stage. */
	export interface Stage {
		activeSessionId?: string;

		/** Required */
		arn: string;
		name?: string;
		tags?: Tags;
	}

	/** Object specifying a stage. */
	export interface StageFormProperties {
		activeSessionId: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateStageFormGroup() {
		return new FormGroup<StageFormProperties>({
			activeSessionId: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tags {
	}
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}


	/** Object specifying a participant token configuration in a stage. */
	export interface ParticipantTokenConfiguration {
		attributes?: ParticipantTokenAttributes;
		capabilities?: Array<ParticipantTokenCapability>;
		duration?: number | null;
		userId?: string;
	}

	/** Object specifying a participant token configuration in a stage. */
	export interface ParticipantTokenConfigurationFormProperties {
		duration: FormControl<number | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateParticipantTokenConfigurationFormGroup() {
		return new FormGroup<ParticipantTokenConfigurationFormProperties>({
			duration: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteStageResponse {
	}
	export interface DeleteStageResponseFormProperties {
	}
	export function CreateDeleteStageResponseFormGroup() {
		return new FormGroup<DeleteStageResponseFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface DisconnectParticipantResponse {
	}
	export interface DisconnectParticipantResponseFormProperties {
	}
	export function CreateDisconnectParticipantResponseFormGroup() {
		return new FormGroup<DisconnectParticipantResponseFormProperties>({
		});

	}

	export interface GetParticipantResponse {
		participant?: Participant;
	}
	export interface GetParticipantResponseFormProperties {
	}
	export function CreateGetParticipantResponseFormGroup() {
		return new FormGroup<GetParticipantResponseFormProperties>({
		});

	}


	/** Object describing a participant that has joined a stage. */
	export interface Participant {
		attributes?: ParticipantAttributes;
		firstJoinTime?: Date;
		participantId?: string;
		published?: boolean | null;
		state?: ParticipantState;
		userId?: string;
	}

	/** Object describing a participant that has joined a stage. */
	export interface ParticipantFormProperties {
		firstJoinTime: FormControl<Date | null | undefined>,
		participantId: FormControl<string | null | undefined>,
		published: FormControl<boolean | null | undefined>,
		state: FormControl<ParticipantState | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateParticipantFormGroup() {
		return new FormGroup<ParticipantFormProperties>({
			firstJoinTime: new FormControl<Date | null | undefined>(undefined),
			participantId: new FormControl<string | null | undefined>(undefined),
			published: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<ParticipantState | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ParticipantAttributes {
	}
	export interface ParticipantAttributesFormProperties {
	}
	export function CreateParticipantAttributesFormGroup() {
		return new FormGroup<ParticipantAttributesFormProperties>({
		});

	}

	export enum ParticipantState { CONNECTED = 'CONNECTED', DISCONNECTED = 'DISCONNECTED' }

	export interface GetStageResponse {
		stage?: Stage;
	}
	export interface GetStageResponseFormProperties {
	}
	export function CreateGetStageResponseFormGroup() {
		return new FormGroup<GetStageResponseFormProperties>({
		});

	}

	export interface GetStageSessionResponse {
		stageSession?: StageSession;
	}
	export interface GetStageSessionResponseFormProperties {
	}
	export function CreateGetStageSessionResponseFormGroup() {
		return new FormGroup<GetStageSessionResponseFormProperties>({
		});

	}


	/** A stage session begins when the first participant joins a stage and ends after the last participant leaves the stage. A stage session helps with debugging stages by grouping events and participants into shorter periods of time (i.e., a session), which is helpful when stages are used over long periods of time. */
	export interface StageSession {
		endTime?: Date;
		sessionId?: string;
		startTime?: Date;
	}

	/** A stage session begins when the first participant joins a stage and ends after the last participant leaves the stage. A stage session helps with debugging stages by grouping events and participants into shorter periods of time (i.e., a session), which is helpful when stages are used over long periods of time. */
	export interface StageSessionFormProperties {
		endTime: FormControl<Date | null | undefined>,
		sessionId: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateStageSessionFormGroup() {
		return new FormGroup<StageSessionFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListParticipantEventsResponse {

		/** Required */
		events: Array<Event>;
		nextToken?: string;
	}
	export interface ListParticipantEventsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListParticipantEventsResponseFormGroup() {
		return new FormGroup<ListParticipantEventsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An occurrence during a stage session. */
	export interface Event {
		errorCode?: EventErrorCode;
		eventTime?: Date;
		name?: EventName;
		participantId?: string;
		remoteParticipantId?: string;
	}

	/** An occurrence during a stage session. */
	export interface EventFormProperties {
		errorCode: FormControl<EventErrorCode | null | undefined>,
		eventTime: FormControl<Date | null | undefined>,
		name: FormControl<EventName | null | undefined>,
		participantId: FormControl<string | null | undefined>,
		remoteParticipantId: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			errorCode: new FormControl<EventErrorCode | null | undefined>(undefined),
			eventTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<EventName | null | undefined>(undefined),
			participantId: new FormControl<string | null | undefined>(undefined),
			remoteParticipantId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventErrorCode { INSUFFICIENT_CAPABILITIES = 'INSUFFICIENT_CAPABILITIES', QUOTA_EXCEEDED = 'QUOTA_EXCEEDED', PUBLISHER_NOT_FOUND = 'PUBLISHER_NOT_FOUND' }

	export enum EventName { JOINED = 'JOINED', LEFT = 'LEFT', PUBLISH_STARTED = 'PUBLISH_STARTED', PUBLISH_STOPPED = 'PUBLISH_STOPPED', SUBSCRIBE_STARTED = 'SUBSCRIBE_STARTED', SUBSCRIBE_STOPPED = 'SUBSCRIBE_STOPPED', PUBLISH_ERROR = 'PUBLISH_ERROR', SUBSCRIBE_ERROR = 'SUBSCRIBE_ERROR', JOIN_ERROR = 'JOIN_ERROR' }

	export interface ListParticipantsResponse {
		nextToken?: string;

		/** Required */
		participants: Array<ParticipantSummary>;
	}
	export interface ListParticipantsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListParticipantsResponseFormGroup() {
		return new FormGroup<ListParticipantsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary object describing a participant that has joined a stage. */
	export interface ParticipantSummary {
		firstJoinTime?: Date;
		participantId?: string;
		published?: boolean | null;
		state?: ParticipantState;
		userId?: string;
	}

	/** Summary object describing a participant that has joined a stage. */
	export interface ParticipantSummaryFormProperties {
		firstJoinTime: FormControl<Date | null | undefined>,
		participantId: FormControl<string | null | undefined>,
		published: FormControl<boolean | null | undefined>,
		state: FormControl<ParticipantState | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateParticipantSummaryFormGroup() {
		return new FormGroup<ParticipantSummaryFormProperties>({
			firstJoinTime: new FormControl<Date | null | undefined>(undefined),
			participantId: new FormControl<string | null | undefined>(undefined),
			published: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<ParticipantState | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStageSessionsResponse {
		nextToken?: string;

		/** Required */
		stageSessions: Array<StageSessionSummary>;
	}
	export interface ListStageSessionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStageSessionsResponseFormGroup() {
		return new FormGroup<ListStageSessionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a stage session. */
	export interface StageSessionSummary {
		endTime?: Date;
		sessionId?: string;
		startTime?: Date;
	}

	/** Summary information about a stage session. */
	export interface StageSessionSummaryFormProperties {
		endTime: FormControl<Date | null | undefined>,
		sessionId: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateStageSessionSummaryFormGroup() {
		return new FormGroup<StageSessionSummaryFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListStagesResponse {
		nextToken?: string;

		/** Required */
		stages: Array<StageSummary>;
	}
	export interface ListStagesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStagesResponseFormGroup() {
		return new FormGroup<ListStagesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a stage. */
	export interface StageSummary {
		activeSessionId?: string;

		/** Required */
		arn: string;
		name?: string;
		tags?: Tags;
	}

	/** Summary information about a stage. */
	export interface StageSummaryFormProperties {
		activeSessionId: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateStageSummaryFormGroup() {
		return new FormGroup<StageSummaryFormProperties>({
			activeSessionId: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {

		/** Required */
		tags: Tags;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateStageResponse {
		stage?: Stage;
	}
	export interface UpdateStageResponseFormProperties {
	}
	export function CreateUpdateStageResponseFormGroup() {
		return new FormGroup<UpdateStageResponseFormProperties>({
		});

	}

	export interface CreateParticipantTokenRequest {
		attributes?: ParticipantTokenAttributes;
		capabilities?: Array<ParticipantTokenCapability>;
		duration?: number | null;

		/** Required */
		stageArn: string;
		userId?: string;
	}
	export interface CreateParticipantTokenRequestFormProperties {
		duration: FormControl<number | null | undefined>,

		/** Required */
		stageArn: FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateCreateParticipantTokenRequestFormGroup() {
		return new FormGroup<CreateParticipantTokenRequestFormProperties>({
			duration: new FormControl<number | null | undefined>(undefined),
			stageArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateStageRequest {
		name?: string;
		participantTokenConfigurations?: Array<ParticipantTokenConfiguration>;
		tags?: Tags;
	}
	export interface CreateStageRequestFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateStageRequestFormGroup() {
		return new FormGroup<CreateStageRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteStageRequest {

		/** Required */
		arn: string;
	}
	export interface DeleteStageRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStageRequestFormGroup() {
		return new FormGroup<DeleteStageRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisconnectParticipantRequest {

		/** Required */
		participantId: string;
		reason?: string;

		/** Required */
		stageArn: string;
	}
	export interface DisconnectParticipantRequestFormProperties {

		/** Required */
		participantId: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,

		/** Required */
		stageArn: FormControl<string | null | undefined>,
	}
	export function CreateDisconnectParticipantRequestFormGroup() {
		return new FormGroup<DisconnectParticipantRequestFormProperties>({
			participantId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined),
			stageArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetParticipantRequest {

		/** Required */
		participantId: string;

		/** Required */
		sessionId: string;

		/** Required */
		stageArn: string;
	}
	export interface GetParticipantRequestFormProperties {

		/** Required */
		participantId: FormControl<string | null | undefined>,

		/** Required */
		sessionId: FormControl<string | null | undefined>,

		/** Required */
		stageArn: FormControl<string | null | undefined>,
	}
	export function CreateGetParticipantRequestFormGroup() {
		return new FormGroup<GetParticipantRequestFormProperties>({
			participantId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stageArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetStageRequest {

		/** Required */
		arn: string;
	}
	export interface GetStageRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetStageRequestFormGroup() {
		return new FormGroup<GetStageRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetStageSessionRequest {

		/** Required */
		sessionId: string;

		/** Required */
		stageArn: string;
	}
	export interface GetStageSessionRequestFormProperties {

		/** Required */
		sessionId: FormControl<string | null | undefined>,

		/** Required */
		stageArn: FormControl<string | null | undefined>,
	}
	export function CreateGetStageSessionRequestFormGroup() {
		return new FormGroup<GetStageSessionRequestFormProperties>({
			sessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stageArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListParticipantEventsRequest {
		maxResults?: number | null;
		nextToken?: string;

		/** Required */
		participantId: string;

		/** Required */
		sessionId: string;

		/** Required */
		stageArn: string;
	}
	export interface ListParticipantEventsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		participantId: FormControl<string | null | undefined>,

		/** Required */
		sessionId: FormControl<string | null | undefined>,

		/** Required */
		stageArn: FormControl<string | null | undefined>,
	}
	export function CreateListParticipantEventsRequestFormGroup() {
		return new FormGroup<ListParticipantEventsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			participantId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stageArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListParticipantsRequest {
		filterByPublished?: boolean | null;
		filterByState?: ParticipantState;
		filterByUserId?: string;
		maxResults?: number | null;
		nextToken?: string;

		/** Required */
		sessionId: string;

		/** Required */
		stageArn: string;
	}
	export interface ListParticipantsRequestFormProperties {
		filterByPublished: FormControl<boolean | null | undefined>,
		filterByState: FormControl<ParticipantState | null | undefined>,
		filterByUserId: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		sessionId: FormControl<string | null | undefined>,

		/** Required */
		stageArn: FormControl<string | null | undefined>,
	}
	export function CreateListParticipantsRequestFormGroup() {
		return new FormGroup<ListParticipantsRequestFormProperties>({
			filterByPublished: new FormControl<boolean | null | undefined>(undefined),
			filterByState: new FormControl<ParticipantState | null | undefined>(undefined),
			filterByUserId: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stageArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListStageSessionsRequest {
		maxResults?: number | null;
		nextToken?: string;

		/** Required */
		stageArn: string;
	}
	export interface ListStageSessionsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		stageArn: FormControl<string | null | undefined>,
	}
	export function CreateListStageSessionsRequestFormGroup() {
		return new FormGroup<ListStageSessionsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			stageArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListStagesRequest {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListStagesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStagesRequestFormGroup() {
		return new FormGroup<ListStagesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: Tags;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateStageRequest {

		/** Required */
		arn: string;
		name?: string;
	}
	export interface UpdateStageRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStageRequestFormGroup() {
		return new FormGroup<UpdateStageRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire. Tokens always are scoped to the stage for which they are created.</p> <p>Encryption keys are owned by Amazon IVS and never used directly by your application.</p>
		 * Post CreateParticipantToken
		 * @return {CreateParticipantTokenResponse} Success
		 */
		CreateParticipantToken(requestBody: CreateParticipantTokenPostBody): Observable<CreateParticipantTokenResponse> {
			return this.http.post<CreateParticipantTokenResponse>(this.baseUri + 'CreateParticipantToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new stage (and optionally participant tokens).
		 * Post CreateStage
		 * @return {CreateStageResponse} Success
		 */
		CreateStage(requestBody: CreateStagePostBody): Observable<CreateStageResponse> {
			return this.http.post<CreateStageResponse>(this.baseUri + 'CreateStage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Shuts down and deletes the specified stage (disconnecting all participants).
		 * Post DeleteStage
		 * @return {DeleteStageResponse} Success
		 */
		DeleteStage(requestBody: DeleteStagePostBody): Observable<DeleteStageResponse> {
			return this.http.post<DeleteStageResponse>(this.baseUri + 'DeleteStage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disconnects a specified participant and revokes the participant permanently from a specified stage.
		 * Post DisconnectParticipant
		 * @return {DisconnectParticipantResponse} Success
		 */
		DisconnectParticipant(requestBody: DisconnectParticipantPostBody): Observable<DisconnectParticipantResponse> {
			return this.http.post<DisconnectParticipantResponse>(this.baseUri + 'DisconnectParticipant', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about the specified participant token.
		 * Post GetParticipant
		 * @return {GetParticipantResponse} Success
		 */
		GetParticipant(requestBody: GetParticipantPostBody): Observable<GetParticipantResponse> {
			return this.http.post<GetParticipantResponse>(this.baseUri + 'GetParticipant', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information for the specified stage.
		 * Post GetStage
		 * @return {GetStageResponse} Success
		 */
		GetStage(requestBody: GetStagePostBody): Observable<GetStageResponse> {
			return this.http.post<GetStageResponse>(this.baseUri + 'GetStage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information for the specified stage session.
		 * Post GetStageSession
		 * @return {GetStageSessionResponse} Success
		 */
		GetStageSession(requestBody: GetStageSessionPostBody): Observable<GetStageSessionResponse> {
			return this.http.post<GetStageSessionResponse>(this.baseUri + 'GetStageSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists events for a specified participant that occurred during a specified stage session.
		 * Post ListParticipantEvents
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListParticipantEventsResponse} Success
		 */
		ListParticipantEvents(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListParticipantEventsPostBody): Observable<ListParticipantEventsResponse> {
			return this.http.post<ListParticipantEventsResponse>(this.baseUri + 'ListParticipantEvents?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all participants in a specified stage session.
		 * Post ListParticipants
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListParticipantsResponse} Success
		 */
		ListParticipants(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListParticipantsPostBody): Observable<ListParticipantsResponse> {
			return this.http.post<ListParticipantsResponse>(this.baseUri + 'ListParticipants?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all sessions for a specified stage.
		 * Post ListStageSessions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListStageSessionsResponse} Success
		 */
		ListStageSessions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListStageSessionsPostBody): Observable<ListStageSessionsResponse> {
			return this.http.post<ListStageSessionsResponse>(this.baseUri + 'ListStageSessions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets summary information about all stages in your account, in the AWS region where the API request is processed.
		 * Post ListStages
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListStagesResponse} Success
		 */
		ListStages(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListStagesPostBody): Observable<ListStagesResponse> {
			return this.http.post<ListStagesResponse>(this.baseUri + 'ListStages?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about AWS tags for the specified ARN.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource to be retrieved. The ARN must be URL-encoded.
		 *     Min length: 1    Max length: 128
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds or updates tags for the AWS resource with the specified ARN.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource to be tagged. The ARN must be URL-encoded.
		 *     Min length: 1    Max length: 128
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from the resource with the specified ARN.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The ARN of the resource to be untagged. The ARN must be URL-encoded.
		 *     Min length: 1    Max length: 128
		 * @param {Array<string>} tagKeys Array of tags to be removed. Array of maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints beyond what is documented there.
		 *     Minimum items: 0    Maximum items: 50
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates a stage’s configuration.
		 * Post UpdateStage
		 * @return {UpdateStageResponse} Success
		 */
		UpdateStage(requestBody: UpdateStagePostBody): Observable<UpdateStageResponse> {
			return this.http.post<UpdateStageResponse>(this.baseUri + 'UpdateStage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateParticipantTokenPostBody {

		/** Application-provided attributes to encode into the token and attach to a stage. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total. <i>This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.</i> */
		attributes?: {[id: string]: string };

		/**
		 * Set of capabilities that the user is allowed to perform in the stage. Default: <code>PUBLISH, SUBSCRIBE</code>.
		 * Minimum items: 0
		 * Maximum items: 2
		 */
		capabilities?: Array<ParticipantTokenCapability>;

		/**
		 * Duration (in minutes), after which the token expires. Default: 720 (12 hours).
		 * Minimum: 1
		 * Maximum: 20160
		 */
		duration?: number | null;

		/**
		 * ARN of the stage to which this token is scoped.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		stageArn: string;

		/**
		 * Name that can be specified to help identify the token. This can be any UTF-8 encoded text. <i>This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.</i>
		 * Min length: 0
		 * Max length: 128
		 */
		userId?: string | null;
	}
	export interface CreateParticipantTokenPostBodyFormProperties {

		/** Application-provided attributes to encode into the token and attach to a stage. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total. <i>This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.</i> */
		attributes: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Duration (in minutes), after which the token expires. Default: 720 (12 hours).
		 * Minimum: 1
		 * Maximum: 20160
		 */
		duration: FormControl<number | null | undefined>,

		/**
		 * ARN of the stage to which this token is scoped.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		stageArn: FormControl<string | null | undefined>,

		/**
		 * Name that can be specified to help identify the token. This can be any UTF-8 encoded text. <i>This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.</i>
		 * Min length: 0
		 * Max length: 128
		 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateCreateParticipantTokenPostBodyFormGroup() {
		return new FormGroup<CreateParticipantTokenPostBodyFormProperties>({
			attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20160)]),
			stageArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:ivs:[a-z0-9-]+:[0-9]+:stage/[a-zA-Z0-9-]+$')]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
		});

	}

	export interface CreateStagePostBody {

		/**
		 * Optional name that can be specified for the stage being created.
		 * Min length: 0
		 * Max length: 128
		 */
		name?: string | null;

		/**
		 * Array of participant token configuration objects to attach to the new stage.
		 * Minimum items: 0
		 * Maximum items: 12
		 */
		participantTokenConfigurations?: Array<ParticipantTokenConfiguration>;

		/** Tags attached to the resource. Array of maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there. */
		tags?: {[id: string]: string };
	}
	export interface CreateStagePostBodyFormProperties {

		/**
		 * Optional name that can be specified for the stage being created.
		 * Min length: 0
		 * Max length: 128
		 */
		name: FormControl<string | null | undefined>,

		/** Tags attached to the resource. Array of maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateStagePostBodyFormGroup() {
		return new FormGroup<CreateStagePostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9-_]*$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface DeleteStagePostBody {

		/**
		 * ARN of the stage to be deleted.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		arn: string;
	}
	export interface DeleteStagePostBodyFormProperties {

		/**
		 * ARN of the stage to be deleted.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStagePostBodyFormGroup() {
		return new FormGroup<DeleteStagePostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:ivs:[a-z0-9-]+:[0-9]+:stage/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface DisconnectParticipantPostBody {

		/**
		 * Identifier of the participant to be disconnected. This is assigned by IVS and returned by <a>CreateParticipantToken</a>.
		 * Required
		 */
		participantId: string;

		/**
		 * Description of why this participant is being disconnected.
		 * Min length: 0
		 * Max length: 128
		 */
		reason?: string | null;

		/**
		 * ARN of the stage to which the participant is attached.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		stageArn: string;
	}
	export interface DisconnectParticipantPostBodyFormProperties {

		/**
		 * Identifier of the participant to be disconnected. This is assigned by IVS and returned by <a>CreateParticipantToken</a>.
		 * Required
		 */
		participantId: FormControl<string | null | undefined>,

		/**
		 * Description of why this participant is being disconnected.
		 * Min length: 0
		 * Max length: 128
		 */
		reason: FormControl<string | null | undefined>,

		/**
		 * ARN of the stage to which the participant is attached.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		stageArn: FormControl<string | null | undefined>,
	}
	export function CreateDisconnectParticipantPostBodyFormGroup() {
		return new FormGroup<DisconnectParticipantPostBodyFormProperties>({
			participantId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			stageArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:ivs:[a-z0-9-]+:[0-9]+:stage/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface GetParticipantPostBody {

		/**
		 * Unique identifier for the participant. This is assigned by IVS and returned by <a>CreateParticipantToken</a>.
		 * Required
		 */
		participantId: string;

		/**
		 * ID of a session within the stage.
		 * Required
		 * Min length: 16
		 * Max length: 16
		 */
		sessionId: string;

		/**
		 * Stage ARN.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		stageArn: string;
	}
	export interface GetParticipantPostBodyFormProperties {

		/**
		 * Unique identifier for the participant. This is assigned by IVS and returned by <a>CreateParticipantToken</a>.
		 * Required
		 */
		participantId: FormControl<string | null | undefined>,

		/**
		 * ID of a session within the stage.
		 * Required
		 * Min length: 16
		 * Max length: 16
		 */
		sessionId: FormControl<string | null | undefined>,

		/**
		 * Stage ARN.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		stageArn: FormControl<string | null | undefined>,
	}
	export function CreateGetParticipantPostBodyFormGroup() {
		return new FormGroup<GetParticipantPostBodyFormProperties>({
			participantId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sessionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^st-[a-zA-Z0-9]+$')]),
			stageArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:ivs:[a-z0-9-]+:[0-9]+:stage/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface GetStagePostBody {

		/**
		 * ARN of the stage for which the information is to be retrieved.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		arn: string;
	}
	export interface GetStagePostBodyFormProperties {

		/**
		 * ARN of the stage for which the information is to be retrieved.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetStagePostBodyFormGroup() {
		return new FormGroup<GetStagePostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:ivs:[a-z0-9-]+:[0-9]+:stage/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface GetStageSessionPostBody {

		/**
		 * ID of a session within the stage.
		 * Required
		 * Min length: 16
		 * Max length: 16
		 */
		sessionId: string;

		/**
		 * ARN of the stage for which the information is to be retrieved.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		stageArn: string;
	}
	export interface GetStageSessionPostBodyFormProperties {

		/**
		 * ID of a session within the stage.
		 * Required
		 * Min length: 16
		 * Max length: 16
		 */
		sessionId: FormControl<string | null | undefined>,

		/**
		 * ARN of the stage for which the information is to be retrieved.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		stageArn: FormControl<string | null | undefined>,
	}
	export function CreateGetStageSessionPostBodyFormGroup() {
		return new FormGroup<GetStageSessionPostBodyFormProperties>({
			sessionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^st-[a-zA-Z0-9]+$')]),
			stageArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:ivs:[a-z0-9-]+:[0-9]+:stage/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface ListParticipantEventsPostBody {

		/**
		 * Maximum number of results to return. Default: 50.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * The first participant to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Min length: 0
		 * Max length: 1024
		 */
		nextToken?: string | null;

		/**
		 * Unique identifier for this participant. This is assigned by IVS and returned by <a>CreateParticipantToken</a>.
		 * Required
		 */
		participantId: string;

		/**
		 * ID of a session within the stage.
		 * Required
		 * Min length: 16
		 * Max length: 16
		 */
		sessionId: string;

		/**
		 * Stage ARN.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		stageArn: string;
	}
	export interface ListParticipantEventsPostBodyFormProperties {

		/**
		 * Maximum number of results to return. Default: 50.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The first participant to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Min length: 0
		 * Max length: 1024
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for this participant. This is assigned by IVS and returned by <a>CreateParticipantToken</a>.
		 * Required
		 */
		participantId: FormControl<string | null | undefined>,

		/**
		 * ID of a session within the stage.
		 * Required
		 * Min length: 16
		 * Max length: 16
		 */
		sessionId: FormControl<string | null | undefined>,

		/**
		 * Stage ARN.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		stageArn: FormControl<string | null | undefined>,
	}
	export function CreateListParticipantEventsPostBodyFormGroup() {
		return new FormGroup<ListParticipantEventsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('^[a-zA-Z0-9+/=_-]*$')]),
			participantId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sessionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^st-[a-zA-Z0-9]+$')]),
			stageArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:ivs:[a-z0-9-]+:[0-9]+:stage/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface ListParticipantsPostBody {

		/** Filters the response list to only show participants who published during the stage session. Only one of <code>filterByUserId</code>, <code>filterByPublished</code>, or <code>filterByState</code> can be provided per request. */
		filterByPublished?: boolean | null;

		/** Filters the response list to only show participants in the specified state. Only one of <code>filterByUserId</code>, <code>filterByPublished</code>, or <code>filterByState</code> can be provided per request. */
		filterByState?: ParticipantState | null;

		/**
		 * Filters the response list to match the specified user ID. Only one of <code>filterByUserId</code>, <code>filterByPublished</code>, or <code>filterByState</code> can be provided per request. A <code>userId</code> is a customer-assigned name to help identify the token; this can be used to link a participant to a user in the customer’s own systems.
		 * Min length: 0
		 * Max length: 128
		 */
		filterByUserId?: string | null;

		/**
		 * Maximum number of results to return. Default: 50.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * The first participant to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Min length: 0
		 * Max length: 1024
		 */
		nextToken?: string | null;

		/**
		 * ID of the session within the stage.
		 * Required
		 * Min length: 16
		 * Max length: 16
		 */
		sessionId: string;

		/**
		 * Stage ARN.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		stageArn: string;
	}
	export interface ListParticipantsPostBodyFormProperties {

		/** Filters the response list to only show participants who published during the stage session. Only one of <code>filterByUserId</code>, <code>filterByPublished</code>, or <code>filterByState</code> can be provided per request. */
		filterByPublished: FormControl<boolean | null | undefined>,

		/** Filters the response list to only show participants in the specified state. Only one of <code>filterByUserId</code>, <code>filterByPublished</code>, or <code>filterByState</code> can be provided per request. */
		filterByState: FormControl<ParticipantState | null | undefined>,

		/**
		 * Filters the response list to match the specified user ID. Only one of <code>filterByUserId</code>, <code>filterByPublished</code>, or <code>filterByState</code> can be provided per request. A <code>userId</code> is a customer-assigned name to help identify the token; this can be used to link a participant to a user in the customer’s own systems.
		 * Min length: 0
		 * Max length: 128
		 */
		filterByUserId: FormControl<string | null | undefined>,

		/**
		 * Maximum number of results to return. Default: 50.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The first participant to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Min length: 0
		 * Max length: 1024
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * ID of the session within the stage.
		 * Required
		 * Min length: 16
		 * Max length: 16
		 */
		sessionId: FormControl<string | null | undefined>,

		/**
		 * Stage ARN.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		stageArn: FormControl<string | null | undefined>,
	}
	export function CreateListParticipantsPostBodyFormGroup() {
		return new FormGroup<ListParticipantsPostBodyFormProperties>({
			filterByPublished: new FormControl<boolean | null | undefined>(undefined),
			filterByState: new FormControl<ParticipantState | null | undefined>(undefined),
			filterByUserId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('^[a-zA-Z0-9+/=_-]*$')]),
			sessionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^st-[a-zA-Z0-9]+$')]),
			stageArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:ivs:[a-z0-9-]+:[0-9]+:stage/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface ListStageSessionsPostBody {

		/**
		 * Maximum number of results to return. Default: 50.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * The first stage to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Min length: 0
		 * Max length: 1024
		 */
		nextToken?: string | null;

		/**
		 * Stage ARN.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		stageArn: string;
	}
	export interface ListStageSessionsPostBodyFormProperties {

		/**
		 * Maximum number of results to return. Default: 50.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The first stage to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Min length: 0
		 * Max length: 1024
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Stage ARN.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		stageArn: FormControl<string | null | undefined>,
	}
	export function CreateListStageSessionsPostBodyFormGroup() {
		return new FormGroup<ListStageSessionsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('^[a-zA-Z0-9+/=_-]*$')]),
			stageArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:ivs:[a-z0-9-]+:[0-9]+:stage/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface ListStagesPostBody {

		/**
		 * Maximum number of results to return. Default: 50.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * The first stage to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Min length: 0
		 * Max length: 1024
		 */
		nextToken?: string | null;
	}
	export interface ListStagesPostBodyFormProperties {

		/**
		 * Maximum number of results to return. Default: 50.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The first stage to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Min length: 0
		 * Max length: 1024
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStagesPostBodyFormGroup() {
		return new FormGroup<ListStagesPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('^[a-zA-Z0-9+/=_-]*$')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * Array of tags to be added or updated. Array of maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints beyond what is documented there.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * Array of tags to be added or updated. Array of maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints beyond what is documented there.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateStagePostBody {

		/**
		 * ARN of the stage to be updated.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		arn: string;

		/**
		 * Name of the stage to be updated.
		 * Min length: 0
		 * Max length: 128
		 */
		name?: string | null;
	}
	export interface UpdateStagePostBodyFormProperties {

		/**
		 * ARN of the stage to be updated.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Name of the stage to be updated.
		 * Min length: 0
		 * Max length: 128
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStagePostBodyFormGroup() {
		return new FormGroup<UpdateStagePostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:ivs:[a-z0-9-]+:[0-9]+:stage/[a-zA-Z0-9-]+$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9-_]*$')]),
		});

	}

}

