import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Amqp_external_rule_patch {
		requestMode?: string | null;

		/** Required */
		ruleType: Amqp_external_rule_patchRuleType;
		source?: Rule_source_patch;
		status?: string | null;
		target?: Amqp_external_rule_patchTarget;
	}
	export interface Amqp_external_rule_patchFormProperties {
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Amqp_external_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_external_rule_patchFormGroup() {
		return new FormGroup<Amqp_external_rule_patchFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined),
			ruleType: new FormControl<Amqp_external_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Amqp_external_rule_patchRuleType { 'amqp/external' = 'amqp/external' }

	export interface Rule_source_patch {
		channelFilter?: string | null;
		type?: string | null;
	}
	export interface Rule_source_patchFormProperties {
		channelFilter: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRule_source_patchFormGroup() {
		return new FormGroup<Rule_source_patchFormProperties>({
			channelFilter: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Amqp_external_rule_patchTarget {
		enveloped?: boolean | null;
		exchange?: string | null;
		format?: string | null;
		Amqp_external_rule_patchTargetHeaders?: Array<Amqp_external_rule_patchTargetHeaders>;
		mandatoryRoute?: boolean | null;
		messageTtl?: number | null;
		persistentMessages?: boolean | null;
		routingKey?: string | null;
		url?: string | null;
	}
	export interface Amqp_external_rule_patchTargetFormProperties {
		enveloped: FormControl<boolean | null | undefined>,
		exchange: FormControl<string | null | undefined>,
		format: FormControl<string | null | undefined>,
		mandatoryRoute: FormControl<boolean | null | undefined>,
		messageTtl: FormControl<number | null | undefined>,
		persistentMessages: FormControl<boolean | null | undefined>,
		routingKey: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_external_rule_patchTargetFormGroup() {
		return new FormGroup<Amqp_external_rule_patchTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			exchange: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			mandatoryRoute: new FormControl<boolean | null | undefined>(undefined),
			messageTtl: new FormControl<number | null | undefined>(undefined),
			persistentMessages: new FormControl<boolean | null | undefined>(undefined),
			routingKey: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Amqp_external_rule_patchTargetHeaders {
		name?: string | null;
		value?: string | null;
	}
	export interface Amqp_external_rule_patchTargetHeadersFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_external_rule_patchTargetHeadersFormGroup() {
		return new FormGroup<Amqp_external_rule_patchTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Amqp_external_rule_post {

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Amqp_external_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Amqp_external_rule_postTarget;
	}
	export interface Amqp_external_rule_postFormProperties {

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Amqp_external_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_external_rule_postFormGroup() {
		return new FormGroup<Amqp_external_rule_postFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Amqp_external_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Rule_source {

		/** Required */
		channelFilter: string;

		/** Required */
		type: string;
	}
	export interface Rule_sourceFormProperties {

		/** Required */
		channelFilter: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRule_sourceFormGroup() {
		return new FormGroup<Rule_sourceFormProperties>({
			channelFilter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Amqp_external_rule_postTarget {
		enveloped?: boolean | null;
		exchange?: string | null;
		format?: string | null;
		Amqp_external_rule_postTargetHeaders?: Array<Amqp_external_rule_postTargetHeaders>;

		/** Required */
		mandatoryRoute: boolean;
		messageTtl?: number | null;

		/** Required */
		persistentMessages: boolean;

		/** Required */
		routingKey: string;

		/** Required */
		url: string;
	}
	export interface Amqp_external_rule_postTargetFormProperties {
		enveloped: FormControl<boolean | null | undefined>,
		exchange: FormControl<string | null | undefined>,
		format: FormControl<string | null | undefined>,

		/** Required */
		mandatoryRoute: FormControl<boolean | null | undefined>,
		messageTtl: FormControl<number | null | undefined>,

		/** Required */
		persistentMessages: FormControl<boolean | null | undefined>,

		/** Required */
		routingKey: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_external_rule_postTargetFormGroup() {
		return new FormGroup<Amqp_external_rule_postTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			exchange: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			mandatoryRoute: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			messageTtl: new FormControl<number | null | undefined>(undefined),
			persistentMessages: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			routingKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Amqp_external_rule_postTargetHeaders {
		name?: string | null;
		value?: string | null;
	}
	export interface Amqp_external_rule_postTargetHeadersFormProperties {
		name: FormControl<string | null | undefined>,
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
		appId?: string | null;
		created?: number | null;
		id?: string | null;
		modified?: number | null;

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Amqp_external_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Amqp_external_rule_responseTarget;
		version?: string | null;
	}
	export interface Amqp_external_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,
		appId: FormControl<string | null | undefined>,
		created: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		modified: FormControl<number | null | undefined>,

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Amqp_external_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_external_rule_responseFormGroup() {
		return new FormGroup<Amqp_external_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Amqp_external_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Amqp_external_rule_responseTarget {
		enveloped?: boolean | null;
		exchange?: string | null;
		format?: string | null;
		Amqp_external_rule_responseTargetHeaders?: Array<Amqp_external_rule_responseTargetHeaders>;

		/** Required */
		mandatoryRoute: boolean;
		messageTtl?: number | null;

		/** Required */
		persistentMessages: boolean;

		/** Required */
		routingKey: string;

		/** Required */
		url: string;
	}
	export interface Amqp_external_rule_responseTargetFormProperties {
		enveloped: FormControl<boolean | null | undefined>,
		exchange: FormControl<string | null | undefined>,
		format: FormControl<string | null | undefined>,

		/** Required */
		mandatoryRoute: FormControl<boolean | null | undefined>,
		messageTtl: FormControl<number | null | undefined>,

		/** Required */
		persistentMessages: FormControl<boolean | null | undefined>,

		/** Required */
		routingKey: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_external_rule_responseTargetFormGroup() {
		return new FormGroup<Amqp_external_rule_responseTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			exchange: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			mandatoryRoute: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			messageTtl: new FormControl<number | null | undefined>(undefined),
			persistentMessages: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			routingKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Amqp_external_rule_responseTargetHeaders {
		name?: string | null;
		value?: string | null;
	}
	export interface Amqp_external_rule_responseTargetHeadersFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_external_rule_responseTargetHeadersFormGroup() {
		return new FormGroup<Amqp_external_rule_responseTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Amqp_rule_patch {
		requestMode?: string | null;

		/** Required */
		ruleType: Amqp_rule_patchRuleType;
		source?: Rule_source_patch;
		status?: string | null;
		target?: Amqp_rule_patchTarget;
	}
	export interface Amqp_rule_patchFormProperties {
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Amqp_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_rule_patchFormGroup() {
		return new FormGroup<Amqp_rule_patchFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined),
			ruleType: new FormControl<Amqp_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Amqp_rule_patchRuleType { amqp = 'amqp' }

	export interface Amqp_rule_patchTarget {
		enveloped?: boolean | null;
		format?: string | null;
		Amqp_rule_patchTargetHeaders?: Array<Amqp_rule_patchTargetHeaders>;
		queueId?: string | null;
	}
	export interface Amqp_rule_patchTargetFormProperties {
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
		name?: string | null;
		value?: string | null;
	}
	export interface Amqp_rule_patchTargetHeadersFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_rule_patchTargetHeadersFormGroup() {
		return new FormGroup<Amqp_rule_patchTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Amqp_rule_post {

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Amqp_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Amqp_rule_postTarget;
	}
	export interface Amqp_rule_postFormProperties {

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Amqp_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_rule_postFormGroup() {
		return new FormGroup<Amqp_rule_postFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Amqp_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Amqp_rule_postTarget {
		enveloped?: boolean | null;
		format?: string | null;
		Amqp_rule_postTargetHeaders?: Array<Amqp_rule_postTargetHeaders>;

		/** Required */
		queueId: string;
	}
	export interface Amqp_rule_postTargetFormProperties {
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
		name?: string | null;
		value?: string | null;
	}
	export interface Amqp_rule_postTargetHeadersFormProperties {
		name: FormControl<string | null | undefined>,
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
		appId?: string | null;
		created?: number | null;
		id?: string | null;
		modified?: number | null;

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Amqp_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Amqp_rule_responseTarget;
		version?: string | null;
	}
	export interface Amqp_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,
		appId: FormControl<string | null | undefined>,
		created: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		modified: FormControl<number | null | undefined>,

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Amqp_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_rule_responseFormGroup() {
		return new FormGroup<Amqp_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Amqp_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Amqp_rule_responseTarget {
		enveloped?: boolean | null;
		format?: string | null;
		Amqp_rule_responseTargetHeaders?: Array<Amqp_rule_responseTargetHeaders>;

		/** Required */
		queueId: string;
	}
	export interface Amqp_rule_responseTargetFormProperties {
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
		name?: string | null;
		value?: string | null;
	}
	export interface Amqp_rule_responseTargetHeadersFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateAmqp_rule_responseTargetHeadersFormGroup() {
		return new FormGroup<Amqp_rule_responseTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface App_patch {
		apnsCertificate?: string | null;
		apnsPrivateKey?: string | null;
		apnsUseSandboxEndpoint?: boolean | null;
		fcmKey?: string | null;
		name?: string | null;
		status?: string | null;
		tlsOnly?: boolean | null;
	}
	export interface App_patchFormProperties {
		apnsCertificate: FormControl<string | null | undefined>,
		apnsPrivateKey: FormControl<string | null | undefined>,
		apnsUseSandboxEndpoint: FormControl<boolean | null | undefined>,
		fcmKey: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		tlsOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateApp_patchFormGroup() {
		return new FormGroup<App_patchFormProperties>({
			apnsCertificate: new FormControl<string | null | undefined>(undefined),
			apnsPrivateKey: new FormControl<string | null | undefined>(undefined),
			apnsUseSandboxEndpoint: new FormControl<boolean | null | undefined>(undefined),
			fcmKey: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			tlsOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface App_pkcs12 {

		/** Required */
		p12File: string;

		/** Required */
		p12Pass: string;
	}
	export interface App_pkcs12FormProperties {

		/** Required */
		p12File: FormControl<string | null | undefined>,

		/** Required */
		p12Pass: FormControl<string | null | undefined>,
	}
	export function CreateApp_pkcs12FormGroup() {
		return new FormGroup<App_pkcs12FormProperties>({
			p12File: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			p12Pass: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface App_post {
		apnsCertificate?: string | null;
		apnsPrivateKey?: string | null;
		apnsUseSandboxEndpoint?: boolean | null;
		fcmKey?: string | null;

		/** Required */
		name: string;
		status?: string | null;
		tlsOnly?: boolean | null;
	}
	export interface App_postFormProperties {
		apnsCertificate: FormControl<string | null | undefined>,
		apnsPrivateKey: FormControl<string | null | undefined>,
		apnsUseSandboxEndpoint: FormControl<boolean | null | undefined>,
		fcmKey: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		tlsOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateApp_postFormGroup() {
		return new FormGroup<App_postFormProperties>({
			apnsCertificate: new FormControl<string | null | undefined>(undefined),
			apnsPrivateKey: new FormControl<string | null | undefined>(undefined),
			apnsUseSandboxEndpoint: new FormControl<boolean | null | undefined>(undefined),
			fcmKey: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
			tlsOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface App_response {
		_links?: string | null;
		accountId?: string | null;
		apnsUseSandboxEndpoint?: boolean | null;
		created?: number | null;
		id?: string | null;
		modified?: number | null;
		name?: string | null;
		status?: string | null;
		tlsOnly?: boolean | null;
	}
	export interface App_responseFormProperties {
		_links: FormControl<string | null | undefined>,
		accountId: FormControl<string | null | undefined>,
		apnsUseSandboxEndpoint: FormControl<boolean | null | undefined>,
		created: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		modified: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		tlsOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateApp_responseFormGroup() {
		return new FormGroup<App_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			accountId: new FormControl<string | null | undefined>(undefined),
			apnsUseSandboxEndpoint: new FormControl<boolean | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			tlsOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Aws_access_keys {

		/** Required */
		accessKeyId: string;
		authenticationMode?: Aws_access_keysAuthenticationMode | null;

		/** Required */
		secretAccessKey: string;
	}
	export interface Aws_access_keysFormProperties {

		/** Required */
		accessKeyId: FormControl<string | null | undefined>,
		authenticationMode: FormControl<Aws_access_keysAuthenticationMode | null | undefined>,

		/** Required */
		secretAccessKey: FormControl<string | null | undefined>,
	}
	export function CreateAws_access_keysFormGroup() {
		return new FormGroup<Aws_access_keysFormProperties>({
			accessKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authenticationMode: new FormControl<Aws_access_keysAuthenticationMode | null | undefined>(undefined),
			secretAccessKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Aws_access_keysAuthenticationMode { credentials = 'credentials' }

	export interface Aws_access_keys_response {
		accessKeyId?: string | null;
		authenticationMode?: Aws_access_keysAuthenticationMode | null;
	}
	export interface Aws_access_keys_responseFormProperties {
		accessKeyId: FormControl<string | null | undefined>,
		authenticationMode: FormControl<Aws_access_keysAuthenticationMode | null | undefined>,
	}
	export function CreateAws_access_keys_responseFormGroup() {
		return new FormGroup<Aws_access_keys_responseFormProperties>({
			accessKeyId: new FormControl<string | null | undefined>(undefined),
			authenticationMode: new FormControl<Aws_access_keysAuthenticationMode | null | undefined>(undefined),
		});

	}

	export interface Aws_assume_role {

		/** Required */
		assumeRoleArn: string;
		authenticationMode?: Aws_assume_roleAuthenticationMode | null;
	}
	export interface Aws_assume_roleFormProperties {

		/** Required */
		assumeRoleArn: FormControl<string | null | undefined>,
		authenticationMode: FormControl<Aws_assume_roleAuthenticationMode | null | undefined>,
	}
	export function CreateAws_assume_roleFormGroup() {
		return new FormGroup<Aws_assume_roleFormProperties>({
			assumeRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authenticationMode: new FormControl<Aws_assume_roleAuthenticationMode | null | undefined>(undefined),
		});

	}

	export enum Aws_assume_roleAuthenticationMode { assumeRole = 'assumeRole' }

	export interface Aws_kinesis_rule_patch {
		requestMode?: string | null;

		/** Required */
		ruleType: Aws_kinesis_rule_patchRuleType;
		source?: Rule_source_patch;
		status?: string | null;
		target?: Aws_kinesis_rule_patchTarget;
	}
	export interface Aws_kinesis_rule_patchFormProperties {
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Aws_kinesis_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateAws_kinesis_rule_patchFormGroup() {
		return new FormGroup<Aws_kinesis_rule_patchFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined),
			ruleType: new FormControl<Aws_kinesis_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Aws_kinesis_rule_patchRuleType { 'aws/kinesis' = 'aws/kinesis' }

	export interface Aws_kinesis_rule_patchTarget {
		authentication?: Aws_access_keys;
		enveloped?: boolean | null;
		format?: string | null;
		partitionKey?: string | null;
		region?: string | null;
		streamName?: string | null;
	}
	export interface Aws_kinesis_rule_patchTargetFormProperties {
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,
		partitionKey: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
		streamName: FormControl<string | null | undefined>,
	}
	export function CreateAws_kinesis_rule_patchTargetFormGroup() {
		return new FormGroup<Aws_kinesis_rule_patchTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			partitionKey: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			streamName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Aws_kinesis_rule_post {

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Aws_kinesis_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Aws_kinesis_rule_postTarget;
	}
	export interface Aws_kinesis_rule_postFormProperties {

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Aws_kinesis_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateAws_kinesis_rule_postFormGroup() {
		return new FormGroup<Aws_kinesis_rule_postFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Aws_kinesis_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Aws_kinesis_rule_postTarget {

		/** Required */
		authentication: Aws_access_keys;
		enveloped?: boolean | null;

		/** Required */
		format: string;

		/** Required */
		partitionKey: string;

		/** Required */
		region: string;

		/** Required */
		streamName: string;
	}
	export interface Aws_kinesis_rule_postTargetFormProperties {
		enveloped: FormControl<boolean | null | undefined>,

		/** Required */
		format: FormControl<string | null | undefined>,

		/** Required */
		partitionKey: FormControl<string | null | undefined>,

		/** Required */
		region: FormControl<string | null | undefined>,

		/** Required */
		streamName: FormControl<string | null | undefined>,
	}
	export function CreateAws_kinesis_rule_postTargetFormGroup() {
		return new FormGroup<Aws_kinesis_rule_postTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			partitionKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			streamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Aws_kinesis_rule_response {
		_links?: string | null;
		appId?: string | null;
		created?: number | null;
		id?: string | null;
		modified?: number | null;

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Aws_kinesis_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Aws_kinesis_rule_responseTarget;
		version?: string | null;
	}
	export interface Aws_kinesis_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,
		appId: FormControl<string | null | undefined>,
		created: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		modified: FormControl<number | null | undefined>,

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Aws_kinesis_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateAws_kinesis_rule_responseFormGroup() {
		return new FormGroup<Aws_kinesis_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Aws_kinesis_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Aws_kinesis_rule_responseTarget {

		/** Required */
		authentication: Aws_access_keys_response;
		enveloped?: boolean | null;

		/** Required */
		format: string;

		/** Required */
		partitionKey: string;

		/** Required */
		region: string;

		/** Required */
		streamName: string;
	}
	export interface Aws_kinesis_rule_responseTargetFormProperties {
		enveloped: FormControl<boolean | null | undefined>,

		/** Required */
		format: FormControl<string | null | undefined>,

		/** Required */
		partitionKey: FormControl<string | null | undefined>,

		/** Required */
		region: FormControl<string | null | undefined>,

		/** Required */
		streamName: FormControl<string | null | undefined>,
	}
	export function CreateAws_kinesis_rule_responseTargetFormGroup() {
		return new FormGroup<Aws_kinesis_rule_responseTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			partitionKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			streamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Aws_lambda_rule_patch {
		requestMode?: string | null;

		/** Required */
		ruleType: Aws_lambda_rule_patchRuleType;
		source?: Rule_source_patch;
		status?: string | null;
		target?: Aws_lambda_rule_patchTarget;
	}
	export interface Aws_lambda_rule_patchFormProperties {
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Aws_lambda_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateAws_lambda_rule_patchFormGroup() {
		return new FormGroup<Aws_lambda_rule_patchFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined),
			ruleType: new FormControl<Aws_lambda_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Aws_lambda_rule_patchRuleType { 'aws/lambda' = 'aws/lambda' }

	export interface Aws_lambda_rule_patchTarget {

		/** Required */
		authentication: Aws_access_keys;
		enveloped?: boolean | null;

		/** Required */
		functionName: string;

		/** Required */
		region: string;
	}
	export interface Aws_lambda_rule_patchTargetFormProperties {
		enveloped: FormControl<boolean | null | undefined>,

		/** Required */
		functionName: FormControl<string | null | undefined>,

		/** Required */
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

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Aws_lambda_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Aws_lambda_rule_postTarget;
	}
	export interface Aws_lambda_rule_postFormProperties {

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Aws_lambda_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateAws_lambda_rule_postFormGroup() {
		return new FormGroup<Aws_lambda_rule_postFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Aws_lambda_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Aws_lambda_rule_postTarget {

		/** Required */
		authentication: Aws_access_keys;
		enveloped?: boolean | null;

		/** Required */
		functionName: string;

		/** Required */
		region: string;
	}
	export interface Aws_lambda_rule_postTargetFormProperties {
		enveloped: FormControl<boolean | null | undefined>,

		/** Required */
		functionName: FormControl<string | null | undefined>,

		/** Required */
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
		appId?: string | null;
		created?: number | null;
		id?: string | null;
		modified?: number | null;

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Aws_lambda_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Aws_lambda_rule_responseTarget;
		version?: string | null;
	}
	export interface Aws_lambda_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,
		appId: FormControl<string | null | undefined>,
		created: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		modified: FormControl<number | null | undefined>,

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Aws_lambda_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateAws_lambda_rule_responseFormGroup() {
		return new FormGroup<Aws_lambda_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Aws_lambda_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Aws_lambda_rule_responseTarget {

		/** Required */
		authentication: Aws_access_keys_response;
		enveloped?: boolean | null;
		format?: string | null;

		/** Required */
		functionName: string;

		/** Required */
		region: string;
	}
	export interface Aws_lambda_rule_responseTargetFormProperties {
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,

		/** Required */
		functionName: FormControl<string | null | undefined>,

		/** Required */
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
		requestMode?: string | null;

		/** Required */
		ruleType: Aws_sqs_rule_patchRuleType;
		source?: Rule_source_patch;
		status?: string | null;
		target?: Aws_sqs_rule_patchTarget;
	}
	export interface Aws_sqs_rule_patchFormProperties {
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Aws_sqs_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateAws_sqs_rule_patchFormGroup() {
		return new FormGroup<Aws_sqs_rule_patchFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined),
			ruleType: new FormControl<Aws_sqs_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Aws_sqs_rule_patchRuleType { 'aws/sqs' = 'aws/sqs' }

	export interface Aws_sqs_rule_patchTarget {
		authentication?: Aws_access_keys;
		awsAccountId?: string | null;
		enveloped?: boolean | null;
		format?: string | null;
		queueName?: string | null;
		region?: string | null;
	}
	export interface Aws_sqs_rule_patchTargetFormProperties {
		awsAccountId: FormControl<string | null | undefined>,
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,
		queueName: FormControl<string | null | undefined>,
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

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Aws_sqs_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Aws_sqs_rule_postTarget;
	}
	export interface Aws_sqs_rule_postFormProperties {

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Aws_sqs_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateAws_sqs_rule_postFormGroup() {
		return new FormGroup<Aws_sqs_rule_postFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Aws_sqs_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Aws_sqs_rule_postTarget {

		/** Required */
		authentication: Aws_access_keys;

		/** Required */
		awsAccountId: string;
		enveloped?: boolean | null;
		format?: string | null;

		/** Required */
		queueName: string;

		/** Required */
		region: string;
	}
	export interface Aws_sqs_rule_postTargetFormProperties {

		/** Required */
		awsAccountId: FormControl<string | null | undefined>,
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,

		/** Required */
		queueName: FormControl<string | null | undefined>,

		/** Required */
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
		appId?: string | null;
		created?: number | null;
		id?: string | null;
		modified?: number | null;

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Aws_sqs_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Aws_sqs_rule_responseTarget;
		version?: string | null;
	}
	export interface Aws_sqs_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,
		appId: FormControl<string | null | undefined>,
		created: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		modified: FormControl<number | null | undefined>,

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Aws_sqs_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateAws_sqs_rule_responseFormGroup() {
		return new FormGroup<Aws_sqs_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Aws_sqs_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Aws_sqs_rule_responseTarget {

		/** Required */
		authentication: Aws_access_keys_response;

		/** Required */
		awsAccountId: string;
		enveloped?: boolean | null;
		format?: string | null;

		/** Required */
		queueName: string;

		/** Required */
		region: string;
	}
	export interface Aws_sqs_rule_responseTargetFormProperties {

		/** Required */
		awsAccountId: FormControl<string | null | undefined>,
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,

		/** Required */
		queueName: FormControl<string | null | undefined>,

		/** Required */
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
		requestMode?: string | null;

		/** Required */
		ruleType: Azure_function_rule_patchRuleType;
		source?: Rule_source_patch;
		status?: string | null;
		target?: Azure_function_rule_patchTarget;
	}
	export interface Azure_function_rule_patchFormProperties {
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Azure_function_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateAzure_function_rule_patchFormGroup() {
		return new FormGroup<Azure_function_rule_patchFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined),
			ruleType: new FormControl<Azure_function_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Azure_function_rule_patchRuleType { 'http/azure-function' = 'http/azure-function' }

	export interface Azure_function_rule_patchTarget {
		azureAppId?: string | null;
		azureFunctionName?: string | null;
		enveloped?: boolean | null;
		format?: string | null;
		Azure_function_rule_patchTargetHeaders?: Array<Azure_function_rule_patchTargetHeaders>;
		signingKeyId?: string | null;
	}
	export interface Azure_function_rule_patchTargetFormProperties {
		azureAppId: FormControl<string | null | undefined>,
		azureFunctionName: FormControl<string | null | undefined>,
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,
		signingKeyId: FormControl<string | null | undefined>,
	}
	export function CreateAzure_function_rule_patchTargetFormGroup() {
		return new FormGroup<Azure_function_rule_patchTargetFormProperties>({
			azureAppId: new FormControl<string | null | undefined>(undefined),
			azureFunctionName: new FormControl<string | null | undefined>(undefined),
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			signingKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Azure_function_rule_patchTargetHeaders {
		name?: string | null;
		value?: string | null;
	}
	export interface Azure_function_rule_patchTargetHeadersFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateAzure_function_rule_patchTargetHeadersFormGroup() {
		return new FormGroup<Azure_function_rule_patchTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Azure_function_rule_post {

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Azure_function_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Azure_function_rule_postTarget;
	}
	export interface Azure_function_rule_postFormProperties {

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Azure_function_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateAzure_function_rule_postFormGroup() {
		return new FormGroup<Azure_function_rule_postFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Azure_function_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Azure_function_rule_postTarget {

		/** Required */
		azureAppId: string;

		/** Required */
		azureFunctionName: string;
		enveloped?: boolean | null;
		format?: string | null;
		Azure_function_rule_postTargetHeaders?: Array<Azure_function_rule_postTargetHeaders>;
		signingKeyId?: string | null;
	}
	export interface Azure_function_rule_postTargetFormProperties {

		/** Required */
		azureAppId: FormControl<string | null | undefined>,

		/** Required */
		azureFunctionName: FormControl<string | null | undefined>,
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,
		signingKeyId: FormControl<string | null | undefined>,
	}
	export function CreateAzure_function_rule_postTargetFormGroup() {
		return new FormGroup<Azure_function_rule_postTargetFormProperties>({
			azureAppId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			azureFunctionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			signingKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Azure_function_rule_postTargetHeaders {
		name?: string | null;
		value?: string | null;
	}
	export interface Azure_function_rule_postTargetHeadersFormProperties {
		name: FormControl<string | null | undefined>,
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
		appId?: string | null;
		created?: number | null;
		id?: string | null;
		modified?: number | null;

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Azure_function_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Azure_function_rule_responseTarget;
		version?: string | null;
	}
	export interface Azure_function_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,
		appId: FormControl<string | null | undefined>,
		created: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		modified: FormControl<number | null | undefined>,

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Azure_function_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateAzure_function_rule_responseFormGroup() {
		return new FormGroup<Azure_function_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Azure_function_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Azure_function_rule_responseTarget {

		/** Required */
		azureAppId: string;

		/** Required */
		azureFunctionName: string;
		enveloped?: boolean | null;
		format?: string | null;
		Azure_function_rule_responseTargetHeaders?: Array<Azure_function_rule_responseTargetHeaders>;
		signingKeyId?: string | null;
	}
	export interface Azure_function_rule_responseTargetFormProperties {

		/** Required */
		azureAppId: FormControl<string | null | undefined>,

		/** Required */
		azureFunctionName: FormControl<string | null | undefined>,
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,
		signingKeyId: FormControl<string | null | undefined>,
	}
	export function CreateAzure_function_rule_responseTargetFormGroup() {
		return new FormGroup<Azure_function_rule_responseTargetFormProperties>({
			azureAppId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			azureFunctionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			signingKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Azure_function_rule_responseTargetHeaders {
		name?: string | null;
		value?: string | null;
	}
	export interface Azure_function_rule_responseTargetHeadersFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateAzure_function_rule_responseTargetHeadersFormGroup() {
		return new FormGroup<Azure_function_rule_responseTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Cloudflare_worker_rule_patch {
		requestMode?: string | null;

		/** Required */
		ruleType: Cloudflare_worker_rule_patchRuleType;
		source?: Rule_source_patch;
		status?: string | null;
		target?: Cloudflare_worker_rule_patchTarget;
	}
	export interface Cloudflare_worker_rule_patchFormProperties {
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Cloudflare_worker_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateCloudflare_worker_rule_patchFormGroup() {
		return new FormGroup<Cloudflare_worker_rule_patchFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined),
			ruleType: new FormControl<Cloudflare_worker_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Cloudflare_worker_rule_patchRuleType { 'http/cloudflare-worker' = 'http/cloudflare-worker' }

	export interface Cloudflare_worker_rule_patchTarget {
		Cloudflare_worker_rule_patchTargetHeaders?: Array<Cloudflare_worker_rule_patchTargetHeaders>;
		signingKeyId?: string | null;
		url?: string | null;
	}
	export interface Cloudflare_worker_rule_patchTargetFormProperties {
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
		name?: string | null;
		value?: string | null;
	}
	export interface Cloudflare_worker_rule_patchTargetHeadersFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateCloudflare_worker_rule_patchTargetHeadersFormGroup() {
		return new FormGroup<Cloudflare_worker_rule_patchTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Cloudflare_worker_rule_post {

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Cloudflare_worker_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Cloudflare_worker_rule_postTarget;
	}
	export interface Cloudflare_worker_rule_postFormProperties {

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Cloudflare_worker_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateCloudflare_worker_rule_postFormGroup() {
		return new FormGroup<Cloudflare_worker_rule_postFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Cloudflare_worker_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Cloudflare_worker_rule_postTarget {
		Cloudflare_worker_rule_postTargetHeaders?: Array<Cloudflare_worker_rule_postTargetHeaders>;
		signingKeyId?: string | null;

		/** Required */
		url: string;
	}
	export interface Cloudflare_worker_rule_postTargetFormProperties {
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
		name?: string | null;
		value?: string | null;
	}
	export interface Cloudflare_worker_rule_postTargetHeadersFormProperties {
		name: FormControl<string | null | undefined>,
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
		appId?: string | null;
		created?: number | null;
		id?: string | null;
		modified?: number | null;

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Cloudflare_worker_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Cloudflare_worker_rule_responseTarget;
		version?: string | null;
	}
	export interface Cloudflare_worker_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,
		appId: FormControl<string | null | undefined>,
		created: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		modified: FormControl<number | null | undefined>,

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Cloudflare_worker_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateCloudflare_worker_rule_responseFormGroup() {
		return new FormGroup<Cloudflare_worker_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Cloudflare_worker_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Cloudflare_worker_rule_responseTarget {
		Cloudflare_worker_rule_responseTargetHeaders?: Array<Cloudflare_worker_rule_responseTargetHeaders>;
		signingKeyId?: string | null;

		/** Required */
		url: string;
	}
	export interface Cloudflare_worker_rule_responseTargetFormProperties {
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
		name?: string | null;
		value?: string | null;
	}
	export interface Cloudflare_worker_rule_responseTargetHeadersFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateCloudflare_worker_rule_responseTargetHeadersFormGroup() {
		return new FormGroup<Cloudflare_worker_rule_responseTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error {

		/** Required */
		code: number;
		details?: string | null;

		/** Required */
		href: string;

		/** Required */
		message: string;

		/** Required */
		statusCode: number;
	}
	export interface ErrorFormProperties {

		/** Required */
		code: FormControl<number | null | undefined>,
		details: FormControl<string | null | undefined>,

		/** Required */
		href: FormControl<string | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,

		/** Required */
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
		requestMode?: string | null;

		/** Required */
		ruleType: Google_cloud_function_rule_patchRuleType;
		source?: Rule_source_patch;
		status?: string | null;
		target?: Google_cloud_function_rule_patchTarget;
	}
	export interface Google_cloud_function_rule_patchFormProperties {
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Google_cloud_function_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateGoogle_cloud_function_rule_patchFormGroup() {
		return new FormGroup<Google_cloud_function_rule_patchFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined),
			ruleType: new FormControl<Google_cloud_function_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Google_cloud_function_rule_patchRuleType { 'http/google-cloud-function' = 'http/google-cloud-function' }

	export interface Google_cloud_function_rule_patchTarget {
		enveloped?: boolean | null;
		format?: string | null;
		functionName?: string | null;
		Google_cloud_function_rule_patchTargetHeaders?: Array<Google_cloud_function_rule_patchTargetHeaders>;
		projectId?: string | null;
		region?: string | null;
		signingKeyId?: string | null;
	}
	export interface Google_cloud_function_rule_patchTargetFormProperties {
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,
		functionName: FormControl<string | null | undefined>,
		projectId: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
		signingKeyId: FormControl<string | null | undefined>,
	}
	export function CreateGoogle_cloud_function_rule_patchTargetFormGroup() {
		return new FormGroup<Google_cloud_function_rule_patchTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			functionName: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			signingKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Google_cloud_function_rule_patchTargetHeaders {
		name?: string | null;
		value?: string | null;
	}
	export interface Google_cloud_function_rule_patchTargetHeadersFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogle_cloud_function_rule_patchTargetHeadersFormGroup() {
		return new FormGroup<Google_cloud_function_rule_patchTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Google_cloud_function_rule_post {

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Google_cloud_function_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Google_cloud_function_rule_postTarget;
	}
	export interface Google_cloud_function_rule_postFormProperties {

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Google_cloud_function_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateGoogle_cloud_function_rule_postFormGroup() {
		return new FormGroup<Google_cloud_function_rule_postFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Google_cloud_function_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Google_cloud_function_rule_postTarget {
		enveloped?: boolean | null;
		format?: string | null;

		/** Required */
		functionName: string;
		Google_cloud_function_rule_postTargetHeaders?: Array<Google_cloud_function_rule_postTargetHeaders>;

		/** Required */
		projectId: string;

		/** Required */
		region: string;
		signingKeyId?: string | null;
	}
	export interface Google_cloud_function_rule_postTargetFormProperties {
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,

		/** Required */
		functionName: FormControl<string | null | undefined>,

		/** Required */
		projectId: FormControl<string | null | undefined>,

		/** Required */
		region: FormControl<string | null | undefined>,
		signingKeyId: FormControl<string | null | undefined>,
	}
	export function CreateGoogle_cloud_function_rule_postTargetFormGroup() {
		return new FormGroup<Google_cloud_function_rule_postTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			functionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			signingKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Google_cloud_function_rule_postTargetHeaders {
		name?: string | null;
		value?: string | null;
	}
	export interface Google_cloud_function_rule_postTargetHeadersFormProperties {
		name: FormControl<string | null | undefined>,
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
		appId?: string | null;
		created?: number | null;
		id?: string | null;
		modified?: number | null;

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Google_cloud_function_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Google_cloud_function_rule_responseTarget;
		version?: string | null;
	}
	export interface Google_cloud_function_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,
		appId: FormControl<string | null | undefined>,
		created: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		modified: FormControl<number | null | undefined>,

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Google_cloud_function_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogle_cloud_function_rule_responseFormGroup() {
		return new FormGroup<Google_cloud_function_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Google_cloud_function_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Google_cloud_function_rule_responseTarget {
		enveloped?: boolean | null;
		format?: string | null;

		/** Required */
		functionName: string;
		Google_cloud_function_rule_responseTargetHeaders?: Array<Google_cloud_function_rule_responseTargetHeaders>;

		/** Required */
		projectId: string;

		/** Required */
		region: string;
		signingKeyId?: string | null;
	}
	export interface Google_cloud_function_rule_responseTargetFormProperties {
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,

		/** Required */
		functionName: FormControl<string | null | undefined>,

		/** Required */
		projectId: FormControl<string | null | undefined>,

		/** Required */
		region: FormControl<string | null | undefined>,
		signingKeyId: FormControl<string | null | undefined>,
	}
	export function CreateGoogle_cloud_function_rule_responseTargetFormGroup() {
		return new FormGroup<Google_cloud_function_rule_responseTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			functionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			signingKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Google_cloud_function_rule_responseTargetHeaders {
		name?: string | null;
		value?: string | null;
	}
	export interface Google_cloud_function_rule_responseTargetHeadersFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogle_cloud_function_rule_responseTargetHeadersFormGroup() {
		return new FormGroup<Google_cloud_function_rule_responseTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Http_rule_patch {
		requestMode?: string | null;

		/** Required */
		ruleType: Http_rule_patchRuleType;
		source?: Rule_source_patch;
		status?: string | null;
		target?: Http_rule_patchTarget;
	}
	export interface Http_rule_patchFormProperties {
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Http_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateHttp_rule_patchFormGroup() {
		return new FormGroup<Http_rule_patchFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined),
			ruleType: new FormControl<Http_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Http_rule_patchRuleType { http = 'http' }

	export interface Http_rule_patchTarget {
		enveloped?: boolean | null;
		format?: string | null;
		Http_rule_patchTargetHeaders?: Array<Http_rule_patchTargetHeaders>;
		signingKeyId?: string | null;
		url?: string | null;
	}
	export interface Http_rule_patchTargetFormProperties {
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,
		signingKeyId: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateHttp_rule_patchTargetFormGroup() {
		return new FormGroup<Http_rule_patchTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			signingKeyId: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Http_rule_patchTargetHeaders {
		name?: string | null;
		value?: string | null;
	}
	export interface Http_rule_patchTargetHeadersFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateHttp_rule_patchTargetHeadersFormGroup() {
		return new FormGroup<Http_rule_patchTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Http_rule_post {

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Http_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Http_rule_postTarget;
	}
	export interface Http_rule_postFormProperties {

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Http_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateHttp_rule_postFormGroup() {
		return new FormGroup<Http_rule_postFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Http_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Http_rule_postTarget {
		enveloped?: boolean | null;

		/** Required */
		format: string;
		Http_rule_postTargetHeaders?: Array<Http_rule_postTargetHeaders>;
		signingKeyId?: string | null;

		/** Required */
		url: string;
	}
	export interface Http_rule_postTargetFormProperties {
		enveloped: FormControl<boolean | null | undefined>,

		/** Required */
		format: FormControl<string | null | undefined>,
		signingKeyId: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateHttp_rule_postTargetFormGroup() {
		return new FormGroup<Http_rule_postTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			signingKeyId: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Http_rule_postTargetHeaders {
		name?: string | null;
		value?: string | null;
	}
	export interface Http_rule_postTargetHeadersFormProperties {
		name: FormControl<string | null | undefined>,
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
		appId?: string | null;
		created?: number | null;
		id?: string | null;
		modified?: number | null;

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Http_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Http_rule_responseTarget;
		version?: string | null;
	}
	export interface Http_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,
		appId: FormControl<string | null | undefined>,
		created: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		modified: FormControl<number | null | undefined>,

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Http_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateHttp_rule_responseFormGroup() {
		return new FormGroup<Http_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Http_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Http_rule_responseTarget {
		enveloped?: boolean | null;

		/** Required */
		format: string;
		Http_rule_responseTargetHeaders?: Array<Http_rule_responseTargetHeaders>;
		signingKeyId?: string | null;

		/** Required */
		url: string;
	}
	export interface Http_rule_responseTargetFormProperties {
		enveloped: FormControl<boolean | null | undefined>,

		/** Required */
		format: FormControl<string | null | undefined>,
		signingKeyId: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateHttp_rule_responseTargetFormGroup() {
		return new FormGroup<Http_rule_responseTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			signingKeyId: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Http_rule_responseTargetHeaders {
		name?: string | null;
		value?: string | null;
	}
	export interface Http_rule_responseTargetHeadersFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateHttp_rule_responseTargetHeadersFormGroup() {
		return new FormGroup<Http_rule_responseTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Ifttt_rule_patch {
		requestMode?: string | null;

		/** Required */
		ruleType: Ifttt_rule_patchRuleType;
		source?: Rule_source_patch;
		status?: string | null;
		target?: Ifttt_rule_patchTarget;
	}
	export interface Ifttt_rule_patchFormProperties {
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Ifttt_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateIfttt_rule_patchFormGroup() {
		return new FormGroup<Ifttt_rule_patchFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined),
			ruleType: new FormControl<Ifttt_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Ifttt_rule_patchRuleType { 'http/ifttt' = 'http/ifttt' }

	export interface Ifttt_rule_patchTarget {
		eventName?: string | null;
		webhookKey?: string | null;
	}
	export interface Ifttt_rule_patchTargetFormProperties {
		eventName: FormControl<string | null | undefined>,
		webhookKey: FormControl<string | null | undefined>,
	}
	export function CreateIfttt_rule_patchTargetFormGroup() {
		return new FormGroup<Ifttt_rule_patchTargetFormProperties>({
			eventName: new FormControl<string | null | undefined>(undefined),
			webhookKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Ifttt_rule_post {

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Ifttt_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Ifttt_rule_postTarget;
	}
	export interface Ifttt_rule_postFormProperties {

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Ifttt_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateIfttt_rule_postFormGroup() {
		return new FormGroup<Ifttt_rule_postFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Ifttt_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

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
		appId?: string | null;
		created?: number | null;
		id?: string | null;
		modified?: number | null;

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Ifttt_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Ifttt_rule_responseTarget;
		version?: string | null;
	}
	export interface Ifttt_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,
		appId: FormControl<string | null | undefined>,
		created: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		modified: FormControl<number | null | undefined>,

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Ifttt_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateIfttt_rule_responseFormGroup() {
		return new FormGroup<Ifttt_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Ifttt_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
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

	export interface Kafka_rule_patch {
		requestMode?: string | null;

		/** Required */
		ruleType: Kafka_rule_patchRuleType;
		source?: Rule_source_patch;
		status?: string | null;
		target?: Kafka_rule_patchTarget;
	}
	export interface Kafka_rule_patchFormProperties {
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Kafka_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateKafka_rule_patchFormGroup() {
		return new FormGroup<Kafka_rule_patchFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined),
			ruleType: new FormControl<Kafka_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Kafka_rule_patchRuleType { kafka = 'kafka' }

	export interface Kafka_rule_patchTarget {
		auth?: Kafka_rule_patchTargetAuth;
		brokers?: Array<string>;
		enveloped?: boolean | null;
		format?: string | null;
		routingKey?: string | null;
	}
	export interface Kafka_rule_patchTargetFormProperties {
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,
		routingKey: FormControl<string | null | undefined>,
	}
	export function CreateKafka_rule_patchTargetFormGroup() {
		return new FormGroup<Kafka_rule_patchTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			routingKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Kafka_rule_patchTargetAuth {
		sasl?: Kafka_rule_patchTargetAuthSasl;
	}
	export interface Kafka_rule_patchTargetAuthFormProperties {
	}
	export function CreateKafka_rule_patchTargetAuthFormGroup() {
		return new FormGroup<Kafka_rule_patchTargetAuthFormProperties>({
		});

	}

	export interface Kafka_rule_patchTargetAuthSasl {
		mechanism?: Kafka_rule_patchTargetAuthSaslMechanism | null;
		password?: string | null;
		username?: string | null;
	}
	export interface Kafka_rule_patchTargetAuthSaslFormProperties {
		mechanism: FormControl<Kafka_rule_patchTargetAuthSaslMechanism | null | undefined>,
		password: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateKafka_rule_patchTargetAuthSaslFormGroup() {
		return new FormGroup<Kafka_rule_patchTargetAuthSaslFormProperties>({
			mechanism: new FormControl<Kafka_rule_patchTargetAuthSaslMechanism | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Kafka_rule_patchTargetAuthSaslMechanism { plain = 'plain', 'scram-sha-256' = 'scram-sha-256', 'scram-sha-512' = 'scram-sha-512' }

	export interface Kafka_rule_post {

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Kafka_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Kafka_rule_postTarget;
	}
	export interface Kafka_rule_postFormProperties {

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Kafka_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateKafka_rule_postFormGroup() {
		return new FormGroup<Kafka_rule_postFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Kafka_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Kafka_rule_postTarget {

		/** Required */
		auth: Kafka_rule_postTargetAuth;

		/** Required */
		brokers: Array<string>;
		enveloped?: boolean | null;
		format?: string | null;

		/** Required */
		routingKey: string;
	}
	export interface Kafka_rule_postTargetFormProperties {
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,

		/** Required */
		routingKey: FormControl<string | null | undefined>,
	}
	export function CreateKafka_rule_postTargetFormGroup() {
		return new FormGroup<Kafka_rule_postTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			routingKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Kafka_rule_postTargetAuth {
		sasl?: Kafka_rule_postTargetAuthSasl;
	}
	export interface Kafka_rule_postTargetAuthFormProperties {
	}
	export function CreateKafka_rule_postTargetAuthFormGroup() {
		return new FormGroup<Kafka_rule_postTargetAuthFormProperties>({
		});

	}

	export interface Kafka_rule_postTargetAuthSasl {
		mechanism?: Kafka_rule_patchTargetAuthSaslMechanism | null;
		password?: string | null;
		username?: string | null;
	}
	export interface Kafka_rule_postTargetAuthSaslFormProperties {
		mechanism: FormControl<Kafka_rule_patchTargetAuthSaslMechanism | null | undefined>,
		password: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateKafka_rule_postTargetAuthSaslFormGroup() {
		return new FormGroup<Kafka_rule_postTargetAuthSaslFormProperties>({
			mechanism: new FormControl<Kafka_rule_patchTargetAuthSaslMechanism | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Kafka_rule_response {
		_links?: string | null;
		appId?: string | null;
		created?: number | null;
		id?: string | null;
		modified?: number | null;

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Kafka_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Kafka_rule_responseTarget;
		version?: string | null;
	}
	export interface Kafka_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,
		appId: FormControl<string | null | undefined>,
		created: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		modified: FormControl<number | null | undefined>,

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Kafka_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateKafka_rule_responseFormGroup() {
		return new FormGroup<Kafka_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Kafka_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Kafka_rule_responseTarget {

		/** Required */
		auth: Kafka_rule_responseTargetAuth;

		/** Required */
		brokers: Array<string>;
		enveloped?: boolean | null;
		format?: string | null;

		/** Required */
		routingKey: string;
	}
	export interface Kafka_rule_responseTargetFormProperties {
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,

		/** Required */
		routingKey: FormControl<string | null | undefined>,
	}
	export function CreateKafka_rule_responseTargetFormGroup() {
		return new FormGroup<Kafka_rule_responseTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			routingKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Kafka_rule_responseTargetAuth {
		sasl?: Kafka_rule_responseTargetAuthSasl;
	}
	export interface Kafka_rule_responseTargetAuthFormProperties {
	}
	export function CreateKafka_rule_responseTargetAuthFormGroup() {
		return new FormGroup<Kafka_rule_responseTargetAuthFormProperties>({
		});

	}

	export interface Kafka_rule_responseTargetAuthSasl {
		mechanism?: Kafka_rule_patchTargetAuthSaslMechanism | null;
		password?: string | null;
		username?: string | null;
	}
	export interface Kafka_rule_responseTargetAuthSaslFormProperties {
		mechanism: FormControl<Kafka_rule_patchTargetAuthSaslMechanism | null | undefined>,
		password: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateKafka_rule_responseTargetAuthSaslFormGroup() {
		return new FormGroup<Kafka_rule_responseTargetAuthSaslFormProperties>({
			mechanism: new FormControl<Kafka_rule_patchTargetAuthSaslMechanism | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Key_patch {
		capability?: {[id: string]: Array<string> };
		name?: string | null;
	}
	export interface Key_patchFormProperties {
		capability: FormControl<{[id: string]: Array<string> } | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateKey_patchFormGroup() {
		return new FormGroup<Key_patchFormProperties>({
			capability: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Key_post {

		/** Required */
		capability: {[id: string]: Array<string> };

		/** Required */
		name: string;
	}
	export interface Key_postFormProperties {

		/** Required */
		capability: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateKey_postFormGroup() {
		return new FormGroup<Key_postFormProperties>({
			capability: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Key_response {
		appId?: string | null;
		capability?: {[id: string]: Array<string> };
		created?: number | null;
		id?: string | null;
		key?: string | null;
		modified?: number | null;
		name?: string | null;
		status?: number | null;
	}
	export interface Key_responseFormProperties {
		appId: FormControl<string | null | undefined>,
		capability: FormControl<{[id: string]: Array<string> } | null | undefined>,
		created: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		modified: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<number | null | undefined>,
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
			status: new FormControl<number | null | undefined>(undefined),
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

		/** Required */
		id: string;

		/** Required */
		name: string;
	}
	export interface MeAccountFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMeAccountFormGroup() {
		return new FormGroup<MeAccountFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MeToken {

		/** Required */
		capabilities: Array<string>;

		/** Required */
		id: string;

		/** Required */
		name: string;
	}
	export interface MeTokenFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMeTokenFormGroup() {
		return new FormGroup<MeTokenFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MeUser {

		/** Required */
		email: string;

		/** Required */
		id: number;
	}
	export interface MeUserFormProperties {

		/** Required */
		email: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<number | null | undefined>,
	}
	export function CreateMeUserFormGroup() {
		return new FormGroup<MeUserFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Namespace_patch {
		authenticated?: boolean | null;
		exposeTimeserial?: boolean | null;
		persistLast?: boolean | null;
		persisted?: boolean | null;
		pushEnabled?: boolean | null;
		tlsOnly?: boolean | null;
	}
	export interface Namespace_patchFormProperties {
		authenticated: FormControl<boolean | null | undefined>,
		exposeTimeserial: FormControl<boolean | null | undefined>,
		persistLast: FormControl<boolean | null | undefined>,
		persisted: FormControl<boolean | null | undefined>,
		pushEnabled: FormControl<boolean | null | undefined>,
		tlsOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateNamespace_patchFormGroup() {
		return new FormGroup<Namespace_patchFormProperties>({
			authenticated: new FormControl<boolean | null | undefined>(undefined),
			exposeTimeserial: new FormControl<boolean | null | undefined>(undefined),
			persistLast: new FormControl<boolean | null | undefined>(undefined),
			persisted: new FormControl<boolean | null | undefined>(undefined),
			pushEnabled: new FormControl<boolean | null | undefined>(undefined),
			tlsOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Namespace_post {
		authenticated?: boolean | null;
		exposeTimeserial?: boolean | null;

		/** Required */
		id: string;
		persistLast?: boolean | null;
		persisted?: boolean | null;
		pushEnabled?: boolean | null;
		tlsOnly?: boolean | null;
	}
	export interface Namespace_postFormProperties {
		authenticated: FormControl<boolean | null | undefined>,
		exposeTimeserial: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		persistLast: FormControl<boolean | null | undefined>,
		persisted: FormControl<boolean | null | undefined>,
		pushEnabled: FormControl<boolean | null | undefined>,
		tlsOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateNamespace_postFormGroup() {
		return new FormGroup<Namespace_postFormProperties>({
			authenticated: new FormControl<boolean | null | undefined>(undefined),
			exposeTimeserial: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			persistLast: new FormControl<boolean | null | undefined>(undefined),
			persisted: new FormControl<boolean | null | undefined>(undefined),
			pushEnabled: new FormControl<boolean | null | undefined>(undefined),
			tlsOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Namespace_response {
		appId?: string | null;
		authenticated?: boolean | null;
		created?: number | null;
		exposeTimeserial?: boolean | null;
		id?: string | null;
		modified?: number | null;
		persistLast?: boolean | null;
		persisted?: boolean | null;
		pushEnabled?: boolean | null;
		tlsOnly?: boolean | null;
	}
	export interface Namespace_responseFormProperties {
		appId: FormControl<string | null | undefined>,
		authenticated: FormControl<boolean | null | undefined>,
		created: FormControl<number | null | undefined>,
		exposeTimeserial: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		modified: FormControl<number | null | undefined>,
		persistLast: FormControl<boolean | null | undefined>,
		persisted: FormControl<boolean | null | undefined>,
		pushEnabled: FormControl<boolean | null | undefined>,
		tlsOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateNamespace_responseFormGroup() {
		return new FormGroup<Namespace_responseFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			authenticated: new FormControl<boolean | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			exposeTimeserial: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			persistLast: new FormControl<boolean | null | undefined>(undefined),
			persisted: new FormControl<boolean | null | undefined>(undefined),
			pushEnabled: new FormControl<boolean | null | undefined>(undefined),
			tlsOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Pulsar_rule_patch {
		requestMode?: string | null;

		/** Required */
		ruleType: Pulsar_rule_patchRuleType;
		source?: Rule_source_patch;
		status?: string | null;
		target?: Pulsar_rule_patchTarget;
	}
	export interface Pulsar_rule_patchFormProperties {
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Pulsar_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreatePulsar_rule_patchFormGroup() {
		return new FormGroup<Pulsar_rule_patchFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined),
			ruleType: new FormControl<Pulsar_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Pulsar_rule_patchRuleType { pulsar = 'pulsar' }

	export interface Pulsar_rule_patchTarget {
		authentication?: Pulsar_token_auth;
		enveloped?: boolean | null;
		format?: string | null;
		routingKey?: string | null;
		serviceUrl?: string | null;
		tlsTrustCerts?: Array<string>;
		topic?: string | null;
	}
	export interface Pulsar_rule_patchTargetFormProperties {
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,
		routingKey: FormControl<string | null | undefined>,
		serviceUrl: FormControl<string | null | undefined>,
		topic: FormControl<string | null | undefined>,
	}
	export function CreatePulsar_rule_patchTargetFormGroup() {
		return new FormGroup<Pulsar_rule_patchTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			routingKey: new FormControl<string | null | undefined>(undefined),
			serviceUrl: new FormControl<string | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pulsar_token_auth {

		/** Required */
		authenticationMode: Pulsar_token_authAuthenticationMode;

		/** Required */
		token: string;
	}
	export interface Pulsar_token_authFormProperties {

		/** Required */
		authenticationMode: FormControl<Pulsar_token_authAuthenticationMode | null | undefined>,

		/** Required */
		token: FormControl<string | null | undefined>,
	}
	export function CreatePulsar_token_authFormGroup() {
		return new FormGroup<Pulsar_token_authFormProperties>({
			authenticationMode: new FormControl<Pulsar_token_authAuthenticationMode | null | undefined>(undefined, [Validators.required]),
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Pulsar_token_authAuthenticationMode { token = 'token' }

	export interface Pulsar_rule_post {

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Pulsar_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Pulsar_rule_postTarget;
	}
	export interface Pulsar_rule_postFormProperties {

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Pulsar_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreatePulsar_rule_postFormGroup() {
		return new FormGroup<Pulsar_rule_postFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Pulsar_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pulsar_rule_postTarget {

		/** Required */
		authentication: Pulsar_token_auth;
		enveloped?: boolean | null;
		format?: string | null;
		routingKey?: string | null;

		/** Required */
		serviceUrl: string;
		tlsTrustCerts?: Array<string>;

		/** Required */
		topic: string;
	}
	export interface Pulsar_rule_postTargetFormProperties {
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,
		routingKey: FormControl<string | null | undefined>,

		/** Required */
		serviceUrl: FormControl<string | null | undefined>,

		/** Required */
		topic: FormControl<string | null | undefined>,
	}
	export function CreatePulsar_rule_postTargetFormGroup() {
		return new FormGroup<Pulsar_rule_postTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			routingKey: new FormControl<string | null | undefined>(undefined),
			serviceUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			topic: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Pulsar_rule_response {
		_links?: string | null;
		appId?: string | null;
		created?: number | null;
		id?: string | null;
		modified?: number | null;

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Pulsar_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Pulsar_rule_responseTarget;
		version?: string | null;
	}
	export interface Pulsar_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,
		appId: FormControl<string | null | undefined>,
		created: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		modified: FormControl<number | null | undefined>,

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Pulsar_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreatePulsar_rule_responseFormGroup() {
		return new FormGroup<Pulsar_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Pulsar_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pulsar_rule_responseTarget {
		authentication?: Pulsar_token_auth;
		enveloped?: boolean | null;
		format?: string | null;
		routingKey?: string | null;
		serviceUrl?: string | null;
		tlsTrustCerts?: Array<string>;
		topic?: string | null;
	}
	export interface Pulsar_rule_responseTargetFormProperties {
		enveloped: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,
		routingKey: FormControl<string | null | undefined>,
		serviceUrl: FormControl<string | null | undefined>,
		topic: FormControl<string | null | undefined>,
	}
	export function CreatePulsar_rule_responseTargetFormGroup() {
		return new FormGroup<Pulsar_rule_responseTargetFormProperties>({
			enveloped: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			routingKey: new FormControl<string | null | undefined>(undefined),
			serviceUrl: new FormControl<string | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Queue {

		/** Required */
		maxLength: number;

		/** Required */
		name: string;

		/** Required */
		region: string;

		/** Required */
		ttl: number;
	}
	export interface QueueFormProperties {

		/** Required */
		maxLength: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		region: FormControl<string | null | undefined>,

		/** Required */
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
		appId?: string | null;
		deadletter?: boolean | null;
		deadletterId?: string | null;
		id?: string | null;
		maxLength?: number | null;
		messages?: Queue_responseMessages;
		name?: string | null;
		region?: string | null;
		state?: string | null;
		stats?: Queue_responseStats;
		stomp?: Queue_responseStomp;
		ttl?: number | null;
	}
	export interface Queue_responseFormProperties {
		appId: FormControl<string | null | undefined>,
		deadletter: FormControl<boolean | null | undefined>,
		deadletterId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		maxLength: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
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
		queueName?: string | null;
		uri?: string | null;
	}
	export interface Queue_responseAmqpFormProperties {
		queueName: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateQueue_responseAmqpFormGroup() {
		return new FormGroup<Queue_responseAmqpFormProperties>({
			queueName: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Queue_responseMessages {
		ready?: number | null;
		total?: number | null;
		unacknowledged?: number | null;
	}
	export interface Queue_responseMessagesFormProperties {
		ready: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
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
		acknowledgementRate?: number | null;
		deliveryRate?: number | null;
		publishRate?: number | null;
	}
	export interface Queue_responseStatsFormProperties {
		acknowledgementRate: FormControl<number | null | undefined>,
		deliveryRate: FormControl<number | null | undefined>,
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
		destination?: string | null;
		host?: string | null;
		uri?: string | null;
	}
	export interface Queue_responseStompFormProperties {
		destination: FormControl<string | null | undefined>,
		host: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateQueue_responseStompFormGroup() {
		return new FormGroup<Queue_responseStompFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
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

	export interface Unsupported_rule_response {
		_links?: string | null;
		appId?: string | null;
		created?: number | null;
		id?: string | null;
		modified?: number | null;

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Unsupported_rule_responseRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Unsupported_rule_responseTarget;
		version?: string | null;
	}
	export interface Unsupported_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,
		appId: FormControl<string | null | undefined>,
		created: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		modified: FormControl<number | null | undefined>,

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Unsupported_rule_responseRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateUnsupported_rule_responseFormGroup() {
		return new FormGroup<Unsupported_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Unsupported_rule_responseRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Unsupported_rule_responseRuleType { unsupported = 'unsupported' }

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
		requestMode?: string | null;

		/** Required */
		ruleType: Zapier_rule_patchRuleType;
		source?: Rule_source_patch;
		status?: string | null;
		target?: Zapier_rule_patchTarget;
	}
	export interface Zapier_rule_patchFormProperties {
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Zapier_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateZapier_rule_patchFormGroup() {
		return new FormGroup<Zapier_rule_patchFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined),
			ruleType: new FormControl<Zapier_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Zapier_rule_patchRuleType { 'http/zapier' = 'http/zapier' }

	export interface Zapier_rule_patchTarget {
		Zapier_rule_patchTargetHeaders?: Array<Zapier_rule_patchTargetHeaders>;
		signingKeyId?: string | null;
		url?: string | null;
	}
	export interface Zapier_rule_patchTargetFormProperties {
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
		name?: string | null;
		value?: string | null;
	}
	export interface Zapier_rule_patchTargetHeadersFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateZapier_rule_patchTargetHeadersFormGroup() {
		return new FormGroup<Zapier_rule_patchTargetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Zapier_rule_post {

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Zapier_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Zapier_rule_postTarget;
	}
	export interface Zapier_rule_postFormProperties {

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Zapier_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateZapier_rule_postFormGroup() {
		return new FormGroup<Zapier_rule_postFormProperties>({
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Zapier_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Zapier_rule_postTarget {
		Zapier_rule_postTargetHeaders?: Array<Zapier_rule_postTargetHeaders>;
		signingKeyId?: string | null;

		/** Required */
		url: string;
	}
	export interface Zapier_rule_postTargetFormProperties {
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
		name?: string | null;
		value?: string | null;
	}
	export interface Zapier_rule_postTargetHeadersFormProperties {
		name: FormControl<string | null | undefined>,
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
		appId?: string | null;
		created?: number | null;
		id?: string | null;
		modified?: number | null;

		/** Required */
		requestMode: string;

		/** Required */
		ruleType: Zapier_rule_patchRuleType;

		/** Required */
		source: Rule_source;
		status?: string | null;

		/** Required */
		target: Zapier_rule_responseTarget;
		version?: string | null;
	}
	export interface Zapier_rule_responseFormProperties {
		_links: FormControl<string | null | undefined>,
		appId: FormControl<string | null | undefined>,
		created: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		modified: FormControl<number | null | undefined>,

		/** Required */
		requestMode: FormControl<string | null | undefined>,

		/** Required */
		ruleType: FormControl<Zapier_rule_patchRuleType | null | undefined>,
		status: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateZapier_rule_responseFormGroup() {
		return new FormGroup<Zapier_rule_responseFormProperties>({
			_links: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<number | null | undefined>(undefined),
			requestMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<Zapier_rule_patchRuleType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Zapier_rule_responseTarget {
		Zapier_rule_responseTargetHeaders?: Array<Zapier_rule_responseTargetHeaders>;
		signingKeyId?: string | null;

		/** Required */
		url: string;
	}
	export interface Zapier_rule_responseTargetFormProperties {
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
		name?: string | null;
		value?: string | null;
	}
	export interface Zapier_rule_responseTargetHeadersFormProperties {
		name: FormControl<string | null | undefined>,
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
		 * Lists account apps
		 * Get accounts/{account_id}/apps
		 * @return {Array<App_response>} App list
		 */
		AppsGetByAccount_id(account_id: string): Observable<Array<App_response>> {
			return this.http.get<Array<App_response>>(this.baseUri + 'accounts/' + (account_id == null ? '' : encodeURIComponent(account_id)) + '/apps', {});
		}

		/**
		 * Creates an app
		 * Post accounts/{account_id}/apps
		 * @return {void} 
		 */
		AppsPostByAccount_id(account_id: string, requestBody: App_post): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts/' + (account_id == null ? '' : encodeURIComponent(account_id)) + '/apps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists app keys
		 * Get apps/{app_id}/keys
		 * @return {Array<Key_response>} Key list
		 */
		KeysGetByApp_id(app_id: string): Observable<Array<Key_response>> {
			return this.http.get<Array<Key_response>>(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/keys', {});
		}

		/**
		 * Creates a key
		 * Post apps/{app_id}/keys
		 * @return {void} 
		 */
		KeysPostByApp_id(app_id: string, requestBody: Key_post): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/keys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a key
		 * Patch apps/{app_id}/keys/{key_id}
		 * @return {Key_response} Key updated
		 */
		KeysPatchByApp_idAndKey_id(app_id: string, key_id: string, requestBody: Key_patch): Observable<Key_response> {
			return this.http.patch<Key_response>(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/keys/' + (key_id == null ? '' : encodeURIComponent(key_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Revokes a key
		 * Post apps/{app_id}/keys/{key_id}/revoke
		 * @return {void} Key revoked
		 */
		KeysPostByApp_idAndKey_id(app_id: string, key_id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/keys/' + (key_id == null ? '' : encodeURIComponent(key_id)) + '/revoke', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists namespaces
		 * Get apps/{app_id}/namespaces
		 * @return {Array<Namespace_response>} Namespace list
		 */
		NamespacesGetByApp_id(app_id: string): Observable<Array<Namespace_response>> {
			return this.http.get<Array<Namespace_response>>(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/namespaces', {});
		}

		/**
		 * Creates a namespace
		 * Post apps/{app_id}/namespaces
		 * @return {void} 
		 */
		NamespacesPostByApp_id(app_id: string, requestBody: Namespace_post): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/namespaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a namespace
		 * Delete apps/{app_id}/namespaces/{namespace_id}
		 * @return {void} 
		 */
		NamespacesDeleteByApp_idAndNamespace_id(app_id: string, namespace_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/namespaces/' + (namespace_id == null ? '' : encodeURIComponent(namespace_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a namespace
		 * Patch apps/{app_id}/namespaces/{namespace_id}
		 * @return {Namespace_response} Namespace updated
		 */
		NamespacesPatchByApp_idAndNamespace_id(app_id: string, namespace_id: string, requestBody: Namespace_patch): Observable<Namespace_response> {
			return this.http.patch<Namespace_response>(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/namespaces/' + (namespace_id == null ? '' : encodeURIComponent(namespace_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists queues
		 * Get apps/{app_id}/queues
		 * @return {Array<Queue_response>} Queue list
		 */
		QueuesGetByApp_id(app_id: string): Observable<Array<Queue_response>> {
			return this.http.get<Array<Queue_response>>(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/queues', {});
		}

		/**
		 * Creates a queue
		 * Post apps/{app_id}/queues
		 * @return {void} 
		 */
		QueuesPostByApp_id(app_id: string, requestBody: Queue): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/queues', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a queue
		 * Delete apps/{app_id}/queues/{queue_id}
		 * @return {void} 
		 */
		QueuesDeleteByApp_idAndQueue_id(app_id: string, queue_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/queues/' + (queue_id == null ? '' : encodeURIComponent(queue_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists Integration rules
		 * Get apps/{app_id}/rules
		 * @return {Array<Rule_response>} Integration Rule list
		 */
		RulesGetByApp_id(app_id: string): Observable<Array<Rule_response>> {
			return this.http.get<Array<Rule_response>>(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/rules', {});
		}

		/**
		 * Creates a Integration Rule
		 * Post apps/{app_id}/rules
		 * @return {void} 
		 */
		RulesPostByApp_id(app_id: string, requestBody: Rule_post): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/rules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a Integration Rule
		 * Delete apps/{app_id}/rules/{rule_id}
		 * @return {void} 
		 */
		RulesDeleteByApp_idAndRule_id(app_id: string, rule_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/rules/' + (rule_id == null ? '' : encodeURIComponent(rule_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a Integration Rule by ID
		 * Get apps/{app_id}/rules/{rule_id}
		 * @return {Rule_response} Integration Rule
		 */
		RulesGetByApp_idAndRule_id(app_id: string, rule_id: string): Observable<Rule_response> {
			return this.http.get<Rule_response>(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/rules/' + (rule_id == null ? '' : encodeURIComponent(rule_id)), {});
		}

		/**
		 * Updates a Integration Rule
		 * Patch apps/{app_id}/rules/{rule_id}
		 * @return {Rule_response} Integration Rule updated
		 */
		RulesPatchByApp_idAndRule_id(app_id: string, rule_id: string, requestBody: Rule_patch): Observable<Rule_response> {
			return this.http.patch<Rule_response>(this.baseUri + 'apps/' + (app_id == null ? '' : encodeURIComponent(app_id)) + '/rules/' + (rule_id == null ? '' : encodeURIComponent(rule_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an app
		 * Delete apps/{id}
		 * @return {void} 
		 */
		AppsDeleteById(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'apps/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an app
		 * Patch apps/{id}
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

