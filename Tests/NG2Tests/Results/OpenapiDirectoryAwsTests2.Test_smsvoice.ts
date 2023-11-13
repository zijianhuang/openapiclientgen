import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** An empty object that indicates that the configuration set was successfully created. */
	export interface CreateConfigurationSetResponse {
	}

	export interface TooManyRequestsException {
	}

	export interface BadRequestException {
	}

	export interface LimitExceededException {
	}

	export interface InternalServiceErrorException {
	}

	export interface AlreadyExistsException {
	}


	/** An empty object that indicates that the event destination was created successfully. */
	export interface CreateConfigurationSetEventDestinationResponse {
	}


	/** An object that contains information about an event destination that sends data to Amazon CloudWatch Logs. */
	export interface CloudWatchLogsDestination {
		IamRoleArn?: string | null;
		LogGroupArn?: string | null;
	}


	/** An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose. */
	export interface KinesisFirehoseDestination {
		DeliveryStreamArn?: string | null;
		IamRoleArn?: string | null;
	}


	/** The types of events that are sent to the event destination. */
	export enum EventType { INITIATED_CALL = 0, RINGING = 1, ANSWERED = 2, COMPLETED_CALL = 3, BUSY = 4, FAILED = 5, NO_ANSWER = 6 }


	/** An object that contains information about an event destination that sends data to Amazon SNS. */
	export interface SnsDestination {
		TopicArn?: string | null;
	}

	export interface NotFoundException {
	}


	/** An empty object that indicates that the configuration set was deleted successfully. */
	export interface DeleteConfigurationSetResponse {
	}


	/** An empty object that indicates that the event destination was deleted successfully. */
	export interface DeleteConfigurationSetEventDestinationResponse {
	}


	/** An object that contains information about an event destination. */
	export interface GetConfigurationSetEventDestinationsResponse {

		/** An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination. */
		EventDestinations?: Array<EventDestination> | null;
	}


	/** An object that defines an event destination. */
	export interface EventDestination {

		/** An object that contains information about an event destination that sends data to Amazon CloudWatch Logs. */
		CloudWatchLogsDestination?: CloudWatchLogsDestination | null;
		Enabled?: boolean | null;

		/** An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose. */
		KinesisFirehoseDestination?: KinesisFirehoseDestination | null;

		/** An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination. */
		MatchingEventTypes?: Array<EventType> | null;
		Name?: string | null;

		/** An object that contains information about an event destination that sends data to Amazon SNS. */
		SnsDestination?: SnsDestination | null;
	}


	/** An object that contains information about the configuration sets for your account in the current region. */
	export interface ListConfigurationSetsResponse {

		/** An array that contains all of the configuration sets in your Amazon Pinpoint account in the current AWS Region. */
		ConfigurationSets?: Array<string> | null;
		NextToken?: string | null;
	}


	/** An object that that contains the Message ID of a Voice message that was sent successfully. */
	export interface SendVoiceMessageResponse {
		MessageId?: string | null;
	}


	/** An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup. */
	export interface CallInstructionsMessageType {
		Text?: string | null;
	}


	/** An object that defines a message that contains unformatted text. */
	export interface PlainTextMessageType {
		LanguageCode?: string | null;
		Text?: string | null;
		VoiceId?: string | null;
	}


	/** An object that defines a message that contains SSML-formatted text. */
	export interface SSMLMessageType {
		LanguageCode?: string | null;
		Text?: string | null;
		VoiceId?: string | null;
	}


	/** An empty object that indicates that the event destination was updated successfully. */
	export interface UpdateConfigurationSetEventDestinationResponse {
	}


	/** An object that defines a single event destination. */
	export interface EventDestinationDefinition {

		/** An object that contains information about an event destination that sends data to Amazon CloudWatch Logs. */
		CloudWatchLogsDestination?: CloudWatchLogsDestination | null;
		Enabled?: boolean | null;

		/** An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose. */
		KinesisFirehoseDestination?: KinesisFirehoseDestination | null;

		/** An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination. */
		MatchingEventTypes?: Array<EventType> | null;

		/** An object that contains information about an event destination that sends data to Amazon SNS. */
		SnsDestination?: SnsDestination | null;
	}


	/** Create a new event destination in a configuration set. */
	export interface CreateConfigurationSetEventDestinationRequest {

		/** An object that defines a single event destination. */
		EventDestination?: EventDestinationDefinition | null;
		EventDestinationName?: string | null;
	}


	/** A request to create a new configuration set. */
	export interface CreateConfigurationSetRequest {
		ConfigurationSetName?: string | null;
	}

	export interface DeleteConfigurationSetEventDestinationRequest {
	}

	export interface DeleteConfigurationSetRequest {
	}

	export interface GetConfigurationSetEventDestinationsRequest {
	}

	export interface ListConfigurationSetsRequest {
	}


	/** An object that contains a voice message and information about the recipient that you want to send it to. */
	export interface VoiceMessageContent {

		/** An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup. */
		CallInstructionsMessage?: CallInstructionsMessageType | null;

		/** An object that defines a message that contains unformatted text. */
		PlainTextMessage?: PlainTextMessageType | null;

		/** An object that defines a message that contains SSML-formatted text. */
		SSMLMessage?: SSMLMessageType | null;
	}


	/** SendVoiceMessageRequest */
	export interface SendVoiceMessageRequest {
		CallerId?: string | null;
		ConfigurationSetName?: string | null;

		/** An object that contains a voice message and information about the recipient that you want to send it to. */
		Content?: VoiceMessageContent | null;
		DestinationPhoneNumber?: string | null;
		OriginationPhoneNumber?: string | null;
	}


	/** UpdateConfigurationSetEventDestinationRequest */
	export interface UpdateConfigurationSetEventDestinationRequest {

		/** An object that defines a single event destination. */
		EventDestination?: EventDestinationDefinition | null;
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

	export interface CreateConfigurationSetEventDestinationPostBody {

		/** An object that defines a single event destination. */
		EventDestination?: CreateConfigurationSetEventDestinationPostBodyEventDestination | null;

		/** A name that identifies the event destination. */
		EventDestinationName?: string | null;
	}

	export interface CreateConfigurationSetEventDestinationPostBodyEventDestination {

		/** An object that contains information about an event destination that sends data to Amazon CloudWatch Logs. */
		CloudWatchLogsDestination?: CloudWatchLogsDestination | null;
		Enabled?: boolean | null;

		/** An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose. */
		KinesisFirehoseDestination?: KinesisFirehoseDestination | null;

		/** An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination. */
		MatchingEventTypes?: Array<EventType> | null;

		/** An object that contains information about an event destination that sends data to Amazon SNS. */
		SnsDestination?: SnsDestination | null;
	}

	export interface UpdateConfigurationSetEventDestinationPutBody {

		/** An object that defines a single event destination. */
		EventDestination?: UpdateConfigurationSetEventDestinationPutBodyEventDestination | null;
	}

	export interface UpdateConfigurationSetEventDestinationPutBodyEventDestination {

		/** An object that contains information about an event destination that sends data to Amazon CloudWatch Logs. */
		CloudWatchLogsDestination?: CloudWatchLogsDestination | null;
		Enabled?: boolean | null;

		/** An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose. */
		KinesisFirehoseDestination?: KinesisFirehoseDestination | null;

		/** An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination. */
		MatchingEventTypes?: Array<EventType> | null;

		/** An object that contains information about an event destination that sends data to Amazon SNS. */
		SnsDestination?: SnsDestination | null;
	}

	export interface SendVoiceMessagePostBody {

		/** The phone number that appears on recipients' devices when they receive the message. */
		CallerId?: string | null;

		/** The name of the configuration set that you want to use to send the message. */
		ConfigurationSetName?: string | null;

		/** An object that contains a voice message and information about the recipient that you want to send it to. */
		Content?: SendVoiceMessagePostBodyContent | null;

		/** The phone number that you want to send the voice message to. */
		DestinationPhoneNumber?: string | null;

		/** The phone number that Amazon Pinpoint should use to send the voice message. This isn't necessarily the phone number that appears on recipients' devices when they receive the message, because you can specify a CallerId parameter in the request. */
		OriginationPhoneNumber?: string | null;
	}

	export interface SendVoiceMessagePostBodyContent {

		/** An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup. */
		CallInstructionsMessage?: CallInstructionsMessageType | null;

		/** An object that defines a message that contains unformatted text. */
		PlainTextMessage?: PlainTextMessageType | null;

		/** An object that defines a message that contains SSML-formatted text. */
		SSMLMessage?: SSMLMessageType | null;
	}

}

