import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An empty object that indicates that the configuration set was successfully created. */
	export interface CreateConfigurationSetResponse {
	}

	/** An empty object that indicates that the configuration set was successfully created. */
	export interface CreateConfigurationSetResponseFormProperties {
	}
	export function CreateCreateConfigurationSetResponseFormGroup() {
		return new FormGroup<CreateConfigurationSetResponseFormProperties>({
		});

	}

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface InternalServiceErrorException {
	}
	export interface InternalServiceErrorExceptionFormProperties {
	}
	export function CreateInternalServiceErrorExceptionFormGroup() {
		return new FormGroup<InternalServiceErrorExceptionFormProperties>({
		});

	}

	export interface AlreadyExistsException {
	}
	export interface AlreadyExistsExceptionFormProperties {
	}
	export function CreateAlreadyExistsExceptionFormGroup() {
		return new FormGroup<AlreadyExistsExceptionFormProperties>({
		});

	}


	/** An empty object that indicates that the event destination was created successfully. */
	export interface CreateConfigurationSetEventDestinationResponse {
	}

	/** An empty object that indicates that the event destination was created successfully. */
	export interface CreateConfigurationSetEventDestinationResponseFormProperties {
	}
	export function CreateCreateConfigurationSetEventDestinationResponseFormGroup() {
		return new FormGroup<CreateConfigurationSetEventDestinationResponseFormProperties>({
		});

	}


	/** An object that contains information about an event destination that sends data to Amazon CloudWatch Logs. */
	export interface CloudWatchLogsDestination {
		IamRoleArn?: string;
		LogGroupArn?: string;
	}

	/** An object that contains information about an event destination that sends data to Amazon CloudWatch Logs. */
	export interface CloudWatchLogsDestinationFormProperties {
		IamRoleArn: FormControl<string | null | undefined>,
		LogGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLogsDestinationFormGroup() {
		return new FormGroup<CloudWatchLogsDestinationFormProperties>({
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			LogGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose. */
	export interface KinesisFirehoseDestination {
		DeliveryStreamArn?: string;
		IamRoleArn?: string;
	}

	/** An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose. */
	export interface KinesisFirehoseDestinationFormProperties {
		DeliveryStreamArn: FormControl<string | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseDestinationFormGroup() {
		return new FormGroup<KinesisFirehoseDestinationFormProperties>({
			DeliveryStreamArn: new FormControl<string | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The types of events that are sent to the event destination. */
	export enum EventType { INITIATED_CALL = 'INITIATED_CALL', RINGING = 'RINGING', ANSWERED = 'ANSWERED', COMPLETED_CALL = 'COMPLETED_CALL', BUSY = 'BUSY', FAILED = 'FAILED', NO_ANSWER = 'NO_ANSWER' }


	/** An object that contains information about an event destination that sends data to Amazon SNS. */
	export interface SnsDestination {
		TopicArn?: string;
	}

	/** An object that contains information about an event destination that sends data to Amazon SNS. */
	export interface SnsDestinationFormProperties {
		TopicArn: FormControl<string | null | undefined>,
	}
	export function CreateSnsDestinationFormGroup() {
		return new FormGroup<SnsDestinationFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined),
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


	/** An empty object that indicates that the configuration set was deleted successfully. */
	export interface DeleteConfigurationSetResponse {
	}

	/** An empty object that indicates that the configuration set was deleted successfully. */
	export interface DeleteConfigurationSetResponseFormProperties {
	}
	export function CreateDeleteConfigurationSetResponseFormGroup() {
		return new FormGroup<DeleteConfigurationSetResponseFormProperties>({
		});

	}


	/** An empty object that indicates that the event destination was deleted successfully. */
	export interface DeleteConfigurationSetEventDestinationResponse {
	}

	/** An empty object that indicates that the event destination was deleted successfully. */
	export interface DeleteConfigurationSetEventDestinationResponseFormProperties {
	}
	export function CreateDeleteConfigurationSetEventDestinationResponseFormGroup() {
		return new FormGroup<DeleteConfigurationSetEventDestinationResponseFormProperties>({
		});

	}


	/** An object that contains information about an event destination. */
	export interface GetConfigurationSetEventDestinationsResponse {

		/** An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination. */
		EventDestinations?: Array<EventDestination>;
	}

	/** An object that contains information about an event destination. */
	export interface GetConfigurationSetEventDestinationsResponseFormProperties {
	}
	export function CreateGetConfigurationSetEventDestinationsResponseFormGroup() {
		return new FormGroup<GetConfigurationSetEventDestinationsResponseFormProperties>({
		});

	}


	/** An object that defines an event destination. */
	export interface EventDestination {

		/** An object that contains information about an event destination that sends data to Amazon CloudWatch Logs. */
		CloudWatchLogsDestination?: CloudWatchLogsDestination;
		Enabled?: boolean | null;

		/** An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose. */
		KinesisFirehoseDestination?: KinesisFirehoseDestination;

		/** An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination. */
		MatchingEventTypes?: Array<EventType>;
		Name?: string;

		/** An object that contains information about an event destination that sends data to Amazon SNS. */
		SnsDestination?: SnsDestination;
	}

	/** An object that defines an event destination. */
	export interface EventDestinationFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateEventDestinationFormGroup() {
		return new FormGroup<EventDestinationFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains information about the configuration sets for your account in the current region. */
	export interface ListConfigurationSetsResponse {
		ConfigurationSets?: Array<string>;
		NextToken?: string;
	}

	/** An object that contains information about the configuration sets for your account in the current region. */
	export interface ListConfigurationSetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConfigurationSetsResponseFormGroup() {
		return new FormGroup<ListConfigurationSetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that that contains the Message ID of a Voice message that was sent successfully. */
	export interface SendVoiceMessageResponse {
		MessageId?: string;
	}

	/** An object that that contains the Message ID of a Voice message that was sent successfully. */
	export interface SendVoiceMessageResponseFormProperties {
		MessageId: FormControl<string | null | undefined>,
	}
	export function CreateSendVoiceMessageResponseFormGroup() {
		return new FormGroup<SendVoiceMessageResponseFormProperties>({
			MessageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup. */
	export interface CallInstructionsMessageType {
		Text?: string;
	}

	/** An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup. */
	export interface CallInstructionsMessageTypeFormProperties {
		Text: FormControl<string | null | undefined>,
	}
	export function CreateCallInstructionsMessageTypeFormGroup() {
		return new FormGroup<CallInstructionsMessageTypeFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that defines a message that contains unformatted text. */
	export interface PlainTextMessageType {
		LanguageCode?: string;
		Text?: string;
		VoiceId?: string;
	}

	/** An object that defines a message that contains unformatted text. */
	export interface PlainTextMessageTypeFormProperties {
		LanguageCode: FormControl<string | null | undefined>,
		Text: FormControl<string | null | undefined>,
		VoiceId: FormControl<string | null | undefined>,
	}
	export function CreatePlainTextMessageTypeFormGroup() {
		return new FormGroup<PlainTextMessageTypeFormProperties>({
			LanguageCode: new FormControl<string | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
			VoiceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that defines a message that contains SSML-formatted text. */
	export interface SSMLMessageType {
		LanguageCode?: string;
		Text?: string;
		VoiceId?: string;
	}

	/** An object that defines a message that contains SSML-formatted text. */
	export interface SSMLMessageTypeFormProperties {
		LanguageCode: FormControl<string | null | undefined>,
		Text: FormControl<string | null | undefined>,
		VoiceId: FormControl<string | null | undefined>,
	}
	export function CreateSSMLMessageTypeFormGroup() {
		return new FormGroup<SSMLMessageTypeFormProperties>({
			LanguageCode: new FormControl<string | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
			VoiceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An empty object that indicates that the event destination was updated successfully. */
	export interface UpdateConfigurationSetEventDestinationResponse {
	}

	/** An empty object that indicates that the event destination was updated successfully. */
	export interface UpdateConfigurationSetEventDestinationResponseFormProperties {
	}
	export function CreateUpdateConfigurationSetEventDestinationResponseFormGroup() {
		return new FormGroup<UpdateConfigurationSetEventDestinationResponseFormProperties>({
		});

	}


	/** An object that defines a single event destination. */
	export interface EventDestinationDefinition {

		/** An object that contains information about an event destination that sends data to Amazon CloudWatch Logs. */
		CloudWatchLogsDestination?: CloudWatchLogsDestination;
		Enabled?: boolean | null;

		/** An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose. */
		KinesisFirehoseDestination?: KinesisFirehoseDestination;

		/** An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination. */
		MatchingEventTypes?: Array<EventType>;

		/** An object that contains information about an event destination that sends data to Amazon SNS. */
		SnsDestination?: SnsDestination;
	}

	/** An object that defines a single event destination. */
	export interface EventDestinationDefinitionFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEventDestinationDefinitionFormGroup() {
		return new FormGroup<EventDestinationDefinitionFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Create a new event destination in a configuration set. */
	export interface CreateConfigurationSetEventDestinationRequest {

		/** An object that defines a single event destination. */
		EventDestination?: EventDestinationDefinition;
		EventDestinationName?: string;
	}

	/** Create a new event destination in a configuration set. */
	export interface CreateConfigurationSetEventDestinationRequestFormProperties {
		EventDestinationName: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationSetEventDestinationRequestFormGroup() {
		return new FormGroup<CreateConfigurationSetEventDestinationRequestFormProperties>({
			EventDestinationName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to create a new configuration set. */
	export interface CreateConfigurationSetRequest {
		ConfigurationSetName?: string;
	}

	/** A request to create a new configuration set. */
	export interface CreateConfigurationSetRequestFormProperties {
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationSetRequestFormGroup() {
		return new FormGroup<CreateConfigurationSetRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteConfigurationSetEventDestinationRequest {
	}
	export interface DeleteConfigurationSetEventDestinationRequestFormProperties {
	}
	export function CreateDeleteConfigurationSetEventDestinationRequestFormGroup() {
		return new FormGroup<DeleteConfigurationSetEventDestinationRequestFormProperties>({
		});

	}

	export interface DeleteConfigurationSetRequest {
	}
	export interface DeleteConfigurationSetRequestFormProperties {
	}
	export function CreateDeleteConfigurationSetRequestFormGroup() {
		return new FormGroup<DeleteConfigurationSetRequestFormProperties>({
		});

	}

	export interface GetConfigurationSetEventDestinationsRequest {
	}
	export interface GetConfigurationSetEventDestinationsRequestFormProperties {
	}
	export function CreateGetConfigurationSetEventDestinationsRequestFormGroup() {
		return new FormGroup<GetConfigurationSetEventDestinationsRequestFormProperties>({
		});

	}

	export interface ListConfigurationSetsRequest {
	}
	export interface ListConfigurationSetsRequestFormProperties {
	}
	export function CreateListConfigurationSetsRequestFormGroup() {
		return new FormGroup<ListConfigurationSetsRequestFormProperties>({
		});

	}


	/** An object that contains a voice message and information about the recipient that you want to send it to. */
	export interface VoiceMessageContent {

		/** An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup. */
		CallInstructionsMessage?: CallInstructionsMessageType;

		/** An object that defines a message that contains unformatted text. */
		PlainTextMessage?: PlainTextMessageType;

		/** An object that defines a message that contains SSML-formatted text. */
		SSMLMessage?: SSMLMessageType;
	}

	/** An object that contains a voice message and information about the recipient that you want to send it to. */
	export interface VoiceMessageContentFormProperties {
	}
	export function CreateVoiceMessageContentFormGroup() {
		return new FormGroup<VoiceMessageContentFormProperties>({
		});

	}


	/** SendVoiceMessageRequest */
	export interface SendVoiceMessageRequest {
		CallerId?: string;
		ConfigurationSetName?: string;

		/** An object that contains a voice message and information about the recipient that you want to send it to. */
		Content?: VoiceMessageContent;
		DestinationPhoneNumber?: string;
		OriginationPhoneNumber?: string;
	}

	/** SendVoiceMessageRequest */
	export interface SendVoiceMessageRequestFormProperties {
		CallerId: FormControl<string | null | undefined>,
		ConfigurationSetName: FormControl<string | null | undefined>,
		DestinationPhoneNumber: FormControl<string | null | undefined>,
		OriginationPhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateSendVoiceMessageRequestFormGroup() {
		return new FormGroup<SendVoiceMessageRequestFormProperties>({
			CallerId: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
			DestinationPhoneNumber: new FormControl<string | null | undefined>(undefined),
			OriginationPhoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** UpdateConfigurationSetEventDestinationRequest */
	export interface UpdateConfigurationSetEventDestinationRequest {

		/** An object that defines a single event destination. */
		EventDestination?: EventDestinationDefinition;
	}

	/** UpdateConfigurationSetEventDestinationRequest */
	export interface UpdateConfigurationSetEventDestinationRequestFormProperties {
	}
	export function CreateUpdateConfigurationSetEventDestinationRequestFormGroup() {
		return new FormGroup<UpdateConfigurationSetEventDestinationRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create a new configuration set. After you create the configuration set, you can add one or more event destinations to it.
		 * Post v1/sms-voice/configuration-sets
		 * @return {CreateConfigurationSetResponse} Success
		 */
		CreateConfigurationSet(requestBody: CreateConfigurationSetPostBody): Observable<CreateConfigurationSetResponse> {
			return this.http.post<CreateConfigurationSetResponse>(this.baseUri + 'v1/sms-voice/configuration-sets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all of the configuration sets associated with your Amazon Pinpoint account in the current region.
		 * Get v1/sms-voice/configuration-sets
		 * @param {string} NextToken A token returned from a previous call to the API that indicates the position in the list of results.
		 * @param {string} PageSize Used to specify the number of items that should be returned in the response.
		 * @return {ListConfigurationSetsResponse} Success
		 */
		ListConfigurationSets(NextToken: string | null | undefined, PageSize: string | null | undefined): Observable<ListConfigurationSetsResponse> {
			return this.http.get<ListConfigurationSetsResponse>(this.baseUri + 'v1/sms-voice/configuration-sets?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)), {});
		}

		/**
		 * Create a new event destination in a configuration set.
		 * Post v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations
		 * @param {string} ConfigurationSetName ConfigurationSetName
		 * @return {CreateConfigurationSetEventDestinationResponse} Success
		 */
		CreateConfigurationSetEventDestination(ConfigurationSetName: string, requestBody: CreateConfigurationSetEventDestinationPostBody): Observable<CreateConfigurationSetEventDestinationResponse> {
			return this.http.post<CreateConfigurationSetEventDestinationResponse>(this.baseUri + 'v1/sms-voice/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/event-destinations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Obtain information about an event destination, including the types of events it reports, the Amazon Resource Name (ARN) of the destination, and the name of the event destination.
		 * Get v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations
		 * @param {string} ConfigurationSetName ConfigurationSetName
		 * @return {GetConfigurationSetEventDestinationsResponse} Success
		 */
		GetConfigurationSetEventDestinations(ConfigurationSetName: string): Observable<GetConfigurationSetEventDestinationsResponse> {
			return this.http.get<GetConfigurationSetEventDestinationsResponse>(this.baseUri + 'v1/sms-voice/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/event-destinations', {});
		}

		/**
		 * Deletes an existing configuration set.
		 * Delete v1/sms-voice/configuration-sets/{ConfigurationSetName}
		 * @param {string} ConfigurationSetName ConfigurationSetName
		 * @return {DeleteConfigurationSetResponse} Success
		 */
		DeleteConfigurationSet(ConfigurationSetName: string): Observable<DeleteConfigurationSetResponse> {
			return this.http.delete<DeleteConfigurationSetResponse>(this.baseUri + 'v1/sms-voice/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)), {});
		}

		/**
		 * Deletes an event destination in a configuration set.
		 * Delete v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}
		 * @param {string} ConfigurationSetName ConfigurationSetName
		 * @param {string} EventDestinationName EventDestinationName
		 * @return {DeleteConfigurationSetEventDestinationResponse} Success
		 */
		DeleteConfigurationSetEventDestination(ConfigurationSetName: string, EventDestinationName: string): Observable<DeleteConfigurationSetEventDestinationResponse> {
			return this.http.delete<DeleteConfigurationSetEventDestinationResponse>(this.baseUri + 'v1/sms-voice/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/event-destinations/' + (EventDestinationName == null ? '' : encodeURIComponent(EventDestinationName)), {});
		}

		/**
		 * Update an event destination in a configuration set. An event destination is a location that you publish information about your voice calls to. For example, you can log an event to an Amazon CloudWatch destination when a call fails.
		 * Put v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}
		 * @param {string} ConfigurationSetName ConfigurationSetName
		 * @param {string} EventDestinationName EventDestinationName
		 * @return {UpdateConfigurationSetEventDestinationResponse} Success
		 */
		UpdateConfigurationSetEventDestination(ConfigurationSetName: string, EventDestinationName: string, requestBody: UpdateConfigurationSetEventDestinationPutBody): Observable<UpdateConfigurationSetEventDestinationResponse> {
			return this.http.put<UpdateConfigurationSetEventDestinationResponse>(this.baseUri + 'v1/sms-voice/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/event-destinations/' + (EventDestinationName == null ? '' : encodeURIComponent(EventDestinationName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a new voice message and send it to a recipient's phone number.
		 * Post v1/sms-voice/voice/message
		 * @return {SendVoiceMessageResponse} Success
		 */
		SendVoiceMessage(requestBody: SendVoiceMessagePostBody): Observable<SendVoiceMessageResponse> {
			return this.http.post<SendVoiceMessageResponse>(this.baseUri + 'v1/sms-voice/voice/message', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateConfigurationSetPostBody {

		/** The name that you want to give the configuration set. */
		ConfigurationSetName?: string | null;
	}
	export interface CreateConfigurationSetPostBodyFormProperties {

		/** The name that you want to give the configuration set. */
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationSetPostBodyFormGroup() {
		return new FormGroup<CreateConfigurationSetPostBodyFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConfigurationSetEventDestinationPostBody {

		/** An object that defines a single event destination. */
		EventDestination?: CreateConfigurationSetEventDestinationPostBodyEventDestination;

		/** A name that identifies the event destination. */
		EventDestinationName?: string | null;
	}
	export interface CreateConfigurationSetEventDestinationPostBodyFormProperties {

		/** A name that identifies the event destination. */
		EventDestinationName: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationSetEventDestinationPostBodyFormGroup() {
		return new FormGroup<CreateConfigurationSetEventDestinationPostBodyFormProperties>({
			EventDestinationName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConfigurationSetEventDestinationPostBodyEventDestination {

		/** An object that contains information about an event destination that sends data to Amazon CloudWatch Logs. */
		CloudWatchLogsDestination?: CloudWatchLogsDestination;
		Enabled?: boolean | null;

		/** An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose. */
		KinesisFirehoseDestination?: KinesisFirehoseDestination;

		/** An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination. */
		MatchingEventTypes?: Array<EventType>;

		/** An object that contains information about an event destination that sends data to Amazon SNS. */
		SnsDestination?: SnsDestination;
	}
	export interface CreateConfigurationSetEventDestinationPostBodyEventDestinationFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateConfigurationSetEventDestinationPostBodyEventDestinationFormGroup() {
		return new FormGroup<CreateConfigurationSetEventDestinationPostBodyEventDestinationFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateConfigurationSetEventDestinationPutBody {

		/** An object that defines a single event destination. */
		EventDestination?: UpdateConfigurationSetEventDestinationPutBodyEventDestination;
	}
	export interface UpdateConfigurationSetEventDestinationPutBodyFormProperties {
	}
	export function CreateUpdateConfigurationSetEventDestinationPutBodyFormGroup() {
		return new FormGroup<UpdateConfigurationSetEventDestinationPutBodyFormProperties>({
		});

	}

	export interface UpdateConfigurationSetEventDestinationPutBodyEventDestination {

		/** An object that contains information about an event destination that sends data to Amazon CloudWatch Logs. */
		CloudWatchLogsDestination?: CloudWatchLogsDestination;
		Enabled?: boolean | null;

		/** An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose. */
		KinesisFirehoseDestination?: KinesisFirehoseDestination;

		/** An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination. */
		MatchingEventTypes?: Array<EventType>;

		/** An object that contains information about an event destination that sends data to Amazon SNS. */
		SnsDestination?: SnsDestination;
	}
	export interface UpdateConfigurationSetEventDestinationPutBodyEventDestinationFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateConfigurationSetEventDestinationPutBodyEventDestinationFormGroup() {
		return new FormGroup<UpdateConfigurationSetEventDestinationPutBodyEventDestinationFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SendVoiceMessagePostBody {

		/** The phone number that appears on recipients' devices when they receive the message. */
		CallerId?: string | null;

		/** The name of the configuration set that you want to use to send the message. */
		ConfigurationSetName?: string | null;

		/** An object that contains a voice message and information about the recipient that you want to send it to. */
		Content?: SendVoiceMessagePostBodyContent;

		/** The phone number that you want to send the voice message to. */
		DestinationPhoneNumber?: string | null;

		/** The phone number that Amazon Pinpoint should use to send the voice message. This isn't necessarily the phone number that appears on recipients' devices when they receive the message, because you can specify a CallerId parameter in the request. */
		OriginationPhoneNumber?: string | null;
	}
	export interface SendVoiceMessagePostBodyFormProperties {

		/** The phone number that appears on recipients' devices when they receive the message. */
		CallerId: FormControl<string | null | undefined>,

		/** The name of the configuration set that you want to use to send the message. */
		ConfigurationSetName: FormControl<string | null | undefined>,

		/** The phone number that you want to send the voice message to. */
		DestinationPhoneNumber: FormControl<string | null | undefined>,

		/** The phone number that Amazon Pinpoint should use to send the voice message. This isn't necessarily the phone number that appears on recipients' devices when they receive the message, because you can specify a CallerId parameter in the request. */
		OriginationPhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateSendVoiceMessagePostBodyFormGroup() {
		return new FormGroup<SendVoiceMessagePostBodyFormProperties>({
			CallerId: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
			DestinationPhoneNumber: new FormControl<string | null | undefined>(undefined),
			OriginationPhoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendVoiceMessagePostBodyContent {

		/** An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup. */
		CallInstructionsMessage?: CallInstructionsMessageType;

		/** An object that defines a message that contains unformatted text. */
		PlainTextMessage?: PlainTextMessageType;

		/** An object that defines a message that contains SSML-formatted text. */
		SSMLMessage?: SSMLMessageType;
	}
	export interface SendVoiceMessagePostBodyContentFormProperties {
	}
	export function CreateSendVoiceMessagePostBodyContentFormGroup() {
		return new FormGroup<SendVoiceMessagePostBodyContentFormProperties>({
		});

	}

}

