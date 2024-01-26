import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateAccessPointResult {
		AccessPointArn?: string;
		Alias?: string;
	}
	export interface CreateAccessPointResultFormProperties {
		AccessPointArn: FormControl<string | null | undefined>,
		Alias: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessPointResultFormGroup() {
		return new FormGroup<CreateAccessPointResultFormProperties>({
			AccessPointArn: new FormControl<string | null | undefined>(undefined),
			Alias: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAccessPointForObjectLambdaResult {
		ObjectLambdaAccessPointArn?: string;
		Alias?: ObjectLambdaAccessPointAlias;
	}
	export interface CreateAccessPointForObjectLambdaResultFormProperties {
		ObjectLambdaAccessPointArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessPointForObjectLambdaResultFormGroup() {
		return new FormGroup<CreateAccessPointForObjectLambdaResultFormProperties>({
			ObjectLambdaAccessPointArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The alias of an Object Lambda Access Point. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-use.html#ol-access-points-alias">How to use a bucket-style alias for your S3 bucket Object Lambda Access Point</a>. */
	export interface ObjectLambdaAccessPointAlias {
		Value?: string;
		Status?: ObjectLambdaAccessPointAliasStatus;
	}

	/** The alias of an Object Lambda Access Point. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-use.html#ol-access-points-alias">How to use a bucket-style alias for your S3 bucket Object Lambda Access Point</a>. */
	export interface ObjectLambdaAccessPointAliasFormProperties {
		Value: FormControl<string | null | undefined>,
		Status: FormControl<ObjectLambdaAccessPointAliasStatus | null | undefined>,
	}
	export function CreateObjectLambdaAccessPointAliasFormGroup() {
		return new FormGroup<ObjectLambdaAccessPointAliasFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ObjectLambdaAccessPointAliasStatus | null | undefined>(undefined),
		});

	}

	export enum ObjectLambdaAccessPointAliasStatus { PROVISIONING = 0, READY = 1 }

	export interface CreateBucketResult {
		BucketArn?: string;
	}
	export interface CreateBucketResultFormProperties {
		BucketArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBucketResultFormGroup() {
		return new FormGroup<CreateBucketResultFormProperties>({
			BucketArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BucketLocationConstraint { EU = 0, 'eu-west-1' = 1, 'us-west-1' = 2, 'us-west-2' = 3, 'ap-south-1' = 4, 'ap-southeast-1' = 5, 'ap-southeast-2' = 6, 'ap-northeast-1' = 7, 'sa-east-1' = 8, 'cn-north-1' = 9, 'eu-central-1' = 10 }

	export interface BucketAlreadyExists {
	}
	export interface BucketAlreadyExistsFormProperties {
	}
	export function CreateBucketAlreadyExistsFormGroup() {
		return new FormGroup<BucketAlreadyExistsFormProperties>({
		});

	}

	export interface BucketAlreadyOwnedByYou {
	}
	export interface BucketAlreadyOwnedByYouFormProperties {
	}
	export function CreateBucketAlreadyOwnedByYouFormGroup() {
		return new FormGroup<BucketAlreadyOwnedByYouFormProperties>({
		});

	}

	export interface CreateJobResult {
		JobId?: string;
	}
	export interface CreateJobResultFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobResultFormGroup() {
		return new FormGroup<CreateJobResultFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the configuration parameters for a <code>Lambda Invoke</code> operation. */
	export interface LambdaInvokeOperation {
		FunctionArn?: string;
	}

	/** Contains the configuration parameters for a <code>Lambda Invoke</code> operation. */
	export interface LambdaInvokeOperationFormProperties {
		FunctionArn: FormControl<string | null | undefined>,
	}
	export function CreateLambdaInvokeOperationFormGroup() {
		return new FormGroup<LambdaInvokeOperationFormProperties>({
			FunctionArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the configuration parameters for a PUT Copy object operation. S3 Batch Operations passes every object to the underlying <code>CopyObject</code> API operation. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectCOPY.html">CopyObject</a>. */
	export interface S3CopyObjectOperation {
		TargetResource?: string;
		CannedAccessControlList?: S3CannedAccessControlList;
		AccessControlGrants?: Array<S3Grant>;
		MetadataDirective?: S3MetadataDirective;
		ModifiedSinceConstraint?: Date;
		NewObjectMetadata?: S3ObjectMetadata;
		NewObjectTagging?: Array<S3Tag>;
		RedirectLocation?: string;
		RequesterPays?: boolean | null;
		StorageClass?: S3StorageClass;
		UnModifiedSinceConstraint?: Date;
		SSEAwsKmsKeyId?: string;
		TargetKeyPrefix?: string;
		ObjectLockLegalHoldStatus?: S3ObjectLockLegalHoldStatus;
		ObjectLockMode?: S3ObjectLockMode;
		ObjectLockRetainUntilDate?: Date;
		BucketKeyEnabled?: boolean | null;
		ChecksumAlgorithm?: S3ChecksumAlgorithm;
	}

	/** Contains the configuration parameters for a PUT Copy object operation. S3 Batch Operations passes every object to the underlying <code>CopyObject</code> API operation. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectCOPY.html">CopyObject</a>. */
	export interface S3CopyObjectOperationFormProperties {
		TargetResource: FormControl<string | null | undefined>,
		CannedAccessControlList: FormControl<S3CannedAccessControlList | null | undefined>,
		MetadataDirective: FormControl<S3MetadataDirective | null | undefined>,
		ModifiedSinceConstraint: FormControl<Date | null | undefined>,
		RedirectLocation: FormControl<string | null | undefined>,
		RequesterPays: FormControl<boolean | null | undefined>,
		StorageClass: FormControl<S3StorageClass | null | undefined>,
		UnModifiedSinceConstraint: FormControl<Date | null | undefined>,
		SSEAwsKmsKeyId: FormControl<string | null | undefined>,
		TargetKeyPrefix: FormControl<string | null | undefined>,
		ObjectLockLegalHoldStatus: FormControl<S3ObjectLockLegalHoldStatus | null | undefined>,
		ObjectLockMode: FormControl<S3ObjectLockMode | null | undefined>,
		ObjectLockRetainUntilDate: FormControl<Date | null | undefined>,
		BucketKeyEnabled: FormControl<boolean | null | undefined>,
		ChecksumAlgorithm: FormControl<S3ChecksumAlgorithm | null | undefined>,
	}
	export function CreateS3CopyObjectOperationFormGroup() {
		return new FormGroup<S3CopyObjectOperationFormProperties>({
			TargetResource: new FormControl<string | null | undefined>(undefined),
			CannedAccessControlList: new FormControl<S3CannedAccessControlList | null | undefined>(undefined),
			MetadataDirective: new FormControl<S3MetadataDirective | null | undefined>(undefined),
			ModifiedSinceConstraint: new FormControl<Date | null | undefined>(undefined),
			RedirectLocation: new FormControl<string | null | undefined>(undefined),
			RequesterPays: new FormControl<boolean | null | undefined>(undefined),
			StorageClass: new FormControl<S3StorageClass | null | undefined>(undefined),
			UnModifiedSinceConstraint: new FormControl<Date | null | undefined>(undefined),
			SSEAwsKmsKeyId: new FormControl<string | null | undefined>(undefined),
			TargetKeyPrefix: new FormControl<string | null | undefined>(undefined),
			ObjectLockLegalHoldStatus: new FormControl<S3ObjectLockLegalHoldStatus | null | undefined>(undefined),
			ObjectLockMode: new FormControl<S3ObjectLockMode | null | undefined>(undefined),
			ObjectLockRetainUntilDate: new FormControl<Date | null | undefined>(undefined),
			BucketKeyEnabled: new FormControl<boolean | null | undefined>(undefined),
			ChecksumAlgorithm: new FormControl<S3ChecksumAlgorithm | null | undefined>(undefined),
		});

	}

	export enum S3CannedAccessControlList { private = 0, 'public-read' = 1, 'public-read-write' = 2, 'aws-exec-read' = 3, 'authenticated-read' = 4, 'bucket-owner-read' = 5, 'bucket-owner-full-control' = 6 }


	/** <p/> */
	export interface S3Grant {
		Grantee?: S3Grantee;
		Permission?: S3Permission;
	}

	/** <p/> */
	export interface S3GrantFormProperties {
		Permission: FormControl<S3Permission | null | undefined>,
	}
	export function CreateS3GrantFormGroup() {
		return new FormGroup<S3GrantFormProperties>({
			Permission: new FormControl<S3Permission | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface S3Grantee {
		TypeIdentifier?: S3GranteeTypeIdentifier;
		Identifier?: string;
		DisplayName?: string;
	}

	/** <p/> */
	export interface S3GranteeFormProperties {
		TypeIdentifier: FormControl<S3GranteeTypeIdentifier | null | undefined>,
		Identifier: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
	}
	export function CreateS3GranteeFormGroup() {
		return new FormGroup<S3GranteeFormProperties>({
			TypeIdentifier: new FormControl<S3GranteeTypeIdentifier | null | undefined>(undefined),
			Identifier: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum S3GranteeTypeIdentifier { id = 0, emailAddress = 1, uri = 2 }

	export enum S3Permission { FULL_CONTROL = 0, READ = 1, WRITE = 2, READ_ACP = 3, WRITE_ACP = 4 }

	export enum S3MetadataDirective { COPY = 0, REPLACE = 1 }


	/** <p/> */
	export interface S3ObjectMetadata {
		CacheControl?: string;
		ContentDisposition?: string;
		ContentEncoding?: string;
		ContentLanguage?: string;
		UserMetadata?: S3UserMetadata;
		ContentLength?: number | null;
		ContentMD5?: string;
		ContentType?: string;
		HttpExpiresDate?: Date;
		RequesterCharged?: boolean | null;
		SSEAlgorithm?: S3SSEAlgorithm;
	}

	/** <p/> */
	export interface S3ObjectMetadataFormProperties {
		CacheControl: FormControl<string | null | undefined>,
		ContentDisposition: FormControl<string | null | undefined>,
		ContentEncoding: FormControl<string | null | undefined>,
		ContentLanguage: FormControl<string | null | undefined>,
		ContentLength: FormControl<number | null | undefined>,
		ContentMD5: FormControl<string | null | undefined>,
		ContentType: FormControl<string | null | undefined>,
		HttpExpiresDate: FormControl<Date | null | undefined>,
		RequesterCharged: FormControl<boolean | null | undefined>,
		SSEAlgorithm: FormControl<S3SSEAlgorithm | null | undefined>,
	}
	export function CreateS3ObjectMetadataFormGroup() {
		return new FormGroup<S3ObjectMetadataFormProperties>({
			CacheControl: new FormControl<string | null | undefined>(undefined),
			ContentDisposition: new FormControl<string | null | undefined>(undefined),
			ContentEncoding: new FormControl<string | null | undefined>(undefined),
			ContentLanguage: new FormControl<string | null | undefined>(undefined),
			ContentLength: new FormControl<number | null | undefined>(undefined),
			ContentMD5: new FormControl<string | null | undefined>(undefined),
			ContentType: new FormControl<string | null | undefined>(undefined),
			HttpExpiresDate: new FormControl<Date | null | undefined>(undefined),
			RequesterCharged: new FormControl<boolean | null | undefined>(undefined),
			SSEAlgorithm: new FormControl<S3SSEAlgorithm | null | undefined>(undefined),
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

	export enum S3SSEAlgorithm { AES256 = 0, KMS = 1 }


	/** A container for a key-value name pair. */
	export interface S3Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A container for a key-value name pair. */
	export interface S3TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateS3TagFormGroup() {
		return new FormGroup<S3TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum S3StorageClass { STANDARD = 0, STANDARD_IA = 1, ONEZONE_IA = 2, GLACIER = 3, INTELLIGENT_TIERING = 4, DEEP_ARCHIVE = 5, GLACIER_IR = 6 }

	export enum S3ObjectLockLegalHoldStatus { OFF = 0, ON = 1 }

	export enum S3ObjectLockMode { COMPLIANCE = 0, GOVERNANCE = 1 }

	export enum S3ChecksumAlgorithm { CRC32 = 0, CRC32C = 1, SHA1 = 2, SHA256 = 3 }


	/** Contains the configuration parameters for a PUT Object ACL operation. S3 Batch Operations passes every object to the underlying <code>PutObjectAcl</code> API operation. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTacl.html">PutObjectAcl</a>. */
	export interface S3SetObjectAclOperation {
		AccessControlPolicy?: S3AccessControlPolicy;
	}

	/** Contains the configuration parameters for a PUT Object ACL operation. S3 Batch Operations passes every object to the underlying <code>PutObjectAcl</code> API operation. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTacl.html">PutObjectAcl</a>. */
	export interface S3SetObjectAclOperationFormProperties {
	}
	export function CreateS3SetObjectAclOperationFormGroup() {
		return new FormGroup<S3SetObjectAclOperationFormProperties>({
		});

	}


	/** <p/> */
	export interface S3AccessControlPolicy {
		AccessControlList?: S3AccessControlList;
		CannedAccessControlList?: S3CannedAccessControlList;
	}

	/** <p/> */
	export interface S3AccessControlPolicyFormProperties {
		CannedAccessControlList: FormControl<S3CannedAccessControlList | null | undefined>,
	}
	export function CreateS3AccessControlPolicyFormGroup() {
		return new FormGroup<S3AccessControlPolicyFormProperties>({
			CannedAccessControlList: new FormControl<S3CannedAccessControlList | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface S3AccessControlList {

		/** Required */
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
		ID?: string;
		DisplayName?: string;
	}

	/** <p/> */
	export interface S3ObjectOwnerFormProperties {
		ID: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
	}
	export function CreateS3ObjectOwnerFormGroup() {
		return new FormGroup<S3ObjectOwnerFormProperties>({
			ID: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the configuration parameters for a PUT Object Tagging operation. S3 Batch Operations passes every object to the underlying <code>PutObjectTagging</code> API operation. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTtagging.html">PutObjectTagging</a>. */
	export interface S3SetObjectTaggingOperation {
		TagSet?: Array<S3Tag>;
	}

	/** Contains the configuration parameters for a PUT Object Tagging operation. S3 Batch Operations passes every object to the underlying <code>PutObjectTagging</code> API operation. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTtagging.html">PutObjectTagging</a>. */
	export interface S3SetObjectTaggingOperationFormProperties {
	}
	export function CreateS3SetObjectTaggingOperationFormGroup() {
		return new FormGroup<S3SetObjectTaggingOperationFormProperties>({
		});

	}


	/** Contains no configuration parameters because the DELETE Object tagging (<code>DeleteObjectTagging</code>) API operation accepts only the bucket name and key name as parameters, which are defined in the job's manifest. */
	export interface S3DeleteObjectTaggingOperation {
	}

	/** Contains no configuration parameters because the DELETE Object tagging (<code>DeleteObjectTagging</code>) API operation accepts only the bucket name and key name as parameters, which are defined in the job's manifest. */
	export interface S3DeleteObjectTaggingOperationFormProperties {
	}
	export function CreateS3DeleteObjectTaggingOperationFormGroup() {
		return new FormGroup<S3DeleteObjectTaggingOperationFormProperties>({
		});

	}


	/** Contains the configuration parameters for a POST Object restore job. S3 Batch Operations passes every object to the underlying <code>RestoreObject</code> API operation. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOSTrestore.html#RESTObjectPOSTrestore-restore-request">RestoreObject</a>. */
	export interface S3InitiateRestoreObjectOperation {
		ExpirationInDays?: number | null;
		GlacierJobTier?: S3GlacierJobTier;
	}

	/** Contains the configuration parameters for a POST Object restore job. S3 Batch Operations passes every object to the underlying <code>RestoreObject</code> API operation. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOSTrestore.html#RESTObjectPOSTrestore-restore-request">RestoreObject</a>. */
	export interface S3InitiateRestoreObjectOperationFormProperties {
		ExpirationInDays: FormControl<number | null | undefined>,
		GlacierJobTier: FormControl<S3GlacierJobTier | null | undefined>,
	}
	export function CreateS3InitiateRestoreObjectOperationFormGroup() {
		return new FormGroup<S3InitiateRestoreObjectOperationFormProperties>({
			ExpirationInDays: new FormControl<number | null | undefined>(undefined),
			GlacierJobTier: new FormControl<S3GlacierJobTier | null | undefined>(undefined),
		});

	}

	export enum S3GlacierJobTier { BULK = 0, STANDARD = 1 }


	/** Contains the configuration for an S3 Object Lock legal hold operation that an S3 Batch Operations job passes to every object to the underlying <code>PutObjectLegalHold</code> API operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-legal-hold.html">Using S3 Object Lock legal hold with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>. */
	export interface S3SetObjectLegalHoldOperation {

		/** Required */
		LegalHold: S3ObjectLockLegalHold;
	}

	/** Contains the configuration for an S3 Object Lock legal hold operation that an S3 Batch Operations job passes to every object to the underlying <code>PutObjectLegalHold</code> API operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-legal-hold.html">Using S3 Object Lock legal hold with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>. */
	export interface S3SetObjectLegalHoldOperationFormProperties {
	}
	export function CreateS3SetObjectLegalHoldOperationFormGroup() {
		return new FormGroup<S3SetObjectLegalHoldOperationFormProperties>({
		});

	}


	/** Whether S3 Object Lock legal hold will be applied to objects in an S3 Batch Operations job. */
	export interface S3ObjectLockLegalHold {

		/** Required */
		Status: S3ObjectLockLegalHoldStatus;
	}

	/** Whether S3 Object Lock legal hold will be applied to objects in an S3 Batch Operations job. */
	export interface S3ObjectLockLegalHoldFormProperties {

		/** Required */
		Status: FormControl<S3ObjectLockLegalHoldStatus | null | undefined>,
	}
	export function CreateS3ObjectLockLegalHoldFormGroup() {
		return new FormGroup<S3ObjectLockLegalHoldFormProperties>({
			Status: new FormControl<S3ObjectLockLegalHoldStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the configuration parameters for the Object Lock retention action for an S3 Batch Operations job. Batch Operations passes every object to the underlying <code>PutObjectRetention</code> API operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>. */
	export interface S3SetObjectRetentionOperation {
		BypassGovernanceRetention?: boolean | null;

		/** Required */
		Retention: S3Retention;
	}

	/** Contains the configuration parameters for the Object Lock retention action for an S3 Batch Operations job. Batch Operations passes every object to the underlying <code>PutObjectRetention</code> API operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>. */
	export interface S3SetObjectRetentionOperationFormProperties {
		BypassGovernanceRetention: FormControl<boolean | null | undefined>,
	}
	export function CreateS3SetObjectRetentionOperationFormGroup() {
		return new FormGroup<S3SetObjectRetentionOperationFormProperties>({
			BypassGovernanceRetention: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains the S3 Object Lock retention mode to be applied to all objects in the S3 Batch Operations job. If you don't provide <code>Mode</code> and <code>RetainUntilDate</code> data types in your operation, you will remove the retention from your objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>. */
	export interface S3Retention {
		RetainUntilDate?: Date;
		Mode?: S3ObjectLockMode;
	}

	/** Contains the S3 Object Lock retention mode to be applied to all objects in the S3 Batch Operations job. If you don't provide <code>Mode</code> and <code>RetainUntilDate</code> data types in your operation, you will remove the retention from your objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>. */
	export interface S3RetentionFormProperties {
		RetainUntilDate: FormControl<Date | null | undefined>,
		Mode: FormControl<S3ObjectLockMode | null | undefined>,
	}
	export function CreateS3RetentionFormGroup() {
		return new FormGroup<S3RetentionFormProperties>({
			RetainUntilDate: new FormControl<Date | null | undefined>(undefined),
			Mode: new FormControl<S3ObjectLockMode | null | undefined>(undefined),
		});

	}


	/** Directs the specified job to invoke <code>ReplicateObject</code> on every object in the job's manifest. */
	export interface S3ReplicateObjectOperation {
	}

	/** Directs the specified job to invoke <code>ReplicateObject</code> on every object in the job's manifest. */
	export interface S3ReplicateObjectOperationFormProperties {
	}
	export function CreateS3ReplicateObjectOperationFormGroup() {
		return new FormGroup<S3ReplicateObjectOperationFormProperties>({
		});

	}

	export enum JobReportFormat { Report_CSV_20180820 = 0 }

	export enum JobReportScope { AllTasks = 0, FailedTasksOnly = 1 }


	/** Describes the format of a manifest. If the manifest is in CSV format, also describes the columns contained within the manifest. */
	export interface JobManifestSpec {

		/** Required */
		Format: JobManifestFormat;
		Fields?: Array<JobManifestFieldName>;
	}

	/** Describes the format of a manifest. If the manifest is in CSV format, also describes the columns contained within the manifest. */
	export interface JobManifestSpecFormProperties {

		/** Required */
		Format: FormControl<JobManifestFormat | null | undefined>,
	}
	export function CreateJobManifestSpecFormGroup() {
		return new FormGroup<JobManifestSpecFormProperties>({
			Format: new FormControl<JobManifestFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JobManifestFormat { S3BatchOperations_CSV_20180820 = 0, S3InventoryReport_CSV_20161130 = 1 }

	export enum JobManifestFieldName { Ignore = 0, Bucket = 1, Key = 2, VersionId = 3 }


	/** Contains the information required to locate a manifest object. */
	export interface JobManifestLocation {

		/** Required */
		ObjectArn: string;
		ObjectVersionId?: string;

		/** Required */
		ETag: string;
	}

	/** Contains the information required to locate a manifest object. */
	export interface JobManifestLocationFormProperties {

		/** Required */
		ObjectArn: FormControl<string | null | undefined>,
		ObjectVersionId: FormControl<string | null | undefined>,

		/** Required */
		ETag: FormControl<string | null | undefined>,
	}
	export function CreateJobManifestLocationFormGroup() {
		return new FormGroup<JobManifestLocationFormProperties>({
			ObjectArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ObjectVersionId: new FormControl<string | null | undefined>(undefined),
			ETag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The container for the service that will create the S3 manifest. */
	export interface S3JobManifestGenerator {
		ExpectedBucketOwner?: string;

		/** Required */
		SourceBucket: string;
		ManifestOutputLocation?: S3ManifestOutputLocation;
		Filter?: JobManifestGeneratorFilter;

		/** Required */
		EnableManifestOutput: boolean;
	}

	/** The container for the service that will create the S3 manifest. */
	export interface S3JobManifestGeneratorFormProperties {
		ExpectedBucketOwner: FormControl<string | null | undefined>,

		/** Required */
		SourceBucket: FormControl<string | null | undefined>,

		/** Required */
		EnableManifestOutput: FormControl<boolean | null | undefined>,
	}
	export function CreateS3JobManifestGeneratorFormGroup() {
		return new FormGroup<S3JobManifestGeneratorFormProperties>({
			ExpectedBucketOwner: new FormControl<string | null | undefined>(undefined),
			SourceBucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EnableManifestOutput: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Location details for where the generated manifest should be written. */
	export interface S3ManifestOutputLocation {
		ExpectedManifestBucketOwner?: string;

		/** Required */
		Bucket: string;
		ManifestPrefix?: string;
		ManifestEncryption?: GeneratedManifestEncryption;

		/** Required */
		ManifestFormat: GeneratedManifestFormat;
	}

	/** Location details for where the generated manifest should be written. */
	export interface S3ManifestOutputLocationFormProperties {
		ExpectedManifestBucketOwner: FormControl<string | null | undefined>,

		/** Required */
		Bucket: FormControl<string | null | undefined>,
		ManifestPrefix: FormControl<string | null | undefined>,

		/** Required */
		ManifestFormat: FormControl<GeneratedManifestFormat | null | undefined>,
	}
	export function CreateS3ManifestOutputLocationFormGroup() {
		return new FormGroup<S3ManifestOutputLocationFormProperties>({
			ExpectedManifestBucketOwner: new FormControl<string | null | undefined>(undefined),
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ManifestPrefix: new FormControl<string | null | undefined>(undefined),
			ManifestFormat: new FormControl<GeneratedManifestFormat | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The encryption configuration to use when storing the generated manifest. */
	export interface GeneratedManifestEncryption {
		SSES3?: SSES3Encryption;
		SSEKMS?: SSEKMSEncryption;
	}

	/** The encryption configuration to use when storing the generated manifest. */
	export interface GeneratedManifestEncryptionFormProperties {
	}
	export function CreateGeneratedManifestEncryptionFormGroup() {
		return new FormGroup<GeneratedManifestEncryptionFormProperties>({
		});

	}


	/** Configuration for the use of SSE-S3 to encrypt generated manifest objects. */
	export interface SSES3Encryption {
	}

	/** Configuration for the use of SSE-S3 to encrypt generated manifest objects. */
	export interface SSES3EncryptionFormProperties {
	}
	export function CreateSSES3EncryptionFormGroup() {
		return new FormGroup<SSES3EncryptionFormProperties>({
		});

	}


	/** Configuration for the use of SSE-KMS to encrypt generated manifest objects. */
	export interface SSEKMSEncryption {

		/** Required */
		KeyId: string;
	}

	/** Configuration for the use of SSE-KMS to encrypt generated manifest objects. */
	export interface SSEKMSEncryptionFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateSSEKMSEncryptionFormGroup() {
		return new FormGroup<SSEKMSEncryptionFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GeneratedManifestFormat { S3InventoryReport_CSV_20211130 = 0 }


	/** The filter used to describe a set of objects for the job's manifest. */
	export interface JobManifestGeneratorFilter {
		EligibleForReplication?: boolean | null;
		CreatedAfter?: Date;
		CreatedBefore?: Date;
		ObjectReplicationStatuses?: Array<ReplicationStatus>;
	}

	/** The filter used to describe a set of objects for the job's manifest. */
	export interface JobManifestGeneratorFilterFormProperties {
		EligibleForReplication: FormControl<boolean | null | undefined>,
		CreatedAfter: FormControl<Date | null | undefined>,
		CreatedBefore: FormControl<Date | null | undefined>,
	}
	export function CreateJobManifestGeneratorFilterFormGroup() {
		return new FormGroup<JobManifestGeneratorFilterFormProperties>({
			EligibleForReplication: new FormControl<boolean | null | undefined>(undefined),
			CreatedAfter: new FormControl<Date | null | undefined>(undefined),
			CreatedBefore: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ReplicationStatus { COMPLETED = 0, FAILED = 1, REPLICA = 2, NONE = 3 }

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

	export interface CreateMultiRegionAccessPointResult {
		RequestTokenARN?: string;
	}
	export interface CreateMultiRegionAccessPointResultFormProperties {
		RequestTokenARN: FormControl<string | null | undefined>,
	}
	export function CreateCreateMultiRegionAccessPointResultFormGroup() {
		return new FormGroup<CreateMultiRegionAccessPointResultFormProperties>({
			RequestTokenARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This data type is not supported for Amazon S3 on Outposts.</p> */
	export interface PublicAccessBlockConfiguration {
		BlockPublicAcls?: boolean | null;
		IgnorePublicAcls?: boolean | null;
		BlockPublicPolicy?: boolean | null;
		RestrictPublicBuckets?: boolean | null;
	}

	/** <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This data type is not supported for Amazon S3 on Outposts.</p> */
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

	export interface DeleteMultiRegionAccessPointResult {
		RequestTokenARN?: string;
	}
	export interface DeleteMultiRegionAccessPointResultFormProperties {
		RequestTokenARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMultiRegionAccessPointResultFormGroup() {
		return new FormGroup<DeleteMultiRegionAccessPointResultFormProperties>({
			RequestTokenARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteStorageLensConfigurationTaggingResult {
	}
	export interface DeleteStorageLensConfigurationTaggingResultFormProperties {
	}
	export function CreateDeleteStorageLensConfigurationTaggingResultFormGroup() {
		return new FormGroup<DeleteStorageLensConfigurationTaggingResultFormProperties>({
		});

	}

	export interface DescribeJobResult {
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
		JobId?: string;
		ConfirmationRequired?: boolean | null;
		Description?: string;
		JobArn?: string;
		Status?: JobStatus;
		Manifest?: JobManifest;
		Operation?: JobOperation;
		Priority?: number | null;
		ProgressSummary?: JobProgressSummary;
		StatusUpdateReason?: string;
		FailureReasons?: Array<JobFailure>;
		Report?: JobReport;
		CreationTime?: Date;
		TerminationDate?: Date;
		RoleArn?: string;
		SuspendedDate?: Date;
		SuspendedCause?: string;
		ManifestGenerator?: JobManifestGenerator;
		GeneratedManifestDescriptor?: S3GeneratedManifestDescriptor;
	}

	/** A container element for the job configuration and status information returned by a <code>Describe Job</code> request. */
	export interface JobDescriptorFormProperties {
		JobId: FormControl<string | null | undefined>,
		ConfirmationRequired: FormControl<boolean | null | undefined>,
		Description: FormControl<string | null | undefined>,
		JobArn: FormControl<string | null | undefined>,
		Status: FormControl<JobStatus | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		StatusUpdateReason: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		TerminationDate: FormControl<Date | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		SuspendedDate: FormControl<Date | null | undefined>,
		SuspendedCause: FormControl<string | null | undefined>,
	}
	export function CreateJobDescriptorFormGroup() {
		return new FormGroup<JobDescriptorFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			ConfirmationRequired: new FormControl<boolean | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			JobArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<JobStatus | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			StatusUpdateReason: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			TerminationDate: new FormControl<Date | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			SuspendedDate: new FormControl<Date | null | undefined>(undefined),
			SuspendedCause: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobStatus { Active = 0, Cancelled = 1, Cancelling = 2, Complete = 3, Completing = 4, Failed = 5, Failing = 6, New = 7, Paused = 8, Pausing = 9, Preparing = 10, Ready = 11, Suspended = 12 }


	/** Contains the configuration information for a job's manifest. */
	export interface JobManifest {

		/** Required */
		Spec: JobManifestSpec;

		/** Required */
		Location: JobManifestLocation;
	}

	/** Contains the configuration information for a job's manifest. */
	export interface JobManifestFormProperties {
	}
	export function CreateJobManifestFormGroup() {
		return new FormGroup<JobManifestFormProperties>({
		});

	}


	/** The operation that you want this job to perform on every object listed in the manifest. For more information about the available operations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Operations</a> in the <i>Amazon S3 User Guide</i>. */
	export interface JobOperation {
		LambdaInvoke?: LambdaInvokeOperation;
		S3PutObjectCopy?: S3CopyObjectOperation;
		S3PutObjectAcl?: S3SetObjectAclOperation;
		S3PutObjectTagging?: S3SetObjectTaggingOperation;
		S3DeleteObjectTagging?: S3DeleteObjectTaggingOperation;
		S3InitiateRestoreObject?: S3InitiateRestoreObjectOperation;

		/** Contains the configuration for an S3 Object Lock legal hold operation that an S3 Batch Operations job passes to every object to the underlying <code>PutObjectLegalHold</code> API operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-legal-hold.html">Using S3 Object Lock legal hold with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>. */
		S3PutObjectLegalHold?: S3SetObjectLegalHoldOperation;

		/** Contains the configuration parameters for the Object Lock retention action for an S3 Batch Operations job. Batch Operations passes every object to the underlying <code>PutObjectRetention</code> API operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>. */
		S3PutObjectRetention?: S3SetObjectRetentionOperation;
		S3ReplicateObject?: S3ReplicateObjectOperation;
	}

	/** The operation that you want this job to perform on every object listed in the manifest. For more information about the available operations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Operations</a> in the <i>Amazon S3 User Guide</i>. */
	export interface JobOperationFormProperties {
	}
	export function CreateJobOperationFormGroup() {
		return new FormGroup<JobOperationFormProperties>({
		});

	}


	/** Describes the total number of tasks that the specified job has started, the number of tasks that succeeded, and the number of tasks that failed. */
	export interface JobProgressSummary {
		TotalNumberOfTasks?: number | null;
		NumberOfTasksSucceeded?: number | null;
		NumberOfTasksFailed?: number | null;
		Timers?: JobTimers;
	}

	/** Describes the total number of tasks that the specified job has started, the number of tasks that succeeded, and the number of tasks that failed. */
	export interface JobProgressSummaryFormProperties {
		TotalNumberOfTasks: FormControl<number | null | undefined>,
		NumberOfTasksSucceeded: FormControl<number | null | undefined>,
		NumberOfTasksFailed: FormControl<number | null | undefined>,
	}
	export function CreateJobProgressSummaryFormGroup() {
		return new FormGroup<JobProgressSummaryFormProperties>({
			TotalNumberOfTasks: new FormControl<number | null | undefined>(undefined),
			NumberOfTasksSucceeded: new FormControl<number | null | undefined>(undefined),
			NumberOfTasksFailed: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides timing details for the job. */
	export interface JobTimers {
		ElapsedTimeInActiveSeconds?: number | null;
	}

	/** Provides timing details for the job. */
	export interface JobTimersFormProperties {
		ElapsedTimeInActiveSeconds: FormControl<number | null | undefined>,
	}
	export function CreateJobTimersFormGroup() {
		return new FormGroup<JobTimersFormProperties>({
			ElapsedTimeInActiveSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** If this job failed, this element indicates why the job failed. */
	export interface JobFailure {
		FailureCode?: string;
		FailureReason?: string;
	}

	/** If this job failed, this element indicates why the job failed. */
	export interface JobFailureFormProperties {
		FailureCode: FormControl<string | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateJobFailureFormGroup() {
		return new FormGroup<JobFailureFormProperties>({
			FailureCode: new FormControl<string | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the configuration parameters for a job-completion report. */
	export interface JobReport {
		Bucket?: string;
		Format?: JobReportFormat;

		/** Required */
		Enabled: boolean;
		Prefix?: string;
		ReportScope?: JobReportScope;
	}

	/** Contains the configuration parameters for a job-completion report. */
	export interface JobReportFormProperties {
		Bucket: FormControl<string | null | undefined>,
		Format: FormControl<JobReportFormat | null | undefined>,

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
		ReportScope: FormControl<JobReportScope | null | undefined>,
	}
	export function CreateJobReportFormGroup() {
		return new FormGroup<JobReportFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined),
			Format: new FormControl<JobReportFormat | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Prefix: new FormControl<string | null | undefined>(undefined),
			ReportScope: new FormControl<JobReportScope | null | undefined>(undefined),
		});

	}


	/** Configures the type of the job's ManifestGenerator. */
	export interface JobManifestGenerator {
		S3JobManifestGenerator?: S3JobManifestGenerator;
	}

	/** Configures the type of the job's ManifestGenerator. */
	export interface JobManifestGeneratorFormProperties {
	}
	export function CreateJobManifestGeneratorFormGroup() {
		return new FormGroup<JobManifestGeneratorFormProperties>({
		});

	}


	/** Describes the specified job's generated manifest. Batch Operations jobs created with a ManifestGenerator populate details of this descriptor after execution of the ManifestGenerator. */
	export interface S3GeneratedManifestDescriptor {
		Format?: GeneratedManifestFormat;

		/** Contains the information required to locate a manifest object. */
		Location?: JobManifestLocation;
	}

	/** Describes the specified job's generated manifest. Batch Operations jobs created with a ManifestGenerator populate details of this descriptor after execution of the ManifestGenerator. */
	export interface S3GeneratedManifestDescriptorFormProperties {
		Format: FormControl<GeneratedManifestFormat | null | undefined>,
	}
	export function CreateS3GeneratedManifestDescriptorFormGroup() {
		return new FormGroup<S3GeneratedManifestDescriptorFormProperties>({
			Format: new FormControl<GeneratedManifestFormat | null | undefined>(undefined),
		});

	}

	export interface DescribeMultiRegionAccessPointOperationResult {
		AsyncOperation?: AsyncOperation;
	}
	export interface DescribeMultiRegionAccessPointOperationResultFormProperties {
	}
	export function CreateDescribeMultiRegionAccessPointOperationResultFormGroup() {
		return new FormGroup<DescribeMultiRegionAccessPointOperationResultFormProperties>({
		});

	}


	/** A container for the information about an asynchronous operation. */
	export interface AsyncOperation {
		CreationTime?: Date;
		Operation?: AsyncOperationName;
		RequestTokenARN?: string;
		RequestParameters?: AsyncRequestParameters;
		RequestStatus?: string;
		ResponseDetails?: AsyncResponseDetails;
	}

	/** A container for the information about an asynchronous operation. */
	export interface AsyncOperationFormProperties {
		CreationTime: FormControl<Date | null | undefined>,
		Operation: FormControl<AsyncOperationName | null | undefined>,
		RequestTokenARN: FormControl<string | null | undefined>,
		RequestStatus: FormControl<string | null | undefined>,
	}
	export function CreateAsyncOperationFormGroup() {
		return new FormGroup<AsyncOperationFormProperties>({
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			Operation: new FormControl<AsyncOperationName | null | undefined>(undefined),
			RequestTokenARN: new FormControl<string | null | undefined>(undefined),
			RequestStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AsyncOperationName { CreateMultiRegionAccessPoint = 0, DeleteMultiRegionAccessPoint = 1, PutMultiRegionAccessPointPolicy = 2 }


	/** A container for the request parameters associated with an asynchronous request. */
	export interface AsyncRequestParameters {
		CreateMultiRegionAccessPointRequest?: CreateMultiRegionAccessPointInput;
		DeleteMultiRegionAccessPointRequest?: DeleteMultiRegionAccessPointInput;
		PutMultiRegionAccessPointPolicyRequest?: PutMultiRegionAccessPointPolicyInput;
	}

	/** A container for the request parameters associated with an asynchronous request. */
	export interface AsyncRequestParametersFormProperties {
	}
	export function CreateAsyncRequestParametersFormGroup() {
		return new FormGroup<AsyncRequestParametersFormProperties>({
		});

	}


	/** A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> request.  */
	export interface CreateMultiRegionAccessPointInput {

		/** Required */
		Name: string;

		/** <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This data type is not supported for Amazon S3 on Outposts.</p> */
		PublicAccessBlock?: PublicAccessBlockConfiguration;

		/** Required */
		Regions: Array<string>;
	}

	/** A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> request.  */
	export interface CreateMultiRegionAccessPointInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateMultiRegionAccessPointInputFormGroup() {
		return new FormGroup<CreateMultiRegionAccessPointInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> request. */
	export interface DeleteMultiRegionAccessPointInput {

		/** Required */
		Name: string;
	}

	/** A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> request. */
	export interface DeleteMultiRegionAccessPointInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMultiRegionAccessPointInputFormGroup() {
		return new FormGroup<DeleteMultiRegionAccessPointInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPoint.html">PutMultiRegionAccessPoint</a> request. */
	export interface PutMultiRegionAccessPointPolicyInput {

		/** Required */
		Name: string;

		/** Required */
		Policy: string;
	}

	/** A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPoint.html">PutMultiRegionAccessPoint</a> request. */
	export interface PutMultiRegionAccessPointPolicyInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutMultiRegionAccessPointPolicyInputFormGroup() {
		return new FormGroup<PutMultiRegionAccessPointPolicyInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A container for the response details that are returned when querying about an asynchronous request. */
	export interface AsyncResponseDetails {
		MultiRegionAccessPointDetails?: MultiRegionAccessPointsAsyncResponse;
		ErrorDetails?: AsyncErrorDetails;
	}

	/** A container for the response details that are returned when querying about an asynchronous request. */
	export interface AsyncResponseDetailsFormProperties {
	}
	export function CreateAsyncResponseDetailsFormGroup() {
		return new FormGroup<AsyncResponseDetailsFormProperties>({
		});

	}


	/** The Multi-Region Access Point details that are returned when querying about an asynchronous request. */
	export interface MultiRegionAccessPointsAsyncResponse {
		Regions?: Array<string>;
	}

	/** The Multi-Region Access Point details that are returned when querying about an asynchronous request. */
	export interface MultiRegionAccessPointsAsyncResponseFormProperties {
	}
	export function CreateMultiRegionAccessPointsAsyncResponseFormGroup() {
		return new FormGroup<MultiRegionAccessPointsAsyncResponseFormProperties>({
		});

	}


	/** Error details for the failed asynchronous operation. */
	export interface AsyncErrorDetails {
		Code?: string;
		Message?: string;
		Resource?: string;
		RequestId?: string;
	}

	/** Error details for the failed asynchronous operation. */
	export interface AsyncErrorDetailsFormProperties {
		Code: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		Resource: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateAsyncErrorDetailsFormGroup() {
		return new FormGroup<AsyncErrorDetailsFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			Resource: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAccessPointResult {
		Name?: string;
		Bucket?: string;
		NetworkOrigin?: NetworkOrigin;
		VpcConfiguration?: VpcConfiguration;

		/** <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This data type is not supported for Amazon S3 on Outposts.</p> */
		PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
		CreationDate?: Date;
		Alias?: string;
		AccessPointArn?: string;
		Endpoints?: Endpoints;
		BucketAccountId?: string;
	}
	export interface GetAccessPointResultFormProperties {
		Name: FormControl<string | null | undefined>,
		Bucket: FormControl<string | null | undefined>,
		NetworkOrigin: FormControl<NetworkOrigin | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Alias: FormControl<string | null | undefined>,
		AccessPointArn: FormControl<string | null | undefined>,
		BucketAccountId: FormControl<string | null | undefined>,
	}
	export function CreateGetAccessPointResultFormGroup() {
		return new FormGroup<GetAccessPointResultFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Bucket: new FormControl<string | null | undefined>(undefined),
			NetworkOrigin: new FormControl<NetworkOrigin | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Alias: new FormControl<string | null | undefined>(undefined),
			AccessPointArn: new FormControl<string | null | undefined>(undefined),
			BucketAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NetworkOrigin { Internet = 0, VPC = 1 }


	/** The virtual private cloud (VPC) configuration for an access point. */
	export interface VpcConfiguration {

		/** Required */
		VpcId: string;
	}

	/** The virtual private cloud (VPC) configuration for an access point. */
	export interface VpcConfigurationFormProperties {

		/** Required */
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateVpcConfigurationFormGroup() {
		return new FormGroup<VpcConfigurationFormProperties>({
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Endpoints {
	}
	export interface EndpointsFormProperties {
	}
	export function CreateEndpointsFormGroup() {
		return new FormGroup<EndpointsFormProperties>({
		});

	}

	export interface GetAccessPointConfigurationForObjectLambdaResult {
		Configuration?: ObjectLambdaConfiguration;
	}
	export interface GetAccessPointConfigurationForObjectLambdaResultFormProperties {
	}
	export function CreateGetAccessPointConfigurationForObjectLambdaResultFormGroup() {
		return new FormGroup<GetAccessPointConfigurationForObjectLambdaResultFormProperties>({
		});

	}


	/** A configuration used when creating an Object Lambda Access Point. */
	export interface ObjectLambdaConfiguration {

		/** Required */
		SupportingAccessPoint: string;
		CloudWatchMetricsEnabled?: boolean | null;
		AllowedFeatures?: Array<string>;

		/** Required */
		TransformationConfigurations: Array<string>;
	}

	/** A configuration used when creating an Object Lambda Access Point. */
	export interface ObjectLambdaConfigurationFormProperties {

		/** Required */
		SupportingAccessPoint: FormControl<string | null | undefined>,
		CloudWatchMetricsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateObjectLambdaConfigurationFormGroup() {
		return new FormGroup<ObjectLambdaConfigurationFormProperties>({
			SupportingAccessPoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CloudWatchMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetAccessPointForObjectLambdaResult {
		Name?: string;
		PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
		CreationDate?: Date;
		Alias?: ObjectLambdaAccessPointAlias;
	}
	export interface GetAccessPointForObjectLambdaResultFormProperties {
		Name: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateGetAccessPointForObjectLambdaResultFormGroup() {
		return new FormGroup<GetAccessPointForObjectLambdaResultFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetAccessPointPolicyResult {
		Policy?: string;
	}
	export interface GetAccessPointPolicyResultFormProperties {
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateGetAccessPointPolicyResultFormGroup() {
		return new FormGroup<GetAccessPointPolicyResultFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAccessPointPolicyForObjectLambdaResult {
		Policy?: string;
	}
	export interface GetAccessPointPolicyForObjectLambdaResultFormProperties {
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateGetAccessPointPolicyForObjectLambdaResultFormGroup() {
		return new FormGroup<GetAccessPointPolicyForObjectLambdaResultFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAccessPointPolicyStatusResult {
		PolicyStatus?: PolicyStatus;
	}
	export interface GetAccessPointPolicyStatusResultFormProperties {
	}
	export function CreateGetAccessPointPolicyStatusResultFormGroup() {
		return new FormGroup<GetAccessPointPolicyStatusResultFormProperties>({
		});

	}


	/** Indicates whether this access point policy is public. For more information about how Amazon S3 evaluates policies to determine whether they are public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.  */
	export interface PolicyStatus {
		IsPublic?: boolean | null;
	}

	/** Indicates whether this access point policy is public. For more information about how Amazon S3 evaluates policies to determine whether they are public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.  */
	export interface PolicyStatusFormProperties {
		IsPublic: FormControl<boolean | null | undefined>,
	}
	export function CreatePolicyStatusFormGroup() {
		return new FormGroup<PolicyStatusFormProperties>({
			IsPublic: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetAccessPointPolicyStatusForObjectLambdaResult {

		/** Indicates whether this access point policy is public. For more information about how Amazon S3 evaluates policies to determine whether they are public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>. */
		PolicyStatus?: PolicyStatus;
	}
	export interface GetAccessPointPolicyStatusForObjectLambdaResultFormProperties {
	}
	export function CreateGetAccessPointPolicyStatusForObjectLambdaResultFormGroup() {
		return new FormGroup<GetAccessPointPolicyStatusForObjectLambdaResultFormProperties>({
		});

	}

	export interface GetBucketResult {
		Bucket?: string;
		PublicAccessBlockEnabled?: boolean | null;
		CreationDate?: Date;
	}
	export interface GetBucketResultFormProperties {
		Bucket: FormControl<string | null | undefined>,
		PublicAccessBlockEnabled: FormControl<boolean | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateGetBucketResultFormGroup() {
		return new FormGroup<GetBucketResultFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined),
			PublicAccessBlockEnabled: new FormControl<boolean | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetBucketLifecycleConfigurationResult {
		Rules?: Array<string>;
	}
	export interface GetBucketLifecycleConfigurationResultFormProperties {
	}
	export function CreateGetBucketLifecycleConfigurationResultFormGroup() {
		return new FormGroup<GetBucketLifecycleConfigurationResultFormProperties>({
		});

	}

	export interface GetBucketPolicyResult {
		Policy?: string;
	}
	export interface GetBucketPolicyResultFormProperties {
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateGetBucketPolicyResultFormGroup() {
		return new FormGroup<GetBucketPolicyResultFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBucketReplicationResult {
		ReplicationConfiguration?: ReplicationConfiguration;
	}
	export interface GetBucketReplicationResultFormProperties {
	}
	export function CreateGetBucketReplicationResultFormGroup() {
		return new FormGroup<GetBucketReplicationResultFormProperties>({
		});

	}


	/** A container for one or more replication rules. A replication configuration must have at least one rule and you can add up to 100 rules. The maximum size of a replication configuration is 128 KB. */
	export interface ReplicationConfiguration {

		/** Required */
		Role: string;

		/** Required */
		Rules: Array<string>;
	}

	/** A container for one or more replication rules. A replication configuration must have at least one rule and you can add up to 100 rules. The maximum size of a replication configuration is 128 KB. */
	export interface ReplicationConfigurationFormProperties {

		/** Required */
		Role: FormControl<string | null | undefined>,
	}
	export function CreateReplicationConfigurationFormGroup() {
		return new FormGroup<ReplicationConfigurationFormProperties>({
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBucketTaggingResult {

		/** Required */
		TagSet: Array<S3Tag>;
	}
	export interface GetBucketTaggingResultFormProperties {
	}
	export function CreateGetBucketTaggingResultFormGroup() {
		return new FormGroup<GetBucketTaggingResultFormProperties>({
		});

	}

	export interface GetBucketVersioningResult {
		Status?: BucketVersioningStatus;
		MFADelete?: MFADeleteStatus;
	}
	export interface GetBucketVersioningResultFormProperties {
		Status: FormControl<BucketVersioningStatus | null | undefined>,
		MFADelete: FormControl<MFADeleteStatus | null | undefined>,
	}
	export function CreateGetBucketVersioningResultFormGroup() {
		return new FormGroup<GetBucketVersioningResultFormProperties>({
			Status: new FormControl<BucketVersioningStatus | null | undefined>(undefined),
			MFADelete: new FormControl<MFADeleteStatus | null | undefined>(undefined),
		});

	}

	export enum BucketVersioningStatus { Enabled = 0, Suspended = 1 }

	export enum MFADeleteStatus { Enabled = 0, Disabled = 1 }

	export interface GetJobTaggingResult {
		Tags?: Array<S3Tag>;
	}
	export interface GetJobTaggingResultFormProperties {
	}
	export function CreateGetJobTaggingResultFormGroup() {
		return new FormGroup<GetJobTaggingResultFormProperties>({
		});

	}

	export interface GetMultiRegionAccessPointResult {
		AccessPoint?: MultiRegionAccessPointReport;
	}
	export interface GetMultiRegionAccessPointResultFormProperties {
	}
	export function CreateGetMultiRegionAccessPointResultFormGroup() {
		return new FormGroup<GetMultiRegionAccessPointResultFormProperties>({
		});

	}


	/** A collection of statuses for a Multi-Region Access Point in the various Regions it supports. */
	export interface MultiRegionAccessPointReport {
		Name?: string;
		Alias?: string;
		CreatedAt?: Date;

		/** <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This data type is not supported for Amazon S3 on Outposts.</p> */
		PublicAccessBlock?: PublicAccessBlockConfiguration;
		Status?: MultiRegionAccessPointStatus;
		Regions?: Array<string>;
	}

	/** A collection of statuses for a Multi-Region Access Point in the various Regions it supports. */
	export interface MultiRegionAccessPointReportFormProperties {
		Name: FormControl<string | null | undefined>,
		Alias: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		Status: FormControl<MultiRegionAccessPointStatus | null | undefined>,
	}
	export function CreateMultiRegionAccessPointReportFormGroup() {
		return new FormGroup<MultiRegionAccessPointReportFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Alias: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<MultiRegionAccessPointStatus | null | undefined>(undefined),
		});

	}

	export enum MultiRegionAccessPointStatus { READY = 0, INCONSISTENT_ACROSS_REGIONS = 1, CREATING = 2, PARTIALLY_CREATED = 3, PARTIALLY_DELETED = 4, DELETING = 5 }

	export interface GetMultiRegionAccessPointPolicyResult {
		Policy?: MultiRegionAccessPointPolicyDocument;
	}
	export interface GetMultiRegionAccessPointPolicyResultFormProperties {
	}
	export function CreateGetMultiRegionAccessPointPolicyResultFormGroup() {
		return new FormGroup<GetMultiRegionAccessPointPolicyResultFormProperties>({
		});

	}


	/** <p>The Multi-Region Access Point access control policy.</p> <p>When you update the policy, the update is first listed as the proposed policy. After the update is finished and all Regions have been updated, the proposed policy is listed as the established policy. If both policies have the same version number, the proposed policy is the established policy.</p> */
	export interface MultiRegionAccessPointPolicyDocument {
		Established?: EstablishedMultiRegionAccessPointPolicy;
		Proposed?: ProposedMultiRegionAccessPointPolicy;
	}

	/** <p>The Multi-Region Access Point access control policy.</p> <p>When you update the policy, the update is first listed as the proposed policy. After the update is finished and all Regions have been updated, the proposed policy is listed as the established policy. If both policies have the same version number, the proposed policy is the established policy.</p> */
	export interface MultiRegionAccessPointPolicyDocumentFormProperties {
	}
	export function CreateMultiRegionAccessPointPolicyDocumentFormGroup() {
		return new FormGroup<MultiRegionAccessPointPolicyDocumentFormProperties>({
		});

	}


	/** <p>The last established access control policy for a Multi-Region Access Point.</p> <p>When you update the policy, the update is first listed as the proposed policy. After the update is finished and all Regions have been updated, the proposed policy is listed as the established policy. If both policies have the same version number, the proposed policy is the established policy.</p> */
	export interface EstablishedMultiRegionAccessPointPolicy {
		Policy?: string;
	}

	/** <p>The last established access control policy for a Multi-Region Access Point.</p> <p>When you update the policy, the update is first listed as the proposed policy. After the update is finished and all Regions have been updated, the proposed policy is listed as the established policy. If both policies have the same version number, the proposed policy is the established policy.</p> */
	export interface EstablishedMultiRegionAccessPointPolicyFormProperties {
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateEstablishedMultiRegionAccessPointPolicyFormGroup() {
		return new FormGroup<EstablishedMultiRegionAccessPointPolicyFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The proposed access control policy for the Multi-Region Access Point.</p> <p>When you update the policy, the update is first listed as the proposed policy. After the update is finished and all Regions have been updated, the proposed policy is listed as the established policy. If both policies have the same version number, the proposed policy is the established policy.</p> */
	export interface ProposedMultiRegionAccessPointPolicy {
		Policy?: string;
	}

	/** <p>The proposed access control policy for the Multi-Region Access Point.</p> <p>When you update the policy, the update is first listed as the proposed policy. After the update is finished and all Regions have been updated, the proposed policy is listed as the established policy. If both policies have the same version number, the proposed policy is the established policy.</p> */
	export interface ProposedMultiRegionAccessPointPolicyFormProperties {
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateProposedMultiRegionAccessPointPolicyFormGroup() {
		return new FormGroup<ProposedMultiRegionAccessPointPolicyFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMultiRegionAccessPointPolicyStatusResult {

		/** Indicates whether this access point policy is public. For more information about how Amazon S3 evaluates policies to determine whether they are public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>. */
		Established?: PolicyStatus;
	}
	export interface GetMultiRegionAccessPointPolicyStatusResultFormProperties {
	}
	export function CreateGetMultiRegionAccessPointPolicyStatusResultFormGroup() {
		return new FormGroup<GetMultiRegionAccessPointPolicyStatusResultFormProperties>({
		});

	}

	export interface GetMultiRegionAccessPointRoutesResult {
		Mrap?: string;
		Routes?: Array<string>;
	}
	export interface GetMultiRegionAccessPointRoutesResultFormProperties {
		Mrap: FormControl<string | null | undefined>,
	}
	export function CreateGetMultiRegionAccessPointRoutesResultFormGroup() {
		return new FormGroup<GetMultiRegionAccessPointRoutesResultFormProperties>({
			Mrap: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPublicAccessBlockOutput {
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

	export interface GetStorageLensConfigurationResult {
		StorageLensConfiguration?: StorageLensConfiguration;
	}
	export interface GetStorageLensConfigurationResultFormProperties {
	}
	export function CreateGetStorageLensConfigurationResultFormGroup() {
		return new FormGroup<GetStorageLensConfigurationResultFormProperties>({
		});

	}


	/** A container for the Amazon S3 Storage Lens configuration. */
	export interface StorageLensConfiguration {

		/** Required */
		Id: string;

		/** Required */
		AccountLevel: AccountLevel;
		Include?: Include;
		Exclude?: Exclude;
		DataExport?: StorageLensDataExport;

		/** Required */
		IsEnabled: boolean;
		AwsOrg?: StorageLensAwsOrg;
		StorageLensArn?: string;
	}

	/** A container for the Amazon S3 Storage Lens configuration. */
	export interface StorageLensConfigurationFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		IsEnabled: FormControl<boolean | null | undefined>,
		StorageLensArn: FormControl<string | null | undefined>,
	}
	export function CreateStorageLensConfigurationFormGroup() {
		return new FormGroup<StorageLensConfigurationFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			StorageLensArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A container for the account-level Amazon S3 Storage Lens configuration.</p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p> */
	export interface AccountLevel {
		ActivityMetrics?: ActivityMetrics;

		/** Required */
		BucketLevel: BucketLevel;
		AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics;
		AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics;
		DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics;
	}

	/** <p>A container for the account-level Amazon S3 Storage Lens configuration.</p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p> */
	export interface AccountLevelFormProperties {
	}
	export function CreateAccountLevelFormGroup() {
		return new FormGroup<AccountLevelFormProperties>({
		});

	}


	/** <p>The container element for Amazon S3 Storage Lens activity metrics. Activity metrics show details about how your storage is requested, such as requests (for example, All requests, Get requests, Put requests), bytes uploaded or downloaded, and errors.</p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p> */
	export interface ActivityMetrics {
		IsEnabled?: boolean | null;
	}

	/** <p>The container element for Amazon S3 Storage Lens activity metrics. Activity metrics show details about how your storage is requested, such as requests (for example, All requests, Get requests, Put requests), bytes uploaded or downloaded, and errors.</p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p> */
	export interface ActivityMetricsFormProperties {
		IsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateActivityMetricsFormGroup() {
		return new FormGroup<ActivityMetricsFormProperties>({
			IsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>A container for the bucket-level configuration for Amazon S3 Storage Lens.</p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p> */
	export interface BucketLevel {
		ActivityMetrics?: ActivityMetrics;
		PrefixLevel?: PrefixLevel;
		AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics;
		AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics;
		DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics;
	}

	/** <p>A container for the bucket-level configuration for Amazon S3 Storage Lens.</p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p> */
	export interface BucketLevelFormProperties {
	}
	export function CreateBucketLevelFormGroup() {
		return new FormGroup<BucketLevelFormProperties>({
		});

	}


	/** A container for the prefix-level configuration. */
	export interface PrefixLevel {

		/** Required */
		StorageMetrics: PrefixLevelStorageMetrics;
	}

	/** A container for the prefix-level configuration. */
	export interface PrefixLevelFormProperties {
	}
	export function CreatePrefixLevelFormGroup() {
		return new FormGroup<PrefixLevelFormProperties>({
		});

	}


	/** A container for the prefix-level storage metrics for S3 Storage Lens. */
	export interface PrefixLevelStorageMetrics {
		IsEnabled?: boolean | null;

		/** <p/> */
		SelectionCriteria?: SelectionCriteria;
	}

	/** A container for the prefix-level storage metrics for S3 Storage Lens. */
	export interface PrefixLevelStorageMetricsFormProperties {
		IsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePrefixLevelStorageMetricsFormGroup() {
		return new FormGroup<PrefixLevelStorageMetricsFormProperties>({
			IsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface SelectionCriteria {
		Delimiter?: string;
		MaxDepth?: number | null;
		MinStorageBytesPercentage?: number | null;
	}

	/** <p/> */
	export interface SelectionCriteriaFormProperties {
		Delimiter: FormControl<string | null | undefined>,
		MaxDepth: FormControl<number | null | undefined>,
		MinStorageBytesPercentage: FormControl<number | null | undefined>,
	}
	export function CreateSelectionCriteriaFormGroup() {
		return new FormGroup<SelectionCriteriaFormProperties>({
			Delimiter: new FormControl<string | null | undefined>(undefined),
			MaxDepth: new FormControl<number | null | undefined>(undefined),
			MinStorageBytesPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>The container element for Amazon S3 Storage Lens advanced cost-optimization metrics. Advanced cost-optimization metrics provide insights that you can use to manage and optimize your storage costs, for example, lifecycle rule counts for transitions, expirations, and incomplete multipart uploads.</p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p> */
	export interface AdvancedCostOptimizationMetrics {
		IsEnabled?: boolean | null;
	}

	/** <p>The container element for Amazon S3 Storage Lens advanced cost-optimization metrics. Advanced cost-optimization metrics provide insights that you can use to manage and optimize your storage costs, for example, lifecycle rule counts for transitions, expirations, and incomplete multipart uploads.</p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p> */
	export interface AdvancedCostOptimizationMetricsFormProperties {
		IsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAdvancedCostOptimizationMetricsFormGroup() {
		return new FormGroup<AdvancedCostOptimizationMetricsFormProperties>({
			IsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>The container element for Amazon S3 Storage Lens advanced data-protection metrics. Advanced data-protection metrics provide insights that you can use to perform audits and protect your data, for example replication rule counts within and across Regions.</p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p> */
	export interface AdvancedDataProtectionMetrics {
		IsEnabled?: boolean | null;
	}

	/** <p>The container element for Amazon S3 Storage Lens advanced data-protection metrics. Advanced data-protection metrics provide insights that you can use to perform audits and protect your data, for example replication rule counts within and across Regions.</p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p> */
	export interface AdvancedDataProtectionMetricsFormProperties {
		IsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAdvancedDataProtectionMetricsFormGroup() {
		return new FormGroup<AdvancedDataProtectionMetricsFormProperties>({
			IsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>The container element for Amazon S3 Storage Lens detailed status code metrics. Detailed status code metrics generate metrics for HTTP status codes, such as <code>200 OK</code>, <code>403 Forbidden</code>, <code>503 Service Unavailable</code> and others. </p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p> */
	export interface DetailedStatusCodesMetrics {
		IsEnabled?: boolean | null;
	}

	/** <p>The container element for Amazon S3 Storage Lens detailed status code metrics. Detailed status code metrics generate metrics for HTTP status codes, such as <code>200 OK</code>, <code>403 Forbidden</code>, <code>503 Service Unavailable</code> and others. </p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p> */
	export interface DetailedStatusCodesMetricsFormProperties {
		IsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDetailedStatusCodesMetricsFormGroup() {
		return new FormGroup<DetailedStatusCodesMetricsFormProperties>({
			IsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A container for what Amazon S3 Storage Lens configuration includes. */
	export interface Include {
		Buckets?: Array<string>;
		Regions?: Array<string>;
	}

	/** A container for what Amazon S3 Storage Lens configuration includes. */
	export interface IncludeFormProperties {
	}
	export function CreateIncludeFormGroup() {
		return new FormGroup<IncludeFormProperties>({
		});

	}


	/** A container for what Amazon S3 Storage Lens will exclude. */
	export interface Exclude {
		Buckets?: Array<string>;
		Regions?: Array<string>;
	}

	/** A container for what Amazon S3 Storage Lens will exclude. */
	export interface ExcludeFormProperties {
	}
	export function CreateExcludeFormGroup() {
		return new FormGroup<ExcludeFormProperties>({
		});

	}


	/** A container to specify the properties of your S3 Storage Lens metrics export, including the destination, schema, and format. */
	export interface StorageLensDataExport {
		S3BucketDestination?: S3BucketDestination;
		CloudWatchMetrics?: CloudWatchMetrics;
	}

	/** A container to specify the properties of your S3 Storage Lens metrics export, including the destination, schema, and format. */
	export interface StorageLensDataExportFormProperties {
	}
	export function CreateStorageLensDataExportFormGroup() {
		return new FormGroup<StorageLensDataExportFormProperties>({
		});

	}


	/** A container for the bucket where the Amazon S3 Storage Lens metrics export files are located. */
	export interface S3BucketDestination {

		/** Required */
		Format: Format;

		/** Required */
		OutputSchemaVersion: OutputSchemaVersion;

		/** Required */
		AccountId: string;

		/** Required */
		Arn: string;
		Prefix?: string;
		Encryption?: StorageLensDataExportEncryption;
	}

	/** A container for the bucket where the Amazon S3 Storage Lens metrics export files are located. */
	export interface S3BucketDestinationFormProperties {

		/** Required */
		Format: FormControl<Format | null | undefined>,

		/** Required */
		OutputSchemaVersion: FormControl<OutputSchemaVersion | null | undefined>,

		/** Required */
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		Arn: FormControl<string | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
	}
	export function CreateS3BucketDestinationFormGroup() {
		return new FormGroup<S3BucketDestinationFormProperties>({
			Format: new FormControl<Format | null | undefined>(undefined, [Validators.required]),
			OutputSchemaVersion: new FormControl<OutputSchemaVersion | null | undefined>(undefined, [Validators.required]),
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Format { CSV = 0, Parquet = 1 }

	export enum OutputSchemaVersion { V_1 = 0 }


	/** A container for the encryption of the S3 Storage Lens metrics exports. */
	export interface StorageLensDataExportEncryption {
		SSES3?: SSES3;
		SSEKMS?: SSEKMS;
	}

	/** A container for the encryption of the S3 Storage Lens metrics exports. */
	export interface StorageLensDataExportEncryptionFormProperties {
	}
	export function CreateStorageLensDataExportEncryptionFormGroup() {
		return new FormGroup<StorageLensDataExportEncryptionFormProperties>({
		});

	}


	/** <p/> */
	export interface SSES3 {
	}

	/** <p/> */
	export interface SSES3FormProperties {
	}
	export function CreateSSES3FormGroup() {
		return new FormGroup<SSES3FormProperties>({
		});

	}


	/** <p/> */
	export interface SSEKMS {

		/** Required */
		KeyId: string;
	}

	/** <p/> */
	export interface SSEKMSFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateSSEKMSFormGroup() {
		return new FormGroup<SSEKMSFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A container for enabling Amazon CloudWatch publishing for S3 Storage Lens metrics.</p> <p>For more information about publishing S3 Storage Lens metrics to CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_view_metrics_cloudwatch.html">Monitor S3 Storage Lens metrics in CloudWatch</a> in the <i>Amazon S3 User Guide</i>.</p> */
	export interface CloudWatchMetrics {

		/** Required */
		IsEnabled: boolean;
	}

	/** <p>A container for enabling Amazon CloudWatch publishing for S3 Storage Lens metrics.</p> <p>For more information about publishing S3 Storage Lens metrics to CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_view_metrics_cloudwatch.html">Monitor S3 Storage Lens metrics in CloudWatch</a> in the <i>Amazon S3 User Guide</i>.</p> */
	export interface CloudWatchMetricsFormProperties {

		/** Required */
		IsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCloudWatchMetricsFormGroup() {
		return new FormGroup<CloudWatchMetricsFormProperties>({
			IsEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Amazon Web Services organization for your S3 Storage Lens. */
	export interface StorageLensAwsOrg {

		/** Required */
		Arn: string;
	}

	/** The Amazon Web Services organization for your S3 Storage Lens. */
	export interface StorageLensAwsOrgFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateStorageLensAwsOrgFormGroup() {
		return new FormGroup<StorageLensAwsOrgFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetStorageLensConfigurationTaggingResult {
		Tags?: Array<string>;
	}
	export interface GetStorageLensConfigurationTaggingResultFormProperties {
	}
	export function CreateGetStorageLensConfigurationTaggingResultFormGroup() {
		return new FormGroup<GetStorageLensConfigurationTaggingResultFormProperties>({
		});

	}

	export interface ListAccessPointsResult {
		AccessPointList?: Array<string>;
		NextToken?: string;
	}
	export interface ListAccessPointsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccessPointsResultFormGroup() {
		return new FormGroup<ListAccessPointsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAccessPointsForObjectLambdaResult {
		ObjectLambdaAccessPointList?: Array<string>;
		NextToken?: string;
	}
	export interface ListAccessPointsForObjectLambdaResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccessPointsForObjectLambdaResultFormGroup() {
		return new FormGroup<ListAccessPointsForObjectLambdaResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListJobsResult {
		NextToken?: string;
		Jobs?: Array<JobListDescriptor>;
	}
	export interface ListJobsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResultFormGroup() {
		return new FormGroup<ListJobsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the configuration and status information for a single job retrieved as part of a job list. */
	export interface JobListDescriptor {
		JobId?: string;
		Description?: string;
		Operation?: OperationName;
		Priority?: number | null;
		Status?: JobStatus;
		CreationTime?: Date;
		TerminationDate?: Date;
		ProgressSummary?: JobProgressSummary;
	}

	/** Contains the configuration and status information for a single job retrieved as part of a job list. */
	export interface JobListDescriptorFormProperties {
		JobId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Operation: FormControl<OperationName | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		Status: FormControl<JobStatus | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		TerminationDate: FormControl<Date | null | undefined>,
	}
	export function CreateJobListDescriptorFormGroup() {
		return new FormGroup<JobListDescriptorFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<OperationName | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<JobStatus | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			TerminationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum OperationName { LambdaInvoke = 0, S3PutObjectCopy = 1, S3PutObjectAcl = 2, S3PutObjectTagging = 3, S3DeleteObjectTagging = 4, S3InitiateRestoreObject = 5, S3PutObjectLegalHold = 6, S3PutObjectRetention = 7, S3ReplicateObject = 8 }

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

	export interface ListMultiRegionAccessPointsResult {
		AccessPoints?: Array<string>;
		NextToken?: string;
	}
	export interface ListMultiRegionAccessPointsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMultiRegionAccessPointsResultFormGroup() {
		return new FormGroup<ListMultiRegionAccessPointsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRegionalBucketsResult {
		RegionalBucketList?: Array<string>;
		NextToken?: string;
	}
	export interface ListRegionalBucketsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRegionalBucketsResultFormGroup() {
		return new FormGroup<ListRegionalBucketsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStorageLensConfigurationsResult {
		NextToken?: string;
		StorageLensConfigurationList?: Array<string>;
	}
	export interface ListStorageLensConfigurationsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStorageLensConfigurationsResultFormGroup() {
		return new FormGroup<ListStorageLensConfigurationsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MFADelete { Enabled = 0, Disabled = 1 }

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

	export interface PutMultiRegionAccessPointPolicyResult {
		RequestTokenARN?: string;
	}
	export interface PutMultiRegionAccessPointPolicyResultFormProperties {
		RequestTokenARN: FormControl<string | null | undefined>,
	}
	export function CreatePutMultiRegionAccessPointPolicyResultFormGroup() {
		return new FormGroup<PutMultiRegionAccessPointPolicyResultFormProperties>({
			RequestTokenARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface StorageLensTag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** <p/> */
	export interface StorageLensTagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateStorageLensTagFormGroup() {
		return new FormGroup<StorageLensTagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutStorageLensConfigurationTaggingResult {
	}
	export interface PutStorageLensConfigurationTaggingResultFormProperties {
	}
	export function CreatePutStorageLensConfigurationTaggingResultFormGroup() {
		return new FormGroup<PutStorageLensConfigurationTaggingResultFormProperties>({
		});

	}

	export interface SubmitMultiRegionAccessPointRoutesResult {
	}
	export interface SubmitMultiRegionAccessPointRoutesResultFormProperties {
	}
	export function CreateSubmitMultiRegionAccessPointRoutesResultFormGroup() {
		return new FormGroup<SubmitMultiRegionAccessPointRoutesResultFormProperties>({
		});

	}


	/** <p>A structure for a Multi-Region Access Point that indicates where Amazon S3 traffic can be routed. Routes can be either active or passive. Active routes can process Amazon S3 requests through the Multi-Region Access Point, but passive routes are not eligible to process Amazon S3 requests. </p> <p>Each route contains the Amazon S3 bucket name and the Amazon Web Services Region that the bucket is located in. The route also includes the <code>TrafficDialPercentage</code> value, which shows whether the bucket and Region are active (indicated by a value of <code>100</code>) or passive (indicated by a value of <code>0</code>).</p> */
	export interface MultiRegionAccessPointRoute {
		Bucket?: string;
		Region?: string;

		/** Required */
		TrafficDialPercentage: number;
	}

	/** <p>A structure for a Multi-Region Access Point that indicates where Amazon S3 traffic can be routed. Routes can be either active or passive. Active routes can process Amazon S3 requests through the Multi-Region Access Point, but passive routes are not eligible to process Amazon S3 requests. </p> <p>Each route contains the Amazon S3 bucket name and the Amazon Web Services Region that the bucket is located in. The route also includes the <code>TrafficDialPercentage</code> value, which shows whether the bucket and Region are active (indicated by a value of <code>100</code>) or passive (indicated by a value of <code>0</code>).</p> */
	export interface MultiRegionAccessPointRouteFormProperties {
		Bucket: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,

		/** Required */
		TrafficDialPercentage: FormControl<number | null | undefined>,
	}
	export function CreateMultiRegionAccessPointRouteFormGroup() {
		return new FormGroup<MultiRegionAccessPointRouteFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			TrafficDialPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateJobPriorityResult {

		/** Required */
		JobId: string;

		/** Required */
		Priority: number;
	}
	export interface UpdateJobPriorityResultFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,

		/** Required */
		Priority: FormControl<number | null | undefined>,
	}
	export function CreateUpdateJobPriorityResultFormGroup() {
		return new FormGroup<UpdateJobPriorityResultFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateJobStatusResult {
		JobId?: string;
		Status?: JobStatus;
		StatusUpdateReason?: string;
	}
	export interface UpdateJobStatusResultFormProperties {
		JobId: FormControl<string | null | undefined>,
		Status: FormControl<JobStatus | null | undefined>,
		StatusUpdateReason: FormControl<string | null | undefined>,
	}
	export function CreateUpdateJobStatusResultFormGroup() {
		return new FormGroup<UpdateJobStatusResultFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<JobStatus | null | undefined>(undefined),
			StatusUpdateReason: new FormControl<string | null | undefined>(undefined),
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


	/** The container for abort incomplete multipart upload */
	export interface AbortIncompleteMultipartUpload {
		DaysAfterInitiation?: number | null;
	}

	/** The container for abort incomplete multipart upload */
	export interface AbortIncompleteMultipartUploadFormProperties {
		DaysAfterInitiation: FormControl<number | null | undefined>,
	}
	export function CreateAbortIncompleteMultipartUploadFormGroup() {
		return new FormGroup<AbortIncompleteMultipartUploadFormProperties>({
			DaysAfterInitiation: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum OwnerOverride { Destination = 0 }


	/** <p>A container for information about access control for replicas.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note> */
	export interface AccessControlTranslation {

		/** Required */
		Owner: OwnerOverride;
	}

	/** <p>A container for information about access control for replicas.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note> */
	export interface AccessControlTranslationFormProperties {

		/** Required */
		Owner: FormControl<OwnerOverride | null | undefined>,
	}
	export function CreateAccessControlTranslationFormGroup() {
		return new FormGroup<AccessControlTranslationFormProperties>({
			Owner: new FormControl<OwnerOverride | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An access point used to access a bucket. */
	export interface AccessPoint {

		/** Required */
		Name: string;

		/** Required */
		NetworkOrigin: NetworkOrigin;
		VpcConfiguration?: VpcConfiguration;

		/** Required */
		Bucket: string;
		AccessPointArn?: string;
		Alias?: string;
		BucketAccountId?: string;
	}

	/** An access point used to access a bucket. */
	export interface AccessPointFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		NetworkOrigin: FormControl<NetworkOrigin | null | undefined>,

		/** Required */
		Bucket: FormControl<string | null | undefined>,
		AccessPointArn: FormControl<string | null | undefined>,
		Alias: FormControl<string | null | undefined>,
		BucketAccountId: FormControl<string | null | undefined>,
	}
	export function CreateAccessPointFormGroup() {
		return new FormGroup<AccessPointFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NetworkOrigin: new FormControl<NetworkOrigin | null | undefined>(undefined, [Validators.required]),
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccessPointArn: new FormControl<string | null | undefined>(undefined),
			Alias: new FormControl<string | null | undefined>(undefined),
			BucketAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lambda function used to transform objects through an Object Lambda Access Point. */
	export interface AwsLambdaTransformation {

		/** Required */
		FunctionArn: string;
		FunctionPayload?: string;
	}

	/** Lambda function used to transform objects through an Object Lambda Access Point. */
	export interface AwsLambdaTransformationFormProperties {

		/** Required */
		FunctionArn: FormControl<string | null | undefined>,
		FunctionPayload: FormControl<string | null | undefined>,
	}
	export function CreateAwsLambdaTransformationFormGroup() {
		return new FormGroup<AwsLambdaTransformationFormProperties>({
			FunctionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FunctionPayload: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BucketCannedACL { private = 0, 'public-read' = 1, 'public-read-write' = 2, 'authenticated-read' = 3 }

	export interface CreateAccessPointForObjectLambdaRequest {

		/** Required */
		Configuration: ObjectLambdaConfiguration;
	}
	export interface CreateAccessPointForObjectLambdaRequestFormProperties {
	}
	export function CreateCreateAccessPointForObjectLambdaRequestFormGroup() {
		return new FormGroup<CreateAccessPointForObjectLambdaRequestFormProperties>({
		});

	}

	export interface CreateAccessPointRequest {

		/** Required */
		Bucket: string;
		VpcConfiguration?: VpcConfiguration;
		PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
		BucketAccountId?: string;
	}
	export interface CreateAccessPointRequestFormProperties {

		/** Required */
		Bucket: FormControl<string | null | undefined>,
		BucketAccountId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessPointRequestFormGroup() {
		return new FormGroup<CreateAccessPointRequestFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BucketAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The container for the bucket configuration.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note> */
	export interface CreateBucketConfiguration {
		LocationConstraint?: BucketLocationConstraint;
	}

	/** <p>The container for the bucket configuration.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note> */
	export interface CreateBucketConfigurationFormProperties {
		LocationConstraint: FormControl<BucketLocationConstraint | null | undefined>,
	}
	export function CreateCreateBucketConfigurationFormGroup() {
		return new FormGroup<CreateBucketConfigurationFormProperties>({
			LocationConstraint: new FormControl<BucketLocationConstraint | null | undefined>(undefined),
		});

	}

	export interface CreateBucketRequest {
		CreateBucketConfiguration?: CreateBucketConfiguration;
	}
	export interface CreateBucketRequestFormProperties {
	}
	export function CreateCreateBucketRequestFormGroup() {
		return new FormGroup<CreateBucketRequestFormProperties>({
		});

	}

	export interface CreateJobRequest {
		ConfirmationRequired?: boolean | null;

		/** Required */
		Operation: JobOperation;

		/** Required */
		Report: JobReport;

		/** Required */
		ClientRequestToken: string;
		Manifest?: JobManifest;
		Description?: string;

		/** Required */
		Priority: number;

		/** Required */
		RoleArn: string;
		Tags?: Array<S3Tag>;
		ManifestGenerator?: JobManifestGenerator;
	}
	export interface CreateJobRequestFormProperties {
		ConfirmationRequired: FormControl<boolean | null | undefined>,

		/** Required */
		ClientRequestToken: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Priority: FormControl<number | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobRequestFormGroup() {
		return new FormGroup<CreateJobRequestFormProperties>({
			ConfirmationRequired: new FormControl<boolean | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateMultiRegionAccessPointRequest {

		/** Required */
		ClientToken: string;

		/** Required */
		Details: CreateMultiRegionAccessPointInput;
	}
	export interface CreateMultiRegionAccessPointRequestFormProperties {

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateMultiRegionAccessPointRequestFormGroup() {
		return new FormGroup<CreateMultiRegionAccessPointRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAccessPointForObjectLambdaRequest {
	}
	export interface DeleteAccessPointForObjectLambdaRequestFormProperties {
	}
	export function CreateDeleteAccessPointForObjectLambdaRequestFormGroup() {
		return new FormGroup<DeleteAccessPointForObjectLambdaRequestFormProperties>({
		});

	}

	export interface DeleteAccessPointPolicyForObjectLambdaRequest {
	}
	export interface DeleteAccessPointPolicyForObjectLambdaRequestFormProperties {
	}
	export function CreateDeleteAccessPointPolicyForObjectLambdaRequestFormGroup() {
		return new FormGroup<DeleteAccessPointPolicyForObjectLambdaRequestFormProperties>({
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

	export interface DeleteBucketLifecycleConfigurationRequest {
	}
	export interface DeleteBucketLifecycleConfigurationRequestFormProperties {
	}
	export function CreateDeleteBucketLifecycleConfigurationRequestFormGroup() {
		return new FormGroup<DeleteBucketLifecycleConfigurationRequestFormProperties>({
		});

	}

	export interface DeleteBucketPolicyRequest {
	}
	export interface DeleteBucketPolicyRequestFormProperties {
	}
	export function CreateDeleteBucketPolicyRequestFormGroup() {
		return new FormGroup<DeleteBucketPolicyRequestFormProperties>({
		});

	}

	export interface DeleteBucketReplicationRequest {
	}
	export interface DeleteBucketReplicationRequestFormProperties {
	}
	export function CreateDeleteBucketReplicationRequestFormGroup() {
		return new FormGroup<DeleteBucketReplicationRequestFormProperties>({
		});

	}

	export interface DeleteBucketRequest {
	}
	export interface DeleteBucketRequestFormProperties {
	}
	export function CreateDeleteBucketRequestFormGroup() {
		return new FormGroup<DeleteBucketRequestFormProperties>({
		});

	}

	export interface DeleteBucketTaggingRequest {
	}
	export interface DeleteBucketTaggingRequestFormProperties {
	}
	export function CreateDeleteBucketTaggingRequestFormGroup() {
		return new FormGroup<DeleteBucketTaggingRequestFormProperties>({
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

	export enum DeleteMarkerReplicationStatus { Enabled = 0, Disabled = 1 }


	/** <p>Specifies whether S3 on Outposts replicates delete markers. If you specify a <code>Filter</code> element in your replication configuration, you must also include a <code>DeleteMarkerReplication</code> element. If your <code>Filter</code> includes a <code>Tag</code> element, the <code>DeleteMarkerReplication</code> element's <code>Status</code> child element must be set to <code>Disabled</code>, because S3 on Outposts does not support replicating delete markers for tag-based rules.</p> <p>For more information about delete marker replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html#outposts-replication-what-is-replicated">How delete operations affect replication</a> in the <i>Amazon S3 User Guide</i>. </p> */
	export interface DeleteMarkerReplication {

		/** Required */
		Status: MFADeleteStatus;
	}

	/** <p>Specifies whether S3 on Outposts replicates delete markers. If you specify a <code>Filter</code> element in your replication configuration, you must also include a <code>DeleteMarkerReplication</code> element. If your <code>Filter</code> includes a <code>Tag</code> element, the <code>DeleteMarkerReplication</code> element's <code>Status</code> child element must be set to <code>Disabled</code>, because S3 on Outposts does not support replicating delete markers for tag-based rules.</p> <p>For more information about delete marker replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html#outposts-replication-what-is-replicated">How delete operations affect replication</a> in the <i>Amazon S3 User Guide</i>. </p> */
	export interface DeleteMarkerReplicationFormProperties {

		/** Required */
		Status: FormControl<MFADeleteStatus | null | undefined>,
	}
	export function CreateDeleteMarkerReplicationFormGroup() {
		return new FormGroup<DeleteMarkerReplicationFormProperties>({
			Status: new FormControl<MFADeleteStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteMultiRegionAccessPointRequest {

		/** Required */
		ClientToken: string;

		/** Required */
		Details: DeleteMultiRegionAccessPointInput;
	}
	export interface DeleteMultiRegionAccessPointRequestFormProperties {

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMultiRegionAccessPointRequestFormGroup() {
		return new FormGroup<DeleteMultiRegionAccessPointRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DeleteStorageLensConfigurationRequest {
	}
	export interface DeleteStorageLensConfigurationRequestFormProperties {
	}
	export function CreateDeleteStorageLensConfigurationRequestFormGroup() {
		return new FormGroup<DeleteStorageLensConfigurationRequestFormProperties>({
		});

	}

	export interface DeleteStorageLensConfigurationTaggingRequest {
	}
	export interface DeleteStorageLensConfigurationTaggingRequestFormProperties {
	}
	export function CreateDeleteStorageLensConfigurationTaggingRequestFormGroup() {
		return new FormGroup<DeleteStorageLensConfigurationTaggingRequestFormProperties>({
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

	export interface DescribeMultiRegionAccessPointOperationRequest {
	}
	export interface DescribeMultiRegionAccessPointOperationRequestFormProperties {
	}
	export function CreateDescribeMultiRegionAccessPointOperationRequestFormGroup() {
		return new FormGroup<DescribeMultiRegionAccessPointOperationRequestFormProperties>({
		});

	}


	/** <p>A container that specifies S3 Replication Time Control (S3 RTC) related information, including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note> */
	export interface ReplicationTime {

		/** Required */
		Status: MFADeleteStatus;

		/** Required */
		Time: ReplicationTimeValue;
	}

	/** <p>A container that specifies S3 Replication Time Control (S3 RTC) related information, including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note> */
	export interface ReplicationTimeFormProperties {

		/** Required */
		Status: FormControl<MFADeleteStatus | null | undefined>,
	}
	export function CreateReplicationTimeFormGroup() {
		return new FormGroup<ReplicationTimeFormProperties>({
			Status: new FormControl<MFADeleteStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A container that specifies the time value for S3 Replication Time Control (S3 RTC). This value is also used for the replication metrics <code>EventThreshold</code> element. </p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note> */
	export interface ReplicationTimeValue {
		Minutes?: number | null;
	}

	/** <p>A container that specifies the time value for S3 Replication Time Control (S3 RTC). This value is also used for the replication metrics <code>EventThreshold</code> element. </p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note> */
	export interface ReplicationTimeValueFormProperties {
		Minutes: FormControl<number | null | undefined>,
	}
	export function CreateReplicationTimeValueFormGroup() {
		return new FormGroup<ReplicationTimeValueFormProperties>({
			Minutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Specifies encryption-related information for an Amazon S3 bucket that is a destination for replicated objects.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note> */
	export interface EncryptionConfiguration {
		ReplicaKmsKeyID?: string;
	}

	/** <p>Specifies encryption-related information for an Amazon S3 bucket that is a destination for replicated objects.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note> */
	export interface EncryptionConfigurationFormProperties {
		ReplicaKmsKeyID: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionConfigurationFormGroup() {
		return new FormGroup<EncryptionConfigurationFormProperties>({
			ReplicaKmsKeyID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A container that specifies replication metrics-related settings. */
	export interface Metrics {

		/** Required */
		Status: MFADeleteStatus;
		EventThreshold?: ReplicationTimeValue;
	}

	/** A container that specifies replication metrics-related settings. */
	export interface MetricsFormProperties {

		/** Required */
		Status: FormControl<MFADeleteStatus | null | undefined>,
	}
	export function CreateMetricsFormGroup() {
		return new FormGroup<MetricsFormProperties>({
			Status: new FormControl<MFADeleteStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ReplicationStorageClass { STANDARD = 0, REDUCED_REDUNDANCY = 1, STANDARD_IA = 2, ONEZONE_IA = 3, INTELLIGENT_TIERING = 4, GLACIER = 5, DEEP_ARCHIVE = 6, OUTPOSTS = 7, GLACIER_IR = 8 }


	/** Specifies information about the replication destination bucket and its settings for an S3 on Outposts replication configuration. */
	export interface Destination {
		Account?: string;

		/** Required */
		Bucket: string;
		ReplicationTime?: ReplicationTime;
		AccessControlTranslation?: AccessControlTranslation;
		EncryptionConfiguration?: EncryptionConfiguration;
		Metrics?: Metrics;
		StorageClass?: ReplicationStorageClass;
	}

	/** Specifies information about the replication destination bucket and its settings for an S3 on Outposts replication configuration. */
	export interface DestinationFormProperties {
		Account: FormControl<string | null | undefined>,

		/** Required */
		Bucket: FormControl<string | null | undefined>,
		StorageClass: FormControl<ReplicationStorageClass | null | undefined>,
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
			Account: new FormControl<string | null | undefined>(undefined),
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StorageClass: new FormControl<ReplicationStorageClass | null | undefined>(undefined),
		});

	}

	export enum ExistingObjectReplicationStatus { Enabled = 0, Disabled = 1 }


	/** <p>An optional configuration to replicate existing source bucket objects. </p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note> */
	export interface ExistingObjectReplication {

		/** Required */
		Status: MFADeleteStatus;
	}

	/** <p>An optional configuration to replicate existing source bucket objects. </p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note> */
	export interface ExistingObjectReplicationFormProperties {

		/** Required */
		Status: FormControl<MFADeleteStatus | null | undefined>,
	}
	export function CreateExistingObjectReplicationFormGroup() {
		return new FormGroup<ExistingObjectReplicationFormProperties>({
			Status: new FormControl<MFADeleteStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ExpirationStatus { Enabled = 0, Disabled = 1 }

	export interface GetAccessPointConfigurationForObjectLambdaRequest {
	}
	export interface GetAccessPointConfigurationForObjectLambdaRequestFormProperties {
	}
	export function CreateGetAccessPointConfigurationForObjectLambdaRequestFormGroup() {
		return new FormGroup<GetAccessPointConfigurationForObjectLambdaRequestFormProperties>({
		});

	}

	export interface GetAccessPointForObjectLambdaRequest {
	}
	export interface GetAccessPointForObjectLambdaRequestFormProperties {
	}
	export function CreateGetAccessPointForObjectLambdaRequestFormGroup() {
		return new FormGroup<GetAccessPointForObjectLambdaRequestFormProperties>({
		});

	}

	export interface GetAccessPointPolicyForObjectLambdaRequest {
	}
	export interface GetAccessPointPolicyForObjectLambdaRequestFormProperties {
	}
	export function CreateGetAccessPointPolicyForObjectLambdaRequestFormGroup() {
		return new FormGroup<GetAccessPointPolicyForObjectLambdaRequestFormProperties>({
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

	export interface GetAccessPointPolicyStatusForObjectLambdaRequest {
	}
	export interface GetAccessPointPolicyStatusForObjectLambdaRequestFormProperties {
	}
	export function CreateGetAccessPointPolicyStatusForObjectLambdaRequestFormGroup() {
		return new FormGroup<GetAccessPointPolicyStatusForObjectLambdaRequestFormProperties>({
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

	export interface GetBucketLifecycleConfigurationRequest {
	}
	export interface GetBucketLifecycleConfigurationRequestFormProperties {
	}
	export function CreateGetBucketLifecycleConfigurationRequestFormGroup() {
		return new FormGroup<GetBucketLifecycleConfigurationRequestFormProperties>({
		});

	}

	export interface GetBucketPolicyRequest {
	}
	export interface GetBucketPolicyRequestFormProperties {
	}
	export function CreateGetBucketPolicyRequestFormGroup() {
		return new FormGroup<GetBucketPolicyRequestFormProperties>({
		});

	}

	export interface GetBucketReplicationRequest {
	}
	export interface GetBucketReplicationRequestFormProperties {
	}
	export function CreateGetBucketReplicationRequestFormGroup() {
		return new FormGroup<GetBucketReplicationRequestFormProperties>({
		});

	}

	export interface GetBucketRequest {
	}
	export interface GetBucketRequestFormProperties {
	}
	export function CreateGetBucketRequestFormGroup() {
		return new FormGroup<GetBucketRequestFormProperties>({
		});

	}

	export interface GetBucketTaggingRequest {
	}
	export interface GetBucketTaggingRequestFormProperties {
	}
	export function CreateGetBucketTaggingRequestFormGroup() {
		return new FormGroup<GetBucketTaggingRequestFormProperties>({
		});

	}

	export interface GetBucketVersioningRequest {
	}
	export interface GetBucketVersioningRequestFormProperties {
	}
	export function CreateGetBucketVersioningRequestFormGroup() {
		return new FormGroup<GetBucketVersioningRequestFormProperties>({
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

	export interface GetMultiRegionAccessPointPolicyRequest {
	}
	export interface GetMultiRegionAccessPointPolicyRequestFormProperties {
	}
	export function CreateGetMultiRegionAccessPointPolicyRequestFormGroup() {
		return new FormGroup<GetMultiRegionAccessPointPolicyRequestFormProperties>({
		});

	}

	export interface GetMultiRegionAccessPointPolicyStatusRequest {
	}
	export interface GetMultiRegionAccessPointPolicyStatusRequestFormProperties {
	}
	export function CreateGetMultiRegionAccessPointPolicyStatusRequestFormGroup() {
		return new FormGroup<GetMultiRegionAccessPointPolicyStatusRequestFormProperties>({
		});

	}

	export interface GetMultiRegionAccessPointRequest {
	}
	export interface GetMultiRegionAccessPointRequestFormProperties {
	}
	export function CreateGetMultiRegionAccessPointRequestFormGroup() {
		return new FormGroup<GetMultiRegionAccessPointRequestFormProperties>({
		});

	}

	export interface GetMultiRegionAccessPointRoutesRequest {
	}
	export interface GetMultiRegionAccessPointRoutesRequestFormProperties {
	}
	export function CreateGetMultiRegionAccessPointRoutesRequestFormGroup() {
		return new FormGroup<GetMultiRegionAccessPointRoutesRequestFormProperties>({
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

	export interface GetStorageLensConfigurationRequest {
	}
	export interface GetStorageLensConfigurationRequestFormProperties {
	}
	export function CreateGetStorageLensConfigurationRequestFormGroup() {
		return new FormGroup<GetStorageLensConfigurationRequestFormProperties>({
		});

	}

	export interface GetStorageLensConfigurationTaggingRequest {
	}
	export interface GetStorageLensConfigurationTaggingRequestFormProperties {
	}
	export function CreateGetStorageLensConfigurationTaggingRequestFormGroup() {
		return new FormGroup<GetStorageLensConfigurationTaggingRequestFormProperties>({
		});

	}


	/** The container for the Outposts bucket lifecycle configuration. */
	export interface LifecycleConfiguration {
		Rules?: Array<string>;
	}

	/** The container for the Outposts bucket lifecycle configuration. */
	export interface LifecycleConfigurationFormProperties {
	}
	export function CreateLifecycleConfigurationFormGroup() {
		return new FormGroup<LifecycleConfigurationFormProperties>({
		});

	}


	/** The container of the Outposts bucket lifecycle expiration. */
	export interface LifecycleExpiration {
		Date?: Date;
		Days?: number | null;
		ExpiredObjectDeleteMarker?: boolean | null;
	}

	/** The container of the Outposts bucket lifecycle expiration. */
	export interface LifecycleExpirationFormProperties {
		Date: FormControl<Date | null | undefined>,
		Days: FormControl<number | null | undefined>,
		ExpiredObjectDeleteMarker: FormControl<boolean | null | undefined>,
	}
	export function CreateLifecycleExpirationFormGroup() {
		return new FormGroup<LifecycleExpirationFormProperties>({
			Date: new FormControl<Date | null | undefined>(undefined),
			Days: new FormControl<number | null | undefined>(undefined),
			ExpiredObjectDeleteMarker: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The container for the filter of the lifecycle rule. */
	export interface LifecycleRuleFilter {
		Prefix?: string;

		/** A container for a key-value name pair. */
		Tag?: S3Tag;
		And?: LifecycleRuleAndOperator;
		ObjectSizeGreaterThan?: number | null;
		ObjectSizeLessThan?: number | null;
	}

	/** The container for the filter of the lifecycle rule. */
	export interface LifecycleRuleFilterFormProperties {
		Prefix: FormControl<string | null | undefined>,
		ObjectSizeGreaterThan: FormControl<number | null | undefined>,
		ObjectSizeLessThan: FormControl<number | null | undefined>,
	}
	export function CreateLifecycleRuleFilterFormGroup() {
		return new FormGroup<LifecycleRuleFilterFormProperties>({
			Prefix: new FormControl<string | null | undefined>(undefined),
			ObjectSizeGreaterThan: new FormControl<number | null | undefined>(undefined),
			ObjectSizeLessThan: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The container for the Outposts bucket lifecycle rule and operator. */
	export interface LifecycleRuleAndOperator {
		Prefix?: string;
		Tags?: Array<S3Tag>;
		ObjectSizeGreaterThan?: number | null;
		ObjectSizeLessThan?: number | null;
	}

	/** The container for the Outposts bucket lifecycle rule and operator. */
	export interface LifecycleRuleAndOperatorFormProperties {
		Prefix: FormControl<string | null | undefined>,
		ObjectSizeGreaterThan: FormControl<number | null | undefined>,
		ObjectSizeLessThan: FormControl<number | null | undefined>,
	}
	export function CreateLifecycleRuleAndOperatorFormGroup() {
		return new FormGroup<LifecycleRuleAndOperatorFormProperties>({
			Prefix: new FormControl<string | null | undefined>(undefined),
			ObjectSizeGreaterThan: new FormControl<number | null | undefined>(undefined),
			ObjectSizeLessThan: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The container of the noncurrent version expiration. */
	export interface NoncurrentVersionExpiration {
		NoncurrentDays?: number | null;
		NewerNoncurrentVersions?: number | null;
	}

	/** The container of the noncurrent version expiration. */
	export interface NoncurrentVersionExpirationFormProperties {
		NoncurrentDays: FormControl<number | null | undefined>,
		NewerNoncurrentVersions: FormControl<number | null | undefined>,
	}
	export function CreateNoncurrentVersionExpirationFormGroup() {
		return new FormGroup<NoncurrentVersionExpirationFormProperties>({
			NoncurrentDays: new FormControl<number | null | undefined>(undefined),
			NewerNoncurrentVersions: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The container for the Outposts bucket lifecycle rule. */
	export interface LifecycleRule {
		Expiration?: LifecycleExpiration;
		ID?: string;
		Filter?: LifecycleRuleFilter;

		/** Required */
		Status: MFADeleteStatus;
		Transitions?: Array<string>;
		NoncurrentVersionTransitions?: Array<string>;
		NoncurrentVersionExpiration?: NoncurrentVersionExpiration;
		AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
	}

	/** The container for the Outposts bucket lifecycle rule. */
	export interface LifecycleRuleFormProperties {
		ID: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<MFADeleteStatus | null | undefined>,
	}
	export function CreateLifecycleRuleFormGroup() {
		return new FormGroup<LifecycleRuleFormProperties>({
			ID: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<MFADeleteStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAccessPointsForObjectLambdaRequest {
	}
	export interface ListAccessPointsForObjectLambdaRequestFormProperties {
	}
	export function CreateListAccessPointsForObjectLambdaRequestFormGroup() {
		return new FormGroup<ListAccessPointsForObjectLambdaRequestFormProperties>({
		});

	}

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

	export interface ListMultiRegionAccessPointsRequest {
	}
	export interface ListMultiRegionAccessPointsRequestFormProperties {
	}
	export function CreateListMultiRegionAccessPointsRequestFormGroup() {
		return new FormGroup<ListMultiRegionAccessPointsRequestFormProperties>({
		});

	}

	export interface ListRegionalBucketsRequest {
	}
	export interface ListRegionalBucketsRequestFormProperties {
	}
	export function CreateListRegionalBucketsRequestFormGroup() {
		return new FormGroup<ListRegionalBucketsRequestFormProperties>({
		});

	}


	/** Part of <code>ListStorageLensConfigurationResult</code>. Each entry includes the description of the S3 Storage Lens configuration, its home Region, whether it is enabled, its Amazon Resource Name (ARN), and config ID. */
	export interface ListStorageLensConfigurationEntry {

		/** Required */
		Id: string;

		/** Required */
		StorageLensArn: string;

		/** Required */
		HomeRegion: string;
		IsEnabled?: boolean | null;
	}

	/** Part of <code>ListStorageLensConfigurationResult</code>. Each entry includes the description of the S3 Storage Lens configuration, its home Region, whether it is enabled, its Amazon Resource Name (ARN), and config ID. */
	export interface ListStorageLensConfigurationEntryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		StorageLensArn: FormControl<string | null | undefined>,

		/** Required */
		HomeRegion: FormControl<string | null | undefined>,
		IsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateListStorageLensConfigurationEntryFormGroup() {
		return new FormGroup<ListStorageLensConfigurationEntryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StorageLensArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HomeRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListStorageLensConfigurationsRequest {
	}
	export interface ListStorageLensConfigurationsRequestFormProperties {
	}
	export function CreateListStorageLensConfigurationsRequestFormGroup() {
		return new FormGroup<ListStorageLensConfigurationsRequestFormProperties>({
		});

	}

	export enum MetricsStatus { Enabled = 0, Disabled = 1 }


	/** Status information for a single Multi-Region Access Point Region. */
	export interface MultiRegionAccessPointRegionalResponse {
		Name?: string;
		RequestStatus?: string;
	}

	/** Status information for a single Multi-Region Access Point Region. */
	export interface MultiRegionAccessPointRegionalResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		RequestStatus: FormControl<string | null | undefined>,
	}
	export function CreateMultiRegionAccessPointRegionalResponseFormGroup() {
		return new FormGroup<MultiRegionAccessPointRegionalResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			RequestStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TransitionStorageClass { GLACIER = 0, STANDARD_IA = 1, ONEZONE_IA = 2, INTELLIGENT_TIERING = 3, DEEP_ARCHIVE = 4 }


	/** The container for the noncurrent version transition. */
	export interface NoncurrentVersionTransition {
		NoncurrentDays?: number | null;
		StorageClass?: TransitionStorageClass;
	}

	/** The container for the noncurrent version transition. */
	export interface NoncurrentVersionTransitionFormProperties {
		NoncurrentDays: FormControl<number | null | undefined>,
		StorageClass: FormControl<TransitionStorageClass | null | undefined>,
	}
	export function CreateNoncurrentVersionTransitionFormGroup() {
		return new FormGroup<NoncurrentVersionTransitionFormProperties>({
			NoncurrentDays: new FormControl<number | null | undefined>(undefined),
			StorageClass: new FormControl<TransitionStorageClass | null | undefined>(undefined),
		});

	}


	/** An access point with an attached Lambda function used to access transformed data from an Amazon S3 bucket. */
	export interface ObjectLambdaAccessPoint {

		/** Required */
		Name: string;
		ObjectLambdaAccessPointArn?: string;
		Alias?: ObjectLambdaAccessPointAlias;
	}

	/** An access point with an attached Lambda function used to access transformed data from an Amazon S3 bucket. */
	export interface ObjectLambdaAccessPointFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		ObjectLambdaAccessPointArn: FormControl<string | null | undefined>,
	}
	export function CreateObjectLambdaAccessPointFormGroup() {
		return new FormGroup<ObjectLambdaAccessPointFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ObjectLambdaAccessPointArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ObjectLambdaAllowedFeature { 'GetObject-Range' = 0, 'GetObject-PartNumber' = 1, 'HeadObject-Range' = 2, 'HeadObject-PartNumber' = 3 }


	/** A container for AwsLambdaTransformation. */
	export interface ObjectLambdaContentTransformation {
		AwsLambda?: AwsLambdaTransformation;
	}

	/** A container for AwsLambdaTransformation. */
	export interface ObjectLambdaContentTransformationFormProperties {
	}
	export function CreateObjectLambdaContentTransformationFormGroup() {
		return new FormGroup<ObjectLambdaContentTransformationFormProperties>({
		});

	}


	/** A configuration used when creating an Object Lambda Access Point transformation. */
	export interface ObjectLambdaTransformationConfiguration {

		/** Required */
		Actions: Array<string>;

		/** Required */
		ContentTransformation: ObjectLambdaContentTransformation;
	}

	/** A configuration used when creating an Object Lambda Access Point transformation. */
	export interface ObjectLambdaTransformationConfigurationFormProperties {
	}
	export function CreateObjectLambdaTransformationConfigurationFormGroup() {
		return new FormGroup<ObjectLambdaTransformationConfigurationFormProperties>({
		});

	}

	export enum ObjectLambdaTransformationConfigurationAction { GetObject = 0, HeadObject = 1, ListObjects = 2, ListObjectsV2 = 3 }

	export interface PutAccessPointConfigurationForObjectLambdaRequest {

		/** Required */
		Configuration: ObjectLambdaConfiguration;
	}
	export interface PutAccessPointConfigurationForObjectLambdaRequestFormProperties {
	}
	export function CreatePutAccessPointConfigurationForObjectLambdaRequestFormGroup() {
		return new FormGroup<PutAccessPointConfigurationForObjectLambdaRequestFormProperties>({
		});

	}

	export interface PutAccessPointPolicyForObjectLambdaRequest {

		/** Required */
		Policy: string;
	}
	export interface PutAccessPointPolicyForObjectLambdaRequestFormProperties {

		/** Required */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutAccessPointPolicyForObjectLambdaRequestFormGroup() {
		return new FormGroup<PutAccessPointPolicyForObjectLambdaRequestFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface PutBucketLifecycleConfigurationRequest {
		LifecycleConfiguration?: LifecycleConfiguration;
	}
	export interface PutBucketLifecycleConfigurationRequestFormProperties {
	}
	export function CreatePutBucketLifecycleConfigurationRequestFormGroup() {
		return new FormGroup<PutBucketLifecycleConfigurationRequestFormProperties>({
		});

	}

	export interface PutBucketPolicyRequest {

		/** Required */
		Policy: string;
	}
	export interface PutBucketPolicyRequestFormProperties {

		/** Required */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutBucketPolicyRequestFormGroup() {
		return new FormGroup<PutBucketPolicyRequestFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutBucketReplicationRequest {

		/** Required */
		ReplicationConfiguration: ReplicationConfiguration;
	}
	export interface PutBucketReplicationRequestFormProperties {
	}
	export function CreatePutBucketReplicationRequestFormGroup() {
		return new FormGroup<PutBucketReplicationRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface Tagging {

		/** Required */
		TagSet: Array<S3Tag>;
	}

	/** <p/> */
	export interface TaggingFormProperties {
	}
	export function CreateTaggingFormGroup() {
		return new FormGroup<TaggingFormProperties>({
		});

	}

	export interface PutBucketTaggingRequest {

		/** Required */
		Tagging: Tagging;
	}
	export interface PutBucketTaggingRequestFormProperties {
	}
	export function CreatePutBucketTaggingRequestFormGroup() {
		return new FormGroup<PutBucketTaggingRequestFormProperties>({
		});

	}


	/** Describes the versioning state of an Amazon S3 on Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketVersioning.html">PutBucketVersioning</a>. */
	export interface VersioningConfiguration {
		MFADelete?: MFADeleteStatus;
		Status?: BucketVersioningStatus;
	}

	/** Describes the versioning state of an Amazon S3 on Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketVersioning.html">PutBucketVersioning</a>. */
	export interface VersioningConfigurationFormProperties {
		MFADelete: FormControl<MFADeleteStatus | null | undefined>,
		Status: FormControl<BucketVersioningStatus | null | undefined>,
	}
	export function CreateVersioningConfigurationFormGroup() {
		return new FormGroup<VersioningConfigurationFormProperties>({
			MFADelete: new FormControl<MFADeleteStatus | null | undefined>(undefined),
			Status: new FormControl<BucketVersioningStatus | null | undefined>(undefined),
		});

	}

	export interface PutBucketVersioningRequest {

		/** Required */
		VersioningConfiguration: VersioningConfiguration;
	}
	export interface PutBucketVersioningRequestFormProperties {
	}
	export function CreatePutBucketVersioningRequestFormGroup() {
		return new FormGroup<PutBucketVersioningRequestFormProperties>({
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

	export interface PutMultiRegionAccessPointPolicyRequest {

		/** Required */
		ClientToken: string;

		/** Required */
		Details: PutMultiRegionAccessPointPolicyInput;
	}
	export interface PutMultiRegionAccessPointPolicyRequestFormProperties {

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreatePutMultiRegionAccessPointPolicyRequestFormGroup() {
		return new FormGroup<PutMultiRegionAccessPointPolicyRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutPublicAccessBlockRequest {

		/** Required */
		PublicAccessBlockConfiguration: PublicAccessBlockConfiguration;
	}
	export interface PutPublicAccessBlockRequestFormProperties {
	}
	export function CreatePutPublicAccessBlockRequestFormGroup() {
		return new FormGroup<PutPublicAccessBlockRequestFormProperties>({
		});

	}

	export interface PutStorageLensConfigurationRequest {

		/** Required */
		StorageLensConfiguration: StorageLensConfiguration;
		Tags?: Array<string>;
	}
	export interface PutStorageLensConfigurationRequestFormProperties {
	}
	export function CreatePutStorageLensConfigurationRequestFormGroup() {
		return new FormGroup<PutStorageLensConfigurationRequestFormProperties>({
		});

	}

	export interface PutStorageLensConfigurationTaggingRequest {

		/** Required */
		Tags: Array<string>;
	}
	export interface PutStorageLensConfigurationTaggingRequestFormProperties {
	}
	export function CreatePutStorageLensConfigurationTaggingRequestFormGroup() {
		return new FormGroup<PutStorageLensConfigurationTaggingRequestFormProperties>({
		});

	}


	/** A Region that supports a Multi-Region Access Point as well as the associated bucket for the Region. */
	export interface Region {

		/** Required */
		Bucket: string;
		BucketAccountId?: string;
	}

	/** A Region that supports a Multi-Region Access Point as well as the associated bucket for the Region. */
	export interface RegionFormProperties {

		/** Required */
		Bucket: FormControl<string | null | undefined>,
		BucketAccountId: FormControl<string | null | undefined>,
	}
	export function CreateRegionFormGroup() {
		return new FormGroup<RegionFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BucketAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A combination of a bucket and Region that's part of a Multi-Region Access Point. */
	export interface RegionReport {
		Bucket?: string;
		Region?: string;
		BucketAccountId?: string;
	}

	/** A combination of a bucket and Region that's part of a Multi-Region Access Point. */
	export interface RegionReportFormProperties {
		Bucket: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		BucketAccountId: FormControl<string | null | undefined>,
	}
	export function CreateRegionReportFormGroup() {
		return new FormGroup<RegionReportFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			BucketAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The container for the regional bucket. */
	export interface RegionalBucket {

		/** Required */
		Bucket: string;
		BucketArn?: string;

		/** Required */
		PublicAccessBlockEnabled: boolean;

		/** Required */
		CreationDate: Date;
		OutpostId?: string;
	}

	/** The container for the regional bucket. */
	export interface RegionalBucketFormProperties {

		/** Required */
		Bucket: FormControl<string | null | undefined>,
		BucketArn: FormControl<string | null | undefined>,

		/** Required */
		PublicAccessBlockEnabled: FormControl<boolean | null | undefined>,

		/** Required */
		CreationDate: FormControl<Date | null | undefined>,
		OutpostId: FormControl<string | null | undefined>,
	}
	export function CreateRegionalBucketFormGroup() {
		return new FormGroup<RegionalBucketFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BucketArn: new FormControl<string | null | undefined>(undefined),
			PublicAccessBlockEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			CreationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			OutpostId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReplicaModificationsStatus { Enabled = 0, Disabled = 1 }


	/** <p>A filter that you can use to specify whether replica modification sync is enabled. S3 on Outposts replica modification sync can help you keep object metadata synchronized between replicas and source objects. By default, S3 on Outposts replicates metadata from the source objects to the replicas only. When replica modification sync is enabled, S3 on Outposts replicates metadata changes made to the replica copies back to the source object, making the replication bidirectional.</p> <p>To replicate object metadata modifications on replicas, you can specify this element and set the <code>Status</code> of this element to <code>Enabled</code>.</p> <note> <p>You must enable replica modification sync on the source and destination buckets to replicate replica metadata changes between the source and the replicas.</p> </note> */
	export interface ReplicaModifications {

		/** Required */
		Status: MFADeleteStatus;
	}

	/** <p>A filter that you can use to specify whether replica modification sync is enabled. S3 on Outposts replica modification sync can help you keep object metadata synchronized between replicas and source objects. By default, S3 on Outposts replicates metadata from the source objects to the replicas only. When replica modification sync is enabled, S3 on Outposts replicates metadata changes made to the replica copies back to the source object, making the replication bidirectional.</p> <p>To replicate object metadata modifications on replicas, you can specify this element and set the <code>Status</code> of this element to <code>Enabled</code>.</p> <note> <p>You must enable replica modification sync on the source and destination buckets to replicate replica metadata changes between the source and the replicas.</p> </note> */
	export interface ReplicaModificationsFormProperties {

		/** Required */
		Status: FormControl<MFADeleteStatus | null | undefined>,
	}
	export function CreateReplicaModificationsFormGroup() {
		return new FormGroup<ReplicaModificationsFormProperties>({
			Status: new FormControl<MFADeleteStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A filter that identifies the subset of objects to which the replication rule applies. A <code>Filter</code> element must specify exactly one <code>Prefix</code>, <code>Tag</code>, or <code>And</code> child element. */
	export interface ReplicationRuleFilter {
		Prefix?: string;

		/** A container for a key-value name pair. */
		Tag?: S3Tag;
		And?: ReplicationRuleAndOperator;
	}

	/** A filter that identifies the subset of objects to which the replication rule applies. A <code>Filter</code> element must specify exactly one <code>Prefix</code>, <code>Tag</code>, or <code>And</code> child element. */
	export interface ReplicationRuleFilterFormProperties {
		Prefix: FormControl<string | null | undefined>,
	}
	export function CreateReplicationRuleFilterFormGroup() {
		return new FormGroup<ReplicationRuleFilterFormProperties>({
			Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter. </p> <p>For example:</p> <ul> <li> <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap these filters in an <code>And</code> element. </p> </li> <li> <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements in an <code>And</code> element.</p> </li> </ul> */
	export interface ReplicationRuleAndOperator {
		Prefix?: string;
		Tags?: Array<S3Tag>;
	}

	/** <p>A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter. </p> <p>For example:</p> <ul> <li> <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap these filters in an <code>And</code> element. </p> </li> <li> <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements in an <code>And</code> element.</p> </li> </ul> */
	export interface ReplicationRuleAndOperatorFormProperties {
		Prefix: FormControl<string | null | undefined>,
	}
	export function CreateReplicationRuleAndOperatorFormGroup() {
		return new FormGroup<ReplicationRuleAndOperatorFormProperties>({
			Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReplicationRuleStatus { Enabled = 0, Disabled = 1 }


	/** A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects. */
	export interface SourceSelectionCriteria {
		SseKmsEncryptedObjects?: SseKmsEncryptedObjects;
		ReplicaModifications?: ReplicaModifications;
	}

	/** A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects. */
	export interface SourceSelectionCriteriaFormProperties {
	}
	export function CreateSourceSelectionCriteriaFormGroup() {
		return new FormGroup<SourceSelectionCriteriaFormProperties>({
		});

	}


	/** <p>A container for filter information that you can use to select S3 objects that are encrypted with Key Management Service (KMS).</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note> */
	export interface SseKmsEncryptedObjects {

		/** Required */
		Status: MFADeleteStatus;
	}

	/** <p>A container for filter information that you can use to select S3 objects that are encrypted with Key Management Service (KMS).</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note> */
	export interface SseKmsEncryptedObjectsFormProperties {

		/** Required */
		Status: FormControl<MFADeleteStatus | null | undefined>,
	}
	export function CreateSseKmsEncryptedObjectsFormGroup() {
		return new FormGroup<SseKmsEncryptedObjectsFormProperties>({
			Status: new FormControl<MFADeleteStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies which S3 on Outposts objects to replicate and where to store the replicas. */
	export interface ReplicationRule {
		ID?: string;
		Priority?: number | null;
		Prefix?: string;
		Filter?: ReplicationRuleFilter;

		/** Required */
		Status: MFADeleteStatus;
		SourceSelectionCriteria?: SourceSelectionCriteria;
		ExistingObjectReplication?: ExistingObjectReplication;

		/** Required */
		Destination: Destination;
		DeleteMarkerReplication?: DeleteMarkerReplication;

		/** Required */
		Bucket: string;
	}

	/** Specifies which S3 on Outposts objects to replicate and where to store the replicas. */
	export interface ReplicationRuleFormProperties {
		ID: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		Prefix: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<MFADeleteStatus | null | undefined>,

		/** Required */
		Bucket: FormControl<string | null | undefined>,
	}
	export function CreateReplicationRuleFormGroup() {
		return new FormGroup<ReplicationRuleFormProperties>({
			ID: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			Prefix: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<MFADeleteStatus | null | undefined>(undefined, [Validators.required]),
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ReplicationTimeStatus { Enabled = 0, Disabled = 1 }

	export enum RequestedJobStatus { Cancelled = 0, Ready = 1 }

	export enum S3ObjectLockRetentionMode { COMPLIANCE = 0, GOVERNANCE = 1 }

	export enum SseKmsEncryptedObjectsStatus { Enabled = 0, Disabled = 1 }

	export interface SubmitMultiRegionAccessPointRoutesRequest {

		/** Required */
		RouteUpdates: Array<string>;
	}
	export interface SubmitMultiRegionAccessPointRoutesRequestFormProperties {
	}
	export function CreateSubmitMultiRegionAccessPointRoutesRequestFormGroup() {
		return new FormGroup<SubmitMultiRegionAccessPointRoutesRequestFormProperties>({
		});

	}


	/** Specifies when an object transitions to a specified storage class. For more information about Amazon S3 Lifecycle configuration rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-transition-general-considerations.html"> Transitioning objects using Amazon S3 Lifecycle</a> in the <i>Amazon S3 User Guide</i>. */
	export interface Transition {
		Date?: Date;
		Days?: number | null;
		StorageClass?: TransitionStorageClass;
	}

	/** Specifies when an object transitions to a specified storage class. For more information about Amazon S3 Lifecycle configuration rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-transition-general-considerations.html"> Transitioning objects using Amazon S3 Lifecycle</a> in the <i>Amazon S3 User Guide</i>. */
	export interface TransitionFormProperties {
		Date: FormControl<Date | null | undefined>,
		Days: FormControl<number | null | undefined>,
		StorageClass: FormControl<TransitionStorageClass | null | undefined>,
	}
	export function CreateTransitionFormGroup() {
		return new FormGroup<TransitionFormProperties>({
			Date: new FormControl<Date | null | undefined>(undefined),
			Days: new FormControl<number | null | undefined>(undefined),
			StorageClass: new FormControl<TransitionStorageClass | null | undefined>(undefined),
		});

	}

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
		 * <p>Deletes the specified access point.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html#API_control_DeleteAccessPoint_Examples">Examples</a> section.</p> <p>The following actions are related to <code>DeleteAccessPoint</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html">CreateAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html">GetAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html">ListAccessPoints</a> </p> </li> </ul>
		 * Delete v20180820/accesspoint/{name}#x-amz-account-id
		 * @param {string} name <p>The name of the access point you want to delete.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;</code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
		 * @return {void} Success
		 */
		DeleteAccessPoint(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v20180820/accesspoint/' + (name == null ? '' : encodeURIComponent(name)) + '#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns configuration information about the specified access point.</p> <p/> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html#API_control_GetAccessPoint_Examples">Examples</a> section.</p> <p>The following actions are related to <code>GetAccessPoint</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html">CreateAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html">DeleteAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html">ListAccessPoints</a> </p> </li> </ul>
		 * Get v20180820/accesspoint/{name}#x-amz-account-id
		 * @param {string} name <p>The name of the access point whose configuration information you want to retrieve.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;</code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
		 * @return {void} Success
		 */
		GetAccessPoint(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/accesspoint/' + (name == null ? '' : encodeURIComponent(name)) + '#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified Object Lambda Access Point.</p> <p>The following actions are related to <code>DeleteAccessPointForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPointForObjectLambda.html">CreateAccessPointForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointForObjectLambda.html">GetAccessPointForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPointsForObjectLambda.html">ListAccessPointsForObjectLambda</a> </p> </li> </ul>
		 * Delete v20180820/accesspointforobjectlambda/{name}#x-amz-account-id
		 * @param {string} name The name of the access point you want to delete.
		 * @return {void} Success
		 */
		DeleteAccessPointForObjectLambda(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v20180820/accesspointforobjectlambda/' + (name == null ? '' : encodeURIComponent(name)) + '#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns configuration information about the specified Object Lambda Access Point</p> <p>The following actions are related to <code>GetAccessPointForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPointForObjectLambda.html">CreateAccessPointForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointForObjectLambda.html">DeleteAccessPointForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPointsForObjectLambda.html">ListAccessPointsForObjectLambda</a> </p> </li> </ul>
		 * Get v20180820/accesspointforobjectlambda/{name}#x-amz-account-id
		 * @param {string} name The name of the Object Lambda Access Point.
		 * @return {void} Success
		 */
		GetAccessPointForObjectLambda(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/accesspointforobjectlambda/' + (name == null ? '' : encodeURIComponent(name)) + '#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists current S3 Batch Operations jobs and jobs that have ended within the last 30 days for the Amazon Web Services account making the request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html">S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p> <p>Related actions include:</p> <p/> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html">UpdateJobPriority</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a> </p> </li> </ul>
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
		 * <p>Deletes the access point policy for the specified access point.</p> <p/> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html#API_control_DeleteAccessPointPolicy_Examples">Examples</a> section.</p> <p>The following actions are related to <code>DeleteAccessPointPolicy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html">PutAccessPointPolicy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicy.html">GetAccessPointPolicy</a> </p> </li> </ul>
		 * Delete v20180820/accesspoint/{name}/policy#x-amz-account-id
		 * @param {string} name <p>The name of the access point whose policy you want to delete.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;</code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
		 * @return {void} Success
		 */
		DeleteAccessPointPolicy(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v20180820/accesspoint/' + (name == null ? '' : encodeURIComponent(name)) + '/policy#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the access point policy associated with the specified access point.</p> <p>The following actions are related to <code>GetAccessPointPolicy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html">PutAccessPointPolicy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html">DeleteAccessPointPolicy</a> </p> </li> </ul>
		 * Get v20180820/accesspoint/{name}/policy#x-amz-account-id
		 * @param {string} name <p>The name of the access point whose policy you want to retrieve.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;</code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
		 * @return {void} Success
		 */
		GetAccessPointPolicy(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/accesspoint/' + (name == null ? '' : encodeURIComponent(name)) + '/policy#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the resource policy for an Object Lambda Access Point.</p> <p>The following actions are related to <code>DeleteAccessPointPolicyForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyForObjectLambda.html">GetAccessPointPolicyForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicyForObjectLambda.html">PutAccessPointPolicyForObjectLambda</a> </p> </li> </ul>
		 * Delete v20180820/accesspointforobjectlambda/{name}/policy#x-amz-account-id
		 * @param {string} name The name of the Object Lambda Access Point you want to delete the policy for.
		 * @return {void} Success
		 */
		DeleteAccessPointPolicyForObjectLambda(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v20180820/accesspointforobjectlambda/' + (name == null ? '' : encodeURIComponent(name)) + '/policy#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the resource policy for an Object Lambda Access Point.</p> <p>The following actions are related to <code>GetAccessPointPolicyForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicyForObjectLambda.html">DeleteAccessPointPolicyForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicyForObjectLambda.html">PutAccessPointPolicyForObjectLambda</a> </p> </li> </ul>
		 * Get v20180820/accesspointforobjectlambda/{name}/policy#x-amz-account-id
		 * @param {string} name The name of the Object Lambda Access Point.
		 * @return {void} Success
		 */
		GetAccessPointPolicyForObjectLambda(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/accesspointforobjectlambda/' + (name == null ? '' : encodeURIComponent(name)) + '/policy#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This action deletes an Amazon S3 on Outposts bucket. To delete an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html">DeleteBucket</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Deletes the Amazon S3 on Outposts bucket. All objects (including all object versions and delete markers) in the bucket must be deleted before the bucket itself can be deleted. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in <i>Amazon S3 User Guide</i>.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucket.html#API_control_DeleteBucket_Examples">Examples</a> section.</p> <p class="title"> <b>Related Resources</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateBucket.html">CreateBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucket.html">GetBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a> </p> </li> </ul>
		 * Delete v20180820/bucket/{name}#x-amz-account-id
		 * @param {string} name <p>Specifies the bucket being deleted.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>
		 * @return {void} Success
		 */
		DeleteBucket(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v20180820/bucket/' + (name == null ? '' : encodeURIComponent(name)) + '#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets an Amazon S3 on Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html"> Using Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you are using an identity other than the root user of the Amazon Web Services account that owns the Outposts bucket, the calling identity must have the <code>s3-outposts:GetBucket</code> permissions on the specified Outposts bucket and belong to the Outposts bucket owner's account in order to use this action. Only users from Outposts bucket owner account with the right permissions can perform actions on an Outposts bucket. </p> <p> If you don't have <code>s3-outposts:GetBucket</code> permissions or you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a <code>403 Access Denied</code> error.</p> <p>The following actions are related to <code>GetBucket</code> for Amazon S3 on Outposts:</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucket.html#API_control_GetBucket_Examples">Examples</a> section.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateBucket.html">CreateBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucket.html">DeleteBucket</a> </p> </li> </ul>
		 * Get v20180820/bucket/{name}#x-amz-account-id
		 * @param {string} name <p>Specifies the bucket.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>
		 * @return {void} Success
		 */
		GetBucket(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/bucket/' + (name == null ? '' : encodeURIComponent(name)) + '#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This action deletes an Amazon S3 on Outposts bucket's lifecycle configuration. To delete an S3 bucket's lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketLifecycle.html">DeleteBucketLifecycle</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Deletes the lifecycle configuration from the specified Outposts bucket. Amazon S3 on Outposts removes all the lifecycle configuration rules in the lifecycle subresource associated with the bucket. Your objects never expire, and Amazon S3 on Outposts no longer automatically deletes any objects on the basis of rules contained in the deleted lifecycle configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in <i>Amazon S3 User Guide</i>.</p> <p>To use this action, you must have permission to perform the <code>s3-outposts:DeleteLifecycleConfiguration</code> action. By default, the bucket owner has this permission and the Outposts bucket owner can grant this permission to others.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketLifecycleConfiguration.html#API_control_DeleteBucketLifecycleConfiguration_Examples">Examples</a> section.</p> <p>For more information about object expiration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#intro-lifecycle-rules-actions">Elements to Describe Lifecycle Actions</a>.</p> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a> </p> </li> </ul>
		 * Delete v20180820/bucket/{name}/lifecycleconfiguration#x-amz-account-id
		 * @param {string} name <p>Specifies the bucket.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>
		 * @return {void} Success
		 */
		DeleteBucketLifecycleConfiguration(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v20180820/bucket/' + (name == null ? '' : encodeURIComponent(name)) + '/lifecycleconfiguration#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This action gets an Amazon S3 on Outposts bucket's lifecycle configuration. To get an S3 bucket's lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Returns the lifecycle configuration information set on the Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> and for information about lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html"> Object Lifecycle Management</a> in <i>Amazon S3 User Guide</i>.</p> <p>To use this action, you must have permission to perform the <code>s3-outposts:GetLifecycleConfiguration</code> action. The Outposts bucket owner has this permission, by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html#API_control_GetBucketLifecycleConfiguration_Examples">Examples</a> section.</p> <p> <code>GetBucketLifecycleConfiguration</code> has the following special error:</p> <ul> <li> <p>Error code: <code>NoSuchLifecycleConfiguration</code> </p> <ul> <li> <p>Description: The lifecycle configuration does not exist.</p> </li> <li> <p>HTTP Status Code: 404 Not Found</p> </li> <li> <p>SOAP Fault Code Prefix: Client</p> </li> </ul> </li> </ul> <p>The following actions are related to <code>GetBucketLifecycleConfiguration</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketLifecycleConfiguration.html">DeleteBucketLifecycleConfiguration</a> </p> </li> </ul>
		 * Get v20180820/bucket/{name}/lifecycleconfiguration#x-amz-account-id
		 * @param {string} name <p>The Amazon Resource Name (ARN) of the bucket.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>
		 * @return {void} Success
		 */
		GetBucketLifecycleConfiguration(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/bucket/' + (name == null ? '' : encodeURIComponent(name)) + '/lifecycleconfiguration#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This action deletes an Amazon S3 on Outposts bucket policy. To delete an S3 bucket policy, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketPolicy.html">DeleteBucketPolicy</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>This implementation of the DELETE action uses the policy subresource to delete the policy of a specified Amazon S3 on Outposts bucket. If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must have the <code>s3-outposts:DeleteBucketPolicy</code> permissions on the specified Outposts bucket and belong to the bucket owner's account to use this action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in <i>Amazon S3 User Guide</i>.</p> <p>If you don't have <code>DeleteBucketPolicy</code> permissions, Amazon S3 returns a <code>403 Access Denied</code> error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a <code>405 Method Not Allowed</code> error. </p> <important> <p>As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action.</p> </important> <p>For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User Policies</a>. </p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketPolicy.html#API_control_DeleteBucketPolicy_Examples">Examples</a> section.</p> <p>The following actions are related to <code>DeleteBucketPolicy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketPolicy.html">GetBucketPolicy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketPolicy.html">PutBucketPolicy</a> </p> </li> </ul>
		 * Delete v20180820/bucket/{name}/policy#x-amz-account-id
		 * @param {string} name <p>Specifies the bucket.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>
		 * @return {void} Success
		 */
		DeleteBucketPolicy(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v20180820/bucket/' + (name == null ? '' : encodeURIComponent(name)) + '/policy#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This action gets a bucket policy for an Amazon S3 on Outposts bucket. To get a policy for an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicy.html">GetBucketPolicy</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Returns the policy of a specified Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must have the <code>GetBucketPolicy</code> permissions on the specified bucket and belong to the bucket owner's account in order to use this action.</p> <p>Only users from Outposts bucket owner account with the right permissions can perform actions on an Outposts bucket. If you don't have <code>s3-outposts:GetBucketPolicy</code> permissions or you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a <code>403 Access Denied</code> error.</p> <important> <p>As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action.</p> </important> <p>For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User Policies</a>.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketPolicy.html#API_control_GetBucketPolicy_Examples">Examples</a> section.</p> <p>The following actions are related to <code>GetBucketPolicy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketPolicy.html">PutBucketPolicy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketPolicy.html">DeleteBucketPolicy</a> </p> </li> </ul>
		 * Get v20180820/bucket/{name}/policy#x-amz-account-id
		 * @param {string} name <p>Specifies the bucket.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>
		 * @return {void} Success
		 */
		GetBucketPolicy(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/bucket/' + (name == null ? '' : encodeURIComponent(name)) + '/policy#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This operation deletes an Amazon S3 on Outposts bucket's replication configuration. To delete an S3 bucket's replication configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketReplication.html">DeleteBucketReplication</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Deletes the replication configuration from the specified S3 on Outposts bucket.</p> <p>To use this operation, you must have permissions to perform the <code>s3-outposts:PutReplicationConfiguration</code> action. The Outposts bucket owner has this permission by default and can grant it to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsIAM.html">Setting up IAM with S3 on Outposts</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsBucketPolicy.html">Managing access to S3 on Outposts buckets</a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>It can take a while to propagate <code>PUT</code> or <code>DELETE</code> requests for a replication configuration to all S3 on Outposts systems. Therefore, the replication configuration that's returned by a <code>GET</code> request soon after a <code>PUT</code> or <code>DELETE</code> request might return a more recent result than what's on the Outpost. If an Outpost is offline, the delay in updating the replication configuration on that Outpost can be significant.</p> </note> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketReplication.html#API_control_DeleteBucketReplication_Examples">Examples</a> section.</p> <p>For information about S3 replication on Outposts configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html">Replicating objects for S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following operations are related to <code>DeleteBucketReplication</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketReplication.html">PutBucketReplication</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketReplication.html">GetBucketReplication</a> </p> </li> </ul>
		 * Delete v20180820/bucket/{name}/replication#x-amz-account-id
		 * @param {string} name <p>Specifies the S3 on Outposts bucket to delete the replication configuration for.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>
		 * @return {void} Success
		 */
		DeleteBucketReplication(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v20180820/bucket/' + (name == null ? '' : encodeURIComponent(name)) + '/replication#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This operation gets an Amazon S3 on Outposts bucket's replication configuration. To get an S3 bucket's replication configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketReplication.html">GetBucketReplication</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Returns the replication configuration of an S3 on Outposts bucket. For more information about S3 on Outposts, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>. For information about S3 replication on Outposts configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html">Replicating objects for S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>It can take a while to propagate <code>PUT</code> or <code>DELETE</code> requests for a replication configuration to all S3 on Outposts systems. Therefore, the replication configuration that's returned by a <code>GET</code> request soon after a <code>PUT</code> or <code>DELETE</code> request might return a more recent result than what's on the Outpost. If an Outpost is offline, the delay in updating the replication configuration on that Outpost can be significant.</p> </note> <p>This action requires permissions for the <code>s3-outposts:GetReplicationConfiguration</code> action. The Outposts bucket owner has this permission by default and can grant it to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsIAM.html">Setting up IAM with S3 on Outposts</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsBucketPolicy.html">Managing access to S3 on Outposts bucket</a> in the <i>Amazon S3 User Guide</i>.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketReplication.html#API_control_GetBucketReplication_Examples">Examples</a> section.</p> <p>If you include the <code>Filter</code> element in a replication configuration, you must also include the <code>DeleteMarkerReplication</code>, <code>Status</code>, and <code>Priority</code> elements. The response also returns those elements.</p> <p>For information about S3 on Outposts replication failure reasons, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/outposts-replication-eventbridge.html#outposts-replication-failure-codes">Replication failure reasons</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following operations are related to <code>GetBucketReplication</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketReplication.html">PutBucketReplication</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketReplication.html">DeleteBucketReplication</a> </p> </li> </ul>
		 * Get v20180820/bucket/{name}/replication#x-amz-account-id
		 * @param {string} name <p>Specifies the bucket to get the replication information for.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>
		 * @return {void} Success
		 */
		GetBucketReplication(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/bucket/' + (name == null ? '' : encodeURIComponent(name)) + '/replication#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This action deletes an Amazon S3 on Outposts bucket's tags. To delete an S3 bucket tags, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketTagging.html">DeleteBucketTagging</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Deletes the tags from the Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in <i>Amazon S3 User Guide</i>.</p> <p>To use this action, you must have permission to perform the <code>PutBucketTagging</code> action. By default, the bucket owner has this permission and can grant this permission to others. </p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketTagging.html#API_control_DeleteBucketTagging_Examples">Examples</a> section.</p> <p>The following actions are related to <code>DeleteBucketTagging</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketTagging.html">GetBucketTagging</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketTagging.html">PutBucketTagging</a> </p> </li> </ul>
		 * Delete v20180820/bucket/{name}/tagging#x-amz-account-id
		 * @param {string} name <p>The bucket ARN that has the tag set to be removed.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>
		 * @return {void} 
		 */
		DeleteBucketTagging(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v20180820/bucket/' + (name == null ? '' : encodeURIComponent(name)) + '/tagging#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This action gets an Amazon S3 on Outposts bucket's tags. To get an S3 bucket tags, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html">GetBucketTagging</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Returns the tag set associated with the Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <p>To use this action, you must have permission to perform the <code>GetBucketTagging</code> action. By default, the bucket owner has this permission and can grant this permission to others.</p> <p> <code>GetBucketTagging</code> has the following special error:</p> <ul> <li> <p>Error code: <code>NoSuchTagSetError</code> </p> <ul> <li> <p>Description: There is no tag set associated with the bucket.</p> </li> </ul> </li> </ul> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketTagging.html#API_control_GetBucketTagging_Examples">Examples</a> section.</p> <p>The following actions are related to <code>GetBucketTagging</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketTagging.html">PutBucketTagging</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketTagging.html">DeleteBucketTagging</a> </p> </li> </ul>
		 * Get v20180820/bucket/{name}/tagging#x-amz-account-id
		 * @param {string} name <p>Specifies the bucket.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>
		 * @return {void} Success
		 */
		GetBucketTagging(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/bucket/' + (name == null ? '' : encodeURIComponent(name)) + '/tagging#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the entire tag set from the specified S3 Batch Operations job. To use the <code>DeleteJobTagging</code> operation, you must have permission to perform the <code>s3:DeleteJobTagging</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags">Controlling access and labeling jobs using tags</a> in the <i>Amazon S3 User Guide</i>.</p> <p/> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html">GetJobTagging</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutJobTagging.html">PutJobTagging</a> </p> </li> </ul>
		 * Delete v20180820/jobs/{id}/tagging#x-amz-account-id
		 * @param {string} id The ID for the S3 Batch Operations job whose tags you want to delete.
		 * @return {void} Success
		 */
		DeleteJobTagging(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v20180820/jobs/' + (id == null ? '' : encodeURIComponent(id)) + '/tagging#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the tags on an S3 Batch Operations job. To use the <code>GetJobTagging</code> operation, you must have permission to perform the <code>s3:GetJobTagging</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags">Controlling access and labeling jobs using tags</a> in the <i>Amazon S3 User Guide</i>.</p> <p/> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutJobTagging.html">PutJobTagging</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html">DeleteJobTagging</a> </p> </li> </ul>
		 * Get v20180820/jobs/{id}/tagging#x-amz-account-id
		 * @param {string} id The ID for the S3 Batch Operations job whose tags you want to retrieve.
		 * @return {void} Success
		 */
		GetJobTagging(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/jobs/' + (id == null ? '' : encodeURIComponent(id)) + '/tagging#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the <code>PublicAccessBlock</code> configuration for an Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html"> Using Amazon S3 block public access</a>.</p> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetPublicAccessBlock.html">GetPublicAccessBlock</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutPublicAccessBlock.html">PutPublicAccessBlock</a> </p> </li> </ul>
		 * Delete v20180820/configuration/publicAccessBlock#x-amz-account-id
		 * @return {void} Success
		 */
		DeletePublicAccessBlock(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v20180820/configuration/publicAccessBlock#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves the <code>PublicAccessBlock</code> configuration for an Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html"> Using Amazon S3 block public access</a>.</p> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeletePublicAccessBlock.html">DeletePublicAccessBlock</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutPublicAccessBlock.html">PutPublicAccessBlock</a> </p> </li> </ul>
		 * Get v20180820/configuration/publicAccessBlock#x-amz-account-id
		 * @return {void} Success
		 */
		GetPublicAccessBlock(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/configuration/publicAccessBlock#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage activity and usage with Amazon S3 Storage Lens </a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>To use this action, you must have permission to perform the <code>s3:DeleteStorageLensConfiguration</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p> </note>
		 * Delete v20180820/storagelens/{storagelensid}#x-amz-account-id
		 * @param {string} storagelensid The ID of the S3 Storage Lens configuration.
		 * @return {void} Success
		 */
		DeleteStorageLensConfiguration(storagelensid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v20180820/storagelens/' + (storagelensid == null ? '' : encodeURIComponent(storagelensid)) + '#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets the Amazon S3 Storage Lens configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage activity and usage with Amazon S3 Storage Lens </a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>To use this action, you must have permission to perform the <code>s3:GetStorageLensConfiguration</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p> </note>
		 * Get v20180820/storagelens/{storagelensid}#x-amz-account-id
		 * @param {string} storagelensid The ID of the Amazon S3 Storage Lens configuration.
		 * @return {void} Success
		 */
		GetStorageLensConfiguration(storagelensid: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/storagelens/' + (storagelensid == null ? '' : encodeURIComponent(storagelensid)) + '#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the Amazon S3 Storage Lens configuration tags. For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage activity and usage with Amazon S3 Storage Lens </a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>To use this action, you must have permission to perform the <code>s3:DeleteStorageLensConfigurationTagging</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p> </note>
		 * Delete v20180820/storagelens/{storagelensid}/tagging#x-amz-account-id
		 * @param {string} storagelensid The ID of the S3 Storage Lens configuration.
		 * @return {void} Success
		 */
		DeleteStorageLensConfigurationTagging(storagelensid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v20180820/storagelens/' + (storagelensid == null ? '' : encodeURIComponent(storagelensid)) + '/tagging#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets the tags of Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage activity and usage with Amazon S3 Storage Lens </a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>To use this action, you must have permission to perform the <code>s3:GetStorageLensConfigurationTagging</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p> </note>
		 * Get v20180820/storagelens/{storagelensid}/tagging#x-amz-account-id
		 * @param {string} storagelensid The ID of the Amazon S3 Storage Lens configuration.
		 * @return {void} Success
		 */
		GetStorageLensConfigurationTagging(storagelensid: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/storagelens/' + (storagelensid == null ? '' : encodeURIComponent(storagelensid)) + '/tagging#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves the configuration parameters and status for a Batch Operations job. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html">S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p> <p/> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html">ListJobs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html">UpdateJobPriority</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a> </p> </li> </ul>
		 * Get v20180820/jobs/{id}#x-amz-account-id
		 * @param {string} id The ID for the job whose information you want to retrieve.
		 * @return {void} Success
		 */
		DescribeJob(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/jobs/' + (id == null ? '' : encodeURIComponent(id)) + '#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves the status of an asynchronous request to manage a Multi-Region Access Point. For more information about managing Multi-Region Access Points and how asynchronous requests work, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following actions are related to <code>GetMultiRegionAccessPoint</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPoint.html">GetMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListMultiRegionAccessPoints.html">ListMultiRegionAccessPoints</a> </p> </li> </ul>
		 * Get v20180820/async-requests/mrap/{request_token}#x-amz-account-id
		 * @param {string} request_token The request token associated with the request you want to know about. This request token is returned as part of the response when you make an asynchronous request. You provide this token to query about the status of the asynchronous action.
		 * @return {void} Success
		 */
		DescribeMultiRegionAccessPointOperation(request_token: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/async-requests/mrap/' + (request_token == null ? '' : encodeURIComponent(request_token)) + '#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns configuration for an Object Lambda Access Point.</p> <p>The following actions are related to <code>GetAccessPointConfigurationForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointConfigurationForObjectLambda.html">PutAccessPointConfigurationForObjectLambda</a> </p> </li> </ul>
		 * Get v20180820/accesspointforobjectlambda/{name}/configuration#x-amz-account-id
		 * @param {string} name The name of the Object Lambda Access Point you want to return the configuration for.
		 * @return {void} Success
		 */
		GetAccessPointConfigurationForObjectLambda(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/accesspointforobjectlambda/' + (name == null ? '' : encodeURIComponent(name)) + '/configuration#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Indicates whether the specified access point currently has a policy that allows public access. For more information about public access through access points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">Managing Data Access with Amazon S3 access points</a> in the <i>Amazon S3 User Guide</i>.
		 * Get v20180820/accesspoint/{name}/policyStatus#x-amz-account-id
		 * @param {string} name The name of the access point whose policy status you want to retrieve.
		 * @return {void} Success
		 */
		GetAccessPointPolicyStatus(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/accesspoint/' + (name == null ? '' : encodeURIComponent(name)) + '/policyStatus#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the status of the resource policy associated with an Object Lambda Access Point.
		 * Get v20180820/accesspointforobjectlambda/{name}/policyStatus#x-amz-account-id
		 * @param {string} name The name of the Object Lambda Access Point.
		 * @return {void} Success
		 */
		GetAccessPointPolicyStatusForObjectLambda(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/accesspointforobjectlambda/' + (name == null ? '' : encodeURIComponent(name)) + '/policyStatus#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>This operation returns the versioning state for S3 on Outposts buckets only. To return the versioning state for an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html">GetBucketVersioning</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Returns the versioning state for an S3 on Outposts bucket. With S3 Versioning, you can save multiple distinct copies of your objects and recover from unintended user actions and application failures.</p> <p>If you've never set versioning on your bucket, it has no versioning state. In that case, the <code>GetBucketVersioning</code> request does not return a versioning state value.</p> <p>For more information about versioning, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html">Versioning</a> in the <i>Amazon S3 User Guide</i>.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketVersioning.html#API_control_GetBucketVersioning_Examples">Examples</a> section.</p> <p>The following operations are related to <code>GetBucketVersioning</code> for S3 on Outposts.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketVersioning.html">PutBucketVersioning</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a> </p> </li> </ul>
		 * Get v20180820/bucket/{name}/versioning#x-amz-account-id
		 * @param {string} name The S3 on Outposts bucket to return the versioning state for.
		 * @return {void} Success
		 */
		GetBucketVersioning(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/bucket/' + (name == null ? '' : encodeURIComponent(name)) + '/versioning#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns configuration information about the specified Multi-Region Access Point.</p> <p>This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following actions are related to <code>GetMultiRegionAccessPoint</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListMultiRegionAccessPoints.html">ListMultiRegionAccessPoints</a> </p> </li> </ul>
		 * Get v20180820/mrap/instances/{name}#x-amz-account-id
		 * @param {string} name The name of the Multi-Region Access Point whose configuration information you want to receive. The name of the Multi-Region Access Point is different from the alias. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.
		 * @return {void} Success
		 */
		GetMultiRegionAccessPoint(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/mrap/instances/' + (name == null ? '' : encodeURIComponent(name)) + '#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the access control policy of the specified Multi-Region Access Point.</p> <p>This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following actions are related to <code>GetMultiRegionAccessPointPolicy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicyStatus.html">GetMultiRegionAccessPointPolicyStatus</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPointPolicy.html">PutMultiRegionAccessPointPolicy</a> </p> </li> </ul>
		 * Get v20180820/mrap/instances/{name}/policy#x-amz-account-id
		 * @param {string} name Specifies the Multi-Region Access Point. The name of the Multi-Region Access Point is different from the alias. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.
		 * @return {void} Success
		 */
		GetMultiRegionAccessPointPolicy(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/mrap/instances/' + (name == null ? '' : encodeURIComponent(name)) + '/policy#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Indicates whether the specified Multi-Region Access Point has an access control policy that allows public access.</p> <p>This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following actions are related to <code>GetMultiRegionAccessPointPolicyStatus</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicy.html">GetMultiRegionAccessPointPolicy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPointPolicy.html">PutMultiRegionAccessPointPolicy</a> </p> </li> </ul>
		 * Get v20180820/mrap/instances/{name}/policystatus#x-amz-account-id
		 * @param {string} name Specifies the Multi-Region Access Point. The name of the Multi-Region Access Point is different from the alias. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.
		 * @return {void} Success
		 */
		GetMultiRegionAccessPointPolicyStatus(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/mrap/instances/' + (name == null ? '' : encodeURIComponent(name)) + '/policystatus#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the routing configuration for a Multi-Region Access Point, indicating which Regions are active or passive.</p> <p>To obtain routing control changes and failover requests, use the Amazon S3 failover control infrastructure endpoints in these five Amazon Web Services Regions:</p> <ul> <li> <p> <code>us-east-1</code> </p> </li> <li> <p> <code>us-west-2</code> </p> </li> <li> <p> <code>ap-southeast-2</code> </p> </li> <li> <p> <code>ap-northeast-1</code> </p> </li> <li> <p> <code>eu-west-1</code> </p> </li> </ul> <note> <p>Your Amazon S3 bucket does not need to be in these five Regions.</p> </note>
		 * Get v20180820/mrap/instances/{mrap}/routes#x-amz-account-id
		 * @param {string} mrap The Multi-Region Access Point ARN.
		 * @return {void} Success
		 */
		GetMultiRegionAccessPointRoutes(mrap: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/mrap/instances/' + (mrap == null ? '' : encodeURIComponent(mrap)) + '/routes#x-amz-account-id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of the access points that are owned by the current account that's associated with the specified bucket. You can retrieve up to 1000 access points per call. If the specified bucket has more than 1,000 access points (or the number specified in <code>maxResults</code>, whichever is less), the response will include a continuation token that you can use to list the additional access points.</p> <p/> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html#API_control_GetAccessPoint_Examples">Examples</a> section.</p> <p>The following actions are related to <code>ListAccessPoints</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html">CreateAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html">DeleteAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html">GetAccessPoint</a> </p> </li> </ul>
		 * Get v20180820/accesspoint#x-amz-account-id
		 * @param {string} bucket <p>The name of the bucket whose associated access points you want to list.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>
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
		 * <p>Returns some or all (up to 1,000) access points associated with the Object Lambda Access Point per call. If there are more access points than what can be returned in one call, the response will include a continuation token that you can use to list the additional access points.</p> <p>The following actions are related to <code>ListAccessPointsForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPointForObjectLambda.html">CreateAccessPointForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointForObjectLambda.html">DeleteAccessPointForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointForObjectLambda.html">GetAccessPointForObjectLambda</a> </p> </li> </ul>
		 * Get v20180820/accesspointforobjectlambda#x-amz-account-id
		 * @param {string} nextToken If the list has more access points than can be returned in one call to this API, this field contains a continuation token that you can provide in subsequent calls to this API to retrieve additional access points.
		 * @param {number} maxResults The maximum number of access points that you want to include in the list. The response may contain fewer access points but will never contain more. If there are more than this number of access points, then the response will include a continuation token in the <code>NextToken</code> field that you can use to retrieve the next page of access points.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {void} Success
		 */
		ListAccessPointsForObjectLambda(nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/accesspointforobjectlambda#x-amz-account-id?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of the Multi-Region Access Points currently associated with the specified Amazon Web Services account. Each call can return up to 100 Multi-Region Access Points, the maximum number of Multi-Region Access Points that can be associated with a single account.</p> <p>This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following actions are related to <code>ListMultiRegionAccessPoint</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPoint.html">GetMultiRegionAccessPoint</a> </p> </li> </ul>
		 * Get v20180820/mrap/instances#x-amz-account-id
		 * @param {string} nextToken Not currently used. Do not use this parameter.
		 * @param {number} maxResults Not currently used. Do not use this parameter.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {void} Success
		 */
		ListMultiRegionAccessPoints(nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/mrap/instances#x-amz-account-id?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of all Outposts buckets in an Outpost that are owned by the authenticated sender of the request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <p>For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and <code>x-amz-outpost-id</code> in your request, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListRegionalBuckets.html#API_control_ListRegionalBuckets_Examples">Examples</a> section.</p>
		 * Get v20180820/bucket#x-amz-account-id
		 * @param {string} nextToken <p/>
		 * @param {number} maxResults <p/>
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {void} Success
		 */
		ListRegionalBuckets(nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/bucket#x-amz-account-id?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a list of Amazon S3 Storage Lens configurations. For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage activity and usage with Amazon S3 Storage Lens </a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>To use this action, you must have permission to perform the <code>s3:ListStorageLensConfigurations</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p> </note>
		 * Get v20180820/storagelens#x-amz-account-id
		 * @param {string} nextToken A pagination token to request the next page of results.
		 * @param {string} NextToken Pagination token
		 * @return {void} Success
		 */
		ListStorageLensConfigurations(nextToken: string | null | undefined, NextToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v20180820/storagelens#x-amz-account-id?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates an existing S3 Batch Operations job's priority. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html">S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p> <p/> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html">ListJobs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a> </p> </li> </ul>
		 * Post v20180820/jobs/{id}/priority#x-amz-account-id&priority
		 * @param {string} id The ID for the job whose priority you want to update.
		 * @param {number} priority The priority you want to assign to this job.
		 * @return {void} Success
		 */
		UpdateJobPriority(id: string, priority: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v20180820/jobs/' + (id == null ? '' : encodeURIComponent(id)) + '/priority#x-amz-account-id&priority&priority=' + priority, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the status for the specified job. Use this action to confirm that you want to run a job or to cancel an existing job. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html">S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p> <p/> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html">ListJobs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a> </p> </li> </ul>
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

