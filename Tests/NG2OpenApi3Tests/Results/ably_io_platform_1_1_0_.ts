import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ChannelDetails {

		/**
		 * The required name of the channel including any qualifier, if any.
		 * Required
		 */
		channelId: string;

		/** In events relating to the activity of a channel in a specific region, this optionally identifies whether or not that region is responsible for global coordination of the channel. */
		isGlobalMaster?: boolean | null;

		/** In events relating to the activity of a channel in a specific region, this optionally identifies the region. */
		region?: string | null;

		/** A ChannelStatus instance. */
		status?: ChannelStatus;
	}
	export interface ChannelDetailsFormProperties {

		/**
		 * The required name of the channel including any qualifier, if any.
		 * Required
		 */
		channelId: FormControl<string | null | undefined>,

		/** In events relating to the activity of a channel in a specific region, this optionally identifies whether or not that region is responsible for global coordination of the channel. */
		isGlobalMaster: FormControl<boolean | null | undefined>,

		/** In events relating to the activity of a channel in a specific region, this optionally identifies the region. */
		region: FormControl<string | null | undefined>,
	}
	export function CreateChannelDetailsFormGroup() {
		return new FormGroup<ChannelDetailsFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isGlobalMaster: new FormControl<boolean | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A ChannelStatus instance. */
	export interface ChannelStatus {

		/**
		 * A required boolean value indicating whether the channel that is the subject of the event is active. For events indicating regional activity of a channel this indicates activity in that region, not global activity.
		 * Required
		 */
		isActive: boolean;

		/** An Occupancy instance indicating the occupancy of a channel. For events indicating regional activity of a channel this indicates activity in that region, not global activity. */
		occupancy?: Occupancy;
	}

	/** A ChannelStatus instance. */
	export interface ChannelStatusFormProperties {

		/**
		 * A required boolean value indicating whether the channel that is the subject of the event is active. For events indicating regional activity of a channel this indicates activity in that region, not global activity.
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,
	}
	export function CreateChannelStatusFormGroup() {
		return new FormGroup<ChannelStatusFormProperties>({
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An Occupancy instance indicating the occupancy of a channel. For events indicating regional activity of a channel this indicates activity in that region, not global activity. */
	export interface Occupancy {

		/** The number of connections that are authorised to enter members into the presence channel. */
		presenceConnections?: number | null;

		/** The number of members currently entered into the presence channel. */
		presenceMembers?: number | null;

		/** The number of connections that are authorised to subscribe to presence messages. */
		presenceSubscribers?: number | null;

		/** The number of connections attached to the channel that are authorised to publish. */
		publishers?: number | null;

		/** The number of connections attached that are authorised to subscribe to messages. */
		subscribers?: number | null;
	}

	/** An Occupancy instance indicating the occupancy of a channel. For events indicating regional activity of a channel this indicates activity in that region, not global activity. */
	export interface OccupancyFormProperties {

		/** The number of connections that are authorised to enter members into the presence channel. */
		presenceConnections: FormControl<number | null | undefined>,

		/** The number of members currently entered into the presence channel. */
		presenceMembers: FormControl<number | null | undefined>,

		/** The number of connections that are authorised to subscribe to presence messages. */
		presenceSubscribers: FormControl<number | null | undefined>,

		/** The number of connections attached to the channel that are authorised to publish. */
		publishers: FormControl<number | null | undefined>,

		/** The number of connections attached that are authorised to subscribe to messages. */
		subscribers: FormControl<number | null | undefined>,
	}
	export function CreateOccupancyFormGroup() {
		return new FormGroup<OccupancyFormProperties>({
			presenceConnections: new FormControl<number | null | undefined>(undefined),
			presenceMembers: new FormControl<number | null | undefined>(undefined),
			presenceSubscribers: new FormControl<number | null | undefined>(undefined),
			publishers: new FormControl<number | null | undefined>(undefined),
			subscribers: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeviceDetails {

		/** Optional trusted client identifier for the device. */
		clientId?: string | null;

		/** Secret value for the device. */
		deviceSecret?: string | null;

		/** Form factor of the push device. */
		formFactor?: DeviceDetailsFormFactor | null;

		/** Unique identifier for the device generated by the device itself. */
		id?: string | null;

		/** Optional metadata object for this device. The metadata for a device may only be set by clients with push-admin privileges and will be used more extensively in the future with smart notifications. */
		metadata?: string | null;

		/** Platform of the push device. */
		platform?: DeviceDetailsPlatform | null;

		/** Push recipient details for a device. */
		'push.recipient'?: Recipient;

		/** the current state of the push device. */
		'push.state'?: DeviceDetailsPush_state | null;
	}
	export interface DeviceDetailsFormProperties {

		/** Optional trusted client identifier for the device. */
		clientId: FormControl<string | null | undefined>,

		/** Secret value for the device. */
		deviceSecret: FormControl<string | null | undefined>,

		/** Form factor of the push device. */
		formFactor: FormControl<DeviceDetailsFormFactor | null | undefined>,

		/** Unique identifier for the device generated by the device itself. */
		id: FormControl<string | null | undefined>,

		/** Optional metadata object for this device. The metadata for a device may only be set by clients with push-admin privileges and will be used more extensively in the future with smart notifications. */
		metadata: FormControl<string | null | undefined>,

		/** Platform of the push device. */
		platform: FormControl<DeviceDetailsPlatform | null | undefined>,

		/** the current state of the push device. */
		'push.state': FormControl<DeviceDetailsPush_state | null | undefined>,
	}
	export function CreateDeviceDetailsFormGroup() {
		return new FormGroup<DeviceDetailsFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			deviceSecret: new FormControl<string | null | undefined>(undefined),
			formFactor: new FormControl<DeviceDetailsFormFactor | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<DeviceDetailsPlatform | null | undefined>(undefined),
			'push.state': new FormControl<DeviceDetailsPush_state | null | undefined>(undefined),
		});

	}

	export enum DeviceDetailsFormFactor { phone = 0, tablet = 1, desktop = 2, tv = 3, watch = 4, car = 5, embedded = 6 }

	export enum DeviceDetailsPlatform { ios = 0, android = 1 }


	/** Push recipient details for a device. */
	export interface Recipient {

		/** Client ID of recipient */
		clientId?: string | null;

		/** Client ID of recipient */
		deviceId?: string | null;

		/** when using APNs, specifies the required device token. */
		deviceToken?: string | null;

		/** when using GCM or FCM, specifies the required registration token. */
		registrationToken?: string | null;

		/** Defines which push platform is being used. */
		transportType?: RecipientTransportType | null;
	}

	/** Push recipient details for a device. */
	export interface RecipientFormProperties {

		/** Client ID of recipient */
		clientId: FormControl<string | null | undefined>,

		/** Client ID of recipient */
		deviceId: FormControl<string | null | undefined>,

		/** when using APNs, specifies the required device token. */
		deviceToken: FormControl<string | null | undefined>,

		/** when using GCM or FCM, specifies the required registration token. */
		registrationToken: FormControl<string | null | undefined>,

		/** Defines which push platform is being used. */
		transportType: FormControl<RecipientTransportType | null | undefined>,
	}
	export function CreateRecipientFormGroup() {
		return new FormGroup<RecipientFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			deviceId: new FormControl<string | null | undefined>(undefined),
			deviceToken: new FormControl<string | null | undefined>(undefined),
			registrationToken: new FormControl<string | null | undefined>(undefined),
			transportType: new FormControl<RecipientTransportType | null | undefined>(undefined),
		});

	}

	export enum RecipientTransportType { apns = 0, fcm = 1, gcm = 2 }

	export enum DeviceDetailsPush_state { Active = 0, Failing = 1, Failed = 2 }


	/** Returned error from failed REST. */
	export interface Error {

		/** Error code. */
		code?: number | null;

		/** Link to help with error. */
		href?: string | null;

		/** Message explaining the error's cause. */
		message?: string | null;

		/** Server ID with which error was encountered. */
		serverId?: string | null;

		/** Status error code. */
		statusCode?: number | null;
	}

	/** Returned error from failed REST. */
	export interface ErrorFormProperties {

		/** Error code. */
		code: FormControl<number | null | undefined>,

		/** Link to help with error. */
		href: FormControl<string | null | undefined>,

		/** Message explaining the error's cause. */
		message: FormControl<string | null | undefined>,

		/** Server ID with which error was encountered. */
		serverId: FormControl<string | null | undefined>,

		/** Status error code. */
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			serverId: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Extras object. Currently only allows for [push](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example) extra. */
	export interface Extras {
		push?: Push;
	}

	/** Extras object. Currently only allows for [push](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example) extra. */
	export interface ExtrasFormProperties {
	}
	export function CreateExtrasFormGroup() {
		return new FormGroup<ExtrasFormProperties>({
		});

	}

	export interface Push {

		/** Extends and overrides generic values when delivering via APNs. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure) */
		apns?: PushApns;

		/** Arbitrary [key-value string-to-string payload](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example). */
		data?: string | null;

		/** Extends and overrides generic values when delivering via GCM/FCM. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure) */
		fcm?: PushFcm;
		notification?: Notification;

		/** Extends and overrides generic values when delivering via web. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure) */
		web?: PushWeb;
	}
	export interface PushFormProperties {

		/** Arbitrary [key-value string-to-string payload](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example). */
		data: FormControl<string | null | undefined>,
	}
	export function CreatePushFormGroup() {
		return new FormGroup<PushFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PushApns {
		notification?: Notification;
	}
	export interface PushApnsFormProperties {
	}
	export function CreatePushApnsFormGroup() {
		return new FormGroup<PushApnsFormProperties>({
		});

	}

	export interface Notification {

		/** Text below title on the expanded notification. */
		body?: string | null;

		/** Platform-specific, used to group notifications together. */
		collapseKey?: string | null;

		/** Platform-specific icon for the notification. */
		icon?: string | null;

		/** Platform-specific sound for the notification. */
		sound?: string | null;

		/** Title to display at the notification. */
		title?: string | null;
	}
	export interface NotificationFormProperties {

		/** Text below title on the expanded notification. */
		body: FormControl<string | null | undefined>,

		/** Platform-specific, used to group notifications together. */
		collapseKey: FormControl<string | null | undefined>,

		/** Platform-specific icon for the notification. */
		icon: FormControl<string | null | undefined>,

		/** Platform-specific sound for the notification. */
		sound: FormControl<string | null | undefined>,

		/** Title to display at the notification. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateNotificationFormGroup() {
		return new FormGroup<NotificationFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			collapseKey: new FormControl<string | null | undefined>(undefined),
			icon: new FormControl<string | null | undefined>(undefined),
			sound: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PushFcm {
		notification?: Notification;
	}
	export interface PushFcmFormProperties {
	}
	export function CreatePushFcmFormGroup() {
		return new FormGroup<PushFcmFormProperties>({
		});

	}

	export interface PushWeb {
		notification?: Notification;
	}
	export interface PushWebFormProperties {
	}
	export function CreatePushWebFormGroup() {
		return new FormGroup<PushWebFormProperties>({
		});

	}


	/** Message object. */
	export interface Message {

		/** The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) of the publisher of this message. */
		clientId?: string | null;

		/** The connection ID of the publisher of this message. */
		connectionId?: string | null;

		/** The string encoded payload, with the encoding specified below. */
		data?: string | null;

		/** This will typically be empty as all messages received from Ably are automatically decoded client-side using this value. However, if the message encoding cannot be processed, this attribute will contain the remaining transformations not applied to the data payload. */
		encoding?: string | null;

		/** Extras object. Currently only allows for [push](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example) extra. */
		extras?: Extras;

		/** A Unique ID that can be specified by the publisher for [idempotent publishing](https://www.ably.io/documentation/rest/messages#idempotent). */
		id?: string | null;

		/** The event name, if provided. */
		name?: string | null;

		/** Timestamp when the message was received by the Ably, as milliseconds since the epoch. */
		timestamp?: number | null;
	}

	/** Message object. */
	export interface MessageFormProperties {

		/** The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) of the publisher of this message. */
		clientId: FormControl<string | null | undefined>,

		/** The connection ID of the publisher of this message. */
		connectionId: FormControl<string | null | undefined>,

		/** The string encoded payload, with the encoding specified below. */
		data: FormControl<string | null | undefined>,

		/** This will typically be empty as all messages received from Ably are automatically decoded client-side using this value. However, if the message encoding cannot be processed, this attribute will contain the remaining transformations not applied to the data payload. */
		encoding: FormControl<string | null | undefined>,

		/** A Unique ID that can be specified by the publisher for [idempotent publishing](https://www.ably.io/documentation/rest/messages#idempotent). */
		id: FormControl<string | null | undefined>,

		/** The event name, if provided. */
		name: FormControl<string | null | undefined>,

		/** Timestamp when the message was received by the Ably, as milliseconds since the epoch. */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			connectionId: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			encoding: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PresenceMessage {

		/** The event signified by a PresenceMessage. */
		action?: PresenceMessageAction | null;

		/** The client ID of the publisher of this presence update. */
		clientId?: string | null;

		/** The connection ID of the publisher of this presence update. */
		connectionId?: string | null;

		/** The presence update payload, if provided. */
		data?: string | null;

		/** This will typically be empty as all presence updates received from Ably are automatically decoded client-side using this value. However, if the message encoding cannot be processed, this attribute will contain the remaining transformations not applied to the data payload. */
		encoding?: string | null;

		/** Extras object. Currently only allows for [push](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example) extra. */
		extras?: Extras;

		/** Unique ID assigned by Ably to this presence update. */
		id?: string | null;

		/** Timestamp when the presence update was received by Ably, as milliseconds since the epoch. */
		timestamp?: number | null;
	}
	export interface PresenceMessageFormProperties {

		/** The event signified by a PresenceMessage. */
		action: FormControl<PresenceMessageAction | null | undefined>,

		/** The client ID of the publisher of this presence update. */
		clientId: FormControl<string | null | undefined>,

		/** The connection ID of the publisher of this presence update. */
		connectionId: FormControl<string | null | undefined>,

		/** The presence update payload, if provided. */
		data: FormControl<string | null | undefined>,

		/** This will typically be empty as all presence updates received from Ably are automatically decoded client-side using this value. However, if the message encoding cannot be processed, this attribute will contain the remaining transformations not applied to the data payload. */
		encoding: FormControl<string | null | undefined>,

		/** Unique ID assigned by Ably to this presence update. */
		id: FormControl<string | null | undefined>,

		/** Timestamp when the presence update was received by Ably, as milliseconds since the epoch. */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreatePresenceMessageFormGroup() {
		return new FormGroup<PresenceMessageFormProperties>({
			action: new FormControl<PresenceMessageAction | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			connectionId: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			encoding: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PresenceMessageAction { ABSENT = 0, PRESENT = 1, ENTER = 2, LEAVE = 3, UPDATE = 4 }

	export interface SignedTokenRequest extends TokenRequest {

		/**
		 * A signature, generated as an HMAC of each of the above components, using the key secret value.
		 * Required
		 */
		mac: string;
	}
	export interface SignedTokenRequestFormProperties extends TokenRequestFormProperties {

		/**
		 * A signature, generated as an HMAC of each of the above components, using the key secret value.
		 * Required
		 */
		mac: FormControl<string | null | undefined>,
	}
	export function CreateSignedTokenRequestFormGroup() {
		return new FormGroup<SignedTokenRequestFormProperties>({
			capability: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientId: new FormControl<string | null | undefined>(undefined),
			keyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nonce: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			mac: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TokenDetails {

		/** Regular expression representation of the capabilities of the token. */
		capability?: string | null;

		/** Timestamp of token expiration. */
		expires?: number | null;

		/** Timestamp of token creation. */
		issued?: number | null;

		/** Name of the key used to create the token */
		keyName?: string | null;

		/** The Ably Token. */
		token?: string | null;
	}
	export interface TokenDetailsFormProperties {

		/** Regular expression representation of the capabilities of the token. */
		capability: FormControl<string | null | undefined>,

		/** Timestamp of token expiration. */
		expires: FormControl<number | null | undefined>,

		/** Timestamp of token creation. */
		issued: FormControl<number | null | undefined>,

		/** Name of the key used to create the token */
		keyName: FormControl<string | null | undefined>,

		/** The Ably Token. */
		token: FormControl<string | null | undefined>,
	}
	export function CreateTokenDetailsFormGroup() {
		return new FormGroup<TokenDetailsFormProperties>({
			capability: new FormControl<string | null | undefined>(undefined),
			expires: new FormControl<number | null | undefined>(undefined),
			issued: new FormControl<number | null | undefined>(undefined),
			keyName: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TokenRequest {

		/**
		 * The [capabilities](https://www.ably.io/documentation/core-features/authentication#capabilities-explained) (i.e. a set of channel names/namespaces and, for each, a set of operations) which should be a subset of the set of capabilities associated with the key specified in keyName.
		 * Required
		 */
		capability: string;

		/** The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) to be assosciated with the token. Can be set to * to allow for any client ID to be used. */
		clientId?: string | null;

		/**
		 * Name of the key used for the TokenRequest. The keyName comprises of the app ID and key ID on an API Key.
		 * Required
		 */
		keyName: string;

		/**
		 * An unquoted, un-escaped random string of at least 16 characters. Used to ensure the Ably TokenRequest cannot be reused.
		 * Required
		 */
		nonce: string;

		/**
		 * Time of creation of the Ably TokenRequest.
		 * Required
		 */
		timestamp: number;
	}
	export interface TokenRequestFormProperties {

		/**
		 * The [capabilities](https://www.ably.io/documentation/core-features/authentication#capabilities-explained) (i.e. a set of channel names/namespaces and, for each, a set of operations) which should be a subset of the set of capabilities associated with the key specified in keyName.
		 * Required
		 */
		capability: FormControl<string | null | undefined>,

		/** The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) to be assosciated with the token. Can be set to * to allow for any client ID to be used. */
		clientId: FormControl<string | null | undefined>,

		/**
		 * Name of the key used for the TokenRequest. The keyName comprises of the app ID and key ID on an API Key.
		 * Required
		 */
		keyName: FormControl<string | null | undefined>,

		/**
		 * An unquoted, un-escaped random string of at least 16 characters. Used to ensure the Ably TokenRequest cannot be reused.
		 * Required
		 */
		nonce: FormControl<string | null | undefined>,

		/**
		 * Time of creation of the Ably TokenRequest.
		 * Required
		 */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateTokenRequestFormGroup() {
		return new FormGroup<TokenRequestFormProperties>({
			capability: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientId: new FormControl<string | null | undefined>(undefined),
			keyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nonce: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Enumerate all active channels of the application
		 * Enumerate all active channels of the application
		 * Get channels
		 * @param {string} prefix Optionally limits the query to only those channels whose name starts with the given prefix
		 * @param {GetMetadataOfAllChannelsBy} by optionally specifies whether to return just channel names (by=id) or ChannelDetails (by=value)
		 * @return {void} 
		 */
		GetMetadataOfAllChannels(limit: number | null | undefined, prefix: string | null | undefined, by: GetMetadataOfAllChannelsBy | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels?limit=' + limit + '&prefix=' + (prefix == null ? '' : encodeURIComponent(prefix)) + '&by=' + by, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get metadata of a channel
		 * Get metadata of a channel
		 * Get channels/{channel_id}
		 * @param {string} channel_id The [Channel's ID](https://www.ably.io/documentation/rest/channels).
		 * @return {ChannelDetails} OK
		 */
		GetMetadataOfChannel(channel_id: string): Observable<ChannelDetails> {
			return this.http.get<ChannelDetails>(this.baseUri + 'channels/' + (channel_id == null ? '' : encodeURIComponent(channel_id)), {});
		}

		/**
		 * Get message history for a channel
		 * Get message history for a channel
		 * Get channels/{channel_id}/messages
		 * @param {string} channel_id The [Channel's ID](https://www.ably.io/documentation/rest/channels).
		 * @return {void} 
		 */
		GetMessagesByChannel(channel_id: string, start: string | null | undefined, limit: number | null | undefined, end: string | null | undefined, direction: GetMessagesByChannelDirection | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + (channel_id == null ? '' : encodeURIComponent(channel_id)) + '/messages&start=' + (start == null ? '' : encodeURIComponent(start)) + '&limit=' + limit + '&end=' + (end == null ? '' : encodeURIComponent(end)) + '&direction=' + direction, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Publish a message to a channel
		 * Publish a message to the specified channel
		 * Post channels/{channel_id}/messages
		 * @param {string} channel_id The [Channel's ID](https://www.ably.io/documentation/rest/channels).
		 * @return {void} 
		 */
		PublishMessagesToChannel(channel_id: string, requestBody: Message): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'channels/' + (channel_id == null ? '' : encodeURIComponent(channel_id)) + '/messages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get presence of a channel
		 * Get presence on a channel
		 * Get channels/{channel_id}/presence
		 * @param {string} channel_id The [Channel's ID](https://www.ably.io/documentation/rest/channels).
		 * @return {Array<PresenceMessage>} OK
		 */
		GetPresenceOfChannel(channel_id: string, clientId: string | null | undefined, connectionId: string | null | undefined, limit: number | null | undefined): Observable<Array<PresenceMessage>> {
			return this.http.get<Array<PresenceMessage>>(this.baseUri + 'channels/' + (channel_id == null ? '' : encodeURIComponent(channel_id)) + '/presence&clientId=' + (clientId == null ? '' : encodeURIComponent(clientId)) + '&connectionId=' + (connectionId == null ? '' : encodeURIComponent(connectionId)) + '&limit=' + limit, {});
		}

		/**
		 * Get presence history of a channel
		 * Get presence on a channel
		 * Get channels/{channel_id}/presence/history
		 * @param {string} channel_id The [Channel's ID](https://www.ably.io/documentation/rest/channels).
		 * @return {void} 
		 */
		GetPresenceHistoryOfChannel(channel_id: string, start: string | null | undefined, limit: number | null | undefined, end: string | null | undefined, direction: GetMessagesByChannelDirection | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + (channel_id == null ? '' : encodeURIComponent(channel_id)) + '/presence/history&start=' + (start == null ? '' : encodeURIComponent(start)) + '&limit=' + limit + '&end=' + (end == null ? '' : encodeURIComponent(end)) + '&direction=' + direction, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request an access token
		 * This is the means by which clients obtain access tokens to use the service. You can see how to construct an Ably TokenRequest in the [Ably TokenRequest spec](https://www.ably.io/documentation/rest-api/token-request-spec) documentation, although we recommend you use an Ably SDK rather to create a TokenRequest, as the construction of a TokenRequest is complex. The resulting token response object contains the token properties as defined in Ably TokenRequest spec. Authentication is not required if using a Signed TokenRequest.
		 * Post keys/{keyName}/requestToken
		 * @param {string} keyName The [key name](https://www.ably.io/documentation/rest-api/token-request-spec#api-key-format) comprises of the app ID and key ID of an API key.
		 * @return {void} 
		 */
		RequestAccessToken(keyName: string, requestBody: TokenRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'keys/' + (keyName == null ? '' : encodeURIComponent(keyName)) + '/requestToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a registered device's update token
		 * Delete a device details object.
		 * Delete push/channelSubscriptions
		 * @param {string} channel Filter to restrict to subscriptions associated with that channel.
		 * @param {string} deviceId Must be set when clientId is empty, cannot be used with clientId.
		 * @param {string} clientId Must be set when deviceId is empty, cannot be used with deviceId.
		 * @return {void} 
		 */
		DeletePushDeviceDetails(channel: string | null | undefined, deviceId: string | null | undefined, clientId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'push/channelSubscriptions?channel=' + (channel == null ? '' : encodeURIComponent(channel)) + '&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&clientId=' + (clientId == null ? '' : encodeURIComponent(clientId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List channel subscriptions
		 * Get a list of push notification subscriptions to channels.
		 * Get push/channelSubscriptions
		 * @param {string} channel Filter to restrict to subscriptions associated with that channel.
		 * @param {string} deviceId Optional filter to restrict to devices associated with that deviceId. Cannot be used with clientId.
		 * @param {string} clientId Optional filter to restrict to devices associated with that clientId. Cannot be used with deviceId.
		 * @param {number} limit The maximum number of records to return.
		 * @return {void} 
		 */
		GetPushSubscriptionsOnChannels(channel: string | null | undefined, deviceId: string | null | undefined, clientId: string | null | undefined, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'push/channelSubscriptions?channel=' + (channel == null ? '' : encodeURIComponent(channel)) + '&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&clientId=' + (clientId == null ? '' : encodeURIComponent(clientId)) + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Subscribe a device to a channel
		 * Subscribe either a single device or all devices associated with a client ID to receive push notifications from messages sent to a channel.
		 * Post push/channelSubscriptions
		 * @return {void} 
		 */
		SubscribePushDeviceToChannel(requestBody: SubscribePushDeviceToChannelPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'push/channelSubscriptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all channels with at least one subscribed device
		 * Returns a paginated response of channel names.
		 * Get push/channels
		 * @return {void} 
		 */
		GetChannelsWithPushSubscribers(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'push/channels', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Unregister matching devices for push notifications
		 * Unregisters devices. All their subscriptions for receiving push notifications through channels will also be deleted.
		 * Delete push/deviceRegistrations
		 * @param {string} deviceId Optional filter to restrict to devices associated with that deviceId. Cannot be used with clientId.
		 * @param {string} clientId Optional filter to restrict to devices associated with that clientId. Cannot be used with deviceId.
		 * @return {void} 
		 */
		UnregisterAllPushDevices(deviceId: string | null | undefined, clientId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'push/deviceRegistrations?deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&clientId=' + (clientId == null ? '' : encodeURIComponent(clientId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List devices registered for receiving push notifications
		 * List of device details of devices registed for push notifications.
		 * Get push/deviceRegistrations
		 * @param {string} deviceId Optional filter to restrict to devices associated with that deviceId.
		 * @param {string} clientId Optional filter to restrict to devices associated with that clientId.
		 * @param {number} limit The maximum number of records to return.
		 * @return {void} 
		 */
		GetRegisteredPushDevices(deviceId: string | null | undefined, clientId: string | null | undefined, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'push/deviceRegistrations?deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&clientId=' + (clientId == null ? '' : encodeURIComponent(clientId)) + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Register a device for receiving push notifications
		 * Register a device’s details, including the information necessary to deliver push notifications to it. Requires "push-admin" capability.
		 * Post push/deviceRegistrations
		 * @return {void} 
		 */
		RegisterPushDevice(requestBody: DeviceDetails): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'push/deviceRegistrations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unregister a single device for push notifications
		 * Unregisters a single device by its device ID. All its subscriptions for receiving push notifications through channels will also be deleted.
		 * Delete push/deviceRegistrations/{device_id}
		 * @param {string} device_id Device's ID.
		 * @return {void} 
		 */
		UnregisterPushDevice(device_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'push/deviceRegistrations/' + (device_id == null ? '' : encodeURIComponent(device_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a device registration
		 * Get the full details of a device.
		 * Get push/deviceRegistrations/{device_id}
		 * @param {string} device_id Device's ID.
		 * @return {void} 
		 */
		GetPushDeviceDetails(device_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'push/deviceRegistrations/' + (device_id == null ? '' : encodeURIComponent(device_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a device registration
		 * Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.
		 * Patch push/deviceRegistrations/{device_id}
		 * @param {string} device_id Device's ID.
		 * @return {void} 
		 */
		PatchPushDeviceDetails(device_id: string, requestBody: DeviceDetails): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'push/deviceRegistrations/' + (device_id == null ? '' : encodeURIComponent(device_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a device registration
		 * Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.
		 * Put push/deviceRegistrations/{device_id}
		 * @param {string} device_id Device's ID.
		 * @return {void} 
		 */
		PutPushDeviceDetails(device_id: string, requestBody: DeviceDetails): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'push/deviceRegistrations/' + (device_id == null ? '' : encodeURIComponent(device_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset a registered device's update token
		 * Gets an updated device details object.
		 * Get push/deviceRegistrations/{device_id}/resetUpdateToken
		 * @param {string} device_id Device's ID.
		 * @return {void} 
		 */
		UpdatePushDeviceDetails(device_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'push/deviceRegistrations/' + (device_id == null ? '' : encodeURIComponent(device_id)) + '/resetUpdateToken', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Publish a push notification to device(s)
		 * A convenience endpoint to deliver a push notification payload to a single device or set of devices identified by their client identifier.
		 * Post push/publish
		 * @return {void} 
		 */
		PublishPushNotificationToDevices(requestBody: PublishPushNotificationToDevicesPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'push/publish', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve usage statistics for an application
		 * The Ably system can be queried to obtain usage statistics for a given application, and results are provided aggregated across all channels in use in the application in the specified period. Stats may be used to track usage against account quotas.
		 * Get stats
		 * @param {GetStatsUnit} unit Specifies the unit of aggregation in the returned results.
		 * @return {void} 
		 */
		GetStats(start: string | null | undefined, limit: number | null | undefined, end: string | null | undefined, direction: GetMessagesByChannelDirection | null | undefined, unit: GetStatsUnit | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats?start=' + (start == null ? '' : encodeURIComponent(start)) + '&limit=' + limit + '&end=' + (end == null ? '' : encodeURIComponent(end)) + '&direction=' + direction + '&unit=' + unit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the service time
		 * This returns the service time in milliseconds since the epoch.
		 * Get time
		 * @return {void} 
		 */
		GetTime(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'time', { observe: 'response', responseType: 'text' });
		}
	}

	export enum GetMetadataOfAllChannelsBy { value = 0, id = 1 }

	export enum GetMessagesByChannelDirection { forwards = 0, backwards = 1 }

	export interface SubscribePushDeviceToChannelPostBody {

		/** Channel name. */
		channel?: string | null;

		/** Must be set when clientId is empty, cannot be used with clientId. */
		deviceId?: string | null;
	}
	export interface SubscribePushDeviceToChannelPostBodyFormProperties {

		/** Channel name. */
		channel: FormControl<string | null | undefined>,

		/** Must be set when clientId is empty, cannot be used with clientId. */
		deviceId: FormControl<string | null | undefined>,
	}
	export function CreateSubscribePushDeviceToChannelPostBodyFormGroup() {
		return new FormGroup<SubscribePushDeviceToChannelPostBodyFormProperties>({
			channel: new FormControl<string | null | undefined>(undefined),
			deviceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PublishPushNotificationToDevicesPostBody {
		push?: Push;

		/**
		 * Push recipient details for a device.
		 * Required
		 */
		recipient: Recipient;
	}
	export interface PublishPushNotificationToDevicesPostBodyFormProperties {
	}
	export function CreatePublishPushNotificationToDevicesPostBodyFormGroup() {
		return new FormGroup<PublishPushNotificationToDevicesPostBodyFormProperties>({
		});

	}

	export enum GetStatsUnit { minute = 0, hour = 1, day = 2, month = 3 }

}

