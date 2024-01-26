import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export enum Binding_enum_binding_type { apn = 0, gcm = 1, sms = 2, fcm = 3, 'facebook-messenger' = 4, alexa = 5 }

	export enum Credential_enum_push_service { gcm = 0, apn = 1, fcm = 2 }

	export enum Notification_enum_priority { high = 0, low = 1 }

	export interface Notifyv1credential {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Credential resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the resource. */
		friendly_name?: string | null;

		/** [APN only] Whether to send the credential to sandbox APNs. Can be `true` to send to sandbox APNs or `false` to send to production. */
		sandbox?: string | null;

		/**
		 * The unique string that we created to identify the Credential resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		type?: Credential_enum_push_service | null;

		/** The absolute URL of the Credential resource. */
		url?: string | null;
	}
	export interface Notifyv1credentialFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Credential resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the resource. */
		friendly_name: FormControl<string | null | undefined>,

		/** [APN only] Whether to send the credential to sandbox APNs. Can be `true` to send to sandbox APNs or `false` to send to production. */
		sandbox: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Credential resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		type: FormControl<Credential_enum_push_service | null | undefined>,

		/** The absolute URL of the Credential resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateNotifyv1credentialFormGroup() {
		return new FormGroup<Notifyv1credentialFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sandbox: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CR[0-9a-fA-F]{32}$')]),
			type: new FormControl<Credential_enum_push_service | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Notifyv1service {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** Deprecated. */
		alexa_skill_id?: string | null;

		/**
		 * The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for APN Bindings.
		 * Max length: 34
		 * Min length: 34
		 */
		apn_credential_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** Deprecated. */
		default_alexa_notification_protocol_version?: string | null;

		/** The protocol version to use for sending APNS notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource. */
		default_apn_notification_protocol_version?: string | null;

		/** The protocol version to use for sending FCM notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource. */
		default_fcm_notification_protocol_version?: string | null;

		/** The protocol version to use for sending GCM notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource. */
		default_gcm_notification_protocol_version?: string | null;

		/** Callback configuration that enables delivery callbacks, default false */
		delivery_callback_enabled?: boolean | null;

		/** URL to send delivery status callback. */
		delivery_callback_url?: string | null;

		/** Deprecated. */
		facebook_messenger_page_id?: string | null;

		/**
		 * The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for FCM Bindings.
		 * Max length: 34
		 * Min length: 34
		 */
		fcm_credential_sid?: string | null;

		/** The string that you assigned to describe the resource. */
		friendly_name?: string | null;

		/**
		 * The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for GCM Bindings.
		 * Max length: 34
		 * Min length: 34
		 */
		gcm_credential_sid?: string | null;

		/** The URLs of the Binding, Notification, Segment, and User resources related to the service. */
		links?: string | null;

		/** Whether to log notifications. Can be: `true` or `false` and the default is `true`. */
		log_enabled?: boolean | null;

		/**
		 * The SID of the [Messaging Service](https://www.twilio.com/docs/sms/quickstart#messaging-services) to use for SMS Bindings. In order to send SMS notifications this parameter has to be set.
		 * Max length: 34
		 * Min length: 34
		 */
		messaging_service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Service resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the Service resource. */
		url?: string | null;
	}
	export interface Notifyv1serviceFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** Deprecated. */
		alexa_skill_id: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for APN Bindings.
		 * Max length: 34
		 * Min length: 34
		 */
		apn_credential_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** Deprecated. */
		default_alexa_notification_protocol_version: FormControl<string | null | undefined>,

		/** The protocol version to use for sending APNS notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource. */
		default_apn_notification_protocol_version: FormControl<string | null | undefined>,

		/** The protocol version to use for sending FCM notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource. */
		default_fcm_notification_protocol_version: FormControl<string | null | undefined>,

		/** The protocol version to use for sending GCM notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource. */
		default_gcm_notification_protocol_version: FormControl<string | null | undefined>,

		/** Callback configuration that enables delivery callbacks, default false */
		delivery_callback_enabled: FormControl<boolean | null | undefined>,

		/** URL to send delivery status callback. */
		delivery_callback_url: FormControl<string | null | undefined>,

		/** Deprecated. */
		facebook_messenger_page_id: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for FCM Bindings.
		 * Max length: 34
		 * Min length: 34
		 */
		fcm_credential_sid: FormControl<string | null | undefined>,

		/** The string that you assigned to describe the resource. */
		friendly_name: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for GCM Bindings.
		 * Max length: 34
		 * Min length: 34
		 */
		gcm_credential_sid: FormControl<string | null | undefined>,

		/** The URLs of the Binding, Notification, Segment, and User resources related to the service. */
		links: FormControl<string | null | undefined>,

		/** Whether to log notifications. Can be: `true` or `false` and the default is `true`. */
		log_enabled: FormControl<boolean | null | undefined>,

		/**
		 * The SID of the [Messaging Service](https://www.twilio.com/docs/sms/quickstart#messaging-services) to use for SMS Bindings. In order to send SMS notifications this parameter has to be set.
		 * Max length: 34
		 * Min length: 34
		 */
		messaging_service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Service resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the Service resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateNotifyv1serviceFormGroup() {
		return new FormGroup<Notifyv1serviceFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			alexa_skill_id: new FormControl<string | null | undefined>(undefined),
			apn_credential_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CR[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			default_alexa_notification_protocol_version: new FormControl<string | null | undefined>(undefined),
			default_apn_notification_protocol_version: new FormControl<string | null | undefined>(undefined),
			default_fcm_notification_protocol_version: new FormControl<string | null | undefined>(undefined),
			default_gcm_notification_protocol_version: new FormControl<string | null | undefined>(undefined),
			delivery_callback_enabled: new FormControl<boolean | null | undefined>(undefined),
			delivery_callback_url: new FormControl<string | null | undefined>(undefined),
			facebook_messenger_page_id: new FormControl<string | null | undefined>(undefined),
			fcm_credential_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CR[0-9a-fA-F]{32}$')]),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			gcm_credential_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CR[0-9a-fA-F]{32}$')]),
			links: new FormControl<string | null | undefined>(undefined),
			log_enabled: new FormControl<boolean | null | undefined>(undefined),
			messaging_service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^MG[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Notifyv1servicebinding {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Binding resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The channel-specific address. For APNS, the device token. For FCM and GCM, the registration token. For SMS, a phone number in E.164 format. For Facebook Messenger, the Messenger ID of the user or a phone number in E.164 format. */
		address?: string | null;

		/** The transport technology to use for the Binding. Can be: `apn`, `fcm`, `gcm`, `sms`, or `facebook-messenger`. */
		binding_type?: string | null;

		/**
		 * The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) resource to be used to send notifications to this Binding. If present, this overrides the Credential specified in the Service resource. Applicable only to `apn`, `fcm`, and `gcm` type Bindings.
		 * Max length: 34
		 * Min length: 34
		 */
		credential_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** Deprecated. */
		endpoint?: string | null;

		/** The `identity` value that uniquely identifies the resource's [User](https://www.twilio.com/docs/chat/rest/user-resource) within the [Service](https://www.twilio.com/docs/notify/api/service-resource). Up to 20 Bindings can be created for the same Identity in a given Service. */
		identity?: string | null;

		/** The URLs of related resources. */
		links?: string | null;

		/** The protocol version to use to send the notification. This defaults to the value of `default_xxxx_notification_protocol_version` in the [Service](https://www.twilio.com/docs/notify/api/service-resource) for the protocol. The current version is `"3"` for `apn`, `fcm`, and `gcm` type Bindings. The parameter is not applicable to `sms` and `facebook-messenger` type Bindings as the data format is fixed. */
		notification_protocol_version?: string | null;

		/**
		 * The SID of the [Service](https://www.twilio.com/docs/notify/api/service-resource) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Binding resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The list of tags associated with this Binding. Tags can be used to select the Bindings to use when sending a notification. Maximum 20 tags are allowed. */
		tags?: Array<string>;

		/** The absolute URL of the Binding resource. */
		url?: string | null;
	}
	export interface Notifyv1servicebindingFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Binding resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The channel-specific address. For APNS, the device token. For FCM and GCM, the registration token. For SMS, a phone number in E.164 format. For Facebook Messenger, the Messenger ID of the user or a phone number in E.164 format. */
		address: FormControl<string | null | undefined>,

		/** The transport technology to use for the Binding. Can be: `apn`, `fcm`, `gcm`, `sms`, or `facebook-messenger`. */
		binding_type: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) resource to be used to send notifications to this Binding. If present, this overrides the Credential specified in the Service resource. Applicable only to `apn`, `fcm`, and `gcm` type Bindings.
		 * Max length: 34
		 * Min length: 34
		 */
		credential_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** Deprecated. */
		endpoint: FormControl<string | null | undefined>,

		/** The `identity` value that uniquely identifies the resource's [User](https://www.twilio.com/docs/chat/rest/user-resource) within the [Service](https://www.twilio.com/docs/notify/api/service-resource). Up to 20 Bindings can be created for the same Identity in a given Service. */
		identity: FormControl<string | null | undefined>,

		/** The URLs of related resources. */
		links: FormControl<string | null | undefined>,

		/** The protocol version to use to send the notification. This defaults to the value of `default_xxxx_notification_protocol_version` in the [Service](https://www.twilio.com/docs/notify/api/service-resource) for the protocol. The current version is `"3"` for `apn`, `fcm`, and `gcm` type Bindings. The parameter is not applicable to `sms` and `facebook-messenger` type Bindings as the data format is fixed. */
		notification_protocol_version: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Service](https://www.twilio.com/docs/notify/api/service-resource) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Binding resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the Binding resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateNotifyv1servicebindingFormGroup() {
		return new FormGroup<Notifyv1servicebindingFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			address: new FormControl<string | null | undefined>(undefined),
			binding_type: new FormControl<string | null | undefined>(undefined),
			credential_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CR[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			identity: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			notification_protocol_version: new FormControl<string | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^BS[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Notifyv1servicenotification {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Notification resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The actions to display for the notification. For APNS, translates to the `aps.category` value. For GCM, translates to the `data.twi_action` value. For SMS, this parameter is not supported and is omitted from deliveries to those channels. */
		action?: string | null;

		/** Deprecated. */
		alexa?: any;

		/** The APNS-specific payload that overrides corresponding attributes in the generic payload for APNS Bindings. This property maps to the APNS `Payload` item, therefore the `aps` key must be used to change standard attributes. Adds custom key-value pairs to the root of the dictionary. See the [APNS documentation](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CommunicatingwithAPNs.html) for more details. We reserve keys that start with `twi_` for future use. Custom keys that start with `twi_` are not allowed. */
		apn?: any;

		/** The notification text. For FCM and GCM, translates to `data.twi_body`. For APNS, translates to `aps.alert.body`. For SMS, translates to `body`. SMS requires either this `body` value, or `media_urls` attribute defined in the `sms` parameter of the notification. */
		body?: string | null;

		/** The custom key-value pairs of the notification's payload. For FCM and GCM, this value translates to `data` in the FCM and GCM payloads. FCM and GCM [reserve certain keys](https://firebase.google.com/docs/cloud-messaging/http-server-ref) that cannot be used in those channels. For APNS, attributes of `data` are inserted into the APNS payload as custom properties outside of the `aps` dictionary. In all channels, we reserve keys that start with `twi_` for future use. Custom keys that start with `twi_` are not allowed and are rejected as 400 Bad request with no delivery attempted. For SMS, this parameter is not supported and is omitted from deliveries to those channels. */
		data?: any;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** Deprecated. */
		facebook_messenger?: any;

		/** The FCM-specific payload that overrides corresponding attributes in the generic payload for FCM Bindings. This property maps to the root JSON dictionary. See the [FCM documentation](https://firebase.google.com/docs/cloud-messaging/http-server-ref#downstream) for more details. Target parameters `to`, `registration_ids`, `condition`, and `notification_key` are not allowed in this parameter. We reserve keys that start with `twi_` for future use. Custom keys that start with `twi_` are not allowed. FCM also [reserves certain keys](https://firebase.google.com/docs/cloud-messaging/http-server-ref), which cannot be used in that channel. */
		fcm?: any;

		/** The GCM-specific payload that overrides corresponding attributes in the generic payload for GCM Bindings.  This property maps to the root JSON dictionary. Target parameters `to`, `registration_ids`, and `notification_key` are not allowed. We reserve keys that start with `twi_` for future use. Custom keys that start with `twi_` are not allowed. */
		gcm?: any;

		/** The list of `identity` values of the Users to notify. We will attempt to deliver notifications only to Bindings with an identity in this list. */
		identities?: Array<string>;
		priority?: Notification_enum_priority | null;

		/** The list of Segments to notify. The [Segment](https://www.twilio.com/docs/notify/api/segment-resource) resource is deprecated. Use the `tags` property, instead. */
		segments?: Array<string>;

		/**
		 * The SID of the [Service](https://www.twilio.com/docs/notify/api/service-resource) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Notification resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The SMS-specific payload that overrides corresponding attributes in the generic payload for SMS Bindings.  Each attribute in this value maps to the corresponding `form` parameter of the Twilio [Message](https://www.twilio.com/docs/sms/api/message-resource) resource.  These parameters of the Message resource are supported in snake case format: `body`, `media_urls`, `status_callback`, and `max_price`.  The `status_callback` parameter overrides the corresponding parameter in the messaging service, if configured. The `media_urls` property expects a JSON array. */
		sms?: any;

		/** The name of the sound to be played for the notification. For FCM and GCM, this Translates to `data.twi_sound`.  For APNS, this translates to `aps.sound`.  SMS does not support this property. */
		sound?: string | null;

		/** The tags that select the Bindings to notify. Notifications will be attempted only to Bindings that have all of the tags listed in this property. */
		tags?: Array<string>;

		/** The notification title. For FCM and GCM, this translates to the `data.twi_title` value. For APNS, this translates to the `aps.alert.title` value. SMS does not support this property. This field is not visible on iOS phones and tablets but appears on Apple Watch and Android devices. */
		title?: string | null;

		/** How long, in seconds, the notification is valid. Can be an integer between 0 and 2,419,200, which is 4 weeks, the default and the maximum supported time to live (TTL). Delivery should be attempted if the device is offline until the TTL elapses. Zero means that the notification delivery is attempted immediately, only once, and is not stored for future delivery. SMS does not support this property. */
		ttl?: number | null;
	}
	export interface Notifyv1servicenotificationFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Notification resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The actions to display for the notification. For APNS, translates to the `aps.category` value. For GCM, translates to the `data.twi_action` value. For SMS, this parameter is not supported and is omitted from deliveries to those channels. */
		action: FormControl<string | null | undefined>,

		/** Deprecated. */
		alexa: FormControl<any | null | undefined>,

		/** The APNS-specific payload that overrides corresponding attributes in the generic payload for APNS Bindings. This property maps to the APNS `Payload` item, therefore the `aps` key must be used to change standard attributes. Adds custom key-value pairs to the root of the dictionary. See the [APNS documentation](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CommunicatingwithAPNs.html) for more details. We reserve keys that start with `twi_` for future use. Custom keys that start with `twi_` are not allowed. */
		apn: FormControl<any | null | undefined>,

		/** The notification text. For FCM and GCM, translates to `data.twi_body`. For APNS, translates to `aps.alert.body`. For SMS, translates to `body`. SMS requires either this `body` value, or `media_urls` attribute defined in the `sms` parameter of the notification. */
		body: FormControl<string | null | undefined>,

		/** The custom key-value pairs of the notification's payload. For FCM and GCM, this value translates to `data` in the FCM and GCM payloads. FCM and GCM [reserve certain keys](https://firebase.google.com/docs/cloud-messaging/http-server-ref) that cannot be used in those channels. For APNS, attributes of `data` are inserted into the APNS payload as custom properties outside of the `aps` dictionary. In all channels, we reserve keys that start with `twi_` for future use. Custom keys that start with `twi_` are not allowed and are rejected as 400 Bad request with no delivery attempted. For SMS, this parameter is not supported and is omitted from deliveries to those channels. */
		data: FormControl<any | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** Deprecated. */
		facebook_messenger: FormControl<any | null | undefined>,

		/** The FCM-specific payload that overrides corresponding attributes in the generic payload for FCM Bindings. This property maps to the root JSON dictionary. See the [FCM documentation](https://firebase.google.com/docs/cloud-messaging/http-server-ref#downstream) for more details. Target parameters `to`, `registration_ids`, `condition`, and `notification_key` are not allowed in this parameter. We reserve keys that start with `twi_` for future use. Custom keys that start with `twi_` are not allowed. FCM also [reserves certain keys](https://firebase.google.com/docs/cloud-messaging/http-server-ref), which cannot be used in that channel. */
		fcm: FormControl<any | null | undefined>,

		/** The GCM-specific payload that overrides corresponding attributes in the generic payload for GCM Bindings.  This property maps to the root JSON dictionary. Target parameters `to`, `registration_ids`, and `notification_key` are not allowed. We reserve keys that start with `twi_` for future use. Custom keys that start with `twi_` are not allowed. */
		gcm: FormControl<any | null | undefined>,
		priority: FormControl<Notification_enum_priority | null | undefined>,

		/**
		 * The SID of the [Service](https://www.twilio.com/docs/notify/api/service-resource) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Notification resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The SMS-specific payload that overrides corresponding attributes in the generic payload for SMS Bindings.  Each attribute in this value maps to the corresponding `form` parameter of the Twilio [Message](https://www.twilio.com/docs/sms/api/message-resource) resource.  These parameters of the Message resource are supported in snake case format: `body`, `media_urls`, `status_callback`, and `max_price`.  The `status_callback` parameter overrides the corresponding parameter in the messaging service, if configured. The `media_urls` property expects a JSON array. */
		sms: FormControl<any | null | undefined>,

		/** The name of the sound to be played for the notification. For FCM and GCM, this Translates to `data.twi_sound`.  For APNS, this translates to `aps.sound`.  SMS does not support this property. */
		sound: FormControl<string | null | undefined>,

		/** The notification title. For FCM and GCM, this translates to the `data.twi_title` value. For APNS, this translates to the `aps.alert.title` value. SMS does not support this property. This field is not visible on iOS phones and tablets but appears on Apple Watch and Android devices. */
		title: FormControl<string | null | undefined>,

		/** How long, in seconds, the notification is valid. Can be an integer between 0 and 2,419,200, which is 4 weeks, the default and the maximum supported time to live (TTL). Delivery should be attempted if the device is offline until the TTL elapses. Zero means that the notification delivery is attempted immediately, only once, and is not stored for future delivery. SMS does not support this property. */
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateNotifyv1servicenotificationFormGroup() {
		return new FormGroup<Notifyv1servicenotificationFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			action: new FormControl<string | null | undefined>(undefined),
			alexa: new FormControl<any | null | undefined>(undefined),
			apn: new FormControl<any | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<any | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			facebook_messenger: new FormControl<any | null | undefined>(undefined),
			fcm: new FormControl<any | null | undefined>(undefined),
			gcm: new FormControl<any | null | undefined>(undefined),
			priority: new FormControl<Notification_enum_priority | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^NT[0-9a-fA-F]{32}$')]),
			sms: new FormControl<any | null | undefined>(undefined),
			sound: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get v1/Credentials
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListCredentialReturn} OK
		 */
		ListCredential(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListCredentialReturn> {
			return this.http.get<ListCredentialReturn>(this.baseUri + 'v1/Credentials?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Credentials/{Sid}
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Credential resource to delete.
		 * @return {void} 
		 */
		DeleteCredential(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Credentials/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Credentials/{Sid}
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Credential resource to fetch.
		 * @return {Notifyv1credential} OK
		 */
		FetchCredential(Sid: string): Observable<Notifyv1credential> {
			return this.http.get<Notifyv1credential>(this.baseUri + 'v1/Credentials/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Services
		 * @param {string} FriendlyName The string that identifies the Service resources to read.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListServiceReturn} OK
		 */
		ListService(FriendlyName: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListServiceReturn> {
			return this.http.get<ListServiceReturn>(this.baseUri + 'v1/Services?FriendlyName=' + (FriendlyName == null ? '' : encodeURIComponent(FriendlyName)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get v1/Services/{ServiceSid}/Bindings
		 * @param {string} ServiceSid The SID of the [Service](https://www.twilio.com/docs/notify/api/service-resource) to read the resource from.
		 * @param {Date} StartDate Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`.
		 * @param {Date} EndDate Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`.
		 * @param {Array<string>} Identity The [User](https://www.twilio.com/docs/chat/rest/user-resource)'s `identity` value of the resources to read.
		 * @param {Array<string>} Tag Only list Bindings that have all of the specified Tags. The following implicit tags are available: `all`, `apn`, `fcm`, `gcm`, `sms`, `facebook-messenger`. Up to 5 tags are allowed.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListBindingReturn} OK
		 */
		ListBinding(ServiceSid: string, StartDate: Date | null | undefined, EndDate: Date | null | undefined, Identity: Array<string> | null | undefined, Tag: Array<string> | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListBindingReturn> {
			return this.http.get<ListBindingReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Bindings&StartDate=' + StartDate?.toISOString() + '&EndDate=' + EndDate?.toISOString() + '&' + Identity?.map(z => `Identity=${encodeURIComponent(z)}`).join('&') + '&' + Tag?.map(z => `Tag=${encodeURIComponent(z)}`).join('&') + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Services/{ServiceSid}/Bindings/{Sid}
		 * @param {string} ServiceSid The SID of the [Service](https://www.twilio.com/docs/notify/api/service-resource) to delete the resource from.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Binding resource to delete.
		 * @return {void} 
		 */
		DeleteBinding(ServiceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Bindings/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Services/{ServiceSid}/Bindings/{Sid}
		 * @param {string} ServiceSid The SID of the [Service](https://www.twilio.com/docs/notify/api/service-resource) to fetch the resource from.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Binding resource to fetch.
		 * @return {Notifyv1servicebinding} OK
		 */
		FetchBinding(ServiceSid: string, Sid: string): Observable<Notifyv1servicebinding> {
			return this.http.get<Notifyv1servicebinding>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Bindings/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Delete v1/Services/{Sid}
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Service resource to delete.
		 * @return {void} 
		 */
		DeleteService(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Services/{Sid}
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Service resource to fetch.
		 * @return {Notifyv1service} OK
		 */
		FetchService(Sid: string): Observable<Notifyv1service> {
			return this.http.get<Notifyv1service>(this.baseUri + 'v1/Services/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}
	}

	export interface ListCredentialReturn {
		credentials?: Array<Notifyv1credential>;
		meta?: ListCredentialReturnMeta;
	}
	export interface ListCredentialReturnFormProperties {
	}
	export function CreateListCredentialReturnFormGroup() {
		return new FormGroup<ListCredentialReturnFormProperties>({
		});

	}

	export interface ListCredentialReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListCredentialReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListCredentialReturnMetaFormGroup() {
		return new FormGroup<ListCredentialReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListServiceReturn {
		meta?: ListServiceReturnMeta;
		services?: Array<Notifyv1service>;
	}
	export interface ListServiceReturnFormProperties {
	}
	export function CreateListServiceReturnFormGroup() {
		return new FormGroup<ListServiceReturnFormProperties>({
		});

	}

	export interface ListServiceReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListServiceReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListServiceReturnMetaFormGroup() {
		return new FormGroup<ListServiceReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBindingReturn {
		bindings?: Array<Notifyv1servicebinding>;
		meta?: ListBindingReturnMeta;
	}
	export interface ListBindingReturnFormProperties {
	}
	export function CreateListBindingReturnFormGroup() {
		return new FormGroup<ListBindingReturnFormProperties>({
		});

	}

	export interface ListBindingReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListBindingReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListBindingReturnMetaFormGroup() {
		return new FormGroup<ListBindingReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

}

