import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchInputCallbackCompletionBatchRequest {

		/** Required */
		inputs: Array<CallbackCompletionBatchRequest>;
	}
	export interface BatchInputCallbackCompletionBatchRequestFormProperties {
	}
	export function CreateBatchInputCallbackCompletionBatchRequestFormGroup() {
		return new FormGroup<BatchInputCallbackCompletionBatchRequestFormProperties>({
		});

	}

	export interface CallbackCompletionBatchRequest {

		/** Required */
		callbackId: string;

		/** Required */
		outputFields: {[id: string]: string };
	}
	export interface CallbackCompletionBatchRequestFormProperties {

		/** Required */
		callbackId: FormControl<string | null | undefined>,

		/** Required */
		outputFields: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCallbackCompletionBatchRequestFormGroup() {
		return new FormGroup<CallbackCompletionBatchRequestFormProperties>({
			callbackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			outputFields: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CallbackCompletionRequest {

		/** Required */
		outputFields: {[id: string]: string };
	}
	export interface CallbackCompletionRequestFormProperties {

		/** Required */
		outputFields: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCallbackCompletionRequestFormGroup() {
		return new FormGroup<CallbackCompletionRequestFormProperties>({
			outputFields: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CollectionResponsePublicActionDefinitionForwardPaging {
		paging?: ForwardPaging;

		/** Required */
		results: Array<PublicActionDefinition>;
	}
	export interface CollectionResponsePublicActionDefinitionForwardPagingFormProperties {
	}
	export function CreateCollectionResponsePublicActionDefinitionForwardPagingFormGroup() {
		return new FormGroup<CollectionResponsePublicActionDefinitionForwardPagingFormProperties>({
		});

	}

	export interface ForwardPaging {
		next?: NextPage;
	}
	export interface ForwardPagingFormProperties {
	}
	export function CreateForwardPagingFormGroup() {
		return new FormGroup<ForwardPagingFormProperties>({
		});

	}

	export interface NextPage {

		/** Required */
		after: string;
		link?: string | null;
	}
	export interface NextPageFormProperties {

		/** Required */
		after: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
	}
	export function CreateNextPageFormGroup() {
		return new FormGroup<NextPageFormProperties>({
			after: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PublicActionDefinition {

		/** Required */
		actionUrl: string;
		archivedAt?: number | null;
		executionRules?: Array<PublicExecutionTranslationRule>;

		/** Required */
		functions: Array<PublicActionFunctionIdentifier>;

		/** Required */
		id: string;
		inputFieldDependencies?: Array<string>;

		/** Required */
		inputFields: Array<InputFieldDefinition>;

		/** Required */
		labels: {[id: string]: PublicActionLabels };
		objectRequestOptions?: PublicObjectRequestOptions;

		/** Required */
		objectTypes: Array<string>;
		outputFields?: Array<OutputFieldDefinition>;

		/** Required */
		published: boolean;

		/** Required */
		revisionId: string;
	}
	export interface PublicActionDefinitionFormProperties {

		/** Required */
		actionUrl: FormControl<string | null | undefined>,
		archivedAt: FormControl<number | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		labels: FormControl<{[id: string]: PublicActionLabels } | null | undefined>,

		/** Required */
		published: FormControl<boolean | null | undefined>,

		/** Required */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreatePublicActionDefinitionFormGroup() {
		return new FormGroup<PublicActionDefinitionFormProperties>({
			actionUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			archivedAt: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: PublicActionLabels } | null | undefined>(undefined, [Validators.required]),
			published: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			revisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PublicExecutionTranslationRule {

		/** Required */
		conditions: {[id: string]: any };

		/** Required */
		labelName: string;
	}
	export interface PublicExecutionTranslationRuleFormProperties {

		/** Required */
		conditions: FormControl<{[id: string]: any } | null | undefined>,

		/** Required */
		labelName: FormControl<string | null | undefined>,
	}
	export function CreatePublicExecutionTranslationRuleFormGroup() {
		return new FormGroup<PublicExecutionTranslationRuleFormProperties>({
			conditions: new FormControl<{[id: string]: any } | null | undefined>(undefined, [Validators.required]),
			labelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PublicActionFunctionIdentifier {

		/** Required */
		functionType: PublicActionFunctionIdentifierFunctionType;
		id?: string | null;
	}
	export interface PublicActionFunctionIdentifierFormProperties {

		/** Required */
		functionType: FormControl<PublicActionFunctionIdentifierFunctionType | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreatePublicActionFunctionIdentifierFormGroup() {
		return new FormGroup<PublicActionFunctionIdentifierFormProperties>({
			functionType: new FormControl<PublicActionFunctionIdentifierFunctionType | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PublicActionFunctionIdentifierFunctionType { PRE_ACTION_EXECUTION = 'PRE_ACTION_EXECUTION', PRE_FETCH_OPTIONS = 'PRE_FETCH_OPTIONS', POST_FETCH_OPTIONS = 'POST_FETCH_OPTIONS', POST_ACTION_EXECUTION = 'POST_ACTION_EXECUTION' }

	export interface InputFieldDefinition {
		automationFieldType?: string | null;

		/** Required */
		isRequired: boolean;
		supportedValueTypes?: Array<string>;

		/** Required */
		typeDefinition: FieldTypeDefinition;
	}
	export interface InputFieldDefinitionFormProperties {
		automationFieldType: FormControl<string | null | undefined>,

		/** Required */
		isRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateInputFieldDefinitionFormGroup() {
		return new FormGroup<InputFieldDefinitionFormProperties>({
			automationFieldType: new FormControl<string | null | undefined>(undefined),
			isRequired: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FieldTypeDefinition {
		description?: string | null;

		/** Required */
		externalOptions: boolean;
		externalOptionsReferenceType?: string | null;
		fieldType?: FieldTypeDefinitionFieldType | null;
		helpText?: string | null;
		label?: string | null;

		/** Required */
		name: string;

		/** Required */
		options: Array<Option>;
		optionsUrl?: string | null;
		referencedObjectType?: FieldTypeDefinitionReferencedObjectType | null;

		/** Required */
		type: FieldTypeDefinitionType;
	}
	export interface FieldTypeDefinitionFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		externalOptions: FormControl<boolean | null | undefined>,
		externalOptionsReferenceType: FormControl<string | null | undefined>,
		fieldType: FormControl<FieldTypeDefinitionFieldType | null | undefined>,
		helpText: FormControl<string | null | undefined>,
		label: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		optionsUrl: FormControl<string | null | undefined>,
		referencedObjectType: FormControl<FieldTypeDefinitionReferencedObjectType | null | undefined>,

		/** Required */
		type: FormControl<FieldTypeDefinitionType | null | undefined>,
	}
	export function CreateFieldTypeDefinitionFormGroup() {
		return new FormGroup<FieldTypeDefinitionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			externalOptions: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			externalOptionsReferenceType: new FormControl<string | null | undefined>(undefined),
			fieldType: new FormControl<FieldTypeDefinitionFieldType | null | undefined>(undefined),
			helpText: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			optionsUrl: new FormControl<string | null | undefined>(undefined),
			referencedObjectType: new FormControl<FieldTypeDefinitionReferencedObjectType | null | undefined>(undefined),
			type: new FormControl<FieldTypeDefinitionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FieldTypeDefinitionFieldType { booleancheckbox = 'booleancheckbox', checkbox = 'checkbox', date = 'date', file = 'file', number = 'number', phonenumber = 'phonenumber', radio = 'radio', select = 'select', text = 'text', textarea = 'textarea', calculation_equation = 'calculation_equation', calculation_rollup = 'calculation_rollup', calculation_score = 'calculation_score', calculation_read_time = 'calculation_read_time', unknown = 'unknown', html = 'html' }

	export interface Option {

		/** Required */
		description: string;

		/** Required */
		displayOrder: number;

		/** Required */
		doubleData: number;

		/** Required */
		hidden: boolean;

		/** Required */
		label: string;

		/** Required */
		readOnly: boolean;

		/** Required */
		value: string;
	}
	export interface OptionFormProperties {

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		displayOrder: FormControl<number | null | undefined>,

		/** Required */
		doubleData: FormControl<number | null | undefined>,

		/** Required */
		hidden: FormControl<boolean | null | undefined>,

		/** Required */
		label: FormControl<string | null | undefined>,

		/** Required */
		readOnly: FormControl<boolean | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateOptionFormGroup() {
		return new FormGroup<OptionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayOrder: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			doubleData: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			hidden: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			readOnly: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FieldTypeDefinitionReferencedObjectType { CONTACT = 'CONTACT', COMPANY = 'COMPANY', DEAL = 'DEAL', ENGAGEMENT = 'ENGAGEMENT', TICKET = 'TICKET', OWNER = 'OWNER', PRODUCT = 'PRODUCT', LINE_ITEM = 'LINE_ITEM', BET_DELIVERABLE_SERVICE = 'BET_DELIVERABLE_SERVICE', CONTENT = 'CONTENT', CONVERSATION = 'CONVERSATION', BET_ALERT = 'BET_ALERT', PORTAL = 'PORTAL', QUOTE = 'QUOTE', FORM_SUBMISSION_INBOUNDDB = 'FORM_SUBMISSION_INBOUNDDB', QUOTA = 'QUOTA', UNSUBSCRIBE = 'UNSUBSCRIBE', COMMUNICATION = 'COMMUNICATION', FEEDBACK_SUBMISSION = 'FEEDBACK_SUBMISSION', ATTRIBUTION = 'ATTRIBUTION', SALESFORCE_SYNC_ERROR = 'SALESFORCE_SYNC_ERROR', RESTORABLE_CRM_OBJECT = 'RESTORABLE_CRM_OBJECT', HUB = 'HUB', LANDING_PAGE = 'LANDING_PAGE', PRODUCT_OR_FOLDER = 'PRODUCT_OR_FOLDER', TASK = 'TASK', FORM = 'FORM', MARKETING_EMAIL = 'MARKETING_EMAIL', AD_ACCOUNT = 'AD_ACCOUNT', AD_CAMPAIGN = 'AD_CAMPAIGN', AD_GROUP = 'AD_GROUP', AD = 'AD', KEYWORD = 'KEYWORD', CAMPAIGN = 'CAMPAIGN', SOCIAL_CHANNEL = 'SOCIAL_CHANNEL', SOCIAL_POST = 'SOCIAL_POST', SITE_PAGE = 'SITE_PAGE', BLOG_POST = 'BLOG_POST', IMPORT = 'IMPORT', EXPORT = 'EXPORT', CTA = 'CTA', TASK_TEMPLATE = 'TASK_TEMPLATE', AUTOMATION_PLATFORM_FLOW = 'AUTOMATION_PLATFORM_FLOW', OBJECT_LIST = 'OBJECT_LIST', NOTE = 'NOTE', MEETING_EVENT = 'MEETING_EVENT', CALL = 'CALL', EMAIL = 'EMAIL', PUBLISHING_TASK = 'PUBLISHING_TASK', CONVERSATION_SESSION = 'CONVERSATION_SESSION', CONTACT_CREATE_ATTRIBUTION = 'CONTACT_CREATE_ATTRIBUTION', INVOICE = 'INVOICE', MARKETING_EVENT = 'MARKETING_EVENT', CONVERSATION_INBOX = 'CONVERSATION_INBOX', CHATFLOW = 'CHATFLOW', MEDIA_BRIDGE = 'MEDIA_BRIDGE', SEQUENCE = 'SEQUENCE', SEQUENCE_STEP = 'SEQUENCE_STEP', FORECAST = 'FORECAST', SNIPPET = 'SNIPPET', TEMPLATE = 'TEMPLATE', DEAL_CREATE_ATTRIBUTION = 'DEAL_CREATE_ATTRIBUTION', QUOTE_TEMPLATE = 'QUOTE_TEMPLATE', QUOTE_MODULE = 'QUOTE_MODULE', QUOTE_MODULE_FIELD = 'QUOTE_MODULE_FIELD', QUOTE_FIELD = 'QUOTE_FIELD', SEQUENCE_ENROLLMENT = 'SEQUENCE_ENROLLMENT', SUBSCRIPTION = 'SUBSCRIPTION', ACCEPTANCE_TEST = 'ACCEPTANCE_TEST', SOCIAL_BROADCAST = 'SOCIAL_BROADCAST', DEAL_SPLIT = 'DEAL_SPLIT', DEAL_REGISTRATION = 'DEAL_REGISTRATION', GOAL_TARGET = 'GOAL_TARGET', GOAL_TARGET_GROUP = 'GOAL_TARGET_GROUP', PORTAL_OBJECT_SYNC_MESSAGE = 'PORTAL_OBJECT_SYNC_MESSAGE', FILE_MANAGER_FILE = 'FILE_MANAGER_FILE', FILE_MANAGER_FOLDER = 'FILE_MANAGER_FOLDER', SEQUENCE_STEP_ENROLLMENT = 'SEQUENCE_STEP_ENROLLMENT', APPROVAL = 'APPROVAL', APPROVAL_STEP = 'APPROVAL_STEP', CTA_VARIANT = 'CTA_VARIANT', SALES_DOCUMENT = 'SALES_DOCUMENT', DISCOUNT = 'DISCOUNT', FEE = 'FEE', TAX = 'TAX', MARKETING_CALENDAR = 'MARKETING_CALENDAR', PERMISSIONS_TESTING = 'PERMISSIONS_TESTING', PRIVACY_SCANNER_COOKIE = 'PRIVACY_SCANNER_COOKIE', DATA_SYNC_STATE = 'DATA_SYNC_STATE', WEB_INTERACTIVE = 'WEB_INTERACTIVE', PLAYBOOK = 'PLAYBOOK', FOLDER = 'FOLDER', PLAYBOOK_QUESTION = 'PLAYBOOK_QUESTION', PLAYBOOK_SUBMISSION = 'PLAYBOOK_SUBMISSION', PLAYBOOK_SUBMISSION_ANSWER = 'PLAYBOOK_SUBMISSION_ANSWER', COMMERCE_PAYMENT = 'COMMERCE_PAYMENT', GSC_PROPERTY = 'GSC_PROPERTY', SOX_PROTECTED_DUMMY_TYPE = 'SOX_PROTECTED_DUMMY_TYPE', BLOG_LISTING_PAGE = 'BLOG_LISTING_PAGE', QUARANTINED_SUBMISSION = 'QUARANTINED_SUBMISSION', PAYMENT_SCHEDULE = 'PAYMENT_SCHEDULE', PAYMENT_SCHEDULE_INSTALLMENT = 'PAYMENT_SCHEDULE_INSTALLMENT', MARKETING_CAMPAIGN_UTM = 'MARKETING_CAMPAIGN_UTM', DISCOUNT_TEMPLATE = 'DISCOUNT_TEMPLATE', DISCOUNT_CODE = 'DISCOUNT_CODE', FEEDBACK_SURVEY = 'FEEDBACK_SURVEY', CMS_URL = 'CMS_URL', SALES_TASK = 'SALES_TASK', SALES_WORKLOAD = 'SALES_WORKLOAD', USER = 'USER', POSTAL_MAIL = 'POSTAL_MAIL', SCHEMAS_BACKEND_TEST = 'SCHEMAS_BACKEND_TEST', PAYMENT_LINK = 'PAYMENT_LINK', SUBMISSION_TAG = 'SUBMISSION_TAG', CAMPAIGN_STEP = 'CAMPAIGN_STEP', SCHEDULING_PAGE = 'SCHEDULING_PAGE', SOX_PROTECTED_TEST_TYPE = 'SOX_PROTECTED_TEST_TYPE', ORDER = 'ORDER', MARKETING_SMS = 'MARKETING_SMS', PARTNER_ACCOUNT = 'PARTNER_ACCOUNT', CAMPAIGN_TEMPLATE = 'CAMPAIGN_TEMPLATE', CAMPAIGN_TEMPLATE_STEP = 'CAMPAIGN_TEMPLATE_STEP', PLAYLIST = 'PLAYLIST', CLIP = 'CLIP', CAMPAIGN_BUDGET_ITEM = 'CAMPAIGN_BUDGET_ITEM', CAMPAIGN_SPEND_ITEM = 'CAMPAIGN_SPEND_ITEM', MIC = 'MIC', CONTENT_AUDIT = 'CONTENT_AUDIT', CONTENT_AUDIT_PAGE = 'CONTENT_AUDIT_PAGE', PLAYLIST_FOLDER = 'PLAYLIST_FOLDER', LEAD = 'LEAD', ABANDONED_CART = 'ABANDONED_CART', EXTERNAL_WEB_URL = 'EXTERNAL_WEB_URL', VIEW = 'VIEW', VIEW_BLOCK = 'VIEW_BLOCK', ROSTER = 'ROSTER', CART = 'CART', AUTOMATION_PLATFORM_FLOW_ACTION = 'AUTOMATION_PLATFORM_FLOW_ACTION', SOCIAL_PROFILE = 'SOCIAL_PROFILE', PARTNER_CLIENT = 'PARTNER_CLIENT', ROSTER_MEMBER = 'ROSTER_MEMBER', MARKETING_EVENT_ATTENDANCE = 'MARKETING_EVENT_ATTENDANCE', ALL_PAGES = 'ALL_PAGES', AI_FORECAST = 'AI_FORECAST', CRM_PIPELINES_DUMMY_TYPE = 'CRM_PIPELINES_DUMMY_TYPE', KNOWLEDGE_ARTICLE = 'KNOWLEDGE_ARTICLE', PROPERTY_INFO = 'PROPERTY_INFO', DATA_PRIVACY_CONSENT = 'DATA_PRIVACY_CONSENT', UNKNOWN = 'UNKNOWN' }

	export enum FieldTypeDefinitionType { string = 'string', number = 'number', bool = 'bool', datetime = 'datetime', enumeration = 'enumeration', date = 'date', phone_number = 'phone_number', currency_number = 'currency_number', json = 'json', object_coordinates = 'object_coordinates' }

	export interface PublicActionLabels {
		actionCardContent?: string | null;
		actionDescription?: string | null;

		/** Required */
		actionName: string;
		appDisplayName?: string | null;
		executionRules?: {[id: string]: string };
		inputFieldDescriptions?: {[id: string]: string };
		inputFieldLabels?: {[id: string]: string };
		inputFieldOptionLabels?: {[id: string]: any };
		outputFieldLabels?: {[id: string]: string };
	}
	export interface PublicActionLabelsFormProperties {
		actionCardContent: FormControl<string | null | undefined>,
		actionDescription: FormControl<string | null | undefined>,

		/** Required */
		actionName: FormControl<string | null | undefined>,
		appDisplayName: FormControl<string | null | undefined>,
		executionRules: FormControl<{[id: string]: string } | null | undefined>,
		inputFieldDescriptions: FormControl<{[id: string]: string } | null | undefined>,
		inputFieldLabels: FormControl<{[id: string]: string } | null | undefined>,
		inputFieldOptionLabels: FormControl<{[id: string]: any } | null | undefined>,
		outputFieldLabels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePublicActionLabelsFormGroup() {
		return new FormGroup<PublicActionLabelsFormProperties>({
			actionCardContent: new FormControl<string | null | undefined>(undefined),
			actionDescription: new FormControl<string | null | undefined>(undefined),
			actionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appDisplayName: new FormControl<string | null | undefined>(undefined),
			executionRules: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			inputFieldDescriptions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			inputFieldLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			inputFieldOptionLabels: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			outputFieldLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface PublicObjectRequestOptions {

		/** Required */
		properties: Array<string>;
	}
	export interface PublicObjectRequestOptionsFormProperties {
	}
	export function CreatePublicObjectRequestOptionsFormGroup() {
		return new FormGroup<PublicObjectRequestOptionsFormProperties>({
		});

	}

	export interface OutputFieldDefinition {

		/** Required */
		typeDefinition: FieldTypeDefinition;
	}
	export interface OutputFieldDefinitionFormProperties {
	}
	export function CreateOutputFieldDefinitionFormGroup() {
		return new FormGroup<OutputFieldDefinitionFormProperties>({
		});

	}

	export interface CollectionResponsePublicActionFunctionIdentifierNoPaging {

		/** Required */
		results: Array<PublicActionFunctionIdentifier>;
	}
	export interface CollectionResponsePublicActionFunctionIdentifierNoPagingFormProperties {
	}
	export function CreateCollectionResponsePublicActionFunctionIdentifierNoPagingFormGroup() {
		return new FormGroup<CollectionResponsePublicActionFunctionIdentifierNoPagingFormProperties>({
		});

	}

	export interface CollectionResponsePublicActionRevisionForwardPaging {
		paging?: ForwardPaging;

		/** Required */
		results: Array<PublicActionRevision>;
	}
	export interface CollectionResponsePublicActionRevisionForwardPagingFormProperties {
	}
	export function CreateCollectionResponsePublicActionRevisionForwardPagingFormGroup() {
		return new FormGroup<CollectionResponsePublicActionRevisionForwardPagingFormProperties>({
		});

	}

	export interface PublicActionRevision {

		/** Required */
		createdAt: Date;

		/** Required */
		definition: PublicActionDefinition;

		/** Required */
		id: string;

		/** Required */
		revisionId: string;
	}
	export interface PublicActionRevisionFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreatePublicActionRevisionFormGroup() {
		return new FormGroup<PublicActionRevisionFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Error {

		/**
		 * The error category
		 * Required
		 */
		category: string;

		/** Context about the error condition */
		context?: {[id: string]: Array<string> };

		/**
		 * A unique identifier for the request. Include this value with any error reports or support tickets
		 * Required
		 */
		correlationId: string;

		/** further information about the error */
		errors?: Array<ErrorDetail>;

		/** A map of link names to associated URIs containing documentation about the error or recommended remediation steps */
		links?: {[id: string]: string };

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: string;

		/** A specific category that contains more specific detail about the error */
		subCategory?: string | null;
	}
	export interface ErrorFormProperties {

		/**
		 * The error category
		 * Required
		 */
		category: FormControl<string | null | undefined>,

		/** Context about the error condition */
		context: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/**
		 * A unique identifier for the request. Include this value with any error reports or support tickets
		 * Required
		 */
		correlationId: FormControl<string | null | undefined>,

		/** A map of link names to associated URIs containing documentation about the error or recommended remediation steps */
		links: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** A specific category that contains more specific detail about the error */
		subCategory: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			category: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			context: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			links: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subCategory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorDetail {

		/** The status code associated with the error detail */
		code?: string | null;

		/** Context about the error condition */
		context?: {[id: string]: Array<string> };

		/** The name of the field or parameter in which the error was found. */
		in?: string | null;

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: string;

		/** A specific category that contains more specific detail about the error */
		subCategory?: string | null;
	}
	export interface ErrorDetailFormProperties {

		/** The status code associated with the error detail */
		code: FormControl<string | null | undefined>,

		/** Context about the error condition */
		context: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/** The name of the field or parameter in which the error was found. */
		in: FormControl<string | null | undefined>,

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** A specific category that contains more specific detail about the error */
		subCategory: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			context: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			in: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subCategory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PublicActionDefinitionEgg {

		/** Required */
		actionUrl: string;
		archivedAt?: number | null;
		executionRules?: Array<PublicExecutionTranslationRule>;

		/** Required */
		functions: Array<PublicActionFunction>;
		inputFieldDependencies?: Array<string>;

		/** Required */
		inputFields: Array<InputFieldDefinition>;

		/** Required */
		labels: {[id: string]: PublicActionLabels };
		objectRequestOptions?: PublicObjectRequestOptions;

		/** Required */
		objectTypes: Array<string>;
		outputFields?: Array<OutputFieldDefinition>;

		/** Required */
		published: boolean;
	}
	export interface PublicActionDefinitionEggFormProperties {

		/** Required */
		actionUrl: FormControl<string | null | undefined>,
		archivedAt: FormControl<number | null | undefined>,

		/** Required */
		labels: FormControl<{[id: string]: PublicActionLabels } | null | undefined>,

		/** Required */
		published: FormControl<boolean | null | undefined>,
	}
	export function CreatePublicActionDefinitionEggFormGroup() {
		return new FormGroup<PublicActionDefinitionEggFormProperties>({
			actionUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			archivedAt: new FormControl<number | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: PublicActionLabels } | null | undefined>(undefined, [Validators.required]),
			published: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PublicActionFunction {

		/** Required */
		functionSource: string;

		/** Required */
		functionType: PublicActionFunctionIdentifierFunctionType;
		id?: string | null;
	}
	export interface PublicActionFunctionFormProperties {

		/** Required */
		functionSource: FormControl<string | null | undefined>,

		/** Required */
		functionType: FormControl<PublicActionFunctionIdentifierFunctionType | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreatePublicActionFunctionFormGroup() {
		return new FormGroup<PublicActionFunctionFormProperties>({
			functionSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			functionType: new FormControl<PublicActionFunctionIdentifierFunctionType | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PublicActionDefinitionPatch {
		actionUrl?: string | null;
		executionRules?: Array<PublicExecutionTranslationRule>;
		inputFieldDependencies?: Array<string>;
		inputFields?: Array<InputFieldDefinition>;
		labels?: {[id: string]: PublicActionLabels };
		objectRequestOptions?: PublicObjectRequestOptions;
		objectTypes?: Array<string>;
		outputFields?: Array<OutputFieldDefinition>;
		published?: boolean | null;
	}
	export interface PublicActionDefinitionPatchFormProperties {
		actionUrl: FormControl<string | null | undefined>,
		labels: FormControl<{[id: string]: PublicActionLabels } | null | undefined>,
		published: FormControl<boolean | null | undefined>,
	}
	export function CreatePublicActionDefinitionPatchFormGroup() {
		return new FormGroup<PublicActionDefinitionPatchFormProperties>({
			actionUrl: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: PublicActionLabels } | null | undefined>(undefined),
			published: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PublicConditionalSingleFieldDependency {

		/** Required */
		controllingFieldName: string;

		/** Required */
		controllingFieldValue: string;

		/** Required */
		dependencyType: PublicConditionalSingleFieldDependencyDependencyType;

		/** Required */
		dependentFieldNames: Array<string>;
	}
	export interface PublicConditionalSingleFieldDependencyFormProperties {

		/** Required */
		controllingFieldName: FormControl<string | null | undefined>,

		/** Required */
		controllingFieldValue: FormControl<string | null | undefined>,

		/** Required */
		dependencyType: FormControl<PublicConditionalSingleFieldDependencyDependencyType | null | undefined>,
	}
	export function CreatePublicConditionalSingleFieldDependencyFormGroup() {
		return new FormGroup<PublicConditionalSingleFieldDependencyFormProperties>({
			controllingFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			controllingFieldValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dependencyType: new FormControl<PublicConditionalSingleFieldDependencyDependencyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PublicConditionalSingleFieldDependencyDependencyType { CONDITIONAL_SINGLE_FIELD = 'CONDITIONAL_SINGLE_FIELD' }

	export interface PublicSingleFieldDependency {

		/** Required */
		controllingFieldName: string;

		/** Required */
		dependencyType: PublicSingleFieldDependencyDependencyType;

		/** Required */
		dependentFieldNames: Array<string>;
	}
	export interface PublicSingleFieldDependencyFormProperties {

		/** Required */
		controllingFieldName: FormControl<string | null | undefined>,

		/** Required */
		dependencyType: FormControl<PublicSingleFieldDependencyDependencyType | null | undefined>,
	}
	export function CreatePublicSingleFieldDependencyFormGroup() {
		return new FormGroup<PublicSingleFieldDependencyFormProperties>({
			controllingFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dependencyType: new FormControl<PublicSingleFieldDependencyDependencyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PublicSingleFieldDependencyDependencyType { SINGLE_FIELD = 'SINGLE_FIELD' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Post automation/v4/actions/callbacks/complete
		 * @return {void} 
		 */
		Post_SlashautomationSlashv4SlashactionsSlashcallbacksSlashcomplete_completeBatch(requestBody: BatchInputCallbackCompletionBatchRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'automation/v4/actions/callbacks/complete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post automation/v4/actions/callbacks/{callbackId}/complete
		 * @return {void} 
		 */
		Post_SlashautomationSlashv4SlashactionsSlashcallbacksSlashcallbackIdSlashcomplete_complete(callbackId: string, requestBody: CallbackCompletionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'automation/v4/actions/callbacks/' + (callbackId == null ? '' : encodeURIComponent(callbackId)) + '/complete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get automation/v4/actions/{appId}
		 * @param {number} limit The maximum number of results to display per page.
		 * @param {string} after The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.
		 * @param {boolean} archived Whether to return only results that have been archived.
		 * @return {CollectionResponsePublicActionDefinitionForwardPaging} successful operation
		 */
		Get_SlashautomationSlashv4SlashactionsSlashappId_getPage(limit: number | null | undefined, after: string | null | undefined, archived: boolean | null | undefined, appId: number): Observable<CollectionResponsePublicActionDefinitionForwardPaging> {
			return this.http.get<CollectionResponsePublicActionDefinitionForwardPaging>(this.baseUri + 'automation/v4/actions/' + appId + '?limit=' + limit + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&archived=' + archived, {});
		}

		/**
		 * Post automation/v4/actions/{appId}
		 * @return {void} 
		 */
		Post_SlashautomationSlashv4SlashactionsSlashappId_create(appId: number, requestBody: PublicActionDefinitionEgg): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'automation/v4/actions/' + appId, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete automation/v4/actions/{appId}/{definitionId}
		 * @return {void} 
		 */
		Delete_SlashautomationSlashv4SlashactionsSlashappIdSlashdefinitionId_archive(definitionId: string, appId: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'automation/v4/actions/' + appId + '/' + (definitionId == null ? '' : encodeURIComponent(definitionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get automation/v4/actions/{appId}/{definitionId}
		 * @param {boolean} archived Whether to return only results that have been archived.
		 * @return {PublicActionDefinition} successful operation
		 */
		Get_SlashautomationSlashv4SlashactionsSlashappIdSlashdefinitionId_getById(definitionId: string, archived: boolean | null | undefined, appId: number): Observable<PublicActionDefinition> {
			return this.http.get<PublicActionDefinition>(this.baseUri + 'automation/v4/actions/' + appId + '/' + (definitionId == null ? '' : encodeURIComponent(definitionId)) + '&archived=' + archived, {});
		}

		/**
		 * Patch automation/v4/actions/{appId}/{definitionId}
		 * @return {PublicActionDefinition} successful operation
		 */
		Patch_SlashautomationSlashv4SlashactionsSlashappIdSlashdefinitionId_update(definitionId: string, appId: number, requestBody: PublicActionDefinitionPatch): Observable<PublicActionDefinition> {
			return this.http.patch<PublicActionDefinition>(this.baseUri + 'automation/v4/actions/' + appId + '/' + (definitionId == null ? '' : encodeURIComponent(definitionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get automation/v4/actions/{appId}/{definitionId}/functions
		 * @return {CollectionResponsePublicActionFunctionIdentifierNoPaging} successful operation
		 */
		Get_SlashautomationSlashv4SlashactionsSlashappIdSlashdefinitionIdSlashfunctions_getPage(definitionId: string, appId: number): Observable<CollectionResponsePublicActionFunctionIdentifierNoPaging> {
			return this.http.get<CollectionResponsePublicActionFunctionIdentifierNoPaging>(this.baseUri + 'automation/v4/actions/' + appId + '/' + (definitionId == null ? '' : encodeURIComponent(definitionId)) + '/functions', {});
		}

		/**
		 * Delete automation/v4/actions/{appId}/{definitionId}/functions/{functionType}
		 * @return {void} 
		 */
		Delete_SlashautomationSlashv4SlashactionsSlashappIdSlashdefinitionIdSlashfunctionsSlashfunctionType_archiveByFunctionType(definitionId: string, functionType: PublicActionFunctionIdentifierFunctionType, appId: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'automation/v4/actions/' + appId + '/' + (definitionId == null ? '' : encodeURIComponent(definitionId)) + '/functions/' + functionType, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get automation/v4/actions/{appId}/{definitionId}/functions/{functionType}
		 * @return {PublicActionFunction} successful operation
		 */
		Get_SlashautomationSlashv4SlashactionsSlashappIdSlashdefinitionIdSlashfunctionsSlashfunctionType_getByFunctionType(definitionId: string, functionType: PublicActionFunctionIdentifierFunctionType, appId: number): Observable<PublicActionFunction> {
			return this.http.get<PublicActionFunction>(this.baseUri + 'automation/v4/actions/' + appId + '/' + (definitionId == null ? '' : encodeURIComponent(definitionId)) + '/functions/' + functionType, {});
		}

		/**
		 * Delete automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}
		 * @return {void} 
		 */
		Delete_SlashautomationSlashv4SlashactionsSlashappIdSlashdefinitionIdSlashfunctionsSlashfunctionTypeSlashfunctionId_archive(definitionId: string, functionType: PublicActionFunctionIdentifierFunctionType, functionId: string, appId: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'automation/v4/actions/' + appId + '/' + (definitionId == null ? '' : encodeURIComponent(definitionId)) + '/functions/' + functionType + '/' + (functionId == null ? '' : encodeURIComponent(functionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}
		 * @return {PublicActionFunction} successful operation
		 */
		Get_SlashautomationSlashv4SlashactionsSlashappIdSlashdefinitionIdSlashfunctionsSlashfunctionTypeSlashfunctionId_getById(definitionId: string, functionType: PublicActionFunctionIdentifierFunctionType, functionId: string, appId: number): Observable<PublicActionFunction> {
			return this.http.get<PublicActionFunction>(this.baseUri + 'automation/v4/actions/' + appId + '/' + (definitionId == null ? '' : encodeURIComponent(definitionId)) + '/functions/' + functionType + '/' + (functionId == null ? '' : encodeURIComponent(functionId)), {});
		}

		/**
		 * Get automation/v4/actions/{appId}/{definitionId}/revisions
		 * @param {number} limit The maximum number of results to display per page.
		 * @param {string} after The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.
		 * @return {CollectionResponsePublicActionRevisionForwardPaging} successful operation
		 */
		Get_SlashautomationSlashv4SlashactionsSlashappIdSlashdefinitionIdSlashrevisions_getPage(definitionId: string, limit: number | null | undefined, after: string | null | undefined, appId: number): Observable<CollectionResponsePublicActionRevisionForwardPaging> {
			return this.http.get<CollectionResponsePublicActionRevisionForwardPaging>(this.baseUri + 'automation/v4/actions/' + appId + '/' + (definitionId == null ? '' : encodeURIComponent(definitionId)) + '/revisions&limit=' + limit + '&after=' + (after == null ? '' : encodeURIComponent(after)), {});
		}

		/**
		 * Get automation/v4/actions/{appId}/{definitionId}/revisions/{revisionId}
		 * @return {PublicActionRevision} successful operation
		 */
		Get_SlashautomationSlashv4SlashactionsSlashappIdSlashdefinitionIdSlashrevisionsSlashrevisionId_getById(definitionId: string, revisionId: string, appId: number): Observable<PublicActionRevision> {
			return this.http.get<PublicActionRevision>(this.baseUri + 'automation/v4/actions/' + appId + '/' + (definitionId == null ? '' : encodeURIComponent(definitionId)) + '/revisions/' + (revisionId == null ? '' : encodeURIComponent(revisionId)), {});
		}
	}

}

