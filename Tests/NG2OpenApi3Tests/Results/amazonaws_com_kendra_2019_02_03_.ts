import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateEntitiesToExperienceResponse {
		FailedEntityList?: Array<FailedEntity>;
	}
	export interface AssociateEntitiesToExperienceResponseFormProperties {
	}
	export function CreateAssociateEntitiesToExperienceResponseFormGroup() {
		return new FormGroup<AssociateEntitiesToExperienceResponseFormProperties>({
		});

	}


	/** Information on the users or groups in your IAM Identity Center identity source that failed to properly configure with your Amazon Kendra experience. */
	export interface FailedEntity {
		EntityId?: string;
		ErrorMessage?: string;
	}

	/** Information on the users or groups in your IAM Identity Center identity source that failed to properly configure with your Amazon Kendra experience. */
	export interface FailedEntityFormProperties {
		EntityId: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateFailedEntityFormGroup() {
		return new FormGroup<FailedEntityFormProperties>({
			EntityId: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateEntitiesToExperienceRequest {

		/** Required */
		Id: string;

		/** Required */
		IndexId: string;

		/** Required */
		EntityList: Array<EntityConfiguration>;
	}
	export interface AssociateEntitiesToExperienceRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateEntitiesToExperienceRequestFormGroup() {
		return new FormGroup<AssociateEntitiesToExperienceRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the configuration information for users or groups in your IAM Identity Center identity source to grant access your Amazon Kendra experience. */
	export interface EntityConfiguration {

		/** Required */
		EntityId: string;

		/** Required */
		EntityType: EntityType;
	}

	/** Provides the configuration information for users or groups in your IAM Identity Center identity source to grant access your Amazon Kendra experience. */
	export interface EntityConfigurationFormProperties {

		/** Required */
		EntityId: FormControl<string | null | undefined>,

		/** Required */
		EntityType: FormControl<EntityType | null | undefined>,
	}
	export function CreateEntityConfigurationFormGroup() {
		return new FormGroup<EntityConfigurationFormProperties>({
			EntityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EntityType: new FormControl<EntityType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EntityType { USER = 'USER', GROUP = 'GROUP' }

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface ResourceAlreadyExistException {
	}
	export interface ResourceAlreadyExistExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistExceptionFormProperties>({
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface AssociatePersonasToEntitiesResponse {
		FailedEntityList?: Array<FailedEntity>;
	}
	export interface AssociatePersonasToEntitiesResponseFormProperties {
	}
	export function CreateAssociatePersonasToEntitiesResponseFormGroup() {
		return new FormGroup<AssociatePersonasToEntitiesResponseFormProperties>({
		});

	}

	export interface AssociatePersonasToEntitiesRequest {

		/** Required */
		Id: string;

		/** Required */
		IndexId: string;

		/** Required */
		Personas: Array<EntityPersonaConfiguration>;
	}
	export interface AssociatePersonasToEntitiesRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateAssociatePersonasToEntitiesRequestFormGroup() {
		return new FormGroup<AssociatePersonasToEntitiesRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the configuration information for users or groups in your IAM Identity Center identity source for access to your Amazon Kendra experience. Specific permissions are defined for each user or group once they are granted access to your Amazon Kendra experience. */
	export interface EntityPersonaConfiguration {

		/** Required */
		EntityId: string;

		/** Required */
		Persona: Persona;
	}

	/** Provides the configuration information for users or groups in your IAM Identity Center identity source for access to your Amazon Kendra experience. Specific permissions are defined for each user or group once they are granted access to your Amazon Kendra experience. */
	export interface EntityPersonaConfigurationFormProperties {

		/** Required */
		EntityId: FormControl<string | null | undefined>,

		/** Required */
		Persona: FormControl<Persona | null | undefined>,
	}
	export function CreateEntityPersonaConfigurationFormGroup() {
		return new FormGroup<EntityPersonaConfigurationFormProperties>({
			EntityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Persona: new FormControl<Persona | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Persona { OWNER = 'OWNER', VIEWER = 'VIEWER' }

	export interface BatchDeleteDocumentResponse {
		FailedDocuments?: Array<BatchDeleteDocumentResponseFailedDocument>;
	}
	export interface BatchDeleteDocumentResponseFormProperties {
	}
	export function CreateBatchDeleteDocumentResponseFormGroup() {
		return new FormGroup<BatchDeleteDocumentResponseFormProperties>({
		});

	}


	/** Provides information about documents that could not be removed from an index by the <code>BatchDeleteDocument</code> API. */
	export interface BatchDeleteDocumentResponseFailedDocument {
		Id?: string;
		ErrorCode?: ErrorCode;
		ErrorMessage?: string;
	}

	/** Provides information about documents that could not be removed from an index by the <code>BatchDeleteDocument</code> API. */
	export interface BatchDeleteDocumentResponseFailedDocumentFormProperties {
		Id: FormControl<string | null | undefined>,
		ErrorCode: FormControl<ErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteDocumentResponseFailedDocumentFormGroup() {
		return new FormGroup<BatchDeleteDocumentResponseFailedDocumentFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<ErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorCode { InternalError = 'InternalError', InvalidRequest = 'InvalidRequest' }

	export interface BatchDeleteDocumentRequest {

		/** Required */
		IndexId: string;

		/** Required */
		DocumentIdList: Array<string>;

		/** Maps a particular data source sync job to a particular data source. */
		DataSourceSyncJobMetricTarget?: DataSourceSyncJobMetricTarget;
	}
	export interface BatchDeleteDocumentRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteDocumentRequestFormGroup() {
		return new FormGroup<BatchDeleteDocumentRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Maps a particular data source sync job to a particular data source. */
	export interface DataSourceSyncJobMetricTarget {

		/** Required */
		DataSourceId: string;
		DataSourceSyncJobId?: string;
	}

	/** Maps a particular data source sync job to a particular data source. */
	export interface DataSourceSyncJobMetricTargetFormProperties {

		/** Required */
		DataSourceId: FormControl<string | null | undefined>,
		DataSourceSyncJobId: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceSyncJobMetricTargetFormGroup() {
		return new FormGroup<DataSourceSyncJobMetricTargetFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataSourceSyncJobId: new FormControl<string | null | undefined>(undefined),
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

	export interface BatchDeleteFeaturedResultsSetResponse {

		/** Required */
		Errors: Array<BatchDeleteFeaturedResultsSetError>;
	}
	export interface BatchDeleteFeaturedResultsSetResponseFormProperties {
	}
	export function CreateBatchDeleteFeaturedResultsSetResponseFormGroup() {
		return new FormGroup<BatchDeleteFeaturedResultsSetResponseFormProperties>({
		});

	}


	/** Provides information about a set of featured results that couldn't be removed from an index by the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteFeaturedResultsSet.html">BatchDeleteFeaturedResultsSet</a> API. */
	export interface BatchDeleteFeaturedResultsSetError {

		/** Required */
		Id: string;

		/** Required */
		ErrorCode: ErrorCode;

		/** Required */
		ErrorMessage: string;
	}

	/** Provides information about a set of featured results that couldn't be removed from an index by the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteFeaturedResultsSet.html">BatchDeleteFeaturedResultsSet</a> API. */
	export interface BatchDeleteFeaturedResultsSetErrorFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		ErrorCode: FormControl<ErrorCode | null | undefined>,

		/** Required */
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteFeaturedResultsSetErrorFormGroup() {
		return new FormGroup<BatchDeleteFeaturedResultsSetErrorFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ErrorCode: new FormControl<ErrorCode | null | undefined>(undefined, [Validators.required]),
			ErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchDeleteFeaturedResultsSetRequest {

		/** Required */
		IndexId: string;

		/** Required */
		FeaturedResultsSetIds: Array<string>;
	}
	export interface BatchDeleteFeaturedResultsSetRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteFeaturedResultsSetRequestFormGroup() {
		return new FormGroup<BatchDeleteFeaturedResultsSetRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchGetDocumentStatusResponse {
		Errors?: Array<BatchGetDocumentStatusResponseError>;
		DocumentStatusList?: Array<Status>;
	}
	export interface BatchGetDocumentStatusResponseFormProperties {
	}
	export function CreateBatchGetDocumentStatusResponseFormGroup() {
		return new FormGroup<BatchGetDocumentStatusResponseFormProperties>({
		});

	}


	/** Provides a response when the status of a document could not be retrieved. */
	export interface BatchGetDocumentStatusResponseError {
		DocumentId?: string;
		ErrorCode?: ErrorCode;
		ErrorMessage?: string;
	}

	/** Provides a response when the status of a document could not be retrieved. */
	export interface BatchGetDocumentStatusResponseErrorFormProperties {
		DocumentId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<ErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetDocumentStatusResponseErrorFormGroup() {
		return new FormGroup<BatchGetDocumentStatusResponseErrorFormProperties>({
			DocumentId: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<ErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the status of documents submitted for indexing. */
	export interface Status {
		DocumentId?: string;
		DocumentStatus?: DocumentStatus;
		FailureCode?: string;
		FailureReason?: string;
	}

	/** Provides information about the status of documents submitted for indexing. */
	export interface StatusFormProperties {
		DocumentId: FormControl<string | null | undefined>,
		DocumentStatus: FormControl<DocumentStatus | null | undefined>,
		FailureCode: FormControl<string | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			DocumentId: new FormControl<string | null | undefined>(undefined),
			DocumentStatus: new FormControl<DocumentStatus | null | undefined>(undefined),
			FailureCode: new FormControl<string | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DocumentStatus { NOT_FOUND = 'NOT_FOUND', PROCESSING = 'PROCESSING', INDEXED = 'INDEXED', UPDATED = 'UPDATED', FAILED = 'FAILED', UPDATE_FAILED = 'UPDATE_FAILED' }

	export interface BatchGetDocumentStatusRequest {

		/** Required */
		IndexId: string;

		/** Required */
		DocumentInfoList: Array<DocumentInfo>;
	}
	export interface BatchGetDocumentStatusRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetDocumentStatusRequestFormGroup() {
		return new FormGroup<BatchGetDocumentStatusRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Identifies a document for which to retrieve status information */
	export interface DocumentInfo {

		/** Required */
		DocumentId: string;
		Attributes?: Array<DocumentAttribute>;
	}

	/** Identifies a document for which to retrieve status information */
	export interface DocumentInfoFormProperties {

		/** Required */
		DocumentId: FormControl<string | null | undefined>,
	}
	export function CreateDocumentInfoFormGroup() {
		return new FormGroup<DocumentInfoFormProperties>({
			DocumentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A document attribute or metadata field. To create custom document attributes, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-attributes.html">Custom attributes</a>. */
	export interface DocumentAttribute {

		/** Required */
		Key: string;

		/** Required */
		Value: DocumentAttributeValue;
	}

	/** A document attribute or metadata field. To create custom document attributes, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-attributes.html">Custom attributes</a>. */
	export interface DocumentAttributeFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateDocumentAttributeFormGroup() {
		return new FormGroup<DocumentAttributeFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The value of a document attribute. You can only provide one value for a document attribute. */
	export interface DocumentAttributeValue {
		StringValue?: string;
		StringListValue?: Array<string>;
		LongValue?: number | null;
		DateValue?: Date;
	}

	/** The value of a document attribute. You can only provide one value for a document attribute. */
	export interface DocumentAttributeValueFormProperties {
		StringValue: FormControl<string | null | undefined>,
		LongValue: FormControl<number | null | undefined>,
		DateValue: FormControl<Date | null | undefined>,
	}
	export function CreateDocumentAttributeValueFormGroup() {
		return new FormGroup<DocumentAttributeValueFormProperties>({
			StringValue: new FormControl<string | null | undefined>(undefined),
			LongValue: new FormControl<number | null | undefined>(undefined),
			DateValue: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface BatchPutDocumentResponse {
		FailedDocuments?: Array<BatchPutDocumentResponseFailedDocument>;
	}
	export interface BatchPutDocumentResponseFormProperties {
	}
	export function CreateBatchPutDocumentResponseFormGroup() {
		return new FormGroup<BatchPutDocumentResponseFormProperties>({
		});

	}


	/** Provides information about a document that could not be indexed. */
	export interface BatchPutDocumentResponseFailedDocument {
		Id?: string;
		ErrorCode?: ErrorCode;
		ErrorMessage?: string;
	}

	/** Provides information about a document that could not be indexed. */
	export interface BatchPutDocumentResponseFailedDocumentFormProperties {
		Id: FormControl<string | null | undefined>,
		ErrorCode: FormControl<ErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchPutDocumentResponseFailedDocumentFormGroup() {
		return new FormGroup<BatchPutDocumentResponseFailedDocumentFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<ErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchPutDocumentRequest {

		/** Required */
		IndexId: string;
		RoleArn?: string;

		/** Required */
		Documents: Array<Document>;
		CustomDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration;
	}
	export interface BatchPutDocumentRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateBatchPutDocumentRequestFormGroup() {
		return new FormGroup<BatchPutDocumentRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A document in an index. */
	export interface Document {

		/** Required */
		Id: string;
		Title?: string;
		Blob?: string;

		/** Information required to find a specific file in an Amazon S3 bucket. */
		S3Path?: S3Path;
		Attributes?: Array<DocumentAttribute>;
		AccessControlList?: Array<Principal>;
		HierarchicalAccessControlList?: Array<HierarchicalPrincipal>;
		ContentType?: ContentType;
		AccessControlConfigurationId?: string;
	}

	/** A document in an index. */
	export interface DocumentFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Blob: FormControl<string | null | undefined>,
		ContentType: FormControl<ContentType | null | undefined>,
		AccessControlConfigurationId: FormControl<string | null | undefined>,
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Title: new FormControl<string | null | undefined>(undefined),
			Blob: new FormControl<string | null | undefined>(undefined),
			ContentType: new FormControl<ContentType | null | undefined>(undefined),
			AccessControlConfigurationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information required to find a specific file in an Amazon S3 bucket. */
	export interface S3Path {

		/** Required */
		Bucket: string;

		/** Required */
		Key: string;
	}

	/** Information required to find a specific file in an Amazon S3 bucket. */
	export interface S3PathFormProperties {

		/** Required */
		Bucket: FormControl<string | null | undefined>,

		/** Required */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateS3PathFormGroup() {
		return new FormGroup<S3PathFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides user and group information for <a href="https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html">user context filtering</a>. */
	export interface Principal {

		/** Required */
		Name: string;

		/** Required */
		Type: EntityType;

		/** Required */
		Access: ReadAccessType;
		DataSourceId?: string;
	}

	/** Provides user and group information for <a href="https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html">user context filtering</a>. */
	export interface PrincipalFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<EntityType | null | undefined>,

		/** Required */
		Access: FormControl<ReadAccessType | null | undefined>,
		DataSourceId: FormControl<string | null | undefined>,
	}
	export function CreatePrincipalFormGroup() {
		return new FormGroup<PrincipalFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<EntityType | null | undefined>(undefined, [Validators.required]),
			Access: new FormControl<ReadAccessType | null | undefined>(undefined, [Validators.required]),
			DataSourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReadAccessType { ALLOW = 'ALLOW', DENY = 'DENY' }


	/**  Information to define the hierarchy for which documents users should have access to.  */
	export interface HierarchicalPrincipal {

		/** Required */
		PrincipalList: Array<Principal>;
	}

	/**  Information to define the hierarchy for which documents users should have access to.  */
	export interface HierarchicalPrincipalFormProperties {
	}
	export function CreateHierarchicalPrincipalFormGroup() {
		return new FormGroup<HierarchicalPrincipalFormProperties>({
		});

	}

	export enum ContentType { PDF = 'PDF', HTML = 'HTML', MS_WORD = 'MS_WORD', PLAIN_TEXT = 'PLAIN_TEXT', PPT = 'PPT', RTF = 'RTF', XML = 'XML', XSLT = 'XSLT', MS_EXCEL = 'MS_EXCEL', CSV = 'CSV', JSON = 'JSON', MD = 'MD' }


	/** <p>Provides the configuration information for altering document metadata and content during the document ingestion process.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata during the ingestion process</a>.</p> */
	export interface CustomDocumentEnrichmentConfiguration {
		InlineConfigurations?: Array<InlineCustomDocumentEnrichmentConfiguration>;
		PreExtractionHookConfiguration?: HookConfiguration;
		PostExtractionHookConfiguration?: HookConfiguration;
		RoleArn?: string;
	}

	/** <p>Provides the configuration information for altering document metadata and content during the document ingestion process.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata during the ingestion process</a>.</p> */
	export interface CustomDocumentEnrichmentConfigurationFormProperties {
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCustomDocumentEnrichmentConfigurationFormGroup() {
		return new FormGroup<CustomDocumentEnrichmentConfigurationFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Provides the configuration information for applying basic logic to alter document metadata and content when ingesting documents into Amazon Kendra. To apply advanced logic, to go beyond what you can do with basic logic, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_HookConfiguration.html">HookConfiguration</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata during the ingestion process</a>.</p> */
	export interface InlineCustomDocumentEnrichmentConfiguration {
		Condition?: DocumentAttributeCondition;
		Target?: DocumentAttributeTarget;
		DocumentContentDeletion?: boolean | null;
	}

	/** <p>Provides the configuration information for applying basic logic to alter document metadata and content when ingesting documents into Amazon Kendra. To apply advanced logic, to go beyond what you can do with basic logic, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_HookConfiguration.html">HookConfiguration</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata during the ingestion process</a>.</p> */
	export interface InlineCustomDocumentEnrichmentConfigurationFormProperties {
		DocumentContentDeletion: FormControl<boolean | null | undefined>,
	}
	export function CreateInlineCustomDocumentEnrichmentConfigurationFormGroup() {
		return new FormGroup<InlineCustomDocumentEnrichmentConfigurationFormProperties>({
			DocumentContentDeletion: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>The condition used for the target document attribute or metadata field when ingesting documents into Amazon Kendra. You use this with <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_DocumentAttributeTarget.html">DocumentAttributeTarget to apply the condition</a>.</p> <p>For example, you can create the 'Department' target field and have it prefill department names associated with the documents based on information in the 'Source_URI' field. Set the condition that if the 'Source_URI' field contains 'financial' in its URI value, then prefill the target field 'Department' with the target value 'Finance' for the document.</p> <p>Amazon Kendra cannot create a target field if it has not already been created as an index field. After you create your index field, you can create a document metadata field using <code>DocumentAttributeTarget</code>. Amazon Kendra then will map your newly created metadata field to your index field.</p> */
	export interface DocumentAttributeCondition {

		/** Required */
		ConditionDocumentAttributeKey: string;

		/** Required */
		Operator: ConditionOperator;
		ConditionOnValue?: DocumentAttributeValue;
	}

	/** <p>The condition used for the target document attribute or metadata field when ingesting documents into Amazon Kendra. You use this with <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_DocumentAttributeTarget.html">DocumentAttributeTarget to apply the condition</a>.</p> <p>For example, you can create the 'Department' target field and have it prefill department names associated with the documents based on information in the 'Source_URI' field. Set the condition that if the 'Source_URI' field contains 'financial' in its URI value, then prefill the target field 'Department' with the target value 'Finance' for the document.</p> <p>Amazon Kendra cannot create a target field if it has not already been created as an index field. After you create your index field, you can create a document metadata field using <code>DocumentAttributeTarget</code>. Amazon Kendra then will map your newly created metadata field to your index field.</p> */
	export interface DocumentAttributeConditionFormProperties {

		/** Required */
		ConditionDocumentAttributeKey: FormControl<string | null | undefined>,

		/** Required */
		Operator: FormControl<ConditionOperator | null | undefined>,
	}
	export function CreateDocumentAttributeConditionFormGroup() {
		return new FormGroup<DocumentAttributeConditionFormProperties>({
			ConditionDocumentAttributeKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Operator: new FormControl<ConditionOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConditionOperator { GreaterThan = 'GreaterThan', GreaterThanOrEquals = 'GreaterThanOrEquals', LessThan = 'LessThan', LessThanOrEquals = 'LessThanOrEquals', Equals = 'Equals', NotEquals = 'NotEquals', Contains = 'Contains', NotContains = 'NotContains', Exists = 'Exists', NotExists = 'NotExists', BeginsWith = 'BeginsWith' }


	/** <p>The target document attribute or metadata field you want to alter when ingesting documents into Amazon Kendra.</p> <p>For example, you can delete customer identification numbers associated with the documents, stored in the document metadata field called 'Customer_ID'. You set the target key as 'Customer_ID' and the deletion flag to <code>TRUE</code>. This removes all customer ID values in the field 'Customer_ID'. This would scrub personally identifiable information from each document's metadata.</p> <p>Amazon Kendra cannot create a target field if it has not already been created as an index field. After you create your index field, you can create a document metadata field using <code>DocumentAttributeTarget</code>. Amazon Kendra then will map your newly created metadata field to your index field.</p> <p>You can also use this with <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_DocumentAttributeCondition.html">DocumentAttributeCondition</a>.</p> */
	export interface DocumentAttributeTarget {
		TargetDocumentAttributeKey?: string;
		TargetDocumentAttributeValueDeletion?: boolean | null;
		TargetDocumentAttributeValue?: DocumentAttributeValue;
	}

	/** <p>The target document attribute or metadata field you want to alter when ingesting documents into Amazon Kendra.</p> <p>For example, you can delete customer identification numbers associated with the documents, stored in the document metadata field called 'Customer_ID'. You set the target key as 'Customer_ID' and the deletion flag to <code>TRUE</code>. This removes all customer ID values in the field 'Customer_ID'. This would scrub personally identifiable information from each document's metadata.</p> <p>Amazon Kendra cannot create a target field if it has not already been created as an index field. After you create your index field, you can create a document metadata field using <code>DocumentAttributeTarget</code>. Amazon Kendra then will map your newly created metadata field to your index field.</p> <p>You can also use this with <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_DocumentAttributeCondition.html">DocumentAttributeCondition</a>.</p> */
	export interface DocumentAttributeTargetFormProperties {
		TargetDocumentAttributeKey: FormControl<string | null | undefined>,
		TargetDocumentAttributeValueDeletion: FormControl<boolean | null | undefined>,
	}
	export function CreateDocumentAttributeTargetFormGroup() {
		return new FormGroup<DocumentAttributeTargetFormProperties>({
			TargetDocumentAttributeKey: new FormControl<string | null | undefined>(undefined),
			TargetDocumentAttributeValueDeletion: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Provides the configuration information for invoking a Lambda function in Lambda to alter document metadata and content when ingesting documents into Amazon Kendra. You can configure your Lambda function using <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_CustomDocumentEnrichmentConfiguration.html">PreExtractionHookConfiguration</a> if you want to apply advanced alterations on the original or raw documents. If you want to apply advanced alterations on the Amazon Kendra structured documents, you must configure your Lambda function using <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_CustomDocumentEnrichmentConfiguration.html">PostExtractionHookConfiguration</a>. You can only invoke one Lambda function. However, this function can invoke other functions it requires.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata during the ingestion process</a>.</p> */
	export interface HookConfiguration {
		InvocationCondition?: DocumentAttributeCondition;

		/** Required */
		LambdaArn: string;

		/** Required */
		S3Bucket: string;
	}

	/** <p>Provides the configuration information for invoking a Lambda function in Lambda to alter document metadata and content when ingesting documents into Amazon Kendra. You can configure your Lambda function using <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_CustomDocumentEnrichmentConfiguration.html">PreExtractionHookConfiguration</a> if you want to apply advanced alterations on the original or raw documents. If you want to apply advanced alterations on the Amazon Kendra structured documents, you must configure your Lambda function using <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_CustomDocumentEnrichmentConfiguration.html">PostExtractionHookConfiguration</a>. You can only invoke one Lambda function. However, this function can invoke other functions it requires.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata during the ingestion process</a>.</p> */
	export interface HookConfigurationFormProperties {

		/** Required */
		LambdaArn: FormControl<string | null | undefined>,

		/** Required */
		S3Bucket: FormControl<string | null | undefined>,
	}
	export function CreateHookConfigurationFormGroup() {
		return new FormGroup<HookConfigurationFormProperties>({
			LambdaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ClearQuerySuggestionsRequest {

		/** Required */
		IndexId: string;
	}
	export interface ClearQuerySuggestionsRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateClearQuerySuggestionsRequestFormGroup() {
		return new FormGroup<ClearQuerySuggestionsRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAccessControlConfigurationResponse {

		/** Required */
		Id: string;
	}
	export interface CreateAccessControlConfigurationResponseFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessControlConfigurationResponseFormGroup() {
		return new FormGroup<CreateAccessControlConfigurationResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAccessControlConfigurationRequest {

		/** Required */
		IndexId: string;

		/** Required */
		Name: string;
		Description?: string;
		AccessControlList?: Array<Principal>;
		HierarchicalAccessControlList?: Array<HierarchicalPrincipal>;
		ClientToken?: string;
	}
	export interface CreateAccessControlConfigurationRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessControlConfigurationRequestFormGroup() {
		return new FormGroup<CreateAccessControlConfigurationRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDataSourceResponse {

		/** Required */
		Id: string;
	}
	export interface CreateDataSourceResponseFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSourceResponseFormGroup() {
		return new FormGroup<CreateDataSourceResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDataSourceRequest {

		/** Required */
		Name: string;

		/** Required */
		IndexId: string;

		/** Required */
		Type: DataSourceType;
		Configuration?: DataSourceConfiguration;
		VpcConfiguration?: DataSourceVpcConfiguration;
		Description?: string;
		Schedule?: string;
		RoleArn?: string;
		Tags?: Array<Tag>;
		ClientToken?: string;
		LanguageCode?: string;
		CustomDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration;
	}
	export interface CreateDataSourceRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		IndexId: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<DataSourceType | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Schedule: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		LanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSourceRequestFormGroup() {
		return new FormGroup<CreateDataSourceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<DataSourceType | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Schedule: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataSourceType { S3 = 'S3', SHAREPOINT = 'SHAREPOINT', DATABASE = 'DATABASE', SALESFORCE = 'SALESFORCE', ONEDRIVE = 'ONEDRIVE', SERVICENOW = 'SERVICENOW', CUSTOM = 'CUSTOM', CONFLUENCE = 'CONFLUENCE', GOOGLEDRIVE = 'GOOGLEDRIVE', WEBCRAWLER = 'WEBCRAWLER', WORKDOCS = 'WORKDOCS', FSX = 'FSX', SLACK = 'SLACK', BOX = 'BOX', QUIP = 'QUIP', JIRA = 'JIRA', GITHUB = 'GITHUB', ALFRESCO = 'ALFRESCO', TEMPLATE = 'TEMPLATE' }


	/** Provides the configuration information for an Amazon Kendra data source. */
	export interface DataSourceConfiguration {
		S3Configuration?: S3DataSourceConfiguration;
		SharePointConfiguration?: SharePointConfiguration;
		DatabaseConfiguration?: DatabaseConfiguration;
		SalesforceConfiguration?: SalesforceConfiguration;
		OneDriveConfiguration?: OneDriveConfiguration;
		ServiceNowConfiguration?: ServiceNowConfiguration;
		ConfluenceConfiguration?: ConfluenceConfiguration;
		GoogleDriveConfiguration?: GoogleDriveConfiguration;

		/** Provides the configuration information required for Amazon Kendra Web Crawler. */
		WebCrawlerConfiguration?: WebCrawlerConfiguration;
		WorkDocsConfiguration?: WorkDocsConfiguration;
		FsxConfiguration?: FsxConfiguration;
		SlackConfiguration?: SlackConfiguration;
		BoxConfiguration?: BoxConfiguration;
		QuipConfiguration?: QuipConfiguration;
		JiraConfiguration?: JiraConfiguration;
		GitHubConfiguration?: GitHubConfiguration;
		AlfrescoConfiguration?: AlfrescoConfiguration;
		TemplateConfiguration?: TemplateConfiguration;
	}

	/** Provides the configuration information for an Amazon Kendra data source. */
	export interface DataSourceConfigurationFormProperties {
	}
	export function CreateDataSourceConfigurationFormGroup() {
		return new FormGroup<DataSourceConfigurationFormProperties>({
		});

	}


	/** Provides the configuration information to connect to an Amazon S3 bucket. */
	export interface S3DataSourceConfiguration {

		/** Required */
		BucketName: string;
		InclusionPrefixes?: Array<string>;
		InclusionPatterns?: Array<string>;
		ExclusionPatterns?: Array<string>;

		/** Document metadata files that contain information such as the document access control information, source URI, document author, and custom attributes. Each metadata file contains metadata about a single document. */
		DocumentsMetadataConfiguration?: DocumentsMetadataConfiguration;
		AccessControlListConfiguration?: AccessControlListConfiguration;
	}

	/** Provides the configuration information to connect to an Amazon S3 bucket. */
	export interface S3DataSourceConfigurationFormProperties {

		/** Required */
		BucketName: FormControl<string | null | undefined>,
	}
	export function CreateS3DataSourceConfigurationFormGroup() {
		return new FormGroup<S3DataSourceConfigurationFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Document metadata files that contain information such as the document access control information, source URI, document author, and custom attributes. Each metadata file contains metadata about a single document. */
	export interface DocumentsMetadataConfiguration {
		S3Prefix?: string;
	}

	/** Document metadata files that contain information such as the document access control information, source URI, document author, and custom attributes. Each metadata file contains metadata about a single document. */
	export interface DocumentsMetadataConfigurationFormProperties {
		S3Prefix: FormControl<string | null | undefined>,
	}
	export function CreateDocumentsMetadataConfigurationFormGroup() {
		return new FormGroup<DocumentsMetadataConfigurationFormProperties>({
			S3Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Access Control List files for the documents in a data source. For the format of the file, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/s3-acl.html">Access control for S3 data sources</a>. */
	export interface AccessControlListConfiguration {
		KeyPath?: string;
	}

	/** Access Control List files for the documents in a data source. For the format of the file, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/s3-acl.html">Access control for S3 data sources</a>. */
	export interface AccessControlListConfigurationFormProperties {
		KeyPath: FormControl<string | null | undefined>,
	}
	export function CreateAccessControlListConfigurationFormGroup() {
		return new FormGroup<AccessControlListConfigurationFormProperties>({
			KeyPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration information to connect to Microsoft SharePoint as your data source. */
	export interface SharePointConfiguration {

		/** Required */
		SharePointVersion: SharePointVersion;

		/** Required */
		Urls: Array<string>;

		/** Required */
		SecretArn: string;
		CrawlAttachments?: boolean | null;
		UseChangeLog?: boolean | null;
		InclusionPatterns?: Array<string>;
		ExclusionPatterns?: Array<string>;
		VpcConfiguration?: DataSourceVpcConfiguration;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
		DocumentTitleFieldName?: string;
		DisableLocalGroups?: boolean | null;
		SslCertificateS3Path?: S3Path;
		AuthenticationType?: SharePointOnlineAuthenticationType;
		ProxyConfiguration?: ProxyConfiguration;
	}

	/** Provides the configuration information to connect to Microsoft SharePoint as your data source. */
	export interface SharePointConfigurationFormProperties {

		/** Required */
		SharePointVersion: FormControl<SharePointVersion | null | undefined>,

		/** Required */
		SecretArn: FormControl<string | null | undefined>,
		CrawlAttachments: FormControl<boolean | null | undefined>,
		UseChangeLog: FormControl<boolean | null | undefined>,
		DocumentTitleFieldName: FormControl<string | null | undefined>,
		DisableLocalGroups: FormControl<boolean | null | undefined>,
		AuthenticationType: FormControl<SharePointOnlineAuthenticationType | null | undefined>,
	}
	export function CreateSharePointConfigurationFormGroup() {
		return new FormGroup<SharePointConfigurationFormProperties>({
			SharePointVersion: new FormControl<SharePointVersion | null | undefined>(undefined, [Validators.required]),
			SecretArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CrawlAttachments: new FormControl<boolean | null | undefined>(undefined),
			UseChangeLog: new FormControl<boolean | null | undefined>(undefined),
			DocumentTitleFieldName: new FormControl<string | null | undefined>(undefined),
			DisableLocalGroups: new FormControl<boolean | null | undefined>(undefined),
			AuthenticationType: new FormControl<SharePointOnlineAuthenticationType | null | undefined>(undefined),
		});

	}

	export enum SharePointVersion { SHAREPOINT_2013 = 'SHAREPOINT_2013', SHAREPOINT_2016 = 'SHAREPOINT_2016', SHAREPOINT_ONLINE = 'SHAREPOINT_ONLINE', SHAREPOINT_2019 = 'SHAREPOINT_2019' }


	/** Provides the configuration information to connect to an Amazon VPC. */
	export interface DataSourceVpcConfiguration {

		/** Required */
		SubnetIds: Array<string>;

		/** Required */
		SecurityGroupIds: Array<string>;
	}

	/** Provides the configuration information to connect to an Amazon VPC. */
	export interface DataSourceVpcConfigurationFormProperties {
	}
	export function CreateDataSourceVpcConfigurationFormGroup() {
		return new FormGroup<DataSourceVpcConfigurationFormProperties>({
		});

	}


	/** Maps a column or attribute in the data source to an index field. You must first create the fields in the index using the <code>UpdateIndex</code> API. */
	export interface DataSourceToIndexFieldMapping {

		/** Required */
		DataSourceFieldName: string;
		DateFieldFormat?: string;

		/** Required */
		IndexFieldName: string;
	}

	/** Maps a column or attribute in the data source to an index field. You must first create the fields in the index using the <code>UpdateIndex</code> API. */
	export interface DataSourceToIndexFieldMappingFormProperties {

		/** Required */
		DataSourceFieldName: FormControl<string | null | undefined>,
		DateFieldFormat: FormControl<string | null | undefined>,

		/** Required */
		IndexFieldName: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceToIndexFieldMappingFormGroup() {
		return new FormGroup<DataSourceToIndexFieldMappingFormProperties>({
			DataSourceFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DateFieldFormat: new FormControl<string | null | undefined>(undefined),
			IndexFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SharePointOnlineAuthenticationType { HTTP_BASIC = 'HTTP_BASIC', OAUTH2 = 'OAUTH2' }


	/** Provides the configuration information for a web proxy to connect to website hosts. */
	export interface ProxyConfiguration {

		/** Required */
		Host: string;

		/** Required */
		Port: number;
		Credentials?: string;
	}

	/** Provides the configuration information for a web proxy to connect to website hosts. */
	export interface ProxyConfigurationFormProperties {

		/** Required */
		Host: FormControl<string | null | undefined>,

		/** Required */
		Port: FormControl<number | null | undefined>,
		Credentials: FormControl<string | null | undefined>,
	}
	export function CreateProxyConfigurationFormGroup() {
		return new FormGroup<ProxyConfigurationFormProperties>({
			Host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Credentials: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration information to connect to a index.  */
	export interface DatabaseConfiguration {

		/** Required */
		DatabaseEngineType: DatabaseEngineType;

		/** Required */
		ConnectionConfiguration: ConnectionConfiguration;

		/** Provides the configuration information to connect to an Amazon VPC. */
		VpcConfiguration?: DataSourceVpcConfiguration;

		/** Required */
		ColumnConfiguration: ColumnConfiguration;
		AclConfiguration?: AclConfiguration;
		SqlConfiguration?: SqlConfiguration;
	}

	/** Provides the configuration information to connect to a index.  */
	export interface DatabaseConfigurationFormProperties {

		/** Required */
		DatabaseEngineType: FormControl<DatabaseEngineType | null | undefined>,
	}
	export function CreateDatabaseConfigurationFormGroup() {
		return new FormGroup<DatabaseConfigurationFormProperties>({
			DatabaseEngineType: new FormControl<DatabaseEngineType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DatabaseEngineType { RDS_AURORA_MYSQL = 'RDS_AURORA_MYSQL', RDS_AURORA_POSTGRESQL = 'RDS_AURORA_POSTGRESQL', RDS_MYSQL = 'RDS_MYSQL', RDS_POSTGRESQL = 'RDS_POSTGRESQL' }


	/** Provides the configuration information that's required to connect to a database. */
	export interface ConnectionConfiguration {

		/** Required */
		DatabaseHost: string;

		/** Required */
		DatabasePort: number;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		SecretArn: string;
	}

	/** Provides the configuration information that's required to connect to a database. */
	export interface ConnectionConfigurationFormProperties {

		/** Required */
		DatabaseHost: FormControl<string | null | undefined>,

		/** Required */
		DatabasePort: FormControl<number | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,

		/** Required */
		SecretArn: FormControl<string | null | undefined>,
	}
	export function CreateConnectionConfigurationFormGroup() {
		return new FormGroup<ConnectionConfigurationFormProperties>({
			DatabaseHost: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatabasePort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecretArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides information about how Amazon Kendra should use the columns of a database in an index. */
	export interface ColumnConfiguration {

		/** Required */
		DocumentIdColumnName: string;

		/** Required */
		DocumentDataColumnName: string;
		DocumentTitleColumnName?: string;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;

		/** Required */
		ChangeDetectingColumns: Array<string>;
	}

	/** Provides information about how Amazon Kendra should use the columns of a database in an index. */
	export interface ColumnConfigurationFormProperties {

		/** Required */
		DocumentIdColumnName: FormControl<string | null | undefined>,

		/** Required */
		DocumentDataColumnName: FormControl<string | null | undefined>,
		DocumentTitleColumnName: FormControl<string | null | undefined>,
	}
	export function CreateColumnConfigurationFormGroup() {
		return new FormGroup<ColumnConfigurationFormProperties>({
			DocumentIdColumnName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DocumentDataColumnName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DocumentTitleColumnName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the column that should be used for filtering the query response by groups. */
	export interface AclConfiguration {

		/** Required */
		AllowedGroupsColumnName: string;
	}

	/** Provides information about the column that should be used for filtering the query response by groups. */
	export interface AclConfigurationFormProperties {

		/** Required */
		AllowedGroupsColumnName: FormControl<string | null | undefined>,
	}
	export function CreateAclConfigurationFormGroup() {
		return new FormGroup<AclConfigurationFormProperties>({
			AllowedGroupsColumnName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the configuration information to use a SQL database. */
	export interface SqlConfiguration {
		QueryIdentifiersEnclosingOption?: QueryIdentifiersEnclosingOption;
	}

	/** Provides the configuration information to use a SQL database. */
	export interface SqlConfigurationFormProperties {
		QueryIdentifiersEnclosingOption: FormControl<QueryIdentifiersEnclosingOption | null | undefined>,
	}
	export function CreateSqlConfigurationFormGroup() {
		return new FormGroup<SqlConfigurationFormProperties>({
			QueryIdentifiersEnclosingOption: new FormControl<QueryIdentifiersEnclosingOption | null | undefined>(undefined),
		});

	}

	export enum QueryIdentifiersEnclosingOption { DOUBLE_QUOTES = 'DOUBLE_QUOTES', NONE = 'NONE' }


	/** Provides the configuration information to connect to Salesforce as your data source. */
	export interface SalesforceConfiguration {

		/** Required */
		ServerUrl: string;

		/** Required */
		SecretArn: string;
		StandardObjectConfigurations?: Array<SalesforceStandardObjectConfiguration>;
		KnowledgeArticleConfiguration?: SalesforceKnowledgeArticleConfiguration;
		ChatterFeedConfiguration?: SalesforceChatterFeedConfiguration;
		CrawlAttachments?: boolean | null;
		StandardObjectAttachmentConfiguration?: SalesforceStandardObjectAttachmentConfiguration;
		IncludeAttachmentFilePatterns?: Array<string>;
		ExcludeAttachmentFilePatterns?: Array<string>;
	}

	/** Provides the configuration information to connect to Salesforce as your data source. */
	export interface SalesforceConfigurationFormProperties {

		/** Required */
		ServerUrl: FormControl<string | null | undefined>,

		/** Required */
		SecretArn: FormControl<string | null | undefined>,
		CrawlAttachments: FormControl<boolean | null | undefined>,
	}
	export function CreateSalesforceConfigurationFormGroup() {
		return new FormGroup<SalesforceConfigurationFormProperties>({
			ServerUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecretArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CrawlAttachments: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides the configuration information for indexing a single standard object. */
	export interface SalesforceStandardObjectConfiguration {

		/** Required */
		Name: SalesforceStandardObjectName;

		/** Required */
		DocumentDataFieldName: string;
		DocumentTitleFieldName?: string;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
	}

	/** Provides the configuration information for indexing a single standard object. */
	export interface SalesforceStandardObjectConfigurationFormProperties {

		/** Required */
		Name: FormControl<SalesforceStandardObjectName | null | undefined>,

		/** Required */
		DocumentDataFieldName: FormControl<string | null | undefined>,
		DocumentTitleFieldName: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceStandardObjectConfigurationFormGroup() {
		return new FormGroup<SalesforceStandardObjectConfigurationFormProperties>({
			Name: new FormControl<SalesforceStandardObjectName | null | undefined>(undefined, [Validators.required]),
			DocumentDataFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DocumentTitleFieldName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SalesforceStandardObjectName { ACCOUNT = 'ACCOUNT', CAMPAIGN = 'CAMPAIGN', CASE = 'CASE', CONTACT = 'CONTACT', CONTRACT = 'CONTRACT', DOCUMENT = 'DOCUMENT', GROUP = 'GROUP', IDEA = 'IDEA', LEAD = 'LEAD', OPPORTUNITY = 'OPPORTUNITY', PARTNER = 'PARTNER', PRICEBOOK = 'PRICEBOOK', PRODUCT = 'PRODUCT', PROFILE = 'PROFILE', SOLUTION = 'SOLUTION', TASK = 'TASK', USER = 'USER' }


	/** Provides the configuration information for the knowledge article types that Amazon Kendra indexes. Amazon Kendra indexes standard knowledge articles and the standard fields of knowledge articles, or the custom fields of custom knowledge articles, but not both  */
	export interface SalesforceKnowledgeArticleConfiguration {

		/** Required */
		IncludedStates: Array<SalesforceKnowledgeArticleState>;
		StandardKnowledgeArticleTypeConfiguration?: SalesforceStandardKnowledgeArticleTypeConfiguration;
		CustomKnowledgeArticleTypeConfigurations?: Array<SalesforceCustomKnowledgeArticleTypeConfiguration>;
	}

	/** Provides the configuration information for the knowledge article types that Amazon Kendra indexes. Amazon Kendra indexes standard knowledge articles and the standard fields of knowledge articles, or the custom fields of custom knowledge articles, but not both  */
	export interface SalesforceKnowledgeArticleConfigurationFormProperties {
	}
	export function CreateSalesforceKnowledgeArticleConfigurationFormGroup() {
		return new FormGroup<SalesforceKnowledgeArticleConfigurationFormProperties>({
		});

	}

	export enum SalesforceKnowledgeArticleState { DRAFT = 'DRAFT', PUBLISHED = 'PUBLISHED', ARCHIVED = 'ARCHIVED' }


	/** Provides the configuration information for standard Salesforce knowledge articles. */
	export interface SalesforceStandardKnowledgeArticleTypeConfiguration {

		/** Required */
		DocumentDataFieldName: string;
		DocumentTitleFieldName?: string;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
	}

	/** Provides the configuration information for standard Salesforce knowledge articles. */
	export interface SalesforceStandardKnowledgeArticleTypeConfigurationFormProperties {

		/** Required */
		DocumentDataFieldName: FormControl<string | null | undefined>,
		DocumentTitleFieldName: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceStandardKnowledgeArticleTypeConfigurationFormGroup() {
		return new FormGroup<SalesforceStandardKnowledgeArticleTypeConfigurationFormProperties>({
			DocumentDataFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DocumentTitleFieldName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration information for indexing Salesforce custom articles. */
	export interface SalesforceCustomKnowledgeArticleTypeConfiguration {

		/** Required */
		Name: string;

		/** Required */
		DocumentDataFieldName: string;
		DocumentTitleFieldName?: string;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
	}

	/** Provides the configuration information for indexing Salesforce custom articles. */
	export interface SalesforceCustomKnowledgeArticleTypeConfigurationFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		DocumentDataFieldName: FormControl<string | null | undefined>,
		DocumentTitleFieldName: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceCustomKnowledgeArticleTypeConfigurationFormGroup() {
		return new FormGroup<SalesforceCustomKnowledgeArticleTypeConfigurationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DocumentDataFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DocumentTitleFieldName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration information for syncing a Salesforce chatter feed. The contents of the object comes from the Salesforce FeedItem table. */
	export interface SalesforceChatterFeedConfiguration {

		/** Required */
		DocumentDataFieldName: string;
		DocumentTitleFieldName?: string;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
		IncludeFilterTypes?: Array<SalesforceChatterFeedIncludeFilterType>;
	}

	/** The configuration information for syncing a Salesforce chatter feed. The contents of the object comes from the Salesforce FeedItem table. */
	export interface SalesforceChatterFeedConfigurationFormProperties {

		/** Required */
		DocumentDataFieldName: FormControl<string | null | undefined>,
		DocumentTitleFieldName: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceChatterFeedConfigurationFormGroup() {
		return new FormGroup<SalesforceChatterFeedConfigurationFormProperties>({
			DocumentDataFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DocumentTitleFieldName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SalesforceChatterFeedIncludeFilterType { ACTIVE_USER = 'ACTIVE_USER', STANDARD_USER = 'STANDARD_USER' }


	/** Provides the configuration information for processing attachments to Salesforce standard objects. */
	export interface SalesforceStandardObjectAttachmentConfiguration {
		DocumentTitleFieldName?: string;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
	}

	/** Provides the configuration information for processing attachments to Salesforce standard objects. */
	export interface SalesforceStandardObjectAttachmentConfigurationFormProperties {
		DocumentTitleFieldName: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceStandardObjectAttachmentConfigurationFormGroup() {
		return new FormGroup<SalesforceStandardObjectAttachmentConfigurationFormProperties>({
			DocumentTitleFieldName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration information to connect to OneDrive as your data source. */
	export interface OneDriveConfiguration {

		/** Required */
		TenantDomain: string;

		/** Required */
		SecretArn: string;

		/** Required */
		OneDriveUsers: OneDriveUsers;
		InclusionPatterns?: Array<string>;
		ExclusionPatterns?: Array<string>;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
		DisableLocalGroups?: boolean | null;
	}

	/** Provides the configuration information to connect to OneDrive as your data source. */
	export interface OneDriveConfigurationFormProperties {

		/** Required */
		TenantDomain: FormControl<string | null | undefined>,

		/** Required */
		SecretArn: FormControl<string | null | undefined>,
		DisableLocalGroups: FormControl<boolean | null | undefined>,
	}
	export function CreateOneDriveConfigurationFormGroup() {
		return new FormGroup<OneDriveConfigurationFormProperties>({
			TenantDomain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecretArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisableLocalGroups: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** User accounts whose documents should be indexed. */
	export interface OneDriveUsers {
		OneDriveUserList?: Array<string>;
		OneDriveUserS3Path?: S3Path;
	}

	/** User accounts whose documents should be indexed. */
	export interface OneDriveUsersFormProperties {
	}
	export function CreateOneDriveUsersFormGroup() {
		return new FormGroup<OneDriveUsersFormProperties>({
		});

	}


	/** Provides the configuration information to connect to ServiceNow as your data source. */
	export interface ServiceNowConfiguration {

		/** Required */
		HostUrl: string;

		/** Required */
		SecretArn: string;

		/** Required */
		ServiceNowBuildVersion: ServiceNowBuildVersionType;
		KnowledgeArticleConfiguration?: ServiceNowKnowledgeArticleConfiguration;
		ServiceCatalogConfiguration?: ServiceNowServiceCatalogConfiguration;
		AuthenticationType?: SharePointOnlineAuthenticationType;
	}

	/** Provides the configuration information to connect to ServiceNow as your data source. */
	export interface ServiceNowConfigurationFormProperties {

		/** Required */
		HostUrl: FormControl<string | null | undefined>,

		/** Required */
		SecretArn: FormControl<string | null | undefined>,

		/** Required */
		ServiceNowBuildVersion: FormControl<ServiceNowBuildVersionType | null | undefined>,
		AuthenticationType: FormControl<SharePointOnlineAuthenticationType | null | undefined>,
	}
	export function CreateServiceNowConfigurationFormGroup() {
		return new FormGroup<ServiceNowConfigurationFormProperties>({
			HostUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecretArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceNowBuildVersion: new FormControl<ServiceNowBuildVersionType | null | undefined>(undefined, [Validators.required]),
			AuthenticationType: new FormControl<SharePointOnlineAuthenticationType | null | undefined>(undefined),
		});

	}

	export enum ServiceNowBuildVersionType { LONDON = 'LONDON', OTHERS = 'OTHERS' }


	/** Provides the configuration information for crawling knowledge articles in the ServiceNow site. */
	export interface ServiceNowKnowledgeArticleConfiguration {
		CrawlAttachments?: boolean | null;
		IncludeAttachmentFilePatterns?: Array<string>;
		ExcludeAttachmentFilePatterns?: Array<string>;

		/** Required */
		DocumentDataFieldName: string;
		DocumentTitleFieldName?: string;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
		FilterQuery?: string;
	}

	/** Provides the configuration information for crawling knowledge articles in the ServiceNow site. */
	export interface ServiceNowKnowledgeArticleConfigurationFormProperties {
		CrawlAttachments: FormControl<boolean | null | undefined>,

		/** Required */
		DocumentDataFieldName: FormControl<string | null | undefined>,
		DocumentTitleFieldName: FormControl<string | null | undefined>,
		FilterQuery: FormControl<string | null | undefined>,
	}
	export function CreateServiceNowKnowledgeArticleConfigurationFormGroup() {
		return new FormGroup<ServiceNowKnowledgeArticleConfigurationFormProperties>({
			CrawlAttachments: new FormControl<boolean | null | undefined>(undefined),
			DocumentDataFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DocumentTitleFieldName: new FormControl<string | null | undefined>(undefined),
			FilterQuery: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration information for crawling service catalog items in the ServiceNow site */
	export interface ServiceNowServiceCatalogConfiguration {
		CrawlAttachments?: boolean | null;
		IncludeAttachmentFilePatterns?: Array<string>;
		ExcludeAttachmentFilePatterns?: Array<string>;

		/** Required */
		DocumentDataFieldName: string;
		DocumentTitleFieldName?: string;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
	}

	/** Provides the configuration information for crawling service catalog items in the ServiceNow site */
	export interface ServiceNowServiceCatalogConfigurationFormProperties {
		CrawlAttachments: FormControl<boolean | null | undefined>,

		/** Required */
		DocumentDataFieldName: FormControl<string | null | undefined>,
		DocumentTitleFieldName: FormControl<string | null | undefined>,
	}
	export function CreateServiceNowServiceCatalogConfigurationFormGroup() {
		return new FormGroup<ServiceNowServiceCatalogConfigurationFormProperties>({
			CrawlAttachments: new FormControl<boolean | null | undefined>(undefined),
			DocumentDataFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DocumentTitleFieldName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration information to connect to Confluence as your data source. */
	export interface ConfluenceConfiguration {

		/** Required */
		ServerUrl: string;

		/** Required */
		SecretArn: string;

		/** Required */
		Version: ConfluenceVersion;
		SpaceConfiguration?: ConfluenceSpaceConfiguration;
		PageConfiguration?: ConfluencePageConfiguration;
		BlogConfiguration?: ConfluenceBlogConfiguration;
		AttachmentConfiguration?: ConfluenceAttachmentConfiguration;
		VpcConfiguration?: DataSourceVpcConfiguration;
		InclusionPatterns?: Array<string>;
		ExclusionPatterns?: Array<string>;
		ProxyConfiguration?: ProxyConfiguration;
		AuthenticationType?: ConfluenceAuthenticationType;
	}

	/** Provides the configuration information to connect to Confluence as your data source. */
	export interface ConfluenceConfigurationFormProperties {

		/** Required */
		ServerUrl: FormControl<string | null | undefined>,

		/** Required */
		SecretArn: FormControl<string | null | undefined>,

		/** Required */
		Version: FormControl<ConfluenceVersion | null | undefined>,
		AuthenticationType: FormControl<ConfluenceAuthenticationType | null | undefined>,
	}
	export function CreateConfluenceConfigurationFormGroup() {
		return new FormGroup<ConfluenceConfigurationFormProperties>({
			ServerUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecretArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<ConfluenceVersion | null | undefined>(undefined, [Validators.required]),
			AuthenticationType: new FormControl<ConfluenceAuthenticationType | null | undefined>(undefined),
		});

	}

	export enum ConfluenceVersion { CLOUD = 'CLOUD', SERVER = 'SERVER' }


	/** Configuration information for indexing Confluence spaces. */
	export interface ConfluenceSpaceConfiguration {
		CrawlPersonalSpaces?: boolean | null;
		CrawlArchivedSpaces?: boolean | null;
		IncludeSpaces?: Array<string>;
		ExcludeSpaces?: Array<string>;
		SpaceFieldMappings?: Array<ConfluenceSpaceToIndexFieldMapping>;
	}

	/** Configuration information for indexing Confluence spaces. */
	export interface ConfluenceSpaceConfigurationFormProperties {
		CrawlPersonalSpaces: FormControl<boolean | null | undefined>,
		CrawlArchivedSpaces: FormControl<boolean | null | undefined>,
	}
	export function CreateConfluenceSpaceConfigurationFormGroup() {
		return new FormGroup<ConfluenceSpaceConfigurationFormProperties>({
			CrawlPersonalSpaces: new FormControl<boolean | null | undefined>(undefined),
			CrawlArchivedSpaces: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Maps attributes or field names of Confluence spaces to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confluence data source field names must exist in your Confluence custom metadata. */
	export interface ConfluenceSpaceToIndexFieldMapping {
		DataSourceFieldName?: ConfluenceSpaceFieldName;
		DateFieldFormat?: string;
		IndexFieldName?: string;
	}

	/** Maps attributes or field names of Confluence spaces to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confluence data source field names must exist in your Confluence custom metadata. */
	export interface ConfluenceSpaceToIndexFieldMappingFormProperties {
		DataSourceFieldName: FormControl<ConfluenceSpaceFieldName | null | undefined>,
		DateFieldFormat: FormControl<string | null | undefined>,
		IndexFieldName: FormControl<string | null | undefined>,
	}
	export function CreateConfluenceSpaceToIndexFieldMappingFormGroup() {
		return new FormGroup<ConfluenceSpaceToIndexFieldMappingFormProperties>({
			DataSourceFieldName: new FormControl<ConfluenceSpaceFieldName | null | undefined>(undefined),
			DateFieldFormat: new FormControl<string | null | undefined>(undefined),
			IndexFieldName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConfluenceSpaceFieldName { DISPLAY_URL = 'DISPLAY_URL', ITEM_TYPE = 'ITEM_TYPE', SPACE_KEY = 'SPACE_KEY', URL = 'URL' }


	/** Configuration of the page settings for the Confluence data source. */
	export interface ConfluencePageConfiguration {
		PageFieldMappings?: Array<ConfluencePageToIndexFieldMapping>;
	}

	/** Configuration of the page settings for the Confluence data source. */
	export interface ConfluencePageConfigurationFormProperties {
	}
	export function CreateConfluencePageConfigurationFormGroup() {
		return new FormGroup<ConfluencePageConfigurationFormProperties>({
		});

	}


	/** Maps attributes or field names of Confluence pages to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confluence data source field names must exist in your Confluence custom metadata. */
	export interface ConfluencePageToIndexFieldMapping {
		DataSourceFieldName?: ConfluencePageFieldName;
		DateFieldFormat?: string;
		IndexFieldName?: string;
	}

	/** Maps attributes or field names of Confluence pages to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confluence data source field names must exist in your Confluence custom metadata. */
	export interface ConfluencePageToIndexFieldMappingFormProperties {
		DataSourceFieldName: FormControl<ConfluencePageFieldName | null | undefined>,
		DateFieldFormat: FormControl<string | null | undefined>,
		IndexFieldName: FormControl<string | null | undefined>,
	}
	export function CreateConfluencePageToIndexFieldMappingFormGroup() {
		return new FormGroup<ConfluencePageToIndexFieldMappingFormProperties>({
			DataSourceFieldName: new FormControl<ConfluencePageFieldName | null | undefined>(undefined),
			DateFieldFormat: new FormControl<string | null | undefined>(undefined),
			IndexFieldName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConfluencePageFieldName { AUTHOR = 'AUTHOR', CONTENT_STATUS = 'CONTENT_STATUS', CREATED_DATE = 'CREATED_DATE', DISPLAY_URL = 'DISPLAY_URL', ITEM_TYPE = 'ITEM_TYPE', LABELS = 'LABELS', MODIFIED_DATE = 'MODIFIED_DATE', PARENT_ID = 'PARENT_ID', SPACE_KEY = 'SPACE_KEY', SPACE_NAME = 'SPACE_NAME', URL = 'URL', VERSION = 'VERSION' }


	/** Configuration of blog settings for the Confluence data source. Blogs are always indexed unless filtered from the index by the <code>ExclusionPatterns</code> or <code>InclusionPatterns</code> fields in the <code>ConfluenceConfiguration</code> object. */
	export interface ConfluenceBlogConfiguration {
		BlogFieldMappings?: Array<ConfluenceBlogToIndexFieldMapping>;
	}

	/** Configuration of blog settings for the Confluence data source. Blogs are always indexed unless filtered from the index by the <code>ExclusionPatterns</code> or <code>InclusionPatterns</code> fields in the <code>ConfluenceConfiguration</code> object. */
	export interface ConfluenceBlogConfigurationFormProperties {
	}
	export function CreateConfluenceBlogConfigurationFormGroup() {
		return new FormGroup<ConfluenceBlogConfigurationFormProperties>({
		});

	}


	/** Maps attributes or field names of Confluence blog to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confluence data source field names must exist in your Confluence custom metadata. */
	export interface ConfluenceBlogToIndexFieldMapping {
		DataSourceFieldName?: ConfluenceBlogFieldName;
		DateFieldFormat?: string;
		IndexFieldName?: string;
	}

	/** Maps attributes or field names of Confluence blog to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confluence data source field names must exist in your Confluence custom metadata. */
	export interface ConfluenceBlogToIndexFieldMappingFormProperties {
		DataSourceFieldName: FormControl<ConfluenceBlogFieldName | null | undefined>,
		DateFieldFormat: FormControl<string | null | undefined>,
		IndexFieldName: FormControl<string | null | undefined>,
	}
	export function CreateConfluenceBlogToIndexFieldMappingFormGroup() {
		return new FormGroup<ConfluenceBlogToIndexFieldMappingFormProperties>({
			DataSourceFieldName: new FormControl<ConfluenceBlogFieldName | null | undefined>(undefined),
			DateFieldFormat: new FormControl<string | null | undefined>(undefined),
			IndexFieldName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConfluenceBlogFieldName { AUTHOR = 'AUTHOR', DISPLAY_URL = 'DISPLAY_URL', ITEM_TYPE = 'ITEM_TYPE', LABELS = 'LABELS', PUBLISH_DATE = 'PUBLISH_DATE', SPACE_KEY = 'SPACE_KEY', SPACE_NAME = 'SPACE_NAME', URL = 'URL', VERSION = 'VERSION' }


	/** Configuration of attachment settings for the Confluence data source. Attachment settings are optional, if you don't specify settings attachments, Amazon Kendra won't index them. */
	export interface ConfluenceAttachmentConfiguration {
		CrawlAttachments?: boolean | null;
		AttachmentFieldMappings?: Array<ConfluenceAttachmentToIndexFieldMapping>;
	}

	/** Configuration of attachment settings for the Confluence data source. Attachment settings are optional, if you don't specify settings attachments, Amazon Kendra won't index them. */
	export interface ConfluenceAttachmentConfigurationFormProperties {
		CrawlAttachments: FormControl<boolean | null | undefined>,
	}
	export function CreateConfluenceAttachmentConfigurationFormGroup() {
		return new FormGroup<ConfluenceAttachmentConfigurationFormProperties>({
			CrawlAttachments: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Maps attributes or field names of Confluence attachments to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confuence data source field names must exist in your Confluence custom metadata. */
	export interface ConfluenceAttachmentToIndexFieldMapping {
		DataSourceFieldName?: ConfluenceAttachmentFieldName;
		DateFieldFormat?: string;
		IndexFieldName?: string;
	}

	/** Maps attributes or field names of Confluence attachments to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confuence data source field names must exist in your Confluence custom metadata. */
	export interface ConfluenceAttachmentToIndexFieldMappingFormProperties {
		DataSourceFieldName: FormControl<ConfluenceAttachmentFieldName | null | undefined>,
		DateFieldFormat: FormControl<string | null | undefined>,
		IndexFieldName: FormControl<string | null | undefined>,
	}
	export function CreateConfluenceAttachmentToIndexFieldMappingFormGroup() {
		return new FormGroup<ConfluenceAttachmentToIndexFieldMappingFormProperties>({
			DataSourceFieldName: new FormControl<ConfluenceAttachmentFieldName | null | undefined>(undefined),
			DateFieldFormat: new FormControl<string | null | undefined>(undefined),
			IndexFieldName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConfluenceAttachmentFieldName { AUTHOR = 'AUTHOR', CONTENT_TYPE = 'CONTENT_TYPE', CREATED_DATE = 'CREATED_DATE', DISPLAY_URL = 'DISPLAY_URL', FILE_SIZE = 'FILE_SIZE', ITEM_TYPE = 'ITEM_TYPE', PARENT_ID = 'PARENT_ID', SPACE_KEY = 'SPACE_KEY', SPACE_NAME = 'SPACE_NAME', URL = 'URL', VERSION = 'VERSION' }

	export enum ConfluenceAuthenticationType { HTTP_BASIC = 'HTTP_BASIC', PAT = 'PAT' }


	/** Provides the configuration information to connect to Google Drive as your data source. */
	export interface GoogleDriveConfiguration {

		/** Required */
		SecretArn: string;
		InclusionPatterns?: Array<string>;
		ExclusionPatterns?: Array<string>;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
		ExcludeMimeTypes?: Array<string>;
		ExcludeUserAccounts?: Array<string>;
		ExcludeSharedDrives?: Array<string>;
	}

	/** Provides the configuration information to connect to Google Drive as your data source. */
	export interface GoogleDriveConfigurationFormProperties {

		/** Required */
		SecretArn: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDriveConfigurationFormGroup() {
		return new FormGroup<GoogleDriveConfigurationFormProperties>({
			SecretArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the configuration information required for Amazon Kendra Web Crawler. */
	export interface WebCrawlerConfiguration {

		/** Required */
		Urls: Urls;
		CrawlDepth?: number | null;
		MaxLinksPerPage?: number | null;
		MaxContentSizePerPageInMegaBytes?: number;
		MaxUrlsPerMinuteCrawlRate?: number | null;
		UrlInclusionPatterns?: Array<string>;
		UrlExclusionPatterns?: Array<string>;
		ProxyConfiguration?: ProxyConfiguration;
		AuthenticationConfiguration?: AuthenticationConfiguration;
	}

	/** Provides the configuration information required for Amazon Kendra Web Crawler. */
	export interface WebCrawlerConfigurationFormProperties {
		CrawlDepth: FormControl<number | null | undefined>,
		MaxLinksPerPage: FormControl<number | null | undefined>,
		MaxContentSizePerPageInMegaBytes: FormControl<number | null | undefined>,
		MaxUrlsPerMinuteCrawlRate: FormControl<number | null | undefined>,
	}
	export function CreateWebCrawlerConfigurationFormGroup() {
		return new FormGroup<WebCrawlerConfigurationFormProperties>({
			CrawlDepth: new FormControl<number | null | undefined>(undefined),
			MaxLinksPerPage: new FormControl<number | null | undefined>(undefined),
			MaxContentSizePerPageInMegaBytes: new FormControl<number | null | undefined>(undefined),
			MaxUrlsPerMinuteCrawlRate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Provides the configuration information of the URLs to crawl.</p> <p>You can only crawl websites that use the secure communication protocol, Hypertext Transfer Protocol Secure (HTTPS). If you receive an error when crawling a website, it could be that the website is blocked from crawling.</p> <p> <i>When selecting websites to index, you must adhere to the <a href="https://aws.amazon.com/aup/">Amazon Acceptable Use Policy</a> and all other Amazon terms. Remember that you must only use Amazon Kendra Web Crawler to index your own web pages, or web pages that you have authorization to index.</i> </p> */
	export interface Urls {
		SeedUrlConfiguration?: SeedUrlConfiguration;
		SiteMapsConfiguration?: SiteMapsConfiguration;
	}

	/** <p>Provides the configuration information of the URLs to crawl.</p> <p>You can only crawl websites that use the secure communication protocol, Hypertext Transfer Protocol Secure (HTTPS). If you receive an error when crawling a website, it could be that the website is blocked from crawling.</p> <p> <i>When selecting websites to index, you must adhere to the <a href="https://aws.amazon.com/aup/">Amazon Acceptable Use Policy</a> and all other Amazon terms. Remember that you must only use Amazon Kendra Web Crawler to index your own web pages, or web pages that you have authorization to index.</i> </p> */
	export interface UrlsFormProperties {
	}
	export function CreateUrlsFormGroup() {
		return new FormGroup<UrlsFormProperties>({
		});

	}


	/** <p>Provides the configuration information for the seed or starting point URLs to crawl.</p> <p> <i>When selecting websites to index, you must adhere to the <a href="https://aws.amazon.com/aup/">Amazon Acceptable Use Policy</a> and all other Amazon terms. Remember that you must only use Amazon Kendra Web Crawler to index your own web pages, or web pages that you have authorization to index.</i> </p> */
	export interface SeedUrlConfiguration {

		/** Required */
		SeedUrls: Array<string>;
		WebCrawlerMode?: WebCrawlerMode;
	}

	/** <p>Provides the configuration information for the seed or starting point URLs to crawl.</p> <p> <i>When selecting websites to index, you must adhere to the <a href="https://aws.amazon.com/aup/">Amazon Acceptable Use Policy</a> and all other Amazon terms. Remember that you must only use Amazon Kendra Web Crawler to index your own web pages, or web pages that you have authorization to index.</i> </p> */
	export interface SeedUrlConfigurationFormProperties {
		WebCrawlerMode: FormControl<WebCrawlerMode | null | undefined>,
	}
	export function CreateSeedUrlConfigurationFormGroup() {
		return new FormGroup<SeedUrlConfigurationFormProperties>({
			WebCrawlerMode: new FormControl<WebCrawlerMode | null | undefined>(undefined),
		});

	}

	export enum WebCrawlerMode { HOST_ONLY = 'HOST_ONLY', SUBDOMAINS = 'SUBDOMAINS', EVERYTHING = 'EVERYTHING' }


	/** <p>Provides the configuration information for the sitemap URLs to crawl.</p> <p> <i>When selecting websites to index, you must adhere to the <a href="https://aws.amazon.com/aup/">Amazon Acceptable Use Policy</a> and all other Amazon terms. Remember that you must only use Amazon Kendra Web Crawler to index your own web pages, or web pages that you have authorization to index.</i> </p> */
	export interface SiteMapsConfiguration {

		/** Required */
		SiteMaps: Array<string>;
	}

	/** <p>Provides the configuration information for the sitemap URLs to crawl.</p> <p> <i>When selecting websites to index, you must adhere to the <a href="https://aws.amazon.com/aup/">Amazon Acceptable Use Policy</a> and all other Amazon terms. Remember that you must only use Amazon Kendra Web Crawler to index your own web pages, or web pages that you have authorization to index.</i> </p> */
	export interface SiteMapsConfigurationFormProperties {
	}
	export function CreateSiteMapsConfigurationFormGroup() {
		return new FormGroup<SiteMapsConfigurationFormProperties>({
		});

	}


	/** Provides the configuration information to connect to websites that require user authentication. */
	export interface AuthenticationConfiguration {
		BasicAuthentication?: Array<BasicAuthenticationConfiguration>;
	}

	/** Provides the configuration information to connect to websites that require user authentication. */
	export interface AuthenticationConfigurationFormProperties {
	}
	export function CreateAuthenticationConfigurationFormGroup() {
		return new FormGroup<AuthenticationConfigurationFormProperties>({
		});

	}


	/** Provides the configuration information to connect to websites that require basic user authentication. */
	export interface BasicAuthenticationConfiguration {

		/** Required */
		Host: string;

		/** Required */
		Port: number;

		/** Required */
		Credentials: string;
	}

	/** Provides the configuration information to connect to websites that require basic user authentication. */
	export interface BasicAuthenticationConfigurationFormProperties {

		/** Required */
		Host: FormControl<string | null | undefined>,

		/** Required */
		Port: FormControl<number | null | undefined>,

		/** Required */
		Credentials: FormControl<string | null | undefined>,
	}
	export function CreateBasicAuthenticationConfigurationFormGroup() {
		return new FormGroup<BasicAuthenticationConfigurationFormProperties>({
			Host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Credentials: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Provides the configuration information to connect to Amazon WorkDocs as your data source.</p> <p>Amazon WorkDocs connector is available in Oregon, North Virginia, Sydney, Singapore and Ireland regions.</p> */
	export interface WorkDocsConfiguration {

		/** Required */
		OrganizationId: string;
		CrawlComments?: boolean | null;
		UseChangeLog?: boolean | null;
		InclusionPatterns?: Array<string>;
		ExclusionPatterns?: Array<string>;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
	}

	/** <p>Provides the configuration information to connect to Amazon WorkDocs as your data source.</p> <p>Amazon WorkDocs connector is available in Oregon, North Virginia, Sydney, Singapore and Ireland regions.</p> */
	export interface WorkDocsConfigurationFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
		CrawlComments: FormControl<boolean | null | undefined>,
		UseChangeLog: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkDocsConfigurationFormGroup() {
		return new FormGroup<WorkDocsConfigurationFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CrawlComments: new FormControl<boolean | null | undefined>(undefined),
			UseChangeLog: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides the configuration information to connect to Amazon FSx as your data source. */
	export interface FsxConfiguration {

		/** Required */
		FileSystemId: string;

		/** Required */
		FileSystemType: FsxFileSystemType;

		/** Required */
		VpcConfiguration: DataSourceVpcConfiguration;
		SecretArn?: string;
		InclusionPatterns?: Array<string>;
		ExclusionPatterns?: Array<string>;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
	}

	/** Provides the configuration information to connect to Amazon FSx as your data source. */
	export interface FsxConfigurationFormProperties {

		/** Required */
		FileSystemId: FormControl<string | null | undefined>,

		/** Required */
		FileSystemType: FormControl<FsxFileSystemType | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,
	}
	export function CreateFsxConfigurationFormGroup() {
		return new FormGroup<FsxConfigurationFormProperties>({
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FileSystemType: new FormControl<FsxFileSystemType | null | undefined>(undefined, [Validators.required]),
			SecretArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FsxFileSystemType { WINDOWS = 'WINDOWS' }


	/** Provides the configuration information to connect to Slack as your data source. */
	export interface SlackConfiguration {

		/** Required */
		TeamId: string;

		/** Required */
		SecretArn: string;
		VpcConfiguration?: DataSourceVpcConfiguration;

		/** Required */
		SlackEntityList: Array<SlackEntity>;
		UseChangeLog?: boolean | null;
		CrawlBotMessage?: boolean | null;
		ExcludeArchived?: boolean | null;

		/** Required */
		SinceCrawlDate: string;
		LookBackPeriod?: number | null;
		PrivateChannelFilter?: Array<string>;
		PublicChannelFilter?: Array<string>;
		InclusionPatterns?: Array<string>;
		ExclusionPatterns?: Array<string>;
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
	}

	/** Provides the configuration information to connect to Slack as your data source. */
	export interface SlackConfigurationFormProperties {

		/** Required */
		TeamId: FormControl<string | null | undefined>,

		/** Required */
		SecretArn: FormControl<string | null | undefined>,
		UseChangeLog: FormControl<boolean | null | undefined>,
		CrawlBotMessage: FormControl<boolean | null | undefined>,
		ExcludeArchived: FormControl<boolean | null | undefined>,

		/** Required */
		SinceCrawlDate: FormControl<string | null | undefined>,
		LookBackPeriod: FormControl<number | null | undefined>,
	}
	export function CreateSlackConfigurationFormGroup() {
		return new FormGroup<SlackConfigurationFormProperties>({
			TeamId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecretArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UseChangeLog: new FormControl<boolean | null | undefined>(undefined),
			CrawlBotMessage: new FormControl<boolean | null | undefined>(undefined),
			ExcludeArchived: new FormControl<boolean | null | undefined>(undefined),
			SinceCrawlDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LookBackPeriod: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SlackEntity { PUBLIC_CHANNEL = 'PUBLIC_CHANNEL', PRIVATE_CHANNEL = 'PRIVATE_CHANNEL', GROUP_MESSAGE = 'GROUP_MESSAGE', DIRECT_MESSAGE = 'DIRECT_MESSAGE' }


	/** Provides the configuration information to connect to Box as your data source. */
	export interface BoxConfiguration {

		/** Required */
		EnterpriseId: string;

		/** Required */
		SecretArn: string;
		UseChangeLog?: boolean | null;
		CrawlComments?: boolean | null;
		CrawlTasks?: boolean | null;
		CrawlWebLinks?: boolean | null;
		FileFieldMappings?: Array<DataSourceToIndexFieldMapping>;
		TaskFieldMappings?: Array<DataSourceToIndexFieldMapping>;
		CommentFieldMappings?: Array<DataSourceToIndexFieldMapping>;
		WebLinkFieldMappings?: Array<DataSourceToIndexFieldMapping>;
		InclusionPatterns?: Array<string>;
		ExclusionPatterns?: Array<string>;
		VpcConfiguration?: DataSourceVpcConfiguration;
	}

	/** Provides the configuration information to connect to Box as your data source. */
	export interface BoxConfigurationFormProperties {

		/** Required */
		EnterpriseId: FormControl<string | null | undefined>,

		/** Required */
		SecretArn: FormControl<string | null | undefined>,
		UseChangeLog: FormControl<boolean | null | undefined>,
		CrawlComments: FormControl<boolean | null | undefined>,
		CrawlTasks: FormControl<boolean | null | undefined>,
		CrawlWebLinks: FormControl<boolean | null | undefined>,
	}
	export function CreateBoxConfigurationFormGroup() {
		return new FormGroup<BoxConfigurationFormProperties>({
			EnterpriseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecretArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UseChangeLog: new FormControl<boolean | null | undefined>(undefined),
			CrawlComments: new FormControl<boolean | null | undefined>(undefined),
			CrawlTasks: new FormControl<boolean | null | undefined>(undefined),
			CrawlWebLinks: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides the configuration information to connect to Quip as your data source. */
	export interface QuipConfiguration {

		/** Required */
		Domain: string;

		/** Required */
		SecretArn: string;
		CrawlFileComments?: boolean | null;
		CrawlChatRooms?: boolean | null;
		CrawlAttachments?: boolean | null;
		FolderIds?: Array<string>;
		ThreadFieldMappings?: Array<DataSourceToIndexFieldMapping>;
		MessageFieldMappings?: Array<DataSourceToIndexFieldMapping>;
		AttachmentFieldMappings?: Array<DataSourceToIndexFieldMapping>;
		InclusionPatterns?: Array<string>;
		ExclusionPatterns?: Array<string>;
		VpcConfiguration?: DataSourceVpcConfiguration;
	}

	/** Provides the configuration information to connect to Quip as your data source. */
	export interface QuipConfigurationFormProperties {

		/** Required */
		Domain: FormControl<string | null | undefined>,

		/** Required */
		SecretArn: FormControl<string | null | undefined>,
		CrawlFileComments: FormControl<boolean | null | undefined>,
		CrawlChatRooms: FormControl<boolean | null | undefined>,
		CrawlAttachments: FormControl<boolean | null | undefined>,
	}
	export function CreateQuipConfigurationFormGroup() {
		return new FormGroup<QuipConfigurationFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecretArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CrawlFileComments: new FormControl<boolean | null | undefined>(undefined),
			CrawlChatRooms: new FormControl<boolean | null | undefined>(undefined),
			CrawlAttachments: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides the configuration information to connect to Jira as your data source. */
	export interface JiraConfiguration {

		/** Required */
		JiraAccountUrl: string;

		/** Required */
		SecretArn: string;
		UseChangeLog?: boolean | null;
		Project?: Array<string>;
		IssueType?: Array<string>;
		Status?: Array<string>;
		IssueSubEntityFilter?: Array<IssueSubEntity>;
		AttachmentFieldMappings?: Array<DataSourceToIndexFieldMapping>;
		CommentFieldMappings?: Array<DataSourceToIndexFieldMapping>;
		IssueFieldMappings?: Array<DataSourceToIndexFieldMapping>;
		ProjectFieldMappings?: Array<DataSourceToIndexFieldMapping>;
		WorkLogFieldMappings?: Array<DataSourceToIndexFieldMapping>;
		InclusionPatterns?: Array<string>;
		ExclusionPatterns?: Array<string>;
		VpcConfiguration?: DataSourceVpcConfiguration;
	}

	/** Provides the configuration information to connect to Jira as your data source. */
	export interface JiraConfigurationFormProperties {

		/** Required */
		JiraAccountUrl: FormControl<string | null | undefined>,

		/** Required */
		SecretArn: FormControl<string | null | undefined>,
		UseChangeLog: FormControl<boolean | null | undefined>,
	}
	export function CreateJiraConfigurationFormGroup() {
		return new FormGroup<JiraConfigurationFormProperties>({
			JiraAccountUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecretArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UseChangeLog: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum IssueSubEntity { COMMENTS = 'COMMENTS', ATTACHMENTS = 'ATTACHMENTS', WORKLOGS = 'WORKLOGS' }


	/** Provides the configuration information to connect to GitHub as your data source. */
	export interface GitHubConfiguration {
		SaaSConfiguration?: SaaSConfiguration;
		OnPremiseConfiguration?: OnPremiseConfiguration;
		Type?: Type;

		/** Required */
		SecretArn: string;
		UseChangeLog?: boolean | null;
		GitHubDocumentCrawlProperties?: GitHubDocumentCrawlProperties;
		RepositoryFilter?: Array<string>;
		InclusionFolderNamePatterns?: Array<string>;
		InclusionFileTypePatterns?: Array<string>;
		InclusionFileNamePatterns?: Array<string>;
		ExclusionFolderNamePatterns?: Array<string>;
		ExclusionFileTypePatterns?: Array<string>;
		ExclusionFileNamePatterns?: Array<string>;
		VpcConfiguration?: DataSourceVpcConfiguration;
		GitHubRepositoryConfigurationFieldMappings?: Array<DataSourceToIndexFieldMapping>;
		GitHubCommitConfigurationFieldMappings?: Array<DataSourceToIndexFieldMapping>;
		GitHubIssueDocumentConfigurationFieldMappings?: Array<DataSourceToIndexFieldMapping>;
		GitHubIssueCommentConfigurationFieldMappings?: Array<DataSourceToIndexFieldMapping>;
		GitHubIssueAttachmentConfigurationFieldMappings?: Array<DataSourceToIndexFieldMapping>;
		GitHubPullRequestCommentConfigurationFieldMappings?: Array<DataSourceToIndexFieldMapping>;
		GitHubPullRequestDocumentConfigurationFieldMappings?: Array<DataSourceToIndexFieldMapping>;
		GitHubPullRequestDocumentAttachmentConfigurationFieldMappings?: Array<DataSourceToIndexFieldMapping>;
	}

	/** Provides the configuration information to connect to GitHub as your data source. */
	export interface GitHubConfigurationFormProperties {
		Type: FormControl<Type | null | undefined>,

		/** Required */
		SecretArn: FormControl<string | null | undefined>,
		UseChangeLog: FormControl<boolean | null | undefined>,
	}
	export function CreateGitHubConfigurationFormGroup() {
		return new FormGroup<GitHubConfigurationFormProperties>({
			Type: new FormControl<Type | null | undefined>(undefined),
			SecretArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UseChangeLog: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides the configuration information to connect to GitHub Enterprise Cloud (SaaS). */
	export interface SaaSConfiguration {

		/** Required */
		OrganizationName: string;

		/** Required */
		HostUrl: string;
	}

	/** Provides the configuration information to connect to GitHub Enterprise Cloud (SaaS). */
	export interface SaaSConfigurationFormProperties {

		/** Required */
		OrganizationName: FormControl<string | null | undefined>,

		/** Required */
		HostUrl: FormControl<string | null | undefined>,
	}
	export function CreateSaaSConfigurationFormGroup() {
		return new FormGroup<SaaSConfigurationFormProperties>({
			OrganizationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HostUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the configuration information to connect to GitHub Enterprise Server (on premises). */
	export interface OnPremiseConfiguration {

		/** Required */
		HostUrl: string;

		/** Required */
		OrganizationName: string;

		/** Required */
		SslCertificateS3Path: S3Path;
	}

	/** Provides the configuration information to connect to GitHub Enterprise Server (on premises). */
	export interface OnPremiseConfigurationFormProperties {

		/** Required */
		HostUrl: FormControl<string | null | undefined>,

		/** Required */
		OrganizationName: FormControl<string | null | undefined>,
	}
	export function CreateOnPremiseConfigurationFormGroup() {
		return new FormGroup<OnPremiseConfigurationFormProperties>({
			HostUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OrganizationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Type { SAAS = 'SAAS', ON_PREMISE = 'ON_PREMISE' }


	/** Provides the configuration information to include certain types of GitHub content. You can configure to index repository files only, or also include issues and pull requests, comments, and comment attachments. */
	export interface GitHubDocumentCrawlProperties {
		CrawlRepositoryDocuments?: boolean | null;
		CrawlIssue?: boolean | null;
		CrawlIssueComment?: boolean | null;
		CrawlIssueCommentAttachment?: boolean | null;
		CrawlPullRequest?: boolean | null;
		CrawlPullRequestComment?: boolean | null;
		CrawlPullRequestCommentAttachment?: boolean | null;
	}

	/** Provides the configuration information to include certain types of GitHub content. You can configure to index repository files only, or also include issues and pull requests, comments, and comment attachments. */
	export interface GitHubDocumentCrawlPropertiesFormProperties {
		CrawlRepositoryDocuments: FormControl<boolean | null | undefined>,
		CrawlIssue: FormControl<boolean | null | undefined>,
		CrawlIssueComment: FormControl<boolean | null | undefined>,
		CrawlIssueCommentAttachment: FormControl<boolean | null | undefined>,
		CrawlPullRequest: FormControl<boolean | null | undefined>,
		CrawlPullRequestComment: FormControl<boolean | null | undefined>,
		CrawlPullRequestCommentAttachment: FormControl<boolean | null | undefined>,
	}
	export function CreateGitHubDocumentCrawlPropertiesFormGroup() {
		return new FormGroup<GitHubDocumentCrawlPropertiesFormProperties>({
			CrawlRepositoryDocuments: new FormControl<boolean | null | undefined>(undefined),
			CrawlIssue: new FormControl<boolean | null | undefined>(undefined),
			CrawlIssueComment: new FormControl<boolean | null | undefined>(undefined),
			CrawlIssueCommentAttachment: new FormControl<boolean | null | undefined>(undefined),
			CrawlPullRequest: new FormControl<boolean | null | undefined>(undefined),
			CrawlPullRequestComment: new FormControl<boolean | null | undefined>(undefined),
			CrawlPullRequestCommentAttachment: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Provides the configuration information to connect to Alfresco as your data source.</p> <note> <p>Support for <code>AlfrescoConfiguration</code> ended May 2023. We recommend migrating to or using the Alfresco data source template schema / <a href="https://docs.aws.amazon.com/kendra/latest/APIReference/API_TemplateConfiguration.html">TemplateConfiguration</a> API.</p> </note> */
	export interface AlfrescoConfiguration {

		/** Required */
		SiteUrl: string;

		/** Required */
		SiteId: string;

		/** Required */
		SecretArn: string;

		/** Required */
		SslCertificateS3Path: S3Path;
		CrawlSystemFolders?: boolean | null;
		CrawlComments?: boolean | null;
		EntityFilter?: Array<AlfrescoEntity>;
		DocumentLibraryFieldMappings?: Array<DataSourceToIndexFieldMapping>;
		BlogFieldMappings?: Array<DataSourceToIndexFieldMapping>;
		WikiFieldMappings?: Array<DataSourceToIndexFieldMapping>;
		InclusionPatterns?: Array<string>;
		ExclusionPatterns?: Array<string>;
		VpcConfiguration?: DataSourceVpcConfiguration;
	}

	/** <p>Provides the configuration information to connect to Alfresco as your data source.</p> <note> <p>Support for <code>AlfrescoConfiguration</code> ended May 2023. We recommend migrating to or using the Alfresco data source template schema / <a href="https://docs.aws.amazon.com/kendra/latest/APIReference/API_TemplateConfiguration.html">TemplateConfiguration</a> API.</p> </note> */
	export interface AlfrescoConfigurationFormProperties {

		/** Required */
		SiteUrl: FormControl<string | null | undefined>,

		/** Required */
		SiteId: FormControl<string | null | undefined>,

		/** Required */
		SecretArn: FormControl<string | null | undefined>,
		CrawlSystemFolders: FormControl<boolean | null | undefined>,
		CrawlComments: FormControl<boolean | null | undefined>,
	}
	export function CreateAlfrescoConfigurationFormGroup() {
		return new FormGroup<AlfrescoConfigurationFormProperties>({
			SiteUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SiteId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecretArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CrawlSystemFolders: new FormControl<boolean | null | undefined>(undefined),
			CrawlComments: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum AlfrescoEntity { wiki = 'wiki', blog = 'blog', documentLibrary = 'documentLibrary' }


	/** Provides a template for the configuration information to connect to your data source. */
	export interface TemplateConfiguration {
		Template?: Template;
	}

	/** Provides a template for the configuration information to connect to your data source. */
	export interface TemplateConfigurationFormProperties {
	}
	export function CreateTemplateConfigurationFormGroup() {
		return new FormGroup<TemplateConfigurationFormProperties>({
		});

	}


	/** <p>The template schema used for the data source, where templates schemas are supported.</p> <p>See <a href="https://docs.aws.amazon.com/kendra/latest/dg/ds-schemas.html">Data source template schemas</a>.</p> */
	export interface Template {
	}

	/** <p>The template schema used for the data source, where templates schemas are supported.</p> <p>See <a href="https://docs.aws.amazon.com/kendra/latest/dg/ds-schemas.html">Data source template schemas</a>.</p> */
	export interface TemplateFormProperties {
	}
	export function CreateTemplateFormGroup() {
		return new FormGroup<TemplateFormProperties>({
		});

	}


	/** A list of key/value pairs that identify an index, FAQ, or data source. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A list of key/value pairs that identify an index, FAQ, or data source. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateExperienceResponse {

		/** Required */
		Id: string;
	}
	export interface CreateExperienceResponseFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreateExperienceResponseFormGroup() {
		return new FormGroup<CreateExperienceResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateExperienceRequest {

		/** Required */
		Name: string;

		/** Required */
		IndexId: string;
		RoleArn?: string;
		Configuration?: ExperienceConfiguration;
		Description?: string;
		ClientToken?: string;
	}
	export interface CreateExperienceRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		IndexId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateExperienceRequestFormGroup() {
		return new FormGroup<CreateExperienceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration information for your Amazon Kendra experience. This includes the data source IDs and/or FAQ IDs, and user or group information to grant access to your Amazon Kendra experience. */
	export interface ExperienceConfiguration {
		ContentSourceConfiguration?: ContentSourceConfiguration;
		UserIdentityConfiguration?: UserIdentityConfiguration;
	}

	/** Provides the configuration information for your Amazon Kendra experience. This includes the data source IDs and/or FAQ IDs, and user or group information to grant access to your Amazon Kendra experience. */
	export interface ExperienceConfigurationFormProperties {
	}
	export function CreateExperienceConfigurationFormGroup() {
		return new FormGroup<ExperienceConfigurationFormProperties>({
		});

	}


	/** Provides the configuration information for your content sources, such as data sources, FAQs, and content indexed directly via <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a>. */
	export interface ContentSourceConfiguration {
		DataSourceIds?: Array<string>;
		FaqIds?: Array<string>;
		DirectPutContent?: boolean | null;
	}

	/** Provides the configuration information for your content sources, such as data sources, FAQs, and content indexed directly via <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a>. */
	export interface ContentSourceConfigurationFormProperties {
		DirectPutContent: FormControl<boolean | null | undefined>,
	}
	export function CreateContentSourceConfigurationFormGroup() {
		return new FormGroup<ContentSourceConfigurationFormProperties>({
			DirectPutContent: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides the configuration information for the identifiers of your users. */
	export interface UserIdentityConfiguration {
		IdentityAttributeName?: string;
	}

	/** Provides the configuration information for the identifiers of your users. */
	export interface UserIdentityConfigurationFormProperties {
		IdentityAttributeName: FormControl<string | null | undefined>,
	}
	export function CreateUserIdentityConfigurationFormGroup() {
		return new FormGroup<UserIdentityConfigurationFormProperties>({
			IdentityAttributeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFaqResponse {
		Id?: string;
	}
	export interface CreateFaqResponseFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreateFaqResponseFormGroup() {
		return new FormGroup<CreateFaqResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFaqRequest {

		/** Required */
		IndexId: string;

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		S3Path: S3Path;

		/** Required */
		RoleArn: string;
		Tags?: Array<Tag>;
		FileFormat?: FaqFileFormat;
		ClientToken?: string;
		LanguageCode?: string;
	}
	export interface CreateFaqRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
		FileFormat: FormControl<FaqFileFormat | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		LanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateCreateFaqRequestFormGroup() {
		return new FormGroup<CreateFaqRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FileFormat: new FormControl<FaqFileFormat | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FaqFileFormat { CSV = 'CSV', CSV_WITH_HEADER = 'CSV_WITH_HEADER', JSON = 'JSON' }

	export interface CreateFeaturedResultsSetResponse {
		FeaturedResultsSet?: FeaturedResultsSet;
	}
	export interface CreateFeaturedResultsSetResponseFormProperties {
	}
	export function CreateCreateFeaturedResultsSetResponseFormGroup() {
		return new FormGroup<CreateFeaturedResultsSetResponseFormProperties>({
		});

	}


	/** A set of featured results that are displayed at the top of your search results. Featured results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results. */
	export interface FeaturedResultsSet {
		FeaturedResultsSetId?: string;
		FeaturedResultsSetName?: string;
		Description?: string;
		Status?: FeaturedResultsSetStatus;
		QueryTexts?: Array<string>;
		FeaturedDocuments?: Array<FeaturedDocument>;
		LastUpdatedTimestamp?: number | null;
		CreationTimestamp?: number | null;
	}

	/** A set of featured results that are displayed at the top of your search results. Featured results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results. */
	export interface FeaturedResultsSetFormProperties {
		FeaturedResultsSetId: FormControl<string | null | undefined>,
		FeaturedResultsSetName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<FeaturedResultsSetStatus | null | undefined>,
		LastUpdatedTimestamp: FormControl<number | null | undefined>,
		CreationTimestamp: FormControl<number | null | undefined>,
	}
	export function CreateFeaturedResultsSetFormGroup() {
		return new FormGroup<FeaturedResultsSetFormProperties>({
			FeaturedResultsSetId: new FormControl<string | null | undefined>(undefined),
			FeaturedResultsSetName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<FeaturedResultsSetStatus | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<number | null | undefined>(undefined),
			CreationTimestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FeaturedResultsSetStatus { ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE' }


	/** A featured document. This document is displayed at the top of the search results page, placed above all other results for certain queries. If there's an exact match of a query, then the document is featured in the search results. */
	export interface FeaturedDocument {
		Id?: string;
	}

	/** A featured document. This document is displayed at the top of the search results page, placed above all other results for certain queries. If there's an exact match of a query, then the document is featured in the search results. */
	export interface FeaturedDocumentFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateFeaturedDocumentFormGroup() {
		return new FormGroup<FeaturedDocumentFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFeaturedResultsSetRequest {

		/** Required */
		IndexId: string;

		/** Required */
		FeaturedResultsSetName: string;
		Description?: string;
		ClientToken?: string;
		Status?: FeaturedResultsSetStatus;
		QueryTexts?: Array<string>;
		FeaturedDocuments?: Array<FeaturedDocument>;
		Tags?: Array<Tag>;
	}
	export interface CreateFeaturedResultsSetRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,

		/** Required */
		FeaturedResultsSetName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		Status: FormControl<FeaturedResultsSetStatus | null | undefined>,
	}
	export function CreateCreateFeaturedResultsSetRequestFormGroup() {
		return new FormGroup<CreateFeaturedResultsSetRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FeaturedResultsSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<FeaturedResultsSetStatus | null | undefined>(undefined),
		});

	}

	export interface FeaturedResultsConflictException {
	}
	export interface FeaturedResultsConflictExceptionFormProperties {
	}
	export function CreateFeaturedResultsConflictExceptionFormGroup() {
		return new FormGroup<FeaturedResultsConflictExceptionFormProperties>({
		});

	}

	export interface CreateIndexResponse {
		Id?: string;
	}
	export interface CreateIndexResponseFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreateIndexResponseFormGroup() {
		return new FormGroup<CreateIndexResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateIndexRequest {

		/** Required */
		Name: string;
		Edition?: IndexEdition;

		/** Required */
		RoleArn: string;
		ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
		Description?: string;
		ClientToken?: string;
		Tags?: Array<Tag>;
		UserTokenConfigurations?: Array<UserTokenConfiguration>;
		UserContextPolicy?: UserContextPolicy;
		UserGroupResolutionConfiguration?: UserGroupResolutionConfiguration;
	}
	export interface CreateIndexRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Edition: FormControl<IndexEdition | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		UserContextPolicy: FormControl<UserContextPolicy | null | undefined>,
	}
	export function CreateCreateIndexRequestFormGroup() {
		return new FormGroup<CreateIndexRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Edition: new FormControl<IndexEdition | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			UserContextPolicy: new FormControl<UserContextPolicy | null | undefined>(undefined),
		});

	}

	export enum IndexEdition { DEVELOPER_EDITION = 'DEVELOPER_EDITION', ENTERPRISE_EDITION = 'ENTERPRISE_EDITION' }


	/** Provides the identifier of the KMS key used to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric keys. */
	export interface ServerSideEncryptionConfiguration {
		KmsKeyId?: string;
	}

	/** Provides the identifier of the KMS key used to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric keys. */
	export interface ServerSideEncryptionConfigurationFormProperties {
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateServerSideEncryptionConfigurationFormGroup() {
		return new FormGroup<ServerSideEncryptionConfigurationFormProperties>({
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration information for a token. */
	export interface UserTokenConfiguration {
		JwtTokenTypeConfiguration?: JwtTokenTypeConfiguration;
		JsonTokenTypeConfiguration?: JsonTokenTypeConfiguration;
	}

	/** Provides the configuration information for a token. */
	export interface UserTokenConfigurationFormProperties {
	}
	export function CreateUserTokenConfigurationFormGroup() {
		return new FormGroup<UserTokenConfigurationFormProperties>({
		});

	}


	/** Provides the configuration information for the JWT token type. */
	export interface JwtTokenTypeConfiguration {

		/** Required */
		KeyLocation: KeyLocation;
		URL?: string;
		SecretManagerArn?: string;
		UserNameAttributeField?: string;
		GroupAttributeField?: string;
		Issuer?: string;
		ClaimRegex?: string;
	}

	/** Provides the configuration information for the JWT token type. */
	export interface JwtTokenTypeConfigurationFormProperties {

		/** Required */
		KeyLocation: FormControl<KeyLocation | null | undefined>,
		URL: FormControl<string | null | undefined>,
		SecretManagerArn: FormControl<string | null | undefined>,
		UserNameAttributeField: FormControl<string | null | undefined>,
		GroupAttributeField: FormControl<string | null | undefined>,
		Issuer: FormControl<string | null | undefined>,
		ClaimRegex: FormControl<string | null | undefined>,
	}
	export function CreateJwtTokenTypeConfigurationFormGroup() {
		return new FormGroup<JwtTokenTypeConfigurationFormProperties>({
			KeyLocation: new FormControl<KeyLocation | null | undefined>(undefined, [Validators.required]),
			URL: new FormControl<string | null | undefined>(undefined),
			SecretManagerArn: new FormControl<string | null | undefined>(undefined),
			UserNameAttributeField: new FormControl<string | null | undefined>(undefined),
			GroupAttributeField: new FormControl<string | null | undefined>(undefined),
			Issuer: new FormControl<string | null | undefined>(undefined),
			ClaimRegex: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum KeyLocation { URL = 'URL', SECRET_MANAGER = 'SECRET_MANAGER' }


	/** Provides the configuration information for the JSON token type. */
	export interface JsonTokenTypeConfiguration {

		/** Required */
		UserNameAttributeField: string;

		/** Required */
		GroupAttributeField: string;
	}

	/** Provides the configuration information for the JSON token type. */
	export interface JsonTokenTypeConfigurationFormProperties {

		/** Required */
		UserNameAttributeField: FormControl<string | null | undefined>,

		/** Required */
		GroupAttributeField: FormControl<string | null | undefined>,
	}
	export function CreateJsonTokenTypeConfigurationFormGroup() {
		return new FormGroup<JsonTokenTypeConfigurationFormProperties>({
			UserNameAttributeField: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupAttributeField: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UserContextPolicy { ATTRIBUTE_FILTER = 'ATTRIBUTE_FILTER', USER_TOKEN = 'USER_TOKEN' }


	/** <p>Provides the configuration information to get users and groups from an IAM Identity Center (successor to Single Sign-On) identity source. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. You can also use the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_PutPrincipalMapping.html">PutPrincipalMapping</a> API to map users to their groups so that you only need to provide the user ID when you issue the query.</p> <p>To set up an IAM Identity Center identity source in the console to use with Amazon Kendra, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/getting-started-aws-sso.html">Getting started with an IAM Identity Center identity source</a>. You must also grant the required permissions to use IAM Identity Center with Amazon Kendra. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html#iam-roles-aws-sso">IAM roles for IAM Identity Center</a>.</p> <p>Amazon Kendra currently does not support using <code>UserGroupResolutionConfiguration</code> with an Amazon Web Services organization member account for your IAM Identity Center identify source. You must create your index in the management account for the organization in order to use <code>UserGroupResolutionConfiguration</code>.</p> */
	export interface UserGroupResolutionConfiguration {

		/** Required */
		UserGroupResolutionMode: UserGroupResolutionMode;
	}

	/** <p>Provides the configuration information to get users and groups from an IAM Identity Center (successor to Single Sign-On) identity source. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. You can also use the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_PutPrincipalMapping.html">PutPrincipalMapping</a> API to map users to their groups so that you only need to provide the user ID when you issue the query.</p> <p>To set up an IAM Identity Center identity source in the console to use with Amazon Kendra, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/getting-started-aws-sso.html">Getting started with an IAM Identity Center identity source</a>. You must also grant the required permissions to use IAM Identity Center with Amazon Kendra. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html#iam-roles-aws-sso">IAM roles for IAM Identity Center</a>.</p> <p>Amazon Kendra currently does not support using <code>UserGroupResolutionConfiguration</code> with an Amazon Web Services organization member account for your IAM Identity Center identify source. You must create your index in the management account for the organization in order to use <code>UserGroupResolutionConfiguration</code>.</p> */
	export interface UserGroupResolutionConfigurationFormProperties {

		/** Required */
		UserGroupResolutionMode: FormControl<UserGroupResolutionMode | null | undefined>,
	}
	export function CreateUserGroupResolutionConfigurationFormGroup() {
		return new FormGroup<UserGroupResolutionConfigurationFormProperties>({
			UserGroupResolutionMode: new FormControl<UserGroupResolutionMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UserGroupResolutionMode { AWS_SSO = 'AWS_SSO', NONE = 'NONE' }

	export interface CreateQuerySuggestionsBlockListResponse {
		Id?: string;
	}
	export interface CreateQuerySuggestionsBlockListResponseFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreateQuerySuggestionsBlockListResponseFormGroup() {
		return new FormGroup<CreateQuerySuggestionsBlockListResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateQuerySuggestionsBlockListRequest {

		/** Required */
		IndexId: string;

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		SourceS3Path: S3Path;
		ClientToken?: string;

		/** Required */
		RoleArn: string;
		Tags?: Array<Tag>;
	}
	export interface CreateQuerySuggestionsBlockListRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateQuerySuggestionsBlockListRequestFormGroup() {
		return new FormGroup<CreateQuerySuggestionsBlockListRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateThesaurusResponse {
		Id?: string;
	}
	export interface CreateThesaurusResponseFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreateThesaurusResponseFormGroup() {
		return new FormGroup<CreateThesaurusResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateThesaurusRequest {

		/** Required */
		IndexId: string;

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		RoleArn: string;
		Tags?: Array<Tag>;

		/** Required */
		SourceS3Path: S3Path;
		ClientToken?: string;
	}
	export interface CreateThesaurusRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateThesaurusRequestFormGroup() {
		return new FormGroup<CreateThesaurusRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAccessControlConfigurationResponse {
	}
	export interface DeleteAccessControlConfigurationResponseFormProperties {
	}
	export function CreateDeleteAccessControlConfigurationResponseFormGroup() {
		return new FormGroup<DeleteAccessControlConfigurationResponseFormProperties>({
		});

	}

	export interface DeleteAccessControlConfigurationRequest {

		/** Required */
		IndexId: string;

		/** Required */
		Id: string;
	}
	export interface DeleteAccessControlConfigurationRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAccessControlConfigurationRequestFormGroup() {
		return new FormGroup<DeleteAccessControlConfigurationRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDataSourceRequest {

		/** Required */
		Id: string;

		/** Required */
		IndexId: string;
	}
	export interface DeleteDataSourceRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDataSourceRequestFormGroup() {
		return new FormGroup<DeleteDataSourceRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteExperienceResponse {
	}
	export interface DeleteExperienceResponseFormProperties {
	}
	export function CreateDeleteExperienceResponseFormGroup() {
		return new FormGroup<DeleteExperienceResponseFormProperties>({
		});

	}

	export interface DeleteExperienceRequest {

		/** Required */
		Id: string;

		/** Required */
		IndexId: string;
	}
	export interface DeleteExperienceRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteExperienceRequestFormGroup() {
		return new FormGroup<DeleteExperienceRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteFaqRequest {

		/** Required */
		Id: string;

		/** Required */
		IndexId: string;
	}
	export interface DeleteFaqRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFaqRequestFormGroup() {
		return new FormGroup<DeleteFaqRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteIndexRequest {

		/** Required */
		Id: string;
	}
	export interface DeleteIndexRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIndexRequestFormGroup() {
		return new FormGroup<DeleteIndexRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePrincipalMappingRequest {

		/** Required */
		IndexId: string;
		DataSourceId?: string;

		/** Required */
		GroupId: string;
		OrderingId?: number | null;
	}
	export interface DeletePrincipalMappingRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,
		DataSourceId: FormControl<string | null | undefined>,

		/** Required */
		GroupId: FormControl<string | null | undefined>,
		OrderingId: FormControl<number | null | undefined>,
	}
	export function CreateDeletePrincipalMappingRequestFormGroup() {
		return new FormGroup<DeletePrincipalMappingRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataSourceId: new FormControl<string | null | undefined>(undefined),
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OrderingId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteQuerySuggestionsBlockListRequest {

		/** Required */
		IndexId: string;

		/** Required */
		Id: string;
	}
	export interface DeleteQuerySuggestionsBlockListRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteQuerySuggestionsBlockListRequestFormGroup() {
		return new FormGroup<DeleteQuerySuggestionsBlockListRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteThesaurusRequest {

		/** Required */
		Id: string;

		/** Required */
		IndexId: string;
	}
	export interface DeleteThesaurusRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteThesaurusRequestFormGroup() {
		return new FormGroup<DeleteThesaurusRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAccessControlConfigurationResponse {

		/** Required */
		Name: string;
		Description?: string;
		ErrorMessage?: string;
		AccessControlList?: Array<Principal>;
		HierarchicalAccessControlList?: Array<HierarchicalPrincipal>;
	}
	export interface DescribeAccessControlConfigurationResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccessControlConfigurationResponseFormGroup() {
		return new FormGroup<DescribeAccessControlConfigurationResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAccessControlConfigurationRequest {

		/** Required */
		IndexId: string;

		/** Required */
		Id: string;
	}
	export interface DescribeAccessControlConfigurationRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccessControlConfigurationRequestFormGroup() {
		return new FormGroup<DescribeAccessControlConfigurationRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDataSourceResponse {
		Id?: string;
		IndexId?: string;
		Name?: string;
		Type?: DataSourceType;
		Configuration?: DataSourceConfiguration;
		VpcConfiguration?: DataSourceVpcConfiguration;
		CreatedAt?: Date;
		UpdatedAt?: Date;
		Description?: string;
		Status?: DataSourceStatus;
		Schedule?: string;
		RoleArn?: string;
		ErrorMessage?: string;
		LanguageCode?: string;
		CustomDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration;
	}
	export interface DescribeDataSourceResponseFormProperties {
		Id: FormControl<string | null | undefined>,
		IndexId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<DataSourceType | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<DataSourceStatus | null | undefined>,
		Schedule: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		LanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDataSourceResponseFormGroup() {
		return new FormGroup<DescribeDataSourceResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			IndexId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<DataSourceType | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<DataSourceStatus | null | undefined>(undefined),
			Schedule: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataSourceStatus { CREATING = 'CREATING', DELETING = 'DELETING', FAILED = 'FAILED', UPDATING = 'UPDATING', ACTIVE = 'ACTIVE' }

	export interface DescribeDataSourceRequest {

		/** Required */
		Id: string;

		/** Required */
		IndexId: string;
	}
	export interface DescribeDataSourceRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDataSourceRequestFormGroup() {
		return new FormGroup<DescribeDataSourceRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeExperienceResponse {
		Id?: string;
		IndexId?: string;
		Name?: string;
		Endpoints?: Array<ExperienceEndpoint>;
		Configuration?: ExperienceConfiguration;
		CreatedAt?: Date;
		UpdatedAt?: Date;
		Description?: string;
		Status?: ExperienceStatus;
		RoleArn?: string;
		ErrorMessage?: string;
	}
	export interface DescribeExperienceResponseFormProperties {
		Id: FormControl<string | null | undefined>,
		IndexId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<ExperienceStatus | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateDescribeExperienceResponseFormGroup() {
		return new FormGroup<DescribeExperienceResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			IndexId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ExperienceStatus | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration information for the endpoint for your Amazon Kendra experience. */
	export interface ExperienceEndpoint {
		EndpointType?: EndpointType;
		Endpoint?: string;
	}

	/** Provides the configuration information for the endpoint for your Amazon Kendra experience. */
	export interface ExperienceEndpointFormProperties {
		EndpointType: FormControl<EndpointType | null | undefined>,
		Endpoint: FormControl<string | null | undefined>,
	}
	export function CreateExperienceEndpointFormGroup() {
		return new FormGroup<ExperienceEndpointFormProperties>({
			EndpointType: new FormControl<EndpointType | null | undefined>(undefined),
			Endpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EndpointType { HOME = 'HOME' }

	export enum ExperienceStatus { CREATING = 'CREATING', ACTIVE = 'ACTIVE', DELETING = 'DELETING', FAILED = 'FAILED' }

	export interface DescribeExperienceRequest {

		/** Required */
		Id: string;

		/** Required */
		IndexId: string;
	}
	export interface DescribeExperienceRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeExperienceRequestFormGroup() {
		return new FormGroup<DescribeExperienceRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeFaqResponse {
		Id?: string;
		IndexId?: string;
		Name?: string;
		Description?: string;
		CreatedAt?: Date;
		UpdatedAt?: Date;

		/** Information required to find a specific file in an Amazon S3 bucket. */
		S3Path?: S3Path;
		Status?: FaqStatus;
		RoleArn?: string;
		ErrorMessage?: string;
		FileFormat?: FaqFileFormat;
		LanguageCode?: string;
	}
	export interface DescribeFaqResponseFormProperties {
		Id: FormControl<string | null | undefined>,
		IndexId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		Status: FormControl<FaqStatus | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		FileFormat: FormControl<FaqFileFormat | null | undefined>,
		LanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFaqResponseFormGroup() {
		return new FormGroup<DescribeFaqResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			IndexId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<FaqStatus | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			FileFormat: new FormControl<FaqFileFormat | null | undefined>(undefined),
			LanguageCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FaqStatus { CREATING = 'CREATING', UPDATING = 'UPDATING', ACTIVE = 'ACTIVE', DELETING = 'DELETING', FAILED = 'FAILED' }

	export interface DescribeFaqRequest {

		/** Required */
		Id: string;

		/** Required */
		IndexId: string;
	}
	export interface DescribeFaqRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFaqRequestFormGroup() {
		return new FormGroup<DescribeFaqRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeFeaturedResultsSetResponse {
		FeaturedResultsSetId?: string;
		FeaturedResultsSetName?: string;
		Description?: string;
		Status?: FeaturedResultsSetStatus;
		QueryTexts?: Array<string>;
		FeaturedDocumentsWithMetadata?: Array<FeaturedDocumentWithMetadata>;
		FeaturedDocumentsMissing?: Array<FeaturedDocumentMissing>;
		LastUpdatedTimestamp?: number | null;
		CreationTimestamp?: number | null;
	}
	export interface DescribeFeaturedResultsSetResponseFormProperties {
		FeaturedResultsSetId: FormControl<string | null | undefined>,
		FeaturedResultsSetName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<FeaturedResultsSetStatus | null | undefined>,
		LastUpdatedTimestamp: FormControl<number | null | undefined>,
		CreationTimestamp: FormControl<number | null | undefined>,
	}
	export function CreateDescribeFeaturedResultsSetResponseFormGroup() {
		return new FormGroup<DescribeFeaturedResultsSetResponseFormProperties>({
			FeaturedResultsSetId: new FormControl<string | null | undefined>(undefined),
			FeaturedResultsSetName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<FeaturedResultsSetStatus | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<number | null | undefined>(undefined),
			CreationTimestamp: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A featured document with its metadata information. This document is displayed at the top of the search results page, placed above all other results for certain queries. If there's an exact match of a query, then the document is featured in the search results. */
	export interface FeaturedDocumentWithMetadata {
		Id?: string;
		Title?: string;
		URI?: string;
	}

	/** A featured document with its metadata information. This document is displayed at the top of the search results page, placed above all other results for certain queries. If there's an exact match of a query, then the document is featured in the search results. */
	export interface FeaturedDocumentWithMetadataFormProperties {
		Id: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		URI: FormControl<string | null | undefined>,
	}
	export function CreateFeaturedDocumentWithMetadataFormGroup() {
		return new FormGroup<FeaturedDocumentWithMetadataFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			URI: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A document ID doesn't exist but you have specified as a featured document. Amazon Kendra cannot feature the document if it doesn't exist in the index. You can check the status of a document and its ID or check for documents with status errors using the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchGetDocumentStatus.html">BatchGetDocumentStatus</a> API. */
	export interface FeaturedDocumentMissing {
		Id?: string;
	}

	/** A document ID doesn't exist but you have specified as a featured document. Amazon Kendra cannot feature the document if it doesn't exist in the index. You can check the status of a document and its ID or check for documents with status errors using the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchGetDocumentStatus.html">BatchGetDocumentStatus</a> API. */
	export interface FeaturedDocumentMissingFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateFeaturedDocumentMissingFormGroup() {
		return new FormGroup<FeaturedDocumentMissingFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFeaturedResultsSetRequest {

		/** Required */
		IndexId: string;

		/** Required */
		FeaturedResultsSetId: string;
	}
	export interface DescribeFeaturedResultsSetRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,

		/** Required */
		FeaturedResultsSetId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFeaturedResultsSetRequestFormGroup() {
		return new FormGroup<DescribeFeaturedResultsSetRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FeaturedResultsSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeIndexResponse {
		Name?: string;
		Id?: string;
		Edition?: IndexEdition;
		RoleArn?: string;
		ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
		Status?: IndexStatus;
		Description?: string;
		CreatedAt?: Date;
		UpdatedAt?: Date;
		DocumentMetadataConfigurations?: Array<DocumentMetadataConfiguration>;
		IndexStatistics?: IndexStatistics;
		ErrorMessage?: string;
		CapacityUnits?: CapacityUnitsConfiguration;
		UserTokenConfigurations?: Array<UserTokenConfiguration>;
		UserContextPolicy?: UserContextPolicy;
		UserGroupResolutionConfiguration?: UserGroupResolutionConfiguration;
	}
	export interface DescribeIndexResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Edition: FormControl<IndexEdition | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		Status: FormControl<IndexStatus | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		UserContextPolicy: FormControl<UserContextPolicy | null | undefined>,
	}
	export function CreateDescribeIndexResponseFormGroup() {
		return new FormGroup<DescribeIndexResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Edition: new FormControl<IndexEdition | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<IndexStatus | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			UserContextPolicy: new FormControl<UserContextPolicy | null | undefined>(undefined),
		});

	}

	export enum IndexStatus { CREATING = 'CREATING', ACTIVE = 'ACTIVE', DELETING = 'DELETING', FAILED = 'FAILED', UPDATING = 'UPDATING', SYSTEM_UPDATING = 'SYSTEM_UPDATING' }


	/** Specifies the properties, such as relevance tuning and searchability, of an index field. */
	export interface DocumentMetadataConfiguration {

		/** Required */
		Name: string;

		/** Required */
		Type: DocumentAttributeValueType;
		Relevance?: Relevance;
		Search?: Search;
	}

	/** Specifies the properties, such as relevance tuning and searchability, of an index field. */
	export interface DocumentMetadataConfigurationFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<DocumentAttributeValueType | null | undefined>,
	}
	export function CreateDocumentMetadataConfigurationFormGroup() {
		return new FormGroup<DocumentMetadataConfigurationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<DocumentAttributeValueType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DocumentAttributeValueType { STRING_VALUE = 'STRING_VALUE', STRING_LIST_VALUE = 'STRING_LIST_VALUE', LONG_VALUE = 'LONG_VALUE', DATE_VALUE = 'DATE_VALUE' }


	/** Provides information for tuning the relevance of a field in a search. When a query includes terms that match the field, the results are given a boost in the response based on these tuning parameters. */
	export interface Relevance {
		Freshness?: boolean | null;
		Importance?: number | null;
		Duration?: string;
		RankOrder?: Order;
		ValueImportanceMap?: ValueImportanceMap;
	}

	/** Provides information for tuning the relevance of a field in a search. When a query includes terms that match the field, the results are given a boost in the response based on these tuning parameters. */
	export interface RelevanceFormProperties {
		Freshness: FormControl<boolean | null | undefined>,
		Importance: FormControl<number | null | undefined>,
		Duration: FormControl<string | null | undefined>,
		RankOrder: FormControl<Order | null | undefined>,
	}
	export function CreateRelevanceFormGroup() {
		return new FormGroup<RelevanceFormProperties>({
			Freshness: new FormControl<boolean | null | undefined>(undefined),
			Importance: new FormControl<number | null | undefined>(undefined),
			Duration: new FormControl<string | null | undefined>(undefined),
			RankOrder: new FormControl<Order | null | undefined>(undefined),
		});

	}

	export enum Order { ASCENDING = 'ASCENDING', DESCENDING = 'DESCENDING' }

	export interface ValueImportanceMap {
	}
	export interface ValueImportanceMapFormProperties {
	}
	export function CreateValueImportanceMapFormGroup() {
		return new FormGroup<ValueImportanceMapFormProperties>({
		});

	}


	/** Provides information about how a custom index field is used during a search. */
	export interface Search {
		Facetable?: boolean | null;
		Searchable?: boolean | null;
		Displayable?: boolean | null;
		Sortable?: boolean | null;
	}

	/** Provides information about how a custom index field is used during a search. */
	export interface SearchFormProperties {
		Facetable: FormControl<boolean | null | undefined>,
		Searchable: FormControl<boolean | null | undefined>,
		Displayable: FormControl<boolean | null | undefined>,
		Sortable: FormControl<boolean | null | undefined>,
	}
	export function CreateSearchFormGroup() {
		return new FormGroup<SearchFormProperties>({
			Facetable: new FormControl<boolean | null | undefined>(undefined),
			Searchable: new FormControl<boolean | null | undefined>(undefined),
			Displayable: new FormControl<boolean | null | undefined>(undefined),
			Sortable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides information about the number of documents and the number of questions and answers in an index. */
	export interface IndexStatistics {

		/** Required */
		FaqStatistics: FaqStatistics;

		/** Required */
		TextDocumentStatistics: TextDocumentStatistics;
	}

	/** Provides information about the number of documents and the number of questions and answers in an index. */
	export interface IndexStatisticsFormProperties {
	}
	export function CreateIndexStatisticsFormGroup() {
		return new FormGroup<IndexStatisticsFormProperties>({
		});

	}


	/** Provides statistical information about the FAQ questions and answers contained in an index. */
	export interface FaqStatistics {

		/** Required */
		IndexedQuestionAnswersCount: number;
	}

	/** Provides statistical information about the FAQ questions and answers contained in an index. */
	export interface FaqStatisticsFormProperties {

		/** Required */
		IndexedQuestionAnswersCount: FormControl<number | null | undefined>,
	}
	export function CreateFaqStatisticsFormGroup() {
		return new FormGroup<FaqStatisticsFormProperties>({
			IndexedQuestionAnswersCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides information about text documents indexed in an index. */
	export interface TextDocumentStatistics {

		/** Required */
		IndexedTextDocumentsCount: number;

		/** Required */
		IndexedTextBytes: number;
	}

	/** Provides information about text documents indexed in an index. */
	export interface TextDocumentStatisticsFormProperties {

		/** Required */
		IndexedTextDocumentsCount: FormControl<number | null | undefined>,

		/** Required */
		IndexedTextBytes: FormControl<number | null | undefined>,
	}
	export function CreateTextDocumentStatisticsFormGroup() {
		return new FormGroup<TextDocumentStatisticsFormProperties>({
			IndexedTextDocumentsCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			IndexedTextBytes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies additional capacity units configured for your Enterprise Edition index. You can add and remove capacity units to fit your usage requirements. */
	export interface CapacityUnitsConfiguration {

		/** Required */
		StorageCapacityUnits: number;

		/** Required */
		QueryCapacityUnits: number;
	}

	/** Specifies additional capacity units configured for your Enterprise Edition index. You can add and remove capacity units to fit your usage requirements. */
	export interface CapacityUnitsConfigurationFormProperties {

		/** Required */
		StorageCapacityUnits: FormControl<number | null | undefined>,

		/** Required */
		QueryCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateCapacityUnitsConfigurationFormGroup() {
		return new FormGroup<CapacityUnitsConfigurationFormProperties>({
			StorageCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			QueryCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeIndexRequest {

		/** Required */
		Id: string;
	}
	export interface DescribeIndexRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDescribeIndexRequestFormGroup() {
		return new FormGroup<DescribeIndexRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribePrincipalMappingResponse {
		IndexId?: string;
		DataSourceId?: string;
		GroupId?: string;
		GroupOrderingIdSummaries?: Array<GroupOrderingIdSummary>;
	}
	export interface DescribePrincipalMappingResponseFormProperties {
		IndexId: FormControl<string | null | undefined>,
		DataSourceId: FormControl<string | null | undefined>,
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateDescribePrincipalMappingResponseFormGroup() {
		return new FormGroup<DescribePrincipalMappingResponseFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined),
			DataSourceId: new FormControl<string | null | undefined>(undefined),
			GroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information on the processing of <code>PUT</code> and <code>DELETE</code> actions for mapping users to their groups. */
	export interface GroupOrderingIdSummary {
		Status?: PrincipalMappingStatus;
		LastUpdatedAt?: Date;
		ReceivedAt?: Date;
		OrderingId?: number | null;
		FailureReason?: string;
	}

	/** Summary information on the processing of <code>PUT</code> and <code>DELETE</code> actions for mapping users to their groups. */
	export interface GroupOrderingIdSummaryFormProperties {
		Status: FormControl<PrincipalMappingStatus | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
		ReceivedAt: FormControl<Date | null | undefined>,
		OrderingId: FormControl<number | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateGroupOrderingIdSummaryFormGroup() {
		return new FormGroup<GroupOrderingIdSummaryFormProperties>({
			Status: new FormControl<PrincipalMappingStatus | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			ReceivedAt: new FormControl<Date | null | undefined>(undefined),
			OrderingId: new FormControl<number | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PrincipalMappingStatus { FAILED = 'FAILED', SUCCEEDED = 'SUCCEEDED', PROCESSING = 'PROCESSING', DELETING = 'DELETING', DELETED = 'DELETED' }

	export interface DescribePrincipalMappingRequest {

		/** Required */
		IndexId: string;
		DataSourceId?: string;

		/** Required */
		GroupId: string;
	}
	export interface DescribePrincipalMappingRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,
		DataSourceId: FormControl<string | null | undefined>,

		/** Required */
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateDescribePrincipalMappingRequestFormGroup() {
		return new FormGroup<DescribePrincipalMappingRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataSourceId: new FormControl<string | null | undefined>(undefined),
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeQuerySuggestionsBlockListResponse {
		IndexId?: string;
		Id?: string;
		Name?: string;
		Description?: string;
		Status?: QuerySuggestionsBlockListStatus;
		ErrorMessage?: string;
		CreatedAt?: Date;
		UpdatedAt?: Date;
		SourceS3Path?: S3Path;
		ItemCount?: number | null;
		FileSizeBytes?: number | null;
		RoleArn?: string;
	}
	export interface DescribeQuerySuggestionsBlockListResponseFormProperties {
		IndexId: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<QuerySuggestionsBlockListStatus | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		ItemCount: FormControl<number | null | undefined>,
		FileSizeBytes: FormControl<number | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeQuerySuggestionsBlockListResponseFormGroup() {
		return new FormGroup<DescribeQuerySuggestionsBlockListResponseFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<QuerySuggestionsBlockListStatus | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			ItemCount: new FormControl<number | null | undefined>(undefined),
			FileSizeBytes: new FormControl<number | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum QuerySuggestionsBlockListStatus { ACTIVE = 'ACTIVE', CREATING = 'CREATING', DELETING = 'DELETING', UPDATING = 'UPDATING', ACTIVE_BUT_UPDATE_FAILED = 'ACTIVE_BUT_UPDATE_FAILED', FAILED = 'FAILED' }

	export interface DescribeQuerySuggestionsBlockListRequest {

		/** Required */
		IndexId: string;

		/** Required */
		Id: string;
	}
	export interface DescribeQuerySuggestionsBlockListRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDescribeQuerySuggestionsBlockListRequestFormGroup() {
		return new FormGroup<DescribeQuerySuggestionsBlockListRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeQuerySuggestionsConfigResponse {
		Mode?: Mode;
		Status?: QuerySuggestionsStatus;
		QueryLogLookBackWindowInDays?: number | null;
		IncludeQueriesWithoutUserInformation?: boolean | null;
		MinimumNumberOfQueryingUsers?: number | null;
		MinimumQueryCount?: number | null;
		LastSuggestionsBuildTime?: Date;
		LastClearTime?: Date;
		TotalSuggestionsCount?: number | null;
		AttributeSuggestionsConfig?: AttributeSuggestionsDescribeConfig;
	}
	export interface DescribeQuerySuggestionsConfigResponseFormProperties {
		Mode: FormControl<Mode | null | undefined>,
		Status: FormControl<QuerySuggestionsStatus | null | undefined>,
		QueryLogLookBackWindowInDays: FormControl<number | null | undefined>,
		IncludeQueriesWithoutUserInformation: FormControl<boolean | null | undefined>,
		MinimumNumberOfQueryingUsers: FormControl<number | null | undefined>,
		MinimumQueryCount: FormControl<number | null | undefined>,
		LastSuggestionsBuildTime: FormControl<Date | null | undefined>,
		LastClearTime: FormControl<Date | null | undefined>,
		TotalSuggestionsCount: FormControl<number | null | undefined>,
	}
	export function CreateDescribeQuerySuggestionsConfigResponseFormGroup() {
		return new FormGroup<DescribeQuerySuggestionsConfigResponseFormProperties>({
			Mode: new FormControl<Mode | null | undefined>(undefined),
			Status: new FormControl<QuerySuggestionsStatus | null | undefined>(undefined),
			QueryLogLookBackWindowInDays: new FormControl<number | null | undefined>(undefined),
			IncludeQueriesWithoutUserInformation: new FormControl<boolean | null | undefined>(undefined),
			MinimumNumberOfQueryingUsers: new FormControl<number | null | undefined>(undefined),
			MinimumQueryCount: new FormControl<number | null | undefined>(undefined),
			LastSuggestionsBuildTime: new FormControl<Date | null | undefined>(undefined),
			LastClearTime: new FormControl<Date | null | undefined>(undefined),
			TotalSuggestionsCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Mode { ENABLED = 'ENABLED', LEARN_ONLY = 'LEARN_ONLY' }

	export enum QuerySuggestionsStatus { ACTIVE = 'ACTIVE', UPDATING = 'UPDATING' }


	/** Gets information on the configuration of document fields/attributes that you want to base query suggestions on. To change your configuration, use <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_AttributeSuggestionsUpdateConfig.html">AttributeSuggestionsUpdateConfig</a> and then call <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateQuerySuggestionsConfig.html">UpdateQuerySuggestionsConfig</a>. */
	export interface AttributeSuggestionsDescribeConfig {
		SuggestableConfigList?: Array<SuggestableConfig>;
		AttributeSuggestionsMode?: FeaturedResultsSetStatus;
	}

	/** Gets information on the configuration of document fields/attributes that you want to base query suggestions on. To change your configuration, use <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_AttributeSuggestionsUpdateConfig.html">AttributeSuggestionsUpdateConfig</a> and then call <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateQuerySuggestionsConfig.html">UpdateQuerySuggestionsConfig</a>. */
	export interface AttributeSuggestionsDescribeConfigFormProperties {
		AttributeSuggestionsMode: FormControl<FeaturedResultsSetStatus | null | undefined>,
	}
	export function CreateAttributeSuggestionsDescribeConfigFormGroup() {
		return new FormGroup<AttributeSuggestionsDescribeConfigFormProperties>({
			AttributeSuggestionsMode: new FormControl<FeaturedResultsSetStatus | null | undefined>(undefined),
		});

	}


	/** Provides the configuration information for a document field/attribute that you want to base query suggestions on. */
	export interface SuggestableConfig {
		AttributeName?: string;
		Suggestable?: boolean | null;
	}

	/** Provides the configuration information for a document field/attribute that you want to base query suggestions on. */
	export interface SuggestableConfigFormProperties {
		AttributeName: FormControl<string | null | undefined>,
		Suggestable: FormControl<boolean | null | undefined>,
	}
	export function CreateSuggestableConfigFormGroup() {
		return new FormGroup<SuggestableConfigFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined),
			Suggestable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeQuerySuggestionsConfigRequest {

		/** Required */
		IndexId: string;
	}
	export interface DescribeQuerySuggestionsConfigRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeQuerySuggestionsConfigRequestFormGroup() {
		return new FormGroup<DescribeQuerySuggestionsConfigRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeThesaurusResponse {
		Id?: string;
		IndexId?: string;
		Name?: string;
		Description?: string;
		Status?: ThesaurusStatus;
		ErrorMessage?: string;
		CreatedAt?: Date;
		UpdatedAt?: Date;
		RoleArn?: string;

		/** Information required to find a specific file in an Amazon S3 bucket. */
		SourceS3Path?: S3Path;
		FileSizeBytes?: number | null;
		TermCount?: number | null;
		SynonymRuleCount?: number | null;
	}
	export interface DescribeThesaurusResponseFormProperties {
		Id: FormControl<string | null | undefined>,
		IndexId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<ThesaurusStatus | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		FileSizeBytes: FormControl<number | null | undefined>,
		TermCount: FormControl<number | null | undefined>,
		SynonymRuleCount: FormControl<number | null | undefined>,
	}
	export function CreateDescribeThesaurusResponseFormGroup() {
		return new FormGroup<DescribeThesaurusResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			IndexId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ThesaurusStatus | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			FileSizeBytes: new FormControl<number | null | undefined>(undefined),
			TermCount: new FormControl<number | null | undefined>(undefined),
			SynonymRuleCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ThesaurusStatus { CREATING = 'CREATING', ACTIVE = 'ACTIVE', DELETING = 'DELETING', UPDATING = 'UPDATING', ACTIVE_BUT_UPDATE_FAILED = 'ACTIVE_BUT_UPDATE_FAILED', FAILED = 'FAILED' }

	export interface DescribeThesaurusRequest {

		/** Required */
		Id: string;

		/** Required */
		IndexId: string;
	}
	export interface DescribeThesaurusRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeThesaurusRequestFormGroup() {
		return new FormGroup<DescribeThesaurusRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateEntitiesFromExperienceResponse {
		FailedEntityList?: Array<FailedEntity>;
	}
	export interface DisassociateEntitiesFromExperienceResponseFormProperties {
	}
	export function CreateDisassociateEntitiesFromExperienceResponseFormGroup() {
		return new FormGroup<DisassociateEntitiesFromExperienceResponseFormProperties>({
		});

	}

	export interface DisassociateEntitiesFromExperienceRequest {

		/** Required */
		Id: string;

		/** Required */
		IndexId: string;

		/** Required */
		EntityList: Array<EntityConfiguration>;
	}
	export interface DisassociateEntitiesFromExperienceRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateEntitiesFromExperienceRequestFormGroup() {
		return new FormGroup<DisassociateEntitiesFromExperienceRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociatePersonasFromEntitiesResponse {
		FailedEntityList?: Array<FailedEntity>;
	}
	export interface DisassociatePersonasFromEntitiesResponseFormProperties {
	}
	export function CreateDisassociatePersonasFromEntitiesResponseFormGroup() {
		return new FormGroup<DisassociatePersonasFromEntitiesResponseFormProperties>({
		});

	}

	export interface DisassociatePersonasFromEntitiesRequest {

		/** Required */
		Id: string;

		/** Required */
		IndexId: string;

		/** Required */
		EntityIds: Array<string>;
	}
	export interface DisassociatePersonasFromEntitiesRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociatePersonasFromEntitiesRequestFormGroup() {
		return new FormGroup<DisassociatePersonasFromEntitiesRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetQuerySuggestionsResponse {
		QuerySuggestionsId?: string;
		Suggestions?: Array<Suggestion>;
	}
	export interface GetQuerySuggestionsResponseFormProperties {
		QuerySuggestionsId: FormControl<string | null | undefined>,
	}
	export function CreateGetQuerySuggestionsResponseFormGroup() {
		return new FormGroup<GetQuerySuggestionsResponseFormProperties>({
			QuerySuggestionsId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single query suggestion. */
	export interface Suggestion {
		Id?: string;
		Value?: SuggestionValue;
		SourceDocuments?: Array<SourceDocument>;
	}

	/** A single query suggestion. */
	export interface SuggestionFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateSuggestionFormGroup() {
		return new FormGroup<SuggestionFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The <code>SuggestionTextWithHighlights</code> structure information. */
	export interface SuggestionValue {
		Text?: SuggestionTextWithHighlights;
	}

	/** The <code>SuggestionTextWithHighlights</code> structure information. */
	export interface SuggestionValueFormProperties {
	}
	export function CreateSuggestionValueFormGroup() {
		return new FormGroup<SuggestionValueFormProperties>({
		});

	}


	/** Provides text and information about where to highlight the query suggestion text. */
	export interface SuggestionTextWithHighlights {
		Text?: string;
		Highlights?: Array<SuggestionHighlight>;
	}

	/** Provides text and information about where to highlight the query suggestion text. */
	export interface SuggestionTextWithHighlightsFormProperties {
		Text: FormControl<string | null | undefined>,
	}
	export function CreateSuggestionTextWithHighlightsFormGroup() {
		return new FormGroup<SuggestionTextWithHighlightsFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The text highlights for a single query suggestion. */
	export interface SuggestionHighlight {
		BeginOffset?: number | null;
		EndOffset?: number | null;
	}

	/** The text highlights for a single query suggestion. */
	export interface SuggestionHighlightFormProperties {
		BeginOffset: FormControl<number | null | undefined>,
		EndOffset: FormControl<number | null | undefined>,
	}
	export function CreateSuggestionHighlightFormGroup() {
		return new FormGroup<SuggestionHighlightFormProperties>({
			BeginOffset: new FormControl<number | null | undefined>(undefined),
			EndOffset: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The document ID and its fields/attributes that are used for a query suggestion, if document fields set to use for query suggestions. */
	export interface SourceDocument {
		DocumentId?: string;
		SuggestionAttributes?: Array<string>;
		AdditionalAttributes?: Array<DocumentAttribute>;
	}

	/** The document ID and its fields/attributes that are used for a query suggestion, if document fields set to use for query suggestions. */
	export interface SourceDocumentFormProperties {
		DocumentId: FormControl<string | null | undefined>,
	}
	export function CreateSourceDocumentFormGroup() {
		return new FormGroup<SourceDocumentFormProperties>({
			DocumentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetQuerySuggestionsRequest {

		/** Required */
		IndexId: string;

		/** Required */
		QueryText: string;
		MaxSuggestionsCount?: number | null;
		SuggestionTypes?: Array<SuggestionType>;
		AttributeSuggestionsConfig?: AttributeSuggestionsGetConfig;
	}
	export interface GetQuerySuggestionsRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,

		/** Required */
		QueryText: FormControl<string | null | undefined>,
		MaxSuggestionsCount: FormControl<number | null | undefined>,
	}
	export function CreateGetQuerySuggestionsRequestFormGroup() {
		return new FormGroup<GetQuerySuggestionsRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QueryText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxSuggestionsCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SuggestionType { QUERY = 'QUERY', DOCUMENT_ATTRIBUTES = 'DOCUMENT_ATTRIBUTES' }


	/** Provides the configuration information for the document fields/attributes that you want to base query suggestions on. */
	export interface AttributeSuggestionsGetConfig {
		SuggestionAttributes?: Array<string>;
		AdditionalResponseAttributes?: Array<string>;
		AttributeFilter?: AttributeFilter;
		UserContext?: UserContext;
	}

	/** Provides the configuration information for the document fields/attributes that you want to base query suggestions on. */
	export interface AttributeSuggestionsGetConfigFormProperties {
	}
	export function CreateAttributeSuggestionsGetConfigFormGroup() {
		return new FormGroup<AttributeSuggestionsGetConfigFormProperties>({
		});

	}


	/** <p>Provides filtering the query results based on document attributes or metadata fields.</p> <p>When you use the <code>AndAllFilters</code> or <code>OrAllFilters</code>, filters you can use 2 layers under the first attribute filter. For example, you can use:</p> <p> <code>&lt;AndAllFilters&gt;</code> </p> <ol> <li> <p> <code> &lt;OrAllFilters&gt;</code> </p> </li> <li> <p> <code> &lt;EqualsTo&gt;</code> </p> </li> </ol> <p>If you use more than 2 layers, you receive a <code>ValidationException</code> exception with the message "<code>AttributeFilter</code> cannot have a depth of more than 2."</p> <p>If you use more than 10 attribute filters in a given list for <code>AndAllFilters</code> or <code>OrAllFilters</code>, you receive a <code>ValidationException</code> with the message "<code>AttributeFilter</code> cannot have a length of more than 10".</p> */
	export interface AttributeFilter {
		AndAllFilters?: Array<AttributeFilter>;
		OrAllFilters?: Array<AttributeFilter>;
		NotFilter?: AttributeFilter;
		EqualsTo?: DocumentAttribute;
		ContainsAll?: DocumentAttribute;
		ContainsAny?: DocumentAttribute;
		GreaterThan?: DocumentAttribute;
		GreaterThanOrEquals?: DocumentAttribute;
		LessThan?: DocumentAttribute;
		LessThanOrEquals?: DocumentAttribute;
	}

	/** <p>Provides filtering the query results based on document attributes or metadata fields.</p> <p>When you use the <code>AndAllFilters</code> or <code>OrAllFilters</code>, filters you can use 2 layers under the first attribute filter. For example, you can use:</p> <p> <code>&lt;AndAllFilters&gt;</code> </p> <ol> <li> <p> <code> &lt;OrAllFilters&gt;</code> </p> </li> <li> <p> <code> &lt;EqualsTo&gt;</code> </p> </li> </ol> <p>If you use more than 2 layers, you receive a <code>ValidationException</code> exception with the message "<code>AttributeFilter</code> cannot have a depth of more than 2."</p> <p>If you use more than 10 attribute filters in a given list for <code>AndAllFilters</code> or <code>OrAllFilters</code>, you receive a <code>ValidationException</code> with the message "<code>AttributeFilter</code> cannot have a length of more than 10".</p> */
	export interface AttributeFilterFormProperties {
	}
	export function CreateAttributeFilterFormGroup() {
		return new FormGroup<AttributeFilterFormProperties>({
		});

	}


	/** <p>Provides information about the user context for an Amazon Kendra index.</p> <p>User context filtering is a kind of personalized search with the benefit of controlling access to documents. For example, not all teams that search the company portal for information should access top-secret company documents, nor are these documents relevant to all users. Only specific users or groups of teams given access to top-secret documents should see these documents in their search results.</p> <p>You provide one of the following:</p> <ul> <li> <p>User token</p> </li> <li> <p>User ID, the groups the user belongs to, and any data sources the groups can access.</p> </li> </ul> <p>If you provide both, an exception is thrown.</p> */
	export interface UserContext {
		Token?: string;
		UserId?: string;
		Groups?: Array<string>;
		DataSourceGroups?: Array<DataSourceGroup>;
	}

	/** <p>Provides information about the user context for an Amazon Kendra index.</p> <p>User context filtering is a kind of personalized search with the benefit of controlling access to documents. For example, not all teams that search the company portal for information should access top-secret company documents, nor are these documents relevant to all users. Only specific users or groups of teams given access to top-secret documents should see these documents in their search results.</p> <p>You provide one of the following:</p> <ul> <li> <p>User token</p> </li> <li> <p>User ID, the groups the user belongs to, and any data sources the groups can access.</p> </li> </ul> <p>If you provide both, an exception is thrown.</p> */
	export interface UserContextFormProperties {
		Token: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateUserContextFormGroup() {
		return new FormGroup<UserContextFormProperties>({
			Token: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data source information for user context filtering. */
	export interface DataSourceGroup {

		/** Required */
		GroupId: string;

		/** Required */
		DataSourceId: string;
	}

	/** Data source information for user context filtering. */
	export interface DataSourceGroupFormProperties {

		/** Required */
		GroupId: FormControl<string | null | undefined>,

		/** Required */
		DataSourceId: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceGroupFormGroup() {
		return new FormGroup<DataSourceGroupFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSnapshotsResponse {
		SnapShotTimeFilter?: TimeRange;
		SnapshotsDataHeader?: Array<string>;
		SnapshotsData?: Array<Array<string>>;
		NextToken?: string;
	}
	export interface GetSnapshotsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetSnapshotsResponseFormGroup() {
		return new FormGroup<GetSnapshotsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a range of time. */
	export interface TimeRange {
		StartTime?: Date;
		EndTime?: Date;
	}

	/** Provides a range of time. */
	export interface TimeRangeFormProperties {
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateTimeRangeFormGroup() {
		return new FormGroup<TimeRangeFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetSnapshotsRequest {

		/** Required */
		IndexId: string;

		/** Required */
		Interval: Interval;

		/** Required */
		MetricType: MetricType;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetSnapshotsRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,

		/** Required */
		Interval: FormControl<Interval | null | undefined>,

		/** Required */
		MetricType: FormControl<MetricType | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetSnapshotsRequestFormGroup() {
		return new FormGroup<GetSnapshotsRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Interval: new FormControl<Interval | null | undefined>(undefined, [Validators.required]),
			MetricType: new FormControl<MetricType | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Interval { THIS_MONTH = 'THIS_MONTH', THIS_WEEK = 'THIS_WEEK', ONE_WEEK_AGO = 'ONE_WEEK_AGO', TWO_WEEKS_AGO = 'TWO_WEEKS_AGO', ONE_MONTH_AGO = 'ONE_MONTH_AGO', TWO_MONTHS_AGO = 'TWO_MONTHS_AGO' }

	export enum MetricType { QUERIES_BY_COUNT = 'QUERIES_BY_COUNT', QUERIES_BY_ZERO_CLICK_RATE = 'QUERIES_BY_ZERO_CLICK_RATE', QUERIES_BY_ZERO_RESULT_RATE = 'QUERIES_BY_ZERO_RESULT_RATE', DOCS_BY_CLICK_COUNT = 'DOCS_BY_CLICK_COUNT', AGG_QUERY_DOC_METRICS = 'AGG_QUERY_DOC_METRICS', TREND_QUERY_DOC_METRICS = 'TREND_QUERY_DOC_METRICS' }

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface ListAccessControlConfigurationsResponse {
		NextToken?: string;

		/** Required */
		AccessControlConfigurations: Array<AccessControlConfigurationSummary>;
	}
	export interface ListAccessControlConfigurationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccessControlConfigurationsResponseFormGroup() {
		return new FormGroup<ListAccessControlConfigurationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information on an access control configuration that you created for your documents in an index. */
	export interface AccessControlConfigurationSummary {

		/** Required */
		Id: string;
	}

	/** Summary information on an access control configuration that you created for your documents in an index. */
	export interface AccessControlConfigurationSummaryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateAccessControlConfigurationSummaryFormGroup() {
		return new FormGroup<AccessControlConfigurationSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAccessControlConfigurationsRequest {

		/** Required */
		IndexId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListAccessControlConfigurationsRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAccessControlConfigurationsRequestFormGroup() {
		return new FormGroup<ListAccessControlConfigurationsRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDataSourceSyncJobsResponse {
		History?: Array<DataSourceSyncJob>;
		NextToken?: string;
	}
	export interface ListDataSourceSyncJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataSourceSyncJobsResponseFormGroup() {
		return new FormGroup<ListDataSourceSyncJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a data source synchronization job. */
	export interface DataSourceSyncJob {
		ExecutionId?: string;
		StartTime?: Date;
		EndTime?: Date;
		Status?: DataSourceSyncJobStatus;
		ErrorMessage?: string;
		ErrorCode?: ErrorCode;
		DataSourceErrorCode?: string;
		Metrics?: DataSourceSyncJobMetrics;
	}

	/** Provides information about a data source synchronization job. */
	export interface DataSourceSyncJobFormProperties {
		ExecutionId: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		Status: FormControl<DataSourceSyncJobStatus | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		ErrorCode: FormControl<ErrorCode | null | undefined>,
		DataSourceErrorCode: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceSyncJobFormGroup() {
		return new FormGroup<DataSourceSyncJobFormProperties>({
			ExecutionId: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<DataSourceSyncJobStatus | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<ErrorCode | null | undefined>(undefined),
			DataSourceErrorCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataSourceSyncJobStatus { FAILED = 'FAILED', SUCCEEDED = 'SUCCEEDED', SYNCING = 'SYNCING', INCOMPLETE = 'INCOMPLETE', STOPPING = 'STOPPING', ABORTED = 'ABORTED', SYNCING_INDEXING = 'SYNCING_INDEXING' }


	/** Maps a batch delete document request to a specific data source sync job. This is optional and should only be supplied when documents are deleted by a data source connector. */
	export interface DataSourceSyncJobMetrics {
		DocumentsAdded?: string;
		DocumentsModified?: string;
		DocumentsDeleted?: string;
		DocumentsFailed?: string;
		DocumentsScanned?: string;
	}

	/** Maps a batch delete document request to a specific data source sync job. This is optional and should only be supplied when documents are deleted by a data source connector. */
	export interface DataSourceSyncJobMetricsFormProperties {
		DocumentsAdded: FormControl<string | null | undefined>,
		DocumentsModified: FormControl<string | null | undefined>,
		DocumentsDeleted: FormControl<string | null | undefined>,
		DocumentsFailed: FormControl<string | null | undefined>,
		DocumentsScanned: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceSyncJobMetricsFormGroup() {
		return new FormGroup<DataSourceSyncJobMetricsFormProperties>({
			DocumentsAdded: new FormControl<string | null | undefined>(undefined),
			DocumentsModified: new FormControl<string | null | undefined>(undefined),
			DocumentsDeleted: new FormControl<string | null | undefined>(undefined),
			DocumentsFailed: new FormControl<string | null | undefined>(undefined),
			DocumentsScanned: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDataSourceSyncJobsRequest {

		/** Required */
		Id: string;

		/** Required */
		IndexId: string;
		NextToken?: string;
		MaxResults?: number | null;
		StartTimeFilter?: TimeRange;
		StatusFilter?: DataSourceSyncJobStatus;
	}
	export interface ListDataSourceSyncJobsRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		IndexId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		StatusFilter: FormControl<DataSourceSyncJobStatus | null | undefined>,
	}
	export function CreateListDataSourceSyncJobsRequestFormGroup() {
		return new FormGroup<ListDataSourceSyncJobsRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			StatusFilter: new FormControl<DataSourceSyncJobStatus | null | undefined>(undefined),
		});

	}

	export interface ListDataSourcesResponse {
		SummaryItems?: Array<DataSourceSummary>;
		NextToken?: string;
	}
	export interface ListDataSourcesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataSourcesResponseFormGroup() {
		return new FormGroup<ListDataSourcesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information for a Amazon Kendra data source. */
	export interface DataSourceSummary {
		Name?: string;
		Id?: string;
		Type?: DataSourceType;
		CreatedAt?: Date;
		UpdatedAt?: Date;
		Status?: DataSourceStatus;
		LanguageCode?: string;
	}

	/** Summary information for a Amazon Kendra data source. */
	export interface DataSourceSummaryFormProperties {
		Name: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Type: FormControl<DataSourceType | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		Status: FormControl<DataSourceStatus | null | undefined>,
		LanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceSummaryFormGroup() {
		return new FormGroup<DataSourceSummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<DataSourceType | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<DataSourceStatus | null | undefined>(undefined),
			LanguageCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDataSourcesRequest {

		/** Required */
		IndexId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDataSourcesRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDataSourcesRequestFormGroup() {
		return new FormGroup<ListDataSourcesRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListEntityPersonasResponse {
		SummaryItems?: Array<PersonasSummary>;
		NextToken?: string;
	}
	export interface ListEntityPersonasResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEntityPersonasResponseFormGroup() {
		return new FormGroup<ListEntityPersonasResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information for users or groups in your IAM Identity Center identity source. This applies to users and groups with specific permissions that define their level of access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>. */
	export interface PersonasSummary {
		EntityId?: string;
		Persona?: Persona;
		CreatedAt?: Date;
		UpdatedAt?: Date;
	}

	/** Summary information for users or groups in your IAM Identity Center identity source. This applies to users and groups with specific permissions that define their level of access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>. */
	export interface PersonasSummaryFormProperties {
		EntityId: FormControl<string | null | undefined>,
		Persona: FormControl<Persona | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreatePersonasSummaryFormGroup() {
		return new FormGroup<PersonasSummaryFormProperties>({
			EntityId: new FormControl<string | null | undefined>(undefined),
			Persona: new FormControl<Persona | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListEntityPersonasRequest {

		/** Required */
		Id: string;

		/** Required */
		IndexId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListEntityPersonasRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		IndexId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListEntityPersonasRequestFormGroup() {
		return new FormGroup<ListEntityPersonasRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListExperienceEntitiesResponse {
		SummaryItems?: Array<ExperienceEntitiesSummary>;
		NextToken?: string;
	}
	export interface ListExperienceEntitiesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExperienceEntitiesResponseFormGroup() {
		return new FormGroup<ListExperienceEntitiesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information for users or groups in your IAM Identity Center identity source with granted access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>. */
	export interface ExperienceEntitiesSummary {
		EntityId?: string;
		EntityType?: EntityType;
		DisplayData?: EntityDisplayData;
	}

	/** Summary information for users or groups in your IAM Identity Center identity source with granted access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>. */
	export interface ExperienceEntitiesSummaryFormProperties {
		EntityId: FormControl<string | null | undefined>,
		EntityType: FormControl<EntityType | null | undefined>,
	}
	export function CreateExperienceEntitiesSummaryFormGroup() {
		return new FormGroup<ExperienceEntitiesSummaryFormProperties>({
			EntityId: new FormControl<string | null | undefined>(undefined),
			EntityType: new FormControl<EntityType | null | undefined>(undefined),
		});

	}


	/** Information about the user entity. */
	export interface EntityDisplayData {
		UserName?: string;
		GroupName?: string;
		IdentifiedUserName?: string;
		FirstName?: string;
		LastName?: string;
	}

	/** Information about the user entity. */
	export interface EntityDisplayDataFormProperties {
		UserName: FormControl<string | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
		IdentifiedUserName: FormControl<string | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
	}
	export function CreateEntityDisplayDataFormGroup() {
		return new FormGroup<EntityDisplayDataFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
			IdentifiedUserName: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListExperienceEntitiesRequest {

		/** Required */
		Id: string;

		/** Required */
		IndexId: string;
		NextToken?: string;
	}
	export interface ListExperienceEntitiesRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		IndexId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExperienceEntitiesRequestFormGroup() {
		return new FormGroup<ListExperienceEntitiesRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListExperiencesResponse {
		SummaryItems?: Array<ExperiencesSummary>;
		NextToken?: string;
	}
	export interface ListExperiencesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExperiencesResponseFormGroup() {
		return new FormGroup<ListExperiencesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information for your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>. */
	export interface ExperiencesSummary {
		Name?: string;
		Id?: string;
		CreatedAt?: Date;
		Status?: ExperienceStatus;
		Endpoints?: Array<ExperienceEndpoint>;
	}

	/** Summary information for your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>. */
	export interface ExperiencesSummaryFormProperties {
		Name: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		Status: FormControl<ExperienceStatus | null | undefined>,
	}
	export function CreateExperiencesSummaryFormGroup() {
		return new FormGroup<ExperiencesSummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<ExperienceStatus | null | undefined>(undefined),
		});

	}

	export interface ListExperiencesRequest {

		/** Required */
		IndexId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListExperiencesRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListExperiencesRequestFormGroup() {
		return new FormGroup<ListExperiencesRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListFaqsResponse {
		NextToken?: string;
		FaqSummaryItems?: Array<FaqSummary>;
	}
	export interface ListFaqsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFaqsResponseFormGroup() {
		return new FormGroup<ListFaqsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information for frequently asked questions and answers included in an index. */
	export interface FaqSummary {
		Id?: string;
		Name?: string;
		Status?: FaqStatus;
		CreatedAt?: Date;
		UpdatedAt?: Date;
		FileFormat?: FaqFileFormat;
		LanguageCode?: string;
	}

	/** Summary information for frequently asked questions and answers included in an index. */
	export interface FaqSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<FaqStatus | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		FileFormat: FormControl<FaqFileFormat | null | undefined>,
		LanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateFaqSummaryFormGroup() {
		return new FormGroup<FaqSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<FaqStatus | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			FileFormat: new FormControl<FaqFileFormat | null | undefined>(undefined),
			LanguageCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFaqsRequest {

		/** Required */
		IndexId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListFaqsRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFaqsRequestFormGroup() {
		return new FormGroup<ListFaqsRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListFeaturedResultsSetsResponse {
		FeaturedResultsSetSummaryItems?: Array<FeaturedResultsSetSummary>;
		NextToken?: string;
	}
	export interface ListFeaturedResultsSetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFeaturedResultsSetsResponseFormGroup() {
		return new FormGroup<ListFeaturedResultsSetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information for a set of featured results. Featured results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results. */
	export interface FeaturedResultsSetSummary {
		FeaturedResultsSetId?: string;
		FeaturedResultsSetName?: string;
		Status?: FeaturedResultsSetStatus;
		LastUpdatedTimestamp?: number | null;
		CreationTimestamp?: number | null;
	}

	/** Summary information for a set of featured results. Featured results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results. */
	export interface FeaturedResultsSetSummaryFormProperties {
		FeaturedResultsSetId: FormControl<string | null | undefined>,
		FeaturedResultsSetName: FormControl<string | null | undefined>,
		Status: FormControl<FeaturedResultsSetStatus | null | undefined>,
		LastUpdatedTimestamp: FormControl<number | null | undefined>,
		CreationTimestamp: FormControl<number | null | undefined>,
	}
	export function CreateFeaturedResultsSetSummaryFormGroup() {
		return new FormGroup<FeaturedResultsSetSummaryFormProperties>({
			FeaturedResultsSetId: new FormControl<string | null | undefined>(undefined),
			FeaturedResultsSetName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<FeaturedResultsSetStatus | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<number | null | undefined>(undefined),
			CreationTimestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListFeaturedResultsSetsRequest {

		/** Required */
		IndexId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListFeaturedResultsSetsRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFeaturedResultsSetsRequestFormGroup() {
		return new FormGroup<ListFeaturedResultsSetsRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListGroupsOlderThanOrderingIdResponse {
		GroupsSummaries?: Array<GroupSummary>;
		NextToken?: string;
	}
	export interface ListGroupsOlderThanOrderingIdResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupsOlderThanOrderingIdResponseFormGroup() {
		return new FormGroup<ListGroupsOlderThanOrderingIdResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information for groups. */
	export interface GroupSummary {
		GroupId?: string;
		OrderingId?: number | null;
	}

	/** Summary information for groups. */
	export interface GroupSummaryFormProperties {
		GroupId: FormControl<string | null | undefined>,
		OrderingId: FormControl<number | null | undefined>,
	}
	export function CreateGroupSummaryFormGroup() {
		return new FormGroup<GroupSummaryFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined),
			OrderingId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListGroupsOlderThanOrderingIdRequest {

		/** Required */
		IndexId: string;
		DataSourceId?: string;

		/** Required */
		OrderingId: number;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListGroupsOlderThanOrderingIdRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,
		DataSourceId: FormControl<string | null | undefined>,

		/** Required */
		OrderingId: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListGroupsOlderThanOrderingIdRequestFormGroup() {
		return new FormGroup<ListGroupsOlderThanOrderingIdRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataSourceId: new FormControl<string | null | undefined>(undefined),
			OrderingId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListIndicesResponse {
		IndexConfigurationSummaryItems?: Array<IndexConfigurationSummary>;
		NextToken?: string;
	}
	export interface ListIndicesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIndicesResponseFormGroup() {
		return new FormGroup<ListIndicesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information on the configuration of an index. */
	export interface IndexConfigurationSummary {
		Name?: string;
		Id?: string;
		Edition?: IndexEdition;

		/** Required */
		CreatedAt: Date;

		/** Required */
		UpdatedAt: Date;

		/** Required */
		Status: IndexStatus;
	}

	/** Summary information on the configuration of an index. */
	export interface IndexConfigurationSummaryFormProperties {
		Name: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Edition: FormControl<IndexEdition | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		UpdatedAt: FormControl<Date | null | undefined>,

		/** Required */
		Status: FormControl<IndexStatus | null | undefined>,
	}
	export function CreateIndexConfigurationSummaryFormGroup() {
		return new FormGroup<IndexConfigurationSummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Edition: new FormControl<IndexEdition | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<IndexStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListIndicesRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListIndicesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListIndicesRequestFormGroup() {
		return new FormGroup<ListIndicesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListQuerySuggestionsBlockListsResponse {
		BlockListSummaryItems?: Array<QuerySuggestionsBlockListSummary>;
		NextToken?: string;
	}
	export interface ListQuerySuggestionsBlockListsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListQuerySuggestionsBlockListsResponseFormGroup() {
		return new FormGroup<ListQuerySuggestionsBlockListsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Summary information on a query suggestions block list.</p> <p>This includes information on the block list ID, block list name, when the block list was created, when the block list was last updated, and the count of block words/phrases in the block list.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p> */
	export interface QuerySuggestionsBlockListSummary {
		Id?: string;
		Name?: string;
		Status?: QuerySuggestionsBlockListStatus;
		CreatedAt?: Date;
		UpdatedAt?: Date;
		ItemCount?: number | null;
	}

	/** <p>Summary information on a query suggestions block list.</p> <p>This includes information on the block list ID, block list name, when the block list was created, when the block list was last updated, and the count of block words/phrases in the block list.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p> */
	export interface QuerySuggestionsBlockListSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<QuerySuggestionsBlockListStatus | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		ItemCount: FormControl<number | null | undefined>,
	}
	export function CreateQuerySuggestionsBlockListSummaryFormGroup() {
		return new FormGroup<QuerySuggestionsBlockListSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<QuerySuggestionsBlockListStatus | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			ItemCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListQuerySuggestionsBlockListsRequest {

		/** Required */
		IndexId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListQuerySuggestionsBlockListsRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListQuerySuggestionsBlockListsRequestFormGroup() {
		return new FormGroup<ListQuerySuggestionsBlockListsRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceARN: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceUnavailableException {
	}
	export interface ResourceUnavailableExceptionFormProperties {
	}
	export function CreateResourceUnavailableExceptionFormGroup() {
		return new FormGroup<ResourceUnavailableExceptionFormProperties>({
		});

	}

	export interface ListThesauriResponse {
		NextToken?: string;
		ThesaurusSummaryItems?: Array<ThesaurusSummary>;
	}
	export interface ListThesauriResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListThesauriResponseFormGroup() {
		return new FormGroup<ListThesauriResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An array of summary information for a thesaurus or multiple thesauri. */
	export interface ThesaurusSummary {
		Id?: string;
		Name?: string;
		Status?: ThesaurusStatus;
		CreatedAt?: Date;
		UpdatedAt?: Date;
	}

	/** An array of summary information for a thesaurus or multiple thesauri. */
	export interface ThesaurusSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<ThesaurusStatus | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateThesaurusSummaryFormGroup() {
		return new FormGroup<ThesaurusSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ThesaurusStatus | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListThesauriRequest {

		/** Required */
		IndexId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListThesauriRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListThesauriRequestFormGroup() {
		return new FormGroup<ListThesauriRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutPrincipalMappingRequest {

		/** Required */
		IndexId: string;
		DataSourceId?: string;

		/** Required */
		GroupId: string;

		/** Required */
		GroupMembers: GroupMembers;
		OrderingId?: number | null;
		RoleArn?: string;
	}
	export interface PutPrincipalMappingRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,
		DataSourceId: FormControl<string | null | undefined>,

		/** Required */
		GroupId: FormControl<string | null | undefined>,
		OrderingId: FormControl<number | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreatePutPrincipalMappingRequestFormGroup() {
		return new FormGroup<PutPrincipalMappingRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataSourceId: new FormControl<string | null | undefined>(undefined),
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OrderingId: new FormControl<number | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of users or sub groups that belong to a group. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. */
	export interface GroupMembers {
		MemberGroups?: Array<MemberGroup>;
		MemberUsers?: Array<MemberUser>;
		S3PathforGroupMembers?: S3Path;
	}

	/** A list of users or sub groups that belong to a group. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. */
	export interface GroupMembersFormProperties {
	}
	export function CreateGroupMembersFormGroup() {
		return new FormGroup<GroupMembersFormProperties>({
		});

	}


	/** The sub groups that belong to a group. */
	export interface MemberGroup {

		/** Required */
		GroupId: string;
		DataSourceId?: string;
	}

	/** The sub groups that belong to a group. */
	export interface MemberGroupFormProperties {

		/** Required */
		GroupId: FormControl<string | null | undefined>,
		DataSourceId: FormControl<string | null | undefined>,
	}
	export function CreateMemberGroupFormGroup() {
		return new FormGroup<MemberGroupFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataSourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The users that belong to a group. */
	export interface MemberUser {

		/** Required */
		UserId: string;
	}

	/** The users that belong to a group. */
	export interface MemberUserFormProperties {

		/** Required */
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateMemberUserFormGroup() {
		return new FormGroup<MemberUserFormProperties>({
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface QueryResult {
		QueryId?: string;
		ResultItems?: Array<QueryResultItem>;
		FacetResults?: Array<FacetResult>;
		TotalNumberOfResults?: number | null;
		Warnings?: Array<Warning>;
		SpellCorrectedQueries?: Array<SpellCorrectedQuery>;
		FeaturedResultsItems?: Array<FeaturedResultsItem>;
	}
	export interface QueryResultFormProperties {
		QueryId: FormControl<string | null | undefined>,
		TotalNumberOfResults: FormControl<number | null | undefined>,
	}
	export function CreateQueryResultFormGroup() {
		return new FormGroup<QueryResultFormProperties>({
			QueryId: new FormControl<string | null | undefined>(undefined),
			TotalNumberOfResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>A single query result.</p> <p>A query result contains information about a document returned by the query. This includes the original location of the document, a list of attributes assigned to the document, and relevant text from the document that satisfies the query.</p> */
	export interface QueryResultItem {
		Id?: string;
		Type?: QueryResultType;
		Format?: QueryResultFormat;
		AdditionalAttributes?: Array<AdditionalResultAttribute>;
		DocumentId?: string;
		DocumentTitle?: TextWithHighlights;
		DocumentExcerpt?: TextWithHighlights;
		DocumentURI?: string;
		DocumentAttributes?: Array<DocumentAttribute>;
		ScoreAttributes?: ScoreAttributes;
		FeedbackToken?: string;
		TableExcerpt?: TableExcerpt;
	}

	/** <p>A single query result.</p> <p>A query result contains information about a document returned by the query. This includes the original location of the document, a list of attributes assigned to the document, and relevant text from the document that satisfies the query.</p> */
	export interface QueryResultItemFormProperties {
		Id: FormControl<string | null | undefined>,
		Type: FormControl<QueryResultType | null | undefined>,
		Format: FormControl<QueryResultFormat | null | undefined>,
		DocumentId: FormControl<string | null | undefined>,
		DocumentURI: FormControl<string | null | undefined>,
		FeedbackToken: FormControl<string | null | undefined>,
	}
	export function CreateQueryResultItemFormGroup() {
		return new FormGroup<QueryResultItemFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<QueryResultType | null | undefined>(undefined),
			Format: new FormControl<QueryResultFormat | null | undefined>(undefined),
			DocumentId: new FormControl<string | null | undefined>(undefined),
			DocumentURI: new FormControl<string | null | undefined>(undefined),
			FeedbackToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum QueryResultType { DOCUMENT = 'DOCUMENT', QUESTION_ANSWER = 'QUESTION_ANSWER', ANSWER = 'ANSWER' }

	export enum QueryResultFormat { TABLE = 'TABLE', TEXT = 'TEXT' }


	/** An attribute returned from an index query. */
	export interface AdditionalResultAttribute {

		/** Required */
		Key: string;

		/** Required */
		ValueType: AdditionalResultAttributeValueType;

		/** Required */
		Value: AdditionalResultAttributeValue;
	}

	/** An attribute returned from an index query. */
	export interface AdditionalResultAttributeFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		ValueType: FormControl<AdditionalResultAttributeValueType | null | undefined>,
	}
	export function CreateAdditionalResultAttributeFormGroup() {
		return new FormGroup<AdditionalResultAttributeFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ValueType: new FormControl<AdditionalResultAttributeValueType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AdditionalResultAttributeValueType { TEXT_WITH_HIGHLIGHTS_VALUE = 'TEXT_WITH_HIGHLIGHTS_VALUE' }


	/** An attribute returned with a document from a search. */
	export interface AdditionalResultAttributeValue {
		TextWithHighlightsValue?: TextWithHighlights;
	}

	/** An attribute returned with a document from a search. */
	export interface AdditionalResultAttributeValueFormProperties {
	}
	export function CreateAdditionalResultAttributeValueFormGroup() {
		return new FormGroup<AdditionalResultAttributeValueFormProperties>({
		});

	}


	/** Provides text and information about where to highlight the text. */
	export interface TextWithHighlights {
		Text?: string;
		Highlights?: Array<Highlight>;
	}

	/** Provides text and information about where to highlight the text. */
	export interface TextWithHighlightsFormProperties {
		Text: FormControl<string | null | undefined>,
	}
	export function CreateTextWithHighlightsFormGroup() {
		return new FormGroup<TextWithHighlightsFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information that you can use to highlight a search result so that your users can quickly identify terms in the response. */
	export interface Highlight {

		/** Required */
		BeginOffset: number;

		/** Required */
		EndOffset: number;
		TopAnswer?: boolean | null;
		Type?: HighlightType;
	}

	/** Provides information that you can use to highlight a search result so that your users can quickly identify terms in the response. */
	export interface HighlightFormProperties {

		/** Required */
		BeginOffset: FormControl<number | null | undefined>,

		/** Required */
		EndOffset: FormControl<number | null | undefined>,
		TopAnswer: FormControl<boolean | null | undefined>,
		Type: FormControl<HighlightType | null | undefined>,
	}
	export function CreateHighlightFormGroup() {
		return new FormGroup<HighlightFormProperties>({
			BeginOffset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			EndOffset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TopAnswer: new FormControl<boolean | null | undefined>(undefined),
			Type: new FormControl<HighlightType | null | undefined>(undefined),
		});

	}

	export enum HighlightType { STANDARD = 'STANDARD', THESAURUS_SYNONYM = 'THESAURUS_SYNONYM' }


	/** Provides a relative ranking that indicates how confident Amazon Kendra is that the response is relevant to the query. */
	export interface ScoreAttributes {
		ScoreConfidence?: ScoreConfidence;
	}

	/** Provides a relative ranking that indicates how confident Amazon Kendra is that the response is relevant to the query. */
	export interface ScoreAttributesFormProperties {
		ScoreConfidence: FormControl<ScoreConfidence | null | undefined>,
	}
	export function CreateScoreAttributesFormGroup() {
		return new FormGroup<ScoreAttributesFormProperties>({
			ScoreConfidence: new FormControl<ScoreConfidence | null | undefined>(undefined),
		});

	}


	/** Enumeration for query score confidence. */
	export enum ScoreConfidence { VERY_HIGH = 'VERY_HIGH', HIGH = 'HIGH', MEDIUM = 'MEDIUM', LOW = 'LOW', NOT_AVAILABLE = 'NOT_AVAILABLE' }


	/** An excerpt from a table within a document. The table excerpt displays up to five columns and three rows, depending on how many table cells are relevant to the query and how many columns are available in the original table. The top most relevant cell is displayed in the table excerpt, along with the next most relevant cells. */
	export interface TableExcerpt {
		Rows?: Array<TableRow>;
		TotalNumberOfRows?: number | null;
	}

	/** An excerpt from a table within a document. The table excerpt displays up to five columns and three rows, depending on how many table cells are relevant to the query and how many columns are available in the original table. The top most relevant cell is displayed in the table excerpt, along with the next most relevant cells. */
	export interface TableExcerptFormProperties {
		TotalNumberOfRows: FormControl<number | null | undefined>,
	}
	export function CreateTableExcerptFormGroup() {
		return new FormGroup<TableExcerptFormProperties>({
			TotalNumberOfRows: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a row in a table excerpt. */
	export interface TableRow {
		Cells?: Array<TableCell>;
	}

	/** Information about a row in a table excerpt. */
	export interface TableRowFormProperties {
	}
	export function CreateTableRowFormGroup() {
		return new FormGroup<TableRowFormProperties>({
		});

	}


	/** Provides information about a table cell in a table excerpt. */
	export interface TableCell {
		Value?: string;
		TopAnswer?: boolean | null;
		Highlighted?: boolean | null;
		Header?: boolean | null;
	}

	/** Provides information about a table cell in a table excerpt. */
	export interface TableCellFormProperties {
		Value: FormControl<string | null | undefined>,
		TopAnswer: FormControl<boolean | null | undefined>,
		Highlighted: FormControl<boolean | null | undefined>,
		Header: FormControl<boolean | null | undefined>,
	}
	export function CreateTableCellFormGroup() {
		return new FormGroup<TableCellFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
			TopAnswer: new FormControl<boolean | null | undefined>(undefined),
			Highlighted: new FormControl<boolean | null | undefined>(undefined),
			Header: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The facet values for the documents in the response. */
	export interface FacetResult {
		DocumentAttributeKey?: string;
		DocumentAttributeValueType?: DocumentAttributeValueType;
		DocumentAttributeValueCountPairs?: Array<DocumentAttributeValueCountPair>;
	}

	/** The facet values for the documents in the response. */
	export interface FacetResultFormProperties {
		DocumentAttributeKey: FormControl<string | null | undefined>,
		DocumentAttributeValueType: FormControl<DocumentAttributeValueType | null | undefined>,
	}
	export function CreateFacetResultFormGroup() {
		return new FormGroup<FacetResultFormProperties>({
			DocumentAttributeKey: new FormControl<string | null | undefined>(undefined),
			DocumentAttributeValueType: new FormControl<DocumentAttributeValueType | null | undefined>(undefined),
		});

	}


	/** Provides the count of documents that match a particular attribute when doing a faceted search. */
	export interface DocumentAttributeValueCountPair {
		DocumentAttributeValue?: DocumentAttributeValue;
		Count?: number | null;
		FacetResults?: Array<FacetResult>;
	}

	/** Provides the count of documents that match a particular attribute when doing a faceted search. */
	export interface DocumentAttributeValueCountPairFormProperties {
		Count: FormControl<number | null | undefined>,
	}
	export function CreateDocumentAttributeValueCountPairFormGroup() {
		return new FormGroup<DocumentAttributeValueCountPairFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The warning code and message that explains a problem with a query. */
	export interface Warning {
		Message?: string;
		Code?: WarningCode;
	}

	/** The warning code and message that explains a problem with a query. */
	export interface WarningFormProperties {
		Message: FormControl<string | null | undefined>,
		Code: FormControl<WarningCode | null | undefined>,
	}
	export function CreateWarningFormGroup() {
		return new FormGroup<WarningFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<WarningCode | null | undefined>(undefined),
		});

	}

	export enum WarningCode { QUERY_LANGUAGE_INVALID_SYNTAX = 'QUERY_LANGUAGE_INVALID_SYNTAX' }


	/** A query with suggested spell corrections.  */
	export interface SpellCorrectedQuery {
		SuggestedQueryText?: string;
		Corrections?: Array<Correction>;
	}

	/** A query with suggested spell corrections.  */
	export interface SpellCorrectedQueryFormProperties {
		SuggestedQueryText: FormControl<string | null | undefined>,
	}
	export function CreateSpellCorrectedQueryFormGroup() {
		return new FormGroup<SpellCorrectedQueryFormProperties>({
			SuggestedQueryText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A corrected misspelled word in a query. */
	export interface Correction {
		BeginOffset?: number | null;
		EndOffset?: number | null;
		Term?: string;
		CorrectedTerm?: string;
	}

	/** A corrected misspelled word in a query. */
	export interface CorrectionFormProperties {
		BeginOffset: FormControl<number | null | undefined>,
		EndOffset: FormControl<number | null | undefined>,
		Term: FormControl<string | null | undefined>,
		CorrectedTerm: FormControl<string | null | undefined>,
	}
	export function CreateCorrectionFormGroup() {
		return new FormGroup<CorrectionFormProperties>({
			BeginOffset: new FormControl<number | null | undefined>(undefined),
			EndOffset: new FormControl<number | null | undefined>(undefined),
			Term: new FormControl<string | null | undefined>(undefined),
			CorrectedTerm: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single featured result item. A featured result is displayed at the top of the search results page, placed above all other results for certain queries. If there's an exact match of a query, then certain documents are featured in the search results. */
	export interface FeaturedResultsItem {
		Id?: string;
		Type?: QueryResultType;
		AdditionalAttributes?: Array<AdditionalResultAttribute>;
		DocumentId?: string;

		/** Provides text and information about where to highlight the text. */
		DocumentTitle?: TextWithHighlights;

		/** Provides text and information about where to highlight the text. */
		DocumentExcerpt?: TextWithHighlights;
		DocumentURI?: string;
		DocumentAttributes?: Array<DocumentAttribute>;
		FeedbackToken?: string;
	}

	/** A single featured result item. A featured result is displayed at the top of the search results page, placed above all other results for certain queries. If there's an exact match of a query, then certain documents are featured in the search results. */
	export interface FeaturedResultsItemFormProperties {
		Id: FormControl<string | null | undefined>,
		Type: FormControl<QueryResultType | null | undefined>,
		DocumentId: FormControl<string | null | undefined>,
		DocumentURI: FormControl<string | null | undefined>,
		FeedbackToken: FormControl<string | null | undefined>,
	}
	export function CreateFeaturedResultsItemFormGroup() {
		return new FormGroup<FeaturedResultsItemFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<QueryResultType | null | undefined>(undefined),
			DocumentId: new FormControl<string | null | undefined>(undefined),
			DocumentURI: new FormControl<string | null | undefined>(undefined),
			FeedbackToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryRequest {

		/** Required */
		IndexId: string;
		QueryText?: string;
		AttributeFilter?: AttributeFilter;
		Facets?: Array<Facet>;
		RequestedDocumentAttributes?: Array<string>;
		QueryResultTypeFilter?: QueryResultType;
		DocumentRelevanceOverrideConfigurations?: Array<DocumentRelevanceConfiguration>;
		PageNumber?: number | null;
		PageSize?: number | null;
		SortingConfiguration?: SortingConfiguration;
		UserContext?: UserContext;
		VisitorId?: string;
		SpellCorrectionConfiguration?: SpellCorrectionConfiguration;
	}
	export interface QueryRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,
		QueryText: FormControl<string | null | undefined>,
		QueryResultTypeFilter: FormControl<QueryResultType | null | undefined>,
		PageNumber: FormControl<number | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		VisitorId: FormControl<string | null | undefined>,
	}
	export function CreateQueryRequestFormGroup() {
		return new FormGroup<QueryRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QueryText: new FormControl<string | null | undefined>(undefined),
			QueryResultTypeFilter: new FormControl<QueryResultType | null | undefined>(undefined),
			PageNumber: new FormControl<number | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			VisitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Information about a document attribute. You can use document attributes as facets.</p> <p>For example, the document attribute or facet "Department" includes the values "HR", "Engineering", and "Accounting". You can display these values in the search results so that documents can be searched by department.</p> <p>You can display up to 10 facet values per facet for a query. If you want to increase this limit, contact <a href="http://aws.amazon.com/contact-us/">Support</a>.</p> */
	export interface Facet {
		DocumentAttributeKey?: string;
		Facets?: Array<Facet>;
		MaxResults?: number | null;
	}

	/** <p>Information about a document attribute. You can use document attributes as facets.</p> <p>For example, the document attribute or facet "Department" includes the values "HR", "Engineering", and "Accounting". You can display these values in the search results so that documents can be searched by department.</p> <p>You can display up to 10 facet values per facet for a query. If you want to increase this limit, contact <a href="http://aws.amazon.com/contact-us/">Support</a>.</p> */
	export interface FacetFormProperties {
		DocumentAttributeKey: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateFacetFormGroup() {
		return new FormGroup<FacetFormProperties>({
			DocumentAttributeKey: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Overrides the document relevance properties of a custom index field. */
	export interface DocumentRelevanceConfiguration {

		/** Required */
		Name: string;

		/** Required */
		Relevance: Relevance;
	}

	/** Overrides the document relevance properties of a custom index field. */
	export interface DocumentRelevanceConfigurationFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDocumentRelevanceConfigurationFormGroup() {
		return new FormGroup<DocumentRelevanceConfigurationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Specifies the document attribute to use to sort the response to a Amazon Kendra query. You can specify a single attribute for sorting. The attribute must have the <code>Sortable</code> flag set to <code>true</code>, otherwise Amazon Kendra returns an exception.</p> <p>You can sort attributes of the following types.</p> <ul> <li> <p>Date value</p> </li> <li> <p>Long value</p> </li> <li> <p>String value</p> </li> </ul> <p>You can't sort attributes of the following type.</p> <ul> <li> <p>String list value</p> </li> </ul> */
	export interface SortingConfiguration {

		/** Required */
		DocumentAttributeKey: string;

		/** Required */
		SortOrder: SortOrder;
	}

	/** <p>Specifies the document attribute to use to sort the response to a Amazon Kendra query. You can specify a single attribute for sorting. The attribute must have the <code>Sortable</code> flag set to <code>true</code>, otherwise Amazon Kendra returns an exception.</p> <p>You can sort attributes of the following types.</p> <ul> <li> <p>Date value</p> </li> <li> <p>Long value</p> </li> <li> <p>String value</p> </li> </ul> <p>You can't sort attributes of the following type.</p> <ul> <li> <p>String list value</p> </li> </ul> */
	export interface SortingConfigurationFormProperties {

		/** Required */
		DocumentAttributeKey: FormControl<string | null | undefined>,

		/** Required */
		SortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateSortingConfigurationFormGroup() {
		return new FormGroup<SortingConfigurationFormProperties>({
			DocumentAttributeKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SortOrder { DESC = 'DESC', ASC = 'ASC' }


	/** <p>Provides the configuration information for suggested query spell corrections.</p> <p>Suggested spell corrections are based on words that appear in your indexed documents and how closely a corrected word matches a misspelled word.</p> <p>This feature is designed with certain defaults or limits. For information on the current limits and how to request more support for some limits, see the <a href="https://docs.aws.amazon.com/kendra/latest/dg/query-spell-check.html">Spell Checker documentation</a>.</p> */
	export interface SpellCorrectionConfiguration {

		/** Required */
		IncludeQuerySpellCheckSuggestions: boolean;
	}

	/** <p>Provides the configuration information for suggested query spell corrections.</p> <p>Suggested spell corrections are based on words that appear in your indexed documents and how closely a corrected word matches a misspelled word.</p> <p>This feature is designed with certain defaults or limits. For information on the current limits and how to request more support for some limits, see the <a href="https://docs.aws.amazon.com/kendra/latest/dg/query-spell-check.html">Spell Checker documentation</a>.</p> */
	export interface SpellCorrectionConfigurationFormProperties {

		/** Required */
		IncludeQuerySpellCheckSuggestions: FormControl<boolean | null | undefined>,
	}
	export function CreateSpellCorrectionConfigurationFormGroup() {
		return new FormGroup<SpellCorrectionConfigurationFormProperties>({
			IncludeQuerySpellCheckSuggestions: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RetrieveResult {
		QueryId?: string;
		ResultItems?: Array<RetrieveResultItem>;
	}
	export interface RetrieveResultFormProperties {
		QueryId: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveResultFormGroup() {
		return new FormGroup<RetrieveResultFormProperties>({
			QueryId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single retrieved relevant passage result. */
	export interface RetrieveResultItem {
		Id?: string;
		DocumentId?: string;
		DocumentTitle?: string;
		Content?: string;
		DocumentURI?: string;
		DocumentAttributes?: Array<DocumentAttribute>;
	}

	/** A single retrieved relevant passage result. */
	export interface RetrieveResultItemFormProperties {
		Id: FormControl<string | null | undefined>,
		DocumentId: FormControl<string | null | undefined>,
		DocumentTitle: FormControl<string | null | undefined>,
		Content: FormControl<string | null | undefined>,
		DocumentURI: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveResultItemFormGroup() {
		return new FormGroup<RetrieveResultItemFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			DocumentId: new FormControl<string | null | undefined>(undefined),
			DocumentTitle: new FormControl<string | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined),
			DocumentURI: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveRequest {

		/** Required */
		IndexId: string;

		/** Required */
		QueryText: string;
		AttributeFilter?: AttributeFilter;
		RequestedDocumentAttributes?: Array<string>;
		DocumentRelevanceOverrideConfigurations?: Array<DocumentRelevanceConfiguration>;
		PageNumber?: number | null;
		PageSize?: number | null;
		UserContext?: UserContext;
	}
	export interface RetrieveRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,

		/** Required */
		QueryText: FormControl<string | null | undefined>,
		PageNumber: FormControl<number | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateRetrieveRequestFormGroup() {
		return new FormGroup<RetrieveRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QueryText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PageNumber: new FormControl<number | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StartDataSourceSyncJobResponse {
		ExecutionId?: string;
	}
	export interface StartDataSourceSyncJobResponseFormProperties {
		ExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateStartDataSourceSyncJobResponseFormGroup() {
		return new FormGroup<StartDataSourceSyncJobResponseFormProperties>({
			ExecutionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartDataSourceSyncJobRequest {

		/** Required */
		Id: string;

		/** Required */
		IndexId: string;
	}
	export interface StartDataSourceSyncJobRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateStartDataSourceSyncJobRequestFormGroup() {
		return new FormGroup<StartDataSourceSyncJobRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
		});

	}

	export interface StopDataSourceSyncJobRequest {

		/** Required */
		Id: string;

		/** Required */
		IndexId: string;
	}
	export interface StopDataSourceSyncJobRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateStopDataSourceSyncJobRequestFormGroup() {
		return new FormGroup<StopDataSourceSyncJobRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SubmitFeedbackRequest {

		/** Required */
		IndexId: string;

		/** Required */
		QueryId: string;
		ClickFeedbackItems?: Array<ClickFeedback>;
		RelevanceFeedbackItems?: Array<RelevanceFeedback>;
	}
	export interface SubmitFeedbackRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,

		/** Required */
		QueryId: FormControl<string | null | undefined>,
	}
	export function CreateSubmitFeedbackRequestFormGroup() {
		return new FormGroup<SubmitFeedbackRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QueryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Gathers information about when a particular result was clicked by a user. Your application uses the <code>SubmitFeedback</code> API to provide click information. */
	export interface ClickFeedback {

		/** Required */
		ResultId: string;

		/** Required */
		ClickTime: Date;
	}

	/** Gathers information about when a particular result was clicked by a user. Your application uses the <code>SubmitFeedback</code> API to provide click information. */
	export interface ClickFeedbackFormProperties {

		/** Required */
		ResultId: FormControl<string | null | undefined>,

		/** Required */
		ClickTime: FormControl<Date | null | undefined>,
	}
	export function CreateClickFeedbackFormGroup() {
		return new FormGroup<ClickFeedbackFormProperties>({
			ResultId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClickTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides feedback on how relevant a document is to a search. Your application uses the <code>SubmitFeedback</code> API to provide relevance information. */
	export interface RelevanceFeedback {

		/** Required */
		ResultId: string;

		/** Required */
		RelevanceValue: RelevanceType;
	}

	/** Provides feedback on how relevant a document is to a search. Your application uses the <code>SubmitFeedback</code> API to provide relevance information. */
	export interface RelevanceFeedbackFormProperties {

		/** Required */
		ResultId: FormControl<string | null | undefined>,

		/** Required */
		RelevanceValue: FormControl<RelevanceType | null | undefined>,
	}
	export function CreateRelevanceFeedbackFormGroup() {
		return new FormGroup<RelevanceFeedbackFormProperties>({
			ResultId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RelevanceValue: new FormControl<RelevanceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RelevanceType { RELEVANT = 'RELEVANT', NOT_RELEVANT = 'NOT_RELEVANT' }

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UntagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAccessControlConfigurationResponse {
	}
	export interface UpdateAccessControlConfigurationResponseFormProperties {
	}
	export function CreateUpdateAccessControlConfigurationResponseFormGroup() {
		return new FormGroup<UpdateAccessControlConfigurationResponseFormProperties>({
		});

	}

	export interface UpdateAccessControlConfigurationRequest {

		/** Required */
		IndexId: string;

		/** Required */
		Id: string;
		Name?: string;
		Description?: string;
		AccessControlList?: Array<Principal>;
		HierarchicalAccessControlList?: Array<HierarchicalPrincipal>;
	}
	export interface UpdateAccessControlConfigurationRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAccessControlConfigurationRequestFormGroup() {
		return new FormGroup<UpdateAccessControlConfigurationRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDataSourceRequest {

		/** Required */
		Id: string;
		Name?: string;

		/** Required */
		IndexId: string;
		Configuration?: DataSourceConfiguration;
		VpcConfiguration?: DataSourceVpcConfiguration;
		Description?: string;
		Schedule?: string;
		RoleArn?: string;
		LanguageCode?: string;
		CustomDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration;
	}
	export interface UpdateDataSourceRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Required */
		IndexId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Schedule: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		LanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataSourceRequestFormGroup() {
		return new FormGroup<UpdateDataSourceRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Schedule: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateExperienceRequest {

		/** Required */
		Id: string;
		Name?: string;

		/** Required */
		IndexId: string;
		RoleArn?: string;
		Configuration?: ExperienceConfiguration;
		Description?: string;
	}
	export interface UpdateExperienceRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Required */
		IndexId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateExperienceRequestFormGroup() {
		return new FormGroup<UpdateExperienceRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFeaturedResultsSetResponse {
		FeaturedResultsSet?: FeaturedResultsSet;
	}
	export interface UpdateFeaturedResultsSetResponseFormProperties {
	}
	export function CreateUpdateFeaturedResultsSetResponseFormGroup() {
		return new FormGroup<UpdateFeaturedResultsSetResponseFormProperties>({
		});

	}

	export interface UpdateFeaturedResultsSetRequest {

		/** Required */
		IndexId: string;

		/** Required */
		FeaturedResultsSetId: string;
		FeaturedResultsSetName?: string;
		Description?: string;
		Status?: FeaturedResultsSetStatus;
		QueryTexts?: Array<string>;
		FeaturedDocuments?: Array<FeaturedDocument>;
	}
	export interface UpdateFeaturedResultsSetRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,

		/** Required */
		FeaturedResultsSetId: FormControl<string | null | undefined>,
		FeaturedResultsSetName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<FeaturedResultsSetStatus | null | undefined>,
	}
	export function CreateUpdateFeaturedResultsSetRequestFormGroup() {
		return new FormGroup<UpdateFeaturedResultsSetRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FeaturedResultsSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FeaturedResultsSetName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<FeaturedResultsSetStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateIndexRequest {

		/** Required */
		Id: string;
		Name?: string;
		RoleArn?: string;
		Description?: string;
		DocumentMetadataConfigurationUpdates?: Array<DocumentMetadataConfiguration>;
		CapacityUnits?: CapacityUnitsConfiguration;
		UserTokenConfigurations?: Array<UserTokenConfiguration>;
		UserContextPolicy?: UserContextPolicy;
		UserGroupResolutionConfiguration?: UserGroupResolutionConfiguration;
	}
	export interface UpdateIndexRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		UserContextPolicy: FormControl<UserContextPolicy | null | undefined>,
	}
	export function CreateUpdateIndexRequestFormGroup() {
		return new FormGroup<UpdateIndexRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			UserContextPolicy: new FormControl<UserContextPolicy | null | undefined>(undefined),
		});

	}

	export interface UpdateQuerySuggestionsBlockListRequest {

		/** Required */
		IndexId: string;

		/** Required */
		Id: string;
		Name?: string;
		Description?: string;
		SourceS3Path?: S3Path;
		RoleArn?: string;
	}
	export interface UpdateQuerySuggestionsBlockListRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateQuerySuggestionsBlockListRequestFormGroup() {
		return new FormGroup<UpdateQuerySuggestionsBlockListRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateQuerySuggestionsConfigRequest {

		/** Required */
		IndexId: string;
		Mode?: Mode;
		QueryLogLookBackWindowInDays?: number | null;
		IncludeQueriesWithoutUserInformation?: boolean | null;
		MinimumNumberOfQueryingUsers?: number | null;
		MinimumQueryCount?: number | null;
		AttributeSuggestionsConfig?: AttributeSuggestionsUpdateConfig;
	}
	export interface UpdateQuerySuggestionsConfigRequestFormProperties {

		/** Required */
		IndexId: FormControl<string | null | undefined>,
		Mode: FormControl<Mode | null | undefined>,
		QueryLogLookBackWindowInDays: FormControl<number | null | undefined>,
		IncludeQueriesWithoutUserInformation: FormControl<boolean | null | undefined>,
		MinimumNumberOfQueryingUsers: FormControl<number | null | undefined>,
		MinimumQueryCount: FormControl<number | null | undefined>,
	}
	export function CreateUpdateQuerySuggestionsConfigRequestFormGroup() {
		return new FormGroup<UpdateQuerySuggestionsConfigRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Mode: new FormControl<Mode | null | undefined>(undefined),
			QueryLogLookBackWindowInDays: new FormControl<number | null | undefined>(undefined),
			IncludeQueriesWithoutUserInformation: new FormControl<boolean | null | undefined>(undefined),
			MinimumNumberOfQueryingUsers: new FormControl<number | null | undefined>(undefined),
			MinimumQueryCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Updates the configuration information for the document fields/attributes that you want to base query suggestions on.</p> <p>To deactivate using documents fields for query suggestions, set the mode to <code>INACTIVE</code>. You must also set <code>SuggestionTypes</code> as either <code>QUERY</code> or <code>DOCUMENT_ATTRIBUTES</code> and then call <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_GetQuerySuggestions.html">GetQuerySuggestions</a>. If you set to <code>QUERY</code>, then Amazon Kendra uses the query history to base suggestions on. If you set to <code>DOCUMENT_ATTRIBUTES</code>, then Amazon Kendra uses the contents of document fields to base suggestions on.</p> */
	export interface AttributeSuggestionsUpdateConfig {
		SuggestableConfigList?: Array<SuggestableConfig>;
		AttributeSuggestionsMode?: FeaturedResultsSetStatus;
	}

	/** <p>Updates the configuration information for the document fields/attributes that you want to base query suggestions on.</p> <p>To deactivate using documents fields for query suggestions, set the mode to <code>INACTIVE</code>. You must also set <code>SuggestionTypes</code> as either <code>QUERY</code> or <code>DOCUMENT_ATTRIBUTES</code> and then call <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_GetQuerySuggestions.html">GetQuerySuggestions</a>. If you set to <code>QUERY</code>, then Amazon Kendra uses the query history to base suggestions on. If you set to <code>DOCUMENT_ATTRIBUTES</code>, then Amazon Kendra uses the contents of document fields to base suggestions on.</p> */
	export interface AttributeSuggestionsUpdateConfigFormProperties {
		AttributeSuggestionsMode: FormControl<FeaturedResultsSetStatus | null | undefined>,
	}
	export function CreateAttributeSuggestionsUpdateConfigFormGroup() {
		return new FormGroup<AttributeSuggestionsUpdateConfigFormProperties>({
			AttributeSuggestionsMode: new FormControl<FeaturedResultsSetStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateThesaurusRequest {

		/** Required */
		Id: string;
		Name?: string;

		/** Required */
		IndexId: string;
		Description?: string;
		RoleArn?: string;

		/** Information required to find a specific file in an Amazon S3 bucket. */
		SourceS3Path?: S3Path;
	}
	export interface UpdateThesaurusRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Required */
		IndexId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateThesaurusRequestFormGroup() {
		return new FormGroup<UpdateThesaurusRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AttributeSuggestionsMode { ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE' }

	export enum PrincipalType { USER = 'USER', GROUP = 'GROUP' }

	export enum ServiceNowAuthenticationType { HTTP_BASIC = 'HTTP_BASIC', OAUTH2 = 'OAUTH2' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Grants users or groups in your IAM Identity Center identity source access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
		 * Post #X-Amz-Target=AWSKendraFrontendService.AssociateEntitiesToExperience
		 * @return {AssociateEntitiesToExperienceResponse} Success
		 */
		AssociateEntitiesToExperience(requestBody: AssociateEntitiesToExperienceRequest): Observable<AssociateEntitiesToExperienceResponse> {
			return this.http.post<AssociateEntitiesToExperienceResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.AssociateEntitiesToExperience', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Defines the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
		 * Post #X-Amz-Target=AWSKendraFrontendService.AssociatePersonasToEntities
		 * @return {AssociatePersonasToEntitiesResponse} Success
		 */
		AssociatePersonasToEntities(requestBody: AssociatePersonasToEntitiesRequest): Observable<AssociatePersonasToEntitiesResponse> {
			return this.http.post<AssociatePersonasToEntitiesResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.AssociatePersonasToEntities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes one or more documents from an index. The documents must have been added with the <code>BatchPutDocument</code> API.</p> <p>The documents are deleted asynchronously. You can see the progress of the deletion by using Amazon Web Services CloudWatch. Any error messages related to the processing of the batch are sent to you CloudWatch log.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument
		 * @return {BatchDeleteDocumentResponse} Success
		 */
		BatchDeleteDocument(requestBody: BatchDeleteDocumentRequest): Observable<BatchDeleteDocumentResponse> {
			return this.http.post<BatchDeleteDocumentResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more sets of featured results. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.
		 * Post #X-Amz-Target=AWSKendraFrontendService.BatchDeleteFeaturedResultsSet
		 * @return {BatchDeleteFeaturedResultsSetResponse} Success
		 */
		BatchDeleteFeaturedResultsSet(requestBody: BatchDeleteFeaturedResultsSetRequest): Observable<BatchDeleteFeaturedResultsSetResponse> {
			return this.http.post<BatchDeleteFeaturedResultsSetResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.BatchDeleteFeaturedResultsSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the indexing status for one or more documents submitted with the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html"> BatchPutDocument</a> API.</p> <p>When you use the <code>BatchPutDocument</code> API, documents are indexed asynchronously. You can use the <code>BatchGetDocumentStatus</code> API to get the current status of a list of documents so that you can determine if they have been successfully indexed.</p> <p>You can also use the <code>BatchGetDocumentStatus</code> API to check the status of the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteDocument.html"> BatchDeleteDocument</a> API. When a document is deleted from the index, Amazon Kendra returns <code>NOT_FOUND</code> as the status.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.BatchGetDocumentStatus
		 * @return {BatchGetDocumentStatusResponse} Success
		 */
		BatchGetDocumentStatus(requestBody: BatchGetDocumentStatusRequest): Observable<BatchGetDocumentStatusResponse> {
			return this.http.post<BatchGetDocumentStatusResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.BatchGetDocumentStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds one or more documents to an index.</p> <p>The <code>BatchPutDocument</code> API enables you to ingest inline documents or a set of documents stored in an Amazon S3 bucket. Use this API to ingest your text and unstructured text into an index, add custom attributes to the documents, and to attach an access control list to the documents added to the index.</p> <p>The documents are indexed asynchronously. You can see the progress of the batch using Amazon Web Services CloudWatch. Any error messages related to processing the batch are sent to your Amazon Web Services CloudWatch log.</p> <p>For an example of ingesting inline documents using Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-binary-doc.html">Adding files directly to an index</a>.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.BatchPutDocument
		 * @return {BatchPutDocumentResponse} Success
		 */
		BatchPutDocument(requestBody: BatchPutDocumentRequest): Observable<BatchPutDocumentResponse> {
			return this.http.post<BatchPutDocumentResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.BatchPutDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Clears existing query suggestions from an index.</p> <p>This deletes existing suggestions only, not the queries in the query log. After you clear suggestions, Amazon Kendra learns new suggestions based on new queries added to the query log from the time you cleared suggestions. If you do not see any new suggestions, then please allow Amazon Kendra to collect enough queries to learn new suggestions.</p> <p> <code>ClearQuerySuggestions</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.ClearQuerySuggestions
		 * @return {void} Success
		 */
		ClearQuerySuggestions(requestBody: ClearQuerySuggestionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.ClearQuerySuggestions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an access configuration for your documents. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.</p> <p>You can use this to re-configure your existing document level access control without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. One of these users leaves the company or switches to a team that should be blocked from accessing top-secret documents. The user still has access to top-secret documents because the user had access when your documents were previously indexed. You can create a specific access control configuration for the user with deny access. You can later update the access control configuration to allow access if the user returns to the company and re-joins the 'top-secret' team. You can re-configure access control for your documents as circumstances change.</p> <p>To apply your access control configuration to certain documents, you call the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a> API with the <code>AccessControlConfigurationId</code> included in the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Document.html">Document</a> object. If you use an S3 bucket as a data source, you update the <code>.metadata.json</code> with the <code>AccessControlConfigurationId</code> and synchronize your data source. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the <code>BatchPutDocument</code> API.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.CreateAccessControlConfiguration
		 * @return {CreateAccessControlConfigurationResponse} Success
		 */
		CreateAccessControlConfiguration(requestBody: CreateAccessControlConfigurationRequest): Observable<CreateAccessControlConfigurationResponse> {
			return this.http.post<CreateAccessControlConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.CreateAccessControlConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a data source connector that you want to use with an Amazon Kendra index.</p> <p>You specify a name, data source connector type and description for your data source. You also specify configuration information for the data source connector.</p> <p> <code>CreateDataSource</code> is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.</p> <p>For an example of creating an index and data source using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-python.html">Getting started with Python SDK</a>. For an example of creating an index and data source using the Java SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-java.html">Getting started with Java SDK</a>.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.CreateDataSource
		 * @return {CreateDataSourceResponse} Success
		 */
		CreateDataSource(requestBody: CreateDataSourceRequest): Observable<CreateDataSourceResponse> {
			return this.http.post<CreateDataSourceResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.CreateDataSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an Amazon Kendra experience such as a search application. For more information on creating a search application experience, including using the Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
		 * Post #X-Amz-Target=AWSKendraFrontendService.CreateExperience
		 * @return {CreateExperienceResponse} Success
		 */
		CreateExperience(requestBody: CreateExperienceRequest): Observable<CreateExperienceResponse> {
			return this.http.post<CreateExperienceResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.CreateExperience', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a set of frequently ask questions (FAQs) using a specified FAQ file stored in an Amazon S3 bucket.</p> <p>Adding FAQs to an index is an asynchronous operation.</p> <p>For an example of adding an FAQ to an index using Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-creating-faq.html#using-faq-file">Using your FAQ file</a>.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.CreateFaq
		 * @return {CreateFaqResponse} Success
		 */
		CreateFaq(requestBody: CreateFaqRequest): Observable<CreateFaqResponse> {
			return this.http.post<CreateFaqResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.CreateFaq', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a set of featured results to display at the top of the search results page. Featured results are placed above all other results for certain queries. You map specific queries to specific documents for featuring in the results. If a query contains an exact match, then one or more specific documents are featured in the search results.</p> <p>You can create up to 50 sets of featured results per index. You can request to increase this limit by contacting <a href="http://aws.amazon.com/contact-us/">Support</a>.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.CreateFeaturedResultsSet
		 * @return {CreateFeaturedResultsSetResponse} Success
		 */
		CreateFeaturedResultsSet(requestBody: CreateFeaturedResultsSetRequest): Observable<CreateFeaturedResultsSetResponse> {
			return this.http.post<CreateFeaturedResultsSetResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.CreateFeaturedResultsSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an Amazon Kendra index. Index creation is an asynchronous API. To determine if index creation has completed, check the <code>Status</code> field returned from a call to <code>DescribeIndex</code>. The <code>Status</code> field is set to <code>ACTIVE</code> when the index is ready to use.</p> <p>Once the index is active you can index your documents using the <code>BatchPutDocument</code> API or using one of the supported data sources.</p> <p>For an example of creating an index and data source using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-python.html">Getting started with Python SDK</a>. For an example of creating an index and data source using the Java SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-java.html">Getting started with Java SDK</a>.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.CreateIndex
		 * @return {CreateIndexResponse} Success
		 */
		CreateIndex(requestBody: CreateIndexRequest): Observable<CreateIndexResponse> {
			return this.http.post<CreateIndexResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.CreateIndex', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a block list to exlcude certain queries from suggestions.</p> <p>Any query that contains words or phrases specified in the block list is blocked or filtered out from being shown as a suggestion.</p> <p>You need to provide the file location of your block list text file in your S3 bucket. In your text file, enter each block word or phrase on a separate line.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p> <p> <code>CreateQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p> <p>For an example of creating a block list for query suggestions using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/query-suggestions.html#query-suggestions-blocklist">Query suggestions block list</a>.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.CreateQuerySuggestionsBlockList
		 * @return {CreateQuerySuggestionsBlockListResponse} Success
		 */
		CreateQuerySuggestionsBlockList(requestBody: CreateQuerySuggestionsBlockListRequest): Observable<CreateQuerySuggestionsBlockListResponse> {
			return this.http.post<CreateQuerySuggestionsBlockListResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.CreateQuerySuggestionsBlockList', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a thesaurus for an index. The thesaurus contains a list of synonyms in Solr format.</p> <p>For an example of adding a thesaurus file to an index, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/index-synonyms-adding-thesaurus-file.html">Adding custom synonyms to an index</a>.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.CreateThesaurus
		 * @return {CreateThesaurusResponse} Success
		 */
		CreateThesaurus(requestBody: CreateThesaurusRequest): Observable<CreateThesaurusResponse> {
			return this.http.post<CreateThesaurusResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.CreateThesaurus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.
		 * Post #X-Amz-Target=AWSKendraFrontendService.DeleteAccessControlConfiguration
		 * @return {DeleteAccessControlConfigurationResponse} Success
		 */
		DeleteAccessControlConfiguration(requestBody: DeleteAccessControlConfigurationRequest): Observable<DeleteAccessControlConfigurationResponse> {
			return this.http.post<DeleteAccessControlConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DeleteAccessControlConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Amazon Kendra data source connector. An exception is not thrown if the data source is already being deleted. While the data source is being deleted, the <code>Status</code> field returned by a call to the <code>DescribeDataSource</code> API is set to <code>DELETING</code>. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/delete-data-source.html">Deleting Data Sources</a>.
		 * Post #X-Amz-Target=AWSKendraFrontendService.DeleteDataSource
		 * @return {void} Success
		 */
		DeleteDataSource(requestBody: DeleteDataSourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DeleteDataSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
		 * Post #X-Amz-Target=AWSKendraFrontendService.DeleteExperience
		 * @return {DeleteExperienceResponse} Success
		 */
		DeleteExperience(requestBody: DeleteExperienceRequest): Observable<DeleteExperienceResponse> {
			return this.http.post<DeleteExperienceResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DeleteExperience', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes an FAQ from an index.
		 * Post #X-Amz-Target=AWSKendraFrontendService.DeleteFaq
		 * @return {void} Success
		 */
		DeleteFaq(requestBody: DeleteFaqRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DeleteFaq', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an existing Amazon Kendra index. An exception is not thrown if the index is already being deleted. While the index is being deleted, the <code>Status</code> field returned by a call to the <code>DescribeIndex</code> API is set to <code>DELETING</code>.
		 * Post #X-Amz-Target=AWSKendraFrontendService.DeleteIndex
		 * @return {void} Success
		 */
		DeleteIndex(requestBody: DeleteIndexRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DeleteIndex', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a group so that all users and sub groups that belong to the group can no longer access documents only available to that group.</p> <p>For example, after deleting the group "Summer Interns", all interns who belonged to that group no longer see intern-only documents in their search results.</p> <p>If you want to delete or replace users or sub groups of a group, you need to use the <code>PutPrincipalMapping</code> operation. For example, if a user in the group "Engineering" leaves the engineering team and another user takes their place, you provide an updated list of users or sub groups that belong to the "Engineering" group when calling <code>PutPrincipalMapping</code>. You can update your internal list of users or sub groups and input this list when calling <code>PutPrincipalMapping</code>.</p> <p> <code>DeletePrincipalMapping</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.DeletePrincipalMapping
		 * @return {void} Success
		 */
		DeletePrincipalMapping(requestBody: DeletePrincipalMappingRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DeletePrincipalMapping', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a block list used for query suggestions for an index.</p> <p>A deleted block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to add back the queries that were previously blocked.</p> <p> <code>DeleteQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.DeleteQuerySuggestionsBlockList
		 * @return {void} Success
		 */
		DeleteQuerySuggestionsBlockList(requestBody: DeleteQuerySuggestionsBlockListRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DeleteQuerySuggestionsBlockList', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an existing Amazon Kendra thesaurus.
		 * Post #X-Amz-Target=AWSKendraFrontendService.DeleteThesaurus
		 * @return {void} Success
		 */
		DeleteThesaurus(requestBody: DeleteThesaurusRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DeleteThesaurus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.
		 * Post #X-Amz-Target=AWSKendraFrontendService.DescribeAccessControlConfiguration
		 * @return {DescribeAccessControlConfigurationResponse} Success
		 */
		DescribeAccessControlConfiguration(requestBody: DescribeAccessControlConfigurationRequest): Observable<DescribeAccessControlConfigurationResponse> {
			return this.http.post<DescribeAccessControlConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DescribeAccessControlConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about an Amazon Kendra data source connector.
		 * Post #X-Amz-Target=AWSKendraFrontendService.DescribeDataSource
		 * @return {DescribeDataSourceResponse} Success
		 */
		DescribeDataSource(requestBody: DescribeDataSourceRequest): Observable<DescribeDataSourceResponse> {
			return this.http.post<DescribeDataSourceResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DescribeDataSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
		 * Post #X-Amz-Target=AWSKendraFrontendService.DescribeExperience
		 * @return {DescribeExperienceResponse} Success
		 */
		DescribeExperience(requestBody: DescribeExperienceRequest): Observable<DescribeExperienceResponse> {
			return this.http.post<DescribeExperienceResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DescribeExperience', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about an FAQ list.
		 * Post #X-Amz-Target=AWSKendraFrontendService.DescribeFaq
		 * @return {DescribeFaqResponse} Success
		 */
		DescribeFaq(requestBody: DescribeFaqRequest): Observable<DescribeFaqResponse> {
			return this.http.post<DescribeFaqResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DescribeFaq', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a set of featured results. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.
		 * Post #X-Amz-Target=AWSKendraFrontendService.DescribeFeaturedResultsSet
		 * @return {DescribeFeaturedResultsSetResponse} Success
		 */
		DescribeFeaturedResultsSet(requestBody: DescribeFeaturedResultsSetRequest): Observable<DescribeFeaturedResultsSetResponse> {
			return this.http.post<DescribeFeaturedResultsSetResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DescribeFeaturedResultsSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about an existing Amazon Kendra index.
		 * Post #X-Amz-Target=AWSKendraFrontendService.DescribeIndex
		 * @return {DescribeIndexResponse} Success
		 */
		DescribeIndex(requestBody: DescribeIndexRequest): Observable<DescribeIndexResponse> {
			return this.http.post<DescribeIndexResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DescribeIndex', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the processing of <code>PUT</code> and <code>DELETE</code> actions for mapping users to their groups. This includes information on the status of actions currently processing or yet to be processed, when actions were last updated, when actions were received by Amazon Kendra, the latest action that should process and apply after other actions, and useful error messages if an action could not be processed.</p> <p> <code>DescribePrincipalMapping</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.DescribePrincipalMapping
		 * @return {DescribePrincipalMappingResponse} Success
		 */
		DescribePrincipalMapping(requestBody: DescribePrincipalMappingRequest): Observable<DescribePrincipalMappingResponse> {
			return this.http.post<DescribePrincipalMappingResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DescribePrincipalMapping', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets information about a block list used for query suggestions for an index.</p> <p>This is used to check the current settings that are applied to a block list.</p> <p> <code>DescribeQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsBlockList
		 * @return {DescribeQuerySuggestionsBlockListResponse} Success
		 */
		DescribeQuerySuggestionsBlockList(requestBody: DescribeQuerySuggestionsBlockListRequest): Observable<DescribeQuerySuggestionsBlockListResponse> {
			return this.http.post<DescribeQuerySuggestionsBlockListResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsBlockList', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets information on the settings of query suggestions for an index.</p> <p>This is used to check the current settings applied to query suggestions.</p> <p> <code>DescribeQuerySuggestionsConfig</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsConfig
		 * @return {DescribeQuerySuggestionsConfigResponse} Success
		 */
		DescribeQuerySuggestionsConfig(requestBody: DescribeQuerySuggestionsConfigRequest): Observable<DescribeQuerySuggestionsConfigResponse> {
			return this.http.post<DescribeQuerySuggestionsConfigResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about an existing Amazon Kendra thesaurus.
		 * Post #X-Amz-Target=AWSKendraFrontendService.DescribeThesaurus
		 * @return {DescribeThesaurusResponse} Success
		 */
		DescribeThesaurus(requestBody: DescribeThesaurusRequest): Observable<DescribeThesaurusResponse> {
			return this.http.post<DescribeThesaurusResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DescribeThesaurus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Prevents users or groups in your IAM Identity Center identity source from accessing your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
		 * Post #X-Amz-Target=AWSKendraFrontendService.DisassociateEntitiesFromExperience
		 * @return {DisassociateEntitiesFromExperienceResponse} Success
		 */
		DisassociateEntitiesFromExperience(requestBody: DisassociateEntitiesFromExperienceRequest): Observable<DisassociateEntitiesFromExperienceResponse> {
			return this.http.post<DisassociateEntitiesFromExperienceResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DisassociateEntitiesFromExperience', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
		 * Post #X-Amz-Target=AWSKendraFrontendService.DisassociatePersonasFromEntities
		 * @return {DisassociatePersonasFromEntitiesResponse} Success
		 */
		DisassociatePersonasFromEntities(requestBody: DisassociatePersonasFromEntitiesRequest): Observable<DisassociatePersonasFromEntitiesResponse> {
			return this.http.post<DisassociatePersonasFromEntitiesResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DisassociatePersonasFromEntities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Fetches the queries that are suggested to your users.</p> <p> <code>GetQuerySuggestions</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.GetQuerySuggestions
		 * @return {GetQuerySuggestionsResponse} Success
		 */
		GetQuerySuggestions(requestBody: GetQuerySuggestionsRequest): Observable<GetQuerySuggestionsResponse> {
			return this.http.post<GetQuerySuggestionsResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.GetQuerySuggestions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves search metrics data. The data provides a snapshot of how your users interact with your search application and how effective the application is.
		 * Post #X-Amz-Target=AWSKendraFrontendService.GetSnapshots
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetSnapshotsResponse} Success
		 */
		GetSnapshots(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetSnapshotsRequest): Observable<GetSnapshotsResponse> {
			return this.http.post<GetSnapshotsResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.GetSnapshots?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists one or more access control configurations for an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.
		 * Post #X-Amz-Target=AWSKendraFrontendService.ListAccessControlConfigurations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAccessControlConfigurationsResponse} Success
		 */
		ListAccessControlConfigurations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAccessControlConfigurationsRequest): Observable<ListAccessControlConfigurationsResponse> {
			return this.http.post<ListAccessControlConfigurationsResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.ListAccessControlConfigurations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets statistics about synchronizing a data source connector.
		 * Post #X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDataSourceSyncJobsResponse} Success
		 */
		ListDataSourceSyncJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDataSourceSyncJobsRequest): Observable<ListDataSourceSyncJobsResponse> {
			return this.http.post<ListDataSourceSyncJobsResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the data source connectors that you have created.
		 * Post #X-Amz-Target=AWSKendraFrontendService.ListDataSources
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDataSourcesResponse} Success
		 */
		ListDataSources(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDataSourcesRequest): Observable<ListDataSourcesResponse> {
			return this.http.post<ListDataSourcesResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.ListDataSources?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists specific permissions of users and groups with access to your Amazon Kendra experience.
		 * Post #X-Amz-Target=AWSKendraFrontendService.ListEntityPersonas
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEntityPersonasResponse} Success
		 */
		ListEntityPersonas(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListEntityPersonasRequest): Observable<ListEntityPersonasResponse> {
			return this.http.post<ListEntityPersonasResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.ListEntityPersonas?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists users or groups in your IAM Identity Center identity source that are granted access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
		 * Post #X-Amz-Target=AWSKendraFrontendService.ListExperienceEntities
		 * @param {string} NextToken Pagination token
		 * @return {ListExperienceEntitiesResponse} Success
		 */
		ListExperienceEntities(NextToken: string | null | undefined, requestBody: ListExperienceEntitiesRequest): Observable<ListExperienceEntitiesResponse> {
			return this.http.post<ListExperienceEntitiesResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.ListExperienceEntities?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists one or more Amazon Kendra experiences. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
		 * Post #X-Amz-Target=AWSKendraFrontendService.ListExperiences
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListExperiencesResponse} Success
		 */
		ListExperiences(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListExperiencesRequest): Observable<ListExperiencesResponse> {
			return this.http.post<ListExperiencesResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.ListExperiences?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of FAQ lists associated with an index.
		 * Post #X-Amz-Target=AWSKendraFrontendService.ListFaqs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFaqsResponse} Success
		 */
		ListFaqs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFaqsRequest): Observable<ListFaqsResponse> {
			return this.http.post<ListFaqsResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.ListFaqs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all your sets of featured results for a given index. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.
		 * Post #X-Amz-Target=AWSKendraFrontendService.ListFeaturedResultsSets
		 * @return {ListFeaturedResultsSetsResponse} Success
		 */
		ListFeaturedResultsSets(requestBody: ListFeaturedResultsSetsRequest): Observable<ListFeaturedResultsSetsResponse> {
			return this.http.post<ListFeaturedResultsSetsResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.ListFeaturedResultsSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides a list of groups that are mapped to users before a given ordering or timestamp identifier.</p> <p> <code>ListGroupsOlderThanOrderingId</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.ListGroupsOlderThanOrderingId
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGroupsOlderThanOrderingIdResponse} Success
		 */
		ListGroupsOlderThanOrderingId(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListGroupsOlderThanOrderingIdRequest): Observable<ListGroupsOlderThanOrderingIdResponse> {
			return this.http.post<ListGroupsOlderThanOrderingIdResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.ListGroupsOlderThanOrderingId?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Amazon Kendra indexes that you created.
		 * Post #X-Amz-Target=AWSKendraFrontendService.ListIndices
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListIndicesResponse} Success
		 */
		ListIndices(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListIndicesRequest): Observable<ListIndicesResponse> {
			return this.http.post<ListIndicesResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.ListIndices?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the block lists used for query suggestions for an index.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p> <p> <code>ListQuerySuggestionsBlockLists</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.ListQuerySuggestionsBlockLists
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListQuerySuggestionsBlockListsResponse} Success
		 */
		ListQuerySuggestionsBlockLists(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListQuerySuggestionsBlockListsRequest): Observable<ListQuerySuggestionsBlockListsResponse> {
			return this.http.post<ListQuerySuggestionsBlockListsResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.ListQuerySuggestionsBlockLists?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of tags associated with a specified resource. Indexes, FAQs, and data sources can have tags associated with them.
		 * Post #X-Amz-Target=AWSKendraFrontendService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the thesauri for an index.
		 * Post #X-Amz-Target=AWSKendraFrontendService.ListThesauri
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListThesauriResponse} Success
		 */
		ListThesauri(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListThesauriRequest): Observable<ListThesauriResponse> {
			return this.http.post<ListThesauriResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.ListThesauri?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Maps users to their groups so that you only need to provide the user ID when you issue the query.</p> <p>You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their search results.</p> <p>This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html">Filtering on user context</a>.</p> <p>If more than five <code>PUT</code> actions for a group are currently processing, a validation exception is thrown.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.PutPrincipalMapping
		 * @return {void} Success
		 */
		PutPrincipalMapping(requestBody: PutPrincipalMappingRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.PutPrincipalMapping', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Searches an index given an input query.</p> <p>You can configure boosting or relevance tuning at the query level to override boosting at the index level, filter based on document fields/attributes and faceted search, and filter based on the user or their group access to documents. You can also include certain fields in the response that might provide useful additional information.</p> <p>A query response contains three types of results.</p> <ul> <li> <p>Relevant suggested answers. The answers can be either a text excerpt or table excerpt. The answer can be highlighted in the excerpt.</p> </li> <li> <p>Matching FAQs or questions-answer from your FAQ file.</p> </li> <li> <p>Relevant documents. This result type includes an excerpt of the document with the document title. The searched terms can be highlighted in the excerpt.</p> </li> </ul> <p>You can specify that the query return only one type of result using the <code>QueryResultTypeFilter</code> parameter. Each query returns the 100 most relevant results. If you filter result type to only question-answers, a maximum of four results are returned. If you filter result type to only answers, a maximum of three results are returned.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.Query
		 * @return {QueryResult} Success
		 */
		Query(requestBody: QueryRequest): Observable<QueryResult> {
			return this.http.post<QueryResult>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.Query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves relevant passages or text excerpts given an input query.</p> <p>This API is similar to the <a href="https://docs.aws.amazon.com/kendra/latest/APIReference/API_Query.html">Query</a> API. However, by default, the <code>Query</code> API only returns excerpt passages of up to 100 token words. With the <code>Retrieve</code> API, you can retrieve longer passages of up to 200 token words and up to 100 semantically relevant passages. This doesn't include question-answer or FAQ type responses from your index. The passages are text excerpts that can be semantically extracted from multiple documents and multiple parts of the same document. If in extreme cases your documents produce no relevant passages using the <code>Retrieve</code> API, you can alternatively use the <code>Query</code> API.</p> <p>You can also do the following:</p> <ul> <li> <p>Override boosting at the index level</p> </li> <li> <p>Filter based on document fields or attributes</p> </li> <li> <p>Filter based on the user or their group access to documents</p> </li> </ul> <p>You can also include certain fields in the response that might provide useful additional information.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.Retrieve
		 * @return {RetrieveResult} Success
		 */
		Retrieve(requestBody: RetrieveRequest): Observable<RetrieveResult> {
			return this.http.post<RetrieveResult>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.Retrieve', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a synchronization job for a data source connector. If a synchronization job is already in progress, Amazon Kendra returns a <code>ResourceInUseException</code> exception.
		 * Post #X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob
		 * @return {StartDataSourceSyncJobResponse} Success
		 */
		StartDataSourceSyncJob(requestBody: StartDataSourceSyncJobRequest): Observable<StartDataSourceSyncJobResponse> {
			return this.http.post<StartDataSourceSyncJobResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a synchronization job that is currently running. You can't stop a scheduled synchronization job.
		 * Post #X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob
		 * @return {void} Success
		 */
		StopDataSourceSyncJob(requestBody: StopDataSourceSyncJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Enables you to provide feedback to Amazon Kendra to improve the performance of your index.</p> <p> <code>SubmitFeedback</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.SubmitFeedback
		 * @return {void} Success
		 */
		SubmitFeedback(requestBody: SubmitFeedbackRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.SubmitFeedback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds the specified tag to the specified index, FAQ, or data source resource. If the tag already exists, the existing value is replaced with the new value.
		 * Post #X-Amz-Target=AWSKendraFrontendService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a tag from an index, FAQ, or a data source.
		 * Post #X-Amz-Target=AWSKendraFrontendService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates an access control configuration for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.</p> <p>You can update an access control configuration you created without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. You created an 'allow' access control configuration for one user who recently joined the 'top-secret' team, switching from a team with 'deny' access to top-secret documents. However, the user suddenly returns to their previous team and should no longer have access to top secret documents. You can update the access control configuration to re-configure access control for your documents as circumstances change.</p> <p>You call the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a> API to apply the updated access control configuration, with the <code>AccessControlConfigurationId</code> included in the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Document.html">Document</a> object. If you use an S3 bucket as a data source, you synchronize your data source to apply the <code>AccessControlConfigurationId</code> in the <code>.metadata.json</code> file. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the <code>BatchPutDocument</code> API.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.UpdateAccessControlConfiguration
		 * @return {UpdateAccessControlConfigurationResponse} Success
		 */
		UpdateAccessControlConfiguration(requestBody: UpdateAccessControlConfigurationRequest): Observable<UpdateAccessControlConfigurationResponse> {
			return this.http.post<UpdateAccessControlConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.UpdateAccessControlConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing Amazon Kendra data source connector.
		 * Post #X-Amz-Target=AWSKendraFrontendService.UpdateDataSource
		 * @return {void} Success
		 */
		UpdateDataSource(requestBody: UpdateDataSourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.UpdateDataSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.
		 * Post #X-Amz-Target=AWSKendraFrontendService.UpdateExperience
		 * @return {void} Success
		 */
		UpdateExperience(requestBody: UpdateExperienceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.UpdateExperience', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a set of featured results. Features results are placed above all other results for certain queries. You map specific queries to specific documents for featuring in the results. If a query contains an exact match of a query, then one or more specific documents are featured in the search results.
		 * Post #X-Amz-Target=AWSKendraFrontendService.UpdateFeaturedResultsSet
		 * @return {UpdateFeaturedResultsSetResponse} Success
		 */
		UpdateFeaturedResultsSet(requestBody: UpdateFeaturedResultsSetRequest): Observable<UpdateFeaturedResultsSetResponse> {
			return this.http.post<UpdateFeaturedResultsSetResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.UpdateFeaturedResultsSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing Amazon Kendra index.
		 * Post #X-Amz-Target=AWSKendraFrontendService.UpdateIndex
		 * @return {void} Success
		 */
		UpdateIndex(requestBody: UpdateIndexRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.UpdateIndex', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates a block list used for query suggestions for an index.</p> <p>Updates to a block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to apply any updates to the block list. Other changes not related to the block list apply immediately.</p> <p>If a block list is updating, then you need to wait for the first update to finish before submitting another update.</p> <p>Amazon Kendra supports partial updates, so you only need to provide the fields you want to update.</p> <p> <code>UpdateQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsBlockList
		 * @return {void} Success
		 */
		UpdateQuerySuggestionsBlockList(requestBody: UpdateQuerySuggestionsBlockListRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsBlockList', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the settings of query suggestions for an index.</p> <p>Amazon Kendra supports partial updates, so you only need to provide the fields you want to update.</p> <p>If an update is currently processing, you need to wait for the update to finish before making another update.</p> <p>Updates to query suggestions settings might not take effect right away. The time for your updated settings to take effect depends on the updates made and the number of search queries in your index.</p> <p>You can still enable/disable query suggestions at any time.</p> <p> <code>UpdateQuerySuggestionsConfig</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsConfig
		 * @return {void} Success
		 */
		UpdateQuerySuggestionsConfig(requestBody: UpdateQuerySuggestionsConfigRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a thesaurus for an index.
		 * Post #X-Amz-Target=AWSKendraFrontendService.UpdateThesaurus
		 * @return {void} Success
		 */
		UpdateThesaurus(requestBody: UpdateThesaurusRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.UpdateThesaurus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum AssociateEntitiesToExperienceX_Amz_Target { 'AWSKendraFrontendService.AssociateEntitiesToExperience' = 'AWSKendraFrontendService.AssociateEntitiesToExperience' }

	export enum AssociatePersonasToEntitiesX_Amz_Target { 'AWSKendraFrontendService.AssociatePersonasToEntities' = 'AWSKendraFrontendService.AssociatePersonasToEntities' }

	export enum BatchDeleteDocumentX_Amz_Target { 'AWSKendraFrontendService.BatchDeleteDocument' = 'AWSKendraFrontendService.BatchDeleteDocument' }

	export enum BatchDeleteFeaturedResultsSetX_Amz_Target { 'AWSKendraFrontendService.BatchDeleteFeaturedResultsSet' = 'AWSKendraFrontendService.BatchDeleteFeaturedResultsSet' }

	export enum BatchGetDocumentStatusX_Amz_Target { 'AWSKendraFrontendService.BatchGetDocumentStatus' = 'AWSKendraFrontendService.BatchGetDocumentStatus' }

	export enum BatchPutDocumentX_Amz_Target { 'AWSKendraFrontendService.BatchPutDocument' = 'AWSKendraFrontendService.BatchPutDocument' }

	export enum ClearQuerySuggestionsX_Amz_Target { 'AWSKendraFrontendService.ClearQuerySuggestions' = 'AWSKendraFrontendService.ClearQuerySuggestions' }

	export enum CreateAccessControlConfigurationX_Amz_Target { 'AWSKendraFrontendService.CreateAccessControlConfiguration' = 'AWSKendraFrontendService.CreateAccessControlConfiguration' }

	export enum CreateDataSourceX_Amz_Target { 'AWSKendraFrontendService.CreateDataSource' = 'AWSKendraFrontendService.CreateDataSource' }

	export enum CreateExperienceX_Amz_Target { 'AWSKendraFrontendService.CreateExperience' = 'AWSKendraFrontendService.CreateExperience' }

	export enum CreateFaqX_Amz_Target { 'AWSKendraFrontendService.CreateFaq' = 'AWSKendraFrontendService.CreateFaq' }

	export enum CreateFeaturedResultsSetX_Amz_Target { 'AWSKendraFrontendService.CreateFeaturedResultsSet' = 'AWSKendraFrontendService.CreateFeaturedResultsSet' }

	export enum CreateIndexX_Amz_Target { 'AWSKendraFrontendService.CreateIndex' = 'AWSKendraFrontendService.CreateIndex' }

	export enum CreateQuerySuggestionsBlockListX_Amz_Target { 'AWSKendraFrontendService.CreateQuerySuggestionsBlockList' = 'AWSKendraFrontendService.CreateQuerySuggestionsBlockList' }

	export enum CreateThesaurusX_Amz_Target { 'AWSKendraFrontendService.CreateThesaurus' = 'AWSKendraFrontendService.CreateThesaurus' }

	export enum DeleteAccessControlConfigurationX_Amz_Target { 'AWSKendraFrontendService.DeleteAccessControlConfiguration' = 'AWSKendraFrontendService.DeleteAccessControlConfiguration' }

	export enum DeleteDataSourceX_Amz_Target { 'AWSKendraFrontendService.DeleteDataSource' = 'AWSKendraFrontendService.DeleteDataSource' }

	export enum DeleteExperienceX_Amz_Target { 'AWSKendraFrontendService.DeleteExperience' = 'AWSKendraFrontendService.DeleteExperience' }

	export enum DeleteFaqX_Amz_Target { 'AWSKendraFrontendService.DeleteFaq' = 'AWSKendraFrontendService.DeleteFaq' }

	export enum DeleteIndexX_Amz_Target { 'AWSKendraFrontendService.DeleteIndex' = 'AWSKendraFrontendService.DeleteIndex' }

	export enum DeletePrincipalMappingX_Amz_Target { 'AWSKendraFrontendService.DeletePrincipalMapping' = 'AWSKendraFrontendService.DeletePrincipalMapping' }

	export enum DeleteQuerySuggestionsBlockListX_Amz_Target { 'AWSKendraFrontendService.DeleteQuerySuggestionsBlockList' = 'AWSKendraFrontendService.DeleteQuerySuggestionsBlockList' }

	export enum DeleteThesaurusX_Amz_Target { 'AWSKendraFrontendService.DeleteThesaurus' = 'AWSKendraFrontendService.DeleteThesaurus' }

	export enum DescribeAccessControlConfigurationX_Amz_Target { 'AWSKendraFrontendService.DescribeAccessControlConfiguration' = 'AWSKendraFrontendService.DescribeAccessControlConfiguration' }

	export enum DescribeDataSourceX_Amz_Target { 'AWSKendraFrontendService.DescribeDataSource' = 'AWSKendraFrontendService.DescribeDataSource' }

	export enum DescribeExperienceX_Amz_Target { 'AWSKendraFrontendService.DescribeExperience' = 'AWSKendraFrontendService.DescribeExperience' }

	export enum DescribeFaqX_Amz_Target { 'AWSKendraFrontendService.DescribeFaq' = 'AWSKendraFrontendService.DescribeFaq' }

	export enum DescribeFeaturedResultsSetX_Amz_Target { 'AWSKendraFrontendService.DescribeFeaturedResultsSet' = 'AWSKendraFrontendService.DescribeFeaturedResultsSet' }

	export enum DescribeIndexX_Amz_Target { 'AWSKendraFrontendService.DescribeIndex' = 'AWSKendraFrontendService.DescribeIndex' }

	export enum DescribePrincipalMappingX_Amz_Target { 'AWSKendraFrontendService.DescribePrincipalMapping' = 'AWSKendraFrontendService.DescribePrincipalMapping' }

	export enum DescribeQuerySuggestionsBlockListX_Amz_Target { 'AWSKendraFrontendService.DescribeQuerySuggestionsBlockList' = 'AWSKendraFrontendService.DescribeQuerySuggestionsBlockList' }

	export enum DescribeQuerySuggestionsConfigX_Amz_Target { 'AWSKendraFrontendService.DescribeQuerySuggestionsConfig' = 'AWSKendraFrontendService.DescribeQuerySuggestionsConfig' }

	export enum DescribeThesaurusX_Amz_Target { 'AWSKendraFrontendService.DescribeThesaurus' = 'AWSKendraFrontendService.DescribeThesaurus' }

	export enum DisassociateEntitiesFromExperienceX_Amz_Target { 'AWSKendraFrontendService.DisassociateEntitiesFromExperience' = 'AWSKendraFrontendService.DisassociateEntitiesFromExperience' }

	export enum DisassociatePersonasFromEntitiesX_Amz_Target { 'AWSKendraFrontendService.DisassociatePersonasFromEntities' = 'AWSKendraFrontendService.DisassociatePersonasFromEntities' }

	export enum GetQuerySuggestionsX_Amz_Target { 'AWSKendraFrontendService.GetQuerySuggestions' = 'AWSKendraFrontendService.GetQuerySuggestions' }

	export enum GetSnapshotsX_Amz_Target { 'AWSKendraFrontendService.GetSnapshots' = 'AWSKendraFrontendService.GetSnapshots' }

	export enum ListAccessControlConfigurationsX_Amz_Target { 'AWSKendraFrontendService.ListAccessControlConfigurations' = 'AWSKendraFrontendService.ListAccessControlConfigurations' }

	export enum ListDataSourceSyncJobsX_Amz_Target { 'AWSKendraFrontendService.ListDataSourceSyncJobs' = 'AWSKendraFrontendService.ListDataSourceSyncJobs' }

	export enum ListDataSourcesX_Amz_Target { 'AWSKendraFrontendService.ListDataSources' = 'AWSKendraFrontendService.ListDataSources' }

	export enum ListEntityPersonasX_Amz_Target { 'AWSKendraFrontendService.ListEntityPersonas' = 'AWSKendraFrontendService.ListEntityPersonas' }

	export enum ListExperienceEntitiesX_Amz_Target { 'AWSKendraFrontendService.ListExperienceEntities' = 'AWSKendraFrontendService.ListExperienceEntities' }

	export enum ListExperiencesX_Amz_Target { 'AWSKendraFrontendService.ListExperiences' = 'AWSKendraFrontendService.ListExperiences' }

	export enum ListFaqsX_Amz_Target { 'AWSKendraFrontendService.ListFaqs' = 'AWSKendraFrontendService.ListFaqs' }

	export enum ListFeaturedResultsSetsX_Amz_Target { 'AWSKendraFrontendService.ListFeaturedResultsSets' = 'AWSKendraFrontendService.ListFeaturedResultsSets' }

	export enum ListGroupsOlderThanOrderingIdX_Amz_Target { 'AWSKendraFrontendService.ListGroupsOlderThanOrderingId' = 'AWSKendraFrontendService.ListGroupsOlderThanOrderingId' }

	export enum ListIndicesX_Amz_Target { 'AWSKendraFrontendService.ListIndices' = 'AWSKendraFrontendService.ListIndices' }

	export enum ListQuerySuggestionsBlockListsX_Amz_Target { 'AWSKendraFrontendService.ListQuerySuggestionsBlockLists' = 'AWSKendraFrontendService.ListQuerySuggestionsBlockLists' }

	export enum ListTagsForResourceX_Amz_Target { 'AWSKendraFrontendService.ListTagsForResource' = 'AWSKendraFrontendService.ListTagsForResource' }

	export enum ListThesauriX_Amz_Target { 'AWSKendraFrontendService.ListThesauri' = 'AWSKendraFrontendService.ListThesauri' }

	export enum PutPrincipalMappingX_Amz_Target { 'AWSKendraFrontendService.PutPrincipalMapping' = 'AWSKendraFrontendService.PutPrincipalMapping' }

	export enum QueryX_Amz_Target { 'AWSKendraFrontendService.Query' = 'AWSKendraFrontendService.Query' }

	export enum RetrieveX_Amz_Target { 'AWSKendraFrontendService.Retrieve' = 'AWSKendraFrontendService.Retrieve' }

	export enum StartDataSourceSyncJobX_Amz_Target { 'AWSKendraFrontendService.StartDataSourceSyncJob' = 'AWSKendraFrontendService.StartDataSourceSyncJob' }

	export enum StopDataSourceSyncJobX_Amz_Target { 'AWSKendraFrontendService.StopDataSourceSyncJob' = 'AWSKendraFrontendService.StopDataSourceSyncJob' }

	export enum SubmitFeedbackX_Amz_Target { 'AWSKendraFrontendService.SubmitFeedback' = 'AWSKendraFrontendService.SubmitFeedback' }

	export enum TagResourceX_Amz_Target { 'AWSKendraFrontendService.TagResource' = 'AWSKendraFrontendService.TagResource' }

	export enum UntagResourceX_Amz_Target { 'AWSKendraFrontendService.UntagResource' = 'AWSKendraFrontendService.UntagResource' }

	export enum UpdateAccessControlConfigurationX_Amz_Target { 'AWSKendraFrontendService.UpdateAccessControlConfiguration' = 'AWSKendraFrontendService.UpdateAccessControlConfiguration' }

	export enum UpdateDataSourceX_Amz_Target { 'AWSKendraFrontendService.UpdateDataSource' = 'AWSKendraFrontendService.UpdateDataSource' }

	export enum UpdateExperienceX_Amz_Target { 'AWSKendraFrontendService.UpdateExperience' = 'AWSKendraFrontendService.UpdateExperience' }

	export enum UpdateFeaturedResultsSetX_Amz_Target { 'AWSKendraFrontendService.UpdateFeaturedResultsSet' = 'AWSKendraFrontendService.UpdateFeaturedResultsSet' }

	export enum UpdateIndexX_Amz_Target { 'AWSKendraFrontendService.UpdateIndex' = 'AWSKendraFrontendService.UpdateIndex' }

	export enum UpdateQuerySuggestionsBlockListX_Amz_Target { 'AWSKendraFrontendService.UpdateQuerySuggestionsBlockList' = 'AWSKendraFrontendService.UpdateQuerySuggestionsBlockList' }

	export enum UpdateQuerySuggestionsConfigX_Amz_Target { 'AWSKendraFrontendService.UpdateQuerySuggestionsConfig' = 'AWSKendraFrontendService.UpdateQuerySuggestionsConfig' }

	export enum UpdateThesaurusX_Amz_Target { 'AWSKendraFrontendService.UpdateThesaurus' = 'AWSKendraFrontendService.UpdateThesaurus' }

}

