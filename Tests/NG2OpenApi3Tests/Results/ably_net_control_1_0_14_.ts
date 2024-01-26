import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Amqp_external_rule_patch {

		/** Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>. */
		requestMode?: Amqp_external_rule_patchRequestMode | null;

		/** The type of rule. In this case AMQP external (using Firehose). See the <a href="https://ably.com/documentation/general/firehose">Ably documentation</a> for further information. */
		ruleType?: Amqp_external_rule_patchRuleType | null;
		source?: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;
		target?: Amqp_external_rule_patchTarget;
	}
	export interface Amqp_external_rule_patchFormProperties {

		/** Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>. */
		requestMode: FormControl<Amqp_external_rule_patchRequestMode | null | undefined>,

		/** The type of rule. In this case AMQP external (using Firehose). See the <a href="https://ably.com/documentation/general/firehose">Ably documentation</a> for further information. */
		ruleType: FormControl<Amqp_external_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,
	}
	export function CreateAmqp_external_rule_patchFormGroup() {
		return new FormGroup<Amqp_external_rule_patchFormProperties>({
			requestMode: new FormControl<Amqp_external_rule_patchRequestMode | null | undefined>(undefined),
			ruleType: new FormControl<Amqp_external_rule_patchRuleType | null | undefined>(undefined),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
		});

	}

	export enum Amqp_external_rule_patchRequestMode { single = 0 }

	export enum Amqp_external_rule_patchRuleType { 'amqp/external' = 0 }

	export interface Rule_source {

		/**
		 * This field allows you to filter your rule based on a regular expression that is matched against the complete channel name. Leave this empty if you want the rule to apply to all channels.
		 * Required
		 */
		channelFilter: string;

		/**
		 * The type `channel.message` delivers all messages published on a channel. The type `channel.presence` delivers all enter, update and leave events for members present on a channel. The type `channel.lifecycle` events for this rule type are currently not supported. Get in touch (https://ably.com/contact) if you need this feature. The type `channel.occupancy` delivers all occupancy events for the channel.
		 * Required
		 */
		type: Rule_sourceType;
	}
	export interface Rule_sourceFormProperties {

		/**
		 * This field allows you to filter your rule based on a regular expression that is matched against the complete channel name. Leave this empty if you want the rule to apply to all channels.
		 * Required
		 */
		channelFilter: FormControl<string | null | undefined>,

		/**
		 * The type `channel.message` delivers all messages published on a channel. The type `channel.presence` delivers all enter, update and leave events for members present on a channel. The type `channel.lifecycle` events for this rule type are currently not supported. Get in touch (https://ably.com/contact) if you need this feature. The type `channel.occupancy` delivers all occupancy events for the channel.
		 * Required
		 */
		type: FormControl<Rule_sourceType | null | undefined>,
	}
	export function CreateRule_sourceFormGroup() {
		return new FormGroup<Rule_sourceFormProperties>({
			channelFilter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Rule_sourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Rule_sourceType { 'channel.message' = 0, 'channel.presence' = 1, 'channel.lifecycle' = 2, 'channel.occupancy' = 3 }

	export enum Amqp_external_rule_patchStatus { enabled = 0, disabled = 1 }

	export interface Amqp_external_rule_patchTarget {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;
		format?: string | null;

		/** If you have additional information to send, you'll need to include the relevant headers. */
		Amqp_external_rule_patchTargetHeaders?: Array<Amqp_external_rule_patchTargetHeaders>;

		/** Reject delivery of the message if the route does not exist, otherwise fail silently. */
		mandatoryRoute?: boolean | null;

		/** You can optionally override the default TTL on a queue and specify a TTL in minutes for messages to be persisted. It is unusual to change the default TTL, so if this field is left empty, the default TTL for the queue will be used. */
		messageTtl?: number | null;

		/** Marks the message as persistent, instructing the broker to write it to disk if it is in a durable queue. */
		persistentMessages?: boolean | null;

		/** The AMQP routing key. See this <a href="https://knowledge.ably.com/what-is-the-format-of-the-routingkey-for-an-amqp-or-kinesis-reactor-rule">Ably knowledge base article</a> for details. */
		routingKey?: string | null;
		url?: string | null;
	}
	export interface Amqp_external_rule_patchTargetFormProperties {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,

		/** Reject delivery of the message if the route does not exist, otherwise fail silently. */
		mandatoryRoute: FormControl<boolean | null | undefined>,

		/** You can optionally override the default TTL on a queue and specify a TTL in minutes for messages to be persisted. It is unusual to change the default TTL, so if this field is left empty, the default TTL for the queue will be used. */
		messageTtl: FormControl<number | null | undefined>,

		/** Marks the message as persistent, instructing the broker to write it to disk if it is in a durable queue. */
		persistentMessages: FormControl<boolean | null | undefined>,

		/** The AMQP routing key. See this <a href="https://knowledge.ably.com/what-is-the-format-of-the-routingkey-for-an-amqp-or-kinesis-reactor-rule">Ably knowledge base article</a> for details. */
		routingKey: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_external_rule_patchTargetFormGroup() {
		return new FormGroup<Amqp_external_rule_patchTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			mandatoryRoute: new FormControl<boolean | null | undefined>(undefined),
			messageTtl: new FormControl<number | null | undefined>(undefined),
			persistentMessages: new FormControl<boolean | null | undefined>(undefined),
			routingKey: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Amqp_external_rule_patchTargetHeaders {

		/** The name of the header. */
		name?: string | null;

		/** The value of the header. */
		value?: string | null;
	}
	export interface Amqp_external_rule_patchTargetHeadersFormProperties {

		/** The name of the header. */
		name: FormControl<string | null | undefined>,

		/** The value of the header. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_external_rule_patchTargetHeadersFormGroup() {
		return new FormGroup<Amqp_external_rule_patchTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Amqp_external_rule_post {

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: Amqp_external_rule_patchRequestMode;

		/**
		 * The type of rule. In this case AMQP external (using Firehose). See the <a href="https://ably.com/documentation/general/firehose">documentation</a> for further information.
		 * Required
		 */
		ruleType: Amqp_external_rule_patchRuleType;

		/** Required */
		source: Rule_source;

		/** Required */
		target: Amqp_external_rule_postTarget;
	}
	export interface Amqp_external_rule_postFormProperties {

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Amqp_external_rule_patchRequestMode | null | undefined>,

		/**
		 * The type of rule. In this case AMQP external (using Firehose). See the <a href="https://ably.com/documentation/general/firehose">documentation</a> for further information.
		 * Required
		 */
		ruleType: FormControl<Amqp_external_rule_patchRuleType | null | undefined>,
	}
	export function CreateAmqp_external_rule_postFormGroup() {
		return new FormGroup<Amqp_external_rule_postFormProperties>({
			requestMode: new FormControl<Amqp_external_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Amqp_external_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Amqp_external_rule_postTarget {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;
		format?: string | null;

		/** If you have additional information to send, you'll need to include the relevant headers. */
		Amqp_external_rule_postTargetHeaders?: Array<Amqp_external_rule_postTargetHeaders>;

		/**
		 * Reject delivery of the message if the route does not exist, otherwise fail silently.
		 * Required
		 */
		mandatoryRoute: boolean;

		/** You can optionally override the default TTL on a queue and specify a TTL in minutes for messages to be persisted. It is unusual to change the default TTL, so if this field is left empty, the default TTL for the queue will be used. */
		messageTtl?: number | null;

		/**
		 * Marks the message as persistent, instructing the broker to write it to disk if it is in a durable queue.
		 * Required
		 */
		persistentMessages: boolean;

		/**
		 * The AMQP routing key. See this <a href="https://knowledge.ably.com/what-is-the-format-of-the-routingkey-for-an-amqp-or-kinesis-reactor-rule">Ably knowledge base article</a> for details.
		 * Required
		 */
		routingKey: string;

		/** Required */
		url: string;
	}
	export interface Amqp_external_rule_postTargetFormProperties {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,

		/**
		 * Reject delivery of the message if the route does not exist, otherwise fail silently.
		 * Required
		 */
		mandatoryRoute: FormControl<boolean | null | undefined>,

		/** You can optionally override the default TTL on a queue and specify a TTL in minutes for messages to be persisted. It is unusual to change the default TTL, so if this field is left empty, the default TTL for the queue will be used. */
		messageTtl: FormControl<number | null | undefined>,

		/**
		 * Marks the message as persistent, instructing the broker to write it to disk if it is in a durable queue.
		 * Required
		 */
		persistentMessages: FormControl<boolean | null | undefined>,

		/**
		 * The AMQP routing key. See this <a href="https://knowledge.ably.com/what-is-the-format-of-the-routingkey-for-an-amqp-or-kinesis-reactor-rule">Ably knowledge base article</a> for details.
		 * Required
		 */
		routingKey: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_external_rule_postTargetFormGroup() {
		return new FormGroup<Amqp_external_rule_postTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			mandatoryRoute: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			messageTtl: new FormControl<number | null | undefined>(undefined),
			persistentMessages: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			routingKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Amqp_external_rule_postTargetHeaders {

		/** The name of the header. */
		name?: string | null;

		/** The value of the header. */
		value?: string | null;
	}
	export interface Amqp_external_rule_postTargetHeadersFormProperties {

		/** The name of the header. */
		name: FormControl<string | null | undefined>,

		/** The value of the header. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_external_rule_postTargetHeadersFormGroup() {
		return new FormGroup<Amqp_external_rule_postTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Amqp_external_rule_response {
		_links?: string | null;

		/** The Ably application ID. */
		appId?: string | null;

		/** Unix timestamp representing the date and time of creation of the rule. */
		created?: number | null;

		/** The rule ID. */
		id?: string | null;

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified?: number | null;

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: Amqp_external_rule_patchRequestMode;

		/**
		 * The type of rule. In this case AMQP external (using Firehose). See the <a href="https://ably.com/documentation/general/firehose">Ably documentation</a> for further information.
		 * Required
		 */
		ruleType: Amqp_external_rule_patchRuleType;

		/** Required */
		source: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Required */
		target: Amqp_external_rule_responseTarget;

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version?: string | null;
	}
	export interface Amqp_external_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,

		/** The Ably application ID. */
		appId: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of creation of the rule. */
		created: FormControl<number | null | undefined>,

		/** The rule ID. */
		id: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified: FormControl<number | null | undefined>,

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Amqp_external_rule_patchRequestMode | null | undefined>,

		/**
		 * The type of rule. In this case AMQP external (using Firehose). See the <a href="https://ably.com/documentation/general/firehose">Ably documentation</a> for further information.
		 * Required
		 */
		ruleType: FormControl<Amqp_external_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_external_rule_responseFormGroup() {
		return new FormGroup<Amqp_external_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<Amqp_external_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Amqp_external_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Amqp_external_rule_responseTarget {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;
		format?: string | null;

		/** If you have additional information to send, you'll need to include the relevant headers. */
		Amqp_external_rule_responseTargetHeaders?: Array<Amqp_external_rule_responseTargetHeaders>;

		/**
		 * Reject delivery of the message if the route does not exist, otherwise fail silently.
		 * Required
		 */
		mandatoryRoute: boolean;

		/** You can optionally override the default TTL on a queue and specify a TTL in minutes for messages to be persisted. It is unusual to change the default TTL, so if this field is left empty, the default TTL for the queue will be used. */
		messageTtl?: number | null;

		/**
		 * Marks the message as persistent, instructing the broker to write it to disk if it is in a durable queue.
		 * Required
		 */
		persistentMessages: boolean;

		/**
		 * The AMQP routing key. See this <a href="https://knowledge.ably.com/what-is-the-format-of-the-routingkey-for-an-amqp-or-kinesis-reactor-rule">Ably knowledge base article</a> for details.
		 * Required
		 */
		routingKey: string;

		/** Required */
		url: string;
	}
	export interface Amqp_external_rule_responseTargetFormProperties {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,

		/**
		 * Reject delivery of the message if the route does not exist, otherwise fail silently.
		 * Required
		 */
		mandatoryRoute: FormControl<boolean | null | undefined>,

		/** You can optionally override the default TTL on a queue and specify a TTL in minutes for messages to be persisted. It is unusual to change the default TTL, so if this field is left empty, the default TTL for the queue will be used. */
		messageTtl: FormControl<number | null | undefined>,

		/**
		 * Marks the message as persistent, instructing the broker to write it to disk if it is in a durable queue.
		 * Required
		 */
		persistentMessages: FormControl<boolean | null | undefined>,

		/**
		 * The AMQP routing key. See this <a href="https://knowledge.ably.com/what-is-the-format-of-the-routingkey-for-an-amqp-or-kinesis-reactor-rule">Ably knowledge base article</a> for details.
		 * Required
		 */
		routingKey: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_external_rule_responseTargetFormGroup() {
		return new FormGroup<Amqp_external_rule_responseTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			mandatoryRoute: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			messageTtl: new FormControl<number | null | undefined>(undefined),
			persistentMessages: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			routingKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Amqp_external_rule_responseTargetHeaders {

		/** The name of the header. */
		name?: string | null;

		/** The value of the header. */
		value?: string | null;
	}
	export interface Amqp_external_rule_responseTargetHeadersFormProperties {

		/** The name of the header. */
		name: FormControl<string | null | undefined>,

		/** The value of the header. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_external_rule_responseTargetHeadersFormGroup() {
		return new FormGroup<Amqp_external_rule_responseTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Amqp_rule_patch {

		/** Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>. */
		requestMode?: Amqp_external_rule_patchRequestMode | null;

		/** The type of rule. In this case AMQP. See the <a href="https://ably.com/integrations">documentation</a> for further information. */
		ruleType?: Amqp_rule_patchRuleType | null;
		source?: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;
		target?: Amqp_rule_patchTarget;
	}
	export interface Amqp_rule_patchFormProperties {

		/** Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>. */
		requestMode: FormControl<Amqp_external_rule_patchRequestMode | null | undefined>,

		/** The type of rule. In this case AMQP. See the <a href="https://ably.com/integrations">documentation</a> for further information. */
		ruleType: FormControl<Amqp_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,
	}
	export function CreateAmqp_rule_patchFormGroup() {
		return new FormGroup<Amqp_rule_patchFormProperties>({
			requestMode: new FormControl<Amqp_external_rule_patchRequestMode | null | undefined>(undefined),
			ruleType: new FormControl<Amqp_rule_patchRuleType | null | undefined>(undefined),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
		});

	}

	export enum Amqp_rule_patchRuleType { amqp = 0 }

	export interface Amqp_rule_patchTarget {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;
		format?: string | null;

		/** If you have additional information to send, you'll need to include the relevant headers. */
		Amqp_rule_patchTargetHeaders?: Array<Amqp_rule_patchTargetHeaders>;
		queueId?: string | null;
	}
	export interface Amqp_rule_patchTargetFormProperties {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,
		queueId: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_rule_patchTargetFormGroup() {
		return new FormGroup<Amqp_rule_patchTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			queueId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Amqp_rule_patchTargetHeaders {

		/** The name of the header. */
		name?: string | null;

		/** The value of the header. */
		value?: string | null;
	}
	export interface Amqp_rule_patchTargetHeadersFormProperties {

		/** The name of the header. */
		name: FormControl<string | null | undefined>,

		/** The value of the header. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_rule_patchTargetHeadersFormGroup() {
		return new FormGroup<Amqp_rule_patchTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Amqp_rule_post {

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: Amqp_external_rule_patchRequestMode;

		/**
		 * The type of rule. In this case AMQP. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: Amqp_rule_patchRuleType;

		/** Required */
		source: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Required */
		target: Amqp_rule_postTarget;
	}
	export interface Amqp_rule_postFormProperties {

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Amqp_external_rule_patchRequestMode | null | undefined>,

		/**
		 * The type of rule. In this case AMQP. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: FormControl<Amqp_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,
	}
	export function CreateAmqp_rule_postFormGroup() {
		return new FormGroup<Amqp_rule_postFormProperties>({
			requestMode: new FormControl<Amqp_external_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Amqp_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
		});

	}

	export interface Amqp_rule_postTarget {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;
		format?: string | null;

		/** If you have additional information to send, you'll need to include the relevant headers. */
		Amqp_rule_postTargetHeaders?: Array<Amqp_rule_postTargetHeaders>;

		/** Required */
		queueId: string;
	}
	export interface Amqp_rule_postTargetFormProperties {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,

		/** Required */
		queueId: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_rule_postTargetFormGroup() {
		return new FormGroup<Amqp_rule_postTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			queueId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Amqp_rule_postTargetHeaders {

		/** The name of the header. */
		name?: string | null;

		/** The value of the header. */
		value?: string | null;
	}
	export interface Amqp_rule_postTargetHeadersFormProperties {

		/** The name of the header. */
		name: FormControl<string | null | undefined>,

		/** The value of the header. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_rule_postTargetHeadersFormGroup() {
		return new FormGroup<Amqp_rule_postTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Amqp_rule_response {
		_links?: string | null;

		/** The Ably application ID. */
		appId?: string | null;

		/** Unix timestamp representing the date and time of creation of the rule. */
		created?: number | null;

		/** The rule ID. */
		id?: string | null;

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified?: number | null;

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: Amqp_external_rule_patchRequestMode;

		/**
		 * The type of rule. In this case AMQP. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: Amqp_rule_patchRuleType;

		/** Required */
		source: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Required */
		target: Amqp_rule_responseTarget;

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version?: string | null;
	}
	export interface Amqp_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,

		/** The Ably application ID. */
		appId: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of creation of the rule. */
		created: FormControl<number | null | undefined>,

		/** The rule ID. */
		id: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified: FormControl<number | null | undefined>,

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Amqp_external_rule_patchRequestMode | null | undefined>,

		/**
		 * The type of rule. In this case AMQP. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: FormControl<Amqp_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_rule_responseFormGroup() {
		return new FormGroup<Amqp_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<Amqp_external_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Amqp_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Amqp_rule_responseTarget {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;
		format?: string | null;

		/** If you have additional information to send, you'll need to include the relevant headers. */
		Amqp_rule_responseTargetHeaders?: Array<Amqp_rule_responseTargetHeaders>;

		/** Required */
		queueId: string;
	}
	export interface Amqp_rule_responseTargetFormProperties {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,

		/** Required */
		queueId: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_rule_responseTargetFormGroup() {
		return new FormGroup<Amqp_rule_responseTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			queueId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Amqp_rule_responseTargetHeaders {

		/** The name of the header. */
		name?: string | null;

		/** The value of the header. */
		value?: string | null;
	}
	export interface Amqp_rule_responseTargetHeadersFormProperties {

		/** The name of the header. */
		name: FormControl<string | null | undefined>,

		/** The value of the header. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_rule_responseTargetHeadersFormGroup() {
		return new FormGroup<Amqp_rule_responseTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface App_patch {

		/** The Apple Push Notification service certificate. */
		apnsCertificate?: string | null;

		/** The Apple Push Notification service private key. */
		apnsPrivateKey?: string | null;

		/** The Apple Push Notification service sandbox endpoint. */
		apnsUseSandboxEndpoint?: boolean | null;

		/** The Firebase Cloud Messaging key. */
		fcmKey?: string | null;

		/** The name of the application for your reference only. */
		name?: string | null;

		/** The status of the application. Can be `enabled` or `disabled`. Enabled means available to accept inbound connections and all services are available. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Enforce TLS for all connections. */
		tlsOnly?: boolean | null;
	}
	export interface App_patchFormProperties {

		/** The Apple Push Notification service certificate. */
		apnsCertificate: FormControl<string | null | undefined>,

		/** The Apple Push Notification service private key. */
		apnsPrivateKey: FormControl<string | null | undefined>,

		/** The Apple Push Notification service sandbox endpoint. */
		apnsUseSandboxEndpoint: FormControl<boolean | null | undefined>,

		/** The Firebase Cloud Messaging key. */
		fcmKey: FormControl<string | null | undefined>,

		/** The name of the application for your reference only. */
		name: FormControl<string | null | undefined>,

		/** The status of the application. Can be `enabled` or `disabled`. Enabled means available to accept inbound connections and all services are available. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,

		/** Enforce TLS for all connections. */
		tlsOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateApp_patchFormGroup() {
		return new FormGroup<App_patchFormProperties>({
			apnsCertificate: new FormControl<string | null | undefined>(undefined),
			apnsPrivateKey: new FormControl<string | null | undefined>(undefined),
			apnsUseSandboxEndpoint: new FormControl<boolean | null | undefined>(undefined),
			fcmKey: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
			tlsOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface App_pkcs12 {

		/**
		 * The `.p12` file containing the app's APNs information.
		 * Required
		 */
		p12File: string;

		/**
		 * The password for the corresponding `.p12` file.
		 * Required
		 */
		p12Pass: string;
	}
	export interface App_pkcs12FormProperties {

		/**
		 * The `.p12` file containing the app's APNs information.
		 * Required
		 */
		p12File: FormControl<string | null | undefined>,

		/**
		 * The password for the corresponding `.p12` file.
		 * Required
		 */
		p12Pass: FormControl<string | null | undefined>,
	}
	export function CreateApp_pkcs12FormGroup() {
		return new FormGroup<App_pkcs12FormProperties>({
			p12File: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			p12Pass: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App_post {

		/** The Apple Push Notification service certificate. */
		apnsCertificate?: string | null;

		/** The Apple Push Notification service private key. */
		apnsPrivateKey?: string | null;

		/** The Apple Push Notification service sandbox endpoint. */
		apnsUseSandboxEndpoint?: boolean | null;

		/** The Firebase Cloud Messaging key. */
		fcmKey?: string | null;

		/**
		 * The name of the application for your reference only.
		 * Required
		 */
		name: string;

		/** The status of the application. Can be `enabled` or `disabled`. Enabled means available to accept inbound connections and all services are available. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Enforce TLS for all connections. */
		tlsOnly?: boolean | null;
	}
	export interface App_postFormProperties {

		/** The Apple Push Notification service certificate. */
		apnsCertificate: FormControl<string | null | undefined>,

		/** The Apple Push Notification service private key. */
		apnsPrivateKey: FormControl<string | null | undefined>,

		/** The Apple Push Notification service sandbox endpoint. */
		apnsUseSandboxEndpoint: FormControl<boolean | null | undefined>,

		/** The Firebase Cloud Messaging key. */
		fcmKey: FormControl<string | null | undefined>,

		/**
		 * The name of the application for your reference only.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The status of the application. Can be `enabled` or `disabled`. Enabled means available to accept inbound connections and all services are available. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,

		/** Enforce TLS for all connections. */
		tlsOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateApp_postFormGroup() {
		return new FormGroup<App_postFormProperties>({
			apnsCertificate: new FormControl<string | null | undefined>(undefined),
			apnsPrivateKey: new FormControl<string | null | undefined>(undefined),
			apnsUseSandboxEndpoint: new FormControl<boolean | null | undefined>(undefined),
			fcmKey: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
			tlsOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface App_response {

		/** A link self-referencing the app that has been created. */
		_links?: string | null;

		/** The ID of your Ably account. */
		accountId?: string | null;

		/** Apple Push Notification service endpoint. */
		apnsUseSandboxEndpoint?: boolean | null;

		/** The application ID. */
		id?: string | null;

		/** The application name. */
		name?: string | null;

		/** The application status. Disabled applications will not accept new connections and will return an error to all clients. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Enforce TLS for all connections. This setting overrides any channel setting. */
		tlsOnly?: boolean | null;
	}
	export interface App_responseFormProperties {

		/** A link self-referencing the app that has been created. */
		_links: FormControl<string | null | undefined>,

		/** The ID of your Ably account. */
		accountId: FormControl<string | null | undefined>,

		/** Apple Push Notification service endpoint. */
		apnsUseSandboxEndpoint: FormControl<boolean | null | undefined>,

		/** The application ID. */
		id: FormControl<string | null | undefined>,

		/** The application name. */
		name: FormControl<string | null | undefined>,

		/** The application status. Disabled applications will not accept new connections and will return an error to all clients. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,

		/** Enforce TLS for all connections. This setting overrides any channel setting. */
		tlsOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateApp_responseFormGroup() {
		return new FormGroup<App_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			accountId: new FormControl<string | null | undefined>(undefined),
			apnsUseSandboxEndpoint: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
			tlsOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Aws_access_keys {

		/**
		 * The AWS key ID for the AWS IAM user. See this <a href="https://knowledge.ably.com/authentication-for-reactor-rules-for-aws-reactor-events-for-lambda-functions-reactor-firehose-for-aws-sqs-and-kinesis">Ably knowledge base article</a> for details.
		 * Required
		 */
		accessKeyId: string;

		/** Authentication method is using AWS credentials (AWS key ID and secret key). */
		authenticationMode?: Aws_access_keysAuthenticationMode | null;

		/**
		 * The AWS secret key for the AWS IAM user. See this <a href="https://knowledge.ably.com/authentication-for-reactor-rules-for-aws-reactor-events-for-lambda-functions-reactor-firehose-for-aws-sqs-and-kinesis">Ably knowledge base article</a> for details.
		 * Required
		 */
		secretAccessKey: string;
	}
	export interface Aws_access_keysFormProperties {

		/**
		 * The AWS key ID for the AWS IAM user. See this <a href="https://knowledge.ably.com/authentication-for-reactor-rules-for-aws-reactor-events-for-lambda-functions-reactor-firehose-for-aws-sqs-and-kinesis">Ably knowledge base article</a> for details.
		 * Required
		 */
		accessKeyId: FormControl<string | null | undefined>,

		/** Authentication method is using AWS credentials (AWS key ID and secret key). */
		authenticationMode: FormControl<Aws_access_keysAuthenticationMode | null | undefined>,

		/**
		 * The AWS secret key for the AWS IAM user. See this <a href="https://knowledge.ably.com/authentication-for-reactor-rules-for-aws-reactor-events-for-lambda-functions-reactor-firehose-for-aws-sqs-and-kinesis">Ably knowledge base article</a> for details.
		 * Required
		 */
		secretAccessKey: FormControl<string | null | undefined>,
	}
	export function CreateAws_access_keysFormGroup() {
		return new FormGroup<Aws_access_keysFormProperties>({
			accessKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authenticationMode: new FormControl<Aws_access_keysAuthenticationMode | null | undefined>(undefined),
			secretAccessKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Aws_access_keysAuthenticationMode { credentials = 0 }

	export interface Aws_access_keys_response {

		/** The AWS key ID for the AWS IAM user. See this <a href="https://knowledge.ably.com/authentication-for-reactor-rules-for-aws-reactor-events-for-lambda-functions-reactor-firehose-for-aws-sqs-and-kinesis">Ably knowledge base article</a> for details. */
		accessKeyId?: string | null;

		/** Authentication method is using AWS credentials (AWS key ID and secret key). */
		authenticationMode?: Aws_access_keysAuthenticationMode | null;
	}
	export interface Aws_access_keys_responseFormProperties {

		/** The AWS key ID for the AWS IAM user. See this <a href="https://knowledge.ably.com/authentication-for-reactor-rules-for-aws-reactor-events-for-lambda-functions-reactor-firehose-for-aws-sqs-and-kinesis">Ably knowledge base article</a> for details. */
		accessKeyId: FormControl<string | null | undefined>,

		/** Authentication method is using AWS credentials (AWS key ID and secret key). */
		authenticationMode: FormControl<Aws_access_keysAuthenticationMode | null | undefined>,
	}
	export function CreateAws_access_keys_responseFormGroup() {
		return new FormGroup<Aws_access_keys_responseFormProperties>({
			accessKeyId: new FormControl<string | null | undefined>(undefined),
			authenticationMode: new FormControl<Aws_access_keysAuthenticationMode | null | undefined>(undefined),
		});

	}

	export interface Aws_assume_role {

		/**
		 * If you are using the "ARN of an assumable role" authentication method, this is your Assume Role ARN. See this <a href="https://knowledge.ably.com/authentication-for-reactor-rules-for-aws-reactor-events-for-lambda-functions-reactor-firehose-for-aws-sqs-and-kinesis">Ably knowledge base article</a> for details.
		 * Required
		 */
		assumeRoleArn: string;

		/** Authentication method is using the ARN of an assumable role. See this <a href="https://knowledge.ably.com/authentication-for-reactor-rules-for-aws-reactor-events-for-lambda-functions-reactor-firehose-for-aws-sqs-and-kinesis">Ably knowledge base article</a> for details. */
		authenticationMode?: Aws_assume_roleAuthenticationMode | null;
	}
	export interface Aws_assume_roleFormProperties {

		/**
		 * If you are using the "ARN of an assumable role" authentication method, this is your Assume Role ARN. See this <a href="https://knowledge.ably.com/authentication-for-reactor-rules-for-aws-reactor-events-for-lambda-functions-reactor-firehose-for-aws-sqs-and-kinesis">Ably knowledge base article</a> for details.
		 * Required
		 */
		assumeRoleArn: FormControl<string | null | undefined>,

		/** Authentication method is using the ARN of an assumable role. See this <a href="https://knowledge.ably.com/authentication-for-reactor-rules-for-aws-reactor-events-for-lambda-functions-reactor-firehose-for-aws-sqs-and-kinesis">Ably knowledge base article</a> for details. */
		authenticationMode: FormControl<Aws_assume_roleAuthenticationMode | null | undefined>,
	}
	export function CreateAws_assume_roleFormGroup() {
		return new FormGroup<Aws_assume_roleFormProperties>({
			assumeRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authenticationMode: new FormControl<Aws_assume_roleAuthenticationMode | null | undefined>(undefined),
		});

	}

	export enum Aws_assume_roleAuthenticationMode { assumeRole = 0 }

	export interface Aws_kinesis_rule_patch {

		/** Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>. */
		requestMode?: Amqp_external_rule_patchRequestMode | null;

		/** The type of rule. In this case AWS Kinesis. See the <a href="https://ably.com/integrations">documentation</a> for further information. */
		ruleType?: Aws_kinesis_rule_patchRuleType | null;
		source?: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;
		target?: Aws_kinesis_rule_patchTarget;
	}
	export interface Aws_kinesis_rule_patchFormProperties {

		/** Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>. */
		requestMode: FormControl<Amqp_external_rule_patchRequestMode | null | undefined>,

		/** The type of rule. In this case AWS Kinesis. See the <a href="https://ably.com/integrations">documentation</a> for further information. */
		ruleType: FormControl<Aws_kinesis_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,
	}
	export function CreateAws_kinesis_rule_patchFormGroup() {
		return new FormGroup<Aws_kinesis_rule_patchFormProperties>({
			requestMode: new FormControl<Amqp_external_rule_patchRequestMode | null | undefined>(undefined),
			ruleType: new FormControl<Aws_kinesis_rule_patchRuleType | null | undefined>(undefined),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
		});

	}

	export enum Aws_kinesis_rule_patchRuleType { 'aws/kinesis' = 0 }

	export interface Aws_kinesis_rule_patchTarget {
		authentication?: Aws_access_keys;

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;

		/** JSON provides a text-based encoding. */
		format?: Aws_kinesis_rule_patchTargetFormat | null;

		/** The AWS Kinesis partition key. See this <a href="https://knowledge.ably.com/what-is-the-format-of-the-routingkey-for-an-amqp-or-kinesis-reactor-rule">Ably knowledge base article</a> for details. */
		partitionKey?: string | null;

		/** The region is which AWS Kinesis is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail. */
		region?: string | null;

		/** The name of your AWS Kinesis Stream. */
		streamName?: string | null;
	}
	export interface Aws_kinesis_rule_patchTargetFormProperties {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,

		/** JSON provides a text-based encoding. */
		format: FormControl<Aws_kinesis_rule_patchTargetFormat | null | undefined>,

		/** The AWS Kinesis partition key. See this <a href="https://knowledge.ably.com/what-is-the-format-of-the-routingkey-for-an-amqp-or-kinesis-reactor-rule">Ably knowledge base article</a> for details. */
		partitionKey: FormControl<string | null | undefined>,

		/** The region is which AWS Kinesis is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail. */
		region: FormControl<string | null | undefined>,

		/** The name of your AWS Kinesis Stream. */
		streamName: FormControl<string | null | undefined>,
	}
	export function CreateAws_kinesis_rule_patchTargetFormGroup() {
		return new FormGroup<Aws_kinesis_rule_patchTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<Aws_kinesis_rule_patchTargetFormat | null | undefined>(undefined),
			partitionKey: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			streamName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Aws_kinesis_rule_patchTargetFormat { json = 0 }

	export interface Aws_kinesis_rule_post {

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: Amqp_external_rule_patchRequestMode;

		/**
		 * The type of rule. In this case AWS Kinesis. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: Aws_kinesis_rule_patchRuleType;

		/** Required */
		source: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Required */
		target: Aws_kinesis_rule_postTarget;
	}
	export interface Aws_kinesis_rule_postFormProperties {

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Amqp_external_rule_patchRequestMode | null | undefined>,

		/**
		 * The type of rule. In this case AWS Kinesis. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: FormControl<Aws_kinesis_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,
	}
	export function CreateAws_kinesis_rule_postFormGroup() {
		return new FormGroup<Aws_kinesis_rule_postFormProperties>({
			requestMode: new FormControl<Amqp_external_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Aws_kinesis_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
		});

	}

	export interface Aws_kinesis_rule_postTarget {

		/** Required */
		authentication: Aws_access_keys;

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;

		/**
		 * JSON provides a text-based encoding.
		 * Required
		 */
		format: Aws_kinesis_rule_patchTargetFormat;

		/**
		 * The AWS Kinesis partition key. See this <a href="https://knowledge.ably.com/what-is-the-format-of-the-routingkey-for-an-amqp-or-kinesis-reactor-rule">Ably knowledge base article</a> for details.
		 * Required
		 */
		partitionKey: string;

		/**
		 * The region is which AWS Kinesis is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail.
		 * Required
		 */
		region: string;

		/**
		 * The name of your AWS Kinesis Stream.
		 * Required
		 */
		streamName: string;
	}
	export interface Aws_kinesis_rule_postTargetFormProperties {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,

		/**
		 * JSON provides a text-based encoding.
		 * Required
		 */
		format: FormControl<Aws_kinesis_rule_patchTargetFormat | null | undefined>,

		/**
		 * The AWS Kinesis partition key. See this <a href="https://knowledge.ably.com/what-is-the-format-of-the-routingkey-for-an-amqp-or-kinesis-reactor-rule">Ably knowledge base article</a> for details.
		 * Required
		 */
		partitionKey: FormControl<string | null | undefined>,

		/**
		 * The region is which AWS Kinesis is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail.
		 * Required
		 */
		region: FormControl<string | null | undefined>,

		/**
		 * The name of your AWS Kinesis Stream.
		 * Required
		 */
		streamName: FormControl<string | null | undefined>,
	}
	export function CreateAws_kinesis_rule_postTargetFormGroup() {
		return new FormGroup<Aws_kinesis_rule_postTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<Aws_kinesis_rule_patchTargetFormat | null | undefined>(undefined, [Validators.required]),
			partitionKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			streamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Aws_kinesis_rule_response {
		_links?: string | null;

		/** The Ably application ID. */
		appId?: string | null;

		/** Unix timestamp representing the date and time of creation of the rule. */
		created?: number | null;

		/** The rule ID. */
		id?: string | null;

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified?: number | null;

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: Amqp_external_rule_patchRequestMode;

		/**
		 * The type of rule. In this case AWS Kinesis. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: Aws_kinesis_rule_patchRuleType;

		/** Required */
		source: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Required */
		target: Aws_kinesis_rule_responseTarget;

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version?: string | null;
	}
	export interface Aws_kinesis_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,

		/** The Ably application ID. */
		appId: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of creation of the rule. */
		created: FormControl<number | null | undefined>,

		/** The rule ID. */
		id: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified: FormControl<number | null | undefined>,

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Amqp_external_rule_patchRequestMode | null | undefined>,

		/**
		 * The type of rule. In this case AWS Kinesis. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: FormControl<Aws_kinesis_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateAws_kinesis_rule_responseFormGroup() {
		return new FormGroup<Aws_kinesis_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<Amqp_external_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Aws_kinesis_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Aws_kinesis_rule_responseTarget {

		/** Required */
		authentication: Aws_access_keys_response;

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;

		/**
		 * JSON provides a text-based encoding.
		 * Required
		 */
		format: Aws_kinesis_rule_patchTargetFormat;

		/**
		 * The AWS Kinesis partition key. See this <a href="https://knowledge.ably.com/what-is-the-format-of-the-routingkey-for-an-amqp-or-kinesis-reactor-rule">Ably knowledge base article</a> for details.
		 * Required
		 */
		partitionKey: string;

		/**
		 * The region is which AWS Kinesis is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail.
		 * Required
		 */
		region: string;

		/**
		 * The name of your AWS Kinesis Stream.
		 * Required
		 */
		streamName: string;
	}
	export interface Aws_kinesis_rule_responseTargetFormProperties {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,

		/**
		 * JSON provides a text-based encoding.
		 * Required
		 */
		format: FormControl<Aws_kinesis_rule_patchTargetFormat | null | undefined>,

		/**
		 * The AWS Kinesis partition key. See this <a href="https://knowledge.ably.com/what-is-the-format-of-the-routingkey-for-an-amqp-or-kinesis-reactor-rule">Ably knowledge base article</a> for details.
		 * Required
		 */
		partitionKey: FormControl<string | null | undefined>,

		/**
		 * The region is which AWS Kinesis is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail.
		 * Required
		 */
		region: FormControl<string | null | undefined>,

		/**
		 * The name of your AWS Kinesis Stream.
		 * Required
		 */
		streamName: FormControl<string | null | undefined>,
	}
	export function CreateAws_kinesis_rule_responseTargetFormGroup() {
		return new FormGroup<Aws_kinesis_rule_responseTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<Aws_kinesis_rule_patchTargetFormat | null | undefined>(undefined, [Validators.required]),
			partitionKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			streamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Aws_lambda_rule_patch {

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: Amqp_external_rule_patchRequestMode;

		/**
		 * The type of rule. In this case AWS Lambda. See the <a href="https://ably.com/integrations">Ably documentation</a> for further information.
		 * Required
		 */
		ruleType: Aws_lambda_rule_patchRuleType;

		/** Required */
		source: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Required */
		target: Aws_lambda_rule_patchTarget;
	}
	export interface Aws_lambda_rule_patchFormProperties {

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Amqp_external_rule_patchRequestMode | null | undefined>,

		/**
		 * The type of rule. In this case AWS Lambda. See the <a href="https://ably.com/integrations">Ably documentation</a> for further information.
		 * Required
		 */
		ruleType: FormControl<Aws_lambda_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,
	}
	export function CreateAws_lambda_rule_patchFormGroup() {
		return new FormGroup<Aws_lambda_rule_patchFormProperties>({
			requestMode: new FormControl<Amqp_external_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Aws_lambda_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
		});

	}

	export enum Aws_lambda_rule_patchRuleType { 'aws/lambda' = 0 }

	export interface Aws_lambda_rule_patchTarget {

		/** Required */
		authentication: Aws_access_keys;

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;

		/**
		 * The name of your AWS Lambda Function.
		 * Required
		 */
		functionName: string;

		/**
		 * The region is which your AWS Lambda Function is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail.
		 * Required
		 */
		region: string;
	}
	export interface Aws_lambda_rule_patchTargetFormProperties {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,

		/**
		 * The name of your AWS Lambda Function.
		 * Required
		 */
		functionName: FormControl<string | null | undefined>,

		/**
		 * The region is which your AWS Lambda Function is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail.
		 * Required
		 */
		region: FormControl<string | null | undefined>,
	}
	export function CreateAws_lambda_rule_patchTargetFormGroup() {
		return new FormGroup<Aws_lambda_rule_patchTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			functionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Aws_lambda_rule_post {

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: Amqp_external_rule_patchRequestMode;

		/**
		 * The type of rule. In this case AWS Lambda. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: Aws_lambda_rule_patchRuleType;

		/** Required */
		source: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Required */
		target: Aws_lambda_rule_postTarget;
	}
	export interface Aws_lambda_rule_postFormProperties {

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Amqp_external_rule_patchRequestMode | null | undefined>,

		/**
		 * The type of rule. In this case AWS Lambda. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: FormControl<Aws_lambda_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,
	}
	export function CreateAws_lambda_rule_postFormGroup() {
		return new FormGroup<Aws_lambda_rule_postFormProperties>({
			requestMode: new FormControl<Amqp_external_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Aws_lambda_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
		});

	}

	export interface Aws_lambda_rule_postTarget {

		/** Required */
		authentication: Aws_access_keys;

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;

		/**
		 * The name of your AWS Lambda Function.
		 * Required
		 */
		functionName: string;

		/**
		 * The region is which your AWS Lambda Function is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail.
		 * Required
		 */
		region: string;
	}
	export interface Aws_lambda_rule_postTargetFormProperties {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,

		/**
		 * The name of your AWS Lambda Function.
		 * Required
		 */
		functionName: FormControl<string | null | undefined>,

		/**
		 * The region is which your AWS Lambda Function is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail.
		 * Required
		 */
		region: FormControl<string | null | undefined>,
	}
	export function CreateAws_lambda_rule_postTargetFormGroup() {
		return new FormGroup<Aws_lambda_rule_postTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			functionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Aws_lambda_rule_response {
		_links?: string | null;

		/** The Ably application ID. */
		appId?: string | null;

		/** Unix timestamp representing the date and time of creation of the rule. */
		created?: number | null;

		/** The rule ID. */
		id?: string | null;

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified?: number | null;

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: Amqp_external_rule_patchRequestMode;

		/**
		 * The type of rule. In this case AWS Lambda. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: Aws_lambda_rule_patchRuleType;

		/** Required */
		source: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Required */
		target: Aws_lambda_rule_responseTarget;

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version?: string | null;
	}
	export interface Aws_lambda_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,

		/** The Ably application ID. */
		appId: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of creation of the rule. */
		created: FormControl<number | null | undefined>,

		/** The rule ID. */
		id: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified: FormControl<number | null | undefined>,

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Amqp_external_rule_patchRequestMode | null | undefined>,

		/**
		 * The type of rule. In this case AWS Lambda. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: FormControl<Aws_lambda_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateAws_lambda_rule_responseFormGroup() {
		return new FormGroup<Aws_lambda_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<Amqp_external_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Aws_lambda_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Aws_lambda_rule_responseTarget {

		/** Required */
		authentication: Aws_access_keys_response;

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;
		format?: string | null;

		/**
		 * The name of your AWS Lambda Function.
		 * Required
		 */
		functionName: string;

		/**
		 * The region is which your AWS Lambda Function is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail.
		 * Required
		 */
		region: string;
	}
	export interface Aws_lambda_rule_responseTargetFormProperties {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,

		/**
		 * The name of your AWS Lambda Function.
		 * Required
		 */
		functionName: FormControl<string | null | undefined>,

		/**
		 * The region is which your AWS Lambda Function is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail.
		 * Required
		 */
		region: FormControl<string | null | undefined>,
	}
	export function CreateAws_lambda_rule_responseTargetFormGroup() {
		return new FormGroup<Aws_lambda_rule_responseTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			functionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Aws_sqs_rule_patch {

		/** Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>. */
		requestMode?: Amqp_external_rule_patchRequestMode | null;

		/** The type of rule. In this case AWS SQS. See the <a href="https://ably.com/integrations">documentation</a> for further information. */
		ruleType?: Aws_sqs_rule_patchRuleType | null;
		source?: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;
		target?: Aws_sqs_rule_patchTarget;
	}
	export interface Aws_sqs_rule_patchFormProperties {

		/** Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>. */
		requestMode: FormControl<Amqp_external_rule_patchRequestMode | null | undefined>,

		/** The type of rule. In this case AWS SQS. See the <a href="https://ably.com/integrations">documentation</a> for further information. */
		ruleType: FormControl<Aws_sqs_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,
	}
	export function CreateAws_sqs_rule_patchFormGroup() {
		return new FormGroup<Aws_sqs_rule_patchFormProperties>({
			requestMode: new FormControl<Amqp_external_rule_patchRequestMode | null | undefined>(undefined),
			ruleType: new FormControl<Aws_sqs_rule_patchRuleType | null | undefined>(undefined),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
		});

	}

	export enum Aws_sqs_rule_patchRuleType { 'aws/sqs' = 0 }

	export interface Aws_sqs_rule_patchTarget {
		authentication?: Aws_access_keys;

		/** Your AWS account ID. */
		awsAccountId?: string | null;

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;
		format?: string | null;

		/** The AWS SQS queue name. */
		queueName?: string | null;

		/** The region is which AWS SQS is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail. */
		region?: string | null;
	}
	export interface Aws_sqs_rule_patchTargetFormProperties {

		/** Your AWS account ID. */
		awsAccountId: FormControl<string | null | undefined>,

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,

		/** The AWS SQS queue name. */
		queueName: FormControl<string | null | undefined>,

		/** The region is which AWS SQS is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail. */
		region: FormControl<string | null | undefined>,
	}
	export function CreateAws_sqs_rule_patchTargetFormGroup() {
		return new FormGroup<Aws_sqs_rule_patchTargetFormProperties>({
			awsAccountId: new FormControl<string | null | undefined>(undefined),
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			queueName: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Aws_sqs_rule_post {

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: Amqp_external_rule_patchRequestMode;

		/**
		 * The type of rule. In this case AWS SQS. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: Aws_sqs_rule_patchRuleType;

		/** Required */
		source: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Required */
		target: Aws_sqs_rule_postTarget;
	}
	export interface Aws_sqs_rule_postFormProperties {

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Amqp_external_rule_patchRequestMode | null | undefined>,

		/**
		 * The type of rule. In this case AWS SQS. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: FormControl<Aws_sqs_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,
	}
	export function CreateAws_sqs_rule_postFormGroup() {
		return new FormGroup<Aws_sqs_rule_postFormProperties>({
			requestMode: new FormControl<Amqp_external_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Aws_sqs_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
		});

	}

	export interface Aws_sqs_rule_postTarget {

		/** Required */
		authentication: Aws_access_keys;

		/**
		 * Your AWS account ID.
		 * Required
		 */
		awsAccountId: string;

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;
		format?: string | null;

		/**
		 * The AWS SQS queue name.
		 * Required
		 */
		queueName: string;

		/**
		 * The region is which AWS SQS is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail.
		 * Required
		 */
		region: string;
	}
	export interface Aws_sqs_rule_postTargetFormProperties {

		/**
		 * Your AWS account ID.
		 * Required
		 */
		awsAccountId: FormControl<string | null | undefined>,

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,

		/**
		 * The AWS SQS queue name.
		 * Required
		 */
		queueName: FormControl<string | null | undefined>,

		/**
		 * The region is which AWS SQS is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail.
		 * Required
		 */
		region: FormControl<string | null | undefined>,
	}
	export function CreateAws_sqs_rule_postTargetFormGroup() {
		return new FormGroup<Aws_sqs_rule_postTargetFormProperties>({
			awsAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			queueName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Aws_sqs_rule_response {
		_links?: string | null;

		/** The Ably application ID. */
		appId?: string | null;

		/** Unix timestamp representing the date and time of creation of the rule. */
		created?: number | null;

		/** The rule ID. */
		id?: string | null;

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified?: number | null;

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: Amqp_external_rule_patchRequestMode;

		/**
		 * The type of rule. In this case AWS SQS. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: Aws_sqs_rule_patchRuleType;

		/** Required */
		source: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Required */
		target: Aws_sqs_rule_responseTarget;

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version?: string | null;
	}
	export interface Aws_sqs_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,

		/** The Ably application ID. */
		appId: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of creation of the rule. */
		created: FormControl<number | null | undefined>,

		/** The rule ID. */
		id: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified: FormControl<number | null | undefined>,

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Amqp_external_rule_patchRequestMode | null | undefined>,

		/**
		 * The type of rule. In this case AWS SQS. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: FormControl<Aws_sqs_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateAws_sqs_rule_responseFormGroup() {
		return new FormGroup<Aws_sqs_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<Amqp_external_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Aws_sqs_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Aws_sqs_rule_responseTarget {

		/** Required */
		authentication: Aws_access_keys_response;

		/**
		 * Your AWS account ID.
		 * Required
		 */
		awsAccountId: string;

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;
		format?: string | null;

		/**
		 * The AWS SQS queue name.
		 * Required
		 */
		queueName: string;

		/**
		 * The region is which AWS SQS is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail.
		 * Required
		 */
		region: string;
	}
	export interface Aws_sqs_rule_responseTargetFormProperties {

		/**
		 * Your AWS account ID.
		 * Required
		 */
		awsAccountId: FormControl<string | null | undefined>,

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,

		/**
		 * The AWS SQS queue name.
		 * Required
		 */
		queueName: FormControl<string | null | undefined>,

		/**
		 * The region is which AWS SQS is hosted. See the <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#lambda_region">AWS documentation</a> for more detail.
		 * Required
		 */
		region: FormControl<string | null | undefined>,
	}
	export function CreateAws_sqs_rule_responseTargetFormGroup() {
		return new FormGroup<Aws_sqs_rule_responseTargetFormProperties>({
			awsAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			queueName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Azure_function_rule_patch {

		/** This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>. */
		requestMode?: Azure_function_rule_patchRequestMode | null;

		/** The type of rule. In this case Microsoft Azure Function. See the <a href="https://ably.com/integrations">documentation</a> for further information. */
		ruleType?: Azure_function_rule_patchRuleType | null;
		source?: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;
		target?: Azure_function_rule_patchTarget;
	}
	export interface Azure_function_rule_patchFormProperties {

		/** This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>. */
		requestMode: FormControl<Azure_function_rule_patchRequestMode | null | undefined>,

		/** The type of rule. In this case Microsoft Azure Function. See the <a href="https://ably.com/integrations">documentation</a> for further information. */
		ruleType: FormControl<Azure_function_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,
	}
	export function CreateAzure_function_rule_patchFormGroup() {
		return new FormGroup<Azure_function_rule_patchFormProperties>({
			requestMode: new FormControl<Azure_function_rule_patchRequestMode | null | undefined>(undefined),
			ruleType: new FormControl<Azure_function_rule_patchRuleType | null | undefined>(undefined),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
		});

	}

	export enum Azure_function_rule_patchRequestMode { single = 0, batch = 1 }

	export enum Azure_function_rule_patchRuleType { 'http/azure-function' = 0 }

	export interface Azure_function_rule_patchTarget {

		/** The Microsoft Azure Application ID. You can find your Microsoft Azure Application ID as shown in this <a href="https://dev.applicationinsights.io/documentation/Authorization/API-key-and-App-ID">article</a>. */
		azureAppId?: string | null;

		/** The name of your Microsoft Azure Function. */
		azureFunctionName?: string | null;

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;

		/** JSON provides a text-based encoding. */
		format?: Aws_kinesis_rule_patchTargetFormat | null;

		/** If you have additional information to send, you'll need to include the relevant headers. */
		Azure_function_rule_patchTargetHeaders?: Array<Azure_function_rule_patchTargetHeaders>;

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId?: string | null;
	}
	export interface Azure_function_rule_patchTargetFormProperties {

		/** The Microsoft Azure Application ID. You can find your Microsoft Azure Application ID as shown in this <a href="https://dev.applicationinsights.io/documentation/Authorization/API-key-and-App-ID">article</a>. */
		azureAppId: FormControl<string | null | undefined>,

		/** The name of your Microsoft Azure Function. */
		azureFunctionName: FormControl<string | null | undefined>,

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,

		/** JSON provides a text-based encoding. */
		format: FormControl<Aws_kinesis_rule_patchTargetFormat | null | undefined>,

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId: FormControl<string | null | undefined>,
	}
	export function CreateAzure_function_rule_patchTargetFormGroup() {
		return new FormGroup<Azure_function_rule_patchTargetFormProperties>({
			azureAppId: new FormControl<string | null | undefined>(undefined),
			azureFunctionName: new FormControl<string | null | undefined>(undefined),
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<Aws_kinesis_rule_patchTargetFormat | null | undefined>(undefined),
			signingKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Azure_function_rule_patchTargetHeaders {

		/** The name of the header. */
		name?: string | null;

		/** The value of the header. */
		value?: string | null;
	}
	export interface Azure_function_rule_patchTargetHeadersFormProperties {

		/** The name of the header. */
		name: FormControl<string | null | undefined>,

		/** The value of the header. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAzure_function_rule_patchTargetHeadersFormGroup() {
		return new FormGroup<Azure_function_rule_patchTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Azure_function_rule_post {

		/**
		 * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.
		 * Required
		 */
		requestMode: Azure_function_rule_patchRequestMode;

		/**
		 * The type of rule. In this case Microsoft Azure Function. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: Azure_function_rule_patchRuleType;

		/** Required */
		source: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Required */
		target: Azure_function_rule_postTarget;
	}
	export interface Azure_function_rule_postFormProperties {

		/**
		 * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Azure_function_rule_patchRequestMode | null | undefined>,

		/**
		 * The type of rule. In this case Microsoft Azure Function. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: FormControl<Azure_function_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,
	}
	export function CreateAzure_function_rule_postFormGroup() {
		return new FormGroup<Azure_function_rule_postFormProperties>({
			requestMode: new FormControl<Azure_function_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Azure_function_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
		});

	}

	export interface Azure_function_rule_postTarget {

		/**
		 * The Microsoft Azure Application ID. You can find your Microsoft Azure Application ID as shown in this <a href="https://dev.applicationinsights.io/documentation/Authorization/API-key-and-App-ID">article</a>.
		 * Required
		 */
		azureAppId: string;

		/**
		 * The name of your Microsoft Azure Function.
		 * Required
		 */
		azureFunctionName: string;

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;

		/** JSON provides a text-based encoding. */
		format?: Aws_kinesis_rule_patchTargetFormat | null;

		/** If you have additional information to send, you'll need to include the relevant headers. */
		Azure_function_rule_postTargetHeaders?: Array<Azure_function_rule_postTargetHeaders>;

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId?: string | null;
	}
	export interface Azure_function_rule_postTargetFormProperties {

		/**
		 * The Microsoft Azure Application ID. You can find your Microsoft Azure Application ID as shown in this <a href="https://dev.applicationinsights.io/documentation/Authorization/API-key-and-App-ID">article</a>.
		 * Required
		 */
		azureAppId: FormControl<string | null | undefined>,

		/**
		 * The name of your Microsoft Azure Function.
		 * Required
		 */
		azureFunctionName: FormControl<string | null | undefined>,

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,

		/** JSON provides a text-based encoding. */
		format: FormControl<Aws_kinesis_rule_patchTargetFormat | null | undefined>,

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId: FormControl<string | null | undefined>,
	}
	export function CreateAzure_function_rule_postTargetFormGroup() {
		return new FormGroup<Azure_function_rule_postTargetFormProperties>({
			azureAppId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			azureFunctionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<Aws_kinesis_rule_patchTargetFormat | null | undefined>(undefined),
			signingKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Azure_function_rule_postTargetHeaders {

		/** The name of the header. */
		name?: string | null;

		/** The value of the header. */
		value?: string | null;
	}
	export interface Azure_function_rule_postTargetHeadersFormProperties {

		/** The name of the header. */
		name: FormControl<string | null | undefined>,

		/** The value of the header. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAzure_function_rule_postTargetHeadersFormGroup() {
		return new FormGroup<Azure_function_rule_postTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Azure_function_rule_response {
		_links?: string | null;

		/** The Ably application ID. */
		appId?: string | null;

		/** Unix timestamp representing the date and time of creation of the rule. */
		created?: number | null;

		/** The rule ID. */
		id?: string | null;

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified?: number | null;

		/**
		 * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.
		 * Required
		 */
		requestMode: Azure_function_rule_patchRequestMode;

		/**
		 * The type of rule. In this case Microsoft Azure Function. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: Azure_function_rule_patchRuleType;

		/** Required */
		source: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Required */
		target: Azure_function_rule_responseTarget;

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version?: string | null;
	}
	export interface Azure_function_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,

		/** The Ably application ID. */
		appId: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of creation of the rule. */
		created: FormControl<number | null | undefined>,

		/** The rule ID. */
		id: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified: FormControl<number | null | undefined>,

		/**
		 * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Azure_function_rule_patchRequestMode | null | undefined>,

		/**
		 * The type of rule. In this case Microsoft Azure Function. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: FormControl<Azure_function_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateAzure_function_rule_responseFormGroup() {
		return new FormGroup<Azure_function_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<Azure_function_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Azure_function_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Azure_function_rule_responseTarget {

		/**
		 * The Microsoft Azure Application ID. You can find your Microsoft Azure Application ID as shown in this <a href="https://dev.applicationinsights.io/documentation/Authorization/API-key-and-App-ID">article</a>.
		 * Required
		 */
		azureAppId: string;

		/**
		 * The name of your Microsoft Azure Function.
		 * Required
		 */
		azureFunctionName: string;

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;

		/** JSON provides a text-based encoding. */
		format?: Aws_kinesis_rule_patchTargetFormat | null;

		/** If you have additional information to send, you'll need to include the relevant headers. */
		Azure_function_rule_responseTargetHeaders?: Array<Azure_function_rule_responseTargetHeaders>;

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId?: string | null;
	}
	export interface Azure_function_rule_responseTargetFormProperties {

		/**
		 * The Microsoft Azure Application ID. You can find your Microsoft Azure Application ID as shown in this <a href="https://dev.applicationinsights.io/documentation/Authorization/API-key-and-App-ID">article</a>.
		 * Required
		 */
		azureAppId: FormControl<string | null | undefined>,

		/**
		 * The name of your Microsoft Azure Function.
		 * Required
		 */
		azureFunctionName: FormControl<string | null | undefined>,

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,

		/** JSON provides a text-based encoding. */
		format: FormControl<Aws_kinesis_rule_patchTargetFormat | null | undefined>,

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId: FormControl<string | null | undefined>,
	}
	export function CreateAzure_function_rule_responseTargetFormGroup() {
		return new FormGroup<Azure_function_rule_responseTargetFormProperties>({
			azureAppId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			azureFunctionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<Aws_kinesis_rule_patchTargetFormat | null | undefined>(undefined),
			signingKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Azure_function_rule_responseTargetHeaders {

		/** The name of the header. */
		name?: string | null;

		/** The value of the header. */
		value?: string | null;
	}
	export interface Azure_function_rule_responseTargetHeadersFormProperties {

		/** The name of the header. */
		name: FormControl<string | null | undefined>,

		/** The value of the header. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAzure_function_rule_responseTargetHeadersFormGroup() {
		return new FormGroup<Azure_function_rule_responseTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Cloudflare_worker_rule_patch {

		/** This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>. */
		requestMode?: Azure_function_rule_patchRequestMode | null;

		/** The type of rule. In this case Cloudflare Worker. See the <a href="https://ably.com/integrations">documentation</a> for further information. */
		ruleType?: Cloudflare_worker_rule_patchRuleType | null;
		source?: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;
		target?: Cloudflare_worker_rule_patchTarget;
	}
	export interface Cloudflare_worker_rule_patchFormProperties {

		/** This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>. */
		requestMode: FormControl<Azure_function_rule_patchRequestMode | null | undefined>,

		/** The type of rule. In this case Cloudflare Worker. See the <a href="https://ably.com/integrations">documentation</a> for further information. */
		ruleType: FormControl<Cloudflare_worker_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,
	}
	export function CreateCloudflare_worker_rule_patchFormGroup() {
		return new FormGroup<Cloudflare_worker_rule_patchFormProperties>({
			requestMode: new FormControl<Azure_function_rule_patchRequestMode | null | undefined>(undefined),
			ruleType: new FormControl<Cloudflare_worker_rule_patchRuleType | null | undefined>(undefined),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
		});

	}

	export enum Cloudflare_worker_rule_patchRuleType { 'http/cloudflare-worker' = 0 }

	export interface Cloudflare_worker_rule_patchTarget {

		/** If you have additional information to send, you'll need to include the relevant headers. */
		Cloudflare_worker_rule_patchTargetHeaders?: Array<Cloudflare_worker_rule_patchTargetHeaders>;

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId?: string | null;
		url?: string | null;
	}
	export interface Cloudflare_worker_rule_patchTargetFormProperties {

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateCloudflare_worker_rule_patchTargetFormGroup() {
		return new FormGroup<Cloudflare_worker_rule_patchTargetFormProperties>({
			signingKeyId: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Cloudflare_worker_rule_patchTargetHeaders {

		/** The name of the header. */
		name?: string | null;

		/** The value of the header. */
		value?: string | null;
	}
	export interface Cloudflare_worker_rule_patchTargetHeadersFormProperties {

		/** The name of the header. */
		name: FormControl<string | null | undefined>,

		/** The value of the header. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCloudflare_worker_rule_patchTargetHeadersFormGroup() {
		return new FormGroup<Cloudflare_worker_rule_patchTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Cloudflare_worker_rule_post {

		/**
		 * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.
		 * Required
		 */
		requestMode: Azure_function_rule_patchRequestMode;

		/**
		 * The type of rule. In this case Cloudflare Worker. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: Cloudflare_worker_rule_patchRuleType;

		/** Required */
		source: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Required */
		target: Cloudflare_worker_rule_postTarget;
	}
	export interface Cloudflare_worker_rule_postFormProperties {

		/**
		 * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Azure_function_rule_patchRequestMode | null | undefined>,

		/**
		 * The type of rule. In this case Cloudflare Worker. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: FormControl<Cloudflare_worker_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,
	}
	export function CreateCloudflare_worker_rule_postFormGroup() {
		return new FormGroup<Cloudflare_worker_rule_postFormProperties>({
			requestMode: new FormControl<Azure_function_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Cloudflare_worker_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
		});

	}

	export interface Cloudflare_worker_rule_postTarget {

		/** If you have additional information to send, you'll need to include the relevant headers. */
		Cloudflare_worker_rule_postTargetHeaders?: Array<Cloudflare_worker_rule_postTargetHeaders>;

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId?: string | null;

		/** Required */
		url: string;
	}
	export interface Cloudflare_worker_rule_postTargetFormProperties {

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateCloudflare_worker_rule_postTargetFormGroup() {
		return new FormGroup<Cloudflare_worker_rule_postTargetFormProperties>({
			signingKeyId: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Cloudflare_worker_rule_postTargetHeaders {

		/** The name of the header. */
		name?: string | null;

		/** The value of the header. */
		value?: string | null;
	}
	export interface Cloudflare_worker_rule_postTargetHeadersFormProperties {

		/** The name of the header. */
		name: FormControl<string | null | undefined>,

		/** The value of the header. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCloudflare_worker_rule_postTargetHeadersFormGroup() {
		return new FormGroup<Cloudflare_worker_rule_postTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Cloudflare_worker_rule_response {
		_links?: string | null;

		/** The Ably application ID. */
		appId?: string | null;

		/** Unix timestamp representing the date and time of creation of the rule. */
		created?: number | null;

		/** The rule ID. */
		id?: string | null;

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified?: number | null;

		/**
		 * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.
		 * Required
		 */
		requestMode: Azure_function_rule_patchRequestMode;

		/**
		 * The type of rule. In this case Cloudflare Worker. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: Cloudflare_worker_rule_patchRuleType;

		/** Required */
		source: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Required */
		target: Cloudflare_worker_rule_responseTarget;

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version?: string | null;
	}
	export interface Cloudflare_worker_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,

		/** The Ably application ID. */
		appId: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of creation of the rule. */
		created: FormControl<number | null | undefined>,

		/** The rule ID. */
		id: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified: FormControl<number | null | undefined>,

		/**
		 * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Azure_function_rule_patchRequestMode | null | undefined>,

		/**
		 * The type of rule. In this case Cloudflare Worker. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: FormControl<Cloudflare_worker_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateCloudflare_worker_rule_responseFormGroup() {
		return new FormGroup<Cloudflare_worker_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<Azure_function_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Cloudflare_worker_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Cloudflare_worker_rule_responseTarget {

		/** If you have additional information to send, you'll need to include the relevant headers. */
		Cloudflare_worker_rule_responseTargetHeaders?: Array<Cloudflare_worker_rule_responseTargetHeaders>;

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId?: string | null;

		/** Required */
		url: string;
	}
	export interface Cloudflare_worker_rule_responseTargetFormProperties {

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateCloudflare_worker_rule_responseTargetFormGroup() {
		return new FormGroup<Cloudflare_worker_rule_responseTargetFormProperties>({
			signingKeyId: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Cloudflare_worker_rule_responseTargetHeaders {

		/** The name of the header. */
		name?: string | null;

		/** The value of the header. */
		value?: string | null;
	}
	export interface Cloudflare_worker_rule_responseTargetHeadersFormProperties {

		/** The name of the header. */
		name: FormControl<string | null | undefined>,

		/** The value of the header. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCloudflare_worker_rule_responseTargetHeadersFormGroup() {
		return new FormGroup<Cloudflare_worker_rule_responseTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error {

		/**
		 * The HTTP status code returned.
		 * Required
		 */
		code: number;

		/** Any additional details about the error message. */
		details?: string | null;

		/**
		 * The URL to documentation about the error code.
		 * Required
		 */
		href: string;

		/**
		 * The error message.
		 * Required
		 */
		message: string;

		/**
		 * The Ably error code.
		 * Required
		 */
		statusCode: number;
	}
	export interface ErrorFormProperties {

		/**
		 * The HTTP status code returned.
		 * Required
		 */
		code: FormControl<number | null | undefined>,

		/** Any additional details about the error message. */
		details: FormControl<string | null | undefined>,

		/**
		 * The URL to documentation about the error code.
		 * Required
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * The error message.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/**
		 * The Ably error code.
		 * Required
		 */
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			details: new FormControl<string | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			statusCode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Google_cloud_function_rule_patch {

		/** This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>. */
		requestMode?: Azure_function_rule_patchRequestMode | null;

		/** The type of rule. In this case Google Cloud Function. See the <a href="https://ably.com/integrations">documentation</a> for further information. */
		ruleType?: Google_cloud_function_rule_patchRuleType | null;
		source?: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;
		target?: Google_cloud_function_rule_patchTarget;
	}
	export interface Google_cloud_function_rule_patchFormProperties {

		/** This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>. */
		requestMode: FormControl<Azure_function_rule_patchRequestMode | null | undefined>,

		/** The type of rule. In this case Google Cloud Function. See the <a href="https://ably.com/integrations">documentation</a> for further information. */
		ruleType: FormControl<Google_cloud_function_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,
	}
	export function CreateGoogle_cloud_function_rule_patchFormGroup() {
		return new FormGroup<Google_cloud_function_rule_patchFormProperties>({
			requestMode: new FormControl<Azure_function_rule_patchRequestMode | null | undefined>(undefined),
			ruleType: new FormControl<Google_cloud_function_rule_patchRuleType | null | undefined>(undefined),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
		});

	}

	export enum Google_cloud_function_rule_patchRuleType { 'http/google-cloud-function' = 0 }

	export interface Google_cloud_function_rule_patchTarget {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;

		/** JSON provides a text-based encoding. */
		format?: Aws_kinesis_rule_patchTargetFormat | null;

		/** The name of your Google Cloud Function. */
		functionName?: string | null;

		/** If you have additional information to send, you'll need to include the relevant headers. */
		Google_cloud_function_rule_patchTargetHeaders?: Array<Google_cloud_function_rule_patchTargetHeaders>;

		/** The project ID for your Google Cloud Project that was generated when you created your project. */
		projectId?: string | null;

		/** The region in which your Google Cloud Function is hosted. See the <a href="https://cloud.google.com/compute/docs/regions-zones/">Google documentation</a> for more details. */
		region?: string | null;

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId?: string | null;
	}
	export interface Google_cloud_function_rule_patchTargetFormProperties {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,

		/** JSON provides a text-based encoding. */
		format: FormControl<Aws_kinesis_rule_patchTargetFormat | null | undefined>,

		/** The name of your Google Cloud Function. */
		functionName: FormControl<string | null | undefined>,

		/** The project ID for your Google Cloud Project that was generated when you created your project. */
		projectId: FormControl<string | null | undefined>,

		/** The region in which your Google Cloud Function is hosted. See the <a href="https://cloud.google.com/compute/docs/regions-zones/">Google documentation</a> for more details. */
		region: FormControl<string | null | undefined>,

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId: FormControl<string | null | undefined>,
	}
	export function CreateGoogle_cloud_function_rule_patchTargetFormGroup() {
		return new FormGroup<Google_cloud_function_rule_patchTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<Aws_kinesis_rule_patchTargetFormat | null | undefined>(undefined),
			functionName: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			signingKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Google_cloud_function_rule_patchTargetHeaders {

		/** The name of the header. */
		name?: string | null;

		/** The value of the header. */
		value?: string | null;
	}
	export interface Google_cloud_function_rule_patchTargetHeadersFormProperties {

		/** The name of the header. */
		name: FormControl<string | null | undefined>,

		/** The value of the header. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogle_cloud_function_rule_patchTargetHeadersFormGroup() {
		return new FormGroup<Google_cloud_function_rule_patchTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Google_cloud_function_rule_post {

		/**
		 * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.
		 * Required
		 */
		requestMode: Azure_function_rule_patchRequestMode;

		/**
		 * The type of rule. In this case Google Cloud Function. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: Google_cloud_function_rule_patchRuleType;

		/** Required */
		source: Rule_source;

		/** Required */
		target: Google_cloud_function_rule_postTarget;
	}
	export interface Google_cloud_function_rule_postFormProperties {

		/**
		 * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Azure_function_rule_patchRequestMode | null | undefined>,

		/**
		 * The type of rule. In this case Google Cloud Function. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: FormControl<Google_cloud_function_rule_patchRuleType | null | undefined>,
	}
	export function CreateGoogle_cloud_function_rule_postFormGroup() {
		return new FormGroup<Google_cloud_function_rule_postFormProperties>({
			requestMode: new FormControl<Azure_function_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Google_cloud_function_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Google_cloud_function_rule_postTarget {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;

		/** JSON provides a text-based encoding. */
		format?: Aws_kinesis_rule_patchTargetFormat | null;

		/**
		 * The name of your Google Cloud Function.
		 * Required
		 */
		functionName: string;

		/** If you have additional information to send, you'll need to include the relevant headers. */
		Google_cloud_function_rule_postTargetHeaders?: Array<Google_cloud_function_rule_postTargetHeaders>;

		/**
		 * The project ID for your Google Cloud Project that was generated when you created your project.
		 * Required
		 */
		projectId: string;

		/**
		 * The region in which your Google Cloud Function is hosted. See the <a href="https://cloud.google.com/compute/docs/regions-zones/">Google documentation</a> for more details.
		 * Required
		 */
		region: string;

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId?: string | null;
	}
	export interface Google_cloud_function_rule_postTargetFormProperties {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,

		/** JSON provides a text-based encoding. */
		format: FormControl<Aws_kinesis_rule_patchTargetFormat | null | undefined>,

		/**
		 * The name of your Google Cloud Function.
		 * Required
		 */
		functionName: FormControl<string | null | undefined>,

		/**
		 * The project ID for your Google Cloud Project that was generated when you created your project.
		 * Required
		 */
		projectId: FormControl<string | null | undefined>,

		/**
		 * The region in which your Google Cloud Function is hosted. See the <a href="https://cloud.google.com/compute/docs/regions-zones/">Google documentation</a> for more details.
		 * Required
		 */
		region: FormControl<string | null | undefined>,

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId: FormControl<string | null | undefined>,
	}
	export function CreateGoogle_cloud_function_rule_postTargetFormGroup() {
		return new FormGroup<Google_cloud_function_rule_postTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<Aws_kinesis_rule_patchTargetFormat | null | undefined>(undefined),
			functionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			signingKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Google_cloud_function_rule_postTargetHeaders {

		/** The name of the header. */
		name?: string | null;

		/** The value of the header. */
		value?: string | null;
	}
	export interface Google_cloud_function_rule_postTargetHeadersFormProperties {

		/** The name of the header. */
		name: FormControl<string | null | undefined>,

		/** The value of the header. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogle_cloud_function_rule_postTargetHeadersFormGroup() {
		return new FormGroup<Google_cloud_function_rule_postTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Google_cloud_function_rule_response {
		_links?: string | null;

		/** The Ably application ID. */
		appId?: string | null;

		/** Unix timestamp representing the date and time of creation of the rule. */
		created?: number | null;

		/** The rule ID. */
		id?: string | null;

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified?: number | null;

		/**
		 * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.
		 * Required
		 */
		requestMode: Azure_function_rule_patchRequestMode;

		/**
		 * The type of rule. In this case Google Cloud Function. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: Google_cloud_function_rule_patchRuleType;

		/** Required */
		source: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Required */
		target: Google_cloud_function_rule_responseTarget;

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version?: string | null;
	}
	export interface Google_cloud_function_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,

		/** The Ably application ID. */
		appId: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of creation of the rule. */
		created: FormControl<number | null | undefined>,

		/** The rule ID. */
		id: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified: FormControl<number | null | undefined>,

		/**
		 * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Azure_function_rule_patchRequestMode | null | undefined>,

		/**
		 * The type of rule. In this case Google Cloud Function. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: FormControl<Google_cloud_function_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogle_cloud_function_rule_responseFormGroup() {
		return new FormGroup<Google_cloud_function_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<Azure_function_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Google_cloud_function_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Google_cloud_function_rule_responseTarget {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;

		/** JSON provides a text-based encoding. */
		format?: Aws_kinesis_rule_patchTargetFormat | null;

		/**
		 * The name of your Google Cloud Function.
		 * Required
		 */
		functionName: string;

		/** If you have additional information to send, you'll need to include the relevant headers. */
		Google_cloud_function_rule_responseTargetHeaders?: Array<Google_cloud_function_rule_responseTargetHeaders>;

		/**
		 * The project ID for your Google Cloud Project that was generated when you created your project.
		 * Required
		 */
		projectId: string;

		/**
		 * The region in which your Google Cloud Function is hosted. See the <a href="https://cloud.google.com/compute/docs/regions-zones/">Google documentation</a> for more details.
		 * Required
		 */
		region: string;

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId?: string | null;
	}
	export interface Google_cloud_function_rule_responseTargetFormProperties {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,

		/** JSON provides a text-based encoding. */
		format: FormControl<Aws_kinesis_rule_patchTargetFormat | null | undefined>,

		/**
		 * The name of your Google Cloud Function.
		 * Required
		 */
		functionName: FormControl<string | null | undefined>,

		/**
		 * The project ID for your Google Cloud Project that was generated when you created your project.
		 * Required
		 */
		projectId: FormControl<string | null | undefined>,

		/**
		 * The region in which your Google Cloud Function is hosted. See the <a href="https://cloud.google.com/compute/docs/regions-zones/">Google documentation</a> for more details.
		 * Required
		 */
		region: FormControl<string | null | undefined>,

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId: FormControl<string | null | undefined>,
	}
	export function CreateGoogle_cloud_function_rule_responseTargetFormGroup() {
		return new FormGroup<Google_cloud_function_rule_responseTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<Aws_kinesis_rule_patchTargetFormat | null | undefined>(undefined),
			functionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			signingKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Google_cloud_function_rule_responseTargetHeaders {

		/** The name of the header. */
		name?: string | null;

		/** The value of the header. */
		value?: string | null;
	}
	export interface Google_cloud_function_rule_responseTargetHeadersFormProperties {

		/** The name of the header. */
		name: FormControl<string | null | undefined>,

		/** The value of the header. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogle_cloud_function_rule_responseTargetHeadersFormGroup() {
		return new FormGroup<Google_cloud_function_rule_responseTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Http_rule_patch {

		/** This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>. */
		requestMode?: Azure_function_rule_patchRequestMode | null;

		/** The type of rule. See the <a href="https://ably.com/integrations">documentation</a> for further information. */
		ruleType?: Http_rule_patchRuleType | null;
		source?: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;
		target?: Http_rule_patchTarget;
	}
	export interface Http_rule_patchFormProperties {

		/** This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>. */
		requestMode: FormControl<Azure_function_rule_patchRequestMode | null | undefined>,

		/** The type of rule. See the <a href="https://ably.com/integrations">documentation</a> for further information. */
		ruleType: FormControl<Http_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,
	}
	export function CreateHttp_rule_patchFormGroup() {
		return new FormGroup<Http_rule_patchFormProperties>({
			requestMode: new FormControl<Azure_function_rule_patchRequestMode | null | undefined>(undefined),
			ruleType: new FormControl<Http_rule_patchRuleType | null | undefined>(undefined),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
		});

	}

	export enum Http_rule_patchRuleType { http = 0 }

	export interface Http_rule_patchTarget {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;

		/** JSON provides a simpler text-based encoding, whereas MsgPack provides a more efficient binary encoding. */
		format?: Http_rule_patchTargetFormat | null;

		/** If you have additional information to send, you'll need to include the relevant headers. */
		Http_rule_patchTargetHeaders?: Array<Http_rule_patchTargetHeaders>;

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId?: string | null;
		url?: string | null;
	}
	export interface Http_rule_patchTargetFormProperties {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,

		/** JSON provides a simpler text-based encoding, whereas MsgPack provides a more efficient binary encoding. */
		format: FormControl<Http_rule_patchTargetFormat | null | undefined>,

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateHttp_rule_patchTargetFormGroup() {
		return new FormGroup<Http_rule_patchTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<Http_rule_patchTargetFormat | null | undefined>(undefined),
			signingKeyId: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Http_rule_patchTargetFormat { json = 0, msgpack = 1 }

	export interface Http_rule_patchTargetHeaders {

		/** The name of the header. */
		name?: string | null;

		/** The value of the header. */
		value?: string | null;
	}
	export interface Http_rule_patchTargetHeadersFormProperties {

		/** The name of the header. */
		name: FormControl<string | null | undefined>,

		/** The value of the header. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateHttp_rule_patchTargetHeadersFormGroup() {
		return new FormGroup<Http_rule_patchTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Http_rule_post {

		/**
		 * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.
		 * Required
		 */
		requestMode: Azure_function_rule_patchRequestMode;

		/**
		 * The type of rule. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: Http_rule_patchRuleType;

		/** Required */
		source: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Required */
		target: Http_rule_postTarget;
	}
	export interface Http_rule_postFormProperties {

		/**
		 * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Azure_function_rule_patchRequestMode | null | undefined>,

		/**
		 * The type of rule. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: FormControl<Http_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,
	}
	export function CreateHttp_rule_postFormGroup() {
		return new FormGroup<Http_rule_postFormProperties>({
			requestMode: new FormControl<Azure_function_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Http_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
		});

	}

	export interface Http_rule_postTarget {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;

		/**
		 * JSON provides a simpler text-based encoding, whereas MsgPack provides a more efficient binary encoding.
		 * Required
		 */
		format: Http_rule_patchTargetFormat;

		/** If you have additional information to send, you'll need to include the relevant headers. */
		Http_rule_postTargetHeaders?: Array<Http_rule_postTargetHeaders>;

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId?: string | null;

		/**
		 * The URL of the endpoint that is invoked when events occur on Ably.
		 * Required
		 */
		url: string;
	}
	export interface Http_rule_postTargetFormProperties {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,

		/**
		 * JSON provides a simpler text-based encoding, whereas MsgPack provides a more efficient binary encoding.
		 * Required
		 */
		format: FormControl<Http_rule_patchTargetFormat | null | undefined>,

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId: FormControl<string | null | undefined>,

		/**
		 * The URL of the endpoint that is invoked when events occur on Ably.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateHttp_rule_postTargetFormGroup() {
		return new FormGroup<Http_rule_postTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<Http_rule_patchTargetFormat | null | undefined>(undefined, [Validators.required]),
			signingKeyId: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Http_rule_postTargetHeaders {

		/** The name of the header. */
		name?: string | null;

		/** The value of the header. */
		value?: string | null;
	}
	export interface Http_rule_postTargetHeadersFormProperties {

		/** The name of the header. */
		name: FormControl<string | null | undefined>,

		/** The value of the header. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateHttp_rule_postTargetHeadersFormGroup() {
		return new FormGroup<Http_rule_postTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Http_rule_response {
		_links?: string | null;

		/** The Ably application ID. */
		appId?: string | null;

		/** Unix timestamp representing the date and time of creation of the rule. */
		created?: number | null;

		/** The rule ID. */
		id?: string | null;

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified?: number | null;

		/**
		 * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.
		 * Required
		 */
		requestMode: Azure_function_rule_patchRequestMode;

		/**
		 * The type of rule. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: Http_rule_patchRuleType;

		/** Required */
		source: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Required */
		target: Http_rule_responseTarget;

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version?: string | null;
	}
	export interface Http_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,

		/** The Ably application ID. */
		appId: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of creation of the rule. */
		created: FormControl<number | null | undefined>,

		/** The rule ID. */
		id: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified: FormControl<number | null | undefined>,

		/**
		 * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Azure_function_rule_patchRequestMode | null | undefined>,

		/**
		 * The type of rule. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: FormControl<Http_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateHttp_rule_responseFormGroup() {
		return new FormGroup<Http_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<Azure_function_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Http_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Http_rule_responseTarget {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped?: boolean | null;

		/**
		 * JSON provides a simpler text-based encoding, whereas MsgPack provides a more efficient binary encoding.
		 * Required
		 */
		format: Http_rule_patchTargetFormat;

		/** If you have additional information to send, you'll need to include the relevant headers. */
		Http_rule_responseTargetHeaders?: Array<Http_rule_responseTargetHeaders>;

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId?: string | null;

		/** Required */
		url: string;
	}
	export interface Http_rule_responseTargetFormProperties {

		/** Messages delivered through Reactor are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule. */
		enveloped: FormControl<boolean | null | undefined>,

		/**
		 * JSON provides a simpler text-based encoding, whereas MsgPack provides a more efficient binary encoding.
		 * Required
		 */
		format: FormControl<Http_rule_patchTargetFormat | null | undefined>,

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateHttp_rule_responseTargetFormGroup() {
		return new FormGroup<Http_rule_responseTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<Http_rule_patchTargetFormat | null | undefined>(undefined, [Validators.required]),
			signingKeyId: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Http_rule_responseTargetHeaders {

		/** The name of the header. */
		name?: string | null;

		/** The value of the header. */
		value?: string | null;
	}
	export interface Http_rule_responseTargetHeadersFormProperties {

		/** The name of the header. */
		name: FormControl<string | null | undefined>,

		/** The value of the header. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateHttp_rule_responseTargetHeadersFormGroup() {
		return new FormGroup<Http_rule_responseTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Ifttt_rule_patch {
	}
	export interface Ifttt_rule_patchFormProperties {
	}
	export function CreateIfttt_rule_patchFormGroup() {
		return new FormGroup<Ifttt_rule_patchFormProperties>({
		});

	}

	export interface Ifttt_rule_post {

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: Amqp_external_rule_patchRequestMode;

		/**
		 * The type of rule. In this case IFTTT. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: Ifttt_rule_postRuleType;

		/** Required */
		source: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Required */
		target: Ifttt_rule_postTarget;
	}
	export interface Ifttt_rule_postFormProperties {

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Amqp_external_rule_patchRequestMode | null | undefined>,

		/**
		 * The type of rule. In this case IFTTT. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: FormControl<Ifttt_rule_postRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,
	}
	export function CreateIfttt_rule_postFormGroup() {
		return new FormGroup<Ifttt_rule_postFormProperties>({
			requestMode: new FormControl<Amqp_external_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Ifttt_rule_postRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
		});

	}

	export enum Ifttt_rule_postRuleType { 'http/ifttt' = 0 }

	export interface Ifttt_rule_postTarget {

		/** Required */
		eventName: string;

		/** Required */
		webhookKey: string;
	}
	export interface Ifttt_rule_postTargetFormProperties {

		/** Required */
		eventName: FormControl<string | null | undefined>,

		/** Required */
		webhookKey: FormControl<string | null | undefined>,
	}
	export function CreateIfttt_rule_postTargetFormGroup() {
		return new FormGroup<Ifttt_rule_postTargetFormProperties>({
			eventName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			webhookKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Ifttt_rule_response {
		_links?: string | null;

		/** The Ably application ID. */
		appId?: string | null;

		/** Unix timestamp representing the date and time of creation of the rule. */
		created?: number | null;

		/** The rule ID. */
		id?: string | null;

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified?: number | null;

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: Amqp_external_rule_patchRequestMode;

		/**
		 * The type of rule. In this case IFTTT. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: Ifttt_rule_postRuleType;

		/** Required */
		source: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Required */
		target: Ifttt_rule_responseTarget;

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version?: string | null;
	}
	export interface Ifttt_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,

		/** The Ably application ID. */
		appId: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of creation of the rule. */
		created: FormControl<number | null | undefined>,

		/** The rule ID. */
		id: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified: FormControl<number | null | undefined>,

		/**
		 * Single request mode sends each event separately to the endpoint specified by the rule. You can read more about single request mode events in the <a href="https://ably.com/documentation/general/events#batching">Ably documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Amqp_external_rule_patchRequestMode | null | undefined>,

		/**
		 * The type of rule. In this case IFTTT. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: FormControl<Ifttt_rule_postRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateIfttt_rule_responseFormGroup() {
		return new FormGroup<Ifttt_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<Amqp_external_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Ifttt_rule_postRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Ifttt_rule_responseTarget {

		/** Required */
		eventName: string;

		/** Required */
		webhookKey: string;
	}
	export interface Ifttt_rule_responseTargetFormProperties {

		/** Required */
		eventName: FormControl<string | null | undefined>,

		/** Required */
		webhookKey: FormControl<string | null | undefined>,
	}
	export function CreateIfttt_rule_responseTargetFormGroup() {
		return new FormGroup<Ifttt_rule_responseTargetFormProperties>({
			eventName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			webhookKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Key_patch {

		/** The capabilities that this key has. More information on capabilities can be found in the <a href="https://ably.com/documentation/core-features/authentication#capabilities-explained">Ably documentation</a>. */
		capabilities?: Array<string>;

		/** Specify the channels and queues that this key can be used with. */
		channels?: string | null;

		/** The name for your API key. This is a friendly name for your reference. */
		name?: string | null;
	}
	export interface Key_patchFormProperties {

		/** Specify the channels and queues that this key can be used with. */
		channels: FormControl<string | null | undefined>,

		/** The name for your API key. This is a friendly name for your reference. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateKey_patchFormGroup() {
		return new FormGroup<Key_patchFormProperties>({
			channels: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Key_post {

		/**
		 * The capabilities that this key has. More information on capabilities can be found in the <a href="https://ably.com/documentation/core-features/authentication#capabilities-explained">Ably documentation</a>.
		 * Required
		 */
		capabilities: Array<string>;

		/**
		 * Specify the channels and queues that this key can be used with.
		 * Required
		 */
		channels: string;

		/**
		 * The name for your API key. This is a friendly name for your reference.
		 * Required
		 */
		name: string;
	}
	export interface Key_postFormProperties {

		/**
		 * Specify the channels and queues that this key can be used with.
		 * Required
		 */
		channels: FormControl<string | null | undefined>,

		/**
		 * The name for your API key. This is a friendly name for your reference.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateKey_postFormGroup() {
		return new FormGroup<Key_postFormProperties>({
			channels: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Key_response {

		/** The Ably application ID which this key is associated with. */
		appId?: string | null;

		/** The capabilities that this key has. More information on capabilities can be found in the <a href="https://ably.com/documentation/core-features/authentication#capabilities-explained">Ably documentation</a>. */
		capability?: {[id: string]: Array<string> };

		/** Unix timestamp representing the date and time of creation of the key. */
		created?: number | null;

		/** The key ID. */
		id?: string | null;

		/** The complete API key including API secret. */
		key?: string | null;

		/** Unix timestamp representing the date and time of the last modification of the key. */
		modified?: number | null;

		/** The name of the application this key is associated with. */
		name?: string | null;
	}
	export interface Key_responseFormProperties {

		/** The Ably application ID which this key is associated with. */
		appId: FormControl<string | null | undefined>,

		/** The capabilities that this key has. More information on capabilities can be found in the <a href="https://ably.com/documentation/core-features/authentication#capabilities-explained">Ably documentation</a>. */
		capability: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/** Unix timestamp representing the date and time of creation of the key. */
		created: FormControl<number | null | undefined>,

		/** The key ID. */
		id: FormControl<string | null | undefined>,

		/** The complete API key including API secret. */
		key: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of the last modification of the key. */
		modified: FormControl<number | null | undefined>,

		/** The name of the application this key is associated with. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateKey_responseFormGroup() {
		return new FormGroup<Key_responseFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			capability: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Me {
		account?: MeAccount;
		token?: MeToken;
		user?: MeUser;
	}
	export interface MeFormProperties {
	}
	export function CreateMeFormGroup() {
		return new FormGroup<MeFormProperties>({
		});

	}

	export interface MeAccount {

		/**
		 * The account ID.
		 * Required
		 */
		id: string;

		/**
		 * The name of the account.
		 * Required
		 */
		name: string;
	}
	export interface MeAccountFormProperties {

		/**
		 * The account ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the account.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMeAccountFormGroup() {
		return new FormGroup<MeAccountFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MeToken {

		/**
		 * An array containing the access capabilities associated with the access token.
		 * Required
		 */
		capabilities: Array<string>;

		/**
		 * The token ID. This is a UUID.
		 * Required
		 */
		id: number;

		/**
		 * The friendly name for the token.
		 * Required
		 */
		name: string;
	}
	export interface MeTokenFormProperties {

		/**
		 * The token ID. This is a UUID.
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The friendly name for the token.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMeTokenFormGroup() {
		return new FormGroup<MeTokenFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MeUser {

		/**
		 * Email address of the user associated with the account.
		 * Required
		 */
		email: string;

		/**
		 * The user ID associated with the account. This is a UUID.
		 * Required
		 */
		id: number;
	}
	export interface MeUserFormProperties {

		/**
		 * Email address of the user associated with the account.
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * The user ID associated with the account. This is a UUID.
		 * Required
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateMeUserFormGroup() {
		return new FormGroup<MeUserFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Namespace_patch {

		/** If `true`, clients will not be permitted to use (including to attach, publish, or subscribe) any channels within this namespace unless they are identified, that is, authenticated using a client ID. See the <a href="https://knowledge.ably.com/authenticated-and-identified-clients">Ably knowledge base/a> for more details. */
		authenticated?: boolean | null;

		/** If `true`, the last message published on a channel will be stored for 365 days. You can access the stored message only by using the channel rewind mechanism and attaching with rewind=1. Please note that for each message stored, an additional message is deducted from your monthly allocation. */
		persistLast?: boolean | null;

		/** If `true`, all messages on a channel will be stored for 24 hours. You can access stored messages via the History API. Please note that for each message stored, an additional message is deducted from your monthly allocation. */
		persisted?: boolean | null;

		/** If `true`, publishing messages with a push payload in the extras field is permitted and can trigger the delivery of a native push notification to registered devices for the channel. */
		pushEnabled?: boolean | null;

		/** If `true`, only clients that are connected using TLS will be permitted to subscribe to any channels within this namespace. */
		tlsOnly?: boolean | null;
	}
	export interface Namespace_patchFormProperties {

		/** If `true`, clients will not be permitted to use (including to attach, publish, or subscribe) any channels within this namespace unless they are identified, that is, authenticated using a client ID. See the <a href="https://knowledge.ably.com/authenticated-and-identified-clients">Ably knowledge base/a> for more details. */
		authenticated: FormControl<boolean | null | undefined>,

		/** If `true`, the last message published on a channel will be stored for 365 days. You can access the stored message only by using the channel rewind mechanism and attaching with rewind=1. Please note that for each message stored, an additional message is deducted from your monthly allocation. */
		persistLast: FormControl<boolean | null | undefined>,

		/** If `true`, all messages on a channel will be stored for 24 hours. You can access stored messages via the History API. Please note that for each message stored, an additional message is deducted from your monthly allocation. */
		persisted: FormControl<boolean | null | undefined>,

		/** If `true`, publishing messages with a push payload in the extras field is permitted and can trigger the delivery of a native push notification to registered devices for the channel. */
		pushEnabled: FormControl<boolean | null | undefined>,

		/** If `true`, only clients that are connected using TLS will be permitted to subscribe to any channels within this namespace. */
		tlsOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateNamespace_patchFormGroup() {
		return new FormGroup<Namespace_patchFormProperties>({
			authenticated: new FormControl<boolean | null | undefined>(undefined),
			persistLast: new FormControl<boolean | null | undefined>(undefined),
			persisted: new FormControl<boolean | null | undefined>(undefined),
			pushEnabled: new FormControl<boolean | null | undefined>(undefined),
			tlsOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Namespace_post {

		/** If `true`, clients will not be permitted to use (including to attach, publish, or subscribe) any channels within this namespace unless they are identified, that is, authenticated using a client ID. See the <a href="https://knowledge.ably.com/authenticated-and-identified-clients">Ably Knowledge base</a> for more details. */
		authenticated?: boolean | null;

		/**
		 * The namespace or channel name that the channel rule will apply to. For example, if you specify `namespace` the namespace will be set to `namespace` and will match with channels `namespace:*` and `namespace`.
		 * Required
		 */
		id: string;

		/** If `true`, the last message published on a channel will be stored for 365 days. You can access the stored message only by using the channel rewind mechanism and attaching with rewind=1. Please note that for each message stored, an additional message is deducted from your monthly allocation. */
		persistLast?: boolean | null;

		/** If `true`, all messages on a channel will be stored for 24 hours. You can access stored messages via the History API. Please note that for each message stored, an additional message is deducted from your monthly allocation. */
		persisted?: boolean | null;

		/** If `true`, publishing messages with a push payload in the extras field is permitted and can trigger the delivery of a native push notification to registered devices for the channel. */
		pushEnabled?: boolean | null;

		/** If `true`, only clients that are connected using TLS will be permitted to subscribe to any channels within this namespace. */
		tlsOnly?: boolean | null;
	}
	export interface Namespace_postFormProperties {

		/** If `true`, clients will not be permitted to use (including to attach, publish, or subscribe) any channels within this namespace unless they are identified, that is, authenticated using a client ID. See the <a href="https://knowledge.ably.com/authenticated-and-identified-clients">Ably Knowledge base</a> for more details. */
		authenticated: FormControl<boolean | null | undefined>,

		/**
		 * The namespace or channel name that the channel rule will apply to. For example, if you specify `namespace` the namespace will be set to `namespace` and will match with channels `namespace:*` and `namespace`.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** If `true`, the last message published on a channel will be stored for 365 days. You can access the stored message only by using the channel rewind mechanism and attaching with rewind=1. Please note that for each message stored, an additional message is deducted from your monthly allocation. */
		persistLast: FormControl<boolean | null | undefined>,

		/** If `true`, all messages on a channel will be stored for 24 hours. You can access stored messages via the History API. Please note that for each message stored, an additional message is deducted from your monthly allocation. */
		persisted: FormControl<boolean | null | undefined>,

		/** If `true`, publishing messages with a push payload in the extras field is permitted and can trigger the delivery of a native push notification to registered devices for the channel. */
		pushEnabled: FormControl<boolean | null | undefined>,

		/** If `true`, only clients that are connected using TLS will be permitted to subscribe to any channels within this namespace. */
		tlsOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateNamespace_postFormGroup() {
		return new FormGroup<Namespace_postFormProperties>({
			authenticated: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			persistLast: new FormControl<boolean | null | undefined>(undefined),
			persisted: new FormControl<boolean | null | undefined>(undefined),
			pushEnabled: new FormControl<boolean | null | undefined>(undefined),
			tlsOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Namespace_response {

		/** If `true`, clients will not be permitted to use (including to attach, publish, or subscribe) any channels within this namespace unless they are identified, that is, authenticated using a client ID. See the <a href="https://knowledge.ably.com/authenticated-and-identified-clients">Ably knowledge base</a> for more details. */
		authenticated?: boolean | null;

		/** Unix timestamp representing the date and time of creation of the namespace. */
		created?: number | null;

		/** The namespace or channel name that the channel rule will apply to. For example, if you specify `namespace` the namespace will be set to `namespace` and will match with channels `namespace:*` and `namespace`. */
		id?: string | null;

		/** Unix timestamp representing the date and time of last modification of the namespace. */
		modified?: number | null;

		/** If `true`, the last message published on a channel will be stored for 365 days. You can access the stored message only by using the channel rewind mechanism and attaching with rewind=1. Please note that for each message stored, an additional message is deducted from your monthly allocation. */
		persistLast?: boolean | null;

		/** If `true`, all messages on a channel will be stored for 24 hours. You can access stored messages via the History API. Please note that for each message stored, an additional message is deducted from your monthly allocation. */
		persisted?: boolean | null;

		/** If `true`, publishing messages with a push payload in the extras field is permitted and can trigger the delivery of a native push notification to registered devices for the channel. */
		pushEnabled?: boolean | null;

		/** If `true`, only clients that are connected using TLS will be permitted to subscribe to any channels within this namespace. */
		tlsOnly?: boolean | null;
	}
	export interface Namespace_responseFormProperties {

		/** If `true`, clients will not be permitted to use (including to attach, publish, or subscribe) any channels within this namespace unless they are identified, that is, authenticated using a client ID. See the <a href="https://knowledge.ably.com/authenticated-and-identified-clients">Ably knowledge base</a> for more details. */
		authenticated: FormControl<boolean | null | undefined>,

		/** Unix timestamp representing the date and time of creation of the namespace. */
		created: FormControl<number | null | undefined>,

		/** The namespace or channel name that the channel rule will apply to. For example, if you specify `namespace` the namespace will be set to `namespace` and will match with channels `namespace:*` and `namespace`. */
		id: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of last modification of the namespace. */
		modified: FormControl<number | null | undefined>,

		/** If `true`, the last message published on a channel will be stored for 365 days. You can access the stored message only by using the channel rewind mechanism and attaching with rewind=1. Please note that for each message stored, an additional message is deducted from your monthly allocation. */
		persistLast: FormControl<boolean | null | undefined>,

		/** If `true`, all messages on a channel will be stored for 24 hours. You can access stored messages via the History API. Please note that for each message stored, an additional message is deducted from your monthly allocation. */
		persisted: FormControl<boolean | null | undefined>,

		/** If `true`, publishing messages with a push payload in the extras field is permitted and can trigger the delivery of a native push notification to registered devices for the channel. */
		pushEnabled: FormControl<boolean | null | undefined>,

		/** If `true`, only clients that are connected using TLS will be permitted to subscribe to any channels within this namespace. */
		tlsOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateNamespace_responseFormGroup() {
		return new FormGroup<Namespace_responseFormProperties>({
			authenticated: new FormControl<boolean | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			persistLast: new FormControl<boolean | null | undefined>(undefined),
			persisted: new FormControl<boolean | null | undefined>(undefined),
			pushEnabled: new FormControl<boolean | null | undefined>(undefined),
			tlsOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Queue {

		/**
		 * Message limit in number of messages.
		 * Required
		 */
		maxLength: number;

		/**
		 * A friendly name for your queue.
		 * Required
		 */
		name: string;

		/**
		 * The data center region. US East (Virginia) or EU West (Ireland). Values are `us-east-1-a` or `eu-west-1-a`.
		 * Required
		 */
		region: string;

		/**
		 * TTL in minutes.
		 * Required
		 */
		ttl: number;
	}
	export interface QueueFormProperties {

		/**
		 * Message limit in number of messages.
		 * Required
		 */
		maxLength: FormControl<number | null | undefined>,

		/**
		 * A friendly name for your queue.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The data center region. US East (Virginia) or EU West (Ireland). Values are `us-east-1-a` or `eu-west-1-a`.
		 * Required
		 */
		region: FormControl<string | null | undefined>,

		/**
		 * TTL in minutes.
		 * Required
		 */
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateQueueFormGroup() {
		return new FormGroup<QueueFormProperties>({
			maxLength: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ttl: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Queue_response {
		amqp?: Queue_responseAmqp;

		/** The Ably application ID. */
		appId?: string | null;

		/** A boolean that indicates whether this is a dead letter queue or not. */
		deadletter?: boolean | null;
		deadletterId?: string | null;

		/** The ID of the Ably queue */
		id?: string | null;

		/** Message limit in number of messages. */
		maxLength?: number | null;

		/** Details of messages in the queue. */
		messages?: Queue_responseMessages;

		/** The friendly name of the queue. */
		name?: string | null;

		/** The data center region for the queue. */
		region?: string | null;

		/** The current state of the queue. */
		state?: string | null;
		stats?: Queue_responseStats;
		stomp?: Queue_responseStomp;

		/** TTL in minutes. */
		ttl?: number | null;
	}
	export interface Queue_responseFormProperties {

		/** The Ably application ID. */
		appId: FormControl<string | null | undefined>,

		/** A boolean that indicates whether this is a dead letter queue or not. */
		deadletter: FormControl<boolean | null | undefined>,
		deadletterId: FormControl<string | null | undefined>,

		/** The ID of the Ably queue */
		id: FormControl<string | null | undefined>,

		/** Message limit in number of messages. */
		maxLength: FormControl<number | null | undefined>,

		/** The friendly name of the queue. */
		name: FormControl<string | null | undefined>,

		/** The data center region for the queue. */
		region: FormControl<string | null | undefined>,

		/** The current state of the queue. */
		state: FormControl<string | null | undefined>,

		/** TTL in minutes. */
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateQueue_responseFormGroup() {
		return new FormGroup<Queue_responseFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			deadletter: new FormControl<boolean | null | undefined>(undefined),
			deadletterId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			maxLength: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Queue_responseAmqp {

		/** Name of the Ably queue. */
		queueName?: string | null;

		/** URI for the AMQP queue interface. */
		uri?: string | null;
	}
	export interface Queue_responseAmqpFormProperties {

		/** Name of the Ably queue. */
		queueName: FormControl<string | null | undefined>,

		/** URI for the AMQP queue interface. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateQueue_responseAmqpFormGroup() {
		return new FormGroup<Queue_responseAmqpFormProperties>({
			queueName: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Queue_responseMessages {

		/** The number of ready messages in the queue. */
		ready?: number | null;

		/** The total number of messages in the queue. */
		total?: number | null;

		/** The number of unacknowledged messages in the queue. */
		unacknowledged?: number | null;
	}
	export interface Queue_responseMessagesFormProperties {

		/** The number of ready messages in the queue. */
		ready: FormControl<number | null | undefined>,

		/** The total number of messages in the queue. */
		total: FormControl<number | null | undefined>,

		/** The number of unacknowledged messages in the queue. */
		unacknowledged: FormControl<number | null | undefined>,
	}
	export function CreateQueue_responseMessagesFormGroup() {
		return new FormGroup<Queue_responseMessagesFormProperties>({
			ready: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			unacknowledged: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Queue_responseStats {

		/** The rate at which messages are acknowledged. Rate is messages per minute. */
		acknowledgementRate?: number | null;

		/** The rate at which messages are delivered from the queue. Rate is messages per minute. */
		deliveryRate?: number | null;

		/** The rate at which messages are published to the queue. Rate is messages per minute. */
		publishRate?: number | null;
	}
	export interface Queue_responseStatsFormProperties {

		/** The rate at which messages are acknowledged. Rate is messages per minute. */
		acknowledgementRate: FormControl<number | null | undefined>,

		/** The rate at which messages are delivered from the queue. Rate is messages per minute. */
		deliveryRate: FormControl<number | null | undefined>,

		/** The rate at which messages are published to the queue. Rate is messages per minute. */
		publishRate: FormControl<number | null | undefined>,
	}
	export function CreateQueue_responseStatsFormGroup() {
		return new FormGroup<Queue_responseStatsFormProperties>({
			acknowledgementRate: new FormControl<number | null | undefined>(undefined),
			deliveryRate: new FormControl<number | null | undefined>(undefined),
			publishRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Queue_responseStomp {

		/** Destination queue. */
		destination?: string | null;

		/** The host type for the queue. */
		host?: string | null;

		/** URI for the STOMP queue interface. */
		uri?: string | null;
	}
	export interface Queue_responseStompFormProperties {

		/** Destination queue. */
		destination: FormControl<string | null | undefined>,

		/** The host type for the queue. */
		host: FormControl<string | null | undefined>,

		/** URI for the STOMP queue interface. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateQueue_responseStompFormGroup() {
		return new FormGroup<Queue_responseStompFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Rule_attributes {

		/** The Ably application ID. */
		appId?: string | null;

		/** Unix timestamp representing the date and time of creation of the rule. */
		created?: number | null;

		/** The rule ID. */
		id?: string | null;

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified?: number | null;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version?: string | null;
	}
	export interface Rule_attributesFormProperties {

		/** The Ably application ID. */
		appId: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of creation of the rule. */
		created: FormControl<number | null | undefined>,

		/** The rule ID. */
		id: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified: FormControl<number | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateRule_attributesFormGroup() {
		return new FormGroup<Rule_attributesFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Rule_patch {
	}
	export interface Rule_patchFormProperties {
	}
	export function CreateRule_patchFormGroup() {
		return new FormGroup<Rule_patchFormProperties>({
		});

	}

	export interface Rule_post {
	}
	export interface Rule_postFormProperties {
	}
	export function CreateRule_postFormGroup() {
		return new FormGroup<Rule_postFormProperties>({
		});

	}

	export interface Rule_response {
	}
	export interface Rule_responseFormProperties {
	}
	export function CreateRule_responseFormGroup() {
		return new FormGroup<Rule_responseFormProperties>({
		});

	}

	export interface Rule_source_patch {

		/** This field allows you to filter your rule based on a regular expression that is matched against the complete channel name. Leave this empty if you want the rule to apply to all channels. */
		channelFilter?: string | null;

		/** The type `channel.message` delivers all messages published on a channel. The type `channel.presence` delivers all enter, update and leave events for members present on a channel. The type `channel.lifecycle` events for this rule type are currently not supported. Get in touch (https://ably.com/contact) if you need this feature. The type `channel.occupancy` delivers all occupancy events for the channel. */
		type?: Rule_sourceType | null;
	}
	export interface Rule_source_patchFormProperties {

		/** This field allows you to filter your rule based on a regular expression that is matched against the complete channel name. Leave this empty if you want the rule to apply to all channels. */
		channelFilter: FormControl<string | null | undefined>,

		/** The type `channel.message` delivers all messages published on a channel. The type `channel.presence` delivers all enter, update and leave events for members present on a channel. The type `channel.lifecycle` events for this rule type are currently not supported. Get in touch (https://ably.com/contact) if you need this feature. The type `channel.occupancy` delivers all occupancy events for the channel. */
		type: FormControl<Rule_sourceType | null | undefined>,
	}
	export function CreateRule_source_patchFormGroup() {
		return new FormGroup<Rule_source_patchFormProperties>({
			channelFilter: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<Rule_sourceType | null | undefined>(undefined),
		});

	}

	export interface Unsupported_rule_response {
		_links?: string | null;

		/** The Ably application ID. */
		appId?: string | null;

		/** Unix timestamp representing the date and time of creation of the rule. */
		created?: number | null;

		/** The rule ID. */
		id?: string | null;

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified?: number | null;

		/**
		 * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.
		 * Required
		 */
		requestMode: Azure_function_rule_patchRequestMode;

		/**
		 * This rule type is currently unsupported.
		 * Required
		 */
		ruleType: Unsupported_rule_responseRuleType;

		/** Required */
		source: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Required */
		target: Unsupported_rule_responseTarget;

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version?: string | null;
	}
	export interface Unsupported_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,

		/** The Ably application ID. */
		appId: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of creation of the rule. */
		created: FormControl<number | null | undefined>,

		/** The rule ID. */
		id: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified: FormControl<number | null | undefined>,

		/**
		 * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Azure_function_rule_patchRequestMode | null | undefined>,

		/**
		 * This rule type is currently unsupported.
		 * Required
		 */
		ruleType: FormControl<Unsupported_rule_responseRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateUnsupported_rule_responseFormGroup() {
		return new FormGroup<Unsupported_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<Azure_function_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Unsupported_rule_responseRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Unsupported_rule_responseRuleType { unsupported = 0 }

	export interface Unsupported_rule_responseTarget {

		/** Required */
		url: string;
	}
	export interface Unsupported_rule_responseTargetFormProperties {

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateUnsupported_rule_responseTargetFormGroup() {
		return new FormGroup<Unsupported_rule_responseTargetFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Zapier_rule_patch {

		/** This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>. */
		requestMode?: Azure_function_rule_patchRequestMode | null;

		/** The type of rule. In this case Zapier. See the <a href="https://ably.com/integrations">documentation</a> for further information. */
		ruleType?: Zapier_rule_patchRuleType | null;
		source?: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;
		target?: Zapier_rule_patchTarget;
	}
	export interface Zapier_rule_patchFormProperties {

		/** This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>. */
		requestMode: FormControl<Azure_function_rule_patchRequestMode | null | undefined>,

		/** The type of rule. In this case Zapier. See the <a href="https://ably.com/integrations">documentation</a> for further information. */
		ruleType: FormControl<Zapier_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,
	}
	export function CreateZapier_rule_patchFormGroup() {
		return new FormGroup<Zapier_rule_patchFormProperties>({
			requestMode: new FormControl<Azure_function_rule_patchRequestMode | null | undefined>(undefined),
			ruleType: new FormControl<Zapier_rule_patchRuleType | null | undefined>(undefined),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
		});

	}

	export enum Zapier_rule_patchRuleType { 'http/zapier' = 0 }

	export interface Zapier_rule_patchTarget {

		/** If you have additional information to send, you'll need to include the relevant headers. */
		Zapier_rule_patchTargetHeaders?: Array<Zapier_rule_patchTargetHeaders>;

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId?: string | null;
		url?: string | null;
	}
	export interface Zapier_rule_patchTargetFormProperties {

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateZapier_rule_patchTargetFormGroup() {
		return new FormGroup<Zapier_rule_patchTargetFormProperties>({
			signingKeyId: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Zapier_rule_patchTargetHeaders {

		/** The name of the header. */
		name?: string | null;

		/** The value of the header. */
		value?: string | null;
	}
	export interface Zapier_rule_patchTargetHeadersFormProperties {

		/** The name of the header. */
		name: FormControl<string | null | undefined>,

		/** The value of the header. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateZapier_rule_patchTargetHeadersFormGroup() {
		return new FormGroup<Zapier_rule_patchTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Zapier_rule_post {

		/**
		 * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.
		 * Required
		 */
		requestMode: Azure_function_rule_patchRequestMode;

		/**
		 * The type of rule. In this case Zapier. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: Zapier_rule_patchRuleType;

		/** Required */
		source: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Required */
		target: Zapier_rule_postTarget;
	}
	export interface Zapier_rule_postFormProperties {

		/**
		 * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Azure_function_rule_patchRequestMode | null | undefined>,

		/**
		 * The type of rule. In this case Zapier. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: FormControl<Zapier_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,
	}
	export function CreateZapier_rule_postFormGroup() {
		return new FormGroup<Zapier_rule_postFormProperties>({
			requestMode: new FormControl<Azure_function_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Zapier_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
		});

	}

	export interface Zapier_rule_postTarget {

		/** If you have additional information to send, you'll need to include the relevant headers. */
		Zapier_rule_postTargetHeaders?: Array<Zapier_rule_postTargetHeaders>;

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId?: string | null;

		/** Required */
		url: string;
	}
	export interface Zapier_rule_postTargetFormProperties {

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateZapier_rule_postTargetFormGroup() {
		return new FormGroup<Zapier_rule_postTargetFormProperties>({
			signingKeyId: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Zapier_rule_postTargetHeaders {

		/** The name of the header. */
		name?: string | null;

		/** The value of the header. */
		value?: string | null;
	}
	export interface Zapier_rule_postTargetHeadersFormProperties {

		/** The name of the header. */
		name: FormControl<string | null | undefined>,

		/** The value of the header. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateZapier_rule_postTargetHeadersFormGroup() {
		return new FormGroup<Zapier_rule_postTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Zapier_rule_response {
		_links?: string | null;

		/** The Ably application ID. */
		appId?: string | null;

		/** Unix timestamp representing the date and time of creation of the rule. */
		created?: number | null;

		/** The rule ID. */
		id?: string | null;

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified?: number | null;

		/**
		 * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.
		 * Required
		 */
		requestMode: Azure_function_rule_patchRequestMode;

		/**
		 * The type of rule. In this case Zapier. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: Zapier_rule_patchRuleType;

		/** Required */
		source: Rule_source;

		/** The status of the rule. Rules can be enabled or disabled. */
		status?: Amqp_external_rule_patchStatus | null;

		/** Required */
		target: Zapier_rule_responseTarget;

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version?: string | null;
	}
	export interface Zapier_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,

		/** The Ably application ID. */
		appId: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of creation of the rule. */
		created: FormControl<number | null | undefined>,

		/** The rule ID. */
		id: FormControl<string | null | undefined>,

		/** Unix timestamp representing the date and time of last modification of the rule. */
		modified: FormControl<number | null | undefined>,

		/**
		 * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule. Batch Request mode rolls up multiple events into the same request. You can read more about the difference between single and batched events in the Ably <a href="https://ably.com/documentation/general/events#batching">documentation</a>.
		 * Required
		 */
		requestMode: FormControl<Azure_function_rule_patchRequestMode | null | undefined>,

		/**
		 * The type of rule. In this case Zapier. See the <a href="https://ably.com/integrations">documentation</a> for further information.
		 * Required
		 */
		ruleType: FormControl<Zapier_rule_patchRuleType | null | undefined>,

		/** The status of the rule. Rules can be enabled or disabled. */
		status: FormControl<Amqp_external_rule_patchStatus | null | undefined>,

		/** API version. Events and the format of their payloads are versioned. Please see the <a href="https://ably.com/documentation/general/events">Events documentation</a>. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateZapier_rule_responseFormGroup() {
		return new FormGroup<Zapier_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<Azure_function_rule_patchRequestMode | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Zapier_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Amqp_external_rule_patchStatus | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Zapier_rule_responseTarget {

		/** If you have additional information to send, you'll need to include the relevant headers. */
		Zapier_rule_responseTargetHeaders?: Array<Zapier_rule_responseTargetHeaders>;

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId?: string | null;

		/** Required */
		url: string;
	}
	export interface Zapier_rule_responseTargetFormProperties {

		/** The signing key ID for use in `batch` mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the <a href="https://ably.com/documentation/general/events#security">webhook security docs</a> for more information. */
		signingKeyId: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateZapier_rule_responseTargetFormGroup() {
		return new FormGroup<Zapier_rule_responseTargetFormProperties>({
			signingKeyId: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Zapier_rule_responseTargetHeaders {

		/** The name of the header. */
		name?: string | null;

		/** The value of the header. */
		value?: string | null;
	}
	export interface Zapier_rule_responseTargetHeadersFormProperties {

		/** The name of the header. */
		name: FormControl<string | null | undefined>,

		/** The value of the header. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateZapier_rule_responseTargetHeadersFormGroup() {
		return new FormGroup<Zapier_rule_responseTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists apps
		 * List all applications for the specified account ID.
		 * Get accounts/{account_id}/apps
		 * @param {string} account_id The account ID for which to retrieve the associated applications.
		 * @return {Array<App_response>} List of apps for the specified account are returned
		 */
		AppsGetByAccount_id(account_id: string): Observable<Array<App_response>> {
			return this.http.get<Array<App_response>>(this.baseUri + 'accounts/' + (account_id == null ? '' : encodeURIComponent(account_id)) + '/apps', {});
		}

		/**
		 * Creates an app
		 * Creates an application with the specified properties.
		 * Post accounts/{account_id}/apps
		 * @param {string} account_id The account ID of the account in which to create the application.
		 * @return {void} 
		 */
		AppsPostByAccount_id(account_id: string, requestBody: App_post): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts/' + (account_id == null ? '' : encodeURIComponent(account_id)) + '/apps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists app keys
		 * Lists the API keys associated with the application ID.
		 * Get apps/{app_id}/keys
		 * @param {string} app_id The application ID.
		 * @return {Array<Key_response>} Key list
		 */
		KeysGetByApp_id(app_id: string): Observable<Array<Key_response>> {
			return this.http.get<Array<Key_response>>(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/keys', {});
		}

		/**
		 * Creates a key
		 * Creates an API key for the application specified.
		 * Post apps/{app_id}/keys
		 * @param {string} app_id The application ID.
		 * @return {void} 
		 */
		KeysPostByApp_id(app_id: string, requestBody: Key_post): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/keys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a key
		 * Update the API key with the specified key ID, for the application with the specified application ID.
		 * Patch apps/{app_id}/keys/{key_id}
		 * @param {string} app_id The application ID.
		 * @param {string} key_id The API key ID.
		 * @return {Key_response} Key updated
		 */
		KeysPatchByApp_idAndKey_id(app_id: string, key_id: string, requestBody: Key_patch): Observable<Key_response> {
			return this.http.patch<Key_response>(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/keys/' + (key_id == null ? '' : encodeURIComponent(key_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Revokes a key
		 * Revokes the API key with the specified ID, with the Application ID. This deletes the key.
		 * Post apps/{app_id}/keys/{key_id}/revoke
		 * @param {string} app_id The application ID.
		 * @param {string} key_id The key ID.
		 * @return {void} Key revoked
		 */
		KeysPostByApp_idAndKey_id(app_id: string, key_id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/keys/' + (key_id == null ? '' : encodeURIComponent(key_id)) + '/revoke', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists namespaces
		 * List the namespaces for the specified application ID.
		 * Get apps/{app_id}/namespaces
		 * @param {string} app_id The application ID.
		 * @return {Array<Namespace_response>} Namespace list
		 */
		NamespacesGetByApp_id(app_id: string): Observable<Array<Namespace_response>> {
			return this.http.get<Array<Namespace_response>>(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/namespaces', {});
		}

		/**
		 * Creates a namespace
		 * Creates a namespace for the specified application ID.
		 * Post apps/{app_id}/namespaces
		 * @param {string} app_id The application ID.
		 * @return {void} 
		 */
		NamespacesPostByApp_id(app_id: string, requestBody: Namespace_post): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/namespaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a namespace
		 * Deletes the namespace with the specified ID, for the specified application ID.
		 * Delete apps/{app_id}/namespaces/{namespace_id}
		 * @param {string} app_id The application ID.
		 * @param {string} namespace_id The namespace ID.
		 * @return {void} 
		 */
		NamespacesDeleteByApp_idAndNamespace_id(app_id: string, namespace_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/namespaces/' + (namespace_id == null ? '' : encodeURIComponent(namespace_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a namespace
		 * Updates the namespace with the specified ID, for the application with the specified application ID.
		 * Patch apps/{app_id}/namespaces/{namespace_id}
		 * @param {string} app_id The application ID.
		 * @param {string} namespace_id The namespace ID.
		 * @return {Namespace_response} Namespace updated
		 */
		NamespacesPatchByApp_idAndNamespace_id(app_id: string, namespace_id: string, requestBody: Namespace_patch): Observable<Namespace_response> {
			return this.http.patch<Namespace_response>(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/namespaces/' + (namespace_id == null ? '' : encodeURIComponent(namespace_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists queues
		 * Lists the queues associated with the specified application ID.
		 * Get apps/{app_id}/queues
		 * @param {string} app_id The application ID.
		 * @return {Array<Queue_response>} Queue list
		 */
		QueuesGetByApp_id(app_id: string): Observable<Array<Queue_response>> {
			return this.http.get<Array<Queue_response>>(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/queues', {});
		}

		/**
		 * Creates a queue
		 * Creates a queue for the application specified by application ID. The properties for the queue to be created are specified in the request body.
		 * Post apps/{app_id}/queues
		 * @param {string} app_id The application ID.
		 * @return {void} 
		 */
		QueuesPostByApp_id(app_id: string, requestBody: Queue): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/queues', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a queue
		 * Delete the queue with the specified queue name, from the application with the specified application ID.
		 * Delete apps/{app_id}/queues/{queue_id}
		 * @param {string} app_id The application ID.
		 * @param {string} queue_id The queue ID.
		 * @return {void} 
		 */
		QueuesDeleteByApp_idAndQueue_id(app_id: string, queue_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/queues/' + (queue_id == null ? '' : encodeURIComponent(queue_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists Reactor rules
		 * Lists the rules for the application specified by the application ID.
		 * Get apps/{app_id}/rules
		 * @param {string} app_id The application ID.
		 * @return {Array<Rule_response>} Reactor rule list
		 */
		RulesGetByApp_id(app_id: string): Observable<Array<Rule_response>> {
			return this.http.get<Array<Rule_response>>(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/rules', {});
		}

		/**
		 * Creates a Reactor rule
		 * Creates a rule for the application with the specified application ID.
		 * Post apps/{app_id}/rules
		 * @param {string} app_id The application ID.
		 * @param {Rule_post} requestBody The rule properties.
		 * @return {void} 
		 */
		RulesPostByApp_id(app_id: string, requestBody: Rule_post): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/rules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a Reactor rule
		 * Delete apps/{app_id}/rules/{rule_id}
		 * @param {string} app_id The application ID.
		 * @param {string} rule_id The rule ID.
		 * @return {void} 
		 */
		RulesDeleteByApp_idAndRule_id(app_id: string, rule_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/rules/' + (rule_id == null ? '' : encodeURIComponent(rule_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a reactor rule by rule ID
		 * Returns the rule specified by the rule ID, for the application specified by application ID.
		 * Get apps/{app_id}/rules/{rule_id}
		 * @param {string} app_id The application ID.
		 * @param {string} rule_id The rule ID.
		 * @return {Rule_response} Reactor rule
		 */
		RulesGetByApp_idAndRule_id(app_id: string, rule_id: string): Observable<Rule_response> {
			return this.http.get<Rule_response>(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/rules/' + (rule_id == null ? '' : encodeURIComponent(rule_id)), {});
		}

		/**
		 * Updates a Reactor rule
		 * Patch apps/{app_id}/rules/{rule_id}
		 * @param {string} app_id The application ID.
		 * @param {string} rule_id The rule ID.
		 * @param {Rule_patch} requestBody Properties for the rule.
		 * @return {Rule_response} Reactor rule updated
		 */
		RulesPatchByApp_idAndRule_id(app_id: string, rule_id: string, requestBody: Rule_patch): Observable<Rule_response> {
			return this.http.patch<Rule_response>(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/rules/' + (rule_id == null ? '' : encodeURIComponent(rule_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an app
		 * Deletes the application with the specified application ID.
		 * Delete apps/{id}
		 * @param {string} id The ID of the application to be deleted.
		 * @return {void} 
		 */
		AppsDeleteById(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'apps/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an app
		 * Updates the application with the specified application ID.
		 * Patch apps/{id}
		 * @param {string} id The ID of application to be updated.
		 * @return {App_response} App updated
		 */
		AppsPatchById(id: string, requestBody: App_patch): Observable<App_response> {
			return this.http.patch<App_response>(this.baseUri + 'apps/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get token details
		 * Get me
		 * @return {Me} Token details
		 */
		TokensGet(): Observable<Me> {
			return this.http.get<Me>(this.baseUri + 'me', {});
		}
	}

}

