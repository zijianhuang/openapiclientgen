import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AcceptInvitationResponse {
	}

	export interface ValidationException {
	}

	export interface InternalServerException {
	}

	export interface ServiceQuotaExceededException {
	}

	export interface AccessDeniedException {
	}

	export interface ResourceNotFoundException {
	}

	export interface ThrottlingException {
	}

	export interface ConflictException {
	}

	export interface ArchiveFindingsResponse {
	}

	export interface BatchGetCustomDataIdentifiersResponse {
		customDataIdentifiers?: Array<BatchGetCustomDataIdentifierSummary> | null;
		notFoundIdentifierIds?: Array<string> | null;
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

	export interface CreateClassificationJobResponse {
		jobArn?: string | null;
		jobId?: string | null;
	}


	/** Specifies which S3 buckets contain the objects that a classification job analyzes. */
	export interface S3BucketDefinitionForJob {
		accountId?: string | null;
		buckets?: Array<string> | null;
	}


	/** An object that specifies conditions for including or excluding objects from the job. */
	export interface Scoping {

		/** Reserved for future use. */
		excludes?: JobScopingBlock | null;

		/** Reserved for future use. */
		includes?: JobScopingBlock | null;
	}


	/** Reserved for future use. */
	export interface JobScopingBlock {
		and?: Array<JobScopeTerm> | null;
	}


	/** Specifies one or more conditions that determine which objects a classification job analyzes. */
	export interface JobScopeTerm {

		/** Specifies a property-based condition that determines whether an object is included or excluded from a classification job. */
		simpleScopeTerm?: SimpleScopeTerm | null;

		/** Specifies a tag-based condition that determines whether an object is included or excluded from a classification job. */
		tagScopeTerm?: TagScopeTerm | null;
	}


	/** Specifies a property-based condition that determines whether an object is included or excluded from a classification job. */
	export interface SimpleScopeTerm {

		/** The operator to use in a condition. Valid values are: */
		comparator?: SimpleScopeTermComparator | null;

		/** The property to use in a condition that determines which objects are analyzed by a classification job. Valid values are: */
		key?: SimpleScopeTermKey | null;
		values?: Array<string> | null;
	}

	export enum SimpleScopeTermComparator { EQ = 0, GT = 1, GTE = 2, LT = 3, LTE = 4, NE = 5, CONTAINS = 6 }

	export enum SimpleScopeTermKey { BUCKET_CREATION_DATE = 0, OBJECT_EXTENSION = 1, OBJECT_LAST_MODIFIED_DATE = 2, OBJECT_SIZE = 3, TAG = 4 }


	/** Specifies a tag-based condition that determines whether an object is included or excluded from a classification job. */
	export interface TagScopeTerm {

		/** The operator to use in a condition. Valid values are: */
		comparator?: SimpleScopeTermComparator | null;
		key?: string | null;
		tagValues?: Array<TagValuePair> | null;

		/** The type of object to apply a tag-based condition to. Valid values are: */
		target?: TagScopeTermTarget | null;
	}


	/** Specifies a tag key and value, as a pair, to use in a tag-based condition for a classification job. */
	export interface TagValuePair {
		key?: string | null;
		value?: string | null;
	}

	export enum TagScopeTermTarget { S3_OBJECT = 0 }


	/** Run the job once a day, every day. If specified, this is an empty object. */
	export interface DailySchedule {
	}


	/** Run the job once a month, on a specific day of the month. This value can be an integer from 1 through 30. */
	export interface MonthlySchedule {
		dayOfMonth?: number | null;
	}


	/** Reserved for future use. */
	export interface WeeklySchedule {
		dayOfWeek?: WeeklyScheduleDayOfWeek | null;
	}

	export enum WeeklyScheduleDayOfWeek { SUNDAY = 0, MONDAY = 1, TUESDAY = 2, WEDNESDAY = 3, THURSDAY = 4, FRIDAY = 5, SATURDAY = 6 }

	export interface CreateCustomDataIdentifierResponse {
		customDataIdentifierId?: string | null;
	}

	export interface CreateFindingsFilterResponse {
		arn?: string | null;
		id?: string | null;
	}


	/** Specifies a condition that defines a property, operator, and value to use to filter the results of a query for findings. */
	export interface Criterion {
	}

	export interface CreateInvitationsResponse {
		unprocessedAccounts?: Array<UnprocessedAccount> | null;
	}


	/**  <p>Provides information about an account-related request that hasn't been processed.</p> */
	export interface UnprocessedAccount {
		accountId?: string | null;

		/** The source of an error, issue, or delay. Possible values are: */
		errorCode?: UnprocessedAccountErrorCode | null;
		errorMessage?: string | null;
	}

	export enum UnprocessedAccountErrorCode { ClientError = 0, InternalError = 1 }

	export interface CreateMemberResponse {
		arn?: string | null;
	}

	export interface CreateSampleFindingsResponse {
	}


	/** The type of finding. Valid values are: */
	export enum FindingType { SensitiveDataS3Object_Multiple = 0, SensitiveDataS3Object_Financial = 1, SensitiveDataS3Object_Personal = 2, SensitiveDataS3Object_Credentials = 3, SensitiveDataS3Object_CustomIdentifier = 4, PolicyIAMUser_S3BucketPublic = 5, PolicyIAMUser_S3BucketSharedExternally = 6, PolicyIAMUser_S3BucketReplicatedExternally = 7, PolicyIAMUser_S3BucketEncryptionDisabled = 8, PolicyIAMUser_S3BlockPublicAccessDisabled = 9 }

	export interface DeclineInvitationsResponse {
		unprocessedAccounts?: Array<UnprocessedAccount> | null;
	}

	export interface DeleteCustomDataIdentifierResponse {
	}

	export interface DeleteFindingsFilterResponse {
	}

	export interface DeleteInvitationsResponse {
		unprocessedAccounts?: Array<UnprocessedAccount> | null;
	}

	export interface DeleteMemberResponse {
	}

	export interface DescribeBucketsResponse {
		buckets?: Array<BucketMetadata> | null;
		nextToken?: string | null;
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
		objectCountByEncryptionType?: ObjectCountByEncryptionType | null;

		/** Provides information about permissions settings that determine whether an S3 bucket is publicly accessible. */
		publicAccess?: BucketPublicAccess | null;
		region?: string | null;

		/** Provides information about settings that define whether one or more objects in an S3 bucket are replicated to S3 buckets for other AWS accounts and, if so, which accounts. */
		replicationDetails?: ReplicationDetails | null;
		sharedAccess?: BucketMetadataSharedAccess | null;
		sizeInBytes?: number | null;
		sizeInBytesCompressed?: number | null;
		tags?: Array<KeyValuePair> | null;
		versioning?: boolean | null;
	}


	/** The total number of objects that are in the bucket, grouped by server-side encryption type. This includes a grouping that reports the total number of objects that aren't encrypted. */
	export interface ObjectCountByEncryptionType {
		customerManaged?: number | null;
		kmsManaged?: number | null;
		s3Managed?: number | null;
		unencrypted?: number | null;
	}


	/** Provides information about permissions settings that determine whether an S3 bucket is publicly accessible. */
	export interface BucketPublicAccess {
		effectivePermission?: BucketPublicAccessEffectivePermission | null;

		/** The account-level and bucket-level permissions settings for an S3 bucket, or the bucket that contains an object. */
		permissionConfiguration?: BucketPermissionConfiguration | null;
	}

	export enum BucketPublicAccessEffectivePermission { PUBLIC = 0, NOT_PUBLIC = 1 }


	/** The account-level and bucket-level permissions settings for an S3 bucket, or the bucket that contains an object. */
	export interface BucketPermissionConfiguration {

		/** Provides information about account-level permissions settings that apply to an S3 bucket. */
		accountLevelPermissions?: AccountLevelPermissions | null;

		/** Provides information about bucket-level permissions settings for an S3 bucket. */
		bucketLevelPermissions?: BucketLevelPermissions | null;
	}


	/** Provides information about account-level permissions settings that apply to an S3 bucket. */
	export interface AccountLevelPermissions {

		/** Provides information about the block public access settings for an S3 bucket. These settings can apply to a bucket at the account level or bucket level. For detailed information about each setting, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">Using Amazon S3 block public access</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
		blockPublicAccess?: BlockPublicAccess | null;
	}


	/** Provides information about the block public access settings for an S3 bucket. These settings can apply to a bucket at the account level or bucket level. For detailed information about each setting, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">Using Amazon S3 block public access</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
	export interface BlockPublicAccess {
		blockPublicAcls?: boolean | null;
		blockPublicPolicy?: boolean | null;
		ignorePublicAcls?: boolean | null;
		restrictPublicBuckets?: boolean | null;
	}


	/** Provides information about bucket-level permissions settings for an S3 bucket. */
	export interface BucketLevelPermissions {

		/** Provides information about the permissions settings of the bucket-level access control list (ACL) for an S3 bucket. */
		accessControlList?: AccessControlList | null;

		/** Provides information about the block public access settings for an S3 bucket. These settings can apply to a bucket at the account level or bucket level. For detailed information about each setting, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">Using Amazon S3 block public access</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. */
		blockPublicAccess?: BlockPublicAccess | null;

		/** Provides information about the permissions settings of a bucket policy for an S3 bucket. */
		bucketPolicy?: BucketPolicy | null;
	}


	/** Provides information about the permissions settings of the bucket-level access control list (ACL) for an S3 bucket. */
	export interface AccessControlList {
		allowsPublicReadAccess?: boolean | null;
		allowsPublicWriteAccess?: boolean | null;
	}


	/** Provides information about the permissions settings of a bucket policy for an S3 bucket. */
	export interface BucketPolicy {
		allowsPublicReadAccess?: boolean | null;
		allowsPublicWriteAccess?: boolean | null;
	}


	/** Provides information about settings that define whether one or more objects in an S3 bucket are replicated to S3 buckets for other AWS accounts and, if so, which accounts. */
	export interface ReplicationDetails {
		replicated?: boolean | null;
		replicatedExternally?: boolean | null;
		replicationAccounts?: Array<string> | null;
	}

	export enum BucketMetadataSharedAccess { EXTERNAL = 0, INTERNAL = 1, NOT_SHARED = 2 }


	/** Provides information about the tags that are associated with an S3 bucket or object. Each tag consists of a required tag key and an associated tag value. */
	export interface KeyValuePair {
		key?: string | null;
		value?: string | null;
	}


	/** Specifies the operator to use in an attribute-based condition that filters the results of a query for information about S3 buckets. */
	export interface BucketCriteriaAdditionalProperties {
		eq?: Array<string> | null;
		gt?: number | null;
		gte?: number | null;
		lt?: number | null;
		lte?: number | null;
		neq?: Array<string> | null;
		prefix?: string | null;
	}

	export enum OrderBy { ASC = 0, DESC = 1 }

	export interface DescribeClassificationJobResponse {
		clientToken?: string | null;
		createdAt?: Date | null;
		customDataIdentifierIds?: Array<string> | null;
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
		s3JobDefinition?: S3JobDefinition | null;
		samplingPercentage?: number | null;

		/** Specifies the recurrence pattern for running a classification job. */
		scheduleFrequency?: JobScheduleFrequency | null;

		/** Provides processing statistics for a classification job. */
		statistics?: Statistics | null;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: TagMap | null;
	}

	export enum DescribeClassificationJobResponseJobStatus { RUNNING = 0, PAUSED = 1, CANCELLED = 2, COMPLETE = 3, IDLE = 4 }

	export enum DescribeClassificationJobResponseJobType { ONE_TIME = 0, SCHEDULED = 1 }


	/** Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. */
	export interface S3JobDefinition {
		bucketDefinitions?: Array<S3BucketDefinitionForJob> | null;

		/** An object that specifies conditions for including or excluding objects from the job. */
		scoping?: Scoping | null;
	}


	/** Specifies the recurrence pattern for running a classification job. */
	export interface JobScheduleFrequency {

		/** Run the job once a day, every day. If specified, this is an empty object. */
		dailySchedule?: DailySchedule | null;

		/** Run the job once a month, on a specific day of the month. This value can be an integer from 1 through 30. */
		monthlySchedule?: MonthlySchedule | null;

		/** Reserved for future use. */
		weeklySchedule?: WeeklySchedule | null;
	}


	/** Provides processing statistics for a classification job. */
	export interface Statistics {
		approximateNumberOfObjectsToProcess?: number | null;
		numberOfRuns?: number | null;
	}


	/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
	export interface TagMap {
	}

	export interface DescribeOrganizationConfigurationResponse {
		autoEnable?: boolean | null;
		maxAccountLimitReached?: boolean | null;
	}

	export interface DisableMacieResponse {
	}

	export interface DisableOrganizationAdminAccountResponse {
	}

	export interface DisassociateFromMasterAccountResponse {
	}

	export interface DisassociateMemberResponse {
	}

	export interface EnableMacieResponse {
	}

	export interface EnableOrganizationAdminAccountResponse {
	}

	export interface GetBucketStatisticsResponse {
		bucketCount?: number | null;

		/** The total number of buckets that are publicly accessible, based on a combination of permissions settings for each bucket. */
		bucketCountByEffectivePermission?: BucketCountByEffectivePermission | null;

		/** The total number of buckets, grouped by server-side encryption type. This object also reports the total number of buckets that aren't encrypted. */
		bucketCountByEncryptionType?: BucketCountByEncryptionType | null;

		/** The total number of buckets that are shared with another AWS account or configured to support cross-origin resource sharing (CORS). */
		bucketCountBySharedAccessType?: BucketCountBySharedAccessType | null;
		classifiableObjectCount?: number | null;
		lastUpdated?: Date | null;
		objectCount?: number | null;
		sizeInBytes?: number | null;
		sizeInBytesCompressed?: number | null;
	}


	/** The total number of buckets that are publicly accessible, based on a combination of permissions settings for each bucket. */
	export interface BucketCountByEffectivePermission {
		publiclyAccessible?: number | null;
		publiclyReadable?: number | null;
		publiclyWritable?: number | null;
	}


	/** The total number of buckets, grouped by server-side encryption type. This object also reports the total number of buckets that aren't encrypted. */
	export interface BucketCountByEncryptionType {
		kmsManaged?: number | null;
		s3Managed?: number | null;
		unencrypted?: number | null;
	}


	/** The total number of buckets that are shared with another AWS account or configured to support cross-origin resource sharing (CORS). */
	export interface BucketCountBySharedAccessType {
		external?: number | null;
		internal?: number | null;
		notShared?: number | null;
	}

	export interface GetClassificationExportConfigurationResponse {

		/** Specifies where to export data classification results to, and the encryption settings to use when storing results in that location. Currently, you can export classification results only to an S3 bucket. */
		configuration?: ClassificationExportConfiguration | null;
	}


	/** Specifies where to export data classification results to, and the encryption settings to use when storing results in that location. Currently, you can export classification results only to an S3 bucket. */
	export interface ClassificationExportConfiguration {

		/** Specifies an S3 bucket to export data classification results to, and the encryption settings to use when storing results in that bucket. */
		s3Destination?: S3Destination | null;
	}


	/** Specifies an S3 bucket to export data classification results to, and the encryption settings to use when storing results in that bucket. */
	export interface S3Destination {
		bucketName: string;
		keyPrefix?: string | null;
		kmsKeyArn: string;
	}

	export interface GetCustomDataIdentifierResponse {
		arn?: string | null;
		createdAt?: Date | null;
		deleted?: boolean | null;
		description?: string | null;
		id?: string | null;
		ignoreWords?: Array<string> | null;
		keywords?: Array<string> | null;
		maximumMatchDistance?: number | null;
		name?: string | null;
		regex?: string | null;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: TagMap | null;
	}

	export interface GetFindingStatisticsResponse {
		countsByGroup?: Array<GroupCount> | null;
	}


	/** Provides a group of results for a query that retrieved information about findings. */
	export interface GroupCount {
		count?: number | null;
		groupKey?: string | null;
	}


	/** The grouping to sort the results by. Valid values are: */
	export enum FindingStatisticsSortAttributeName { groupKey = 0, count = 1 }

	export interface GetFindingsResponse {
		findings?: Array<Finding> | null;
	}


	/** Provides information about a finding. */
	export interface Finding {
		accountId?: string | null;
		archived?: boolean | null;

		/** The category of the finding. Valid values are: */
		category?: FindingCategory | null;

		/** Provides information about a sensitive data finding, including the classification job that produced the finding. */
		classificationDetails?: ClassificationDetails | null;
		count?: number | null;
		createdAt?: Date | null;
		description?: string | null;
		id?: string | null;
		partition?: string | null;

		/** Provides detailed information about a policy finding. */
		policyDetails?: PolicyDetails | null;
		region?: string | null;

		/** Provides information about the resources that a finding applies to. */
		resourcesAffected?: ResourcesAffected | null;
		sample?: boolean | null;
		schemaVersion?: string | null;

		/** Provides the numeric score and textual representation of a severity value. */
		severity?: Severity | null;
		title?: string | null;

		/** The type of finding. Valid values are: */
		type?: FindingType | null;
		updatedAt?: Date | null;
	}

	export enum FindingCategory { CLASSIFICATION = 0, POLICY = 1 }


	/** Provides information about a sensitive data finding, including the classification job that produced the finding. */
	export interface ClassificationDetails {
		detailedResultsLocation?: string | null;
		jobArn?: string | null;
		jobId?: string | null;

		/** Provides detailed information about a sensitive data finding, including the types and number of occurrences of the data that was found. */
		result?: ClassificationResult | null;
	}


	/** Provides detailed information about a sensitive data finding, including the types and number of occurrences of the data that was found. */
	export interface ClassificationResult {

		/** Provides information about the number of occurrences of the data that produced a sensitive data finding, and the custom data identifiers that detected the data for the finding. */
		customDataIdentifiers?: CustomDataIdentifiers | null;
		mimeType?: string | null;

		/** Provides information about the category and number of occurrences of sensitive data that produced a finding. */
		sensitiveData?: Array<SensitiveDataItem> | null;
		sizeClassified?: number | null;

		/** Provides information about the status of a sensitive data finding. */
		status?: ClassificationResultStatus | null;
	}


	/** Provides information about the number of occurrences of the data that produced a sensitive data finding, and the custom data identifiers that detected the data for the finding. */
	export interface CustomDataIdentifiers {

		/** Reserved for future use. */
		detections?: Array<CustomDetection> | null;
		totalCount?: number | null;
	}


	/** Provides information about a custom data identifier that produced a sensitive data finding, and the number of occurrences of the data that it detected for the finding. */
	export interface CustomDetection {
		arn?: string | null;
		count?: number | null;
		name?: string | null;
	}


	/** Provides information about the category, type, and number of occurrences of sensitive data that produced a finding. */
	export interface SensitiveDataItem {
		category?: SensitiveDataItemCategory | null;

		/** Reserved for future use. */
		detections?: Array<DefaultDetection> | null;
		totalCount?: number | null;
	}

	export enum SensitiveDataItemCategory { FINANCIAL_INFORMATION = 0, PERSONAL_INFORMATION = 1, CREDENTIALS = 2, CUSTOM_IDENTIFIER = 3 }


	/** Provides information about sensitive data that was detected by managed data identifiers and produced a finding. */
	export interface DefaultDetection {
		count?: number | null;
		type?: string | null;
	}


	/** Provides information about the status of a sensitive data finding. */
	export interface ClassificationResultStatus {
		code?: string | null;
		reason?: string | null;
	}


	/** Provides detailed information about a policy finding. */
	export interface PolicyDetails {

		/** Provides information about an action that occurred for a resource and produced a policy finding. */
		action?: FindingAction | null;

		/** Provides information about an entity who performed an action that produced a policy finding for a resource. */
		actor?: FindingActor | null;
	}


	/** Provides information about an action that occurred for a resource and produced a policy finding. */
	export interface FindingAction {
		actionType?: FindingActionActionType | null;

		/** Reserved for future use. */
		apiCallDetails?: ApiCallDetails | null;
	}

	export enum FindingActionActionType { AWS_API_CALL = 0 }


	/** Reserved for future use. */
	export interface ApiCallDetails {
		api?: string | null;
		apiServiceName?: string | null;
		firstSeen?: Date | null;
		lastSeen?: Date | null;
	}


	/** Provides information about an entity who performed an action that produced a policy finding for a resource. */
	export interface FindingActor {

		/** The DNS name of the entity that performed the action on the affected resource. */
		domainDetails?: DomainDetails | null;

		/** The IP address of the device that the entity used to perform the action on the affected resource. This object also provides information such as the owner and geographical location for the IP address. */
		ipAddressDetails?: IpAddressDetails | null;

		/** The name and type of entity who performed the action on the affected resource. */
		userIdentity?: UserIdentity | null;
	}


	/** The DNS name of the entity that performed the action on the affected resource. */
	export interface DomainDetails {
		domainName?: string | null;
	}


	/** The IP address of the device that the entity used to perform the action on the affected resource. This object also provides information such as the owner and geographical location for the IP address. */
	export interface IpAddressDetails {
		ipAddressV4?: string | null;

		/** Reserved for future use. */
		ipCity?: IpCity | null;

		/** Reserved for future use. */
		ipCountry?: IpCountry | null;

		/** Reserved for future use. */
		ipGeoLocation?: IpGeoLocation | null;

		/** Reserved for future use. */
		ipOwner?: IpOwner | null;
	}


	/** Reserved for future use. */
	export interface IpCity {
		name?: string | null;
	}


	/** Reserved for future use. */
	export interface IpCountry {
		code?: string | null;
		name?: string | null;
	}


	/** Reserved for future use. */
	export interface IpGeoLocation {
		lat?: number | null;
		lon?: number | null;
	}


	/** Reserved for future use. */
	export interface IpOwner {
		asn?: string | null;
		asnOrg?: string | null;
		isp?: string | null;
		org?: string | null;
	}


	/** The name and type of entity who performed the action on the affected resource. */
	export interface UserIdentity {

		/** Reserved for future use. */
		assumedRole?: AssumedRole | null;

		/** Reserved for future use. */
		awsAccount?: AwsAccount | null;

		/** Reserved for future use. */
		awsService?: AwsService | null;

		/** Reserved for future use. */
		federatedUser?: FederatedUser | null;

		/** Reserved for future use. */
		iamUser?: IamUser | null;

		/** Reserved for future use. */
		root?: UserIdentityRoot | null;

		/** Reserved for future use. */
		type?: UserIdentityType | null;
	}


	/** Reserved for future use. */
	export interface AssumedRole {
		accessKeyId?: string | null;
		accountId?: string | null;
		arn?: string | null;
		principalId?: string | null;

		/** Provides information about a session that was created for an entity who performed an action by using temporary security credentials. */
		sessionContext?: SessionContext | null;
	}


	/** Provides information about a session that was created for an entity who performed an action by using temporary security credentials. */
	export interface SessionContext {

		/** Provides information about the context in which temporary security credentials were issued to an entity. */
		attributes?: SessionContextAttributes | null;

		/** Provides information about the source and type of temporary security credentials that were issued to an entity. */
		sessionIssuer?: SessionIssuer | null;
	}


	/** Provides information about the context in which temporary security credentials were issued to an entity. */
	export interface SessionContextAttributes {
		creationDate?: Date | null;
		mfaAuthenticated?: boolean | null;
	}


	/** Provides information about the source and type of temporary security credentials that were issued to an entity. */
	export interface SessionIssuer {
		accountId?: string | null;
		arn?: string | null;
		principalId?: string | null;
		type?: string | null;
		userName?: string | null;
	}


	/** Reserved for future use. */
	export interface AwsAccount {
		accountId?: string | null;
		principalId?: string | null;
	}


	/** Reserved for future use. */
	export interface AwsService {
		invokedBy?: string | null;
	}


	/** Reserved for future use. */
	export interface FederatedUser {
		accessKeyId?: string | null;
		accountId?: string | null;
		arn?: string | null;
		principalId?: string | null;

		/** Provides information about a session that was created for an entity who performed an action by using temporary security credentials. */
		sessionContext?: SessionContext | null;
	}


	/** Reserved for future use. */
	export interface IamUser {
		accountId?: string | null;
		arn?: string | null;
		principalId?: string | null;
		userName?: string | null;
	}


	/** Reserved for future use. */
	export interface UserIdentityRoot {
		accountId?: string | null;
		arn?: string | null;
		principalId?: string | null;
	}

	export enum UserIdentityType { AssumedRole = 0, IAMUser = 1, FederatedUser = 2, Root = 3, AWSAccount = 4, AWSService = 5 }


	/** Provides information about the resources that a finding applies to. */
	export interface ResourcesAffected {

		/** Provides information about an S3 bucket that a finding applies to. */
		s3Bucket?: S3Bucket | null;

		/** Provides information about an S3 object that a finding applies to. */
		s3Object?: S3Object | null;
	}


	/** Provides information about an S3 bucket that a finding applies to. */
	export interface S3Bucket {
		arn?: string | null;
		createdAt?: Date | null;

		/** Provides information about the server-side encryption settings for an S3 bucket or object. */
		defaultServerSideEncryption?: ServerSideEncryption | null;
		name?: string | null;

		/** Provides information about the user who owns an S3 bucket. */
		owner?: S3BucketOwner | null;

		/** Provides information about permissions settings that determine whether an S3 bucket is publicly accessible. */
		publicAccess?: BucketPublicAccess | null;

		/** Reserved for future use. */
		tags?: Array<KeyValuePair> | null;
	}


	/** Provides information about the server-side encryption settings for an S3 bucket or object. */
	export interface ServerSideEncryption {

		/** The server-side encryption algorithm that's used when storing the S3 bucket or object. Valid values are: */
		encryptionType?: ServerSideEncryptionEncryptionType | null;
		kmsMasterKeyId?: string | null;
	}

	export enum ServerSideEncryptionEncryptionType { NONE = 0, AES256 = 1, awskms = 2 }


	/** Provides information about the user who owns an S3 bucket. */
	export interface S3BucketOwner {
		displayName?: string | null;
		id?: string | null;
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
		serverSideEncryption?: ServerSideEncryption | null;
		size?: number | null;

		/** The storage class of the S3 bucket or object. Valid values are: */
		storageClass?: S3ObjectStorageClass | null;

		/** Reserved for future use. */
		tags?: Array<KeyValuePair> | null;
		versionId?: string | null;
	}

	export enum S3ObjectStorageClass { STANDARD = 0, REDUCED_REDUNDANCY = 1, STANDARD_IA = 2, INTELLIGENT_TIERING = 3, DEEP_ARCHIVE = 4, ONEZONE_IA = 5, GLACIER = 6 }


	/** Provides the numeric score and textual representation of a severity value. */
	export interface Severity {

		/** The textual representation of the finding's severity. Valid values are: */
		description?: SeverityDescription | null;
		score?: number | null;
	}

	export enum SeverityDescription { Low = 0, Medium = 1, High = 2 }

	export interface GetFindingsFilterResponse {

		/** The action to perform on findings that meet the filter criteria. Valid values are: */
		action?: GetFindingsFilterResponseAction | null;
		arn?: string | null;
		description?: string | null;

		/** Specifies, as a map, one or more property-based conditions that filter the results of a query for findings. */
		findingCriteria?: FindingCriteria | null;
		id?: string | null;
		name?: string | null;
		position?: number | null;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: TagMap | null;
	}

	export enum GetFindingsFilterResponseAction { ARCHIVE = 0, NOOP = 1 }


	/** Specifies, as a map, one or more property-based conditions that filter the results of a query for findings. */
	export interface FindingCriteria {

		/** Specifies a condition that defines a property, operator, and value to use to filter the results of a query for findings. */
		criterion?: Criterion | null;
	}

	export interface GetInvitationsCountResponse {
		invitationsCount?: number | null;
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

	export enum GetMacieSessionResponseFindingPublishingFrequency { FIFTEEN_MINUTES = 0, ONE_HOUR = 1, SIX_HOURS = 2 }

	export enum GetMacieSessionResponseStatus { PAUSED = 0, ENABLED = 1 }

	export interface GetMasterAccountResponse {

		/** Provides information about an Amazon Macie membership invitation that was received by an account. */
		master?: Invitation | null;
	}


	/** Provides information about an Amazon Macie membership invitation that was received by an account. */
	export interface Invitation {
		accountId?: string | null;
		invitationId?: string | null;
		invitedAt?: Date | null;

		/** The current status of the relationship between an account and an associated Amazon Macie master account (<i>inviter account</i>). Possible values are: */
		relationshipStatus?: InvitationRelationshipStatus | null;
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
		tags?: TagMap | null;
		updatedAt?: Date | null;
	}

	export interface GetUsageStatisticsResponse {
		nextToken?: string | null;
		records?: Array<UsageRecord> | null;
	}


	/** Provides quota and aggregated usage data for an account. */
	export interface UsageRecord {
		accountId?: string | null;
		freeTrialStartDate?: Date | null;
		usage?: Array<UsageByAccount> | null;
	}


	/** Provides data for a specific usage metric and the corresponding quota for an account. The value for the metric is an aggregated value that reports usage during the past 30 days. */
	export interface UsageByAccount {

		/** The type of currency that data for a usage metric is reported in. Possible values are: */
		currency?: UsageByAccountCurrency | null;
		estimatedCost?: string | null;

		/** Specifies a current quota for an account. */
		serviceLimit?: ServiceLimit | null;

		/** The name of a usage metric for an account. Possible values are: */
		type?: UsageByAccountType | null;
	}

	export enum UsageByAccountCurrency { USD = 0 }


	/** Specifies a current quota for an account. */
	export interface ServiceLimit {
		isServiceLimited?: boolean | null;
		unit?: ServiceLimitUnit | null;
		value?: number | null;
	}

	export enum ServiceLimitUnit { TERABYTES = 0 }

	export enum UsageByAccountType { DATA_INVENTORY_EVALUATION = 0, SENSITIVE_DATA_DISCOVERY = 1 }


	/** Specifies criteria for filtering the results of a query for account quotas and usage data. */
	export interface UsageStatisticsFilter {

		/** The field to use to filter the results of a query for account quotas and usage data. */
		key?: UsageStatisticsFilterKey | null;
		values?: Array<string> | null;
	}

	export enum UsageStatisticsFilterKey { accountId = 0 }


	/** The field to use to sort the results of a query for account quotas and usage data. */
	export enum UsageStatisticsSortKey { accountId = 0, total = 1 }

	export interface GetUsageTotalsResponse {
		usageTotals?: Array<UsageTotal> | null;
	}


	/** Provides aggregated data for a usage metric. The value for the metric reports usage data for an account during the past 30 days. */
	export interface UsageTotal {

		/** The type of currency that data for a usage metric is reported in. Possible values are: */
		currency?: UsageByAccountCurrency | null;
		estimatedCost?: string | null;

		/** The name of a usage metric for an account. Possible values are: */
		type?: UsageByAccountType | null;
	}

	export interface ListClassificationJobsResponse {
		items?: Array<JobSummary> | null;
		nextToken?: string | null;
	}


	/** Provides information about a classification job, including the current status of the job. */
	export interface JobSummary {
		bucketDefinitions?: Array<S3BucketDefinitionForJob> | null;
		createdAt?: Date | null;
		jobId?: string | null;

		/** The current status of a classification job. Valid values are: */
		jobStatus?: DescribeClassificationJobResponseJobStatus | null;

		/** The schedule for running a classification job. Valid values are: */
		jobType?: DescribeClassificationJobResponseJobType | null;
		name?: string | null;
	}


	/** Specifies a condition that filters the results of a request for information about classification jobs. Each condition consists of a property, an operator, and one or more values. */
	export interface ListJobsFilterTerm {

		/** The operator to use in a condition. Valid values are: */
		comparator?: SimpleScopeTermComparator | null;

		/** The property to use to filter the results. Valid values are: */
		key?: ListJobsFilterTermKey | null;
		values?: Array<string> | null;
	}

	export enum ListJobsFilterTermKey { jobType = 0, jobStatus = 1, createdAt = 2, name = 3 }


	/** The property to sort the results by. Valid values are: */
	export enum ListJobsSortAttributeName { createdAt = 0, jobStatus = 1, name = 2, jobType = 3 }

	export interface ListCustomDataIdentifiersResponse {
		items?: Array<CustomDataIdentifierSummary> | null;
		nextToken?: string | null;
	}


	/** Provides information about a custom data identifier. */
	export interface CustomDataIdentifierSummary {
		arn?: string | null;
		createdAt?: Date | null;
		description?: string | null;
		id?: string | null;
		name?: string | null;
	}

	export interface ListFindingsResponse {
		findingIds?: Array<string> | null;
		nextToken?: string | null;
	}

	export interface ListFindingsFiltersResponse {
		findingsFilterListItems?: Array<FindingsFilterListItem> | null;
		nextToken?: string | null;
	}


	/** Provides information about a findings filter. */
	export interface FindingsFilterListItem {
		arn?: string | null;
		id?: string | null;
		name?: string | null;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: TagMap | null;
	}

	export interface ListInvitationsResponse {
		invitations?: Array<Invitation> | null;
		nextToken?: string | null;
	}

	export interface ListMembersResponse {
		members?: Array<Member> | null;
		nextToken?: string | null;
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
		tags?: TagMap | null;
		updatedAt?: Date | null;
	}

	export interface ListOrganizationAdminAccountsResponse {
		adminAccounts?: Array<AdminAccount> | null;
		nextToken?: string | null;
	}


	/** Provides information about an account that's designated as a delegated administrator of Amazon Macie for an AWS organization. */
	export interface AdminAccount {
		accountId?: string | null;

		/** The current status of an account as a delegated administrator of Amazon Macie for an AWS organization. */
		status?: AdminAccountStatus | null;
	}

	export enum AdminAccountStatus { ENABLED = 0, DISABLING_IN_PROGRESS = 1 }

	export interface ListTagsForResourceResponse {

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: TagMap | null;
	}

	export interface PutClassificationExportConfigurationResponse {

		/** Specifies where to export data classification results to, and the encryption settings to use when storing results in that location. Currently, you can export classification results only to an S3 bucket. */
		configuration?: ClassificationExportConfiguration | null;
	}

	export interface TagResourceResponse {
	}

	export interface TestCustomDataIdentifierResponse {
		matchCount?: number | null;
	}

	export interface UnarchiveFindingsResponse {
	}

	export interface UntagResourceResponse {
	}

	export interface UpdateClassificationJobResponse {
	}

	export interface UpdateFindingsFilterResponse {
		arn?: string | null;
		id?: string | null;
	}

	export interface UpdateMacieSessionResponse {
	}

	export interface UpdateMemberSessionResponse {
	}

	export interface UpdateOrganizationConfigurationResponse {
	}

	export interface AcceptInvitationRequest {
		invitationId: string;
		masterAccount: string;
	}


	/** Specifies details for an account to associate with an Amazon Macie master account. */
	export interface AccountDetail {
		accountId: string;
		email: string;
	}


	/** The current status of an account as a delegated administrator of Amazon Macie for an AWS organization. */
	export enum AdminStatus { ENABLED = 0, DISABLING_IN_PROGRESS = 1 }

	export interface ArchiveFindingsRequest {
		findingIds: Array<string>;
	}

	export interface BatchGetCustomDataIdentifiersRequest {
		ids?: Array<string> | null;
	}


	/** Specifies, as a map, one or more attribute-based conditions that filter the results of a query for information about S3 buckets. */
	export interface BucketCriteria {
	}

	export enum SharedAccess { EXTERNAL = 0, INTERNAL = 1, NOT_SHARED = 2 }

	export enum EffectivePermission { PUBLIC = 0, NOT_PUBLIC = 1 }


	/** Specifies criteria for sorting the results of a query for information about S3 buckets. */
	export interface BucketSortCriteria {
		attributeName?: string | null;
		orderBy?: OrderBy | null;
	}


	/** The schedule for running a classification job. Valid values are: */
	export enum JobType { ONE_TIME = 0, SCHEDULED = 1 }

	export interface CreateClassificationJobRequest {
		clientToken: string;
		customDataIdentifierIds?: Array<string> | null;
		description?: string | null;
		initialRun?: boolean | null;

		/**
		 * The schedule for running a classification job. Valid values are:
		 * Required
		 */
		jobType: DescribeClassificationJobResponseJobType;
		name: string;

		/**
		 * Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis.
		 * Required
		 */
		s3JobDefinition: S3JobDefinition;
		samplingPercentage?: number | null;

		/** Specifies the recurrence pattern for running a classification job. */
		scheduleFrequency?: JobScheduleFrequency | null;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: TagMap | null;
	}

	export interface CreateCustomDataIdentifierRequest {
		clientToken?: string | null;
		description?: string | null;
		ignoreWords?: Array<string> | null;
		keywords?: Array<string> | null;
		maximumMatchDistance?: number | null;
		name?: string | null;
		regex?: string | null;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: TagMap | null;
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
		name: string;
		position?: number | null;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: TagMap | null;
	}

	export interface CreateInvitationsRequest {
		accountIds: Array<string>;
		disableEmailNotification?: boolean | null;
		message?: string | null;
	}

	export interface CreateMemberRequest {

		/**
		 * Specifies details for an account to associate with an Amazon Macie master account.
		 * Required
		 */
		account: AccountDetail;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: TagMap | null;
	}

	export interface CreateSampleFindingsRequest {
		findingTypes?: Array<FindingType> | null;
	}


	/** Specifies the operator to use in a property-based condition that filters the results of a query for findings. */
	export interface CriterionAdditionalProperties {
		eq?: Array<string> | null;
		gt?: number | null;
		gte?: number | null;
		lt?: number | null;
		lte?: number | null;
		neq?: Array<string> | null;
	}


	/** The type of currency that data for a usage metric is reported in. Possible values are: */
	export enum Currency { USD = 0 }

	export enum DayOfWeek { SUNDAY = 0, MONDAY = 1, TUESDAY = 2, WEDNESDAY = 3, THURSDAY = 4, FRIDAY = 5, SATURDAY = 6 }

	export interface DeclineInvitationsRequest {
		accountIds: Array<string>;
	}

	export interface DeleteCustomDataIdentifierRequest {
	}

	export interface DeleteFindingsFilterRequest {
	}

	export interface DeleteInvitationsRequest {
		accountIds: Array<string>;
	}

	export interface DeleteMemberRequest {
	}

	export interface DescribeBucketsRequest {

		/** Specifies, as a map, one or more attribute-based conditions that filter the results of a query for information about S3 buckets. */
		criteria?: BucketCriteria | null;
		maxResults?: number | null;
		nextToken?: string | null;

		/** Specifies criteria for sorting the results of a query for information about S3 buckets. */
		sortCriteria?: BucketSortCriteria | null;
	}

	export interface DescribeClassificationJobRequest {
	}


	/** The current status of a classification job. Valid values are: */
	export enum JobStatus { RUNNING = 0, PAUSED = 1, CANCELLED = 2, COMPLETE = 3, IDLE = 4 }

	export interface DescribeOrganizationConfigurationRequest {
	}

	export interface DisableMacieRequest {
	}

	export interface DisableOrganizationAdminAccountRequest {
	}

	export interface DisassociateFromMasterAccountRequest {
	}

	export interface DisassociateMemberRequest {
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

	export interface EnableOrganizationAdminAccountRequest {
		adminAccountId: string;
		clientToken?: string | null;
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

	export interface GetBucketStatisticsRequest {
		accountId?: string | null;
	}

	export interface GetClassificationExportConfigurationRequest {
	}

	export interface GetCustomDataIdentifierRequest {
	}

	export enum GroupBy { resourcesAffected_s3Bucket_name = 0, type = 1, classificationDetails_jobId = 2, severity_description = 3 }

	export interface GetFindingStatisticsRequest {

		/** Specifies, as a map, one or more property-based conditions that filter the results of a query for findings. */
		findingCriteria?: FindingCriteria | null;
		groupBy: GetFindingStatisticsRequestGroupBy;
		size?: number | null;

		/** Specifies criteria for sorting the results of a query for information about findings. */
		sortCriteria?: FindingStatisticsSortCriteria | null;
	}

	export enum GetFindingStatisticsRequestGroupBy { resourcesAffected_s3Bucket_name = 0, type = 1, classificationDetails_jobId = 2, severity_description = 3 }

	export interface GetFindingsFilterRequest {
	}


	/** Specifies criteria for sorting the results of a request for information about findings. */
	export interface SortCriteria {
		attributeName?: string | null;
		orderBy?: OrderBy | null;
	}

	export interface GetFindingsRequest {
		findingIds: Array<string>;

		/** Specifies criteria for sorting the results of a request for information about findings. */
		sortCriteria?: SortCriteria | null;
	}

	export interface GetInvitationsCountRequest {
	}

	export interface GetMacieSessionRequest {
	}

	export interface GetMasterAccountRequest {
	}

	export interface GetMemberRequest {
	}


	/** The current status of the relationship between an account and an associated Amazon Macie master account (<i>inviter account</i>). Possible values are: */
	export enum RelationshipStatus { Enabled = 0, Paused = 1, Invited = 2, Created = 3, Removed = 4, Resigned = 5, EmailVerificationInProgress = 6, EmailVerificationFailed = 7 }


	/** Specifies criteria for sorting the results of a query for account quotas and usage data. */
	export interface UsageStatisticsSortBy {

		/** The field to use to sort the results of a query for account quotas and usage data. */
		key?: UsageStatisticsSortKey | null;
		orderBy?: OrderBy | null;
	}

	export interface GetUsageStatisticsRequest {
		filterBy?: Array<UsageStatisticsFilter> | null;
		maxResults?: number | null;
		nextToken?: string | null;

		/** Specifies criteria for sorting the results of a query for account quotas and usage data. */
		sortBy?: UsageStatisticsSortBy | null;
	}

	export interface GetUsageTotalsRequest {
	}


	/** The operator to use in a condition. Valid values are: */
	export enum JobComparator { EQ = 0, GT = 1, GTE = 2, LT = 3, LTE = 4, NE = 5, CONTAINS = 6 }


	/** Specifies criteria for filtering the results of a request for information about classification jobs. */
	export interface ListJobsFilterCriteria {
		excludes?: Array<ListJobsFilterTerm> | null;
		includes?: Array<ListJobsFilterTerm> | null;
	}


	/** Specifies criteria for sorting the results of a request for information about classification jobs. */
	export interface ListJobsSortCriteria {

		/** The property to sort the results by. Valid values are: */
		attributeName?: ListJobsSortAttributeName | null;
		orderBy?: OrderBy | null;
	}

	export interface ListClassificationJobsRequest {

		/** Specifies criteria for filtering the results of a request for information about classification jobs. */
		filterCriteria?: ListJobsFilterCriteria | null;
		maxResults?: number | null;
		nextToken?: string | null;

		/** Specifies criteria for sorting the results of a request for information about classification jobs. */
		sortCriteria?: ListJobsSortCriteria | null;
	}

	export interface ListCustomDataIdentifiersRequest {
		maxResults?: number | null;
		nextToken?: string | null;
	}

	export interface ListFindingsFiltersRequest {
	}

	export interface ListFindingsRequest {

		/** Specifies, as a map, one or more property-based conditions that filter the results of a query for findings. */
		findingCriteria?: FindingCriteria | null;
		maxResults?: number | null;
		nextToken?: string | null;

		/** Specifies criteria for sorting the results of a request for information about findings. */
		sortCriteria?: SortCriteria | null;
	}

	export interface ListInvitationsRequest {
	}


	/** The property to use to filter the results. Valid values are: */
	export enum ListJobsFilterKey { jobType = 0, jobStatus = 1, createdAt = 2, name = 3 }

	export interface ListMembersRequest {
	}

	export interface ListOrganizationAdminAccountsRequest {
	}

	export interface ListTagsForResourceRequest {
	}

	export interface PutClassificationExportConfigurationRequest {

		/**
		 * Specifies where to export data classification results to, and the encryption settings to use when storing results in that location. Currently, you can export classification results only to an S3 bucket.
		 * Required
		 */
		configuration: ClassificationExportConfiguration;
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


	/** The type of object to apply a tag-based condition to. Valid values are: */
	export enum TagTarget { S3_OBJECT = 0 }

	export interface TestCustomDataIdentifierRequest {
		ignoreWords?: Array<string> | null;
		keywords?: Array<string> | null;
		maximumMatchDistance?: number | null;
		regex: string;
		sampleText: string;
	}

	export interface UnarchiveFindingsRequest {
		findingIds: Array<string>;
	}

	export interface UntagResourceRequest {
	}

	export interface UpdateClassificationJobRequest {

		/**
		 * The current status of a classification job. Valid values are:
		 * Required
		 */
		jobStatus: DescribeClassificationJobResponseJobStatus;
	}

	export interface UpdateFindingsFilterRequest {

		/** The action to perform on findings that meet the filter criteria. Valid values are: */
		action?: GetFindingsFilterResponseAction | null;
		description?: string | null;

		/** Specifies, as a map, one or more property-based conditions that filter the results of a query for findings. */
		findingCriteria?: FindingCriteria | null;
		name?: string | null;
		position?: number | null;
	}

	export interface UpdateMacieSessionRequest {

		/** The frequency with which Amazon Macie publishes findings for an account. This includes adding findings to AWS Security Hub and exporting finding events to Amazon CloudWatch. Valid values are: */
		findingPublishingFrequency?: GetMacieSessionResponseFindingPublishingFrequency | null;

		/** The status of an Amazon Macie account. Valid values are: */
		status?: GetMacieSessionResponseStatus | null;
	}

	export interface UpdateMemberSessionRequest {

		/**
		 * The status of an Amazon Macie account. Valid values are:
		 * Required
		 */
		status: GetMacieSessionResponseStatus;
	}

	export interface UpdateOrganizationConfigurationRequest {
		autoEnable: boolean;
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
		ListFindingsFilters(maxResults: number, nextToken: string): Observable<ListFindingsFiltersResponse> {
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
		ListInvitations(maxResults: number, nextToken: string): Observable<ListInvitationsResponse> {
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
		ListMembers(maxResults: number, nextToken: string, onlyAssociated: string): Observable<ListMembersResponse> {
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
		ListOrganizationAdminAccounts(maxResults: number, nextToken: string): Observable<ListOrganizationAdminAccountsResponse> {
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

	export interface ArchiveFindingsPostBody {

		/**
		 * An array of strings that lists the unique identifiers for the findings to archive.
		 * Required
		 */
		findingIds: Array<string>;
	}

	export interface BatchGetCustomDataIdentifiersPostBody {

		/** An array of strings that lists the unique identifiers for the custom data identifiers to retrieve information about. */
		ids?: Array<string> | null;
	}

	export interface CreateClassificationJobPostBody {

		/**
		 * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
		 * Required
		 */
		clientToken: string;

		/** The custom data identifiers to use for data analysis and classification. */
		customDataIdentifierIds?: Array<string> | null;

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
		scheduleFrequency?: CreateClassificationJobPostBodyScheduleFrequency | null;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: {[id: string]: string } | null;
	}

	export interface CreateClassificationJobPostBodyS3JobDefinition {
		bucketDefinitions?: Array<S3BucketDefinitionForJob> | null;

		/** An object that specifies conditions for including or excluding objects from the job. */
		scoping?: Scoping | null;
	}

	export interface CreateClassificationJobPostBodyScheduleFrequency {

		/** Run the job once a day, every day. If specified, this is an empty object. */
		dailySchedule?: DailySchedule | null;

		/** Run the job once a month, on a specific day of the month. This value can be an integer from 1 through 30. */
		monthlySchedule?: MonthlySchedule | null;

		/** Reserved for future use. */
		weeklySchedule?: WeeklySchedule | null;
	}

	export interface CreateCustomDataIdentifierPostBody {

		/** A unique, case-sensitive token that you provide to ensure the idempotency of the request. */
		clientToken?: string | null;

		/** <p>A custom description of the custom data identifier. The description can contain up to 120 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a custom data identifier. Other users of your account might be able to see the identifier's description, depending on the actions that they're allowed to perform in Amazon Macie.</p> */
		description?: string | null;

		/** An array that lists specific character sequences (ignore words) to exclude from the results. If the text matched by the regular expression is the same as any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4 - 90 characters. */
		ignoreWords?: Array<string> | null;

		/** An array that lists specific character sequences (keywords), one of which must be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 4 - 90 characters. */
		keywords?: Array<string> | null;

		/** The maximum number of characters that can exist between text that matches the regex pattern and the character sequences specified by the keywords array. Macie includes or excludes a result based on the proximity of a keyword to text that matches the regex pattern. The distance can be 1 - 300 characters. The default value is 300. */
		maximumMatchDistance?: number | null;

		/** <p>A custom name for the custom data identifier. The name can contain as many as 120 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a custom data identifier. Other users of your account might be able to see the identifier's name, depending on the actions that they're allowed to perform in Amazon Macie.</p> */
		name?: string | null;

		/** The regular expression (regex) that defines the pattern to match. The expression can contain as many as 500 characters. */
		regex?: string | null;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: {[id: string]: string } | null;
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
		tags?: {[id: string]: string } | null;
	}

	export interface CreateFindingsFilterPostBodyFindingCriteria {

		/** Specifies a condition that defines a property, operator, and value to use to filter the results of a query for findings. */
		criterion?: Criterion | null;
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

	export interface CreateMemberPostBody {

		/**
		 * Specifies details for an account to associate with an Amazon Macie master account.
		 * Required
		 */
		account: CreateMemberPostBodyAccount;

		/** A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account. */
		tags?: {[id: string]: string } | null;
	}

	export interface CreateMemberPostBodyAccount {
		accountId?: string | null;
		email?: string | null;
	}

	export interface CreateSampleFindingsPostBody {

		/** <p>An array that lists one or more types of findings to include in the set of sample findings. Currently, the only supported value is Policy:IAMUser/S3BucketEncryptionDisabled.</p> */
		findingTypes?: Array<FindingType> | null;
	}

	export interface DeclineInvitationsPostBody {

		/**
		 * An array that lists AWS account IDs, one for each account that sent an invitation to decline.
		 * Required
		 */
		accountIds: Array<string>;
	}

	export interface UpdateFindingsFilterPatchBody {

		/** The action to perform on findings that meet the filter criteria. Valid values are: */
		action?: GetFindingsFilterResponseAction | null;

		/** <p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users might be able to see the filter's description, depending on the actions that they're allowed to perform in Amazon Macie.</p> */
		description?: string | null;

		/** Specifies, as a map, one or more property-based conditions that filter the results of a query for findings. */
		findingCriteria?: UpdateFindingsFilterPatchBodyFindingCriteria | null;

		/** <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users might be able to see the filter's name, depending on the actions that they're allowed to perform in Amazon Macie.</p> */
		name?: string | null;

		/** The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings. */
		position?: number | null;
	}

	export interface UpdateFindingsFilterPatchBodyFindingCriteria {

		/** Specifies a condition that defines a property, operator, and value to use to filter the results of a query for findings. */
		criterion?: Criterion | null;
	}

	export interface DeleteInvitationsPostBody {

		/**
		 * An array that lists AWS account IDs, one for each account that sent an invitation to delete.
		 * Required
		 */
		accountIds: Array<string>;
	}

	export interface DescribeBucketsPostBody {

		/** Specifies, as a map, one or more attribute-based conditions that filter the results of a query for information about S3 buckets. */
		criteria?: {[id: string]: BucketCriteriaAdditionalProperties } | null;

		/** The maximum number of items to include in each page of the response. The default value is 50. */
		maxResults?: number | null;

		/** The nextToken string that specifies which page of results to return in a paginated response. */
		nextToken?: string | null;

		/** Specifies criteria for sorting the results of a query for information about S3 buckets. */
		sortCriteria?: DescribeBucketsPostBodySortCriteria | null;
	}

	export interface DescribeBucketsPostBodySortCriteria {
		attributeName?: string | null;
		orderBy?: OrderBy | null;
	}

	export interface UpdateClassificationJobPatchBody {

		/**
		 * The current status of a classification job. Valid values are:
		 * Required
		 */
		jobStatus: DescribeClassificationJobResponseJobStatus;
	}

	export interface UpdateOrganizationConfigurationPatchBody {

		/**
		 * Specifies whether Amazon Macie is enabled automatically for each account, when the account is added to the AWS organization.
		 * Required
		 */
		autoEnable: boolean;
	}

	export interface EnableMaciePostBody {

		/** A unique, case-sensitive token that you provide to ensure the idempotency of the request. */
		clientToken?: string | null;

		/** The frequency with which Amazon Macie publishes findings for an account. This includes adding findings to AWS Security Hub and exporting finding events to Amazon CloudWatch. Valid values are: */
		findingPublishingFrequency?: GetMacieSessionResponseFindingPublishingFrequency | null;

		/** The status of an Amazon Macie account. Valid values are: */
		status?: GetMacieSessionResponseStatus | null;
	}

	export interface UpdateMacieSessionPatchBody {

		/** The frequency with which Amazon Macie publishes findings for an account. This includes adding findings to AWS Security Hub and exporting finding events to Amazon CloudWatch. Valid values are: */
		findingPublishingFrequency?: GetMacieSessionResponseFindingPublishingFrequency | null;

		/** The status of an Amazon Macie account. Valid values are: */
		status?: GetMacieSessionResponseStatus | null;
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

	export interface GetBucketStatisticsPostBody {

		/** The unique identifier for the AWS account. */
		accountId?: string | null;
	}

	export interface PutClassificationExportConfigurationPutBody {

		/**
		 * Specifies where to export data classification results to, and the encryption settings to use when storing results in that location. Currently, you can export classification results only to an S3 bucket.
		 * Required
		 */
		configuration: PutClassificationExportConfigurationPutBodyConfiguration;
	}

	export interface PutClassificationExportConfigurationPutBodyConfiguration {

		/** Specifies an S3 bucket to export data classification results to, and the encryption settings to use when storing results in that bucket. */
		s3Destination?: S3Destination | null;
	}

	export interface GetFindingStatisticsPostBody {

		/** Specifies, as a map, one or more property-based conditions that filter the results of a query for findings. */
		findingCriteria?: GetFindingStatisticsPostBodyFindingCriteria | null;

		/**
		 * <p>The finding property to use to group the query results. Valid values are:</p> <ul><li><p>classificationDetails.jobId - The unique identifier for the classification job that produced the finding.</p></li> <li><p>resourcesAffected.s3Bucket.name - The name of the S3 bucket that the finding applies to.</p></li> <li><p>severity.description - The severity of the finding, such as High or Medium.</p></li> <li><p>type - The type of finding, such as Policy:IAMUser/S3BucketPublic and SensitiveData:S3Object/Personal.</p></li></ul>
		 * Required
		 */
		groupBy: GetFindingStatisticsPostBodyGroupBy;

		/** The maximum number of items to include in each page of the response. */
		size?: number | null;

		/** Specifies criteria for sorting the results of a query for information about findings. */
		sortCriteria?: GetFindingStatisticsPostBodySortCriteria | null;
	}

	export interface GetFindingStatisticsPostBodyFindingCriteria {

		/** Specifies a condition that defines a property, operator, and value to use to filter the results of a query for findings. */
		criterion?: Criterion | null;
	}

	export enum GetFindingStatisticsPostBodyGroupBy { resourcesAffected_s3Bucket_name = 0, type = 1, classificationDetails_jobId = 2, severity_description = 3 }

	export interface GetFindingStatisticsPostBodySortCriteria {

		/** The grouping to sort the results by. Valid values are: */
		attributeName?: FindingStatisticsSortAttributeName | null;
		orderBy?: OrderBy | null;
	}

	export interface GetFindingsPostBody {

		/**
		 * An array of strings that lists the unique identifiers for the findings to retrieve information about.
		 * Required
		 */
		findingIds: Array<string>;

		/** Specifies criteria for sorting the results of a request for information about findings. */
		sortCriteria?: GetFindingsPostBodySortCriteria | null;
	}

	export interface GetFindingsPostBodySortCriteria {
		attributeName?: string | null;
		orderBy?: OrderBy | null;
	}

	export interface GetUsageStatisticsPostBody {

		/** The criteria to use to filter the query results. */
		filterBy?: Array<UsageStatisticsFilter> | null;

		/** The maximum number of items to include in each page of the response. */
		maxResults?: number | null;

		/** The nextToken string that specifies which page of results to return in a paginated response. */
		nextToken?: string | null;

		/** Specifies criteria for sorting the results of a query for account quotas and usage data. */
		sortBy?: GetUsageStatisticsPostBodySortBy | null;
	}

	export interface GetUsageStatisticsPostBodySortBy {

		/** The field to use to sort the results of a query for account quotas and usage data. */
		key?: UsageStatisticsSortKey | null;
		orderBy?: OrderBy | null;
	}

	export interface ListClassificationJobsPostBody {

		/** Specifies criteria for filtering the results of a request for information about classification jobs. */
		filterCriteria?: ListClassificationJobsPostBodyFilterCriteria | null;

		/** The maximum number of items to include in each page of the response. */
		maxResults?: number | null;

		/** The nextToken string that specifies which page of results to return in a paginated response. */
		nextToken?: string | null;

		/** Specifies criteria for sorting the results of a request for information about classification jobs. */
		sortCriteria?: ListClassificationJobsPostBodySortCriteria | null;
	}

	export interface ListClassificationJobsPostBodyFilterCriteria {
		excludes?: Array<ListJobsFilterTerm> | null;
		includes?: Array<ListJobsFilterTerm> | null;
	}

	export interface ListClassificationJobsPostBodySortCriteria {

		/** The property to sort the results by. Valid values are: */
		attributeName?: ListJobsSortAttributeName | null;
		orderBy?: OrderBy | null;
	}

	export interface ListCustomDataIdentifiersPostBody {

		/** The maximum number of items to include in each page of the response. */
		maxResults?: number | null;

		/** The nextToken string that specifies which page of results to return in a paginated response. */
		nextToken?: string | null;
	}

	export interface ListFindingsPostBody {

		/** Specifies, as a map, one or more property-based conditions that filter the results of a query for findings. */
		findingCriteria?: ListFindingsPostBodyFindingCriteria | null;

		/** The maximum number of items to include in each page of the response. */
		maxResults?: number | null;

		/** The nextToken string that specifies which page of results to return in a paginated response. */
		nextToken?: string | null;

		/** Specifies criteria for sorting the results of a request for information about findings. */
		sortCriteria?: ListFindingsPostBodySortCriteria | null;
	}

	export interface ListFindingsPostBodyFindingCriteria {

		/** Specifies a condition that defines a property, operator, and value to use to filter the results of a query for findings. */
		criterion?: Criterion | null;
	}

	export interface ListFindingsPostBodySortCriteria {
		attributeName?: string | null;
		orderBy?: OrderBy | null;
	}

	export interface TagResourcePostBody {

		/**
		 * A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account.
		 * Required
		 */
		tags: {[id: string]: string };
	}

	export interface TestCustomDataIdentifierPostBody {

		/** An array that lists specific character sequences (ignore words) to exclude from the results. If the text matched by the regular expression is the same as any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4 - 90 characters. */
		ignoreWords?: Array<string> | null;

		/** An array that lists specific character sequences (keywords), one of which must be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 4 - 90 characters. */
		keywords?: Array<string> | null;

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

	export interface UnarchiveFindingsPostBody {

		/**
		 * An array of strings that lists the unique identifiers for the findings to reactivate.
		 * Required
		 */
		findingIds: Array<string>;
	}

	export interface UpdateMemberSessionPatchBody {

		/**
		 * The status of an Amazon Macie account. Valid values are:
		 * Required
		 */
		status: GetMacieSessionResponseStatus;
	}

}

