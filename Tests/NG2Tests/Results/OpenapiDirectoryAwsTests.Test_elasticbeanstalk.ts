import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface InsufficientPrivilegesException {
	}


	/** The result message containing information about the managed action. */
	export interface ApplyEnvironmentManagedActionResult {
		ActionId?: string;
		ActionDescription?: string;
		ActionType?: ApplyEnvironmentManagedActionResultActionType;
		Status?: string;
	}

	export enum ApplyEnvironmentManagedActionResultActionType { InstanceRefresh = 0, PlatformUpdate = 1, Unknown = 2 }

	export interface ElasticBeanstalkServiceException {
	}

	export interface ManagedActionInvalidStateException {
	}


	/** Indicates if the specified CNAME is available. */
	export interface CheckDNSAvailabilityResultMessage {
		Available?: boolean;
		FullyQualifiedCNAME?: string;
	}


	/** Result message containing a list of environment descriptions. */
	export interface EnvironmentDescriptionsMessage {
		Environments?: Array<EnvironmentDescription>;
		NextToken?: string;
	}


	/** Describes the properties of an environment. */
	export interface EnvironmentDescription {
		EnvironmentName?: string;
		EnvironmentId?: string;
		ApplicationName?: string;
		VersionLabel?: string;
		SolutionStackName?: string;
		PlatformArn?: string;
		TemplateName?: string;
		Description?: string;
		EndpointURL?: string;
		CNAME?: string;
		DateCreated?: Date;
		DateUpdated?: Date;
		Status?: EnvironmentDescriptionStatus;
		AbortableOperationInProgress?: boolean;
		Health?: EnvironmentDescriptionHealth;
		HealthStatus?: EnvironmentDescriptionHealthStatus;

		/** Describes the AWS resources in use by this environment. This data is not live data. */
		Resources?: EnvironmentResourcesDescription;

		/** Describes the properties of an environment tier */
		Tier?: EnvironmentTier;
		EnvironmentLinks?: Array<EnvironmentLink>;
		EnvironmentArn?: string;
		OperationsRole?: string;
	}

	export enum EnvironmentDescriptionStatus { Launching = 0, Updating = 1, Ready = 2, Terminating = 3, Terminated = 4 }

	export enum EnvironmentDescriptionHealth { Green = 0, Yellow = 1, Red = 2, Grey = 3 }

	export enum EnvironmentDescriptionHealthStatus { NoData = 0, Unknown = 1, Pending = 2, Ok = 3, Info = 4, Warning = 5, Degraded = 6, Severe = 7, Suspended = 8 }


	/** Describes the AWS resources in use by this environment. This data is not live data. */
	export interface EnvironmentResourcesDescription {

		/** Describes the details of a LoadBalancer. */
		LoadBalancer?: LoadBalancerDescription;
	}


	/** Describes the details of a LoadBalancer. */
	export interface LoadBalancerDescription {
		LoadBalancerName?: string;
		Domain?: string;
		Listeners?: Array<Listener>;
	}


	/** Describes the properties of a Listener for the LoadBalancer. */
	export interface Listener {
		Protocol?: string;
		Port?: number;
	}


	/** Describes the properties of an environment tier */
	export interface EnvironmentTier {
		Name?: string;
		Type?: string;
		Version?: string;
	}


	/** A link to another environment, defined in the environment's manifest. Links provide connection information in system properties that can be used to connect to another environment in the same group. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details. */
	export interface EnvironmentLink {
		LinkName?: string;
		EnvironmentName?: string;
	}

	export interface TooManyEnvironmentsException {
	}


	/** Result message containing a single description of an application. */
	export interface ApplicationDescriptionMessage {

		/** Describes the properties of an application. */
		Application?: ApplicationDescription;
	}


	/** Describes the properties of an application. */
	export interface ApplicationDescription {
		ApplicationArn?: string;
		ApplicationName?: string;
		Description?: string;
		DateCreated?: Date;
		DateUpdated?: Date;
		Versions?: Array<string>;
		ConfigurationTemplates?: Array<string>;

		/** The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that AWS Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions. */
		ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig;
	}


	/** The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that AWS Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions. */
	export interface ApplicationResourceLifecycleConfig {
		ServiceRole?: string;

		/** <p>The application version lifecycle settings for an application. Defines the rules that Elastic Beanstalk applies to an application's versions in order to avoid hitting the per-region limit for application versions.</p> <p>When Elastic Beanstalk deletes an application version from its database, you can no longer deploy that version to an environment. The source bundle remains in S3 unless you configure the rule to delete it.</p> */
		VersionLifecycleConfig?: ApplicationVersionLifecycleConfig;
	}


	/** <p>The application version lifecycle settings for an application. Defines the rules that Elastic Beanstalk applies to an application's versions in order to avoid hitting the per-region limit for application versions.</p> <p>When Elastic Beanstalk deletes an application version from its database, you can no longer deploy that version to an environment. The source bundle remains in S3 unless you configure the rule to delete it.</p> */
	export interface ApplicationVersionLifecycleConfig {

		/** A lifecycle rule that deletes the oldest application version when the maximum count is exceeded. */
		MaxCountRule?: MaxCountRule;

		/** A lifecycle rule that deletes application versions after the specified number of days. */
		MaxAgeRule?: MaxAgeRule;
	}


	/** A lifecycle rule that deletes the oldest application version when the maximum count is exceeded. */
	export interface MaxCountRule {
		Enabled: boolean;
		MaxCount?: number;
		DeleteSourceFromS3?: boolean;
	}


	/** A lifecycle rule that deletes application versions after the specified number of days. */
	export interface MaxAgeRule {
		Enabled: boolean;
		MaxAgeInDays?: number;
		DeleteSourceFromS3?: boolean;
	}


	/** Describes a tag applied to a resource in an environment. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	export interface TooManyApplicationsException {
	}


	/** Result message wrapping a single description of an application version. */
	export interface ApplicationVersionDescriptionMessage {

		/** Describes the properties of an application version. */
		ApplicationVersion?: ApplicationVersionDescription;
	}


	/** Describes the properties of an application version. */
	export interface ApplicationVersionDescription {
		ApplicationVersionArn?: string;
		ApplicationName?: string;
		Description?: string;
		VersionLabel?: string;

		/** Location of the source code for an application version. */
		SourceBuildInformation?: SourceBuildInformation;
		BuildArn?: string;

		/** The bucket and key of an item stored in Amazon S3. */
		SourceBundle?: S3Location;
		DateCreated?: Date;
		DateUpdated?: Date;
		Status?: ApplicationVersionDescriptionStatus;
	}


	/** Location of the source code for an application version. */
	export interface SourceBuildInformation {
		SourceType: SourceBuildInformationSourceType;
		SourceRepository: SourceBuildInformationSourceRepository;
		SourceLocation: string;
	}

	export enum SourceBuildInformationSourceType { Git = 0, Zip = 1 }

	export enum SourceBuildInformationSourceRepository { CodeCommit = 0, S3 = 1 }


	/** The bucket and key of an item stored in Amazon S3. */
	export interface S3Location {
		S3Bucket?: string;
		S3Key?: string;
	}

	export enum ApplicationVersionDescriptionStatus { Processed = 0, Unprocessed = 1, Failed = 2, Processing = 3, Building = 4 }

	export enum SourceType { Git = 0, Zip = 1 }

	export enum SourceRepository { CodeCommit = 0, S3 = 1 }

	export enum ComputeType { BUILD_GENERAL1_SMALL = 0, BUILD_GENERAL1_MEDIUM = 1, BUILD_GENERAL1_LARGE = 2 }

	export interface TooManyApplicationVersionsException {
	}

	export interface S3LocationNotInServiceRegionException {
	}

	export interface CodeBuildNotInServiceRegionException {
	}


	/** Describes the settings for a configuration set. */
	export interface ConfigurationSettingsDescription {
		SolutionStackName?: string;
		PlatformArn?: string;
		ApplicationName?: string;
		TemplateName?: string;
		Description?: string;
		EnvironmentName?: string;
		DeploymentStatus?: ConfigurationSettingsDescriptionDeploymentStatus;
		DateCreated?: Date;
		DateUpdated?: Date;
		OptionSettings?: Array<ConfigurationOptionSetting>;
	}

	export enum ConfigurationSettingsDescriptionDeploymentStatus { deployed = 0, pending = 1, failed = 2 }


	/** A specification identifying an individual configuration option along with its current value. For a list of possible namespaces and option values, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html">Option Values</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.  */
	export interface ConfigurationOptionSetting {
		ResourceName?: string;
		Namespace?: string;
		OptionName?: string;
		Value?: string;
	}

	export interface TooManyBucketsException {
	}

	export interface TooManyConfigurationTemplatesException {
	}


	/** A specification identifying an individual configuration option. */
	export interface OptionSpecification {
		ResourceName?: string;
		Namespace?: string;
		OptionName?: string;
	}

	export interface CreatePlatformVersionResult {

		/** Summary information about a platform version. */
		PlatformSummary?: PlatformSummary;

		/** The builder used to build the custom platform. */
		Builder?: Builder;
	}


	/** Summary information about a platform version. */
	export interface PlatformSummary {
		PlatformArn?: string;
		PlatformOwner?: string;
		PlatformStatus?: PlatformSummaryPlatformStatus;
		PlatformCategory?: string;
		OperatingSystemName?: string;
		OperatingSystemVersion?: string;
		SupportedTierList?: Array<string>;
		SupportedAddonList?: Array<string>;
		PlatformLifecycleState?: string;
		PlatformVersion?: string;
		PlatformBranchName?: string;
		PlatformBranchLifecycleState?: string;
	}

	export enum PlatformSummaryPlatformStatus { Creating = 0, Failed = 1, Ready = 2, Deleting = 3, Deleted = 4 }


	/** The builder used to build the custom platform. */
	export interface Builder {
		ARN?: string;
	}

	export interface TooManyPlatformsException {
	}


	/** Results of a <a>CreateStorageLocationResult</a> call. */
	export interface CreateStorageLocationResultMessage {
		S3Bucket?: string;
	}

	export interface S3SubscriptionRequiredException {
	}

	export interface OperationInProgressException {
	}

	export interface SourceBundleDeletionException {
	}

	export interface DeletePlatformVersionResult {

		/** Summary information about a platform version. */
		PlatformSummary?: PlatformSummary;
	}

	export interface PlatformVersionStillReferencedException {
	}

	export interface DescribeAccountAttributesResult {

		/** A set of per-resource AWS Elastic Beanstalk quotas associated with an AWS account. They reflect Elastic Beanstalk resource limits for this account. */
		ResourceQuotas?: ResourceQuotas;
	}


	/** A set of per-resource AWS Elastic Beanstalk quotas associated with an AWS account. They reflect Elastic Beanstalk resource limits for this account. */
	export interface ResourceQuotas {

		/** The AWS Elastic Beanstalk quota information for a single resource type in an AWS account. It reflects the resource's limits for this account. */
		ApplicationQuota?: ResourceQuota;

		/** The AWS Elastic Beanstalk quota information for a single resource type in an AWS account. It reflects the resource's limits for this account. */
		ApplicationVersionQuota?: ResourceQuota;

		/** The AWS Elastic Beanstalk quota information for a single resource type in an AWS account. It reflects the resource's limits for this account. */
		EnvironmentQuota?: ResourceQuota;

		/** The AWS Elastic Beanstalk quota information for a single resource type in an AWS account. It reflects the resource's limits for this account. */
		ConfigurationTemplateQuota?: ResourceQuota;

		/** The AWS Elastic Beanstalk quota information for a single resource type in an AWS account. It reflects the resource's limits for this account. */
		CustomPlatformQuota?: ResourceQuota;
	}


	/** The AWS Elastic Beanstalk quota information for a single resource type in an AWS account. It reflects the resource's limits for this account. */
	export interface ResourceQuota {
		Maximum?: number;
	}


	/** Result message wrapping a list of application version descriptions. */
	export interface ApplicationVersionDescriptionsMessage {
		ApplicationVersions?: Array<ApplicationVersionDescription>;
		NextToken?: string;
	}


	/** Result message containing a list of application descriptions. */
	export interface ApplicationDescriptionsMessage {
		Applications?: Array<ApplicationDescription>;
	}


	/** Describes the settings for a specified configuration set. */
	export interface ConfigurationOptionsDescription {
		SolutionStackName?: string;
		PlatformArn?: string;
		Options?: Array<ConfigurationOptionDescription>;
	}


	/** Describes the possible values for a configuration option. */
	export interface ConfigurationOptionDescription {
		Namespace?: string;
		Name?: string;
		DefaultValue?: string;
		ChangeSeverity?: string;
		UserDefined?: boolean;
		ValueType?: ConfigurationOptionDescriptionValueType;
		ValueOptions?: Array<string>;
		MinValue?: number;
		MaxValue?: number;
		MaxLength?: number;

		/** A regular expression representing a restriction on a string configuration option value. */
		Regex?: OptionRestrictionRegex;
	}

	export enum ConfigurationOptionDescriptionValueType { Scalar = 0, List = 1 }


	/** A regular expression representing a restriction on a string configuration option value. */
	export interface OptionRestrictionRegex {
		Pattern?: string;
		Label?: string;
	}


	/** The results from a request to change the configuration settings of an environment. */
	export interface ConfigurationSettingsDescriptions {
		ConfigurationSettings?: Array<ConfigurationSettingsDescription>;
	}


	/** Health details for an AWS Elastic Beanstalk environment. */
	export interface DescribeEnvironmentHealthResult {
		EnvironmentName?: string;
		HealthStatus?: string;
		Status?: EnvironmentDescriptionHealth;
		Color?: string;
		Causes?: Array<string>;

		/** Application request metrics for an AWS Elastic Beanstalk environment. */
		ApplicationMetrics?: ApplicationMetrics;

		/** Represents summary information about the health of an instance. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health Colors and Statuses</a>. */
		InstancesHealth?: InstanceHealthSummary;
		RefreshedAt?: Date;
	}


	/** Application request metrics for an AWS Elastic Beanstalk environment. */
	export interface ApplicationMetrics {
		Duration?: number;
		RequestCount?: number;

		/** Represents the percentage of requests over the last 10 seconds that resulted in each type of status code response. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">Status Code Definitions</a>. */
		StatusCodes?: StatusCodes;

		/** Represents the average latency for the slowest X percent of requests over the last 10 seconds. */
		Latency?: Latency;
	}


	/** Represents the percentage of requests over the last 10 seconds that resulted in each type of status code response. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">Status Code Definitions</a>. */
	export interface StatusCodes {
		Status2xx?: number;
		Status3xx?: number;
		Status4xx?: number;
		Status5xx?: number;
	}


	/** Represents the average latency for the slowest X percent of requests over the last 10 seconds. */
	export interface Latency {
		P999?: number;
		P99?: number;
		P95?: number;
		P90?: number;
		P85?: number;
		P75?: number;
		P50?: number;
		P10?: number;
	}


	/** Represents summary information about the health of an instance. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health Colors and Statuses</a>. */
	export interface InstanceHealthSummary {
		NoData?: number;
		Unknown?: number;
		Pending?: number;
		Ok?: number;
		Info?: number;
		Warning?: number;
		Degraded?: number;
		Severe?: number;
	}

	export enum EnvironmentHealthAttribute { Status = 0, Color = 1, Causes = 2, ApplicationMetrics = 3, InstancesHealth = 4, All = 5, HealthStatus = 6, RefreshedAt = 7 }

	export interface InvalidRequestException {
	}


	/** A result message containing a list of completed and failed managed actions. */
	export interface DescribeEnvironmentManagedActionHistoryResult {
		ManagedActionHistoryItems?: Array<ManagedActionHistoryItem>;
		NextToken?: string;
	}


	/** The record of a completed or failed managed action. */
	export interface ManagedActionHistoryItem {
		ActionId?: string;
		ActionType?: ApplyEnvironmentManagedActionResultActionType;
		ActionDescription?: string;
		FailureType?: ManagedActionHistoryItemFailureType;
		Status?: ManagedActionHistoryItemStatus;
		FailureDescription?: string;
		ExecutedTime?: Date;
		FinishedTime?: Date;
	}

	export enum ManagedActionHistoryItemFailureType { UpdateCancelled = 0, CancellationFailed = 1, RollbackFailed = 2, RollbackSuccessful = 3, InternalFailure = 4, InvalidEnvironmentState = 5, PermissionsError = 6 }

	export enum ManagedActionHistoryItemStatus { Completed = 0, Failed = 1, Unknown = 2 }


	/** The result message containing a list of managed actions. */
	export interface DescribeEnvironmentManagedActionsResult {
		ManagedActions?: Array<ManagedAction>;
	}


	/** The record of an upcoming or in-progress managed action. */
	export interface ManagedAction {
		ActionId?: string;
		ActionDescription?: string;
		ActionType?: ApplyEnvironmentManagedActionResultActionType;
		Status?: ManagedActionStatus;
		WindowStartTime?: Date;
	}

	export enum ManagedActionStatus { Scheduled = 0, Pending = 1, Running = 2, Unknown = 3 }


	/** Result message containing a list of environment resource descriptions. */
	export interface EnvironmentResourceDescriptionsMessage {

		/** Describes the AWS resources in use by this environment. This data is live. */
		EnvironmentResources?: EnvironmentResourceDescription;
	}


	/** Describes the AWS resources in use by this environment. This data is live. */
	export interface EnvironmentResourceDescription {
		EnvironmentName?: string;
		AutoScalingGroups?: Array<AutoScalingGroup>;
		Instances?: Array<Instance>;
		LaunchConfigurations?: Array<LaunchConfiguration>;
		LaunchTemplates?: Array<LaunchTemplate>;
		LoadBalancers?: Array<LoadBalancer>;
		Triggers?: Array<Trigger>;
		Queues?: Array<Queue>;
	}


	/** Describes an Auto Scaling launch configuration. */
	export interface AutoScalingGroup {
		Name?: string;
	}


	/** The description of an Amazon EC2 instance. */
	export interface Instance {
		Id?: string;
	}


	/** Describes an Auto Scaling launch configuration. */
	export interface LaunchConfiguration {
		Name?: string;
	}


	/** Describes an Amazon EC2 launch template. */
	export interface LaunchTemplate {
		Id?: string;
	}


	/** Describes a LoadBalancer. */
	export interface LoadBalancer {
		Name?: string;
	}


	/** Describes a trigger. */
	export interface Trigger {
		Name?: string;
	}


	/** Describes a queue. */
	export interface Queue {
		Name?: string;
		URL?: string;
	}


	/** Result message wrapping a list of event descriptions. */
	export interface EventDescriptionsMessage {
		Events?: Array<EventDescription>;
		NextToken?: string;
	}


	/** Describes an event. */
	export interface EventDescription {
		EventDate?: Date;
		Message?: string;
		ApplicationName?: string;
		VersionLabel?: string;
		TemplateName?: string;
		EnvironmentName?: string;
		PlatformArn?: string;
		RequestId?: string;
		Severity?: EventDescriptionSeverity;
	}

	export enum EventDescriptionSeverity { TRACE = 0, DEBUG = 1, INFO = 2, WARN = 3, ERROR = 4, FATAL = 5 }


	/** Detailed health information about the Amazon EC2 instances in an AWS Elastic Beanstalk environment. */
	export interface DescribeInstancesHealthResult {
		InstanceHealthList?: Array<SingleInstanceHealth>;
		RefreshedAt?: Date;
		NextToken?: string;
	}


	/** Detailed health information about an Amazon EC2 instance in your Elastic Beanstalk environment. */
	export interface SingleInstanceHealth {
		InstanceId?: string;
		HealthStatus?: string;
		Color?: string;
		Causes?: Array<string>;
		LaunchedAt?: Date;

		/** Application request metrics for an AWS Elastic Beanstalk environment. */
		ApplicationMetrics?: ApplicationMetrics;

		/** CPU utilization and load average metrics for an Amazon EC2 instance. */
		System?: SystemStatus;

		/** Information about an application version deployment. */
		Deployment?: Deployment;
		AvailabilityZone?: string;
		InstanceType?: string;
	}


	/** CPU utilization and load average metrics for an Amazon EC2 instance. */
	export interface SystemStatus {

		/** CPU utilization metrics for an instance. */
		CPUUtilization?: CPUUtilization;
		LoadAverage?: Array<number>;
	}


	/** CPU utilization metrics for an instance. */
	export interface CPUUtilization {
		User?: number;
		Nice?: number;
		System?: number;
		Idle?: number;
		IOWait?: number;
		IRQ?: number;
		SoftIRQ?: number;
		Privileged?: number;
	}


	/** Information about an application version deployment. */
	export interface Deployment {
		VersionLabel?: string;
		DeploymentId?: number;
		Status?: string;
		DeploymentTime?: Date;
	}

	export enum InstancesHealthAttribute { HealthStatus = 0, Color = 1, Causes = 2, ApplicationMetrics = 3, RefreshedAt = 4, LaunchedAt = 5, System = 6, Deployment = 7, AvailabilityZone = 8, InstanceType = 9, All = 10 }

	export interface DescribePlatformVersionResult {

		/** Detailed information about a platform version. */
		PlatformDescription?: PlatformDescription;
	}


	/** Detailed information about a platform version. */
	export interface PlatformDescription {
		PlatformArn?: string;
		PlatformOwner?: string;
		PlatformName?: string;
		PlatformVersion?: string;
		SolutionStackName?: string;
		PlatformStatus?: PlatformSummaryPlatformStatus;
		DateCreated?: Date;
		DateUpdated?: Date;
		PlatformCategory?: string;
		Description?: string;
		Maintainer?: string;
		OperatingSystemName?: string;
		OperatingSystemVersion?: string;
		ProgrammingLanguages?: Array<PlatformProgrammingLanguage>;
		Frameworks?: Array<PlatformFramework>;
		CustomAmiList?: Array<CustomAmi>;
		SupportedTierList?: Array<string>;
		SupportedAddonList?: Array<string>;
		PlatformLifecycleState?: string;
		PlatformBranchName?: string;
		PlatformBranchLifecycleState?: string;
	}


	/** A programming language supported by the platform. */
	export interface PlatformProgrammingLanguage {
		Name?: string;
		Version?: string;
	}


	/** A framework supported by the platform. */
	export interface PlatformFramework {
		Name?: string;
		Version?: string;
	}


	/** A custom AMI available to platforms. */
	export interface CustomAmi {
		VirtualizationType?: string;
		ImageId?: string;
	}


	/** A list of available AWS Elastic Beanstalk solution stacks. */
	export interface ListAvailableSolutionStacksResultMessage {
		SolutionStacks?: Array<string>;
		SolutionStackDetails?: Array<SolutionStackDescription>;
	}


	/** Describes the solution stack. */
	export interface SolutionStackDescription {
		SolutionStackName?: string;
		PermittedFileTypes?: Array<string>;
	}

	export interface ListPlatformBranchesResult {
		PlatformBranchSummaryList?: Array<PlatformBranchSummary>;
		NextToken?: string;
	}


	/** Summary information about a platform branch. */
	export interface PlatformBranchSummary {
		PlatformName?: string;
		BranchName?: string;
		LifecycleState?: string;
		BranchOrder?: number;
		SupportedTierList?: Array<string>;
	}


	/** <p>Describes criteria to restrict a list of results.</p> <p>For operators that apply a single value to the attribute, the filter is evaluated as follows: <code>Attribute Operator Values[1]</code> </p> <p>Some operators, e.g. <code>in</code>, can apply multiple values. In this case, the filter is evaluated as a logical union (OR) of applications of the operator to the attribute with each one of the values: <code>(Attribute Operator Values[1]) OR (Attribute Operator Values[2]) OR ...</code> </p> <p>The valid values for attributes of <code>SearchFilter</code> depend on the API action. For valid values, see the reference page for the API action you're calling that takes a <code>SearchFilter</code> parameter.</p> */
	export interface SearchFilter {
		Attribute?: string;
		Operator?: string;
		Values?: Array<string>;
	}

	export interface ListPlatformVersionsResult {
		PlatformSummaryList?: Array<PlatformSummary>;
		NextToken?: string;
	}


	/** <p>Describes criteria to restrict the results when listing platform versions.</p> <p>The filter is evaluated as follows: <code>Type Operator Values[1]</code> </p> */
	export interface PlatformFilter {
		Type?: string;
		Operator?: string;
		Values?: Array<string>;
	}

	export interface ResourceTagsDescriptionMessage {
		ResourceArn?: string;
		ResourceTags?: Array<Tag>;
	}

	export interface ResourceNotFoundException {
	}

	export interface ResourceTypeNotSupportedException {
	}


	/** Result message containing a description of the requested environment info. */
	export interface RetrieveEnvironmentInfoResultMessage {
		EnvironmentInfo?: Array<EnvironmentInfoDescription>;
	}


	/** The information retrieved from the Amazon EC2 instances. */
	export interface EnvironmentInfoDescription {
		InfoType?: EnvironmentInfoDescriptionInfoType;
		Ec2InstanceId?: string;
		SampleTimestamp?: Date;
		Message?: string;
	}

	export enum EnvironmentInfoDescriptionInfoType { tail = 0, bundle = 1 }

	export interface ApplicationResourceLifecycleDescriptionMessage {
		ApplicationName?: string;

		/** The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that AWS Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions. */
		ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig;
	}

	export interface TooManyTagsException {
	}


	/** Provides a list of validation messages. */
	export interface ConfigurationSettingsValidationMessages {
		Messages?: Array<ValidationMessage>;
	}


	/** An error or warning for a desired configuration option value. */
	export interface ValidationMessage {
		Message?: string;
		Severity?: ValidationMessageSeverity;
		Namespace?: string;
		OptionName?: string;
	}

	export enum ValidationMessageSeverity { error = 0, warning = 1 }


	/** <p/> */
	export interface AbortEnvironmentUpdateMessage {
		EnvironmentId?: string;
		EnvironmentName?: string;
	}

	export enum ActionHistoryStatus { Completed = 0, Failed = 1, Unknown = 2 }

	export enum ActionStatus { Scheduled = 0, Pending = 1, Running = 2, Unknown = 3 }

	export enum ActionType { InstanceRefresh = 0, PlatformUpdate = 1, Unknown = 2 }

	export enum ApplicationVersionStatus { Processed = 0, Unprocessed = 1, Failed = 2, Processing = 3, Building = 4 }


	/** Request to execute a scheduled managed action immediately. */
	export interface ApplyEnvironmentManagedActionRequest {
		EnvironmentName?: string;
		EnvironmentId?: string;
		ActionId: string;
	}


	/** Request to add or change the operations role used by an environment. */
	export interface AssociateEnvironmentOperationsRoleMessage {
		EnvironmentName: string;
		OperationsRole: string;
	}


	/** Settings for an AWS CodeBuild build. */
	export interface BuildConfiguration {
		ArtifactName?: string;
		CodeBuildServiceRole: string;
		ComputeType?: ComputeType;
		Image: string;
		TimeoutInMinutes?: number;
	}


	/** Results message indicating whether a CNAME is available. */
	export interface CheckDNSAvailabilityMessage {
		CNAMEPrefix: string;
	}


	/** Request to create or update a group of environments. */
	export interface ComposeEnvironmentsMessage {
		ApplicationName?: string;
		GroupName?: string;
		VersionLabels?: Array<string>;
	}

	export enum ConfigurationDeploymentStatus { deployed = 0, pending = 1, failed = 2 }

	export enum ConfigurationOptionValueType { Scalar = 0, List = 1 }


	/** Request to create an application. */
	export interface CreateApplicationMessage {
		ApplicationName: string;
		Description?: string;

		/** The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that AWS Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions. */
		ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig;
		Tags?: Array<Tag>;
	}


	/** <p/> */
	export interface CreateApplicationVersionMessage {
		ApplicationName: string;
		VersionLabel: string;
		Description?: string;

		/** Location of the source code for an application version. */
		SourceBuildInformation?: SourceBuildInformation;

		/** The bucket and key of an item stored in Amazon S3. */
		SourceBundle?: S3Location;

		/** Settings for an AWS CodeBuild build. */
		BuildConfiguration?: BuildConfiguration;
		AutoCreateApplication?: boolean;
		Process?: boolean;
		Tags?: Array<Tag>;
	}


	/** A specification for an environment configuration. */
	export interface SourceConfiguration {
		ApplicationName?: string;
		TemplateName?: string;
	}


	/** Request to create a configuration template. */
	export interface CreateConfigurationTemplateMessage {
		ApplicationName: string;
		TemplateName: string;
		SolutionStackName?: string;
		PlatformArn?: string;

		/** A specification for an environment configuration. */
		SourceConfiguration?: SourceConfiguration;
		EnvironmentId?: string;
		Description?: string;
		OptionSettings?: Array<ConfigurationOptionSetting>;
		Tags?: Array<Tag>;
	}


	/** <p/> */
	export interface CreateEnvironmentMessage {
		ApplicationName: string;
		EnvironmentName?: string;
		GroupName?: string;
		Description?: string;
		CNAMEPrefix?: string;

		/** Describes the properties of an environment tier */
		Tier?: EnvironmentTier;
		Tags?: Array<Tag>;
		VersionLabel?: string;
		TemplateName?: string;
		SolutionStackName?: string;
		PlatformArn?: string;
		OptionSettings?: Array<ConfigurationOptionSetting>;
		OptionsToRemove?: Array<OptionSpecification>;
		OperationsRole?: string;
	}


	/** Request to create a new platform version. */
	export interface CreatePlatformVersionRequest {
		PlatformName: string;
		PlatformVersion: string;

		/**
		 * The bucket and key of an item stored in Amazon S3.
		 * Required
		 */
		PlatformDefinitionBundle: S3Location;
		EnvironmentName?: string;
		OptionSettings?: Array<ConfigurationOptionSetting>;
		Tags?: Array<Tag>;
	}


	/** Request to delete an application. */
	export interface DeleteApplicationMessage {
		ApplicationName: string;
		TerminateEnvByForce?: boolean;
	}


	/** Request to delete an application version. */
	export interface DeleteApplicationVersionMessage {
		ApplicationName: string;
		VersionLabel: string;
		DeleteSourceBundle?: boolean;
	}


	/** Request to delete a configuration template. */
	export interface DeleteConfigurationTemplateMessage {
		ApplicationName: string;
		TemplateName: string;
	}


	/** Request to delete a draft environment configuration. */
	export interface DeleteEnvironmentConfigurationMessage {
		ApplicationName: string;
		EnvironmentName: string;
	}

	export interface DeletePlatformVersionRequest {
		PlatformArn?: string;
	}


	/** Request to describe application versions. */
	export interface DescribeApplicationVersionsMessage {
		ApplicationName?: string;
		VersionLabels?: Array<string>;
		MaxRecords?: number;
		NextToken?: string;
	}


	/** Request to describe one or more applications. */
	export interface DescribeApplicationsMessage {
		ApplicationNames?: Array<string>;
	}


	/** Result message containing a list of application version descriptions. */
	export interface DescribeConfigurationOptionsMessage {
		ApplicationName?: string;
		TemplateName?: string;
		EnvironmentName?: string;
		SolutionStackName?: string;
		PlatformArn?: string;
		Options?: Array<OptionSpecification>;
	}


	/** Result message containing all of the configuration settings for a specified solution stack or configuration template. */
	export interface DescribeConfigurationSettingsMessage {
		ApplicationName: string;
		TemplateName?: string;
		EnvironmentName?: string;
	}


	/** See the example below to learn how to create a request body. */
	export interface DescribeEnvironmentHealthRequest {
		EnvironmentName?: string;
		EnvironmentId?: string;
		AttributeNames?: Array<EnvironmentHealthAttribute>;
	}

	export enum EnvironmentHealth { Green = 0, Yellow = 1, Red = 2, Grey = 3 }


	/** Request to list completed and failed managed actions. */
	export interface DescribeEnvironmentManagedActionHistoryRequest {
		EnvironmentId?: string;
		EnvironmentName?: string;
		NextToken?: string;
		MaxItems?: number;
	}


	/** Request to list an environment's upcoming and in-progress managed actions. */
	export interface DescribeEnvironmentManagedActionsRequest {
		EnvironmentName?: string;
		EnvironmentId?: string;
		Status?: ManagedActionStatus;
	}


	/** Request to describe the resources in an environment. */
	export interface DescribeEnvironmentResourcesMessage {
		EnvironmentId?: string;
		EnvironmentName?: string;
	}


	/** Request to describe one or more environments. */
	export interface DescribeEnvironmentsMessage {
		ApplicationName?: string;
		VersionLabel?: string;
		EnvironmentIds?: Array<string>;
		EnvironmentNames?: Array<string>;
		IncludeDeleted?: boolean;
		IncludedDeletedBackTo?: Date;
		MaxRecords?: number;
		NextToken?: string;
	}

	export enum EventSeverity { TRACE = 0, DEBUG = 1, INFO = 2, WARN = 3, ERROR = 4, FATAL = 5 }


	/** Request to retrieve a list of events for an environment. */
	export interface DescribeEventsMessage {
		ApplicationName?: string;
		VersionLabel?: string;
		TemplateName?: string;
		EnvironmentId?: string;
		EnvironmentName?: string;
		PlatformArn?: string;
		RequestId?: string;
		Severity?: EventDescriptionSeverity;
		StartTime?: Date;
		EndTime?: Date;
		MaxRecords?: number;
		NextToken?: string;
	}


	/** Parameters for a call to <code>DescribeInstancesHealth</code>. */
	export interface DescribeInstancesHealthRequest {
		EnvironmentName?: string;
		EnvironmentId?: string;
		AttributeNames?: Array<InstancesHealthAttribute>;
		NextToken?: string;
	}

	export interface DescribePlatformVersionRequest {
		PlatformArn?: string;
	}


	/** Request to disassociate the operations role from an environment. */
	export interface DisassociateEnvironmentOperationsRoleMessage {
		EnvironmentName: string;
	}

	export enum EnvironmentStatus { Launching = 0, Updating = 1, Ready = 2, Terminating = 3, Terminated = 4 }

	export enum EnvironmentHealthStatus { NoData = 0, Unknown = 1, Pending = 2, Ok = 3, Info = 4, Warning = 5, Degraded = 6, Severe = 7, Suspended = 8 }

	export enum EnvironmentInfoType { tail = 0, bundle = 1 }

	export enum FailureType { UpdateCancelled = 0, CancellationFailed = 1, RollbackFailed = 2, RollbackSuccessful = 3, InternalFailure = 4, InvalidEnvironmentState = 5, PermissionsError = 6 }

	export interface ListPlatformBranchesRequest {
		Filters?: Array<SearchFilter>;
		MaxRecords?: number;
		NextToken?: string;
	}

	export interface ListPlatformVersionsRequest {
		Filters?: Array<PlatformFilter>;
		MaxRecords?: number;
		NextToken?: string;
	}

	export interface ListTagsForResourceMessage {
		ResourceArn: string;
	}

	export enum PlatformStatus { Creating = 0, Failed = 1, Ready = 2, Deleting = 3, Deleted = 4 }


	/** <p/> */
	export interface RebuildEnvironmentMessage {
		EnvironmentId?: string;
		EnvironmentName?: string;
	}


	/** Request to retrieve logs from an environment and store them in your Elastic Beanstalk storage bucket. */
	export interface RequestEnvironmentInfoMessage {
		EnvironmentId?: string;
		EnvironmentName?: string;
		InfoType: EnvironmentInfoDescriptionInfoType;
	}


	/** <p/> */
	export interface RestartAppServerMessage {
		EnvironmentId?: string;
		EnvironmentName?: string;
	}


	/** Request to download logs retrieved with <a>RequestEnvironmentInfo</a>. */
	export interface RetrieveEnvironmentInfoMessage {
		EnvironmentId?: string;
		EnvironmentName?: string;
		InfoType: EnvironmentInfoDescriptionInfoType;
	}


	/** Swaps the CNAMEs of two environments. */
	export interface SwapEnvironmentCNAMEsMessage {
		SourceEnvironmentId?: string;
		SourceEnvironmentName?: string;
		DestinationEnvironmentId?: string;
		DestinationEnvironmentName?: string;
	}


	/** Request to terminate an environment. */
	export interface TerminateEnvironmentMessage {
		EnvironmentId?: string;
		EnvironmentName?: string;
		TerminateResources?: boolean;
		ForceTerminate?: boolean;
	}


	/** Request to update an application. */
	export interface UpdateApplicationMessage {
		ApplicationName: string;
		Description?: string;
	}

	export interface UpdateApplicationResourceLifecycleMessage {
		ApplicationName: string;

		/**
		 * The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that AWS Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions.
		 * Required
		 */
		ResourceLifecycleConfig: ApplicationResourceLifecycleConfig;
	}


	/** <p/> */
	export interface UpdateApplicationVersionMessage {
		ApplicationName: string;
		VersionLabel: string;
		Description?: string;
	}


	/** The result message containing the options for the specified solution stack. */
	export interface UpdateConfigurationTemplateMessage {
		ApplicationName: string;
		TemplateName: string;
		Description?: string;
		OptionSettings?: Array<ConfigurationOptionSetting>;
		OptionsToRemove?: Array<OptionSpecification>;
	}


	/** Request to update an environment. */
	export interface UpdateEnvironmentMessage {
		ApplicationName?: string;
		EnvironmentId?: string;
		EnvironmentName?: string;
		GroupName?: string;
		Description?: string;

		/** Describes the properties of an environment tier */
		Tier?: EnvironmentTier;
		VersionLabel?: string;
		TemplateName?: string;
		SolutionStackName?: string;
		PlatformArn?: string;
		OptionSettings?: Array<ConfigurationOptionSetting>;
		OptionsToRemove?: Array<OptionSpecification>;
	}

	export interface UpdateTagsForResourceMessage {
		ResourceArn: string;
		TagsToAdd?: Array<Tag>;
		TagsToRemove?: Array<string>;
	}


	/** A list of validation messages for a specified configuration template. */
	export interface ValidateConfigurationSettingsMessage {
		ApplicationName: string;
		TemplateName?: string;
		EnvironmentName?: string;
		OptionSettings: Array<ConfigurationOptionSetting>;
	}

	export enum ValidationSeverity { error = 0, warning = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Cancels in-progress environment configuration update or application version deployment.
		 * Get #Action=AbortEnvironmentUpdate
		 * @param {string} EnvironmentId This specifies the ID of the environment with the in-progress update that you want to cancel.
		 * @param {string} EnvironmentName This specifies the name of the environment with the in-progress update that you want to cancel.
		 * @return {void} Success
		 */
		GET_AbortEnvironmentUpdate(EnvironmentId: string, EnvironmentName: string, Action: GET_AbortEnvironmentUpdateAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AbortEnvironmentUpdate?EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Applies a scheduled managed action immediately. A managed action can be applied only if its status is <code>Scheduled</code>. Get the status and action ID of a managed action with <a>DescribeEnvironmentManagedActions</a>.
		 * Get #Action=ApplyEnvironmentManagedAction
		 * @param {string} EnvironmentName The name of the target environment.
		 * @param {string} EnvironmentId The environment ID of the target environment.
		 * @param {string} ActionId The action ID of the scheduled managed action to execute.
		 * @return {void} Success
		 */
		GET_ApplyEnvironmentManagedAction(EnvironmentName: string, EnvironmentId: string, ActionId: string, Action: GET_ApplyEnvironmentManagedActionAction, Version: GET_ApplyEnvironmentManagedActionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ApplyEnvironmentManagedAction?EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&ActionId=' + (ActionId == null ? '' : encodeURIComponent(ActionId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
		 * Get #Action=AssociateEnvironmentOperationsRole
		 * @param {string} EnvironmentName The name of the environment to which to set the operations role.
		 * @param {string} OperationsRole The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role.
		 * @return {void} Success
		 */
		GET_AssociateEnvironmentOperationsRole(EnvironmentName: string, OperationsRole: string, Action: GET_AssociateEnvironmentOperationsRoleAction, Version: GET_AssociateEnvironmentOperationsRoleVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AssociateEnvironmentOperationsRole?EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&OperationsRole=' + (OperationsRole == null ? '' : encodeURIComponent(OperationsRole)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks if the specified CNAME is available.
		 * Get #Action=CheckDNSAvailability
		 * @param {string} CNAMEPrefix The prefix used when this CNAME is reserved.
		 * @return {void} Success
		 */
		GET_CheckDNSAvailability(CNAMEPrefix: string, Action: GET_CheckDNSAvailabilityAction, Version: GET_CheckDNSAvailabilityVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CheckDNSAvailability?CNAMEPrefix=' + (CNAMEPrefix == null ? '' : encodeURIComponent(CNAMEPrefix)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a> for details.
		 * Get #Action=ComposeEnvironments
		 * @param {string} ApplicationName The name of the application to which the specified source bundles belong.
		 * @param {string} GroupName The name of the group to which the target environments belong. Specify a group name only if the environment name defined in each target environment's manifest ends with a + (plus) character. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details.
		 * @param {Array<string>} VersionLabels A list of version labels, specifying one or more application source bundles that belong to the target application. Each source bundle must include an environment manifest that specifies the name of the environment and the name of the solution stack to use, and optionally can specify environment links to create.
		 * @return {void} Success
		 */
		GET_ComposeEnvironments(ApplicationName: string, GroupName: string, VersionLabels: Array<string>, Action: GET_ComposeEnvironmentsAction, Version: GET_ComposeEnvironmentsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ComposeEnvironments?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&GroupName=' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '&' + VersionLabels.map(z => `VersionLabels=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an application that has one configuration template named <code>default</code> and no application versions.
		 * Get #Action=CreateApplication
		 * @param {string} ApplicationName The name of the application. Must be unique within your account.
		 * @param {string} Description Your description of the application.
		 * @param {GET_CreateApplicationResourceLifecycleConfig} ResourceLifecycleConfig Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions.
		 * @param {Array<Tag>} Tags <p>Specifies the tags applied to the application.</p> <p>Elastic Beanstalk applies these tags only to the application. Environments that you create in the application don't inherit the tags.</p>
		 * @return {void} Success
		 */
		GET_CreateApplication(ApplicationName: string, Description: string, ResourceLifecycleConfig: GET_CreateApplicationResourceLifecycleConfig, Tags: Array<Tag>, Action: GET_CreateApplicationAction, Version: GET_CreateApplicationVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateApplication?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&ResourceLifecycleConfig=' + ResourceLifecycleConfig + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an application version for the specified application. You can create an application version from a source bundle in Amazon S3, a commit in AWS CodeCommit, or the output of an AWS CodeBuild build as follows:</p> <p>Specify a commit in an AWS CodeCommit repository with <code>SourceBuildInformation</code>.</p> <p>Specify a build in an AWS CodeBuild with <code>SourceBuildInformation</code> and <code>BuildConfiguration</code>.</p> <p>Specify a source bundle in S3 with <code>SourceBundle</code> </p> <p>Omit both <code>SourceBuildInformation</code> and <code>SourceBundle</code> to use the default sample application.</p> <note> <p>After you create an application version with a specified Amazon S3 bucket and key location, you can't change that Amazon S3 location. If you change the Amazon S3 location, you receive an exception when you attempt to launch an environment from the application version.</p> </note>
		 * Get #Action=CreateApplicationVersion
		 * @param {string} ApplicationName  The name of the application. If no application is found with this name, and <code>AutoCreateApplication</code> is <code>false</code>, returns an <code>InvalidParameterValue</code> error. 
		 * @param {string} VersionLabel <p>A label identifying this version.</p> <p>Constraint: Must be unique per application. If an application version already exists with this label for the specified application, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. </p>
		 * @param {string} Description A description of this application version.
		 * @param {GET_CreateApplicationVersionSourceBuildInformation} SourceBuildInformation Specify a commit in an AWS CodeCommit Git repository to use as the source code for the application version.
		 * @param {GET_CreateApplicationVersionSourceBundle} SourceBundle <p>The Amazon S3 bucket and key that identify the location of the source bundle for this version.</p> <note> <p>The Amazon S3 bucket must be in the same region as the environment.</p> </note> <p>Specify a source bundle in S3 or a commit in an AWS CodeCommit repository (with <code>SourceBuildInformation</code>), but not both. If neither <code>SourceBundle</code> nor <code>SourceBuildInformation</code> are provided, Elastic Beanstalk uses a sample application.</p>
		 * @param {GET_CreateApplicationVersionBuildConfiguration} BuildConfiguration Settings for an AWS CodeBuild build.
		 * @param {boolean} AutoCreateApplication Set to <code>true</code> to create an application with the specified name if it doesn't already exist.
		 * @param {boolean} Process <p>Pre-processes and validates the environment manifest (<code>env.yaml</code>) and configuration files (<code>*.config</code> files in the <code>.ebextensions</code> folder) in the source bundle. Validating configuration files can identify issues prior to deploying the application version to an environment.</p> <p>You must turn processing on for application versions that you create using AWS CodeBuild or AWS CodeCommit. For application versions built from a source bundle in Amazon S3, processing is optional.</p> <note> <p>The <code>Process</code> option validates Elastic Beanstalk configuration files. It doesn't validate your application's configuration files, like proxy server or Docker configuration.</p> </note>
		 * @param {Array<Tag>} Tags <p>Specifies the tags applied to the application version.</p> <p>Elastic Beanstalk applies these tags only to the application version. Environments that use the application version don't inherit the tags.</p>
		 * @return {void} Success
		 */
		GET_CreateApplicationVersion(ApplicationName: string, VersionLabel: string, Description: string, SourceBuildInformation: GET_CreateApplicationVersionSourceBuildInformation, SourceBundle: GET_CreateApplicationVersionSourceBundle, BuildConfiguration: GET_CreateApplicationVersionBuildConfiguration, AutoCreateApplication: boolean, Process: boolean, Tags: Array<Tag>, Action: GET_CreateApplicationVersionAction, Version: GET_CreateApplicationVersionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateApplicationVersion?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&VersionLabel=' + (VersionLabel == null ? '' : encodeURIComponent(VersionLabel)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&SourceBuildInformation=' + SourceBuildInformation + '&SourceBundle=' + SourceBundle + '&BuildConfiguration=' + BuildConfiguration + '&AutoCreateApplication=' + AutoCreateApplication + '&Process=' + Process + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an AWS Elastic Beanstalk configuration template, associated with a specific Elastic Beanstalk application. You define application configuration settings in a configuration template. You can then use the configuration template to deploy different versions of the application with the same configuration settings.</p> <p>Templates aren't associated with any environment. The <code>EnvironmentName</code> response element is always <code>null</code>.</p> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> <li> <p> <a>DescribeConfigurationSettings</a> </p> </li> <li> <p> <a>ListAvailableSolutionStacks</a> </p> </li> </ul>
		 * Get #Action=CreateConfigurationTemplate
		 * @param {string} ApplicationName The name of the Elastic Beanstalk application to associate with this configuration template.
		 * @param {string} TemplateName <p>The name of the configuration template.</p> <p>Constraint: This name must be unique per application.</p>
		 * @param {string} SolutionStackName <p>The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses. For example, <code>64bit Amazon Linux 2013.09 running Tomcat 7 Java 7</code>. A solution stack specifies the operating system, runtime, and application server for a configuration template. It also determines the set of configuration options as well as the possible and default values. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html">Supported Platforms</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.</p> <p>You must specify <code>SolutionStackName</code> if you don't specify <code>PlatformArn</code>, <code>EnvironmentId</code>, or <code>SourceConfiguration</code>.</p> <p>Use the <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListAvailableSolutionStacks.html"> <code>ListAvailableSolutionStacks</code> </a> API to obtain a list of available solution stacks.</p>
		 * @param {string} PlatformArn <p>The Amazon Resource Name (ARN) of the custom platform. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html"> Custom Platforms</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.</p> <note> <p>If you specify <code>PlatformArn</code>, then don't specify <code>SolutionStackName</code>.</p> </note>
		 * @param {GET_CreateConfigurationTemplateSourceConfiguration} SourceConfiguration <p>An Elastic Beanstalk configuration template to base this one on. If specified, Elastic Beanstalk uses the configuration values from the specified configuration template to create a new configuration.</p> <p>Values specified in <code>OptionSettings</code> override any values obtained from the <code>SourceConfiguration</code>.</p> <p>You must specify <code>SourceConfiguration</code> if you don't specify <code>PlatformArn</code>, <code>EnvironmentId</code>, or <code>SolutionStackName</code>.</p> <p>Constraint: If both solution stack name and source configuration are specified, the solution stack of the source configuration template must match the specified solution stack name.</p>
		 * @param {string} EnvironmentId The ID of an environment whose settings you want to use to create the configuration template. You must specify <code>EnvironmentId</code> if you don't specify <code>PlatformArn</code>, <code>SolutionStackName</code>, or <code>SourceConfiguration</code>.
		 * @param {string} Description An optional description for this configuration.
		 * @param {Array<ConfigurationOptionSetting>} OptionSettings Option values for the Elastic Beanstalk configuration, such as the instance type. If specified, these values override the values obtained from the solution stack or the source configuration template. For a complete list of Elastic Beanstalk configuration options, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html">Option Values</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
		 * @param {Array<Tag>} Tags Specifies the tags applied to the configuration template.
		 * @return {void} Success
		 */
		GET_CreateConfigurationTemplate(ApplicationName: string, TemplateName: string, SolutionStackName: string, PlatformArn: string, SourceConfiguration: GET_CreateConfigurationTemplateSourceConfiguration, EnvironmentId: string, Description: string, OptionSettings: Array<ConfigurationOptionSetting>, Tags: Array<Tag>, Action: GET_CreateConfigurationTemplateAction, Version: GET_CreateConfigurationTemplateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateConfigurationTemplate?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&SolutionStackName=' + (SolutionStackName == null ? '' : encodeURIComponent(SolutionStackName)) + '&PlatformArn=' + (PlatformArn == null ? '' : encodeURIComponent(PlatformArn)) + '&SourceConfiguration=' + SourceConfiguration + '&EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&' + OptionSettings.map(z => `OptionSettings=${z}`).join('&') + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Launches an AWS Elastic Beanstalk environment for the specified application using the specified configuration.
		 * Get #Action=CreateEnvironment
		 * @param {string} ApplicationName The name of the application that is associated with this environment.
		 * @param {string} EnvironmentName <p>A unique name for the environment.</p> <p>Constraint: Must be from 4 to 40 characters in length. The name can contain only letters, numbers, and hyphens. It can't start or end with a hyphen. This name must be unique within a region in your account. If the specified name already exists in the region, Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. </p> <p>If you don't specify the <code>CNAMEPrefix</code> parameter, the environment name becomes part of the CNAME, and therefore part of the visible URL for your application.</p>
		 * @param {string} GroupName The name of the group to which the target environment belongs. Specify a group name only if the environment's name is specified in an environment manifest and not with the environment name parameter. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details.
		 * @param {string} Description Your description for this environment.
		 * @param {string} CNAMEPrefix If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL. If not specified, the CNAME is generated automatically by appending a random alphanumeric string to the environment name.
		 * @param {GET_CreateEnvironmentTier} Tier Specifies the tier to use in creating this environment. The environment tier that you choose determines whether Elastic Beanstalk provisions resources to support a web application that handles HTTP(S) requests or a web application that handles background-processing tasks.
		 * @param {Array<Tag>} Tags Specifies the tags applied to resources in the environment.
		 * @param {string} VersionLabel <p>The name of the application version to deploy.</p> <p>Default: If not specified, Elastic Beanstalk attempts to deploy the sample application.</p>
		 * @param {string} TemplateName <p>The name of the Elastic Beanstalk configuration template to use with the environment.</p> <note> <p>If you specify <code>TemplateName</code>, then don't specify <code>SolutionStackName</code>.</p> </note>
		 * @param {string} SolutionStackName <p>The name of an Elastic Beanstalk solution stack (platform version) to use with the environment. If specified, Elastic Beanstalk sets the configuration values to the default values associated with the specified solution stack. For a list of current solution stacks, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/platforms/platforms-supported.html">Elastic Beanstalk Supported Platforms</a> in the <i>AWS Elastic Beanstalk Platforms</i> guide.</p> <note> <p>If you specify <code>SolutionStackName</code>, don't specify <code>PlatformArn</code> or <code>TemplateName</code>.</p> </note>
		 * @param {string} PlatformArn <p>The Amazon Resource Name (ARN) of the custom platform to use with the environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html">Custom Platforms</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.</p> <note> <p>If you specify <code>PlatformArn</code>, don't specify <code>SolutionStackName</code>.</p> </note>
		 * @param {Array<ConfigurationOptionSetting>} OptionSettings If specified, AWS Elastic Beanstalk sets the specified configuration options to the requested value in the configuration set for the new environment. These override the values obtained from the solution stack or the configuration template.
		 * @param {Array<OptionSpecification>} OptionsToRemove A list of custom user-defined configuration options to remove from the configuration set for this new environment.
		 * @param {string} OperationsRole The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role. If specified, Elastic Beanstalk uses the operations role for permissions to downstream services during this call and during subsequent calls acting on this environment. To specify an operations role, you must have the <code>iam:PassRole</code> permission for the role. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
		 * @return {void} Success
		 */
		GET_CreateEnvironment(ApplicationName: string, EnvironmentName: string, GroupName: string, Description: string, CNAMEPrefix: string, Tier: GET_CreateEnvironmentTier, Tags: Array<Tag>, VersionLabel: string, TemplateName: string, SolutionStackName: string, PlatformArn: string, OptionSettings: Array<ConfigurationOptionSetting>, OptionsToRemove: Array<OptionSpecification>, OperationsRole: string, Action: GET_CreateEnvironmentAction, Version: GET_CreateEnvironmentVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateEnvironment?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&GroupName=' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&CNAMEPrefix=' + (CNAMEPrefix == null ? '' : encodeURIComponent(CNAMEPrefix)) + '&Tier=' + Tier + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&VersionLabel=' + (VersionLabel == null ? '' : encodeURIComponent(VersionLabel)) + '&TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&SolutionStackName=' + (SolutionStackName == null ? '' : encodeURIComponent(SolutionStackName)) + '&PlatformArn=' + (PlatformArn == null ? '' : encodeURIComponent(PlatformArn)) + '&' + OptionSettings.map(z => `OptionSettings=${z}`).join('&') + '&' + OptionsToRemove.map(z => `OptionsToRemove=${z}`).join('&') + '&OperationsRole=' + (OperationsRole == null ? '' : encodeURIComponent(OperationsRole)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new version of your custom platform.
		 * Get #Action=CreatePlatformVersion
		 * @param {string} PlatformName The name of your custom platform.
		 * @param {string} PlatformVersion The number, such as 1.0.2, for the new platform version.
		 * @param {GET_CreatePlatformVersionPlatformDefinitionBundle} PlatformDefinitionBundle The location of the platform definition archive in Amazon S3.
		 * @param {string} EnvironmentName The name of the builder environment.
		 * @param {Array<ConfigurationOptionSetting>} OptionSettings The configuration option settings to apply to the builder environment.
		 * @param {Array<Tag>} Tags <p>Specifies the tags applied to the new platform version.</p> <p>Elastic Beanstalk applies these tags only to the platform version. Environments that you create using the platform version don't inherit the tags.</p>
		 * @return {void} Success
		 */
		GET_CreatePlatformVersion(PlatformName: string, PlatformVersion: string, PlatformDefinitionBundle: GET_CreatePlatformVersionPlatformDefinitionBundle, EnvironmentName: string, OptionSettings: Array<ConfigurationOptionSetting>, Tags: Array<Tag>, Action: GET_CreatePlatformVersionAction, Version: GET_CreatePlatformVersionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreatePlatformVersion?PlatformName=' + (PlatformName == null ? '' : encodeURIComponent(PlatformName)) + '&PlatformVersion=' + (PlatformVersion == null ? '' : encodeURIComponent(PlatformVersion)) + '&PlatformDefinitionBundle=' + PlatformDefinitionBundle + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&' + OptionSettings.map(z => `OptionSettings=${z}`).join('&') + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, <code>CreateStorageLocation</code> still returns the bucket name but does not create a new bucket.
		 * Get #Action=CreateStorageLocation
		 * @return {void} Success
		 */
		GET_CreateStorageLocation(Action: GET_CreateStorageLocationAction, Version: GET_CreateStorageLocationVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateStorageLocation?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, <code>CreateStorageLocation</code> still returns the bucket name but does not create a new bucket.
		 * Post #Action=CreateStorageLocation
		 * @return {void} Success
		 */
		POST_CreateStorageLocation(Action: GET_CreateStorageLocationAction, Version: POST_CreateStorageLocationVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=CreateStorageLocation?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.</p> <note> <p>You cannot delete an application that has a running environment.</p> </note>
		 * Get #Action=DeleteApplication
		 * @param {string} ApplicationName The name of the application to delete.
		 * @param {boolean} TerminateEnvByForce When set to true, running environments will be terminated before deleting the application.
		 * @return {void} Success
		 */
		GET_DeleteApplication(ApplicationName: string, TerminateEnvByForce: boolean, Action: GET_DeleteApplicationAction, Version: GET_DeleteApplicationVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteApplication?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&TerminateEnvByForce=' + TerminateEnvByForce + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified version from the specified application.</p> <note> <p>You cannot delete an application version that is associated with a running environment.</p> </note>
		 * Get #Action=DeleteApplicationVersion
		 * @param {string} ApplicationName The name of the application to which the version belongs.
		 * @param {string} VersionLabel The label of the version to delete.
		 * @param {boolean} DeleteSourceBundle Set to <code>true</code> to delete the source bundle from your storage bucket. Otherwise, the application version is deleted only from Elastic Beanstalk and the source bundle remains in Amazon S3.
		 * @return {void} Success
		 */
		GET_DeleteApplicationVersion(ApplicationName: string, VersionLabel: string, DeleteSourceBundle: boolean, Action: GET_DeleteApplicationVersionAction, Version: GET_DeleteApplicationVersionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteApplicationVersion?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&VersionLabel=' + (VersionLabel == null ? '' : encodeURIComponent(VersionLabel)) + '&DeleteSourceBundle=' + DeleteSourceBundle + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified configuration template.</p> <note> <p>When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment.</p> </note>
		 * Get #Action=DeleteConfigurationTemplate
		 * @param {string} ApplicationName The name of the application to delete the configuration template from.
		 * @param {string} TemplateName The name of the configuration template to delete.
		 * @return {void} Success
		 */
		GET_DeleteConfigurationTemplate(ApplicationName: string, TemplateName: string, Action: GET_DeleteConfigurationTemplateAction, Version: GET_DeleteConfigurationTemplateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteConfigurationTemplate?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the draft configuration associated with the running environment.</p> <p>Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.</p>
		 * Get #Action=DeleteEnvironmentConfiguration
		 * @param {string} ApplicationName The name of the application the environment is associated with.
		 * @param {string} EnvironmentName The name of the environment to delete the draft configuration from.
		 * @return {void} Success
		 */
		GET_DeleteEnvironmentConfiguration(ApplicationName: string, EnvironmentName: string, Action: GET_DeleteEnvironmentConfigurationAction, Version: GET_DeleteEnvironmentConfigurationVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteEnvironmentConfiguration?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified version of a custom platform.
		 * Get #Action=DeletePlatformVersion
		 * @param {string} PlatformArn The ARN of the version of the custom platform.
		 * @return {void} Success
		 */
		GET_DeletePlatformVersion(PlatformArn: string, Action: GET_DeletePlatformVersionAction, Version: GET_DeletePlatformVersionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeletePlatformVersion?PlatformArn=' + (PlatformArn == null ? '' : encodeURIComponent(PlatformArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account.</p> <p>The result currently has one set of attributes—resource quotas.</p>
		 * Get #Action=DescribeAccountAttributes
		 * @return {void} Success
		 */
		GET_DescribeAccountAttributes(Action: GET_DescribeAccountAttributesAction, Version: GET_DescribeAccountAttributesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAccountAttributes?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account.</p> <p>The result currently has one set of attributes—resource quotas.</p>
		 * Post #Action=DescribeAccountAttributes
		 * @return {void} Success
		 */
		POST_DescribeAccountAttributes(Action: GET_DescribeAccountAttributesAction, Version: POST_DescribeAccountAttributesVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=DescribeAccountAttributes?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a list of application versions.
		 * Get #Action=DescribeApplicationVersions
		 * @param {string} ApplicationName Specify an application name to show only application versions for that application.
		 * @param {Array<string>} VersionLabels Specify a version label to show a specific application version.
		 * @param {number} MaxRecords <p>For a paginated request. Specify a maximum number of application versions to include in each response.</p> <p>If no <code>MaxRecords</code> is specified, all available application versions are retrieved in a single response.</p>
		 * @param {string} NextToken <p>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If no <code>NextToken</code> is specified, the first page is retrieved.</p>
		 * @return {void} Success
		 */
		GET_DescribeApplicationVersions(ApplicationName: string, VersionLabels: Array<string>, MaxRecords: number, NextToken: string, Action: GET_DescribeApplicationVersionsAction, Version: GET_DescribeApplicationVersionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeApplicationVersions?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&' + VersionLabels.map(z => `VersionLabels=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the descriptions of existing applications.
		 * Get #Action=DescribeApplications
		 * @param {Array<string>} ApplicationNames If specified, AWS Elastic Beanstalk restricts the returned descriptions to only include those with the specified names.
		 * @return {void} Success
		 */
		GET_DescribeApplications(ApplicationNames: Array<string>, Action: GET_DescribeApplicationsAction, Version: GET_DescribeApplicationsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeApplications?' + ApplicationNames.map(z => `ApplicationNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the configuration options that are used in a particular configuration template or environment, or that a specified solution stack defines. The description includes the values the options, their default values, and an indication of the required action on a running environment if an option value is changed.
		 * Get #Action=DescribeConfigurationOptions
		 * @param {string} ApplicationName The name of the application associated with the configuration template or environment. Only needed if you want to describe the configuration options associated with either the configuration template or environment.
		 * @param {string} TemplateName The name of the configuration template whose configuration options you want to describe.
		 * @param {string} EnvironmentName The name of the environment whose configuration options you want to describe.
		 * @param {string} SolutionStackName The name of the solution stack whose configuration options you want to describe.
		 * @param {string} PlatformArn The ARN of the custom platform.
		 * @param {Array<OptionSpecification>} Options If specified, restricts the descriptions to only the specified options.
		 * @return {void} Success
		 */
		GET_DescribeConfigurationOptions(ApplicationName: string, TemplateName: string, EnvironmentName: string, SolutionStackName: string, PlatformArn: string, Options: Array<OptionSpecification>, Action: GET_DescribeConfigurationOptionsAction, Version: GET_DescribeConfigurationOptionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeConfigurationOptions?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&SolutionStackName=' + (SolutionStackName == null ? '' : encodeURIComponent(SolutionStackName)) + '&PlatformArn=' + (PlatformArn == null ? '' : encodeURIComponent(PlatformArn)) + '&' + Options.map(z => `Options=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment.</p> <p>When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy.</p> <p>Related Topics</p> <ul> <li> <p> <a>DeleteEnvironmentConfiguration</a> </p> </li> </ul>
		 * Get #Action=DescribeConfigurationSettings
		 * @param {string} ApplicationName The application for the environment or configuration template.
		 * @param {string} TemplateName <p>The name of the configuration template to describe.</p> <p> Conditional: You must specify either this parameter or an EnvironmentName, but not both. If you specify both, AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. If you do not specify either, AWS Elastic Beanstalk returns a <code>MissingRequiredParameter</code> error. </p>
		 * @param {string} EnvironmentName <p>The name of the environment to describe.</p> <p> Condition: You must specify either this or a TemplateName, but not both. If you specify both, AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @return {void} Success
		 */
		GET_DescribeConfigurationSettings(ApplicationName: string, TemplateName: string, EnvironmentName: string, Action: GET_DescribeConfigurationSettingsAction, Version: GET_DescribeConfigurationSettingsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeConfigurationSettings?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about the overall health of the specified environment. The <b>DescribeEnvironmentHealth</b> operation is only available with AWS Elastic Beanstalk Enhanced Health.
		 * Get #Action=DescribeEnvironmentHealth
		 * @param {string} EnvironmentName <p>Specify the environment by name.</p> <p>You must specify either this or an EnvironmentName, or both.</p>
		 * @param {string} EnvironmentId <p>Specify the environment by ID.</p> <p>You must specify either this or an EnvironmentName, or both.</p>
		 * @param {Array<EnvironmentHealthAttribute>} AttributeNames Specify the response elements to return. To retrieve all attributes, set to <code>All</code>. If no attribute names are specified, returns the name of the environment.
		 * @return {void} Success
		 */
		GET_DescribeEnvironmentHealth(EnvironmentName: string, EnvironmentId: string, AttributeNames: Array<EnvironmentHealthAttribute>, Action: GET_DescribeEnvironmentHealthAction, Version: GET_DescribeEnvironmentHealthVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEnvironmentHealth?EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&' + AttributeNames.map(z => `AttributeNames=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists an environment's completed and failed managed actions.
		 * Get #Action=DescribeEnvironmentManagedActionHistory
		 * @param {string} EnvironmentId The environment ID of the target environment.
		 * @param {string} EnvironmentName The name of the target environment.
		 * @param {string} NextToken The pagination token returned by a previous request.
		 * @param {number} MaxItems The maximum number of items to return for a single request.
		 * @return {void} Success
		 */
		GET_DescribeEnvironmentManagedActionHistory(EnvironmentId: string, EnvironmentName: string, NextToken: string, MaxItems: number, Action: GET_DescribeEnvironmentManagedActionHistoryAction, Version: GET_DescribeEnvironmentManagedActionHistoryVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEnvironmentManagedActionHistory?EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists an environment's upcoming and in-progress managed actions.
		 * Get #Action=DescribeEnvironmentManagedActions
		 * @param {string} EnvironmentName The name of the target environment.
		 * @param {string} EnvironmentId The environment ID of the target environment.
		 * @param {ManagedActionStatus} Status To show only actions with a particular status, specify a status.
		 * @return {void} Success
		 */
		GET_DescribeEnvironmentManagedActions(EnvironmentName: string, EnvironmentId: string, Status: ManagedActionStatus, Action: GET_DescribeEnvironmentManagedActionsAction, Version: GET_DescribeEnvironmentManagedActionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEnvironmentManagedActions?EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&Status=' + Status + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns AWS resources for this environment.
		 * Get #Action=DescribeEnvironmentResources
		 * @param {string} EnvironmentId <p>The ID of the environment to retrieve AWS resource usage data.</p> <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @param {string} EnvironmentName <p>The name of the environment to retrieve AWS resource usage data.</p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @return {void} Success
		 */
		GET_DescribeEnvironmentResources(EnvironmentId: string, EnvironmentName: string, Action: GET_DescribeEnvironmentResourcesAction, Version: GET_DescribeEnvironmentResourcesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEnvironmentResources?EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns descriptions for existing environments.
		 * Get #Action=DescribeEnvironments
		 * @param {string} ApplicationName If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application.
		 * @param {string} VersionLabel If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application version.
		 * @param {Array<string>} EnvironmentIds If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified IDs.
		 * @param {Array<string>} EnvironmentNames If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified names.
		 * @param {boolean} IncludeDeleted <p>Indicates whether to include deleted environments:</p> <p> <code>true</code>: Environments that have been deleted after <code>IncludedDeletedBackTo</code> are displayed.</p> <p> <code>false</code>: Do not include deleted environments.</p>
		 * @param {Date} IncludedDeletedBackTo  If specified when <code>IncludeDeleted</code> is set to <code>true</code>, then environments deleted after this date are displayed. 
		 * @param {number} MaxRecords <p>For a paginated request. Specify a maximum number of environments to include in each response.</p> <p>If no <code>MaxRecords</code> is specified, all available environments are retrieved in a single response.</p>
		 * @param {string} NextToken <p>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If no <code>NextToken</code> is specified, the first page is retrieved.</p>
		 * @return {void} Success
		 */
		GET_DescribeEnvironments(ApplicationName: string, VersionLabel: string, EnvironmentIds: Array<string>, EnvironmentNames: Array<string>, IncludeDeleted: boolean, IncludedDeletedBackTo: Date, MaxRecords: number, NextToken: string, Action: GET_DescribeEnvironmentsAction, Version: GET_DescribeEnvironmentsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEnvironments?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&VersionLabel=' + (VersionLabel == null ? '' : encodeURIComponent(VersionLabel)) + '&' + EnvironmentIds.map(z => `EnvironmentIds=${encodeURIComponent(z)}`).join('&') + '&' + EnvironmentNames.map(z => `EnvironmentNames=${encodeURIComponent(z)}`).join('&') + '&IncludeDeleted=' + IncludeDeleted + '&IncludedDeletedBackTo=' + IncludedDeletedBackTo.toISOString() + '&MaxRecords=' + MaxRecords + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns list of event descriptions matching criteria up to the last 6 weeks.</p> <note> <p>This action returns the most recent 1,000 events from the specified <code>NextToken</code>.</p> </note>
		 * Get #Action=DescribeEvents
		 * @param {string} ApplicationName If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those associated with this application.
		 * @param {string} VersionLabel If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this application version.
		 * @param {string} TemplateName If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that are associated with this environment configuration.
		 * @param {string} EnvironmentId If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this environment.
		 * @param {string} EnvironmentName If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this environment.
		 * @param {string} PlatformArn The ARN of a custom platform version. If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this custom platform version.
		 * @param {string} RequestId If specified, AWS Elastic Beanstalk restricts the described events to include only those associated with this request ID.
		 * @param {EventDescriptionSeverity} Severity If specified, limits the events returned from this call to include only those with the specified severity or higher.
		 * @param {Date} StartTime If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that occur on or after this time.
		 * @param {Date} EndTime  If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that occur up to, but not including, the <code>EndTime</code>. 
		 * @param {number} MaxRecords Specifies the maximum number of events that can be returned, beginning with the most recent event.
		 * @param {string} NextToken Pagination token. If specified, the events return the next batch of results.
		 * @return {void} Success
		 */
		GET_DescribeEvents(ApplicationName: string, VersionLabel: string, TemplateName: string, EnvironmentId: string, EnvironmentName: string, PlatformArn: string, RequestId: string, Severity: EventDescriptionSeverity, StartTime: Date, EndTime: Date, MaxRecords: number, NextToken: string, Action: GET_DescribeEventsAction, Version: GET_DescribeEventsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEvents?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&VersionLabel=' + (VersionLabel == null ? '' : encodeURIComponent(VersionLabel)) + '&TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&PlatformArn=' + (PlatformArn == null ? '' : encodeURIComponent(PlatformArn)) + '&RequestId=' + (RequestId == null ? '' : encodeURIComponent(RequestId)) + '&Severity=' + Severity + '&StartTime=' + StartTime.toISOString() + '&EndTime=' + EndTime.toISOString() + '&MaxRecords=' + MaxRecords + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves detailed information about the health of instances in your AWS Elastic Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health reporting</a>.
		 * Get #Action=DescribeInstancesHealth
		 * @param {string} EnvironmentName Specify the AWS Elastic Beanstalk environment by name.
		 * @param {string} EnvironmentId Specify the AWS Elastic Beanstalk environment by ID.
		 * @param {Array<InstancesHealthAttribute>} AttributeNames Specifies the response elements you wish to receive. To retrieve all attributes, set to <code>All</code>. If no attribute names are specified, returns a list of instances.
		 * @param {string} NextToken Specify the pagination token returned by a previous call.
		 * @return {void} Success
		 */
		GET_DescribeInstancesHealth(EnvironmentName: string, EnvironmentId: string, AttributeNames: Array<InstancesHealthAttribute>, NextToken: string, Action: GET_DescribeInstancesHealthAction, Version: GET_DescribeInstancesHealthVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeInstancesHealth?EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&' + AttributeNames.map(z => `AttributeNames=${z}`).join('&') + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of platform versions.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
		 * Get #Action=DescribePlatformVersion
		 * @param {string} PlatformArn The ARN of the platform version.
		 * @return {void} Success
		 */
		GET_DescribePlatformVersion(PlatformArn: string, Action: GET_DescribePlatformVersionAction, Version: GET_DescribePlatformVersionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribePlatformVersion?PlatformArn=' + (PlatformArn == null ? '' : encodeURIComponent(PlatformArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller's permissions for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
		 * Get #Action=DisassociateEnvironmentOperationsRole
		 * @param {string} EnvironmentName The name of the environment from which to disassociate the operations role.
		 * @return {void} Success
		 */
		GET_DisassociateEnvironmentOperationsRole(EnvironmentName: string, Action: GET_DisassociateEnvironmentOperationsRoleAction, Version: GET_DisassociateEnvironmentOperationsRoleVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DisassociateEnvironmentOperationsRole?EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.
		 * Get #Action=ListAvailableSolutionStacks
		 * @return {void} Success
		 */
		GET_ListAvailableSolutionStacks(Action: GET_ListAvailableSolutionStacksAction, Version: GET_ListAvailableSolutionStacksVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListAvailableSolutionStacks?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.
		 * Post #Action=ListAvailableSolutionStacks
		 * @return {void} Success
		 */
		POST_ListAvailableSolutionStacks(Action: GET_ListAvailableSolutionStacksAction, Version: POST_ListAvailableSolutionStacksVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=ListAvailableSolutionStacks?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the platform branches available for your account in an AWS Region. Provides summary information about each platform branch.</p> <p>For definitions of platform branch and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
		 * Get #Action=ListPlatformBranches
		 * @param {Array<SearchFilter>} Filters <p>Criteria for restricting the resulting list of platform branches. The filter is evaluated as a logical conjunction (AND) of the separate <code>SearchFilter</code> terms.</p> <p>The following list shows valid attribute values for each of the <code>SearchFilter</code> terms. Most operators take a single value. The <code>in</code> and <code>not_in</code> operators can take multiple values.</p> <ul> <li> <p> <code>Attribute = BranchName</code>:</p> <ul> <li> <p> <code>Operator</code>: <code>=</code> | <code>!=</code> | <code>begins_with</code> | <code>ends_with</code> | <code>contains</code> | <code>in</code> | <code>not_in</code> </p> </li> </ul> </li> <li> <p> <code>Attribute = LifecycleState</code>:</p> <ul> <li> <p> <code>Operator</code>: <code>=</code> | <code>!=</code> | <code>in</code> | <code>not_in</code> </p> </li> <li> <p> <code>Values</code>: <code>beta</code> | <code>supported</code> | <code>deprecated</code> | <code>retired</code> </p> </li> </ul> </li> <li> <p> <code>Attribute = PlatformName</code>:</p> <ul> <li> <p> <code>Operator</code>: <code>=</code> | <code>!=</code> | <code>begins_with</code> | <code>ends_with</code> | <code>contains</code> | <code>in</code> | <code>not_in</code> </p> </li> </ul> </li> <li> <p> <code>Attribute = TierType</code>:</p> <ul> <li> <p> <code>Operator</code>: <code>=</code> | <code>!=</code> </p> </li> <li> <p> <code>Values</code>: <code>WebServer/Standard</code> | <code>Worker/SQS/HTTP</code> </p> </li> </ul> </li> </ul> <p>Array size: limited to 10 <code>SearchFilter</code> objects.</p> <p>Within each <code>SearchFilter</code> item, the <code>Values</code> array is limited to 10 items.</p>
		 * @param {number} MaxRecords The maximum number of platform branch values returned in one call.
		 * @param {string} NextToken <p>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If no <code>NextToken</code> is specified, the first page is retrieved.</p>
		 * @return {void} Success
		 */
		GET_ListPlatformBranches(Filters: Array<SearchFilter>, MaxRecords: number, NextToken: string, Action: GET_ListPlatformBranchesAction, Version: GET_ListPlatformBranchesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListPlatformBranches?' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the platform versions available for your account in an AWS Region. Provides summary information about each platform version. Compare to <a>DescribePlatformVersion</a>, which provides full details about a single platform version.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
		 * Get #Action=ListPlatformVersions
		 * @param {Array<PlatformFilter>} Filters Criteria for restricting the resulting list of platform versions. The filter is interpreted as a logical conjunction (AND) of the separate <code>PlatformFilter</code> terms.
		 * @param {number} MaxRecords The maximum number of platform version values returned in one call.
		 * @param {string} NextToken <p>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If no <code>NextToken</code> is specified, the first page is retrieved.</p>
		 * @return {void} Success
		 */
		GET_ListPlatformVersions(Filters: Array<PlatformFilter>, MaxRecords: number, NextToken: string, Action: GET_ListPlatformVersionsAction, Version: GET_ListPlatformVersionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListPlatformVersions?' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p>
		 * Get #Action=ListTagsForResource
		 * @param {string} ResourceArn <p>The Amazon Resource Name (ARN) of the resouce for which a tag list is requested.</p> <p>Must be the ARN of an Elastic Beanstalk resource.</p>
		 * @return {void} Success
		 */
		GET_ListTagsForResource(ResourceArn: string, Action: GET_ListTagsForResourceAction, Version: GET_ListTagsForResourceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListTagsForResource?ResourceArn=' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart.
		 * Get #Action=RebuildEnvironment
		 * @param {string} EnvironmentId <p>The ID of the environment to rebuild.</p> <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @param {string} EnvironmentName <p>The name of the environment to rebuild.</p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @return {void} Success
		 */
		GET_RebuildEnvironment(EnvironmentId: string, EnvironmentName: string, Action: GET_RebuildEnvironmentAction, Version: GET_RebuildEnvironmentVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RebuildEnvironment?EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Initiates a request to compile the specified type of information of the deployed environment.</p> <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from the application server log files of every Amazon EC2 instance in your environment. </p> <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET containers do not support bundle logs. </p> <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p> <p>Related Topics</p> <ul> <li> <p> <a>RetrieveEnvironmentInfo</a> </p> </li> </ul>
		 * Get #Action=RequestEnvironmentInfo
		 * @param {string} EnvironmentId <p>The ID of the environment of the requested data.</p> <p>If no such environment is found, <code>RequestEnvironmentInfo</code> returns an <code>InvalidParameterValue</code> error. </p> <p>Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @param {string} EnvironmentName <p>The name of the environment of the requested data.</p> <p>If no such environment is found, <code>RequestEnvironmentInfo</code> returns an <code>InvalidParameterValue</code> error. </p> <p>Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @param {EnvironmentInfoDescriptionInfoType} InfoType The type of information to request.
		 * @return {void} Success
		 */
		GET_RequestEnvironmentInfo(EnvironmentId: string, EnvironmentName: string, InfoType: EnvironmentInfoDescriptionInfoType, Action: GET_RequestEnvironmentInfoAction, Version: GET_RequestEnvironmentInfoVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RequestEnvironmentInfo?EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&InfoType=' + InfoType + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Causes the environment to restart the application container server running on each Amazon EC2 instance.
		 * Get #Action=RestartAppServer
		 * @param {string} EnvironmentId <p>The ID of the environment to restart the server for.</p> <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @param {string} EnvironmentName <p>The name of the environment to restart the server for.</p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @return {void} Success
		 */
		GET_RestartAppServer(EnvironmentId: string, EnvironmentName: string, Action: GET_RestartAppServerAction, Version: GET_RestartAppServerVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RestartAppServer?EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a> request.</p> <p>Related Topics</p> <ul> <li> <p> <a>RequestEnvironmentInfo</a> </p> </li> </ul>
		 * Get #Action=RetrieveEnvironmentInfo
		 * @param {string} EnvironmentId <p>The ID of the data's environment.</p> <p>If no such environment is found, returns an <code>InvalidParameterValue</code> error.</p> <p>Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error.</p>
		 * @param {string} EnvironmentName <p>The name of the data's environment.</p> <p> If no such environment is found, returns an <code>InvalidParameterValue</code> error. </p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @param {EnvironmentInfoDescriptionInfoType} InfoType The type of information to retrieve.
		 * @return {void} Success
		 */
		GET_RetrieveEnvironmentInfo(EnvironmentId: string, EnvironmentName: string, InfoType: EnvironmentInfoDescriptionInfoType, Action: GET_RetrieveEnvironmentInfoAction, Version: GET_RetrieveEnvironmentInfoVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RetrieveEnvironmentInfo?EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&InfoType=' + InfoType + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Swaps the CNAMEs of two environments.
		 * Get #Action=SwapEnvironmentCNAMEs
		 * @param {string} SourceEnvironmentId <p>The ID of the source environment.</p> <p> Condition: You must specify at least the <code>SourceEnvironmentID</code> or the <code>SourceEnvironmentName</code>. You may also specify both. If you specify the <code>SourceEnvironmentId</code>, you must specify the <code>DestinationEnvironmentId</code>. </p>
		 * @param {string} SourceEnvironmentName <p>The name of the source environment.</p> <p> Condition: You must specify at least the <code>SourceEnvironmentID</code> or the <code>SourceEnvironmentName</code>. You may also specify both. If you specify the <code>SourceEnvironmentName</code>, you must specify the <code>DestinationEnvironmentName</code>. </p>
		 * @param {string} DestinationEnvironmentId <p>The ID of the destination environment.</p> <p> Condition: You must specify at least the <code>DestinationEnvironmentID</code> or the <code>DestinationEnvironmentName</code>. You may also specify both. You must specify the <code>SourceEnvironmentId</code> with the <code>DestinationEnvironmentId</code>. </p>
		 * @param {string} DestinationEnvironmentName <p>The name of the destination environment.</p> <p> Condition: You must specify at least the <code>DestinationEnvironmentID</code> or the <code>DestinationEnvironmentName</code>. You may also specify both. You must specify the <code>SourceEnvironmentName</code> with the <code>DestinationEnvironmentName</code>. </p>
		 * @return {void} Success
		 */
		GET_SwapEnvironmentCNAMEs(SourceEnvironmentId: string, SourceEnvironmentName: string, DestinationEnvironmentId: string, DestinationEnvironmentName: string, Action: GET_SwapEnvironmentCNAMEsAction, Version: GET_SwapEnvironmentCNAMEsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SwapEnvironmentCNAMEs?SourceEnvironmentId=' + (SourceEnvironmentId == null ? '' : encodeURIComponent(SourceEnvironmentId)) + '&SourceEnvironmentName=' + (SourceEnvironmentName == null ? '' : encodeURIComponent(SourceEnvironmentName)) + '&DestinationEnvironmentId=' + (DestinationEnvironmentId == null ? '' : encodeURIComponent(DestinationEnvironmentId)) + '&DestinationEnvironmentName=' + (DestinationEnvironmentName == null ? '' : encodeURIComponent(DestinationEnvironmentName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Terminates the specified environment.
		 * Get #Action=TerminateEnvironment
		 * @param {string} EnvironmentId <p>The ID of the environment to terminate.</p> <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @param {string} EnvironmentName <p>The name of the environment to terminate.</p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @param {boolean} TerminateResources <p>Indicates whether the associated AWS resources should shut down when the environment is terminated:</p> <ul> <li> <p> <code>true</code>: The specified environment as well as the associated AWS resources, such as Auto Scaling group and LoadBalancer, are terminated.</p> </li> <li> <p> <code>false</code>: AWS Elastic Beanstalk resource management is removed from the environment, but the AWS resources continue to operate.</p> </li> </ul> <p> For more information, see the <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/ug/"> AWS Elastic Beanstalk User Guide. </a> </p> <p> Default: <code>true</code> </p> <p> Valid Values: <code>true</code> | <code>false</code> </p>
		 * @param {boolean} ForceTerminate Terminates the target environment even if another environment in the same group is dependent on it.
		 * @return {void} Success
		 */
		GET_TerminateEnvironment(EnvironmentId: string, EnvironmentName: string, TerminateResources: boolean, ForceTerminate: boolean, Action: GET_TerminateEnvironmentAction, Version: GET_TerminateEnvironmentVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=TerminateEnvironment?EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&TerminateResources=' + TerminateResources + '&ForceTerminate=' + ForceTerminate + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the specified application to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear these properties, specify an empty string.</p> </note>
		 * Get #Action=UpdateApplication
		 * @param {string} ApplicationName The name of the application to update. If no such application is found, <code>UpdateApplication</code> returns an <code>InvalidParameterValue</code> error. 
		 * @param {string} Description <p>A new description for the application.</p> <p>Default: If not specified, AWS Elastic Beanstalk does not update the description.</p>
		 * @return {void} Success
		 */
		GET_UpdateApplication(ApplicationName: string, Description: string, Action: GET_UpdateApplicationAction, Version: GET_UpdateApplicationVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateApplication?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies lifecycle settings for an application.
		 * Get #Action=UpdateApplicationResourceLifecycle
		 * @param {string} ApplicationName The name of the application.
		 * @param {GET_UpdateApplicationResourceLifecycleResourceLifecycleConfig} ResourceLifecycleConfig The lifecycle configuration.
		 * @return {void} Success
		 */
		GET_UpdateApplicationResourceLifecycle(ApplicationName: string, ResourceLifecycleConfig: GET_UpdateApplicationResourceLifecycleResourceLifecycleConfig, Action: GET_UpdateApplicationResourceLifecycleAction, Version: GET_UpdateApplicationResourceLifecycleVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateApplicationResourceLifecycle?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&ResourceLifecycleConfig=' + ResourceLifecycleConfig + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the specified application version to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear properties, specify an empty string.</p> </note>
		 * Get #Action=UpdateApplicationVersion
		 * @param {string} ApplicationName <p>The name of the application associated with this version.</p> <p> If no application is found with this name, <code>UpdateApplication</code> returns an <code>InvalidParameterValue</code> error.</p>
		 * @param {string} VersionLabel <p>The name of the version to update.</p> <p>If no application version is found with this label, <code>UpdateApplication</code> returns an <code>InvalidParameterValue</code> error. </p>
		 * @param {string} Description A new description for this version.
		 * @return {void} Success
		 */
		GET_UpdateApplicationVersion(ApplicationName: string, VersionLabel: string, Description: string, Action: GET_UpdateApplicationVersionAction, Version: GET_UpdateApplicationVersionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateApplicationVersion?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&VersionLabel=' + (VersionLabel == null ? '' : encodeURIComponent(VersionLabel)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the specified configuration template to have the specified properties or configuration option values.</p> <note> <p>If a property (for example, <code>ApplicationName</code>) is not provided, its value remains unchanged. To clear such properties, specify an empty string.</p> </note> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> </ul>
		 * Get #Action=UpdateConfigurationTemplate
		 * @param {string} ApplicationName <p>The name of the application associated with the configuration template to update.</p> <p> If no application is found with this name, <code>UpdateConfigurationTemplate</code> returns an <code>InvalidParameterValue</code> error. </p>
		 * @param {string} TemplateName <p>The name of the configuration template to update.</p> <p> If no configuration template is found with this name, <code>UpdateConfigurationTemplate</code> returns an <code>InvalidParameterValue</code> error. </p>
		 * @param {string} Description A new description for the configuration.
		 * @param {Array<ConfigurationOptionSetting>} OptionSettings A list of configuration option settings to update with the new specified option value.
		 * @param {Array<OptionSpecification>} OptionsToRemove <p>A list of configuration options to remove from the configuration set.</p> <p> Constraint: You can remove only <code>UserDefined</code> configuration options. </p>
		 * @return {void} Success
		 */
		GET_UpdateConfigurationTemplate(ApplicationName: string, TemplateName: string, Description: string, OptionSettings: Array<ConfigurationOptionSetting>, OptionsToRemove: Array<OptionSpecification>, Action: GET_UpdateConfigurationTemplateAction, Version: GET_UpdateConfigurationTemplateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateConfigurationTemplate?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&' + OptionSettings.map(z => `OptionSettings=${z}`).join('&') + '&' + OptionsToRemove.map(z => `OptionsToRemove=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the environment description, deploys a new application version, updates the configuration settings to an entirely new configuration template, or updates select configuration option values in the running environment.</p> <p> Attempting to update both the release and configuration is not allowed and AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. </p> <p> When updating the configuration settings to a new template or individual settings, a draft configuration is created and <a>DescribeConfigurationSettings</a> for this environment returns two setting descriptions with different <code>DeploymentStatus</code> values. </p>
		 * Get #Action=UpdateEnvironment
		 * @param {string} ApplicationName The name of the application with which the environment is associated.
		 * @param {string} EnvironmentId <p>The ID of the environment to update.</p> <p>If no environment with this ID exists, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error.</p> <p>Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @param {string} EnvironmentName <p>The name of the environment to update. If no environment with this name exists, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. </p> <p>Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @param {string} GroupName The name of the group to which the target environment belongs. Specify a group name only if the environment's name is specified in an environment manifest and not with the environment name or environment ID parameters. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details.
		 * @param {string} Description If this parameter is specified, AWS Elastic Beanstalk updates the description of this environment.
		 * @param {GET_UpdateEnvironmentTier} Tier <p>This specifies the tier to use to update the environment.</p> <p>Condition: At this time, if you change the tier version, name, or type, AWS Elastic Beanstalk returns <code>InvalidParameterValue</code> error. </p>
		 * @param {string} VersionLabel If this parameter is specified, AWS Elastic Beanstalk deploys the named application version to the environment. If no such application version is found, returns an <code>InvalidParameterValue</code> error. 
		 * @param {string} TemplateName If this parameter is specified, AWS Elastic Beanstalk deploys this configuration template to the environment. If no such configuration template is found, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. 
		 * @param {string} SolutionStackName This specifies the platform version that the environment will run after the environment is updated.
		 * @param {string} PlatformArn The ARN of the platform, if used.
		 * @param {Array<ConfigurationOptionSetting>} OptionSettings If specified, AWS Elastic Beanstalk updates the configuration set associated with the running environment and sets the specified configuration options to the requested value.
		 * @param {Array<OptionSpecification>} OptionsToRemove A list of custom user-defined configuration options to remove from the configuration set for this environment.
		 * @return {void} Success
		 */
		GET_UpdateEnvironment(ApplicationName: string, EnvironmentId: string, EnvironmentName: string, GroupName: string, Description: string, Tier: GET_UpdateEnvironmentTier, VersionLabel: string, TemplateName: string, SolutionStackName: string, PlatformArn: string, OptionSettings: Array<ConfigurationOptionSetting>, OptionsToRemove: Array<OptionSpecification>, Action: GET_UpdateEnvironmentAction, Version: GET_UpdateEnvironmentVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateEnvironment?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&GroupName=' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&Tier=' + Tier + '&VersionLabel=' + (VersionLabel == null ? '' : encodeURIComponent(VersionLabel)) + '&TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&SolutionStackName=' + (SolutionStackName == null ? '' : encodeURIComponent(SolutionStackName)) + '&PlatformArn=' + (PlatformArn == null ? '' : encodeURIComponent(PlatformArn)) + '&' + OptionSettings.map(z => `OptionSettings=${z}`).join('&') + '&' + OptionsToRemove.map(z => `OptionsToRemove=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: <code>TagsToAdd</code> for tags to add or update, and <code>TagsToRemove</code>.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p> <p>If you create a custom IAM user policy to control permission to this operation, specify one of the following two virtual actions (or both) instead of the API operation name:</p> <dl> <dt>elasticbeanstalk:AddTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tags to add in the <code>TagsToAdd</code> parameter.</p> </dd> <dt>elasticbeanstalk:RemoveTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tag keys to remove in the <code>TagsToRemove</code> parameter.</p> </dd> </dl> <p>For details about creating a custom user policy, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#AWSHowTo.iam.policies">Creating a Custom User Policy</a>.</p>
		 * Get #Action=UpdateTagsForResource
		 * @param {string} ResourceArn <p>The Amazon Resource Name (ARN) of the resouce to be updated.</p> <p>Must be the ARN of an Elastic Beanstalk resource.</p>
		 * @param {Array<Tag>} TagsToAdd <p>A list of tags to add or update. If a key of an existing tag is added, the tag's value is updated.</p> <p>Specify at least one of these parameters: <code>TagsToAdd</code>, <code>TagsToRemove</code>.</p>
		 * @param {Array<string>} TagsToRemove <p>A list of tag keys to remove. If a tag key doesn't exist, it is silently ignored.</p> <p>Specify at least one of these parameters: <code>TagsToAdd</code>, <code>TagsToRemove</code>.</p>
		 * @return {void} Success
		 */
		GET_UpdateTagsForResource(ResourceArn: string, TagsToAdd: Array<Tag>, TagsToRemove: Array<string>, Action: GET_UpdateTagsForResourceAction, Version: GET_UpdateTagsForResourceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateTagsForResource?ResourceArn=' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '&' + TagsToAdd.map(z => `TagsToAdd=${z}`).join('&') + '&' + TagsToRemove.map(z => `TagsToRemove=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Takes a set of configuration settings and either a configuration template or environment, and determines whether those values are valid.</p> <p>This action returns a list of messages indicating any errors or warnings associated with the selection of option values.</p>
		 * Get #Action=ValidateConfigurationSettings
		 * @param {string} ApplicationName The name of the application that the configuration template or environment belongs to.
		 * @param {string} TemplateName <p>The name of the configuration template to validate the settings against.</p> <p>Condition: You cannot specify both this and an environment name.</p>
		 * @param {string} EnvironmentName <p>The name of the environment to validate the settings against.</p> <p>Condition: You cannot specify both this and a configuration template name.</p>
		 * @param {Array<ConfigurationOptionSetting>} OptionSettings A list of the options and desired values to evaluate.
		 * @return {void} Success
		 */
		GET_ValidateConfigurationSettings(ApplicationName: string, TemplateName: string, EnvironmentName: string, OptionSettings: Array<ConfigurationOptionSetting>, Action: GET_ValidateConfigurationSettingsAction, Version: GET_ValidateConfigurationSettingsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ValidateConfigurationSettings?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&' + OptionSettings.map(z => `OptionSettings=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_AbortEnvironmentUpdateAction { AbortEnvironmentUpdate = 0 }

	export enum GET_AbortEnvironmentUpdateVersion { _2010_12_01 = 0 }

	export enum POST_AbortEnvironmentUpdateVersion { _2010_12_01 = 0 }

	export enum GET_ApplyEnvironmentManagedActionAction { ApplyEnvironmentManagedAction = 0 }

	export enum GET_ApplyEnvironmentManagedActionVersion { _2010_12_01 = 0 }

	export enum POST_ApplyEnvironmentManagedActionVersion { _2010_12_01 = 0 }

	export enum GET_AssociateEnvironmentOperationsRoleAction { AssociateEnvironmentOperationsRole = 0 }

	export enum GET_AssociateEnvironmentOperationsRoleVersion { _2010_12_01 = 0 }

	export enum POST_AssociateEnvironmentOperationsRoleVersion { _2010_12_01 = 0 }

	export enum GET_CheckDNSAvailabilityAction { CheckDNSAvailability = 0 }

	export enum GET_CheckDNSAvailabilityVersion { _2010_12_01 = 0 }

	export enum POST_CheckDNSAvailabilityVersion { _2010_12_01 = 0 }

	export enum GET_ComposeEnvironmentsAction { ComposeEnvironments = 0 }

	export enum GET_ComposeEnvironmentsVersion { _2010_12_01 = 0 }

	export enum POST_ComposeEnvironmentsVersion { _2010_12_01 = 0 }

	export interface GET_CreateApplicationResourceLifecycleConfig {
		ServiceRole?: string;

		/** <p>The application version lifecycle settings for an application. Defines the rules that Elastic Beanstalk applies to an application's versions in order to avoid hitting the per-region limit for application versions.</p> <p>When Elastic Beanstalk deletes an application version from its database, you can no longer deploy that version to an environment. The source bundle remains in S3 unless you configure the rule to delete it.</p> */
		VersionLifecycleConfig?: ApplicationVersionLifecycleConfig;
	}

	export enum GET_CreateApplicationAction { CreateApplication = 0 }

	export enum GET_CreateApplicationVersion { _2010_12_01 = 0 }

	export enum POST_CreateApplicationVersion { _2010_12_01 = 0 }

	export interface GET_CreateApplicationVersionSourceBuildInformation {
		SourceType: SourceBuildInformationSourceType;
		SourceRepository: SourceBuildInformationSourceRepository;
		SourceLocation: string;
	}

	export interface GET_CreateApplicationVersionSourceBundle {
		S3Bucket?: string;
		S3Key?: string;
	}

	export interface GET_CreateApplicationVersionBuildConfiguration {
		ArtifactName?: string;
		CodeBuildServiceRole: string;
		ComputeType?: ComputeType;
		Image: string;
		TimeoutInMinutes?: number;
	}

	export enum GET_CreateApplicationVersionAction { CreateApplicationVersion = 0 }

	export enum GET_CreateApplicationVersionVersion { _2010_12_01 = 0 }

	export enum POST_CreateApplicationVersionVersion { _2010_12_01 = 0 }

	export interface GET_CreateConfigurationTemplateSourceConfiguration {
		ApplicationName?: string;
		TemplateName?: string;
	}

	export enum GET_CreateConfigurationTemplateAction { CreateConfigurationTemplate = 0 }

	export enum GET_CreateConfigurationTemplateVersion { _2010_12_01 = 0 }

	export enum POST_CreateConfigurationTemplateVersion { _2010_12_01 = 0 }

	export interface GET_CreateEnvironmentTier {
		Name?: string;
		Type?: string;
		Version?: string;
	}

	export enum GET_CreateEnvironmentAction { CreateEnvironment = 0 }

	export enum GET_CreateEnvironmentVersion { _2010_12_01 = 0 }

	export enum POST_CreateEnvironmentVersion { _2010_12_01 = 0 }

	export interface GET_CreatePlatformVersionPlatformDefinitionBundle {
		S3Bucket?: string;
		S3Key?: string;
	}

	export enum GET_CreatePlatformVersionAction { CreatePlatformVersion = 0 }

	export enum GET_CreatePlatformVersionVersion { _2010_12_01 = 0 }

	export enum POST_CreatePlatformVersionVersion { _2010_12_01 = 0 }

	export enum GET_CreateStorageLocationAction { CreateStorageLocation = 0 }

	export enum GET_CreateStorageLocationVersion { _2010_12_01 = 0 }

	export enum POST_CreateStorageLocationVersion { _2010_12_01 = 0 }

	export enum GET_DeleteApplicationAction { DeleteApplication = 0 }

	export enum GET_DeleteApplicationVersion { _2010_12_01 = 0 }

	export enum POST_DeleteApplicationVersion { _2010_12_01 = 0 }

	export enum GET_DeleteApplicationVersionAction { DeleteApplicationVersion = 0 }

	export enum GET_DeleteApplicationVersionVersion { _2010_12_01 = 0 }

	export enum POST_DeleteApplicationVersionVersion { _2010_12_01 = 0 }

	export enum GET_DeleteConfigurationTemplateAction { DeleteConfigurationTemplate = 0 }

	export enum GET_DeleteConfigurationTemplateVersion { _2010_12_01 = 0 }

	export enum POST_DeleteConfigurationTemplateVersion { _2010_12_01 = 0 }

	export enum GET_DeleteEnvironmentConfigurationAction { DeleteEnvironmentConfiguration = 0 }

	export enum GET_DeleteEnvironmentConfigurationVersion { _2010_12_01 = 0 }

	export enum POST_DeleteEnvironmentConfigurationVersion { _2010_12_01 = 0 }

	export enum GET_DeletePlatformVersionAction { DeletePlatformVersion = 0 }

	export enum GET_DeletePlatformVersionVersion { _2010_12_01 = 0 }

	export enum POST_DeletePlatformVersionVersion { _2010_12_01 = 0 }

	export enum GET_DescribeAccountAttributesAction { DescribeAccountAttributes = 0 }

	export enum GET_DescribeAccountAttributesVersion { _2010_12_01 = 0 }

	export enum POST_DescribeAccountAttributesVersion { _2010_12_01 = 0 }

	export enum GET_DescribeApplicationVersionsAction { DescribeApplicationVersions = 0 }

	export enum GET_DescribeApplicationVersionsVersion { _2010_12_01 = 0 }

	export enum POST_DescribeApplicationVersionsVersion { _2010_12_01 = 0 }

	export enum GET_DescribeApplicationsAction { DescribeApplications = 0 }

	export enum GET_DescribeApplicationsVersion { _2010_12_01 = 0 }

	export enum POST_DescribeApplicationsVersion { _2010_12_01 = 0 }

	export enum GET_DescribeConfigurationOptionsAction { DescribeConfigurationOptions = 0 }

	export enum GET_DescribeConfigurationOptionsVersion { _2010_12_01 = 0 }

	export enum POST_DescribeConfigurationOptionsVersion { _2010_12_01 = 0 }

	export enum GET_DescribeConfigurationSettingsAction { DescribeConfigurationSettings = 0 }

	export enum GET_DescribeConfigurationSettingsVersion { _2010_12_01 = 0 }

	export enum POST_DescribeConfigurationSettingsVersion { _2010_12_01 = 0 }

	export enum GET_DescribeEnvironmentHealthAction { DescribeEnvironmentHealth = 0 }

	export enum GET_DescribeEnvironmentHealthVersion { _2010_12_01 = 0 }

	export enum POST_DescribeEnvironmentHealthVersion { _2010_12_01 = 0 }

	export enum GET_DescribeEnvironmentManagedActionHistoryAction { DescribeEnvironmentManagedActionHistory = 0 }

	export enum GET_DescribeEnvironmentManagedActionHistoryVersion { _2010_12_01 = 0 }

	export enum POST_DescribeEnvironmentManagedActionHistoryVersion { _2010_12_01 = 0 }

	export enum GET_DescribeEnvironmentManagedActionsAction { DescribeEnvironmentManagedActions = 0 }

	export enum GET_DescribeEnvironmentManagedActionsVersion { _2010_12_01 = 0 }

	export enum POST_DescribeEnvironmentManagedActionsVersion { _2010_12_01 = 0 }

	export enum GET_DescribeEnvironmentResourcesAction { DescribeEnvironmentResources = 0 }

	export enum GET_DescribeEnvironmentResourcesVersion { _2010_12_01 = 0 }

	export enum POST_DescribeEnvironmentResourcesVersion { _2010_12_01 = 0 }

	export enum GET_DescribeEnvironmentsAction { DescribeEnvironments = 0 }

	export enum GET_DescribeEnvironmentsVersion { _2010_12_01 = 0 }

	export enum POST_DescribeEnvironmentsVersion { _2010_12_01 = 0 }

	export enum GET_DescribeEventsAction { DescribeEvents = 0 }

	export enum GET_DescribeEventsVersion { _2010_12_01 = 0 }

	export enum POST_DescribeEventsVersion { _2010_12_01 = 0 }

	export enum GET_DescribeInstancesHealthAction { DescribeInstancesHealth = 0 }

	export enum GET_DescribeInstancesHealthVersion { _2010_12_01 = 0 }

	export enum POST_DescribeInstancesHealthVersion { _2010_12_01 = 0 }

	export enum GET_DescribePlatformVersionAction { DescribePlatformVersion = 0 }

	export enum GET_DescribePlatformVersionVersion { _2010_12_01 = 0 }

	export enum POST_DescribePlatformVersionVersion { _2010_12_01 = 0 }

	export enum GET_DisassociateEnvironmentOperationsRoleAction { DisassociateEnvironmentOperationsRole = 0 }

	export enum GET_DisassociateEnvironmentOperationsRoleVersion { _2010_12_01 = 0 }

	export enum POST_DisassociateEnvironmentOperationsRoleVersion { _2010_12_01 = 0 }

	export enum GET_ListAvailableSolutionStacksAction { ListAvailableSolutionStacks = 0 }

	export enum GET_ListAvailableSolutionStacksVersion { _2010_12_01 = 0 }

	export enum POST_ListAvailableSolutionStacksVersion { _2010_12_01 = 0 }

	export enum GET_ListPlatformBranchesAction { ListPlatformBranches = 0 }

	export enum GET_ListPlatformBranchesVersion { _2010_12_01 = 0 }

	export enum POST_ListPlatformBranchesVersion { _2010_12_01 = 0 }

	export enum GET_ListPlatformVersionsAction { ListPlatformVersions = 0 }

	export enum GET_ListPlatformVersionsVersion { _2010_12_01 = 0 }

	export enum POST_ListPlatformVersionsVersion { _2010_12_01 = 0 }

	export enum GET_ListTagsForResourceAction { ListTagsForResource = 0 }

	export enum GET_ListTagsForResourceVersion { _2010_12_01 = 0 }

	export enum POST_ListTagsForResourceVersion { _2010_12_01 = 0 }

	export enum GET_RebuildEnvironmentAction { RebuildEnvironment = 0 }

	export enum GET_RebuildEnvironmentVersion { _2010_12_01 = 0 }

	export enum POST_RebuildEnvironmentVersion { _2010_12_01 = 0 }

	export enum GET_RequestEnvironmentInfoAction { RequestEnvironmentInfo = 0 }

	export enum GET_RequestEnvironmentInfoVersion { _2010_12_01 = 0 }

	export enum POST_RequestEnvironmentInfoVersion { _2010_12_01 = 0 }

	export enum GET_RestartAppServerAction { RestartAppServer = 0 }

	export enum GET_RestartAppServerVersion { _2010_12_01 = 0 }

	export enum POST_RestartAppServerVersion { _2010_12_01 = 0 }

	export enum GET_RetrieveEnvironmentInfoAction { RetrieveEnvironmentInfo = 0 }

	export enum GET_RetrieveEnvironmentInfoVersion { _2010_12_01 = 0 }

	export enum POST_RetrieveEnvironmentInfoVersion { _2010_12_01 = 0 }

	export enum GET_SwapEnvironmentCNAMEsAction { SwapEnvironmentCNAMEs = 0 }

	export enum GET_SwapEnvironmentCNAMEsVersion { _2010_12_01 = 0 }

	export enum POST_SwapEnvironmentCNAMEsVersion { _2010_12_01 = 0 }

	export enum GET_TerminateEnvironmentAction { TerminateEnvironment = 0 }

	export enum GET_TerminateEnvironmentVersion { _2010_12_01 = 0 }

	export enum POST_TerminateEnvironmentVersion { _2010_12_01 = 0 }

	export enum GET_UpdateApplicationAction { UpdateApplication = 0 }

	export enum GET_UpdateApplicationVersion { _2010_12_01 = 0 }

	export enum POST_UpdateApplicationVersion { _2010_12_01 = 0 }

	export interface GET_UpdateApplicationResourceLifecycleResourceLifecycleConfig {
		ServiceRole?: string;

		/** <p>The application version lifecycle settings for an application. Defines the rules that Elastic Beanstalk applies to an application's versions in order to avoid hitting the per-region limit for application versions.</p> <p>When Elastic Beanstalk deletes an application version from its database, you can no longer deploy that version to an environment. The source bundle remains in S3 unless you configure the rule to delete it.</p> */
		VersionLifecycleConfig?: ApplicationVersionLifecycleConfig;
	}

	export enum GET_UpdateApplicationResourceLifecycleAction { UpdateApplicationResourceLifecycle = 0 }

	export enum GET_UpdateApplicationResourceLifecycleVersion { _2010_12_01 = 0 }

	export enum POST_UpdateApplicationResourceLifecycleVersion { _2010_12_01 = 0 }

	export enum GET_UpdateApplicationVersionAction { UpdateApplicationVersion = 0 }

	export enum GET_UpdateApplicationVersionVersion { _2010_12_01 = 0 }

	export enum POST_UpdateApplicationVersionVersion { _2010_12_01 = 0 }

	export enum GET_UpdateConfigurationTemplateAction { UpdateConfigurationTemplate = 0 }

	export enum GET_UpdateConfigurationTemplateVersion { _2010_12_01 = 0 }

	export enum POST_UpdateConfigurationTemplateVersion { _2010_12_01 = 0 }

	export interface GET_UpdateEnvironmentTier {
		Name?: string;
		Type?: string;
		Version?: string;
	}

	export enum GET_UpdateEnvironmentAction { UpdateEnvironment = 0 }

	export enum GET_UpdateEnvironmentVersion { _2010_12_01 = 0 }

	export enum POST_UpdateEnvironmentVersion { _2010_12_01 = 0 }

	export enum GET_UpdateTagsForResourceAction { UpdateTagsForResource = 0 }

	export enum GET_UpdateTagsForResourceVersion { _2010_12_01 = 0 }

	export enum POST_UpdateTagsForResourceVersion { _2010_12_01 = 0 }

	export enum GET_ValidateConfigurationSettingsAction { ValidateConfigurationSettings = 0 }

	export enum GET_ValidateConfigurationSettingsVersion { _2010_12_01 = 0 }

	export enum POST_ValidateConfigurationSettingsVersion { _2010_12_01 = 0 }

}

