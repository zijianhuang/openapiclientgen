import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateJobResult {
		JobId?: string | null;
	}


	/** Contains the configuration parameters for a <code>Lambda Invoke</code> operation. */
	export interface LambdaInvokeOperation {
		FunctionArn?: string | null;
	}


	/** Contains the configuration parameters for a PUT Copy object operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Copy object API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectCOPY.html">PUT Object - Copy</a>. */
	export interface S3CopyObjectOperation {
		TargetResource?: string | null;
		CannedAccessControlList?: S3CopyObjectOperationCannedAccessControlList | null;
		AccessControlGrants?: Array<S3Grant> | null;
		MetadataDirective?: S3CopyObjectOperationMetadataDirective | null;
		ModifiedSinceConstraint?: Date | null;

		/** <p/> */
		NewObjectMetadata?: S3ObjectMetadata | null;
		NewObjectTagging?: Array<S3Tag> | null;
		RedirectLocation?: string | null;
		RequesterPays?: boolean | null;
		StorageClass?: S3CopyObjectOperationStorageClass | null;
		UnModifiedSinceConstraint?: Date | null;
		SSEAwsKmsKeyId?: string | null;
		TargetKeyPrefix?: string | null;
		ObjectLockLegalHoldStatus?: S3CopyObjectOperationObjectLockLegalHoldStatus | null;
		ObjectLockMode?: S3CopyObjectOperationObjectLockMode | null;
		ObjectLockRetainUntilDate?: Date | null;
	}

	export enum S3CopyObjectOperationCannedAccessControlList { _private = 0, public_read = 1, public_read_write = 2, aws_exec_read = 3, authenticated_read = 4, bucket_owner_read = 5, bucket_owner_full_control = 6 }


	/** <p/> */
	export interface S3Grant {

		/** <p/> */
		Grantee?: S3Grantee | null;
		Permission?: S3GrantPermission | null;
	}


	/** <p/> */
	export interface S3Grantee {
		TypeIdentifier?: S3GranteeTypeIdentifier | null;
		Identifier?: string | null;
		DisplayName?: string | null;
	}

	export enum S3GranteeTypeIdentifier { id = 0, emailAddress = 1, uri = 2 }

	export enum S3GrantPermission { FULL_CONTROL = 0, READ = 1, WRITE = 2, READ_ACP = 3, WRITE_ACP = 4 }

	export enum S3CopyObjectOperationMetadataDirective { COPY = 0, REPLACE = 1 }


	/** <p/> */
	export interface S3ObjectMetadata {
		CacheControl?: string | null;
		ContentDisposition?: string | null;
		ContentEncoding?: string | null;
		ContentLanguage?: string | null;
		UserMetadata?: S3UserMetadata | null;
		ContentLength?: number | null;
		ContentMD5?: string | null;
		ContentType?: string | null;
		HttpExpiresDate?: Date | null;
		RequesterCharged?: boolean | null;
		SSEAlgorithm?: S3ObjectMetadataSSEAlgorithm | null;
	}

	export interface S3UserMetadata {
	}

	export enum S3ObjectMetadataSSEAlgorithm { AES256 = 0, KMS = 1 }


	/** <p/> */
	export interface S3Tag {
		Key: string;
		Value: string;
	}

	export enum S3CopyObjectOperationStorageClass { STANDARD = 0, STANDARD_IA = 1, ONEZONE_IA = 2, GLACIER = 3, INTELLIGENT_TIERING = 4, DEEP_ARCHIVE = 5 }

	export enum S3CopyObjectOperationObjectLockLegalHoldStatus { OFF = 0, ON = 1 }

	export enum S3CopyObjectOperationObjectLockMode { COMPLIANCE = 0, GOVERNANCE = 1 }


	/** Contains the configuration parameters for a Set Object ACL operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object acl API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTacl.html">PUT Object acl</a>. */
	export interface S3SetObjectAclOperation {

		/** <p/> */
		AccessControlPolicy?: S3AccessControlPolicy | null;
	}


	/** <p/> */
	export interface S3AccessControlPolicy {

		/** <p/> */
		AccessControlList?: S3AccessControlList | null;
		CannedAccessControlList?: S3AccessControlPolicyCannedAccessControlList | null;
	}


	/** <p/> */
	export interface S3AccessControlList {

		/**
		 * <p/>
		 * Required
		 */
		Owner: S3ObjectOwner;
		Grants?: Array<S3Grant> | null;
	}


	/** <p/> */
	export interface S3ObjectOwner {
		ID?: string | null;
		DisplayName?: string | null;
	}

	export enum S3AccessControlPolicyCannedAccessControlList { _private = 0, public_read = 1, public_read_write = 2, aws_exec_read = 3, authenticated_read = 4, bucket_owner_read = 5, bucket_owner_full_control = 6 }


	/** Contains the configuration parameters for a Set Object Tagging operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object tagging API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTtagging.html">PUT Object tagging</a>. */
	export interface S3SetObjectTaggingOperation {
		TagSet?: Array<S3Tag> | null;
	}


	/** Contains the configuration parameters for an Initiate Glacier Restore job. Amazon S3 Batch Operations passes each value through to the underlying POST Object restore API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOSTrestore.html#RESTObjectPOSTrestore-restore-request">Restoring Archives</a>. */
	export interface S3InitiateRestoreObjectOperation {
		ExpirationInDays?: number | null;
		GlacierJobTier?: S3InitiateRestoreObjectOperationGlacierJobTier | null;
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


	/** <p/> */
	export interface S3ObjectLockLegalHold {
		Status: S3CopyObjectOperationObjectLockLegalHoldStatus;
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


	/** <p/> */
	export interface S3Retention {
		RetainUntilDate?: Date | null;
		Mode?: S3CopyObjectOperationObjectLockMode | null;
	}

	export enum JobReportFormat { Report_CSV_20180820 = 0 }

	export enum JobReportScope { AllTasks = 0, FailedTasksOnly = 1 }


	/** Describes the format of a manifest. If the manifest is in CSV format, also describes the columns contained within the manifest. */
	export interface JobManifestSpec {
		Format: JobManifestSpecFormat;
		Fields?: Array<JobManifestFieldName> | null;
	}

	export enum JobManifestSpecFormat { S3BatchOperations_CSV_20180820 = 0, S3InventoryReport_CSV_20161130 = 1 }

	export enum JobManifestFieldName { Ignore = 0, Bucket = 1, Key = 2, VersionId = 3 }


	/** Contains the information required to locate a manifest object. */
	export interface JobManifestLocation {
		ObjectArn: string;
		ObjectVersionId?: string | null;
		ETag: string;
	}

	export interface TooManyRequestsException {
	}

	export interface BadRequestException {
	}

	export interface IdempotencyException {
	}

	export interface InternalServiceException {
	}

	export interface DeleteJobTaggingResult {
	}

	export interface NotFoundException {
	}

	export interface DescribeJobResult {

		/** A container element for the job configuration and status information returned by a <code>Describe Job</code> request. */
		Job?: JobDescriptor | null;
	}


	/** A container element for the job configuration and status information returned by a <code>Describe Job</code> request. */
	export interface JobDescriptor {
		JobId?: string | null;
		ConfirmationRequired?: boolean | null;
		Description?: string | null;
		JobArn?: string | null;
		Status?: JobDescriptorStatus | null;

		/** Contains the configuration information for a job's manifest. */
		Manifest?: JobManifest | null;

		/** The operation that you want this job to perform on each object listed in the manifest. For more information about the available operations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Available Operations</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
		Operation?: JobOperation | null;
		Priority?: number | null;

		/** Describes the total number of tasks that the specified job has executed, the number of tasks that succeeded, and the number of tasks that failed. */
		ProgressSummary?: JobProgressSummary | null;
		StatusUpdateReason?: string | null;
		FailureReasons?: Array<JobFailure> | null;

		/** Contains the configuration parameters for a job-completion report. */
		Report?: JobReport | null;
		CreationTime?: Date | null;
		TerminationDate?: Date | null;
		RoleArn?: string | null;
		SuspendedDate?: Date | null;
		SuspendedCause?: string | null;
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


	/** The operation that you want this job to perform on each object listed in the manifest. For more information about the available operations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Available Operations</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
	export interface JobOperation {

		/** Contains the configuration parameters for a <code>Lambda Invoke</code> operation. */
		LambdaInvoke?: LambdaInvokeOperation | null;

		/** Contains the configuration parameters for a PUT Copy object operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Copy object API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectCOPY.html">PUT Object - Copy</a>. */
		S3PutObjectCopy?: S3CopyObjectOperation | null;

		/** Contains the configuration parameters for a Set Object ACL operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object acl API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTacl.html">PUT Object acl</a>. */
		S3PutObjectAcl?: S3SetObjectAclOperation | null;

		/** Contains the configuration parameters for a Set Object Tagging operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object tagging API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTtagging.html">PUT Object tagging</a>. */
		S3PutObjectTagging?: S3SetObjectTaggingOperation | null;

		/** Contains the configuration parameters for an Initiate Glacier Restore job. Amazon S3 Batch Operations passes each value through to the underlying POST Object restore API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOSTrestore.html#RESTObjectPOSTrestore-restore-request">Restoring Archives</a>. */
		S3InitiateRestoreObject?: S3InitiateRestoreObjectOperation | null;

		/** Contains the configuration parameters for a Set Object Legal Hold operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object Legal Hold API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.htmll#object-lock-legal-holds">PUT Object Legal Hold</a>. */
		S3PutObjectLegalHold?: S3SetObjectLegalHoldOperation | null;

		/** Contains the configuration parameters for a Set Object Retention operation. Amazon S3 Batch Operations passes each value through to the underlying PUT Object Retention API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-modes">PUT Object Retention</a>. */
		S3PutObjectRetention?: S3SetObjectRetentionOperation | null;
	}


	/** Describes the total number of tasks that the specified job has executed, the number of tasks that succeeded, and the number of tasks that failed. */
	export interface JobProgressSummary {
		TotalNumberOfTasks?: number | null;
		NumberOfTasksSucceeded?: number | null;
		NumberOfTasksFailed?: number | null;
	}


	/** If this job failed, this element indicates why the job failed. */
	export interface JobFailure {
		FailureCode?: string | null;
		FailureReason?: string | null;
	}


	/** Contains the configuration parameters for a job-completion report. */
	export interface JobReport {
		Bucket?: string | null;
		Format?: JobReportFormat | null;
		Enabled: boolean;
		Prefix?: string | null;
		ReportScope?: JobReportScope | null;
	}

	export interface GetAccessPointResult {
		Name?: string | null;
		Bucket?: string | null;
		NetworkOrigin?: GetAccessPointResultNetworkOrigin | null;

		/** The virtual private cloud (VPC) configuration for an access point. */
		VpcConfiguration?: VpcConfiguration | null;

		/** The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the Amazon Simple Storage Service Developer Guide. */
		PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration | null;
		CreationDate?: Date | null;
	}

	export enum GetAccessPointResultNetworkOrigin { Internet = 0, VPC = 1 }


	/** The virtual private cloud (VPC) configuration for an access point. */
	export interface VpcConfiguration {
		VpcId: string;
	}


	/** The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the Amazon Simple Storage Service Developer Guide. */
	export interface PublicAccessBlockConfiguration {
		BlockPublicAcls?: boolean | null;
		IgnorePublicAcls?: boolean | null;
		BlockPublicPolicy?: boolean | null;
		RestrictPublicBuckets?: boolean | null;
	}

	export interface GetAccessPointPolicyResult {
		Policy?: string | null;
	}

	export interface GetAccessPointPolicyStatusResult {

		/** Indicates whether this access point policy is public. For more information about how Amazon S3 evaluates policies to determine whether they are public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
		PolicyStatus?: PolicyStatus | null;
	}


	/** Indicates whether this access point policy is public. For more information about how Amazon S3 evaluates policies to determine whether they are public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.  */
	export interface PolicyStatus {
		IsPublic?: boolean | null;
	}

	export interface GetJobTaggingResult {
		Tags?: Array<S3Tag> | null;
	}

	export interface GetPublicAccessBlockOutput {

		/** The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the Amazon Simple Storage Service Developer Guide. */
		PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration | null;
	}

	export interface NoSuchPublicAccessBlockConfiguration {
	}

	export interface ListAccessPointsResult {
		AccessPointList?: Array<AccessPoint> | null;
		NextToken?: string | null;
	}


	/** An access point used to access a bucket. */
	export interface AccessPoint {
		Name: string;
		NetworkOrigin: GetAccessPointResultNetworkOrigin;

		/** The virtual private cloud (VPC) configuration for an access point. */
		VpcConfiguration?: VpcConfiguration | null;
		Bucket: string;
	}

	export interface ListJobsResult {
		NextToken?: string | null;
		Jobs?: Array<JobListDescriptor> | null;
	}


	/** Contains the configuration and status information for a single job retrieved as part of a job list. */
	export interface JobListDescriptor {
		JobId?: string | null;
		Description?: string | null;
		Operation?: JobListDescriptorOperation | null;
		Priority?: number | null;
		Status?: JobDescriptorStatus | null;
		CreationTime?: Date | null;
		TerminationDate?: Date | null;

		/** Describes the total number of tasks that the specified job has executed, the number of tasks that succeeded, and the number of tasks that failed. */
		ProgressSummary?: JobProgressSummary | null;
	}

	export enum JobListDescriptorOperation { LambdaInvoke = 0, S3PutObjectCopy = 1, S3PutObjectAcl = 2, S3PutObjectTagging = 3, S3InitiateRestoreObject = 4, S3PutObjectLegalHold = 5, S3PutObjectRetention = 6 }

	export enum JobStatus { Active = 0, Cancelled = 1, Cancelling = 2, Complete = 3, Completing = 4, Failed = 5, Failing = 6, New = 7, Paused = 8, Pausing = 9, Preparing = 10, Ready = 11, Suspended = 12 }

	export interface InvalidRequestException {
	}

	export interface InvalidNextTokenException {
	}

	export interface PutJobTaggingResult {
	}

	export interface TooManyTagsException {
	}

	export interface UpdateJobPriorityResult {
		JobId: string;
		Priority: number;
	}

	export interface UpdateJobStatusResult {
		JobId?: string | null;
		Status?: JobDescriptorStatus | null;
		StatusUpdateReason?: string | null;
	}

	export interface JobStatusException {
	}

	export enum NetworkOrigin { Internet = 0, VPC = 1 }

	export interface CreateAccessPointRequest {
		Bucket: string;

		/** The virtual private cloud (VPC) configuration for an access point. */
		VpcConfiguration?: VpcConfiguration | null;

		/** The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the Amazon Simple Storage Service Developer Guide. */
		PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration | null;
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
		ClientRequestToken: string;

		/**
		 * Contains the configuration information for a job's manifest.
		 * Required
		 */
		Manifest: JobManifest;
		Description?: string | null;
		Priority: number;
		RoleArn: string;
		Tags?: Array<S3Tag> | null;
	}

	export interface DeleteAccessPointPolicyRequest {
	}

	export interface DeleteAccessPointRequest {
	}

	export interface DeleteJobTaggingRequest {
	}

	export interface DeletePublicAccessBlockRequest {
	}

	export interface DescribeJobRequest {
	}

	export interface GetAccessPointPolicyRequest {
	}

	export interface GetAccessPointPolicyStatusRequest {
	}

	export interface GetAccessPointRequest {
	}

	export interface GetJobTaggingRequest {
	}

	export interface GetPublicAccessBlockRequest {
	}

	export enum OperationName { LambdaInvoke = 0, S3PutObjectCopy = 1, S3PutObjectAcl = 2, S3PutObjectTagging = 3, S3InitiateRestoreObject = 4, S3PutObjectLegalHold = 5, S3PutObjectRetention = 6 }

	export enum JobManifestFormat { S3BatchOperations_CSV_20180820 = 0, S3InventoryReport_CSV_20161130 = 1 }

	export interface ListAccessPointsRequest {
	}

	export interface ListJobsRequest {
	}

	export interface PutAccessPointPolicyRequest {
		Policy: string;
	}

	export interface PutJobTaggingRequest {
		Tags: Array<S3Tag>;
	}

	export interface PutPublicAccessBlockRequest {

		/**
		 * The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the Amazon Simple Storage Service Developer Guide.
		 * Required
		 */
		PublicAccessBlockConfiguration: PublicAccessBlockConfiguration;
	}

	export enum RequestedJobStatus { Cancelled = 0, Ready = 1 }

	export enum S3CannedAccessControlList { _private = 0, public_read = 1, public_read_write = 2, aws_exec_read = 3, authenticated_read = 4, bucket_owner_read = 5, bucket_owner_full_control = 6 }

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

	export interface UpdateJobStatusRequest {
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
			return this.http.get(this.baseUri + 'v20180820/jobs#x-amz-account-id?' + jobStatuses.map(z => `jobStatuses=${z}`).join('&') + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { observe: 'response', responseType: 'text' });
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

