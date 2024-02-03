import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddOrDeleteRulesRequest {
	}
	export interface AddOrDeleteRulesRequestFormProperties {
	}
	export function CreateAddOrDeleteRulesRequestFormGroup() {
		return new FormGroup<AddOrDeleteRulesRequestFormProperties>({
		});

	}


	/** A response from modifying user-specified stream filtering rules. */
	export interface AddOrDeleteRulesResponse {

		/** All user-specified stream filtering rules that were created. */
		data?: Array<Rule>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;

		/** Required */
		meta: RulesResponseMetadata;
	}

	/** A response from modifying user-specified stream filtering rules. */
	export interface AddOrDeleteRulesResponseFormProperties {
	}
	export function CreateAddOrDeleteRulesResponseFormGroup() {
		return new FormGroup<AddOrDeleteRulesResponseFormProperties>({
		});

	}


	/** A user-provided stream filtering rule. */
	export interface Rule {

		/** Unique identifier of this rule. */
		id?: string | null;

		/** A tag meant for the labeling of user provided rules. */
		tag?: string | null;

		/**
		 * The filterlang value of the rule.
		 * Required
		 */
		value: string;
	}

	/** A user-provided stream filtering rule. */
	export interface RuleFormProperties {

		/** Unique identifier of this rule. */
		id: FormControl<string | null | undefined>,

		/** A tag meant for the labeling of user provided rules. */
		tag: FormControl<string | null | undefined>,

		/**
		 * The filterlang value of the rule.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{1,19}$')]),
			tag: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An HTTP Problem Details object, as defined in IETF RFC 7807 (https://tools.ietf.org/html/rfc7807). */
	export interface Problem {
		detail?: string | null;
		status?: number | null;

		/** Required */
		title: string;

		/** Required */
		type: string;
	}

	/** An HTTP Problem Details object, as defined in IETF RFC 7807 (https://tools.ietf.org/html/rfc7807). */
	export interface ProblemFormProperties {
		detail: FormControl<string | null | undefined>,
		status: FormControl<number | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProblemFormGroup() {
		return new FormGroup<ProblemFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RulesResponseMetadata {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/** Number of Rules in result set. */
		result_count?: number | null;

		/** Required */
		sent: string;
		summary?: RulesRequestSummary;
	}
	export interface RulesResponseMetadataFormProperties {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/** Number of Rules in result set. */
		result_count: FormControl<number | null | undefined>,

		/** Required */
		sent: FormControl<string | null | undefined>,
	}
	export function CreateRulesResponseMetadataFormGroup() {
		return new FormGroup<RulesResponseMetadataFormProperties>({
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
			sent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A request to add a user-specified stream filtering rule. */
	export interface AddRulesRequest {

		/** Required */
		add: Array<RuleNoId>;
	}

	/** A request to add a user-specified stream filtering rule. */
	export interface AddRulesRequestFormProperties {
	}
	export function CreateAddRulesRequestFormGroup() {
		return new FormGroup<AddRulesRequestFormProperties>({
		});

	}


	/** A user-provided stream filtering rule. */
	export interface RuleNoId {

		/** A tag meant for the labeling of user provided rules. */
		tag?: string | null;

		/**
		 * The filterlang value of the rule.
		 * Required
		 */
		value: string;
	}

	/** A user-provided stream filtering rule. */
	export interface RuleNoIdFormProperties {

		/** A tag meant for the labeling of user provided rules. */
		tag: FormControl<string | null | undefined>,

		/**
		 * The filterlang value of the rule.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateRuleNoIdFormGroup() {
		return new FormGroup<RuleNoIdFormProperties>({
			tag: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AnimatedGif extends Media {
		preview_image_url?: string | null;

		/** An array of all available variants of the media. */
		variants?: Array<Variant>;
	}
	export interface AnimatedGifFormProperties extends MediaFormProperties {
		preview_image_url: FormControl<string | null | undefined>,
	}
	export function CreateAnimatedGifFormGroup() {
		return new FormGroup<AnimatedGifFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			media_key: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([0-9]+)_([0-9]+)$')]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			preview_image_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Variant {

		/** The bit rate of the media. */
		bit_rate?: number | null;

		/** The content type of the media. */
		content_type?: string | null;

		/** The url to the media. */
		url?: string | null;
	}
	export interface VariantFormProperties {

		/** The bit rate of the media. */
		bit_rate: FormControl<number | null | undefined>,

		/** The content type of the media. */
		content_type: FormControl<string | null | undefined>,

		/** The url to the media. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateVariantFormGroup() {
		return new FormGroup<VariantFormProperties>({
			bit_rate: new FormControl<number | null | undefined>(undefined),
			content_type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BlockUserMutationResponse {
		data?: BlockUserMutationResponseData;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
	}
	export interface BlockUserMutationResponseFormProperties {
	}
	export function CreateBlockUserMutationResponseFormGroup() {
		return new FormGroup<BlockUserMutationResponseFormProperties>({
		});

	}

	export interface BlockUserMutationResponseData {
		blocking?: boolean | null;
	}
	export interface BlockUserMutationResponseDataFormProperties {
		blocking: FormControl<boolean | null | undefined>,
	}
	export function CreateBlockUserMutationResponseDataFormGroup() {
		return new FormGroup<BlockUserMutationResponseDataFormProperties>({
			blocking: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BlockUserRequest {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		target_user_id: string;
	}
	export interface BlockUserRequestFormProperties {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		target_user_id: FormControl<string | null | undefined>,
	}
	export function CreateBlockUserRequestFormGroup() {
		return new FormGroup<BlockUserRequestFormProperties>({
			target_user_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}

	export interface BookmarkAddRequest {

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		tweet_id: string;
	}
	export interface BookmarkAddRequestFormProperties {

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		tweet_id: FormControl<string | null | undefined>,
	}
	export function CreateBookmarkAddRequestFormGroup() {
		return new FormGroup<BookmarkAddRequestFormProperties>({
			tweet_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}

	export interface BookmarkMutationResponse {
		data?: BookmarkMutationResponseData;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
	}
	export interface BookmarkMutationResponseFormProperties {
	}
	export function CreateBookmarkMutationResponseFormGroup() {
		return new FormGroup<BookmarkMutationResponseFormProperties>({
		});

	}

	export interface BookmarkMutationResponseData {
		bookmarked?: boolean | null;
	}
	export interface BookmarkMutationResponseDataFormProperties {
		bookmarked: FormControl<boolean | null | undefined>,
	}
	export function CreateBookmarkMutationResponseDataFormGroup() {
		return new FormGroup<BookmarkMutationResponseDataFormProperties>({
			bookmarked: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CashtagEntity extends EntityIndicesInclusiveExclusive {

		/** Required */
		tag: string;
	}
	export interface CashtagEntityFormProperties extends EntityIndicesInclusiveExclusiveFormProperties {

		/** Required */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateCashtagEntityFormGroup() {
		return new FormGroup<CashtagEntityFormProperties>({
			end: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			start: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			tag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represent the portion of text recognized as a Cashtag, and its start and end position within the text. */
	export interface CashtagFields {

		/** Required */
		tag: string;
	}

	/** Represent the portion of text recognized as a Cashtag, and its start and end position within the text. */
	export interface CashtagFieldsFormProperties {

		/** Required */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateCashtagFieldsFormGroup() {
		return new FormGroup<CashtagFieldsFormProperties>({
			tag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Your client has gone away. */
	export interface ClientDisconnectedProblem {
	}

	/** Your client has gone away. */
	export interface ClientDisconnectedProblemFormProperties {
	}
	export function CreateClientDisconnectedProblemFormGroup() {
		return new FormGroup<ClientDisconnectedProblemFormProperties>({
		});

	}


	/** A problem that indicates your client is forbidden from making this request. */
	export interface ClientForbiddenProblem extends Problem {
		reason?: ClientForbiddenProblemReason | null;
		registration_url?: string | null;
	}

	/** A problem that indicates your client is forbidden from making this request. */
	export interface ClientForbiddenProblemFormProperties extends ProblemFormProperties {
		reason: FormControl<ClientForbiddenProblemReason | null | undefined>,
		registration_url: FormControl<string | null | undefined>,
	}
	export function CreateClientForbiddenProblemFormGroup() {
		return new FormGroup<ClientForbiddenProblemFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<ClientForbiddenProblemReason | null | undefined>(undefined),
			registration_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClientForbiddenProblemReason { 'official-client-forbidden' = 'official-client-forbidden', 'client-not-enrolled' = 'client-not-enrolled' }

	export interface ComplianceJob {

		/**
		 * Creation time of the compliance job.
		 * Required
		 */
		created_at: Date;

		/**
		 * Expiration time of the download URL.
		 * Required
		 */
		download_expires_at: Date;

		/**
		 * URL from which the user will retrieve their compliance results.
		 * Required
		 */
		download_url: string;

		/**
		 * Compliance Job ID.
		 * Required
		 */
		id: string;

		/**
		 * User-provided name for a compliance job.
		 * Max length: 64
		 */
		name?: string | null;

		/**
		 * Status of a compliance job.
		 * Required
		 */
		status: ComplianceJobStatus;

		/**
		 * Type of compliance job to list.
		 * Required
		 */
		type: ComplianceJobType;

		/**
		 * Expiration time of the upload URL.
		 * Required
		 */
		upload_expires_at: Date;

		/**
		 * URL to which the user will upload their Tweet or user IDs.
		 * Required
		 */
		upload_url: string;
	}
	export interface ComplianceJobFormProperties {

		/**
		 * Creation time of the compliance job.
		 * Required
		 */
		created_at: FormControl<Date | null | undefined>,

		/**
		 * Expiration time of the download URL.
		 * Required
		 */
		download_expires_at: FormControl<Date | null | undefined>,

		/**
		 * URL from which the user will retrieve their compliance results.
		 * Required
		 */
		download_url: FormControl<string | null | undefined>,

		/**
		 * Compliance Job ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * User-provided name for a compliance job.
		 * Max length: 64
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Status of a compliance job.
		 * Required
		 */
		status: FormControl<ComplianceJobStatus | null | undefined>,

		/**
		 * Type of compliance job to list.
		 * Required
		 */
		type: FormControl<ComplianceJobType | null | undefined>,

		/**
		 * Expiration time of the upload URL.
		 * Required
		 */
		upload_expires_at: FormControl<Date | null | undefined>,

		/**
		 * URL to which the user will upload their Tweet or user IDs.
		 * Required
		 */
		upload_url: FormControl<string | null | undefined>,
	}
	export function CreateComplianceJobFormGroup() {
		return new FormGroup<ComplianceJobFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			download_expires_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			download_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			status: new FormControl<ComplianceJobStatus | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ComplianceJobType | null | undefined>(undefined, [Validators.required]),
			upload_expires_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			upload_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ComplianceJobStatus { created = 'created', in_progress = 'in_progress', failed = 'failed', complete = 'complete', expired = 'expired' }

	export enum ComplianceJobType { tweets = 'tweets', users = 'users' }


	/** You cannot create a new job if one is already in progress. */
	export interface ConflictProblem {
	}

	/** You cannot create a new job if one is already in progress. */
	export interface ConflictProblemFormProperties {
	}
	export function CreateConflictProblemFormGroup() {
		return new FormGroup<ConflictProblemFormProperties>({
		});

	}


	/** A problem that indicates something is wrong with the connection. */
	export interface ConnectionExceptionProblem extends Problem {
		connection_issue?: ConnectionExceptionProblemConnection_issue | null;
	}

	/** A problem that indicates something is wrong with the connection. */
	export interface ConnectionExceptionProblemFormProperties extends ProblemFormProperties {
		connection_issue: FormControl<ConnectionExceptionProblemConnection_issue | null | undefined>,
	}
	export function CreateConnectionExceptionProblemFormGroup() {
		return new FormGroup<ConnectionExceptionProblemFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			connection_issue: new FormControl<ConnectionExceptionProblemConnection_issue | null | undefined>(undefined),
		});

	}

	export enum ConnectionExceptionProblemConnection_issue { TooManyConnections = 'TooManyConnections', ProvisioningSubscription = 'ProvisioningSubscription', RuleConfigurationIssue = 'RuleConfigurationIssue', RulesInvalidIssue = 'RulesInvalidIssue' }


	/** Annotation inferred from the Tweet text. */
	export interface ContextAnnotation {

		/**
		 * Represents the data for the context annotation domain.
		 * Required
		 */
		domain: ContextAnnotationDomainFields;

		/**
		 * Represents the data for the context annotation entity.
		 * Required
		 */
		entity: ContextAnnotationEntityFields;
	}

	/** Annotation inferred from the Tweet text. */
	export interface ContextAnnotationFormProperties {
	}
	export function CreateContextAnnotationFormGroup() {
		return new FormGroup<ContextAnnotationFormProperties>({
		});

	}


	/** Represents the data for the context annotation domain. */
	export interface ContextAnnotationDomainFields {

		/** Description of the context annotation domain. */
		description?: string | null;

		/**
		 * The unique id for a context annotation domain.
		 * Required
		 */
		id: string;

		/** Name of the context annotation domain. */
		name?: string | null;
	}

	/** Represents the data for the context annotation domain. */
	export interface ContextAnnotationDomainFieldsFormProperties {

		/** Description of the context annotation domain. */
		description: FormControl<string | null | undefined>,

		/**
		 * The unique id for a context annotation domain.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Name of the context annotation domain. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateContextAnnotationDomainFieldsFormGroup() {
		return new FormGroup<ContextAnnotationDomainFieldsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the data for the context annotation entity. */
	export interface ContextAnnotationEntityFields {

		/** Description of the context annotation entity. */
		description?: string | null;

		/**
		 * The unique id for a context annotation entity.
		 * Required
		 */
		id: string;

		/** Name of the context annotation entity. */
		name?: string | null;
	}

	/** Represents the data for the context annotation entity. */
	export interface ContextAnnotationEntityFieldsFormProperties {

		/** Description of the context annotation entity. */
		description: FormControl<string | null | undefined>,

		/**
		 * The unique id for a context annotation entity.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Name of the context annotation entity. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateContextAnnotationEntityFieldsFormGroup() {
		return new FormGroup<ContextAnnotationEntityFieldsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAttachmentsMessageRequest {

		/**
		 * Attachments to a DM Event.
		 * Required
		 */
		attachments: Array<DmMediaAttachment>;

		/**
		 * Text of the message.
		 * Min length: 1
		 */
		text?: string | null;
	}
	export interface CreateAttachmentsMessageRequestFormProperties {

		/**
		 * Text of the message.
		 * Min length: 1
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreateCreateAttachmentsMessageRequestFormGroup() {
		return new FormGroup<CreateAttachmentsMessageRequestFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface DmMediaAttachment {

		/**
		 * The unique identifier of this Media.
		 * Required
		 */
		media_id: string;
	}
	export interface DmMediaAttachmentFormProperties {

		/**
		 * The unique identifier of this Media.
		 * Required
		 */
		media_id: FormControl<string | null | undefined>,
	}
	export function CreateDmMediaAttachmentFormGroup() {
		return new FormGroup<DmMediaAttachmentFormProperties>({
			media_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}


	/** A request to create a new batch compliance job. */
	export interface CreateComplianceJobRequest {

		/**
		 * User-provided name for a compliance job.
		 * Max length: 64
		 */
		name?: string | null;

		/** If true, this endpoint will return a pre-signed URL with resumable uploads enabled. */
		resumable?: boolean | null;

		/**
		 * Type of compliance job to list.
		 * Required
		 */
		type: ComplianceJobType;
	}

	/** A request to create a new batch compliance job. */
	export interface CreateComplianceJobRequestFormProperties {

		/**
		 * User-provided name for a compliance job.
		 * Max length: 64
		 */
		name: FormControl<string | null | undefined>,

		/** If true, this endpoint will return a pre-signed URL with resumable uploads enabled. */
		resumable: FormControl<boolean | null | undefined>,

		/**
		 * Type of compliance job to list.
		 * Required
		 */
		type: FormControl<ComplianceJobType | null | undefined>,
	}
	export function CreateCreateComplianceJobRequestFormGroup() {
		return new FormGroup<CreateComplianceJobRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			resumable: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<ComplianceJobType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateComplianceJobResponse {
		data?: ComplianceJob;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
	}
	export interface CreateComplianceJobResponseFormProperties {
	}
	export function CreateCreateComplianceJobResponseFormGroup() {
		return new FormGroup<CreateComplianceJobResponseFormProperties>({
		});

	}

	export interface CreateDmConversationRequest {

		/**
		 * The conversation type that is being created.
		 * Required
		 */
		conversation_type: CreateDmConversationRequestConversation_type;

		/** Required */
		message: CreateMessageRequest;

		/**
		 * Participants for the DM Conversation.
		 * Required
		 * Minimum items: 2
		 * Maximum items: 49
		 */
		participant_ids: Array<string>;
	}
	export interface CreateDmConversationRequestFormProperties {

		/**
		 * The conversation type that is being created.
		 * Required
		 */
		conversation_type: FormControl<CreateDmConversationRequestConversation_type | null | undefined>,
	}
	export function CreateCreateDmConversationRequestFormGroup() {
		return new FormGroup<CreateDmConversationRequestFormProperties>({
			conversation_type: new FormControl<CreateDmConversationRequestConversation_type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateDmConversationRequestConversation_type { Group = 'Group' }

	export interface CreateDmEventResponse {
		data?: CreateDmEventResponseData;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
	}
	export interface CreateDmEventResponseFormProperties {
	}
	export function CreateCreateDmEventResponseFormGroup() {
		return new FormGroup<CreateDmEventResponseFormProperties>({
		});

	}

	export interface CreateDmEventResponseData {

		/**
		 * Unique identifier of a DM conversation. This can either be a numeric string, or a pair of numeric strings separated by a '-' character in the case of one-on-one DM Conversations.
		 * Required
		 */
		dm_conversation_id: string;

		/**
		 * Unique identifier of a DM Event.
		 * Required
		 */
		dm_event_id: string;
	}
	export interface CreateDmEventResponseDataFormProperties {

		/**
		 * Unique identifier of a DM conversation. This can either be a numeric string, or a pair of numeric strings separated by a '-' character in the case of one-on-one DM Conversations.
		 * Required
		 */
		dm_conversation_id: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of a DM Event.
		 * Required
		 */
		dm_event_id: FormControl<string | null | undefined>,
	}
	export function CreateCreateDmEventResponseDataFormGroup() {
		return new FormGroup<CreateDmEventResponseDataFormProperties>({
			dm_conversation_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^([0-9]{1,19}-[0-9]{1,19}|[0-9]{15,19})$')]),
			dm_event_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}

	export interface CreateMessageRequest {
	}
	export interface CreateMessageRequestFormProperties {
	}
	export function CreateCreateMessageRequestFormGroup() {
		return new FormGroup<CreateMessageRequestFormProperties>({
		});

	}

	export interface CreateTextMessageRequest {

		/** Attachments to a DM Event. */
		attachments?: Array<DmMediaAttachment>;

		/**
		 * Text of the message.
		 * Required
		 * Min length: 1
		 */
		text: string;
	}
	export interface CreateTextMessageRequestFormProperties {

		/**
		 * Text of the message.
		 * Required
		 * Min length: 1
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreateCreateTextMessageRequestFormGroup() {
		return new FormGroup<CreateTextMessageRequestFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}


	/** A response from deleting user-specified stream filtering rules. */
	export interface DeleteRulesRequest {

		/**
		 * IDs and values of all deleted user-specified stream filtering rules.
		 * Required
		 */
		delete: DeleteRulesRequestDelete;
	}

	/** A response from deleting user-specified stream filtering rules. */
	export interface DeleteRulesRequestFormProperties {
	}
	export function CreateDeleteRulesRequestFormGroup() {
		return new FormGroup<DeleteRulesRequestFormProperties>({
		});

	}

	export interface DeleteRulesRequestDelete {

		/** IDs of all deleted user-specified stream filtering rules. */
		ids?: Array<string>;

		/** Values of all deleted user-specified stream filtering rules. */
		values?: Array<string>;
	}
	export interface DeleteRulesRequestDeleteFormProperties {
	}
	export function CreateDeleteRulesRequestDeleteFormGroup() {
		return new FormGroup<DeleteRulesRequestDeleteFormProperties>({
		});

	}


	/** A problem that indicates that the resource requested violates the precepts of this API. */
	export interface DisallowedResourceProblem extends Problem {

		/** Required */
		resource_id: string;

		/** Required */
		resource_type: DisallowedResourceProblemResource_type;

		/** Required */
		section: DisallowedResourceProblemSection;
	}

	/** A problem that indicates that the resource requested violates the precepts of this API. */
	export interface DisallowedResourceProblemFormProperties extends ProblemFormProperties {

		/** Required */
		resource_id: FormControl<string | null | undefined>,

		/** Required */
		resource_type: FormControl<DisallowedResourceProblemResource_type | null | undefined>,

		/** Required */
		section: FormControl<DisallowedResourceProblemSection | null | undefined>,
	}
	export function CreateDisallowedResourceProblemFormGroup() {
		return new FormGroup<DisallowedResourceProblemFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_type: new FormControl<DisallowedResourceProblemResource_type | null | undefined>(undefined, [Validators.required]),
			section: new FormControl<DisallowedResourceProblemSection | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DisallowedResourceProblemResource_type { user = 'user', tweet = 'tweet', media = 'media', list = 'list', space = 'space' }

	export enum DisallowedResourceProblemSection { data = 'data', includes = 'includes' }

	export interface DmEvent {

		/** Specifies the type of attachments (if any) present in this DM. */
		attachments?: DmEventAttachments;
		created_at?: Date | null;

		/** Unique identifier of a DM conversation. This can either be a numeric string, or a pair of numeric strings separated by a '-' character in the case of one-on-one DM Conversations. */
		dm_conversation_id?: string | null;

		/** Required */
		event_type: string;

		/**
		 * Unique identifier of a DM Event.
		 * Required
		 */
		id: string;

		/**
		 * A list of participants for a ParticipantsJoin or ParticipantsLeave event_type.
		 * Minimum items: 1
		 */
		participant_ids?: Array<string>;

		/**
		 * A list of Tweets this DM refers to.
		 * Minimum items: 1
		 */
		DmEventReferenced_tweets?: Array<DmEventReferenced_tweets>;

		/** Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		sender_id?: string | null;
		text?: string | null;
	}
	export interface DmEventFormProperties {
		created_at: FormControl<Date | null | undefined>,

		/** Unique identifier of a DM conversation. This can either be a numeric string, or a pair of numeric strings separated by a '-' character in the case of one-on-one DM Conversations. */
		dm_conversation_id: FormControl<string | null | undefined>,

		/** Required */
		event_type: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of a DM Event.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		sender_id: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateDmEventFormGroup() {
		return new FormGroup<DmEventFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			dm_conversation_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([0-9]{1,19}-[0-9]{1,19}|[0-9]{15,19})$')]),
			event_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
			sender_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{1,19}$')]),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DmEventAttachments {

		/**
		 * A list of card IDs (if cards are attached).
		 * Minimum items: 1
		 */
		card_ids?: Array<string>;

		/**
		 * A list of Media Keys for each one of the media attachments (if media are attached).
		 * Minimum items: 1
		 */
		media_keys?: Array<string>;
	}
	export interface DmEventAttachmentsFormProperties {
	}
	export function CreateDmEventAttachmentsFormGroup() {
		return new FormGroup<DmEventAttachmentsFormProperties>({
		});

	}

	export interface DmEventReferenced_tweets {

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: string;
	}
	export interface DmEventReferenced_tweetsFormProperties {

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDmEventReferenced_tweetsFormGroup() {
		return new FormGroup<DmEventReferenced_tweetsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}


	/** The rule you have submitted is a duplicate. */
	export interface DuplicateRuleProblem extends Problem {
		id?: string | null;
		value?: string | null;
	}

	/** The rule you have submitted is a duplicate. */
	export interface DuplicateRuleProblemFormProperties extends ProblemFormProperties {
		id: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateDuplicateRuleProblemFormGroup() {
		return new FormGroup<DuplicateRuleProblemFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represent a boundary range (start and end index) for a recognized entity (for example a hashtag or a mention). `start` must be smaller than `end`.  The start index is inclusive, the end index is exclusive. */
	export interface EntityIndicesInclusiveExclusive {

		/**
		 * Index (zero-based) at which position this entity ends.  The index is exclusive.
		 * Required
		 * Minimum: 0
		 */
		end: number;

		/**
		 * Index (zero-based) at which position this entity starts.  The index is inclusive.
		 * Required
		 * Minimum: 0
		 */
		start: number;
	}

	/** Represent a boundary range (start and end index) for a recognized entity (for example a hashtag or a mention). `start` must be smaller than `end`.  The start index is inclusive, the end index is exclusive. */
	export interface EntityIndicesInclusiveExclusiveFormProperties {

		/**
		 * Index (zero-based) at which position this entity ends.  The index is exclusive.
		 * Required
		 * Minimum: 0
		 */
		end: FormControl<number | null | undefined>,

		/**
		 * Index (zero-based) at which position this entity starts.  The index is inclusive.
		 * Required
		 * Minimum: 0
		 */
		start: FormControl<number | null | undefined>,
	}
	export function CreateEntityIndicesInclusiveExclusiveFormGroup() {
		return new FormGroup<EntityIndicesInclusiveExclusiveFormProperties>({
			end: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			start: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}


	/** Represent a boundary range (start and end index) for a recognized entity (for example a hashtag or a mention). `start` must be smaller than `end`.  The start index is inclusive, the end index is inclusive. */
	export interface EntityIndicesInclusiveInclusive {

		/**
		 * Index (zero-based) at which position this entity ends.  The index is inclusive.
		 * Required
		 * Minimum: 0
		 */
		end: number;

		/**
		 * Index (zero-based) at which position this entity starts.  The index is inclusive.
		 * Required
		 * Minimum: 0
		 */
		start: number;
	}

	/** Represent a boundary range (start and end index) for a recognized entity (for example a hashtag or a mention). `start` must be smaller than `end`.  The start index is inclusive, the end index is inclusive. */
	export interface EntityIndicesInclusiveInclusiveFormProperties {

		/**
		 * Index (zero-based) at which position this entity ends.  The index is inclusive.
		 * Required
		 * Minimum: 0
		 */
		end: FormControl<number | null | undefined>,

		/**
		 * Index (zero-based) at which position this entity starts.  The index is inclusive.
		 * Required
		 * Minimum: 0
		 */
		start: FormControl<number | null | undefined>,
	}
	export function CreateEntityIndicesInclusiveInclusiveFormGroup() {
		return new FormGroup<EntityIndicesInclusiveInclusiveFormProperties>({
			end: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			start: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface Error {

		/** Required */
		code: number;

		/** Required */
		message: string;
	}
	export interface ErrorFormProperties {

		/** Required */
		code: FormControl<number | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Expansions {

		/** Minimum items: 1 */
		media?: Array<Media>;

		/** Minimum items: 1 */
		places?: Array<Place>;

		/** Minimum items: 1 */
		polls?: Array<Poll>;

		/** Minimum items: 1 */
		topics?: Array<Topic>;

		/** Minimum items: 1 */
		tweets?: Array<Tweet>;

		/** Minimum items: 1 */
		users?: Array<User>;
	}
	export interface ExpansionsFormProperties {
	}
	export function CreateExpansionsFormGroup() {
		return new FormGroup<ExpansionsFormProperties>({
		});

	}

	export interface Media {

		/**
		 * The height of the media in pixels.
		 * Minimum: 0
		 */
		height?: number | null;

		/** The Media Key identifier for this attachment. */
		media_key?: string | null;

		/** Required */
		type: string;

		/**
		 * The width of the media in pixels.
		 * Minimum: 0
		 */
		width?: number | null;
	}
	export interface MediaFormProperties {

		/**
		 * The height of the media in pixels.
		 * Minimum: 0
		 */
		height: FormControl<number | null | undefined>,

		/** The Media Key identifier for this attachment. */
		media_key: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/**
		 * The width of the media in pixels.
		 * Minimum: 0
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateMediaFormGroup() {
		return new FormGroup<MediaFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			media_key: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([0-9]+)_([0-9]+)$')]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface Place {

		/** Minimum items: 1 */
		contained_within?: Array<string>;

		/** The full name of the county in which this place exists. */
		country?: string | null;

		/** A two-letter ISO 3166-1 alpha-2 country code. */
		country_code?: string | null;

		/**
		 * The full name of this place.
		 * Required
		 */
		full_name: string;
		geo?: Geo;

		/**
		 * The identifier for this place.
		 * Required
		 */
		id: string;

		/** The human readable name of this place. */
		name?: string | null;
		place_type?: PlacePlace_type | null;
	}
	export interface PlaceFormProperties {

		/** The full name of the county in which this place exists. */
		country: FormControl<string | null | undefined>,

		/** A two-letter ISO 3166-1 alpha-2 country code. */
		country_code: FormControl<string | null | undefined>,

		/**
		 * The full name of this place.
		 * Required
		 */
		full_name: FormControl<string | null | undefined>,

		/**
		 * The identifier for this place.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The human readable name of this place. */
		name: FormControl<string | null | undefined>,
		place_type: FormControl<PlacePlace_type | null | undefined>,
	}
	export function CreatePlaceFormGroup() {
		return new FormGroup<PlaceFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			country_code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Z]{2}$')]),
			full_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			place_type: new FormControl<PlacePlace_type | null | undefined>(undefined),
		});

	}

	export interface Geo {

		/**
		 * Required
		 * Minimum items: 4
		 * Maximum items: 4
		 */
		bbox: Array<number>;

		/** A [GeoJson Point](https://tools.ietf.org/html/rfc7946#section-3.1.2) geometry object. */
		geometry?: Point;

		/** Required */
		properties: string;

		/** Required */
		type: GeoType;
	}
	export interface GeoFormProperties {

		/** Required */
		properties: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<GeoType | null | undefined>,
	}
	export function CreateGeoFormGroup() {
		return new FormGroup<GeoFormProperties>({
			properties: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<GeoType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A [GeoJson Point](https://tools.ietf.org/html/rfc7946#section-3.1.2) geometry object. */
	export interface Point {

		/**
		 * A [GeoJson Position](https://tools.ietf.org/html/rfc7946#section-3.1.1) in the format `[longitude,latitude]`.
		 * Required
		 * Minimum items: 2
		 * Maximum items: 2
		 */
		coordinates: Array<number>;

		/** Required */
		type: PointType;
	}

	/** A [GeoJson Point](https://tools.ietf.org/html/rfc7946#section-3.1.2) geometry object. */
	export interface PointFormProperties {

		/** Required */
		type: FormControl<PointType | null | undefined>,
	}
	export function CreatePointFormGroup() {
		return new FormGroup<PointFormProperties>({
			type: new FormControl<PointType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PointType { Point = 'Point' }

	export enum GeoType { Feature = 'Feature' }

	export enum PlacePlace_type { poi = 'poi', neighborhood = 'neighborhood', city = 'city', admin = 'admin', country = 'country', unknown = 'unknown' }


	/** Represent a Poll attached to a Tweet. */
	export interface Poll {

		/**
		 * Minimum: 5
		 * Maximum: 10080
		 */
		duration_minutes?: number | null;
		end_datetime?: Date | null;

		/**
		 * Unique identifier of this poll.
		 * Required
		 */
		id: string;

		/**
		 * Required
		 * Minimum items: 2
		 * Maximum items: 4
		 */
		options: Array<PollOption>;
		voting_status?: PollVoting_status | null;
	}

	/** Represent a Poll attached to a Tweet. */
	export interface PollFormProperties {

		/**
		 * Minimum: 5
		 * Maximum: 10080
		 */
		duration_minutes: FormControl<number | null | undefined>,
		end_datetime: FormControl<Date | null | undefined>,

		/**
		 * Unique identifier of this poll.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
		voting_status: FormControl<PollVoting_status | null | undefined>,
	}
	export function CreatePollFormGroup() {
		return new FormGroup<PollFormProperties>({
			duration_minutes: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(10080)]),
			end_datetime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
			voting_status: new FormControl<PollVoting_status | null | undefined>(undefined),
		});

	}


	/** Describes a choice in a Poll object. */
	export interface PollOption {

		/**
		 * The text of a poll choice.
		 * Required
		 * Max length: 25
		 * Min length: 1
		 */
		label: string;

		/**
		 * Position of this choice in the poll.
		 * Required
		 */
		position: number;

		/**
		 * Number of users who voted for this choice.
		 * Required
		 */
		votes: number;
	}

	/** Describes a choice in a Poll object. */
	export interface PollOptionFormProperties {

		/**
		 * The text of a poll choice.
		 * Required
		 * Max length: 25
		 * Min length: 1
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * Position of this choice in the poll.
		 * Required
		 */
		position: FormControl<number | null | undefined>,

		/**
		 * Number of users who voted for this choice.
		 * Required
		 */
		votes: FormControl<number | null | undefined>,
	}
	export function CreatePollOptionFormGroup() {
		return new FormGroup<PollOptionFormProperties>({
			label: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),
			position: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			votes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PollVoting_status { open = 'open', closed = 'closed' }


	/** The topic of a Space, as selected by its creator. */
	export interface Topic {

		/** The description of the given topic. */
		description?: string | null;

		/**
		 * Unique identifier of this Topic.
		 * Required
		 */
		id: string;

		/**
		 * The name of the given topic.
		 * Required
		 */
		name: string;
	}

	/** The topic of a Space, as selected by its creator. */
	export interface TopicFormProperties {

		/** The description of the given topic. */
		description: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of this Topic.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the given topic.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTopicFormGroup() {
		return new FormGroup<TopicFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Tweet {

		/** Specifies the type of attachments (if any) present in this Tweet. */
		attachments?: TweetAttachments;

		/** Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		author_id?: string | null;

		/** Minimum items: 1 */
		context_annotations?: Array<ContextAnnotation>;

		/** Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		conversation_id?: string | null;

		/** Creation time of the Tweet. */
		created_at?: Date | null;
		edit_controls?: TweetEdit_controls;

		/**
		 * A list of Tweet Ids in this Tweet chain.
		 * Required
		 * Minimum items: 1
		 */
		edit_history_tweet_ids: Array<string>;
		entities?: FullTextEntities;

		/** The location tagged on the Tweet, if the user provided one. */
		geo?: TweetGeo;

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: string;

		/** Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		in_reply_to_user_id?: string | null;

		/** Language of the Tweet, if detected by Twitter. Returned as a BCP47 language tag. */
		lang?: string | null;

		/** Nonpublic engagement metrics for the Tweet at the time of the request. */
		non_public_metrics?: TweetNon_public_metrics;

		/** Organic nonpublic engagement metrics for the Tweet at the time of the request. */
		organic_metrics?: TweetOrganic_metrics;

		/** Indicates if this Tweet contains URLs marked as sensitive, for example content suitable for mature audiences. */
		possibly_sensitive?: boolean | null;

		/** Promoted nonpublic engagement metrics for the Tweet at the time of the request. */
		promoted_metrics?: TweetPromoted_metrics;

		/** Engagement metrics for the Tweet at the time of the request. */
		public_metrics?: TweetPublic_metrics;

		/**
		 * A list of Tweets this Tweet refers to. For example, if the parent Tweet is a Retweet, a Quoted Tweet or a Reply, it will include the related Tweet referenced to by its parent.
		 * Minimum items: 1
		 */
		TweetReferenced_tweets?: Array<TweetReferenced_tweets>;

		/** Shows who can reply a Tweet. Fields returned are everyone, mentioned_users, and following. */
		reply_settings?: TweetReply_settings | null;

		/** This is deprecated. */
		source?: string | null;

		/**
		 * The content of the Tweet.
		 * Required
		 */
		text: string;

		/** Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country). */
		withheld?: TweetWithheld;
	}
	export interface TweetFormProperties {

		/** Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		author_id: FormControl<string | null | undefined>,

		/** Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		conversation_id: FormControl<string | null | undefined>,

		/** Creation time of the Tweet. */
		created_at: FormControl<Date | null | undefined>,

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		in_reply_to_user_id: FormControl<string | null | undefined>,

		/** Language of the Tweet, if detected by Twitter. Returned as a BCP47 language tag. */
		lang: FormControl<string | null | undefined>,

		/** Indicates if this Tweet contains URLs marked as sensitive, for example content suitable for mature audiences. */
		possibly_sensitive: FormControl<boolean | null | undefined>,

		/** Shows who can reply a Tweet. Fields returned are everyone, mentioned_users, and following. */
		reply_settings: FormControl<TweetReply_settings | null | undefined>,

		/** This is deprecated. */
		source: FormControl<string | null | undefined>,

		/**
		 * The content of the Tweet.
		 * Required
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreateTweetFormGroup() {
		return new FormGroup<TweetFormProperties>({
			author_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{1,19}$')]),
			conversation_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{1,19}$')]),
			created_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
			in_reply_to_user_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{1,19}$')]),
			lang: new FormControl<string | null | undefined>(undefined),
			possibly_sensitive: new FormControl<boolean | null | undefined>(undefined),
			reply_settings: new FormControl<TweetReply_settings | null | undefined>(undefined, [Validators.pattern('^[A-Za-z]{1,12}$')]),
			source: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TweetAttachments {

		/**
		 * A list of Media Keys for each one of the media attachments (if media are attached).
		 * Minimum items: 1
		 */
		media_keys?: Array<string>;

		/**
		 * A list of poll IDs (if polls are attached).
		 * Minimum items: 1
		 */
		poll_ids?: Array<string>;
	}
	export interface TweetAttachmentsFormProperties {
	}
	export function CreateTweetAttachmentsFormGroup() {
		return new FormGroup<TweetAttachmentsFormProperties>({
		});

	}

	export interface TweetEdit_controls {

		/**
		 * Time when Tweet is no longer editable.
		 * Required
		 */
		editable_until: Date;

		/**
		 * Number of times this Tweet can be edited.
		 * Required
		 */
		edits_remaining: number;

		/**
		 * Indicates if this Tweet is eligible to be edited.
		 * Required
		 */
		is_edit_eligible: boolean;
	}
	export interface TweetEdit_controlsFormProperties {

		/**
		 * Time when Tweet is no longer editable.
		 * Required
		 */
		editable_until: FormControl<Date | null | undefined>,

		/**
		 * Number of times this Tweet can be edited.
		 * Required
		 */
		edits_remaining: FormControl<number | null | undefined>,

		/**
		 * Indicates if this Tweet is eligible to be edited.
		 * Required
		 */
		is_edit_eligible: FormControl<boolean | null | undefined>,
	}
	export function CreateTweetEdit_controlsFormGroup() {
		return new FormGroup<TweetEdit_controlsFormProperties>({
			editable_until: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			edits_remaining: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			is_edit_eligible: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FullTextEntities {

		/** Minimum items: 1 */
		annotations?: Array<string>;

		/** Minimum items: 1 */
		cashtags?: Array<CashtagEntity>;

		/** Minimum items: 1 */
		hashtags?: Array<HashtagEntity>;

		/** Minimum items: 1 */
		mentions?: Array<MentionEntity>;

		/** Minimum items: 1 */
		urls?: Array<UrlEntity>;
	}
	export interface FullTextEntitiesFormProperties {
	}
	export function CreateFullTextEntitiesFormGroup() {
		return new FormGroup<FullTextEntitiesFormProperties>({
		});

	}

	export interface HashtagEntity extends EntityIndicesInclusiveExclusive {

		/**
		 * The text of the Hashtag.
		 * Required
		 */
		tag: string;
	}
	export interface HashtagEntityFormProperties extends EntityIndicesInclusiveExclusiveFormProperties {

		/**
		 * The text of the Hashtag.
		 * Required
		 */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateHashtagEntityFormGroup() {
		return new FormGroup<HashtagEntityFormProperties>({
			end: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			start: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			tag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MentionEntity extends EntityIndicesInclusiveExclusive {

		/** Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		id?: string | null;

		/**
		 * The Twitter handle (screen name) of this user.
		 * Required
		 */
		username: string;
	}
	export interface MentionEntityFormProperties extends EntityIndicesInclusiveExclusiveFormProperties {

		/** Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		id: FormControl<string | null | undefined>,

		/**
		 * The Twitter handle (screen name) of this user.
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateMentionEntityFormGroup() {
		return new FormGroup<MentionEntityFormProperties>({
			end: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			start: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{1,19}$')]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z0-9_]{1,15}$')]),
		});

	}


	/** Represent the portion of text recognized as a URL, and its start and end position within the text. */
	export interface UrlEntity extends EntityIndicesInclusiveExclusive {

		/** Description of the URL landing page. */
		description?: string | null;

		/** The URL as displayed in the Twitter client. */
		display_url?: string | null;

		/** A validly formatted URL. */
		expanded_url?: string | null;

		/** Minimum items: 1 */
		images?: Array<UrlImage>;

		/** The Media Key identifier for this attachment. */
		media_key?: string | null;

		/**
		 * HTTP Status Code.
		 * Minimum: 100
		 * Maximum: 599
		 */
		status?: number | null;

		/** Title of the page the URL points to. */
		title?: string | null;

		/** Fully resolved url. */
		unwound_url?: string | null;

		/**
		 * A validly formatted URL.
		 * Required
		 */
		url: string;
	}

	/** Represent the portion of text recognized as a URL, and its start and end position within the text. */
	export interface UrlEntityFormProperties extends EntityIndicesInclusiveExclusiveFormProperties {

		/** Description of the URL landing page. */
		description: FormControl<string | null | undefined>,

		/** The URL as displayed in the Twitter client. */
		display_url: FormControl<string | null | undefined>,

		/** A validly formatted URL. */
		expanded_url: FormControl<string | null | undefined>,

		/** The Media Key identifier for this attachment. */
		media_key: FormControl<string | null | undefined>,

		/**
		 * HTTP Status Code.
		 * Minimum: 100
		 * Maximum: 599
		 */
		status: FormControl<number | null | undefined>,

		/** Title of the page the URL points to. */
		title: FormControl<string | null | undefined>,

		/** Fully resolved url. */
		unwound_url: FormControl<string | null | undefined>,

		/**
		 * A validly formatted URL.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateUrlEntityFormGroup() {
		return new FormGroup<UrlEntityFormProperties>({
			end: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			start: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			description: new FormControl<string | null | undefined>(undefined),
			display_url: new FormControl<string | null | undefined>(undefined),
			expanded_url: new FormControl<string | null | undefined>(undefined),
			media_key: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([0-9]+)_([0-9]+)$')]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.min(100), Validators.max(599)]),
			title: new FormControl<string | null | undefined>(undefined),
			unwound_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represent the information for the URL image. */
	export interface UrlImage {

		/**
		 * The height of the media in pixels.
		 * Minimum: 0
		 */
		height?: number | null;

		/** A validly formatted URL. */
		url?: string | null;

		/**
		 * The width of the media in pixels.
		 * Minimum: 0
		 */
		width?: number | null;
	}

	/** Represent the information for the URL image. */
	export interface UrlImageFormProperties {

		/**
		 * The height of the media in pixels.
		 * Minimum: 0
		 */
		height: FormControl<number | null | undefined>,

		/** A validly formatted URL. */
		url: FormControl<string | null | undefined>,

		/**
		 * The width of the media in pixels.
		 * Minimum: 0
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateUrlImageFormGroup() {
		return new FormGroup<UrlImageFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface TweetGeo {

		/** A [GeoJson Point](https://tools.ietf.org/html/rfc7946#section-3.1.2) geometry object. */
		coordinates?: Point;

		/** The identifier for this place. */
		place_id?: string | null;
	}
	export interface TweetGeoFormProperties {

		/** The identifier for this place. */
		place_id: FormControl<string | null | undefined>,
	}
	export function CreateTweetGeoFormGroup() {
		return new FormGroup<TweetGeoFormProperties>({
			place_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TweetNon_public_metrics {

		/** Number of times this Tweet has been viewed. */
		impression_count?: number | null;
	}
	export interface TweetNon_public_metricsFormProperties {

		/** Number of times this Tweet has been viewed. */
		impression_count: FormControl<number | null | undefined>,
	}
	export function CreateTweetNon_public_metricsFormGroup() {
		return new FormGroup<TweetNon_public_metricsFormProperties>({
			impression_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TweetOrganic_metrics {

		/**
		 * Number of times this Tweet has been viewed.
		 * Required
		 */
		impression_count: number;

		/**
		 * Number of times this Tweet has been liked.
		 * Required
		 */
		like_count: number;

		/**
		 * Number of times this Tweet has been replied to.
		 * Required
		 */
		reply_count: number;

		/**
		 * Number of times this Tweet has been Retweeted.
		 * Required
		 */
		retweet_count: number;
	}
	export interface TweetOrganic_metricsFormProperties {

		/**
		 * Number of times this Tweet has been viewed.
		 * Required
		 */
		impression_count: FormControl<number | null | undefined>,

		/**
		 * Number of times this Tweet has been liked.
		 * Required
		 */
		like_count: FormControl<number | null | undefined>,

		/**
		 * Number of times this Tweet has been replied to.
		 * Required
		 */
		reply_count: FormControl<number | null | undefined>,

		/**
		 * Number of times this Tweet has been Retweeted.
		 * Required
		 */
		retweet_count: FormControl<number | null | undefined>,
	}
	export function CreateTweetOrganic_metricsFormGroup() {
		return new FormGroup<TweetOrganic_metricsFormProperties>({
			impression_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			like_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			reply_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			retweet_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TweetPromoted_metrics {

		/** Number of times this Tweet has been viewed. */
		impression_count?: number | null;

		/** Number of times this Tweet has been liked. */
		like_count?: number | null;

		/** Number of times this Tweet has been replied to. */
		reply_count?: number | null;

		/** Number of times this Tweet has been Retweeted. */
		retweet_count?: number | null;
	}
	export interface TweetPromoted_metricsFormProperties {

		/** Number of times this Tweet has been viewed. */
		impression_count: FormControl<number | null | undefined>,

		/** Number of times this Tweet has been liked. */
		like_count: FormControl<number | null | undefined>,

		/** Number of times this Tweet has been replied to. */
		reply_count: FormControl<number | null | undefined>,

		/** Number of times this Tweet has been Retweeted. */
		retweet_count: FormControl<number | null | undefined>,
	}
	export function CreateTweetPromoted_metricsFormGroup() {
		return new FormGroup<TweetPromoted_metricsFormProperties>({
			impression_count: new FormControl<number | null | undefined>(undefined),
			like_count: new FormControl<number | null | undefined>(undefined),
			reply_count: new FormControl<number | null | undefined>(undefined),
			retweet_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TweetPublic_metrics {

		/**
		 * Number of times this Tweet has been viewed.
		 * Required
		 */
		impression_count: number;

		/**
		 * Number of times this Tweet has been liked.
		 * Required
		 */
		like_count: number;

		/** Number of times this Tweet has been quoted. */
		quote_count?: number | null;

		/**
		 * Number of times this Tweet has been replied to.
		 * Required
		 */
		reply_count: number;

		/**
		 * Number of times this Tweet has been Retweeted.
		 * Required
		 */
		retweet_count: number;
	}
	export interface TweetPublic_metricsFormProperties {

		/**
		 * Number of times this Tweet has been viewed.
		 * Required
		 */
		impression_count: FormControl<number | null | undefined>,

		/**
		 * Number of times this Tweet has been liked.
		 * Required
		 */
		like_count: FormControl<number | null | undefined>,

		/** Number of times this Tweet has been quoted. */
		quote_count: FormControl<number | null | undefined>,

		/**
		 * Number of times this Tweet has been replied to.
		 * Required
		 */
		reply_count: FormControl<number | null | undefined>,

		/**
		 * Number of times this Tweet has been Retweeted.
		 * Required
		 */
		retweet_count: FormControl<number | null | undefined>,
	}
	export function CreateTweetPublic_metricsFormGroup() {
		return new FormGroup<TweetPublic_metricsFormProperties>({
			impression_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			like_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quote_count: new FormControl<number | null | undefined>(undefined),
			reply_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			retweet_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TweetReferenced_tweets {

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: string;

		/** Required */
		type: TweetReferenced_tweetsType;
	}
	export interface TweetReferenced_tweetsFormProperties {

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<TweetReferenced_tweetsType | null | undefined>,
	}
	export function CreateTweetReferenced_tweetsFormGroup() {
		return new FormGroup<TweetReferenced_tweetsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
			type: new FormControl<TweetReferenced_tweetsType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TweetReferenced_tweetsType { retweeted = 'retweeted', quoted = 'quoted', replied_to = 'replied_to' }

	export enum TweetReply_settings { everyone = 'everyone', mentionedUsers = 'mentionedUsers', following = 'following', other = 'other' }


	/** Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country). */
	export interface TweetWithheld {

		/**
		 * Indicates if the content is being withheld for on the basis of copyright infringement.
		 * Required
		 */
		copyright: boolean;

		/**
		 * Provides a list of countries where this content is not available.
		 * Required
		 * Minimum items: 1
		 */
		country_codes: Array<string>;

		/** Indicates whether the content being withheld is the `tweet` or a `user`. */
		scope?: TweetWithheldScope | null;
	}

	/** Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country). */
	export interface TweetWithheldFormProperties {

		/**
		 * Indicates if the content is being withheld for on the basis of copyright infringement.
		 * Required
		 */
		copyright: FormControl<boolean | null | undefined>,

		/** Indicates whether the content being withheld is the `tweet` or a `user`. */
		scope: FormControl<TweetWithheldScope | null | undefined>,
	}
	export function CreateTweetWithheldFormGroup() {
		return new FormGroup<TweetWithheldFormProperties>({
			copyright: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			scope: new FormControl<TweetWithheldScope | null | undefined>(undefined),
		});

	}

	export enum TweetWithheldScope { tweet = 'tweet', user = 'user' }


	/** The Twitter User object. */
	export interface User {

		/** Creation time of this User. */
		created_at?: Date | null;

		/** The text of this User's profile description (also known as bio), if the User provided one. */
		description?: string | null;

		/** A list of metadata found in the User's profile description. */
		entities?: UserEntities;

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: string;

		/** The location specified in the User's profile, if the User provided one. As this is a freeform value, it may not indicate a valid location, but it may be fuzzily evaluated when performing searches with location queries. */
		location?: string | null;

		/**
		 * The friendly name of this User, as shown on their profile.
		 * Required
		 */
		name: string;

		/** Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		pinned_tweet_id?: string | null;

		/** The URL to the profile image for this User. */
		profile_image_url?: string | null;

		/** Indicates if this User has chosen to protect their Tweets (in other words, if this User's Tweets are private). */
		protected?: boolean | null;

		/** A list of metrics for this User. */
		public_metrics?: UserPublic_metrics;

		/** The URL specified in the User's profile. */
		url?: string | null;

		/**
		 * The Twitter handle (screen name) of this user.
		 * Required
		 */
		username: string;

		/** Indicate if this User is a verified Twitter User. */
		verified?: boolean | null;

		/** The Twitter Blue verified type of the user, eg: blue, government, business or none. */
		verified_type?: string | null;

		/** Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country). */
		withheld?: UserWithheld;
	}

	/** The Twitter User object. */
	export interface UserFormProperties {

		/** Creation time of this User. */
		created_at: FormControl<Date | null | undefined>,

		/** The text of this User's profile description (also known as bio), if the User provided one. */
		description: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The location specified in the User's profile, if the User provided one. As this is a freeform value, it may not indicate a valid location, but it may be fuzzily evaluated when performing searches with location queries. */
		location: FormControl<string | null | undefined>,

		/**
		 * The friendly name of this User, as shown on their profile.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		pinned_tweet_id: FormControl<string | null | undefined>,

		/** The URL to the profile image for this User. */
		profile_image_url: FormControl<string | null | undefined>,

		/** Indicates if this User has chosen to protect their Tweets (in other words, if this User's Tweets are private). */
		protected: FormControl<boolean | null | undefined>,

		/** The URL specified in the User's profile. */
		url: FormControl<string | null | undefined>,

		/**
		 * The Twitter handle (screen name) of this user.
		 * Required
		 */
		username: FormControl<string | null | undefined>,

		/** Indicate if this User is a verified Twitter User. */
		verified: FormControl<boolean | null | undefined>,

		/** The Twitter Blue verified type of the user, eg: blue, government, business or none. */
		verified_type: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pinned_tweet_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{1,19}$')]),
			profile_image_url: new FormControl<string | null | undefined>(undefined),
			protected: new FormControl<boolean | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z0-9_]{1,15}$')]),
			verified: new FormControl<boolean | null | undefined>(undefined),
			verified_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserEntities {
		description?: FullTextEntities;

		/** Expanded details for the URL specified in the User's profile, with start and end indices. */
		url?: UserEntitiesUrl;
	}
	export interface UserEntitiesFormProperties {
	}
	export function CreateUserEntitiesFormGroup() {
		return new FormGroup<UserEntitiesFormProperties>({
		});

	}

	export interface UserEntitiesUrl {

		/** Minimum items: 1 */
		urls?: Array<UrlEntity>;
	}
	export interface UserEntitiesUrlFormProperties {
	}
	export function CreateUserEntitiesUrlFormGroup() {
		return new FormGroup<UserEntitiesUrlFormProperties>({
		});

	}

	export interface UserPublic_metrics {

		/**
		 * Number of Users who are following this User.
		 * Required
		 */
		followers_count: number;

		/**
		 * Number of Users this User is following.
		 * Required
		 */
		following_count: number;

		/**
		 * The number of lists that include this User.
		 * Required
		 */
		listed_count: number;

		/**
		 * The number of Tweets (including Retweets) posted by this User.
		 * Required
		 */
		tweet_count: number;
	}
	export interface UserPublic_metricsFormProperties {

		/**
		 * Number of Users who are following this User.
		 * Required
		 */
		followers_count: FormControl<number | null | undefined>,

		/**
		 * Number of Users this User is following.
		 * Required
		 */
		following_count: FormControl<number | null | undefined>,

		/**
		 * The number of lists that include this User.
		 * Required
		 */
		listed_count: FormControl<number | null | undefined>,

		/**
		 * The number of Tweets (including Retweets) posted by this User.
		 * Required
		 */
		tweet_count: FormControl<number | null | undefined>,
	}
	export function CreateUserPublic_metricsFormGroup() {
		return new FormGroup<UserPublic_metricsFormProperties>({
			followers_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			following_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			listed_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			tweet_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country). */
	export interface UserWithheld {

		/**
		 * Provides a list of countries where this content is not available.
		 * Required
		 * Minimum items: 1
		 */
		country_codes: Array<string>;

		/** Indicates that the content being withheld is a `user`. */
		scope?: UserWithheldScope | null;
	}

	/** Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country). */
	export interface UserWithheldFormProperties {

		/** Indicates that the content being withheld is a `user`. */
		scope: FormControl<UserWithheldScope | null | undefined>,
	}
	export function CreateUserWithheldFormGroup() {
		return new FormGroup<UserWithheldFormProperties>({
			scope: new FormControl<UserWithheldScope | null | undefined>(undefined),
		});

	}

	export enum UserWithheldScope { user = 'user' }


	/** A problem that indicates that you are not allowed to see a particular field on a Tweet, User, etc. */
	export interface FieldUnauthorizedProblem extends Problem {

		/** Required */
		field: string;

		/** Required */
		resource_type: DisallowedResourceProblemResource_type;

		/** Required */
		section: DisallowedResourceProblemSection;
	}

	/** A problem that indicates that you are not allowed to see a particular field on a Tweet, User, etc. */
	export interface FieldUnauthorizedProblemFormProperties extends ProblemFormProperties {

		/** Required */
		field: FormControl<string | null | undefined>,

		/** Required */
		resource_type: FormControl<DisallowedResourceProblemResource_type | null | undefined>,

		/** Required */
		section: FormControl<DisallowedResourceProblemSection | null | undefined>,
	}
	export function CreateFieldUnauthorizedProblemFormGroup() {
		return new FormGroup<FieldUnauthorizedProblemFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			field: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_type: new FormControl<DisallowedResourceProblemResource_type | null | undefined>(undefined, [Validators.required]),
			section: new FormControl<DisallowedResourceProblemSection | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A Tweet or error that can be returned by the streaming Tweet API. The values returned with a successful streamed Tweet includes the user provided rules that the Tweet matched. */
	export interface FilteredStreamingTweetResponse {
		data?: Tweet;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;

		/** The list of rules which matched the Tweet */
		FilteredStreamingTweetResponseMatching_rules?: Array<FilteredStreamingTweetResponseMatching_rules>;
	}

	/** A Tweet or error that can be returned by the streaming Tweet API. The values returned with a successful streamed Tweet includes the user provided rules that the Tweet matched. */
	export interface FilteredStreamingTweetResponseFormProperties {
	}
	export function CreateFilteredStreamingTweetResponseFormGroup() {
		return new FormGroup<FilteredStreamingTweetResponseFormProperties>({
		});

	}

	export interface FilteredStreamingTweetResponseMatching_rules {

		/**
		 * Unique identifier of this rule.
		 * Required
		 */
		id: string;

		/** A tag meant for the labeling of user provided rules. */
		tag?: string | null;
	}
	export interface FilteredStreamingTweetResponseMatching_rulesFormProperties {

		/**
		 * Unique identifier of this rule.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** A tag meant for the labeling of user provided rules. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateFilteredStreamingTweetResponseMatching_rulesFormGroup() {
		return new FormGroup<FilteredStreamingTweetResponseMatching_rulesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic problem with no additional information beyond that provided by the HTTP status code. */
	export interface GenericProblem {
	}

	/** A generic problem with no additional information beyond that provided by the HTTP status code. */
	export interface GenericProblemFormProperties {
	}
	export function CreateGenericProblemFormGroup() {
		return new FormGroup<GenericProblemFormProperties>({
		});

	}

	export interface Get2ComplianceJobsIdResponse {
		data?: ComplianceJob;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
	}
	export interface Get2ComplianceJobsIdResponseFormProperties {
	}
	export function CreateGet2ComplianceJobsIdResponseFormGroup() {
		return new FormGroup<Get2ComplianceJobsIdResponseFormProperties>({
		});

	}

	export interface Get2ComplianceJobsResponse {

		/** Minimum items: 1 */
		data?: Array<ComplianceJob>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		meta?: Get2ComplianceJobsResponseMeta;
	}
	export interface Get2ComplianceJobsResponseFormProperties {
	}
	export function CreateGet2ComplianceJobsResponseFormGroup() {
		return new FormGroup<Get2ComplianceJobsResponseFormProperties>({
		});

	}

	export interface Get2ComplianceJobsResponseMeta {

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2ComplianceJobsResponseMetaFormProperties {

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2ComplianceJobsResponseMetaFormGroup() {
		return new FormGroup<Get2ComplianceJobsResponseMetaFormProperties>({
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2DmConversationsIdDmEventsResponse {

		/** Minimum items: 1 */
		data?: Array<DmEvent>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2DmConversationsIdDmEventsResponseMeta;
	}
	export interface Get2DmConversationsIdDmEventsResponseFormProperties {
	}
	export function CreateGet2DmConversationsIdDmEventsResponseFormGroup() {
		return new FormGroup<Get2DmConversationsIdDmEventsResponseFormProperties>({
		});

	}

	export interface Get2DmConversationsIdDmEventsResponseMeta {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2DmConversationsIdDmEventsResponseMetaFormProperties {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2DmConversationsIdDmEventsResponseMetaFormGroup() {
		return new FormGroup<Get2DmConversationsIdDmEventsResponseMetaFormProperties>({
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			previous_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2DmConversationsWithParticipantIdDmEventsResponse {

		/** Minimum items: 1 */
		data?: Array<DmEvent>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2DmConversationsWithParticipantIdDmEventsResponseMeta;
	}
	export interface Get2DmConversationsWithParticipantIdDmEventsResponseFormProperties {
	}
	export function CreateGet2DmConversationsWithParticipantIdDmEventsResponseFormGroup() {
		return new FormGroup<Get2DmConversationsWithParticipantIdDmEventsResponseFormProperties>({
		});

	}

	export interface Get2DmConversationsWithParticipantIdDmEventsResponseMeta {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2DmConversationsWithParticipantIdDmEventsResponseMetaFormProperties {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2DmConversationsWithParticipantIdDmEventsResponseMetaFormGroup() {
		return new FormGroup<Get2DmConversationsWithParticipantIdDmEventsResponseMetaFormProperties>({
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			previous_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2DmEventsResponse {

		/** Minimum items: 1 */
		data?: Array<DmEvent>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2DmEventsResponseMeta;
	}
	export interface Get2DmEventsResponseFormProperties {
	}
	export function CreateGet2DmEventsResponseFormGroup() {
		return new FormGroup<Get2DmEventsResponseFormProperties>({
		});

	}

	export interface Get2DmEventsResponseMeta {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2DmEventsResponseMetaFormProperties {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2DmEventsResponseMetaFormGroup() {
		return new FormGroup<Get2DmEventsResponseMetaFormProperties>({
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			previous_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2ListsIdFollowersResponse {

		/** Minimum items: 1 */
		data?: Array<User>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2ListsIdFollowersResponseMeta;
	}
	export interface Get2ListsIdFollowersResponseFormProperties {
	}
	export function CreateGet2ListsIdFollowersResponseFormGroup() {
		return new FormGroup<Get2ListsIdFollowersResponseFormProperties>({
		});

	}

	export interface Get2ListsIdFollowersResponseMeta {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2ListsIdFollowersResponseMetaFormProperties {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2ListsIdFollowersResponseMetaFormGroup() {
		return new FormGroup<Get2ListsIdFollowersResponseMetaFormProperties>({
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			previous_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2ListsIdMembersResponse {

		/** Minimum items: 1 */
		data?: Array<User>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2ListsIdMembersResponseMeta;
	}
	export interface Get2ListsIdMembersResponseFormProperties {
	}
	export function CreateGet2ListsIdMembersResponseFormGroup() {
		return new FormGroup<Get2ListsIdMembersResponseFormProperties>({
		});

	}

	export interface Get2ListsIdMembersResponseMeta {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2ListsIdMembersResponseMetaFormProperties {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2ListsIdMembersResponseMetaFormGroup() {
		return new FormGroup<Get2ListsIdMembersResponseMetaFormProperties>({
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			previous_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2ListsIdResponse {

		/** A Twitter List is a curated group of accounts. */
		data?: List;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
	}
	export interface Get2ListsIdResponseFormProperties {
	}
	export function CreateGet2ListsIdResponseFormGroup() {
		return new FormGroup<Get2ListsIdResponseFormProperties>({
		});

	}


	/** A Twitter List is a curated group of accounts. */
	export interface List {
		created_at?: Date | null;
		description?: string | null;
		follower_count?: number | null;

		/**
		 * The unique identifier of this List.
		 * Required
		 */
		id: string;
		member_count?: number | null;

		/**
		 * The name of this List.
		 * Required
		 */
		name: string;

		/** Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		owner_id?: string | null;
		private?: boolean | null;
	}

	/** A Twitter List is a curated group of accounts. */
	export interface ListFormProperties {
		created_at: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		follower_count: FormControl<number | null | undefined>,

		/**
		 * The unique identifier of this List.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
		member_count: FormControl<number | null | undefined>,

		/**
		 * The name of this List.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		owner_id: FormControl<string | null | undefined>,
		private: FormControl<boolean | null | undefined>,
	}
	export function CreateListFormGroup() {
		return new FormGroup<ListFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			follower_count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
			member_count: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{1,19}$')]),
			private: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Get2ListsIdTweetsResponse {

		/** Minimum items: 1 */
		data?: Array<Tweet>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2ListsIdTweetsResponseMeta;
	}
	export interface Get2ListsIdTweetsResponseFormProperties {
	}
	export function CreateGet2ListsIdTweetsResponseFormGroup() {
		return new FormGroup<Get2ListsIdTweetsResponseFormProperties>({
		});

	}

	export interface Get2ListsIdTweetsResponseMeta {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2ListsIdTweetsResponseMetaFormProperties {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2ListsIdTweetsResponseMetaFormGroup() {
		return new FormGroup<Get2ListsIdTweetsResponseMetaFormProperties>({
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			previous_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2SpacesByCreatorIdsResponse {

		/** Minimum items: 1 */
		data?: Array<Space>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2SpacesByCreatorIdsResponseMeta;
	}
	export interface Get2SpacesByCreatorIdsResponseFormProperties {
	}
	export function CreateGet2SpacesByCreatorIdsResponseFormGroup() {
		return new FormGroup<Get2SpacesByCreatorIdsResponseFormProperties>({
		});

	}

	export interface Space {

		/** Creation time of the Space. */
		created_at?: Date | null;

		/** Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		creator_id?: string | null;

		/** End time of the Space. */
		ended_at?: Date | null;

		/** The user ids for the hosts of the Space. */
		host_ids?: Array<string>;

		/**
		 * The unique identifier of this Space.
		 * Required
		 */
		id: string;

		/** An array of user ids for people who were invited to a Space. */
		invited_user_ids?: Array<string>;

		/** Denotes if the Space is a ticketed Space. */
		is_ticketed?: boolean | null;

		/** The language of the Space. */
		lang?: string | null;

		/** The number of participants in a Space. */
		participant_count?: number | null;

		/** A date time stamp for when a Space is scheduled to begin. */
		scheduled_start?: Date | null;

		/** An array of user ids for people who were speakers in a Space. */
		speaker_ids?: Array<string>;

		/** When the Space was started as a date string. */
		started_at?: Date | null;

		/**
		 * The current state of the Space.
		 * Required
		 */
		state: SpaceState;

		/** The number of people who have either purchased a ticket or set a reminder for this Space. */
		subscriber_count?: number | null;

		/** The title of the Space. */
		title?: string | null;

		/** The topics of a Space, as selected by its creator. */
		SpaceTopics?: Array<SpaceTopics>;

		/** When the Space was last updated. */
		updated_at?: Date | null;
	}
	export interface SpaceFormProperties {

		/** Creation time of the Space. */
		created_at: FormControl<Date | null | undefined>,

		/** Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		creator_id: FormControl<string | null | undefined>,

		/** End time of the Space. */
		ended_at: FormControl<Date | null | undefined>,

		/**
		 * The unique identifier of this Space.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Denotes if the Space is a ticketed Space. */
		is_ticketed: FormControl<boolean | null | undefined>,

		/** The language of the Space. */
		lang: FormControl<string | null | undefined>,

		/** The number of participants in a Space. */
		participant_count: FormControl<number | null | undefined>,

		/** A date time stamp for when a Space is scheduled to begin. */
		scheduled_start: FormControl<Date | null | undefined>,

		/** When the Space was started as a date string. */
		started_at: FormControl<Date | null | undefined>,

		/**
		 * The current state of the Space.
		 * Required
		 */
		state: FormControl<SpaceState | null | undefined>,

		/** The number of people who have either purchased a ticket or set a reminder for this Space. */
		subscriber_count: FormControl<number | null | undefined>,

		/** The title of the Space. */
		title: FormControl<string | null | undefined>,

		/** When the Space was last updated. */
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateSpaceFormGroup() {
		return new FormGroup<SpaceFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			creator_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{1,19}$')]),
			ended_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1,13}$')]),
			is_ticketed: new FormControl<boolean | null | undefined>(undefined),
			lang: new FormControl<string | null | undefined>(undefined),
			participant_count: new FormControl<number | null | undefined>(undefined),
			scheduled_start: new FormControl<Date | null | undefined>(undefined),
			started_at: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<SpaceState | null | undefined>(undefined, [Validators.required]),
			subscriber_count: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum SpaceState { live = 'live', scheduled = 'scheduled', ended = 'ended' }

	export interface SpaceTopics {

		/** The description of the given topic. */
		description?: string | null;

		/**
		 * An ID suitable for use in the REST API.
		 * Required
		 */
		id: string;

		/**
		 * The name of the given topic.
		 * Required
		 */
		name: string;
	}
	export interface SpaceTopicsFormProperties {

		/** The description of the given topic. */
		description: FormControl<string | null | undefined>,

		/**
		 * An ID suitable for use in the REST API.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the given topic.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSpaceTopicsFormGroup() {
		return new FormGroup<SpaceTopicsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Get2SpacesByCreatorIdsResponseMeta {

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2SpacesByCreatorIdsResponseMetaFormProperties {

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2SpacesByCreatorIdsResponseMetaFormGroup() {
		return new FormGroup<Get2SpacesByCreatorIdsResponseMetaFormProperties>({
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2SpacesIdBuyersResponse {

		/** Minimum items: 1 */
		data?: Array<User>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2SpacesIdBuyersResponseMeta;
	}
	export interface Get2SpacesIdBuyersResponseFormProperties {
	}
	export function CreateGet2SpacesIdBuyersResponseFormGroup() {
		return new FormGroup<Get2SpacesIdBuyersResponseFormProperties>({
		});

	}

	export interface Get2SpacesIdBuyersResponseMeta {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2SpacesIdBuyersResponseMetaFormProperties {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2SpacesIdBuyersResponseMetaFormGroup() {
		return new FormGroup<Get2SpacesIdBuyersResponseMetaFormProperties>({
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			previous_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2SpacesIdResponse {
		data?: Space;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
	}
	export interface Get2SpacesIdResponseFormProperties {
	}
	export function CreateGet2SpacesIdResponseFormGroup() {
		return new FormGroup<Get2SpacesIdResponseFormProperties>({
		});

	}

	export interface Get2SpacesIdTweetsResponse {

		/** Minimum items: 1 */
		data?: Array<Tweet>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2SpacesIdTweetsResponseMeta;
	}
	export interface Get2SpacesIdTweetsResponseFormProperties {
	}
	export function CreateGet2SpacesIdTweetsResponseFormGroup() {
		return new FormGroup<Get2SpacesIdTweetsResponseFormProperties>({
		});

	}

	export interface Get2SpacesIdTweetsResponseMeta {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2SpacesIdTweetsResponseMetaFormProperties {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2SpacesIdTweetsResponseMetaFormGroup() {
		return new FormGroup<Get2SpacesIdTweetsResponseMetaFormProperties>({
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			previous_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2SpacesResponse {

		/** Minimum items: 1 */
		data?: Array<Space>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
	}
	export interface Get2SpacesResponseFormProperties {
	}
	export function CreateGet2SpacesResponseFormGroup() {
		return new FormGroup<Get2SpacesResponseFormProperties>({
		});

	}

	export interface Get2SpacesSearchResponse {

		/** Minimum items: 1 */
		data?: Array<Space>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2SpacesSearchResponseMeta;
	}
	export interface Get2SpacesSearchResponseFormProperties {
	}
	export function CreateGet2SpacesSearchResponseFormGroup() {
		return new FormGroup<Get2SpacesSearchResponseFormProperties>({
		});

	}

	export interface Get2SpacesSearchResponseMeta {

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2SpacesSearchResponseMetaFormProperties {

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2SpacesSearchResponseMetaFormGroup() {
		return new FormGroup<Get2SpacesSearchResponseMetaFormProperties>({
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2TweetsCountsAllResponse {

		/** Minimum items: 1 */
		data?: Array<SearchCount>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		meta?: Get2TweetsCountsAllResponseMeta;
	}
	export interface Get2TweetsCountsAllResponseFormProperties {
	}
	export function CreateGet2TweetsCountsAllResponseFormGroup() {
		return new FormGroup<Get2TweetsCountsAllResponseFormProperties>({
		});

	}


	/** Represent a Search Count Result. */
	export interface SearchCount {

		/**
		 * The end time of the bucket.
		 * Required
		 */
		end: Date;

		/**
		 * The start time of the bucket.
		 * Required
		 */
		start: Date;

		/**
		 * The count for the bucket.
		 * Required
		 */
		tweet_count: number;
	}

	/** Represent a Search Count Result. */
	export interface SearchCountFormProperties {

		/**
		 * The end time of the bucket.
		 * Required
		 */
		end: FormControl<Date | null | undefined>,

		/**
		 * The start time of the bucket.
		 * Required
		 */
		start: FormControl<Date | null | undefined>,

		/**
		 * The count for the bucket.
		 * Required
		 */
		tweet_count: FormControl<number | null | undefined>,
	}
	export function CreateSearchCountFormGroup() {
		return new FormGroup<SearchCountFormProperties>({
			end: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			start: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			tweet_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Get2TweetsCountsAllResponseMeta {

		/** The newest id in this response. */
		newest_id?: string | null;

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/** The oldest id in this response. */
		oldest_id?: string | null;

		/** The sum of results returned in this response. */
		total_tweet_count?: number | null;
	}
	export interface Get2TweetsCountsAllResponseMetaFormProperties {

		/** The newest id in this response. */
		newest_id: FormControl<string | null | undefined>,

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/** The oldest id in this response. */
		oldest_id: FormControl<string | null | undefined>,

		/** The sum of results returned in this response. */
		total_tweet_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2TweetsCountsAllResponseMetaFormGroup() {
		return new FormGroup<Get2TweetsCountsAllResponseMetaFormProperties>({
			newest_id: new FormControl<string | null | undefined>(undefined),
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			oldest_id: new FormControl<string | null | undefined>(undefined),
			total_tweet_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2TweetsCountsRecentResponse {

		/** Minimum items: 1 */
		data?: Array<SearchCount>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		meta?: Get2TweetsCountsRecentResponseMeta;
	}
	export interface Get2TweetsCountsRecentResponseFormProperties {
	}
	export function CreateGet2TweetsCountsRecentResponseFormGroup() {
		return new FormGroup<Get2TweetsCountsRecentResponseFormProperties>({
		});

	}

	export interface Get2TweetsCountsRecentResponseMeta {

		/** The newest id in this response. */
		newest_id?: string | null;

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/** The oldest id in this response. */
		oldest_id?: string | null;

		/** The sum of results returned in this response. */
		total_tweet_count?: number | null;
	}
	export interface Get2TweetsCountsRecentResponseMetaFormProperties {

		/** The newest id in this response. */
		newest_id: FormControl<string | null | undefined>,

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/** The oldest id in this response. */
		oldest_id: FormControl<string | null | undefined>,

		/** The sum of results returned in this response. */
		total_tweet_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2TweetsCountsRecentResponseMetaFormGroup() {
		return new FormGroup<Get2TweetsCountsRecentResponseMetaFormProperties>({
			newest_id: new FormControl<string | null | undefined>(undefined),
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			oldest_id: new FormControl<string | null | undefined>(undefined),
			total_tweet_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2TweetsFirehoseStreamResponse {
		data?: Tweet;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
	}
	export interface Get2TweetsFirehoseStreamResponseFormProperties {
	}
	export function CreateGet2TweetsFirehoseStreamResponseFormGroup() {
		return new FormGroup<Get2TweetsFirehoseStreamResponseFormProperties>({
		});

	}

	export interface Get2TweetsIdLikingUsersResponse {

		/** Minimum items: 1 */
		data?: Array<User>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2TweetsIdLikingUsersResponseMeta;
	}
	export interface Get2TweetsIdLikingUsersResponseFormProperties {
	}
	export function CreateGet2TweetsIdLikingUsersResponseFormGroup() {
		return new FormGroup<Get2TweetsIdLikingUsersResponseFormProperties>({
		});

	}

	export interface Get2TweetsIdLikingUsersResponseMeta {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2TweetsIdLikingUsersResponseMetaFormProperties {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2TweetsIdLikingUsersResponseMetaFormGroup() {
		return new FormGroup<Get2TweetsIdLikingUsersResponseMetaFormProperties>({
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			previous_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2TweetsIdQuoteTweetsResponse {

		/** Minimum items: 1 */
		data?: Array<Tweet>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2TweetsIdQuoteTweetsResponseMeta;
	}
	export interface Get2TweetsIdQuoteTweetsResponseFormProperties {
	}
	export function CreateGet2TweetsIdQuoteTweetsResponseFormGroup() {
		return new FormGroup<Get2TweetsIdQuoteTweetsResponseFormProperties>({
		});

	}

	export interface Get2TweetsIdQuoteTweetsResponseMeta {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2TweetsIdQuoteTweetsResponseMetaFormProperties {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2TweetsIdQuoteTweetsResponseMetaFormGroup() {
		return new FormGroup<Get2TweetsIdQuoteTweetsResponseMetaFormProperties>({
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2TweetsIdResponse {
		data?: Tweet;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
	}
	export interface Get2TweetsIdResponseFormProperties {
	}
	export function CreateGet2TweetsIdResponseFormGroup() {
		return new FormGroup<Get2TweetsIdResponseFormProperties>({
		});

	}

	export interface Get2TweetsIdRetweetedByResponse {

		/** Minimum items: 1 */
		data?: Array<User>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2TweetsIdRetweetedByResponseMeta;
	}
	export interface Get2TweetsIdRetweetedByResponseFormProperties {
	}
	export function CreateGet2TweetsIdRetweetedByResponseFormGroup() {
		return new FormGroup<Get2TweetsIdRetweetedByResponseFormProperties>({
		});

	}

	export interface Get2TweetsIdRetweetedByResponseMeta {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2TweetsIdRetweetedByResponseMetaFormProperties {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2TweetsIdRetweetedByResponseMetaFormGroup() {
		return new FormGroup<Get2TweetsIdRetweetedByResponseMetaFormProperties>({
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			previous_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2TweetsResponse {

		/** Minimum items: 1 */
		data?: Array<Tweet>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
	}
	export interface Get2TweetsResponseFormProperties {
	}
	export function CreateGet2TweetsResponseFormGroup() {
		return new FormGroup<Get2TweetsResponseFormProperties>({
		});

	}

	export interface Get2TweetsSample10StreamResponse {
		data?: Tweet;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
	}
	export interface Get2TweetsSample10StreamResponseFormProperties {
	}
	export function CreateGet2TweetsSample10StreamResponseFormGroup() {
		return new FormGroup<Get2TweetsSample10StreamResponseFormProperties>({
		});

	}

	export interface Get2TweetsSampleStreamResponse {
		data?: Tweet;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
	}
	export interface Get2TweetsSampleStreamResponseFormProperties {
	}
	export function CreateGet2TweetsSampleStreamResponseFormGroup() {
		return new FormGroup<Get2TweetsSampleStreamResponseFormProperties>({
		});

	}

	export interface Get2TweetsSearchAllResponse {

		/** Minimum items: 1 */
		data?: Array<Tweet>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2TweetsSearchAllResponseMeta;
	}
	export interface Get2TweetsSearchAllResponseFormProperties {
	}
	export function CreateGet2TweetsSearchAllResponseFormGroup() {
		return new FormGroup<Get2TweetsSearchAllResponseFormProperties>({
		});

	}

	export interface Get2TweetsSearchAllResponseMeta {

		/** The newest id in this response. */
		newest_id?: string | null;

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/** The oldest id in this response. */
		oldest_id?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2TweetsSearchAllResponseMetaFormProperties {

		/** The newest id in this response. */
		newest_id: FormControl<string | null | undefined>,

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/** The oldest id in this response. */
		oldest_id: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2TweetsSearchAllResponseMetaFormGroup() {
		return new FormGroup<Get2TweetsSearchAllResponseMetaFormProperties>({
			newest_id: new FormControl<string | null | undefined>(undefined),
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			oldest_id: new FormControl<string | null | undefined>(undefined),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2TweetsSearchRecentResponse {

		/** Minimum items: 1 */
		data?: Array<Tweet>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2TweetsSearchRecentResponseMeta;
	}
	export interface Get2TweetsSearchRecentResponseFormProperties {
	}
	export function CreateGet2TweetsSearchRecentResponseFormGroup() {
		return new FormGroup<Get2TweetsSearchRecentResponseFormProperties>({
		});

	}

	export interface Get2TweetsSearchRecentResponseMeta {

		/** The newest id in this response. */
		newest_id?: string | null;

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/** The oldest id in this response. */
		oldest_id?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2TweetsSearchRecentResponseMetaFormProperties {

		/** The newest id in this response. */
		newest_id: FormControl<string | null | undefined>,

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/** The oldest id in this response. */
		oldest_id: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2TweetsSearchRecentResponseMetaFormGroup() {
		return new FormGroup<Get2TweetsSearchRecentResponseMetaFormProperties>({
			newest_id: new FormControl<string | null | undefined>(undefined),
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			oldest_id: new FormControl<string | null | undefined>(undefined),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2TweetsSearchStreamResponse {
		data?: Tweet;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
	}
	export interface Get2TweetsSearchStreamResponseFormProperties {
	}
	export function CreateGet2TweetsSearchStreamResponseFormGroup() {
		return new FormGroup<Get2TweetsSearchStreamResponseFormProperties>({
		});

	}

	export interface Get2UsersByResponse {

		/** Minimum items: 1 */
		data?: Array<User>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
	}
	export interface Get2UsersByResponseFormProperties {
	}
	export function CreateGet2UsersByResponseFormGroup() {
		return new FormGroup<Get2UsersByResponseFormProperties>({
		});

	}

	export interface Get2UsersByUsernameUsernameResponse {

		/** The Twitter User object. */
		data?: User;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
	}
	export interface Get2UsersByUsernameUsernameResponseFormProperties {
	}
	export function CreateGet2UsersByUsernameUsernameResponseFormGroup() {
		return new FormGroup<Get2UsersByUsernameUsernameResponseFormProperties>({
		});

	}

	export interface Get2UsersIdBlockingResponse {

		/** Minimum items: 1 */
		data?: Array<User>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2UsersIdBlockingResponseMeta;
	}
	export interface Get2UsersIdBlockingResponseFormProperties {
	}
	export function CreateGet2UsersIdBlockingResponseFormGroup() {
		return new FormGroup<Get2UsersIdBlockingResponseFormProperties>({
		});

	}

	export interface Get2UsersIdBlockingResponseMeta {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2UsersIdBlockingResponseMetaFormProperties {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2UsersIdBlockingResponseMetaFormGroup() {
		return new FormGroup<Get2UsersIdBlockingResponseMetaFormProperties>({
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			previous_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2UsersIdBookmarksResponse {

		/** Minimum items: 1 */
		data?: Array<Tweet>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2UsersIdBookmarksResponseMeta;
	}
	export interface Get2UsersIdBookmarksResponseFormProperties {
	}
	export function CreateGet2UsersIdBookmarksResponseFormGroup() {
		return new FormGroup<Get2UsersIdBookmarksResponseFormProperties>({
		});

	}

	export interface Get2UsersIdBookmarksResponseMeta {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2UsersIdBookmarksResponseMetaFormProperties {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2UsersIdBookmarksResponseMetaFormGroup() {
		return new FormGroup<Get2UsersIdBookmarksResponseMetaFormProperties>({
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			previous_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2UsersIdFollowedListsResponse {

		/** Minimum items: 1 */
		data?: Array<List>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2UsersIdFollowedListsResponseMeta;
	}
	export interface Get2UsersIdFollowedListsResponseFormProperties {
	}
	export function CreateGet2UsersIdFollowedListsResponseFormGroup() {
		return new FormGroup<Get2UsersIdFollowedListsResponseFormProperties>({
		});

	}

	export interface Get2UsersIdFollowedListsResponseMeta {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2UsersIdFollowedListsResponseMetaFormProperties {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2UsersIdFollowedListsResponseMetaFormGroup() {
		return new FormGroup<Get2UsersIdFollowedListsResponseMetaFormProperties>({
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			previous_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2UsersIdFollowersResponse {

		/** Minimum items: 1 */
		data?: Array<User>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2UsersIdFollowersResponseMeta;
	}
	export interface Get2UsersIdFollowersResponseFormProperties {
	}
	export function CreateGet2UsersIdFollowersResponseFormGroup() {
		return new FormGroup<Get2UsersIdFollowersResponseFormProperties>({
		});

	}

	export interface Get2UsersIdFollowersResponseMeta {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2UsersIdFollowersResponseMetaFormProperties {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2UsersIdFollowersResponseMetaFormGroup() {
		return new FormGroup<Get2UsersIdFollowersResponseMetaFormProperties>({
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			previous_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2UsersIdFollowingResponse {

		/** Minimum items: 1 */
		data?: Array<User>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2UsersIdFollowingResponseMeta;
	}
	export interface Get2UsersIdFollowingResponseFormProperties {
	}
	export function CreateGet2UsersIdFollowingResponseFormGroup() {
		return new FormGroup<Get2UsersIdFollowingResponseFormProperties>({
		});

	}

	export interface Get2UsersIdFollowingResponseMeta {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2UsersIdFollowingResponseMetaFormProperties {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2UsersIdFollowingResponseMetaFormGroup() {
		return new FormGroup<Get2UsersIdFollowingResponseMetaFormProperties>({
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			previous_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2UsersIdLikedTweetsResponse {

		/** Minimum items: 1 */
		data?: Array<Tweet>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2UsersIdLikedTweetsResponseMeta;
	}
	export interface Get2UsersIdLikedTweetsResponseFormProperties {
	}
	export function CreateGet2UsersIdLikedTweetsResponseFormGroup() {
		return new FormGroup<Get2UsersIdLikedTweetsResponseFormProperties>({
		});

	}

	export interface Get2UsersIdLikedTweetsResponseMeta {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2UsersIdLikedTweetsResponseMetaFormProperties {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2UsersIdLikedTweetsResponseMetaFormGroup() {
		return new FormGroup<Get2UsersIdLikedTweetsResponseMetaFormProperties>({
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			previous_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2UsersIdListMembershipsResponse {

		/** Minimum items: 1 */
		data?: Array<List>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2UsersIdListMembershipsResponseMeta;
	}
	export interface Get2UsersIdListMembershipsResponseFormProperties {
	}
	export function CreateGet2UsersIdListMembershipsResponseFormGroup() {
		return new FormGroup<Get2UsersIdListMembershipsResponseFormProperties>({
		});

	}

	export interface Get2UsersIdListMembershipsResponseMeta {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2UsersIdListMembershipsResponseMetaFormProperties {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2UsersIdListMembershipsResponseMetaFormGroup() {
		return new FormGroup<Get2UsersIdListMembershipsResponseMetaFormProperties>({
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			previous_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2UsersIdMentionsResponse {

		/** Minimum items: 1 */
		data?: Array<Tweet>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2UsersIdMentionsResponseMeta;
	}
	export interface Get2UsersIdMentionsResponseFormProperties {
	}
	export function CreateGet2UsersIdMentionsResponseFormGroup() {
		return new FormGroup<Get2UsersIdMentionsResponseFormProperties>({
		});

	}

	export interface Get2UsersIdMentionsResponseMeta {

		/** The newest id in this response. */
		newest_id?: string | null;

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/** The oldest id in this response. */
		oldest_id?: string | null;

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2UsersIdMentionsResponseMetaFormProperties {

		/** The newest id in this response. */
		newest_id: FormControl<string | null | undefined>,

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/** The oldest id in this response. */
		oldest_id: FormControl<string | null | undefined>,

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2UsersIdMentionsResponseMetaFormGroup() {
		return new FormGroup<Get2UsersIdMentionsResponseMetaFormProperties>({
			newest_id: new FormControl<string | null | undefined>(undefined),
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			oldest_id: new FormControl<string | null | undefined>(undefined),
			previous_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2UsersIdMutingResponse {

		/** Minimum items: 1 */
		data?: Array<User>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2UsersIdMutingResponseMeta;
	}
	export interface Get2UsersIdMutingResponseFormProperties {
	}
	export function CreateGet2UsersIdMutingResponseFormGroup() {
		return new FormGroup<Get2UsersIdMutingResponseFormProperties>({
		});

	}

	export interface Get2UsersIdMutingResponseMeta {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2UsersIdMutingResponseMetaFormProperties {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2UsersIdMutingResponseMetaFormGroup() {
		return new FormGroup<Get2UsersIdMutingResponseMetaFormProperties>({
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			previous_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2UsersIdOwnedListsResponse {

		/** Minimum items: 1 */
		data?: Array<List>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2UsersIdOwnedListsResponseMeta;
	}
	export interface Get2UsersIdOwnedListsResponseFormProperties {
	}
	export function CreateGet2UsersIdOwnedListsResponseFormGroup() {
		return new FormGroup<Get2UsersIdOwnedListsResponseFormProperties>({
		});

	}

	export interface Get2UsersIdOwnedListsResponseMeta {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2UsersIdOwnedListsResponseMetaFormProperties {

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2UsersIdOwnedListsResponseMetaFormGroup() {
		return new FormGroup<Get2UsersIdOwnedListsResponseMetaFormProperties>({
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			previous_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2UsersIdPinnedListsResponse {

		/** Minimum items: 1 */
		data?: Array<List>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2UsersIdPinnedListsResponseMeta;
	}
	export interface Get2UsersIdPinnedListsResponseFormProperties {
	}
	export function CreateGet2UsersIdPinnedListsResponseFormGroup() {
		return new FormGroup<Get2UsersIdPinnedListsResponseFormProperties>({
		});

	}

	export interface Get2UsersIdPinnedListsResponseMeta {

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2UsersIdPinnedListsResponseMetaFormProperties {

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2UsersIdPinnedListsResponseMetaFormGroup() {
		return new FormGroup<Get2UsersIdPinnedListsResponseMetaFormProperties>({
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2UsersIdResponse {

		/** The Twitter User object. */
		data?: User;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
	}
	export interface Get2UsersIdResponseFormProperties {
	}
	export function CreateGet2UsersIdResponseFormGroup() {
		return new FormGroup<Get2UsersIdResponseFormProperties>({
		});

	}

	export interface Get2UsersIdTimelinesReverseChronologicalResponse {

		/** Minimum items: 1 */
		data?: Array<Tweet>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2UsersIdTimelinesReverseChronologicalResponseMeta;
	}
	export interface Get2UsersIdTimelinesReverseChronologicalResponseFormProperties {
	}
	export function CreateGet2UsersIdTimelinesReverseChronologicalResponseFormGroup() {
		return new FormGroup<Get2UsersIdTimelinesReverseChronologicalResponseFormProperties>({
		});

	}

	export interface Get2UsersIdTimelinesReverseChronologicalResponseMeta {

		/** The newest id in this response. */
		newest_id?: string | null;

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/** The oldest id in this response. */
		oldest_id?: string | null;

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2UsersIdTimelinesReverseChronologicalResponseMetaFormProperties {

		/** The newest id in this response. */
		newest_id: FormControl<string | null | undefined>,

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/** The oldest id in this response. */
		oldest_id: FormControl<string | null | undefined>,

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2UsersIdTimelinesReverseChronologicalResponseMetaFormGroup() {
		return new FormGroup<Get2UsersIdTimelinesReverseChronologicalResponseMetaFormProperties>({
			newest_id: new FormControl<string | null | undefined>(undefined),
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			oldest_id: new FormControl<string | null | undefined>(undefined),
			previous_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2UsersIdTweetsResponse {

		/** Minimum items: 1 */
		data?: Array<Tweet>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
		meta?: Get2UsersIdTweetsResponseMeta;
	}
	export interface Get2UsersIdTweetsResponseFormProperties {
	}
	export function CreateGet2UsersIdTweetsResponseFormGroup() {
		return new FormGroup<Get2UsersIdTweetsResponseFormProperties>({
		});

	}

	export interface Get2UsersIdTweetsResponseMeta {

		/** The newest id in this response. */
		newest_id?: string | null;

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token?: string | null;

		/** The oldest id in this response. */
		oldest_id?: string | null;

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token?: string | null;

		/** The number of results returned in this response. */
		result_count?: number | null;
	}
	export interface Get2UsersIdTweetsResponseMetaFormProperties {

		/** The newest id in this response. */
		newest_id: FormControl<string | null | undefined>,

		/**
		 * The next token.
		 * Min length: 1
		 */
		next_token: FormControl<string | null | undefined>,

		/** The oldest id in this response. */
		oldest_id: FormControl<string | null | undefined>,

		/**
		 * The previous token.
		 * Min length: 1
		 */
		previous_token: FormControl<string | null | undefined>,

		/** The number of results returned in this response. */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGet2UsersIdTweetsResponseMetaFormGroup() {
		return new FormGroup<Get2UsersIdTweetsResponseMetaFormProperties>({
			newest_id: new FormControl<string | null | undefined>(undefined),
			next_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			oldest_id: new FormControl<string | null | undefined>(undefined),
			previous_token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get2UsersMeResponse {

		/** The Twitter User object. */
		data?: User;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
	}
	export interface Get2UsersMeResponseFormProperties {
	}
	export function CreateGet2UsersMeResponseFormGroup() {
		return new FormGroup<Get2UsersMeResponseFormProperties>({
		});

	}

	export interface Get2UsersResponse {

		/** Minimum items: 1 */
		data?: Array<User>;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
	}
	export interface Get2UsersResponseFormProperties {
	}
	export function CreateGet2UsersResponseFormGroup() {
		return new FormGroup<Get2UsersResponseFormProperties>({
		});

	}


	/** Represent the portion of text recognized as a Hashtag, and its start and end position within the text. */
	export interface HashtagFields {

		/**
		 * The text of the Hashtag.
		 * Required
		 */
		tag: string;
	}

	/** Represent the portion of text recognized as a Hashtag, and its start and end position within the text. */
	export interface HashtagFieldsFormProperties {

		/**
		 * The text of the Hashtag.
		 * Required
		 */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateHashtagFieldsFormGroup() {
		return new FormGroup<HashtagFieldsFormProperties>({
			tag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A problem that indicates this request is invalid. */
	export interface InvalidRequestProblem extends Problem {

		/** Minimum items: 1 */
		InvalidRequestProblemErrors?: Array<InvalidRequestProblemErrors>;
	}

	/** A problem that indicates this request is invalid. */
	export interface InvalidRequestProblemFormProperties extends ProblemFormProperties {
	}
	export function CreateInvalidRequestProblemFormGroup() {
		return new FormGroup<InvalidRequestProblemFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidRequestProblemErrors {
		message?: string | null;
		parameters?: {[id: string]: Array<string> };
	}
	export interface InvalidRequestProblemErrorsFormProperties {
		message: FormControl<string | null | undefined>,
		parameters: FormControl<{[id: string]: Array<string> } | null | undefined>,
	}
	export function CreateInvalidRequestProblemErrorsFormGroup() {
		return new FormGroup<InvalidRequestProblemErrorsFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
		});

	}


	/** The rule you have submitted is invalid. */
	export interface InvalidRuleProblem {
	}

	/** The rule you have submitted is invalid. */
	export interface InvalidRuleProblemFormProperties {
	}
	export function CreateInvalidRuleProblemFormGroup() {
		return new FormGroup<InvalidRuleProblemFormProperties>({
		});

	}

	export interface ListAddUserRequest {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		user_id: string;
	}
	export interface ListAddUserRequestFormProperties {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		user_id: FormControl<string | null | undefined>,
	}
	export function CreateListAddUserRequestFormGroup() {
		return new FormGroup<ListAddUserRequestFormProperties>({
			user_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}

	export interface ListCreateRequest {

		/**
		 * Max length: 100
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Required
		 * Max length: 25
		 * Min length: 1
		 */
		name: string;
		private?: boolean | null;
	}
	export interface ListCreateRequestFormProperties {

		/**
		 * Max length: 100
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 25
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		private: FormControl<boolean | null | undefined>,
	}
	export function CreateListCreateRequestFormGroup() {
		return new FormGroup<ListCreateRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),
			private: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListCreateResponse {

		/** A Twitter List is a curated group of accounts. */
		data?: ListCreateResponseData;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
	}
	export interface ListCreateResponseFormProperties {
	}
	export function CreateListCreateResponseFormGroup() {
		return new FormGroup<ListCreateResponseFormProperties>({
		});

	}

	export interface ListCreateResponseData {

		/**
		 * The unique identifier of this List.
		 * Required
		 */
		id: string;

		/**
		 * The name of this List.
		 * Required
		 */
		name: string;
	}
	export interface ListCreateResponseDataFormProperties {

		/**
		 * The unique identifier of this List.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of this List.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateListCreateResponseDataFormGroup() {
		return new FormGroup<ListCreateResponseDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListDeleteResponse {
		data?: ListDeleteResponseData;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
	}
	export interface ListDeleteResponseFormProperties {
	}
	export function CreateListDeleteResponseFormGroup() {
		return new FormGroup<ListDeleteResponseFormProperties>({
		});

	}

	export interface ListDeleteResponseData {
		deleted?: boolean | null;
	}
	export interface ListDeleteResponseDataFormProperties {
		deleted: FormControl<boolean | null | undefined>,
	}
	export function CreateListDeleteResponseDataFormGroup() {
		return new FormGroup<ListDeleteResponseDataFormProperties>({
			deleted: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListFollowedRequest {

		/**
		 * The unique identifier of this List.
		 * Required
		 */
		list_id: string;
	}
	export interface ListFollowedRequestFormProperties {

		/**
		 * The unique identifier of this List.
		 * Required
		 */
		list_id: FormControl<string | null | undefined>,
	}
	export function CreateListFollowedRequestFormGroup() {
		return new FormGroup<ListFollowedRequestFormProperties>({
			list_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}

	export interface ListFollowedResponse {
		data?: ListFollowedResponseData;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
	}
	export interface ListFollowedResponseFormProperties {
	}
	export function CreateListFollowedResponseFormGroup() {
		return new FormGroup<ListFollowedResponseFormProperties>({
		});

	}

	export interface ListFollowedResponseData {
		following?: boolean | null;
	}
	export interface ListFollowedResponseDataFormProperties {
		following: FormControl<boolean | null | undefined>,
	}
	export function CreateListFollowedResponseDataFormGroup() {
		return new FormGroup<ListFollowedResponseDataFormProperties>({
			following: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListMutateResponse {
		data?: ListMutateResponseData;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
	}
	export interface ListMutateResponseFormProperties {
	}
	export function CreateListMutateResponseFormGroup() {
		return new FormGroup<ListMutateResponseFormProperties>({
		});

	}

	export interface ListMutateResponseData {
		is_member?: boolean | null;
	}
	export interface ListMutateResponseDataFormProperties {
		is_member: FormControl<boolean | null | undefined>,
	}
	export function CreateListMutateResponseDataFormGroup() {
		return new FormGroup<ListMutateResponseDataFormProperties>({
			is_member: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListPinnedRequest {

		/**
		 * The unique identifier of this List.
		 * Required
		 */
		list_id: string;
	}
	export interface ListPinnedRequestFormProperties {

		/**
		 * The unique identifier of this List.
		 * Required
		 */
		list_id: FormControl<string | null | undefined>,
	}
	export function CreateListPinnedRequestFormGroup() {
		return new FormGroup<ListPinnedRequestFormProperties>({
			list_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}

	export interface ListPinnedResponse {
		data?: ListPinnedResponseData;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
	}
	export interface ListPinnedResponseFormProperties {
	}
	export function CreateListPinnedResponseFormGroup() {
		return new FormGroup<ListPinnedResponseFormProperties>({
		});

	}

	export interface ListPinnedResponseData {
		pinned?: boolean | null;
	}
	export interface ListPinnedResponseDataFormProperties {
		pinned: FormControl<boolean | null | undefined>,
	}
	export function CreateListPinnedResponseDataFormGroup() {
		return new FormGroup<ListPinnedResponseDataFormProperties>({
			pinned: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListUnpinResponse {
		data?: ListUnpinResponseData;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
	}
	export interface ListUnpinResponseFormProperties {
	}
	export function CreateListUnpinResponseFormGroup() {
		return new FormGroup<ListUnpinResponseFormProperties>({
		});

	}

	export interface ListUnpinResponseData {
		pinned?: boolean | null;
	}
	export interface ListUnpinResponseDataFormProperties {
		pinned: FormControl<boolean | null | undefined>,
	}
	export function CreateListUnpinResponseDataFormGroup() {
		return new FormGroup<ListUnpinResponseDataFormProperties>({
			pinned: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListUpdateRequest {

		/**
		 * Max length: 100
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Max length: 25
		 * Min length: 1
		 */
		name?: string | null;
		private?: boolean | null;
	}
	export interface ListUpdateRequestFormProperties {

		/**
		 * Max length: 100
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 25
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		private: FormControl<boolean | null | undefined>,
	}
	export function CreateListUpdateRequestFormGroup() {
		return new FormGroup<ListUpdateRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(25)]),
			private: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListUpdateResponse {
		data?: ListUpdateResponseData;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
	}
	export interface ListUpdateResponseFormProperties {
	}
	export function CreateListUpdateResponseFormGroup() {
		return new FormGroup<ListUpdateResponseFormProperties>({
		});

	}

	export interface ListUpdateResponseData {
		updated?: boolean | null;
	}
	export interface ListUpdateResponseDataFormProperties {
		updated: FormControl<boolean | null | undefined>,
	}
	export function CreateListUpdateResponseDataFormGroup() {
		return new FormGroup<ListUpdateResponseDataFormProperties>({
			updated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represent the portion of text recognized as a User mention, and its start and end position within the text. */
	export interface MentionFields {

		/** Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		id?: string | null;

		/**
		 * The Twitter handle (screen name) of this user.
		 * Required
		 */
		username: string;
	}

	/** Represent the portion of text recognized as a User mention, and its start and end position within the text. */
	export interface MentionFieldsFormProperties {

		/** Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		id: FormControl<string | null | undefined>,

		/**
		 * The Twitter handle (screen name) of this user.
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateMentionFieldsFormGroup() {
		return new FormGroup<MentionFieldsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{1,19}$')]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z0-9_]{1,15}$')]),
		});

	}

	export interface MuteUserMutationResponse {
		data?: MuteUserMutationResponseData;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
	}
	export interface MuteUserMutationResponseFormProperties {
	}
	export function CreateMuteUserMutationResponseFormGroup() {
		return new FormGroup<MuteUserMutationResponseFormProperties>({
		});

	}

	export interface MuteUserMutationResponseData {
		muting?: boolean | null;
	}
	export interface MuteUserMutationResponseDataFormProperties {
		muting: FormControl<boolean | null | undefined>,
	}
	export function CreateMuteUserMutationResponseDataFormGroup() {
		return new FormGroup<MuteUserMutationResponseDataFormProperties>({
			muting: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MuteUserRequest {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		target_user_id: string;
	}
	export interface MuteUserRequestFormProperties {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		target_user_id: FormControl<string | null | undefined>,
	}
	export function CreateMuteUserRequestFormGroup() {
		return new FormGroup<MuteUserRequestFormProperties>({
			target_user_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}


	/** A problem that indicates the user's rule set is not compliant. */
	export interface NonCompliantRulesProblem {
	}

	/** A problem that indicates the user's rule set is not compliant. */
	export interface NonCompliantRulesProblemFormProperties {
	}
	export function CreateNonCompliantRulesProblemFormGroup() {
		return new FormGroup<NonCompliantRulesProblemFormProperties>({
		});

	}


	/** A problem that indicates your client application does not have the required OAuth1 permissions for the requested endpoint. */
	export interface Oauth1PermissionsProblem {
	}

	/** A problem that indicates your client application does not have the required OAuth1 permissions for the requested endpoint. */
	export interface Oauth1PermissionsProblemFormProperties {
	}
	export function CreateOauth1PermissionsProblemFormGroup() {
		return new FormGroup<Oauth1PermissionsProblemFormProperties>({
		});

	}


	/** You have been disconnected for operational reasons. */
	export interface OperationalDisconnectProblem extends Problem {
		disconnect_type?: OperationalDisconnectProblemDisconnect_type | null;
	}

	/** You have been disconnected for operational reasons. */
	export interface OperationalDisconnectProblemFormProperties extends ProblemFormProperties {
		disconnect_type: FormControl<OperationalDisconnectProblemDisconnect_type | null | undefined>,
	}
	export function CreateOperationalDisconnectProblemFormGroup() {
		return new FormGroup<OperationalDisconnectProblemFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			disconnect_type: new FormControl<OperationalDisconnectProblemDisconnect_type | null | undefined>(undefined),
		});

	}

	export enum OperationalDisconnectProblemDisconnect_type { OperationalDisconnect = 'OperationalDisconnect', UpstreamOperationalDisconnect = 'UpstreamOperationalDisconnect', ForceDisconnect = 'ForceDisconnect', UpstreamUncleanDisconnect = 'UpstreamUncleanDisconnect', SlowReader = 'SlowReader', InternalError = 'InternalError', ClientApplicationStateDegraded = 'ClientApplicationStateDegraded', InvalidRules = 'InvalidRules' }

	export interface Photo extends Media {
		alt_text?: string | null;
		url?: string | null;
	}
	export interface PhotoFormProperties extends MediaFormProperties {
		alt_text: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreatePhotoFormGroup() {
		return new FormGroup<PhotoFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			media_key: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([0-9]+)_([0-9]+)$')]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			alt_text: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PlaceType { poi = 'poi', neighborhood = 'neighborhood', city = 'city', admin = 'admin', country = 'country', unknown = 'unknown' }


	/** Shows who can reply a Tweet. Fields returned are everyone, mentioned_users, and following. */
	export enum ReplySettings { everyone = 'everyone', mentionedUsers = 'mentionedUsers', following = 'following', other = 'other' }


	/** A problem that indicates that a given Tweet, User, etc. does not exist. */
	export interface ResourceNotFoundProblem extends Problem {

		/**
		 * Required
		 * Min length: 1
		 */
		parameter: string;

		/** Required */
		resource_id: string;

		/** Required */
		resource_type: DisallowedResourceProblemResource_type;

		/**
		 * Value will match the schema of the field.
		 * Required
		 */
		value: string;
	}

	/** A problem that indicates that a given Tweet, User, etc. does not exist. */
	export interface ResourceNotFoundProblemFormProperties extends ProblemFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		parameter: FormControl<string | null | undefined>,

		/** Required */
		resource_id: FormControl<string | null | undefined>,

		/** Required */
		resource_type: FormControl<DisallowedResourceProblemResource_type | null | undefined>,

		/**
		 * Value will match the schema of the field.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateResourceNotFoundProblemFormGroup() {
		return new FormGroup<ResourceNotFoundProblemFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parameter: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			resource_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_type: new FormControl<DisallowedResourceProblemResource_type | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A problem that indicates you are not allowed to see a particular Tweet, User, etc. */
	export interface ResourceUnauthorizedProblem extends Problem {

		/** Required */
		parameter: string;

		/** Required */
		resource_id: string;

		/** Required */
		resource_type: DisallowedResourceProblemResource_type;

		/** Required */
		section: DisallowedResourceProblemSection;

		/** Required */
		value: string;
	}

	/** A problem that indicates you are not allowed to see a particular Tweet, User, etc. */
	export interface ResourceUnauthorizedProblemFormProperties extends ProblemFormProperties {

		/** Required */
		parameter: FormControl<string | null | undefined>,

		/** Required */
		resource_id: FormControl<string | null | undefined>,

		/** Required */
		resource_type: FormControl<DisallowedResourceProblemResource_type | null | undefined>,

		/** Required */
		section: FormControl<DisallowedResourceProblemSection | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateResourceUnauthorizedProblemFormGroup() {
		return new FormGroup<ResourceUnauthorizedProblemFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parameter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_type: new FormControl<DisallowedResourceProblemResource_type | null | undefined>(undefined, [Validators.required]),
			section: new FormControl<DisallowedResourceProblemSection | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A problem that indicates a particular Tweet, User, etc. is not available to you. */
	export interface ResourceUnavailableProblem extends Problem {

		/**
		 * Required
		 * Min length: 1
		 */
		parameter: string;

		/** Required */
		resource_id: string;

		/** Required */
		resource_type: DisallowedResourceProblemResource_type;
	}

	/** A problem that indicates a particular Tweet, User, etc. is not available to you. */
	export interface ResourceUnavailableProblemFormProperties extends ProblemFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		parameter: FormControl<string | null | undefined>,

		/** Required */
		resource_id: FormControl<string | null | undefined>,

		/** Required */
		resource_type: FormControl<DisallowedResourceProblemResource_type | null | undefined>,
	}
	export function CreateResourceUnavailableProblemFormGroup() {
		return new FormGroup<ResourceUnavailableProblemFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parameter: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			resource_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_type: new FormControl<DisallowedResourceProblemResource_type | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** You have exceeded the maximum number of rules. */
	export interface RulesCapProblem {
	}

	/** You have exceeded the maximum number of rules. */
	export interface RulesCapProblemFormProperties {
	}
	export function CreateRulesCapProblemFormGroup() {
		return new FormGroup<RulesCapProblemFormProperties>({
		});

	}

	export interface RulesLookupResponse {
		data?: Array<Rule>;

		/** Required */
		meta: RulesResponseMetadata;
	}
	export interface RulesLookupResponseFormProperties {
	}
	export function CreateRulesLookupResponseFormGroup() {
		return new FormGroup<RulesLookupResponseFormProperties>({
		});

	}

	export interface RulesRequestSummary {
	}
	export interface RulesRequestSummaryFormProperties {
	}
	export function CreateRulesRequestSummaryFormGroup() {
		return new FormGroup<RulesRequestSummaryFormProperties>({
		});

	}

	export interface StreamingTweetResponse {
		data?: Tweet;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
		includes?: Expansions;
	}
	export interface StreamingTweetResponseFormProperties {
	}
	export function CreateStreamingTweetResponseFormGroup() {
		return new FormGroup<StreamingTweetResponseFormProperties>({
		});

	}


	/** Tweet compliance data. */
	export interface TweetComplianceData {
	}

	/** Tweet compliance data. */
	export interface TweetComplianceDataFormProperties {
	}
	export function CreateTweetComplianceDataFormGroup() {
		return new FormGroup<TweetComplianceDataFormProperties>({
		});

	}

	export interface TweetComplianceSchema {

		/**
		 * Event time.
		 * Required
		 */
		event_at: Date;

		/** Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		quote_tweet_id?: string | null;

		/** Required */
		tweet: TweetComplianceSchemaTweet;
	}
	export interface TweetComplianceSchemaFormProperties {

		/**
		 * Event time.
		 * Required
		 */
		event_at: FormControl<Date | null | undefined>,

		/** Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		quote_tweet_id: FormControl<string | null | undefined>,
	}
	export function CreateTweetComplianceSchemaFormGroup() {
		return new FormGroup<TweetComplianceSchemaFormProperties>({
			event_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			quote_tweet_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{1,19}$')]),
		});

	}

	export interface TweetComplianceSchemaTweet {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		author_id: string;

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: string;
	}
	export interface TweetComplianceSchemaTweetFormProperties {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		author_id: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateTweetComplianceSchemaTweetFormGroup() {
		return new FormGroup<TweetComplianceSchemaTweetFormProperties>({
			author_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}


	/** Tweet compliance stream events. */
	export interface TweetComplianceStreamResponse {
	}

	/** Tweet compliance stream events. */
	export interface TweetComplianceStreamResponseFormProperties {
	}
	export function CreateTweetComplianceStreamResponseFormGroup() {
		return new FormGroup<TweetComplianceStreamResponseFormProperties>({
		});

	}

	export interface TweetCreateRequest {

		/** Card Uri Parameter. This is mutually exclusive from Quote Tweet Id, Poll, Media, and Direct Message Deep Link. */
		card_uri?: string | null;

		/** Link to take the conversation from the public timeline to a private Direct Message. */
		direct_message_deep_link?: string | null;

		/** Exclusive Tweet for super followers. */
		for_super_followers_only?: boolean | null;

		/** Place ID being attached to the Tweet for geo location. */
		geo?: TweetCreateRequestGeo;

		/** Media information being attached to created Tweet. This is mutually exclusive from Quote Tweet Id, Poll, and Card URI. */
		media?: TweetCreateRequestMedia;

		/** Nullcasted (promoted-only) Tweets do not appear in the public timeline and are not served to followers. */
		nullcast?: boolean | null;

		/** Poll options for a Tweet with a poll. This is mutually exclusive from Media, Quote Tweet Id, and Card URI. */
		poll?: TweetCreateRequestPoll;

		/** Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		quote_tweet_id?: string | null;

		/** Tweet information of the Tweet being replied to. */
		reply?: TweetCreateRequestReply;

		/** Settings to indicate who can reply to the Tweet. */
		reply_settings?: TweetCreateRequestPollReply_settings | null;

		/** The content of the Tweet. */
		text?: string | null;
	}
	export interface TweetCreateRequestFormProperties {

		/** Card Uri Parameter. This is mutually exclusive from Quote Tweet Id, Poll, Media, and Direct Message Deep Link. */
		card_uri: FormControl<string | null | undefined>,

		/** Link to take the conversation from the public timeline to a private Direct Message. */
		direct_message_deep_link: FormControl<string | null | undefined>,

		/** Exclusive Tweet for super followers. */
		for_super_followers_only: FormControl<boolean | null | undefined>,

		/** Nullcasted (promoted-only) Tweets do not appear in the public timeline and are not served to followers. */
		nullcast: FormControl<boolean | null | undefined>,

		/** Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		quote_tweet_id: FormControl<string | null | undefined>,

		/** Settings to indicate who can reply to the Tweet. */
		reply_settings: FormControl<TweetCreateRequestPollReply_settings | null | undefined>,

		/** The content of the Tweet. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateTweetCreateRequestFormGroup() {
		return new FormGroup<TweetCreateRequestFormProperties>({
			card_uri: new FormControl<string | null | undefined>(undefined),
			direct_message_deep_link: new FormControl<string | null | undefined>(undefined),
			for_super_followers_only: new FormControl<boolean | null | undefined>(undefined),
			nullcast: new FormControl<boolean | null | undefined>(undefined),
			quote_tweet_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{1,19}$')]),
			reply_settings: new FormControl<TweetCreateRequestPollReply_settings | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TweetCreateRequestGeo {
		place_id?: string | null;
	}
	export interface TweetCreateRequestGeoFormProperties {
		place_id: FormControl<string | null | undefined>,
	}
	export function CreateTweetCreateRequestGeoFormGroup() {
		return new FormGroup<TweetCreateRequestGeoFormProperties>({
			place_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TweetCreateRequestMedia {

		/**
		 * A list of Media Ids to be attached to a created Tweet.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 4
		 */
		media_ids: Array<string>;

		/**
		 * A list of User Ids to be tagged in the media for created Tweet.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		tagged_user_ids?: Array<string>;
	}
	export interface TweetCreateRequestMediaFormProperties {
	}
	export function CreateTweetCreateRequestMediaFormGroup() {
		return new FormGroup<TweetCreateRequestMediaFormProperties>({
		});

	}

	export interface TweetCreateRequestPoll {

		/**
		 * Duration of the poll in minutes.
		 * Required
		 * Minimum: 5
		 * Maximum: 10080
		 */
		duration_minutes: number;

		/**
		 * Required
		 * Minimum items: 2
		 * Maximum items: 4
		 */
		options: Array<string>;

		/** Settings to indicate who can reply to the Tweet. */
		reply_settings?: TweetCreateRequestPollReply_settings | null;
	}
	export interface TweetCreateRequestPollFormProperties {

		/**
		 * Duration of the poll in minutes.
		 * Required
		 * Minimum: 5
		 * Maximum: 10080
		 */
		duration_minutes: FormControl<number | null | undefined>,

		/** Settings to indicate who can reply to the Tweet. */
		reply_settings: FormControl<TweetCreateRequestPollReply_settings | null | undefined>,
	}
	export function CreateTweetCreateRequestPollFormGroup() {
		return new FormGroup<TweetCreateRequestPollFormProperties>({
			duration_minutes: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(5), Validators.max(10080)]),
			reply_settings: new FormControl<TweetCreateRequestPollReply_settings | null | undefined>(undefined),
		});

	}

	export enum TweetCreateRequestPollReply_settings { following = 'following', mentionedUsers = 'mentionedUsers' }

	export interface TweetCreateRequestReply {

		/** A list of User Ids to be excluded from the reply Tweet. */
		exclude_reply_user_ids?: Array<string>;

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		in_reply_to_tweet_id: string;
	}
	export interface TweetCreateRequestReplyFormProperties {

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		in_reply_to_tweet_id: FormControl<string | null | undefined>,
	}
	export function CreateTweetCreateRequestReplyFormGroup() {
		return new FormGroup<TweetCreateRequestReplyFormProperties>({
			in_reply_to_tweet_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}

	export interface TweetCreateResponse {
		data?: TweetCreateResponseData;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
	}
	export interface TweetCreateResponseFormProperties {
	}
	export function CreateTweetCreateResponseFormGroup() {
		return new FormGroup<TweetCreateResponseFormProperties>({
		});

	}

	export interface TweetCreateResponseData {

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: string;

		/**
		 * The content of the Tweet.
		 * Required
		 */
		text: string;
	}
	export interface TweetCreateResponseDataFormProperties {

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The content of the Tweet.
		 * Required
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreateTweetCreateResponseDataFormGroup() {
		return new FormGroup<TweetCreateResponseDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TweetDeleteComplianceSchema {

		/** Required */
		delete: TweetComplianceSchema;
	}
	export interface TweetDeleteComplianceSchemaFormProperties {
	}
	export function CreateTweetDeleteComplianceSchemaFormGroup() {
		return new FormGroup<TweetDeleteComplianceSchemaFormProperties>({
		});

	}

	export interface TweetDeleteResponse {
		data?: TweetDeleteResponseData;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
	}
	export interface TweetDeleteResponseFormProperties {
	}
	export function CreateTweetDeleteResponseFormGroup() {
		return new FormGroup<TweetDeleteResponseFormProperties>({
		});

	}

	export interface TweetDeleteResponseData {

		/** Required */
		deleted: boolean;
	}
	export interface TweetDeleteResponseDataFormProperties {

		/** Required */
		deleted: FormControl<boolean | null | undefined>,
	}
	export function CreateTweetDeleteResponseDataFormGroup() {
		return new FormGroup<TweetDeleteResponseDataFormProperties>({
			deleted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TweetDropComplianceSchema {

		/** Required */
		drop: TweetComplianceSchema;
	}
	export interface TweetDropComplianceSchemaFormProperties {
	}
	export function CreateTweetDropComplianceSchemaFormGroup() {
		return new FormGroup<TweetDropComplianceSchemaFormProperties>({
		});

	}

	export interface TweetEditComplianceObjectSchema {

		/**
		 * Required
		 * Minimum items: 1
		 */
		edit_tweet_ids: Array<string>;

		/**
		 * Event time.
		 * Required
		 */
		event_at: Date;

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		initial_tweet_id: string;

		/** Required */
		tweet: TweetEditComplianceObjectSchemaTweet;
	}
	export interface TweetEditComplianceObjectSchemaFormProperties {

		/**
		 * Event time.
		 * Required
		 */
		event_at: FormControl<Date | null | undefined>,

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		initial_tweet_id: FormControl<string | null | undefined>,
	}
	export function CreateTweetEditComplianceObjectSchemaFormGroup() {
		return new FormGroup<TweetEditComplianceObjectSchemaFormProperties>({
			event_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			initial_tweet_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}

	export interface TweetEditComplianceObjectSchemaTweet {

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: string;
	}
	export interface TweetEditComplianceObjectSchemaTweetFormProperties {

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateTweetEditComplianceObjectSchemaTweetFormGroup() {
		return new FormGroup<TweetEditComplianceObjectSchemaTweetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}

	export interface TweetEditComplianceSchema {

		/** Required */
		tweet_edit: TweetEditComplianceObjectSchema;
	}
	export interface TweetEditComplianceSchemaFormProperties {
	}
	export function CreateTweetEditComplianceSchemaFormGroup() {
		return new FormGroup<TweetEditComplianceSchemaFormProperties>({
		});

	}

	export interface TweetHideRequest {

		/** Required */
		hidden: boolean;
	}
	export interface TweetHideRequestFormProperties {

		/** Required */
		hidden: FormControl<boolean | null | undefined>,
	}
	export function CreateTweetHideRequestFormGroup() {
		return new FormGroup<TweetHideRequestFormProperties>({
			hidden: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TweetHideResponse {
		data?: TweetHideResponseData;
	}
	export interface TweetHideResponseFormProperties {
	}
	export function CreateTweetHideResponseFormGroup() {
		return new FormGroup<TweetHideResponseFormProperties>({
		});

	}

	export interface TweetHideResponseData {
		hidden?: boolean | null;
	}
	export interface TweetHideResponseDataFormProperties {
		hidden: FormControl<boolean | null | undefined>,
	}
	export function CreateTweetHideResponseDataFormGroup() {
		return new FormGroup<TweetHideResponseDataFormProperties>({
			hidden: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Tweet label data. */
	export interface TweetLabelData {
	}

	/** Tweet label data. */
	export interface TweetLabelDataFormProperties {
	}
	export function CreateTweetLabelDataFormGroup() {
		return new FormGroup<TweetLabelDataFormProperties>({
		});

	}


	/** Tweet label stream events. */
	export interface TweetLabelStreamResponse {
	}

	/** Tweet label stream events. */
	export interface TweetLabelStreamResponseFormProperties {
	}
	export function CreateTweetLabelStreamResponseFormGroup() {
		return new FormGroup<TweetLabelStreamResponseFormProperties>({
		});

	}

	export interface TweetNotice {

		/**
		 * If the label is being applied or removed. Possible values are ‘apply’ or ‘remove’.
		 * Required
		 */
		application: string;

		/** Information shown on the Tweet label */
		details?: string | null;

		/**
		 * Event time.
		 * Required
		 */
		event_at: Date;

		/**
		 * The type of label on the Tweet
		 * Required
		 */
		event_type: string;

		/** Link to more information about this kind of label */
		extended_details_url?: string | null;

		/** Title/header of the Tweet label */
		label_title?: string | null;

		/** Required */
		tweet: TweetNoticeTweet;
	}
	export interface TweetNoticeFormProperties {

		/**
		 * If the label is being applied or removed. Possible values are ‘apply’ or ‘remove’.
		 * Required
		 */
		application: FormControl<string | null | undefined>,

		/** Information shown on the Tweet label */
		details: FormControl<string | null | undefined>,

		/**
		 * Event time.
		 * Required
		 */
		event_at: FormControl<Date | null | undefined>,

		/**
		 * The type of label on the Tweet
		 * Required
		 */
		event_type: FormControl<string | null | undefined>,

		/** Link to more information about this kind of label */
		extended_details_url: FormControl<string | null | undefined>,

		/** Title/header of the Tweet label */
		label_title: FormControl<string | null | undefined>,
	}
	export function CreateTweetNoticeFormGroup() {
		return new FormGroup<TweetNoticeFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			details: new FormControl<string | null | undefined>(undefined),
			event_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			event_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			extended_details_url: new FormControl<string | null | undefined>(undefined),
			label_title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TweetNoticeTweet {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		author_id: string;

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: string;
	}
	export interface TweetNoticeTweetFormProperties {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		author_id: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateTweetNoticeTweetFormGroup() {
		return new FormGroup<TweetNoticeTweetFormProperties>({
			author_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}

	export interface TweetNoticeSchema {

		/** Required */
		public_tweet_notice: TweetNotice;
	}
	export interface TweetNoticeSchemaFormProperties {
	}
	export function CreateTweetNoticeSchemaFormGroup() {
		return new FormGroup<TweetNoticeSchemaFormProperties>({
		});

	}

	export interface TweetTakedownComplianceSchema {

		/**
		 * Event time.
		 * Required
		 */
		event_at: Date;

		/** Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		quote_tweet_id?: string | null;

		/** Required */
		tweet: TweetTakedownComplianceSchemaTweet;

		/**
		 * Required
		 * Minimum items: 1
		 */
		withheld_in_countries: Array<string>;
	}
	export interface TweetTakedownComplianceSchemaFormProperties {

		/**
		 * Event time.
		 * Required
		 */
		event_at: FormControl<Date | null | undefined>,

		/** Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
		quote_tweet_id: FormControl<string | null | undefined>,
	}
	export function CreateTweetTakedownComplianceSchemaFormGroup() {
		return new FormGroup<TweetTakedownComplianceSchemaFormProperties>({
			event_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			quote_tweet_id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{1,19}$')]),
		});

	}

	export interface TweetTakedownComplianceSchemaTweet {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		author_id: string;

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: string;
	}
	export interface TweetTakedownComplianceSchemaTweetFormProperties {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		author_id: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateTweetTakedownComplianceSchemaTweetFormGroup() {
		return new FormGroup<TweetTakedownComplianceSchemaTweetFormProperties>({
			author_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}

	export interface TweetUndropComplianceSchema {

		/** Required */
		undrop: TweetComplianceSchema;
	}
	export interface TweetUndropComplianceSchemaFormProperties {
	}
	export function CreateTweetUndropComplianceSchemaFormGroup() {
		return new FormGroup<TweetUndropComplianceSchemaFormProperties>({
		});

	}

	export interface TweetUnviewable {

		/**
		 * If the label is being applied or removed. Possible values are ‘apply’ or ‘remove’.
		 * Required
		 */
		application: string;

		/**
		 * Event time.
		 * Required
		 */
		event_at: Date;

		/** Required */
		tweet: TweetUnviewableTweet;
	}
	export interface TweetUnviewableFormProperties {

		/**
		 * If the label is being applied or removed. Possible values are ‘apply’ or ‘remove’.
		 * Required
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * Event time.
		 * Required
		 */
		event_at: FormControl<Date | null | undefined>,
	}
	export function CreateTweetUnviewableFormGroup() {
		return new FormGroup<TweetUnviewableFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			event_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TweetUnviewableTweet {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		author_id: string;

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: string;
	}
	export interface TweetUnviewableTweetFormProperties {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		author_id: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateTweetUnviewableTweetFormGroup() {
		return new FormGroup<TweetUnviewableTweetFormProperties>({
			author_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}

	export interface TweetUnviewableSchema {

		/** Required */
		public_tweet_unviewable: TweetUnviewable;
	}
	export interface TweetUnviewableSchemaFormProperties {
	}
	export function CreateTweetUnviewableSchemaFormGroup() {
		return new FormGroup<TweetUnviewableSchemaFormProperties>({
		});

	}

	export interface TweetWithheldComplianceSchema {

		/** Required */
		withheld: TweetTakedownComplianceSchema;
	}
	export interface TweetWithheldComplianceSchemaFormProperties {
	}
	export function CreateTweetWithheldComplianceSchemaFormGroup() {
		return new FormGroup<TweetWithheldComplianceSchemaFormProperties>({
		});

	}


	/** A problem that indicates that the authentication used is not supported. */
	export interface UnsupportedAuthenticationProblem {
	}

	/** A problem that indicates that the authentication used is not supported. */
	export interface UnsupportedAuthenticationProblemFormProperties {
	}
	export function CreateUnsupportedAuthenticationProblemFormGroup() {
		return new FormGroup<UnsupportedAuthenticationProblemFormProperties>({
		});

	}


	/** Represent the portion of text recognized as a URL. */
	export interface UrlFields {

		/** Description of the URL landing page. */
		description?: string | null;

		/** The URL as displayed in the Twitter client. */
		display_url?: string | null;

		/** A validly formatted URL. */
		expanded_url?: string | null;

		/** Minimum items: 1 */
		images?: Array<UrlImage>;

		/** The Media Key identifier for this attachment. */
		media_key?: string | null;

		/**
		 * HTTP Status Code.
		 * Minimum: 100
		 * Maximum: 599
		 */
		status?: number | null;

		/** Title of the page the URL points to. */
		title?: string | null;

		/** Fully resolved url. */
		unwound_url?: string | null;

		/**
		 * A validly formatted URL.
		 * Required
		 */
		url: string;
	}

	/** Represent the portion of text recognized as a URL. */
	export interface UrlFieldsFormProperties {

		/** Description of the URL landing page. */
		description: FormControl<string | null | undefined>,

		/** The URL as displayed in the Twitter client. */
		display_url: FormControl<string | null | undefined>,

		/** A validly formatted URL. */
		expanded_url: FormControl<string | null | undefined>,

		/** The Media Key identifier for this attachment. */
		media_key: FormControl<string | null | undefined>,

		/**
		 * HTTP Status Code.
		 * Minimum: 100
		 * Maximum: 599
		 */
		status: FormControl<number | null | undefined>,

		/** Title of the page the URL points to. */
		title: FormControl<string | null | undefined>,

		/** Fully resolved url. */
		unwound_url: FormControl<string | null | undefined>,

		/**
		 * A validly formatted URL.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateUrlFieldsFormGroup() {
		return new FormGroup<UrlFieldsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			display_url: new FormControl<string | null | undefined>(undefined),
			expanded_url: new FormControl<string | null | undefined>(undefined),
			media_key: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([0-9]+)_([0-9]+)$')]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.min(100), Validators.max(599)]),
			title: new FormControl<string | null | undefined>(undefined),
			unwound_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A problem that indicates that a usage cap has been exceeded. */
	export interface UsageCapExceededProblem extends Problem {
		period?: UsageCapExceededProblemPeriod | null;
		scope?: UsageCapExceededProblemScope | null;
	}

	/** A problem that indicates that a usage cap has been exceeded. */
	export interface UsageCapExceededProblemFormProperties extends ProblemFormProperties {
		period: FormControl<UsageCapExceededProblemPeriod | null | undefined>,
		scope: FormControl<UsageCapExceededProblemScope | null | undefined>,
	}
	export function CreateUsageCapExceededProblemFormGroup() {
		return new FormGroup<UsageCapExceededProblemFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			period: new FormControl<UsageCapExceededProblemPeriod | null | undefined>(undefined),
			scope: new FormControl<UsageCapExceededProblemScope | null | undefined>(undefined),
		});

	}

	export enum UsageCapExceededProblemPeriod { Daily = 'Daily', Monthly = 'Monthly' }

	export enum UsageCapExceededProblemScope { Account = 'Account', Product = 'Product' }


	/** User compliance data. */
	export interface UserComplianceData {
	}

	/** User compliance data. */
	export interface UserComplianceDataFormProperties {
	}
	export function CreateUserComplianceDataFormGroup() {
		return new FormGroup<UserComplianceDataFormProperties>({
		});

	}

	export interface UserComplianceSchema {

		/**
		 * Event time.
		 * Required
		 */
		event_at: Date;

		/** Required */
		user: UserComplianceSchemaUser;
	}
	export interface UserComplianceSchemaFormProperties {

		/**
		 * Event time.
		 * Required
		 */
		event_at: FormControl<Date | null | undefined>,
	}
	export function CreateUserComplianceSchemaFormGroup() {
		return new FormGroup<UserComplianceSchemaFormProperties>({
			event_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserComplianceSchemaUser {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: string;
	}
	export interface UserComplianceSchemaUserFormProperties {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateUserComplianceSchemaUserFormGroup() {
		return new FormGroup<UserComplianceSchemaUserFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}


	/** User compliance stream events. */
	export interface UserComplianceStreamResponse {
	}

	/** User compliance stream events. */
	export interface UserComplianceStreamResponseFormProperties {
	}
	export function CreateUserComplianceStreamResponseFormGroup() {
		return new FormGroup<UserComplianceStreamResponseFormProperties>({
		});

	}

	export interface UserDeleteComplianceSchema {

		/** Required */
		user_delete: UserComplianceSchema;
	}
	export interface UserDeleteComplianceSchemaFormProperties {
	}
	export function CreateUserDeleteComplianceSchemaFormGroup() {
		return new FormGroup<UserDeleteComplianceSchemaFormProperties>({
		});

	}

	export interface UserProfileModificationComplianceSchema {

		/** Required */
		user_profile_modification: UserProfileModificationObjectSchema;
	}
	export interface UserProfileModificationComplianceSchemaFormProperties {
	}
	export function CreateUserProfileModificationComplianceSchemaFormGroup() {
		return new FormGroup<UserProfileModificationComplianceSchemaFormProperties>({
		});

	}

	export interface UserProfileModificationObjectSchema {

		/**
		 * Event time.
		 * Required
		 */
		event_at: Date;

		/** Required */
		new_value: string;

		/** Required */
		profile_field: string;

		/** Required */
		user: UserProfileModificationObjectSchemaUser;
	}
	export interface UserProfileModificationObjectSchemaFormProperties {

		/**
		 * Event time.
		 * Required
		 */
		event_at: FormControl<Date | null | undefined>,

		/** Required */
		new_value: FormControl<string | null | undefined>,

		/** Required */
		profile_field: FormControl<string | null | undefined>,
	}
	export function CreateUserProfileModificationObjectSchemaFormGroup() {
		return new FormGroup<UserProfileModificationObjectSchemaFormProperties>({
			event_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			new_value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			profile_field: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserProfileModificationObjectSchemaUser {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: string;
	}
	export interface UserProfileModificationObjectSchemaUserFormProperties {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateUserProfileModificationObjectSchemaUserFormGroup() {
		return new FormGroup<UserProfileModificationObjectSchemaUserFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}

	export interface UserProtectComplianceSchema {

		/** Required */
		user_protect: UserComplianceSchema;
	}
	export interface UserProtectComplianceSchemaFormProperties {
	}
	export function CreateUserProtectComplianceSchemaFormGroup() {
		return new FormGroup<UserProtectComplianceSchemaFormProperties>({
		});

	}

	export interface UserScrubGeoObjectSchema {

		/**
		 * Event time.
		 * Required
		 */
		event_at: Date;

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		up_to_tweet_id: string;

		/** Required */
		user: UserScrubGeoObjectSchemaUser;
	}
	export interface UserScrubGeoObjectSchemaFormProperties {

		/**
		 * Event time.
		 * Required
		 */
		event_at: FormControl<Date | null | undefined>,

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		up_to_tweet_id: FormControl<string | null | undefined>,
	}
	export function CreateUserScrubGeoObjectSchemaFormGroup() {
		return new FormGroup<UserScrubGeoObjectSchemaFormProperties>({
			event_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			up_to_tweet_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}

	export interface UserScrubGeoObjectSchemaUser {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: string;
	}
	export interface UserScrubGeoObjectSchemaUserFormProperties {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateUserScrubGeoObjectSchemaUserFormGroup() {
		return new FormGroup<UserScrubGeoObjectSchemaUserFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}

	export interface UserScrubGeoSchema {

		/** Required */
		scrub_geo: UserScrubGeoObjectSchema;
	}
	export interface UserScrubGeoSchemaFormProperties {
	}
	export function CreateUserScrubGeoSchemaFormGroup() {
		return new FormGroup<UserScrubGeoSchemaFormProperties>({
		});

	}

	export interface UserSuspendComplianceSchema {

		/** Required */
		user_suspend: UserComplianceSchema;
	}
	export interface UserSuspendComplianceSchemaFormProperties {
	}
	export function CreateUserSuspendComplianceSchemaFormGroup() {
		return new FormGroup<UserSuspendComplianceSchemaFormProperties>({
		});

	}

	export interface UserTakedownComplianceSchema {

		/**
		 * Event time.
		 * Required
		 */
		event_at: Date;

		/** Required */
		user: UserTakedownComplianceSchemaUser;

		/**
		 * Required
		 * Minimum items: 1
		 */
		withheld_in_countries: Array<string>;
	}
	export interface UserTakedownComplianceSchemaFormProperties {

		/**
		 * Event time.
		 * Required
		 */
		event_at: FormControl<Date | null | undefined>,
	}
	export function CreateUserTakedownComplianceSchemaFormGroup() {
		return new FormGroup<UserTakedownComplianceSchemaFormProperties>({
			event_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserTakedownComplianceSchemaUser {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: string;
	}
	export interface UserTakedownComplianceSchemaUserFormProperties {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateUserTakedownComplianceSchemaUserFormGroup() {
		return new FormGroup<UserTakedownComplianceSchemaUserFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}

	export interface UserUndeleteComplianceSchema {

		/** Required */
		user_undelete: UserComplianceSchema;
	}
	export interface UserUndeleteComplianceSchemaFormProperties {
	}
	export function CreateUserUndeleteComplianceSchemaFormGroup() {
		return new FormGroup<UserUndeleteComplianceSchemaFormProperties>({
		});

	}

	export interface UserUnprotectComplianceSchema {

		/** Required */
		user_unprotect: UserComplianceSchema;
	}
	export interface UserUnprotectComplianceSchemaFormProperties {
	}
	export function CreateUserUnprotectComplianceSchemaFormGroup() {
		return new FormGroup<UserUnprotectComplianceSchemaFormProperties>({
		});

	}

	export interface UserUnsuspendComplianceSchema {

		/** Required */
		user_unsuspend: UserComplianceSchema;
	}
	export interface UserUnsuspendComplianceSchemaFormProperties {
	}
	export function CreateUserUnsuspendComplianceSchemaFormGroup() {
		return new FormGroup<UserUnsuspendComplianceSchemaFormProperties>({
		});

	}

	export interface UserWithheldComplianceSchema {

		/** Required */
		user_withheld: UserTakedownComplianceSchema;
	}
	export interface UserWithheldComplianceSchemaFormProperties {
	}
	export function CreateUserWithheldComplianceSchemaFormGroup() {
		return new FormGroup<UserWithheldComplianceSchemaFormProperties>({
		});

	}

	export interface UsersFollowingCreateRequest {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		target_user_id: string;
	}
	export interface UsersFollowingCreateRequestFormProperties {

		/**
		 * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		target_user_id: FormControl<string | null | undefined>,
	}
	export function CreateUsersFollowingCreateRequestFormGroup() {
		return new FormGroup<UsersFollowingCreateRequestFormProperties>({
			target_user_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}

	export interface UsersFollowingCreateResponse {
		data?: UsersFollowingCreateResponseData;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
	}
	export interface UsersFollowingCreateResponseFormProperties {
	}
	export function CreateUsersFollowingCreateResponseFormGroup() {
		return new FormGroup<UsersFollowingCreateResponseFormProperties>({
		});

	}

	export interface UsersFollowingCreateResponseData {
		following?: boolean | null;
		pending_follow?: boolean | null;
	}
	export interface UsersFollowingCreateResponseDataFormProperties {
		following: FormControl<boolean | null | undefined>,
		pending_follow: FormControl<boolean | null | undefined>,
	}
	export function CreateUsersFollowingCreateResponseDataFormGroup() {
		return new FormGroup<UsersFollowingCreateResponseDataFormProperties>({
			following: new FormControl<boolean | null | undefined>(undefined),
			pending_follow: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UsersFollowingDeleteResponse {
		data?: UsersFollowingDeleteResponseData;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
	}
	export interface UsersFollowingDeleteResponseFormProperties {
	}
	export function CreateUsersFollowingDeleteResponseFormGroup() {
		return new FormGroup<UsersFollowingDeleteResponseFormProperties>({
		});

	}

	export interface UsersFollowingDeleteResponseData {
		following?: boolean | null;
	}
	export interface UsersFollowingDeleteResponseDataFormProperties {
		following: FormControl<boolean | null | undefined>,
	}
	export function CreateUsersFollowingDeleteResponseDataFormGroup() {
		return new FormGroup<UsersFollowingDeleteResponseDataFormProperties>({
			following: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UsersLikesCreateRequest {

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		tweet_id: string;
	}
	export interface UsersLikesCreateRequestFormProperties {

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		tweet_id: FormControl<string | null | undefined>,
	}
	export function CreateUsersLikesCreateRequestFormGroup() {
		return new FormGroup<UsersLikesCreateRequestFormProperties>({
			tweet_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}

	export interface UsersLikesCreateResponse {
		data?: UsersLikesCreateResponseData;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
	}
	export interface UsersLikesCreateResponseFormProperties {
	}
	export function CreateUsersLikesCreateResponseFormGroup() {
		return new FormGroup<UsersLikesCreateResponseFormProperties>({
		});

	}

	export interface UsersLikesCreateResponseData {
		liked?: boolean | null;
	}
	export interface UsersLikesCreateResponseDataFormProperties {
		liked: FormControl<boolean | null | undefined>,
	}
	export function CreateUsersLikesCreateResponseDataFormGroup() {
		return new FormGroup<UsersLikesCreateResponseDataFormProperties>({
			liked: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UsersLikesDeleteResponse {
		data?: UsersLikesDeleteResponseData;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
	}
	export interface UsersLikesDeleteResponseFormProperties {
	}
	export function CreateUsersLikesDeleteResponseFormGroup() {
		return new FormGroup<UsersLikesDeleteResponseFormProperties>({
		});

	}

	export interface UsersLikesDeleteResponseData {
		liked?: boolean | null;
	}
	export interface UsersLikesDeleteResponseDataFormProperties {
		liked: FormControl<boolean | null | undefined>,
	}
	export function CreateUsersLikesDeleteResponseDataFormGroup() {
		return new FormGroup<UsersLikesDeleteResponseDataFormProperties>({
			liked: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UsersRetweetsCreateRequest {

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		tweet_id: string;
	}
	export interface UsersRetweetsCreateRequestFormProperties {

		/**
		 * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
		 * Required
		 */
		tweet_id: FormControl<string | null | undefined>,
	}
	export function CreateUsersRetweetsCreateRequestFormGroup() {
		return new FormGroup<UsersRetweetsCreateRequestFormProperties>({
			tweet_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1,19}$')]),
		});

	}

	export interface UsersRetweetsCreateResponse {
		data?: UsersRetweetsCreateResponseData;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
	}
	export interface UsersRetweetsCreateResponseFormProperties {
	}
	export function CreateUsersRetweetsCreateResponseFormGroup() {
		return new FormGroup<UsersRetweetsCreateResponseFormProperties>({
		});

	}

	export interface UsersRetweetsCreateResponseData {
		retweeted?: boolean | null;
	}
	export interface UsersRetweetsCreateResponseDataFormProperties {
		retweeted: FormControl<boolean | null | undefined>,
	}
	export function CreateUsersRetweetsCreateResponseDataFormGroup() {
		return new FormGroup<UsersRetweetsCreateResponseDataFormProperties>({
			retweeted: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UsersRetweetsDeleteResponse {
		data?: UsersRetweetsDeleteResponseData;

		/** Minimum items: 1 */
		errors?: Array<Problem>;
	}
	export interface UsersRetweetsDeleteResponseFormProperties {
	}
	export function CreateUsersRetweetsDeleteResponseFormGroup() {
		return new FormGroup<UsersRetweetsDeleteResponseFormProperties>({
		});

	}

	export interface UsersRetweetsDeleteResponseData {
		retweeted?: boolean | null;
	}
	export interface UsersRetweetsDeleteResponseDataFormProperties {
		retweeted: FormControl<boolean | null | undefined>,
	}
	export function CreateUsersRetweetsDeleteResponseDataFormGroup() {
		return new FormGroup<UsersRetweetsDeleteResponseDataFormProperties>({
			retweeted: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Video extends Media {
		duration_ms?: number | null;

		/** Nonpublic engagement metrics for the Media at the time of the request. */
		non_public_metrics?: VideoNon_public_metrics;

		/** Organic nonpublic engagement metrics for the Media at the time of the request. */
		organic_metrics?: VideoOrganic_metrics;
		preview_image_url?: string | null;

		/** Promoted nonpublic engagement metrics for the Media at the time of the request. */
		promoted_metrics?: VideoPromoted_metrics;

		/** Engagement metrics for the Media at the time of the request. */
		public_metrics?: VideoPublic_metrics;

		/** An array of all available variants of the media. */
		variants?: Array<Variant>;
	}
	export interface VideoFormProperties extends MediaFormProperties {
		duration_ms: FormControl<number | null | undefined>,
		preview_image_url: FormControl<string | null | undefined>,
	}
	export function CreateVideoFormGroup() {
		return new FormGroup<VideoFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			media_key: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([0-9]+)_([0-9]+)$')]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			duration_ms: new FormControl<number | null | undefined>(undefined),
			preview_image_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VideoNon_public_metrics {

		/** Number of users who made it through 0% of the video. */
		playback_0_count?: number | null;

		/** Number of users who made it through 100% of the video. */
		playback_100_count?: number | null;

		/** Number of users who made it through 25% of the video. */
		playback_25_count?: number | null;

		/** Number of users who made it through 50% of the video. */
		playback_50_count?: number | null;

		/** Number of users who made it through 75% of the video. */
		playback_75_count?: number | null;
	}
	export interface VideoNon_public_metricsFormProperties {

		/** Number of users who made it through 0% of the video. */
		playback_0_count: FormControl<number | null | undefined>,

		/** Number of users who made it through 100% of the video. */
		playback_100_count: FormControl<number | null | undefined>,

		/** Number of users who made it through 25% of the video. */
		playback_25_count: FormControl<number | null | undefined>,

		/** Number of users who made it through 50% of the video. */
		playback_50_count: FormControl<number | null | undefined>,

		/** Number of users who made it through 75% of the video. */
		playback_75_count: FormControl<number | null | undefined>,
	}
	export function CreateVideoNon_public_metricsFormGroup() {
		return new FormGroup<VideoNon_public_metricsFormProperties>({
			playback_0_count: new FormControl<number | null | undefined>(undefined),
			playback_100_count: new FormControl<number | null | undefined>(undefined),
			playback_25_count: new FormControl<number | null | undefined>(undefined),
			playback_50_count: new FormControl<number | null | undefined>(undefined),
			playback_75_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface VideoOrganic_metrics {

		/** Number of users who made it through 0% of the video. */
		playback_0_count?: number | null;

		/** Number of users who made it through 100% of the video. */
		playback_100_count?: number | null;

		/** Number of users who made it through 25% of the video. */
		playback_25_count?: number | null;

		/** Number of users who made it through 50% of the video. */
		playback_50_count?: number | null;

		/** Number of users who made it through 75% of the video. */
		playback_75_count?: number | null;

		/** Number of times this video has been viewed. */
		view_count?: number | null;
	}
	export interface VideoOrganic_metricsFormProperties {

		/** Number of users who made it through 0% of the video. */
		playback_0_count: FormControl<number | null | undefined>,

		/** Number of users who made it through 100% of the video. */
		playback_100_count: FormControl<number | null | undefined>,

		/** Number of users who made it through 25% of the video. */
		playback_25_count: FormControl<number | null | undefined>,

		/** Number of users who made it through 50% of the video. */
		playback_50_count: FormControl<number | null | undefined>,

		/** Number of users who made it through 75% of the video. */
		playback_75_count: FormControl<number | null | undefined>,

		/** Number of times this video has been viewed. */
		view_count: FormControl<number | null | undefined>,
	}
	export function CreateVideoOrganic_metricsFormGroup() {
		return new FormGroup<VideoOrganic_metricsFormProperties>({
			playback_0_count: new FormControl<number | null | undefined>(undefined),
			playback_100_count: new FormControl<number | null | undefined>(undefined),
			playback_25_count: new FormControl<number | null | undefined>(undefined),
			playback_50_count: new FormControl<number | null | undefined>(undefined),
			playback_75_count: new FormControl<number | null | undefined>(undefined),
			view_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface VideoPromoted_metrics {

		/** Number of users who made it through 0% of the video. */
		playback_0_count?: number | null;

		/** Number of users who made it through 100% of the video. */
		playback_100_count?: number | null;

		/** Number of users who made it through 25% of the video. */
		playback_25_count?: number | null;

		/** Number of users who made it through 50% of the video. */
		playback_50_count?: number | null;

		/** Number of users who made it through 75% of the video. */
		playback_75_count?: number | null;

		/** Number of times this video has been viewed. */
		view_count?: number | null;
	}
	export interface VideoPromoted_metricsFormProperties {

		/** Number of users who made it through 0% of the video. */
		playback_0_count: FormControl<number | null | undefined>,

		/** Number of users who made it through 100% of the video. */
		playback_100_count: FormControl<number | null | undefined>,

		/** Number of users who made it through 25% of the video. */
		playback_25_count: FormControl<number | null | undefined>,

		/** Number of users who made it through 50% of the video. */
		playback_50_count: FormControl<number | null | undefined>,

		/** Number of users who made it through 75% of the video. */
		playback_75_count: FormControl<number | null | undefined>,

		/** Number of times this video has been viewed. */
		view_count: FormControl<number | null | undefined>,
	}
	export function CreateVideoPromoted_metricsFormGroup() {
		return new FormGroup<VideoPromoted_metricsFormProperties>({
			playback_0_count: new FormControl<number | null | undefined>(undefined),
			playback_100_count: new FormControl<number | null | undefined>(undefined),
			playback_25_count: new FormControl<number | null | undefined>(undefined),
			playback_50_count: new FormControl<number | null | undefined>(undefined),
			playback_75_count: new FormControl<number | null | undefined>(undefined),
			view_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface VideoPublic_metrics {

		/** Number of times this video has been viewed. */
		view_count?: number | null;
	}
	export interface VideoPublic_metricsFormProperties {

		/** Number of times this video has been viewed. */
		view_count: FormControl<number | null | undefined>,
	}
	export function CreateVideoPublic_metricsFormGroup() {
		return new FormGroup<VideoPublic_metricsFormProperties>({
			view_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List Compliance Jobs
		 * Returns recent Compliance Jobs for a given job type and optional job status
		 * Get 2/compliance/jobs
		 * @param {ComplianceJobType} type Type of Compliance Job to list.
		 * @param {ListBatchComplianceJobsStatus} status Status of Compliance Job to list.
		 * @param {Array<string>} compliance_job_fields A comma separated list of ComplianceJob fields to display.
		 * @return {Get2ComplianceJobsResponse} The request has succeeded.
		 */
		ListBatchComplianceJobs(type: ComplianceJobType, status: ListBatchComplianceJobsStatus | null | undefined, compliance_job_fields: Array<string> | null | undefined): Observable<Get2ComplianceJobsResponse> {
			return this.http.get<Get2ComplianceJobsResponse>(this.baseUri + '2/compliance/jobs?type=' + type + '&status=' + status + '&' + compliance_job_fields?.map(z => `compliance_job.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Create compliance job
		 * Creates a compliance for the given job type
		 * Post 2/compliance/jobs
		 * @return {CreateComplianceJobResponse} The request has succeeded.
		 */
		CreateBatchComplianceJob(requestBody: CreateComplianceJobRequest): Observable<CreateComplianceJobResponse> {
			return this.http.post<CreateComplianceJobResponse>(this.baseUri + '2/compliance/jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Compliance Job
		 * Returns a single Compliance Job by ID
		 * Get 2/compliance/jobs/{id}
		 * @param {string} id The ID of the Compliance Job to retrieve.
		 * @param {Array<string>} compliance_job_fields A comma separated list of ComplianceJob fields to display.
		 * @return {Get2ComplianceJobsIdResponse} The request has succeeded.
		 */
		GetBatchComplianceJob(id: string, compliance_job_fields: Array<string> | null | undefined): Observable<Get2ComplianceJobsIdResponse> {
			return this.http.get<Get2ComplianceJobsIdResponse>(this.baseUri + '2/compliance/jobs/' + (id == null ? '' : encodeURIComponent(id)) + '&' + compliance_job_fields?.map(z => `compliance_job.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Create a new DM Conversation
		 * Creates a new DM Conversation.
		 * Post 2/dm_conversations
		 * @return {void} 
		 */
		DmConversationIdCreate(requestBody: CreateDmConversationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2/dm_conversations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get DM Events for a DM Conversation
		 * Returns DM Events for a DM Conversation
		 * Get 2/dm_conversations/with/{participant_id}/dm_events
		 * @param {string} participant_id The ID of the participant user for the One to One DM conversation.
		 * @param {number} max_results The maximum number of results.
		 * @param {string} pagination_token This parameter is used to get a specified 'page' of results.
		 * @param {Array<string>} event_types The set of event_types to include in the results.
		 * @param {Array<string>} dm_event_fields A comma separated list of DmEvent fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} media_fields A comma separated list of Media fields to display.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @return {Get2DmConversationsWithParticipantIdDmEventsResponse} The request has succeeded.
		 */
		GetDmConversationsWithParticipantIdDmEvents(participant_id: string, max_results: number | null | undefined, pagination_token: string | null | undefined, event_types: Array<string> | null | undefined, dm_event_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, media_fields: Array<string> | null | undefined, user_fields: Array<string> | null | undefined, tweet_fields: Array<string> | null | undefined): Observable<Get2DmConversationsWithParticipantIdDmEventsResponse> {
			return this.http.get<Get2DmConversationsWithParticipantIdDmEventsResponse>(this.baseUri + '2/dm_conversations/with/' + (participant_id == null ? '' : encodeURIComponent(participant_id)) + '/dm_events&max_results=' + max_results + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&' + event_types?.map(z => `event_types=${encodeURIComponent(z)}`).join('&') + '&' + dm_event_fields?.map(z => `dm_event.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + media_fields?.map(z => `media.fields=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Send a new message to a user
		 * Creates a new message for a DM Conversation with a participant user by ID
		 * Post 2/dm_conversations/with/{participant_id}/messages
		 * @param {string} participant_id The ID of the recipient user that will receive the DM.
		 * @return {void} 
		 */
		DmConversationWithUserEventIdCreate(participant_id: string, requestBody: CreateMessageRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2/dm_conversations/with/' + (participant_id == null ? '' : encodeURIComponent(participant_id)) + '/messages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Send a new message to a DM Conversation
		 * Creates a new message for a DM Conversation specified by DM Conversation ID
		 * Post 2/dm_conversations/{dm_conversation_id}/messages
		 * @param {string} dm_conversation_id The DM Conversation ID.
		 * @return {void} 
		 */
		DmConversationByIdEventIdCreate(dm_conversation_id: string, requestBody: CreateMessageRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2/dm_conversations/' + (dm_conversation_id == null ? '' : encodeURIComponent(dm_conversation_id)) + '/messages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get DM Events for a DM Conversation
		 * Returns DM Events for a DM Conversation
		 * Get 2/dm_conversations/{id}/dm_events
		 * @param {string} id The DM Conversation ID.
		 * @param {number} max_results The maximum number of results.
		 * @param {string} pagination_token This parameter is used to get a specified 'page' of results.
		 * @param {Array<string>} event_types The set of event_types to include in the results.
		 * @param {Array<string>} dm_event_fields A comma separated list of DmEvent fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} media_fields A comma separated list of Media fields to display.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @return {Get2DmConversationsIdDmEventsResponse} The request has succeeded.
		 */
		GetDmConversationsIdDmEvents(id: string, max_results: number | null | undefined, pagination_token: string | null | undefined, event_types: Array<string> | null | undefined, dm_event_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, media_fields: Array<string> | null | undefined, user_fields: Array<string> | null | undefined, tweet_fields: Array<string> | null | undefined): Observable<Get2DmConversationsIdDmEventsResponse> {
			return this.http.get<Get2DmConversationsIdDmEventsResponse>(this.baseUri + '2/dm_conversations/' + (id == null ? '' : encodeURIComponent(id)) + '/dm_events&max_results=' + max_results + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&' + event_types?.map(z => `event_types=${encodeURIComponent(z)}`).join('&') + '&' + dm_event_fields?.map(z => `dm_event.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + media_fields?.map(z => `media.fields=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get recent DM Events
		 * Returns recent DM Events across DM conversations
		 * Get 2/dm_events
		 * @param {number} max_results The maximum number of results.
		 * @param {string} pagination_token This parameter is used to get a specified 'page' of results.
		 * @param {Array<string>} event_types The set of event_types to include in the results.
		 * @param {Array<string>} dm_event_fields A comma separated list of DmEvent fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} media_fields A comma separated list of Media fields to display.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @return {Get2DmEventsResponse} The request has succeeded.
		 */
		GetDmEvents(max_results: number | null | undefined, pagination_token: string | null | undefined, event_types: Array<string> | null | undefined, dm_event_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, media_fields: Array<string> | null | undefined, user_fields: Array<string> | null | undefined, tweet_fields: Array<string> | null | undefined): Observable<Get2DmEventsResponse> {
			return this.http.get<Get2DmEventsResponse>(this.baseUri + '2/dm_events?max_results=' + max_results + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&' + event_types?.map(z => `event_types=${encodeURIComponent(z)}`).join('&') + '&' + dm_event_fields?.map(z => `dm_event.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + media_fields?.map(z => `media.fields=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Create List
		 * Creates a new List.
		 * Post 2/lists
		 * @return {ListCreateResponse} The request has succeeded.
		 */
		ListIdCreate(requestBody: ListCreateRequest): Observable<ListCreateResponse> {
			return this.http.post<ListCreateResponse>(this.baseUri + '2/lists', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete List
		 * Delete a List that you own.
		 * Delete 2/lists/{id}
		 * @param {string} id The ID of the List to delete.
		 * @return {ListDeleteResponse} The request has succeeded.
		 */
		ListIdDelete(id: string): Observable<ListDeleteResponse> {
			return this.http.delete<ListDeleteResponse>(this.baseUri + '2/lists/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * List lookup by List ID.
		 * Returns a List.
		 * Get 2/lists/{id}
		 * @param {string} id The ID of the List.
		 * @param {Array<string>} list_fields A comma separated list of List fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @return {Get2ListsIdResponse} The request has succeeded.
		 */
		ListIdGet(id: string, list_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, user_fields: Array<string> | null | undefined): Observable<Get2ListsIdResponse> {
			return this.http.get<Get2ListsIdResponse>(this.baseUri + '2/lists/' + (id == null ? '' : encodeURIComponent(id)) + '&' + list_fields?.map(z => `list.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Update List.
		 * Update a List that you own.
		 * Put 2/lists/{id}
		 * @param {string} id The ID of the List to modify.
		 * @return {ListUpdateResponse} The request has succeeded.
		 */
		ListIdUpdate(id: string, requestBody: ListUpdateRequest): Observable<ListUpdateResponse> {
			return this.http.put<ListUpdateResponse>(this.baseUri + '2/lists/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns User objects that follow a List by the provided List ID
		 * Returns a list of Users that follow a List by the provided List ID
		 * Get 2/lists/{id}/followers
		 * @param {string} id The ID of the List.
		 * @param {number} max_results The maximum number of results.
		 * @param {string} pagination_token This parameter is used to get a specified 'page' of results.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @return {Get2ListsIdFollowersResponse} The request has succeeded.
		 */
		ListGetFollowers(id: string, max_results: number | null | undefined, pagination_token: string | null | undefined, user_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, tweet_fields: Array<string> | null | undefined): Observable<Get2ListsIdFollowersResponse> {
			return this.http.get<Get2ListsIdFollowersResponse>(this.baseUri + '2/lists/' + (id == null ? '' : encodeURIComponent(id)) + '/followers&max_results=' + max_results + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Returns User objects that are members of a List by the provided List ID.
		 * Returns a list of Users that are members of a List by the provided List ID.
		 * Get 2/lists/{id}/members
		 * @param {string} id The ID of the List.
		 * @param {number} max_results The maximum number of results.
		 * @param {string} pagination_token This parameter is used to get a specified 'page' of results.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @return {Get2ListsIdMembersResponse} The request has succeeded.
		 */
		ListGetMembers(id: string, max_results: number | null | undefined, pagination_token: string | null | undefined, user_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, tweet_fields: Array<string> | null | undefined): Observable<Get2ListsIdMembersResponse> {
			return this.http.get<Get2ListsIdMembersResponse>(this.baseUri + '2/lists/' + (id == null ? '' : encodeURIComponent(id)) + '/members&max_results=' + max_results + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Add a List member
		 * Causes a User to become a member of a List.
		 * Post 2/lists/{id}/members
		 * @param {string} id The ID of the List for which to add a member.
		 * @return {ListMutateResponse} The request has succeeded.
		 */
		ListAddMember(id: string, requestBody: ListAddUserRequest): Observable<ListMutateResponse> {
			return this.http.post<ListMutateResponse>(this.baseUri + '2/lists/' + (id == null ? '' : encodeURIComponent(id)) + '/members', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove a List member
		 * Causes a User to be removed from the members of a List.
		 * Delete 2/lists/{id}/members/{user_id}
		 * @param {string} id The ID of the List to remove a member.
		 * @param {string} user_id The ID of User that will be removed from the List.
		 * @return {ListMutateResponse} The request has succeeded.
		 */
		ListRemoveMember(id: string, user_id: string): Observable<ListMutateResponse> {
			return this.http.delete<ListMutateResponse>(this.baseUri + '2/lists/' + (id == null ? '' : encodeURIComponent(id)) + '/members/' + (user_id == null ? '' : encodeURIComponent(user_id)), {});
		}

		/**
		 * List Tweets timeline by List ID.
		 * Returns a list of Tweets associated with the provided List ID.
		 * Get 2/lists/{id}/tweets
		 * @param {string} id The ID of the List.
		 * @param {number} max_results The maximum number of results.
		 * @param {string} pagination_token This parameter is used to get the next 'page' of results.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} media_fields A comma separated list of Media fields to display.
		 * @param {Array<string>} poll_fields A comma separated list of Poll fields to display.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} place_fields A comma separated list of Place fields to display.
		 * @return {Get2ListsIdTweetsResponse} The request has succeeded.
		 */
		ListsIdTweets(id: string, max_results: number | null | undefined, pagination_token: string | null | undefined, tweet_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, media_fields: Array<string> | null | undefined, poll_fields: Array<string> | null | undefined, user_fields: Array<string> | null | undefined, place_fields: Array<string> | null | undefined): Observable<Get2ListsIdTweetsResponse> {
			return this.http.get<Get2ListsIdTweetsResponse>(this.baseUri + '2/lists/' + (id == null ? '' : encodeURIComponent(id)) + '/tweets&max_results=' + max_results + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + media_fields?.map(z => `media.fields=${encodeURIComponent(z)}`).join('&') + '&' + poll_fields?.map(z => `poll.fields=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + place_fields?.map(z => `place.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Returns the OpenAPI Specification document.
		 * Full OpenAPI Specification in JSON format. (See https://github.com/OAI/OpenAPI-Specification/blob/master/README.md)
		 * Get 2/openapi.json
		 * @return {string} The request was successful
		 */
		GetOpenApiSpec(): Observable<string> {
			return this.http.get(this.baseUri + '2/openapi.json', { responseType: 'text' });
		}

		/**
		 * Space lookup up Space IDs
		 * Returns a variety of information about the Spaces specified by the requested IDs
		 * Get 2/spaces
		 * @param {Array<string>} ids The list of Space IDs to return.
		 * @param {Array<string>} space_fields A comma separated list of Space fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} topic_fields A comma separated list of Topic fields to display.
		 * @return {Get2SpacesResponse} The request has succeeded.
		 */
		FindSpacesByIds(ids: Array<string>, space_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, user_fields: Array<string> | null | undefined, topic_fields: Array<string> | null | undefined): Observable<Get2SpacesResponse> {
			return this.http.get<Get2SpacesResponse>(this.baseUri + '2/spaces?' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&' + space_fields?.map(z => `space.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + topic_fields?.map(z => `topic.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Space lookup by their creators
		 * Returns a variety of information about the Spaces created by the provided User IDs
		 * Get 2/spaces/by/creator_ids
		 * @param {Array<string>} user_ids The IDs of Users to search through.
		 * @param {Array<string>} space_fields A comma separated list of Space fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} topic_fields A comma separated list of Topic fields to display.
		 * @return {Get2SpacesByCreatorIdsResponse} The request has succeeded.
		 */
		FindSpacesByCreatorIds(user_ids: Array<string>, space_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, user_fields: Array<string> | null | undefined, topic_fields: Array<string> | null | undefined): Observable<Get2SpacesByCreatorIdsResponse> {
			return this.http.get<Get2SpacesByCreatorIdsResponse>(this.baseUri + '2/spaces/by/creator_ids?' + user_ids.map(z => `user_ids=${encodeURIComponent(z)}`).join('&') + '&' + space_fields?.map(z => `space.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + topic_fields?.map(z => `topic.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Search for Spaces
		 * Returns Spaces that match the provided query.
		 * Get 2/spaces/search
		 * @param {string} query The search query.
		 * @param {SearchSpacesState} state The state of Spaces to search for.
		 * @param {number} max_results The number of results to return.
		 * @param {Array<string>} space_fields A comma separated list of Space fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} topic_fields A comma separated list of Topic fields to display.
		 * @return {Get2SpacesSearchResponse} The request has succeeded.
		 */
		SearchSpaces(query: string, state: SearchSpacesState | null | undefined, max_results: number | null | undefined, space_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, user_fields: Array<string> | null | undefined, topic_fields: Array<string> | null | undefined): Observable<Get2SpacesSearchResponse> {
			return this.http.get<Get2SpacesSearchResponse>(this.baseUri + '2/spaces/search?query=' + (query == null ? '' : encodeURIComponent(query)) + '&state=' + state + '&max_results=' + max_results + '&' + space_fields?.map(z => `space.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + topic_fields?.map(z => `topic.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Space lookup by Space ID
		 * Returns a variety of information about the Space specified by the requested ID
		 * Get 2/spaces/{id}
		 * @param {string} id The ID of the Space to be retrieved.
		 * @param {Array<string>} space_fields A comma separated list of Space fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} topic_fields A comma separated list of Topic fields to display.
		 * @return {Get2SpacesIdResponse} The request has succeeded.
		 */
		FindSpaceById(id: string, space_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, user_fields: Array<string> | null | undefined, topic_fields: Array<string> | null | undefined): Observable<Get2SpacesIdResponse> {
			return this.http.get<Get2SpacesIdResponse>(this.baseUri + '2/spaces/' + (id == null ? '' : encodeURIComponent(id)) + '&' + space_fields?.map(z => `space.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + topic_fields?.map(z => `topic.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Retrieve the list of Users who purchased a ticket to the given space
		 * Retrieves the list of Users who purchased a ticket to the given space
		 * Get 2/spaces/{id}/buyers
		 * @param {string} id The ID of the Space to be retrieved.
		 * @param {string} pagination_token This parameter is used to get a specified 'page' of results.
		 * @param {number} max_results The maximum number of results.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @return {Get2SpacesIdBuyersResponse} The request has succeeded.
		 */
		SpaceBuyers(id: string, pagination_token: string | null | undefined, max_results: number | null | undefined, user_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, tweet_fields: Array<string> | null | undefined): Observable<Get2SpacesIdBuyersResponse> {
			return this.http.get<Get2SpacesIdBuyersResponse>(this.baseUri + '2/spaces/' + (id == null ? '' : encodeURIComponent(id)) + '/buyers&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&max_results=' + max_results + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Retrieve Tweets from a Space.
		 * Retrieves Tweets shared in the specified Space.
		 * Get 2/spaces/{id}/tweets
		 * @param {string} id The ID of the Space to be retrieved.
		 * @param {number} max_results The number of Tweets to fetch from the provided space. If not provided, the value will default to the maximum of 100.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} media_fields A comma separated list of Media fields to display.
		 * @param {Array<string>} poll_fields A comma separated list of Poll fields to display.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} place_fields A comma separated list of Place fields to display.
		 * @return {Get2SpacesIdTweetsResponse} The request has succeeded.
		 */
		SpaceTweets(id: string, max_results: number | null | undefined, tweet_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, media_fields: Array<string> | null | undefined, poll_fields: Array<string> | null | undefined, user_fields: Array<string> | null | undefined, place_fields: Array<string> | null | undefined): Observable<Get2SpacesIdTweetsResponse> {
			return this.http.get<Get2SpacesIdTweetsResponse>(this.baseUri + '2/spaces/' + (id == null ? '' : encodeURIComponent(id)) + '/tweets&max_results=' + max_results + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + media_fields?.map(z => `media.fields=${encodeURIComponent(z)}`).join('&') + '&' + poll_fields?.map(z => `poll.fields=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + place_fields?.map(z => `place.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Tweet lookup by Tweet IDs
		 * Returns a variety of information about the Tweet specified by the requested ID.
		 * Get 2/tweets
		 * @param {Array<string>} ids A comma separated list of Tweet IDs. Up to 100 are allowed in a single request.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} media_fields A comma separated list of Media fields to display.
		 * @param {Array<string>} poll_fields A comma separated list of Poll fields to display.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} place_fields A comma separated list of Place fields to display.
		 * @return {Get2TweetsResponse} The request has succeeded.
		 */
		FindTweetsById(ids: Array<string>, tweet_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, media_fields: Array<string> | null | undefined, poll_fields: Array<string> | null | undefined, user_fields: Array<string> | null | undefined, place_fields: Array<string> | null | undefined): Observable<Get2TweetsResponse> {
			return this.http.get<Get2TweetsResponse>(this.baseUri + '2/tweets?' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + media_fields?.map(z => `media.fields=${encodeURIComponent(z)}`).join('&') + '&' + poll_fields?.map(z => `poll.fields=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + place_fields?.map(z => `place.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Creation of a Tweet
		 * Causes the User to create a Tweet under the authorized account.
		 * Post 2/tweets
		 * @return {void} 
		 */
		CreateTweet(requestBody: TweetCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2/tweets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Tweets Compliance stream
		 * Streams 100% of compliance data for Tweets
		 * Get 2/tweets/compliance/stream
		 * @param {number} backfill_minutes The number of minutes of backfill requested.
		 * @param {number} partition The partition number.
		 * @param {Date} start_time YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweet Compliance events will be provided.
		 * @param {Date} end_time YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweet Compliance events will be provided.
		 * @return {TweetComplianceStreamResponse} The request has succeeded.
		 */
		GetTweetsComplianceStream(backfill_minutes: number | null | undefined, partition: number, start_time: Date | null | undefined, end_time: Date | null | undefined): Observable<TweetComplianceStreamResponse> {
			return this.http.get<TweetComplianceStreamResponse>(this.baseUri + '2/tweets/compliance/stream?backfill_minutes=' + backfill_minutes + '&partition=' + partition + '&start_time=' + start_time?.toISOString() + '&end_time=' + end_time?.toISOString(), {});
		}

		/**
		 * Full archive search counts
		 * Returns Tweet Counts that match a search query.
		 * Get 2/tweets/counts/all
		 * @param {string} query One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.
		 * @param {Date} start_time YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
		 * @param {Date} end_time YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).
		 * @param {string} since_id Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.
		 * @param {string} until_id Returns results with a Tweet ID less than (that is, older than) the specified ID.
		 * @param {string} next_token This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
		 * @param {string} pagination_token This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
		 * @param {TweetCountsFullArchiveSearchGranularity} granularity The granularity for the search counts results.
		 * @param {Array<string>} search_count_fields A comma separated list of SearchCount fields to display.
		 * @return {Get2TweetsCountsAllResponse} The request has succeeded.
		 */
		TweetCountsFullArchiveSearch(query: string, start_time: Date | null | undefined, end_time: Date | null | undefined, since_id: string | null | undefined, until_id: string | null | undefined, next_token: string | null | undefined, pagination_token: string | null | undefined, granularity: TweetCountsFullArchiveSearchGranularity | null | undefined, search_count_fields: Array<string> | null | undefined): Observable<Get2TweetsCountsAllResponse> {
			return this.http.get<Get2TweetsCountsAllResponse>(this.baseUri + '2/tweets/counts/all?query=' + (query == null ? '' : encodeURIComponent(query)) + '&start_time=' + start_time?.toISOString() + '&end_time=' + end_time?.toISOString() + '&since_id=' + (since_id == null ? '' : encodeURIComponent(since_id)) + '&until_id=' + (until_id == null ? '' : encodeURIComponent(until_id)) + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&granularity=' + granularity + '&' + search_count_fields?.map(z => `search_count.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Recent search counts
		 * Returns Tweet Counts from the last 7 days that match a search query.
		 * Get 2/tweets/counts/recent
		 * @param {string} query One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.
		 * @param {Date} start_time YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
		 * @param {Date} end_time YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).
		 * @param {string} since_id Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.
		 * @param {string} until_id Returns results with a Tweet ID less than (that is, older than) the specified ID.
		 * @param {string} next_token This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
		 * @param {string} pagination_token This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
		 * @param {TweetCountsFullArchiveSearchGranularity} granularity The granularity for the search counts results.
		 * @param {Array<string>} search_count_fields A comma separated list of SearchCount fields to display.
		 * @return {Get2TweetsCountsRecentResponse} The request has succeeded.
		 */
		TweetCountsRecentSearch(query: string, start_time: Date | null | undefined, end_time: Date | null | undefined, since_id: string | null | undefined, until_id: string | null | undefined, next_token: string | null | undefined, pagination_token: string | null | undefined, granularity: TweetCountsFullArchiveSearchGranularity | null | undefined, search_count_fields: Array<string> | null | undefined): Observable<Get2TweetsCountsRecentResponse> {
			return this.http.get<Get2TweetsCountsRecentResponse>(this.baseUri + '2/tweets/counts/recent?query=' + (query == null ? '' : encodeURIComponent(query)) + '&start_time=' + start_time?.toISOString() + '&end_time=' + end_time?.toISOString() + '&since_id=' + (since_id == null ? '' : encodeURIComponent(since_id)) + '&until_id=' + (until_id == null ? '' : encodeURIComponent(until_id)) + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&granularity=' + granularity + '&' + search_count_fields?.map(z => `search_count.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Firehose stream
		 * Streams 100% of public Tweets.
		 * Get 2/tweets/firehose/stream
		 * @param {number} backfill_minutes The number of minutes of backfill requested.
		 * @param {number} partition The partition number.
		 * @param {Date} start_time YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Tweets will be provided.
		 * @param {Date} end_time YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} media_fields A comma separated list of Media fields to display.
		 * @param {Array<string>} poll_fields A comma separated list of Poll fields to display.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} place_fields A comma separated list of Place fields to display.
		 * @return {StreamingTweetResponse} The request has succeeded.
		 */
		GetTweetsFirehoseStream(backfill_minutes: number | null | undefined, partition: number, start_time: Date | null | undefined, end_time: Date | null | undefined, tweet_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, media_fields: Array<string> | null | undefined, poll_fields: Array<string> | null | undefined, user_fields: Array<string> | null | undefined, place_fields: Array<string> | null | undefined): Observable<StreamingTweetResponse> {
			return this.http.get<StreamingTweetResponse>(this.baseUri + '2/tweets/firehose/stream?backfill_minutes=' + backfill_minutes + '&partition=' + partition + '&start_time=' + start_time?.toISOString() + '&end_time=' + end_time?.toISOString() + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + media_fields?.map(z => `media.fields=${encodeURIComponent(z)}`).join('&') + '&' + poll_fields?.map(z => `poll.fields=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + place_fields?.map(z => `place.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Tweets Label stream
		 * Streams 100% of labeling events applied to Tweets
		 * Get 2/tweets/label/stream
		 * @param {number} backfill_minutes The number of minutes of backfill requested.
		 * @param {Date} start_time YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweet labels will be provided.
		 * @param {Date} end_time YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the Tweet labels will be provided.
		 * @return {TweetLabelStreamResponse} The request has succeeded.
		 */
		GetTweetsLabelStream(backfill_minutes: number | null | undefined, start_time: Date | null | undefined, end_time: Date | null | undefined): Observable<TweetLabelStreamResponse> {
			return this.http.get<TweetLabelStreamResponse>(this.baseUri + '2/tweets/label/stream?backfill_minutes=' + backfill_minutes + '&start_time=' + start_time?.toISOString() + '&end_time=' + end_time?.toISOString(), {});
		}

		/**
		 * Sample stream
		 * Streams a deterministic 1% of public Tweets.
		 * Get 2/tweets/sample/stream
		 * @param {number} backfill_minutes The number of minutes of backfill requested.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} media_fields A comma separated list of Media fields to display.
		 * @param {Array<string>} poll_fields A comma separated list of Poll fields to display.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} place_fields A comma separated list of Place fields to display.
		 * @return {StreamingTweetResponse} The request has succeeded.
		 */
		SampleStream(backfill_minutes: number | null | undefined, tweet_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, media_fields: Array<string> | null | undefined, poll_fields: Array<string> | null | undefined, user_fields: Array<string> | null | undefined, place_fields: Array<string> | null | undefined): Observable<StreamingTweetResponse> {
			return this.http.get<StreamingTweetResponse>(this.baseUri + '2/tweets/sample/stream?backfill_minutes=' + backfill_minutes + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + media_fields?.map(z => `media.fields=${encodeURIComponent(z)}`).join('&') + '&' + poll_fields?.map(z => `poll.fields=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + place_fields?.map(z => `place.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Sample 10% stream
		 * Streams a deterministic 10% of public Tweets.
		 * Get 2/tweets/sample10/stream
		 * @param {number} backfill_minutes The number of minutes of backfill requested.
		 * @param {number} partition The partition number.
		 * @param {Date} start_time YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Tweets will be provided.
		 * @param {Date} end_time YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} media_fields A comma separated list of Media fields to display.
		 * @param {Array<string>} poll_fields A comma separated list of Poll fields to display.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} place_fields A comma separated list of Place fields to display.
		 * @return {Get2TweetsSample10StreamResponse} The request has succeeded.
		 */
		GetTweetsSample10Stream(backfill_minutes: number | null | undefined, partition: number, start_time: Date | null | undefined, end_time: Date | null | undefined, tweet_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, media_fields: Array<string> | null | undefined, poll_fields: Array<string> | null | undefined, user_fields: Array<string> | null | undefined, place_fields: Array<string> | null | undefined): Observable<Get2TweetsSample10StreamResponse> {
			return this.http.get<Get2TweetsSample10StreamResponse>(this.baseUri + '2/tweets/sample10/stream?backfill_minutes=' + backfill_minutes + '&partition=' + partition + '&start_time=' + start_time?.toISOString() + '&end_time=' + end_time?.toISOString() + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + media_fields?.map(z => `media.fields=${encodeURIComponent(z)}`).join('&') + '&' + poll_fields?.map(z => `poll.fields=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + place_fields?.map(z => `place.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Full-archive search
		 * Returns Tweets that match a search query.
		 * Get 2/tweets/search/all
		 * @param {string} query One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.
		 * @param {Date} start_time YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
		 * @param {Date} end_time YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).
		 * @param {string} since_id Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.
		 * @param {string} until_id Returns results with a Tweet ID less than (that is, older than) the specified ID.
		 * @param {number} max_results The maximum number of search results to be returned by a request.
		 * @param {string} next_token This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
		 * @param {string} pagination_token This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
		 * @param {TweetsFullarchiveSearchSort_order} sort_order This order in which to return results.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} media_fields A comma separated list of Media fields to display.
		 * @param {Array<string>} poll_fields A comma separated list of Poll fields to display.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} place_fields A comma separated list of Place fields to display.
		 * @return {Get2TweetsSearchAllResponse} The request has succeeded.
		 */
		TweetsFullarchiveSearch(query: string, start_time: Date | null | undefined, end_time: Date | null | undefined, since_id: string | null | undefined, until_id: string | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, pagination_token: string | null | undefined, sort_order: TweetsFullarchiveSearchSort_order | null | undefined, tweet_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, media_fields: Array<string> | null | undefined, poll_fields: Array<string> | null | undefined, user_fields: Array<string> | null | undefined, place_fields: Array<string> | null | undefined): Observable<Get2TweetsSearchAllResponse> {
			return this.http.get<Get2TweetsSearchAllResponse>(this.baseUri + '2/tweets/search/all?query=' + (query == null ? '' : encodeURIComponent(query)) + '&start_time=' + start_time?.toISOString() + '&end_time=' + end_time?.toISOString() + '&since_id=' + (since_id == null ? '' : encodeURIComponent(since_id)) + '&until_id=' + (until_id == null ? '' : encodeURIComponent(until_id)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&sort_order=' + sort_order + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + media_fields?.map(z => `media.fields=${encodeURIComponent(z)}`).join('&') + '&' + poll_fields?.map(z => `poll.fields=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + place_fields?.map(z => `place.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Recent search
		 * Returns Tweets from the last 7 days that match a search query.
		 * Get 2/tweets/search/recent
		 * @param {string} query One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.
		 * @param {Date} start_time YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
		 * @param {Date} end_time YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).
		 * @param {string} since_id Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.
		 * @param {string} until_id Returns results with a Tweet ID less than (that is, older than) the specified ID.
		 * @param {number} max_results The maximum number of search results to be returned by a request.
		 * @param {string} next_token This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
		 * @param {string} pagination_token This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
		 * @param {TweetsFullarchiveSearchSort_order} sort_order This order in which to return results.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} media_fields A comma separated list of Media fields to display.
		 * @param {Array<string>} poll_fields A comma separated list of Poll fields to display.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} place_fields A comma separated list of Place fields to display.
		 * @return {Get2TweetsSearchRecentResponse} The request has succeeded.
		 */
		TweetsRecentSearch(query: string, start_time: Date | null | undefined, end_time: Date | null | undefined, since_id: string | null | undefined, until_id: string | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, pagination_token: string | null | undefined, sort_order: TweetsFullarchiveSearchSort_order | null | undefined, tweet_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, media_fields: Array<string> | null | undefined, poll_fields: Array<string> | null | undefined, user_fields: Array<string> | null | undefined, place_fields: Array<string> | null | undefined): Observable<Get2TweetsSearchRecentResponse> {
			return this.http.get<Get2TweetsSearchRecentResponse>(this.baseUri + '2/tweets/search/recent?query=' + (query == null ? '' : encodeURIComponent(query)) + '&start_time=' + start_time?.toISOString() + '&end_time=' + end_time?.toISOString() + '&since_id=' + (since_id == null ? '' : encodeURIComponent(since_id)) + '&until_id=' + (until_id == null ? '' : encodeURIComponent(until_id)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&sort_order=' + sort_order + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + media_fields?.map(z => `media.fields=${encodeURIComponent(z)}`).join('&') + '&' + poll_fields?.map(z => `poll.fields=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + place_fields?.map(z => `place.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Filtered stream
		 * Streams Tweets matching the stream's active rule set.
		 * Get 2/tweets/search/stream
		 * @param {number} backfill_minutes The number of minutes of backfill requested.
		 * @param {Date} start_time YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided.
		 * @param {Date} end_time YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} media_fields A comma separated list of Media fields to display.
		 * @param {Array<string>} poll_fields A comma separated list of Poll fields to display.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} place_fields A comma separated list of Place fields to display.
		 * @return {FilteredStreamingTweetResponse} The request has succeeded.
		 */
		SearchStream(backfill_minutes: number | null | undefined, start_time: Date | null | undefined, end_time: Date | null | undefined, tweet_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, media_fields: Array<string> | null | undefined, poll_fields: Array<string> | null | undefined, user_fields: Array<string> | null | undefined, place_fields: Array<string> | null | undefined): Observable<FilteredStreamingTweetResponse> {
			return this.http.get<FilteredStreamingTweetResponse>(this.baseUri + '2/tweets/search/stream?backfill_minutes=' + backfill_minutes + '&start_time=' + start_time?.toISOString() + '&end_time=' + end_time?.toISOString() + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + media_fields?.map(z => `media.fields=${encodeURIComponent(z)}`).join('&') + '&' + poll_fields?.map(z => `poll.fields=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + place_fields?.map(z => `place.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Rules lookup
		 * Returns rules from a User's active rule set. Users can fetch all of their rules or a subset, specified by the provided rule ids.
		 * Get 2/tweets/search/stream/rules
		 * @param {Array<string>} ids A comma-separated list of Rule IDs.
		 * @param {number} max_results The maximum number of results.
		 * @param {string} pagination_token This value is populated by passing the 'next_token' returned in a request to paginate through results.
		 * @return {RulesLookupResponse} The request has succeeded.
		 */
		GetRules(ids: Array<string> | null | undefined, max_results: number | null | undefined, pagination_token: string | null | undefined): Observable<RulesLookupResponse> {
			return this.http.get<RulesLookupResponse>(this.baseUri + '2/tweets/search/stream/rules?' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&max_results=' + max_results + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)), {});
		}

		/**
		 * Add/Delete rules
		 * Add or delete rules from a User's active rule set. Users can provide unique, optionally tagged rules to add. Users can delete their entire rule set or a subset specified by rule ids or values.
		 * Post 2/tweets/search/stream/rules
		 * @param {boolean} dry_run Dry Run can be used with both the add and delete action, with the expected result given, but without actually taking any action in the system (meaning the end state will always be as it was when the request was submitted). This is particularly useful to validate rule changes.
		 * @return {AddOrDeleteRulesResponse} The request has succeeded.
		 */
		AddOrDeleteRules(dry_run: boolean | null | undefined, requestBody: AddOrDeleteRulesRequest): Observable<AddOrDeleteRulesResponse> {
			return this.http.post<AddOrDeleteRulesResponse>(this.baseUri + '2/tweets/search/stream/rules?dry_run=' + dry_run, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tweet delete by Tweet ID
		 * Delete specified Tweet (in the path) by ID.
		 * Delete 2/tweets/{id}
		 * @param {string} id The ID of the Tweet to be deleted.
		 * @return {TweetDeleteResponse} The request has succeeded.
		 */
		DeleteTweetById(id: string): Observable<TweetDeleteResponse> {
			return this.http.delete<TweetDeleteResponse>(this.baseUri + '2/tweets/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Tweet lookup by Tweet ID
		 * Returns a variety of information about the Tweet specified by the requested ID.
		 * Get 2/tweets/{id}
		 * @param {string} id A single Tweet ID.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} media_fields A comma separated list of Media fields to display.
		 * @param {Array<string>} poll_fields A comma separated list of Poll fields to display.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} place_fields A comma separated list of Place fields to display.
		 * @return {Get2TweetsIdResponse} The request has succeeded.
		 */
		FindTweetById(id: string, tweet_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, media_fields: Array<string> | null | undefined, poll_fields: Array<string> | null | undefined, user_fields: Array<string> | null | undefined, place_fields: Array<string> | null | undefined): Observable<Get2TweetsIdResponse> {
			return this.http.get<Get2TweetsIdResponse>(this.baseUri + '2/tweets/' + (id == null ? '' : encodeURIComponent(id)) + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + media_fields?.map(z => `media.fields=${encodeURIComponent(z)}`).join('&') + '&' + poll_fields?.map(z => `poll.fields=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + place_fields?.map(z => `place.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Returns User objects that have liked the provided Tweet ID
		 * Returns a list of Users that have liked the provided Tweet ID
		 * Get 2/tweets/{id}/liking_users
		 * @param {string} id A single Tweet ID.
		 * @param {number} max_results The maximum number of results.
		 * @param {string} pagination_token This parameter is used to get the next 'page' of results.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @return {Get2TweetsIdLikingUsersResponse} The request has succeeded.
		 */
		TweetsIdLikingUsers(id: string, max_results: number | null | undefined, pagination_token: string | null | undefined, user_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, tweet_fields: Array<string> | null | undefined): Observable<Get2TweetsIdLikingUsersResponse> {
			return this.http.get<Get2TweetsIdLikingUsersResponse>(this.baseUri + '2/tweets/' + (id == null ? '' : encodeURIComponent(id)) + '/liking_users&max_results=' + max_results + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Retrieve Tweets that quote a Tweet.
		 * Returns a variety of information about each Tweet that quotes the Tweet specified by the requested ID.
		 * Get 2/tweets/{id}/quote_tweets
		 * @param {string} id A single Tweet ID.
		 * @param {number} max_results The maximum number of results to be returned.
		 * @param {string} pagination_token This parameter is used to get a specified 'page' of results.
		 * @param {Array<string>} exclude The set of entities to exclude (e.g. 'replies' or 'retweets').
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} media_fields A comma separated list of Media fields to display.
		 * @param {Array<string>} poll_fields A comma separated list of Poll fields to display.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} place_fields A comma separated list of Place fields to display.
		 * @return {Get2TweetsIdQuoteTweetsResponse} The request has succeeded.
		 */
		FindTweetsThatQuoteATweet(id: string, max_results: number | null | undefined, pagination_token: string | null | undefined, exclude: Array<string> | null | undefined, tweet_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, media_fields: Array<string> | null | undefined, poll_fields: Array<string> | null | undefined, user_fields: Array<string> | null | undefined, place_fields: Array<string> | null | undefined): Observable<Get2TweetsIdQuoteTweetsResponse> {
			return this.http.get<Get2TweetsIdQuoteTweetsResponse>(this.baseUri + '2/tweets/' + (id == null ? '' : encodeURIComponent(id)) + '/quote_tweets&max_results=' + max_results + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + media_fields?.map(z => `media.fields=${encodeURIComponent(z)}`).join('&') + '&' + poll_fields?.map(z => `poll.fields=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + place_fields?.map(z => `place.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Returns User objects that have retweeted the provided Tweet ID
		 * Returns a list of Users that have retweeted the provided Tweet ID
		 * Get 2/tweets/{id}/retweeted_by
		 * @param {string} id A single Tweet ID.
		 * @param {number} max_results The maximum number of results.
		 * @param {string} pagination_token This parameter is used to get the next 'page' of results.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @return {Get2TweetsIdRetweetedByResponse} The request has succeeded.
		 */
		TweetsIdRetweetingUsers(id: string, max_results: number | null | undefined, pagination_token: string | null | undefined, user_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, tweet_fields: Array<string> | null | undefined): Observable<Get2TweetsIdRetweetedByResponse> {
			return this.http.get<Get2TweetsIdRetweetedByResponse>(this.baseUri + '2/tweets/' + (id == null ? '' : encodeURIComponent(id)) + '/retweeted_by&max_results=' + max_results + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Hide replies
		 * Hides or unhides a reply to an owned conversation.
		 * Put 2/tweets/{tweet_id}/hidden
		 * @param {string} tweet_id The ID of the reply that you want to hide or unhide.
		 * @return {TweetHideResponse} The request has succeeded.
		 */
		HideReplyById(tweet_id: string, requestBody: TweetHideRequest): Observable<TweetHideResponse> {
			return this.http.put<TweetHideResponse>(this.baseUri + '2/tweets/' + (tweet_id == null ? '' : encodeURIComponent(tweet_id)) + '/hidden', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * User lookup by IDs
		 * This endpoint returns information about Users. Specify Users by their ID.
		 * Get 2/users
		 * @param {Array<string>} ids A list of User IDs, comma-separated. You can specify up to 100 IDs.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @return {Get2UsersResponse} The request has succeeded.
		 */
		FindUsersById(ids: Array<string>, user_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, tweet_fields: Array<string> | null | undefined): Observable<Get2UsersResponse> {
			return this.http.get<Get2UsersResponse>(this.baseUri + '2/users?' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * User lookup by usernames
		 * This endpoint returns information about Users. Specify Users by their username.
		 * Get 2/users/by
		 * @param {Array<string>} usernames A list of usernames, comma-separated.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @return {Get2UsersByResponse} The request has succeeded.
		 */
		FindUsersByUsername(usernames: Array<string>, user_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, tweet_fields: Array<string> | null | undefined): Observable<Get2UsersByResponse> {
			return this.http.get<Get2UsersByResponse>(this.baseUri + '2/users/by?' + usernames.map(z => `usernames=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * User lookup by username
		 * This endpoint returns information about a User. Specify User by username.
		 * Get 2/users/by/username/{username}
		 * @param {string} username A username.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @return {Get2UsersByUsernameUsernameResponse} The request has succeeded.
		 */
		FindUserByUsername(username: string, user_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, tweet_fields: Array<string> | null | undefined): Observable<Get2UsersByUsernameUsernameResponse> {
			return this.http.get<Get2UsersByUsernameUsernameResponse>(this.baseUri + '2/users/by/username/' + (username == null ? '' : encodeURIComponent(username)) + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Users Compliance stream
		 * Streams 100% of compliance data for Users
		 * Get 2/users/compliance/stream
		 * @param {number} backfill_minutes The number of minutes of backfill requested.
		 * @param {number} partition The partition number.
		 * @param {Date} start_time YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the User Compliance events will be provided.
		 * @param {Date} end_time YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the User Compliance events will be provided.
		 * @return {UserComplianceStreamResponse} The request has succeeded.
		 */
		GetUsersComplianceStream(backfill_minutes: number | null | undefined, partition: number, start_time: Date | null | undefined, end_time: Date | null | undefined): Observable<UserComplianceStreamResponse> {
			return this.http.get<UserComplianceStreamResponse>(this.baseUri + '2/users/compliance/stream?backfill_minutes=' + backfill_minutes + '&partition=' + partition + '&start_time=' + start_time?.toISOString() + '&end_time=' + end_time?.toISOString(), {});
		}

		/**
		 * User lookup me
		 * This endpoint returns information about the requesting User.
		 * Get 2/users/me
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @return {Get2UsersMeResponse} The request has succeeded.
		 */
		FindMyUser(user_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, tweet_fields: Array<string> | null | undefined): Observable<Get2UsersMeResponse> {
			return this.http.get<Get2UsersMeResponse>(this.baseUri + '2/users/me?' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * User lookup by ID
		 * This endpoint returns information about a User. Specify User by ID.
		 * Get 2/users/{id}
		 * @param {string} id The ID of the User to lookup.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @return {Get2UsersIdResponse} The request has succeeded.
		 */
		FindUserById(id: string, user_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, tweet_fields: Array<string> | null | undefined): Observable<Get2UsersIdResponse> {
			return this.http.get<Get2UsersIdResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Returns User objects that are blocked by provided User ID
		 * Returns a list of Users that are blocked by the provided User ID
		 * Get 2/users/{id}/blocking
		 * @param {string} id The ID of the authenticated source User for whom to return results.
		 * @param {number} max_results The maximum number of results.
		 * @param {string} pagination_token This parameter is used to get a specified 'page' of results.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @return {Get2UsersIdBlockingResponse} The request has succeeded.
		 */
		UsersIdBlocking(id: string, max_results: number | null | undefined, pagination_token: string | null | undefined, user_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, tweet_fields: Array<string> | null | undefined): Observable<Get2UsersIdBlockingResponse> {
			return this.http.get<Get2UsersIdBlockingResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/blocking&max_results=' + max_results + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Block User by User ID
		 * Causes the User (in the path) to block the target User. The User (in the path) must match the User context authorizing the request
		 * Post 2/users/{id}/blocking
		 * @param {string} id The ID of the authenticated source User that is requesting to block the target User.
		 * @return {BlockUserMutationResponse} The request has succeeded.
		 */
		UsersIdBlock(id: string, requestBody: BlockUserRequest): Observable<BlockUserMutationResponse> {
			return this.http.post<BlockUserMutationResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/blocking', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Bookmarks by User
		 * Returns Tweet objects that have been bookmarked by the requesting User
		 * Get 2/users/{id}/bookmarks
		 * @param {string} id The ID of the authenticated source User for whom to return results.
		 * @param {number} max_results The maximum number of results.
		 * @param {string} pagination_token This parameter is used to get the next 'page' of results.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} media_fields A comma separated list of Media fields to display.
		 * @param {Array<string>} poll_fields A comma separated list of Poll fields to display.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} place_fields A comma separated list of Place fields to display.
		 * @return {Get2UsersIdBookmarksResponse} The request has succeeded.
		 */
		GetUsersIdBookmarks(id: string, max_results: number | null | undefined, pagination_token: string | null | undefined, tweet_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, media_fields: Array<string> | null | undefined, poll_fields: Array<string> | null | undefined, user_fields: Array<string> | null | undefined, place_fields: Array<string> | null | undefined): Observable<Get2UsersIdBookmarksResponse> {
			return this.http.get<Get2UsersIdBookmarksResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/bookmarks&max_results=' + max_results + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + media_fields?.map(z => `media.fields=${encodeURIComponent(z)}`).join('&') + '&' + poll_fields?.map(z => `poll.fields=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + place_fields?.map(z => `place.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Add Tweet to Bookmarks
		 * Adds a Tweet (ID in the body) to the requesting User's (in the path) bookmarks
		 * Post 2/users/{id}/bookmarks
		 * @param {string} id The ID of the authenticated source User for whom to add bookmarks.
		 * @return {BookmarkMutationResponse} The request has succeeded.
		 */
		PostUsersIdBookmarks(id: string, requestBody: BookmarkAddRequest): Observable<BookmarkMutationResponse> {
			return this.http.post<BookmarkMutationResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/bookmarks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove a bookmarked Tweet
		 * Removes a Tweet from the requesting User's bookmarked Tweets.
		 * Delete 2/users/{id}/bookmarks/{tweet_id}
		 * @param {string} id The ID of the authenticated source User whose bookmark is to be removed.
		 * @param {string} tweet_id The ID of the Tweet that the source User is removing from bookmarks.
		 * @return {BookmarkMutationResponse} The request has succeeded.
		 */
		UsersIdBookmarksDelete(id: string, tweet_id: string): Observable<BookmarkMutationResponse> {
			return this.http.delete<BookmarkMutationResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/bookmarks/' + (tweet_id == null ? '' : encodeURIComponent(tweet_id)), {});
		}

		/**
		 * Get User's Followed Lists
		 * Returns a User's followed Lists.
		 * Get 2/users/{id}/followed_lists
		 * @param {string} id The ID of the User to lookup.
		 * @param {number} max_results The maximum number of results.
		 * @param {string} pagination_token This parameter is used to get a specified 'page' of results.
		 * @param {Array<string>} list_fields A comma separated list of List fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @return {Get2UsersIdFollowedListsResponse} The request has succeeded.
		 */
		UserFollowedLists(id: string, max_results: number | null | undefined, pagination_token: string | null | undefined, list_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, user_fields: Array<string> | null | undefined): Observable<Get2UsersIdFollowedListsResponse> {
			return this.http.get<Get2UsersIdFollowedListsResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/followed_lists&max_results=' + max_results + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&' + list_fields?.map(z => `list.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Follow a List
		 * Causes a User to follow a List.
		 * Post 2/users/{id}/followed_lists
		 * @param {string} id The ID of the authenticated source User that will follow the List.
		 * @return {ListFollowedResponse} The request has succeeded.
		 */
		ListUserFollow(id: string, requestBody: ListFollowedRequest): Observable<ListFollowedResponse> {
			return this.http.post<ListFollowedResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/followed_lists', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unfollow a List
		 * Causes a User to unfollow a List.
		 * Delete 2/users/{id}/followed_lists/{list_id}
		 * @param {string} id The ID of the authenticated source User that will unfollow the List.
		 * @param {string} list_id The ID of the List to unfollow.
		 * @return {ListFollowedResponse} The request has succeeded.
		 */
		ListUserUnfollow(id: string, list_id: string): Observable<ListFollowedResponse> {
			return this.http.delete<ListFollowedResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/followed_lists/' + (list_id == null ? '' : encodeURIComponent(list_id)), {});
		}

		/**
		 * Followers by User ID
		 * Returns a list of Users who are followers of the specified User ID.
		 * Get 2/users/{id}/followers
		 * @param {string} id The ID of the User to lookup.
		 * @param {number} max_results The maximum number of results.
		 * @param {string} pagination_token This parameter is used to get a specified 'page' of results.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @return {Get2UsersIdFollowersResponse} The request has succeeded.
		 */
		UsersIdFollowers(id: string, max_results: number | null | undefined, pagination_token: string | null | undefined, user_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, tweet_fields: Array<string> | null | undefined): Observable<Get2UsersIdFollowersResponse> {
			return this.http.get<Get2UsersIdFollowersResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/followers&max_results=' + max_results + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Following by User ID
		 * Returns a list of Users that are being followed by the provided User ID
		 * Get 2/users/{id}/following
		 * @param {string} id The ID of the User to lookup.
		 * @param {number} max_results The maximum number of results.
		 * @param {string} pagination_token This parameter is used to get a specified 'page' of results.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @return {Get2UsersIdFollowingResponse} The request has succeeded.
		 */
		UsersIdFollowing(id: string, max_results: number | null | undefined, pagination_token: string | null | undefined, user_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, tweet_fields: Array<string> | null | undefined): Observable<Get2UsersIdFollowingResponse> {
			return this.http.get<Get2UsersIdFollowingResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/following&max_results=' + max_results + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Follow User
		 * Causes the User(in the path) to follow, or “request to follow” for protected Users, the target User. The User(in the path) must match the User context authorizing the request
		 * Post 2/users/{id}/following
		 * @param {string} id The ID of the authenticated source User that is requesting to follow the target User.
		 * @return {UsersFollowingCreateResponse} The request has succeeded.
		 */
		UsersIdFollow(id: string, requestBody: UsersFollowingCreateRequest): Observable<UsersFollowingCreateResponse> {
			return this.http.post<UsersFollowingCreateResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/following', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns Tweet objects liked by the provided User ID
		 * Returns a list of Tweets liked by the provided User ID
		 * Get 2/users/{id}/liked_tweets
		 * @param {string} id The ID of the User to lookup.
		 * @param {number} max_results The maximum number of results.
		 * @param {string} pagination_token This parameter is used to get the next 'page' of results.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} media_fields A comma separated list of Media fields to display.
		 * @param {Array<string>} poll_fields A comma separated list of Poll fields to display.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} place_fields A comma separated list of Place fields to display.
		 * @return {Get2UsersIdLikedTweetsResponse} The request has succeeded.
		 */
		UsersIdLikedTweets(id: string, max_results: number | null | undefined, pagination_token: string | null | undefined, tweet_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, media_fields: Array<string> | null | undefined, poll_fields: Array<string> | null | undefined, user_fields: Array<string> | null | undefined, place_fields: Array<string> | null | undefined): Observable<Get2UsersIdLikedTweetsResponse> {
			return this.http.get<Get2UsersIdLikedTweetsResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/liked_tweets&max_results=' + max_results + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + media_fields?.map(z => `media.fields=${encodeURIComponent(z)}`).join('&') + '&' + poll_fields?.map(z => `poll.fields=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + place_fields?.map(z => `place.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Causes the User (in the path) to like the specified Tweet
		 * Causes the User (in the path) to like the specified Tweet. The User in the path must match the User context authorizing the request.
		 * Post 2/users/{id}/likes
		 * @param {string} id The ID of the authenticated source User that is requesting to like the Tweet.
		 * @return {UsersLikesCreateResponse} The request has succeeded.
		 */
		UsersIdLike(id: string, requestBody: UsersLikesCreateRequest): Observable<UsersLikesCreateResponse> {
			return this.http.post<UsersLikesCreateResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/likes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Causes the User (in the path) to unlike the specified Tweet
		 * Causes the User (in the path) to unlike the specified Tweet. The User must match the User context authorizing the request
		 * Delete 2/users/{id}/likes/{tweet_id}
		 * @param {string} id The ID of the authenticated source User that is requesting to unlike the Tweet.
		 * @param {string} tweet_id The ID of the Tweet that the User is requesting to unlike.
		 * @return {UsersLikesDeleteResponse} The request has succeeded.
		 */
		UsersIdUnlike(id: string, tweet_id: string): Observable<UsersLikesDeleteResponse> {
			return this.http.delete<UsersLikesDeleteResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/likes/' + (tweet_id == null ? '' : encodeURIComponent(tweet_id)), {});
		}

		/**
		 * Get a User's List Memberships
		 * Get a User's List Memberships.
		 * Get 2/users/{id}/list_memberships
		 * @param {string} id The ID of the User to lookup.
		 * @param {number} max_results The maximum number of results.
		 * @param {string} pagination_token This parameter is used to get a specified 'page' of results.
		 * @param {Array<string>} list_fields A comma separated list of List fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @return {Get2UsersIdListMembershipsResponse} The request has succeeded.
		 */
		GetUserListMemberships(id: string, max_results: number | null | undefined, pagination_token: string | null | undefined, list_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, user_fields: Array<string> | null | undefined): Observable<Get2UsersIdListMembershipsResponse> {
			return this.http.get<Get2UsersIdListMembershipsResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/list_memberships&max_results=' + max_results + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&' + list_fields?.map(z => `list.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * User mention timeline by User ID
		 * Returns Tweet objects that mention username associated to the provided User ID
		 * Get 2/users/{id}/mentions
		 * @param {string} id The ID of the User to lookup.
		 * @param {string} since_id The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified.
		 * @param {string} until_id The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified.
		 * @param {number} max_results The maximum number of results.
		 * @param {string} pagination_token This parameter is used to get the next 'page' of results.
		 * @param {Date} start_time YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified.
		 * @param {Date} end_time YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} media_fields A comma separated list of Media fields to display.
		 * @param {Array<string>} poll_fields A comma separated list of Poll fields to display.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} place_fields A comma separated list of Place fields to display.
		 * @return {Get2UsersIdMentionsResponse} The request has succeeded.
		 */
		UsersIdMentions(id: string, since_id: string | null | undefined, until_id: string | null | undefined, max_results: number | null | undefined, pagination_token: string | null | undefined, start_time: Date | null | undefined, end_time: Date | null | undefined, tweet_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, media_fields: Array<string> | null | undefined, poll_fields: Array<string> | null | undefined, user_fields: Array<string> | null | undefined, place_fields: Array<string> | null | undefined): Observable<Get2UsersIdMentionsResponse> {
			return this.http.get<Get2UsersIdMentionsResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/mentions&since_id=' + (since_id == null ? '' : encodeURIComponent(since_id)) + '&until_id=' + (until_id == null ? '' : encodeURIComponent(until_id)) + '&max_results=' + max_results + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&start_time=' + start_time?.toISOString() + '&end_time=' + end_time?.toISOString() + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + media_fields?.map(z => `media.fields=${encodeURIComponent(z)}`).join('&') + '&' + poll_fields?.map(z => `poll.fields=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + place_fields?.map(z => `place.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Returns User objects that are muted by the provided User ID
		 * Returns a list of Users that are muted by the provided User ID
		 * Get 2/users/{id}/muting
		 * @param {string} id The ID of the authenticated source User for whom to return results.
		 * @param {number} max_results The maximum number of results.
		 * @param {string} pagination_token This parameter is used to get the next 'page' of results.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @return {Get2UsersIdMutingResponse} The request has succeeded.
		 */
		UsersIdMuting(id: string, max_results: number | null | undefined, pagination_token: string | null | undefined, user_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, tweet_fields: Array<string> | null | undefined): Observable<Get2UsersIdMutingResponse> {
			return this.http.get<Get2UsersIdMutingResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/muting&max_results=' + max_results + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Mute User by User ID.
		 * Causes the User (in the path) to mute the target User. The User (in the path) must match the User context authorizing the request.
		 * Post 2/users/{id}/muting
		 * @param {string} id The ID of the authenticated source User that is requesting to mute the target User.
		 * @return {MuteUserMutationResponse} The request has succeeded.
		 */
		UsersIdMute(id: string, requestBody: MuteUserRequest): Observable<MuteUserMutationResponse> {
			return this.http.post<MuteUserMutationResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/muting', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a User's Owned Lists.
		 * Get a User's Owned Lists.
		 * Get 2/users/{id}/owned_lists
		 * @param {string} id The ID of the User to lookup.
		 * @param {number} max_results The maximum number of results.
		 * @param {string} pagination_token This parameter is used to get a specified 'page' of results.
		 * @param {Array<string>} list_fields A comma separated list of List fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @return {Get2UsersIdOwnedListsResponse} The request has succeeded.
		 */
		ListUserOwnedLists(id: string, max_results: number | null | undefined, pagination_token: string | null | undefined, list_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, user_fields: Array<string> | null | undefined): Observable<Get2UsersIdOwnedListsResponse> {
			return this.http.get<Get2UsersIdOwnedListsResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/owned_lists&max_results=' + max_results + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&' + list_fields?.map(z => `list.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get a User's Pinned Lists
		 * Get a User's Pinned Lists.
		 * Get 2/users/{id}/pinned_lists
		 * @param {string} id The ID of the authenticated source User for whom to return results.
		 * @param {Array<string>} list_fields A comma separated list of List fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @return {Get2UsersIdPinnedListsResponse} The request has succeeded.
		 */
		ListUserPinnedLists(id: string, list_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, user_fields: Array<string> | null | undefined): Observable<Get2UsersIdPinnedListsResponse> {
			return this.http.get<Get2UsersIdPinnedListsResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/pinned_lists&' + list_fields?.map(z => `list.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Pin a List
		 * Causes a User to pin a List.
		 * Post 2/users/{id}/pinned_lists
		 * @param {string} id The ID of the authenticated source User that will pin the List.
		 * @return {ListPinnedResponse} The request has succeeded.
		 */
		ListUserPin(id: string, requestBody: ListPinnedRequest): Observable<ListPinnedResponse> {
			return this.http.post<ListPinnedResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/pinned_lists', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unpin a List
		 * Causes a User to remove a pinned List.
		 * Delete 2/users/{id}/pinned_lists/{list_id}
		 * @param {string} id The ID of the authenticated source User for whom to return results.
		 * @param {string} list_id The ID of the List to unpin.
		 * @return {ListUnpinResponse} The request has succeeded.
		 */
		ListUserUnpin(id: string, list_id: string): Observable<ListUnpinResponse> {
			return this.http.delete<ListUnpinResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/pinned_lists/' + (list_id == null ? '' : encodeURIComponent(list_id)), {});
		}

		/**
		 * Causes the User (in the path) to retweet the specified Tweet.
		 * Causes the User (in the path) to retweet the specified Tweet. The User in the path must match the User context authorizing the request.
		 * Post 2/users/{id}/retweets
		 * @param {string} id The ID of the authenticated source User that is requesting to retweet the Tweet.
		 * @return {UsersRetweetsCreateResponse} The request has succeeded.
		 */
		UsersIdRetweets(id: string, requestBody: UsersRetweetsCreateRequest): Observable<UsersRetweetsCreateResponse> {
			return this.http.post<UsersRetweetsCreateResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/retweets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Causes the User (in the path) to unretweet the specified Tweet
		 * Causes the User (in the path) to unretweet the specified Tweet. The User must match the User context authorizing the request
		 * Delete 2/users/{id}/retweets/{source_tweet_id}
		 * @param {string} id The ID of the authenticated source User that is requesting to retweet the Tweet.
		 * @param {string} source_tweet_id The ID of the Tweet that the User is requesting to unretweet.
		 * @return {UsersRetweetsDeleteResponse} The request has succeeded.
		 */
		UsersIdUnretweets(id: string, source_tweet_id: string): Observable<UsersRetweetsDeleteResponse> {
			return this.http.delete<UsersRetweetsDeleteResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/retweets/' + (source_tweet_id == null ? '' : encodeURIComponent(source_tweet_id)), {});
		}

		/**
		 * User home timeline by User ID
		 * Returns Tweet objects that appears in the provided User ID's home timeline
		 * Get 2/users/{id}/timelines/reverse_chronological
		 * @param {string} id The ID of the authenticated source User to list Reverse Chronological Timeline Tweets of.
		 * @param {string} since_id The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified.
		 * @param {string} until_id The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified.
		 * @param {number} max_results The maximum number of results.
		 * @param {string} pagination_token This parameter is used to get the next 'page' of results.
		 * @param {Array<string>} exclude The set of entities to exclude (e.g. 'replies' or 'retweets').
		 * @param {Date} start_time YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified.
		 * @param {Date} end_time YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} media_fields A comma separated list of Media fields to display.
		 * @param {Array<string>} poll_fields A comma separated list of Poll fields to display.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} place_fields A comma separated list of Place fields to display.
		 * @return {Get2UsersIdTimelinesReverseChronologicalResponse} The request has succeeded.
		 */
		UsersIdTimeline(id: string, since_id: string | null | undefined, until_id: string | null | undefined, max_results: number | null | undefined, pagination_token: string | null | undefined, exclude: Array<string> | null | undefined, start_time: Date | null | undefined, end_time: Date | null | undefined, tweet_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, media_fields: Array<string> | null | undefined, poll_fields: Array<string> | null | undefined, user_fields: Array<string> | null | undefined, place_fields: Array<string> | null | undefined): Observable<Get2UsersIdTimelinesReverseChronologicalResponse> {
			return this.http.get<Get2UsersIdTimelinesReverseChronologicalResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/timelines/reverse_chronological&since_id=' + (since_id == null ? '' : encodeURIComponent(since_id)) + '&until_id=' + (until_id == null ? '' : encodeURIComponent(until_id)) + '&max_results=' + max_results + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&start_time=' + start_time?.toISOString() + '&end_time=' + end_time?.toISOString() + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + media_fields?.map(z => `media.fields=${encodeURIComponent(z)}`).join('&') + '&' + poll_fields?.map(z => `poll.fields=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + place_fields?.map(z => `place.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * User Tweets timeline by User ID
		 * Returns a list of Tweets authored by the provided User ID
		 * Get 2/users/{id}/tweets
		 * @param {string} id The ID of the User to lookup.
		 * @param {string} since_id The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified.
		 * @param {string} until_id The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified.
		 * @param {number} max_results The maximum number of results.
		 * @param {string} pagination_token This parameter is used to get the next 'page' of results.
		 * @param {Array<string>} exclude The set of entities to exclude (e.g. 'replies' or 'retweets').
		 * @param {Date} start_time YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified.
		 * @param {Date} end_time YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified.
		 * @param {Array<string>} tweet_fields A comma separated list of Tweet fields to display.
		 * @param {Array<string>} expansions A comma separated list of fields to expand.
		 * @param {Array<string>} media_fields A comma separated list of Media fields to display.
		 * @param {Array<string>} poll_fields A comma separated list of Poll fields to display.
		 * @param {Array<string>} user_fields A comma separated list of User fields to display.
		 * @param {Array<string>} place_fields A comma separated list of Place fields to display.
		 * @return {Get2UsersIdTweetsResponse} The request has succeeded.
		 */
		UsersIdTweets(id: string, since_id: string | null | undefined, until_id: string | null | undefined, max_results: number | null | undefined, pagination_token: string | null | undefined, exclude: Array<string> | null | undefined, start_time: Date | null | undefined, end_time: Date | null | undefined, tweet_fields: Array<string> | null | undefined, expansions: Array<string> | null | undefined, media_fields: Array<string> | null | undefined, poll_fields: Array<string> | null | undefined, user_fields: Array<string> | null | undefined, place_fields: Array<string> | null | undefined): Observable<Get2UsersIdTweetsResponse> {
			return this.http.get<Get2UsersIdTweetsResponse>(this.baseUri + '2/users/' + (id == null ? '' : encodeURIComponent(id)) + '/tweets&since_id=' + (since_id == null ? '' : encodeURIComponent(since_id)) + '&until_id=' + (until_id == null ? '' : encodeURIComponent(until_id)) + '&max_results=' + max_results + '&pagination_token=' + (pagination_token == null ? '' : encodeURIComponent(pagination_token)) + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&start_time=' + start_time?.toISOString() + '&end_time=' + end_time?.toISOString() + '&' + tweet_fields?.map(z => `tweet.fields=${encodeURIComponent(z)}`).join('&') + '&' + expansions?.map(z => `expansions=${encodeURIComponent(z)}`).join('&') + '&' + media_fields?.map(z => `media.fields=${encodeURIComponent(z)}`).join('&') + '&' + poll_fields?.map(z => `poll.fields=${encodeURIComponent(z)}`).join('&') + '&' + user_fields?.map(z => `user.fields=${encodeURIComponent(z)}`).join('&') + '&' + place_fields?.map(z => `place.fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Unblock User by User ID
		 * Causes the source User to unblock the target User. The source User must match the User context authorizing the request
		 * Delete 2/users/{source_user_id}/blocking/{target_user_id}
		 * @param {string} source_user_id The ID of the authenticated source User that is requesting to unblock the target User.
		 * @param {string} target_user_id The ID of the User that the source User is requesting to unblock.
		 * @return {BlockUserMutationResponse} The request has succeeded.
		 */
		UsersIdUnblock(source_user_id: string, target_user_id: string): Observable<BlockUserMutationResponse> {
			return this.http.delete<BlockUserMutationResponse>(this.baseUri + '2/users/' + (source_user_id == null ? '' : encodeURIComponent(source_user_id)) + '/blocking/' + (target_user_id == null ? '' : encodeURIComponent(target_user_id)), {});
		}

		/**
		 * Unfollow User
		 * Causes the source User to unfollow the target User. The source User must match the User context authorizing the request
		 * Delete 2/users/{source_user_id}/following/{target_user_id}
		 * @param {string} source_user_id The ID of the authenticated source User that is requesting to unfollow the target User.
		 * @param {string} target_user_id The ID of the User that the source User is requesting to unfollow.
		 * @return {UsersFollowingDeleteResponse} The request has succeeded.
		 */
		UsersIdUnfollow(source_user_id: string, target_user_id: string): Observable<UsersFollowingDeleteResponse> {
			return this.http.delete<UsersFollowingDeleteResponse>(this.baseUri + '2/users/' + (source_user_id == null ? '' : encodeURIComponent(source_user_id)) + '/following/' + (target_user_id == null ? '' : encodeURIComponent(target_user_id)), {});
		}

		/**
		 * Unmute User by User ID
		 * Causes the source User to unmute the target User. The source User must match the User context authorizing the request
		 * Delete 2/users/{source_user_id}/muting/{target_user_id}
		 * @param {string} source_user_id The ID of the authenticated source User that is requesting to unmute the target User.
		 * @param {string} target_user_id The ID of the User that the source User is requesting to unmute.
		 * @return {MuteUserMutationResponse} The request has succeeded.
		 */
		UsersIdUnmute(source_user_id: string, target_user_id: string): Observable<MuteUserMutationResponse> {
			return this.http.delete<MuteUserMutationResponse>(this.baseUri + '2/users/' + (source_user_id == null ? '' : encodeURIComponent(source_user_id)) + '/muting/' + (target_user_id == null ? '' : encodeURIComponent(target_user_id)), {});
		}
	}

	export enum ListBatchComplianceJobsStatus { created = 'created', in_progress = 'in_progress', failed = 'failed', complete = 'complete' }

	export enum SearchSpacesState { live = 'live', scheduled = 'scheduled', all = 'all' }

	export enum TweetCountsFullArchiveSearchGranularity { minute = 'minute', hour = 'hour', day = 'day' }

	export enum TweetsFullarchiveSearchSort_order { recency = 'recency', relevancy = 'relevancy' }

}

