import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AbortMultipartReadSetUploadResponse {
	}
	export interface AbortMultipartReadSetUploadResponseFormProperties {
	}
	export function CreateAbortMultipartReadSetUploadResponseFormGroup() {
		return new FormGroup<AbortMultipartReadSetUploadResponseFormProperties>({
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

	export interface NotSupportedOperationException {
	}
	export interface NotSupportedOperationExceptionFormProperties {
	}
	export function CreateNotSupportedOperationExceptionFormGroup() {
		return new FormGroup<NotSupportedOperationExceptionFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface RequestTimeoutException {
	}
	export interface RequestTimeoutExceptionFormProperties {
	}
	export function CreateRequestTimeoutExceptionFormGroup() {
		return new FormGroup<RequestTimeoutExceptionFormProperties>({
		});

	}

	export interface BatchDeleteReadSetResponse {
		errors?: Array<ReadSetBatchError>;
	}
	export interface BatchDeleteReadSetResponseFormProperties {
	}
	export function CreateBatchDeleteReadSetResponseFormGroup() {
		return new FormGroup<BatchDeleteReadSetResponseFormProperties>({
		});

	}


	/** An error from a batch read set operation. */
	export interface ReadSetBatchError {

		/** Required */
		id: string;

		/** Required */
		code: string;

		/** Required */
		message: string;
	}

	/** An error from a batch read set operation. */
	export interface ReadSetBatchErrorFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateReadSetBatchErrorFormGroup() {
		return new FormGroup<ReadSetBatchErrorFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelAnnotationImportResponse {
	}
	export interface CancelAnnotationImportResponseFormProperties {
	}
	export function CreateCancelAnnotationImportResponseFormGroup() {
		return new FormGroup<CancelAnnotationImportResponseFormProperties>({
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

	export interface CancelVariantImportResponse {
	}
	export interface CancelVariantImportResponseFormProperties {
	}
	export function CreateCancelVariantImportResponseFormGroup() {
		return new FormGroup<CancelVariantImportResponseFormProperties>({
		});

	}

	export interface CompleteMultipartReadSetUploadResponse {

		/** Required */
		readSetId: string;
	}
	export interface CompleteMultipartReadSetUploadResponseFormProperties {

		/** Required */
		readSetId: FormControl<string | null | undefined>,
	}
	export function CreateCompleteMultipartReadSetUploadResponseFormGroup() {
		return new FormGroup<CompleteMultipartReadSetUploadResponseFormProperties>({
			readSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Part of the response to the CompleteReadSetUpload API, including metadata.  */
	export interface CompleteReadSetUploadPartListItem {

		/** Required */
		partNumber: number;

		/** Required */
		partSource: ReadSetPartSource;

		/** Required */
		checksum: string;
	}

	/**  Part of the response to the CompleteReadSetUpload API, including metadata.  */
	export interface CompleteReadSetUploadPartListItemFormProperties {

		/** Required */
		partNumber: FormControl<number | null | undefined>,

		/** Required */
		partSource: FormControl<ReadSetPartSource | null | undefined>,

		/** Required */
		checksum: FormControl<string | null | undefined>,
	}
	export function CreateCompleteReadSetUploadPartListItemFormGroup() {
		return new FormGroup<CompleteReadSetUploadPartListItemFormProperties>({
			partNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			partSource: new FormControl<ReadSetPartSource | null | undefined>(undefined, [Validators.required]),
			checksum: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ReadSetPartSource { SOURCE1 = 0, SOURCE2 = 1 }

	export interface CreateAnnotationStoreResponse {

		/** Required */
		id: string;
		reference?: ReferenceItem;
		storeFormat?: StoreFormat;
		storeOptions?: StoreOptions;

		/** Required */
		status: StoreStatus;

		/** Required */
		name: string;

		/** Required */
		creationTime: Date;
	}
	export interface CreateAnnotationStoreResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		storeFormat: FormControl<StoreFormat | null | undefined>,

		/** Required */
		status: FormControl<StoreStatus | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateAnnotationStoreResponseFormGroup() {
		return new FormGroup<CreateAnnotationStoreResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storeFormat: new FormControl<StoreFormat | null | undefined>(undefined),
			status: new FormControl<StoreStatus | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A genome reference. */
	export interface ReferenceItem {
		referenceArn?: string;
	}

	/** A genome reference. */
	export interface ReferenceItemFormProperties {
		referenceArn: FormControl<string | null | undefined>,
	}
	export function CreateReferenceItemFormGroup() {
		return new FormGroup<ReferenceItemFormProperties>({
			referenceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StoreFormat { GFF = 0, TSV = 1, VCF = 2 }


	/** Settings for a store. */
	export interface StoreOptions {
		tsvStoreOptions?: TsvStoreOptions;
	}

	/** Settings for a store. */
	export interface StoreOptionsFormProperties {
	}
	export function CreateStoreOptionsFormGroup() {
		return new FormGroup<StoreOptionsFormProperties>({
		});

	}


	/** File settings for a TSV store. */
	export interface TsvStoreOptions {
		annotationType?: AnnotationType;
		formatToHeader?: FormatToHeader;
		schema?: Array<SchemaItem>;
	}

	/** File settings for a TSV store. */
	export interface TsvStoreOptionsFormProperties {
		annotationType: FormControl<AnnotationType | null | undefined>,
	}
	export function CreateTsvStoreOptionsFormGroup() {
		return new FormGroup<TsvStoreOptionsFormProperties>({
			annotationType: new FormControl<AnnotationType | null | undefined>(undefined),
		});

	}

	export enum AnnotationType { GENERIC = 0, CHR_POS = 1, CHR_POS_REF_ALT = 2, CHR_START_END_ONE_BASE = 3, CHR_START_END_REF_ALT_ONE_BASE = 4, CHR_START_END_ZERO_BASE = 5, CHR_START_END_REF_ALT_ZERO_BASE = 6 }

	export interface FormatToHeader {
	}
	export interface FormatToHeaderFormProperties {
	}
	export function CreateFormatToHeaderFormGroup() {
		return new FormGroup<FormatToHeaderFormProperties>({
		});

	}

	export interface SchemaItem {
	}
	export interface SchemaItemFormProperties {
	}
	export function CreateSchemaItemFormGroup() {
		return new FormGroup<SchemaItemFormProperties>({
		});

	}

	export enum StoreStatus { CREATING = 0, UPDATING = 1, DELETING = 2, ACTIVE = 3, FAILED = 4 }

	export enum EncryptionType { KMS = 0 }

	export interface CreateMultipartReadSetUploadResponse {

		/** Required */
		sequenceStoreId: string;

		/** Required */
		uploadId: string;

		/** Required */
		sourceFileType: FileType;

		/** Required */
		subjectId: string;

		/** Required */
		sampleId: string;
		generatedFrom?: string;

		/** Required */
		referenceArn: string;
		name?: string;
		description?: string;
		tags?: TagMap;

		/** Required */
		creationTime: Date;
	}
	export interface CreateMultipartReadSetUploadResponseFormProperties {

		/** Required */
		sequenceStoreId: FormControl<string | null | undefined>,

		/** Required */
		uploadId: FormControl<string | null | undefined>,

		/** Required */
		sourceFileType: FormControl<FileType | null | undefined>,

		/** Required */
		subjectId: FormControl<string | null | undefined>,

		/** Required */
		sampleId: FormControl<string | null | undefined>,
		generatedFrom: FormControl<string | null | undefined>,

		/** Required */
		referenceArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateMultipartReadSetUploadResponseFormGroup() {
		return new FormGroup<CreateMultipartReadSetUploadResponseFormProperties>({
			sequenceStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uploadId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceFileType: new FormControl<FileType | null | undefined>(undefined, [Validators.required]),
			subjectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sampleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			generatedFrom: new FormControl<string | null | undefined>(undefined),
			referenceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FileType { FASTQ = 0, BAM = 1, CRAM = 2 }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface CreateReferenceStoreResponse {

		/** Required */
		id: string;

		/** Required */
		arn: string;
		name?: string;
		description?: string;
		sseConfig?: SseConfig;

		/** Required */
		creationTime: Date;
	}
	export interface CreateReferenceStoreResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateReferenceStoreResponseFormGroup() {
		return new FormGroup<CreateReferenceStoreResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Server-side encryption (SSE) settings for a store. */
	export interface SseConfig {

		/** Required */
		type: EncryptionType;
		keyArn?: string;
	}

	/** Server-side encryption (SSE) settings for a store. */
	export interface SseConfigFormProperties {

		/** Required */
		type: FormControl<EncryptionType | null | undefined>,
		keyArn: FormControl<string | null | undefined>,
	}
	export function CreateSseConfigFormGroup() {
		return new FormGroup<SseConfigFormProperties>({
			type: new FormControl<EncryptionType | null | undefined>(undefined, [Validators.required]),
			keyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRunGroupResponse {
		arn?: string;
		id?: string;
		tags?: TagMap;
	}
	export interface CreateRunGroupResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateCreateRunGroupResponseFormGroup() {
		return new FormGroup<CreateRunGroupResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSequenceStoreResponse {

		/** Required */
		id: string;

		/** Required */
		arn: string;
		name?: string;
		description?: string;
		sseConfig?: SseConfig;

		/** Required */
		creationTime: Date;
		fallbackLocation?: string;
	}
	export interface CreateSequenceStoreResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
		fallbackLocation: FormControl<string | null | undefined>,
	}
	export function CreateCreateSequenceStoreResponseFormGroup() {
		return new FormGroup<CreateSequenceStoreResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			fallbackLocation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVariantStoreResponse {

		/** Required */
		id: string;
		reference?: ReferenceItem;

		/** Required */
		status: StoreStatus;

		/** Required */
		name: string;

		/** Required */
		creationTime: Date;
	}
	export interface CreateVariantStoreResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<StoreStatus | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateVariantStoreResponseFormGroup() {
		return new FormGroup<CreateVariantStoreResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<StoreStatus | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateWorkflowResponse {
		arn?: string;
		id?: string;
		status?: WorkflowStatus;
		tags?: TagMap;
	}
	export interface CreateWorkflowResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		status: FormControl<WorkflowStatus | null | undefined>,
	}
	export function CreateCreateWorkflowResponseFormGroup() {
		return new FormGroup<CreateWorkflowResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<WorkflowStatus | null | undefined>(undefined),
		});

	}

	export enum WorkflowStatus { CREATING = 0, ACTIVE = 1, UPDATING = 2, DELETED = 3, FAILED = 4, INACTIVE = 5 }


	/** A workflow parameter. */
	export interface WorkflowParameter {
		description?: string;
		optional?: boolean | null;
	}

	/** A workflow parameter. */
	export interface WorkflowParameterFormProperties {
		description: FormControl<string | null | undefined>,
		optional: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkflowParameterFormGroup() {
		return new FormGroup<WorkflowParameterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			optional: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteAnnotationStoreResponse {

		/** Required */
		status: StoreStatus;
	}
	export interface DeleteAnnotationStoreResponseFormProperties {

		/** Required */
		status: FormControl<StoreStatus | null | undefined>,
	}
	export function CreateDeleteAnnotationStoreResponseFormGroup() {
		return new FormGroup<DeleteAnnotationStoreResponseFormProperties>({
			status: new FormControl<StoreStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteReferenceResponse {
	}
	export interface DeleteReferenceResponseFormProperties {
	}
	export function CreateDeleteReferenceResponseFormGroup() {
		return new FormGroup<DeleteReferenceResponseFormProperties>({
		});

	}

	export interface DeleteReferenceStoreResponse {
	}
	export interface DeleteReferenceStoreResponseFormProperties {
	}
	export function CreateDeleteReferenceStoreResponseFormGroup() {
		return new FormGroup<DeleteReferenceStoreResponseFormProperties>({
		});

	}

	export interface DeleteSequenceStoreResponse {
	}
	export interface DeleteSequenceStoreResponseFormProperties {
	}
	export function CreateDeleteSequenceStoreResponseFormGroup() {
		return new FormGroup<DeleteSequenceStoreResponseFormProperties>({
		});

	}

	export interface DeleteVariantStoreResponse {

		/** Required */
		status: StoreStatus;
	}
	export interface DeleteVariantStoreResponseFormProperties {

		/** Required */
		status: FormControl<StoreStatus | null | undefined>,
	}
	export function CreateDeleteVariantStoreResponseFormGroup() {
		return new FormGroup<DeleteVariantStoreResponseFormProperties>({
			status: new FormControl<StoreStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAnnotationImportResponse {

		/** Required */
		id: string;

		/** Required */
		destinationName: string;

		/** Required */
		roleArn: string;

		/** Required */
		status: JobStatus;

		/** Required */
		statusMessage: string;

		/** Required */
		creationTime: Date;

		/** Required */
		updateTime: Date;

		/** Required */
		completionTime: Date;

		/** Required */
		items: Array<AnnotationImportItemDetail>;

		/** Required */
		runLeftNormalization: boolean;

		/**
		 * Formatting options for a file.
		 * Required
		 */
		formatOptions: FormatOptions;
		annotationFields?: AnnotationFieldMap;
	}
	export interface GetAnnotationImportResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		destinationName: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<JobStatus | null | undefined>,

		/** Required */
		statusMessage: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,

		/** Required */
		completionTime: FormControl<Date | null | undefined>,

		/** Required */
		runLeftNormalization: FormControl<boolean | null | undefined>,
	}
	export function CreateGetAnnotationImportResponseFormGroup() {
		return new FormGroup<GetAnnotationImportResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			completionTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			runLeftNormalization: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JobStatus { SUBMITTED = 0, IN_PROGRESS = 1, CANCELLED = 2, COMPLETED = 3, FAILED = 4, COMPLETED_WITH_FAILURES = 5 }


	/** Details about an imported annotation item. */
	export interface AnnotationImportItemDetail {

		/** Required */
		source: string;

		/** Required */
		jobStatus: JobStatus;
	}

	/** Details about an imported annotation item. */
	export interface AnnotationImportItemDetailFormProperties {

		/** Required */
		source: FormControl<string | null | undefined>,

		/** Required */
		jobStatus: FormControl<JobStatus | null | undefined>,
	}
	export function CreateAnnotationImportItemDetailFormGroup() {
		return new FormGroup<AnnotationImportItemDetailFormProperties>({
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobStatus: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Formatting options for a file. */
	export interface FormatOptions {
		tsvOptions?: TsvOptions;
		vcfOptions?: VcfOptions;
	}

	/** Formatting options for a file. */
	export interface FormatOptionsFormProperties {
	}
	export function CreateFormatOptionsFormGroup() {
		return new FormGroup<FormatOptionsFormProperties>({
		});

	}


	/** Formatting options for a TSV file. */
	export interface TsvOptions {
		readOptions?: ReadOptions;
	}

	/** Formatting options for a TSV file. */
	export interface TsvOptionsFormProperties {
	}
	export function CreateTsvOptionsFormGroup() {
		return new FormGroup<TsvOptionsFormProperties>({
		});

	}


	/** Read options for an annotation import job. */
	export interface ReadOptions {
		sep?: string;
		encoding?: string;
		quote?: string;
		quoteAll?: boolean | null;
		escape?: string;
		escapeQuotes?: boolean | null;
		comment?: string;
		header?: boolean | null;
		lineSep?: string;
	}

	/** Read options for an annotation import job. */
	export interface ReadOptionsFormProperties {
		sep: FormControl<string | null | undefined>,
		encoding: FormControl<string | null | undefined>,
		quote: FormControl<string | null | undefined>,
		quoteAll: FormControl<boolean | null | undefined>,
		escape: FormControl<string | null | undefined>,
		escapeQuotes: FormControl<boolean | null | undefined>,
		comment: FormControl<string | null | undefined>,
		header: FormControl<boolean | null | undefined>,
		lineSep: FormControl<string | null | undefined>,
	}
	export function CreateReadOptionsFormGroup() {
		return new FormGroup<ReadOptionsFormProperties>({
			sep: new FormControl<string | null | undefined>(undefined),
			encoding: new FormControl<string | null | undefined>(undefined),
			quote: new FormControl<string | null | undefined>(undefined),
			quoteAll: new FormControl<boolean | null | undefined>(undefined),
			escape: new FormControl<string | null | undefined>(undefined),
			escapeQuotes: new FormControl<boolean | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			header: new FormControl<boolean | null | undefined>(undefined),
			lineSep: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Formatting options for a VCF file. */
	export interface VcfOptions {
		ignoreQualField?: boolean | null;
		ignoreFilterField?: boolean | null;
	}

	/** Formatting options for a VCF file. */
	export interface VcfOptionsFormProperties {
		ignoreQualField: FormControl<boolean | null | undefined>,
		ignoreFilterField: FormControl<boolean | null | undefined>,
	}
	export function CreateVcfOptionsFormGroup() {
		return new FormGroup<VcfOptionsFormProperties>({
			ignoreQualField: new FormControl<boolean | null | undefined>(undefined),
			ignoreFilterField: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AnnotationFieldMap {
	}
	export interface AnnotationFieldMapFormProperties {
	}
	export function CreateAnnotationFieldMapFormGroup() {
		return new FormGroup<AnnotationFieldMapFormProperties>({
		});

	}

	export interface GetAnnotationStoreResponse {

		/** Required */
		id: string;

		/** Required */
		reference: ReferenceItem;

		/** Required */
		status: StoreStatus;

		/** Required */
		storeArn: string;

		/** Required */
		name: string;

		/** Required */
		description: string;

		/** Required */
		sseConfig: SseConfig;

		/** Required */
		creationTime: Date;

		/** Required */
		updateTime: Date;

		/** Required */
		tags: TagMap;
		storeOptions?: StoreOptions;
		storeFormat?: StoreFormat;

		/** Required */
		statusMessage: string;

		/** Required */
		storeSizeBytes: number;
	}
	export interface GetAnnotationStoreResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<StoreStatus | null | undefined>,

		/** Required */
		storeArn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,
		storeFormat: FormControl<StoreFormat | null | undefined>,

		/** Required */
		statusMessage: FormControl<string | null | undefined>,

		/** Required */
		storeSizeBytes: FormControl<number | null | undefined>,
	}
	export function CreateGetAnnotationStoreResponseFormGroup() {
		return new FormGroup<GetAnnotationStoreResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<StoreStatus | null | undefined>(undefined, [Validators.required]),
			storeArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			storeFormat: new FormControl<StoreFormat | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storeSizeBytes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetReadSetResponse {
		payload?: string;
	}
	export interface GetReadSetResponseFormProperties {
		payload: FormControl<string | null | undefined>,
	}
	export function CreateGetReadSetResponseFormGroup() {
		return new FormGroup<GetReadSetResponseFormProperties>({
			payload: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RangeNotSatisfiableException {
	}
	export interface RangeNotSatisfiableExceptionFormProperties {
	}
	export function CreateRangeNotSatisfiableExceptionFormGroup() {
		return new FormGroup<RangeNotSatisfiableExceptionFormProperties>({
		});

	}

	export interface GetReadSetActivationJobResponse {

		/** Required */
		id: string;

		/** Required */
		sequenceStoreId: string;

		/** Required */
		status: ReadSetActivationJobStatus;
		statusMessage?: string;

		/** Required */
		creationTime: Date;
		completionTime?: Date;
		sources?: Array<ActivateReadSetSourceItem>;
	}
	export interface GetReadSetActivationJobResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		sequenceStoreId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ReadSetActivationJobStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
		completionTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetReadSetActivationJobResponseFormGroup() {
		return new FormGroup<GetReadSetActivationJobResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sequenceStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ReadSetActivationJobStatus | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			completionTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ReadSetActivationJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, CANCELLING = 2, CANCELLED = 3, FAILED = 4, COMPLETED = 5, COMPLETED_WITH_FAILURES = 6 }


	/** A source for a read set activation job. */
	export interface ActivateReadSetSourceItem {

		/** Required */
		readSetId: string;

		/** Required */
		status: ReadSetActivationJobItemStatus;
		statusMessage?: string;
	}

	/** A source for a read set activation job. */
	export interface ActivateReadSetSourceItemFormProperties {

		/** Required */
		readSetId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ReadSetActivationJobItemStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
	}
	export function CreateActivateReadSetSourceItemFormGroup() {
		return new FormGroup<ActivateReadSetSourceItemFormProperties>({
			readSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ReadSetActivationJobItemStatus | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReadSetActivationJobItemStatus { NOT_STARTED = 0, IN_PROGRESS = 1, FINISHED = 2, FAILED = 3 }

	export interface GetReadSetExportJobResponse {

		/** Required */
		id: string;

		/** Required */
		sequenceStoreId: string;

		/** Required */
		destination: string;

		/** Required */
		status: ReadSetActivationJobStatus;
		statusMessage?: string;

		/** Required */
		creationTime: Date;
		completionTime?: Date;
		readSets?: Array<ExportReadSetDetail>;
	}
	export interface GetReadSetExportJobResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		sequenceStoreId: FormControl<string | null | undefined>,

		/** Required */
		destination: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ReadSetActivationJobStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
		completionTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetReadSetExportJobResponseFormGroup() {
		return new FormGroup<GetReadSetExportJobResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sequenceStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destination: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ReadSetActivationJobStatus | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			completionTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Details about a read set. */
	export interface ExportReadSetDetail {

		/** Required */
		id: string;

		/** Required */
		status: ReadSetActivationJobItemStatus;
		statusMessage?: string;
	}

	/** Details about a read set. */
	export interface ExportReadSetDetailFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ReadSetActivationJobItemStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
	}
	export function CreateExportReadSetDetailFormGroup() {
		return new FormGroup<ExportReadSetDetailFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ReadSetActivationJobItemStatus | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetReadSetImportJobResponse {

		/** Required */
		id: string;

		/** Required */
		sequenceStoreId: string;

		/** Required */
		roleArn: string;

		/** Required */
		status: ReadSetActivationJobStatus;
		statusMessage?: string;

		/** Required */
		creationTime: Date;
		completionTime?: Date;

		/** Required */
		sources: Array<ImportReadSetSourceItem>;
	}
	export interface GetReadSetImportJobResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		sequenceStoreId: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ReadSetActivationJobStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
		completionTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetReadSetImportJobResponseFormGroup() {
		return new FormGroup<GetReadSetImportJobResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sequenceStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ReadSetActivationJobStatus | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			completionTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A source for an import read set job. */
	export interface ImportReadSetSourceItem {

		/** Required */
		sourceFiles: SourceFiles;

		/** Required */
		sourceFileType: FileType;

		/** Required */
		status: ReadSetActivationJobItemStatus;
		statusMessage?: string;

		/** Required */
		subjectId: string;

		/** Required */
		sampleId: string;
		generatedFrom?: string;
		referenceArn?: string;
		name?: string;
		description?: string;
		tags?: TagMap;
	}

	/** A source for an import read set job. */
	export interface ImportReadSetSourceItemFormProperties {

		/** Required */
		sourceFileType: FormControl<FileType | null | undefined>,

		/** Required */
		status: FormControl<ReadSetActivationJobItemStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,

		/** Required */
		subjectId: FormControl<string | null | undefined>,

		/** Required */
		sampleId: FormControl<string | null | undefined>,
		generatedFrom: FormControl<string | null | undefined>,
		referenceArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateImportReadSetSourceItemFormGroup() {
		return new FormGroup<ImportReadSetSourceItemFormProperties>({
			sourceFileType: new FormControl<FileType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ReadSetActivationJobItemStatus | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			subjectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sampleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			generatedFrom: new FormControl<string | null | undefined>(undefined),
			referenceArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Source files for a sequence. */
	export interface SourceFiles {

		/** Required */
		source1: string;
		source2?: string;
	}

	/** Source files for a sequence. */
	export interface SourceFilesFormProperties {

		/** Required */
		source1: FormControl<string | null | undefined>,
		source2: FormControl<string | null | undefined>,
	}
	export function CreateSourceFilesFormGroup() {
		return new FormGroup<SourceFilesFormProperties>({
			source1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source2: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetReadSetMetadataResponse {

		/** Required */
		id: string;

		/** Required */
		arn: string;

		/** Required */
		sequenceStoreId: string;
		subjectId?: string;
		sampleId?: string;

		/** Required */
		status: ReadSetStatus;
		name?: string;
		description?: string;

		/** Required */
		fileType: FileType;

		/** Required */
		creationTime: Date;
		sequenceInformation?: SequenceInformation;
		referenceArn?: string;
		files?: ReadSetFiles;
		statusMessage?: string;
		creationType?: CreationType;
	}
	export interface GetReadSetMetadataResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		sequenceStoreId: FormControl<string | null | undefined>,
		subjectId: FormControl<string | null | undefined>,
		sampleId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ReadSetStatus | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		fileType: FormControl<FileType | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
		referenceArn: FormControl<string | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		creationType: FormControl<CreationType | null | undefined>,
	}
	export function CreateGetReadSetMetadataResponseFormGroup() {
		return new FormGroup<GetReadSetMetadataResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sequenceStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subjectId: new FormControl<string | null | undefined>(undefined),
			sampleId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadSetStatus | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			fileType: new FormControl<FileType | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			referenceArn: new FormControl<string | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			creationType: new FormControl<CreationType | null | undefined>(undefined),
		});

	}

	export enum ReadSetStatus { ARCHIVED = 0, ACTIVATING = 1, ACTIVE = 2, DELETING = 3, DELETED = 4, PROCESSING_UPLOAD = 5, UPLOAD_FAILED = 6 }


	/** Details about a sequence. */
	export interface SequenceInformation {
		totalReadCount?: number | null;
		totalBaseCount?: number | null;
		generatedFrom?: string;
		alignment?: string;
	}

	/** Details about a sequence. */
	export interface SequenceInformationFormProperties {
		totalReadCount: FormControl<number | null | undefined>,
		totalBaseCount: FormControl<number | null | undefined>,
		generatedFrom: FormControl<string | null | undefined>,
		alignment: FormControl<string | null | undefined>,
	}
	export function CreateSequenceInformationFormGroup() {
		return new FormGroup<SequenceInformationFormProperties>({
			totalReadCount: new FormControl<number | null | undefined>(undefined),
			totalBaseCount: new FormControl<number | null | undefined>(undefined),
			generatedFrom: new FormControl<string | null | undefined>(undefined),
			alignment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Files in a read set. */
	export interface ReadSetFiles {
		source1?: FileInformation;
		source2?: FileInformation;
		index?: FileInformation;
	}

	/** Files in a read set. */
	export interface ReadSetFilesFormProperties {
	}
	export function CreateReadSetFilesFormGroup() {
		return new FormGroup<ReadSetFilesFormProperties>({
		});

	}


	/** Details about a file. */
	export interface FileInformation {
		totalParts?: number | null;
		partSize?: number | null;
		contentLength?: number | null;
	}

	/** Details about a file. */
	export interface FileInformationFormProperties {
		totalParts: FormControl<number | null | undefined>,
		partSize: FormControl<number | null | undefined>,
		contentLength: FormControl<number | null | undefined>,
	}
	export function CreateFileInformationFormGroup() {
		return new FormGroup<FileInformationFormProperties>({
			totalParts: new FormControl<number | null | undefined>(undefined),
			partSize: new FormControl<number | null | undefined>(undefined),
			contentLength: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CreationType { IMPORT = 0, UPLOAD = 1 }

	export interface GetReferenceResponse {
		payload?: string;
	}
	export interface GetReferenceResponseFormProperties {
		payload: FormControl<string | null | undefined>,
	}
	export function CreateGetReferenceResponseFormGroup() {
		return new FormGroup<GetReferenceResponseFormProperties>({
			payload: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetReferenceImportJobResponse {

		/** Required */
		id: string;

		/** Required */
		referenceStoreId: string;

		/** Required */
		roleArn: string;

		/** Required */
		status: ReadSetActivationJobStatus;
		statusMessage?: string;

		/** Required */
		creationTime: Date;
		completionTime?: Date;

		/** Required */
		sources: Array<ImportReferenceSourceItem>;
	}
	export interface GetReferenceImportJobResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		referenceStoreId: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ReadSetActivationJobStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
		completionTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetReferenceImportJobResponseFormGroup() {
		return new FormGroup<GetReferenceImportJobResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ReadSetActivationJobStatus | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			completionTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** An genome reference source. */
	export interface ImportReferenceSourceItem {
		sourceFile?: string;

		/** Required */
		status: ReadSetActivationJobItemStatus;
		statusMessage?: string;
		name?: string;
		description?: string;
		tags?: TagMap;
	}

	/** An genome reference source. */
	export interface ImportReferenceSourceItemFormProperties {
		sourceFile: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ReadSetActivationJobItemStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateImportReferenceSourceItemFormGroup() {
		return new FormGroup<ImportReferenceSourceItemFormProperties>({
			sourceFile: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadSetActivationJobItemStatus | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetReferenceMetadataResponse {

		/** Required */
		id: string;

		/** Required */
		arn: string;

		/** Required */
		referenceStoreId: string;

		/** Required */
		md5: string;
		status?: ReferenceStatus;
		name?: string;
		description?: string;

		/** Required */
		creationTime: Date;

		/** Required */
		updateTime: Date;
		files?: ReferenceFiles;
	}
	export interface GetReferenceMetadataResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		referenceStoreId: FormControl<string | null | undefined>,

		/** Required */
		md5: FormControl<string | null | undefined>,
		status: FormControl<ReferenceStatus | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetReferenceMetadataResponseFormGroup() {
		return new FormGroup<GetReferenceMetadataResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			md5: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ReferenceStatus | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ReferenceStatus { ACTIVE = 0, DELETING = 1, DELETED = 2 }


	/** A set of genome reference files. */
	export interface ReferenceFiles {
		source?: FileInformation;
		index?: FileInformation;
	}

	/** A set of genome reference files. */
	export interface ReferenceFilesFormProperties {
	}
	export function CreateReferenceFilesFormGroup() {
		return new FormGroup<ReferenceFilesFormProperties>({
		});

	}

	export interface GetReferenceStoreResponse {

		/** Required */
		id: string;

		/** Required */
		arn: string;
		name?: string;
		description?: string;
		sseConfig?: SseConfig;

		/** Required */
		creationTime: Date;
	}
	export interface GetReferenceStoreResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetReferenceStoreResponseFormGroup() {
		return new FormGroup<GetReferenceStoreResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRunResponse {
		arn?: string;
		id?: string;
		status?: RunStatus;
		workflowId?: string;
		workflowType?: WorkflowType;
		runId?: string;
		roleArn?: string;
		name?: string;
		runGroupId?: string;
		priority?: number | null;
		definition?: string;
		digest?: string;
		parameters?: RunParameters;
		storageCapacity?: number | null;
		outputUri?: string;
		logLevel?: RunLogLevel;
		resourceDigests?: RunResourceDigests;
		startedBy?: string;
		creationTime?: Date;
		startTime?: Date;
		stopTime?: Date;
		statusMessage?: string;
		tags?: TagMap;
		accelerators?: Accelerators;
	}
	export interface GetRunResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		status: FormControl<RunStatus | null | undefined>,
		workflowId: FormControl<string | null | undefined>,
		workflowType: FormControl<WorkflowType | null | undefined>,
		runId: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		runGroupId: FormControl<string | null | undefined>,
		priority: FormControl<number | null | undefined>,
		definition: FormControl<string | null | undefined>,
		digest: FormControl<string | null | undefined>,
		storageCapacity: FormControl<number | null | undefined>,
		outputUri: FormControl<string | null | undefined>,
		logLevel: FormControl<RunLogLevel | null | undefined>,
		startedBy: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		stopTime: FormControl<Date | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		accelerators: FormControl<Accelerators | null | undefined>,
	}
	export function CreateGetRunResponseFormGroup() {
		return new FormGroup<GetRunResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<RunStatus | null | undefined>(undefined),
			workflowId: new FormControl<string | null | undefined>(undefined),
			workflowType: new FormControl<WorkflowType | null | undefined>(undefined),
			runId: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			runGroupId: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			definition: new FormControl<string | null | undefined>(undefined),
			digest: new FormControl<string | null | undefined>(undefined),
			storageCapacity: new FormControl<number | null | undefined>(undefined),
			outputUri: new FormControl<string | null | undefined>(undefined),
			logLevel: new FormControl<RunLogLevel | null | undefined>(undefined),
			startedBy: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			stopTime: new FormControl<Date | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			accelerators: new FormControl<Accelerators | null | undefined>(undefined),
		});

	}

	export enum RunStatus { PENDING = 0, STARTING = 1, RUNNING = 2, STOPPING = 3, COMPLETED = 4, DELETED = 5, CANCELLED = 6, FAILED = 7 }

	export enum WorkflowType { PRIVATE = 0, READY2RUN = 1 }

	export interface RunParameters {
	}
	export interface RunParametersFormProperties {
	}
	export function CreateRunParametersFormGroup() {
		return new FormGroup<RunParametersFormProperties>({
		});

	}

	export enum RunLogLevel { OFF = 0, FATAL = 1, ERROR = 2, ALL = 3 }

	export interface RunResourceDigests {
	}
	export interface RunResourceDigestsFormProperties {
	}
	export function CreateRunResourceDigestsFormGroup() {
		return new FormGroup<RunResourceDigestsFormProperties>({
		});

	}

	export enum Accelerators { GPU = 0 }

	export enum RunExport { DEFINITION = 0 }

	export interface GetRunGroupResponse {
		arn?: string;
		id?: string;
		name?: string;
		maxCpus?: number | null;
		maxRuns?: number | null;
		maxDuration?: number | null;
		creationTime?: Date;
		tags?: TagMap;
		maxGpus?: number | null;
	}
	export interface GetRunGroupResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		maxCpus: FormControl<number | null | undefined>,
		maxRuns: FormControl<number | null | undefined>,
		maxDuration: FormControl<number | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		maxGpus: FormControl<number | null | undefined>,
	}
	export function CreateGetRunGroupResponseFormGroup() {
		return new FormGroup<GetRunGroupResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			maxCpus: new FormControl<number | null | undefined>(undefined),
			maxRuns: new FormControl<number | null | undefined>(undefined),
			maxDuration: new FormControl<number | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			maxGpus: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetRunTaskResponse {
		taskId?: string;
		status?: TaskStatus;
		name?: string;
		cpus?: number | null;
		memory?: number | null;
		creationTime?: Date;
		startTime?: Date;
		stopTime?: Date;
		statusMessage?: string;
		logStream?: string;
		gpus?: number | null;
	}
	export interface GetRunTaskResponseFormProperties {
		taskId: FormControl<string | null | undefined>,
		status: FormControl<TaskStatus | null | undefined>,
		name: FormControl<string | null | undefined>,
		cpus: FormControl<number | null | undefined>,
		memory: FormControl<number | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		stopTime: FormControl<Date | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		logStream: FormControl<string | null | undefined>,
		gpus: FormControl<number | null | undefined>,
	}
	export function CreateGetRunTaskResponseFormGroup() {
		return new FormGroup<GetRunTaskResponseFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TaskStatus | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			cpus: new FormControl<number | null | undefined>(undefined),
			memory: new FormControl<number | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			stopTime: new FormControl<Date | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			logStream: new FormControl<string | null | undefined>(undefined),
			gpus: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TaskStatus { PENDING = 0, STARTING = 1, RUNNING = 2, STOPPING = 3, COMPLETED = 4, CANCELLED = 5, FAILED = 6 }

	export interface GetSequenceStoreResponse {

		/** Required */
		id: string;

		/** Required */
		arn: string;
		name?: string;
		description?: string;
		sseConfig?: SseConfig;

		/** Required */
		creationTime: Date;
		fallbackLocation?: string;
	}
	export interface GetSequenceStoreResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
		fallbackLocation: FormControl<string | null | undefined>,
	}
	export function CreateGetSequenceStoreResponseFormGroup() {
		return new FormGroup<GetSequenceStoreResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			fallbackLocation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetVariantImportResponse {

		/** Required */
		id: string;

		/** Required */
		destinationName: string;

		/** Required */
		roleArn: string;

		/** Required */
		status: JobStatus;

		/** Required */
		statusMessage: string;

		/** Required */
		creationTime: Date;

		/** Required */
		updateTime: Date;
		completionTime?: Date;

		/** Required */
		items: Array<VariantImportItemDetail>;

		/** Required */
		runLeftNormalization: boolean;
		annotationFields?: AnnotationFieldMap;
	}
	export interface GetVariantImportResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		destinationName: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<JobStatus | null | undefined>,

		/** Required */
		statusMessage: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,
		completionTime: FormControl<Date | null | undefined>,

		/** Required */
		runLeftNormalization: FormControl<boolean | null | undefined>,
	}
	export function CreateGetVariantImportResponseFormGroup() {
		return new FormGroup<GetVariantImportResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			completionTime: new FormControl<Date | null | undefined>(undefined),
			runLeftNormalization: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details about an imported variant item. */
	export interface VariantImportItemDetail {

		/** Required */
		source: string;

		/** Required */
		jobStatus: JobStatus;
		statusMessage?: string;
	}

	/** Details about an imported variant item. */
	export interface VariantImportItemDetailFormProperties {

		/** Required */
		source: FormControl<string | null | undefined>,

		/** Required */
		jobStatus: FormControl<JobStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
	}
	export function CreateVariantImportItemDetailFormGroup() {
		return new FormGroup<VariantImportItemDetailFormProperties>({
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobStatus: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetVariantStoreResponse {

		/** Required */
		id: string;

		/** Required */
		reference: ReferenceItem;

		/** Required */
		status: StoreStatus;

		/** Required */
		storeArn: string;

		/** Required */
		name: string;

		/** Required */
		description: string;

		/** Required */
		sseConfig: SseConfig;

		/** Required */
		creationTime: Date;

		/** Required */
		updateTime: Date;

		/** Required */
		tags: TagMap;

		/** Required */
		statusMessage: string;

		/** Required */
		storeSizeBytes: number;
	}
	export interface GetVariantStoreResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<StoreStatus | null | undefined>,

		/** Required */
		storeArn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,

		/** Required */
		statusMessage: FormControl<string | null | undefined>,

		/** Required */
		storeSizeBytes: FormControl<number | null | undefined>,
	}
	export function CreateGetVariantStoreResponseFormGroup() {
		return new FormGroup<GetVariantStoreResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<StoreStatus | null | undefined>(undefined, [Validators.required]),
			storeArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storeSizeBytes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetWorkflowResponse {
		arn?: string;
		id?: string;
		status?: WorkflowStatus;
		type?: WorkflowType;
		name?: string;
		description?: string;
		engine?: WorkflowEngine;
		definition?: string;
		main?: string;
		digest?: string;
		parameterTemplate?: WorkflowParameterTemplate;
		storageCapacity?: number | null;
		creationTime?: Date;
		statusMessage?: string;
		tags?: TagMap;
		metadata?: WorkflowMetadata;
		accelerators?: Accelerators;
	}
	export interface GetWorkflowResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		status: FormControl<WorkflowStatus | null | undefined>,
		type: FormControl<WorkflowType | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		engine: FormControl<WorkflowEngine | null | undefined>,
		definition: FormControl<string | null | undefined>,
		main: FormControl<string | null | undefined>,
		digest: FormControl<string | null | undefined>,
		storageCapacity: FormControl<number | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		accelerators: FormControl<Accelerators | null | undefined>,
	}
	export function CreateGetWorkflowResponseFormGroup() {
		return new FormGroup<GetWorkflowResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<WorkflowStatus | null | undefined>(undefined),
			type: new FormControl<WorkflowType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			engine: new FormControl<WorkflowEngine | null | undefined>(undefined),
			definition: new FormControl<string | null | undefined>(undefined),
			main: new FormControl<string | null | undefined>(undefined),
			digest: new FormControl<string | null | undefined>(undefined),
			storageCapacity: new FormControl<number | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			accelerators: new FormControl<Accelerators | null | undefined>(undefined),
		});

	}

	export enum WorkflowEngine { WDL = 0, NEXTFLOW = 1, CWL = 2 }

	export interface WorkflowParameterTemplate {
	}
	export interface WorkflowParameterTemplateFormProperties {
	}
	export function CreateWorkflowParameterTemplateFormGroup() {
		return new FormGroup<WorkflowParameterTemplateFormProperties>({
		});

	}

	export interface WorkflowMetadata {
	}
	export interface WorkflowMetadataFormProperties {
	}
	export function CreateWorkflowMetadataFormGroup() {
		return new FormGroup<WorkflowMetadataFormProperties>({
		});

	}

	export enum WorkflowExport { DEFINITION = 0 }

	export interface ListAnnotationImportJobsResponse {
		annotationImportJobs?: Array<AnnotationImportJobItem>;
		nextToken?: string;
	}
	export interface ListAnnotationImportJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnnotationImportJobsResponseFormGroup() {
		return new FormGroup<ListAnnotationImportJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An annotation import job. */
	export interface AnnotationImportJobItem {

		/** Required */
		id: string;

		/** Required */
		destinationName: string;

		/** Required */
		roleArn: string;

		/** Required */
		status: JobStatus;

		/** Required */
		creationTime: Date;

		/** Required */
		updateTime: Date;
		completionTime?: Date;
		runLeftNormalization?: boolean | null;
		annotationFields?: AnnotationFieldMap;
	}

	/** An annotation import job. */
	export interface AnnotationImportJobItemFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		destinationName: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<JobStatus | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,
		completionTime: FormControl<Date | null | undefined>,
		runLeftNormalization: FormControl<boolean | null | undefined>,
	}
	export function CreateAnnotationImportJobItemFormGroup() {
		return new FormGroup<AnnotationImportJobItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			completionTime: new FormControl<Date | null | undefined>(undefined),
			runLeftNormalization: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListAnnotationStoresResponse {
		annotationStores?: Array<AnnotationStoreItem>;
		nextToken?: string;
	}
	export interface ListAnnotationStoresResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnnotationStoresResponseFormGroup() {
		return new FormGroup<ListAnnotationStoresResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An annotation store. */
	export interface AnnotationStoreItem {

		/** Required */
		id: string;

		/** Required */
		reference: ReferenceItem;

		/** Required */
		status: StoreStatus;

		/** Required */
		storeArn: string;

		/** Required */
		name: string;

		/** Required */
		storeFormat: StoreFormat;

		/** Required */
		description: string;

		/** Required */
		sseConfig: SseConfig;

		/** Required */
		creationTime: Date;

		/** Required */
		updateTime: Date;

		/** Required */
		statusMessage: string;

		/** Required */
		storeSizeBytes: number;
	}

	/** An annotation store. */
	export interface AnnotationStoreItemFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<StoreStatus | null | undefined>,

		/** Required */
		storeArn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		storeFormat: FormControl<StoreFormat | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,

		/** Required */
		statusMessage: FormControl<string | null | undefined>,

		/** Required */
		storeSizeBytes: FormControl<number | null | undefined>,
	}
	export function CreateAnnotationStoreItemFormGroup() {
		return new FormGroup<AnnotationStoreItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<StoreStatus | null | undefined>(undefined, [Validators.required]),
			storeArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storeFormat: new FormControl<StoreFormat | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storeSizeBytes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListMultipartReadSetUploadsResponse {
		nextToken?: string;
		uploads?: Array<MultipartReadSetUploadListItem>;
	}
	export interface ListMultipartReadSetUploadsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMultipartReadSetUploadsResponseFormGroup() {
		return new FormGroup<ListMultipartReadSetUploadsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Part of the response to ListMultipartReadSetUploads, excluding completed and aborted multipart uploads.  */
	export interface MultipartReadSetUploadListItem {

		/** Required */
		sequenceStoreId: string;

		/** Required */
		uploadId: string;

		/** Required */
		sourceFileType: FileType;

		/** Required */
		subjectId: string;

		/** Required */
		sampleId: string;

		/** Required */
		generatedFrom: string;

		/** Required */
		referenceArn: string;
		name?: string;
		description?: string;
		tags?: TagMap;

		/** Required */
		creationTime: Date;
	}

	/**  Part of the response to ListMultipartReadSetUploads, excluding completed and aborted multipart uploads.  */
	export interface MultipartReadSetUploadListItemFormProperties {

		/** Required */
		sequenceStoreId: FormControl<string | null | undefined>,

		/** Required */
		uploadId: FormControl<string | null | undefined>,

		/** Required */
		sourceFileType: FormControl<FileType | null | undefined>,

		/** Required */
		subjectId: FormControl<string | null | undefined>,

		/** Required */
		sampleId: FormControl<string | null | undefined>,

		/** Required */
		generatedFrom: FormControl<string | null | undefined>,

		/** Required */
		referenceArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
	}
	export function CreateMultipartReadSetUploadListItemFormGroup() {
		return new FormGroup<MultipartReadSetUploadListItemFormProperties>({
			sequenceStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uploadId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceFileType: new FormControl<FileType | null | undefined>(undefined, [Validators.required]),
			subjectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sampleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			generatedFrom: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListReadSetActivationJobsResponse {
		nextToken?: string;
		activationJobs?: Array<ActivateReadSetJobItem>;
	}
	export interface ListReadSetActivationJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReadSetActivationJobsResponseFormGroup() {
		return new FormGroup<ListReadSetActivationJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A read set activation job. */
	export interface ActivateReadSetJobItem {

		/** Required */
		id: string;

		/** Required */
		sequenceStoreId: string;

		/** Required */
		status: ReadSetActivationJobStatus;

		/** Required */
		creationTime: Date;
		completionTime?: Date;
	}

	/** A read set activation job. */
	export interface ActivateReadSetJobItemFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		sequenceStoreId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ReadSetActivationJobStatus | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
		completionTime: FormControl<Date | null | undefined>,
	}
	export function CreateActivateReadSetJobItemFormGroup() {
		return new FormGroup<ActivateReadSetJobItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sequenceStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ReadSetActivationJobStatus | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			completionTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListReadSetExportJobsResponse {
		nextToken?: string;
		exportJobs?: Array<ExportReadSetJobDetail>;
	}
	export interface ListReadSetExportJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReadSetExportJobsResponseFormGroup() {
		return new FormGroup<ListReadSetExportJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a read set export job. */
	export interface ExportReadSetJobDetail {

		/** Required */
		id: string;

		/** Required */
		sequenceStoreId: string;

		/** Required */
		destination: string;

		/** Required */
		status: ReadSetActivationJobStatus;

		/** Required */
		creationTime: Date;
		completionTime?: Date;
	}

	/** Details about a read set export job. */
	export interface ExportReadSetJobDetailFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		sequenceStoreId: FormControl<string | null | undefined>,

		/** Required */
		destination: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ReadSetActivationJobStatus | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
		completionTime: FormControl<Date | null | undefined>,
	}
	export function CreateExportReadSetJobDetailFormGroup() {
		return new FormGroup<ExportReadSetJobDetailFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sequenceStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destination: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ReadSetActivationJobStatus | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			completionTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ReadSetExportJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, CANCELLING = 2, CANCELLED = 3, FAILED = 4, COMPLETED = 5, COMPLETED_WITH_FAILURES = 6 }

	export interface ListReadSetImportJobsResponse {
		nextToken?: string;
		importJobs?: Array<ImportReadSetJobItem>;
	}
	export interface ListReadSetImportJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReadSetImportJobsResponseFormGroup() {
		return new FormGroup<ListReadSetImportJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An import read set job. */
	export interface ImportReadSetJobItem {

		/** Required */
		id: string;

		/** Required */
		sequenceStoreId: string;

		/** Required */
		roleArn: string;

		/** Required */
		status: ReadSetActivationJobStatus;

		/** Required */
		creationTime: Date;
		completionTime?: Date;
	}

	/** An import read set job. */
	export interface ImportReadSetJobItemFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		sequenceStoreId: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ReadSetActivationJobStatus | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
		completionTime: FormControl<Date | null | undefined>,
	}
	export function CreateImportReadSetJobItemFormGroup() {
		return new FormGroup<ImportReadSetJobItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sequenceStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ReadSetActivationJobStatus | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			completionTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ReadSetImportJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, CANCELLING = 2, CANCELLED = 3, FAILED = 4, COMPLETED = 5, COMPLETED_WITH_FAILURES = 6 }

	export interface ListReadSetUploadPartsResponse {
		nextToken?: string;
		parts?: Array<ReadSetUploadPartListItem>;
	}
	export interface ListReadSetUploadPartsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReadSetUploadPartsResponseFormGroup() {
		return new FormGroup<ListReadSetUploadPartsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The metadata of a single part of a file that was added to a multipart upload. A list of these parts is returned in the response to the ListReadSetUploadParts API.  */
	export interface ReadSetUploadPartListItem {

		/** Required */
		partNumber: number;

		/** Required */
		partSize: number;

		/** Required */
		partSource: ReadSetPartSource;

		/** Required */
		checksum: string;
		creationTime?: Date;
		lastUpdatedTime?: Date;
	}

	/**  The metadata of a single part of a file that was added to a multipart upload. A list of these parts is returned in the response to the ListReadSetUploadParts API.  */
	export interface ReadSetUploadPartListItemFormProperties {

		/** Required */
		partNumber: FormControl<number | null | undefined>,

		/** Required */
		partSize: FormControl<number | null | undefined>,

		/** Required */
		partSource: FormControl<ReadSetPartSource | null | undefined>,

		/** Required */
		checksum: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateReadSetUploadPartListItemFormGroup() {
		return new FormGroup<ReadSetUploadPartListItemFormProperties>({
			partNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			partSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			partSource: new FormControl<ReadSetPartSource | null | undefined>(undefined, [Validators.required]),
			checksum: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListReadSetsResponse {
		nextToken?: string;

		/** Required */
		readSets: Array<ReadSetListItem>;
	}
	export interface ListReadSetsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReadSetsResponseFormGroup() {
		return new FormGroup<ListReadSetsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A read set. */
	export interface ReadSetListItem {

		/** Required */
		id: string;

		/** Required */
		arn: string;

		/** Required */
		sequenceStoreId: string;
		subjectId?: string;
		sampleId?: string;

		/** Required */
		status: ReadSetStatus;
		name?: string;
		description?: string;
		referenceArn?: string;

		/** Required */
		fileType: FileType;

		/** Details about a sequence. */
		sequenceInformation?: SequenceInformation;

		/** Required */
		creationTime: Date;
		statusMessage?: string;
		creationType?: CreationType;
	}

	/** A read set. */
	export interface ReadSetListItemFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		sequenceStoreId: FormControl<string | null | undefined>,
		subjectId: FormControl<string | null | undefined>,
		sampleId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ReadSetStatus | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		referenceArn: FormControl<string | null | undefined>,

		/** Required */
		fileType: FormControl<FileType | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		creationType: FormControl<CreationType | null | undefined>,
	}
	export function CreateReadSetListItemFormGroup() {
		return new FormGroup<ReadSetListItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sequenceStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subjectId: new FormControl<string | null | undefined>(undefined),
			sampleId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadSetStatus | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			referenceArn: new FormControl<string | null | undefined>(undefined),
			fileType: new FormControl<FileType | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			creationType: new FormControl<CreationType | null | undefined>(undefined),
		});

	}

	export interface ListReferenceImportJobsResponse {
		nextToken?: string;
		importJobs?: Array<ImportReferenceJobItem>;
	}
	export interface ListReferenceImportJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReferenceImportJobsResponseFormGroup() {
		return new FormGroup<ListReferenceImportJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An import reference job. */
	export interface ImportReferenceJobItem {

		/** Required */
		id: string;

		/** Required */
		referenceStoreId: string;

		/** Required */
		roleArn: string;

		/** Required */
		status: ReadSetActivationJobStatus;

		/** Required */
		creationTime: Date;
		completionTime?: Date;
	}

	/** An import reference job. */
	export interface ImportReferenceJobItemFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		referenceStoreId: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ReadSetActivationJobStatus | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
		completionTime: FormControl<Date | null | undefined>,
	}
	export function CreateImportReferenceJobItemFormGroup() {
		return new FormGroup<ImportReferenceJobItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ReadSetActivationJobStatus | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			completionTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ReferenceImportJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, CANCELLING = 2, CANCELLED = 3, FAILED = 4, COMPLETED = 5, COMPLETED_WITH_FAILURES = 6 }

	export interface ListReferenceStoresResponse {
		nextToken?: string;

		/** Required */
		referenceStores: Array<ReferenceStoreDetail>;
	}
	export interface ListReferenceStoresResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReferenceStoresResponseFormGroup() {
		return new FormGroup<ListReferenceStoresResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a reference store. */
	export interface ReferenceStoreDetail {

		/** Required */
		arn: string;

		/** Required */
		id: string;
		name?: string;
		description?: string;
		sseConfig?: SseConfig;

		/** Required */
		creationTime: Date;
	}

	/** Details about a reference store. */
	export interface ReferenceStoreDetailFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
	}
	export function CreateReferenceStoreDetailFormGroup() {
		return new FormGroup<ReferenceStoreDetailFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListReferencesResponse {
		nextToken?: string;

		/** Required */
		references: Array<ReferenceListItem>;
	}
	export interface ListReferencesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReferencesResponseFormGroup() {
		return new FormGroup<ListReferencesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A genome reference. */
	export interface ReferenceListItem {

		/** Required */
		id: string;

		/** Required */
		arn: string;

		/** Required */
		referenceStoreId: string;

		/** Required */
		md5: string;
		status?: ReferenceStatus;
		name?: string;
		description?: string;

		/** Required */
		creationTime: Date;

		/** Required */
		updateTime: Date;
	}

	/** A genome reference. */
	export interface ReferenceListItemFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		referenceStoreId: FormControl<string | null | undefined>,

		/** Required */
		md5: FormControl<string | null | undefined>,
		status: FormControl<ReferenceStatus | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,
	}
	export function CreateReferenceListItemFormGroup() {
		return new FormGroup<ReferenceListItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			md5: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ReferenceStatus | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListRunGroupsResponse {
		items?: Array<RunGroupListItem>;
		nextToken?: string;
	}
	export interface ListRunGroupsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRunGroupsResponseFormGroup() {
		return new FormGroup<ListRunGroupsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A run group. */
	export interface RunGroupListItem {
		arn?: string;
		id?: string;
		name?: string;
		maxCpus?: number | null;
		maxRuns?: number | null;
		maxDuration?: number | null;
		creationTime?: Date;
		maxGpus?: number | null;
	}

	/** A run group. */
	export interface RunGroupListItemFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		maxCpus: FormControl<number | null | undefined>,
		maxRuns: FormControl<number | null | undefined>,
		maxDuration: FormControl<number | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		maxGpus: FormControl<number | null | undefined>,
	}
	export function CreateRunGroupListItemFormGroup() {
		return new FormGroup<RunGroupListItemFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			maxCpus: new FormControl<number | null | undefined>(undefined),
			maxRuns: new FormControl<number | null | undefined>(undefined),
			maxDuration: new FormControl<number | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			maxGpus: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRunTasksResponse {
		items?: Array<TaskListItem>;
		nextToken?: string;
	}
	export interface ListRunTasksResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRunTasksResponseFormGroup() {
		return new FormGroup<ListRunTasksResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A workflow run task. */
	export interface TaskListItem {
		taskId?: string;
		status?: TaskStatus;
		name?: string;
		cpus?: number | null;
		memory?: number | null;
		creationTime?: Date;
		startTime?: Date;
		stopTime?: Date;
		gpus?: number | null;
	}

	/** A workflow run task. */
	export interface TaskListItemFormProperties {
		taskId: FormControl<string | null | undefined>,
		status: FormControl<TaskStatus | null | undefined>,
		name: FormControl<string | null | undefined>,
		cpus: FormControl<number | null | undefined>,
		memory: FormControl<number | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		stopTime: FormControl<Date | null | undefined>,
		gpus: FormControl<number | null | undefined>,
	}
	export function CreateTaskListItemFormGroup() {
		return new FormGroup<TaskListItemFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TaskStatus | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			cpus: new FormControl<number | null | undefined>(undefined),
			memory: new FormControl<number | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			stopTime: new FormControl<Date | null | undefined>(undefined),
			gpus: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRunsResponse {
		items?: Array<RunListItem>;
		nextToken?: string;
	}
	export interface ListRunsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRunsResponseFormGroup() {
		return new FormGroup<ListRunsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A workflow run. */
	export interface RunListItem {
		arn?: string;
		id?: string;
		status?: RunStatus;
		workflowId?: string;
		name?: string;
		priority?: number | null;
		storageCapacity?: number | null;
		creationTime?: Date;
		startTime?: Date;
		stopTime?: Date;
	}

	/** A workflow run. */
	export interface RunListItemFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		status: FormControl<RunStatus | null | undefined>,
		workflowId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		priority: FormControl<number | null | undefined>,
		storageCapacity: FormControl<number | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		stopTime: FormControl<Date | null | undefined>,
	}
	export function CreateRunListItemFormGroup() {
		return new FormGroup<RunListItemFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<RunStatus | null | undefined>(undefined),
			workflowId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			storageCapacity: new FormControl<number | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			stopTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListSequenceStoresResponse {
		nextToken?: string;

		/** Required */
		sequenceStores: Array<SequenceStoreDetail>;
	}
	export interface ListSequenceStoresResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSequenceStoresResponseFormGroup() {
		return new FormGroup<ListSequenceStoresResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a sequence store. */
	export interface SequenceStoreDetail {

		/** Required */
		arn: string;

		/** Required */
		id: string;
		name?: string;
		description?: string;
		sseConfig?: SseConfig;

		/** Required */
		creationTime: Date;
		fallbackLocation?: string;
	}

	/** Details about a sequence store. */
	export interface SequenceStoreDetailFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
		fallbackLocation: FormControl<string | null | undefined>,
	}
	export function CreateSequenceStoreDetailFormGroup() {
		return new FormGroup<SequenceStoreDetailFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			fallbackLocation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {

		/** Required */
		tags: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListVariantImportJobsResponse {
		variantImportJobs?: Array<VariantImportJobItem>;
		nextToken?: string;
	}
	export interface ListVariantImportJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVariantImportJobsResponseFormGroup() {
		return new FormGroup<ListVariantImportJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A variant import job. */
	export interface VariantImportJobItem {

		/** Required */
		id: string;

		/** Required */
		destinationName: string;

		/** Required */
		roleArn: string;

		/** Required */
		status: JobStatus;

		/** Required */
		creationTime: Date;

		/** Required */
		updateTime: Date;
		completionTime?: Date;
		runLeftNormalization?: boolean | null;
		annotationFields?: AnnotationFieldMap;
	}

	/** A variant import job. */
	export interface VariantImportJobItemFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		destinationName: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<JobStatus | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,
		completionTime: FormControl<Date | null | undefined>,
		runLeftNormalization: FormControl<boolean | null | undefined>,
	}
	export function CreateVariantImportJobItemFormGroup() {
		return new FormGroup<VariantImportJobItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			completionTime: new FormControl<Date | null | undefined>(undefined),
			runLeftNormalization: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListVariantStoresResponse {
		variantStores?: Array<VariantStoreItem>;
		nextToken?: string;
	}
	export interface ListVariantStoresResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVariantStoresResponseFormGroup() {
		return new FormGroup<ListVariantStoresResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A variant store. */
	export interface VariantStoreItem {

		/** Required */
		id: string;

		/** Required */
		reference: ReferenceItem;

		/** Required */
		status: StoreStatus;

		/** Required */
		storeArn: string;

		/** Required */
		name: string;

		/** Required */
		description: string;

		/** Required */
		sseConfig: SseConfig;

		/** Required */
		creationTime: Date;

		/** Required */
		updateTime: Date;

		/** Required */
		statusMessage: string;

		/** Required */
		storeSizeBytes: number;
	}

	/** A variant store. */
	export interface VariantStoreItemFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<StoreStatus | null | undefined>,

		/** Required */
		storeArn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,

		/** Required */
		statusMessage: FormControl<string | null | undefined>,

		/** Required */
		storeSizeBytes: FormControl<number | null | undefined>,
	}
	export function CreateVariantStoreItemFormGroup() {
		return new FormGroup<VariantStoreItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<StoreStatus | null | undefined>(undefined, [Validators.required]),
			storeArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storeSizeBytes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListWorkflowsResponse {
		items?: Array<WorkflowListItem>;
		nextToken?: string;
	}
	export interface ListWorkflowsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkflowsResponseFormGroup() {
		return new FormGroup<ListWorkflowsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A workflow. */
	export interface WorkflowListItem {
		arn?: string;
		id?: string;
		name?: string;
		status?: WorkflowStatus;
		type?: WorkflowType;
		digest?: string;
		creationTime?: Date;
		metadata?: WorkflowMetadata;
	}

	/** A workflow. */
	export interface WorkflowListItemFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<WorkflowStatus | null | undefined>,
		type: FormControl<WorkflowType | null | undefined>,
		digest: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
	}
	export function CreateWorkflowListItemFormGroup() {
		return new FormGroup<WorkflowListItemFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<WorkflowStatus | null | undefined>(undefined),
			type: new FormControl<WorkflowType | null | undefined>(undefined),
			digest: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface StartAnnotationImportResponse {

		/** Required */
		jobId: string;
	}
	export interface StartAnnotationImportResponseFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateStartAnnotationImportResponseFormGroup() {
		return new FormGroup<StartAnnotationImportResponseFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A source for an annotation import job. */
	export interface AnnotationImportItemSource {

		/** Required */
		source: string;
	}

	/** A source for an annotation import job. */
	export interface AnnotationImportItemSourceFormProperties {

		/** Required */
		source: FormControl<string | null | undefined>,
	}
	export function CreateAnnotationImportItemSourceFormGroup() {
		return new FormGroup<AnnotationImportItemSourceFormProperties>({
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartReadSetActivationJobResponse {

		/** Required */
		id: string;

		/** Required */
		sequenceStoreId: string;

		/** Required */
		status: ReadSetActivationJobStatus;

		/** Required */
		creationTime: Date;
	}
	export interface StartReadSetActivationJobResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		sequenceStoreId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ReadSetActivationJobStatus | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartReadSetActivationJobResponseFormGroup() {
		return new FormGroup<StartReadSetActivationJobResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sequenceStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ReadSetActivationJobStatus | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A source for a read set activation job. */
	export interface StartReadSetActivationJobSourceItem {

		/** Required */
		readSetId: string;
	}

	/** A source for a read set activation job. */
	export interface StartReadSetActivationJobSourceItemFormProperties {

		/** Required */
		readSetId: FormControl<string | null | undefined>,
	}
	export function CreateStartReadSetActivationJobSourceItemFormGroup() {
		return new FormGroup<StartReadSetActivationJobSourceItemFormProperties>({
			readSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartReadSetExportJobResponse {

		/** Required */
		id: string;

		/** Required */
		sequenceStoreId: string;

		/** Required */
		destination: string;

		/** Required */
		status: ReadSetActivationJobStatus;

		/** Required */
		creationTime: Date;
	}
	export interface StartReadSetExportJobResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		sequenceStoreId: FormControl<string | null | undefined>,

		/** Required */
		destination: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ReadSetActivationJobStatus | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartReadSetExportJobResponseFormGroup() {
		return new FormGroup<StartReadSetExportJobResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sequenceStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destination: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ReadSetActivationJobStatus | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A read set. */
	export interface ExportReadSet {

		/** Required */
		readSetId: string;
	}

	/** A read set. */
	export interface ExportReadSetFormProperties {

		/** Required */
		readSetId: FormControl<string | null | undefined>,
	}
	export function CreateExportReadSetFormGroup() {
		return new FormGroup<ExportReadSetFormProperties>({
			readSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartReadSetImportJobResponse {

		/** Required */
		id: string;

		/** Required */
		sequenceStoreId: string;

		/** Required */
		roleArn: string;

		/** Required */
		status: ReadSetActivationJobStatus;

		/** Required */
		creationTime: Date;
	}
	export interface StartReadSetImportJobResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		sequenceStoreId: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ReadSetActivationJobStatus | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartReadSetImportJobResponseFormGroup() {
		return new FormGroup<StartReadSetImportJobResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sequenceStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ReadSetActivationJobStatus | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A source for a read set import job. */
	export interface StartReadSetImportJobSourceItem {

		/** Required */
		sourceFiles: SourceFiles;

		/** Required */
		sourceFileType: FileType;

		/** Required */
		subjectId: string;

		/** Required */
		sampleId: string;
		generatedFrom?: string;

		/** Required */
		referenceArn: string;
		name?: string;
		description?: string;
		tags?: TagMap;
	}

	/** A source for a read set import job. */
	export interface StartReadSetImportJobSourceItemFormProperties {

		/** Required */
		sourceFileType: FormControl<FileType | null | undefined>,

		/** Required */
		subjectId: FormControl<string | null | undefined>,

		/** Required */
		sampleId: FormControl<string | null | undefined>,
		generatedFrom: FormControl<string | null | undefined>,

		/** Required */
		referenceArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateStartReadSetImportJobSourceItemFormGroup() {
		return new FormGroup<StartReadSetImportJobSourceItemFormProperties>({
			sourceFileType: new FormControl<FileType | null | undefined>(undefined, [Validators.required]),
			subjectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sampleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			generatedFrom: new FormControl<string | null | undefined>(undefined),
			referenceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartReferenceImportJobResponse {

		/** Required */
		id: string;

		/** Required */
		referenceStoreId: string;

		/** Required */
		roleArn: string;

		/** Required */
		status: ReadSetActivationJobStatus;

		/** Required */
		creationTime: Date;
	}
	export interface StartReferenceImportJobResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		referenceStoreId: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ReadSetActivationJobStatus | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartReferenceImportJobResponseFormGroup() {
		return new FormGroup<StartReferenceImportJobResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ReadSetActivationJobStatus | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A source for a reference import job. */
	export interface StartReferenceImportJobSourceItem {

		/** Required */
		sourceFile: string;

		/** Required */
		name: string;
		description?: string;
		tags?: TagMap;
	}

	/** A source for a reference import job. */
	export interface StartReferenceImportJobSourceItemFormProperties {

		/** Required */
		sourceFile: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateStartReferenceImportJobSourceItemFormGroup() {
		return new FormGroup<StartReferenceImportJobSourceItemFormProperties>({
			sourceFile: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartRunResponse {
		arn?: string;
		id?: string;
		status?: RunStatus;
		tags?: TagMap;
	}
	export interface StartRunResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		status: FormControl<RunStatus | null | undefined>,
	}
	export function CreateStartRunResponseFormGroup() {
		return new FormGroup<StartRunResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<RunStatus | null | undefined>(undefined),
		});

	}

	export interface StartVariantImportResponse {

		/** Required */
		jobId: string;
	}
	export interface StartVariantImportResponseFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateStartVariantImportResponseFormGroup() {
		return new FormGroup<StartVariantImportResponseFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A imported variant item's source. */
	export interface VariantImportItemSource {

		/** Required */
		source: string;
	}

	/** A imported variant item's source. */
	export interface VariantImportItemSourceFormProperties {

		/** Required */
		source: FormControl<string | null | undefined>,
	}
	export function CreateVariantImportItemSourceFormGroup() {
		return new FormGroup<VariantImportItemSourceFormProperties>({
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateAnnotationStoreResponse {

		/** Required */
		id: string;

		/** Required */
		reference: ReferenceItem;

		/** Required */
		status: StoreStatus;

		/** Required */
		name: string;

		/** Required */
		description: string;

		/** Required */
		creationTime: Date;

		/** Required */
		updateTime: Date;
		storeOptions?: StoreOptions;
		storeFormat?: StoreFormat;
	}
	export interface UpdateAnnotationStoreResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<StoreStatus | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,
		storeFormat: FormControl<StoreFormat | null | undefined>,
	}
	export function CreateUpdateAnnotationStoreResponseFormGroup() {
		return new FormGroup<UpdateAnnotationStoreResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<StoreStatus | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			storeFormat: new FormControl<StoreFormat | null | undefined>(undefined),
		});

	}

	export interface UpdateVariantStoreResponse {

		/** Required */
		id: string;

		/** Required */
		reference: ReferenceItem;

		/** Required */
		status: StoreStatus;

		/** Required */
		name: string;

		/** Required */
		description: string;

		/** Required */
		creationTime: Date;

		/** Required */
		updateTime: Date;
	}
	export interface UpdateVariantStoreResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<StoreStatus | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateVariantStoreResponseFormGroup() {
		return new FormGroup<UpdateVariantStoreResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<StoreStatus | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UploadReadSetPartResponse {

		/** Required */
		checksum: string;
	}
	export interface UploadReadSetPartResponseFormProperties {

		/** Required */
		checksum: FormControl<string | null | undefined>,
	}
	export function CreateUploadReadSetPartResponseFormGroup() {
		return new FormGroup<UploadReadSetPartResponseFormProperties>({
			checksum: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AbortMultipartReadSetUploadRequest {
	}
	export interface AbortMultipartReadSetUploadRequestFormProperties {
	}
	export function CreateAbortMultipartReadSetUploadRequestFormGroup() {
		return new FormGroup<AbortMultipartReadSetUploadRequestFormProperties>({
		});

	}


	/** A read set activation job filter. */
	export interface ActivateReadSetFilter {
		status?: ReadSetActivationJobStatus;
		createdAfter?: Date;
		createdBefore?: Date;
	}

	/** A read set activation job filter. */
	export interface ActivateReadSetFilterFormProperties {
		status: FormControl<ReadSetActivationJobStatus | null | undefined>,
		createdAfter: FormControl<Date | null | undefined>,
		createdBefore: FormControl<Date | null | undefined>,
	}
	export function CreateActivateReadSetFilterFormGroup() {
		return new FormGroup<ActivateReadSetFilterFormProperties>({
			status: new FormControl<ReadSetActivationJobStatus | null | undefined>(undefined),
			createdAfter: new FormControl<Date | null | undefined>(undefined),
			createdBefore: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface BatchDeleteReadSetRequest {

		/** Required */
		ids: Array<string>;
	}
	export interface BatchDeleteReadSetRequestFormProperties {
	}
	export function CreateBatchDeleteReadSetRequestFormGroup() {
		return new FormGroup<BatchDeleteReadSetRequestFormProperties>({
		});

	}

	export interface CancelAnnotationImportRequest {
	}
	export interface CancelAnnotationImportRequestFormProperties {
	}
	export function CreateCancelAnnotationImportRequestFormGroup() {
		return new FormGroup<CancelAnnotationImportRequestFormProperties>({
		});

	}

	export interface CancelRunRequest {
	}
	export interface CancelRunRequestFormProperties {
	}
	export function CreateCancelRunRequestFormGroup() {
		return new FormGroup<CancelRunRequestFormProperties>({
		});

	}

	export interface CancelVariantImportRequest {
	}
	export interface CancelVariantImportRequestFormProperties {
	}
	export function CreateCancelVariantImportRequestFormGroup() {
		return new FormGroup<CancelVariantImportRequestFormProperties>({
		});

	}

	export interface CompleteMultipartReadSetUploadRequest {

		/** Required */
		parts: Array<CompleteReadSetUploadPartListItem>;
	}
	export interface CompleteMultipartReadSetUploadRequestFormProperties {
	}
	export function CreateCompleteMultipartReadSetUploadRequestFormGroup() {
		return new FormGroup<CompleteMultipartReadSetUploadRequestFormProperties>({
		});

	}

	export interface CreateAnnotationStoreRequest {
		reference?: ReferenceItem;
		name?: string;
		description?: string;
		tags?: TagMap;
		sseConfig?: SseConfig;

		/** Required */
		storeFormat: StoreFormat;
		storeOptions?: StoreOptions;
	}
	export interface CreateAnnotationStoreRequestFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		storeFormat: FormControl<StoreFormat | null | undefined>,
	}
	export function CreateCreateAnnotationStoreRequestFormGroup() {
		return new FormGroup<CreateAnnotationStoreRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			storeFormat: new FormControl<StoreFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateMultipartReadSetUploadRequest {
		clientToken?: string;

		/** Required */
		sourceFileType: FileType;

		/** Required */
		subjectId: string;

		/** Required */
		sampleId: string;
		generatedFrom?: string;

		/** Required */
		referenceArn: string;

		/** Required */
		name: string;
		description?: string;
		tags?: TagMap;
	}
	export interface CreateMultipartReadSetUploadRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		sourceFileType: FormControl<FileType | null | undefined>,

		/** Required */
		subjectId: FormControl<string | null | undefined>,

		/** Required */
		sampleId: FormControl<string | null | undefined>,
		generatedFrom: FormControl<string | null | undefined>,

		/** Required */
		referenceArn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateMultipartReadSetUploadRequestFormGroup() {
		return new FormGroup<CreateMultipartReadSetUploadRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			sourceFileType: new FormControl<FileType | null | undefined>(undefined, [Validators.required]),
			subjectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sampleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			generatedFrom: new FormControl<string | null | undefined>(undefined),
			referenceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateReferenceStoreRequest {

		/** Required */
		name: string;
		description?: string;
		sseConfig?: SseConfig;
		tags?: TagMap;
		clientToken?: string;
	}
	export interface CreateReferenceStoreRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateReferenceStoreRequestFormGroup() {
		return new FormGroup<CreateReferenceStoreRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRunGroupRequest {
		name?: string;
		maxCpus?: number | null;
		maxRuns?: number | null;
		maxDuration?: number | null;
		tags?: TagMap;

		/** Required */
		requestId: string;
		maxGpus?: number | null;
	}
	export interface CreateRunGroupRequestFormProperties {
		name: FormControl<string | null | undefined>,
		maxCpus: FormControl<number | null | undefined>,
		maxRuns: FormControl<number | null | undefined>,
		maxDuration: FormControl<number | null | undefined>,

		/** Required */
		requestId: FormControl<string | null | undefined>,
		maxGpus: FormControl<number | null | undefined>,
	}
	export function CreateCreateRunGroupRequestFormGroup() {
		return new FormGroup<CreateRunGroupRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			maxCpus: new FormControl<number | null | undefined>(undefined),
			maxRuns: new FormControl<number | null | undefined>(undefined),
			maxDuration: new FormControl<number | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxGpus: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateSequenceStoreRequest {

		/** Required */
		name: string;
		description?: string;
		sseConfig?: SseConfig;
		tags?: TagMap;
		clientToken?: string;
		fallbackLocation?: string;
	}
	export interface CreateSequenceStoreRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		fallbackLocation: FormControl<string | null | undefined>,
	}
	export function CreateCreateSequenceStoreRequestFormGroup() {
		return new FormGroup<CreateSequenceStoreRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			fallbackLocation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVariantStoreRequest {

		/** Required */
		reference: ReferenceItem;
		name?: string;
		description?: string;
		tags?: TagMap;
		sseConfig?: SseConfig;
	}
	export interface CreateVariantStoreRequestFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateVariantStoreRequestFormGroup() {
		return new FormGroup<CreateVariantStoreRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWorkflowRequest {
		name?: string;
		description?: string;
		engine?: WorkflowEngine;
		definitionZip?: string;
		definitionUri?: string;
		main?: string;
		parameterTemplate?: WorkflowParameterTemplate;
		storageCapacity?: number | null;
		tags?: TagMap;

		/** Required */
		requestId: string;
		accelerators?: Accelerators;
	}
	export interface CreateWorkflowRequestFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		engine: FormControl<WorkflowEngine | null | undefined>,
		definitionZip: FormControl<string | null | undefined>,
		definitionUri: FormControl<string | null | undefined>,
		main: FormControl<string | null | undefined>,
		storageCapacity: FormControl<number | null | undefined>,

		/** Required */
		requestId: FormControl<string | null | undefined>,
		accelerators: FormControl<Accelerators | null | undefined>,
	}
	export function CreateCreateWorkflowRequestFormGroup() {
		return new FormGroup<CreateWorkflowRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			engine: new FormControl<WorkflowEngine | null | undefined>(undefined),
			definitionZip: new FormControl<string | null | undefined>(undefined),
			definitionUri: new FormControl<string | null | undefined>(undefined),
			main: new FormControl<string | null | undefined>(undefined),
			storageCapacity: new FormControl<number | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			accelerators: new FormControl<Accelerators | null | undefined>(undefined),
		});

	}

	export interface DeleteAnnotationStoreRequest {
	}
	export interface DeleteAnnotationStoreRequestFormProperties {
	}
	export function CreateDeleteAnnotationStoreRequestFormGroup() {
		return new FormGroup<DeleteAnnotationStoreRequestFormProperties>({
		});

	}

	export interface DeleteReferenceRequest {
	}
	export interface DeleteReferenceRequestFormProperties {
	}
	export function CreateDeleteReferenceRequestFormGroup() {
		return new FormGroup<DeleteReferenceRequestFormProperties>({
		});

	}

	export interface DeleteReferenceStoreRequest {
	}
	export interface DeleteReferenceStoreRequestFormProperties {
	}
	export function CreateDeleteReferenceStoreRequestFormGroup() {
		return new FormGroup<DeleteReferenceStoreRequestFormProperties>({
		});

	}

	export interface DeleteRunGroupRequest {
	}
	export interface DeleteRunGroupRequestFormProperties {
	}
	export function CreateDeleteRunGroupRequestFormGroup() {
		return new FormGroup<DeleteRunGroupRequestFormProperties>({
		});

	}

	export interface DeleteRunRequest {
	}
	export interface DeleteRunRequestFormProperties {
	}
	export function CreateDeleteRunRequestFormGroup() {
		return new FormGroup<DeleteRunRequestFormProperties>({
		});

	}

	export interface DeleteSequenceStoreRequest {
	}
	export interface DeleteSequenceStoreRequestFormProperties {
	}
	export function CreateDeleteSequenceStoreRequestFormGroup() {
		return new FormGroup<DeleteSequenceStoreRequestFormProperties>({
		});

	}

	export interface DeleteVariantStoreRequest {
	}
	export interface DeleteVariantStoreRequestFormProperties {
	}
	export function CreateDeleteVariantStoreRequestFormGroup() {
		return new FormGroup<DeleteVariantStoreRequestFormProperties>({
		});

	}

	export interface DeleteWorkflowRequest {
	}
	export interface DeleteWorkflowRequestFormProperties {
	}
	export function CreateDeleteWorkflowRequestFormGroup() {
		return new FormGroup<DeleteWorkflowRequestFormProperties>({
		});

	}

	export enum ReadSetExportJobItemStatus { NOT_STARTED = 0, IN_PROGRESS = 1, FINISHED = 2, FAILED = 3 }


	/** An read set export job filter. */
	export interface ExportReadSetFilter {
		status?: ReadSetActivationJobStatus;
		createdAfter?: Date;
		createdBefore?: Date;
	}

	/** An read set export job filter. */
	export interface ExportReadSetFilterFormProperties {
		status: FormControl<ReadSetActivationJobStatus | null | undefined>,
		createdAfter: FormControl<Date | null | undefined>,
		createdBefore: FormControl<Date | null | undefined>,
	}
	export function CreateExportReadSetFilterFormGroup() {
		return new FormGroup<ExportReadSetFilterFormProperties>({
			status: new FormControl<ReadSetActivationJobStatus | null | undefined>(undefined),
			createdAfter: new FormControl<Date | null | undefined>(undefined),
			createdBefore: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum FormatToHeaderKey { CHR = 0, START = 1, END = 2, REF = 3, ALT = 4, POS = 5 }

	export interface GetAnnotationImportRequest {
	}
	export interface GetAnnotationImportRequestFormProperties {
	}
	export function CreateGetAnnotationImportRequestFormGroup() {
		return new FormGroup<GetAnnotationImportRequestFormProperties>({
		});

	}

	export interface GetAnnotationStoreRequest {
	}
	export interface GetAnnotationStoreRequestFormProperties {
	}
	export function CreateGetAnnotationStoreRequestFormGroup() {
		return new FormGroup<GetAnnotationStoreRequestFormProperties>({
		});

	}

	export interface GetReadSetActivationJobRequest {
	}
	export interface GetReadSetActivationJobRequestFormProperties {
	}
	export function CreateGetReadSetActivationJobRequestFormGroup() {
		return new FormGroup<GetReadSetActivationJobRequestFormProperties>({
		});

	}

	export interface GetReadSetExportJobRequest {
	}
	export interface GetReadSetExportJobRequestFormProperties {
	}
	export function CreateGetReadSetExportJobRequestFormGroup() {
		return new FormGroup<GetReadSetExportJobRequestFormProperties>({
		});

	}

	export interface GetReadSetImportJobRequest {
	}
	export interface GetReadSetImportJobRequestFormProperties {
	}
	export function CreateGetReadSetImportJobRequestFormGroup() {
		return new FormGroup<GetReadSetImportJobRequestFormProperties>({
		});

	}

	export interface GetReadSetMetadataRequest {
	}
	export interface GetReadSetMetadataRequestFormProperties {
	}
	export function CreateGetReadSetMetadataRequestFormGroup() {
		return new FormGroup<GetReadSetMetadataRequestFormProperties>({
		});

	}

	export enum ReadSetFile { SOURCE1 = 0, SOURCE2 = 1, INDEX = 2 }

	export interface GetReadSetRequest {
	}
	export interface GetReadSetRequestFormProperties {
	}
	export function CreateGetReadSetRequestFormGroup() {
		return new FormGroup<GetReadSetRequestFormProperties>({
		});

	}

	export interface GetReferenceImportJobRequest {
	}
	export interface GetReferenceImportJobRequestFormProperties {
	}
	export function CreateGetReferenceImportJobRequestFormGroup() {
		return new FormGroup<GetReferenceImportJobRequestFormProperties>({
		});

	}

	export interface GetReferenceMetadataRequest {
	}
	export interface GetReferenceMetadataRequestFormProperties {
	}
	export function CreateGetReferenceMetadataRequestFormGroup() {
		return new FormGroup<GetReferenceMetadataRequestFormProperties>({
		});

	}

	export enum ReferenceFile { SOURCE = 0, INDEX = 1 }

	export interface GetReferenceRequest {
	}
	export interface GetReferenceRequestFormProperties {
	}
	export function CreateGetReferenceRequestFormGroup() {
		return new FormGroup<GetReferenceRequestFormProperties>({
		});

	}

	export interface GetReferenceStoreRequest {
	}
	export interface GetReferenceStoreRequestFormProperties {
	}
	export function CreateGetReferenceStoreRequestFormGroup() {
		return new FormGroup<GetReferenceStoreRequestFormProperties>({
		});

	}

	export interface GetRunGroupRequest {
	}
	export interface GetRunGroupRequestFormProperties {
	}
	export function CreateGetRunGroupRequestFormGroup() {
		return new FormGroup<GetRunGroupRequestFormProperties>({
		});

	}

	export interface GetRunRequest {
	}
	export interface GetRunRequestFormProperties {
	}
	export function CreateGetRunRequestFormGroup() {
		return new FormGroup<GetRunRequestFormProperties>({
		});

	}

	export interface GetRunTaskRequest {
	}
	export interface GetRunTaskRequestFormProperties {
	}
	export function CreateGetRunTaskRequestFormGroup() {
		return new FormGroup<GetRunTaskRequestFormProperties>({
		});

	}

	export interface GetSequenceStoreRequest {
	}
	export interface GetSequenceStoreRequestFormProperties {
	}
	export function CreateGetSequenceStoreRequestFormGroup() {
		return new FormGroup<GetSequenceStoreRequestFormProperties>({
		});

	}

	export interface GetVariantImportRequest {
	}
	export interface GetVariantImportRequestFormProperties {
	}
	export function CreateGetVariantImportRequestFormGroup() {
		return new FormGroup<GetVariantImportRequestFormProperties>({
		});

	}

	export interface GetVariantStoreRequest {
	}
	export interface GetVariantStoreRequestFormProperties {
	}
	export function CreateGetVariantStoreRequestFormGroup() {
		return new FormGroup<GetVariantStoreRequestFormProperties>({
		});

	}

	export interface GetWorkflowRequest {
	}
	export interface GetWorkflowRequestFormProperties {
	}
	export function CreateGetWorkflowRequestFormGroup() {
		return new FormGroup<GetWorkflowRequestFormProperties>({
		});

	}


	/** A filter for import read set jobs. */
	export interface ImportReadSetFilter {
		status?: ReadSetActivationJobStatus;
		createdAfter?: Date;
		createdBefore?: Date;
	}

	/** A filter for import read set jobs. */
	export interface ImportReadSetFilterFormProperties {
		status: FormControl<ReadSetActivationJobStatus | null | undefined>,
		createdAfter: FormControl<Date | null | undefined>,
		createdBefore: FormControl<Date | null | undefined>,
	}
	export function CreateImportReadSetFilterFormGroup() {
		return new FormGroup<ImportReadSetFilterFormProperties>({
			status: new FormControl<ReadSetActivationJobStatus | null | undefined>(undefined),
			createdAfter: new FormControl<Date | null | undefined>(undefined),
			createdBefore: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ReadSetImportJobItemStatus { NOT_STARTED = 0, IN_PROGRESS = 1, FINISHED = 2, FAILED = 3 }


	/** A filter for import references. */
	export interface ImportReferenceFilter {
		status?: ReadSetActivationJobStatus;
		createdAfter?: Date;
		createdBefore?: Date;
	}

	/** A filter for import references. */
	export interface ImportReferenceFilterFormProperties {
		status: FormControl<ReadSetActivationJobStatus | null | undefined>,
		createdAfter: FormControl<Date | null | undefined>,
		createdBefore: FormControl<Date | null | undefined>,
	}
	export function CreateImportReferenceFilterFormGroup() {
		return new FormGroup<ImportReferenceFilterFormProperties>({
			status: new FormControl<ReadSetActivationJobStatus | null | undefined>(undefined),
			createdAfter: new FormControl<Date | null | undefined>(undefined),
			createdBefore: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ReferenceImportJobItemStatus { NOT_STARTED = 0, IN_PROGRESS = 1, FINISHED = 2, FAILED = 3 }


	/** A filter for annotation import jobs. */
	export interface ListAnnotationImportJobsFilter {
		status?: JobStatus;
		storeName?: string;
	}

	/** A filter for annotation import jobs. */
	export interface ListAnnotationImportJobsFilterFormProperties {
		status: FormControl<JobStatus | null | undefined>,
		storeName: FormControl<string | null | undefined>,
	}
	export function CreateListAnnotationImportJobsFilterFormGroup() {
		return new FormGroup<ListAnnotationImportJobsFilterFormProperties>({
			status: new FormControl<JobStatus | null | undefined>(undefined),
			storeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAnnotationImportJobsRequest {
		ids?: Array<string>;
		filter?: ListAnnotationImportJobsFilter;
	}
	export interface ListAnnotationImportJobsRequestFormProperties {
	}
	export function CreateListAnnotationImportJobsRequestFormGroup() {
		return new FormGroup<ListAnnotationImportJobsRequestFormProperties>({
		});

	}


	/** A filter for annotation stores. */
	export interface ListAnnotationStoresFilter {
		status?: StoreStatus;
	}

	/** A filter for annotation stores. */
	export interface ListAnnotationStoresFilterFormProperties {
		status: FormControl<StoreStatus | null | undefined>,
	}
	export function CreateListAnnotationStoresFilterFormGroup() {
		return new FormGroup<ListAnnotationStoresFilterFormProperties>({
			status: new FormControl<StoreStatus | null | undefined>(undefined),
		});

	}

	export interface ListAnnotationStoresRequest {
		ids?: Array<string>;
		filter?: ListAnnotationStoresFilter;
	}
	export interface ListAnnotationStoresRequestFormProperties {
	}
	export function CreateListAnnotationStoresRequestFormGroup() {
		return new FormGroup<ListAnnotationStoresRequestFormProperties>({
		});

	}

	export interface ListMultipartReadSetUploadsRequest {
	}
	export interface ListMultipartReadSetUploadsRequestFormProperties {
	}
	export function CreateListMultipartReadSetUploadsRequestFormGroup() {
		return new FormGroup<ListMultipartReadSetUploadsRequestFormProperties>({
		});

	}

	export interface ListReadSetActivationJobsRequest {
		filter?: ActivateReadSetFilter;
	}
	export interface ListReadSetActivationJobsRequestFormProperties {
	}
	export function CreateListReadSetActivationJobsRequestFormGroup() {
		return new FormGroup<ListReadSetActivationJobsRequestFormProperties>({
		});

	}

	export interface ListReadSetExportJobsRequest {
		filter?: ExportReadSetFilter;
	}
	export interface ListReadSetExportJobsRequestFormProperties {
	}
	export function CreateListReadSetExportJobsRequestFormGroup() {
		return new FormGroup<ListReadSetExportJobsRequestFormProperties>({
		});

	}

	export interface ListReadSetImportJobsRequest {
		filter?: ImportReadSetFilter;
	}
	export interface ListReadSetImportJobsRequestFormProperties {
	}
	export function CreateListReadSetImportJobsRequestFormGroup() {
		return new FormGroup<ListReadSetImportJobsRequestFormProperties>({
		});

	}


	/**  Filter settings that select for read set upload parts of interest.  */
	export interface ReadSetUploadPartListFilter {
		createdAfter?: Date;
		createdBefore?: Date;
	}

	/**  Filter settings that select for read set upload parts of interest.  */
	export interface ReadSetUploadPartListFilterFormProperties {
		createdAfter: FormControl<Date | null | undefined>,
		createdBefore: FormControl<Date | null | undefined>,
	}
	export function CreateReadSetUploadPartListFilterFormGroup() {
		return new FormGroup<ReadSetUploadPartListFilterFormProperties>({
			createdAfter: new FormControl<Date | null | undefined>(undefined),
			createdBefore: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListReadSetUploadPartsRequest {

		/** Required */
		partSource: ReadSetPartSource;
		filter?: ReadSetUploadPartListFilter;
	}
	export interface ListReadSetUploadPartsRequestFormProperties {

		/** Required */
		partSource: FormControl<ReadSetPartSource | null | undefined>,
	}
	export function CreateListReadSetUploadPartsRequestFormGroup() {
		return new FormGroup<ListReadSetUploadPartsRequestFormProperties>({
			partSource: new FormControl<ReadSetPartSource | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A filter for read sets. */
	export interface ReadSetFilter {
		name?: string;
		status?: ReadSetStatus;
		referenceArn?: string;
		createdAfter?: Date;
		createdBefore?: Date;
		sampleId?: string;
		subjectId?: string;
		generatedFrom?: string;
		creationType?: CreationType;
	}

	/** A filter for read sets. */
	export interface ReadSetFilterFormProperties {
		name: FormControl<string | null | undefined>,
		status: FormControl<ReadSetStatus | null | undefined>,
		referenceArn: FormControl<string | null | undefined>,
		createdAfter: FormControl<Date | null | undefined>,
		createdBefore: FormControl<Date | null | undefined>,
		sampleId: FormControl<string | null | undefined>,
		subjectId: FormControl<string | null | undefined>,
		generatedFrom: FormControl<string | null | undefined>,
		creationType: FormControl<CreationType | null | undefined>,
	}
	export function CreateReadSetFilterFormGroup() {
		return new FormGroup<ReadSetFilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadSetStatus | null | undefined>(undefined),
			referenceArn: new FormControl<string | null | undefined>(undefined),
			createdAfter: new FormControl<Date | null | undefined>(undefined),
			createdBefore: new FormControl<Date | null | undefined>(undefined),
			sampleId: new FormControl<string | null | undefined>(undefined),
			subjectId: new FormControl<string | null | undefined>(undefined),
			generatedFrom: new FormControl<string | null | undefined>(undefined),
			creationType: new FormControl<CreationType | null | undefined>(undefined),
		});

	}

	export interface ListReadSetsRequest {
		filter?: ReadSetFilter;
	}
	export interface ListReadSetsRequestFormProperties {
	}
	export function CreateListReadSetsRequestFormGroup() {
		return new FormGroup<ListReadSetsRequestFormProperties>({
		});

	}

	export interface ListReferenceImportJobsRequest {
		filter?: ImportReferenceFilter;
	}
	export interface ListReferenceImportJobsRequestFormProperties {
	}
	export function CreateListReferenceImportJobsRequestFormGroup() {
		return new FormGroup<ListReferenceImportJobsRequestFormProperties>({
		});

	}


	/** A filter for reference stores. */
	export interface ReferenceStoreFilter {
		name?: string;
		createdAfter?: Date;
		createdBefore?: Date;
	}

	/** A filter for reference stores. */
	export interface ReferenceStoreFilterFormProperties {
		name: FormControl<string | null | undefined>,
		createdAfter: FormControl<Date | null | undefined>,
		createdBefore: FormControl<Date | null | undefined>,
	}
	export function CreateReferenceStoreFilterFormGroup() {
		return new FormGroup<ReferenceStoreFilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			createdAfter: new FormControl<Date | null | undefined>(undefined),
			createdBefore: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListReferenceStoresRequest {
		filter?: ReferenceStoreFilter;
	}
	export interface ListReferenceStoresRequestFormProperties {
	}
	export function CreateListReferenceStoresRequestFormGroup() {
		return new FormGroup<ListReferenceStoresRequestFormProperties>({
		});

	}


	/** A filter for references. */
	export interface ReferenceFilter {
		name?: string;
		md5?: string;
		createdAfter?: Date;
		createdBefore?: Date;
	}

	/** A filter for references. */
	export interface ReferenceFilterFormProperties {
		name: FormControl<string | null | undefined>,
		md5: FormControl<string | null | undefined>,
		createdAfter: FormControl<Date | null | undefined>,
		createdBefore: FormControl<Date | null | undefined>,
	}
	export function CreateReferenceFilterFormGroup() {
		return new FormGroup<ReferenceFilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			md5: new FormControl<string | null | undefined>(undefined),
			createdAfter: new FormControl<Date | null | undefined>(undefined),
			createdBefore: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListReferencesRequest {
		filter?: ReferenceFilter;
	}
	export interface ListReferencesRequestFormProperties {
	}
	export function CreateListReferencesRequestFormGroup() {
		return new FormGroup<ListReferencesRequestFormProperties>({
		});

	}

	export interface ListRunGroupsRequest {
	}
	export interface ListRunGroupsRequestFormProperties {
	}
	export function CreateListRunGroupsRequestFormGroup() {
		return new FormGroup<ListRunGroupsRequestFormProperties>({
		});

	}

	export interface ListRunTasksRequest {
	}
	export interface ListRunTasksRequestFormProperties {
	}
	export function CreateListRunTasksRequestFormGroup() {
		return new FormGroup<ListRunTasksRequestFormProperties>({
		});

	}

	export interface ListRunsRequest {
	}
	export interface ListRunsRequestFormProperties {
	}
	export function CreateListRunsRequestFormGroup() {
		return new FormGroup<ListRunsRequestFormProperties>({
		});

	}


	/** A filter for a sequence store. */
	export interface SequenceStoreFilter {
		name?: string;
		createdAfter?: Date;
		createdBefore?: Date;
	}

	/** A filter for a sequence store. */
	export interface SequenceStoreFilterFormProperties {
		name: FormControl<string | null | undefined>,
		createdAfter: FormControl<Date | null | undefined>,
		createdBefore: FormControl<Date | null | undefined>,
	}
	export function CreateSequenceStoreFilterFormGroup() {
		return new FormGroup<SequenceStoreFilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			createdAfter: new FormControl<Date | null | undefined>(undefined),
			createdBefore: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListSequenceStoresRequest {
		filter?: SequenceStoreFilter;
	}
	export interface ListSequenceStoresRequestFormProperties {
	}
	export function CreateListSequenceStoresRequestFormGroup() {
		return new FormGroup<ListSequenceStoresRequestFormProperties>({
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


	/** A filter for variant import jobs. */
	export interface ListVariantImportJobsFilter {
		status?: JobStatus;
		storeName?: string;
	}

	/** A filter for variant import jobs. */
	export interface ListVariantImportJobsFilterFormProperties {
		status: FormControl<JobStatus | null | undefined>,
		storeName: FormControl<string | null | undefined>,
	}
	export function CreateListVariantImportJobsFilterFormGroup() {
		return new FormGroup<ListVariantImportJobsFilterFormProperties>({
			status: new FormControl<JobStatus | null | undefined>(undefined),
			storeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVariantImportJobsRequest {
		ids?: Array<string>;
		filter?: ListVariantImportJobsFilter;
	}
	export interface ListVariantImportJobsRequestFormProperties {
	}
	export function CreateListVariantImportJobsRequestFormGroup() {
		return new FormGroup<ListVariantImportJobsRequestFormProperties>({
		});

	}


	/** A filter for variant stores. */
	export interface ListVariantStoresFilter {
		status?: StoreStatus;
	}

	/** A filter for variant stores. */
	export interface ListVariantStoresFilterFormProperties {
		status: FormControl<StoreStatus | null | undefined>,
	}
	export function CreateListVariantStoresFilterFormGroup() {
		return new FormGroup<ListVariantStoresFilterFormProperties>({
			status: new FormControl<StoreStatus | null | undefined>(undefined),
		});

	}

	export interface ListVariantStoresRequest {
		ids?: Array<string>;
		filter?: ListVariantStoresFilter;
	}
	export interface ListVariantStoresRequestFormProperties {
	}
	export function CreateListVariantStoresRequestFormGroup() {
		return new FormGroup<ListVariantStoresRequestFormProperties>({
		});

	}

	export interface ListWorkflowsRequest {
	}
	export interface ListWorkflowsRequestFormProperties {
	}
	export function CreateListWorkflowsRequestFormGroup() {
		return new FormGroup<ListWorkflowsRequestFormProperties>({
		});

	}

	export enum SchemaValueType { LONG = 0, INT = 1, STRING = 2, FLOAT = 3, DOUBLE = 4, BOOLEAN = 5 }

	export interface StartAnnotationImportRequest {

		/** Required */
		destinationName: string;

		/** Required */
		roleArn: string;

		/** Required */
		items: Array<AnnotationImportItemSource>;
		formatOptions?: FormatOptions;
		runLeftNormalization?: boolean | null;
		annotationFields?: AnnotationFieldMap;
	}
	export interface StartAnnotationImportRequestFormProperties {

		/** Required */
		destinationName: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		runLeftNormalization: FormControl<boolean | null | undefined>,
	}
	export function CreateStartAnnotationImportRequestFormGroup() {
		return new FormGroup<StartAnnotationImportRequestFormProperties>({
			destinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runLeftNormalization: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StartReadSetActivationJobRequest {
		clientToken?: string;

		/** Required */
		sources: Array<StartReadSetActivationJobSourceItem>;
	}
	export interface StartReadSetActivationJobRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartReadSetActivationJobRequestFormGroup() {
		return new FormGroup<StartReadSetActivationJobRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartReadSetExportJobRequest {

		/** Required */
		destination: string;

		/** Required */
		roleArn: string;
		clientToken?: string;

		/** Required */
		sources: Array<ExportReadSet>;
	}
	export interface StartReadSetExportJobRequestFormProperties {

		/** Required */
		destination: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartReadSetExportJobRequestFormGroup() {
		return new FormGroup<StartReadSetExportJobRequestFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartReadSetImportJobRequest {

		/** Required */
		roleArn: string;
		clientToken?: string;

		/** Required */
		sources: Array<StartReadSetImportJobSourceItem>;
	}
	export interface StartReadSetImportJobRequestFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartReadSetImportJobRequestFormGroup() {
		return new FormGroup<StartReadSetImportJobRequestFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartReferenceImportJobRequest {

		/** Required */
		roleArn: string;
		clientToken?: string;

		/** Required */
		sources: Array<StartReferenceImportJobSourceItem>;
	}
	export interface StartReferenceImportJobRequestFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartReferenceImportJobRequestFormGroup() {
		return new FormGroup<StartReferenceImportJobRequestFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartRunRequest {
		workflowId?: string;
		workflowType?: WorkflowType;
		runId?: string;

		/** Required */
		roleArn: string;
		name?: string;
		runGroupId?: string;
		priority?: number | null;
		parameters?: RunParameters;
		storageCapacity?: number | null;
		outputUri?: string;
		logLevel?: RunLogLevel;
		tags?: TagMap;

		/** Required */
		requestId: string;
	}
	export interface StartRunRequestFormProperties {
		workflowId: FormControl<string | null | undefined>,
		workflowType: FormControl<WorkflowType | null | undefined>,
		runId: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		runGroupId: FormControl<string | null | undefined>,
		priority: FormControl<number | null | undefined>,
		storageCapacity: FormControl<number | null | undefined>,
		outputUri: FormControl<string | null | undefined>,
		logLevel: FormControl<RunLogLevel | null | undefined>,

		/** Required */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateStartRunRequestFormGroup() {
		return new FormGroup<StartRunRequestFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined),
			workflowType: new FormControl<WorkflowType | null | undefined>(undefined),
			runId: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			runGroupId: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			storageCapacity: new FormControl<number | null | undefined>(undefined),
			outputUri: new FormControl<string | null | undefined>(undefined),
			logLevel: new FormControl<RunLogLevel | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartVariantImportRequest {

		/** Required */
		destinationName: string;

		/** Required */
		roleArn: string;

		/** Required */
		items: Array<VariantImportItemSource>;
		runLeftNormalization?: boolean | null;
		annotationFields?: AnnotationFieldMap;
	}
	export interface StartVariantImportRequestFormProperties {

		/** Required */
		destinationName: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		runLeftNormalization: FormControl<boolean | null | undefined>,
	}
	export function CreateStartVariantImportRequestFormGroup() {
		return new FormGroup<StartVariantImportRequestFormProperties>({
			destinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runLeftNormalization: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequestTagsMap {
	}
	export interface TagResourceRequestTagsMapFormProperties {
	}
	export function CreateTagResourceRequestTagsMapFormGroup() {
		return new FormGroup<TagResourceRequestTagsMapFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: TagResourceRequestTagsMap;
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

	export interface UpdateAnnotationStoreRequest {
		description?: string;
	}
	export interface UpdateAnnotationStoreRequestFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAnnotationStoreRequestFormGroup() {
		return new FormGroup<UpdateAnnotationStoreRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRunGroupRequest {
		name?: string;
		maxCpus?: number | null;
		maxRuns?: number | null;
		maxDuration?: number | null;
		maxGpus?: number | null;
	}
	export interface UpdateRunGroupRequestFormProperties {
		name: FormControl<string | null | undefined>,
		maxCpus: FormControl<number | null | undefined>,
		maxRuns: FormControl<number | null | undefined>,
		maxDuration: FormControl<number | null | undefined>,
		maxGpus: FormControl<number | null | undefined>,
	}
	export function CreateUpdateRunGroupRequestFormGroup() {
		return new FormGroup<UpdateRunGroupRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			maxCpus: new FormControl<number | null | undefined>(undefined),
			maxRuns: new FormControl<number | null | undefined>(undefined),
			maxDuration: new FormControl<number | null | undefined>(undefined),
			maxGpus: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateVariantStoreRequest {
		description?: string;
	}
	export interface UpdateVariantStoreRequestFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVariantStoreRequestFormGroup() {
		return new FormGroup<UpdateVariantStoreRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWorkflowRequest {
		name?: string;
		description?: string;
	}
	export interface UpdateWorkflowRequestFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkflowRequestFormGroup() {
		return new FormGroup<UpdateWorkflowRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UploadReadSetPartRequest {

		/** Required */
		payload: string;
	}
	export interface UploadReadSetPartRequestFormProperties {

		/** Required */
		payload: FormControl<string | null | undefined>,
	}
	export function CreateUploadReadSetPartRequestFormGroup() {
		return new FormGroup<UploadReadSetPartRequestFormProperties>({
			payload: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Stops a multipart upload.
		 * Delete sequencestore/{sequenceStoreId}/upload/{uploadId}/abort
		 * @param {string} sequenceStoreId  The sequence store ID for the store involved in the multipart upload. 
		 * @param {string} uploadId  The ID for the multipart upload. 
		 * @return {AbortMultipartReadSetUploadResponse} Success
		 */
		AbortMultipartReadSetUpload(sequenceStoreId: string, uploadId: string): Observable<AbortMultipartReadSetUploadResponse> {
			return this.http.delete<AbortMultipartReadSetUploadResponse>(this.baseUri + 'sequencestore/' + (sequenceStoreId == null ? '' : encodeURIComponent(sequenceStoreId)) + '/upload/' + (uploadId == null ? '' : encodeURIComponent(uploadId)) + '/abort', {});
		}

		/**
		 * Deletes one or more read sets.
		 * Post sequencestore/{sequenceStoreId}/readset/batch/delete
		 * @param {string} sequenceStoreId The read sets' sequence store ID.
		 * @return {BatchDeleteReadSetResponse} Success
		 */
		BatchDeleteReadSet(sequenceStoreId: string, requestBody: BatchDeleteReadSetPostBody): Observable<BatchDeleteReadSetResponse> {
			return this.http.post<BatchDeleteReadSetResponse>(this.baseUri + 'sequencestore/' + (sequenceStoreId == null ? '' : encodeURIComponent(sequenceStoreId)) + '/readset/batch/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels an annotation import job.
		 * Delete import/annotation/{jobId}
		 * @param {string} jobId The job's ID.
		 * @return {CancelAnnotationImportResponse} Success
		 */
		CancelAnnotationImportJob(jobId: string): Observable<CancelAnnotationImportResponse> {
			return this.http.delete<CancelAnnotationImportResponse>(this.baseUri + 'import/annotation/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * Gets information about an annotation import job.
		 * Get import/annotation/{jobId}
		 * @param {string} jobId The job's ID.
		 * @return {GetAnnotationImportResponse} Success
		 */
		GetAnnotationImportJob(jobId: string): Observable<GetAnnotationImportResponse> {
			return this.http.get<GetAnnotationImportResponse>(this.baseUri + 'import/annotation/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * Cancels a run.
		 * Post run/{id}/cancel
		 * @param {string} id The run's ID.
		 * @return {void} 
		 */
		CancelRun(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'run/' + (id == null ? '' : encodeURIComponent(id)) + '/cancel', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels a variant import job.
		 * Delete import/variant/{jobId}
		 * @param {string} jobId The job's ID.
		 * @return {CancelVariantImportResponse} Success
		 */
		CancelVariantImportJob(jobId: string): Observable<CancelVariantImportResponse> {
			return this.http.delete<CancelVariantImportResponse>(this.baseUri + 'import/variant/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * Gets information about a variant import job.
		 * Get import/variant/{jobId}
		 * @param {string} jobId The job's ID.
		 * @return {GetVariantImportResponse} Success
		 */
		GetVariantImportJob(jobId: string): Observable<GetVariantImportResponse> {
			return this.http.get<GetVariantImportResponse>(this.baseUri + 'import/variant/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * Concludes a multipart upload once you have uploaded all the components.
		 * Post sequencestore/{sequenceStoreId}/upload/{uploadId}/complete
		 * @param {string} sequenceStoreId  The sequence store ID for the store involved in the multipart upload. 
		 * @param {string} uploadId  The ID for the multipart upload. 
		 * @return {CompleteMultipartReadSetUploadResponse} Success
		 */
		CompleteMultipartReadSetUpload(sequenceStoreId: string, uploadId: string, requestBody: CompleteMultipartReadSetUploadPostBody): Observable<CompleteMultipartReadSetUploadResponse> {
			return this.http.post<CompleteMultipartReadSetUploadResponse>(this.baseUri + 'sequencestore/' + (sequenceStoreId == null ? '' : encodeURIComponent(sequenceStoreId)) + '/upload/' + (uploadId == null ? '' : encodeURIComponent(uploadId)) + '/complete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an annotation store.
		 * Post annotationStore
		 * @return {CreateAnnotationStoreResponse} Success
		 */
		CreateAnnotationStore(requestBody: CreateAnnotationStorePostBody): Observable<CreateAnnotationStoreResponse> {
			return this.http.post<CreateAnnotationStoreResponse>(this.baseUri + 'annotationStore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Begins a multipart read set upload.
		 * Post sequencestore/{sequenceStoreId}/upload
		 * @param {string} sequenceStoreId  The sequence store ID for the store that is the destination of the multipart uploads. 
		 * @return {CreateMultipartReadSetUploadResponse} Success
		 */
		CreateMultipartReadSetUpload(sequenceStoreId: string, requestBody: CreateMultipartReadSetUploadPostBody): Observable<CreateMultipartReadSetUploadResponse> {
			return this.http.post<CreateMultipartReadSetUploadResponse>(this.baseUri + 'sequencestore/' + (sequenceStoreId == null ? '' : encodeURIComponent(sequenceStoreId)) + '/upload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a reference store.
		 * Post referencestore
		 * @return {CreateReferenceStoreResponse} Success
		 */
		CreateReferenceStore(requestBody: CreateReferenceStorePostBody): Observable<CreateReferenceStoreResponse> {
			return this.http.post<CreateReferenceStoreResponse>(this.baseUri + 'referencestore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a run group.
		 * Post runGroup
		 * @return {void} 
		 */
		CreateRunGroup(requestBody: CreateRunGroupPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'runGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of run groups.
		 * Get runGroup
		 * @param {string} name The run groups' name.
		 * @param {string} startingToken Specify the pagination token from a previous request to retrieve the next page of results.
		 * @param {number} maxResults The maximum number of run groups to return in one page of results.
		 * @return {ListRunGroupsResponse} Success
		 */
		ListRunGroups(name: string | null | undefined, startingToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListRunGroupsResponse> {
			return this.http.get<ListRunGroupsResponse>(this.baseUri + 'runGroup?name=' + (name == null ? '' : encodeURIComponent(name)) + '&startingToken=' + (startingToken == null ? '' : encodeURIComponent(startingToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a sequence store.
		 * Post sequencestore
		 * @return {CreateSequenceStoreResponse} Success
		 */
		CreateSequenceStore(requestBody: CreateSequenceStorePostBody): Observable<CreateSequenceStoreResponse> {
			return this.http.post<CreateSequenceStoreResponse>(this.baseUri + 'sequencestore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a variant store.
		 * Post variantStore
		 * @return {CreateVariantStoreResponse} Success
		 */
		CreateVariantStore(requestBody: CreateVariantStorePostBody): Observable<CreateVariantStoreResponse> {
			return this.http.post<CreateVariantStoreResponse>(this.baseUri + 'variantStore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a workflow.
		 * Post workflow
		 * @return {void} 
		 */
		CreateWorkflow(requestBody: CreateWorkflowPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'workflow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of workflows.
		 * Get workflow
		 * @param {WorkflowType} type The workflows' type.
		 * @param {string} name The workflows' name.
		 * @param {string} startingToken Specify the pagination token from a previous request to retrieve the next page of results.
		 * @param {number} maxResults The maximum number of workflows to return in one page of results.
		 * @return {ListWorkflowsResponse} Success
		 */
		ListWorkflows(type: WorkflowType | null | undefined, name: string | null | undefined, startingToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListWorkflowsResponse> {
			return this.http.get<ListWorkflowsResponse>(this.baseUri + 'workflow?type=' + type + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&startingToken=' + (startingToken == null ? '' : encodeURIComponent(startingToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Deletes an annotation store.
		 * Delete annotationStore/{name}
		 * @param {string} name The store's name.
		 * @param {boolean} force Whether to force deletion.
		 * @return {DeleteAnnotationStoreResponse} Success
		 */
		DeleteAnnotationStore(name: string, force: boolean | null | undefined): Observable<DeleteAnnotationStoreResponse> {
			return this.http.delete<DeleteAnnotationStoreResponse>(this.baseUri + 'annotationStore/' + (name == null ? '' : encodeURIComponent(name)) + '&force=' + force, {});
		}

		/**
		 * Gets information about an annotation store.
		 * Get annotationStore/{name}
		 * @param {string} name The store's name.
		 * @return {GetAnnotationStoreResponse} Success
		 */
		GetAnnotationStore(name: string): Observable<GetAnnotationStoreResponse> {
			return this.http.get<GetAnnotationStoreResponse>(this.baseUri + 'annotationStore/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates an annotation store.
		 * Post annotationStore/{name}
		 * @param {string} name A name for the store.
		 * @return {UpdateAnnotationStoreResponse} Success
		 */
		UpdateAnnotationStore(name: string, requestBody: UpdateAnnotationStorePostBody): Observable<UpdateAnnotationStoreResponse> {
			return this.http.post<UpdateAnnotationStoreResponse>(this.baseUri + 'annotationStore/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a genome reference.
		 * Delete referencestore/{referenceStoreId}/reference/{id}
		 * @param {string} id The reference's ID.
		 * @param {string} referenceStoreId The reference's store ID.
		 * @return {DeleteReferenceResponse} Success
		 */
		DeleteReference(id: string, referenceStoreId: string): Observable<DeleteReferenceResponse> {
			return this.http.delete<DeleteReferenceResponse>(this.baseUri + 'referencestore/' + (referenceStoreId == null ? '' : encodeURIComponent(referenceStoreId)) + '/reference/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Deletes a genome reference store.
		 * Delete referencestore/{id}
		 * @param {string} id The store's ID.
		 * @return {DeleteReferenceStoreResponse} Success
		 */
		DeleteReferenceStore(id: string): Observable<DeleteReferenceStoreResponse> {
			return this.http.delete<DeleteReferenceStoreResponse>(this.baseUri + 'referencestore/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets information about a reference store.
		 * Get referencestore/{id}
		 * @param {string} id The store's ID.
		 * @return {GetReferenceStoreResponse} Success
		 */
		GetReferenceStore(id: string): Observable<GetReferenceStoreResponse> {
			return this.http.get<GetReferenceStoreResponse>(this.baseUri + 'referencestore/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Deletes a workflow run.
		 * Delete run/{id}
		 * @param {string} id The run's ID.
		 * @return {void} 
		 */
		DeleteRun(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'run/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a workflow run.
		 * Get run/{id}
		 * @param {string} id The run's ID.
		 * @param {Array<RunExport>} _export The run's export format.
		 * @return {GetRunResponse} Success
		 */
		GetRun(id: string, _export: Array<RunExport> | null | undefined): Observable<GetRunResponse> {
			return this.http.get<GetRunResponse>(this.baseUri + 'run/' + (id == null ? '' : encodeURIComponent(id)) + '&' + _export?.map(z => `export=${z}`).join('&'), {});
		}

		/**
		 * Deletes a workflow run group.
		 * Delete runGroup/{id}
		 * @param {string} id The run group's ID.
		 * @return {void} 
		 */
		DeleteRunGroup(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'runGroup/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a workflow run group.
		 * Get runGroup/{id}
		 * @param {string} id The group's ID.
		 * @return {GetRunGroupResponse} Success
		 */
		GetRunGroup(id: string): Observable<GetRunGroupResponse> {
			return this.http.get<GetRunGroupResponse>(this.baseUri + 'runGroup/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Updates a run group.
		 * Post runGroup/{id}
		 * @param {string} id The group's ID.
		 * @return {void} 
		 */
		UpdateRunGroup(id: string, requestBody: UpdateRunGroupPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'runGroup/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a sequence store.
		 * Delete sequencestore/{id}
		 * @param {string} id The sequence store's ID.
		 * @return {DeleteSequenceStoreResponse} Success
		 */
		DeleteSequenceStore(id: string): Observable<DeleteSequenceStoreResponse> {
			return this.http.delete<DeleteSequenceStoreResponse>(this.baseUri + 'sequencestore/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets information about a sequence store.
		 * Get sequencestore/{id}
		 * @param {string} id The store's ID.
		 * @return {GetSequenceStoreResponse} Success
		 */
		GetSequenceStore(id: string): Observable<GetSequenceStoreResponse> {
			return this.http.get<GetSequenceStoreResponse>(this.baseUri + 'sequencestore/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Deletes a variant store.
		 * Delete variantStore/{name}
		 * @param {string} name The store's name.
		 * @param {boolean} force Whether to force deletion.
		 * @return {DeleteVariantStoreResponse} Success
		 */
		DeleteVariantStore(name: string, force: boolean | null | undefined): Observable<DeleteVariantStoreResponse> {
			return this.http.delete<DeleteVariantStoreResponse>(this.baseUri + 'variantStore/' + (name == null ? '' : encodeURIComponent(name)) + '&force=' + force, {});
		}

		/**
		 * Gets information about a variant store.
		 * Get variantStore/{name}
		 * @param {string} name The store's name.
		 * @return {GetVariantStoreResponse} Success
		 */
		GetVariantStore(name: string): Observable<GetVariantStoreResponse> {
			return this.http.get<GetVariantStoreResponse>(this.baseUri + 'variantStore/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a variant store.
		 * Post variantStore/{name}
		 * @param {string} name A name for the store.
		 * @return {UpdateVariantStoreResponse} Success
		 */
		UpdateVariantStore(name: string, requestBody: UpdateVariantStorePostBody): Observable<UpdateVariantStoreResponse> {
			return this.http.post<UpdateVariantStoreResponse>(this.baseUri + 'variantStore/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a workflow.
		 * Delete workflow/{id}
		 * @param {string} id The workflow's ID.
		 * @return {void} 
		 */
		DeleteWorkflow(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'workflow/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a workflow.
		 * Get workflow/{id}
		 * @param {string} id The workflow's ID.
		 * @param {WorkflowType} type The workflow's type.
		 * @param {Array<WorkflowExport>} _export The export format for the workflow.
		 * @return {GetWorkflowResponse} Success
		 */
		GetWorkflow(id: string, type: WorkflowType | null | undefined, _export: Array<WorkflowExport> | null | undefined): Observable<GetWorkflowResponse> {
			return this.http.get<GetWorkflowResponse>(this.baseUri + 'workflow/' + (id == null ? '' : encodeURIComponent(id)) + '&type=' + type + '&' + _export?.map(z => `export=${z}`).join('&'), {});
		}

		/**
		 * Updates a workflow.
		 * Post workflow/{id}
		 * @param {string} id The workflow's ID.
		 * @return {void} 
		 */
		UpdateWorkflow(id: string, requestBody: UpdateWorkflowPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'workflow/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a file from a read set.
		 * Get sequencestore/{sequenceStoreId}/readset/{id}#partNumber
		 * @param {string} id The read set's ID.
		 * @param {string} sequenceStoreId The read set's sequence store ID.
		 * @param {ReadSetFile} file The file to retrieve.
		 * @param {number} partNumber The part number to retrieve.
		 * @return {GetReadSetResponse} Success
		 */
		GetReadSet(id: string, sequenceStoreId: string, file: ReadSetFile | null | undefined, partNumber: number): Observable<GetReadSetResponse> {
			return this.http.get<GetReadSetResponse>(this.baseUri + 'sequencestore/' + (sequenceStoreId == null ? '' : encodeURIComponent(sequenceStoreId)) + '/readset/' + (id == null ? '' : encodeURIComponent(id)) + '#partNumber&file=' + file + '&partNumber=' + partNumber, {});
		}

		/**
		 * Gets information about a read set activation job.
		 * Get sequencestore/{sequenceStoreId}/activationjob/{id}
		 * @param {string} id The job's ID.
		 * @param {string} sequenceStoreId The job's sequence store ID.
		 * @return {GetReadSetActivationJobResponse} Success
		 */
		GetReadSetActivationJob(id: string, sequenceStoreId: string): Observable<GetReadSetActivationJobResponse> {
			return this.http.get<GetReadSetActivationJobResponse>(this.baseUri + 'sequencestore/' + (sequenceStoreId == null ? '' : encodeURIComponent(sequenceStoreId)) + '/activationjob/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets information about a read set export job.
		 * Get sequencestore/{sequenceStoreId}/exportjob/{id}
		 * @param {string} sequenceStoreId The job's sequence store ID.
		 * @param {string} id The job's ID.
		 * @return {GetReadSetExportJobResponse} Success
		 */
		GetReadSetExportJob(sequenceStoreId: string, id: string): Observable<GetReadSetExportJobResponse> {
			return this.http.get<GetReadSetExportJobResponse>(this.baseUri + 'sequencestore/' + (sequenceStoreId == null ? '' : encodeURIComponent(sequenceStoreId)) + '/exportjob/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets information about a read set import job.
		 * Get sequencestore/{sequenceStoreId}/importjob/{id}
		 * @param {string} id The job's ID.
		 * @param {string} sequenceStoreId The job's sequence store ID.
		 * @return {GetReadSetImportJobResponse} Success
		 */
		GetReadSetImportJob(id: string, sequenceStoreId: string): Observable<GetReadSetImportJobResponse> {
			return this.http.get<GetReadSetImportJobResponse>(this.baseUri + 'sequencestore/' + (sequenceStoreId == null ? '' : encodeURIComponent(sequenceStoreId)) + '/importjob/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets details about a read set.
		 * Get sequencestore/{sequenceStoreId}/readset/{id}/metadata
		 * @param {string} id The read set's ID.
		 * @param {string} sequenceStoreId The read set's sequence store ID.
		 * @return {GetReadSetMetadataResponse} Success
		 */
		GetReadSetMetadata(id: string, sequenceStoreId: string): Observable<GetReadSetMetadataResponse> {
			return this.http.get<GetReadSetMetadataResponse>(this.baseUri + 'sequencestore/' + (sequenceStoreId == null ? '' : encodeURIComponent(sequenceStoreId)) + '/readset/' + (id == null ? '' : encodeURIComponent(id)) + '/metadata', {});
		}

		/**
		 * Gets a reference file.
		 * Get referencestore/{referenceStoreId}/reference/{id}#partNumber
		 * @param {string} id The reference's ID.
		 * @param {string} referenceStoreId The reference's store ID.
		 * @param {number} partNumber The part number to retrieve.
		 * @param {ReferenceFile} file The file to retrieve.
		 * @return {GetReferenceResponse} Success
		 */
		GetReference(id: string, referenceStoreId: string, partNumber: number, file: ReferenceFile | null | undefined): Observable<GetReferenceResponse> {
			return this.http.get<GetReferenceResponse>(this.baseUri + 'referencestore/' + (referenceStoreId == null ? '' : encodeURIComponent(referenceStoreId)) + '/reference/' + (id == null ? '' : encodeURIComponent(id)) + '#partNumber&partNumber=' + partNumber + '&file=' + file, {});
		}

		/**
		 * Gets information about a reference import job.
		 * Get referencestore/{referenceStoreId}/importjob/{id}
		 * @param {string} id The job's ID.
		 * @param {string} referenceStoreId The job's reference store ID.
		 * @return {GetReferenceImportJobResponse} Success
		 */
		GetReferenceImportJob(id: string, referenceStoreId: string): Observable<GetReferenceImportJobResponse> {
			return this.http.get<GetReferenceImportJobResponse>(this.baseUri + 'referencestore/' + (referenceStoreId == null ? '' : encodeURIComponent(referenceStoreId)) + '/importjob/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets information about a genome reference's metadata.
		 * Get referencestore/{referenceStoreId}/reference/{id}/metadata
		 * @param {string} id The reference's ID.
		 * @param {string} referenceStoreId The reference's reference store ID.
		 * @return {GetReferenceMetadataResponse} Success
		 */
		GetReferenceMetadata(id: string, referenceStoreId: string): Observable<GetReferenceMetadataResponse> {
			return this.http.get<GetReferenceMetadataResponse>(this.baseUri + 'referencestore/' + (referenceStoreId == null ? '' : encodeURIComponent(referenceStoreId)) + '/reference/' + (id == null ? '' : encodeURIComponent(id)) + '/metadata', {});
		}

		/**
		 * Gets information about a workflow run task.
		 * Get run/{id}/task/{taskId}
		 * @param {string} id The task's ID.
		 * @param {string} taskId The task's ID.
		 * @return {GetRunTaskResponse} Success
		 */
		GetRunTask(id: string, taskId: string): Observable<GetRunTaskResponse> {
			return this.http.get<GetRunTaskResponse>(this.baseUri + 'run/' + (id == null ? '' : encodeURIComponent(id)) + '/task/' + (taskId == null ? '' : encodeURIComponent(taskId)), {});
		}

		/**
		 * Retrieves a list of annotation import jobs.
		 * Post import/annotations
		 * @param {number} maxResults The maximum number of jobs to return in one page of results.
		 * @param {string} nextToken Specify the pagination token from a previous request to retrieve the next page of results.
		 * @return {ListAnnotationImportJobsResponse} Success
		 */
		ListAnnotationImportJobs(maxResults: number | null | undefined, nextToken: string | null | undefined, requestBody: ListAnnotationImportJobsPostBody): Observable<ListAnnotationImportJobsResponse> {
			return this.http.post<ListAnnotationImportJobsResponse>(this.baseUri + 'import/annotations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of annotation stores.
		 * Post annotationStores
		 * @param {number} maxResults The maximum number of stores to return in one page of results.
		 * @param {string} nextToken Specify the pagination token from a previous request to retrieve the next page of results.
		 * @return {ListAnnotationStoresResponse} Success
		 */
		ListAnnotationStores(maxResults: number | null | undefined, nextToken: string | null | undefined, requestBody: ListAnnotationStoresPostBody): Observable<ListAnnotationStoresResponse> {
			return this.http.post<ListAnnotationStoresResponse>(this.baseUri + 'annotationStores?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all multipart read set uploads and their statuses.
		 * Post sequencestore/{sequenceStoreId}/uploads
		 * @param {string} sequenceStoreId  The Sequence Store ID used for the multipart uploads. 
		 * @param {number} maxResults  The maximum number of multipart uploads returned in a page. 
		 * @param {string} nextToken  Next token returned in the response of a previous ListMultipartReadSetUploads call. Used to get the next page of results. 
		 * @return {ListMultipartReadSetUploadsResponse} Success
		 */
		ListMultipartReadSetUploads(sequenceStoreId: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListMultipartReadSetUploadsResponse> {
			return this.http.post<ListMultipartReadSetUploadsResponse>(this.baseUri + 'sequencestore/' + (sequenceStoreId == null ? '' : encodeURIComponent(sequenceStoreId)) + '/uploads&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), null, {});
		}

		/**
		 * Retrieves a list of read set activation jobs.
		 * Post sequencestore/{sequenceStoreId}/activationjobs
		 * @param {string} sequenceStoreId The read set's sequence store ID.
		 * @param {number} maxResults The maximum number of read set activation jobs to return in one page of results.
		 * @param {string} nextToken Specify the pagination token from a previous request to retrieve the next page of results.
		 * @return {ListReadSetActivationJobsResponse} Success
		 */
		ListReadSetActivationJobs(sequenceStoreId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, requestBody: ListReadSetActivationJobsPostBody): Observable<ListReadSetActivationJobsResponse> {
			return this.http.post<ListReadSetActivationJobsResponse>(this.baseUri + 'sequencestore/' + (sequenceStoreId == null ? '' : encodeURIComponent(sequenceStoreId)) + '/activationjobs&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of read set export jobs.
		 * Post sequencestore/{sequenceStoreId}/exportjobs
		 * @param {string} sequenceStoreId The jobs' sequence store ID.
		 * @param {number} maxResults The maximum number of jobs to return in one page of results.
		 * @param {string} nextToken Specify the pagination token from a previous request to retrieve the next page of results.
		 * @return {ListReadSetExportJobsResponse} Success
		 */
		ListReadSetExportJobs(sequenceStoreId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, requestBody: ListReadSetExportJobsPostBody): Observable<ListReadSetExportJobsResponse> {
			return this.http.post<ListReadSetExportJobsResponse>(this.baseUri + 'sequencestore/' + (sequenceStoreId == null ? '' : encodeURIComponent(sequenceStoreId)) + '/exportjobs&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of read set import jobs.
		 * Post sequencestore/{sequenceStoreId}/importjobs
		 * @param {number} maxResults The maximum number of jobs to return in one page of results.
		 * @param {string} nextToken Specify the pagination token from a previous request to retrieve the next page of results.
		 * @param {string} sequenceStoreId The jobs' sequence store ID.
		 * @return {ListReadSetImportJobsResponse} Success
		 */
		ListReadSetImportJobs(maxResults: number | null | undefined, nextToken: string | null | undefined, sequenceStoreId: string, requestBody: ListReadSetImportJobsPostBody): Observable<ListReadSetImportJobsResponse> {
			return this.http.post<ListReadSetImportJobsResponse>(this.baseUri + 'sequencestore/' + (sequenceStoreId == null ? '' : encodeURIComponent(sequenceStoreId)) + '/importjobs?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation will list all parts in a requested multipart upload for a sequence store.
		 * Post sequencestore/{sequenceStoreId}/upload/{uploadId}/parts
		 * @param {string} sequenceStoreId  The Sequence Store ID used for the multipart uploads. 
		 * @param {string} uploadId  The ID for the initiated multipart upload. 
		 * @param {number} maxResults  The maximum number of read set upload parts returned in a page. 
		 * @param {string} nextToken  Next token returned in the response of a previous ListReadSetUploadPartsRequest call. Used to get the next page of results. 
		 * @return {ListReadSetUploadPartsResponse} Success
		 */
		ListReadSetUploadParts(sequenceStoreId: string, uploadId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, requestBody: ListReadSetUploadPartsPostBody): Observable<ListReadSetUploadPartsResponse> {
			return this.http.post<ListReadSetUploadPartsResponse>(this.baseUri + 'sequencestore/' + (sequenceStoreId == null ? '' : encodeURIComponent(sequenceStoreId)) + '/upload/' + (uploadId == null ? '' : encodeURIComponent(uploadId)) + '/parts&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of read sets.
		 * Post sequencestore/{sequenceStoreId}/readsets
		 * @param {string} sequenceStoreId The jobs' sequence store ID.
		 * @param {number} maxResults The maximum number of read sets to return in one page of results.
		 * @param {string} nextToken Specify the pagination token from a previous request to retrieve the next page of results.
		 * @return {ListReadSetsResponse} Success
		 */
		ListReadSets(sequenceStoreId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, requestBody: ListReadSetsPostBody): Observable<ListReadSetsResponse> {
			return this.http.post<ListReadSetsResponse>(this.baseUri + 'sequencestore/' + (sequenceStoreId == null ? '' : encodeURIComponent(sequenceStoreId)) + '/readsets&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of reference import jobs.
		 * Post referencestore/{referenceStoreId}/importjobs
		 * @param {number} maxResults The maximum number of jobs to return in one page of results.
		 * @param {string} nextToken Specify the pagination token from a previous request to retrieve the next page of results.
		 * @param {string} referenceStoreId The job's reference store ID.
		 * @return {ListReferenceImportJobsResponse} Success
		 */
		ListReferenceImportJobs(maxResults: number | null | undefined, nextToken: string | null | undefined, referenceStoreId: string, requestBody: ListReferenceImportJobsPostBody): Observable<ListReferenceImportJobsResponse> {
			return this.http.post<ListReferenceImportJobsResponse>(this.baseUri + 'referencestore/' + (referenceStoreId == null ? '' : encodeURIComponent(referenceStoreId)) + '/importjobs?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of reference stores.
		 * Post referencestores
		 * @param {number} maxResults The maximum number of stores to return in one page of results.
		 * @param {string} nextToken Specify the pagination token from a previous request to retrieve the next page of results.
		 * @return {ListReferenceStoresResponse} Success
		 */
		ListReferenceStores(maxResults: number | null | undefined, nextToken: string | null | undefined, requestBody: ListReferenceStoresPostBody): Observable<ListReferenceStoresResponse> {
			return this.http.post<ListReferenceStoresResponse>(this.baseUri + 'referencestores?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of references.
		 * Post referencestore/{referenceStoreId}/references
		 * @param {string} referenceStoreId The references' reference store ID.
		 * @param {number} maxResults The maximum number of references to return in one page of results.
		 * @param {string} nextToken Specify the pagination token from a previous request to retrieve the next page of results.
		 * @return {ListReferencesResponse} Success
		 */
		ListReferences(referenceStoreId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, requestBody: ListReferencesPostBody): Observable<ListReferencesResponse> {
			return this.http.post<ListReferencesResponse>(this.baseUri + 'referencestore/' + (referenceStoreId == null ? '' : encodeURIComponent(referenceStoreId)) + '/references&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of tasks for a run.
		 * Get run/{id}/task
		 * @param {string} id The run's ID.
		 * @param {TaskStatus} status Filter the list by status.
		 * @param {string} startingToken Specify the pagination token from a previous request to retrieve the next page of results.
		 * @param {number} maxResults The maximum number of run tasks to return in one page of results.
		 * @return {ListRunTasksResponse} Success
		 */
		ListRunTasks(id: string, status: TaskStatus | null | undefined, startingToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListRunTasksResponse> {
			return this.http.get<ListRunTasksResponse>(this.baseUri + 'run/' + (id == null ? '' : encodeURIComponent(id)) + '/task&status=' + status + '&startingToken=' + (startingToken == null ? '' : encodeURIComponent(startingToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Retrieves a list of runs.
		 * Get run
		 * @param {string} name Filter the list by run name.
		 * @param {string} runGroupId Filter the list by run group ID.
		 * @param {string} startingToken Specify the pagination token from a previous request to retrieve the next page of results.
		 * @param {number} maxResults The maximum number of runs to return in one page of results.
		 * @param {RunStatus} status  The status of a run. 
		 * @return {ListRunsResponse} Success
		 */
		ListRuns(name: string | null | undefined, runGroupId: string | null | undefined, startingToken: string | null | undefined, maxResults: number | null | undefined, status: RunStatus | null | undefined): Observable<ListRunsResponse> {
			return this.http.get<ListRunsResponse>(this.baseUri + 'run?name=' + (name == null ? '' : encodeURIComponent(name)) + '&runGroupId=' + (runGroupId == null ? '' : encodeURIComponent(runGroupId)) + '&startingToken=' + (startingToken == null ? '' : encodeURIComponent(startingToken)) + '&maxResults=' + maxResults + '&status=' + status, {});
		}

		/**
		 * Starts a run.
		 * Post run
		 * @return {void} 
		 */
		StartRun(requestBody: StartRunPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'run', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of sequence stores.
		 * Post sequencestores
		 * @param {number} maxResults The maximum number of stores to return in one page of results.
		 * @param {string} nextToken Specify the pagination token from a previous request to retrieve the next page of results.
		 * @return {ListSequenceStoresResponse} Success
		 */
		ListSequenceStores(maxResults: number | null | undefined, nextToken: string | null | undefined, requestBody: ListSequenceStoresPostBody): Observable<ListSequenceStoresResponse> {
			return this.http.post<ListSequenceStoresResponse>(this.baseUri + 'sequencestores?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of tags for a resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The resource's ARN.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Tags a resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The resource's ARN.
		 * @return {void} 
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of variant import jobs.
		 * Post import/variants
		 * @param {number} maxResults The maximum number of import jobs to return in one page of results.
		 * @param {string} nextToken Specify the pagination token from a previous request to retrieve the next page of results.
		 * @return {ListVariantImportJobsResponse} Success
		 */
		ListVariantImportJobs(maxResults: number | null | undefined, nextToken: string | null | undefined, requestBody: ListVariantImportJobsPostBody): Observable<ListVariantImportJobsResponse> {
			return this.http.post<ListVariantImportJobsResponse>(this.baseUri + 'import/variants?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of variant stores.
		 * Post variantStores
		 * @param {number} maxResults The maximum number of stores to return in one page of results.
		 * @param {string} nextToken Specify the pagination token from a previous request to retrieve the next page of results.
		 * @return {ListVariantStoresResponse} Success
		 */
		ListVariantStores(maxResults: number | null | undefined, nextToken: string | null | undefined, requestBody: ListVariantStoresPostBody): Observable<ListVariantStoresResponse> {
			return this.http.post<ListVariantStoresResponse>(this.baseUri + 'variantStores?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an annotation import job.
		 * Post import/annotation
		 * @return {StartAnnotationImportResponse} Success
		 */
		StartAnnotationImportJob(requestBody: StartAnnotationImportJobPostBody): Observable<StartAnnotationImportResponse> {
			return this.http.post<StartAnnotationImportResponse>(this.baseUri + 'import/annotation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Activates an archived read set. To reduce storage charges, Amazon Omics archives unused read sets after 30 days.
		 * Post sequencestore/{sequenceStoreId}/activationjob
		 * @param {string} sequenceStoreId The read set's sequence store ID.
		 * @return {StartReadSetActivationJobResponse} Success
		 */
		StartReadSetActivationJob(sequenceStoreId: string, requestBody: StartReadSetActivationJobPostBody): Observable<StartReadSetActivationJobResponse> {
			return this.http.post<StartReadSetActivationJobResponse>(this.baseUri + 'sequencestore/' + (sequenceStoreId == null ? '' : encodeURIComponent(sequenceStoreId)) + '/activationjob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Exports a read set to Amazon S3.
		 * Post sequencestore/{sequenceStoreId}/exportjob
		 * @param {string} sequenceStoreId The read set's sequence store ID.
		 * @return {StartReadSetExportJobResponse} Success
		 */
		StartReadSetExportJob(sequenceStoreId: string, requestBody: StartReadSetExportJobPostBody): Observable<StartReadSetExportJobResponse> {
			return this.http.post<StartReadSetExportJobResponse>(this.baseUri + 'sequencestore/' + (sequenceStoreId == null ? '' : encodeURIComponent(sequenceStoreId)) + '/exportjob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a read set import job.
		 * Post sequencestore/{sequenceStoreId}/importjob
		 * @param {string} sequenceStoreId The read set's sequence store ID.
		 * @return {StartReadSetImportJobResponse} Success
		 */
		StartReadSetImportJob(sequenceStoreId: string, requestBody: StartReadSetImportJobPostBody): Observable<StartReadSetImportJobResponse> {
			return this.http.post<StartReadSetImportJobResponse>(this.baseUri + 'sequencestore/' + (sequenceStoreId == null ? '' : encodeURIComponent(sequenceStoreId)) + '/importjob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a reference import job.
		 * Post referencestore/{referenceStoreId}/importjob
		 * @param {string} referenceStoreId The job's reference store ID.
		 * @return {StartReferenceImportJobResponse} Success
		 */
		StartReferenceImportJob(referenceStoreId: string, requestBody: StartReferenceImportJobPostBody): Observable<StartReferenceImportJobResponse> {
			return this.http.post<StartReferenceImportJobResponse>(this.baseUri + 'referencestore/' + (referenceStoreId == null ? '' : encodeURIComponent(referenceStoreId)) + '/importjob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a variant import job.
		 * Post import/variant
		 * @return {StartVariantImportResponse} Success
		 */
		StartVariantImportJob(requestBody: StartVariantImportJobPostBody): Observable<StartVariantImportResponse> {
			return this.http.post<StartVariantImportResponse>(this.baseUri + 'import/variant', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from a resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The resource's ARN.
		 * @param {Array<string>} tagKeys Keys of tags to remove.
		 * @return {void} 
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation uploads a specific part of a read set. If you upload a new part using a previously used part number, the previously uploaded part will be overwritten.
		 * Put sequencestore/{sequenceStoreId}/upload/{uploadId}/part#partSource&partNumber
		 * @param {string} sequenceStoreId  The Sequence Store ID used for the multipart upload. 
		 * @param {string} uploadId  The ID for the initiated multipart upload. 
		 * @param {ReadSetPartSource} partSource  The source file for an upload part. 
		 * @param {number} partNumber  The number of the part being uploaded. 
		 * @return {UploadReadSetPartResponse} Success
		 */
		UploadReadSetPart(sequenceStoreId: string, uploadId: string, partSource: ReadSetPartSource, partNumber: number, requestBody: UploadReadSetPartPutBody): Observable<UploadReadSetPartResponse> {
			return this.http.put<UploadReadSetPartResponse>(this.baseUri + 'sequencestore/' + (sequenceStoreId == null ? '' : encodeURIComponent(sequenceStoreId)) + '/upload/' + (uploadId == null ? '' : encodeURIComponent(uploadId)) + '/part#partSource&partNumber&partSource=' + partSource + '&partNumber=' + partNumber, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface BatchDeleteReadSetPostBody {

		/**
		 * The read sets' IDs.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		ids: Array<string>;
	}
	export interface BatchDeleteReadSetPostBodyFormProperties {
	}
	export function CreateBatchDeleteReadSetPostBodyFormGroup() {
		return new FormGroup<BatchDeleteReadSetPostBodyFormProperties>({
		});

	}

	export interface CompleteMultipartReadSetUploadPostBody {

		/**
		 * The individual uploads or parts of a multipart upload.
		 * Required
		 */
		parts: Array<CompleteReadSetUploadPartListItem>;
	}
	export interface CompleteMultipartReadSetUploadPostBodyFormProperties {
	}
	export function CreateCompleteMultipartReadSetUploadPostBodyFormGroup() {
		return new FormGroup<CompleteMultipartReadSetUploadPostBodyFormProperties>({
		});

	}

	export interface CreateAnnotationStorePostBody {

		/** A genome reference. */
		reference?: CreateAnnotationStorePostBodyReference;

		/** A name for the store. */
		name?: string | null;

		/**
		 * A description for the store.
		 * Max length: 500
		 * Min length: 0
		 */
		description?: string | null;

		/** Tags for the store. */
		tags?: {[id: string]: string };

		/** Server-side encryption (SSE) settings for a store. */
		sseConfig?: CreateAnnotationStorePostBodySseConfig;

		/**
		 * The annotation file format of the store.
		 * Required
		 */
		storeFormat: StoreFormat;

		/** Settings for a store. */
		storeOptions?: CreateAnnotationStorePostBodyStoreOptions;
	}
	export interface CreateAnnotationStorePostBodyFormProperties {

		/** A name for the store. */
		name: FormControl<string | null | undefined>,

		/**
		 * A description for the store.
		 * Max length: 500
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/** Tags for the store. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The annotation file format of the store.
		 * Required
		 */
		storeFormat: FormControl<StoreFormat | null | undefined>,
	}
	export function CreateCreateAnnotationStorePostBodyFormGroup() {
		return new FormGroup<CreateAnnotationStorePostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([a-z]){1}([a-z0-9_]){2,254}')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			storeFormat: new FormControl<StoreFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAnnotationStorePostBodyReference {
		referenceArn?: string;
	}
	export interface CreateAnnotationStorePostBodyReferenceFormProperties {
		referenceArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAnnotationStorePostBodyReferenceFormGroup() {
		return new FormGroup<CreateAnnotationStorePostBodyReferenceFormProperties>({
			referenceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAnnotationStorePostBodySseConfig {
		type?: EncryptionType;
		keyArn?: string;
	}
	export interface CreateAnnotationStorePostBodySseConfigFormProperties {
		type: FormControl<EncryptionType | null | undefined>,
		keyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAnnotationStorePostBodySseConfigFormGroup() {
		return new FormGroup<CreateAnnotationStorePostBodySseConfigFormProperties>({
			type: new FormControl<EncryptionType | null | undefined>(undefined),
			keyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAnnotationStorePostBodyStoreOptions {
		tsvStoreOptions?: TsvStoreOptions;
	}
	export interface CreateAnnotationStorePostBodyStoreOptionsFormProperties {
	}
	export function CreateCreateAnnotationStorePostBodyStoreOptionsFormGroup() {
		return new FormGroup<CreateAnnotationStorePostBodyStoreOptionsFormProperties>({
		});

	}

	export interface CreateMultipartReadSetUploadPostBody {

		/**
		 * An idempotency token that can be used to avoid triggering multiple multipart uploads.
		 * Max length: 127
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The type of file being uploaded.
		 * Required
		 */
		sourceFileType: FileType;

		/**
		 * The source's subject ID.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		subjectId: string;

		/**
		 * The source's sample ID.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		sampleId: string;

		/**
		 * Where the source originated.
		 * Max length: 127
		 * Min length: 1
		 */
		generatedFrom?: string | null;

		/**
		 * The ARN of the reference.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		referenceArn: string;

		/**
		 * The name of the read set.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		name: string;

		/**
		 * The description of the read set.
		 * Max length: 255
		 * Min length: 1
		 */
		description?: string | null;

		/** Any tags to add to the read set. */
		tags?: {[id: string]: string };
	}
	export interface CreateMultipartReadSetUploadPostBodyFormProperties {

		/**
		 * An idempotency token that can be used to avoid triggering multiple multipart uploads.
		 * Max length: 127
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The type of file being uploaded.
		 * Required
		 */
		sourceFileType: FormControl<FileType | null | undefined>,

		/**
		 * The source's subject ID.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		subjectId: FormControl<string | null | undefined>,

		/**
		 * The source's sample ID.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		sampleId: FormControl<string | null | undefined>,

		/**
		 * Where the source originated.
		 * Max length: 127
		 * Min length: 1
		 */
		generatedFrom: FormControl<string | null | undefined>,

		/**
		 * The ARN of the reference.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		referenceArn: FormControl<string | null | undefined>,

		/**
		 * The name of the read set.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description of the read set.
		 * Max length: 255
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/** Any tags to add to the read set. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateMultipartReadSetUploadPostBodyFormGroup() {
		return new FormGroup<CreateMultipartReadSetUploadPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(127), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
			sourceFileType: new FormControl<FileType | null | undefined>(undefined, [Validators.required]),
			subjectId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
			sampleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
			generatedFrom: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(127), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
			referenceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127), Validators.pattern('arn:.+')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateReferenceStorePostBody {

		/**
		 * A name for the store.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		name: string;

		/**
		 * A description for the store.
		 * Max length: 255
		 * Min length: 1
		 */
		description?: string | null;

		/** Server-side encryption (SSE) settings for a store. */
		sseConfig?: CreateReferenceStorePostBodySseConfig;

		/** Tags for the store. */
		tags?: {[id: string]: string };

		/**
		 * To ensure that requests don't run multiple times, specify a unique token for each request.
		 * Max length: 127
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface CreateReferenceStorePostBodyFormProperties {

		/**
		 * A name for the store.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A description for the store.
		 * Max length: 255
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/** Tags for the store. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * To ensure that requests don't run multiple times, specify a unique token for each request.
		 * Max length: 127
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateReferenceStorePostBodyFormGroup() {
		return new FormGroup<CreateReferenceStorePostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(127), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
		});

	}

	export interface CreateReferenceStorePostBodySseConfig {
		type?: EncryptionType;
		keyArn?: string;
	}
	export interface CreateReferenceStorePostBodySseConfigFormProperties {
		type: FormControl<EncryptionType | null | undefined>,
		keyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateReferenceStorePostBodySseConfigFormGroup() {
		return new FormGroup<CreateReferenceStorePostBodySseConfigFormProperties>({
			type: new FormControl<EncryptionType | null | undefined>(undefined),
			keyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRunGroupPostBody {

		/**
		 * A name for the group.
		 * Max length: 128
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * The maximum number of CPUs to use in the group.
		 * Minimum: 1
		 * Maximum: 100000
		 */
		maxCpus?: number | null;

		/**
		 * The maximum number of concurrent runs for the group.
		 * Minimum: 1
		 * Maximum: 100000
		 */
		maxRuns?: number | null;

		/**
		 * A maximum run time for the group in minutes.
		 * Minimum: 1
		 * Maximum: 100000
		 */
		maxDuration?: number | null;

		/** Tags for the group. */
		tags?: {[id: string]: string };

		/**
		 * To ensure that requests don't run multiple times, specify a unique ID for each request.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		requestId: string;

		/**
		 * The maximum GPUs that can be used by a run group.
		 * Minimum: 1
		 * Maximum: 100000
		 */
		maxGpus?: number | null;
	}
	export interface CreateRunGroupPostBodyFormProperties {

		/**
		 * A name for the group.
		 * Max length: 128
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The maximum number of CPUs to use in the group.
		 * Minimum: 1
		 * Maximum: 100000
		 */
		maxCpus: FormControl<number | null | undefined>,

		/**
		 * The maximum number of concurrent runs for the group.
		 * Minimum: 1
		 * Maximum: 100000
		 */
		maxRuns: FormControl<number | null | undefined>,

		/**
		 * A maximum run time for the group in minutes.
		 * Minimum: 1
		 * Maximum: 100000
		 */
		maxDuration: FormControl<number | null | undefined>,

		/** Tags for the group. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * To ensure that requests don't run multiple times, specify a unique ID for each request.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * The maximum GPUs that can be used by a run group.
		 * Minimum: 1
		 * Maximum: 100000
		 */
		maxGpus: FormControl<number | null | undefined>,
	}
	export function CreateCreateRunGroupPostBodyFormGroup() {
		return new FormGroup<CreateRunGroupPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
			maxCpus: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100000)]),
			maxRuns: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100000)]),
			maxDuration: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100000)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
			maxGpus: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100000)]),
		});

	}

	export interface CreateSequenceStorePostBody {

		/**
		 * A name for the store.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		name: string;

		/**
		 * A description for the store.
		 * Max length: 255
		 * Min length: 1
		 */
		description?: string | null;

		/** Server-side encryption (SSE) settings for a store. */
		sseConfig?: CreateSequenceStorePostBodySseConfig;

		/** Tags for the store. */
		tags?: {[id: string]: string };

		/**
		 * To ensure that requests don't run multiple times, specify a unique token for each request.
		 * Max length: 127
		 * Min length: 1
		 */
		clientToken?: string | null;

		/** An S3 location that is used to store files that have failed a direct upload. */
		fallbackLocation?: string | null;
	}
	export interface CreateSequenceStorePostBodyFormProperties {

		/**
		 * A name for the store.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A description for the store.
		 * Max length: 255
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/** Tags for the store. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * To ensure that requests don't run multiple times, specify a unique token for each request.
		 * Max length: 127
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/** An S3 location that is used to store files that have failed a direct upload. */
		fallbackLocation: FormControl<string | null | undefined>,
	}
	export function CreateCreateSequenceStorePostBodyFormGroup() {
		return new FormGroup<CreateSequenceStorePostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(127), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
			fallbackLocation: new FormControl<string | null | undefined>(undefined, [Validators.pattern('s3://([a-z0-9][a-z0-9-.]{1,61}[a-z0-9])/?((.{1,1024})/)?')]),
		});

	}

	export interface CreateSequenceStorePostBodySseConfig {
		type?: EncryptionType;
		keyArn?: string;
	}
	export interface CreateSequenceStorePostBodySseConfigFormProperties {
		type: FormControl<EncryptionType | null | undefined>,
		keyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateSequenceStorePostBodySseConfigFormGroup() {
		return new FormGroup<CreateSequenceStorePostBodySseConfigFormProperties>({
			type: new FormControl<EncryptionType | null | undefined>(undefined),
			keyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVariantStorePostBody {

		/**
		 * A genome reference.
		 * Required
		 */
		reference: CreateVariantStorePostBodyReference;

		/** A name for the store. */
		name?: string | null;

		/**
		 * A description for the store.
		 * Max length: 500
		 * Min length: 0
		 */
		description?: string | null;

		/** Tags for the store. */
		tags?: {[id: string]: string };

		/** Server-side encryption (SSE) settings for a store. */
		sseConfig?: CreateVariantStorePostBodySseConfig;
	}
	export interface CreateVariantStorePostBodyFormProperties {

		/** A name for the store. */
		name: FormControl<string | null | undefined>,

		/**
		 * A description for the store.
		 * Max length: 500
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/** Tags for the store. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateVariantStorePostBodyFormGroup() {
		return new FormGroup<CreateVariantStorePostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([a-z]){1}([a-z0-9_]){2,254}')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateVariantStorePostBodyReference {
		referenceArn?: string;
	}
	export interface CreateVariantStorePostBodyReferenceFormProperties {
		referenceArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateVariantStorePostBodyReferenceFormGroup() {
		return new FormGroup<CreateVariantStorePostBodyReferenceFormProperties>({
			referenceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVariantStorePostBodySseConfig {
		type?: EncryptionType;
		keyArn?: string;
	}
	export interface CreateVariantStorePostBodySseConfigFormProperties {
		type: FormControl<EncryptionType | null | undefined>,
		keyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateVariantStorePostBodySseConfigFormGroup() {
		return new FormGroup<CreateVariantStorePostBodySseConfigFormProperties>({
			type: new FormControl<EncryptionType | null | undefined>(undefined),
			keyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWorkflowPostBody {

		/**
		 * A name for the workflow.
		 * Max length: 128
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * A description for the workflow.
		 * Max length: 256
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * An engine for the workflow.
		 * Max length: 64
		 * Min length: 1
		 */
		engine?: WorkflowEngine | null;

		/** A ZIP archive for the workflow. */
		definitionZip?: string | null;

		/**
		 * The URI of a definition for the workflow.
		 * Max length: 256
		 * Min length: 1
		 */
		definitionUri?: string | null;

		/**
		 * The path of the main definition file for the workflow.
		 * Max length: 128
		 * Min length: 1
		 */
		main?: string | null;

		/** A parameter template for the workflow. */
		parameterTemplate?: {[id: string]: WorkflowParameter };

		/**
		 * A storage capacity for the workflow in gigabytes.
		 * Minimum: 0
		 * Maximum: 100000
		 */
		storageCapacity?: number | null;

		/** Tags for the workflow. */
		tags?: {[id: string]: string };

		/**
		 * To ensure that requests don't run multiple times, specify a unique ID for each request.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		requestId: string;

		/**
		 * The computational accelerator specified to run the workflow.
		 * Max length: 64
		 * Min length: 1
		 */
		accelerators?: Accelerators | null;
	}
	export interface CreateWorkflowPostBodyFormProperties {

		/**
		 * A name for the workflow.
		 * Max length: 128
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A description for the workflow.
		 * Max length: 256
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * An engine for the workflow.
		 * Max length: 64
		 * Min length: 1
		 */
		engine: FormControl<WorkflowEngine | null | undefined>,

		/** A ZIP archive for the workflow. */
		definitionZip: FormControl<string | null | undefined>,

		/**
		 * The URI of a definition for the workflow.
		 * Max length: 256
		 * Min length: 1
		 */
		definitionUri: FormControl<string | null | undefined>,

		/**
		 * The path of the main definition file for the workflow.
		 * Max length: 128
		 * Min length: 1
		 */
		main: FormControl<string | null | undefined>,

		/** A parameter template for the workflow. */
		parameterTemplate: FormControl<{[id: string]: WorkflowParameter } | null | undefined>,

		/**
		 * A storage capacity for the workflow in gigabytes.
		 * Minimum: 0
		 * Maximum: 100000
		 */
		storageCapacity: FormControl<number | null | undefined>,

		/** Tags for the workflow. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * To ensure that requests don't run multiple times, specify a unique ID for each request.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * The computational accelerator specified to run the workflow.
		 * Max length: 64
		 * Min length: 1
		 */
		accelerators: FormControl<Accelerators | null | undefined>,
	}
	export function CreateCreateWorkflowPostBodyFormGroup() {
		return new FormGroup<CreateWorkflowPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
			engine: new FormControl<WorkflowEngine | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			definitionZip: new FormControl<string | null | undefined>(undefined),
			definitionUri: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
			main: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
			parameterTemplate: new FormControl<{[id: string]: WorkflowParameter } | null | undefined>(undefined),
			storageCapacity: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100000)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
			accelerators: new FormControl<Accelerators | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

	export interface UpdateAnnotationStorePostBody {

		/**
		 * A description for the store.
		 * Max length: 500
		 * Min length: 0
		 */
		description?: string | null;
	}
	export interface UpdateAnnotationStorePostBodyFormProperties {

		/**
		 * A description for the store.
		 * Max length: 500
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAnnotationStorePostBodyFormGroup() {
		return new FormGroup<UpdateAnnotationStorePostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500)]),
		});

	}

	export interface UpdateRunGroupPostBody {

		/**
		 * A name for the group.
		 * Max length: 128
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * The maximum number of CPUs to use.
		 * Minimum: 1
		 * Maximum: 100000
		 */
		maxCpus?: number | null;

		/**
		 * The maximum number of concurrent runs for the group.
		 * Minimum: 1
		 * Maximum: 100000
		 */
		maxRuns?: number | null;

		/**
		 * A maximum run time for the group in minutes.
		 * Minimum: 1
		 * Maximum: 100000
		 */
		maxDuration?: number | null;

		/**
		 * The maximum GPUs that can be used by a run group.
		 * Minimum: 1
		 * Maximum: 100000
		 */
		maxGpus?: number | null;
	}
	export interface UpdateRunGroupPostBodyFormProperties {

		/**
		 * A name for the group.
		 * Max length: 128
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The maximum number of CPUs to use.
		 * Minimum: 1
		 * Maximum: 100000
		 */
		maxCpus: FormControl<number | null | undefined>,

		/**
		 * The maximum number of concurrent runs for the group.
		 * Minimum: 1
		 * Maximum: 100000
		 */
		maxRuns: FormControl<number | null | undefined>,

		/**
		 * A maximum run time for the group in minutes.
		 * Minimum: 1
		 * Maximum: 100000
		 */
		maxDuration: FormControl<number | null | undefined>,

		/**
		 * The maximum GPUs that can be used by a run group.
		 * Minimum: 1
		 * Maximum: 100000
		 */
		maxGpus: FormControl<number | null | undefined>,
	}
	export function CreateUpdateRunGroupPostBodyFormGroup() {
		return new FormGroup<UpdateRunGroupPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
			maxCpus: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100000)]),
			maxRuns: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100000)]),
			maxDuration: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100000)]),
			maxGpus: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100000)]),
		});

	}

	export interface UpdateVariantStorePostBody {

		/**
		 * A description for the store.
		 * Max length: 500
		 * Min length: 0
		 */
		description?: string | null;
	}
	export interface UpdateVariantStorePostBodyFormProperties {

		/**
		 * A description for the store.
		 * Max length: 500
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVariantStorePostBodyFormGroup() {
		return new FormGroup<UpdateVariantStorePostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500)]),
		});

	}

	export interface UpdateWorkflowPostBody {

		/**
		 * A name for the workflow.
		 * Max length: 128
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * A description for the workflow.
		 * Max length: 256
		 * Min length: 1
		 */
		description?: string | null;
	}
	export interface UpdateWorkflowPostBodyFormProperties {

		/**
		 * A name for the workflow.
		 * Max length: 128
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A description for the workflow.
		 * Max length: 256
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkflowPostBodyFormGroup() {
		return new FormGroup<UpdateWorkflowPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
		});

	}

	export interface ListAnnotationImportJobsPostBody {

		/**
		 * IDs of annotation import jobs to retrieve.
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		ids?: Array<string>;

		/** A filter for annotation import jobs. */
		filter?: ListAnnotationImportJobsPostBodyFilter;
	}
	export interface ListAnnotationImportJobsPostBodyFormProperties {
	}
	export function CreateListAnnotationImportJobsPostBodyFormGroup() {
		return new FormGroup<ListAnnotationImportJobsPostBodyFormProperties>({
		});

	}

	export interface ListAnnotationImportJobsPostBodyFilter {
		status?: JobStatus;
		storeName?: string;
	}
	export interface ListAnnotationImportJobsPostBodyFilterFormProperties {
		status: FormControl<JobStatus | null | undefined>,
		storeName: FormControl<string | null | undefined>,
	}
	export function CreateListAnnotationImportJobsPostBodyFilterFormGroup() {
		return new FormGroup<ListAnnotationImportJobsPostBodyFilterFormProperties>({
			status: new FormControl<JobStatus | null | undefined>(undefined),
			storeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAnnotationStoresPostBody {

		/**
		 * IDs of stores to list.
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		ids?: Array<string>;

		/** A filter for annotation stores. */
		filter?: ListAnnotationStoresPostBodyFilter;
	}
	export interface ListAnnotationStoresPostBodyFormProperties {
	}
	export function CreateListAnnotationStoresPostBodyFormGroup() {
		return new FormGroup<ListAnnotationStoresPostBodyFormProperties>({
		});

	}

	export interface ListAnnotationStoresPostBodyFilter {
		status?: StoreStatus;
	}
	export interface ListAnnotationStoresPostBodyFilterFormProperties {
		status: FormControl<StoreStatus | null | undefined>,
	}
	export function CreateListAnnotationStoresPostBodyFilterFormGroup() {
		return new FormGroup<ListAnnotationStoresPostBodyFilterFormProperties>({
			status: new FormControl<StoreStatus | null | undefined>(undefined),
		});

	}

	export interface ListReadSetActivationJobsPostBody {

		/** A read set activation job filter. */
		filter?: ListReadSetActivationJobsPostBodyFilter;
	}
	export interface ListReadSetActivationJobsPostBodyFormProperties {
	}
	export function CreateListReadSetActivationJobsPostBodyFormGroup() {
		return new FormGroup<ListReadSetActivationJobsPostBodyFormProperties>({
		});

	}

	export interface ListReadSetActivationJobsPostBodyFilter {
		status?: ReadSetActivationJobStatus;
		createdAfter?: Date;
		createdBefore?: Date;
	}
	export interface ListReadSetActivationJobsPostBodyFilterFormProperties {
		status: FormControl<ReadSetActivationJobStatus | null | undefined>,
		createdAfter: FormControl<Date | null | undefined>,
		createdBefore: FormControl<Date | null | undefined>,
	}
	export function CreateListReadSetActivationJobsPostBodyFilterFormGroup() {
		return new FormGroup<ListReadSetActivationJobsPostBodyFilterFormProperties>({
			status: new FormControl<ReadSetActivationJobStatus | null | undefined>(undefined),
			createdAfter: new FormControl<Date | null | undefined>(undefined),
			createdBefore: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListReadSetExportJobsPostBody {

		/** An read set export job filter. */
		filter?: ListReadSetExportJobsPostBodyFilter;
	}
	export interface ListReadSetExportJobsPostBodyFormProperties {
	}
	export function CreateListReadSetExportJobsPostBodyFormGroup() {
		return new FormGroup<ListReadSetExportJobsPostBodyFormProperties>({
		});

	}

	export interface ListReadSetExportJobsPostBodyFilter {
		status?: ReadSetActivationJobStatus;
		createdAfter?: Date;
		createdBefore?: Date;
	}
	export interface ListReadSetExportJobsPostBodyFilterFormProperties {
		status: FormControl<ReadSetActivationJobStatus | null | undefined>,
		createdAfter: FormControl<Date | null | undefined>,
		createdBefore: FormControl<Date | null | undefined>,
	}
	export function CreateListReadSetExportJobsPostBodyFilterFormGroup() {
		return new FormGroup<ListReadSetExportJobsPostBodyFilterFormProperties>({
			status: new FormControl<ReadSetActivationJobStatus | null | undefined>(undefined),
			createdAfter: new FormControl<Date | null | undefined>(undefined),
			createdBefore: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListReadSetImportJobsPostBody {

		/** A filter for import read set jobs. */
		filter?: ListReadSetImportJobsPostBodyFilter;
	}
	export interface ListReadSetImportJobsPostBodyFormProperties {
	}
	export function CreateListReadSetImportJobsPostBodyFormGroup() {
		return new FormGroup<ListReadSetImportJobsPostBodyFormProperties>({
		});

	}

	export interface ListReadSetImportJobsPostBodyFilter {
		status?: ReadSetActivationJobStatus;
		createdAfter?: Date;
		createdBefore?: Date;
	}
	export interface ListReadSetImportJobsPostBodyFilterFormProperties {
		status: FormControl<ReadSetActivationJobStatus | null | undefined>,
		createdAfter: FormControl<Date | null | undefined>,
		createdBefore: FormControl<Date | null | undefined>,
	}
	export function CreateListReadSetImportJobsPostBodyFilterFormGroup() {
		return new FormGroup<ListReadSetImportJobsPostBodyFilterFormProperties>({
			status: new FormControl<ReadSetActivationJobStatus | null | undefined>(undefined),
			createdAfter: new FormControl<Date | null | undefined>(undefined),
			createdBefore: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListReadSetUploadPartsPostBody {

		/**
		 * The source file for the upload part.
		 * Required
		 */
		partSource: ReadSetPartSource;

		/** Filter settings that select for read set upload parts of interest. */
		filter?: ListReadSetUploadPartsPostBodyFilter;
	}
	export interface ListReadSetUploadPartsPostBodyFormProperties {

		/**
		 * The source file for the upload part.
		 * Required
		 */
		partSource: FormControl<ReadSetPartSource | null | undefined>,
	}
	export function CreateListReadSetUploadPartsPostBodyFormGroup() {
		return new FormGroup<ListReadSetUploadPartsPostBodyFormProperties>({
			partSource: new FormControl<ReadSetPartSource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListReadSetUploadPartsPostBodyFilter {
		createdAfter?: Date;
		createdBefore?: Date;
	}
	export interface ListReadSetUploadPartsPostBodyFilterFormProperties {
		createdAfter: FormControl<Date | null | undefined>,
		createdBefore: FormControl<Date | null | undefined>,
	}
	export function CreateListReadSetUploadPartsPostBodyFilterFormGroup() {
		return new FormGroup<ListReadSetUploadPartsPostBodyFilterFormProperties>({
			createdAfter: new FormControl<Date | null | undefined>(undefined),
			createdBefore: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListReadSetsPostBody {

		/** A filter for read sets. */
		filter?: ListReadSetsPostBodyFilter;
	}
	export interface ListReadSetsPostBodyFormProperties {
	}
	export function CreateListReadSetsPostBodyFormGroup() {
		return new FormGroup<ListReadSetsPostBodyFormProperties>({
		});

	}

	export interface ListReadSetsPostBodyFilter {
		name?: string;
		status?: ReadSetStatus;
		referenceArn?: string;
		createdAfter?: Date;
		createdBefore?: Date;
		sampleId?: string;
		subjectId?: string;
		generatedFrom?: string;
		creationType?: CreationType;
	}
	export interface ListReadSetsPostBodyFilterFormProperties {
		name: FormControl<string | null | undefined>,
		status: FormControl<ReadSetStatus | null | undefined>,
		referenceArn: FormControl<string | null | undefined>,
		createdAfter: FormControl<Date | null | undefined>,
		createdBefore: FormControl<Date | null | undefined>,
		sampleId: FormControl<string | null | undefined>,
		subjectId: FormControl<string | null | undefined>,
		generatedFrom: FormControl<string | null | undefined>,
		creationType: FormControl<CreationType | null | undefined>,
	}
	export function CreateListReadSetsPostBodyFilterFormGroup() {
		return new FormGroup<ListReadSetsPostBodyFilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadSetStatus | null | undefined>(undefined),
			referenceArn: new FormControl<string | null | undefined>(undefined),
			createdAfter: new FormControl<Date | null | undefined>(undefined),
			createdBefore: new FormControl<Date | null | undefined>(undefined),
			sampleId: new FormControl<string | null | undefined>(undefined),
			subjectId: new FormControl<string | null | undefined>(undefined),
			generatedFrom: new FormControl<string | null | undefined>(undefined),
			creationType: new FormControl<CreationType | null | undefined>(undefined),
		});

	}

	export interface ListReferenceImportJobsPostBody {

		/** A filter for import references. */
		filter?: ListReferenceImportJobsPostBodyFilter;
	}
	export interface ListReferenceImportJobsPostBodyFormProperties {
	}
	export function CreateListReferenceImportJobsPostBodyFormGroup() {
		return new FormGroup<ListReferenceImportJobsPostBodyFormProperties>({
		});

	}

	export interface ListReferenceImportJobsPostBodyFilter {
		status?: ReadSetActivationJobStatus;
		createdAfter?: Date;
		createdBefore?: Date;
	}
	export interface ListReferenceImportJobsPostBodyFilterFormProperties {
		status: FormControl<ReadSetActivationJobStatus | null | undefined>,
		createdAfter: FormControl<Date | null | undefined>,
		createdBefore: FormControl<Date | null | undefined>,
	}
	export function CreateListReferenceImportJobsPostBodyFilterFormGroup() {
		return new FormGroup<ListReferenceImportJobsPostBodyFilterFormProperties>({
			status: new FormControl<ReadSetActivationJobStatus | null | undefined>(undefined),
			createdAfter: new FormControl<Date | null | undefined>(undefined),
			createdBefore: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListReferenceStoresPostBody {

		/** A filter for reference stores. */
		filter?: ListReferenceStoresPostBodyFilter;
	}
	export interface ListReferenceStoresPostBodyFormProperties {
	}
	export function CreateListReferenceStoresPostBodyFormGroup() {
		return new FormGroup<ListReferenceStoresPostBodyFormProperties>({
		});

	}

	export interface ListReferenceStoresPostBodyFilter {
		name?: string;
		createdAfter?: Date;
		createdBefore?: Date;
	}
	export interface ListReferenceStoresPostBodyFilterFormProperties {
		name: FormControl<string | null | undefined>,
		createdAfter: FormControl<Date | null | undefined>,
		createdBefore: FormControl<Date | null | undefined>,
	}
	export function CreateListReferenceStoresPostBodyFilterFormGroup() {
		return new FormGroup<ListReferenceStoresPostBodyFilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			createdAfter: new FormControl<Date | null | undefined>(undefined),
			createdBefore: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListReferencesPostBody {

		/** A filter for references. */
		filter?: ListReferencesPostBodyFilter;
	}
	export interface ListReferencesPostBodyFormProperties {
	}
	export function CreateListReferencesPostBodyFormGroup() {
		return new FormGroup<ListReferencesPostBodyFormProperties>({
		});

	}

	export interface ListReferencesPostBodyFilter {
		name?: string;
		md5?: string;
		createdAfter?: Date;
		createdBefore?: Date;
	}
	export interface ListReferencesPostBodyFilterFormProperties {
		name: FormControl<string | null | undefined>,
		md5: FormControl<string | null | undefined>,
		createdAfter: FormControl<Date | null | undefined>,
		createdBefore: FormControl<Date | null | undefined>,
	}
	export function CreateListReferencesPostBodyFilterFormGroup() {
		return new FormGroup<ListReferencesPostBodyFilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			md5: new FormControl<string | null | undefined>(undefined),
			createdAfter: new FormControl<Date | null | undefined>(undefined),
			createdBefore: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface StartRunPostBody {

		/**
		 * The run's workflow ID.
		 * Max length: 18
		 * Min length: 1
		 */
		workflowId?: string | null;

		/**
		 * The run's workflows type.
		 * Max length: 64
		 * Min length: 1
		 */
		workflowType?: WorkflowType | null;

		/**
		 * The run's ID.
		 * Max length: 18
		 * Min length: 1
		 */
		runId?: string | null;

		/**
		 * A service role for the run.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		roleArn: string;

		/**
		 * A name for the run.
		 * Max length: 128
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * The run's group ID.
		 * Max length: 18
		 * Min length: 1
		 */
		runGroupId?: string | null;

		/**
		 * A priority for the run.
		 * Minimum: 0
		 * Maximum: 100000
		 */
		priority?: number | null;

		/** Parameters for the run. */
		parameters?: string | null;

		/**
		 * A storage capacity for the run in gigabytes.
		 * Minimum: 0
		 * Maximum: 100000
		 */
		storageCapacity?: number | null;

		/**
		 * An output URI for the run.
		 * Max length: 128
		 * Min length: 1
		 */
		outputUri?: string | null;

		/**
		 * A log level for the run.
		 * Max length: 64
		 * Min length: 1
		 */
		logLevel?: RunLogLevel | null;

		/** Tags for the run. */
		tags?: {[id: string]: string };

		/**
		 * To ensure that requests don't run multiple times, specify a unique ID for each request.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		requestId: string;
	}
	export interface StartRunPostBodyFormProperties {

		/**
		 * The run's workflow ID.
		 * Max length: 18
		 * Min length: 1
		 */
		workflowId: FormControl<string | null | undefined>,

		/**
		 * The run's workflows type.
		 * Max length: 64
		 * Min length: 1
		 */
		workflowType: FormControl<WorkflowType | null | undefined>,

		/**
		 * The run's ID.
		 * Max length: 18
		 * Min length: 1
		 */
		runId: FormControl<string | null | undefined>,

		/**
		 * A service role for the run.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		roleArn: FormControl<string | null | undefined>,

		/**
		 * A name for the run.
		 * Max length: 128
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The run's group ID.
		 * Max length: 18
		 * Min length: 1
		 */
		runGroupId: FormControl<string | null | undefined>,

		/**
		 * A priority for the run.
		 * Minimum: 0
		 * Maximum: 100000
		 */
		priority: FormControl<number | null | undefined>,

		/** Parameters for the run. */
		parameters: FormControl<string | null | undefined>,

		/**
		 * A storage capacity for the run in gigabytes.
		 * Minimum: 0
		 * Maximum: 100000
		 */
		storageCapacity: FormControl<number | null | undefined>,

		/**
		 * An output URI for the run.
		 * Max length: 128
		 * Min length: 1
		 */
		outputUri: FormControl<string | null | undefined>,

		/**
		 * A log level for the run.
		 * Max length: 64
		 * Min length: 1
		 */
		logLevel: FormControl<RunLogLevel | null | undefined>,

		/** Tags for the run. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * To ensure that requests don't run multiple times, specify a unique ID for each request.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateStartRunPostBodyFormGroup() {
		return new FormGroup<StartRunPostBodyFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(18), Validators.pattern('[0-9]+')]),
			workflowType: new FormControl<WorkflowType | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			runId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(18), Validators.pattern('[0-9]+')]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('arn:.+')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
			runGroupId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(18), Validators.pattern('[0-9]+')]),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100000)]),
			parameters: new FormControl<string | null | undefined>(undefined),
			storageCapacity: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100000)]),
			outputUri: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
			logLevel: new FormControl<RunLogLevel | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
		});

	}

	export interface ListSequenceStoresPostBody {

		/** A filter for a sequence store. */
		filter?: ListSequenceStoresPostBodyFilter;
	}
	export interface ListSequenceStoresPostBodyFormProperties {
	}
	export function CreateListSequenceStoresPostBodyFormGroup() {
		return new FormGroup<ListSequenceStoresPostBodyFormProperties>({
		});

	}

	export interface ListSequenceStoresPostBodyFilter {
		name?: string;
		createdAfter?: Date;
		createdBefore?: Date;
	}
	export interface ListSequenceStoresPostBodyFilterFormProperties {
		name: FormControl<string | null | undefined>,
		createdAfter: FormControl<Date | null | undefined>,
		createdBefore: FormControl<Date | null | undefined>,
	}
	export function CreateListSequenceStoresPostBodyFilterFormGroup() {
		return new FormGroup<ListSequenceStoresPostBodyFilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			createdAfter: new FormControl<Date | null | undefined>(undefined),
			createdBefore: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * Tags for the resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * Tags for the resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListVariantImportJobsPostBody {

		/**
		 * A list of job IDs.
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		ids?: Array<string>;

		/** A filter for variant import jobs. */
		filter?: ListVariantImportJobsPostBodyFilter;
	}
	export interface ListVariantImportJobsPostBodyFormProperties {
	}
	export function CreateListVariantImportJobsPostBodyFormGroup() {
		return new FormGroup<ListVariantImportJobsPostBodyFormProperties>({
		});

	}

	export interface ListVariantImportJobsPostBodyFilter {
		status?: JobStatus;
		storeName?: string;
	}
	export interface ListVariantImportJobsPostBodyFilterFormProperties {
		status: FormControl<JobStatus | null | undefined>,
		storeName: FormControl<string | null | undefined>,
	}
	export function CreateListVariantImportJobsPostBodyFilterFormGroup() {
		return new FormGroup<ListVariantImportJobsPostBodyFilterFormProperties>({
			status: new FormControl<JobStatus | null | undefined>(undefined),
			storeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVariantStoresPostBody {

		/**
		 * A list of store IDs.
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		ids?: Array<string>;

		/** A filter for variant stores. */
		filter?: ListVariantStoresPostBodyFilter;
	}
	export interface ListVariantStoresPostBodyFormProperties {
	}
	export function CreateListVariantStoresPostBodyFormGroup() {
		return new FormGroup<ListVariantStoresPostBodyFormProperties>({
		});

	}

	export interface ListVariantStoresPostBodyFilter {
		status?: StoreStatus;
	}
	export interface ListVariantStoresPostBodyFilterFormProperties {
		status: FormControl<StoreStatus | null | undefined>,
	}
	export function CreateListVariantStoresPostBodyFilterFormGroup() {
		return new FormGroup<ListVariantStoresPostBodyFilterFormProperties>({
			status: new FormControl<StoreStatus | null | undefined>(undefined),
		});

	}

	export interface StartAnnotationImportJobPostBody {

		/**
		 * A destination annotation store for the job.
		 * Required
		 * Max length: 255
		 * Min length: 3
		 */
		destinationName: string;

		/**
		 * A service role for the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;

		/**
		 * Items to import.
		 * Required
		 * Minimum items: 1
		 */
		items: Array<AnnotationImportItemSource>;

		/** Formatting options for a file. */
		formatOptions?: StartAnnotationImportJobPostBodyFormatOptions;

		/** The job's left normalization setting. */
		runLeftNormalization?: boolean | null;

		/** The annotation schema generated by the parsed annotation data. */
		annotationFields?: {[id: string]: string };
	}
	export interface StartAnnotationImportJobPostBodyFormProperties {

		/**
		 * A destination annotation store for the job.
		 * Required
		 * Max length: 255
		 * Min length: 3
		 */
		destinationName: FormControl<string | null | undefined>,

		/**
		 * A service role for the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,

		/** The job's left normalization setting. */
		runLeftNormalization: FormControl<boolean | null | undefined>,

		/** The annotation schema generated by the parsed annotation data. */
		annotationFields: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStartAnnotationImportJobPostBodyFormGroup() {
		return new FormGroup<StartAnnotationImportJobPostBodyFormProperties>({
			destinationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(255), Validators.pattern('([a-z]){1}([a-z0-9_]){2,254}')]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:([^: ]*):([^: ]*):([^: ]*):([0-9]{12}):([^: ]*)')]),
			runLeftNormalization: new FormControl<boolean | null | undefined>(undefined),
			annotationFields: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface StartAnnotationImportJobPostBodyFormatOptions {
		tsvOptions?: TsvOptions;
		vcfOptions?: VcfOptions;
	}
	export interface StartAnnotationImportJobPostBodyFormatOptionsFormProperties {
	}
	export function CreateStartAnnotationImportJobPostBodyFormatOptionsFormGroup() {
		return new FormGroup<StartAnnotationImportJobPostBodyFormatOptionsFormProperties>({
		});

	}

	export interface StartReadSetActivationJobPostBody {

		/**
		 * To ensure that jobs don't run multiple times, specify a unique token for each job.
		 * Max length: 127
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The job's source files.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		sources: Array<StartReadSetActivationJobSourceItem>;
	}
	export interface StartReadSetActivationJobPostBodyFormProperties {

		/**
		 * To ensure that jobs don't run multiple times, specify a unique token for each job.
		 * Max length: 127
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartReadSetActivationJobPostBodyFormGroup() {
		return new FormGroup<StartReadSetActivationJobPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(127), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
		});

	}

	export interface StartReadSetExportJobPostBody {

		/**
		 * A location for exported files in Amazon S3.
		 * Required
		 */
		destination: string;

		/**
		 * A service role for the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;

		/**
		 * To ensure that jobs don't run multiple times, specify a unique token for each job.
		 * Max length: 127
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The job's source files.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		sources: Array<ExportReadSet>;
	}
	export interface StartReadSetExportJobPostBodyFormProperties {

		/**
		 * A location for exported files in Amazon S3.
		 * Required
		 */
		destination: FormControl<string | null | undefined>,

		/**
		 * A service role for the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,

		/**
		 * To ensure that jobs don't run multiple times, specify a unique token for each job.
		 * Max length: 127
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartReadSetExportJobPostBodyFormGroup() {
		return new FormGroup<StartReadSetExportJobPostBodyFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('s3://([a-z0-9][a-z0-9-.]{1,61}[a-z0-9])/?((.{1,1024})/)?')]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:.*')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(127), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
		});

	}

	export interface StartReadSetImportJobPostBody {

		/**
		 * A service role for the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;

		/**
		 * To ensure that jobs don't run multiple times, specify a unique token for each job.
		 * Max length: 127
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The job's source files.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		sources: Array<StartReadSetImportJobSourceItem>;
	}
	export interface StartReadSetImportJobPostBodyFormProperties {

		/**
		 * A service role for the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,

		/**
		 * To ensure that jobs don't run multiple times, specify a unique token for each job.
		 * Max length: 127
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartReadSetImportJobPostBodyFormGroup() {
		return new FormGroup<StartReadSetImportJobPostBodyFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:.*')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(127), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
		});

	}

	export interface StartReferenceImportJobPostBody {

		/**
		 * A service role for the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;

		/**
		 * To ensure that jobs don't run multiple times, specify a unique token for each job.
		 * Max length: 127
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The job's source files.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		sources: Array<StartReferenceImportJobSourceItem>;
	}
	export interface StartReferenceImportJobPostBodyFormProperties {

		/**
		 * A service role for the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,

		/**
		 * To ensure that jobs don't run multiple times, specify a unique token for each job.
		 * Max length: 127
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartReferenceImportJobPostBodyFormGroup() {
		return new FormGroup<StartReferenceImportJobPostBodyFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:.*')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(127), Validators.pattern('[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+')]),
		});

	}

	export interface StartVariantImportJobPostBody {

		/**
		 * The destination variant store for the job.
		 * Required
		 * Max length: 255
		 * Min length: 3
		 */
		destinationName: string;

		/**
		 * A service role for the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;

		/**
		 * Items to import.
		 * Required
		 * Minimum items: 1
		 */
		items: Array<VariantImportItemSource>;

		/** The job's left normalization setting. */
		runLeftNormalization?: boolean | null;

		/** The annotation schema generated by the parsed annotation data. */
		annotationFields?: {[id: string]: string };
	}
	export interface StartVariantImportJobPostBodyFormProperties {

		/**
		 * The destination variant store for the job.
		 * Required
		 * Max length: 255
		 * Min length: 3
		 */
		destinationName: FormControl<string | null | undefined>,

		/**
		 * A service role for the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,

		/** The job's left normalization setting. */
		runLeftNormalization: FormControl<boolean | null | undefined>,

		/** The annotation schema generated by the parsed annotation data. */
		annotationFields: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStartVariantImportJobPostBodyFormGroup() {
		return new FormGroup<StartVariantImportJobPostBodyFormProperties>({
			destinationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(255), Validators.pattern('([a-z]){1}([a-z0-9_]){2,254}')]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:([^: ]*):([^: ]*):([^: ]*):([0-9]{12}):([^: ]*)')]),
			runLeftNormalization: new FormControl<boolean | null | undefined>(undefined),
			annotationFields: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UploadReadSetPartPutBody {

		/**
		 * The read set data to upload for a part.
		 * Required
		 */
		payload: string;
	}
	export interface UploadReadSetPartPutBodyFormProperties {

		/**
		 * The read set data to upload for a part.
		 * Required
		 */
		payload: FormControl<string | null | undefined>,
	}
	export function CreateUploadReadSetPartPutBodyFormGroup() {
		return new FormGroup<UploadReadSetPartPutBodyFormProperties>({
			payload: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

