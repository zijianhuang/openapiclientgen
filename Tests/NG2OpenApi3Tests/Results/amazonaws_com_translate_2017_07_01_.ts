import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateParallelDataResponse {
		Name?: string;
		Status?: ParallelDataStatus;
	}
	export interface CreateParallelDataResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		Status: FormControl<ParallelDataStatus | null | undefined>,
	}
	export function CreateCreateParallelDataResponseFormGroup() {
		return new FormGroup<CreateParallelDataResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ParallelDataStatus | null | undefined>(undefined),
		});

	}

	export enum ParallelDataStatus { CREATING = 0, UPDATING = 1, ACTIVE = 2, DELETING = 3, FAILED = 4 }

	export interface CreateParallelDataRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		ParallelDataConfig: ParallelDataConfig;

		/** The encryption key used to encrypt this object. */
		EncryptionKey?: EncryptionKey;

		/** Required */
		ClientToken: string;
		Tags?: Array<Tag>;
	}
	export interface CreateParallelDataRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateParallelDataRequestFormGroup() {
		return new FormGroup<CreateParallelDataRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the format and S3 location of the parallel data input file. */
	export interface ParallelDataConfig {

		/** Required */
		S3Uri: string;

		/** Required */
		Format: ParallelDataFormat;
	}

	/** Specifies the format and S3 location of the parallel data input file. */
	export interface ParallelDataConfigFormProperties {

		/** Required */
		S3Uri: FormControl<string | null | undefined>,

		/** Required */
		Format: FormControl<ParallelDataFormat | null | undefined>,
	}
	export function CreateParallelDataConfigFormGroup() {
		return new FormGroup<ParallelDataConfigFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Format: new FormControl<ParallelDataFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ParallelDataFormat { TSV = 0, CSV = 1, TMX = 2 }


	/** The encryption key used to encrypt this object. */
	export interface EncryptionKey {

		/** Required */
		Type: EncryptionKeyType;

		/** Required */
		Id: string;
	}

	/** The encryption key used to encrypt this object. */
	export interface EncryptionKeyFormProperties {

		/** Required */
		Type: FormControl<EncryptionKeyType | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionKeyFormGroup() {
		return new FormGroup<EncryptionKeyFormProperties>({
			Type: new FormControl<EncryptionKeyType | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EncryptionKeyType { KMS = 0 }


	/** A key-value pair that adds as a metadata to a resource used by Amazon Translate.  */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A key-value pair that adds as a metadata to a resource used by Amazon Translate.  */
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

	export interface InvalidParameterValueException {
	}
	export interface InvalidParameterValueExceptionFormProperties {
	}
	export function CreateInvalidParameterValueExceptionFormGroup() {
		return new FormGroup<InvalidParameterValueExceptionFormProperties>({
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

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
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

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
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

	export interface ConcurrentModificationException {
	}
	export interface ConcurrentModificationExceptionFormProperties {
	}
	export function CreateConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ConcurrentModificationExceptionFormProperties>({
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

	export interface DeleteParallelDataResponse {
		Name?: string;
		Status?: ParallelDataStatus;
	}
	export interface DeleteParallelDataResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		Status: FormControl<ParallelDataStatus | null | undefined>,
	}
	export function CreateDeleteParallelDataResponseFormGroup() {
		return new FormGroup<DeleteParallelDataResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ParallelDataStatus | null | undefined>(undefined),
		});

	}

	export interface DeleteParallelDataRequest {

		/** Required */
		Name: string;
	}
	export interface DeleteParallelDataRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteParallelDataRequestFormGroup() {
		return new FormGroup<DeleteParallelDataRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DeleteTerminologyRequest {

		/** Required */
		Name: string;
	}
	export interface DeleteTerminologyRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTerminologyRequestFormGroup() {
		return new FormGroup<DeleteTerminologyRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeTextTranslationJobResponse {
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
		JobId?: string;
		JobName?: string;
		JobStatus?: JobStatus;
		JobDetails?: JobDetails;
		SourceLanguageCode?: string;
		TargetLanguageCodes?: Array<string>;
		TerminologyNames?: Array<string>;
		ParallelDataNames?: Array<string>;
		Message?: string;
		SubmittedTime?: Date;
		EndTime?: Date;
		InputDataConfig?: InputDataConfig;
		OutputDataConfig?: OutputDataConfig;
		DataAccessRoleArn?: string;
		Settings?: TranslationSettings;
	}

	/** Provides information about a translation job. */
	export interface TextTranslationJobPropertiesFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		SourceLanguageCode: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		SubmittedTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateTextTranslationJobPropertiesFormGroup() {
		return new FormGroup<TextTranslationJobPropertiesFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			SourceLanguageCode: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			SubmittedTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, COMPLETED_WITH_ERROR = 3, FAILED = 4, STOP_REQUESTED = 5, STOPPED = 6 }


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

		/** Required */
		S3Uri: string;

		/** Required */
		ContentType: string;
	}

	/** The input configuration properties for requesting a batch translation job. */
	export interface InputDataConfigFormProperties {

		/** Required */
		S3Uri: FormControl<string | null | undefined>,

		/** Required */
		ContentType: FormControl<string | null | undefined>,
	}
	export function CreateInputDataConfigFormGroup() {
		return new FormGroup<InputDataConfigFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The output configuration properties for a batch translation job. */
	export interface OutputDataConfig {

		/** Required */
		S3Uri: string;

		/** The encryption key used to encrypt this object. */
		EncryptionKey?: EncryptionKey;
	}

	/** The output configuration properties for a batch translation job. */
	export interface OutputDataConfigFormProperties {

		/** Required */
		S3Uri: FormControl<string | null | undefined>,
	}
	export function CreateOutputDataConfigFormGroup() {
		return new FormGroup<OutputDataConfigFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings to configure your translation output, including the option to set the formality level of the output text and the option to mask profane words and phrases. */
	export interface TranslationSettings {
		Formality?: Formality;
		Profanity?: Profanity;
	}

	/** Settings to configure your translation output, including the option to set the formality level of the output text and the option to mask profane words and phrases. */
	export interface TranslationSettingsFormProperties {
		Formality: FormControl<Formality | null | undefined>,
		Profanity: FormControl<Profanity | null | undefined>,
	}
	export function CreateTranslationSettingsFormGroup() {
		return new FormGroup<TranslationSettingsFormProperties>({
			Formality: new FormControl<Formality | null | undefined>(undefined),
			Profanity: new FormControl<Profanity | null | undefined>(undefined),
		});

	}

	export enum Formality { FORMAL = 0, INFORMAL = 1 }

	export enum Profanity { MASK = 0 }

	export interface DescribeTextTranslationJobRequest {

		/** Required */
		JobId: string;
	}
	export interface DescribeTextTranslationJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTextTranslationJobRequestFormGroup() {
		return new FormGroup<DescribeTextTranslationJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetParallelDataResponse {
		ParallelDataProperties?: ParallelDataProperties;
		DataLocation?: ParallelDataDataLocation;
		AuxiliaryDataLocation?: ParallelDataDataLocation;
		LatestUpdateAttemptAuxiliaryDataLocation?: ParallelDataDataLocation;
	}
	export interface GetParallelDataResponseFormProperties {
	}
	export function CreateGetParallelDataResponseFormGroup() {
		return new FormGroup<GetParallelDataResponseFormProperties>({
		});

	}


	/** The properties of a parallel data resource. */
	export interface ParallelDataProperties {
		Name?: string;
		Arn?: string;
		Description?: string;
		Status?: ParallelDataStatus;
		SourceLanguageCode?: string;
		TargetLanguageCodes?: Array<string>;
		ParallelDataConfig?: ParallelDataConfig;
		Message?: string;
		ImportedDataSize?: number | null;
		ImportedRecordCount?: number | null;
		FailedRecordCount?: number | null;
		SkippedRecordCount?: number | null;

		/** The encryption key used to encrypt this object. */
		EncryptionKey?: EncryptionKey;
		CreatedAt?: Date;
		LastUpdatedAt?: Date;
		LatestUpdateAttemptStatus?: ParallelDataStatus;
		LatestUpdateAttemptAt?: Date;
	}

	/** The properties of a parallel data resource. */
	export interface ParallelDataPropertiesFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<ParallelDataStatus | null | undefined>,
		SourceLanguageCode: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		ImportedDataSize: FormControl<number | null | undefined>,
		ImportedRecordCount: FormControl<number | null | undefined>,
		FailedRecordCount: FormControl<number | null | undefined>,
		SkippedRecordCount: FormControl<number | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
		LatestUpdateAttemptStatus: FormControl<ParallelDataStatus | null | undefined>,
		LatestUpdateAttemptAt: FormControl<Date | null | undefined>,
	}
	export function CreateParallelDataPropertiesFormGroup() {
		return new FormGroup<ParallelDataPropertiesFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ParallelDataStatus | null | undefined>(undefined),
			SourceLanguageCode: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			ImportedDataSize: new FormControl<number | null | undefined>(undefined),
			ImportedRecordCount: new FormControl<number | null | undefined>(undefined),
			FailedRecordCount: new FormControl<number | null | undefined>(undefined),
			SkippedRecordCount: new FormControl<number | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			LatestUpdateAttemptStatus: new FormControl<ParallelDataStatus | null | undefined>(undefined),
			LatestUpdateAttemptAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The location of the most recent parallel data input file that was successfully imported into Amazon Translate. */
	export interface ParallelDataDataLocation {

		/** Required */
		RepositoryType: string;

		/** Required */
		Location: string;
	}

	/** The location of the most recent parallel data input file that was successfully imported into Amazon Translate. */
	export interface ParallelDataDataLocationFormProperties {

		/** Required */
		RepositoryType: FormControl<string | null | undefined>,

		/** Required */
		Location: FormControl<string | null | undefined>,
	}
	export function CreateParallelDataDataLocationFormGroup() {
		return new FormGroup<ParallelDataDataLocationFormProperties>({
			RepositoryType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetParallelDataRequest {

		/** Required */
		Name: string;
	}
	export interface GetParallelDataRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetParallelDataRequestFormGroup() {
		return new FormGroup<GetParallelDataRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTerminologyResponse {
		TerminologyProperties?: TerminologyProperties;
		TerminologyDataLocation?: TerminologyDataLocation;
		AuxiliaryDataLocation?: TerminologyDataLocation;
	}
	export interface GetTerminologyResponseFormProperties {
	}
	export function CreateGetTerminologyResponseFormGroup() {
		return new FormGroup<GetTerminologyResponseFormProperties>({
		});

	}


	/** The properties of the custom terminology. */
	export interface TerminologyProperties {
		Name?: string;
		Description?: string;
		Arn?: string;
		SourceLanguageCode?: string;
		TargetLanguageCodes?: Array<string>;
		EncryptionKey?: EncryptionKey;
		SizeBytes?: number | null;
		TermCount?: number | null;
		CreatedAt?: Date;
		LastUpdatedAt?: Date;
		Directionality?: Directionality;
		Message?: string;
		SkippedTermCount?: number | null;
		Format?: TerminologyDataFormat;
	}

	/** The properties of the custom terminology. */
	export interface TerminologyPropertiesFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		SourceLanguageCode: FormControl<string | null | undefined>,
		SizeBytes: FormControl<number | null | undefined>,
		TermCount: FormControl<number | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
		Directionality: FormControl<Directionality | null | undefined>,
		Message: FormControl<string | null | undefined>,
		SkippedTermCount: FormControl<number | null | undefined>,
		Format: FormControl<TerminologyDataFormat | null | undefined>,
	}
	export function CreateTerminologyPropertiesFormGroup() {
		return new FormGroup<TerminologyPropertiesFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			SourceLanguageCode: new FormControl<string | null | undefined>(undefined),
			SizeBytes: new FormControl<number | null | undefined>(undefined),
			TermCount: new FormControl<number | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Directionality: new FormControl<Directionality | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			SkippedTermCount: new FormControl<number | null | undefined>(undefined),
			Format: new FormControl<TerminologyDataFormat | null | undefined>(undefined),
		});

	}

	export enum Directionality { UNI = 0, MULTI = 1 }

	export enum TerminologyDataFormat { CSV = 0, TMX = 1, TSV = 2 }


	/** The location of the custom terminology data. */
	export interface TerminologyDataLocation {

		/** Required */
		RepositoryType: string;

		/** Required */
		Location: string;
	}

	/** The location of the custom terminology data. */
	export interface TerminologyDataLocationFormProperties {

		/** Required */
		RepositoryType: FormControl<string | null | undefined>,

		/** Required */
		Location: FormControl<string | null | undefined>,
	}
	export function CreateTerminologyDataLocationFormGroup() {
		return new FormGroup<TerminologyDataLocationFormProperties>({
			RepositoryType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTerminologyRequest {

		/** Required */
		Name: string;
		TerminologyDataFormat?: TerminologyDataFormat;
	}
	export interface GetTerminologyRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		TerminologyDataFormat: FormControl<TerminologyDataFormat | null | undefined>,
	}
	export function CreateGetTerminologyRequestFormGroup() {
		return new FormGroup<GetTerminologyRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TerminologyDataFormat: new FormControl<TerminologyDataFormat | null | undefined>(undefined),
		});

	}

	export interface ImportTerminologyResponse {
		TerminologyProperties?: TerminologyProperties;
		AuxiliaryDataLocation?: TerminologyDataLocation;
	}
	export interface ImportTerminologyResponseFormProperties {
	}
	export function CreateImportTerminologyResponseFormGroup() {
		return new FormGroup<ImportTerminologyResponseFormProperties>({
		});

	}

	export interface ImportTerminologyRequest {

		/** Required */
		Name: string;

		/** Required */
		MergeStrategy: MergeStrategy;
		Description?: string;

		/** Required */
		TerminologyData: TerminologyData;
		EncryptionKey?: EncryptionKey;
		Tags?: Array<Tag>;
	}
	export interface ImportTerminologyRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		MergeStrategy: FormControl<MergeStrategy | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateImportTerminologyRequestFormGroup() {
		return new FormGroup<ImportTerminologyRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MergeStrategy: new FormControl<MergeStrategy | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MergeStrategy { OVERWRITE = 0 }


	/** The data associated with the custom terminology. For information about the custom terminology file, see <a href="https://docs.aws.amazon.com/translate/latest/dg/creating-custom-terminology.html"> Creating a Custom Terminology</a>. */
	export interface TerminologyData {

		/** Required */
		File: string;

		/** Required */
		Format: TerminologyDataFormat;
		Directionality?: Directionality;
	}

	/** The data associated with the custom terminology. For information about the custom terminology file, see <a href="https://docs.aws.amazon.com/translate/latest/dg/creating-custom-terminology.html"> Creating a Custom Terminology</a>. */
	export interface TerminologyDataFormProperties {

		/** Required */
		File: FormControl<string | null | undefined>,

		/** Required */
		Format: FormControl<TerminologyDataFormat | null | undefined>,
		Directionality: FormControl<Directionality | null | undefined>,
	}
	export function CreateTerminologyDataFormGroup() {
		return new FormGroup<TerminologyDataFormProperties>({
			File: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Format: new FormControl<TerminologyDataFormat | null | undefined>(undefined, [Validators.required]),
			Directionality: new FormControl<Directionality | null | undefined>(undefined),
		});

	}

	export interface ListLanguagesResponse {
		Languages?: Array<Language>;
		DisplayLanguageCode?: DisplayLanguageCode;
		NextToken?: string;
	}
	export interface ListLanguagesResponseFormProperties {
		DisplayLanguageCode: FormControl<DisplayLanguageCode | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLanguagesResponseFormGroup() {
		return new FormGroup<ListLanguagesResponseFormProperties>({
			DisplayLanguageCode: new FormControl<DisplayLanguageCode | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A supported language. */
	export interface Language {

		/** Required */
		LanguageName: string;

		/** Required */
		LanguageCode: string;
	}

	/** A supported language. */
	export interface LanguageFormProperties {

		/** Required */
		LanguageName: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateLanguageFormGroup() {
		return new FormGroup<LanguageFormProperties>({
			LanguageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DisplayLanguageCode { de = 0, en = 1, es = 2, fr = 3, it = 4, ja = 5, ko = 6, pt = 7, zh = 8, 'zh-TW' = 9 }

	export interface ListLanguagesRequest {
		DisplayLanguageCode?: DisplayLanguageCode;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListLanguagesRequestFormProperties {
		DisplayLanguageCode: FormControl<DisplayLanguageCode | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListLanguagesRequestFormGroup() {
		return new FormGroup<ListLanguagesRequestFormProperties>({
			DisplayLanguageCode: new FormControl<DisplayLanguageCode | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UnsupportedDisplayLanguageCodeException {
	}
	export interface UnsupportedDisplayLanguageCodeExceptionFormProperties {
	}
	export function CreateUnsupportedDisplayLanguageCodeExceptionFormGroup() {
		return new FormGroup<UnsupportedDisplayLanguageCodeExceptionFormProperties>({
		});

	}

	export interface ListParallelDataResponse {
		ParallelDataPropertiesList?: Array<ParallelDataProperties>;
		NextToken?: string;
	}
	export interface ListParallelDataResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListParallelDataResponseFormGroup() {
		return new FormGroup<ListParallelDataResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListParallelDataRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListParallelDataRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListParallelDataRequestFormGroup() {
		return new FormGroup<ListParallelDataRequestFormProperties>({
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
		ResourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTerminologiesResponse {
		TerminologyPropertiesList?: Array<TerminologyProperties>;
		NextToken?: string;
	}
	export interface ListTerminologiesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTerminologiesResponseFormGroup() {
		return new FormGroup<ListTerminologiesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTerminologiesRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListTerminologiesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTerminologiesRequestFormGroup() {
		return new FormGroup<ListTerminologiesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTextTranslationJobsResponse {
		TextTranslationJobPropertiesList?: Array<TextTranslationJobProperties>;
		NextToken?: string;
	}
	export interface ListTextTranslationJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTextTranslationJobsResponseFormGroup() {
		return new FormGroup<ListTextTranslationJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTextTranslationJobsRequest {
		Filter?: TextTranslationJobFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListTextTranslationJobsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTextTranslationJobsRequestFormGroup() {
		return new FormGroup<ListTextTranslationJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information for filtering a list of translation jobs. For more information, see <a>ListTextTranslationJobs</a>. */
	export interface TextTranslationJobFilter {
		JobName?: string;
		JobStatus?: JobStatus;
		SubmittedBeforeTime?: Date;
		SubmittedAfterTime?: Date;
	}

	/** Provides information for filtering a list of translation jobs. For more information, see <a>ListTextTranslationJobs</a>. */
	export interface TextTranslationJobFilterFormProperties {
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		SubmittedBeforeTime: FormControl<Date | null | undefined>,
		SubmittedAfterTime: FormControl<Date | null | undefined>,
	}
	export function CreateTextTranslationJobFilterFormGroup() {
		return new FormGroup<TextTranslationJobFilterFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			SubmittedBeforeTime: new FormControl<Date | null | undefined>(undefined),
			SubmittedAfterTime: new FormControl<Date | null | undefined>(undefined),
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
		JobId?: string;
		JobStatus?: JobStatus;
	}
	export interface StartTextTranslationJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
	}
	export function CreateStartTextTranslationJobResponseFormGroup() {
		return new FormGroup<StartTextTranslationJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
		});

	}

	export interface StartTextTranslationJobRequest {
		JobName?: string;

		/** Required */
		InputDataConfig: InputDataConfig;

		/** Required */
		OutputDataConfig: OutputDataConfig;

		/** Required */
		DataAccessRoleArn: string;

		/** Required */
		SourceLanguageCode: string;

		/** Required */
		TargetLanguageCodes: Array<string>;
		TerminologyNames?: Array<string>;
		ParallelDataNames?: Array<string>;

		/** Required */
		ClientToken: string;
		Settings?: TranslationSettings;
	}
	export interface StartTextTranslationJobRequestFormProperties {
		JobName: FormControl<string | null | undefined>,

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,

		/** Required */
		SourceLanguageCode: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartTextTranslationJobRequestFormGroup() {
		return new FormGroup<StartTextTranslationJobRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceLanguageCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		JobId?: string;
		JobStatus?: JobStatus;
	}
	export interface StopTextTranslationJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
	}
	export function CreateStopTextTranslationJobResponseFormGroup() {
		return new FormGroup<StopTextTranslationJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
		});

	}

	export interface StopTextTranslationJobRequest {

		/** Required */
		JobId: string;
	}
	export interface StopTextTranslationJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopTextTranslationJobRequestFormGroup() {
		return new FormGroup<StopTextTranslationJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface TagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TranslateDocumentResponse {

		/** Required */
		TranslatedDocument: TranslatedDocument;

		/** Required */
		SourceLanguageCode: string;

		/** Required */
		TargetLanguageCode: string;
		AppliedTerminologies?: Array<AppliedTerminology>;

		/** Settings to configure your translation output, including the option to set the formality level of the output text and the option to mask profane words and phrases. */
		AppliedSettings?: TranslationSettings;
	}
	export interface TranslateDocumentResponseFormProperties {

		/** Required */
		SourceLanguageCode: FormControl<string | null | undefined>,

		/** Required */
		TargetLanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateTranslateDocumentResponseFormGroup() {
		return new FormGroup<TranslateDocumentResponseFormProperties>({
			SourceLanguageCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetLanguageCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The translated content. */
	export interface TranslatedDocument {

		/** Required */
		Content: string;
	}

	/** The translated content. */
	export interface TranslatedDocumentFormProperties {

		/** Required */
		Content: FormControl<string | null | undefined>,
	}
	export function CreateTranslatedDocumentFormGroup() {
		return new FormGroup<TranslatedDocumentFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The custom terminology applied to the input text by Amazon Translate for the translated text response. This is optional in the response and will only be present if you specified terminology input in the request. Currently, only one terminology can be applied per TranslateText request. */
	export interface AppliedTerminology {
		Name?: string;
		Terms?: Array<Term>;
	}

	/** The custom terminology applied to the input text by Amazon Translate for the translated text response. This is optional in the response and will only be present if you specified terminology input in the request. Currently, only one terminology can be applied per TranslateText request. */
	export interface AppliedTerminologyFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAppliedTerminologyFormGroup() {
		return new FormGroup<AppliedTerminologyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The term being translated by the custom terminology. */
	export interface Term {
		SourceText?: string;
		TargetText?: string;
	}

	/** The term being translated by the custom terminology. */
	export interface TermFormProperties {
		SourceText: FormControl<string | null | undefined>,
		TargetText: FormControl<string | null | undefined>,
	}
	export function CreateTermFormGroup() {
		return new FormGroup<TermFormProperties>({
			SourceText: new FormControl<string | null | undefined>(undefined),
			TargetText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TranslateDocumentRequest {

		/** Required */
		Document: Document;
		TerminologyNames?: Array<string>;

		/** Required */
		SourceLanguageCode: string;

		/** Required */
		TargetLanguageCode: string;

		/** Settings to configure your translation output, including the option to set the formality level of the output text and the option to mask profane words and phrases. */
		Settings?: TranslationSettings;
	}
	export interface TranslateDocumentRequestFormProperties {

		/** Required */
		SourceLanguageCode: FormControl<string | null | undefined>,

		/** Required */
		TargetLanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateTranslateDocumentRequestFormGroup() {
		return new FormGroup<TranslateDocumentRequestFormProperties>({
			SourceLanguageCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetLanguageCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The content and content type of a document. */
	export interface Document {

		/** Required */
		Content: string;

		/** Required */
		ContentType: string;
	}

	/** The content and content type of a document. */
	export interface DocumentFormProperties {

		/** Required */
		Content: FormControl<string | null | undefined>,

		/** Required */
		ContentType: FormControl<string | null | undefined>,
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface TranslateTextResponse {

		/** Required */
		TranslatedText: string;

		/** Required */
		SourceLanguageCode: string;

		/** Required */
		TargetLanguageCode: string;
		AppliedTerminologies?: Array<AppliedTerminology>;
		AppliedSettings?: TranslationSettings;
	}
	export interface TranslateTextResponseFormProperties {

		/** Required */
		TranslatedText: FormControl<string | null | undefined>,

		/** Required */
		SourceLanguageCode: FormControl<string | null | undefined>,

		/** Required */
		TargetLanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateTranslateTextResponseFormGroup() {
		return new FormGroup<TranslateTextResponseFormProperties>({
			TranslatedText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceLanguageCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetLanguageCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TranslateTextRequest {

		/** Required */
		Text: string;
		TerminologyNames?: Array<string>;

		/** Required */
		SourceLanguageCode: string;

		/** Required */
		TargetLanguageCode: string;
		Settings?: TranslationSettings;
	}
	export interface TranslateTextRequestFormProperties {

		/** Required */
		Text: FormControl<string | null | undefined>,

		/** Required */
		SourceLanguageCode: FormControl<string | null | undefined>,

		/** Required */
		TargetLanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateTranslateTextRequestFormGroup() {
		return new FormGroup<TranslateTextRequestFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceLanguageCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetLanguageCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateParallelDataResponse {
		Name?: string;
		Status?: ParallelDataStatus;
		LatestUpdateAttemptStatus?: ParallelDataStatus;
		LatestUpdateAttemptAt?: Date;
	}
	export interface UpdateParallelDataResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		Status: FormControl<ParallelDataStatus | null | undefined>,
		LatestUpdateAttemptStatus: FormControl<ParallelDataStatus | null | undefined>,
		LatestUpdateAttemptAt: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateParallelDataResponseFormGroup() {
		return new FormGroup<UpdateParallelDataResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ParallelDataStatus | null | undefined>(undefined),
			LatestUpdateAttemptStatus: new FormControl<ParallelDataStatus | null | undefined>(undefined),
			LatestUpdateAttemptAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateParallelDataRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		ParallelDataConfig: ParallelDataConfig;

		/** Required */
		ClientToken: string;
	}
	export interface UpdateParallelDataRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateParallelDataRequestFormGroup() {
		return new FormGroup<UpdateParallelDataRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a parallel data resource in Amazon Translate by importing an input file from Amazon S3. Parallel data files contain examples that show how you want segments of text to be translated. By adding parallel data, you can influence the style, tone, and word choice in your translation output.
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.CreateParallelData
		 * @return {CreateParallelDataResponse} Success
		 */
		CreateParallelData(requestBody: CreateParallelDataRequest): Observable<CreateParallelDataResponse> {
			return this.http.post<CreateParallelDataResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.CreateParallelData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a parallel data resource in Amazon Translate.
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.DeleteParallelData
		 * @return {DeleteParallelDataResponse} Success
		 */
		DeleteParallelData(requestBody: DeleteParallelDataRequest): Observable<DeleteParallelDataResponse> {
			return this.http.post<DeleteParallelDataResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.DeleteParallelData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Gets the properties associated with an asynchronous batch translation job including name, ID, status, source and target languages, input/output S3 buckets, and so on.
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob
		 * @return {DescribeTextTranslationJobResponse} Success
		 */
		DescribeTextTranslationJob(requestBody: DescribeTextTranslationJobRequest): Observable<DescribeTextTranslationJobResponse> {
			return this.http.post<DescribeTextTranslationJobResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides information about a parallel data resource.
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.GetParallelData
		 * @return {GetParallelDataResponse} Success
		 */
		GetParallelData(requestBody: GetParallelDataRequest): Observable<GetParallelDataResponse> {
			return this.http.post<GetParallelDataResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.GetParallelData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Creates or updates a custom terminology, depending on whether one already exists for the given terminology name. Importing a terminology with the same name as an existing one will merge the terminologies based on the chosen merge strategy. The only supported merge strategy is OVERWRITE, where the imported terminology overwrites the existing terminology of the same name.</p> <p>If you import a terminology that overwrites an existing one, the new terminology takes up to 10 minutes to fully propagate. After that, translations have access to the new terminology.</p>
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology
		 * @return {ImportTerminologyResponse} Success
		 */
		ImportTerminology(requestBody: ImportTerminologyRequest): Observable<ImportTerminologyResponse> {
			return this.http.post<ImportTerminologyResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides a list of languages (RFC-5646 codes and names) that Amazon Translate supports.
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.ListLanguages
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLanguagesResponse} Success
		 */
		ListLanguages(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListLanguagesRequest): Observable<ListLanguagesResponse> {
			return this.http.post<ListLanguagesResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.ListLanguages?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides a list of your parallel data resources in Amazon Translate.
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.ListParallelData
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListParallelDataResponse} Success
		 */
		ListParallelData(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListParallelDataRequest): Observable<ListParallelDataResponse> {
			return this.http.post<ListParallelDataResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.ListParallelData?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tags associated with a given Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Starts an asynchronous batch translation job. Use batch translation jobs to translate large volumes of text across multiple documents at once. For batch translation, you can input documents with different source languages (specify <code>auto</code> as the source language). You can specify one or more target languages. Batch translation translates each input document into each of the target languages. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/async.html">Asynchronous batch processing</a>.</p> <p>Batch translation jobs can be described with the <a>DescribeTextTranslationJob</a> operation, listed with the <a>ListTextTranslationJobs</a> operation, and stopped with the <a>StopTextTranslationJob</a> operation.</p>
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
		 * Associates a specific tag with a resource. A tag is a key-value pair that adds as a metadata to a resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Translates the input document from the source language to the target language. This synchronous operation supports plain text or HTML for the input document. <code>TranslateDocument</code> supports translations from English to any supported language, and from any supported language to English. Therefore, specify either the source language code or the target language code as “en” (English). </p> <p> <code>TranslateDocument</code> does not support language auto-detection. </p> <p> If you set the <code>Formality</code> parameter, the request will fail if the target language does not support formality. For a list of target languages that support formality, see <a href="https://docs.aws.amazon.com/translate/latest/dg/customizing-translations-formality.html">Setting formality</a>. </p>
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.TranslateDocument
		 * @return {TranslateDocumentResponse} Success
		 */
		TranslateDocument(requestBody: TranslateDocumentRequest): Observable<TranslateDocumentResponse> {
			return this.http.post<TranslateDocumentResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.TranslateDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Translates input text from the source language to the target language. For a list of available languages and language codes, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.TranslateText
		 * @return {TranslateTextResponse} Success
		 */
		TranslateText(requestBody: TranslateTextRequest): Observable<TranslateTextResponse> {
			return this.http.post<TranslateTextResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.TranslateText', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a specific tag associated with an Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a previously created parallel data resource by importing a new input file from Amazon S3.
		 * Post #X-Amz-Target=AWSShineFrontendService_20170701.UpdateParallelData
		 * @return {UpdateParallelDataResponse} Success
		 */
		UpdateParallelData(requestBody: UpdateParallelDataRequest): Observable<UpdateParallelDataResponse> {
			return this.http.post<UpdateParallelDataResponse>(this.baseUri + '#X-Amz-Target=AWSShineFrontendService_20170701.UpdateParallelData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateParallelDataX_Amz_Target { 'AWSShineFrontendService_20170701.CreateParallelData' = 0 }

	export enum DeleteParallelDataX_Amz_Target { 'AWSShineFrontendService_20170701.DeleteParallelData' = 0 }

	export enum DeleteTerminologyX_Amz_Target { 'AWSShineFrontendService_20170701.DeleteTerminology' = 0 }

	export enum DescribeTextTranslationJobX_Amz_Target { 'AWSShineFrontendService_20170701.DescribeTextTranslationJob' = 0 }

	export enum GetParallelDataX_Amz_Target { 'AWSShineFrontendService_20170701.GetParallelData' = 0 }

	export enum GetTerminologyX_Amz_Target { 'AWSShineFrontendService_20170701.GetTerminology' = 0 }

	export enum ImportTerminologyX_Amz_Target { 'AWSShineFrontendService_20170701.ImportTerminology' = 0 }

	export enum ListLanguagesX_Amz_Target { 'AWSShineFrontendService_20170701.ListLanguages' = 0 }

	export enum ListParallelDataX_Amz_Target { 'AWSShineFrontendService_20170701.ListParallelData' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'AWSShineFrontendService_20170701.ListTagsForResource' = 0 }

	export enum ListTerminologiesX_Amz_Target { 'AWSShineFrontendService_20170701.ListTerminologies' = 0 }

	export enum ListTextTranslationJobsX_Amz_Target { 'AWSShineFrontendService_20170701.ListTextTranslationJobs' = 0 }

	export enum StartTextTranslationJobX_Amz_Target { 'AWSShineFrontendService_20170701.StartTextTranslationJob' = 0 }

	export enum StopTextTranslationJobX_Amz_Target { 'AWSShineFrontendService_20170701.StopTextTranslationJob' = 0 }

	export enum TagResourceX_Amz_Target { 'AWSShineFrontendService_20170701.TagResource' = 0 }

	export enum TranslateDocumentX_Amz_Target { 'AWSShineFrontendService_20170701.TranslateDocument' = 0 }

	export enum TranslateTextX_Amz_Target { 'AWSShineFrontendService_20170701.TranslateText' = 0 }

	export enum UntagResourceX_Amz_Target { 'AWSShineFrontendService_20170701.UntagResource' = 0 }

	export enum UpdateParallelDataX_Amz_Target { 'AWSShineFrontendService_20170701.UpdateParallelData' = 0 }

}

