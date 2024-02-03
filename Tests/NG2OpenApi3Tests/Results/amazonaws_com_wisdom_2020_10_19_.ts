import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateAssistantResponse {
		assistant?: AssistantData;
	}
	export interface CreateAssistantResponseFormProperties {
	}
	export function CreateCreateAssistantResponseFormGroup() {
		return new FormGroup<CreateAssistantResponseFormProperties>({
		});

	}


	/** The assistant data. */
	export interface AssistantData {

		/** Required */
		assistantArn: string;

		/** Required */
		assistantId: string;
		description?: string;
		integrationConfiguration?: AssistantIntegrationConfiguration;

		/** Required */
		name: string;
		serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

		/** Required */
		status: AssistantStatus;
		tags?: Tags;

		/** Required */
		type: AssistantType;
	}

	/** The assistant data. */
	export interface AssistantDataFormProperties {

		/** Required */
		assistantArn: FormControl<string | null | undefined>,

		/** Required */
		assistantId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<AssistantStatus | null | undefined>,

		/** Required */
		type: FormControl<AssistantType | null | undefined>,
	}
	export function CreateAssistantDataFormGroup() {
		return new FormGroup<AssistantDataFormProperties>({
			assistantArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assistantId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<AssistantStatus | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AssistantType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration information for the Wisdom assistant integration. */
	export interface AssistantIntegrationConfiguration {
		topicIntegrationArn?: string;
	}

	/** The configuration information for the Wisdom assistant integration. */
	export interface AssistantIntegrationConfigurationFormProperties {
		topicIntegrationArn: FormControl<string | null | undefined>,
	}
	export function CreateAssistantIntegrationConfigurationFormGroup() {
		return new FormGroup<AssistantIntegrationConfigurationFormProperties>({
			topicIntegrationArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The KMS key used for encryption. */
	export interface ServerSideEncryptionConfiguration {
		kmsKeyId?: string;
	}

	/** The KMS key used for encryption. */
	export interface ServerSideEncryptionConfigurationFormProperties {
		kmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateServerSideEncryptionConfigurationFormGroup() {
		return new FormGroup<ServerSideEncryptionConfigurationFormProperties>({
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssistantStatus { CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS', CREATE_FAILED = 'CREATE_FAILED', ACTIVE = 'ACTIVE', DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS', DELETE_FAILED = 'DELETE_FAILED', DELETED = 'DELETED' }

	export interface Tags {
	}
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}

	export enum AssistantType { AGENT = 'AGENT' }

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
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

	export interface CreateAssistantAssociationResponse {
		assistantAssociation?: AssistantAssociationData;
	}
	export interface CreateAssistantAssociationResponseFormProperties {
	}
	export function CreateCreateAssistantAssociationResponseFormGroup() {
		return new FormGroup<CreateAssistantAssociationResponseFormProperties>({
		});

	}


	/** Information about the assistant association. */
	export interface AssistantAssociationData {

		/** Required */
		assistantArn: string;

		/** Required */
		assistantAssociationArn: string;

		/** Required */
		assistantAssociationId: string;

		/** Required */
		assistantId: string;

		/** Required */
		associationData: AssistantAssociationOutputData;

		/** Required */
		associationType: AssociationType;
		tags?: Tags;
	}

	/** Information about the assistant association. */
	export interface AssistantAssociationDataFormProperties {

		/** Required */
		assistantArn: FormControl<string | null | undefined>,

		/** Required */
		assistantAssociationArn: FormControl<string | null | undefined>,

		/** Required */
		assistantAssociationId: FormControl<string | null | undefined>,

		/** Required */
		assistantId: FormControl<string | null | undefined>,

		/** Required */
		associationType: FormControl<AssociationType | null | undefined>,
	}
	export function CreateAssistantAssociationDataFormGroup() {
		return new FormGroup<AssistantAssociationDataFormProperties>({
			assistantArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assistantAssociationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assistantAssociationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assistantId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			associationType: new FormControl<AssociationType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The data that is output as a result of the assistant association. */
	export interface AssistantAssociationOutputData {
		knowledgeBaseAssociation?: KnowledgeBaseAssociationData;
	}

	/** The data that is output as a result of the assistant association. */
	export interface AssistantAssociationOutputDataFormProperties {
	}
	export function CreateAssistantAssociationOutputDataFormGroup() {
		return new FormGroup<AssistantAssociationOutputDataFormProperties>({
		});

	}


	/** Association information about the knowledge base. */
	export interface KnowledgeBaseAssociationData {
		knowledgeBaseArn?: string;
		knowledgeBaseId?: string;
	}

	/** Association information about the knowledge base. */
	export interface KnowledgeBaseAssociationDataFormProperties {
		knowledgeBaseArn: FormControl<string | null | undefined>,
		knowledgeBaseId: FormControl<string | null | undefined>,
	}
	export function CreateKnowledgeBaseAssociationDataFormGroup() {
		return new FormGroup<KnowledgeBaseAssociationDataFormProperties>({
			knowledgeBaseArn: new FormControl<string | null | undefined>(undefined),
			knowledgeBaseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssociationType { KNOWLEDGE_BASE = 'KNOWLEDGE_BASE' }

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface CreateContentResponse {
		content?: ContentData;
	}
	export interface CreateContentResponseFormProperties {
	}
	export function CreateCreateContentResponseFormGroup() {
		return new FormGroup<CreateContentResponseFormProperties>({
		});

	}


	/** Information about the content. */
	export interface ContentData {

		/** Required */
		contentArn: string;

		/** Required */
		contentId: string;

		/** Required */
		contentType: string;

		/** Required */
		knowledgeBaseArn: string;

		/** Required */
		knowledgeBaseId: string;
		linkOutUri?: string;

		/** Required */
		metadata: ContentMetadata;

		/** Required */
		name: string;

		/** Required */
		revisionId: string;

		/** Required */
		status: ContentStatus;
		tags?: Tags;

		/** Required */
		title: string;

		/** Required */
		url: string;

		/** Required */
		urlExpiry: Date;
	}

	/** Information about the content. */
	export interface ContentDataFormProperties {

		/** Required */
		contentArn: FormControl<string | null | undefined>,

		/** Required */
		contentId: FormControl<string | null | undefined>,

		/** Required */
		contentType: FormControl<string | null | undefined>,

		/** Required */
		knowledgeBaseArn: FormControl<string | null | undefined>,

		/** Required */
		knowledgeBaseId: FormControl<string | null | undefined>,
		linkOutUri: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		revisionId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ContentStatus | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,

		/** Required */
		urlExpiry: FormControl<Date | null | undefined>,
	}
	export function CreateContentDataFormGroup() {
		return new FormGroup<ContentDataFormProperties>({
			contentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			contentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			contentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			knowledgeBaseArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			knowledgeBaseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkOutUri: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ContentStatus | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			urlExpiry: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ContentMetadata {
	}
	export interface ContentMetadataFormProperties {
	}
	export function CreateContentMetadataFormGroup() {
		return new FormGroup<ContentMetadataFormProperties>({
		});

	}

	export enum ContentStatus { CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS', CREATE_FAILED = 'CREATE_FAILED', ACTIVE = 'ACTIVE', DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS', DELETE_FAILED = 'DELETE_FAILED', DELETED = 'DELETED', UPDATE_FAILED = 'UPDATE_FAILED' }

	export interface CreateKnowledgeBaseResponse {
		knowledgeBase?: KnowledgeBaseData;
	}
	export interface CreateKnowledgeBaseResponseFormProperties {
	}
	export function CreateCreateKnowledgeBaseResponseFormGroup() {
		return new FormGroup<CreateKnowledgeBaseResponseFormProperties>({
		});

	}


	/** Information about the knowledge base. */
	export interface KnowledgeBaseData {
		description?: string;

		/** Required */
		knowledgeBaseArn: string;

		/** Required */
		knowledgeBaseId: string;

		/** Required */
		knowledgeBaseType: KnowledgeBaseType;
		lastContentModificationTime?: Date;

		/** Required */
		name: string;
		renderingConfiguration?: RenderingConfiguration;
		serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
		sourceConfiguration?: SourceConfiguration;

		/** Required */
		status: AssistantStatus;
		tags?: Tags;
	}

	/** Information about the knowledge base. */
	export interface KnowledgeBaseDataFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		knowledgeBaseArn: FormControl<string | null | undefined>,

		/** Required */
		knowledgeBaseId: FormControl<string | null | undefined>,

		/** Required */
		knowledgeBaseType: FormControl<KnowledgeBaseType | null | undefined>,
		lastContentModificationTime: FormControl<Date | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<AssistantStatus | null | undefined>,
	}
	export function CreateKnowledgeBaseDataFormGroup() {
		return new FormGroup<KnowledgeBaseDataFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			knowledgeBaseArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			knowledgeBaseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			knowledgeBaseType: new FormControl<KnowledgeBaseType | null | undefined>(undefined, [Validators.required]),
			lastContentModificationTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<AssistantStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum KnowledgeBaseType { EXTERNAL = 'EXTERNAL', CUSTOM = 'CUSTOM' }


	/** Information about how to render the content. */
	export interface RenderingConfiguration {
		templateUri?: string;
	}

	/** Information about how to render the content. */
	export interface RenderingConfigurationFormProperties {
		templateUri: FormControl<string | null | undefined>,
	}
	export function CreateRenderingConfigurationFormGroup() {
		return new FormGroup<RenderingConfigurationFormProperties>({
			templateUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration information about the external data source. */
	export interface SourceConfiguration {
		appIntegrations?: AppIntegrationsConfiguration;
	}

	/** Configuration information about the external data source. */
	export interface SourceConfigurationFormProperties {
	}
	export function CreateSourceConfigurationFormGroup() {
		return new FormGroup<SourceConfigurationFormProperties>({
		});

	}


	/** Configuration information for Amazon AppIntegrations to automatically ingest content. */
	export interface AppIntegrationsConfiguration {

		/** Required */
		appIntegrationArn: string;
		objectFields?: Array<string>;
	}

	/** Configuration information for Amazon AppIntegrations to automatically ingest content. */
	export interface AppIntegrationsConfigurationFormProperties {

		/** Required */
		appIntegrationArn: FormControl<string | null | undefined>,
	}
	export function CreateAppIntegrationsConfigurationFormGroup() {
		return new FormGroup<AppIntegrationsConfigurationFormProperties>({
			appIntegrationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSessionResponse {
		session?: SessionData;
	}
	export interface CreateSessionResponseFormProperties {
	}
	export function CreateCreateSessionResponseFormGroup() {
		return new FormGroup<CreateSessionResponseFormProperties>({
		});

	}


	/** Information about the session. */
	export interface SessionData {
		description?: string;
		integrationConfiguration?: SessionIntegrationConfiguration;

		/** Required */
		name: string;

		/** Required */
		sessionArn: string;

		/** Required */
		sessionId: string;
		tags?: Tags;
	}

	/** Information about the session. */
	export interface SessionDataFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		sessionArn: FormControl<string | null | undefined>,

		/** Required */
		sessionId: FormControl<string | null | undefined>,
	}
	export function CreateSessionDataFormGroup() {
		return new FormGroup<SessionDataFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sessionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration information for the session integration. */
	export interface SessionIntegrationConfiguration {
		topicIntegrationArn?: string;
	}

	/** The configuration information for the session integration. */
	export interface SessionIntegrationConfigurationFormProperties {
		topicIntegrationArn: FormControl<string | null | undefined>,
	}
	export function CreateSessionIntegrationConfigurationFormGroup() {
		return new FormGroup<SessionIntegrationConfigurationFormProperties>({
			topicIntegrationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAssistantResponse {
	}
	export interface DeleteAssistantResponseFormProperties {
	}
	export function CreateDeleteAssistantResponseFormGroup() {
		return new FormGroup<DeleteAssistantResponseFormProperties>({
		});

	}

	export interface DeleteAssistantAssociationResponse {
	}
	export interface DeleteAssistantAssociationResponseFormProperties {
	}
	export function CreateDeleteAssistantAssociationResponseFormGroup() {
		return new FormGroup<DeleteAssistantAssociationResponseFormProperties>({
		});

	}

	export interface DeleteContentResponse {
	}
	export interface DeleteContentResponseFormProperties {
	}
	export function CreateDeleteContentResponseFormGroup() {
		return new FormGroup<DeleteContentResponseFormProperties>({
		});

	}

	export interface DeleteKnowledgeBaseResponse {
	}
	export interface DeleteKnowledgeBaseResponseFormProperties {
	}
	export function CreateDeleteKnowledgeBaseResponseFormGroup() {
		return new FormGroup<DeleteKnowledgeBaseResponseFormProperties>({
		});

	}

	export interface GetAssistantResponse {
		assistant?: AssistantData;
	}
	export interface GetAssistantResponseFormProperties {
	}
	export function CreateGetAssistantResponseFormGroup() {
		return new FormGroup<GetAssistantResponseFormProperties>({
		});

	}

	export interface GetAssistantAssociationResponse {
		assistantAssociation?: AssistantAssociationData;
	}
	export interface GetAssistantAssociationResponseFormProperties {
	}
	export function CreateGetAssistantAssociationResponseFormGroup() {
		return new FormGroup<GetAssistantAssociationResponseFormProperties>({
		});

	}

	export interface GetContentResponse {
		content?: ContentData;
	}
	export interface GetContentResponseFormProperties {
	}
	export function CreateGetContentResponseFormGroup() {
		return new FormGroup<GetContentResponseFormProperties>({
		});

	}

	export interface GetContentSummaryResponse {
		contentSummary?: ContentSummary;
	}
	export interface GetContentSummaryResponseFormProperties {
	}
	export function CreateGetContentSummaryResponseFormGroup() {
		return new FormGroup<GetContentSummaryResponseFormProperties>({
		});

	}


	/** Summary information about the content. */
	export interface ContentSummary {

		/** Required */
		contentArn: string;

		/** Required */
		contentId: string;

		/** Required */
		contentType: string;

		/** Required */
		knowledgeBaseArn: string;

		/** Required */
		knowledgeBaseId: string;

		/** Required */
		metadata: ContentMetadata;

		/** Required */
		name: string;

		/** Required */
		revisionId: string;

		/** Required */
		status: ContentStatus;
		tags?: Tags;

		/** Required */
		title: string;
	}

	/** Summary information about the content. */
	export interface ContentSummaryFormProperties {

		/** Required */
		contentArn: FormControl<string | null | undefined>,

		/** Required */
		contentId: FormControl<string | null | undefined>,

		/** Required */
		contentType: FormControl<string | null | undefined>,

		/** Required */
		knowledgeBaseArn: FormControl<string | null | undefined>,

		/** Required */
		knowledgeBaseId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		revisionId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ContentStatus | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateContentSummaryFormGroup() {
		return new FormGroup<ContentSummaryFormProperties>({
			contentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			contentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			contentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			knowledgeBaseArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			knowledgeBaseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ContentStatus | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetKnowledgeBaseResponse {
		knowledgeBase?: KnowledgeBaseData;
	}
	export interface GetKnowledgeBaseResponseFormProperties {
	}
	export function CreateGetKnowledgeBaseResponseFormGroup() {
		return new FormGroup<GetKnowledgeBaseResponseFormProperties>({
		});

	}

	export interface GetRecommendationsResponse {

		/** Required */
		recommendations: Array<RecommendationData>;
		triggers?: Array<RecommendationTrigger>;
	}
	export interface GetRecommendationsResponseFormProperties {
	}
	export function CreateGetRecommendationsResponseFormGroup() {
		return new FormGroup<GetRecommendationsResponseFormProperties>({
		});

	}


	/** Information about the recommendation. */
	export interface RecommendationData {

		/** Required */
		document: Document;

		/** Required */
		recommendationId: string;
		relevanceLevel?: RelevanceLevel;
		relevanceScore?: number | null;
		type?: RecommendationType;
	}

	/** Information about the recommendation. */
	export interface RecommendationDataFormProperties {

		/** Required */
		recommendationId: FormControl<string | null | undefined>,
		relevanceLevel: FormControl<RelevanceLevel | null | undefined>,
		relevanceScore: FormControl<number | null | undefined>,
		type: FormControl<RecommendationType | null | undefined>,
	}
	export function CreateRecommendationDataFormGroup() {
		return new FormGroup<RecommendationDataFormProperties>({
			recommendationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			relevanceLevel: new FormControl<RelevanceLevel | null | undefined>(undefined),
			relevanceScore: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<RecommendationType | null | undefined>(undefined),
		});

	}


	/** The document. */
	export interface Document {

		/** Required */
		contentReference: ContentReference;
		excerpt?: DocumentText;
		title?: DocumentText;
	}

	/** The document. */
	export interface DocumentFormProperties {
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
		});

	}


	/** Reference information about the content. */
	export interface ContentReference {
		contentArn?: string;
		contentId?: string;
		knowledgeBaseArn?: string;
		knowledgeBaseId?: string;
	}

	/** Reference information about the content. */
	export interface ContentReferenceFormProperties {
		contentArn: FormControl<string | null | undefined>,
		contentId: FormControl<string | null | undefined>,
		knowledgeBaseArn: FormControl<string | null | undefined>,
		knowledgeBaseId: FormControl<string | null | undefined>,
	}
	export function CreateContentReferenceFormGroup() {
		return new FormGroup<ContentReferenceFormProperties>({
			contentArn: new FormControl<string | null | undefined>(undefined),
			contentId: new FormControl<string | null | undefined>(undefined),
			knowledgeBaseArn: new FormControl<string | null | undefined>(undefined),
			knowledgeBaseId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The text of the document. */
	export interface DocumentText {
		highlights?: Array<Highlight>;
		text?: string;
	}

	/** The text of the document. */
	export interface DocumentTextFormProperties {
		text: FormControl<string | null | undefined>,
	}
	export function CreateDocumentTextFormGroup() {
		return new FormGroup<DocumentTextFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Offset specification to describe highlighting of document excerpts for rendering search results and recommendations. */
	export interface Highlight {
		beginOffsetInclusive?: number | null;
		endOffsetExclusive?: number | null;
	}

	/** Offset specification to describe highlighting of document excerpts for rendering search results and recommendations. */
	export interface HighlightFormProperties {
		beginOffsetInclusive: FormControl<number | null | undefined>,
		endOffsetExclusive: FormControl<number | null | undefined>,
	}
	export function CreateHighlightFormGroup() {
		return new FormGroup<HighlightFormProperties>({
			beginOffsetInclusive: new FormControl<number | null | undefined>(undefined),
			endOffsetExclusive: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum RelevanceLevel { HIGH = 'HIGH', MEDIUM = 'MEDIUM', LOW = 'LOW' }

	export enum RecommendationType { KNOWLEDGE_CONTENT = 'KNOWLEDGE_CONTENT' }


	/** A recommendation trigger provides context on the event that produced the referenced recommendations. Recommendations are only referenced in <code>recommendationIds</code> by a single RecommendationTrigger. */
	export interface RecommendationTrigger {

		/** Required */
		data: RecommendationTriggerData;

		/** Required */
		id: string;

		/** Required */
		recommendationIds: Array<string>;

		/** Required */
		source: RecommendationSourceType;

		/** Required */
		type: RecommendationTriggerType;
	}

	/** A recommendation trigger provides context on the event that produced the referenced recommendations. Recommendations are only referenced in <code>recommendationIds</code> by a single RecommendationTrigger. */
	export interface RecommendationTriggerFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		source: FormControl<RecommendationSourceType | null | undefined>,

		/** Required */
		type: FormControl<RecommendationTriggerType | null | undefined>,
	}
	export function CreateRecommendationTriggerFormGroup() {
		return new FormGroup<RecommendationTriggerFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<RecommendationSourceType | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<RecommendationTriggerType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A union type containing information related to the trigger. */
	export interface RecommendationTriggerData {
		query?: QueryRecommendationTriggerData;
	}

	/** A union type containing information related to the trigger. */
	export interface RecommendationTriggerDataFormProperties {
	}
	export function CreateRecommendationTriggerDataFormGroup() {
		return new FormGroup<RecommendationTriggerDataFormProperties>({
		});

	}


	/** Data associated with the QUERY RecommendationTriggerType. */
	export interface QueryRecommendationTriggerData {
		text?: string;
	}

	/** Data associated with the QUERY RecommendationTriggerType. */
	export interface QueryRecommendationTriggerDataFormProperties {
		text: FormControl<string | null | undefined>,
	}
	export function CreateQueryRecommendationTriggerDataFormGroup() {
		return new FormGroup<QueryRecommendationTriggerDataFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RecommendationSourceType { ISSUE_DETECTION = 'ISSUE_DETECTION', RULE_EVALUATION = 'RULE_EVALUATION', OTHER = 'OTHER' }

	export enum RecommendationTriggerType { QUERY = 'QUERY' }

	export interface GetSessionResponse {
		session?: SessionData;
	}
	export interface GetSessionResponseFormProperties {
	}
	export function CreateGetSessionResponseFormGroup() {
		return new FormGroup<GetSessionResponseFormProperties>({
		});

	}

	export interface ListAssistantAssociationsResponse {

		/** Required */
		assistantAssociationSummaries: Array<AssistantAssociationSummary>;
		nextToken?: string;
	}
	export interface ListAssistantAssociationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssistantAssociationsResponseFormGroup() {
		return new FormGroup<ListAssistantAssociationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about the assistant association. */
	export interface AssistantAssociationSummary {

		/** Required */
		assistantArn: string;

		/** Required */
		assistantAssociationArn: string;

		/** Required */
		assistantAssociationId: string;

		/** Required */
		assistantId: string;

		/** Required */
		associationData: AssistantAssociationOutputData;

		/** Required */
		associationType: AssociationType;
		tags?: Tags;
	}

	/** Summary information about the assistant association. */
	export interface AssistantAssociationSummaryFormProperties {

		/** Required */
		assistantArn: FormControl<string | null | undefined>,

		/** Required */
		assistantAssociationArn: FormControl<string | null | undefined>,

		/** Required */
		assistantAssociationId: FormControl<string | null | undefined>,

		/** Required */
		assistantId: FormControl<string | null | undefined>,

		/** Required */
		associationType: FormControl<AssociationType | null | undefined>,
	}
	export function CreateAssistantAssociationSummaryFormGroup() {
		return new FormGroup<AssistantAssociationSummaryFormProperties>({
			assistantArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assistantAssociationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assistantAssociationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assistantId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			associationType: new FormControl<AssociationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAssistantsResponse {

		/** Required */
		assistantSummaries: Array<AssistantSummary>;
		nextToken?: string;
	}
	export interface ListAssistantsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssistantsResponseFormGroup() {
		return new FormGroup<ListAssistantsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about the assistant. */
	export interface AssistantSummary {

		/** Required */
		assistantArn: string;

		/** Required */
		assistantId: string;
		description?: string;
		integrationConfiguration?: AssistantIntegrationConfiguration;

		/** Required */
		name: string;
		serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

		/** Required */
		status: AssistantStatus;
		tags?: Tags;

		/** Required */
		type: AssistantType;
	}

	/** Summary information about the assistant. */
	export interface AssistantSummaryFormProperties {

		/** Required */
		assistantArn: FormControl<string | null | undefined>,

		/** Required */
		assistantId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<AssistantStatus | null | undefined>,

		/** Required */
		type: FormControl<AssistantType | null | undefined>,
	}
	export function CreateAssistantSummaryFormGroup() {
		return new FormGroup<AssistantSummaryFormProperties>({
			assistantArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assistantId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<AssistantStatus | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AssistantType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListContentsResponse {

		/** Required */
		contentSummaries: Array<ContentSummary>;
		nextToken?: string;
	}
	export interface ListContentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListContentsResponseFormGroup() {
		return new FormGroup<ListContentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListKnowledgeBasesResponse {

		/** Required */
		knowledgeBaseSummaries: Array<KnowledgeBaseSummary>;
		nextToken?: string;
	}
	export interface ListKnowledgeBasesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListKnowledgeBasesResponseFormGroup() {
		return new FormGroup<ListKnowledgeBasesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about the knowledge base. */
	export interface KnowledgeBaseSummary {
		description?: string;

		/** Required */
		knowledgeBaseArn: string;

		/** Required */
		knowledgeBaseId: string;

		/** Required */
		knowledgeBaseType: KnowledgeBaseType;

		/** Required */
		name: string;
		renderingConfiguration?: RenderingConfiguration;
		serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
		sourceConfiguration?: SourceConfiguration;

		/** Required */
		status: AssistantStatus;
		tags?: Tags;
	}

	/** Summary information about the knowledge base. */
	export interface KnowledgeBaseSummaryFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		knowledgeBaseArn: FormControl<string | null | undefined>,

		/** Required */
		knowledgeBaseId: FormControl<string | null | undefined>,

		/** Required */
		knowledgeBaseType: FormControl<KnowledgeBaseType | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<AssistantStatus | null | undefined>,
	}
	export function CreateKnowledgeBaseSummaryFormGroup() {
		return new FormGroup<KnowledgeBaseSummaryFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			knowledgeBaseArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			knowledgeBaseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			knowledgeBaseType: new FormControl<KnowledgeBaseType | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<AssistantStatus | null | undefined>(undefined, [Validators.required]),
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

	export interface NotifyRecommendationsReceivedResponse {
		errors?: Array<NotifyRecommendationsReceivedError>;
		recommendationIds?: Array<string>;
	}
	export interface NotifyRecommendationsReceivedResponseFormProperties {
	}
	export function CreateNotifyRecommendationsReceivedResponseFormGroup() {
		return new FormGroup<NotifyRecommendationsReceivedResponseFormProperties>({
		});

	}


	/** An error occurred when creating a recommendation. */
	export interface NotifyRecommendationsReceivedError {
		message?: string;
		recommendationId?: string;
	}

	/** An error occurred when creating a recommendation. */
	export interface NotifyRecommendationsReceivedErrorFormProperties {
		message: FormControl<string | null | undefined>,
		recommendationId: FormControl<string | null | undefined>,
	}
	export function CreateNotifyRecommendationsReceivedErrorFormGroup() {
		return new FormGroup<NotifyRecommendationsReceivedErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			recommendationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryAssistantResponse {
		nextToken?: string;

		/** Required */
		results: Array<ResultData>;
	}
	export interface QueryAssistantResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateQueryAssistantResponseFormGroup() {
		return new FormGroup<QueryAssistantResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the result. */
	export interface ResultData {

		/** Required */
		document: Document;
		relevanceScore?: number | null;

		/** Required */
		resultId: string;
	}

	/** Information about the result. */
	export interface ResultDataFormProperties {
		relevanceScore: FormControl<number | null | undefined>,

		/** Required */
		resultId: FormControl<string | null | undefined>,
	}
	export function CreateResultDataFormGroup() {
		return new FormGroup<ResultDataFormProperties>({
			relevanceScore: new FormControl<number | null | undefined>(undefined),
			resultId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoveKnowledgeBaseTemplateUriResponse {
	}
	export interface RemoveKnowledgeBaseTemplateUriResponseFormProperties {
	}
	export function CreateRemoveKnowledgeBaseTemplateUriResponseFormGroup() {
		return new FormGroup<RemoveKnowledgeBaseTemplateUriResponseFormProperties>({
		});

	}

	export interface SearchContentResponse {

		/** Required */
		contentSummaries: Array<ContentSummary>;
		nextToken?: string;
	}
	export interface SearchContentResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchContentResponseFormGroup() {
		return new FormGroup<SearchContentResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A search filter. */
	export interface Filter {

		/** Required */
		field: FilterField;

		/** Required */
		operator: FilterOperator;

		/** Required */
		value: string;
	}

	/** A search filter. */
	export interface FilterFormProperties {

		/** Required */
		field: FormControl<FilterField | null | undefined>,

		/** Required */
		operator: FormControl<FilterOperator | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			field: new FormControl<FilterField | null | undefined>(undefined, [Validators.required]),
			operator: new FormControl<FilterOperator | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FilterField { NAME = 'NAME' }

	export enum FilterOperator { EQUALS = 'EQUALS' }

	export interface SearchSessionsResponse {
		nextToken?: string;

		/** Required */
		sessionSummaries: Array<SessionSummary>;
	}
	export interface SearchSessionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchSessionsResponseFormGroup() {
		return new FormGroup<SearchSessionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about the session. */
	export interface SessionSummary {

		/** Required */
		assistantArn: string;

		/** Required */
		assistantId: string;

		/** Required */
		sessionArn: string;

		/** Required */
		sessionId: string;
	}

	/** Summary information about the session. */
	export interface SessionSummaryFormProperties {

		/** Required */
		assistantArn: FormControl<string | null | undefined>,

		/** Required */
		assistantId: FormControl<string | null | undefined>,

		/** Required */
		sessionArn: FormControl<string | null | undefined>,

		/** Required */
		sessionId: FormControl<string | null | undefined>,
	}
	export function CreateSessionSummaryFormGroup() {
		return new FormGroup<SessionSummaryFormProperties>({
			assistantArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assistantId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sessionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartContentUploadResponse {

		/** Required */
		headersToInclude: Headers;

		/** Required */
		uploadId: string;

		/** Required */
		url: string;

		/** Required */
		urlExpiry: Date;
	}
	export interface StartContentUploadResponseFormProperties {

		/** Required */
		uploadId: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,

		/** Required */
		urlExpiry: FormControl<Date | null | undefined>,
	}
	export function CreateStartContentUploadResponseFormGroup() {
		return new FormGroup<StartContentUploadResponseFormProperties>({
			uploadId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			urlExpiry: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Headers {
	}
	export interface HeadersFormProperties {
	}
	export function CreateHeadersFormGroup() {
		return new FormGroup<HeadersFormProperties>({
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateContentResponse {
		content?: ContentData;
	}
	export interface UpdateContentResponseFormProperties {
	}
	export function CreateUpdateContentResponseFormGroup() {
		return new FormGroup<UpdateContentResponseFormProperties>({
		});

	}

	export interface PreconditionFailedException {
	}
	export interface PreconditionFailedExceptionFormProperties {
	}
	export function CreatePreconditionFailedExceptionFormGroup() {
		return new FormGroup<PreconditionFailedExceptionFormProperties>({
		});

	}

	export interface UpdateKnowledgeBaseTemplateUriResponse {
		knowledgeBase?: KnowledgeBaseData;
	}
	export interface UpdateKnowledgeBaseTemplateUriResponseFormProperties {
	}
	export function CreateUpdateKnowledgeBaseTemplateUriResponseFormGroup() {
		return new FormGroup<UpdateKnowledgeBaseTemplateUriResponseFormProperties>({
		});

	}


	/** The data that is input into Wisdom as a result of the assistant association. */
	export interface AssistantAssociationInputData {
		knowledgeBaseId?: string;
	}

	/** The data that is input into Wisdom as a result of the assistant association. */
	export interface AssistantAssociationInputDataFormProperties {
		knowledgeBaseId: FormControl<string | null | undefined>,
	}
	export function CreateAssistantAssociationInputDataFormGroup() {
		return new FormGroup<AssistantAssociationInputDataFormProperties>({
			knowledgeBaseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAssistantAssociationRequest {

		/** Required */
		association: AssistantAssociationInputData;

		/** Required */
		associationType: AssociationType;
		clientToken?: string;
		tags?: Tags;
	}
	export interface CreateAssistantAssociationRequestFormProperties {

		/** Required */
		associationType: FormControl<AssociationType | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssistantAssociationRequestFormGroup() {
		return new FormGroup<CreateAssistantAssociationRequestFormProperties>({
			associationType: new FormControl<AssociationType | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAssistantRequest {
		clientToken?: string;
		description?: string;

		/** Required */
		name: string;
		serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
		tags?: Tags;

		/** Required */
		type: AssistantType;
	}
	export interface CreateAssistantRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AssistantType | null | undefined>,
	}
	export function CreateCreateAssistantRequestFormGroup() {
		return new FormGroup<CreateAssistantRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AssistantType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateContentRequest {
		clientToken?: string;
		metadata?: ContentMetadata;

		/** Required */
		name: string;
		overrideLinkOutUri?: string;
		tags?: Tags;
		title?: string;

		/** Required */
		uploadId: string;
	}
	export interface CreateContentRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		overrideLinkOutUri: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Required */
		uploadId: FormControl<string | null | undefined>,
	}
	export function CreateCreateContentRequestFormGroup() {
		return new FormGroup<CreateContentRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			overrideLinkOutUri: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			uploadId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateKnowledgeBaseRequest {
		clientToken?: string;
		description?: string;

		/** Required */
		knowledgeBaseType: KnowledgeBaseType;

		/** Required */
		name: string;
		renderingConfiguration?: RenderingConfiguration;
		serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
		sourceConfiguration?: SourceConfiguration;
		tags?: Tags;
	}
	export interface CreateKnowledgeBaseRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		knowledgeBaseType: FormControl<KnowledgeBaseType | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateKnowledgeBaseRequestFormGroup() {
		return new FormGroup<CreateKnowledgeBaseRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			knowledgeBaseType: new FormControl<KnowledgeBaseType | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSessionRequest {
		clientToken?: string;
		description?: string;

		/** Required */
		name: string;
		tags?: Tags;
	}
	export interface CreateSessionRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateSessionRequestFormGroup() {
		return new FormGroup<CreateSessionRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAssistantAssociationRequest {
	}
	export interface DeleteAssistantAssociationRequestFormProperties {
	}
	export function CreateDeleteAssistantAssociationRequestFormGroup() {
		return new FormGroup<DeleteAssistantAssociationRequestFormProperties>({
		});

	}

	export interface DeleteAssistantRequest {
	}
	export interface DeleteAssistantRequestFormProperties {
	}
	export function CreateDeleteAssistantRequestFormGroup() {
		return new FormGroup<DeleteAssistantRequestFormProperties>({
		});

	}

	export interface DeleteContentRequest {
	}
	export interface DeleteContentRequestFormProperties {
	}
	export function CreateDeleteContentRequestFormGroup() {
		return new FormGroup<DeleteContentRequestFormProperties>({
		});

	}

	export interface DeleteKnowledgeBaseRequest {
	}
	export interface DeleteKnowledgeBaseRequestFormProperties {
	}
	export function CreateDeleteKnowledgeBaseRequestFormGroup() {
		return new FormGroup<DeleteKnowledgeBaseRequestFormProperties>({
		});

	}

	export interface GetAssistantAssociationRequest {
	}
	export interface GetAssistantAssociationRequestFormProperties {
	}
	export function CreateGetAssistantAssociationRequestFormGroup() {
		return new FormGroup<GetAssistantAssociationRequestFormProperties>({
		});

	}

	export interface GetAssistantRequest {
	}
	export interface GetAssistantRequestFormProperties {
	}
	export function CreateGetAssistantRequestFormGroup() {
		return new FormGroup<GetAssistantRequestFormProperties>({
		});

	}

	export interface GetContentRequest {
	}
	export interface GetContentRequestFormProperties {
	}
	export function CreateGetContentRequestFormGroup() {
		return new FormGroup<GetContentRequestFormProperties>({
		});

	}

	export interface GetContentSummaryRequest {
	}
	export interface GetContentSummaryRequestFormProperties {
	}
	export function CreateGetContentSummaryRequestFormGroup() {
		return new FormGroup<GetContentSummaryRequestFormProperties>({
		});

	}

	export interface GetKnowledgeBaseRequest {
	}
	export interface GetKnowledgeBaseRequestFormProperties {
	}
	export function CreateGetKnowledgeBaseRequestFormGroup() {
		return new FormGroup<GetKnowledgeBaseRequestFormProperties>({
		});

	}

	export interface GetRecommendationsRequest {
	}
	export interface GetRecommendationsRequestFormProperties {
	}
	export function CreateGetRecommendationsRequestFormGroup() {
		return new FormGroup<GetRecommendationsRequestFormProperties>({
		});

	}

	export interface GetSessionRequest {
	}
	export interface GetSessionRequestFormProperties {
	}
	export function CreateGetSessionRequestFormGroup() {
		return new FormGroup<GetSessionRequestFormProperties>({
		});

	}

	export enum KnowledgeBaseStatus { CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS', CREATE_FAILED = 'CREATE_FAILED', ACTIVE = 'ACTIVE', DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS', DELETE_FAILED = 'DELETE_FAILED', DELETED = 'DELETED' }

	export interface ListAssistantAssociationsRequest {
	}
	export interface ListAssistantAssociationsRequestFormProperties {
	}
	export function CreateListAssistantAssociationsRequestFormGroup() {
		return new FormGroup<ListAssistantAssociationsRequestFormProperties>({
		});

	}

	export interface ListAssistantsRequest {
	}
	export interface ListAssistantsRequestFormProperties {
	}
	export function CreateListAssistantsRequestFormGroup() {
		return new FormGroup<ListAssistantsRequestFormProperties>({
		});

	}

	export interface ListContentsRequest {
	}
	export interface ListContentsRequestFormProperties {
	}
	export function CreateListContentsRequestFormGroup() {
		return new FormGroup<ListContentsRequestFormProperties>({
		});

	}

	export interface ListKnowledgeBasesRequest {
	}
	export interface ListKnowledgeBasesRequestFormProperties {
	}
	export function CreateListKnowledgeBasesRequestFormGroup() {
		return new FormGroup<ListKnowledgeBasesRequestFormProperties>({
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

	export interface NotifyRecommendationsReceivedRequest {

		/** Required */
		recommendationIds: Array<string>;
	}
	export interface NotifyRecommendationsReceivedRequestFormProperties {
	}
	export function CreateNotifyRecommendationsReceivedRequestFormGroup() {
		return new FormGroup<NotifyRecommendationsReceivedRequestFormProperties>({
		});

	}

	export interface QueryAssistantRequest {
		maxResults?: number | null;
		nextToken?: string;

		/** Required */
		queryText: string;
	}
	export interface QueryAssistantRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		queryText: FormControl<string | null | undefined>,
	}
	export function CreateQueryAssistantRequestFormGroup() {
		return new FormGroup<QueryAssistantRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			queryText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoveKnowledgeBaseTemplateUriRequest {
	}
	export interface RemoveKnowledgeBaseTemplateUriRequestFormProperties {
	}
	export function CreateRemoveKnowledgeBaseTemplateUriRequestFormGroup() {
		return new FormGroup<RemoveKnowledgeBaseTemplateUriRequestFormProperties>({
		});

	}


	/** The search expression. */
	export interface SearchExpression {

		/** Required */
		filters: Array<Filter>;
	}

	/** The search expression. */
	export interface SearchExpressionFormProperties {
	}
	export function CreateSearchExpressionFormGroup() {
		return new FormGroup<SearchExpressionFormProperties>({
		});

	}

	export interface SearchContentRequest {

		/** Required */
		searchExpression: SearchExpression;
	}
	export interface SearchContentRequestFormProperties {
	}
	export function CreateSearchContentRequestFormGroup() {
		return new FormGroup<SearchContentRequestFormProperties>({
		});

	}

	export interface SearchSessionsRequest {

		/** Required */
		searchExpression: SearchExpression;
	}
	export interface SearchSessionsRequestFormProperties {
	}
	export function CreateSearchSessionsRequestFormGroup() {
		return new FormGroup<SearchSessionsRequestFormProperties>({
		});

	}

	export interface StartContentUploadRequest {

		/** Required */
		contentType: string;
	}
	export interface StartContentUploadRequestFormProperties {

		/** Required */
		contentType: FormControl<string | null | undefined>,
	}
	export function CreateStartContentUploadRequestFormGroup() {
		return new FormGroup<StartContentUploadRequestFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UpdateContentRequest {
		metadata?: ContentMetadata;
		overrideLinkOutUri?: string;
		removeOverrideLinkOutUri?: boolean | null;
		revisionId?: string;
		title?: string;
		uploadId?: string;
	}
	export interface UpdateContentRequestFormProperties {
		overrideLinkOutUri: FormControl<string | null | undefined>,
		removeOverrideLinkOutUri: FormControl<boolean | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		uploadId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateContentRequestFormGroup() {
		return new FormGroup<UpdateContentRequestFormProperties>({
			overrideLinkOutUri: new FormControl<string | null | undefined>(undefined),
			removeOverrideLinkOutUri: new FormControl<boolean | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			uploadId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateKnowledgeBaseTemplateUriRequest {

		/** Required */
		templateUri: string;
	}
	export interface UpdateKnowledgeBaseTemplateUriRequestFormProperties {

		/** Required */
		templateUri: FormControl<string | null | undefined>,
	}
	export function CreateUpdateKnowledgeBaseTemplateUriRequestFormGroup() {
		return new FormGroup<UpdateKnowledgeBaseTemplateUriRequestFormProperties>({
			templateUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates an Amazon Connect Wisdom assistant.
		 * Post assistants
		 * @return {CreateAssistantResponse} Success
		 */
		CreateAssistant(requestBody: CreateAssistantPostBody): Observable<CreateAssistantResponse> {
			return this.http.post<CreateAssistantResponse>(this.baseUri + 'assistants', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about assistants.
		 * Get assistants
		 * @param {number} maxResults The maximum number of results to return per page.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @return {ListAssistantsResponse} Success
		 */
		ListAssistants(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListAssistantsResponse> {
			return this.http.get<ListAssistantsResponse>(this.baseUri + 'assistants?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates an association between an Amazon Connect Wisdom assistant and another resource. Currently, the only supported association is with a knowledge base. An assistant can have only a single association.
		 * Post assistants/{assistantId}/associations
		 * @param {string} assistantId The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @return {CreateAssistantAssociationResponse} Success
		 */
		CreateAssistantAssociation(assistantId: string, requestBody: CreateAssistantAssociationPostBody): Observable<CreateAssistantAssociationResponse> {
			return this.http.post<CreateAssistantAssociationResponse>(this.baseUri + 'assistants/' + (assistantId == null ? '' : encodeURIComponent(assistantId)) + '/associations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about assistant associations.
		 * Get assistants/{assistantId}/associations
		 * @param {string} assistantId The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @param {number} maxResults The maximum number of results to return per page.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @return {ListAssistantAssociationsResponse} Success
		 */
		ListAssistantAssociations(assistantId: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListAssistantAssociationsResponse> {
			return this.http.get<ListAssistantAssociationsResponse>(this.baseUri + 'assistants/' + (assistantId == null ? '' : encodeURIComponent(assistantId)) + '/associations&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates Wisdom content. Before to calling this API, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a> to upload an asset.
		 * Post knowledgeBases/{knowledgeBaseId}/contents
		 * @param {string} knowledgeBaseId The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @return {CreateContentResponse} Success
		 */
		CreateContent(knowledgeBaseId: string, requestBody: CreateContentPostBody): Observable<CreateContentResponse> {
			return this.http.post<CreateContentResponse>(this.baseUri + 'knowledgeBases/' + (knowledgeBaseId == null ? '' : encodeURIComponent(knowledgeBaseId)) + '/contents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the content.
		 * Get knowledgeBases/{knowledgeBaseId}/contents
		 * @param {string} knowledgeBaseId The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @param {number} maxResults The maximum number of results to return per page.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @return {ListContentsResponse} Success
		 */
		ListContents(knowledgeBaseId: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListContentsResponse> {
			return this.http.get<ListContentsResponse>(this.baseUri + 'knowledgeBases/' + (knowledgeBaseId == null ? '' : encodeURIComponent(knowledgeBaseId)) + '/contents&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a knowledge base.</p> <note> <p>When using this API, you cannot reuse <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegrations with external knowledge bases such as Salesforce and ServiceNow. If you do, you'll get an <code>InvalidRequestException</code> error. </p> <p>For example, you're programmatically managing your external knowledge base, and you want to add or remove one of the fields that is being ingested from Salesforce. Do the following:</p> <ol> <li> <p>Call <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteKnowledgeBase.html">DeleteKnowledgeBase</a>.</p> </li> <li> <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a>.</p> </li> <li> <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> to recreate the DataIntegration or a create different one.</p> </li> <li> <p>Call CreateKnowledgeBase.</p> </li> </ol> </note>
		 * Post knowledgeBases
		 * @return {CreateKnowledgeBaseResponse} Success
		 */
		CreateKnowledgeBase(requestBody: CreateKnowledgeBasePostBody): Observable<CreateKnowledgeBaseResponse> {
			return this.http.post<CreateKnowledgeBaseResponse>(this.baseUri + 'knowledgeBases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the knowledge bases.
		 * Get knowledgeBases
		 * @param {number} maxResults The maximum number of results to return per page.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @return {ListKnowledgeBasesResponse} Success
		 */
		ListKnowledgeBases(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListKnowledgeBasesResponse> {
			return this.http.get<ListKnowledgeBasesResponse>(this.baseUri + 'knowledgeBases?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a session. A session is a contextual container used for generating recommendations. Amazon Connect creates a new Wisdom session for each contact on which Wisdom is enabled.
		 * Post assistants/{assistantId}/sessions
		 * @param {string} assistantId The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @return {CreateSessionResponse} Success
		 */
		CreateSession(assistantId: string, requestBody: CreateSessionPostBody): Observable<CreateSessionResponse> {
			return this.http.post<CreateSessionResponse>(this.baseUri + 'assistants/' + (assistantId == null ? '' : encodeURIComponent(assistantId)) + '/sessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an assistant.
		 * Delete assistants/{assistantId}
		 * @param {string} assistantId The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @return {void} 
		 */
		DeleteAssistant(assistantId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'assistants/' + (assistantId == null ? '' : encodeURIComponent(assistantId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about an assistant.
		 * Get assistants/{assistantId}
		 * @param {string} assistantId The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @return {GetAssistantResponse} Success
		 */
		GetAssistant(assistantId: string): Observable<GetAssistantResponse> {
			return this.http.get<GetAssistantResponse>(this.baseUri + 'assistants/' + (assistantId == null ? '' : encodeURIComponent(assistantId)), {});
		}

		/**
		 * Deletes an assistant association.
		 * Delete assistants/{assistantId}/associations/{assistantAssociationId}
		 * @param {string} assistantAssociationId The identifier of the assistant association. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @param {string} assistantId The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @return {void} 
		 */
		DeleteAssistantAssociation(assistantAssociationId: string, assistantId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'assistants/' + (assistantId == null ? '' : encodeURIComponent(assistantId)) + '/associations/' + (assistantAssociationId == null ? '' : encodeURIComponent(assistantAssociationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about an assistant association.
		 * Get assistants/{assistantId}/associations/{assistantAssociationId}
		 * @param {string} assistantAssociationId The identifier of the assistant association. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @param {string} assistantId The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @return {GetAssistantAssociationResponse} Success
		 */
		GetAssistantAssociation(assistantAssociationId: string, assistantId: string): Observable<GetAssistantAssociationResponse> {
			return this.http.get<GetAssistantAssociationResponse>(this.baseUri + 'assistants/' + (assistantId == null ? '' : encodeURIComponent(assistantId)) + '/associations/' + (assistantAssociationId == null ? '' : encodeURIComponent(assistantAssociationId)), {});
		}

		/**
		 * Deletes the content.
		 * Delete knowledgeBases/{knowledgeBaseId}/contents/{contentId}
		 * @param {string} contentId The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @param {string} knowledgeBaseId The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @return {void} 
		 */
		DeleteContent(contentId: string, knowledgeBaseId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'knowledgeBases/' + (knowledgeBaseId == null ? '' : encodeURIComponent(knowledgeBaseId)) + '/contents/' + (contentId == null ? '' : encodeURIComponent(contentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves content, including a pre-signed URL to download the content.
		 * Get knowledgeBases/{knowledgeBaseId}/contents/{contentId}
		 * @param {string} contentId The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @param {string} knowledgeBaseId The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @return {GetContentResponse} Success
		 */
		GetContent(contentId: string, knowledgeBaseId: string): Observable<GetContentResponse> {
			return this.http.get<GetContentResponse>(this.baseUri + 'knowledgeBases/' + (knowledgeBaseId == null ? '' : encodeURIComponent(knowledgeBaseId)) + '/contents/' + (contentId == null ? '' : encodeURIComponent(contentId)), {});
		}

		/**
		 * Updates information about the content.
		 * Post knowledgeBases/{knowledgeBaseId}/contents/{contentId}
		 * @param {string} contentId The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @param {string} knowledgeBaseId The identifier of the knowledge base. Can be either the ID or the ARN
		 * @return {UpdateContentResponse} Success
		 */
		UpdateContent(contentId: string, knowledgeBaseId: string, requestBody: UpdateContentPostBody): Observable<UpdateContentResponse> {
			return this.http.post<UpdateContentResponse>(this.baseUri + 'knowledgeBases/' + (knowledgeBaseId == null ? '' : encodeURIComponent(knowledgeBaseId)) + '/contents/' + (contentId == null ? '' : encodeURIComponent(contentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the knowledge base.</p> <note> <p>When you use this API to delete an external knowledge base such as Salesforce or ServiceNow, you must also delete the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegration. This is because you can't reuse the DataIntegration after it's been associated with an external knowledge base. However, you can delete and recreate it. See <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a> and <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> in the <i>Amazon AppIntegrations API Reference</i>.</p> </note>
		 * Delete knowledgeBases/{knowledgeBaseId}
		 * @param {string} knowledgeBaseId The knowledge base to delete content from. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @return {void} 
		 */
		DeleteKnowledgeBase(knowledgeBaseId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'knowledgeBases/' + (knowledgeBaseId == null ? '' : encodeURIComponent(knowledgeBaseId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the knowledge base.
		 * Get knowledgeBases/{knowledgeBaseId}
		 * @param {string} knowledgeBaseId The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @return {GetKnowledgeBaseResponse} Success
		 */
		GetKnowledgeBase(knowledgeBaseId: string): Observable<GetKnowledgeBaseResponse> {
			return this.http.get<GetKnowledgeBaseResponse>(this.baseUri + 'knowledgeBases/' + (knowledgeBaseId == null ? '' : encodeURIComponent(knowledgeBaseId)), {});
		}

		/**
		 * Retrieves summary information about the content.
		 * Get knowledgeBases/{knowledgeBaseId}/contents/{contentId}/summary
		 * @param {string} contentId The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @param {string} knowledgeBaseId The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @return {GetContentSummaryResponse} Success
		 */
		GetContentSummary(contentId: string, knowledgeBaseId: string): Observable<GetContentSummaryResponse> {
			return this.http.get<GetContentSummaryResponse>(this.baseUri + 'knowledgeBases/' + (knowledgeBaseId == null ? '' : encodeURIComponent(knowledgeBaseId)) + '/contents/' + (contentId == null ? '' : encodeURIComponent(contentId)) + '/summary', {});
		}

		/**
		 * Retrieves recommendations for the specified session. To avoid retrieving the same recommendations in subsequent calls, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_NotifyRecommendationsReceived.html">NotifyRecommendationsReceived</a>. This API supports long-polling behavior with the <code>waitTimeSeconds</code> parameter. Short poll is the default behavior and only returns recommendations already available. To perform a manual query against an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_QueryAssistant.html">QueryAssistant</a>.
		 * Get assistants/{assistantId}/sessions/{sessionId}/recommendations
		 * @param {string} assistantId The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @param {number} maxResults The maximum number of results to return per page.
		 * @param {string} sessionId The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @param {number} waitTimeSeconds The duration (in seconds) for which the call waits for a recommendation to be made available before returning. If a recommendation is available, the call returns sooner than <code>WaitTimeSeconds</code>. If no messages are available and the wait time expires, the call returns successfully with an empty list.
		 * @return {GetRecommendationsResponse} Success
		 */
		GetRecommendations(assistantId: string, maxResults: number | null | undefined, sessionId: string, waitTimeSeconds: number | null | undefined): Observable<GetRecommendationsResponse> {
			return this.http.get<GetRecommendationsResponse>(this.baseUri + 'assistants/' + (assistantId == null ? '' : encodeURIComponent(assistantId)) + '/sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)) + '/recommendations&maxResults=' + maxResults + '&waitTimeSeconds=' + waitTimeSeconds, {});
		}

		/**
		 * Retrieves information for a specified session.
		 * Get assistants/{assistantId}/sessions/{sessionId}
		 * @param {string} assistantId The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @param {string} sessionId The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @return {GetSessionResponse} Success
		 */
		GetSession(assistantId: string, sessionId: string): Observable<GetSessionResponse> {
			return this.http.get<GetSessionResponse>(this.baseUri + 'assistants/' + (assistantId == null ? '' : encodeURIComponent(assistantId)) + '/sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)), {});
		}

		/**
		 * Lists the tags for the specified resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds the specified tags to the specified resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified recommendations from the specified assistant's queue of newly available recommendations. You can use this API in conjunction with <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a> and a <code>waitTimeSeconds</code> input for long-polling behavior and avoiding duplicate recommendations.
		 * Post assistants/{assistantId}/sessions/{sessionId}/recommendations/notify
		 * @param {string} assistantId The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @param {string} sessionId The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @return {NotifyRecommendationsReceivedResponse} Success
		 */
		NotifyRecommendationsReceived(assistantId: string, sessionId: string, requestBody: NotifyRecommendationsReceivedPostBody): Observable<NotifyRecommendationsReceivedResponse> {
			return this.http.post<NotifyRecommendationsReceivedResponse>(this.baseUri + 'assistants/' + (assistantId == null ? '' : encodeURIComponent(assistantId)) + '/sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)) + '/recommendations/notify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Performs a manual search against the specified assistant. To retrieve recommendations for an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a>.
		 * Post assistants/{assistantId}/query
		 * @param {string} assistantId The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {QueryAssistantResponse} Success
		 */
		QueryAssistant(assistantId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: QueryAssistantPostBody): Observable<QueryAssistantResponse> {
			return this.http.post<QueryAssistantResponse>(this.baseUri + 'assistants/' + (assistantId == null ? '' : encodeURIComponent(assistantId)) + '/query&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a URI template from a knowledge base.
		 * Delete knowledgeBases/{knowledgeBaseId}/templateUri
		 * @param {string} knowledgeBaseId The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @return {void} 
		 */
		RemoveKnowledgeBaseTemplateUri(knowledgeBaseId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'knowledgeBases/' + (knowledgeBaseId == null ? '' : encodeURIComponent(knowledgeBaseId)) + '/templateUri', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the template URI of a knowledge base. This is only supported for knowledge bases of type EXTERNAL. Include a single variable in <code>${variable}</code> format; this interpolated by Wisdom using ingested content. For example, if you ingest a Salesforce article, it has an <code>Id</code> value, and you can set the template URI to <code>https://myInstanceName.lightning.force.com/lightning/r/Knowledge__kav/*${Id}view</code>.
		 * Post knowledgeBases/{knowledgeBaseId}/templateUri
		 * @param {string} knowledgeBaseId The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @return {UpdateKnowledgeBaseTemplateUriResponse} Success
		 */
		UpdateKnowledgeBaseTemplateUri(knowledgeBaseId: string, requestBody: UpdateKnowledgeBaseTemplateUriPostBody): Observable<UpdateKnowledgeBaseTemplateUriResponse> {
			return this.http.post<UpdateKnowledgeBaseTemplateUriResponse>(this.baseUri + 'knowledgeBases/' + (knowledgeBaseId == null ? '' : encodeURIComponent(knowledgeBaseId)) + '/templateUri', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches for content in a specified knowledge base. Can be used to get a specific content resource by its name.
		 * Post knowledgeBases/{knowledgeBaseId}/search
		 * @param {string} knowledgeBaseId The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @param {number} maxResults The maximum number of results to return per page.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @return {SearchContentResponse} Success
		 */
		SearchContent(knowledgeBaseId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, requestBody: SearchContentPostBody): Observable<SearchContentResponse> {
			return this.http.post<SearchContentResponse>(this.baseUri + 'knowledgeBases/' + (knowledgeBaseId == null ? '' : encodeURIComponent(knowledgeBaseId)) + '/search&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches for sessions.
		 * Post assistants/{assistantId}/searchSessions
		 * @param {string} assistantId The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @param {number} maxResults The maximum number of results to return per page.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @return {SearchSessionsResponse} Success
		 */
		SearchSessions(assistantId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, requestBody: SearchSessionsPostBody): Observable<SearchSessionsResponse> {
			return this.http.post<SearchSessionsResponse>(this.baseUri + 'assistants/' + (assistantId == null ? '' : encodeURIComponent(assistantId)) + '/searchSessions&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a URL to upload content to a knowledge base. To upload content, first make a PUT request to the returned URL with your file, making sure to include the required headers. Then use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateContent.html">CreateContent</a> to finalize the content creation process or <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateContent.html">UpdateContent</a> to modify an existing resource. You can only upload content to a knowledge base of type CUSTOM.
		 * Post knowledgeBases/{knowledgeBaseId}/upload
		 * @param {string} knowledgeBaseId The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
		 * @return {StartContentUploadResponse} Success
		 */
		StartContentUpload(knowledgeBaseId: string, requestBody: StartContentUploadPostBody): Observable<StartContentUploadResponse> {
			return this.http.post<StartContentUploadResponse>(this.baseUri + 'knowledgeBases/' + (knowledgeBaseId == null ? '' : encodeURIComponent(knowledgeBaseId)) + '/upload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified tags from the specified resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @param {Array<string>} tagKeys The tag keys.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateAssistantPostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 4096
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The description of the assistant.
		 * Max length: 255
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * The name of the assistant.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/** The KMS key used for encryption. */
		serverSideEncryptionConfiguration?: CreateAssistantPostBodyServerSideEncryptionConfiguration;

		/** The tags used to organize, track, or control access for this resource. */
		tags?: {[id: string]: string };

		/**
		 * The type of assistant.
		 * Required
		 */
		type: AssistantType;
	}
	export interface CreateAssistantPostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 4096
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The description of the assistant.
		 * Max length: 255
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The name of the assistant.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The type of assistant.
		 * Required
		 */
		type: FormControl<AssistantType | null | undefined>,
	}
	export function CreateCreateAssistantPostBodyFormGroup() {
		return new FormGroup<CreateAssistantPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z0-9\s_.,-]+')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z0-9\s_.,-]+')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<AssistantType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAssistantPostBodyServerSideEncryptionConfiguration {
		kmsKeyId?: string;
	}
	export interface CreateAssistantPostBodyServerSideEncryptionConfigurationFormProperties {
		kmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssistantPostBodyServerSideEncryptionConfigurationFormGroup() {
		return new FormGroup<CreateAssistantPostBodyServerSideEncryptionConfigurationFormProperties>({
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAssistantAssociationPostBody {

		/**
		 * The data that is input into Wisdom as a result of the assistant association.
		 * Required
		 */
		association: CreateAssistantAssociationPostBodyAssociation;

		/**
		 * The type of association.
		 * Required
		 */
		associationType: AssociationType;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 4096
		 * Min length: 1
		 */
		clientToken?: string | null;

		/** The tags used to organize, track, or control access for this resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateAssistantAssociationPostBodyFormProperties {

		/**
		 * The type of association.
		 * Required
		 */
		associationType: FormControl<AssociationType | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 4096
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateAssistantAssociationPostBodyFormGroup() {
		return new FormGroup<CreateAssistantAssociationPostBodyFormProperties>({
			associationType: new FormControl<AssociationType | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateAssistantAssociationPostBodyAssociation {
		knowledgeBaseId?: string;
	}
	export interface CreateAssistantAssociationPostBodyAssociationFormProperties {
		knowledgeBaseId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssistantAssociationPostBodyAssociationFormGroup() {
		return new FormGroup<CreateAssistantAssociationPostBodyAssociationFormProperties>({
			knowledgeBaseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateContentPostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 4096
		 * Min length: 1
		 */
		clientToken?: string | null;

		/** A key/value map to store attributes without affecting tagging or recommendations. For example, when synchronizing data between an external system and Wisdom, you can store an external version identifier as metadata to utilize for determining drift. */
		metadata?: {[id: string]: string };

		/**
		 * The name of the content. Each piece of content in a knowledge base must have a unique name. You can retrieve a piece of content using only its knowledge base and its name with the <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_SearchContent.html">SearchContent</a> API.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * The URI you want to use for the article. If the knowledge base has a templateUri, setting this argument overrides it for this piece of content.
		 * Max length: 4096
		 * Min length: 1
		 */
		overrideLinkOutUri?: string | null;

		/** The tags used to organize, track, or control access for this resource. */
		tags?: {[id: string]: string };

		/**
		 * The title of the content. If not set, the title is equal to the name.
		 * Max length: 255
		 * Min length: 1
		 */
		title?: string | null;

		/**
		 * A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.
		 * Required
		 * Max length: 1200
		 * Min length: 1
		 */
		uploadId: string;
	}
	export interface CreateContentPostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 4096
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/** A key/value map to store attributes without affecting tagging or recommendations. For example, when synchronizing data between an external system and Wisdom, you can store an external version identifier as metadata to utilize for determining drift. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The name of the content. Each piece of content in a knowledge base must have a unique name. You can retrieve a piece of content using only its knowledge base and its name with the <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_SearchContent.html">SearchContent</a> API.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The URI you want to use for the article. If the knowledge base has a templateUri, setting this argument overrides it for this piece of content.
		 * Max length: 4096
		 * Min length: 1
		 */
		overrideLinkOutUri: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The title of the content. If not set, the title is equal to the name.
		 * Max length: 255
		 * Min length: 1
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.
		 * Required
		 * Max length: 1200
		 * Min length: 1
		 */
		uploadId: FormControl<string | null | undefined>,
	}
	export function CreateCreateContentPostBodyFormGroup() {
		return new FormGroup<CreateContentPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z0-9\s_.,-]+')]),
			overrideLinkOutUri: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			uploadId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1200)]),
		});

	}

	export interface CreateKnowledgeBasePostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 4096
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The description.
		 * Max length: 255
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * The type of knowledge base. Only CUSTOM knowledge bases allow you to upload your own content. EXTERNAL knowledge bases support integrations with third-party systems whose content is synchronized automatically.
		 * Required
		 */
		knowledgeBaseType: KnowledgeBaseType;

		/**
		 * The name of the knowledge base.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/** Information about how to render the content. */
		renderingConfiguration?: CreateKnowledgeBasePostBodyRenderingConfiguration;

		/** The KMS key used for encryption. */
		serverSideEncryptionConfiguration?: CreateKnowledgeBasePostBodyServerSideEncryptionConfiguration;

		/** Configuration information about the external data source. */
		sourceConfiguration?: CreateKnowledgeBasePostBodySourceConfiguration;

		/** The tags used to organize, track, or control access for this resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateKnowledgeBasePostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 4096
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The description.
		 * Max length: 255
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The type of knowledge base. Only CUSTOM knowledge bases allow you to upload your own content. EXTERNAL knowledge bases support integrations with third-party systems whose content is synchronized automatically.
		 * Required
		 */
		knowledgeBaseType: FormControl<KnowledgeBaseType | null | undefined>,

		/**
		 * The name of the knowledge base.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateKnowledgeBasePostBodyFormGroup() {
		return new FormGroup<CreateKnowledgeBasePostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z0-9\s_.,-]+')]),
			knowledgeBaseType: new FormControl<KnowledgeBaseType | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z0-9\s_.,-]+')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateKnowledgeBasePostBodyRenderingConfiguration {
		templateUri?: string;
	}
	export interface CreateKnowledgeBasePostBodyRenderingConfigurationFormProperties {
		templateUri: FormControl<string | null | undefined>,
	}
	export function CreateCreateKnowledgeBasePostBodyRenderingConfigurationFormGroup() {
		return new FormGroup<CreateKnowledgeBasePostBodyRenderingConfigurationFormProperties>({
			templateUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateKnowledgeBasePostBodyServerSideEncryptionConfiguration {
		kmsKeyId?: string;
	}
	export interface CreateKnowledgeBasePostBodyServerSideEncryptionConfigurationFormProperties {
		kmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateKnowledgeBasePostBodyServerSideEncryptionConfigurationFormGroup() {
		return new FormGroup<CreateKnowledgeBasePostBodyServerSideEncryptionConfigurationFormProperties>({
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateKnowledgeBasePostBodySourceConfiguration {
		appIntegrations?: AppIntegrationsConfiguration;
	}
	export interface CreateKnowledgeBasePostBodySourceConfigurationFormProperties {
	}
	export function CreateCreateKnowledgeBasePostBodySourceConfigurationFormGroup() {
		return new FormGroup<CreateKnowledgeBasePostBodySourceConfigurationFormProperties>({
		});

	}

	export interface CreateSessionPostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 4096
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The description.
		 * Max length: 255
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * The name of the session.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/** The tags used to organize, track, or control access for this resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateSessionPostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 4096
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The description.
		 * Max length: 255
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The name of the session.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateSessionPostBodyFormGroup() {
		return new FormGroup<CreateSessionPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z0-9\s_.,-]+')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z0-9\s_.,-]+')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateContentPostBody {

		/** A key/value map to store attributes without affecting tagging or recommendations. For example, when synchronizing data between an external system and Wisdom, you can store an external version identifier as metadata to utilize for determining drift. */
		metadata?: {[id: string]: string };

		/**
		 * The URI for the article. If the knowledge base has a templateUri, setting this argument overrides it for this piece of content. To remove an existing <code>overrideLinkOurUri</code>, exclude this argument and set <code>removeOverrideLinkOutUri</code> to true.
		 * Max length: 4096
		 * Min length: 1
		 */
		overrideLinkOutUri?: string | null;

		/** Unset the existing <code>overrideLinkOutUri</code> if it exists. */
		removeOverrideLinkOutUri?: boolean | null;

		/**
		 * The <code>revisionId</code> of the content resource to update, taken from an earlier call to <code>GetContent</code>, <code>GetContentSummary</code>, <code>SearchContent</code>, or <code>ListContents</code>. If included, this argument acts as an optimistic lock to ensure content was not modified since it was last read. If it has been modified, this API throws a <code>PreconditionFailedException</code>.
		 * Max length: 4096
		 * Min length: 1
		 */
		revisionId?: string | null;

		/**
		 * The title of the content.
		 * Max length: 255
		 * Min length: 1
		 */
		title?: string | null;

		/**
		 * A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.
		 * Max length: 1200
		 * Min length: 1
		 */
		uploadId?: string | null;
	}
	export interface UpdateContentPostBodyFormProperties {

		/** A key/value map to store attributes without affecting tagging or recommendations. For example, when synchronizing data between an external system and Wisdom, you can store an external version identifier as metadata to utilize for determining drift. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The URI for the article. If the knowledge base has a templateUri, setting this argument overrides it for this piece of content. To remove an existing <code>overrideLinkOurUri</code>, exclude this argument and set <code>removeOverrideLinkOutUri</code> to true.
		 * Max length: 4096
		 * Min length: 1
		 */
		overrideLinkOutUri: FormControl<string | null | undefined>,

		/** Unset the existing <code>overrideLinkOutUri</code> if it exists. */
		removeOverrideLinkOutUri: FormControl<boolean | null | undefined>,

		/**
		 * The <code>revisionId</code> of the content resource to update, taken from an earlier call to <code>GetContent</code>, <code>GetContentSummary</code>, <code>SearchContent</code>, or <code>ListContents</code>. If included, this argument acts as an optimistic lock to ensure content was not modified since it was last read. If it has been modified, this API throws a <code>PreconditionFailedException</code>.
		 * Max length: 4096
		 * Min length: 1
		 */
		revisionId: FormControl<string | null | undefined>,

		/**
		 * The title of the content.
		 * Max length: 255
		 * Min length: 1
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.
		 * Max length: 1200
		 * Min length: 1
		 */
		uploadId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateContentPostBodyFormGroup() {
		return new FormGroup<UpdateContentPostBodyFormProperties>({
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			overrideLinkOutUri: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
			removeOverrideLinkOutUri: new FormControl<boolean | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			uploadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1200)]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags used to organize, track, or control access for this resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags used to organize, track, or control access for this resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NotifyRecommendationsReceivedPostBody {

		/**
		 * The identifiers of the recommendations.
		 * Required
		 */
		recommendationIds: Array<string>;
	}
	export interface NotifyRecommendationsReceivedPostBodyFormProperties {
	}
	export function CreateNotifyRecommendationsReceivedPostBodyFormGroup() {
		return new FormGroup<NotifyRecommendationsReceivedPostBodyFormProperties>({
		});

	}

	export interface QueryAssistantPostBody {

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 2048
		 * Min length: 1
		 */
		nextToken?: string | null;

		/**
		 * The text to search for.
		 * Required
		 */
		queryText: string;
	}
	export interface QueryAssistantPostBodyFormProperties {

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Max length: 2048
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The text to search for.
		 * Required
		 */
		queryText: FormControl<string | null | undefined>,
	}
	export function CreateQueryAssistantPostBodyFormGroup() {
		return new FormGroup<QueryAssistantPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			queryText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateKnowledgeBaseTemplateUriPostBody {

		/**
		 * The template URI to update.
		 * Required
		 * Max length: 4096
		 * Min length: 1
		 */
		templateUri: string;
	}
	export interface UpdateKnowledgeBaseTemplateUriPostBodyFormProperties {

		/**
		 * The template URI to update.
		 * Required
		 * Max length: 4096
		 * Min length: 1
		 */
		templateUri: FormControl<string | null | undefined>,
	}
	export function CreateUpdateKnowledgeBaseTemplateUriPostBodyFormGroup() {
		return new FormGroup<UpdateKnowledgeBaseTemplateUriPostBodyFormProperties>({
			templateUri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(4096)]),
		});

	}

	export interface SearchContentPostBody {

		/**
		 * The search expression.
		 * Required
		 */
		searchExpression: SearchContentPostBodySearchExpression;
	}
	export interface SearchContentPostBodyFormProperties {
	}
	export function CreateSearchContentPostBodyFormGroup() {
		return new FormGroup<SearchContentPostBodyFormProperties>({
		});

	}

	export interface SearchContentPostBodySearchExpression {
		filters?: Array<Filter>;
	}
	export interface SearchContentPostBodySearchExpressionFormProperties {
	}
	export function CreateSearchContentPostBodySearchExpressionFormGroup() {
		return new FormGroup<SearchContentPostBodySearchExpressionFormProperties>({
		});

	}

	export interface SearchSessionsPostBody {

		/**
		 * The search expression.
		 * Required
		 */
		searchExpression: SearchSessionsPostBodySearchExpression;
	}
	export interface SearchSessionsPostBodyFormProperties {
	}
	export function CreateSearchSessionsPostBodyFormGroup() {
		return new FormGroup<SearchSessionsPostBodyFormProperties>({
		});

	}

	export interface SearchSessionsPostBodySearchExpression {
		filters?: Array<Filter>;
	}
	export interface SearchSessionsPostBodySearchExpressionFormProperties {
	}
	export function CreateSearchSessionsPostBodySearchExpressionFormGroup() {
		return new FormGroup<SearchSessionsPostBodySearchExpressionFormProperties>({
		});

	}

	export interface StartContentUploadPostBody {

		/**
		 * The type of content to upload.
		 * Required
		 */
		contentType: string;
	}
	export interface StartContentUploadPostBodyFormProperties {

		/**
		 * The type of content to upload.
		 * Required
		 */
		contentType: FormControl<string | null | undefined>,
	}
	export function CreateStartContentUploadPostBodyFormGroup() {
		return new FormGroup<StartContentUploadPostBodyFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(text/(plain|html))|(application/(pdf|vnd\.openxmlformats-officedocument\.wordprocessingml\.document))|(application/x\.wisdom-json;source=(salesforce|servicenow|zendesk))$')]),
		});

	}

}

