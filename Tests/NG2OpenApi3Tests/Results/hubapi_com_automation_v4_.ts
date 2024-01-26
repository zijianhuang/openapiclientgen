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

	export enum PublicActionFunctionIdentifierFunctionType { PRE_ACTION_EXECUTION = 0, PRE_FETCH_OPTIONS = 1, POST_FETCH_OPTIONS = 2, POST_ACTION_EXECUTION = 3 }

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

	export enum FieldTypeDefinitionFieldType { booleancheckbox = 0, checkbox = 1, date = 2, file = 3, number = 4, phonenumber = 5, radio = 6, select = 7, text = 8, textarea = 9, calculation_equation = 10, calculation_rollup = 11, calculation_score = 12, calculation_read_time = 13, unknown = 14, html = 15 }

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

	export enum FieldTypeDefinitionReferencedObjectType { CONTACT = 0, COMPANY = 1, DEAL = 2, ENGAGEMENT = 3, TICKET = 4, OWNER = 5, PRODUCT = 6, LINE_ITEM = 7, BET_DELIVERABLE_SERVICE = 8, CONTENT = 9, CONVERSATION = 10, BET_ALERT = 11, PORTAL = 12, QUOTE = 13, FORM_SUBMISSION_INBOUNDDB = 14, QUOTA = 15, UNSUBSCRIBE = 16, COMMUNICATION = 17, FEEDBACK_SUBMISSION = 18, ATTRIBUTION = 19, SALESFORCE_SYNC_ERROR = 20, RESTORABLE_CRM_OBJECT = 21, HUB = 22, LANDING_PAGE = 23, PRODUCT_OR_FOLDER = 24, TASK = 25, FORM = 26, MARKETING_EMAIL = 27, AD_ACCOUNT = 28, AD_CAMPAIGN = 29, AD_GROUP = 30, AD = 31, KEYWORD = 32, CAMPAIGN = 33, SOCIAL_CHANNEL = 34, SOCIAL_POST = 35, SITE_PAGE = 36, BLOG_POST = 37, IMPORT = 38, EXPORT = 39, CTA = 40, TASK_TEMPLATE = 41, AUTOMATION_PLATFORM_FLOW = 42, OBJECT_LIST = 43, NOTE = 44, MEETING_EVENT = 45, CALL = 46, EMAIL = 47, PUBLISHING_TASK = 48, CONVERSATION_SESSION = 49, CONTACT_CREATE_ATTRIBUTION = 50, INVOICE = 51, MARKETING_EVENT = 52, CONVERSATION_INBOX = 53, CHATFLOW = 54, MEDIA_BRIDGE = 55, SEQUENCE = 56, SEQUENCE_STEP = 57, FORECAST = 58, SNIPPET = 59, TEMPLATE = 60, DEAL_CREATE_ATTRIBUTION = 61, QUOTE_TEMPLATE = 62, QUOTE_MODULE = 63, QUOTE_MODULE_FIELD = 64, QUOTE_FIELD = 65, SEQUENCE_ENROLLMENT = 66, SUBSCRIPTION = 67, ACCEPTANCE_TEST = 68, SOCIAL_BROADCAST = 69, DEAL_SPLIT = 70, DEAL_REGISTRATION = 71, GOAL_TARGET = 72, GOAL_TARGET_GROUP = 73, PORTAL_OBJECT_SYNC_MESSAGE = 74, FILE_MANAGER_FILE = 75, FILE_MANAGER_FOLDER = 76, SEQUENCE_STEP_ENROLLMENT = 77, APPROVAL = 78, APPROVAL_STEP = 79, CTA_VARIANT = 80, SALES_DOCUMENT = 81, DISCOUNT = 82, FEE = 83, TAX = 84, MARKETING_CALENDAR = 85, PERMISSIONS_TESTING = 86, PRIVACY_SCANNER_COOKIE = 87, DATA_SYNC_STATE = 88, WEB_INTERACTIVE = 89, PLAYBOOK = 90, FOLDER = 91, PLAYBOOK_QUESTION = 92, PLAYBOOK_SUBMISSION = 93, PLAYBOOK_SUBMISSION_ANSWER = 94, COMMERCE_PAYMENT = 95, GSC_PROPERTY = 96, SOX_PROTECTED_DUMMY_TYPE = 97, BLOG_LISTING_PAGE = 98, QUARANTINED_SUBMISSION = 99, PAYMENT_SCHEDULE = 100, PAYMENT_SCHEDULE_INSTALLMENT = 101, MARKETING_CAMPAIGN_UTM = 102, DISCOUNT_TEMPLATE = 103, DISCOUNT_CODE = 104, FEEDBACK_SURVEY = 105, CMS_URL = 106, SALES_TASK = 107, SALES_WORKLOAD = 108, USER = 109, POSTAL_MAIL = 110, SCHEMAS_BACKEND_TEST = 111, PAYMENT_LINK = 112, SUBMISSION_TAG = 113, CAMPAIGN_STEP = 114, SCHEDULING_PAGE = 115, SOX_PROTECTED_TEST_TYPE = 116, ORDER = 117, MARKETING_SMS = 118, PARTNER_ACCOUNT = 119, CAMPAIGN_TEMPLATE = 120, CAMPAIGN_TEMPLATE_STEP = 121, PLAYLIST = 122, CLIP = 123, CAMPAIGN_BUDGET_ITEM = 124, CAMPAIGN_SPEND_ITEM = 125, MIC = 126, CONTENT_AUDIT = 127, CONTENT_AUDIT_PAGE = 128, PLAYLIST_FOLDER = 129, LEAD = 130, ABANDONED_CART = 131, EXTERNAL_WEB_URL = 132, VIEW = 133, VIEW_BLOCK = 134, ROSTER = 135, CART = 136, AUTOMATION_PLATFORM_FLOW_ACTION = 137, SOCIAL_PROFILE = 138, PARTNER_CLIENT = 139, ROSTER_MEMBER = 140, MARKETING_EVENT_ATTENDANCE = 141, ALL_PAGES = 142, AI_FORECAST = 143, CRM_PIPELINES_DUMMY_TYPE = 144, KNOWLEDGE_ARTICLE = 145, PROPERTY_INFO = 146, DATA_PRIVACY_CONSENT = 147, UNKNOWN = 148 }

	export enum FieldTypeDefinitionType { string = 0, number = 1, bool = 2, datetime = 3, enumeration = 4, date = 5, phone_number = 6, currency_number = 7, json = 8, object_coordinates = 9 }

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

	export enum PublicConditionalSingleFieldDependencyDependencyType { CONDITIONAL_SINGLE_FIELD = 0 }

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

	export enum PublicSingleFieldDependencyDependencyType { SINGLE_FIELD = 0 }

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

