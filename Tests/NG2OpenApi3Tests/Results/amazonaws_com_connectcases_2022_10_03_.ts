import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchGetFieldResponse {

		/** Required */
		errors: Array<FieldError>;

		/** Required */
		fields: Array<GetFieldResponse>;
	}
	export interface BatchGetFieldResponseFormProperties {
	}
	export function CreateBatchGetFieldResponseFormGroup() {
		return new FormGroup<BatchGetFieldResponseFormProperties>({
		});

	}


	/** Object for errors on fields. */
	export interface FieldError {

		/** Required */
		errorCode: string;

		/** Required */
		id: string;
		message?: string;
	}

	/** Object for errors on fields. */
	export interface FieldErrorFormProperties {

		/** Required */
		errorCode: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateFieldErrorFormGroup() {
		return new FormGroup<FieldErrorFormProperties>({
			errorCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object to store detailed field information. */
	export interface GetFieldResponse {
		description?: string;

		/** Required */
		fieldArn: string;

		/** Required */
		fieldId: string;

		/** Required */
		name: string;

		/** Required */
		namespace: FieldNamespace;
		tags?: Tags;

		/** Required */
		type: FieldType;
	}

	/** Object to store detailed field information. */
	export interface GetFieldResponseFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		fieldArn: FormControl<string | null | undefined>,

		/** Required */
		fieldId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		namespace: FormControl<FieldNamespace | null | undefined>,

		/** Required */
		type: FormControl<FieldType | null | undefined>,
	}
	export function CreateGetFieldResponseFormGroup() {
		return new FormGroup<GetFieldResponseFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			fieldArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fieldId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			namespace: new FormControl<FieldNamespace | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<FieldType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FieldNamespace { System = 'System', Custom = 'Custom' }

	export interface Tags {
	}
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}

	export enum FieldType { Text = 'Text', Number = 'Number', Boolean = 'Boolean', DateTime = 'DateTime', SingleSelect = 'SingleSelect', Url = 'Url' }


	/** Object for unique identifier of a field. */
	export interface FieldIdentifier {

		/** Required */
		id: string;
	}

	/** Object for unique identifier of a field. */
	export interface FieldIdentifierFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateFieldIdentifierFormGroup() {
		return new FormGroup<FieldIdentifierFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface BatchPutFieldOptionsResponse {
		errors?: Array<FieldOptionError>;
	}
	export interface BatchPutFieldOptionsResponseFormProperties {
	}
	export function CreateBatchPutFieldOptionsResponseFormGroup() {
		return new FormGroup<BatchPutFieldOptionsResponseFormProperties>({
		});

	}


	/** Object for field Options errors. */
	export interface FieldOptionError {

		/** Required */
		errorCode: string;

		/** Required */
		message: string;

		/** Required */
		value: string;
	}

	/** Object for field Options errors. */
	export interface FieldOptionErrorFormProperties {

		/** Required */
		errorCode: FormControl<string | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateFieldOptionErrorFormGroup() {
		return new FormGroup<FieldOptionErrorFormProperties>({
			errorCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Object for field Options information. */
	export interface FieldOption {

		/** Required */
		active: boolean;

		/** Required */
		name: string;

		/** Required */
		value: string;
	}

	/** Object for field Options information. */
	export interface FieldOptionFormProperties {

		/** Required */
		active: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateFieldOptionFormGroup() {
		return new FormGroup<FieldOptionFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface CreateCaseResponse {

		/** Required */
		caseArn: string;

		/** Required */
		caseId: string;
	}
	export interface CreateCaseResponseFormProperties {

		/** Required */
		caseArn: FormControl<string | null | undefined>,

		/** Required */
		caseId: FormControl<string | null | undefined>,
	}
	export function CreateCreateCaseResponseFormGroup() {
		return new FormGroup<CreateCaseResponseFormProperties>({
			caseArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			caseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Object for case field values. */
	export interface FieldValue {

		/** Required */
		id: string;

		/** Required */
		value: FieldValueUnion;
	}

	/** Object for case field values. */
	export interface FieldValueFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateFieldValueFormGroup() {
		return new FormGroup<FieldValueFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Object to store union of Field values. */
	export interface FieldValueUnion {
		booleanValue?: boolean | null;
		doubleValue?: number | null;
		emptyValue?: EmptyFieldValue;
		stringValue?: string;
	}

	/** Object to store union of Field values. */
	export interface FieldValueUnionFormProperties {
		booleanValue: FormControl<boolean | null | undefined>,
		doubleValue: FormControl<number | null | undefined>,
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateFieldValueUnionFormGroup() {
		return new FormGroup<FieldValueUnionFormProperties>({
			booleanValue: new FormControl<boolean | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>An empty value. You cannot set <code>EmptyFieldValue</code> on a field that is required on a case template.</p> <p>This structure will never have any data members. It signifies an empty value on a case field.</p> */
	export interface EmptyFieldValue {
	}

	/** <p>An empty value. You cannot set <code>EmptyFieldValue</code> on a field that is required on a case template.</p> <p>This structure will never have any data members. It signifies an empty value on a case field.</p> */
	export interface EmptyFieldValueFormProperties {
	}
	export function CreateEmptyFieldValueFormGroup() {
		return new FormGroup<EmptyFieldValueFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface CreateDomainResponse {

		/** Required */
		domainArn: string;

		/** Required */
		domainId: string;

		/** Required */
		domainStatus: DomainStatus;
	}
	export interface CreateDomainResponseFormProperties {

		/** Required */
		domainArn: FormControl<string | null | undefined>,

		/** Required */
		domainId: FormControl<string | null | undefined>,

		/** Required */
		domainStatus: FormControl<DomainStatus | null | undefined>,
	}
	export function CreateCreateDomainResponseFormGroup() {
		return new FormGroup<CreateDomainResponseFormProperties>({
			domainArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domainStatus: new FormControl<DomainStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DomainStatus { Active = 'Active', CreationInProgress = 'CreationInProgress', CreationFailed = 'CreationFailed' }

	export interface CreateFieldResponse {

		/** Required */
		fieldArn: string;

		/** Required */
		fieldId: string;
	}
	export interface CreateFieldResponseFormProperties {

		/** Required */
		fieldArn: FormControl<string | null | undefined>,

		/** Required */
		fieldId: FormControl<string | null | undefined>,
	}
	export function CreateCreateFieldResponseFormGroup() {
		return new FormGroup<CreateFieldResponseFormProperties>({
			fieldArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fieldId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateLayoutResponse {

		/** Required */
		layoutArn: string;

		/** Required */
		layoutId: string;
	}
	export interface CreateLayoutResponseFormProperties {

		/** Required */
		layoutArn: FormControl<string | null | undefined>,

		/** Required */
		layoutId: FormControl<string | null | undefined>,
	}
	export function CreateCreateLayoutResponseFormGroup() {
		return new FormGroup<CreateLayoutResponseFormProperties>({
			layoutArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			layoutId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Content specific to <code>BasicLayout</code> type. It configures fields in the top panel and More Info tab of agent application.  */
	export interface BasicLayout {
		moreInfo?: LayoutSections;
		topPanel?: LayoutSections;
	}

	/** Content specific to <code>BasicLayout</code> type. It configures fields in the top panel and More Info tab of agent application.  */
	export interface BasicLayoutFormProperties {
	}
	export function CreateBasicLayoutFormGroup() {
		return new FormGroup<BasicLayoutFormProperties>({
		});

	}


	/** Ordered list containing different kinds of sections that can be added. A LayoutSections object can only contain one section. */
	export interface LayoutSections {

		/**
		 * Ordered list containing different kinds of sections that can be added.
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		sections?: Array<Section>;
	}

	/** Ordered list containing different kinds of sections that can be added. A LayoutSections object can only contain one section. */
	export interface LayoutSectionsFormProperties {
	}
	export function CreateLayoutSectionsFormGroup() {
		return new FormGroup<LayoutSectionsFormProperties>({
		});

	}


	/** This represents a sections within a panel or tab of the page layout. */
	export interface Section {
		fieldGroup?: FieldGroup;
	}

	/** This represents a sections within a panel or tab of the page layout. */
	export interface SectionFormProperties {
	}
	export function CreateSectionFormGroup() {
		return new FormGroup<SectionFormProperties>({
		});

	}


	/** Object for a group of fields and associated properties. */
	export interface FieldGroup {

		/** Required */
		fields: Array<FieldItem>;
		name?: string;
	}

	/** Object for a group of fields and associated properties. */
	export interface FieldGroupFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateFieldGroupFormGroup() {
		return new FormGroup<FieldGroupFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object for field related information. */
	export interface FieldItem {

		/** Required */
		id: string;
	}

	/** Object for field related information. */
	export interface FieldItemFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateFieldItemFormGroup() {
		return new FormGroup<FieldItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRelatedItemResponse {

		/** Required */
		relatedItemArn: string;

		/** Required */
		relatedItemId: string;
	}
	export interface CreateRelatedItemResponseFormProperties {

		/** Required */
		relatedItemArn: FormControl<string | null | undefined>,

		/** Required */
		relatedItemId: FormControl<string | null | undefined>,
	}
	export function CreateCreateRelatedItemResponseFormGroup() {
		return new FormGroup<CreateRelatedItemResponseFormProperties>({
			relatedItemArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			relatedItemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the content of a <code>Comment</code> to be returned to agents. */
	export interface CommentContent {

		/** Required */
		body: string;

		/** Required */
		contentType: CommentBodyTextType;
	}

	/** Represents the content of a <code>Comment</code> to be returned to agents. */
	export interface CommentContentFormProperties {

		/** Required */
		body: FormControl<string | null | undefined>,

		/** Required */
		contentType: FormControl<CommentBodyTextType | null | undefined>,
	}
	export function CreateCommentContentFormGroup() {
		return new FormGroup<CommentContentFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			contentType: new FormControl<CommentBodyTextType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CommentBodyTextType { 'Text/Plain' = 'Text/Plain' }


	/** An object that represents an Amazon Connect contact object.  */
	export interface Contact {

		/** Required */
		contactArn: string;
	}

	/** An object that represents an Amazon Connect contact object.  */
	export interface ContactFormProperties {

		/** Required */
		contactArn: FormControl<string | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			contactArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateTemplateResponse {

		/** Required */
		templateArn: string;

		/** Required */
		templateId: string;
	}
	export interface CreateTemplateResponseFormProperties {

		/** Required */
		templateArn: FormControl<string | null | undefined>,

		/** Required */
		templateId: FormControl<string | null | undefined>,
	}
	export function CreateCreateTemplateResponseFormGroup() {
		return new FormGroup<CreateTemplateResponseFormProperties>({
			templateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of fields that must have a value provided to create a case. */
	export interface RequiredField {

		/** Required */
		fieldId: string;
	}

	/** List of fields that must have a value provided to create a case. */
	export interface RequiredFieldFormProperties {

		/** Required */
		fieldId: FormControl<string | null | undefined>,
	}
	export function CreateRequiredFieldFormGroup() {
		return new FormGroup<RequiredFieldFormProperties>({
			fieldId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDomainResponse {
	}
	export interface DeleteDomainResponseFormProperties {
	}
	export function CreateDeleteDomainResponseFormGroup() {
		return new FormGroup<DeleteDomainResponseFormProperties>({
		});

	}

	export interface GetCaseResponse {

		/** Required */
		fields: Array<FieldValue>;
		nextToken?: string;
		tags?: Tags;

		/** Required */
		templateId: string;
	}
	export interface GetCaseResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		templateId: FormControl<string | null | undefined>,
	}
	export function CreateGetCaseResponseFormGroup() {
		return new FormGroup<GetCaseResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			templateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCaseEventConfigurationResponse {

		/** Required */
		eventBridge: EventBridgeConfiguration;
	}
	export interface GetCaseEventConfigurationResponseFormProperties {
	}
	export function CreateGetCaseEventConfigurationResponseFormGroup() {
		return new FormGroup<GetCaseEventConfigurationResponseFormProperties>({
		});

	}


	/** Configuration to enable EventBridge case event delivery and determine what data is delivered. */
	export interface EventBridgeConfiguration {

		/** Required */
		enabled: boolean;
		includedData?: EventIncludedData;
	}

	/** Configuration to enable EventBridge case event delivery and determine what data is delivered. */
	export interface EventBridgeConfigurationFormProperties {

		/** Required */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEventBridgeConfigurationFormGroup() {
		return new FormGroup<EventBridgeConfigurationFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details of what case and related item data is published through the case event stream. */
	export interface EventIncludedData {
		caseData?: CaseEventIncludedData;
		relatedItemData?: RelatedItemEventIncludedData;
	}

	/** Details of what case and related item data is published through the case event stream. */
	export interface EventIncludedDataFormProperties {
	}
	export function CreateEventIncludedDataFormGroup() {
		return new FormGroup<EventIncludedDataFormProperties>({
		});

	}


	/** Details of what case data is published through the case event stream. */
	export interface CaseEventIncludedData {

		/** Required */
		fields: Array<FieldIdentifier>;
	}

	/** Details of what case data is published through the case event stream. */
	export interface CaseEventIncludedDataFormProperties {
	}
	export function CreateCaseEventIncludedDataFormGroup() {
		return new FormGroup<CaseEventIncludedDataFormProperties>({
		});

	}


	/** Details of what related item data is published through the case event stream. */
	export interface RelatedItemEventIncludedData {

		/** Required */
		includeContent: boolean;
	}

	/** Details of what related item data is published through the case event stream. */
	export interface RelatedItemEventIncludedDataFormProperties {

		/** Required */
		includeContent: FormControl<boolean | null | undefined>,
	}
	export function CreateRelatedItemEventIncludedDataFormGroup() {
		return new FormGroup<RelatedItemEventIncludedDataFormProperties>({
			includeContent: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDomainResponse {

		/** Required */
		createdTime: Date;

		/** Required */
		domainArn: string;

		/** Required */
		domainId: string;

		/** Required */
		domainStatus: DomainStatus;

		/** Required */
		name: string;
		tags?: Tags;
	}
	export interface GetDomainResponseFormProperties {

		/** Required */
		createdTime: FormControl<Date | null | undefined>,

		/** Required */
		domainArn: FormControl<string | null | undefined>,

		/** Required */
		domainId: FormControl<string | null | undefined>,

		/** Required */
		domainStatus: FormControl<DomainStatus | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetDomainResponseFormGroup() {
		return new FormGroup<GetDomainResponseFormProperties>({
			createdTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			domainArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domainStatus: new FormControl<DomainStatus | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLayoutResponse {

		/** Required */
		content: LayoutContent;

		/** Required */
		layoutArn: string;

		/** Required */
		layoutId: string;

		/** Required */
		name: string;
		tags?: Tags;
	}
	export interface GetLayoutResponseFormProperties {

		/** Required */
		layoutArn: FormControl<string | null | undefined>,

		/** Required */
		layoutId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetLayoutResponseFormGroup() {
		return new FormGroup<GetLayoutResponseFormProperties>({
			layoutArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			layoutId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Object to store union of different versions of layout content. */
	export interface LayoutContent {
		basic?: BasicLayout;
	}

	/** Object to store union of different versions of layout content. */
	export interface LayoutContentFormProperties {
	}
	export function CreateLayoutContentFormGroup() {
		return new FormGroup<LayoutContentFormProperties>({
		});

	}

	export interface GetTemplateResponse {
		description?: string;
		layoutConfiguration?: LayoutConfiguration;

		/** Required */
		name: string;
		requiredFields?: Array<RequiredField>;

		/** Required */
		status: TemplateStatus;
		tags?: Tags;

		/** Required */
		templateArn: string;

		/** Required */
		templateId: string;
	}
	export interface GetTemplateResponseFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<TemplateStatus | null | undefined>,

		/** Required */
		templateArn: FormControl<string | null | undefined>,

		/** Required */
		templateId: FormControl<string | null | undefined>,
	}
	export function CreateGetTemplateResponseFormGroup() {
		return new FormGroup<GetTemplateResponseFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<TemplateStatus | null | undefined>(undefined, [Validators.required]),
			templateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Object to store configuration of layouts associated to the template. */
	export interface LayoutConfiguration {
		defaultLayout?: string;
	}

	/** Object to store configuration of layouts associated to the template. */
	export interface LayoutConfigurationFormProperties {
		defaultLayout: FormControl<string | null | undefined>,
	}
	export function CreateLayoutConfigurationFormGroup() {
		return new FormGroup<LayoutConfigurationFormProperties>({
			defaultLayout: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TemplateStatus { Active = 'Active', Inactive = 'Inactive' }

	export interface ListCasesForContactResponse {

		/** Required */
		cases: Array<CaseSummary>;
		nextToken?: string;
	}
	export interface ListCasesForContactResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCasesForContactResponseFormGroup() {
		return new FormGroup<ListCasesForContactResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Case summary information. */
	export interface CaseSummary {

		/** Required */
		caseId: string;

		/** Required */
		templateId: string;
	}

	/** Case summary information. */
	export interface CaseSummaryFormProperties {

		/** Required */
		caseId: FormControl<string | null | undefined>,

		/** Required */
		templateId: FormControl<string | null | undefined>,
	}
	export function CreateCaseSummaryFormGroup() {
		return new FormGroup<CaseSummaryFormProperties>({
			caseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListDomainsResponse {

		/** Required */
		domains: Array<DomainSummary>;
		nextToken?: string;
	}
	export interface ListDomainsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDomainsResponseFormGroup() {
		return new FormGroup<ListDomainsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object for the summarized details of the domain. */
	export interface DomainSummary {

		/** Required */
		domainArn: string;

		/** Required */
		domainId: string;

		/** Required */
		name: string;
	}

	/** Object for the summarized details of the domain. */
	export interface DomainSummaryFormProperties {

		/** Required */
		domainArn: FormControl<string | null | undefined>,

		/** Required */
		domainId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDomainSummaryFormGroup() {
		return new FormGroup<DomainSummaryFormProperties>({
			domainArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListFieldOptionsResponse {
		nextToken?: string;

		/** Required */
		options: Array<FieldOption>;
	}
	export interface ListFieldOptionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFieldOptionsResponseFormGroup() {
		return new FormGroup<ListFieldOptionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFieldsResponse {

		/** Required */
		fields: Array<FieldSummary>;
		nextToken?: string;
	}
	export interface ListFieldsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFieldsResponseFormGroup() {
		return new FormGroup<ListFieldsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object for the summarized details of the field. */
	export interface FieldSummary {

		/** Required */
		fieldArn: string;

		/** Required */
		fieldId: string;

		/** Required */
		name: string;

		/** Required */
		namespace: FieldNamespace;

		/** Required */
		type: FieldType;
	}

	/** Object for the summarized details of the field. */
	export interface FieldSummaryFormProperties {

		/** Required */
		fieldArn: FormControl<string | null | undefined>,

		/** Required */
		fieldId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		namespace: FormControl<FieldNamespace | null | undefined>,

		/** Required */
		type: FormControl<FieldType | null | undefined>,
	}
	export function CreateFieldSummaryFormGroup() {
		return new FormGroup<FieldSummaryFormProperties>({
			fieldArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fieldId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			namespace: new FormControl<FieldNamespace | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<FieldType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListLayoutsResponse {

		/** Required */
		layouts: Array<LayoutSummary>;
		nextToken?: string;
	}
	export interface ListLayoutsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLayoutsResponseFormGroup() {
		return new FormGroup<ListLayoutsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object for the summarized details of the layout. */
	export interface LayoutSummary {

		/** Required */
		layoutArn: string;

		/** Required */
		layoutId: string;

		/** Required */
		name: string;
	}

	/** Object for the summarized details of the layout. */
	export interface LayoutSummaryFormProperties {

		/** Required */
		layoutArn: FormControl<string | null | undefined>,

		/** Required */
		layoutId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLayoutSummaryFormGroup() {
		return new FormGroup<LayoutSummaryFormProperties>({
			layoutArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			layoutId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: Tags;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTemplatesResponse {
		nextToken?: string;

		/** Required */
		templates: Array<TemplateSummary>;
	}
	export interface ListTemplatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTemplatesResponseFormGroup() {
		return new FormGroup<ListTemplatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Template summary information. */
	export interface TemplateSummary {

		/** Required */
		name: string;

		/** Required */
		status: TemplateStatus;

		/** Required */
		templateArn: string;

		/** Required */
		templateId: string;
	}

	/** Template summary information. */
	export interface TemplateSummaryFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<TemplateStatus | null | undefined>,

		/** Required */
		templateArn: FormControl<string | null | undefined>,

		/** Required */
		templateId: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryFormGroup() {
		return new FormGroup<TemplateSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<TemplateStatus | null | undefined>(undefined, [Validators.required]),
			templateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutCaseEventConfigurationResponse {
	}
	export interface PutCaseEventConfigurationResponseFormProperties {
	}
	export function CreatePutCaseEventConfigurationResponseFormGroup() {
		return new FormGroup<PutCaseEventConfigurationResponseFormProperties>({
		});

	}

	export interface SearchCasesResponse {

		/** Required */
		cases: Array<SearchCasesResponseItem>;
		nextToken?: string;
	}
	export interface SearchCasesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchCasesResponseFormGroup() {
		return new FormGroup<SearchCasesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of items that represent cases. */
	export interface SearchCasesResponseItem {

		/** Required */
		caseId: string;

		/** Required */
		fields: Array<FieldValue>;
		tags?: Tags;

		/** Required */
		templateId: string;
	}

	/** A list of items that represent cases. */
	export interface SearchCasesResponseItemFormProperties {

		/** Required */
		caseId: FormControl<string | null | undefined>,

		/** Required */
		templateId: FormControl<string | null | undefined>,
	}
	export function CreateSearchCasesResponseItemFormGroup() {
		return new FormGroup<SearchCasesResponseItemFormProperties>({
			caseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A filter for cases. Only one value can be provided. */
	export interface CaseFilter {
		andAll?: Array<CaseFilter>;
		field?: FieldFilter;

		/** A filter for cases. Only one value can be provided. */
		not?: CaseFilter;
		orAll?: Array<CaseFilter>;
	}

	/** A filter for cases. Only one value can be provided. */
	export interface CaseFilterFormProperties {
	}
	export function CreateCaseFilterFormGroup() {
		return new FormGroup<CaseFilterFormProperties>({
		});

	}


	/** A filter for fields. Only one value can be provided. */
	export interface FieldFilter {
		contains?: FieldValue;
		equalTo?: FieldValue;
		greaterThan?: FieldValue;
		greaterThanOrEqualTo?: FieldValue;
		lessThan?: FieldValue;
		lessThanOrEqualTo?: FieldValue;
	}

	/** A filter for fields. Only one value can be provided. */
	export interface FieldFilterFormProperties {
	}
	export function CreateFieldFilterFormGroup() {
		return new FormGroup<FieldFilterFormProperties>({
		});

	}


	/** A structured set of sort terms. */
	export interface Sort {

		/** Required */
		fieldId: string;

		/** Required */
		sortOrder: Order;
	}

	/** A structured set of sort terms. */
	export interface SortFormProperties {

		/** Required */
		fieldId: FormControl<string | null | undefined>,

		/** Required */
		sortOrder: FormControl<Order | null | undefined>,
	}
	export function CreateSortFormGroup() {
		return new FormGroup<SortFormProperties>({
			fieldId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sortOrder: new FormControl<Order | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Order { Asc = 'Asc', Desc = 'Desc' }

	export interface SearchRelatedItemsResponse {
		nextToken?: string;

		/** Required */
		relatedItems: Array<SearchRelatedItemsResponseItem>;
	}
	export interface SearchRelatedItemsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchRelatedItemsResponseFormGroup() {
		return new FormGroup<SearchRelatedItemsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of items that represent RelatedItems. */
	export interface SearchRelatedItemsResponseItem {

		/** Required */
		associationTime: Date;

		/** Required */
		content: RelatedItemContent;

		/** Required */
		relatedItemId: string;
		tags?: Tags;

		/** Required */
		type: RelatedItemType;
	}

	/** A list of items that represent RelatedItems. */
	export interface SearchRelatedItemsResponseItemFormProperties {

		/** Required */
		associationTime: FormControl<Date | null | undefined>,

		/** Required */
		relatedItemId: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<RelatedItemType | null | undefined>,
	}
	export function CreateSearchRelatedItemsResponseItemFormGroup() {
		return new FormGroup<SearchRelatedItemsResponseItemFormProperties>({
			associationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			relatedItemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<RelatedItemType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the content of a particular type of related item. */
	export interface RelatedItemContent {
		comment?: CommentContent;
		contact?: ContactContent;
	}

	/** Represents the content of a particular type of related item. */
	export interface RelatedItemContentFormProperties {
	}
	export function CreateRelatedItemContentFormGroup() {
		return new FormGroup<RelatedItemContentFormProperties>({
		});

	}


	/** An object that represents a content of an Amazon Connect contact object. */
	export interface ContactContent {

		/** Required */
		channel: string;

		/** Required */
		connectedToSystemTime: Date;

		/** Required */
		contactArn: string;
	}

	/** An object that represents a content of an Amazon Connect contact object. */
	export interface ContactContentFormProperties {

		/** Required */
		channel: FormControl<string | null | undefined>,

		/** Required */
		connectedToSystemTime: FormControl<Date | null | undefined>,

		/** Required */
		contactArn: FormControl<string | null | undefined>,
	}
	export function CreateContactContentFormGroup() {
		return new FormGroup<ContactContentFormProperties>({
			channel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			connectedToSystemTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			contactArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RelatedItemType { Contact = 'Contact', Comment = 'Comment' }


	/** The list of types of related items and their parameters to use for filtering. */
	export interface RelatedItemTypeFilter {
		comment?: CommentFilter;
		contact?: ContactFilter;
	}

	/** The list of types of related items and their parameters to use for filtering. */
	export interface RelatedItemTypeFilterFormProperties {
	}
	export function CreateRelatedItemTypeFilterFormGroup() {
		return new FormGroup<RelatedItemTypeFilterFormProperties>({
		});

	}


	/** A filter for related items of type <code>Comment</code>. */
	export interface CommentFilter {
	}

	/** A filter for related items of type <code>Comment</code>. */
	export interface CommentFilterFormProperties {
	}
	export function CreateCommentFilterFormGroup() {
		return new FormGroup<CommentFilterFormProperties>({
		});

	}


	/** A filter for related items of type <code>Contact</code>. */
	export interface ContactFilter {
		channel?: Array<string>;
		contactArn?: string;
	}

	/** A filter for related items of type <code>Contact</code>. */
	export interface ContactFilterFormProperties {
		contactArn: FormControl<string | null | undefined>,
	}
	export function CreateContactFilterFormGroup() {
		return new FormGroup<ContactFilterFormProperties>({
			contactArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCaseResponse {
	}
	export interface UpdateCaseResponseFormProperties {
	}
	export function CreateUpdateCaseResponseFormGroup() {
		return new FormGroup<UpdateCaseResponseFormProperties>({
		});

	}

	export interface UpdateFieldResponse {
	}
	export interface UpdateFieldResponseFormProperties {
	}
	export function CreateUpdateFieldResponseFormGroup() {
		return new FormGroup<UpdateFieldResponseFormProperties>({
		});

	}

	export interface UpdateLayoutResponse {
	}
	export interface UpdateLayoutResponseFormProperties {
	}
	export function CreateUpdateLayoutResponseFormGroup() {
		return new FormGroup<UpdateLayoutResponseFormProperties>({
		});

	}

	export interface UpdateTemplateResponse {
	}
	export interface UpdateTemplateResponseFormProperties {
	}
	export function CreateUpdateTemplateResponseFormGroup() {
		return new FormGroup<UpdateTemplateResponseFormProperties>({
		});

	}

	export interface BatchGetFieldRequest {

		/** Required */
		fields: Array<FieldIdentifier>;
	}
	export interface BatchGetFieldRequestFormProperties {
	}
	export function CreateBatchGetFieldRequestFormGroup() {
		return new FormGroup<BatchGetFieldRequestFormProperties>({
		});

	}

	export interface BatchPutFieldOptionsRequest {

		/** Required */
		options: Array<FieldOption>;
	}
	export interface BatchPutFieldOptionsRequestFormProperties {
	}
	export function CreateBatchPutFieldOptionsRequestFormGroup() {
		return new FormGroup<BatchPutFieldOptionsRequestFormProperties>({
		});

	}

	export interface CreateCaseRequest {
		clientToken?: string;

		/** Required */
		fields: Array<FieldValue>;

		/** Required */
		templateId: string;
	}
	export interface CreateCaseRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		templateId: FormControl<string | null | undefined>,
	}
	export function CreateCreateCaseRequestFormGroup() {
		return new FormGroup<CreateCaseRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			templateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDomainRequest {

		/** Required */
		name: string;
	}
	export interface CreateDomainRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainRequestFormGroup() {
		return new FormGroup<CreateDomainRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateFieldRequest {
		description?: string;

		/** Required */
		name: string;

		/** Required */
		type: FieldType;
	}
	export interface CreateFieldRequestFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<FieldType | null | undefined>,
	}
	export function CreateCreateFieldRequestFormGroup() {
		return new FormGroup<CreateFieldRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<FieldType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateLayoutRequest {

		/** Required */
		content: LayoutContent;

		/** Required */
		name: string;
	}
	export interface CreateLayoutRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateLayoutRequestFormGroup() {
		return new FormGroup<CreateLayoutRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the content of a related item to be created. */
	export interface RelatedItemInputContent {
		comment?: CommentContent;
		contact?: Contact;
	}

	/** Represents the content of a related item to be created. */
	export interface RelatedItemInputContentFormProperties {
	}
	export function CreateRelatedItemInputContentFormGroup() {
		return new FormGroup<RelatedItemInputContentFormProperties>({
		});

	}

	export interface CreateRelatedItemRequest {

		/** Required */
		content: RelatedItemInputContent;

		/** Required */
		type: RelatedItemType;
	}
	export interface CreateRelatedItemRequestFormProperties {

		/** Required */
		type: FormControl<RelatedItemType | null | undefined>,
	}
	export function CreateCreateRelatedItemRequestFormGroup() {
		return new FormGroup<CreateRelatedItemRequestFormProperties>({
			type: new FormControl<RelatedItemType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateTemplateRequest {
		description?: string;
		layoutConfiguration?: LayoutConfiguration;

		/** Required */
		name: string;
		requiredFields?: Array<RequiredField>;
		status?: TemplateStatus;
	}
	export interface CreateTemplateRequestFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		status: FormControl<TemplateStatus | null | undefined>,
	}
	export function CreateCreateTemplateRequestFormGroup() {
		return new FormGroup<CreateTemplateRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<TemplateStatus | null | undefined>(undefined),
		});

	}

	export interface DeleteDomainRequest {
	}
	export interface DeleteDomainRequestFormProperties {
	}
	export function CreateDeleteDomainRequestFormGroup() {
		return new FormGroup<DeleteDomainRequestFormProperties>({
		});

	}

	export interface GetCaseEventConfigurationRequest {
	}
	export interface GetCaseEventConfigurationRequestFormProperties {
	}
	export function CreateGetCaseEventConfigurationRequestFormGroup() {
		return new FormGroup<GetCaseEventConfigurationRequestFormProperties>({
		});

	}

	export interface GetCaseRequest {

		/** Required */
		fields: Array<FieldIdentifier>;
		nextToken?: string;
	}
	export interface GetCaseRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCaseRequestFormGroup() {
		return new FormGroup<GetCaseRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDomainRequest {
	}
	export interface GetDomainRequestFormProperties {
	}
	export function CreateGetDomainRequestFormGroup() {
		return new FormGroup<GetDomainRequestFormProperties>({
		});

	}

	export interface GetLayoutRequest {
	}
	export interface GetLayoutRequestFormProperties {
	}
	export function CreateGetLayoutRequestFormGroup() {
		return new FormGroup<GetLayoutRequestFormProperties>({
		});

	}

	export interface GetTemplateRequest {
	}
	export interface GetTemplateRequestFormProperties {
	}
	export function CreateGetTemplateRequestFormGroup() {
		return new FormGroup<GetTemplateRequestFormProperties>({
		});

	}

	export interface ListCasesForContactRequest {

		/** Required */
		contactArn: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListCasesForContactRequestFormProperties {

		/** Required */
		contactArn: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCasesForContactRequestFormGroup() {
		return new FormGroup<ListCasesForContactRequestFormProperties>({
			contactArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDomainsRequest {
	}
	export interface ListDomainsRequestFormProperties {
	}
	export function CreateListDomainsRequestFormGroup() {
		return new FormGroup<ListDomainsRequestFormProperties>({
		});

	}

	export interface ListFieldOptionsRequest {
	}
	export interface ListFieldOptionsRequestFormProperties {
	}
	export function CreateListFieldOptionsRequestFormGroup() {
		return new FormGroup<ListFieldOptionsRequestFormProperties>({
		});

	}

	export interface ListFieldsRequest {
	}
	export interface ListFieldsRequestFormProperties {
	}
	export function CreateListFieldsRequestFormGroup() {
		return new FormGroup<ListFieldsRequestFormProperties>({
		});

	}

	export interface ListLayoutsRequest {
	}
	export interface ListLayoutsRequestFormProperties {
	}
	export function CreateListLayoutsRequestFormGroup() {
		return new FormGroup<ListLayoutsRequestFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export interface ListTemplatesRequest {
	}
	export interface ListTemplatesRequestFormProperties {
	}
	export function CreateListTemplatesRequestFormGroup() {
		return new FormGroup<ListTemplatesRequestFormProperties>({
		});

	}

	export interface PutCaseEventConfigurationRequest {

		/** Required */
		eventBridge: EventBridgeConfiguration;
	}
	export interface PutCaseEventConfigurationRequestFormProperties {
	}
	export function CreatePutCaseEventConfigurationRequestFormGroup() {
		return new FormGroup<PutCaseEventConfigurationRequestFormProperties>({
		});

	}

	export interface SearchCasesRequest {
		fields?: Array<FieldIdentifier>;
		filter?: CaseFilter;
		maxResults?: number | null;
		nextToken?: string;
		searchTerm?: string;
		sorts?: Array<Sort>;
	}
	export interface SearchCasesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		searchTerm: FormControl<string | null | undefined>,
	}
	export function CreateSearchCasesRequestFormGroup() {
		return new FormGroup<SearchCasesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			searchTerm: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchRelatedItemsRequest {
		filters?: Array<RelatedItemTypeFilter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface SearchRelatedItemsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchRelatedItemsRequestFormGroup() {
		return new FormGroup<SearchRelatedItemsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: Tags;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateCaseRequest {

		/** Required */
		fields: Array<FieldValue>;
	}
	export interface UpdateCaseRequestFormProperties {
	}
	export function CreateUpdateCaseRequestFormGroup() {
		return new FormGroup<UpdateCaseRequestFormProperties>({
		});

	}

	export interface UpdateFieldRequest {
		description?: string;
		name?: string;
	}
	export interface UpdateFieldRequestFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFieldRequestFormGroup() {
		return new FormGroup<UpdateFieldRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLayoutRequest {
		content?: LayoutContent;
		name?: string;
	}
	export interface UpdateLayoutRequestFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLayoutRequestFormGroup() {
		return new FormGroup<UpdateLayoutRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTemplateRequest {
		description?: string;
		layoutConfiguration?: LayoutConfiguration;
		name?: string;
		requiredFields?: Array<RequiredField>;
		status?: TemplateStatus;
	}
	export interface UpdateTemplateRequestFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<TemplateStatus | null | undefined>,
	}
	export function CreateUpdateTemplateRequestFormGroup() {
		return new FormGroup<UpdateTemplateRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TemplateStatus | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the description for the list of fields in the request parameters.
		 * Post domains/{domainId}/fields-batch
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @return {BatchGetFieldResponse} Success
		 */
		BatchGetField(domainId: string, requestBody: BatchGetFieldPostBody): Observable<BatchGetFieldResponse> {
			return this.http.post<BatchGetFieldResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)) + '/fields-batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates and updates a set of field options for a single select field in a Cases domain.
		 * Put domains/{domainId}/fields/{fieldId}/options
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @param {string} fieldId The unique identifier of a field.
		 *     Min length: 1    Max length: 500
		 * @return {BatchPutFieldOptionsResponse} Success
		 */
		BatchPutFieldOptions(domainId: string, fieldId: string, requestBody: BatchPutFieldOptionsPutBody): Observable<BatchPutFieldOptionsResponse> {
			return this.http.put<BatchPutFieldOptionsResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)) + '/fields/' + (fieldId == null ? '' : encodeURIComponent(fieldId)) + '/options', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a case in the specified Cases domain. Case system and custom fields are taken as an array id/value pairs with a declared data types.</p> <note> <p>The following fields are required when creating a case:</p> <pre><code> &lt;ul&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;customer_id&lt;/code&gt; - You must provide the full customer profile ARN in this format: &lt;code&gt;arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;title&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/note&gt; </code></pre>
		 * Post domains/{domainId}/cases
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @return {CreateCaseResponse} Success
		 */
		CreateCase(domainId: string, requestBody: CreateCasePostBody): Observable<CreateCaseResponse> {
			return this.http.post<CreateCaseResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)) + '/cases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a domain, which is a container for all case data, such as cases, fields, templates and layouts. Each Amazon Connect instance can be associated with only one Cases domain.</p> <important> <p>This will not associate your connect instance to Cases domain. Instead, use the Amazon Connect <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateIntegrationAssociation.html">CreateIntegrationAssociation</a> API. You need specific IAM permissions to successfully associate the Cases domain. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/required-permissions-iam-cases.html#onboard-cases-iam">Onboard to Cases</a>.</p> <pre><code> &lt;/important&gt; </code></pre>
		 * Post domains
		 * @return {CreateDomainResponse} Success
		 */
		CreateDomain(requestBody: CreateDomainPostBody): Observable<CreateDomainResponse> {
			return this.http.post<CreateDomainResponse>(this.baseUri + 'domains', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a field in the Cases domain. This field is used to define the case object model (that is, defines what data can be captured on cases) in a Cases domain.
		 * Post domains/{domainId}/fields
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @return {CreateFieldResponse} Success
		 */
		CreateField(domainId: string, requestBody: CreateFieldPostBody): Observable<CreateFieldResponse> {
			return this.http.post<CreateFieldResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)) + '/fields', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a layout in the Cases domain. Layouts define the following configuration in the top section and More Info tab of the Cases user interface:</p> <ul> <li> <p>Fields to display to the users</p> </li> <li> <p>Field ordering</p> </li> </ul> <note> <p>Title and Status fields cannot be part of layouts since they are not configurable.</p> </note>
		 * Post domains/{domainId}/layouts
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @return {CreateLayoutResponse} Success
		 */
		CreateLayout(domainId: string, requestBody: CreateLayoutPostBody): Observable<CreateLayoutResponse> {
			return this.http.post<CreateLayoutResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)) + '/layouts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a related item (comments, tasks, and contacts) and associates it with a case.</p> <note> <p>A Related Item is a resource that is associated with a case. It may or may not have an external identifier linking it to an external resource (for example, a <code>contactArn</code>). All Related Items have their own internal identifier, the <code>relatedItemArn</code>. Examples of related items include <code>comments</code> and <code>contacts</code>.</p> </note>
		 * Post domains/{domainId}/cases/{caseId}/related-items/
		 * @param {string} caseId A unique identifier of the case.
		 *     Min length: 1    Max length: 500
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @return {CreateRelatedItemResponse} Success
		 */
		CreateRelatedItem(caseId: string, domainId: string, requestBody: CreateRelatedItemPostBody): Observable<CreateRelatedItemResponse> {
			return this.http.post<CreateRelatedItemResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)) + '/cases/' + (caseId == null ? '' : encodeURIComponent(caseId)) + '/related-items/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a template in the Cases domain. This template is used to define the case object model (that is, to define what data can be captured on cases) in a Cases domain. A template must have a unique name within a domain, and it must reference existing field IDs and layout IDs. Additionally, multiple fields with same IDs are not allowed within the same Template. A template can be either Active or Inactive, as indicated by its status. Inactive templates cannot be used to create cases.
		 * Post domains/{domainId}/templates
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @return {CreateTemplateResponse} Success
		 */
		CreateTemplate(domainId: string, requestBody: CreateTemplatePostBody): Observable<CreateTemplateResponse> {
			return this.http.post<CreateTemplateResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)) + '/templates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a Cases domain.</p> <pre><code> &lt;note&gt; &lt;p&gt;After deleting your domain you must disassociate the deleted domain from your Amazon Connect instance with another API call before being able to use Cases again with this Amazon Connect instance. See &lt;a href=&quot;https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteIntegrationAssociation.html&quot;&gt;DeleteIntegrationAssociation&lt;/a&gt;.&lt;/p&gt; &lt;/note&gt; </code></pre>
		 * Delete domains/{domainId}
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @return {DeleteDomainResponse} Success
		 */
		DeleteDomain(domainId: string): Observable<DeleteDomainResponse> {
			return this.http.delete<DeleteDomainResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)), {});
		}

		/**
		 * Returns information about a specific domain if it exists.
		 * Post domains/{domainId}
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @return {GetDomainResponse} Success
		 */
		GetDomain(domainId: string): Observable<GetDomainResponse> {
			return this.http.post<GetDomainResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)), null, {});
		}

		/**
		 * Returns information about a specific case if it exists.
		 * Post domains/{domainId}/cases/{caseId}
		 * @param {string} caseId A unique identifier of the case.
		 *     Min length: 1    Max length: 500
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @param {string} nextToken Pagination token
		 * @return {GetCaseResponse} Success
		 */
		GetCase(caseId: string, domainId: string, nextToken: string | null | undefined, requestBody: GetCasePostBody): Observable<GetCaseResponse> {
			return this.http.post<GetCaseResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)) + '/cases/' + (caseId == null ? '' : encodeURIComponent(caseId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the values of fields on a case. Fields to be updated are received as an array of id/value pairs identical to the <code>CreateCase</code> input .</p> <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p>
		 * Put domains/{domainId}/cases/{caseId}
		 * @param {string} caseId A unique identifier of the case.
		 *     Min length: 1    Max length: 500
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @return {UpdateCaseResponse} Success
		 */
		UpdateCase(caseId: string, domainId: string, requestBody: UpdateCasePutBody): Observable<UpdateCaseResponse> {
			return this.http.put<UpdateCaseResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)) + '/cases/' + (caseId == null ? '' : encodeURIComponent(caseId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the case event publishing configuration.
		 * Post domains/{domainId}/case-event-configuration
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @return {GetCaseEventConfigurationResponse} Success
		 */
		GetCaseEventConfiguration(domainId: string): Observable<GetCaseEventConfigurationResponse> {
			return this.http.post<GetCaseEventConfigurationResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)) + '/case-event-configuration', null, {});
		}

		/**
		 * API for adding case event publishing configuration
		 * Put domains/{domainId}/case-event-configuration
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @return {PutCaseEventConfigurationResponse} Success
		 */
		PutCaseEventConfiguration(domainId: string, requestBody: PutCaseEventConfigurationPutBody): Observable<PutCaseEventConfigurationResponse> {
			return this.http.put<PutCaseEventConfigurationResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)) + '/case-event-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the details for the requested layout.
		 * Post domains/{domainId}/layouts/{layoutId}
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @param {string} layoutId The unique identifier of the layout.
		 *     Min length: 1    Max length: 500
		 * @return {GetLayoutResponse} Success
		 */
		GetLayout(domainId: string, layoutId: string): Observable<GetLayoutResponse> {
			return this.http.post<GetLayoutResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)) + '/layouts/' + (layoutId == null ? '' : encodeURIComponent(layoutId)), null, {});
		}

		/**
		 * <p>Updates the attributes of an existing layout.</p> <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p> <p>A <code>ValidationException</code> is returned when you add non-existent <code>fieldIds</code> to a layout.</p> <note> <p>Title and Status fields cannot be part of layouts because they are not configurable.</p> </note>
		 * Put domains/{domainId}/layouts/{layoutId}
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @param {string} layoutId The unique identifier of the layout.
		 *     Min length: 1    Max length: 500
		 * @return {UpdateLayoutResponse} Success
		 */
		UpdateLayout(domainId: string, layoutId: string, requestBody: UpdateLayoutPutBody): Observable<UpdateLayoutResponse> {
			return this.http.put<UpdateLayoutResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)) + '/layouts/' + (layoutId == null ? '' : encodeURIComponent(layoutId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the details for the requested template.
		 * Post domains/{domainId}/templates/{templateId}
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @param {string} templateId A unique identifier of a template.
		 *     Min length: 1    Max length: 500
		 * @return {GetTemplateResponse} Success
		 */
		GetTemplate(domainId: string, templateId: string): Observable<GetTemplateResponse> {
			return this.http.post<GetTemplateResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)) + '/templates/' + (templateId == null ? '' : encodeURIComponent(templateId)), null, {});
		}

		/**
		 * Updates the attributes of an existing template. The template attributes that can be modified include <code>name</code>, <code>description</code>, <code>layoutConfiguration</code>, <code>requiredFields</code>, and <code>status</code>. At least one of these attributes must not be null. If a null value is provided for a given attribute, that attribute is ignored and its current value is preserved.
		 * Put domains/{domainId}/templates/{templateId}
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @param {string} templateId A unique identifier for the template.
		 *     Min length: 1    Max length: 500
		 * @return {UpdateTemplateResponse} Success
		 */
		UpdateTemplate(domainId: string, templateId: string, requestBody: UpdateTemplatePutBody): Observable<UpdateTemplateResponse> {
			return this.http.put<UpdateTemplateResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)) + '/templates/' + (templateId == null ? '' : encodeURIComponent(templateId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists cases for a given contact.
		 * Post domains/{domainId}/list-cases-for-contact
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListCasesForContactResponse} Success
		 */
		ListCasesForContact(domainId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListCasesForContactPostBody): Observable<ListCasesForContactResponse> {
			return this.http.post<ListCasesForContactResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)) + '/list-cases-for-contact&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all cases domains in the Amazon Web Services account. Each list item is a condensed summary object of the domain.
		 * Post domains-list
		 * @param {number} maxResults The maximum number of results to return per page.
		 *     Minimum: 1    Maximum: 10
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 *     Min length: 0    Max length: 9000
		 * @return {ListDomainsResponse} Success
		 */
		ListDomains(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListDomainsResponse> {
			return this.http.post<ListDomainsResponse>(this.baseUri + 'domains-list?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), null, {});
		}

		/**
		 * Lists all of the field options for a field identifier in the domain.
		 * Post domains/{domainId}/fields/{fieldId}/options-list
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @param {string} fieldId The unique identifier of a field.
		 *     Min length: 1    Max length: 500
		 * @param {number} maxResults The maximum number of results to return per page.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 *     Min length: 0    Max length: 9000
		 * @param {Array<string>} values A list of <code>FieldOption</code> values to filter on for <code>ListFieldOptions</code>.
		 *     Minimum items: 0    Maximum items: 1
		 * @return {ListFieldOptionsResponse} Success
		 */
		ListFieldOptions(domainId: string, fieldId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, values: Array<string> | null | undefined): Observable<ListFieldOptionsResponse> {
			return this.http.post<ListFieldOptionsResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)) + '/fields/' + (fieldId == null ? '' : encodeURIComponent(fieldId)) + '/options-list&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&' + values?.map(z => `values=${encodeURIComponent(z)}`).join('&'), null, {});
		}

		/**
		 * Lists all fields in a Cases domain.
		 * Post domains/{domainId}/fields-list
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @param {number} maxResults The maximum number of results to return per page.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 *     Min length: 0    Max length: 9000
		 * @return {ListFieldsResponse} Success
		 */
		ListFields(domainId: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListFieldsResponse> {
			return this.http.post<ListFieldsResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)) + '/fields-list&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), null, {});
		}

		/**
		 * Lists all layouts in the given cases domain. Each list item is a condensed summary object of the layout.
		 * Post domains/{domainId}/layouts-list
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @param {number} maxResults The maximum number of results to return per page.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 *     Min length: 0    Max length: 9000
		 * @return {ListLayoutsResponse} Success
		 */
		ListLayouts(domainId: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListLayoutsResponse> {
			return this.http.post<ListLayoutsResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)) + '/layouts-list&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), null, {});
		}

		/**
		 * Lists tags for a resource.
		 * Get tags/{arn}
		 * @param {string} arn The Amazon Resource Name (ARN)
		 *     Min length: 1    Max length: 500
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(arn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * Adds tags to a resource.
		 * Post tags/{arn}
		 * @param {string} arn The Amazon Resource Name (ARN)
		 *     Min length: 1    Max length: 500
		 * @return {void} Success
		 */
		TagResource(arn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (arn == null ? '' : encodeURIComponent(arn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all of the templates in a Cases domain. Each list item is a condensed summary object of the template.
		 * Post domains/{domainId}/templates-list
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @param {number} maxResults The maximum number of results to return per page.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 *     Min length: 0    Max length: 9000
		 * @param {Array<TemplateStatus>} status A list of status values to filter on.
		 *     Minimum items: 1    Maximum items: 2
		 * @return {ListTemplatesResponse} Success
		 */
		ListTemplates(domainId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, status: Array<TemplateStatus> | null | undefined): Observable<ListTemplatesResponse> {
			return this.http.post<ListTemplatesResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)) + '/templates-list&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&' + status?.map(z => `status=${z}`).join('&'), null, {});
		}

		/**
		 * <p>Searches for cases within their associated Cases domain. Search results are returned as a paginated list of abridged case documents.</p> <note> <p>For <code>customer_id</code> you must provide the full customer profile ARN in this format: <code> arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID</code>. </p> </note>
		 * Post domains/{domainId}/cases-search
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchCasesResponse} Success
		 */
		SearchCases(domainId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: SearchCasesPostBody): Observable<SearchCasesResponse> {
			return this.http.post<SearchCasesResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)) + '/cases-search&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Searches for related items that are associated with a case.</p> <note> <p>If no filters are provided, this returns all related items associated with a case.</p> </note>
		 * Post domains/{domainId}/cases/{caseId}/related-items-search
		 * @param {string} caseId A unique identifier of the case.
		 *     Min length: 1    Max length: 500
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchRelatedItemsResponse} Success
		 */
		SearchRelatedItems(caseId: string, domainId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: SearchRelatedItemsPostBody): Observable<SearchRelatedItemsResponse> {
			return this.http.post<SearchRelatedItemsResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)) + '/cases/' + (caseId == null ? '' : encodeURIComponent(caseId)) + '/related-items-search&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Untags a resource.
		 * Delete tags/{arn}#tagKeys
		 * @param {string} arn The Amazon Resource Name (ARN)
		 *     Min length: 1    Max length: 500
		 * @param {Array<string>} tagKeys List of tag keys.
		 *     Minimum items: 0    Maximum items: 50
		 * @return {void} Success
		 */
		UntagResource(arn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (arn == null ? '' : encodeURIComponent(arn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the properties of an existing field.
		 * Put domains/{domainId}/fields/{fieldId}
		 * @param {string} domainId The unique identifier of the Cases domain. 
		 *     Min length: 1    Max length: 500
		 * @param {string} fieldId The unique identifier of a field.
		 *     Min length: 1    Max length: 500
		 * @return {UpdateFieldResponse} Success
		 */
		UpdateField(domainId: string, fieldId: string, requestBody: UpdateFieldPutBody): Observable<UpdateFieldResponse> {
			return this.http.put<UpdateFieldResponse>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)) + '/fields/' + (fieldId == null ? '' : encodeURIComponent(fieldId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface BatchGetFieldPostBody {

		/**
		 * A list of unique field identifiers.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		fields: Array<FieldIdentifier>;
	}
	export interface BatchGetFieldPostBodyFormProperties {
	}
	export function CreateBatchGetFieldPostBodyFormGroup() {
		return new FormGroup<BatchGetFieldPostBodyFormProperties>({
		});

	}

	export interface BatchPutFieldOptionsPutBody {

		/**
		 * A list of <code>FieldOption</code> objects.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		options: Array<FieldOption>;
	}
	export interface BatchPutFieldOptionsPutBodyFormProperties {
	}
	export function CreateBatchPutFieldOptionsPutBodyFormGroup() {
		return new FormGroup<BatchPutFieldOptionsPutBodyFormProperties>({
		});

	}

	export interface CreateCasePostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Min length: 0
		 * Max length: 64
		 */
		clientToken?: string | null;

		/**
		 * An array of objects with field ID (matching ListFields/DescribeField) and value union data.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		fields: Array<FieldValue>;

		/**
		 * A unique identifier of a template.
		 * Required
		 * Min length: 1
		 * Max length: 500
		 */
		templateId: string;
	}
	export interface CreateCasePostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Min length: 0
		 * Max length: 64
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * A unique identifier of a template.
		 * Required
		 * Min length: 1
		 * Max length: 500
		 */
		templateId: FormControl<string | null | undefined>,
	}
	export function CreateCreateCasePostBodyFormGroup() {
		return new FormGroup<CreateCasePostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			templateId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(500)]),
		});

	}

	export interface CreateDomainPostBody {

		/**
		 * The name for your Cases domain. It must be unique for your Amazon Web Services account.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: string;
	}
	export interface CreateDomainPostBodyFormProperties {

		/**
		 * The name for your Cases domain. It must be unique for your Amazon Web Services account.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainPostBodyFormGroup() {
		return new FormGroup<CreateDomainPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^.*[\S]$')]),
		});

	}

	export interface CreateFieldPostBody {

		/**
		 * The description of the field.
		 * Min length: 0
		 * Max length: 255
		 */
		description?: string | null;

		/**
		 * The name of the field.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: string;

		/**
		 * Defines the data type, some system constraints, and default display of the field.
		 * Required
		 */
		type: FieldType;
	}
	export interface CreateFieldPostBodyFormProperties {

		/**
		 * The description of the field.
		 * Min length: 0
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The name of the field.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Defines the data type, some system constraints, and default display of the field.
		 * Required
		 */
		type: FormControl<FieldType | null | undefined>,
	}
	export function CreateCreateFieldPostBodyFormGroup() {
		return new FormGroup<CreateFieldPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^.*[\S]$')]),
			type: new FormControl<FieldType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateLayoutPostBody {

		/**
		 * Object to store union of different versions of layout content.
		 * Required
		 */
		content: CreateLayoutPostBodyContent;

		/**
		 * The name of the layout. It must be unique for the Cases domain.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: string;
	}
	export interface CreateLayoutPostBodyFormProperties {

		/**
		 * The name of the layout. It must be unique for the Cases domain.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateLayoutPostBodyFormGroup() {
		return new FormGroup<CreateLayoutPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^.*[\S]$')]),
		});

	}

	export interface CreateLayoutPostBodyContent {
		basic?: BasicLayout;
	}
	export interface CreateLayoutPostBodyContentFormProperties {
	}
	export function CreateCreateLayoutPostBodyContentFormGroup() {
		return new FormGroup<CreateLayoutPostBodyContentFormProperties>({
		});

	}

	export interface CreateRelatedItemPostBody {

		/**
		 * Represents the content of a related item to be created.
		 * Required
		 */
		content: CreateRelatedItemPostBodyContent;

		/**
		 * The type of a related item.
		 * Required
		 */
		type: RelatedItemType;
	}
	export interface CreateRelatedItemPostBodyFormProperties {

		/**
		 * The type of a related item.
		 * Required
		 */
		type: FormControl<RelatedItemType | null | undefined>,
	}
	export function CreateCreateRelatedItemPostBodyFormGroup() {
		return new FormGroup<CreateRelatedItemPostBodyFormProperties>({
			type: new FormControl<RelatedItemType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRelatedItemPostBodyContent {
		comment?: CommentContent;
		contact?: Contact;
	}
	export interface CreateRelatedItemPostBodyContentFormProperties {
	}
	export function CreateCreateRelatedItemPostBodyContentFormGroup() {
		return new FormGroup<CreateRelatedItemPostBodyContentFormProperties>({
		});

	}

	export interface CreateTemplatePostBody {

		/**
		 * A brief description of the template.
		 * Min length: 0
		 * Max length: 255
		 */
		description?: string | null;

		/** Object to store configuration of layouts associated to the template. */
		layoutConfiguration?: CreateTemplatePostBodyLayoutConfiguration;

		/**
		 * A name for the template. It must be unique per domain.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: string;

		/**
		 * A list of fields that must contain a value for a case to be successfully created with this template.
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		requiredFields?: Array<RequiredField>;

		/** The status of the template. */
		status?: TemplateStatus | null;
	}
	export interface CreateTemplatePostBodyFormProperties {

		/**
		 * A brief description of the template.
		 * Min length: 0
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * A name for the template. It must be unique per domain.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,

		/** The status of the template. */
		status: FormControl<TemplateStatus | null | undefined>,
	}
	export function CreateCreateTemplatePostBodyFormGroup() {
		return new FormGroup<CreateTemplatePostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^.*[\S]$')]),
			status: new FormControl<TemplateStatus | null | undefined>(undefined),
		});

	}

	export interface CreateTemplatePostBodyLayoutConfiguration {
		defaultLayout?: string;
	}
	export interface CreateTemplatePostBodyLayoutConfigurationFormProperties {
		defaultLayout: FormControl<string | null | undefined>,
	}
	export function CreateCreateTemplatePostBodyLayoutConfigurationFormGroup() {
		return new FormGroup<CreateTemplatePostBodyLayoutConfigurationFormProperties>({
			defaultLayout: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCasePostBody {

		/**
		 * A list of unique field identifiers.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		fields: Array<FieldIdentifier>;

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Min length: 0
		 * Max length: 9000
		 */
		nextToken?: string | null;
	}
	export interface GetCasePostBodyFormProperties {

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Min length: 0
		 * Max length: 9000
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCasePostBodyFormGroup() {
		return new FormGroup<GetCasePostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(9000)]),
		});

	}

	export interface UpdateCasePutBody {

		/**
		 * An array of objects with <code>fieldId</code> (matching ListFields/DescribeField) and value union data, structured identical to <code>CreateCase</code>.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		fields: Array<FieldValue>;
	}
	export interface UpdateCasePutBodyFormProperties {
	}
	export function CreateUpdateCasePutBodyFormGroup() {
		return new FormGroup<UpdateCasePutBodyFormProperties>({
		});

	}

	export interface PutCaseEventConfigurationPutBody {

		/**
		 * Configuration to enable EventBridge case event delivery and determine what data is delivered.
		 * Required
		 */
		eventBridge: PutCaseEventConfigurationPutBodyEventBridge;
	}
	export interface PutCaseEventConfigurationPutBodyFormProperties {
	}
	export function CreatePutCaseEventConfigurationPutBodyFormGroup() {
		return new FormGroup<PutCaseEventConfigurationPutBodyFormProperties>({
		});

	}

	export interface PutCaseEventConfigurationPutBodyEventBridge {
		enabled?: boolean | null;
		includedData?: EventIncludedData;
	}
	export interface PutCaseEventConfigurationPutBodyEventBridgeFormProperties {
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutCaseEventConfigurationPutBodyEventBridgeFormGroup() {
		return new FormGroup<PutCaseEventConfigurationPutBodyEventBridgeFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateLayoutPutBody {

		/** Object to store union of different versions of layout content. */
		content?: UpdateLayoutPutBodyContent;

		/**
		 * The name of the layout. It must be unique per domain.
		 * Min length: 1
		 * Max length: 100
		 */
		name?: string | null;
	}
	export interface UpdateLayoutPutBodyFormProperties {

		/**
		 * The name of the layout. It must be unique per domain.
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLayoutPutBodyFormGroup() {
		return new FormGroup<UpdateLayoutPutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^.*[\S]$')]),
		});

	}

	export interface UpdateLayoutPutBodyContent {
		basic?: BasicLayout;
	}
	export interface UpdateLayoutPutBodyContentFormProperties {
	}
	export function CreateUpdateLayoutPutBodyContentFormGroup() {
		return new FormGroup<UpdateLayoutPutBodyContentFormProperties>({
		});

	}

	export interface UpdateTemplatePutBody {

		/**
		 * A brief description of the template.
		 * Min length: 0
		 * Max length: 255
		 */
		description?: string | null;

		/** Object to store configuration of layouts associated to the template. */
		layoutConfiguration?: UpdateTemplatePutBodyLayoutConfiguration;

		/**
		 * The name of the template. It must be unique per domain.
		 * Min length: 1
		 * Max length: 100
		 */
		name?: string | null;

		/**
		 * A list of fields that must contain a value for a case to be successfully created with this template.
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		requiredFields?: Array<RequiredField>;

		/** The status of the template. */
		status?: TemplateStatus | null;
	}
	export interface UpdateTemplatePutBodyFormProperties {

		/**
		 * A brief description of the template.
		 * Min length: 0
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The name of the template. It must be unique per domain.
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,

		/** The status of the template. */
		status: FormControl<TemplateStatus | null | undefined>,
	}
	export function CreateUpdateTemplatePutBodyFormGroup() {
		return new FormGroup<UpdateTemplatePutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^.*[\S]$')]),
			status: new FormControl<TemplateStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateTemplatePutBodyLayoutConfiguration {
		defaultLayout?: string;
	}
	export interface UpdateTemplatePutBodyLayoutConfigurationFormProperties {
		defaultLayout: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTemplatePutBodyLayoutConfigurationFormGroup() {
		return new FormGroup<UpdateTemplatePutBodyLayoutConfigurationFormProperties>({
			defaultLayout: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCasesForContactPostBody {

		/**
		 * A unique identifier of a contact in Amazon Connect.
		 * Required
		 * Min length: 1
		 * Max length: 500
		 */
		contactArn: string;

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 10
		 */
		maxResults?: number | null;

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Min length: 0
		 * Max length: 9000
		 */
		nextToken?: string | null;
	}
	export interface ListCasesForContactPostBodyFormProperties {

		/**
		 * A unique identifier of a contact in Amazon Connect.
		 * Required
		 * Min length: 1
		 * Max length: 500
		 */
		contactArn: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 10
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Min length: 0
		 * Max length: 9000
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCasesForContactPostBodyFormGroup() {
		return new FormGroup<ListCasesForContactPostBodyFormProperties>({
			contactArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(500)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(9000)]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchCasesPostBody {

		/**
		 * The list of field identifiers to be returned as part of the response.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		fields?: Array<FieldIdentifier>;

		/** A filter for cases. Only one value can be provided. */
		filter?: SearchCasesPostBodyFilter;

		/**
		 * The maximum number of cases to return. The current maximum supported value is 25. This is also the default value when no other value is provided.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Min length: 0
		 * Max length: 9000
		 */
		nextToken?: string | null;

		/**
		 * A word or phrase used to perform a quick search.
		 * Min length: 0
		 * Max length: 255
		 */
		searchTerm?: string | null;

		/**
		 * A list of sorts where each sort specifies a field and their sort order to be applied to the results.
		 * Minimum items: 0
		 * Maximum items: 2
		 */
		sorts?: Array<Sort>;
	}
	export interface SearchCasesPostBodyFormProperties {

		/**
		 * The maximum number of cases to return. The current maximum supported value is 25. This is also the default value when no other value is provided.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Min length: 0
		 * Max length: 9000
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * A word or phrase used to perform a quick search.
		 * Min length: 0
		 * Max length: 255
		 */
		searchTerm: FormControl<string | null | undefined>,
	}
	export function CreateSearchCasesPostBodyFormGroup() {
		return new FormGroup<SearchCasesPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(9000)]),
			searchTerm: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
		});

	}

	export interface SearchCasesPostBodyFilter {
		andAll?: Array<CaseFilter>;
		field?: FieldFilter;

		/** A filter for cases. Only one value can be provided. */
		not?: CaseFilter;
		orAll?: Array<CaseFilter>;
	}
	export interface SearchCasesPostBodyFilterFormProperties {
	}
	export function CreateSearchCasesPostBodyFilterFormGroup() {
		return new FormGroup<SearchCasesPostBodyFilterFormProperties>({
		});

	}

	export interface SearchRelatedItemsPostBody {

		/**
		 * The list of types of related items and their parameters to use for filtering.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		filters?: Array<RelatedItemTypeFilter>;

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Min length: 0
		 * Max length: 9000
		 */
		nextToken?: string | null;
	}
	export interface SearchRelatedItemsPostBodyFormProperties {

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Min length: 0
		 * Max length: 9000
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchRelatedItemsPostBodyFormGroup() {
		return new FormGroup<SearchRelatedItemsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(9000)]),
		});

	}

	export interface UpdateFieldPutBody {

		/**
		 * The description of a field.
		 * Min length: 0
		 * Max length: 255
		 */
		description?: string | null;

		/**
		 * The name of the field.
		 * Min length: 1
		 * Max length: 100
		 */
		name?: string | null;
	}
	export interface UpdateFieldPutBodyFormProperties {

		/**
		 * The description of a field.
		 * Min length: 0
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The name of the field.
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFieldPutBodyFormGroup() {
		return new FormGroup<UpdateFieldPutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^.*[\S]$')]),
		});

	}

}

