import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export enum Channel_enum_channel_type { public = 0, private = 1 }

	export interface Chatv1credential {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the Credential resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
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
		type?: Chatv1credentialType | null;

		/** The absolute URL of the Credential resource. */
		url?: string | null;
	}
	export interface Chatv1credentialFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the Credential resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
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
		type: FormControl<Chatv1credentialType | null | undefined>,

		/** The absolute URL of the Credential resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateChatv1credentialFormGroup() {
		return new FormGroup<Chatv1credentialFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			sandbox: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CR[0-9a-fA-F]{32}$')]),
			type: new FormControl<Chatv1credentialType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Chatv1credentialType { gcm = 0, apn = 1, fcm = 2 }

	export interface Chatv1service {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the Service resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** DEPRECATED. The interval in seconds between consumption reports submission batches from client endpoints. */
		consumption_report_interval?: number | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/**
		 * The channel role assigned to a channel creator when they join a new channel. See the [Roles endpoint](https://www.twilio.com/docs/chat/api/roles) for more details.
		 * Max length: 34
		 * Min length: 34
		 */
		default_channel_creator_role_sid?: string | null;

		/**
		 * The channel role assigned to users when they are added to a channel. See the [Roles endpoint](https://www.twilio.com/docs/chat/api/roles) for more details.
		 * Max length: 34
		 * Min length: 34
		 */
		default_channel_role_sid?: string | null;

		/**
		 * The service role assigned to users when they are added to the service. See the [Roles endpoint](https://www.twilio.com/docs/chat/api/roles) for more details.
		 * Max length: 34
		 * Min length: 34
		 */
		default_service_role_sid?: string | null;

		/** The string that you assigned to describe the resource. */
		friendly_name?: string | null;

		/** An object that describes the limits of the service instance. The `limits` object contains  `channel_members` to describe the members/channel limit and `user_channels` to describe the channels/user limit. `channel_members` can be 1,000 or less, with a default of 250. `user_channels` can be 1,000 or less, with a default value of 100. */
		limits?: any;

		/** The absolute URLs of the Service's [Channels](https://www.twilio.com/docs/chat/api/channels), [Roles](https://www.twilio.com/docs/chat/api/roles), and [Users](https://www.twilio.com/docs/chat/api/users). */
		links?: string | null;

		/** The notification configuration for the Service instance. See [Push Notification Configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more information. */
		notifications?: any;

		/** The URL for post-event webhooks, which are called by using the `webhook_method`. See [Webhook Events](https://www.twilio.com/docs/api/chat/webhooks) for more details. */
		post_webhook_url?: string | null;

		/** The URL for pre-event webhooks, which are called by using the `webhook_method`. See [Webhook Events](https://www.twilio.com/docs/api/chat/webhooks) for more details. */
		pre_webhook_url?: string | null;

		/** Whether the [Reachability Indicator](https://www.twilio.com/docs/chat/reachability-indicator) is enabled for this Service instance. The default is `false`. */
		reachability_enabled?: boolean | null;

		/** Whether the [Message Consumption Horizon](https://www.twilio.com/docs/chat/consumption-horizon) feature is enabled. The default is `true`. */
		read_status_enabled?: boolean | null;

		/**
		 * The unique string that we created to identify the Service resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** How long in seconds after a `started typing` event until clients should assume that user is no longer typing, even if no `ended typing` message was received.  The default is 5 seconds. */
		typing_indicator_timeout?: number | null;

		/** The absolute URL of the Service resource. */
		url?: string | null;

		/** The list of WebHook events that are enabled for this Service instance. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details. */
		webhook_filters?: Array<string>;

		/** The HTTP method to use for calls to the `pre_webhook_url` and `post_webhook_url` webhooks.  Can be: `POST` or `GET` and the default is `POST`. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details. */
		webhook_method?: string | null;

		/** An object that contains information about the webhooks configured for this service. */
		webhooks?: any;
	}
	export interface Chatv1serviceFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the Service resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** DEPRECATED. The interval in seconds between consumption reports submission batches from client endpoints. */
		consumption_report_interval: FormControl<number | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/**
		 * The channel role assigned to a channel creator when they join a new channel. See the [Roles endpoint](https://www.twilio.com/docs/chat/api/roles) for more details.
		 * Max length: 34
		 * Min length: 34
		 */
		default_channel_creator_role_sid: FormControl<string | null | undefined>,

		/**
		 * The channel role assigned to users when they are added to a channel. See the [Roles endpoint](https://www.twilio.com/docs/chat/api/roles) for more details.
		 * Max length: 34
		 * Min length: 34
		 */
		default_channel_role_sid: FormControl<string | null | undefined>,

		/**
		 * The service role assigned to users when they are added to the service. See the [Roles endpoint](https://www.twilio.com/docs/chat/api/roles) for more details.
		 * Max length: 34
		 * Min length: 34
		 */
		default_service_role_sid: FormControl<string | null | undefined>,

		/** The string that you assigned to describe the resource. */
		friendly_name: FormControl<string | null | undefined>,

		/** An object that describes the limits of the service instance. The `limits` object contains  `channel_members` to describe the members/channel limit and `user_channels` to describe the channels/user limit. `channel_members` can be 1,000 or less, with a default of 250. `user_channels` can be 1,000 or less, with a default value of 100. */
		limits: FormControl<any | null | undefined>,

		/** The absolute URLs of the Service's [Channels](https://www.twilio.com/docs/chat/api/channels), [Roles](https://www.twilio.com/docs/chat/api/roles), and [Users](https://www.twilio.com/docs/chat/api/users). */
		links: FormControl<string | null | undefined>,

		/** The notification configuration for the Service instance. See [Push Notification Configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more information. */
		notifications: FormControl<any | null | undefined>,

		/** The URL for post-event webhooks, which are called by using the `webhook_method`. See [Webhook Events](https://www.twilio.com/docs/api/chat/webhooks) for more details. */
		post_webhook_url: FormControl<string | null | undefined>,

		/** The URL for pre-event webhooks, which are called by using the `webhook_method`. See [Webhook Events](https://www.twilio.com/docs/api/chat/webhooks) for more details. */
		pre_webhook_url: FormControl<string | null | undefined>,

		/** Whether the [Reachability Indicator](https://www.twilio.com/docs/chat/reachability-indicator) is enabled for this Service instance. The default is `false`. */
		reachability_enabled: FormControl<boolean | null | undefined>,

		/** Whether the [Message Consumption Horizon](https://www.twilio.com/docs/chat/consumption-horizon) feature is enabled. The default is `true`. */
		read_status_enabled: FormControl<boolean | null | undefined>,

		/**
		 * The unique string that we created to identify the Service resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** How long in seconds after a `started typing` event until clients should assume that user is no longer typing, even if no `ended typing` message was received.  The default is 5 seconds. */
		typing_indicator_timeout: FormControl<number | null | undefined>,

		/** The absolute URL of the Service resource. */
		url: FormControl<string | null | undefined>,

		/** The HTTP method to use for calls to the `pre_webhook_url` and `post_webhook_url` webhooks.  Can be: `POST` or `GET` and the default is `POST`. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details. */
		webhook_method: FormControl<string | null | undefined>,

		/** An object that contains information about the webhooks configured for this service. */
		webhooks: FormControl<any | null | undefined>,
	}
	export function CreateChatv1serviceFormGroup() {
		return new FormGroup<Chatv1serviceFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			consumption_report_interval: new FormControl<number | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			default_channel_creator_role_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^RL[0-9a-fA-F]{32}$')]),
			default_channel_role_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^RL[0-9a-fA-F]{32}$')]),
			default_service_role_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^RL[0-9a-fA-F]{32}$')]),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			limits: new FormControl<any | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			notifications: new FormControl<any | null | undefined>(undefined),
			post_webhook_url: new FormControl<string | null | undefined>(undefined),
			pre_webhook_url: new FormControl<string | null | undefined>(undefined),
			reachability_enabled: new FormControl<boolean | null | undefined>(undefined),
			read_status_enabled: new FormControl<boolean | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			typing_indicator_timeout: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			webhook_method: new FormControl<string | null | undefined>(undefined),
			webhooks: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface Chatv1servicechannel {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the Channel resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The JSON string that stores application-specific data. **Note** If this property has been assigned a value, it's only  displayed in a FETCH action that returns a single resource; otherwise, it's null. If the attributes have not been set, `{}` is returned. */
		attributes?: string | null;

		/** The `identity` of the User that created the channel. If the Channel was created by using the API, the value is `system`. */
		created_by?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the resource. */
		friendly_name?: string | null;

		/** The absolute URLs of the [Members](https://www.twilio.com/docs/chat/api/members), [Messages](https://www.twilio.com/docs/chat/api/messages) , [Invites](https://www.twilio.com/docs/chat/api/invites) and, if it exists, the last [Message](https://www.twilio.com/docs/chat/api/messages) for the Channel. */
		links?: string | null;

		/** The number of Members in the Channel. */
		members_count?: number | null;

		/** The number of Messages in the Channel. */
		messages_count?: number | null;

		/**
		 * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Channel resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		type?: Channel_enum_channel_type | null;

		/** An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource's `sid` in the URL. */
		unique_name?: string | null;

		/** The absolute URL of the Channel resource. */
		url?: string | null;
	}
	export interface Chatv1servicechannelFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the Channel resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The JSON string that stores application-specific data. **Note** If this property has been assigned a value, it's only  displayed in a FETCH action that returns a single resource; otherwise, it's null. If the attributes have not been set, `{}` is returned. */
		attributes: FormControl<string | null | undefined>,

		/** The `identity` of the User that created the channel. If the Channel was created by using the API, the value is `system`. */
		created_by: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the resource. */
		friendly_name: FormControl<string | null | undefined>,

		/** The absolute URLs of the [Members](https://www.twilio.com/docs/chat/api/members), [Messages](https://www.twilio.com/docs/chat/api/messages) , [Invites](https://www.twilio.com/docs/chat/api/invites) and, if it exists, the last [Message](https://www.twilio.com/docs/chat/api/messages) for the Channel. */
		links: FormControl<string | null | undefined>,

		/** The number of Members in the Channel. */
		members_count: FormControl<number | null | undefined>,

		/** The number of Messages in the Channel. */
		messages_count: FormControl<number | null | undefined>,

		/**
		 * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Channel resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		type: FormControl<Channel_enum_channel_type | null | undefined>,

		/** An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource's `sid` in the URL. */
		unique_name: FormControl<string | null | undefined>,

		/** The absolute URL of the Channel resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateChatv1servicechannelFormGroup() {
		return new FormGroup<Chatv1servicechannelFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			attributes: new FormControl<string | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			members_count: new FormControl<number | null | undefined>(undefined),
			messages_count: new FormControl<number | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CH[0-9a-fA-F]{32}$')]),
			type: new FormControl<Channel_enum_channel_type | null | undefined>(undefined),
			unique_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Chatv1servicechannelinvite {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the Invite resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/**
		 * The SID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the resource belongs to.
		 * Max length: 34
		 * Min length: 34
		 */
		channel_sid?: string | null;

		/** The `identity` of the User that created the invite. */
		created_by?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** The application-defined string that uniquely identifies the resource's [User](https://www.twilio.com/docs/api/chat/rest/users) within the [Service](https://www.twilio.com/docs/api/chat/rest/services). See [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens) for more info. */
		identity?: string | null;

		/**
		 * The SID of the [Role](https://www.twilio.com/docs/api/chat/rest/roles) assigned to the resource.
		 * Max length: 34
		 * Min length: 34
		 */
		role_sid?: string | null;

		/**
		 * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Invite resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the Invite resource. */
		url?: string | null;
	}
	export interface Chatv1servicechannelinviteFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the Invite resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the resource belongs to.
		 * Max length: 34
		 * Min length: 34
		 */
		channel_sid: FormControl<string | null | undefined>,

		/** The `identity` of the User that created the invite. */
		created_by: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The application-defined string that uniquely identifies the resource's [User](https://www.twilio.com/docs/api/chat/rest/users) within the [Service](https://www.twilio.com/docs/api/chat/rest/services). See [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens) for more info. */
		identity: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Role](https://www.twilio.com/docs/api/chat/rest/roles) assigned to the resource.
		 * Max length: 34
		 * Min length: 34
		 */
		role_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Invite resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the Invite resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateChatv1servicechannelinviteFormGroup() {
		return new FormGroup<Chatv1servicechannelinviteFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			channel_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CH[0-9a-fA-F]{32}$')]),
			created_by: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			identity: new FormControl<string | null | undefined>(undefined),
			role_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^RL[0-9a-fA-F]{32}$')]),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IN[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Chatv1servicechannelmember {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the Member resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/**
		 * The unique ID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) for the member.
		 * Max length: 34
		 * Min length: 34
		 */
		channel_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** The application-defined string that uniquely identifies the resource's [User](https://www.twilio.com/docs/api/chat/rest/users) within the [Service](https://www.twilio.com/docs/api/chat/rest/services). See [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens) for more info. */
		identity?: string | null;

		/** The index of the last [Message](https://www.twilio.com/docs/api/chat/rest/messages) in the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) that the Member has read. */
		last_consumed_message_index?: number | null;

		/** The ISO 8601 timestamp string that represents the date-time of the last [Message](https://www.twilio.com/docs/api/chat/rest/messages) read event for the Member within the [Channel](https://www.twilio.com/docs/api/chat/rest/channels). */
		last_consumption_timestamp?: Date | null;

		/**
		 * The SID of the [Role](https://www.twilio.com/docs/api/chat/rest/roles) assigned to the member.
		 * Max length: 34
		 * Min length: 34
		 */
		role_sid?: string | null;

		/**
		 * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Member resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the Member resource. */
		url?: string | null;
	}
	export interface Chatv1servicechannelmemberFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the Member resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The unique ID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) for the member.
		 * Max length: 34
		 * Min length: 34
		 */
		channel_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The application-defined string that uniquely identifies the resource's [User](https://www.twilio.com/docs/api/chat/rest/users) within the [Service](https://www.twilio.com/docs/api/chat/rest/services). See [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens) for more info. */
		identity: FormControl<string | null | undefined>,

		/** The index of the last [Message](https://www.twilio.com/docs/api/chat/rest/messages) in the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) that the Member has read. */
		last_consumed_message_index: FormControl<number | null | undefined>,

		/** The ISO 8601 timestamp string that represents the date-time of the last [Message](https://www.twilio.com/docs/api/chat/rest/messages) read event for the Member within the [Channel](https://www.twilio.com/docs/api/chat/rest/channels). */
		last_consumption_timestamp: FormControl<Date | null | undefined>,

		/**
		 * The SID of the [Role](https://www.twilio.com/docs/api/chat/rest/roles) assigned to the member.
		 * Max length: 34
		 * Min length: 34
		 */
		role_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Member resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the Member resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateChatv1servicechannelmemberFormGroup() {
		return new FormGroup<Chatv1servicechannelmemberFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			channel_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CH[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			identity: new FormControl<string | null | undefined>(undefined),
			last_consumed_message_index: new FormControl<number | null | undefined>(undefined),
			last_consumption_timestamp: new FormControl<Date | null | undefined>(undefined),
			role_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^RL[0-9a-fA-F]{32}$')]),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^MB[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Chatv1servicechannelmessage {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the Message resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The JSON string that stores application-specific data. **Note** If this property has been assigned a value, it's only  displayed in a FETCH action that returns a single resource; otherwise, it's null. If the attributes have not been set, `{}` is returned. */
		attributes?: string | null;

		/** The content of the message. */
		body?: string | null;

		/**
		 * The unique ID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the Message resource belongs to.
		 * Max length: 34
		 * Min length: 34
		 */
		channel_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** The [identity](https://www.twilio.com/docs/api/chat/guides/identity) of the message's author. The default value is `system`. */
		from?: string | null;

		/** The index of the message within the [Channel](https://www.twilio.com/docs/chat/api/channels). */
		index?: number | null;

		/**
		 * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Message resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/**
		 * The SID of the [Channel](https://www.twilio.com/docs/chat/api/channels) that the message was sent to.
		 * Max length: 34
		 * Min length: 34
		 */
		to?: string | null;

		/** The absolute URL of the Message resource. */
		url?: string | null;

		/** Whether the message has been edited since it was created. */
		was_edited?: boolean | null;
	}
	export interface Chatv1servicechannelmessageFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the Message resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The JSON string that stores application-specific data. **Note** If this property has been assigned a value, it's only  displayed in a FETCH action that returns a single resource; otherwise, it's null. If the attributes have not been set, `{}` is returned. */
		attributes: FormControl<string | null | undefined>,

		/** The content of the message. */
		body: FormControl<string | null | undefined>,

		/**
		 * The unique ID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the Message resource belongs to.
		 * Max length: 34
		 * Min length: 34
		 */
		channel_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The [identity](https://www.twilio.com/docs/api/chat/guides/identity) of the message's author. The default value is `system`. */
		from: FormControl<string | null | undefined>,

		/** The index of the message within the [Channel](https://www.twilio.com/docs/chat/api/channels). */
		index: FormControl<number | null | undefined>,

		/**
		 * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Message resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Channel](https://www.twilio.com/docs/chat/api/channels) that the message was sent to.
		 * Max length: 34
		 * Min length: 34
		 */
		to: FormControl<string | null | undefined>,

		/** The absolute URL of the Message resource. */
		url: FormControl<string | null | undefined>,

		/** Whether the message has been edited since it was created. */
		was_edited: FormControl<boolean | null | undefined>,
	}
	export function CreateChatv1servicechannelmessageFormGroup() {
		return new FormGroup<Chatv1servicechannelmessageFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			attributes: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			channel_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CH[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IM[0-9a-fA-F]{32}$')]),
			to: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CH[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
			was_edited: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Chatv1servicerole {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the Role resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the resource. */
		friendly_name?: string | null;

		/** An array of the permissions the role has been granted, formatted as a JSON string. */
		permissions?: Array<string>;

		/**
		 * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Role resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		type?: Chatv1serviceroleType | null;

		/** The absolute URL of the Role resource. */
		url?: string | null;
	}
	export interface Chatv1serviceroleFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the Role resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the resource. */
		friendly_name: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Role resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		type: FormControl<Chatv1serviceroleType | null | undefined>,

		/** The absolute URL of the Role resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateChatv1serviceroleFormGroup() {
		return new FormGroup<Chatv1serviceroleFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^RL[0-9a-fA-F]{32}$')]),
			type: new FormControl<Chatv1serviceroleType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Chatv1serviceroleType { channel = 0, deployment = 1 }

	export interface Chatv1serviceuser {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the User resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The JSON string that stores application-specific data. **Note** If this property has been assigned a value, it's only  displayed in a FETCH action that returns a single resource; otherwise, it's null. If the attributes have not been set, `{}` is returned. */
		attributes?: string | null;

		/** The date and time in GMT when the resource was created specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the resource. */
		friendly_name?: string | null;

		/** The application-defined string that uniquely identifies the resource's User within the [Service](https://www.twilio.com/docs/api/chat/rest/services). This value is often a username or an email address. See [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens) for more info. */
		identity?: string | null;

		/** Whether the User has a potentially valid Push Notification registration (APN or GCM) for the Service instance. If at least one registration exists, `true`; otherwise `false`. This value is only returned by Fetch actions that return a single resource and `null` is always returned by a Read action. This value is `null` if the Service's `reachability_enabled` is `false`, and if the User has never had a notification registration, even if the Service's `reachability_enabled` is `true`. */
		is_notifiable?: boolean | null;

		/** Whether the User is actively connected to the Service instance and online. This value is only returned by Fetch actions that return a single resource and `null` is always returned by a Read action. This value is `null` if the Service's `reachability_enabled` is `false`, if the User has never been online for the Service instance, even if the Service's `reachability_enabled` is `true`. */
		is_online?: boolean | null;

		/** The number of Channels this User is a Member of. */
		joined_channels_count?: number | null;

		/** The absolute URLs of the [Channel](https://www.twilio.com/docs/chat/api/channels) and [Binding](https://www.twilio.com/docs/chat/rest/bindings-resource) resources related to the user. */
		links?: string | null;

		/**
		 * The SID of the [Role](https://www.twilio.com/docs/api/chat/rest/roles) assigned to the user.
		 * Max length: 34
		 * Min length: 34
		 */
		role_sid?: string | null;

		/**
		 * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the User resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the User resource. */
		url?: string | null;
	}
	export interface Chatv1serviceuserFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the User resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The JSON string that stores application-specific data. **Note** If this property has been assigned a value, it's only  displayed in a FETCH action that returns a single resource; otherwise, it's null. If the attributes have not been set, `{}` is returned. */
		attributes: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the resource. */
		friendly_name: FormControl<string | null | undefined>,

		/** The application-defined string that uniquely identifies the resource's User within the [Service](https://www.twilio.com/docs/api/chat/rest/services). This value is often a username or an email address. See [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens) for more info. */
		identity: FormControl<string | null | undefined>,

		/** Whether the User has a potentially valid Push Notification registration (APN or GCM) for the Service instance. If at least one registration exists, `true`; otherwise `false`. This value is only returned by Fetch actions that return a single resource and `null` is always returned by a Read action. This value is `null` if the Service's `reachability_enabled` is `false`, and if the User has never had a notification registration, even if the Service's `reachability_enabled` is `true`. */
		is_notifiable: FormControl<boolean | null | undefined>,

		/** Whether the User is actively connected to the Service instance and online. This value is only returned by Fetch actions that return a single resource and `null` is always returned by a Read action. This value is `null` if the Service's `reachability_enabled` is `false`, if the User has never been online for the Service instance, even if the Service's `reachability_enabled` is `true`. */
		is_online: FormControl<boolean | null | undefined>,

		/** The number of Channels this User is a Member of. */
		joined_channels_count: FormControl<number | null | undefined>,

		/** The absolute URLs of the [Channel](https://www.twilio.com/docs/chat/api/channels) and [Binding](https://www.twilio.com/docs/chat/rest/bindings-resource) resources related to the user. */
		links: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Role](https://www.twilio.com/docs/api/chat/rest/roles) assigned to the user.
		 * Max length: 34
		 * Min length: 34
		 */
		role_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the User resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the User resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateChatv1serviceuserFormGroup() {
		return new FormGroup<Chatv1serviceuserFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			attributes: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			identity: new FormControl<string | null | undefined>(undefined),
			is_notifiable: new FormControl<boolean | null | undefined>(undefined),
			is_online: new FormControl<boolean | null | undefined>(undefined),
			joined_channels_count: new FormControl<number | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			role_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^RL[0-9a-fA-F]{32}$')]),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^US[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Chatv1serviceuseruser_channel {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the User Channel resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/**
		 * The SID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the resource belongs to.
		 * Max length: 34
		 * Min length: 34
		 */
		channel_sid?: string | null;

		/** The index of the last [Message](https://www.twilio.com/docs/api/chat/rest/messages) in the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) that the Member has read. */
		last_consumed_message_index?: number | null;

		/** The absolute URLs of the [Members](https://www.twilio.com/docs/chat/api/members), [Messages](https://www.twilio.com/docs/chat/api/messages) , [Invites](https://www.twilio.com/docs/chat/api/invites) and, if it exists, the last [Message](https://www.twilio.com/docs/chat/api/messages) for the Channel. */
		links?: string | null;

		/**
		 * The SID of a [Member](https://www.twilio.com/docs/api/chat/rest/members) that represents the User on the Channel.
		 * Max length: 34
		 * Min length: 34
		 */
		member_sid?: string | null;

		/**
		 * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;
		status?: Chatv1serviceuseruser_channelStatus | null;

		/** The number of unread Messages in the Channel for the User. Note that retrieving messages on a client endpoint does not mean that messages are consumed or read. See [Consumption Horizon feature](/docs/api/chat/guides/consumption-horizon) to learn how to mark messages as consumed. */
		unread_messages_count?: number | null;
	}
	export interface Chatv1serviceuseruser_channelFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the User Channel resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the resource belongs to.
		 * Max length: 34
		 * Min length: 34
		 */
		channel_sid: FormControl<string | null | undefined>,

		/** The index of the last [Message](https://www.twilio.com/docs/api/chat/rest/messages) in the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) that the Member has read. */
		last_consumed_message_index: FormControl<number | null | undefined>,

		/** The absolute URLs of the [Members](https://www.twilio.com/docs/chat/api/members), [Messages](https://www.twilio.com/docs/chat/api/messages) , [Invites](https://www.twilio.com/docs/chat/api/invites) and, if it exists, the last [Message](https://www.twilio.com/docs/chat/api/messages) for the Channel. */
		links: FormControl<string | null | undefined>,

		/**
		 * The SID of a [Member](https://www.twilio.com/docs/api/chat/rest/members) that represents the User on the Channel.
		 * Max length: 34
		 * Min length: 34
		 */
		member_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,
		status: FormControl<Chatv1serviceuseruser_channelStatus | null | undefined>,

		/** The number of unread Messages in the Channel for the User. Note that retrieving messages on a client endpoint does not mean that messages are consumed or read. See [Consumption Horizon feature](/docs/api/chat/guides/consumption-horizon) to learn how to mark messages as consumed. */
		unread_messages_count: FormControl<number | null | undefined>,
	}
	export function CreateChatv1serviceuseruser_channelFormGroup() {
		return new FormGroup<Chatv1serviceuseruser_channelFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			channel_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CH[0-9a-fA-F]{32}$')]),
			last_consumed_message_index: new FormControl<number | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			member_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^MB[0-9a-fA-F]{32}$')]),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			status: new FormControl<Chatv1serviceuseruser_channelStatus | null | undefined>(undefined),
			unread_messages_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Chatv1serviceuseruser_channelStatus { joined = 0, invited = 1, not_participating = 2 }

	export enum Credential_enum_push_service { gcm = 0, apn = 1, fcm = 2 }

	export enum Message_enum_order_type { asc = 0, desc = 1 }

	export enum Role_enum_role_type { channel = 0, deployment = 1 }

	export enum User_channel_enum_channel_status { joined = 0, invited = 1, not_participating = 2 }

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
		 * @return {Chatv1credential} OK
		 */
		FetchCredential(Sid: string): Observable<Chatv1credential> {
			return this.http.get<Chatv1credential>(this.baseUri + 'v1/Credentials/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Services
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListServiceReturn} OK
		 */
		ListService(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListServiceReturn> {
			return this.http.get<ListServiceReturn>(this.baseUri + 'v1/Services?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get v1/Services/{ServiceSid}/Channels
		 * @param {string} ServiceSid The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to read the resources from.
		 * @param {Array<Channel_enum_channel_type>} Type The visibility of the Channels to read. Can be: `public` or `private` and defaults to `public`.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListChannelReturn} OK
		 */
		ListChannel(ServiceSid: string, Type: Array<Channel_enum_channel_type> | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListChannelReturn> {
			return this.http.get<ListChannelReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Channels&' + Type?.map(z => `Type=${z}`).join('&') + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get v1/Services/{ServiceSid}/Channels/{ChannelSid}/Invites
		 * @param {string} ServiceSid The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to read the resources from.
		 * @param {string} ChannelSid The SID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the resources to read belong to.
		 * @param {Array<string>} Identity The [User](https://www.twilio.com/docs/api/chat/rest/v1/user)'s `identity` value of the resources to read. See [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens) for more details.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListInviteReturn} OK
		 */
		ListInvite(ServiceSid: string, ChannelSid: string, Identity: Array<string> | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListInviteReturn> {
			return this.http.get<ListInviteReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Channels/' + (ChannelSid == null ? '' : encodeURIComponent(ChannelSid)) + '/Invites&' + Identity?.map(z => `Identity=${encodeURIComponent(z)}`).join('&') + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Services/{ServiceSid}/Channels/{ChannelSid}/Invites/{Sid}
		 * @param {string} ServiceSid The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to delete the resource from.
		 * @param {string} ChannelSid The SID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the resource to delete belongs to.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Invite resource to delete.
		 * @return {void} 
		 */
		DeleteInvite(ServiceSid: string, ChannelSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Channels/' + (ChannelSid == null ? '' : encodeURIComponent(ChannelSid)) + '/Invites/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Services/{ServiceSid}/Channels/{ChannelSid}/Invites/{Sid}
		 * @param {string} ServiceSid The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to fetch the resource from.
		 * @param {string} ChannelSid The SID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the resource to fetch belongs to.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Invite resource to fetch.
		 * @return {Chatv1servicechannelinvite} OK
		 */
		FetchInvite(ServiceSid: string, ChannelSid: string, Sid: string): Observable<Chatv1servicechannelinvite> {
			return this.http.get<Chatv1servicechannelinvite>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Channels/' + (ChannelSid == null ? '' : encodeURIComponent(ChannelSid)) + '/Invites/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Services/{ServiceSid}/Channels/{ChannelSid}/Members
		 * @param {string} ServiceSid The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to read the resources from.
		 * @param {string} ChannelSid The unique ID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the members to read belong to. Can be the Channel resource's `sid` or `unique_name` value.
		 * @param {Array<string>} Identity The [User](https://www.twilio.com/docs/api/chat/rest/v1/user)'s `identity` value of the resources to read. See [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens) for more details.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListMemberReturn} OK
		 */
		ListMember(ServiceSid: string, ChannelSid: string, Identity: Array<string> | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListMemberReturn> {
			return this.http.get<ListMemberReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Channels/' + (ChannelSid == null ? '' : encodeURIComponent(ChannelSid)) + '/Members&' + Identity?.map(z => `Identity=${encodeURIComponent(z)}`).join('&') + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Services/{ServiceSid}/Channels/{ChannelSid}/Members/{Sid}
		 * @param {string} ServiceSid The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to delete the resource from.
		 * @param {string} ChannelSid The unique ID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the message belongs to.  Can be the Channel's `sid` or `unique_name`.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Member resource to delete.
		 * @return {void} 
		 */
		DeleteMember(ServiceSid: string, ChannelSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Channels/' + (ChannelSid == null ? '' : encodeURIComponent(ChannelSid)) + '/Members/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Services/{ServiceSid}/Channels/{ChannelSid}/Members/{Sid}
		 * @param {string} ServiceSid The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to fetch the resource from.
		 * @param {string} ChannelSid The unique ID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the member to fetch belongs to. Can be the Channel resource's `sid` or `unique_name` value.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Member resource to fetch.
		 * @return {Chatv1servicechannelmember} OK
		 */
		FetchMember(ServiceSid: string, ChannelSid: string, Sid: string): Observable<Chatv1servicechannelmember> {
			return this.http.get<Chatv1servicechannelmember>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Channels/' + (ChannelSid == null ? '' : encodeURIComponent(ChannelSid)) + '/Members/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Services/{ServiceSid}/Channels/{ChannelSid}/Messages
		 * @param {string} ServiceSid The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to read the resources from.
		 * @param {string} ChannelSid The unique ID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the message to read belongs to. Can be the Channel's `sid` or `unique_name`.
		 * @param {Message_enum_order_type} Order The sort order of the returned messages. Can be: `asc` (ascending) or `desc` (descending) with `asc` as the default.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListMessageReturn} OK
		 */
		ListMessage(ServiceSid: string, ChannelSid: string, Order: Message_enum_order_type | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListMessageReturn> {
			return this.http.get<ListMessageReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Channels/' + (ChannelSid == null ? '' : encodeURIComponent(ChannelSid)) + '/Messages&Order=' + Order + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Services/{ServiceSid}/Channels/{ChannelSid}/Messages/{Sid}
		 * @param {string} ServiceSid The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to delete the resource from.
		 * @param {string} ChannelSid The unique ID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the message to delete belongs to.  Can be the Channel resource's `sid` or `unique_name`.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Message resource to delete.
		 * @return {void} 
		 */
		DeleteMessage(ServiceSid: string, ChannelSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Channels/' + (ChannelSid == null ? '' : encodeURIComponent(ChannelSid)) + '/Messages/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Services/{ServiceSid}/Channels/{ChannelSid}/Messages/{Sid}
		 * @param {string} ServiceSid The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to fetch the resource from.
		 * @param {string} ChannelSid The unique ID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the message to fetch belongs to. Can be the Channel's `sid` or `unique_name`.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Message resource to fetch.
		 * @return {Chatv1servicechannelmessage} OK
		 */
		FetchMessage(ServiceSid: string, ChannelSid: string, Sid: string): Observable<Chatv1servicechannelmessage> {
			return this.http.get<Chatv1servicechannelmessage>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Channels/' + (ChannelSid == null ? '' : encodeURIComponent(ChannelSid)) + '/Messages/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Delete v1/Services/{ServiceSid}/Channels/{Sid}
		 * @param {string} ServiceSid The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to delete the resource from.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Channel resource to delete.
		 * @return {void} 
		 */
		DeleteChannel(ServiceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Channels/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Services/{ServiceSid}/Channels/{Sid}
		 * @param {string} ServiceSid The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to fetch the resource from.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Channel resource to fetch.
		 * @return {Chatv1servicechannel} OK
		 */
		FetchChannel(ServiceSid: string, Sid: string): Observable<Chatv1servicechannel> {
			return this.http.get<Chatv1servicechannel>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Channels/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Services/{ServiceSid}/Roles
		 * @param {string} ServiceSid The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to read the resources from.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListRoleReturn} OK
		 */
		ListRole(ServiceSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListRoleReturn> {
			return this.http.get<ListRoleReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Roles&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Services/{ServiceSid}/Roles/{Sid}
		 * @param {string} ServiceSid The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to delete the resource from.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Role resource to delete.
		 * @return {void} 
		 */
		DeleteRole(ServiceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Roles/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Services/{ServiceSid}/Roles/{Sid}
		 * @param {string} ServiceSid The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to fetch the resource from.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Role resource to fetch.
		 * @return {Chatv1servicerole} OK
		 */
		FetchRole(ServiceSid: string, Sid: string): Observable<Chatv1servicerole> {
			return this.http.get<Chatv1servicerole>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Roles/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Services/{ServiceSid}/Users
		 * @param {string} ServiceSid The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to read the resources from.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListUserReturn} OK
		 */
		ListUser(ServiceSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListUserReturn> {
			return this.http.get<ListUserReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Users&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Services/{ServiceSid}/Users/{Sid}
		 * @param {string} ServiceSid The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to delete the resource from.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the User resource to delete.
		 * @return {void} 
		 */
		DeleteUser(ServiceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Users/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Services/{ServiceSid}/Users/{Sid}
		 * @param {string} ServiceSid The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to fetch the resource from.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the User resource to fetch.
		 * @return {Chatv1serviceuser} OK
		 */
		FetchUser(ServiceSid: string, Sid: string): Observable<Chatv1serviceuser> {
			return this.http.get<Chatv1serviceuser>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Users/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * List all Channels for a given User.
		 * Get v1/Services/{ServiceSid}/Users/{UserSid}/Channels
		 * @param {string} ServiceSid The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to read the resources from.
		 * @param {string} UserSid The SID of the [User](https://www.twilio.com/docs/api/chat/rest/users) to read the User Channel resources from.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListUserChannelReturn} OK
		 */
		ListUserChannel(ServiceSid: string, UserSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListUserChannelReturn> {
			return this.http.get<ListUserChannelReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Users/' + (UserSid == null ? '' : encodeURIComponent(UserSid)) + '/Channels&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
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
		 * @return {Chatv1service} OK
		 */
		FetchService(Sid: string): Observable<Chatv1service> {
			return this.http.get<Chatv1service>(this.baseUri + 'v1/Services/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}
	}

	export interface ListCredentialReturn {
		credentials?: Array<Chatv1credential>;
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
		services?: Array<Chatv1service>;
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

	export interface ListChannelReturn {
		channels?: Array<Chatv1servicechannel>;
		meta?: ListChannelReturnMeta;
	}
	export interface ListChannelReturnFormProperties {
	}
	export function CreateListChannelReturnFormGroup() {
		return new FormGroup<ListChannelReturnFormProperties>({
		});

	}

	export interface ListChannelReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListChannelReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListChannelReturnMetaFormGroup() {
		return new FormGroup<ListChannelReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInviteReturn {
		invites?: Array<Chatv1servicechannelinvite>;
		meta?: ListInviteReturnMeta;
	}
	export interface ListInviteReturnFormProperties {
	}
	export function CreateListInviteReturnFormGroup() {
		return new FormGroup<ListInviteReturnFormProperties>({
		});

	}

	export interface ListInviteReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListInviteReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListInviteReturnMetaFormGroup() {
		return new FormGroup<ListInviteReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMemberReturn {
		members?: Array<Chatv1servicechannelmember>;
		meta?: ListMemberReturnMeta;
	}
	export interface ListMemberReturnFormProperties {
	}
	export function CreateListMemberReturnFormGroup() {
		return new FormGroup<ListMemberReturnFormProperties>({
		});

	}

	export interface ListMemberReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListMemberReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListMemberReturnMetaFormGroup() {
		return new FormGroup<ListMemberReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMessageReturn {
		messages?: Array<Chatv1servicechannelmessage>;
		meta?: ListMessageReturnMeta;
	}
	export interface ListMessageReturnFormProperties {
	}
	export function CreateListMessageReturnFormGroup() {
		return new FormGroup<ListMessageReturnFormProperties>({
		});

	}

	export interface ListMessageReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListMessageReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListMessageReturnMetaFormGroup() {
		return new FormGroup<ListMessageReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRoleReturn {
		meta?: ListRoleReturnMeta;
		roles?: Array<Chatv1servicerole>;
	}
	export interface ListRoleReturnFormProperties {
	}
	export function CreateListRoleReturnFormGroup() {
		return new FormGroup<ListRoleReturnFormProperties>({
		});

	}

	export interface ListRoleReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListRoleReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListRoleReturnMetaFormGroup() {
		return new FormGroup<ListRoleReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListUserReturn {
		meta?: ListUserReturnMeta;
		users?: Array<Chatv1serviceuser>;
	}
	export interface ListUserReturnFormProperties {
	}
	export function CreateListUserReturnFormGroup() {
		return new FormGroup<ListUserReturnFormProperties>({
		});

	}

	export interface ListUserReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListUserReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListUserReturnMetaFormGroup() {
		return new FormGroup<ListUserReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListUserChannelReturn {
		channels?: Array<Chatv1serviceuseruser_channel>;
		meta?: ListUserChannelReturnMeta;
	}
	export interface ListUserChannelReturnFormProperties {
	}
	export function CreateListUserChannelReturnFormGroup() {
		return new FormGroup<ListUserChannelReturnFormProperties>({
		});

	}

	export interface ListUserChannelReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListUserChannelReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListUserChannelReturnMetaFormGroup() {
		return new FormGroup<ListUserChannelReturnMetaFormProperties>({
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

