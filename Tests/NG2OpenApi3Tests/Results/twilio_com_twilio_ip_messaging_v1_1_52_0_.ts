import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export enum Channel_enum_channel_type { public = 'public', private = 'private' }

	export enum Credential_enum_push_service { gcm = 'gcm', apn = 'apn', fcm = 'fcm' }

	export interface Ip_messagingv1credential {

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;
		date_created?: Date | null;
		date_updated?: Date | null;
		friendly_name?: string | null;
		sandbox?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		type?: Credential_enum_push_service | null;
		url?: string | null;
	}
	export interface Ip_messagingv1credentialFormProperties {

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,
		date_created: FormControl<Date | null | undefined>,
		date_updated: FormControl<Date | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		sandbox: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		type: FormControl<Credential_enum_push_service | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateIp_messagingv1credentialFormGroup() {
		return new FormGroup<Ip_messagingv1credentialFormProperties>({
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

	export interface Ip_messagingv1service {

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;
		consumption_report_interval?: number | null;
		date_created?: Date | null;
		date_updated?: Date | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		default_channel_creator_role_sid?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		default_channel_role_sid?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		default_service_role_sid?: string | null;
		friendly_name?: string | null;
		limits?: any;
		links?: string | null;
		notifications?: any;
		post_webhook_url?: string | null;
		pre_webhook_url?: string | null;
		reachability_enabled?: boolean | null;
		read_status_enabled?: boolean | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		typing_indicator_timeout?: number | null;
		url?: string | null;
		webhook_filters?: Array<string>;
		webhook_method?: string | null;
		webhooks?: any;
	}
	export interface Ip_messagingv1serviceFormProperties {

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,
		consumption_report_interval: FormControl<number | null | undefined>,
		date_created: FormControl<Date | null | undefined>,
		date_updated: FormControl<Date | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		default_channel_creator_role_sid: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		default_channel_role_sid: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		default_service_role_sid: FormControl<string | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		limits: FormControl<any | null | undefined>,
		links: FormControl<string | null | undefined>,
		notifications: FormControl<any | null | undefined>,
		post_webhook_url: FormControl<string | null | undefined>,
		pre_webhook_url: FormControl<string | null | undefined>,
		reachability_enabled: FormControl<boolean | null | undefined>,
		read_status_enabled: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		typing_indicator_timeout: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
		webhook_method: FormControl<string | null | undefined>,
		webhooks: FormControl<any | null | undefined>,
	}
	export function CreateIp_messagingv1serviceFormGroup() {
		return new FormGroup<Ip_messagingv1serviceFormProperties>({
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

	export interface Ip_messagingv1servicechannel {

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;
		attributes?: string | null;
		created_by?: string | null;
		date_created?: Date | null;
		date_updated?: Date | null;
		friendly_name?: string | null;
		links?: string | null;
		members_count?: number | null;
		messages_count?: number | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		type?: Channel_enum_channel_type | null;
		unique_name?: string | null;
		url?: string | null;
	}
	export interface Ip_messagingv1servicechannelFormProperties {

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,
		attributes: FormControl<string | null | undefined>,
		created_by: FormControl<string | null | undefined>,
		date_created: FormControl<Date | null | undefined>,
		date_updated: FormControl<Date | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		links: FormControl<string | null | undefined>,
		members_count: FormControl<number | null | undefined>,
		messages_count: FormControl<number | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		type: FormControl<Channel_enum_channel_type | null | undefined>,
		unique_name: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateIp_messagingv1servicechannelFormGroup() {
		return new FormGroup<Ip_messagingv1servicechannelFormProperties>({
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

	export interface Ip_messagingv1servicechannelinvite {

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		channel_sid?: string | null;
		created_by?: string | null;
		date_created?: Date | null;
		date_updated?: Date | null;
		identity?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		role_sid?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		url?: string | null;
	}
	export interface Ip_messagingv1servicechannelinviteFormProperties {

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		channel_sid: FormControl<string | null | undefined>,
		created_by: FormControl<string | null | undefined>,
		date_created: FormControl<Date | null | undefined>,
		date_updated: FormControl<Date | null | undefined>,
		identity: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		role_sid: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateIp_messagingv1servicechannelinviteFormGroup() {
		return new FormGroup<Ip_messagingv1servicechannelinviteFormProperties>({
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

	export interface Ip_messagingv1servicechannelmember {

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		channel_sid?: string | null;
		date_created?: Date | null;
		date_updated?: Date | null;
		identity?: string | null;
		last_consumed_message_index?: number | null;
		last_consumption_timestamp?: Date | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		role_sid?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		url?: string | null;
	}
	export interface Ip_messagingv1servicechannelmemberFormProperties {

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		channel_sid: FormControl<string | null | undefined>,
		date_created: FormControl<Date | null | undefined>,
		date_updated: FormControl<Date | null | undefined>,
		identity: FormControl<string | null | undefined>,
		last_consumed_message_index: FormControl<number | null | undefined>,
		last_consumption_timestamp: FormControl<Date | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		role_sid: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateIp_messagingv1servicechannelmemberFormGroup() {
		return new FormGroup<Ip_messagingv1servicechannelmemberFormProperties>({
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

	export interface Ip_messagingv1servicechannelmessage {

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;
		attributes?: string | null;
		body?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		channel_sid?: string | null;
		date_created?: Date | null;
		date_updated?: Date | null;
		from?: string | null;
		index?: number | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		to?: string | null;
		url?: string | null;
		was_edited?: boolean | null;
	}
	export interface Ip_messagingv1servicechannelmessageFormProperties {

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,
		attributes: FormControl<string | null | undefined>,
		body: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		channel_sid: FormControl<string | null | undefined>,
		date_created: FormControl<Date | null | undefined>,
		date_updated: FormControl<Date | null | undefined>,
		from: FormControl<string | null | undefined>,
		index: FormControl<number | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		to: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
		was_edited: FormControl<boolean | null | undefined>,
	}
	export function CreateIp_messagingv1servicechannelmessageFormGroup() {
		return new FormGroup<Ip_messagingv1servicechannelmessageFormProperties>({
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

	export interface Ip_messagingv1servicerole {

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;
		date_created?: Date | null;
		date_updated?: Date | null;
		friendly_name?: string | null;
		permissions?: Array<string>;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		type?: Ip_messagingv1serviceroleType | null;
		url?: string | null;
	}
	export interface Ip_messagingv1serviceroleFormProperties {

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,
		date_created: FormControl<Date | null | undefined>,
		date_updated: FormControl<Date | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		type: FormControl<Ip_messagingv1serviceroleType | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateIp_messagingv1serviceroleFormGroup() {
		return new FormGroup<Ip_messagingv1serviceroleFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^RL[0-9a-fA-F]{32}$')]),
			type: new FormControl<Ip_messagingv1serviceroleType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Ip_messagingv1serviceroleType { channel = 'channel', deployment = 'deployment' }

	export interface Ip_messagingv1serviceuser {

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;
		attributes?: string | null;
		date_created?: Date | null;
		date_updated?: Date | null;
		friendly_name?: string | null;
		identity?: string | null;
		is_notifiable?: boolean | null;
		is_online?: boolean | null;
		joined_channels_count?: number | null;
		links?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		role_sid?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		url?: string | null;
	}
	export interface Ip_messagingv1serviceuserFormProperties {

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,
		attributes: FormControl<string | null | undefined>,
		date_created: FormControl<Date | null | undefined>,
		date_updated: FormControl<Date | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
		identity: FormControl<string | null | undefined>,
		is_notifiable: FormControl<boolean | null | undefined>,
		is_online: FormControl<boolean | null | undefined>,
		joined_channels_count: FormControl<number | null | undefined>,
		links: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		role_sid: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateIp_messagingv1serviceuserFormGroup() {
		return new FormGroup<Ip_messagingv1serviceuserFormProperties>({
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

	export interface Ip_messagingv1serviceuseruser_channel {

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		channel_sid?: string | null;
		last_consumed_message_index?: number | null;
		links?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		member_sid?: string | null;

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;
		status?: Ip_messagingv1serviceuseruser_channelStatus | null;
		unread_messages_count?: number | null;
	}
	export interface Ip_messagingv1serviceuseruser_channelFormProperties {

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		channel_sid: FormControl<string | null | undefined>,
		last_consumed_message_index: FormControl<number | null | undefined>,
		links: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		member_sid: FormControl<string | null | undefined>,

		/**
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,
		status: FormControl<Ip_messagingv1serviceuseruser_channelStatus | null | undefined>,
		unread_messages_count: FormControl<number | null | undefined>,
	}
	export function CreateIp_messagingv1serviceuseruser_channelFormGroup() {
		return new FormGroup<Ip_messagingv1serviceuseruser_channelFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			channel_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CH[0-9a-fA-F]{32}$')]),
			last_consumed_message_index: new FormControl<number | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			member_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^MB[0-9a-fA-F]{32}$')]),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			status: new FormControl<Ip_messagingv1serviceuseruser_channelStatus | null | undefined>(undefined),
			unread_messages_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Ip_messagingv1serviceuseruser_channelStatus { joined = 'joined', invited = 'invited', not_participating = 'not_participating' }

	export enum Message_enum_order_type { asc = 'asc', desc = 'desc' }

	export enum Role_enum_role_type { channel = 'channel', deployment = 'deployment' }

	export enum User_channel_enum_channel_status { joined = 'joined', invited = 'invited', not_participating = 'not_participating' }

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
		 * @return {void} 
		 */
		DeleteCredential(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Credentials/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Credentials/{Sid}
		 * @return {Ip_messagingv1credential} OK
		 */
		FetchCredential(Sid: string): Observable<Ip_messagingv1credential> {
			return this.http.get<Ip_messagingv1credential>(this.baseUri + 'v1/Credentials/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
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
		 * @return {void} 
		 */
		DeleteInvite(ServiceSid: string, ChannelSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Channels/' + (ChannelSid == null ? '' : encodeURIComponent(ChannelSid)) + '/Invites/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Services/{ServiceSid}/Channels/{ChannelSid}/Invites/{Sid}
		 * @return {Ip_messagingv1servicechannelinvite} OK
		 */
		FetchInvite(ServiceSid: string, ChannelSid: string, Sid: string): Observable<Ip_messagingv1servicechannelinvite> {
			return this.http.get<Ip_messagingv1servicechannelinvite>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Channels/' + (ChannelSid == null ? '' : encodeURIComponent(ChannelSid)) + '/Invites/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Services/{ServiceSid}/Channels/{ChannelSid}/Members
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
		 * @return {void} 
		 */
		DeleteMember(ServiceSid: string, ChannelSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Channels/' + (ChannelSid == null ? '' : encodeURIComponent(ChannelSid)) + '/Members/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Services/{ServiceSid}/Channels/{ChannelSid}/Members/{Sid}
		 * @return {Ip_messagingv1servicechannelmember} OK
		 */
		FetchMember(ServiceSid: string, ChannelSid: string, Sid: string): Observable<Ip_messagingv1servicechannelmember> {
			return this.http.get<Ip_messagingv1servicechannelmember>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Channels/' + (ChannelSid == null ? '' : encodeURIComponent(ChannelSid)) + '/Members/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Services/{ServiceSid}/Channels/{ChannelSid}/Messages
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
		 * @return {void} 
		 */
		DeleteMessage(ServiceSid: string, ChannelSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Channels/' + (ChannelSid == null ? '' : encodeURIComponent(ChannelSid)) + '/Messages/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Services/{ServiceSid}/Channels/{ChannelSid}/Messages/{Sid}
		 * @return {Ip_messagingv1servicechannelmessage} OK
		 */
		FetchMessage(ServiceSid: string, ChannelSid: string, Sid: string): Observable<Ip_messagingv1servicechannelmessage> {
			return this.http.get<Ip_messagingv1servicechannelmessage>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Channels/' + (ChannelSid == null ? '' : encodeURIComponent(ChannelSid)) + '/Messages/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Delete v1/Services/{ServiceSid}/Channels/{Sid}
		 * @return {void} 
		 */
		DeleteChannel(ServiceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Channels/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Services/{ServiceSid}/Channels/{Sid}
		 * @return {Ip_messagingv1servicechannel} OK
		 */
		FetchChannel(ServiceSid: string, Sid: string): Observable<Ip_messagingv1servicechannel> {
			return this.http.get<Ip_messagingv1servicechannel>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Channels/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Services/{ServiceSid}/Roles
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
		 * @return {void} 
		 */
		DeleteRole(ServiceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Roles/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Services/{ServiceSid}/Roles/{Sid}
		 * @return {Ip_messagingv1servicerole} OK
		 */
		FetchRole(ServiceSid: string, Sid: string): Observable<Ip_messagingv1servicerole> {
			return this.http.get<Ip_messagingv1servicerole>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Roles/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Services/{ServiceSid}/Users
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
		 * @return {void} 
		 */
		DeleteUser(ServiceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Users/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Services/{ServiceSid}/Users/{Sid}
		 * @return {Ip_messagingv1serviceuser} OK
		 */
		FetchUser(ServiceSid: string, Sid: string): Observable<Ip_messagingv1serviceuser> {
			return this.http.get<Ip_messagingv1serviceuser>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Users/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Services/{ServiceSid}/Users/{UserSid}/Channels
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
		 * @return {void} 
		 */
		DeleteService(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Services/{Sid}
		 * @return {Ip_messagingv1service} OK
		 */
		FetchService(Sid: string): Observable<Ip_messagingv1service> {
			return this.http.get<Ip_messagingv1service>(this.baseUri + 'v1/Services/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}
	}

	export interface ListCredentialReturn {
		credentials?: Array<Ip_messagingv1credential>;
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
		services?: Array<Ip_messagingv1service>;
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
		channels?: Array<Ip_messagingv1servicechannel>;
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
		invites?: Array<Ip_messagingv1servicechannelinvite>;
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
		members?: Array<Ip_messagingv1servicechannelmember>;
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
		messages?: Array<Ip_messagingv1servicechannelmessage>;
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
		roles?: Array<Ip_messagingv1servicerole>;
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
		users?: Array<Ip_messagingv1serviceuser>;
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
		channels?: Array<Ip_messagingv1serviceuseruser_channel>;
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

