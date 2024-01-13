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

	export interface InternalException {
	}
	export interface InternalExceptionFormProperties {
	}
	export function CreateInternalExceptionFormGroup() {
		return new FormGroup<InternalExceptionFormProperties>({
		});

	}

	export interface InvalidInputException {
	}
	export interface InvalidInputExceptionFormProperties {
	}
	export function CreateInvalidInputExceptionFormGroup() {
		return new FormGroup<InvalidInputExceptionFormProperties>({
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
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

	export interface InvalidAccessException {
	}
	export interface InvalidAccessExceptionFormProperties {
	}
	export function CreateInvalidAccessExceptionFormGroup() {
		return new FormGroup<InvalidAccessExceptionFormProperties>({
		});

	}

	export interface BatchDisableStandardsResponse {
		StandardsSubscriptions?: Array<StandardsSubscription>;
	}
	export interface BatchDisableStandardsResponseFormProperties {
	}
	export function CreateBatchDisableStandardsResponseFormGroup() {
		return new FormGroup<BatchDisableStandardsResponseFormProperties>({
		});

	}


	/** A resource that represents your subscription to a supported standard. */
	export interface StandardsSubscription {

		/** Required */
		StandardsSubscriptionArn: string;

		/** Required */
		StandardsArn: string;

		/** Required */
		StandardsInput: StandardsInputParameterMap;

		/** Required */
		StandardsStatus: StandardsSubscriptionStandardsStatus;
	}

	/** A resource that represents your subscription to a supported standard. */
	export interface StandardsSubscriptionFormProperties {

		/** Required */
		StandardsSubscriptionArn: FormControl<string | null | undefined>,

		/** Required */
		StandardsArn: FormControl<string | null | undefined>,

		/** Required */
		StandardsStatus: FormControl<StandardsSubscriptionStandardsStatus | null | undefined>,
	}
	export function CreateStandardsSubscriptionFormGroup() {
		return new FormGroup<StandardsSubscriptionFormProperties>({
			StandardsSubscriptionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			StandardsArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			StandardsStatus: new FormControl<StandardsSubscriptionStandardsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StandardsInputParameterMap {
	}
	export interface StandardsInputParameterMapFormProperties {
	}
	export function CreateStandardsInputParameterMapFormGroup() {
		return new FormGroup<StandardsInputParameterMapFormProperties>({
		});

	}

	export enum StandardsSubscriptionStandardsStatus { PENDING = 0, READY = 1, FAILED = 2, DELETING = 3, INCOMPLETE = 4 }

	export interface BatchEnableStandardsResponse {
		StandardsSubscriptions?: Array<StandardsSubscription>;
	}
	export interface BatchEnableStandardsResponseFormProperties {
	}
	export function CreateBatchEnableStandardsResponseFormGroup() {
		return new FormGroup<BatchEnableStandardsResponseFormProperties>({
		});

	}


	/** The standard that you want to enable. */
	export interface StandardsSubscriptionRequest {

		/** Required */
		StandardsArn: string;
		StandardsInput?: StandardsInputParameterMap;
	}

	/** The standard that you want to enable. */
	export interface StandardsSubscriptionRequestFormProperties {

		/** Required */
		StandardsArn: FormControl<string | null | undefined>,
	}
	export function CreateStandardsSubscriptionRequestFormGroup() {
		return new FormGroup<StandardsSubscriptionRequestFormProperties>({
			StandardsArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

	export interface BatchImportFindingsResponse {

		/** Required */
		FailedCount: number;

		/** Required */
		SuccessCount: number;
		FailedFindings?: Array<ImportFindingsError>;
	}
	export interface BatchImportFindingsResponseFormProperties {

		/** Required */
		FailedCount: FormControl<number | null | undefined>,

		/** Required */
		SuccessCount: FormControl<number | null | undefined>,
	}
	export function CreateBatchImportFindingsResponseFormGroup() {
		return new FormGroup<BatchImportFindingsResponseFormProperties>({
			FailedCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SuccessCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The list of the findings that cannot be imported. For each finding, the list provides the error. */
	export interface ImportFindingsError {

		/** Required */
		Id: string;

		/** Required */
		ErrorCode: string;

		/** Required */
		ErrorMessage: string;
	}

	/** The list of the findings that cannot be imported. For each finding, the list provides the error. */
	export interface ImportFindingsErrorFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		ErrorCode: FormControl<string | null | undefined>,

		/** Required */
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateImportFindingsErrorFormGroup() {
		return new FormGroup<ImportFindingsErrorFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			ErrorCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			ErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}


	/** <p>Provides consistent format for the contents of the Security Hub-aggregated findings. <code>AwsSecurityFinding</code> format enables you to share findings between AWS security services and third-party solutions, and security standards checks.</p> <note> <p>A finding is a potential security issue generated either by AWS services (Amazon GuardDuty, Amazon Inspector, and Amazon Macie) or by the integrated third-party solutions and standards checks.</p> </note> */
	export interface AwsSecurityFinding {

		/** Required */
		SchemaVersion: string;

		/** Required */
		Id: string;

		/** Required */
		ProductArn: string;

		/** Required */
		GeneratorId: string;

		/** Required */
		AwsAccountId: string;

		/** Required */
		Types: Array<string>;
		FirstObservedAt?: string | null;
		LastObservedAt?: string | null;

		/** Required */
		CreatedAt: string;

		/** Required */
		UpdatedAt: string;

		/**
		 * The severity of the finding.
		 * Required
		 */
		Severity: Severity;
		Confidence?: number | null;
		Criticality?: number | null;

		/** Required */
		Title: string;

		/** Required */
		Description: string;

		/** Details about the remediation steps for a finding. */
		Remediation?: Remediation;
		SourceUrl?: string | null;
		ProductFields?: FieldMap;
		UserDefinedFields?: FieldMap;
		Malware?: Array<Malware>;

		/** The details of network-related information about a finding. */
		Network?: Network;

		/** The details of process-related information about a finding. */
		Process?: ProcessDetails;
		ThreatIntelIndicators?: Array<ThreatIntelIndicator>;

		/** Required */
		Resources: Array<Resource>;

		/** Contains finding details that are specific to control-based findings. Only returned for findings generated from controls. */
		Compliance?: Compliance;
		VerificationState?: AwsSecurityFindingVerificationState | null;

		/** This field is deprecated, use Workflow.Status instead. */
		WorkflowState?: AwsSecurityFindingWorkflowState | null;

		/** Provides information about the status of the investigation into a finding. */
		Workflow?: Workflow;
		RecordState?: AwsSecurityFindingRecordState | null;
		RelatedFindings?: Array<RelatedFinding>;

		/** A user-defined note added to a finding. */
		Note?: Note;
	}

	/** <p>Provides consistent format for the contents of the Security Hub-aggregated findings. <code>AwsSecurityFinding</code> format enables you to share findings between AWS security services and third-party solutions, and security standards checks.</p> <note> <p>A finding is a potential security issue generated either by AWS services (Amazon GuardDuty, Amazon Inspector, and Amazon Macie) or by the integrated third-party solutions and standards checks.</p> </note> */
	export interface AwsSecurityFindingFormProperties {

		/** Required */
		SchemaVersion: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		ProductArn: FormControl<string | null | undefined>,

		/** Required */
		GeneratorId: FormControl<string | null | undefined>,

		/** Required */
		AwsAccountId: FormControl<string | null | undefined>,
		FirstObservedAt: FormControl<string | null | undefined>,
		LastObservedAt: FormControl<string | null | undefined>,

		/** Required */
		CreatedAt: FormControl<string | null | undefined>,

		/** Required */
		UpdatedAt: FormControl<string | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
		Criticality: FormControl<number | null | undefined>,

		/** Required */
		Title: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
		SourceUrl: FormControl<string | null | undefined>,
		VerificationState: FormControl<AwsSecurityFindingVerificationState | null | undefined>,

		/** This field is deprecated, use Workflow.Status instead. */
		WorkflowState: FormControl<AwsSecurityFindingWorkflowState | null | undefined>,
		RecordState: FormControl<AwsSecurityFindingRecordState | null | undefined>,
	}
	export function CreateAwsSecurityFindingFormGroup() {
		return new FormGroup<AwsSecurityFindingFormProperties>({
			SchemaVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			ProductArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			GeneratorId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			AwsAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			FirstObservedAt: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			LastObservedAt: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			CreatedAt: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			UpdatedAt: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Confidence: new FormControl<number | null | undefined>(undefined),
			Criticality: new FormControl<number | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			SourceUrl: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			VerificationState: new FormControl<AwsSecurityFindingVerificationState | null | undefined>(undefined),
			WorkflowState: new FormControl<AwsSecurityFindingWorkflowState | null | undefined>(undefined),
			RecordState: new FormControl<AwsSecurityFindingRecordState | null | undefined>(undefined),
		});

	}


	/** The severity of the finding. */
	export interface Severity {
		Product?: number | null;
		Label?: SeverityLabel | null;
		Normalized?: number | null;
		Original?: string | null;
	}

	/** The severity of the finding. */
	export interface SeverityFormProperties {
		Product: FormControl<number | null | undefined>,
		Label: FormControl<SeverityLabel | null | undefined>,
		Normalized: FormControl<number | null | undefined>,
		Original: FormControl<string | null | undefined>,
	}
	export function CreateSeverityFormGroup() {
		return new FormGroup<SeverityFormProperties>({
			Product: new FormControl<number | null | undefined>(undefined),
			Label: new FormControl<SeverityLabel | null | undefined>(undefined),
			Normalized: new FormControl<number | null | undefined>(undefined),
			Original: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}

	export enum SeverityLabel { INFORMATIONAL = 0, LOW = 1, MEDIUM = 2, HIGH = 3, CRITICAL = 4 }


	/** Details about the remediation steps for a finding. */
	export interface Remediation {

		/** A recommendation on how to remediate the issue identified in a finding. */
		Recommendation?: Recommendation;
	}

	/** Details about the remediation steps for a finding. */
	export interface RemediationFormProperties {
	}
	export function CreateRemediationFormGroup() {
		return new FormGroup<RemediationFormProperties>({
		});

	}


	/** A recommendation on how to remediate the issue identified in a finding. */
	export interface Recommendation {
		Text?: string | null;
		Url?: string | null;
	}

	/** A recommendation on how to remediate the issue identified in a finding. */
	export interface RecommendationFormProperties {
		Text: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationFormGroup() {
		return new FormGroup<RecommendationFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Url: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}

	export interface FieldMap {
	}
	export interface FieldMapFormProperties {
	}
	export function CreateFieldMapFormGroup() {
		return new FormGroup<FieldMapFormProperties>({
		});

	}


	/** A list of malware related to a finding. */
	export interface Malware {

		/** Required */
		Name: string;
		Type?: MalwareType | null;
		Path?: string | null;
		State?: MalwareState | null;
	}

	/** A list of malware related to a finding. */
	export interface MalwareFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Type: FormControl<MalwareType | null | undefined>,
		Path: FormControl<string | null | undefined>,
		State: FormControl<MalwareState | null | undefined>,
	}
	export function CreateMalwareFormGroup() {
		return new FormGroup<MalwareFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Type: new FormControl<MalwareType | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			State: new FormControl<MalwareState | null | undefined>(undefined),
		});

	}

	export enum MalwareType { ADWARE = 0, BLENDED_THREAT = 1, BOTNET_AGENT = 2, COIN_MINER = 3, EXPLOIT_KIT = 4, KEYLOGGER = 5, MACRO = 6, POTENTIALLY_UNWANTED = 7, SPYWARE = 8, RANSOMWARE = 9, REMOTE_ACCESS = 10, ROOTKIT = 11, TROJAN = 12, VIRUS = 13, WORM = 14 }

	export enum MalwareState { OBSERVED = 0, REMOVAL_FAILED = 1, REMOVED = 2 }


	/** The details of network-related information about a finding. */
	export interface Network {
		Direction?: NetworkDirection | null;
		Protocol?: string | null;
		SourceIpV4?: string | null;
		SourceIpV6?: string | null;
		SourcePort?: number | null;
		SourceDomain?: string | null;
		SourceMac?: string | null;
		DestinationIpV4?: string | null;
		DestinationIpV6?: string | null;
		DestinationPort?: number | null;
		DestinationDomain?: string | null;
	}

	/** The details of network-related information about a finding. */
	export interface NetworkFormProperties {
		Direction: FormControl<NetworkDirection | null | undefined>,
		Protocol: FormControl<string | null | undefined>,
		SourceIpV4: FormControl<string | null | undefined>,
		SourceIpV6: FormControl<string | null | undefined>,
		SourcePort: FormControl<number | null | undefined>,
		SourceDomain: FormControl<string | null | undefined>,
		SourceMac: FormControl<string | null | undefined>,
		DestinationIpV4: FormControl<string | null | undefined>,
		DestinationIpV6: FormControl<string | null | undefined>,
		DestinationPort: FormControl<number | null | undefined>,
		DestinationDomain: FormControl<string | null | undefined>,
	}
	export function CreateNetworkFormGroup() {
		return new FormGroup<NetworkFormProperties>({
			Direction: new FormControl<NetworkDirection | null | undefined>(undefined),
			Protocol: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			SourceIpV4: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			SourceIpV6: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			SourcePort: new FormControl<number | null | undefined>(undefined),
			SourceDomain: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			SourceMac: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			DestinationIpV4: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			DestinationIpV6: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			DestinationPort: new FormControl<number | null | undefined>(undefined),
			DestinationDomain: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}

	export enum NetworkDirection { IN = 0, OUT = 1 }


	/** The details of process-related information about a finding. */
	export interface ProcessDetails {
		Name?: string | null;
		Path?: string | null;
		Pid?: number | null;
		ParentPid?: number | null;
		LaunchedAt?: string | null;
		TerminatedAt?: string | null;
	}

	/** The details of process-related information about a finding. */
	export interface ProcessDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,
		Pid: FormControl<number | null | undefined>,
		ParentPid: FormControl<number | null | undefined>,
		LaunchedAt: FormControl<string | null | undefined>,
		TerminatedAt: FormControl<string | null | undefined>,
	}
	export function CreateProcessDetailsFormGroup() {
		return new FormGroup<ProcessDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Path: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Pid: new FormControl<number | null | undefined>(undefined),
			ParentPid: new FormControl<number | null | undefined>(undefined),
			LaunchedAt: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			TerminatedAt: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Details about the threat intelligence related to a finding. */
	export interface ThreatIntelIndicator {
		Type?: ThreatIntelIndicatorType | null;
		Value?: string | null;
		Category?: ThreatIntelIndicatorCategory | null;
		LastObservedAt?: string | null;
		Source?: string | null;
		SourceUrl?: string | null;
	}

	/** Details about the threat intelligence related to a finding. */
	export interface ThreatIntelIndicatorFormProperties {
		Type: FormControl<ThreatIntelIndicatorType | null | undefined>,
		Value: FormControl<string | null | undefined>,
		Category: FormControl<ThreatIntelIndicatorCategory | null | undefined>,
		LastObservedAt: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
		SourceUrl: FormControl<string | null | undefined>,
	}
	export function CreateThreatIntelIndicatorFormGroup() {
		return new FormGroup<ThreatIntelIndicatorFormProperties>({
			Type: new FormControl<ThreatIntelIndicatorType | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Category: new FormControl<ThreatIntelIndicatorCategory | null | undefined>(undefined),
			LastObservedAt: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Source: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			SourceUrl: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}

	export enum ThreatIntelIndicatorType { DOMAIN = 0, EMAIL_ADDRESS = 1, HASH_MD5 = 2, HASH_SHA1 = 3, HASH_SHA256 = 4, HASH_SHA512 = 5, IPV4_ADDRESS = 6, IPV6_ADDRESS = 7, MUTEX = 8, PROCESS = 9, URL = 10 }

	export enum ThreatIntelIndicatorCategory { BACKDOOR = 0, CARD_STEALER = 1, COMMAND_AND_CONTROL = 2, DROP_SITE = 3, EXPLOIT_SITE = 4, KEYLOGGER = 5 }


	/** A resource related to a finding. */
	export interface Resource {

		/** Required */
		Type: string;

		/** Required */
		Id: string;
		Partition?: ResourcePartition | null;
		Region?: string | null;
		Tags?: FieldMap;

		/** <p>Additional details about a resource related to a finding.</p> <p>To provide the details, use the object that corresponds to the resource type. For example, if the resource type is <code>AwsEc2Instance</code>, then you use the <code>AwsEc2Instance</code> object to provide the details.</p> <p>If the type-specific object does not contain all of the fields you want to populate, then you use the <code>Other</code> object to populate those additional fields.</p> <p>You also use the <code>Other</code> object to populate the details when the selected type does not have a corresponding object.</p> */
		Details?: ResourceDetails;
	}

	/** A resource related to a finding. */
	export interface ResourceFormProperties {

		/** Required */
		Type: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
		Partition: FormControl<ResourcePartition | null | undefined>,
		Region: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Partition: new FormControl<ResourcePartition | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}

	export enum ResourcePartition { aws = 0, 'aws-cn' = 1, 'aws-us-gov' = 2 }


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

	/** <p>Additional details about a resource related to a finding.</p> <p>To provide the details, use the object that corresponds to the resource type. For example, if the resource type is <code>AwsEc2Instance</code>, then you use the <code>AwsEc2Instance</code> object to provide the details.</p> <p>If the type-specific object does not contain all of the fields you want to populate, then you use the <code>Other</code> object to populate those additional fields.</p> <p>You also use the <code>Other</code> object to populate the details when the selected type does not have a corresponding object.</p> */
	export interface ResourceDetailsFormProperties {
	}
	export function CreateResourceDetailsFormGroup() {
		return new FormGroup<ResourceDetailsFormProperties>({
		});

	}


	/** Information about an AWS CodeBuild project. */
	export interface AwsCodeBuildProjectDetails {
		EncryptionKey?: string | null;

		/** Information about the build environment for this build project. */
		Environment?: AwsCodeBuildProjectEnvironment;
		Name?: string | null;

		/** Information about the build input source code for this build project. */
		Source?: AwsCodeBuildProjectSource;
		ServiceRole?: string | null;

		/** Information about the VPC configuration that AWS CodeBuild accesses. */
		VpcConfig?: AwsCodeBuildProjectVpcConfig;
	}

	/** Information about an AWS CodeBuild project. */
	export interface AwsCodeBuildProjectDetailsFormProperties {
		EncryptionKey: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ServiceRole: FormControl<string | null | undefined>,
	}
	export function CreateAwsCodeBuildProjectDetailsFormGroup() {
		return new FormGroup<AwsCodeBuildProjectDetailsFormProperties>({
			EncryptionKey: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			ServiceRole: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Information about the build environment for this build project. */
	export interface AwsCodeBuildProjectEnvironment {
		Certificate?: string | null;
		ImagePullCredentialsType?: string | null;

		/** The credentials for access to a private registry. */
		RegistryCredential?: AwsCodeBuildProjectEnvironmentRegistryCredential;
		Type?: string | null;
	}

	/** Information about the build environment for this build project. */
	export interface AwsCodeBuildProjectEnvironmentFormProperties {
		Certificate: FormControl<string | null | undefined>,
		ImagePullCredentialsType: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsCodeBuildProjectEnvironmentFormGroup() {
		return new FormGroup<AwsCodeBuildProjectEnvironmentFormProperties>({
			Certificate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			ImagePullCredentialsType: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** The credentials for access to a private registry. */
	export interface AwsCodeBuildProjectEnvironmentRegistryCredential {
		Credential?: string | null;
		CredentialProvider?: string | null;
	}

	/** The credentials for access to a private registry. */
	export interface AwsCodeBuildProjectEnvironmentRegistryCredentialFormProperties {
		Credential: FormControl<string | null | undefined>,
		CredentialProvider: FormControl<string | null | undefined>,
	}
	export function CreateAwsCodeBuildProjectEnvironmentRegistryCredentialFormGroup() {
		return new FormGroup<AwsCodeBuildProjectEnvironmentRegistryCredentialFormProperties>({
			Credential: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			CredentialProvider: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Information about the build input source code for this build project. */
	export interface AwsCodeBuildProjectSource {
		Type?: string | null;
		Location?: string | null;
		GitCloneDepth?: number | null;
		InsecureSsl?: boolean | null;
	}

	/** Information about the build input source code for this build project. */
	export interface AwsCodeBuildProjectSourceFormProperties {
		Type: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
		GitCloneDepth: FormControl<number | null | undefined>,
		InsecureSsl: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsCodeBuildProjectSourceFormGroup() {
		return new FormGroup<AwsCodeBuildProjectSourceFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Location: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			GitCloneDepth: new FormControl<number | null | undefined>(undefined),
			InsecureSsl: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about the VPC configuration that AWS CodeBuild accesses. */
	export interface AwsCodeBuildProjectVpcConfig {
		VpcId?: string | null;
		Subnets?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}

	/** Information about the VPC configuration that AWS CodeBuild accesses. */
	export interface AwsCodeBuildProjectVpcConfigFormProperties {
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateAwsCodeBuildProjectVpcConfigFormGroup() {
		return new FormGroup<AwsCodeBuildProjectVpcConfigFormProperties>({
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** A distribution configuration. */
	export interface AwsCloudFrontDistributionDetails {
		DomainName?: string | null;
		ETag?: string | null;
		LastModifiedTime?: string | null;

		/** A complex type that controls whether access logs are written for the distribution. */
		Logging?: AwsCloudFrontDistributionLogging;

		/** A complex type that contains information about origins and origin groups for this distribution. */
		Origins?: AwsCloudFrontDistributionOrigins;
		Status?: string | null;
		WebAclId?: string | null;
	}

	/** A distribution configuration. */
	export interface AwsCloudFrontDistributionDetailsFormProperties {
		DomainName: FormControl<string | null | undefined>,
		ETag: FormControl<string | null | undefined>,
		LastModifiedTime: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		WebAclId: FormControl<string | null | undefined>,
	}
	export function CreateAwsCloudFrontDistributionDetailsFormGroup() {
		return new FormGroup<AwsCloudFrontDistributionDetailsFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			ETag: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			LastModifiedTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			WebAclId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** A complex type that controls whether access logs are written for the distribution. */
	export interface AwsCloudFrontDistributionLogging {
		Bucket?: string | null;
		Enabled?: boolean | null;
		IncludeCookies?: boolean | null;
		Prefix?: string | null;
	}

	/** A complex type that controls whether access logs are written for the distribution. */
	export interface AwsCloudFrontDistributionLoggingFormProperties {
		Bucket: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		IncludeCookies: FormControl<boolean | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
	}
	export function CreateAwsCloudFrontDistributionLoggingFormGroup() {
		return new FormGroup<AwsCloudFrontDistributionLoggingFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			IncludeCookies: new FormControl<boolean | null | undefined>(undefined),
			Prefix: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** A complex type that contains information about origins and origin groups for this distribution. */
	export interface AwsCloudFrontDistributionOrigins {
		Items?: Array<AwsCloudFrontDistributionOriginItem>;
	}

	/** A complex type that contains information about origins and origin groups for this distribution. */
	export interface AwsCloudFrontDistributionOriginsFormProperties {
	}
	export function CreateAwsCloudFrontDistributionOriginsFormGroup() {
		return new FormGroup<AwsCloudFrontDistributionOriginsFormProperties>({
		});

	}


	/** A complex type that describes the Amazon S3 bucket, HTTP server (for example, a web server), Amazon Elemental MediaStore, or other server from which CloudFront gets your files. */
	export interface AwsCloudFrontDistributionOriginItem {
		DomainName?: string | null;
		Id?: string | null;
		OriginPath?: string | null;
	}

	/** A complex type that describes the Amazon S3 bucket, HTTP server (for example, a web server), Amazon Elemental MediaStore, or other server from which CloudFront gets your files. */
	export interface AwsCloudFrontDistributionOriginItemFormProperties {
		DomainName: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		OriginPath: FormControl<string | null | undefined>,
	}
	export function CreateAwsCloudFrontDistributionOriginItemFormGroup() {
		return new FormGroup<AwsCloudFrontDistributionOriginItemFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			OriginPath: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** The details of an Amazon EC2 instance. */
	export interface AwsEc2InstanceDetails {
		Type?: string | null;
		ImageId?: string | null;
		IpV4Addresses?: Array<string>;
		IpV6Addresses?: Array<string>;
		KeyName?: string | null;
		IamInstanceProfileArn?: string | null;
		VpcId?: string | null;
		SubnetId?: string | null;
		LaunchedAt?: string | null;
	}

	/** The details of an Amazon EC2 instance. */
	export interface AwsEc2InstanceDetailsFormProperties {
		Type: FormControl<string | null | undefined>,
		ImageId: FormControl<string | null | undefined>,
		KeyName: FormControl<string | null | undefined>,
		IamInstanceProfileArn: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
		LaunchedAt: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2InstanceDetailsFormGroup() {
		return new FormGroup<AwsEc2InstanceDetailsFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			ImageId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			KeyName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			IamInstanceProfileArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			LaunchedAt: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Details about the network interface */
	export interface AwsEc2NetworkInterfaceDetails {

		/** Information about the network interface attachment. */
		Attachment?: AwsEc2NetworkInterfaceAttachment;
		NetworkInterfaceId?: string | null;
		SecurityGroups?: Array<AwsEc2NetworkInterfaceSecurityGroup>;
		SourceDestCheck?: boolean | null;
	}

	/** Details about the network interface */
	export interface AwsEc2NetworkInterfaceDetailsFormProperties {
		NetworkInterfaceId: FormControl<string | null | undefined>,
		SourceDestCheck: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsEc2NetworkInterfaceDetailsFormGroup() {
		return new FormGroup<AwsEc2NetworkInterfaceDetailsFormProperties>({
			NetworkInterfaceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			SourceDestCheck: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about the network interface attachment. */
	export interface AwsEc2NetworkInterfaceAttachment {
		AttachTime?: string | null;
		AttachmentId?: string | null;
		DeleteOnTermination?: boolean | null;
		DeviceIndex?: number | null;
		InstanceId?: string | null;
		InstanceOwnerId?: string | null;
		Status?: string | null;
	}

	/** Information about the network interface attachment. */
	export interface AwsEc2NetworkInterfaceAttachmentFormProperties {
		AttachTime: FormControl<string | null | undefined>,
		AttachmentId: FormControl<string | null | undefined>,
		DeleteOnTermination: FormControl<boolean | null | undefined>,
		DeviceIndex: FormControl<number | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		InstanceOwnerId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2NetworkInterfaceAttachmentFormGroup() {
		return new FormGroup<AwsEc2NetworkInterfaceAttachmentFormProperties>({
			AttachTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			AttachmentId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			DeleteOnTermination: new FormControl<boolean | null | undefined>(undefined),
			DeviceIndex: new FormControl<number | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			InstanceOwnerId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** A security group associated with the network interface. */
	export interface AwsEc2NetworkInterfaceSecurityGroup {
		GroupName?: string | null;
		GroupId?: string | null;
	}

	/** A security group associated with the network interface. */
	export interface AwsEc2NetworkInterfaceSecurityGroupFormProperties {
		GroupName: FormControl<string | null | undefined>,
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2NetworkInterfaceSecurityGroupFormGroup() {
		return new FormGroup<AwsEc2NetworkInterfaceSecurityGroupFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Details about an EC2 security group. */
	export interface AwsEc2SecurityGroupDetails {
		GroupName?: string | null;
		GroupId?: string | null;
		OwnerId?: string | null;
		VpcId?: string | null;
		IpPermissions?: Array<AwsEc2SecurityGroupIpPermission>;
		IpPermissionsEgress?: Array<AwsEc2SecurityGroupIpPermission>;
	}

	/** Details about an EC2 security group. */
	export interface AwsEc2SecurityGroupDetailsFormProperties {
		GroupName: FormControl<string | null | undefined>,
		GroupId: FormControl<string | null | undefined>,
		OwnerId: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2SecurityGroupDetailsFormGroup() {
		return new FormGroup<AwsEc2SecurityGroupDetailsFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			OwnerId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** An IP permission for an EC2 security group. */
	export interface AwsEc2SecurityGroupIpPermission {
		IpProtocol?: string | null;
		FromPort?: number | null;
		ToPort?: number | null;
		UserIdGroupPairs?: Array<AwsEc2SecurityGroupUserIdGroupPair>;
		IpRanges?: Array<AwsEc2SecurityGroupIpRange>;
		Ipv6Ranges?: Array<AwsEc2SecurityGroupIpv6Range>;
		PrefixListIds?: Array<AwsEc2SecurityGroupPrefixListId>;
	}

	/** An IP permission for an EC2 security group. */
	export interface AwsEc2SecurityGroupIpPermissionFormProperties {
		IpProtocol: FormControl<string | null | undefined>,
		FromPort: FormControl<number | null | undefined>,
		ToPort: FormControl<number | null | undefined>,
	}
	export function CreateAwsEc2SecurityGroupIpPermissionFormGroup() {
		return new FormGroup<AwsEc2SecurityGroupIpPermissionFormProperties>({
			IpProtocol: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			FromPort: new FormControl<number | null | undefined>(undefined),
			ToPort: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A relationship between a security group and a user. */
	export interface AwsEc2SecurityGroupUserIdGroupPair {
		GroupId?: string | null;
		GroupName?: string | null;
		PeeringStatus?: string | null;
		UserId?: string | null;
		VpcId?: string | null;
		VpcPeeringConnectionId?: string | null;
	}

	/** A relationship between a security group and a user. */
	export interface AwsEc2SecurityGroupUserIdGroupPairFormProperties {
		GroupId: FormControl<string | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
		PeeringStatus: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		VpcPeeringConnectionId: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2SecurityGroupUserIdGroupPairFormGroup() {
		return new FormGroup<AwsEc2SecurityGroupUserIdGroupPairFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			PeeringStatus: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			VpcPeeringConnectionId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** A range of IPv4 addresses. */
	export interface AwsEc2SecurityGroupIpRange {
		CidrIp?: string | null;
	}

	/** A range of IPv4 addresses. */
	export interface AwsEc2SecurityGroupIpRangeFormProperties {
		CidrIp: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2SecurityGroupIpRangeFormGroup() {
		return new FormGroup<AwsEc2SecurityGroupIpRangeFormProperties>({
			CidrIp: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** A range of IPv6 addresses. */
	export interface AwsEc2SecurityGroupIpv6Range {
		CidrIpv6?: string | null;
	}

	/** A range of IPv6 addresses. */
	export interface AwsEc2SecurityGroupIpv6RangeFormProperties {
		CidrIpv6: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2SecurityGroupIpv6RangeFormGroup() {
		return new FormGroup<AwsEc2SecurityGroupIpv6RangeFormProperties>({
			CidrIpv6: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** A prefix list ID. */
	export interface AwsEc2SecurityGroupPrefixListId {
		PrefixListId?: string | null;
	}

	/** A prefix list ID. */
	export interface AwsEc2SecurityGroupPrefixListIdFormProperties {
		PrefixListId: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2SecurityGroupPrefixListIdFormGroup() {
		return new FormGroup<AwsEc2SecurityGroupPrefixListIdFormProperties>({
			PrefixListId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Information about a load balancer. */
	export interface AwsElbv2LoadBalancerDetails {
		AvailabilityZones?: Array<AvailabilityZone>;
		CanonicalHostedZoneId?: string | null;
		CreatedTime?: string | null;
		DNSName?: string | null;
		IpAddressType?: string | null;
		Scheme?: string | null;
		SecurityGroups?: Array<string>;

		/** Information about the state of the load balancer. */
		State?: LoadBalancerState;
		Type?: string | null;
		VpcId?: string | null;
	}

	/** Information about a load balancer. */
	export interface AwsElbv2LoadBalancerDetailsFormProperties {
		CanonicalHostedZoneId: FormControl<string | null | undefined>,
		CreatedTime: FormControl<string | null | undefined>,
		DNSName: FormControl<string | null | undefined>,
		IpAddressType: FormControl<string | null | undefined>,
		Scheme: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateAwsElbv2LoadBalancerDetailsFormGroup() {
		return new FormGroup<AwsElbv2LoadBalancerDetailsFormProperties>({
			CanonicalHostedZoneId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			CreatedTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			DNSName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			IpAddressType: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Scheme: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Information about an Availability Zone. */
	export interface AvailabilityZone {
		ZoneName?: string | null;
		SubnetId?: string | null;
	}

	/** Information about an Availability Zone. */
	export interface AvailabilityZoneFormProperties {
		ZoneName: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
	}
	export function CreateAvailabilityZoneFormGroup() {
		return new FormGroup<AvailabilityZoneFormProperties>({
			ZoneName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Information about the state of the load balancer. */
	export interface LoadBalancerState {
		Code?: string | null;
		Reason?: string | null;
	}

	/** Information about the state of the load balancer. */
	export interface LoadBalancerStateFormProperties {
		Code: FormControl<string | null | undefined>,
		Reason: FormControl<string | null | undefined>,
	}
	export function CreateLoadBalancerStateFormGroup() {
		return new FormGroup<LoadBalancerStateFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Reason: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Information about an Elasticsearch domain. */
	export interface AwsElasticsearchDomainDetails {
		AccessPolicies?: string | null;

		/** Additional options for the domain endpoint, such as whether to require HTTPS for all traffic. */
		DomainEndpointOptions?: AwsElasticsearchDomainDomainEndpointOptions;
		DomainId?: string | null;
		DomainName?: string | null;
		Endpoint?: string | null;
		Endpoints?: FieldMap;
		ElasticsearchVersion?: string | null;

		/** Details about the configuration for encryption at rest. */
		EncryptionAtRestOptions?: AwsElasticsearchDomainEncryptionAtRestOptions;

		/** Details about the configuration for node-to-node encryption. */
		NodeToNodeEncryptionOptions?: AwsElasticsearchDomainNodeToNodeEncryptionOptions;

		/** Information that Amazon ES derives based on <code>VPCOptions</code> for the domain. */
		VPCOptions?: AwsElasticsearchDomainVPCOptions;
	}

	/** Information about an Elasticsearch domain. */
	export interface AwsElasticsearchDomainDetailsFormProperties {
		AccessPolicies: FormControl<string | null | undefined>,
		DomainId: FormControl<string | null | undefined>,
		DomainName: FormControl<string | null | undefined>,
		Endpoint: FormControl<string | null | undefined>,
		ElasticsearchVersion: FormControl<string | null | undefined>,
	}
	export function CreateAwsElasticsearchDomainDetailsFormGroup() {
		return new FormGroup<AwsElasticsearchDomainDetailsFormProperties>({
			AccessPolicies: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Endpoint: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			ElasticsearchVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Additional options for the domain endpoint, such as whether to require HTTPS for all traffic. */
	export interface AwsElasticsearchDomainDomainEndpointOptions {
		EnforceHTTPS?: boolean | null;
		TLSSecurityPolicy?: string | null;
	}

	/** Additional options for the domain endpoint, such as whether to require HTTPS for all traffic. */
	export interface AwsElasticsearchDomainDomainEndpointOptionsFormProperties {
		EnforceHTTPS: FormControl<boolean | null | undefined>,
		TLSSecurityPolicy: FormControl<string | null | undefined>,
	}
	export function CreateAwsElasticsearchDomainDomainEndpointOptionsFormGroup() {
		return new FormGroup<AwsElasticsearchDomainDomainEndpointOptionsFormProperties>({
			EnforceHTTPS: new FormControl<boolean | null | undefined>(undefined),
			TLSSecurityPolicy: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Details about the configuration for encryption at rest. */
	export interface AwsElasticsearchDomainEncryptionAtRestOptions {
		Enabled?: boolean | null;
		KmsKeyId?: string | null;
	}

	/** Details about the configuration for encryption at rest. */
	export interface AwsElasticsearchDomainEncryptionAtRestOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateAwsElasticsearchDomainEncryptionAtRestOptionsFormGroup() {
		return new FormGroup<AwsElasticsearchDomainEncryptionAtRestOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Details about the configuration for node-to-node encryption. */
	export interface AwsElasticsearchDomainNodeToNodeEncryptionOptions {
		Enabled?: boolean | null;
	}

	/** Details about the configuration for node-to-node encryption. */
	export interface AwsElasticsearchDomainNodeToNodeEncryptionOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAwsElasticsearchDomainNodeToNodeEncryptionOptionsFormGroup() {
		return new FormGroup<AwsElasticsearchDomainNodeToNodeEncryptionOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information that Amazon ES derives based on <code>VPCOptions</code> for the domain. */
	export interface AwsElasticsearchDomainVPCOptions {
		AvailabilityZones?: Array<string>;
		SecurityGroupIds?: Array<string>;
		SubnetIds?: Array<string>;
		VPCId?: string | null;
	}

	/** Information that Amazon ES derives based on <code>VPCOptions</code> for the domain. */
	export interface AwsElasticsearchDomainVPCOptionsFormProperties {
		VPCId: FormControl<string | null | undefined>,
	}
	export function CreateAwsElasticsearchDomainVPCOptionsFormGroup() {
		return new FormGroup<AwsElasticsearchDomainVPCOptionsFormProperties>({
			VPCId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** The details of an Amazon S3 bucket. */
	export interface AwsS3BucketDetails {
		OwnerId?: string | null;
		OwnerName?: string | null;
		CreatedAt?: string | null;

		/** The encryption configuration for the S3 bucket. */
		ServerSideEncryptionConfiguration?: AwsS3BucketServerSideEncryptionConfiguration;
	}

	/** The details of an Amazon S3 bucket. */
	export interface AwsS3BucketDetailsFormProperties {
		OwnerId: FormControl<string | null | undefined>,
		OwnerName: FormControl<string | null | undefined>,
		CreatedAt: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3BucketDetailsFormGroup() {
		return new FormGroup<AwsS3BucketDetailsFormProperties>({
			OwnerId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			OwnerName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			CreatedAt: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** The encryption configuration for the S3 bucket. */
	export interface AwsS3BucketServerSideEncryptionConfiguration {
		Rules?: Array<AwsS3BucketServerSideEncryptionRule>;
	}

	/** The encryption configuration for the S3 bucket. */
	export interface AwsS3BucketServerSideEncryptionConfigurationFormProperties {
	}
	export function CreateAwsS3BucketServerSideEncryptionConfigurationFormGroup() {
		return new FormGroup<AwsS3BucketServerSideEncryptionConfigurationFormProperties>({
		});

	}


	/** An encryption rule to apply to the S3 bucket. */
	export interface AwsS3BucketServerSideEncryptionRule {

		/** Specifies the default server-side encryption to apply to new objects in the bucket. */
		ApplyServerSideEncryptionByDefault?: AwsS3BucketServerSideEncryptionByDefault;
	}

	/** An encryption rule to apply to the S3 bucket. */
	export interface AwsS3BucketServerSideEncryptionRuleFormProperties {
	}
	export function CreateAwsS3BucketServerSideEncryptionRuleFormGroup() {
		return new FormGroup<AwsS3BucketServerSideEncryptionRuleFormProperties>({
		});

	}


	/** Specifies the default server-side encryption to apply to new objects in the bucket. */
	export interface AwsS3BucketServerSideEncryptionByDefault {
		SSEAlgorithm?: string | null;
		KMSMasterKeyID?: string | null;
	}

	/** Specifies the default server-side encryption to apply to new objects in the bucket. */
	export interface AwsS3BucketServerSideEncryptionByDefaultFormProperties {
		SSEAlgorithm: FormControl<string | null | undefined>,
		KMSMasterKeyID: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3BucketServerSideEncryptionByDefaultFormGroup() {
		return new FormGroup<AwsS3BucketServerSideEncryptionByDefaultFormProperties>({
			SSEAlgorithm: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			KMSMasterKeyID: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Details about an Amazon S3 object. */
	export interface AwsS3ObjectDetails {
		LastModified?: string | null;
		ETag?: string | null;
		VersionId?: string | null;
		ContentType?: string | null;
		ServerSideEncryption?: string | null;
		SSEKMSKeyId?: string | null;
	}

	/** Details about an Amazon S3 object. */
	export interface AwsS3ObjectDetailsFormProperties {
		LastModified: FormControl<string | null | undefined>,
		ETag: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
		ContentType: FormControl<string | null | undefined>,
		ServerSideEncryption: FormControl<string | null | undefined>,
		SSEKMSKeyId: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3ObjectDetailsFormGroup() {
		return new FormGroup<AwsS3ObjectDetailsFormProperties>({
			LastModified: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			ETag: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			VersionId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			ServerSideEncryption: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			SSEKMSKeyId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** IAM access key details related to a finding. */
	export interface AwsIamAccessKeyDetails {
		UserName?: string | null;
		Status?: AwsIamAccessKeyDetailsStatus | null;
		CreatedAt?: string | null;
		PrincipalId?: string | null;
		PrincipalType?: string | null;
		PrincipalName?: string | null;
	}

	/** IAM access key details related to a finding. */
	export interface AwsIamAccessKeyDetailsFormProperties {
		UserName: FormControl<string | null | undefined>,
		Status: FormControl<AwsIamAccessKeyDetailsStatus | null | undefined>,
		CreatedAt: FormControl<string | null | undefined>,
		PrincipalId: FormControl<string | null | undefined>,
		PrincipalType: FormControl<string | null | undefined>,
		PrincipalName: FormControl<string | null | undefined>,
	}
	export function CreateAwsIamAccessKeyDetailsFormGroup() {
		return new FormGroup<AwsIamAccessKeyDetailsFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Status: new FormControl<AwsIamAccessKeyDetailsStatus | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			PrincipalId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			PrincipalType: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			PrincipalName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}

	export enum AwsIamAccessKeyDetailsStatus { Active = 0, Inactive = 1 }


	/** Contains information about an IAM role, including all of the role's policies. */
	export interface AwsIamRoleDetails {

		/**
		 * Max length: 131072
		 * Min length: 1
		 */
		AssumeRolePolicyDocument?: string | null;
		CreateDate?: string | null;
		RoleId?: string | null;
		RoleName?: string | null;
		MaxSessionDuration?: number | null;
		Path?: string | null;
	}

	/** Contains information about an IAM role, including all of the role's policies. */
	export interface AwsIamRoleDetailsFormProperties {

		/**
		 * Max length: 131072
		 * Min length: 1
		 */
		AssumeRolePolicyDocument: FormControl<string | null | undefined>,
		CreateDate: FormControl<string | null | undefined>,
		RoleId: FormControl<string | null | undefined>,
		RoleName: FormControl<string | null | undefined>,
		MaxSessionDuration: FormControl<number | null | undefined>,
		Path: FormControl<string | null | undefined>,
	}
	export function CreateAwsIamRoleDetailsFormGroup() {
		return new FormGroup<AwsIamRoleDetailsFormProperties>({
			AssumeRolePolicyDocument: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072), Validators.pattern('[\u0009\u000A\u000D\u0020-\u007E\u00A1-\u00FF]+')]),
			CreateDate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			RoleId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			RoleName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			MaxSessionDuration: new FormControl<number | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Contains metadata about a customer master key (CMK). */
	export interface AwsKmsKeyDetails {
		AWSAccountId?: string | null;
		CreationDate?: number | null;
		KeyId?: string | null;
		KeyManager?: string | null;
		KeyState?: string | null;
		Origin?: string | null;
	}

	/** Contains metadata about a customer master key (CMK). */
	export interface AwsKmsKeyDetailsFormProperties {
		AWSAccountId: FormControl<string | null | undefined>,
		CreationDate: FormControl<number | null | undefined>,
		KeyId: FormControl<string | null | undefined>,
		KeyManager: FormControl<string | null | undefined>,
		KeyState: FormControl<string | null | undefined>,
		Origin: FormControl<string | null | undefined>,
	}
	export function CreateAwsKmsKeyDetailsFormGroup() {
		return new FormGroup<AwsKmsKeyDetailsFormProperties>({
			AWSAccountId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			CreationDate: new FormControl<number | null | undefined>(undefined),
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			KeyManager: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			KeyState: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Origin: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Details about a function's configuration. */
	export interface AwsLambdaFunctionDetails {

		/** The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly. */
		Code?: AwsLambdaFunctionCode;
		CodeSha256?: string | null;

		/** The dead-letter queue for failed asynchronous invocations. */
		DeadLetterConfig?: AwsLambdaFunctionDeadLetterConfig;

		/** A function's environment variable settings. */
		Environment?: AwsLambdaFunctionEnvironment;
		FunctionName?: string | null;
		Handler?: string | null;
		KmsKeyArn?: string | null;
		LastModified?: string | null;
		Layers?: Array<AwsLambdaFunctionLayer>;
		MasterArn?: string | null;
		MemorySize?: number | null;
		RevisionId?: string | null;
		Role?: string | null;
		Runtime?: string | null;
		Timeout?: number | null;

		/** The function's AWS X-Ray tracing configuration. */
		TracingConfig?: AwsLambdaFunctionTracingConfig;

		/** The VPC security groups and subnets that are attached to a Lambda function. For more information, see VPC Settings. */
		VpcConfig?: AwsLambdaFunctionVpcConfig;
		Version?: string | null;
	}

	/** Details about a function's configuration. */
	export interface AwsLambdaFunctionDetailsFormProperties {
		CodeSha256: FormControl<string | null | undefined>,
		FunctionName: FormControl<string | null | undefined>,
		Handler: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
		LastModified: FormControl<string | null | undefined>,
		MasterArn: FormControl<string | null | undefined>,
		MemorySize: FormControl<number | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,
		Runtime: FormControl<string | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateAwsLambdaFunctionDetailsFormGroup() {
		return new FormGroup<AwsLambdaFunctionDetailsFormProperties>({
			CodeSha256: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Handler: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			LastModified: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			MasterArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			MemorySize: new FormControl<number | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Runtime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Timeout: new FormControl<number | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly. */
	export interface AwsLambdaFunctionCode {
		S3Bucket?: string | null;
		S3Key?: string | null;
		S3ObjectVersion?: string | null;
		ZipFile?: string | null;
	}

	/** The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly. */
	export interface AwsLambdaFunctionCodeFormProperties {
		S3Bucket: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
		S3ObjectVersion: FormControl<string | null | undefined>,
		ZipFile: FormControl<string | null | undefined>,
	}
	export function CreateAwsLambdaFunctionCodeFormGroup() {
		return new FormGroup<AwsLambdaFunctionCodeFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			S3Key: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			S3ObjectVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			ZipFile: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** The dead-letter queue for failed asynchronous invocations. */
	export interface AwsLambdaFunctionDeadLetterConfig {
		TargetArn?: string | null;
	}

	/** The dead-letter queue for failed asynchronous invocations. */
	export interface AwsLambdaFunctionDeadLetterConfigFormProperties {
		TargetArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsLambdaFunctionDeadLetterConfigFormGroup() {
		return new FormGroup<AwsLambdaFunctionDeadLetterConfigFormProperties>({
			TargetArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** A function's environment variable settings. */
	export interface AwsLambdaFunctionEnvironment {
		Variables?: FieldMap;

		/** Error messages for environment variables that couldn't be applied. */
		Error?: AwsLambdaFunctionEnvironmentError;
	}

	/** A function's environment variable settings. */
	export interface AwsLambdaFunctionEnvironmentFormProperties {
	}
	export function CreateAwsLambdaFunctionEnvironmentFormGroup() {
		return new FormGroup<AwsLambdaFunctionEnvironmentFormProperties>({
		});

	}


	/** Error messages for environment variables that couldn't be applied. */
	export interface AwsLambdaFunctionEnvironmentError {
		ErrorCode?: string | null;
		Message?: string | null;
	}

	/** Error messages for environment variables that couldn't be applied. */
	export interface AwsLambdaFunctionEnvironmentErrorFormProperties {
		ErrorCode: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateAwsLambdaFunctionEnvironmentErrorFormGroup() {
		return new FormGroup<AwsLambdaFunctionEnvironmentErrorFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** An AWS Lambda layer. */
	export interface AwsLambdaFunctionLayer {
		Arn?: string | null;
		CodeSize?: number | null;
	}

	/** An AWS Lambda layer. */
	export interface AwsLambdaFunctionLayerFormProperties {
		Arn: FormControl<string | null | undefined>,
		CodeSize: FormControl<number | null | undefined>,
	}
	export function CreateAwsLambdaFunctionLayerFormGroup() {
		return new FormGroup<AwsLambdaFunctionLayerFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			CodeSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The function's AWS X-Ray tracing configuration. */
	export interface AwsLambdaFunctionTracingConfig {
		Mode?: string | null;
	}

	/** The function's AWS X-Ray tracing configuration. */
	export interface AwsLambdaFunctionTracingConfigFormProperties {
		Mode: FormControl<string | null | undefined>,
	}
	export function CreateAwsLambdaFunctionTracingConfigFormGroup() {
		return new FormGroup<AwsLambdaFunctionTracingConfigFormProperties>({
			Mode: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** The VPC security groups and subnets that are attached to a Lambda function. For more information, see VPC Settings. */
	export interface AwsLambdaFunctionVpcConfig {
		SecurityGroupIds?: Array<string>;
		SubnetIds?: Array<string>;
		VpcId?: string | null;
	}

	/** The VPC security groups and subnets that are attached to a Lambda function. For more information, see VPC Settings. */
	export interface AwsLambdaFunctionVpcConfigFormProperties {
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateAwsLambdaFunctionVpcConfigFormGroup() {
		return new FormGroup<AwsLambdaFunctionVpcConfigFormProperties>({
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Details about a Lambda layer version. */
	export interface AwsLambdaLayerVersionDetails {
		Version?: number | null;
		CompatibleRuntimes?: Array<string>;
		CreatedDate?: string | null;
	}

	/** Details about a Lambda layer version. */
	export interface AwsLambdaLayerVersionDetailsFormProperties {
		Version: FormControl<number | null | undefined>,
		CreatedDate: FormControl<string | null | undefined>,
	}
	export function CreateAwsLambdaLayerVersionDetailsFormGroup() {
		return new FormGroup<AwsLambdaLayerVersionDetailsFormProperties>({
			Version: new FormControl<number | null | undefined>(undefined),
			CreatedDate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Contains the details of an Amazon RDS DB instance. */
	export interface AwsRdsDbInstanceDetails {
		AssociatedRoles?: Array<AwsRdsDbInstanceAssociatedRole>;
		CACertificateIdentifier?: string | null;
		DBClusterIdentifier?: string | null;
		DBInstanceIdentifier?: string | null;
		DBInstanceClass?: string | null;
		DbInstancePort?: number | null;
		DbiResourceId?: string | null;
		DBName?: string | null;
		DeletionProtection?: boolean | null;

		/** Specifies the connection endpoint. */
		Endpoint?: AwsRdsDbInstanceEndpoint;
		Engine?: string | null;
		EngineVersion?: string | null;
		IAMDatabaseAuthenticationEnabled?: boolean | null;
		InstanceCreateTime?: string | null;
		KmsKeyId?: string | null;
		PubliclyAccessible?: boolean | null;
		StorageEncrypted?: boolean | null;
		TdeCredentialArn?: string | null;
		VpcSecurityGroups?: Array<AwsRdsDbInstanceVpcSecurityGroup>;
	}

	/** Contains the details of an Amazon RDS DB instance. */
	export interface AwsRdsDbInstanceDetailsFormProperties {
		CACertificateIdentifier: FormControl<string | null | undefined>,
		DBClusterIdentifier: FormControl<string | null | undefined>,
		DBInstanceIdentifier: FormControl<string | null | undefined>,
		DBInstanceClass: FormControl<string | null | undefined>,
		DbInstancePort: FormControl<number | null | undefined>,
		DbiResourceId: FormControl<string | null | undefined>,
		DBName: FormControl<string | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		IAMDatabaseAuthenticationEnabled: FormControl<boolean | null | undefined>,
		InstanceCreateTime: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
		StorageEncrypted: FormControl<boolean | null | undefined>,
		TdeCredentialArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbInstanceDetailsFormGroup() {
		return new FormGroup<AwsRdsDbInstanceDetailsFormProperties>({
			CACertificateIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			DBClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			DBInstanceClass: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			DbInstancePort: new FormControl<number | null | undefined>(undefined),
			DbiResourceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			DBName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			EngineVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			IAMDatabaseAuthenticationEnabled: new FormControl<boolean | null | undefined>(undefined),
			InstanceCreateTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			StorageEncrypted: new FormControl<boolean | null | undefined>(undefined),
			TdeCredentialArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** An AWS Identity and Access Management (IAM) role associated with the DB instance. */
	export interface AwsRdsDbInstanceAssociatedRole {
		RoleArn?: string | null;
		FeatureName?: string | null;
		Status?: string | null;
	}

	/** An AWS Identity and Access Management (IAM) role associated with the DB instance. */
	export interface AwsRdsDbInstanceAssociatedRoleFormProperties {
		RoleArn: FormControl<string | null | undefined>,
		FeatureName: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbInstanceAssociatedRoleFormGroup() {
		return new FormGroup<AwsRdsDbInstanceAssociatedRoleFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			FeatureName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Specifies the connection endpoint. */
	export interface AwsRdsDbInstanceEndpoint {
		Address?: string | null;
		Port?: number | null;
		HostedZoneId?: string | null;
	}

	/** Specifies the connection endpoint. */
	export interface AwsRdsDbInstanceEndpointFormProperties {
		Address: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		HostedZoneId: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbInstanceEndpointFormGroup() {
		return new FormGroup<AwsRdsDbInstanceEndpointFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Port: new FormControl<number | null | undefined>(undefined),
			HostedZoneId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** A VPC security groups that the DB instance belongs to. */
	export interface AwsRdsDbInstanceVpcSecurityGroup {
		VpcSecurityGroupId?: string | null;
		Status?: string | null;
	}

	/** A VPC security groups that the DB instance belongs to. */
	export interface AwsRdsDbInstanceVpcSecurityGroupFormProperties {
		VpcSecurityGroupId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateAwsRdsDbInstanceVpcSecurityGroupFormGroup() {
		return new FormGroup<AwsRdsDbInstanceVpcSecurityGroupFormProperties>({
			VpcSecurityGroupId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** A wrapper type for the topic's Amazon Resource Name (ARN). */
	export interface AwsSnsTopicDetails {
		KmsMasterKeyId?: string | null;
		Subscription?: Array<AwsSnsTopicSubscription>;
		TopicName?: string | null;
		Owner?: string | null;
	}

	/** A wrapper type for the topic's Amazon Resource Name (ARN). */
	export interface AwsSnsTopicDetailsFormProperties {
		KmsMasterKeyId: FormControl<string | null | undefined>,
		TopicName: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
	}
	export function CreateAwsSnsTopicDetailsFormGroup() {
		return new FormGroup<AwsSnsTopicDetailsFormProperties>({
			KmsMasterKeyId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			TopicName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Owner: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** A wrapper type for the attributes of an Amazon SNS subscription. */
	export interface AwsSnsTopicSubscription {
		Endpoint?: string | null;
		Protocol?: string | null;
	}

	/** A wrapper type for the attributes of an Amazon SNS subscription. */
	export interface AwsSnsTopicSubscriptionFormProperties {
		Endpoint: FormControl<string | null | undefined>,
		Protocol: FormControl<string | null | undefined>,
	}
	export function CreateAwsSnsTopicSubscriptionFormGroup() {
		return new FormGroup<AwsSnsTopicSubscriptionFormProperties>({
			Endpoint: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Protocol: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Data about a queue. */
	export interface AwsSqsQueueDetails {
		KmsDataKeyReusePeriodSeconds?: number | null;
		KmsMasterKeyId?: string | null;
		QueueName?: string | null;
		DeadLetterTargetArn?: string | null;
	}

	/** Data about a queue. */
	export interface AwsSqsQueueDetailsFormProperties {
		KmsDataKeyReusePeriodSeconds: FormControl<number | null | undefined>,
		KmsMasterKeyId: FormControl<string | null | undefined>,
		QueueName: FormControl<string | null | undefined>,
		DeadLetterTargetArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsSqsQueueDetailsFormGroup() {
		return new FormGroup<AwsSqsQueueDetailsFormProperties>({
			KmsDataKeyReusePeriodSeconds: new FormControl<number | null | undefined>(undefined),
			KmsMasterKeyId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			QueueName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			DeadLetterTargetArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Details about a WAF WebACL. */
	export interface AwsWafWebAclDetails {
		Name?: string | null;
		DefaultAction?: string | null;
		Rules?: Array<AwsWafWebAclRule>;
		WebAclId?: string | null;
	}

	/** Details about a WAF WebACL. */
	export interface AwsWafWebAclDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		DefaultAction: FormControl<string | null | undefined>,
		WebAclId: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafWebAclDetailsFormGroup() {
		return new FormGroup<AwsWafWebAclDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			DefaultAction: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			WebAclId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Details for a rule in a WAF WebACL. */
	export interface AwsWafWebAclRule {

		/** Details about the action that CloudFront or AWS WAF takes when a web request matches the conditions in the rule. */
		Action?: WafAction;
		ExcludedRules?: Array<WafExcludedRule>;

		/** Details about an override action for a rule. */
		OverrideAction?: WafOverrideAction;
		Priority?: number | null;
		RuleId?: string | null;
		Type?: string | null;
	}

	/** Details for a rule in a WAF WebACL. */
	export interface AwsWafWebAclRuleFormProperties {
		Priority: FormControl<number | null | undefined>,
		RuleId: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAwsWafWebAclRuleFormGroup() {
		return new FormGroup<AwsWafWebAclRuleFormProperties>({
			Priority: new FormControl<number | null | undefined>(undefined),
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Details about the action that CloudFront or AWS WAF takes when a web request matches the conditions in the rule.  */
	export interface WafAction {
		Type?: string | null;
	}

	/** Details about the action that CloudFront or AWS WAF takes when a web request matches the conditions in the rule.  */
	export interface WafActionFormProperties {
		Type: FormControl<string | null | undefined>,
	}
	export function CreateWafActionFormGroup() {
		return new FormGroup<WafActionFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Details about a rule to exclude from a rule group. */
	export interface WafExcludedRule {
		RuleId?: string | null;
	}

	/** Details about a rule to exclude from a rule group. */
	export interface WafExcludedRuleFormProperties {
		RuleId: FormControl<string | null | undefined>,
	}
	export function CreateWafExcludedRuleFormGroup() {
		return new FormGroup<WafExcludedRuleFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Details about an override action for a rule. */
	export interface WafOverrideAction {
		Type?: string | null;
	}

	/** Details about an override action for a rule. */
	export interface WafOverrideActionFormProperties {
		Type: FormControl<string | null | undefined>,
	}
	export function CreateWafOverrideActionFormGroup() {
		return new FormGroup<WafOverrideActionFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Container details related to a finding. */
	export interface ContainerDetails {
		Name?: string | null;
		ImageId?: string | null;
		ImageName?: string | null;
		LaunchedAt?: string | null;
	}

	/** Container details related to a finding. */
	export interface ContainerDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		ImageId: FormControl<string | null | undefined>,
		ImageName: FormControl<string | null | undefined>,
		LaunchedAt: FormControl<string | null | undefined>,
	}
	export function CreateContainerDetailsFormGroup() {
		return new FormGroup<ContainerDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			ImageId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			ImageName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			LaunchedAt: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** Contains finding details that are specific to control-based findings. Only returned for findings generated from controls. */
	export interface Compliance {
		Status?: ComplianceStatus | null;
		RelatedRequirements?: Array<string>;
		StatusReasons?: Array<StatusReason>;
	}

	/** Contains finding details that are specific to control-based findings. Only returned for findings generated from controls. */
	export interface ComplianceFormProperties {
		Status: FormControl<ComplianceStatus | null | undefined>,
	}
	export function CreateComplianceFormGroup() {
		return new FormGroup<ComplianceFormProperties>({
			Status: new FormControl<ComplianceStatus | null | undefined>(undefined),
		});

	}

	export enum ComplianceStatus { PASSED = 0, WARNING = 1, FAILED = 2, NOT_AVAILABLE = 3 }


	/** Provides additional context for the value of <code>Compliance.Status</code>. */
	export interface StatusReason {

		/** Required */
		ReasonCode: string;
		Description?: string | null;
	}

	/** Provides additional context for the value of <code>Compliance.Status</code>. */
	export interface StatusReasonFormProperties {

		/** Required */
		ReasonCode: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateStatusReasonFormGroup() {
		return new FormGroup<StatusReasonFormProperties>({
			ReasonCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}

	export enum AwsSecurityFindingVerificationState { UNKNOWN = 0, TRUE_POSITIVE = 1, FALSE_POSITIVE = 2, BENIGN_POSITIVE = 3 }

	export enum AwsSecurityFindingWorkflowState { NEW = 0, ASSIGNED = 1, IN_PROGRESS = 2, DEFERRED = 3, RESOLVED = 4 }


	/** Provides information about the status of the investigation into a finding. */
	export interface Workflow {
		Status?: WorkflowStatus | null;
	}

	/** Provides information about the status of the investigation into a finding. */
	export interface WorkflowFormProperties {
		Status: FormControl<WorkflowStatus | null | undefined>,
	}
	export function CreateWorkflowFormGroup() {
		return new FormGroup<WorkflowFormProperties>({
			Status: new FormControl<WorkflowStatus | null | undefined>(undefined),
		});

	}

	export enum WorkflowStatus { NEW = 0, NOTIFIED = 1, RESOLVED = 2, SUPPRESSED = 3 }

	export enum AwsSecurityFindingRecordState { ACTIVE = 0, ARCHIVED = 1 }


	/** Details about a related finding. */
	export interface RelatedFinding {

		/** Required */
		ProductArn: string;

		/** Required */
		Id: string;
	}

	/** Details about a related finding. */
	export interface RelatedFindingFormProperties {

		/** Required */
		ProductArn: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateRelatedFindingFormGroup() {
		return new FormGroup<RelatedFindingFormProperties>({
			ProductArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}


	/** A user-defined note added to a finding. */
	export interface Note {

		/** Required */
		Text: string;

		/** Required */
		UpdatedBy: string;

		/** Required */
		UpdatedAt: string;
	}

	/** A user-defined note added to a finding. */
	export interface NoteFormProperties {

		/** Required */
		Text: FormControl<string | null | undefined>,

		/** Required */
		UpdatedBy: FormControl<string | null | undefined>,

		/** Required */
		UpdatedAt: FormControl<string | null | undefined>,
	}
	export function CreateNoteFormGroup() {
		return new FormGroup<NoteFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			UpdatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			UpdatedAt: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

	export interface BatchUpdateFindingsResponse {

		/** Required */
		ProcessedFindings: Array<AwsSecurityFindingIdentifier>;

		/** Required */
		UnprocessedFindings: Array<BatchUpdateFindingsUnprocessedFinding>;
	}
	export interface BatchUpdateFindingsResponseFormProperties {
	}
	export function CreateBatchUpdateFindingsResponseFormGroup() {
		return new FormGroup<BatchUpdateFindingsResponseFormProperties>({
		});

	}


	/** Identifies a finding to update using <code>BatchUpdateFindings</code>. */
	export interface AwsSecurityFindingIdentifier {

		/** Required */
		Id: string;

		/** Required */
		ProductArn: string;
	}

	/** Identifies a finding to update using <code>BatchUpdateFindings</code>. */
	export interface AwsSecurityFindingIdentifierFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		ProductArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsSecurityFindingIdentifierFormGroup() {
		return new FormGroup<AwsSecurityFindingIdentifierFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			ProductArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}


	/** A finding from a <code>BatchUpdateFindings</code> request that Security Hub was unable to update. */
	export interface BatchUpdateFindingsUnprocessedFinding {

		/**
		 * Identifies a finding to update using <code>BatchUpdateFindings</code>.
		 * Required
		 */
		FindingIdentifier: AwsSecurityFindingIdentifier;

		/** Required */
		ErrorCode: string;

		/** Required */
		ErrorMessage: string;
	}

	/** A finding from a <code>BatchUpdateFindings</code> request that Security Hub was unable to update. */
	export interface BatchUpdateFindingsUnprocessedFindingFormProperties {

		/** Required */
		ErrorCode: FormControl<string | null | undefined>,

		/** Required */
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchUpdateFindingsUnprocessedFindingFormGroup() {
		return new FormGroup<BatchUpdateFindingsUnprocessedFindingFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			ErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateActionTargetResponse {

		/** Required */
		ActionTargetArn: string;
	}
	export interface CreateActionTargetResponseFormProperties {

		/** Required */
		ActionTargetArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateActionTargetResponseFormGroup() {
		return new FormGroup<CreateActionTargetResponseFormProperties>({
			ActionTargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

	export interface ResourceConflictException {
	}
	export interface ResourceConflictExceptionFormProperties {
	}
	export function CreateResourceConflictExceptionFormGroup() {
		return new FormGroup<ResourceConflictExceptionFormProperties>({
		});

	}

	export interface CreateInsightResponse {

		/** Required */
		InsightArn: string;
	}
	export interface CreateInsightResponseFormProperties {

		/** Required */
		InsightArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateInsightResponseFormGroup() {
		return new FormGroup<CreateInsightResponseFormProperties>({
			InsightArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}


	/** A string filter for querying findings. */
	export interface StringFilter {
		Value?: string | null;
		Comparison?: StringFilterComparison | null;
	}

	/** A string filter for querying findings. */
	export interface StringFilterFormProperties {
		Value: FormControl<string | null | undefined>,
		Comparison: FormControl<StringFilterComparison | null | undefined>,
	}
	export function CreateStringFilterFormGroup() {
		return new FormGroup<StringFilterFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Comparison: new FormControl<StringFilterComparison | null | undefined>(undefined),
		});

	}

	export enum StringFilterComparison { EQUALS = 0, PREFIX = 1 }


	/** A date filter for querying findings. */
	export interface DateFilter {
		Start?: string | null;
		End?: string | null;

		/** A date range for the date filter. */
		DateRange?: DateRange;
	}

	/** A date filter for querying findings. */
	export interface DateFilterFormProperties {
		Start: FormControl<string | null | undefined>,
		End: FormControl<string | null | undefined>,
	}
	export function CreateDateFilterFormGroup() {
		return new FormGroup<DateFilterFormProperties>({
			Start: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			End: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** A date range for the date filter. */
	export interface DateRange {
		Value?: number | null;
		Unit?: DateRangeUnit | null;
	}

	/** A date range for the date filter. */
	export interface DateRangeFormProperties {
		Value: FormControl<number | null | undefined>,
		Unit: FormControl<DateRangeUnit | null | undefined>,
	}
	export function CreateDateRangeFormGroup() {
		return new FormGroup<DateRangeFormProperties>({
			Value: new FormControl<number | null | undefined>(undefined),
			Unit: new FormControl<DateRangeUnit | null | undefined>(undefined),
		});

	}

	export enum DateRangeUnit { DAYS = 0 }


	/** A number filter for querying findings. */
	export interface NumberFilter {
		Gte?: number | null;
		Lte?: number | null;
		Eq?: number | null;
	}

	/** A number filter for querying findings. */
	export interface NumberFilterFormProperties {
		Gte: FormControl<number | null | undefined>,
		Lte: FormControl<number | null | undefined>,
		Eq: FormControl<number | null | undefined>,
	}
	export function CreateNumberFilterFormGroup() {
		return new FormGroup<NumberFilterFormProperties>({
			Gte: new FormControl<number | null | undefined>(undefined),
			Lte: new FormControl<number | null | undefined>(undefined),
			Eq: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The map filter for querying findings. */
	export interface MapFilter {
		Key?: string | null;
		Value?: string | null;
		Comparison?: MapFilterComparison | null;
	}

	/** The map filter for querying findings. */
	export interface MapFilterFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		Comparison: FormControl<MapFilterComparison | null | undefined>,
	}
	export function CreateMapFilterFormGroup() {
		return new FormGroup<MapFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Comparison: new FormControl<MapFilterComparison | null | undefined>(undefined),
		});

	}

	export enum MapFilterComparison { EQUALS = 0 }


	/** The IP filter for querying findings. */
	export interface IpFilter {
		Cidr?: string | null;
	}

	/** The IP filter for querying findings. */
	export interface IpFilterFormProperties {
		Cidr: FormControl<string | null | undefined>,
	}
	export function CreateIpFilterFormGroup() {
		return new FormGroup<IpFilterFormProperties>({
			Cidr: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** A keyword filter for querying findings. */
	export interface KeywordFilter {
		Value?: string | null;
	}

	/** A keyword filter for querying findings. */
	export interface KeywordFilterFormProperties {
		Value: FormControl<string | null | undefined>,
	}
	export function CreateKeywordFilterFormGroup() {
		return new FormGroup<KeywordFilterFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateMembersResponse {
		UnprocessedAccounts?: Array<Result>;
	}
	export interface CreateMembersResponseFormProperties {
	}
	export function CreateCreateMembersResponseFormGroup() {
		return new FormGroup<CreateMembersResponseFormProperties>({
		});

	}


	/** Details about the account that was not processed. */
	export interface Result {
		AccountId?: string | null;
		ProcessingResult?: string | null;
	}

	/** Details about the account that was not processed. */
	export interface ResultFormProperties {
		AccountId: FormControl<string | null | undefined>,
		ProcessingResult: FormControl<string | null | undefined>,
	}
	export function CreateResultFormGroup() {
		return new FormGroup<ResultFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			ProcessingResult: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}


	/** The details of an AWS account. */
	export interface AccountDetails {
		AccountId?: string | null;
		Email?: string | null;
	}

	/** The details of an AWS account. */
	export interface AccountDetailsFormProperties {
		AccountId: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
	}
	export function CreateAccountDetailsFormGroup() {
		return new FormGroup<AccountDetailsFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeclineInvitationsResponse {
		UnprocessedAccounts?: Array<Result>;
	}
	export interface DeclineInvitationsResponseFormProperties {
	}
	export function CreateDeclineInvitationsResponseFormGroup() {
		return new FormGroup<DeclineInvitationsResponseFormProperties>({
		});

	}

	export interface DeleteActionTargetResponse {

		/** Required */
		ActionTargetArn: string;
	}
	export interface DeleteActionTargetResponseFormProperties {

		/** Required */
		ActionTargetArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteActionTargetResponseFormGroup() {
		return new FormGroup<DeleteActionTargetResponseFormProperties>({
			ActionTargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeleteInsightResponse {

		/** Required */
		InsightArn: string;
	}
	export interface DeleteInsightResponseFormProperties {

		/** Required */
		InsightArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteInsightResponseFormGroup() {
		return new FormGroup<DeleteInsightResponseFormProperties>({
			InsightArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

	export interface DeleteInvitationsResponse {
		UnprocessedAccounts?: Array<Result>;
	}
	export interface DeleteInvitationsResponseFormProperties {
	}
	export function CreateDeleteInvitationsResponseFormGroup() {
		return new FormGroup<DeleteInvitationsResponseFormProperties>({
		});

	}

	export interface DeleteMembersResponse {
		UnprocessedAccounts?: Array<Result>;
	}
	export interface DeleteMembersResponseFormProperties {
	}
	export function CreateDeleteMembersResponseFormGroup() {
		return new FormGroup<DeleteMembersResponseFormProperties>({
		});

	}

	export interface DescribeActionTargetsResponse {

		/** Required */
		ActionTargets: Array<ActionTarget>;
		NextToken?: string | null;
	}
	export interface DescribeActionTargetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeActionTargetsResponseFormGroup() {
		return new FormGroup<DescribeActionTargetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An <code>ActionTarget</code> object. */
	export interface ActionTarget {

		/** Required */
		ActionTargetArn: string;

		/** Required */
		Name: string;

		/** Required */
		Description: string;
	}

	/** An <code>ActionTarget</code> object. */
	export interface ActionTargetFormProperties {

		/** Required */
		ActionTargetArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateActionTargetFormGroup() {
		return new FormGroup<ActionTargetFormProperties>({
			ActionTargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

	export interface DescribeHubResponse {
		HubArn?: string | null;
		SubscribedAt?: string | null;
	}
	export interface DescribeHubResponseFormProperties {
		HubArn: FormControl<string | null | undefined>,
		SubscribedAt: FormControl<string | null | undefined>,
	}
	export function CreateDescribeHubResponseFormGroup() {
		return new FormGroup<DescribeHubResponseFormProperties>({
			HubArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			SubscribedAt: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}

	export interface DescribeProductsResponse {

		/** Required */
		Products: Array<Product>;
		NextToken?: string | null;
	}
	export interface DescribeProductsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProductsResponseFormGroup() {
		return new FormGroup<DescribeProductsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about a product. */
	export interface Product {

		/** Required */
		ProductArn: string;
		ProductName?: string | null;
		CompanyName?: string | null;
		Description?: string | null;
		Categories?: Array<string>;
		IntegrationTypes?: Array<IntegrationType>;
		MarketplaceUrl?: string | null;
		ActivationUrl?: string | null;
		ProductSubscriptionResourcePolicy?: string | null;
	}

	/** Contains details about a product. */
	export interface ProductFormProperties {

		/** Required */
		ProductArn: FormControl<string | null | undefined>,
		ProductName: FormControl<string | null | undefined>,
		CompanyName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		MarketplaceUrl: FormControl<string | null | undefined>,
		ActivationUrl: FormControl<string | null | undefined>,
		ProductSubscriptionResourcePolicy: FormControl<string | null | undefined>,
	}
	export function CreateProductFormGroup() {
		return new FormGroup<ProductFormProperties>({
			ProductArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			ProductName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			CompanyName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			MarketplaceUrl: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			ActivationUrl: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			ProductSubscriptionResourcePolicy: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}

	export enum IntegrationType { SEND_FINDINGS_TO_SECURITY_HUB = 0, RECEIVE_FINDINGS_FROM_SECURITY_HUB = 1 }

	export interface DescribeStandardsResponse {
		Standards?: Array<Standard>;
		NextToken?: string | null;
	}
	export interface DescribeStandardsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStandardsResponseFormGroup() {
		return new FormGroup<DescribeStandardsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a specific standard. */
	export interface Standard {
		StandardsArn?: string | null;
		Name?: string | null;
		Description?: string | null;
		EnabledByDefault?: boolean | null;
	}

	/** Provides information about a specific standard. */
	export interface StandardFormProperties {
		StandardsArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EnabledByDefault: FormControl<boolean | null | undefined>,
	}
	export function CreateStandardFormGroup() {
		return new FormGroup<StandardFormProperties>({
			StandardsArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			EnabledByDefault: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeStandardsControlsResponse {
		Controls?: Array<StandardsControl>;
		NextToken?: string | null;
	}
	export interface DescribeStandardsControlsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStandardsControlsResponseFormGroup() {
		return new FormGroup<DescribeStandardsControlsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for an individual security standard control. */
	export interface StandardsControl {
		StandardsControlArn?: string | null;
		ControlStatus?: StandardsControlControlStatus | null;
		DisabledReason?: string | null;
		ControlStatusUpdatedAt?: Date | null;
		ControlId?: string | null;
		Title?: string | null;
		Description?: string | null;
		RemediationUrl?: string | null;
		SeverityRating?: StandardsControlSeverityRating | null;
		RelatedRequirements?: Array<string>;
	}

	/** Details for an individual security standard control. */
	export interface StandardsControlFormProperties {
		StandardsControlArn: FormControl<string | null | undefined>,
		ControlStatus: FormControl<StandardsControlControlStatus | null | undefined>,
		DisabledReason: FormControl<string | null | undefined>,
		ControlStatusUpdatedAt: FormControl<Date | null | undefined>,
		ControlId: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RemediationUrl: FormControl<string | null | undefined>,
		SeverityRating: FormControl<StandardsControlSeverityRating | null | undefined>,
	}
	export function CreateStandardsControlFormGroup() {
		return new FormGroup<StandardsControlFormProperties>({
			StandardsControlArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			ControlStatus: new FormControl<StandardsControlControlStatus | null | undefined>(undefined),
			DisabledReason: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			ControlStatusUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			ControlId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Title: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			RemediationUrl: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			SeverityRating: new FormControl<StandardsControlSeverityRating | null | undefined>(undefined),
		});

	}

	export enum StandardsControlControlStatus { ENABLED = 0, DISABLED = 1 }

	export enum StandardsControlSeverityRating { LOW = 0, MEDIUM = 1, HIGH = 2, CRITICAL = 3 }

	export interface DisableImportFindingsForProductResponse {
	}
	export interface DisableImportFindingsForProductResponseFormProperties {
	}
	export function CreateDisableImportFindingsForProductResponseFormGroup() {
		return new FormGroup<DisableImportFindingsForProductResponseFormProperties>({
		});

	}

	export interface DisableSecurityHubResponse {
	}
	export interface DisableSecurityHubResponseFormProperties {
	}
	export function CreateDisableSecurityHubResponseFormGroup() {
		return new FormGroup<DisableSecurityHubResponseFormProperties>({
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
	}
	export interface DisassociateMembersResponseFormProperties {
	}
	export function CreateDisassociateMembersResponseFormGroup() {
		return new FormGroup<DisassociateMembersResponseFormProperties>({
		});

	}

	export interface EnableImportFindingsForProductResponse {
		ProductSubscriptionArn?: string | null;
	}
	export interface EnableImportFindingsForProductResponseFormProperties {
		ProductSubscriptionArn: FormControl<string | null | undefined>,
	}
	export function CreateEnableImportFindingsForProductResponseFormGroup() {
		return new FormGroup<EnableImportFindingsForProductResponseFormProperties>({
			ProductSubscriptionArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}

	export interface EnableSecurityHubResponse {
	}
	export interface EnableSecurityHubResponseFormProperties {
	}
	export function CreateEnableSecurityHubResponseFormGroup() {
		return new FormGroup<EnableSecurityHubResponseFormProperties>({
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

	export interface GetEnabledStandardsResponse {
		StandardsSubscriptions?: Array<StandardsSubscription>;
		NextToken?: string | null;
	}
	export interface GetEnabledStandardsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetEnabledStandardsResponseFormGroup() {
		return new FormGroup<GetEnabledStandardsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFindingsResponse {

		/** Required */
		Findings: Array<AwsSecurityFinding>;
		NextToken?: string | null;
	}
	export interface GetFindingsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetFindingsResponseFormGroup() {
		return new FormGroup<GetFindingsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of finding attributes used to sort findings. */
	export interface SortCriterion {
		Field?: string | null;
		SortOrder?: SortCriterionSortOrder | null;
	}

	/** A collection of finding attributes used to sort findings. */
	export interface SortCriterionFormProperties {
		Field: FormControl<string | null | undefined>,
		SortOrder: FormControl<SortCriterionSortOrder | null | undefined>,
	}
	export function CreateSortCriterionFormGroup() {
		return new FormGroup<SortCriterionFormProperties>({
			Field: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			SortOrder: new FormControl<SortCriterionSortOrder | null | undefined>(undefined),
		});

	}

	export enum SortCriterionSortOrder { asc = 0, desc = 1 }

	export interface GetInsightResultsResponse {

		/**
		 * The insight results returned by the <code>GetInsightResults</code> operation.
		 * Required
		 */
		InsightResults: InsightResults;
	}
	export interface GetInsightResultsResponseFormProperties {
	}
	export function CreateGetInsightResultsResponseFormGroup() {
		return new FormGroup<GetInsightResultsResponseFormProperties>({
		});

	}


	/** The insight results returned by the <code>GetInsightResults</code> operation. */
	export interface InsightResults {

		/** Required */
		InsightArn: string;

		/** Required */
		GroupByAttribute: string;

		/** Required */
		ResultValues: Array<InsightResultValue>;
	}

	/** The insight results returned by the <code>GetInsightResults</code> operation. */
	export interface InsightResultsFormProperties {

		/** Required */
		InsightArn: FormControl<string | null | undefined>,

		/** Required */
		GroupByAttribute: FormControl<string | null | undefined>,
	}
	export function CreateInsightResultsFormGroup() {
		return new FormGroup<InsightResultsFormProperties>({
			InsightArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			GroupByAttribute: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}


	/** The insight result values returned by the <code>GetInsightResults</code> operation. */
	export interface InsightResultValue {

		/** Required */
		GroupByAttributeValue: string;

		/** Required */
		Count: number;
	}

	/** The insight result values returned by the <code>GetInsightResults</code> operation. */
	export interface InsightResultValueFormProperties {

		/** Required */
		GroupByAttributeValue: FormControl<string | null | undefined>,

		/** Required */
		Count: FormControl<number | null | undefined>,
	}
	export function CreateInsightResultValueFormGroup() {
		return new FormGroup<InsightResultValueFormProperties>({
			GroupByAttributeValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetInsightsResponse {

		/** Required */
		Insights: Array<Insight>;
		NextToken?: string | null;
	}
	export interface GetInsightsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetInsightsResponseFormGroup() {
		return new FormGroup<GetInsightsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a Security Hub insight. */
	export interface Insight {

		/** Required */
		InsightArn: string;

		/** Required */
		Name: string;

		/**
		 * A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.
		 * Required
		 */
		Filters: AwsSecurityFindingFilters;

		/** Required */
		GroupByAttribute: string;
	}

	/** Contains information about a Security Hub insight. */
	export interface InsightFormProperties {

		/** Required */
		InsightArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		GroupByAttribute: FormControl<string | null | undefined>,
	}
	export function CreateInsightFormGroup() {
		return new FormGroup<InsightFormProperties>({
			InsightArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			GroupByAttribute: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

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

	/** A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight. */
	export interface AwsSecurityFindingFiltersFormProperties {
	}
	export function CreateAwsSecurityFindingFiltersFormGroup() {
		return new FormGroup<AwsSecurityFindingFiltersFormProperties>({
		});

	}

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

		/** Details about an invitation. */
		Master?: Invitation;
	}
	export interface GetMasterAccountResponseFormProperties {
	}
	export function CreateGetMasterAccountResponseFormGroup() {
		return new FormGroup<GetMasterAccountResponseFormProperties>({
		});

	}


	/** Details about an invitation. */
	export interface Invitation {
		AccountId?: string | null;
		InvitationId?: string | null;
		InvitedAt?: Date | null;
		MemberStatus?: string | null;
	}

	/** Details about an invitation. */
	export interface InvitationFormProperties {
		AccountId: FormControl<string | null | undefined>,
		InvitationId: FormControl<string | null | undefined>,
		InvitedAt: FormControl<Date | null | undefined>,
		MemberStatus: FormControl<string | null | undefined>,
	}
	export function CreateInvitationFormGroup() {
		return new FormGroup<InvitationFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			InvitationId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			InvitedAt: new FormControl<Date | null | undefined>(undefined),
			MemberStatus: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetMembersResponse {
		Members?: Array<Member>;
		UnprocessedAccounts?: Array<Result>;
	}
	export interface GetMembersResponseFormProperties {
	}
	export function CreateGetMembersResponseFormGroup() {
		return new FormGroup<GetMembersResponseFormProperties>({
		});

	}


	/** The details about a member account. */
	export interface Member {
		AccountId?: string | null;
		Email?: string | null;
		MasterId?: string | null;
		MemberStatus?: string | null;
		InvitedAt?: Date | null;
		UpdatedAt?: Date | null;
	}

	/** The details about a member account. */
	export interface MemberFormProperties {
		AccountId: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		MasterId: FormControl<string | null | undefined>,
		MemberStatus: FormControl<string | null | undefined>,
		InvitedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateMemberFormGroup() {
		return new FormGroup<MemberFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			MasterId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			MemberStatus: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			InvitedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface InviteMembersResponse {
		UnprocessedAccounts?: Array<Result>;
	}
	export interface InviteMembersResponseFormProperties {
	}
	export function CreateInviteMembersResponseFormGroup() {
		return new FormGroup<InviteMembersResponseFormProperties>({
		});

	}

	export interface ListEnabledProductsForImportResponse {
		ProductSubscriptions?: Array<string>;
		NextToken?: string | null;
	}
	export interface ListEnabledProductsForImportResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnabledProductsForImportResponseFormGroup() {
		return new FormGroup<ListEnabledProductsForImportResponseFormProperties>({
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
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
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
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
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

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
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

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateActionTargetResponse {
	}
	export interface UpdateActionTargetResponseFormProperties {
	}
	export function CreateUpdateActionTargetResponseFormGroup() {
		return new FormGroup<UpdateActionTargetResponseFormProperties>({
		});

	}

	export interface UpdateFindingsResponse {
	}
	export interface UpdateFindingsResponseFormProperties {
	}
	export function CreateUpdateFindingsResponseFormGroup() {
		return new FormGroup<UpdateFindingsResponseFormProperties>({
		});

	}

	export interface UpdateInsightResponse {
	}
	export interface UpdateInsightResponseFormProperties {
	}
	export function CreateUpdateInsightResponseFormGroup() {
		return new FormGroup<UpdateInsightResponseFormProperties>({
		});

	}

	export interface UpdateStandardsControlResponse {
	}
	export interface UpdateStandardsControlResponseFormProperties {
	}
	export function CreateUpdateStandardsControlResponseFormGroup() {
		return new FormGroup<UpdateStandardsControlResponseFormProperties>({
		});

	}

	export interface AcceptInvitationRequest {

		/** Required */
		MasterId: string;

		/** Required */
		InvitationId: string;
	}
	export interface AcceptInvitationRequestFormProperties {

		/** Required */
		MasterId: FormControl<string | null | undefined>,

		/** Required */
		InvitationId: FormControl<string | null | undefined>,
	}
	export function CreateAcceptInvitationRequestFormGroup() {
		return new FormGroup<AcceptInvitationRequestFormProperties>({
			MasterId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			InvitationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

	export enum AwsIamAccessKeyStatus { Active = 0, Inactive = 1 }

	export enum VerificationState { UNKNOWN = 0, TRUE_POSITIVE = 1, FALSE_POSITIVE = 2, BENIGN_POSITIVE = 3 }


	/** This field is deprecated, use Workflow.Status instead. */
	export enum WorkflowState { NEW = 0, ASSIGNED = 1, IN_PROGRESS = 2, DEFERRED = 3, RESOLVED = 4 }

	export enum RecordState { ACTIVE = 0, ARCHIVED = 1 }

	export interface BatchDisableStandardsRequest {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		StandardsSubscriptionArns: Array<string>;
	}
	export interface BatchDisableStandardsRequestFormProperties {
	}
	export function CreateBatchDisableStandardsRequestFormGroup() {
		return new FormGroup<BatchDisableStandardsRequestFormProperties>({
		});

	}

	export interface BatchEnableStandardsRequest {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		StandardsSubscriptionRequests: Array<StandardsSubscriptionRequest>;
	}
	export interface BatchEnableStandardsRequestFormProperties {
	}
	export function CreateBatchEnableStandardsRequestFormGroup() {
		return new FormGroup<BatchEnableStandardsRequestFormProperties>({
		});

	}

	export interface BatchImportFindingsRequest {

		/** Required */
		Findings: Array<AwsSecurityFinding>;
	}
	export interface BatchImportFindingsRequestFormProperties {
	}
	export function CreateBatchImportFindingsRequestFormGroup() {
		return new FormGroup<BatchImportFindingsRequestFormProperties>({
		});

	}


	/** The updated note. */
	export interface NoteUpdate {

		/** Required */
		Text: string;

		/** Required */
		UpdatedBy: string;
	}

	/** The updated note. */
	export interface NoteUpdateFormProperties {

		/** Required */
		Text: FormControl<string | null | undefined>,

		/** Required */
		UpdatedBy: FormControl<string | null | undefined>,
	}
	export function CreateNoteUpdateFormGroup() {
		return new FormGroup<NoteUpdateFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			UpdatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}


	/** Updates to the severity information for a finding. */
	export interface SeverityUpdate {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Normalized?: number | null;
		Product?: number | null;
		Label?: SeverityLabel | null;
	}

	/** Updates to the severity information for a finding. */
	export interface SeverityUpdateFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Normalized: FormControl<number | null | undefined>,
		Product: FormControl<number | null | undefined>,
		Label: FormControl<SeverityLabel | null | undefined>,
	}
	export function CreateSeverityUpdateFormGroup() {
		return new FormGroup<SeverityUpdateFormProperties>({
			Normalized: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			Product: new FormControl<number | null | undefined>(undefined),
			Label: new FormControl<SeverityLabel | null | undefined>(undefined),
		});

	}


	/** Used to update information about the investigation into the finding. */
	export interface WorkflowUpdate {
		Status?: WorkflowStatus | null;
	}

	/** Used to update information about the investigation into the finding. */
	export interface WorkflowUpdateFormProperties {
		Status: FormControl<WorkflowStatus | null | undefined>,
	}
	export function CreateWorkflowUpdateFormGroup() {
		return new FormGroup<WorkflowUpdateFormProperties>({
			Status: new FormControl<WorkflowStatus | null | undefined>(undefined),
		});

	}

	export interface BatchUpdateFindingsRequest {

		/** Required */
		FindingIdentifiers: Array<AwsSecurityFindingIdentifier>;

		/** The updated note. */
		Note?: NoteUpdate;

		/** Updates to the severity information for a finding. */
		Severity?: SeverityUpdate;
		VerificationState?: AwsSecurityFindingVerificationState | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Criticality?: number | null;
		Types?: Array<string>;
		UserDefinedFields?: FieldMap;

		/** Used to update information about the investigation into the finding. */
		Workflow?: WorkflowUpdate;
		RelatedFindings?: Array<RelatedFinding>;
	}
	export interface BatchUpdateFindingsRequestFormProperties {
		VerificationState: FormControl<AwsSecurityFindingVerificationState | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Criticality: FormControl<number | null | undefined>,
	}
	export function CreateBatchUpdateFindingsRequestFormGroup() {
		return new FormGroup<BatchUpdateFindingsRequestFormProperties>({
			VerificationState: new FormControl<AwsSecurityFindingVerificationState | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			Criticality: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export enum ControlStatus { ENABLED = 0, DISABLED = 1 }

	export interface CreateActionTargetRequest {

		/** Required */
		Name: string;

		/** Required */
		Description: string;

		/** Required */
		Id: string;
	}
	export interface CreateActionTargetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreateActionTargetRequestFormGroup() {
		return new FormGroup<CreateActionTargetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateInsightRequest {

		/** Required */
		Name: string;

		/**
		 * A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.
		 * Required
		 */
		Filters: AwsSecurityFindingFilters;

		/** Required */
		GroupByAttribute: string;
	}
	export interface CreateInsightRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		GroupByAttribute: FormControl<string | null | undefined>,
	}
	export function CreateCreateInsightRequestFormGroup() {
		return new FormGroup<CreateInsightRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			GroupByAttribute: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateMembersRequest {
		AccountDetails?: Array<AccountDetails>;
	}
	export interface CreateMembersRequestFormProperties {
	}
	export function CreateCreateMembersRequestFormGroup() {
		return new FormGroup<CreateMembersRequestFormProperties>({
		});

	}

	export interface DeclineInvitationsRequest {

		/** Required */
		AccountIds: Array<string>;
	}
	export interface DeclineInvitationsRequestFormProperties {
	}
	export function CreateDeclineInvitationsRequestFormGroup() {
		return new FormGroup<DeclineInvitationsRequestFormProperties>({
		});

	}

	export interface DeleteActionTargetRequest {
	}
	export interface DeleteActionTargetRequestFormProperties {
	}
	export function CreateDeleteActionTargetRequestFormGroup() {
		return new FormGroup<DeleteActionTargetRequestFormProperties>({
		});

	}

	export interface DeleteInsightRequest {
	}
	export interface DeleteInsightRequestFormProperties {
	}
	export function CreateDeleteInsightRequestFormGroup() {
		return new FormGroup<DeleteInsightRequestFormProperties>({
		});

	}

	export interface DeleteInvitationsRequest {

		/** Required */
		AccountIds: Array<string>;
	}
	export interface DeleteInvitationsRequestFormProperties {
	}
	export function CreateDeleteInvitationsRequestFormGroup() {
		return new FormGroup<DeleteInvitationsRequestFormProperties>({
		});

	}

	export interface DeleteMembersRequest {
		AccountIds?: Array<string>;
	}
	export interface DeleteMembersRequestFormProperties {
	}
	export function CreateDeleteMembersRequestFormGroup() {
		return new FormGroup<DeleteMembersRequestFormProperties>({
		});

	}

	export interface DescribeActionTargetsRequest {
		ActionTargetArns?: Array<string>;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface DescribeActionTargetsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeActionTargetsRequestFormGroup() {
		return new FormGroup<DescribeActionTargetsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface DescribeHubRequest {
	}
	export interface DescribeHubRequestFormProperties {
	}
	export function CreateDescribeHubRequestFormGroup() {
		return new FormGroup<DescribeHubRequestFormProperties>({
		});

	}

	export interface DescribeProductsRequest {
	}
	export interface DescribeProductsRequestFormProperties {
	}
	export function CreateDescribeProductsRequestFormGroup() {
		return new FormGroup<DescribeProductsRequestFormProperties>({
		});

	}

	export interface DescribeStandardsControlsRequest {
	}
	export interface DescribeStandardsControlsRequestFormProperties {
	}
	export function CreateDescribeStandardsControlsRequestFormGroup() {
		return new FormGroup<DescribeStandardsControlsRequestFormProperties>({
		});

	}

	export interface DescribeStandardsRequest {
	}
	export interface DescribeStandardsRequestFormProperties {
	}
	export function CreateDescribeStandardsRequestFormGroup() {
		return new FormGroup<DescribeStandardsRequestFormProperties>({
		});

	}

	export interface DisableImportFindingsForProductRequest {
	}
	export interface DisableImportFindingsForProductRequestFormProperties {
	}
	export function CreateDisableImportFindingsForProductRequestFormGroup() {
		return new FormGroup<DisableImportFindingsForProductRequestFormProperties>({
		});

	}

	export interface DisableSecurityHubRequest {
	}
	export interface DisableSecurityHubRequestFormProperties {
	}
	export function CreateDisableSecurityHubRequestFormGroup() {
		return new FormGroup<DisableSecurityHubRequestFormProperties>({
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
		AccountIds?: Array<string>;
	}
	export interface DisassociateMembersRequestFormProperties {
	}
	export function CreateDisassociateMembersRequestFormGroup() {
		return new FormGroup<DisassociateMembersRequestFormProperties>({
		});

	}

	export interface EnableImportFindingsForProductRequest {

		/** Required */
		ProductArn: string;
	}
	export interface EnableImportFindingsForProductRequestFormProperties {

		/** Required */
		ProductArn: FormControl<string | null | undefined>,
	}
	export function CreateEnableImportFindingsForProductRequestFormGroup() {
		return new FormGroup<EnableImportFindingsForProductRequestFormProperties>({
			ProductArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

	export interface EnableSecurityHubRequest {
		Tags?: TagMap;
		EnableDefaultStandards?: boolean | null;
	}
	export interface EnableSecurityHubRequestFormProperties {
		EnableDefaultStandards: FormControl<boolean | null | undefined>,
	}
	export function CreateEnableSecurityHubRequestFormGroup() {
		return new FormGroup<EnableSecurityHubRequestFormProperties>({
			EnableDefaultStandards: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetEnabledStandardsRequest {

		/**
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		StandardsSubscriptionArns?: Array<string>;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface GetEnabledStandardsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetEnabledStandardsRequestFormGroup() {
		return new FormGroup<GetEnabledStandardsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface GetFindingsRequest {

		/** A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight. */
		Filters?: AwsSecurityFindingFilters;
		SortCriteria?: Array<SortCriterion>;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface GetFindingsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetFindingsRequestFormGroup() {
		return new FormGroup<GetFindingsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface GetInsightResultsRequest {
	}
	export interface GetInsightResultsRequestFormProperties {
	}
	export function CreateGetInsightResultsRequestFormGroup() {
		return new FormGroup<GetInsightResultsRequestFormProperties>({
		});

	}

	export interface GetInsightsRequest {
		InsightArns?: Array<string>;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface GetInsightsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetInsightsRequestFormGroup() {
		return new FormGroup<GetInsightsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
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

	export interface GetMasterAccountRequest {
	}
	export interface GetMasterAccountRequestFormProperties {
	}
	export function CreateGetMasterAccountRequestFormGroup() {
		return new FormGroup<GetMasterAccountRequestFormProperties>({
		});

	}

	export interface GetMembersRequest {

		/** Required */
		AccountIds: Array<string>;
	}
	export interface GetMembersRequestFormProperties {
	}
	export function CreateGetMembersRequestFormGroup() {
		return new FormGroup<GetMembersRequestFormProperties>({
		});

	}

	export interface InviteMembersRequest {
		AccountIds?: Array<string>;
	}
	export interface InviteMembersRequestFormProperties {
	}
	export function CreateInviteMembersRequestFormGroup() {
		return new FormGroup<InviteMembersRequestFormProperties>({
		});

	}

	export interface ListEnabledProductsForImportRequest {
	}
	export interface ListEnabledProductsForImportRequestFormProperties {
	}
	export function CreateListEnabledProductsForImportRequestFormGroup() {
		return new FormGroup<ListEnabledProductsForImportRequestFormProperties>({
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

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export enum Partition { aws = 0, 'aws-cn' = 1, 'aws-us-gov' = 2 }

	export enum SeverityRating { LOW = 0, MEDIUM = 1, HIGH = 2, CRITICAL = 3 }

	export enum SortOrder { asc = 0, desc = 1 }

	export enum StandardsStatus { PENDING = 0, READY = 1, FAILED = 2, DELETING = 3, INCOMPLETE = 4 }

	export interface TagResourceRequest {

		/** Required */
		Tags: TagMap;
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

	export interface UpdateActionTargetRequest {
		Name?: string | null;
		Description?: string | null;
	}
	export interface UpdateActionTargetRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateActionTargetRequestFormGroup() {
		return new FormGroup<UpdateActionTargetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateFindingsRequest {

		/**
		 * A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.
		 * Required
		 */
		Filters: AwsSecurityFindingFilters;

		/** The updated note. */
		Note?: NoteUpdate;
		RecordState?: AwsSecurityFindingRecordState | null;
	}
	export interface UpdateFindingsRequestFormProperties {
		RecordState: FormControl<AwsSecurityFindingRecordState | null | undefined>,
	}
	export function CreateUpdateFindingsRequestFormGroup() {
		return new FormGroup<UpdateFindingsRequestFormProperties>({
			RecordState: new FormControl<AwsSecurityFindingRecordState | null | undefined>(undefined),
		});

	}

	export interface UpdateInsightRequest {
		Name?: string | null;

		/** A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight. */
		Filters?: AwsSecurityFindingFilters;
		GroupByAttribute?: string | null;
	}
	export interface UpdateInsightRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		GroupByAttribute: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInsightRequestFormGroup() {
		return new FormGroup<UpdateInsightRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			GroupByAttribute: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateStandardsControlRequest {
		ControlStatus?: StandardsControlControlStatus | null;
		DisabledReason?: string | null;
	}
	export interface UpdateStandardsControlRequestFormProperties {
		ControlStatus: FormControl<StandardsControlControlStatus | null | undefined>,
		DisabledReason: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStandardsControlRequestFormGroup() {
		return new FormGroup<UpdateStandardsControlRequestFormProperties>({
			ControlStatus: new FormControl<StandardsControlControlStatus | null | undefined>(undefined),
			DisabledReason: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

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
		ListMembers(OnlyAssociated: boolean | null | undefined, MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListMembersResponse> {
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
		DescribeActionTargets(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeActionTargetsPostBody): Observable<DescribeActionTargetsResponse> {
			return this.http.post<DescribeActionTargetsResponse>(this.baseUri + 'actionTargets/get?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns details about the Hub resource in your account, including the <code>HubArn</code> and the time when you enabled Security Hub.
		 * Get accounts
		 * @param {string} HubArn The ARN of the Hub resource to retrieve.
		 * @return {DescribeHubResponse} Success
		 */
		DescribeHub(HubArn: string | null | undefined): Observable<DescribeHubResponse> {
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
		DescribeProducts(NextToken: string | null | undefined, MaxResults: number | null | undefined): Observable<DescribeProductsResponse> {
			return this.http.get<DescribeProductsResponse>(this.baseUri + 'products?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * <p>Returns a list of the available standards in Security Hub.</p> <p>For each standard, the results include the standard ARN, the name, and a description. </p>
		 * Get standards
		 * @param {string} NextToken <p>The token that is required for pagination. On your first call to the <code>DescribeStandards</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p>
		 * @param {number} MaxResults The maximum number of standards to return.
		 * @return {DescribeStandardsResponse} Success
		 */
		DescribeStandards(NextToken: string | null | undefined, MaxResults: number | null | undefined): Observable<DescribeStandardsResponse> {
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
		DescribeStandardsControls(StandardsSubscriptionArn: string, NextToken: string | null | undefined, MaxResults: number | null | undefined): Observable<DescribeStandardsControlsResponse> {
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
		ListEnabledProductsForImport(NextToken: string | null | undefined, MaxResults: number | null | undefined): Observable<ListEnabledProductsForImportResponse> {
			return this.http.get<ListEnabledProductsForImportResponse>(this.baseUri + 'productSubscriptions?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * Returns a list of the standards that are currently enabled.
		 * Post standards/get
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetEnabledStandardsResponse} Success
		 */
		GetEnabledStandards(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetEnabledStandardsPostBody): Observable<GetEnabledStandardsResponse> {
			return this.http.post<GetEnabledStandardsResponse>(this.baseUri + 'standards/get?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of findings that match the specified criteria.
		 * Post findings
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetFindingsResponse} Success
		 */
		GetFindings(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetFindingsPostBody): Observable<GetFindingsResponse> {
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
		GetInsights(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetInsightsPostBody): Observable<GetInsightsResponse> {
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
		ListInvitations(MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListInvitationsResponse> {
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
		 */
		MasterId: string;

		/**
		 * The ID of the invitation sent from the Security Hub master account.
		 * Required
		 */
		InvitationId: string;
	}
	export interface AcceptInvitationPostBodyFormProperties {

		/**
		 * The account ID of the Security Hub master account that sent the invitation.
		 * Required
		 */
		MasterId: FormControl<string | null | undefined>,

		/**
		 * The ID of the invitation sent from the Security Hub master account.
		 * Required
		 */
		InvitationId: FormControl<string | null | undefined>,
	}
	export function CreateAcceptInvitationPostBodyFormGroup() {
		return new FormGroup<AcceptInvitationPostBodyFormProperties>({
			MasterId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			InvitationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

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
	export interface BatchDisableStandardsPostBodyFormProperties {
	}
	export function CreateBatchDisableStandardsPostBodyFormGroup() {
		return new FormGroup<BatchDisableStandardsPostBodyFormProperties>({
		});

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
	export interface BatchEnableStandardsPostBodyFormProperties {
	}
	export function CreateBatchEnableStandardsPostBodyFormGroup() {
		return new FormGroup<BatchEnableStandardsPostBodyFormProperties>({
		});

	}

	export interface BatchImportFindingsPostBody {

		/**
		 * A list of findings to import. To successfully import a finding, it must follow the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html">AWS Security Finding Format</a>. Maximum of 100 findings per request.
		 * Required
		 */
		Findings: Array<AwsSecurityFinding>;
	}
	export interface BatchImportFindingsPostBodyFormProperties {
	}
	export function CreateBatchImportFindingsPostBodyFormGroup() {
		return new FormGroup<BatchImportFindingsPostBodyFormProperties>({
		});

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
		VerificationState?: AwsSecurityFindingVerificationState | null;

		/**
		 * <p>The updated value for the finding confidence. Confidence is defined as the likelihood that a finding accurately identifies the behavior or issue that it was intended to identify.</p> <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100 means 100 percent confidence.</p>
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence?: number | null;

		/**
		 * <p>The updated value for the level of importance assigned to the resources associated with the findings.</p> <p>A score of 0 means that the underlying resources have no criticality, and a score of 100 is reserved for the most critical resources. </p>
		 * Minimum: 0
		 * Maximum: 100
		 */
		Criticality?: number | null;

		/** <p>One or more finding types in the format of namespace/category/classifier that classify a finding.</p> <p>Valid namespace values are as follows.</p> <ul> <li> <p>Software and Configuration Checks</p> </li> <li> <p>TTPs</p> </li> <li> <p>Effects</p> </li> <li> <p>Unusual Behaviors</p> </li> <li> <p>Sensitive Data Identifications </p> </li> </ul> */
		Types?: Array<string>;

		/** A list of name/value string pairs associated with the finding. These are custom, user-defined fields added to a finding. */
		UserDefinedFields?: {[id: string]: string };

		/** Used to update information about the investigation into the finding. */
		Workflow?: BatchUpdateFindingsPatchBodyWorkflow;

		/** A list of findings that are related to the updated findings. */
		RelatedFindings?: Array<RelatedFinding>;
	}
	export interface BatchUpdateFindingsPatchBodyFormProperties {

		/** <p>Indicates the veracity of a finding.</p> <p>The available values for <code>VerificationState</code> are as follows.</p> <ul> <li> <p> <code>UNKNOWN</code> – The default disposition of a security finding</p> </li> <li> <p> <code>TRUE_POSITIVE</code> – The security finding is confirmed</p> </li> <li> <p> <code>FALSE_POSITIVE</code> – The security finding was determined to be a false alarm</p> </li> <li> <p> <code>BENIGN_POSITIVE</code> – A special case of <code>TRUE_POSITIVE</code> where the finding doesn't pose any threat, is expected, or both</p> </li> </ul> */
		VerificationState: FormControl<AwsSecurityFindingVerificationState | null | undefined>,

		/**
		 * <p>The updated value for the finding confidence. Confidence is defined as the likelihood that a finding accurately identifies the behavior or issue that it was intended to identify.</p> <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100 means 100 percent confidence.</p>
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence: FormControl<number | null | undefined>,

		/**
		 * <p>The updated value for the level of importance assigned to the resources associated with the findings.</p> <p>A score of 0 means that the underlying resources have no criticality, and a score of 100 is reserved for the most critical resources. </p>
		 * Minimum: 0
		 * Maximum: 100
		 */
		Criticality: FormControl<number | null | undefined>,

		/** A list of name/value string pairs associated with the finding. These are custom, user-defined fields added to a finding. */
		UserDefinedFields: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateBatchUpdateFindingsPatchBodyFormGroup() {
		return new FormGroup<BatchUpdateFindingsPatchBodyFormProperties>({
			VerificationState: new FormControl<AwsSecurityFindingVerificationState | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			Criticality: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			UserDefinedFields: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface BatchUpdateFindingsPatchBodyNote {
		Text?: string | null;
		UpdatedBy?: string | null;
	}
	export interface BatchUpdateFindingsPatchBodyNoteFormProperties {
		Text: FormControl<string | null | undefined>,
		UpdatedBy: FormControl<string | null | undefined>,
	}
	export function CreateBatchUpdateFindingsPatchBodyNoteFormGroup() {
		return new FormGroup<BatchUpdateFindingsPatchBodyNoteFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			UpdatedBy: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}

	export interface BatchUpdateFindingsPatchBodySeverity {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Normalized?: number | null;
		Product?: number | null;
		Label?: SeverityLabel | null;
	}
	export interface BatchUpdateFindingsPatchBodySeverityFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Normalized: FormControl<number | null | undefined>,
		Product: FormControl<number | null | undefined>,
		Label: FormControl<SeverityLabel | null | undefined>,
	}
	export function CreateBatchUpdateFindingsPatchBodySeverityFormGroup() {
		return new FormGroup<BatchUpdateFindingsPatchBodySeverityFormProperties>({
			Normalized: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			Product: new FormControl<number | null | undefined>(undefined),
			Label: new FormControl<SeverityLabel | null | undefined>(undefined),
		});

	}

	export interface BatchUpdateFindingsPatchBodyWorkflow {
		Status?: WorkflowStatus | null;
	}
	export interface BatchUpdateFindingsPatchBodyWorkflowFormProperties {
		Status: FormControl<WorkflowStatus | null | undefined>,
	}
	export function CreateBatchUpdateFindingsPatchBodyWorkflowFormGroup() {
		return new FormGroup<BatchUpdateFindingsPatchBodyWorkflowFormProperties>({
			Status: new FormControl<WorkflowStatus | null | undefined>(undefined),
		});

	}

	export interface CreateActionTargetPostBody {

		/**
		 * The name of the custom action target.
		 * Required
		 */
		Name: string;

		/**
		 * The description for the custom action target.
		 * Required
		 */
		Description: string;

		/**
		 * The ID for the custom action target.
		 * Required
		 */
		Id: string;
	}
	export interface CreateActionTargetPostBodyFormProperties {

		/**
		 * The name of the custom action target.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description for the custom action target.
		 * Required
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The ID for the custom action target.
		 * Required
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreateActionTargetPostBodyFormGroup() {
		return new FormGroup<CreateActionTargetPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateInsightPostBody {

		/**
		 * The name of the custom insight to create.
		 * Required
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
		 */
		GroupByAttribute: string;
	}
	export interface CreateInsightPostBodyFormProperties {

		/**
		 * The name of the custom insight to create.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The attribute used to group the findings for the insight. The grouping attribute identifies the type of item that the insight applies to. For example, if an insight is grouped by resource identifier, then the insight produces a list of resource identifiers.
		 * Required
		 */
		GroupByAttribute: FormControl<string | null | undefined>,
	}
	export function CreateCreateInsightPostBodyFormGroup() {
		return new FormGroup<CreateInsightPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			GroupByAttribute: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

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
	export interface CreateInsightPostBodyFiltersFormProperties {
	}
	export function CreateCreateInsightPostBodyFiltersFormGroup() {
		return new FormGroup<CreateInsightPostBodyFiltersFormProperties>({
		});

	}

	export interface CreateMembersPostBody {

		/** The list of accounts to associate with the Security Hub master account. For each account, the list includes the account ID and the email address. */
		AccountDetails?: Array<AccountDetails>;
	}
	export interface CreateMembersPostBodyFormProperties {
	}
	export function CreateCreateMembersPostBodyFormGroup() {
		return new FormGroup<CreateMembersPostBodyFormProperties>({
		});

	}

	export interface DeclineInvitationsPostBody {

		/**
		 * The list of account IDs for the accounts from which to decline the invitations to Security Hub.
		 * Required
		 */
		AccountIds: Array<string>;
	}
	export interface DeclineInvitationsPostBodyFormProperties {
	}
	export function CreateDeclineInvitationsPostBodyFormGroup() {
		return new FormGroup<DeclineInvitationsPostBodyFormProperties>({
		});

	}

	export interface UpdateActionTargetPatchBody {

		/** The updated name of the custom action target. */
		Name?: string | null;

		/** The updated description for the custom action target. */
		Description?: string | null;
	}
	export interface UpdateActionTargetPatchBodyFormProperties {

		/** The updated name of the custom action target. */
		Name: FormControl<string | null | undefined>,

		/** The updated description for the custom action target. */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateActionTargetPatchBodyFormGroup() {
		return new FormGroup<UpdateActionTargetPatchBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateInsightPatchBody {

		/** The updated name for the insight. */
		Name?: string | null;

		/** A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight. */
		Filters?: UpdateInsightPatchBodyFilters;

		/** The updated <code>GroupBy</code> attribute that defines this insight. */
		GroupByAttribute?: string | null;
	}
	export interface UpdateInsightPatchBodyFormProperties {

		/** The updated name for the insight. */
		Name: FormControl<string | null | undefined>,

		/** The updated <code>GroupBy</code> attribute that defines this insight. */
		GroupByAttribute: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInsightPatchBodyFormGroup() {
		return new FormGroup<UpdateInsightPatchBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			GroupByAttribute: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

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
	export interface UpdateInsightPatchBodyFiltersFormProperties {
	}
	export function CreateUpdateInsightPatchBodyFiltersFormGroup() {
		return new FormGroup<UpdateInsightPatchBodyFiltersFormProperties>({
		});

	}

	export interface DeleteInvitationsPostBody {

		/**
		 * The list of the account IDs that sent the invitations to delete.
		 * Required
		 */
		AccountIds: Array<string>;
	}
	export interface DeleteInvitationsPostBodyFormProperties {
	}
	export function CreateDeleteInvitationsPostBodyFormGroup() {
		return new FormGroup<DeleteInvitationsPostBodyFormProperties>({
		});

	}

	export interface DeleteMembersPostBody {

		/** The list of account IDs for the member accounts to delete. */
		AccountIds?: Array<string>;
	}
	export interface DeleteMembersPostBodyFormProperties {
	}
	export function CreateDeleteMembersPostBodyFormGroup() {
		return new FormGroup<DeleteMembersPostBodyFormProperties>({
		});

	}

	export interface DescribeActionTargetsPostBody {

		/** A list of custom action target ARNs for the custom action targets to retrieve. */
		ActionTargetArns?: Array<string>;

		/** <p>The token that is required for pagination. On your first call to the <code>DescribeActionTargets</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p> */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface DescribeActionTargetsPostBodyFormProperties {

		/** <p>The token that is required for pagination. On your first call to the <code>DescribeActionTargets</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p> */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeActionTargetsPostBodyFormGroup() {
		return new FormGroup<DescribeActionTargetsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface EnableSecurityHubPostBody {

		/** The tags to add to the hub resource when you enable Security Hub. */
		Tags?: {[id: string]: string };

		/** Whether to enable the security standards that Security Hub has designated as automatically enabled. If you do not provide a value for <code>EnableDefaultStandards</code>, it is set to <code>true</code>. To not enable the automatically enabled standards, set <code>EnableDefaultStandards</code> to <code>false</code>. */
		EnableDefaultStandards?: boolean | null;
	}
	export interface EnableSecurityHubPostBodyFormProperties {

		/** The tags to add to the hub resource when you enable Security Hub. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Whether to enable the security standards that Security Hub has designated as automatically enabled. If you do not provide a value for <code>EnableDefaultStandards</code>, it is set to <code>true</code>. To not enable the automatically enabled standards, set <code>EnableDefaultStandards</code> to <code>false</code>. */
		EnableDefaultStandards: FormControl<boolean | null | undefined>,
	}
	export function CreateEnableSecurityHubPostBodyFormGroup() {
		return new FormGroup<EnableSecurityHubPostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			EnableDefaultStandards: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DisassociateMembersPostBody {

		/** The account IDs of the member accounts to disassociate from the master account. */
		AccountIds?: Array<string>;
	}
	export interface DisassociateMembersPostBodyFormProperties {
	}
	export function CreateDisassociateMembersPostBodyFormGroup() {
		return new FormGroup<DisassociateMembersPostBodyFormProperties>({
		});

	}

	export interface EnableImportFindingsForProductPostBody {

		/**
		 * The ARN of the product to enable the integration for.
		 * Required
		 */
		ProductArn: string;
	}
	export interface EnableImportFindingsForProductPostBodyFormProperties {

		/**
		 * The ARN of the product to enable the integration for.
		 * Required
		 */
		ProductArn: FormControl<string | null | undefined>,
	}
	export function CreateEnableImportFindingsForProductPostBodyFormGroup() {
		return new FormGroup<EnableImportFindingsForProductPostBodyFormProperties>({
			ProductArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetEnabledStandardsPostBody {

		/**
		 * The list of the standards subscription ARNs for the standards to retrieve.
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		StandardsSubscriptionArns?: Array<string>;

		/** <p>The token that is required for pagination. On your first call to the <code>GetEnabledStandards</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p> */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface GetEnabledStandardsPostBodyFormProperties {

		/** <p>The token that is required for pagination. On your first call to the <code>GetEnabledStandards</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p> */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetEnabledStandardsPostBodyFormGroup() {
		return new FormGroup<GetEnabledStandardsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface GetFindingsPostBody {

		/** A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight. */
		Filters?: GetFindingsPostBodyFilters;

		/** The finding attributes used to sort the list of returned findings. */
		SortCriteria?: Array<SortCriterion>;

		/** <p>The token that is required for pagination. On your first call to the <code>GetFindings</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p> */
		NextToken?: string | null;

		/**
		 * The maximum number of findings to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface GetFindingsPostBodyFormProperties {

		/** <p>The token that is required for pagination. On your first call to the <code>GetFindings</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p> */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of findings to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetFindingsPostBodyFormGroup() {
		return new FormGroup<GetFindingsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

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
	export interface GetFindingsPostBodyFiltersFormProperties {
	}
	export function CreateGetFindingsPostBodyFiltersFormGroup() {
		return new FormGroup<GetFindingsPostBodyFiltersFormProperties>({
		});

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
		RecordState?: AwsSecurityFindingRecordState | null;
	}
	export interface UpdateFindingsPatchBodyFormProperties {

		/** The updated record state for the finding. */
		RecordState: FormControl<AwsSecurityFindingRecordState | null | undefined>,
	}
	export function CreateUpdateFindingsPatchBodyFormGroup() {
		return new FormGroup<UpdateFindingsPatchBodyFormProperties>({
			RecordState: new FormControl<AwsSecurityFindingRecordState | null | undefined>(undefined),
		});

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
	export interface UpdateFindingsPatchBodyFiltersFormProperties {
	}
	export function CreateUpdateFindingsPatchBodyFiltersFormGroup() {
		return new FormGroup<UpdateFindingsPatchBodyFiltersFormProperties>({
		});

	}

	export interface UpdateFindingsPatchBodyNote {
		Text?: string | null;
		UpdatedBy?: string | null;
	}
	export interface UpdateFindingsPatchBodyNoteFormProperties {
		Text: FormControl<string | null | undefined>,
		UpdatedBy: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFindingsPatchBodyNoteFormGroup() {
		return new FormGroup<UpdateFindingsPatchBodyNoteFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
			UpdatedBy: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetInsightsPostBody {

		/** The ARNs of the insights to describe. If you do not provide any insight ARNs, then <code>GetInsights</code> returns all of your custom insights. It does not return any managed insights. */
		InsightArns?: Array<string>;

		/** <p>The token that is required for pagination. On your first call to the <code>GetInsights</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p> */
		NextToken?: string | null;

		/**
		 * The maximum number of items to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface GetInsightsPostBodyFormProperties {

		/** <p>The token that is required for pagination. On your first call to the <code>GetInsights</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p> */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetInsightsPostBodyFormGroup() {
		return new FormGroup<GetInsightsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface GetMembersPostBody {

		/**
		 * The list of account IDs for the Security Hub member accounts to return the details for.
		 * Required
		 */
		AccountIds: Array<string>;
	}
	export interface GetMembersPostBodyFormProperties {
	}
	export function CreateGetMembersPostBodyFormGroup() {
		return new FormGroup<GetMembersPostBodyFormProperties>({
		});

	}

	export interface InviteMembersPostBody {

		/** The list of account IDs of the AWS accounts to invite to Security Hub as members. */
		AccountIds?: Array<string>;
	}
	export interface InviteMembersPostBodyFormProperties {
	}
	export function CreateInviteMembersPostBodyFormGroup() {
		return new FormGroup<InviteMembersPostBodyFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to add to the resource.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags to add to the resource.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateStandardsControlPatchBody {

		/** The updated status of the security standard control. */
		ControlStatus?: StandardsControlControlStatus | null;

		/** A description of the reason why you are disabling a security standard control. */
		DisabledReason?: string | null;
	}
	export interface UpdateStandardsControlPatchBodyFormProperties {

		/** The updated status of the security standard control. */
		ControlStatus: FormControl<StandardsControlControlStatus | null | undefined>,

		/** A description of the reason why you are disabling a security standard control. */
		DisabledReason: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStandardsControlPatchBodyFormGroup() {
		return new FormGroup<UpdateStandardsControlPatchBodyFormProperties>({
			ControlStatus: new FormControl<StandardsControlControlStatus | null | undefined>(undefined),
			DisabledReason: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}

}

