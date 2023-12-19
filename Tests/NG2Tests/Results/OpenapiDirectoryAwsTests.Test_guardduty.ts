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

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface InternalServerErrorException {
	}
	export interface InternalServerErrorExceptionFormProperties {
	}
	export function CreateInternalServerErrorExceptionFormGroup() {
		return new FormGroup<InternalServerErrorExceptionFormProperties>({
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

	export interface CreateDetectorResponse {
		DetectorId?: string | null;
	}
	export interface CreateDetectorResponseFormProperties {
		DetectorId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDetectorResponseFormGroup() {
		return new FormGroup<CreateDetectorResponseFormProperties>({
			DetectorId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFilterResponse {
		Name: string;
	}
	export interface CreateFilterResponseFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateFilterResponseFormGroup() {
		return new FormGroup<CreateFilterResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Criterion {
	}
	export interface CriterionFormProperties {
	}
	export function CreateCriterionFormGroup() {
		return new FormGroup<CriterionFormProperties>({
		});

	}

	export interface CreateIPSetResponse {
		IpSetId: string;
	}
	export interface CreateIPSetResponseFormProperties {
		IpSetId: FormControl<string | null | undefined>,
	}
	export function CreateCreateIPSetResponseFormGroup() {
		return new FormGroup<CreateIPSetResponseFormProperties>({
			IpSetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMembersResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}
	export interface CreateMembersResponseFormProperties {
	}
	export function CreateCreateMembersResponseFormGroup() {
		return new FormGroup<CreateMembersResponseFormProperties>({
		});

	}


	/** Contains information about the accounts that weren't processed. */
	export interface UnprocessedAccount {
		AccountId: string;
		Result: string;
	}

	/** Contains information about the accounts that weren't processed. */
	export interface UnprocessedAccountFormProperties {
		AccountId: FormControl<string | null | undefined>,
		Result: FormControl<string | null | undefined>,
	}
	export function CreateUnprocessedAccountFormGroup() {
		return new FormGroup<UnprocessedAccountFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			Result: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the account. */
	export interface AccountDetail {
		AccountId: string;
		Email: string;
	}

	/** Contains information about the account. */
	export interface AccountDetailFormProperties {
		AccountId: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
	}
	export function CreateAccountDetailFormGroup() {
		return new FormGroup<AccountDetailFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePublishingDestinationResponse {
		DestinationId: string;
	}
	export interface CreatePublishingDestinationResponseFormProperties {
		DestinationId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePublishingDestinationResponseFormGroup() {
		return new FormGroup<CreatePublishingDestinationResponseFormProperties>({
			DestinationId: new FormControl<string | null | undefined>(undefined),
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

	export interface CreateThreatIntelSetResponse {
		ThreatIntelSetId: string;
	}
	export interface CreateThreatIntelSetResponseFormProperties {
		ThreatIntelSetId: FormControl<string | null | undefined>,
	}
	export function CreateCreateThreatIntelSetResponseFormGroup() {
		return new FormGroup<CreateThreatIntelSetResponseFormProperties>({
			ThreatIntelSetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeclineInvitationsResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}
	export interface DeclineInvitationsResponseFormProperties {
	}
	export function CreateDeclineInvitationsResponseFormGroup() {
		return new FormGroup<DeclineInvitationsResponseFormProperties>({
		});

	}

	export interface DeleteDetectorResponse {
	}
	export interface DeleteDetectorResponseFormProperties {
	}
	export function CreateDeleteDetectorResponseFormGroup() {
		return new FormGroup<DeleteDetectorResponseFormProperties>({
		});

	}

	export interface DeleteFilterResponse {
	}
	export interface DeleteFilterResponseFormProperties {
	}
	export function CreateDeleteFilterResponseFormGroup() {
		return new FormGroup<DeleteFilterResponseFormProperties>({
		});

	}

	export interface DeleteIPSetResponse {
	}
	export interface DeleteIPSetResponseFormProperties {
	}
	export function CreateDeleteIPSetResponseFormGroup() {
		return new FormGroup<DeleteIPSetResponseFormProperties>({
		});

	}

	export interface DeleteInvitationsResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}
	export interface DeleteInvitationsResponseFormProperties {
	}
	export function CreateDeleteInvitationsResponseFormGroup() {
		return new FormGroup<DeleteInvitationsResponseFormProperties>({
		});

	}

	export interface DeleteMembersResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}
	export interface DeleteMembersResponseFormProperties {
	}
	export function CreateDeleteMembersResponseFormGroup() {
		return new FormGroup<DeleteMembersResponseFormProperties>({
		});

	}

	export interface DeletePublishingDestinationResponse {
	}
	export interface DeletePublishingDestinationResponseFormProperties {
	}
	export function CreateDeletePublishingDestinationResponseFormGroup() {
		return new FormGroup<DeletePublishingDestinationResponseFormProperties>({
		});

	}

	export interface DeleteThreatIntelSetResponse {
	}
	export interface DeleteThreatIntelSetResponseFormProperties {
	}
	export function CreateDeleteThreatIntelSetResponseFormGroup() {
		return new FormGroup<DeleteThreatIntelSetResponseFormProperties>({
		});

	}

	export interface DescribeOrganizationConfigurationResponse {
		AutoEnable: boolean;
		MemberAccountLimitReached: boolean;
	}
	export interface DescribeOrganizationConfigurationResponseFormProperties {
		AutoEnable: FormControl<boolean | null | undefined>,
		MemberAccountLimitReached: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeOrganizationConfigurationResponseFormGroup() {
		return new FormGroup<DescribeOrganizationConfigurationResponseFormProperties>({
			AutoEnable: new FormControl<boolean | null | undefined>(undefined),
			MemberAccountLimitReached: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribePublishingDestinationResponse {
		DestinationId: string;
		DestinationType: DescribePublishingDestinationResponseDestinationType;
		Status: DescribePublishingDestinationResponseStatus;
		PublishingFailureStartTimestamp: number;

		/**
		 * Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings.
		 * Required
		 */
		DestinationProperties: DestinationProperties;
	}
	export interface DescribePublishingDestinationResponseFormProperties {
		DestinationId: FormControl<string | null | undefined>,
		DestinationType: FormControl<DescribePublishingDestinationResponseDestinationType | null | undefined>,
		Status: FormControl<DescribePublishingDestinationResponseStatus | null | undefined>,
		PublishingFailureStartTimestamp: FormControl<number | null | undefined>,
	}
	export function CreateDescribePublishingDestinationResponseFormGroup() {
		return new FormGroup<DescribePublishingDestinationResponseFormProperties>({
			DestinationId: new FormControl<string | null | undefined>(undefined),
			DestinationType: new FormControl<DescribePublishingDestinationResponseDestinationType | null | undefined>(undefined),
			Status: new FormControl<DescribePublishingDestinationResponseStatus | null | undefined>(undefined),
			PublishingFailureStartTimestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DescribePublishingDestinationResponseDestinationType { S3 = 0 }

	export enum DescribePublishingDestinationResponseStatus { PENDING_VERIFICATION = 0, PUBLISHING = 1, UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY = 2, STOPPED = 3 }


	/** Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings. */
	export interface DestinationProperties {
		DestinationArn?: string | null;
		KmsKeyArn?: string | null;
	}

	/** Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings. */
	export interface DestinationPropertiesFormProperties {
		DestinationArn: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateDestinationPropertiesFormGroup() {
		return new FormGroup<DestinationPropertiesFormProperties>({
			DestinationArn: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
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

	export interface DisassociateMembersResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}
	export interface DisassociateMembersResponseFormProperties {
	}
	export function CreateDisassociateMembersResponseFormGroup() {
		return new FormGroup<DisassociateMembersResponseFormProperties>({
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

	export interface GetDetectorResponse {
		CreatedAt?: string | null;
		FindingPublishingFrequency?: GetDetectorResponseFindingPublishingFrequency | null;
		ServiceRole: string;
		Status: GetDetectorResponseStatus;
		UpdatedAt?: string | null;
		Tags?: TagMap;
	}
	export interface GetDetectorResponseFormProperties {
		CreatedAt: FormControl<string | null | undefined>,
		FindingPublishingFrequency: FormControl<GetDetectorResponseFindingPublishingFrequency | null | undefined>,
		ServiceRole: FormControl<string | null | undefined>,
		Status: FormControl<GetDetectorResponseStatus | null | undefined>,
		UpdatedAt: FormControl<string | null | undefined>,
	}
	export function CreateGetDetectorResponseFormGroup() {
		return new FormGroup<GetDetectorResponseFormProperties>({
			CreatedAt: new FormControl<string | null | undefined>(undefined),
			FindingPublishingFrequency: new FormControl<GetDetectorResponseFindingPublishingFrequency | null | undefined>(undefined),
			ServiceRole: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<GetDetectorResponseStatus | null | undefined>(undefined),
			UpdatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetDetectorResponseFindingPublishingFrequency { FIFTEEN_MINUTES = 0, ONE_HOUR = 1, SIX_HOURS = 2 }

	export enum GetDetectorResponseStatus { ENABLED = 0, DISABLED = 1 }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface GetFilterResponse {
		Name: string;
		Description?: string | null;
		Action: GetFilterResponseAction;
		Rank?: number | null;

		/**
		 * Contains information about the criteria used for querying findings.
		 * Required
		 */
		FindingCriteria: FindingCriteria;
		Tags?: TagMap;
	}
	export interface GetFilterResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Action: FormControl<GetFilterResponseAction | null | undefined>,
		Rank: FormControl<number | null | undefined>,
	}
	export function CreateGetFilterResponseFormGroup() {
		return new FormGroup<GetFilterResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Action: new FormControl<GetFilterResponseAction | null | undefined>(undefined),
			Rank: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GetFilterResponseAction { NOOP = 0, ARCHIVE = 1 }


	/** Contains information about the criteria used for querying findings. */
	export interface FindingCriteria {
		Criterion?: Criterion;
	}

	/** Contains information about the criteria used for querying findings. */
	export interface FindingCriteriaFormProperties {
	}
	export function CreateFindingCriteriaFormGroup() {
		return new FormGroup<FindingCriteriaFormProperties>({
		});

	}

	export interface GetFindingsResponse {
		Findings: Array<Finding>;
	}
	export interface GetFindingsResponseFormProperties {
	}
	export function CreateGetFindingsResponseFormGroup() {
		return new FormGroup<GetFindingsResponseFormProperties>({
		});

	}


	/** Contains information about the finding, which is generated when abnormal or suspicious activity is detected. */
	export interface Finding {
		AccountId: string;
		Arn: string;
		Confidence?: number | null;
		CreatedAt: string;
		Description?: string | null;
		Id: string;
		Partition?: string | null;
		Region: string;

		/**
		 * Contains information about the AWS resource associated with the activity that prompted GuardDuty to generate a finding.
		 * Required
		 */
		Resource: Resource;
		SchemaVersion: string;

		/** Contains additional information about the generated finding. */
		Service?: Service;
		Severity: number;
		Title?: string | null;
		Type: string;
		UpdatedAt: string;
	}

	/** Contains information about the finding, which is generated when abnormal or suspicious activity is detected. */
	export interface FindingFormProperties {
		AccountId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
		CreatedAt: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Partition: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		SchemaVersion: FormControl<string | null | undefined>,
		Severity: FormControl<number | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		UpdatedAt: FormControl<string | null | undefined>,
	}
	export function CreateFindingFormGroup() {
		return new FormGroup<FindingFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Partition: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			SchemaVersion: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<number | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the AWS resource associated with the activity that prompted GuardDuty to generate a finding. */
	export interface Resource {

		/** Contains information about the access keys. */
		AccessKeyDetails?: AccessKeyDetails;

		/** Contains information on the S3 bucket. */
		S3BucketDetails?: Array<S3BucketDetail>;

		/** Contains information about the details of an instance. */
		InstanceDetails?: InstanceDetails;
		ResourceType?: string | null;
	}

	/** Contains information about the AWS resource associated with the activity that prompted GuardDuty to generate a finding. */
	export interface ResourceFormProperties {
		ResourceType: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the access keys. */
	export interface AccessKeyDetails {
		AccessKeyId?: string | null;
		PrincipalId?: string | null;
		UserName?: string | null;
		UserType?: string | null;
	}

	/** Contains information about the access keys. */
	export interface AccessKeyDetailsFormProperties {
		AccessKeyId: FormControl<string | null | undefined>,
		PrincipalId: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,
		UserType: FormControl<string | null | undefined>,
	}
	export function CreateAccessKeyDetailsFormGroup() {
		return new FormGroup<AccessKeyDetailsFormProperties>({
			AccessKeyId: new FormControl<string | null | undefined>(undefined),
			PrincipalId: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
			UserType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface S3BucketDetail {
		Arn?: string | null;
		Name?: string | null;
		Type?: string | null;
		CreatedAt?: Date | null;

		/** Contains information on the owner of the bucket. */
		Owner?: Owner;
		Tags?: Array<Tag>;

		/** Contains information on the server side encryption method used in the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/atest/dev/serv-side-encryption.html">S3 Server-Side Encryption</a> for more information. */
		DefaultServerSideEncryption?: DefaultServerSideEncryption;

		/** Describes the public access policies that apply to the S3 bucket. */
		PublicAccess?: PublicAccess;
	}
	export interface S3BucketDetailFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateS3BucketDetailFormGroup() {
		return new FormGroup<S3BucketDetailFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains information on the owner of the bucket. */
	export interface Owner {
		Id?: string | null;
	}

	/** Contains information on the owner of the bucket. */
	export interface OwnerFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateOwnerFormGroup() {
		return new FormGroup<OwnerFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a tag associated with the EC2 instance. */
	export interface Tag {
		Key?: string | null;
		Value?: string | null;
	}

	/** Contains information about a tag associated with the EC2 instance. */
	export interface TagFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information on the server side encryption method used in the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/atest/dev/serv-side-encryption.html">S3 Server-Side Encryption</a> for more information. */
	export interface DefaultServerSideEncryption {
		EncryptionType?: string | null;
		KmsMasterKeyArn?: string | null;
	}

	/** Contains information on the server side encryption method used in the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/atest/dev/serv-side-encryption.html">S3 Server-Side Encryption</a> for more information. */
	export interface DefaultServerSideEncryptionFormProperties {
		EncryptionType: FormControl<string | null | undefined>,
		KmsMasterKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateDefaultServerSideEncryptionFormGroup() {
		return new FormGroup<DefaultServerSideEncryptionFormProperties>({
			EncryptionType: new FormControl<string | null | undefined>(undefined),
			KmsMasterKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the public access policies that apply to the S3 bucket. */
	export interface PublicAccess {

		/** Contains information about how permissions are configured for the S3 bucket. */
		PermissionConfiguration?: PermissionConfiguration;
		EffectivePermission?: string | null;
	}

	/** Describes the public access policies that apply to the S3 bucket. */
	export interface PublicAccessFormProperties {
		EffectivePermission: FormControl<string | null | undefined>,
	}
	export function CreatePublicAccessFormGroup() {
		return new FormGroup<PublicAccessFormProperties>({
			EffectivePermission: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about how permissions are configured for the S3 bucket. */
	export interface PermissionConfiguration {

		/** Contains information about the bucket level permissions for the S3 bucket. */
		BucketLevelPermissions?: BucketLevelPermissions;

		/** Contains information about the account level permissions on the S3 bucket. */
		AccountLevelPermissions?: AccountLevelPermissions;
	}

	/** Contains information about how permissions are configured for the S3 bucket. */
	export interface PermissionConfigurationFormProperties {
	}
	export function CreatePermissionConfigurationFormGroup() {
		return new FormGroup<PermissionConfigurationFormProperties>({
		});

	}


	/** Contains information about the bucket level permissions for the S3 bucket. */
	export interface BucketLevelPermissions {

		/** Contains information on the current access control policies for the bucket. */
		AccessControlList?: AccessControlList;

		/** Contains information on the current bucket policies for the S3 bucket. */
		BucketPolicy?: BucketPolicy;

		/** Contains information on how the bucker owner's S3 Block Public Access settings are being applied to the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">S3 Block Public Access</a> for more information. */
		BlockPublicAccess?: BlockPublicAccess;
	}

	/** Contains information about the bucket level permissions for the S3 bucket. */
	export interface BucketLevelPermissionsFormProperties {
	}
	export function CreateBucketLevelPermissionsFormGroup() {
		return new FormGroup<BucketLevelPermissionsFormProperties>({
		});

	}


	/** Contains information on the current access control policies for the bucket. */
	export interface AccessControlList {
		AllowsPublicReadAccess?: boolean | null;
		AllowsPublicWriteAccess?: boolean | null;
	}

	/** Contains information on the current access control policies for the bucket. */
	export interface AccessControlListFormProperties {
		AllowsPublicReadAccess: FormControl<boolean | null | undefined>,
		AllowsPublicWriteAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateAccessControlListFormGroup() {
		return new FormGroup<AccessControlListFormProperties>({
			AllowsPublicReadAccess: new FormControl<boolean | null | undefined>(undefined),
			AllowsPublicWriteAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information on the current bucket policies for the S3 bucket. */
	export interface BucketPolicy {
		AllowsPublicReadAccess?: boolean | null;
		AllowsPublicWriteAccess?: boolean | null;
	}

	/** Contains information on the current bucket policies for the S3 bucket. */
	export interface BucketPolicyFormProperties {
		AllowsPublicReadAccess: FormControl<boolean | null | undefined>,
		AllowsPublicWriteAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateBucketPolicyFormGroup() {
		return new FormGroup<BucketPolicyFormProperties>({
			AllowsPublicReadAccess: new FormControl<boolean | null | undefined>(undefined),
			AllowsPublicWriteAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information on how the bucker owner's S3 Block Public Access settings are being applied to the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">S3 Block Public Access</a> for more information.  */
	export interface BlockPublicAccess {
		IgnorePublicAcls?: boolean | null;
		RestrictPublicBuckets?: boolean | null;
		BlockPublicAcls?: boolean | null;
		BlockPublicPolicy?: boolean | null;
	}

	/** Contains information on how the bucker owner's S3 Block Public Access settings are being applied to the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">S3 Block Public Access</a> for more information.  */
	export interface BlockPublicAccessFormProperties {
		IgnorePublicAcls: FormControl<boolean | null | undefined>,
		RestrictPublicBuckets: FormControl<boolean | null | undefined>,
		BlockPublicAcls: FormControl<boolean | null | undefined>,
		BlockPublicPolicy: FormControl<boolean | null | undefined>,
	}
	export function CreateBlockPublicAccessFormGroup() {
		return new FormGroup<BlockPublicAccessFormProperties>({
			IgnorePublicAcls: new FormControl<boolean | null | undefined>(undefined),
			RestrictPublicBuckets: new FormControl<boolean | null | undefined>(undefined),
			BlockPublicAcls: new FormControl<boolean | null | undefined>(undefined),
			BlockPublicPolicy: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about the account level permissions on the S3 bucket. */
	export interface AccountLevelPermissions {

		/** Contains information on how the bucker owner's S3 Block Public Access settings are being applied to the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">S3 Block Public Access</a> for more information. */
		BlockPublicAccess?: BlockPublicAccess;
	}

	/** Contains information about the account level permissions on the S3 bucket. */
	export interface AccountLevelPermissionsFormProperties {
	}
	export function CreateAccountLevelPermissionsFormGroup() {
		return new FormGroup<AccountLevelPermissionsFormProperties>({
		});

	}


	/** Contains information about the details of an instance. */
	export interface InstanceDetails {
		AvailabilityZone?: string | null;

		/** Contains information about the EC2 instance profile. */
		IamInstanceProfile?: IamInstanceProfile;
		ImageDescription?: string | null;
		ImageId?: string | null;
		InstanceId?: string | null;
		InstanceState?: string | null;
		InstanceType?: string | null;
		OutpostArn?: string | null;
		LaunchTime?: string | null;
		NetworkInterfaces?: Array<NetworkInterface>;
		Platform?: string | null;
		ProductCodes?: Array<ProductCode>;
		Tags?: Array<Tag>;
	}

	/** Contains information about the details of an instance. */
	export interface InstanceDetailsFormProperties {
		AvailabilityZone: FormControl<string | null | undefined>,
		ImageDescription: FormControl<string | null | undefined>,
		ImageId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		InstanceState: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		OutpostArn: FormControl<string | null | undefined>,
		LaunchTime: FormControl<string | null | undefined>,
		Platform: FormControl<string | null | undefined>,
	}
	export function CreateInstanceDetailsFormGroup() {
		return new FormGroup<InstanceDetailsFormProperties>({
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			ImageDescription: new FormControl<string | null | undefined>(undefined),
			ImageId: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			InstanceState: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			OutpostArn: new FormControl<string | null | undefined>(undefined),
			LaunchTime: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the EC2 instance profile. */
	export interface IamInstanceProfile {
		Arn?: string | null;
		Id?: string | null;
	}

	/** Contains information about the EC2 instance profile. */
	export interface IamInstanceProfileFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateIamInstanceProfileFormGroup() {
		return new FormGroup<IamInstanceProfileFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the elastic network interface of the EC2 instance. */
	export interface NetworkInterface {
		Ipv6Addresses?: Array<string>;
		NetworkInterfaceId?: string | null;
		PrivateDnsName?: string | null;
		PrivateIpAddress?: string | null;
		PrivateIpAddresses?: Array<PrivateIpAddressDetails>;
		PublicDnsName?: string | null;
		PublicIp?: string | null;
		SecurityGroups?: Array<SecurityGroup>;
		SubnetId?: string | null;
		VpcId?: string | null;
	}

	/** Contains information about the elastic network interface of the EC2 instance. */
	export interface NetworkInterfaceFormProperties {
		NetworkInterfaceId: FormControl<string | null | undefined>,
		PrivateDnsName: FormControl<string | null | undefined>,
		PrivateIpAddress: FormControl<string | null | undefined>,
		PublicDnsName: FormControl<string | null | undefined>,
		PublicIp: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInterfaceFormGroup() {
		return new FormGroup<NetworkInterfaceFormProperties>({
			NetworkInterfaceId: new FormControl<string | null | undefined>(undefined),
			PrivateDnsName: new FormControl<string | null | undefined>(undefined),
			PrivateIpAddress: new FormControl<string | null | undefined>(undefined),
			PublicDnsName: new FormControl<string | null | undefined>(undefined),
			PublicIp: new FormControl<string | null | undefined>(undefined),
			SubnetId: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains other private IP address information of the EC2 instance. */
	export interface PrivateIpAddressDetails {
		PrivateDnsName?: string | null;
		PrivateIpAddress?: string | null;
	}

	/** Contains other private IP address information of the EC2 instance. */
	export interface PrivateIpAddressDetailsFormProperties {
		PrivateDnsName: FormControl<string | null | undefined>,
		PrivateIpAddress: FormControl<string | null | undefined>,
	}
	export function CreatePrivateIpAddressDetailsFormGroup() {
		return new FormGroup<PrivateIpAddressDetailsFormProperties>({
			PrivateDnsName: new FormControl<string | null | undefined>(undefined),
			PrivateIpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the security groups associated with the EC2 instance. */
	export interface SecurityGroup {
		GroupId?: string | null;
		GroupName?: string | null;
	}

	/** Contains information about the security groups associated with the EC2 instance. */
	export interface SecurityGroupFormProperties {
		GroupId: FormControl<string | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
	}
	export function CreateSecurityGroupFormGroup() {
		return new FormGroup<SecurityGroupFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the product code for the EC2 instance. */
	export interface ProductCode {
		Code?: string | null;
		ProductType?: string | null;
	}

	/** Contains information about the product code for the EC2 instance. */
	export interface ProductCodeFormProperties {
		Code: FormControl<string | null | undefined>,
		ProductType: FormControl<string | null | undefined>,
	}
	export function CreateProductCodeFormGroup() {
		return new FormGroup<ProductCodeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			ProductType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains additional information about the generated finding. */
	export interface Service {

		/** Contains information about actions. */
		Action?: Action;

		/** Contains information about the reason that the finding was generated. */
		Evidence?: Evidence;
		Archived?: boolean | null;
		Count?: number | null;
		DetectorId?: string | null;
		EventFirstSeen?: string | null;
		EventLastSeen?: string | null;
		ResourceRole?: string | null;
		ServiceName?: string | null;
		UserFeedback?: string | null;
	}

	/** Contains additional information about the generated finding. */
	export interface ServiceFormProperties {
		Archived: FormControl<boolean | null | undefined>,
		Count: FormControl<number | null | undefined>,
		DetectorId: FormControl<string | null | undefined>,
		EventFirstSeen: FormControl<string | null | undefined>,
		EventLastSeen: FormControl<string | null | undefined>,
		ResourceRole: FormControl<string | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
		UserFeedback: FormControl<string | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			Archived: new FormControl<boolean | null | undefined>(undefined),
			Count: new FormControl<number | null | undefined>(undefined),
			DetectorId: new FormControl<string | null | undefined>(undefined),
			EventFirstSeen: new FormControl<string | null | undefined>(undefined),
			EventLastSeen: new FormControl<string | null | undefined>(undefined),
			ResourceRole: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
			UserFeedback: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about actions. */
	export interface Action {
		ActionType?: string | null;

		/** Contains information about the API operation. */
		AwsApiCallAction?: AwsApiCallAction;

		/** Contains information about the DNS_REQUEST action described in this finding. */
		DnsRequestAction?: DnsRequestAction;

		/** Contains information about the NETWORK_CONNECTION action described in the finding. */
		NetworkConnectionAction?: NetworkConnectionAction;

		/** Contains information about the PORT_PROBE action described in the finding. */
		PortProbeAction?: PortProbeAction;
	}

	/** Contains information about actions. */
	export interface ActionFormProperties {
		ActionType: FormControl<string | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			ActionType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the API operation. */
	export interface AwsApiCallAction {
		Api?: string | null;
		CallerType?: string | null;

		/** Contains information about the domain. */
		DomainDetails?: DomainDetails;

		/** Contains information about the remote IP address of the connection. */
		RemoteIpDetails?: RemoteIpDetails;
		ServiceName?: string | null;
	}

	/** Contains information about the API operation. */
	export interface AwsApiCallActionFormProperties {
		Api: FormControl<string | null | undefined>,
		CallerType: FormControl<string | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
	}
	export function CreateAwsApiCallActionFormGroup() {
		return new FormGroup<AwsApiCallActionFormProperties>({
			Api: new FormControl<string | null | undefined>(undefined),
			CallerType: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the domain. */
	export interface DomainDetails {
		Domain?: string | null;
	}

	/** Contains information about the domain. */
	export interface DomainDetailsFormProperties {
		Domain: FormControl<string | null | undefined>,
	}
	export function CreateDomainDetailsFormGroup() {
		return new FormGroup<DomainDetailsFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the remote IP address of the connection. */
	export interface RemoteIpDetails {

		/** Contains information about the city associated with the IP address. */
		City?: City;

		/** Contains information about the country where the remote IP address is located. */
		Country?: Country;

		/** Contains information about the location of the remote IP address. */
		GeoLocation?: GeoLocation;
		IpAddressV4?: string | null;

		/** Contains information about the ISP organization of the remote IP address. */
		Organization?: Organization;
	}

	/** Contains information about the remote IP address of the connection. */
	export interface RemoteIpDetailsFormProperties {
		IpAddressV4: FormControl<string | null | undefined>,
	}
	export function CreateRemoteIpDetailsFormGroup() {
		return new FormGroup<RemoteIpDetailsFormProperties>({
			IpAddressV4: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the city associated with the IP address. */
	export interface City {
		CityName?: string | null;
	}

	/** Contains information about the city associated with the IP address. */
	export interface CityFormProperties {
		CityName: FormControl<string | null | undefined>,
	}
	export function CreateCityFormGroup() {
		return new FormGroup<CityFormProperties>({
			CityName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the country where the remote IP address is located. */
	export interface Country {
		CountryCode?: string | null;
		CountryName?: string | null;
	}

	/** Contains information about the country where the remote IP address is located. */
	export interface CountryFormProperties {
		CountryCode: FormControl<string | null | undefined>,
		CountryName: FormControl<string | null | undefined>,
	}
	export function CreateCountryFormGroup() {
		return new FormGroup<CountryFormProperties>({
			CountryCode: new FormControl<string | null | undefined>(undefined),
			CountryName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the location of the remote IP address. */
	export interface GeoLocation {
		Lat?: number | null;
		Lon?: number | null;
	}

	/** Contains information about the location of the remote IP address. */
	export interface GeoLocationFormProperties {
		Lat: FormControl<number | null | undefined>,
		Lon: FormControl<number | null | undefined>,
	}
	export function CreateGeoLocationFormGroup() {
		return new FormGroup<GeoLocationFormProperties>({
			Lat: new FormControl<number | null | undefined>(undefined),
			Lon: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information about the ISP organization of the remote IP address. */
	export interface Organization {
		Asn?: string | null;
		AsnOrg?: string | null;
		Isp?: string | null;
		Org?: string | null;
	}

	/** Contains information about the ISP organization of the remote IP address. */
	export interface OrganizationFormProperties {
		Asn: FormControl<string | null | undefined>,
		AsnOrg: FormControl<string | null | undefined>,
		Isp: FormControl<string | null | undefined>,
		Org: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationFormGroup() {
		return new FormGroup<OrganizationFormProperties>({
			Asn: new FormControl<string | null | undefined>(undefined),
			AsnOrg: new FormControl<string | null | undefined>(undefined),
			Isp: new FormControl<string | null | undefined>(undefined),
			Org: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the DNS_REQUEST action described in this finding. */
	export interface DnsRequestAction {
		Domain?: string | null;
	}

	/** Contains information about the DNS_REQUEST action described in this finding. */
	export interface DnsRequestActionFormProperties {
		Domain: FormControl<string | null | undefined>,
	}
	export function CreateDnsRequestActionFormGroup() {
		return new FormGroup<DnsRequestActionFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the NETWORK_CONNECTION action described in the finding. */
	export interface NetworkConnectionAction {
		Blocked?: boolean | null;
		ConnectionDirection?: string | null;

		/** Contains information about the port for the local connection. */
		LocalPortDetails?: LocalPortDetails;
		Protocol?: string | null;

		/** Contains information about the local IP address of the connection. */
		LocalIpDetails?: LocalIpDetails;

		/** Contains information about the remote IP address of the connection. */
		RemoteIpDetails?: RemoteIpDetails;

		/** Contains information about the remote port. */
		RemotePortDetails?: RemotePortDetails;
	}

	/** Contains information about the NETWORK_CONNECTION action described in the finding. */
	export interface NetworkConnectionActionFormProperties {
		Blocked: FormControl<boolean | null | undefined>,
		ConnectionDirection: FormControl<string | null | undefined>,
		Protocol: FormControl<string | null | undefined>,
	}
	export function CreateNetworkConnectionActionFormGroup() {
		return new FormGroup<NetworkConnectionActionFormProperties>({
			Blocked: new FormControl<boolean | null | undefined>(undefined),
			ConnectionDirection: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the port for the local connection. */
	export interface LocalPortDetails {
		Port?: number | null;
		PortName?: string | null;
	}

	/** Contains information about the port for the local connection. */
	export interface LocalPortDetailsFormProperties {
		Port: FormControl<number | null | undefined>,
		PortName: FormControl<string | null | undefined>,
	}
	export function CreateLocalPortDetailsFormGroup() {
		return new FormGroup<LocalPortDetailsFormProperties>({
			Port: new FormControl<number | null | undefined>(undefined),
			PortName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the local IP address of the connection. */
	export interface LocalIpDetails {
		IpAddressV4?: string | null;
	}

	/** Contains information about the local IP address of the connection. */
	export interface LocalIpDetailsFormProperties {
		IpAddressV4: FormControl<string | null | undefined>,
	}
	export function CreateLocalIpDetailsFormGroup() {
		return new FormGroup<LocalIpDetailsFormProperties>({
			IpAddressV4: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the remote port. */
	export interface RemotePortDetails {
		Port?: number | null;
		PortName?: string | null;
	}

	/** Contains information about the remote port. */
	export interface RemotePortDetailsFormProperties {
		Port: FormControl<number | null | undefined>,
		PortName: FormControl<string | null | undefined>,
	}
	export function CreateRemotePortDetailsFormGroup() {
		return new FormGroup<RemotePortDetailsFormProperties>({
			Port: new FormControl<number | null | undefined>(undefined),
			PortName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the PORT_PROBE action described in the finding. */
	export interface PortProbeAction {
		Blocked?: boolean | null;
		PortProbeDetails?: Array<PortProbeDetail>;
	}

	/** Contains information about the PORT_PROBE action described in the finding. */
	export interface PortProbeActionFormProperties {
		Blocked: FormControl<boolean | null | undefined>,
	}
	export function CreatePortProbeActionFormGroup() {
		return new FormGroup<PortProbeActionFormProperties>({
			Blocked: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about the port probe details. */
	export interface PortProbeDetail {

		/** Contains information about the port for the local connection. */
		LocalPortDetails?: LocalPortDetails;

		/** Contains information about the local IP address of the connection. */
		LocalIpDetails?: LocalIpDetails;

		/** Contains information about the remote IP address of the connection. */
		RemoteIpDetails?: RemoteIpDetails;
	}

	/** Contains information about the port probe details. */
	export interface PortProbeDetailFormProperties {
	}
	export function CreatePortProbeDetailFormGroup() {
		return new FormGroup<PortProbeDetailFormProperties>({
		});

	}


	/** Contains information about the reason that the finding was generated. */
	export interface Evidence {
		ThreatIntelligenceDetails?: Array<ThreatIntelligenceDetail>;
	}

	/** Contains information about the reason that the finding was generated. */
	export interface EvidenceFormProperties {
	}
	export function CreateEvidenceFormGroup() {
		return new FormGroup<EvidenceFormProperties>({
		});

	}


	/** An instance of a threat intelligence detail that constitutes evidence for the finding. */
	export interface ThreatIntelligenceDetail {
		ThreatListName?: string | null;
		ThreatNames?: Array<string>;
	}

	/** An instance of a threat intelligence detail that constitutes evidence for the finding. */
	export interface ThreatIntelligenceDetailFormProperties {
		ThreatListName: FormControl<string | null | undefined>,
	}
	export function CreateThreatIntelligenceDetailFormGroup() {
		return new FormGroup<ThreatIntelligenceDetailFormProperties>({
			ThreatListName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OrderBy { ASC = 0, DESC = 1 }

	export interface GetFindingsStatisticsResponse {

		/**
		 * Contains information about finding statistics.
		 * Required
		 */
		FindingStatistics: FindingStatistics;
	}
	export interface GetFindingsStatisticsResponseFormProperties {
	}
	export function CreateGetFindingsStatisticsResponseFormGroup() {
		return new FormGroup<GetFindingsStatisticsResponseFormProperties>({
		});

	}


	/** Contains information about finding statistics. */
	export interface FindingStatistics {
		CountBySeverity?: CountBySeverity;
	}

	/** Contains information about finding statistics. */
	export interface FindingStatisticsFormProperties {
	}
	export function CreateFindingStatisticsFormGroup() {
		return new FormGroup<FindingStatisticsFormProperties>({
		});

	}

	export interface CountBySeverity {
	}
	export interface CountBySeverityFormProperties {
	}
	export function CreateCountBySeverityFormGroup() {
		return new FormGroup<CountBySeverityFormProperties>({
		});

	}

	export enum FindingStatisticType { COUNT_BY_SEVERITY = 0 }

	export interface GetIPSetResponse {
		Name: string;
		Format: GetIPSetResponseFormat;
		Location: string;
		Status: GetIPSetResponseStatus;
		Tags?: TagMap;
	}
	export interface GetIPSetResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		Format: FormControl<GetIPSetResponseFormat | null | undefined>,
		Location: FormControl<string | null | undefined>,
		Status: FormControl<GetIPSetResponseStatus | null | undefined>,
	}
	export function CreateGetIPSetResponseFormGroup() {
		return new FormGroup<GetIPSetResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Format: new FormControl<GetIPSetResponseFormat | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<GetIPSetResponseStatus | null | undefined>(undefined),
		});

	}

	export enum GetIPSetResponseFormat { TXT = 0, STIX = 1, OTX_CSV = 2, ALIEN_VAULT = 3, PROOF_POINT = 4, FIRE_EYE = 5 }

	export enum GetIPSetResponseStatus { INACTIVE = 0, ACTIVATING = 1, ACTIVE = 2, DEACTIVATING = 3, ERROR = 4, DELETE_PENDING = 5, DELETED = 6 }

	export interface GetInvitationsCountResponse {
		InvitationsCount?: number | null;
	}
	export interface GetInvitationsCountResponseFormProperties {
		InvitationsCount: FormControl<number | null | undefined>,
	}
	export function CreateGetInvitationsCountResponseFormGroup() {
		return new FormGroup<GetInvitationsCountResponseFormProperties>({
			InvitationsCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetMasterAccountResponse {

		/**
		 * Contains information about the master account and invitation.
		 * Required
		 */
		Master: Master;
	}
	export interface GetMasterAccountResponseFormProperties {
	}
	export function CreateGetMasterAccountResponseFormGroup() {
		return new FormGroup<GetMasterAccountResponseFormProperties>({
		});

	}


	/** Contains information about the master account and invitation. */
	export interface Master {
		AccountId?: string | null;
		InvitationId?: string | null;
		RelationshipStatus?: string | null;
		InvitedAt?: string | null;
	}

	/** Contains information about the master account and invitation. */
	export interface MasterFormProperties {
		AccountId: FormControl<string | null | undefined>,
		InvitationId: FormControl<string | null | undefined>,
		RelationshipStatus: FormControl<string | null | undefined>,
		InvitedAt: FormControl<string | null | undefined>,
	}
	export function CreateMasterFormGroup() {
		return new FormGroup<MasterFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			InvitationId: new FormControl<string | null | undefined>(undefined),
			RelationshipStatus: new FormControl<string | null | undefined>(undefined),
			InvitedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMembersResponse {
		Members: Array<Member>;
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}
	export interface GetMembersResponseFormProperties {
	}
	export function CreateGetMembersResponseFormGroup() {
		return new FormGroup<GetMembersResponseFormProperties>({
		});

	}


	/** Contains information about the member account.  */
	export interface Member {
		AccountId: string;
		DetectorId?: string | null;
		MasterId: string;
		Email: string;
		RelationshipStatus: string;
		InvitedAt?: string | null;
		UpdatedAt: string;
	}

	/** Contains information about the member account.  */
	export interface MemberFormProperties {
		AccountId: FormControl<string | null | undefined>,
		DetectorId: FormControl<string | null | undefined>,
		MasterId: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		RelationshipStatus: FormControl<string | null | undefined>,
		InvitedAt: FormControl<string | null | undefined>,
		UpdatedAt: FormControl<string | null | undefined>,
	}
	export function CreateMemberFormGroup() {
		return new FormGroup<MemberFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			DetectorId: new FormControl<string | null | undefined>(undefined),
			MasterId: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			RelationshipStatus: new FormControl<string | null | undefined>(undefined),
			InvitedAt: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetThreatIntelSetResponse {
		Name: string;
		Format: GetIPSetResponseFormat;
		Location: string;
		Status: GetIPSetResponseStatus;
		Tags?: TagMap;
	}
	export interface GetThreatIntelSetResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		Format: FormControl<GetIPSetResponseFormat | null | undefined>,
		Location: FormControl<string | null | undefined>,
		Status: FormControl<GetIPSetResponseStatus | null | undefined>,
	}
	export function CreateGetThreatIntelSetResponseFormGroup() {
		return new FormGroup<GetThreatIntelSetResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Format: new FormControl<GetIPSetResponseFormat | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<GetIPSetResponseStatus | null | undefined>(undefined),
		});

	}

	export interface InviteMembersResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}
	export interface InviteMembersResponseFormProperties {
	}
	export function CreateInviteMembersResponseFormGroup() {
		return new FormGroup<InviteMembersResponseFormProperties>({
		});

	}

	export interface ListDetectorsResponse {
		DetectorIds: Array<string>;
		NextToken?: string | null;
	}
	export interface ListDetectorsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDetectorsResponseFormGroup() {
		return new FormGroup<ListDetectorsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFiltersResponse {
		FilterNames: Array<string>;
		NextToken?: string | null;
	}
	export interface ListFiltersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFiltersResponseFormGroup() {
		return new FormGroup<ListFiltersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFindingsResponse {
		FindingIds: Array<string>;
		NextToken?: string | null;
	}
	export interface ListFindingsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingsResponseFormGroup() {
		return new FormGroup<ListFindingsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIPSetsResponse {
		IpSetIds: Array<string>;
		NextToken?: string | null;
	}
	export interface ListIPSetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIPSetsResponseFormGroup() {
		return new FormGroup<ListIPSetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInvitationsResponse {
		Invitations?: Array<Invitation>;
		NextToken?: string | null;
	}
	export interface ListInvitationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInvitationsResponseFormGroup() {
		return new FormGroup<ListInvitationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the invitation to become a member account. */
	export interface Invitation {
		AccountId?: string | null;
		InvitationId?: string | null;
		RelationshipStatus?: string | null;
		InvitedAt?: string | null;
	}

	/** Contains information about the invitation to become a member account. */
	export interface InvitationFormProperties {
		AccountId: FormControl<string | null | undefined>,
		InvitationId: FormControl<string | null | undefined>,
		RelationshipStatus: FormControl<string | null | undefined>,
		InvitedAt: FormControl<string | null | undefined>,
	}
	export function CreateInvitationFormGroup() {
		return new FormGroup<InvitationFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			InvitationId: new FormControl<string | null | undefined>(undefined),
			RelationshipStatus: new FormControl<string | null | undefined>(undefined),
			InvitedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMembersResponse {
		Members?: Array<Member>;
		NextToken?: string | null;
	}
	export interface ListMembersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMembersResponseFormGroup() {
		return new FormGroup<ListMembersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOrganizationAdminAccountsResponse {
		AdminAccounts?: Array<AdminAccount>;
		NextToken?: string | null;
	}
	export interface ListOrganizationAdminAccountsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOrganizationAdminAccountsResponseFormGroup() {
		return new FormGroup<ListOrganizationAdminAccountsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The account within the organization specified as the GuardDuty delegated administrator. */
	export interface AdminAccount {
		AdminAccountId?: string | null;
		AdminStatus?: AdminAccountAdminStatus | null;
	}

	/** The account within the organization specified as the GuardDuty delegated administrator. */
	export interface AdminAccountFormProperties {
		AdminAccountId: FormControl<string | null | undefined>,
		AdminStatus: FormControl<AdminAccountAdminStatus | null | undefined>,
	}
	export function CreateAdminAccountFormGroup() {
		return new FormGroup<AdminAccountFormProperties>({
			AdminAccountId: new FormControl<string | null | undefined>(undefined),
			AdminStatus: new FormControl<AdminAccountAdminStatus | null | undefined>(undefined),
		});

	}

	export enum AdminAccountAdminStatus { ENABLED = 0, DISABLE_IN_PROGRESS = 1 }

	export interface ListPublishingDestinationsResponse {
		Destinations: Array<Destination>;
		NextToken?: string | null;
	}
	export interface ListPublishingDestinationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPublishingDestinationsResponseFormGroup() {
		return new FormGroup<ListPublishingDestinationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the publishing destination, including the ID, type, and status. */
	export interface Destination {
		DestinationId: string;
		DestinationType: DescribePublishingDestinationResponseDestinationType;
		Status: DescribePublishingDestinationResponseStatus;
	}

	/** Contains information about the publishing destination, including the ID, type, and status. */
	export interface DestinationFormProperties {
		DestinationId: FormControl<string | null | undefined>,
		DestinationType: FormControl<DescribePublishingDestinationResponseDestinationType | null | undefined>,
		Status: FormControl<DescribePublishingDestinationResponseStatus | null | undefined>,
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
			DestinationId: new FormControl<string | null | undefined>(undefined),
			DestinationType: new FormControl<DescribePublishingDestinationResponseDestinationType | null | undefined>(undefined),
			Status: new FormControl<DescribePublishingDestinationResponseStatus | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListThreatIntelSetsResponse {
		ThreatIntelSetIds: Array<string>;
		NextToken?: string | null;
	}
	export interface ListThreatIntelSetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListThreatIntelSetsResponseFormGroup() {
		return new FormGroup<ListThreatIntelSetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartMonitoringMembersResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}
	export interface StartMonitoringMembersResponseFormProperties {
	}
	export function CreateStartMonitoringMembersResponseFormGroup() {
		return new FormGroup<StartMonitoringMembersResponseFormProperties>({
		});

	}

	export interface StopMonitoringMembersResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}
	export interface StopMonitoringMembersResponseFormProperties {
	}
	export function CreateStopMonitoringMembersResponseFormGroup() {
		return new FormGroup<StopMonitoringMembersResponseFormProperties>({
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

	export interface UpdateDetectorResponse {
	}
	export interface UpdateDetectorResponseFormProperties {
	}
	export function CreateUpdateDetectorResponseFormGroup() {
		return new FormGroup<UpdateDetectorResponseFormProperties>({
		});

	}

	export interface UpdateFilterResponse {
		Name: string;
	}
	export interface UpdateFilterResponseFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFilterResponseFormGroup() {
		return new FormGroup<UpdateFilterResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFindingsFeedbackResponse {
	}
	export interface UpdateFindingsFeedbackResponseFormProperties {
	}
	export function CreateUpdateFindingsFeedbackResponseFormGroup() {
		return new FormGroup<UpdateFindingsFeedbackResponseFormProperties>({
		});

	}

	export interface UpdateIPSetResponse {
	}
	export interface UpdateIPSetResponseFormProperties {
	}
	export function CreateUpdateIPSetResponseFormGroup() {
		return new FormGroup<UpdateIPSetResponseFormProperties>({
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

	export interface UpdatePublishingDestinationResponse {
	}
	export interface UpdatePublishingDestinationResponseFormProperties {
	}
	export function CreateUpdatePublishingDestinationResponseFormGroup() {
		return new FormGroup<UpdatePublishingDestinationResponseFormProperties>({
		});

	}

	export interface UpdateThreatIntelSetResponse {
	}
	export interface UpdateThreatIntelSetResponseFormProperties {
	}
	export function CreateUpdateThreatIntelSetResponseFormGroup() {
		return new FormGroup<UpdateThreatIntelSetResponseFormProperties>({
		});

	}

	export interface AcceptInvitationRequest {
		MasterId: string;
		InvitationId: string;
	}
	export interface AcceptInvitationRequestFormProperties {
		MasterId: FormControl<string | null | undefined>,
		InvitationId: FormControl<string | null | undefined>,
	}
	export function CreateAcceptInvitationRequestFormGroup() {
		return new FormGroup<AcceptInvitationRequestFormProperties>({
			MasterId: new FormControl<string | null | undefined>(undefined),
			InvitationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AdminStatus { ENABLED = 0, DISABLE_IN_PROGRESS = 1 }

	export interface ArchiveFindingsRequest {
		FindingIds: Array<string>;
	}
	export interface ArchiveFindingsRequestFormProperties {
	}
	export function CreateArchiveFindingsRequestFormGroup() {
		return new FormGroup<ArchiveFindingsRequestFormProperties>({
		});

	}


	/** Contains information about the condition. */
	export interface Condition {
		Eq?: Array<string>;
		Neq?: Array<string>;
		Gt?: number | null;
		Gte?: number | null;
		Lt?: number | null;
		Lte?: number | null;
		Equals?: Array<string>;
		NotEquals?: Array<string>;
		GreaterThan?: number | null;
		GreaterThanOrEqual?: number | null;
		LessThan?: number | null;
		LessThanOrEqual?: number | null;
	}

	/** Contains information about the condition. */
	export interface ConditionFormProperties {
		Gt: FormControl<number | null | undefined>,
		Gte: FormControl<number | null | undefined>,
		Lt: FormControl<number | null | undefined>,
		Lte: FormControl<number | null | undefined>,
		GreaterThan: FormControl<number | null | undefined>,
		GreaterThanOrEqual: FormControl<number | null | undefined>,
		LessThan: FormControl<number | null | undefined>,
		LessThanOrEqual: FormControl<number | null | undefined>,
	}
	export function CreateConditionFormGroup() {
		return new FormGroup<ConditionFormProperties>({
			Gt: new FormControl<number | null | undefined>(undefined),
			Gte: new FormControl<number | null | undefined>(undefined),
			Lt: new FormControl<number | null | undefined>(undefined),
			Lte: new FormControl<number | null | undefined>(undefined),
			GreaterThan: new FormControl<number | null | undefined>(undefined),
			GreaterThanOrEqual: new FormControl<number | null | undefined>(undefined),
			LessThan: new FormControl<number | null | undefined>(undefined),
			LessThanOrEqual: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FindingPublishingFrequency { FIFTEEN_MINUTES = 0, ONE_HOUR = 1, SIX_HOURS = 2 }

	export interface CreateDetectorRequest {
		Enable: boolean;
		ClientToken?: string | null;
		FindingPublishingFrequency?: GetDetectorResponseFindingPublishingFrequency | null;
		Tags?: TagMap;
	}
	export interface CreateDetectorRequestFormProperties {
		Enable: FormControl<boolean | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		FindingPublishingFrequency: FormControl<GetDetectorResponseFindingPublishingFrequency | null | undefined>,
	}
	export function CreateCreateDetectorRequestFormGroup() {
		return new FormGroup<CreateDetectorRequestFormProperties>({
			Enable: new FormControl<boolean | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			FindingPublishingFrequency: new FormControl<GetDetectorResponseFindingPublishingFrequency | null | undefined>(undefined),
		});

	}

	export enum FilterAction { NOOP = 0, ARCHIVE = 1 }

	export interface CreateFilterRequest {
		Name: string;
		Description?: string | null;
		Action?: GetFilterResponseAction | null;
		Rank?: number | null;

		/**
		 * Contains information about the criteria used for querying findings.
		 * Required
		 */
		FindingCriteria: FindingCriteria;
		ClientToken?: string | null;
		Tags?: TagMap;
	}
	export interface CreateFilterRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Action: FormControl<GetFilterResponseAction | null | undefined>,
		Rank: FormControl<number | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateFilterRequestFormGroup() {
		return new FormGroup<CreateFilterRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Action: new FormControl<GetFilterResponseAction | null | undefined>(undefined),
			Rank: new FormControl<number | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IpSetFormat { TXT = 0, STIX = 1, OTX_CSV = 2, ALIEN_VAULT = 3, PROOF_POINT = 4, FIRE_EYE = 5 }

	export interface CreateIPSetRequest {
		Name: string;
		Format: GetIPSetResponseFormat;
		Location: string;
		Activate: boolean;
		ClientToken?: string | null;
		Tags?: TagMap;
	}
	export interface CreateIPSetRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Format: FormControl<GetIPSetResponseFormat | null | undefined>,
		Location: FormControl<string | null | undefined>,
		Activate: FormControl<boolean | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateIPSetRequestFormGroup() {
		return new FormGroup<CreateIPSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Format: new FormControl<GetIPSetResponseFormat | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
			Activate: new FormControl<boolean | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMembersRequest {
		AccountDetails: Array<AccountDetail>;
	}
	export interface CreateMembersRequestFormProperties {
	}
	export function CreateCreateMembersRequestFormGroup() {
		return new FormGroup<CreateMembersRequestFormProperties>({
		});

	}

	export enum DestinationType { S3 = 0 }

	export interface CreatePublishingDestinationRequest {
		DestinationType: DescribePublishingDestinationResponseDestinationType;

		/**
		 * Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings.
		 * Required
		 */
		DestinationProperties: DestinationProperties;
		ClientToken?: string | null;
	}
	export interface CreatePublishingDestinationRequestFormProperties {
		DestinationType: FormControl<DescribePublishingDestinationResponseDestinationType | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreatePublishingDestinationRequestFormGroup() {
		return new FormGroup<CreatePublishingDestinationRequestFormProperties>({
			DestinationType: new FormControl<DescribePublishingDestinationResponseDestinationType | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSampleFindingsRequest {
		FindingTypes?: Array<string>;
	}
	export interface CreateSampleFindingsRequestFormProperties {
	}
	export function CreateCreateSampleFindingsRequestFormGroup() {
		return new FormGroup<CreateSampleFindingsRequestFormProperties>({
		});

	}

	export enum ThreatIntelSetFormat { TXT = 0, STIX = 1, OTX_CSV = 2, ALIEN_VAULT = 3, PROOF_POINT = 4, FIRE_EYE = 5 }

	export interface CreateThreatIntelSetRequest {
		Name: string;
		Format: GetIPSetResponseFormat;
		Location: string;
		Activate: boolean;
		ClientToken?: string | null;
		Tags?: TagMap;
	}
	export interface CreateThreatIntelSetRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Format: FormControl<GetIPSetResponseFormat | null | undefined>,
		Location: FormControl<string | null | undefined>,
		Activate: FormControl<boolean | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateThreatIntelSetRequestFormGroup() {
		return new FormGroup<CreateThreatIntelSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Format: new FormControl<GetIPSetResponseFormat | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
			Activate: new FormControl<boolean | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeclineInvitationsRequest {
		AccountIds: Array<string>;
	}
	export interface DeclineInvitationsRequestFormProperties {
	}
	export function CreateDeclineInvitationsRequestFormGroup() {
		return new FormGroup<DeclineInvitationsRequestFormProperties>({
		});

	}

	export interface DeleteDetectorRequest {
	}
	export interface DeleteDetectorRequestFormProperties {
	}
	export function CreateDeleteDetectorRequestFormGroup() {
		return new FormGroup<DeleteDetectorRequestFormProperties>({
		});

	}

	export interface DeleteFilterRequest {
	}
	export interface DeleteFilterRequestFormProperties {
	}
	export function CreateDeleteFilterRequestFormGroup() {
		return new FormGroup<DeleteFilterRequestFormProperties>({
		});

	}

	export interface DeleteIPSetRequest {
	}
	export interface DeleteIPSetRequestFormProperties {
	}
	export function CreateDeleteIPSetRequestFormGroup() {
		return new FormGroup<DeleteIPSetRequestFormProperties>({
		});

	}

	export interface DeleteInvitationsRequest {
		AccountIds: Array<string>;
	}
	export interface DeleteInvitationsRequestFormProperties {
	}
	export function CreateDeleteInvitationsRequestFormGroup() {
		return new FormGroup<DeleteInvitationsRequestFormProperties>({
		});

	}

	export interface DeleteMembersRequest {
		AccountIds: Array<string>;
	}
	export interface DeleteMembersRequestFormProperties {
	}
	export function CreateDeleteMembersRequestFormGroup() {
		return new FormGroup<DeleteMembersRequestFormProperties>({
		});

	}

	export interface DeletePublishingDestinationRequest {
	}
	export interface DeletePublishingDestinationRequestFormProperties {
	}
	export function CreateDeletePublishingDestinationRequestFormGroup() {
		return new FormGroup<DeletePublishingDestinationRequestFormProperties>({
		});

	}

	export interface DeleteThreatIntelSetRequest {
	}
	export interface DeleteThreatIntelSetRequestFormProperties {
	}
	export function CreateDeleteThreatIntelSetRequestFormGroup() {
		return new FormGroup<DeleteThreatIntelSetRequestFormProperties>({
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

	export interface DescribePublishingDestinationRequest {
	}
	export interface DescribePublishingDestinationRequestFormProperties {
	}
	export function CreateDescribePublishingDestinationRequestFormGroup() {
		return new FormGroup<DescribePublishingDestinationRequestFormProperties>({
		});

	}

	export enum PublishingStatus { PENDING_VERIFICATION = 0, PUBLISHING = 1, UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY = 2, STOPPED = 3 }

	export enum DetectorStatus { ENABLED = 0, DISABLED = 1 }

	export interface DisableOrganizationAdminAccountRequest {
		AdminAccountId: string;
	}
	export interface DisableOrganizationAdminAccountRequestFormProperties {
		AdminAccountId: FormControl<string | null | undefined>,
	}
	export function CreateDisableOrganizationAdminAccountRequestFormGroup() {
		return new FormGroup<DisableOrganizationAdminAccountRequestFormProperties>({
			AdminAccountId: new FormControl<string | null | undefined>(undefined),
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

	export interface DisassociateMembersRequest {
		AccountIds: Array<string>;
	}
	export interface DisassociateMembersRequestFormProperties {
	}
	export function CreateDisassociateMembersRequestFormGroup() {
		return new FormGroup<DisassociateMembersRequestFormProperties>({
		});

	}

	export interface EnableOrganizationAdminAccountRequest {
		AdminAccountId: string;
	}
	export interface EnableOrganizationAdminAccountRequestFormProperties {
		AdminAccountId: FormControl<string | null | undefined>,
	}
	export function CreateEnableOrganizationAdminAccountRequestFormGroup() {
		return new FormGroup<EnableOrganizationAdminAccountRequestFormProperties>({
			AdminAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Feedback { USEFUL = 0, NOT_USEFUL = 1 }

	export interface GetDetectorRequest {
	}
	export interface GetDetectorRequestFormProperties {
	}
	export function CreateGetDetectorRequestFormGroup() {
		return new FormGroup<GetDetectorRequestFormProperties>({
		});

	}

	export interface GetFilterRequest {
	}
	export interface GetFilterRequestFormProperties {
	}
	export function CreateGetFilterRequestFormGroup() {
		return new FormGroup<GetFilterRequestFormProperties>({
		});

	}


	/** Contains information about the criteria used for sorting findings. */
	export interface SortCriteria {
		AttributeName?: string | null;
		OrderBy?: OrderBy | null;
	}

	/** Contains information about the criteria used for sorting findings. */
	export interface SortCriteriaFormProperties {
		AttributeName: FormControl<string | null | undefined>,
		OrderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateSortCriteriaFormGroup() {
		return new FormGroup<SortCriteriaFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined),
			OrderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}

	export interface GetFindingsRequest {
		FindingIds: Array<string>;

		/** Contains information about the criteria used for sorting findings. */
		SortCriteria?: SortCriteria;
	}
	export interface GetFindingsRequestFormProperties {
	}
	export function CreateGetFindingsRequestFormGroup() {
		return new FormGroup<GetFindingsRequestFormProperties>({
		});

	}

	export interface GetFindingsStatisticsRequest {
		FindingStatisticTypes: Array<FindingStatisticType>;

		/** Contains information about the criteria used for querying findings. */
		FindingCriteria?: FindingCriteria;
	}
	export interface GetFindingsStatisticsRequestFormProperties {
	}
	export function CreateGetFindingsStatisticsRequestFormGroup() {
		return new FormGroup<GetFindingsStatisticsRequestFormProperties>({
		});

	}

	export interface GetIPSetRequest {
	}
	export interface GetIPSetRequestFormProperties {
	}
	export function CreateGetIPSetRequestFormGroup() {
		return new FormGroup<GetIPSetRequestFormProperties>({
		});

	}

	export enum IpSetStatus { INACTIVE = 0, ACTIVATING = 1, ACTIVE = 2, DEACTIVATING = 3, ERROR = 4, DELETE_PENDING = 5, DELETED = 6 }

	export interface GetInvitationsCountRequest {
	}
	export interface GetInvitationsCountRequestFormProperties {
	}
	export function CreateGetInvitationsCountRequestFormGroup() {
		return new FormGroup<GetInvitationsCountRequestFormProperties>({
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

	export interface GetMembersRequest {
		AccountIds: Array<string>;
	}
	export interface GetMembersRequestFormProperties {
	}
	export function CreateGetMembersRequestFormGroup() {
		return new FormGroup<GetMembersRequestFormProperties>({
		});

	}

	export interface GetThreatIntelSetRequest {
	}
	export interface GetThreatIntelSetRequestFormProperties {
	}
	export function CreateGetThreatIntelSetRequestFormGroup() {
		return new FormGroup<GetThreatIntelSetRequestFormProperties>({
		});

	}

	export enum ThreatIntelSetStatus { INACTIVE = 0, ACTIVATING = 1, ACTIVE = 2, DEACTIVATING = 3, ERROR = 4, DELETE_PENDING = 5, DELETED = 6 }

	export interface InviteMembersRequest {
		AccountIds: Array<string>;
		DisableEmailNotification?: boolean | null;
		Message?: string | null;
	}
	export interface InviteMembersRequestFormProperties {
		DisableEmailNotification: FormControl<boolean | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInviteMembersRequestFormGroup() {
		return new FormGroup<InviteMembersRequestFormProperties>({
			DisableEmailNotification: new FormControl<boolean | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDetectorsRequest {
	}
	export interface ListDetectorsRequestFormProperties {
	}
	export function CreateListDetectorsRequestFormGroup() {
		return new FormGroup<ListDetectorsRequestFormProperties>({
		});

	}

	export interface ListFiltersRequest {
	}
	export interface ListFiltersRequestFormProperties {
	}
	export function CreateListFiltersRequestFormGroup() {
		return new FormGroup<ListFiltersRequestFormProperties>({
		});

	}

	export interface ListFindingsRequest {

		/** Contains information about the criteria used for querying findings. */
		FindingCriteria?: FindingCriteria;

		/** Contains information about the criteria used for sorting findings. */
		SortCriteria?: SortCriteria;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListFindingsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingsRequestFormGroup() {
		return new FormGroup<ListFindingsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIPSetsRequest {
	}
	export interface ListIPSetsRequestFormProperties {
	}
	export function CreateListIPSetsRequestFormGroup() {
		return new FormGroup<ListIPSetsRequestFormProperties>({
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

	export interface ListPublishingDestinationsRequest {
	}
	export interface ListPublishingDestinationsRequestFormProperties {
	}
	export function CreateListPublishingDestinationsRequestFormGroup() {
		return new FormGroup<ListPublishingDestinationsRequestFormProperties>({
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

	export interface ListThreatIntelSetsRequest {
	}
	export interface ListThreatIntelSetsRequestFormProperties {
	}
	export function CreateListThreatIntelSetsRequestFormGroup() {
		return new FormGroup<ListThreatIntelSetsRequestFormProperties>({
		});

	}

	export interface StartMonitoringMembersRequest {
		AccountIds: Array<string>;
	}
	export interface StartMonitoringMembersRequestFormProperties {
	}
	export function CreateStartMonitoringMembersRequestFormGroup() {
		return new FormGroup<StartMonitoringMembersRequestFormProperties>({
		});

	}

	export interface StopMonitoringMembersRequest {
		AccountIds: Array<string>;
	}
	export interface StopMonitoringMembersRequestFormProperties {
	}
	export function CreateStopMonitoringMembersRequestFormGroup() {
		return new FormGroup<StopMonitoringMembersRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {
		Tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UnarchiveFindingsRequest {
		FindingIds: Array<string>;
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

	export interface UpdateDetectorRequest {
		Enable?: boolean | null;
		FindingPublishingFrequency?: GetDetectorResponseFindingPublishingFrequency | null;
	}
	export interface UpdateDetectorRequestFormProperties {
		Enable: FormControl<boolean | null | undefined>,
		FindingPublishingFrequency: FormControl<GetDetectorResponseFindingPublishingFrequency | null | undefined>,
	}
	export function CreateUpdateDetectorRequestFormGroup() {
		return new FormGroup<UpdateDetectorRequestFormProperties>({
			Enable: new FormControl<boolean | null | undefined>(undefined),
			FindingPublishingFrequency: new FormControl<GetDetectorResponseFindingPublishingFrequency | null | undefined>(undefined),
		});

	}

	export interface UpdateFilterRequest {
		Description?: string | null;
		Action?: GetFilterResponseAction | null;
		Rank?: number | null;

		/** Contains information about the criteria used for querying findings. */
		FindingCriteria?: FindingCriteria;
	}
	export interface UpdateFilterRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		Action: FormControl<GetFilterResponseAction | null | undefined>,
		Rank: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFilterRequestFormGroup() {
		return new FormGroup<UpdateFilterRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Action: new FormControl<GetFilterResponseAction | null | undefined>(undefined),
			Rank: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateFindingsFeedbackRequest {
		FindingIds: Array<string>;
		Feedback: Feedback;
		Comments?: string | null;
	}
	export interface UpdateFindingsFeedbackRequestFormProperties {
		Feedback: FormControl<Feedback | null | undefined>,
		Comments: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFindingsFeedbackRequestFormGroup() {
		return new FormGroup<UpdateFindingsFeedbackRequestFormProperties>({
			Feedback: new FormControl<Feedback | null | undefined>(undefined),
			Comments: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateIPSetRequest {
		Name?: string | null;
		Location?: string | null;
		Activate?: boolean | null;
	}
	export interface UpdateIPSetRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
		Activate: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateIPSetRequestFormGroup() {
		return new FormGroup<UpdateIPSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
			Activate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateOrganizationConfigurationRequest {
		AutoEnable: boolean;
	}
	export interface UpdateOrganizationConfigurationRequestFormProperties {
		AutoEnable: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateOrganizationConfigurationRequestFormGroup() {
		return new FormGroup<UpdateOrganizationConfigurationRequestFormProperties>({
			AutoEnable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdatePublishingDestinationRequest {

		/** Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings. */
		DestinationProperties?: DestinationProperties;
	}
	export interface UpdatePublishingDestinationRequestFormProperties {
	}
	export function CreateUpdatePublishingDestinationRequestFormGroup() {
		return new FormGroup<UpdatePublishingDestinationRequestFormProperties>({
		});

	}

	export interface UpdateThreatIntelSetRequest {
		Name?: string | null;
		Location?: string | null;
		Activate?: boolean | null;
	}
	export interface UpdateThreatIntelSetRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
		Activate: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateThreatIntelSetRequestFormGroup() {
		return new FormGroup<UpdateThreatIntelSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
			Activate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Accepts the invitation to be monitored by a master GuardDuty account.
		 * Post detector/{detectorId}/master
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty member account.
		 * @return {AcceptInvitationResponse} Success
		 */
		AcceptInvitation(detectorId: string, requestBody: AcceptInvitationPostBody): Observable<AcceptInvitationResponse> {
			return this.http.post<AcceptInvitationResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/master', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides the details for the GuardDuty master account associated with the current GuardDuty member account.
		 * Get detector/{detectorId}/master
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty member account.
		 * @return {GetMasterAccountResponse} Success
		 */
		GetMasterAccount(detectorId: string): Observable<GetMasterAccountResponse> {
			return this.http.get<GetMasterAccountResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/master', {});
		}

		/**
		 * <p>Archives GuardDuty findings that are specified by the list of finding IDs.</p> <note> <p>Only the master account can archive findings. Member accounts don't have permission to archive findings from their accounts.</p> </note>
		 * Post detector/{detectorId}/findings/archive
		 * @param {string} detectorId The ID of the detector that specifies the GuardDuty service whose findings you want to archive.
		 * @return {ArchiveFindingsResponse} Success
		 */
		ArchiveFindings(detectorId: string, requestBody: ArchiveFindingsPostBody): Observable<ArchiveFindingsResponse> {
			return this.http.post<ArchiveFindingsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/archive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a single Amazon GuardDuty detector. A detector is a resource that represents the GuardDuty service. To start using GuardDuty, you must create a detector in each Region where you enable the service. You can have only one detector per account per Region.
		 * Post detector
		 * @return {CreateDetectorResponse} Success
		 */
		CreateDetector(requestBody: CreateDetectorPostBody): Observable<CreateDetectorResponse> {
			return this.http.post<CreateDetectorResponse>(this.baseUri + 'detector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists detectorIds of all the existing Amazon GuardDuty detector resources.
		 * Get detector
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDetectorsResponse} Success
		 */
		ListDetectors(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListDetectorsResponse> {
			return this.http.get<ListDetectorsResponse>(this.baseUri + 'detector?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a filter using the specified finding criteria.
		 * Post detector/{detectorId}/filter
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account that you want to create a filter for.
		 * @return {CreateFilterResponse} Success
		 */
		CreateFilter(detectorId: string, requestBody: CreateFilterPostBody): Observable<CreateFilterResponse> {
			return this.http.post<CreateFilterResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/filter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of the current filters.
		 * Get detector/{detectorId}/filter
		 * @param {string} detectorId The unique ID of the detector that the filter is associated with.
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFiltersResponse} Success
		 */
		ListFilters(detectorId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListFiltersResponse> {
			return this.http.get<ListFiltersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/filter&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new IPSet, which is called a trusted IP list in the console user interface. An IPSet is a list of IP addresses that are trusted for secure communication with AWS infrastructure and applications. GuardDuty doesn't generate findings for IP addresses that are included in IPSets. Only users from the master account can use this operation.
		 * Post detector/{detectorId}/ipset
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account that you want to create an IPSet for.
		 * @return {CreateIPSetResponse} Success
		 */
		CreateIPSet(detectorId: string, requestBody: CreateIPSetPostBody): Observable<CreateIPSetResponse> {
			return this.http.post<CreateIPSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/ipset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the IPSets of the GuardDuty service specified by the detector ID. If you use this operation from a member account, the IPSets returned are the IPSets from the associated master account.
		 * Get detector/{detectorId}/ipset
		 * @param {string} detectorId The unique ID of the detector that the IPSet is associated with.
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListIPSetsResponse} Success
		 */
		ListIPSets(detectorId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListIPSetsResponse> {
			return this.http.get<ListIPSetsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/ipset&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates member accounts of the current AWS account by specifying a list of AWS account IDs. The current AWS account can then invite these members to manage GuardDuty in their accounts.
		 * Post detector/{detectorId}/member
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account that you want to associate member accounts with.
		 * @return {CreateMembersResponse} Success
		 */
		CreateMembers(detectorId: string, requestBody: CreateMembersPostBody): Observable<CreateMembersResponse> {
			return this.http.post<CreateMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists details about all member accounts for the current GuardDuty master account.
		 * Get detector/{detectorId}/member
		 * @param {string} detectorId The unique ID of the detector the member is associated with.
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} onlyAssociated Specifies whether to only return associated members or to return all members (including members who haven't been invited yet or have been disassociated).
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMembersResponse} Success
		 */
		ListMembers(detectorId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, onlyAssociated: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListMembersResponse> {
			return this.http.get<ListMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&onlyAssociated=' + (onlyAssociated == null ? '' : encodeURIComponent(onlyAssociated)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a publishing destination to export findings to. The resource to export findings to must exist before you use this operation.
		 * Post detector/{detectorId}/publishingDestination
		 * @param {string} detectorId The ID of the GuardDuty detector associated with the publishing destination.
		 * @return {CreatePublishingDestinationResponse} Success
		 */
		CreatePublishingDestination(detectorId: string, requestBody: CreatePublishingDestinationPostBody): Observable<CreatePublishingDestinationResponse> {
			return this.http.post<CreatePublishingDestinationResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/publishingDestination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of publishing destinations associated with the specified <code>dectectorId</code>.
		 * Get detector/{detectorId}/publishingDestination
		 * @param {string} detectorId The ID of the detector to retrieve publishing destinations for.
		 * @param {number} maxResults The maximum number of results to return in the response.
		 * @param {string} nextToken A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPublishingDestinationsResponse} Success
		 */
		ListPublishingDestinations(detectorId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListPublishingDestinationsResponse> {
			return this.http.get<ListPublishingDestinationsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/publishingDestination&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Generates example findings of types specified by the list of finding types. If 'NULL' is specified for <code>findingTypes</code>, the API generates example findings of all supported finding types.
		 * Post detector/{detectorId}/findings/create
		 * @param {string} detectorId The ID of the detector to create sample findings for.
		 * @return {CreateSampleFindingsResponse} Success
		 */
		CreateSampleFindings(detectorId: string, requestBody: CreateSampleFindingsPostBody): Observable<CreateSampleFindingsResponse> {
			return this.http.post<CreateSampleFindingsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/create', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new ThreatIntelSet. ThreatIntelSets consist of known malicious IP addresses. GuardDuty generates findings based on ThreatIntelSets. Only users of the master account can use this operation.
		 * Post detector/{detectorId}/threatintelset
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account that you want to create a threatIntelSet for.
		 * @return {CreateThreatIntelSetResponse} Success
		 */
		CreateThreatIntelSet(detectorId: string, requestBody: CreateThreatIntelSetPostBody): Observable<CreateThreatIntelSetResponse> {
			return this.http.post<CreateThreatIntelSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/threatintelset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the ThreatIntelSets of the GuardDuty service specified by the detector ID. If you use this operation from a member account, the ThreatIntelSets associated with the master account are returned.
		 * Get detector/{detectorId}/threatintelset
		 * @param {string} detectorId The unique ID of the detector that the threatIntelSet is associated with.
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter to paginate results in the response. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListThreatIntelSetsResponse} Success
		 */
		ListThreatIntelSets(detectorId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListThreatIntelSetsResponse> {
			return this.http.get<ListThreatIntelSetsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/threatintelset&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Declines invitations sent to the current member account by AWS accounts specified by their account IDs.
		 * Post invitation/decline
		 * @return {DeclineInvitationsResponse} Success
		 */
		DeclineInvitations(requestBody: DeclineInvitationsPostBody): Observable<DeclineInvitationsResponse> {
			return this.http.post<DeclineInvitationsResponse>(this.baseUri + 'invitation/decline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Amazon GuardDuty detector that is specified by the detector ID.
		 * Delete detector/{detectorId}
		 * @param {string} detectorId The unique ID of the detector that you want to delete.
		 * @return {DeleteDetectorResponse} Success
		 */
		DeleteDetector(detectorId: string): Observable<DeleteDetectorResponse> {
			return this.http.delete<DeleteDetectorResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)), {});
		}

		/**
		 * Retrieves an Amazon GuardDuty detector specified by the detectorId.
		 * Get detector/{detectorId}
		 * @param {string} detectorId The unique ID of the detector that you want to get.
		 * @return {GetDetectorResponse} Success
		 */
		GetDetector(detectorId: string): Observable<GetDetectorResponse> {
			return this.http.get<GetDetectorResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)), {});
		}

		/**
		 * Updates the Amazon GuardDuty detector specified by the detectorId.
		 * Post detector/{detectorId}
		 * @param {string} detectorId The unique ID of the detector to update.
		 * @return {UpdateDetectorResponse} Success
		 */
		UpdateDetector(detectorId: string, requestBody: UpdateDetectorPostBody): Observable<UpdateDetectorResponse> {
			return this.http.post<UpdateDetectorResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the filter specified by the filter name.
		 * Delete detector/{detectorId}/filter/{filterName}
		 * @param {string} detectorId The unique ID of the detector that the filter is associated with.
		 * @param {string} filterName The name of the filter that you want to delete.
		 * @return {DeleteFilterResponse} Success
		 */
		DeleteFilter(detectorId: string, filterName: string): Observable<DeleteFilterResponse> {
			return this.http.delete<DeleteFilterResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/filter/' + (filterName == null ? '' : encodeURIComponent(filterName)), {});
		}

		/**
		 * Returns the details of the filter specified by the filter name.
		 * Get detector/{detectorId}/filter/{filterName}
		 * @param {string} detectorId The unique ID of the detector that the filter is associated with.
		 * @param {string} filterName The name of the filter you want to get.
		 * @return {GetFilterResponse} Success
		 */
		GetFilter(detectorId: string, filterName: string): Observable<GetFilterResponse> {
			return this.http.get<GetFilterResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/filter/' + (filterName == null ? '' : encodeURIComponent(filterName)), {});
		}

		/**
		 * Updates the filter specified by the filter name.
		 * Post detector/{detectorId}/filter/{filterName}
		 * @param {string} detectorId The unique ID of the detector that specifies the GuardDuty service where you want to update a filter.
		 * @param {string} filterName The name of the filter.
		 * @return {UpdateFilterResponse} Success
		 */
		UpdateFilter(detectorId: string, filterName: string, requestBody: UpdateFilterPostBody): Observable<UpdateFilterResponse> {
			return this.http.post<UpdateFilterResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/filter/' + (filterName == null ? '' : encodeURIComponent(filterName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the IPSet specified by the <code>ipSetId</code>. IPSets are called trusted IP lists in the console user interface.
		 * Delete detector/{detectorId}/ipset/{ipSetId}
		 * @param {string} detectorId The unique ID of the detector associated with the IPSet.
		 * @param {string} ipSetId The unique ID of the IPSet to delete.
		 * @return {DeleteIPSetResponse} Success
		 */
		DeleteIPSet(detectorId: string, ipSetId: string): Observable<DeleteIPSetResponse> {
			return this.http.delete<DeleteIPSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/ipset/' + (ipSetId == null ? '' : encodeURIComponent(ipSetId)), {});
		}

		/**
		 * Retrieves the IPSet specified by the <code>ipSetId</code>.
		 * Get detector/{detectorId}/ipset/{ipSetId}
		 * @param {string} detectorId The unique ID of the detector that the IPSet is associated with.
		 * @param {string} ipSetId The unique ID of the IPSet to retrieve.
		 * @return {GetIPSetResponse} Success
		 */
		GetIPSet(detectorId: string, ipSetId: string): Observable<GetIPSetResponse> {
			return this.http.get<GetIPSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/ipset/' + (ipSetId == null ? '' : encodeURIComponent(ipSetId)), {});
		}

		/**
		 * Updates the IPSet specified by the IPSet ID.
		 * Post detector/{detectorId}/ipset/{ipSetId}
		 * @param {string} detectorId The detectorID that specifies the GuardDuty service whose IPSet you want to update.
		 * @param {string} ipSetId The unique ID that specifies the IPSet that you want to update.
		 * @return {UpdateIPSetResponse} Success
		 */
		UpdateIPSet(detectorId: string, ipSetId: string, requestBody: UpdateIPSetPostBody): Observable<UpdateIPSetResponse> {
			return this.http.post<UpdateIPSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/ipset/' + (ipSetId == null ? '' : encodeURIComponent(ipSetId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes invitations sent to the current member account by AWS accounts specified by their account IDs.
		 * Post invitation/delete
		 * @return {DeleteInvitationsResponse} Success
		 */
		DeleteInvitations(requestBody: DeleteInvitationsPostBody): Observable<DeleteInvitationsResponse> {
			return this.http.post<DeleteInvitationsResponse>(this.baseUri + 'invitation/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes GuardDuty member accounts (to the current GuardDuty master account) specified by the account IDs.
		 * Post detector/{detectorId}/member/delete
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account whose members you want to delete.
		 * @return {DeleteMembersResponse} Success
		 */
		DeleteMembers(detectorId: string, requestBody: DeleteMembersPostBody): Observable<DeleteMembersResponse> {
			return this.http.post<DeleteMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the publishing definition with the specified <code>destinationId</code>.
		 * Delete detector/{detectorId}/publishingDestination/{destinationId}
		 * @param {string} detectorId The unique ID of the detector associated with the publishing destination to delete.
		 * @param {string} destinationId The ID of the publishing destination to delete.
		 * @return {DeletePublishingDestinationResponse} Success
		 */
		DeletePublishingDestination(detectorId: string, destinationId: string): Observable<DeletePublishingDestinationResponse> {
			return this.http.delete<DeletePublishingDestinationResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/publishingDestination/' + (destinationId == null ? '' : encodeURIComponent(destinationId)), {});
		}

		/**
		 * Returns information about the publishing destination specified by the provided <code>destinationId</code>.
		 * Get detector/{detectorId}/publishingDestination/{destinationId}
		 * @param {string} detectorId The unique ID of the detector associated with the publishing destination to retrieve.
		 * @param {string} destinationId The ID of the publishing destination to retrieve.
		 * @return {DescribePublishingDestinationResponse} Success
		 */
		DescribePublishingDestination(detectorId: string, destinationId: string): Observable<DescribePublishingDestinationResponse> {
			return this.http.get<DescribePublishingDestinationResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/publishingDestination/' + (destinationId == null ? '' : encodeURIComponent(destinationId)), {});
		}

		/**
		 * Updates information about the publishing destination specified by the <code>destinationId</code>.
		 * Post detector/{detectorId}/publishingDestination/{destinationId}
		 * @param {string} detectorId The ID of the detector associated with the publishing destinations to update.
		 * @param {string} destinationId The ID of the publishing destination to update.
		 * @return {UpdatePublishingDestinationResponse} Success
		 */
		UpdatePublishingDestination(detectorId: string, destinationId: string, requestBody: UpdatePublishingDestinationPostBody): Observable<UpdatePublishingDestinationResponse> {
			return this.http.post<UpdatePublishingDestinationResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/publishingDestination/' + (destinationId == null ? '' : encodeURIComponent(destinationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the ThreatIntelSet specified by the ThreatIntelSet ID.
		 * Delete detector/{detectorId}/threatintelset/{threatIntelSetId}
		 * @param {string} detectorId The unique ID of the detector that the threatIntelSet is associated with.
		 * @param {string} threatIntelSetId The unique ID of the threatIntelSet that you want to delete.
		 * @return {DeleteThreatIntelSetResponse} Success
		 */
		DeleteThreatIntelSet(detectorId: string, threatIntelSetId: string): Observable<DeleteThreatIntelSetResponse> {
			return this.http.delete<DeleteThreatIntelSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/threatintelset/' + (threatIntelSetId == null ? '' : encodeURIComponent(threatIntelSetId)), {});
		}

		/**
		 * Retrieves the ThreatIntelSet that is specified by the ThreatIntelSet ID.
		 * Get detector/{detectorId}/threatintelset/{threatIntelSetId}
		 * @param {string} detectorId The unique ID of the detector that the threatIntelSet is associated with.
		 * @param {string} threatIntelSetId The unique ID of the threatIntelSet that you want to get.
		 * @return {GetThreatIntelSetResponse} Success
		 */
		GetThreatIntelSet(detectorId: string, threatIntelSetId: string): Observable<GetThreatIntelSetResponse> {
			return this.http.get<GetThreatIntelSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/threatintelset/' + (threatIntelSetId == null ? '' : encodeURIComponent(threatIntelSetId)), {});
		}

		/**
		 * Updates the ThreatIntelSet specified by the ThreatIntelSet ID.
		 * Post detector/{detectorId}/threatintelset/{threatIntelSetId}
		 * @param {string} detectorId The detectorID that specifies the GuardDuty service whose ThreatIntelSet you want to update.
		 * @param {string} threatIntelSetId The unique ID that specifies the ThreatIntelSet that you want to update.
		 * @return {UpdateThreatIntelSetResponse} Success
		 */
		UpdateThreatIntelSet(detectorId: string, threatIntelSetId: string, requestBody: UpdateThreatIntelSetPostBody): Observable<UpdateThreatIntelSetResponse> {
			return this.http.post<UpdateThreatIntelSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/threatintelset/' + (threatIntelSetId == null ? '' : encodeURIComponent(threatIntelSetId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the account selected as the delegated administrator for GuardDuty.
		 * Get detector/{detectorId}/admin
		 * @param {string} detectorId The ID of the detector to retrieve information about the delegated administrator from.
		 * @return {DescribeOrganizationConfigurationResponse} Success
		 */
		DescribeOrganizationConfiguration(detectorId: string): Observable<DescribeOrganizationConfigurationResponse> {
			return this.http.get<DescribeOrganizationConfigurationResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/admin', {});
		}

		/**
		 * Updates the delegated administrator account with the values provided.
		 * Post detector/{detectorId}/admin
		 * @param {string} detectorId The ID of the detector to update the delegated administrator for.
		 * @return {UpdateOrganizationConfigurationResponse} Success
		 */
		UpdateOrganizationConfiguration(detectorId: string, requestBody: UpdateOrganizationConfigurationPostBody): Observable<UpdateOrganizationConfigurationResponse> {
			return this.http.post<UpdateOrganizationConfigurationResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/admin', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables an AWS account within the Organization as the GuardDuty delegated administrator.
		 * Post admin/disable
		 * @return {DisableOrganizationAdminAccountResponse} Success
		 */
		DisableOrganizationAdminAccount(requestBody: DisableOrganizationAdminAccountPostBody): Observable<DisableOrganizationAdminAccountResponse> {
			return this.http.post<DisableOrganizationAdminAccountResponse>(this.baseUri + 'admin/disable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates the current GuardDuty member account from its master account.
		 * Post detector/{detectorId}/master/disassociate
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty member account.
		 * @return {DisassociateFromMasterAccountResponse} Success
		 */
		DisassociateFromMasterAccount(detectorId: string): Observable<DisassociateFromMasterAccountResponse> {
			return this.http.post<DisassociateFromMasterAccountResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/master/disassociate', null, {});
		}

		/**
		 * Disassociates GuardDuty member accounts (to the current GuardDuty master account) specified by the account IDs.
		 * Post detector/{detectorId}/member/disassociate
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account whose members you want to disassociate from the master account.
		 * @return {DisassociateMembersResponse} Success
		 */
		DisassociateMembers(detectorId: string, requestBody: DisassociateMembersPostBody): Observable<DisassociateMembersResponse> {
			return this.http.post<DisassociateMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/disassociate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables an AWS account within the organization as the GuardDuty delegated administrator.
		 * Post admin/enable
		 * @return {EnableOrganizationAdminAccountResponse} Success
		 */
		EnableOrganizationAdminAccount(requestBody: EnableOrganizationAdminAccountPostBody): Observable<EnableOrganizationAdminAccountResponse> {
			return this.http.post<EnableOrganizationAdminAccountResponse>(this.baseUri + 'admin/enable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes Amazon GuardDuty findings specified by finding IDs.
		 * Post detector/{detectorId}/findings/get
		 * @param {string} detectorId The ID of the detector that specifies the GuardDuty service whose findings you want to retrieve.
		 * @return {GetFindingsResponse} Success
		 */
		GetFindings(detectorId: string, requestBody: GetFindingsPostBody): Observable<GetFindingsResponse> {
			return this.http.post<GetFindingsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Amazon GuardDuty findings statistics for the specified detector ID.
		 * Post detector/{detectorId}/findings/statistics
		 * @param {string} detectorId The ID of the detector that specifies the GuardDuty service whose findings' statistics you want to retrieve.
		 * @return {GetFindingsStatisticsResponse} Success
		 */
		GetFindingsStatistics(detectorId: string, requestBody: GetFindingsStatisticsPostBody): Observable<GetFindingsStatisticsResponse> {
			return this.http.post<GetFindingsStatisticsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/statistics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the count of all GuardDuty membership invitations that were sent to the current member account except the currently accepted invitation.
		 * Get invitation/count
		 * @return {GetInvitationsCountResponse} Success
		 */
		GetInvitationsCount(): Observable<GetInvitationsCountResponse> {
			return this.http.get<GetInvitationsCountResponse>(this.baseUri + 'invitation/count', {});
		}

		/**
		 * Retrieves GuardDuty member accounts (to the current GuardDuty master account) specified by the account IDs.
		 * Post detector/{detectorId}/member/get
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account whose members you want to retrieve.
		 * @return {GetMembersResponse} Success
		 */
		GetMembers(detectorId: string, requestBody: GetMembersPostBody): Observable<GetMembersResponse> {
			return this.http.post<GetMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Invites other AWS accounts (created as members of the current AWS account by CreateMembers) to enable GuardDuty, and allow the current AWS account to view and manage these accounts' GuardDuty findings on their behalf as the master account.
		 * Post detector/{detectorId}/member/invite
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account that you want to invite members with.
		 * @return {InviteMembersResponse} Success
		 */
		InviteMembers(detectorId: string, requestBody: InviteMembersPostBody): Observable<InviteMembersResponse> {
			return this.http.post<InviteMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/invite', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Amazon GuardDuty findings for the specified detector ID.
		 * Post detector/{detectorId}/findings
		 * @param {string} detectorId The ID of the detector that specifies the GuardDuty service whose findings you want to list.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFindingsResponse} Success
		 */
		ListFindings(detectorId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFindingsPostBody): Observable<ListFindingsResponse> {
			return this.http.post<ListFindingsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all GuardDuty membership invitations that were sent to the current AWS account.
		 * Get invitation
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInvitationsResponse} Success
		 */
		ListInvitations(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListInvitationsResponse> {
			return this.http.get<ListInvitationsResponse>(this.baseUri + 'invitation?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the accounts configured as GuardDuty delegated administrators.
		 * Get admin
		 * @param {number} maxResults The maximum number of results to return in the response.
		 * @param {string} nextToken A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOrganizationAdminAccountsResponse} Success
		 */
		ListOrganizationAdminAccounts(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListOrganizationAdminAccountsResponse> {
			return this.http.get<ListOrganizationAdminAccountsResponse>(this.baseUri + 'admin?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists tags for a resource. Tagging is currently supported for detectors, finding filters, IP sets, and threat intel sets, with a limit of 50 tags per resource. When invoked, this operation returns all assigned tags for a given resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) for the given GuardDuty resource. 
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds tags to a resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) for the GuardDuty resource to apply a tag to.
		 * @return {void} 
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Turns on GuardDuty monitoring of the specified member accounts. Use this operation to restart monitoring of accounts that you stopped monitoring with the <code>StopMonitoringMembers</code> operation.
		 * Post detector/{detectorId}/member/start
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty master account associated with the member accounts to monitor.
		 * @return {StartMonitoringMembersResponse} Success
		 */
		StartMonitoringMembers(detectorId: string, requestBody: StartMonitoringMembersPostBody): Observable<StartMonitoringMembersResponse> {
			return this.http.post<StartMonitoringMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops GuardDuty monitoring for the specified member accounts. Use the <code>StartMonitoringMembers</code> operation to restart monitoring for those accounts.
		 * Post detector/{detectorId}/member/stop
		 * @param {string} detectorId The unique ID of the detector associated with the GuardDuty master account that is monitoring member accounts.
		 * @return {StopMonitoringMembersResponse} Success
		 */
		StopMonitoringMembers(detectorId: string, requestBody: StopMonitoringMembersPostBody): Observable<StopMonitoringMembersResponse> {
			return this.http.post<StopMonitoringMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unarchives GuardDuty findings specified by the <code>findingIds</code>.
		 * Post detector/{detectorId}/findings/unarchive
		 * @param {string} detectorId The ID of the detector associated with the findings to unarchive.
		 * @return {UnarchiveFindingsResponse} Success
		 */
		UnarchiveFindings(detectorId: string, requestBody: UnarchiveFindingsPostBody): Observable<UnarchiveFindingsResponse> {
			return this.http.post<UnarchiveFindingsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/unarchive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from a resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) for the resource to remove tags from.
		 * @param {Array<string>} tagKeys The tag keys to remove from the resource.
		 * @return {void} 
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Marks the specified GuardDuty findings as useful or not useful.
		 * Post detector/{detectorId}/findings/feedback
		 * @param {string} detectorId The ID of the detector associated with the findings to update feedback for.
		 * @return {UpdateFindingsFeedbackResponse} Success
		 */
		UpdateFindingsFeedback(detectorId: string, requestBody: UpdateFindingsFeedbackPostBody): Observable<UpdateFindingsFeedbackResponse> {
			return this.http.post<UpdateFindingsFeedbackResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/feedback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AcceptInvitationPostBody {

		/**
		 * The account ID of the master GuardDuty account whose invitation you're accepting.
		 * Required
		 */
		masterId: string;

		/**
		 * The value that is used to validate the master account to the member account.
		 * Required
		 */
		invitationId: string;
	}
	export interface AcceptInvitationPostBodyFormProperties {

		/**
		 * The account ID of the master GuardDuty account whose invitation you're accepting.
		 * Required
		 */
		masterId: FormControl<string | null | undefined>,

		/**
		 * The value that is used to validate the master account to the member account.
		 * Required
		 */
		invitationId: FormControl<string | null | undefined>,
	}
	export function CreateAcceptInvitationPostBodyFormGroup() {
		return new FormGroup<AcceptInvitationPostBodyFormProperties>({
			masterId: new FormControl<string | null | undefined>(undefined),
			invitationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ArchiveFindingsPostBody {

		/**
		 * The IDs of the findings that you want to archive.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		findingIds: Array<string>;
	}
	export interface ArchiveFindingsPostBodyFormProperties {
	}
	export function CreateArchiveFindingsPostBodyFormGroup() {
		return new FormGroup<ArchiveFindingsPostBodyFormProperties>({
		});

	}

	export interface CreateDetectorPostBody {

		/**
		 * A Boolean value that specifies whether the detector is to be enabled.
		 * Required
		 */
		enable: boolean;

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken?: string | null;

		/** An enum value that specifies how frequently updated findings are exported. */
		findingPublishingFrequency?: GetDetectorResponseFindingPublishingFrequency | null;

		/** The tags to be added to a new detector resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateDetectorPostBodyFormProperties {

		/**
		 * A Boolean value that specifies whether the detector is to be enabled.
		 * Required
		 */
		enable: FormControl<boolean | null | undefined>,

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,

		/** An enum value that specifies how frequently updated findings are exported. */
		findingPublishingFrequency: FormControl<GetDetectorResponseFindingPublishingFrequency | null | undefined>,

		/** The tags to be added to a new detector resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateDetectorPostBodyFormGroup() {
		return new FormGroup<CreateDetectorPostBodyFormProperties>({
			enable: new FormControl<boolean | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			findingPublishingFrequency: new FormControl<GetDetectorResponseFindingPublishingFrequency | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateFilterPostBody {

		/**
		 * The name of the filter.
		 * Required
		 * Max length: 64
		 * Min length: 3
		 */
		name: string;

		/**
		 * The description of the filter.
		 * Max length: 512
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Specifies the action that is to be applied to the findings that match the filter.
		 * Max length: 300
		 * Min length: 1
		 */
		action?: GetFilterResponseAction | null;

		/**
		 * Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.
		 * Minimum: 1
		 * Maximum: 100
		 */
		rank?: number | null;

		/**
		 * Contains information about the criteria used for querying findings.
		 * Required
		 */
		findingCriteria: CreateFilterPostBodyFindingCriteria;

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken?: string | null;

		/** The tags to be added to a new filter resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateFilterPostBodyFormProperties {

		/**
		 * The name of the filter.
		 * Required
		 * Max length: 64
		 * Min length: 3
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description of the filter.
		 * Max length: 512
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Specifies the action that is to be applied to the findings that match the filter.
		 * Max length: 300
		 * Min length: 1
		 */
		action: FormControl<GetFilterResponseAction | null | undefined>,

		/**
		 * Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.
		 * Minimum: 1
		 * Maximum: 100
		 */
		rank: FormControl<number | null | undefined>,

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,

		/** The tags to be added to a new filter resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateFilterPostBodyFormGroup() {
		return new FormGroup<CreateFilterPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			action: new FormControl<GetFilterResponseAction | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateFilterPostBodyFindingCriteria {
		Criterion?: Criterion;
	}
	export interface CreateFilterPostBodyFindingCriteriaFormProperties {
	}
	export function CreateCreateFilterPostBodyFindingCriteriaFormGroup() {
		return new FormGroup<CreateFilterPostBodyFindingCriteriaFormProperties>({
		});

	}

	export interface CreateIPSetPostBody {

		/**
		 * <p>The user-friendly name to identify the IPSet.</p> <p> Allowed characters are alphanumerics, spaces, hyphens (-), and underscores (_).</p>
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		name: string;

		/**
		 * The format of the file that contains the IPSet.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		format: GetIPSetResponseFormat;

		/**
		 * The URI of the file that contains the IPSet. For example: https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		location: string;

		/**
		 * A Boolean value that indicates whether GuardDuty is to start using the uploaded IPSet.
		 * Required
		 */
		activate: boolean;

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken?: string | null;

		/** The tags to be added to a new IP set resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateIPSetPostBodyFormProperties {

		/**
		 * <p>The user-friendly name to identify the IPSet.</p> <p> Allowed characters are alphanumerics, spaces, hyphens (-), and underscores (_).</p>
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The format of the file that contains the IPSet.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		format: FormControl<GetIPSetResponseFormat | null | undefined>,

		/**
		 * The URI of the file that contains the IPSet. For example: https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		location: FormControl<string | null | undefined>,

		/**
		 * A Boolean value that indicates whether GuardDuty is to start using the uploaded IPSet.
		 * Required
		 */
		activate: FormControl<boolean | null | undefined>,

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,

		/** The tags to be added to a new IP set resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateIPSetPostBodyFormGroup() {
		return new FormGroup<CreateIPSetPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<GetIPSetResponseFormat | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			activate: new FormControl<boolean | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateMembersPostBody {

		/**
		 * A list of account ID and email address pairs of the accounts that you want to associate with the master GuardDuty account.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountDetails: Array<AccountDetail>;
	}
	export interface CreateMembersPostBodyFormProperties {
	}
	export function CreateCreateMembersPostBodyFormGroup() {
		return new FormGroup<CreateMembersPostBodyFormProperties>({
		});

	}

	export interface CreatePublishingDestinationPostBody {

		/**
		 * The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		destinationType: DescribePublishingDestinationResponseDestinationType;

		/**
		 * Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings.
		 * Required
		 */
		destinationProperties: CreatePublishingDestinationPostBodyDestinationProperties;

		/**
		 * The idempotency token for the request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken?: string | null;
	}
	export interface CreatePublishingDestinationPostBodyFormProperties {

		/**
		 * The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		destinationType: FormControl<DescribePublishingDestinationResponseDestinationType | null | undefined>,

		/**
		 * The idempotency token for the request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreatePublishingDestinationPostBodyFormGroup() {
		return new FormGroup<CreatePublishingDestinationPostBodyFormProperties>({
			destinationType: new FormControl<DescribePublishingDestinationResponseDestinationType | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePublishingDestinationPostBodyDestinationProperties {
		DestinationArn?: string | null;
		KmsKeyArn?: string | null;
	}
	export interface CreatePublishingDestinationPostBodyDestinationPropertiesFormProperties {
		DestinationArn: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreatePublishingDestinationPostBodyDestinationPropertiesFormGroup() {
		return new FormGroup<CreatePublishingDestinationPostBodyDestinationPropertiesFormProperties>({
			DestinationArn: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSampleFindingsPostBody {

		/**
		 * The types of sample findings to generate.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		findingTypes?: Array<string>;
	}
	export interface CreateSampleFindingsPostBodyFormProperties {
	}
	export function CreateCreateSampleFindingsPostBodyFormGroup() {
		return new FormGroup<CreateSampleFindingsPostBodyFormProperties>({
		});

	}

	export interface CreateThreatIntelSetPostBody {

		/**
		 * A user-friendly ThreatIntelSet name displayed in all findings that are generated by activity that involves IP addresses included in this ThreatIntelSet.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		name: string;

		/**
		 * The format of the file that contains the ThreatIntelSet.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		format: GetIPSetResponseFormat;

		/**
		 * The URI of the file that contains the ThreatIntelSet. For example: https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		location: string;

		/**
		 * A Boolean value that indicates whether GuardDuty is to start using the uploaded ThreatIntelSet.
		 * Required
		 */
		activate: boolean;

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken?: string | null;

		/** The tags to be added to a new threat list resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateThreatIntelSetPostBodyFormProperties {

		/**
		 * A user-friendly ThreatIntelSet name displayed in all findings that are generated by activity that involves IP addresses included in this ThreatIntelSet.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The format of the file that contains the ThreatIntelSet.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		format: FormControl<GetIPSetResponseFormat | null | undefined>,

		/**
		 * The URI of the file that contains the ThreatIntelSet. For example: https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.
		 * Required
		 * Max length: 300
		 * Min length: 1
		 */
		location: FormControl<string | null | undefined>,

		/**
		 * A Boolean value that indicates whether GuardDuty is to start using the uploaded ThreatIntelSet.
		 * Required
		 */
		activate: FormControl<boolean | null | undefined>,

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,

		/** The tags to be added to a new threat list resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateThreatIntelSetPostBodyFormGroup() {
		return new FormGroup<CreateThreatIntelSetPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<GetIPSetResponseFormat | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			activate: new FormControl<boolean | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface DeclineInvitationsPostBody {

		/**
		 * A list of account IDs of the AWS accounts that sent invitations to the current member account that you want to decline invitations from.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;
	}
	export interface DeclineInvitationsPostBodyFormProperties {
	}
	export function CreateDeclineInvitationsPostBodyFormGroup() {
		return new FormGroup<DeclineInvitationsPostBodyFormProperties>({
		});

	}

	export interface UpdateDetectorPostBody {

		/** Specifies whether the detector is enabled or not enabled. */
		enable?: boolean | null;

		/** An enum value that specifies how frequently findings are exported, such as to CloudWatch Events. */
		findingPublishingFrequency?: GetDetectorResponseFindingPublishingFrequency | null;
	}
	export interface UpdateDetectorPostBodyFormProperties {

		/** Specifies whether the detector is enabled or not enabled. */
		enable: FormControl<boolean | null | undefined>,

		/** An enum value that specifies how frequently findings are exported, such as to CloudWatch Events. */
		findingPublishingFrequency: FormControl<GetDetectorResponseFindingPublishingFrequency | null | undefined>,
	}
	export function CreateUpdateDetectorPostBodyFormGroup() {
		return new FormGroup<UpdateDetectorPostBodyFormProperties>({
			enable: new FormControl<boolean | null | undefined>(undefined),
			findingPublishingFrequency: new FormControl<GetDetectorResponseFindingPublishingFrequency | null | undefined>(undefined),
		});

	}

	export interface UpdateFilterPostBody {

		/**
		 * The description of the filter.
		 * Max length: 512
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Specifies the action that is to be applied to the findings that match the filter.
		 * Max length: 300
		 * Min length: 1
		 */
		action?: GetFilterResponseAction | null;

		/**
		 * Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.
		 * Minimum: 1
		 * Maximum: 100
		 */
		rank?: number | null;

		/** Contains information about the criteria used for querying findings. */
		findingCriteria?: UpdateFilterPostBodyFindingCriteria;
	}
	export interface UpdateFilterPostBodyFormProperties {

		/**
		 * The description of the filter.
		 * Max length: 512
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Specifies the action that is to be applied to the findings that match the filter.
		 * Max length: 300
		 * Min length: 1
		 */
		action: FormControl<GetFilterResponseAction | null | undefined>,

		/**
		 * Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.
		 * Minimum: 1
		 * Maximum: 100
		 */
		rank: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFilterPostBodyFormGroup() {
		return new FormGroup<UpdateFilterPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			action: new FormControl<GetFilterResponseAction | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateFilterPostBodyFindingCriteria {
		Criterion?: Criterion;
	}
	export interface UpdateFilterPostBodyFindingCriteriaFormProperties {
	}
	export function CreateUpdateFilterPostBodyFindingCriteriaFormGroup() {
		return new FormGroup<UpdateFilterPostBodyFindingCriteriaFormProperties>({
		});

	}

	export interface UpdateIPSetPostBody {

		/**
		 * The unique ID that specifies the IPSet that you want to update.
		 * Max length: 300
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * The updated URI of the file that contains the IPSet. For example: https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.
		 * Max length: 300
		 * Min length: 1
		 */
		location?: string | null;

		/** The updated Boolean value that specifies whether the IPSet is active or not. */
		activate?: boolean | null;
	}
	export interface UpdateIPSetPostBodyFormProperties {

		/**
		 * The unique ID that specifies the IPSet that you want to update.
		 * Max length: 300
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The updated URI of the file that contains the IPSet. For example: https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.
		 * Max length: 300
		 * Min length: 1
		 */
		location: FormControl<string | null | undefined>,

		/** The updated Boolean value that specifies whether the IPSet is active or not. */
		activate: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateIPSetPostBodyFormGroup() {
		return new FormGroup<UpdateIPSetPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			activate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteInvitationsPostBody {

		/**
		 * A list of account IDs of the AWS accounts that sent invitations to the current member account that you want to delete invitations from.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;
	}
	export interface DeleteInvitationsPostBodyFormProperties {
	}
	export function CreateDeleteInvitationsPostBodyFormGroup() {
		return new FormGroup<DeleteInvitationsPostBodyFormProperties>({
		});

	}

	export interface DeleteMembersPostBody {

		/**
		 * A list of account IDs of the GuardDuty member accounts that you want to delete.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;
	}
	export interface DeleteMembersPostBodyFormProperties {
	}
	export function CreateDeleteMembersPostBodyFormGroup() {
		return new FormGroup<DeleteMembersPostBodyFormProperties>({
		});

	}

	export interface UpdatePublishingDestinationPostBody {

		/** Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings. */
		destinationProperties?: UpdatePublishingDestinationPostBodyDestinationProperties;
	}
	export interface UpdatePublishingDestinationPostBodyFormProperties {
	}
	export function CreateUpdatePublishingDestinationPostBodyFormGroup() {
		return new FormGroup<UpdatePublishingDestinationPostBodyFormProperties>({
		});

	}

	export interface UpdatePublishingDestinationPostBodyDestinationProperties {
		DestinationArn?: string | null;
		KmsKeyArn?: string | null;
	}
	export interface UpdatePublishingDestinationPostBodyDestinationPropertiesFormProperties {
		DestinationArn: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePublishingDestinationPostBodyDestinationPropertiesFormGroup() {
		return new FormGroup<UpdatePublishingDestinationPostBodyDestinationPropertiesFormProperties>({
			DestinationArn: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateThreatIntelSetPostBody {

		/**
		 * The unique ID that specifies the ThreatIntelSet that you want to update.
		 * Max length: 300
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * The updated URI of the file that contains the ThreateIntelSet. For example: https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.
		 * Max length: 300
		 * Min length: 1
		 */
		location?: string | null;

		/** The updated Boolean value that specifies whether the ThreateIntelSet is active or not. */
		activate?: boolean | null;
	}
	export interface UpdateThreatIntelSetPostBodyFormProperties {

		/**
		 * The unique ID that specifies the ThreatIntelSet that you want to update.
		 * Max length: 300
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The updated URI of the file that contains the ThreateIntelSet. For example: https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.
		 * Max length: 300
		 * Min length: 1
		 */
		location: FormControl<string | null | undefined>,

		/** The updated Boolean value that specifies whether the ThreateIntelSet is active or not. */
		activate: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateThreatIntelSetPostBodyFormGroup() {
		return new FormGroup<UpdateThreatIntelSetPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			activate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateOrganizationConfigurationPostBody {

		/**
		 * Indicates whether to automatically enable member accounts in the organization.
		 * Required
		 */
		autoEnable: boolean;
	}
	export interface UpdateOrganizationConfigurationPostBodyFormProperties {

		/**
		 * Indicates whether to automatically enable member accounts in the organization.
		 * Required
		 */
		autoEnable: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateOrganizationConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateOrganizationConfigurationPostBodyFormProperties>({
			autoEnable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DisableOrganizationAdminAccountPostBody {

		/**
		 * The AWS Account ID for the organizations account to be disabled as a GuardDuty delegated administrator.
		 * Required
		 */
		adminAccountId: string;
	}
	export interface DisableOrganizationAdminAccountPostBodyFormProperties {

		/**
		 * The AWS Account ID for the organizations account to be disabled as a GuardDuty delegated administrator.
		 * Required
		 */
		adminAccountId: FormControl<string | null | undefined>,
	}
	export function CreateDisableOrganizationAdminAccountPostBodyFormGroup() {
		return new FormGroup<DisableOrganizationAdminAccountPostBodyFormProperties>({
			adminAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateMembersPostBody {

		/**
		 * A list of account IDs of the GuardDuty member accounts that you want to disassociate from the master account.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;
	}
	export interface DisassociateMembersPostBodyFormProperties {
	}
	export function CreateDisassociateMembersPostBodyFormGroup() {
		return new FormGroup<DisassociateMembersPostBodyFormProperties>({
		});

	}

	export interface EnableOrganizationAdminAccountPostBody {

		/**
		 * The AWS Account ID for the organization account to be enabled as a GuardDuty delegated administrator.
		 * Required
		 */
		adminAccountId: string;
	}
	export interface EnableOrganizationAdminAccountPostBodyFormProperties {

		/**
		 * The AWS Account ID for the organization account to be enabled as a GuardDuty delegated administrator.
		 * Required
		 */
		adminAccountId: FormControl<string | null | undefined>,
	}
	export function CreateEnableOrganizationAdminAccountPostBodyFormGroup() {
		return new FormGroup<EnableOrganizationAdminAccountPostBodyFormProperties>({
			adminAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFindingsPostBody {

		/**
		 * The IDs of the findings that you want to retrieve.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		findingIds: Array<string>;

		/** Contains information about the criteria used for sorting findings. */
		sortCriteria?: GetFindingsPostBodySortCriteria;
	}
	export interface GetFindingsPostBodyFormProperties {
	}
	export function CreateGetFindingsPostBodyFormGroup() {
		return new FormGroup<GetFindingsPostBodyFormProperties>({
		});

	}

	export interface GetFindingsPostBodySortCriteria {
		AttributeName?: string | null;
		OrderBy?: OrderBy | null;
	}
	export interface GetFindingsPostBodySortCriteriaFormProperties {
		AttributeName: FormControl<string | null | undefined>,
		OrderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateGetFindingsPostBodySortCriteriaFormGroup() {
		return new FormGroup<GetFindingsPostBodySortCriteriaFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined),
			OrderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}

	export interface GetFindingsStatisticsPostBody {

		/**
		 * The types of finding statistics to retrieve.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		findingStatisticTypes: Array<FindingStatisticType>;

		/** Contains information about the criteria used for querying findings. */
		findingCriteria?: GetFindingsStatisticsPostBodyFindingCriteria;
	}
	export interface GetFindingsStatisticsPostBodyFormProperties {
	}
	export function CreateGetFindingsStatisticsPostBodyFormGroup() {
		return new FormGroup<GetFindingsStatisticsPostBodyFormProperties>({
		});

	}

	export interface GetFindingsStatisticsPostBodyFindingCriteria {
		Criterion?: Criterion;
	}
	export interface GetFindingsStatisticsPostBodyFindingCriteriaFormProperties {
	}
	export function CreateGetFindingsStatisticsPostBodyFindingCriteriaFormGroup() {
		return new FormGroup<GetFindingsStatisticsPostBodyFindingCriteriaFormProperties>({
		});

	}

	export interface GetMembersPostBody {

		/**
		 * A list of account IDs of the GuardDuty member accounts that you want to describe.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;
	}
	export interface GetMembersPostBodyFormProperties {
	}
	export function CreateGetMembersPostBodyFormGroup() {
		return new FormGroup<GetMembersPostBodyFormProperties>({
		});

	}

	export interface InviteMembersPostBody {

		/**
		 * A list of account IDs of the accounts that you want to invite to GuardDuty as members.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;

		/** A Boolean value that specifies whether you want to disable email notification to the accounts that you’re inviting to GuardDuty as members. */
		disableEmailNotification?: boolean | null;

		/** The invitation message that you want to send to the accounts that you’re inviting to GuardDuty as members. */
		message?: string | null;
	}
	export interface InviteMembersPostBodyFormProperties {

		/** A Boolean value that specifies whether you want to disable email notification to the accounts that you’re inviting to GuardDuty as members. */
		disableEmailNotification: FormControl<boolean | null | undefined>,

		/** The invitation message that you want to send to the accounts that you’re inviting to GuardDuty as members. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateInviteMembersPostBodyFormGroup() {
		return new FormGroup<InviteMembersPostBodyFormProperties>({
			disableEmailNotification: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFindingsPostBody {

		/** Contains information about the criteria used for querying findings. */
		findingCriteria?: ListFindingsPostBodyFindingCriteria;

		/** Contains information about the criteria used for sorting findings. */
		sortCriteria?: ListFindingsPostBodySortCriteria;

		/**
		 * You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults?: number | null;

		/** You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data. */
		nextToken?: string | null;
	}
	export interface ListFindingsPostBodyFormProperties {

		/**
		 * You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults: FormControl<number | null | undefined>,

		/** You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingsPostBodyFormGroup() {
		return new FormGroup<ListFindingsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFindingsPostBodyFindingCriteria {
		Criterion?: Criterion;
	}
	export interface ListFindingsPostBodyFindingCriteriaFormProperties {
	}
	export function CreateListFindingsPostBodyFindingCriteriaFormGroup() {
		return new FormGroup<ListFindingsPostBodyFindingCriteriaFormProperties>({
		});

	}

	export interface ListFindingsPostBodySortCriteria {
		AttributeName?: string | null;
		OrderBy?: OrderBy | null;
	}
	export interface ListFindingsPostBodySortCriteriaFormProperties {
		AttributeName: FormControl<string | null | undefined>,
		OrderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateListFindingsPostBodySortCriteriaFormGroup() {
		return new FormGroup<ListFindingsPostBodySortCriteriaFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined),
			OrderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to be added to a resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags to be added to a resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface StartMonitoringMembersPostBody {

		/**
		 * A list of account IDs of the GuardDuty member accounts to start monitoring.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;
	}
	export interface StartMonitoringMembersPostBodyFormProperties {
	}
	export function CreateStartMonitoringMembersPostBodyFormGroup() {
		return new FormGroup<StartMonitoringMembersPostBodyFormProperties>({
		});

	}

	export interface StopMonitoringMembersPostBody {

		/**
		 * A list of account IDs for the member accounts to stop monitoring.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;
	}
	export interface StopMonitoringMembersPostBodyFormProperties {
	}
	export function CreateStopMonitoringMembersPostBodyFormGroup() {
		return new FormGroup<StopMonitoringMembersPostBodyFormProperties>({
		});

	}

	export interface UnarchiveFindingsPostBody {

		/**
		 * The IDs of the findings to unarchive.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		findingIds: Array<string>;
	}
	export interface UnarchiveFindingsPostBodyFormProperties {
	}
	export function CreateUnarchiveFindingsPostBodyFormGroup() {
		return new FormGroup<UnarchiveFindingsPostBodyFormProperties>({
		});

	}

	export interface UpdateFindingsFeedbackPostBody {

		/**
		 * The IDs of the findings that you want to mark as useful or not useful.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		findingIds: Array<string>;

		/**
		 * The feedback for the finding.
		 * Required
		 */
		feedback: Feedback;

		/** Additional feedback about the GuardDuty findings. */
		comments?: string | null;
	}
	export interface UpdateFindingsFeedbackPostBodyFormProperties {

		/**
		 * The feedback for the finding.
		 * Required
		 */
		feedback: FormControl<Feedback | null | undefined>,

		/** Additional feedback about the GuardDuty findings. */
		comments: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFindingsFeedbackPostBodyFormGroup() {
		return new FormGroup<UpdateFindingsFeedbackPostBodyFormProperties>({
			feedback: new FormControl<Feedback | null | undefined>(undefined),
			comments: new FormControl<string | null | undefined>(undefined),
		});

	}

}

