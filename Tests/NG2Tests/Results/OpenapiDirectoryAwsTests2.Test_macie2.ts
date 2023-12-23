import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcceptInvitationResponse {
	}
	export interface AcceptInvitationResponseFormProperties {
	}
	export function CreateAcceptInvitationResponseFormGroup() {
		return new FormGroup<AcceptInvitationResponseFormProperties>({
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
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

	export interface ArchiveFindingsResponse {
	}
	export interface ArchiveFindingsResponseFormProperties {
	}
	export function CreateArchiveFindingsResponseFormGroup() {
		return new FormGroup<ArchiveFindingsResponseFormProperties>({
		});

	}

	export interface BatchGetCustomDataIdentifiersResponse {
		customDataIdentifiers?: Array<BatchGetCustomDataIdentifierSummary>;
		notFoundIdentifierIds?: Array<string>;
	}
	export interface BatchGetCustomDataIdentifiersResponseFormProperties {
	}
	export function CreateBatchGetCustomDataIdentifiersResponseFormGroup() {
		return new FormGroup<BatchGetCustomDataIdentifiersResponseFormProperties>({
		});

	}


	/** Provides information about a custom data identifier. */
	export interface BatchGetCustomDataIdentifierSummary {
		arn?: string | null;
		createdAt?: Date | null;
		deleted?: boolean | null;
		description?: string | null;
		id?: string | null;
		name?: string | null;
	}

	/** Provides information about a custom data identifier. */
	export interface BatchGetCustomDataIdentifierSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetCustomDataIdentifierSummaryFormGroup() {
		return new FormGroup<BatchGetCustomDataIdentifierSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateClassificationJobResponse {
		jobArn?: string | null;
		jobId?: string | null;
	}
	export interface CreateClassificationJobResponseFormProperties {
		jobArn: FormControl<string | null | undefined>,
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateCreateClassificationJobResponseFormGroup() {
		return new FormGroup<CreateClassificationJobResponseFormProperties>({
			jobArn: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies which S3 buckets contain the objects that a classification job analyzes. */
	export interface S3BucketDefinitionForJob {
		accountId?: string | null;
		buckets?: Array<string>;
	}

	/** Specifies which S3 buckets contain the objects that a classification job analyzes. */
	export interface S3BucketDefinitionForJobFormProperties {
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateS3BucketDefinitionForJobFormGroup() {
		return new FormGroup<S3BucketDefinitionForJobFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that specifies conditions for including or excluding objects from the job. */
	export interface Scoping {

		/** Reserved for future use. */
		excludes?: JobScopingBlock;

		/** Reserved for future use. */
		includes?: JobScopingBlock;
	}

	/** An object that specifies conditions for including or excluding objects from the job. */
	export interface ScopingFormProperties {
	}
	export function CreateScopingFormGroup() {
		return new FormGroup<ScopingFormProperties>({
		});

	}


	/** Reserved for future use. */
	export interface JobScopingBlock {
		and?: Array<JobScopeTerm>;
	}

	/** Reserved for future use. */
	export interface JobScopingBlockFormProperties {
	}
	export function CreateJobScopingBlockFormGroup() {
		return new FormGroup<JobScopingBlockFormProperties>({
		});

	}


	/** Specifies one or more conditions that determine which objects a classification job analyzes. */
	export interface JobScopeTerm {

		/** Specifies a property-based condition that determines whether an object is included or excluded from a classification job. */
		simpleScopeTerm?: SimpleScopeTerm;

		/** Specifies a tag-based condition that determines whether an object is included or excluded from a classification job. */
		tagScopeTerm?: TagScopeTerm;
	}

	/** Specifies one or more conditions that determine which objects a classification job analyzes. */
	export interface JobScopeTermFormProperties {
	}
	export function CreateJobScopeTermFormGroup() {
		return new FormGroup<JobScopeTermFormProperties>({
		});

	}


	/** Specifies a property-based condition that determines whether an object is included or excluded from a classification job. */
	export interface SimpleScopeTerm {

		/** The operator to use in a condition. Valid values are: */
		comparator?: SimpleScopeTermComparator | null;

		/** The property to use in a condition that determines which objects are analyzed by a classification job. Valid values are: */
		key?: SimpleScopeTermKey | null;
		values?: Array<string>;
	}

	/** Specifies a property-based condition that determines whether an object is included or excluded from a classification job. */
	export interface SimpleScopeTermFormProperties {

		/** The operator to use in a condition. Valid values are: */
		comparator: FormControl<SimpleScopeTermComparator | null | undefined>,

		/** The property to use in a condition that determines which objects are analyzed by a classification job. Valid values are: */
		key: FormControl<SimpleScopeTermKey | null | undefined>,
	}
	export function CreateSimpleScopeTermFormGroup() {
		return new FormGroup<SimpleScopeTermFormProperties>({
			comparator: new FormControl<SimpleScopeTermComparator | null | undefined>(undefined),
			key: new FormControl<SimpleScopeTermKey | null | undefined>(undefined),
		});

	}

	export enum SimpleScopeTermComparator { EQ = 0, GT = 1, GTE = 2, LT = 3, LTE = 4, NE = 5, CONTAINS = 6 }

	export enum SimpleScopeTermKey { BUCKET_CREATION_DATE = 0, OBJECT_EXTENSION = 1, OBJECT_LAST_MODIFIED_DATE = 2, OBJECT_SIZE = 3, TAG = 4 }


	/** Specifies a tag-based condition that determines whether an object is included or excluded from a classification job. */
	export interface TagScopeTerm {

		/** The operator to use in a condition. Valid values are: */
		comparator?: SimpleScopeTermComparator | null;
		key?: string | null;
		tagValues?: Array<TagValuePair>;

		/** The type of object to apply a tag-based condition to. Valid values are: */
		target?: TagScopeTermTarget | null;
	}

	/** Specifies a tag-based condition that determines whether an object is included or excluded from a classification job. */
	export interface TagScopeTermFormProperties {

		/** The operator to use in a condition. Valid values are: */
		comparator: FormControl<SimpleScopeTermComparator | null | undefined>,
		key: FormControl<string | null | undefined>,

		/** The type of object to apply a tag-based condition to. Valid values are: */
		target: FormControl<TagScopeTermTarget | null | undefined>,
	}
	export function CreateTagScopeTermFormGroup() {
		return new FormGroup<TagScopeTermFormProperties>({
			comparator: new FormControl<SimpleScopeTermComparator | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<TagScopeTermTarget | null | undefined>(undefined),
		});

	}


	/** Specifies a tag key and value, as a pair, to use in a tag-based condition for a classification job. */
	export interface TagValuePair {
		key?: string | null;
		value?: string | null;
	}

	/** Specifies a tag key and value, as a pair, to use in a tag-based condition for a classification job. */
	export interface TagValuePairFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagValuePairFormGroup() {
		return new FormGroup<TagValuePairFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TagScopeTermTarget { S3_OBJECT = 0 }


	/** Run the job once a day, every day. If specified, this is an empty object. */
	export interface DailySchedule {
	}

	/** Run the job once a day, every day. If specified, this is an empty object. */
	export interface DailyScheduleFormProperties {
	}
	export function CreateDailyScheduleFormGroup() {
		return new FormGroup<DailyScheduleFormProperties>({
		});

	}


	/** Run the job once a month, on a specific day of the month. This value can be an integer from 1 through 30. */
	export interface MonthlySchedule {
		dayOfMonth?: number | null;
	}

	/** Run the job once a month, on a specific day of the month. This value can be an integer from 1 through 30. */
	export interface MonthlyScheduleFormProperties {
		dayOfMonth: FormControl<number | null | undefined>,
	}
	export function CreateMonthlyScheduleFormGroup() {
		return new FormGroup<MonthlyScheduleFormProperties>({
			dayOfMonth: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Reserved for future use. */
	export interface WeeklySchedule {
		dayOfWeek?: WeeklyScheduleDayOfWeek | null;
	}

	/** Reserved for future use. */
	export interface WeeklyScheduleFormProperties {
		dayOfWeek: FormControl<WeeklyScheduleDayOfWeek | null | undefined>,
	}
	export function CreateWeeklyScheduleFormGroup() {
		return new FormGroup<WeeklyScheduleFormProperties>({
			dayOfWeek: new FormControl<WeeklyScheduleDayOfWeek | null | undefined>(undefined),
		});

	}

	export enum WeeklyScheduleDayOfWeek { SUNDAY = 0, MONDAY = 1, TUESDAY = 2, WEDNESDAY = 3, THURSDAY = 4, FRIDAY = 5, SATURDAY = 6 }

	export interface CreateCustomDataIdentifierResponse {
		customDataIdentifierId?: string | null;
	}
	export interface CreateCustomDataIdentifierResponseFormProperties {
		customDataIdentifierId: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomDataIdentifierResponseFormGroup() {
		return new FormGroup<CreateCustomDataIdentifierResponseFormProperties>({
			customDataIdentifierId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFindingsFilterResponse {
		arn?: string | null;
		id?: string | null;
	}
	export interface CreateFindingsFilterResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateCreateFindingsFilterResponseFormGroup() {
		return new FormGroup<CreateFindingsFilterResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a condition that defines a property, operator, and value to use to filter the results of a query for findings. */
	export interface Criterion {
	}

	/** Specifies a condition that defines a property, operator, and value to use to filter the results of a query for findings. */
	export interface CriterionFormProperties {
	}
	export function CreateCriterionFormGroup() {
		return new FormGroup<CriterionFormProperties>({
		});

	}

	export interface CreateInvitationsResponse {
		unprocessedAccounts?: Array<UnprocessedAccount>;
	}
	export interface CreateInvitationsResponseFormProperties {
	}
	export function CreateCreateInvitationsResponseFormGroup() {
		return new FormGroup<CreateInvitationsResponseFormProperties>({
		});

	}


	/**  <p>Provides information about an account-related request that hasn't been processed.</p> */
	export interface UnprocessedAccount {
		accountId?: string | null;

		/** The source of an error, issue, or delay. Possible values are: */
		errorCode?: UnprocessedAccountErrorCode | null;
		errorMessage?: string | null;
	}

	/**  <p>Provides information about an account-related request that hasn't been processed.</p> */
	export interface UnprocessedAccountFormProperties {
		accountId: FormControl<string | null | undefined>,

		/** The source of an error, issue, or delay. Possible values are: */
		errorCode: FormControl<UnprocessedAccountErrorCode | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateUnprocessedAccountFormGroup() {
		return new FormGroup<UnprocessedAccountFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<UnprocessedAccountErrorCode | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UnprocessedAccountErrorCode { ClientError = 0, InternalError = 1 }

	export interface CreateMemberResponse {
		arn?: string | null;
	}
	export interface CreateMemberResponseFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateMemberResponseFormGroup() {
		return new FormGroup<CreateMemberResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSampleFindingsResponse {
	}
	export interface CreateSampleFindingsResponseFormProperties {
	}
	export function CreateCreateSampleFindingsResponseFormGroup() {
		return new FormGroup<CreateSampleFindingsResponseFormProperties>({
		});

	}


	/** The type of finding. Valid values are: */
	export enum FindingType { SensitiveDataS3Object_Multiple = 0, SensitiveDataS3Object_Financial = 1, SensitiveDataS3Object_Personal = 2, SensitiveDataS3Object_Credentials = 3, SensitiveDataS3Object_CustomIdentifier = 4, PolicyIAMUser_S3BucketPublic = 5, PolicyIAMUser_S3BucketSharedExternally = 6, PolicyIAMUser_S3BucketReplicatedExternally = 7, PolicyIAMUser_S3BucketEncryptionDisabled = 8, PolicyIAMUser_S3BlockPublicAccessDisabled = 9 }

	export interface DeclineInvitationsResponse {
		unprocessedAccounts?: Array<UnprocessedAccount>;
	}
	export interface DeclineInvitationsResponseFormProperties {
	}
	export function CreateDeclineInvitationsResponseFormGroup() {
		return new FormGroup<DeclineInvitationsResponseFormProperties>({
		});

	}

	export interface DeleteCustomDataIdentifierResponse {
	}
	export interface DeleteCustomDataIdentifierResponseFormProperties {
	}
	export function CreateDeleteCustomDataIdentifierResponseFormGroup() {
		return new FormGroup<DeleteCustomDataIdentifierResponseFormProperties>({
		});

	}

	export interface DeleteFindingsFilterResponse {
	}
	export interface DeleteFindingsFilterResponseFormProperties {
	}
	export function CreateDeleteFindingsFilterResponseFormGroup() {
		return new FormGroup<DeleteFindingsFilterResponseFormProperties>({
		});

	}

	export interface DeleteInvitationsResponse {
		unprocessedAccounts?: Array<UnprocessedAccount>;
	}
	export interface DeleteInvitationsResponseFormProperties {
	}
	export function CreateDeleteInvitationsResponseFormGroup() {
		return new FormGroup<DeleteInvitationsResponseFormProperties>({
		});

	}

	export interface DeleteMemberResponse {
	}
	export interface DeleteMemberResponseFormProperties {
	}
	export function CreateDeleteMemberResponseFormGroup() {
		return new FormGroup<DeleteMemberResponseFormProperties>({
		});

	}

	export interface DescribeBucketsResponse {
		buckets?: Array<BucketMetadata>;
		nextToken?: string | null;
	}
	export interface DescribeBucketsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBucketsResponseFormGroup() {
		return new FormGroup<DescribeBucketsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about an S3 bucket that Amazon Macie monitors and analyzes. */
	export interface BucketMetadata {
		accountId?: string | null;
		bucketArn?: string | null;
		bucketCreatedAt?: Date | null;
		bucketName?: string | null;
		classifiableObjectCount?: number | null;
		lastUpdated?: Date | null;
		objectCount?: number | null;

		/** The total number of objects that are in the bucket, grouped by server-side encryption type. This includes a grouping that reports the total number of objects that aren't encrypted. */
		objectCountByEncryptionType?: ObjectCountByEncryptionType;

		/** Provides information about permissions settings that determine whether an S3 bucket is publicly accessible. */
		publicAccess?: BucketPublicAccess;
		region?: string | null;

		/** Provides information about settings that define whether one or more objects in an S3 bucket are replicated to S3 buckets for other AWS accounts and, if so, which accounts. */
		replicationDetails?: ReplicationDetails;
		sharedAccess?: BucketMetadataSharedAccess | null;
		sizeInBytes?: number | null;
		sizeInBytesCompressed?: number | null;
		tags?: Array<KeyValuePair>;
		versioning?: boolean | null;
	}

	/** Provides information about an S3 bucket that Amazon Macie monitors and analyzes. */
	export interface BucketMetadataFormProperties {
		accountId: FormControl<string | null | undefined>,
		bucketArn: FormControl<string | null | undefined>,
		bucketCreatedAt: FormControl<Date | null | undefined>,
		bucketName: FormControl<string | null | undefined>,
		classifiableObjectCount: FormControl<number | null | undefined>,
		lastUpdated: FormControl<Date | null | undefined>,
		objectCount: FormControl<number | null | undefined>,
		region: FormControl<string | null | undefined>,
		sharedAccess: FormControl<BucketMetadataSharedAccess | null | undefined>,
		sizeInBytes: FormControl<number | null | undefined>,
		sizeInBytesCompressed: FormControl<number | null | undefined>,
		versioning: FormControl<boolean | null | undefined>,
	}
	export function CreateBucketMetadataFormGroup() {
		return new FormGroup<BucketMetadataFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			bucketArn: new FormControl<string | null | undefined>(undefined),
			bucketCreatedAt: new FormControl<Date | null | undefined>(undefined),
			bucketName: new FormControl<string | null | undefined>(undefined),
			classifiableObjectCount: new FormControl<number | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			objectCount: new FormControl<number | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			sharedAccess: new FormControl<BucketMetadataSharedAccess | null | undefined>(undefined),
			sizeInBytes: new FormControl<number | null | undefined>(undefined),
			sizeInBytesCompressed: new FormControl<number | null | undefined>(undefined),
			versioning: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The total number of objects that are in the bucket, grouped by server-side encryption type. This includes a grouping that reports the total number of objects that aren't encrypted. */
	export interface ObjectCountByEncryptionType {
		customerManaged?: number | null;
		kmsManaged?: number | null;
		s3Managed?: number | null;
		unencrypted?: number | null;
	}

	/** The total number of objects that are in the bucket, grouped by server-side encryption type. This includes a grouping that reports the total number of objects that aren't encrypted. */
	export interface ObjectCountByEncryptionTypeFormProperties {
		customerManaged: FormControl<number | null | undefined>,
		kmsManaged: FormControl<number | null | undefined>,
		s3Managed: FormControl<number | null | undefined>,
		unencrypted: FormControl<number | null | undefined>,
	}
	export function CreateObjectCountByEncryptionTypeFormGroup() {
		return new FormGroup<ObjectCountByEncryptionTypeFormProperties>({
			customerManaged: new FormControl<number | null | undefined>(undefined),
			kmsManaged: new FormControl<number | null | undefined>(undefined),
			s3Managed: new FormControl<number | null | undefined>(undefined),
			unencrypted: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information about permissions settings that determine whether an S3 bucket is publicly accessible. */
	export interface BucketPublicAccess {
		effectivePermission?: BucketPublicAccessEffectivePermission | null;

		/** The account-level and bucket-level permissions settings for an S3 bucket, or the bucket that contains an object. */
		permissionConfiguration?: BucketPermissionConfiguration;
	}

	/** Provides information about permissions settings that determine whether an S3 bucket is publicly accessible. */
	export interface BucketPublicAccessFormProperties {
		effectivePermission: FormControl<BucketPublicAccessEffectivePermission | null | undefined>,
	}
	export function CreateBucketPublicAccessFormGroup() {
		return new FormGroup<BucketPublicAccessFormProperties>({
			effectivePermission: new FormControl<BucketPublicAccessEffectivePermission | null | undefined>(undefined),
		});

	}

	export enum BucketPublicAccessEffectivePermission { PUBLIC = 0, NOT_PUBLIC = 1 }


	/** The account-level and bucket-level permissions settings for an S3 bucket, or the bucket that contains an object. */
	export interface BucketPermissionConfiguration {

		/** Provides information about account-level permissions settings that apply to an S3 bucket. */
		accountLevelPermissions?: AccountLevelPermissions;

		/** Provides information about bucket-level permissions settings for an S3 bucket. */
		bucketLevelPermissions?: BucketLevelPermissions;
	}

	/** The account-level and bucket-level permissions settings for an S3 bucket, or the bucket that contains an object. */
	export interface BucketPermissionConfigurationFormProperties {
	}
	export function CreateBucketPermissionConfigurationFormGroup() {
		return new FormGroup<BucketPermissionConfigurationFormProperties>({
		});

	}


	/** Provides information about account-level permissions settings that apply to an S3 bucket. */
	export interface AccountLevelPermissions {

		/** Provides information about the block public access settings for an S3 bucket. These settings can apply to a bucket at the account level or bucket level. For detailed information about each setting, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">Using Amazon S3 block public access</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
		blockPublicAccess?: BlockPublicAccess;
	}

	/** Provides information about account-level permissions settings that apply to an S3 bucket. */
	export interface AccountLevelPermissionsFormProperties {
	}
	export function CreateAccountLevelPermissionsFormGroup() {
		return new FormGroup<AccountLevelPermissionsFormProperties>({
		});

	}


	/** Provides information about the block public access settings for an S3 bucket. These settings can apply to a bucket at the account level or bucket level. For detailed information about each setting, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">Using Amazon S3 block public access</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
	export interface BlockPublicAccess {
		blockPublicAcls?: boolean | null;
		blockPublicPolicy?: boolean | null;
		ignorePublicAcls?: boolean | null;
		restrictPublicBuckets?: boolean | null;
	}

	/** Provides information about the block public access settings for an S3 bucket. These settings can apply to a bucket at the account level or bucket level. For detailed information about each setting, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">Using Amazon S3 block public access</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
	export interface BlockPublicAccessFormProperties {
		blockPublicAcls: FormControl<boolean | null | undefined>,
		blockPublicPolicy: FormControl<boolean | null | undefined>,
		ignorePublicAcls: FormControl<boolean | null | undefined>,
		restrictPublicBuckets: FormControl<boolean | null | undefined>,
	}
	export function CreateBlockPublicAccessFormGroup() {
		return new FormGroup<BlockPublicAccessFormProperties>({
			blockPublicAcls: new FormControl<boolean | null | undefined>(undefined),
			blockPublicPolicy: new FormControl<boolean | null | undefined>(undefined),
			ignorePublicAcls: new FormControl<boolean | null | undefined>(undefined),
			restrictPublicBuckets: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides information about bucket-level permissions settings for an S3 bucket. */
	export interface BucketLevelPermissions {

		/** Provides information about the permissions settings of the bucket-level access control list (ACL) for an S3 bucket. */
		accessControlList?: AccessControlList;

		/** Provides information about the block public access settings for an S3 bucket. These settings can apply to a bucket at the account level or bucket level. For detailed information about each setting, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">Using Amazon S3 block public access</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
		blockPublicAccess?: BlockPublicAccess;

		/** Provides information about the permissions settings of a bucket policy for an S3 bucket. */
		bucketPolicy?: BucketPolicy;
	}

	/** Provides information about bucket-level permissions settings for an S3 bucket. */
	export interface BucketLevelPermissionsFormProperties {
	}
	export function CreateBucketLevelPermissionsFormGroup() {
		return new FormGroup<BucketLevelPermissionsFormProperties>({
		});

	}


	/** Provides information about the permissions settings of the bucket-level access control list (ACL) for an S3 bucket. */
	export interface AccessControlList {
		allowsPublicReadAccess?: boolean | null;
		allowsPublicWriteAccess?: boolean | null;
	}

	/** Provides information about the permissions settings of the bucket-level access control list (ACL) for an S3 bucket. */
	export interface AccessControlListFormProperties {
		allowsPublicReadAccess: FormControl<boolean | null | undefined>,
		allowsPublicWriteAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateAccessControlListFormGroup() {
		return new FormGroup<AccessControlListFormProperties>({
			allowsPublicReadAccess: new FormControl<boolean | null | undefined>(undefined),
			allowsPublicWriteAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides information about the permissions settings of a bucket policy for an S3 bucket. */
	export interface BucketPolicy {
		allowsPublicReadAccess?: boolean | null;
		allowsPublicWriteAccess?: boolean | null;
	}

	/** Provides information about the permissions settings of a bucket policy for an S3 bucket. */
	export interface BucketPolicyFormProperties {
		allowsPublicReadAccess: FormControl<boolean | null | undefined>,
		allowsPublicWriteAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateBucketPolicyFormGroup() {
		return new FormGroup<BucketPolicyFormProperties>({
			allowsPublicReadAccess: new FormControl<boolean | null | undefined>(undefined),
			allowsPublicWriteAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides information about settings that define whether one or more objects in an S3 bucket are replicated to S3 buckets for other AWS accounts and, if so, which accounts. */
	export interface ReplicationDetails {
		replicated?: boolean | null;
		replicatedExternally?: boolean | null;
		replicationAccounts?: Array<string>;
	}

	/** Provides information about settings that define whether one or more objects in an S3 bucket are replicated to S3 buckets for other AWS accounts and, if so, which accounts. */
	export interface ReplicationDetailsFormProperties {
		replicated: FormControl<boolean | null | undefined>,
		replicatedExternally: FormControl<boolean | null | undefined>,
	}
	export function CreateReplicationDetailsFormGroup() {
		return new FormGroup<ReplicationDetailsFormProperties>({
			replicated: new FormControl<boolean | null | undefined>(undefined),
			replicatedExternally: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum BucketMetadataSharedAccess { EXTERNAL = 0, INTERNAL = 1, NOT_SHARED = 2 }


	/** Provides information about the tags that are associated with an S3 bucket or object. Each tag consists of a required tag key and an associated tag value. */
	export interface KeyValuePair {
		key?: string | null;
		value?: string | null;
	}

	/** Provides information about the tags that are associated with an S3 bucket or object. Each tag consists of a required tag key and an associated tag value. */
	export interface KeyValuePairFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateKeyValuePairFormGroup() {
		return new FormGroup<KeyValuePairFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the operator to use in an attribute-based condition that filters the results of a query for information about S3 buckets. */
	export interface BucketCriteriaAdditionalProperties {
		eq?: Array<string>;
		gt?: number | null;
		gte?: number | null;
		lt?: number | null;
		lte?: number | null;
		neq?: Array<string>;
		prefix?: string | null;
	}

	/** Specifies the operator to use in an attribute-based condition that filters the results of a query for information about S3 buckets. */
	export interface BucketCriteriaAdditionalPropertiesFormProperties {
		gt: FormControl<number | null | undefined>,
		gte: FormControl<number | null | undefined>,
		lt: FormControl<number | null | undefined>,
		lte: FormControl<number | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateBucketCriteriaAdditionalPropertiesFormGroup() {
		return new FormGroup<BucketCriteriaAdditionalPropertiesFormProperties>({
			gt: new FormControl<number | null | undefined>(undefined),
			gte: new FormControl<number | null | undefined>(undefined),
			lt: new FormControl<number | null | undefined>(undefined),
			lte: new FormControl<number | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OrderBy { ASC = 0, DESC = 1 }

	export interface DescribeClassificationJobResponse {
		clientToken?: string | null;
		createdAt?: Date | null;
		customDataIdentifierIds?: Array<string>;
		description?: string | null;
		initialRun?: boolean | null;
		jobArn?: string | null;
		jobId?: string | null;

		/** The current status of a classification job. Valid values are: */
		jobStatus?: DescribeClassificationJobResponseJobStatus | null;

		/** The schedule for running a classification job. Valid values are: */
		jobType?: DescribeClassificationJobResponseJobType | null;
		lastRunTime?: Date | null;
		name?: string | null;

		/** Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. */
		s3JobDefinition?: S3JobDefinition;
		samplingPercentage?: number | null;

		/** Specifies the recurrence pattern for running a classification job. */
		scheduleFrequency?: JobScheduleFrequency;

		/** Provides processing statistics for a classification job. */
		statistics?: Statistics;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: TagMap;
	}
	export interface DescribeClassificationJobResponseFormProperties {
		clientToken: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		initialRun: FormControl<boolean | null | undefined>,
		jobArn: FormControl<string | null | undefined>,
		jobId: FormControl<string | null | undefined>,

		/** The current status of a classification job. Valid values are: */
		jobStatus: FormControl<DescribeClassificationJobResponseJobStatus | null | undefined>,

		/** The schedule for running a classification job. Valid values are: */
		jobType: FormControl<DescribeClassificationJobResponseJobType | null | undefined>,
		lastRunTime: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		samplingPercentage: FormControl<number | null | undefined>,
	}
	export function CreateDescribeClassificationJobResponseFormGroup() {
		return new FormGroup<DescribeClassificationJobResponseFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			initialRun: new FormControl<boolean | null | undefined>(undefined),
			jobArn: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			jobStatus: new FormControl<DescribeClassificationJobResponseJobStatus | null | undefined>(undefined),
			jobType: new FormControl<DescribeClassificationJobResponseJobType | null | undefined>(undefined),
			lastRunTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			samplingPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DescribeClassificationJobResponseJobStatus { RUNNING = 0, PAUSED = 1, CANCELLED = 2, COMPLETE = 3, IDLE = 4 }

	export enum DescribeClassificationJobResponseJobType { ONE_TIME = 0, SCHEDULED = 1 }


	/** Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. */
	export interface S3JobDefinition {
		bucketDefinitions?: Array<S3BucketDefinitionForJob>;

		/** An object that specifies conditions for including or excluding objects from the job. */
		scoping?: Scoping;
	}

	/** Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. */
	export interface S3JobDefinitionFormProperties {
	}
	export function CreateS3JobDefinitionFormGroup() {
		return new FormGroup<S3JobDefinitionFormProperties>({
		});

	}


	/** Specifies the recurrence pattern for running a classification job. */
	export interface JobScheduleFrequency {

		/** Run the job once a day, every day. If specified, this is an empty object. */
		dailySchedule?: DailySchedule;

		/** Run the job once a month, on a specific day of the month. This value can be an integer from 1 through 30. */
		monthlySchedule?: MonthlySchedule;

		/** Reserved for future use. */
		weeklySchedule?: WeeklySchedule;
	}

	/** Specifies the recurrence pattern for running a classification job. */
	export interface JobScheduleFrequencyFormProperties {
	}
	export function CreateJobScheduleFrequencyFormGroup() {
		return new FormGroup<JobScheduleFrequencyFormProperties>({
		});

	}


	/** Provides processing statistics for a classification job. */
	export interface Statistics {
		approximateNumberOfObjectsToProcess?: number | null;
		numberOfRuns?: number | null;
	}

	/** Provides processing statistics for a classification job. */
	export interface StatisticsFormProperties {
		approximateNumberOfObjectsToProcess: FormControl<number | null | undefined>,
		numberOfRuns: FormControl<number | null | undefined>,
	}
	export function CreateStatisticsFormGroup() {
		return new FormGroup<StatisticsFormProperties>({
			approximateNumberOfObjectsToProcess: new FormControl<number | null | undefined>(undefined),
			numberOfRuns: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
	export interface TagMap {
	}

	/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface DescribeOrganizationConfigurationResponse {
		autoEnable?: boolean | null;
		maxAccountLimitReached?: boolean | null;
	}
	export interface DescribeOrganizationConfigurationResponseFormProperties {
		autoEnable: FormControl<boolean | null | undefined>,
		maxAccountLimitReached: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeOrganizationConfigurationResponseFormGroup() {
		return new FormGroup<DescribeOrganizationConfigurationResponseFormProperties>({
			autoEnable: new FormControl<boolean | null | undefined>(undefined),
			maxAccountLimitReached: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DisableMacieResponse {
	}
	export interface DisableMacieResponseFormProperties {
	}
	export function CreateDisableMacieResponseFormGroup() {
		return new FormGroup<DisableMacieResponseFormProperties>({
		});

	}

	export interface DisableOrganizationAdminAccountResponse {
	}
	export interface DisableOrganizationAdminAccountResponseFormProperties {
	}
	export function CreateDisableOrganizationAdminAccountResponseFormGroup() {
		return new FormGroup<DisableOrganizationAdminAccountResponseFormProperties>({
		});

	}

	export interface DisassociateFromMasterAccountResponse {
	}
	export interface DisassociateFromMasterAccountResponseFormProperties {
	}
	export function CreateDisassociateFromMasterAccountResponseFormGroup() {
		return new FormGroup<DisassociateFromMasterAccountResponseFormProperties>({
		});

	}

	export interface DisassociateMemberResponse {
	}
	export interface DisassociateMemberResponseFormProperties {
	}
	export function CreateDisassociateMemberResponseFormGroup() {
		return new FormGroup<DisassociateMemberResponseFormProperties>({
		});

	}

	export interface EnableMacieResponse {
	}
	export interface EnableMacieResponseFormProperties {
	}
	export function CreateEnableMacieResponseFormGroup() {
		return new FormGroup<EnableMacieResponseFormProperties>({
		});

	}

	export interface EnableOrganizationAdminAccountResponse {
	}
	export interface EnableOrganizationAdminAccountResponseFormProperties {
	}
	export function CreateEnableOrganizationAdminAccountResponseFormGroup() {
		return new FormGroup<EnableOrganizationAdminAccountResponseFormProperties>({
		});

	}

	export interface GetBucketStatisticsResponse {
		bucketCount?: number | null;

		/** The total number of buckets that are publicly accessible, based on a combination of permissions settings for each bucket. */
		bucketCountByEffectivePermission?: BucketCountByEffectivePermission;

		/** The total number of buckets, grouped by server-side encryption type. This object also reports the total number of buckets that aren't encrypted. */
		bucketCountByEncryptionType?: BucketCountByEncryptionType;

		/** The total number of buckets that are shared with another AWS account or configured to support cross-origin resource sharing (CORS). */
		bucketCountBySharedAccessType?: BucketCountBySharedAccessType;
		classifiableObjectCount?: number | null;
		lastUpdated?: Date | null;
		objectCount?: number | null;
		sizeInBytes?: number | null;
		sizeInBytesCompressed?: number | null;
	}
	export interface GetBucketStatisticsResponseFormProperties {
		bucketCount: FormControl<number | null | undefined>,
		classifiableObjectCount: FormControl<number | null | undefined>,
		lastUpdated: FormControl<Date | null | undefined>,
		objectCount: FormControl<number | null | undefined>,
		sizeInBytes: FormControl<number | null | undefined>,
		sizeInBytesCompressed: FormControl<number | null | undefined>,
	}
	export function CreateGetBucketStatisticsResponseFormGroup() {
		return new FormGroup<GetBucketStatisticsResponseFormProperties>({
			bucketCount: new FormControl<number | null | undefined>(undefined),
			classifiableObjectCount: new FormControl<number | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			objectCount: new FormControl<number | null | undefined>(undefined),
			sizeInBytes: new FormControl<number | null | undefined>(undefined),
			sizeInBytesCompressed: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The total number of buckets that are publicly accessible, based on a combination of permissions settings for each bucket. */
	export interface BucketCountByEffectivePermission {
		publiclyAccessible?: number | null;
		publiclyReadable?: number | null;
		publiclyWritable?: number | null;
	}

	/** The total number of buckets that are publicly accessible, based on a combination of permissions settings for each bucket. */
	export interface BucketCountByEffectivePermissionFormProperties {
		publiclyAccessible: FormControl<number | null | undefined>,
		publiclyReadable: FormControl<number | null | undefined>,
		publiclyWritable: FormControl<number | null | undefined>,
	}
	export function CreateBucketCountByEffectivePermissionFormGroup() {
		return new FormGroup<BucketCountByEffectivePermissionFormProperties>({
			publiclyAccessible: new FormControl<number | null | undefined>(undefined),
			publiclyReadable: new FormControl<number | null | undefined>(undefined),
			publiclyWritable: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The total number of buckets, grouped by server-side encryption type. This object also reports the total number of buckets that aren't encrypted. */
	export interface BucketCountByEncryptionType {
		kmsManaged?: number | null;
		s3Managed?: number | null;
		unencrypted?: number | null;
	}

	/** The total number of buckets, grouped by server-side encryption type. This object also reports the total number of buckets that aren't encrypted. */
	export interface BucketCountByEncryptionTypeFormProperties {
		kmsManaged: FormControl<number | null | undefined>,
		s3Managed: FormControl<number | null | undefined>,
		unencrypted: FormControl<number | null | undefined>,
	}
	export function CreateBucketCountByEncryptionTypeFormGroup() {
		return new FormGroup<BucketCountByEncryptionTypeFormProperties>({
			kmsManaged: new FormControl<number | null | undefined>(undefined),
			s3Managed: new FormControl<number | null | undefined>(undefined),
			unencrypted: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The total number of buckets that are shared with another AWS account or configured to support cross-origin resource sharing (CORS). */
	export interface BucketCountBySharedAccessType {
		external?: number | null;
		internal?: number | null;
		notShared?: number | null;
	}

	/** The total number of buckets that are shared with another AWS account or configured to support cross-origin resource sharing (CORS). */
	export interface BucketCountBySharedAccessTypeFormProperties {
		external: FormControl<number | null | undefined>,
		internal: FormControl<number | null | undefined>,
		notShared: FormControl<number | null | undefined>,
	}
	export function CreateBucketCountBySharedAccessTypeFormGroup() {
		return new FormGroup<BucketCountBySharedAccessTypeFormProperties>({
			external: new FormControl<number | null | undefined>(undefined),
			internal: new FormControl<number | null | undefined>(undefined),
			notShared: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetClassificationExportConfigurationResponse {

		/** Specifies where to export data classification results to, and the encryption settings to use when storing results in that location. Currently, you can export classification results only to an S3 bucket. */
		configuration?: ClassificationExportConfiguration;
	}
	export interface GetClassificationExportConfigurationResponseFormProperties {
	}
	export function CreateGetClassificationExportConfigurationResponseFormGroup() {
		return new FormGroup<GetClassificationExportConfigurationResponseFormProperties>({
		});

	}


	/** Specifies where to export data classification results to, and the encryption settings to use when storing results in that location. Currently, you can export classification results only to an S3 bucket. */
	export interface ClassificationExportConfiguration {

		/** Specifies an S3 bucket to export data classification results to, and the encryption settings to use when storing results in that bucket. */
		s3Destination?: S3Destination;
	}

	/** Specifies where to export data classification results to, and the encryption settings to use when storing results in that location. Currently, you can export classification results only to an S3 bucket. */
	export interface ClassificationExportConfigurationFormProperties {
	}
	export function CreateClassificationExportConfigurationFormGroup() {
		return new FormGroup<ClassificationExportConfigurationFormProperties>({
		});

	}


	/** Specifies an S3 bucket to export data classification results to, and the encryption settings to use when storing results in that bucket. */
	export interface S3Destination {

		/** Required */
		bucketName: string;
		keyPrefix?: string | null;

		/** Required */
		kmsKeyArn: string;
	}

	/** Specifies an S3 bucket to export data classification results to, and the encryption settings to use when storing results in that bucket. */
	export interface S3DestinationFormProperties {

		/** Required */
		bucketName: FormControl<string | null | undefined>,
		keyPrefix: FormControl<string | null | undefined>,

		/** Required */
		kmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateS3DestinationFormGroup() {
		return new FormGroup<S3DestinationFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyPrefix: new FormControl<string | null | undefined>(undefined),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCustomDataIdentifierResponse {
		arn?: string | null;
		createdAt?: Date | null;
		deleted?: boolean | null;
		description?: string | null;
		id?: string | null;
		ignoreWords?: Array<string>;
		keywords?: Array<string>;
		maximumMatchDistance?: number | null;
		name?: string | null;
		regex?: string | null;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: TagMap;
	}
	export interface GetCustomDataIdentifierResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		maximumMatchDistance: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		regex: FormControl<string | null | undefined>,
	}
	export function CreateGetCustomDataIdentifierResponseFormGroup() {
		return new FormGroup<GetCustomDataIdentifierResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			maximumMatchDistance: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			regex: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFindingStatisticsResponse {
		countsByGroup?: Array<GroupCount>;
	}
	export interface GetFindingStatisticsResponseFormProperties {
	}
	export function CreateGetFindingStatisticsResponseFormGroup() {
		return new FormGroup<GetFindingStatisticsResponseFormProperties>({
		});

	}


	/** Provides a group of results for a query that retrieved information about findings. */
	export interface GroupCount {
		count?: number | null;
		groupKey?: string | null;
	}

	/** Provides a group of results for a query that retrieved information about findings. */
	export interface GroupCountFormProperties {
		count: FormControl<number | null | undefined>,
		groupKey: FormControl<string | null | undefined>,
	}
	export function CreateGroupCountFormGroup() {
		return new FormGroup<GroupCountFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			groupKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The grouping to sort the results by. Valid values are: */
	export enum FindingStatisticsSortAttributeName { groupKey = 0, count = 1 }

	export interface GetFindingsResponse {
		findings?: Array<Finding>;
	}
	export interface GetFindingsResponseFormProperties {
	}
	export function CreateGetFindingsResponseFormGroup() {
		return new FormGroup<GetFindingsResponseFormProperties>({
		});

	}


	/** Provides information about a finding. */
	export interface Finding {
		accountId?: string | null;
		archived?: boolean | null;

		/** The category of the finding. Valid values are: */
		category?: FindingCategory | null;

		/** Provides information about a sensitive data finding, including the classification job that produced the finding. */
		classificationDetails?: ClassificationDetails;
		count?: number | null;
		createdAt?: Date | null;
		description?: string | null;
		id?: string | null;
		partition?: string | null;

		/** Provides detailed information about a policy finding. */
		policyDetails?: PolicyDetails;
		region?: string | null;

		/** Provides information about the resources that a finding applies to. */
		resourcesAffected?: ResourcesAffected;
		sample?: boolean | null;
		schemaVersion?: string | null;

		/** Provides the numeric score and textual representation of a severity value. */
		severity?: Severity;
		title?: string | null;

		/** The type of finding. Valid values are: */
		type?: FindingType | null;
		updatedAt?: Date | null;
	}

	/** Provides information about a finding. */
	export interface FindingFormProperties {
		accountId: FormControl<string | null | undefined>,
		archived: FormControl<boolean | null | undefined>,

		/** The category of the finding. Valid values are: */
		category: FormControl<FindingCategory | null | undefined>,
		count: FormControl<number | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		partition: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
		sample: FormControl<boolean | null | undefined>,
		schemaVersion: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** The type of finding. Valid values are: */
		type: FormControl<FindingType | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateFindingFormGroup() {
		return new FormGroup<FindingFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			archived: new FormControl<boolean | null | undefined>(undefined),
			category: new FormControl<FindingCategory | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			partition: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			sample: new FormControl<boolean | null | undefined>(undefined),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<FindingType | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum FindingCategory { CLASSIFICATION = 0, POLICY = 1 }


	/** Provides information about a sensitive data finding, including the classification job that produced the finding. */
	export interface ClassificationDetails {
		detailedResultsLocation?: string | null;
		jobArn?: string | null;
		jobId?: string | null;

		/** Provides detailed information about a sensitive data finding, including the types and number of occurrences of the data that was found. */
		result?: ClassificationResult;
	}

	/** Provides information about a sensitive data finding, including the classification job that produced the finding. */
	export interface ClassificationDetailsFormProperties {
		detailedResultsLocation: FormControl<string | null | undefined>,
		jobArn: FormControl<string | null | undefined>,
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateClassificationDetailsFormGroup() {
		return new FormGroup<ClassificationDetailsFormProperties>({
			detailedResultsLocation: new FormControl<string | null | undefined>(undefined),
			jobArn: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides detailed information about a sensitive data finding, including the types and number of occurrences of the data that was found. */
	export interface ClassificationResult {

		/** Provides information about the number of occurrences of the data that produced a sensitive data finding, and the custom data identifiers that detected the data for the finding. */
		customDataIdentifiers?: CustomDataIdentifiers;
		mimeType?: string | null;

		/** Provides information about the category and number of occurrences of sensitive data that produced a finding. */
		sensitiveData?: Array<SensitiveDataItem>;
		sizeClassified?: number | null;

		/** Provides information about the status of a sensitive data finding. */
		status?: ClassificationResultStatus;
	}

	/** Provides detailed information about a sensitive data finding, including the types and number of occurrences of the data that was found. */
	export interface ClassificationResultFormProperties {
		mimeType: FormControl<string | null | undefined>,
		sizeClassified: FormControl<number | null | undefined>,
	}
	export function CreateClassificationResultFormGroup() {
		return new FormGroup<ClassificationResultFormProperties>({
			mimeType: new FormControl<string | null | undefined>(undefined),
			sizeClassified: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information about the number of occurrences of the data that produced a sensitive data finding, and the custom data identifiers that detected the data for the finding. */
	export interface CustomDataIdentifiers {

		/** Reserved for future use. */
		detections?: Array<CustomDetection>;
		totalCount?: number | null;
	}

	/** Provides information about the number of occurrences of the data that produced a sensitive data finding, and the custom data identifiers that detected the data for the finding. */
	export interface CustomDataIdentifiersFormProperties {
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateCustomDataIdentifiersFormGroup() {
		return new FormGroup<CustomDataIdentifiersFormProperties>({
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information about a custom data identifier that produced a sensitive data finding, and the number of occurrences of the data that it detected for the finding. */
	export interface CustomDetection {
		arn?: string | null;
		count?: number | null;
		name?: string | null;
	}

	/** Provides information about a custom data identifier that produced a sensitive data finding, and the number of occurrences of the data that it detected for the finding. */
	export interface CustomDetectionFormProperties {
		arn: FormControl<string | null | undefined>,
		count: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCustomDetectionFormGroup() {
		return new FormGroup<CustomDetectionFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the category, type, and number of occurrences of sensitive data that produced a finding. */
	export interface SensitiveDataItem {
		category?: SensitiveDataItemCategory | null;

		/** Reserved for future use. */
		detections?: Array<DefaultDetection>;
		totalCount?: number | null;
	}

	/** Provides information about the category, type, and number of occurrences of sensitive data that produced a finding. */
	export interface SensitiveDataItemFormProperties {
		category: FormControl<SensitiveDataItemCategory | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateSensitiveDataItemFormGroup() {
		return new FormGroup<SensitiveDataItemFormProperties>({
			category: new FormControl<SensitiveDataItemCategory | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SensitiveDataItemCategory { FINANCIAL_INFORMATION = 0, PERSONAL_INFORMATION = 1, CREDENTIALS = 2, CUSTOM_IDENTIFIER = 3 }


	/** Provides information about sensitive data that was detected by managed data identifiers and produced a finding. */
	export interface DefaultDetection {
		count?: number | null;
		type?: string | null;
	}

	/** Provides information about sensitive data that was detected by managed data identifiers and produced a finding. */
	export interface DefaultDetectionFormProperties {
		count: FormControl<number | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateDefaultDetectionFormGroup() {
		return new FormGroup<DefaultDetectionFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the status of a sensitive data finding. */
	export interface ClassificationResultStatus {
		code?: string | null;
		reason?: string | null;
	}

	/** Provides information about the status of a sensitive data finding. */
	export interface ClassificationResultStatusFormProperties {
		code: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateClassificationResultStatusFormGroup() {
		return new FormGroup<ClassificationResultStatusFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides detailed information about a policy finding. */
	export interface PolicyDetails {

		/** Provides information about an action that occurred for a resource and produced a policy finding. */
		action?: FindingAction;

		/** Provides information about an entity who performed an action that produced a policy finding for a resource. */
		actor?: FindingActor;
	}

	/** Provides detailed information about a policy finding. */
	export interface PolicyDetailsFormProperties {
	}
	export function CreatePolicyDetailsFormGroup() {
		return new FormGroup<PolicyDetailsFormProperties>({
		});

	}


	/** Provides information about an action that occurred for a resource and produced a policy finding. */
	export interface FindingAction {
		actionType?: FindingActionActionType | null;

		/** Reserved for future use. */
		apiCallDetails?: ApiCallDetails;
	}

	/** Provides information about an action that occurred for a resource and produced a policy finding. */
	export interface FindingActionFormProperties {
		actionType: FormControl<FindingActionActionType | null | undefined>,
	}
	export function CreateFindingActionFormGroup() {
		return new FormGroup<FindingActionFormProperties>({
			actionType: new FormControl<FindingActionActionType | null | undefined>(undefined),
		});

	}

	export enum FindingActionActionType { AWS_API_CALL = 0 }


	/** Reserved for future use. */
	export interface ApiCallDetails {
		api?: string | null;
		apiServiceName?: string | null;
		firstSeen?: Date | null;
		lastSeen?: Date | null;
	}

	/** Reserved for future use. */
	export interface ApiCallDetailsFormProperties {
		api: FormControl<string | null | undefined>,
		apiServiceName: FormControl<string | null | undefined>,
		firstSeen: FormControl<Date | null | undefined>,
		lastSeen: FormControl<Date | null | undefined>,
	}
	export function CreateApiCallDetailsFormGroup() {
		return new FormGroup<ApiCallDetailsFormProperties>({
			api: new FormControl<string | null | undefined>(undefined),
			apiServiceName: new FormControl<string | null | undefined>(undefined),
			firstSeen: new FormControl<Date | null | undefined>(undefined),
			lastSeen: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Provides information about an entity who performed an action that produced a policy finding for a resource. */
	export interface FindingActor {

		/** The DNS name of the entity that performed the action on the affected resource. */
		domainDetails?: DomainDetails;

		/** The IP address of the device that the entity used to perform the action on the affected resource. This object also provides information such as the owner and geographical location for the IP address. */
		ipAddressDetails?: IpAddressDetails;

		/** The name and type of entity who performed the action on the affected resource. */
		userIdentity?: UserIdentity;
	}

	/** Provides information about an entity who performed an action that produced a policy finding for a resource. */
	export interface FindingActorFormProperties {
	}
	export function CreateFindingActorFormGroup() {
		return new FormGroup<FindingActorFormProperties>({
		});

	}


	/** The DNS name of the entity that performed the action on the affected resource. */
	export interface DomainDetails {
		domainName?: string | null;
	}

	/** The DNS name of the entity that performed the action on the affected resource. */
	export interface DomainDetailsFormProperties {
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateDomainDetailsFormGroup() {
		return new FormGroup<DomainDetailsFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The IP address of the device that the entity used to perform the action on the affected resource. This object also provides information such as the owner and geographical location for the IP address. */
	export interface IpAddressDetails {
		ipAddressV4?: string | null;

		/** Reserved for future use. */
		ipCity?: IpCity;

		/** Reserved for future use. */
		ipCountry?: IpCountry;

		/** Reserved for future use. */
		ipGeoLocation?: IpGeoLocation;

		/** Reserved for future use. */
		ipOwner?: IpOwner;
	}

	/** The IP address of the device that the entity used to perform the action on the affected resource. This object also provides information such as the owner and geographical location for the IP address. */
	export interface IpAddressDetailsFormProperties {
		ipAddressV4: FormControl<string | null | undefined>,
	}
	export function CreateIpAddressDetailsFormGroup() {
		return new FormGroup<IpAddressDetailsFormProperties>({
			ipAddressV4: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reserved for future use. */
	export interface IpCity {
		name?: string | null;
	}

	/** Reserved for future use. */
	export interface IpCityFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateIpCityFormGroup() {
		return new FormGroup<IpCityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reserved for future use. */
	export interface IpCountry {
		code?: string | null;
		name?: string | null;
	}

	/** Reserved for future use. */
	export interface IpCountryFormProperties {
		code: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateIpCountryFormGroup() {
		return new FormGroup<IpCountryFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reserved for future use. */
	export interface IpGeoLocation {
		lat?: number | null;
		lon?: number | null;
	}

	/** Reserved for future use. */
	export interface IpGeoLocationFormProperties {
		lat: FormControl<number | null | undefined>,
		lon: FormControl<number | null | undefined>,
	}
	export function CreateIpGeoLocationFormGroup() {
		return new FormGroup<IpGeoLocationFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Reserved for future use. */
	export interface IpOwner {
		asn?: string | null;
		asnOrg?: string | null;
		isp?: string | null;
		org?: string | null;
	}

	/** Reserved for future use. */
	export interface IpOwnerFormProperties {
		asn: FormControl<string | null | undefined>,
		asnOrg: FormControl<string | null | undefined>,
		isp: FormControl<string | null | undefined>,
		org: FormControl<string | null | undefined>,
	}
	export function CreateIpOwnerFormGroup() {
		return new FormGroup<IpOwnerFormProperties>({
			asn: new FormControl<string | null | undefined>(undefined),
			asnOrg: new FormControl<string | null | undefined>(undefined),
			isp: new FormControl<string | null | undefined>(undefined),
			org: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The name and type of entity who performed the action on the affected resource. */
	export interface UserIdentity {

		/** Reserved for future use. */
		assumedRole?: AssumedRole;

		/** Reserved for future use. */
		awsAccount?: AwsAccount;

		/** Reserved for future use. */
		awsService?: AwsService;

		/** Reserved for future use. */
		federatedUser?: FederatedUser;

		/** Reserved for future use. */
		iamUser?: IamUser;

		/** Reserved for future use. */
		root?: UserIdentityRoot;

		/** Reserved for future use. */
		type?: UserIdentityType | null;
	}

	/** The name and type of entity who performed the action on the affected resource. */
	export interface UserIdentityFormProperties {

		/** Reserved for future use. */
		type: FormControl<UserIdentityType | null | undefined>,
	}
	export function CreateUserIdentityFormGroup() {
		return new FormGroup<UserIdentityFormProperties>({
			type: new FormControl<UserIdentityType | null | undefined>(undefined),
		});

	}


	/** Reserved for future use. */
	export interface AssumedRole {
		accessKeyId?: string | null;
		accountId?: string | null;
		arn?: string | null;
		principalId?: string | null;

		/** Provides information about a session that was created for an entity who performed an action by using temporary security credentials. */
		sessionContext?: SessionContext;
	}

	/** Reserved for future use. */
	export interface AssumedRoleFormProperties {
		accessKeyId: FormControl<string | null | undefined>,
		accountId: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateAssumedRoleFormGroup() {
		return new FormGroup<AssumedRoleFormProperties>({
			accessKeyId: new FormControl<string | null | undefined>(undefined),
			accountId: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a session that was created for an entity who performed an action by using temporary security credentials. */
	export interface SessionContext {

		/** Provides information about the context in which temporary security credentials were issued to an entity. */
		attributes?: SessionContextAttributes;

		/** Provides information about the source and type of temporary security credentials that were issued to an entity. */
		sessionIssuer?: SessionIssuer;
	}

	/** Provides information about a session that was created for an entity who performed an action by using temporary security credentials. */
	export interface SessionContextFormProperties {
	}
	export function CreateSessionContextFormGroup() {
		return new FormGroup<SessionContextFormProperties>({
		});

	}


	/** Provides information about the context in which temporary security credentials were issued to an entity. */
	export interface SessionContextAttributes {
		creationDate?: Date | null;
		mfaAuthenticated?: boolean | null;
	}

	/** Provides information about the context in which temporary security credentials were issued to an entity. */
	export interface SessionContextAttributesFormProperties {
		creationDate: FormControl<Date | null | undefined>,
		mfaAuthenticated: FormControl<boolean | null | undefined>,
	}
	export function CreateSessionContextAttributesFormGroup() {
		return new FormGroup<SessionContextAttributesFormProperties>({
			creationDate: new FormControl<Date | null | undefined>(undefined),
			mfaAuthenticated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides information about the source and type of temporary security credentials that were issued to an entity. */
	export interface SessionIssuer {
		accountId?: string | null;
		arn?: string | null;
		principalId?: string | null;
		type?: string | null;
		userName?: string | null;
	}

	/** Provides information about the source and type of temporary security credentials that were issued to an entity. */
	export interface SessionIssuerFormProperties {
		accountId: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		principalId: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		userName: FormControl<string | null | undefined>,
	}
	export function CreateSessionIssuerFormGroup() {
		return new FormGroup<SessionIssuerFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reserved for future use. */
	export interface AwsAccount {
		accountId?: string | null;
		principalId?: string | null;
	}

	/** Reserved for future use. */
	export interface AwsAccountFormProperties {
		accountId: FormControl<string | null | undefined>,
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateAwsAccountFormGroup() {
		return new FormGroup<AwsAccountFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reserved for future use. */
	export interface AwsService {
		invokedBy?: string | null;
	}

	/** Reserved for future use. */
	export interface AwsServiceFormProperties {
		invokedBy: FormControl<string | null | undefined>,
	}
	export function CreateAwsServiceFormGroup() {
		return new FormGroup<AwsServiceFormProperties>({
			invokedBy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reserved for future use. */
	export interface FederatedUser {
		accessKeyId?: string | null;
		accountId?: string | null;
		arn?: string | null;
		principalId?: string | null;

		/** Provides information about a session that was created for an entity who performed an action by using temporary security credentials. */
		sessionContext?: SessionContext;
	}

	/** Reserved for future use. */
	export interface FederatedUserFormProperties {
		accessKeyId: FormControl<string | null | undefined>,
		accountId: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateFederatedUserFormGroup() {
		return new FormGroup<FederatedUserFormProperties>({
			accessKeyId: new FormControl<string | null | undefined>(undefined),
			accountId: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reserved for future use. */
	export interface IamUser {
		accountId?: string | null;
		arn?: string | null;
		principalId?: string | null;
		userName?: string | null;
	}

	/** Reserved for future use. */
	export interface IamUserFormProperties {
		accountId: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		principalId: FormControl<string | null | undefined>,
		userName: FormControl<string | null | undefined>,
	}
	export function CreateIamUserFormGroup() {
		return new FormGroup<IamUserFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reserved for future use. */
	export interface UserIdentityRoot {
		accountId?: string | null;
		arn?: string | null;
		principalId?: string | null;
	}

	/** Reserved for future use. */
	export interface UserIdentityRootFormProperties {
		accountId: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateUserIdentityRootFormGroup() {
		return new FormGroup<UserIdentityRootFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserIdentityType { AssumedRole = 0, IAMUser = 1, FederatedUser = 2, Root = 3, AWSAccount = 4, AWSService = 5 }


	/** Provides information about the resources that a finding applies to. */
	export interface ResourcesAffected {

		/** Provides information about an S3 bucket that a finding applies to. */
		s3Bucket?: S3Bucket;

		/** Provides information about an S3 object that a finding applies to. */
		s3Object?: S3Object;
	}

	/** Provides information about the resources that a finding applies to. */
	export interface ResourcesAffectedFormProperties {
	}
	export function CreateResourcesAffectedFormGroup() {
		return new FormGroup<ResourcesAffectedFormProperties>({
		});

	}


	/** Provides information about an S3 bucket that a finding applies to. */
	export interface S3Bucket {
		arn?: string | null;
		createdAt?: Date | null;

		/** Provides information about the server-side encryption settings for an S3 bucket or object. */
		defaultServerSideEncryption?: ServerSideEncryption;
		name?: string | null;

		/** Provides information about the user who owns an S3 bucket. */
		owner?: S3BucketOwner;

		/** Provides information about permissions settings that determine whether an S3 bucket is publicly accessible. */
		publicAccess?: BucketPublicAccess;

		/** Reserved for future use. */
		tags?: Array<KeyValuePair>;
	}

	/** Provides information about an S3 bucket that a finding applies to. */
	export interface S3BucketFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateS3BucketFormGroup() {
		return new FormGroup<S3BucketFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the server-side encryption settings for an S3 bucket or object. */
	export interface ServerSideEncryption {

		/** The server-side encryption algorithm that's used when storing the S3 bucket or object. Valid values are: */
		encryptionType?: ServerSideEncryptionEncryptionType | null;
		kmsMasterKeyId?: string | null;
	}

	/** Provides information about the server-side encryption settings for an S3 bucket or object. */
	export interface ServerSideEncryptionFormProperties {

		/** The server-side encryption algorithm that's used when storing the S3 bucket or object. Valid values are: */
		encryptionType: FormControl<ServerSideEncryptionEncryptionType | null | undefined>,
		kmsMasterKeyId: FormControl<string | null | undefined>,
	}
	export function CreateServerSideEncryptionFormGroup() {
		return new FormGroup<ServerSideEncryptionFormProperties>({
			encryptionType: new FormControl<ServerSideEncryptionEncryptionType | null | undefined>(undefined),
			kmsMasterKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServerSideEncryptionEncryptionType { NONE = 0, AES256 = 1, awskms = 2 }


	/** Provides information about the user who owns an S3 bucket. */
	export interface S3BucketOwner {
		displayName?: string | null;
		id?: string | null;
	}

	/** Provides information about the user who owns an S3 bucket. */
	export interface S3BucketOwnerFormProperties {
		displayName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateS3BucketOwnerFormGroup() {
		return new FormGroup<S3BucketOwnerFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about an S3 object that a finding applies to. */
	export interface S3Object {
		bucketArn?: string | null;
		eTag?: string | null;
		extension?: string | null;
		key?: string | null;
		lastModified?: Date | null;
		path?: string | null;
		publicAccess?: boolean | null;

		/** Provides information about the server-side encryption settings for an S3 bucket or object. */
		serverSideEncryption?: ServerSideEncryption;
		size?: number | null;

		/** The storage class of the S3 bucket or object. Valid values are: */
		storageClass?: S3ObjectStorageClass | null;

		/** Reserved for future use. */
		tags?: Array<KeyValuePair>;
		versionId?: string | null;
	}

	/** Provides information about an S3 object that a finding applies to. */
	export interface S3ObjectFormProperties {
		bucketArn: FormControl<string | null | undefined>,
		eTag: FormControl<string | null | undefined>,
		extension: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		lastModified: FormControl<Date | null | undefined>,
		path: FormControl<string | null | undefined>,
		publicAccess: FormControl<boolean | null | undefined>,
		size: FormControl<number | null | undefined>,

		/** The storage class of the S3 bucket or object. Valid values are: */
		storageClass: FormControl<S3ObjectStorageClass | null | undefined>,
		versionId: FormControl<string | null | undefined>,
	}
	export function CreateS3ObjectFormGroup() {
		return new FormGroup<S3ObjectFormProperties>({
			bucketArn: new FormControl<string | null | undefined>(undefined),
			eTag: new FormControl<string | null | undefined>(undefined),
			extension: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			publicAccess: new FormControl<boolean | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			storageClass: new FormControl<S3ObjectStorageClass | null | undefined>(undefined),
			versionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum S3ObjectStorageClass { STANDARD = 0, REDUCED_REDUNDANCY = 1, STANDARD_IA = 2, INTELLIGENT_TIERING = 3, DEEP_ARCHIVE = 4, ONEZONE_IA = 5, GLACIER = 6 }


	/** Provides the numeric score and textual representation of a severity value. */
	export interface Severity {

		/** The textual representation of the finding's severity. Valid values are: */
		description?: SeverityDescription | null;
		score?: number | null;
	}

	/** Provides the numeric score and textual representation of a severity value. */
	export interface SeverityFormProperties {

		/** The textual representation of the finding's severity. Valid values are: */
		description: FormControl<SeverityDescription | null | undefined>,
		score: FormControl<number | null | undefined>,
	}
	export function CreateSeverityFormGroup() {
		return new FormGroup<SeverityFormProperties>({
			description: new FormControl<SeverityDescription | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SeverityDescription { Low = 0, Medium = 1, High = 2 }

	export interface GetFindingsFilterResponse {

		/** The action to perform on findings that meet the filter criteria. Valid values are: */
		action?: GetFindingsFilterResponseAction | null;
		arn?: string | null;
		description?: string | null;

		/** Specifies, as a map, one or more property-based conditions that filter the results of a query for findings. */
		findingCriteria?: FindingCriteria;
		id?: string | null;
		name?: string | null;
		position?: number | null;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: TagMap;
	}
	export interface GetFindingsFilterResponseFormProperties {

		/** The action to perform on findings that meet the filter criteria. Valid values are: */
		action: FormControl<GetFindingsFilterResponseAction | null | undefined>,
		arn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		position: FormControl<number | null | undefined>,
	}
	export function CreateGetFindingsFilterResponseFormGroup() {
		return new FormGroup<GetFindingsFilterResponseFormProperties>({
			action: new FormControl<GetFindingsFilterResponseAction | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GetFindingsFilterResponseAction { ARCHIVE = 0, NOOP = 1 }


	/** Specifies, as a map, one or more property-based conditions that filter the results of a query for findings. */
	export interface FindingCriteria {

		/** Specifies a condition that defines a property, operator, and value to use to filter the results of a query for findings. */
		criterion?: Criterion;
	}

	/** Specifies, as a map, one or more property-based conditions that filter the results of a query for findings. */
	export interface FindingCriteriaFormProperties {
	}
	export function CreateFindingCriteriaFormGroup() {
		return new FormGroup<FindingCriteriaFormProperties>({
		});

	}

	export interface GetInvitationsCountResponse {
		invitationsCount?: number | null;
	}
	export interface GetInvitationsCountResponseFormProperties {
		invitationsCount: FormControl<number | null | undefined>,
	}
	export function CreateGetInvitationsCountResponseFormGroup() {
		return new FormGroup<GetInvitationsCountResponseFormProperties>({
			invitationsCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetMacieSessionResponse {
		createdAt?: Date | null;

		/** The frequency with which Amazon Macie publishes findings for an account. This includes adding findings to AWS Security Hub and exporting finding events to Amazon CloudWatch. Valid values are: */
		findingPublishingFrequency?: GetMacieSessionResponseFindingPublishingFrequency | null;
		serviceRole?: string | null;

		/** The status of an Amazon Macie account. Valid values are: */
		status?: GetMacieSessionResponseStatus | null;
		updatedAt?: Date | null;
	}
	export interface GetMacieSessionResponseFormProperties {
		createdAt: FormControl<Date | null | undefined>,

		/** The frequency with which Amazon Macie publishes findings for an account. This includes adding findings to AWS Security Hub and exporting finding events to Amazon CloudWatch. Valid values are: */
		findingPublishingFrequency: FormControl<GetMacieSessionResponseFindingPublishingFrequency | null | undefined>,
		serviceRole: FormControl<string | null | undefined>,

		/** The status of an Amazon Macie account. Valid values are: */
		status: FormControl<GetMacieSessionResponseStatus | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetMacieSessionResponseFormGroup() {
		return new FormGroup<GetMacieSessionResponseFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			findingPublishingFrequency: new FormControl<GetMacieSessionResponseFindingPublishingFrequency | null | undefined>(undefined),
			serviceRole: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GetMacieSessionResponseStatus | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum GetMacieSessionResponseFindingPublishingFrequency { FIFTEEN_MINUTES = 0, ONE_HOUR = 1, SIX_HOURS = 2 }

	export enum GetMacieSessionResponseStatus { PAUSED = 0, ENABLED = 1 }

	export interface GetMasterAccountResponse {

		/** Provides information about an Amazon Macie membership invitation that was received by an account. */
		master?: Invitation;
	}
	export interface GetMasterAccountResponseFormProperties {
	}
	export function CreateGetMasterAccountResponseFormGroup() {
		return new FormGroup<GetMasterAccountResponseFormProperties>({
		});

	}


	/** Provides information about an Amazon Macie membership invitation that was received by an account. */
	export interface Invitation {
		accountId?: string | null;
		invitationId?: string | null;
		invitedAt?: Date | null;

		/** The current status of the relationship between an account and an associated Amazon Macie master account (<i>inviter account</i>). Possible values are: */
		relationshipStatus?: InvitationRelationshipStatus | null;
	}

	/** Provides information about an Amazon Macie membership invitation that was received by an account. */
	export interface InvitationFormProperties {
		accountId: FormControl<string | null | undefined>,
		invitationId: FormControl<string | null | undefined>,
		invitedAt: FormControl<Date | null | undefined>,

		/** The current status of the relationship between an account and an associated Amazon Macie master account (<i>inviter account</i>). Possible values are: */
		relationshipStatus: FormControl<InvitationRelationshipStatus | null | undefined>,
	}
	export function CreateInvitationFormGroup() {
		return new FormGroup<InvitationFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			invitationId: new FormControl<string | null | undefined>(undefined),
			invitedAt: new FormControl<Date | null | undefined>(undefined),
			relationshipStatus: new FormControl<InvitationRelationshipStatus | null | undefined>(undefined),
		});

	}

	export enum InvitationRelationshipStatus { Enabled = 0, Paused = 1, Invited = 2, Created = 3, Removed = 4, Resigned = 5, EmailVerificationInProgress = 6, EmailVerificationFailed = 7 }

	export interface GetMemberResponse {
		accountId?: string | null;
		arn?: string | null;
		email?: string | null;
		invitedAt?: Date | null;
		masterAccountId?: string | null;

		/** The current status of the relationship between an account and an associated Amazon Macie master account (<i>inviter account</i>). Possible values are: */
		relationshipStatus?: InvitationRelationshipStatus | null;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: TagMap;
		updatedAt?: Date | null;
	}
	export interface GetMemberResponseFormProperties {
		accountId: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		invitedAt: FormControl<Date | null | undefined>,
		masterAccountId: FormControl<string | null | undefined>,

		/** The current status of the relationship between an account and an associated Amazon Macie master account (<i>inviter account</i>). Possible values are: */
		relationshipStatus: FormControl<InvitationRelationshipStatus | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetMemberResponseFormGroup() {
		return new FormGroup<GetMemberResponseFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			invitedAt: new FormControl<Date | null | undefined>(undefined),
			masterAccountId: new FormControl<string | null | undefined>(undefined),
			relationshipStatus: new FormControl<InvitationRelationshipStatus | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetUsageStatisticsResponse {
		nextToken?: string | null;
		records?: Array<UsageRecord>;
	}
	export interface GetUsageStatisticsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetUsageStatisticsResponseFormGroup() {
		return new FormGroup<GetUsageStatisticsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides quota and aggregated usage data for an account. */
	export interface UsageRecord {
		accountId?: string | null;
		freeTrialStartDate?: Date | null;
		usage?: Array<UsageByAccount>;
	}

	/** Provides quota and aggregated usage data for an account. */
	export interface UsageRecordFormProperties {
		accountId: FormControl<string | null | undefined>,
		freeTrialStartDate: FormControl<Date | null | undefined>,
	}
	export function CreateUsageRecordFormGroup() {
		return new FormGroup<UsageRecordFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			freeTrialStartDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Provides data for a specific usage metric and the corresponding quota for an account. The value for the metric is an aggregated value that reports usage during the past 30 days. */
	export interface UsageByAccount {

		/** The type of currency that data for a usage metric is reported in. Possible values are: */
		currency?: UsageByAccountCurrency | null;
		estimatedCost?: string | null;

		/** Specifies a current quota for an account. */
		serviceLimit?: ServiceLimit;

		/** The name of a usage metric for an account. Possible values are: */
		type?: UsageByAccountType | null;
	}

	/** Provides data for a specific usage metric and the corresponding quota for an account. The value for the metric is an aggregated value that reports usage during the past 30 days. */
	export interface UsageByAccountFormProperties {

		/** The type of currency that data for a usage metric is reported in. Possible values are: */
		currency: FormControl<UsageByAccountCurrency | null | undefined>,
		estimatedCost: FormControl<string | null | undefined>,

		/** The name of a usage metric for an account. Possible values are: */
		type: FormControl<UsageByAccountType | null | undefined>,
	}
	export function CreateUsageByAccountFormGroup() {
		return new FormGroup<UsageByAccountFormProperties>({
			currency: new FormControl<UsageByAccountCurrency | null | undefined>(undefined),
			estimatedCost: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<UsageByAccountType | null | undefined>(undefined),
		});

	}

	export enum UsageByAccountCurrency { USD = 0 }


	/** Specifies a current quota for an account. */
	export interface ServiceLimit {
		isServiceLimited?: boolean | null;
		unit?: ServiceLimitUnit | null;
		value?: number | null;
	}

	/** Specifies a current quota for an account. */
	export interface ServiceLimitFormProperties {
		isServiceLimited: FormControl<boolean | null | undefined>,
		unit: FormControl<ServiceLimitUnit | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateServiceLimitFormGroup() {
		return new FormGroup<ServiceLimitFormProperties>({
			isServiceLimited: new FormControl<boolean | null | undefined>(undefined),
			unit: new FormControl<ServiceLimitUnit | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ServiceLimitUnit { TERABYTES = 0 }

	export enum UsageByAccountType { DATA_INVENTORY_EVALUATION = 0, SENSITIVE_DATA_DISCOVERY = 1 }


	/** Specifies criteria for filtering the results of a query for account quotas and usage data. */
	export interface UsageStatisticsFilter {

		/** The field to use to filter the results of a query for account quotas and usage data. */
		key?: UsageStatisticsFilterKey | null;
		values?: Array<string>;
	}

	/** Specifies criteria for filtering the results of a query for account quotas and usage data. */
	export interface UsageStatisticsFilterFormProperties {

		/** The field to use to filter the results of a query for account quotas and usage data. */
		key: FormControl<UsageStatisticsFilterKey | null | undefined>,
	}
	export function CreateUsageStatisticsFilterFormGroup() {
		return new FormGroup<UsageStatisticsFilterFormProperties>({
			key: new FormControl<UsageStatisticsFilterKey | null | undefined>(undefined),
		});

	}

	export enum UsageStatisticsFilterKey { accountId = 0 }


	/** The field to use to sort the results of a query for account quotas and usage data. */
	export enum UsageStatisticsSortKey { accountId = 0, total = 1 }

	export interface GetUsageTotalsResponse {
		usageTotals?: Array<UsageTotal>;
	}
	export interface GetUsageTotalsResponseFormProperties {
	}
	export function CreateGetUsageTotalsResponseFormGroup() {
		return new FormGroup<GetUsageTotalsResponseFormProperties>({
		});

	}


	/** Provides aggregated data for a usage metric. The value for the metric reports usage data for an account during the past 30 days. */
	export interface UsageTotal {

		/** The type of currency that data for a usage metric is reported in. Possible values are: */
		currency?: UsageByAccountCurrency | null;
		estimatedCost?: string | null;

		/** The name of a usage metric for an account. Possible values are: */
		type?: UsageByAccountType | null;
	}

	/** Provides aggregated data for a usage metric. The value for the metric reports usage data for an account during the past 30 days. */
	export interface UsageTotalFormProperties {

		/** The type of currency that data for a usage metric is reported in. Possible values are: */
		currency: FormControl<UsageByAccountCurrency | null | undefined>,
		estimatedCost: FormControl<string | null | undefined>,

		/** The name of a usage metric for an account. Possible values are: */
		type: FormControl<UsageByAccountType | null | undefined>,
	}
	export function CreateUsageTotalFormGroup() {
		return new FormGroup<UsageTotalFormProperties>({
			currency: new FormControl<UsageByAccountCurrency | null | undefined>(undefined),
			estimatedCost: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<UsageByAccountType | null | undefined>(undefined),
		});

	}

	export interface ListClassificationJobsResponse {
		items?: Array<JobSummary>;
		nextToken?: string | null;
	}
	export interface ListClassificationJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListClassificationJobsResponseFormGroup() {
		return new FormGroup<ListClassificationJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a classification job, including the current status of the job. */
	export interface JobSummary {
		bucketDefinitions?: Array<S3BucketDefinitionForJob>;
		createdAt?: Date | null;
		jobId?: string | null;

		/** The current status of a classification job. Valid values are: */
		jobStatus?: DescribeClassificationJobResponseJobStatus | null;

		/** The schedule for running a classification job. Valid values are: */
		jobType?: DescribeClassificationJobResponseJobType | null;
		name?: string | null;
	}

	/** Provides information about a classification job, including the current status of the job. */
	export interface JobSummaryFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		jobId: FormControl<string | null | undefined>,

		/** The current status of a classification job. Valid values are: */
		jobStatus: FormControl<DescribeClassificationJobResponseJobStatus | null | undefined>,

		/** The schedule for running a classification job. Valid values are: */
		jobType: FormControl<DescribeClassificationJobResponseJobType | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateJobSummaryFormGroup() {
		return new FormGroup<JobSummaryFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			jobStatus: new FormControl<DescribeClassificationJobResponseJobStatus | null | undefined>(undefined),
			jobType: new FormControl<DescribeClassificationJobResponseJobType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a condition that filters the results of a request for information about classification jobs. Each condition consists of a property, an operator, and one or more values. */
	export interface ListJobsFilterTerm {

		/** The operator to use in a condition. Valid values are: */
		comparator?: SimpleScopeTermComparator | null;

		/** The property to use to filter the results. Valid values are: */
		key?: ListJobsFilterTermKey | null;
		values?: Array<string>;
	}

	/** Specifies a condition that filters the results of a request for information about classification jobs. Each condition consists of a property, an operator, and one or more values. */
	export interface ListJobsFilterTermFormProperties {

		/** The operator to use in a condition. Valid values are: */
		comparator: FormControl<SimpleScopeTermComparator | null | undefined>,

		/** The property to use to filter the results. Valid values are: */
		key: FormControl<ListJobsFilterTermKey | null | undefined>,
	}
	export function CreateListJobsFilterTermFormGroup() {
		return new FormGroup<ListJobsFilterTermFormProperties>({
			comparator: new FormControl<SimpleScopeTermComparator | null | undefined>(undefined),
			key: new FormControl<ListJobsFilterTermKey | null | undefined>(undefined),
		});

	}

	export enum ListJobsFilterTermKey { jobType = 0, jobStatus = 1, createdAt = 2, name = 3 }


	/** The property to sort the results by. Valid values are: */
	export enum ListJobsSortAttributeName { createdAt = 0, jobStatus = 1, name = 2, jobType = 3 }

	export interface ListCustomDataIdentifiersResponse {
		items?: Array<CustomDataIdentifierSummary>;
		nextToken?: string | null;
	}
	export interface ListCustomDataIdentifiersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomDataIdentifiersResponseFormGroup() {
		return new FormGroup<ListCustomDataIdentifiersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a custom data identifier. */
	export interface CustomDataIdentifierSummary {
		arn?: string | null;
		createdAt?: Date | null;
		description?: string | null;
		id?: string | null;
		name?: string | null;
	}

	/** Provides information about a custom data identifier. */
	export interface CustomDataIdentifierSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCustomDataIdentifierSummaryFormGroup() {
		return new FormGroup<CustomDataIdentifierSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFindingsResponse {
		findingIds?: Array<string>;
		nextToken?: string | null;
	}
	export interface ListFindingsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingsResponseFormGroup() {
		return new FormGroup<ListFindingsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFindingsFiltersResponse {
		findingsFilterListItems?: Array<FindingsFilterListItem>;
		nextToken?: string | null;
	}
	export interface ListFindingsFiltersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingsFiltersResponseFormGroup() {
		return new FormGroup<ListFindingsFiltersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a findings filter. */
	export interface FindingsFilterListItem {
		arn?: string | null;
		id?: string | null;
		name?: string | null;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: TagMap;
	}

	/** Provides information about a findings filter. */
	export interface FindingsFilterListItemFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateFindingsFilterListItemFormGroup() {
		return new FormGroup<FindingsFilterListItemFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInvitationsResponse {
		invitations?: Array<Invitation>;
		nextToken?: string | null;
	}
	export interface ListInvitationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInvitationsResponseFormGroup() {
		return new FormGroup<ListInvitationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMembersResponse {
		members?: Array<Member>;
		nextToken?: string | null;
	}
	export interface ListMembersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMembersResponseFormGroup() {
		return new FormGroup<ListMembersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about an account that's associated with an Amazon Macie master account. */
	export interface Member {
		accountId?: string | null;
		arn?: string | null;
		email?: string | null;
		invitedAt?: Date | null;
		masterAccountId?: string | null;

		/** The current status of the relationship between an account and an associated Amazon Macie master account (<i>inviter account</i>). Possible values are: */
		relationshipStatus?: InvitationRelationshipStatus | null;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: TagMap;
		updatedAt?: Date | null;
	}

	/** Provides information about an account that's associated with an Amazon Macie master account. */
	export interface MemberFormProperties {
		accountId: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		invitedAt: FormControl<Date | null | undefined>,
		masterAccountId: FormControl<string | null | undefined>,

		/** The current status of the relationship between an account and an associated Amazon Macie master account (<i>inviter account</i>). Possible values are: */
		relationshipStatus: FormControl<InvitationRelationshipStatus | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateMemberFormGroup() {
		return new FormGroup<MemberFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			invitedAt: new FormControl<Date | null | undefined>(undefined),
			masterAccountId: new FormControl<string | null | undefined>(undefined),
			relationshipStatus: new FormControl<InvitationRelationshipStatus | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListOrganizationAdminAccountsResponse {
		adminAccounts?: Array<AdminAccount>;
		nextToken?: string | null;
	}
	export interface ListOrganizationAdminAccountsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOrganizationAdminAccountsResponseFormGroup() {
		return new FormGroup<ListOrganizationAdminAccountsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about an account that's designated as a delegated administrator of Amazon Macie for an AWS organization. */
	export interface AdminAccount {
		accountId?: string | null;

		/** The current status of an account as a delegated administrator of Amazon Macie for an AWS organization. */
		status?: AdminAccountStatus | null;
	}

	/** Provides information about an account that's designated as a delegated administrator of Amazon Macie for an AWS organization. */
	export interface AdminAccountFormProperties {
		accountId: FormControl<string | null | undefined>,

		/** The current status of an account as a delegated administrator of Amazon Macie for an AWS organization. */
		status: FormControl<AdminAccountStatus | null | undefined>,
	}
	export function CreateAdminAccountFormGroup() {
		return new FormGroup<AdminAccountFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AdminAccountStatus | null | undefined>(undefined),
		});

	}

	export enum AdminAccountStatus { ENABLED = 0, DISABLING_IN_PROGRESS = 1 }

	export interface ListTagsForResourceResponse {

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface PutClassificationExportConfigurationResponse {

		/** Specifies where to export data classification results to, and the encryption settings to use when storing results in that location. Currently, you can export classification results only to an S3 bucket. */
		configuration?: ClassificationExportConfiguration;
	}
	export interface PutClassificationExportConfigurationResponseFormProperties {
	}
	export function CreatePutClassificationExportConfigurationResponseFormGroup() {
		return new FormGroup<PutClassificationExportConfigurationResponseFormProperties>({
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

	export interface TestCustomDataIdentifierResponse {
		matchCount?: number | null;
	}
	export interface TestCustomDataIdentifierResponseFormProperties {
		matchCount: FormControl<number | null | undefined>,
	}
	export function CreateTestCustomDataIdentifierResponseFormGroup() {
		return new FormGroup<TestCustomDataIdentifierResponseFormProperties>({
			matchCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UnarchiveFindingsResponse {
	}
	export interface UnarchiveFindingsResponseFormProperties {
	}
	export function CreateUnarchiveFindingsResponseFormGroup() {
		return new FormGroup<UnarchiveFindingsResponseFormProperties>({
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

	export interface UpdateClassificationJobResponse {
	}
	export interface UpdateClassificationJobResponseFormProperties {
	}
	export function CreateUpdateClassificationJobResponseFormGroup() {
		return new FormGroup<UpdateClassificationJobResponseFormProperties>({
		});

	}

	export interface UpdateFindingsFilterResponse {
		arn?: string | null;
		id?: string | null;
	}
	export interface UpdateFindingsFilterResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFindingsFilterResponseFormGroup() {
		return new FormGroup<UpdateFindingsFilterResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMacieSessionResponse {
	}
	export interface UpdateMacieSessionResponseFormProperties {
	}
	export function CreateUpdateMacieSessionResponseFormGroup() {
		return new FormGroup<UpdateMacieSessionResponseFormProperties>({
		});

	}

	export interface UpdateMemberSessionResponse {
	}
	export interface UpdateMemberSessionResponseFormProperties {
	}
	export function CreateUpdateMemberSessionResponseFormGroup() {
		return new FormGroup<UpdateMemberSessionResponseFormProperties>({
		});

	}

	export interface UpdateOrganizationConfigurationResponse {
	}
	export interface UpdateOrganizationConfigurationResponseFormProperties {
	}
	export function CreateUpdateOrganizationConfigurationResponseFormGroup() {
		return new FormGroup<UpdateOrganizationConfigurationResponseFormProperties>({
		});

	}

	export interface AcceptInvitationRequest {

		/** Required */
		invitationId: string;

		/** Required */
		masterAccount: string;
	}
	export interface AcceptInvitationRequestFormProperties {

		/** Required */
		invitationId: FormControl<string | null | undefined>,

		/** Required */
		masterAccount: FormControl<string | null | undefined>,
	}
	export function CreateAcceptInvitationRequestFormGroup() {
		return new FormGroup<AcceptInvitationRequestFormProperties>({
			invitationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			masterAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies details for an account to associate with an Amazon Macie master account. */
	export interface AccountDetail {

		/** Required */
		accountId: string;

		/** Required */
		email: string;
	}

	/** Specifies details for an account to associate with an Amazon Macie master account. */
	export interface AccountDetailFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,
	}
	export function CreateAccountDetailFormGroup() {
		return new FormGroup<AccountDetailFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The current status of an account as a delegated administrator of Amazon Macie for an AWS organization. */
	export enum AdminStatus { ENABLED = 0, DISABLING_IN_PROGRESS = 1 }

	export interface ArchiveFindingsRequest {

		/** Required */
		findingIds: Array<string>;
	}
	export interface ArchiveFindingsRequestFormProperties {
	}
	export function CreateArchiveFindingsRequestFormGroup() {
		return new FormGroup<ArchiveFindingsRequestFormProperties>({
		});

	}

	export interface BatchGetCustomDataIdentifiersRequest {
		ids?: Array<string>;
	}
	export interface BatchGetCustomDataIdentifiersRequestFormProperties {
	}
	export function CreateBatchGetCustomDataIdentifiersRequestFormGroup() {
		return new FormGroup<BatchGetCustomDataIdentifiersRequestFormProperties>({
		});

	}


	/** Specifies, as a map, one or more attribute-based conditions that filter the results of a query for information about S3 buckets. */
	export interface BucketCriteria {
	}

	/** Specifies, as a map, one or more attribute-based conditions that filter the results of a query for information about S3 buckets. */
	export interface BucketCriteriaFormProperties {
	}
	export function CreateBucketCriteriaFormGroup() {
		return new FormGroup<BucketCriteriaFormProperties>({
		});

	}

	export enum SharedAccess { EXTERNAL = 0, INTERNAL = 1, NOT_SHARED = 2 }

	export enum EffectivePermission { PUBLIC = 0, NOT_PUBLIC = 1 }


	/** Specifies criteria for sorting the results of a query for information about S3 buckets. */
	export interface BucketSortCriteria {
		attributeName?: string | null;
		orderBy?: OrderBy | null;
	}

	/** Specifies criteria for sorting the results of a query for information about S3 buckets. */
	export interface BucketSortCriteriaFormProperties {
		attributeName: FormControl<string | null | undefined>,
		orderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateBucketSortCriteriaFormGroup() {
		return new FormGroup<BucketSortCriteriaFormProperties>({
			attributeName: new FormControl<string | null | undefined>(undefined),
			orderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}


	/** The schedule for running a classification job. Valid values are: */
	export enum JobType { ONE_TIME = 0, SCHEDULED = 1 }

	export interface CreateClassificationJobRequest {

		/** Required */
		clientToken: string;
		customDataIdentifierIds?: Array<string>;
		description?: string | null;
		initialRun?: boolean | null;

		/**
		 * The schedule for running a classification job. Valid values are:
		 * Required
		 */
		jobType: DescribeClassificationJobResponseJobType;

		/** Required */
		name: string;

		/**
		 * Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis.
		 * Required
		 */
		s3JobDefinition: S3JobDefinition;
		samplingPercentage?: number | null;

		/** Specifies the recurrence pattern for running a classification job. */
		scheduleFrequency?: JobScheduleFrequency;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: TagMap;
	}
	export interface CreateClassificationJobRequestFormProperties {

		/** Required */
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		initialRun: FormControl<boolean | null | undefined>,

		/**
		 * The schedule for running a classification job. Valid values are:
		 * Required
		 */
		jobType: FormControl<DescribeClassificationJobResponseJobType | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		samplingPercentage: FormControl<number | null | undefined>,
	}
	export function CreateCreateClassificationJobRequestFormGroup() {
		return new FormGroup<CreateClassificationJobRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			initialRun: new FormControl<boolean | null | undefined>(undefined),
			jobType: new FormControl<DescribeClassificationJobResponseJobType | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			samplingPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateCustomDataIdentifierRequest {
		clientToken?: string | null;
		description?: string | null;
		ignoreWords?: Array<string>;
		keywords?: Array<string>;
		maximumMatchDistance?: number | null;
		name?: string | null;
		regex?: string | null;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: TagMap;
	}
	export interface CreateCustomDataIdentifierRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		maximumMatchDistance: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		regex: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomDataIdentifierRequestFormGroup() {
		return new FormGroup<CreateCustomDataIdentifierRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			maximumMatchDistance: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			regex: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The action to perform on findings that meet the filter criteria. Valid values are: */
	export enum FindingsFilterAction { ARCHIVE = 0, NOOP = 1 }

	export interface CreateFindingsFilterRequest {

		/**
		 * The action to perform on findings that meet the filter criteria. Valid values are:
		 * Required
		 */
		action: GetFindingsFilterResponseAction;
		clientToken?: string | null;
		description?: string | null;

		/**
		 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
		 * Required
		 */
		findingCriteria: FindingCriteria;

		/** Required */
		name: string;
		position?: number | null;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: TagMap;
	}
	export interface CreateFindingsFilterRequestFormProperties {

		/**
		 * The action to perform on findings that meet the filter criteria. Valid values are:
		 * Required
		 */
		action: FormControl<GetFindingsFilterResponseAction | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		position: FormControl<number | null | undefined>,
	}
	export function CreateCreateFindingsFilterRequestFormGroup() {
		return new FormGroup<CreateFindingsFilterRequestFormProperties>({
			action: new FormControl<GetFindingsFilterResponseAction | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			position: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateInvitationsRequest {

		/** Required */
		accountIds: Array<string>;
		disableEmailNotification?: boolean | null;
		message?: string | null;
	}
	export interface CreateInvitationsRequestFormProperties {
		disableEmailNotification: FormControl<boolean | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCreateInvitationsRequestFormGroup() {
		return new FormGroup<CreateInvitationsRequestFormProperties>({
			disableEmailNotification: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMemberRequest {

		/**
		 * Specifies details for an account to associate with an Amazon Macie master account.
		 * Required
		 */
		account: AccountDetail;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: TagMap;
	}
	export interface CreateMemberRequestFormProperties {
	}
	export function CreateCreateMemberRequestFormGroup() {
		return new FormGroup<CreateMemberRequestFormProperties>({
		});

	}

	export interface CreateSampleFindingsRequest {
		findingTypes?: Array<FindingType>;
	}
	export interface CreateSampleFindingsRequestFormProperties {
	}
	export function CreateCreateSampleFindingsRequestFormGroup() {
		return new FormGroup<CreateSampleFindingsRequestFormProperties>({
		});

	}


	/** Specifies the operator to use in a property-based condition that filters the results of a query for findings. */
	export interface CriterionAdditionalProperties {
		eq?: Array<string>;
		gt?: number | null;
		gte?: number | null;
		lt?: number | null;
		lte?: number | null;
		neq?: Array<string>;
	}

	/** Specifies the operator to use in a property-based condition that filters the results of a query for findings. */
	export interface CriterionAdditionalPropertiesFormProperties {
		gt: FormControl<number | null | undefined>,
		gte: FormControl<number | null | undefined>,
		lt: FormControl<number | null | undefined>,
		lte: FormControl<number | null | undefined>,
	}
	export function CreateCriterionAdditionalPropertiesFormGroup() {
		return new FormGroup<CriterionAdditionalPropertiesFormProperties>({
			gt: new FormControl<number | null | undefined>(undefined),
			gte: new FormControl<number | null | undefined>(undefined),
			lt: new FormControl<number | null | undefined>(undefined),
			lte: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The type of currency that data for a usage metric is reported in. Possible values are: */
	export enum Currency { USD = 0 }

	export enum DayOfWeek { SUNDAY = 0, MONDAY = 1, TUESDAY = 2, WEDNESDAY = 3, THURSDAY = 4, FRIDAY = 5, SATURDAY = 6 }

	export interface DeclineInvitationsRequest {

		/** Required */
		accountIds: Array<string>;
	}
	export interface DeclineInvitationsRequestFormProperties {
	}
	export function CreateDeclineInvitationsRequestFormGroup() {
		return new FormGroup<DeclineInvitationsRequestFormProperties>({
		});

	}

	export interface DeleteCustomDataIdentifierRequest {
	}
	export interface DeleteCustomDataIdentifierRequestFormProperties {
	}
	export function CreateDeleteCustomDataIdentifierRequestFormGroup() {
		return new FormGroup<DeleteCustomDataIdentifierRequestFormProperties>({
		});

	}

	export interface DeleteFindingsFilterRequest {
	}
	export interface DeleteFindingsFilterRequestFormProperties {
	}
	export function CreateDeleteFindingsFilterRequestFormGroup() {
		return new FormGroup<DeleteFindingsFilterRequestFormProperties>({
		});

	}

	export interface DeleteInvitationsRequest {

		/** Required */
		accountIds: Array<string>;
	}
	export interface DeleteInvitationsRequestFormProperties {
	}
	export function CreateDeleteInvitationsRequestFormGroup() {
		return new FormGroup<DeleteInvitationsRequestFormProperties>({
		});

	}

	export interface DeleteMemberRequest {
	}
	export interface DeleteMemberRequestFormProperties {
	}
	export function CreateDeleteMemberRequestFormGroup() {
		return new FormGroup<DeleteMemberRequestFormProperties>({
		});

	}

	export interface DescribeBucketsRequest {

		/** Specifies, as a map, one or more attribute-based conditions that filter the results of a query for information about S3 buckets. */
		criteria?: BucketCriteria;
		maxResults?: number | null;
		nextToken?: string | null;

		/** Specifies criteria for sorting the results of a query for information about S3 buckets. */
		sortCriteria?: BucketSortCriteria;
	}
	export interface DescribeBucketsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBucketsRequestFormGroup() {
		return new FormGroup<DescribeBucketsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeClassificationJobRequest {
	}
	export interface DescribeClassificationJobRequestFormProperties {
	}
	export function CreateDescribeClassificationJobRequestFormGroup() {
		return new FormGroup<DescribeClassificationJobRequestFormProperties>({
		});

	}


	/** The current status of a classification job. Valid values are: */
	export enum JobStatus { RUNNING = 0, PAUSED = 1, CANCELLED = 2, COMPLETE = 3, IDLE = 4 }

	export interface DescribeOrganizationConfigurationRequest {
	}
	export interface DescribeOrganizationConfigurationRequestFormProperties {
	}
	export function CreateDescribeOrganizationConfigurationRequestFormGroup() {
		return new FormGroup<DescribeOrganizationConfigurationRequestFormProperties>({
		});

	}

	export interface DisableMacieRequest {
	}
	export interface DisableMacieRequestFormProperties {
	}
	export function CreateDisableMacieRequestFormGroup() {
		return new FormGroup<DisableMacieRequestFormProperties>({
		});

	}

	export interface DisableOrganizationAdminAccountRequest {
	}
	export interface DisableOrganizationAdminAccountRequestFormProperties {
	}
	export function CreateDisableOrganizationAdminAccountRequestFormGroup() {
		return new FormGroup<DisableOrganizationAdminAccountRequestFormProperties>({
		});

	}

	export interface DisassociateFromMasterAccountRequest {
	}
	export interface DisassociateFromMasterAccountRequestFormProperties {
	}
	export function CreateDisassociateFromMasterAccountRequestFormGroup() {
		return new FormGroup<DisassociateFromMasterAccountRequestFormProperties>({
		});

	}

	export interface DisassociateMemberRequest {
	}
	export interface DisassociateMemberRequestFormProperties {
	}
	export function CreateDisassociateMemberRequestFormGroup() {
		return new FormGroup<DisassociateMemberRequestFormProperties>({
		});

	}


	/** The frequency with which Amazon Macie publishes findings for an account. This includes adding findings to AWS Security Hub and exporting finding events to Amazon CloudWatch. Valid values are: */
	export enum FindingPublishingFrequency { FIFTEEN_MINUTES = 0, ONE_HOUR = 1, SIX_HOURS = 2 }


	/** The status of an Amazon Macie account. Valid values are: */
	export enum MacieStatus { PAUSED = 0, ENABLED = 1 }

	export interface EnableMacieRequest {
		clientToken?: string | null;

		/** The frequency with which Amazon Macie publishes findings for an account. This includes adding findings to AWS Security Hub and exporting finding events to Amazon CloudWatch. Valid values are: */
		findingPublishingFrequency?: GetMacieSessionResponseFindingPublishingFrequency | null;

		/** The status of an Amazon Macie account. Valid values are: */
		status?: GetMacieSessionResponseStatus | null;
	}
	export interface EnableMacieRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** The frequency with which Amazon Macie publishes findings for an account. This includes adding findings to AWS Security Hub and exporting finding events to Amazon CloudWatch. Valid values are: */
		findingPublishingFrequency: FormControl<GetMacieSessionResponseFindingPublishingFrequency | null | undefined>,

		/** The status of an Amazon Macie account. Valid values are: */
		status: FormControl<GetMacieSessionResponseStatus | null | undefined>,
	}
	export function CreateEnableMacieRequestFormGroup() {
		return new FormGroup<EnableMacieRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			findingPublishingFrequency: new FormControl<GetMacieSessionResponseFindingPublishingFrequency | null | undefined>(undefined),
			status: new FormControl<GetMacieSessionResponseStatus | null | undefined>(undefined),
		});

	}

	export interface EnableOrganizationAdminAccountRequest {

		/** Required */
		adminAccountId: string;
		clientToken?: string | null;
	}
	export interface EnableOrganizationAdminAccountRequestFormProperties {

		/** Required */
		adminAccountId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateEnableOrganizationAdminAccountRequestFormGroup() {
		return new FormGroup<EnableOrganizationAdminAccountRequestFormProperties>({
			adminAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The server-side encryption algorithm that's used when storing the S3 bucket or object. Valid values are: */
	export enum EncryptionType { NONE = 0, AES256 = 1, awskms = 2 }


	/** The source of an error, issue, or delay. Possible values are: */
	export enum ErrorCode { ClientError = 0, InternalError = 1 }

	export enum FindingActionType { AWS_API_CALL = 0 }


	/** Specifies criteria for sorting the results of a query for information about findings. */
	export interface FindingStatisticsSortCriteria {

		/** The grouping to sort the results by. Valid values are: */
		attributeName?: FindingStatisticsSortAttributeName | null;
		orderBy?: OrderBy | null;
	}

	/** Specifies criteria for sorting the results of a query for information about findings. */
	export interface FindingStatisticsSortCriteriaFormProperties {

		/** The grouping to sort the results by. Valid values are: */
		attributeName: FormControl<FindingStatisticsSortAttributeName | null | undefined>,
		orderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateFindingStatisticsSortCriteriaFormGroup() {
		return new FormGroup<FindingStatisticsSortCriteriaFormProperties>({
			attributeName: new FormControl<FindingStatisticsSortAttributeName | null | undefined>(undefined),
			orderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}

	export interface GetBucketStatisticsRequest {
		accountId?: string | null;
	}
	export interface GetBucketStatisticsRequestFormProperties {
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateGetBucketStatisticsRequestFormGroup() {
		return new FormGroup<GetBucketStatisticsRequestFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetClassificationExportConfigurationRequest {
	}
	export interface GetClassificationExportConfigurationRequestFormProperties {
	}
	export function CreateGetClassificationExportConfigurationRequestFormGroup() {
		return new FormGroup<GetClassificationExportConfigurationRequestFormProperties>({
		});

	}

	export interface GetCustomDataIdentifierRequest {
	}
	export interface GetCustomDataIdentifierRequestFormProperties {
	}
	export function CreateGetCustomDataIdentifierRequestFormGroup() {
		return new FormGroup<GetCustomDataIdentifierRequestFormProperties>({
		});

	}

	export enum GroupBy { resourcesAffected_s3Bucket_name = 0, type = 1, classificationDetails_jobId = 2, severity_description = 3 }

	export interface GetFindingStatisticsRequest {

		/** Specifies, as a map, one or more property-based conditions that filter the results of a query for findings. */
		findingCriteria?: FindingCriteria;

		/** Required */
		groupBy: GetFindingStatisticsRequestGroupBy;
		size?: number | null;

		/** Specifies criteria for sorting the results of a query for information about findings. */
		sortCriteria?: FindingStatisticsSortCriteria;
	}
	export interface GetFindingStatisticsRequestFormProperties {

		/** Required */
		groupBy: FormControl<GetFindingStatisticsRequestGroupBy | null | undefined>,
		size: FormControl<number | null | undefined>,
	}
	export function CreateGetFindingStatisticsRequestFormGroup() {
		return new FormGroup<GetFindingStatisticsRequestFormProperties>({
			groupBy: new FormControl<GetFindingStatisticsRequestGroupBy | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GetFindingStatisticsRequestGroupBy { resourcesAffected_s3Bucket_name = 0, type = 1, classificationDetails_jobId = 2, severity_description = 3 }

	export interface GetFindingsFilterRequest {
	}
	export interface GetFindingsFilterRequestFormProperties {
	}
	export function CreateGetFindingsFilterRequestFormGroup() {
		return new FormGroup<GetFindingsFilterRequestFormProperties>({
		});

	}


	/** Specifies criteria for sorting the results of a request for information about findings. */
	export interface SortCriteria {
		attributeName?: string | null;
		orderBy?: OrderBy | null;
	}

	/** Specifies criteria for sorting the results of a request for information about findings. */
	export interface SortCriteriaFormProperties {
		attributeName: FormControl<string | null | undefined>,
		orderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateSortCriteriaFormGroup() {
		return new FormGroup<SortCriteriaFormProperties>({
			attributeName: new FormControl<string | null | undefined>(undefined),
			orderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}

	export interface GetFindingsRequest {

		/** Required */
		findingIds: Array<string>;

		/** Specifies criteria for sorting the results of a request for information about findings. */
		sortCriteria?: SortCriteria;
	}
	export interface GetFindingsRequestFormProperties {
	}
	export function CreateGetFindingsRequestFormGroup() {
		return new FormGroup<GetFindingsRequestFormProperties>({
		});

	}

	export interface GetInvitationsCountRequest {
	}
	export interface GetInvitationsCountRequestFormProperties {
	}
	export function CreateGetInvitationsCountRequestFormGroup() {
		return new FormGroup<GetInvitationsCountRequestFormProperties>({
		});

	}

	export interface GetMacieSessionRequest {
	}
	export interface GetMacieSessionRequestFormProperties {
	}
	export function CreateGetMacieSessionRequestFormGroup() {
		return new FormGroup<GetMacieSessionRequestFormProperties>({
		});

	}

	export interface GetMasterAccountRequest {
	}
	export interface GetMasterAccountRequestFormProperties {
	}
	export function CreateGetMasterAccountRequestFormGroup() {
		return new FormGroup<GetMasterAccountRequestFormProperties>({
		});

	}

	export interface GetMemberRequest {
	}
	export interface GetMemberRequestFormProperties {
	}
	export function CreateGetMemberRequestFormGroup() {
		return new FormGroup<GetMemberRequestFormProperties>({
		});

	}


	/** The current status of the relationship between an account and an associated Amazon Macie master account (<i>inviter account</i>). Possible values are: */
	export enum RelationshipStatus { Enabled = 0, Paused = 1, Invited = 2, Created = 3, Removed = 4, Resigned = 5, EmailVerificationInProgress = 6, EmailVerificationFailed = 7 }


	/** Specifies criteria for sorting the results of a query for account quotas and usage data. */
	export interface UsageStatisticsSortBy {

		/** The field to use to sort the results of a query for account quotas and usage data. */
		key?: UsageStatisticsSortKey | null;
		orderBy?: OrderBy | null;
	}

	/** Specifies criteria for sorting the results of a query for account quotas and usage data. */
	export interface UsageStatisticsSortByFormProperties {

		/** The field to use to sort the results of a query for account quotas and usage data. */
		key: FormControl<UsageStatisticsSortKey | null | undefined>,
		orderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateUsageStatisticsSortByFormGroup() {
		return new FormGroup<UsageStatisticsSortByFormProperties>({
			key: new FormControl<UsageStatisticsSortKey | null | undefined>(undefined),
			orderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}

	export interface GetUsageStatisticsRequest {
		filterBy?: Array<UsageStatisticsFilter>;
		maxResults?: number | null;
		nextToken?: string | null;

		/** Specifies criteria for sorting the results of a query for account quotas and usage data. */
		sortBy?: UsageStatisticsSortBy;
	}
	export interface GetUsageStatisticsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetUsageStatisticsRequestFormGroup() {
		return new FormGroup<GetUsageStatisticsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetUsageTotalsRequest {
	}
	export interface GetUsageTotalsRequestFormProperties {
	}
	export function CreateGetUsageTotalsRequestFormGroup() {
		return new FormGroup<GetUsageTotalsRequestFormProperties>({
		});

	}


	/** The operator to use in a condition. Valid values are: */
	export enum JobComparator { EQ = 0, GT = 1, GTE = 2, LT = 3, LTE = 4, NE = 5, CONTAINS = 6 }


	/** Specifies criteria for filtering the results of a request for information about classification jobs. */
	export interface ListJobsFilterCriteria {
		excludes?: Array<ListJobsFilterTerm>;
		includes?: Array<ListJobsFilterTerm>;
	}

	/** Specifies criteria for filtering the results of a request for information about classification jobs. */
	export interface ListJobsFilterCriteriaFormProperties {
	}
	export function CreateListJobsFilterCriteriaFormGroup() {
		return new FormGroup<ListJobsFilterCriteriaFormProperties>({
		});

	}


	/** Specifies criteria for sorting the results of a request for information about classification jobs. */
	export interface ListJobsSortCriteria {

		/** The property to sort the results by. Valid values are: */
		attributeName?: ListJobsSortAttributeName | null;
		orderBy?: OrderBy | null;
	}

	/** Specifies criteria for sorting the results of a request for information about classification jobs. */
	export interface ListJobsSortCriteriaFormProperties {

		/** The property to sort the results by. Valid values are: */
		attributeName: FormControl<ListJobsSortAttributeName | null | undefined>,
		orderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateListJobsSortCriteriaFormGroup() {
		return new FormGroup<ListJobsSortCriteriaFormProperties>({
			attributeName: new FormControl<ListJobsSortAttributeName | null | undefined>(undefined),
			orderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}

	export interface ListClassificationJobsRequest {

		/** Specifies criteria for filtering the results of a request for information about classification jobs. */
		filterCriteria?: ListJobsFilterCriteria;
		maxResults?: number | null;
		nextToken?: string | null;

		/** Specifies criteria for sorting the results of a request for information about classification jobs. */
		sortCriteria?: ListJobsSortCriteria;
	}
	export interface ListClassificationJobsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListClassificationJobsRequestFormGroup() {
		return new FormGroup<ListClassificationJobsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCustomDataIdentifiersRequest {
		maxResults?: number | null;
		nextToken?: string | null;
	}
	export interface ListCustomDataIdentifiersRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomDataIdentifiersRequestFormGroup() {
		return new FormGroup<ListCustomDataIdentifiersRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFindingsFiltersRequest {
	}
	export interface ListFindingsFiltersRequestFormProperties {
	}
	export function CreateListFindingsFiltersRequestFormGroup() {
		return new FormGroup<ListFindingsFiltersRequestFormProperties>({
		});

	}

	export interface ListFindingsRequest {

		/** Specifies, as a map, one or more property-based conditions that filter the results of a query for findings. */
		findingCriteria?: FindingCriteria;
		maxResults?: number | null;
		nextToken?: string | null;

		/** Specifies criteria for sorting the results of a request for information about findings. */
		sortCriteria?: SortCriteria;
	}
	export interface ListFindingsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingsRequestFormGroup() {
		return new FormGroup<ListFindingsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInvitationsRequest {
	}
	export interface ListInvitationsRequestFormProperties {
	}
	export function CreateListInvitationsRequestFormGroup() {
		return new FormGroup<ListInvitationsRequestFormProperties>({
		});

	}


	/** The property to use to filter the results. Valid values are: */
	export enum ListJobsFilterKey { jobType = 0, jobStatus = 1, createdAt = 2, name = 3 }

	export interface ListMembersRequest {
	}
	export interface ListMembersRequestFormProperties {
	}
	export function CreateListMembersRequestFormGroup() {
		return new FormGroup<ListMembersRequestFormProperties>({
		});

	}

	export interface ListOrganizationAdminAccountsRequest {
	}
	export interface ListOrganizationAdminAccountsRequestFormProperties {
	}
	export function CreateListOrganizationAdminAccountsRequestFormGroup() {
		return new FormGroup<ListOrganizationAdminAccountsRequestFormProperties>({
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

	export interface PutClassificationExportConfigurationRequest {

		/**
		 * Specifies where to export data classification results to, and the encryption settings to use when storing results in that location. Currently, you can export classification results only to an S3 bucket.
		 * Required
		 */
		configuration: ClassificationExportConfiguration;
	}
	export interface PutClassificationExportConfigurationRequestFormProperties {
	}
	export function CreatePutClassificationExportConfigurationRequestFormGroup() {
		return new FormGroup<PutClassificationExportConfigurationRequestFormProperties>({
		});

	}


	/** The storage class of the S3 bucket or object. Valid values are: */
	export enum StorageClass { STANDARD = 0, REDUCED_REDUNDANCY = 1, STANDARD_IA = 2, INTELLIGENT_TIERING = 3, DEEP_ARCHIVE = 4, ONEZONE_IA = 5, GLACIER = 6 }


	/** The property to use in a condition that determines which objects are analyzed by a classification job. Valid values are: */
	export enum ScopeFilterKey { BUCKET_CREATION_DATE = 0, OBJECT_EXTENSION = 1, OBJECT_LAST_MODIFIED_DATE = 2, OBJECT_SIZE = 3, TAG = 4 }

	export enum Unit { TERABYTES = 0 }

	export interface TagResourceRequest {

		/**
		 * A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account.
		 * Required
		 */
		tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}


	/** The type of object to apply a tag-based condition to. Valid values are: */
	export enum TagTarget { S3_OBJECT = 0 }

	export interface TestCustomDataIdentifierRequest {
		ignoreWords?: Array<string>;
		keywords?: Array<string>;
		maximumMatchDistance?: number | null;

		/** Required */
		regex: string;

		/** Required */
		sampleText: string;
	}
	export interface TestCustomDataIdentifierRequestFormProperties {
		maximumMatchDistance: FormControl<number | null | undefined>,

		/** Required */
		regex: FormControl<string | null | undefined>,

		/** Required */
		sampleText: FormControl<string | null | undefined>,
	}
	export function CreateTestCustomDataIdentifierRequestFormGroup() {
		return new FormGroup<TestCustomDataIdentifierRequestFormProperties>({
			maximumMatchDistance: new FormControl<number | null | undefined>(undefined),
			regex: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sampleText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UnarchiveFindingsRequest {

		/** Required */
		findingIds: Array<string>;
	}
	export interface UnarchiveFindingsRequestFormProperties {
	}
	export function CreateUnarchiveFindingsRequestFormGroup() {
		return new FormGroup<UnarchiveFindingsRequestFormProperties>({
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

	export interface UpdateClassificationJobRequest {

		/**
		 * The current status of a classification job. Valid values are:
		 * Required
		 */
		jobStatus: DescribeClassificationJobResponseJobStatus;
	}
	export interface UpdateClassificationJobRequestFormProperties {

		/**
		 * The current status of a classification job. Valid values are:
		 * Required
		 */
		jobStatus: FormControl<DescribeClassificationJobResponseJobStatus | null | undefined>,
	}
	export function CreateUpdateClassificationJobRequestFormGroup() {
		return new FormGroup<UpdateClassificationJobRequestFormProperties>({
			jobStatus: new FormControl<DescribeClassificationJobResponseJobStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateFindingsFilterRequest {

		/** The action to perform on findings that meet the filter criteria. Valid values are: */
		action?: GetFindingsFilterResponseAction | null;
		description?: string | null;

		/** Specifies, as a map, one or more property-based conditions that filter the results of a query for findings. */
		findingCriteria?: FindingCriteria;
		name?: string | null;
		position?: number | null;
	}
	export interface UpdateFindingsFilterRequestFormProperties {

		/** The action to perform on findings that meet the filter criteria. Valid values are: */
		action: FormControl<GetFindingsFilterResponseAction | null | undefined>,
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		position: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFindingsFilterRequestFormGroup() {
		return new FormGroup<UpdateFindingsFilterRequestFormProperties>({
			action: new FormControl<GetFindingsFilterResponseAction | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateMacieSessionRequest {

		/** The frequency with which Amazon Macie publishes findings for an account. This includes adding findings to AWS Security Hub and exporting finding events to Amazon CloudWatch. Valid values are: */
		findingPublishingFrequency?: GetMacieSessionResponseFindingPublishingFrequency | null;

		/** The status of an Amazon Macie account. Valid values are: */
		status?: GetMacieSessionResponseStatus | null;
	}
	export interface UpdateMacieSessionRequestFormProperties {

		/** The frequency with which Amazon Macie publishes findings for an account. This includes adding findings to AWS Security Hub and exporting finding events to Amazon CloudWatch. Valid values are: */
		findingPublishingFrequency: FormControl<GetMacieSessionResponseFindingPublishingFrequency | null | undefined>,

		/** The status of an Amazon Macie account. Valid values are: */
		status: FormControl<GetMacieSessionResponseStatus | null | undefined>,
	}
	export function CreateUpdateMacieSessionRequestFormGroup() {
		return new FormGroup<UpdateMacieSessionRequestFormProperties>({
			findingPublishingFrequency: new FormControl<GetMacieSessionResponseFindingPublishingFrequency | null | undefined>(undefined),
			status: new FormControl<GetMacieSessionResponseStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateMemberSessionRequest {

		/**
		 * The status of an Amazon Macie account. Valid values are:
		 * Required
		 */
		status: GetMacieSessionResponseStatus;
	}
	export interface UpdateMemberSessionRequestFormProperties {

		/**
		 * The status of an Amazon Macie account. Valid values are:
		 * Required
		 */
		status: FormControl<GetMacieSessionResponseStatus | null | undefined>,
	}
	export function CreateUpdateMemberSessionRequestFormGroup() {
		return new FormGroup<UpdateMemberSessionRequestFormProperties>({
			status: new FormControl<GetMacieSessionResponseStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateOrganizationConfigurationRequest {

		/** Required */
		autoEnable: boolean;
	}
	export interface UpdateOrganizationConfigurationRequestFormProperties {

		/** Required */
		autoEnable: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateOrganizationConfigurationRequestFormGroup() {
		return new FormGroup<UpdateOrganizationConfigurationRequestFormProperties>({
			autoEnable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The name of a usage metric for an account. Possible values are: */
	export enum UsageType { DATA_INVENTORY_EVALUATION = 0, SENSITIVE_DATA_DISCOVERY = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Accepts an Amazon Macie membership invitation that was received from a specific account.
		 * Post invitations/accept
		 * @return {AcceptInvitationResponse} Success
		 */
		AcceptInvitation(requestBody: AcceptInvitationPostBody): Observable<AcceptInvitationResponse> {
			return this.http.post<AcceptInvitationResponse>(this.baseUri + 'invitations/accept', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Archives one or more findings.</p>
		 * Post findings/archive
		 * @return {ArchiveFindingsResponse} Success
		 */
		ArchiveFindings(requestBody: ArchiveFindingsPostBody): Observable<ArchiveFindingsResponse> {
			return this.http.post<ArchiveFindingsResponse>(this.baseUri + 'findings/archive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about one or more custom data identifiers.
		 * Post custom-data-identifiers/get
		 * @return {BatchGetCustomDataIdentifiersResponse} Success
		 */
		BatchGetCustomDataIdentifiers(requestBody: BatchGetCustomDataIdentifiersPostBody): Observable<BatchGetCustomDataIdentifiersResponse> {
			return this.http.post<BatchGetCustomDataIdentifiersResponse>(this.baseUri + 'custom-data-identifiers/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates and defines the settings for a classification job.</p>
		 * Post jobs
		 * @return {CreateClassificationJobResponse} Success
		 */
		CreateClassificationJob(requestBody: CreateClassificationJobPostBody): Observable<CreateClassificationJobResponse> {
			return this.http.post<CreateClassificationJobResponse>(this.baseUri + 'jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates and defines the criteria and other settings for a custom data identifier.
		 * Post custom-data-identifiers
		 * @return {CreateCustomDataIdentifierResponse} Success
		 */
		CreateCustomDataIdentifier(requestBody: CreateCustomDataIdentifierPostBody): Observable<CreateCustomDataIdentifierResponse> {
			return this.http.post<CreateCustomDataIdentifierResponse>(this.baseUri + 'custom-data-identifiers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates and defines the criteria and other settings for a findings filter.
		 * Post findingsfilters
		 * @return {CreateFindingsFilterResponse} Success
		 */
		CreateFindingsFilter(requestBody: CreateFindingsFilterPostBody): Observable<CreateFindingsFilterResponse> {
			return this.http.post<CreateFindingsFilterResponse>(this.baseUri + 'findingsfilters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a subset of information about all the findings filters for an account.
		 * Get findingsfilters
		 * @param {number} maxResults The maximum number of items to include in each page of a paginated response.
		 * @param {string} nextToken The nextToken string that specifies which page of results to return in a paginated response.
		 * @return {ListFindingsFiltersResponse} Success
		 */
		ListFindingsFilters(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListFindingsFiltersResponse> {
			return this.http.get<ListFindingsFiltersResponse>(this.baseUri + 'findingsfilters?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Sends an Amazon Macie membership invitation to one or more accounts.</p>
		 * Post invitations
		 * @return {CreateInvitationsResponse} Success
		 */
		CreateInvitations(requestBody: CreateInvitationsPostBody): Observable<CreateInvitationsResponse> {
			return this.http.post<CreateInvitationsResponse>(this.baseUri + 'invitations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about all the Amazon Macie membership invitations that were received by an account.
		 * Get invitations
		 * @param {number} maxResults The maximum number of items to include in each page of a paginated response.
		 * @param {string} nextToken The nextToken string that specifies which page of results to return in a paginated response.
		 * @return {ListInvitationsResponse} Success
		 */
		ListInvitations(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListInvitationsResponse> {
			return this.http.get<ListInvitationsResponse>(this.baseUri + 'invitations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Associates an account with an Amazon Macie master account.</p>
		 * Post members
		 * @return {CreateMemberResponse} Success
		 */
		CreateMember(requestBody: CreateMemberPostBody): Observable<CreateMemberResponse> {
			return this.http.post<CreateMemberResponse>(this.baseUri + 'members', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the accounts that are associated with an Amazon Macie master account.
		 * Get members
		 * @param {number} maxResults The maximum number of items to include in each page of a paginated response.
		 * @param {string} nextToken The nextToken string that specifies which page of results to return in a paginated response.
		 * @param {string} onlyAssociated Specifies which accounts to include in the response, based on the status of an account's relationship with the master account. By default, the response includes only current member accounts. To include all accounts, set the value for this parameter to false.
		 * @return {ListMembersResponse} Success
		 */
		ListMembers(maxResults: number | null | undefined, nextToken: string | null | undefined, onlyAssociated: string | null | undefined): Observable<ListMembersResponse> {
			return this.http.get<ListMembersResponse>(this.baseUri + 'members?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&onlyAssociated=' + (onlyAssociated == null ? '' : encodeURIComponent(onlyAssociated)), {});
		}

		/**
		 * <p>Creates sample findings.</p>
		 * Post findings/sample
		 * @return {CreateSampleFindingsResponse} Success
		 */
		CreateSampleFindings(requestBody: CreateSampleFindingsPostBody): Observable<CreateSampleFindingsResponse> {
			return this.http.post<CreateSampleFindingsResponse>(this.baseUri + 'findings/sample', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Declines Amazon Macie membership invitations that were received from specific accounts.
		 * Post invitations/decline
		 * @return {DeclineInvitationsResponse} Success
		 */
		DeclineInvitations(requestBody: DeclineInvitationsPostBody): Observable<DeclineInvitationsResponse> {
			return this.http.post<DeclineInvitationsResponse>(this.baseUri + 'invitations/decline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a custom data identifier.
		 * Delete custom-data-identifiers/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource or account that the request applies to.
		 * @return {DeleteCustomDataIdentifierResponse} Success
		 */
		DeleteCustomDataIdentifier(id: string): Observable<DeleteCustomDataIdentifierResponse> {
			return this.http.delete<DeleteCustomDataIdentifierResponse>(this.baseUri + 'custom-data-identifiers/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves information about the criteria and other settings for a custom data identifier.
		 * Get custom-data-identifiers/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource or account that the request applies to.
		 * @return {GetCustomDataIdentifierResponse} Success
		 */
		GetCustomDataIdentifier(id: string): Observable<GetCustomDataIdentifierResponse> {
			return this.http.get<GetCustomDataIdentifierResponse>(this.baseUri + 'custom-data-identifiers/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Deletes a findings filter.
		 * Delete findingsfilters/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource or account that the request applies to.
		 * @return {DeleteFindingsFilterResponse} Success
		 */
		DeleteFindingsFilter(id: string): Observable<DeleteFindingsFilterResponse> {
			return this.http.delete<DeleteFindingsFilterResponse>(this.baseUri + 'findingsfilters/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves information about the criteria and other settings for a findings filter.
		 * Get findingsfilters/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource or account that the request applies to.
		 * @return {GetFindingsFilterResponse} Success
		 */
		GetFindingsFilter(id: string): Observable<GetFindingsFilterResponse> {
			return this.http.get<GetFindingsFilterResponse>(this.baseUri + 'findingsfilters/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Updates the criteria and other settings for a findings filter.
		 * Patch findingsfilters/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource or account that the request applies to.
		 * @return {UpdateFindingsFilterResponse} Success
		 */
		UpdateFindingsFilter(id: string, requestBody: UpdateFindingsFilterPatchBody): Observable<UpdateFindingsFilterResponse> {
			return this.http.patch<UpdateFindingsFilterResponse>(this.baseUri + 'findingsfilters/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes Amazon Macie membership invitations that were received from specific accounts.
		 * Post invitations/delete
		 * @return {DeleteInvitationsResponse} Success
		 */
		DeleteInvitations(requestBody: DeleteInvitationsPostBody): Observable<DeleteInvitationsResponse> {
			return this.http.post<DeleteInvitationsResponse>(this.baseUri + 'invitations/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the association between an Amazon Macie master account and an account.
		 * Delete members/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource or account that the request applies to.
		 * @return {DeleteMemberResponse} Success
		 */
		DeleteMember(id: string): Observable<DeleteMemberResponse> {
			return this.http.delete<DeleteMemberResponse>(this.baseUri + 'members/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves information about a member account that's associated with an Amazon Macie master account.
		 * Get members/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource or account that the request applies to.
		 * @return {GetMemberResponse} Success
		 */
		GetMember(id: string): Observable<GetMemberResponse> {
			return this.http.get<GetMemberResponse>(this.baseUri + 'members/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * <p>Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes.</p>
		 * Post datasources/s3
		 * @return {DescribeBucketsResponse} Success
		 */
		DescribeBuckets(requestBody: DescribeBucketsPostBody): Observable<DescribeBucketsResponse> {
			return this.http.post<DescribeBucketsResponse>(this.baseUri + 'datasources/s3', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the status and settings for a classification job.
		 * Get jobs/{jobId}
		 * @param {string} jobId The unique identifier for the classification job.
		 * @return {DescribeClassificationJobResponse} Success
		 */
		DescribeClassificationJob(jobId: string): Observable<DescribeClassificationJobResponse> {
			return this.http.get<DescribeClassificationJobResponse>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * Cancels a classification job.
		 * Patch jobs/{jobId}
		 * @param {string} jobId The unique identifier for the classification job.
		 * @return {UpdateClassificationJobResponse} Success
		 */
		UpdateClassificationJob(jobId: string, requestBody: UpdateClassificationJobPatchBody): Observable<UpdateClassificationJobResponse> {
			return this.http.patch<UpdateClassificationJobResponse>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the Amazon Macie configuration settings for an AWS organization.
		 * Get admin/configuration
		 * @return {DescribeOrganizationConfigurationResponse} Success
		 */
		DescribeOrganizationConfiguration(): Observable<DescribeOrganizationConfigurationResponse> {
			return this.http.get<DescribeOrganizationConfigurationResponse>(this.baseUri + 'admin/configuration', {});
		}

		/**
		 * Updates Amazon Macie configuration settings for an AWS organization.
		 * Patch admin/configuration
		 * @return {UpdateOrganizationConfigurationResponse} Success
		 */
		UpdateOrganizationConfiguration(requestBody: UpdateOrganizationConfigurationPatchBody): Observable<UpdateOrganizationConfigurationResponse> {
			return this.http.patch<UpdateOrganizationConfigurationResponse>(this.baseUri + 'admin/configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables an Amazon Macie account and deletes Macie resources for the account.
		 * Delete macie
		 * @return {DisableMacieResponse} Success
		 */
		DisableMacie(): Observable<DisableMacieResponse> {
			return this.http.delete<DisableMacieResponse>(this.baseUri + 'macie', {});
		}

		/**
		 * Enables Amazon Macie and specifies the configuration settings for a Macie account.
		 * Post macie
		 * @return {EnableMacieResponse} Success
		 */
		EnableMacie(requestBody: EnableMaciePostBody): Observable<EnableMacieResponse> {
			return this.http.post<EnableMacieResponse>(this.baseUri + 'macie', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the current status and configuration settings for an Amazon Macie account.
		 * Get macie
		 * @return {GetMacieSessionResponse} Success
		 */
		GetMacieSession(): Observable<GetMacieSessionResponse> {
			return this.http.get<GetMacieSessionResponse>(this.baseUri + 'macie', {});
		}

		/**
		 * Suspends or re-enables an Amazon Macie account, or updates the configuration settings for a Macie account.
		 * Patch macie
		 * @return {UpdateMacieSessionResponse} Success
		 */
		UpdateMacieSession(requestBody: UpdateMacieSessionPatchBody): Observable<UpdateMacieSessionResponse> {
			return this.http.patch<UpdateMacieSessionResponse>(this.baseUri + 'macie', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables an account as a delegated administrator of Amazon Macie for an AWS organization.
		 * Delete admin#adminAccountId
		 * @param {string} adminAccountId The AWS account ID of the delegated administrator account.
		 * @return {DisableOrganizationAdminAccountResponse} Success
		 */
		DisableOrganizationAdminAccount(adminAccountId: string): Observable<DisableOrganizationAdminAccountResponse> {
			return this.http.delete<DisableOrganizationAdminAccountResponse>(this.baseUri + 'admin#adminAccountId?adminAccountId=' + (adminAccountId == null ? '' : encodeURIComponent(adminAccountId)), {});
		}

		/**
		 * Disassociates a member account from its Amazon Macie master account.
		 * Post master/disassociate
		 * @return {DisassociateFromMasterAccountResponse} Success
		 */
		DisassociateFromMasterAccount(): Observable<DisassociateFromMasterAccountResponse> {
			return this.http.post<DisassociateFromMasterAccountResponse>(this.baseUri + 'master/disassociate', null, {});
		}

		/**
		 * Disassociates an Amazon Macie master account from a member account.
		 * Post members/disassociate/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource or account that the request applies to.
		 * @return {DisassociateMemberResponse} Success
		 */
		DisassociateMember(id: string): Observable<DisassociateMemberResponse> {
			return this.http.post<DisassociateMemberResponse>(this.baseUri + 'members/disassociate/' + (id == null ? '' : encodeURIComponent(id)), null, {});
		}

		/**
		 * Enables an account as a delegated administrator of Amazon Macie for an AWS organization.
		 * Post admin
		 * @return {EnableOrganizationAdminAccountResponse} Success
		 */
		EnableOrganizationAdminAccount(requestBody: EnableOrganizationAdminAccountPostBody): Observable<EnableOrganizationAdminAccountResponse> {
			return this.http.post<EnableOrganizationAdminAccountResponse>(this.baseUri + 'admin', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the account that's designated as the delegated administrator of Amazon Macie for an AWS organization.
		 * Get admin
		 * @param {number} maxResults The maximum number of items to include in each page of a paginated response.
		 * @param {string} nextToken The nextToken string that specifies which page of results to return in a paginated response.
		 * @return {ListOrganizationAdminAccountsResponse} Success
		 */
		ListOrganizationAdminAccounts(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListOrganizationAdminAccountsResponse> {
			return this.http.get<ListOrganizationAdminAccountsResponse>(this.baseUri + 'admin?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Retrieves (queries) aggregated statistical data for all the S3 buckets that Amazon Macie monitors and analyzes.</p>
		 * Post datasources/s3/statistics
		 * @return {GetBucketStatisticsResponse} Success
		 */
		GetBucketStatistics(requestBody: GetBucketStatisticsPostBody): Observable<GetBucketStatisticsResponse> {
			return this.http.post<GetBucketStatisticsResponse>(this.baseUri + 'datasources/s3/statistics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the configuration settings for exporting data classification results.
		 * Get classification-export-configuration
		 * @return {GetClassificationExportConfigurationResponse} Success
		 */
		GetClassificationExportConfiguration(): Observable<GetClassificationExportConfigurationResponse> {
			return this.http.get<GetClassificationExportConfigurationResponse>(this.baseUri + 'classification-export-configuration', {});
		}

		/**
		 * Creates or updates the configuration settings for exporting data classification results.
		 * Put classification-export-configuration
		 * @return {PutClassificationExportConfigurationResponse} Success
		 */
		PutClassificationExportConfiguration(requestBody: PutClassificationExportConfigurationPutBody): Observable<PutClassificationExportConfigurationResponse> {
			return this.http.put<PutClassificationExportConfigurationResponse>(this.baseUri + 'classification-export-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves (queries) aggregated statistical data about findings.</p>
		 * Post findings/statistics
		 * @return {GetFindingStatisticsResponse} Success
		 */
		GetFindingStatistics(requestBody: GetFindingStatisticsPostBody): Observable<GetFindingStatisticsResponse> {
			return this.http.post<GetFindingStatisticsResponse>(this.baseUri + 'findings/statistics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about one or more findings.
		 * Post findings/describe
		 * @return {GetFindingsResponse} Success
		 */
		GetFindings(requestBody: GetFindingsPostBody): Observable<GetFindingsResponse> {
			return this.http.post<GetFindingsResponse>(this.baseUri + 'findings/describe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the count of Amazon Macie membership invitations that were received by an account.
		 * Get invitations/count
		 * @return {GetInvitationsCountResponse} Success
		 */
		GetInvitationsCount(): Observable<GetInvitationsCountResponse> {
			return this.http.get<GetInvitationsCountResponse>(this.baseUri + 'invitations/count', {});
		}

		/**
		 * Retrieves information about the Amazon Macie master account for an account.
		 * Get master
		 * @return {GetMasterAccountResponse} Success
		 */
		GetMasterAccount(): Observable<GetMasterAccountResponse> {
			return this.http.get<GetMasterAccountResponse>(this.baseUri + 'master', {});
		}

		/**
		 * Retrieves (queries) quotas and aggregated usage data for one or more accounts.
		 * Post usage/statistics
		 * @return {GetUsageStatisticsResponse} Success
		 */
		GetUsageStatistics(requestBody: GetUsageStatisticsPostBody): Observable<GetUsageStatisticsResponse> {
			return this.http.post<GetUsageStatisticsResponse>(this.baseUri + 'usage/statistics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves (queries) aggregated usage data for an account.
		 * Get usage
		 * @return {GetUsageTotalsResponse} Success
		 */
		GetUsageTotals(): Observable<GetUsageTotalsResponse> {
			return this.http.get<GetUsageTotalsResponse>(this.baseUri + 'usage', {});
		}

		/**
		 * Retrieves information about the status and settings for one or more classification jobs.
		 * Post jobs/list
		 * @return {ListClassificationJobsResponse} Success
		 */
		ListClassificationJobs(requestBody: ListClassificationJobsPostBody): Observable<ListClassificationJobsResponse> {
			return this.http.post<ListClassificationJobsResponse>(this.baseUri + 'jobs/list', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a subset of information about all the custom data identifiers for an account.
		 * Post custom-data-identifiers/list
		 * @return {ListCustomDataIdentifiersResponse} Success
		 */
		ListCustomDataIdentifiers(requestBody: ListCustomDataIdentifiersPostBody): Observable<ListCustomDataIdentifiersResponse> {
			return this.http.post<ListCustomDataIdentifiersResponse>(this.baseUri + 'custom-data-identifiers/list', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a subset of information about one or more findings.</p>
		 * Post findings
		 * @return {ListFindingsResponse} Success
		 */
		ListFindings(requestBody: ListFindingsPostBody): Observable<ListFindingsResponse> {
			return this.http.post<ListFindingsResponse>(this.baseUri + 'findings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the tags (keys and values) that are associated with a classification job, custom data identifier, findings filter, or member account.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the classification job, custom data identifier, findings filter, or member account.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds or updates one or more tags (keys and values) that are associated with a classification job, custom data identifier, findings filter, or member account.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the classification job, custom data identifier, findings filter, or member account.
		 * @return {void} 
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Tests a custom data identifier.
		 * Post custom-data-identifiers/test
		 * @return {TestCustomDataIdentifierResponse} Success
		 */
		TestCustomDataIdentifier(requestBody: TestCustomDataIdentifierPostBody): Observable<TestCustomDataIdentifierResponse> {
			return this.http.post<TestCustomDataIdentifierResponse>(this.baseUri + 'custom-data-identifiers/test', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Reactivates (unarchives) one or more findings.</p>
		 * Post findings/unarchive
		 * @return {UnarchiveFindingsResponse} Success
		 */
		UnarchiveFindings(requestBody: UnarchiveFindingsPostBody): Observable<UnarchiveFindingsResponse> {
			return this.http.post<UnarchiveFindingsResponse>(this.baseUri + 'findings/unarchive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags (keys and values) from a classification job, custom data identifier, findings filter, or member account.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the classification job, custom data identifier, findings filter, or member account.
		 * @param {Array<string>} tagKeys The key of the tag to remove from the resource. To remove multiple tags, append the tagKeys parameter and argument for each additional tag to remove, separated by an ampersand (&amp;).
		 * @return {void} 
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Enables an Amazon Macie master account to suspend or re-enable a member account.</p>
		 * Patch macie/members/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource or account that the request applies to.
		 * @return {UpdateMemberSessionResponse} Success
		 */
		UpdateMemberSession(id: string, requestBody: UpdateMemberSessionPatchBody): Observable<UpdateMemberSessionResponse> {
			return this.http.patch<UpdateMemberSessionResponse>(this.baseUri + 'macie/members/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AcceptInvitationPostBody {

		/**
		 * The unique identifier for the invitation to accept.
		 * Required
		 */
		invitationId: string;

		/**
		 * The AWS account ID for the account that sent the invitation.
		 * Required
		 */
		masterAccount: string;
	}
	export interface AcceptInvitationPostBodyFormProperties {

		/**
		 * The unique identifier for the invitation to accept.
		 * Required
		 */
		invitationId: FormControl<string | null | undefined>,

		/**
		 * The AWS account ID for the account that sent the invitation.
		 * Required
		 */
		masterAccount: FormControl<string | null | undefined>,
	}
	export function CreateAcceptInvitationPostBodyFormGroup() {
		return new FormGroup<AcceptInvitationPostBodyFormProperties>({
			invitationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			masterAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ArchiveFindingsPostBody {

		/**
		 * An array of strings that lists the unique identifiers for the findings to archive.
		 * Required
		 */
		findingIds: Array<string>;
	}
	export interface ArchiveFindingsPostBodyFormProperties {
	}
	export function CreateArchiveFindingsPostBodyFormGroup() {
		return new FormGroup<ArchiveFindingsPostBodyFormProperties>({
		});

	}

	export interface BatchGetCustomDataIdentifiersPostBody {

		/** An array of strings that lists the unique identifiers for the custom data identifiers to retrieve information about. */
		ids?: Array<string>;
	}
	export interface BatchGetCustomDataIdentifiersPostBodyFormProperties {
	}
	export function CreateBatchGetCustomDataIdentifiersPostBodyFormGroup() {
		return new FormGroup<BatchGetCustomDataIdentifiersPostBodyFormProperties>({
		});

	}

	export interface CreateClassificationJobPostBody {

		/**
		 * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
		 * Required
		 */
		clientToken: string;

		/** The custom data identifiers to use for data analysis and classification. */
		customDataIdentifierIds?: Array<string>;

		/** A custom description of the job. The description can contain as many as 512 characters. */
		description?: string | null;

		/** Specifies whether to run the job immediately, after it's created. */
		initialRun?: boolean | null;

		/**
		 * The schedule for running a classification job. Valid values are:
		 * Required
		 */
		jobType: DescribeClassificationJobResponseJobType;

		/**
		 * A custom name for the job. The name must contain at least 3 characters and can contain as many as 64 characters.
		 * Required
		 */
		name: string;

		/**
		 * Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis.
		 * Required
		 */
		s3JobDefinition: CreateClassificationJobPostBodyS3JobDefinition;

		/** The sampling depth, as a percentage, to apply when processing objects. This value determines the percentage of eligible objects that the job analyzes. If the value is less than 100, Amazon Macie randomly selects the objects to analyze, up to the specified percentage. */
		samplingPercentage?: number | null;

		/** Specifies the recurrence pattern for running a classification job. */
		scheduleFrequency?: CreateClassificationJobPostBodyScheduleFrequency;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: {[id: string]: string };
	}
	export interface CreateClassificationJobPostBodyFormProperties {

		/**
		 * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
		 * Required
		 */
		clientToken: FormControl<string | null | undefined>,

		/** A custom description of the job. The description can contain as many as 512 characters. */
		description: FormControl<string | null | undefined>,

		/** Specifies whether to run the job immediately, after it's created. */
		initialRun: FormControl<boolean | null | undefined>,

		/**
		 * The schedule for running a classification job. Valid values are:
		 * Required
		 */
		jobType: FormControl<DescribeClassificationJobResponseJobType | null | undefined>,

		/**
		 * A custom name for the job. The name must contain at least 3 characters and can contain as many as 64 characters.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The sampling depth, as a percentage, to apply when processing objects. This value determines the percentage of eligible objects that the job analyzes. If the value is less than 100, Amazon Macie randomly selects the objects to analyze, up to the specified percentage. */
		samplingPercentage: FormControl<number | null | undefined>,

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateClassificationJobPostBodyFormGroup() {
		return new FormGroup<CreateClassificationJobPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			initialRun: new FormControl<boolean | null | undefined>(undefined),
			jobType: new FormControl<DescribeClassificationJobResponseJobType | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			samplingPercentage: new FormControl<number | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateClassificationJobPostBodyS3JobDefinition {
		bucketDefinitions?: Array<S3BucketDefinitionForJob>;

		/** An object that specifies conditions for including or excluding objects from the job. */
		scoping?: Scoping;
	}
	export interface CreateClassificationJobPostBodyS3JobDefinitionFormProperties {
	}
	export function CreateCreateClassificationJobPostBodyS3JobDefinitionFormGroup() {
		return new FormGroup<CreateClassificationJobPostBodyS3JobDefinitionFormProperties>({
		});

	}

	export interface CreateClassificationJobPostBodyScheduleFrequency {

		/** Run the job once a day, every day. If specified, this is an empty object. */
		dailySchedule?: DailySchedule;

		/** Run the job once a month, on a specific day of the month. This value can be an integer from 1 through 30. */
		monthlySchedule?: MonthlySchedule;

		/** Reserved for future use. */
		weeklySchedule?: WeeklySchedule;
	}
	export interface CreateClassificationJobPostBodyScheduleFrequencyFormProperties {
	}
	export function CreateCreateClassificationJobPostBodyScheduleFrequencyFormGroup() {
		return new FormGroup<CreateClassificationJobPostBodyScheduleFrequencyFormProperties>({
		});

	}

	export interface CreateCustomDataIdentifierPostBody {

		/** A unique, case-sensitive token that you provide to ensure the idempotency of the request. */
		clientToken?: string | null;

		/** <p>A custom description of the custom data identifier. The description can contain up to 120 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a custom data identifier. Other users of your account might be able to see the identifier's description, depending on the actions that they're allowed to perform in Amazon Macie.</p> */
		description?: string | null;

		/** An array that lists specific character sequences (ignore words) to exclude from the results. If the text matched by the regular expression is the same as any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4 - 90 characters. */
		ignoreWords?: Array<string>;

		/** An array that lists specific character sequences (keywords), one of which must be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 4 - 90 characters. */
		keywords?: Array<string>;

		/** The maximum number of characters that can exist between text that matches the regex pattern and the character sequences specified by the keywords array. Macie includes or excludes a result based on the proximity of a keyword to text that matches the regex pattern. The distance can be 1 - 300 characters. The default value is 300. */
		maximumMatchDistance?: number | null;

		/** <p>A custom name for the custom data identifier. The name can contain as many as 120 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a custom data identifier. Other users of your account might be able to see the identifier's name, depending on the actions that they're allowed to perform in Amazon Macie.</p> */
		name?: string | null;

		/** The regular expression (regex) that defines the pattern to match. The expression can contain as many as 500 characters. */
		regex?: string | null;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: {[id: string]: string };
	}
	export interface CreateCustomDataIdentifierPostBodyFormProperties {

		/** A unique, case-sensitive token that you provide to ensure the idempotency of the request. */
		clientToken: FormControl<string | null | undefined>,

		/** <p>A custom description of the custom data identifier. The description can contain up to 120 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a custom data identifier. Other users of your account might be able to see the identifier's description, depending on the actions that they're allowed to perform in Amazon Macie.</p> */
		description: FormControl<string | null | undefined>,

		/** The maximum number of characters that can exist between text that matches the regex pattern and the character sequences specified by the keywords array. Macie includes or excludes a result based on the proximity of a keyword to text that matches the regex pattern. The distance can be 1 - 300 characters. The default value is 300. */
		maximumMatchDistance: FormControl<number | null | undefined>,

		/** <p>A custom name for the custom data identifier. The name can contain as many as 120 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a custom data identifier. Other users of your account might be able to see the identifier's name, depending on the actions that they're allowed to perform in Amazon Macie.</p> */
		name: FormControl<string | null | undefined>,

		/** The regular expression (regex) that defines the pattern to match. The expression can contain as many as 500 characters. */
		regex: FormControl<string | null | undefined>,

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateCustomDataIdentifierPostBodyFormGroup() {
		return new FormGroup<CreateCustomDataIdentifierPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			maximumMatchDistance: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			regex: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateFindingsFilterPostBody {

		/**
		 * The action to perform on findings that meet the filter criteria. Valid values are:
		 * Required
		 */
		action: GetFindingsFilterResponseAction;

		/** A unique, case-sensitive token that you provide to ensure the idempotency of the request. */
		clientToken?: string | null;

		/** <p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users of your account might be able to see the filter's description, depending on the actions that they're allowed to perform in Amazon Macie.</p> */
		description?: string | null;

		/**
		 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
		 * Required
		 */
		findingCriteria: CreateFindingsFilterPostBodyFindingCriteria;

		/**
		 * <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see the filter's name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
		 * Required
		 */
		name: string;

		/** The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings. */
		position?: number | null;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: {[id: string]: string };
	}
	export interface CreateFindingsFilterPostBodyFormProperties {

		/**
		 * The action to perform on findings that meet the filter criteria. Valid values are:
		 * Required
		 */
		action: FormControl<GetFindingsFilterResponseAction | null | undefined>,

		/** A unique, case-sensitive token that you provide to ensure the idempotency of the request. */
		clientToken: FormControl<string | null | undefined>,

		/** <p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users of your account might be able to see the filter's description, depending on the actions that they're allowed to perform in Amazon Macie.</p> */
		description: FormControl<string | null | undefined>,

		/**
		 * <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see the filter's name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings. */
		position: FormControl<number | null | undefined>,

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateFindingsFilterPostBodyFormGroup() {
		return new FormGroup<CreateFindingsFilterPostBodyFormProperties>({
			action: new FormControl<GetFindingsFilterResponseAction | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			position: new FormControl<number | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateFindingsFilterPostBodyFindingCriteria {

		/** Specifies a condition that defines a property, operator, and value to use to filter the results of a query for findings. */
		criterion?: Criterion;
	}
	export interface CreateFindingsFilterPostBodyFindingCriteriaFormProperties {
	}
	export function CreateCreateFindingsFilterPostBodyFindingCriteriaFormGroup() {
		return new FormGroup<CreateFindingsFilterPostBodyFindingCriteriaFormProperties>({
		});

	}

	export interface CreateInvitationsPostBody {

		/**
		 * An array that lists AWS account IDs, one for each account to send the invitation to.
		 * Required
		 */
		accountIds: Array<string>;

		/** Specifies whether to send an email notification to the root user of each account that the invitation will be sent to. This notification is in addition to an alert that the root user receives in AWS Personal Health Dashboard. To send an email notification to the root user of each account, set this value to true. */
		disableEmailNotification?: boolean | null;

		/** A custom message to include in the invitation. Amazon Macie adds this message to the standard content that it sends for an invitation. */
		message?: string | null;
	}
	export interface CreateInvitationsPostBodyFormProperties {

		/** Specifies whether to send an email notification to the root user of each account that the invitation will be sent to. This notification is in addition to an alert that the root user receives in AWS Personal Health Dashboard. To send an email notification to the root user of each account, set this value to true. */
		disableEmailNotification: FormControl<boolean | null | undefined>,

		/** A custom message to include in the invitation. Amazon Macie adds this message to the standard content that it sends for an invitation. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateCreateInvitationsPostBodyFormGroup() {
		return new FormGroup<CreateInvitationsPostBodyFormProperties>({
			disableEmailNotification: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMemberPostBody {

		/**
		 * Specifies details for an account to associate with an Amazon Macie master account.
		 * Required
		 */
		account: CreateMemberPostBodyAccount;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: {[id: string]: string };
	}
	export interface CreateMemberPostBodyFormProperties {

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateMemberPostBodyFormGroup() {
		return new FormGroup<CreateMemberPostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateMemberPostBodyAccount {
		accountId?: string | null;
		email?: string | null;
	}
	export interface CreateMemberPostBodyAccountFormProperties {
		accountId: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
	}
	export function CreateCreateMemberPostBodyAccountFormGroup() {
		return new FormGroup<CreateMemberPostBodyAccountFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSampleFindingsPostBody {

		/** <p>An array that lists one or more types of findings to include in the set of sample findings. Currently, the only supported value is Policy:IAMUser/S3BucketEncryptionDisabled.</p> */
		findingTypes?: Array<FindingType>;
	}
	export interface CreateSampleFindingsPostBodyFormProperties {
	}
	export function CreateCreateSampleFindingsPostBodyFormGroup() {
		return new FormGroup<CreateSampleFindingsPostBodyFormProperties>({
		});

	}

	export interface DeclineInvitationsPostBody {

		/**
		 * An array that lists AWS account IDs, one for each account that sent an invitation to decline.
		 * Required
		 */
		accountIds: Array<string>;
	}
	export interface DeclineInvitationsPostBodyFormProperties {
	}
	export function CreateDeclineInvitationsPostBodyFormGroup() {
		return new FormGroup<DeclineInvitationsPostBodyFormProperties>({
		});

	}

	export interface UpdateFindingsFilterPatchBody {

		/** The action to perform on findings that meet the filter criteria. Valid values are: */
		action?: GetFindingsFilterResponseAction | null;

		/** <p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users might be able to see the filter's description, depending on the actions that they're allowed to perform in Amazon Macie.</p> */
		description?: string | null;

		/** Specifies, as a map, one or more property-based conditions that filter the results of a query for findings. */
		findingCriteria?: UpdateFindingsFilterPatchBodyFindingCriteria;

		/** <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users might be able to see the filter's name, depending on the actions that they're allowed to perform in Amazon Macie.</p> */
		name?: string | null;

		/** The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings. */
		position?: number | null;
	}
	export interface UpdateFindingsFilterPatchBodyFormProperties {

		/** The action to perform on findings that meet the filter criteria. Valid values are: */
		action: FormControl<GetFindingsFilterResponseAction | null | undefined>,

		/** <p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users might be able to see the filter's description, depending on the actions that they're allowed to perform in Amazon Macie.</p> */
		description: FormControl<string | null | undefined>,

		/** <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users might be able to see the filter's name, depending on the actions that they're allowed to perform in Amazon Macie.</p> */
		name: FormControl<string | null | undefined>,

		/** The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings. */
		position: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFindingsFilterPatchBodyFormGroup() {
		return new FormGroup<UpdateFindingsFilterPatchBodyFormProperties>({
			action: new FormControl<GetFindingsFilterResponseAction | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateFindingsFilterPatchBodyFindingCriteria {

		/** Specifies a condition that defines a property, operator, and value to use to filter the results of a query for findings. */
		criterion?: Criterion;
	}
	export interface UpdateFindingsFilterPatchBodyFindingCriteriaFormProperties {
	}
	export function CreateUpdateFindingsFilterPatchBodyFindingCriteriaFormGroup() {
		return new FormGroup<UpdateFindingsFilterPatchBodyFindingCriteriaFormProperties>({
		});

	}

	export interface DeleteInvitationsPostBody {

		/**
		 * An array that lists AWS account IDs, one for each account that sent an invitation to delete.
		 * Required
		 */
		accountIds: Array<string>;
	}
	export interface DeleteInvitationsPostBodyFormProperties {
	}
	export function CreateDeleteInvitationsPostBodyFormGroup() {
		return new FormGroup<DeleteInvitationsPostBodyFormProperties>({
		});

	}

	export interface DescribeBucketsPostBody {

		/** Specifies, as a map, one or more attribute-based conditions that filter the results of a query for information about S3 buckets. */
		criteria?: {[id: string]: BucketCriteriaAdditionalProperties };

		/** The maximum number of items to include in each page of the response. The default value is 50. */
		maxResults?: number | null;

		/** The nextToken string that specifies which page of results to return in a paginated response. */
		nextToken?: string | null;

		/** Specifies criteria for sorting the results of a query for information about S3 buckets. */
		sortCriteria?: DescribeBucketsPostBodySortCriteria;
	}
	export interface DescribeBucketsPostBodyFormProperties {

		/** Specifies, as a map, one or more attribute-based conditions that filter the results of a query for information about S3 buckets. */
		criteria: FormControl<{[id: string]: BucketCriteriaAdditionalProperties } | null | undefined>,

		/** The maximum number of items to include in each page of the response. The default value is 50. */
		maxResults: FormControl<number | null | undefined>,

		/** The nextToken string that specifies which page of results to return in a paginated response. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBucketsPostBodyFormGroup() {
		return new FormGroup<DescribeBucketsPostBodyFormProperties>({
			criteria: new FormControl<{[id: string]: BucketCriteriaAdditionalProperties } | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeBucketsPostBodySortCriteria {
		attributeName?: string | null;
		orderBy?: OrderBy | null;
	}
	export interface DescribeBucketsPostBodySortCriteriaFormProperties {
		attributeName: FormControl<string | null | undefined>,
		orderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateDescribeBucketsPostBodySortCriteriaFormGroup() {
		return new FormGroup<DescribeBucketsPostBodySortCriteriaFormProperties>({
			attributeName: new FormControl<string | null | undefined>(undefined),
			orderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}

	export interface UpdateClassificationJobPatchBody {

		/**
		 * The current status of a classification job. Valid values are:
		 * Required
		 */
		jobStatus: DescribeClassificationJobResponseJobStatus;
	}
	export interface UpdateClassificationJobPatchBodyFormProperties {

		/**
		 * The current status of a classification job. Valid values are:
		 * Required
		 */
		jobStatus: FormControl<DescribeClassificationJobResponseJobStatus | null | undefined>,
	}
	export function CreateUpdateClassificationJobPatchBodyFormGroup() {
		return new FormGroup<UpdateClassificationJobPatchBodyFormProperties>({
			jobStatus: new FormControl<DescribeClassificationJobResponseJobStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateOrganizationConfigurationPatchBody {

		/**
		 * Specifies whether Amazon Macie is enabled automatically for each account, when the account is added to the AWS organization.
		 * Required
		 */
		autoEnable: boolean;
	}
	export interface UpdateOrganizationConfigurationPatchBodyFormProperties {

		/**
		 * Specifies whether Amazon Macie is enabled automatically for each account, when the account is added to the AWS organization.
		 * Required
		 */
		autoEnable: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateOrganizationConfigurationPatchBodyFormGroup() {
		return new FormGroup<UpdateOrganizationConfigurationPatchBodyFormProperties>({
			autoEnable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EnableMaciePostBody {

		/** A unique, case-sensitive token that you provide to ensure the idempotency of the request. */
		clientToken?: string | null;

		/** The frequency with which Amazon Macie publishes findings for an account. This includes adding findings to AWS Security Hub and exporting finding events to Amazon CloudWatch. Valid values are: */
		findingPublishingFrequency?: GetMacieSessionResponseFindingPublishingFrequency | null;

		/** The status of an Amazon Macie account. Valid values are: */
		status?: GetMacieSessionResponseStatus | null;
	}
	export interface EnableMaciePostBodyFormProperties {

		/** A unique, case-sensitive token that you provide to ensure the idempotency of the request. */
		clientToken: FormControl<string | null | undefined>,

		/** The frequency with which Amazon Macie publishes findings for an account. This includes adding findings to AWS Security Hub and exporting finding events to Amazon CloudWatch. Valid values are: */
		findingPublishingFrequency: FormControl<GetMacieSessionResponseFindingPublishingFrequency | null | undefined>,

		/** The status of an Amazon Macie account. Valid values are: */
		status: FormControl<GetMacieSessionResponseStatus | null | undefined>,
	}
	export function CreateEnableMaciePostBodyFormGroup() {
		return new FormGroup<EnableMaciePostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			findingPublishingFrequency: new FormControl<GetMacieSessionResponseFindingPublishingFrequency | null | undefined>(undefined),
			status: new FormControl<GetMacieSessionResponseStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateMacieSessionPatchBody {

		/** The frequency with which Amazon Macie publishes findings for an account. This includes adding findings to AWS Security Hub and exporting finding events to Amazon CloudWatch. Valid values are: */
		findingPublishingFrequency?: GetMacieSessionResponseFindingPublishingFrequency | null;

		/** The status of an Amazon Macie account. Valid values are: */
		status?: GetMacieSessionResponseStatus | null;
	}
	export interface UpdateMacieSessionPatchBodyFormProperties {

		/** The frequency with which Amazon Macie publishes findings for an account. This includes adding findings to AWS Security Hub and exporting finding events to Amazon CloudWatch. Valid values are: */
		findingPublishingFrequency: FormControl<GetMacieSessionResponseFindingPublishingFrequency | null | undefined>,

		/** The status of an Amazon Macie account. Valid values are: */
		status: FormControl<GetMacieSessionResponseStatus | null | undefined>,
	}
	export function CreateUpdateMacieSessionPatchBodyFormGroup() {
		return new FormGroup<UpdateMacieSessionPatchBodyFormProperties>({
			findingPublishingFrequency: new FormControl<GetMacieSessionResponseFindingPublishingFrequency | null | undefined>(undefined),
			status: new FormControl<GetMacieSessionResponseStatus | null | undefined>(undefined),
		});

	}

	export interface EnableOrganizationAdminAccountPostBody {

		/**
		 * The AWS account ID for the account.
		 * Required
		 */
		adminAccountId: string;

		/** A unique, case-sensitive token that you provide to ensure the idempotency of the request. */
		clientToken?: string | null;
	}
	export interface EnableOrganizationAdminAccountPostBodyFormProperties {

		/**
		 * The AWS account ID for the account.
		 * Required
		 */
		adminAccountId: FormControl<string | null | undefined>,

		/** A unique, case-sensitive token that you provide to ensure the idempotency of the request. */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateEnableOrganizationAdminAccountPostBodyFormGroup() {
		return new FormGroup<EnableOrganizationAdminAccountPostBodyFormProperties>({
			adminAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBucketStatisticsPostBody {

		/** The unique identifier for the AWS account. */
		accountId?: string | null;
	}
	export interface GetBucketStatisticsPostBodyFormProperties {

		/** The unique identifier for the AWS account. */
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateGetBucketStatisticsPostBodyFormGroup() {
		return new FormGroup<GetBucketStatisticsPostBodyFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutClassificationExportConfigurationPutBody {

		/**
		 * Specifies where to export data classification results to, and the encryption settings to use when storing results in that location. Currently, you can export classification results only to an S3 bucket.
		 * Required
		 */
		configuration: PutClassificationExportConfigurationPutBodyConfiguration;
	}
	export interface PutClassificationExportConfigurationPutBodyFormProperties {
	}
	export function CreatePutClassificationExportConfigurationPutBodyFormGroup() {
		return new FormGroup<PutClassificationExportConfigurationPutBodyFormProperties>({
		});

	}

	export interface PutClassificationExportConfigurationPutBodyConfiguration {

		/** Specifies an S3 bucket to export data classification results to, and the encryption settings to use when storing results in that bucket. */
		s3Destination?: S3Destination;
	}
	export interface PutClassificationExportConfigurationPutBodyConfigurationFormProperties {
	}
	export function CreatePutClassificationExportConfigurationPutBodyConfigurationFormGroup() {
		return new FormGroup<PutClassificationExportConfigurationPutBodyConfigurationFormProperties>({
		});

	}

	export interface GetFindingStatisticsPostBody {

		/** Specifies, as a map, one or more property-based conditions that filter the results of a query for findings. */
		findingCriteria?: GetFindingStatisticsPostBodyFindingCriteria;

		/**
		 * <p>The finding property to use to group the query results. Valid values are:</p> <ul><li><p>classificationDetails.jobId - The unique identifier for the classification job that produced the finding.</p></li> <li><p>resourcesAffected.s3Bucket.name - The name of the S3 bucket that the finding applies to.</p></li> <li><p>severity.description - The severity of the finding, such as High or Medium.</p></li> <li><p>type - The type of finding, such as Policy:IAMUser/S3BucketPublic and SensitiveData:S3Object/Personal.</p></li></ul>
		 * Required
		 */
		groupBy: GetFindingStatisticsPostBodyGroupBy;

		/** The maximum number of items to include in each page of the response. */
		size?: number | null;

		/** Specifies criteria for sorting the results of a query for information about findings. */
		sortCriteria?: GetFindingStatisticsPostBodySortCriteria;
	}
	export interface GetFindingStatisticsPostBodyFormProperties {

		/**
		 * <p>The finding property to use to group the query results. Valid values are:</p> <ul><li><p>classificationDetails.jobId - The unique identifier for the classification job that produced the finding.</p></li> <li><p>resourcesAffected.s3Bucket.name - The name of the S3 bucket that the finding applies to.</p></li> <li><p>severity.description - The severity of the finding, such as High or Medium.</p></li> <li><p>type - The type of finding, such as Policy:IAMUser/S3BucketPublic and SensitiveData:S3Object/Personal.</p></li></ul>
		 * Required
		 */
		groupBy: FormControl<GetFindingStatisticsPostBodyGroupBy | null | undefined>,

		/** The maximum number of items to include in each page of the response. */
		size: FormControl<number | null | undefined>,
	}
	export function CreateGetFindingStatisticsPostBodyFormGroup() {
		return new FormGroup<GetFindingStatisticsPostBodyFormProperties>({
			groupBy: new FormControl<GetFindingStatisticsPostBodyGroupBy | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetFindingStatisticsPostBodyFindingCriteria {

		/** Specifies a condition that defines a property, operator, and value to use to filter the results of a query for findings. */
		criterion?: Criterion;
	}
	export interface GetFindingStatisticsPostBodyFindingCriteriaFormProperties {
	}
	export function CreateGetFindingStatisticsPostBodyFindingCriteriaFormGroup() {
		return new FormGroup<GetFindingStatisticsPostBodyFindingCriteriaFormProperties>({
		});

	}

	export enum GetFindingStatisticsPostBodyGroupBy { resourcesAffected_s3Bucket_name = 0, type = 1, classificationDetails_jobId = 2, severity_description = 3 }

	export interface GetFindingStatisticsPostBodySortCriteria {

		/** The grouping to sort the results by. Valid values are: */
		attributeName?: FindingStatisticsSortAttributeName | null;
		orderBy?: OrderBy | null;
	}
	export interface GetFindingStatisticsPostBodySortCriteriaFormProperties {

		/** The grouping to sort the results by. Valid values are: */
		attributeName: FormControl<FindingStatisticsSortAttributeName | null | undefined>,
		orderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateGetFindingStatisticsPostBodySortCriteriaFormGroup() {
		return new FormGroup<GetFindingStatisticsPostBodySortCriteriaFormProperties>({
			attributeName: new FormControl<FindingStatisticsSortAttributeName | null | undefined>(undefined),
			orderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}

	export interface GetFindingsPostBody {

		/**
		 * An array of strings that lists the unique identifiers for the findings to retrieve information about.
		 * Required
		 */
		findingIds: Array<string>;

		/** Specifies criteria for sorting the results of a request for information about findings. */
		sortCriteria?: GetFindingsPostBodySortCriteria;
	}
	export interface GetFindingsPostBodyFormProperties {
	}
	export function CreateGetFindingsPostBodyFormGroup() {
		return new FormGroup<GetFindingsPostBodyFormProperties>({
		});

	}

	export interface GetFindingsPostBodySortCriteria {
		attributeName?: string | null;
		orderBy?: OrderBy | null;
	}
	export interface GetFindingsPostBodySortCriteriaFormProperties {
		attributeName: FormControl<string | null | undefined>,
		orderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateGetFindingsPostBodySortCriteriaFormGroup() {
		return new FormGroup<GetFindingsPostBodySortCriteriaFormProperties>({
			attributeName: new FormControl<string | null | undefined>(undefined),
			orderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}

	export interface GetUsageStatisticsPostBody {

		/** The criteria to use to filter the query results. */
		filterBy?: Array<UsageStatisticsFilter>;

		/** The maximum number of items to include in each page of the response. */
		maxResults?: number | null;

		/** The nextToken string that specifies which page of results to return in a paginated response. */
		nextToken?: string | null;

		/** Specifies criteria for sorting the results of a query for account quotas and usage data. */
		sortBy?: GetUsageStatisticsPostBodySortBy;
	}
	export interface GetUsageStatisticsPostBodyFormProperties {

		/** The maximum number of items to include in each page of the response. */
		maxResults: FormControl<number | null | undefined>,

		/** The nextToken string that specifies which page of results to return in a paginated response. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetUsageStatisticsPostBodyFormGroup() {
		return new FormGroup<GetUsageStatisticsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetUsageStatisticsPostBodySortBy {

		/** The field to use to sort the results of a query for account quotas and usage data. */
		key?: UsageStatisticsSortKey | null;
		orderBy?: OrderBy | null;
	}
	export interface GetUsageStatisticsPostBodySortByFormProperties {

		/** The field to use to sort the results of a query for account quotas and usage data. */
		key: FormControl<UsageStatisticsSortKey | null | undefined>,
		orderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateGetUsageStatisticsPostBodySortByFormGroup() {
		return new FormGroup<GetUsageStatisticsPostBodySortByFormProperties>({
			key: new FormControl<UsageStatisticsSortKey | null | undefined>(undefined),
			orderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}

	export interface ListClassificationJobsPostBody {

		/** Specifies criteria for filtering the results of a request for information about classification jobs. */
		filterCriteria?: ListClassificationJobsPostBodyFilterCriteria;

		/** The maximum number of items to include in each page of the response. */
		maxResults?: number | null;

		/** The nextToken string that specifies which page of results to return in a paginated response. */
		nextToken?: string | null;

		/** Specifies criteria for sorting the results of a request for information about classification jobs. */
		sortCriteria?: ListClassificationJobsPostBodySortCriteria;
	}
	export interface ListClassificationJobsPostBodyFormProperties {

		/** The maximum number of items to include in each page of the response. */
		maxResults: FormControl<number | null | undefined>,

		/** The nextToken string that specifies which page of results to return in a paginated response. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListClassificationJobsPostBodyFormGroup() {
		return new FormGroup<ListClassificationJobsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListClassificationJobsPostBodyFilterCriteria {
		excludes?: Array<ListJobsFilterTerm>;
		includes?: Array<ListJobsFilterTerm>;
	}
	export interface ListClassificationJobsPostBodyFilterCriteriaFormProperties {
	}
	export function CreateListClassificationJobsPostBodyFilterCriteriaFormGroup() {
		return new FormGroup<ListClassificationJobsPostBodyFilterCriteriaFormProperties>({
		});

	}

	export interface ListClassificationJobsPostBodySortCriteria {

		/** The property to sort the results by. Valid values are: */
		attributeName?: ListJobsSortAttributeName | null;
		orderBy?: OrderBy | null;
	}
	export interface ListClassificationJobsPostBodySortCriteriaFormProperties {

		/** The property to sort the results by. Valid values are: */
		attributeName: FormControl<ListJobsSortAttributeName | null | undefined>,
		orderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateListClassificationJobsPostBodySortCriteriaFormGroup() {
		return new FormGroup<ListClassificationJobsPostBodySortCriteriaFormProperties>({
			attributeName: new FormControl<ListJobsSortAttributeName | null | undefined>(undefined),
			orderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}

	export interface ListCustomDataIdentifiersPostBody {

		/** The maximum number of items to include in each page of the response. */
		maxResults?: number | null;

		/** The nextToken string that specifies which page of results to return in a paginated response. */
		nextToken?: string | null;
	}
	export interface ListCustomDataIdentifiersPostBodyFormProperties {

		/** The maximum number of items to include in each page of the response. */
		maxResults: FormControl<number | null | undefined>,

		/** The nextToken string that specifies which page of results to return in a paginated response. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomDataIdentifiersPostBodyFormGroup() {
		return new FormGroup<ListCustomDataIdentifiersPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFindingsPostBody {

		/** Specifies, as a map, one or more property-based conditions that filter the results of a query for findings. */
		findingCriteria?: ListFindingsPostBodyFindingCriteria;

		/** The maximum number of items to include in each page of the response. */
		maxResults?: number | null;

		/** The nextToken string that specifies which page of results to return in a paginated response. */
		nextToken?: string | null;

		/** Specifies criteria for sorting the results of a request for information about findings. */
		sortCriteria?: ListFindingsPostBodySortCriteria;
	}
	export interface ListFindingsPostBodyFormProperties {

		/** The maximum number of items to include in each page of the response. */
		maxResults: FormControl<number | null | undefined>,

		/** The nextToken string that specifies which page of results to return in a paginated response. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingsPostBodyFormGroup() {
		return new FormGroup<ListFindingsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFindingsPostBodyFindingCriteria {

		/** Specifies a condition that defines a property, operator, and value to use to filter the results of a query for findings. */
		criterion?: Criterion;
	}
	export interface ListFindingsPostBodyFindingCriteriaFormProperties {
	}
	export function CreateListFindingsPostBodyFindingCriteriaFormGroup() {
		return new FormGroup<ListFindingsPostBodyFindingCriteriaFormProperties>({
		});

	}

	export interface ListFindingsPostBodySortCriteria {
		attributeName?: string | null;
		orderBy?: OrderBy | null;
	}
	export interface ListFindingsPostBodySortCriteriaFormProperties {
		attributeName: FormControl<string | null | undefined>,
		orderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateListFindingsPostBodySortCriteriaFormGroup() {
		return new FormGroup<ListFindingsPostBodySortCriteriaFormProperties>({
			attributeName: new FormControl<string | null | undefined>(undefined),
			orderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TestCustomDataIdentifierPostBody {

		/** An array that lists specific character sequences (ignore words) to exclude from the results. If the text matched by the regular expression is the same as any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4 - 90 characters. */
		ignoreWords?: Array<string>;

		/** An array that lists specific character sequences (keywords), one of which must be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 4 - 90 characters. */
		keywords?: Array<string>;

		/** The maximum number of characters that can exist between text that matches the regex pattern and the character sequences specified by the keywords array. Macie includes or excludes a result based on the proximity of a keyword to text that matches the regex pattern. The distance can be 1 - 300 characters. The default value is 300. */
		maximumMatchDistance?: number | null;

		/**
		 * The regular expression (regex) that defines the pattern to match. The expression can contain as many as 500 characters.
		 * Required
		 */
		regex: string;

		/**
		 * The sample text to inspect by using the custom data identifier. The text can contain as many as 1,000 characters.
		 * Required
		 */
		sampleText: string;
	}
	export interface TestCustomDataIdentifierPostBodyFormProperties {

		/** The maximum number of characters that can exist between text that matches the regex pattern and the character sequences specified by the keywords array. Macie includes or excludes a result based on the proximity of a keyword to text that matches the regex pattern. The distance can be 1 - 300 characters. The default value is 300. */
		maximumMatchDistance: FormControl<number | null | undefined>,

		/**
		 * The regular expression (regex) that defines the pattern to match. The expression can contain as many as 500 characters.
		 * Required
		 */
		regex: FormControl<string | null | undefined>,

		/**
		 * The sample text to inspect by using the custom data identifier. The text can contain as many as 1,000 characters.
		 * Required
		 */
		sampleText: FormControl<string | null | undefined>,
	}
	export function CreateTestCustomDataIdentifierPostBodyFormGroup() {
		return new FormGroup<TestCustomDataIdentifierPostBodyFormProperties>({
			maximumMatchDistance: new FormControl<number | null | undefined>(undefined),
			regex: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sampleText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UnarchiveFindingsPostBody {

		/**
		 * An array of strings that lists the unique identifiers for the findings to reactivate.
		 * Required
		 */
		findingIds: Array<string>;
	}
	export interface UnarchiveFindingsPostBodyFormProperties {
	}
	export function CreateUnarchiveFindingsPostBodyFormGroup() {
		return new FormGroup<UnarchiveFindingsPostBodyFormProperties>({
		});

	}

	export interface UpdateMemberSessionPatchBody {

		/**
		 * The status of an Amazon Macie account. Valid values are:
		 * Required
		 */
		status: GetMacieSessionResponseStatus;
	}
	export interface UpdateMemberSessionPatchBodyFormProperties {

		/**
		 * The status of an Amazon Macie account. Valid values are:
		 * Required
		 */
		status: FormControl<GetMacieSessionResponseStatus | null | undefined>,
	}
	export function CreateUpdateMemberSessionPatchBodyFormGroup() {
		return new FormGroup<UpdateMemberSessionPatchBodyFormProperties>({
			status: new FormControl<GetMacieSessionResponseStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

}

