import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DeleteTerminologyRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^([A-Za-z0-9-]_?)+$
		 */
		Name: string;
	}
	export interface DeleteTerminologyRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^([A-Za-z0-9-]_?)+$
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTerminologyRequestFormGroup() {
		return new FormGroup<DeleteTerminologyRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
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

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
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

	export interface DescribeTextTranslationJobResponse {

		/** Provides information about a translation job. */
		TextTranslationJobProperties?: TextTranslationJobProperties;
	}
	export interface DescribeTextTranslationJobResponseFormProperties {
	}
	export function CreateDescribeTextTranslationJobResponseFormGroup() {
		return new FormGroup<DescribeTextTranslationJobResponseFormProperties>({
		});

	}


	/** Provides information about a translation job. */
	export interface TextTranslationJobProperties {

		/**
		 * Max length: 32
		 * Min length: 1
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$
		 */
		JobId?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$
		 */
		JobName?: string | null;
		JobStatus?: TextTranslationJobPropertiesJobStatus | null;

		/** The number of documents successfully and unsuccessfully processed during a translation job. */
		JobDetails?: JobDetails;

		/**
		 * Max length: 5
		 * Min length: 2
		 */
		SourceLanguageCode?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		TargetLanguageCodes?: Array<string>;
		TerminologyNames?: Array<string>;
		Message?: string | null;
		SubmittedTime?: Date | null;
		EndTime?: Date | null;

		/** The input configuration properties for requesting a batch translation job. */
		InputDataConfig?: InputDataConfig;

		/** The output configuration properties for a batch translation job. */
		OutputDataConfig?: OutputDataConfig;

		/**
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: arn:aws(-[^:]+)?:iam::[0-9]{12}:role/.+
		 */
		DataAccessRoleArn?: string | null;
	}

	/** Provides information about a translation job. */
	export interface TextTranslationJobPropertiesFormProperties {

		/**
		 * Max length: 32
		 * Min length: 1
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$
		 */
		JobId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$
		 */
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<TextTranslationJobPropertiesJobStatus | null | undefined>,

		/**
		 * Max length: 5
		 * Min length: 2
		 */
		SourceLanguageCode: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		SubmittedTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: arn:aws(-[^:]+)?:iam::[0-9]{12}:role/.+
		 */
		DataAccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateTextTranslationJobPropertiesFormGroup() {
		return new FormGroup<TextTranslationJobPropertiesFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32), Validators.minLength(1)]),
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			JobStatus: new FormControl<TextTranslationJobPropertiesJobStatus | null | undefined>(undefined),
			SourceLanguageCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(5), Validators.minLength(2)]),
			Message: new FormControl<string | null | undefined>(undefined),
			SubmittedTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20)]),
		});

	}

	export enum TextTranslationJobPropertiesJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, COMPLETED_WITH_ERROR = 3, FAILED = 4, STOP_REQUESTED = 5, STOPPED = 6 }


	/** The number of documents successfully and unsuccessfully processed during a translation job. */
	export interface JobDetails {
		TranslatedDocumentsCount?: number | null;
		DocumentsWithErrorsCount?: number | null;
		InputDocumentsCount?: number | null;
	}

	/** The number of documents successfully and unsuccessfully processed during a translation job. */
	export interface JobDetailsFormProperties {
		TranslatedDocumentsCount: FormControl<number | null | undefined>,
		DocumentsWithErrorsCount: FormControl<number | null | undefined>,
		InputDocumentsCount: FormControl<number | null | undefined>,
	}
	export function CreateJobDetailsFormGroup() {
		return new FormGroup<JobDetailsFormProperties>({
			TranslatedDocumentsCount: new FormControl<number | null | undefined>(undefined),
			DocumentsWithErrorsCount: new FormControl<number | null | undefined>(undefined),
			InputDocumentsCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The input configuration properties for requesting a batch translation job. */
	export interface InputDataConfig {

		/**
		 * Required
		 * Max length: 1024
		 * Pattern: s3://[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](/.*)?
		 */
		S3Uri: string;

		/**
		 * Required
		 * Max length: 256
		 * Pattern: ^[-\w.]+\/[-\w.+]+$
		 */
		ContentType: string;
	}

	/** The input configuration properties for requesting a batch translation job. */
	export interface InputDataConfigFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Pattern: s3://[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](/.*)?
		 */
		S3Uri: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Pattern: ^[-\w.]+\/[-\w.+]+$
		 */
		ContentType: FormControl<string | null | undefined>,
	}
	export function CreateInputDataConfigFormGroup() {
		return new FormGroup<InputDataConfigFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024)]),
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
		});

	}


	/** The output configuration properties for a batch translation job. */
	export interface OutputDataConfig {

		/**
		 * Required
		 * Max length: 1024
		 * Pattern: s3://[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](/.*)?
		 */
		S3Uri: string;
	}

	/** The output configuration properties for a batch translation job. */
	export interface OutputDataConfigFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Pattern: s3://[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](/.*)?
		 */
		S3Uri: FormControl<string | null | undefined>,
	}
	export function CreateOutputDataConfigFormGroup() {
		return new FormGroup<OutputDataConfigFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024)]),
		});

	}

	export interface DescribeTextTranslationJobRequest {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$
		 */
		JobId: string;
	}
	export interface DescribeTextTranslationJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$
		 */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTextTranslationJobRequestFormGroup() {
		return new FormGroup<DescribeTextTranslationJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(1)]),
		});

	}

	export interface GetTerminologyResponse {

		/** The properties of the custom terminology. */
		TerminologyProperties?: TerminologyProperties;

		/** The location of the custom terminology data. */
		TerminologyDataLocation?: TerminologyDataLocation;
	}
	export interface GetTerminologyResponseFormProperties {
	}
	export function CreateGetTerminologyResponseFormGroup() {
		return new FormGroup<GetTerminologyResponseFormProperties>({
		});

	}


	/** The properties of the custom terminology. */
	export interface TerminologyProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^([A-Za-z0-9-]_?)+$
		 */
		Name?: string | null;

		/**
		 * Max length: 256
		 * Pattern: [\P{M}\p{M}]{0,256}
		 */
		Description?: string | null;

		/** Pattern: ^arn:aws((-us-gov)|(-iso)|(-iso-b)|(-cn))?:translate:[a-zA-Z0-9-]+:[0-9]{12}:terminology/.+?/.+?$ */
		Arn?: string | null;

		/**
		 * Max length: 5
		 * Min length: 2
		 */
		SourceLanguageCode?: string | null;
		TargetLanguageCodes?: Array<string>;

		/** The encryption key used to encrypt the custom terminologies used by Amazon Translate. */
		EncryptionKey?: EncryptionKey;
		SizeBytes?: number | null;
		TermCount?: number | null;
		CreatedAt?: Date | null;
		LastUpdatedAt?: Date | null;
	}

	/** The properties of the custom terminology. */
	export interface TerminologyPropertiesFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^([A-Za-z0-9-]_?)+$
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Pattern: [\P{M}\p{M}]{0,256}
		 */
		Description: FormControl<string | null | undefined>,

		/** Pattern: ^arn:aws((-us-gov)|(-iso)|(-iso-b)|(-cn))?:translate:[a-zA-Z0-9-]+:[0-9]{12}:terminology/.+?/.+?$ */
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 5
		 * Min length: 2
		 */
		SourceLanguageCode: FormControl<string | null | undefined>,
		SizeBytes: FormControl<number | null | undefined>,
		TermCount: FormControl<number | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateTerminologyPropertiesFormGroup() {
		return new FormGroup<TerminologyPropertiesFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Arn: new FormControl<string | null | undefined>(undefined),
			SourceLanguageCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(5), Validators.minLength(2)]),
			SizeBytes: new FormControl<number | null | undefined>(undefined),
			TermCount: new FormControl<number | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The encryption key used to encrypt the custom terminologies used by Amazon Translate. */
	export interface EncryptionKey {

		/** Required */
		Type: EncryptionKeyType;

		/**
		 * Required
		 * Max length: 400
		 * Min length: 1
		 * Pattern: (arn:aws((-us-gov)|(-iso)|(-iso-b)|(-cn))?:kms:)?([a-z]{2}-[a-z]+(-[a-z]+)?-\d:)?(\d{12}:)?(((key/)?[a-zA-Z0-9-_]+)|(alias/[a-zA-Z0-9:/_-]+))
		 */
		Id: string;
	}

	/** The encryption key used to encrypt the custom terminologies used by Amazon Translate. */
	export interface EncryptionKeyFormProperties {

		/** Required */
		Type: FormControl<EncryptionKeyType | null | undefined>,

		/**
		 * Required
		 * Max length: 400
		 * Min length: 1
		 * Pattern: (arn:aws((-us-gov)|(-iso)|(-iso-b)|(-cn))?:kms:)?([a-z]{2}-[a-z]+(-[a-z]+)?-\d:)?(\d{12}:)?(((key/)?[a-zA-Z0-9-_]+)|(alias/[a-zA-Z0-9:/_-]+))
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionKeyFormGroup() {
		return new FormGroup<EncryptionKeyFormProperties>({
			Type: new FormControl<EncryptionKeyType | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(400), Validators.minLength(1)]),
		});

	}

	export enum EncryptionKeyType { KMS = 0 }


	/** The location of the custom terminology data. */
	export interface TerminologyDataLocation {

		/**
		 * Required
		 * Max length: 10000
		 * Pattern: [\P{M}\p{M}]{0,10000}
		 */
		RepositoryType: string;

		/**
		 * Required
		 * Max length: 10000
		 * Pattern: [\P{M}\p{M}]{0,10000}
		 */
		Location: string;
	}

	/** The location of the custom terminology data. */
	export interface TerminologyDataLocationFormProperties {

		/**
		 * Required
		 * Max length: 10000
		 * Pattern: [\P{M}\p{M}]{0,10000}
		 */
		RepositoryType: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 10000
		 * Pattern: [\P{M}\p{M}]{0,10000}
		 */
		Location: FormControl<string | null | undefined>,
	}
	export function CreateTerminologyDataLocationFormGroup() {
		return new FormGroup<TerminologyDataLocationFormProperties>({
			RepositoryType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(10000)]),
			Location: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(10000)]),
		});

	}

	export interface GetTerminologyRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^([A-Za-z0-9-]_?)+$
		 */
		Name: string;

		/** Required */
		TerminologyDataFormat: GetTerminologyRequestTerminologyDataFormat;
	}
	export interface GetTerminologyRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^([A-Za-z0-9-]_?)+$
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		TerminologyDataFormat: FormControl<GetTerminologyRequestTerminologyDataFormat | null | undefined>,
	}
	export function CreateGetTerminologyRequestFormGroup() {
		return new FormGroup<GetTerminologyRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			TerminologyDataFormat: new FormControl<GetTerminologyRequestTerminologyDataFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GetTerminologyRequestTerminologyDataFormat { CSV = 0, TMX = 1 }

	export interface InvalidParameterValueException {
	}
	export interface InvalidParameterValueExceptionFormProperties {
	}
	export function CreateInvalidParameterValueExceptionFormGroup() {
		return new FormGroup<InvalidParameterValueExceptionFormProperties>({
		});

	}

	export interface ImportTerminologyResponse {

		/** The properties of the custom terminology. */
		TerminologyProperties?: TerminologyProperties;
	}
	export interface ImportTerminologyResponseFormProperties {
	}
	export function CreateImportTerminologyResponseFormGroup() {
		return new FormGroup<ImportTerminologyResponseFormProperties>({
		});

	}

	export interface ImportTerminologyRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^([A-Za-z0-9-]_?)+$
		 */
		Name: string;

		/** Required */
		MergeStrategy: ImportTerminologyRequestMergeStrategy;

		/**
		 * Max length: 256
		 * Pattern: [\P{M}\p{M}]{0,256}
		 */
		Description?: string | null;

		/**
		 * The data associated with the custom terminology.
		 * Required
		 */
		TerminologyData: TerminologyData;

		/** The encryption key used to encrypt the custom terminologies used by Amazon Translate. */
		EncryptionKey?: EncryptionKey;
	}
	export interface ImportTerminologyRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^([A-Za-z0-9-]_?)+$
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		MergeStrategy: FormControl<ImportTerminologyRequestMergeStrategy | null | undefined>,

		/**
		 * Max length: 256
		 * Pattern: [\P{M}\p{M}]{0,256}
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateImportTerminologyRequestFormGroup() {
		return new FormGroup<ImportTerminologyRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			MergeStrategy: new FormControl<ImportTerminologyRequestMergeStrategy | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export enum ImportTerminologyRequestMergeStrategy { OVERWRITE = 0 }


	/** The data associated with the custom terminology. */
	export interface TerminologyData {

		/**
		 * Required
		 * Max length: 10485760
		 */
		File: string;

		/** Required */
		Format: GetTerminologyRequestTerminologyDataFormat;
	}

	/** The data associated with the custom terminology. */
	export interface TerminologyDataFormProperties {

		/**
		 * Required
		 * Max length: 10485760
		 */
		File: FormControl<string | null | undefined>,

		/** Required */
		Format: FormControl<GetTerminologyRequestTerminologyDataFormat | null | undefined>,
	}
	export function CreateTerminologyDataFormGroup() {
		return new FormGroup<TerminologyDataFormProperties>({
			File: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(10485760)]),
			Format: new FormControl<GetTerminologyRequestTerminologyDataFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface ListTerminologiesResponse {
		TerminologyPropertiesList?: Array<TerminologyProperties>;

		/**
		 * Max length: 8192
		 * Pattern: \p{ASCII}{0,8192}
		 */
		NextToken?: string | null;
	}
	export interface ListTerminologiesResponseFormProperties {

		/**
		 * Max length: 8192
		 * Pattern: \p{ASCII}{0,8192}
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTerminologiesResponseFormGroup() {
		return new FormGroup<ListTerminologiesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192)]),
		});

	}

	export interface ListTerminologiesRequest {

		/**
		 * Max length: 8192
		 * Pattern: \p{ASCII}{0,8192}
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		MaxResults?: number | null;
	}
	export interface ListTerminologiesRequestFormProperties {

		/**
		 * Max length: 8192
		 * Pattern: \p{ASCII}{0,8192}
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTerminologiesRequestFormGroup() {
		return new FormGroup<ListTerminologiesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export interface ListTextTranslationJobsResponse {
		TextTranslationJobPropertiesList?: Array<TextTranslationJobProperties>;

		/**
		 * Max length: 8192
		 * Pattern: \p{ASCII}{0,8192}
		 */
		NextToken?: string | null;
	}
	export interface ListTextTranslationJobsResponseFormProperties {

		/**
		 * Max length: 8192
		 * Pattern: \p{ASCII}{0,8192}
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTextTranslationJobsResponseFormGroup() {
		return new FormGroup<ListTextTranslationJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192)]),
		});

	}

	export interface ListTextTranslationJobsRequest {

		/** Provides information for filtering a list of translation jobs. For more information, see <a>ListTextTranslationJobs</a>. */
		Filter?: TextTranslationJobFilter;

		/**
		 * Max length: 8192
		 * Pattern: \p{ASCII}{0,8192}
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		MaxResults?: number | null;
	}
	export interface ListTextTranslationJobsRequestFormProperties {

		/**
		 * Max length: 8192
		 * Pattern: \p{ASCII}{0,8192}
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTextTranslationJobsRequestFormGroup() {
		return new FormGroup<ListTextTranslationJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}


	/** Provides information for filtering a list of translation jobs. For more information, see <a>ListTextTranslationJobs</a>. */
	export interface TextTranslationJobFilter {

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$
		 */
		JobName?: string | null;
		JobStatus?: TextTranslationJobPropertiesJobStatus | null;
		SubmittedBeforeTime?: Date | null;
		SubmittedAfterTime?: Date | null;
	}

	/** Provides information for filtering a list of translation jobs. For more information, see <a>ListTextTranslationJobs</a>. */
	export interface TextTranslationJobFilterFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$
		 */
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<TextTranslationJobPropertiesJobStatus | null | undefined>,
		SubmittedBeforeTime: FormControl<Date | null | undefined>,
		SubmittedAfterTime: FormControl<Date | null | undefined>,
	}
	export function CreateTextTranslationJobFilterFormGroup() {
		return new FormGroup<TextTranslationJobFilterFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			JobStatus: new FormControl<TextTranslationJobPropertiesJobStatus | null | undefined>(undefined),
			SubmittedBeforeTime: new FormControl<Date | null | undefined>(undefined),
			SubmittedAfterTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface InvalidFilterException {
	}
	export interface InvalidFilterExceptionFormProperties {
	}
	export function CreateInvalidFilterExceptionFormGroup() {
		return new FormGroup<InvalidFilterExceptionFormProperties>({
		});

	}

	export interface StartTextTranslationJobResponse {

		/**
		 * Max length: 32
		 * Min length: 1
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$
		 */
		JobId?: string | null;
		JobStatus?: TextTranslationJobPropertiesJobStatus | null;
	}
	export interface StartTextTranslationJobResponseFormProperties {

		/**
		 * Max length: 32
		 * Min length: 1
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$
		 */
		JobId: FormControl<string | null | undefined>,
		JobStatus: FormControl<TextTranslationJobPropertiesJobStatus | null | undefined>,
	}
	export function CreateStartTextTranslationJobResponseFormGroup() {
		return new FormGroup<StartTextTranslationJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32), Validators.minLength(1)]),
			JobStatus: new FormControl<TextTranslationJobPropertiesJobStatus | null | undefined>(undefined),
		});

	}

	export interface StartTextTranslationJobRequest {

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$
		 */
		JobName?: string | null;

		/**
		 * The input configuration properties for requesting a batch translation job.
		 * Required
		 */
		InputDataConfig: InputDataConfig;

		/**
		 * The output configuration properties for a batch translation job.
		 * Required
		 */
		OutputDataConfig: OutputDataConfig;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: arn:aws(-[^:]+)?:iam::[0-9]{12}:role/.+
		 */
		DataAccessRoleArn: string;

		/**
		 * Required
		 * Max length: 5
		 * Min length: 2
		 */
		SourceLanguageCode: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		TargetLanguageCodes: Array<string>;
		TerminologyNames?: Array<string>;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-]+$
		 */
		ClientToken: string;
	}
	export interface StartTextTranslationJobRequestFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$
		 */
		JobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: arn:aws(-[^:]+)?:iam::[0-9]{12}:role/.+
		 */
		DataAccessRoleArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 5
		 * Min length: 2
		 */
		SourceLanguageCode: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-]+$
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartTextTranslationJobRequestFormGroup() {
		return new FormGroup<StartTextTranslationJobRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20)]),
			SourceLanguageCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(5), Validators.minLength(2)]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export interface UnsupportedLanguagePairException {
	}
	export interface UnsupportedLanguagePairExceptionFormProperties {
	}
	export function CreateUnsupportedLanguagePairExceptionFormGroup() {
		return new FormGroup<UnsupportedLanguagePairExceptionFormProperties>({
		});

	}

	export interface StopTextTranslationJobResponse {

		/**
		 * Max length: 32
		 * Min length: 1
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$
		 */
		JobId?: string | null;
		JobStatus?: TextTranslationJobPropertiesJobStatus | null;
	}
	export interface StopTextTranslationJobResponseFormProperties {

		/**
		 * Max length: 32
		 * Min length: 1
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$
		 */
		JobId: FormControl<string | null | undefined>,
		JobStatus: FormControl<TextTranslationJobPropertiesJobStatus | null | undefined>,
	}
	export function CreateStopTextTranslationJobResponseFormGroup() {
		return new FormGroup<StopTextTranslationJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32), Validators.minLength(1)]),
			JobStatus: new FormControl<TextTranslationJobPropertiesJobStatus | null | undefined>(undefined),
		});

	}

	export interface StopTextTranslationJobRequest {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$
		 */
		JobId: string;
	}
	export interface StopTextTranslationJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$
		 */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopTextTranslationJobRequestFormGroup() {
		return new FormGroup<StopTextTranslationJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(1)]),
		});

	}

	export interface TranslateTextResponse {

		/**
		 * Required
		 * Max length: 10000
		 * Pattern: [\P{M}\p{M}]{0,10000}
		 */
		TranslatedText: string;

		/**
		 * Required
		 * Max length: 5
		 * Min length: 2
		 */
		SourceLanguageCode: string;

		/**
		 * Required
		 * Max length: 5
		 * Min length: 2
		 */
		TargetLanguageCode: string;
		AppliedTerminologies?: Array<AppliedTerminology>;
	}
	export interface TranslateTextResponseFormProperties {

		/**
		 * Required
		 * Max length: 10000
		 * Pattern: [\P{M}\p{M}]{0,10000}
		 */
		TranslatedText: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 5
		 * Min length: 2
		 */
		SourceLanguageCode: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 5
		 * Min length: 2
		 */
		TargetLanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateTranslateTextResponseFormGroup() {
		return new FormGroup<TranslateTextResponseFormProperties>({
			TranslatedText: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(10000)]),
			SourceLanguageCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(5), Validators.minLength(2)]),
			TargetLanguageCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(5), Validators.minLength(2)]),
		});

	}


	/** The custom terminology applied to the input text by Amazon Translate for the translated text response. This is optional in the response and will only be present if you specified terminology input in the request. Currently, only one terminology can be applied per TranslateText request. */
	export interface AppliedTerminology {

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^([A-Za-z0-9-]_?)+$
		 */
		Name?: string | null;
		Terms?: Array<Term>;
	}

	/** The custom terminology applied to the input text by Amazon Translate for the translated text response. This is optional in the response and will only be present if you specified terminology input in the request. Currently, only one terminology can be applied per TranslateText request. */
	export interface AppliedTerminologyFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^([A-Za-z0-9-]_?)+$
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAppliedTerminologyFormGroup() {
		return new FormGroup<AppliedTerminologyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** The term being translated by the custom terminology. */
	export interface Term {

		/**
		 * Max length: 10000
		 * Pattern: [\P{M}\p{M}]{0,10000}
		 */
		SourceText?: string | null;

		/**
		 * Max length: 10000
		 * Pattern: [\P{M}\p{M}]{0,10000}
		 */
		TargetText?: string | null;
	}

	/** The term being translated by the custom terminology. */
	export interface TermFormProperties {

		/**
		 * Max length: 10000
		 * Pattern: [\P{M}\p{M}]{0,10000}
		 */
		SourceText: FormControl<string | null | undefined>,

		/**
		 * Max length: 10000
		 * Pattern: [\P{M}\p{M}]{0,10000}
		 */
		TargetText: FormControl<string | null | undefined>,
	}
	export function CreateTermFormGroup() {
		return new FormGroup<TermFormProperties>({
			SourceText: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10000)]),
			TargetText: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10000)]),
		});

	}

	export interface TranslateTextRequest {

		/**
		 * Required
		 * Max length: 5000
		 * Min length: 1
		 * Pattern: [\P{M}\p{M}]{1,5000}
		 */
		Text: string;
		TerminologyNames?: Array<string>;

		/**
		 * Required
		 * Max length: 5
		 * Min length: 2
		 */
		SourceLanguageCode: string;

		/**
		 * Required
		 * Max length: 5
		 * Min length: 2
		 */
		TargetLanguageCode: string;
	}
	export interface TranslateTextRequestFormProperties {

		/**
		 * Required
		 * Max length: 5000
		 * Min length: 1
		 * Pattern: [\P{M}\p{M}]{1,5000}
		 */
		Text: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 5
		 * Min length: 2
		 */
		SourceLanguageCode: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 5
		 * Min length: 2
		 */
		TargetLanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateTranslateTextRequestFormGroup() {
		return new FormGroup<TranslateTextRequestFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(5000), Validators.minLength(1)]),
			SourceLanguageCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(5), Validators.minLength(2)]),
			TargetLanguageCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(5), Validators.minLength(2)]),
		});

	}

	export interface TextSizeLimitExceededException {
	}
	export interface TextSizeLimitExceededExceptionFormProperties {
	}
	export function CreateTextSizeLimitExceededExceptionFormGroup() {
		return new FormGroup<TextSizeLimitExceededExceptionFormProperties>({
		});

	}

	export interface DetectedLanguageLowConfidenceException {
	}
	export interface DetectedLanguageLowConfidenceExceptionFormProperties {
	}
	export function CreateDetectedLanguageLowConfidenceExceptionFormGroup() {
		return new FormGroup<DetectedLanguageLowConfidenceExceptionFormProperties>({
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}

	export enum TerminologyDataFormat { CSV = 0, TMX = 1 }

	export enum MergeStrategy { OVERWRITE = 0 }

	export enum JobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, COMPLETED_WITH_ERROR = 3, FAILED = 4, STOP_REQUESTED = 5, STOPPED = 6 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * A synchronous action that deletes a custom terminology.
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.DeleteTerminology
		 * @return {void} Success
		 */
		DeleteTerminology(requestBody: DeleteTerminologyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.DeleteTerminology', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the properties associated with an asycnhronous batch translation job including name, ID, status, source and target languages, input/output S3 buckets, and so on.
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob
		 * @return {DescribeTextTranslationJobResponse} Success
		 */
		DescribeTextTranslationJob(requestBody: DescribeTextTranslationJobRequest): Observable<DescribeTextTranslationJobResponse> {
			return this.http.post<DescribeTextTranslationJobResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a custom terminology.
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.GetTerminology
		 * @return {GetTerminologyResponse} Success
		 */
		GetTerminology(requestBody: GetTerminologyRequest): Observable<GetTerminologyResponse> {
			return this.http.post<GetTerminologyResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.GetTerminology', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates or updates a custom terminology, depending on whether or not one already exists for the given terminology name. Importing a terminology with the same name as an existing one will merge the terminologies based on the chosen merge strategy. Currently, the only supported merge strategy is OVERWRITE, and so the imported terminology will overwrite an existing terminology of the same name.</p> <p>If you import a terminology that overwrites an existing one, the new terminology take up to 10 minutes to fully propagate and be available for use in a translation due to cache policies with the DataPlane service that performs the translations.</p>
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology
		 * @return {ImportTerminologyResponse} Success
		 */
		ImportTerminology(requestBody: ImportTerminologyRequest): Observable<ImportTerminologyResponse> {
			return this.http.post<ImportTerminologyResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides a list of custom terminologies associated with your account.
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.ListTerminologies
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTerminologiesResponse} Success
		 */
		ListTerminologies(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTerminologiesRequest): Observable<ListTerminologiesResponse> {
			return this.http.post<ListTerminologiesResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.ListTerminologies?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the batch translation jobs that you have submitted.
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.ListTextTranslationJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTextTranslationJobsResponse} Success
		 */
		ListTextTranslationJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTextTranslationJobsRequest): Observable<ListTextTranslationJobsResponse> {
			return this.http.post<ListTextTranslationJobsResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.ListTextTranslationJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts an asynchronous batch translation job. Batch translation jobs can be used to translate large volumes of text across multiple documents at once. For more information, see <a>async</a>.</p> <p>Batch translation jobs can be described with the <a>DescribeTextTranslationJob</a> operation, listed with the <a>ListTextTranslationJobs</a> operation, and stopped with the <a>StopTextTranslationJob</a> operation.</p> <note> <p>Amazon Translate does not support batch translation of multiple source languages at once.</p> </note>
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.StartTextTranslationJob
		 * @return {StartTextTranslationJobResponse} Success
		 */
		StartTextTranslationJob(requestBody: StartTextTranslationJobRequest): Observable<StartTextTranslationJobResponse> {
			return this.http.post<StartTextTranslationJobResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.StartTextTranslationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops an asynchronous batch translation job that is in progress.</p> <p>If the job's state is <code>IN_PROGRESS</code>, the job will be marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state. Otherwise, the job is put into the <code>STOPPED</code> state.</p> <p>Asynchronous batch translation jobs are started with the <a>StartTextTranslationJob</a> operation. You can use the <a>DescribeTextTranslationJob</a> or <a>ListTextTranslationJobs</a> operations to get a batch translation job's <code>JobId</code>.</p>
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.StopTextTranslationJob
		 * @return {StopTextTranslationJobResponse} Success
		 */
		StopTextTranslationJob(requestBody: StopTextTranslationJobRequest): Observable<StopTextTranslationJobResponse> {
			return this.http.post<StopTextTranslationJobResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.StopTextTranslationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Translates input text from the source language to the target language. For a list of available languages and language codes, see <a>what-is-languages</a>.
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.TranslateText
		 * @return {TranslateTextResponse} Success
		 */
		TranslateText(requestBody: TranslateTextRequest): Observable<TranslateTextResponse> {
			return this.http.post<TranslateTextResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.TranslateText', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum DeleteTerminologyX_Amz_Target { AWSShineFrontendService_20170701_DeleteTerminology = 0 }

	export enum DescribeTextTranslationJobX_Amz_Target { AWSShineFrontendService_20170701_DescribeTextTranslationJob = 0 }

	export enum GetTerminologyX_Amz_Target { AWSShineFrontendService_20170701_GetTerminology = 0 }

	export enum ImportTerminologyX_Amz_Target { AWSShineFrontendService_20170701_ImportTerminology = 0 }

	export enum ListTerminologiesX_Amz_Target { AWSShineFrontendService_20170701_ListTerminologies = 0 }

	export enum ListTextTranslationJobsX_Amz_Target { AWSShineFrontendService_20170701_ListTextTranslationJobs = 0 }

	export enum StartTextTranslationJobX_Amz_Target { AWSShineFrontendService_20170701_StartTextTranslationJob = 0 }

	export enum StopTextTranslationJobX_Amz_Target { AWSShineFrontendService_20170701_StopTextTranslationJob = 0 }

	export enum TranslateTextX_Amz_Target { AWSShineFrontendService_20170701_TranslateText = 0 }

}

