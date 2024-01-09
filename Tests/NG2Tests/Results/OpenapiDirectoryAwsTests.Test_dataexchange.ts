import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface CreateDataSetResponse {

		/** An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn?: string | null;

		/** The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT. */
		AssetType?: CreateDataSetResponseAssetType | null;

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt?: Date | null;

		/** A description of a resource. */
		Description?: string | null;

		/** A unique identifier. */
		Id?: string | null;

		/** The name of the model. */
		Name?: string | null;

		/** A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers). When an owned data set is published in a product, AWS Data Exchange creates a copy of the data set. Subscribers can access that copy of the data set as an entitled data set. */
		Origin?: CreateDataSetResponseOrigin | null;
		OriginDetails?: OriginDetails;

		/** A unique identifier. */
		SourceId?: string | null;
		Tags?: MapOf__string;

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt?: Date | null;
	}
	export interface CreateDataSetResponseFormProperties {

		/** An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn: FormControl<string | null | undefined>,

		/** The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT. */
		AssetType: FormControl<CreateDataSetResponseAssetType | null | undefined>,

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** A description of a resource. */
		Description: FormControl<string | null | undefined>,

		/** A unique identifier. */
		Id: FormControl<string | null | undefined>,

		/** The name of the model. */
		Name: FormControl<string | null | undefined>,

		/** A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers). When an owned data set is published in a product, AWS Data Exchange creates a copy of the data set. Subscribers can access that copy of the data set as an entitled data set. */
		Origin: FormControl<CreateDataSetResponseOrigin | null | undefined>,

		/** A unique identifier. */
		SourceId: FormControl<string | null | undefined>,

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateCreateDataSetResponseFormGroup() {
		return new FormGroup<CreateDataSetResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			AssetType: new FormControl<CreateDataSetResponseAssetType | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Origin: new FormControl<CreateDataSetResponseOrigin | null | undefined>(undefined),
			SourceId: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum CreateDataSetResponseAssetType { S3_SNAPSHOT = 0 }

	export enum CreateDataSetResponseOrigin { OWNED = 0, ENTITLED = 1 }

	export interface OriginDetails {

		/** Required */
		ProductId: string;
	}
	export interface OriginDetailsFormProperties {

		/** Required */
		ProductId: FormControl<string | null | undefined>,
	}
	export function CreateOriginDetailsFormGroup() {
		return new FormGroup<OriginDetailsFormProperties>({
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MapOf__string {
	}
	export interface MapOf__stringFormProperties {
	}
	export function CreateMapOf__stringFormGroup() {
		return new FormGroup<MapOf__stringFormProperties>({
		});

	}

	export interface ServiceLimitExceededException {
	}
	export interface ServiceLimitExceededExceptionFormProperties {
	}
	export function CreateServiceLimitExceededExceptionFormGroup() {
		return new FormGroup<ServiceLimitExceededExceptionFormProperties>({
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

	export interface CreateJobResponse {

		/** An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn?: string | null;

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt?: Date | null;

		/** Details for the response. */
		Details?: ResponseDetails;
		Errors?: Array<JobError>;

		/** A unique identifier. */
		Id?: string | null;
		State?: CreateJobResponseState | null;
		Type?: CreateJobResponseType | null;

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt?: Date | null;
	}
	export interface CreateJobResponseFormProperties {

		/** An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn: FormControl<string | null | undefined>,

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** A unique identifier. */
		Id: FormControl<string | null | undefined>,
		State: FormControl<CreateJobResponseState | null | undefined>,
		Type: FormControl<CreateJobResponseType | null | undefined>,

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateCreateJobResponseFormGroup() {
		return new FormGroup<CreateJobResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<CreateJobResponseState | null | undefined>(undefined),
			Type: new FormControl<CreateJobResponseType | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Details for the response. */
	export interface ResponseDetails {

		/** The details of the export to signed URL response. */
		ExportAssetToSignedUrl?: ExportAssetToSignedUrlResponseDetails;

		/** Details about the export to Amazon S3 response. */
		ExportAssetsToS3?: ExportAssetsToS3ResponseDetails;

		/** The details in the response for an import request, including the signed URL and other information. */
		ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlResponseDetails;

		/** Details from an import from Amazon S3 response. */
		ImportAssetsFromS3?: ImportAssetsFromS3ResponseDetails;
	}

	/** Details for the response. */
	export interface ResponseDetailsFormProperties {
	}
	export function CreateResponseDetailsFormGroup() {
		return new FormGroup<ResponseDetailsFormProperties>({
		});

	}


	/** The details of the export to signed URL response. */
	export interface ExportAssetToSignedUrlResponseDetails {

		/**
		 * A unique identifier.
		 * Required
		 */
		AssetId: string;

		/**
		 * A unique identifier.
		 * Required
		 */
		DataSetId: string;

		/**
		 * A unique identifier.
		 * Required
		 */
		RevisionId: string;
		SignedUrl?: string | null;

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		SignedUrlExpiresAt?: Date | null;
	}

	/** The details of the export to signed URL response. */
	export interface ExportAssetToSignedUrlResponseDetailsFormProperties {

		/**
		 * A unique identifier.
		 * Required
		 */
		AssetId: FormControl<string | null | undefined>,

		/**
		 * A unique identifier.
		 * Required
		 */
		DataSetId: FormControl<string | null | undefined>,

		/**
		 * A unique identifier.
		 * Required
		 */
		RevisionId: FormControl<string | null | undefined>,
		SignedUrl: FormControl<string | null | undefined>,

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		SignedUrlExpiresAt: FormControl<Date | null | undefined>,
	}
	export function CreateExportAssetToSignedUrlResponseDetailsFormGroup() {
		return new FormGroup<ExportAssetToSignedUrlResponseDetailsFormProperties>({
			AssetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RevisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SignedUrl: new FormControl<string | null | undefined>(undefined),
			SignedUrlExpiresAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Details about the export to Amazon S3 response. */
	export interface ExportAssetsToS3ResponseDetails {

		/**
		 * The destination where the assets will be exported.
		 * Required
		 */
		AssetDestinations: Array<AssetDestinationEntry>;

		/**
		 * A unique identifier.
		 * Required
		 */
		DataSetId: string;

		/** Encryption configuration of the export job. Includes the encryption type as well as the AWS KMS key. The KMS key is only necessary if you chose the KMS encryption type. */
		Encryption?: ExportServerSideEncryption;

		/**
		 * A unique identifier.
		 * Required
		 */
		RevisionId: string;
	}

	/** Details about the export to Amazon S3 response. */
	export interface ExportAssetsToS3ResponseDetailsFormProperties {

		/**
		 * A unique identifier.
		 * Required
		 */
		DataSetId: FormControl<string | null | undefined>,

		/**
		 * A unique identifier.
		 * Required
		 */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateExportAssetsToS3ResponseDetailsFormGroup() {
		return new FormGroup<ExportAssetsToS3ResponseDetailsFormProperties>({
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RevisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The destination for the asset. */
	export interface AssetDestinationEntry {

		/**
		 * A unique identifier.
		 * Required
		 */
		AssetId: string;

		/** Required */
		Bucket: string;
		Key?: string | null;
	}

	/** The destination for the asset. */
	export interface AssetDestinationEntryFormProperties {

		/**
		 * A unique identifier.
		 * Required
		 */
		AssetId: FormControl<string | null | undefined>,

		/** Required */
		Bucket: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
	}
	export function CreateAssetDestinationEntryFormGroup() {
		return new FormGroup<AssetDestinationEntryFormProperties>({
			AssetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encryption configuration of the export job. Includes the encryption type as well as the AWS KMS key. The KMS key is only necessary if you chose the KMS encryption type. */
	export interface ExportServerSideEncryption {

		/** Required */
		KmsKeyArn: string;

		/**
		 * The types of encryption supported in export jobs to Amazon S3.
		 * Required
		 */
		Type: ExportServerSideEncryptionType;
	}

	/** Encryption configuration of the export job. Includes the encryption type as well as the AWS KMS key. The KMS key is only necessary if you chose the KMS encryption type. */
	export interface ExportServerSideEncryptionFormProperties {

		/** Required */
		KmsKeyArn: FormControl<string | null | undefined>,

		/**
		 * The types of encryption supported in export jobs to Amazon S3.
		 * Required
		 */
		Type: FormControl<ExportServerSideEncryptionType | null | undefined>,
	}
	export function CreateExportServerSideEncryptionFormGroup() {
		return new FormGroup<ExportServerSideEncryptionFormProperties>({
			KmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ExportServerSideEncryptionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ExportServerSideEncryptionType { awskms = 0, AES256 = 1 }


	/** The details in the response for an import request, including the signed URL and other information. */
	export interface ImportAssetFromSignedUrlResponseDetails {

		/**
		 * The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key.
		 * Required
		 */
		AssetName: string;

		/**
		 * A unique identifier.
		 * Required
		 */
		DataSetId: string;

		/**
		 * Max length: 24
		 * Min length: 24
		 */
		Md5Hash?: string | null;

		/**
		 * A unique identifier.
		 * Required
		 */
		RevisionId: string;
		SignedUrl?: string | null;

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		SignedUrlExpiresAt?: Date | null;
	}

	/** The details in the response for an import request, including the signed URL and other information. */
	export interface ImportAssetFromSignedUrlResponseDetailsFormProperties {

		/**
		 * The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key.
		 * Required
		 */
		AssetName: FormControl<string | null | undefined>,

		/**
		 * A unique identifier.
		 * Required
		 */
		DataSetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 24
		 * Min length: 24
		 */
		Md5Hash: FormControl<string | null | undefined>,

		/**
		 * A unique identifier.
		 * Required
		 */
		RevisionId: FormControl<string | null | undefined>,
		SignedUrl: FormControl<string | null | undefined>,

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		SignedUrlExpiresAt: FormControl<Date | null | undefined>,
	}
	export function CreateImportAssetFromSignedUrlResponseDetailsFormGroup() {
		return new FormGroup<ImportAssetFromSignedUrlResponseDetailsFormProperties>({
			AssetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Md5Hash: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(24), Validators.minLength(24), Validators.pattern('/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/')]),
			RevisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SignedUrl: new FormControl<string | null | undefined>(undefined),
			SignedUrlExpiresAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Details from an import from Amazon S3 response. */
	export interface ImportAssetsFromS3ResponseDetails {

		/**
		 * The list of sources for the assets.
		 * Required
		 */
		AssetSources: Array<AssetSourceEntry>;

		/**
		 * A unique identifier.
		 * Required
		 */
		DataSetId: string;

		/**
		 * A unique identifier.
		 * Required
		 */
		RevisionId: string;
	}

	/** Details from an import from Amazon S3 response. */
	export interface ImportAssetsFromS3ResponseDetailsFormProperties {

		/**
		 * A unique identifier.
		 * Required
		 */
		DataSetId: FormControl<string | null | undefined>,

		/**
		 * A unique identifier.
		 * Required
		 */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateImportAssetsFromS3ResponseDetailsFormGroup() {
		return new FormGroup<ImportAssetsFromS3ResponseDetailsFormProperties>({
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RevisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The source of the assets. */
	export interface AssetSourceEntry {

		/** Required */
		Bucket: string;

		/** Required */
		Key: string;
	}

	/** The source of the assets. */
	export interface AssetSourceEntryFormProperties {

		/** Required */
		Bucket: FormControl<string | null | undefined>,

		/** Required */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateAssetSourceEntryFormGroup() {
		return new FormGroup<AssetSourceEntryFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An error that occurred with the job request. */
	export interface JobError {

		/** Required */
		Code: JobErrorCode;
		Details?: Details;

		/** The name of the limit that was reached. */
		LimitName?: JobErrorLimitName | null;
		LimitValue?: number | null;

		/** Required */
		Message: string;
		ResourceId?: string | null;

		/** The types of resource which the job error can apply to. */
		ResourceType?: JobErrorResourceType | null;
	}

	/** An error that occurred with the job request. */
	export interface JobErrorFormProperties {

		/** Required */
		Code: FormControl<JobErrorCode | null | undefined>,

		/** The name of the limit that was reached. */
		LimitName: FormControl<JobErrorLimitName | null | undefined>,
		LimitValue: FormControl<number | null | undefined>,

		/** Required */
		Message: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,

		/** The types of resource which the job error can apply to. */
		ResourceType: FormControl<JobErrorResourceType | null | undefined>,
	}
	export function CreateJobErrorFormGroup() {
		return new FormGroup<JobErrorFormProperties>({
			Code: new FormControl<JobErrorCode | null | undefined>(undefined, [Validators.required]),
			LimitName: new FormControl<JobErrorLimitName | null | undefined>(undefined),
			LimitValue: new FormControl<number | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<JobErrorResourceType | null | undefined>(undefined),
		});

	}

	export enum JobErrorCode { ACCESS_DENIED_EXCEPTION = 0, INTERNAL_SERVER_EXCEPTION = 1, MALWARE_DETECTED = 2, RESOURCE_NOT_FOUND_EXCEPTION = 3, SERVICE_QUOTA_EXCEEDED_EXCEPTION = 4, VALIDATION_EXCEPTION = 5, MALWARE_SCAN_ENCRYPTED_FILE = 6 }

	export interface Details {
		ImportAssetFromSignedUrlJobErrorDetails?: ImportAssetFromSignedUrlJobErrorDetails;

		/** The list of sources for the assets. */
		ImportAssetsFromS3JobErrorDetails?: Array<AssetSourceEntry>;
	}
	export interface DetailsFormProperties {
	}
	export function CreateDetailsFormGroup() {
		return new FormGroup<DetailsFormProperties>({
		});

	}

	export interface ImportAssetFromSignedUrlJobErrorDetails {

		/**
		 * The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key.
		 * Required
		 */
		AssetName: string;
	}
	export interface ImportAssetFromSignedUrlJobErrorDetailsFormProperties {

		/**
		 * The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key.
		 * Required
		 */
		AssetName: FormControl<string | null | undefined>,
	}
	export function CreateImportAssetFromSignedUrlJobErrorDetailsFormGroup() {
		return new FormGroup<ImportAssetFromSignedUrlJobErrorDetailsFormProperties>({
			AssetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JobErrorLimitName { Assets_per_revision = 0, Asset_size_in_GB = 1 }

	export enum JobErrorResourceType { REVISION = 0, ASSET = 1 }

	export enum CreateJobResponseState { WAITING = 0, IN_PROGRESS = 1, ERROR = 2, COMPLETED = 3, CANCELLED = 4, TIMED_OUT = 5 }

	export enum CreateJobResponseType { IMPORT_ASSETS_FROM_S3 = 0, IMPORT_ASSET_FROM_SIGNED_URL = 1, EXPORT_ASSETS_TO_S3 = 2, EXPORT_ASSET_TO_SIGNED_URL = 3 }


	/** Details of the operation to be performed by the job. */
	export interface ExportAssetToSignedUrlRequestDetails {

		/**
		 * A unique identifier.
		 * Required
		 */
		AssetId: string;

		/**
		 * A unique identifier.
		 * Required
		 */
		DataSetId: string;

		/**
		 * A unique identifier.
		 * Required
		 */
		RevisionId: string;
	}

	/** Details of the operation to be performed by the job. */
	export interface ExportAssetToSignedUrlRequestDetailsFormProperties {

		/**
		 * A unique identifier.
		 * Required
		 */
		AssetId: FormControl<string | null | undefined>,

		/**
		 * A unique identifier.
		 * Required
		 */
		DataSetId: FormControl<string | null | undefined>,

		/**
		 * A unique identifier.
		 * Required
		 */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateExportAssetToSignedUrlRequestDetailsFormGroup() {
		return new FormGroup<ExportAssetToSignedUrlRequestDetailsFormProperties>({
			AssetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RevisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details of the operation to be performed by the job. */
	export interface ExportAssetsToS3RequestDetails {

		/**
		 * The destination where the assets will be exported.
		 * Required
		 */
		AssetDestinations: Array<AssetDestinationEntry>;

		/**
		 * A unique identifier.
		 * Required
		 */
		DataSetId: string;

		/** Encryption configuration of the export job. Includes the encryption type as well as the AWS KMS key. The KMS key is only necessary if you chose the KMS encryption type. */
		Encryption?: ExportServerSideEncryption;

		/**
		 * A unique identifier.
		 * Required
		 */
		RevisionId: string;
	}

	/** Details of the operation to be performed by the job. */
	export interface ExportAssetsToS3RequestDetailsFormProperties {

		/**
		 * A unique identifier.
		 * Required
		 */
		DataSetId: FormControl<string | null | undefined>,

		/**
		 * A unique identifier.
		 * Required
		 */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateExportAssetsToS3RequestDetailsFormGroup() {
		return new FormGroup<ExportAssetsToS3RequestDetailsFormProperties>({
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RevisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details of the operation to be performed by the job. */
	export interface ImportAssetFromSignedUrlRequestDetails {

		/**
		 * The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key.
		 * Required
		 */
		AssetName: string;

		/**
		 * A unique identifier.
		 * Required
		 */
		DataSetId: string;

		/**
		 * Required
		 * Max length: 24
		 * Min length: 24
		 */
		Md5Hash: string;

		/**
		 * A unique identifier.
		 * Required
		 */
		RevisionId: string;
	}

	/** Details of the operation to be performed by the job. */
	export interface ImportAssetFromSignedUrlRequestDetailsFormProperties {

		/**
		 * The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key.
		 * Required
		 */
		AssetName: FormControl<string | null | undefined>,

		/**
		 * A unique identifier.
		 * Required
		 */
		DataSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 24
		 * Min length: 24
		 */
		Md5Hash: FormControl<string | null | undefined>,

		/**
		 * A unique identifier.
		 * Required
		 */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateImportAssetFromSignedUrlRequestDetailsFormGroup() {
		return new FormGroup<ImportAssetFromSignedUrlRequestDetailsFormProperties>({
			AssetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Md5Hash: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(24), Validators.minLength(24), Validators.pattern('/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/')]),
			RevisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details of the operation to be performed by the job. */
	export interface ImportAssetsFromS3RequestDetails {

		/**
		 * The list of sources for the assets.
		 * Required
		 */
		AssetSources: Array<AssetSourceEntry>;

		/**
		 * A unique identifier.
		 * Required
		 */
		DataSetId: string;

		/**
		 * A unique identifier.
		 * Required
		 */
		RevisionId: string;
	}

	/** Details of the operation to be performed by the job. */
	export interface ImportAssetsFromS3RequestDetailsFormProperties {

		/**
		 * A unique identifier.
		 * Required
		 */
		DataSetId: FormControl<string | null | undefined>,

		/**
		 * A unique identifier.
		 * Required
		 */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateImportAssetsFromS3RequestDetailsFormGroup() {
		return new FormGroup<ImportAssetsFromS3RequestDetailsFormProperties>({
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RevisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRevisionResponse {

		/** An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn?: string | null;

		/**
		 * Max length: 16384
		 * Min length: 0
		 */
		Comment?: string | null;

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt?: Date | null;

		/** A unique identifier. */
		DataSetId?: string | null;
		Finalized?: boolean | null;

		/** A unique identifier. */
		Id?: string | null;

		/** A unique identifier. */
		SourceId?: string | null;
		Tags?: MapOf__string;

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt?: Date | null;
	}
	export interface CreateRevisionResponseFormProperties {

		/** An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 16384
		 * Min length: 0
		 */
		Comment: FormControl<string | null | undefined>,

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** A unique identifier. */
		DataSetId: FormControl<string | null | undefined>,
		Finalized: FormControl<boolean | null | undefined>,

		/** A unique identifier. */
		Id: FormControl<string | null | undefined>,

		/** A unique identifier. */
		SourceId: FormControl<string | null | undefined>,

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateCreateRevisionResponseFormGroup() {
		return new FormGroup<CreateRevisionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(16384), Validators.minLength(0)]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DataSetId: new FormControl<string | null | undefined>(undefined),
			Finalized: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			SourceId: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetAssetResponse {

		/** An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn?: string | null;
		AssetDetails?: AssetDetails;

		/** The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT. */
		AssetType?: CreateDataSetResponseAssetType | null;

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt?: Date | null;

		/** A unique identifier. */
		DataSetId?: string | null;

		/** A unique identifier. */
		Id?: string | null;

		/** The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key. */
		Name?: string | null;

		/** A unique identifier. */
		RevisionId?: string | null;

		/** A unique identifier. */
		SourceId?: string | null;

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt?: Date | null;
	}
	export interface GetAssetResponseFormProperties {

		/** An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn: FormControl<string | null | undefined>,

		/** The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT. */
		AssetType: FormControl<CreateDataSetResponseAssetType | null | undefined>,

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** A unique identifier. */
		DataSetId: FormControl<string | null | undefined>,

		/** A unique identifier. */
		Id: FormControl<string | null | undefined>,

		/** The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key. */
		Name: FormControl<string | null | undefined>,

		/** A unique identifier. */
		RevisionId: FormControl<string | null | undefined>,

		/** A unique identifier. */
		SourceId: FormControl<string | null | undefined>,

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetAssetResponseFormGroup() {
		return new FormGroup<GetAssetResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			AssetType: new FormControl<CreateDataSetResponseAssetType | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DataSetId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined),
			SourceId: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface AssetDetails {

		/** The S3 object that is the asset. */
		S3SnapshotAsset?: S3SnapshotAsset;
	}
	export interface AssetDetailsFormProperties {
	}
	export function CreateAssetDetailsFormGroup() {
		return new FormGroup<AssetDetailsFormProperties>({
		});

	}


	/** The S3 object that is the asset. */
	export interface S3SnapshotAsset {

		/** Required */
		Size: number;
	}

	/** The S3 object that is the asset. */
	export interface S3SnapshotAssetFormProperties {

		/** Required */
		Size: FormControl<number | null | undefined>,
	}
	export function CreateS3SnapshotAssetFormGroup() {
		return new FormGroup<S3SnapshotAssetFormProperties>({
			Size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDataSetResponse {

		/** An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn?: string | null;

		/** The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT. */
		AssetType?: CreateDataSetResponseAssetType | null;

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt?: Date | null;

		/** A description of a resource. */
		Description?: string | null;

		/** A unique identifier. */
		Id?: string | null;

		/** The name of the model. */
		Name?: string | null;

		/** A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers). When an owned data set is published in a product, AWS Data Exchange creates a copy of the data set. Subscribers can access that copy of the data set as an entitled data set. */
		Origin?: CreateDataSetResponseOrigin | null;
		OriginDetails?: OriginDetails;

		/** A unique identifier. */
		SourceId?: string | null;
		Tags?: MapOf__string;

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt?: Date | null;
	}
	export interface GetDataSetResponseFormProperties {

		/** An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn: FormControl<string | null | undefined>,

		/** The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT. */
		AssetType: FormControl<CreateDataSetResponseAssetType | null | undefined>,

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** A description of a resource. */
		Description: FormControl<string | null | undefined>,

		/** A unique identifier. */
		Id: FormControl<string | null | undefined>,

		/** The name of the model. */
		Name: FormControl<string | null | undefined>,

		/** A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers). When an owned data set is published in a product, AWS Data Exchange creates a copy of the data set. Subscribers can access that copy of the data set as an entitled data set. */
		Origin: FormControl<CreateDataSetResponseOrigin | null | undefined>,

		/** A unique identifier. */
		SourceId: FormControl<string | null | undefined>,

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetDataSetResponseFormGroup() {
		return new FormGroup<GetDataSetResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			AssetType: new FormControl<CreateDataSetResponseAssetType | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Origin: new FormControl<CreateDataSetResponseOrigin | null | undefined>(undefined),
			SourceId: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetJobResponse {

		/** An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn?: string | null;

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt?: Date | null;

		/** Details for the response. */
		Details?: ResponseDetails;
		Errors?: Array<JobError>;

		/** A unique identifier. */
		Id?: string | null;
		State?: CreateJobResponseState | null;
		Type?: CreateJobResponseType | null;

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt?: Date | null;
	}
	export interface GetJobResponseFormProperties {

		/** An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn: FormControl<string | null | undefined>,

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** A unique identifier. */
		Id: FormControl<string | null | undefined>,
		State: FormControl<CreateJobResponseState | null | undefined>,
		Type: FormControl<CreateJobResponseType | null | undefined>,

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetJobResponseFormGroup() {
		return new FormGroup<GetJobResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<CreateJobResponseState | null | undefined>(undefined),
			Type: new FormControl<CreateJobResponseType | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetRevisionResponse {

		/** An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn?: string | null;

		/**
		 * Max length: 16384
		 * Min length: 0
		 */
		Comment?: string | null;

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt?: Date | null;

		/** A unique identifier. */
		DataSetId?: string | null;
		Finalized?: boolean | null;

		/** A unique identifier. */
		Id?: string | null;

		/** A unique identifier. */
		SourceId?: string | null;
		Tags?: MapOf__string;

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt?: Date | null;
	}
	export interface GetRevisionResponseFormProperties {

		/** An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 16384
		 * Min length: 0
		 */
		Comment: FormControl<string | null | undefined>,

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** A unique identifier. */
		DataSetId: FormControl<string | null | undefined>,
		Finalized: FormControl<boolean | null | undefined>,

		/** A unique identifier. */
		Id: FormControl<string | null | undefined>,

		/** A unique identifier. */
		SourceId: FormControl<string | null | undefined>,

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetRevisionResponseFormGroup() {
		return new FormGroup<GetRevisionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(16384), Validators.minLength(0)]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DataSetId: new FormControl<string | null | undefined>(undefined),
			Finalized: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			SourceId: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDataSetRevisionsResponse {

		/** The token value retrieved from a previous call to access the next page of results. */
		NextToken?: string | null;
		Revisions?: Array<RevisionEntry>;
	}
	export interface ListDataSetRevisionsResponseFormProperties {

		/** The token value retrieved from a previous call to access the next page of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataSetRevisionsResponseFormGroup() {
		return new FormGroup<ListDataSetRevisionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A revision is a container for one or more assets. */
	export interface RevisionEntry {

		/**
		 * An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.
		 * Required
		 */
		Arn: string;

		/**
		 * Max length: 16384
		 * Min length: 0
		 */
		Comment?: string | null;

		/**
		 * Dates and times in AWS Data Exchange are recorded in ISO 8601 format.
		 * Required
		 */
		CreatedAt: Date;

		/**
		 * A unique identifier.
		 * Required
		 */
		DataSetId: string;
		Finalized?: boolean | null;

		/**
		 * A unique identifier.
		 * Required
		 */
		Id: string;

		/** A unique identifier. */
		SourceId?: string | null;

		/**
		 * Dates and times in AWS Data Exchange are recorded in ISO 8601 format.
		 * Required
		 */
		UpdatedAt: Date;
	}

	/** A revision is a container for one or more assets. */
	export interface RevisionEntryFormProperties {

		/**
		 * An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 16384
		 * Min length: 0
		 */
		Comment: FormControl<string | null | undefined>,

		/**
		 * Dates and times in AWS Data Exchange are recorded in ISO 8601 format.
		 * Required
		 */
		CreatedAt: FormControl<Date | null | undefined>,

		/**
		 * A unique identifier.
		 * Required
		 */
		DataSetId: FormControl<string | null | undefined>,
		Finalized: FormControl<boolean | null | undefined>,

		/**
		 * A unique identifier.
		 * Required
		 */
		Id: FormControl<string | null | undefined>,

		/** A unique identifier. */
		SourceId: FormControl<string | null | undefined>,

		/**
		 * Dates and times in AWS Data Exchange are recorded in ISO 8601 format.
		 * Required
		 */
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateRevisionEntryFormGroup() {
		return new FormGroup<RevisionEntryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(16384), Validators.minLength(0)]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Finalized: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceId: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListDataSetsResponse {
		DataSets?: Array<DataSetEntry>;

		/** The token value retrieved from a previous call to access the next page of results. */
		NextToken?: string | null;
	}
	export interface ListDataSetsResponseFormProperties {

		/** The token value retrieved from a previous call to access the next page of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataSetsResponseFormGroup() {
		return new FormGroup<ListDataSetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A data set is an AWS resource with one or more revisions. */
	export interface DataSetEntry {

		/**
		 * An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.
		 * Required
		 */
		Arn: string;

		/**
		 * The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT.
		 * Required
		 */
		AssetType: CreateDataSetResponseAssetType;

		/**
		 * Dates and times in AWS Data Exchange are recorded in ISO 8601 format.
		 * Required
		 */
		CreatedAt: Date;

		/**
		 * A description of a resource.
		 * Required
		 */
		Description: string;

		/**
		 * A unique identifier.
		 * Required
		 */
		Id: string;

		/**
		 * The name of the model.
		 * Required
		 */
		Name: string;

		/**
		 * A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers). When an owned data set is published in a product, AWS Data Exchange creates a copy of the data set. Subscribers can access that copy of the data set as an entitled data set.
		 * Required
		 */
		Origin: CreateDataSetResponseOrigin;
		OriginDetails?: OriginDetails;

		/** A unique identifier. */
		SourceId?: string | null;

		/**
		 * Dates and times in AWS Data Exchange are recorded in ISO 8601 format.
		 * Required
		 */
		UpdatedAt: Date;
	}

	/** A data set is an AWS resource with one or more revisions. */
	export interface DataSetEntryFormProperties {

		/**
		 * An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT.
		 * Required
		 */
		AssetType: FormControl<CreateDataSetResponseAssetType | null | undefined>,

		/**
		 * Dates and times in AWS Data Exchange are recorded in ISO 8601 format.
		 * Required
		 */
		CreatedAt: FormControl<Date | null | undefined>,

		/**
		 * A description of a resource.
		 * Required
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * A unique identifier.
		 * Required
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * The name of the model.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers). When an owned data set is published in a product, AWS Data Exchange creates a copy of the data set. Subscribers can access that copy of the data set as an entitled data set.
		 * Required
		 */
		Origin: FormControl<CreateDataSetResponseOrigin | null | undefined>,

		/** A unique identifier. */
		SourceId: FormControl<string | null | undefined>,

		/**
		 * Dates and times in AWS Data Exchange are recorded in ISO 8601 format.
		 * Required
		 */
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDataSetEntryFormGroup() {
		return new FormGroup<DataSetEntryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AssetType: new FormControl<CreateDataSetResponseAssetType | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Origin: new FormControl<CreateDataSetResponseOrigin | null | undefined>(undefined, [Validators.required]),
			SourceId: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListJobsResponse {
		Jobs?: Array<JobEntry>;

		/** The token value retrieved from a previous call to access the next page of results. */
		NextToken?: string | null;
	}
	export interface ListJobsResponseFormProperties {

		/** The token value retrieved from a previous call to access the next page of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResponseFormGroup() {
		return new FormGroup<ListJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AWS Data Exchange Jobs are asynchronous import or export operations used to create or copy assets. A data set owner can both import and export as they see fit. Someone with an entitlement to a data set can only export. Jobs are deleted 90 days after they are created. */
	export interface JobEntry {

		/**
		 * An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.
		 * Required
		 */
		Arn: string;

		/**
		 * Dates and times in AWS Data Exchange are recorded in ISO 8601 format.
		 * Required
		 */
		CreatedAt: Date;

		/**
		 * Details for the response.
		 * Required
		 */
		Details: ResponseDetails;
		Errors?: Array<JobError>;

		/**
		 * A unique identifier.
		 * Required
		 */
		Id: string;

		/** Required */
		State: CreateJobResponseState;

		/** Required */
		Type: CreateJobResponseType;

		/**
		 * Dates and times in AWS Data Exchange are recorded in ISO 8601 format.
		 * Required
		 */
		UpdatedAt: Date;
	}

	/** AWS Data Exchange Jobs are asynchronous import or export operations used to create or copy assets. A data set owner can both import and export as they see fit. Someone with an entitlement to a data set can only export. Jobs are deleted 90 days after they are created. */
	export interface JobEntryFormProperties {

		/**
		 * An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * Dates and times in AWS Data Exchange are recorded in ISO 8601 format.
		 * Required
		 */
		CreatedAt: FormControl<Date | null | undefined>,

		/**
		 * A unique identifier.
		 * Required
		 */
		Id: FormControl<string | null | undefined>,

		/** Required */
		State: FormControl<CreateJobResponseState | null | undefined>,

		/** Required */
		Type: FormControl<CreateJobResponseType | null | undefined>,

		/**
		 * Dates and times in AWS Data Exchange are recorded in ISO 8601 format.
		 * Required
		 */
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateJobEntryFormGroup() {
		return new FormGroup<JobEntryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			State: new FormControl<CreateJobResponseState | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<CreateJobResponseType | null | undefined>(undefined, [Validators.required]),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListRevisionAssetsResponse {
		Assets?: Array<AssetEntry>;

		/** The token value retrieved from a previous call to access the next page of results. */
		NextToken?: string | null;
	}
	export interface ListRevisionAssetsResponseFormProperties {

		/** The token value retrieved from a previous call to access the next page of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRevisionAssetsResponseFormGroup() {
		return new FormGroup<ListRevisionAssetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An asset in AWS Data Exchange is a piece of data that can be stored as an S3 object. The asset can be a structured data file, an image file, or some other data file. When you create an import job for your files, you create an asset in AWS Data Exchange for each of those files. */
	export interface AssetEntry {

		/**
		 * An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.
		 * Required
		 */
		Arn: string;

		/** Required */
		AssetDetails: AssetDetails;

		/**
		 * The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT.
		 * Required
		 */
		AssetType: CreateDataSetResponseAssetType;

		/**
		 * Dates and times in AWS Data Exchange are recorded in ISO 8601 format.
		 * Required
		 */
		CreatedAt: Date;

		/**
		 * A unique identifier.
		 * Required
		 */
		DataSetId: string;

		/**
		 * A unique identifier.
		 * Required
		 */
		Id: string;

		/**
		 * The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key.
		 * Required
		 */
		Name: string;

		/**
		 * A unique identifier.
		 * Required
		 */
		RevisionId: string;

		/** A unique identifier. */
		SourceId?: string | null;

		/**
		 * Dates and times in AWS Data Exchange are recorded in ISO 8601 format.
		 * Required
		 */
		UpdatedAt: Date;
	}

	/** An asset in AWS Data Exchange is a piece of data that can be stored as an S3 object. The asset can be a structured data file, an image file, or some other data file. When you create an import job for your files, you create an asset in AWS Data Exchange for each of those files. */
	export interface AssetEntryFormProperties {

		/**
		 * An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT.
		 * Required
		 */
		AssetType: FormControl<CreateDataSetResponseAssetType | null | undefined>,

		/**
		 * Dates and times in AWS Data Exchange are recorded in ISO 8601 format.
		 * Required
		 */
		CreatedAt: FormControl<Date | null | undefined>,

		/**
		 * A unique identifier.
		 * Required
		 */
		DataSetId: FormControl<string | null | undefined>,

		/**
		 * A unique identifier.
		 * Required
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A unique identifier.
		 * Required
		 */
		RevisionId: FormControl<string | null | undefined>,

		/** A unique identifier. */
		SourceId: FormControl<string | null | undefined>,

		/**
		 * Dates and times in AWS Data Exchange are recorded in ISO 8601 format.
		 * Required
		 */
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateAssetEntryFormGroup() {
		return new FormGroup<AssetEntryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AssetType: new FormControl<CreateDataSetResponseAssetType | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RevisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceId: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: MapOf__string;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface StartJobResponse {
	}
	export interface StartJobResponseFormProperties {
	}
	export function CreateStartJobResponseFormGroup() {
		return new FormGroup<StartJobResponseFormProperties>({
		});

	}

	export interface UpdateAssetResponse {

		/** An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn?: string | null;
		AssetDetails?: AssetDetails;

		/** The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT. */
		AssetType?: CreateDataSetResponseAssetType | null;

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt?: Date | null;

		/** A unique identifier. */
		DataSetId?: string | null;

		/** A unique identifier. */
		Id?: string | null;

		/** The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key. */
		Name?: string | null;

		/** A unique identifier. */
		RevisionId?: string | null;

		/** A unique identifier. */
		SourceId?: string | null;

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt?: Date | null;
	}
	export interface UpdateAssetResponseFormProperties {

		/** An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn: FormControl<string | null | undefined>,

		/** The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT. */
		AssetType: FormControl<CreateDataSetResponseAssetType | null | undefined>,

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** A unique identifier. */
		DataSetId: FormControl<string | null | undefined>,

		/** A unique identifier. */
		Id: FormControl<string | null | undefined>,

		/** The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key. */
		Name: FormControl<string | null | undefined>,

		/** A unique identifier. */
		RevisionId: FormControl<string | null | undefined>,

		/** A unique identifier. */
		SourceId: FormControl<string | null | undefined>,

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateAssetResponseFormGroup() {
		return new FormGroup<UpdateAssetResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			AssetType: new FormControl<CreateDataSetResponseAssetType | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DataSetId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined),
			SourceId: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateDataSetResponse {

		/** An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn?: string | null;

		/** The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT. */
		AssetType?: CreateDataSetResponseAssetType | null;

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt?: Date | null;

		/** A description of a resource. */
		Description?: string | null;

		/** A unique identifier. */
		Id?: string | null;

		/** The name of the model. */
		Name?: string | null;

		/** A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers). When an owned data set is published in a product, AWS Data Exchange creates a copy of the data set. Subscribers can access that copy of the data set as an entitled data set. */
		Origin?: CreateDataSetResponseOrigin | null;
		OriginDetails?: OriginDetails;

		/** A unique identifier. */
		SourceId?: string | null;

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt?: Date | null;
	}
	export interface UpdateDataSetResponseFormProperties {

		/** An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn: FormControl<string | null | undefined>,

		/** The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT. */
		AssetType: FormControl<CreateDataSetResponseAssetType | null | undefined>,

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** A description of a resource. */
		Description: FormControl<string | null | undefined>,

		/** A unique identifier. */
		Id: FormControl<string | null | undefined>,

		/** The name of the model. */
		Name: FormControl<string | null | undefined>,

		/** A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers). When an owned data set is published in a product, AWS Data Exchange creates a copy of the data set. Subscribers can access that copy of the data set as an entitled data set. */
		Origin: FormControl<CreateDataSetResponseOrigin | null | undefined>,

		/** A unique identifier. */
		SourceId: FormControl<string | null | undefined>,

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateDataSetResponseFormGroup() {
		return new FormGroup<UpdateDataSetResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			AssetType: new FormControl<CreateDataSetResponseAssetType | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Origin: new FormControl<CreateDataSetResponseOrigin | null | undefined>(undefined),
			SourceId: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateRevisionResponse {

		/** An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn?: string | null;

		/**
		 * Max length: 16384
		 * Min length: 0
		 */
		Comment?: string | null;

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt?: Date | null;

		/** A unique identifier. */
		DataSetId?: string | null;
		Finalized?: boolean | null;

		/** A unique identifier. */
		Id?: string | null;

		/** A unique identifier. */
		SourceId?: string | null;

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt?: Date | null;
	}
	export interface UpdateRevisionResponseFormProperties {

		/** An Amazon Resource Name (ARN) that uniquely identifies an AWS resource. */
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 16384
		 * Min length: 0
		 */
		Comment: FormControl<string | null | undefined>,

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** A unique identifier. */
		DataSetId: FormControl<string | null | undefined>,
		Finalized: FormControl<boolean | null | undefined>,

		/** A unique identifier. */
		Id: FormControl<string | null | undefined>,

		/** A unique identifier. */
		SourceId: FormControl<string | null | undefined>,

		/** Dates and times in AWS Data Exchange are recorded in ISO 8601 format. */
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateRevisionResponseFormGroup() {
		return new FormGroup<UpdateRevisionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(16384), Validators.minLength(0)]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DataSetId: new FormControl<string | null | undefined>(undefined),
			Finalized: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			SourceId: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT. */
	export enum AssetType { S3_SNAPSHOT = 0 }

	export interface CancelJobRequest {
	}
	export interface CancelJobRequestFormProperties {
	}
	export function CreateCancelJobRequestFormGroup() {
		return new FormGroup<CancelJobRequestFormProperties>({
		});

	}

	export enum Code { ACCESS_DENIED_EXCEPTION = 0, INTERNAL_SERVER_EXCEPTION = 1, MALWARE_DETECTED = 2, RESOURCE_NOT_FOUND_EXCEPTION = 3, SERVICE_QUOTA_EXCEEDED_EXCEPTION = 4, VALIDATION_EXCEPTION = 5, MALWARE_SCAN_ENCRYPTED_FILE = 6 }


	/** The request body for CreateDataSet. */
	export interface CreateDataSetRequest {

		/**
		 * The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT.
		 * Required
		 */
		AssetType: CreateDataSetResponseAssetType;

		/**
		 * A description of a resource.
		 * Required
		 */
		Description: string;

		/**
		 * The name of the model.
		 * Required
		 */
		Name: string;
		Tags?: MapOf__string;
	}

	/** The request body for CreateDataSet. */
	export interface CreateDataSetRequestFormProperties {

		/**
		 * The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT.
		 * Required
		 */
		AssetType: FormControl<CreateDataSetResponseAssetType | null | undefined>,

		/**
		 * A description of a resource.
		 * Required
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The name of the model.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSetRequestFormGroup() {
		return new FormGroup<CreateDataSetRequestFormProperties>({
			AssetType: new FormControl<CreateDataSetResponseAssetType | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers). When an owned data set is published in a product, AWS Data Exchange creates a copy of the data set. Subscribers can access that copy of the data set as an entitled data set. */
	export enum Origin { OWNED = 0, ENTITLED = 1 }


	/** The details for the request. */
	export interface RequestDetails {

		/** Details of the operation to be performed by the job. */
		ExportAssetToSignedUrl?: ExportAssetToSignedUrlRequestDetails;

		/** Details of the operation to be performed by the job. */
		ExportAssetsToS3?: ExportAssetsToS3RequestDetails;

		/** Details of the operation to be performed by the job. */
		ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlRequestDetails;

		/** Details of the operation to be performed by the job. */
		ImportAssetsFromS3?: ImportAssetsFromS3RequestDetails;
	}

	/** The details for the request. */
	export interface RequestDetailsFormProperties {
	}
	export function CreateRequestDetailsFormGroup() {
		return new FormGroup<RequestDetailsFormProperties>({
		});

	}

	export enum Type { IMPORT_ASSETS_FROM_S3 = 0, IMPORT_ASSET_FROM_SIGNED_URL = 1, EXPORT_ASSETS_TO_S3 = 2, EXPORT_ASSET_TO_SIGNED_URL = 3 }


	/** The request body for CreateJob. */
	export interface CreateJobRequest {

		/**
		 * The details for the request.
		 * Required
		 */
		Details: RequestDetails;

		/** Required */
		Type: CreateJobResponseType;
	}

	/** The request body for CreateJob. */
	export interface CreateJobRequestFormProperties {

		/** Required */
		Type: FormControl<CreateJobResponseType | null | undefined>,
	}
	export function CreateCreateJobRequestFormGroup() {
		return new FormGroup<CreateJobRequestFormProperties>({
			Type: new FormControl<CreateJobResponseType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum State { WAITING = 0, IN_PROGRESS = 1, ERROR = 2, COMPLETED = 3, CANCELLED = 4, TIMED_OUT = 5 }


	/** The request body for CreateRevision. */
	export interface CreateRevisionRequest {

		/**
		 * Max length: 16384
		 * Min length: 0
		 */
		Comment?: string | null;
		Tags?: MapOf__string;
	}

	/** The request body for CreateRevision. */
	export interface CreateRevisionRequestFormProperties {

		/**
		 * Max length: 16384
		 * Min length: 0
		 */
		Comment: FormControl<string | null | undefined>,
	}
	export function CreateCreateRevisionRequestFormGroup() {
		return new FormGroup<CreateRevisionRequestFormProperties>({
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(16384), Validators.minLength(0)]),
		});

	}

	export interface DeleteAssetRequest {
	}
	export interface DeleteAssetRequestFormProperties {
	}
	export function CreateDeleteAssetRequestFormGroup() {
		return new FormGroup<DeleteAssetRequestFormProperties>({
		});

	}

	export interface DeleteDataSetRequest {
	}
	export interface DeleteDataSetRequestFormProperties {
	}
	export function CreateDeleteDataSetRequestFormGroup() {
		return new FormGroup<DeleteDataSetRequestFormProperties>({
		});

	}

	export interface DeleteRevisionRequest {
	}
	export interface DeleteRevisionRequestFormProperties {
	}
	export function CreateDeleteRevisionRequestFormGroup() {
		return new FormGroup<DeleteRevisionRequestFormProperties>({
		});

	}


	/** The types of encryption supported in export jobs to Amazon S3. */
	export enum ServerSideEncryptionTypes { awskms = 0, AES256 = 1 }

	export interface GetAssetRequest {
	}
	export interface GetAssetRequestFormProperties {
	}
	export function CreateGetAssetRequestFormGroup() {
		return new FormGroup<GetAssetRequestFormProperties>({
		});

	}

	export interface GetDataSetRequest {
	}
	export interface GetDataSetRequestFormProperties {
	}
	export function CreateGetDataSetRequestFormGroup() {
		return new FormGroup<GetDataSetRequestFormProperties>({
		});

	}

	export interface GetJobRequest {
	}
	export interface GetJobRequestFormProperties {
	}
	export function CreateGetJobRequestFormGroup() {
		return new FormGroup<GetJobRequestFormProperties>({
		});

	}

	export interface GetRevisionRequest {
	}
	export interface GetRevisionRequestFormProperties {
	}
	export function CreateGetRevisionRequestFormGroup() {
		return new FormGroup<GetRevisionRequestFormProperties>({
		});

	}


	/** The types of resource which the job error can apply to. */
	export enum JobErrorResourceTypes { REVISION = 0, ASSET = 1 }

	export interface ListDataSetRevisionsRequest {
	}
	export interface ListDataSetRevisionsRequestFormProperties {
	}
	export function CreateListDataSetRevisionsRequestFormGroup() {
		return new FormGroup<ListDataSetRevisionsRequestFormProperties>({
		});

	}

	export interface ListDataSetsRequest {
	}
	export interface ListDataSetsRequestFormProperties {
	}
	export function CreateListDataSetsRequestFormGroup() {
		return new FormGroup<ListDataSetsRequestFormProperties>({
		});

	}

	export interface ListJobsRequest {
	}
	export interface ListJobsRequestFormProperties {
	}
	export function CreateListJobsRequestFormGroup() {
		return new FormGroup<ListJobsRequestFormProperties>({
		});

	}

	export interface ListRevisionAssetsRequest {
	}
	export interface ListRevisionAssetsRequestFormProperties {
	}
	export function CreateListRevisionAssetsRequestFormGroup() {
		return new FormGroup<ListRevisionAssetsRequestFormProperties>({
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

	export interface StartJobRequest {
	}
	export interface StartJobRequestFormProperties {
	}
	export function CreateStartJobRequestFormGroup() {
		return new FormGroup<StartJobRequestFormProperties>({
		});

	}


	/** The request body for TagResource. */
	export interface TagResourceRequest {

		/** Required */
		Tags: MapOf__string;
	}

	/** The request body for TagResource. */
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


	/** The request body for UpdateAsset. */
	export interface UpdateAssetRequest {

		/**
		 * The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key.
		 * Required
		 */
		Name: string;
	}

	/** The request body for UpdateAsset. */
	export interface UpdateAssetRequestFormProperties {

		/**
		 * The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssetRequestFormGroup() {
		return new FormGroup<UpdateAssetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The request body for UpdateDataSet. */
	export interface UpdateDataSetRequest {

		/** A description of a resource. */
		Description?: string | null;

		/** The name of the model. */
		Name?: string | null;
	}

	/** The request body for UpdateDataSet. */
	export interface UpdateDataSetRequestFormProperties {

		/** A description of a resource. */
		Description: FormControl<string | null | undefined>,

		/** The name of the model. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataSetRequestFormGroup() {
		return new FormGroup<UpdateDataSetRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request body for UpdateRevision. */
	export interface UpdateRevisionRequest {

		/**
		 * Max length: 16384
		 * Min length: 0
		 */
		Comment?: string | null;
		Finalized?: boolean | null;
	}

	/** The request body for UpdateRevision. */
	export interface UpdateRevisionRequestFormProperties {

		/**
		 * Max length: 16384
		 * Min length: 0
		 */
		Comment: FormControl<string | null | undefined>,
		Finalized: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateRevisionRequestFormGroup() {
		return new FormGroup<UpdateRevisionRequestFormProperties>({
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(16384), Validators.minLength(0)]),
			Finalized: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * This operation cancels a job. Jobs can be cancelled only when they are in the WAITING state.
		 * Delete v1/jobs/{JobId}
		 * @param {string} JobId The unique identifier for a job.
		 * @return {void} 
		 */
		CancelJob(JobId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/jobs/' + (JobId == null ? '' : encodeURIComponent(JobId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation returns information about a job.
		 * Get v1/jobs/{JobId}
		 * @param {string} JobId The unique identifier for a job.
		 * @return {GetJobResponse} Success
		 */
		GetJob(JobId: string): Observable<GetJobResponse> {
			return this.http.get<GetJobResponse>(this.baseUri + 'v1/jobs/' + (JobId == null ? '' : encodeURIComponent(JobId)), {});
		}

		/**
		 * This operation starts a job.
		 * Patch v1/jobs/{JobId}
		 * @param {string} JobId The unique identifier for a job.
		 * @return {void} 
		 */
		StartJob(JobId: string): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/jobs/' + (JobId == null ? '' : encodeURIComponent(JobId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation creates a data set.
		 * Post v1/data-sets
		 * @return {void} 
		 */
		CreateDataSet(requestBody: CreateDataSetPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/data-sets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation lists your data sets. When listing by origin OWNED, results are sorted by CreatedAt in descending order. When listing by origin ENTITLED, there is no order and the maxResults parameter is ignored.
		 * Get v1/data-sets
		 * @param {number} maxResults The maximum number of results returned by a single call.
		 * @param {string} nextToken The token value retrieved from a previous call to access the next page of results.
		 * @param {string} origin A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDataSetsResponse} Success
		 */
		ListDataSets(maxResults: number | null | undefined, nextToken: string | null | undefined, origin: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListDataSetsResponse> {
			return this.http.get<ListDataSetsResponse>(this.baseUri + 'v1/data-sets?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&origin=' + (origin == null ? '' : encodeURIComponent(origin)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * This operation creates a job.
		 * Post v1/jobs
		 * @return {void} 
		 */
		CreateJob(requestBody: CreateJobPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation lists your jobs sorted by CreatedAt in descending order.
		 * Get v1/jobs
		 * @param {string} dataSetId The unique identifier for a data set.
		 * @param {number} maxResults The maximum number of results returned by a single call.
		 * @param {string} nextToken The token value retrieved from a previous call to access the next page of results.
		 * @param {string} revisionId The unique identifier for a revision.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListJobsResponse} Success
		 */
		ListJobs(dataSetId: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, revisionId: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListJobsResponse> {
			return this.http.get<ListJobsResponse>(this.baseUri + 'v1/jobs?dataSetId=' + (dataSetId == null ? '' : encodeURIComponent(dataSetId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&revisionId=' + (revisionId == null ? '' : encodeURIComponent(revisionId)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * This operation creates a revision for a data set.
		 * Post v1/data-sets/{DataSetId}/revisions
		 * @param {string} DataSetId The unique identifier for a data set.
		 * @return {void} 
		 */
		CreateRevision(DataSetId: string, requestBody: CreateRevisionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)) + '/revisions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation lists a data set's revisions sorted by CreatedAt in descending order.
		 * Get v1/data-sets/{DataSetId}/revisions
		 * @param {string} DataSetId The unique identifier for a data set.
		 * @param {number} maxResults The maximum number of results returned by a single call.
		 * @param {string} nextToken The token value retrieved from a previous call to access the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDataSetRevisionsResponse} Success
		 */
		ListDataSetRevisions(DataSetId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListDataSetRevisionsResponse> {
			return this.http.get<ListDataSetRevisionsResponse>(this.baseUri + 'v1/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)) + '/revisions&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * This operation deletes an asset.
		 * Delete v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}
		 * @param {string} AssetId The unique identifier for an asset.
		 * @param {string} DataSetId The unique identifier for a data set.
		 * @param {string} RevisionId The unique identifier for a revision.
		 * @return {void} 
		 */
		DeleteAsset(AssetId: string, DataSetId: string, RevisionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)) + '/revisions/' + (RevisionId == null ? '' : encodeURIComponent(RevisionId)) + '/assets/' + (AssetId == null ? '' : encodeURIComponent(AssetId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation returns information about an asset.
		 * Get v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}
		 * @param {string} AssetId The unique identifier for an asset.
		 * @param {string} DataSetId The unique identifier for a data set.
		 * @param {string} RevisionId The unique identifier for a revision.
		 * @return {GetAssetResponse} Success
		 */
		GetAsset(AssetId: string, DataSetId: string, RevisionId: string): Observable<GetAssetResponse> {
			return this.http.get<GetAssetResponse>(this.baseUri + 'v1/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)) + '/revisions/' + (RevisionId == null ? '' : encodeURIComponent(RevisionId)) + '/assets/' + (AssetId == null ? '' : encodeURIComponent(AssetId)), {});
		}

		/**
		 * This operation updates an asset.
		 * Patch v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}
		 * @param {string} AssetId The unique identifier for an asset.
		 * @param {string} DataSetId The unique identifier for a data set.
		 * @param {string} RevisionId The unique identifier for a revision.
		 * @return {UpdateAssetResponse} Success
		 */
		UpdateAsset(AssetId: string, DataSetId: string, RevisionId: string, requestBody: UpdateAssetPatchBody): Observable<UpdateAssetResponse> {
			return this.http.patch<UpdateAssetResponse>(this.baseUri + 'v1/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)) + '/revisions/' + (RevisionId == null ? '' : encodeURIComponent(RevisionId)) + '/assets/' + (AssetId == null ? '' : encodeURIComponent(AssetId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation deletes a data set.
		 * Delete v1/data-sets/{DataSetId}
		 * @param {string} DataSetId The unique identifier for a data set.
		 * @return {void} 
		 */
		DeleteDataSet(DataSetId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation returns information about a data set.
		 * Get v1/data-sets/{DataSetId}
		 * @param {string} DataSetId The unique identifier for a data set.
		 * @return {GetDataSetResponse} Success
		 */
		GetDataSet(DataSetId: string): Observable<GetDataSetResponse> {
			return this.http.get<GetDataSetResponse>(this.baseUri + 'v1/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)), {});
		}

		/**
		 * This operation updates a data set.
		 * Patch v1/data-sets/{DataSetId}
		 * @param {string} DataSetId The unique identifier for a data set.
		 * @return {UpdateDataSetResponse} Success
		 */
		UpdateDataSet(DataSetId: string, requestBody: UpdateDataSetPatchBody): Observable<UpdateDataSetResponse> {
			return this.http.patch<UpdateDataSetResponse>(this.baseUri + 'v1/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation deletes a revision.
		 * Delete v1/data-sets/{DataSetId}/revisions/{RevisionId}
		 * @param {string} DataSetId The unique identifier for a data set.
		 * @param {string} RevisionId The unique identifier for a revision.
		 * @return {void} 
		 */
		DeleteRevision(DataSetId: string, RevisionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)) + '/revisions/' + (RevisionId == null ? '' : encodeURIComponent(RevisionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation returns information about a revision.
		 * Get v1/data-sets/{DataSetId}/revisions/{RevisionId}
		 * @param {string} DataSetId The unique identifier for a data set.
		 * @param {string} RevisionId The unique identifier for a revision.
		 * @return {GetRevisionResponse} Success
		 */
		GetRevision(DataSetId: string, RevisionId: string): Observable<GetRevisionResponse> {
			return this.http.get<GetRevisionResponse>(this.baseUri + 'v1/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)) + '/revisions/' + (RevisionId == null ? '' : encodeURIComponent(RevisionId)), {});
		}

		/**
		 * This operation updates a revision.
		 * Patch v1/data-sets/{DataSetId}/revisions/{RevisionId}
		 * @param {string} DataSetId The unique identifier for a data set.
		 * @param {string} RevisionId The unique identifier for a revision.
		 * @return {UpdateRevisionResponse} Success
		 */
		UpdateRevision(DataSetId: string, RevisionId: string, requestBody: UpdateRevisionPatchBody): Observable<UpdateRevisionResponse> {
			return this.http.patch<UpdateRevisionResponse>(this.baseUri + 'v1/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)) + '/revisions/' + (RevisionId == null ? '' : encodeURIComponent(RevisionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation lists a revision's assets sorted alphabetically in descending order.
		 * Get v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets
		 * @param {string} DataSetId The unique identifier for a data set.
		 * @param {number} maxResults The maximum number of results returned by a single call.
		 * @param {string} nextToken The token value retrieved from a previous call to access the next page of results.
		 * @param {string} RevisionId The unique identifier for a revision.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRevisionAssetsResponse} Success
		 */
		ListRevisionAssets(DataSetId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, RevisionId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListRevisionAssetsResponse> {
			return this.http.get<ListRevisionAssetsResponse>(this.baseUri + 'v1/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)) + '/revisions/' + (RevisionId == null ? '' : encodeURIComponent(RevisionId)) + '/assets&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * This operation lists the tags on the resource.
		 * Get tags/{resource_arn}
		 * @param {string} resource_arn An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resource_arn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), {});
		}

		/**
		 * This operation tags a resource.
		 * Post tags/{resource_arn}
		 * @param {string} resource_arn An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.
		 * @return {void} 
		 */
		TagResource(resource_arn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation removes one or more tags from a resource.
		 * Delete tags/{resource_arn}#tagKeys
		 * @param {string} resource_arn An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.
		 * @param {Array<string>} tagKeys The key tags.
		 * @return {void} 
		 */
		UntagResource(resource_arn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateDataSetPostBody {

		/**
		 * The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT.
		 * Required
		 */
		AssetType: CreateDataSetResponseAssetType;

		/**
		 * A description of a resource.
		 * Required
		 */
		Description: string;

		/**
		 * The name of the model.
		 * Required
		 */
		Name: string;

		/** A data set tag is an optional label that you can assign to a data set when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions. */
		Tags?: {[id: string]: string };
	}
	export interface CreateDataSetPostBodyFormProperties {

		/**
		 * The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT.
		 * Required
		 */
		AssetType: FormControl<CreateDataSetResponseAssetType | null | undefined>,

		/**
		 * A description of a resource.
		 * Required
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The name of the model.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/** A data set tag is an optional label that you can assign to a data set when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateDataSetPostBodyFormGroup() {
		return new FormGroup<CreateDataSetPostBodyFormProperties>({
			AssetType: new FormControl<CreateDataSetResponseAssetType | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateJobPostBody {

		/**
		 * The details for the request.
		 * Required
		 */
		Details: CreateJobPostBodyDetails;

		/**
		 * The type of job to be created.
		 * Required
		 */
		Type: CreateJobResponseType;
	}
	export interface CreateJobPostBodyFormProperties {

		/**
		 * The type of job to be created.
		 * Required
		 */
		Type: FormControl<CreateJobResponseType | null | undefined>,
	}
	export function CreateCreateJobPostBodyFormGroup() {
		return new FormGroup<CreateJobPostBodyFormProperties>({
			Type: new FormControl<CreateJobResponseType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateJobPostBodyDetails {

		/** Details of the operation to be performed by the job. */
		ExportAssetToSignedUrl?: ExportAssetToSignedUrlRequestDetails;

		/** Details of the operation to be performed by the job. */
		ExportAssetsToS3?: ExportAssetsToS3RequestDetails;

		/** Details of the operation to be performed by the job. */
		ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlRequestDetails;

		/** Details of the operation to be performed by the job. */
		ImportAssetsFromS3?: ImportAssetsFromS3RequestDetails;
	}
	export interface CreateJobPostBodyDetailsFormProperties {
	}
	export function CreateCreateJobPostBodyDetailsFormGroup() {
		return new FormGroup<CreateJobPostBodyDetailsFormProperties>({
		});

	}

	export interface CreateRevisionPostBody {

		/**
		 * An optional comment about the revision.
		 * Max length: 16384
		 * Min length: 0
		 */
		Comment?: string | null;

		/** A revision tag is an optional label that you can assign to a revision when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions. */
		Tags?: {[id: string]: string };
	}
	export interface CreateRevisionPostBodyFormProperties {

		/**
		 * An optional comment about the revision.
		 * Max length: 16384
		 * Min length: 0
		 */
		Comment: FormControl<string | null | undefined>,

		/** A revision tag is an optional label that you can assign to a revision when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateRevisionPostBodyFormGroup() {
		return new FormGroup<CreateRevisionPostBodyFormProperties>({
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(16384), Validators.minLength(0)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateAssetPatchBody {

		/**
		 * The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key.
		 * Required
		 */
		Name: string;
	}
	export interface UpdateAssetPatchBodyFormProperties {

		/**
		 * The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssetPatchBodyFormGroup() {
		return new FormGroup<UpdateAssetPatchBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDataSetPatchBody {

		/** A description of a resource. */
		Description?: string | null;

		/** The name of the model. */
		Name?: string | null;
	}
	export interface UpdateDataSetPatchBodyFormProperties {

		/** A description of a resource. */
		Description: FormControl<string | null | undefined>,

		/** The name of the model. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataSetPatchBodyFormGroup() {
		return new FormGroup<UpdateDataSetPatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRevisionPatchBody {

		/**
		 * An optional comment about the revision.
		 * Max length: 16384
		 * Min length: 0
		 */
		Comment?: string | null;

		/** Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. */
		Finalized?: boolean | null;
	}
	export interface UpdateRevisionPatchBodyFormProperties {

		/**
		 * An optional comment about the revision.
		 * Max length: 16384
		 * Min length: 0
		 */
		Comment: FormControl<string | null | undefined>,

		/** Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. */
		Finalized: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateRevisionPatchBodyFormGroup() {
		return new FormGroup<UpdateRevisionPatchBodyFormProperties>({
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(16384), Validators.minLength(0)]),
			Finalized: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * A label that consists of a customer-defined key and an optional value.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * A label that consists of a customer-defined key and an optional value.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

}

