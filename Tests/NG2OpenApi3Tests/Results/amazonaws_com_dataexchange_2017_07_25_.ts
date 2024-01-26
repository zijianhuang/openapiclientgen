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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface CreateDataSetResponse {
		Arn?: string;
		AssetType?: AssetType;
		CreatedAt?: Date;
		Description?: string;
		Id?: string;
		Name?: string;
		Origin?: Origin;
		OriginDetails?: OriginDetails;
		SourceId?: string;
		Tags?: MapOf__string;
		UpdatedAt?: Date;
	}
	export interface CreateDataSetResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		AssetType: FormControl<AssetType | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Origin: FormControl<Origin | null | undefined>,
		SourceId: FormControl<string | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateCreateDataSetResponseFormGroup() {
		return new FormGroup<CreateDataSetResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			AssetType: new FormControl<AssetType | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Origin: new FormControl<Origin | null | undefined>(undefined),
			SourceId: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AssetType { S3_SNAPSHOT = 0, REDSHIFT_DATA_SHARE = 1, API_GATEWAY_API = 2, S3_DATA_ACCESS = 3, LAKE_FORMATION_DATA_PERMISSION = 4 }

	export enum Origin { OWNED = 0, ENTITLED = 1 }


	/** Details about the origin of the data set. */
	export interface OriginDetails {

		/** Required */
		ProductId: string;
	}

	/** Details about the origin of the data set. */
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

	export interface CreateEventActionResponse {
		Action?: Action;
		Arn?: string;
		CreatedAt?: Date;
		Event?: Event;
		Id?: string;
		UpdatedAt?: Date;
	}
	export interface CreateEventActionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		Id: FormControl<string | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateCreateEventActionResponseFormGroup() {
		return new FormGroup<CreateEventActionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** What occurs after a certain event. */
	export interface Action {
		ExportRevisionToS3?: AutoExportRevisionToS3RequestDetails;
	}

	/** What occurs after a certain event. */
	export interface ActionFormProperties {
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
		});

	}


	/** Details of the operation to be performed by the job. */
	export interface AutoExportRevisionToS3RequestDetails {
		Encryption?: ExportServerSideEncryption;

		/** Required */
		RevisionDestination: AutoExportRevisionDestinationEntry;
	}

	/** Details of the operation to be performed by the job. */
	export interface AutoExportRevisionToS3RequestDetailsFormProperties {
	}
	export function CreateAutoExportRevisionToS3RequestDetailsFormGroup() {
		return new FormGroup<AutoExportRevisionToS3RequestDetailsFormProperties>({
		});

	}


	/** Encryption configuration of the export job. Includes the encryption type in addition to the AWS KMS key. The KMS key is only necessary if you chose the KMS encryption type. */
	export interface ExportServerSideEncryption {
		KmsKeyArn?: string;

		/** Required */
		Type: ServerSideEncryptionTypes;
	}

	/** Encryption configuration of the export job. Includes the encryption type in addition to the AWS KMS key. The KMS key is only necessary if you chose the KMS encryption type. */
	export interface ExportServerSideEncryptionFormProperties {
		KmsKeyArn: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<ServerSideEncryptionTypes | null | undefined>,
	}
	export function CreateExportServerSideEncryptionFormGroup() {
		return new FormGroup<ExportServerSideEncryptionFormProperties>({
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ServerSideEncryptionTypes | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ServerSideEncryptionTypes { 'aws:kms' = 0, AES256 = 1 }


	/** A revision destination is the Amazon S3 bucket folder destination to where the export will be sent. */
	export interface AutoExportRevisionDestinationEntry {

		/** Required */
		Bucket: string;
		KeyPattern?: string;
	}

	/** A revision destination is the Amazon S3 bucket folder destination to where the export will be sent. */
	export interface AutoExportRevisionDestinationEntryFormProperties {

		/** Required */
		Bucket: FormControl<string | null | undefined>,
		KeyPattern: FormControl<string | null | undefined>,
	}
	export function CreateAutoExportRevisionDestinationEntryFormGroup() {
		return new FormGroup<AutoExportRevisionDestinationEntryFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyPattern: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** What occurs to start an action. */
	export interface Event {
		RevisionPublished?: RevisionPublished;
	}

	/** What occurs to start an action. */
	export interface EventFormProperties {
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
		});

	}


	/** Information about the published revision. */
	export interface RevisionPublished {

		/** Required */
		DataSetId: string;
	}

	/** Information about the published revision. */
	export interface RevisionPublishedFormProperties {

		/** Required */
		DataSetId: FormControl<string | null | undefined>,
	}
	export function CreateRevisionPublishedFormGroup() {
		return new FormGroup<RevisionPublishedFormProperties>({
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateJobResponse {
		Arn?: string;
		CreatedAt?: Date;
		Details?: ResponseDetails;
		Errors?: Array<JobError>;
		Id?: string;
		State?: State;
		Type?: Type;
		UpdatedAt?: Date;
	}
	export interface CreateJobResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		Id: FormControl<string | null | undefined>,
		State: FormControl<State | null | undefined>,
		Type: FormControl<Type | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateCreateJobResponseFormGroup() {
		return new FormGroup<CreateJobResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<State | null | undefined>(undefined),
			Type: new FormControl<Type | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Details for the response. */
	export interface ResponseDetails {
		ExportAssetToSignedUrl?: ExportAssetToSignedUrlResponseDetails;
		ExportAssetsToS3?: ExportAssetsToS3ResponseDetails;
		ExportRevisionsToS3?: ExportRevisionsToS3ResponseDetails;
		ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlResponseDetails;
		ImportAssetsFromS3?: ImportAssetsFromS3ResponseDetails;
		ImportAssetsFromRedshiftDataShares?: ImportAssetsFromRedshiftDataSharesResponseDetails;
		ImportAssetFromApiGatewayApi?: ImportAssetFromApiGatewayApiResponseDetails;
		CreateS3DataAccessFromS3Bucket?: CreateS3DataAccessFromS3BucketResponseDetails;
		ImportAssetsFromLakeFormationTagPolicy?: ImportAssetsFromLakeFormationTagPolicyResponseDetails;
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

		/** Required */
		AssetId: string;

		/** Required */
		DataSetId: string;

		/** Required */
		RevisionId: string;
		SignedUrl?: string;
		SignedUrlExpiresAt?: Date;
	}

	/** The details of the export to signed URL response. */
	export interface ExportAssetToSignedUrlResponseDetailsFormProperties {

		/** Required */
		AssetId: FormControl<string | null | undefined>,

		/** Required */
		DataSetId: FormControl<string | null | undefined>,

		/** Required */
		RevisionId: FormControl<string | null | undefined>,
		SignedUrl: FormControl<string | null | undefined>,
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

		/** Required */
		AssetDestinations: Array<AssetDestinationEntry>;

		/** Required */
		DataSetId: string;
		Encryption?: ExportServerSideEncryption;

		/** Required */
		RevisionId: string;
	}

	/** Details about the export to Amazon S3 response. */
	export interface ExportAssetsToS3ResponseDetailsFormProperties {

		/** Required */
		DataSetId: FormControl<string | null | undefined>,

		/** Required */
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

		/** Required */
		AssetId: string;

		/** Required */
		Bucket: string;
		Key?: string;
	}

	/** The destination for the asset. */
	export interface AssetDestinationEntryFormProperties {

		/** Required */
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


	/** Details about the export revisions to Amazon S3 response. */
	export interface ExportRevisionsToS3ResponseDetails {

		/** Required */
		DataSetId: string;
		Encryption?: ExportServerSideEncryption;

		/** Required */
		RevisionDestinations: Array<RevisionDestinationEntry>;
		EventActionArn?: string;
	}

	/** Details about the export revisions to Amazon S3 response. */
	export interface ExportRevisionsToS3ResponseDetailsFormProperties {

		/** Required */
		DataSetId: FormControl<string | null | undefined>,
		EventActionArn: FormControl<string | null | undefined>,
	}
	export function CreateExportRevisionsToS3ResponseDetailsFormGroup() {
		return new FormGroup<ExportRevisionsToS3ResponseDetailsFormProperties>({
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventActionArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The destination where the assets in the revision will be exported. */
	export interface RevisionDestinationEntry {

		/** Required */
		Bucket: string;
		KeyPattern?: string;

		/** Required */
		RevisionId: string;
	}

	/** The destination where the assets in the revision will be exported. */
	export interface RevisionDestinationEntryFormProperties {

		/** Required */
		Bucket: FormControl<string | null | undefined>,
		KeyPattern: FormControl<string | null | undefined>,

		/** Required */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateRevisionDestinationEntryFormGroup() {
		return new FormGroup<RevisionDestinationEntryFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyPattern: new FormControl<string | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The details in the response for an import request, including the signed URL and other information. */
	export interface ImportAssetFromSignedUrlResponseDetails {

		/** Required */
		AssetName: string;

		/** Required */
		DataSetId: string;
		Md5Hash?: string;

		/** Required */
		RevisionId: string;
		SignedUrl?: string;
		SignedUrlExpiresAt?: Date;
	}

	/** The details in the response for an import request, including the signed URL and other information. */
	export interface ImportAssetFromSignedUrlResponseDetailsFormProperties {

		/** Required */
		AssetName: FormControl<string | null | undefined>,

		/** Required */
		DataSetId: FormControl<string | null | undefined>,
		Md5Hash: FormControl<string | null | undefined>,

		/** Required */
		RevisionId: FormControl<string | null | undefined>,
		SignedUrl: FormControl<string | null | undefined>,
		SignedUrlExpiresAt: FormControl<Date | null | undefined>,
	}
	export function CreateImportAssetFromSignedUrlResponseDetailsFormGroup() {
		return new FormGroup<ImportAssetFromSignedUrlResponseDetailsFormProperties>({
			AssetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Md5Hash: new FormControl<string | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SignedUrl: new FormControl<string | null | undefined>(undefined),
			SignedUrlExpiresAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Details from an import from Amazon S3 response. */
	export interface ImportAssetsFromS3ResponseDetails {

		/** Required */
		AssetSources: Array<AssetSourceEntry>;

		/** Required */
		DataSetId: string;

		/** Required */
		RevisionId: string;
	}

	/** Details from an import from Amazon S3 response. */
	export interface ImportAssetsFromS3ResponseDetailsFormProperties {

		/** Required */
		DataSetId: FormControl<string | null | undefined>,

		/** Required */
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


	/** Details from an import from Amazon Redshift datashare response. */
	export interface ImportAssetsFromRedshiftDataSharesResponseDetails {

		/** Required */
		AssetSources: Array<RedshiftDataShareAssetSourceEntry>;

		/** Required */
		DataSetId: string;

		/** Required */
		RevisionId: string;
	}

	/** Details from an import from Amazon Redshift datashare response. */
	export interface ImportAssetsFromRedshiftDataSharesResponseDetailsFormProperties {

		/** Required */
		DataSetId: FormControl<string | null | undefined>,

		/** Required */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateImportAssetsFromRedshiftDataSharesResponseDetailsFormGroup() {
		return new FormGroup<ImportAssetsFromRedshiftDataSharesResponseDetailsFormProperties>({
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RevisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The source of the Amazon Redshift datashare asset. */
	export interface RedshiftDataShareAssetSourceEntry {

		/** Required */
		DataShareArn: string;
	}

	/** The source of the Amazon Redshift datashare asset. */
	export interface RedshiftDataShareAssetSourceEntryFormProperties {

		/** Required */
		DataShareArn: FormControl<string | null | undefined>,
	}
	export function CreateRedshiftDataShareAssetSourceEntryFormGroup() {
		return new FormGroup<RedshiftDataShareAssetSourceEntryFormProperties>({
			DataShareArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response details. */
	export interface ImportAssetFromApiGatewayApiResponseDetails {
		ApiDescription?: string;

		/** Required */
		ApiId: string;
		ApiKey?: string;

		/** Required */
		ApiName: string;

		/** Required */
		ApiSpecificationMd5Hash: string;

		/** Required */
		ApiSpecificationUploadUrl: string;

		/** Required */
		ApiSpecificationUploadUrlExpiresAt: Date;

		/** Required */
		DataSetId: string;

		/** Required */
		ProtocolType: ProtocolType;

		/** Required */
		RevisionId: string;

		/** Required */
		Stage: string;
	}

	/** The response details. */
	export interface ImportAssetFromApiGatewayApiResponseDetailsFormProperties {
		ApiDescription: FormControl<string | null | undefined>,

		/** Required */
		ApiId: FormControl<string | null | undefined>,
		ApiKey: FormControl<string | null | undefined>,

		/** Required */
		ApiName: FormControl<string | null | undefined>,

		/** Required */
		ApiSpecificationMd5Hash: FormControl<string | null | undefined>,

		/** Required */
		ApiSpecificationUploadUrl: FormControl<string | null | undefined>,

		/** Required */
		ApiSpecificationUploadUrlExpiresAt: FormControl<Date | null | undefined>,

		/** Required */
		DataSetId: FormControl<string | null | undefined>,

		/** Required */
		ProtocolType: FormControl<ProtocolType | null | undefined>,

		/** Required */
		RevisionId: FormControl<string | null | undefined>,

		/** Required */
		Stage: FormControl<string | null | undefined>,
	}
	export function CreateImportAssetFromApiGatewayApiResponseDetailsFormGroup() {
		return new FormGroup<ImportAssetFromApiGatewayApiResponseDetailsFormProperties>({
			ApiDescription: new FormControl<string | null | undefined>(undefined),
			ApiId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApiKey: new FormControl<string | null | undefined>(undefined),
			ApiName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApiSpecificationMd5Hash: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApiSpecificationUploadUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApiSpecificationUploadUrlExpiresAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProtocolType: new FormControl<ProtocolType | null | undefined>(undefined, [Validators.required]),
			RevisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Stage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ProtocolType { REST = 0 }


	/** Details about the response of the operation to create an S3 data access from an S3 bucket. */
	export interface CreateS3DataAccessFromS3BucketResponseDetails {

		/** Required */
		AssetSource: S3DataAccessAssetSourceEntry;

		/** Required */
		DataSetId: string;

		/** Required */
		RevisionId: string;
	}

	/** Details about the response of the operation to create an S3 data access from an S3 bucket. */
	export interface CreateS3DataAccessFromS3BucketResponseDetailsFormProperties {

		/** Required */
		DataSetId: FormControl<string | null | undefined>,

		/** Required */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateS3DataAccessFromS3BucketResponseDetailsFormGroup() {
		return new FormGroup<CreateS3DataAccessFromS3BucketResponseDetailsFormProperties>({
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RevisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Source details for an Amazon S3 data access asset. */
	export interface S3DataAccessAssetSourceEntry {

		/** Required */
		Bucket: string;
		KeyPrefixes?: Array<string>;
		Keys?: Array<string>;
		KmsKeysToGrant?: Array<KmsKeyToGrant>;
	}

	/** Source details for an Amazon S3 data access asset. */
	export interface S3DataAccessAssetSourceEntryFormProperties {

		/** Required */
		Bucket: FormControl<string | null | undefined>,
	}
	export function CreateS3DataAccessAssetSourceEntryFormGroup() {
		return new FormGroup<S3DataAccessAssetSourceEntryFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the shared S3 objects. */
	export interface KmsKeyToGrant {

		/** Required */
		KmsKeyArn: string;
	}

	/** The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the shared S3 objects. */
	export interface KmsKeyToGrantFormProperties {

		/** Required */
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateKmsKeyToGrantFormGroup() {
		return new FormGroup<KmsKeyToGrantFormProperties>({
			KmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details from an import AWS Lake Formation tag policy job response. */
	export interface ImportAssetsFromLakeFormationTagPolicyResponseDetails {

		/** Required */
		CatalogId: string;
		Database?: DatabaseLFTagPolicyAndPermissions;
		Table?: TableLFTagPolicyAndPermissions;

		/** Required */
		RoleArn: string;

		/** Required */
		DataSetId: string;

		/** Required */
		RevisionId: string;
	}

	/** Details from an import AWS Lake Formation tag policy job response. */
	export interface ImportAssetsFromLakeFormationTagPolicyResponseDetailsFormProperties {

		/** Required */
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		DataSetId: FormControl<string | null | undefined>,

		/** Required */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateImportAssetsFromLakeFormationTagPolicyResponseDetailsFormGroup() {
		return new FormGroup<ImportAssetsFromLakeFormationTagPolicyResponseDetailsFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RevisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The LF-tag policy and permissions for database resources. */
	export interface DatabaseLFTagPolicyAndPermissions {

		/** Required */
		Expression: Array<LFTag>;

		/** Required */
		Permissions: Array<DatabaseLFTagPolicyPermission>;
	}

	/** The LF-tag policy and permissions for database resources. */
	export interface DatabaseLFTagPolicyAndPermissionsFormProperties {
	}
	export function CreateDatabaseLFTagPolicyAndPermissionsFormGroup() {
		return new FormGroup<DatabaseLFTagPolicyAndPermissionsFormProperties>({
		});

	}


	/** A structure that allows an LF-admin to grant permissions on certain conditions. */
	export interface LFTag {

		/** Required */
		TagKey: string;

		/** Required */
		TagValues: Array<string>;
	}

	/** A structure that allows an LF-admin to grant permissions on certain conditions. */
	export interface LFTagFormProperties {

		/** Required */
		TagKey: FormControl<string | null | undefined>,
	}
	export function CreateLFTagFormGroup() {
		return new FormGroup<LFTagFormProperties>({
			TagKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DatabaseLFTagPolicyPermission { DESCRIBE = 0 }


	/** The LF-tag policy and permissions that apply to table resources. */
	export interface TableLFTagPolicyAndPermissions {

		/** Required */
		Expression: Array<LFTag>;

		/** Required */
		Permissions: Array<TableTagPolicyLFPermission>;
	}

	/** The LF-tag policy and permissions that apply to table resources. */
	export interface TableLFTagPolicyAndPermissionsFormProperties {
	}
	export function CreateTableLFTagPolicyAndPermissionsFormGroup() {
		return new FormGroup<TableLFTagPolicyAndPermissionsFormProperties>({
		});

	}

	export enum TableTagPolicyLFPermission { DESCRIBE = 0, SELECT = 1 }


	/** An error that occurred with the job request. */
	export interface JobError {

		/** Required */
		Code: Code;
		Details?: Details;
		LimitName?: JobErrorLimitName;
		LimitValue?: number | null;

		/** Required */
		Message: string;
		ResourceId?: string;
		ResourceType?: JobErrorResourceTypes;
	}

	/** An error that occurred with the job request. */
	export interface JobErrorFormProperties {

		/** Required */
		Code: FormControl<Code | null | undefined>,
		LimitName: FormControl<JobErrorLimitName | null | undefined>,
		LimitValue: FormControl<number | null | undefined>,

		/** Required */
		Message: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ResourceType: FormControl<JobErrorResourceTypes | null | undefined>,
	}
	export function CreateJobErrorFormGroup() {
		return new FormGroup<JobErrorFormProperties>({
			Code: new FormControl<Code | null | undefined>(undefined, [Validators.required]),
			LimitName: new FormControl<JobErrorLimitName | null | undefined>(undefined),
			LimitValue: new FormControl<number | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<JobErrorResourceTypes | null | undefined>(undefined),
		});

	}

	export enum Code { ACCESS_DENIED_EXCEPTION = 0, INTERNAL_SERVER_EXCEPTION = 1, MALWARE_DETECTED = 2, RESOURCE_NOT_FOUND_EXCEPTION = 3, SERVICE_QUOTA_EXCEEDED_EXCEPTION = 4, VALIDATION_EXCEPTION = 5, MALWARE_SCAN_ENCRYPTED_FILE = 6 }


	/** Information about the job error. */
	export interface Details {
		ImportAssetFromSignedUrlJobErrorDetails?: ImportAssetFromSignedUrlJobErrorDetails;
		ImportAssetsFromS3JobErrorDetails?: Array<AssetSourceEntry>;
	}

	/** Information about the job error. */
	export interface DetailsFormProperties {
	}
	export function CreateDetailsFormGroup() {
		return new FormGroup<DetailsFormProperties>({
		});

	}


	/** Details about the job error. */
	export interface ImportAssetFromSignedUrlJobErrorDetails {

		/** Required */
		AssetName: string;
	}

	/** Details about the job error. */
	export interface ImportAssetFromSignedUrlJobErrorDetailsFormProperties {

		/** Required */
		AssetName: FormControl<string | null | undefined>,
	}
	export function CreateImportAssetFromSignedUrlJobErrorDetailsFormGroup() {
		return new FormGroup<ImportAssetFromSignedUrlJobErrorDetailsFormProperties>({
			AssetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JobErrorLimitName { 'Assets per revision' = 0, 'Asset size in GB' = 1, 'Amazon Redshift datashare assets per revision' = 2, 'AWS Lake Formation data permission assets per revision' = 3, 'Amazon S3 data access assets per revision' = 4 }

	export enum JobErrorResourceTypes { REVISION = 0, ASSET = 1, DATA_SET = 2 }

	export enum State { WAITING = 0, IN_PROGRESS = 1, ERROR = 2, COMPLETED = 3, CANCELLED = 4, TIMED_OUT = 5 }

	export enum Type { IMPORT_ASSETS_FROM_S3 = 0, IMPORT_ASSET_FROM_SIGNED_URL = 1, EXPORT_ASSETS_TO_S3 = 2, EXPORT_ASSET_TO_SIGNED_URL = 3, EXPORT_REVISIONS_TO_S3 = 4, IMPORT_ASSETS_FROM_REDSHIFT_DATA_SHARES = 5, IMPORT_ASSET_FROM_API_GATEWAY_API = 6, CREATE_S3_DATA_ACCESS_FROM_S3_BUCKET = 7, IMPORT_ASSETS_FROM_LAKE_FORMATION_TAG_POLICY = 8 }


	/** Details of the operation to be performed by the job. */
	export interface ExportAssetToSignedUrlRequestDetails {

		/** Required */
		AssetId: string;

		/** Required */
		DataSetId: string;

		/** Required */
		RevisionId: string;
	}

	/** Details of the operation to be performed by the job. */
	export interface ExportAssetToSignedUrlRequestDetailsFormProperties {

		/** Required */
		AssetId: FormControl<string | null | undefined>,

		/** Required */
		DataSetId: FormControl<string | null | undefined>,

		/** Required */
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

		/** Required */
		AssetDestinations: Array<AssetDestinationEntry>;

		/** Required */
		DataSetId: string;
		Encryption?: ExportServerSideEncryption;

		/** Required */
		RevisionId: string;
	}

	/** Details of the operation to be performed by the job. */
	export interface ExportAssetsToS3RequestDetailsFormProperties {

		/** Required */
		DataSetId: FormControl<string | null | undefined>,

		/** Required */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateExportAssetsToS3RequestDetailsFormGroup() {
		return new FormGroup<ExportAssetsToS3RequestDetailsFormProperties>({
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RevisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details of the operation to be performed by the job. */
	export interface ExportRevisionsToS3RequestDetails {

		/** Required */
		DataSetId: string;
		Encryption?: ExportServerSideEncryption;

		/** Required */
		RevisionDestinations: Array<RevisionDestinationEntry>;
	}

	/** Details of the operation to be performed by the job. */
	export interface ExportRevisionsToS3RequestDetailsFormProperties {

		/** Required */
		DataSetId: FormControl<string | null | undefined>,
	}
	export function CreateExportRevisionsToS3RequestDetailsFormGroup() {
		return new FormGroup<ExportRevisionsToS3RequestDetailsFormProperties>({
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details of the operation to be performed by the job. */
	export interface ImportAssetFromSignedUrlRequestDetails {

		/** Required */
		AssetName: string;

		/** Required */
		DataSetId: string;

		/** Required */
		Md5Hash: string;

		/** Required */
		RevisionId: string;
	}

	/** Details of the operation to be performed by the job. */
	export interface ImportAssetFromSignedUrlRequestDetailsFormProperties {

		/** Required */
		AssetName: FormControl<string | null | undefined>,

		/** Required */
		DataSetId: FormControl<string | null | undefined>,

		/** Required */
		Md5Hash: FormControl<string | null | undefined>,

		/** Required */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateImportAssetFromSignedUrlRequestDetailsFormGroup() {
		return new FormGroup<ImportAssetFromSignedUrlRequestDetailsFormProperties>({
			AssetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Md5Hash: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RevisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details of the operation to be performed by the job. */
	export interface ImportAssetsFromS3RequestDetails {

		/** Required */
		AssetSources: Array<AssetSourceEntry>;

		/** Required */
		DataSetId: string;

		/** Required */
		RevisionId: string;
	}

	/** Details of the operation to be performed by the job. */
	export interface ImportAssetsFromS3RequestDetailsFormProperties {

		/** Required */
		DataSetId: FormControl<string | null | undefined>,

		/** Required */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateImportAssetsFromS3RequestDetailsFormGroup() {
		return new FormGroup<ImportAssetsFromS3RequestDetailsFormProperties>({
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RevisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details from an import from Amazon Redshift datashare request. */
	export interface ImportAssetsFromRedshiftDataSharesRequestDetails {

		/** Required */
		AssetSources: Array<RedshiftDataShareAssetSourceEntry>;

		/** Required */
		DataSetId: string;

		/** Required */
		RevisionId: string;
	}

	/** Details from an import from Amazon Redshift datashare request. */
	export interface ImportAssetsFromRedshiftDataSharesRequestDetailsFormProperties {

		/** Required */
		DataSetId: FormControl<string | null | undefined>,

		/** Required */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateImportAssetsFromRedshiftDataSharesRequestDetailsFormGroup() {
		return new FormGroup<ImportAssetsFromRedshiftDataSharesRequestDetailsFormProperties>({
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RevisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The request details. */
	export interface ImportAssetFromApiGatewayApiRequestDetails {
		ApiDescription?: string;

		/** Required */
		ApiId: string;
		ApiKey?: string;

		/** Required */
		ApiName: string;

		/** Required */
		ApiSpecificationMd5Hash: string;

		/** Required */
		DataSetId: string;

		/** Required */
		ProtocolType: ProtocolType;

		/** Required */
		RevisionId: string;

		/** Required */
		Stage: string;
	}

	/** The request details. */
	export interface ImportAssetFromApiGatewayApiRequestDetailsFormProperties {
		ApiDescription: FormControl<string | null | undefined>,

		/** Required */
		ApiId: FormControl<string | null | undefined>,
		ApiKey: FormControl<string | null | undefined>,

		/** Required */
		ApiName: FormControl<string | null | undefined>,

		/** Required */
		ApiSpecificationMd5Hash: FormControl<string | null | undefined>,

		/** Required */
		DataSetId: FormControl<string | null | undefined>,

		/** Required */
		ProtocolType: FormControl<ProtocolType | null | undefined>,

		/** Required */
		RevisionId: FormControl<string | null | undefined>,

		/** Required */
		Stage: FormControl<string | null | undefined>,
	}
	export function CreateImportAssetFromApiGatewayApiRequestDetailsFormGroup() {
		return new FormGroup<ImportAssetFromApiGatewayApiRequestDetailsFormProperties>({
			ApiDescription: new FormControl<string | null | undefined>(undefined),
			ApiId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApiKey: new FormControl<string | null | undefined>(undefined),
			ApiName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApiSpecificationMd5Hash: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProtocolType: new FormControl<ProtocolType | null | undefined>(undefined, [Validators.required]),
			RevisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Stage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details of the operation to create an Amazon S3 data access from an S3 bucket. */
	export interface CreateS3DataAccessFromS3BucketRequestDetails {

		/** Required */
		AssetSource: S3DataAccessAssetSourceEntry;

		/** Required */
		DataSetId: string;

		/** Required */
		RevisionId: string;
	}

	/** Details of the operation to create an Amazon S3 data access from an S3 bucket. */
	export interface CreateS3DataAccessFromS3BucketRequestDetailsFormProperties {

		/** Required */
		DataSetId: FormControl<string | null | undefined>,

		/** Required */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateS3DataAccessFromS3BucketRequestDetailsFormGroup() {
		return new FormGroup<CreateS3DataAccessFromS3BucketRequestDetailsFormProperties>({
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RevisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details about the assets imported from an AWS Lake Formation tag policy request. */
	export interface ImportAssetsFromLakeFormationTagPolicyRequestDetails {

		/** Required */
		CatalogId: string;
		Database?: DatabaseLFTagPolicyAndPermissions;
		Table?: TableLFTagPolicyAndPermissions;

		/** Required */
		RoleArn: string;

		/** Required */
		DataSetId: string;

		/** Required */
		RevisionId: string;
	}

	/** Details about the assets imported from an AWS Lake Formation tag policy request. */
	export interface ImportAssetsFromLakeFormationTagPolicyRequestDetailsFormProperties {

		/** Required */
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		DataSetId: FormControl<string | null | undefined>,

		/** Required */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateImportAssetsFromLakeFormationTagPolicyRequestDetailsFormGroup() {
		return new FormGroup<ImportAssetsFromLakeFormationTagPolicyRequestDetailsFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RevisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRevisionResponse {
		Arn?: string;
		Comment?: string;
		CreatedAt?: Date;
		DataSetId?: string;
		Finalized?: boolean | null;
		Id?: string;
		SourceId?: string;
		Tags?: MapOf__string;
		UpdatedAt?: Date;
		RevocationComment?: string;
		Revoked?: boolean | null;
		RevokedAt?: Date;
	}
	export interface CreateRevisionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Comment: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		DataSetId: FormControl<string | null | undefined>,
		Finalized: FormControl<boolean | null | undefined>,
		Id: FormControl<string | null | undefined>,
		SourceId: FormControl<string | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		RevocationComment: FormControl<string | null | undefined>,
		Revoked: FormControl<boolean | null | undefined>,
		RevokedAt: FormControl<Date | null | undefined>,
	}
	export function CreateCreateRevisionResponseFormGroup() {
		return new FormGroup<CreateRevisionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DataSetId: new FormControl<string | null | undefined>(undefined),
			Finalized: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			SourceId: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			RevocationComment: new FormControl<string | null | undefined>(undefined),
			Revoked: new FormControl<boolean | null | undefined>(undefined),
			RevokedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetAssetResponse {
		Arn?: string;
		AssetDetails?: AssetDetails;
		AssetType?: AssetType;
		CreatedAt?: Date;
		DataSetId?: string;
		Id?: string;
		Name?: string;
		RevisionId?: string;
		SourceId?: string;
		UpdatedAt?: Date;
	}
	export interface GetAssetResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		AssetType: FormControl<AssetType | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		DataSetId: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
		SourceId: FormControl<string | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetAssetResponseFormGroup() {
		return new FormGroup<GetAssetResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			AssetType: new FormControl<AssetType | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DataSetId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined),
			SourceId: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Details about the asset. */
	export interface AssetDetails {
		S3SnapshotAsset?: S3SnapshotAsset;
		RedshiftDataShareAsset?: RedshiftDataShareAsset;
		ApiGatewayApiAsset?: ApiGatewayApiAsset;
		S3DataAccessAsset?: S3DataAccessAsset;
		LakeFormationDataPermissionAsset?: LakeFormationDataPermissionAsset;
	}

	/** Details about the asset. */
	export interface AssetDetailsFormProperties {
	}
	export function CreateAssetDetailsFormGroup() {
		return new FormGroup<AssetDetailsFormProperties>({
		});

	}


	/** The Amazon S3 object that is the asset. */
	export interface S3SnapshotAsset {

		/** Required */
		Size: number;
	}

	/** The Amazon S3 object that is the asset. */
	export interface S3SnapshotAssetFormProperties {

		/** Required */
		Size: FormControl<number | null | undefined>,
	}
	export function CreateS3SnapshotAssetFormGroup() {
		return new FormGroup<S3SnapshotAssetFormProperties>({
			Size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Amazon Redshift datashare asset. */
	export interface RedshiftDataShareAsset {

		/** Required */
		Arn: string;
	}

	/** The Amazon Redshift datashare asset. */
	export interface RedshiftDataShareAssetFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateRedshiftDataShareAssetFormGroup() {
		return new FormGroup<RedshiftDataShareAssetFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The API Gateway API that is the asset. */
	export interface ApiGatewayApiAsset {
		ApiDescription?: string;
		ApiEndpoint?: string;
		ApiId?: string;
		ApiKey?: string;
		ApiName?: string;
		ApiSpecificationDownloadUrl?: string;
		ApiSpecificationDownloadUrlExpiresAt?: Date;
		ProtocolType?: ProtocolType;
		Stage?: string;
	}

	/** The API Gateway API that is the asset. */
	export interface ApiGatewayApiAssetFormProperties {
		ApiDescription: FormControl<string | null | undefined>,
		ApiEndpoint: FormControl<string | null | undefined>,
		ApiId: FormControl<string | null | undefined>,
		ApiKey: FormControl<string | null | undefined>,
		ApiName: FormControl<string | null | undefined>,
		ApiSpecificationDownloadUrl: FormControl<string | null | undefined>,
		ApiSpecificationDownloadUrlExpiresAt: FormControl<Date | null | undefined>,
		ProtocolType: FormControl<ProtocolType | null | undefined>,
		Stage: FormControl<string | null | undefined>,
	}
	export function CreateApiGatewayApiAssetFormGroup() {
		return new FormGroup<ApiGatewayApiAssetFormProperties>({
			ApiDescription: new FormControl<string | null | undefined>(undefined),
			ApiEndpoint: new FormControl<string | null | undefined>(undefined),
			ApiId: new FormControl<string | null | undefined>(undefined),
			ApiKey: new FormControl<string | null | undefined>(undefined),
			ApiName: new FormControl<string | null | undefined>(undefined),
			ApiSpecificationDownloadUrl: new FormControl<string | null | undefined>(undefined),
			ApiSpecificationDownloadUrlExpiresAt: new FormControl<Date | null | undefined>(undefined),
			ProtocolType: new FormControl<ProtocolType | null | undefined>(undefined),
			Stage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Amazon S3 data access that is the asset. */
	export interface S3DataAccessAsset {

		/** Required */
		Bucket: string;
		KeyPrefixes?: Array<string>;
		Keys?: Array<string>;
		S3AccessPointAlias?: string;
		S3AccessPointArn?: string;
		KmsKeysToGrant?: Array<KmsKeyToGrant>;
	}

	/** The Amazon S3 data access that is the asset. */
	export interface S3DataAccessAssetFormProperties {

		/** Required */
		Bucket: FormControl<string | null | undefined>,
		S3AccessPointAlias: FormControl<string | null | undefined>,
		S3AccessPointArn: FormControl<string | null | undefined>,
	}
	export function CreateS3DataAccessAssetFormGroup() {
		return new FormGroup<S3DataAccessAssetFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3AccessPointAlias: new FormControl<string | null | undefined>(undefined),
			S3AccessPointArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The AWS Lake Formation data permission asset. */
	export interface LakeFormationDataPermissionAsset {

		/** Required */
		LakeFormationDataPermissionDetails: LakeFormationDataPermissionDetails;

		/** Required */
		LakeFormationDataPermissionType: LakeFormationDataPermissionType;

		/** Required */
		Permissions: Array<LFPermission>;
		RoleArn?: string;
	}

	/** The AWS Lake Formation data permission asset. */
	export interface LakeFormationDataPermissionAssetFormProperties {

		/** Required */
		LakeFormationDataPermissionType: FormControl<LakeFormationDataPermissionType | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateLakeFormationDataPermissionAssetFormGroup() {
		return new FormGroup<LakeFormationDataPermissionAssetFormProperties>({
			LakeFormationDataPermissionType: new FormControl<LakeFormationDataPermissionType | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the AWS Lake Formation data permission. */
	export interface LakeFormationDataPermissionDetails {
		LFTagPolicy?: LFTagPolicyDetails;
	}

	/** Details about the AWS Lake Formation data permission. */
	export interface LakeFormationDataPermissionDetailsFormProperties {
	}
	export function CreateLakeFormationDataPermissionDetailsFormGroup() {
		return new FormGroup<LakeFormationDataPermissionDetailsFormProperties>({
		});

	}


	/** Details about the LF-tag policy. */
	export interface LFTagPolicyDetails {

		/** Required */
		CatalogId: string;

		/** Required */
		ResourceType: LFResourceType;

		/** Required */
		ResourceDetails: LFResourceDetails;
	}

	/** Details about the LF-tag policy. */
	export interface LFTagPolicyDetailsFormProperties {

		/** Required */
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<LFResourceType | null | undefined>,
	}
	export function CreateLFTagPolicyDetailsFormGroup() {
		return new FormGroup<LFTagPolicyDetailsFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceType: new FormControl<LFResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LFResourceType { TABLE = 0, DATABASE = 1 }


	/** Details about the AWS Lake Formation resource (Table or Database) included in the AWS Lake Formation data permission. */
	export interface LFResourceDetails {
		Database?: DatabaseLFTagPolicy;
		Table?: TableLFTagPolicy;
	}

	/** Details about the AWS Lake Formation resource (Table or Database) included in the AWS Lake Formation data permission. */
	export interface LFResourceDetailsFormProperties {
	}
	export function CreateLFResourceDetailsFormGroup() {
		return new FormGroup<LFResourceDetailsFormProperties>({
		});

	}


	/** The LF-tag policy for database resources. */
	export interface DatabaseLFTagPolicy {

		/** Required */
		Expression: Array<LFTag>;
	}

	/** The LF-tag policy for database resources. */
	export interface DatabaseLFTagPolicyFormProperties {
	}
	export function CreateDatabaseLFTagPolicyFormGroup() {
		return new FormGroup<DatabaseLFTagPolicyFormProperties>({
		});

	}


	/** The LF-tag policy for a table resource. */
	export interface TableLFTagPolicy {

		/** Required */
		Expression: Array<LFTag>;
	}

	/** The LF-tag policy for a table resource. */
	export interface TableLFTagPolicyFormProperties {
	}
	export function CreateTableLFTagPolicyFormGroup() {
		return new FormGroup<TableLFTagPolicyFormProperties>({
		});

	}

	export enum LakeFormationDataPermissionType { LFTagPolicy = 0 }

	export enum LFPermission { DESCRIBE = 0, SELECT = 1 }

	export interface GetDataSetResponse {
		Arn?: string;
		AssetType?: AssetType;
		CreatedAt?: Date;
		Description?: string;
		Id?: string;
		Name?: string;
		Origin?: Origin;
		OriginDetails?: OriginDetails;
		SourceId?: string;
		Tags?: MapOf__string;
		UpdatedAt?: Date;
	}
	export interface GetDataSetResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		AssetType: FormControl<AssetType | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Origin: FormControl<Origin | null | undefined>,
		SourceId: FormControl<string | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetDataSetResponseFormGroup() {
		return new FormGroup<GetDataSetResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			AssetType: new FormControl<AssetType | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Origin: new FormControl<Origin | null | undefined>(undefined),
			SourceId: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetEventActionResponse {
		Action?: Action;
		Arn?: string;
		CreatedAt?: Date;
		Event?: Event;
		Id?: string;
		UpdatedAt?: Date;
	}
	export interface GetEventActionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		Id: FormControl<string | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetEventActionResponseFormGroup() {
		return new FormGroup<GetEventActionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetJobResponse {
		Arn?: string;
		CreatedAt?: Date;
		Details?: ResponseDetails;
		Errors?: Array<JobError>;
		Id?: string;
		State?: State;
		Type?: Type;
		UpdatedAt?: Date;
	}
	export interface GetJobResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		Id: FormControl<string | null | undefined>,
		State: FormControl<State | null | undefined>,
		Type: FormControl<Type | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetJobResponseFormGroup() {
		return new FormGroup<GetJobResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<State | null | undefined>(undefined),
			Type: new FormControl<Type | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetRevisionResponse {
		Arn?: string;
		Comment?: string;
		CreatedAt?: Date;
		DataSetId?: string;
		Finalized?: boolean | null;
		Id?: string;
		SourceId?: string;
		Tags?: MapOf__string;
		UpdatedAt?: Date;
		RevocationComment?: string;
		Revoked?: boolean | null;
		RevokedAt?: Date;
	}
	export interface GetRevisionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Comment: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		DataSetId: FormControl<string | null | undefined>,
		Finalized: FormControl<boolean | null | undefined>,
		Id: FormControl<string | null | undefined>,
		SourceId: FormControl<string | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		RevocationComment: FormControl<string | null | undefined>,
		Revoked: FormControl<boolean | null | undefined>,
		RevokedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetRevisionResponseFormGroup() {
		return new FormGroup<GetRevisionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DataSetId: new FormControl<string | null | undefined>(undefined),
			Finalized: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			SourceId: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			RevocationComment: new FormControl<string | null | undefined>(undefined),
			Revoked: new FormControl<boolean | null | undefined>(undefined),
			RevokedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDataSetRevisionsResponse {
		NextToken?: string;
		Revisions?: Array<RevisionEntry>;
	}
	export interface ListDataSetRevisionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataSetRevisionsResponseFormGroup() {
		return new FormGroup<ListDataSetRevisionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A revision is a container for one or more assets. */
	export interface RevisionEntry {

		/** Required */
		Arn: string;
		Comment?: string;

		/** Required */
		CreatedAt: Date;

		/** Required */
		DataSetId: string;
		Finalized?: boolean | null;

		/** Required */
		Id: string;
		SourceId?: string;

		/** Required */
		UpdatedAt: Date;
		RevocationComment?: string;
		Revoked?: boolean | null;
		RevokedAt?: Date;
	}

	/** A revision is a container for one or more assets. */
	export interface RevisionEntryFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		Comment: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		DataSetId: FormControl<string | null | undefined>,
		Finalized: FormControl<boolean | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
		SourceId: FormControl<string | null | undefined>,

		/** Required */
		UpdatedAt: FormControl<Date | null | undefined>,
		RevocationComment: FormControl<string | null | undefined>,
		Revoked: FormControl<boolean | null | undefined>,
		RevokedAt: FormControl<Date | null | undefined>,
	}
	export function CreateRevisionEntryFormGroup() {
		return new FormGroup<RevisionEntryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Comment: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Finalized: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceId: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			RevocationComment: new FormControl<string | null | undefined>(undefined),
			Revoked: new FormControl<boolean | null | undefined>(undefined),
			RevokedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDataSetsResponse {
		DataSets?: Array<DataSetEntry>;
		NextToken?: string;
	}
	export interface ListDataSetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataSetsResponseFormGroup() {
		return new FormGroup<ListDataSetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A data set is an AWS resource with one or more revisions. */
	export interface DataSetEntry {

		/** Required */
		Arn: string;

		/** Required */
		AssetType: AssetType;

		/** Required */
		CreatedAt: Date;

		/** Required */
		Description: string;

		/** Required */
		Id: string;

		/** Required */
		Name: string;

		/** Required */
		Origin: Origin;
		OriginDetails?: OriginDetails;
		SourceId?: string;

		/** Required */
		UpdatedAt: Date;
	}

	/** A data set is an AWS resource with one or more revisions. */
	export interface DataSetEntryFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		AssetType: FormControl<AssetType | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Origin: FormControl<Origin | null | undefined>,
		SourceId: FormControl<string | null | undefined>,

		/** Required */
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDataSetEntryFormGroup() {
		return new FormGroup<DataSetEntryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AssetType: new FormControl<AssetType | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Origin: new FormControl<Origin | null | undefined>(undefined, [Validators.required]),
			SourceId: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListEventActionsResponse {
		EventActions?: Array<EventActionEntry>;
		NextToken?: string;
	}
	export interface ListEventActionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEventActionsResponseFormGroup() {
		return new FormGroup<ListEventActionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event action is an object that defines the relationship between a specific event and an automated action that will be taken on behalf of the customer. */
	export interface EventActionEntry {

		/** Required */
		Action: Action;

		/** Required */
		Arn: string;

		/** Required */
		CreatedAt: Date;

		/** Required */
		Event: Event;

		/** Required */
		Id: string;

		/** Required */
		UpdatedAt: Date;
	}

	/** An event action is an object that defines the relationship between a specific event and an automated action that will be taken on behalf of the customer. */
	export interface EventActionEntryFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateEventActionEntryFormGroup() {
		return new FormGroup<EventActionEntryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListJobsResponse {
		Jobs?: Array<JobEntry>;
		NextToken?: string;
	}
	export interface ListJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResponseFormGroup() {
		return new FormGroup<ListJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AWS Data Exchange Jobs are asynchronous import or export operations used to create or copy assets. A data set owner can both import and export as they see fit. Someone with an entitlement to a data set can only export. Jobs are deleted 90 days after they are created. */
	export interface JobEntry {

		/** Required */
		Arn: string;

		/** Required */
		CreatedAt: Date;

		/** Required */
		Details: ResponseDetails;
		Errors?: Array<JobError>;

		/** Required */
		Id: string;

		/** Required */
		State: State;

		/** Required */
		Type: Type;

		/** Required */
		UpdatedAt: Date;
	}

	/** AWS Data Exchange Jobs are asynchronous import or export operations used to create or copy assets. A data set owner can both import and export as they see fit. Someone with an entitlement to a data set can only export. Jobs are deleted 90 days after they are created. */
	export interface JobEntryFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		State: FormControl<State | null | undefined>,

		/** Required */
		Type: FormControl<Type | null | undefined>,

		/** Required */
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateJobEntryFormGroup() {
		return new FormGroup<JobEntryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			State: new FormControl<State | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<Type | null | undefined>(undefined, [Validators.required]),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListRevisionAssetsResponse {
		Assets?: Array<AssetEntry>;
		NextToken?: string;
	}
	export interface ListRevisionAssetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRevisionAssetsResponseFormGroup() {
		return new FormGroup<ListRevisionAssetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An asset in AWS Data Exchange is a piece of data (Amazon S3 object) or a means of fulfilling data (Amazon Redshift datashare or Amazon API Gateway API, AWS Lake Formation data permission, or Amazon S3 data access). The asset can be a structured data file, an image file, or some other data file that can be stored as an Amazon S3 object, an Amazon API Gateway API, or an Amazon Redshift datashare, an AWS Lake Formation data permission, or an Amazon S3 data access. When you create an import job for your files, API Gateway APIs, Amazon Redshift datashares, AWS Lake Formation data permission, or Amazon S3 data access, you create an asset in AWS Data Exchange. */
	export interface AssetEntry {

		/** Required */
		Arn: string;

		/** Required */
		AssetDetails: AssetDetails;

		/** Required */
		AssetType: AssetType;

		/** Required */
		CreatedAt: Date;

		/** Required */
		DataSetId: string;

		/** Required */
		Id: string;

		/** Required */
		Name: string;

		/** Required */
		RevisionId: string;
		SourceId?: string;

		/** Required */
		UpdatedAt: Date;
	}

	/** An asset in AWS Data Exchange is a piece of data (Amazon S3 object) or a means of fulfilling data (Amazon Redshift datashare or Amazon API Gateway API, AWS Lake Formation data permission, or Amazon S3 data access). The asset can be a structured data file, an image file, or some other data file that can be stored as an Amazon S3 object, an Amazon API Gateway API, or an Amazon Redshift datashare, an AWS Lake Formation data permission, or an Amazon S3 data access. When you create an import job for your files, API Gateway APIs, Amazon Redshift datashares, AWS Lake Formation data permission, or Amazon S3 data access, you create an asset in AWS Data Exchange. */
	export interface AssetEntryFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		AssetType: FormControl<AssetType | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		DataSetId: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RevisionId: FormControl<string | null | undefined>,
		SourceId: FormControl<string | null | undefined>,

		/** Required */
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateAssetEntryFormGroup() {
		return new FormGroup<AssetEntryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AssetType: new FormControl<AssetType | null | undefined>(undefined, [Validators.required]),
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

	export interface RevokeRevisionResponse {
		Arn?: string;
		Comment?: string;
		CreatedAt?: Date;
		DataSetId?: string;
		Finalized?: boolean | null;
		Id?: string;
		SourceId?: string;
		UpdatedAt?: Date;
		RevocationComment?: string;
		Revoked?: boolean | null;
		RevokedAt?: Date;
	}
	export interface RevokeRevisionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Comment: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		DataSetId: FormControl<string | null | undefined>,
		Finalized: FormControl<boolean | null | undefined>,
		Id: FormControl<string | null | undefined>,
		SourceId: FormControl<string | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		RevocationComment: FormControl<string | null | undefined>,
		Revoked: FormControl<boolean | null | undefined>,
		RevokedAt: FormControl<Date | null | undefined>,
	}
	export function CreateRevokeRevisionResponseFormGroup() {
		return new FormGroup<RevokeRevisionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DataSetId: new FormControl<string | null | undefined>(undefined),
			Finalized: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			SourceId: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			RevocationComment: new FormControl<string | null | undefined>(undefined),
			Revoked: new FormControl<boolean | null | undefined>(undefined),
			RevokedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface SendApiAssetResponse {
		Body?: string;
		ResponseHeaders?: MapOf__string;
	}
	export interface SendApiAssetResponseFormProperties {
		Body: FormControl<string | null | undefined>,
	}
	export function CreateSendApiAssetResponseFormGroup() {
		return new FormGroup<SendApiAssetResponseFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined),
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
		Arn?: string;
		AssetDetails?: AssetDetails;
		AssetType?: AssetType;
		CreatedAt?: Date;
		DataSetId?: string;
		Id?: string;
		Name?: string;
		RevisionId?: string;
		SourceId?: string;
		UpdatedAt?: Date;
	}
	export interface UpdateAssetResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		AssetType: FormControl<AssetType | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		DataSetId: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
		SourceId: FormControl<string | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateAssetResponseFormGroup() {
		return new FormGroup<UpdateAssetResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			AssetType: new FormControl<AssetType | null | undefined>(undefined),
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
		Arn?: string;
		AssetType?: AssetType;
		CreatedAt?: Date;
		Description?: string;
		Id?: string;
		Name?: string;
		Origin?: Origin;
		OriginDetails?: OriginDetails;
		SourceId?: string;
		UpdatedAt?: Date;
	}
	export interface UpdateDataSetResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		AssetType: FormControl<AssetType | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Origin: FormControl<Origin | null | undefined>,
		SourceId: FormControl<string | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateDataSetResponseFormGroup() {
		return new FormGroup<UpdateDataSetResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			AssetType: new FormControl<AssetType | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Origin: new FormControl<Origin | null | undefined>(undefined),
			SourceId: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateEventActionResponse {
		Action?: Action;
		Arn?: string;
		CreatedAt?: Date;
		Event?: Event;
		Id?: string;
		UpdatedAt?: Date;
	}
	export interface UpdateEventActionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		Id: FormControl<string | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateEventActionResponseFormGroup() {
		return new FormGroup<UpdateEventActionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateRevisionResponse {
		Arn?: string;
		Comment?: string;
		CreatedAt?: Date;
		DataSetId?: string;
		Finalized?: boolean | null;
		Id?: string;
		SourceId?: string;
		UpdatedAt?: Date;
		RevocationComment?: string;
		Revoked?: boolean | null;
		RevokedAt?: Date;
	}
	export interface UpdateRevisionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Comment: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		DataSetId: FormControl<string | null | undefined>,
		Finalized: FormControl<boolean | null | undefined>,
		Id: FormControl<string | null | undefined>,
		SourceId: FormControl<string | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		RevocationComment: FormControl<string | null | undefined>,
		Revoked: FormControl<boolean | null | undefined>,
		RevokedAt: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateRevisionResponseFormGroup() {
		return new FormGroup<UpdateRevisionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DataSetId: new FormControl<string | null | undefined>(undefined),
			Finalized: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			SourceId: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			RevocationComment: new FormControl<string | null | undefined>(undefined),
			Revoked: new FormControl<boolean | null | undefined>(undefined),
			RevokedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CancelJobRequest {
	}
	export interface CancelJobRequestFormProperties {
	}
	export function CreateCancelJobRequestFormGroup() {
		return new FormGroup<CancelJobRequestFormProperties>({
		});

	}

	export interface CreateDataSetRequest {

		/** Required */
		AssetType: AssetType;

		/** Required */
		Description: string;

		/** Required */
		Name: string;
		Tags?: MapOf__string;
	}
	export interface CreateDataSetRequestFormProperties {

		/** Required */
		AssetType: FormControl<AssetType | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSetRequestFormGroup() {
		return new FormGroup<CreateDataSetRequestFormProperties>({
			AssetType: new FormControl<AssetType | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateEventActionRequest {

		/** Required */
		Action: Action;

		/** Required */
		Event: Event;
	}
	export interface CreateEventActionRequestFormProperties {
	}
	export function CreateCreateEventActionRequestFormGroup() {
		return new FormGroup<CreateEventActionRequestFormProperties>({
		});

	}


	/** The details for the request. */
	export interface RequestDetails {
		ExportAssetToSignedUrl?: ExportAssetToSignedUrlRequestDetails;
		ExportAssetsToS3?: ExportAssetsToS3RequestDetails;
		ExportRevisionsToS3?: ExportRevisionsToS3RequestDetails;
		ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlRequestDetails;
		ImportAssetsFromS3?: ImportAssetsFromS3RequestDetails;
		ImportAssetsFromRedshiftDataShares?: ImportAssetsFromRedshiftDataSharesRequestDetails;
		ImportAssetFromApiGatewayApi?: ImportAssetFromApiGatewayApiRequestDetails;
		CreateS3DataAccessFromS3Bucket?: CreateS3DataAccessFromS3BucketRequestDetails;
		ImportAssetsFromLakeFormationTagPolicy?: ImportAssetsFromLakeFormationTagPolicyRequestDetails;
	}

	/** The details for the request. */
	export interface RequestDetailsFormProperties {
	}
	export function CreateRequestDetailsFormGroup() {
		return new FormGroup<RequestDetailsFormProperties>({
		});

	}

	export interface CreateJobRequest {

		/** Required */
		Details: RequestDetails;

		/** Required */
		Type: Type;
	}
	export interface CreateJobRequestFormProperties {

		/** Required */
		Type: FormControl<Type | null | undefined>,
	}
	export function CreateCreateJobRequestFormGroup() {
		return new FormGroup<CreateJobRequestFormProperties>({
			Type: new FormControl<Type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRevisionRequest {
		Comment?: string;
		Tags?: MapOf__string;
	}
	export interface CreateRevisionRequestFormProperties {
		Comment: FormControl<string | null | undefined>,
	}
	export function CreateCreateRevisionRequestFormGroup() {
		return new FormGroup<CreateRevisionRequestFormProperties>({
			Comment: new FormControl<string | null | undefined>(undefined),
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

	export interface DeleteEventActionRequest {
	}
	export interface DeleteEventActionRequestFormProperties {
	}
	export function CreateDeleteEventActionRequestFormGroup() {
		return new FormGroup<DeleteEventActionRequestFormProperties>({
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

	export interface GetEventActionRequest {
	}
	export interface GetEventActionRequestFormProperties {
	}
	export function CreateGetEventActionRequestFormGroup() {
		return new FormGroup<GetEventActionRequestFormProperties>({
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

	export interface ListEventActionsRequest {
	}
	export interface ListEventActionsRequestFormProperties {
	}
	export function CreateListEventActionsRequestFormGroup() {
		return new FormGroup<ListEventActionsRequestFormProperties>({
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

	export interface RevokeRevisionRequest {

		/** Required */
		RevocationComment: string;
	}
	export interface RevokeRevisionRequestFormProperties {

		/** Required */
		RevocationComment: FormControl<string | null | undefined>,
	}
	export function CreateRevokeRevisionRequestFormGroup() {
		return new FormGroup<RevokeRevisionRequestFormProperties>({
			RevocationComment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SendApiAssetRequest {
		Body?: string;
		RequestHeaders?: MapOf__string;
	}
	export interface SendApiAssetRequestFormProperties {
		Body: FormControl<string | null | undefined>,
	}
	export function CreateSendApiAssetRequestFormGroup() {
		return new FormGroup<SendApiAssetRequestFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined),
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

	export interface TagResourceRequest {

		/** Required */
		Tags: MapOf__string;
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

	export interface UpdateAssetRequest {

		/** Required */
		Name: string;
	}
	export interface UpdateAssetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssetRequestFormGroup() {
		return new FormGroup<UpdateAssetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDataSetRequest {
		Description?: string;
		Name?: string;
	}
	export interface UpdateDataSetRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataSetRequestFormGroup() {
		return new FormGroup<UpdateDataSetRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEventActionRequest {
		Action?: Action;
	}
	export interface UpdateEventActionRequestFormProperties {
	}
	export function CreateUpdateEventActionRequestFormGroup() {
		return new FormGroup<UpdateEventActionRequestFormProperties>({
		});

	}

	export interface UpdateRevisionRequest {
		Comment?: string;
		Finalized?: boolean | null;
	}
	export interface UpdateRevisionRequestFormProperties {
		Comment: FormControl<string | null | undefined>,
		Finalized: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateRevisionRequestFormGroup() {
		return new FormGroup<UpdateRevisionRequestFormProperties>({
			Comment: new FormControl<string | null | undefined>(undefined),
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
		 * This operation creates an event action.
		 * Post v1/event-actions
		 * @return {void} 
		 */
		CreateEventAction(requestBody: CreateEventActionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/event-actions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation lists your event actions.
		 * Get v1/event-actions
		 * @param {string} eventSourceId The unique identifier for the event source.
		 * @param {number} maxResults The maximum number of results returned by a single call.
		 * @param {string} nextToken The token value retrieved from a previous call to access the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEventActionsResponse} Success
		 */
		ListEventActions(eventSourceId: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListEventActionsResponse> {
			return this.http.get<ListEventActionsResponse>(this.baseUri + 'v1/event-actions?eventSourceId=' + (eventSourceId == null ? '' : encodeURIComponent(eventSourceId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
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
		 * This operation deletes the event action.
		 * Delete v1/event-actions/{EventActionId}
		 * @param {string} EventActionId The unique identifier for the event action.
		 * @return {void} 
		 */
		DeleteEventAction(EventActionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/event-actions/' + (EventActionId == null ? '' : encodeURIComponent(EventActionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation retrieves information about an event action.
		 * Get v1/event-actions/{EventActionId}
		 * @param {string} EventActionId The unique identifier for the event action.
		 * @return {GetEventActionResponse} Success
		 */
		GetEventAction(EventActionId: string): Observable<GetEventActionResponse> {
			return this.http.get<GetEventActionResponse>(this.baseUri + 'v1/event-actions/' + (EventActionId == null ? '' : encodeURIComponent(EventActionId)), {});
		}

		/**
		 * This operation updates the event action.
		 * Patch v1/event-actions/{EventActionId}
		 * @param {string} EventActionId The unique identifier for the event action.
		 * @return {UpdateEventActionResponse} Success
		 */
		UpdateEventAction(EventActionId: string, requestBody: UpdateEventActionPatchBody): Observable<UpdateEventActionResponse> {
			return this.http.patch<UpdateEventActionResponse>(this.baseUri + 'v1/event-actions/' + (EventActionId == null ? '' : encodeURIComponent(EventActionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * This operation tags a resource.
		 * Post tags/{ResourceArn}
		 * @param {string} ResourceArn An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.
		 * @return {void} 
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation revokes subscribers' access to a revision.
		 * Post v1/data-sets/{DataSetId}/revisions/{RevisionId}/revoke
		 * @param {string} DataSetId The unique identifier for a data set.
		 * @param {string} RevisionId The unique identifier for a revision.
		 * @return {RevokeRevisionResponse} Success
		 */
		RevokeRevision(DataSetId: string, RevisionId: string, requestBody: RevokeRevisionPostBody): Observable<RevokeRevisionResponse> {
			return this.http.post<RevokeRevisionResponse>(this.baseUri + 'v1/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)) + '/revisions/' + (RevisionId == null ? '' : encodeURIComponent(RevisionId)) + '/revoke', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation invokes an API Gateway API asset. The request is proxied to the provider’s API Gateway API.
		 * Post v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id
		 * @param {{[id: string]: string }} QueryStringParameters Attach query string parameters to the end of the URI (for example, /v1/examplePath?exampleParam=exampleValue).
		 * @return {SendApiAssetResponse} Success
		 */
		SendApiAsset(QueryStringParameters: {[id: string]: string } | null | undefined, requestBody: SendApiAssetPostBody): Observable<SendApiAssetResponse> {
			return this.http.post<SendApiAssetResponse>(this.baseUri + 'v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id?QueryStringParameters=' + QueryStringParameters, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation removes one or more tags from a resource.
		 * Delete tags/{ResourceArn}#tagKeys
		 * @param {string} ResourceArn An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.
		 * @param {Array<string>} tagKeys The key tags.
		 * @return {void} 
		 */
		UntagResource(ResourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateDataSetPostBody {

		/**
		 * The type of asset that is added to a data set.
		 * Required
		 */
		AssetType: AssetType;

		/**
		 * A description for the data set. This value can be up to 16,348 characters long.
		 * Required
		 */
		Description: string;

		/**
		 * The name of the data set.
		 * Required
		 */
		Name: string;

		/** A data set tag is an optional label that you can assign to a data set when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions. */
		Tags?: {[id: string]: string };
	}
	export interface CreateDataSetPostBodyFormProperties {

		/**
		 * The type of asset that is added to a data set.
		 * Required
		 */
		AssetType: FormControl<AssetType | null | undefined>,

		/**
		 * A description for the data set. This value can be up to 16,348 characters long.
		 * Required
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The name of the data set.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/** A data set tag is an optional label that you can assign to a data set when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateDataSetPostBodyFormGroup() {
		return new FormGroup<CreateDataSetPostBodyFormProperties>({
			AssetType: new FormControl<AssetType | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateEventActionPostBody {

		/**
		 * What occurs after a certain event.
		 * Required
		 */
		Action: CreateEventActionPostBodyAction;

		/**
		 * What occurs to start an action.
		 * Required
		 */
		Event: CreateEventActionPostBodyEvent;
	}
	export interface CreateEventActionPostBodyFormProperties {
	}
	export function CreateCreateEventActionPostBodyFormGroup() {
		return new FormGroup<CreateEventActionPostBodyFormProperties>({
		});

	}

	export interface CreateEventActionPostBodyAction {
		ExportRevisionToS3?: AutoExportRevisionToS3RequestDetails;
	}
	export interface CreateEventActionPostBodyActionFormProperties {
	}
	export function CreateCreateEventActionPostBodyActionFormGroup() {
		return new FormGroup<CreateEventActionPostBodyActionFormProperties>({
		});

	}

	export interface CreateEventActionPostBodyEvent {
		RevisionPublished?: RevisionPublished;
	}
	export interface CreateEventActionPostBodyEventFormProperties {
	}
	export function CreateCreateEventActionPostBodyEventFormGroup() {
		return new FormGroup<CreateEventActionPostBodyEventFormProperties>({
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
		Type: Type;
	}
	export interface CreateJobPostBodyFormProperties {

		/**
		 * The type of job to be created.
		 * Required
		 */
		Type: FormControl<Type | null | undefined>,
	}
	export function CreateCreateJobPostBodyFormGroup() {
		return new FormGroup<CreateJobPostBodyFormProperties>({
			Type: new FormControl<Type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateJobPostBodyDetails {
		ExportAssetToSignedUrl?: ExportAssetToSignedUrlRequestDetails;
		ExportAssetsToS3?: ExportAssetsToS3RequestDetails;
		ExportRevisionsToS3?: ExportRevisionsToS3RequestDetails;
		ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlRequestDetails;
		ImportAssetsFromS3?: ImportAssetsFromS3RequestDetails;
		ImportAssetsFromRedshiftDataShares?: ImportAssetsFromRedshiftDataSharesRequestDetails;
		ImportAssetFromApiGatewayApi?: ImportAssetFromApiGatewayApiRequestDetails;
		CreateS3DataAccessFromS3Bucket?: CreateS3DataAccessFromS3BucketRequestDetails;
		ImportAssetsFromLakeFormationTagPolicy?: ImportAssetsFromLakeFormationTagPolicyRequestDetails;
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
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(16384)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateAssetPatchBody {

		/**
		 * The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target Amazon S3 object key. When importing from Amazon API Gateway API, the API name is used as the asset name. When importing from Amazon Redshift, the datashare name is used as the asset name. When importing from AWS Lake Formation, the static values of "Database(s) included in the LF-tag policy" or "Table(s) included in LF-tag policy" are used as the name.
		 * Required
		 */
		Name: string;
	}
	export interface UpdateAssetPatchBodyFormProperties {

		/**
		 * The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target Amazon S3 object key. When importing from Amazon API Gateway API, the API name is used as the asset name. When importing from Amazon Redshift, the datashare name is used as the asset name. When importing from AWS Lake Formation, the static values of "Database(s) included in the LF-tag policy" or "Table(s) included in LF-tag policy" are used as the name.
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

		/** The description for the data set. */
		Description?: string | null;

		/** The name of the data set. */
		Name?: string | null;
	}
	export interface UpdateDataSetPatchBodyFormProperties {

		/** The description for the data set. */
		Description: FormControl<string | null | undefined>,

		/** The name of the data set. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataSetPatchBodyFormGroup() {
		return new FormGroup<UpdateDataSetPatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEventActionPatchBody {

		/** What occurs after a certain event. */
		Action?: UpdateEventActionPatchBodyAction;
	}
	export interface UpdateEventActionPatchBodyFormProperties {
	}
	export function CreateUpdateEventActionPatchBodyFormGroup() {
		return new FormGroup<UpdateEventActionPatchBodyFormProperties>({
		});

	}

	export interface UpdateEventActionPatchBodyAction {
		ExportRevisionToS3?: AutoExportRevisionToS3RequestDetails;
	}
	export interface UpdateEventActionPatchBodyActionFormProperties {
	}
	export function CreateUpdateEventActionPatchBodyActionFormGroup() {
		return new FormGroup<UpdateEventActionPatchBodyActionFormProperties>({
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
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(16384)]),
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

	export interface RevokeRevisionPostBody {

		/**
		 * A required comment to inform subscribers of the reason their access to the revision was revoked.
		 * Required
		 * Max length: 512
		 * Min length: 10
		 */
		RevocationComment: string;
	}
	export interface RevokeRevisionPostBodyFormProperties {

		/**
		 * A required comment to inform subscribers of the reason their access to the revision was revoked.
		 * Required
		 * Max length: 512
		 * Min length: 10
		 */
		RevocationComment: FormControl<string | null | undefined>,
	}
	export function CreateRevokeRevisionPostBodyFormGroup() {
		return new FormGroup<RevokeRevisionPostBodyFormProperties>({
			RevocationComment: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(512)]),
		});

	}

	export interface SendApiAssetPostBody {

		/** The request body. */
		Body?: string | null;

		/** Any header value prefixed with x-amzn-dataexchange-header- will have that stripped before sending the Asset API request. Use this when you want to override a header that AWS Data Exchange uses. Alternatively, you can use the header without a prefix to the HTTP request. */
		'x-amzn-dataexchange-header-'?: {[id: string]: string };
	}
	export interface SendApiAssetPostBodyFormProperties {

		/** The request body. */
		Body: FormControl<string | null | undefined>,

		/** Any header value prefixed with x-amzn-dataexchange-header- will have that stripped before sending the Asset API request. Use this when you want to override a header that AWS Data Exchange uses. Alternatively, you can use the header without a prefix to the HTTP request. */
		'x-amzn-dataexchange-header-': FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSendApiAssetPostBodyFormGroup() {
		return new FormGroup<SendApiAssetPostBodyFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined),
			'x-amzn-dataexchange-header-': new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

}

