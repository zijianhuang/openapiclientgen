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
		arn?: string;
		createdAt?: Date;
		deleted?: boolean | null;
		description?: string;
		id?: string;
		name?: string;
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

	export interface CreateAllowListResponse {
		arn?: string;
		id?: string;
	}
	export interface CreateAllowListResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateCreateAllowListResponseFormGroup() {
		return new FormGroup<CreateAllowListResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about an S3 object that lists specific text to ignore. */
	export interface S3WordsList {

		/** Required */
		bucketName: string;

		/** Required */
		objectKey: string;
	}

	/** Provides information about an S3 object that lists specific text to ignore. */
	export interface S3WordsListFormProperties {

		/** Required */
		bucketName: FormControl<string | null | undefined>,

		/** Required */
		objectKey: FormControl<string | null | undefined>,
	}
	export function CreateS3WordsListFormGroup() {
		return new FormGroup<S3WordsListFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			objectKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateClassificationJobResponse {
		jobArn?: string;
		jobId?: string;
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


	/** Specifies property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job. Exclude conditions take precedence over include conditions. */
	export interface S3BucketCriteriaForJob {
		excludes?: CriteriaBlockForJob;
		includes?: CriteriaBlockForJob;
	}

	/** Specifies property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job. Exclude conditions take precedence over include conditions. */
	export interface S3BucketCriteriaForJobFormProperties {
	}
	export function CreateS3BucketCriteriaForJobFormGroup() {
		return new FormGroup<S3BucketCriteriaForJobFormProperties>({
		});

	}


	/** Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job. */
	export interface CriteriaBlockForJob {
		and?: Array<CriteriaForJob>;
	}

	/** Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job. */
	export interface CriteriaBlockForJobFormProperties {
	}
	export function CreateCriteriaBlockForJobFormGroup() {
		return new FormGroup<CriteriaBlockForJobFormProperties>({
		});

	}


	/** Specifies a property- or tag-based condition that defines criteria for including or excluding S3 buckets from a classification job. */
	export interface CriteriaForJob {
		simpleCriterion?: SimpleCriterionForJob;
		tagCriterion?: TagCriterionForJob;
	}

	/** Specifies a property- or tag-based condition that defines criteria for including or excluding S3 buckets from a classification job. */
	export interface CriteriaForJobFormProperties {
	}
	export function CreateCriteriaForJobFormGroup() {
		return new FormGroup<CriteriaForJobFormProperties>({
		});

	}


	/** Specifies a property-based condition that determines whether an S3 bucket is included or excluded from a classification job. */
	export interface SimpleCriterionForJob {
		comparator?: JobComparator;
		key?: SimpleCriterionKeyForJob;
		values?: Array<string>;
	}

	/** Specifies a property-based condition that determines whether an S3 bucket is included or excluded from a classification job. */
	export interface SimpleCriterionForJobFormProperties {
		comparator: FormControl<JobComparator | null | undefined>,
		key: FormControl<SimpleCriterionKeyForJob | null | undefined>,
	}
	export function CreateSimpleCriterionForJobFormGroup() {
		return new FormGroup<SimpleCriterionForJobFormProperties>({
			comparator: new FormControl<JobComparator | null | undefined>(undefined),
			key: new FormControl<SimpleCriterionKeyForJob | null | undefined>(undefined),
		});

	}


	/** The operator to use in a condition. Depending on the type of condition, possible values are: */
	export enum JobComparator { EQ = 0, GT = 1, GTE = 2, LT = 3, LTE = 4, NE = 5, CONTAINS = 6, STARTS_WITH = 7 }


	/** The property to use in a condition that determines whether an S3 bucket is included or excluded from a classification job. Valid values are: */
	export enum SimpleCriterionKeyForJob { ACCOUNT_ID = 0, S3_BUCKET_NAME = 1, S3_BUCKET_EFFECTIVE_PERMISSION = 2, S3_BUCKET_SHARED_ACCESS = 3 }


	/** Specifies a tag-based condition that determines whether an S3 bucket is included or excluded from a classification job. */
	export interface TagCriterionForJob {
		comparator?: JobComparator;
		tagValues?: Array<TagCriterionPairForJob>;
	}

	/** Specifies a tag-based condition that determines whether an S3 bucket is included or excluded from a classification job. */
	export interface TagCriterionForJobFormProperties {
		comparator: FormControl<JobComparator | null | undefined>,
	}
	export function CreateTagCriterionForJobFormGroup() {
		return new FormGroup<TagCriterionForJobFormProperties>({
			comparator: new FormControl<JobComparator | null | undefined>(undefined),
		});

	}


	/**  <p>Specifies a tag key, a tag value, or a tag key and value (as a pair) to use in a tag-based condition that determines whether an S3 bucket is included or excluded from a classification job. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based conditions.</p> */
	export interface TagCriterionPairForJob {
		key?: string;
		value?: string;
	}

	/**  <p>Specifies a tag key, a tag value, or a tag key and value (as a pair) to use in a tag-based condition that determines whether an S3 bucket is included or excluded from a classification job. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based conditions.</p> */
	export interface TagCriterionPairForJobFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagCriterionPairForJobFormGroup() {
		return new FormGroup<TagCriterionPairForJobFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies an Amazon Web Services account that owns S3 buckets for a classification job to analyze, and one or more specific buckets to analyze for that account. */
	export interface S3BucketDefinitionForJob {

		/** Required */
		accountId: string;

		/** Required */
		buckets: Array<string>;
	}

	/** Specifies an Amazon Web Services account that owns S3 buckets for a classification job to analyze, and one or more specific buckets to analyze for that account. */
	export interface S3BucketDefinitionForJobFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateS3BucketDefinitionForJobFormGroup() {
		return new FormGroup<S3BucketDefinitionForJobFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job. Exclude conditions take precedence over include conditions. */
	export interface Scoping {
		excludes?: JobScopingBlock;
		includes?: JobScopingBlock;
	}

	/** Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job. Exclude conditions take precedence over include conditions. */
	export interface ScopingFormProperties {
	}
	export function CreateScopingFormGroup() {
		return new FormGroup<ScopingFormProperties>({
		});

	}


	/** Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job. */
	export interface JobScopingBlock {
		and?: Array<JobScopeTerm>;
	}

	/** Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job. */
	export interface JobScopingBlockFormProperties {
	}
	export function CreateJobScopingBlockFormGroup() {
		return new FormGroup<JobScopingBlockFormProperties>({
		});

	}


	/** Specifies a property- or tag-based condition that defines criteria for including or excluding S3 objects from a classification job. A JobScopeTerm object can contain only one simpleScopeTerm object or one tagScopeTerm object. */
	export interface JobScopeTerm {
		simpleScopeTerm?: SimpleScopeTerm;
		tagScopeTerm?: TagScopeTerm;
	}

	/** Specifies a property- or tag-based condition that defines criteria for including or excluding S3 objects from a classification job. A JobScopeTerm object can contain only one simpleScopeTerm object or one tagScopeTerm object. */
	export interface JobScopeTermFormProperties {
	}
	export function CreateJobScopeTermFormGroup() {
		return new FormGroup<JobScopeTermFormProperties>({
		});

	}


	/** Specifies a property-based condition that determines whether an S3 object is included or excluded from a classification job. */
	export interface SimpleScopeTerm {
		comparator?: JobComparator;
		key?: ScopeFilterKey;
		values?: Array<string>;
	}

	/** Specifies a property-based condition that determines whether an S3 object is included or excluded from a classification job. */
	export interface SimpleScopeTermFormProperties {
		comparator: FormControl<JobComparator | null | undefined>,
		key: FormControl<ScopeFilterKey | null | undefined>,
	}
	export function CreateSimpleScopeTermFormGroup() {
		return new FormGroup<SimpleScopeTermFormProperties>({
			comparator: new FormControl<JobComparator | null | undefined>(undefined),
			key: new FormControl<ScopeFilterKey | null | undefined>(undefined),
		});

	}


	/** The property to use in a condition that determines whether an S3 object is included or excluded from a classification job. Valid values are: */
	export enum ScopeFilterKey { OBJECT_EXTENSION = 0, OBJECT_LAST_MODIFIED_DATE = 1, OBJECT_SIZE = 2, OBJECT_KEY = 3 }


	/** Specifies a tag-based condition that determines whether an S3 object is included or excluded from a classification job. */
	export interface TagScopeTerm {
		comparator?: JobComparator;
		key?: string;
		tagValues?: Array<TagValuePair>;
		target?: TagTarget;
	}

	/** Specifies a tag-based condition that determines whether an S3 object is included or excluded from a classification job. */
	export interface TagScopeTermFormProperties {
		comparator: FormControl<JobComparator | null | undefined>,
		key: FormControl<string | null | undefined>,
		target: FormControl<TagTarget | null | undefined>,
	}
	export function CreateTagScopeTermFormGroup() {
		return new FormGroup<TagScopeTermFormProperties>({
			comparator: new FormControl<JobComparator | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<TagTarget | null | undefined>(undefined),
		});

	}


	/** Specifies a tag key or tag key and value pair to use in a tag-based condition that determines whether an S3 object is included or excluded from a classification job. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based conditions. */
	export interface TagValuePair {
		key?: string;
		value?: string;
	}

	/** Specifies a tag key or tag key and value pair to use in a tag-based condition that determines whether an S3 object is included or excluded from a classification job. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based conditions. */
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


	/** The type of object to apply a tag-based condition to. Valid values are: */
	export enum TagTarget { S3_OBJECT = 0 }


	/** Specifies that a classification job runs once a day, every day. This is an empty object. */
	export interface DailySchedule {
	}

	/** Specifies that a classification job runs once a day, every day. This is an empty object. */
	export interface DailyScheduleFormProperties {
	}
	export function CreateDailyScheduleFormGroup() {
		return new FormGroup<DailyScheduleFormProperties>({
		});

	}


	/** Specifies a monthly recurrence pattern for running a classification job. */
	export interface MonthlySchedule {
		dayOfMonth?: number | null;
	}

	/** Specifies a monthly recurrence pattern for running a classification job. */
	export interface MonthlyScheduleFormProperties {
		dayOfMonth: FormControl<number | null | undefined>,
	}
	export function CreateMonthlyScheduleFormGroup() {
		return new FormGroup<MonthlyScheduleFormProperties>({
			dayOfMonth: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies a weekly recurrence pattern for running a classification job. */
	export interface WeeklySchedule {
		dayOfWeek?: DayOfWeek;
	}

	/** Specifies a weekly recurrence pattern for running a classification job. */
	export interface WeeklyScheduleFormProperties {
		dayOfWeek: FormControl<DayOfWeek | null | undefined>,
	}
	export function CreateWeeklyScheduleFormGroup() {
		return new FormGroup<WeeklyScheduleFormProperties>({
			dayOfWeek: new FormControl<DayOfWeek | null | undefined>(undefined),
		});

	}

	export enum DayOfWeek { SUNDAY = 0, MONDAY = 1, TUESDAY = 2, WEDNESDAY = 3, THURSDAY = 4, FRIDAY = 5, SATURDAY = 6 }

	export interface CreateCustomDataIdentifierResponse {
		customDataIdentifierId?: string;
	}
	export interface CreateCustomDataIdentifierResponseFormProperties {
		customDataIdentifierId: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomDataIdentifierResponseFormGroup() {
		return new FormGroup<CreateCustomDataIdentifierResponseFormProperties>({
			customDataIdentifierId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a severity level for findings that a custom data identifier produces. A severity level determines which severity is assigned to the findings, based on the number of occurrences of text that match the custom data identifier's detection criteria. */
	export interface SeverityLevel {

		/** Required */
		occurrencesThreshold: number;

		/** Required */
		severity: DataIdentifierSeverity;
	}

	/** Specifies a severity level for findings that a custom data identifier produces. A severity level determines which severity is assigned to the findings, based on the number of occurrences of text that match the custom data identifier's detection criteria. */
	export interface SeverityLevelFormProperties {

		/** Required */
		occurrencesThreshold: FormControl<number | null | undefined>,

		/** Required */
		severity: FormControl<DataIdentifierSeverity | null | undefined>,
	}
	export function CreateSeverityLevelFormGroup() {
		return new FormGroup<SeverityLevelFormProperties>({
			occurrencesThreshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			severity: new FormControl<DataIdentifierSeverity | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The severity of a finding, ranging from LOW, for least severe, to HIGH, for most severe. Valid values are: */
	export enum DataIdentifierSeverity { LOW = 0, MEDIUM = 1, HIGH = 2 }

	export interface CreateFindingsFilterResponse {
		arn?: string;
		id?: string;
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


	/** Specifies a condition that defines a property, operator, and one or more values to filter the results of a query for findings. The number of values depends on the property and operator specified by the condition. For information about defining filter conditions, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-filter-basics.html">Fundamentals of filtering findings</a> in the <i>Amazon Macie User Guide</i>. */
	export interface Criterion {
	}

	/** Specifies a condition that defines a property, operator, and one or more values to filter the results of a query for findings. The number of values depends on the property and operator specified by the condition. For information about defining filter conditions, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-filter-basics.html">Fundamentals of filtering findings</a> in the <i>Amazon Macie User Guide</i>. */
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
		accountId?: string;
		errorCode?: ErrorCode;
		errorMessage?: string;
	}

	/**  <p>Provides information about an account-related request that hasn't been processed.</p> */
	export interface UnprocessedAccountFormProperties {
		accountId: FormControl<string | null | undefined>,
		errorCode: FormControl<ErrorCode | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateUnprocessedAccountFormGroup() {
		return new FormGroup<UnprocessedAccountFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<ErrorCode | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The source of an issue or delay. Possible values are: */
	export enum ErrorCode { ClientError = 0, InternalError = 1 }

	export interface CreateMemberResponse {
		arn?: string;
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


	/** The type of finding. For details about each type, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-types.html">Types of Amazon Macie findings</a> in the <i>Amazon Macie User Guide</i>. Possible values are: */
	export enum FindingType { 'SensitiveData:S3Object/Multiple' = 0, 'SensitiveData:S3Object/Financial' = 1, 'SensitiveData:S3Object/Personal' = 2, 'SensitiveData:S3Object/Credentials' = 3, 'SensitiveData:S3Object/CustomIdentifier' = 4, 'Policy:IAMUser/S3BucketPublic' = 5, 'Policy:IAMUser/S3BucketSharedExternally' = 6, 'Policy:IAMUser/S3BucketReplicatedExternally' = 7, 'Policy:IAMUser/S3BucketEncryptionDisabled' = 8, 'Policy:IAMUser/S3BlockPublicAccessDisabled' = 9, 'Policy:IAMUser/S3BucketSharedWithCloudFront' = 10 }

	export interface DeclineInvitationsResponse {
		unprocessedAccounts?: Array<UnprocessedAccount>;
	}
	export interface DeclineInvitationsResponseFormProperties {
	}
	export function CreateDeclineInvitationsResponseFormGroup() {
		return new FormGroup<DeclineInvitationsResponseFormProperties>({
		});

	}

	export interface DeleteAllowListResponse {
	}
	export interface DeleteAllowListResponseFormProperties {
	}
	export function CreateDeleteAllowListResponseFormGroup() {
		return new FormGroup<DeleteAllowListResponseFormProperties>({
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
		nextToken?: string;
	}
	export interface DescribeBucketsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBucketsResponseFormGroup() {
		return new FormGroup<DescribeBucketsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes for your account. By default, object count and storage size values include data for object parts that are the result of incomplete multipart uploads. For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/monitoring-s3-how-it-works.html">How Macie monitors Amazon S3 data security</a> in the <i>Amazon Macie User Guide</i>.</p> <p>If an error occurs when Macie attempts to retrieve and process metadata from Amazon S3 for the bucket or the bucket's objects, the value for the versioning property is false and the value for most other properties is null. Key exceptions are accountId, bucketArn, bucketCreatedAt, bucketName, lastUpdated, and region. To identify the cause of the error, refer to the errorCode and errorMessage values.</p> */
	export interface BucketMetadata {
		accountId?: string;
		allowsUnencryptedObjectUploads?: AllowsUnencryptedObjectUploads;
		bucketArn?: string;
		bucketCreatedAt?: Date;
		bucketName?: string;
		classifiableObjectCount?: number | null;
		classifiableSizeInBytes?: number | null;
		errorCode?: BucketMetadataErrorCode;
		errorMessage?: string;
		jobDetails?: JobDetails;
		lastAutomatedDiscoveryTime?: Date;
		lastUpdated?: Date;
		objectCount?: number | null;
		objectCountByEncryptionType?: ObjectCountByEncryptionType;
		publicAccess?: BucketPublicAccess;
		region?: string;
		replicationDetails?: ReplicationDetails;
		sensitivityScore?: number | null;
		serverSideEncryption?: BucketServerSideEncryption;
		sharedAccess?: SharedAccess;
		sizeInBytes?: number | null;
		sizeInBytesCompressed?: number | null;
		tags?: Array<KeyValuePair>;
		unclassifiableObjectCount?: ObjectLevelStatistics;
		unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
		versioning?: boolean | null;
	}

	/** <p>Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes for your account. By default, object count and storage size values include data for object parts that are the result of incomplete multipart uploads. For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/monitoring-s3-how-it-works.html">How Macie monitors Amazon S3 data security</a> in the <i>Amazon Macie User Guide</i>.</p> <p>If an error occurs when Macie attempts to retrieve and process metadata from Amazon S3 for the bucket or the bucket's objects, the value for the versioning property is false and the value for most other properties is null. Key exceptions are accountId, bucketArn, bucketCreatedAt, bucketName, lastUpdated, and region. To identify the cause of the error, refer to the errorCode and errorMessage values.</p> */
	export interface BucketMetadataFormProperties {
		accountId: FormControl<string | null | undefined>,
		allowsUnencryptedObjectUploads: FormControl<AllowsUnencryptedObjectUploads | null | undefined>,
		bucketArn: FormControl<string | null | undefined>,
		bucketCreatedAt: FormControl<Date | null | undefined>,
		bucketName: FormControl<string | null | undefined>,
		classifiableObjectCount: FormControl<number | null | undefined>,
		classifiableSizeInBytes: FormControl<number | null | undefined>,
		errorCode: FormControl<BucketMetadataErrorCode | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
		lastAutomatedDiscoveryTime: FormControl<Date | null | undefined>,
		lastUpdated: FormControl<Date | null | undefined>,
		objectCount: FormControl<number | null | undefined>,
		region: FormControl<string | null | undefined>,
		sensitivityScore: FormControl<number | null | undefined>,
		sharedAccess: FormControl<SharedAccess | null | undefined>,
		sizeInBytes: FormControl<number | null | undefined>,
		sizeInBytesCompressed: FormControl<number | null | undefined>,
		versioning: FormControl<boolean | null | undefined>,
	}
	export function CreateBucketMetadataFormGroup() {
		return new FormGroup<BucketMetadataFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			allowsUnencryptedObjectUploads: new FormControl<AllowsUnencryptedObjectUploads | null | undefined>(undefined),
			bucketArn: new FormControl<string | null | undefined>(undefined),
			bucketCreatedAt: new FormControl<Date | null | undefined>(undefined),
			bucketName: new FormControl<string | null | undefined>(undefined),
			classifiableObjectCount: new FormControl<number | null | undefined>(undefined),
			classifiableSizeInBytes: new FormControl<number | null | undefined>(undefined),
			errorCode: new FormControl<BucketMetadataErrorCode | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			lastAutomatedDiscoveryTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			objectCount: new FormControl<number | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			sensitivityScore: new FormControl<number | null | undefined>(undefined),
			sharedAccess: new FormControl<SharedAccess | null | undefined>(undefined),
			sizeInBytes: new FormControl<number | null | undefined>(undefined),
			sizeInBytesCompressed: new FormControl<number | null | undefined>(undefined),
			versioning: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum AllowsUnencryptedObjectUploads { TRUE = 0, FALSE = 1, UNKNOWN = 2 }


	/** The error code for an error that prevented Amazon Macie from retrieving and processing metadata from Amazon S3 for an S3 bucket and the bucket's objects. */
	export enum BucketMetadataErrorCode { ACCESS_DENIED = 0 }


	/** Specifies whether any one-time or recurring classification jobs are configured to analyze data in an S3 bucket, and, if so, the details of the job that ran most recently. */
	export interface JobDetails {
		isDefinedInJob?: AllowsUnencryptedObjectUploads;
		isMonitoredByJob?: AllowsUnencryptedObjectUploads;
		lastJobId?: string;
		lastJobRunTime?: Date;
	}

	/** Specifies whether any one-time or recurring classification jobs are configured to analyze data in an S3 bucket, and, if so, the details of the job that ran most recently. */
	export interface JobDetailsFormProperties {
		isDefinedInJob: FormControl<AllowsUnencryptedObjectUploads | null | undefined>,
		isMonitoredByJob: FormControl<AllowsUnencryptedObjectUploads | null | undefined>,
		lastJobId: FormControl<string | null | undefined>,
		lastJobRunTime: FormControl<Date | null | undefined>,
	}
	export function CreateJobDetailsFormGroup() {
		return new FormGroup<JobDetailsFormProperties>({
			isDefinedInJob: new FormControl<AllowsUnencryptedObjectUploads | null | undefined>(undefined),
			isMonitoredByJob: new FormControl<AllowsUnencryptedObjectUploads | null | undefined>(undefined),
			lastJobId: new FormControl<string | null | undefined>(undefined),
			lastJobRunTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Provides information about the number of objects that are in an S3 bucket and use certain types of server-side encryption, use client-side encryption, or aren't encrypted. */
	export interface ObjectCountByEncryptionType {
		customerManaged?: number | null;
		kmsManaged?: number | null;
		s3Managed?: number | null;
		unencrypted?: number | null;
		unknown?: number | null;
	}

	/** Provides information about the number of objects that are in an S3 bucket and use certain types of server-side encryption, use client-side encryption, or aren't encrypted. */
	export interface ObjectCountByEncryptionTypeFormProperties {
		customerManaged: FormControl<number | null | undefined>,
		kmsManaged: FormControl<number | null | undefined>,
		s3Managed: FormControl<number | null | undefined>,
		unencrypted: FormControl<number | null | undefined>,
		unknown: FormControl<number | null | undefined>,
	}
	export function CreateObjectCountByEncryptionTypeFormGroup() {
		return new FormGroup<ObjectCountByEncryptionTypeFormProperties>({
			customerManaged: new FormControl<number | null | undefined>(undefined),
			kmsManaged: new FormControl<number | null | undefined>(undefined),
			s3Managed: new FormControl<number | null | undefined>(undefined),
			unencrypted: new FormControl<number | null | undefined>(undefined),
			unknown: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information about the permissions settings that determine whether an S3 bucket is publicly accessible. */
	export interface BucketPublicAccess {
		effectivePermission?: EffectivePermission;
		permissionConfiguration?: BucketPermissionConfiguration;
	}

	/** Provides information about the permissions settings that determine whether an S3 bucket is publicly accessible. */
	export interface BucketPublicAccessFormProperties {
		effectivePermission: FormControl<EffectivePermission | null | undefined>,
	}
	export function CreateBucketPublicAccessFormGroup() {
		return new FormGroup<BucketPublicAccessFormProperties>({
			effectivePermission: new FormControl<EffectivePermission | null | undefined>(undefined),
		});

	}

	export enum EffectivePermission { PUBLIC = 0, NOT_PUBLIC = 1, UNKNOWN = 2 }


	/** Provides information about the account-level and bucket-level permissions settings for an S3 bucket. */
	export interface BucketPermissionConfiguration {
		accountLevelPermissions?: AccountLevelPermissions;
		bucketLevelPermissions?: BucketLevelPermissions;
	}

	/** Provides information about the account-level and bucket-level permissions settings for an S3 bucket. */
	export interface BucketPermissionConfigurationFormProperties {
	}
	export function CreateBucketPermissionConfigurationFormGroup() {
		return new FormGroup<BucketPermissionConfigurationFormProperties>({
		});

	}


	/** Provides information about the account-level permissions settings that apply to an S3 bucket. */
	export interface AccountLevelPermissions {
		blockPublicAccess?: BlockPublicAccess;
	}

	/** Provides information about the account-level permissions settings that apply to an S3 bucket. */
	export interface AccountLevelPermissionsFormProperties {
	}
	export function CreateAccountLevelPermissionsFormGroup() {
		return new FormGroup<AccountLevelPermissionsFormProperties>({
		});

	}


	/** Provides information about the block public access settings for an S3 bucket. These settings can apply to a bucket at the account or bucket level. For detailed information about each setting, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html">Blocking public access to your Amazon S3 storage</a> in the <i>Amazon Simple Storage Service User Guide</i>. */
	export interface BlockPublicAccess {
		blockPublicAcls?: boolean | null;
		blockPublicPolicy?: boolean | null;
		ignorePublicAcls?: boolean | null;
		restrictPublicBuckets?: boolean | null;
	}

	/** Provides information about the block public access settings for an S3 bucket. These settings can apply to a bucket at the account or bucket level. For detailed information about each setting, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html">Blocking public access to your Amazon S3 storage</a> in the <i>Amazon Simple Storage Service User Guide</i>. */
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


	/** Provides information about the bucket-level permissions settings for an S3 bucket. */
	export interface BucketLevelPermissions {
		accessControlList?: AccessControlList;
		blockPublicAccess?: BlockPublicAccess;
		bucketPolicy?: BucketPolicy;
	}

	/** Provides information about the bucket-level permissions settings for an S3 bucket. */
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


	/** Provides information about the permissions settings of the bucket policy for an S3 bucket. */
	export interface BucketPolicy {
		allowsPublicReadAccess?: boolean | null;
		allowsPublicWriteAccess?: boolean | null;
	}

	/** Provides information about the permissions settings of the bucket policy for an S3 bucket. */
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


	/** Provides information about settings that define whether one or more objects in an S3 bucket are replicated to S3 buckets for other Amazon Web Services accounts and, if so, which accounts. */
	export interface ReplicationDetails {
		replicated?: boolean | null;
		replicatedExternally?: boolean | null;
		replicationAccounts?: Array<string>;
	}

	/** Provides information about settings that define whether one or more objects in an S3 bucket are replicated to S3 buckets for other Amazon Web Services accounts and, if so, which accounts. */
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


	/** Provides information about the default server-side encryption settings for an S3 bucket. For detailed information about these settings, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html">Setting default server-side encryption behavior for Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>. */
	export interface BucketServerSideEncryption {
		kmsMasterKeyId?: string;
		type?: Type;
	}

	/** Provides information about the default server-side encryption settings for an S3 bucket. For detailed information about these settings, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html">Setting default server-side encryption behavior for Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>. */
	export interface BucketServerSideEncryptionFormProperties {
		kmsMasterKeyId: FormControl<string | null | undefined>,
		type: FormControl<Type | null | undefined>,
	}
	export function CreateBucketServerSideEncryptionFormGroup() {
		return new FormGroup<BucketServerSideEncryptionFormProperties>({
			kmsMasterKeyId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<Type | null | undefined>(undefined),
		});

	}

	export enum Type { NONE = 0, AES256 = 1, 'aws:kms' = 2 }

	export enum SharedAccess { EXTERNAL = 0, INTERNAL = 1, NOT_SHARED = 2, UNKNOWN = 3 }


	/** Provides information about the tags that are associated with an S3 bucket or object. Each tag consists of a required tag key and an associated tag value. */
	export interface KeyValuePair {
		key?: string;
		value?: string;
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


	/** Provides information about the total storage size (in bytes) or number of objects that Amazon Macie can't analyze in one or more S3 buckets. In a BucketMetadata or MatchingBucket object, this data is for a specific bucket. In a GetBucketStatisticsResponse object, this data is aggregated for all the buckets in the query results. If versioning is enabled for a bucket, storage size values are based on the size of the latest version of each applicable object in the bucket. */
	export interface ObjectLevelStatistics {
		fileType?: number | null;
		storageClass?: number | null;
		total?: number | null;
	}

	/** Provides information about the total storage size (in bytes) or number of objects that Amazon Macie can't analyze in one or more S3 buckets. In a BucketMetadata or MatchingBucket object, this data is for a specific bucket. In a GetBucketStatisticsResponse object, this data is aggregated for all the buckets in the query results. If versioning is enabled for a bucket, storage size values are based on the size of the latest version of each applicable object in the bucket. */
	export interface ObjectLevelStatisticsFormProperties {
		fileType: FormControl<number | null | undefined>,
		storageClass: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
	}
	export function CreateObjectLevelStatisticsFormGroup() {
		return new FormGroup<ObjectLevelStatisticsFormProperties>({
			fileType: new FormControl<number | null | undefined>(undefined),
			storageClass: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the operator to use in a property-based condition that filters the results of a query for information about S3 buckets. */
	export interface BucketCriteriaAdditionalProperties {
		eq?: Array<string>;
		gt?: number | null;
		gte?: number | null;
		lt?: number | null;
		lte?: number | null;
		neq?: Array<string>;
		prefix?: string;
	}

	/** Specifies the operator to use in a property-based condition that filters the results of a query for information about S3 buckets. */
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
		allowListIds?: Array<string>;
		clientToken?: string;
		createdAt?: Date;
		customDataIdentifierIds?: Array<string>;
		description?: string;
		initialRun?: boolean | null;
		jobArn?: string;
		jobId?: string;
		jobStatus?: JobStatus;
		jobType?: JobType;
		lastRunErrorStatus?: LastRunErrorStatus;
		lastRunTime?: Date;
		managedDataIdentifierIds?: Array<string>;
		managedDataIdentifierSelector?: ManagedDataIdentifierSelector;
		name?: string;
		s3JobDefinition?: S3JobDefinition;
		samplingPercentage?: number | null;
		scheduleFrequency?: JobScheduleFrequency;
		statistics?: Statistics;
		tags?: TagMap;
		userPausedDetails?: UserPausedDetails;
	}
	export interface DescribeClassificationJobResponseFormProperties {
		clientToken: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		initialRun: FormControl<boolean | null | undefined>,
		jobArn: FormControl<string | null | undefined>,
		jobId: FormControl<string | null | undefined>,
		jobStatus: FormControl<JobStatus | null | undefined>,
		jobType: FormControl<JobType | null | undefined>,
		lastRunTime: FormControl<Date | null | undefined>,
		managedDataIdentifierSelector: FormControl<ManagedDataIdentifierSelector | null | undefined>,
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
			jobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			jobType: new FormControl<JobType | null | undefined>(undefined),
			lastRunTime: new FormControl<Date | null | undefined>(undefined),
			managedDataIdentifierSelector: new FormControl<ManagedDataIdentifierSelector | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			samplingPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The status of a classification job. Possible values are: */
	export enum JobStatus { RUNNING = 0, PAUSED = 1, CANCELLED = 2, COMPLETE = 3, IDLE = 4, USER_PAUSED = 5 }


	/** The schedule for running a classification job. Valid values are: */
	export enum JobType { ONE_TIME = 0, SCHEDULED = 1 }


	/** Specifies whether any account- or bucket-level access errors occurred when a classification job ran. For information about using logging data to investigate these errors, see <a href="https://docs.aws.amazon.com/macie/latest/user/discovery-jobs-monitor-cw-logs.html">Monitoring sensitive data discovery jobs</a> in the <i>Amazon Macie User Guide</i>. */
	export interface LastRunErrorStatus {
		code?: LastRunErrorStatusCode;
	}

	/** Specifies whether any account- or bucket-level access errors occurred when a classification job ran. For information about using logging data to investigate these errors, see <a href="https://docs.aws.amazon.com/macie/latest/user/discovery-jobs-monitor-cw-logs.html">Monitoring sensitive data discovery jobs</a> in the <i>Amazon Macie User Guide</i>. */
	export interface LastRunErrorStatusFormProperties {
		code: FormControl<LastRunErrorStatusCode | null | undefined>,
	}
	export function CreateLastRunErrorStatusFormGroup() {
		return new FormGroup<LastRunErrorStatusFormProperties>({
			code: new FormControl<LastRunErrorStatusCode | null | undefined>(undefined),
		});

	}


	/** Specifies whether any account- or bucket-level access errors occurred during the run of a one-time classification job or the most recent run of a recurring classification job. Possible values are: */
	export enum LastRunErrorStatusCode { NONE = 0, ERROR = 1 }


	/** The selection type that determines which managed data identifiers a classification job uses to analyze data. Valid values are: */
	export enum ManagedDataIdentifierSelector { ALL = 0, EXCLUDE = 1, INCLUDE = 2, NONE = 3, RECOMMENDED = 4 }


	/** Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run. */
	export interface S3JobDefinition {
		bucketCriteria?: S3BucketCriteriaForJob;
		bucketDefinitions?: Array<S3BucketDefinitionForJob>;
		scoping?: Scoping;
	}

	/** Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run. */
	export interface S3JobDefinitionFormProperties {
	}
	export function CreateS3JobDefinitionFormGroup() {
		return new FormGroup<S3JobDefinitionFormProperties>({
		});

	}


	/** Specifies the recurrence pattern for running a classification job. */
	export interface JobScheduleFrequency {
		dailySchedule?: DailySchedule;
		monthlySchedule?: MonthlySchedule;
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


	/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource. */
	export interface TagMap {
	}

	/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource. */
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}


	/** Provides information about when a classification job was paused. For a one-time job, this object also specifies when the job will expire and be cancelled if it isn't resumed. For a recurring job, this object also specifies when the paused job run will expire and be cancelled if it isn't resumed. This object is present only if a job's current status (jobStatus) is USER_PAUSED. The information in this object applies only to a job that was paused while it had a status of RUNNING. */
	export interface UserPausedDetails {
		jobExpiresAt?: Date;
		jobImminentExpirationHealthEventArn?: string;
		jobPausedAt?: Date;
	}

	/** Provides information about when a classification job was paused. For a one-time job, this object also specifies when the job will expire and be cancelled if it isn't resumed. For a recurring job, this object also specifies when the paused job run will expire and be cancelled if it isn't resumed. This object is present only if a job's current status (jobStatus) is USER_PAUSED. The information in this object applies only to a job that was paused while it had a status of RUNNING. */
	export interface UserPausedDetailsFormProperties {
		jobExpiresAt: FormControl<Date | null | undefined>,
		jobImminentExpirationHealthEventArn: FormControl<string | null | undefined>,
		jobPausedAt: FormControl<Date | null | undefined>,
	}
	export function CreateUserPausedDetailsFormGroup() {
		return new FormGroup<UserPausedDetailsFormProperties>({
			jobExpiresAt: new FormControl<Date | null | undefined>(undefined),
			jobImminentExpirationHealthEventArn: new FormControl<string | null | undefined>(undefined),
			jobPausedAt: new FormControl<Date | null | undefined>(undefined),
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

	export interface DisassociateFromAdministratorAccountResponse {
	}
	export interface DisassociateFromAdministratorAccountResponseFormProperties {
	}
	export function CreateDisassociateFromAdministratorAccountResponseFormGroup() {
		return new FormGroup<DisassociateFromAdministratorAccountResponseFormProperties>({
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

	export interface GetAdministratorAccountResponse {
		administrator?: Invitation;
	}
	export interface GetAdministratorAccountResponseFormProperties {
	}
	export function CreateGetAdministratorAccountResponseFormGroup() {
		return new FormGroup<GetAdministratorAccountResponseFormProperties>({
		});

	}


	/** Provides information about an Amazon Macie membership invitation. */
	export interface Invitation {
		accountId?: string;
		invitationId?: string;
		invitedAt?: Date;
		relationshipStatus?: RelationshipStatus;
	}

	/** Provides information about an Amazon Macie membership invitation. */
	export interface InvitationFormProperties {
		accountId: FormControl<string | null | undefined>,
		invitationId: FormControl<string | null | undefined>,
		invitedAt: FormControl<Date | null | undefined>,
		relationshipStatus: FormControl<RelationshipStatus | null | undefined>,
	}
	export function CreateInvitationFormGroup() {
		return new FormGroup<InvitationFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			invitationId: new FormControl<string | null | undefined>(undefined),
			invitedAt: new FormControl<Date | null | undefined>(undefined),
			relationshipStatus: new FormControl<RelationshipStatus | null | undefined>(undefined),
		});

	}


	/** The current status of the relationship between an account and an associated Amazon Macie administrator account. Possible values are: */
	export enum RelationshipStatus { Enabled = 0, Paused = 1, Invited = 2, Created = 3, Removed = 4, Resigned = 5, EmailVerificationInProgress = 6, EmailVerificationFailed = 7, RegionDisabled = 8, AccountSuspended = 9 }

	export interface GetAllowListResponse {
		arn?: string;
		createdAt?: Date;
		criteria?: AllowListCriteria;
		description?: string;
		id?: string;
		name?: string;
		status?: AllowListStatus;
		tags?: TagMap;
		updatedAt?: Date;
	}
	export interface GetAllowListResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetAllowListResponseFormGroup() {
		return new FormGroup<GetAllowListResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Specifies the criteria for an allow list. The criteria must specify a regular expression (regex) or an S3 object (s3WordsList). It can't specify both. */
	export interface AllowListCriteria {
		regex?: string;
		s3WordsList?: S3WordsList;
	}

	/** Specifies the criteria for an allow list. The criteria must specify a regular expression (regex) or an S3 object (s3WordsList). It can't specify both. */
	export interface AllowListCriteriaFormProperties {
		regex: FormControl<string | null | undefined>,
	}
	export function CreateAllowListCriteriaFormGroup() {
		return new FormGroup<AllowListCriteriaFormProperties>({
			regex: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the current status of an allow list, which indicates whether Amazon Macie can access and use the list's criteria. */
	export interface AllowListStatus {

		/** Required */
		code: AllowListStatusCode;
		description?: string;
	}

	/** Provides information about the current status of an allow list, which indicates whether Amazon Macie can access and use the list's criteria. */
	export interface AllowListStatusFormProperties {

		/** Required */
		code: FormControl<AllowListStatusCode | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateAllowListStatusFormGroup() {
		return new FormGroup<AllowListStatusFormProperties>({
			code: new FormControl<AllowListStatusCode | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates the current status of an allow list. Depending on the type of criteria that the list specifies, possible values are: */
	export enum AllowListStatusCode { OK = 0, S3_OBJECT_NOT_FOUND = 1, S3_USER_ACCESS_DENIED = 2, S3_OBJECT_ACCESS_DENIED = 3, S3_THROTTLED = 4, S3_OBJECT_OVERSIZE = 5, S3_OBJECT_EMPTY = 6, UNKNOWN_ERROR = 7 }

	export interface GetAutomatedDiscoveryConfigurationResponse {
		classificationScopeId?: string;
		disabledAt?: Date;
		firstEnabledAt?: Date;
		lastUpdatedAt?: Date;
		sensitivityInspectionTemplateId?: string;
		status?: AutomatedDiscoveryStatus;
	}
	export interface GetAutomatedDiscoveryConfigurationResponseFormProperties {
		classificationScopeId: FormControl<string | null | undefined>,
		disabledAt: FormControl<Date | null | undefined>,
		firstEnabledAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		sensitivityInspectionTemplateId: FormControl<string | null | undefined>,
		status: FormControl<AutomatedDiscoveryStatus | null | undefined>,
	}
	export function CreateGetAutomatedDiscoveryConfigurationResponseFormGroup() {
		return new FormGroup<GetAutomatedDiscoveryConfigurationResponseFormProperties>({
			classificationScopeId: new FormControl<string | null | undefined>(undefined),
			disabledAt: new FormControl<Date | null | undefined>(undefined),
			firstEnabledAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			sensitivityInspectionTemplateId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AutomatedDiscoveryStatus | null | undefined>(undefined),
		});

	}


	/** The status of the automated sensitive data discovery configuration for an Amazon Macie account. Valid values are: */
	export enum AutomatedDiscoveryStatus { ENABLED = 0, DISABLED = 1 }

	export interface GetBucketStatisticsResponse {
		bucketCount?: number | null;
		bucketCountByEffectivePermission?: BucketCountByEffectivePermission;
		bucketCountByEncryptionType?: BucketCountByEncryptionType;
		bucketCountByObjectEncryptionRequirement?: BucketCountPolicyAllowsUnencryptedObjectUploads;
		bucketCountBySharedAccessType?: BucketCountBySharedAccessType;
		bucketStatisticsBySensitivity?: BucketStatisticsBySensitivity;
		classifiableObjectCount?: number | null;
		classifiableSizeInBytes?: number | null;
		lastUpdated?: Date;
		objectCount?: number | null;
		sizeInBytes?: number | null;
		sizeInBytesCompressed?: number | null;
		unclassifiableObjectCount?: ObjectLevelStatistics;
		unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
	}
	export interface GetBucketStatisticsResponseFormProperties {
		bucketCount: FormControl<number | null | undefined>,
		classifiableObjectCount: FormControl<number | null | undefined>,
		classifiableSizeInBytes: FormControl<number | null | undefined>,
		lastUpdated: FormControl<Date | null | undefined>,
		objectCount: FormControl<number | null | undefined>,
		sizeInBytes: FormControl<number | null | undefined>,
		sizeInBytesCompressed: FormControl<number | null | undefined>,
	}
	export function CreateGetBucketStatisticsResponseFormGroup() {
		return new FormGroup<GetBucketStatisticsResponseFormProperties>({
			bucketCount: new FormControl<number | null | undefined>(undefined),
			classifiableObjectCount: new FormControl<number | null | undefined>(undefined),
			classifiableSizeInBytes: new FormControl<number | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			objectCount: new FormControl<number | null | undefined>(undefined),
			sizeInBytes: new FormControl<number | null | undefined>(undefined),
			sizeInBytesCompressed: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information about the number of S3 buckets that are publicly accessible due to a combination of permissions settings for each bucket. */
	export interface BucketCountByEffectivePermission {
		publiclyAccessible?: number | null;
		publiclyReadable?: number | null;
		publiclyWritable?: number | null;
		unknown?: number | null;
	}

	/** Provides information about the number of S3 buckets that are publicly accessible due to a combination of permissions settings for each bucket. */
	export interface BucketCountByEffectivePermissionFormProperties {
		publiclyAccessible: FormControl<number | null | undefined>,
		publiclyReadable: FormControl<number | null | undefined>,
		publiclyWritable: FormControl<number | null | undefined>,
		unknown: FormControl<number | null | undefined>,
	}
	export function CreateBucketCountByEffectivePermissionFormGroup() {
		return new FormGroup<BucketCountByEffectivePermissionFormProperties>({
			publiclyAccessible: new FormControl<number | null | undefined>(undefined),
			publiclyReadable: new FormControl<number | null | undefined>(undefined),
			publiclyWritable: new FormControl<number | null | undefined>(undefined),
			unknown: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information about the number of S3 buckets whose settings do or don't specify default server-side encryption behavior for objects that are added to the buckets. For detailed information about these settings, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html">Setting default server-side encryption behavior for Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>. */
	export interface BucketCountByEncryptionType {
		kmsManaged?: number | null;
		s3Managed?: number | null;
		unencrypted?: number | null;
		unknown?: number | null;
	}

	/** Provides information about the number of S3 buckets whose settings do or don't specify default server-side encryption behavior for objects that are added to the buckets. For detailed information about these settings, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html">Setting default server-side encryption behavior for Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>. */
	export interface BucketCountByEncryptionTypeFormProperties {
		kmsManaged: FormControl<number | null | undefined>,
		s3Managed: FormControl<number | null | undefined>,
		unencrypted: FormControl<number | null | undefined>,
		unknown: FormControl<number | null | undefined>,
	}
	export function CreateBucketCountByEncryptionTypeFormGroup() {
		return new FormGroup<BucketCountByEncryptionTypeFormProperties>({
			kmsManaged: new FormControl<number | null | undefined>(undefined),
			s3Managed: new FormControl<number | null | undefined>(undefined),
			unencrypted: new FormControl<number | null | undefined>(undefined),
			unknown: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information about the number of S3 buckets whose bucket policies do or don't require server-side encryption of objects when objects are added to the buckets. */
	export interface BucketCountPolicyAllowsUnencryptedObjectUploads {
		allowsUnencryptedObjectUploads?: number | null;
		deniesUnencryptedObjectUploads?: number | null;
		unknown?: number | null;
	}

	/** Provides information about the number of S3 buckets whose bucket policies do or don't require server-side encryption of objects when objects are added to the buckets. */
	export interface BucketCountPolicyAllowsUnencryptedObjectUploadsFormProperties {
		allowsUnencryptedObjectUploads: FormControl<number | null | undefined>,
		deniesUnencryptedObjectUploads: FormControl<number | null | undefined>,
		unknown: FormControl<number | null | undefined>,
	}
	export function CreateBucketCountPolicyAllowsUnencryptedObjectUploadsFormGroup() {
		return new FormGroup<BucketCountPolicyAllowsUnencryptedObjectUploadsFormProperties>({
			allowsUnencryptedObjectUploads: new FormControl<number | null | undefined>(undefined),
			deniesUnencryptedObjectUploads: new FormControl<number | null | undefined>(undefined),
			unknown: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information about the number of S3 buckets that are or aren't shared with other Amazon Web Services accounts, Amazon CloudFront origin access identities (OAIs), or CloudFront origin access controls (OACs). In this data, an <i>Amazon Macie organization</i> is defined as a set of Macie accounts that are centrally managed as a group of related accounts through Organizations or by Macie invitation. */
	export interface BucketCountBySharedAccessType {
		external?: number | null;
		internal?: number | null;
		notShared?: number | null;
		unknown?: number | null;
	}

	/** Provides information about the number of S3 buckets that are or aren't shared with other Amazon Web Services accounts, Amazon CloudFront origin access identities (OAIs), or CloudFront origin access controls (OACs). In this data, an <i>Amazon Macie organization</i> is defined as a set of Macie accounts that are centrally managed as a group of related accounts through Organizations or by Macie invitation. */
	export interface BucketCountBySharedAccessTypeFormProperties {
		external: FormControl<number | null | undefined>,
		internal: FormControl<number | null | undefined>,
		notShared: FormControl<number | null | undefined>,
		unknown: FormControl<number | null | undefined>,
	}
	export function CreateBucketCountBySharedAccessTypeFormGroup() {
		return new FormGroup<BucketCountBySharedAccessTypeFormProperties>({
			external: new FormControl<number | null | undefined>(undefined),
			internal: new FormControl<number | null | undefined>(undefined),
			notShared: new FormControl<number | null | undefined>(undefined),
			unknown: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides aggregated statistical data for sensitive data discovery metrics that apply to S3 buckets, grouped by bucket sensitivity score (sensitivityScore). If automated sensitive data discovery is currently disabled for your account, the value for each metric is 0. */
	export interface BucketStatisticsBySensitivity {
		classificationError?: SensitivityAggregations;
		notClassified?: SensitivityAggregations;
		notSensitive?: SensitivityAggregations;
		sensitive?: SensitivityAggregations;
	}

	/** Provides aggregated statistical data for sensitive data discovery metrics that apply to S3 buckets, grouped by bucket sensitivity score (sensitivityScore). If automated sensitive data discovery is currently disabled for your account, the value for each metric is 0. */
	export interface BucketStatisticsBySensitivityFormProperties {
	}
	export function CreateBucketStatisticsBySensitivityFormGroup() {
		return new FormGroup<BucketStatisticsBySensitivityFormProperties>({
		});

	}


	/** Provides aggregated statistical data for sensitive data discovery metrics that apply to S3 buckets. Each field contains aggregated data for all the buckets that have a sensitivity score (sensitivityScore) of a specified value or within a specified range (BucketStatisticsBySensitivity). If automated sensitive data discovery is currently disabled for your account, the value for each field is 0. */
	export interface SensitivityAggregations {
		classifiableSizeInBytes?: number | null;
		publiclyAccessibleCount?: number | null;
		totalCount?: number | null;
		totalSizeInBytes?: number | null;
	}

	/** Provides aggregated statistical data for sensitive data discovery metrics that apply to S3 buckets. Each field contains aggregated data for all the buckets that have a sensitivity score (sensitivityScore) of a specified value or within a specified range (BucketStatisticsBySensitivity). If automated sensitive data discovery is currently disabled for your account, the value for each field is 0. */
	export interface SensitivityAggregationsFormProperties {
		classifiableSizeInBytes: FormControl<number | null | undefined>,
		publiclyAccessibleCount: FormControl<number | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
		totalSizeInBytes: FormControl<number | null | undefined>,
	}
	export function CreateSensitivityAggregationsFormGroup() {
		return new FormGroup<SensitivityAggregationsFormProperties>({
			classifiableSizeInBytes: new FormControl<number | null | undefined>(undefined),
			publiclyAccessibleCount: new FormControl<number | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
			totalSizeInBytes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetClassificationExportConfigurationResponse {
		configuration?: ClassificationExportConfiguration;
	}
	export interface GetClassificationExportConfigurationResponseFormProperties {
	}
	export function CreateGetClassificationExportConfigurationResponseFormGroup() {
		return new FormGroup<GetClassificationExportConfigurationResponseFormProperties>({
		});

	}


	/** Specifies where to store data classification results, and the encryption settings to use when storing results in that location. The location must be an S3 bucket. */
	export interface ClassificationExportConfiguration {
		s3Destination?: S3Destination;
	}

	/** Specifies where to store data classification results, and the encryption settings to use when storing results in that location. The location must be an S3 bucket. */
	export interface ClassificationExportConfigurationFormProperties {
	}
	export function CreateClassificationExportConfigurationFormGroup() {
		return new FormGroup<ClassificationExportConfigurationFormProperties>({
		});

	}


	/** Specifies an S3 bucket to store data classification results in, and the encryption settings to use when storing results in that bucket. */
	export interface S3Destination {

		/** Required */
		bucketName: string;
		keyPrefix?: string;

		/** Required */
		kmsKeyArn: string;
	}

	/** Specifies an S3 bucket to store data classification results in, and the encryption settings to use when storing results in that bucket. */
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

	export interface GetClassificationScopeResponse {
		id?: string;
		name?: string;
		s3?: S3ClassificationScope;
	}
	export interface GetClassificationScopeResponseFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetClassificationScopeResponseFormGroup() {
		return new FormGroup<GetClassificationScopeResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the S3 buckets that are excluded from automated sensitive data discovery for an Amazon Macie account. */
	export interface S3ClassificationScope {

		/** Required */
		excludes: S3ClassificationScopeExclusion;
	}

	/** Specifies the S3 buckets that are excluded from automated sensitive data discovery for an Amazon Macie account. */
	export interface S3ClassificationScopeFormProperties {
	}
	export function CreateS3ClassificationScopeFormGroup() {
		return new FormGroup<S3ClassificationScopeFormProperties>({
		});

	}


	/** Specifies the names of the S3 buckets that are excluded from automated sensitive data discovery. */
	export interface S3ClassificationScopeExclusion {

		/** Required */
		bucketNames: Array<string>;
	}

	/** Specifies the names of the S3 buckets that are excluded from automated sensitive data discovery. */
	export interface S3ClassificationScopeExclusionFormProperties {
	}
	export function CreateS3ClassificationScopeExclusionFormGroup() {
		return new FormGroup<S3ClassificationScopeExclusionFormProperties>({
		});

	}

	export interface GetCustomDataIdentifierResponse {
		arn?: string;
		createdAt?: Date;
		deleted?: boolean | null;
		description?: string;
		id?: string;
		ignoreWords?: Array<string>;
		keywords?: Array<string>;
		maximumMatchDistance?: number | null;
		name?: string;
		regex?: string;
		severityLevels?: Array<SeverityLevel>;
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


	/** Provides a group of results for a query that retrieved aggregated statistical data about findings. */
	export interface GroupCount {
		count?: number | null;
		groupKey?: string;
	}

	/** Provides a group of results for a query that retrieved aggregated statistical data about findings. */
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


	/** Provides the details of a finding. */
	export interface Finding {
		accountId?: string;
		archived?: boolean | null;
		category?: FindingCategory;
		classificationDetails?: ClassificationDetails;
		count?: number | null;
		createdAt?: Date;
		description?: string;
		id?: string;
		partition?: string;
		policyDetails?: PolicyDetails;
		region?: string;
		resourcesAffected?: ResourcesAffected;
		sample?: boolean | null;
		schemaVersion?: string;
		severity?: Severity;
		title?: string;
		type?: FindingType;
		updatedAt?: Date;
	}

	/** Provides the details of a finding. */
	export interface FindingFormProperties {
		accountId: FormControl<string | null | undefined>,
		archived: FormControl<boolean | null | undefined>,
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


	/** The category of the finding. Possible values are: */
	export enum FindingCategory { CLASSIFICATION = 0, POLICY = 1 }


	/** Provides information about a sensitive data finding and the details of the finding. */
	export interface ClassificationDetails {
		detailedResultsLocation?: string;
		jobArn?: string;
		jobId?: string;
		originType?: OriginType;
		result?: ClassificationResult;
	}

	/** Provides information about a sensitive data finding and the details of the finding. */
	export interface ClassificationDetailsFormProperties {
		detailedResultsLocation: FormControl<string | null | undefined>,
		jobArn: FormControl<string | null | undefined>,
		jobId: FormControl<string | null | undefined>,
		originType: FormControl<OriginType | null | undefined>,
	}
	export function CreateClassificationDetailsFormGroup() {
		return new FormGroup<ClassificationDetailsFormProperties>({
			detailedResultsLocation: new FormControl<string | null | undefined>(undefined),
			jobArn: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			originType: new FormControl<OriginType | null | undefined>(undefined),
		});

	}


	/** Specifies how Amazon Macie found the sensitive data that produced a finding. Possible values are: */
	export enum OriginType { SENSITIVE_DATA_DISCOVERY_JOB = 0, AUTOMATED_SENSITIVE_DATA_DISCOVERY = 1 }


	/** Provides the details of a sensitive data finding, including the types, number of occurrences, and locations of the sensitive data that was detected. */
	export interface ClassificationResult {
		additionalOccurrences?: boolean | null;
		customDataIdentifiers?: CustomDataIdentifiers;
		mimeType?: string;
		sensitiveData?: Array<SensitiveDataItem>;
		sizeClassified?: number | null;
		status?: ClassificationResultStatus;
	}

	/** Provides the details of a sensitive data finding, including the types, number of occurrences, and locations of the sensitive data that was detected. */
	export interface ClassificationResultFormProperties {
		additionalOccurrences: FormControl<boolean | null | undefined>,
		mimeType: FormControl<string | null | undefined>,
		sizeClassified: FormControl<number | null | undefined>,
	}
	export function CreateClassificationResultFormGroup() {
		return new FormGroup<ClassificationResultFormProperties>({
			additionalOccurrences: new FormControl<boolean | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			sizeClassified: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information about custom data identifiers that produced a sensitive data finding, and the number of occurrences of the data that they detected for the finding. */
	export interface CustomDataIdentifiers {
		detections?: Array<CustomDetection>;
		totalCount?: number | null;
	}

	/** Provides information about custom data identifiers that produced a sensitive data finding, and the number of occurrences of the data that they detected for the finding. */
	export interface CustomDataIdentifiersFormProperties {
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateCustomDataIdentifiersFormGroup() {
		return new FormGroup<CustomDataIdentifiersFormProperties>({
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information about a custom data identifier that produced a sensitive data finding, and the sensitive data that it detected for the finding. */
	export interface CustomDetection {
		arn?: string;
		count?: number | null;
		name?: string;
		occurrences?: Occurrences;
	}

	/** Provides information about a custom data identifier that produced a sensitive data finding, and the sensitive data that it detected for the finding. */
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


	/** Specifies the location of 1-15 occurrences of sensitive data that was detected by a managed data identifier or a custom data identifier and produced a sensitive data finding. */
	export interface Occurrences {
		cells?: Array<Cell>;
		lineRanges?: Array<Range>;
		offsetRanges?: Array<Range>;
		pages?: Array<Page>;
		records?: Array<Record>;
	}

	/** Specifies the location of 1-15 occurrences of sensitive data that was detected by a managed data identifier or a custom data identifier and produced a sensitive data finding. */
	export interface OccurrencesFormProperties {
	}
	export function CreateOccurrencesFormGroup() {
		return new FormGroup<OccurrencesFormProperties>({
		});

	}


	/** Specifies the location of an occurrence of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file. */
	export interface Cell {
		cellReference?: string;
		column?: number | null;
		columnName?: string;
		row?: number | null;
	}

	/** Specifies the location of an occurrence of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file. */
	export interface CellFormProperties {
		cellReference: FormControl<string | null | undefined>,
		column: FormControl<number | null | undefined>,
		columnName: FormControl<string | null | undefined>,
		row: FormControl<number | null | undefined>,
	}
	export function CreateCellFormGroup() {
		return new FormGroup<CellFormProperties>({
			cellReference: new FormControl<string | null | undefined>(undefined),
			column: new FormControl<number | null | undefined>(undefined),
			columnName: new FormControl<string | null | undefined>(undefined),
			row: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the location of an occurrence of sensitive data in an email message or a non-binary text file such as an HTML, TXT, or XML file. */
	export interface Range {
		end?: number | null;
		start?: number | null;
		startColumn?: number | null;
	}

	/** Specifies the location of an occurrence of sensitive data in an email message or a non-binary text file such as an HTML, TXT, or XML file. */
	export interface RangeFormProperties {
		end: FormControl<number | null | undefined>,
		start: FormControl<number | null | undefined>,
		startColumn: FormControl<number | null | undefined>,
	}
	export function CreateRangeFormGroup() {
		return new FormGroup<RangeFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			startColumn: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the location of an occurrence of sensitive data in an Adobe Portable Document Format file. */
	export interface Page {
		lineRange?: Range;
		offsetRange?: Range;
		pageNumber?: number | null;
	}

	/** Specifies the location of an occurrence of sensitive data in an Adobe Portable Document Format file. */
	export interface PageFormProperties {
		pageNumber: FormControl<number | null | undefined>,
	}
	export function CreatePageFormGroup() {
		return new FormGroup<PageFormProperties>({
			pageNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the location of an occurrence of sensitive data in an Apache Avro object container, Apache Parquet file, JSON file, or JSON Lines file. */
	export interface Record {
		jsonPath?: string;
		recordIndex?: number | null;
	}

	/** Specifies the location of an occurrence of sensitive data in an Apache Avro object container, Apache Parquet file, JSON file, or JSON Lines file. */
	export interface RecordFormProperties {
		jsonPath: FormControl<string | null | undefined>,
		recordIndex: FormControl<number | null | undefined>,
	}
	export function CreateRecordFormGroup() {
		return new FormGroup<RecordFormProperties>({
			jsonPath: new FormControl<string | null | undefined>(undefined),
			recordIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information about the category, types, and occurrences of sensitive data that produced a sensitive data finding. */
	export interface SensitiveDataItem {
		category?: SensitiveDataItemCategory;
		detections?: Array<DefaultDetection>;
		totalCount?: number | null;
	}

	/** Provides information about the category, types, and occurrences of sensitive data that produced a sensitive data finding. */
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


	/** For a finding, the category of sensitive data that was detected and produced the finding. For a managed data identifier, the category of sensitive data that the managed data identifier detects. Possible values are: */
	export enum SensitiveDataItemCategory { FINANCIAL_INFORMATION = 0, PERSONAL_INFORMATION = 1, CREDENTIALS = 2, CUSTOM_IDENTIFIER = 3 }


	/** Provides information about a type of sensitive data that was detected by a managed data identifier and produced a sensitive data finding. */
	export interface DefaultDetection {
		count?: number | null;
		occurrences?: Occurrences;
		type?: string;
	}

	/** Provides information about a type of sensitive data that was detected by a managed data identifier and produced a sensitive data finding. */
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
		code?: string;
		reason?: string;
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


	/** Provides the details of a policy finding. */
	export interface PolicyDetails {
		action?: FindingAction;
		actor?: FindingActor;
	}

	/** Provides the details of a policy finding. */
	export interface PolicyDetailsFormProperties {
	}
	export function CreatePolicyDetailsFormGroup() {
		return new FormGroup<PolicyDetailsFormProperties>({
		});

	}


	/** Provides information about an action that occurred for a resource and produced a policy finding. */
	export interface FindingAction {
		actionType?: FindingActionType;
		apiCallDetails?: ApiCallDetails;
	}

	/** Provides information about an action that occurred for a resource and produced a policy finding. */
	export interface FindingActionFormProperties {
		actionType: FormControl<FindingActionType | null | undefined>,
	}
	export function CreateFindingActionFormGroup() {
		return new FormGroup<FindingActionFormProperties>({
			actionType: new FormControl<FindingActionType | null | undefined>(undefined),
		});

	}


	/** The type of action that occurred for the resource and produced the policy finding: */
	export enum FindingActionType { AWS_API_CALL = 0 }


	/** Provides information about an API operation that an entity invoked for an affected resource. */
	export interface ApiCallDetails {
		api?: string;
		apiServiceName?: string;
		firstSeen?: Date;
		lastSeen?: Date;
	}

	/** Provides information about an API operation that an entity invoked for an affected resource. */
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


	/** Provides information about an entity that performed an action that produced a policy finding for a resource. */
	export interface FindingActor {
		domainDetails?: DomainDetails;
		ipAddressDetails?: IpAddressDetails;
		userIdentity?: UserIdentity;
	}

	/** Provides information about an entity that performed an action that produced a policy finding for a resource. */
	export interface FindingActorFormProperties {
	}
	export function CreateFindingActorFormGroup() {
		return new FormGroup<FindingActorFormProperties>({
		});

	}


	/** Provides information about the domain name of the device that an entity used to perform an action on an affected resource. */
	export interface DomainDetails {
		domainName?: string;
	}

	/** Provides information about the domain name of the device that an entity used to perform an action on an affected resource. */
	export interface DomainDetailsFormProperties {
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateDomainDetailsFormGroup() {
		return new FormGroup<DomainDetailsFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the IP address of the device that an entity used to perform an action on an affected resource. */
	export interface IpAddressDetails {
		ipAddressV4?: string;
		ipCity?: IpCity;
		ipCountry?: IpCountry;
		ipGeoLocation?: IpGeoLocation;
		ipOwner?: IpOwner;
	}

	/** Provides information about the IP address of the device that an entity used to perform an action on an affected resource. */
	export interface IpAddressDetailsFormProperties {
		ipAddressV4: FormControl<string | null | undefined>,
	}
	export function CreateIpAddressDetailsFormGroup() {
		return new FormGroup<IpAddressDetailsFormProperties>({
			ipAddressV4: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the city that an IP address originated from. */
	export interface IpCity {
		name?: string;
	}

	/** Provides information about the city that an IP address originated from. */
	export interface IpCityFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateIpCityFormGroup() {
		return new FormGroup<IpCityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the country that an IP address originated from. */
	export interface IpCountry {
		code?: string;
		name?: string;
	}

	/** Provides information about the country that an IP address originated from. */
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


	/** Provides geographic coordinates that indicate where a specified IP address originated from. */
	export interface IpGeoLocation {
		lat?: number | null;
		lon?: number | null;
	}

	/** Provides geographic coordinates that indicate where a specified IP address originated from. */
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


	/** Provides information about the registered owner of an IP address. */
	export interface IpOwner {
		asn?: string;
		asnOrg?: string;
		isp?: string;
		org?: string;
	}

	/** Provides information about the registered owner of an IP address. */
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


	/** Provides information about the type and other characteristics of an entity that performed an action on an affected resource. */
	export interface UserIdentity {
		assumedRole?: AssumedRole;
		awsAccount?: AwsAccount;
		awsService?: AwsService;
		federatedUser?: FederatedUser;
		iamUser?: IamUser;
		root?: UserIdentityRoot;
		type?: UserIdentityType;
	}

	/** Provides information about the type and other characteristics of an entity that performed an action on an affected resource. */
	export interface UserIdentityFormProperties {
		type: FormControl<UserIdentityType | null | undefined>,
	}
	export function CreateUserIdentityFormGroup() {
		return new FormGroup<UserIdentityFormProperties>({
			type: new FormControl<UserIdentityType | null | undefined>(undefined),
		});

	}


	/** Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the AssumeRole operation of the Security Token Service (STS) API. */
	export interface AssumedRole {
		accessKeyId?: string;
		accountId?: string;
		arn?: string;
		principalId?: string;
		sessionContext?: SessionContext;
	}

	/** Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the AssumeRole operation of the Security Token Service (STS) API. */
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


	/** Provides information about a session that was created for an entity that performed an action by using temporary security credentials. */
	export interface SessionContext {
		attributes?: SessionContextAttributes;
		sessionIssuer?: SessionIssuer;
	}

	/** Provides information about a session that was created for an entity that performed an action by using temporary security credentials. */
	export interface SessionContextFormProperties {
	}
	export function CreateSessionContextFormGroup() {
		return new FormGroup<SessionContextFormProperties>({
		});

	}


	/** Provides information about the context in which temporary security credentials were issued to an entity. */
	export interface SessionContextAttributes {
		creationDate?: Date;
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
		accountId?: string;
		arn?: string;
		principalId?: string;
		type?: string;
		userName?: string;
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


	/** Provides information about an Amazon Web Services account and entity that performed an action on an affected resource. The action was performed using the credentials for an Amazon Web Services account other than your own account. */
	export interface AwsAccount {
		accountId?: string;
		principalId?: string;
	}

	/** Provides information about an Amazon Web Services account and entity that performed an action on an affected resource. The action was performed using the credentials for an Amazon Web Services account other than your own account. */
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


	/** Provides information about an Amazon Web Service that performed an action on an affected resource. */
	export interface AwsService {
		invokedBy?: string;
	}

	/** Provides information about an Amazon Web Service that performed an action on an affected resource. */
	export interface AwsServiceFormProperties {
		invokedBy: FormControl<string | null | undefined>,
	}
	export function CreateAwsServiceFormGroup() {
		return new FormGroup<AwsServiceFormProperties>({
			invokedBy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the GetFederationToken operation of the Security Token Service (STS) API. */
	export interface FederatedUser {
		accessKeyId?: string;
		accountId?: string;
		arn?: string;
		principalId?: string;
		sessionContext?: SessionContext;
	}

	/** Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the GetFederationToken operation of the Security Token Service (STS) API. */
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


	/** Provides information about an Identity and Access Management (IAM) user who performed an action on an affected resource. */
	export interface IamUser {
		accountId?: string;
		arn?: string;
		principalId?: string;
		userName?: string;
	}

	/** Provides information about an Identity and Access Management (IAM) user who performed an action on an affected resource. */
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


	/** Provides information about an Amazon Web Services account and entity that performed an action on an affected resource. The action was performed using the credentials for your Amazon Web Services account. */
	export interface UserIdentityRoot {
		accountId?: string;
		arn?: string;
		principalId?: string;
	}

	/** Provides information about an Amazon Web Services account and entity that performed an action on an affected resource. The action was performed using the credentials for your Amazon Web Services account. */
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


	/** The type of entity that performed the action on the affected resource. Possible values are: */
	export enum UserIdentityType { AssumedRole = 0, IAMUser = 1, FederatedUser = 2, Root = 3, AWSAccount = 4, AWSService = 5 }


	/** Provides information about the resources that a finding applies to. */
	export interface ResourcesAffected {
		s3Bucket?: S3Bucket;
		s3Object?: S3Object;
	}

	/** Provides information about the resources that a finding applies to. */
	export interface ResourcesAffectedFormProperties {
	}
	export function CreateResourcesAffectedFormGroup() {
		return new FormGroup<ResourcesAffectedFormProperties>({
		});

	}


	/** Provides information about the S3 bucket that a finding applies to. */
	export interface S3Bucket {
		allowsUnencryptedObjectUploads?: AllowsUnencryptedObjectUploads;
		arn?: string;
		createdAt?: Date;
		defaultServerSideEncryption?: ServerSideEncryption;
		name?: string;
		owner?: S3BucketOwner;
		publicAccess?: BucketPublicAccess;
		tags?: Array<KeyValuePair>;
	}

	/** Provides information about the S3 bucket that a finding applies to. */
	export interface S3BucketFormProperties {
		allowsUnencryptedObjectUploads: FormControl<AllowsUnencryptedObjectUploads | null | undefined>,
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateS3BucketFormGroup() {
		return new FormGroup<S3BucketFormProperties>({
			allowsUnencryptedObjectUploads: new FormControl<AllowsUnencryptedObjectUploads | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the default server-side encryption settings for an S3 bucket or the encryption settings for an S3 object. */
	export interface ServerSideEncryption {
		encryptionType?: EncryptionType;
		kmsMasterKeyId?: string;
	}

	/** Provides information about the default server-side encryption settings for an S3 bucket or the encryption settings for an S3 object. */
	export interface ServerSideEncryptionFormProperties {
		encryptionType: FormControl<EncryptionType | null | undefined>,
		kmsMasterKeyId: FormControl<string | null | undefined>,
	}
	export function CreateServerSideEncryptionFormGroup() {
		return new FormGroup<ServerSideEncryptionFormProperties>({
			encryptionType: new FormControl<EncryptionType | null | undefined>(undefined),
			kmsMasterKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The server-side encryption algorithm that was used to encrypt an S3 object or is used by default to encrypt objects that are added to an S3 bucket. Possible values are: */
	export enum EncryptionType { NONE = 0, AES256 = 1, 'aws:kms' = 2, UNKNOWN = 3 }


	/** Provides information about the Amazon Web Services account that owns an S3 bucket. */
	export interface S3BucketOwner {
		displayName?: string;
		id?: string;
	}

	/** Provides information about the Amazon Web Services account that owns an S3 bucket. */
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


	/** Provides information about the S3 object that a finding applies to. */
	export interface S3Object {
		bucketArn?: string;
		eTag?: string;
		extension?: string;
		key?: string;
		lastModified?: Date;
		path?: string;
		publicAccess?: boolean | null;
		serverSideEncryption?: ServerSideEncryption;
		size?: number | null;
		storageClass?: StorageClass;
		tags?: Array<KeyValuePair>;
		versionId?: string;
	}

	/** Provides information about the S3 object that a finding applies to. */
	export interface S3ObjectFormProperties {
		bucketArn: FormControl<string | null | undefined>,
		eTag: FormControl<string | null | undefined>,
		extension: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		lastModified: FormControl<Date | null | undefined>,
		path: FormControl<string | null | undefined>,
		publicAccess: FormControl<boolean | null | undefined>,
		size: FormControl<number | null | undefined>,
		storageClass: FormControl<StorageClass | null | undefined>,
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
			storageClass: new FormControl<StorageClass | null | undefined>(undefined),
			versionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The storage class of the S3 object. Possible values are: */
	export enum StorageClass { STANDARD = 0, REDUCED_REDUNDANCY = 1, STANDARD_IA = 2, INTELLIGENT_TIERING = 3, DEEP_ARCHIVE = 4, ONEZONE_IA = 5, GLACIER = 6, GLACIER_IR = 7, OUTPOSTS = 8 }


	/** Provides the numerical and qualitative representations of a finding's severity. */
	export interface Severity {
		description?: SeverityDescription;
		score?: number | null;
	}

	/** Provides the numerical and qualitative representations of a finding's severity. */
	export interface SeverityFormProperties {
		description: FormControl<SeverityDescription | null | undefined>,
		score: FormControl<number | null | undefined>,
	}
	export function CreateSeverityFormGroup() {
		return new FormGroup<SeverityFormProperties>({
			description: new FormControl<SeverityDescription | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The qualitative representation of the finding's severity. Possible values are: */
	export enum SeverityDescription { Low = 0, Medium = 1, High = 2 }

	export interface GetFindingsFilterResponse {
		action?: FindingsFilterAction;
		arn?: string;
		description?: string;
		findingCriteria?: FindingCriteria;
		id?: string;
		name?: string;
		position?: number | null;
		tags?: TagMap;
	}
	export interface GetFindingsFilterResponseFormProperties {
		action: FormControl<FindingsFilterAction | null | undefined>,
		arn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		position: FormControl<number | null | undefined>,
	}
	export function CreateGetFindingsFilterResponseFormGroup() {
		return new FormGroup<GetFindingsFilterResponseFormProperties>({
			action: new FormControl<FindingsFilterAction | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The action to perform on findings that match the filter criteria. To suppress (automatically archive) findings that match the criteria, set this value to ARCHIVE. Valid values are: */
	export enum FindingsFilterAction { ARCHIVE = 0, NOOP = 1 }


	/** Specifies, as a map, one or more property-based conditions that filter the results of a query for findings. */
	export interface FindingCriteria {
		criterion?: Criterion;
	}

	/** Specifies, as a map, one or more property-based conditions that filter the results of a query for findings. */
	export interface FindingCriteriaFormProperties {
	}
	export function CreateFindingCriteriaFormGroup() {
		return new FormGroup<FindingCriteriaFormProperties>({
		});

	}

	export interface GetFindingsPublicationConfigurationResponse {
		securityHubConfiguration?: SecurityHubConfiguration;
	}
	export interface GetFindingsPublicationConfigurationResponseFormProperties {
	}
	export function CreateGetFindingsPublicationConfigurationResponseFormGroup() {
		return new FormGroup<GetFindingsPublicationConfigurationResponseFormProperties>({
		});

	}


	/** Specifies configuration settings that determine which findings are published to Security Hub automatically. For information about how Macie publishes findings to Security Hub, see <a href="https://docs.aws.amazon.com/macie/latest/user/securityhub-integration.html">Amazon Macie integration with Security Hub</a> in the <i>Amazon Macie User Guide</i>. */
	export interface SecurityHubConfiguration {

		/** Required */
		publishClassificationFindings: boolean;

		/** Required */
		publishPolicyFindings: boolean;
	}

	/** Specifies configuration settings that determine which findings are published to Security Hub automatically. For information about how Macie publishes findings to Security Hub, see <a href="https://docs.aws.amazon.com/macie/latest/user/securityhub-integration.html">Amazon Macie integration with Security Hub</a> in the <i>Amazon Macie User Guide</i>. */
	export interface SecurityHubConfigurationFormProperties {

		/** Required */
		publishClassificationFindings: FormControl<boolean | null | undefined>,

		/** Required */
		publishPolicyFindings: FormControl<boolean | null | undefined>,
	}
	export function CreateSecurityHubConfigurationFormGroup() {
		return new FormGroup<SecurityHubConfigurationFormProperties>({
			publishClassificationFindings: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			publishPolicyFindings: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
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
		createdAt?: Date;
		findingPublishingFrequency?: FindingPublishingFrequency;
		serviceRole?: string;
		status?: MacieStatus;
		updatedAt?: Date;
	}
	export interface GetMacieSessionResponseFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		findingPublishingFrequency: FormControl<FindingPublishingFrequency | null | undefined>,
		serviceRole: FormControl<string | null | undefined>,
		status: FormControl<MacieStatus | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetMacieSessionResponseFormGroup() {
		return new FormGroup<GetMacieSessionResponseFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			findingPublishingFrequency: new FormControl<FindingPublishingFrequency | null | undefined>(undefined),
			serviceRole: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<MacieStatus | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The frequency with which Amazon Macie publishes updates to policy findings for an account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events). For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-monitor.html">Monitoring and processing findings</a> in the <i>Amazon Macie User Guide</i>. Valid values are: */
	export enum FindingPublishingFrequency { FIFTEEN_MINUTES = 0, ONE_HOUR = 1, SIX_HOURS = 2 }


	/** The status of an Amazon Macie account. Valid values are: */
	export enum MacieStatus { PAUSED = 0, ENABLED = 1 }

	export interface GetMasterAccountResponse {
		master?: Invitation;
	}
	export interface GetMasterAccountResponseFormProperties {
	}
	export function CreateGetMasterAccountResponseFormGroup() {
		return new FormGroup<GetMasterAccountResponseFormProperties>({
		});

	}

	export interface GetMemberResponse {
		accountId?: string;
		administratorAccountId?: string;
		arn?: string;
		email?: string;
		invitedAt?: Date;
		masterAccountId?: string;
		relationshipStatus?: RelationshipStatus;
		tags?: TagMap;
		updatedAt?: Date;
	}
	export interface GetMemberResponseFormProperties {
		accountId: FormControl<string | null | undefined>,
		administratorAccountId: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		invitedAt: FormControl<Date | null | undefined>,
		masterAccountId: FormControl<string | null | undefined>,
		relationshipStatus: FormControl<RelationshipStatus | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetMemberResponseFormGroup() {
		return new FormGroup<GetMemberResponseFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			administratorAccountId: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			invitedAt: new FormControl<Date | null | undefined>(undefined),
			masterAccountId: new FormControl<string | null | undefined>(undefined),
			relationshipStatus: new FormControl<RelationshipStatus | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetResourceProfileResponse {
		profileUpdatedAt?: Date;
		sensitivityScore?: number | null;
		sensitivityScoreOverridden?: boolean | null;
		statistics?: ResourceStatistics;
	}
	export interface GetResourceProfileResponseFormProperties {
		profileUpdatedAt: FormControl<Date | null | undefined>,
		sensitivityScore: FormControl<number | null | undefined>,
		sensitivityScoreOverridden: FormControl<boolean | null | undefined>,
	}
	export function CreateGetResourceProfileResponseFormGroup() {
		return new FormGroup<GetResourceProfileResponseFormProperties>({
			profileUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			sensitivityScore: new FormControl<number | null | undefined>(undefined),
			sensitivityScoreOverridden: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides statistical data for sensitive data discovery metrics that apply to an S3 bucket that Amazon Macie monitors and analyzes for your account. The statistics capture the results of automated sensitive data discovery activities that Macie has performed for the bucket. The data is available only if automated sensitive data discovery is currently enabled for your account. */
	export interface ResourceStatistics {
		totalBytesClassified?: number | null;
		totalDetections?: number | null;
		totalDetectionsSuppressed?: number | null;
		totalItemsClassified?: number | null;
		totalItemsSensitive?: number | null;
		totalItemsSkipped?: number | null;
		totalItemsSkippedInvalidEncryption?: number | null;
		totalItemsSkippedInvalidKms?: number | null;
		totalItemsSkippedPermissionDenied?: number | null;
	}

	/** Provides statistical data for sensitive data discovery metrics that apply to an S3 bucket that Amazon Macie monitors and analyzes for your account. The statistics capture the results of automated sensitive data discovery activities that Macie has performed for the bucket. The data is available only if automated sensitive data discovery is currently enabled for your account. */
	export interface ResourceStatisticsFormProperties {
		totalBytesClassified: FormControl<number | null | undefined>,
		totalDetections: FormControl<number | null | undefined>,
		totalDetectionsSuppressed: FormControl<number | null | undefined>,
		totalItemsClassified: FormControl<number | null | undefined>,
		totalItemsSensitive: FormControl<number | null | undefined>,
		totalItemsSkipped: FormControl<number | null | undefined>,
		totalItemsSkippedInvalidEncryption: FormControl<number | null | undefined>,
		totalItemsSkippedInvalidKms: FormControl<number | null | undefined>,
		totalItemsSkippedPermissionDenied: FormControl<number | null | undefined>,
	}
	export function CreateResourceStatisticsFormGroup() {
		return new FormGroup<ResourceStatisticsFormProperties>({
			totalBytesClassified: new FormControl<number | null | undefined>(undefined),
			totalDetections: new FormControl<number | null | undefined>(undefined),
			totalDetectionsSuppressed: new FormControl<number | null | undefined>(undefined),
			totalItemsClassified: new FormControl<number | null | undefined>(undefined),
			totalItemsSensitive: new FormControl<number | null | undefined>(undefined),
			totalItemsSkipped: new FormControl<number | null | undefined>(undefined),
			totalItemsSkippedInvalidEncryption: new FormControl<number | null | undefined>(undefined),
			totalItemsSkippedInvalidKms: new FormControl<number | null | undefined>(undefined),
			totalItemsSkippedPermissionDenied: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetRevealConfigurationResponse {
		configuration?: RevealConfiguration;
	}
	export interface GetRevealConfigurationResponseFormProperties {
	}
	export function CreateGetRevealConfigurationResponseFormGroup() {
		return new FormGroup<GetRevealConfigurationResponseFormProperties>({
		});

	}


	/** Specifies the configuration settings for retrieving occurrences of sensitive data reported by findings, and the status of the configuration for an Amazon Macie account. When you enable the configuration for the first time, your request must specify an Key Management Service (KMS) key. Otherwise, an error occurs. Macie uses the specified key to encrypt the sensitive data that you retrieve. */
	export interface RevealConfiguration {
		kmsKeyId?: string;

		/** Required */
		status: AutomatedDiscoveryStatus;
	}

	/** Specifies the configuration settings for retrieving occurrences of sensitive data reported by findings, and the status of the configuration for an Amazon Macie account. When you enable the configuration for the first time, your request must specify an Key Management Service (KMS) key. Otherwise, an error occurs. Macie uses the specified key to encrypt the sensitive data that you retrieve. */
	export interface RevealConfigurationFormProperties {
		kmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<AutomatedDiscoveryStatus | null | undefined>,
	}
	export function CreateRevealConfigurationFormGroup() {
		return new FormGroup<RevealConfigurationFormProperties>({
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AutomatedDiscoveryStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSensitiveDataOccurrencesResponse {
		error?: string;
		sensitiveDataOccurrences?: SensitiveDataOccurrences;
		status?: RevealRequestStatus;
	}
	export interface GetSensitiveDataOccurrencesResponseFormProperties {
		error: FormControl<string | null | undefined>,
		status: FormControl<RevealRequestStatus | null | undefined>,
	}
	export function CreateGetSensitiveDataOccurrencesResponseFormGroup() {
		return new FormGroup<GetSensitiveDataOccurrencesResponseFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<RevealRequestStatus | null | undefined>(undefined),
		});

	}


	/** Specifies a type of sensitive data reported by a finding and provides occurrences of the specified type of sensitive data. */
	export interface SensitiveDataOccurrences {
	}

	/** Specifies a type of sensitive data reported by a finding and provides occurrences of the specified type of sensitive data. */
	export interface SensitiveDataOccurrencesFormProperties {
	}
	export function CreateSensitiveDataOccurrencesFormGroup() {
		return new FormGroup<SensitiveDataOccurrencesFormProperties>({
		});

	}


	/** The status of a request to retrieve occurrences of sensitive data reported by a finding. Possible values are: */
	export enum RevealRequestStatus { SUCCESS = 0, PROCESSING = 1, ERROR = 2 }

	export interface UnprocessableEntityException {
	}
	export interface UnprocessableEntityExceptionFormProperties {
	}
	export function CreateUnprocessableEntityExceptionFormGroup() {
		return new FormGroup<UnprocessableEntityExceptionFormProperties>({
		});

	}

	export interface GetSensitiveDataOccurrencesAvailabilityResponse {
		code?: AvailabilityCode;
		reasons?: Array<UnavailabilityReasonCode>;
	}
	export interface GetSensitiveDataOccurrencesAvailabilityResponseFormProperties {
		code: FormControl<AvailabilityCode | null | undefined>,
	}
	export function CreateGetSensitiveDataOccurrencesAvailabilityResponseFormGroup() {
		return new FormGroup<GetSensitiveDataOccurrencesAvailabilityResponseFormProperties>({
			code: new FormControl<AvailabilityCode | null | undefined>(undefined),
		});

	}


	/** Specifies whether occurrences of sensitive data can be retrieved for a finding. Possible values are: */
	export enum AvailabilityCode { AVAILABLE = 0, UNAVAILABLE = 1 }


	/** Specifies why occurrences of sensitive data can't be retrieved for a finding. Possible values are: */
	export enum UnavailabilityReasonCode { OBJECT_EXCEEDS_SIZE_QUOTA = 0, UNSUPPORTED_OBJECT_TYPE = 1, UNSUPPORTED_FINDING_TYPE = 2, INVALID_CLASSIFICATION_RESULT = 3, OBJECT_UNAVAILABLE = 4 }

	export interface GetSensitivityInspectionTemplateResponse {
		description?: string;
		excludes?: SensitivityInspectionTemplateExcludes;
		includes?: SensitivityInspectionTemplateIncludes;
		name?: string;
		sensitivityInspectionTemplateId?: string;
	}
	export interface GetSensitivityInspectionTemplateResponseFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		sensitivityInspectionTemplateId: FormControl<string | null | undefined>,
	}
	export function CreateGetSensitivityInspectionTemplateResponseFormGroup() {
		return new FormGroup<GetSensitivityInspectionTemplateResponseFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sensitivityInspectionTemplateId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies managed data identifiers to exclude (not use) when performing automated sensitive data discovery for an Amazon Macie account. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>. */
	export interface SensitivityInspectionTemplateExcludes {
		managedDataIdentifierIds?: Array<string>;
	}

	/** Specifies managed data identifiers to exclude (not use) when performing automated sensitive data discovery for an Amazon Macie account. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>. */
	export interface SensitivityInspectionTemplateExcludesFormProperties {
	}
	export function CreateSensitivityInspectionTemplateExcludesFormGroup() {
		return new FormGroup<SensitivityInspectionTemplateExcludesFormProperties>({
		});

	}


	/** Specifies the allow lists, custom data identifiers, and managed data identifiers to include (use) when performing automated sensitive data discovery for an Amazon Macie account. The configuration must specify at least one custom data identifier or managed data identifier. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>. */
	export interface SensitivityInspectionTemplateIncludes {
		allowListIds?: Array<string>;
		customDataIdentifierIds?: Array<string>;
		managedDataIdentifierIds?: Array<string>;
	}

	/** Specifies the allow lists, custom data identifiers, and managed data identifiers to include (use) when performing automated sensitive data discovery for an Amazon Macie account. The configuration must specify at least one custom data identifier or managed data identifier. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>. */
	export interface SensitivityInspectionTemplateIncludesFormProperties {
	}
	export function CreateSensitivityInspectionTemplateIncludesFormGroup() {
		return new FormGroup<SensitivityInspectionTemplateIncludesFormProperties>({
		});

	}

	export interface GetUsageStatisticsResponse {
		nextToken?: string;
		records?: Array<UsageRecord>;
		timeRange?: TimeRange;
	}
	export interface GetUsageStatisticsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
		timeRange: FormControl<TimeRange | null | undefined>,
	}
	export function CreateGetUsageStatisticsResponseFormGroup() {
		return new FormGroup<GetUsageStatisticsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			timeRange: new FormControl<TimeRange | null | undefined>(undefined),
		});

	}


	/** Provides quota and aggregated usage data for an Amazon Macie account. */
	export interface UsageRecord {
		accountId?: string;
		automatedDiscoveryFreeTrialStartDate?: Date;
		freeTrialStartDate?: Date;
		usage?: Array<UsageByAccount>;
	}

	/** Provides quota and aggregated usage data for an Amazon Macie account. */
	export interface UsageRecordFormProperties {
		accountId: FormControl<string | null | undefined>,
		automatedDiscoveryFreeTrialStartDate: FormControl<Date | null | undefined>,
		freeTrialStartDate: FormControl<Date | null | undefined>,
	}
	export function CreateUsageRecordFormGroup() {
		return new FormGroup<UsageRecordFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			automatedDiscoveryFreeTrialStartDate: new FormControl<Date | null | undefined>(undefined),
			freeTrialStartDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Provides data for a specific usage metric and the corresponding quota for an Amazon Macie account. */
	export interface UsageByAccount {
		currency?: Currency;
		estimatedCost?: string;
		serviceLimit?: ServiceLimit;
		type?: UsageType;
	}

	/** Provides data for a specific usage metric and the corresponding quota for an Amazon Macie account. */
	export interface UsageByAccountFormProperties {
		currency: FormControl<Currency | null | undefined>,
		estimatedCost: FormControl<string | null | undefined>,
		type: FormControl<UsageType | null | undefined>,
	}
	export function CreateUsageByAccountFormGroup() {
		return new FormGroup<UsageByAccountFormProperties>({
			currency: new FormControl<Currency | null | undefined>(undefined),
			estimatedCost: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<UsageType | null | undefined>(undefined),
		});

	}


	/** The type of currency that the data for an Amazon Macie usage metric is reported in. Possible values are: */
	export enum Currency { USD = 0 }


	/** Specifies a current quota for an Amazon Macie account. */
	export interface ServiceLimit {
		isServiceLimited?: boolean | null;
		unit?: Unit;
		value?: number | null;
	}

	/** Specifies a current quota for an Amazon Macie account. */
	export interface ServiceLimitFormProperties {
		isServiceLimited: FormControl<boolean | null | undefined>,
		unit: FormControl<Unit | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateServiceLimitFormGroup() {
		return new FormGroup<ServiceLimitFormProperties>({
			isServiceLimited: new FormControl<boolean | null | undefined>(undefined),
			unit: new FormControl<Unit | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Unit { TERABYTES = 0 }


	/** The name of an Amazon Macie usage metric for an account. Possible values are: */
	export enum UsageType { DATA_INVENTORY_EVALUATION = 0, SENSITIVE_DATA_DISCOVERY = 1, AUTOMATED_SENSITIVE_DATA_DISCOVERY = 2, AUTOMATED_OBJECT_MONITORING = 3 }


	/** An inclusive time period that Amazon Macie usage data applies to. Possible values are: */
	export enum TimeRange { MONTH_TO_DATE = 0, PAST_30_DAYS = 1 }


	/** Specifies a condition for filtering the results of a query for quota and usage data for one or more Amazon Macie accounts. */
	export interface UsageStatisticsFilter {
		comparator?: UsageStatisticsFilterComparator;
		key?: UsageStatisticsFilterKey;
		values?: Array<string>;
	}

	/** Specifies a condition for filtering the results of a query for quota and usage data for one or more Amazon Macie accounts. */
	export interface UsageStatisticsFilterFormProperties {
		comparator: FormControl<UsageStatisticsFilterComparator | null | undefined>,
		key: FormControl<UsageStatisticsFilterKey | null | undefined>,
	}
	export function CreateUsageStatisticsFilterFormGroup() {
		return new FormGroup<UsageStatisticsFilterFormProperties>({
			comparator: new FormControl<UsageStatisticsFilterComparator | null | undefined>(undefined),
			key: new FormControl<UsageStatisticsFilterKey | null | undefined>(undefined),
		});

	}


	/** The operator to use in a condition that filters the results of a query for Amazon Macie account quotas and usage data. Valid values are: */
	export enum UsageStatisticsFilterComparator { GT = 0, GTE = 1, LT = 2, LTE = 3, EQ = 4, NE = 5, CONTAINS = 6 }


	/** The field to use in a condition that filters the results of a query for Amazon Macie account quotas and usage data. Valid values are: */
	export enum UsageStatisticsFilterKey { accountId = 0, serviceLimit = 1, freeTrialStartDate = 2, total = 3 }


	/** The field to use to sort the results of a query for Amazon Macie account quotas and usage data. Valid values are: */
	export enum UsageStatisticsSortKey { accountId = 0, total = 1, serviceLimitValue = 2, freeTrialStartDate = 3 }

	export interface GetUsageTotalsResponse {
		timeRange?: TimeRange;
		usageTotals?: Array<UsageTotal>;
	}
	export interface GetUsageTotalsResponseFormProperties {
		timeRange: FormControl<TimeRange | null | undefined>,
	}
	export function CreateGetUsageTotalsResponseFormGroup() {
		return new FormGroup<GetUsageTotalsResponseFormProperties>({
			timeRange: new FormControl<TimeRange | null | undefined>(undefined),
		});

	}


	/** Provides aggregated data for an Amazon Macie usage metric. The value for the metric reports estimated usage data for an account for the preceding 30 days or the current calendar month to date, depending on the time period (timeRange) specified in the request. */
	export interface UsageTotal {
		currency?: Currency;
		estimatedCost?: string;
		type?: UsageType;
	}

	/** Provides aggregated data for an Amazon Macie usage metric. The value for the metric reports estimated usage data for an account for the preceding 30 days or the current calendar month to date, depending on the time period (timeRange) specified in the request. */
	export interface UsageTotalFormProperties {
		currency: FormControl<Currency | null | undefined>,
		estimatedCost: FormControl<string | null | undefined>,
		type: FormControl<UsageType | null | undefined>,
	}
	export function CreateUsageTotalFormGroup() {
		return new FormGroup<UsageTotalFormProperties>({
			currency: new FormControl<Currency | null | undefined>(undefined),
			estimatedCost: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<UsageType | null | undefined>(undefined),
		});

	}

	export interface ListAllowListsResponse {
		allowLists?: Array<AllowListSummary>;
		nextToken?: string;
	}
	export interface ListAllowListsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAllowListsResponseFormGroup() {
		return new FormGroup<ListAllowListsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a subset of information about an allow list. */
	export interface AllowListSummary {
		arn?: string;
		createdAt?: Date;
		description?: string;
		id?: string;
		name?: string;
		updatedAt?: Date;
	}

	/** Provides a subset of information about an allow list. */
	export interface AllowListSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateAllowListSummaryFormGroup() {
		return new FormGroup<AllowListSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListClassificationJobsResponse {
		items?: Array<JobSummary>;
		nextToken?: string;
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
		bucketCriteria?: S3BucketCriteriaForJob;
		bucketDefinitions?: Array<S3BucketDefinitionForJob>;
		createdAt?: Date;
		jobId?: string;
		jobStatus?: JobStatus;
		jobType?: JobType;
		lastRunErrorStatus?: LastRunErrorStatus;
		name?: string;
		userPausedDetails?: UserPausedDetails;
	}

	/** Provides information about a classification job, including the current status of the job. */
	export interface JobSummaryFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		jobId: FormControl<string | null | undefined>,
		jobStatus: FormControl<JobStatus | null | undefined>,
		jobType: FormControl<JobType | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateJobSummaryFormGroup() {
		return new FormGroup<JobSummaryFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			jobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			jobType: new FormControl<JobType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a condition that filters the results of a request for information about classification jobs. Each condition consists of a property, an operator, and one or more values. */
	export interface ListJobsFilterTerm {
		comparator?: JobComparator;
		key?: ListJobsFilterKey;
		values?: Array<string>;
	}

	/** Specifies a condition that filters the results of a request for information about classification jobs. Each condition consists of a property, an operator, and one or more values. */
	export interface ListJobsFilterTermFormProperties {
		comparator: FormControl<JobComparator | null | undefined>,
		key: FormControl<ListJobsFilterKey | null | undefined>,
	}
	export function CreateListJobsFilterTermFormGroup() {
		return new FormGroup<ListJobsFilterTermFormProperties>({
			comparator: new FormControl<JobComparator | null | undefined>(undefined),
			key: new FormControl<ListJobsFilterKey | null | undefined>(undefined),
		});

	}


	/** The property to use to filter the results. Valid values are: */
	export enum ListJobsFilterKey { jobType = 0, jobStatus = 1, createdAt = 2, name = 3 }


	/** The property to sort the results by. Valid values are: */
	export enum ListJobsSortAttributeName { createdAt = 0, jobStatus = 1, name = 2, jobType = 3 }

	export interface ListClassificationScopesResponse {
		classificationScopes?: Array<ClassificationScopeSummary>;
		nextToken?: string;
	}
	export interface ListClassificationScopesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListClassificationScopesResponseFormGroup() {
		return new FormGroup<ListClassificationScopesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the classification scope for an Amazon Macie account. Macie uses the scope's settings when it performs automated sensitive data discovery for the account. */
	export interface ClassificationScopeSummary {
		id?: string;
		name?: string;
	}

	/** Provides information about the classification scope for an Amazon Macie account. Macie uses the scope's settings when it performs automated sensitive data discovery for the account. */
	export interface ClassificationScopeSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateClassificationScopeSummaryFormGroup() {
		return new FormGroup<ClassificationScopeSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCustomDataIdentifiersResponse {
		items?: Array<CustomDataIdentifierSummary>;
		nextToken?: string;
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
		arn?: string;
		createdAt?: Date;
		description?: string;
		id?: string;
		name?: string;
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
		nextToken?: string;
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
		nextToken?: string;
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
		action?: FindingsFilterAction;
		arn?: string;
		id?: string;
		name?: string;
		tags?: TagMap;
	}

	/** Provides information about a findings filter. */
	export interface FindingsFilterListItemFormProperties {
		action: FormControl<FindingsFilterAction | null | undefined>,
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateFindingsFilterListItemFormGroup() {
		return new FormGroup<FindingsFilterListItemFormProperties>({
			action: new FormControl<FindingsFilterAction | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInvitationsResponse {
		invitations?: Array<Invitation>;
		nextToken?: string;
	}
	export interface ListInvitationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInvitationsResponseFormGroup() {
		return new FormGroup<ListInvitationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListManagedDataIdentifiersResponse {
		items?: Array<ManagedDataIdentifierSummary>;
		nextToken?: string;
	}
	export interface ListManagedDataIdentifiersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListManagedDataIdentifiersResponseFormGroup() {
		return new FormGroup<ListManagedDataIdentifiersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a managed data identifier. For additional information, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>. */
	export interface ManagedDataIdentifierSummary {
		category?: SensitiveDataItemCategory;
		id?: string;
	}

	/** Provides information about a managed data identifier. For additional information, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>. */
	export interface ManagedDataIdentifierSummaryFormProperties {
		category: FormControl<SensitiveDataItemCategory | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateManagedDataIdentifierSummaryFormGroup() {
		return new FormGroup<ManagedDataIdentifierSummaryFormProperties>({
			category: new FormControl<SensitiveDataItemCategory | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMembersResponse {
		members?: Array<Member>;
		nextToken?: string;
	}
	export interface ListMembersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMembersResponseFormGroup() {
		return new FormGroup<ListMembersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about an account that's associated with an Amazon Macie administrator account. */
	export interface Member {
		accountId?: string;
		administratorAccountId?: string;
		arn?: string;
		email?: string;
		invitedAt?: Date;
		masterAccountId?: string;
		relationshipStatus?: RelationshipStatus;
		tags?: TagMap;
		updatedAt?: Date;
	}

	/** Provides information about an account that's associated with an Amazon Macie administrator account. */
	export interface MemberFormProperties {
		accountId: FormControl<string | null | undefined>,
		administratorAccountId: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		invitedAt: FormControl<Date | null | undefined>,
		masterAccountId: FormControl<string | null | undefined>,
		relationshipStatus: FormControl<RelationshipStatus | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateMemberFormGroup() {
		return new FormGroup<MemberFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			administratorAccountId: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			invitedAt: new FormControl<Date | null | undefined>(undefined),
			masterAccountId: new FormControl<string | null | undefined>(undefined),
			relationshipStatus: new FormControl<RelationshipStatus | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListOrganizationAdminAccountsResponse {
		adminAccounts?: Array<AdminAccount>;
		nextToken?: string;
	}
	export interface ListOrganizationAdminAccountsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOrganizationAdminAccountsResponseFormGroup() {
		return new FormGroup<ListOrganizationAdminAccountsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the delegated Amazon Macie administrator account for an organization in Organizations. */
	export interface AdminAccount {
		accountId?: string;
		status?: AdminStatus;
	}

	/** Provides information about the delegated Amazon Macie administrator account for an organization in Organizations. */
	export interface AdminAccountFormProperties {
		accountId: FormControl<string | null | undefined>,
		status: FormControl<AdminStatus | null | undefined>,
	}
	export function CreateAdminAccountFormGroup() {
		return new FormGroup<AdminAccountFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AdminStatus | null | undefined>(undefined),
		});

	}


	/** The current status of an account as the delegated Amazon Macie administrator account for an organization in Organizations. Possible values are: */
	export enum AdminStatus { ENABLED = 0, DISABLING_IN_PROGRESS = 1 }

	export interface ListResourceProfileArtifactsResponse {
		artifacts?: Array<ResourceProfileArtifact>;
		nextToken?: string;
	}
	export interface ListResourceProfileArtifactsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceProfileArtifactsResponseFormGroup() {
		return new FormGroup<ListResourceProfileArtifactsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about an S3 object that Amazon Macie selected for analysis while performing automated sensitive data discovery for an S3 bucket, and the status and results of the analysis. This information is available only if automated sensitive data discovery is currently enabled for your account. */
	export interface ResourceProfileArtifact {

		/** Required */
		arn: string;

		/** Required */
		classificationResultStatus: string;
		sensitive?: boolean | null;
	}

	/** Provides information about an S3 object that Amazon Macie selected for analysis while performing automated sensitive data discovery for an S3 bucket, and the status and results of the analysis. This information is available only if automated sensitive data discovery is currently enabled for your account. */
	export interface ResourceProfileArtifactFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		classificationResultStatus: FormControl<string | null | undefined>,
		sensitive: FormControl<boolean | null | undefined>,
	}
	export function CreateResourceProfileArtifactFormGroup() {
		return new FormGroup<ResourceProfileArtifactFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			classificationResultStatus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sensitive: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListResourceProfileDetectionsResponse {
		detections?: Array<Detection>;
		nextToken?: string;
	}
	export interface ListResourceProfileDetectionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceProfileDetectionsResponseFormGroup() {
		return new FormGroup<ListResourceProfileDetectionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a type of sensitive data that Amazon Macie found in an S3 bucket while performing automated sensitive data discovery for the bucket. The information also specifies the custom data identifier or managed data identifier that detected the data. This information is available only if automated sensitive data discovery is currently enabled for your account. */
	export interface Detection {
		arn?: string;
		count?: number | null;
		id?: string;
		name?: string;
		suppressed?: boolean | null;
		type?: DataIdentifierType;
	}

	/** Provides information about a type of sensitive data that Amazon Macie found in an S3 bucket while performing automated sensitive data discovery for the bucket. The information also specifies the custom data identifier or managed data identifier that detected the data. This information is available only if automated sensitive data discovery is currently enabled for your account. */
	export interface DetectionFormProperties {
		arn: FormControl<string | null | undefined>,
		count: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		suppressed: FormControl<boolean | null | undefined>,
		type: FormControl<DataIdentifierType | null | undefined>,
	}
	export function CreateDetectionFormGroup() {
		return new FormGroup<DetectionFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			suppressed: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<DataIdentifierType | null | undefined>(undefined),
		});

	}


	/** The type of data identifier that detected a specific type of sensitive data in an S3 bucket. Possible values are: */
	export enum DataIdentifierType { CUSTOM = 0, MANAGED = 1 }

	export interface ListSensitivityInspectionTemplatesResponse {
		nextToken?: string;
		sensitivityInspectionTemplates?: Array<SensitivityInspectionTemplatesEntry>;
	}
	export interface ListSensitivityInspectionTemplatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSensitivityInspectionTemplatesResponseFormGroup() {
		return new FormGroup<ListSensitivityInspectionTemplatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the sensitivity inspection template for an Amazon Macie account. Macie uses the template's settings when it performs automated sensitive data discovery for the account. */
	export interface SensitivityInspectionTemplatesEntry {
		id?: string;
		name?: string;
	}

	/** Provides information about the sensitivity inspection template for an Amazon Macie account. Macie uses the template's settings when it performs automated sensitive data discovery for the account. */
	export interface SensitivityInspectionTemplatesEntryFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateSensitivityInspectionTemplatesEntryFormGroup() {
		return new FormGroup<SensitivityInspectionTemplatesEntryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface PutClassificationExportConfigurationResponse {
		configuration?: ClassificationExportConfiguration;
	}
	export interface PutClassificationExportConfigurationResponseFormProperties {
	}
	export function CreatePutClassificationExportConfigurationResponseFormGroup() {
		return new FormGroup<PutClassificationExportConfigurationResponseFormProperties>({
		});

	}

	export interface PutFindingsPublicationConfigurationResponse {
	}
	export interface PutFindingsPublicationConfigurationResponseFormProperties {
	}
	export function CreatePutFindingsPublicationConfigurationResponseFormGroup() {
		return new FormGroup<PutFindingsPublicationConfigurationResponseFormProperties>({
		});

	}

	export interface SearchResourcesResponse {
		matchingResources?: Array<MatchingResource>;
		nextToken?: string;
	}
	export interface SearchResourcesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchResourcesResponseFormGroup() {
		return new FormGroup<SearchResourcesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides statistical data and other information about an Amazon Web Services resource that Amazon Macie monitors and analyzes for your account. */
	export interface MatchingResource {
		matchingBucket?: MatchingBucket;
	}

	/** Provides statistical data and other information about an Amazon Web Services resource that Amazon Macie monitors and analyzes for your account. */
	export interface MatchingResourceFormProperties {
	}
	export function CreateMatchingResourceFormGroup() {
		return new FormGroup<MatchingResourceFormProperties>({
		});

	}


	/** <p>Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes for your account. By default, object count and storage size values include data for object parts that are the result of incomplete multipart uploads. For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/monitoring-s3-how-it-works.html">How Macie monitors Amazon S3 data security</a> in the <i>Amazon Macie User Guide</i>.</p> <p>If an error occurs when Macie attempts to retrieve and process information about the bucket or the bucket's objects, the value for most of these properties is null. Key exceptions are accountId and bucketName. To identify the cause of the error, refer to the errorCode and errorMessage values.</p> */
	export interface MatchingBucket {
		accountId?: string;
		bucketName?: string;
		classifiableObjectCount?: number | null;
		classifiableSizeInBytes?: number | null;
		errorCode?: BucketMetadataErrorCode;
		errorMessage?: string;
		jobDetails?: JobDetails;
		lastAutomatedDiscoveryTime?: Date;
		objectCount?: number | null;
		objectCountByEncryptionType?: ObjectCountByEncryptionType;
		sensitivityScore?: number | null;
		sizeInBytes?: number | null;
		sizeInBytesCompressed?: number | null;
		unclassifiableObjectCount?: ObjectLevelStatistics;
		unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
	}

	/** <p>Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes for your account. By default, object count and storage size values include data for object parts that are the result of incomplete multipart uploads. For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/monitoring-s3-how-it-works.html">How Macie monitors Amazon S3 data security</a> in the <i>Amazon Macie User Guide</i>.</p> <p>If an error occurs when Macie attempts to retrieve and process information about the bucket or the bucket's objects, the value for most of these properties is null. Key exceptions are accountId and bucketName. To identify the cause of the error, refer to the errorCode and errorMessage values.</p> */
	export interface MatchingBucketFormProperties {
		accountId: FormControl<string | null | undefined>,
		bucketName: FormControl<string | null | undefined>,
		classifiableObjectCount: FormControl<number | null | undefined>,
		classifiableSizeInBytes: FormControl<number | null | undefined>,
		errorCode: FormControl<BucketMetadataErrorCode | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
		lastAutomatedDiscoveryTime: FormControl<Date | null | undefined>,
		objectCount: FormControl<number | null | undefined>,
		sensitivityScore: FormControl<number | null | undefined>,
		sizeInBytes: FormControl<number | null | undefined>,
		sizeInBytesCompressed: FormControl<number | null | undefined>,
	}
	export function CreateMatchingBucketFormGroup() {
		return new FormGroup<MatchingBucketFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			bucketName: new FormControl<string | null | undefined>(undefined),
			classifiableObjectCount: new FormControl<number | null | undefined>(undefined),
			classifiableSizeInBytes: new FormControl<number | null | undefined>(undefined),
			errorCode: new FormControl<BucketMetadataErrorCode | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			lastAutomatedDiscoveryTime: new FormControl<Date | null | undefined>(undefined),
			objectCount: new FormControl<number | null | undefined>(undefined),
			sensitivityScore: new FormControl<number | null | undefined>(undefined),
			sizeInBytes: new FormControl<number | null | undefined>(undefined),
			sizeInBytesCompressed: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies property- and tag-based conditions that define filter criteria for including or excluding Amazon Web Services resources from the query results. */
	export interface SearchResourcesCriteriaBlock {
		and?: Array<SearchResourcesCriteria>;
	}

	/** Specifies property- and tag-based conditions that define filter criteria for including or excluding Amazon Web Services resources from the query results. */
	export interface SearchResourcesCriteriaBlockFormProperties {
	}
	export function CreateSearchResourcesCriteriaBlockFormGroup() {
		return new FormGroup<SearchResourcesCriteriaBlockFormProperties>({
		});

	}


	/** Specifies a property- or tag-based filter condition for including or excluding Amazon Web Services resources from the query results. */
	export interface SearchResourcesCriteria {
		simpleCriterion?: SearchResourcesSimpleCriterion;
		tagCriterion?: SearchResourcesTagCriterion;
	}

	/** Specifies a property- or tag-based filter condition for including or excluding Amazon Web Services resources from the query results. */
	export interface SearchResourcesCriteriaFormProperties {
	}
	export function CreateSearchResourcesCriteriaFormGroup() {
		return new FormGroup<SearchResourcesCriteriaFormProperties>({
		});

	}


	/** Specifies a property-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results. */
	export interface SearchResourcesSimpleCriterion {
		comparator?: SearchResourcesComparator;
		key?: SimpleCriterionKeyForJob;
		values?: Array<string>;
	}

	/** Specifies a property-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results. */
	export interface SearchResourcesSimpleCriterionFormProperties {
		comparator: FormControl<SearchResourcesComparator | null | undefined>,
		key: FormControl<SimpleCriterionKeyForJob | null | undefined>,
	}
	export function CreateSearchResourcesSimpleCriterionFormGroup() {
		return new FormGroup<SearchResourcesSimpleCriterionFormProperties>({
			comparator: new FormControl<SearchResourcesComparator | null | undefined>(undefined),
			key: new FormControl<SimpleCriterionKeyForJob | null | undefined>(undefined),
		});

	}


	/** The operator to use in a condition that filters the results of a query. Valid values are: */
	export enum SearchResourcesComparator { EQ = 0, NE = 1 }


	/** Specifies a tag-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results. */
	export interface SearchResourcesTagCriterion {
		comparator?: SearchResourcesComparator;
		tagValues?: Array<SearchResourcesTagCriterionPair>;
	}

	/** Specifies a tag-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results. */
	export interface SearchResourcesTagCriterionFormProperties {
		comparator: FormControl<SearchResourcesComparator | null | undefined>,
	}
	export function CreateSearchResourcesTagCriterionFormGroup() {
		return new FormGroup<SearchResourcesTagCriterionFormProperties>({
			comparator: new FormControl<SearchResourcesComparator | null | undefined>(undefined),
		});

	}


	/** Specifies a tag key, a tag value, or a tag key and value (as a pair) to use in a tag-based filter condition for a query. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based filter conditions. */
	export interface SearchResourcesTagCriterionPair {
		key?: string;
		value?: string;
	}

	/** Specifies a tag key, a tag value, or a tag key and value (as a pair) to use in a tag-based filter condition for a query. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based filter conditions. */
	export interface SearchResourcesTagCriterionPairFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateSearchResourcesTagCriterionPairFormGroup() {
		return new FormGroup<SearchResourcesTagCriterionPairFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The property to sort the query results by. Valid values are: */
	export enum SearchResourcesSortAttributeName { ACCOUNT_ID = 0, RESOURCE_NAME = 1, S3_CLASSIFIABLE_OBJECT_COUNT = 2, S3_CLASSIFIABLE_SIZE_IN_BYTES = 3 }

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

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateAllowListResponse {
		arn?: string;
		id?: string;
	}
	export interface UpdateAllowListResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAllowListResponseFormGroup() {
		return new FormGroup<UpdateAllowListResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAutomatedDiscoveryConfigurationResponse {
	}
	export interface UpdateAutomatedDiscoveryConfigurationResponseFormProperties {
	}
	export function CreateUpdateAutomatedDiscoveryConfigurationResponseFormGroup() {
		return new FormGroup<UpdateAutomatedDiscoveryConfigurationResponseFormProperties>({
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

	export interface UpdateClassificationScopeResponse {
	}
	export interface UpdateClassificationScopeResponseFormProperties {
	}
	export function CreateUpdateClassificationScopeResponseFormGroup() {
		return new FormGroup<UpdateClassificationScopeResponseFormProperties>({
		});

	}


	/** Specifies S3 buckets to add or remove from the exclusion list defined by the classification scope for an Amazon Macie account. */
	export interface S3ClassificationScopeExclusionUpdate {

		/** Required */
		bucketNames: Array<string>;

		/** Required */
		operation: ClassificationScopeUpdateOperation;
	}

	/** Specifies S3 buckets to add or remove from the exclusion list defined by the classification scope for an Amazon Macie account. */
	export interface S3ClassificationScopeExclusionUpdateFormProperties {

		/** Required */
		operation: FormControl<ClassificationScopeUpdateOperation | null | undefined>,
	}
	export function CreateS3ClassificationScopeExclusionUpdateFormGroup() {
		return new FormGroup<S3ClassificationScopeExclusionUpdateFormProperties>({
			operation: new FormControl<ClassificationScopeUpdateOperation | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies how to apply changes to the S3 bucket exclusion list defined by the classification scope for an Amazon Macie account. Valid values are: */
	export enum ClassificationScopeUpdateOperation { ADD = 0, REPLACE = 1, REMOVE = 2 }

	export interface UpdateFindingsFilterResponse {
		arn?: string;
		id?: string;
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

	export interface UpdateResourceProfileResponse {
	}
	export interface UpdateResourceProfileResponseFormProperties {
	}
	export function CreateUpdateResourceProfileResponseFormGroup() {
		return new FormGroup<UpdateResourceProfileResponseFormProperties>({
		});

	}

	export interface UpdateResourceProfileDetectionsResponse {
	}
	export interface UpdateResourceProfileDetectionsResponseFormProperties {
	}
	export function CreateUpdateResourceProfileDetectionsResponseFormGroup() {
		return new FormGroup<UpdateResourceProfileDetectionsResponseFormProperties>({
		});

	}


	/** Specifies a custom data identifier or managed data identifier that detected a type of sensitive data to start excluding or including in an S3 bucket's sensitivity score. */
	export interface SuppressDataIdentifier {
		id?: string;
		type?: DataIdentifierType;
	}

	/** Specifies a custom data identifier or managed data identifier that detected a type of sensitive data to start excluding or including in an S3 bucket's sensitivity score. */
	export interface SuppressDataIdentifierFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<DataIdentifierType | null | undefined>,
	}
	export function CreateSuppressDataIdentifierFormGroup() {
		return new FormGroup<SuppressDataIdentifierFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DataIdentifierType | null | undefined>(undefined),
		});

	}

	export interface UpdateRevealConfigurationResponse {
		configuration?: RevealConfiguration;
	}
	export interface UpdateRevealConfigurationResponseFormProperties {
	}
	export function CreateUpdateRevealConfigurationResponseFormGroup() {
		return new FormGroup<UpdateRevealConfigurationResponseFormProperties>({
		});

	}


	/** The status of the configuration for retrieving occurrences of sensitive data reported by findings. Valid values are: */
	export enum RevealStatus { ENABLED = 0, DISABLED = 1 }

	export interface UpdateSensitivityInspectionTemplateResponse {
	}
	export interface UpdateSensitivityInspectionTemplateResponseFormProperties {
	}
	export function CreateUpdateSensitivityInspectionTemplateResponseFormGroup() {
		return new FormGroup<UpdateSensitivityInspectionTemplateResponseFormProperties>({
		});

	}

	export interface AcceptInvitationRequest {
		administratorAccountId?: string;

		/** Required */
		invitationId: string;
		masterAccount?: string;
	}
	export interface AcceptInvitationRequestFormProperties {
		administratorAccountId: FormControl<string | null | undefined>,

		/** Required */
		invitationId: FormControl<string | null | undefined>,
		masterAccount: FormControl<string | null | undefined>,
	}
	export function CreateAcceptInvitationRequestFormGroup() {
		return new FormGroup<AcceptInvitationRequestFormProperties>({
			administratorAccountId: new FormControl<string | null | undefined>(undefined),
			invitationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			masterAccount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the details of an account to associate with an Amazon Macie administrator account. */
	export interface AccountDetail {

		/** Required */
		accountId: string;

		/** Required */
		email: string;
	}

	/** Specifies the details of an account to associate with an Amazon Macie administrator account. */
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

	export interface BatchGetCustomDataIdentifiersRequest {
		ids?: Array<string>;
	}
	export interface BatchGetCustomDataIdentifiersRequestFormProperties {
	}
	export function CreateBatchGetCustomDataIdentifiersRequestFormGroup() {
		return new FormGroup<BatchGetCustomDataIdentifiersRequestFormProperties>({
		});

	}


	/** Specifies, as a map, one or more property-based conditions that filter the results of a query for information about S3 buckets. */
	export interface BucketCriteria {
	}

	/** Specifies, as a map, one or more property-based conditions that filter the results of a query for information about S3 buckets. */
	export interface BucketCriteriaFormProperties {
	}
	export function CreateBucketCriteriaFormGroup() {
		return new FormGroup<BucketCriteriaFormProperties>({
		});

	}


	/** Specifies criteria for sorting the results of a query for information about S3 buckets. */
	export interface BucketSortCriteria {
		attributeName?: string;
		orderBy?: OrderBy;
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

	export interface CreateAllowListRequest {

		/** Required */
		clientToken: string;

		/** Required */
		criteria: AllowListCriteria;
		description?: string;

		/** Required */
		name: string;
		tags?: TagMap;
	}
	export interface CreateAllowListRequestFormProperties {

		/** Required */
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateAllowListRequestFormGroup() {
		return new FormGroup<CreateAllowListRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateClassificationJobRequest {
		allowListIds?: Array<string>;

		/** Required */
		clientToken: string;
		customDataIdentifierIds?: Array<string>;
		description?: string;
		initialRun?: boolean | null;

		/** Required */
		jobType: JobType;
		managedDataIdentifierIds?: Array<string>;
		managedDataIdentifierSelector?: ManagedDataIdentifierSelector;

		/** Required */
		name: string;

		/** Required */
		s3JobDefinition: S3JobDefinition;
		samplingPercentage?: number | null;
		scheduleFrequency?: JobScheduleFrequency;
		tags?: TagMap;
	}
	export interface CreateClassificationJobRequestFormProperties {

		/** Required */
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		initialRun: FormControl<boolean | null | undefined>,

		/** Required */
		jobType: FormControl<JobType | null | undefined>,
		managedDataIdentifierSelector: FormControl<ManagedDataIdentifierSelector | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		samplingPercentage: FormControl<number | null | undefined>,
	}
	export function CreateCreateClassificationJobRequestFormGroup() {
		return new FormGroup<CreateClassificationJobRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			initialRun: new FormControl<boolean | null | undefined>(undefined),
			jobType: new FormControl<JobType | null | undefined>(undefined, [Validators.required]),
			managedDataIdentifierSelector: new FormControl<ManagedDataIdentifierSelector | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			samplingPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateCustomDataIdentifierRequest {
		clientToken?: string;
		description?: string;
		ignoreWords?: Array<string>;
		keywords?: Array<string>;
		maximumMatchDistance?: number | null;

		/** Required */
		name: string;

		/** Required */
		regex: string;
		severityLevels?: Array<SeverityLevel>;
		tags?: TagMap;
	}
	export interface CreateCustomDataIdentifierRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		maximumMatchDistance: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		regex: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomDataIdentifierRequestFormGroup() {
		return new FormGroup<CreateCustomDataIdentifierRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			maximumMatchDistance: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			regex: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateFindingsFilterRequest {

		/** Required */
		action: FindingsFilterAction;
		clientToken?: string;
		description?: string;

		/** Required */
		findingCriteria: FindingCriteria;

		/** Required */
		name: string;
		position?: number | null;
		tags?: TagMap;
	}
	export interface CreateFindingsFilterRequestFormProperties {

		/** Required */
		action: FormControl<FindingsFilterAction | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		position: FormControl<number | null | undefined>,
	}
	export function CreateCreateFindingsFilterRequestFormGroup() {
		return new FormGroup<CreateFindingsFilterRequestFormProperties>({
			action: new FormControl<FindingsFilterAction | null | undefined>(undefined, [Validators.required]),
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
		message?: string;
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

		/** Required */
		account: AccountDetail;
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


	/** Specifies the operator to use in a property-based condition that filters the results of a query for findings. For detailed information and examples of each operator, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-filter-basics.html">Fundamentals of filtering findings</a> in the <i>Amazon Macie User Guide</i>. */
	export interface CriterionAdditionalProperties {
		eq?: Array<string>;
		eqExactMatch?: Array<string>;
		gt?: number | null;
		gte?: number | null;
		lt?: number | null;
		lte?: number | null;
		neq?: Array<string>;
	}

	/** Specifies the operator to use in a property-based condition that filters the results of a query for findings. For detailed information and examples of each operator, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-filter-basics.html">Fundamentals of filtering findings</a> in the <i>Amazon Macie User Guide</i>. */
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

	export interface DeleteAllowListRequest {
	}
	export interface DeleteAllowListRequestFormProperties {
	}
	export function CreateDeleteAllowListRequestFormGroup() {
		return new FormGroup<DeleteAllowListRequestFormProperties>({
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
		criteria?: BucketCriteria;
		maxResults?: number | null;
		nextToken?: string;
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

	export interface DescribeOrganizationConfigurationRequest {
	}
	export interface DescribeOrganizationConfigurationRequestFormProperties {
	}
	export function CreateDescribeOrganizationConfigurationRequestFormGroup() {
		return new FormGroup<DescribeOrganizationConfigurationRequestFormProperties>({
		});

	}


	/** Specifies 1-10 occurrences of a specific type of sensitive data reported by a finding. */
	export interface DetectedDataDetails {

		/** Required */
		value: string;
	}

	/** Specifies 1-10 occurrences of a specific type of sensitive data reported by a finding. */
	export interface DetectedDataDetailsFormProperties {

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDetectedDataDetailsFormGroup() {
		return new FormGroup<DetectedDataDetailsFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DisassociateFromAdministratorAccountRequest {
	}
	export interface DisassociateFromAdministratorAccountRequestFormProperties {
	}
	export function CreateDisassociateFromAdministratorAccountRequestFormGroup() {
		return new FormGroup<DisassociateFromAdministratorAccountRequestFormProperties>({
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

	export interface EnableMacieRequest {
		clientToken?: string;
		findingPublishingFrequency?: FindingPublishingFrequency;
		status?: MacieStatus;
	}
	export interface EnableMacieRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		findingPublishingFrequency: FormControl<FindingPublishingFrequency | null | undefined>,
		status: FormControl<MacieStatus | null | undefined>,
	}
	export function CreateEnableMacieRequestFormGroup() {
		return new FormGroup<EnableMacieRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			findingPublishingFrequency: new FormControl<FindingPublishingFrequency | null | undefined>(undefined),
			status: new FormControl<MacieStatus | null | undefined>(undefined),
		});

	}

	export interface EnableOrganizationAdminAccountRequest {

		/** Required */
		adminAccountId: string;
		clientToken?: string;
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


	/** Specifies criteria for sorting the results of a query that retrieves aggregated statistical data about findings. */
	export interface FindingStatisticsSortCriteria {
		attributeName?: FindingStatisticsSortAttributeName;
		orderBy?: OrderBy;
	}

	/** Specifies criteria for sorting the results of a query that retrieves aggregated statistical data about findings. */
	export interface FindingStatisticsSortCriteriaFormProperties {
		attributeName: FormControl<FindingStatisticsSortAttributeName | null | undefined>,
		orderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateFindingStatisticsSortCriteriaFormGroup() {
		return new FormGroup<FindingStatisticsSortCriteriaFormProperties>({
			attributeName: new FormControl<FindingStatisticsSortAttributeName | null | undefined>(undefined),
			orderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}

	export interface GetAdministratorAccountRequest {
	}
	export interface GetAdministratorAccountRequestFormProperties {
	}
	export function CreateGetAdministratorAccountRequestFormGroup() {
		return new FormGroup<GetAdministratorAccountRequestFormProperties>({
		});

	}

	export interface GetAllowListRequest {
	}
	export interface GetAllowListRequestFormProperties {
	}
	export function CreateGetAllowListRequestFormGroup() {
		return new FormGroup<GetAllowListRequestFormProperties>({
		});

	}

	export interface GetAutomatedDiscoveryConfigurationRequest {
	}
	export interface GetAutomatedDiscoveryConfigurationRequestFormProperties {
	}
	export function CreateGetAutomatedDiscoveryConfigurationRequestFormGroup() {
		return new FormGroup<GetAutomatedDiscoveryConfigurationRequestFormProperties>({
		});

	}

	export interface GetBucketStatisticsRequest {
		accountId?: string;
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

	export interface GetClassificationScopeRequest {
	}
	export interface GetClassificationScopeRequestFormProperties {
	}
	export function CreateGetClassificationScopeRequestFormGroup() {
		return new FormGroup<GetClassificationScopeRequestFormProperties>({
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

	export enum GroupBy { 'resourcesAffected.s3Bucket.name' = 0, type = 1, 'classificationDetails.jobId' = 2, 'severity.description' = 3 }

	export interface GetFindingStatisticsRequest {
		findingCriteria?: FindingCriteria;

		/** Required */
		groupBy: GroupBy;
		size?: number | null;
		sortCriteria?: FindingStatisticsSortCriteria;
	}
	export interface GetFindingStatisticsRequestFormProperties {

		/** Required */
		groupBy: FormControl<GroupBy | null | undefined>,
		size: FormControl<number | null | undefined>,
	}
	export function CreateGetFindingStatisticsRequestFormGroup() {
		return new FormGroup<GetFindingStatisticsRequestFormProperties>({
			groupBy: new FormControl<GroupBy | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetFindingsFilterRequest {
	}
	export interface GetFindingsFilterRequestFormProperties {
	}
	export function CreateGetFindingsFilterRequestFormGroup() {
		return new FormGroup<GetFindingsFilterRequestFormProperties>({
		});

	}

	export interface GetFindingsPublicationConfigurationRequest {
	}
	export interface GetFindingsPublicationConfigurationRequestFormProperties {
	}
	export function CreateGetFindingsPublicationConfigurationRequestFormGroup() {
		return new FormGroup<GetFindingsPublicationConfigurationRequestFormProperties>({
		});

	}


	/** Specifies criteria for sorting the results of a request for findings. */
	export interface SortCriteria {
		attributeName?: string;
		orderBy?: OrderBy;
	}

	/** Specifies criteria for sorting the results of a request for findings. */
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

	export interface GetResourceProfileRequest {
	}
	export interface GetResourceProfileRequestFormProperties {
	}
	export function CreateGetResourceProfileRequestFormGroup() {
		return new FormGroup<GetResourceProfileRequestFormProperties>({
		});

	}

	export interface GetRevealConfigurationRequest {
	}
	export interface GetRevealConfigurationRequestFormProperties {
	}
	export function CreateGetRevealConfigurationRequestFormGroup() {
		return new FormGroup<GetRevealConfigurationRequestFormProperties>({
		});

	}

	export interface GetSensitiveDataOccurrencesAvailabilityRequest {
	}
	export interface GetSensitiveDataOccurrencesAvailabilityRequestFormProperties {
	}
	export function CreateGetSensitiveDataOccurrencesAvailabilityRequestFormGroup() {
		return new FormGroup<GetSensitiveDataOccurrencesAvailabilityRequestFormProperties>({
		});

	}

	export interface GetSensitiveDataOccurrencesRequest {
	}
	export interface GetSensitiveDataOccurrencesRequestFormProperties {
	}
	export function CreateGetSensitiveDataOccurrencesRequestFormGroup() {
		return new FormGroup<GetSensitiveDataOccurrencesRequestFormProperties>({
		});

	}

	export interface GetSensitivityInspectionTemplateRequest {
	}
	export interface GetSensitivityInspectionTemplateRequestFormProperties {
	}
	export function CreateGetSensitivityInspectionTemplateRequestFormGroup() {
		return new FormGroup<GetSensitivityInspectionTemplateRequestFormProperties>({
		});

	}


	/** Specifies criteria for sorting the results of a query for Amazon Macie account quotas and usage data. */
	export interface UsageStatisticsSortBy {
		key?: UsageStatisticsSortKey;
		orderBy?: OrderBy;
	}

	/** Specifies criteria for sorting the results of a query for Amazon Macie account quotas and usage data. */
	export interface UsageStatisticsSortByFormProperties {
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
		nextToken?: string;
		sortBy?: UsageStatisticsSortBy;
		timeRange?: TimeRange;
	}
	export interface GetUsageStatisticsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		timeRange: FormControl<TimeRange | null | undefined>,
	}
	export function CreateGetUsageStatisticsRequestFormGroup() {
		return new FormGroup<GetUsageStatisticsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			timeRange: new FormControl<TimeRange | null | undefined>(undefined),
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

	export enum IsDefinedInJob { TRUE = 0, FALSE = 1, UNKNOWN = 2 }

	export enum IsMonitoredByJob { TRUE = 0, FALSE = 1, UNKNOWN = 2 }

	export interface ListAllowListsRequest {
	}
	export interface ListAllowListsRequestFormProperties {
	}
	export function CreateListAllowListsRequestFormGroup() {
		return new FormGroup<ListAllowListsRequestFormProperties>({
		});

	}


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
		attributeName?: ListJobsSortAttributeName;
		orderBy?: OrderBy;
	}

	/** Specifies criteria for sorting the results of a request for information about classification jobs. */
	export interface ListJobsSortCriteriaFormProperties {
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
		filterCriteria?: ListJobsFilterCriteria;
		maxResults?: number | null;
		nextToken?: string;
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

	export interface ListClassificationScopesRequest {
	}
	export interface ListClassificationScopesRequestFormProperties {
	}
	export function CreateListClassificationScopesRequestFormGroup() {
		return new FormGroup<ListClassificationScopesRequestFormProperties>({
		});

	}

	export interface ListCustomDataIdentifiersRequest {
		maxResults?: number | null;
		nextToken?: string;
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
		findingCriteria?: FindingCriteria;
		maxResults?: number | null;
		nextToken?: string;
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

	export interface ListManagedDataIdentifiersRequest {
		nextToken?: string;
	}
	export interface ListManagedDataIdentifiersRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListManagedDataIdentifiersRequestFormGroup() {
		return new FormGroup<ListManagedDataIdentifiersRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

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

	export interface ListResourceProfileArtifactsRequest {
	}
	export interface ListResourceProfileArtifactsRequestFormProperties {
	}
	export function CreateListResourceProfileArtifactsRequestFormGroup() {
		return new FormGroup<ListResourceProfileArtifactsRequestFormProperties>({
		});

	}

	export interface ListResourceProfileDetectionsRequest {
	}
	export interface ListResourceProfileDetectionsRequestFormProperties {
	}
	export function CreateListResourceProfileDetectionsRequestFormGroup() {
		return new FormGroup<ListResourceProfileDetectionsRequestFormProperties>({
		});

	}

	export interface ListSensitivityInspectionTemplatesRequest {
	}
	export interface ListSensitivityInspectionTemplatesRequestFormProperties {
	}
	export function CreateListSensitivityInspectionTemplatesRequestFormGroup() {
		return new FormGroup<ListSensitivityInspectionTemplatesRequestFormProperties>({
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

		/** Required */
		configuration: ClassificationExportConfiguration;
	}
	export interface PutClassificationExportConfigurationRequestFormProperties {
	}
	export function CreatePutClassificationExportConfigurationRequestFormGroup() {
		return new FormGroup<PutClassificationExportConfigurationRequestFormProperties>({
		});

	}

	export interface PutFindingsPublicationConfigurationRequest {
		clientToken?: string;
		securityHubConfiguration?: SecurityHubConfiguration;
	}
	export interface PutFindingsPublicationConfigurationRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreatePutFindingsPublicationConfigurationRequestFormGroup() {
		return new FormGroup<PutFindingsPublicationConfigurationRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies changes to the list of S3 buckets that are excluded from automated sensitive data discovery for an Amazon Macie account. */
	export interface S3ClassificationScopeUpdate {

		/** Required */
		excludes: S3ClassificationScopeExclusionUpdate;
	}

	/** Specifies changes to the list of S3 buckets that are excluded from automated sensitive data discovery for an Amazon Macie account. */
	export interface S3ClassificationScopeUpdateFormProperties {
	}
	export function CreateS3ClassificationScopeUpdateFormGroup() {
		return new FormGroup<S3ClassificationScopeUpdateFormProperties>({
		});

	}


	/** Specifies property- and tag-based conditions that define filter criteria for including or excluding S3 buckets from the query results. Exclude conditions take precedence over include conditions. */
	export interface SearchResourcesBucketCriteria {
		excludes?: SearchResourcesCriteriaBlock;
		includes?: SearchResourcesCriteriaBlock;
	}

	/** Specifies property- and tag-based conditions that define filter criteria for including or excluding S3 buckets from the query results. Exclude conditions take precedence over include conditions. */
	export interface SearchResourcesBucketCriteriaFormProperties {
	}
	export function CreateSearchResourcesBucketCriteriaFormGroup() {
		return new FormGroup<SearchResourcesBucketCriteriaFormProperties>({
		});

	}


	/** Specifies criteria for sorting the results of a query for information about Amazon Web Services resources that Amazon Macie monitors and analyzes. */
	export interface SearchResourcesSortCriteria {
		attributeName?: SearchResourcesSortAttributeName;
		orderBy?: OrderBy;
	}

	/** Specifies criteria for sorting the results of a query for information about Amazon Web Services resources that Amazon Macie monitors and analyzes. */
	export interface SearchResourcesSortCriteriaFormProperties {
		attributeName: FormControl<SearchResourcesSortAttributeName | null | undefined>,
		orderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateSearchResourcesSortCriteriaFormGroup() {
		return new FormGroup<SearchResourcesSortCriteriaFormProperties>({
			attributeName: new FormControl<SearchResourcesSortAttributeName | null | undefined>(undefined),
			orderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}

	export interface SearchResourcesRequest {
		bucketCriteria?: SearchResourcesBucketCriteria;
		maxResults?: number | null;
		nextToken?: string;
		sortCriteria?: SearchResourcesSortCriteria;
	}
	export interface SearchResourcesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchResourcesRequestFormGroup() {
		return new FormGroup<SearchResourcesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The property to use in a condition that filters the query results. Valid values are: */
	export enum SearchResourcesSimpleCriterionKey { ACCOUNT_ID = 0, S3_BUCKET_NAME = 1, S3_BUCKET_EFFECTIVE_PERMISSION = 2, S3_BUCKET_SHARED_ACCESS = 3 }

	export interface TagResourceRequest {

		/** Required */
		tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

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

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateAllowListRequest {

		/** Required */
		criteria: AllowListCriteria;
		description?: string;

		/** Required */
		name: string;
	}
	export interface UpdateAllowListRequestFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAllowListRequestFormGroup() {
		return new FormGroup<UpdateAllowListRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAutomatedDiscoveryConfigurationRequest {

		/** Required */
		status: AutomatedDiscoveryStatus;
	}
	export interface UpdateAutomatedDiscoveryConfigurationRequestFormProperties {

		/** Required */
		status: FormControl<AutomatedDiscoveryStatus | null | undefined>,
	}
	export function CreateUpdateAutomatedDiscoveryConfigurationRequestFormGroup() {
		return new FormGroup<UpdateAutomatedDiscoveryConfigurationRequestFormProperties>({
			status: new FormControl<AutomatedDiscoveryStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateClassificationJobRequest {

		/** Required */
		jobStatus: JobStatus;
	}
	export interface UpdateClassificationJobRequestFormProperties {

		/** Required */
		jobStatus: FormControl<JobStatus | null | undefined>,
	}
	export function CreateUpdateClassificationJobRequestFormGroup() {
		return new FormGroup<UpdateClassificationJobRequestFormProperties>({
			jobStatus: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateClassificationScopeRequest {
		s3?: S3ClassificationScopeUpdate;
	}
	export interface UpdateClassificationScopeRequestFormProperties {
	}
	export function CreateUpdateClassificationScopeRequestFormGroup() {
		return new FormGroup<UpdateClassificationScopeRequestFormProperties>({
		});

	}

	export interface UpdateFindingsFilterRequest {
		action?: FindingsFilterAction;
		clientToken?: string;
		description?: string;
		findingCriteria?: FindingCriteria;
		name?: string;
		position?: number | null;
	}
	export interface UpdateFindingsFilterRequestFormProperties {
		action: FormControl<FindingsFilterAction | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		position: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFindingsFilterRequestFormGroup() {
		return new FormGroup<UpdateFindingsFilterRequestFormProperties>({
			action: new FormControl<FindingsFilterAction | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateMacieSessionRequest {
		findingPublishingFrequency?: FindingPublishingFrequency;
		status?: MacieStatus;
	}
	export interface UpdateMacieSessionRequestFormProperties {
		findingPublishingFrequency: FormControl<FindingPublishingFrequency | null | undefined>,
		status: FormControl<MacieStatus | null | undefined>,
	}
	export function CreateUpdateMacieSessionRequestFormGroup() {
		return new FormGroup<UpdateMacieSessionRequestFormProperties>({
			findingPublishingFrequency: new FormControl<FindingPublishingFrequency | null | undefined>(undefined),
			status: new FormControl<MacieStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateMemberSessionRequest {

		/** Required */
		status: MacieStatus;
	}
	export interface UpdateMemberSessionRequestFormProperties {

		/** Required */
		status: FormControl<MacieStatus | null | undefined>,
	}
	export function CreateUpdateMemberSessionRequestFormGroup() {
		return new FormGroup<UpdateMemberSessionRequestFormProperties>({
			status: new FormControl<MacieStatus | null | undefined>(undefined, [Validators.required]),
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

	export interface UpdateResourceProfileDetectionsRequest {
		suppressDataIdentifiers?: Array<SuppressDataIdentifier>;
	}
	export interface UpdateResourceProfileDetectionsRequestFormProperties {
	}
	export function CreateUpdateResourceProfileDetectionsRequestFormGroup() {
		return new FormGroup<UpdateResourceProfileDetectionsRequestFormProperties>({
		});

	}

	export interface UpdateResourceProfileRequest {
		sensitivityScoreOverride?: number | null;
	}
	export interface UpdateResourceProfileRequestFormProperties {
		sensitivityScoreOverride: FormControl<number | null | undefined>,
	}
	export function CreateUpdateResourceProfileRequestFormGroup() {
		return new FormGroup<UpdateResourceProfileRequestFormProperties>({
			sensitivityScoreOverride: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateRevealConfigurationRequest {

		/** Required */
		configuration: RevealConfiguration;
	}
	export interface UpdateRevealConfigurationRequestFormProperties {
	}
	export function CreateUpdateRevealConfigurationRequestFormGroup() {
		return new FormGroup<UpdateRevealConfigurationRequestFormProperties>({
		});

	}

	export interface UpdateSensitivityInspectionTemplateRequest {
		description?: string;
		excludes?: SensitivityInspectionTemplateExcludes;
		includes?: SensitivityInspectionTemplateIncludes;
	}
	export interface UpdateSensitivityInspectionTemplateRequestFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSensitivityInspectionTemplateRequestFormGroup() {
		return new FormGroup<UpdateSensitivityInspectionTemplateRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

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
		 * Retrieves information about one or more custom data identifiers.
		 * Post custom-data-identifiers/get
		 * @return {BatchGetCustomDataIdentifiersResponse} Success
		 */
		BatchGetCustomDataIdentifiers(requestBody: BatchGetCustomDataIdentifiersPostBody): Observable<BatchGetCustomDataIdentifiersResponse> {
			return this.http.post<BatchGetCustomDataIdentifiersResponse>(this.baseUri + 'custom-data-identifiers/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates and defines the settings for an allow list.
		 * Post allow-lists
		 * @return {CreateAllowListResponse} Success
		 */
		CreateAllowList(requestBody: CreateAllowListPostBody): Observable<CreateAllowListResponse> {
			return this.http.post<CreateAllowListResponse>(this.baseUri + 'allow-lists', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a subset of information about all the allow lists for an account.
		 * Get allow-lists
		 * @param {number} maxResults The maximum number of items to include in each page of a paginated response.
		 * @param {string} nextToken The nextToken string that specifies which page of results to return in a paginated response.
		 * @return {ListAllowListsResponse} Success
		 */
		ListAllowLists(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListAllowListsResponse> {
			return this.http.get<ListAllowListsResponse>(this.baseUri + 'allow-lists?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates and defines the settings for a classification job.
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
		 * Sends an Amazon Macie membership invitation to one or more accounts.
		 * Post invitations
		 * @return {CreateInvitationsResponse} Success
		 */
		CreateInvitations(requestBody: CreateInvitationsPostBody): Observable<CreateInvitationsResponse> {
			return this.http.post<CreateInvitationsResponse>(this.baseUri + 'invitations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the Amazon Macie membership invitations that were received by an account.
		 * Get invitations
		 * @param {number} maxResults The maximum number of items to include in each page of a paginated response.
		 * @param {string} nextToken The nextToken string that specifies which page of results to return in a paginated response.
		 * @return {ListInvitationsResponse} Success
		 */
		ListInvitations(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListInvitationsResponse> {
			return this.http.get<ListInvitationsResponse>(this.baseUri + 'invitations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Associates an account with an Amazon Macie administrator account.
		 * Post members
		 * @return {CreateMemberResponse} Success
		 */
		CreateMember(requestBody: CreateMemberPostBody): Observable<CreateMemberResponse> {
			return this.http.post<CreateMemberResponse>(this.baseUri + 'members', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the accounts that are associated with an Amazon Macie administrator account.
		 * Get members
		 * @param {number} maxResults The maximum number of items to include in each page of a paginated response.
		 * @param {string} nextToken The nextToken string that specifies which page of results to return in a paginated response.
		 * @param {string} onlyAssociated Specifies which accounts to include in the response, based on the status of an account's relationship with the administrator account. By default, the response includes only current member accounts. To include all accounts, set this value to false.
		 * @return {ListMembersResponse} Success
		 */
		ListMembers(maxResults: number | null | undefined, nextToken: string | null | undefined, onlyAssociated: string | null | undefined): Observable<ListMembersResponse> {
			return this.http.get<ListMembersResponse>(this.baseUri + 'members?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&onlyAssociated=' + (onlyAssociated == null ? '' : encodeURIComponent(onlyAssociated)), {});
		}

		/**
		 * Creates sample findings.
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
		 * Deletes an allow list.
		 * Delete allow-lists/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource that the request applies to.
		 * @param {string} ignoreJobChecks <p>Specifies whether to force deletion of the allow list, even if active classification jobs are configured to use the list.</p> <p>When you try to delete an allow list, Amazon Macie checks for classification jobs that use the list and have a status other than COMPLETE or CANCELLED. By default, Macie rejects your request if any jobs meet these criteria. To skip these checks and delete the list, set this value to true. To delete the list only if no active jobs are configured to use it, set this value to false.</p>
		 * @return {DeleteAllowListResponse} Success
		 */
		DeleteAllowList(id: string, ignoreJobChecks: string | null | undefined): Observable<DeleteAllowListResponse> {
			return this.http.delete<DeleteAllowListResponse>(this.baseUri + 'allow-lists/' + (id == null ? '' : encodeURIComponent(id)) + '&ignoreJobChecks=' + (ignoreJobChecks == null ? '' : encodeURIComponent(ignoreJobChecks)), {});
		}

		/**
		 * Retrieves the settings and status of an allow list.
		 * Get allow-lists/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource that the request applies to.
		 * @return {GetAllowListResponse} Success
		 */
		GetAllowList(id: string): Observable<GetAllowListResponse> {
			return this.http.get<GetAllowListResponse>(this.baseUri + 'allow-lists/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Updates the settings for an allow list.
		 * Put allow-lists/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource that the request applies to.
		 * @return {UpdateAllowListResponse} Success
		 */
		UpdateAllowList(id: string, requestBody: UpdateAllowListPutBody): Observable<UpdateAllowListResponse> {
			return this.http.put<UpdateAllowListResponse>(this.baseUri + 'allow-lists/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Soft deletes a custom data identifier.
		 * Delete custom-data-identifiers/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource that the request applies to.
		 * @return {DeleteCustomDataIdentifierResponse} Success
		 */
		DeleteCustomDataIdentifier(id: string): Observable<DeleteCustomDataIdentifierResponse> {
			return this.http.delete<DeleteCustomDataIdentifierResponse>(this.baseUri + 'custom-data-identifiers/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves the criteria and other settings for a custom data identifier.
		 * Get custom-data-identifiers/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource that the request applies to.
		 * @return {GetCustomDataIdentifierResponse} Success
		 */
		GetCustomDataIdentifier(id: string): Observable<GetCustomDataIdentifierResponse> {
			return this.http.get<GetCustomDataIdentifierResponse>(this.baseUri + 'custom-data-identifiers/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Deletes a findings filter.
		 * Delete findingsfilters/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource that the request applies to.
		 * @return {DeleteFindingsFilterResponse} Success
		 */
		DeleteFindingsFilter(id: string): Observable<DeleteFindingsFilterResponse> {
			return this.http.delete<DeleteFindingsFilterResponse>(this.baseUri + 'findingsfilters/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves the criteria and other settings for a findings filter.
		 * Get findingsfilters/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource that the request applies to.
		 * @return {GetFindingsFilterResponse} Success
		 */
		GetFindingsFilter(id: string): Observable<GetFindingsFilterResponse> {
			return this.http.get<GetFindingsFilterResponse>(this.baseUri + 'findingsfilters/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Updates the criteria and other settings for a findings filter.
		 * Patch findingsfilters/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource that the request applies to.
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
		 * Deletes the association between an Amazon Macie administrator account and an account.
		 * Delete members/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource that the request applies to.
		 * @return {DeleteMemberResponse} Success
		 */
		DeleteMember(id: string): Observable<DeleteMemberResponse> {
			return this.http.delete<DeleteMemberResponse>(this.baseUri + 'members/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves information about an account that's associated with an Amazon Macie administrator account.
		 * Get members/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource that the request applies to.
		 * @return {GetMemberResponse} Success
		 */
		GetMember(id: string): Observable<GetMemberResponse> {
			return this.http.get<GetMemberResponse>(this.baseUri + 'members/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes for an account.
		 * Post datasources/s3
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeBucketsResponse} Success
		 */
		DescribeBuckets(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeBucketsPostBody): Observable<DescribeBucketsResponse> {
			return this.http.post<DescribeBucketsResponse>(this.baseUri + 'datasources/s3?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the status and settings for a classification job.
		 * Get jobs/{jobId}
		 * @param {string} jobId The unique identifier for the classification job.
		 * @return {DescribeClassificationJobResponse} Success
		 */
		DescribeClassificationJob(jobId: string): Observable<DescribeClassificationJobResponse> {
			return this.http.get<DescribeClassificationJobResponse>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * Changes the status of a classification job.
		 * Patch jobs/{jobId}
		 * @param {string} jobId The unique identifier for the classification job.
		 * @return {UpdateClassificationJobResponse} Success
		 */
		UpdateClassificationJob(jobId: string, requestBody: UpdateClassificationJobPatchBody): Observable<UpdateClassificationJobResponse> {
			return this.http.patch<UpdateClassificationJobResponse>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the Amazon Macie configuration settings for an organization in Organizations.
		 * Get admin/configuration
		 * @return {DescribeOrganizationConfigurationResponse} Success
		 */
		DescribeOrganizationConfiguration(): Observable<DescribeOrganizationConfigurationResponse> {
			return this.http.get<DescribeOrganizationConfigurationResponse>(this.baseUri + 'admin/configuration', {});
		}

		/**
		 * Updates the Amazon Macie configuration settings for an organization in Organizations.
		 * Patch admin/configuration
		 * @return {UpdateOrganizationConfigurationResponse} Success
		 */
		UpdateOrganizationConfiguration(requestBody: UpdateOrganizationConfigurationPatchBody): Observable<UpdateOrganizationConfigurationResponse> {
			return this.http.patch<UpdateOrganizationConfigurationResponse>(this.baseUri + 'admin/configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables Amazon Macie and deletes all settings and resources for a Macie account.
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
		 * Retrieves the status and configuration settings for an Amazon Macie account.
		 * Get macie
		 * @return {GetMacieSessionResponse} Success
		 */
		GetMacieSession(): Observable<GetMacieSessionResponse> {
			return this.http.get<GetMacieSessionResponse>(this.baseUri + 'macie', {});
		}

		/**
		 * Suspends or re-enables Amazon Macie, or updates the configuration settings for a Macie account.
		 * Patch macie
		 * @return {UpdateMacieSessionResponse} Success
		 */
		UpdateMacieSession(requestBody: UpdateMacieSessionPatchBody): Observable<UpdateMacieSessionResponse> {
			return this.http.patch<UpdateMacieSessionResponse>(this.baseUri + 'macie', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables an account as the delegated Amazon Macie administrator account for an organization in Organizations.
		 * Delete admin#adminAccountId
		 * @param {string} adminAccountId The Amazon Web Services account ID of the delegated Amazon Macie administrator account.
		 * @return {DisableOrganizationAdminAccountResponse} Success
		 */
		DisableOrganizationAdminAccount(adminAccountId: string): Observable<DisableOrganizationAdminAccountResponse> {
			return this.http.delete<DisableOrganizationAdminAccountResponse>(this.baseUri + 'admin#adminAccountId?adminAccountId=' + (adminAccountId == null ? '' : encodeURIComponent(adminAccountId)), {});
		}

		/**
		 * Disassociates a member account from its Amazon Macie administrator account.
		 * Post administrator/disassociate
		 * @return {DisassociateFromAdministratorAccountResponse} Success
		 */
		DisassociateFromAdministratorAccount(): Observable<DisassociateFromAdministratorAccountResponse> {
			return this.http.post<DisassociateFromAdministratorAccountResponse>(this.baseUri + 'administrator/disassociate', null, {});
		}

		/**
		 * (Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the <link  linkend="DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</link> operation.
		 * Post master/disassociate
		 * @return {DisassociateFromMasterAccountResponse} Success
		 */
		DisassociateFromMasterAccount(): Observable<DisassociateFromMasterAccountResponse> {
			return this.http.post<DisassociateFromMasterAccountResponse>(this.baseUri + 'master/disassociate', null, {});
		}

		/**
		 * Disassociates an Amazon Macie administrator account from a member account.
		 * Post members/disassociate/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource that the request applies to.
		 * @return {DisassociateMemberResponse} Success
		 */
		DisassociateMember(id: string): Observable<DisassociateMemberResponse> {
			return this.http.post<DisassociateMemberResponse>(this.baseUri + 'members/disassociate/' + (id == null ? '' : encodeURIComponent(id)), null, {});
		}

		/**
		 * Designates an account as the delegated Amazon Macie administrator account for an organization in Organizations.
		 * Post admin
		 * @return {EnableOrganizationAdminAccountResponse} Success
		 */
		EnableOrganizationAdminAccount(requestBody: EnableOrganizationAdminAccountPostBody): Observable<EnableOrganizationAdminAccountResponse> {
			return this.http.post<EnableOrganizationAdminAccountResponse>(this.baseUri + 'admin', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the delegated Amazon Macie administrator account for an organization in Organizations.
		 * Get admin
		 * @param {number} maxResults The maximum number of items to include in each page of a paginated response.
		 * @param {string} nextToken The nextToken string that specifies which page of results to return in a paginated response.
		 * @return {ListOrganizationAdminAccountsResponse} Success
		 */
		ListOrganizationAdminAccounts(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListOrganizationAdminAccountsResponse> {
			return this.http.get<ListOrganizationAdminAccountsResponse>(this.baseUri + 'admin?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Retrieves information about the Amazon Macie administrator account for an account.
		 * Get administrator
		 * @return {GetAdministratorAccountResponse} Success
		 */
		GetAdministratorAccount(): Observable<GetAdministratorAccountResponse> {
			return this.http.get<GetAdministratorAccountResponse>(this.baseUri + 'administrator', {});
		}

		/**
		 * Retrieves the configuration settings and status of automated sensitive data discovery for an account.
		 * Get automated-discovery/configuration
		 * @return {GetAutomatedDiscoveryConfigurationResponse} Success
		 */
		GetAutomatedDiscoveryConfiguration(): Observable<GetAutomatedDiscoveryConfigurationResponse> {
			return this.http.get<GetAutomatedDiscoveryConfigurationResponse>(this.baseUri + 'automated-discovery/configuration', {});
		}

		/**
		 * Enables or disables automated sensitive data discovery for an account.
		 * Put automated-discovery/configuration
		 * @return {UpdateAutomatedDiscoveryConfigurationResponse} Success
		 */
		UpdateAutomatedDiscoveryConfiguration(requestBody: UpdateAutomatedDiscoveryConfigurationPutBody): Observable<UpdateAutomatedDiscoveryConfigurationResponse> {
			return this.http.put<UpdateAutomatedDiscoveryConfigurationResponse>(this.baseUri + 'automated-discovery/configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves (queries) aggregated statistical data about all the S3 buckets that Amazon Macie monitors and analyzes for an account.
		 * Post datasources/s3/statistics
		 * @return {GetBucketStatisticsResponse} Success
		 */
		GetBucketStatistics(requestBody: GetBucketStatisticsPostBody): Observable<GetBucketStatisticsResponse> {
			return this.http.post<GetBucketStatisticsResponse>(this.baseUri + 'datasources/s3/statistics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the configuration settings for storing data classification results.
		 * Get classification-export-configuration
		 * @return {GetClassificationExportConfigurationResponse} Success
		 */
		GetClassificationExportConfiguration(): Observable<GetClassificationExportConfigurationResponse> {
			return this.http.get<GetClassificationExportConfigurationResponse>(this.baseUri + 'classification-export-configuration', {});
		}

		/**
		 * Creates or updates the configuration settings for storing data classification results.
		 * Put classification-export-configuration
		 * @return {PutClassificationExportConfigurationResponse} Success
		 */
		PutClassificationExportConfiguration(requestBody: PutClassificationExportConfigurationPutBody): Observable<PutClassificationExportConfigurationResponse> {
			return this.http.put<PutClassificationExportConfigurationResponse>(this.baseUri + 'classification-export-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the classification scope settings for an account.
		 * Get classification-scopes/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource that the request applies to.
		 * @return {GetClassificationScopeResponse} Success
		 */
		GetClassificationScope(id: string): Observable<GetClassificationScopeResponse> {
			return this.http.get<GetClassificationScopeResponse>(this.baseUri + 'classification-scopes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Updates the classification scope settings for an account.
		 * Patch classification-scopes/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource that the request applies to.
		 * @return {UpdateClassificationScopeResponse} Success
		 */
		UpdateClassificationScope(id: string, requestBody: UpdateClassificationScopePatchBody): Observable<UpdateClassificationScopeResponse> {
			return this.http.patch<UpdateClassificationScopeResponse>(this.baseUri + 'classification-scopes/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves (queries) aggregated statistical data about findings.
		 * Post findings/statistics
		 * @return {GetFindingStatisticsResponse} Success
		 */
		GetFindingStatistics(requestBody: GetFindingStatisticsPostBody): Observable<GetFindingStatisticsResponse> {
			return this.http.post<GetFindingStatisticsResponse>(this.baseUri + 'findings/statistics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the details of one or more findings.
		 * Post findings/describe
		 * @return {GetFindingsResponse} Success
		 */
		GetFindings(requestBody: GetFindingsPostBody): Observable<GetFindingsResponse> {
			return this.http.post<GetFindingsResponse>(this.baseUri + 'findings/describe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the configuration settings for publishing findings to Security Hub.
		 * Get findings-publication-configuration
		 * @return {GetFindingsPublicationConfigurationResponse} Success
		 */
		GetFindingsPublicationConfiguration(): Observable<GetFindingsPublicationConfigurationResponse> {
			return this.http.get<GetFindingsPublicationConfigurationResponse>(this.baseUri + 'findings-publication-configuration', {});
		}

		/**
		 * Updates the configuration settings for publishing findings to Security Hub.
		 * Put findings-publication-configuration
		 * @return {PutFindingsPublicationConfigurationResponse} Success
		 */
		PutFindingsPublicationConfiguration(requestBody: PutFindingsPublicationConfigurationPutBody): Observable<PutFindingsPublicationConfigurationResponse> {
			return this.http.put<PutFindingsPublicationConfigurationResponse>(this.baseUri + 'findings-publication-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * (Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the <link  linkend="GetAdministratorAccount">GetAdministratorAccount</link> operation.
		 * Get master
		 * @return {GetMasterAccountResponse} Success
		 */
		GetMasterAccount(): Observable<GetMasterAccountResponse> {
			return this.http.get<GetMasterAccountResponse>(this.baseUri + 'master', {});
		}

		/**
		 * Retrieves (queries) sensitive data discovery statistics and the sensitivity score for an S3 bucket.
		 * Get resource-profiles#resourceArn
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.
		 * @return {GetResourceProfileResponse} Success
		 */
		GetResourceProfile(resourceArn: string): Observable<GetResourceProfileResponse> {
			return this.http.get<GetResourceProfileResponse>(this.baseUri + 'resource-profiles#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Updates the sensitivity score for an S3 bucket.
		 * Patch resource-profiles#resourceArn
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.
		 * @return {UpdateResourceProfileResponse} Success
		 */
		UpdateResourceProfile(resourceArn: string, requestBody: UpdateResourceProfilePatchBody): Observable<UpdateResourceProfileResponse> {
			return this.http.patch<UpdateResourceProfileResponse>(this.baseUri + 'resource-profiles#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
		 * Get reveal-configuration
		 * @return {GetRevealConfigurationResponse} Success
		 */
		GetRevealConfiguration(): Observable<GetRevealConfigurationResponse> {
			return this.http.get<GetRevealConfigurationResponse>(this.baseUri + 'reveal-configuration', {});
		}

		/**
		 * Updates the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
		 * Put reveal-configuration
		 * @return {UpdateRevealConfigurationResponse} Success
		 */
		UpdateRevealConfiguration(requestBody: UpdateRevealConfigurationPutBody): Observable<UpdateRevealConfigurationResponse> {
			return this.http.put<UpdateRevealConfigurationResponse>(this.baseUri + 'reveal-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves occurrences of sensitive data reported by a finding.
		 * Get findings/{findingId}/reveal
		 * @param {string} findingId The unique identifier for the finding.
		 * @return {GetSensitiveDataOccurrencesResponse} Success
		 */
		GetSensitiveDataOccurrences(findingId: string): Observable<GetSensitiveDataOccurrencesResponse> {
			return this.http.get<GetSensitiveDataOccurrencesResponse>(this.baseUri + 'findings/' + (findingId == null ? '' : encodeURIComponent(findingId)) + '/reveal', {});
		}

		/**
		 * Checks whether occurrences of sensitive data can be retrieved for a finding.
		 * Get findings/{findingId}/reveal/availability
		 * @param {string} findingId The unique identifier for the finding.
		 * @return {GetSensitiveDataOccurrencesAvailabilityResponse} Success
		 */
		GetSensitiveDataOccurrencesAvailability(findingId: string): Observable<GetSensitiveDataOccurrencesAvailabilityResponse> {
			return this.http.get<GetSensitiveDataOccurrencesAvailabilityResponse>(this.baseUri + 'findings/' + (findingId == null ? '' : encodeURIComponent(findingId)) + '/reveal/availability', {});
		}

		/**
		 * <p>Retrieves the settings for the sensitivity inspection template for an account.</p>
		 * Get templates/sensitivity-inspections/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource that the request applies to.
		 * @return {GetSensitivityInspectionTemplateResponse} Success
		 */
		GetSensitivityInspectionTemplate(id: string): Observable<GetSensitivityInspectionTemplateResponse> {
			return this.http.get<GetSensitivityInspectionTemplateResponse>(this.baseUri + 'templates/sensitivity-inspections/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * <p>Updates the settings for the sensitivity inspection template for an account.</p>
		 * Put templates/sensitivity-inspections/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource that the request applies to.
		 * @return {UpdateSensitivityInspectionTemplateResponse} Success
		 */
		UpdateSensitivityInspectionTemplate(id: string, requestBody: UpdateSensitivityInspectionTemplatePutBody): Observable<UpdateSensitivityInspectionTemplateResponse> {
			return this.http.put<UpdateSensitivityInspectionTemplateResponse>(this.baseUri + 'templates/sensitivity-inspections/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves (queries) quotas and aggregated usage data for one or more accounts.
		 * Post usage/statistics
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetUsageStatisticsResponse} Success
		 */
		GetUsageStatistics(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetUsageStatisticsPostBody): Observable<GetUsageStatisticsResponse> {
			return this.http.post<GetUsageStatisticsResponse>(this.baseUri + 'usage/statistics?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves (queries) aggregated usage data for an account.
		 * Get usage
		 * @param {string} timeRange The inclusive time period to retrieve the data for. Valid values are: MONTH_TO_DATE, for the current calendar month to date; and, PAST_30_DAYS, for the preceding 30 days. If you don't specify a value for this parameter, Amazon Macie provides aggregated usage data for the preceding 30 days.
		 * @return {GetUsageTotalsResponse} Success
		 */
		GetUsageTotals(timeRange: string | null | undefined): Observable<GetUsageTotalsResponse> {
			return this.http.get<GetUsageTotalsResponse>(this.baseUri + 'usage?timeRange=' + (timeRange == null ? '' : encodeURIComponent(timeRange)), {});
		}

		/**
		 * Retrieves a subset of information about one or more classification jobs.
		 * Post jobs/list
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListClassificationJobsResponse} Success
		 */
		ListClassificationJobs(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListClassificationJobsPostBody): Observable<ListClassificationJobsResponse> {
			return this.http.post<ListClassificationJobsResponse>(this.baseUri + 'jobs/list?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a subset of information about the classification scope for an account.
		 * Get classification-scopes
		 * @param {string} name The name of the classification scope to retrieve the unique identifier for.
		 * @param {string} nextToken The nextToken string that specifies which page of results to return in a paginated response.
		 * @return {ListClassificationScopesResponse} Success
		 */
		ListClassificationScopes(name: string | null | undefined, nextToken: string | null | undefined): Observable<ListClassificationScopesResponse> {
			return this.http.get<ListClassificationScopesResponse>(this.baseUri + 'classification-scopes?name=' + (name == null ? '' : encodeURIComponent(name)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Retrieves a subset of information about all the custom data identifiers for an account.
		 * Post custom-data-identifiers/list
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListCustomDataIdentifiersResponse} Success
		 */
		ListCustomDataIdentifiers(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListCustomDataIdentifiersPostBody): Observable<ListCustomDataIdentifiersResponse> {
			return this.http.post<ListCustomDataIdentifiersResponse>(this.baseUri + 'custom-data-identifiers/list?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a subset of information about one or more findings.
		 * Post findings
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListFindingsResponse} Success
		 */
		ListFindings(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListFindingsPostBody): Observable<ListFindingsResponse> {
			return this.http.post<ListFindingsResponse>(this.baseUri + 'findings?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about all the managed data identifiers that Amazon Macie currently provides.
		 * Post managed-data-identifiers/list
		 * @param {string} nextToken Pagination token
		 * @return {ListManagedDataIdentifiersResponse} Success
		 */
		ListManagedDataIdentifiers(nextToken: string | null | undefined, requestBody: ListManagedDataIdentifiersPostBody): Observable<ListManagedDataIdentifiersResponse> {
			return this.http.post<ListManagedDataIdentifiersResponse>(this.baseUri + 'managed-data-identifiers/list?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about objects that were selected from an S3 bucket for automated sensitive data discovery.
		 * Get resource-profiles/artifacts#resourceArn
		 * @param {string} nextToken The nextToken string that specifies which page of results to return in a paginated response.
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.
		 * @return {ListResourceProfileArtifactsResponse} Success
		 */
		ListResourceProfileArtifacts(nextToken: string | null | undefined, resourceArn: string): Observable<ListResourceProfileArtifactsResponse> {
			return this.http.get<ListResourceProfileArtifactsResponse>(this.baseUri + 'resource-profiles/artifacts#resourceArn?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Retrieves information about the types and amount of sensitive data that Amazon Macie found in an S3 bucket.
		 * Get resource-profiles/detections#resourceArn
		 * @param {number} maxResults The maximum number of items to include in each page of a paginated response.
		 * @param {string} nextToken The nextToken string that specifies which page of results to return in a paginated response.
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.
		 * @return {ListResourceProfileDetectionsResponse} Success
		 */
		ListResourceProfileDetections(maxResults: number | null | undefined, nextToken: string | null | undefined, resourceArn: string): Observable<ListResourceProfileDetectionsResponse> {
			return this.http.get<ListResourceProfileDetectionsResponse>(this.baseUri + 'resource-profiles/detections#resourceArn?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Updates the sensitivity scoring settings for an S3 bucket.
		 * Patch resource-profiles/detections#resourceArn
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.
		 * @return {UpdateResourceProfileDetectionsResponse} Success
		 */
		UpdateResourceProfileDetections(resourceArn: string, requestBody: UpdateResourceProfileDetectionsPatchBody): Observable<UpdateResourceProfileDetectionsResponse> {
			return this.http.patch<UpdateResourceProfileDetectionsResponse>(this.baseUri + 'resource-profiles/detections#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a subset of information about the sensitivity inspection template for an account.</p>
		 * Get templates/sensitivity-inspections
		 * @param {number} maxResults The maximum number of items to include in each page of a paginated response.
		 * @param {string} nextToken The nextToken string that specifies which page of results to return in a paginated response.
		 * @return {ListSensitivityInspectionTemplatesResponse} Success
		 */
		ListSensitivityInspectionTemplates(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListSensitivityInspectionTemplatesResponse> {
			return this.http.get<ListSensitivityInspectionTemplatesResponse>(this.baseUri + 'templates/sensitivity-inspections?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Retrieves the tags (keys and values) that are associated with an Amazon Macie resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds or updates one or more tags (keys and values) that are associated with an Amazon Macie resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {void} 
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes.
		 * Post datasources/search-resources
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchResourcesResponse} Success
		 */
		SearchResources(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: SearchResourcesPostBody): Observable<SearchResourcesResponse> {
			return this.http.post<SearchResourcesResponse>(this.baseUri + 'datasources/search-resources?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Removes one or more tags (keys and values) from an Amazon Macie resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @param {Array<string>} tagKeys One or more tags (keys) to remove from the resource. In an HTTP request to remove multiple tags, append the tagKeys parameter and argument for each tag to remove, separated by an ampersand (&amp;).
		 * @return {void} 
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables an Amazon Macie administrator to suspend or re-enable Macie for a member account.
		 * Patch macie/members/{id}
		 * @param {string} id The unique identifier for the Amazon Macie resource that the request applies to.
		 * @return {UpdateMemberSessionResponse} Success
		 */
		UpdateMemberSession(id: string, requestBody: UpdateMemberSessionPatchBody): Observable<UpdateMemberSessionResponse> {
			return this.http.patch<UpdateMemberSessionResponse>(this.baseUri + 'macie/members/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AcceptInvitationPostBody {

		/** The Amazon Web Services account ID for the account that sent the invitation. */
		administratorAccountId?: string | null;

		/**
		 * The unique identifier for the invitation to accept.
		 * Required
		 */
		invitationId: string;

		/** (Deprecated) The Amazon Web Services account ID for the account that sent the invitation. This property has been replaced by the administratorAccountId property and is retained only for backward compatibility. */
		masterAccount?: string | null;
	}
	export interface AcceptInvitationPostBodyFormProperties {

		/** The Amazon Web Services account ID for the account that sent the invitation. */
		administratorAccountId: FormControl<string | null | undefined>,

		/**
		 * The unique identifier for the invitation to accept.
		 * Required
		 */
		invitationId: FormControl<string | null | undefined>,

		/** (Deprecated) The Amazon Web Services account ID for the account that sent the invitation. This property has been replaced by the administratorAccountId property and is retained only for backward compatibility. */
		masterAccount: FormControl<string | null | undefined>,
	}
	export function CreateAcceptInvitationPostBodyFormGroup() {
		return new FormGroup<AcceptInvitationPostBodyFormProperties>({
			administratorAccountId: new FormControl<string | null | undefined>(undefined),
			invitationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			masterAccount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchGetCustomDataIdentifiersPostBody {

		/** An array of custom data identifier IDs, one for each custom data identifier to retrieve information about. */
		ids?: Array<string>;
	}
	export interface BatchGetCustomDataIdentifiersPostBodyFormProperties {
	}
	export function CreateBatchGetCustomDataIdentifiersPostBodyFormGroup() {
		return new FormGroup<BatchGetCustomDataIdentifiersPostBodyFormProperties>({
		});

	}

	export interface CreateAllowListPostBody {

		/**
		 * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
		 * Required
		 */
		clientToken: string;

		/**
		 * Specifies the criteria for an allow list. The criteria must specify a regular expression (regex) or an S3 object (s3WordsList). It can't specify both.
		 * Required
		 */
		criteria: CreateAllowListPostBodyCriteria;

		/**
		 * A custom description of the allow list. The description can contain as many as 512 characters.
		 * Max length: 512
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * A custom name for the allow list. The name can contain as many as 128 characters.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		name: string;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateAllowListPostBodyFormProperties {

		/**
		 * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
		 * Required
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * A custom description of the allow list. The description can contain as many as 512 characters.
		 * Max length: 512
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * A custom name for the allow list. The name can contain as many as 128 characters.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateAllowListPostBodyFormGroup() {
		return new FormGroup<CreateAllowListPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('^[\s\S]+$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^.+$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateAllowListPostBodyCriteria {
		regex?: string;
		s3WordsList?: S3WordsList;
	}
	export interface CreateAllowListPostBodyCriteriaFormProperties {
		regex: FormControl<string | null | undefined>,
	}
	export function CreateCreateAllowListPostBodyCriteriaFormGroup() {
		return new FormGroup<CreateAllowListPostBodyCriteriaFormProperties>({
			regex: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateClassificationJobPostBody {

		/** An array of unique identifiers, one for each allow list for the job to use when it analyzes data. */
		allowListIds?: Array<string>;

		/**
		 * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
		 * Required
		 */
		clientToken: string;

		/** An array of unique identifiers, one for each custom data identifier for the job to use when it analyzes data. To use only managed data identifiers, don't specify a value for this property and specify a value other than NONE for the managedDataIdentifierSelector property. */
		customDataIdentifierIds?: Array<string>;

		/** A custom description of the job. The description can contain as many as 200 characters. */
		description?: string | null;

		/** <p>For a recurring job, specifies whether to analyze all existing, eligible objects immediately after the job is created (true). To analyze only those objects that are created or changed after you create the job and before the job's first scheduled run, set this value to false.</p> <p>If you configure the job to run only once, don't specify a value for this property.</p> */
		initialRun?: boolean | null;

		/**
		 * The schedule for running a classification job. Valid values are:
		 * Required
		 */
		jobType: JobType;

		/** <p>An array of unique identifiers, one for each managed data identifier for the job to include (use) or exclude (not use) when it analyzes data. Inclusion or exclusion depends on the managed data identifier selection type that you specify for the job (managedDataIdentifierSelector).</p> <p>To retrieve a list of valid values for this property, use the ListManagedDataIdentifiers operation.</p> */
		managedDataIdentifierIds?: Array<string>;

		/** The selection type that determines which managed data identifiers a classification job uses to analyze data. Valid values are: */
		managedDataIdentifierSelector?: ManagedDataIdentifierSelector | null;

		/**
		 * A custom name for the job. The name can contain as many as 500 characters.
		 * Required
		 */
		name: string;

		/**
		 * Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.
		 * Required
		 */
		s3JobDefinition: CreateClassificationJobPostBodyS3JobDefinition;

		/** The sampling depth, as a percentage, for the job to apply when processing objects. This value determines the percentage of eligible objects that the job analyzes. If this value is less than 100, Amazon Macie selects the objects to analyze at random, up to the specified percentage, and analyzes all the data in those objects. */
		samplingPercentage?: number | null;

		/** Specifies the recurrence pattern for running a classification job. */
		scheduleFrequency?: CreateClassificationJobPostBodyScheduleFrequency;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateClassificationJobPostBodyFormProperties {

		/**
		 * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
		 * Required
		 */
		clientToken: FormControl<string | null | undefined>,

		/** A custom description of the job. The description can contain as many as 200 characters. */
		description: FormControl<string | null | undefined>,

		/** <p>For a recurring job, specifies whether to analyze all existing, eligible objects immediately after the job is created (true). To analyze only those objects that are created or changed after you create the job and before the job's first scheduled run, set this value to false.</p> <p>If you configure the job to run only once, don't specify a value for this property.</p> */
		initialRun: FormControl<boolean | null | undefined>,

		/**
		 * The schedule for running a classification job. Valid values are:
		 * Required
		 */
		jobType: FormControl<JobType | null | undefined>,

		/** The selection type that determines which managed data identifiers a classification job uses to analyze data. Valid values are: */
		managedDataIdentifierSelector: FormControl<ManagedDataIdentifierSelector | null | undefined>,

		/**
		 * A custom name for the job. The name can contain as many as 500 characters.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The sampling depth, as a percentage, for the job to apply when processing objects. This value determines the percentage of eligible objects that the job analyzes. If this value is less than 100, Amazon Macie selects the objects to analyze at random, up to the specified percentage, and analyzes all the data in those objects. */
		samplingPercentage: FormControl<number | null | undefined>,

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateClassificationJobPostBodyFormGroup() {
		return new FormGroup<CreateClassificationJobPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			initialRun: new FormControl<boolean | null | undefined>(undefined),
			jobType: new FormControl<JobType | null | undefined>(undefined, [Validators.required]),
			managedDataIdentifierSelector: new FormControl<ManagedDataIdentifierSelector | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			samplingPercentage: new FormControl<number | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateClassificationJobPostBodyS3JobDefinition {
		bucketCriteria?: S3BucketCriteriaForJob;
		bucketDefinitions?: Array<S3BucketDefinitionForJob>;
		scoping?: Scoping;
	}
	export interface CreateClassificationJobPostBodyS3JobDefinitionFormProperties {
	}
	export function CreateCreateClassificationJobPostBodyS3JobDefinitionFormGroup() {
		return new FormGroup<CreateClassificationJobPostBodyS3JobDefinitionFormProperties>({
		});

	}

	export interface CreateClassificationJobPostBodyScheduleFrequency {
		dailySchedule?: DailySchedule;
		monthlySchedule?: MonthlySchedule;
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

		/** <p>A custom description of the custom data identifier. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a custom data identifier. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.</p> */
		description?: string | null;

		/** An array that lists specific character sequences (<i>ignore words</i>) to exclude from the results. If the text matched by the regular expression contains any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4-90 UTF-8 characters. Ignore words are case sensitive. */
		ignoreWords?: Array<string>;

		/** An array that lists specific character sequences (<i>keywords</i>), one of which must precede and be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 3-90 UTF-8 characters. Keywords aren't case sensitive. */
		keywords?: Array<string>;

		/** The maximum number of characters that can exist between the end of at least one complete character sequence specified by the keywords array and the end of the text that matches the regex pattern. If a complete keyword precedes all the text that matches the pattern and the keyword is within the specified distance, Amazon Macie includes the result. The distance can be 1-300 characters. The default value is 50. */
		maximumMatchDistance?: number | null;

		/**
		 * <p>A custom name for the custom data identifier. The name can contain as many as 128 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a custom data identifier. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
		 * Required
		 */
		name: string;

		/**
		 * The regular expression (<i>regex</i>) that defines the pattern to match. The expression can contain as many as 512 characters.
		 * Required
		 */
		regex: string;

		/** <p>The severity to assign to findings that the custom data identifier produces, based on the number of occurrences of text that matches the custom data identifier's detection criteria. You can specify as many as three SeverityLevel objects in this array, one for each severity: LOW, MEDIUM, or HIGH. If you specify more than one, the occurrences thresholds must be in ascending order by severity, moving from LOW to HIGH. For example, 1 for LOW, 50 for MEDIUM, and 100 for HIGH. If an S3 object contains fewer occurrences than the lowest specified threshold, Amazon Macie doesn't create a finding.</p> <p>If you don't specify any values for this array, Macie creates findings for S3 objects that contain at least one occurrence of text that matches the detection criteria, and Macie automatically assigns the MEDIUM severity to those findings.</p> */
		severityLevels?: Array<SeverityLevel>;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateCustomDataIdentifierPostBodyFormProperties {

		/** A unique, case-sensitive token that you provide to ensure the idempotency of the request. */
		clientToken: FormControl<string | null | undefined>,

		/** <p>A custom description of the custom data identifier. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a custom data identifier. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.</p> */
		description: FormControl<string | null | undefined>,

		/** The maximum number of characters that can exist between the end of at least one complete character sequence specified by the keywords array and the end of the text that matches the regex pattern. If a complete keyword precedes all the text that matches the pattern and the keyword is within the specified distance, Amazon Macie includes the result. The distance can be 1-300 characters. The default value is 50. */
		maximumMatchDistance: FormControl<number | null | undefined>,

		/**
		 * <p>A custom name for the custom data identifier. The name can contain as many as 128 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a custom data identifier. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The regular expression (<i>regex</i>) that defines the pattern to match. The expression can contain as many as 512 characters.
		 * Required
		 */
		regex: FormControl<string | null | undefined>,

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateCustomDataIdentifierPostBodyFormGroup() {
		return new FormGroup<CreateCustomDataIdentifierPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			maximumMatchDistance: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			regex: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateFindingsFilterPostBody {

		/**
		 * The action to perform on findings that match the filter criteria. To suppress (automatically archive) findings that match the criteria, set this value to ARCHIVE. Valid values are:
		 * Required
		 */
		action: FindingsFilterAction;

		/** A unique, case-sensitive token that you provide to ensure the idempotency of the request. */
		clientToken?: string | null;

		/** <p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.</p> */
		description?: string | null;

		/**
		 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
		 * Required
		 */
		findingCriteria: CreateFindingsFilterPostBodyFindingCriteria;

		/**
		 * <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
		 * Required
		 */
		name: string;

		/** The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings. */
		position?: number | null;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateFindingsFilterPostBodyFormProperties {

		/**
		 * The action to perform on findings that match the filter criteria. To suppress (automatically archive) findings that match the criteria, set this value to ARCHIVE. Valid values are:
		 * Required
		 */
		action: FormControl<FindingsFilterAction | null | undefined>,

		/** A unique, case-sensitive token that you provide to ensure the idempotency of the request. */
		clientToken: FormControl<string | null | undefined>,

		/** <p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.</p> */
		description: FormControl<string | null | undefined>,

		/**
		 * <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings. */
		position: FormControl<number | null | undefined>,

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateFindingsFilterPostBodyFormGroup() {
		return new FormGroup<CreateFindingsFilterPostBodyFormProperties>({
			action: new FormControl<FindingsFilterAction | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			position: new FormControl<number | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateFindingsFilterPostBodyFindingCriteria {
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
		 * An array that lists Amazon Web Services account IDs, one for each account to send the invitation to.
		 * Required
		 */
		accountIds: Array<string>;

		/** Specifies whether to send the invitation as an email message. If this value is false, Amazon Macie sends the invitation (as an email message) to the email address that you specified for the recipient's account when you associated the account with your account. The default value is false. */
		disableEmailNotification?: boolean | null;

		/** Custom text to include in the email message that contains the invitation. The text can contain as many as 80 alphanumeric characters. */
		message?: string | null;
	}
	export interface CreateInvitationsPostBodyFormProperties {

		/** Specifies whether to send the invitation as an email message. If this value is false, Amazon Macie sends the invitation (as an email message) to the email address that you specified for the recipient's account when you associated the account with your account. The default value is false. */
		disableEmailNotification: FormControl<boolean | null | undefined>,

		/** Custom text to include in the email message that contains the invitation. The text can contain as many as 80 alphanumeric characters. */
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
		 * Specifies the details of an account to associate with an Amazon Macie administrator account.
		 * Required
		 */
		account: CreateMemberPostBodyAccount;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateMemberPostBodyFormProperties {

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateMemberPostBodyFormGroup() {
		return new FormGroup<CreateMemberPostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateMemberPostBodyAccount {
		accountId?: string;
		email?: string;
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

		/** An array of finding types, one for each type of sample finding to create. To create a sample of every type of finding that Amazon Macie supports, don't include this array in your request. */
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
		 * An array that lists Amazon Web Services account IDs, one for each account that sent an invitation to decline.
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

	export interface UpdateAllowListPutBody {

		/**
		 * Specifies the criteria for an allow list. The criteria must specify a regular expression (regex) or an S3 object (s3WordsList). It can't specify both.
		 * Required
		 */
		criteria: UpdateAllowListPutBodyCriteria;

		/**
		 * A custom description of the allow list. The description can contain as many as 512 characters.
		 * Max length: 512
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * A custom name for the allow list. The name can contain as many as 128 characters.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		name: string;
	}
	export interface UpdateAllowListPutBodyFormProperties {

		/**
		 * A custom description of the allow list. The description can contain as many as 512 characters.
		 * Max length: 512
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * A custom name for the allow list. The name can contain as many as 128 characters.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAllowListPutBodyFormGroup() {
		return new FormGroup<UpdateAllowListPutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('^[\s\S]+$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^.+$')]),
		});

	}

	export interface UpdateAllowListPutBodyCriteria {
		regex?: string;
		s3WordsList?: S3WordsList;
	}
	export interface UpdateAllowListPutBodyCriteriaFormProperties {
		regex: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAllowListPutBodyCriteriaFormGroup() {
		return new FormGroup<UpdateAllowListPutBodyCriteriaFormProperties>({
			regex: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFindingsFilterPatchBody {

		/** The action to perform on findings that match the filter criteria. To suppress (automatically archive) findings that match the criteria, set this value to ARCHIVE. Valid values are: */
		action?: FindingsFilterAction | null;

		/** A unique, case-sensitive token that you provide to ensure the idempotency of the request. */
		clientToken?: string | null;

		/** <p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.</p> */
		description?: string | null;

		/** Specifies, as a map, one or more property-based conditions that filter the results of a query for findings. */
		findingCriteria?: UpdateFindingsFilterPatchBodyFindingCriteria;

		/** <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p> */
		name?: string | null;

		/** The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings. */
		position?: number | null;
	}
	export interface UpdateFindingsFilterPatchBodyFormProperties {

		/** The action to perform on findings that match the filter criteria. To suppress (automatically archive) findings that match the criteria, set this value to ARCHIVE. Valid values are: */
		action: FormControl<FindingsFilterAction | null | undefined>,

		/** A unique, case-sensitive token that you provide to ensure the idempotency of the request. */
		clientToken: FormControl<string | null | undefined>,

		/** <p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.</p> */
		description: FormControl<string | null | undefined>,

		/** <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p> */
		name: FormControl<string | null | undefined>,

		/** The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings. */
		position: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFindingsFilterPatchBodyFormGroup() {
		return new FormGroup<UpdateFindingsFilterPatchBodyFormProperties>({
			action: new FormControl<FindingsFilterAction | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateFindingsFilterPatchBodyFindingCriteria {
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
		 * An array that lists Amazon Web Services account IDs, one for each account that sent an invitation to delete.
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

		/** Specifies, as a map, one or more property-based conditions that filter the results of a query for information about S3 buckets. */
		criteria?: {[id: string]: BucketCriteriaAdditionalProperties };

		/** The maximum number of items to include in each page of the response. The default value is 50. */
		maxResults?: number | null;

		/** The nextToken string that specifies which page of results to return in a paginated response. */
		nextToken?: string | null;

		/** Specifies criteria for sorting the results of a query for information about S3 buckets. */
		sortCriteria?: DescribeBucketsPostBodySortCriteria;
	}
	export interface DescribeBucketsPostBodyFormProperties {

		/** Specifies, as a map, one or more property-based conditions that filter the results of a query for information about S3 buckets. */
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
		attributeName?: string;
		orderBy?: OrderBy;
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
		 * The status of a classification job. Possible values are:
		 * Required
		 */
		jobStatus: JobStatus;
	}
	export interface UpdateClassificationJobPatchBodyFormProperties {

		/**
		 * The status of a classification job. Possible values are:
		 * Required
		 */
		jobStatus: FormControl<JobStatus | null | undefined>,
	}
	export function CreateUpdateClassificationJobPatchBodyFormGroup() {
		return new FormGroup<UpdateClassificationJobPatchBodyFormProperties>({
			jobStatus: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateOrganizationConfigurationPatchBody {

		/**
		 * Specifies whether to enable Amazon Macie automatically for an account when the account is added to the organization in Organizations.
		 * Required
		 */
		autoEnable: boolean;
	}
	export interface UpdateOrganizationConfigurationPatchBodyFormProperties {

		/**
		 * Specifies whether to enable Amazon Macie automatically for an account when the account is added to the organization in Organizations.
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

		/** The frequency with which Amazon Macie publishes updates to policy findings for an account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events). For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-monitor.html">Monitoring and processing findings</a> in the <i>Amazon Macie User Guide</i>. Valid values are: */
		findingPublishingFrequency?: FindingPublishingFrequency | null;

		/** The status of an Amazon Macie account. Valid values are: */
		status?: MacieStatus | null;
	}
	export interface EnableMaciePostBodyFormProperties {

		/** A unique, case-sensitive token that you provide to ensure the idempotency of the request. */
		clientToken: FormControl<string | null | undefined>,

		/** The frequency with which Amazon Macie publishes updates to policy findings for an account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events). For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-monitor.html">Monitoring and processing findings</a> in the <i>Amazon Macie User Guide</i>. Valid values are: */
		findingPublishingFrequency: FormControl<FindingPublishingFrequency | null | undefined>,

		/** The status of an Amazon Macie account. Valid values are: */
		status: FormControl<MacieStatus | null | undefined>,
	}
	export function CreateEnableMaciePostBodyFormGroup() {
		return new FormGroup<EnableMaciePostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			findingPublishingFrequency: new FormControl<FindingPublishingFrequency | null | undefined>(undefined),
			status: new FormControl<MacieStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateMacieSessionPatchBody {

		/** The frequency with which Amazon Macie publishes updates to policy findings for an account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events). For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-monitor.html">Monitoring and processing findings</a> in the <i>Amazon Macie User Guide</i>. Valid values are: */
		findingPublishingFrequency?: FindingPublishingFrequency | null;

		/** The status of an Amazon Macie account. Valid values are: */
		status?: MacieStatus | null;
	}
	export interface UpdateMacieSessionPatchBodyFormProperties {

		/** The frequency with which Amazon Macie publishes updates to policy findings for an account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events). For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-monitor.html">Monitoring and processing findings</a> in the <i>Amazon Macie User Guide</i>. Valid values are: */
		findingPublishingFrequency: FormControl<FindingPublishingFrequency | null | undefined>,

		/** The status of an Amazon Macie account. Valid values are: */
		status: FormControl<MacieStatus | null | undefined>,
	}
	export function CreateUpdateMacieSessionPatchBodyFormGroup() {
		return new FormGroup<UpdateMacieSessionPatchBodyFormProperties>({
			findingPublishingFrequency: new FormControl<FindingPublishingFrequency | null | undefined>(undefined),
			status: new FormControl<MacieStatus | null | undefined>(undefined),
		});

	}

	export interface EnableOrganizationAdminAccountPostBody {

		/**
		 * The Amazon Web Services account ID for the account to designate as the delegated Amazon Macie administrator account for the organization.
		 * Required
		 */
		adminAccountId: string;

		/** A unique, case-sensitive token that you provide to ensure the idempotency of the request. */
		clientToken?: string | null;
	}
	export interface EnableOrganizationAdminAccountPostBodyFormProperties {

		/**
		 * The Amazon Web Services account ID for the account to designate as the delegated Amazon Macie administrator account for the organization.
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

	export interface UpdateAutomatedDiscoveryConfigurationPutBody {

		/**
		 * The status of the automated sensitive data discovery configuration for an Amazon Macie account. Valid values are:
		 * Required
		 */
		status: AutomatedDiscoveryStatus;
	}
	export interface UpdateAutomatedDiscoveryConfigurationPutBodyFormProperties {

		/**
		 * The status of the automated sensitive data discovery configuration for an Amazon Macie account. Valid values are:
		 * Required
		 */
		status: FormControl<AutomatedDiscoveryStatus | null | undefined>,
	}
	export function CreateUpdateAutomatedDiscoveryConfigurationPutBodyFormGroup() {
		return new FormGroup<UpdateAutomatedDiscoveryConfigurationPutBodyFormProperties>({
			status: new FormControl<AutomatedDiscoveryStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBucketStatisticsPostBody {

		/** The unique identifier for the Amazon Web Services account. */
		accountId?: string | null;
	}
	export interface GetBucketStatisticsPostBodyFormProperties {

		/** The unique identifier for the Amazon Web Services account. */
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateGetBucketStatisticsPostBodyFormGroup() {
		return new FormGroup<GetBucketStatisticsPostBodyFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutClassificationExportConfigurationPutBody {

		/**
		 * Specifies where to store data classification results, and the encryption settings to use when storing results in that location. The location must be an S3 bucket.
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
		s3Destination?: S3Destination;
	}
	export interface PutClassificationExportConfigurationPutBodyConfigurationFormProperties {
	}
	export function CreatePutClassificationExportConfigurationPutBodyConfigurationFormGroup() {
		return new FormGroup<PutClassificationExportConfigurationPutBodyConfigurationFormProperties>({
		});

	}

	export interface UpdateClassificationScopePatchBody {

		/** Specifies changes to the list of S3 buckets that are excluded from automated sensitive data discovery for an Amazon Macie account. */
		s3?: UpdateClassificationScopePatchBodyS3;
	}
	export interface UpdateClassificationScopePatchBodyFormProperties {
	}
	export function CreateUpdateClassificationScopePatchBodyFormGroup() {
		return new FormGroup<UpdateClassificationScopePatchBodyFormProperties>({
		});

	}

	export interface UpdateClassificationScopePatchBodyS3 {
		excludes?: S3ClassificationScopeExclusionUpdate;
	}
	export interface UpdateClassificationScopePatchBodyS3FormProperties {
	}
	export function CreateUpdateClassificationScopePatchBodyS3FormGroup() {
		return new FormGroup<UpdateClassificationScopePatchBodyS3FormProperties>({
		});

	}

	export interface GetFindingStatisticsPostBody {

		/** Specifies, as a map, one or more property-based conditions that filter the results of a query for findings. */
		findingCriteria?: GetFindingStatisticsPostBodyFindingCriteria;

		/**
		 * <p>The finding property to use to group the query results. Valid values are:</p> <ul><li><p>classificationDetails.jobId - The unique identifier for the classification job that produced the finding.</p></li> <li><p>resourcesAffected.s3Bucket.name - The name of the S3 bucket that the finding applies to.</p></li> <li><p>severity.description - The severity level of the finding, such as High or Medium.</p></li> <li><p>type - The type of finding, such as Policy:IAMUser/S3BucketPublic and SensitiveData:S3Object/Personal.</p></li></ul>
		 * Required
		 */
		groupBy: GroupBy;

		/** The maximum number of items to include in each page of the response. */
		size?: number | null;

		/** Specifies criteria for sorting the results of a query that retrieves aggregated statistical data about findings. */
		sortCriteria?: GetFindingStatisticsPostBodySortCriteria;
	}
	export interface GetFindingStatisticsPostBodyFormProperties {

		/**
		 * <p>The finding property to use to group the query results. Valid values are:</p> <ul><li><p>classificationDetails.jobId - The unique identifier for the classification job that produced the finding.</p></li> <li><p>resourcesAffected.s3Bucket.name - The name of the S3 bucket that the finding applies to.</p></li> <li><p>severity.description - The severity level of the finding, such as High or Medium.</p></li> <li><p>type - The type of finding, such as Policy:IAMUser/S3BucketPublic and SensitiveData:S3Object/Personal.</p></li></ul>
		 * Required
		 */
		groupBy: FormControl<GroupBy | null | undefined>,

		/** The maximum number of items to include in each page of the response. */
		size: FormControl<number | null | undefined>,
	}
	export function CreateGetFindingStatisticsPostBodyFormGroup() {
		return new FormGroup<GetFindingStatisticsPostBodyFormProperties>({
			groupBy: new FormControl<GroupBy | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetFindingStatisticsPostBodyFindingCriteria {
		criterion?: Criterion;
	}
	export interface GetFindingStatisticsPostBodyFindingCriteriaFormProperties {
	}
	export function CreateGetFindingStatisticsPostBodyFindingCriteriaFormGroup() {
		return new FormGroup<GetFindingStatisticsPostBodyFindingCriteriaFormProperties>({
		});

	}

	export interface GetFindingStatisticsPostBodySortCriteria {
		attributeName?: FindingStatisticsSortAttributeName;
		orderBy?: OrderBy;
	}
	export interface GetFindingStatisticsPostBodySortCriteriaFormProperties {
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
		 * An array of strings that lists the unique identifiers for the findings to retrieve. You can specify as many as 50 unique identifiers in this array.
		 * Required
		 */
		findingIds: Array<string>;

		/** Specifies criteria for sorting the results of a request for findings. */
		sortCriteria?: GetFindingsPostBodySortCriteria;
	}
	export interface GetFindingsPostBodyFormProperties {
	}
	export function CreateGetFindingsPostBodyFormGroup() {
		return new FormGroup<GetFindingsPostBodyFormProperties>({
		});

	}

	export interface GetFindingsPostBodySortCriteria {
		attributeName?: string;
		orderBy?: OrderBy;
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

	export interface PutFindingsPublicationConfigurationPutBody {

		/** A unique, case-sensitive token that you provide to ensure the idempotency of the request. */
		clientToken?: string | null;

		/** Specifies configuration settings that determine which findings are published to Security Hub automatically. For information about how Macie publishes findings to Security Hub, see <a href="https://docs.aws.amazon.com/macie/latest/user/securityhub-integration.html">Amazon Macie integration with Security Hub</a> in the <i>Amazon Macie User Guide</i>. */
		securityHubConfiguration?: PutFindingsPublicationConfigurationPutBodySecurityHubConfiguration;
	}
	export interface PutFindingsPublicationConfigurationPutBodyFormProperties {

		/** A unique, case-sensitive token that you provide to ensure the idempotency of the request. */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreatePutFindingsPublicationConfigurationPutBodyFormGroup() {
		return new FormGroup<PutFindingsPublicationConfigurationPutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutFindingsPublicationConfigurationPutBodySecurityHubConfiguration {
		publishClassificationFindings?: boolean | null;
		publishPolicyFindings?: boolean | null;
	}
	export interface PutFindingsPublicationConfigurationPutBodySecurityHubConfigurationFormProperties {
		publishClassificationFindings: FormControl<boolean | null | undefined>,
		publishPolicyFindings: FormControl<boolean | null | undefined>,
	}
	export function CreatePutFindingsPublicationConfigurationPutBodySecurityHubConfigurationFormGroup() {
		return new FormGroup<PutFindingsPublicationConfigurationPutBodySecurityHubConfigurationFormProperties>({
			publishClassificationFindings: new FormControl<boolean | null | undefined>(undefined),
			publishPolicyFindings: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateResourceProfilePatchBody {

		/** The new sensitivity score for the bucket. Valid values are: 100, assign the maximum score and apply the <i>Sensitive</i> label to the bucket; and, null (empty), assign a score that Amazon Macie calculates automatically after you submit the request. */
		sensitivityScoreOverride?: number | null;
	}
	export interface UpdateResourceProfilePatchBodyFormProperties {

		/** The new sensitivity score for the bucket. Valid values are: 100, assign the maximum score and apply the <i>Sensitive</i> label to the bucket; and, null (empty), assign a score that Amazon Macie calculates automatically after you submit the request. */
		sensitivityScoreOverride: FormControl<number | null | undefined>,
	}
	export function CreateUpdateResourceProfilePatchBodyFormGroup() {
		return new FormGroup<UpdateResourceProfilePatchBodyFormProperties>({
			sensitivityScoreOverride: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateRevealConfigurationPutBody {

		/**
		 * Specifies the configuration settings for retrieving occurrences of sensitive data reported by findings, and the status of the configuration for an Amazon Macie account. When you enable the configuration for the first time, your request must specify an Key Management Service (KMS) key. Otherwise, an error occurs. Macie uses the specified key to encrypt the sensitive data that you retrieve.
		 * Required
		 */
		configuration: UpdateRevealConfigurationPutBodyConfiguration;
	}
	export interface UpdateRevealConfigurationPutBodyFormProperties {
	}
	export function CreateUpdateRevealConfigurationPutBodyFormGroup() {
		return new FormGroup<UpdateRevealConfigurationPutBodyFormProperties>({
		});

	}

	export interface UpdateRevealConfigurationPutBodyConfiguration {
		kmsKeyId?: string;
		status?: AutomatedDiscoveryStatus;
	}
	export interface UpdateRevealConfigurationPutBodyConfigurationFormProperties {
		kmsKeyId: FormControl<string | null | undefined>,
		status: FormControl<AutomatedDiscoveryStatus | null | undefined>,
	}
	export function CreateUpdateRevealConfigurationPutBodyConfigurationFormGroup() {
		return new FormGroup<UpdateRevealConfigurationPutBodyConfigurationFormProperties>({
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AutomatedDiscoveryStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateSensitivityInspectionTemplatePutBody {

		/** A custom description of the template. The description can contain as many as 200 characters. */
		description?: string | null;

		/** Specifies managed data identifiers to exclude (not use) when performing automated sensitive data discovery for an Amazon Macie account. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>. */
		excludes?: UpdateSensitivityInspectionTemplatePutBodyExcludes;

		/** Specifies the allow lists, custom data identifiers, and managed data identifiers to include (use) when performing automated sensitive data discovery for an Amazon Macie account. The configuration must specify at least one custom data identifier or managed data identifier. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>. */
		includes?: UpdateSensitivityInspectionTemplatePutBodyIncludes;
	}
	export interface UpdateSensitivityInspectionTemplatePutBodyFormProperties {

		/** A custom description of the template. The description can contain as many as 200 characters. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSensitivityInspectionTemplatePutBodyFormGroup() {
		return new FormGroup<UpdateSensitivityInspectionTemplatePutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSensitivityInspectionTemplatePutBodyExcludes {
		managedDataIdentifierIds?: Array<string>;
	}
	export interface UpdateSensitivityInspectionTemplatePutBodyExcludesFormProperties {
	}
	export function CreateUpdateSensitivityInspectionTemplatePutBodyExcludesFormGroup() {
		return new FormGroup<UpdateSensitivityInspectionTemplatePutBodyExcludesFormProperties>({
		});

	}

	export interface UpdateSensitivityInspectionTemplatePutBodyIncludes {
		allowListIds?: Array<string>;
		customDataIdentifierIds?: Array<string>;
		managedDataIdentifierIds?: Array<string>;
	}
	export interface UpdateSensitivityInspectionTemplatePutBodyIncludesFormProperties {
	}
	export function CreateUpdateSensitivityInspectionTemplatePutBodyIncludesFormGroup() {
		return new FormGroup<UpdateSensitivityInspectionTemplatePutBodyIncludesFormProperties>({
		});

	}

	export interface GetUsageStatisticsPostBody {

		/** An array of objects, one for each condition to use to filter the query results. If you specify more than one condition, Amazon Macie uses an AND operator to join the conditions. */
		filterBy?: Array<UsageStatisticsFilter>;

		/** The maximum number of items to include in each page of the response. */
		maxResults?: number | null;

		/** The nextToken string that specifies which page of results to return in a paginated response. */
		nextToken?: string | null;

		/** Specifies criteria for sorting the results of a query for Amazon Macie account quotas and usage data. */
		sortBy?: GetUsageStatisticsPostBodySortBy;

		/** An inclusive time period that Amazon Macie usage data applies to. Possible values are: */
		timeRange?: TimeRange | null;
	}
	export interface GetUsageStatisticsPostBodyFormProperties {

		/** The maximum number of items to include in each page of the response. */
		maxResults: FormControl<number | null | undefined>,

		/** The nextToken string that specifies which page of results to return in a paginated response. */
		nextToken: FormControl<string | null | undefined>,

		/** An inclusive time period that Amazon Macie usage data applies to. Possible values are: */
		timeRange: FormControl<TimeRange | null | undefined>,
	}
	export function CreateGetUsageStatisticsPostBodyFormGroup() {
		return new FormGroup<GetUsageStatisticsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			timeRange: new FormControl<TimeRange | null | undefined>(undefined),
		});

	}

	export interface GetUsageStatisticsPostBodySortBy {
		key?: UsageStatisticsSortKey;
		orderBy?: OrderBy;
	}
	export interface GetUsageStatisticsPostBodySortByFormProperties {
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
		attributeName?: ListJobsSortAttributeName;
		orderBy?: OrderBy;
	}
	export interface ListClassificationJobsPostBodySortCriteriaFormProperties {
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

		/** Specifies criteria for sorting the results of a request for findings. */
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
		criterion?: Criterion;
	}
	export interface ListFindingsPostBodyFindingCriteriaFormProperties {
	}
	export function CreateListFindingsPostBodyFindingCriteriaFormGroup() {
		return new FormGroup<ListFindingsPostBodyFindingCriteriaFormProperties>({
		});

	}

	export interface ListFindingsPostBodySortCriteria {
		attributeName?: string;
		orderBy?: OrderBy;
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

	export interface ListManagedDataIdentifiersPostBody {

		/** The nextToken string that specifies which page of results to return in a paginated response. */
		nextToken?: string | null;
	}
	export interface ListManagedDataIdentifiersPostBodyFormProperties {

		/** The nextToken string that specifies which page of results to return in a paginated response. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListManagedDataIdentifiersPostBodyFormGroup() {
		return new FormGroup<ListManagedDataIdentifiersPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateResourceProfileDetectionsPatchBody {

		/** An array of objects, one for each custom data identifier or managed data identifier that detected the type of sensitive data to start excluding or including in the bucket's score. To start including all sensitive data types in the score, don't specify any values for this array. */
		suppressDataIdentifiers?: Array<SuppressDataIdentifier>;
	}
	export interface UpdateResourceProfileDetectionsPatchBodyFormProperties {
	}
	export function CreateUpdateResourceProfileDetectionsPatchBodyFormGroup() {
		return new FormGroup<UpdateResourceProfileDetectionsPatchBodyFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchResourcesPostBody {

		/** Specifies property- and tag-based conditions that define filter criteria for including or excluding S3 buckets from the query results. Exclude conditions take precedence over include conditions. */
		bucketCriteria?: SearchResourcesPostBodyBucketCriteria;

		/** The maximum number of items to include in each page of the response. The default value is 50. */
		maxResults?: number | null;

		/** The nextToken string that specifies which page of results to return in a paginated response. */
		nextToken?: string | null;

		/** Specifies criteria for sorting the results of a query for information about Amazon Web Services resources that Amazon Macie monitors and analyzes. */
		sortCriteria?: SearchResourcesPostBodySortCriteria;
	}
	export interface SearchResourcesPostBodyFormProperties {

		/** The maximum number of items to include in each page of the response. The default value is 50. */
		maxResults: FormControl<number | null | undefined>,

		/** The nextToken string that specifies which page of results to return in a paginated response. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchResourcesPostBodyFormGroup() {
		return new FormGroup<SearchResourcesPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchResourcesPostBodyBucketCriteria {
		excludes?: SearchResourcesCriteriaBlock;
		includes?: SearchResourcesCriteriaBlock;
	}
	export interface SearchResourcesPostBodyBucketCriteriaFormProperties {
	}
	export function CreateSearchResourcesPostBodyBucketCriteriaFormGroup() {
		return new FormGroup<SearchResourcesPostBodyBucketCriteriaFormProperties>({
		});

	}

	export interface SearchResourcesPostBodySortCriteria {
		attributeName?: SearchResourcesSortAttributeName;
		orderBy?: OrderBy;
	}
	export interface SearchResourcesPostBodySortCriteriaFormProperties {
		attributeName: FormControl<SearchResourcesSortAttributeName | null | undefined>,
		orderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateSearchResourcesPostBodySortCriteriaFormGroup() {
		return new FormGroup<SearchResourcesPostBodySortCriteriaFormProperties>({
			attributeName: new FormControl<SearchResourcesSortAttributeName | null | undefined>(undefined),
			orderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}

	export interface TestCustomDataIdentifierPostBody {

		/** An array that lists specific character sequences (<i>ignore words</i>) to exclude from the results. If the text matched by the regular expression contains any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4-90 UTF-8 characters. Ignore words are case sensitive. */
		ignoreWords?: Array<string>;

		/** An array that lists specific character sequences (<i>keywords</i>), one of which must precede and be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 3-90 UTF-8 characters. Keywords aren't case sensitive. */
		keywords?: Array<string>;

		/** The maximum number of characters that can exist between the end of at least one complete character sequence specified by the keywords array and the end of the text that matches the regex pattern. If a complete keyword precedes all the text that matches the pattern and the keyword is within the specified distance, Amazon Macie includes the result. The distance can be 1-300 characters. The default value is 50. */
		maximumMatchDistance?: number | null;

		/**
		 * The regular expression (<i>regex</i>) that defines the pattern to match. The expression can contain as many as 512 characters.
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

		/** The maximum number of characters that can exist between the end of at least one complete character sequence specified by the keywords array and the end of the text that matches the regex pattern. If a complete keyword precedes all the text that matches the pattern and the keyword is within the specified distance, Amazon Macie includes the result. The distance can be 1-300 characters. The default value is 50. */
		maximumMatchDistance: FormControl<number | null | undefined>,

		/**
		 * The regular expression (<i>regex</i>) that defines the pattern to match. The expression can contain as many as 512 characters.
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

	export interface UpdateMemberSessionPatchBody {

		/**
		 * The status of an Amazon Macie account. Valid values are:
		 * Required
		 */
		status: MacieStatus;
	}
	export interface UpdateMemberSessionPatchBodyFormProperties {

		/**
		 * The status of an Amazon Macie account. Valid values are:
		 * Required
		 */
		status: FormControl<MacieStatus | null | undefined>,
	}
	export function CreateUpdateMemberSessionPatchBodyFormGroup() {
		return new FormGroup<UpdateMemberSessionPatchBodyFormProperties>({
			status: new FormControl<MacieStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

}

