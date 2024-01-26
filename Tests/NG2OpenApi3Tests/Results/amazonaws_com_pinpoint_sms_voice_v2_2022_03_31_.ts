import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateOriginationIdentityResult {
		PoolArn?: string;
		PoolId?: string;
		OriginationIdentityArn?: string;
		OriginationIdentity?: string;
		IsoCountryCode?: string;
	}
	export interface AssociateOriginationIdentityResultFormProperties {
		PoolArn: FormControl<string | null | undefined>,
		PoolId: FormControl<string | null | undefined>,
		OriginationIdentityArn: FormControl<string | null | undefined>,
		OriginationIdentity: FormControl<string | null | undefined>,
		IsoCountryCode: FormControl<string | null | undefined>,
	}
	export function CreateAssociateOriginationIdentityResultFormGroup() {
		return new FormGroup<AssociateOriginationIdentityResultFormProperties>({
			PoolArn: new FormControl<string | null | undefined>(undefined),
			PoolId: new FormControl<string | null | undefined>(undefined),
			OriginationIdentityArn: new FormControl<string | null | undefined>(undefined),
			OriginationIdentity: new FormControl<string | null | undefined>(undefined),
			IsoCountryCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateOriginationIdentityRequest {

		/** Required */
		PoolId: string;

		/** Required */
		OriginationIdentity: string;

		/** Required */
		IsoCountryCode: string;
		ClientToken?: string;
	}
	export interface AssociateOriginationIdentityRequestFormProperties {

		/** Required */
		PoolId: FormControl<string | null | undefined>,

		/** Required */
		OriginationIdentity: FormControl<string | null | undefined>,

		/** Required */
		IsoCountryCode: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateOriginationIdentityRequestFormGroup() {
		return new FormGroup<AssociateOriginationIdentityRequestFormProperties>({
			PoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OriginationIdentity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsoCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
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

	export interface CreateConfigurationSetResult {
		ConfigurationSetArn?: string;
		ConfigurationSetName?: string;
		Tags?: Array<Tag>;
		CreatedTimestamp?: Date;
	}
	export interface CreateConfigurationSetResultFormProperties {
		ConfigurationSetArn: FormControl<string | null | undefined>,
		ConfigurationSetName: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateCreateConfigurationSetResultFormGroup() {
		return new FormGroup<CreateConfigurationSetResultFormProperties>({
			ConfigurationSetArn: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The list of tags to be added to the specified topic. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** The list of tags to be added to the specified topic. */
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

	export interface CreateConfigurationSetRequest {

		/** Required */
		ConfigurationSetName: string;
		Tags?: Array<Tag>;
		ClientToken?: string;
	}
	export interface CreateConfigurationSetRequestFormProperties {

		/** Required */
		ConfigurationSetName: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationSetRequestFormGroup() {
		return new FormGroup<CreateConfigurationSetRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEventDestinationResult {
		ConfigurationSetArn?: string;
		ConfigurationSetName?: string;
		EventDestination?: EventDestination;
	}
	export interface CreateEventDestinationResultFormProperties {
		ConfigurationSetArn: FormControl<string | null | undefined>,
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateCreateEventDestinationResultFormGroup() {
		return new FormGroup<CreateEventDestinationResultFormProperties>({
			ConfigurationSetArn: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about an event destination.</p> <p>Event destinations are associated with configuration sets, which enable you to publish message sending events to Amazon CloudWatch, Amazon Kinesis Data Firehose, or Amazon SNS.</p> */
	export interface EventDestination {

		/** Required */
		EventDestinationName: string;

		/** Required */
		Enabled: boolean;

		/** Required */
		MatchingEventTypes: Array<EventType>;
		CloudWatchLogsDestination?: CloudWatchLogsDestination;
		KinesisFirehoseDestination?: KinesisFirehoseDestination;
		SnsDestination?: SnsDestination;
	}

	/** <p>Contains information about an event destination.</p> <p>Event destinations are associated with configuration sets, which enable you to publish message sending events to Amazon CloudWatch, Amazon Kinesis Data Firehose, or Amazon SNS.</p> */
	export interface EventDestinationFormProperties {

		/** Required */
		EventDestinationName: FormControl<string | null | undefined>,

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEventDestinationFormGroup() {
		return new FormGroup<EventDestinationFormProperties>({
			EventDestinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EventType { ALL = 0, TEXT_ALL = 1, TEXT_SENT = 2, TEXT_PENDING = 3, TEXT_QUEUED = 4, TEXT_SUCCESSFUL = 5, TEXT_DELIVERED = 6, TEXT_INVALID = 7, TEXT_INVALID_MESSAGE = 8, TEXT_UNREACHABLE = 9, TEXT_CARRIER_UNREACHABLE = 10, TEXT_BLOCKED = 11, TEXT_CARRIER_BLOCKED = 12, TEXT_SPAM = 13, TEXT_UNKNOWN = 14, TEXT_TTL_EXPIRED = 15, VOICE_ALL = 16, VOICE_INITIATED = 17, VOICE_RINGING = 18, VOICE_ANSWERED = 19, VOICE_COMPLETED = 20, VOICE_BUSY = 21, VOICE_NO_ANSWER = 22, VOICE_FAILED = 23, VOICE_TTL_EXPIRED = 24 }


	/** Contains the destination configuration to use when publishing message sending events.  */
	export interface CloudWatchLogsDestination {

		/** Required */
		IamRoleArn: string;

		/** Required */
		LogGroupArn: string;
	}

	/** Contains the destination configuration to use when publishing message sending events.  */
	export interface CloudWatchLogsDestinationFormProperties {

		/** Required */
		IamRoleArn: FormControl<string | null | undefined>,

		/** Required */
		LogGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLogsDestinationFormGroup() {
		return new FormGroup<CloudWatchLogsDestinationFormProperties>({
			IamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Contains the delivery stream Amazon Resource Name (ARN), and the ARN of the Identity and Access Management (IAM) role associated with an Kinesis Data Firehose event destination.</p> <p>Event destinations, such as Kinesis Data Firehose, are associated with configuration sets, which enable you to publish message sending events.</p> */
	export interface KinesisFirehoseDestination {

		/** Required */
		IamRoleArn: string;

		/** Required */
		DeliveryStreamArn: string;
	}

	/** <p>Contains the delivery stream Amazon Resource Name (ARN), and the ARN of the Identity and Access Management (IAM) role associated with an Kinesis Data Firehose event destination.</p> <p>Event destinations, such as Kinesis Data Firehose, are associated with configuration sets, which enable you to publish message sending events.</p> */
	export interface KinesisFirehoseDestinationFormProperties {

		/** Required */
		IamRoleArn: FormControl<string | null | undefined>,

		/** Required */
		DeliveryStreamArn: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseDestinationFormGroup() {
		return new FormGroup<KinesisFirehoseDestinationFormProperties>({
			IamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeliveryStreamArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that defines an Amazon SNS destination for events. You can use Amazon SNS to send notification when certain events occur. */
	export interface SnsDestination {

		/** Required */
		TopicArn: string;
	}

	/** An object that defines an Amazon SNS destination for events. You can use Amazon SNS to send notification when certain events occur. */
	export interface SnsDestinationFormProperties {

		/** Required */
		TopicArn: FormControl<string | null | undefined>,
	}
	export function CreateSnsDestinationFormGroup() {
		return new FormGroup<SnsDestinationFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateEventDestinationRequest {

		/** Required */
		ConfigurationSetName: string;

		/** Required */
		EventDestinationName: string;

		/** Required */
		MatchingEventTypes: Array<EventType>;
		CloudWatchLogsDestination?: CloudWatchLogsDestination;
		KinesisFirehoseDestination?: KinesisFirehoseDestination;
		SnsDestination?: SnsDestination;
		ClientToken?: string;
	}
	export interface CreateEventDestinationRequestFormProperties {

		/** Required */
		ConfigurationSetName: FormControl<string | null | undefined>,

		/** Required */
		EventDestinationName: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateEventDestinationRequestFormGroup() {
		return new FormGroup<CreateEventDestinationRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventDestinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateOptOutListResult {
		OptOutListArn?: string;
		OptOutListName?: string;
		Tags?: Array<Tag>;
		CreatedTimestamp?: Date;
	}
	export interface CreateOptOutListResultFormProperties {
		OptOutListArn: FormControl<string | null | undefined>,
		OptOutListName: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateCreateOptOutListResultFormGroup() {
		return new FormGroup<CreateOptOutListResultFormProperties>({
			OptOutListArn: new FormControl<string | null | undefined>(undefined),
			OptOutListName: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateOptOutListRequest {

		/** Required */
		OptOutListName: string;
		Tags?: Array<Tag>;
		ClientToken?: string;
	}
	export interface CreateOptOutListRequestFormProperties {

		/** Required */
		OptOutListName: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateOptOutListRequestFormGroup() {
		return new FormGroup<CreateOptOutListRequestFormProperties>({
			OptOutListName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePoolResult {
		PoolArn?: string;
		PoolId?: string;
		Status?: PoolStatus;
		MessageType?: MessageType;
		TwoWayEnabled?: boolean | null;
		TwoWayChannelArn?: string;
		SelfManagedOptOutsEnabled?: boolean | null;
		OptOutListName?: string;
		SharedRoutesEnabled?: boolean | null;
		DeletionProtectionEnabled?: boolean | null;
		Tags?: Array<Tag>;
		CreatedTimestamp?: Date;
	}
	export interface CreatePoolResultFormProperties {
		PoolArn: FormControl<string | null | undefined>,
		PoolId: FormControl<string | null | undefined>,
		Status: FormControl<PoolStatus | null | undefined>,
		MessageType: FormControl<MessageType | null | undefined>,
		TwoWayEnabled: FormControl<boolean | null | undefined>,
		TwoWayChannelArn: FormControl<string | null | undefined>,
		SelfManagedOptOutsEnabled: FormControl<boolean | null | undefined>,
		OptOutListName: FormControl<string | null | undefined>,
		SharedRoutesEnabled: FormControl<boolean | null | undefined>,
		DeletionProtectionEnabled: FormControl<boolean | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateCreatePoolResultFormGroup() {
		return new FormGroup<CreatePoolResultFormProperties>({
			PoolArn: new FormControl<string | null | undefined>(undefined),
			PoolId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<PoolStatus | null | undefined>(undefined),
			MessageType: new FormControl<MessageType | null | undefined>(undefined),
			TwoWayEnabled: new FormControl<boolean | null | undefined>(undefined),
			TwoWayChannelArn: new FormControl<string | null | undefined>(undefined),
			SelfManagedOptOutsEnabled: new FormControl<boolean | null | undefined>(undefined),
			OptOutListName: new FormControl<string | null | undefined>(undefined),
			SharedRoutesEnabled: new FormControl<boolean | null | undefined>(undefined),
			DeletionProtectionEnabled: new FormControl<boolean | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum PoolStatus { CREATING = 0, ACTIVE = 1, DELETING = 2 }

	export enum MessageType { TRANSACTIONAL = 0, PROMOTIONAL = 1 }

	export interface CreatePoolRequest {

		/** Required */
		OriginationIdentity: string;

		/** Required */
		IsoCountryCode: string;

		/** Required */
		MessageType: MessageType;
		DeletionProtectionEnabled?: boolean | null;
		Tags?: Array<Tag>;
		ClientToken?: string;
	}
	export interface CreatePoolRequestFormProperties {

		/** Required */
		OriginationIdentity: FormControl<string | null | undefined>,

		/** Required */
		IsoCountryCode: FormControl<string | null | undefined>,

		/** Required */
		MessageType: FormControl<MessageType | null | undefined>,
		DeletionProtectionEnabled: FormControl<boolean | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreatePoolRequestFormGroup() {
		return new FormGroup<CreatePoolRequestFormProperties>({
			OriginationIdentity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsoCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MessageType: new FormControl<MessageType | null | undefined>(undefined, [Validators.required]),
			DeletionProtectionEnabled: new FormControl<boolean | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteConfigurationSetResult {
		ConfigurationSetArn?: string;
		ConfigurationSetName?: string;
		EventDestinations?: Array<EventDestination>;
		DefaultMessageType?: MessageType;
		DefaultSenderId?: string;
		CreatedTimestamp?: Date;
	}
	export interface DeleteConfigurationSetResultFormProperties {
		ConfigurationSetArn: FormControl<string | null | undefined>,
		ConfigurationSetName: FormControl<string | null | undefined>,
		DefaultMessageType: FormControl<MessageType | null | undefined>,
		DefaultSenderId: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateDeleteConfigurationSetResultFormGroup() {
		return new FormGroup<DeleteConfigurationSetResultFormProperties>({
			ConfigurationSetArn: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
			DefaultMessageType: new FormControl<MessageType | null | undefined>(undefined),
			DefaultSenderId: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DeleteConfigurationSetRequest {

		/** Required */
		ConfigurationSetName: string;
	}
	export interface DeleteConfigurationSetRequestFormProperties {

		/** Required */
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConfigurationSetRequestFormGroup() {
		return new FormGroup<DeleteConfigurationSetRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDefaultMessageTypeResult {
		ConfigurationSetArn?: string;
		ConfigurationSetName?: string;
		MessageType?: MessageType;
	}
	export interface DeleteDefaultMessageTypeResultFormProperties {
		ConfigurationSetArn: FormControl<string | null | undefined>,
		ConfigurationSetName: FormControl<string | null | undefined>,
		MessageType: FormControl<MessageType | null | undefined>,
	}
	export function CreateDeleteDefaultMessageTypeResultFormGroup() {
		return new FormGroup<DeleteDefaultMessageTypeResultFormProperties>({
			ConfigurationSetArn: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
			MessageType: new FormControl<MessageType | null | undefined>(undefined),
		});

	}

	export interface DeleteDefaultMessageTypeRequest {

		/** Required */
		ConfigurationSetName: string;
	}
	export interface DeleteDefaultMessageTypeRequestFormProperties {

		/** Required */
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDefaultMessageTypeRequestFormGroup() {
		return new FormGroup<DeleteDefaultMessageTypeRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDefaultSenderIdResult {
		ConfigurationSetArn?: string;
		ConfigurationSetName?: string;
		SenderId?: string;
	}
	export interface DeleteDefaultSenderIdResultFormProperties {
		ConfigurationSetArn: FormControl<string | null | undefined>,
		ConfigurationSetName: FormControl<string | null | undefined>,
		SenderId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDefaultSenderIdResultFormGroup() {
		return new FormGroup<DeleteDefaultSenderIdResultFormProperties>({
			ConfigurationSetArn: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
			SenderId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteDefaultSenderIdRequest {

		/** Required */
		ConfigurationSetName: string;
	}
	export interface DeleteDefaultSenderIdRequestFormProperties {

		/** Required */
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDefaultSenderIdRequestFormGroup() {
		return new FormGroup<DeleteDefaultSenderIdRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteEventDestinationResult {
		ConfigurationSetArn?: string;
		ConfigurationSetName?: string;
		EventDestination?: EventDestination;
	}
	export interface DeleteEventDestinationResultFormProperties {
		ConfigurationSetArn: FormControl<string | null | undefined>,
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEventDestinationResultFormGroup() {
		return new FormGroup<DeleteEventDestinationResultFormProperties>({
			ConfigurationSetArn: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteEventDestinationRequest {

		/** Required */
		ConfigurationSetName: string;

		/** Required */
		EventDestinationName: string;
	}
	export interface DeleteEventDestinationRequestFormProperties {

		/** Required */
		ConfigurationSetName: FormControl<string | null | undefined>,

		/** Required */
		EventDestinationName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEventDestinationRequestFormGroup() {
		return new FormGroup<DeleteEventDestinationRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventDestinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteKeywordResult {
		OriginationIdentityArn?: string;
		OriginationIdentity?: string;
		Keyword?: string;
		KeywordMessage?: string;
		KeywordAction?: KeywordAction;
	}
	export interface DeleteKeywordResultFormProperties {
		OriginationIdentityArn: FormControl<string | null | undefined>,
		OriginationIdentity: FormControl<string | null | undefined>,
		Keyword: FormControl<string | null | undefined>,
		KeywordMessage: FormControl<string | null | undefined>,
		KeywordAction: FormControl<KeywordAction | null | undefined>,
	}
	export function CreateDeleteKeywordResultFormGroup() {
		return new FormGroup<DeleteKeywordResultFormProperties>({
			OriginationIdentityArn: new FormControl<string | null | undefined>(undefined),
			OriginationIdentity: new FormControl<string | null | undefined>(undefined),
			Keyword: new FormControl<string | null | undefined>(undefined),
			KeywordMessage: new FormControl<string | null | undefined>(undefined),
			KeywordAction: new FormControl<KeywordAction | null | undefined>(undefined),
		});

	}

	export enum KeywordAction { AUTOMATIC_RESPONSE = 0, OPT_OUT = 1, OPT_IN = 2 }

	export interface DeleteKeywordRequest {

		/** Required */
		OriginationIdentity: string;

		/** Required */
		Keyword: string;
	}
	export interface DeleteKeywordRequestFormProperties {

		/** Required */
		OriginationIdentity: FormControl<string | null | undefined>,

		/** Required */
		Keyword: FormControl<string | null | undefined>,
	}
	export function CreateDeleteKeywordRequestFormGroup() {
		return new FormGroup<DeleteKeywordRequestFormProperties>({
			OriginationIdentity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Keyword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteOptOutListResult {
		OptOutListArn?: string;
		OptOutListName?: string;
		CreatedTimestamp?: Date;
	}
	export interface DeleteOptOutListResultFormProperties {
		OptOutListArn: FormControl<string | null | undefined>,
		OptOutListName: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateDeleteOptOutListResultFormGroup() {
		return new FormGroup<DeleteOptOutListResultFormProperties>({
			OptOutListArn: new FormControl<string | null | undefined>(undefined),
			OptOutListName: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DeleteOptOutListRequest {

		/** Required */
		OptOutListName: string;
	}
	export interface DeleteOptOutListRequestFormProperties {

		/** Required */
		OptOutListName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteOptOutListRequestFormGroup() {
		return new FormGroup<DeleteOptOutListRequestFormProperties>({
			OptOutListName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteOptedOutNumberResult {
		OptOutListArn?: string;
		OptOutListName?: string;
		OptedOutNumber?: string;
		OptedOutTimestamp?: Date;
		EndUserOptedOut?: boolean | null;
	}
	export interface DeleteOptedOutNumberResultFormProperties {
		OptOutListArn: FormControl<string | null | undefined>,
		OptOutListName: FormControl<string | null | undefined>,
		OptedOutNumber: FormControl<string | null | undefined>,
		OptedOutTimestamp: FormControl<Date | null | undefined>,
		EndUserOptedOut: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteOptedOutNumberResultFormGroup() {
		return new FormGroup<DeleteOptedOutNumberResultFormProperties>({
			OptOutListArn: new FormControl<string | null | undefined>(undefined),
			OptOutListName: new FormControl<string | null | undefined>(undefined),
			OptedOutNumber: new FormControl<string | null | undefined>(undefined),
			OptedOutTimestamp: new FormControl<Date | null | undefined>(undefined),
			EndUserOptedOut: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteOptedOutNumberRequest {

		/** Required */
		OptOutListName: string;

		/** Required */
		OptedOutNumber: string;
	}
	export interface DeleteOptedOutNumberRequestFormProperties {

		/** Required */
		OptOutListName: FormControl<string | null | undefined>,

		/** Required */
		OptedOutNumber: FormControl<string | null | undefined>,
	}
	export function CreateDeleteOptedOutNumberRequestFormGroup() {
		return new FormGroup<DeleteOptedOutNumberRequestFormProperties>({
			OptOutListName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OptedOutNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePoolResult {
		PoolArn?: string;
		PoolId?: string;
		Status?: PoolStatus;
		MessageType?: MessageType;
		TwoWayEnabled?: boolean | null;
		TwoWayChannelArn?: string;
		SelfManagedOptOutsEnabled?: boolean | null;
		OptOutListName?: string;
		SharedRoutesEnabled?: boolean | null;
		CreatedTimestamp?: Date;
	}
	export interface DeletePoolResultFormProperties {
		PoolArn: FormControl<string | null | undefined>,
		PoolId: FormControl<string | null | undefined>,
		Status: FormControl<PoolStatus | null | undefined>,
		MessageType: FormControl<MessageType | null | undefined>,
		TwoWayEnabled: FormControl<boolean | null | undefined>,
		TwoWayChannelArn: FormControl<string | null | undefined>,
		SelfManagedOptOutsEnabled: FormControl<boolean | null | undefined>,
		OptOutListName: FormControl<string | null | undefined>,
		SharedRoutesEnabled: FormControl<boolean | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateDeletePoolResultFormGroup() {
		return new FormGroup<DeletePoolResultFormProperties>({
			PoolArn: new FormControl<string | null | undefined>(undefined),
			PoolId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<PoolStatus | null | undefined>(undefined),
			MessageType: new FormControl<MessageType | null | undefined>(undefined),
			TwoWayEnabled: new FormControl<boolean | null | undefined>(undefined),
			TwoWayChannelArn: new FormControl<string | null | undefined>(undefined),
			SelfManagedOptOutsEnabled: new FormControl<boolean | null | undefined>(undefined),
			OptOutListName: new FormControl<string | null | undefined>(undefined),
			SharedRoutesEnabled: new FormControl<boolean | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DeletePoolRequest {

		/** Required */
		PoolId: string;
	}
	export interface DeletePoolRequestFormProperties {

		/** Required */
		PoolId: FormControl<string | null | undefined>,
	}
	export function CreateDeletePoolRequestFormGroup() {
		return new FormGroup<DeletePoolRequestFormProperties>({
			PoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteTextMessageSpendLimitOverrideResult {
		MonthlyLimit?: number | null;
	}
	export interface DeleteTextMessageSpendLimitOverrideResultFormProperties {
		MonthlyLimit: FormControl<number | null | undefined>,
	}
	export function CreateDeleteTextMessageSpendLimitOverrideResultFormGroup() {
		return new FormGroup<DeleteTextMessageSpendLimitOverrideResultFormProperties>({
			MonthlyLimit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteTextMessageSpendLimitOverrideRequest {
	}
	export interface DeleteTextMessageSpendLimitOverrideRequestFormProperties {
	}
	export function CreateDeleteTextMessageSpendLimitOverrideRequestFormGroup() {
		return new FormGroup<DeleteTextMessageSpendLimitOverrideRequestFormProperties>({
		});

	}

	export interface DeleteVoiceMessageSpendLimitOverrideResult {
		MonthlyLimit?: number | null;
	}
	export interface DeleteVoiceMessageSpendLimitOverrideResultFormProperties {
		MonthlyLimit: FormControl<number | null | undefined>,
	}
	export function CreateDeleteVoiceMessageSpendLimitOverrideResultFormGroup() {
		return new FormGroup<DeleteVoiceMessageSpendLimitOverrideResultFormProperties>({
			MonthlyLimit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteVoiceMessageSpendLimitOverrideRequest {
	}
	export interface DeleteVoiceMessageSpendLimitOverrideRequestFormProperties {
	}
	export function CreateDeleteVoiceMessageSpendLimitOverrideRequestFormGroup() {
		return new FormGroup<DeleteVoiceMessageSpendLimitOverrideRequestFormProperties>({
		});

	}

	export interface DescribeAccountAttributesResult {
		AccountAttributes?: Array<AccountAttribute>;
		NextToken?: string;
	}
	export interface DescribeAccountAttributesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccountAttributesResultFormGroup() {
		return new FormGroup<DescribeAccountAttributesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Displays the attributes associated with a single Amazon Web Services account. */
	export interface AccountAttribute {

		/** Required */
		Name: AccountAttributeName;

		/** Required */
		Value: string;
	}

	/** Displays the attributes associated with a single Amazon Web Services account. */
	export interface AccountAttributeFormProperties {

		/** Required */
		Name: FormControl<AccountAttributeName | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAccountAttributeFormGroup() {
		return new FormGroup<AccountAttributeFormProperties>({
			Name: new FormControl<AccountAttributeName | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AccountAttributeName { ACCOUNT_TIER = 0 }

	export interface DescribeAccountAttributesRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeAccountAttributesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeAccountAttributesRequestFormGroup() {
		return new FormGroup<DescribeAccountAttributesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeAccountLimitsResult {
		AccountLimits?: Array<AccountLimit>;
		NextToken?: string;
	}
	export interface DescribeAccountLimitsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccountLimitsResultFormGroup() {
		return new FormGroup<DescribeAccountLimitsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The current resource quotas associated with an Amazon Web Services account. */
	export interface AccountLimit {

		/** Required */
		Name: AccountLimitName;

		/** Required */
		Used: number;

		/** Required */
		Max: number;
	}

	/** The current resource quotas associated with an Amazon Web Services account. */
	export interface AccountLimitFormProperties {

		/** Required */
		Name: FormControl<AccountLimitName | null | undefined>,

		/** Required */
		Used: FormControl<number | null | undefined>,

		/** Required */
		Max: FormControl<number | null | undefined>,
	}
	export function CreateAccountLimitFormGroup() {
		return new FormGroup<AccountLimitFormProperties>({
			Name: new FormControl<AccountLimitName | null | undefined>(undefined, [Validators.required]),
			Used: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Max: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AccountLimitName { PHONE_NUMBERS = 0, POOLS = 1, CONFIGURATION_SETS = 2, OPT_OUT_LISTS = 3 }

	export interface DescribeAccountLimitsRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeAccountLimitsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeAccountLimitsRequestFormGroup() {
		return new FormGroup<DescribeAccountLimitsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeConfigurationSetsResult {
		ConfigurationSets?: Array<ConfigurationSetInformation>;
		NextToken?: string;
	}
	export interface DescribeConfigurationSetsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConfigurationSetsResultFormGroup() {
		return new FormGroup<DescribeConfigurationSetsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information related to a given configuration set in your Amazon Web Services account. */
	export interface ConfigurationSetInformation {

		/** Required */
		ConfigurationSetArn: string;

		/** Required */
		ConfigurationSetName: string;

		/** Required */
		EventDestinations: Array<EventDestination>;
		DefaultMessageType?: MessageType;
		DefaultSenderId?: string;

		/** Required */
		CreatedTimestamp: Date;
	}

	/** Information related to a given configuration set in your Amazon Web Services account. */
	export interface ConfigurationSetInformationFormProperties {

		/** Required */
		ConfigurationSetArn: FormControl<string | null | undefined>,

		/** Required */
		ConfigurationSetName: FormControl<string | null | undefined>,
		DefaultMessageType: FormControl<MessageType | null | undefined>,
		DefaultSenderId: FormControl<string | null | undefined>,

		/** Required */
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateConfigurationSetInformationFormGroup() {
		return new FormGroup<ConfigurationSetInformationFormProperties>({
			ConfigurationSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultMessageType: new FormControl<MessageType | null | undefined>(undefined),
			DefaultSenderId: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeConfigurationSetsRequest {
		ConfigurationSetNames?: Array<string>;
		Filters?: Array<ConfigurationSetFilter>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeConfigurationSetsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeConfigurationSetsRequestFormGroup() {
		return new FormGroup<DescribeConfigurationSetsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The information for configuration sets that meet a specified criteria. */
	export interface ConfigurationSetFilter {

		/** Required */
		Name: ConfigurationSetFilterName;

		/** Required */
		Values: Array<string>;
	}

	/** The information for configuration sets that meet a specified criteria. */
	export interface ConfigurationSetFilterFormProperties {

		/** Required */
		Name: FormControl<ConfigurationSetFilterName | null | undefined>,
	}
	export function CreateConfigurationSetFilterFormGroup() {
		return new FormGroup<ConfigurationSetFilterFormProperties>({
			Name: new FormControl<ConfigurationSetFilterName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConfigurationSetFilterName { 'event-destination-name' = 0, 'matching-event-types' = 1, 'default-message-type' = 2, 'default-sender-id' = 3 }

	export interface DescribeKeywordsResult {
		OriginationIdentityArn?: string;
		OriginationIdentity?: string;
		Keywords?: Array<KeywordInformation>;
		NextToken?: string;
	}
	export interface DescribeKeywordsResultFormProperties {
		OriginationIdentityArn: FormControl<string | null | undefined>,
		OriginationIdentity: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeKeywordsResultFormGroup() {
		return new FormGroup<DescribeKeywordsResultFormProperties>({
			OriginationIdentityArn: new FormControl<string | null | undefined>(undefined),
			OriginationIdentity: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The information for all keywords in a pool. */
	export interface KeywordInformation {

		/** Required */
		Keyword: string;

		/** Required */
		KeywordMessage: string;

		/** Required */
		KeywordAction: KeywordAction;
	}

	/** The information for all keywords in a pool. */
	export interface KeywordInformationFormProperties {

		/** Required */
		Keyword: FormControl<string | null | undefined>,

		/** Required */
		KeywordMessage: FormControl<string | null | undefined>,

		/** Required */
		KeywordAction: FormControl<KeywordAction | null | undefined>,
	}
	export function CreateKeywordInformationFormGroup() {
		return new FormGroup<KeywordInformationFormProperties>({
			Keyword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeywordMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeywordAction: new FormControl<KeywordAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeKeywordsRequest {

		/** Required */
		OriginationIdentity: string;
		Keywords?: Array<string>;
		Filters?: Array<KeywordFilter>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeKeywordsRequestFormProperties {

		/** Required */
		OriginationIdentity: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeKeywordsRequestFormGroup() {
		return new FormGroup<DescribeKeywordsRequestFormProperties>({
			OriginationIdentity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The information for keywords that meet a specified criteria. */
	export interface KeywordFilter {

		/** Required */
		Name: KeywordFilterName;

		/** Required */
		Values: Array<string>;
	}

	/** The information for keywords that meet a specified criteria. */
	export interface KeywordFilterFormProperties {

		/** Required */
		Name: FormControl<KeywordFilterName | null | undefined>,
	}
	export function CreateKeywordFilterFormGroup() {
		return new FormGroup<KeywordFilterFormProperties>({
			Name: new FormControl<KeywordFilterName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum KeywordFilterName { 'keyword-action' = 0 }

	export interface DescribeOptOutListsResult {
		OptOutLists?: Array<OptOutListInformation>;
		NextToken?: string;
	}
	export interface DescribeOptOutListsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOptOutListsResultFormGroup() {
		return new FormGroup<DescribeOptOutListsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The information for all OptOutList in an Amazon Web Services account. */
	export interface OptOutListInformation {

		/** Required */
		OptOutListArn: string;

		/** Required */
		OptOutListName: string;

		/** Required */
		CreatedTimestamp: Date;
	}

	/** The information for all OptOutList in an Amazon Web Services account. */
	export interface OptOutListInformationFormProperties {

		/** Required */
		OptOutListArn: FormControl<string | null | undefined>,

		/** Required */
		OptOutListName: FormControl<string | null | undefined>,

		/** Required */
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateOptOutListInformationFormGroup() {
		return new FormGroup<OptOutListInformationFormProperties>({
			OptOutListArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OptOutListName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeOptOutListsRequest {
		OptOutListNames?: Array<string>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeOptOutListsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeOptOutListsRequestFormGroup() {
		return new FormGroup<DescribeOptOutListsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeOptedOutNumbersResult {
		OptOutListArn?: string;
		OptOutListName?: string;
		OptedOutNumbers?: Array<OptedOutNumberInformation>;
		NextToken?: string;
	}
	export interface DescribeOptedOutNumbersResultFormProperties {
		OptOutListArn: FormControl<string | null | undefined>,
		OptOutListName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOptedOutNumbersResultFormGroup() {
		return new FormGroup<DescribeOptedOutNumbersResultFormProperties>({
			OptOutListArn: new FormControl<string | null | undefined>(undefined),
			OptOutListName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The information for an opted out number in an Amazon Web Services account. */
	export interface OptedOutNumberInformation {

		/** Required */
		OptedOutNumber: string;

		/** Required */
		OptedOutTimestamp: Date;

		/** Required */
		EndUserOptedOut: boolean;
	}

	/** The information for an opted out number in an Amazon Web Services account. */
	export interface OptedOutNumberInformationFormProperties {

		/** Required */
		OptedOutNumber: FormControl<string | null | undefined>,

		/** Required */
		OptedOutTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		EndUserOptedOut: FormControl<boolean | null | undefined>,
	}
	export function CreateOptedOutNumberInformationFormGroup() {
		return new FormGroup<OptedOutNumberInformationFormProperties>({
			OptedOutNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OptedOutTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndUserOptedOut: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeOptedOutNumbersRequest {

		/** Required */
		OptOutListName: string;
		OptedOutNumbers?: Array<string>;
		Filters?: Array<OptedOutFilter>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeOptedOutNumbersRequestFormProperties {

		/** Required */
		OptOutListName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeOptedOutNumbersRequestFormGroup() {
		return new FormGroup<DescribeOptedOutNumbersRequestFormProperties>({
			OptOutListName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The information for opted out numbers that meet a specified criteria. */
	export interface OptedOutFilter {

		/** Required */
		Name: OptedOutFilterName;

		/** Required */
		Values: Array<string>;
	}

	/** The information for opted out numbers that meet a specified criteria. */
	export interface OptedOutFilterFormProperties {

		/** Required */
		Name: FormControl<OptedOutFilterName | null | undefined>,
	}
	export function CreateOptedOutFilterFormGroup() {
		return new FormGroup<OptedOutFilterFormProperties>({
			Name: new FormControl<OptedOutFilterName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OptedOutFilterName { 'end-user-opted-out' = 0 }

	export interface DescribePhoneNumbersResult {
		PhoneNumbers?: Array<PhoneNumberInformation>;
		NextToken?: string;
	}
	export interface DescribePhoneNumbersResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePhoneNumbersResultFormGroup() {
		return new FormGroup<DescribePhoneNumbersResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The information for a phone number in an Amazon Web Services account. */
	export interface PhoneNumberInformation {

		/** Required */
		PhoneNumberArn: string;
		PhoneNumberId?: string;

		/** Required */
		PhoneNumber: string;

		/** Required */
		Status: NumberStatus;

		/** Required */
		IsoCountryCode: string;

		/** Required */
		MessageType: MessageType;

		/** Required */
		NumberCapabilities: Array<NumberCapability>;

		/** Required */
		NumberType: NumberType;

		/** Required */
		MonthlyLeasingPrice: string;

		/** Required */
		TwoWayEnabled: boolean;
		TwoWayChannelArn?: string;

		/** Required */
		SelfManagedOptOutsEnabled: boolean;

		/** Required */
		OptOutListName: string;

		/** Required */
		DeletionProtectionEnabled: boolean;
		PoolId?: string;

		/** Required */
		CreatedTimestamp: Date;
	}

	/** The information for a phone number in an Amazon Web Services account. */
	export interface PhoneNumberInformationFormProperties {

		/** Required */
		PhoneNumberArn: FormControl<string | null | undefined>,
		PhoneNumberId: FormControl<string | null | undefined>,

		/** Required */
		PhoneNumber: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<NumberStatus | null | undefined>,

		/** Required */
		IsoCountryCode: FormControl<string | null | undefined>,

		/** Required */
		MessageType: FormControl<MessageType | null | undefined>,

		/** Required */
		NumberType: FormControl<NumberType | null | undefined>,

		/** Required */
		MonthlyLeasingPrice: FormControl<string | null | undefined>,

		/** Required */
		TwoWayEnabled: FormControl<boolean | null | undefined>,
		TwoWayChannelArn: FormControl<string | null | undefined>,

		/** Required */
		SelfManagedOptOutsEnabled: FormControl<boolean | null | undefined>,

		/** Required */
		OptOutListName: FormControl<string | null | undefined>,

		/** Required */
		DeletionProtectionEnabled: FormControl<boolean | null | undefined>,
		PoolId: FormControl<string | null | undefined>,

		/** Required */
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePhoneNumberInformationFormGroup() {
		return new FormGroup<PhoneNumberInformationFormProperties>({
			PhoneNumberArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PhoneNumberId: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<NumberStatus | null | undefined>(undefined, [Validators.required]),
			IsoCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MessageType: new FormControl<MessageType | null | undefined>(undefined, [Validators.required]),
			NumberType: new FormControl<NumberType | null | undefined>(undefined, [Validators.required]),
			MonthlyLeasingPrice: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TwoWayEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			TwoWayChannelArn: new FormControl<string | null | undefined>(undefined),
			SelfManagedOptOutsEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			OptOutListName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeletionProtectionEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			PoolId: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NumberStatus { PENDING = 0, ACTIVE = 1, ASSOCIATING = 2, DISASSOCIATING = 3, DELETED = 4 }

	export enum NumberCapability { SMS = 0, VOICE = 1 }

	export enum NumberType { SHORT_CODE = 0, LONG_CODE = 1, TOLL_FREE = 2, TEN_DLC = 3 }

	export interface DescribePhoneNumbersRequest {
		PhoneNumberIds?: Array<string>;
		Filters?: Array<PhoneNumberFilter>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribePhoneNumbersRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribePhoneNumbersRequestFormGroup() {
		return new FormGroup<DescribePhoneNumbersRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The information for a phone number that meets a specified criteria. */
	export interface PhoneNumberFilter {

		/** Required */
		Name: PhoneNumberFilterName;

		/** Required */
		Values: Array<string>;
	}

	/** The information for a phone number that meets a specified criteria. */
	export interface PhoneNumberFilterFormProperties {

		/** Required */
		Name: FormControl<PhoneNumberFilterName | null | undefined>,
	}
	export function CreatePhoneNumberFilterFormGroup() {
		return new FormGroup<PhoneNumberFilterFormProperties>({
			Name: new FormControl<PhoneNumberFilterName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PhoneNumberFilterName { status = 0, 'iso-country-code' = 1, 'message-type' = 2, 'number-capability' = 3, 'number-type' = 4, 'two-way-enabled' = 5, 'self-managed-opt-outs-enabled' = 6, 'opt-out-list-name' = 7, 'deletion-protection-enabled' = 8 }

	export interface DescribePoolsResult {
		Pools?: Array<PoolInformation>;
		NextToken?: string;
	}
	export interface DescribePoolsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePoolsResultFormGroup() {
		return new FormGroup<DescribePoolsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The information for a pool in an Amazon Web Services account. */
	export interface PoolInformation {

		/** Required */
		PoolArn: string;

		/** Required */
		PoolId: string;

		/** Required */
		Status: PoolStatus;

		/** Required */
		MessageType: MessageType;

		/** Required */
		TwoWayEnabled: boolean;
		TwoWayChannelArn?: string;

		/** Required */
		SelfManagedOptOutsEnabled: boolean;

		/** Required */
		OptOutListName: string;

		/** Required */
		SharedRoutesEnabled: boolean;

		/** Required */
		DeletionProtectionEnabled: boolean;

		/** Required */
		CreatedTimestamp: Date;
	}

	/** The information for a pool in an Amazon Web Services account. */
	export interface PoolInformationFormProperties {

		/** Required */
		PoolArn: FormControl<string | null | undefined>,

		/** Required */
		PoolId: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<PoolStatus | null | undefined>,

		/** Required */
		MessageType: FormControl<MessageType | null | undefined>,

		/** Required */
		TwoWayEnabled: FormControl<boolean | null | undefined>,
		TwoWayChannelArn: FormControl<string | null | undefined>,

		/** Required */
		SelfManagedOptOutsEnabled: FormControl<boolean | null | undefined>,

		/** Required */
		OptOutListName: FormControl<string | null | undefined>,

		/** Required */
		SharedRoutesEnabled: FormControl<boolean | null | undefined>,

		/** Required */
		DeletionProtectionEnabled: FormControl<boolean | null | undefined>,

		/** Required */
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePoolInformationFormGroup() {
		return new FormGroup<PoolInformationFormProperties>({
			PoolArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<PoolStatus | null | undefined>(undefined, [Validators.required]),
			MessageType: new FormControl<MessageType | null | undefined>(undefined, [Validators.required]),
			TwoWayEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			TwoWayChannelArn: new FormControl<string | null | undefined>(undefined),
			SelfManagedOptOutsEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			OptOutListName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SharedRoutesEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			DeletionProtectionEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribePoolsRequest {
		PoolIds?: Array<string>;
		Filters?: Array<PoolFilter>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribePoolsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribePoolsRequestFormGroup() {
		return new FormGroup<DescribePoolsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The information for a pool that meets a specified criteria. */
	export interface PoolFilter {

		/** Required */
		Name: PoolFilterName;

		/** Required */
		Values: Array<string>;
	}

	/** The information for a pool that meets a specified criteria. */
	export interface PoolFilterFormProperties {

		/** Required */
		Name: FormControl<PoolFilterName | null | undefined>,
	}
	export function CreatePoolFilterFormGroup() {
		return new FormGroup<PoolFilterFormProperties>({
			Name: new FormControl<PoolFilterName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PoolFilterName { status = 0, 'message-type' = 1, 'two-way-enabled' = 2, 'self-managed-opt-outs-enabled' = 3, 'opt-out-list-name' = 4, 'shared-routes-enabled' = 5, 'deletion-protection-enabled' = 6 }

	export interface DescribeSenderIdsResult {
		SenderIds?: Array<SenderIdInformation>;
		NextToken?: string;
	}
	export interface DescribeSenderIdsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSenderIdsResultFormGroup() {
		return new FormGroup<DescribeSenderIdsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The information for all SenderIds in an Amazon Web Services account. */
	export interface SenderIdInformation {

		/** Required */
		SenderIdArn: string;

		/** Required */
		SenderId: string;

		/** Required */
		IsoCountryCode: string;

		/** Required */
		MessageTypes: Array<MessageType>;

		/** Required */
		MonthlyLeasingPrice: string;
	}

	/** The information for all SenderIds in an Amazon Web Services account. */
	export interface SenderIdInformationFormProperties {

		/** Required */
		SenderIdArn: FormControl<string | null | undefined>,

		/** Required */
		SenderId: FormControl<string | null | undefined>,

		/** Required */
		IsoCountryCode: FormControl<string | null | undefined>,

		/** Required */
		MonthlyLeasingPrice: FormControl<string | null | undefined>,
	}
	export function CreateSenderIdInformationFormGroup() {
		return new FormGroup<SenderIdInformationFormProperties>({
			SenderIdArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SenderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsoCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MonthlyLeasingPrice: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeSenderIdsRequest {
		SenderIds?: Array<SenderIdAndCountry>;
		Filters?: Array<SenderIdFilter>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeSenderIdsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeSenderIdsRequestFormGroup() {
		return new FormGroup<DescribeSenderIdsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The alphanumeric sender ID in a specific country that you want to describe. For more information on sender IDs see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-awssupport-sender-id.html">Requesting sender IDs for SMS messaging with Amazon Pinpoint </a> in the <i>Amazon Pinpoint User Guide</i>. */
	export interface SenderIdAndCountry {

		/** Required */
		SenderId: string;

		/** Required */
		IsoCountryCode: string;
	}

	/**  The alphanumeric sender ID in a specific country that you want to describe. For more information on sender IDs see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-awssupport-sender-id.html">Requesting sender IDs for SMS messaging with Amazon Pinpoint </a> in the <i>Amazon Pinpoint User Guide</i>. */
	export interface SenderIdAndCountryFormProperties {

		/** Required */
		SenderId: FormControl<string | null | undefined>,

		/** Required */
		IsoCountryCode: FormControl<string | null | undefined>,
	}
	export function CreateSenderIdAndCountryFormGroup() {
		return new FormGroup<SenderIdAndCountryFormProperties>({
			SenderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsoCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The information for a sender ID that meets a specified criteria. */
	export interface SenderIdFilter {

		/** Required */
		Name: SenderIdFilterName;

		/** Required */
		Values: Array<string>;
	}

	/** The information for a sender ID that meets a specified criteria. */
	export interface SenderIdFilterFormProperties {

		/** Required */
		Name: FormControl<SenderIdFilterName | null | undefined>,
	}
	export function CreateSenderIdFilterFormGroup() {
		return new FormGroup<SenderIdFilterFormProperties>({
			Name: new FormControl<SenderIdFilterName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SenderIdFilterName { 'sender-id' = 0, 'iso-country-code' = 1, 'message-type' = 2 }

	export interface DescribeSpendLimitsResult {
		SpendLimits?: Array<SpendLimit>;
		NextToken?: string;
	}
	export interface DescribeSpendLimitsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSpendLimitsResultFormGroup() {
		return new FormGroup<DescribeSpendLimitsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the current Amazon Pinpoint monthly spend limits for sending voice and text messages. For more information on increasing your monthly spend limit, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-awssupport-spend-threshold.html"> Requesting increases to your monthly SMS spending quota for Amazon Pinpoint </a> in the <i>Amazon Pinpoint User Guide</i>.  */
	export interface SpendLimit {

		/** Required */
		Name: SpendLimitName;

		/** Required */
		EnforcedLimit: number;

		/** Required */
		MaxLimit: number;

		/** Required */
		Overridden: boolean;
	}

	/** Describes the current Amazon Pinpoint monthly spend limits for sending voice and text messages. For more information on increasing your monthly spend limit, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-awssupport-spend-threshold.html"> Requesting increases to your monthly SMS spending quota for Amazon Pinpoint </a> in the <i>Amazon Pinpoint User Guide</i>.  */
	export interface SpendLimitFormProperties {

		/** Required */
		Name: FormControl<SpendLimitName | null | undefined>,

		/** Required */
		EnforcedLimit: FormControl<number | null | undefined>,

		/** Required */
		MaxLimit: FormControl<number | null | undefined>,

		/** Required */
		Overridden: FormControl<boolean | null | undefined>,
	}
	export function CreateSpendLimitFormGroup() {
		return new FormGroup<SpendLimitFormProperties>({
			Name: new FormControl<SpendLimitName | null | undefined>(undefined, [Validators.required]),
			EnforcedLimit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MaxLimit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Overridden: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SpendLimitName { TEXT_MESSAGE_MONTHLY_SPEND_LIMIT = 0, VOICE_MESSAGE_MONTHLY_SPEND_LIMIT = 1 }

	export interface DescribeSpendLimitsRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeSpendLimitsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeSpendLimitsRequestFormGroup() {
		return new FormGroup<DescribeSpendLimitsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DisassociateOriginationIdentityResult {
		PoolArn?: string;
		PoolId?: string;
		OriginationIdentityArn?: string;
		OriginationIdentity?: string;
		IsoCountryCode?: string;
	}
	export interface DisassociateOriginationIdentityResultFormProperties {
		PoolArn: FormControl<string | null | undefined>,
		PoolId: FormControl<string | null | undefined>,
		OriginationIdentityArn: FormControl<string | null | undefined>,
		OriginationIdentity: FormControl<string | null | undefined>,
		IsoCountryCode: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateOriginationIdentityResultFormGroup() {
		return new FormGroup<DisassociateOriginationIdentityResultFormProperties>({
			PoolArn: new FormControl<string | null | undefined>(undefined),
			PoolId: new FormControl<string | null | undefined>(undefined),
			OriginationIdentityArn: new FormControl<string | null | undefined>(undefined),
			OriginationIdentity: new FormControl<string | null | undefined>(undefined),
			IsoCountryCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateOriginationIdentityRequest {

		/** Required */
		PoolId: string;

		/** Required */
		OriginationIdentity: string;

		/** Required */
		IsoCountryCode: string;
		ClientToken?: string;
	}
	export interface DisassociateOriginationIdentityRequestFormProperties {

		/** Required */
		PoolId: FormControl<string | null | undefined>,

		/** Required */
		OriginationIdentity: FormControl<string | null | undefined>,

		/** Required */
		IsoCountryCode: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateOriginationIdentityRequestFormGroup() {
		return new FormGroup<DisassociateOriginationIdentityRequestFormProperties>({
			PoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OriginationIdentity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsoCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPoolOriginationIdentitiesResult {
		PoolArn?: string;
		PoolId?: string;
		OriginationIdentities?: Array<OriginationIdentityMetadata>;
		NextToken?: string;
	}
	export interface ListPoolOriginationIdentitiesResultFormProperties {
		PoolArn: FormControl<string | null | undefined>,
		PoolId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPoolOriginationIdentitiesResultFormGroup() {
		return new FormGroup<ListPoolOriginationIdentitiesResultFormProperties>({
			PoolArn: new FormControl<string | null | undefined>(undefined),
			PoolId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata for an origination identity associated with a pool. */
	export interface OriginationIdentityMetadata {

		/** Required */
		OriginationIdentityArn: string;

		/** Required */
		OriginationIdentity: string;

		/** Required */
		IsoCountryCode: string;

		/** Required */
		NumberCapabilities: Array<NumberCapability>;
	}

	/** The metadata for an origination identity associated with a pool. */
	export interface OriginationIdentityMetadataFormProperties {

		/** Required */
		OriginationIdentityArn: FormControl<string | null | undefined>,

		/** Required */
		OriginationIdentity: FormControl<string | null | undefined>,

		/** Required */
		IsoCountryCode: FormControl<string | null | undefined>,
	}
	export function CreateOriginationIdentityMetadataFormGroup() {
		return new FormGroup<OriginationIdentityMetadataFormProperties>({
			OriginationIdentityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OriginationIdentity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsoCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListPoolOriginationIdentitiesRequest {

		/** Required */
		PoolId: string;
		Filters?: Array<PoolOriginationIdentitiesFilter>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListPoolOriginationIdentitiesRequestFormProperties {

		/** Required */
		PoolId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPoolOriginationIdentitiesRequestFormGroup() {
		return new FormGroup<ListPoolOriginationIdentitiesRequestFormProperties>({
			PoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about origination identities associated with a pool that meets a specified criteria. */
	export interface PoolOriginationIdentitiesFilter {

		/** Required */
		Name: PoolOriginationIdentitiesFilterName;

		/** Required */
		Values: Array<string>;
	}

	/** Information about origination identities associated with a pool that meets a specified criteria. */
	export interface PoolOriginationIdentitiesFilterFormProperties {

		/** Required */
		Name: FormControl<PoolOriginationIdentitiesFilterName | null | undefined>,
	}
	export function CreatePoolOriginationIdentitiesFilterFormGroup() {
		return new FormGroup<PoolOriginationIdentitiesFilterFormProperties>({
			Name: new FormControl<PoolOriginationIdentitiesFilterName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PoolOriginationIdentitiesFilterName { 'iso-country-code' = 0, 'number-capability' = 1 }

	export interface ListTagsForResourceResult {
		ResourceArn?: string;
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResultFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResultFormGroup() {
		return new FormGroup<ListTagsForResourceResultFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutKeywordResult {
		OriginationIdentityArn?: string;
		OriginationIdentity?: string;
		Keyword?: string;
		KeywordMessage?: string;
		KeywordAction?: KeywordAction;
	}
	export interface PutKeywordResultFormProperties {
		OriginationIdentityArn: FormControl<string | null | undefined>,
		OriginationIdentity: FormControl<string | null | undefined>,
		Keyword: FormControl<string | null | undefined>,
		KeywordMessage: FormControl<string | null | undefined>,
		KeywordAction: FormControl<KeywordAction | null | undefined>,
	}
	export function CreatePutKeywordResultFormGroup() {
		return new FormGroup<PutKeywordResultFormProperties>({
			OriginationIdentityArn: new FormControl<string | null | undefined>(undefined),
			OriginationIdentity: new FormControl<string | null | undefined>(undefined),
			Keyword: new FormControl<string | null | undefined>(undefined),
			KeywordMessage: new FormControl<string | null | undefined>(undefined),
			KeywordAction: new FormControl<KeywordAction | null | undefined>(undefined),
		});

	}

	export interface PutKeywordRequest {

		/** Required */
		OriginationIdentity: string;

		/** Required */
		Keyword: string;

		/** Required */
		KeywordMessage: string;
		KeywordAction?: KeywordAction;
	}
	export interface PutKeywordRequestFormProperties {

		/** Required */
		OriginationIdentity: FormControl<string | null | undefined>,

		/** Required */
		Keyword: FormControl<string | null | undefined>,

		/** Required */
		KeywordMessage: FormControl<string | null | undefined>,
		KeywordAction: FormControl<KeywordAction | null | undefined>,
	}
	export function CreatePutKeywordRequestFormGroup() {
		return new FormGroup<PutKeywordRequestFormProperties>({
			OriginationIdentity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Keyword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeywordMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeywordAction: new FormControl<KeywordAction | null | undefined>(undefined),
		});

	}

	export interface PutOptedOutNumberResult {
		OptOutListArn?: string;
		OptOutListName?: string;
		OptedOutNumber?: string;
		OptedOutTimestamp?: Date;
		EndUserOptedOut?: boolean | null;
	}
	export interface PutOptedOutNumberResultFormProperties {
		OptOutListArn: FormControl<string | null | undefined>,
		OptOutListName: FormControl<string | null | undefined>,
		OptedOutNumber: FormControl<string | null | undefined>,
		OptedOutTimestamp: FormControl<Date | null | undefined>,
		EndUserOptedOut: FormControl<boolean | null | undefined>,
	}
	export function CreatePutOptedOutNumberResultFormGroup() {
		return new FormGroup<PutOptedOutNumberResultFormProperties>({
			OptOutListArn: new FormControl<string | null | undefined>(undefined),
			OptOutListName: new FormControl<string | null | undefined>(undefined),
			OptedOutNumber: new FormControl<string | null | undefined>(undefined),
			OptedOutTimestamp: new FormControl<Date | null | undefined>(undefined),
			EndUserOptedOut: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutOptedOutNumberRequest {

		/** Required */
		OptOutListName: string;

		/** Required */
		OptedOutNumber: string;
	}
	export interface PutOptedOutNumberRequestFormProperties {

		/** Required */
		OptOutListName: FormControl<string | null | undefined>,

		/** Required */
		OptedOutNumber: FormControl<string | null | undefined>,
	}
	export function CreatePutOptedOutNumberRequestFormGroup() {
		return new FormGroup<PutOptedOutNumberRequestFormProperties>({
			OptOutListName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OptedOutNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ReleasePhoneNumberResult {
		PhoneNumberArn?: string;
		PhoneNumberId?: string;
		PhoneNumber?: string;
		Status?: NumberStatus;
		IsoCountryCode?: string;
		MessageType?: MessageType;
		NumberCapabilities?: Array<NumberCapability>;
		NumberType?: NumberType;
		MonthlyLeasingPrice?: string;
		TwoWayEnabled?: boolean | null;
		TwoWayChannelArn?: string;
		SelfManagedOptOutsEnabled?: boolean | null;
		OptOutListName?: string;
		CreatedTimestamp?: Date;
	}
	export interface ReleasePhoneNumberResultFormProperties {
		PhoneNumberArn: FormControl<string | null | undefined>,
		PhoneNumberId: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
		Status: FormControl<NumberStatus | null | undefined>,
		IsoCountryCode: FormControl<string | null | undefined>,
		MessageType: FormControl<MessageType | null | undefined>,
		NumberType: FormControl<NumberType | null | undefined>,
		MonthlyLeasingPrice: FormControl<string | null | undefined>,
		TwoWayEnabled: FormControl<boolean | null | undefined>,
		TwoWayChannelArn: FormControl<string | null | undefined>,
		SelfManagedOptOutsEnabled: FormControl<boolean | null | undefined>,
		OptOutListName: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateReleasePhoneNumberResultFormGroup() {
		return new FormGroup<ReleasePhoneNumberResultFormProperties>({
			PhoneNumberArn: new FormControl<string | null | undefined>(undefined),
			PhoneNumberId: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<NumberStatus | null | undefined>(undefined),
			IsoCountryCode: new FormControl<string | null | undefined>(undefined),
			MessageType: new FormControl<MessageType | null | undefined>(undefined),
			NumberType: new FormControl<NumberType | null | undefined>(undefined),
			MonthlyLeasingPrice: new FormControl<string | null | undefined>(undefined),
			TwoWayEnabled: new FormControl<boolean | null | undefined>(undefined),
			TwoWayChannelArn: new FormControl<string | null | undefined>(undefined),
			SelfManagedOptOutsEnabled: new FormControl<boolean | null | undefined>(undefined),
			OptOutListName: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ReleasePhoneNumberRequest {

		/** Required */
		PhoneNumberId: string;
	}
	export interface ReleasePhoneNumberRequestFormProperties {

		/** Required */
		PhoneNumberId: FormControl<string | null | undefined>,
	}
	export function CreateReleasePhoneNumberRequestFormGroup() {
		return new FormGroup<ReleasePhoneNumberRequestFormProperties>({
			PhoneNumberId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RequestPhoneNumberResult {
		PhoneNumberArn?: string;
		PhoneNumberId?: string;
		PhoneNumber?: string;
		Status?: NumberStatus;
		IsoCountryCode?: string;
		MessageType?: MessageType;
		NumberCapabilities?: Array<NumberCapability>;
		NumberType?: RequestableNumberType;
		MonthlyLeasingPrice?: string;
		TwoWayEnabled?: boolean | null;
		TwoWayChannelArn?: string;
		SelfManagedOptOutsEnabled?: boolean | null;
		OptOutListName?: string;
		DeletionProtectionEnabled?: boolean | null;
		PoolId?: string;
		Tags?: Array<Tag>;
		CreatedTimestamp?: Date;
	}
	export interface RequestPhoneNumberResultFormProperties {
		PhoneNumberArn: FormControl<string | null | undefined>,
		PhoneNumberId: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
		Status: FormControl<NumberStatus | null | undefined>,
		IsoCountryCode: FormControl<string | null | undefined>,
		MessageType: FormControl<MessageType | null | undefined>,
		NumberType: FormControl<RequestableNumberType | null | undefined>,
		MonthlyLeasingPrice: FormControl<string | null | undefined>,
		TwoWayEnabled: FormControl<boolean | null | undefined>,
		TwoWayChannelArn: FormControl<string | null | undefined>,
		SelfManagedOptOutsEnabled: FormControl<boolean | null | undefined>,
		OptOutListName: FormControl<string | null | undefined>,
		DeletionProtectionEnabled: FormControl<boolean | null | undefined>,
		PoolId: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateRequestPhoneNumberResultFormGroup() {
		return new FormGroup<RequestPhoneNumberResultFormProperties>({
			PhoneNumberArn: new FormControl<string | null | undefined>(undefined),
			PhoneNumberId: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<NumberStatus | null | undefined>(undefined),
			IsoCountryCode: new FormControl<string | null | undefined>(undefined),
			MessageType: new FormControl<MessageType | null | undefined>(undefined),
			NumberType: new FormControl<RequestableNumberType | null | undefined>(undefined),
			MonthlyLeasingPrice: new FormControl<string | null | undefined>(undefined),
			TwoWayEnabled: new FormControl<boolean | null | undefined>(undefined),
			TwoWayChannelArn: new FormControl<string | null | undefined>(undefined),
			SelfManagedOptOutsEnabled: new FormControl<boolean | null | undefined>(undefined),
			OptOutListName: new FormControl<string | null | undefined>(undefined),
			DeletionProtectionEnabled: new FormControl<boolean | null | undefined>(undefined),
			PoolId: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum RequestableNumberType { LONG_CODE = 0, TOLL_FREE = 1, TEN_DLC = 2 }

	export interface RequestPhoneNumberRequest {

		/** Required */
		IsoCountryCode: string;

		/** Required */
		MessageType: MessageType;

		/** Required */
		NumberCapabilities: Array<NumberCapability>;

		/** Required */
		NumberType: RequestableNumberType;
		OptOutListName?: string;
		PoolId?: string;
		RegistrationId?: string;
		DeletionProtectionEnabled?: boolean | null;
		Tags?: Array<Tag>;
		ClientToken?: string;
	}
	export interface RequestPhoneNumberRequestFormProperties {

		/** Required */
		IsoCountryCode: FormControl<string | null | undefined>,

		/** Required */
		MessageType: FormControl<MessageType | null | undefined>,

		/** Required */
		NumberType: FormControl<RequestableNumberType | null | undefined>,
		OptOutListName: FormControl<string | null | undefined>,
		PoolId: FormControl<string | null | undefined>,
		RegistrationId: FormControl<string | null | undefined>,
		DeletionProtectionEnabled: FormControl<boolean | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateRequestPhoneNumberRequestFormGroup() {
		return new FormGroup<RequestPhoneNumberRequestFormProperties>({
			IsoCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MessageType: new FormControl<MessageType | null | undefined>(undefined, [Validators.required]),
			NumberType: new FormControl<RequestableNumberType | null | undefined>(undefined, [Validators.required]),
			OptOutListName: new FormControl<string | null | undefined>(undefined),
			PoolId: new FormControl<string | null | undefined>(undefined),
			RegistrationId: new FormControl<string | null | undefined>(undefined),
			DeletionProtectionEnabled: new FormControl<boolean | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendTextMessageResult {
		MessageId?: string;
	}
	export interface SendTextMessageResultFormProperties {
		MessageId: FormControl<string | null | undefined>,
	}
	export function CreateSendTextMessageResultFormGroup() {
		return new FormGroup<SendTextMessageResultFormProperties>({
			MessageId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendTextMessageRequest {

		/** Required */
		DestinationPhoneNumber: string;
		OriginationIdentity?: string;
		MessageBody?: string;
		MessageType?: MessageType;
		Keyword?: string;
		ConfigurationSetName?: string;
		MaxPrice?: string;
		TimeToLive?: number | null;
		Context?: ContextMap;
		DestinationCountryParameters?: DestinationCountryParameters;
		DryRun?: boolean | null;
	}
	export interface SendTextMessageRequestFormProperties {

		/** Required */
		DestinationPhoneNumber: FormControl<string | null | undefined>,
		OriginationIdentity: FormControl<string | null | undefined>,
		MessageBody: FormControl<string | null | undefined>,
		MessageType: FormControl<MessageType | null | undefined>,
		Keyword: FormControl<string | null | undefined>,
		ConfigurationSetName: FormControl<string | null | undefined>,
		MaxPrice: FormControl<string | null | undefined>,
		TimeToLive: FormControl<number | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateSendTextMessageRequestFormGroup() {
		return new FormGroup<SendTextMessageRequestFormProperties>({
			DestinationPhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OriginationIdentity: new FormControl<string | null | undefined>(undefined),
			MessageBody: new FormControl<string | null | undefined>(undefined),
			MessageType: new FormControl<MessageType | null | undefined>(undefined),
			Keyword: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
			MaxPrice: new FormControl<string | null | undefined>(undefined),
			TimeToLive: new FormControl<number | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ContextMap {
	}
	export interface ContextMapFormProperties {
	}
	export function CreateContextMapFormGroup() {
		return new FormGroup<ContextMapFormProperties>({
		});

	}

	export interface DestinationCountryParameters {
	}
	export interface DestinationCountryParametersFormProperties {
	}
	export function CreateDestinationCountryParametersFormGroup() {
		return new FormGroup<DestinationCountryParametersFormProperties>({
		});

	}

	export interface SendVoiceMessageResult {
		MessageId?: string;
	}
	export interface SendVoiceMessageResultFormProperties {
		MessageId: FormControl<string | null | undefined>,
	}
	export function CreateSendVoiceMessageResultFormGroup() {
		return new FormGroup<SendVoiceMessageResultFormProperties>({
			MessageId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendVoiceMessageRequest {

		/** Required */
		DestinationPhoneNumber: string;

		/** Required */
		OriginationIdentity: string;
		MessageBody?: string;
		MessageBodyTextType?: VoiceMessageBodyTextType;
		VoiceId?: VoiceId;
		ConfigurationSetName?: string;
		MaxPricePerMinute?: string;
		TimeToLive?: number | null;
		Context?: ContextMap;
		DryRun?: boolean | null;
	}
	export interface SendVoiceMessageRequestFormProperties {

		/** Required */
		DestinationPhoneNumber: FormControl<string | null | undefined>,

		/** Required */
		OriginationIdentity: FormControl<string | null | undefined>,
		MessageBody: FormControl<string | null | undefined>,
		MessageBodyTextType: FormControl<VoiceMessageBodyTextType | null | undefined>,
		VoiceId: FormControl<VoiceId | null | undefined>,
		ConfigurationSetName: FormControl<string | null | undefined>,
		MaxPricePerMinute: FormControl<string | null | undefined>,
		TimeToLive: FormControl<number | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateSendVoiceMessageRequestFormGroup() {
		return new FormGroup<SendVoiceMessageRequestFormProperties>({
			DestinationPhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OriginationIdentity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MessageBody: new FormControl<string | null | undefined>(undefined),
			MessageBodyTextType: new FormControl<VoiceMessageBodyTextType | null | undefined>(undefined),
			VoiceId: new FormControl<VoiceId | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
			MaxPricePerMinute: new FormControl<string | null | undefined>(undefined),
			TimeToLive: new FormControl<number | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum VoiceMessageBodyTextType { TEXT = 0, SSML = 1 }

	export enum VoiceId { AMY = 0, ASTRID = 1, BIANCA = 2, BRIAN = 3, CAMILA = 4, CARLA = 5, CARMEN = 6, CELINE = 7, CHANTAL = 8, CONCHITA = 9, CRISTIANO = 10, DORA = 11, EMMA = 12, ENRIQUE = 13, EWA = 14, FILIZ = 15, GERAINT = 16, GIORGIO = 17, GWYNETH = 18, HANS = 19, INES = 20, IVY = 21, JACEK = 22, JAN = 23, JOANNA = 24, JOEY = 25, JUSTIN = 26, KARL = 27, KENDRA = 28, KIMBERLY = 29, LEA = 30, LIV = 31, LOTTE = 32, LUCIA = 33, LUPE = 34, MADS = 35, MAJA = 36, MARLENE = 37, MATHIEU = 38, MATTHEW = 39, MAXIM = 40, MIA = 41, MIGUEL = 42, MIZUKI = 43, NAJA = 44, NICOLE = 45, PENELOPE = 46, RAVEENA = 47, RICARDO = 48, RUBEN = 49, RUSSELL = 50, SALLI = 51, SEOYEON = 52, TAKUMI = 53, TATYANA = 54, VICKI = 55, VITORIA = 56, ZEINA = 57, ZHIYU = 58 }

	export interface SetDefaultMessageTypeResult {
		ConfigurationSetArn?: string;
		ConfigurationSetName?: string;
		MessageType?: MessageType;
	}
	export interface SetDefaultMessageTypeResultFormProperties {
		ConfigurationSetArn: FormControl<string | null | undefined>,
		ConfigurationSetName: FormControl<string | null | undefined>,
		MessageType: FormControl<MessageType | null | undefined>,
	}
	export function CreateSetDefaultMessageTypeResultFormGroup() {
		return new FormGroup<SetDefaultMessageTypeResultFormProperties>({
			ConfigurationSetArn: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
			MessageType: new FormControl<MessageType | null | undefined>(undefined),
		});

	}

	export interface SetDefaultMessageTypeRequest {

		/** Required */
		ConfigurationSetName: string;

		/** Required */
		MessageType: MessageType;
	}
	export interface SetDefaultMessageTypeRequestFormProperties {

		/** Required */
		ConfigurationSetName: FormControl<string | null | undefined>,

		/** Required */
		MessageType: FormControl<MessageType | null | undefined>,
	}
	export function CreateSetDefaultMessageTypeRequestFormGroup() {
		return new FormGroup<SetDefaultMessageTypeRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MessageType: new FormControl<MessageType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SetDefaultSenderIdResult {
		ConfigurationSetArn?: string;
		ConfigurationSetName?: string;
		SenderId?: string;
	}
	export interface SetDefaultSenderIdResultFormProperties {
		ConfigurationSetArn: FormControl<string | null | undefined>,
		ConfigurationSetName: FormControl<string | null | undefined>,
		SenderId: FormControl<string | null | undefined>,
	}
	export function CreateSetDefaultSenderIdResultFormGroup() {
		return new FormGroup<SetDefaultSenderIdResultFormProperties>({
			ConfigurationSetArn: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
			SenderId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetDefaultSenderIdRequest {

		/** Required */
		ConfigurationSetName: string;

		/** Required */
		SenderId: string;
	}
	export interface SetDefaultSenderIdRequestFormProperties {

		/** Required */
		ConfigurationSetName: FormControl<string | null | undefined>,

		/** Required */
		SenderId: FormControl<string | null | undefined>,
	}
	export function CreateSetDefaultSenderIdRequestFormGroup() {
		return new FormGroup<SetDefaultSenderIdRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SenderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SetTextMessageSpendLimitOverrideResult {
		MonthlyLimit?: number | null;
	}
	export interface SetTextMessageSpendLimitOverrideResultFormProperties {
		MonthlyLimit: FormControl<number | null | undefined>,
	}
	export function CreateSetTextMessageSpendLimitOverrideResultFormGroup() {
		return new FormGroup<SetTextMessageSpendLimitOverrideResultFormProperties>({
			MonthlyLimit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SetTextMessageSpendLimitOverrideRequest {

		/** Required */
		MonthlyLimit: number;
	}
	export interface SetTextMessageSpendLimitOverrideRequestFormProperties {

		/** Required */
		MonthlyLimit: FormControl<number | null | undefined>,
	}
	export function CreateSetTextMessageSpendLimitOverrideRequestFormGroup() {
		return new FormGroup<SetTextMessageSpendLimitOverrideRequestFormProperties>({
			MonthlyLimit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SetVoiceMessageSpendLimitOverrideResult {
		MonthlyLimit?: number | null;
	}
	export interface SetVoiceMessageSpendLimitOverrideResultFormProperties {
		MonthlyLimit: FormControl<number | null | undefined>,
	}
	export function CreateSetVoiceMessageSpendLimitOverrideResultFormGroup() {
		return new FormGroup<SetVoiceMessageSpendLimitOverrideResultFormProperties>({
			MonthlyLimit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SetVoiceMessageSpendLimitOverrideRequest {

		/** Required */
		MonthlyLimit: number;
	}
	export interface SetVoiceMessageSpendLimitOverrideRequestFormProperties {

		/** Required */
		MonthlyLimit: FormControl<number | null | undefined>,
	}
	export function CreateSetVoiceMessageSpendLimitOverrideRequestFormGroup() {
		return new FormGroup<SetVoiceMessageSpendLimitOverrideRequestFormProperties>({
			MonthlyLimit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceResult {
	}
	export interface TagResourceResultFormProperties {
	}
	export function CreateTagResourceResultFormGroup() {
		return new FormGroup<TagResourceResultFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceResult {
	}
	export interface UntagResourceResultFormProperties {
	}
	export function CreateUntagResourceResultFormGroup() {
		return new FormGroup<UntagResourceResultFormProperties>({
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateEventDestinationResult {
		ConfigurationSetArn?: string;
		ConfigurationSetName?: string;
		EventDestination?: EventDestination;
	}
	export interface UpdateEventDestinationResultFormProperties {
		ConfigurationSetArn: FormControl<string | null | undefined>,
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEventDestinationResultFormGroup() {
		return new FormGroup<UpdateEventDestinationResultFormProperties>({
			ConfigurationSetArn: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEventDestinationRequest {

		/** Required */
		ConfigurationSetName: string;

		/** Required */
		EventDestinationName: string;
		Enabled?: boolean | null;
		MatchingEventTypes?: Array<EventType>;
		CloudWatchLogsDestination?: CloudWatchLogsDestination;
		KinesisFirehoseDestination?: KinesisFirehoseDestination;
		SnsDestination?: SnsDestination;
	}
	export interface UpdateEventDestinationRequestFormProperties {

		/** Required */
		ConfigurationSetName: FormControl<string | null | undefined>,

		/** Required */
		EventDestinationName: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateEventDestinationRequestFormGroup() {
		return new FormGroup<UpdateEventDestinationRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventDestinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdatePhoneNumberResult {
		PhoneNumberArn?: string;
		PhoneNumberId?: string;
		PhoneNumber?: string;
		Status?: NumberStatus;
		IsoCountryCode?: string;
		MessageType?: MessageType;
		NumberCapabilities?: Array<NumberCapability>;
		NumberType?: NumberType;
		MonthlyLeasingPrice?: string;
		TwoWayEnabled?: boolean | null;
		TwoWayChannelArn?: string;
		SelfManagedOptOutsEnabled?: boolean | null;
		OptOutListName?: string;
		DeletionProtectionEnabled?: boolean | null;
		CreatedTimestamp?: Date;
	}
	export interface UpdatePhoneNumberResultFormProperties {
		PhoneNumberArn: FormControl<string | null | undefined>,
		PhoneNumberId: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
		Status: FormControl<NumberStatus | null | undefined>,
		IsoCountryCode: FormControl<string | null | undefined>,
		MessageType: FormControl<MessageType | null | undefined>,
		NumberType: FormControl<NumberType | null | undefined>,
		MonthlyLeasingPrice: FormControl<string | null | undefined>,
		TwoWayEnabled: FormControl<boolean | null | undefined>,
		TwoWayChannelArn: FormControl<string | null | undefined>,
		SelfManagedOptOutsEnabled: FormControl<boolean | null | undefined>,
		OptOutListName: FormControl<string | null | undefined>,
		DeletionProtectionEnabled: FormControl<boolean | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateUpdatePhoneNumberResultFormGroup() {
		return new FormGroup<UpdatePhoneNumberResultFormProperties>({
			PhoneNumberArn: new FormControl<string | null | undefined>(undefined),
			PhoneNumberId: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<NumberStatus | null | undefined>(undefined),
			IsoCountryCode: new FormControl<string | null | undefined>(undefined),
			MessageType: new FormControl<MessageType | null | undefined>(undefined),
			NumberType: new FormControl<NumberType | null | undefined>(undefined),
			MonthlyLeasingPrice: new FormControl<string | null | undefined>(undefined),
			TwoWayEnabled: new FormControl<boolean | null | undefined>(undefined),
			TwoWayChannelArn: new FormControl<string | null | undefined>(undefined),
			SelfManagedOptOutsEnabled: new FormControl<boolean | null | undefined>(undefined),
			OptOutListName: new FormControl<string | null | undefined>(undefined),
			DeletionProtectionEnabled: new FormControl<boolean | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdatePhoneNumberRequest {

		/** Required */
		PhoneNumberId: string;
		TwoWayEnabled?: boolean | null;
		TwoWayChannelArn?: string;
		SelfManagedOptOutsEnabled?: boolean | null;
		OptOutListName?: string;
		DeletionProtectionEnabled?: boolean | null;
	}
	export interface UpdatePhoneNumberRequestFormProperties {

		/** Required */
		PhoneNumberId: FormControl<string | null | undefined>,
		TwoWayEnabled: FormControl<boolean | null | undefined>,
		TwoWayChannelArn: FormControl<string | null | undefined>,
		SelfManagedOptOutsEnabled: FormControl<boolean | null | undefined>,
		OptOutListName: FormControl<string | null | undefined>,
		DeletionProtectionEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdatePhoneNumberRequestFormGroup() {
		return new FormGroup<UpdatePhoneNumberRequestFormProperties>({
			PhoneNumberId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TwoWayEnabled: new FormControl<boolean | null | undefined>(undefined),
			TwoWayChannelArn: new FormControl<string | null | undefined>(undefined),
			SelfManagedOptOutsEnabled: new FormControl<boolean | null | undefined>(undefined),
			OptOutListName: new FormControl<string | null | undefined>(undefined),
			DeletionProtectionEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdatePoolResult {
		PoolArn?: string;
		PoolId?: string;
		Status?: PoolStatus;
		MessageType?: MessageType;
		TwoWayEnabled?: boolean | null;
		TwoWayChannelArn?: string;
		SelfManagedOptOutsEnabled?: boolean | null;
		OptOutListName?: string;
		SharedRoutesEnabled?: boolean | null;
		DeletionProtectionEnabled?: boolean | null;
		CreatedTimestamp?: Date;
	}
	export interface UpdatePoolResultFormProperties {
		PoolArn: FormControl<string | null | undefined>,
		PoolId: FormControl<string | null | undefined>,
		Status: FormControl<PoolStatus | null | undefined>,
		MessageType: FormControl<MessageType | null | undefined>,
		TwoWayEnabled: FormControl<boolean | null | undefined>,
		TwoWayChannelArn: FormControl<string | null | undefined>,
		SelfManagedOptOutsEnabled: FormControl<boolean | null | undefined>,
		OptOutListName: FormControl<string | null | undefined>,
		SharedRoutesEnabled: FormControl<boolean | null | undefined>,
		DeletionProtectionEnabled: FormControl<boolean | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateUpdatePoolResultFormGroup() {
		return new FormGroup<UpdatePoolResultFormProperties>({
			PoolArn: new FormControl<string | null | undefined>(undefined),
			PoolId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<PoolStatus | null | undefined>(undefined),
			MessageType: new FormControl<MessageType | null | undefined>(undefined),
			TwoWayEnabled: new FormControl<boolean | null | undefined>(undefined),
			TwoWayChannelArn: new FormControl<string | null | undefined>(undefined),
			SelfManagedOptOutsEnabled: new FormControl<boolean | null | undefined>(undefined),
			OptOutListName: new FormControl<string | null | undefined>(undefined),
			SharedRoutesEnabled: new FormControl<boolean | null | undefined>(undefined),
			DeletionProtectionEnabled: new FormControl<boolean | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdatePoolRequest {

		/** Required */
		PoolId: string;
		TwoWayEnabled?: boolean | null;
		TwoWayChannelArn?: string;
		SelfManagedOptOutsEnabled?: boolean | null;
		OptOutListName?: string;
		SharedRoutesEnabled?: boolean | null;
		DeletionProtectionEnabled?: boolean | null;
	}
	export interface UpdatePoolRequestFormProperties {

		/** Required */
		PoolId: FormControl<string | null | undefined>,
		TwoWayEnabled: FormControl<boolean | null | undefined>,
		TwoWayChannelArn: FormControl<string | null | undefined>,
		SelfManagedOptOutsEnabled: FormControl<boolean | null | undefined>,
		OptOutListName: FormControl<string | null | undefined>,
		SharedRoutesEnabled: FormControl<boolean | null | undefined>,
		DeletionProtectionEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdatePoolRequestFormGroup() {
		return new FormGroup<UpdatePoolRequestFormProperties>({
			PoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TwoWayEnabled: new FormControl<boolean | null | undefined>(undefined),
			TwoWayChannelArn: new FormControl<string | null | undefined>(undefined),
			SelfManagedOptOutsEnabled: new FormControl<boolean | null | undefined>(undefined),
			OptOutListName: new FormControl<string | null | undefined>(undefined),
			SharedRoutesEnabled: new FormControl<boolean | null | undefined>(undefined),
			DeletionProtectionEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DestinationCountryParameterKey { IN_TEMPLATE_ID = 0, IN_ENTITY_ID = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Associates the specified origination identity with a pool.</p> <p>If the origination identity is a phone number and is already associated with another pool, an Error is returned. A sender ID can be associated with multiple pools.</p> <p>If the origination identity configuration doesn't match the pool's configuration, an Error is returned.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.AssociateOriginationIdentity
		 * @return {AssociateOriginationIdentityResult} Success
		 */
		AssociateOriginationIdentity(requestBody: AssociateOriginationIdentityRequest): Observable<AssociateOriginationIdentityResult> {
			return this.http.post<AssociateOriginationIdentityResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.AssociateOriginationIdentity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new configuration set. After you create the configuration set, you can add one or more event destinations to it.</p> <p>A configuration set is a set of rules that you apply to the SMS and voice messages that you send.</p> <p>When you send a message, you can optionally specify a single configuration set.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.CreateConfigurationSet
		 * @return {CreateConfigurationSetResult} Success
		 */
		CreateConfigurationSet(requestBody: CreateConfigurationSetRequest): Observable<CreateConfigurationSetResult> {
			return this.http.post<CreateConfigurationSetResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.CreateConfigurationSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new event destination in a configuration set.</p> <p>An event destination is a location where you send message events. The event options are Amazon CloudWatch, Amazon Kinesis Data Firehose, or Amazon SNS. For example, when a message is delivered successfully, you can send information about that event to an event destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic.</p> <p>Each configuration set can contain between 0 and 5 event destinations. Each event destination can contain a reference to a single destination, such as a CloudWatch or Kinesis Data Firehose destination.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.CreateEventDestination
		 * @return {CreateEventDestinationResult} Success
		 */
		CreateEventDestination(requestBody: CreateEventDestinationRequest): Observable<CreateEventDestinationResult> {
			return this.http.post<CreateEventDestinationResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.CreateEventDestination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new opt-out list.</p> <p>If the opt-out list name already exists, an Error is returned.</p> <p>An opt-out list is a list of phone numbers that are opted out, meaning you can't send SMS or voice messages to them. If end user replies with the keyword "STOP," an entry for the phone number is added to the opt-out list. In addition to STOP, your recipients can use any supported opt-out keyword, such as CANCEL or OPTOUT. For a list of supported opt-out keywords, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-manage.html#channels-sms-manage-optout"> SMS opt out </a> in the <i>Amazon Pinpoint User Guide</i>.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.CreateOptOutList
		 * @return {CreateOptOutListResult} Success
		 */
		CreateOptOutList(requestBody: CreateOptOutListRequest): Observable<CreateOptOutListResult> {
			return this.http.post<CreateOptOutListResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.CreateOptOutList', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new pool and associates the specified origination identity to the pool. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p> <p>The new pool inherits its configuration from the specified origination identity. This includes keywords, message type, opt-out list, two-way configuration, and self-managed opt-out configuration. Deletion protection isn't inherited from the origination identity and defaults to false.</p> <p>If the origination identity is a phone number and is already associated with another pool, an Error is returned. A sender ID can be associated with multiple pools.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.CreatePool
		 * @return {CreatePoolResult} Success
		 */
		CreatePool(requestBody: CreatePoolRequest): Observable<CreatePoolResult> {
			return this.http.post<CreatePoolResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.CreatePool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an existing configuration set.</p> <p>A configuration set is a set of rules that you apply to voice and SMS messages that you send. In a configuration set, you can specify a destination for specific types of events related to voice and SMS messages. </p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.DeleteConfigurationSet
		 * @return {DeleteConfigurationSetResult} Success
		 */
		DeleteConfigurationSet(requestBody: DeleteConfigurationSetRequest): Observable<DeleteConfigurationSetResult> {
			return this.http.post<DeleteConfigurationSetResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.DeleteConfigurationSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an existing default message type on a configuration set.</p> <p> A message type is a type of messages that you plan to send. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose <b>Transactional</b>. If you plan to send messages that contain marketing material or other promotional content, choose <b>Promotional</b>. This setting applies to your entire Amazon Web Services account. </p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.DeleteDefaultMessageType
		 * @return {DeleteDefaultMessageTypeResult} Success
		 */
		DeleteDefaultMessageType(requestBody: DeleteDefaultMessageTypeRequest): Observable<DeleteDefaultMessageTypeResult> {
			return this.http.post<DeleteDefaultMessageTypeResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.DeleteDefaultMessageType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an existing default sender ID on a configuration set.</p> <p>A default sender ID is the identity that appears on recipients' devices when they receive SMS messages. Support for sender ID capabilities varies by country or region.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.DeleteDefaultSenderId
		 * @return {DeleteDefaultSenderIdResult} Success
		 */
		DeleteDefaultSenderId(requestBody: DeleteDefaultSenderIdRequest): Observable<DeleteDefaultSenderIdResult> {
			return this.http.post<DeleteDefaultSenderIdResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.DeleteDefaultSenderId', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an existing event destination.</p> <p>An event destination is a location where you send response information about the messages that you send. For example, when a message is delivered successfully, you can send information about that event to an Amazon CloudWatch destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.DeleteEventDestination
		 * @return {DeleteEventDestinationResult} Success
		 */
		DeleteEventDestination(requestBody: DeleteEventDestinationRequest): Observable<DeleteEventDestinationResult> {
			return this.http.post<DeleteEventDestinationResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.DeleteEventDestination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an existing keyword from an origination phone number or pool.</p> <p>A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>Keywords "HELP" and "STOP" can't be deleted or modified.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.DeleteKeyword
		 * @return {DeleteKeywordResult} Success
		 */
		DeleteKeyword(requestBody: DeleteKeywordRequest): Observable<DeleteKeywordResult> {
			return this.http.post<DeleteKeywordResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.DeleteKeyword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an existing opt-out list. All opted out phone numbers in the opt-out list are deleted.</p> <p>If the specified opt-out list name doesn't exist or is in-use by an origination phone number or pool, an Error is returned.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.DeleteOptOutList
		 * @return {DeleteOptOutListResult} Success
		 */
		DeleteOptOutList(requestBody: DeleteOptOutListRequest): Observable<DeleteOptOutListResult> {
			return this.http.post<DeleteOptOutListResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.DeleteOptOutList', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an existing opted out destination phone number from the specified opt-out list.</p> <p>Each destination phone number can only be deleted once every 30 days.</p> <p>If the specified destination phone number doesn't exist or if the opt-out list doesn't exist, an Error is returned.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.DeleteOptedOutNumber
		 * @return {DeleteOptedOutNumberResult} Success
		 */
		DeleteOptedOutNumber(requestBody: DeleteOptedOutNumberRequest): Observable<DeleteOptedOutNumberResult> {
			return this.http.post<DeleteOptedOutNumberResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.DeleteOptedOutNumber', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an existing pool. Deleting a pool disassociates all origination identities from that pool.</p> <p>If the pool status isn't active or if deletion protection is enabled, an Error is returned.</p> <p>A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.DeletePool
		 * @return {DeletePoolResult} Success
		 */
		DeletePool(requestBody: DeletePoolRequest): Observable<DeletePoolResult> {
			return this.http.post<DeletePoolResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.DeletePool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an account-level monthly spending limit override for sending text messages. Deleting a spend limit override will set the <code>EnforcedLimit</code> to equal the <code>MaxLimit</code>, which is controlled by Amazon Web Services. For more information on spend limits (quotas) see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html">Amazon Pinpoint quotas </a> in the <i>Amazon Pinpoint Developer Guide</i>.
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.DeleteTextMessageSpendLimitOverride
		 * @return {DeleteTextMessageSpendLimitOverrideResult} Success
		 */
		DeleteTextMessageSpendLimitOverride(requestBody: DeleteTextMessageSpendLimitOverrideRequest): Observable<DeleteTextMessageSpendLimitOverrideResult> {
			return this.http.post<DeleteTextMessageSpendLimitOverrideResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.DeleteTextMessageSpendLimitOverride', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an account level monthly spend limit override for sending voice messages. Deleting a spend limit override sets the <code>EnforcedLimit</code> equal to the <code>MaxLimit</code>, which is controlled by Amazon Web Services. For more information on spending limits (quotas) see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html">Amazon Pinpoint quotas</a> in the <i>Amazon Pinpoint Developer Guide</i>.
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.DeleteVoiceMessageSpendLimitOverride
		 * @return {DeleteVoiceMessageSpendLimitOverrideResult} Success
		 */
		DeleteVoiceMessageSpendLimitOverride(requestBody: DeleteVoiceMessageSpendLimitOverrideRequest): Observable<DeleteVoiceMessageSpendLimitOverrideResult> {
			return this.http.post<DeleteVoiceMessageSpendLimitOverrideResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.DeleteVoiceMessageSpendLimitOverride', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes attributes of your Amazon Web Services account. The supported account attributes include account tier, which indicates whether your account is in the sandbox or production environment. When you're ready to move your account out of the sandbox, create an Amazon Web Services Support case for a service limit increase request.</p> <p>New Amazon Pinpoint accounts are placed into an SMS or voice sandbox. The sandbox protects both Amazon Web Services end recipients and SMS or voice recipients from fraud and abuse. </p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.DescribeAccountAttributes
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeAccountAttributesResult} Success
		 */
		DescribeAccountAttributes(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeAccountAttributesRequest): Observable<DescribeAccountAttributesResult> {
			return this.http.post<DescribeAccountAttributesResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.DescribeAccountAttributes?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the current Amazon Pinpoint SMS Voice V2 resource quotas for your account. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of configuration sets, opt-out lists, phone numbers, and pools that you can create in a given Region. For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html"> Amazon Pinpoint quotas </a> in the <i>Amazon Pinpoint Developer Guide</i>.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.DescribeAccountLimits
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeAccountLimitsResult} Success
		 */
		DescribeAccountLimits(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeAccountLimitsRequest): Observable<DescribeAccountLimitsResult> {
			return this.http.post<DescribeAccountLimitsResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.DescribeAccountLimits?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the specified configuration sets or all in your account.</p> <p>If you specify configuration set names, the output includes information for only the specified configuration sets. If you specify filters, the output includes information for only those configuration sets that meet the filter criteria. If you don't specify configuration set names or filters, the output includes information for all configuration sets.</p> <p>If you specify a configuration set name that isn't valid, an error is returned.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.DescribeConfigurationSets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeConfigurationSetsResult} Success
		 */
		DescribeConfigurationSets(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeConfigurationSetsRequest): Observable<DescribeConfigurationSetsResult> {
			return this.http.post<DescribeConfigurationSetsResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.DescribeConfigurationSets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the specified keywords or all keywords on your origination phone number or pool.</p> <p>A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>If you specify a keyword that isn't valid, an Error is returned.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.DescribeKeywords
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeKeywordsResult} Success
		 */
		DescribeKeywords(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeKeywordsRequest): Observable<DescribeKeywordsResult> {
			return this.http.post<DescribeKeywordsResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.DescribeKeywords?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the specified opt-out list or all opt-out lists in your account.</p> <p>If you specify opt-out list names, the output includes information for only the specified opt-out lists. Opt-out lists include only those that meet the filter criteria. If you don't specify opt-out list names or filters, the output includes information for all opt-out lists.</p> <p>If you specify an opt-out list name that isn't valid, an Error is returned.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.DescribeOptOutLists
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeOptOutListsResult} Success
		 */
		DescribeOptOutLists(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeOptOutListsRequest): Observable<DescribeOptOutListsResult> {
			return this.http.post<DescribeOptOutListsResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.DescribeOptOutLists?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the specified opted out destination numbers or all opted out destination numbers in an opt-out list.</p> <p>If you specify opted out numbers, the output includes information for only the specified opted out numbers. If you specify filters, the output includes information for only those opted out numbers that meet the filter criteria. If you don't specify opted out numbers or filters, the output includes information for all opted out destination numbers in your opt-out list.</p> <p>If you specify an opted out number that isn't valid, an Error is returned.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.DescribeOptedOutNumbers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeOptedOutNumbersResult} Success
		 */
		DescribeOptedOutNumbers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeOptedOutNumbersRequest): Observable<DescribeOptedOutNumbersResult> {
			return this.http.post<DescribeOptedOutNumbersResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.DescribeOptedOutNumbers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the specified origination phone number, or all the phone numbers in your account.</p> <p>If you specify phone number IDs, the output includes information for only the specified phone numbers. If you specify filters, the output includes information for only those phone numbers that meet the filter criteria. If you don't specify phone number IDs or filters, the output includes information for all phone numbers.</p> <p>If you specify a phone number ID that isn't valid, an Error is returned.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.DescribePhoneNumbers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribePhoneNumbersResult} Success
		 */
		DescribePhoneNumbers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribePhoneNumbersRequest): Observable<DescribePhoneNumbersResult> {
			return this.http.post<DescribePhoneNumbersResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.DescribePhoneNumbers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the specified pools or all pools associated with your Amazon Web Services account.</p> <p>If you specify pool IDs, the output includes information for only the specified pools. If you specify filters, the output includes information for only those pools that meet the filter criteria. If you don't specify pool IDs or filters, the output includes information for all pools.</p> <p>If you specify a pool ID that isn't valid, an Error is returned.</p> <p>A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.DescribePools
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribePoolsResult} Success
		 */
		DescribePools(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribePoolsRequest): Observable<DescribePoolsResult> {
			return this.http.post<DescribePoolsResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.DescribePools?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the specified SenderIds or all SenderIds associated with your Amazon Web Services account.</p> <p>If you specify SenderIds, the output includes information for only the specified SenderIds. If you specify filters, the output includes information for only those SenderIds that meet the filter criteria. If you don't specify SenderIds or filters, the output includes information for all SenderIds.</p> <p>f you specify a sender ID that isn't valid, an Error is returned.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.DescribeSenderIds
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeSenderIdsResult} Success
		 */
		DescribeSenderIds(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeSenderIdsRequest): Observable<DescribeSenderIdsResult> {
			return this.http.post<DescribeSenderIdsResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.DescribeSenderIds?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the current Amazon Pinpoint monthly spend limits for sending voice and text messages.</p> <p>When you establish an Amazon Web Services account, the account has initial monthly spend limit in a given Region. For more information on increasing your monthly spend limit, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-awssupport-spend-threshold.html"> Requesting increases to your monthly SMS spending quota for Amazon Pinpoint </a> in the <i>Amazon Pinpoint User Guide</i>.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.DescribeSpendLimits
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeSpendLimitsResult} Success
		 */
		DescribeSpendLimits(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeSpendLimitsRequest): Observable<DescribeSpendLimitsResult> {
			return this.http.post<DescribeSpendLimitsResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.DescribeSpendLimits?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the specified origination identity from an existing pool.</p> <p>If the origination identity isn't associated with the specified pool, an Error is returned.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.DisassociateOriginationIdentity
		 * @return {DisassociateOriginationIdentityResult} Success
		 */
		DisassociateOriginationIdentity(requestBody: DisassociateOriginationIdentityRequest): Observable<DisassociateOriginationIdentityResult> {
			return this.http.post<DisassociateOriginationIdentityResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.DisassociateOriginationIdentity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all associated origination identities in your pool.</p> <p>If you specify filters, the output includes information for only those origination identities that meet the filter criteria.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.ListPoolOriginationIdentities
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPoolOriginationIdentitiesResult} Success
		 */
		ListPoolOriginationIdentities(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPoolOriginationIdentitiesRequest): Observable<ListPoolOriginationIdentitiesResult> {
			return this.http.post<ListPoolOriginationIdentitiesResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.ListPoolOriginationIdentities?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all tags associated with a resource.
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.ListTagsForResource
		 * @return {ListTagsForResourceResult} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResult> {
			return this.http.post<ListTagsForResourceResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates or updates a keyword configuration on an origination phone number or pool.</p> <p> A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>If you specify a keyword that isn't valid, an Error is returned.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.PutKeyword
		 * @return {PutKeywordResult} Success
		 */
		PutKeyword(requestBody: PutKeywordRequest): Observable<PutKeywordResult> {
			return this.http.post<PutKeywordResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.PutKeyword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an opted out destination phone number in the opt-out list.</p> <p>If the destination phone number isn't valid or if the specified opt-out list doesn't exist, an Error is returned.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.PutOptedOutNumber
		 * @return {PutOptedOutNumberResult} Success
		 */
		PutOptedOutNumber(requestBody: PutOptedOutNumberRequest): Observable<PutOptedOutNumberResult> {
			return this.http.post<PutOptedOutNumberResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.PutOptedOutNumber', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Releases an existing origination phone number in your account. Once released, a phone number is no longer available for sending messages.</p> <p>If the origination phone number has deletion protection enabled or is associated with a pool, an Error is returned.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.ReleasePhoneNumber
		 * @return {ReleasePhoneNumberResult} Success
		 */
		ReleasePhoneNumber(requestBody: ReleasePhoneNumberRequest): Observable<ReleasePhoneNumberResult> {
			return this.http.post<ReleasePhoneNumberResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.ReleasePhoneNumber', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request an origination phone number for use in your account. For more information on phone number request see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/settings-sms-request-number.html"> Requesting a number </a> in the <i>Amazon Pinpoint User Guide</i>.
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.RequestPhoneNumber
		 * @return {RequestPhoneNumberResult} Success
		 */
		RequestPhoneNumber(requestBody: RequestPhoneNumberRequest): Observable<RequestPhoneNumberResult> {
			return this.http.post<RequestPhoneNumberResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.RequestPhoneNumber', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new text message and sends it to a recipient's phone number.</p> <p>SMS throughput limits are measured in Message Parts per Second (MPS). Your MPS limit depends on the destination country of your messages, as well as the type of phone number (origination number) that you use to send the message. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-limitations-mps.html">Message Parts per Second (MPS) limits</a> in the <i>Amazon Pinpoint User Guide</i>.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.SendTextMessage
		 * @return {SendTextMessageResult} Success
		 */
		SendTextMessage(requestBody: SendTextMessageRequest): Observable<SendTextMessageResult> {
			return this.http.post<SendTextMessageResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.SendTextMessage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to send a request that sends a text message through Amazon Pinpoint. This operation uses <a href="http://aws.amazon.com/polly/">Amazon Polly</a> to convert a text script into a voice message.
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.SendVoiceMessage
		 * @return {SendVoiceMessageResult} Success
		 */
		SendVoiceMessage(requestBody: SendVoiceMessageRequest): Observable<SendVoiceMessageResult> {
			return this.http.post<SendVoiceMessageResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.SendVoiceMessage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sets the default message type on a configuration set.</p> <p>Choose the category of SMS messages that you plan to send from this account. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose <b>Transactional</b>. If you plan to send messages that contain marketing material or other promotional content, choose <b>Promotional</b>. This setting applies to your entire Amazon Web Services account.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.SetDefaultMessageType
		 * @return {SetDefaultMessageTypeResult} Success
		 */
		SetDefaultMessageType(requestBody: SetDefaultMessageTypeRequest): Observable<SetDefaultMessageTypeResult> {
			return this.http.post<SetDefaultMessageTypeResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.SetDefaultMessageType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sets default sender ID on a configuration set.</p> <p>When sending a text message to a destination country that supports sender IDs, the default sender ID on the configuration set specified will be used if no dedicated origination phone numbers or registered sender IDs are available in your account.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.SetDefaultSenderId
		 * @return {SetDefaultSenderIdResult} Success
		 */
		SetDefaultSenderId(requestBody: SetDefaultSenderIdRequest): Observable<SetDefaultSenderIdResult> {
			return this.http.post<SetDefaultSenderIdResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.SetDefaultSenderId', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets an account level monthly spend limit override for sending text messages. The requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is set by Amazon Web Services.
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.SetTextMessageSpendLimitOverride
		 * @return {SetTextMessageSpendLimitOverrideResult} Success
		 */
		SetTextMessageSpendLimitOverride(requestBody: SetTextMessageSpendLimitOverrideRequest): Observable<SetTextMessageSpendLimitOverrideResult> {
			return this.http.post<SetTextMessageSpendLimitOverrideResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.SetTextMessageSpendLimitOverride', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets an account level monthly spend limit override for sending voice messages. The requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is set by Amazon Web Services.
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.SetVoiceMessageSpendLimitOverride
		 * @return {SetVoiceMessageSpendLimitOverrideResult} Success
		 */
		SetVoiceMessageSpendLimitOverride(requestBody: SetVoiceMessageSpendLimitOverrideRequest): Observable<SetVoiceMessageSpendLimitOverrideResult> {
			return this.http.post<SetVoiceMessageSpendLimitOverrideResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.SetVoiceMessageSpendLimitOverride', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds or overwrites only the specified tags for the specified Amazon Pinpoint SMS Voice, version 2 resource. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/tagging-resources.html"> Tagging Amazon Pinpoint resources</a> in the <i>Amazon Pinpoint Developer Guide</i>.
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.TagResource
		 * @return {TagResourceResult} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResult> {
			return this.http.post<TagResourceResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the association of the specified tags from an Amazon Pinpoint SMS Voice V2 resource. For more information on tags see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/tagging-resources.html"> Tagging Amazon Pinpoint resources</a> in the <i>Amazon Pinpoint Developer Guide</i>.
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.UntagResource
		 * @return {UntagResourceResult} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResult> {
			return this.http.post<UntagResourceResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates an existing event destination in a configuration set. You can update the IAM role ARN for CloudWatch Logs and Kinesis Data Firehose. You can also enable or disable the event destination.</p> <p>You may want to update an event destination to change its matching event types or updating the destination resource ARN. You can't change an event destination's type between CloudWatch Logs, Kinesis Data Firehose, and Amazon SNS.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.UpdateEventDestination
		 * @return {UpdateEventDestinationResult} Success
		 */
		UpdateEventDestination(requestBody: UpdateEventDestinationRequest): Observable<UpdateEventDestinationResult> {
			return this.http.post<UpdateEventDestinationResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.UpdateEventDestination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the configuration of an existing origination phone number. You can update the opt-out list, enable or disable two-way messaging, change the TwoWayChannelArn, enable or disable self-managed opt-outs, and enable or disable deletion protection.</p> <p>If the origination phone number is associated with a pool, an Error is returned.</p>
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.UpdatePhoneNumber
		 * @return {UpdatePhoneNumberResult} Success
		 */
		UpdatePhoneNumber(requestBody: UpdatePhoneNumberRequest): Observable<UpdatePhoneNumberResult> {
			return this.http.post<UpdatePhoneNumberResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.UpdatePhoneNumber', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the configuration of an existing pool. You can update the opt-out list, enable or disable two-way messaging, change the <code>TwoWayChannelArn</code>, enable or disable self-managed opt-outs, enable or disable deletion protection, and enable or disable shared routes.
		 * Post #X-Amz-Target=PinpointSMSVoiceV2.UpdatePool
		 * @return {UpdatePoolResult} Success
		 */
		UpdatePool(requestBody: UpdatePoolRequest): Observable<UpdatePoolResult> {
			return this.http.post<UpdatePoolResult>(this.baseUri + '#X-Amz-Target=PinpointSMSVoiceV2.UpdatePool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateOriginationIdentityX_Amz_Target { 'PinpointSMSVoiceV2.AssociateOriginationIdentity' = 0 }

	export enum CreateConfigurationSetX_Amz_Target { 'PinpointSMSVoiceV2.CreateConfigurationSet' = 0 }

	export enum CreateEventDestinationX_Amz_Target { 'PinpointSMSVoiceV2.CreateEventDestination' = 0 }

	export enum CreateOptOutListX_Amz_Target { 'PinpointSMSVoiceV2.CreateOptOutList' = 0 }

	export enum CreatePoolX_Amz_Target { 'PinpointSMSVoiceV2.CreatePool' = 0 }

	export enum DeleteConfigurationSetX_Amz_Target { 'PinpointSMSVoiceV2.DeleteConfigurationSet' = 0 }

	export enum DeleteDefaultMessageTypeX_Amz_Target { 'PinpointSMSVoiceV2.DeleteDefaultMessageType' = 0 }

	export enum DeleteDefaultSenderIdX_Amz_Target { 'PinpointSMSVoiceV2.DeleteDefaultSenderId' = 0 }

	export enum DeleteEventDestinationX_Amz_Target { 'PinpointSMSVoiceV2.DeleteEventDestination' = 0 }

	export enum DeleteKeywordX_Amz_Target { 'PinpointSMSVoiceV2.DeleteKeyword' = 0 }

	export enum DeleteOptOutListX_Amz_Target { 'PinpointSMSVoiceV2.DeleteOptOutList' = 0 }

	export enum DeleteOptedOutNumberX_Amz_Target { 'PinpointSMSVoiceV2.DeleteOptedOutNumber' = 0 }

	export enum DeletePoolX_Amz_Target { 'PinpointSMSVoiceV2.DeletePool' = 0 }

	export enum DeleteTextMessageSpendLimitOverrideX_Amz_Target { 'PinpointSMSVoiceV2.DeleteTextMessageSpendLimitOverride' = 0 }

	export enum DeleteVoiceMessageSpendLimitOverrideX_Amz_Target { 'PinpointSMSVoiceV2.DeleteVoiceMessageSpendLimitOverride' = 0 }

	export enum DescribeAccountAttributesX_Amz_Target { 'PinpointSMSVoiceV2.DescribeAccountAttributes' = 0 }

	export enum DescribeAccountLimitsX_Amz_Target { 'PinpointSMSVoiceV2.DescribeAccountLimits' = 0 }

	export enum DescribeConfigurationSetsX_Amz_Target { 'PinpointSMSVoiceV2.DescribeConfigurationSets' = 0 }

	export enum DescribeKeywordsX_Amz_Target { 'PinpointSMSVoiceV2.DescribeKeywords' = 0 }

	export enum DescribeOptOutListsX_Amz_Target { 'PinpointSMSVoiceV2.DescribeOptOutLists' = 0 }

	export enum DescribeOptedOutNumbersX_Amz_Target { 'PinpointSMSVoiceV2.DescribeOptedOutNumbers' = 0 }

	export enum DescribePhoneNumbersX_Amz_Target { 'PinpointSMSVoiceV2.DescribePhoneNumbers' = 0 }

	export enum DescribePoolsX_Amz_Target { 'PinpointSMSVoiceV2.DescribePools' = 0 }

	export enum DescribeSenderIdsX_Amz_Target { 'PinpointSMSVoiceV2.DescribeSenderIds' = 0 }

	export enum DescribeSpendLimitsX_Amz_Target { 'PinpointSMSVoiceV2.DescribeSpendLimits' = 0 }

	export enum DisassociateOriginationIdentityX_Amz_Target { 'PinpointSMSVoiceV2.DisassociateOriginationIdentity' = 0 }

	export enum ListPoolOriginationIdentitiesX_Amz_Target { 'PinpointSMSVoiceV2.ListPoolOriginationIdentities' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'PinpointSMSVoiceV2.ListTagsForResource' = 0 }

	export enum PutKeywordX_Amz_Target { 'PinpointSMSVoiceV2.PutKeyword' = 0 }

	export enum PutOptedOutNumberX_Amz_Target { 'PinpointSMSVoiceV2.PutOptedOutNumber' = 0 }

	export enum ReleasePhoneNumberX_Amz_Target { 'PinpointSMSVoiceV2.ReleasePhoneNumber' = 0 }

	export enum RequestPhoneNumberX_Amz_Target { 'PinpointSMSVoiceV2.RequestPhoneNumber' = 0 }

	export enum SendTextMessageX_Amz_Target { 'PinpointSMSVoiceV2.SendTextMessage' = 0 }

	export enum SendVoiceMessageX_Amz_Target { 'PinpointSMSVoiceV2.SendVoiceMessage' = 0 }

	export enum SetDefaultMessageTypeX_Amz_Target { 'PinpointSMSVoiceV2.SetDefaultMessageType' = 0 }

	export enum SetDefaultSenderIdX_Amz_Target { 'PinpointSMSVoiceV2.SetDefaultSenderId' = 0 }

	export enum SetTextMessageSpendLimitOverrideX_Amz_Target { 'PinpointSMSVoiceV2.SetTextMessageSpendLimitOverride' = 0 }

	export enum SetVoiceMessageSpendLimitOverrideX_Amz_Target { 'PinpointSMSVoiceV2.SetVoiceMessageSpendLimitOverride' = 0 }

	export enum TagResourceX_Amz_Target { 'PinpointSMSVoiceV2.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'PinpointSMSVoiceV2.UntagResource' = 0 }

	export enum UpdateEventDestinationX_Amz_Target { 'PinpointSMSVoiceV2.UpdateEventDestination' = 0 }

	export enum UpdatePhoneNumberX_Amz_Target { 'PinpointSMSVoiceV2.UpdatePhoneNumber' = 0 }

	export enum UpdatePoolX_Amz_Target { 'PinpointSMSVoiceV2.UpdatePool' = 0 }

}

