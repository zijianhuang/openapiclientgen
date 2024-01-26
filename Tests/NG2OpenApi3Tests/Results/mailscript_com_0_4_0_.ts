import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ActionCombine {

		/** Required */
		createdAt: Date;

		/** Required */
		createdBy: string;

		/** Required */
		id: string;
		list?: Array<string>;

		/** Required */
		name: string;

		/** Required */
		owner: string;
	}
	export interface ActionCombineFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		owner: FormControl<string | null | undefined>,
	}
	export function CreateActionCombineFormGroup() {
		return new FormGroup<ActionCombineFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ActionSend {

		/** Required */
		config: ActionSendConfig;

		/** Required */
		createdAt: Date;

		/** Required */
		createdBy: string;

		/** Required */
		id: string;

		/** Required */
		name: string;

		/** Required */
		output: string;

		/** Required */
		owner: string;
	}
	export interface ActionSendFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		output: FormControl<string | null | undefined>,

		/** Required */
		owner: FormControl<string | null | undefined>,
	}
	export function CreateActionSendFormGroup() {
		return new FormGroup<ActionSendFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			output: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ActionSendConfig {
		html?: string | null;

		/** Required */
		subject: string;
		text?: string | null;

		/** Required */
		type: string;
	}
	export interface ActionSendConfigFormProperties {
		html: FormControl<string | null | undefined>,

		/** Required */
		subject: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateActionSendConfigFormGroup() {
		return new FormGroup<ActionSendConfigFormProperties>({
			html: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddActionAliasRequest {

		/** Required */
		config: AddActionAliasRequestConfig;

		/** Required */
		name: string;

		/** Required */
		type: AddActionAliasRequestType;
	}
	export interface AddActionAliasRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AddActionAliasRequestType | null | undefined>,
	}
	export function CreateAddActionAliasRequestFormGroup() {
		return new FormGroup<AddActionAliasRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AddActionAliasRequestType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddActionAliasRequestConfig {
		alias?: string | null;
		type?: AddActionAliasRequestConfigType | null;
	}
	export interface AddActionAliasRequestConfigFormProperties {
		alias: FormControl<string | null | undefined>,
		type: FormControl<AddActionAliasRequestConfigType | null | undefined>,
	}
	export function CreateAddActionAliasRequestConfigFormGroup() {
		return new FormGroup<AddActionAliasRequestConfigFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AddActionAliasRequestConfigType | null | undefined>(undefined),
		});

	}

	export enum AddActionAliasRequestConfigType { alias = 0 }

	export enum AddActionAliasRequestType { 'mailscript-email' = 0 }

	export interface AddActionCombineRequest {

		/** Required */
		list: Array<string>;

		/** Required */
		name: string;
	}
	export interface AddActionCombineRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAddActionCombineRequestFormGroup() {
		return new FormGroup<AddActionCombineRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddActionDaemonRequest {

		/** Required */
		config: AddActionDaemonRequestConfig;

		/** Required */
		name: string;

		/** Required */
		type: AddActionDaemonRequestType;
	}
	export interface AddActionDaemonRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AddActionDaemonRequestType | null | undefined>,
	}
	export function CreateAddActionDaemonRequestFormGroup() {
		return new FormGroup<AddActionDaemonRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AddActionDaemonRequestType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddActionDaemonRequestConfig {

		/** Required */
		body: string;
		daemon?: string | null;
	}
	export interface AddActionDaemonRequestConfigFormProperties {

		/** Required */
		body: FormControl<string | null | undefined>,
		daemon: FormControl<string | null | undefined>,
	}
	export function CreateAddActionDaemonRequestConfigFormGroup() {
		return new FormGroup<AddActionDaemonRequestConfigFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			daemon: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AddActionDaemonRequestType { daemon = 0 }

	export interface AddActionForwardRequest {

		/** Required */
		config: AddActionForwardRequestConfig;

		/** Required */
		name: string;

		/** Required */
		type: AddActionAliasRequestType;
	}
	export interface AddActionForwardRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AddActionAliasRequestType | null | undefined>,
	}
	export function CreateAddActionForwardRequestFormGroup() {
		return new FormGroup<AddActionForwardRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AddActionAliasRequestType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddActionForwardRequestConfig {

		/** Required */
		forward: string;

		/** Required */
		from: string;

		/** Required */
		key: string;

		/** Required */
		type: AddActionForwardRequestConfigType;
	}
	export interface AddActionForwardRequestConfigFormProperties {

		/** Required */
		forward: FormControl<string | null | undefined>,

		/** Required */
		from: FormControl<string | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AddActionForwardRequestConfigType | null | undefined>,
	}
	export function CreateAddActionForwardRequestConfigFormGroup() {
		return new FormGroup<AddActionForwardRequestConfigFormProperties>({
			forward: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AddActionForwardRequestConfigType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AddActionForwardRequestConfigType { forward = 0 }

	export interface AddActionReplyAllRequest {

		/** Required */
		config: AddActionReplyAllRequestConfig;

		/** Required */
		name: string;

		/** Required */
		type: AddActionAliasRequestType;
	}
	export interface AddActionReplyAllRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AddActionAliasRequestType | null | undefined>,
	}
	export function CreateAddActionReplyAllRequestFormGroup() {
		return new FormGroup<AddActionReplyAllRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AddActionAliasRequestType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddActionReplyAllRequestConfig {

		/** Required */
		from: string;
		html?: string | null;

		/** Required */
		key: string;
		text?: string | null;

		/** Required */
		type: AddActionReplyAllRequestConfigType;
	}
	export interface AddActionReplyAllRequestConfigFormProperties {

		/** Required */
		from: FormControl<string | null | undefined>,
		html: FormControl<string | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AddActionReplyAllRequestConfigType | null | undefined>,
	}
	export function CreateAddActionReplyAllRequestConfigFormGroup() {
		return new FormGroup<AddActionReplyAllRequestConfigFormProperties>({
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			html: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AddActionReplyAllRequestConfigType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AddActionReplyAllRequestConfigType { replyAll = 0 }

	export interface AddActionReplyRequest {

		/** Required */
		config: AddActionReplyRequestConfig;

		/** Required */
		name: string;

		/** Required */
		type: AddActionAliasRequestType;
	}
	export interface AddActionReplyRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AddActionAliasRequestType | null | undefined>,
	}
	export function CreateAddActionReplyRequestFormGroup() {
		return new FormGroup<AddActionReplyRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AddActionAliasRequestType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddActionReplyRequestConfig {

		/** Required */
		from: string;
		html?: string | null;

		/** Required */
		key: string;
		text?: string | null;

		/** Required */
		type: AddActionReplyRequestConfigType;
	}
	export interface AddActionReplyRequestConfigFormProperties {

		/** Required */
		from: FormControl<string | null | undefined>,
		html: FormControl<string | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AddActionReplyRequestConfigType | null | undefined>,
	}
	export function CreateAddActionReplyRequestConfigFormGroup() {
		return new FormGroup<AddActionReplyRequestConfigFormProperties>({
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			html: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AddActionReplyRequestConfigType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AddActionReplyRequestConfigType { reply = 0 }

	export interface AddActionResponse {

		/** Required */
		id: string;
	}
	export interface AddActionResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateAddActionResponseFormGroup() {
		return new FormGroup<AddActionResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddActionSendRequest {

		/** Required */
		config: AddActionSendRequestConfig;

		/** Required */
		name: string;

		/** Required */
		type: AddActionAliasRequestType;
	}
	export interface AddActionSendRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AddActionAliasRequestType | null | undefined>,
	}
	export function CreateAddActionSendRequestFormGroup() {
		return new FormGroup<AddActionSendRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AddActionAliasRequestType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddActionSendRequestConfig {

		/** Required */
		from: string;
		html?: string | null;

		/** Required */
		key: string;

		/** Required */
		subject: string;
		text?: string | null;
		to?: string | null;
		type?: AddActionSendRequestConfigType | null;
	}
	export interface AddActionSendRequestConfigFormProperties {

		/** Required */
		from: FormControl<string | null | undefined>,
		html: FormControl<string | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		subject: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
		type: FormControl<AddActionSendRequestConfigType | null | undefined>,
	}
	export function CreateAddActionSendRequestConfigFormGroup() {
		return new FormGroup<AddActionSendRequestConfigFormProperties>({
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			html: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AddActionSendRequestConfigType | null | undefined>(undefined),
		});

	}

	export enum AddActionSendRequestConfigType { send = 0 }

	export interface AddActionSmsRequest {

		/** Required */
		config: AddActionSmsRequestConfig;

		/** Required */
		name: string;

		/** Required */
		type: AddActionSmsRequestType;
	}
	export interface AddActionSmsRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AddActionSmsRequestType | null | undefined>,
	}
	export function CreateAddActionSmsRequestFormGroup() {
		return new FormGroup<AddActionSmsRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AddActionSmsRequestType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddActionSmsRequestConfig {

		/** Required */
		number: string;

		/** Required */
		text: string;
	}
	export interface AddActionSmsRequestConfigFormProperties {

		/** Required */
		number: FormControl<string | null | undefined>,

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateAddActionSmsRequestConfigFormGroup() {
		return new FormGroup<AddActionSmsRequestConfigFormProperties>({
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AddActionSmsRequestType { sms = 0 }

	export interface AddActionWebhookRequest {

		/** Required */
		config: AddActionWebhookRequestConfig;

		/** Required */
		name: string;

		/** Required */
		type: AddActionWebhookRequestType;
	}
	export interface AddActionWebhookRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AddActionWebhookRequestType | null | undefined>,
	}
	export function CreateAddActionWebhookRequestFormGroup() {
		return new FormGroup<AddActionWebhookRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AddActionWebhookRequestType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddActionWebhookRequestConfig {

		/** Required */
		body: string;

		/** Required */
		opts: AddActionWebhookRequestConfigOpts;

		/** Required */
		url: string;
	}
	export interface AddActionWebhookRequestConfigFormProperties {

		/** Required */
		body: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAddActionWebhookRequestConfigFormGroup() {
		return new FormGroup<AddActionWebhookRequestConfigFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddActionWebhookRequestConfigOpts {

		/** Required */
		headers: string;

		/** Required */
		method: AddActionWebhookRequestConfigOptsMethod;
	}
	export interface AddActionWebhookRequestConfigOptsFormProperties {

		/** Required */
		headers: FormControl<string | null | undefined>,

		/** Required */
		method: FormControl<AddActionWebhookRequestConfigOptsMethod | null | undefined>,
	}
	export function CreateAddActionWebhookRequestConfigOptsFormGroup() {
		return new FormGroup<AddActionWebhookRequestConfigOptsFormProperties>({
			headers: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			method: new FormControl<AddActionWebhookRequestConfigOptsMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AddActionWebhookRequestConfigOptsMethod { POST = 0, GET = 1, DELETE = 2 }

	export enum AddActionWebhookRequestType { webhook = 0 }

	export interface AddAddressRequest {

		/** Required */
		address: string;
	}
	export interface AddAddressRequestFormProperties {

		/** Required */
		address: FormControl<string | null | undefined>,
	}
	export function CreateAddAddressRequestFormGroup() {
		return new FormGroup<AddAddressRequestFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddDomainRequest {

		/** Required */
		domain: string;
	}
	export interface AddDomainRequestFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateAddDomainRequestFormGroup() {
		return new FormGroup<AddDomainRequestFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddEmailVerificationRequest {

		/** Required */
		email: string;

		/** Required */
		type: AddEmailVerificationRequestType;
	}
	export interface AddEmailVerificationRequestFormProperties {

		/** Required */
		email: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AddEmailVerificationRequestType | null | undefined>,
	}
	export function CreateAddEmailVerificationRequestFormGroup() {
		return new FormGroup<AddEmailVerificationRequestFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AddEmailVerificationRequestType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AddEmailVerificationRequestType { email = 0 }

	export interface AddKeyRequest {

		/** Required */
		name: string;

		/** Required */
		read: boolean;

		/** Required */
		write: boolean;
	}
	export interface AddKeyRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		read: FormControl<boolean | null | undefined>,

		/** Required */
		write: FormControl<boolean | null | undefined>,
	}
	export function CreateAddKeyRequestFormGroup() {
		return new FormGroup<AddKeyRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			read: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			write: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddKeyResponse {
		id?: string | null;
	}
	export interface AddKeyResponseFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateAddKeyResponseFormGroup() {
		return new FormGroup<AddKeyResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddSmsVerificationRequest {

		/** Required */
		sms: string;

		/** Required */
		type: AddActionSmsRequestType;
	}
	export interface AddSmsVerificationRequestFormProperties {

		/** Required */
		sms: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AddActionSmsRequestType | null | undefined>,
	}
	export function CreateAddSmsVerificationRequestFormGroup() {
		return new FormGroup<AddSmsVerificationRequestFormProperties>({
			sms: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AddActionSmsRequestType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddTriggerRequest {

		/** Required */
		criteria: Criteria;

		/** Required */
		name: string;
	}
	export interface AddTriggerRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAddTriggerRequestFormGroup() {
		return new FormGroup<AddTriggerRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddTriggerResponse {

		/** Required */
		id: string;
	}
	export interface AddTriggerResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateAddTriggerResponseFormGroup() {
		return new FormGroup<AddTriggerResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddVerificationResponse {

		/** Required */
		id: string;
	}
	export interface AddVerificationResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateAddVerificationResponseFormGroup() {
		return new FormGroup<AddVerificationResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddWorkflowRequest {

		/** Required */
		action: string;
		active?: boolean | null;

		/** Required */
		input: string;

		/** Required */
		name: string;
		trigger?: string | null;
	}
	export interface AddWorkflowRequestFormProperties {

		/** Required */
		action: FormControl<string | null | undefined>,
		active: FormControl<boolean | null | undefined>,

		/** Required */
		input: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		trigger: FormControl<string | null | undefined>,
	}
	export function CreateAddWorkflowRequestFormGroup() {
		return new FormGroup<AddWorkflowRequestFormProperties>({
			action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			active: new FormControl<boolean | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trigger: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddWorkspaceRequest {

		/** Required */
		workspace: string;
	}
	export interface AddWorkspaceRequestFormProperties {

		/** Required */
		workspace: FormControl<string | null | undefined>,
	}
	export function CreateAddWorkspaceRequestFormGroup() {
		return new FormGroup<AddWorkspaceRequestFormProperties>({
			workspace: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Address {

		/** Required */
		createdAt: Date;

		/** Required */
		createdBy: string;
		displayName?: string | null;

		/** Required */
		id: string;

		/** Required */
		owner: string;
	}
	export interface AddressFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		createdBy: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		owner: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CheckDomainVerify {

		/** Required */
		domain: string;

		/** Required */
		success: boolean;
	}
	export interface CheckDomainVerifyFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,

		/** Required */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateCheckDomainVerifyFormGroup() {
		return new FormGroup<CheckDomainVerifyFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Criteria {
		domain?: string | null;
		from?: string | null;
		hasAttachments?: boolean | null;
		hasTheWords?: string | null;
		sentTo?: string | null;
		subjectContains?: string | null;
	}
	export interface CriteriaFormProperties {
		domain: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		hasAttachments: FormControl<boolean | null | undefined>,
		hasTheWords: FormControl<string | null | undefined>,
		sentTo: FormControl<string | null | undefined>,
		subjectContains: FormControl<string | null | undefined>,
	}
	export function CreateCriteriaFormGroup() {
		return new FormGroup<CriteriaFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			hasAttachments: new FormControl<boolean | null | undefined>(undefined),
			hasTheWords: new FormControl<string | null | undefined>(undefined),
			sentTo: new FormControl<string | null | undefined>(undefined),
			subjectContains: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CriteriaOperand {
		and?: Array<string>;
		or?: Array<string>;
	}
	export interface CriteriaOperandFormProperties {
	}
	export function CreateCriteriaOperandFormGroup() {
		return new FormGroup<CriteriaOperandFormProperties>({
		});

	}

	export interface DomainResponse {

		/** Required */
		domain: string;

		/** Required */
		DomainResponseRecords: Array<DomainResponseRecords>;
	}
	export interface DomainResponseFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateDomainResponseFormGroup() {
		return new FormGroup<DomainResponseFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DomainResponseRecords {

		/** Required */
		name: string;

		/** Required */
		type: string;

		/** Required */
		value: string;
	}
	export interface DomainResponseRecordsFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDomainResponseRecordsFormGroup() {
		return new FormGroup<DomainResponseRecordsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ErrorResponse {

		/** Required */
		error: string;
	}
	export interface ErrorResponseFormProperties {

		/** Required */
		error: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			error: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAllActionsResponse {

		/** Required */
		list: Array<string>;
	}
	export interface GetAllActionsResponseFormProperties {
	}
	export function CreateGetAllActionsResponseFormGroup() {
		return new FormGroup<GetAllActionsResponseFormProperties>({
		});

	}

	export interface GetAllAddressesResponse {

		/** Required */
		list: Array<string>;
	}
	export interface GetAllAddressesResponseFormProperties {
	}
	export function CreateGetAllAddressesResponseFormGroup() {
		return new FormGroup<GetAllAddressesResponseFormProperties>({
		});

	}

	export interface GetAllDomainsResponse {
		id?: Array<string>;
	}
	export interface GetAllDomainsResponseFormProperties {
	}
	export function CreateGetAllDomainsResponseFormGroup() {
		return new FormGroup<GetAllDomainsResponseFormProperties>({
		});

	}

	export interface GetAllInputsResponse {

		/** Required */
		list: Array<string>;
	}
	export interface GetAllInputsResponseFormProperties {
	}
	export function CreateGetAllInputsResponseFormGroup() {
		return new FormGroup<GetAllInputsResponseFormProperties>({
		});

	}

	export interface GetAllIntegrationsResponse {

		/** Required */
		list: Array<string>;
	}
	export interface GetAllIntegrationsResponseFormProperties {
	}
	export function CreateGetAllIntegrationsResponseFormGroup() {
		return new FormGroup<GetAllIntegrationsResponseFormProperties>({
		});

	}

	export interface GetAllKeysResponse {

		/** Required */
		list: Array<string>;
	}
	export interface GetAllKeysResponseFormProperties {
	}
	export function CreateGetAllKeysResponseFormGroup() {
		return new FormGroup<GetAllKeysResponseFormProperties>({
		});

	}

	export interface GetAllTriggersResponse {

		/** Required */
		list: Array<string>;
	}
	export interface GetAllTriggersResponseFormProperties {
	}
	export function CreateGetAllTriggersResponseFormGroup() {
		return new FormGroup<GetAllTriggersResponseFormProperties>({
		});

	}

	export interface GetAllVerificationsResponse {

		/** Required */
		list: Array<string>;
	}
	export interface GetAllVerificationsResponseFormProperties {
	}
	export function CreateGetAllVerificationsResponseFormGroup() {
		return new FormGroup<GetAllVerificationsResponseFormProperties>({
		});

	}

	export interface GetAllWorkflowsResponse {

		/** Required */
		list: Array<string>;
	}
	export interface GetAllWorkflowsResponseFormProperties {
	}
	export function CreateGetAllWorkflowsResponseFormGroup() {
		return new FormGroup<GetAllWorkflowsResponseFormProperties>({
		});

	}

	export interface GetAllWorkspacesResponse {

		/** Required */
		list: Array<string>;
	}
	export interface GetAllWorkspacesResponseFormProperties {
	}
	export function CreateGetAllWorkspacesResponseFormGroup() {
		return new FormGroup<GetAllWorkspacesResponseFormProperties>({
		});

	}

	export interface Integration {

		/** Required */
		createdAt: Date;

		/** Required */
		id: string;

		/** Required */
		type: IntegrationType;
	}
	export interface IntegrationFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<IntegrationType | null | undefined>,
	}
	export function CreateIntegrationFormGroup() {
		return new FormGroup<IntegrationFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<IntegrationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IntegrationType { google = 0 }

	export interface Key {

		/** Required */
		createdAt: Date;

		/** Required */
		createdBy: string;

		/** Required */
		id: string;

		/** Required */
		name: string;

		/** Required */
		read: boolean;

		/** Required */
		write: boolean;
	}
	export interface KeyFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		read: FormControl<boolean | null | undefined>,

		/** Required */
		write: FormControl<boolean | null | undefined>,
	}
	export function CreateKeyFormGroup() {
		return new FormGroup<KeyFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			read: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			write: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface KeyValuePair {

		/** Required */
		key: string;

		/** Required */
		value: string;
	}
	export interface KeyValuePairFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateKeyValuePairFormGroup() {
		return new FormGroup<KeyValuePairFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MailscriptEmailInput {

		/** Required */
		address: string;

		/** Required */
		createdAt: Date;

		/** Required */
		createdBy: string;

		/** Required */
		id: string;

		/** Required */
		name: string;

		/** Required */
		owner: string;

		/** Required */
		type: MailscriptEmailInputType;
	}
	export interface MailscriptEmailInputFormProperties {

		/** Required */
		address: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		owner: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<MailscriptEmailInputType | null | undefined>,
	}
	export function CreateMailscriptEmailInputFormGroup() {
		return new FormGroup<MailscriptEmailInputFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<MailscriptEmailInputType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MailscriptEmailInputType { 'mailescript-email' = 0 }

	export interface SendRequest {

		/** Required */
		from: string;
		html?: string | null;

		/** Required */
		subject: string;
		text?: string | null;

		/** Required */
		to: string;
	}
	export interface SendRequestFormProperties {

		/** Required */
		from: FormControl<string | null | undefined>,
		html: FormControl<string | null | undefined>,

		/** Required */
		subject: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,

		/** Required */
		to: FormControl<string | null | undefined>,
	}
	export function CreateSendRequestFormGroup() {
		return new FormGroup<SendRequestFormProperties>({
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			html: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SetWorkflowRequest {
		id?: string | null;
		pairs?: Array<string>;
	}
	export interface SetWorkflowRequestFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateSetWorkflowRequestFormGroup() {
		return new FormGroup<SetWorkflowRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Trigger {

		/** Required */
		createdAt: Date;

		/** Required */
		createdBy: string;

		/** Required */
		criteria: Criteria;
		displayName?: string | null;

		/** Required */
		id: string;

		/** Required */
		name: string;

		/** Required */
		owner: string;
	}
	export interface TriggerFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		createdBy: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		owner: FormControl<string | null | undefined>,
	}
	export function CreateTriggerFormGroup() {
		return new FormGroup<TriggerFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateKeyRequest {

		/** Required */
		name: string;

		/** Required */
		read: boolean;

		/** Required */
		write: boolean;
	}
	export interface UpdateKeyRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		read: FormControl<boolean | null | undefined>,

		/** Required */
		write: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateKeyRequestFormGroup() {
		return new FormGroup<UpdateKeyRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			read: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			write: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateUserRequest {

		/** Required */
		displayName: string;
	}
	export interface UpdateUserRequestFormProperties {

		/** Required */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserRequestFormGroup() {
		return new FormGroup<UpdateUserRequestFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface User {

		/** Required */
		createdAt: Date;

		/** Required */
		displayName: string;

		/** Required */
		email: string;

		/** Required */
		id: string;
		photoURL?: string | null;
	}
	export interface UserFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		displayName: FormControl<string | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		photoURL: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			photoURL: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VerificationEmail {
		email?: string | null;
		id?: string | null;
		type?: AddEmailVerificationRequestType | null;
		verified?: boolean | null;
		verifiedAt?: Date | null;
		verifiedBy?: string | null;
	}
	export interface VerificationEmailFormProperties {
		email: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		type: FormControl<AddEmailVerificationRequestType | null | undefined>,
		verified: FormControl<boolean | null | undefined>,
		verifiedAt: FormControl<Date | null | undefined>,
		verifiedBy: FormControl<string | null | undefined>,
	}
	export function CreateVerificationEmailFormGroup() {
		return new FormGroup<VerificationEmailFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AddEmailVerificationRequestType | null | undefined>(undefined),
			verified: new FormControl<boolean | null | undefined>(undefined),
			verifiedAt: new FormControl<Date | null | undefined>(undefined),
			verifiedBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VerificationSms {
		id?: string | null;
		sms?: string | null;
		type?: AddActionSmsRequestType | null;
		verified?: boolean | null;
		verifiedAt?: Date | null;
		verifiedBy?: string | null;
	}
	export interface VerificationSmsFormProperties {
		id: FormControl<string | null | undefined>,
		sms: FormControl<string | null | undefined>,
		type: FormControl<AddActionSmsRequestType | null | undefined>,
		verified: FormControl<boolean | null | undefined>,
		verifiedAt: FormControl<Date | null | undefined>,
		verifiedBy: FormControl<string | null | undefined>,
	}
	export function CreateVerificationSmsFormGroup() {
		return new FormGroup<VerificationSmsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			sms: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AddActionSmsRequestType | null | undefined>(undefined),
			verified: new FormControl<boolean | null | undefined>(undefined),
			verifiedAt: new FormControl<Date | null | undefined>(undefined),
			verifiedBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VerifyEmailRequest {

		/** Required */
		code: string;

		/** Required */
		email: string;
	}
	export interface VerifyEmailRequestFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,
	}
	export function CreateVerifyEmailRequestFormGroup() {
		return new FormGroup<VerifyEmailRequestFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VerifySmsRequest {

		/** Required */
		code: string;

		/** Required */
		sms: string;
	}
	export interface VerifySmsRequestFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		sms: FormControl<string | null | undefined>,
	}
	export function CreateVerifySmsRequestFormGroup() {
		return new FormGroup<VerifySmsRequestFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sms: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Workflow {

		/** Required */
		action: string;
		active?: boolean | null;

		/** Required */
		createdAt: Date;

		/** Required */
		createdBy: string;

		/** Required */
		id: string;

		/** Required */
		input: string;

		/** Required */
		name: string;

		/** Required */
		owner: string;

		/** Required */
		trigger: string;
	}
	export interface WorkflowFormProperties {

		/** Required */
		action: FormControl<string | null | undefined>,
		active: FormControl<boolean | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		input: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		owner: FormControl<string | null | undefined>,

		/** Required */
		trigger: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowFormGroup() {
		return new FormGroup<WorkflowFormProperties>({
			action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			active: new FormControl<boolean | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trigger: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Workspace {

		/** Required */
		createdAt: Date;

		/** Required */
		createdBy: string;

		/** Required */
		id: string;

		/** Required */
		owner: string;
	}
	export interface WorkspaceFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		owner: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceFormGroup() {
		return new FormGroup<WorkspaceFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get all actions for the user
		 * Get actions
		 * @return {GetAllActionsResponse} Successful operation
		 */
		GetAllActions(): Observable<GetAllActionsResponse> {
			return this.http.get<GetAllActionsResponse>(this.baseUri + 'actions', {});
		}

		/**
		 * Add an action
		 * Post actions
		 * @param {AddActionCombineRequest} requestBody Add action body
		 * @return {void} 
		 */
		AddAction(requestBody: AddActionCombineRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'actions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an action
		 * Delete actions/{action}
		 * @param {string} action ID of the action
		 * @return {void} 
		 */
		DeleteAction(action: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'actions/' + (action == null ? '' : encodeURIComponent(action)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an action key
		 * Put actions/{action}
		 * @param {string} action ID of action
		 * @param {AddActionCombineRequest} requestBody Action body
		 * @return {Key} Successful update operation
		 */
		UpdateAction(action: string, requestBody: AddActionCombineRequest): Observable<Key> {
			return this.http.put<Key>(this.baseUri + 'actions/' + (action == null ? '' : encodeURIComponent(action)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all addresses you have access to
		 * Get addresses
		 * @return {GetAllAddressesResponse} successful operation
		 */
		GetAllAddresses(): Observable<GetAllAddressesResponse> {
			return this.http.get<GetAllAddressesResponse>(this.baseUri + 'addresses', {});
		}

		/**
		 * Claim a new Mailscript address
		 * Post addresses
		 * @param {AddAddressRequest} requestBody Address body
		 * @return {void} successful operation
		 */
		AddAddress(requestBody: AddAddressRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'addresses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a mailscript address
		 * Delete addresses/{address}
		 * @param {string} address ID of address
		 * @return {void} 
		 */
		DeleteAddress(address: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'addresses/' + (address == null ? '' : encodeURIComponent(address)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List address keys
		 * Get addresses/{address}/keys
		 * @param {string} address ID of address
		 * @return {GetAllKeysResponse} successful operation
		 */
		GetAllKeys(address: string): Observable<GetAllKeysResponse> {
			return this.http.get<GetAllKeysResponse>(this.baseUri + 'addresses/' + (address == null ? '' : encodeURIComponent(address)) + '/keys', {});
		}

		/**
		 * Add address key
		 * Post addresses/{address}/keys
		 * @param {string} address ID of address
		 * @param {AddKeyRequest} requestBody Key body
		 * @return {void} 
		 */
		AddKey(address: string, requestBody: AddKeyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'addresses/' + (address == null ? '' : encodeURIComponent(address)) + '/keys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete address key
		 * Delete addresses/{address}/keys/{key}
		 * @param {string} address ID of address
		 * @param {string} key ID of key
		 * @return {void} 
		 */
		DeleteKey(address: string, key: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'addresses/' + (address == null ? '' : encodeURIComponent(address)) + '/keys/' + (key == null ? '' : encodeURIComponent(key)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get address key
		 * Get addresses/{address}/keys/{key}
		 * @param {string} address ID of address
		 * @param {string} key ID of key
		 * @return {Key} successful operation
		 */
		GetKey(address: string, key: string): Observable<Key> {
			return this.http.get<Key>(this.baseUri + 'addresses/' + (address == null ? '' : encodeURIComponent(address)) + '/keys/' + (key == null ? '' : encodeURIComponent(key)), {});
		}

		/**
		 * Update an address key
		 * Put addresses/{address}/keys/{key}
		 * @param {string} address ID of address
		 * @param {string} key ID of key
		 * @param {UpdateKeyRequest} requestBody Key body
		 * @return {Key} Successful operation
		 */
		UpdateKey(address: string, key: string, requestBody: UpdateKeyRequest): Observable<Key> {
			return this.http.put<Key>(this.baseUri + 'addresses/' + (address == null ? '' : encodeURIComponent(address)) + '/keys/' + (key == null ? '' : encodeURIComponent(key)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a token for opening a daemon connection
		 * Get daemons/{daemon}/token
		 * @param {string} daemon name of Daemon
		 * @return {any} Successful get operation
		 */
		GetDaemonToken(daemon: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'daemons/' + (daemon == null ? '' : encodeURIComponent(daemon)) + '/token', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all domains you have access to
		 * Get domains
		 * @return {GetAllDomainsResponse} successful operation
		 */
		GetAllDomains(): Observable<GetAllDomainsResponse> {
			return this.http.get<GetAllDomainsResponse>(this.baseUri + 'domains', {});
		}

		/**
		 * Claim a new Domain
		 * Post domains
		 * @param {AddDomainRequest} requestBody Domain body
		 * @return {DomainResponse} successful operation
		 */
		AddDomain(requestBody: AddDomainRequest): Observable<DomainResponse> {
			return this.http.post<DomainResponse>(this.baseUri + 'domains', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get domain verification
		 * Get domains/verify/{domain}
		 * @param {string} domain Full Top-level domain name
		 * @return {DomainResponse} successful operation
		 */
		GetDomainVerify(domain: string): Observable<DomainResponse> {
			return this.http.get<DomainResponse>(this.baseUri + 'domains/verify/' + (domain == null ? '' : encodeURIComponent(domain)), {});
		}

		/**
		 * Check a new Domain
		 * Post domains/verify/{domain}
		 * @param {string} domain Full Top-level domain name
		 * @return {CheckDomainVerify} successful operation
		 */
		CheckDomainVerify(domain: string): Observable<CheckDomainVerify> {
			return this.http.post<CheckDomainVerify>(this.baseUri + 'domains/verify/' + (domain == null ? '' : encodeURIComponent(domain)), null, {});
		}

		/**
		 * Remove a domain
		 * Delete domains/{domain}
		 * @param {string} domain Full Top-level domain name
		 * @return {void} successful operation
		 */
		RemoveDomainVerify(domain: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'domains/' + (domain == null ? '' : encodeURIComponent(domain)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all inputs you have access to
		 * Get inputs
		 * @return {GetAllInputsResponse} successful operation
		 */
		GetAllInputs(name: string | null | undefined): Observable<GetAllInputsResponse> {
			return this.http.get<GetAllInputsResponse>(this.baseUri + 'inputs?name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Get all integrations for the user
		 * Get integrations
		 * @return {GetAllIntegrationsResponse} Successful operation
		 */
		GetAllIntegrations(): Observable<GetAllIntegrationsResponse> {
			return this.http.get<GetAllIntegrationsResponse>(this.baseUri + 'integrations', {});
		}

		/**
		 * Delete an integration
		 * Delete integrations/{integration}
		 * @param {string} integration ID of the integration
		 * @return {void} 
		 */
		DeleteIntegration(integration: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'integrations/' + (integration == null ? '' : encodeURIComponent(integration)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Send an email
		 * Post send
		 * @param {SendRequest} requestBody request body
		 * @return {void} successful operation
		 */
		Send(requestBody: SendRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'send', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all triggers you have access to
		 * Get triggers
		 * @return {GetAllTriggersResponse} successful operation
		 */
		GetAllTriggers(): Observable<GetAllTriggersResponse> {
			return this.http.get<GetAllTriggersResponse>(this.baseUri + 'triggers', {});
		}

		/**
		 * Setup a trigger
		 * Post triggers
		 * @param {AddTriggerRequest} requestBody Trigger body
		 * @return {void} 
		 */
		AddTrigger(requestBody: AddTriggerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'triggers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a trigger
		 * Delete triggers/{trigger}
		 * @param {string} trigger ID of the trigger
		 * @return {void} 
		 */
		DeleteTrigger(trigger: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'triggers/' + (trigger == null ? '' : encodeURIComponent(trigger)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a trigger
		 * Put triggers/{trigger}
		 * @param {string} trigger ID of the trigger
		 * @param {AddTriggerRequest} requestBody Trigger body
		 * @return {void} Successful update operation
		 */
		UpdateTrigger(trigger: string, requestBody: AddTriggerRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'triggers/' + (trigger == null ? '' : encodeURIComponent(trigger)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the authenticated user
		 * Get user
		 * @return {User} successful operation
		 */
		GetAuthenticatedUser(): Observable<User> {
			return this.http.get<User>(this.baseUri + 'user', {});
		}

		/**
		 * Update a user
		 * Put user
		 * @param {UpdateUserRequest} requestBody User body
		 * @return {void} Successful update operation
		 */
		UpdateUser(requestBody: UpdateUserRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'user', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all verificats for the user
		 * Get verifications
		 * @return {GetAllVerificationsResponse} Successful operation
		 */
		GetAllVerifications(): Observable<GetAllVerificationsResponse> {
			return this.http.get<GetAllVerificationsResponse>(this.baseUri + 'verifications', {});
		}

		/**
		 * Start verification process for external email address or sms number
		 * Post verifications
		 * @param {AddEmailVerificationRequest} requestBody Key body
		 * @return {void} 
		 */
		AddVerification(requestBody: AddEmailVerificationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'verifications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify an email address or sms number with a code
		 * Post verifications/{verification}/verify
		 * @param {string} verification ID of the verification entry
		 * @param {VerifyEmailRequest} requestBody Verify action body
		 * @return {void} Successful operation
		 */
		Verify(verification: string, requestBody: VerifyEmailRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'verifications/' + (verification == null ? '' : encodeURIComponent(verification)) + '/verify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all workflows you have access to
		 * Get workflows
		 * @return {GetAllWorkflowsResponse} successful operation
		 */
		GetAllWorkflows(): Observable<GetAllWorkflowsResponse> {
			return this.http.get<GetAllWorkflowsResponse>(this.baseUri + 'workflows', {});
		}

		/**
		 * Setup workflow
		 * Post workflows
		 * @param {AddWorkflowRequest} requestBody Workflow body
		 * @return {void} 
		 */
		AddWorkflow(requestBody: AddWorkflowRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'workflows', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Set a property on a workflow
		 * Post workflows/set
		 * @param {SetWorkflowRequest} requestBody Set Workflow body
		 * @return {void} 
		 */
		SetWorkflow(requestBody: SetWorkflowRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'workflows/set', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a workflow
		 * Delete workflows/{workflow}
		 * @param {string} workflow ID of the workflow
		 * @return {void} 
		 */
		DeleteWorkflow(workflow: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'workflows/' + (workflow == null ? '' : encodeURIComponent(workflow)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an workflow
		 * Put workflows/{workflow}
		 * @param {string} workflow ID of the workflow
		 * @param {AddWorkflowRequest} requestBody Workflow body
		 * @return {void} Successful update operation
		 */
		UpdateWorkflow(workflow: string, requestBody: AddWorkflowRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'workflows/' + (workflow == null ? '' : encodeURIComponent(workflow)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all workspaces you have access to
		 * Get workspaces
		 * @return {GetAllWorkspacesResponse} successful operation
		 */
		GetAllWorkspaces(): Observable<GetAllWorkspacesResponse> {
			return this.http.get<GetAllWorkspacesResponse>(this.baseUri + 'workspaces', {});
		}

		/**
		 * Claim a Mailscript workspace
		 * An attendant address will be created as well
		 * Post workspaces
		 * @param {AddWorkspaceRequest} requestBody request body
		 * @return {void} 
		 */
		AddWorkspace(requestBody: AddWorkspaceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'workspaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

