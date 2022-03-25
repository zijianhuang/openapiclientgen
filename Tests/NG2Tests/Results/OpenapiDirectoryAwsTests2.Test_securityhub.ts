import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AcceptInvitationResponse {
	}

	export interface InternalException {
	}

	export interface InvalidInputException {
	}

	export interface LimitExceededException {
	}

	export interface ResourceNotFoundException {
	}

	export interface InvalidAccessException {
	}

	export interface BatchDisableStandardsResponse {
		StandardsSubscriptions?: Array<StandardsSubscription>;
	}


	/** A resource that represents your subscription to a supported standard. */
	export interface StandardsSubscription {
		StandardsSubscriptionArn: string;
		StandardsArn: string;
		StandardsInput: StandardsInputParameterMap;
		StandardsStatus: StandardsSubscriptionStandardsStatus;
	}

	export interface StandardsInputParameterMap {
	}

	export enum StandardsSubscriptionStandardsStatus { PENDING = 0, READY = 1, FAILED = 2, DELETING = 3, INCOMPLETE = 4 }

	export interface BatchEnableStandardsResponse {
		StandardsSubscriptions?: Array<StandardsSubscription>;
	}


	/** The standard that you want to enable. */
	export interface StandardsSubscriptionRequest {
		StandardsArn: string;
		StandardsInput?: StandardsInputParameterMap;
	}

	export interface BatchImportFindingsResponse {
		FailedCount: number;
		SuccessCount: number;
		FailedFindings?: Array<ImportFindingsError>;
	}


	/** The list of the findings that cannot be imported. For each finding, the list provides the error. */
	export interface ImportFindingsError {
		Id: string;
		ErrorCode: string;
		ErrorMessage: string;
	}


	/** <p>Provides consistent format for the contents of the Security Hub-aggregated findings. <code>AwsSecurityFinding</code> format enables you to share findings between AWS security services and third-party solutions, and security standards checks.</p> <note> <p>A finding is a potential security issue generated either by AWS services (Amazon GuardDuty, Amazon Inspector, and Amazon Macie) or by the integrated third-party solutions and standards checks.</p> </note> */
	export interface AwsSecurityFinding {
		SchemaVersion: string;
		Id: string;
		ProductArn: string;
		GeneratorId: string;
		AwsAccountId: string;
		Types: Array<string>;
		FirstObservedAt?: string;
		LastObservedAt?: string;
		CreatedAt: string;
		UpdatedAt: string;

		/**
		 * The severity of the finding.
		 * Required
		 */
		Severity: Severity;
		Confidence?: number;
		Criticality?: number;
		Title: string;
		Description: string;

		/** Details about the remediation steps for a finding. */
		Remediation?: Remediation;
		SourceUrl?: string;
		ProductFields?: FieldMap;
		UserDefinedFields?: FieldMap;
		Malware?: Array<Malware>;

		/** The details of network-related information about a finding. */
		Network?: Network;

		/** The details of process-related information about a finding. */
		Process?: ProcessDetails;
		ThreatIntelIndicators?: Array<ThreatIntelIndicator>;
		Resources: Array<Resource>;

		/** Contains finding details that are specific to control-based findings. Only returned for findings generated from controls. */
		Compliance?: Compliance;
		VerificationState?: AwsSecurityFindingVerificationState;

		/** This field is deprecated, use Workflow.Status instead. */
		WorkflowState?: AwsSecurityFindingWorkflowState;

		/** Provides information about the status of the investigation into a finding. */
		Workflow?: Workflow;
		RecordState?: AwsSecurityFindingRecordState;
		RelatedFindings?: Array<RelatedFinding>;

		/** A user-defined note added to a finding. */
		Note?: Note;
	}


	/** The severity of the finding. */
	export interface Severity {
		Product?: number;
		Label?: SeverityLabel;
		Normalized?: number;
		Original?: string;
	}

	export enum SeverityLabel { INFORMATIONAL = 0, LOW = 1, MEDIUM = 2, HIGH = 3, CRITICAL = 4 }


	/** Details about the remediation steps for a finding. */
	export interface Remediation {

		/** A recommendation on how to remediate the issue identified in a finding. */
		Recommendation?: Recommendation;
	}


	/** A recommendation on how to remediate the issue identified in a finding. */
	export interface Recommendation {
		Text?: string;
		Url?: string;
	}

	export interface FieldMap {
	}


	/** A list of malware related to a finding. */
	export interface Malware {
		Name: string;
		Type?: MalwareType;
		Path?: string;
		State?: MalwareState;
	}

	export enum MalwareType { ADWARE = 0, BLENDED_THREAT = 1, BOTNET_AGENT = 2, COIN_MINER = 3, EXPLOIT_KIT = 4, KEYLOGGER = 5, MACRO = 6, POTENTIALLY_UNWANTED = 7, SPYWARE = 8, RANSOMWARE = 9, REMOTE_ACCESS = 10, ROOTKIT = 11, TROJAN = 12, VIRUS = 13, WORM = 14 }

	export enum MalwareState { OBSERVED = 0, REMOVAL_FAILED = 1, REMOVED = 2 }


	/** The details of network-related information about a finding. */
	export interface Network {
		Direction?: NetworkDirection;
		Protocol?: string;
		SourceIpV4?: string;
		SourceIpV6?: string;
		SourcePort?: number;
		SourceDomain?: string;
		SourceMac?: string;
		DestinationIpV4?: string;
		DestinationIpV6?: string;
		DestinationPort?: number;
		DestinationDomain?: string;
	}

	export enum NetworkDirection { IN = 0, OUT = 1 }


	/** The details of process-related information about a finding. */
	export interface ProcessDetails {
		Name?: string;
		Path?: string;
		Pid?: number;
		ParentPid?: number;
		LaunchedAt?: string;
		TerminatedAt?: string;
	}


	/** Details about the threat intelligence related to a finding. */
	export interface ThreatIntelIndicator {
		Type?: ThreatIntelIndicatorType;
		Value?: string;
		Category?: ThreatIntelIndicatorCategory;
		LastObservedAt?: string;
		Source?: string;
		SourceUrl?: string;
	}

	export enum ThreatIntelIndicatorType { DOMAIN = 0, EMAIL_ADDRESS = 1, HASH_MD5 = 2, HASH_SHA1 = 3, HASH_SHA256 = 4, HASH_SHA512 = 5, IPV4_ADDRESS = 6, IPV6_ADDRESS = 7, MUTEX = 8, PROCESS = 9, URL = 10 }

	export enum ThreatIntelIndicatorCategory { BACKDOOR = 0, CARD_STEALER = 1, COMMAND_AND_CONTROL = 2, DROP_SITE = 3, EXPLOIT_SITE = 4, KEYLOGGER = 5 }


	/** A resource related to a finding. */
	export interface Resource {
		Type: string;
		Id: string;
		Partition?: ResourcePartition;
		Region?: string;
		Tags?: FieldMap;

		/** <p>Additional details about a resource related to a finding.</p> <p>To provide the details, use the object that corresponds to the resource type. For example, if the resource type is <code>AwsEc2Instance</code>, then you use the <code>AwsEc2Instance</code> object to provide the details.</p> <p>If the type-specific object does not contain all of the fields you want to populate, then you use the <code>Other</code> object to populate those additional fields.</p> <p>You also use the <code>Other</code> object to populate the details when the selected type does not have a corresponding object.</p> */
		Details?: ResourceDetails;
	}

	export enum ResourcePartition { aws = 0, aws_cn = 1, aws_us_gov = 2 }


	/** <p>Additional details about a resource related to a finding.</p> <p>To provide the details, use the object that corresponds to the resource type. For example, if the resource type is <code>AwsEc2Instance</code>, then you use the <code>AwsEc2Instance</code> object to provide the details.</p> <p>If the type-specific object does not contain all of the fields you want to populate, then you use the <code>Other</code> object to populate those additional fields.</p> <p>You also use the <code>Other</code> object to populate the details when the selected type does not have a corresponding object.</p> */
	export interface ResourceDetails {

		/** Information about an AWS CodeBuild project. */
		AwsCodeBuildProject?: AwsCodeBuildProjectDetails;

		/** A distribution configuration. */
		AwsCloudFrontDistribution?: AwsCloudFrontDistributionDetails;

		/** The details of an Amazon EC2 instance. */
		AwsEc2Instance?: AwsEc2InstanceDetails;

		/** Details about the network interface */
		AwsEc2NetworkInterface?: AwsEc2NetworkInterfaceDetails;

		/** Details about an EC2 security group. */
		AwsEc2SecurityGroup?: AwsEc2SecurityGroupDetails;

		/** Information about a load balancer. */
		AwsElbv2LoadBalancer?: AwsElbv2LoadBalancerDetails;

		/** Information about an Elasticsearch domain. */
		AwsElasticsearchDomain?: AwsElasticsearchDomainDetails;

		/** The details of an Amazon S3 bucket. */
		AwsS3Bucket?: AwsS3BucketDetails;

		/** Details about an Amazon S3 object. */
		AwsS3Object?: AwsS3ObjectDetails;

		/** IAM access key details related to a finding. */
		AwsIamAccessKey?: AwsIamAccessKeyDetails;

		/** Contains information about an IAM role, including all of the role's policies. */
		AwsIamRole?: AwsIamRoleDetails;

		/** Contains metadata about a customer master key (CMK). */
		AwsKmsKey?: AwsKmsKeyDetails;

		/** Details about a function's configuration. */
		AwsLambdaFunction?: AwsLambdaFunctionDetails;

		/** Details about a Lambda layer version. */
		AwsLambdaLayerVersion?: AwsLambdaLayerVersionDetails;

		/** Contains the details of an Amazon RDS DB instance. */
		AwsRdsDbInstance?: AwsRdsDbInstanceDetails;

		/** A wrapper type for the topic's Amazon Resource Name (ARN). */
		AwsSnsTopic?: AwsSnsTopicDetails;

		/** Data about a queue. */
		AwsSqsQueue?: AwsSqsQueueDetails;

		/** Details about a WAF WebACL. */
		AwsWafWebAcl?: AwsWafWebAclDetails;

		/** Container details related to a finding. */
		Container?: ContainerDetails;
		Other?: FieldMap;
	}


	/** Information about an AWS CodeBuild project. */
	export interface AwsCodeBuildProjectDetails {
		EncryptionKey?: string;

		/** Information about the build environment for this build project. */
		Environment?: AwsCodeBuildProjectEnvironment;
		Name?: string;

		/** Information about the build input source code for this build project. */
		Source?: AwsCodeBuildProjectSource;
		ServiceRole?: string;

		/** Information about the VPC configuration that AWS CodeBuild accesses. */
		VpcConfig?: AwsCodeBuildProjectVpcConfig;
	}


	/** Information about the build environment for this build project. */
	export interface AwsCodeBuildProjectEnvironment {
		Certificate?: string;
		ImagePullCredentialsType?: string;

		/** The credentials for access to a private registry. */
		RegistryCredential?: AwsCodeBuildProjectEnvironmentRegistryCredential;
		Type?: string;
	}


	/** The credentials for access to a private registry. */
	export interface AwsCodeBuildProjectEnvironmentRegistryCredential {
		Credential?: string;
		CredentialProvider?: string;
	}


	/** Information about the build input source code for this build project. */
	export interface AwsCodeBuildProjectSource {
		Type?: string;
		Location?: string;
		GitCloneDepth?: number;
		InsecureSsl?: boolean;
	}


	/** Information about the VPC configuration that AWS CodeBuild accesses. */
	export interface AwsCodeBuildProjectVpcConfig {
		VpcId?: string;
		Subnets?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}


	/** A distribution configuration. */
	export interface AwsCloudFrontDistributionDetails {
		DomainName?: string;
		ETag?: string;
		LastModifiedTime?: string;

		/** A complex type that controls whether access logs are written for the distribution. */
		Logging?: AwsCloudFrontDistributionLogging;

		/** A complex type that contains information about origins and origin groups for this distribution. */
		Origins?: AwsCloudFrontDistributionOrigins;
		Status?: string;
		WebAclId?: string;
	}


	/** A complex type that controls whether access logs are written for the distribution. */
	export interface AwsCloudFrontDistributionLogging {
		Bucket?: string;
		Enabled?: boolean;
		IncludeCookies?: boolean;
		Prefix?: string;
	}


	/** A complex type that contains information about origins and origin groups for this distribution. */
	export interface AwsCloudFrontDistributionOrigins {
		Items?: Array<AwsCloudFrontDistributionOriginItem>;
	}


	/** A complex type that describes the Amazon S3 bucket, HTTP server (for example, a web server), Amazon Elemental MediaStore, or other server from which CloudFront gets your files. */
	export interface AwsCloudFrontDistributionOriginItem {
		DomainName?: string;
		Id?: string;
		OriginPath?: string;
	}


	/** The details of an Amazon EC2 instance. */
	export interface AwsEc2InstanceDetails {
		Type?: string;
		ImageId?: string;
		IpV4Addresses?: Array<string>;
		IpV6Addresses?: Array<string>;
		KeyName?: string;
		IamInstanceProfileArn?: string;
		VpcId?: string;
		SubnetId?: string;
		LaunchedAt?: string;
	}


	/** Details about the network interface */
	export interface AwsEc2NetworkInterfaceDetails {

		/** Information about the network interface attachment. */
		Attachment?: AwsEc2NetworkInterfaceAttachment;
		NetworkInterfaceId?: string;
		SecurityGroups?: Array<AwsEc2NetworkInterfaceSecurityGroup>;
		SourceDestCheck?: boolean;
	}


	/** Information about the network interface attachment. */
	export interface AwsEc2NetworkInterfaceAttachment {
		AttachTime?: string;
		AttachmentId?: string;
		DeleteOnTermination?: boolean;
		DeviceIndex?: number;
		InstanceId?: string;
		InstanceOwnerId?: string;
		Status?: string;
	}


	/** A security group associated with the network interface. */
	export interface AwsEc2NetworkInterfaceSecurityGroup {
		GroupName?: string;
		GroupId?: string;
	}


	/** Details about an EC2 security group. */
	export interface AwsEc2SecurityGroupDetails {
		GroupName?: string;
		GroupId?: string;
		OwnerId?: string;
		VpcId?: string;
		IpPermissions?: Array<AwsEc2SecurityGroupIpPermission>;
		IpPermissionsEgress?: Array<AwsEc2SecurityGroupIpPermission>;
	}


	/** An IP permission for an EC2 security group. */
	export interface AwsEc2SecurityGroupIpPermission {
		IpProtocol?: string;
		FromPort?: number;
		ToPort?: number;
		UserIdGroupPairs?: Array<AwsEc2SecurityGroupUserIdGroupPair>;
		IpRanges?: Array<AwsEc2SecurityGroupIpRange>;
		Ipv6Ranges?: Array<AwsEc2SecurityGroupIpv6Range>;
		PrefixListIds?: Array<AwsEc2SecurityGroupPrefixListId>;
	}


	/** A relationship between a security group and a user. */
	export interface AwsEc2SecurityGroupUserIdGroupPair {
		GroupId?: string;
		GroupName?: string;
		PeeringStatus?: string;
		UserId?: string;
		VpcId?: string;
		VpcPeeringConnectionId?: string;
	}


	/** A range of IPv4 addresses. */
	export interface AwsEc2SecurityGroupIpRange {
		CidrIp?: string;
	}


	/** A range of IPv6 addresses. */
	export interface AwsEc2SecurityGroupIpv6Range {
		CidrIpv6?: string;
	}


	/** A prefix list ID. */
	export interface AwsEc2SecurityGroupPrefixListId {
		PrefixListId?: string;
	}


	/** Information about a load balancer. */
	export interface AwsElbv2LoadBalancerDetails {
		AvailabilityZones?: Array<AvailabilityZone>;
		CanonicalHostedZoneId?: string;
		CreatedTime?: string;
		DNSName?: string;
		IpAddressType?: string;
		Scheme?: string;
		SecurityGroups?: Array<string>;

		/** Information about the state of the load balancer. */
		State?: LoadBalancerState;
		Type?: string;
		VpcId?: string;
	}


	/** Information about an Availability Zone. */
	export interface AvailabilityZone {
		ZoneName?: string;
		SubnetId?: string;
	}


	/** Information about the state of the load balancer. */
	export interface LoadBalancerState {
		Code?: string;
		Reason?: string;
	}


	/** Information about an Elasticsearch domain. */
	export interface AwsElasticsearchDomainDetails {
		AccessPolicies?: string;

		/** Additional options for the domain endpoint, such as whether to require HTTPS for all traffic. */
		DomainEndpointOptions?: AwsElasticsearchDomainDomainEndpointOptions;
		DomainId?: string;
		DomainName?: string;
		Endpoint?: string;
		Endpoints?: FieldMap;
		ElasticsearchVersion?: string;

		/** Details about the configuration for encryption at rest. */
		EncryptionAtRestOptions?: AwsElasticsearchDomainEncryptionAtRestOptions;

		/** Details about the configuration for node-to-node encryption. */
		NodeToNodeEncryptionOptions?: AwsElasticsearchDomainNodeToNodeEncryptionOptions;

		/** Information that Amazon ES derives based on <code>VPCOptions</code> for the domain. */
		VPCOptions?: AwsElasticsearchDomainVPCOptions;
	}


	/** Additional options for the domain endpoint, such as whether to require HTTPS for all traffic. */
	export interface AwsElasticsearchDomainDomainEndpointOptions {
		EnforceHTTPS?: boolean;
		TLSSecurityPolicy?: string;
	}


	/** Details about the configuration for encryption at rest. */
	export interface AwsElasticsearchDomainEncryptionAtRestOptions {
		Enabled?: boolean;
		KmsKeyId?: string;
	}


	/** Details about the configuration for node-to-node encryption. */
	export interface AwsElasticsearchDomainNodeToNodeEncryptionOptions {
		Enabled?: boolean;
	}


	/** Information that Amazon ES derives based on <code>VPCOptions</code> for the domain. */
	export interface AwsElasticsearchDomainVPCOptions {
		AvailabilityZones?: Array<string>;
		SecurityGroupIds?: Array<string>;
		SubnetIds?: Array<string>;
		VPCId?: string;
	}


	/** The details of an Amazon S3 bucket. */
	export interface AwsS3BucketDetails {
		OwnerId?: string;
		OwnerName?: string;
		CreatedAt?: string;

		/** The encryption configuration for the S3 bucket. */
		ServerSideEncryptionConfiguration?: AwsS3BucketServerSideEncryptionConfiguration;
	}


	/** The encryption configuration for the S3 bucket. */
	export interface AwsS3BucketServerSideEncryptionConfiguration {
		Rules?: Array<AwsS3BucketServerSideEncryptionRule>;
	}


	/** An encryption rule to apply to the S3 bucket. */
	export interface AwsS3BucketServerSideEncryptionRule {

		/** Specifies the default server-side encryption to apply to new objects in the bucket. */
		ApplyServerSideEncryptionByDefault?: AwsS3BucketServerSideEncryptionByDefault;
	}


	/** Specifies the default server-side encryption to apply to new objects in the bucket. */
	export interface AwsS3BucketServerSideEncryptionByDefault {
		SSEAlgorithm?: string;
		KMSMasterKeyID?: string;
	}


	/** Details about an Amazon S3 object. */
	export interface AwsS3ObjectDetails {
		LastModified?: string;
		ETag?: string;
		VersionId?: string;
		ContentType?: string;
		ServerSideEncryption?: string;
		SSEKMSKeyId?: string;
	}


	/** IAM access key details related to a finding. */
	export interface AwsIamAccessKeyDetails {
		UserName?: string;
		Status?: AwsIamAccessKeyDetailsStatus;
		CreatedAt?: string;
		PrincipalId?: string;
		PrincipalType?: string;
		PrincipalName?: string;
	}

	export enum AwsIamAccessKeyDetailsStatus { Active = 0, Inactive = 1 }


	/** Contains information about an IAM role, including all of the role's policies. */
	export interface AwsIamRoleDetails {
		AssumeRolePolicyDocument?: string;
		CreateDate?: string;
		RoleId?: string;
		RoleName?: string;
		MaxSessionDuration?: number;
		Path?: string;
	}


	/** Contains metadata about a customer master key (CMK). */
	export interface AwsKmsKeyDetails {
		AWSAccountId?: string;
		CreationDate?: number;
		KeyId?: string;
		KeyManager?: string;
		KeyState?: string;
		Origin?: string;
	}


	/** Details about a function's configuration. */
	export interface AwsLambdaFunctionDetails {

		/** The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly. */
		Code?: AwsLambdaFunctionCode;
		CodeSha256?: string;

		/** The dead-letter queue for failed asynchronous invocations. */
		DeadLetterConfig?: AwsLambdaFunctionDeadLetterConfig;

		/** A function's environment variable settings. */
		Environment?: AwsLambdaFunctionEnvironment;
		FunctionName?: string;
		Handler?: string;
		KmsKeyArn?: string;
		LastModified?: string;
		Layers?: Array<AwsLambdaFunctionLayer>;
		MasterArn?: string;
		MemorySize?: number;
		RevisionId?: string;
		Role?: string;
		Runtime?: string;
		Timeout?: number;

		/** The function's AWS X-Ray tracing configuration. */
		TracingConfig?: AwsLambdaFunctionTracingConfig;

		/** The VPC security groups and subnets that are attached to a Lambda function. For more information, see VPC Settings. */
		VpcConfig?: AwsLambdaFunctionVpcConfig;
		Version?: string;
	}


	/** The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly. */
	export interface AwsLambdaFunctionCode {
		S3Bucket?: string;
		S3Key?: string;
		S3ObjectVersion?: string;
		ZipFile?: string;
	}


	/** The dead-letter queue for failed asynchronous invocations. */
	export interface AwsLambdaFunctionDeadLetterConfig {
		TargetArn?: string;
	}


	/** A function's environment variable settings. */
	export interface AwsLambdaFunctionEnvironment {
		Variables?: FieldMap;

		/** Error messages for environment variables that couldn't be applied. */
		Error?: AwsLambdaFunctionEnvironmentError;
	}


	/** Error messages for environment variables that couldn't be applied. */
	export interface AwsLambdaFunctionEnvironmentError {
		ErrorCode?: string;
		Message?: string;
	}


	/** An AWS Lambda layer. */
	export interface AwsLambdaFunctionLayer {
		Arn?: string;
		CodeSize?: number;
	}


	/** The function's AWS X-Ray tracing configuration. */
	export interface AwsLambdaFunctionTracingConfig {
		Mode?: string;
	}


	/** The VPC security groups and subnets that are attached to a Lambda function. For more information, see VPC Settings. */
	export interface AwsLambdaFunctionVpcConfig {
		SecurityGroupIds?: Array<string>;
		SubnetIds?: Array<string>;
		VpcId?: string;
	}


	/** Details about a Lambda layer version. */
	export interface AwsLambdaLayerVersionDetails {
		Version?: number;
		CompatibleRuntimes?: Array<string>;
		CreatedDate?: string;
	}


	/** Contains the details of an Amazon RDS DB instance. */
	export interface AwsRdsDbInstanceDetails {
		AssociatedRoles?: Array<AwsRdsDbInstanceAssociatedRole>;
		CACertificateIdentifier?: string;
		DBClusterIdentifier?: string;
		DBInstanceIdentifier?: string;
		DBInstanceClass?: string;
		DbInstancePort?: number;
		DbiResourceId?: string;
		DBName?: string;
		DeletionProtection?: boolean;

		/** Specifies the connection endpoint. */
		Endpoint?: AwsRdsDbInstanceEndpoint;
		Engine?: string;
		EngineVersion?: string;
		IAMDatabaseAuthenticationEnabled?: boolean;
		InstanceCreateTime?: string;
		KmsKeyId?: string;
		PubliclyAccessible?: boolean;
		StorageEncrypted?: boolean;
		TdeCredentialArn?: string;
		VpcSecurityGroups?: Array<AwsRdsDbInstanceVpcSecurityGroup>;
	}


	/** An AWS Identity and Access Management (IAM) role associated with the DB instance. */
	export interface AwsRdsDbInstanceAssociatedRole {
		RoleArn?: string;
		FeatureName?: string;
		Status?: string;
	}


	/** Specifies the connection endpoint. */
	export interface AwsRdsDbInstanceEndpoint {
		Address?: string;
		Port?: number;
		HostedZoneId?: string;
	}


	/** A VPC security groups that the DB instance belongs to. */
	export interface AwsRdsDbInstanceVpcSecurityGroup {
		VpcSecurityGroupId?: string;
		Status?: string;
	}


	/** A wrapper type for the topic's Amazon Resource Name (ARN). */
	export interface AwsSnsTopicDetails {
		KmsMasterKeyId?: string;
		Subscription?: Array<AwsSnsTopicSubscription>;
		TopicName?: string;
		Owner?: string;
	}


	/** A wrapper type for the attributes of an Amazon SNS subscription. */
	export interface AwsSnsTopicSubscription {
		Endpoint?: string;
		Protocol?: string;
	}


	/** Data about a queue. */
	export interface AwsSqsQueueDetails {
		KmsDataKeyReusePeriodSeconds?: number;
		KmsMasterKeyId?: string;
		QueueName?: string;
		DeadLetterTargetArn?: string;
	}


	/** Details about a WAF WebACL. */
	export interface AwsWafWebAclDetails {
		Name?: string;
		DefaultAction?: string;
		Rules?: Array<AwsWafWebAclRule>;
		WebAclId?: string;
	}


	/** Details for a rule in a WAF WebACL. */
	export interface AwsWafWebAclRule {

		/** Details about the action that CloudFront or AWS WAF takes when a web request matches the conditions in the rule. */
		Action?: WafAction;
		ExcludedRules?: Array<WafExcludedRule>;

		/** Details about an override action for a rule. */
		OverrideAction?: WafOverrideAction;
		Priority?: number;
		RuleId?: string;
		Type?: string;
	}


	/** Details about the action that CloudFront or AWS WAF takes when a web request matches the conditions in the rule.  */
	export interface WafAction {
		Type?: string;
	}


	/** Details about a rule to exclude from a rule group. */
	export interface WafExcludedRule {
		RuleId?: string;
	}


	/** Details about an override action for a rule. */
	export interface WafOverrideAction {
		Type?: string;
	}


	/** Container details related to a finding. */
	export interface ContainerDetails {
		Name?: string;
		ImageId?: string;
		ImageName?: string;
		LaunchedAt?: string;
	}


	/** Contains finding details that are specific to control-based findings. Only returned for findings generated from controls. */
	export interface Compliance {
		Status?: ComplianceStatus;
		RelatedRequirements?: Array<string>;
		StatusReasons?: Array<StatusReason>;
	}

	export enum ComplianceStatus { PASSED = 0, WARNING = 1, FAILED = 2, NOT_AVAILABLE = 3 }


	/** Provides additional context for the value of <code>Compliance.Status</code>. */
	export interface StatusReason {
		ReasonCode: string;
		Description?: string;
	}

	export enum AwsSecurityFindingVerificationState { UNKNOWN = 0, TRUE_POSITIVE = 1, FALSE_POSITIVE = 2, BENIGN_POSITIVE = 3 }

	export enum AwsSecurityFindingWorkflowState { NEW = 0, ASSIGNED = 1, IN_PROGRESS = 2, DEFERRED = 3, RESOLVED = 4 }


	/** Provides information about the status of the investigation into a finding. */
	export interface Workflow {
		Status?: WorkflowStatus;
	}

	export enum WorkflowStatus { NEW = 0, NOTIFIED = 1, RESOLVED = 2, SUPPRESSED = 3 }

	export enum AwsSecurityFindingRecordState { ACTIVE = 0, ARCHIVED = 1 }


	/** Details about a related finding. */
	export interface RelatedFinding {
		ProductArn: string;
		Id: string;
	}


	/** A user-defined note added to a finding. */
	export interface Note {
		Text: string;
		UpdatedBy: string;
		UpdatedAt: string;
	}

	export interface BatchUpdateFindingsResponse {
		ProcessedFindings: Array<AwsSecurityFindingIdentifier>;
		UnprocessedFindings: Array<BatchUpdateFindingsUnprocessedFinding>;
	}


	/** Identifies a finding to update using <code>BatchUpdateFindings</code>. */
	export interface AwsSecurityFindingIdentifier {
		Id: string;
		ProductArn: string;
	}


	/** A finding from a <code>BatchUpdateFindings</code> request that Security Hub was unable to update. */
	export interface BatchUpdateFindingsUnprocessedFinding {

		/**
		 * Identifies a finding to update using <code>BatchUpdateFindings</code>.
		 * Required
		 */
		FindingIdentifier: AwsSecurityFindingIdentifier;
		ErrorCode: string;
		ErrorMessage: string;
	}

	export interface CreateActionTargetResponse {
		ActionTargetArn: string;
	}

	export interface ResourceConflictException {
	}

	export interface CreateInsightResponse {
		InsightArn: string;
	}


	/** A string filter for querying findings. */
	export interface StringFilter {
		Value?: string;
		Comparison?: StringFilterComparison;
	}

	export enum StringFilterComparison { EQUALS = 0, PREFIX = 1 }


	/** A date filter for querying findings. */
	export interface DateFilter {
		Start?: string;
		End?: string;

		/** A date range for the date filter. */
		DateRange?: DateRange;
	}


	/** A date range for the date filter. */
	export interface DateRange {
		Value?: number;
		Unit?: DateRangeUnit;
	}

	export enum DateRangeUnit { DAYS = 0 }


	/** A number filter for querying findings. */
	export interface NumberFilter {
		Gte?: number;
		Lte?: number;
		Eq?: number;
	}


	/** The map filter for querying findings. */
	export interface MapFilter {
		Key?: string;
		Value?: string;
		Comparison?: MapFilterComparison;
	}

	export enum MapFilterComparison { EQUALS = 0 }


	/** The IP filter for querying findings. */
	export interface IpFilter {
		Cidr?: string;
	}


	/** A keyword filter for querying findings. */
	export interface KeywordFilter {
		Value?: string;
	}

	export interface CreateMembersResponse {
		UnprocessedAccounts?: Array<Result>;
	}


	/** Details about the account that was not processed. */
	export interface Result {
		AccountId?: string;
		ProcessingResult?: string;
	}


	/** The details of an AWS account. */
	export interface AccountDetails {
		AccountId?: string;
		Email?: string;
	}

	export interface DeclineInvitationsResponse {
		UnprocessedAccounts?: Array<Result>;
	}

	export interface DeleteActionTargetResponse {
		ActionTargetArn: string;
	}

	export interface DeleteInsightResponse {
		InsightArn: string;
	}

	export interface DeleteInvitationsResponse {
		UnprocessedAccounts?: Array<Result>;
	}

	export interface DeleteMembersResponse {
		UnprocessedAccounts?: Array<Result>;
	}

	export interface DescribeActionTargetsResponse {
		ActionTargets: Array<ActionTarget>;
		NextToken?: string;
	}


	/** An <code>ActionTarget</code> object. */
	export interface ActionTarget {
		ActionTargetArn: string;
		Name: string;
		Description: string;
	}

	export interface DescribeHubResponse {
		HubArn?: string;
		SubscribedAt?: string;
	}

	export interface DescribeProductsResponse {
		Products: Array<Product>;
		NextToken?: string;
	}


	/** Contains details about a product. */
	export interface Product {
		ProductArn: string;
		ProductName?: string;
		CompanyName?: string;
		Description?: string;
		Categories?: Array<string>;
		IntegrationTypes?: Array<IntegrationType>;
		MarketplaceUrl?: string;
		ActivationUrl?: string;
		ProductSubscriptionResourcePolicy?: string;
	}

	export enum IntegrationType { SEND_FINDINGS_TO_SECURITY_HUB = 0, RECEIVE_FINDINGS_FROM_SECURITY_HUB = 1 }

	export interface DescribeStandardsResponse {
		Standards?: Array<Standard>;
		NextToken?: string;
	}


	/** Provides information about a specific standard. */
	export interface Standard {
		StandardsArn?: string;
		Name?: string;
		Description?: string;
		EnabledByDefault?: boolean;
	}

	export interface DescribeStandardsControlsResponse {
		Controls?: Array<StandardsControl>;
		NextToken?: string;
	}


	/** Details for an individual security standard control. */
	export interface StandardsControl {
		StandardsControlArn?: string;
		ControlStatus?: StandardsControlControlStatus;
		DisabledReason?: string;
		ControlStatusUpdatedAt?: Date;
		ControlId?: string;
		Title?: string;
		Description?: string;
		RemediationUrl?: string;
		SeverityRating?: StandardsControlSeverityRating;
		RelatedRequirements?: Array<string>;
	}

	export enum StandardsControlControlStatus { ENABLED = 0, DISABLED = 1 }

	export enum StandardsControlSeverityRating { LOW = 0, MEDIUM = 1, HIGH = 2, CRITICAL = 3 }

	export interface DisableImportFindingsForProductResponse {
	}

	export interface DisableSecurityHubResponse {
	}

	export interface DisassociateFromMasterAccountResponse {
	}

	export interface DisassociateMembersResponse {
	}

	export interface EnableImportFindingsForProductResponse {
		ProductSubscriptionArn?: string;
	}

	export interface EnableSecurityHubResponse {
	}

	export interface AccessDeniedException {
	}

	export interface GetEnabledStandardsResponse {
		StandardsSubscriptions?: Array<StandardsSubscription>;
		NextToken?: string;
	}

	export interface GetFindingsResponse {
		Findings: Array<AwsSecurityFinding>;
		NextToken?: string;
	}


	/** A collection of finding attributes used to sort findings. */
	export interface SortCriterion {
		Field?: string;
		SortOrder?: SortCriterionSortOrder;
	}

	export enum SortCriterionSortOrder { asc = 0, desc = 1 }

	export interface GetInsightResultsResponse {

		/**
		 * The insight results returned by the <code>GetInsightResults</code> operation.
		 * Required
		 */
		InsightResults: InsightResults;
	}


	/** The insight results returned by the <code>GetInsightResults</code> operation. */
	export interface InsightResults {
		InsightArn: string;
		GroupByAttribute: string;
		ResultValues: Array<InsightResultValue>;
	}


	/** The insight result values returned by the <code>GetInsightResults</code> operation. */
	export interface InsightResultValue {
		GroupByAttributeValue: string;
		Count: number;
	}

	export interface GetInsightsResponse {
		Insights: Array<Insight>;
		NextToken?: string;
	}


	/** Contains information about a Security Hub insight. */
	export interface Insight {
		InsightArn: string;
		Name: string;

		/**
		 * A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.
		 * Required
		 */
		Filters: AwsSecurityFindingFilters;
		GroupByAttribute: string;
	}


	/** A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight. */
	export interface AwsSecurityFindingFilters {
		ProductArn?: Array<StringFilter>;
		AwsAccountId?: Array<StringFilter>;
		Id?: Array<StringFilter>;
		GeneratorId?: Array<StringFilter>;
		Type?: Array<StringFilter>;
		FirstObservedAt?: Array<DateFilter>;
		LastObservedAt?: Array<DateFilter>;
		CreatedAt?: Array<DateFilter>;
		UpdatedAt?: Array<DateFilter>;
		SeverityProduct?: Array<NumberFilter>;
		SeverityNormalized?: Array<NumberFilter>;
		SeverityLabel?: Array<StringFilter>;
		Confidence?: Array<NumberFilter>;
		Criticality?: Array<NumberFilter>;
		Title?: Array<StringFilter>;
		Description?: Array<StringFilter>;
		RecommendationText?: Array<StringFilter>;
		SourceUrl?: Array<StringFilter>;
		ProductFields?: Array<MapFilter>;
		ProductName?: Array<StringFilter>;
		CompanyName?: Array<StringFilter>;
		UserDefinedFields?: Array<MapFilter>;
		MalwareName?: Array<StringFilter>;
		MalwareType?: Array<StringFilter>;
		MalwarePath?: Array<StringFilter>;
		MalwareState?: Array<StringFilter>;
		NetworkDirection?: Array<StringFilter>;
		NetworkProtocol?: Array<StringFilter>;
		NetworkSourceIpV4?: Array<IpFilter>;
		NetworkSourceIpV6?: Array<IpFilter>;
		NetworkSourcePort?: Array<NumberFilter>;
		NetworkSourceDomain?: Array<StringFilter>;
		NetworkSourceMac?: Array<StringFilter>;
		NetworkDestinationIpV4?: Array<IpFilter>;
		NetworkDestinationIpV6?: Array<IpFilter>;
		NetworkDestinationPort?: Array<NumberFilter>;
		NetworkDestinationDomain?: Array<StringFilter>;
		ProcessName?: Array<StringFilter>;
		ProcessPath?: Array<StringFilter>;
		ProcessPid?: Array<NumberFilter>;
		ProcessParentPid?: Array<NumberFilter>;
		ProcessLaunchedAt?: Array<DateFilter>;
		ProcessTerminatedAt?: Array<DateFilter>;
		ThreatIntelIndicatorType?: Array<StringFilter>;
		ThreatIntelIndicatorValue?: Array<StringFilter>;
		ThreatIntelIndicatorCategory?: Array<StringFilter>;
		ThreatIntelIndicatorLastObservedAt?: Array<DateFilter>;
		ThreatIntelIndicatorSource?: Array<StringFilter>;
		ThreatIntelIndicatorSourceUrl?: Array<StringFilter>;
		ResourceType?: Array<StringFilter>;
		ResourceId?: Array<StringFilter>;
		ResourcePartition?: Array<StringFilter>;
		ResourceRegion?: Array<StringFilter>;
		ResourceTags?: Array<MapFilter>;
		ResourceAwsEc2InstanceType?: Array<StringFilter>;
		ResourceAwsEc2InstanceImageId?: Array<StringFilter>;
		ResourceAwsEc2InstanceIpV4Addresses?: Array<IpFilter>;
		ResourceAwsEc2InstanceIpV6Addresses?: Array<IpFilter>;
		ResourceAwsEc2InstanceKeyName?: Array<StringFilter>;
		ResourceAwsEc2InstanceIamInstanceProfileArn?: Array<StringFilter>;
		ResourceAwsEc2InstanceVpcId?: Array<StringFilter>;
		ResourceAwsEc2InstanceSubnetId?: Array<StringFilter>;
		ResourceAwsEc2InstanceLaunchedAt?: Array<DateFilter>;
		ResourceAwsS3BucketOwnerId?: Array<StringFilter>;
		ResourceAwsS3BucketOwnerName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyUserName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyStatus?: Array<StringFilter>;
		ResourceAwsIamAccessKeyCreatedAt?: Array<DateFilter>;
		ResourceContainerName?: Array<StringFilter>;
		ResourceContainerImageId?: Array<StringFilter>;
		ResourceContainerImageName?: Array<StringFilter>;
		ResourceContainerLaunchedAt?: Array<DateFilter>;
		ResourceDetailsOther?: Array<MapFilter>;
		ComplianceStatus?: Array<StringFilter>;
		VerificationState?: Array<StringFilter>;
		WorkflowState?: Array<StringFilter>;
		WorkflowStatus?: Array<StringFilter>;
		RecordState?: Array<StringFilter>;
		RelatedFindingsProductArn?: Array<StringFilter>;
		RelatedFindingsId?: Array<StringFilter>;
		NoteText?: Array<StringFilter>;
		NoteUpdatedAt?: Array<DateFilter>;
		NoteUpdatedBy?: Array<StringFilter>;
		Keyword?: Array<KeywordFilter>;
	}

	export interface GetInvitationsCountResponse {
		InvitationsCount?: number;
	}

	export interface GetMasterAccountResponse {

		/** Details about an invitation. */
		Master?: Invitation;
	}


	/** Details about an invitation. */
	export interface Invitation {
		AccountId?: string;
		InvitationId?: string;
		InvitedAt?: Date;
		MemberStatus?: string;
	}

	export interface GetMembersResponse {
		Members?: Array<Member>;
		UnprocessedAccounts?: Array<Result>;
	}


	/** The details about a member account. */
	export interface Member {
		AccountId?: string;
		Email?: string;
		MasterId?: string;
		MemberStatus?: string;
		InvitedAt?: Date;
		UpdatedAt?: Date;
	}

	export interface InviteMembersResponse {
		UnprocessedAccounts?: Array<Result>;
	}

	export interface ListEnabledProductsForImportResponse {
		ProductSubscriptions?: Array<string>;
		NextToken?: string;
	}

	export interface ListInvitationsResponse {
		Invitations?: Array<Invitation>;
		NextToken?: string;
	}

	export interface ListMembersResponse {
		Members?: Array<Member>;
		NextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		Tags?: TagMap;
	}

	export interface TagMap {
	}

	export interface TagResourceResponse {
	}

	export interface UntagResourceResponse {
	}

	export interface UpdateActionTargetResponse {
	}

	export interface UpdateFindingsResponse {
	}

	export interface UpdateInsightResponse {
	}

	export interface UpdateStandardsControlResponse {
	}

	export interface AcceptInvitationRequest {
		MasterId: string;
		InvitationId: string;
	}

	export enum AwsIamAccessKeyStatus { Active = 0, Inactive = 1 }

	export enum VerificationState { UNKNOWN = 0, TRUE_POSITIVE = 1, FALSE_POSITIVE = 2, BENIGN_POSITIVE = 3 }


	/** This field is deprecated, use Workflow.Status instead. */
	export enum WorkflowState { NEW = 0, ASSIGNED = 1, IN_PROGRESS = 2, DEFERRED = 3, RESOLVED = 4 }

	export enum RecordState { ACTIVE = 0, ARCHIVED = 1 }

	export interface BatchDisableStandardsRequest {
		StandardsSubscriptionArns: Array<string>;
	}

	export interface BatchEnableStandardsRequest {
		StandardsSubscriptionRequests: Array<StandardsSubscriptionRequest>;
	}

	export interface BatchImportFindingsRequest {
		Findings: Array<AwsSecurityFinding>;
	}


	/** The updated note. */
	export interface NoteUpdate {
		Text: string;
		UpdatedBy: string;
	}


	/** Updates to the severity information for a finding. */
	export interface SeverityUpdate {
		Normalized?: number;
		Product?: number;
		Label?: SeverityLabel;
	}


	/** Used to update information about the investigation into the finding. */
	export interface WorkflowUpdate {
		Status?: WorkflowStatus;
	}

	export interface BatchUpdateFindingsRequest {
		FindingIdentifiers: Array<AwsSecurityFindingIdentifier>;

		/** The updated note. */
		Note?: NoteUpdate;

		/** Updates to the severity information for a finding. */
		Severity?: SeverityUpdate;
		VerificationState?: AwsSecurityFindingVerificationState;
		Confidence?: number;
		Criticality?: number;
		Types?: Array<string>;
		UserDefinedFields?: FieldMap;

		/** Used to update information about the investigation into the finding. */
		Workflow?: WorkflowUpdate;
		RelatedFindings?: Array<RelatedFinding>;
	}

	export enum ControlStatus { ENABLED = 0, DISABLED = 1 }

	export interface CreateActionTargetRequest {
		Name: string;
		Description: string;
		Id: string;
	}

	export interface CreateInsightRequest {
		Name: string;

		/**
		 * A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.
		 * Required
		 */
		Filters: AwsSecurityFindingFilters;
		GroupByAttribute: string;
	}

	export interface CreateMembersRequest {
		AccountDetails?: Array<AccountDetails>;
	}

	export interface DeclineInvitationsRequest {
		AccountIds: Array<string>;
	}

	export interface DeleteActionTargetRequest {
	}

	export interface DeleteInsightRequest {
	}

	export interface DeleteInvitationsRequest {
		AccountIds: Array<string>;
	}

	export interface DeleteMembersRequest {
		AccountIds?: Array<string>;
	}

	export interface DescribeActionTargetsRequest {
		ActionTargetArns?: Array<string>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface DescribeHubRequest {
	}

	export interface DescribeProductsRequest {
	}

	export interface DescribeStandardsControlsRequest {
	}

	export interface DescribeStandardsRequest {
	}

	export interface DisableImportFindingsForProductRequest {
	}

	export interface DisableSecurityHubRequest {
	}

	export interface DisassociateFromMasterAccountRequest {
	}

	export interface DisassociateMembersRequest {
		AccountIds?: Array<string>;
	}

	export interface EnableImportFindingsForProductRequest {
		ProductArn: string;
	}

	export interface EnableSecurityHubRequest {
		Tags?: TagMap;
		EnableDefaultStandards?: boolean;
	}

	export interface GetEnabledStandardsRequest {
		StandardsSubscriptionArns?: Array<string>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface GetFindingsRequest {

		/** A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight. */
		Filters?: AwsSecurityFindingFilters;
		SortCriteria?: Array<SortCriterion>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface GetInsightResultsRequest {
	}

	export interface GetInsightsRequest {
		InsightArns?: Array<string>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface GetInvitationsCountRequest {
	}

	export interface GetMasterAccountRequest {
	}

	export interface GetMembersRequest {
		AccountIds: Array<string>;
	}

	export interface InviteMembersRequest {
		AccountIds?: Array<string>;
	}

	export interface ListEnabledProductsForImportRequest {
	}

	export interface ListInvitationsRequest {
	}

	export interface ListMembersRequest {
	}

	export interface ListTagsForResourceRequest {
	}

	export enum Partition { aws = 0, aws_cn = 1, aws_us_gov = 2 }

	export enum SeverityRating { LOW = 0, MEDIUM = 1, HIGH = 2, CRITICAL = 3 }

	export enum SortOrder { asc = 0, desc = 1 }

	export enum StandardsStatus { PENDING = 0, READY = 1, FAILED = 2, DELETING = 3, INCOMPLETE = 4 }

	export interface TagResourceRequest {
		Tags: TagMap;
	}

	export interface UntagResourceRequest {
	}

	export interface UpdateActionTargetRequest {
		Name?: string;
		Description?: string;
	}

	export interface UpdateFindingsRequest {

		/**
		 * A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.
		 * Required
		 */
		Filters: AwsSecurityFindingFilters;

		/** The updated note. */
		Note?: NoteUpdate;
		RecordState?: AwsSecurityFindingRecordState;
	}

	export interface UpdateInsightRequest {
		Name?: string;

		/** A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight. */
		Filters?: AwsSecurityFindingFilters;
		GroupByAttribute?: string;
	}

	export interface UpdateStandardsControlRequest {
		ControlStatus?: StandardsControlControlStatus;
		DisabledReason?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Accepts the invitation to be a member account and be monitored by the Security Hub master account that the invitation was sent from.</p> <p>When the member account accepts the invitation, permission is granted to the master account to view findings generated in the member account.</p>
		 * Post master
		 * @return {AcceptInvitationResponse} Success
		 */
		AcceptInvitation(requestBody: AcceptInvitationPostBody): Observable<AcceptInvitationResponse> {
			return this.http.post<AcceptInvitationResponse>(this.baseUri + 'master', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides the details for the Security Hub master account for the current member account.
		 * Get master
		 * @return {GetMasterAccountResponse} Success
		 */
		GetMasterAccount(): Observable<GetMasterAccountResponse> {
			return this.http.get<GetMasterAccountResponse>(this.baseUri + 'master', {});
		}

		/**
		 * <p>Disables the standards specified by the provided <code>StandardsSubscriptionArns</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Security Standards</a> section of the <i>AWS Security Hub User Guide</i>.</p>
		 * Post standards/deregister
		 * @return {BatchDisableStandardsResponse} Success
		 */
		BatchDisableStandards(requestBody: BatchDisableStandardsPostBody): Observable<BatchDisableStandardsResponse> {
			return this.http.post<BatchDisableStandardsResponse>(this.baseUri + 'standards/deregister', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Enables the standards specified by the provided <code>StandardsArn</code>. To obtain the ARN for a standard, use the <code> <a>DescribeStandards</a> </code> operation.</p> <p>For more information, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Security Standards</a> section of the <i>AWS Security Hub User Guide</i>.</p>
		 * Post standards/register
		 * @return {BatchEnableStandardsResponse} Success
		 */
		BatchEnableStandards(requestBody: BatchEnableStandardsPostBody): Observable<BatchEnableStandardsResponse> {
			return this.http.post<BatchEnableStandardsResponse>(this.baseUri + 'standards/register', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Imports security findings generated from an integrated third-party product into Security Hub. This action is requested by the integrated product to import its findings into Security Hub.</p> <p>The maximum allowed size for a finding is 240 Kb. An error is returned for any finding larger than 240 Kb.</p> <p>After a finding is created, <code>BatchImportFindings</code> cannot be used to update the following finding fields and objects, which Security Hub customers use to manage their investigation workflow.</p> <ul> <li> <p> <code>Confidence</code> </p> </li> <li> <p> <code>Criticality</code> </p> </li> <li> <p> <code>Note</code> </p> </li> <li> <p> <code>RelatedFindings</code> </p> </li> <li> <p> <code>Severity</code> </p> </li> <li> <p> <code>Types</code> </p> </li> <li> <p> <code>UserDefinedFields</code> </p> </li> <li> <p> <code>VerificationState</code> </p> </li> <li> <p> <code>Workflow</code> </p> </li> </ul>
		 * Post findings/import
		 * @return {BatchImportFindingsResponse} Success
		 */
		BatchImportFindings(requestBody: BatchImportFindingsPostBody): Observable<BatchImportFindingsResponse> {
			return this.http.post<BatchImportFindingsResponse>(this.baseUri + 'findings/import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Used by Security Hub customers to update information about their investigation into a finding. Requested by master accounts or member accounts. Master accounts can update findings for their account and their member accounts. Member accounts can update findings for their account.</p> <p>Updates from <code>BatchUpdateFindings</code> do not affect the value of <code>UpdatedAt</code> for a finding.</p> <p>Master accounts can use <code>BatchUpdateFindings</code> to update the following finding fields and objects.</p> <ul> <li> <p> <code>Confidence</code> </p> </li> <li> <p> <code>Criticality</code> </p> </li> <li> <p> <code>Note</code> </p> </li> <li> <p> <code>RelatedFindings</code> </p> </li> <li> <p> <code>Severity</code> </p> </li> <li> <p> <code>Types</code> </p> </li> <li> <p> <code>UserDefinedFields</code> </p> </li> <li> <p> <code>VerificationState</code> </p> </li> <li> <p> <code>Workflow</code> </p> </li> </ul> <p>Member accounts can only use <code>BatchUpdateFindings</code> to update the Note object.</p>
		 * Patch findings/batchupdate
		 * @return {BatchUpdateFindingsResponse} Success
		 */
		BatchUpdateFindings(requestBody: BatchUpdateFindingsPatchBody): Observable<BatchUpdateFindingsResponse> {
			return this.http.patch<BatchUpdateFindingsResponse>(this.baseUri + 'findings/batchupdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a custom action target in Security Hub.</p> <p>You can use custom actions on findings and insights in Security Hub to trigger target actions in Amazon CloudWatch Events.</p>
		 * Post actionTargets
		 * @return {CreateActionTargetResponse} Success
		 */
		CreateActionTarget(requestBody: CreateActionTargetPostBody): Observable<CreateActionTargetResponse> {
			return this.http.post<CreateActionTargetResponse>(this.baseUri + 'actionTargets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a custom insight in Security Hub. An insight is a consolidation of findings that relate to a security issue that requires attention or remediation.</p> <p>To group the related findings in the insight, use the <code>GroupByAttribute</code>.</p>
		 * Post insights
		 * @return {CreateInsightResponse} Success
		 */
		CreateInsight(requestBody: CreateInsightPostBody): Observable<CreateInsightResponse> {
			return this.http.post<CreateInsightResponse>(this.baseUri + 'insights', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a member association in Security Hub between the specified accounts and the account used to make the request, which is the master account. To successfully create a member, you must use this action from an account that already has Security Hub enabled. To enable Security Hub, you can use the <code> <a>EnableSecurityHub</a> </code> operation.</p> <p>After you use <code>CreateMembers</code> to create member account associations in Security Hub, you must use the <code> <a>InviteMembers</a> </code> operation to invite the accounts to enable Security Hub and become member accounts in Security Hub.</p> <p>If the account owner accepts the invitation, the account becomes a member account in Security Hub. A permissions policy is added that permits the master account to view the findings generated in the member account. When Security Hub is enabled in the invited account, findings start to be sent to both the member and master accounts.</p> <p>To remove the association between the master and member accounts, use the <code> <a>DisassociateFromMasterAccount</a> </code> or <code> <a>DisassociateMembers</a> </code> operation.</p>
		 * Post members
		 * @return {CreateMembersResponse} Success
		 */
		CreateMembers(requestBody: CreateMembersPostBody): Observable<CreateMembersResponse> {
			return this.http.post<CreateMembersResponse>(this.baseUri + 'members', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists details about all member accounts for the current Security Hub master account.
		 * Get members
		 * @param {boolean} OnlyAssociated <p>Specifies which member accounts to include in the response based on their relationship status with the master account. The default value is <code>TRUE</code>.</p> <p>If <code>OnlyAssociated</code> is set to <code>TRUE</code>, the response includes member accounts whose relationship status with the master is set to <code>ENABLED</code> or <code>DISABLED</code>.</p> <p>If <code>OnlyAssociated</code> is set to <code>FALSE</code>, the response includes all existing member accounts. </p>
		 * @param {number} MaxResults The maximum number of items to return in the response. 
		 * @param {string} NextToken <p>The token that is required for pagination. On your first call to the <code>ListMembers</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p>
		 * @return {ListMembersResponse} Success
		 */
		ListMembers(OnlyAssociated: boolean, MaxResults: number, NextToken: string): Observable<ListMembersResponse> {
			return this.http.get<ListMembersResponse>(this.baseUri + 'members?OnlyAssociated=' + OnlyAssociated + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Declines invitations to become a member account.
		 * Post invitations/decline
		 * @return {DeclineInvitationsResponse} Success
		 */
		DeclineInvitations(requestBody: DeclineInvitationsPostBody): Observable<DeclineInvitationsResponse> {
			return this.http.post<DeclineInvitationsResponse>(this.baseUri + 'invitations/decline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a custom action target from Security Hub.</p> <p>Deleting a custom action target does not affect any findings or insights that were already sent to Amazon CloudWatch Events using the custom action.</p>
		 * Delete actionTargets/{ActionTargetArn}
		 * @param {string} ActionTargetArn The ARN of the custom action target to delete.
		 * @return {DeleteActionTargetResponse} Success
		 */
		DeleteActionTarget(ActionTargetArn: string): Observable<DeleteActionTargetResponse> {
			return this.http.delete<DeleteActionTargetResponse>(this.baseUri + 'actionTargets/' + (ActionTargetArn == null ? '' : encodeURIComponent(ActionTargetArn)), {});
		}

		/**
		 * Updates the name and description of a custom action target in Security Hub.
		 * Patch actionTargets/{ActionTargetArn}
		 * @param {string} ActionTargetArn The ARN of the custom action target to update.
		 * @return {UpdateActionTargetResponse} Success
		 */
		UpdateActionTarget(ActionTargetArn: string, requestBody: UpdateActionTargetPatchBody): Observable<UpdateActionTargetResponse> {
			return this.http.patch<UpdateActionTargetResponse>(this.baseUri + 'actionTargets/' + (ActionTargetArn == null ? '' : encodeURIComponent(ActionTargetArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the insight specified by the <code>InsightArn</code>.
		 * Delete insights/{InsightArn}
		 * @param {string} InsightArn The ARN of the insight to delete.
		 * @return {DeleteInsightResponse} Success
		 */
		DeleteInsight(InsightArn: string): Observable<DeleteInsightResponse> {
			return this.http.delete<DeleteInsightResponse>(this.baseUri + 'insights/' + (InsightArn == null ? '' : encodeURIComponent(InsightArn)), {});
		}

		/**
		 * Updates the Security Hub insight identified by the specified insight ARN.
		 * Patch insights/{InsightArn}
		 * @param {string} InsightArn The ARN of the insight that you want to update.
		 * @return {UpdateInsightResponse} Success
		 */
		UpdateInsight(InsightArn: string, requestBody: UpdateInsightPatchBody): Observable<UpdateInsightResponse> {
			return this.http.patch<UpdateInsightResponse>(this.baseUri + 'insights/' + (InsightArn == null ? '' : encodeURIComponent(InsightArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes invitations received by the AWS account to become a member account.
		 * Post invitations/delete
		 * @return {DeleteInvitationsResponse} Success
		 */
		DeleteInvitations(requestBody: DeleteInvitationsPostBody): Observable<DeleteInvitationsResponse> {
			return this.http.post<DeleteInvitationsResponse>(this.baseUri + 'invitations/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified member accounts from Security Hub.
		 * Post members/delete
		 * @return {DeleteMembersResponse} Success
		 */
		DeleteMembers(requestBody: DeleteMembersPostBody): Observable<DeleteMembersResponse> {
			return this.http.post<DeleteMembersResponse>(this.baseUri + 'members/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the custom action targets in Security Hub in your account.
		 * Post actionTargets/get
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeActionTargetsResponse} Success
		 */
		DescribeActionTargets(MaxResults: string, NextToken: string, requestBody: DescribeActionTargetsPostBody): Observable<DescribeActionTargetsResponse> {
			return this.http.post<DescribeActionTargetsResponse>(this.baseUri + 'actionTargets/get?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns details about the Hub resource in your account, including the <code>HubArn</code> and the time when you enabled Security Hub.
		 * Get accounts
		 * @param {string} HubArn The ARN of the Hub resource to retrieve.
		 * @return {DescribeHubResponse} Success
		 */
		DescribeHub(HubArn: string): Observable<DescribeHubResponse> {
			return this.http.get<DescribeHubResponse>(this.baseUri + 'accounts?HubArn=' + (HubArn == null ? '' : encodeURIComponent(HubArn)), {});
		}

		/**
		 * <p>Disables Security Hub in your account only in the current Region. To disable Security Hub in all Regions, you must submit one request per Region where you have enabled Security Hub.</p> <p>When you disable Security Hub for a master account, it doesn't disable Security Hub for any associated member accounts.</p> <p>When you disable Security Hub, your existing findings and insights and any Security Hub configuration settings are deleted after 90 days and cannot be recovered. Any standards that were enabled are disabled, and your master and member account associations are removed.</p> <p>If you want to save your existing findings, you must export them before you disable Security Hub.</p>
		 * Delete accounts
		 * @return {DisableSecurityHubResponse} Success
		 */
		DisableSecurityHub(): Observable<DisableSecurityHubResponse> {
			return this.http.delete<DisableSecurityHubResponse>(this.baseUri + 'accounts', {});
		}

		/**
		 * <p>Enables Security Hub for your account in the current Region or the Region you specify in the request.</p> <p>When you enable Security Hub, you grant to Security Hub the permissions necessary to gather findings from other services that are integrated with Security Hub.</p> <p>When you use the <code>EnableSecurityHub</code> operation to enable Security Hub, you also automatically enable the following standards.</p> <ul> <li> <p>CIS AWS Foundations</p> </li> <li> <p>AWS Foundational Security Best Practices</p> </li> </ul> <p>You do not enable the Payment Card Industry Data Security Standard (PCI DSS) standard. </p> <p>To not enable the automatically enabled standards, set <code>EnableDefaultStandards</code> to <code>false</code>.</p> <p>After you enable Security Hub, to enable a standard, use the <code> <a>BatchEnableStandards</a> </code> operation. To disable a standard, use the <code> <a>BatchDisableStandards</a> </code> operation.</p> <p>To learn more, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-settingup.html">Setting Up AWS Security Hub</a> in the <i>AWS Security Hub User Guide</i>.</p>
		 * Post accounts
		 * @return {EnableSecurityHubResponse} Success
		 */
		EnableSecurityHub(requestBody: EnableSecurityHubPostBody): Observable<EnableSecurityHubResponse> {
			return this.http.post<EnableSecurityHubResponse>(this.baseUri + 'accounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the available products that you can subscribe to and integrate with Security Hub in order to consolidate findings.
		 * Get products
		 * @param {string} NextToken <p>The token that is required for pagination. On your first call to the <code>DescribeProducts</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p>
		 * @param {number} MaxResults The maximum number of results to return.
		 * @return {DescribeProductsResponse} Success
		 */
		DescribeProducts(NextToken: string, MaxResults: number): Observable<DescribeProductsResponse> {
			return this.http.get<DescribeProductsResponse>(this.baseUri + 'products?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * <p>Returns a list of the available standards in Security Hub.</p> <p>For each standard, the results include the standard ARN, the name, and a description. </p>
		 * Get standards
		 * @param {string} NextToken <p>The token that is required for pagination. On your first call to the <code>DescribeStandards</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p>
		 * @param {number} MaxResults The maximum number of standards to return.
		 * @return {DescribeStandardsResponse} Success
		 */
		DescribeStandards(NextToken: string, MaxResults: number): Observable<DescribeStandardsResponse> {
			return this.http.get<DescribeStandardsResponse>(this.baseUri + 'standards?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * <p>Returns a list of security standards controls.</p> <p>For each control, the results include information about whether it is currently enabled, the severity, and a link to remediation information.</p>
		 * Get standards/controls/{StandardsSubscriptionArn}
		 * @param {string} StandardsSubscriptionArn The ARN of a resource that represents your subscription to a supported standard.
		 * @param {string} NextToken <p>The token that is required for pagination. On your first call to the <code>DescribeStandardsControls</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p>
		 * @param {number} MaxResults The maximum number of security standard controls to return.
		 * @return {DescribeStandardsControlsResponse} Success
		 */
		DescribeStandardsControls(StandardsSubscriptionArn: string, NextToken: string, MaxResults: number): Observable<DescribeStandardsControlsResponse> {
			return this.http.get<DescribeStandardsControlsResponse>(this.baseUri + 'standards/controls/' + (StandardsSubscriptionArn == null ? '' : encodeURIComponent(StandardsSubscriptionArn)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * Disables the integration of the specified product with Security Hub. After the integration is disabled, findings from that product are no longer sent to Security Hub.
		 * Delete productSubscriptions/{ProductSubscriptionArn}
		 * @param {string} ProductSubscriptionArn The ARN of the integrated product to disable the integration for.
		 * @return {DisableImportFindingsForProductResponse} Success
		 */
		DisableImportFindingsForProduct(ProductSubscriptionArn: string): Observable<DisableImportFindingsForProductResponse> {
			return this.http.delete<DisableImportFindingsForProductResponse>(this.baseUri + 'productSubscriptions/' + (ProductSubscriptionArn == null ? '' : encodeURIComponent(ProductSubscriptionArn)), {});
		}

		/**
		 * Disassociates the current Security Hub member account from the associated master account.
		 * Post master/disassociate
		 * @return {DisassociateFromMasterAccountResponse} Success
		 */
		DisassociateFromMasterAccount(): Observable<DisassociateFromMasterAccountResponse> {
			return this.http.post<DisassociateFromMasterAccountResponse>(this.baseUri + 'master/disassociate', null, {});
		}

		/**
		 * Disassociates the specified member accounts from the associated master account.
		 * Post members/disassociate
		 * @return {DisassociateMembersResponse} Success
		 */
		DisassociateMembers(requestBody: DisassociateMembersPostBody): Observable<DisassociateMembersResponse> {
			return this.http.post<DisassociateMembersResponse>(this.baseUri + 'members/disassociate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Enables the integration of a partner product with Security Hub. Integrated products send findings to Security Hub.</p> <p>When you enable a product integration, a permissions policy that grants permission for the product to send findings to Security Hub is applied.</p>
		 * Post productSubscriptions
		 * @return {EnableImportFindingsForProductResponse} Success
		 */
		EnableImportFindingsForProduct(requestBody: EnableImportFindingsForProductPostBody): Observable<EnableImportFindingsForProductResponse> {
			return this.http.post<EnableImportFindingsForProductResponse>(this.baseUri + 'productSubscriptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all findings-generating solutions (products) that you are subscribed to receive findings from in Security Hub.
		 * Get productSubscriptions
		 * @param {string} NextToken <p>The token that is required for pagination. On your first call to the <code>ListEnabledProductsForImport</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p>
		 * @param {number} MaxResults The maximum number of items to return in the response.
		 * @return {ListEnabledProductsForImportResponse} Success
		 */
		ListEnabledProductsForImport(NextToken: string, MaxResults: number): Observable<ListEnabledProductsForImportResponse> {
			return this.http.get<ListEnabledProductsForImportResponse>(this.baseUri + 'productSubscriptions?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * Returns a list of the standards that are currently enabled.
		 * Post standards/get
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetEnabledStandardsResponse} Success
		 */
		GetEnabledStandards(MaxResults: string, NextToken: string, requestBody: GetEnabledStandardsPostBody): Observable<GetEnabledStandardsResponse> {
			return this.http.post<GetEnabledStandardsResponse>(this.baseUri + 'standards/get?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of findings that match the specified criteria.
		 * Post findings
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetFindingsResponse} Success
		 */
		GetFindings(MaxResults: string, NextToken: string, requestBody: GetFindingsPostBody): Observable<GetFindingsResponse> {
			return this.http.post<GetFindingsResponse>(this.baseUri + 'findings?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <code>UpdateFindings</code> is deprecated. Instead of <code>UpdateFindings</code>, use <code>BatchUpdateFindings</code>.</p> <p>Updates the <code>Note</code> and <code>RecordState</code> of the Security Hub-aggregated findings that the filter attributes specify. Any member account that can view the finding also sees the update to the finding.</p>
		 * Patch findings
		 * @return {UpdateFindingsResponse} Success
		 */
		UpdateFindings(requestBody: UpdateFindingsPatchBody): Observable<UpdateFindingsResponse> {
			return this.http.patch<UpdateFindingsResponse>(this.baseUri + 'findings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the results of the Security Hub insight specified by the insight ARN.
		 * Get insights/results/{InsightArn}
		 * @param {string} InsightArn The ARN of the insight for which to return results.
		 * @return {GetInsightResultsResponse} Success
		 */
		GetInsightResults(InsightArn: string): Observable<GetInsightResultsResponse> {
			return this.http.get<GetInsightResultsResponse>(this.baseUri + 'insights/results/' + (InsightArn == null ? '' : encodeURIComponent(InsightArn)), {});
		}

		/**
		 * Lists and describes insights for the specified insight ARNs.
		 * Post insights/get
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetInsightsResponse} Success
		 */
		GetInsights(MaxResults: string, NextToken: string, requestBody: GetInsightsPostBody): Observable<GetInsightsResponse> {
			return this.http.post<GetInsightsResponse>(this.baseUri + 'insights/get?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the count of all Security Hub membership invitations that were sent to the current member account, not including the currently accepted invitation.
		 * Get invitations/count
		 * @return {GetInvitationsCountResponse} Success
		 */
		GetInvitationsCount(): Observable<GetInvitationsCountResponse> {
			return this.http.get<GetInvitationsCountResponse>(this.baseUri + 'invitations/count', {});
		}

		/**
		 * Returns the details for the Security Hub member accounts for the specified account IDs.
		 * Post members/get
		 * @return {GetMembersResponse} Success
		 */
		GetMembers(requestBody: GetMembersPostBody): Observable<GetMembersResponse> {
			return this.http.post<GetMembersResponse>(this.baseUri + 'members/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Invites other AWS accounts to become member accounts for the Security Hub master account that the invitation is sent from.</p> <p>Before you can use this action to invite a member, you must first use the <code> <a>CreateMembers</a> </code> action to create the member account in Security Hub.</p> <p>When the account owner accepts the invitation to become a member account and enables Security Hub, the master account can view the findings generated from the member account.</p>
		 * Post members/invite
		 * @return {InviteMembersResponse} Success
		 */
		InviteMembers(requestBody: InviteMembersPostBody): Observable<InviteMembersResponse> {
			return this.http.post<InviteMembersResponse>(this.baseUri + 'members/invite', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Security Hub membership invitations that were sent to the current AWS account.
		 * Get invitations
		 * @param {number} MaxResults The maximum number of items to return in the response. 
		 * @param {string} NextToken <p>The token that is required for pagination. On your first call to the <code>ListInvitations</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p>
		 * @return {ListInvitationsResponse} Success
		 */
		ListInvitations(MaxResults: number, NextToken: string): Observable<ListInvitationsResponse> {
			return this.http.get<ListInvitationsResponse>(this.baseUri + 'invitations?MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns a list of tags associated with a resource.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn The ARN of the resource to retrieve tags for.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * Adds one or more tags to a resource.
		 * Post tags/{ResourceArn}
		 * @param {string} ResourceArn The ARN of the resource to apply the tags to.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from a resource.
		 * Delete tags/{ResourceArn}#tagKeys
		 * @param {string} ResourceArn The ARN of the resource to remove the tags from.
		 * @param {Array<string>} tagKeys The tag keys associated with the tags to remove from the resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(ResourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Used to control whether an individual security standard control is enabled or disabled.
		 * Patch standards/control/{StandardsControlArn}
		 * @param {string} StandardsControlArn The ARN of the security standard control to enable or disable.
		 * @return {UpdateStandardsControlResponse} Success
		 */
		UpdateStandardsControl(StandardsControlArn: string, requestBody: UpdateStandardsControlPatchBody): Observable<UpdateStandardsControlResponse> {
			return this.http.patch<UpdateStandardsControlResponse>(this.baseUri + 'standards/control/' + (StandardsControlArn == null ? '' : encodeURIComponent(StandardsControlArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AcceptInvitationPostBody {

		/**
		 * The account ID of the Security Hub master account that sent the invitation.
		 * Required
		 * Pattern: .*\S.*
		 */
		MasterId: string;

		/**
		 * The ID of the invitation sent from the Security Hub master account.
		 * Required
		 * Pattern: .*\S.*
		 */
		InvitationId: string;
	}

	export interface BatchDisableStandardsPostBody {

		/**
		 * The ARNs of the standards subscriptions to disable.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		StandardsSubscriptionArns: Array<string>;
	}

	export interface BatchEnableStandardsPostBody {

		/**
		 * The list of standards checks to enable.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		StandardsSubscriptionRequests: Array<StandardsSubscriptionRequest>;
	}

	export interface BatchImportFindingsPostBody {

		/**
		 * A list of findings to import. To successfully import a finding, it must follow the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html">AWS Security Finding Format</a>. Maximum of 100 findings per request.
		 * Required
		 */
		Findings: Array<AwsSecurityFinding>;
	}

	export interface BatchUpdateFindingsPatchBody {

		/**
		 * <p>The list of findings to update. <code>BatchUpdateFindings</code> can be used to update up to 100 findings at a time.</p> <p>For each finding, the list provides the finding identifier and the ARN of the finding provider.</p>
		 * Required
		 */
		FindingIdentifiers: Array<AwsSecurityFindingIdentifier>;

		/** The updated note. */
		Note?: BatchUpdateFindingsPatchBodyNote;

		/** Updates to the severity information for a finding. */
		Severity?: BatchUpdateFindingsPatchBodySeverity;

		/** <p>Indicates the veracity of a finding.</p> <p>The available values for <code>VerificationState</code> are as follows.</p> <ul> <li> <p> <code>UNKNOWN</code> – The default disposition of a security finding</p> </li> <li> <p> <code>TRUE_POSITIVE</code> – The security finding is confirmed</p> </li> <li> <p> <code>FALSE_POSITIVE</code> – The security finding was determined to be a false alarm</p> </li> <li> <p> <code>BENIGN_POSITIVE</code> – A special case of <code>TRUE_POSITIVE</code> where the finding doesn't pose any threat, is expected, or both</p> </li> </ul> */
		VerificationState?: AwsSecurityFindingVerificationState;

		/**
		 * <p>The updated value for the finding confidence. Confidence is defined as the likelihood that a finding accurately identifies the behavior or issue that it was intended to identify.</p> <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100 means 100 percent confidence.</p>
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence?: number;

		/**
		 * <p>The updated value for the level of importance assigned to the resources associated with the findings.</p> <p>A score of 0 means that the underlying resources have no criticality, and a score of 100 is reserved for the most critical resources. </p>
		 * Minimum: 0
		 * Maximum: 100
		 */
		Criticality?: number;

		/** <p>One or more finding types in the format of namespace/category/classifier that classify a finding.</p> <p>Valid namespace values are as follows.</p> <ul> <li> <p>Software and Configuration Checks</p> </li> <li> <p>TTPs</p> </li> <li> <p>Effects</p> </li> <li> <p>Unusual Behaviors</p> </li> <li> <p>Sensitive Data Identifications </p> </li> </ul> */
		Types?: Array<string>;

		/** A list of name/value string pairs associated with the finding. These are custom, user-defined fields added to a finding. */
		UserDefinedFields?: {[id: string]: string };

		/** Used to update information about the investigation into the finding. */
		Workflow?: BatchUpdateFindingsPatchBodyWorkflow;

		/** A list of findings that are related to the updated findings. */
		RelatedFindings?: Array<RelatedFinding>;
	}

	export interface BatchUpdateFindingsPatchBodyNote {
		Text?: string;
		UpdatedBy?: string;
	}

	export interface BatchUpdateFindingsPatchBodySeverity {
		Normalized?: number;
		Product?: number;
		Label?: SeverityLabel;
	}

	export interface BatchUpdateFindingsPatchBodyWorkflow {
		Status?: WorkflowStatus;
	}

	export interface CreateActionTargetPostBody {

		/**
		 * The name of the custom action target.
		 * Required
		 * Pattern: .*\S.*
		 */
		Name: string;

		/**
		 * The description for the custom action target.
		 * Required
		 * Pattern: .*\S.*
		 */
		Description: string;

		/**
		 * The ID for the custom action target.
		 * Required
		 * Pattern: .*\S.*
		 */
		Id: string;
	}

	export interface CreateInsightPostBody {

		/**
		 * The name of the custom insight to create.
		 * Required
		 * Pattern: .*\S.*
		 */
		Name: string;

		/**
		 * A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.
		 * Required
		 */
		Filters: CreateInsightPostBodyFilters;

		/**
		 * The attribute used to group the findings for the insight. The grouping attribute identifies the type of item that the insight applies to. For example, if an insight is grouped by resource identifier, then the insight produces a list of resource identifiers.
		 * Required
		 * Pattern: .*\S.*
		 */
		GroupByAttribute: string;
	}

	export interface CreateInsightPostBodyFilters {
		ProductArn?: Array<StringFilter>;
		AwsAccountId?: Array<StringFilter>;
		Id?: Array<StringFilter>;
		GeneratorId?: Array<StringFilter>;
		Type?: Array<StringFilter>;
		FirstObservedAt?: Array<DateFilter>;
		LastObservedAt?: Array<DateFilter>;
		CreatedAt?: Array<DateFilter>;
		UpdatedAt?: Array<DateFilter>;
		SeverityProduct?: Array<NumberFilter>;
		SeverityNormalized?: Array<NumberFilter>;
		SeverityLabel?: Array<StringFilter>;
		Confidence?: Array<NumberFilter>;
		Criticality?: Array<NumberFilter>;
		Title?: Array<StringFilter>;
		Description?: Array<StringFilter>;
		RecommendationText?: Array<StringFilter>;
		SourceUrl?: Array<StringFilter>;
		ProductFields?: Array<MapFilter>;
		ProductName?: Array<StringFilter>;
		CompanyName?: Array<StringFilter>;
		UserDefinedFields?: Array<MapFilter>;
		MalwareName?: Array<StringFilter>;
		MalwareType?: Array<StringFilter>;
		MalwarePath?: Array<StringFilter>;
		MalwareState?: Array<StringFilter>;
		NetworkDirection?: Array<StringFilter>;
		NetworkProtocol?: Array<StringFilter>;
		NetworkSourceIpV4?: Array<IpFilter>;
		NetworkSourceIpV6?: Array<IpFilter>;
		NetworkSourcePort?: Array<NumberFilter>;
		NetworkSourceDomain?: Array<StringFilter>;
		NetworkSourceMac?: Array<StringFilter>;
		NetworkDestinationIpV4?: Array<IpFilter>;
		NetworkDestinationIpV6?: Array<IpFilter>;
		NetworkDestinationPort?: Array<NumberFilter>;
		NetworkDestinationDomain?: Array<StringFilter>;
		ProcessName?: Array<StringFilter>;
		ProcessPath?: Array<StringFilter>;
		ProcessPid?: Array<NumberFilter>;
		ProcessParentPid?: Array<NumberFilter>;
		ProcessLaunchedAt?: Array<DateFilter>;
		ProcessTerminatedAt?: Array<DateFilter>;
		ThreatIntelIndicatorType?: Array<StringFilter>;
		ThreatIntelIndicatorValue?: Array<StringFilter>;
		ThreatIntelIndicatorCategory?: Array<StringFilter>;
		ThreatIntelIndicatorLastObservedAt?: Array<DateFilter>;
		ThreatIntelIndicatorSource?: Array<StringFilter>;
		ThreatIntelIndicatorSourceUrl?: Array<StringFilter>;
		ResourceType?: Array<StringFilter>;
		ResourceId?: Array<StringFilter>;
		ResourcePartition?: Array<StringFilter>;
		ResourceRegion?: Array<StringFilter>;
		ResourceTags?: Array<MapFilter>;
		ResourceAwsEc2InstanceType?: Array<StringFilter>;
		ResourceAwsEc2InstanceImageId?: Array<StringFilter>;
		ResourceAwsEc2InstanceIpV4Addresses?: Array<IpFilter>;
		ResourceAwsEc2InstanceIpV6Addresses?: Array<IpFilter>;
		ResourceAwsEc2InstanceKeyName?: Array<StringFilter>;
		ResourceAwsEc2InstanceIamInstanceProfileArn?: Array<StringFilter>;
		ResourceAwsEc2InstanceVpcId?: Array<StringFilter>;
		ResourceAwsEc2InstanceSubnetId?: Array<StringFilter>;
		ResourceAwsEc2InstanceLaunchedAt?: Array<DateFilter>;
		ResourceAwsS3BucketOwnerId?: Array<StringFilter>;
		ResourceAwsS3BucketOwnerName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyUserName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyStatus?: Array<StringFilter>;
		ResourceAwsIamAccessKeyCreatedAt?: Array<DateFilter>;
		ResourceContainerName?: Array<StringFilter>;
		ResourceContainerImageId?: Array<StringFilter>;
		ResourceContainerImageName?: Array<StringFilter>;
		ResourceContainerLaunchedAt?: Array<DateFilter>;
		ResourceDetailsOther?: Array<MapFilter>;
		ComplianceStatus?: Array<StringFilter>;
		VerificationState?: Array<StringFilter>;
		WorkflowState?: Array<StringFilter>;
		WorkflowStatus?: Array<StringFilter>;
		RecordState?: Array<StringFilter>;
		RelatedFindingsProductArn?: Array<StringFilter>;
		RelatedFindingsId?: Array<StringFilter>;
		NoteText?: Array<StringFilter>;
		NoteUpdatedAt?: Array<DateFilter>;
		NoteUpdatedBy?: Array<StringFilter>;
		Keyword?: Array<KeywordFilter>;
	}

	export interface CreateMembersPostBody {

		/** The list of accounts to associate with the Security Hub master account. For each account, the list includes the account ID and the email address. */
		AccountDetails?: Array<AccountDetails>;
	}

	export interface DeclineInvitationsPostBody {

		/**
		 * The list of account IDs for the accounts from which to decline the invitations to Security Hub.
		 * Required
		 */
		AccountIds: Array<string>;
	}

	export interface UpdateActionTargetPatchBody {

		/**
		 * The updated name of the custom action target.
		 * Pattern: .*\S.*
		 */
		Name?: string;

		/**
		 * The updated description for the custom action target.
		 * Pattern: .*\S.*
		 */
		Description?: string;
	}

	export interface UpdateInsightPatchBody {

		/**
		 * The updated name for the insight.
		 * Pattern: .*\S.*
		 */
		Name?: string;

		/** A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight. */
		Filters?: UpdateInsightPatchBodyFilters;

		/**
		 * The updated <code>GroupBy</code> attribute that defines this insight.
		 * Pattern: .*\S.*
		 */
		GroupByAttribute?: string;
	}

	export interface UpdateInsightPatchBodyFilters {
		ProductArn?: Array<StringFilter>;
		AwsAccountId?: Array<StringFilter>;
		Id?: Array<StringFilter>;
		GeneratorId?: Array<StringFilter>;
		Type?: Array<StringFilter>;
		FirstObservedAt?: Array<DateFilter>;
		LastObservedAt?: Array<DateFilter>;
		CreatedAt?: Array<DateFilter>;
		UpdatedAt?: Array<DateFilter>;
		SeverityProduct?: Array<NumberFilter>;
		SeverityNormalized?: Array<NumberFilter>;
		SeverityLabel?: Array<StringFilter>;
		Confidence?: Array<NumberFilter>;
		Criticality?: Array<NumberFilter>;
		Title?: Array<StringFilter>;
		Description?: Array<StringFilter>;
		RecommendationText?: Array<StringFilter>;
		SourceUrl?: Array<StringFilter>;
		ProductFields?: Array<MapFilter>;
		ProductName?: Array<StringFilter>;
		CompanyName?: Array<StringFilter>;
		UserDefinedFields?: Array<MapFilter>;
		MalwareName?: Array<StringFilter>;
		MalwareType?: Array<StringFilter>;
		MalwarePath?: Array<StringFilter>;
		MalwareState?: Array<StringFilter>;
		NetworkDirection?: Array<StringFilter>;
		NetworkProtocol?: Array<StringFilter>;
		NetworkSourceIpV4?: Array<IpFilter>;
		NetworkSourceIpV6?: Array<IpFilter>;
		NetworkSourcePort?: Array<NumberFilter>;
		NetworkSourceDomain?: Array<StringFilter>;
		NetworkSourceMac?: Array<StringFilter>;
		NetworkDestinationIpV4?: Array<IpFilter>;
		NetworkDestinationIpV6?: Array<IpFilter>;
		NetworkDestinationPort?: Array<NumberFilter>;
		NetworkDestinationDomain?: Array<StringFilter>;
		ProcessName?: Array<StringFilter>;
		ProcessPath?: Array<StringFilter>;
		ProcessPid?: Array<NumberFilter>;
		ProcessParentPid?: Array<NumberFilter>;
		ProcessLaunchedAt?: Array<DateFilter>;
		ProcessTerminatedAt?: Array<DateFilter>;
		ThreatIntelIndicatorType?: Array<StringFilter>;
		ThreatIntelIndicatorValue?: Array<StringFilter>;
		ThreatIntelIndicatorCategory?: Array<StringFilter>;
		ThreatIntelIndicatorLastObservedAt?: Array<DateFilter>;
		ThreatIntelIndicatorSource?: Array<StringFilter>;
		ThreatIntelIndicatorSourceUrl?: Array<StringFilter>;
		ResourceType?: Array<StringFilter>;
		ResourceId?: Array<StringFilter>;
		ResourcePartition?: Array<StringFilter>;
		ResourceRegion?: Array<StringFilter>;
		ResourceTags?: Array<MapFilter>;
		ResourceAwsEc2InstanceType?: Array<StringFilter>;
		ResourceAwsEc2InstanceImageId?: Array<StringFilter>;
		ResourceAwsEc2InstanceIpV4Addresses?: Array<IpFilter>;
		ResourceAwsEc2InstanceIpV6Addresses?: Array<IpFilter>;
		ResourceAwsEc2InstanceKeyName?: Array<StringFilter>;
		ResourceAwsEc2InstanceIamInstanceProfileArn?: Array<StringFilter>;
		ResourceAwsEc2InstanceVpcId?: Array<StringFilter>;
		ResourceAwsEc2InstanceSubnetId?: Array<StringFilter>;
		ResourceAwsEc2InstanceLaunchedAt?: Array<DateFilter>;
		ResourceAwsS3BucketOwnerId?: Array<StringFilter>;
		ResourceAwsS3BucketOwnerName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyUserName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyStatus?: Array<StringFilter>;
		ResourceAwsIamAccessKeyCreatedAt?: Array<DateFilter>;
		ResourceContainerName?: Array<StringFilter>;
		ResourceContainerImageId?: Array<StringFilter>;
		ResourceContainerImageName?: Array<StringFilter>;
		ResourceContainerLaunchedAt?: Array<DateFilter>;
		ResourceDetailsOther?: Array<MapFilter>;
		ComplianceStatus?: Array<StringFilter>;
		VerificationState?: Array<StringFilter>;
		WorkflowState?: Array<StringFilter>;
		WorkflowStatus?: Array<StringFilter>;
		RecordState?: Array<StringFilter>;
		RelatedFindingsProductArn?: Array<StringFilter>;
		RelatedFindingsId?: Array<StringFilter>;
		NoteText?: Array<StringFilter>;
		NoteUpdatedAt?: Array<DateFilter>;
		NoteUpdatedBy?: Array<StringFilter>;
		Keyword?: Array<KeywordFilter>;
	}

	export interface DeleteInvitationsPostBody {

		/**
		 * The list of the account IDs that sent the invitations to delete.
		 * Required
		 */
		AccountIds: Array<string>;
	}

	export interface DeleteMembersPostBody {

		/** The list of account IDs for the member accounts to delete. */
		AccountIds?: Array<string>;
	}

	export interface DescribeActionTargetsPostBody {

		/** A list of custom action target ARNs for the custom action targets to retrieve. */
		ActionTargetArns?: Array<string>;

		/** <p>The token that is required for pagination. On your first call to the <code>DescribeActionTargets</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p> */
		NextToken?: string;

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number;
	}

	export interface EnableSecurityHubPostBody {

		/** The tags to add to the hub resource when you enable Security Hub. */
		Tags?: {[id: string]: string };

		/** Whether to enable the security standards that Security Hub has designated as automatically enabled. If you do not provide a value for <code>EnableDefaultStandards</code>, it is set to <code>true</code>. To not enable the automatically enabled standards, set <code>EnableDefaultStandards</code> to <code>false</code>. */
		EnableDefaultStandards?: boolean;
	}

	export interface DisassociateMembersPostBody {

		/** The account IDs of the member accounts to disassociate from the master account. */
		AccountIds?: Array<string>;
	}

	export interface EnableImportFindingsForProductPostBody {

		/**
		 * The ARN of the product to enable the integration for.
		 * Required
		 * Pattern: .*\S.*
		 */
		ProductArn: string;
	}

	export interface GetEnabledStandardsPostBody {

		/**
		 * The list of the standards subscription ARNs for the standards to retrieve.
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		StandardsSubscriptionArns?: Array<string>;

		/** <p>The token that is required for pagination. On your first call to the <code>GetEnabledStandards</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p> */
		NextToken?: string;

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number;
	}

	export interface GetFindingsPostBody {

		/** A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight. */
		Filters?: GetFindingsPostBodyFilters;

		/** The finding attributes used to sort the list of returned findings. */
		SortCriteria?: Array<SortCriterion>;

		/** <p>The token that is required for pagination. On your first call to the <code>GetFindings</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p> */
		NextToken?: string;

		/**
		 * The maximum number of findings to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number;
	}

	export interface GetFindingsPostBodyFilters {
		ProductArn?: Array<StringFilter>;
		AwsAccountId?: Array<StringFilter>;
		Id?: Array<StringFilter>;
		GeneratorId?: Array<StringFilter>;
		Type?: Array<StringFilter>;
		FirstObservedAt?: Array<DateFilter>;
		LastObservedAt?: Array<DateFilter>;
		CreatedAt?: Array<DateFilter>;
		UpdatedAt?: Array<DateFilter>;
		SeverityProduct?: Array<NumberFilter>;
		SeverityNormalized?: Array<NumberFilter>;
		SeverityLabel?: Array<StringFilter>;
		Confidence?: Array<NumberFilter>;
		Criticality?: Array<NumberFilter>;
		Title?: Array<StringFilter>;
		Description?: Array<StringFilter>;
		RecommendationText?: Array<StringFilter>;
		SourceUrl?: Array<StringFilter>;
		ProductFields?: Array<MapFilter>;
		ProductName?: Array<StringFilter>;
		CompanyName?: Array<StringFilter>;
		UserDefinedFields?: Array<MapFilter>;
		MalwareName?: Array<StringFilter>;
		MalwareType?: Array<StringFilter>;
		MalwarePath?: Array<StringFilter>;
		MalwareState?: Array<StringFilter>;
		NetworkDirection?: Array<StringFilter>;
		NetworkProtocol?: Array<StringFilter>;
		NetworkSourceIpV4?: Array<IpFilter>;
		NetworkSourceIpV6?: Array<IpFilter>;
		NetworkSourcePort?: Array<NumberFilter>;
		NetworkSourceDomain?: Array<StringFilter>;
		NetworkSourceMac?: Array<StringFilter>;
		NetworkDestinationIpV4?: Array<IpFilter>;
		NetworkDestinationIpV6?: Array<IpFilter>;
		NetworkDestinationPort?: Array<NumberFilter>;
		NetworkDestinationDomain?: Array<StringFilter>;
		ProcessName?: Array<StringFilter>;
		ProcessPath?: Array<StringFilter>;
		ProcessPid?: Array<NumberFilter>;
		ProcessParentPid?: Array<NumberFilter>;
		ProcessLaunchedAt?: Array<DateFilter>;
		ProcessTerminatedAt?: Array<DateFilter>;
		ThreatIntelIndicatorType?: Array<StringFilter>;
		ThreatIntelIndicatorValue?: Array<StringFilter>;
		ThreatIntelIndicatorCategory?: Array<StringFilter>;
		ThreatIntelIndicatorLastObservedAt?: Array<DateFilter>;
		ThreatIntelIndicatorSource?: Array<StringFilter>;
		ThreatIntelIndicatorSourceUrl?: Array<StringFilter>;
		ResourceType?: Array<StringFilter>;
		ResourceId?: Array<StringFilter>;
		ResourcePartition?: Array<StringFilter>;
		ResourceRegion?: Array<StringFilter>;
		ResourceTags?: Array<MapFilter>;
		ResourceAwsEc2InstanceType?: Array<StringFilter>;
		ResourceAwsEc2InstanceImageId?: Array<StringFilter>;
		ResourceAwsEc2InstanceIpV4Addresses?: Array<IpFilter>;
		ResourceAwsEc2InstanceIpV6Addresses?: Array<IpFilter>;
		ResourceAwsEc2InstanceKeyName?: Array<StringFilter>;
		ResourceAwsEc2InstanceIamInstanceProfileArn?: Array<StringFilter>;
		ResourceAwsEc2InstanceVpcId?: Array<StringFilter>;
		ResourceAwsEc2InstanceSubnetId?: Array<StringFilter>;
		ResourceAwsEc2InstanceLaunchedAt?: Array<DateFilter>;
		ResourceAwsS3BucketOwnerId?: Array<StringFilter>;
		ResourceAwsS3BucketOwnerName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyUserName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyStatus?: Array<StringFilter>;
		ResourceAwsIamAccessKeyCreatedAt?: Array<DateFilter>;
		ResourceContainerName?: Array<StringFilter>;
		ResourceContainerImageId?: Array<StringFilter>;
		ResourceContainerImageName?: Array<StringFilter>;
		ResourceContainerLaunchedAt?: Array<DateFilter>;
		ResourceDetailsOther?: Array<MapFilter>;
		ComplianceStatus?: Array<StringFilter>;
		VerificationState?: Array<StringFilter>;
		WorkflowState?: Array<StringFilter>;
		WorkflowStatus?: Array<StringFilter>;
		RecordState?: Array<StringFilter>;
		RelatedFindingsProductArn?: Array<StringFilter>;
		RelatedFindingsId?: Array<StringFilter>;
		NoteText?: Array<StringFilter>;
		NoteUpdatedAt?: Array<DateFilter>;
		NoteUpdatedBy?: Array<StringFilter>;
		Keyword?: Array<KeywordFilter>;
	}

	export interface UpdateFindingsPatchBody {

		/**
		 * A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.
		 * Required
		 */
		Filters: UpdateFindingsPatchBodyFilters;

		/** The updated note. */
		Note?: UpdateFindingsPatchBodyNote;

		/** The updated record state for the finding. */
		RecordState?: AwsSecurityFindingRecordState;
	}

	export interface UpdateFindingsPatchBodyFilters {
		ProductArn?: Array<StringFilter>;
		AwsAccountId?: Array<StringFilter>;
		Id?: Array<StringFilter>;
		GeneratorId?: Array<StringFilter>;
		Type?: Array<StringFilter>;
		FirstObservedAt?: Array<DateFilter>;
		LastObservedAt?: Array<DateFilter>;
		CreatedAt?: Array<DateFilter>;
		UpdatedAt?: Array<DateFilter>;
		SeverityProduct?: Array<NumberFilter>;
		SeverityNormalized?: Array<NumberFilter>;
		SeverityLabel?: Array<StringFilter>;
		Confidence?: Array<NumberFilter>;
		Criticality?: Array<NumberFilter>;
		Title?: Array<StringFilter>;
		Description?: Array<StringFilter>;
		RecommendationText?: Array<StringFilter>;
		SourceUrl?: Array<StringFilter>;
		ProductFields?: Array<MapFilter>;
		ProductName?: Array<StringFilter>;
		CompanyName?: Array<StringFilter>;
		UserDefinedFields?: Array<MapFilter>;
		MalwareName?: Array<StringFilter>;
		MalwareType?: Array<StringFilter>;
		MalwarePath?: Array<StringFilter>;
		MalwareState?: Array<StringFilter>;
		NetworkDirection?: Array<StringFilter>;
		NetworkProtocol?: Array<StringFilter>;
		NetworkSourceIpV4?: Array<IpFilter>;
		NetworkSourceIpV6?: Array<IpFilter>;
		NetworkSourcePort?: Array<NumberFilter>;
		NetworkSourceDomain?: Array<StringFilter>;
		NetworkSourceMac?: Array<StringFilter>;
		NetworkDestinationIpV4?: Array<IpFilter>;
		NetworkDestinationIpV6?: Array<IpFilter>;
		NetworkDestinationPort?: Array<NumberFilter>;
		NetworkDestinationDomain?: Array<StringFilter>;
		ProcessName?: Array<StringFilter>;
		ProcessPath?: Array<StringFilter>;
		ProcessPid?: Array<NumberFilter>;
		ProcessParentPid?: Array<NumberFilter>;
		ProcessLaunchedAt?: Array<DateFilter>;
		ProcessTerminatedAt?: Array<DateFilter>;
		ThreatIntelIndicatorType?: Array<StringFilter>;
		ThreatIntelIndicatorValue?: Array<StringFilter>;
		ThreatIntelIndicatorCategory?: Array<StringFilter>;
		ThreatIntelIndicatorLastObservedAt?: Array<DateFilter>;
		ThreatIntelIndicatorSource?: Array<StringFilter>;
		ThreatIntelIndicatorSourceUrl?: Array<StringFilter>;
		ResourceType?: Array<StringFilter>;
		ResourceId?: Array<StringFilter>;
		ResourcePartition?: Array<StringFilter>;
		ResourceRegion?: Array<StringFilter>;
		ResourceTags?: Array<MapFilter>;
		ResourceAwsEc2InstanceType?: Array<StringFilter>;
		ResourceAwsEc2InstanceImageId?: Array<StringFilter>;
		ResourceAwsEc2InstanceIpV4Addresses?: Array<IpFilter>;
		ResourceAwsEc2InstanceIpV6Addresses?: Array<IpFilter>;
		ResourceAwsEc2InstanceKeyName?: Array<StringFilter>;
		ResourceAwsEc2InstanceIamInstanceProfileArn?: Array<StringFilter>;
		ResourceAwsEc2InstanceVpcId?: Array<StringFilter>;
		ResourceAwsEc2InstanceSubnetId?: Array<StringFilter>;
		ResourceAwsEc2InstanceLaunchedAt?: Array<DateFilter>;
		ResourceAwsS3BucketOwnerId?: Array<StringFilter>;
		ResourceAwsS3BucketOwnerName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyUserName?: Array<StringFilter>;
		ResourceAwsIamAccessKeyStatus?: Array<StringFilter>;
		ResourceAwsIamAccessKeyCreatedAt?: Array<DateFilter>;
		ResourceContainerName?: Array<StringFilter>;
		ResourceContainerImageId?: Array<StringFilter>;
		ResourceContainerImageName?: Array<StringFilter>;
		ResourceContainerLaunchedAt?: Array<DateFilter>;
		ResourceDetailsOther?: Array<MapFilter>;
		ComplianceStatus?: Array<StringFilter>;
		VerificationState?: Array<StringFilter>;
		WorkflowState?: Array<StringFilter>;
		WorkflowStatus?: Array<StringFilter>;
		RecordState?: Array<StringFilter>;
		RelatedFindingsProductArn?: Array<StringFilter>;
		RelatedFindingsId?: Array<StringFilter>;
		NoteText?: Array<StringFilter>;
		NoteUpdatedAt?: Array<DateFilter>;
		NoteUpdatedBy?: Array<StringFilter>;
		Keyword?: Array<KeywordFilter>;
	}

	export interface UpdateFindingsPatchBodyNote {
		Text?: string;
		UpdatedBy?: string;
	}

	export interface GetInsightsPostBody {

		/** The ARNs of the insights to describe. If you do not provide any insight ARNs, then <code>GetInsights</code> returns all of your custom insights. It does not return any managed insights. */
		InsightArns?: Array<string>;

		/** <p>The token that is required for pagination. On your first call to the <code>GetInsights</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p> */
		NextToken?: string;

		/**
		 * The maximum number of items to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number;
	}

	export interface GetMembersPostBody {

		/**
		 * The list of account IDs for the Security Hub member accounts to return the details for.
		 * Required
		 */
		AccountIds: Array<string>;
	}

	export interface InviteMembersPostBody {

		/** The list of account IDs of the AWS accounts to invite to Security Hub as members. */
		AccountIds?: Array<string>;
	}

	export interface TagResourcePostBody {

		/**
		 * The tags to add to the resource.
		 * Required
		 */
		Tags: {[id: string]: string };
	}

	export interface UpdateStandardsControlPatchBody {

		/** The updated status of the security standard control. */
		ControlStatus?: StandardsControlControlStatus;

		/**
		 * A description of the reason why you are disabling a security standard control.
		 * Pattern: .*\S.*
		 */
		DisabledReason?: string;
	}

}

