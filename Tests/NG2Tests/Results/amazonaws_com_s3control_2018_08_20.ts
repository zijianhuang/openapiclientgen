import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateJobResult {

		/**
		 * Max length: 36
		 * Min length: 5
		 */
		JobId?: string | null;
	}
	export interface CreateJobResultFormProperties {

		/**
		 * Max length: 36
		 * Min length: 5
		 */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobResultFormGroup() {
		return new FormGroup<CreateJobResultFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9\-\_]+')]),
		});

	}


	/** Contains the configuration parameters for a <code>Lambda Invoke</code> operation. */
	export interface LambdaInvokeOperation {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		FunctionArn?: string | null;
	}

	/** Contains the configuration parameters for a <code>Lambda Invoke</code> operation. */
	export interface LambdaInvokeOperationFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		FunctionArn: FormControl<string | null | undefined>,
	}
	export function CreateLambdaInvokeOperationFormGroup() {
		return new FormGroup<LambdaInvokeOperationFormProperties>({
			FunctionArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?')]),
		});

	}


	/** Contains the configuration parameters for a PUT Copy object operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Copy object API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectCOPY.html">PUT Object - Copy</a>. */
	export interface S3CopyObjectOperation {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		TargetResource?: string | null;
		CannedAccessControlList?: S3CopyObjectOperationCannedAccessControlList | null;
		AccessControlGrants?: Array<S3Grant>;
		MetadataDirective?: S3CopyObjectOperationMetadataDirective | null;
		ModifiedSinceConstraint?: Date | null;

		/** <p/> */
		NewObjectMetadata?: S3ObjectMetadata;
		NewObjectTagging?: Array<S3Tag>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		RedirectLocation?: string | null;
		RequesterPays?: boolean | null;
		StorageClass?: S3CopyObjectOperationStorageClass | null;
		UnModifiedSinceConstraint?: Date | null;

		/**
		 * Max length: 2000
		 * Min length: 1
		 */
		SSEAwsKmsKeyId?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		TargetKeyPrefix?: string | null;
		ObjectLockLegalHoldStatus?: S3CopyObjectOperationObjectLockLegalHoldStatus | null;
		ObjectLockMode?: S3CopyObjectOperationObjectLockMode | null;
		ObjectLockRetainUntilDate?: Date | null;
	}

	/** Contains the configuration parameters for a PUT Copy object operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Copy object API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectCOPY.html">PUT Object - Copy</a>. */
	export interface S3CopyObjectOperationFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		TargetResource: FormControl<string | null | undefined>,
		CannedAccessControlList: FormControl<S3CopyObjectOperationCannedAccessControlList | null | undefined>,
		MetadataDirective: FormControl<S3CopyObjectOperationMetadataDirective | null | undefined>,
		ModifiedSinceConstraint: FormControl<Date | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		RedirectLocation: FormControl<string | null | undefined>,
		RequesterPays: FormControl<boolean | null | undefined>,
		StorageClass: FormControl<S3CopyObjectOperationStorageClass | null | undefined>,
		UnModifiedSinceConstraint: FormControl<Date | null | undefined>,

		/**
		 * Max length: 2000
		 * Min length: 1
		 */
		SSEAwsKmsKeyId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		TargetKeyPrefix: FormControl<string | null | undefined>,
		ObjectLockLegalHoldStatus: FormControl<S3CopyObjectOperationObjectLockLegalHoldStatus | null | undefined>,
		ObjectLockMode: FormControl<S3CopyObjectOperationObjectLockMode | null | undefined>,
		ObjectLockRetainUntilDate: FormControl<Date | null | undefined>,
	}
	export function CreateS3CopyObjectOperationFormGroup() {
		return new FormGroup<S3CopyObjectOperationFormProperties>({
			TargetResource: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('arn:[^:]+:s3:.*')]),
			CannedAccessControlList: new FormControl<S3CopyObjectOperationCannedAccessControlList | null | undefined>(undefined),
			MetadataDirective: new FormControl<S3CopyObjectOperationMetadataDirective | null | undefined>(undefined),
			ModifiedSinceConstraint: new FormControl<Date | null | undefined>(undefined),
			RedirectLocation: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			RequesterPays: new FormControl<boolean | null | undefined>(undefined),
			StorageClass: new FormControl<S3CopyObjectOperationStorageClass | null | undefined>(undefined),
			UnModifiedSinceConstraint: new FormControl<Date | null | undefined>(undefined),
			SSEAwsKmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000)]),
			TargetKeyPrefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			ObjectLockLegalHoldStatus: new FormControl<S3CopyObjectOperationObjectLockLegalHoldStatus | null | undefined>(undefined),
			ObjectLockMode: new FormControl<S3CopyObjectOperationObjectLockMode | null | undefined>(undefined),
			ObjectLockRetainUntilDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum S3CopyObjectOperationCannedAccessControlList { private = 0, 'public-read' = 1, 'public-read-write' = 2, 'aws-exec-read' = 3, 'authenticated-read' = 4, 'bucket-owner-read' = 5, 'bucket-owner-full-control' = 6 }


	/** <p/> */
	export interface S3Grant {

		/** <p/> */
		Grantee?: S3Grantee;
		Permission?: S3GrantPermission | null;
	}

	/** <p/> */
	export interface S3GrantFormProperties {
		Permission: FormControl<S3GrantPermission | null | undefined>,
	}
	export function CreateS3GrantFormGroup() {
		return new FormGroup<S3GrantFormProperties>({
			Permission: new FormControl<S3GrantPermission | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface S3Grantee {
		TypeIdentifier?: S3GranteeTypeIdentifier | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Identifier?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DisplayName?: string | null;
	}

	/** <p/> */
	export interface S3GranteeFormProperties {
		TypeIdentifier: FormControl<S3GranteeTypeIdentifier | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Identifier: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DisplayName: FormControl<string | null | undefined>,
	}
	export function CreateS3GranteeFormGroup() {
		return new FormGroup<S3GranteeFormProperties>({
			TypeIdentifier: new FormControl<S3GranteeTypeIdentifier | null | undefined>(undefined),
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export enum S3GranteeTypeIdentifier { id = 0, emailAddress = 1, uri = 2 }

	export enum S3GrantPermission { FULL_CONTROL = 0, READ = 1, WRITE = 2, READ_ACP = 3, WRITE_ACP = 4 }

	export enum S3CopyObjectOperationMetadataDirective { COPY = 0, REPLACE = 1 }


	/** <p/> */
	export interface S3ObjectMetadata {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		CacheControl?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		ContentDisposition?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		ContentEncoding?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		ContentLanguage?: string | null;
		UserMetadata?: S3UserMetadata;

		/** Minimum: 0 */
		ContentLength?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		ContentMD5?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		ContentType?: string | null;
		HttpExpiresDate?: Date | null;
		RequesterCharged?: boolean | null;
		SSEAlgorithm?: S3ObjectMetadataSSEAlgorithm | null;
	}

	/** <p/> */
	export interface S3ObjectMetadataFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		CacheControl: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		ContentDisposition: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		ContentEncoding: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		ContentLanguage: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		ContentLength: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		ContentMD5: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		ContentType: FormControl<string | null | undefined>,
		HttpExpiresDate: FormControl<Date | null | undefined>,
		RequesterCharged: FormControl<boolean | null | undefined>,
		SSEAlgorithm: FormControl<S3ObjectMetadataSSEAlgorithm | null | undefined>,
	}
	export function CreateS3ObjectMetadataFormGroup() {
		return new FormGroup<S3ObjectMetadataFormProperties>({
			CacheControl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			ContentDisposition: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			ContentEncoding: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			ContentLanguage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			ContentLength: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			ContentMD5: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			HttpExpiresDate: new FormControl<Date | null | undefined>(undefined),
			RequesterCharged: new FormControl<boolean | null | undefined>(undefined),
			SSEAlgorithm: new FormControl<S3ObjectMetadataSSEAlgorithm | null | undefined>(undefined),
		});

	}

	export interface S3UserMetadata {
	}
	export interface S3UserMetadataFormProperties {
	}
	export function CreateS3UserMetadataFormGroup() {
		return new FormGroup<S3UserMetadataFormProperties>({
		});

	}

	export enum S3ObjectMetadataSSEAlgorithm { AES256 = 0, KMS = 1 }


	/** <p/> */
	export interface S3Tag {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Required
		 * Max length: 1024
		 */
		Value: string;
	}

	/** <p/> */
	export interface S3TagFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateS3TagFormGroup() {
		return new FormGroup<S3TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:=+\-@%]*)$')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:=+\-@%]*)$')]),
		});

	}

	export enum S3CopyObjectOperationStorageClass { STANDARD = 0, STANDARD_IA = 1, ONEZONE_IA = 2, GLACIER = 3, INTELLIGENT_TIERING = 4, DEEP_ARCHIVE = 5 }

	export enum S3CopyObjectOperationObjectLockLegalHoldStatus { OFF = 0, ON = 1 }

	export enum S3CopyObjectOperationObjectLockMode { COMPLIANCE = 0, GOVERNANCE = 1 }


	/** Contains the configuration parameters for a Set Object ACL operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object acl API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTacl.html">PUT Object acl</a>. */
	export interface S3SetObjectAclOperation {

		/** <p/> */
		AccessControlPolicy?: S3AccessControlPolicy;
	}

	/** Contains the configuration parameters for a Set Object ACL operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object acl API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTacl.html">PUT Object acl</a>. */
	export interface S3SetObjectAclOperationFormProperties {
	}
	export function CreateS3SetObjectAclOperationFormGroup() {
		return new FormGroup<S3SetObjectAclOperationFormProperties>({
		});

	}


	/** <p/> */
	export interface S3AccessControlPolicy {

		/** <p/> */
		AccessControlList?: S3AccessControlList;
		CannedAccessControlList?: S3CopyObjectOperationCannedAccessControlList | null;
	}

	/** <p/> */
	export interface S3AccessControlPolicyFormProperties {
		CannedAccessControlList: FormControl<S3CopyObjectOperationCannedAccessControlList | null | undefined>,
	}
	export function CreateS3AccessControlPolicyFormGroup() {
		return new FormGroup<S3AccessControlPolicyFormProperties>({
			CannedAccessControlList: new FormControl<S3CopyObjectOperationCannedAccessControlList | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface S3AccessControlList {

		/**
		 * <p/>
		 * Required
		 */
		Owner: S3ObjectOwner;
		Grants?: Array<S3Grant>;
	}

	/** <p/> */
	export interface S3AccessControlListFormProperties {
	}
	export function CreateS3AccessControlListFormGroup() {
		return new FormGroup<S3AccessControlListFormProperties>({
		});

	}


	/** <p/> */
	export interface S3ObjectOwner {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		ID?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DisplayName?: string | null;
	}

	/** <p/> */
	export interface S3ObjectOwnerFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		ID: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DisplayName: FormControl<string | null | undefined>,
	}
	export function CreateS3ObjectOwnerFormGroup() {
		return new FormGroup<S3ObjectOwnerFormProperties>({
			ID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** Contains the configuration parameters for a Set Object Tagging operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object tagging API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTtagging.html">PUT Object tagging</a>. */
	export interface S3SetObjectTaggingOperation {
		TagSet?: Array<S3Tag>;
	}

	/** Contains the configuration parameters for a Set Object Tagging operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object tagging API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTtagging.html">PUT Object tagging</a>. */
	export interface S3SetObjectTaggingOperationFormProperties {
	}
	export function CreateS3SetObjectTaggingOperationFormGroup() {
		return new FormGroup<S3SetObjectTaggingOperationFormProperties>({
		});

	}


	/** Contains the configuration parameters for an Initiate Glacier Restore job. Amazon S3 Batch Operations passes each value through to the underlying POST Object restore API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOSTrestore.html#RESTObjectPOSTrestore-restore-request">Restoring Archives</a>. */
	export interface S3InitiateRestoreObjectOperation {

		/** Minimum: 0 */
		ExpirationInDays?: number | null;
		GlacierJobTier?: S3InitiateRestoreObjectOperationGlacierJobTier | null;
	}

	/** Contains the configuration parameters for an Initiate Glacier Restore job. Amazon S3 Batch Operations passes each value through to the underlying POST Object restore API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOSTrestore.html#RESTObjectPOSTrestore-restore-request">Restoring Archives</a>. */
	export interface S3InitiateRestoreObjectOperationFormProperties {

		/** Minimum: 0 */
		ExpirationInDays: FormControl<number | null | undefined>,
		GlacierJobTier: FormControl<S3InitiateRestoreObjectOperationGlacierJobTier | null | undefined>,
	}
	export function CreateS3InitiateRestoreObjectOperationFormGroup() {
		return new FormGroup<S3InitiateRestoreObjectOperationFormProperties>({
			ExpirationInDays: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			GlacierJobTier: new FormControl<S3InitiateRestoreObjectOperationGlacierJobTier | null | undefined>(undefined),
		});

	}

	export enum S3InitiateRestoreObjectOperationGlacierJobTier { BULK = 0, STANDARD = 1 }


	/** Contains the configuration parameters for a Set Object Legal Hold operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object Legal Hold API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.htmll#object-lock-legal-holds">PUT Object Legal Hold</a>. */
	export interface S3SetObjectLegalHoldOperation {

		/**
		 * <p/>
		 * Required
		 */
		LegalHold: S3ObjectLockLegalHold;
	}

	/** Contains the configuration parameters for a Set Object Legal Hold operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object Legal Hold API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.htmll#object-lock-legal-holds">PUT Object Legal Hold</a>. */
	export interface S3SetObjectLegalHoldOperationFormProperties {
	}
	export function CreateS3SetObjectLegalHoldOperationFormGroup() {
		return new FormGroup<S3SetObjectLegalHoldOperationFormProperties>({
		});

	}


	/** <p/> */
	export interface S3ObjectLockLegalHold {

		/** Required */
		Status: S3CopyObjectOperationObjectLockLegalHoldStatus;
	}

	/** <p/> */
	export interface S3ObjectLockLegalHoldFormProperties {

		/** Required */
		Status: FormControl<S3CopyObjectOperationObjectLockLegalHoldStatus | null | undefined>,
	}
	export function CreateS3ObjectLockLegalHoldFormGroup() {
		return new FormGroup<S3ObjectLockLegalHoldFormProperties>({
			Status: new FormControl<S3CopyObjectOperationObjectLockLegalHoldStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the configuration parameters for a Set Object Retention operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object Retention API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-modes">PUT Object Retention</a>. */
	export interface S3SetObjectRetentionOperation {
		BypassGovernanceRetention?: boolean | null;

		/**
		 * <p/>
		 * Required
		 */
		Retention: S3Retention;
	}

	/** Contains the configuration parameters for a Set Object Retention operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object Retention API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-modes">PUT Object Retention</a>. */
	export interface S3SetObjectRetentionOperationFormProperties {
		BypassGovernanceRetention: FormControl<boolean | null | undefined>,
	}
	export function CreateS3SetObjectRetentionOperationFormGroup() {
		return new FormGroup<S3SetObjectRetentionOperationFormProperties>({
			BypassGovernanceRetention: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface S3Retention {
		RetainUntilDate?: Date | null;
		Mode?: S3CopyObjectOperationObjectLockMode | null;
	}

	/** <p/> */
	export interface S3RetentionFormProperties {
		RetainUntilDate: FormControl<Date | null | undefined>,
		Mode: FormControl<S3CopyObjectOperationObjectLockMode | null | undefined>,
	}
	export function CreateS3RetentionFormGroup() {
		return new FormGroup<S3RetentionFormProperties>({
			RetainUntilDate: new FormControl<Date | null | undefined>(undefined),
			Mode: new FormControl<S3CopyObjectOperationObjectLockMode | null | undefined>(undefined),
		});

	}

	export enum JobReportFormat { Report_CSV_20180820 = 0 }

	export enum JobReportScope { AllTasks = 0, FailedTasksOnly = 1 }


	/** Describes the format of a manifest. If the manifest is in CSV format, also describes the columns contained within the manifest. */
	export interface JobManifestSpec {

		/** Required */
		Format: JobManifestSpecFormat;
		Fields?: Array<JobManifestFieldName>;
	}

	/** Describes the format of a manifest. If the manifest is in CSV format, also describes the columns contained within the manifest. */
	export interface JobManifestSpecFormProperties {

		/** Required */
		Format: FormControl<JobManifestSpecFormat | null | undefined>,
	}
	export function CreateJobManifestSpecFormGroup() {
		return new FormGroup<JobManifestSpecFormProperties>({
			Format: new FormControl<JobManifestSpecFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JobManifestSpecFormat { S3BatchOperations_CSV_20180820 = 0, S3InventoryReport_CSV_20161130 = 1 }

	export enum JobManifestFieldName { Ignore = 0, Bucket = 1, Key = 2, VersionId = 3 }


	/** Contains the information required to locate a manifest object. */
	export interface JobManifestLocation {

		/**
		 * Required
		 * Max length: 2000
		 * Min length: 1
		 */
		ObjectArn: string;

		/**
		 * Max length: 2000
		 * Min length: 1
		 */
		ObjectVersionId?: string | null;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ETag: string;
	}

	/** Contains the information required to locate a manifest object. */
	export interface JobManifestLocationFormProperties {

		/**
		 * Required
		 * Max length: 2000
		 * Min length: 1
		 */
		ObjectArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 2000
		 * Min length: 1
		 */
		ObjectVersionId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ETag: FormControl<string | null | undefined>,
	}
	export function CreateJobManifestLocationFormGroup() {
		return new FormGroup<JobManifestLocationFormProperties>({
			ObjectArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2000), Validators.pattern('arn:[^:]+:s3:.*')]),
			ObjectVersionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000)]),
			ETag: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
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

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface IdempotencyException {
	}
	export interface IdempotencyExceptionFormProperties {
	}
	export function CreateIdempotencyExceptionFormGroup() {
		return new FormGroup<IdempotencyExceptionFormProperties>({
		});

	}

	export interface InternalServiceException {
	}
	export interface InternalServiceExceptionFormProperties {
	}
	export function CreateInternalServiceExceptionFormGroup() {
		return new FormGroup<InternalServiceExceptionFormProperties>({
		});

	}

	export interface DeleteJobTaggingResult {
	}
	export interface DeleteJobTaggingResultFormProperties {
	}
	export function CreateDeleteJobTaggingResultFormGroup() {
		return new FormGroup<DeleteJobTaggingResultFormProperties>({
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface DescribeJobResult {

		/** A container element for the job configuration and status information returned by a <code>Describe Job</code> request. */
		Job?: JobDescriptor;
	}
	export interface DescribeJobResultFormProperties {
	}
	export function CreateDescribeJobResultFormGroup() {
		return new FormGroup<DescribeJobResultFormProperties>({
		});

	}


	/** A container element for the job configuration and status information returned by a <code>Describe Job</code> request. */
	export interface JobDescriptor {

		/**
		 * Max length: 36
		 * Min length: 5
		 */
		JobId?: string | null;
		ConfirmationRequired?: boolean | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		JobArn?: string | null;
		Status?: JobDescriptorStatus | null;

		/** Contains the configuration information for a job's manifest. */
		Manifest?: JobManifest;

		/** The operation that you want this job to perform on each object listed in the manifest. For more information about the available operations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Available Operations</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
		Operation?: JobOperation;

		/**
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		Priority?: number | null;

		/** Describes the total number of tasks that the specified job has executed, the number of tasks that succeeded, and the number of tasks that failed. */
		ProgressSummary?: JobProgressSummary;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		StatusUpdateReason?: string | null;
		FailureReasons?: Array<JobFailure>;

		/** Contains the configuration parameters for a job-completion report. */
		Report?: JobReport;
		CreationTime?: Date | null;
		TerminationDate?: Date | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		RoleArn?: string | null;
		SuspendedDate?: Date | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		SuspendedCause?: string | null;
	}

	/** A container element for the job configuration and status information returned by a <code>Describe Job</code> request. */
	export interface JobDescriptorFormProperties {

		/**
		 * Max length: 36
		 * Min length: 5
		 */
		JobId: FormControl<string | null | undefined>,
		ConfirmationRequired: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		JobArn: FormControl<string | null | undefined>,
		Status: FormControl<JobDescriptorStatus | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		Priority: FormControl<number | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		StatusUpdateReason: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		TerminationDate: FormControl<Date | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		RoleArn: FormControl<string | null | undefined>,
		SuspendedDate: FormControl<Date | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		SuspendedCause: FormControl<string | null | undefined>,
	}
	export function CreateJobDescriptorFormGroup() {
		return new FormGroup<JobDescriptorFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9\-\_]+')]),
			ConfirmationRequired: new FormControl<boolean | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			JobArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('arn:[^:]+:s3:[a-zA-Z0-9\-]+:\d{12}:job\/.*')]),
			Status: new FormControl<JobDescriptorStatus | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2147483647)]),
			StatusUpdateReason: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			TerminationDate: new FormControl<Date | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('arn:[^:]+:iam::\d{12}:role/.*')]),
			SuspendedDate: new FormControl<Date | null | undefined>(undefined),
			SuspendedCause: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export enum JobDescriptorStatus { Active = 0, Cancelled = 1, Cancelling = 2, Complete = 3, Completing = 4, Failed = 5, Failing = 6, New = 7, Paused = 8, Pausing = 9, Preparing = 10, Ready = 11, Suspended = 12 }


	/** Contains the configuration information for a job's manifest. */
	export interface JobManifest {

		/**
		 * Describes the format of a manifest. If the manifest is in CSV format, also describes the columns contained within the manifest.
		 * Required
		 */
		Spec: JobManifestSpec;

		/**
		 * Contains the information required to locate a manifest object.
		 * Required
		 */
		Location: JobManifestLocation;
	}

	/** Contains the configuration information for a job's manifest. */
	export interface JobManifestFormProperties {
	}
	export function CreateJobManifestFormGroup() {
		return new FormGroup<JobManifestFormProperties>({
		});

	}


	/** The operation that you want this job to perform on each object listed in the manifest. For more information about the available operations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Available Operations</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
	export interface JobOperation {

		/** Contains the configuration parameters for a <code>Lambda Invoke</code> operation. */
		LambdaInvoke?: LambdaInvokeOperation;

		/** Contains the configuration parameters for a PUT Copy object operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Copy object API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectCOPY.html">PUT Object - Copy</a>. */
		S3PutObjectCopy?: S3CopyObjectOperation;

		/** Contains the configuration parameters for a Set Object ACL operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object acl API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTacl.html">PUT Object acl</a>. */
		S3PutObjectAcl?: S3SetObjectAclOperation;

		/** Contains the configuration parameters for a Set Object Tagging operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object tagging API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTtagging.html">PUT Object tagging</a>. */
		S3PutObjectTagging?: S3SetObjectTaggingOperation;

		/** Contains the configuration parameters for an Initiate Glacier Restore job. Amazon S3 Batch Operations passes each value through to the underlying POST Object restore API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOSTrestore.html#RESTObjectPOSTrestore-restore-request">Restoring Archives</a>. */
		S3InitiateRestoreObject?: S3InitiateRestoreObjectOperation;

		/** Contains the configuration parameters for a Set Object Legal Hold operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object Legal Hold API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.htmll#object-lock-legal-holds">PUT Object Legal Hold</a>. */
		S3PutObjectLegalHold?: S3SetObjectLegalHoldOperation;

		/** Contains the configuration parameters for a Set Object Retention operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object Retention API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-modes">PUT Object Retention</a>. */
		S3PutObjectRetention?: S3SetObjectRetentionOperation;
	}

	/** The operation that you want this job to perform on each object listed in the manifest. For more information about the available operations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Available Operations</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
	export interface JobOperationFormProperties {
	}
	export function CreateJobOperationFormGroup() {
		return new FormGroup<JobOperationFormProperties>({
		});

	}


	/** Describes the total number of tasks that the specified job has executed, the number of tasks that succeeded, and the number of tasks that failed. */
	export interface JobProgressSummary {

		/** Minimum: 0 */
		TotalNumberOfTasks?: number | null;

		/** Minimum: 0 */
		NumberOfTasksSucceeded?: number | null;

		/** Minimum: 0 */
		NumberOfTasksFailed?: number | null;
	}

	/** Describes the total number of tasks that the specified job has executed, the number of tasks that succeeded, and the number of tasks that failed. */
	export interface JobProgressSummaryFormProperties {

		/** Minimum: 0 */
		TotalNumberOfTasks: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		NumberOfTasksSucceeded: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		NumberOfTasksFailed: FormControl<number | null | undefined>,
	}
	export function CreateJobProgressSummaryFormGroup() {
		return new FormGroup<JobProgressSummaryFormProperties>({
			TotalNumberOfTasks: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			NumberOfTasksSucceeded: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			NumberOfTasksFailed: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** If this job failed, this element indicates why the job failed. */
	export interface JobFailure {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		FailureCode?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		FailureReason?: string | null;
	}

	/** If this job failed, this element indicates why the job failed. */
	export interface JobFailureFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		FailureCode: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateJobFailureFormGroup() {
		return new FormGroup<JobFailureFormProperties>({
			FailureCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
		});

	}


	/** Contains the configuration parameters for a job-completion report. */
	export interface JobReport {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Bucket?: string | null;
		Format?: JobReportFormat | null;

		/** Required */
		Enabled: boolean;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		Prefix?: string | null;
		ReportScope?: JobReportScope | null;
	}

	/** Contains the configuration parameters for a job-completion report. */
	export interface JobReportFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Bucket: FormControl<string | null | undefined>,
		Format: FormControl<JobReportFormat | null | undefined>,

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		Prefix: FormControl<string | null | undefined>,
		ReportScope: FormControl<JobReportScope | null | undefined>,
	}
	export function CreateJobReportFormGroup() {
		return new FormGroup<JobReportFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('arn:[^:]+:s3:.*')]),
			Format: new FormControl<JobReportFormat | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Prefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			ReportScope: new FormControl<JobReportScope | null | undefined>(undefined),
		});

	}

	export interface GetAccessPointResult {

		/**
		 * Max length: 50
		 * Min length: 3
		 */
		Name?: string | null;

		/**
		 * Max length: 255
		 * Min length: 3
		 */
		Bucket?: string | null;
		NetworkOrigin?: GetAccessPointResultNetworkOrigin | null;

		/** The virtual private cloud (VPC) configuration for an access point. */
		VpcConfiguration?: VpcConfiguration;

		/** The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the Amazon Simple Storage Service Developer Guide. */
		PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
		CreationDate?: Date | null;
	}
	export interface GetAccessPointResultFormProperties {

		/**
		 * Max length: 50
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 3
		 */
		Bucket: FormControl<string | null | undefined>,
		NetworkOrigin: FormControl<GetAccessPointResultNetworkOrigin | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateGetAccessPointResultFormGroup() {
		return new FormGroup<GetAccessPointResultFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(50)]),
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(255)]),
			NetworkOrigin: new FormControl<GetAccessPointResultNetworkOrigin | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum GetAccessPointResultNetworkOrigin { Internet = 0, VPC = 1 }


	/** The virtual private cloud (VPC) configuration for an access point. */
	export interface VpcConfiguration {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		VpcId: string;
	}

	/** The virtual private cloud (VPC) configuration for an access point. */
	export interface VpcConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateVpcConfigurationFormGroup() {
		return new FormGroup<VpcConfigurationFormProperties>({
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the Amazon Simple Storage Service Developer Guide. */
	export interface PublicAccessBlockConfiguration {
		BlockPublicAcls?: boolean | null;
		IgnorePublicAcls?: boolean | null;
		BlockPublicPolicy?: boolean | null;
		RestrictPublicBuckets?: boolean | null;
	}

	/** The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the Amazon Simple Storage Service Developer Guide. */
	export interface PublicAccessBlockConfigurationFormProperties {
		BlockPublicAcls: FormControl<boolean | null | undefined>,
		IgnorePublicAcls: FormControl<boolean | null | undefined>,
		BlockPublicPolicy: FormControl<boolean | null | undefined>,
		RestrictPublicBuckets: FormControl<boolean | null | undefined>,
	}
	export function CreatePublicAccessBlockConfigurationFormGroup() {
		return new FormGroup<PublicAccessBlockConfigurationFormProperties>({
			BlockPublicAcls: new FormControl<boolean | null | undefined>(undefined),
			IgnorePublicAcls: new FormControl<boolean | null | undefined>(undefined),
			BlockPublicPolicy: new FormControl<boolean | null | undefined>(undefined),
			RestrictPublicBuckets: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetAccessPointPolicyResult {
		Policy?: string | null;
	}
	export interface GetAccessPointPolicyResultFormProperties {
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateGetAccessPointPolicyResultFormGroup() {
		return new FormGroup<GetAccessPointPolicyResultFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAccessPointPolicyStatusResult {

		/** Indicates whether this access point policy is public. For more information about how Amazon S3 evaluates policies to determine whether they are public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
		PolicyStatus?: PolicyStatus;
	}
	export interface GetAccessPointPolicyStatusResultFormProperties {
	}
	export function CreateGetAccessPointPolicyStatusResultFormGroup() {
		return new FormGroup<GetAccessPointPolicyStatusResultFormProperties>({
		});

	}


	/** Indicates whether this access point policy is public. For more information about how Amazon S3 evaluates policies to determine whether they are public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.  */
	export interface PolicyStatus {
		IsPublic?: boolean | null;
	}

	/** Indicates whether this access point policy is public. For more information about how Amazon S3 evaluates policies to determine whether they are public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.  */
	export interface PolicyStatusFormProperties {
		IsPublic: FormControl<boolean | null | undefined>,
	}
	export function CreatePolicyStatusFormGroup() {
		return new FormGroup<PolicyStatusFormProperties>({
			IsPublic: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetJobTaggingResult {
		Tags?: Array<S3Tag>;
	}
	export interface GetJobTaggingResultFormProperties {
	}
	export function CreateGetJobTaggingResultFormGroup() {
		return new FormGroup<GetJobTaggingResultFormProperties>({
		});

	}

	export interface GetPublicAccessBlockOutput {

		/** The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the Amazon Simple Storage Service Developer Guide. */
		PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
	}
	export interface GetPublicAccessBlockOutputFormProperties {
	}
	export function CreateGetPublicAccessBlockOutputFormGroup() {
		return new FormGroup<GetPublicAccessBlockOutputFormProperties>({
		});

	}

	export interface NoSuchPublicAccessBlockConfiguration {
	}
	export interface NoSuchPublicAccessBlockConfigurationFormProperties {
	}
	export function CreateNoSuchPublicAccessBlockConfigurationFormGroup() {
		return new FormGroup<NoSuchPublicAccessBlockConfigurationFormProperties>({
		});

	}

	export interface ListAccessPointsResult {
		AccessPointList?: Array<AccessPoint>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListAccessPointsResultFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccessPointsResultFormGroup() {
		return new FormGroup<ListAccessPointsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** An access point used to access a bucket. */
	export interface AccessPoint {

		/**
		 * Required
		 * Max length: 50
		 * Min length: 3
		 */
		Name: string;

		/** Required */
		NetworkOrigin: GetAccessPointResultNetworkOrigin;

		/** The virtual private cloud (VPC) configuration for an access point. */
		VpcConfiguration?: VpcConfiguration;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 */
		Bucket: string;
	}

	/** An access point used to access a bucket. */
	export interface AccessPointFormProperties {

		/**
		 * Required
		 * Max length: 50
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		NetworkOrigin: FormControl<GetAccessPointResultNetworkOrigin | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 */
		Bucket: FormControl<string | null | undefined>,
	}
	export function CreateAccessPointFormGroup() {
		return new FormGroup<AccessPointFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
			NetworkOrigin: new FormControl<GetAccessPointResultNetworkOrigin | null | undefined>(undefined, [Validators.required]),
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
		});

	}

	export interface ListJobsResult {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
		Jobs?: Array<JobListDescriptor>;
	}
	export interface ListJobsResultFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResultFormGroup() {
		return new FormGroup<ListJobsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^[A-Za-z0-9\+\:\/\=\?\#-_]+$')]),
		});

	}


	/** Contains the configuration and status information for a single job retrieved as part of a job list. */
	export interface JobListDescriptor {

		/**
		 * Max length: 36
		 * Min length: 5
		 */
		JobId?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Description?: string | null;
		Operation?: JobListDescriptorOperation | null;

		/**
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		Priority?: number | null;
		Status?: JobDescriptorStatus | null;
		CreationTime?: Date | null;
		TerminationDate?: Date | null;

		/** Describes the total number of tasks that the specified job has executed, the number of tasks that succeeded, and the number of tasks that failed. */
		ProgressSummary?: JobProgressSummary;
	}

	/** Contains the configuration and status information for a single job retrieved as part of a job list. */
	export interface JobListDescriptorFormProperties {

		/**
		 * Max length: 36
		 * Min length: 5
		 */
		JobId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		Operation: FormControl<JobListDescriptorOperation | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		Priority: FormControl<number | null | undefined>,
		Status: FormControl<JobDescriptorStatus | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		TerminationDate: FormControl<Date | null | undefined>,
	}
	export function CreateJobListDescriptorFormGroup() {
		return new FormGroup<JobListDescriptorFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9\-\_]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			Operation: new FormControl<JobListDescriptorOperation | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2147483647)]),
			Status: new FormControl<JobDescriptorStatus | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			TerminationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum JobListDescriptorOperation { LambdaInvoke = 0, S3PutObjectCopy = 1, S3PutObjectAcl = 2, S3PutObjectTagging = 3, S3InitiateRestoreObject = 4, S3PutObjectLegalHold = 5, S3PutObjectRetention = 6 }

	export enum JobStatus { Active = 0, Cancelled = 1, Cancelling = 2, Complete = 3, Completing = 4, Failed = 5, Failing = 6, New = 7, Paused = 8, Pausing = 9, Preparing = 10, Ready = 11, Suspended = 12 }

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface PutJobTaggingResult {
	}
	export interface PutJobTaggingResultFormProperties {
	}
	export function CreatePutJobTaggingResultFormGroup() {
		return new FormGroup<PutJobTaggingResultFormProperties>({
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

	export interface UpdateJobPriorityResult {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 5
		 */
		JobId: string;

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		Priority: number;
	}
	export interface UpdateJobPriorityResultFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 5
		 */
		JobId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		Priority: FormControl<number | null | undefined>,
	}
	export function CreateUpdateJobPriorityResultFormGroup() {
		return new FormGroup<UpdateJobPriorityResultFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9\-\_]+')]),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(2147483647)]),
		});

	}

	export interface UpdateJobStatusResult {

		/**
		 * Max length: 36
		 * Min length: 5
		 */
		JobId?: string | null;
		Status?: JobDescriptorStatus | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		StatusUpdateReason?: string | null;
	}
	export interface UpdateJobStatusResultFormProperties {

		/**
		 * Max length: 36
		 * Min length: 5
		 */
		JobId: FormControl<string | null | undefined>,
		Status: FormControl<JobDescriptorStatus | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		StatusUpdateReason: FormControl<string | null | undefined>,
	}
	export function CreateUpdateJobStatusResultFormGroup() {
		return new FormGroup<UpdateJobStatusResultFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(36), Validators.pattern('[a-zA-Z0-9\-\_]+')]),
			Status: new FormControl<JobDescriptorStatus | null | undefined>(undefined),
			StatusUpdateReason: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface JobStatusException {
	}
	export interface JobStatusExceptionFormProperties {
	}
	export function CreateJobStatusExceptionFormGroup() {
		return new FormGroup<JobStatusExceptionFormProperties>({
		});

	}

	export enum NetworkOrigin { Internet = 0, VPC = 1 }

	export interface CreateAccessPointRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 */
		Bucket: string;

		/** The virtual private cloud (VPC) configuration for an access point. */
		VpcConfiguration?: VpcConfiguration;

		/** The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the Amazon Simple Storage Service Developer Guide. */
		PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
	}
	export interface CreateAccessPointRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 */
		Bucket: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessPointRequestFormGroup() {
		return new FormGroup<CreateAccessPointRequestFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
		});

	}

	export interface CreateJobRequest {
		ConfirmationRequired?: boolean | null;

		/**
		 * The operation that you want this job to perform on each object listed in the manifest. For more information about the available operations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Available Operations</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.
		 * Required
		 */
		Operation: JobOperation;

		/**
		 * Contains the configuration parameters for a job-completion report.
		 * Required
		 */
		Report: JobReport;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ClientRequestToken: string;

		/**
		 * Contains the configuration information for a job's manifest.
		 * Required
		 */
		Manifest: JobManifest;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		Priority: number;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		RoleArn: string;
		Tags?: Array<S3Tag>;
	}
	export interface CreateJobRequestFormProperties {
		ConfirmationRequired: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		Priority: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobRequestFormGroup() {
		return new FormGroup<CreateJobRequestFormProperties>({
			ConfirmationRequired: new FormControl<boolean | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(2147483647)]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('arn:[^:]+:iam::\d{12}:role/.*')]),
		});

	}

	export interface DeleteAccessPointPolicyRequest {
	}
	export interface DeleteAccessPointPolicyRequestFormProperties {
	}
	export function CreateDeleteAccessPointPolicyRequestFormGroup() {
		return new FormGroup<DeleteAccessPointPolicyRequestFormProperties>({
		});

	}

	export interface DeleteAccessPointRequest {
	}
	export interface DeleteAccessPointRequestFormProperties {
	}
	export function CreateDeleteAccessPointRequestFormGroup() {
		return new FormGroup<DeleteAccessPointRequestFormProperties>({
		});

	}

	export interface DeleteJobTaggingRequest {
	}
	export interface DeleteJobTaggingRequestFormProperties {
	}
	export function CreateDeleteJobTaggingRequestFormGroup() {
		return new FormGroup<DeleteJobTaggingRequestFormProperties>({
		});

	}

	export interface DeletePublicAccessBlockRequest {
	}
	export interface DeletePublicAccessBlockRequestFormProperties {
	}
	export function CreateDeletePublicAccessBlockRequestFormGroup() {
		return new FormGroup<DeletePublicAccessBlockRequestFormProperties>({
		});

	}

	export interface DescribeJobRequest {
	}
	export interface DescribeJobRequestFormProperties {
	}
	export function CreateDescribeJobRequestFormGroup() {
		return new FormGroup<DescribeJobRequestFormProperties>({
		});

	}

	export interface GetAccessPointPolicyRequest {
	}
	export interface GetAccessPointPolicyRequestFormProperties {
	}
	export function CreateGetAccessPointPolicyRequestFormGroup() {
		return new FormGroup<GetAccessPointPolicyRequestFormProperties>({
		});

	}

	export interface GetAccessPointPolicyStatusRequest {
	}
	export interface GetAccessPointPolicyStatusRequestFormProperties {
	}
	export function CreateGetAccessPointPolicyStatusRequestFormGroup() {
		return new FormGroup<GetAccessPointPolicyStatusRequestFormProperties>({
		});

	}

	export interface GetAccessPointRequest {
	}
	export interface GetAccessPointRequestFormProperties {
	}
	export function CreateGetAccessPointRequestFormGroup() {
		return new FormGroup<GetAccessPointRequestFormProperties>({
		});

	}

	export interface GetJobTaggingRequest {
	}
	export interface GetJobTaggingRequestFormProperties {
	}
	export function CreateGetJobTaggingRequestFormGroup() {
		return new FormGroup<GetJobTaggingRequestFormProperties>({
		});

	}

	export interface GetPublicAccessBlockRequest {
	}
	export interface GetPublicAccessBlockRequestFormProperties {
	}
	export function CreateGetPublicAccessBlockRequestFormGroup() {
		return new FormGroup<GetPublicAccessBlockRequestFormProperties>({
		});

	}

	export enum OperationName { LambdaInvoke = 0, S3PutObjectCopy = 1, S3PutObjectAcl = 2, S3PutObjectTagging = 3, S3InitiateRestoreObject = 4, S3PutObjectLegalHold = 5, S3PutObjectRetention = 6 }

	export enum JobManifestFormat { S3BatchOperations_CSV_20180820 = 0, S3InventoryReport_CSV_20161130 = 1 }

	export interface ListAccessPointsRequest {
	}
	export interface ListAccessPointsRequestFormProperties {
	}
	export function CreateListAccessPointsRequestFormGroup() {
		return new FormGroup<ListAccessPointsRequestFormProperties>({
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

	export interface PutAccessPointPolicyRequest {

		/** Required */
		Policy: string;
	}
	export interface PutAccessPointPolicyRequestFormProperties {

		/** Required */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutAccessPointPolicyRequestFormGroup() {
		return new FormGroup<PutAccessPointPolicyRequestFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutJobTaggingRequest {

		/** Required */
		Tags: Array<S3Tag>;
	}
	export interface PutJobTaggingRequestFormProperties {
	}
	export function CreatePutJobTaggingRequestFormGroup() {
		return new FormGroup<PutJobTaggingRequestFormProperties>({
		});

	}

	export interface PutPublicAccessBlockRequest {

		/**
		 * The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the Amazon Simple Storage Service Developer Guide.
		 * Required
		 */
		PublicAccessBlockConfiguration: PublicAccessBlockConfiguration;
	}
	export interface PutPublicAccessBlockRequestFormProperties {
	}
	export function CreatePutPublicAccessBlockRequestFormGroup() {
		return new FormGroup<PutPublicAccessBlockRequestFormProperties>({
		});

	}

	export enum RequestedJobStatus { Cancelled = 0, Ready = 1 }

	export enum S3CannedAccessControlList { private = 0, 'public-read' = 1, 'public-read-write' = 2, 'aws-exec-read' = 3, 'authenticated-read' = 4, 'bucket-owner-read' = 5, 'bucket-owner-full-control' = 6 }

	export enum S3MetadataDirective { COPY = 0, REPLACE = 1 }

	export enum S3StorageClass { STANDARD = 0, STANDARD_IA = 1, ONEZONE_IA = 2, GLACIER = 3, INTELLIGENT_TIERING = 4, DEEP_ARCHIVE = 5 }

	export enum S3ObjectLockLegalHoldStatus { OFF = 0, ON = 1 }

	export enum S3ObjectLockMode { COMPLIANCE = 0, GOVERNANCE = 1 }

	export enum S3GlacierJobTier { BULK = 0, STANDARD = 1 }

	export enum S3Permission { FULL_CONTROL = 0, READ = 1, WRITE = 2, READ_ACP = 3, WRITE_ACP = 4 }

	export enum S3ObjectLockRetentionMode { COMPLIANCE = 0, GOVERNANCE = 1 }

	export enum S3SSEAlgorithm { AES256 = 0, KMS = 1 }

	export interface UpdateJobPriorityRequest {
	}
	export interface UpdateJobPriorityRequestFormProperties {
	}
	export function CreateUpdateJobPriorityRequestFormGroup() {
		return new FormGroup<UpdateJobPriorityRequestFormProperties>({
		});

	}

	export interface UpdateJobStatusRequest {
	}
	export interface UpdateJobStatusRequestFormProperties {
	}
	export function CreateUpdateJobStatusRequestFormGroup() {
		return new FormGroup<UpdateJobStatusRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes the specified access point.
		 * Delete v20180820/accesspoint/{name}#x-amz-account-id
		 * @param {string} name The name of the access point you want to delete.
		 * @return {void} Success
		 */
		DeleteAccessPoint(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v20180820/accesspoint/' + (name == null ? '' : encodeURIComponent(name)) + '#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns configuration information about the specified access point.
		 * Get v20180820/accesspoint/{name}#x-amz-account-id
		 * @param {string} name The name of the access point whose configuration information you want to retrieve.
		 * @return {void} Success
		 */
		GetAccessPoint(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/accesspoint/' + (name == null ? '' : encodeURIComponent(name)) + '#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists current Amazon S3 Batch Operations jobs and jobs that have ended within the last 30 days for the AWS account making the request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-basics.html">Amazon S3 Batch Operations</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p> <p>Related actions include:</p> <p/> <ul> <li> <p> <a>CreateJob</a> </p> </li> <li> <p> <a>DescribeJob</a> </p> </li> <li> <p> <a>UpdateJobPriority</a> </p> </li> <li> <p> <a>UpdateJobStatus</a> </p> </li> </ul>
		 * Get v20180820/jobs#x-amz-account-id
		 * @param {Array<JobStatus>} jobStatuses The <code>List Jobs</code> request returns jobs that match the statuses listed in this element.
		 * @param {string} nextToken A pagination token to request the next page of results. Use the token that Amazon S3 returned in the <code>NextToken</code> element of the <code>ListJobsResult</code> from the previous <code>List Jobs</code> request.
		 * @param {number} maxResults The maximum number of jobs that Amazon S3 will include in the <code>List Jobs</code> response. If there are more jobs than this number, the response will include a pagination token in the <code>NextToken</code> field to enable you to retrieve the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {void} Success
		 */
		ListJobs(jobStatuses: Array<JobStatus> | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/jobs#x-amz-account-id?' + jobStatuses?.map(z => `jobStatuses=${z}`).join('&') + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the access point policy for the specified access point.
		 * Delete v20180820/accesspoint/{name}/policy#x-amz-account-id
		 * @param {string} name The name of the access point whose policy you want to delete.
		 * @return {void} Success
		 */
		DeleteAccessPointPolicy(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v20180820/accesspoint/' + (name == null ? '' : encodeURIComponent(name)) + '/policy#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the access point policy associated with the specified access point.
		 * Get v20180820/accesspoint/{name}/policy#x-amz-account-id
		 * @param {string} name The name of the access point whose policy you want to retrieve.
		 * @return {void} Success
		 */
		GetAccessPointPolicy(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/accesspoint/' + (name == null ? '' : encodeURIComponent(name)) + '/policy#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the entire tag set from the specified Amazon S3 Batch Operations job. To use this operation, you must have permission to perform the <code>s3:DeleteJobTagging</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags">Using Job Tags</a> in the Amazon Simple Storage Service Developer Guide.</p> <p/> <p>Related actions include:</p> <ul> <li> <p> <a>CreateJob</a> </p> </li> <li> <p> <a>GetJobTagging</a> </p> </li> <li> <p> <a>PutJobTagging</a> </p> </li> </ul>
		 * Delete v20180820/jobs/{id}/tagging#x-amz-account-id
		 * @param {string} id The ID for the Amazon S3 Batch Operations job whose tags you want to delete.
		 * @return {void} Success
		 */
		DeleteJobTagging(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v20180820/jobs/' + (id == null ? '' : encodeURIComponent(id)) + '/tagging#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the tags on an Amazon S3 Batch Operations job. To use this operation, you must have permission to perform the <code>s3:GetJobTagging</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags">Using Job Tags</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p> <p/> <p>Related actions include:</p> <ul> <li> <p> <a>CreateJob</a> </p> </li> <li> <p> <a>PutJobTagging</a> </p> </li> <li> <p> <a>DeleteJobTagging</a> </p> </li> </ul>
		 * Get v20180820/jobs/{id}/tagging#x-amz-account-id
		 * @param {string} id The ID for the Amazon S3 Batch Operations job whose tags you want to retrieve.
		 * @return {void} Success
		 */
		GetJobTagging(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/jobs/' + (id == null ? '' : encodeURIComponent(id)) + '/tagging#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes the <code>PublicAccessBlock</code> configuration for an Amazon Web Services account.
		 * Delete v20180820/configuration/publicAccessBlock#x-amz-account-id
		 * @return {void} Success
		 */
		DeletePublicAccessBlock(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v20180820/configuration/publicAccessBlock#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the <code>PublicAccessBlock</code> configuration for an Amazon Web Services account.
		 * Get v20180820/configuration/publicAccessBlock#x-amz-account-id
		 * @return {void} Success
		 */
		GetPublicAccessBlock(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/configuration/publicAccessBlock#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves the configuration parameters and status for a Batch Operations job. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-basics.html">Amazon S3 Batch Operations</a> in the Amazon Simple Storage Service Developer Guide.</p> <p/> <p>Related actions include:</p> <ul> <li> <p> <a>CreateJob</a> </p> </li> <li> <p> <a>ListJobs</a> </p> </li> <li> <p> <a>UpdateJobPriority</a> </p> </li> <li> <p> <a>UpdateJobStatus</a> </p> </li> </ul>
		 * Get v20180820/jobs/{id}#x-amz-account-id
		 * @param {string} id The ID for the job whose information you want to retrieve.
		 * @return {void} Success
		 */
		DescribeJob(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/jobs/' + (id == null ? '' : encodeURIComponent(id)) + '#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Indicates whether the specified access point currently has a policy that allows public access. For more information about public access through access points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points.html">Managing Data Access with Amazon S3 Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.
		 * Get v20180820/accesspoint/{name}/policyStatus#x-amz-account-id
		 * @param {string} name The name of the access point whose policy status you want to retrieve.
		 * @return {void} Success
		 */
		GetAccessPointPolicyStatus(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/accesspoint/' + (name == null ? '' : encodeURIComponent(name)) + '/policyStatus#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of the access points currently associated with the specified bucket. You can retrieve up to 1000 access points per call. If the specified bucket has more than 1,000 access points (or the number specified in <code>maxResults</code>, whichever is less), the response will include a continuation token that you can use to list the additional access points.
		 * Get v20180820/accesspoint#x-amz-account-id
		 * @param {string} bucket The name of the bucket whose associated access points you want to list.
		 * @param {string} nextToken A continuation token. If a previous call to <code>ListAccessPoints</code> returned a continuation token in the <code>NextToken</code> field, then providing that value here causes Amazon S3 to retrieve the next page of results.
		 * @param {number} maxResults The maximum number of access points that you want to include in the list. If the specified bucket has more than this number of access points, then the response will include a continuation token in the <code>NextToken</code> field that you can use to retrieve the next page of access points.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {void} Success
		 */
		ListAccessPoints(bucket: string | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/accesspoint#x-amz-account-id?bucket=' + (bucket == null ? '' : encodeURIComponent(bucket)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates an existing Amazon S3 Batch Operations job's priority. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-basics.html">Amazon S3 Batch Operations</a> in the Amazon Simple Storage Service Developer Guide.</p> <p/> <p>Related actions include:</p> <ul> <li> <p> <a>CreateJob</a> </p> </li> <li> <p> <a>ListJobs</a> </p> </li> <li> <p> <a>DescribeJob</a> </p> </li> <li> <p> <a>UpdateJobStatus</a> </p> </li> </ul>
		 * Post v20180820/jobs/{id}/priority#x-amz-account-id&priority
		 * @param {string} id The ID for the job whose priority you want to update.
		 * @param {number} priority The priority you want to assign to this job.
		 * @return {void} Success
		 */
		UpdateJobPriority(id: string, priority: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v20180820/jobs/' + (id == null ? '' : encodeURIComponent(id)) + '/priority#x-amz-account-id&priority&priority=' + priority, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the status for the specified job. Use this operation to confirm that you want to run a job or to cancel an existing job. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-basics.html">Amazon S3 Batch Operations</a> in the Amazon Simple Storage Service Developer Guide.</p> <p/> <p>Related actions include:</p> <ul> <li> <p> <a>CreateJob</a> </p> </li> <li> <p> <a>ListJobs</a> </p> </li> <li> <p> <a>DescribeJob</a> </p> </li> <li> <p> <a>UpdateJobStatus</a> </p> </li> </ul>
		 * Post v20180820/jobs/{id}/status#x-amz-account-id&requestedJobStatus
		 * @param {string} id The ID of the job whose status you want to update.
		 * @param {RequestedJobStatus} requestedJobStatus The status that you want to move the specified job to.
		 * @param {string} statusUpdateReason A description of the reason why you want to change the specified job's status. This field can be any string up to the maximum length.
		 * @return {void} Success
		 */
		UpdateJobStatus(id: string, requestedJobStatus: RequestedJobStatus, statusUpdateReason: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v20180820/jobs/' + (id == null ? '' : encodeURIComponent(id)) + '/status#x-amz-account-id&requestedJobStatus&requestedJobStatus=' + requestedJobStatus + '&statusUpdateReason=' + (statusUpdateReason == null ? '' : encodeURIComponent(statusUpdateReason)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

