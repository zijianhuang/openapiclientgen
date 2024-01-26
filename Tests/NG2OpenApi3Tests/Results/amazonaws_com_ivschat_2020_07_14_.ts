import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateChatTokenResponse {
		sessionExpirationTime?: Date;
		token?: string;
		tokenExpirationTime?: Date;
	}
	export interface CreateChatTokenResponseFormProperties {
		sessionExpirationTime: FormControl<Date | null | undefined>,
		token: FormControl<string | null | undefined>,
		tokenExpirationTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateChatTokenResponseFormGroup() {
		return new FormGroup<CreateChatTokenResponseFormProperties>({
			sessionExpirationTime: new FormControl<Date | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			tokenExpirationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ChatTokenCapability { SEND_MESSAGE = 0, DISCONNECT_USER = 1, DELETE_MESSAGE = 2 }

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface CreateLoggingConfigurationResponse {
		arn?: string;
		createTime?: Date;
		destinationConfiguration?: DestinationConfiguration;
		id?: string;
		name?: string;
		state?: CreateLoggingConfigurationState;
		tags?: Tags;
		updateTime?: Date;
	}
	export interface CreateLoggingConfigurationResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		createTime: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		state: FormControl<CreateLoggingConfigurationState | null | undefined>,
		updateTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateLoggingConfigurationResponseFormGroup() {
		return new FormGroup<CreateLoggingConfigurationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<CreateLoggingConfigurationState | null | undefined>(undefined),
			updateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A complex type that describes a location where chat logs will be stored. Each member represents the configuration of one log destination. For logging, you define only one type of destination (for CloudWatch Logs, Kinesis Firehose, or S3). */
	export interface DestinationConfiguration {
		cloudWatchLogs?: CloudWatchLogsDestinationConfiguration;
		firehose?: FirehoseDestinationConfiguration;
		s3?: S3DestinationConfiguration;
	}

	/** A complex type that describes a location where chat logs will be stored. Each member represents the configuration of one log destination. For logging, you define only one type of destination (for CloudWatch Logs, Kinesis Firehose, or S3). */
	export interface DestinationConfigurationFormProperties {
	}
	export function CreateDestinationConfigurationFormGroup() {
		return new FormGroup<DestinationConfigurationFormProperties>({
		});

	}


	/** Specifies a CloudWatch Logs location where chat logs will be stored. */
	export interface CloudWatchLogsDestinationConfiguration {

		/** Required */
		logGroupName: string;
	}

	/** Specifies a CloudWatch Logs location where chat logs will be stored. */
	export interface CloudWatchLogsDestinationConfigurationFormProperties {

		/** Required */
		logGroupName: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLogsDestinationConfigurationFormGroup() {
		return new FormGroup<CloudWatchLogsDestinationConfigurationFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a Kinesis Firehose location where chat logs will be stored. */
	export interface FirehoseDestinationConfiguration {

		/** Required */
		deliveryStreamName: string;
	}

	/** Specifies a Kinesis Firehose location where chat logs will be stored. */
	export interface FirehoseDestinationConfigurationFormProperties {

		/** Required */
		deliveryStreamName: FormControl<string | null | undefined>,
	}
	export function CreateFirehoseDestinationConfigurationFormGroup() {
		return new FormGroup<FirehoseDestinationConfigurationFormProperties>({
			deliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies an S3 location where chat logs will be stored. */
	export interface S3DestinationConfiguration {

		/** Required */
		bucketName: string;
	}

	/** Specifies an S3 location where chat logs will be stored. */
	export interface S3DestinationConfigurationFormProperties {

		/** Required */
		bucketName: FormControl<string | null | undefined>,
	}
	export function CreateS3DestinationConfigurationFormGroup() {
		return new FormGroup<S3DestinationConfigurationFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateLoggingConfigurationState { ACTIVE = 0 }

	export interface Tags {
	}
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface CreateRoomResponse {
		arn?: string;
		createTime?: Date;
		id?: string;
		loggingConfigurationIdentifiers?: Array<string>;
		maximumMessageLength?: number | null;
		maximumMessageRatePerSecond?: number | null;
		messageReviewHandler?: MessageReviewHandler;
		name?: string;
		tags?: Tags;
		updateTime?: Date;
	}
	export interface CreateRoomResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		createTime: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		maximumMessageLength: FormControl<number | null | undefined>,
		maximumMessageRatePerSecond: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		updateTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateRoomResponseFormGroup() {
		return new FormGroup<CreateRoomResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			maximumMessageLength: new FormControl<number | null | undefined>(undefined),
			maximumMessageRatePerSecond: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Configuration information for optional message review. */
	export interface MessageReviewHandler {
		fallbackResult?: FallbackResult;
		uri?: string;
	}

	/** Configuration information for optional message review. */
	export interface MessageReviewHandlerFormProperties {
		fallbackResult: FormControl<FallbackResult | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateMessageReviewHandlerFormGroup() {
		return new FormGroup<MessageReviewHandlerFormProperties>({
			fallbackResult: new FormControl<FallbackResult | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FallbackResult { ALLOW = 0, DENY = 1 }

	export interface DeleteMessageResponse {
		id?: string;
	}
	export interface DeleteMessageResponseFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMessageResponseFormGroup() {
		return new FormGroup<DeleteMessageResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface DisconnectUserResponse {
	}
	export interface DisconnectUserResponseFormProperties {
	}
	export function CreateDisconnectUserResponseFormGroup() {
		return new FormGroup<DisconnectUserResponseFormProperties>({
		});

	}

	export interface GetLoggingConfigurationResponse {
		arn?: string;
		createTime?: Date;
		destinationConfiguration?: DestinationConfiguration;
		id?: string;
		name?: string;
		state?: LoggingConfigurationState;
		tags?: Tags;
		updateTime?: Date;
	}
	export interface GetLoggingConfigurationResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		createTime: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		state: FormControl<LoggingConfigurationState | null | undefined>,
		updateTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetLoggingConfigurationResponseFormGroup() {
		return new FormGroup<GetLoggingConfigurationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<LoggingConfigurationState | null | undefined>(undefined),
			updateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum LoggingConfigurationState { CREATING = 0, CREATE_FAILED = 1, DELETING = 2, DELETE_FAILED = 3, UPDATING = 4, UPDATE_FAILED = 5, ACTIVE = 6 }

	export interface GetRoomResponse {
		arn?: string;
		createTime?: Date;
		id?: string;
		loggingConfigurationIdentifiers?: Array<string>;
		maximumMessageLength?: number | null;
		maximumMessageRatePerSecond?: number | null;
		messageReviewHandler?: MessageReviewHandler;
		name?: string;
		tags?: Tags;
		updateTime?: Date;
	}
	export interface GetRoomResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		createTime: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		maximumMessageLength: FormControl<number | null | undefined>,
		maximumMessageRatePerSecond: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		updateTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetRoomResponseFormGroup() {
		return new FormGroup<GetRoomResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			maximumMessageLength: new FormControl<number | null | undefined>(undefined),
			maximumMessageRatePerSecond: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListLoggingConfigurationsResponse {

		/** Required */
		loggingConfigurations: Array<LoggingConfigurationSummary>;
		nextToken?: string;
	}
	export interface ListLoggingConfigurationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLoggingConfigurationsResponseFormGroup() {
		return new FormGroup<ListLoggingConfigurationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a logging configuration. */
	export interface LoggingConfigurationSummary {
		arn?: string;
		createTime?: Date;
		destinationConfiguration?: DestinationConfiguration;
		id?: string;
		name?: string;
		state?: LoggingConfigurationState;
		tags?: Tags;
		updateTime?: Date;
	}

	/** Summary information about a logging configuration. */
	export interface LoggingConfigurationSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		createTime: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		state: FormControl<LoggingConfigurationState | null | undefined>,
		updateTime: FormControl<Date | null | undefined>,
	}
	export function CreateLoggingConfigurationSummaryFormGroup() {
		return new FormGroup<LoggingConfigurationSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<LoggingConfigurationState | null | undefined>(undefined),
			updateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListRoomsResponse {
		nextToken?: string;

		/** Required */
		rooms: Array<RoomSummary>;
	}
	export interface ListRoomsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRoomsResponseFormGroup() {
		return new FormGroup<ListRoomsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a room. */
	export interface RoomSummary {
		arn?: string;
		createTime?: Date;
		id?: string;
		loggingConfigurationIdentifiers?: Array<string>;
		messageReviewHandler?: MessageReviewHandler;
		name?: string;
		tags?: Tags;
		updateTime?: Date;
	}

	/** Summary information about a room. */
	export interface RoomSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		createTime: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		updateTime: FormControl<Date | null | undefined>,
	}
	export function CreateRoomSummaryFormGroup() {
		return new FormGroup<RoomSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<Date | null | undefined>(undefined),
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

	export interface SendEventResponse {
		id?: string;
	}
	export interface SendEventResponseFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateSendEventResponseFormGroup() {
		return new FormGroup<SendEventResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
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

	export interface UpdateLoggingConfigurationResponse {
		arn?: string;
		createTime?: Date;
		destinationConfiguration?: DestinationConfiguration;
		id?: string;
		name?: string;
		state?: CreateLoggingConfigurationState;
		tags?: Tags;
		updateTime?: Date;
	}
	export interface UpdateLoggingConfigurationResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		createTime: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		state: FormControl<CreateLoggingConfigurationState | null | undefined>,
		updateTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateLoggingConfigurationResponseFormGroup() {
		return new FormGroup<UpdateLoggingConfigurationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<CreateLoggingConfigurationState | null | undefined>(undefined),
			updateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateRoomResponse {
		arn?: string;
		createTime?: Date;
		id?: string;
		loggingConfigurationIdentifiers?: Array<string>;
		maximumMessageLength?: number | null;
		maximumMessageRatePerSecond?: number | null;
		messageReviewHandler?: MessageReviewHandler;
		name?: string;
		tags?: Tags;
		updateTime?: Date;
	}
	export interface UpdateRoomResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		createTime: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		maximumMessageLength: FormControl<number | null | undefined>,
		maximumMessageRatePerSecond: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		updateTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateRoomResponseFormGroup() {
		return new FormGroup<UpdateRoomResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			maximumMessageLength: new FormControl<number | null | undefined>(undefined),
			maximumMessageRatePerSecond: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ChatTokenAttributes {
	}
	export interface ChatTokenAttributesFormProperties {
	}
	export function CreateChatTokenAttributesFormGroup() {
		return new FormGroup<ChatTokenAttributesFormProperties>({
		});

	}

	export interface CreateChatTokenRequest {
		attributes?: ChatTokenAttributes;
		capabilities?: Array<ChatTokenCapability>;

		/** Required */
		roomIdentifier: string;
		sessionDurationInMinutes?: number | null;

		/** Required */
		userId: string;
	}
	export interface CreateChatTokenRequestFormProperties {

		/** Required */
		roomIdentifier: FormControl<string | null | undefined>,
		sessionDurationInMinutes: FormControl<number | null | undefined>,

		/** Required */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateCreateChatTokenRequestFormGroup() {
		return new FormGroup<CreateChatTokenRequestFormProperties>({
			roomIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sessionDurationInMinutes: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateLoggingConfigurationRequest {

		/** Required */
		destinationConfiguration: DestinationConfiguration;
		name?: string;
		tags?: Tags;
	}
	export interface CreateLoggingConfigurationRequestFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateLoggingConfigurationRequestFormGroup() {
		return new FormGroup<CreateLoggingConfigurationRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRoomRequest {
		loggingConfigurationIdentifiers?: Array<string>;
		maximumMessageLength?: number | null;
		maximumMessageRatePerSecond?: number | null;
		messageReviewHandler?: MessageReviewHandler;
		name?: string;
		tags?: Tags;
	}
	export interface CreateRoomRequestFormProperties {
		maximumMessageLength: FormControl<number | null | undefined>,
		maximumMessageRatePerSecond: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateRoomRequestFormGroup() {
		return new FormGroup<CreateRoomRequestFormProperties>({
			maximumMessageLength: new FormControl<number | null | undefined>(undefined),
			maximumMessageRatePerSecond: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteLoggingConfigurationRequest {

		/** Required */
		identifier: string;
	}
	export interface DeleteLoggingConfigurationRequestFormProperties {

		/** Required */
		identifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLoggingConfigurationRequestFormGroup() {
		return new FormGroup<DeleteLoggingConfigurationRequestFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteMessageRequest {

		/** Required */
		id: string;
		reason?: string;

		/** Required */
		roomIdentifier: string;
	}
	export interface DeleteMessageRequestFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,

		/** Required */
		roomIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMessageRequestFormGroup() {
		return new FormGroup<DeleteMessageRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined),
			roomIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRoomRequest {

		/** Required */
		identifier: string;
	}
	export interface DeleteRoomRequestFormProperties {

		/** Required */
		identifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRoomRequestFormGroup() {
		return new FormGroup<DeleteRoomRequestFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisconnectUserRequest {
		reason?: string;

		/** Required */
		roomIdentifier: string;

		/** Required */
		userId: string;
	}
	export interface DisconnectUserRequestFormProperties {
		reason: FormControl<string | null | undefined>,

		/** Required */
		roomIdentifier: FormControl<string | null | undefined>,

		/** Required */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateDisconnectUserRequestFormGroup() {
		return new FormGroup<DisconnectUserRequestFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
			roomIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EventAttributes {
	}
	export interface EventAttributesFormProperties {
	}
	export function CreateEventAttributesFormGroup() {
		return new FormGroup<EventAttributesFormProperties>({
		});

	}

	export interface GetLoggingConfigurationRequest {

		/** Required */
		identifier: string;
	}
	export interface GetLoggingConfigurationRequestFormProperties {

		/** Required */
		identifier: FormControl<string | null | undefined>,
	}
	export function CreateGetLoggingConfigurationRequestFormGroup() {
		return new FormGroup<GetLoggingConfigurationRequestFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRoomRequest {

		/** Required */
		identifier: string;
	}
	export interface GetRoomRequestFormProperties {

		/** Required */
		identifier: FormControl<string | null | undefined>,
	}
	export function CreateGetRoomRequestFormGroup() {
		return new FormGroup<GetRoomRequestFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListLoggingConfigurationsRequest {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListLoggingConfigurationsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLoggingConfigurationsRequestFormGroup() {
		return new FormGroup<ListLoggingConfigurationsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRoomsRequest {
		loggingConfigurationIdentifier?: string;
		maxResults?: number | null;
		messageReviewHandlerUri?: string;
		name?: string;
		nextToken?: string;
	}
	export interface ListRoomsRequestFormProperties {
		loggingConfigurationIdentifier: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		messageReviewHandlerUri: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRoomsRequestFormGroup() {
		return new FormGroup<ListRoomsRequestFormProperties>({
			loggingConfigurationIdentifier: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			messageReviewHandlerUri: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
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

	export interface SendEventRequest {
		attributes?: EventAttributes;

		/** Required */
		eventName: string;

		/** Required */
		roomIdentifier: string;
	}
	export interface SendEventRequestFormProperties {

		/** Required */
		eventName: FormControl<string | null | undefined>,

		/** Required */
		roomIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateSendEventRequestFormGroup() {
		return new FormGroup<SendEventRequestFormProperties>({
			eventName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roomIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UpdateLoggingConfigurationRequest {
		destinationConfiguration?: DestinationConfiguration;

		/** Required */
		identifier: string;
		name?: string;
	}
	export interface UpdateLoggingConfigurationRequestFormProperties {

		/** Required */
		identifier: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLoggingConfigurationRequestFormGroup() {
		return new FormGroup<UpdateLoggingConfigurationRequestFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateLoggingConfigurationState { ACTIVE = 0 }

	export interface UpdateRoomRequest {

		/** Required */
		identifier: string;
		loggingConfigurationIdentifiers?: Array<string>;
		maximumMessageLength?: number | null;
		maximumMessageRatePerSecond?: number | null;
		messageReviewHandler?: MessageReviewHandler;
		name?: string;
	}
	export interface UpdateRoomRequestFormProperties {

		/** Required */
		identifier: FormControl<string | null | undefined>,
		maximumMessageLength: FormControl<number | null | undefined>,
		maximumMessageRatePerSecond: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRoomRequestFormGroup() {
		return new FormGroup<UpdateRoomRequestFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maximumMessageLength: new FormControl<number | null | undefined>(undefined),
			maximumMessageRatePerSecond: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates an encrypted token that is used by a chat participant to establish an individual WebSocket chat connection to a room. When the token is used to connect to chat, the connection is valid for the session duration specified in the request. The token becomes invalid at the token-expiration timestamp included in the response.</p> <p>Use the <code>capabilities</code> field to permit an end user to send messages or moderate a room.</p> <p>The <code>attributes</code> field securely attaches structured data to the chat session; the data is included within each message sent by the end user and received by other participants in the room. Common use cases for attributes include passing end-user profile data like an icon, display name, colors, badges, and other display features.</p> <p>Encryption keys are owned by Amazon IVS Chat and never used directly by your application.</p>
		 * Post CreateChatToken
		 * @return {CreateChatTokenResponse} Success
		 */
		CreateChatToken(requestBody: CreateChatTokenPostBody): Observable<CreateChatTokenResponse> {
			return this.http.post<CreateChatTokenResponse>(this.baseUri + 'CreateChatToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a logging configuration that allows clients to store and record sent messages.
		 * Post CreateLoggingConfiguration
		 * @return {CreateLoggingConfigurationResponse} Success
		 */
		CreateLoggingConfiguration(requestBody: CreateLoggingConfigurationPostBody): Observable<CreateLoggingConfigurationResponse> {
			return this.http.post<CreateLoggingConfigurationResponse>(this.baseUri + 'CreateLoggingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a room that allows clients to connect and pass messages.
		 * Post CreateRoom
		 * @return {CreateRoomResponse} Success
		 */
		CreateRoom(requestBody: CreateRoomPostBody): Observable<CreateRoomResponse> {
			return this.http.post<CreateRoomResponse>(this.baseUri + 'CreateRoom', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified logging configuration.
		 * Post DeleteLoggingConfiguration
		 * @return {void} 
		 */
		DeleteLoggingConfiguration(requestBody: DeleteLoggingConfigurationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'DeleteLoggingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sends an event to a specific room which directs clients to delete a specific message; that is, unrender it from view and delete it from the client’s chat history. This event’s <code>EventName</code> is <code>aws:DELETE_MESSAGE</code>. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-deletemessage-publish.html"> DeleteMessage</a> WebSocket operation in the Amazon IVS Chat Messaging API.
		 * Post DeleteMessage
		 * @return {DeleteMessageResponse} Success
		 */
		DeleteMessage(requestBody: DeleteMessagePostBody): Observable<DeleteMessageResponse> {
			return this.http.post<DeleteMessageResponse>(this.baseUri + 'DeleteMessage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified room.
		 * Post DeleteRoom
		 * @return {void} 
		 */
		DeleteRoom(requestBody: DeleteRoomPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'DeleteRoom', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disconnects all connections using a specified user ID from a room. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-disconnectuser-publish.html"> DisconnectUser</a> WebSocket operation in the Amazon IVS Chat Messaging API.
		 * Post DisconnectUser
		 * @return {DisconnectUserResponse} Success
		 */
		DisconnectUser(requestBody: DisconnectUserPostBody): Observable<DisconnectUserResponse> {
			return this.http.post<DisconnectUserResponse>(this.baseUri + 'DisconnectUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the specified logging configuration.
		 * Post GetLoggingConfiguration
		 * @return {GetLoggingConfigurationResponse} Success
		 */
		GetLoggingConfiguration(requestBody: GetLoggingConfigurationPostBody): Observable<GetLoggingConfigurationResponse> {
			return this.http.post<GetLoggingConfigurationResponse>(this.baseUri + 'GetLoggingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the specified room.
		 * Post GetRoom
		 * @return {GetRoomResponse} Success
		 */
		GetRoom(requestBody: GetRoomPostBody): Observable<GetRoomResponse> {
			return this.http.post<GetRoomResponse>(this.baseUri + 'GetRoom', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets summary information about all your logging configurations in the AWS region where the API request is processed.
		 * Post ListLoggingConfigurations
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListLoggingConfigurationsResponse} Success
		 */
		ListLoggingConfigurations(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListLoggingConfigurationsPostBody): Observable<ListLoggingConfigurationsResponse> {
			return this.http.post<ListLoggingConfigurationsResponse>(this.baseUri + 'ListLoggingConfigurations?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets summary information about all your rooms in the AWS region where the API request is processed. Results are sorted in descending order of <code>updateTime</code>.
		 * Post ListRooms
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListRoomsResponse} Success
		 */
		ListRooms(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListRoomsPostBody): Observable<ListRoomsResponse> {
			return this.http.post<ListRoomsResponse>(this.baseUri + 'ListRooms?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about AWS tags for the specified ARN.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource to be retrieved. The ARN must be URL-encoded.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds or updates tags for the AWS resource with the specified ARN.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource to be tagged. The ARN must be URL-encoded.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sends an event to a room. Use this within your application’s business logic to send events to clients of a room; e.g., to notify clients to change the way the chat UI is rendered.
		 * Post SendEvent
		 * @return {SendEventResponse} Success
		 */
		SendEvent(requestBody: SendEventPostBody): Observable<SendEventResponse> {
			return this.http.post<SendEventResponse>(this.baseUri + 'SendEvent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from the resource with the specified ARN.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The ARN of the resource to be untagged. The ARN must be URL-encoded.
		 * @param {Array<string>} tagKeys Array of tags to be removed. Array of maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints beyond what is documented there.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates a specified logging configuration.
		 * Post UpdateLoggingConfiguration
		 * @return {UpdateLoggingConfigurationResponse} Success
		 */
		UpdateLoggingConfiguration(requestBody: UpdateLoggingConfigurationPostBody): Observable<UpdateLoggingConfigurationResponse> {
			return this.http.post<UpdateLoggingConfigurationResponse>(this.baseUri + 'UpdateLoggingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a room’s configuration.
		 * Post UpdateRoom
		 * @return {UpdateRoomResponse} Success
		 */
		UpdateRoom(requestBody: UpdateRoomPostBody): Observable<UpdateRoomResponse> {
			return this.http.post<UpdateRoomResponse>(this.baseUri + 'UpdateRoom', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateChatTokenPostBody {

		/** Application-provided attributes to encode into the token and attach to a chat session. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total. */
		attributes?: {[id: string]: string };

		/** Set of capabilities that the user is allowed to perform in the room. Default: None (the capability to view messages is implicitly included in all requests). */
		capabilities?: Array<ChatTokenCapability>;

		/**
		 * Identifier of the room that the client is trying to access. Currently this must be an ARN.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		roomIdentifier: string;

		/**
		 * Session duration (in minutes), after which the session expires. Default: 60 (1 hour).
		 * Minimum: 1
		 * Maximum: 180
		 */
		sessionDurationInMinutes?: number | null;

		/**
		 * Application-provided ID that uniquely identifies the user associated with this token. This can be any UTF-8 encoded text.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		userId: string;
	}
	export interface CreateChatTokenPostBodyFormProperties {

		/** Application-provided attributes to encode into the token and attach to a chat session. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total. */
		attributes: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Identifier of the room that the client is trying to access. Currently this must be an ARN.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		roomIdentifier: FormControl<string | null | undefined>,

		/**
		 * Session duration (in minutes), after which the session expires. Default: 60 (1 hour).
		 * Minimum: 1
		 * Maximum: 180
		 */
		sessionDurationInMinutes: FormControl<number | null | undefined>,

		/**
		 * Application-provided ID that uniquely identifies the user associated with this token. This can be any UTF-8 encoded text.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateCreateChatTokenPostBodyFormGroup() {
		return new FormGroup<CreateChatTokenPostBodyFormProperties>({
			attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			roomIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:ivschat:[a-z0-9-]+:[0-9]+:room/[a-zA-Z0-9-]+$')]),
			sessionDurationInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(180)]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export interface CreateLoggingConfigurationPostBody {

		/**
		 * A complex type that describes a location where chat logs will be stored. Each member represents the configuration of one log destination. For logging, you define only one type of destination (for CloudWatch Logs, Kinesis Firehose, or S3).
		 * Required
		 */
		destinationConfiguration: CreateLoggingConfigurationPostBodyDestinationConfiguration;

		/**
		 * Logging-configuration name. The value does not need to be unique.
		 * Max length: 128
		 * Min length: 0
		 */
		name?: string | null;

		/** Tags to attach to the resource. Array of maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints on tags beyond what is documented there. */
		tags?: {[id: string]: string };
	}
	export interface CreateLoggingConfigurationPostBodyFormProperties {

		/**
		 * Logging-configuration name. The value does not need to be unique.
		 * Max length: 128
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/** Tags to attach to the resource. Array of maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints on tags beyond what is documented there. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateLoggingConfigurationPostBodyFormGroup() {
		return new FormGroup<CreateLoggingConfigurationPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9-_]*$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateLoggingConfigurationPostBodyDestinationConfiguration {
		cloudWatchLogs?: CloudWatchLogsDestinationConfiguration;
		firehose?: FirehoseDestinationConfiguration;
		s3?: S3DestinationConfiguration;
	}
	export interface CreateLoggingConfigurationPostBodyDestinationConfigurationFormProperties {
	}
	export function CreateCreateLoggingConfigurationPostBodyDestinationConfigurationFormGroup() {
		return new FormGroup<CreateLoggingConfigurationPostBodyDestinationConfigurationFormProperties>({
		});

	}

	export interface CreateRoomPostBody {

		/**
		 * Array of logging-configuration identifiers attached to the room.
		 * Minimum items: 0
		 * Maximum items: 3
		 */
		loggingConfigurationIdentifiers?: Array<string>;

		/**
		 * Maximum number of characters in a single message. Messages are expected to be UTF-8 encoded and this limit applies specifically to rune/code-point count, not number of bytes. Default: 500.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maximumMessageLength?: number | null;

		/**
		 * Maximum number of messages per second that can be sent to the room (by all clients). Default: 10.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maximumMessageRatePerSecond?: number | null;

		/** Configuration information for optional message review. */
		messageReviewHandler?: CreateRoomPostBodyMessageReviewHandler;

		/**
		 * Room name. The value does not need to be unique.
		 * Max length: 128
		 * Min length: 0
		 */
		name?: string | null;

		/** Tags to attach to the resource. Array of maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints beyond what is documented there. */
		tags?: {[id: string]: string };
	}
	export interface CreateRoomPostBodyFormProperties {

		/**
		 * Maximum number of characters in a single message. Messages are expected to be UTF-8 encoded and this limit applies specifically to rune/code-point count, not number of bytes. Default: 500.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maximumMessageLength: FormControl<number | null | undefined>,

		/**
		 * Maximum number of messages per second that can be sent to the room (by all clients). Default: 10.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maximumMessageRatePerSecond: FormControl<number | null | undefined>,

		/**
		 * Room name. The value does not need to be unique.
		 * Max length: 128
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/** Tags to attach to the resource. Array of maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints beyond what is documented there. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateRoomPostBodyFormGroup() {
		return new FormGroup<CreateRoomPostBodyFormProperties>({
			maximumMessageLength: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
			maximumMessageRatePerSecond: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9-_]*$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateRoomPostBodyMessageReviewHandler {
		fallbackResult?: FallbackResult;
		uri?: string;
	}
	export interface CreateRoomPostBodyMessageReviewHandlerFormProperties {
		fallbackResult: FormControl<FallbackResult | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCreateRoomPostBodyMessageReviewHandlerFormGroup() {
		return new FormGroup<CreateRoomPostBodyMessageReviewHandlerFormProperties>({
			fallbackResult: new FormControl<FallbackResult | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteLoggingConfigurationPostBody {

		/**
		 * Identifier of the logging configuration to be deleted.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		identifier: string;
	}
	export interface DeleteLoggingConfigurationPostBodyFormProperties {

		/**
		 * Identifier of the logging configuration to be deleted.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		identifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLoggingConfigurationPostBodyFormGroup() {
		return new FormGroup<DeleteLoggingConfigurationPostBodyFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:ivschat:[a-z0-9-]+:[0-9]+:logging-configuration/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface DeleteMessagePostBody {

		/**
		 * ID of the message to be deleted. This is the <code>Id</code> field in the received message (see <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-message-subscribe.html"> Message (Subscribe)</a> in the Chat Messaging API).
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		id: string;

		/**
		 * Reason for deleting the message.
		 * Max length: 256
		 * Min length: 1
		 */
		reason?: string | null;

		/**
		 * Identifier of the room where the message should be deleted. Currently this must be an ARN.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		roomIdentifier: string;
	}
	export interface DeleteMessagePostBodyFormProperties {

		/**
		 * ID of the message to be deleted. This is the <code>Id</code> field in the received message (see <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-message-subscribe.html"> Message (Subscribe)</a> in the Chat Messaging API).
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Reason for deleting the message.
		 * Max length: 256
		 * Min length: 1
		 */
		reason: FormControl<string | null | undefined>,

		/**
		 * Identifier of the room where the message should be deleted. Currently this must be an ARN.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		roomIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMessagePostBodyFormGroup() {
		return new FormGroup<DeleteMessagePostBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^[a-zA-Z0-9]+$')]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			roomIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:ivschat:[a-z0-9-]+:[0-9]+:room/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface DeleteRoomPostBody {

		/**
		 * Identifier of the room to be deleted. Currently this must be an ARN.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		identifier: string;
	}
	export interface DeleteRoomPostBodyFormProperties {

		/**
		 * Identifier of the room to be deleted. Currently this must be an ARN.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		identifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRoomPostBodyFormGroup() {
		return new FormGroup<DeleteRoomPostBodyFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:ivschat:[a-z0-9-]+:[0-9]+:room/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface DisconnectUserPostBody {

		/**
		 * Reason for disconnecting the user.
		 * Max length: 256
		 * Min length: 1
		 */
		reason?: string | null;

		/**
		 * Identifier of the room from which the user's clients should be disconnected. Currently this must be an ARN.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		roomIdentifier: string;

		/**
		 * ID of the user (connection) to disconnect from the room.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		userId: string;
	}
	export interface DisconnectUserPostBodyFormProperties {

		/**
		 * Reason for disconnecting the user.
		 * Max length: 256
		 * Min length: 1
		 */
		reason: FormControl<string | null | undefined>,

		/**
		 * Identifier of the room from which the user's clients should be disconnected. Currently this must be an ARN.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		roomIdentifier: FormControl<string | null | undefined>,

		/**
		 * ID of the user (connection) to disconnect from the room.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateDisconnectUserPostBodyFormGroup() {
		return new FormGroup<DisconnectUserPostBodyFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			roomIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:ivschat:[a-z0-9-]+:[0-9]+:room/[a-zA-Z0-9-]+$')]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export interface GetLoggingConfigurationPostBody {

		/**
		 * Identifier of the logging configuration to be retrieved.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		identifier: string;
	}
	export interface GetLoggingConfigurationPostBodyFormProperties {

		/**
		 * Identifier of the logging configuration to be retrieved.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		identifier: FormControl<string | null | undefined>,
	}
	export function CreateGetLoggingConfigurationPostBodyFormGroup() {
		return new FormGroup<GetLoggingConfigurationPostBodyFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:ivschat:[a-z0-9-]+:[0-9]+:logging-configuration/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface GetRoomPostBody {

		/**
		 * Identifier of the room for which the configuration is to be retrieved. Currently this must be an ARN.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		identifier: string;
	}
	export interface GetRoomPostBodyFormProperties {

		/**
		 * Identifier of the room for which the configuration is to be retrieved. Currently this must be an ARN.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		identifier: FormControl<string | null | undefined>,
	}
	export function CreateGetRoomPostBodyFormGroup() {
		return new FormGroup<GetRoomPostBodyFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:ivschat:[a-z0-9-]+:[0-9]+:room/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface ListLoggingConfigurationsPostBody {

		/**
		 * Maximum number of logging configurations to return. Default: 50.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults?: number | null;

		/**
		 * The first logging configurations to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Max length: 1024
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListLoggingConfigurationsPostBodyFormProperties {

		/**
		 * Maximum number of logging configurations to return. Default: 50.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The first logging configurations to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Max length: 1024
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLoggingConfigurationsPostBodyFormGroup() {
		return new FormGroup<ListLoggingConfigurationsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
		});

	}

	export interface ListRoomsPostBody {

		/**
		 * Logging-configuration identifier.
		 * Max length: 128
		 * Min length: 1
		 */
		loggingConfigurationIdentifier?: string | null;

		/**
		 * Maximum number of rooms to return. Default: 50.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults?: number | null;

		/**
		 * Filters the list to match the specified message review handler URI.
		 * Max length: 170
		 * Min length: 0
		 */
		messageReviewHandlerUri?: string | null;

		/**
		 * Filters the list to match the specified room name.
		 * Max length: 128
		 * Min length: 0
		 */
		name?: string | null;

		/**
		 * The first room to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Max length: 1024
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListRoomsPostBodyFormProperties {

		/**
		 * Logging-configuration identifier.
		 * Max length: 128
		 * Min length: 1
		 */
		loggingConfigurationIdentifier: FormControl<string | null | undefined>,

		/**
		 * Maximum number of rooms to return. Default: 50.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * Filters the list to match the specified message review handler URI.
		 * Max length: 170
		 * Min length: 0
		 */
		messageReviewHandlerUri: FormControl<string | null | undefined>,

		/**
		 * Filters the list to match the specified room name.
		 * Max length: 128
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The first room to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Max length: 1024
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRoomsPostBodyFormGroup() {
		return new FormGroup<ListRoomsPostBodyFormProperties>({
			loggingConfigurationIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:ivschat:[a-z0-9-]+:[0-9]+:logging-configuration/[a-zA-Z0-9-]+$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			messageReviewHandlerUri: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(170), Validators.pattern('^$|^arn:aws:lambda:[a-z0-9-]+:[0-9]{12}:function:.+')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9-_]*$')]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * Array of tags to be added or updated. Array of maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints beyond what is documented there.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * Array of tags to be added or updated. Array of maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints beyond what is documented there.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SendEventPostBody {

		/** Application-defined metadata to attach to the event sent to clients. The maximum length of the metadata is 1 KB total. */
		attributes?: {[id: string]: string };

		/**
		 * Application-defined name of the event to send to clients.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		eventName: string;

		/**
		 * Identifier of the room to which the event will be sent. Currently this must be an ARN.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		roomIdentifier: string;
	}
	export interface SendEventPostBodyFormProperties {

		/** Application-defined metadata to attach to the event sent to clients. The maximum length of the metadata is 1 KB total. */
		attributes: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Application-defined name of the event to send to clients.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		eventName: FormControl<string | null | undefined>,

		/**
		 * Identifier of the room to which the event will be sent. Currently this must be an ARN.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		roomIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateSendEventPostBodyFormGroup() {
		return new FormGroup<SendEventPostBodyFormProperties>({
			attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			eventName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			roomIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:ivschat:[a-z0-9-]+:[0-9]+:room/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface UpdateLoggingConfigurationPostBody {

		/** A complex type that describes a location where chat logs will be stored. Each member represents the configuration of one log destination. For logging, you define only one type of destination (for CloudWatch Logs, Kinesis Firehose, or S3). */
		destinationConfiguration?: UpdateLoggingConfigurationPostBodyDestinationConfiguration;

		/**
		 * Identifier of the logging configuration to be updated.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		identifier: string;

		/**
		 * Logging-configuration name. The value does not need to be unique.
		 * Max length: 128
		 * Min length: 0
		 */
		name?: string | null;
	}
	export interface UpdateLoggingConfigurationPostBodyFormProperties {

		/**
		 * Identifier of the logging configuration to be updated.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		identifier: FormControl<string | null | undefined>,

		/**
		 * Logging-configuration name. The value does not need to be unique.
		 * Max length: 128
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLoggingConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateLoggingConfigurationPostBodyFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:ivschat:[a-z0-9-]+:[0-9]+:logging-configuration/[a-zA-Z0-9-]+$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9-_]*$')]),
		});

	}

	export interface UpdateLoggingConfigurationPostBodyDestinationConfiguration {
		cloudWatchLogs?: CloudWatchLogsDestinationConfiguration;
		firehose?: FirehoseDestinationConfiguration;
		s3?: S3DestinationConfiguration;
	}
	export interface UpdateLoggingConfigurationPostBodyDestinationConfigurationFormProperties {
	}
	export function CreateUpdateLoggingConfigurationPostBodyDestinationConfigurationFormGroup() {
		return new FormGroup<UpdateLoggingConfigurationPostBodyDestinationConfigurationFormProperties>({
		});

	}

	export interface UpdateRoomPostBody {

		/**
		 * Identifier of the room to be updated. Currently this must be an ARN.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		identifier: string;

		/**
		 * Array of logging-configuration identifiers attached to the room.
		 * Minimum items: 0
		 * Maximum items: 3
		 */
		loggingConfigurationIdentifiers?: Array<string>;

		/**
		 * The maximum number of characters in a single message. Messages are expected to be UTF-8 encoded and this limit applies specifically to rune/code-point count, not number of bytes. Default: 500.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maximumMessageLength?: number | null;

		/**
		 * Maximum number of messages per second that can be sent to the room (by all clients). Default: 10.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maximumMessageRatePerSecond?: number | null;

		/** Configuration information for optional message review. */
		messageReviewHandler?: UpdateRoomPostBodyMessageReviewHandler;

		/**
		 * Room name. The value does not need to be unique.
		 * Max length: 128
		 * Min length: 0
		 */
		name?: string | null;
	}
	export interface UpdateRoomPostBodyFormProperties {

		/**
		 * Identifier of the room to be updated. Currently this must be an ARN.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		identifier: FormControl<string | null | undefined>,

		/**
		 * The maximum number of characters in a single message. Messages are expected to be UTF-8 encoded and this limit applies specifically to rune/code-point count, not number of bytes. Default: 500.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maximumMessageLength: FormControl<number | null | undefined>,

		/**
		 * Maximum number of messages per second that can be sent to the room (by all clients). Default: 10.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maximumMessageRatePerSecond: FormControl<number | null | undefined>,

		/**
		 * Room name. The value does not need to be unique.
		 * Max length: 128
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRoomPostBodyFormGroup() {
		return new FormGroup<UpdateRoomPostBodyFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:ivschat:[a-z0-9-]+:[0-9]+:room/[a-zA-Z0-9-]+$')]),
			maximumMessageLength: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
			maximumMessageRatePerSecond: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9-_]*$')]),
		});

	}

	export interface UpdateRoomPostBodyMessageReviewHandler {
		fallbackResult?: FallbackResult;
		uri?: string;
	}
	export interface UpdateRoomPostBodyMessageReviewHandlerFormProperties {
		fallbackResult: FormControl<FallbackResult | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRoomPostBodyMessageReviewHandlerFormGroup() {
		return new FormGroup<UpdateRoomPostBodyMessageReviewHandlerFormProperties>({
			fallbackResult: new FormControl<FallbackResult | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

}

