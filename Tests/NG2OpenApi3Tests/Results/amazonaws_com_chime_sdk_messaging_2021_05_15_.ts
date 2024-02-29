import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface ForbiddenException {
	}
	export interface ForbiddenExceptionFormProperties {
	}
	export function CreateForbiddenExceptionFormGroup() {
		return new FormGroup<ForbiddenExceptionFormProperties>({
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface UnauthorizedClientException {
	}
	export interface UnauthorizedClientExceptionFormProperties {
	}
	export function CreateUnauthorizedClientExceptionFormGroup() {
		return new FormGroup<UnauthorizedClientExceptionFormProperties>({
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

	export interface ThrottledClientException {
	}
	export interface ThrottledClientExceptionFormProperties {
	}
	export function CreateThrottledClientExceptionFormGroup() {
		return new FormGroup<ThrottledClientExceptionFormProperties>({
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}

	export interface ServiceFailureException {
	}
	export interface ServiceFailureExceptionFormProperties {
	}
	export function CreateServiceFailureExceptionFormGroup() {
		return new FormGroup<ServiceFailureExceptionFormProperties>({
		});

	}

	export interface BatchCreateChannelMembershipResponse {
		BatchChannelMemberships?: BatchChannelMemberships;
		Errors?: Array<BatchCreateChannelMembershipError>;
	}
	export interface BatchCreateChannelMembershipResponseFormProperties {
	}
	export function CreateBatchCreateChannelMembershipResponseFormGroup() {
		return new FormGroup<BatchCreateChannelMembershipResponseFormProperties>({
		});

	}


	/** The membership information, including member ARNs, the channel ARN, and membership types. */
	export interface BatchChannelMemberships {
		InvitedBy?: Identity;
		Type?: ChannelMembershipType;
		Members?: Array<Identity>;
		ChannelArn?: string;
		SubChannelId?: string;
	}

	/** The membership information, including member ARNs, the channel ARN, and membership types. */
	export interface BatchChannelMembershipsFormProperties {
		Type: FormControl<ChannelMembershipType | null | undefined>,
		ChannelArn: FormControl<string | null | undefined>,
		SubChannelId: FormControl<string | null | undefined>,
	}
	export function CreateBatchChannelMembershipsFormGroup() {
		return new FormGroup<BatchChannelMembershipsFormProperties>({
			Type: new FormControl<ChannelMembershipType | null | undefined>(undefined),
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			SubChannelId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of a user or bot. */
	export interface Identity {
		Arn?: string;
		Name?: string;
	}

	/** The details of a user or bot. */
	export interface IdentityFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateIdentityFormGroup() {
		return new FormGroup<IdentityFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChannelMembershipType { DEFAULT = 'DEFAULT', HIDDEN = 'HIDDEN' }


	/** A list of failed member ARNs, error codes, and error messages. */
	export interface BatchCreateChannelMembershipError {
		MemberArn?: string;
		ErrorCode?: ErrorCode;
		ErrorMessage?: string;
	}

	/** A list of failed member ARNs, error codes, and error messages. */
	export interface BatchCreateChannelMembershipErrorFormProperties {
		MemberArn: FormControl<string | null | undefined>,
		ErrorCode: FormControl<ErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchCreateChannelMembershipErrorFormGroup() {
		return new FormGroup<BatchCreateChannelMembershipErrorFormProperties>({
			MemberArn: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<ErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorCode { BadRequest = 'BadRequest', Conflict = 'Conflict', Forbidden = 'Forbidden', NotFound = 'NotFound', PreconditionFailed = 'PreconditionFailed', ResourceLimitExceeded = 'ResourceLimitExceeded', ServiceFailure = 'ServiceFailure', AccessDenied = 'AccessDenied', ServiceUnavailable = 'ServiceUnavailable', Throttled = 'Throttled', Throttling = 'Throttling', Unauthorized = 'Unauthorized', Unprocessable = 'Unprocessable', VoiceConnectorGroupAssociationsExist = 'VoiceConnectorGroupAssociationsExist', PhoneNumberAssociationsExist = 'PhoneNumberAssociationsExist' }

	export interface ResourceLimitExceededException {
	}
	export interface ResourceLimitExceededExceptionFormProperties {
	}
	export function CreateResourceLimitExceededExceptionFormGroup() {
		return new FormGroup<ResourceLimitExceededExceptionFormProperties>({
		});

	}

	export interface ChannelFlowCallbackResponse {
		ChannelArn?: string;
		CallbackId?: string;
	}
	export interface ChannelFlowCallbackResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		CallbackId: FormControl<string | null | undefined>,
	}
	export function CreateChannelFlowCallbackResponseFormGroup() {
		return new FormGroup<ChannelFlowCallbackResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			CallbackId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The push notification configuration of the message. */
	export interface PushNotificationConfiguration {
		Title?: string;
		Body?: string;
		Type?: PushNotificationType;
	}

	/** The push notification configuration of the message. */
	export interface PushNotificationConfigurationFormProperties {
		Title: FormControl<string | null | undefined>,
		Body: FormControl<string | null | undefined>,
		Type: FormControl<PushNotificationType | null | undefined>,
	}
	export function CreatePushNotificationConfigurationFormGroup() {
		return new FormGroup<PushNotificationConfigurationFormProperties>({
			Title: new FormControl<string | null | undefined>(undefined),
			Body: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<PushNotificationType | null | undefined>(undefined),
		});

	}

	export enum PushNotificationType { DEFAULT = 'DEFAULT', VOIP = 'VOIP' }

	export interface MessageAttributeMap {
	}
	export interface MessageAttributeMapFormProperties {
	}
	export function CreateMessageAttributeMapFormGroup() {
		return new FormGroup<MessageAttributeMapFormProperties>({
		});

	}

	export interface CreateChannelResponse {
		ChannelArn?: string;
	}
	export interface CreateChannelResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelResponseFormGroup() {
		return new FormGroup<CreateChannelResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A tag object containing a key-value pair. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A tag object containing a key-value pair. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ExpirationCriterion { CREATED_TIMESTAMP = 'CREATED_TIMESTAMP', LAST_MESSAGE_TIMESTAMP = 'LAST_MESSAGE_TIMESTAMP' }

	export interface CreateChannelBanResponse {
		ChannelArn?: string;
		Member?: Identity;
	}
	export interface CreateChannelBanResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelBanResponseFormGroup() {
		return new FormGroup<CreateChannelBanResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateChannelFlowResponse {
		ChannelFlowArn?: string;
	}
	export interface CreateChannelFlowResponseFormProperties {
		ChannelFlowArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelFlowResponseFormGroup() {
		return new FormGroup<CreateChannelFlowResponseFormProperties>({
			ChannelFlowArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The information about a processor in a channel flow. */
	export interface Processor {

		/** Required */
		Name: string;

		/** Required */
		Configuration: ProcessorConfiguration;

		/** Required */
		ExecutionOrder: number;

		/** Required */
		FallbackAction: FallbackAction;
	}

	/** The information about a processor in a channel flow. */
	export interface ProcessorFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ExecutionOrder: FormControl<number | null | undefined>,

		/** Required */
		FallbackAction: FormControl<FallbackAction | null | undefined>,
	}
	export function CreateProcessorFormGroup() {
		return new FormGroup<ProcessorFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExecutionOrder: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			FallbackAction: new FormControl<FallbackAction | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A processor's metadata. */
	export interface ProcessorConfiguration {

		/** Required */
		Lambda: LambdaConfiguration;
	}

	/** A processor's metadata. */
	export interface ProcessorConfigurationFormProperties {
	}
	export function CreateProcessorConfigurationFormGroup() {
		return new FormGroup<ProcessorConfigurationFormProperties>({
		});

	}


	/** Stores metadata about a Lambda processor. */
	export interface LambdaConfiguration {

		/** Required */
		ResourceArn: string;

		/** Required */
		InvocationType: InvocationType;
	}

	/** Stores metadata about a Lambda processor. */
	export interface LambdaConfigurationFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,

		/** Required */
		InvocationType: FormControl<InvocationType | null | undefined>,
	}
	export function CreateLambdaConfigurationFormGroup() {
		return new FormGroup<LambdaConfigurationFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InvocationType: new FormControl<InvocationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InvocationType { ASYNC = 'ASYNC' }

	export enum FallbackAction { CONTINUE = 'CONTINUE', ABORT = 'ABORT' }

	export interface CreateChannelMembershipResponse {
		ChannelArn?: string;
		Member?: Identity;
		SubChannelId?: string;
	}
	export interface CreateChannelMembershipResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		SubChannelId: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelMembershipResponseFormGroup() {
		return new FormGroup<CreateChannelMembershipResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			SubChannelId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateChannelModeratorResponse {
		ChannelArn?: string;
		ChannelModerator?: Identity;
	}
	export interface CreateChannelModeratorResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelModeratorResponseFormGroup() {
		return new FormGroup<CreateChannelModeratorResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeChannelResponse {
		Channel?: Channel;
	}
	export interface DescribeChannelResponseFormProperties {
	}
	export function CreateDescribeChannelResponseFormGroup() {
		return new FormGroup<DescribeChannelResponseFormProperties>({
		});

	}


	/** The details of a channel. */
	export interface Channel {
		Name?: string;
		ChannelArn?: string;
		Mode?: ChannelMode;
		Privacy?: ChannelPrivacy;
		Metadata?: string;
		CreatedBy?: Identity;
		CreatedTimestamp?: Date;
		LastMessageTimestamp?: Date;
		LastUpdatedTimestamp?: Date;
		ChannelFlowArn?: string;
		ElasticChannelConfiguration?: ElasticChannelConfiguration;
		ExpirationSettings?: ExpirationSettings;
	}

	/** The details of a channel. */
	export interface ChannelFormProperties {
		Name: FormControl<string | null | undefined>,
		ChannelArn: FormControl<string | null | undefined>,
		Mode: FormControl<ChannelMode | null | undefined>,
		Privacy: FormControl<ChannelPrivacy | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		LastMessageTimestamp: FormControl<Date | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
		ChannelFlowArn: FormControl<string | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			Mode: new FormControl<ChannelMode | null | undefined>(undefined),
			Privacy: new FormControl<ChannelPrivacy | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastMessageTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ChannelFlowArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChannelMode { UNRESTRICTED = 'UNRESTRICTED', RESTRICTED = 'RESTRICTED' }

	export enum ChannelPrivacy { PUBLIC = 'PUBLIC', PRIVATE = 'PRIVATE' }


	/** The attributes required to configure and create an elastic channel. An elastic channel can support a maximum of 1-million members. */
	export interface ElasticChannelConfiguration {

		/** Required */
		MaximumSubChannels: number;

		/** Required */
		TargetMembershipsPerSubChannel: number;

		/** Required */
		MinimumMembershipPercentage: number;
	}

	/** The attributes required to configure and create an elastic channel. An elastic channel can support a maximum of 1-million members. */
	export interface ElasticChannelConfigurationFormProperties {

		/** Required */
		MaximumSubChannels: FormControl<number | null | undefined>,

		/** Required */
		TargetMembershipsPerSubChannel: FormControl<number | null | undefined>,

		/** Required */
		MinimumMembershipPercentage: FormControl<number | null | undefined>,
	}
	export function CreateElasticChannelConfigurationFormGroup() {
		return new FormGroup<ElasticChannelConfigurationFormProperties>({
			MaximumSubChannels: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TargetMembershipsPerSubChannel: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MinimumMembershipPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings that control the interval after which a channel is deleted. */
	export interface ExpirationSettings {

		/** Required */
		ExpirationDays: number;

		/** Required */
		ExpirationCriterion: ExpirationCriterion;
	}

	/** Settings that control the interval after which a channel is deleted. */
	export interface ExpirationSettingsFormProperties {

		/** Required */
		ExpirationDays: FormControl<number | null | undefined>,

		/** Required */
		ExpirationCriterion: FormControl<ExpirationCriterion | null | undefined>,
	}
	export function CreateExpirationSettingsFormGroup() {
		return new FormGroup<ExpirationSettingsFormProperties>({
			ExpirationDays: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ExpirationCriterion: new FormControl<ExpirationCriterion | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeChannelBanResponse {
		ChannelBan?: ChannelBan;
	}
	export interface DescribeChannelBanResponseFormProperties {
	}
	export function CreateDescribeChannelBanResponseFormGroup() {
		return new FormGroup<DescribeChannelBanResponseFormProperties>({
		});

	}


	/** The details of a channel ban. */
	export interface ChannelBan {
		Member?: Identity;
		ChannelArn?: string;
		CreatedTimestamp?: Date;
		CreatedBy?: Identity;
	}

	/** The details of a channel ban. */
	export interface ChannelBanFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateChannelBanFormGroup() {
		return new FormGroup<ChannelBanFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeChannelFlowResponse {
		ChannelFlow?: ChannelFlow;
	}
	export interface DescribeChannelFlowResponseFormProperties {
	}
	export function CreateDescribeChannelFlowResponseFormGroup() {
		return new FormGroup<DescribeChannelFlowResponseFormProperties>({
		});

	}


	/** The details of a channel flow. */
	export interface ChannelFlow {
		ChannelFlowArn?: string;
		Processors?: Array<Processor>;
		Name?: string;
		CreatedTimestamp?: Date;
		LastUpdatedTimestamp?: Date;
	}

	/** The details of a channel flow. */
	export interface ChannelFlowFormProperties {
		ChannelFlowArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateChannelFlowFormGroup() {
		return new FormGroup<ChannelFlowFormProperties>({
			ChannelFlowArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeChannelMembershipResponse {
		ChannelMembership?: ChannelMembership;
	}
	export interface DescribeChannelMembershipResponseFormProperties {
	}
	export function CreateDescribeChannelMembershipResponseFormGroup() {
		return new FormGroup<DescribeChannelMembershipResponseFormProperties>({
		});

	}


	/** The details of a channel member. */
	export interface ChannelMembership {
		InvitedBy?: Identity;
		Type?: ChannelMembershipType;
		Member?: Identity;
		ChannelArn?: string;
		CreatedTimestamp?: Date;
		LastUpdatedTimestamp?: Date;
		SubChannelId?: string;
	}

	/** The details of a channel member. */
	export interface ChannelMembershipFormProperties {
		Type: FormControl<ChannelMembershipType | null | undefined>,
		ChannelArn: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
		SubChannelId: FormControl<string | null | undefined>,
	}
	export function CreateChannelMembershipFormGroup() {
		return new FormGroup<ChannelMembershipFormProperties>({
			Type: new FormControl<ChannelMembershipType | null | undefined>(undefined),
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			SubChannelId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeChannelMembershipForAppInstanceUserResponse {
		ChannelMembership?: ChannelMembershipForAppInstanceUserSummary;
	}
	export interface DescribeChannelMembershipForAppInstanceUserResponseFormProperties {
	}
	export function CreateDescribeChannelMembershipForAppInstanceUserResponseFormGroup() {
		return new FormGroup<DescribeChannelMembershipForAppInstanceUserResponseFormProperties>({
		});

	}


	/** Summary of the channel membership details of an <code>AppInstanceUser</code>. */
	export interface ChannelMembershipForAppInstanceUserSummary {
		ChannelSummary?: ChannelSummary;
		AppInstanceUserMembershipSummary?: AppInstanceUserMembershipSummary;
	}

	/** Summary of the channel membership details of an <code>AppInstanceUser</code>. */
	export interface ChannelMembershipForAppInstanceUserSummaryFormProperties {
	}
	export function CreateChannelMembershipForAppInstanceUserSummaryFormGroup() {
		return new FormGroup<ChannelMembershipForAppInstanceUserSummaryFormProperties>({
		});

	}


	/** Summary of the details of a <code>Channel</code>. */
	export interface ChannelSummary {
		Name?: string;
		ChannelArn?: string;
		Mode?: ChannelMode;
		Privacy?: ChannelPrivacy;
		Metadata?: string;
		LastMessageTimestamp?: Date;
	}

	/** Summary of the details of a <code>Channel</code>. */
	export interface ChannelSummaryFormProperties {
		Name: FormControl<string | null | undefined>,
		ChannelArn: FormControl<string | null | undefined>,
		Mode: FormControl<ChannelMode | null | undefined>,
		Privacy: FormControl<ChannelPrivacy | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
		LastMessageTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateChannelSummaryFormGroup() {
		return new FormGroup<ChannelSummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			Mode: new FormControl<ChannelMode | null | undefined>(undefined),
			Privacy: new FormControl<ChannelPrivacy | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
			LastMessageTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Summary of the membership details of an <code>AppInstanceUser</code>. */
	export interface AppInstanceUserMembershipSummary {
		Type?: ChannelMembershipType;
		ReadMarkerTimestamp?: Date;
		SubChannelId?: string;
	}

	/** Summary of the membership details of an <code>AppInstanceUser</code>. */
	export interface AppInstanceUserMembershipSummaryFormProperties {
		Type: FormControl<ChannelMembershipType | null | undefined>,
		ReadMarkerTimestamp: FormControl<Date | null | undefined>,
		SubChannelId: FormControl<string | null | undefined>,
	}
	export function CreateAppInstanceUserMembershipSummaryFormGroup() {
		return new FormGroup<AppInstanceUserMembershipSummaryFormProperties>({
			Type: new FormControl<ChannelMembershipType | null | undefined>(undefined),
			ReadMarkerTimestamp: new FormControl<Date | null | undefined>(undefined),
			SubChannelId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeChannelModeratedByAppInstanceUserResponse {
		Channel?: ChannelModeratedByAppInstanceUserSummary;
	}
	export interface DescribeChannelModeratedByAppInstanceUserResponseFormProperties {
	}
	export function CreateDescribeChannelModeratedByAppInstanceUserResponseFormGroup() {
		return new FormGroup<DescribeChannelModeratedByAppInstanceUserResponseFormProperties>({
		});

	}


	/** Summary of the details of a moderated channel. */
	export interface ChannelModeratedByAppInstanceUserSummary {
		ChannelSummary?: ChannelSummary;
	}

	/** Summary of the details of a moderated channel. */
	export interface ChannelModeratedByAppInstanceUserSummaryFormProperties {
	}
	export function CreateChannelModeratedByAppInstanceUserSummaryFormGroup() {
		return new FormGroup<ChannelModeratedByAppInstanceUserSummaryFormProperties>({
		});

	}

	export interface DescribeChannelModeratorResponse {
		ChannelModerator?: ChannelModerator;
	}
	export interface DescribeChannelModeratorResponseFormProperties {
	}
	export function CreateDescribeChannelModeratorResponseFormGroup() {
		return new FormGroup<DescribeChannelModeratorResponseFormProperties>({
		});

	}


	/** The details of a channel moderator. */
	export interface ChannelModerator {
		Moderator?: Identity;
		ChannelArn?: string;
		CreatedTimestamp?: Date;
		CreatedBy?: Identity;
	}

	/** The details of a channel moderator. */
	export interface ChannelModeratorFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateChannelModeratorFormGroup() {
		return new FormGroup<ChannelModeratorFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetChannelMembershipPreferencesResponse {
		ChannelArn?: string;
		Member?: Identity;
		Preferences?: ChannelMembershipPreferences;
	}
	export interface GetChannelMembershipPreferencesResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
	}
	export function CreateGetChannelMembershipPreferencesResponseFormGroup() {
		return new FormGroup<GetChannelMembershipPreferencesResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The channel membership preferences for an <code>AppInstanceUser</code>. */
	export interface ChannelMembershipPreferences {
		PushNotifications?: PushNotificationPreferences;
	}

	/** The channel membership preferences for an <code>AppInstanceUser</code>. */
	export interface ChannelMembershipPreferencesFormProperties {
	}
	export function CreateChannelMembershipPreferencesFormGroup() {
		return new FormGroup<ChannelMembershipPreferencesFormProperties>({
		});

	}


	/** The channel membership preferences for push notification. */
	export interface PushNotificationPreferences {

		/** Required */
		AllowNotifications: AllowNotifications;
		FilterRule?: string;
	}

	/** The channel membership preferences for push notification. */
	export interface PushNotificationPreferencesFormProperties {

		/** Required */
		AllowNotifications: FormControl<AllowNotifications | null | undefined>,
		FilterRule: FormControl<string | null | undefined>,
	}
	export function CreatePushNotificationPreferencesFormGroup() {
		return new FormGroup<PushNotificationPreferencesFormProperties>({
			AllowNotifications: new FormControl<AllowNotifications | null | undefined>(undefined, [Validators.required]),
			FilterRule: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AllowNotifications { ALL = 'ALL', NONE = 'NONE', FILTERED = 'FILTERED' }

	export interface GetChannelMessageResponse {
		ChannelMessage?: ChannelMessage;
	}
	export interface GetChannelMessageResponseFormProperties {
	}
	export function CreateGetChannelMessageResponseFormGroup() {
		return new FormGroup<GetChannelMessageResponseFormProperties>({
		});

	}


	/** The details of a message in a channel. */
	export interface ChannelMessage {
		ChannelArn?: string;
		MessageId?: string;
		Content?: string;
		Metadata?: string;
		Type?: ChannelMessageType;
		CreatedTimestamp?: Date;
		LastEditedTimestamp?: Date;
		LastUpdatedTimestamp?: Date;
		Sender?: Identity;
		Redacted?: boolean | null;
		Persistence?: ChannelMessagePersistenceType;
		Status?: ChannelMessageStatusStructure;
		MessageAttributes?: MessageAttributeMap;
		SubChannelId?: string;
		ContentType?: string;
		Target?: Array<Target>;
	}

	/** The details of a message in a channel. */
	export interface ChannelMessageFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		MessageId: FormControl<string | null | undefined>,
		Content: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
		Type: FormControl<ChannelMessageType | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		LastEditedTimestamp: FormControl<Date | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
		Redacted: FormControl<boolean | null | undefined>,
		Persistence: FormControl<ChannelMessagePersistenceType | null | undefined>,
		SubChannelId: FormControl<string | null | undefined>,
		ContentType: FormControl<string | null | undefined>,
	}
	export function CreateChannelMessageFormGroup() {
		return new FormGroup<ChannelMessageFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			MessageId: new FormControl<string | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ChannelMessageType | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastEditedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			Redacted: new FormControl<boolean | null | undefined>(undefined),
			Persistence: new FormControl<ChannelMessagePersistenceType | null | undefined>(undefined),
			SubChannelId: new FormControl<string | null | undefined>(undefined),
			ContentType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChannelMessageType { STANDARD = 'STANDARD', CONTROL = 'CONTROL' }

	export enum ChannelMessagePersistenceType { PERSISTENT = 'PERSISTENT', NON_PERSISTENT = 'NON_PERSISTENT' }


	/** Stores information about a message status. */
	export interface ChannelMessageStatusStructure {
		Value?: ChannelMessageStatus;
		Detail?: string;
	}

	/** Stores information about a message status. */
	export interface ChannelMessageStatusStructureFormProperties {
		Value: FormControl<ChannelMessageStatus | null | undefined>,
		Detail: FormControl<string | null | undefined>,
	}
	export function CreateChannelMessageStatusStructureFormGroup() {
		return new FormGroup<ChannelMessageStatusStructureFormProperties>({
			Value: new FormControl<ChannelMessageStatus | null | undefined>(undefined),
			Detail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChannelMessageStatus { SENT = 'SENT', PENDING = 'PENDING', FAILED = 'FAILED', DENIED = 'DENIED' }


	/** The target of a message, a sender, a user, or a bot. Only the target and the sender can view targeted messages. Only users who can see targeted messages can take actions on them. However, administrators can delete targeted messages that they can’t see. */
	export interface Target {
		MemberArn?: string;
	}

	/** The target of a message, a sender, a user, or a bot. Only the target and the sender can view targeted messages. Only users who can see targeted messages can take actions on them. However, administrators can delete targeted messages that they can’t see. */
	export interface TargetFormProperties {
		MemberArn: FormControl<string | null | undefined>,
	}
	export function CreateTargetFormGroup() {
		return new FormGroup<TargetFormProperties>({
			MemberArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetChannelMessageStatusResponse {
		Status?: ChannelMessageStatusStructure;
	}
	export interface GetChannelMessageStatusResponseFormProperties {
	}
	export function CreateGetChannelMessageStatusResponseFormGroup() {
		return new FormGroup<GetChannelMessageStatusResponseFormProperties>({
		});

	}

	export interface GetMessagingSessionEndpointResponse {
		Endpoint?: MessagingSessionEndpoint;
	}
	export interface GetMessagingSessionEndpointResponseFormProperties {
	}
	export function CreateGetMessagingSessionEndpointResponseFormGroup() {
		return new FormGroup<GetMessagingSessionEndpointResponseFormProperties>({
		});

	}


	/** The websocket endpoint used to connect to Amazon Chime SDK messaging. */
	export interface MessagingSessionEndpoint {
		Url?: string;
	}

	/** The websocket endpoint used to connect to Amazon Chime SDK messaging. */
	export interface MessagingSessionEndpointFormProperties {
		Url: FormControl<string | null | undefined>,
	}
	export function CreateMessagingSessionEndpointFormGroup() {
		return new FormGroup<MessagingSessionEndpointFormProperties>({
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMessagingStreamingConfigurationsResponse {
		StreamingConfigurations?: Array<StreamingConfiguration>;
	}
	export interface GetMessagingStreamingConfigurationsResponseFormProperties {
	}
	export function CreateGetMessagingStreamingConfigurationsResponseFormGroup() {
		return new FormGroup<GetMessagingStreamingConfigurationsResponseFormProperties>({
		});

	}


	/** The configuration for connecting a messaging stream to Amazon Kinesis. */
	export interface StreamingConfiguration {

		/** Required */
		DataType: MessagingDataType;

		/** Required */
		ResourceArn: string;
	}

	/** The configuration for connecting a messaging stream to Amazon Kinesis. */
	export interface StreamingConfigurationFormProperties {

		/** Required */
		DataType: FormControl<MessagingDataType | null | undefined>,

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateStreamingConfigurationFormGroup() {
		return new FormGroup<StreamingConfigurationFormProperties>({
			DataType: new FormControl<MessagingDataType | null | undefined>(undefined, [Validators.required]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MessagingDataType { Channel = 'Channel', ChannelMessage = 'ChannelMessage' }

	export interface ListChannelBansResponse {
		ChannelArn?: string;
		NextToken?: string;
		ChannelBans?: Array<ChannelBanSummary>;
	}
	export interface ListChannelBansResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelBansResponseFormGroup() {
		return new FormGroup<ListChannelBansResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of the details of a <code>ChannelBan</code>. */
	export interface ChannelBanSummary {
		Member?: Identity;
	}

	/** Summary of the details of a <code>ChannelBan</code>. */
	export interface ChannelBanSummaryFormProperties {
	}
	export function CreateChannelBanSummaryFormGroup() {
		return new FormGroup<ChannelBanSummaryFormProperties>({
		});

	}

	export interface ListChannelFlowsResponse {
		ChannelFlows?: Array<ChannelFlowSummary>;
		NextToken?: string;
	}
	export interface ListChannelFlowsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelFlowsResponseFormGroup() {
		return new FormGroup<ListChannelFlowsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of details of a channel flow. */
	export interface ChannelFlowSummary {
		ChannelFlowArn?: string;
		Name?: string;
		Processors?: Array<Processor>;
	}

	/** Summary of details of a channel flow. */
	export interface ChannelFlowSummaryFormProperties {
		ChannelFlowArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateChannelFlowSummaryFormGroup() {
		return new FormGroup<ChannelFlowSummaryFormProperties>({
			ChannelFlowArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListChannelMembershipsResponse {
		ChannelArn?: string;
		ChannelMemberships?: Array<ChannelMembershipSummary>;
		NextToken?: string;
	}
	export interface ListChannelMembershipsResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelMembershipsResponseFormGroup() {
		return new FormGroup<ListChannelMembershipsResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of the details of a <code>ChannelMembership</code>. */
	export interface ChannelMembershipSummary {
		Member?: Identity;
	}

	/** Summary of the details of a <code>ChannelMembership</code>. */
	export interface ChannelMembershipSummaryFormProperties {
	}
	export function CreateChannelMembershipSummaryFormGroup() {
		return new FormGroup<ChannelMembershipSummaryFormProperties>({
		});

	}

	export interface ListChannelMembershipsForAppInstanceUserResponse {
		ChannelMemberships?: Array<ChannelMembershipForAppInstanceUserSummary>;
		NextToken?: string;
	}
	export interface ListChannelMembershipsForAppInstanceUserResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelMembershipsForAppInstanceUserResponseFormGroup() {
		return new FormGroup<ListChannelMembershipsForAppInstanceUserResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListChannelMessagesResponse {
		ChannelArn?: string;
		NextToken?: string;
		ChannelMessages?: Array<ChannelMessageSummary>;
		SubChannelId?: string;
	}
	export interface ListChannelMessagesResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		SubChannelId: FormControl<string | null | undefined>,
	}
	export function CreateListChannelMessagesResponseFormGroup() {
		return new FormGroup<ListChannelMessagesResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			SubChannelId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of the messages in a <code>Channel</code>. */
	export interface ChannelMessageSummary {
		MessageId?: string;
		Content?: string;
		Metadata?: string;
		Type?: ChannelMessageType;
		CreatedTimestamp?: Date;
		LastUpdatedTimestamp?: Date;
		LastEditedTimestamp?: Date;
		Sender?: Identity;
		Redacted?: boolean | null;
		Status?: ChannelMessageStatusStructure;
		MessageAttributes?: MessageAttributeMap;
		ContentType?: string;
		Target?: Array<Target>;
	}

	/** Summary of the messages in a <code>Channel</code>. */
	export interface ChannelMessageSummaryFormProperties {
		MessageId: FormControl<string | null | undefined>,
		Content: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
		Type: FormControl<ChannelMessageType | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
		LastEditedTimestamp: FormControl<Date | null | undefined>,
		Redacted: FormControl<boolean | null | undefined>,
		ContentType: FormControl<string | null | undefined>,
	}
	export function CreateChannelMessageSummaryFormGroup() {
		return new FormGroup<ChannelMessageSummaryFormProperties>({
			MessageId: new FormControl<string | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ChannelMessageType | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastEditedTimestamp: new FormControl<Date | null | undefined>(undefined),
			Redacted: new FormControl<boolean | null | undefined>(undefined),
			ContentType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListChannelModeratorsResponse {
		ChannelArn?: string;
		NextToken?: string;
		ChannelModerators?: Array<ChannelModeratorSummary>;
	}
	export interface ListChannelModeratorsResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelModeratorsResponseFormGroup() {
		return new FormGroup<ListChannelModeratorsResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of the details of a <code>ChannelModerator</code>. */
	export interface ChannelModeratorSummary {
		Moderator?: Identity;
	}

	/** Summary of the details of a <code>ChannelModerator</code>. */
	export interface ChannelModeratorSummaryFormProperties {
	}
	export function CreateChannelModeratorSummaryFormGroup() {
		return new FormGroup<ChannelModeratorSummaryFormProperties>({
		});

	}

	export interface ListChannelsResponse {
		Channels?: Array<ChannelSummary>;
		NextToken?: string;
	}
	export interface ListChannelsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelsResponseFormGroup() {
		return new FormGroup<ListChannelsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListChannelsAssociatedWithChannelFlowResponse {
		Channels?: Array<ChannelAssociatedWithFlowSummary>;
		NextToken?: string;
	}
	export interface ListChannelsAssociatedWithChannelFlowResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelsAssociatedWithChannelFlowResponseFormGroup() {
		return new FormGroup<ListChannelsAssociatedWithChannelFlowResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of details of a channel associated with channel flow. */
	export interface ChannelAssociatedWithFlowSummary {
		Name?: string;
		ChannelArn?: string;
		Mode?: ChannelMode;
		Privacy?: ChannelPrivacy;
		Metadata?: string;
	}

	/** Summary of details of a channel associated with channel flow. */
	export interface ChannelAssociatedWithFlowSummaryFormProperties {
		Name: FormControl<string | null | undefined>,
		ChannelArn: FormControl<string | null | undefined>,
		Mode: FormControl<ChannelMode | null | undefined>,
		Privacy: FormControl<ChannelPrivacy | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateChannelAssociatedWithFlowSummaryFormGroup() {
		return new FormGroup<ChannelAssociatedWithFlowSummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			Mode: new FormControl<ChannelMode | null | undefined>(undefined),
			Privacy: new FormControl<ChannelPrivacy | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListChannelsModeratedByAppInstanceUserResponse {
		Channels?: Array<ChannelModeratedByAppInstanceUserSummary>;
		NextToken?: string;
	}
	export interface ListChannelsModeratedByAppInstanceUserResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelsModeratedByAppInstanceUserResponseFormGroup() {
		return new FormGroup<ListChannelsModeratedByAppInstanceUserResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSubChannelsResponse {
		ChannelArn?: string;
		SubChannels?: Array<SubChannelSummary>;
		NextToken?: string;
	}
	export interface ListSubChannelsResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSubChannelsResponseFormGroup() {
		return new FormGroup<ListSubChannelsResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of the sub-channels associated with the elastic channel. */
	export interface SubChannelSummary {
		SubChannelId?: string;
		MembershipCount?: number | null;
	}

	/** Summary of the sub-channels associated with the elastic channel. */
	export interface SubChannelSummaryFormProperties {
		SubChannelId: FormControl<string | null | undefined>,
		MembershipCount: FormControl<number | null | undefined>,
	}
	export function CreateSubChannelSummaryFormGroup() {
		return new FormGroup<SubChannelSummaryFormProperties>({
			SubChannelId: new FormControl<string | null | undefined>(undefined),
			MembershipCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface PutChannelExpirationSettingsResponse {
		ChannelArn?: string;
		ExpirationSettings?: ExpirationSettings;
	}
	export interface PutChannelExpirationSettingsResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
	}
	export function CreatePutChannelExpirationSettingsResponseFormGroup() {
		return new FormGroup<PutChannelExpirationSettingsResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutChannelMembershipPreferencesResponse {
		ChannelArn?: string;
		Member?: Identity;
		Preferences?: ChannelMembershipPreferences;
	}
	export interface PutChannelMembershipPreferencesResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
	}
	export function CreatePutChannelMembershipPreferencesResponseFormGroup() {
		return new FormGroup<PutChannelMembershipPreferencesResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutMessagingStreamingConfigurationsResponse {
		StreamingConfigurations?: Array<StreamingConfiguration>;
	}
	export interface PutMessagingStreamingConfigurationsResponseFormProperties {
	}
	export function CreatePutMessagingStreamingConfigurationsResponseFormGroup() {
		return new FormGroup<PutMessagingStreamingConfigurationsResponseFormProperties>({
		});

	}

	export interface RedactChannelMessageResponse {
		ChannelArn?: string;
		MessageId?: string;
		SubChannelId?: string;
	}
	export interface RedactChannelMessageResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		MessageId: FormControl<string | null | undefined>,
		SubChannelId: FormControl<string | null | undefined>,
	}
	export function CreateRedactChannelMessageResponseFormGroup() {
		return new FormGroup<RedactChannelMessageResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			MessageId: new FormControl<string | null | undefined>(undefined),
			SubChannelId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchChannelsResponse {
		Channels?: Array<ChannelSummary>;
		NextToken?: string;
	}
	export interface SearchChannelsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchChannelsResponseFormGroup() {
		return new FormGroup<SearchChannelsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A <code>Field</code> of the channel that you want to search. */
	export interface SearchField {

		/** Required */
		Key: SearchFieldKey;

		/** Required */
		Values: Array<string>;

		/** Required */
		Operator: SearchFieldOperator;
	}

	/** A <code>Field</code> of the channel that you want to search. */
	export interface SearchFieldFormProperties {

		/** Required */
		Key: FormControl<SearchFieldKey | null | undefined>,

		/** Required */
		Operator: FormControl<SearchFieldOperator | null | undefined>,
	}
	export function CreateSearchFieldFormGroup() {
		return new FormGroup<SearchFieldFormProperties>({
			Key: new FormControl<SearchFieldKey | null | undefined>(undefined, [Validators.required]),
			Operator: new FormControl<SearchFieldOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SearchFieldKey { MEMBERS = 'MEMBERS' }

	export enum SearchFieldOperator { EQUALS = 'EQUALS', INCLUDES = 'INCLUDES' }

	export interface SendChannelMessageResponse {
		ChannelArn?: string;
		MessageId?: string;
		Status?: ChannelMessageStatusStructure;
		SubChannelId?: string;
	}
	export interface SendChannelMessageResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		MessageId: FormControl<string | null | undefined>,
		SubChannelId: FormControl<string | null | undefined>,
	}
	export function CreateSendChannelMessageResponseFormGroup() {
		return new FormGroup<SendChannelMessageResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			MessageId: new FormControl<string | null | undefined>(undefined),
			SubChannelId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of message attribute values. */
	export interface MessageAttributeValue {
		StringValues?: Array<string>;
	}

	/** A list of message attribute values. */
	export interface MessageAttributeValueFormProperties {
	}
	export function CreateMessageAttributeValueFormGroup() {
		return new FormGroup<MessageAttributeValueFormProperties>({
		});

	}

	export interface UpdateChannelResponse {
		ChannelArn?: string;
	}
	export interface UpdateChannelResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelResponseFormGroup() {
		return new FormGroup<UpdateChannelResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateChannelFlowResponse {
		ChannelFlowArn?: string;
	}
	export interface UpdateChannelFlowResponseFormProperties {
		ChannelFlowArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelFlowResponseFormGroup() {
		return new FormGroup<UpdateChannelFlowResponseFormProperties>({
			ChannelFlowArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateChannelMessageResponse {
		ChannelArn?: string;
		MessageId?: string;
		Status?: ChannelMessageStatusStructure;
		SubChannelId?: string;
	}
	export interface UpdateChannelMessageResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		MessageId: FormControl<string | null | undefined>,
		SubChannelId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelMessageResponseFormGroup() {
		return new FormGroup<UpdateChannelMessageResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			MessageId: new FormControl<string | null | undefined>(undefined),
			SubChannelId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateChannelReadMarkerResponse {
		ChannelArn?: string;
	}
	export interface UpdateChannelReadMarkerResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelReadMarkerResponseFormGroup() {
		return new FormGroup<UpdateChannelReadMarkerResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateChannelFlowRequest {

		/** Required */
		ChannelFlowArn: string;
	}
	export interface AssociateChannelFlowRequestFormProperties {

		/** Required */
		ChannelFlowArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateChannelFlowRequestFormGroup() {
		return new FormGroup<AssociateChannelFlowRequestFormProperties>({
			ChannelFlowArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchCreateChannelMembershipRequest {
		Type?: ChannelMembershipType;

		/** Required */
		MemberArns: Array<string>;
		SubChannelId?: string;
	}
	export interface BatchCreateChannelMembershipRequestFormProperties {
		Type: FormControl<ChannelMembershipType | null | undefined>,
		SubChannelId: FormControl<string | null | undefined>,
	}
	export function CreateBatchCreateChannelMembershipRequestFormGroup() {
		return new FormGroup<BatchCreateChannelMembershipRequestFormProperties>({
			Type: new FormControl<ChannelMembershipType | null | undefined>(undefined),
			SubChannelId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Stores information about a callback. */
	export interface ChannelMessageCallback {

		/** Required */
		MessageId: string;
		Content?: string;
		Metadata?: string;
		PushNotification?: PushNotificationConfiguration;
		MessageAttributes?: MessageAttributeMap;
		SubChannelId?: string;
		ContentType?: string;
	}

	/** Stores information about a callback. */
	export interface ChannelMessageCallbackFormProperties {

		/** Required */
		MessageId: FormControl<string | null | undefined>,
		Content: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
		SubChannelId: FormControl<string | null | undefined>,
		ContentType: FormControl<string | null | undefined>,
	}
	export function CreateChannelMessageCallbackFormGroup() {
		return new FormGroup<ChannelMessageCallbackFormProperties>({
			MessageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Content: new FormControl<string | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
			SubChannelId: new FormControl<string | null | undefined>(undefined),
			ContentType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChannelFlowCallbackRequest {

		/** Required */
		CallbackId: string;
		DeleteResource?: boolean | null;

		/** Required */
		ChannelMessage: ChannelMessageCallback;
	}
	export interface ChannelFlowCallbackRequestFormProperties {

		/** Required */
		CallbackId: FormControl<string | null | undefined>,
		DeleteResource: FormControl<boolean | null | undefined>,
	}
	export function CreateChannelFlowCallbackRequestFormGroup() {
		return new FormGroup<ChannelFlowCallbackRequestFormProperties>({
			CallbackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeleteResource: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateChannelBanRequest {

		/** Required */
		MemberArn: string;
	}
	export interface CreateChannelBanRequestFormProperties {

		/** Required */
		MemberArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelBanRequestFormGroup() {
		return new FormGroup<CreateChannelBanRequestFormProperties>({
			MemberArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateChannelFlowRequest {

		/** Required */
		AppInstanceArn: string;

		/** Required */
		Processors: Array<Processor>;

		/** Required */
		Name: string;
		Tags?: Array<Tag>;

		/** Required */
		ClientRequestToken: string;
	}
	export interface CreateChannelFlowRequestFormProperties {

		/** Required */
		AppInstanceArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelFlowRequestFormGroup() {
		return new FormGroup<CreateChannelFlowRequestFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateChannelMembershipRequest {

		/** Required */
		MemberArn: string;

		/** Required */
		Type: ChannelMembershipType;
		SubChannelId?: string;
	}
	export interface CreateChannelMembershipRequestFormProperties {

		/** Required */
		MemberArn: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<ChannelMembershipType | null | undefined>,
		SubChannelId: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelMembershipRequestFormGroup() {
		return new FormGroup<CreateChannelMembershipRequestFormProperties>({
			MemberArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ChannelMembershipType | null | undefined>(undefined, [Validators.required]),
			SubChannelId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateChannelModeratorRequest {

		/** Required */
		ChannelModeratorArn: string;
	}
	export interface CreateChannelModeratorRequestFormProperties {

		/** Required */
		ChannelModeratorArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelModeratorRequestFormGroup() {
		return new FormGroup<CreateChannelModeratorRequestFormProperties>({
			ChannelModeratorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateChannelRequest {

		/** Required */
		AppInstanceArn: string;

		/** Required */
		Name: string;
		Mode?: ChannelMode;
		Privacy?: ChannelPrivacy;
		Metadata?: string;

		/** Required */
		ClientRequestToken: string;
		Tags?: Array<Tag>;
		ChannelId?: string;
		MemberArns?: Array<string>;
		ModeratorArns?: Array<string>;
		ElasticChannelConfiguration?: ElasticChannelConfiguration;
		ExpirationSettings?: ExpirationSettings;
	}
	export interface CreateChannelRequestFormProperties {

		/** Required */
		AppInstanceArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Mode: FormControl<ChannelMode | null | undefined>,
		Privacy: FormControl<ChannelPrivacy | null | undefined>,
		Metadata: FormControl<string | null | undefined>,

		/** Required */
		ClientRequestToken: FormControl<string | null | undefined>,
		ChannelId: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelRequestFormGroup() {
		return new FormGroup<CreateChannelRequestFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Mode: new FormControl<ChannelMode | null | undefined>(undefined),
			Privacy: new FormControl<ChannelPrivacy | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChannelId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteChannelBanRequest {
	}
	export interface DeleteChannelBanRequestFormProperties {
	}
	export function CreateDeleteChannelBanRequestFormGroup() {
		return new FormGroup<DeleteChannelBanRequestFormProperties>({
		});

	}

	export interface DeleteChannelFlowRequest {
	}
	export interface DeleteChannelFlowRequestFormProperties {
	}
	export function CreateDeleteChannelFlowRequestFormGroup() {
		return new FormGroup<DeleteChannelFlowRequestFormProperties>({
		});

	}

	export interface DeleteChannelMembershipRequest {
	}
	export interface DeleteChannelMembershipRequestFormProperties {
	}
	export function CreateDeleteChannelMembershipRequestFormGroup() {
		return new FormGroup<DeleteChannelMembershipRequestFormProperties>({
		});

	}

	export interface DeleteChannelMessageRequest {
	}
	export interface DeleteChannelMessageRequestFormProperties {
	}
	export function CreateDeleteChannelMessageRequestFormGroup() {
		return new FormGroup<DeleteChannelMessageRequestFormProperties>({
		});

	}

	export interface DeleteChannelModeratorRequest {
	}
	export interface DeleteChannelModeratorRequestFormProperties {
	}
	export function CreateDeleteChannelModeratorRequestFormGroup() {
		return new FormGroup<DeleteChannelModeratorRequestFormProperties>({
		});

	}

	export interface DeleteChannelRequest {
	}
	export interface DeleteChannelRequestFormProperties {
	}
	export function CreateDeleteChannelRequestFormGroup() {
		return new FormGroup<DeleteChannelRequestFormProperties>({
		});

	}

	export interface DeleteMessagingStreamingConfigurationsRequest {
	}
	export interface DeleteMessagingStreamingConfigurationsRequestFormProperties {
	}
	export function CreateDeleteMessagingStreamingConfigurationsRequestFormGroup() {
		return new FormGroup<DeleteMessagingStreamingConfigurationsRequestFormProperties>({
		});

	}

	export interface DescribeChannelBanRequest {
	}
	export interface DescribeChannelBanRequestFormProperties {
	}
	export function CreateDescribeChannelBanRequestFormGroup() {
		return new FormGroup<DescribeChannelBanRequestFormProperties>({
		});

	}

	export interface DescribeChannelFlowRequest {
	}
	export interface DescribeChannelFlowRequestFormProperties {
	}
	export function CreateDescribeChannelFlowRequestFormGroup() {
		return new FormGroup<DescribeChannelFlowRequestFormProperties>({
		});

	}

	export interface DescribeChannelMembershipForAppInstanceUserRequest {
	}
	export interface DescribeChannelMembershipForAppInstanceUserRequestFormProperties {
	}
	export function CreateDescribeChannelMembershipForAppInstanceUserRequestFormGroup() {
		return new FormGroup<DescribeChannelMembershipForAppInstanceUserRequestFormProperties>({
		});

	}

	export interface DescribeChannelMembershipRequest {
	}
	export interface DescribeChannelMembershipRequestFormProperties {
	}
	export function CreateDescribeChannelMembershipRequestFormGroup() {
		return new FormGroup<DescribeChannelMembershipRequestFormProperties>({
		});

	}

	export interface DescribeChannelModeratedByAppInstanceUserRequest {
	}
	export interface DescribeChannelModeratedByAppInstanceUserRequestFormProperties {
	}
	export function CreateDescribeChannelModeratedByAppInstanceUserRequestFormGroup() {
		return new FormGroup<DescribeChannelModeratedByAppInstanceUserRequestFormProperties>({
		});

	}

	export interface DescribeChannelModeratorRequest {
	}
	export interface DescribeChannelModeratorRequestFormProperties {
	}
	export function CreateDescribeChannelModeratorRequestFormGroup() {
		return new FormGroup<DescribeChannelModeratorRequestFormProperties>({
		});

	}

	export interface DescribeChannelRequest {
	}
	export interface DescribeChannelRequestFormProperties {
	}
	export function CreateDescribeChannelRequestFormGroup() {
		return new FormGroup<DescribeChannelRequestFormProperties>({
		});

	}

	export interface DisassociateChannelFlowRequest {
	}
	export interface DisassociateChannelFlowRequestFormProperties {
	}
	export function CreateDisassociateChannelFlowRequestFormGroup() {
		return new FormGroup<DisassociateChannelFlowRequestFormProperties>({
		});

	}

	export interface GetChannelMembershipPreferencesRequest {
	}
	export interface GetChannelMembershipPreferencesRequestFormProperties {
	}
	export function CreateGetChannelMembershipPreferencesRequestFormGroup() {
		return new FormGroup<GetChannelMembershipPreferencesRequestFormProperties>({
		});

	}

	export interface GetChannelMessageRequest {
	}
	export interface GetChannelMessageRequestFormProperties {
	}
	export function CreateGetChannelMessageRequestFormGroup() {
		return new FormGroup<GetChannelMessageRequestFormProperties>({
		});

	}

	export interface GetChannelMessageStatusRequest {
	}
	export interface GetChannelMessageStatusRequestFormProperties {
	}
	export function CreateGetChannelMessageStatusRequestFormGroup() {
		return new FormGroup<GetChannelMessageStatusRequestFormProperties>({
		});

	}

	export interface GetMessagingSessionEndpointRequest {
	}
	export interface GetMessagingSessionEndpointRequestFormProperties {
	}
	export function CreateGetMessagingSessionEndpointRequestFormGroup() {
		return new FormGroup<GetMessagingSessionEndpointRequestFormProperties>({
		});

	}

	export interface GetMessagingStreamingConfigurationsRequest {
	}
	export interface GetMessagingStreamingConfigurationsRequestFormProperties {
	}
	export function CreateGetMessagingStreamingConfigurationsRequestFormGroup() {
		return new FormGroup<GetMessagingStreamingConfigurationsRequestFormProperties>({
		});

	}

	export interface ListChannelBansRequest {
	}
	export interface ListChannelBansRequestFormProperties {
	}
	export function CreateListChannelBansRequestFormGroup() {
		return new FormGroup<ListChannelBansRequestFormProperties>({
		});

	}

	export interface ListChannelFlowsRequest {
	}
	export interface ListChannelFlowsRequestFormProperties {
	}
	export function CreateListChannelFlowsRequestFormGroup() {
		return new FormGroup<ListChannelFlowsRequestFormProperties>({
		});

	}

	export interface ListChannelMembershipsForAppInstanceUserRequest {
	}
	export interface ListChannelMembershipsForAppInstanceUserRequestFormProperties {
	}
	export function CreateListChannelMembershipsForAppInstanceUserRequestFormGroup() {
		return new FormGroup<ListChannelMembershipsForAppInstanceUserRequestFormProperties>({
		});

	}

	export interface ListChannelMembershipsRequest {
	}
	export interface ListChannelMembershipsRequestFormProperties {
	}
	export function CreateListChannelMembershipsRequestFormGroup() {
		return new FormGroup<ListChannelMembershipsRequestFormProperties>({
		});

	}

	export enum SortOrder { ASCENDING = 'ASCENDING', DESCENDING = 'DESCENDING' }

	export interface ListChannelMessagesRequest {
	}
	export interface ListChannelMessagesRequestFormProperties {
	}
	export function CreateListChannelMessagesRequestFormGroup() {
		return new FormGroup<ListChannelMessagesRequestFormProperties>({
		});

	}

	export interface ListChannelModeratorsRequest {
	}
	export interface ListChannelModeratorsRequestFormProperties {
	}
	export function CreateListChannelModeratorsRequestFormGroup() {
		return new FormGroup<ListChannelModeratorsRequestFormProperties>({
		});

	}

	export interface ListChannelsAssociatedWithChannelFlowRequest {
	}
	export interface ListChannelsAssociatedWithChannelFlowRequestFormProperties {
	}
	export function CreateListChannelsAssociatedWithChannelFlowRequestFormGroup() {
		return new FormGroup<ListChannelsAssociatedWithChannelFlowRequestFormProperties>({
		});

	}

	export interface ListChannelsModeratedByAppInstanceUserRequest {
	}
	export interface ListChannelsModeratedByAppInstanceUserRequestFormProperties {
	}
	export function CreateListChannelsModeratedByAppInstanceUserRequestFormGroup() {
		return new FormGroup<ListChannelsModeratedByAppInstanceUserRequestFormProperties>({
		});

	}

	export interface ListChannelsRequest {
	}
	export interface ListChannelsRequestFormProperties {
	}
	export function CreateListChannelsRequestFormGroup() {
		return new FormGroup<ListChannelsRequestFormProperties>({
		});

	}

	export interface ListSubChannelsRequest {
	}
	export interface ListSubChannelsRequestFormProperties {
	}
	export function CreateListSubChannelsRequestFormGroup() {
		return new FormGroup<ListSubChannelsRequestFormProperties>({
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

	export interface PutChannelExpirationSettingsRequest {
		ExpirationSettings?: ExpirationSettings;
	}
	export interface PutChannelExpirationSettingsRequestFormProperties {
	}
	export function CreatePutChannelExpirationSettingsRequestFormGroup() {
		return new FormGroup<PutChannelExpirationSettingsRequestFormProperties>({
		});

	}

	export interface PutChannelMembershipPreferencesRequest {

		/** Required */
		Preferences: ChannelMembershipPreferences;
	}
	export interface PutChannelMembershipPreferencesRequestFormProperties {
	}
	export function CreatePutChannelMembershipPreferencesRequestFormGroup() {
		return new FormGroup<PutChannelMembershipPreferencesRequestFormProperties>({
		});

	}

	export interface PutMessagingStreamingConfigurationsRequest {

		/** Required */
		StreamingConfigurations: Array<StreamingConfiguration>;
	}
	export interface PutMessagingStreamingConfigurationsRequestFormProperties {
	}
	export function CreatePutMessagingStreamingConfigurationsRequestFormGroup() {
		return new FormGroup<PutMessagingStreamingConfigurationsRequestFormProperties>({
		});

	}

	export interface RedactChannelMessageRequest {
		SubChannelId?: string;
	}
	export interface RedactChannelMessageRequestFormProperties {
		SubChannelId: FormControl<string | null | undefined>,
	}
	export function CreateRedactChannelMessageRequestFormGroup() {
		return new FormGroup<RedactChannelMessageRequestFormProperties>({
			SubChannelId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchChannelsRequest {

		/** Required */
		Fields: Array<SearchField>;
	}
	export interface SearchChannelsRequestFormProperties {
	}
	export function CreateSearchChannelsRequestFormGroup() {
		return new FormGroup<SearchChannelsRequestFormProperties>({
		});

	}

	export interface SendChannelMessageRequest {

		/** Required */
		Content: string;

		/** Required */
		Type: ChannelMessageType;

		/** Required */
		Persistence: ChannelMessagePersistenceType;
		Metadata?: string;

		/** Required */
		ClientRequestToken: string;
		PushNotification?: PushNotificationConfiguration;
		MessageAttributes?: MessageAttributeMap;
		SubChannelId?: string;
		ContentType?: string;
		Target?: Array<Target>;
	}
	export interface SendChannelMessageRequestFormProperties {

		/** Required */
		Content: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<ChannelMessageType | null | undefined>,

		/** Required */
		Persistence: FormControl<ChannelMessagePersistenceType | null | undefined>,
		Metadata: FormControl<string | null | undefined>,

		/** Required */
		ClientRequestToken: FormControl<string | null | undefined>,
		SubChannelId: FormControl<string | null | undefined>,
		ContentType: FormControl<string | null | undefined>,
	}
	export function CreateSendChannelMessageRequestFormGroup() {
		return new FormGroup<SendChannelMessageRequestFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ChannelMessageType | null | undefined>(undefined, [Validators.required]),
			Persistence: new FormControl<ChannelMessagePersistenceType | null | undefined>(undefined, [Validators.required]),
			Metadata: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SubChannelId: new FormControl<string | null | undefined>(undefined),
			ContentType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateChannelFlowRequest {

		/** Required */
		Processors: Array<Processor>;

		/** Required */
		Name: string;
	}
	export interface UpdateChannelFlowRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelFlowRequestFormGroup() {
		return new FormGroup<UpdateChannelFlowRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateChannelMessageRequest {

		/** Required */
		Content: string;
		Metadata?: string;
		SubChannelId?: string;
		ContentType?: string;
	}
	export interface UpdateChannelMessageRequestFormProperties {

		/** Required */
		Content: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
		SubChannelId: FormControl<string | null | undefined>,
		ContentType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelMessageRequestFormGroup() {
		return new FormGroup<UpdateChannelMessageRequestFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Metadata: new FormControl<string | null | undefined>(undefined),
			SubChannelId: new FormControl<string | null | undefined>(undefined),
			ContentType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateChannelReadMarkerRequest {
	}
	export interface UpdateChannelReadMarkerRequestFormProperties {
	}
	export function CreateUpdateChannelReadMarkerRequestFormGroup() {
		return new FormGroup<UpdateChannelReadMarkerRequestFormProperties>({
		});

	}

	export interface UpdateChannelRequest {
		Name?: string;
		Mode?: ChannelMode;
		Metadata?: string;
	}
	export interface UpdateChannelRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Mode: FormControl<ChannelMode | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelRequestFormGroup() {
		return new FormGroup<UpdateChannelRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Mode: new FormControl<ChannelMode | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Associates a channel flow with a channel. Once associated, all messages to that channel go through channel flow processors. To stop processing, use the <code>DisassociateChannelFlow</code> API.</p> <note> <p>Only administrators or channel moderators can associate a channel flow. The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Put channels/{channelArn}/channel-flow#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel.
		 *     Min length: 5    Max length: 1600
		 * @return {void} Success
		 */
		AssociateChannelFlow(channelArn: string, requestBody: AssociateChannelFlowPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/channel-flow#x-amz-chime-bearer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a specified number of users and bots to a channel.
		 * Post channels/{channelArn}/memberships#operation=batch-create&x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel to which you're adding users or bots.
		 *     Min length: 5    Max length: 1600
		 * @return {BatchCreateChannelMembershipResponse} Success
		 */
		BatchCreateChannelMembership(channelArn: string, operation: BatchCreateChannelMembershipOperation, requestBody: BatchCreateChannelMembershipPostBody): Observable<BatchCreateChannelMembershipResponse> {
			return this.http.post<BatchCreateChannelMembershipResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/memberships#operation=batch-create&x-amz-chime-bearer&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Calls back Amazon Chime SDK messaging with a processing response message. This should be invoked from the processor Lambda. This is a developer API.</p> <p>You can return one of the following processing responses:</p> <ul> <li> <p>Update message content or metadata</p> </li> <li> <p>Deny a message</p> </li> <li> <p>Make no changes to the message</p> </li> </ul>
		 * Post channels/{channelArn}#operation=channel-flow-callback
		 * @param {string} channelArn The ARN of the channel.
		 *     Min length: 5    Max length: 1600
		 * @return {ChannelFlowCallbackResponse} Success
		 */
		ChannelFlowCallback(channelArn: string, operation: ChannelFlowCallbackOperation, requestBody: ChannelFlowCallbackPostBody): Observable<ChannelFlowCallbackResponse> {
			return this.http.post<ChannelFlowCallbackResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '#operation=channel-flow-callback&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a channel to which you can add users and send messages.</p> <p> <b>Restriction</b>: You can't change a channel's privacy.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Post channels#x-amz-chime-bearer
		 * @return {void} 
		 */
		CreateChannel(requestBody: CreateChannelPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'channels#x-amz-chime-bearer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Permanently bans a member from a channel. Moderators can't add banned members to a channel. To undo a ban, you first have to <code>DeleteChannelBan</code>, and then <code>CreateChannelMembership</code>. Bans are cleaned up when you delete users or channels.</p> <p>If you ban a user who is already part of a channel, that user is automatically kicked from the channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Post channels/{channelArn}/bans#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the ban request.
		 *     Min length: 5    Max length: 1600
		 * @return {void} 
		 */
		CreateChannelBan(channelArn: string, requestBody: CreateChannelBanPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/bans#x-amz-chime-bearer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all the users and bots banned from a particular channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Get channels/{channelArn}/bans#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel.
		 *     Min length: 5    Max length: 1600
		 * @param {number} max_results The maximum number of bans that you want returned.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} next_token The token passed by previous API calls until all requested bans are returned.
		 *     Min length: 0    Max length: 2048
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChannelBansResponse} Success
		 */
		ListChannelBans(channelArn: string, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListChannelBansResponse> {
			return this.http.get<ListChannelBansResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/bans#x-amz-chime-bearer&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a channel flow, a container for processors. Processors are AWS Lambda functions that perform actions on chat messages, such as stripping out profanity. You can associate channel flows with channels, and the processors in the channel flow then take action on all messages sent to that channel. This is a developer API.</p> <p>Channel flows process the following items:</p> <ol> <li> <p>New and updated messages</p> </li> <li> <p>Persistent and non-persistent messages</p> </li> <li> <p>The Standard message type</p> </li> </ol> <note> <p>Channel flows don't process Control or System messages. For more information about the message types provided by Chime SDK messaging, refer to <a href="https://docs.aws.amazon.com/chime/latest/dg/using-the-messaging-sdk.html#msg-types">Message types</a> in the <i>Amazon Chime developer guide</i>.</p> </note>
		 * Post channel-flows
		 * @return {void} 
		 */
		CreateChannelFlow(requestBody: CreateChannelFlowPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'channel-flows', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds a member to a channel. The <code>InvitedBy</code> field in <code>ChannelMembership</code> is derived from the request header. A channel member can:</p> <ul> <li> <p>List messages</p> </li> <li> <p>Send messages</p> </li> <li> <p>Receive messages</p> </li> <li> <p>Edit their own messages</p> </li> <li> <p>Leave the channel</p> </li> </ul> <p>Privacy settings impact this action as follows:</p> <ul> <li> <p>Public Channels: You do not need to be a member to list messages, but you must be a member to send messages.</p> </li> <li> <p>Private Channels: You must be a member to list or send messages.</p> </li> </ul> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUserArn</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Post channels/{channelArn}/memberships#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel to which you're adding users.
		 *     Min length: 5    Max length: 1600
		 * @return {void} 
		 */
		CreateChannelMembership(channelArn: string, requestBody: CreateChannelMembershipPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/memberships#x-amz-chime-bearer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all channel memberships in a channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note> <p>If you want to list the channels to which a specific app instance user belongs, see the <a href="https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_ListChannelMembershipsForAppInstanceUser.html">ListChannelMembershipsForAppInstanceUser</a> API.</p>
		 * Get channels/{channelArn}/memberships#x-amz-chime-bearer
		 * @param {string} channelArn The maximum number of channel memberships that you want returned.
		 *     Min length: 5    Max length: 1600
		 * @param {ChannelMembershipType} type The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are returned as part of <code>ListChannelMemberships</code> if no type is specified. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals <code>HIDDEN</code>.
		 * @param {number} max_results The maximum number of channel memberships that you want returned.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} next_token The token passed by previous API calls until all requested channel memberships are returned.
		 *     Min length: 0    Max length: 2048
		 * @param {string} sub_channel_id <p>The ID of the SubChannel in the request.</p> <note> <p>Only required when listing a user's memberships in a particular sub-channel of an elastic channel.</p> </note>
		 *     Min length: 1    Max length: 128
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChannelMembershipsResponse} Success
		 */
		ListChannelMemberships(channelArn: string, type: ChannelMembershipType | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, sub_channel_id: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListChannelMembershipsResponse> {
			return this.http.get<ListChannelMembershipsResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/memberships#x-amz-chime-bearer&type=' + type + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&sub_channel_id=' + (sub_channel_id == null ? '' : encodeURIComponent(sub_channel_id)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a new <code>ChannelModerator</code>. A channel moderator can:</p> <ul> <li> <p>Add and remove other members of the channel.</p> </li> <li> <p>Add and remove other moderators of the channel.</p> </li> <li> <p>Add and remove user bans for the channel.</p> </li> <li> <p>Redact messages in the channel.</p> </li> <li> <p>List messages in the channel.</p> </li> </ul> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>of the user that makes the API call as the value in the header.</p> </note>
		 * Post channels/{channelArn}/moderators#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel.
		 *     Min length: 5    Max length: 1600
		 * @return {void} 
		 */
		CreateChannelModerator(channelArn: string, requestBody: CreateChannelModeratorPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/moderators#x-amz-chime-bearer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all the moderators for a channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Get channels/{channelArn}/moderators#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel.
		 *     Min length: 5    Max length: 1600
		 * @param {number} max_results The maximum number of moderators that you want returned.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} next_token The token passed by previous API calls until all requested moderators are returned.
		 *     Min length: 0    Max length: 2048
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChannelModeratorsResponse} Success
		 */
		ListChannelModerators(channelArn: string, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListChannelModeratorsResponse> {
			return this.http.get<ListChannelModeratorsResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/moderators#x-amz-chime-bearer&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Immediately makes a channel and its memberships inaccessible and marks them for deletion. This is an irreversible process.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUserArn</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Delete channels/{channelArn}#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel being deleted.
		 *     Min length: 5    Max length: 1600
		 * @return {void} 
		 */
		DeleteChannel(channelArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '#x-amz-chime-bearer', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the full details of a channel in an Amazon Chime <code>AppInstance</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Get channels/{channelArn}#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel.
		 *     Min length: 5    Max length: 1600
		 * @return {DescribeChannelResponse} Success
		 */
		DescribeChannel(channelArn: string): Observable<DescribeChannelResponse> {
			return this.http.get<DescribeChannelResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '#x-amz-chime-bearer', {});
		}

		/**
		 * <p>Update a channel's attributes.</p> <p> <b>Restriction</b>: You can't change a channel's privacy. </p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Put channels/{channelArn}#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel.
		 *     Min length: 5    Max length: 1600
		 * @return {UpdateChannelResponse} Success
		 */
		UpdateChannel(channelArn: string, requestBody: UpdateChannelPutBody): Observable<UpdateChannelResponse> {
			return this.http.put<UpdateChannelResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '#x-amz-chime-bearer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes a member from a channel's ban list.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Delete channels/{channelArn}/bans/{memberArn}#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel from which the <code>AppInstanceUser</code> was banned.
		 *     Min length: 5    Max length: 1600
		 * @param {string} memberArn The ARN of the <code>AppInstanceUser</code> that you want to reinstate.
		 *     Min length: 5    Max length: 1600
		 * @return {void} 
		 */
		DeleteChannelBan(channelArn: string, memberArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/bans/' + (memberArn == null ? '' : encodeURIComponent(memberArn)) + '#x-amz-chime-bearer', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the full details of a channel ban.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Get channels/{channelArn}/bans/{memberArn}#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel from which the user is banned.
		 *     Min length: 5    Max length: 1600
		 * @param {string} memberArn The <code>AppInstanceUserArn</code> of the member being banned.
		 *     Min length: 5    Max length: 1600
		 * @return {DescribeChannelBanResponse} Success
		 */
		DescribeChannelBan(channelArn: string, memberArn: string): Observable<DescribeChannelBanResponse> {
			return this.http.get<DescribeChannelBanResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/bans/' + (memberArn == null ? '' : encodeURIComponent(memberArn)) + '#x-amz-chime-bearer', {});
		}

		/**
		 * <p>Deletes a channel flow, an irreversible process. This is a developer API.</p> <note> <p> This API works only when the channel flow is not associated with any channel. To get a list of all channels that a channel flow is associated with, use the <code>ListChannelsAssociatedWithChannelFlow</code> API. Use the <code>DisassociateChannelFlow</code> API to disassociate a channel flow from all channels. </p> </note>
		 * Delete channel-flows/{channelFlowArn}
		 * @param {string} channelFlowArn The ARN of the channel flow.
		 *     Min length: 5    Max length: 1600
		 * @return {void} 
		 */
		DeleteChannelFlow(channelFlowArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channel-flows/' + (channelFlowArn == null ? '' : encodeURIComponent(channelFlowArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the full details of a channel flow in an Amazon Chime <code>AppInstance</code>. This is a developer API.
		 * Get channel-flows/{channelFlowArn}
		 * @param {string} channelFlowArn The ARN of the channel flow.
		 *     Min length: 5    Max length: 1600
		 * @return {DescribeChannelFlowResponse} Success
		 */
		DescribeChannelFlow(channelFlowArn: string): Observable<DescribeChannelFlowResponse> {
			return this.http.get<DescribeChannelFlowResponse>(this.baseUri + 'channel-flows/' + (channelFlowArn == null ? '' : encodeURIComponent(channelFlowArn)), {});
		}

		/**
		 * Updates channel flow attributes. This is a developer API.
		 * Put channel-flows/{channelFlowArn}
		 * @param {string} channelFlowArn The ARN of the channel flow.
		 *     Min length: 5    Max length: 1600
		 * @return {UpdateChannelFlowResponse} Success
		 */
		UpdateChannelFlow(channelFlowArn: string, requestBody: UpdateChannelFlowPutBody): Observable<UpdateChannelFlowResponse> {
			return this.http.put<UpdateChannelFlowResponse>(this.baseUri + 'channel-flows/' + (channelFlowArn == null ? '' : encodeURIComponent(channelFlowArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes a member from a channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>
		 * Delete channels/{channelArn}/memberships/{memberArn}#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel from which you want to remove the user.
		 *     Min length: 5    Max length: 1600
		 * @param {string} memberArn The <code>AppInstanceUserArn</code> of the member that you're removing from the channel.
		 *     Min length: 5    Max length: 1600
		 * @param {string} sub_channel_id <p>The ID of the SubChannel in the request.</p> <note> <p>Only for use by moderators.</p> </note>
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		DeleteChannelMembership(channelArn: string, memberArn: string, sub_channel_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/memberships/' + (memberArn == null ? '' : encodeURIComponent(memberArn)) + '#x-amz-chime-bearer&sub_channel_id=' + (sub_channel_id == null ? '' : encodeURIComponent(sub_channel_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the full details of a user's channel membership.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Get channels/{channelArn}/memberships/{memberArn}#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel.
		 *     Min length: 5    Max length: 1600
		 * @param {string} memberArn The <code>AppInstanceUserArn</code> of the member.
		 *     Min length: 5    Max length: 1600
		 * @param {string} sub_channel_id <p>The ID of the SubChannel in the request. The response contains an <code>ElasticChannelConfiguration</code> object.</p> <note> <p>Only required to get a user’s SubChannel membership details.</p> </note>
		 *     Min length: 1    Max length: 128
		 * @return {DescribeChannelMembershipResponse} Success
		 */
		DescribeChannelMembership(channelArn: string, memberArn: string, sub_channel_id: string | null | undefined): Observable<DescribeChannelMembershipResponse> {
			return this.http.get<DescribeChannelMembershipResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/memberships/' + (memberArn == null ? '' : encodeURIComponent(memberArn)) + '#x-amz-chime-bearer&sub_channel_id=' + (sub_channel_id == null ? '' : encodeURIComponent(sub_channel_id)), {});
		}

		/**
		 * <p>Deletes a channel message. Only admins can perform this action. Deletion makes messages inaccessible immediately. A background process deletes any revisions created by <code>UpdateChannelMessage</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Delete channels/{channelArn}/messages/{messageId}#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel.
		 *     Min length: 5    Max length: 1600
		 * @param {string} messageId The ID of the message being deleted.
		 *     Min length: 1    Max length: 128
		 * @param {string} sub_channel_id <p>The ID of the SubChannel in the request.</p> <note> <p>Only required when deleting messages in a SubChannel that the user belongs to.</p> </note>
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		DeleteChannelMessage(channelArn: string, messageId: string, sub_channel_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)) + '#x-amz-chime-bearer&sub_channel_id=' + (sub_channel_id == null ? '' : encodeURIComponent(sub_channel_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets the full details of a channel message.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Get channels/{channelArn}/messages/{messageId}#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel.
		 *     Min length: 5    Max length: 1600
		 * @param {string} messageId The ID of the message.
		 *     Min length: 1    Max length: 128
		 * @param {string} sub_channel_id <p>The ID of the SubChannel in the request.</p> <note> <p>Only required when getting messages in a SubChannel that the user belongs to.</p> </note>
		 *     Min length: 1    Max length: 128
		 * @return {GetChannelMessageResponse} Success
		 */
		GetChannelMessage(channelArn: string, messageId: string, sub_channel_id: string | null | undefined): Observable<GetChannelMessageResponse> {
			return this.http.get<GetChannelMessageResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)) + '#x-amz-chime-bearer&sub_channel_id=' + (sub_channel_id == null ? '' : encodeURIComponent(sub_channel_id)), {});
		}

		/**
		 * <p>Updates the content of a message.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Put channels/{channelArn}/messages/{messageId}#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel.
		 *     Min length: 5    Max length: 1600
		 * @param {string} messageId The ID string of the message being updated.
		 *     Min length: 1    Max length: 128
		 * @return {UpdateChannelMessageResponse} Success
		 */
		UpdateChannelMessage(channelArn: string, messageId: string, requestBody: UpdateChannelMessagePutBody): Observable<UpdateChannelMessageResponse> {
			return this.http.put<UpdateChannelMessageResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)) + '#x-amz-chime-bearer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a channel moderator.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Delete channels/{channelArn}/moderators/{channelModeratorArn}#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel.
		 *     Min length: 5    Max length: 1600
		 * @param {string} channelModeratorArn The <code>AppInstanceUserArn</code> of the moderator being deleted.
		 *     Min length: 5    Max length: 1600
		 * @return {void} 
		 */
		DeleteChannelModerator(channelArn: string, channelModeratorArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/moderators/' + (channelModeratorArn == null ? '' : encodeURIComponent(channelModeratorArn)) + '#x-amz-chime-bearer', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the full details of a single ChannelModerator.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>
		 * Get channels/{channelArn}/moderators/{channelModeratorArn}#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel.
		 *     Min length: 5    Max length: 1600
		 * @param {string} channelModeratorArn The <code>AppInstanceUserArn</code> of the channel moderator.
		 *     Min length: 5    Max length: 1600
		 * @return {DescribeChannelModeratorResponse} Success
		 */
		DescribeChannelModerator(channelArn: string, channelModeratorArn: string): Observable<DescribeChannelModeratorResponse> {
			return this.http.get<DescribeChannelModeratorResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/moderators/' + (channelModeratorArn == null ? '' : encodeURIComponent(channelModeratorArn)) + '#x-amz-chime-bearer', {});
		}

		/**
		 * Deletes the streaming configurations for an <code>AppInstance</code>. For more information, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/streaming-export.html">Streaming messaging data</a> in the <i>Amazon Chime SDK Developer Guide</i>.
		 * Delete app-instances/{appInstanceArn}/streaming-configurations
		 * @param {string} appInstanceArn The ARN of the streaming configurations being deleted.
		 *     Min length: 5    Max length: 1600
		 * @return {void} 
		 */
		DeleteMessagingStreamingConfigurations(appInstanceArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)) + '/streaming-configurations', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the data streaming configuration for an <code>AppInstance</code>. For more information, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/streaming-export.html">Streaming messaging data</a> in the <i>Amazon Chime SDK Developer Guide</i>.
		 * Get app-instances/{appInstanceArn}/streaming-configurations
		 * @param {string} appInstanceArn The ARN of the streaming configurations.
		 *     Min length: 5    Max length: 1600
		 * @return {GetMessagingStreamingConfigurationsResponse} Success
		 */
		GetMessagingStreamingConfigurations(appInstanceArn: string): Observable<GetMessagingStreamingConfigurationsResponse> {
			return this.http.get<GetMessagingStreamingConfigurationsResponse>(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)) + '/streaming-configurations', {});
		}

		/**
		 * Sets the data streaming configuration for an <code>AppInstance</code>. For more information, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/streaming-export.html">Streaming messaging data</a> in the <i>Amazon Chime SDK Developer Guide</i>.
		 * Put app-instances/{appInstanceArn}/streaming-configurations
		 * @param {string} appInstanceArn The ARN of the streaming configuration.
		 *     Min length: 5    Max length: 1600
		 * @return {PutMessagingStreamingConfigurationsResponse} Success
		 */
		PutMessagingStreamingConfigurations(appInstanceArn: string, requestBody: PutMessagingStreamingConfigurationsPutBody): Observable<PutMessagingStreamingConfigurationsResponse> {
			return this.http.put<PutMessagingStreamingConfigurationsResponse>(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)) + '/streaming-configurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Returns the details of a channel based on the membership of the specified <code>AppInstanceUser</code> or <code>AppInstanceBot</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Get channels/{channelArn}#scope=app-instance-user-membership&app-instance-user-arn&x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel to which the user belongs.
		 *     Min length: 5    Max length: 1600
		 * @param {string} app_instance_user_arn The ARN of the user or bot in a channel.
		 *     Min length: 5    Max length: 1600
		 * @return {DescribeChannelMembershipForAppInstanceUserResponse} Success
		 */
		DescribeChannelMembershipForAppInstanceUser(channelArn: string, app_instance_user_arn: string, scope: DescribeChannelMembershipForAppInstanceUserScope): Observable<DescribeChannelMembershipForAppInstanceUserResponse> {
			return this.http.get<DescribeChannelMembershipForAppInstanceUserResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '#scope=app-instance-user-membership&app-instance-user-arn&x-amz-chime-bearer&app_instance_user_arn=' + (app_instance_user_arn == null ? '' : encodeURIComponent(app_instance_user_arn)) + '&scope=' + scope, {});
		}

		/**
		 * <p>Returns the full details of a channel moderated by the specified <code>AppInstanceUser</code> or <code>AppInstanceBot</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Get channels/{channelArn}#scope=app-instance-user-moderated-channel&app-instance-user-arn&x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the moderated channel.
		 *     Min length: 5    Max length: 1600
		 * @param {string} app_instance_user_arn The ARN of the user or bot in the moderated channel.
		 *     Min length: 5    Max length: 1600
		 * @return {DescribeChannelModeratedByAppInstanceUserResponse} Success
		 */
		DescribeChannelModeratedByAppInstanceUser(channelArn: string, app_instance_user_arn: string, scope: DescribeChannelModeratedByAppInstanceUserScope): Observable<DescribeChannelModeratedByAppInstanceUserResponse> {
			return this.http.get<DescribeChannelModeratedByAppInstanceUserResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '#scope=app-instance-user-moderated-channel&app-instance-user-arn&x-amz-chime-bearer&app_instance_user_arn=' + (app_instance_user_arn == null ? '' : encodeURIComponent(app_instance_user_arn)) + '&scope=' + scope, {});
		}

		/**
		 * <p>Disassociates a channel flow from all its channels. Once disassociated, all messages to that channel stop going through the channel flow processor.</p> <note> <p>Only administrators or channel moderators can disassociate a channel flow.</p> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Delete channels/{channelArn}/channel-flow/{channelFlowArn}#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel.
		 *     Min length: 5    Max length: 1600
		 * @param {string} channelFlowArn The ARN of the channel flow.
		 *     Min length: 5    Max length: 1600
		 * @return {void} 
		 */
		DisassociateChannelFlow(channelArn: string, channelFlowArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/channel-flow/' + (channelFlowArn == null ? '' : encodeURIComponent(channelFlowArn)) + '#x-amz-chime-bearer', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets the membership preferences of an <code>AppInstanceUser</code> or <code>AppInstanceBot</code> for the specified channel. A user or a bot must be a member of the channel and own the membership in order to retrieve membership preferences. Users or bots in the <code>AppInstanceAdmin</code> and channel moderator roles can't retrieve preferences for other users or bots. Banned users or bots can't retrieve membership preferences for the channel from which they are banned.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Get channels/{channelArn}/memberships/{memberArn}/preferences#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel.
		 *     Min length: 5    Max length: 1600
		 * @param {string} memberArn The <code>AppInstanceUserArn</code> of the member retrieving the preferences.
		 *     Min length: 5    Max length: 1600
		 * @return {GetChannelMembershipPreferencesResponse} Success
		 */
		GetChannelMembershipPreferences(channelArn: string, memberArn: string): Observable<GetChannelMembershipPreferencesResponse> {
			return this.http.get<GetChannelMembershipPreferencesResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/memberships/' + (memberArn == null ? '' : encodeURIComponent(memberArn)) + '/preferences#x-amz-chime-bearer', {});
		}

		/**
		 * <p>Sets the membership preferences of an <code>AppInstanceUser</code> or <code>AppInstanceBot</code> for the specified channel. The user or bot must be a member of the channel. Only the user or bot who owns the membership can set preferences. Users or bots in the <code>AppInstanceAdmin</code> and channel moderator roles can't set preferences for other users. Banned users or bots can't set membership preferences for the channel from which they are banned.</p> <note> <p>The x-amz-chime-bearer request header is mandatory. Use the ARN of an <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Put channels/{channelArn}/memberships/{memberArn}/preferences#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel.
		 *     Min length: 5    Max length: 1600
		 * @param {string} memberArn The ARN of the member setting the preferences.
		 *     Min length: 5    Max length: 1600
		 * @return {PutChannelMembershipPreferencesResponse} Success
		 */
		PutChannelMembershipPreferences(channelArn: string, memberArn: string, requestBody: PutChannelMembershipPreferencesPutBody): Observable<PutChannelMembershipPreferencesResponse> {
			return this.http.put<PutChannelMembershipPreferencesResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/memberships/' + (memberArn == null ? '' : encodeURIComponent(memberArn)) + '/preferences#x-amz-chime-bearer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets message status for a specified <code>messageId</code>. Use this API to determine the intermediate status of messages going through channel flow processing. The API provides an alternative to retrieving message status if the event was not received because a client wasn't connected to a websocket. </p> <p>Messages can have any one of these statuses.</p> <dl> <dt>SENT</dt> <dd> <p>Message processed successfully</p> </dd> <dt>PENDING</dt> <dd> <p>Ongoing processing</p> </dd> <dt>FAILED</dt> <dd> <p>Processing failed</p> </dd> <dt>DENIED</dt> <dd> <p>Message denied by the processor</p> </dd> </dl> <note> <ul> <li> <p>This API does not return statuses for denied messages, because we don't store them once the processor denies them. </p> </li> <li> <p>Only the message sender can invoke this API.</p> </li> <li> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </li> </ul> </note>
		 * Get channels/{channelArn}/messages/{messageId}#scope=message-status&x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel
		 *     Min length: 5    Max length: 1600
		 * @param {string} messageId The ID of the message.
		 *     Min length: 1    Max length: 128
		 * @param {string} sub_channel_id <p>The ID of the SubChannel in the request.</p> <note> <p>Only required when getting message status in a SubChannel that the user belongs to.</p> </note>
		 *     Min length: 1    Max length: 128
		 * @return {GetChannelMessageStatusResponse} Success
		 */
		GetChannelMessageStatus(channelArn: string, messageId: string, sub_channel_id: string | null | undefined, scope: GetChannelMessageStatusScope): Observable<GetChannelMessageStatusResponse> {
			return this.http.get<GetChannelMessageStatusResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)) + '#scope=message-status&x-amz-chime-bearer&sub_channel_id=' + (sub_channel_id == null ? '' : encodeURIComponent(sub_channel_id)) + '&scope=' + scope, {});
		}

		/**
		 * The details of the endpoint for the messaging session.
		 * Get endpoints/messaging-session
		 * @return {GetMessagingSessionEndpointResponse} Success
		 */
		GetMessagingSessionEndpoint(): Observable<GetMessagingSessionEndpointResponse> {
			return this.http.get<GetMessagingSessionEndpointResponse>(this.baseUri + 'endpoints/messaging-session', {});
		}

		/**
		 * Returns a paginated lists of all the channel flows created under a single Chime. This is a developer API.
		 * Get channel-flows#app-instance-arn
		 * @param {string} app_instance_arn The ARN of the app instance.
		 *     Min length: 5    Max length: 1600
		 * @param {number} max_results The maximum number of channel flows that you want to return.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} next_token The token passed by previous API calls until all requested channel flows are returned.
		 *     Min length: 0    Max length: 2048
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChannelFlowsResponse} Success
		 */
		ListChannelFlows(app_instance_arn: string, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListChannelFlowsResponse> {
			return this.http.get<ListChannelFlowsResponse>(this.baseUri + 'channel-flows#app-instance-arn?app_instance_arn=' + (app_instance_arn == null ? '' : encodeURIComponent(app_instance_arn)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p> Lists all channels that an <code>AppInstanceUser</code> or <code>AppInstanceBot</code> is a part of. Only an <code>AppInstanceAdmin</code> can call the API with a user ARN that is not their own. </p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Get channels#scope=app-instance-user-memberships&x-amz-chime-bearer
		 * @param {string} app_instance_user_arn The ARN of the user or bot.
		 *     Min length: 5    Max length: 1600
		 * @param {number} max_results The maximum number of users that you want returned.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} next_token The token returned from previous API requests until the number of channel memberships is reached.
		 *     Min length: 0    Max length: 2048
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChannelMembershipsForAppInstanceUserResponse} Success
		 */
		ListChannelMembershipsForAppInstanceUser(app_instance_user_arn: string | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined, scope: ListChannelMembershipsForAppInstanceUserScope): Observable<ListChannelMembershipsForAppInstanceUserResponse> {
			return this.http.get<ListChannelMembershipsForAppInstanceUserResponse>(this.baseUri + 'channels#scope=app-instance-user-memberships&x-amz-chime-bearer?app_instance_user_arn=' + (app_instance_user_arn == null ? '' : encodeURIComponent(app_instance_user_arn)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&scope=' + scope, {});
		}

		/**
		 * <p>List all the messages in a channel. Returns a paginated list of <code>ChannelMessages</code>. By default, sorted by creation timestamp in descending order.</p> <note> <p>Redacted messages appear in the results as empty, since they are only redacted, not deleted. Deleted messages do not appear in the results. This action always returns the latest version of an edited message.</p> <p>Also, the <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Get channels/{channelArn}/messages#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel.
		 *     Min length: 5    Max length: 1600
		 * @param {SortOrder} sort_order The order in which you want messages sorted. Default is Descending, based on time created.
		 * @param {Date} not_before The initial or starting time stamp for your requested messages.
		 * @param {Date} not_after The final or ending time stamp for your requested messages.
		 * @param {number} max_results The maximum number of messages that you want returned.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} next_token The token passed by previous API calls until all requested messages are returned.
		 *     Min length: 0    Max length: 2048
		 * @param {string} sub_channel_id <p>The ID of the SubChannel in the request.</p> <note> <p>Only required when listing the messages in a SubChannel that the user belongs to.</p> </note>
		 *     Min length: 1    Max length: 128
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChannelMessagesResponse} Success
		 */
		ListChannelMessages(channelArn: string, sort_order: SortOrder | null | undefined, not_before: Date | null | undefined, not_after: Date | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, sub_channel_id: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListChannelMessagesResponse> {
			return this.http.get<ListChannelMessagesResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/messages#x-amz-chime-bearer&sort_order=' + sort_order + '&not_before=' + not_before?.toISOString() + '&not_after=' + not_after?.toISOString() + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&sub_channel_id=' + (sub_channel_id == null ? '' : encodeURIComponent(sub_channel_id)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Sends a message to a particular channel that the member is a part of.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> <p>Also, <code>STANDARD</code> messages can be up to 4KB in size and contain metadata. Metadata is arbitrary, and you can use it in a variety of ways, such as containing a link to an attachment.</p> <p> <code>CONTROL</code> messages are limited to 30 bytes and do not contain metadata.</p> </note>
		 * Post channels/{channelArn}/messages#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel.
		 *     Min length: 5    Max length: 1600
		 * @return {void} 
		 */
		SendChannelMessage(channelArn: string, requestBody: SendChannelMessagePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/messages#x-amz-chime-bearer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all Channels created under a single Chime App as a paginated list. You can specify filters to narrow results.</p> <p class="title"> <b>Functionality &amp; restrictions</b> </p> <ul> <li> <p>Use privacy = <code>PUBLIC</code> to retrieve all public channels in the account.</p> </li> <li> <p>Only an <code>AppInstanceAdmin</code> can set privacy = <code>PRIVATE</code> to list the private channels in an account.</p> </li> </ul> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Get channels#app-instance-arn&x-amz-chime-bearer
		 * @param {string} app_instance_arn The ARN of the <code>AppInstance</code>.
		 *     Min length: 5    Max length: 1600
		 * @param {ChannelPrivacy} privacy The privacy setting. <code>PUBLIC</code> retrieves all the public channels. <code>PRIVATE</code> retrieves private channels. Only an <code>AppInstanceAdmin</code> can retrieve private channels. 
		 * @param {number} max_results The maximum number of channels that you want to return.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} next_token The token passed by previous API calls until all requested channels are returned.
		 *     Min length: 0    Max length: 2048
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChannelsResponse} Success
		 */
		ListChannels(app_instance_arn: string, privacy: ChannelPrivacy | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListChannelsResponse> {
			return this.http.get<ListChannelsResponse>(this.baseUri + 'channels#app-instance-arn&x-amz-chime-bearer?app_instance_arn=' + (app_instance_arn == null ? '' : encodeURIComponent(app_instance_arn)) + '&privacy=' + privacy + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists all channels associated with a specified channel flow. You can associate a channel flow with multiple channels, but you can only associate a channel with one channel flow. This is a developer API.
		 * Get channels#scope=channel-flow-associations&channel-flow-arn
		 * @param {string} channel_flow_arn The ARN of the channel flow.
		 *     Min length: 5    Max length: 1600
		 * @param {number} max_results The maximum number of channels that you want to return.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} next_token The token passed by previous API calls until all requested channels are returned.
		 *     Min length: 0    Max length: 2048
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChannelsAssociatedWithChannelFlowResponse} Success
		 */
		ListChannelsAssociatedWithChannelFlow(channel_flow_arn: string, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined, scope: ListChannelsAssociatedWithChannelFlowScope): Observable<ListChannelsAssociatedWithChannelFlowResponse> {
			return this.http.get<ListChannelsAssociatedWithChannelFlowResponse>(this.baseUri + 'channels#scope=channel-flow-associations&channel-flow-arn?channel_flow_arn=' + (channel_flow_arn == null ? '' : encodeURIComponent(channel_flow_arn)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&scope=' + scope, {});
		}

		/**
		 * <p>A list of the channels moderated by an <code>AppInstanceUser</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Get channels#scope=app-instance-user-moderated-channels&x-amz-chime-bearer
		 * @param {string} app_instance_user_arn The ARN of the user or bot in the moderated channel.
		 *     Min length: 5    Max length: 1600
		 * @param {number} max_results The maximum number of channels in the request.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} next_token The token returned from previous API requests until the number of channels moderated by the user is reached.
		 *     Min length: 0    Max length: 2048
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChannelsModeratedByAppInstanceUserResponse} Success
		 */
		ListChannelsModeratedByAppInstanceUser(app_instance_user_arn: string | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined, scope: ListChannelsModeratedByAppInstanceUserScope): Observable<ListChannelsModeratedByAppInstanceUserResponse> {
			return this.http.get<ListChannelsModeratedByAppInstanceUserResponse>(this.baseUri + 'channels#scope=app-instance-user-moderated-channels&x-amz-chime-bearer?app_instance_user_arn=' + (app_instance_user_arn == null ? '' : encodeURIComponent(app_instance_user_arn)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&scope=' + scope, {});
		}

		/**
		 * Lists all the SubChannels in an elastic channel when given a channel ID. Available only to the app instance admins and channel moderators of elastic channels.
		 * Get channels/{channelArn}/subchannels#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of elastic channel.
		 *     Min length: 5    Max length: 1600
		 * @param {number} max_results The maximum number of sub-channels that you want to return.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} next_token The token passed by previous API calls until all requested sub-channels are returned.
		 *     Min length: 0    Max length: 2048
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSubChannelsResponse} Success
		 */
		ListSubChannels(channelArn: string, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListSubChannelsResponse> {
			return this.http.get<ListSubChannelsResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/subchannels#x-amz-chime-bearer&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the tags applied to an Amazon Chime SDK messaging resource.
		 * Get tags#arn
		 * @param {string} arn The ARN of the resource.
		 *     Min length: 5    Max length: 1600
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(arn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags#arn?arn=' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * <p>Sets the number of days before the channel is automatically deleted.</p> <note> <ul> <li> <p>A background process deletes expired channels within 6 hours of expiration. Actual deletion times may vary.</p> </li> <li> <p>Expired channels that have not yet been deleted appear as active, and you can update their expiration settings. The system honors the new settings.</p> </li> <li> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </li> </ul> </note>
		 * Put channels/{channelArn}/expiration-settings
		 * @param {string} channelArn The ARN of the channel.
		 *     Min length: 5    Max length: 1600
		 * @return {PutChannelExpirationSettingsResponse} Success
		 */
		PutChannelExpirationSettings(channelArn: string, requestBody: PutChannelExpirationSettingsPutBody): Observable<PutChannelExpirationSettingsResponse> {
			return this.http.put<PutChannelExpirationSettingsResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/expiration-settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Redacts message content, but not metadata. The message exists in the back end, but the action returns null content, and the state shows as redacted.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Post channels/{channelArn}/messages/{messageId}#operation=redact&x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel containing the messages that you want to redact.
		 *     Min length: 5    Max length: 1600
		 * @param {string} messageId The ID of the message being redacted.
		 *     Min length: 1    Max length: 128
		 * @return {RedactChannelMessageResponse} Success
		 */
		RedactChannelMessage(channelArn: string, messageId: string, operation: RedactChannelMessageOperation, requestBody: RedactChannelMessagePostBody): Observable<RedactChannelMessageResponse> {
			return this.http.post<RedactChannelMessageResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)) + '#operation=redact&x-amz-chime-bearer&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Allows the <code>ChimeBearer</code> to search channels by channel members. Users or bots can search across the channels that they belong to. Users in the <code>AppInstanceAdmin</code> role can search across all channels.</p> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p>
		 * Post channels#operation=search
		 * @param {number} max_results The maximum number of channels that you want returned.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} next_token The token returned from previous API requests until the number of channels is reached.
		 *     Min length: 0    Max length: 2048
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchChannelsResponse} Success
		 */
		SearchChannels(max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined, operation: SearchChannelsOperation, requestBody: SearchChannelsPostBody): Observable<SearchChannelsResponse> {
			return this.http.post<SearchChannelsResponse>(this.baseUri + 'channels#operation=search?max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Applies the specified tags to the specified Amazon Chime SDK messaging resource.
		 * Post tags#operation=tag-resource
		 * @return {void} 
		 */
		TagResource(operation: TagResourceOperation, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags#operation=tag-resource?operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes the specified tags from the specified Amazon Chime SDK messaging resource.
		 * Post tags#operation=untag-resource
		 * @return {void} 
		 */
		UntagResource(operation: UntagResourceOperation, requestBody: UntagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags#operation=untag-resource?operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>The details of the time when a user last read messages in a channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in the header.</p> </note>
		 * Put channels/{channelArn}/readMarker#x-amz-chime-bearer
		 * @param {string} channelArn The ARN of the channel.
		 *     Min length: 5    Max length: 1600
		 * @return {UpdateChannelReadMarkerResponse} Success
		 */
		UpdateChannelReadMarker(channelArn: string): Observable<UpdateChannelReadMarkerResponse> {
			return this.http.put<UpdateChannelReadMarkerResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/readMarker#x-amz-chime-bearer', null, {});
		}
	}

	export interface AssociateChannelFlowPutBody {

		/**
		 * The ARN of the channel flow.
		 * Required
		 * Min length: 5
		 * Max length: 1600
		 */
		ChannelFlowArn: string;
	}
	export interface AssociateChannelFlowPutBodyFormProperties {

		/**
		 * The ARN of the channel flow.
		 * Required
		 * Min length: 5
		 * Max length: 1600
		 */
		ChannelFlowArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateChannelFlowPutBodyFormGroup() {
		return new FormGroup<AssociateChannelFlowPutBodyFormProperties>({
			ChannelFlowArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(1600), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
		});

	}

	export enum BatchCreateChannelMembershipOperation { 'batch-create' = 'batch-create' }

	export interface BatchCreateChannelMembershipPostBody {

		/** The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported by moderators. */
		Type?: ChannelMembershipType | null;

		/**
		 * The ARNs of the members you want to add to the channel. Only <code>AppInstanceUsers</code> and <code>AppInstanceBots</code> can be added as a channel member.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		MemberArns: Array<string>;

		/**
		 * <p>The ID of the SubChannel in the request. </p> <note> <p>Only required when creating membership in a SubChannel for a moderator in an elastic channel.</p> </note>
		 * Min length: 1
		 * Max length: 128
		 */
		SubChannelId?: string | null;
	}
	export interface BatchCreateChannelMembershipPostBodyFormProperties {

		/** The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported by moderators. */
		Type: FormControl<ChannelMembershipType | null | undefined>,

		/**
		 * <p>The ID of the SubChannel in the request. </p> <note> <p>Only required when creating membership in a SubChannel for a moderator in an elastic channel.</p> </note>
		 * Min length: 1
		 * Max length: 128
		 */
		SubChannelId: FormControl<string | null | undefined>,
	}
	export function CreateBatchCreateChannelMembershipPostBodyFormGroup() {
		return new FormGroup<BatchCreateChannelMembershipPostBodyFormProperties>({
			Type: new FormControl<ChannelMembershipType | null | undefined>(undefined),
			SubChannelId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[-_a-zA-Z0-9]*')]),
		});

	}

	export enum ChannelFlowCallbackOperation { 'channel-flow-callback' = 'channel-flow-callback' }

	export interface ChannelFlowCallbackPostBody {

		/**
		 * The identifier passed to the processor by the service when invoked. Use the identifier to call back the service.
		 * Required
		 * Min length: 32
		 * Max length: 64
		 */
		CallbackId: string;

		/** When a processor determines that a message needs to be <code>DENIED</code>, pass this parameter with a value of true. */
		DeleteResource?: boolean | null;

		/**
		 * Stores information about a callback.
		 * Required
		 */
		ChannelMessage: ChannelFlowCallbackPostBodyChannelMessage;
	}
	export interface ChannelFlowCallbackPostBodyFormProperties {

		/**
		 * The identifier passed to the processor by the service when invoked. Use the identifier to call back the service.
		 * Required
		 * Min length: 32
		 * Max length: 64
		 */
		CallbackId: FormControl<string | null | undefined>,

		/** When a processor determines that a message needs to be <code>DENIED</code>, pass this parameter with a value of true. */
		DeleteResource: FormControl<boolean | null | undefined>,
	}
	export function CreateChannelFlowCallbackPostBodyFormGroup() {
		return new FormGroup<ChannelFlowCallbackPostBodyFormProperties>({
			CallbackId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(32), Validators.maxLength(64)]),
			DeleteResource: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ChannelFlowCallbackPostBodyChannelMessage {
		MessageId?: string;
		Content?: string;
		Metadata?: string;
		PushNotification?: PushNotificationConfiguration;
		MessageAttributes?: MessageAttributeMap;
		SubChannelId?: string;
		ContentType?: string;
	}
	export interface ChannelFlowCallbackPostBodyChannelMessageFormProperties {
		MessageId: FormControl<string | null | undefined>,
		Content: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
		SubChannelId: FormControl<string | null | undefined>,
		ContentType: FormControl<string | null | undefined>,
	}
	export function CreateChannelFlowCallbackPostBodyChannelMessageFormGroup() {
		return new FormGroup<ChannelFlowCallbackPostBodyChannelMessageFormProperties>({
			MessageId: new FormControl<string | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
			SubChannelId: new FormControl<string | null | undefined>(undefined),
			ContentType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateChannelPostBody {

		/**
		 * The ARN of the channel request.
		 * Required
		 * Min length: 5
		 * Max length: 1600
		 */
		AppInstanceArn: string;

		/**
		 * The name of the channel.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Name: string;

		/** The channel mode: <code>UNRESTRICTED</code> or <code>RESTRICTED</code>. Administrators, moderators, and channel members can add themselves and other members to unrestricted channels. Only administrators and moderators can add members to restricted channels. */
		Mode?: ChannelMode | null;

		/** The channel's privacy level: <code>PUBLIC</code> or <code>PRIVATE</code>. Private channels aren't discoverable by users outside the channel. Public channels are discoverable by anyone in the <code>AppInstance</code>. */
		Privacy?: ChannelPrivacy | null;

		/**
		 * The metadata of the creation request. Limited to 1KB and UTF-8.
		 * Min length: 0
		 * Max length: 1024
		 */
		Metadata?: string | null;

		/**
		 * The client token for the request. An <code>Idempotency</code> token.
		 * Required
		 * Min length: 2
		 * Max length: 64
		 */
		ClientRequestToken: string;

		/**
		 * The tags for the creation request.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/**
		 * The ID of the channel in the request.
		 * Min length: 1
		 * Max length: 64
		 */
		ChannelId?: string | null;

		/**
		 * The ARNs of the channel members in the request.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		MemberArns?: Array<string>;

		/**
		 * The ARNs of the channel moderators in the request.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		ModeratorArns?: Array<string>;

		/** The attributes required to configure and create an elastic channel. An elastic channel can support a maximum of 1-million members. */
		ElasticChannelConfiguration?: CreateChannelPostBodyElasticChannelConfiguration;

		/** Settings that control the interval after which a channel is deleted. */
		ExpirationSettings?: CreateChannelPostBodyExpirationSettings;
	}
	export interface CreateChannelPostBodyFormProperties {

		/**
		 * The ARN of the channel request.
		 * Required
		 * Min length: 5
		 * Max length: 1600
		 */
		AppInstanceArn: FormControl<string | null | undefined>,

		/**
		 * The name of the channel.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/** The channel mode: <code>UNRESTRICTED</code> or <code>RESTRICTED</code>. Administrators, moderators, and channel members can add themselves and other members to unrestricted channels. Only administrators and moderators can add members to restricted channels. */
		Mode: FormControl<ChannelMode | null | undefined>,

		/** The channel's privacy level: <code>PUBLIC</code> or <code>PRIVATE</code>. Private channels aren't discoverable by users outside the channel. Public channels are discoverable by anyone in the <code>AppInstance</code>. */
		Privacy: FormControl<ChannelPrivacy | null | undefined>,

		/**
		 * The metadata of the creation request. Limited to 1KB and UTF-8.
		 * Min length: 0
		 * Max length: 1024
		 */
		Metadata: FormControl<string | null | undefined>,

		/**
		 * The client token for the request. An <code>Idempotency</code> token.
		 * Required
		 * Min length: 2
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The ID of the channel in the request.
		 * Min length: 1
		 * Max length: 64
		 */
		ChannelId: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelPostBodyFormGroup() {
		return new FormGroup<CreateChannelPostBodyFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(1600), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*')]),
			Mode: new FormControl<ChannelMode | null | undefined>(undefined),
			Privacy: new FormControl<ChannelPrivacy | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64), Validators.pattern('[-_a-zA-Z0-9]*')]),
			ChannelId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[A-Za-z0-9]([A-Za-z0-9\:\-\_\.\@]{0,62}[A-Za-z0-9])?')]),
		});

	}

	export interface CreateChannelPostBodyElasticChannelConfiguration {
		MaximumSubChannels?: number | null;
		TargetMembershipsPerSubChannel?: number | null;
		MinimumMembershipPercentage?: number | null;
	}
	export interface CreateChannelPostBodyElasticChannelConfigurationFormProperties {
		MaximumSubChannels: FormControl<number | null | undefined>,
		TargetMembershipsPerSubChannel: FormControl<number | null | undefined>,
		MinimumMembershipPercentage: FormControl<number | null | undefined>,
	}
	export function CreateCreateChannelPostBodyElasticChannelConfigurationFormGroup() {
		return new FormGroup<CreateChannelPostBodyElasticChannelConfigurationFormProperties>({
			MaximumSubChannels: new FormControl<number | null | undefined>(undefined),
			TargetMembershipsPerSubChannel: new FormControl<number | null | undefined>(undefined),
			MinimumMembershipPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateChannelPostBodyExpirationSettings {
		ExpirationDays?: number | null;
		ExpirationCriterion?: ExpirationCriterion;
	}
	export interface CreateChannelPostBodyExpirationSettingsFormProperties {
		ExpirationDays: FormControl<number | null | undefined>,
		ExpirationCriterion: FormControl<ExpirationCriterion | null | undefined>,
	}
	export function CreateCreateChannelPostBodyExpirationSettingsFormGroup() {
		return new FormGroup<CreateChannelPostBodyExpirationSettingsFormProperties>({
			ExpirationDays: new FormControl<number | null | undefined>(undefined),
			ExpirationCriterion: new FormControl<ExpirationCriterion | null | undefined>(undefined),
		});

	}

	export interface CreateChannelBanPostBody {

		/**
		 * The <code>AppInstanceUserArn</code> of the member being banned.
		 * Required
		 * Min length: 5
		 * Max length: 1600
		 */
		MemberArn: string;
	}
	export interface CreateChannelBanPostBodyFormProperties {

		/**
		 * The <code>AppInstanceUserArn</code> of the member being banned.
		 * Required
		 * Min length: 5
		 * Max length: 1600
		 */
		MemberArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelBanPostBodyFormGroup() {
		return new FormGroup<CreateChannelBanPostBodyFormProperties>({
			MemberArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(1600), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
		});

	}

	export interface CreateChannelFlowPostBody {

		/**
		 * The ARN of the channel flow request.
		 * Required
		 * Min length: 5
		 * Max length: 1600
		 */
		AppInstanceArn: string;

		/**
		 * Information about the processor Lambda functions.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 3
		 */
		Processors: Array<Processor>;

		/**
		 * The name of the channel flow.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Name: string;

		/**
		 * The tags for the creation request.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/**
		 * The client token for the request. An Idempotency token.
		 * Required
		 * Min length: 2
		 * Max length: 64
		 */
		ClientRequestToken: string;
	}
	export interface CreateChannelFlowPostBodyFormProperties {

		/**
		 * The ARN of the channel flow request.
		 * Required
		 * Min length: 5
		 * Max length: 1600
		 */
		AppInstanceArn: FormControl<string | null | undefined>,

		/**
		 * The name of the channel flow.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The client token for the request. An Idempotency token.
		 * Required
		 * Min length: 2
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelFlowPostBodyFormGroup() {
		return new FormGroup<CreateChannelFlowPostBodyFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(1600), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64), Validators.pattern('[-_a-zA-Z0-9]*')]),
		});

	}

	export interface CreateChannelMembershipPostBody {

		/**
		 * The <code>AppInstanceUserArn</code> of the member you want to add to the channel.
		 * Required
		 * Min length: 5
		 * Max length: 1600
		 */
		MemberArn: string;

		/**
		 * The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported by moderators.
		 * Required
		 */
		Type: ChannelMembershipType;

		/**
		 * <p>The ID of the SubChannel in the request.</p> <note> <p>Only required when creating membership in a SubChannel for a moderator in an elastic channel.</p> </note>
		 * Min length: 1
		 * Max length: 128
		 */
		SubChannelId?: string | null;
	}
	export interface CreateChannelMembershipPostBodyFormProperties {

		/**
		 * The <code>AppInstanceUserArn</code> of the member you want to add to the channel.
		 * Required
		 * Min length: 5
		 * Max length: 1600
		 */
		MemberArn: FormControl<string | null | undefined>,

		/**
		 * The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported by moderators.
		 * Required
		 */
		Type: FormControl<ChannelMembershipType | null | undefined>,

		/**
		 * <p>The ID of the SubChannel in the request.</p> <note> <p>Only required when creating membership in a SubChannel for a moderator in an elastic channel.</p> </note>
		 * Min length: 1
		 * Max length: 128
		 */
		SubChannelId: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelMembershipPostBodyFormGroup() {
		return new FormGroup<CreateChannelMembershipPostBodyFormProperties>({
			MemberArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(1600), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			Type: new FormControl<ChannelMembershipType | null | undefined>(undefined, [Validators.required]),
			SubChannelId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[-_a-zA-Z0-9]*')]),
		});

	}

	export interface CreateChannelModeratorPostBody {

		/**
		 * The <code>AppInstanceUserArn</code> of the moderator.
		 * Required
		 * Min length: 5
		 * Max length: 1600
		 */
		ChannelModeratorArn: string;
	}
	export interface CreateChannelModeratorPostBodyFormProperties {

		/**
		 * The <code>AppInstanceUserArn</code> of the moderator.
		 * Required
		 * Min length: 5
		 * Max length: 1600
		 */
		ChannelModeratorArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelModeratorPostBodyFormGroup() {
		return new FormGroup<CreateChannelModeratorPostBodyFormProperties>({
			ChannelModeratorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(1600), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
		});

	}

	export interface UpdateChannelPutBody {

		/**
		 * The name of the channel.
		 * Min length: 1
		 * Max length: 256
		 */
		Name?: string | null;

		/** The mode of the update request. */
		Mode?: ChannelMode | null;

		/**
		 * The metadata for the update request.
		 * Min length: 0
		 * Max length: 1024
		 */
		Metadata?: string | null;
	}
	export interface UpdateChannelPutBodyFormProperties {

		/**
		 * The name of the channel.
		 * Min length: 1
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/** The mode of the update request. */
		Mode: FormControl<ChannelMode | null | undefined>,

		/**
		 * The metadata for the update request.
		 * Min length: 0
		 * Max length: 1024
		 */
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelPutBodyFormGroup() {
		return new FormGroup<UpdateChannelPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*')]),
			Mode: new FormControl<ChannelMode | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
		});

	}

	export interface UpdateChannelFlowPutBody {

		/**
		 * Information about the processor Lambda functions
		 * Required
		 * Minimum items: 1
		 * Maximum items: 3
		 */
		Processors: Array<Processor>;

		/**
		 * The name of the channel flow.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Name: string;
	}
	export interface UpdateChannelFlowPutBodyFormProperties {

		/**
		 * The name of the channel flow.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelFlowPutBodyFormGroup() {
		return new FormGroup<UpdateChannelFlowPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*')]),
		});

	}

	export interface UpdateChannelMessagePutBody {

		/**
		 * The content of the channel message.
		 * Required
		 * Min length: 1
		 */
		Content: string;

		/**
		 * The metadata of the message being updated.
		 * Min length: 0
		 * Max length: 1024
		 */
		Metadata?: string | null;

		/**
		 * <p>The ID of the SubChannel in the request.</p> <note> <p>Only required when updating messages in a SubChannel that the user belongs to.</p> </note>
		 * Min length: 1
		 * Max length: 128
		 */
		SubChannelId?: string | null;

		/**
		 * The content type of the channel message.
		 * Min length: 0
		 * Max length: 45
		 */
		ContentType?: string | null;
	}
	export interface UpdateChannelMessagePutBodyFormProperties {

		/**
		 * The content of the channel message.
		 * Required
		 * Min length: 1
		 */
		Content: FormControl<string | null | undefined>,

		/**
		 * The metadata of the message being updated.
		 * Min length: 0
		 * Max length: 1024
		 */
		Metadata: FormControl<string | null | undefined>,

		/**
		 * <p>The ID of the SubChannel in the request.</p> <note> <p>Only required when updating messages in a SubChannel that the user belongs to.</p> </note>
		 * Min length: 1
		 * Max length: 128
		 */
		SubChannelId: FormControl<string | null | undefined>,

		/**
		 * The content type of the channel message.
		 * Min length: 0
		 * Max length: 45
		 */
		ContentType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelMessagePutBodyFormGroup() {
		return new FormGroup<UpdateChannelMessagePutBodyFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.pattern('[\s\S]*')]),
			Metadata: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
			SubChannelId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[-_a-zA-Z0-9]*')]),
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(45), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface PutMessagingStreamingConfigurationsPutBody {

		/**
		 * The streaming configurations.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		StreamingConfigurations: Array<StreamingConfiguration>;
	}
	export interface PutMessagingStreamingConfigurationsPutBodyFormProperties {
	}
	export function CreatePutMessagingStreamingConfigurationsPutBodyFormGroup() {
		return new FormGroup<PutMessagingStreamingConfigurationsPutBodyFormProperties>({
		});

	}

	export enum DescribeChannelMembershipForAppInstanceUserScope { 'app-instance-user-membership' = 'app-instance-user-membership' }

	export enum DescribeChannelModeratedByAppInstanceUserScope { 'app-instance-user-moderated-channel' = 'app-instance-user-moderated-channel' }

	export interface PutChannelMembershipPreferencesPutBody {

		/**
		 * The channel membership preferences for an <code>AppInstanceUser</code>.
		 * Required
		 */
		Preferences: PutChannelMembershipPreferencesPutBodyPreferences;
	}
	export interface PutChannelMembershipPreferencesPutBodyFormProperties {
	}
	export function CreatePutChannelMembershipPreferencesPutBodyFormGroup() {
		return new FormGroup<PutChannelMembershipPreferencesPutBodyFormProperties>({
		});

	}

	export interface PutChannelMembershipPreferencesPutBodyPreferences {
		PushNotifications?: PushNotificationPreferences;
	}
	export interface PutChannelMembershipPreferencesPutBodyPreferencesFormProperties {
	}
	export function CreatePutChannelMembershipPreferencesPutBodyPreferencesFormGroup() {
		return new FormGroup<PutChannelMembershipPreferencesPutBodyPreferencesFormProperties>({
		});

	}

	export enum GetChannelMessageStatusScope { 'message-status' = 'message-status' }

	export enum ListChannelMembershipsForAppInstanceUserScope { 'app-instance-user-memberships' = 'app-instance-user-memberships' }

	export interface SendChannelMessagePostBody {

		/**
		 * The content of the channel message.
		 * Required
		 * Min length: 1
		 */
		Content: string;

		/**
		 * <p>The type of message, <code>STANDARD</code> or <code>CONTROL</code>.</p> <p> <code>STANDARD</code> messages can be up to 4KB in size and contain metadata. Metadata is arbitrary, and you can use it in a variety of ways, such as containing a link to an attachment.</p> <p> <code>CONTROL</code> messages are limited to 30 bytes and do not contain metadata.</p>
		 * Required
		 */
		Type: ChannelMessageType;

		/**
		 * Boolean that controls whether the message is persisted on the back end. Required.
		 * Required
		 */
		Persistence: ChannelMessagePersistenceType;

		/**
		 * The optional metadata for each message.
		 * Min length: 0
		 * Max length: 1024
		 */
		Metadata?: string | null;

		/**
		 * The <code>Idempotency</code> token for each client request.
		 * Required
		 * Min length: 2
		 * Max length: 64
		 */
		ClientRequestToken: string;

		/** The push notification configuration of the message. */
		PushNotification?: SendChannelMessagePostBodyPushNotification;

		/** The attributes for the message, used for message filtering along with a <code>FilterRule</code> defined in the <code>PushNotificationPreferences</code>. */
		MessageAttributes?: {[id: string]: MessageAttributeValue };

		/**
		 * The ID of the SubChannel in the request.
		 * Min length: 1
		 * Max length: 128
		 */
		SubChannelId?: string | null;

		/**
		 * The content type of the channel message.
		 * Min length: 0
		 * Max length: 45
		 */
		ContentType?: string | null;

		/**
		 * The target of a message. Must be a member of the channel, such as another user, a bot, or the sender. Only the target and the sender can view targeted messages. Only users who can see targeted messages can take actions on them. However, administrators can delete targeted messages that they can’t see.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		Target?: Array<Target>;
	}
	export interface SendChannelMessagePostBodyFormProperties {

		/**
		 * The content of the channel message.
		 * Required
		 * Min length: 1
		 */
		Content: FormControl<string | null | undefined>,

		/**
		 * <p>The type of message, <code>STANDARD</code> or <code>CONTROL</code>.</p> <p> <code>STANDARD</code> messages can be up to 4KB in size and contain metadata. Metadata is arbitrary, and you can use it in a variety of ways, such as containing a link to an attachment.</p> <p> <code>CONTROL</code> messages are limited to 30 bytes and do not contain metadata.</p>
		 * Required
		 */
		Type: FormControl<ChannelMessageType | null | undefined>,

		/**
		 * Boolean that controls whether the message is persisted on the back end. Required.
		 * Required
		 */
		Persistence: FormControl<ChannelMessagePersistenceType | null | undefined>,

		/**
		 * The optional metadata for each message.
		 * Min length: 0
		 * Max length: 1024
		 */
		Metadata: FormControl<string | null | undefined>,

		/**
		 * The <code>Idempotency</code> token for each client request.
		 * Required
		 * Min length: 2
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** The attributes for the message, used for message filtering along with a <code>FilterRule</code> defined in the <code>PushNotificationPreferences</code>. */
		MessageAttributes: FormControl<{[id: string]: MessageAttributeValue } | null | undefined>,

		/**
		 * The ID of the SubChannel in the request.
		 * Min length: 1
		 * Max length: 128
		 */
		SubChannelId: FormControl<string | null | undefined>,

		/**
		 * The content type of the channel message.
		 * Min length: 0
		 * Max length: 45
		 */
		ContentType: FormControl<string | null | undefined>,
	}
	export function CreateSendChannelMessagePostBodyFormGroup() {
		return new FormGroup<SendChannelMessagePostBodyFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.pattern('[\s\S]*')]),
			Type: new FormControl<ChannelMessageType | null | undefined>(undefined, [Validators.required]),
			Persistence: new FormControl<ChannelMessagePersistenceType | null | undefined>(undefined, [Validators.required]),
			Metadata: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64), Validators.pattern('[-_a-zA-Z0-9]*')]),
			MessageAttributes: new FormControl<{[id: string]: MessageAttributeValue } | null | undefined>(undefined),
			SubChannelId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[-_a-zA-Z0-9]*')]),
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(45), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface SendChannelMessagePostBodyPushNotification {
		Title?: string;
		Body?: string;
		Type?: PushNotificationType;
	}
	export interface SendChannelMessagePostBodyPushNotificationFormProperties {
		Title: FormControl<string | null | undefined>,
		Body: FormControl<string | null | undefined>,
		Type: FormControl<PushNotificationType | null | undefined>,
	}
	export function CreateSendChannelMessagePostBodyPushNotificationFormGroup() {
		return new FormGroup<SendChannelMessagePostBodyPushNotificationFormProperties>({
			Title: new FormControl<string | null | undefined>(undefined),
			Body: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<PushNotificationType | null | undefined>(undefined),
		});

	}

	export enum ListChannelsAssociatedWithChannelFlowScope { 'channel-flow-associations' = 'channel-flow-associations' }

	export enum ListChannelsModeratedByAppInstanceUserScope { 'app-instance-user-moderated-channels' = 'app-instance-user-moderated-channels' }

	export interface PutChannelExpirationSettingsPutBody {

		/** Settings that control the interval after which a channel is deleted. */
		ExpirationSettings?: PutChannelExpirationSettingsPutBodyExpirationSettings;
	}
	export interface PutChannelExpirationSettingsPutBodyFormProperties {
	}
	export function CreatePutChannelExpirationSettingsPutBodyFormGroup() {
		return new FormGroup<PutChannelExpirationSettingsPutBodyFormProperties>({
		});

	}

	export interface PutChannelExpirationSettingsPutBodyExpirationSettings {
		ExpirationDays?: number | null;
		ExpirationCriterion?: ExpirationCriterion;
	}
	export interface PutChannelExpirationSettingsPutBodyExpirationSettingsFormProperties {
		ExpirationDays: FormControl<number | null | undefined>,
		ExpirationCriterion: FormControl<ExpirationCriterion | null | undefined>,
	}
	export function CreatePutChannelExpirationSettingsPutBodyExpirationSettingsFormGroup() {
		return new FormGroup<PutChannelExpirationSettingsPutBodyExpirationSettingsFormProperties>({
			ExpirationDays: new FormControl<number | null | undefined>(undefined),
			ExpirationCriterion: new FormControl<ExpirationCriterion | null | undefined>(undefined),
		});

	}

	export enum RedactChannelMessageOperation { redact = 'redact' }

	export interface RedactChannelMessagePostBody {

		/**
		 * The ID of the SubChannel in the request.
		 * Min length: 1
		 * Max length: 128
		 */
		SubChannelId?: string | null;
	}
	export interface RedactChannelMessagePostBodyFormProperties {

		/**
		 * The ID of the SubChannel in the request.
		 * Min length: 1
		 * Max length: 128
		 */
		SubChannelId: FormControl<string | null | undefined>,
	}
	export function CreateRedactChannelMessagePostBodyFormGroup() {
		return new FormGroup<RedactChannelMessagePostBodyFormProperties>({
			SubChannelId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[-_a-zA-Z0-9]*')]),
		});

	}

	export enum SearchChannelsOperation { search = 'search' }

	export interface SearchChannelsPostBody {

		/**
		 * A list of the <code>Field</code> objects in the channel being searched.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		Fields: Array<SearchField>;
	}
	export interface SearchChannelsPostBodyFormProperties {
	}
	export function CreateSearchChannelsPostBodyFormGroup() {
		return new FormGroup<SearchChannelsPostBodyFormProperties>({
		});

	}

	export enum TagResourceOperation { 'tag-resource' = 'tag-resource' }

	export interface TagResourcePostBody {

		/**
		 * The resource ARN.
		 * Required
		 * Min length: 5
		 * Max length: 1600
		 */
		ResourceARN: string;

		/**
		 * The tag key-value pairs.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The resource ARN.
		 * Required
		 * Min length: 5
		 * Max length: 1600
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(1600), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
		});

	}

	export enum UntagResourceOperation { 'untag-resource' = 'untag-resource' }

	export interface UntagResourcePostBody {

		/**
		 * The resource ARN.
		 * Required
		 * Min length: 5
		 * Max length: 1600
		 */
		ResourceARN: string;

		/**
		 * The tag keys.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagKeys: Array<string>;
	}
	export interface UntagResourcePostBodyFormProperties {

		/**
		 * The resource ARN.
		 * Required
		 * Min length: 5
		 * Max length: 1600
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourcePostBodyFormGroup() {
		return new FormGroup<UntagResourcePostBodyFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(1600), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
		});

	}

}

