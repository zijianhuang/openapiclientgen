import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchDeleteDocumentResponse {
		FailedDocuments?: Array<BatchDeleteDocumentResponseFailedDocument>;
	}
	export interface BatchDeleteDocumentResponseFormProperties {
	}
	export function CreateBatchDeleteDocumentResponseFormGroup() {
		return new FormGroup<BatchDeleteDocumentResponseFormProperties>({
		});

	}


	/** Provides information about documents that could not be removed from an index by the <a>BatchDeleteDocument</a> operation. */
	export interface BatchDeleteDocumentResponseFailedDocument {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Id?: string | null;
		ErrorCode?: BatchDeleteDocumentResponseFailedDocumentErrorCode | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ErrorMessage?: string | null;
	}

	/** Provides information about documents that could not be removed from an index by the <a>BatchDeleteDocument</a> operation. */
	export interface BatchDeleteDocumentResponseFailedDocumentFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
		ErrorCode: FormControl<BatchDeleteDocumentResponseFailedDocumentErrorCode | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteDocumentResponseFailedDocumentFormGroup() {
		return new FormGroup<BatchDeleteDocumentResponseFailedDocumentFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			ErrorCode: new FormControl<BatchDeleteDocumentResponseFailedDocumentErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^\P{C}*$')]),
		});

	}

	export enum BatchDeleteDocumentResponseFailedDocumentErrorCode { InternalError = 0, InvalidRequest = 1 }

	export interface BatchDeleteDocumentRequest {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		DocumentIdList: Array<string>;

		/** Maps a particular data source sync job to a particular data source. */
		DataSourceSyncJobMetricTarget?: DataSourceSyncJobMetricTarget;
	}
	export interface BatchDeleteDocumentRequestFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteDocumentRequestFormGroup() {
		return new FormGroup<BatchDeleteDocumentRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
		});

	}


	/** Maps a particular data source sync job to a particular data source. */
	export interface DataSourceSyncJobMetricTarget {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DataSourceId: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DataSourceSyncJobId: string;
	}

	/** Maps a particular data source sync job to a particular data source. */
	export interface DataSourceSyncJobMetricTargetFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DataSourceId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DataSourceSyncJobId: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceSyncJobMetricTargetFormGroup() {
		return new FormGroup<DataSourceSyncJobMetricTargetFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			DataSourceSyncJobId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
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

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Id?: string | null;
		ErrorCode?: BatchDeleteDocumentResponseFailedDocumentErrorCode | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ErrorMessage?: string | null;
	}

	/** Provides information about a document that could not be indexed. */
	export interface BatchPutDocumentResponseFailedDocumentFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
		ErrorCode: FormControl<BatchDeleteDocumentResponseFailedDocumentErrorCode | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchPutDocumentResponseFailedDocumentFormGroup() {
		return new FormGroup<BatchPutDocumentResponseFailedDocumentFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			ErrorCode: new FormControl<BatchDeleteDocumentResponseFailedDocumentErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^\P{C}*$')]),
		});

	}

	export interface BatchPutDocumentRequest {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: string;

		/**
		 * Max length: 1284
		 * Min length: 1
		 */
		RoleArn?: string | null;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		Documents: Array<Document>;
	}
	export interface BatchPutDocumentRequestFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1284
		 * Min length: 1
		 */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateBatchPutDocumentRequestFormGroup() {
		return new FormGroup<BatchPutDocumentRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1284), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
		});

	}


	/** A document in an index. */
	export interface Document {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Id: string;
		Title?: string | null;
		Blob?: string | null;

		/** Information required to find a specific file in an Amazon S3 bucket. */
		S3Path?: S3Path;
		Attributes?: Array<DocumentAttribute>;
		AccessControlList?: Array<Principal>;
		ContentType?: DocumentContentType | null;
	}

	/** A document in an index. */
	export interface DocumentFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Blob: FormControl<string | null | undefined>,
		ContentType: FormControl<DocumentContentType | null | undefined>,
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			Title: new FormControl<string | null | undefined>(undefined),
			Blob: new FormControl<string | null | undefined>(undefined),
			ContentType: new FormControl<DocumentContentType | null | undefined>(undefined),
		});

	}


	/** Information required to find a specific file in an Amazon S3 bucket. */
	export interface S3Path {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		Bucket: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Key: string;
	}

	/** Information required to find a specific file in an Amazon S3 bucket. */
	export interface S3PathFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		Bucket: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateS3PathFormGroup() {
		return new FormGroup<S3PathFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(63), Validators.pattern('[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]')]),
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** A custom attribute value assigned to a document.  */
	export interface DocumentAttribute {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 1
		 */
		Key: string;

		/**
		 * The value of a custom document attribute. You can only provide one value for a custom attribute.
		 * Required
		 */
		Value: DocumentAttributeValue;
	}

	/** A custom attribute value assigned to a document.  */
	export interface DocumentAttributeFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateDocumentAttributeFormGroup() {
		return new FormGroup<DocumentAttributeFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(200), Validators.pattern('[a-zA-Z0-9_][a-zA-Z0-9_-]*')]),
		});

	}


	/** The value of a custom document attribute. You can only provide one value for a custom attribute. */
	export interface DocumentAttributeValue {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		StringValue?: string | null;
		StringListValue?: Array<string>;
		LongValue?: number | null;
		DateValue?: Date | null;
	}

	/** The value of a custom document attribute. You can only provide one value for a custom attribute. */
	export interface DocumentAttributeValueFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		StringValue: FormControl<string | null | undefined>,
		LongValue: FormControl<number | null | undefined>,
		DateValue: FormControl<Date | null | undefined>,
	}
	export function CreateDocumentAttributeValueFormGroup() {
		return new FormGroup<DocumentAttributeValueFormProperties>({
			StringValue: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			LongValue: new FormControl<number | null | undefined>(undefined),
			DateValue: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Provides user and group information for document access filtering. */
	export interface Principal {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 1
		 */
		Name: string;

		/** Required */
		Type: PrincipalType;

		/** Required */
		Access: PrincipalAccess;
	}

	/** Provides user and group information for document access filtering. */
	export interface PrincipalFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<PrincipalType | null | undefined>,

		/** Required */
		Access: FormControl<PrincipalAccess | null | undefined>,
	}
	export function CreatePrincipalFormGroup() {
		return new FormGroup<PrincipalFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(200), Validators.pattern('^\P{C}*$')]),
			Type: new FormControl<PrincipalType | null | undefined>(undefined, [Validators.required]),
			Access: new FormControl<PrincipalAccess | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PrincipalType { USER = 0, GROUP = 1 }

	export enum PrincipalAccess { ALLOW = 0, DENY = 1 }

	export enum DocumentContentType { PDF = 0, HTML = 1, MS_WORD = 2, PLAIN_TEXT = 3, PPT = 4 }

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface CreateDataSourceResponse {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;
	}
	export interface CreateDataSourceResponseFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSourceResponseFormGroup() {
		return new FormGroup<CreateDataSourceResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
		});

	}

	export interface CreateDataSourceRequest {

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: string;

		/** Required */
		Type: CreateDataSourceRequestType;

		/**
		 * Configuration information for a Amazon Kendra data source.
		 * Required
		 */
		Configuration: DataSourceConfiguration;

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Description?: string | null;
		Schedule?: string | null;

		/**
		 * Required
		 * Max length: 1284
		 * Min length: 1
		 */
		RoleArn: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateDataSourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<CreateDataSourceRequestType | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		Schedule: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1284
		 * Min length: 1
		 */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSourceRequestFormGroup() {
		return new FormGroup<CreateDataSourceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
			Type: new FormControl<CreateDataSourceRequestType | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^\P{C}*$')]),
			Schedule: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1284), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
		});

	}

	export enum CreateDataSourceRequestType { S3 = 0, SHAREPOINT = 1, DATABASE = 2, SALESFORCE = 3, ONEDRIVE = 4, SERVICENOW = 5 }


	/** Configuration information for a Amazon Kendra data source. */
	export interface DataSourceConfiguration {

		/** Provides configuration information for a data source to index documents in an Amazon S3 bucket. */
		S3Configuration?: S3DataSourceConfiguration;

		/** Provides configuration information for connecting to a Microsoft SharePoint data source. */
		SharePointConfiguration?: SharePointConfiguration;

		/** Provides the information necessary to connect a database to an index. */
		DatabaseConfiguration?: DatabaseConfiguration;

		/** Provides configuration information for connecting to a Salesforce data source. */
		SalesforceConfiguration?: SalesforceConfiguration;

		/** Provides configuration information for data sources that connect to OneDrive. */
		OneDriveConfiguration?: OneDriveConfiguration;

		/** Provides configuration information required to connect to a ServiceNow data source. */
		ServiceNowConfiguration?: ServiceNowConfiguration;
	}

	/** Configuration information for a Amazon Kendra data source. */
	export interface DataSourceConfigurationFormProperties {
	}
	export function CreateDataSourceConfigurationFormGroup() {
		return new FormGroup<DataSourceConfigurationFormProperties>({
		});

	}


	/** Provides configuration information for a data source to index documents in an Amazon S3 bucket. */
	export interface S3DataSourceConfiguration {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		BucketName: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		InclusionPrefixes?: Array<string>;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		ExclusionPatterns?: Array<string>;

		/** Document metadata files that contain information such as the document access control information, source URI, document author, and custom attributes. Each metadata file contains metadata about a single document. */
		DocumentsMetadataConfiguration?: DocumentsMetadataConfiguration;

		/** Access Control List files for the documents in a data source. */
		AccessControlListConfiguration?: AccessControlListConfiguration;
	}

	/** Provides configuration information for a data source to index documents in an Amazon S3 bucket. */
	export interface S3DataSourceConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		BucketName: FormControl<string | null | undefined>,
	}
	export function CreateS3DataSourceConfigurationFormGroup() {
		return new FormGroup<S3DataSourceConfigurationFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(63), Validators.pattern('[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]')]),
		});

	}


	/** Document metadata files that contain information such as the document access control information, source URI, document author, and custom attributes. Each metadata file contains metadata about a single document. */
	export interface DocumentsMetadataConfiguration {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		S3Prefix?: string | null;
	}

	/** Document metadata files that contain information such as the document access control information, source URI, document author, and custom attributes. Each metadata file contains metadata about a single document. */
	export interface DocumentsMetadataConfigurationFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		S3Prefix: FormControl<string | null | undefined>,
	}
	export function CreateDocumentsMetadataConfigurationFormGroup() {
		return new FormGroup<DocumentsMetadataConfigurationFormProperties>({
			S3Prefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** Access Control List files for the documents in a data source. */
	export interface AccessControlListConfiguration {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		KeyPath?: string | null;
	}

	/** Access Control List files for the documents in a data source. */
	export interface AccessControlListConfigurationFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		KeyPath: FormControl<string | null | undefined>,
	}
	export function CreateAccessControlListConfigurationFormGroup() {
		return new FormGroup<AccessControlListConfigurationFormProperties>({
			KeyPath: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** Provides configuration information for connecting to a Microsoft SharePoint data source. */
	export interface SharePointConfiguration {

		/** Required */
		SharePointVersion: SharePointConfigurationSharePointVersion;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		Urls: Array<string>;

		/**
		 * Required
		 * Max length: 1284
		 * Min length: 1
		 */
		SecretArn: string;
		CrawlAttachments?: boolean | null;
		UseChangeLog?: boolean | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		InclusionPatterns?: Array<string>;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		ExclusionPatterns?: Array<string>;

		/** Provides information for connecting to an Amazon VPC. */
		VpcConfiguration?: DataSourceVpcConfiguration;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentTitleFieldName?: string | null;
	}

	/** Provides configuration information for connecting to a Microsoft SharePoint data source. */
	export interface SharePointConfigurationFormProperties {

		/** Required */
		SharePointVersion: FormControl<SharePointConfigurationSharePointVersion | null | undefined>,

		/**
		 * Required
		 * Max length: 1284
		 * Min length: 1
		 */
		SecretArn: FormControl<string | null | undefined>,
		CrawlAttachments: FormControl<boolean | null | undefined>,
		UseChangeLog: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentTitleFieldName: FormControl<string | null | undefined>,
	}
	export function CreateSharePointConfigurationFormGroup() {
		return new FormGroup<SharePointConfigurationFormProperties>({
			SharePointVersion: new FormControl<SharePointConfigurationSharePointVersion | null | undefined>(undefined, [Validators.required]),
			SecretArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1284), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			CrawlAttachments: new FormControl<boolean | null | undefined>(undefined),
			UseChangeLog: new FormControl<boolean | null | undefined>(undefined),
			DocumentTitleFieldName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_.]*$')]),
		});

	}

	export enum SharePointConfigurationSharePointVersion { SHAREPOINT_ONLINE = 0 }


	/** Provides information for connecting to an Amazon VPC. */
	export interface DataSourceVpcConfiguration {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 6
		 */
		SubnetIds: Array<string>;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		SecurityGroupIds: Array<string>;
	}

	/** Provides information for connecting to an Amazon VPC. */
	export interface DataSourceVpcConfigurationFormProperties {
	}
	export function CreateDataSourceVpcConfigurationFormGroup() {
		return new FormGroup<DataSourceVpcConfigurationFormProperties>({
		});

	}


	/** Maps a column or attribute in the data source to an index field. You must first create the fields in the index using the <a>UpdateIndex</a> operation. */
	export interface DataSourceToIndexFieldMapping {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DataSourceFieldName: string;

		/**
		 * Max length: 40
		 * Min length: 4
		 */
		DateFieldFormat?: string | null;

		/**
		 * Required
		 * Max length: 30
		 * Min length: 1
		 */
		IndexFieldName: string;
	}

	/** Maps a column or attribute in the data source to an index field. You must first create the fields in the index using the <a>UpdateIndex</a> operation. */
	export interface DataSourceToIndexFieldMappingFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DataSourceFieldName: FormControl<string | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 4
		 */
		DateFieldFormat: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 30
		 * Min length: 1
		 */
		IndexFieldName: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceToIndexFieldMappingFormGroup() {
		return new FormGroup<DataSourceToIndexFieldMappingFormProperties>({
			DataSourceFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_.]*$')]),
			DateFieldFormat: new FormControl<string | null | undefined>(undefined, [Validators.minLength(4), Validators.maxLength(40), Validators.pattern('^(?!\s).*(?<!\s)$')]),
			IndexFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(30), Validators.pattern('^\P{C}*$')]),
		});

	}


	/** Provides the information necessary to connect a database to an index.  */
	export interface DatabaseConfiguration {

		/** Required */
		DatabaseEngineType: DatabaseConfigurationDatabaseEngineType;

		/**
		 * Provides the information necessary to connect to a database.
		 * Required
		 */
		ConnectionConfiguration: ConnectionConfiguration;

		/** Provides information for connecting to an Amazon VPC. */
		VpcConfiguration?: DataSourceVpcConfiguration;

		/**
		 * Provides information about how Amazon Kendra should use the columns of a database in an index.
		 * Required
		 */
		ColumnConfiguration: ColumnConfiguration;

		/** Provides information about the column that should be used for filtering the query response by groups. */
		AclConfiguration?: AclConfiguration;
	}

	/** Provides the information necessary to connect a database to an index.  */
	export interface DatabaseConfigurationFormProperties {

		/** Required */
		DatabaseEngineType: FormControl<DatabaseConfigurationDatabaseEngineType | null | undefined>,
	}
	export function CreateDatabaseConfigurationFormGroup() {
		return new FormGroup<DatabaseConfigurationFormProperties>({
			DatabaseEngineType: new FormControl<DatabaseConfigurationDatabaseEngineType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DatabaseConfigurationDatabaseEngineType { RDS_AURORA_MYSQL = 0, RDS_AURORA_POSTGRESQL = 1, RDS_MYSQL = 2, RDS_POSTGRESQL = 3 }


	/** Provides the information necessary to connect to a database. */
	export interface ConnectionConfiguration {

		/**
		 * Required
		 * Max length: 253
		 * Min length: 1
		 */
		DatabaseHost: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		DatabasePort: number;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		TableName: string;

		/**
		 * Required
		 * Max length: 1284
		 * Min length: 1
		 */
		SecretArn: string;
	}

	/** Provides the information necessary to connect to a database. */
	export interface ConnectionConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 253
		 * Min length: 1
		 */
		DatabaseHost: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		DatabasePort: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1284
		 * Min length: 1
		 */
		SecretArn: FormControl<string | null | undefined>,
	}
	export function CreateConnectionConfigurationFormGroup() {
		return new FormGroup<ConnectionConfigurationFormProperties>({
			DatabaseHost: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(253)]),
			DatabasePort: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(65535)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*$')]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*$')]),
			SecretArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1284), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
		});

	}


	/** Provides information about how Amazon Kendra should use the columns of a database in an index. */
	export interface ColumnConfiguration {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentIdColumnName: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentDataColumnName: string;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentTitleColumnName?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		ChangeDetectingColumns: Array<string>;
	}

	/** Provides information about how Amazon Kendra should use the columns of a database in an index. */
	export interface ColumnConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentIdColumnName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentDataColumnName: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentTitleColumnName: FormControl<string | null | undefined>,
	}
	export function CreateColumnConfigurationFormGroup() {
		return new FormGroup<ColumnConfigurationFormProperties>({
			DocumentIdColumnName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*$')]),
			DocumentDataColumnName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*$')]),
			DocumentTitleColumnName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*$')]),
		});

	}


	/** Provides information about the column that should be used for filtering the query response by groups. */
	export interface AclConfiguration {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		AllowedGroupsColumnName: string;
	}

	/** Provides information about the column that should be used for filtering the query response by groups. */
	export interface AclConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		AllowedGroupsColumnName: FormControl<string | null | undefined>,
	}
	export function CreateAclConfigurationFormGroup() {
		return new FormGroup<AclConfigurationFormProperties>({
			AllowedGroupsColumnName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*$')]),
		});

	}


	/** Provides configuration information for connecting to a Salesforce data source. */
	export interface SalesforceConfiguration {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ServerUrl: string;

		/**
		 * Required
		 * Max length: 1284
		 * Min length: 1
		 */
		SecretArn: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 17
		 */
		StandardObjectConfigurations?: Array<SalesforceStandardObjectConfiguration>;

		/** Specifies configuration information for the knowlege article types that Amazon Kendra indexes. Amazon Kendra indexes standard knowledge articles and the standard fields of knowledge articles, or the custom fields of custom knowledge articles, but not both */
		KnowledgeArticleConfiguration?: SalesforceKnowledgeArticleConfiguration;

		/** Defines configuration for syncing a Salesforce chatter feed. The contents of the object comes from the Salesforce FeedItem table. */
		ChatterFeedConfiguration?: SalesforceChatterFeedConfiguration;
		CrawlAttachments?: boolean | null;

		/** Provides configuration information for processing attachments to Salesforce standard objects. */
		StandardObjectAttachmentConfiguration?: SalesforceStandardObjectAttachmentConfiguration;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		IncludeAttachmentFilePatterns?: Array<string>;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		ExcludeAttachmentFilePatterns?: Array<string>;
	}

	/** Provides configuration information for connecting to a Salesforce data source. */
	export interface SalesforceConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ServerUrl: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1284
		 * Min length: 1
		 */
		SecretArn: FormControl<string | null | undefined>,
		CrawlAttachments: FormControl<boolean | null | undefined>,
	}
	export function CreateSalesforceConfigurationFormGroup() {
		return new FormGroup<SalesforceConfigurationFormProperties>({
			ServerUrl: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^(https?|ftp|file):\/\/([^\s]*)')]),
			SecretArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1284), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			CrawlAttachments: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies confguration information for indexing a single standard object. */
	export interface SalesforceStandardObjectConfiguration {

		/** Required */
		Name: SalesforceStandardObjectConfigurationName;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentDataFieldName: string;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentTitleFieldName?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
	}

	/** Specifies confguration information for indexing a single standard object. */
	export interface SalesforceStandardObjectConfigurationFormProperties {

		/** Required */
		Name: FormControl<SalesforceStandardObjectConfigurationName | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentDataFieldName: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentTitleFieldName: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceStandardObjectConfigurationFormGroup() {
		return new FormGroup<SalesforceStandardObjectConfigurationFormProperties>({
			Name: new FormControl<SalesforceStandardObjectConfigurationName | null | undefined>(undefined, [Validators.required]),
			DocumentDataFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_.]*$')]),
			DocumentTitleFieldName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_.]*$')]),
		});

	}

	export enum SalesforceStandardObjectConfigurationName { ACCOUNT = 0, CAMPAIGN = 1, CASE = 2, CONTACT = 3, CONTRACT = 4, DOCUMENT = 5, GROUP = 6, IDEA = 7, LEAD = 8, OPPORTUNITY = 9, PARTNER = 10, PRICEBOOK = 11, PRODUCT = 12, PROFILE = 13, SOLUTION = 14, TASK = 15, USER = 16 }


	/** Specifies configuration information for the knowlege article types that Amazon Kendra indexes. Amazon Kendra indexes standard knowledge articles and the standard fields of knowledge articles, or the custom fields of custom knowledge articles, but not both  */
	export interface SalesforceKnowledgeArticleConfiguration {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 3
		 */
		IncludedStates: Array<SalesforceKnowledgeArticleState>;

		/** Provides configuration information for standard Salesforce knowledge articles. */
		StandardKnowledgeArticleTypeConfiguration?: SalesforceStandardKnowledgeArticleTypeConfiguration;

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		CustomKnowledgeArticleTypeConfigurations?: Array<SalesforceCustomKnowledgeArticleTypeConfiguration>;
	}

	/** Specifies configuration information for the knowlege article types that Amazon Kendra indexes. Amazon Kendra indexes standard knowledge articles and the standard fields of knowledge articles, or the custom fields of custom knowledge articles, but not both  */
	export interface SalesforceKnowledgeArticleConfigurationFormProperties {
	}
	export function CreateSalesforceKnowledgeArticleConfigurationFormGroup() {
		return new FormGroup<SalesforceKnowledgeArticleConfigurationFormProperties>({
		});

	}

	export enum SalesforceKnowledgeArticleState { DRAFT = 0, PUBLISHED = 1, ARCHIVED = 2 }


	/** Provides configuration information for standard Salesforce knowledge articles. */
	export interface SalesforceStandardKnowledgeArticleTypeConfiguration {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentDataFieldName: string;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentTitleFieldName?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
	}

	/** Provides configuration information for standard Salesforce knowledge articles. */
	export interface SalesforceStandardKnowledgeArticleTypeConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentDataFieldName: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentTitleFieldName: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceStandardKnowledgeArticleTypeConfigurationFormGroup() {
		return new FormGroup<SalesforceStandardKnowledgeArticleTypeConfigurationFormProperties>({
			DocumentDataFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_.]*$')]),
			DocumentTitleFieldName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_.]*$')]),
		});

	}


	/** Provides configuration information for indexing Salesforce custom articles. */
	export interface SalesforceCustomKnowledgeArticleTypeConfiguration {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentDataFieldName: string;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentTitleFieldName?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
	}

	/** Provides configuration information for indexing Salesforce custom articles. */
	export interface SalesforceCustomKnowledgeArticleTypeConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentDataFieldName: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentTitleFieldName: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceCustomKnowledgeArticleTypeConfigurationFormGroup() {
		return new FormGroup<SalesforceCustomKnowledgeArticleTypeConfigurationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*$')]),
			DocumentDataFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_.]*$')]),
			DocumentTitleFieldName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_.]*$')]),
		});

	}


	/** Defines configuration for syncing a Salesforce chatter feed. The contents of the object comes from the Salesforce FeedItem table. */
	export interface SalesforceChatterFeedConfiguration {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentDataFieldName: string;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentTitleFieldName?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;

		/**
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		IncludeFilterTypes?: Array<SalesforceChatterFeedIncludeFilterType>;
	}

	/** Defines configuration for syncing a Salesforce chatter feed. The contents of the object comes from the Salesforce FeedItem table. */
	export interface SalesforceChatterFeedConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentDataFieldName: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentTitleFieldName: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceChatterFeedConfigurationFormGroup() {
		return new FormGroup<SalesforceChatterFeedConfigurationFormProperties>({
			DocumentDataFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_.]*$')]),
			DocumentTitleFieldName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_.]*$')]),
		});

	}

	export enum SalesforceChatterFeedIncludeFilterType { ACTIVE_USER = 0, STANDARD_USER = 1 }


	/** Provides configuration information for processing attachments to Salesforce standard objects.  */
	export interface SalesforceStandardObjectAttachmentConfiguration {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentTitleFieldName?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
	}

	/** Provides configuration information for processing attachments to Salesforce standard objects.  */
	export interface SalesforceStandardObjectAttachmentConfigurationFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentTitleFieldName: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceStandardObjectAttachmentConfigurationFormGroup() {
		return new FormGroup<SalesforceStandardObjectAttachmentConfigurationFormProperties>({
			DocumentTitleFieldName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_.]*$')]),
		});

	}


	/** Provides configuration information for data sources that connect to OneDrive. */
	export interface OneDriveConfiguration {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		TenantDomain: string;

		/**
		 * Required
		 * Max length: 1284
		 * Min length: 1
		 */
		SecretArn: string;

		/**
		 * User accounts whose documents should be indexed.
		 * Required
		 */
		OneDriveUsers: OneDriveUsers;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		InclusionPatterns?: Array<string>;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		ExclusionPatterns?: Array<string>;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
	}

	/** Provides configuration information for data sources that connect to OneDrive. */
	export interface OneDriveConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		TenantDomain: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1284
		 * Min length: 1
		 */
		SecretArn: FormControl<string | null | undefined>,
	}
	export function CreateOneDriveConfigurationFormGroup() {
		return new FormGroup<OneDriveConfigurationFormProperties>({
			TenantDomain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-z]{2,}$')]),
			SecretArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1284), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
		});

	}


	/** User accounts whose documents should be indexed. */
	export interface OneDriveUsers {

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		OneDriveUserList?: Array<string>;

		/** Information required to find a specific file in an Amazon S3 bucket. */
		OneDriveUserS3Path?: S3Path;
	}

	/** User accounts whose documents should be indexed. */
	export interface OneDriveUsersFormProperties {
	}
	export function CreateOneDriveUsersFormGroup() {
		return new FormGroup<OneDriveUsersFormProperties>({
		});

	}


	/** Provides configuration information required to connect to a ServiceNow data source. */
	export interface ServiceNowConfiguration {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		HostUrl: string;

		/**
		 * Required
		 * Max length: 1284
		 * Min length: 1
		 */
		SecretArn: string;

		/** Required */
		ServiceNowBuildVersion: ServiceNowConfigurationServiceNowBuildVersion;

		/** Provides configuration information for crawling knowledge articles in the ServiceNow site. */
		KnowledgeArticleConfiguration?: ServiceNowKnowledgeArticleConfiguration;

		/** Provides configuration information for crawling service catalog items in the ServiceNow site */
		ServiceCatalogConfiguration?: ServiceNowServiceCatalogConfiguration;
	}

	/** Provides configuration information required to connect to a ServiceNow data source. */
	export interface ServiceNowConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		HostUrl: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1284
		 * Min length: 1
		 */
		SecretArn: FormControl<string | null | undefined>,

		/** Required */
		ServiceNowBuildVersion: FormControl<ServiceNowConfigurationServiceNowBuildVersion | null | undefined>,
	}
	export function CreateServiceNowConfigurationFormGroup() {
		return new FormGroup<ServiceNowConfigurationFormProperties>({
			HostUrl: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^(?!(^(https?|ftp|file):\/\/))[a-z0-9-]+(\.service-now\.com)$')]),
			SecretArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1284), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			ServiceNowBuildVersion: new FormControl<ServiceNowConfigurationServiceNowBuildVersion | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ServiceNowConfigurationServiceNowBuildVersion { LONDON = 0, OTHERS = 1 }


	/** Provides configuration information for crawling knowledge articles in the ServiceNow site. */
	export interface ServiceNowKnowledgeArticleConfiguration {
		CrawlAttachments?: boolean | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		IncludeAttachmentFilePatterns?: Array<string>;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		ExcludeAttachmentFilePatterns?: Array<string>;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentDataFieldName: string;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentTitleFieldName?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
	}

	/** Provides configuration information for crawling knowledge articles in the ServiceNow site. */
	export interface ServiceNowKnowledgeArticleConfigurationFormProperties {
		CrawlAttachments: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentDataFieldName: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentTitleFieldName: FormControl<string | null | undefined>,
	}
	export function CreateServiceNowKnowledgeArticleConfigurationFormGroup() {
		return new FormGroup<ServiceNowKnowledgeArticleConfigurationFormProperties>({
			CrawlAttachments: new FormControl<boolean | null | undefined>(undefined),
			DocumentDataFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_.]*$')]),
			DocumentTitleFieldName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_.]*$')]),
		});

	}


	/** Provides configuration information for crawling service catalog items in the ServiceNow site */
	export interface ServiceNowServiceCatalogConfiguration {
		CrawlAttachments?: boolean | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		IncludeAttachmentFilePatterns?: Array<string>;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		ExcludeAttachmentFilePatterns?: Array<string>;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentDataFieldName: string;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentTitleFieldName?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		FieldMappings?: Array<DataSourceToIndexFieldMapping>;
	}

	/** Provides configuration information for crawling service catalog items in the ServiceNow site */
	export interface ServiceNowServiceCatalogConfigurationFormProperties {
		CrawlAttachments: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentDataFieldName: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		DocumentTitleFieldName: FormControl<string | null | undefined>,
	}
	export function CreateServiceNowServiceCatalogConfigurationFormGroup() {
		return new FormGroup<ServiceNowServiceCatalogConfigurationFormProperties>({
			CrawlAttachments: new FormControl<boolean | null | undefined>(undefined),
			DocumentDataFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_.]*$')]),
			DocumentTitleFieldName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_.]*$')]),
		});

	}


	/** A list of key/value pairs that identify an index, FAQ, or data source. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @. */
	export interface Tag {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Value: string;
	}

	/** A list of key/value pairs that identify an index, FAQ, or data source. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @. */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
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

	export interface CreateFaqResponse {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id?: string | null;
	}
	export interface CreateFaqResponseFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreateFaqResponseFormGroup() {
		return new FormGroup<CreateFaqResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
		});

	}

	export interface CreateFaqRequest {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * Information required to find a specific file in an Amazon S3 bucket.
		 * Required
		 */
		S3Path: S3Path;

		/**
		 * Required
		 * Max length: 1284
		 * Min length: 1
		 */
		RoleArn: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateFaqRequestFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1284
		 * Min length: 1
		 */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateFaqRequestFormGroup() {
		return new FormGroup<CreateFaqRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^\P{C}*$')]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1284), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
		});

	}

	export interface CreateIndexResponse {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		Id?: string | null;
	}
	export interface CreateIndexResponseFormProperties {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreateIndexResponseFormGroup() {
		return new FormGroup<CreateIndexResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
		});

	}

	export interface CreateIndexRequest {

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		Name: string;
		Edition?: CreateIndexRequestEdition | null;

		/**
		 * Required
		 * Max length: 1284
		 * Min length: 1
		 */
		RoleArn: string;

		/** Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs. */
		ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ClientToken?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateIndexRequestFormProperties {

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Edition: FormControl<CreateIndexRequestEdition | null | undefined>,

		/**
		 * Required
		 * Max length: 1284
		 * Min length: 1
		 */
		RoleArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateIndexRequestFormGroup() {
		return new FormGroup<CreateIndexRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			Edition: new FormControl<CreateIndexRequestEdition | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1284), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^\P{C}*$')]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
		});

	}

	export enum CreateIndexRequestEdition { DEVELOPER_EDITION = 0, ENTERPRISE_EDITION = 1 }


	/** Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs. */
	export interface ServerSideEncryptionConfiguration {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyId?: string | null;
	}

	/** Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs. */
	export interface ServerSideEncryptionConfigurationFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateServerSideEncryptionConfigurationFormGroup() {
		return new FormGroup<ServerSideEncryptionConfigurationFormProperties>({
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface DeleteDataSourceRequest {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: string;
	}
	export interface DeleteDataSourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDataSourceRequestFormGroup() {
		return new FormGroup<DeleteDataSourceRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
		});

	}

	export interface DeleteFaqRequest {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: string;
	}
	export interface DeleteFaqRequestFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFaqRequestFormGroup() {
		return new FormGroup<DeleteFaqRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
		});

	}

	export interface DeleteIndexRequest {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		Id: string;
	}
	export interface DeleteIndexRequestFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIndexRequestFormGroup() {
		return new FormGroup<DeleteIndexRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
		});

	}

	export interface DescribeDataSourceResponse {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId?: string | null;

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Name?: string | null;
		Type?: CreateDataSourceRequestType | null;

		/** Configuration information for a Amazon Kendra data source. */
		Configuration?: DataSourceConfiguration;
		CreatedAt?: Date | null;
		UpdatedAt?: Date | null;

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Description?: string | null;
		Status?: DescribeDataSourceResponseStatus | null;
		Schedule?: string | null;

		/**
		 * Max length: 1284
		 * Min length: 1
		 */
		RoleArn?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ErrorMessage?: string | null;
	}
	export interface DescribeDataSourceResponseFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Type: FormControl<CreateDataSourceRequestType | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		Status: FormControl<DescribeDataSourceResponseStatus | null | undefined>,
		Schedule: FormControl<string | null | undefined>,

		/**
		 * Max length: 1284
		 * Min length: 1
		 */
		RoleArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDataSourceResponseFormGroup() {
		return new FormGroup<DescribeDataSourceResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			Type: new FormControl<CreateDataSourceRequestType | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^\P{C}*$')]),
			Status: new FormControl<DescribeDataSourceResponseStatus | null | undefined>(undefined),
			Schedule: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1284), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			ErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^\P{C}*$')]),
		});

	}

	export enum DescribeDataSourceResponseStatus { CREATING = 0, DELETING = 1, FAILED = 2, UPDATING = 3, ACTIVE = 4 }

	export interface DescribeDataSourceRequest {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: string;
	}
	export interface DescribeDataSourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDataSourceRequestFormGroup() {
		return new FormGroup<DescribeDataSourceRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
		});

	}

	export interface DescribeFaqResponse {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Description?: string | null;
		CreatedAt?: Date | null;
		UpdatedAt?: Date | null;

		/** Information required to find a specific file in an Amazon S3 bucket. */
		S3Path?: S3Path;
		Status?: DescribeFaqResponseStatus | null;

		/**
		 * Max length: 1284
		 * Min length: 1
		 */
		RoleArn?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ErrorMessage?: string | null;
	}
	export interface DescribeFaqResponseFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		Status: FormControl<DescribeFaqResponseStatus | null | undefined>,

		/**
		 * Max length: 1284
		 * Min length: 1
		 */
		RoleArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFaqResponseFormGroup() {
		return new FormGroup<DescribeFaqResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^\P{C}*$')]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<DescribeFaqResponseStatus | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1284), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			ErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^\P{C}*$')]),
		});

	}

	export enum DescribeFaqResponseStatus { CREATING = 0, UPDATING = 1, ACTIVE = 2, DELETING = 3, FAILED = 4 }

	export interface DescribeFaqRequest {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: string;
	}
	export interface DescribeFaqRequestFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFaqRequestFormGroup() {
		return new FormGroup<DescribeFaqRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
		});

	}

	export interface DescribeIndexResponse {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		Id?: string | null;
		Edition?: CreateIndexRequestEdition | null;

		/**
		 * Max length: 1284
		 * Min length: 1
		 */
		RoleArn?: string | null;

		/** Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs. */
		ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
		Status?: DescribeIndexResponseStatus | null;

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Description?: string | null;
		CreatedAt?: Date | null;
		UpdatedAt?: Date | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 500
		 */
		DocumentMetadataConfigurations?: Array<DocumentMetadataConfiguration>;

		/** Provides information about the number of documents and the number of questions and answers in an index. */
		IndexStatistics?: IndexStatistics;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ErrorMessage?: string | null;

		/** Specifies capacity units configured for your index. You can add and remove capacity units to tune an index to your requirements. */
		CapacityUnits?: CapacityUnitsConfiguration;
	}
	export interface DescribeIndexResponseFormProperties {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		Id: FormControl<string | null | undefined>,
		Edition: FormControl<CreateIndexRequestEdition | null | undefined>,

		/**
		 * Max length: 1284
		 * Min length: 1
		 */
		RoleArn: FormControl<string | null | undefined>,
		Status: FormControl<DescribeIndexResponseStatus | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateDescribeIndexResponseFormGroup() {
		return new FormGroup<DescribeIndexResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
			Edition: new FormControl<CreateIndexRequestEdition | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1284), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			Status: new FormControl<DescribeIndexResponseStatus | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^\P{C}*$')]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^\P{C}*$')]),
		});

	}

	export enum DescribeIndexResponseStatus { CREATING = 0, ACTIVE = 1, DELETING = 2, FAILED = 3, UPDATING = 4, SYSTEM_UPDATING = 5 }


	/** Specifies the properties of a custom index field. */
	export interface DocumentMetadataConfiguration {

		/**
		 * Required
		 * Max length: 30
		 * Min length: 1
		 */
		Name: string;

		/** Required */
		Type: DocumentMetadataConfigurationType;

		/** Provides information for manually tuning the relevance of a field in a search. When a query includes terms that match the field, the results are given a boost in the response based on these tuning parameters. */
		Relevance?: Relevance;

		/** Provides information about how a custom index field is used during a search. */
		Search?: Search;
	}

	/** Specifies the properties of a custom index field. */
	export interface DocumentMetadataConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 30
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<DocumentMetadataConfigurationType | null | undefined>,
	}
	export function CreateDocumentMetadataConfigurationFormGroup() {
		return new FormGroup<DocumentMetadataConfigurationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(30)]),
			Type: new FormControl<DocumentMetadataConfigurationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DocumentMetadataConfigurationType { STRING_VALUE = 0, STRING_LIST_VALUE = 1, LONG_VALUE = 2, DATE_VALUE = 3 }


	/** Provides information for manually tuning the relevance of a field in a search. When a query includes terms that match the field, the results are given a boost in the response based on these tuning parameters. */
	export interface Relevance {
		Freshness?: boolean | null;

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		Importance?: number | null;

		/**
		 * Max length: 10
		 * Min length: 1
		 */
		Duration?: string | null;
		RankOrder?: RelevanceRankOrder | null;
		ValueImportanceMap?: ValueImportanceMap;
	}

	/** Provides information for manually tuning the relevance of a field in a search. When a query includes terms that match the field, the results are given a boost in the response based on these tuning parameters. */
	export interface RelevanceFormProperties {
		Freshness: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		Importance: FormControl<number | null | undefined>,

		/**
		 * Max length: 10
		 * Min length: 1
		 */
		Duration: FormControl<string | null | undefined>,
		RankOrder: FormControl<RelevanceRankOrder | null | undefined>,
	}
	export function CreateRelevanceFormGroup() {
		return new FormGroup<RelevanceFormProperties>({
			Freshness: new FormControl<boolean | null | undefined>(undefined),
			Importance: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
			Duration: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(10), Validators.pattern('[0-9]+[s]')]),
			RankOrder: new FormControl<RelevanceRankOrder | null | undefined>(undefined),
		});

	}

	export enum RelevanceRankOrder { ASCENDING = 0, DESCENDING = 1 }

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
	}

	/** Provides information about how a custom index field is used during a search. */
	export interface SearchFormProperties {
		Facetable: FormControl<boolean | null | undefined>,
		Searchable: FormControl<boolean | null | undefined>,
		Displayable: FormControl<boolean | null | undefined>,
	}
	export function CreateSearchFormGroup() {
		return new FormGroup<SearchFormProperties>({
			Facetable: new FormControl<boolean | null | undefined>(undefined),
			Searchable: new FormControl<boolean | null | undefined>(undefined),
			Displayable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides information about the number of documents and the number of questions and answers in an index. */
	export interface IndexStatistics {

		/**
		 * Provides statistical information about the FAQ questions and answers contained in an index.
		 * Required
		 */
		FaqStatistics: FaqStatistics;

		/**
		 * Provides information about text documents indexed in an index.
		 * Required
		 */
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

		/**
		 * Required
		 * Minimum: 0
		 */
		IndexedQuestionAnswersCount: number;
	}

	/** Provides statistical information about the FAQ questions and answers contained in an index. */
	export interface FaqStatisticsFormProperties {

		/**
		 * Required
		 * Minimum: 0
		 */
		IndexedQuestionAnswersCount: FormControl<number | null | undefined>,
	}
	export function CreateFaqStatisticsFormGroup() {
		return new FormGroup<FaqStatisticsFormProperties>({
			IndexedQuestionAnswersCount: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}


	/** Provides information about text documents indexed in an index. */
	export interface TextDocumentStatistics {

		/**
		 * Required
		 * Minimum: 0
		 */
		IndexedTextDocumentsCount: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		IndexedTextBytes: number;
	}

	/** Provides information about text documents indexed in an index. */
	export interface TextDocumentStatisticsFormProperties {

		/**
		 * Required
		 * Minimum: 0
		 */
		IndexedTextDocumentsCount: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		IndexedTextBytes: FormControl<number | null | undefined>,
	}
	export function CreateTextDocumentStatisticsFormGroup() {
		return new FormGroup<TextDocumentStatisticsFormProperties>({
			IndexedTextDocumentsCount: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			IndexedTextBytes: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}


	/** Specifies capacity units configured for your index. You can add and remove capacity units to tune an index to your requirements. */
	export interface CapacityUnitsConfiguration {

		/**
		 * Required
		 * Minimum: 0
		 */
		StorageCapacityUnits: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		QueryCapacityUnits: number;
	}

	/** Specifies capacity units configured for your index. You can add and remove capacity units to tune an index to your requirements. */
	export interface CapacityUnitsConfigurationFormProperties {

		/**
		 * Required
		 * Minimum: 0
		 */
		StorageCapacityUnits: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		QueryCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateCapacityUnitsConfigurationFormGroup() {
		return new FormGroup<CapacityUnitsConfigurationFormProperties>({
			StorageCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			QueryCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface DescribeIndexRequest {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		Id: string;
	}
	export interface DescribeIndexRequestFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDescribeIndexRequestFormGroup() {
		return new FormGroup<DescribeIndexRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
		});

	}

	export interface ListDataSourceSyncJobsResponse {
		History?: Array<DataSourceSyncJob>;

		/**
		 * Max length: 800
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListDataSourceSyncJobsResponseFormProperties {

		/**
		 * Max length: 800
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataSourceSyncJobsResponseFormGroup() {
		return new FormGroup<ListDataSourceSyncJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(800)]),
		});

	}


	/** Provides information about a synchronization job. */
	export interface DataSourceSyncJob {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ExecutionId?: string | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
		Status?: DataSourceSyncJobStatus | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ErrorMessage?: string | null;
		ErrorCode?: BatchDeleteDocumentResponseFailedDocumentErrorCode | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		DataSourceErrorCode?: string | null;

		/** Maps a batch delete document request to a specific data source sync job. This is optional and should only be supplied when documents are deleted by a connector. */
		Metrics?: DataSourceSyncJobMetrics;
	}

	/** Provides information about a synchronization job. */
	export interface DataSourceSyncJobFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ExecutionId: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		Status: FormControl<DataSourceSyncJobStatus | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ErrorMessage: FormControl<string | null | undefined>,
		ErrorCode: FormControl<BatchDeleteDocumentResponseFailedDocumentErrorCode | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		DataSourceErrorCode: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceSyncJobFormGroup() {
		return new FormGroup<DataSourceSyncJobFormProperties>({
			ExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<DataSourceSyncJobStatus | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^\P{C}*$')]),
			ErrorCode: new FormControl<BatchDeleteDocumentResponseFailedDocumentErrorCode | null | undefined>(undefined),
			DataSourceErrorCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export enum DataSourceSyncJobStatus { FAILED = 0, SUCCEEDED = 1, SYNCING = 2, INCOMPLETE = 3, STOPPING = 4, ABORTED = 5, SYNCING_INDEXING = 6 }


	/** Maps a batch delete document request to a specific data source sync job. This is optional and should only be supplied when documents are deleted by a connector. */
	export interface DataSourceSyncJobMetrics {
		DocumentsAdded?: string | null;
		DocumentsModified?: string | null;
		DocumentsDeleted?: string | null;
		DocumentsFailed?: string | null;
		DocumentsScanned?: string | null;
	}

	/** Maps a batch delete document request to a specific data source sync job. This is optional and should only be supplied when documents are deleted by a connector. */
	export interface DataSourceSyncJobMetricsFormProperties {
		DocumentsAdded: FormControl<string | null | undefined>,
		DocumentsModified: FormControl<string | null | undefined>,
		DocumentsDeleted: FormControl<string | null | undefined>,
		DocumentsFailed: FormControl<string | null | undefined>,
		DocumentsScanned: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceSyncJobMetricsFormGroup() {
		return new FormGroup<DataSourceSyncJobMetricsFormProperties>({
			DocumentsAdded: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(([1-9][0-9]*)|0)')]),
			DocumentsModified: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(([1-9][0-9]*)|0)')]),
			DocumentsDeleted: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(([1-9][0-9]*)|0)')]),
			DocumentsFailed: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(([1-9][0-9]*)|0)')]),
			DocumentsScanned: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(([1-9][0-9]*)|0)')]),
		});

	}

	export interface ListDataSourceSyncJobsRequest {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: string;

		/**
		 * Max length: 800
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		MaxResults?: number | null;

		/** Provides a range of time. */
		StartTimeFilter?: TimeRange;
		StatusFilter?: DataSourceSyncJobStatus | null;
	}
	export interface ListDataSourceSyncJobsRequestFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: FormControl<string | null | undefined>,

		/**
		 * Max length: 800
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		MaxResults: FormControl<number | null | undefined>,
		StatusFilter: FormControl<DataSourceSyncJobStatus | null | undefined>,
	}
	export function CreateListDataSourceSyncJobsRequestFormGroup() {
		return new FormGroup<ListDataSourceSyncJobsRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(800)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
			StatusFilter: new FormControl<DataSourceSyncJobStatus | null | undefined>(undefined),
		});

	}


	/** Provides a range of time. */
	export interface TimeRange {
		StartTime?: Date | null;
		EndTime?: Date | null;
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

	export interface ListDataSourcesResponse {
		SummaryItems?: Array<DataSourceSummary>;

		/**
		 * Max length: 800
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListDataSourcesResponseFormProperties {

		/**
		 * Max length: 800
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataSourcesResponseFormGroup() {
		return new FormGroup<ListDataSourcesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(800)]),
		});

	}


	/** Summary information for a Amazon Kendra data source. Returned in a call to . */
	export interface DataSourceSummary {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id?: string | null;
		Type?: CreateDataSourceRequestType | null;
		CreatedAt?: Date | null;
		UpdatedAt?: Date | null;
		Status?: DescribeDataSourceResponseStatus | null;
	}

	/** Summary information for a Amazon Kendra data source. Returned in a call to . */
	export interface DataSourceSummaryFormProperties {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
		Type: FormControl<CreateDataSourceRequestType | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		Status: FormControl<DescribeDataSourceResponseStatus | null | undefined>,
	}
	export function CreateDataSourceSummaryFormGroup() {
		return new FormGroup<DataSourceSummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			Type: new FormControl<CreateDataSourceRequestType | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<DescribeDataSourceResponseStatus | null | undefined>(undefined),
		});

	}

	export interface ListDataSourcesRequest {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: string;

		/**
		 * Max length: 800
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListDataSourcesRequestFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: FormControl<string | null | undefined>,

		/**
		 * Max length: 800
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDataSourcesRequestFormGroup() {
		return new FormGroup<ListDataSourcesRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(800)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListFaqsResponse {

		/**
		 * Max length: 800
		 * Min length: 1
		 */
		NextToken?: string | null;
		FaqSummaryItems?: Array<FaqSummary>;
	}
	export interface ListFaqsResponseFormProperties {

		/**
		 * Max length: 800
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFaqsResponseFormGroup() {
		return new FormGroup<ListFaqsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(800)]),
		});

	}


	/** Provides information about a frequently asked questions and answer contained in an index. */
	export interface FaqSummary {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Name?: string | null;
		Status?: DescribeFaqResponseStatus | null;
		CreatedAt?: Date | null;
		UpdatedAt?: Date | null;
	}

	/** Provides information about a frequently asked questions and answer contained in an index. */
	export interface FaqSummaryFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Status: FormControl<DescribeFaqResponseStatus | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateFaqSummaryFormGroup() {
		return new FormGroup<FaqSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			Status: new FormControl<DescribeFaqResponseStatus | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListFaqsRequest {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: string;

		/**
		 * Max length: 800
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListFaqsRequestFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: FormControl<string | null | undefined>,

		/**
		 * Max length: 800
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFaqsRequestFormGroup() {
		return new FormGroup<ListFaqsRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(800)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListIndicesResponse {
		IndexConfigurationSummaryItems?: Array<IndexConfigurationSummary>;

		/**
		 * Max length: 800
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListIndicesResponseFormProperties {

		/**
		 * Max length: 800
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIndicesResponseFormGroup() {
		return new FormGroup<ListIndicesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(800)]),
		});

	}


	/** A summary of information about an index. */
	export interface IndexConfigurationSummary {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		Id?: string | null;
		Edition?: CreateIndexRequestEdition | null;

		/** Required */
		CreatedAt: Date;

		/** Required */
		UpdatedAt: Date;

		/** Required */
		Status: DescribeIndexResponseStatus;
	}

	/** A summary of information about an index. */
	export interface IndexConfigurationSummaryFormProperties {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		Id: FormControl<string | null | undefined>,
		Edition: FormControl<CreateIndexRequestEdition | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		UpdatedAt: FormControl<Date | null | undefined>,

		/** Required */
		Status: FormControl<DescribeIndexResponseStatus | null | undefined>,
	}
	export function CreateIndexConfigurationSummaryFormGroup() {
		return new FormGroup<IndexConfigurationSummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
			Edition: new FormControl<CreateIndexRequestEdition | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<DescribeIndexResponseStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListIndicesRequest {

		/**
		 * Max length: 800
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListIndicesRequestFormProperties {

		/**
		 * Max length: 800
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListIndicesRequestFormGroup() {
		return new FormGroup<ListIndicesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(800)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListTagsForResourceResponse {

		/**
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/**
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011)]),
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

	export interface QueryResult {

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		QueryId?: string | null;
		ResultItems?: Array<QueryResultItem>;
		FacetResults?: Array<FacetResult>;
		TotalNumberOfResults?: number | null;
	}
	export interface QueryResultFormProperties {

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		QueryId: FormControl<string | null | undefined>,
		TotalNumberOfResults: FormControl<number | null | undefined>,
	}
	export function CreateQueryResultFormGroup() {
		return new FormGroup<QueryResultFormProperties>({
			QueryId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36)]),
			TotalNumberOfResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>A single query result.</p> <p>A query result contains information about a document returned by the query. This includes the original location of the document, a list of attributes assigned to the document, and relevant text from the document that satisfies the query.</p> */
	export interface QueryResultItem {

		/**
		 * Max length: 73
		 * Min length: 1
		 */
		Id?: string | null;
		Type?: QueryResultItemType | null;
		AdditionalAttributes?: Array<AdditionalResultAttribute>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		DocumentId?: string | null;

		/** Provides text and information about where to highlight the text. */
		DocumentTitle?: TextWithHighlights;

		/** Provides text and information about where to highlight the text. */
		DocumentExcerpt?: TextWithHighlights;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		DocumentURI?: string | null;
		DocumentAttributes?: Array<DocumentAttribute>;
	}

	/** <p>A single query result.</p> <p>A query result contains information about a document returned by the query. This includes the original location of the document, a list of attributes assigned to the document, and relevant text from the document that satisfies the query.</p> */
	export interface QueryResultItemFormProperties {

		/**
		 * Max length: 73
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
		Type: FormControl<QueryResultItemType | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		DocumentId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		DocumentURI: FormControl<string | null | undefined>,
	}
	export function CreateQueryResultItemFormGroup() {
		return new FormGroup<QueryResultItemFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(73)]),
			Type: new FormControl<QueryResultItemType | null | undefined>(undefined),
			DocumentId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			DocumentURI: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^(https?|ftp|file):\/\/([^\s]*)')]),
		});

	}

	export enum QueryResultItemType { DOCUMENT = 0, QUESTION_ANSWER = 1, ANSWER = 2 }


	/** An attribute returned from an index query. */
	export interface AdditionalResultAttribute {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Key: string;

		/** Required */
		ValueType: AdditionalResultAttributeValueType;

		/**
		 * An attribute returned with a document from a search.
		 * Required
		 */
		Value: AdditionalResultAttributeValue;
	}

	/** An attribute returned from an index query. */
	export interface AdditionalResultAttributeFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/** Required */
		ValueType: FormControl<AdditionalResultAttributeValueType | null | undefined>,
	}
	export function CreateAdditionalResultAttributeFormGroup() {
		return new FormGroup<AdditionalResultAttributeFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			ValueType: new FormControl<AdditionalResultAttributeValueType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AdditionalResultAttributeValueType { TEXT_WITH_HIGHLIGHTS_VALUE = 0 }


	/** An attribute returned with a document from a search. */
	export interface AdditionalResultAttributeValue {

		/** Provides text and information about where to highlight the text. */
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

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Text?: string | null;
		Highlights?: Array<Highlight>;
	}

	/** Provides text and information about where to highlight the text. */
	export interface TextWithHighlightsFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Text: FormControl<string | null | undefined>,
	}
	export function CreateTextWithHighlightsFormGroup() {
		return new FormGroup<TextWithHighlightsFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}


	/** Provides information that you can use to highlight a search result so that your users can quickly identify terms in the response. */
	export interface Highlight {

		/** Required */
		BeginOffset: number;

		/** Required */
		EndOffset: number;
		TopAnswer?: boolean | null;
	}

	/** Provides information that you can use to highlight a search result so that your users can quickly identify terms in the response. */
	export interface HighlightFormProperties {

		/** Required */
		BeginOffset: FormControl<number | null | undefined>,

		/** Required */
		EndOffset: FormControl<number | null | undefined>,
		TopAnswer: FormControl<boolean | null | undefined>,
	}
	export function CreateHighlightFormGroup() {
		return new FormGroup<HighlightFormProperties>({
			BeginOffset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			EndOffset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TopAnswer: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The facet values for the documents in the response. */
	export interface FacetResult {

		/**
		 * Max length: 200
		 * Min length: 1
		 */
		DocumentAttributeKey?: string | null;
		DocumentAttributeValueCountPairs?: Array<DocumentAttributeValueCountPair>;
	}

	/** The facet values for the documents in the response. */
	export interface FacetResultFormProperties {

		/**
		 * Max length: 200
		 * Min length: 1
		 */
		DocumentAttributeKey: FormControl<string | null | undefined>,
	}
	export function CreateFacetResultFormGroup() {
		return new FormGroup<FacetResultFormProperties>({
			DocumentAttributeKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(200), Validators.pattern('[a-zA-Z0-9_][a-zA-Z0-9_-]*')]),
		});

	}


	/** Provides the count of documents that match a particular attribute when doing a faceted search. */
	export interface DocumentAttributeValueCountPair {

		/** The value of a custom document attribute. You can only provide one value for a custom attribute. */
		DocumentAttributeValue?: DocumentAttributeValue;
		Count?: number | null;
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

	export interface QueryRequest {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: string;

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		QueryText: string;

		/** <p>Provides filtering the query results based on document attributes.</p> <p>When you use the <code>AndAllFilters</code> or <code>OrAllFilters</code>, filters you can use 2 layers under the first attribute filter. For example, you can use:</p> <p> <code>&lt;AndAllFilters&gt;</code> </p> <ol> <li> <p> <code> &lt;OrAllFilters&gt;</code> </p> </li> <li> <p> <code> &lt;EqualTo&gt;</code> </p> </li> </ol> <p>If you use more than 2 layers, you receive a <code>ValidationException</code> exception with the message "<code>AttributeFilter</code> cannot have a depth of more than 2."</p> */
		AttributeFilter?: AttributeFilter;
		Facets?: Array<Facet>;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		RequestedDocumentAttributes?: Array<string>;
		QueryResultTypeFilter?: QueryResultItemType | null;
		PageNumber?: number | null;
		PageSize?: number | null;
	}
	export interface QueryRequestFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		QueryText: FormControl<string | null | undefined>,
		QueryResultTypeFilter: FormControl<QueryResultItemType | null | undefined>,
		PageNumber: FormControl<number | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateQueryRequestFormGroup() {
		return new FormGroup<QueryRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
			QueryText: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^\P{C}*$')]),
			QueryResultTypeFilter: new FormControl<QueryResultItemType | null | undefined>(undefined),
			PageNumber: new FormControl<number | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Provides filtering the query results based on document attributes.</p> <p>When you use the <code>AndAllFilters</code> or <code>OrAllFilters</code>, filters you can use 2 layers under the first attribute filter. For example, you can use:</p> <p> <code>&lt;AndAllFilters&gt;</code> </p> <ol> <li> <p> <code> &lt;OrAllFilters&gt;</code> </p> </li> <li> <p> <code> &lt;EqualTo&gt;</code> </p> </li> </ol> <p>If you use more than 2 layers, you receive a <code>ValidationException</code> exception with the message "<code>AttributeFilter</code> cannot have a depth of more than 2."</p> */
	export interface AttributeFilter {
		AndAllFilters?: Array<AttributeFilter>;
		OrAllFilters?: Array<AttributeFilter>;

		/** <p>Provides filtering the query results based on document attributes.</p> <p>When you use the <code>AndAllFilters</code> or <code>OrAllFilters</code>, filters you can use 2 layers under the first attribute filter. For example, you can use:</p> <p> <code>&lt;AndAllFilters&gt;</code> </p> <ol> <li> <p> <code> &lt;OrAllFilters&gt;</code> </p> </li> <li> <p> <code> &lt;EqualTo&gt;</code> </p> </li> </ol> <p>If you use more than 2 layers, you receive a <code>ValidationException</code> exception with the message "<code>AttributeFilter</code> cannot have a depth of more than 2."</p> */
		NotFilter?: AttributeFilter;

		/** A custom attribute value assigned to a document. */
		EqualsTo?: DocumentAttribute;

		/** A custom attribute value assigned to a document. */
		ContainsAll?: DocumentAttribute;

		/** A custom attribute value assigned to a document. */
		ContainsAny?: DocumentAttribute;

		/** A custom attribute value assigned to a document. */
		GreaterThan?: DocumentAttribute;

		/** A custom attribute value assigned to a document. */
		GreaterThanOrEquals?: DocumentAttribute;

		/** A custom attribute value assigned to a document. */
		LessThan?: DocumentAttribute;

		/** A custom attribute value assigned to a document. */
		LessThanOrEquals?: DocumentAttribute;
	}

	/** <p>Provides filtering the query results based on document attributes.</p> <p>When you use the <code>AndAllFilters</code> or <code>OrAllFilters</code>, filters you can use 2 layers under the first attribute filter. For example, you can use:</p> <p> <code>&lt;AndAllFilters&gt;</code> </p> <ol> <li> <p> <code> &lt;OrAllFilters&gt;</code> </p> </li> <li> <p> <code> &lt;EqualTo&gt;</code> </p> </li> </ol> <p>If you use more than 2 layers, you receive a <code>ValidationException</code> exception with the message "<code>AttributeFilter</code> cannot have a depth of more than 2."</p> */
	export interface AttributeFilterFormProperties {
	}
	export function CreateAttributeFilterFormGroup() {
		return new FormGroup<AttributeFilterFormProperties>({
		});

	}


	/** Information about a document attribute */
	export interface Facet {

		/**
		 * Max length: 200
		 * Min length: 1
		 */
		DocumentAttributeKey?: string | null;
	}

	/** Information about a document attribute */
	export interface FacetFormProperties {

		/**
		 * Max length: 200
		 * Min length: 1
		 */
		DocumentAttributeKey: FormControl<string | null | undefined>,
	}
	export function CreateFacetFormGroup() {
		return new FormGroup<FacetFormProperties>({
			DocumentAttributeKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(200), Validators.pattern('[a-zA-Z0-9_][a-zA-Z0-9_-]*')]),
		});

	}

	export interface StartDataSourceSyncJobResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ExecutionId?: string | null;
	}
	export interface StartDataSourceSyncJobResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateStartDataSourceSyncJobResponseFormGroup() {
		return new FormGroup<StartDataSourceSyncJobResponseFormProperties>({
			ExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface StartDataSourceSyncJobRequest {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: string;
	}
	export interface StartDataSourceSyncJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateStartDataSourceSyncJobRequestFormGroup() {
		return new FormGroup<StartDataSourceSyncJobRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
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

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: string;
	}
	export interface StopDataSourceSyncJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: FormControl<string | null | undefined>,
	}
	export function CreateStopDataSourceSyncJobRequestFormGroup() {
		return new FormGroup<StopDataSourceSyncJobRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
		});

	}

	export interface SubmitFeedbackRequest {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: string;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		QueryId: string;
		ClickFeedbackItems?: Array<ClickFeedback>;
		RelevanceFeedbackItems?: Array<RelevanceFeedback>;
	}
	export interface SubmitFeedbackRequestFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		QueryId: FormControl<string | null | undefined>,
	}
	export function CreateSubmitFeedbackRequestFormGroup() {
		return new FormGroup<SubmitFeedbackRequestFormProperties>({
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
			QueryId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}


	/** Gathers information about when a particular result was clicked by a user. Your application uses the <a>SubmitFeedback</a> operation to provide click information. */
	export interface ClickFeedback {

		/**
		 * Required
		 * Max length: 73
		 * Min length: 1
		 */
		ResultId: string;

		/** Required */
		ClickTime: Date;
	}

	/** Gathers information about when a particular result was clicked by a user. Your application uses the <a>SubmitFeedback</a> operation to provide click information. */
	export interface ClickFeedbackFormProperties {

		/**
		 * Required
		 * Max length: 73
		 * Min length: 1
		 */
		ResultId: FormControl<string | null | undefined>,

		/** Required */
		ClickTime: FormControl<Date | null | undefined>,
	}
	export function CreateClickFeedbackFormGroup() {
		return new FormGroup<ClickFeedbackFormProperties>({
			ResultId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(73)]),
			ClickTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides feedback on how relevant a document is to a search. Your application uses the <a>SubmitFeedback</a> operation to provide relevance information. */
	export interface RelevanceFeedback {

		/**
		 * Required
		 * Max length: 73
		 * Min length: 1
		 */
		ResultId: string;

		/** Required */
		RelevanceValue: RelevanceFeedbackRelevanceValue;
	}

	/** Provides feedback on how relevant a document is to a search. Your application uses the <a>SubmitFeedback</a> operation to provide relevance information. */
	export interface RelevanceFeedbackFormProperties {

		/**
		 * Required
		 * Max length: 73
		 * Min length: 1
		 */
		ResultId: FormControl<string | null | undefined>,

		/** Required */
		RelevanceValue: FormControl<RelevanceFeedbackRelevanceValue | null | undefined>,
	}
	export function CreateRelevanceFeedbackFormGroup() {
		return new FormGroup<RelevanceFeedbackFormProperties>({
			ResultId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(73)]),
			RelevanceValue: new FormControl<RelevanceFeedbackRelevanceValue | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RelevanceFeedbackRelevanceValue { RELEVANT = 0, NOT_RELEVANT = 1 }

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/**
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: string;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011)]),
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

		/**
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: string;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011)]),
		});

	}

	export interface UpdateDataSourceRequest {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: string;

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: string;

		/** Configuration information for a Amazon Kendra data source. */
		Configuration?: DataSourceConfiguration;

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Description?: string | null;
		Schedule?: string | null;

		/**
		 * Max length: 1284
		 * Min length: 1
		 */
		RoleArn?: string | null;
	}
	export interface UpdateDataSourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		IndexId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		Schedule: FormControl<string | null | undefined>,

		/**
		 * Max length: 1284
		 * Min length: 1
		 */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataSourceRequestFormGroup() {
		return new FormGroup<UpdateDataSourceRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			IndexId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^\P{C}*$')]),
			Schedule: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1284), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
		});

	}

	export interface UpdateIndexRequest {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		Id: string;

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 1284
		 * Min length: 1
		 */
		RoleArn?: string | null;

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 500
		 */
		DocumentMetadataConfigurationUpdates?: Array<DocumentMetadataConfiguration>;

		/** Specifies capacity units configured for your index. You can add and remove capacity units to tune an index to your requirements. */
		CapacityUnits?: CapacityUnitsConfiguration;
	}
	export interface UpdateIndexRequestFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1284
		 * Min length: 1
		 */
		RoleArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIndexRequestFormGroup() {
		return new FormGroup<UpdateIndexRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9-]*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1284), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^\P{C}*$')]),
		});

	}

	export enum ErrorCode { InternalError = 0, InvalidRequest = 1 }

	export enum ContentType { PDF = 0, HTML = 1, MS_WORD = 2, PLAIN_TEXT = 3, PPT = 4 }

	export enum DataSourceType { S3 = 0, SHAREPOINT = 1, DATABASE = 2, SALESFORCE = 3, ONEDRIVE = 4, SERVICENOW = 5 }

	export enum IndexEdition { DEVELOPER_EDITION = 0, ENTERPRISE_EDITION = 1 }

	export enum DataSourceStatus { CREATING = 0, DELETING = 1, FAILED = 2, UPDATING = 3, ACTIVE = 4 }

	export enum DatabaseEngineType { RDS_AURORA_MYSQL = 0, RDS_AURORA_POSTGRESQL = 1, RDS_MYSQL = 2, RDS_POSTGRESQL = 3 }

	export enum FaqStatus { CREATING = 0, UPDATING = 1, ACTIVE = 2, DELETING = 3, FAILED = 4 }

	export enum IndexStatus { CREATING = 0, ACTIVE = 1, DELETING = 2, FAILED = 3, UPDATING = 4, SYSTEM_UPDATING = 5 }

	export enum DocumentAttributeValueType { STRING_VALUE = 0, STRING_LIST_VALUE = 1, LONG_VALUE = 2, DATE_VALUE = 3 }

	export enum Order { ASCENDING = 0, DESCENDING = 1 }

	export enum ReadAccessType { ALLOW = 0, DENY = 1 }

	export enum QueryResultType { DOCUMENT = 0, QUESTION_ANSWER = 1, ANSWER = 2 }

	export enum RelevanceType { RELEVANT = 0, NOT_RELEVANT = 1 }

	export enum SalesforceStandardObjectName { ACCOUNT = 0, CAMPAIGN = 1, CASE = 2, CONTACT = 3, CONTRACT = 4, DOCUMENT = 5, GROUP = 6, IDEA = 7, LEAD = 8, OPPORTUNITY = 9, PARTNER = 10, PRICEBOOK = 11, PRODUCT = 12, PROFILE = 13, SOLUTION = 14, TASK = 15, USER = 16 }

	export enum ServiceNowBuildVersionType { LONDON = 0, OTHERS = 1 }

	export enum SharePointVersion { SHAREPOINT_ONLINE = 0 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Removes one or more documents from an index. The documents must have been added with the <a>BatchPutDocument</a> operation.</p> <p>The documents are deleted asynchronously. You can see the progress of the deletion by using AWS CloudWatch. Any error messages releated to the processing of the batch are sent to you CloudWatch log.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument
		 * @return {BatchDeleteDocumentResponse} Success
		 */
		BatchDeleteDocument(requestBody: BatchDeleteDocumentRequest): Observable<BatchDeleteDocumentResponse> {
			return this.http.post<BatchDeleteDocumentResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds one or more documents to an index.</p> <p>The <code>BatchPutDocument</code> operation enables you to ingest inline documents or a set of documents stored in an Amazon S3 bucket. Use this operation to ingest your text and unstructured text into an index, add custom attributes to the documents, and to attach an access control list to the documents added to the index.</p> <p>The documents are indexed asynchronously. You can see the progress of the batch using AWS CloudWatch. Any error messages related to processing the batch are sent to your AWS CloudWatch log.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.BatchPutDocument
		 * @return {BatchPutDocumentResponse} Success
		 */
		BatchPutDocument(requestBody: BatchPutDocumentRequest): Observable<BatchPutDocumentResponse> {
			return this.http.post<BatchPutDocumentResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.BatchPutDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a data source that you use to with an Amazon Kendra index. </p> <p>You specify a name, connector type and description for your data source. You can choose between an S3 connector, a SharePoint Online connector, and a database connector.</p> <p>You also specify configuration information such as document metadata (author, source URI, and so on) and user context information.</p> <p> <code>CreateDataSource</code> is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.CreateDataSource
		 * @return {CreateDataSourceResponse} Success
		 */
		CreateDataSource(requestBody: CreateDataSourceRequest): Observable<CreateDataSourceResponse> {
			return this.http.post<CreateDataSourceResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.CreateDataSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an new set of frequently asked question (FAQ) questions and answers.
		 * Post #X-Amz-Target=AWSKendraFrontendService.CreateFaq
		 * @return {CreateFaqResponse} Success
		 */
		CreateFaq(requestBody: CreateFaqRequest): Observable<CreateFaqResponse> {
			return this.http.post<CreateFaqResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.CreateFaq', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new Amazon Kendra index. Index creation is an asynchronous operation. To determine if index creation has completed, check the <code>Status</code> field returned from a call to . The <code>Status</code> field is set to <code>ACTIVE</code> when the index is ready to use.</p> <p>Once the index is active you can index your documents using the operation or using one of the supported data sources. </p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.CreateIndex
		 * @return {CreateIndexResponse} Success
		 */
		CreateIndex(requestBody: CreateIndexRequest): Observable<CreateIndexResponse> {
			return this.http.post<CreateIndexResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.CreateIndex', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Amazon Kendra data source. An exception is not thrown if the data source is already being deleted. While the data source is being deleted, the <code>Status</code> field returned by a call to the operation is set to <code>DELETING</code>. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/delete-data-source.html">Deleting Data Sources</a>.
		 * Post #X-Amz-Target=AWSKendraFrontendService.DeleteDataSource
		 * @return {void} Success
		 */
		DeleteDataSource(requestBody: DeleteDataSourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DeleteDataSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * Deletes an existing Amazon Kendra index. An exception is not thrown if the index is already being deleted. While the index is being deleted, the <code>Status</code> field returned by a call to the <a>DescribeIndex</a> operation is set to <code>DELETING</code>.
		 * Post #X-Amz-Target=AWSKendraFrontendService.DeleteIndex
		 * @return {void} Success
		 */
		DeleteIndex(requestBody: DeleteIndexRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DeleteIndex', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a Amazon Kendra data source.
		 * Post #X-Amz-Target=AWSKendraFrontendService.DescribeDataSource
		 * @return {DescribeDataSourceResponse} Success
		 */
		DescribeDataSource(requestBody: DescribeDataSourceRequest): Observable<DescribeDataSourceResponse> {
			return this.http.post<DescribeDataSourceResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DescribeDataSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Describes an existing Amazon Kendra index
		 * Post #X-Amz-Target=AWSKendraFrontendService.DescribeIndex
		 * @return {DescribeIndexResponse} Success
		 */
		DescribeIndex(requestBody: DescribeIndexRequest): Observable<DescribeIndexResponse> {
			return this.http.post<DescribeIndexResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.DescribeIndex', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets statistics about synchronizing Amazon Kendra with a data source.
		 * Post #X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDataSourceSyncJobsResponse} Success
		 */
		ListDataSourceSyncJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDataSourceSyncJobsRequest): Observable<ListDataSourceSyncJobsResponse> {
			return this.http.post<ListDataSourceSyncJobsResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the data sources that you have created.
		 * Post #X-Amz-Target=AWSKendraFrontendService.ListDataSources
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDataSourcesResponse} Success
		 */
		ListDataSources(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDataSourcesRequest): Observable<ListDataSourcesResponse> {
			return this.http.post<ListDataSourcesResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.ListDataSources?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of FAQ lists associated with an index.
		 * Post #X-Amz-Target=AWSKendraFrontendService.ListFaqs
		 * @return {ListFaqsResponse} Success
		 */
		ListFaqs(requestBody: ListFaqsRequest): Observable<ListFaqsResponse> {
			return this.http.post<ListFaqsResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.ListFaqs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Amazon Kendra indexes that you have created.
		 * Post #X-Amz-Target=AWSKendraFrontendService.ListIndices
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListIndicesResponse} Success
		 */
		ListIndices(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListIndicesRequest): Observable<ListIndicesResponse> {
			return this.http.post<ListIndicesResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.ListIndices?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Searches an active index. Use this API to search your documents using query. The <code>Query</code> operation enables to do faceted search and to filter results based on document attributes.</p> <p>It also enables you to provide user context that Amazon Kendra uses to enforce document access control in the search results. </p> <p>Amazon Kendra searches your index for text content and question and answer (FAQ) content. By default the response contains three types of results.</p> <ul> <li> <p>Relevant passages</p> </li> <li> <p>Matching FAQs</p> </li> <li> <p>Relevant documents</p> </li> </ul> <p>You can specify that the query return only one type of result using the <code>QueryResultTypeConfig</code> parameter.</p>
		 * Post #X-Amz-Target=AWSKendraFrontendService.Query
		 * @return {QueryResult} Success
		 */
		Query(requestBody: QueryRequest): Observable<QueryResult> {
			return this.http.post<QueryResult>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.Query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a synchronization job for a data source. If a synchronization job is already in progress, Amazon Kendra returns a <code>ResourceInUseException</code> exception.
		 * Post #X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob
		 * @return {StartDataSourceSyncJobResponse} Success
		 */
		StartDataSourceSyncJob(requestBody: StartDataSourceSyncJobRequest): Observable<StartDataSourceSyncJobResponse> {
			return this.http.post<StartDataSourceSyncJobResponse>(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a running synchronization job. You can't stop a scheduled synchronization job.
		 * Post #X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob
		 * @return {void} Success
		 */
		StopDataSourceSyncJob(requestBody: StopDataSourceSyncJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables you to provide feedback to Amazon Kendra to improve the performance of the service.
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
		 * Updates an existing Amazon Kendra data source.
		 * Post #X-Amz-Target=AWSKendraFrontendService.UpdateDataSource
		 * @return {void} Success
		 */
		UpdateDataSource(requestBody: UpdateDataSourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.UpdateDataSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing Amazon Kendra index.
		 * Post #X-Amz-Target=AWSKendraFrontendService.UpdateIndex
		 * @return {void} Success
		 */
		UpdateIndex(requestBody: UpdateIndexRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSKendraFrontendService.UpdateIndex', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum BatchDeleteDocumentX_Amz_Target { 'AWSKendraFrontendService.BatchDeleteDocument' = 0 }

	export enum BatchPutDocumentX_Amz_Target { 'AWSKendraFrontendService.BatchPutDocument' = 0 }

	export enum CreateDataSourceX_Amz_Target { 'AWSKendraFrontendService.CreateDataSource' = 0 }

	export enum CreateFaqX_Amz_Target { 'AWSKendraFrontendService.CreateFaq' = 0 }

	export enum CreateIndexX_Amz_Target { 'AWSKendraFrontendService.CreateIndex' = 0 }

	export enum DeleteDataSourceX_Amz_Target { 'AWSKendraFrontendService.DeleteDataSource' = 0 }

	export enum DeleteFaqX_Amz_Target { 'AWSKendraFrontendService.DeleteFaq' = 0 }

	export enum DeleteIndexX_Amz_Target { 'AWSKendraFrontendService.DeleteIndex' = 0 }

	export enum DescribeDataSourceX_Amz_Target { 'AWSKendraFrontendService.DescribeDataSource' = 0 }

	export enum DescribeFaqX_Amz_Target { 'AWSKendraFrontendService.DescribeFaq' = 0 }

	export enum DescribeIndexX_Amz_Target { 'AWSKendraFrontendService.DescribeIndex' = 0 }

	export enum ListDataSourceSyncJobsX_Amz_Target { 'AWSKendraFrontendService.ListDataSourceSyncJobs' = 0 }

	export enum ListDataSourcesX_Amz_Target { 'AWSKendraFrontendService.ListDataSources' = 0 }

	export enum ListFaqsX_Amz_Target { 'AWSKendraFrontendService.ListFaqs' = 0 }

	export enum ListIndicesX_Amz_Target { 'AWSKendraFrontendService.ListIndices' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'AWSKendraFrontendService.ListTagsForResource' = 0 }

	export enum QueryX_Amz_Target { 'AWSKendraFrontendService.Query' = 0 }

	export enum StartDataSourceSyncJobX_Amz_Target { 'AWSKendraFrontendService.StartDataSourceSyncJob' = 0 }

	export enum StopDataSourceSyncJobX_Amz_Target { 'AWSKendraFrontendService.StopDataSourceSyncJob' = 0 }

	export enum SubmitFeedbackX_Amz_Target { 'AWSKendraFrontendService.SubmitFeedback' = 0 }

	export enum TagResourceX_Amz_Target { 'AWSKendraFrontendService.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'AWSKendraFrontendService.UntagResource' = 0 }

	export enum UpdateDataSourceX_Amz_Target { 'AWSKendraFrontendService.UpdateDataSource' = 0 }

	export enum UpdateIndexX_Amz_Target { 'AWSKendraFrontendService.UpdateIndex' = 0 }

}

