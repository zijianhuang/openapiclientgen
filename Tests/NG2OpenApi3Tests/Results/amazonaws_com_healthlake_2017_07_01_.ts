import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateFHIRDatastoreResponse {

		/** Required */
		DatastoreId: string;

		/** Required */
		DatastoreArn: string;

		/** Required */
		DatastoreStatus: DatastoreStatus;

		/** Required */
		DatastoreEndpoint: string;
	}
	export interface CreateFHIRDatastoreResponseFormProperties {

		/** Required */
		DatastoreId: FormControl<string | null | undefined>,

		/** Required */
		DatastoreArn: FormControl<string | null | undefined>,

		/** Required */
		DatastoreStatus: FormControl<DatastoreStatus | null | undefined>,

		/** Required */
		DatastoreEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateCreateFHIRDatastoreResponseFormGroup() {
		return new FormGroup<CreateFHIRDatastoreResponseFormProperties>({
			DatastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatastoreArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatastoreStatus: new FormControl<DatastoreStatus | null | undefined>(undefined, [Validators.required]),
			DatastoreEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DatastoreStatus { CREATING = 0, ACTIVE = 1, DELETING = 2, DELETED = 3 }

	export interface CreateFHIRDatastoreRequest {
		DatastoreName?: string;

		/** Required */
		DatastoreTypeVersion: FHIRVersion;
		SseConfiguration?: SseConfiguration;
		PreloadDataConfig?: PreloadDataConfig;
		ClientToken?: string;
		Tags?: Array<Tag>;
		IdentityProviderConfiguration?: IdentityProviderConfiguration;
	}
	export interface CreateFHIRDatastoreRequestFormProperties {
		DatastoreName: FormControl<string | null | undefined>,

		/** Required */
		DatastoreTypeVersion: FormControl<FHIRVersion | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateFHIRDatastoreRequestFormGroup() {
		return new FormGroup<CreateFHIRDatastoreRequestFormProperties>({
			DatastoreName: new FormControl<string | null | undefined>(undefined),
			DatastoreTypeVersion: new FormControl<FHIRVersion | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FHIRVersion { R4 = 0 }


	/**  The server-side encryption key configuration for a customer provided encryption key.  */
	export interface SseConfiguration {

		/** Required */
		KmsEncryptionConfig: KmsEncryptionConfig;
	}

	/**  The server-side encryption key configuration for a customer provided encryption key.  */
	export interface SseConfigurationFormProperties {
	}
	export function CreateSseConfigurationFormGroup() {
		return new FormGroup<SseConfigurationFormProperties>({
		});

	}


	/**  The customer-managed-key(CMK) used when creating a data store. If a customer owned key is not specified, an AWS owned key will be used for encryption.  */
	export interface KmsEncryptionConfig {

		/** Required */
		CmkType: CmkType;
		KmsKeyId?: string;
	}

	/**  The customer-managed-key(CMK) used when creating a data store. If a customer owned key is not specified, an AWS owned key will be used for encryption.  */
	export interface KmsEncryptionConfigFormProperties {

		/** Required */
		CmkType: FormControl<CmkType | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateKmsEncryptionConfigFormGroup() {
		return new FormGroup<KmsEncryptionConfigFormProperties>({
			CmkType: new FormControl<CmkType | null | undefined>(undefined, [Validators.required]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CmkType { CUSTOMER_MANAGED_KMS_KEY = 0, AWS_OWNED_KMS_KEY = 1 }


	/**  The input properties for the preloaded data store. Only data preloaded from Synthea is supported. */
	export interface PreloadDataConfig {

		/** Required */
		PreloadDataType: PreloadDataType;
	}

	/**  The input properties for the preloaded data store. Only data preloaded from Synthea is supported. */
	export interface PreloadDataConfigFormProperties {

		/** Required */
		PreloadDataType: FormControl<PreloadDataType | null | undefined>,
	}
	export function CreatePreloadDataConfigFormGroup() {
		return new FormGroup<PreloadDataConfigFormProperties>({
			PreloadDataType: new FormControl<PreloadDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PreloadDataType { SYNTHEA = 0 }


	/**  A tag is a label consisting of a user-defined key and value. The form for tags is {"Key", "Value"}  */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/**  A tag is a label consisting of a user-defined key and value. The form for tags is {"Key", "Value"}  */
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


	/** The identity provider configuration that you gave when the data store was created. */
	export interface IdentityProviderConfiguration {

		/** Required */
		AuthorizationStrategy: AuthorizationStrategy;
		FineGrainedAuthorizationEnabled?: boolean | null;
		Metadata?: string;
		IdpLambdaArn?: string;
	}

	/** The identity provider configuration that you gave when the data store was created. */
	export interface IdentityProviderConfigurationFormProperties {

		/** Required */
		AuthorizationStrategy: FormControl<AuthorizationStrategy | null | undefined>,
		FineGrainedAuthorizationEnabled: FormControl<boolean | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
		IdpLambdaArn: FormControl<string | null | undefined>,
	}
	export function CreateIdentityProviderConfigurationFormGroup() {
		return new FormGroup<IdentityProviderConfigurationFormProperties>({
			AuthorizationStrategy: new FormControl<AuthorizationStrategy | null | undefined>(undefined, [Validators.required]),
			FineGrainedAuthorizationEnabled: new FormControl<boolean | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
			IdpLambdaArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AuthorizationStrategy { SMART_ON_FHIR_V1 = 0, AWS_AUTH = 1 }

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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface DeleteFHIRDatastoreResponse {

		/** Required */
		DatastoreId: string;

		/** Required */
		DatastoreArn: string;

		/** Required */
		DatastoreStatus: DatastoreStatus;

		/** Required */
		DatastoreEndpoint: string;
	}
	export interface DeleteFHIRDatastoreResponseFormProperties {

		/** Required */
		DatastoreId: FormControl<string | null | undefined>,

		/** Required */
		DatastoreArn: FormControl<string | null | undefined>,

		/** Required */
		DatastoreStatus: FormControl<DatastoreStatus | null | undefined>,

		/** Required */
		DatastoreEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFHIRDatastoreResponseFormGroup() {
		return new FormGroup<DeleteFHIRDatastoreResponseFormProperties>({
			DatastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatastoreArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatastoreStatus: new FormControl<DatastoreStatus | null | undefined>(undefined, [Validators.required]),
			DatastoreEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteFHIRDatastoreRequest {

		/** Required */
		DatastoreId: string;
	}
	export interface DeleteFHIRDatastoreRequestFormProperties {

		/** Required */
		DatastoreId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFHIRDatastoreRequestFormGroup() {
		return new FormGroup<DeleteFHIRDatastoreRequestFormProperties>({
			DatastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DescribeFHIRDatastoreResponse {

		/** Required */
		DatastoreProperties: DatastoreProperties;
	}
	export interface DescribeFHIRDatastoreResponseFormProperties {
	}
	export function CreateDescribeFHIRDatastoreResponseFormGroup() {
		return new FormGroup<DescribeFHIRDatastoreResponseFormProperties>({
		});

	}


	/** Displays the properties of the data store, including the ID, ARN, name, and the status of the data store. */
	export interface DatastoreProperties {

		/** Required */
		DatastoreId: string;

		/** Required */
		DatastoreArn: string;
		DatastoreName?: string;

		/** Required */
		DatastoreStatus: DatastoreStatus;
		CreatedAt?: Date;

		/** Required */
		DatastoreTypeVersion: FHIRVersion;

		/** Required */
		DatastoreEndpoint: string;
		SseConfiguration?: SseConfiguration;
		PreloadDataConfig?: PreloadDataConfig;
		IdentityProviderConfiguration?: IdentityProviderConfiguration;
	}

	/** Displays the properties of the data store, including the ID, ARN, name, and the status of the data store. */
	export interface DatastorePropertiesFormProperties {

		/** Required */
		DatastoreId: FormControl<string | null | undefined>,

		/** Required */
		DatastoreArn: FormControl<string | null | undefined>,
		DatastoreName: FormControl<string | null | undefined>,

		/** Required */
		DatastoreStatus: FormControl<DatastoreStatus | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		DatastoreTypeVersion: FormControl<FHIRVersion | null | undefined>,

		/** Required */
		DatastoreEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateDatastorePropertiesFormGroup() {
		return new FormGroup<DatastorePropertiesFormProperties>({
			DatastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatastoreArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatastoreName: new FormControl<string | null | undefined>(undefined),
			DatastoreStatus: new FormControl<DatastoreStatus | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DatastoreTypeVersion: new FormControl<FHIRVersion | null | undefined>(undefined, [Validators.required]),
			DatastoreEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeFHIRDatastoreRequest {

		/** Required */
		DatastoreId: string;
	}
	export interface DescribeFHIRDatastoreRequestFormProperties {

		/** Required */
		DatastoreId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFHIRDatastoreRequestFormGroup() {
		return new FormGroup<DescribeFHIRDatastoreRequestFormProperties>({
			DatastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeFHIRExportJobResponse {

		/** Required */
		ExportJobProperties: ExportJobProperties;
	}
	export interface DescribeFHIRExportJobResponseFormProperties {
	}
	export function CreateDescribeFHIRExportJobResponseFormGroup() {
		return new FormGroup<DescribeFHIRExportJobResponseFormProperties>({
		});

	}


	/** The properties of a FHIR export job, including the ID, ARN, name, and the status of the job. */
	export interface ExportJobProperties {

		/** Required */
		JobId: string;
		JobName?: string;

		/** Required */
		JobStatus: JobStatus;

		/** Required */
		SubmitTime: Date;
		EndTime?: Date;

		/** Required */
		DatastoreId: string;

		/** Required */
		OutputDataConfig: OutputDataConfig;
		DataAccessRoleArn?: string;
		Message?: string;
	}

	/** The properties of a FHIR export job, including the ID, ARN, name, and the status of the job. */
	export interface ExportJobPropertiesFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,

		/** Required */
		JobStatus: FormControl<JobStatus | null | undefined>,

		/** Required */
		SubmitTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,

		/** Required */
		DatastoreId: FormControl<string | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateExportJobPropertiesFormGroup() {
		return new FormGroup<ExportJobPropertiesFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
			SubmitTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			DatastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED_WITH_ERRORS = 2, COMPLETED = 3, FAILED = 4, CANCEL_SUBMITTED = 5, CANCEL_IN_PROGRESS = 6, CANCEL_COMPLETED = 7, CANCEL_FAILED = 8 }


	/** The output data configuration that was supplied when the export job was created. */
	export interface OutputDataConfig {
		S3Configuration?: S3Configuration;
	}

	/** The output data configuration that was supplied when the export job was created. */
	export interface OutputDataConfigFormProperties {
	}
	export function CreateOutputDataConfigFormGroup() {
		return new FormGroup<OutputDataConfigFormProperties>({
		});

	}


	/**  The configuration of the S3 bucket for either an import or export job. This includes assigning permissions for access.  */
	export interface S3Configuration {

		/** Required */
		S3Uri: string;

		/** Required */
		KmsKeyId: string;
	}

	/**  The configuration of the S3 bucket for either an import or export job. This includes assigning permissions for access.  */
	export interface S3ConfigurationFormProperties {

		/** Required */
		S3Uri: FormControl<string | null | undefined>,

		/** Required */
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateS3ConfigurationFormGroup() {
		return new FormGroup<S3ConfigurationFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeFHIRExportJobRequest {

		/** Required */
		DatastoreId: string;

		/** Required */
		JobId: string;
	}
	export interface DescribeFHIRExportJobRequestFormProperties {

		/** Required */
		DatastoreId: FormControl<string | null | undefined>,

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFHIRExportJobRequestFormGroup() {
		return new FormGroup<DescribeFHIRExportJobRequestFormProperties>({
			DatastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeFHIRImportJobResponse {

		/** Required */
		ImportJobProperties: ImportJobProperties;
	}
	export interface DescribeFHIRImportJobResponseFormProperties {
	}
	export function CreateDescribeFHIRImportJobResponseFormGroup() {
		return new FormGroup<DescribeFHIRImportJobResponseFormProperties>({
		});

	}


	/** Displays the properties of the import job, including the ID, Arn, Name, and the status of the data store. */
	export interface ImportJobProperties {

		/** Required */
		JobId: string;
		JobName?: string;

		/** Required */
		JobStatus: JobStatus;

		/** Required */
		SubmitTime: Date;
		EndTime?: Date;

		/** Required */
		DatastoreId: string;

		/** Required */
		InputDataConfig: InputDataConfig;

		/** The output data configuration that was supplied when the export job was created. */
		JobOutputDataConfig?: OutputDataConfig;
		DataAccessRoleArn?: string;
		Message?: string;
	}

	/** Displays the properties of the import job, including the ID, Arn, Name, and the status of the data store. */
	export interface ImportJobPropertiesFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,

		/** Required */
		JobStatus: FormControl<JobStatus | null | undefined>,

		/** Required */
		SubmitTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,

		/** Required */
		DatastoreId: FormControl<string | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateImportJobPropertiesFormGroup() {
		return new FormGroup<ImportJobPropertiesFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
			SubmitTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			DatastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The input properties for an import job. */
	export interface InputDataConfig {
		S3Uri?: string;
	}

	/**  The input properties for an import job. */
	export interface InputDataConfigFormProperties {
		S3Uri: FormControl<string | null | undefined>,
	}
	export function CreateInputDataConfigFormGroup() {
		return new FormGroup<InputDataConfigFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFHIRImportJobRequest {

		/** Required */
		DatastoreId: string;

		/** Required */
		JobId: string;
	}
	export interface DescribeFHIRImportJobRequestFormProperties {

		/** Required */
		DatastoreId: FormControl<string | null | undefined>,

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFHIRImportJobRequestFormGroup() {
		return new FormGroup<DescribeFHIRImportJobRequestFormProperties>({
			DatastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListFHIRDatastoresResponse {

		/** Required */
		DatastorePropertiesList: Array<DatastoreProperties>;
		NextToken?: string;
	}
	export interface ListFHIRDatastoresResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFHIRDatastoresResponseFormGroup() {
		return new FormGroup<ListFHIRDatastoresResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFHIRDatastoresRequest {
		Filter?: DatastoreFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListFHIRDatastoresRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFHIRDatastoresRequestFormGroup() {
		return new FormGroup<ListFHIRDatastoresRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The filters applied to data store query. */
	export interface DatastoreFilter {
		DatastoreName?: string;
		DatastoreStatus?: DatastoreStatus;
		CreatedBefore?: Date;
		CreatedAfter?: Date;
	}

	/** The filters applied to data store query. */
	export interface DatastoreFilterFormProperties {
		DatastoreName: FormControl<string | null | undefined>,
		DatastoreStatus: FormControl<DatastoreStatus | null | undefined>,
		CreatedBefore: FormControl<Date | null | undefined>,
		CreatedAfter: FormControl<Date | null | undefined>,
	}
	export function CreateDatastoreFilterFormGroup() {
		return new FormGroup<DatastoreFilterFormProperties>({
			DatastoreName: new FormControl<string | null | undefined>(undefined),
			DatastoreStatus: new FormControl<DatastoreStatus | null | undefined>(undefined),
			CreatedBefore: new FormControl<Date | null | undefined>(undefined),
			CreatedAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListFHIRExportJobsResponse {

		/** Required */
		ExportJobPropertiesList: Array<ExportJobProperties>;
		NextToken?: string;
	}
	export interface ListFHIRExportJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFHIRExportJobsResponseFormGroup() {
		return new FormGroup<ListFHIRExportJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFHIRExportJobsRequest {

		/** Required */
		DatastoreId: string;
		NextToken?: string;
		MaxResults?: number | null;
		JobName?: string;
		JobStatus?: JobStatus;
		SubmittedBefore?: Date;
		SubmittedAfter?: Date;
	}
	export interface ListFHIRExportJobsRequestFormProperties {

		/** Required */
		DatastoreId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		SubmittedBefore: FormControl<Date | null | undefined>,
		SubmittedAfter: FormControl<Date | null | undefined>,
	}
	export function CreateListFHIRExportJobsRequestFormGroup() {
		return new FormGroup<ListFHIRExportJobsRequestFormProperties>({
			DatastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			SubmittedBefore: new FormControl<Date | null | undefined>(undefined),
			SubmittedAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListFHIRImportJobsResponse {

		/** Required */
		ImportJobPropertiesList: Array<ImportJobProperties>;
		NextToken?: string;
	}
	export interface ListFHIRImportJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFHIRImportJobsResponseFormGroup() {
		return new FormGroup<ListFHIRImportJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFHIRImportJobsRequest {

		/** Required */
		DatastoreId: string;
		NextToken?: string;
		MaxResults?: number | null;
		JobName?: string;
		JobStatus?: JobStatus;
		SubmittedBefore?: Date;
		SubmittedAfter?: Date;
	}
	export interface ListFHIRImportJobsRequestFormProperties {

		/** Required */
		DatastoreId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		SubmittedBefore: FormControl<Date | null | undefined>,
		SubmittedAfter: FormControl<Date | null | undefined>,
	}
	export function CreateListFHIRImportJobsRequestFormGroup() {
		return new FormGroup<ListFHIRImportJobsRequestFormProperties>({
			DatastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			SubmittedBefore: new FormControl<Date | null | undefined>(undefined),
			SubmittedAfter: new FormControl<Date | null | undefined>(undefined),
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

	export interface StartFHIRExportJobResponse {

		/** Required */
		JobId: string;

		/** Required */
		JobStatus: JobStatus;
		DatastoreId?: string;
	}
	export interface StartFHIRExportJobResponseFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,

		/** Required */
		JobStatus: FormControl<JobStatus | null | undefined>,
		DatastoreId: FormControl<string | null | undefined>,
	}
	export function CreateStartFHIRExportJobResponseFormGroup() {
		return new FormGroup<StartFHIRExportJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
			DatastoreId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartFHIRExportJobRequest {
		JobName?: string;

		/** Required */
		OutputDataConfig: OutputDataConfig;

		/** Required */
		DatastoreId: string;

		/** Required */
		DataAccessRoleArn: string;

		/** Required */
		ClientToken: string;
	}
	export interface StartFHIRExportJobRequestFormProperties {
		JobName: FormControl<string | null | undefined>,

		/** Required */
		DatastoreId: FormControl<string | null | undefined>,

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartFHIRExportJobRequestFormGroup() {
		return new FormGroup<StartFHIRExportJobRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			DatastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartFHIRImportJobResponse {

		/** Required */
		JobId: string;

		/** Required */
		JobStatus: JobStatus;
		DatastoreId?: string;
	}
	export interface StartFHIRImportJobResponseFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,

		/** Required */
		JobStatus: FormControl<JobStatus | null | undefined>,
		DatastoreId: FormControl<string | null | undefined>,
	}
	export function CreateStartFHIRImportJobResponseFormGroup() {
		return new FormGroup<StartFHIRImportJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
			DatastoreId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartFHIRImportJobRequest {
		JobName?: string;

		/** Required */
		InputDataConfig: InputDataConfig;

		/**
		 * The output data configuration that was supplied when the export job was created.
		 * Required
		 */
		JobOutputDataConfig: OutputDataConfig;

		/** Required */
		DatastoreId: string;

		/** Required */
		DataAccessRoleArn: string;

		/** Required */
		ClientToken: string;
	}
	export interface StartFHIRImportJobRequestFormProperties {
		JobName: FormControl<string | null | undefined>,

		/** Required */
		DatastoreId: FormControl<string | null | undefined>,

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartFHIRImportJobRequestFormGroup() {
		return new FormGroup<StartFHIRImportJobRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			DatastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a data store that can ingest and export FHIR formatted data.
		 * Post #X-Amz-Target=HealthLake.CreateFHIRDatastore
		 * @return {CreateFHIRDatastoreResponse} Success
		 */
		CreateFHIRDatastore(requestBody: CreateFHIRDatastoreRequest): Observable<CreateFHIRDatastoreResponse> {
			return this.http.post<CreateFHIRDatastoreResponse>(this.baseUri + '#X-Amz-Target=HealthLake.CreateFHIRDatastore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a data store.
		 * Post #X-Amz-Target=HealthLake.DeleteFHIRDatastore
		 * @return {DeleteFHIRDatastoreResponse} Success
		 */
		DeleteFHIRDatastore(requestBody: DeleteFHIRDatastoreRequest): Observable<DeleteFHIRDatastoreResponse> {
			return this.http.post<DeleteFHIRDatastoreResponse>(this.baseUri + '#X-Amz-Target=HealthLake.DeleteFHIRDatastore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties associated with the FHIR data store, including the data store ID, data store ARN, data store name, data store status, when the data store was created, data store type version, and the data store's endpoint.
		 * Post #X-Amz-Target=HealthLake.DescribeFHIRDatastore
		 * @return {DescribeFHIRDatastoreResponse} Success
		 */
		DescribeFHIRDatastore(requestBody: DescribeFHIRDatastoreRequest): Observable<DescribeFHIRDatastoreResponse> {
			return this.http.post<DescribeFHIRDatastoreResponse>(this.baseUri + '#X-Amz-Target=HealthLake.DescribeFHIRDatastore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job.
		 * Post #X-Amz-Target=HealthLake.DescribeFHIRExportJob
		 * @return {DescribeFHIRExportJobResponse} Success
		 */
		DescribeFHIRExportJob(requestBody: DescribeFHIRExportJobRequest): Observable<DescribeFHIRExportJobResponse> {
			return this.http.post<DescribeFHIRExportJobResponse>(this.baseUri + '#X-Amz-Target=HealthLake.DescribeFHIRExportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the job.
		 * Post #X-Amz-Target=HealthLake.DescribeFHIRImportJob
		 * @return {DescribeFHIRImportJobResponse} Success
		 */
		DescribeFHIRImportJob(requestBody: DescribeFHIRImportJobRequest): Observable<DescribeFHIRImportJobResponse> {
			return this.http.post<DescribeFHIRImportJobResponse>(this.baseUri + '#X-Amz-Target=HealthLake.DescribeFHIRImportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all FHIR data stores that are in the user’s account, regardless of data store status.
		 * Post #X-Amz-Target=HealthLake.ListFHIRDatastores
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFHIRDatastoresResponse} Success
		 */
		ListFHIRDatastores(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFHIRDatastoresRequest): Observable<ListFHIRDatastoresResponse> {
			return this.http.post<ListFHIRDatastoresResponse>(this.baseUri + '#X-Amz-Target=HealthLake.ListFHIRDatastores?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all FHIR export jobs associated with an account and their statuses.
		 * Post #X-Amz-Target=HealthLake.ListFHIRExportJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFHIRExportJobsResponse} Success
		 */
		ListFHIRExportJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFHIRExportJobsRequest): Observable<ListFHIRExportJobsResponse> {
			return this.http.post<ListFHIRExportJobsResponse>(this.baseUri + '#X-Amz-Target=HealthLake.ListFHIRExportJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all FHIR import jobs associated with an account and their statuses.
		 * Post #X-Amz-Target=HealthLake.ListFHIRImportJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFHIRImportJobsResponse} Success
		 */
		ListFHIRImportJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFHIRImportJobsRequest): Observable<ListFHIRImportJobsResponse> {
			return this.http.post<ListFHIRImportJobsResponse>(this.baseUri + '#X-Amz-Target=HealthLake.ListFHIRImportJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all existing tags associated with a data store.
		 * Post #X-Amz-Target=HealthLake.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=HealthLake.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Begins a FHIR export job.
		 * Post #X-Amz-Target=HealthLake.StartFHIRExportJob
		 * @return {StartFHIRExportJobResponse} Success
		 */
		StartFHIRExportJob(requestBody: StartFHIRExportJobRequest): Observable<StartFHIRExportJobResponse> {
			return this.http.post<StartFHIRExportJobResponse>(this.baseUri + '#X-Amz-Target=HealthLake.StartFHIRExportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Begins a FHIR Import job.
		 * Post #X-Amz-Target=HealthLake.StartFHIRImportJob
		 * @return {StartFHIRImportJobResponse} Success
		 */
		StartFHIRImportJob(requestBody: StartFHIRImportJobRequest): Observable<StartFHIRImportJobResponse> {
			return this.http.post<StartFHIRImportJobResponse>(this.baseUri + '#X-Amz-Target=HealthLake.StartFHIRImportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a user specified key and value tag to a data store.
		 * Post #X-Amz-Target=HealthLake.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=HealthLake.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from a data store.
		 * Post #X-Amz-Target=HealthLake.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=HealthLake.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateFHIRDatastoreX_Amz_Target { 'HealthLake.CreateFHIRDatastore' = 0 }

	export enum DeleteFHIRDatastoreX_Amz_Target { 'HealthLake.DeleteFHIRDatastore' = 0 }

	export enum DescribeFHIRDatastoreX_Amz_Target { 'HealthLake.DescribeFHIRDatastore' = 0 }

	export enum DescribeFHIRExportJobX_Amz_Target { 'HealthLake.DescribeFHIRExportJob' = 0 }

	export enum DescribeFHIRImportJobX_Amz_Target { 'HealthLake.DescribeFHIRImportJob' = 0 }

	export enum ListFHIRDatastoresX_Amz_Target { 'HealthLake.ListFHIRDatastores' = 0 }

	export enum ListFHIRExportJobsX_Amz_Target { 'HealthLake.ListFHIRExportJobs' = 0 }

	export enum ListFHIRImportJobsX_Amz_Target { 'HealthLake.ListFHIRImportJobs' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'HealthLake.ListTagsForResource' = 0 }

	export enum StartFHIRExportJobX_Amz_Target { 'HealthLake.StartFHIRExportJob' = 0 }

	export enum StartFHIRImportJobX_Amz_Target { 'HealthLake.StartFHIRImportJob' = 0 }

	export enum TagResourceX_Amz_Target { 'HealthLake.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'HealthLake.UntagResource' = 0 }

}

