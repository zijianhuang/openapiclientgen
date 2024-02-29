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

	export interface CancelPolicyGenerationResponse {
	}
	export interface CancelPolicyGenerationResponseFormProperties {
	}
	export function CreateCancelPolicyGenerationResponseFormGroup() {
		return new FormGroup<CancelPolicyGenerationResponseFormProperties>({
		});

	}

	export interface CreateAccessPreviewResponse {

		/** Required */
		id: string;
	}
	export interface CreateAccessPreviewResponseFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessPreviewResponseFormGroup() {
		return new FormGroup<CreateAccessPreviewResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Access control configuration structures for your resource. You specify the configuration as a type-value pair. You can specify only one type of access control configuration. */
	export interface Configuration {
		ebsSnapshot?: EbsSnapshotConfiguration;
		ecrRepository?: EcrRepositoryConfiguration;
		iamRole?: IamRoleConfiguration;
		efsFileSystem?: EfsFileSystemConfiguration;
		kmsKey?: KmsKeyConfiguration;
		rdsDbClusterSnapshot?: RdsDbClusterSnapshotConfiguration;
		rdsDbSnapshot?: RdsDbSnapshotConfiguration;
		secretsManagerSecret?: SecretsManagerSecretConfiguration;
		s3Bucket?: S3BucketConfiguration;
		snsTopic?: SnsTopicConfiguration;
		sqsQueue?: SqsQueueConfiguration;
	}

	/** Access control configuration structures for your resource. You specify the configuration as a type-value pair. You can specify only one type of access control configuration. */
	export interface ConfigurationFormProperties {
	}
	export function CreateConfigurationFormGroup() {
		return new FormGroup<ConfigurationFormProperties>({
		});

	}


	/** The proposed access control configuration for an Amazon EBS volume snapshot. You can propose a configuration for a new Amazon EBS volume snapshot or an Amazon EBS volume snapshot that you own by specifying the user IDs, groups, and optional KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySnapshotAttribute.html">ModifySnapshotAttribute</a>. */
	export interface EbsSnapshotConfiguration {
		userIds?: Array<string>;
		groups?: Array<string>;
		kmsKeyId?: string;
	}

	/** The proposed access control configuration for an Amazon EBS volume snapshot. You can propose a configuration for a new Amazon EBS volume snapshot or an Amazon EBS volume snapshot that you own by specifying the user IDs, groups, and optional KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySnapshotAttribute.html">ModifySnapshotAttribute</a>. */
	export interface EbsSnapshotConfigurationFormProperties {
		kmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateEbsSnapshotConfigurationFormGroup() {
		return new FormGroup<EbsSnapshotConfigurationFormProperties>({
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The proposed access control configuration for an Amazon ECR repository. You can propose a configuration for a new Amazon ECR repository or an existing Amazon ECR repository that you own by specifying the Amazon ECR policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_Repository.html">Repository</a>.</p> <ul> <li> <p>If the configuration is for an existing Amazon ECR repository and you do not specify the Amazon ECR policy, then the access preview uses the existing Amazon ECR policy for the repository.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the policy, then the access preview assumes an Amazon ECR repository without a policy.</p> </li> <li> <p>To propose deletion of an existing Amazon ECR repository policy, you can specify an empty string for the Amazon ECR policy.</p> </li> </ul> */
	export interface EcrRepositoryConfiguration {
		repositoryPolicy?: string;
	}

	/** <p>The proposed access control configuration for an Amazon ECR repository. You can propose a configuration for a new Amazon ECR repository or an existing Amazon ECR repository that you own by specifying the Amazon ECR policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_Repository.html">Repository</a>.</p> <ul> <li> <p>If the configuration is for an existing Amazon ECR repository and you do not specify the Amazon ECR policy, then the access preview uses the existing Amazon ECR policy for the repository.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the policy, then the access preview assumes an Amazon ECR repository without a policy.</p> </li> <li> <p>To propose deletion of an existing Amazon ECR repository policy, you can specify an empty string for the Amazon ECR policy.</p> </li> </ul> */
	export interface EcrRepositoryConfigurationFormProperties {
		repositoryPolicy: FormControl<string | null | undefined>,
	}
	export function CreateEcrRepositoryConfigurationFormGroup() {
		return new FormGroup<EcrRepositoryConfigurationFormProperties>({
			repositoryPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The proposed access control configuration for an IAM role. You can propose a configuration for a new IAM role or an existing IAM role that you own by specifying the trust policy. If the configuration is for a new IAM role, you must specify the trust policy. If the configuration is for an existing IAM role that you own and you do not propose the trust policy, the access preview uses the existing trust policy for the role. The proposed trust policy cannot be an empty string. For more information about role trust policy limits, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a>. */
	export interface IamRoleConfiguration {
		trustPolicy?: string;
	}

	/** The proposed access control configuration for an IAM role. You can propose a configuration for a new IAM role or an existing IAM role that you own by specifying the trust policy. If the configuration is for a new IAM role, you must specify the trust policy. If the configuration is for an existing IAM role that you own and you do not propose the trust policy, the access preview uses the existing trust policy for the role. The proposed trust policy cannot be an empty string. For more information about role trust policy limits, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a>. */
	export interface IamRoleConfigurationFormProperties {
		trustPolicy: FormControl<string | null | undefined>,
	}
	export function CreateIamRoleConfigurationFormGroup() {
		return new FormGroup<IamRoleConfigurationFormProperties>({
			trustPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The proposed access control configuration for an Amazon EFS file system. You can propose a configuration for a new Amazon EFS file system or an existing Amazon EFS file system that you own by specifying the Amazon EFS policy. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/using-fs.html">Using file systems in Amazon EFS</a>.</p> <ul> <li> <p>If the configuration is for an existing Amazon EFS file system and you do not specify the Amazon EFS policy, then the access preview uses the existing Amazon EFS policy for the file system.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the policy, then the access preview assumes an Amazon EFS file system without a policy.</p> </li> <li> <p>To propose deletion of an existing Amazon EFS file system policy, you can specify an empty string for the Amazon EFS policy.</p> </li> </ul> */
	export interface EfsFileSystemConfiguration {
		fileSystemPolicy?: string;
	}

	/** <p>The proposed access control configuration for an Amazon EFS file system. You can propose a configuration for a new Amazon EFS file system or an existing Amazon EFS file system that you own by specifying the Amazon EFS policy. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/using-fs.html">Using file systems in Amazon EFS</a>.</p> <ul> <li> <p>If the configuration is for an existing Amazon EFS file system and you do not specify the Amazon EFS policy, then the access preview uses the existing Amazon EFS policy for the file system.</p> </li> <li> <p>If the access preview is for a new resource and you do not specify the policy, then the access preview assumes an Amazon EFS file system without a policy.</p> </li> <li> <p>To propose deletion of an existing Amazon EFS file system policy, you can specify an empty string for the Amazon EFS policy.</p> </li> </ul> */
	export interface EfsFileSystemConfigurationFormProperties {
		fileSystemPolicy: FormControl<string | null | undefined>,
	}
	export function CreateEfsFileSystemConfigurationFormGroup() {
		return new FormGroup<EfsFileSystemConfigurationFormProperties>({
			fileSystemPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Proposed access control configuration for a KMS key. You can propose a configuration for a new KMS key or an existing KMS key that you own by specifying the key policy and KMS grant configuration. If the configuration is for an existing key and you do not specify the key policy, the access preview uses the existing policy for the key. If the access preview is for a new resource and you do not specify the key policy, then the access preview uses the default key policy. The proposed key policy cannot be an empty string. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default">Default key policy</a>. For more information about key policy limits, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/resource-limits.html">Resource quotas</a>.</p> <p/> */
	export interface KmsKeyConfiguration {
		keyPolicies?: KmsKeyPoliciesMap;
		grants?: Array<KmsGrantConfiguration>;
	}

	/** <p>Proposed access control configuration for a KMS key. You can propose a configuration for a new KMS key or an existing KMS key that you own by specifying the key policy and KMS grant configuration. If the configuration is for an existing key and you do not specify the key policy, the access preview uses the existing policy for the key. If the access preview is for a new resource and you do not specify the key policy, then the access preview uses the default key policy. The proposed key policy cannot be an empty string. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default">Default key policy</a>. For more information about key policy limits, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/resource-limits.html">Resource quotas</a>.</p> <p/> */
	export interface KmsKeyConfigurationFormProperties {
	}
	export function CreateKmsKeyConfigurationFormGroup() {
		return new FormGroup<KmsKeyConfigurationFormProperties>({
		});

	}

	export interface KmsKeyPoliciesMap {
	}
	export interface KmsKeyPoliciesMapFormProperties {
	}
	export function CreateKmsKeyPoliciesMapFormGroup() {
		return new FormGroup<KmsKeyPoliciesMapFormProperties>({
		});

	}


	/** A proposed grant configuration for a KMS key. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html">CreateGrant</a>. */
	export interface KmsGrantConfiguration {

		/** Required */
		operations: Array<KmsGrantOperation>;

		/** Required */
		granteePrincipal: string;
		retiringPrincipal?: string;
		constraints?: KmsGrantConstraints;

		/** Required */
		issuingAccount: string;
	}

	/** A proposed grant configuration for a KMS key. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html">CreateGrant</a>. */
	export interface KmsGrantConfigurationFormProperties {

		/** Required */
		granteePrincipal: FormControl<string | null | undefined>,
		retiringPrincipal: FormControl<string | null | undefined>,

		/** Required */
		issuingAccount: FormControl<string | null | undefined>,
	}
	export function CreateKmsGrantConfigurationFormGroup() {
		return new FormGroup<KmsGrantConfigurationFormProperties>({
			granteePrincipal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			retiringPrincipal: new FormControl<string | null | undefined>(undefined),
			issuingAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum KmsGrantOperation { CreateGrant = 'CreateGrant', Decrypt = 'Decrypt', DescribeKey = 'DescribeKey', Encrypt = 'Encrypt', GenerateDataKey = 'GenerateDataKey', GenerateDataKeyPair = 'GenerateDataKeyPair', GenerateDataKeyPairWithoutPlaintext = 'GenerateDataKeyPairWithoutPlaintext', GenerateDataKeyWithoutPlaintext = 'GenerateDataKeyWithoutPlaintext', GetPublicKey = 'GetPublicKey', ReEncryptFrom = 'ReEncryptFrom', ReEncryptTo = 'ReEncryptTo', RetireGrant = 'RetireGrant', Sign = 'Sign', Verify = 'Verify' }


	/** Use this structure to propose allowing <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> in the grant only when the operation request includes the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a>. You can specify only one type of encryption context. An empty map is treated as not specified. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GrantConstraints.html">GrantConstraints</a>. */
	export interface KmsGrantConstraints {
		encryptionContextEquals?: KmsConstraintsMap;
		encryptionContextSubset?: KmsConstraintsMap;
	}

	/** Use this structure to propose allowing <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> in the grant only when the operation request includes the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a>. You can specify only one type of encryption context. An empty map is treated as not specified. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GrantConstraints.html">GrantConstraints</a>. */
	export interface KmsGrantConstraintsFormProperties {
	}
	export function CreateKmsGrantConstraintsFormGroup() {
		return new FormGroup<KmsGrantConstraintsFormProperties>({
		});

	}

	export interface KmsConstraintsMap {
	}
	export interface KmsConstraintsMapFormProperties {
	}
	export function CreateKmsConstraintsMapFormGroup() {
		return new FormGroup<KmsConstraintsMapFormProperties>({
		});

	}


	/** The proposed access control configuration for an Amazon RDS DB cluster snapshot. You can propose a configuration for a new Amazon RDS DB cluster snapshot or an Amazon RDS DB cluster snapshot that you own by specifying the <code>RdsDbClusterSnapshotAttributeValue</code> and optional KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterSnapshotAttribute.html">ModifyDBClusterSnapshotAttribute</a>. */
	export interface RdsDbClusterSnapshotConfiguration {
		attributes?: RdsDbClusterSnapshotAttributesMap;
		kmsKeyId?: string;
	}

	/** The proposed access control configuration for an Amazon RDS DB cluster snapshot. You can propose a configuration for a new Amazon RDS DB cluster snapshot or an Amazon RDS DB cluster snapshot that you own by specifying the <code>RdsDbClusterSnapshotAttributeValue</code> and optional KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterSnapshotAttribute.html">ModifyDBClusterSnapshotAttribute</a>. */
	export interface RdsDbClusterSnapshotConfigurationFormProperties {
		kmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateRdsDbClusterSnapshotConfigurationFormGroup() {
		return new FormGroup<RdsDbClusterSnapshotConfigurationFormProperties>({
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RdsDbClusterSnapshotAttributesMap {
	}
	export interface RdsDbClusterSnapshotAttributesMapFormProperties {
	}
	export function CreateRdsDbClusterSnapshotAttributesMapFormGroup() {
		return new FormGroup<RdsDbClusterSnapshotAttributesMapFormProperties>({
		});

	}


	/** The proposed access control configuration for an Amazon RDS DB snapshot. You can propose a configuration for a new Amazon RDS DB snapshot or an Amazon RDS DB snapshot that you own by specifying the <code>RdsDbSnapshotAttributeValue</code> and optional KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSnapshotAttribute.html">ModifyDBSnapshotAttribute</a>. */
	export interface RdsDbSnapshotConfiguration {
		attributes?: RdsDbSnapshotAttributesMap;
		kmsKeyId?: string;
	}

	/** The proposed access control configuration for an Amazon RDS DB snapshot. You can propose a configuration for a new Amazon RDS DB snapshot or an Amazon RDS DB snapshot that you own by specifying the <code>RdsDbSnapshotAttributeValue</code> and optional KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSnapshotAttribute.html">ModifyDBSnapshotAttribute</a>. */
	export interface RdsDbSnapshotConfigurationFormProperties {
		kmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateRdsDbSnapshotConfigurationFormGroup() {
		return new FormGroup<RdsDbSnapshotConfigurationFormProperties>({
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RdsDbSnapshotAttributesMap {
	}
	export interface RdsDbSnapshotAttributesMapFormProperties {
	}
	export function CreateRdsDbSnapshotAttributesMapFormGroup() {
		return new FormGroup<RdsDbSnapshotAttributesMapFormProperties>({
		});

	}


	/** <p>The configuration for a Secrets Manager secret. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html">CreateSecret</a>.</p> <p>You can propose a configuration for a new secret or an existing secret that you own by specifying the secret policy and optional KMS encryption key. If the configuration is for an existing secret and you do not specify the secret policy, the access preview uses the existing policy for the secret. If the access preview is for a new resource and you do not specify the policy, the access preview assumes a secret without a policy. To propose deletion of an existing policy, you can specify an empty string. If the proposed configuration is for a new secret and you do not specify the KMS key ID, the access preview uses the Amazon Web Services managed key <code>aws/secretsmanager</code>. If you specify an empty string for the KMS key ID, the access preview uses the Amazon Web Services managed key of the Amazon Web Services account. For more information about secret policy limits, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_limits.html">Quotas for Secrets Manager.</a>.</p> */
	export interface SecretsManagerSecretConfiguration {
		kmsKeyId?: string;
		secretPolicy?: string;
	}

	/** <p>The configuration for a Secrets Manager secret. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html">CreateSecret</a>.</p> <p>You can propose a configuration for a new secret or an existing secret that you own by specifying the secret policy and optional KMS encryption key. If the configuration is for an existing secret and you do not specify the secret policy, the access preview uses the existing policy for the secret. If the access preview is for a new resource and you do not specify the policy, the access preview assumes a secret without a policy. To propose deletion of an existing policy, you can specify an empty string. If the proposed configuration is for a new secret and you do not specify the KMS key ID, the access preview uses the Amazon Web Services managed key <code>aws/secretsmanager</code>. If you specify an empty string for the KMS key ID, the access preview uses the Amazon Web Services managed key of the Amazon Web Services account. For more information about secret policy limits, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_limits.html">Quotas for Secrets Manager.</a>.</p> */
	export interface SecretsManagerSecretConfigurationFormProperties {
		kmsKeyId: FormControl<string | null | undefined>,
		secretPolicy: FormControl<string | null | undefined>,
	}
	export function CreateSecretsManagerSecretConfigurationFormGroup() {
		return new FormGroup<SecretsManagerSecretConfigurationFormProperties>({
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			secretPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Proposed access control configuration for an Amazon S3 bucket. You can propose a configuration for a new Amazon S3 bucket or an existing Amazon S3 bucket that you own by specifying the Amazon S3 bucket policy, bucket ACLs, bucket BPA settings, Amazon S3 access points, and multi-region access points attached to the bucket. If the configuration is for an existing Amazon S3 bucket and you do not specify the Amazon S3 bucket policy, the access preview uses the existing policy attached to the bucket. If the access preview is for a new resource and you do not specify the Amazon S3 bucket policy, the access preview assumes a bucket without a policy. To propose deletion of an existing bucket policy, you can specify an empty string. For more information about bucket policy limits, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html">Bucket Policy Examples</a>. */
	export interface S3BucketConfiguration {
		bucketPolicy?: string;
		bucketAclGrants?: Array<S3BucketAclGrantConfiguration>;
		bucketPublicAccessBlock?: S3PublicAccessBlockConfiguration;
		accessPoints?: S3AccessPointConfigurationsMap;
	}

	/** Proposed access control configuration for an Amazon S3 bucket. You can propose a configuration for a new Amazon S3 bucket or an existing Amazon S3 bucket that you own by specifying the Amazon S3 bucket policy, bucket ACLs, bucket BPA settings, Amazon S3 access points, and multi-region access points attached to the bucket. If the configuration is for an existing Amazon S3 bucket and you do not specify the Amazon S3 bucket policy, the access preview uses the existing policy attached to the bucket. If the access preview is for a new resource and you do not specify the Amazon S3 bucket policy, the access preview assumes a bucket without a policy. To propose deletion of an existing bucket policy, you can specify an empty string. For more information about bucket policy limits, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html">Bucket Policy Examples</a>. */
	export interface S3BucketConfigurationFormProperties {
		bucketPolicy: FormControl<string | null | undefined>,
	}
	export function CreateS3BucketConfigurationFormGroup() {
		return new FormGroup<S3BucketConfigurationFormProperties>({
			bucketPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A proposed access control list grant configuration for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#setting-acls">How to Specify an ACL</a>. */
	export interface S3BucketAclGrantConfiguration {

		/** Required */
		permission: AclPermission;

		/** Required */
		grantee: AclGrantee;
	}

	/** A proposed access control list grant configuration for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#setting-acls">How to Specify an ACL</a>. */
	export interface S3BucketAclGrantConfigurationFormProperties {

		/** Required */
		permission: FormControl<AclPermission | null | undefined>,
	}
	export function CreateS3BucketAclGrantConfigurationFormGroup() {
		return new FormGroup<S3BucketAclGrantConfigurationFormProperties>({
			permission: new FormControl<AclPermission | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AclPermission { READ = 'READ', WRITE = 'WRITE', READ_ACP = 'READ_ACP', WRITE_ACP = 'WRITE_ACP', FULL_CONTROL = 'FULL_CONTROL' }


	/** You specify each grantee as a type-value pair using one of these types. You can specify only one type of grantee. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAcl.html">PutBucketAcl</a>. */
	export interface AclGrantee {
		id?: string;
		uri?: string;
	}

	/** You specify each grantee as a type-value pair using one of these types. You can specify only one type of grantee. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAcl.html">PutBucketAcl</a>. */
	export interface AclGranteeFormProperties {
		id: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateAclGranteeFormGroup() {
		return new FormGroup<AclGranteeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The <code>PublicAccessBlock</code> configuration to apply to this Amazon S3 bucket. If the proposed configuration is for an existing Amazon S3 bucket and the configuration is not specified, the access preview uses the existing setting. If the proposed configuration is for a new bucket and the configuration is not specified, the access preview uses <code>false</code>. If the proposed configuration is for a new access point or multi-region access point and the access point BPA configuration is not specified, the access preview uses <code>true</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html">PublicAccessBlockConfiguration</a>.  */
	export interface S3PublicAccessBlockConfiguration {

		/** Required */
		ignorePublicAcls: boolean;

		/** Required */
		restrictPublicBuckets: boolean;
	}

	/** The <code>PublicAccessBlock</code> configuration to apply to this Amazon S3 bucket. If the proposed configuration is for an existing Amazon S3 bucket and the configuration is not specified, the access preview uses the existing setting. If the proposed configuration is for a new bucket and the configuration is not specified, the access preview uses <code>false</code>. If the proposed configuration is for a new access point or multi-region access point and the access point BPA configuration is not specified, the access preview uses <code>true</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html">PublicAccessBlockConfiguration</a>.  */
	export interface S3PublicAccessBlockConfigurationFormProperties {

		/** Required */
		ignorePublicAcls: FormControl<boolean | null | undefined>,

		/** Required */
		restrictPublicBuckets: FormControl<boolean | null | undefined>,
	}
	export function CreateS3PublicAccessBlockConfigurationFormGroup() {
		return new FormGroup<S3PublicAccessBlockConfigurationFormProperties>({
			ignorePublicAcls: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			restrictPublicBuckets: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface S3AccessPointConfigurationsMap {
	}
	export interface S3AccessPointConfigurationsMapFormProperties {
	}
	export function CreateS3AccessPointConfigurationsMapFormGroup() {
		return new FormGroup<S3AccessPointConfigurationsMapFormProperties>({
		});

	}


	/** The proposed access control configuration for an Amazon SNS topic. You can propose a configuration for a new Amazon SNS topic or an existing Amazon SNS topic that you own by specifying the policy. If the configuration is for an existing Amazon SNS topic and you do not specify the Amazon SNS policy, then the access preview uses the existing Amazon SNS policy for the topic. If the access preview is for a new resource and you do not specify the policy, then the access preview assumes an Amazon SNS topic without a policy. To propose deletion of an existing Amazon SNS topic policy, you can specify an empty string for the Amazon SNS policy. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_Topic.html">Topic</a>. */
	export interface SnsTopicConfiguration {
		topicPolicy?: string;
	}

	/** The proposed access control configuration for an Amazon SNS topic. You can propose a configuration for a new Amazon SNS topic or an existing Amazon SNS topic that you own by specifying the policy. If the configuration is for an existing Amazon SNS topic and you do not specify the Amazon SNS policy, then the access preview uses the existing Amazon SNS policy for the topic. If the access preview is for a new resource and you do not specify the policy, then the access preview assumes an Amazon SNS topic without a policy. To propose deletion of an existing Amazon SNS topic policy, you can specify an empty string for the Amazon SNS policy. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_Topic.html">Topic</a>. */
	export interface SnsTopicConfigurationFormProperties {
		topicPolicy: FormControl<string | null | undefined>,
	}
	export function CreateSnsTopicConfigurationFormGroup() {
		return new FormGroup<SnsTopicConfigurationFormProperties>({
			topicPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The proposed access control configuration for an Amazon SQS queue. You can propose a configuration for a new Amazon SQS queue or an existing Amazon SQS queue that you own by specifying the Amazon SQS policy. If the configuration is for an existing Amazon SQS queue and you do not specify the Amazon SQS policy, the access preview uses the existing Amazon SQS policy for the queue. If the access preview is for a new resource and you do not specify the policy, the access preview assumes an Amazon SQS queue without a policy. To propose deletion of an existing Amazon SQS queue policy, you can specify an empty string for the Amazon SQS policy. For more information about Amazon SQS policy limits, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-policies.html">Quotas related to policies</a>. */
	export interface SqsQueueConfiguration {
		queuePolicy?: string;
	}

	/** The proposed access control configuration for an Amazon SQS queue. You can propose a configuration for a new Amazon SQS queue or an existing Amazon SQS queue that you own by specifying the Amazon SQS policy. If the configuration is for an existing Amazon SQS queue and you do not specify the Amazon SQS policy, the access preview uses the existing Amazon SQS policy for the queue. If the access preview is for a new resource and you do not specify the policy, the access preview assumes an Amazon SQS queue without a policy. To propose deletion of an existing Amazon SQS queue policy, you can specify an empty string for the Amazon SQS policy. For more information about Amazon SQS policy limits, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-policies.html">Quotas related to policies</a>. */
	export interface SqsQueueConfigurationFormProperties {
		queuePolicy: FormControl<string | null | undefined>,
	}
	export function CreateSqsQueueConfigurationFormGroup() {
		return new FormGroup<SqsQueueConfigurationFormProperties>({
			queuePolicy: new FormControl<string | null | undefined>(undefined),
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}


	/** The response to the request to create an analyzer. */
	export interface CreateAnalyzerResponse {
		arn?: string;
	}

	/** The response to the request to create an analyzer. */
	export interface CreateAnalyzerResponseFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAnalyzerResponseFormGroup() {
		return new FormGroup<CreateAnalyzerResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An criterion statement in an archive rule. Each archive rule may have multiple criteria. */
	export interface InlineArchiveRule {

		/** Required */
		ruleName: string;

		/** Required */
		filter: FilterCriteriaMap;
	}

	/** An criterion statement in an archive rule. Each archive rule may have multiple criteria. */
	export interface InlineArchiveRuleFormProperties {

		/** Required */
		ruleName: FormControl<string | null | undefined>,
	}
	export function CreateInlineArchiveRuleFormGroup() {
		return new FormGroup<InlineArchiveRuleFormProperties>({
			ruleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FilterCriteriaMap {
	}
	export interface FilterCriteriaMapFormProperties {
	}
	export function CreateFilterCriteriaMapFormGroup() {
		return new FormGroup<FilterCriteriaMapFormProperties>({
		});

	}


	/** The criteria to use in the filter that defines the archive rule. For more information on available filter keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a>. */
	export interface Criterion {
		eq?: Array<string>;
		neq?: Array<string>;
		contains?: Array<string>;
		exists?: boolean | null;
	}

	/** The criteria to use in the filter that defines the archive rule. For more information on available filter keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a>. */
	export interface CriterionFormProperties {
		exists: FormControl<boolean | null | undefined>,
	}
	export function CreateCriterionFormGroup() {
		return new FormGroup<CriterionFormProperties>({
			exists: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetAccessPreviewResponse {

		/** Required */
		accessPreview: AccessPreview;
	}
	export interface GetAccessPreviewResponseFormProperties {
	}
	export function CreateGetAccessPreviewResponseFormGroup() {
		return new FormGroup<GetAccessPreviewResponseFormProperties>({
		});

	}


	/** Contains information about an access preview. */
	export interface AccessPreview {

		/** Required */
		id: string;

		/** Required */
		analyzerArn: string;

		/** Required */
		configurations: ConfigurationsMap;

		/** Required */
		createdAt: Date;

		/** Required */
		status: AccessPreviewStatus;
		statusReason?: AccessPreviewStatusReason;
	}

	/** Contains information about an access preview. */
	export interface AccessPreviewFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		analyzerArn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<AccessPreviewStatus | null | undefined>,
	}
	export function CreateAccessPreviewFormGroup() {
		return new FormGroup<AccessPreviewFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<AccessPreviewStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConfigurationsMap {
	}
	export interface ConfigurationsMapFormProperties {
	}
	export function CreateConfigurationsMapFormGroup() {
		return new FormGroup<ConfigurationsMapFormProperties>({
		});

	}

	export enum AccessPreviewStatus { COMPLETED = 'COMPLETED', CREATING = 'CREATING', FAILED = 'FAILED' }


	/** Provides more details about the current status of the access preview. For example, if the creation of the access preview fails, a <code>Failed</code> status is returned. This failure can be due to an internal issue with the analysis or due to an invalid proposed resource configuration. */
	export interface AccessPreviewStatusReason {

		/** Required */
		code: AccessPreviewStatusReasonCode;
	}

	/** Provides more details about the current status of the access preview. For example, if the creation of the access preview fails, a <code>Failed</code> status is returned. This failure can be due to an internal issue with the analysis or due to an invalid proposed resource configuration. */
	export interface AccessPreviewStatusReasonFormProperties {

		/** Required */
		code: FormControl<AccessPreviewStatusReasonCode | null | undefined>,
	}
	export function CreateAccessPreviewStatusReasonFormGroup() {
		return new FormGroup<AccessPreviewStatusReasonFormProperties>({
			code: new FormControl<AccessPreviewStatusReasonCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AccessPreviewStatusReasonCode { INTERNAL_ERROR = 'INTERNAL_ERROR', INVALID_CONFIGURATION = 'INVALID_CONFIGURATION' }


	/** The response to the request. */
	export interface GetAnalyzedResourceResponse {
		resource?: AnalyzedResource;
	}

	/** The response to the request. */
	export interface GetAnalyzedResourceResponseFormProperties {
	}
	export function CreateGetAnalyzedResourceResponseFormGroup() {
		return new FormGroup<GetAnalyzedResourceResponseFormProperties>({
		});

	}


	/** Contains details about the analyzed resource. */
	export interface AnalyzedResource {

		/** Required */
		resourceArn: string;

		/** Required */
		resourceType: ResourceType;

		/** Required */
		createdAt: Date;

		/** Required */
		analyzedAt: Date;

		/** Required */
		updatedAt: Date;

		/** Required */
		isPublic: boolean;
		actions?: Array<string>;
		sharedVia?: Array<string>;
		status?: FindingStatus;

		/** Required */
		resourceOwnerAccount: string;
		error?: string;
	}

	/** Contains details about the analyzed resource. */
	export interface AnalyzedResourceFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,

		/** Required */
		resourceType: FormControl<ResourceType | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		analyzedAt: FormControl<Date | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,

		/** Required */
		isPublic: FormControl<boolean | null | undefined>,
		status: FormControl<FindingStatus | null | undefined>,

		/** Required */
		resourceOwnerAccount: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzedResourceFormGroup() {
		return new FormGroup<AnalyzedResourceFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			analyzedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			isPublic: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<FindingStatus | null | undefined>(undefined),
			resourceOwnerAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			error: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceType { 'AWS::S3::Bucket' = 'AWS::S3::Bucket', 'AWS::IAM::Role' = 'AWS::IAM::Role', 'AWS::SQS::Queue' = 'AWS::SQS::Queue', 'AWS::Lambda::Function' = 'AWS::Lambda::Function', 'AWS::Lambda::LayerVersion' = 'AWS::Lambda::LayerVersion', 'AWS::KMS::Key' = 'AWS::KMS::Key', 'AWS::SecretsManager::Secret' = 'AWS::SecretsManager::Secret', 'AWS::EFS::FileSystem' = 'AWS::EFS::FileSystem', 'AWS::EC2::Snapshot' = 'AWS::EC2::Snapshot', 'AWS::ECR::Repository' = 'AWS::ECR::Repository', 'AWS::RDS::DBSnapshot' = 'AWS::RDS::DBSnapshot', 'AWS::RDS::DBClusterSnapshot' = 'AWS::RDS::DBClusterSnapshot', 'AWS::SNS::Topic' = 'AWS::SNS::Topic' }

	export enum FindingStatus { ACTIVE = 'ACTIVE', ARCHIVED = 'ARCHIVED', RESOLVED = 'RESOLVED' }


	/** The response to the request. */
	export interface GetAnalyzerResponse {

		/** Required */
		analyzer: AnalyzerSummary;
	}

	/** The response to the request. */
	export interface GetAnalyzerResponseFormProperties {
	}
	export function CreateGetAnalyzerResponseFormGroup() {
		return new FormGroup<GetAnalyzerResponseFormProperties>({
		});

	}


	/** Contains information about the analyzer. */
	export interface AnalyzerSummary {

		/** Required */
		arn: string;

		/** Required */
		name: string;

		/** Required */
		type: Type;

		/** Required */
		createdAt: Date;
		lastResourceAnalyzed?: string;
		lastResourceAnalyzedAt?: Date;
		tags?: TagsMap;

		/** Required */
		status: AnalyzerStatus;
		statusReason?: StatusReason;
	}

	/** Contains information about the analyzer. */
	export interface AnalyzerSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<Type | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		lastResourceAnalyzed: FormControl<string | null | undefined>,
		lastResourceAnalyzedAt: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<AnalyzerStatus | null | undefined>,
	}
	export function CreateAnalyzerSummaryFormGroup() {
		return new FormGroup<AnalyzerSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Type | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastResourceAnalyzed: new FormControl<string | null | undefined>(undefined),
			lastResourceAnalyzedAt: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<AnalyzerStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Type { ACCOUNT = 'ACCOUNT', ORGANIZATION = 'ORGANIZATION' }

	export interface TagsMap {
	}
	export interface TagsMapFormProperties {
	}
	export function CreateTagsMapFormGroup() {
		return new FormGroup<TagsMapFormProperties>({
		});

	}

	export enum AnalyzerStatus { ACTIVE = 'ACTIVE', CREATING = 'CREATING', DISABLED = 'DISABLED', FAILED = 'FAILED' }


	/** Provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a <code>Failed</code> status is returned. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the Amazon Web Services organization. */
	export interface StatusReason {

		/** Required */
		code: ReasonCode;
	}

	/** Provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a <code>Failed</code> status is returned. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the Amazon Web Services organization. */
	export interface StatusReasonFormProperties {

		/** Required */
		code: FormControl<ReasonCode | null | undefined>,
	}
	export function CreateStatusReasonFormGroup() {
		return new FormGroup<StatusReasonFormProperties>({
			code: new FormControl<ReasonCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ReasonCode { AWS_SERVICE_ACCESS_DISABLED = 'AWS_SERVICE_ACCESS_DISABLED', DELEGATED_ADMINISTRATOR_DEREGISTERED = 'DELEGATED_ADMINISTRATOR_DEREGISTERED', ORGANIZATION_DELETED = 'ORGANIZATION_DELETED', SERVICE_LINKED_ROLE_CREATION_FAILED = 'SERVICE_LINKED_ROLE_CREATION_FAILED' }


	/** The response to the request. */
	export interface GetArchiveRuleResponse {

		/**
		 * Contains information about an archive rule.
		 * Required
		 */
		archiveRule: ArchiveRuleSummary;
	}

	/** The response to the request. */
	export interface GetArchiveRuleResponseFormProperties {
	}
	export function CreateGetArchiveRuleResponseFormGroup() {
		return new FormGroup<GetArchiveRuleResponseFormProperties>({
		});

	}


	/** Contains information about an archive rule. */
	export interface ArchiveRuleSummary {

		/** Required */
		ruleName: string;

		/** Required */
		filter: FilterCriteriaMap;

		/** Required */
		createdAt: Date;

		/** Required */
		updatedAt: Date;
	}

	/** Contains information about an archive rule. */
	export interface ArchiveRuleSummaryFormProperties {

		/** Required */
		ruleName: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateArchiveRuleSummaryFormGroup() {
		return new FormGroup<ArchiveRuleSummaryFormProperties>({
			ruleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response to the request. */
	export interface GetFindingResponse {
		finding?: Finding;
	}

	/** The response to the request. */
	export interface GetFindingResponseFormProperties {
	}
	export function CreateGetFindingResponseFormGroup() {
		return new FormGroup<GetFindingResponseFormProperties>({
		});

	}


	/** Contains information about a finding. */
	export interface Finding {

		/** Required */
		id: string;
		principal?: PrincipalMap;
		action?: Array<string>;
		resource?: string;
		isPublic?: boolean | null;

		/** Required */
		resourceType: ResourceType;

		/** Required */
		condition: ConditionKeyMap;

		/** Required */
		createdAt: Date;

		/** Required */
		analyzedAt: Date;

		/** Required */
		updatedAt: Date;

		/** Required */
		status: FindingStatus;

		/** Required */
		resourceOwnerAccount: string;
		error?: string;
		sources?: Array<FindingSource>;
	}

	/** Contains information about a finding. */
	export interface FindingFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		resource: FormControl<string | null | undefined>,
		isPublic: FormControl<boolean | null | undefined>,

		/** Required */
		resourceType: FormControl<ResourceType | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		analyzedAt: FormControl<Date | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<FindingStatus | null | undefined>,

		/** Required */
		resourceOwnerAccount: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,
	}
	export function CreateFindingFormGroup() {
		return new FormGroup<FindingFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined),
			isPublic: new FormControl<boolean | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			analyzedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<FindingStatus | null | undefined>(undefined, [Validators.required]),
			resourceOwnerAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			error: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PrincipalMap {
	}
	export interface PrincipalMapFormProperties {
	}
	export function CreatePrincipalMapFormGroup() {
		return new FormGroup<PrincipalMapFormProperties>({
		});

	}

	export interface ConditionKeyMap {
	}
	export interface ConditionKeyMapFormProperties {
	}
	export function CreateConditionKeyMapFormGroup() {
		return new FormGroup<ConditionKeyMapFormProperties>({
		});

	}


	/** The source of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings. */
	export interface FindingSource {

		/** Required */
		type: FindingSourceType;
		detail?: FindingSourceDetail;
	}

	/** The source of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings. */
	export interface FindingSourceFormProperties {

		/** Required */
		type: FormControl<FindingSourceType | null | undefined>,
	}
	export function CreateFindingSourceFormGroup() {
		return new FormGroup<FindingSourceFormProperties>({
			type: new FormControl<FindingSourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FindingSourceType { POLICY = 'POLICY', BUCKET_ACL = 'BUCKET_ACL', S3_ACCESS_POINT = 'S3_ACCESS_POINT', S3_ACCESS_POINT_ACCOUNT = 'S3_ACCESS_POINT_ACCOUNT' }


	/** Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings. */
	export interface FindingSourceDetail {
		accessPointArn?: string;
		accessPointAccount?: string;
	}

	/** Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings. */
	export interface FindingSourceDetailFormProperties {
		accessPointArn: FormControl<string | null | undefined>,
		accessPointAccount: FormControl<string | null | undefined>,
	}
	export function CreateFindingSourceDetailFormGroup() {
		return new FormGroup<FindingSourceDetailFormProperties>({
			accessPointArn: new FormControl<string | null | undefined>(undefined),
			accessPointAccount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGeneratedPolicyResponse {

		/** Required */
		jobDetails: JobDetails;

		/** Required */
		generatedPolicyResult: GeneratedPolicyResult;
	}
	export interface GetGeneratedPolicyResponseFormProperties {
	}
	export function CreateGetGeneratedPolicyResponseFormGroup() {
		return new FormGroup<GetGeneratedPolicyResponseFormProperties>({
		});

	}


	/** Contains details about the policy generation request. */
	export interface JobDetails {

		/** Required */
		jobId: string;

		/** Required */
		status: JobStatus;

		/** Required */
		startedOn: Date;
		completedOn?: Date;
		jobError?: JobError;
	}

	/** Contains details about the policy generation request. */
	export interface JobDetailsFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<JobStatus | null | undefined>,

		/** Required */
		startedOn: FormControl<Date | null | undefined>,
		completedOn: FormControl<Date | null | undefined>,
	}
	export function CreateJobDetailsFormGroup() {
		return new FormGroup<JobDetailsFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
			startedOn: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			completedOn: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum JobStatus { IN_PROGRESS = 'IN_PROGRESS', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', CANCELED = 'CANCELED' }


	/** Contains the details about the policy generation error. */
	export interface JobError {

		/** Required */
		code: JobErrorCode;

		/** Required */
		message: string;
	}

	/** Contains the details about the policy generation error. */
	export interface JobErrorFormProperties {

		/** Required */
		code: FormControl<JobErrorCode | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateJobErrorFormGroup() {
		return new FormGroup<JobErrorFormProperties>({
			code: new FormControl<JobErrorCode | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JobErrorCode { AUTHORIZATION_ERROR = 'AUTHORIZATION_ERROR', RESOURCE_NOT_FOUND_ERROR = 'RESOURCE_NOT_FOUND_ERROR', SERVICE_QUOTA_EXCEEDED_ERROR = 'SERVICE_QUOTA_EXCEEDED_ERROR', SERVICE_ERROR = 'SERVICE_ERROR' }


	/** Contains the text for the generated policy and its details. */
	export interface GeneratedPolicyResult {

		/**
		 * A <code>GeneratedPolicyProperties</code> object that contains properties of the generated policy.
		 * Required
		 */
		properties: any;
		generatedPolicies?: Array<GeneratedPolicy>;
	}

	/** Contains the text for the generated policy and its details. */
	export interface GeneratedPolicyResultFormProperties {

		/**
		 * A <code>GeneratedPolicyProperties</code> object that contains properties of the generated policy.
		 * Required
		 */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateGeneratedPolicyResultFormGroup() {
		return new FormGroup<GeneratedPolicyResultFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the text for the generated policy. */
	export interface GeneratedPolicy {

		/** Required */
		policy: string;
	}

	/** Contains the text for the generated policy. */
	export interface GeneratedPolicyFormProperties {

		/** Required */
		policy: FormControl<string | null | undefined>,
	}
	export function CreateGeneratedPolicyFormGroup() {
		return new FormGroup<GeneratedPolicyFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAccessPreviewFindingsResponse {

		/** Required */
		findings: Array<AccessPreviewFinding>;
		nextToken?: string;
	}
	export interface ListAccessPreviewFindingsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccessPreviewFindingsResponseFormGroup() {
		return new FormGroup<ListAccessPreviewFindingsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An access preview finding generated by the access preview. */
	export interface AccessPreviewFinding {

		/** Required */
		id: string;
		existingFindingId?: string;
		existingFindingStatus?: FindingStatus;
		principal?: PrincipalMap;
		action?: Array<string>;
		condition?: ConditionKeyMap;
		resource?: string;
		isPublic?: boolean | null;

		/** Required */
		resourceType: ResourceType;

		/** Required */
		createdAt: Date;

		/** Required */
		changeType: FindingChangeType;

		/** Required */
		status: FindingStatus;

		/** Required */
		resourceOwnerAccount: string;
		error?: string;
		sources?: Array<FindingSource>;
	}

	/** An access preview finding generated by the access preview. */
	export interface AccessPreviewFindingFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		existingFindingId: FormControl<string | null | undefined>,
		existingFindingStatus: FormControl<FindingStatus | null | undefined>,
		resource: FormControl<string | null | undefined>,
		isPublic: FormControl<boolean | null | undefined>,

		/** Required */
		resourceType: FormControl<ResourceType | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		changeType: FormControl<FindingChangeType | null | undefined>,

		/** Required */
		status: FormControl<FindingStatus | null | undefined>,

		/** Required */
		resourceOwnerAccount: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,
	}
	export function CreateAccessPreviewFindingFormGroup() {
		return new FormGroup<AccessPreviewFindingFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			existingFindingId: new FormControl<string | null | undefined>(undefined),
			existingFindingStatus: new FormControl<FindingStatus | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
			isPublic: new FormControl<boolean | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			changeType: new FormControl<FindingChangeType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<FindingStatus | null | undefined>(undefined, [Validators.required]),
			resourceOwnerAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			error: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FindingChangeType { CHANGED = 'CHANGED', NEW = 'NEW', UNCHANGED = 'UNCHANGED' }

	export interface ListAccessPreviewsResponse {

		/** Required */
		accessPreviews: Array<AccessPreviewSummary>;
		nextToken?: string;
	}
	export interface ListAccessPreviewsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccessPreviewsResponseFormGroup() {
		return new FormGroup<ListAccessPreviewsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of information about an access preview. */
	export interface AccessPreviewSummary {

		/** Required */
		id: string;

		/** Required */
		analyzerArn: string;

		/** Required */
		createdAt: Date;

		/** Required */
		status: AccessPreviewStatus;

		/** Provides more details about the current status of the access preview. For example, if the creation of the access preview fails, a <code>Failed</code> status is returned. This failure can be due to an internal issue with the analysis or due to an invalid proposed resource configuration. */
		statusReason?: AccessPreviewStatusReason;
	}

	/** Contains a summary of information about an access preview. */
	export interface AccessPreviewSummaryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		analyzerArn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<AccessPreviewStatus | null | undefined>,
	}
	export function CreateAccessPreviewSummaryFormGroup() {
		return new FormGroup<AccessPreviewSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<AccessPreviewStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response to the request. */
	export interface ListAnalyzedResourcesResponse {

		/** Required */
		analyzedResources: Array<AnalyzedResourceSummary>;
		nextToken?: string;
	}

	/** The response to the request. */
	export interface ListAnalyzedResourcesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnalyzedResourcesResponseFormGroup() {
		return new FormGroup<ListAnalyzedResourcesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the ARN of the analyzed resource. */
	export interface AnalyzedResourceSummary {

		/** Required */
		resourceArn: string;

		/** Required */
		resourceOwnerAccount: string;

		/** Required */
		resourceType: ResourceType;
	}

	/** Contains the ARN of the analyzed resource. */
	export interface AnalyzedResourceSummaryFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,

		/** Required */
		resourceOwnerAccount: FormControl<string | null | undefined>,

		/** Required */
		resourceType: FormControl<ResourceType | null | undefined>,
	}
	export function CreateAnalyzedResourceSummaryFormGroup() {
		return new FormGroup<AnalyzedResourceSummaryFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceOwnerAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response to the request. */
	export interface ListAnalyzersResponse {

		/** Required */
		analyzers: Array<AnalyzerSummary>;
		nextToken?: string;
	}

	/** The response to the request. */
	export interface ListAnalyzersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnalyzersResponseFormGroup() {
		return new FormGroup<ListAnalyzersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to the request. */
	export interface ListArchiveRulesResponse {

		/** Required */
		archiveRules: Array<ArchiveRuleSummary>;
		nextToken?: string;
	}

	/** The response to the request. */
	export interface ListArchiveRulesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListArchiveRulesResponseFormGroup() {
		return new FormGroup<ListArchiveRulesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to the request. */
	export interface ListFindingsResponse {

		/** Required */
		findings: Array<FindingSummary>;
		nextToken?: string;
	}

	/** The response to the request. */
	export interface ListFindingsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingsResponseFormGroup() {
		return new FormGroup<ListFindingsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a finding. */
	export interface FindingSummary {

		/** Required */
		id: string;
		principal?: PrincipalMap;
		action?: Array<string>;
		resource?: string;
		isPublic?: boolean | null;

		/** Required */
		resourceType: ResourceType;

		/** Required */
		condition: ConditionKeyMap;

		/** Required */
		createdAt: Date;

		/** Required */
		analyzedAt: Date;

		/** Required */
		updatedAt: Date;

		/** Required */
		status: FindingStatus;

		/** Required */
		resourceOwnerAccount: string;
		error?: string;
		sources?: Array<FindingSource>;
	}

	/** Contains information about a finding. */
	export interface FindingSummaryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		resource: FormControl<string | null | undefined>,
		isPublic: FormControl<boolean | null | undefined>,

		/** Required */
		resourceType: FormControl<ResourceType | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		analyzedAt: FormControl<Date | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<FindingStatus | null | undefined>,

		/** Required */
		resourceOwnerAccount: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,
	}
	export function CreateFindingSummaryFormGroup() {
		return new FormGroup<FindingSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined),
			isPublic: new FormControl<boolean | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			analyzedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<FindingStatus | null | undefined>(undefined, [Validators.required]),
			resourceOwnerAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			error: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OrderBy { ASC = 'ASC', DESC = 'DESC' }

	export interface ListPolicyGenerationsResponse {

		/** Required */
		policyGenerations: Array<PolicyGeneration>;
		nextToken?: string;
	}
	export interface ListPolicyGenerationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPolicyGenerationsResponseFormGroup() {
		return new FormGroup<ListPolicyGenerationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about the policy generation status and properties. */
	export interface PolicyGeneration {

		/** Required */
		jobId: string;

		/** Required */
		principalArn: string;

		/** Required */
		status: JobStatus;

		/** Required */
		startedOn: Date;
		completedOn?: Date;
	}

	/** Contains details about the policy generation status and properties. */
	export interface PolicyGenerationFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,

		/** Required */
		principalArn: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<JobStatus | null | undefined>,

		/** Required */
		startedOn: FormControl<Date | null | undefined>,
		completedOn: FormControl<Date | null | undefined>,
	}
	export function CreatePolicyGenerationFormGroup() {
		return new FormGroup<PolicyGenerationFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			principalArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
			startedOn: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			completedOn: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The response to the request. */
	export interface ListTagsForResourceResponse {
		tags?: TagsMap;
	}

	/** The response to the request. */
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface StartPolicyGenerationResponse {

		/** Required */
		jobId: string;
	}
	export interface StartPolicyGenerationResponseFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateStartPolicyGenerationResponseFormGroup() {
		return new FormGroup<StartPolicyGenerationResponseFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains details about the CloudTrail trail being analyzed to generate a policy. */
	export interface Trail {

		/** Required */
		cloudTrailArn: string;
		regions?: Array<string>;
		allRegions?: boolean | null;
	}

	/** Contains details about the CloudTrail trail being analyzed to generate a policy. */
	export interface TrailFormProperties {

		/** Required */
		cloudTrailArn: FormControl<string | null | undefined>,
		allRegions: FormControl<boolean | null | undefined>,
	}
	export function CreateTrailFormGroup() {
		return new FormGroup<TrailFormProperties>({
			cloudTrailArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			allRegions: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The response to the request. */
	export interface TagResourceResponse {
	}

	/** The response to the request. */
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}


	/** The response to the request. */
	export interface UntagResourceResponse {
	}

	/** The response to the request. */
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface ValidatePolicyResponse {

		/** Required */
		findings: Array<ValidatePolicyFinding>;
		nextToken?: string;
	}
	export interface ValidatePolicyResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateValidatePolicyResponseFormGroup() {
		return new FormGroup<ValidatePolicyResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A finding in a policy. Each finding is an actionable recommendation that can be used to improve the policy. */
	export interface ValidatePolicyFinding {

		/** Required */
		findingDetails: string;

		/** Required */
		findingType: ValidatePolicyFindingType;

		/** Required */
		issueCode: string;

		/** Required */
		learnMoreLink: string;

		/** Required */
		locations: Array<Location>;
	}

	/** A finding in a policy. Each finding is an actionable recommendation that can be used to improve the policy. */
	export interface ValidatePolicyFindingFormProperties {

		/** Required */
		findingDetails: FormControl<string | null | undefined>,

		/** Required */
		findingType: FormControl<ValidatePolicyFindingType | null | undefined>,

		/** Required */
		issueCode: FormControl<string | null | undefined>,

		/** Required */
		learnMoreLink: FormControl<string | null | undefined>,
	}
	export function CreateValidatePolicyFindingFormGroup() {
		return new FormGroup<ValidatePolicyFindingFormProperties>({
			findingDetails: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			findingType: new FormControl<ValidatePolicyFindingType | null | undefined>(undefined, [Validators.required]),
			issueCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			learnMoreLink: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ValidatePolicyFindingType { ERROR = 'ERROR', SECURITY_WARNING = 'SECURITY_WARNING', SUGGESTION = 'SUGGESTION', WARNING = 'WARNING' }


	/** A location in a policy that is represented as a path through the JSON representation and a corresponding span. */
	export interface Location {

		/** Required */
		path: Array<PathElement>;

		/** Required */
		span: Span;
	}

	/** A location in a policy that is represented as a path through the JSON representation and a corresponding span. */
	export interface LocationFormProperties {
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
		});

	}


	/** A single element in a path through the JSON representation of a policy. */
	export interface PathElement {
		index?: number | null;
		key?: string;
		substring?: Substring;
		value?: string;
	}

	/** A single element in a path through the JSON representation of a policy. */
	export interface PathElementFormProperties {
		index: FormControl<number | null | undefined>,
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreatePathElementFormGroup() {
		return new FormGroup<PathElementFormProperties>({
			index: new FormControl<number | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A reference to a substring of a literal string in a JSON document. */
	export interface Substring {

		/** Required */
		start: number;

		/** Required */
		length: number;
	}

	/** A reference to a substring of a literal string in a JSON document. */
	export interface SubstringFormProperties {

		/** Required */
		start: FormControl<number | null | undefined>,

		/** Required */
		length: FormControl<number | null | undefined>,
	}
	export function CreateSubstringFormGroup() {
		return new FormGroup<SubstringFormProperties>({
			start: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A span in a policy. The span consists of a start position (inclusive) and end position (exclusive). */
	export interface Span {

		/** Required */
		start: Position;

		/** Required */
		end: Position;
	}

	/** A span in a policy. The span consists of a start position (inclusive) and end position (exclusive). */
	export interface SpanFormProperties {
	}
	export function CreateSpanFormGroup() {
		return new FormGroup<SpanFormProperties>({
		});

	}


	/** A position in a policy. */
	export interface Position {

		/** Required */
		line: number;

		/** Required */
		column: number;

		/** Required */
		offset: number;
	}

	/** A position in a policy. */
	export interface PositionFormProperties {

		/** Required */
		line: FormControl<number | null | undefined>,

		/** Required */
		column: FormControl<number | null | undefined>,

		/** Required */
		offset: FormControl<number | null | undefined>,
	}
	export function CreatePositionFormGroup() {
		return new FormGroup<PositionFormProperties>({
			line: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			column: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Retroactively applies an archive rule. */
	export interface ApplyArchiveRuleRequest {

		/** Required */
		analyzerArn: string;

		/** Required */
		ruleName: string;
		clientToken?: string;
	}

	/** Retroactively applies an archive rule. */
	export interface ApplyArchiveRuleRequestFormProperties {

		/** Required */
		analyzerArn: FormControl<string | null | undefined>,

		/** Required */
		ruleName: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateApplyArchiveRuleRequestFormGroup() {
		return new FormGroup<ApplyArchiveRuleRequestFormProperties>({
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CancelPolicyGenerationRequest {
	}
	export interface CancelPolicyGenerationRequestFormProperties {
	}
	export function CreateCancelPolicyGenerationRequestFormGroup() {
		return new FormGroup<CancelPolicyGenerationRequestFormProperties>({
		});

	}


	/** Contains information about CloudTrail access. */
	export interface CloudTrailDetails {

		/** Required */
		trails: Array<Trail>;

		/** Required */
		accessRole: string;

		/** Required */
		startTime: Date;
		endTime?: Date;
	}

	/** Contains information about CloudTrail access. */
	export interface CloudTrailDetailsFormProperties {

		/** Required */
		accessRole: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
	}
	export function CreateCloudTrailDetailsFormGroup() {
		return new FormGroup<CloudTrailDetailsFormProperties>({
			accessRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains details about the CloudTrail trail being analyzed to generate a policy. */
	export interface TrailProperties {

		/** Required */
		cloudTrailArn: string;
		regions?: Array<string>;
		allRegions?: boolean | null;
	}

	/** Contains details about the CloudTrail trail being analyzed to generate a policy. */
	export interface TrailPropertiesFormProperties {

		/** Required */
		cloudTrailArn: FormControl<string | null | undefined>,
		allRegions: FormControl<boolean | null | undefined>,
	}
	export function CreateTrailPropertiesFormGroup() {
		return new FormGroup<TrailPropertiesFormProperties>({
			cloudTrailArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			allRegions: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about CloudTrail access. */
	export interface CloudTrailProperties {

		/** Required */
		trailProperties: Array<TrailProperties>;

		/** Required */
		startTime: Date;

		/** Required */
		endTime: Date;
	}

	/** Contains information about CloudTrail access. */
	export interface CloudTrailPropertiesFormProperties {

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		endTime: FormControl<Date | null | undefined>,
	}
	export function CreateCloudTrailPropertiesFormGroup() {
		return new FormGroup<CloudTrailPropertiesFormProperties>({
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAccessPreviewRequest {

		/** Required */
		analyzerArn: string;

		/** Required */
		configurations: ConfigurationsMap;
		clientToken?: string;
	}
	export interface CreateAccessPreviewRequestFormProperties {

		/** Required */
		analyzerArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessPreviewRequestFormGroup() {
		return new FormGroup<CreateAccessPreviewRequestFormProperties>({
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates an analyzer. */
	export interface CreateAnalyzerRequest {

		/** Required */
		analyzerName: string;

		/** Required */
		type: Type;
		archiveRules?: Array<InlineArchiveRule>;
		tags?: TagsMap;
		clientToken?: string;
	}

	/** Creates an analyzer. */
	export interface CreateAnalyzerRequestFormProperties {

		/** Required */
		analyzerName: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<Type | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAnalyzerRequestFormGroup() {
		return new FormGroup<CreateAnalyzerRequestFormProperties>({
			analyzerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Type | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates an archive rule. */
	export interface CreateArchiveRuleRequest {

		/** Required */
		ruleName: string;

		/** Required */
		filter: FilterCriteriaMap;
		clientToken?: string;
	}

	/** Creates an archive rule. */
	export interface CreateArchiveRuleRequestFormProperties {

		/** Required */
		ruleName: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateArchiveRuleRequestFormGroup() {
		return new FormGroup<CreateArchiveRuleRequestFormProperties>({
			ruleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deletes an analyzer. */
	export interface DeleteAnalyzerRequest {
	}

	/** Deletes an analyzer. */
	export interface DeleteAnalyzerRequestFormProperties {
	}
	export function CreateDeleteAnalyzerRequestFormGroup() {
		return new FormGroup<DeleteAnalyzerRequestFormProperties>({
		});

	}


	/** Deletes an archive rule. */
	export interface DeleteArchiveRuleRequest {
	}

	/** Deletes an archive rule. */
	export interface DeleteArchiveRuleRequestFormProperties {
	}
	export function CreateDeleteArchiveRuleRequestFormGroup() {
		return new FormGroup<DeleteArchiveRuleRequestFormProperties>({
		});

	}

	export enum FindingStatusUpdate { ACTIVE = 'ACTIVE', ARCHIVED = 'ARCHIVED' }


	/** Contains the generated policy details. */
	export interface GeneratedPolicyProperties {
		isComplete?: boolean | null;

		/** Required */
		principalArn: string;
		cloudTrailProperties?: CloudTrailProperties;
	}

	/** Contains the generated policy details. */
	export interface GeneratedPolicyPropertiesFormProperties {
		isComplete: FormControl<boolean | null | undefined>,

		/** Required */
		principalArn: FormControl<string | null | undefined>,
	}
	export function CreateGeneratedPolicyPropertiesFormGroup() {
		return new FormGroup<GeneratedPolicyPropertiesFormProperties>({
			isComplete: new FormControl<boolean | null | undefined>(undefined),
			principalArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAccessPreviewRequest {
	}
	export interface GetAccessPreviewRequestFormProperties {
	}
	export function CreateGetAccessPreviewRequestFormGroup() {
		return new FormGroup<GetAccessPreviewRequestFormProperties>({
		});

	}


	/** Retrieves an analyzed resource. */
	export interface GetAnalyzedResourceRequest {
	}

	/** Retrieves an analyzed resource. */
	export interface GetAnalyzedResourceRequestFormProperties {
	}
	export function CreateGetAnalyzedResourceRequestFormGroup() {
		return new FormGroup<GetAnalyzedResourceRequestFormProperties>({
		});

	}


	/** Retrieves an analyzer. */
	export interface GetAnalyzerRequest {
	}

	/** Retrieves an analyzer. */
	export interface GetAnalyzerRequestFormProperties {
	}
	export function CreateGetAnalyzerRequestFormGroup() {
		return new FormGroup<GetAnalyzerRequestFormProperties>({
		});

	}


	/** Retrieves an archive rule. */
	export interface GetArchiveRuleRequest {
	}

	/** Retrieves an archive rule. */
	export interface GetArchiveRuleRequestFormProperties {
	}
	export function CreateGetArchiveRuleRequestFormGroup() {
		return new FormGroup<GetArchiveRuleRequestFormProperties>({
		});

	}


	/** Retrieves a finding. */
	export interface GetFindingRequest {
	}

	/** Retrieves a finding. */
	export interface GetFindingRequestFormProperties {
	}
	export function CreateGetFindingRequestFormGroup() {
		return new FormGroup<GetFindingRequestFormProperties>({
		});

	}

	export interface GetGeneratedPolicyRequest {
	}
	export interface GetGeneratedPolicyRequestFormProperties {
	}
	export function CreateGetGeneratedPolicyRequestFormGroup() {
		return new FormGroup<GetGeneratedPolicyRequestFormProperties>({
		});

	}


	/** This configuration sets the network origin for the Amazon S3 access point or multi-region access point to <code>Internet</code>. */
	export interface InternetConfiguration {
	}

	/** This configuration sets the network origin for the Amazon S3 access point or multi-region access point to <code>Internet</code>. */
	export interface InternetConfigurationFormProperties {
	}
	export function CreateInternetConfigurationFormGroup() {
		return new FormGroup<InternetConfigurationFormProperties>({
		});

	}

	export interface ListAccessPreviewFindingsRequest {

		/** Required */
		analyzerArn: string;
		filter?: FilterCriteriaMap;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListAccessPreviewFindingsRequestFormProperties {

		/** Required */
		analyzerArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAccessPreviewFindingsRequestFormGroup() {
		return new FormGroup<ListAccessPreviewFindingsRequestFormProperties>({
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListAccessPreviewsRequest {
	}
	export interface ListAccessPreviewsRequestFormProperties {
	}
	export function CreateListAccessPreviewsRequestFormGroup() {
		return new FormGroup<ListAccessPreviewsRequestFormProperties>({
		});

	}


	/** Retrieves a list of resources that have been analyzed. */
	export interface ListAnalyzedResourcesRequest {

		/** Required */
		analyzerArn: string;
		resourceType?: ResourceType;
		nextToken?: string;
		maxResults?: number | null;
	}

	/** Retrieves a list of resources that have been analyzed. */
	export interface ListAnalyzedResourcesRequestFormProperties {

		/** Required */
		analyzerArn: FormControl<string | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAnalyzedResourcesRequestFormGroup() {
		return new FormGroup<ListAnalyzedResourcesRequestFormProperties>({
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Retrieves a list of analyzers. */
	export interface ListAnalyzersRequest {
	}

	/** Retrieves a list of analyzers. */
	export interface ListAnalyzersRequestFormProperties {
	}
	export function CreateListAnalyzersRequestFormGroup() {
		return new FormGroup<ListAnalyzersRequestFormProperties>({
		});

	}


	/** Retrieves a list of archive rules created for the specified analyzer. */
	export interface ListArchiveRulesRequest {
	}

	/** Retrieves a list of archive rules created for the specified analyzer. */
	export interface ListArchiveRulesRequestFormProperties {
	}
	export function CreateListArchiveRulesRequestFormGroup() {
		return new FormGroup<ListArchiveRulesRequestFormProperties>({
		});

	}


	/** The criteria used to sort. */
	export interface SortCriteria {
		attributeName?: string;
		orderBy?: OrderBy;
	}

	/** The criteria used to sort. */
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


	/** Retrieves a list of findings generated by the specified analyzer. */
	export interface ListFindingsRequest {

		/** Required */
		analyzerArn: string;
		filter?: FilterCriteriaMap;
		sort?: SortCriteria;
		nextToken?: string;
		maxResults?: number | null;
	}

	/** Retrieves a list of findings generated by the specified analyzer. */
	export interface ListFindingsRequestFormProperties {

		/** Required */
		analyzerArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFindingsRequestFormGroup() {
		return new FormGroup<ListFindingsRequestFormProperties>({
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListPolicyGenerationsRequest {
	}
	export interface ListPolicyGenerationsRequestFormProperties {
	}
	export function CreateListPolicyGenerationsRequestFormGroup() {
		return new FormGroup<ListPolicyGenerationsRequestFormProperties>({
		});

	}


	/** Retrieves a list of tags applied to the specified resource. */
	export interface ListTagsForResourceRequest {
	}

	/** Retrieves a list of tags applied to the specified resource. */
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export enum Locale { DE = 'DE', EN = 'EN', ES = 'ES', FR = 'FR', IT = 'IT', JA = 'JA', KO = 'KO', PT_BR = 'PT_BR', ZH_CN = 'ZH_CN', ZH_TW = 'ZH_TW' }


	/** The proposed virtual private cloud (VPC) configuration for the Amazon S3 access point. VPC configuration does not apply to multi-region access points. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_VpcConfiguration.html">VpcConfiguration</a>.  */
	export interface VpcConfiguration {

		/** Required */
		vpcId: string;
	}

	/** The proposed virtual private cloud (VPC) configuration for the Amazon S3 access point. VPC configuration does not apply to multi-region access points. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_VpcConfiguration.html">VpcConfiguration</a>.  */
	export interface VpcConfigurationFormProperties {

		/** Required */
		vpcId: FormControl<string | null | undefined>,
	}
	export function CreateVpcConfigurationFormGroup() {
		return new FormGroup<VpcConfigurationFormProperties>({
			vpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The proposed <code>InternetConfiguration</code> or <code>VpcConfiguration</code> to apply to the Amazon S3 access point. <code>VpcConfiguration</code> does not apply to multi-region access points. You can make the access point accessible from the internet, or you can specify that all requests made through that access point must originate from a specific virtual private cloud (VPC). You can specify only one type of network configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html">Creating access points</a>. */
	export interface NetworkOriginConfiguration {

		/** The proposed virtual private cloud (VPC) configuration for the Amazon S3 access point. VPC configuration does not apply to multi-region access points. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_VpcConfiguration.html">VpcConfiguration</a>. */
		vpcConfiguration?: VpcConfiguration;
		internetConfiguration?: InternetConfiguration;
	}

	/** The proposed <code>InternetConfiguration</code> or <code>VpcConfiguration</code> to apply to the Amazon S3 access point. <code>VpcConfiguration</code> does not apply to multi-region access points. You can make the access point accessible from the internet, or you can specify that all requests made through that access point must originate from a specific virtual private cloud (VPC). You can specify only one type of network configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html">Creating access points</a>. */
	export interface NetworkOriginConfigurationFormProperties {
	}
	export function CreateNetworkOriginConfigurationFormGroup() {
		return new FormGroup<NetworkOriginConfigurationFormProperties>({
		});

	}


	/** Contains the ARN details about the IAM entity for which the policy is generated. */
	export interface PolicyGenerationDetails {

		/** Required */
		principalArn: string;
	}

	/** Contains the ARN details about the IAM entity for which the policy is generated. */
	export interface PolicyGenerationDetailsFormProperties {

		/** Required */
		principalArn: FormControl<string | null | undefined>,
	}
	export function CreatePolicyGenerationDetailsFormGroup() {
		return new FormGroup<PolicyGenerationDetailsFormProperties>({
			principalArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PolicyType { IDENTITY_POLICY = 'IDENTITY_POLICY', RESOURCE_POLICY = 'RESOURCE_POLICY', SERVICE_CONTROL_POLICY = 'SERVICE_CONTROL_POLICY' }


	/** The values for a manual Amazon RDS DB cluster snapshot attribute. */
	export interface RdsDbClusterSnapshotAttributeValue {
		accountIds?: Array<string>;
	}

	/** The values for a manual Amazon RDS DB cluster snapshot attribute. */
	export interface RdsDbClusterSnapshotAttributeValueFormProperties {
	}
	export function CreateRdsDbClusterSnapshotAttributeValueFormGroup() {
		return new FormGroup<RdsDbClusterSnapshotAttributeValueFormProperties>({
		});

	}


	/** The name and values of a manual Amazon RDS DB snapshot attribute. Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB snapshot. */
	export interface RdsDbSnapshotAttributeValue {
		accountIds?: Array<string>;
	}

	/** The name and values of a manual Amazon RDS DB snapshot attribute. Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB snapshot. */
	export interface RdsDbSnapshotAttributeValueFormProperties {
	}
	export function CreateRdsDbSnapshotAttributeValueFormGroup() {
		return new FormGroup<RdsDbSnapshotAttributeValueFormProperties>({
		});

	}


	/** The configuration for an Amazon S3 access point or multi-region access point for the bucket. You can propose up to 10 access points or multi-region access points per bucket. If the proposed Amazon S3 access point configuration is for an existing bucket, the access preview uses the proposed access point configuration in place of the existing access points. To propose an access point without a policy, you can provide an empty string as the access point policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html">Creating access points</a>. For more information about access point policy limits, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points-restrictions-limitations.html">Access points restrictions and limitations</a>. */
	export interface S3AccessPointConfiguration {
		accessPointPolicy?: string;
		publicAccessBlock?: S3PublicAccessBlockConfiguration;
		networkOrigin?: NetworkOriginConfiguration;
	}

	/** The configuration for an Amazon S3 access point or multi-region access point for the bucket. You can propose up to 10 access points or multi-region access points per bucket. If the proposed Amazon S3 access point configuration is for an existing bucket, the access preview uses the proposed access point configuration in place of the existing access points. To propose an access point without a policy, you can provide an empty string as the access point policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html">Creating access points</a>. For more information about access point policy limits, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points-restrictions-limitations.html">Access points restrictions and limitations</a>. */
	export interface S3AccessPointConfigurationFormProperties {
		accessPointPolicy: FormControl<string | null | undefined>,
	}
	export function CreateS3AccessPointConfigurationFormGroup() {
		return new FormGroup<S3AccessPointConfigurationFormProperties>({
			accessPointPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartPolicyGenerationRequest {

		/** Required */
		policyGenerationDetails: PolicyGenerationDetails;
		cloudTrailDetails?: CloudTrailDetails;
		clientToken?: string;
	}
	export interface StartPolicyGenerationRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartPolicyGenerationRequestFormGroup() {
		return new FormGroup<StartPolicyGenerationRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Starts a scan of the policies applied to the specified resource. */
	export interface StartResourceScanRequest {

		/** Required */
		analyzerArn: string;

		/** Required */
		resourceArn: string;
		resourceOwnerAccount?: string;
	}

	/** Starts a scan of the policies applied to the specified resource. */
	export interface StartResourceScanRequestFormProperties {

		/** Required */
		analyzerArn: FormControl<string | null | undefined>,

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
		resourceOwnerAccount: FormControl<string | null | undefined>,
	}
	export function CreateStartResourceScanRequestFormGroup() {
		return new FormGroup<StartResourceScanRequestFormProperties>({
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceOwnerAccount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Adds a tag to the specified resource. */
	export interface TagResourceRequest {

		/** Required */
		tags: TagsMap;
	}

	/** Adds a tag to the specified resource. */
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}


	/** Removes a tag from the specified resource. */
	export interface UntagResourceRequest {
	}

	/** Removes a tag from the specified resource. */
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}


	/** Updates the specified archive rule. */
	export interface UpdateArchiveRuleRequest {

		/** Required */
		filter: FilterCriteriaMap;
		clientToken?: string;
	}

	/** Updates the specified archive rule. */
	export interface UpdateArchiveRuleRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateArchiveRuleRequestFormGroup() {
		return new FormGroup<UpdateArchiveRuleRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates findings with the new values provided in the request. */
	export interface UpdateFindingsRequest {

		/** Required */
		analyzerArn: string;

		/** Required */
		status: FindingStatusUpdate;
		ids?: Array<string>;
		resourceArn?: string;
		clientToken?: string;
	}

	/** Updates findings with the new values provided in the request. */
	export interface UpdateFindingsRequestFormProperties {

		/** Required */
		analyzerArn: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<FindingStatusUpdate | null | undefined>,
		resourceArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFindingsRequestFormGroup() {
		return new FormGroup<UpdateFindingsRequestFormProperties>({
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<FindingStatusUpdate | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ValidatePolicyResourceType { 'AWS::S3::Bucket' = 'AWS::S3::Bucket', 'AWS::S3::AccessPoint' = 'AWS::S3::AccessPoint', 'AWS::S3::MultiRegionAccessPoint' = 'AWS::S3::MultiRegionAccessPoint', 'AWS::S3ObjectLambda::AccessPoint' = 'AWS::S3ObjectLambda::AccessPoint', 'AWS::IAM::AssumeRolePolicyDocument' = 'AWS::IAM::AssumeRolePolicyDocument' }

	export interface ValidatePolicyRequest {
		locale?: Locale;

		/** Required */
		policyDocument: string;

		/** Required */
		policyType: PolicyType;
		validatePolicyResourceType?: ValidatePolicyResourceType;
	}
	export interface ValidatePolicyRequestFormProperties {
		locale: FormControl<Locale | null | undefined>,

		/** Required */
		policyDocument: FormControl<string | null | undefined>,

		/** Required */
		policyType: FormControl<PolicyType | null | undefined>,
		validatePolicyResourceType: FormControl<ValidatePolicyResourceType | null | undefined>,
	}
	export function CreateValidatePolicyRequestFormGroup() {
		return new FormGroup<ValidatePolicyRequestFormProperties>({
			locale: new FormControl<Locale | null | undefined>(undefined),
			policyDocument: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyType: new FormControl<PolicyType | null | undefined>(undefined, [Validators.required]),
			validatePolicyResourceType: new FormControl<ValidatePolicyResourceType | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retroactively applies the archive rule to existing findings that meet the archive rule criteria.
		 * Put archive-rule
		 * @return {void} Success
		 */
		ApplyArchiveRule(requestBody: ApplyArchiveRulePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'archive-rule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels the requested policy generation.
		 * Put policy/generation/{jobId}
		 * @param {string} jobId The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code> operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel the policy generation request.
		 * @return {CancelPolicyGenerationResponse} Success
		 */
		CancelPolicyGeneration(jobId: string): Observable<CancelPolicyGenerationResponse> {
			return this.http.put<CancelPolicyGenerationResponse>(this.baseUri + 'policy/generation/' + (jobId == null ? '' : encodeURIComponent(jobId)), null, {});
		}

		/**
		 * Retrieves the policy that was generated using <code>StartPolicyGeneration</code>.
		 * Get policy/generation/{jobId}
		 * @param {string} jobId The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code> operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel the policy generation request.
		 * @param {boolean} includeResourcePlaceholders <p>The level of detail that you want to generate. You can specify whether to generate policies with placeholders for resource ARNs for actions that support resource level granularity in policies.</p> <p>For example, in the resource section of a policy, you can receive a placeholder such as <code>"Resource":"arn:aws:s3:::${BucketName}"</code> instead of <code>"*"</code>.</p>
		 * @param {boolean} includeServiceLevelTemplate <p>The level of detail that you want to generate. You can specify whether to generate service-level policies. </p> <p>IAM Access Analyzer uses <code>iam:servicelastaccessed</code> to identify services that have been used recently to create this service-level template.</p>
		 * @return {GetGeneratedPolicyResponse} Success
		 */
		GetGeneratedPolicy(jobId: string, includeResourcePlaceholders: boolean | null | undefined, includeServiceLevelTemplate: boolean | null | undefined): Observable<GetGeneratedPolicyResponse> {
			return this.http.get<GetGeneratedPolicyResponse>(this.baseUri + 'policy/generation/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&includeResourcePlaceholders=' + includeResourcePlaceholders + '&includeServiceLevelTemplate=' + includeServiceLevelTemplate, {});
		}

		/**
		 * Creates an access preview that allows you to preview IAM Access Analyzer findings for your resource before deploying resource permissions.
		 * Put access-preview
		 * @return {CreateAccessPreviewResponse} Success
		 */
		CreateAccessPreview(requestBody: CreateAccessPreviewPutBody): Observable<CreateAccessPreviewResponse> {
			return this.http.put<CreateAccessPreviewResponse>(this.baseUri + 'access-preview', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an analyzer for your account.
		 * Put analyzer
		 * @return {CreateAnalyzerResponse} Success
		 */
		CreateAnalyzer(requestBody: CreateAnalyzerPutBody): Observable<CreateAnalyzerResponse> {
			return this.http.put<CreateAnalyzerResponse>(this.baseUri + 'analyzer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of analyzers.
		 * Get analyzer
		 * @param {string} nextToken A token used for pagination of results returned.
		 * @param {number} maxResults The maximum number of results to return in the response.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Type} type The type of analyzer.
		 * @return {ListAnalyzersResponse} Success
		 */
		ListAnalyzers(nextToken: string | null | undefined, maxResults: number | null | undefined, type: Type | null | undefined): Observable<ListAnalyzersResponse> {
			return this.http.get<ListAnalyzersResponse>(this.baseUri + 'analyzer?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&type=' + type, {});
		}

		/**
		 * <p>Creates an archive rule for the specified analyzer. Archive rules automatically archive new findings that meet the criteria you define when you create the rule.</p> <p>To learn about filter keys that you can use to create an archive rule, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a> in the <b>IAM User Guide</b>.</p>
		 * Put analyzer/{analyzerName}/archive-rule
		 * @param {string} analyzerName The name of the created analyzer.
		 *     Min length: 1    Max length: 255
		 * @return {void} Success
		 */
		CreateArchiveRule(analyzerName: string, requestBody: CreateArchiveRulePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '/archive-rule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of archive rules created for the specified analyzer.
		 * Get analyzer/{analyzerName}/archive-rule
		 * @param {string} analyzerName The name of the analyzer to retrieve rules from.
		 *     Min length: 1    Max length: 255
		 * @param {string} nextToken A token used for pagination of results returned.
		 * @param {number} maxResults The maximum number of results to return in the request.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListArchiveRulesResponse} Success
		 */
		ListArchiveRules(analyzerName: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListArchiveRulesResponse> {
			return this.http.get<ListArchiveRulesResponse>(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '/archive-rule&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Deletes the specified analyzer. When you delete an analyzer, IAM Access Analyzer is disabled for the account or organization in the current or specific Region. All findings that were generated by the analyzer are deleted. You cannot undo this action.
		 * Delete analyzer/{analyzerName}
		 * @param {string} analyzerName The name of the analyzer to delete.
		 *     Min length: 1    Max length: 255
		 * @param {string} clientToken A client token.
		 * @return {void} Success
		 */
		DeleteAnalyzer(analyzerName: string, clientToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the specified analyzer.
		 * Get analyzer/{analyzerName}
		 * @param {string} analyzerName The name of the analyzer retrieved.
		 *     Min length: 1    Max length: 255
		 * @return {GetAnalyzerResponse} Success
		 */
		GetAnalyzer(analyzerName: string): Observable<GetAnalyzerResponse> {
			return this.http.get<GetAnalyzerResponse>(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)), {});
		}

		/**
		 * Deletes the specified archive rule.
		 * Delete analyzer/{analyzerName}/archive-rule/{ruleName}
		 * @param {string} analyzerName The name of the analyzer that associated with the archive rule to delete.
		 *     Min length: 1    Max length: 255
		 * @param {string} ruleName The name of the rule to delete.
		 *     Min length: 1    Max length: 255
		 * @param {string} clientToken A client token.
		 * @return {void} Success
		 */
		DeleteArchiveRule(analyzerName: string, ruleName: string, clientToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '/archive-rule/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves information about an archive rule.</p> <p>To learn about filter keys that you can use to create an archive rule, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a> in the <b>IAM User Guide</b>.</p>
		 * Get analyzer/{analyzerName}/archive-rule/{ruleName}
		 * @param {string} analyzerName The name of the analyzer to retrieve rules from.
		 *     Min length: 1    Max length: 255
		 * @param {string} ruleName The name of the rule to retrieve.
		 *     Min length: 1    Max length: 255
		 * @return {GetArchiveRuleResponse} Success
		 */
		GetArchiveRule(analyzerName: string, ruleName: string): Observable<GetArchiveRuleResponse> {
			return this.http.get<GetArchiveRuleResponse>(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '/archive-rule/' + (ruleName == null ? '' : encodeURIComponent(ruleName)), {});
		}

		/**
		 * Updates the criteria and values for the specified archive rule.
		 * Put analyzer/{analyzerName}/archive-rule/{ruleName}
		 * @param {string} analyzerName The name of the analyzer to update the archive rules for.
		 *     Min length: 1    Max length: 255
		 * @param {string} ruleName The name of the rule to update.
		 *     Min length: 1    Max length: 255
		 * @return {void} Success
		 */
		UpdateArchiveRule(analyzerName: string, ruleName: string, requestBody: UpdateArchiveRulePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '/archive-rule/' + (ruleName == null ? '' : encodeURIComponent(ruleName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about an access preview for the specified analyzer.
		 * Get access-preview/{accessPreviewId}#analyzerArn
		 * @param {string} accessPreviewId The unique ID for the access preview.
		 * @param {string} analyzerArn The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> used to generate the access preview.
		 * @return {GetAccessPreviewResponse} Success
		 */
		GetAccessPreview(accessPreviewId: string, analyzerArn: string): Observable<GetAccessPreviewResponse> {
			return this.http.get<GetAccessPreviewResponse>(this.baseUri + 'access-preview/' + (accessPreviewId == null ? '' : encodeURIComponent(accessPreviewId)) + '#analyzerArn&analyzerArn=' + (analyzerArn == null ? '' : encodeURIComponent(analyzerArn)), {});
		}

		/**
		 * Retrieves information about a resource that was analyzed.
		 * Get analyzed-resource#analyzerArn&resourceArn
		 * @param {string} analyzerArn The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to retrieve information from.
		 * @param {string} resourceArn The ARN of the resource to retrieve information about.
		 * @return {GetAnalyzedResourceResponse} Success
		 */
		GetAnalyzedResource(analyzerArn: string, resourceArn: string): Observable<GetAnalyzedResourceResponse> {
			return this.http.get<GetAnalyzedResourceResponse>(this.baseUri + 'analyzed-resource#analyzerArn&resourceArn?analyzerArn=' + (analyzerArn == null ? '' : encodeURIComponent(analyzerArn)) + '&resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Retrieves information about the specified finding.
		 * Get finding/{id}#analyzerArn
		 * @param {string} analyzerArn The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> that generated the finding.
		 * @param {string} id The ID of the finding to retrieve.
		 * @return {GetFindingResponse} Success
		 */
		GetFinding(analyzerArn: string, id: string): Observable<GetFindingResponse> {
			return this.http.get<GetFindingResponse>(this.baseUri + 'finding/' + (id == null ? '' : encodeURIComponent(id)) + '#analyzerArn?analyzerArn=' + (analyzerArn == null ? '' : encodeURIComponent(analyzerArn)), {});
		}

		/**
		 * Retrieves a list of access preview findings generated by the specified access preview.
		 * Post access-preview/{accessPreviewId}
		 * @param {string} accessPreviewId The unique ID for the access preview.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAccessPreviewFindingsResponse} Success
		 */
		ListAccessPreviewFindings(accessPreviewId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAccessPreviewFindingsPostBody): Observable<ListAccessPreviewFindingsResponse> {
			return this.http.post<ListAccessPreviewFindingsResponse>(this.baseUri + 'access-preview/' + (accessPreviewId == null ? '' : encodeURIComponent(accessPreviewId)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of access previews for the specified analyzer.
		 * Get access-preview#analyzerArn
		 * @param {string} analyzerArn The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> used to generate the access preview.
		 * @param {string} nextToken A token used for pagination of results returned.
		 * @param {number} maxResults The maximum number of results to return in the response.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListAccessPreviewsResponse} Success
		 */
		ListAccessPreviews(analyzerArn: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAccessPreviewsResponse> {
			return this.http.get<ListAccessPreviewsResponse>(this.baseUri + 'access-preview#analyzerArn?analyzerArn=' + (analyzerArn == null ? '' : encodeURIComponent(analyzerArn)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Retrieves a list of resources of the specified type that have been analyzed by the specified analyzer..
		 * Post analyzed-resource
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAnalyzedResourcesResponse} Success
		 */
		ListAnalyzedResources(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAnalyzedResourcesPostBody): Observable<ListAnalyzedResourcesResponse> {
			return this.http.post<ListAnalyzedResourcesResponse>(this.baseUri + 'analyzed-resource?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a list of findings generated by the specified analyzer.</p> <p>To learn about filter keys that you can use to retrieve a list of findings, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a> in the <b>IAM User Guide</b>.</p>
		 * Post finding
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListFindingsResponse} Success
		 */
		ListFindings(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListFindingsPostBody): Observable<ListFindingsResponse> {
			return this.http.post<ListFindingsResponse>(this.baseUri + 'finding?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the status for the specified findings.
		 * Put finding
		 * @return {void} Success
		 */
		UpdateFindings(requestBody: UpdateFindingsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'finding', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all of the policy generations requested in the last seven days.
		 * Get policy/generation
		 * @param {string} principalArn The ARN of the IAM entity (user or role) for which you are generating a policy. Use this with <code>ListGeneratedPolicies</code> to filter the results to only include results for a specific principal.
		 * @param {number} maxResults The maximum number of results to return in the response.
		 *     Minimum: 1
		 * @param {string} nextToken A token used for pagination of results returned.
		 * @return {ListPolicyGenerationsResponse} Success
		 */
		ListPolicyGenerations(principalArn: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListPolicyGenerationsResponse> {
			return this.http.get<ListPolicyGenerationsResponse>(this.baseUri + 'policy/generation?principalArn=' + (principalArn == null ? '' : encodeURIComponent(principalArn)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Starts the policy generation request.
		 * Put policy/generation
		 * @return {StartPolicyGenerationResponse} Success
		 */
		StartPolicyGeneration(requestBody: StartPolicyGenerationPutBody): Observable<StartPolicyGenerationResponse> {
			return this.http.put<StartPolicyGenerationResponse>(this.baseUri + 'policy/generation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of tags applied to the specified resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource to retrieve tags from.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds a tag to the specified resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource to add the tag to.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Immediately starts a scan of the policies applied to the specified resource.
		 * Post resource/scan
		 * @return {void} Success
		 */
		StartResourceScan(requestBody: StartResourceScanPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'resource/scan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a tag from the specified resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The ARN of the resource to remove the tag from.
		 * @param {Array<string>} tagKeys The key for the tag to add.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Requests the validation of a policy and returns a list of findings. The findings help you identify issues and provide actionable recommendations to resolve the issue and enable you to author functional policies that meet security best practices.
		 * Post policy/validation
		 * @param {number} maxResults The maximum number of results to return in the response.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} nextToken A token used for pagination of results returned.
		 * @return {ValidatePolicyResponse} Success
		 */
		ValidatePolicy(maxResults: number | null | undefined, nextToken: string | null | undefined, requestBody: ValidatePolicyPostBody): Observable<ValidatePolicyResponse> {
			return this.http.post<ValidatePolicyResponse>(this.baseUri + 'policy/validation?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface ApplyArchiveRulePutBody {

		/**
		 * The Amazon resource name (ARN) of the analyzer.
		 * Required
		 */
		analyzerArn: string;

		/**
		 * The name of the rule to apply.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		ruleName: string;

		/** A client token. */
		clientToken?: string | null;
	}
	export interface ApplyArchiveRulePutBodyFormProperties {

		/**
		 * The Amazon resource name (ARN) of the analyzer.
		 * Required
		 */
		analyzerArn: FormControl<string | null | undefined>,

		/**
		 * The name of the rule to apply.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		ruleName: FormControl<string | null | undefined>,

		/** A client token. */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateApplyArchiveRulePutBodyFormGroup() {
		return new FormGroup<ApplyArchiveRulePutBodyFormProperties>({
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer/.{1,255}')]),
			ruleName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[A-Za-z][A-Za-z0-9_.-]*')]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAccessPreviewPutBody {

		/**
		 * The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the account analyzer</a> used to generate the access preview. You can only create an access preview for analyzers with an <code>Account</code> type and <code>Active</code> status.
		 * Required
		 */
		analyzerArn: string;

		/**
		 * Access control configuration for your resource that is used to generate the access preview. The access preview includes findings for external access allowed to the resource with the proposed access control configuration. The configuration must contain exactly one element.
		 * Required
		 */
		configurations: {[id: string]: Configuration };

		/** A client token. */
		clientToken?: string | null;
	}
	export interface CreateAccessPreviewPutBodyFormProperties {

		/**
		 * The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the account analyzer</a> used to generate the access preview. You can only create an access preview for analyzers with an <code>Account</code> type and <code>Active</code> status.
		 * Required
		 */
		analyzerArn: FormControl<string | null | undefined>,

		/**
		 * Access control configuration for your resource that is used to generate the access preview. The access preview includes findings for external access allowed to the resource with the proposed access control configuration. The configuration must contain exactly one element.
		 * Required
		 */
		configurations: FormControl<{[id: string]: Configuration } | null | undefined>,

		/** A client token. */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessPreviewPutBodyFormGroup() {
		return new FormGroup<CreateAccessPreviewPutBodyFormProperties>({
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer/.{1,255}')]),
			configurations: new FormControl<{[id: string]: Configuration } | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAnalyzerPutBody {

		/**
		 * The name of the analyzer to create.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		analyzerName: string;

		/**
		 * The type of analyzer to create. Only ACCOUNT and ORGANIZATION analyzers are supported. You can create only one analyzer per account per Region. You can create up to 5 analyzers per organization per Region.
		 * Required
		 */
		type: Type;

		/** Specifies the archive rules to add for the analyzer. Archive rules automatically archive findings that meet the criteria you define for the rule. */
		archiveRules?: Array<InlineArchiveRule>;

		/** The tags to apply to the analyzer. */
		tags?: {[id: string]: string };

		/** A client token. */
		clientToken?: string | null;
	}
	export interface CreateAnalyzerPutBodyFormProperties {

		/**
		 * The name of the analyzer to create.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		analyzerName: FormControl<string | null | undefined>,

		/**
		 * The type of analyzer to create. Only ACCOUNT and ORGANIZATION analyzers are supported. You can create only one analyzer per account per Region. You can create up to 5 analyzers per organization per Region.
		 * Required
		 */
		type: FormControl<Type | null | undefined>,

		/** The tags to apply to the analyzer. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** A client token. */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAnalyzerPutBodyFormGroup() {
		return new FormGroup<CreateAnalyzerPutBodyFormProperties>({
			analyzerName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[A-Za-z][A-Za-z0-9_.-]*')]),
			type: new FormControl<Type | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateArchiveRulePutBody {

		/**
		 * The name of the rule to create.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		ruleName: string;

		/**
		 * The criteria for the rule.
		 * Required
		 */
		filter: {[id: string]: Criterion };

		/** A client token. */
		clientToken?: string | null;
	}
	export interface CreateArchiveRulePutBodyFormProperties {

		/**
		 * The name of the rule to create.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		ruleName: FormControl<string | null | undefined>,

		/**
		 * The criteria for the rule.
		 * Required
		 */
		filter: FormControl<{[id: string]: Criterion } | null | undefined>,

		/** A client token. */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateArchiveRulePutBodyFormGroup() {
		return new FormGroup<CreateArchiveRulePutBodyFormProperties>({
			ruleName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[A-Za-z][A-Za-z0-9_.-]*')]),
			filter: new FormControl<{[id: string]: Criterion } | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateArchiveRulePutBody {

		/**
		 * A filter to match for the rules to update. Only rules that match the filter are updated.
		 * Required
		 */
		filter: {[id: string]: Criterion };

		/** A client token. */
		clientToken?: string | null;
	}
	export interface UpdateArchiveRulePutBodyFormProperties {

		/**
		 * A filter to match for the rules to update. Only rules that match the filter are updated.
		 * Required
		 */
		filter: FormControl<{[id: string]: Criterion } | null | undefined>,

		/** A client token. */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateArchiveRulePutBodyFormGroup() {
		return new FormGroup<UpdateArchiveRulePutBodyFormProperties>({
			filter: new FormControl<{[id: string]: Criterion } | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAccessPreviewFindingsPostBody {

		/**
		 * The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> used to generate the access.
		 * Required
		 */
		analyzerArn: string;

		/** Criteria to filter the returned findings. */
		filter?: {[id: string]: Criterion };

		/** A token used for pagination of results returned. */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return in the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults?: number | null;
	}
	export interface ListAccessPreviewFindingsPostBodyFormProperties {

		/**
		 * The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> used to generate the access.
		 * Required
		 */
		analyzerArn: FormControl<string | null | undefined>,

		/** Criteria to filter the returned findings. */
		filter: FormControl<{[id: string]: Criterion } | null | undefined>,

		/** A token used for pagination of results returned. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return in the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAccessPreviewFindingsPostBodyFormGroup() {
		return new FormGroup<ListAccessPreviewFindingsPostBodyFormProperties>({
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer/.{1,255}')]),
			filter: new FormControl<{[id: string]: Criterion } | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListAnalyzedResourcesPostBody {

		/**
		 * The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to retrieve a list of analyzed resources from.
		 * Required
		 */
		analyzerArn: string;

		/** The type of resource. */
		resourceType?: ResourceType | null;

		/** A token used for pagination of results returned. */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return in the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults?: number | null;
	}
	export interface ListAnalyzedResourcesPostBodyFormProperties {

		/**
		 * The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to retrieve a list of analyzed resources from.
		 * Required
		 */
		analyzerArn: FormControl<string | null | undefined>,

		/** The type of resource. */
		resourceType: FormControl<ResourceType | null | undefined>,

		/** A token used for pagination of results returned. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return in the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAnalyzedResourcesPostBodyFormGroup() {
		return new FormGroup<ListAnalyzedResourcesPostBodyFormProperties>({
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer/.{1,255}')]),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListFindingsPostBody {

		/**
		 * The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to retrieve findings from.
		 * Required
		 */
		analyzerArn: string;

		/** A filter to match for the findings to return. */
		filter?: {[id: string]: Criterion };

		/** The criteria used to sort. */
		sort?: ListFindingsPostBodySort;

		/** A token used for pagination of results returned. */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return in the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults?: number | null;
	}
	export interface ListFindingsPostBodyFormProperties {

		/**
		 * The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to retrieve findings from.
		 * Required
		 */
		analyzerArn: FormControl<string | null | undefined>,

		/** A filter to match for the findings to return. */
		filter: FormControl<{[id: string]: Criterion } | null | undefined>,

		/** A token used for pagination of results returned. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return in the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFindingsPostBodyFormGroup() {
		return new FormGroup<ListFindingsPostBodyFormProperties>({
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer/.{1,255}')]),
			filter: new FormControl<{[id: string]: Criterion } | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListFindingsPostBodySort {
		attributeName?: string;
		orderBy?: OrderBy;
	}
	export interface ListFindingsPostBodySortFormProperties {
		attributeName: FormControl<string | null | undefined>,
		orderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateListFindingsPostBodySortFormGroup() {
		return new FormGroup<ListFindingsPostBodySortFormProperties>({
			attributeName: new FormControl<string | null | undefined>(undefined),
			orderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}

	export interface UpdateFindingsPutBody {

		/**
		 * The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> that generated the findings to update.
		 * Required
		 */
		analyzerArn: string;

		/**
		 * The state represents the action to take to update the finding Status. Use <code>ARCHIVE</code> to change an Active finding to an Archived finding. Use <code>ACTIVE</code> to change an Archived finding to an Active finding.
		 * Required
		 */
		status: FindingStatusUpdate;

		/** The IDs of the findings to update. */
		ids?: Array<string>;

		/** The ARN of the resource identified in the finding. */
		resourceArn?: string | null;

		/** A client token. */
		clientToken?: string | null;
	}
	export interface UpdateFindingsPutBodyFormProperties {

		/**
		 * The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> that generated the findings to update.
		 * Required
		 */
		analyzerArn: FormControl<string | null | undefined>,

		/**
		 * The state represents the action to take to update the finding Status. Use <code>ARCHIVE</code> to change an Active finding to an Archived finding. Use <code>ACTIVE</code> to change an Archived finding to an Active finding.
		 * Required
		 */
		status: FormControl<FindingStatusUpdate | null | undefined>,

		/** The ARN of the resource identified in the finding. */
		resourceArn: FormControl<string | null | undefined>,

		/** A client token. */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFindingsPutBodyFormGroup() {
		return new FormGroup<UpdateFindingsPutBodyFormProperties>({
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer/.{1,255}')]),
			status: new FormControl<FindingStatusUpdate | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('arn:[^:]*:[^:]*:[^:]*:[^:]*:.*')]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartPolicyGenerationPutBody {

		/**
		 * Contains the ARN details about the IAM entity for which the policy is generated.
		 * Required
		 */
		policyGenerationDetails: StartPolicyGenerationPutBodyPolicyGenerationDetails;

		/** Contains information about CloudTrail access. */
		cloudTrailDetails?: StartPolicyGenerationPutBodyCloudTrailDetails;

		/** <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect.</p> <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.</p> */
		clientToken?: string | null;
	}
	export interface StartPolicyGenerationPutBodyFormProperties {

		/** <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect.</p> <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.</p> */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartPolicyGenerationPutBodyFormGroup() {
		return new FormGroup<StartPolicyGenerationPutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartPolicyGenerationPutBodyPolicyGenerationDetails {
		principalArn?: string;
	}
	export interface StartPolicyGenerationPutBodyPolicyGenerationDetailsFormProperties {
		principalArn: FormControl<string | null | undefined>,
	}
	export function CreateStartPolicyGenerationPutBodyPolicyGenerationDetailsFormGroup() {
		return new FormGroup<StartPolicyGenerationPutBodyPolicyGenerationDetailsFormProperties>({
			principalArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartPolicyGenerationPutBodyCloudTrailDetails {
		trails?: Array<Trail>;
		accessRole?: string;
		startTime?: Date;
		endTime?: Date;
	}
	export interface StartPolicyGenerationPutBodyCloudTrailDetailsFormProperties {
		accessRole: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartPolicyGenerationPutBodyCloudTrailDetailsFormGroup() {
		return new FormGroup<StartPolicyGenerationPutBodyCloudTrailDetailsFormProperties>({
			accessRole: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to add to the resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags to add to the resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartResourceScanPostBody {

		/**
		 * The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to use to scan the policies applied to the specified resource.
		 * Required
		 */
		analyzerArn: string;

		/**
		 * The ARN of the resource to scan.
		 * Required
		 */
		resourceArn: string;

		/** The Amazon Web Services account ID that owns the resource. For most Amazon Web Services resources, the owning account is the account in which the resource was created. */
		resourceOwnerAccount?: string | null;
	}
	export interface StartResourceScanPostBodyFormProperties {

		/**
		 * The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to use to scan the policies applied to the specified resource.
		 * Required
		 */
		analyzerArn: FormControl<string | null | undefined>,

		/**
		 * The ARN of the resource to scan.
		 * Required
		 */
		resourceArn: FormControl<string | null | undefined>,

		/** The Amazon Web Services account ID that owns the resource. For most Amazon Web Services resources, the owning account is the account in which the resource was created. */
		resourceOwnerAccount: FormControl<string | null | undefined>,
	}
	export function CreateStartResourceScanPostBodyFormGroup() {
		return new FormGroup<StartResourceScanPostBodyFormProperties>({
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer/.{1,255}')]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('arn:[^:]*:[^:]*:[^:]*:[^:]*:.*')]),
			resourceOwnerAccount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ValidatePolicyPostBody {

		/** The locale to use for localizing the findings. */
		locale?: Locale | null;

		/**
		 * The JSON policy document to use as the content for the policy.
		 * Required
		 */
		policyDocument: string;

		/**
		 * <p>The type of policy to validate. Identity policies grant permissions to IAM principals. Identity policies include managed and inline policies for IAM roles, users, and groups. They also include service-control policies (SCPs) that are attached to an Amazon Web Services organization, organizational unit (OU), or an account.</p> <p>Resource policies grant permissions on Amazon Web Services resources. Resource policies include trust policies for IAM roles and bucket policies for Amazon S3 buckets. You can provide a generic input such as identity policy or resource policy or a specific input such as managed policy or Amazon S3 bucket policy. </p>
		 * Required
		 */
		policyType: PolicyType;

		/** <p>The type of resource to attach to your resource policy. Specify a value for the policy validation resource type only if the policy type is <code>RESOURCE_POLICY</code>. For example, to validate a resource policy to attach to an Amazon S3 bucket, you can choose <code>AWS::S3::Bucket</code> for the policy validation resource type.</p> <p>For resource types not supported as valid values, IAM Access Analyzer runs policy checks that apply to all resource policies. For example, to validate a resource policy to attach to a KMS key, do not specify a value for the policy validation resource type and IAM Access Analyzer will run policy checks that apply to all resource policies.</p> */
		validatePolicyResourceType?: ValidatePolicyResourceType | null;
	}
	export interface ValidatePolicyPostBodyFormProperties {

		/** The locale to use for localizing the findings. */
		locale: FormControl<Locale | null | undefined>,

		/**
		 * The JSON policy document to use as the content for the policy.
		 * Required
		 */
		policyDocument: FormControl<string | null | undefined>,

		/**
		 * <p>The type of policy to validate. Identity policies grant permissions to IAM principals. Identity policies include managed and inline policies for IAM roles, users, and groups. They also include service-control policies (SCPs) that are attached to an Amazon Web Services organization, organizational unit (OU), or an account.</p> <p>Resource policies grant permissions on Amazon Web Services resources. Resource policies include trust policies for IAM roles and bucket policies for Amazon S3 buckets. You can provide a generic input such as identity policy or resource policy or a specific input such as managed policy or Amazon S3 bucket policy. </p>
		 * Required
		 */
		policyType: FormControl<PolicyType | null | undefined>,

		/** <p>The type of resource to attach to your resource policy. Specify a value for the policy validation resource type only if the policy type is <code>RESOURCE_POLICY</code>. For example, to validate a resource policy to attach to an Amazon S3 bucket, you can choose <code>AWS::S3::Bucket</code> for the policy validation resource type.</p> <p>For resource types not supported as valid values, IAM Access Analyzer runs policy checks that apply to all resource policies. For example, to validate a resource policy to attach to a KMS key, do not specify a value for the policy validation resource type and IAM Access Analyzer will run policy checks that apply to all resource policies.</p> */
		validatePolicyResourceType: FormControl<ValidatePolicyResourceType | null | undefined>,
	}
	export function CreateValidatePolicyPostBodyFormGroup() {
		return new FormGroup<ValidatePolicyPostBodyFormProperties>({
			locale: new FormControl<Locale | null | undefined>(undefined),
			policyDocument: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyType: new FormControl<PolicyType | null | undefined>(undefined, [Validators.required]),
			validatePolicyResourceType: new FormControl<ValidatePolicyResourceType | null | undefined>(undefined),
		});

	}

}

