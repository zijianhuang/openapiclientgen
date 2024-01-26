import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface InsufficientPrivilegesException {
	}
	export interface InsufficientPrivilegesExceptionFormProperties {
	}
	export function CreateInsufficientPrivilegesExceptionFormGroup() {
		return new FormGroup<InsufficientPrivilegesExceptionFormProperties>({
		});

	}


	/** The result message containing information about the managed action. */
	export interface ApplyEnvironmentManagedActionResult {
		ActionId?: string;
		ActionDescription?: string;
		ActionType?: ActionType;
		Status?: string;
	}

	/** The result message containing information about the managed action. */
	export interface ApplyEnvironmentManagedActionResultFormProperties {
		ActionId: FormControl<string | null | undefined>,
		ActionDescription: FormControl<string | null | undefined>,
		ActionType: FormControl<ActionType | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateApplyEnvironmentManagedActionResultFormGroup() {
		return new FormGroup<ApplyEnvironmentManagedActionResultFormProperties>({
			ActionId: new FormControl<string | null | undefined>(undefined),
			ActionDescription: new FormControl<string | null | undefined>(undefined),
			ActionType: new FormControl<ActionType | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ActionType { InstanceRefresh = 0, PlatformUpdate = 1, Unknown = 2 }

	export interface ElasticBeanstalkServiceException {
	}
	export interface ElasticBeanstalkServiceExceptionFormProperties {
	}
	export function CreateElasticBeanstalkServiceExceptionFormGroup() {
		return new FormGroup<ElasticBeanstalkServiceExceptionFormProperties>({
		});

	}

	export interface ManagedActionInvalidStateException {
	}
	export interface ManagedActionInvalidStateExceptionFormProperties {
	}
	export function CreateManagedActionInvalidStateExceptionFormGroup() {
		return new FormGroup<ManagedActionInvalidStateExceptionFormProperties>({
		});

	}


	/** Indicates if the specified CNAME is available. */
	export interface CheckDNSAvailabilityResultMessage {
		Available?: boolean | null;
		FullyQualifiedCNAME?: string;
	}

	/** Indicates if the specified CNAME is available. */
	export interface CheckDNSAvailabilityResultMessageFormProperties {
		Available: FormControl<boolean | null | undefined>,
		FullyQualifiedCNAME: FormControl<string | null | undefined>,
	}
	export function CreateCheckDNSAvailabilityResultMessageFormGroup() {
		return new FormGroup<CheckDNSAvailabilityResultMessageFormProperties>({
			Available: new FormControl<boolean | null | undefined>(undefined),
			FullyQualifiedCNAME: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result message containing a list of environment descriptions. */
	export interface EnvironmentDescriptionsMessage {
		Environments?: Array<EnvironmentDescription>;
		NextToken?: string;
	}

	/** Result message containing a list of environment descriptions. */
	export interface EnvironmentDescriptionsMessageFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentDescriptionsMessageFormGroup() {
		return new FormGroup<EnvironmentDescriptionsMessageFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

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
		Status?: EnvironmentStatus;
		AbortableOperationInProgress?: boolean | null;
		Health?: EnvironmentHealth;
		HealthStatus?: EnvironmentHealthStatus;
		Resources?: EnvironmentResourcesDescription;
		Tier?: EnvironmentTier;
		EnvironmentLinks?: Array<EnvironmentLink>;
		EnvironmentArn?: string;
		OperationsRole?: string;
	}

	/** Describes the properties of an environment. */
	export interface EnvironmentDescriptionFormProperties {
		EnvironmentName: FormControl<string | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
		ApplicationName: FormControl<string | null | undefined>,
		VersionLabel: FormControl<string | null | undefined>,
		SolutionStackName: FormControl<string | null | undefined>,
		PlatformArn: FormControl<string | null | undefined>,
		TemplateName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EndpointURL: FormControl<string | null | undefined>,
		CNAME: FormControl<string | null | undefined>,
		DateCreated: FormControl<Date | null | undefined>,
		DateUpdated: FormControl<Date | null | undefined>,
		Status: FormControl<EnvironmentStatus | null | undefined>,
		AbortableOperationInProgress: FormControl<boolean | null | undefined>,
		Health: FormControl<EnvironmentHealth | null | undefined>,
		HealthStatus: FormControl<EnvironmentHealthStatus | null | undefined>,
		EnvironmentArn: FormControl<string | null | undefined>,
		OperationsRole: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentDescriptionFormGroup() {
		return new FormGroup<EnvironmentDescriptionFormProperties>({
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			ApplicationName: new FormControl<string | null | undefined>(undefined),
			VersionLabel: new FormControl<string | null | undefined>(undefined),
			SolutionStackName: new FormControl<string | null | undefined>(undefined),
			PlatformArn: new FormControl<string | null | undefined>(undefined),
			TemplateName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EndpointURL: new FormControl<string | null | undefined>(undefined),
			CNAME: new FormControl<string | null | undefined>(undefined),
			DateCreated: new FormControl<Date | null | undefined>(undefined),
			DateUpdated: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<EnvironmentStatus | null | undefined>(undefined),
			AbortableOperationInProgress: new FormControl<boolean | null | undefined>(undefined),
			Health: new FormControl<EnvironmentHealth | null | undefined>(undefined),
			HealthStatus: new FormControl<EnvironmentHealthStatus | null | undefined>(undefined),
			EnvironmentArn: new FormControl<string | null | undefined>(undefined),
			OperationsRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnvironmentStatus { Aborting = 0, Launching = 1, Updating = 2, LinkingFrom = 3, LinkingTo = 4, Ready = 5, Terminating = 6, Terminated = 7 }

	export enum EnvironmentHealth { Green = 0, Yellow = 1, Red = 2, Grey = 3 }

	export enum EnvironmentHealthStatus { NoData = 0, Unknown = 1, Pending = 2, Ok = 3, Info = 4, Warning = 5, Degraded = 6, Severe = 7, Suspended = 8 }


	/** Describes the AWS resources in use by this environment. This data is not live data. */
	export interface EnvironmentResourcesDescription {
		LoadBalancer?: LoadBalancerDescription;
	}

	/** Describes the AWS resources in use by this environment. This data is not live data. */
	export interface EnvironmentResourcesDescriptionFormProperties {
	}
	export function CreateEnvironmentResourcesDescriptionFormGroup() {
		return new FormGroup<EnvironmentResourcesDescriptionFormProperties>({
		});

	}


	/** Describes the details of a LoadBalancer. */
	export interface LoadBalancerDescription {
		LoadBalancerName?: string;
		Domain?: string;
		Listeners?: Array<Listener>;
	}

	/** Describes the details of a LoadBalancer. */
	export interface LoadBalancerDescriptionFormProperties {
		LoadBalancerName: FormControl<string | null | undefined>,
		Domain: FormControl<string | null | undefined>,
	}
	export function CreateLoadBalancerDescriptionFormGroup() {
		return new FormGroup<LoadBalancerDescriptionFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined),
			Domain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a Listener for the LoadBalancer. */
	export interface Listener {
		Protocol?: string;
		Port?: number | null;
	}

	/** Describes the properties of a Listener for the LoadBalancer. */
	export interface ListenerFormProperties {
		Protocol: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
	}
	export function CreateListenerFormGroup() {
		return new FormGroup<ListenerFormProperties>({
			Protocol: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the properties of an environment tier */
	export interface EnvironmentTier {
		Name?: string;
		Type?: string;
		Version?: string;
	}

	/** Describes the properties of an environment tier */
	export interface EnvironmentTierFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentTierFormGroup() {
		return new FormGroup<EnvironmentTierFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A link to another environment, defined in the environment's manifest. Links provide connection information in system properties that can be used to connect to another environment in the same group. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details. */
	export interface EnvironmentLink {
		LinkName?: string;
		EnvironmentName?: string;
	}

	/** A link to another environment, defined in the environment's manifest. Links provide connection information in system properties that can be used to connect to another environment in the same group. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details. */
	export interface EnvironmentLinkFormProperties {
		LinkName: FormControl<string | null | undefined>,
		EnvironmentName: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentLinkFormGroup() {
		return new FormGroup<EnvironmentLinkFormProperties>({
			LinkName: new FormControl<string | null | undefined>(undefined),
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TooManyEnvironmentsException {
	}
	export interface TooManyEnvironmentsExceptionFormProperties {
	}
	export function CreateTooManyEnvironmentsExceptionFormGroup() {
		return new FormGroup<TooManyEnvironmentsExceptionFormProperties>({
		});

	}


	/** Result message containing a single description of an application. */
	export interface ApplicationDescriptionMessage {
		Application?: ApplicationDescription;
	}

	/** Result message containing a single description of an application. */
	export interface ApplicationDescriptionMessageFormProperties {
	}
	export function CreateApplicationDescriptionMessageFormGroup() {
		return new FormGroup<ApplicationDescriptionMessageFormProperties>({
		});

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
		ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig;
	}

	/** Describes the properties of an application. */
	export interface ApplicationDescriptionFormProperties {
		ApplicationArn: FormControl<string | null | undefined>,
		ApplicationName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DateCreated: FormControl<Date | null | undefined>,
		DateUpdated: FormControl<Date | null | undefined>,
	}
	export function CreateApplicationDescriptionFormGroup() {
		return new FormGroup<ApplicationDescriptionFormProperties>({
			ApplicationArn: new FormControl<string | null | undefined>(undefined),
			ApplicationName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DateCreated: new FormControl<Date | null | undefined>(undefined),
			DateUpdated: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that AWS Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions. */
	export interface ApplicationResourceLifecycleConfig {
		ServiceRole?: string;
		VersionLifecycleConfig?: ApplicationVersionLifecycleConfig;
	}

	/** The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that AWS Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions. */
	export interface ApplicationResourceLifecycleConfigFormProperties {
		ServiceRole: FormControl<string | null | undefined>,
	}
	export function CreateApplicationResourceLifecycleConfigFormGroup() {
		return new FormGroup<ApplicationResourceLifecycleConfigFormProperties>({
			ServiceRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The application version lifecycle settings for an application. Defines the rules that Elastic Beanstalk applies to an application's versions in order to avoid hitting the per-region limit for application versions.</p> <p>When Elastic Beanstalk deletes an application version from its database, you can no longer deploy that version to an environment. The source bundle remains in S3 unless you configure the rule to delete it.</p> */
	export interface ApplicationVersionLifecycleConfig {
		MaxCountRule?: MaxCountRule;
		MaxAgeRule?: MaxAgeRule;
	}

	/** <p>The application version lifecycle settings for an application. Defines the rules that Elastic Beanstalk applies to an application's versions in order to avoid hitting the per-region limit for application versions.</p> <p>When Elastic Beanstalk deletes an application version from its database, you can no longer deploy that version to an environment. The source bundle remains in S3 unless you configure the rule to delete it.</p> */
	export interface ApplicationVersionLifecycleConfigFormProperties {
	}
	export function CreateApplicationVersionLifecycleConfigFormGroup() {
		return new FormGroup<ApplicationVersionLifecycleConfigFormProperties>({
		});

	}


	/** A lifecycle rule that deletes the oldest application version when the maximum count is exceeded. */
	export interface MaxCountRule {

		/** Required */
		Enabled: boolean;
		MaxCount?: number | null;
		DeleteSourceFromS3?: boolean | null;
	}

	/** A lifecycle rule that deletes the oldest application version when the maximum count is exceeded. */
	export interface MaxCountRuleFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
		MaxCount: FormControl<number | null | undefined>,
		DeleteSourceFromS3: FormControl<boolean | null | undefined>,
	}
	export function CreateMaxCountRuleFormGroup() {
		return new FormGroup<MaxCountRuleFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			MaxCount: new FormControl<number | null | undefined>(undefined),
			DeleteSourceFromS3: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A lifecycle rule that deletes application versions after the specified number of days. */
	export interface MaxAgeRule {

		/** Required */
		Enabled: boolean;
		MaxAgeInDays?: number | null;
		DeleteSourceFromS3?: boolean | null;
	}

	/** A lifecycle rule that deletes application versions after the specified number of days. */
	export interface MaxAgeRuleFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
		MaxAgeInDays: FormControl<number | null | undefined>,
		DeleteSourceFromS3: FormControl<boolean | null | undefined>,
	}
	export function CreateMaxAgeRuleFormGroup() {
		return new FormGroup<MaxAgeRuleFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			MaxAgeInDays: new FormControl<number | null | undefined>(undefined),
			DeleteSourceFromS3: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a tag applied to a resource in an environment. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	/** Describes a tag applied to a resource in an environment. */
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

	export interface TooManyApplicationsException {
	}
	export interface TooManyApplicationsExceptionFormProperties {
	}
	export function CreateTooManyApplicationsExceptionFormGroup() {
		return new FormGroup<TooManyApplicationsExceptionFormProperties>({
		});

	}


	/** Result message wrapping a single description of an application version. */
	export interface ApplicationVersionDescriptionMessage {
		ApplicationVersion?: ApplicationVersionDescription;
	}

	/** Result message wrapping a single description of an application version. */
	export interface ApplicationVersionDescriptionMessageFormProperties {
	}
	export function CreateApplicationVersionDescriptionMessageFormGroup() {
		return new FormGroup<ApplicationVersionDescriptionMessageFormProperties>({
		});

	}


	/** Describes the properties of an application version. */
	export interface ApplicationVersionDescription {
		ApplicationVersionArn?: string;
		ApplicationName?: string;
		Description?: string;
		VersionLabel?: string;
		SourceBuildInformation?: SourceBuildInformation;
		BuildArn?: string;
		SourceBundle?: S3Location;
		DateCreated?: Date;
		DateUpdated?: Date;
		Status?: ApplicationVersionStatus;
	}

	/** Describes the properties of an application version. */
	export interface ApplicationVersionDescriptionFormProperties {
		ApplicationVersionArn: FormControl<string | null | undefined>,
		ApplicationName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		VersionLabel: FormControl<string | null | undefined>,
		BuildArn: FormControl<string | null | undefined>,
		DateCreated: FormControl<Date | null | undefined>,
		DateUpdated: FormControl<Date | null | undefined>,
		Status: FormControl<ApplicationVersionStatus | null | undefined>,
	}
	export function CreateApplicationVersionDescriptionFormGroup() {
		return new FormGroup<ApplicationVersionDescriptionFormProperties>({
			ApplicationVersionArn: new FormControl<string | null | undefined>(undefined),
			ApplicationName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			VersionLabel: new FormControl<string | null | undefined>(undefined),
			BuildArn: new FormControl<string | null | undefined>(undefined),
			DateCreated: new FormControl<Date | null | undefined>(undefined),
			DateUpdated: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<ApplicationVersionStatus | null | undefined>(undefined),
		});

	}


	/** Location of the source code for an application version. */
	export interface SourceBuildInformation {

		/** Required */
		SourceType: SourceType;

		/** Required */
		SourceRepository: SourceRepository;

		/** Required */
		SourceLocation: string;
	}

	/** Location of the source code for an application version. */
	export interface SourceBuildInformationFormProperties {

		/** Required */
		SourceType: FormControl<SourceType | null | undefined>,

		/** Required */
		SourceRepository: FormControl<SourceRepository | null | undefined>,

		/** Required */
		SourceLocation: FormControl<string | null | undefined>,
	}
	export function CreateSourceBuildInformationFormGroup() {
		return new FormGroup<SourceBuildInformationFormProperties>({
			SourceType: new FormControl<SourceType | null | undefined>(undefined, [Validators.required]),
			SourceRepository: new FormControl<SourceRepository | null | undefined>(undefined, [Validators.required]),
			SourceLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SourceType { Git = 0, Zip = 1 }

	export enum SourceRepository { CodeCommit = 0, S3 = 1 }


	/** The bucket and key of an item stored in Amazon S3. */
	export interface S3Location {
		S3Bucket?: string;
		S3Key?: string;
	}

	/** The bucket and key of an item stored in Amazon S3. */
	export interface S3LocationFormProperties {
		S3Bucket: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
	}
	export function CreateS3LocationFormGroup() {
		return new FormGroup<S3LocationFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined),
			S3Key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApplicationVersionStatus { Processed = 0, Unprocessed = 1, Failed = 2, Processing = 3, Building = 4 }

	export enum ComputeType { BUILD_GENERAL1_SMALL = 0, BUILD_GENERAL1_MEDIUM = 1, BUILD_GENERAL1_LARGE = 2 }

	export interface TooManyApplicationVersionsException {
	}
	export interface TooManyApplicationVersionsExceptionFormProperties {
	}
	export function CreateTooManyApplicationVersionsExceptionFormGroup() {
		return new FormGroup<TooManyApplicationVersionsExceptionFormProperties>({
		});

	}

	export interface S3LocationNotInServiceRegionException {
	}
	export interface S3LocationNotInServiceRegionExceptionFormProperties {
	}
	export function CreateS3LocationNotInServiceRegionExceptionFormGroup() {
		return new FormGroup<S3LocationNotInServiceRegionExceptionFormProperties>({
		});

	}

	export interface CodeBuildNotInServiceRegionException {
	}
	export interface CodeBuildNotInServiceRegionExceptionFormProperties {
	}
	export function CreateCodeBuildNotInServiceRegionExceptionFormGroup() {
		return new FormGroup<CodeBuildNotInServiceRegionExceptionFormProperties>({
		});

	}


	/** Describes the settings for a configuration set. */
	export interface ConfigurationSettingsDescription {
		SolutionStackName?: string;
		PlatformArn?: string;
		ApplicationName?: string;
		TemplateName?: string;
		Description?: string;
		EnvironmentName?: string;
		DeploymentStatus?: ConfigurationDeploymentStatus;
		DateCreated?: Date;
		DateUpdated?: Date;
		OptionSettings?: Array<ConfigurationOptionSetting>;
	}

	/** Describes the settings for a configuration set. */
	export interface ConfigurationSettingsDescriptionFormProperties {
		SolutionStackName: FormControl<string | null | undefined>,
		PlatformArn: FormControl<string | null | undefined>,
		ApplicationName: FormControl<string | null | undefined>,
		TemplateName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EnvironmentName: FormControl<string | null | undefined>,
		DeploymentStatus: FormControl<ConfigurationDeploymentStatus | null | undefined>,
		DateCreated: FormControl<Date | null | undefined>,
		DateUpdated: FormControl<Date | null | undefined>,
	}
	export function CreateConfigurationSettingsDescriptionFormGroup() {
		return new FormGroup<ConfigurationSettingsDescriptionFormProperties>({
			SolutionStackName: new FormControl<string | null | undefined>(undefined),
			PlatformArn: new FormControl<string | null | undefined>(undefined),
			ApplicationName: new FormControl<string | null | undefined>(undefined),
			TemplateName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
			DeploymentStatus: new FormControl<ConfigurationDeploymentStatus | null | undefined>(undefined),
			DateCreated: new FormControl<Date | null | undefined>(undefined),
			DateUpdated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ConfigurationDeploymentStatus { deployed = 0, pending = 1, failed = 2 }


	/** A specification identifying an individual configuration option along with its current value. For a list of possible namespaces and option values, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html">Option Values</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.  */
	export interface ConfigurationOptionSetting {
		ResourceName?: string;
		Namespace?: string;
		OptionName?: string;
		Value?: string;
	}

	/** A specification identifying an individual configuration option along with its current value. For a list of possible namespaces and option values, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html">Option Values</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.  */
	export interface ConfigurationOptionSettingFormProperties {
		ResourceName: FormControl<string | null | undefined>,
		Namespace: FormControl<string | null | undefined>,
		OptionName: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationOptionSettingFormGroup() {
		return new FormGroup<ConfigurationOptionSettingFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined),
			Namespace: new FormControl<string | null | undefined>(undefined),
			OptionName: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TooManyBucketsException {
	}
	export interface TooManyBucketsExceptionFormProperties {
	}
	export function CreateTooManyBucketsExceptionFormGroup() {
		return new FormGroup<TooManyBucketsExceptionFormProperties>({
		});

	}

	export interface TooManyConfigurationTemplatesException {
	}
	export interface TooManyConfigurationTemplatesExceptionFormProperties {
	}
	export function CreateTooManyConfigurationTemplatesExceptionFormGroup() {
		return new FormGroup<TooManyConfigurationTemplatesExceptionFormProperties>({
		});

	}


	/** A specification identifying an individual configuration option. */
	export interface OptionSpecification {
		ResourceName?: string;
		Namespace?: string;
		OptionName?: string;
	}

	/** A specification identifying an individual configuration option. */
	export interface OptionSpecificationFormProperties {
		ResourceName: FormControl<string | null | undefined>,
		Namespace: FormControl<string | null | undefined>,
		OptionName: FormControl<string | null | undefined>,
	}
	export function CreateOptionSpecificationFormGroup() {
		return new FormGroup<OptionSpecificationFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined),
			Namespace: new FormControl<string | null | undefined>(undefined),
			OptionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePlatformVersionResult {
		PlatformSummary?: PlatformSummary;
		Builder?: Builder;
	}
	export interface CreatePlatformVersionResultFormProperties {
	}
	export function CreateCreatePlatformVersionResultFormGroup() {
		return new FormGroup<CreatePlatformVersionResultFormProperties>({
		});

	}


	/** Summary information about a platform version. */
	export interface PlatformSummary {
		PlatformArn?: string;
		PlatformOwner?: string;
		PlatformStatus?: PlatformStatus;
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

	/** Summary information about a platform version. */
	export interface PlatformSummaryFormProperties {
		PlatformArn: FormControl<string | null | undefined>,
		PlatformOwner: FormControl<string | null | undefined>,
		PlatformStatus: FormControl<PlatformStatus | null | undefined>,
		PlatformCategory: FormControl<string | null | undefined>,
		OperatingSystemName: FormControl<string | null | undefined>,
		OperatingSystemVersion: FormControl<string | null | undefined>,
		PlatformLifecycleState: FormControl<string | null | undefined>,
		PlatformVersion: FormControl<string | null | undefined>,
		PlatformBranchName: FormControl<string | null | undefined>,
		PlatformBranchLifecycleState: FormControl<string | null | undefined>,
	}
	export function CreatePlatformSummaryFormGroup() {
		return new FormGroup<PlatformSummaryFormProperties>({
			PlatformArn: new FormControl<string | null | undefined>(undefined),
			PlatformOwner: new FormControl<string | null | undefined>(undefined),
			PlatformStatus: new FormControl<PlatformStatus | null | undefined>(undefined),
			PlatformCategory: new FormControl<string | null | undefined>(undefined),
			OperatingSystemName: new FormControl<string | null | undefined>(undefined),
			OperatingSystemVersion: new FormControl<string | null | undefined>(undefined),
			PlatformLifecycleState: new FormControl<string | null | undefined>(undefined),
			PlatformVersion: new FormControl<string | null | undefined>(undefined),
			PlatformBranchName: new FormControl<string | null | undefined>(undefined),
			PlatformBranchLifecycleState: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PlatformStatus { Creating = 0, Failed = 1, Ready = 2, Deleting = 3, Deleted = 4 }


	/** The builder used to build the custom platform. */
	export interface Builder {
		ARN?: string;
	}

	/** The builder used to build the custom platform. */
	export interface BuilderFormProperties {
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateBuilderFormGroup() {
		return new FormGroup<BuilderFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TooManyPlatformsException {
	}
	export interface TooManyPlatformsExceptionFormProperties {
	}
	export function CreateTooManyPlatformsExceptionFormGroup() {
		return new FormGroup<TooManyPlatformsExceptionFormProperties>({
		});

	}


	/** Results of a <a>CreateStorageLocationResult</a> call. */
	export interface CreateStorageLocationResultMessage {
		S3Bucket?: string;
	}

	/** Results of a <a>CreateStorageLocationResult</a> call. */
	export interface CreateStorageLocationResultMessageFormProperties {
		S3Bucket: FormControl<string | null | undefined>,
	}
	export function CreateCreateStorageLocationResultMessageFormGroup() {
		return new FormGroup<CreateStorageLocationResultMessageFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface S3SubscriptionRequiredException {
	}
	export interface S3SubscriptionRequiredExceptionFormProperties {
	}
	export function CreateS3SubscriptionRequiredExceptionFormGroup() {
		return new FormGroup<S3SubscriptionRequiredExceptionFormProperties>({
		});

	}

	export interface OperationInProgressException {
	}
	export interface OperationInProgressExceptionFormProperties {
	}
	export function CreateOperationInProgressExceptionFormGroup() {
		return new FormGroup<OperationInProgressExceptionFormProperties>({
		});

	}

	export interface SourceBundleDeletionException {
	}
	export interface SourceBundleDeletionExceptionFormProperties {
	}
	export function CreateSourceBundleDeletionExceptionFormGroup() {
		return new FormGroup<SourceBundleDeletionExceptionFormProperties>({
		});

	}

	export interface DeletePlatformVersionResult {
		PlatformSummary?: PlatformSummary;
	}
	export interface DeletePlatformVersionResultFormProperties {
	}
	export function CreateDeletePlatformVersionResultFormGroup() {
		return new FormGroup<DeletePlatformVersionResultFormProperties>({
		});

	}

	export interface PlatformVersionStillReferencedException {
	}
	export interface PlatformVersionStillReferencedExceptionFormProperties {
	}
	export function CreatePlatformVersionStillReferencedExceptionFormGroup() {
		return new FormGroup<PlatformVersionStillReferencedExceptionFormProperties>({
		});

	}

	export interface DescribeAccountAttributesResult {
		ResourceQuotas?: ResourceQuotas;
	}
	export interface DescribeAccountAttributesResultFormProperties {
	}
	export function CreateDescribeAccountAttributesResultFormGroup() {
		return new FormGroup<DescribeAccountAttributesResultFormProperties>({
		});

	}


	/** A set of per-resource AWS Elastic Beanstalk quotas associated with an AWS account. They reflect Elastic Beanstalk resource limits for this account. */
	export interface ResourceQuotas {
		ApplicationQuota?: ResourceQuota;
		ApplicationVersionQuota?: ResourceQuota;
		EnvironmentQuota?: ResourceQuota;
		ConfigurationTemplateQuota?: ResourceQuota;
		CustomPlatformQuota?: ResourceQuota;
	}

	/** A set of per-resource AWS Elastic Beanstalk quotas associated with an AWS account. They reflect Elastic Beanstalk resource limits for this account. */
	export interface ResourceQuotasFormProperties {
	}
	export function CreateResourceQuotasFormGroup() {
		return new FormGroup<ResourceQuotasFormProperties>({
		});

	}


	/** The AWS Elastic Beanstalk quota information for a single resource type in an AWS account. It reflects the resource's limits for this account. */
	export interface ResourceQuota {
		Maximum?: number | null;
	}

	/** The AWS Elastic Beanstalk quota information for a single resource type in an AWS account. It reflects the resource's limits for this account. */
	export interface ResourceQuotaFormProperties {
		Maximum: FormControl<number | null | undefined>,
	}
	export function CreateResourceQuotaFormGroup() {
		return new FormGroup<ResourceQuotaFormProperties>({
			Maximum: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Result message wrapping a list of application version descriptions. */
	export interface ApplicationVersionDescriptionsMessage {
		ApplicationVersions?: Array<ApplicationVersionDescription>;
		NextToken?: string;
	}

	/** Result message wrapping a list of application version descriptions. */
	export interface ApplicationVersionDescriptionsMessageFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateApplicationVersionDescriptionsMessageFormGroup() {
		return new FormGroup<ApplicationVersionDescriptionsMessageFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result message containing a list of application descriptions. */
	export interface ApplicationDescriptionsMessage {
		Applications?: Array<ApplicationDescription>;
	}

	/** Result message containing a list of application descriptions. */
	export interface ApplicationDescriptionsMessageFormProperties {
	}
	export function CreateApplicationDescriptionsMessageFormGroup() {
		return new FormGroup<ApplicationDescriptionsMessageFormProperties>({
		});

	}


	/** Describes the settings for a specified configuration set. */
	export interface ConfigurationOptionsDescription {
		SolutionStackName?: string;
		PlatformArn?: string;
		Options?: Array<ConfigurationOptionDescription>;
	}

	/** Describes the settings for a specified configuration set. */
	export interface ConfigurationOptionsDescriptionFormProperties {
		SolutionStackName: FormControl<string | null | undefined>,
		PlatformArn: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationOptionsDescriptionFormGroup() {
		return new FormGroup<ConfigurationOptionsDescriptionFormProperties>({
			SolutionStackName: new FormControl<string | null | undefined>(undefined),
			PlatformArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the possible values for a configuration option. */
	export interface ConfigurationOptionDescription {
		Namespace?: string;
		Name?: string;
		DefaultValue?: string;
		ChangeSeverity?: string;
		UserDefined?: boolean | null;
		ValueType?: ConfigurationOptionValueType;
		ValueOptions?: Array<string>;
		MinValue?: number | null;
		MaxValue?: number | null;
		MaxLength?: number | null;
		Regex?: OptionRestrictionRegex;
	}

	/** Describes the possible values for a configuration option. */
	export interface ConfigurationOptionDescriptionFormProperties {
		Namespace: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		DefaultValue: FormControl<string | null | undefined>,
		ChangeSeverity: FormControl<string | null | undefined>,
		UserDefined: FormControl<boolean | null | undefined>,
		ValueType: FormControl<ConfigurationOptionValueType | null | undefined>,
		MinValue: FormControl<number | null | undefined>,
		MaxValue: FormControl<number | null | undefined>,
		MaxLength: FormControl<number | null | undefined>,
	}
	export function CreateConfigurationOptionDescriptionFormGroup() {
		return new FormGroup<ConfigurationOptionDescriptionFormProperties>({
			Namespace: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			DefaultValue: new FormControl<string | null | undefined>(undefined),
			ChangeSeverity: new FormControl<string | null | undefined>(undefined),
			UserDefined: new FormControl<boolean | null | undefined>(undefined),
			ValueType: new FormControl<ConfigurationOptionValueType | null | undefined>(undefined),
			MinValue: new FormControl<number | null | undefined>(undefined),
			MaxValue: new FormControl<number | null | undefined>(undefined),
			MaxLength: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ConfigurationOptionValueType { Scalar = 0, List = 1 }


	/** A regular expression representing a restriction on a string configuration option value. */
	export interface OptionRestrictionRegex {
		Pattern?: string;
		Label?: string;
	}

	/** A regular expression representing a restriction on a string configuration option value. */
	export interface OptionRestrictionRegexFormProperties {
		Pattern: FormControl<string | null | undefined>,
		Label: FormControl<string | null | undefined>,
	}
	export function CreateOptionRestrictionRegexFormGroup() {
		return new FormGroup<OptionRestrictionRegexFormProperties>({
			Pattern: new FormControl<string | null | undefined>(undefined),
			Label: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The results from a request to change the configuration settings of an environment. */
	export interface ConfigurationSettingsDescriptions {
		ConfigurationSettings?: Array<ConfigurationSettingsDescription>;
	}

	/** The results from a request to change the configuration settings of an environment. */
	export interface ConfigurationSettingsDescriptionsFormProperties {
	}
	export function CreateConfigurationSettingsDescriptionsFormGroup() {
		return new FormGroup<ConfigurationSettingsDescriptionsFormProperties>({
		});

	}


	/** Health details for an AWS Elastic Beanstalk environment. */
	export interface DescribeEnvironmentHealthResult {
		EnvironmentName?: string;
		HealthStatus?: string;
		Status?: EnvironmentHealth;
		Color?: string;
		Causes?: Array<string>;
		ApplicationMetrics?: ApplicationMetrics;
		InstancesHealth?: InstanceHealthSummary;
		RefreshedAt?: Date;
	}

	/** Health details for an AWS Elastic Beanstalk environment. */
	export interface DescribeEnvironmentHealthResultFormProperties {
		EnvironmentName: FormControl<string | null | undefined>,
		HealthStatus: FormControl<string | null | undefined>,
		Status: FormControl<EnvironmentHealth | null | undefined>,
		Color: FormControl<string | null | undefined>,
		RefreshedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeEnvironmentHealthResultFormGroup() {
		return new FormGroup<DescribeEnvironmentHealthResultFormProperties>({
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
			HealthStatus: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EnvironmentHealth | null | undefined>(undefined),
			Color: new FormControl<string | null | undefined>(undefined),
			RefreshedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Application request metrics for an AWS Elastic Beanstalk environment. */
	export interface ApplicationMetrics {
		Duration?: number | null;
		RequestCount?: number | null;
		StatusCodes?: StatusCodes;
		Latency?: Latency;
	}

	/** Application request metrics for an AWS Elastic Beanstalk environment. */
	export interface ApplicationMetricsFormProperties {
		Duration: FormControl<number | null | undefined>,
		RequestCount: FormControl<number | null | undefined>,
	}
	export function CreateApplicationMetricsFormGroup() {
		return new FormGroup<ApplicationMetricsFormProperties>({
			Duration: new FormControl<number | null | undefined>(undefined),
			RequestCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the percentage of requests over the last 10 seconds that resulted in each type of status code response. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">Status Code Definitions</a>. */
	export interface StatusCodes {
		Status2xx?: number | null;
		Status3xx?: number | null;
		Status4xx?: number | null;
		Status5xx?: number | null;
	}

	/** Represents the percentage of requests over the last 10 seconds that resulted in each type of status code response. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">Status Code Definitions</a>. */
	export interface StatusCodesFormProperties {
		Status2xx: FormControl<number | null | undefined>,
		Status3xx: FormControl<number | null | undefined>,
		Status4xx: FormControl<number | null | undefined>,
		Status5xx: FormControl<number | null | undefined>,
	}
	export function CreateStatusCodesFormGroup() {
		return new FormGroup<StatusCodesFormProperties>({
			Status2xx: new FormControl<number | null | undefined>(undefined),
			Status3xx: new FormControl<number | null | undefined>(undefined),
			Status4xx: new FormControl<number | null | undefined>(undefined),
			Status5xx: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the average latency for the slowest X percent of requests over the last 10 seconds. */
	export interface Latency {
		P999?: number | null;
		P99?: number | null;
		P95?: number | null;
		P90?: number | null;
		P85?: number | null;
		P75?: number | null;
		P50?: number | null;
		P10?: number | null;
	}

	/** Represents the average latency for the slowest X percent of requests over the last 10 seconds. */
	export interface LatencyFormProperties {
		P999: FormControl<number | null | undefined>,
		P99: FormControl<number | null | undefined>,
		P95: FormControl<number | null | undefined>,
		P90: FormControl<number | null | undefined>,
		P85: FormControl<number | null | undefined>,
		P75: FormControl<number | null | undefined>,
		P50: FormControl<number | null | undefined>,
		P10: FormControl<number | null | undefined>,
	}
	export function CreateLatencyFormGroup() {
		return new FormGroup<LatencyFormProperties>({
			P999: new FormControl<number | null | undefined>(undefined),
			P99: new FormControl<number | null | undefined>(undefined),
			P95: new FormControl<number | null | undefined>(undefined),
			P90: new FormControl<number | null | undefined>(undefined),
			P85: new FormControl<number | null | undefined>(undefined),
			P75: new FormControl<number | null | undefined>(undefined),
			P50: new FormControl<number | null | undefined>(undefined),
			P10: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents summary information about the health of an instance. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health Colors and Statuses</a>. */
	export interface InstanceHealthSummary {
		NoData?: number | null;
		Unknown?: number | null;
		Pending?: number | null;
		Ok?: number | null;
		Info?: number | null;
		Warning?: number | null;
		Degraded?: number | null;
		Severe?: number | null;
	}

	/** Represents summary information about the health of an instance. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health Colors and Statuses</a>. */
	export interface InstanceHealthSummaryFormProperties {
		NoData: FormControl<number | null | undefined>,
		Unknown: FormControl<number | null | undefined>,
		Pending: FormControl<number | null | undefined>,
		Ok: FormControl<number | null | undefined>,
		Info: FormControl<number | null | undefined>,
		Warning: FormControl<number | null | undefined>,
		Degraded: FormControl<number | null | undefined>,
		Severe: FormControl<number | null | undefined>,
	}
	export function CreateInstanceHealthSummaryFormGroup() {
		return new FormGroup<InstanceHealthSummaryFormProperties>({
			NoData: new FormControl<number | null | undefined>(undefined),
			Unknown: new FormControl<number | null | undefined>(undefined),
			Pending: new FormControl<number | null | undefined>(undefined),
			Ok: new FormControl<number | null | undefined>(undefined),
			Info: new FormControl<number | null | undefined>(undefined),
			Warning: new FormControl<number | null | undefined>(undefined),
			Degraded: new FormControl<number | null | undefined>(undefined),
			Severe: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EnvironmentHealthAttribute { Status = 0, Color = 1, Causes = 2, ApplicationMetrics = 3, InstancesHealth = 4, All = 5, HealthStatus = 6, RefreshedAt = 7 }

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}


	/** A result message containing a list of completed and failed managed actions. */
	export interface DescribeEnvironmentManagedActionHistoryResult {
		ManagedActionHistoryItems?: Array<ManagedActionHistoryItem>;
		NextToken?: string;
	}

	/** A result message containing a list of completed and failed managed actions. */
	export interface DescribeEnvironmentManagedActionHistoryResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEnvironmentManagedActionHistoryResultFormGroup() {
		return new FormGroup<DescribeEnvironmentManagedActionHistoryResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The record of a completed or failed managed action. */
	export interface ManagedActionHistoryItem {
		ActionId?: string;
		ActionType?: ActionType;
		ActionDescription?: string;
		FailureType?: FailureType;
		Status?: ActionHistoryStatus;
		FailureDescription?: string;
		ExecutedTime?: Date;
		FinishedTime?: Date;
	}

	/** The record of a completed or failed managed action. */
	export interface ManagedActionHistoryItemFormProperties {
		ActionId: FormControl<string | null | undefined>,
		ActionType: FormControl<ActionType | null | undefined>,
		ActionDescription: FormControl<string | null | undefined>,
		FailureType: FormControl<FailureType | null | undefined>,
		Status: FormControl<ActionHistoryStatus | null | undefined>,
		FailureDescription: FormControl<string | null | undefined>,
		ExecutedTime: FormControl<Date | null | undefined>,
		FinishedTime: FormControl<Date | null | undefined>,
	}
	export function CreateManagedActionHistoryItemFormGroup() {
		return new FormGroup<ManagedActionHistoryItemFormProperties>({
			ActionId: new FormControl<string | null | undefined>(undefined),
			ActionType: new FormControl<ActionType | null | undefined>(undefined),
			ActionDescription: new FormControl<string | null | undefined>(undefined),
			FailureType: new FormControl<FailureType | null | undefined>(undefined),
			Status: new FormControl<ActionHistoryStatus | null | undefined>(undefined),
			FailureDescription: new FormControl<string | null | undefined>(undefined),
			ExecutedTime: new FormControl<Date | null | undefined>(undefined),
			FinishedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum FailureType { UpdateCancelled = 0, CancellationFailed = 1, RollbackFailed = 2, RollbackSuccessful = 3, InternalFailure = 4, InvalidEnvironmentState = 5, PermissionsError = 6 }

	export enum ActionHistoryStatus { Completed = 0, Failed = 1, Unknown = 2 }


	/** The result message containing a list of managed actions. */
	export interface DescribeEnvironmentManagedActionsResult {
		ManagedActions?: Array<ManagedAction>;
	}

	/** The result message containing a list of managed actions. */
	export interface DescribeEnvironmentManagedActionsResultFormProperties {
	}
	export function CreateDescribeEnvironmentManagedActionsResultFormGroup() {
		return new FormGroup<DescribeEnvironmentManagedActionsResultFormProperties>({
		});

	}


	/** The record of an upcoming or in-progress managed action. */
	export interface ManagedAction {
		ActionId?: string;
		ActionDescription?: string;
		ActionType?: ActionType;
		Status?: ActionStatus;
		WindowStartTime?: Date;
	}

	/** The record of an upcoming or in-progress managed action. */
	export interface ManagedActionFormProperties {
		ActionId: FormControl<string | null | undefined>,
		ActionDescription: FormControl<string | null | undefined>,
		ActionType: FormControl<ActionType | null | undefined>,
		Status: FormControl<ActionStatus | null | undefined>,
		WindowStartTime: FormControl<Date | null | undefined>,
	}
	export function CreateManagedActionFormGroup() {
		return new FormGroup<ManagedActionFormProperties>({
			ActionId: new FormControl<string | null | undefined>(undefined),
			ActionDescription: new FormControl<string | null | undefined>(undefined),
			ActionType: new FormControl<ActionType | null | undefined>(undefined),
			Status: new FormControl<ActionStatus | null | undefined>(undefined),
			WindowStartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ActionStatus { Scheduled = 0, Pending = 1, Running = 2, Unknown = 3 }


	/** Result message containing a list of environment resource descriptions. */
	export interface EnvironmentResourceDescriptionsMessage {
		EnvironmentResources?: EnvironmentResourceDescription;
	}

	/** Result message containing a list of environment resource descriptions. */
	export interface EnvironmentResourceDescriptionsMessageFormProperties {
	}
	export function CreateEnvironmentResourceDescriptionsMessageFormGroup() {
		return new FormGroup<EnvironmentResourceDescriptionsMessageFormProperties>({
		});

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

	/** Describes the AWS resources in use by this environment. This data is live. */
	export interface EnvironmentResourceDescriptionFormProperties {
		EnvironmentName: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentResourceDescriptionFormGroup() {
		return new FormGroup<EnvironmentResourceDescriptionFormProperties>({
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Auto Scaling launch configuration. */
	export interface AutoScalingGroup {
		Name?: string;
	}

	/** Describes an Auto Scaling launch configuration. */
	export interface AutoScalingGroupFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAutoScalingGroupFormGroup() {
		return new FormGroup<AutoScalingGroupFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The description of an Amazon EC2 instance. */
	export interface Instance {
		Id?: string;
	}

	/** The description of an Amazon EC2 instance. */
	export interface InstanceFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Auto Scaling launch configuration. */
	export interface LaunchConfiguration {
		Name?: string;
	}

	/** Describes an Auto Scaling launch configuration. */
	export interface LaunchConfigurationFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateLaunchConfigurationFormGroup() {
		return new FormGroup<LaunchConfigurationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Amazon EC2 launch template. */
	export interface LaunchTemplate {
		Id?: string;
	}

	/** Describes an Amazon EC2 launch template. */
	export interface LaunchTemplateFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateLaunchTemplateFormGroup() {
		return new FormGroup<LaunchTemplateFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a LoadBalancer. */
	export interface LoadBalancer {
		Name?: string;
	}

	/** Describes a LoadBalancer. */
	export interface LoadBalancerFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateLoadBalancerFormGroup() {
		return new FormGroup<LoadBalancerFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a trigger. */
	export interface Trigger {
		Name?: string;
	}

	/** Describes a trigger. */
	export interface TriggerFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateTriggerFormGroup() {
		return new FormGroup<TriggerFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a queue. */
	export interface Queue {
		Name?: string;
		URL?: string;
	}

	/** Describes a queue. */
	export interface QueueFormProperties {
		Name: FormControl<string | null | undefined>,
		URL: FormControl<string | null | undefined>,
	}
	export function CreateQueueFormGroup() {
		return new FormGroup<QueueFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			URL: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result message wrapping a list of event descriptions. */
	export interface EventDescriptionsMessage {
		Events?: Array<EventDescription>;
		NextToken?: string;
	}

	/** Result message wrapping a list of event descriptions. */
	export interface EventDescriptionsMessageFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateEventDescriptionsMessageFormGroup() {
		return new FormGroup<EventDescriptionsMessageFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

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
		Severity?: EventSeverity;
	}

	/** Describes an event. */
	export interface EventDescriptionFormProperties {
		EventDate: FormControl<Date | null | undefined>,
		Message: FormControl<string | null | undefined>,
		ApplicationName: FormControl<string | null | undefined>,
		VersionLabel: FormControl<string | null | undefined>,
		TemplateName: FormControl<string | null | undefined>,
		EnvironmentName: FormControl<string | null | undefined>,
		PlatformArn: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Severity: FormControl<EventSeverity | null | undefined>,
	}
	export function CreateEventDescriptionFormGroup() {
		return new FormGroup<EventDescriptionFormProperties>({
			EventDate: new FormControl<Date | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			ApplicationName: new FormControl<string | null | undefined>(undefined),
			VersionLabel: new FormControl<string | null | undefined>(undefined),
			TemplateName: new FormControl<string | null | undefined>(undefined),
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
			PlatformArn: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<EventSeverity | null | undefined>(undefined),
		});

	}

	export enum EventSeverity { TRACE = 0, DEBUG = 1, INFO = 2, WARN = 3, ERROR = 4, FATAL = 5 }


	/** Detailed health information about the Amazon EC2 instances in an AWS Elastic Beanstalk environment. */
	export interface DescribeInstancesHealthResult {
		InstanceHealthList?: Array<SingleInstanceHealth>;
		RefreshedAt?: Date;
		NextToken?: string;
	}

	/** Detailed health information about the Amazon EC2 instances in an AWS Elastic Beanstalk environment. */
	export interface DescribeInstancesHealthResultFormProperties {
		RefreshedAt: FormControl<Date | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInstancesHealthResultFormGroup() {
		return new FormGroup<DescribeInstancesHealthResultFormProperties>({
			RefreshedAt: new FormControl<Date | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detailed health information about an Amazon EC2 instance in your Elastic Beanstalk environment. */
	export interface SingleInstanceHealth {
		InstanceId?: string;
		HealthStatus?: string;
		Color?: string;
		Causes?: Array<string>;
		LaunchedAt?: Date;
		ApplicationMetrics?: ApplicationMetrics;
		System?: SystemStatus;
		Deployment?: Deployment;
		AvailabilityZone?: string;
		InstanceType?: string;
	}

	/** Detailed health information about an Amazon EC2 instance in your Elastic Beanstalk environment. */
	export interface SingleInstanceHealthFormProperties {
		InstanceId: FormControl<string | null | undefined>,
		HealthStatus: FormControl<string | null | undefined>,
		Color: FormControl<string | null | undefined>,
		LaunchedAt: FormControl<Date | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
	}
	export function CreateSingleInstanceHealthFormGroup() {
		return new FormGroup<SingleInstanceHealthFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined),
			HealthStatus: new FormControl<string | null | undefined>(undefined),
			Color: new FormControl<string | null | undefined>(undefined),
			LaunchedAt: new FormControl<Date | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CPU utilization and load average metrics for an Amazon EC2 instance. */
	export interface SystemStatus {
		CPUUtilization?: CPUUtilization;
		LoadAverage?: Array<number> | null;
	}

	/** CPU utilization and load average metrics for an Amazon EC2 instance. */
	export interface SystemStatusFormProperties {
	}
	export function CreateSystemStatusFormGroup() {
		return new FormGroup<SystemStatusFormProperties>({
		});

	}


	/** CPU utilization metrics for an instance. */
	export interface CPUUtilization {
		User?: number | null;
		Nice?: number | null;
		System?: number | null;
		Idle?: number | null;
		IOWait?: number | null;
		IRQ?: number | null;
		SoftIRQ?: number | null;
		Privileged?: number | null;
	}

	/** CPU utilization metrics for an instance. */
	export interface CPUUtilizationFormProperties {
		User: FormControl<number | null | undefined>,
		Nice: FormControl<number | null | undefined>,
		System: FormControl<number | null | undefined>,
		Idle: FormControl<number | null | undefined>,
		IOWait: FormControl<number | null | undefined>,
		IRQ: FormControl<number | null | undefined>,
		SoftIRQ: FormControl<number | null | undefined>,
		Privileged: FormControl<number | null | undefined>,
	}
	export function CreateCPUUtilizationFormGroup() {
		return new FormGroup<CPUUtilizationFormProperties>({
			User: new FormControl<number | null | undefined>(undefined),
			Nice: new FormControl<number | null | undefined>(undefined),
			System: new FormControl<number | null | undefined>(undefined),
			Idle: new FormControl<number | null | undefined>(undefined),
			IOWait: new FormControl<number | null | undefined>(undefined),
			IRQ: new FormControl<number | null | undefined>(undefined),
			SoftIRQ: new FormControl<number | null | undefined>(undefined),
			Privileged: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about an application version deployment. */
	export interface Deployment {
		VersionLabel?: string;
		DeploymentId?: number | null;
		Status?: string;
		DeploymentTime?: Date;
	}

	/** Information about an application version deployment. */
	export interface DeploymentFormProperties {
		VersionLabel: FormControl<string | null | undefined>,
		DeploymentId: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		DeploymentTime: FormControl<Date | null | undefined>,
	}
	export function CreateDeploymentFormGroup() {
		return new FormGroup<DeploymentFormProperties>({
			VersionLabel: new FormControl<string | null | undefined>(undefined),
			DeploymentId: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			DeploymentTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum InstancesHealthAttribute { HealthStatus = 0, Color = 1, Causes = 2, ApplicationMetrics = 3, RefreshedAt = 4, LaunchedAt = 5, System = 6, Deployment = 7, AvailabilityZone = 8, InstanceType = 9, All = 10 }

	export interface DescribePlatformVersionResult {
		PlatformDescription?: PlatformDescription;
	}
	export interface DescribePlatformVersionResultFormProperties {
	}
	export function CreateDescribePlatformVersionResultFormGroup() {
		return new FormGroup<DescribePlatformVersionResultFormProperties>({
		});

	}


	/** Detailed information about a platform version. */
	export interface PlatformDescription {
		PlatformArn?: string;
		PlatformOwner?: string;
		PlatformName?: string;
		PlatformVersion?: string;
		SolutionStackName?: string;
		PlatformStatus?: PlatformStatus;
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

	/** Detailed information about a platform version. */
	export interface PlatformDescriptionFormProperties {
		PlatformArn: FormControl<string | null | undefined>,
		PlatformOwner: FormControl<string | null | undefined>,
		PlatformName: FormControl<string | null | undefined>,
		PlatformVersion: FormControl<string | null | undefined>,
		SolutionStackName: FormControl<string | null | undefined>,
		PlatformStatus: FormControl<PlatformStatus | null | undefined>,
		DateCreated: FormControl<Date | null | undefined>,
		DateUpdated: FormControl<Date | null | undefined>,
		PlatformCategory: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Maintainer: FormControl<string | null | undefined>,
		OperatingSystemName: FormControl<string | null | undefined>,
		OperatingSystemVersion: FormControl<string | null | undefined>,
		PlatformLifecycleState: FormControl<string | null | undefined>,
		PlatformBranchName: FormControl<string | null | undefined>,
		PlatformBranchLifecycleState: FormControl<string | null | undefined>,
	}
	export function CreatePlatformDescriptionFormGroup() {
		return new FormGroup<PlatformDescriptionFormProperties>({
			PlatformArn: new FormControl<string | null | undefined>(undefined),
			PlatformOwner: new FormControl<string | null | undefined>(undefined),
			PlatformName: new FormControl<string | null | undefined>(undefined),
			PlatformVersion: new FormControl<string | null | undefined>(undefined),
			SolutionStackName: new FormControl<string | null | undefined>(undefined),
			PlatformStatus: new FormControl<PlatformStatus | null | undefined>(undefined),
			DateCreated: new FormControl<Date | null | undefined>(undefined),
			DateUpdated: new FormControl<Date | null | undefined>(undefined),
			PlatformCategory: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Maintainer: new FormControl<string | null | undefined>(undefined),
			OperatingSystemName: new FormControl<string | null | undefined>(undefined),
			OperatingSystemVersion: new FormControl<string | null | undefined>(undefined),
			PlatformLifecycleState: new FormControl<string | null | undefined>(undefined),
			PlatformBranchName: new FormControl<string | null | undefined>(undefined),
			PlatformBranchLifecycleState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A programming language supported by the platform. */
	export interface PlatformProgrammingLanguage {
		Name?: string;
		Version?: string;
	}

	/** A programming language supported by the platform. */
	export interface PlatformProgrammingLanguageFormProperties {
		Name: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreatePlatformProgrammingLanguageFormGroup() {
		return new FormGroup<PlatformProgrammingLanguageFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A framework supported by the platform. */
	export interface PlatformFramework {
		Name?: string;
		Version?: string;
	}

	/** A framework supported by the platform. */
	export interface PlatformFrameworkFormProperties {
		Name: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreatePlatformFrameworkFormGroup() {
		return new FormGroup<PlatformFrameworkFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A custom AMI available to platforms. */
	export interface CustomAmi {
		VirtualizationType?: string;
		ImageId?: string;
	}

	/** A custom AMI available to platforms. */
	export interface CustomAmiFormProperties {
		VirtualizationType: FormControl<string | null | undefined>,
		ImageId: FormControl<string | null | undefined>,
	}
	export function CreateCustomAmiFormGroup() {
		return new FormGroup<CustomAmiFormProperties>({
			VirtualizationType: new FormControl<string | null | undefined>(undefined),
			ImageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of available AWS Elastic Beanstalk solution stacks. */
	export interface ListAvailableSolutionStacksResultMessage {
		SolutionStacks?: Array<string>;
		SolutionStackDetails?: Array<SolutionStackDescription>;
	}

	/** A list of available AWS Elastic Beanstalk solution stacks. */
	export interface ListAvailableSolutionStacksResultMessageFormProperties {
	}
	export function CreateListAvailableSolutionStacksResultMessageFormGroup() {
		return new FormGroup<ListAvailableSolutionStacksResultMessageFormProperties>({
		});

	}


	/** Describes the solution stack. */
	export interface SolutionStackDescription {
		SolutionStackName?: string;
		PermittedFileTypes?: Array<string>;
	}

	/** Describes the solution stack. */
	export interface SolutionStackDescriptionFormProperties {
		SolutionStackName: FormControl<string | null | undefined>,
	}
	export function CreateSolutionStackDescriptionFormGroup() {
		return new FormGroup<SolutionStackDescriptionFormProperties>({
			SolutionStackName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPlatformBranchesResult {
		PlatformBranchSummaryList?: Array<PlatformBranchSummary>;
		NextToken?: string;
	}
	export interface ListPlatformBranchesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPlatformBranchesResultFormGroup() {
		return new FormGroup<ListPlatformBranchesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a platform branch. */
	export interface PlatformBranchSummary {
		PlatformName?: string;
		BranchName?: string;
		LifecycleState?: string;
		BranchOrder?: number | null;
		SupportedTierList?: Array<string>;
	}

	/** Summary information about a platform branch. */
	export interface PlatformBranchSummaryFormProperties {
		PlatformName: FormControl<string | null | undefined>,
		BranchName: FormControl<string | null | undefined>,
		LifecycleState: FormControl<string | null | undefined>,
		BranchOrder: FormControl<number | null | undefined>,
	}
	export function CreatePlatformBranchSummaryFormGroup() {
		return new FormGroup<PlatformBranchSummaryFormProperties>({
			PlatformName: new FormControl<string | null | undefined>(undefined),
			BranchName: new FormControl<string | null | undefined>(undefined),
			LifecycleState: new FormControl<string | null | undefined>(undefined),
			BranchOrder: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Describes criteria to restrict a list of results.</p> <p>For operators that apply a single value to the attribute, the filter is evaluated as follows: <code>Attribute Operator Values[1]</code> </p> <p>Some operators, e.g. <code>in</code>, can apply multiple values. In this case, the filter is evaluated as a logical union (OR) of applications of the operator to the attribute with each one of the values: <code>(Attribute Operator Values[1]) OR (Attribute Operator Values[2]) OR ...</code> </p> <p>The valid values for attributes of <code>SearchFilter</code> depend on the API action. For valid values, see the reference page for the API action you're calling that takes a <code>SearchFilter</code> parameter.</p> */
	export interface SearchFilter {
		Attribute?: string;
		Operator?: string;
		Values?: Array<string>;
	}

	/** <p>Describes criteria to restrict a list of results.</p> <p>For operators that apply a single value to the attribute, the filter is evaluated as follows: <code>Attribute Operator Values[1]</code> </p> <p>Some operators, e.g. <code>in</code>, can apply multiple values. In this case, the filter is evaluated as a logical union (OR) of applications of the operator to the attribute with each one of the values: <code>(Attribute Operator Values[1]) OR (Attribute Operator Values[2]) OR ...</code> </p> <p>The valid values for attributes of <code>SearchFilter</code> depend on the API action. For valid values, see the reference page for the API action you're calling that takes a <code>SearchFilter</code> parameter.</p> */
	export interface SearchFilterFormProperties {
		Attribute: FormControl<string | null | undefined>,
		Operator: FormControl<string | null | undefined>,
	}
	export function CreateSearchFilterFormGroup() {
		return new FormGroup<SearchFilterFormProperties>({
			Attribute: new FormControl<string | null | undefined>(undefined),
			Operator: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPlatformVersionsResult {
		PlatformSummaryList?: Array<PlatformSummary>;
		NextToken?: string;
	}
	export interface ListPlatformVersionsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPlatformVersionsResultFormGroup() {
		return new FormGroup<ListPlatformVersionsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes criteria to restrict the results when listing platform versions.</p> <p>The filter is evaluated as follows: <code>Type Operator Values[1]</code> </p> */
	export interface PlatformFilter {
		Type?: string;
		Operator?: string;
		Values?: Array<string>;
	}

	/** <p>Describes criteria to restrict the results when listing platform versions.</p> <p>The filter is evaluated as follows: <code>Type Operator Values[1]</code> </p> */
	export interface PlatformFilterFormProperties {
		Type: FormControl<string | null | undefined>,
		Operator: FormControl<string | null | undefined>,
	}
	export function CreatePlatformFilterFormGroup() {
		return new FormGroup<PlatformFilterFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
			Operator: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceTagsDescriptionMessage {
		ResourceArn?: string;
		ResourceTags?: Array<Tag>;
	}
	export interface ResourceTagsDescriptionMessageFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateResourceTagsDescriptionMessageFormGroup() {
		return new FormGroup<ResourceTagsDescriptionMessageFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
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

	export interface ResourceTypeNotSupportedException {
	}
	export interface ResourceTypeNotSupportedExceptionFormProperties {
	}
	export function CreateResourceTypeNotSupportedExceptionFormGroup() {
		return new FormGroup<ResourceTypeNotSupportedExceptionFormProperties>({
		});

	}


	/** Result message containing a description of the requested environment info. */
	export interface RetrieveEnvironmentInfoResultMessage {
		EnvironmentInfo?: Array<EnvironmentInfoDescription>;
	}

	/** Result message containing a description of the requested environment info. */
	export interface RetrieveEnvironmentInfoResultMessageFormProperties {
	}
	export function CreateRetrieveEnvironmentInfoResultMessageFormGroup() {
		return new FormGroup<RetrieveEnvironmentInfoResultMessageFormProperties>({
		});

	}


	/** The information retrieved from the Amazon EC2 instances. */
	export interface EnvironmentInfoDescription {
		InfoType?: EnvironmentInfoType;
		Ec2InstanceId?: string;
		SampleTimestamp?: Date;
		Message?: string;
	}

	/** The information retrieved from the Amazon EC2 instances. */
	export interface EnvironmentInfoDescriptionFormProperties {
		InfoType: FormControl<EnvironmentInfoType | null | undefined>,
		Ec2InstanceId: FormControl<string | null | undefined>,
		SampleTimestamp: FormControl<Date | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentInfoDescriptionFormGroup() {
		return new FormGroup<EnvironmentInfoDescriptionFormProperties>({
			InfoType: new FormControl<EnvironmentInfoType | null | undefined>(undefined),
			Ec2InstanceId: new FormControl<string | null | undefined>(undefined),
			SampleTimestamp: new FormControl<Date | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnvironmentInfoType { tail = 0, bundle = 1 }

	export interface ApplicationResourceLifecycleDescriptionMessage {
		ApplicationName?: string;
		ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig;
	}
	export interface ApplicationResourceLifecycleDescriptionMessageFormProperties {
		ApplicationName: FormControl<string | null | undefined>,
	}
	export function CreateApplicationResourceLifecycleDescriptionMessageFormGroup() {
		return new FormGroup<ApplicationResourceLifecycleDescriptionMessageFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined),
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


	/** Provides a list of validation messages. */
	export interface ConfigurationSettingsValidationMessages {
		Messages?: Array<ValidationMessage>;
	}

	/** Provides a list of validation messages. */
	export interface ConfigurationSettingsValidationMessagesFormProperties {
	}
	export function CreateConfigurationSettingsValidationMessagesFormGroup() {
		return new FormGroup<ConfigurationSettingsValidationMessagesFormProperties>({
		});

	}


	/** An error or warning for a desired configuration option value. */
	export interface ValidationMessage {
		Message?: string;
		Severity?: ValidationSeverity;
		Namespace?: string;
		OptionName?: string;
	}

	/** An error or warning for a desired configuration option value. */
	export interface ValidationMessageFormProperties {
		Message: FormControl<string | null | undefined>,
		Severity: FormControl<ValidationSeverity | null | undefined>,
		Namespace: FormControl<string | null | undefined>,
		OptionName: FormControl<string | null | undefined>,
	}
	export function CreateValidationMessageFormGroup() {
		return new FormGroup<ValidationMessageFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<ValidationSeverity | null | undefined>(undefined),
			Namespace: new FormControl<string | null | undefined>(undefined),
			OptionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ValidationSeverity { error = 0, warning = 1 }


	/** <p/> */
	export interface AbortEnvironmentUpdateMessage {
		EnvironmentId?: string;
		EnvironmentName?: string;
	}

	/** <p/> */
	export interface AbortEnvironmentUpdateMessageFormProperties {
		EnvironmentId: FormControl<string | null | undefined>,
		EnvironmentName: FormControl<string | null | undefined>,
	}
	export function CreateAbortEnvironmentUpdateMessageFormGroup() {
		return new FormGroup<AbortEnvironmentUpdateMessageFormProperties>({
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to execute a scheduled managed action immediately. */
	export interface ApplyEnvironmentManagedActionRequest {
		EnvironmentName?: string;
		EnvironmentId?: string;

		/** Required */
		ActionId: string;
	}

	/** Request to execute a scheduled managed action immediately. */
	export interface ApplyEnvironmentManagedActionRequestFormProperties {
		EnvironmentName: FormControl<string | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,

		/** Required */
		ActionId: FormControl<string | null | undefined>,
	}
	export function CreateApplyEnvironmentManagedActionRequestFormGroup() {
		return new FormGroup<ApplyEnvironmentManagedActionRequestFormProperties>({
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			ActionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request to add or change the operations role used by an environment. */
	export interface AssociateEnvironmentOperationsRoleMessage {

		/** Required */
		EnvironmentName: string;

		/** Required */
		OperationsRole: string;
	}

	/** Request to add or change the operations role used by an environment. */
	export interface AssociateEnvironmentOperationsRoleMessageFormProperties {

		/** Required */
		EnvironmentName: FormControl<string | null | undefined>,

		/** Required */
		OperationsRole: FormControl<string | null | undefined>,
	}
	export function CreateAssociateEnvironmentOperationsRoleMessageFormGroup() {
		return new FormGroup<AssociateEnvironmentOperationsRoleMessageFormProperties>({
			EnvironmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OperationsRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings for an AWS CodeBuild build. */
	export interface BuildConfiguration {
		ArtifactName?: string;

		/** Required */
		CodeBuildServiceRole: string;
		ComputeType?: ComputeType;

		/** Required */
		Image: string;
		TimeoutInMinutes?: number | null;
	}

	/** Settings for an AWS CodeBuild build. */
	export interface BuildConfigurationFormProperties {
		ArtifactName: FormControl<string | null | undefined>,

		/** Required */
		CodeBuildServiceRole: FormControl<string | null | undefined>,
		ComputeType: FormControl<ComputeType | null | undefined>,

		/** Required */
		Image: FormControl<string | null | undefined>,
		TimeoutInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateBuildConfigurationFormGroup() {
		return new FormGroup<BuildConfigurationFormProperties>({
			ArtifactName: new FormControl<string | null | undefined>(undefined),
			CodeBuildServiceRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComputeType: new FormControl<ComputeType | null | undefined>(undefined),
			Image: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Results message indicating whether a CNAME is available. */
	export interface CheckDNSAvailabilityMessage {

		/** Required */
		CNAMEPrefix: string;
	}

	/** Results message indicating whether a CNAME is available. */
	export interface CheckDNSAvailabilityMessageFormProperties {

		/** Required */
		CNAMEPrefix: FormControl<string | null | undefined>,
	}
	export function CreateCheckDNSAvailabilityMessageFormGroup() {
		return new FormGroup<CheckDNSAvailabilityMessageFormProperties>({
			CNAMEPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request to create or update a group of environments. */
	export interface ComposeEnvironmentsMessage {
		ApplicationName?: string;
		GroupName?: string;
		VersionLabels?: Array<string>;
	}

	/** Request to create or update a group of environments. */
	export interface ComposeEnvironmentsMessageFormProperties {
		ApplicationName: FormControl<string | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
	}
	export function CreateComposeEnvironmentsMessageFormGroup() {
		return new FormGroup<ComposeEnvironmentsMessageFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to create an application. */
	export interface CreateApplicationMessage {

		/** Required */
		ApplicationName: string;
		Description?: string;
		ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig;
		Tags?: Array<Tag>;
	}

	/** Request to create an application. */
	export interface CreateApplicationMessageFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationMessageFormGroup() {
		return new FormGroup<CreateApplicationMessageFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface CreateApplicationVersionMessage {

		/** Required */
		ApplicationName: string;

		/** Required */
		VersionLabel: string;
		Description?: string;
		SourceBuildInformation?: SourceBuildInformation;
		SourceBundle?: S3Location;
		BuildConfiguration?: BuildConfiguration;
		AutoCreateApplication?: boolean | null;
		Process?: boolean | null;
		Tags?: Array<Tag>;
	}

	/** <p/> */
	export interface CreateApplicationVersionMessageFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		VersionLabel: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		AutoCreateApplication: FormControl<boolean | null | undefined>,
		Process: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateApplicationVersionMessageFormGroup() {
		return new FormGroup<CreateApplicationVersionMessageFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VersionLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			AutoCreateApplication: new FormControl<boolean | null | undefined>(undefined),
			Process: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A specification for an environment configuration. */
	export interface SourceConfiguration {
		ApplicationName?: string;
		TemplateName?: string;
	}

	/** A specification for an environment configuration. */
	export interface SourceConfigurationFormProperties {
		ApplicationName: FormControl<string | null | undefined>,
		TemplateName: FormControl<string | null | undefined>,
	}
	export function CreateSourceConfigurationFormGroup() {
		return new FormGroup<SourceConfigurationFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined),
			TemplateName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to create a configuration template. */
	export interface CreateConfigurationTemplateMessage {

		/** Required */
		ApplicationName: string;

		/** Required */
		TemplateName: string;
		SolutionStackName?: string;
		PlatformArn?: string;
		SourceConfiguration?: SourceConfiguration;
		EnvironmentId?: string;
		Description?: string;
		OptionSettings?: Array<ConfigurationOptionSetting>;
		Tags?: Array<Tag>;
	}

	/** Request to create a configuration template. */
	export interface CreateConfigurationTemplateMessageFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		TemplateName: FormControl<string | null | undefined>,
		SolutionStackName: FormControl<string | null | undefined>,
		PlatformArn: FormControl<string | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationTemplateMessageFormGroup() {
		return new FormGroup<CreateConfigurationTemplateMessageFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SolutionStackName: new FormControl<string | null | undefined>(undefined),
			PlatformArn: new FormControl<string | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface CreateEnvironmentMessage {

		/** Required */
		ApplicationName: string;
		EnvironmentName?: string;
		GroupName?: string;
		Description?: string;
		CNAMEPrefix?: string;
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

	/** <p/> */
	export interface CreateEnvironmentMessageFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
		EnvironmentName: FormControl<string | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CNAMEPrefix: FormControl<string | null | undefined>,
		VersionLabel: FormControl<string | null | undefined>,
		TemplateName: FormControl<string | null | undefined>,
		SolutionStackName: FormControl<string | null | undefined>,
		PlatformArn: FormControl<string | null | undefined>,
		OperationsRole: FormControl<string | null | undefined>,
	}
	export function CreateCreateEnvironmentMessageFormGroup() {
		return new FormGroup<CreateEnvironmentMessageFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CNAMEPrefix: new FormControl<string | null | undefined>(undefined),
			VersionLabel: new FormControl<string | null | undefined>(undefined),
			TemplateName: new FormControl<string | null | undefined>(undefined),
			SolutionStackName: new FormControl<string | null | undefined>(undefined),
			PlatformArn: new FormControl<string | null | undefined>(undefined),
			OperationsRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to create a new platform version. */
	export interface CreatePlatformVersionRequest {

		/** Required */
		PlatformName: string;

		/** Required */
		PlatformVersion: string;

		/** Required */
		PlatformDefinitionBundle: S3Location;
		EnvironmentName?: string;
		OptionSettings?: Array<ConfigurationOptionSetting>;
		Tags?: Array<Tag>;
	}

	/** Request to create a new platform version. */
	export interface CreatePlatformVersionRequestFormProperties {

		/** Required */
		PlatformName: FormControl<string | null | undefined>,

		/** Required */
		PlatformVersion: FormControl<string | null | undefined>,
		EnvironmentName: FormControl<string | null | undefined>,
	}
	export function CreateCreatePlatformVersionRequestFormGroup() {
		return new FormGroup<CreatePlatformVersionRequestFormProperties>({
			PlatformName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PlatformVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to delete an application. */
	export interface DeleteApplicationMessage {

		/** Required */
		ApplicationName: string;
		TerminateEnvByForce?: boolean | null;
	}

	/** Request to delete an application. */
	export interface DeleteApplicationMessageFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
		TerminateEnvByForce: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteApplicationMessageFormGroup() {
		return new FormGroup<DeleteApplicationMessageFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TerminateEnvByForce: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request to delete an application version. */
	export interface DeleteApplicationVersionMessage {

		/** Required */
		ApplicationName: string;

		/** Required */
		VersionLabel: string;
		DeleteSourceBundle?: boolean | null;
	}

	/** Request to delete an application version. */
	export interface DeleteApplicationVersionMessageFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		VersionLabel: FormControl<string | null | undefined>,
		DeleteSourceBundle: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteApplicationVersionMessageFormGroup() {
		return new FormGroup<DeleteApplicationVersionMessageFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VersionLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeleteSourceBundle: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request to delete a configuration template. */
	export interface DeleteConfigurationTemplateMessage {

		/** Required */
		ApplicationName: string;

		/** Required */
		TemplateName: string;
	}

	/** Request to delete a configuration template. */
	export interface DeleteConfigurationTemplateMessageFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		TemplateName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConfigurationTemplateMessageFormGroup() {
		return new FormGroup<DeleteConfigurationTemplateMessageFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request to delete a draft environment configuration. */
	export interface DeleteEnvironmentConfigurationMessage {

		/** Required */
		ApplicationName: string;

		/** Required */
		EnvironmentName: string;
	}

	/** Request to delete a draft environment configuration. */
	export interface DeleteEnvironmentConfigurationMessageFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		EnvironmentName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEnvironmentConfigurationMessageFormGroup() {
		return new FormGroup<DeleteEnvironmentConfigurationMessageFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EnvironmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePlatformVersionRequest {
		PlatformArn?: string;
	}
	export interface DeletePlatformVersionRequestFormProperties {
		PlatformArn: FormControl<string | null | undefined>,
	}
	export function CreateDeletePlatformVersionRequestFormGroup() {
		return new FormGroup<DeletePlatformVersionRequestFormProperties>({
			PlatformArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to describe application versions. */
	export interface DescribeApplicationVersionsMessage {
		ApplicationName?: string;
		VersionLabels?: Array<string>;
		MaxRecords?: number | null;
		NextToken?: string;
	}

	/** Request to describe application versions. */
	export interface DescribeApplicationVersionsMessageFormProperties {
		ApplicationName: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeApplicationVersionsMessageFormGroup() {
		return new FormGroup<DescribeApplicationVersionsMessageFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to describe one or more applications. */
	export interface DescribeApplicationsMessage {
		ApplicationNames?: Array<string>;
	}

	/** Request to describe one or more applications. */
	export interface DescribeApplicationsMessageFormProperties {
	}
	export function CreateDescribeApplicationsMessageFormGroup() {
		return new FormGroup<DescribeApplicationsMessageFormProperties>({
		});

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

	/** Result message containing a list of application version descriptions. */
	export interface DescribeConfigurationOptionsMessageFormProperties {
		ApplicationName: FormControl<string | null | undefined>,
		TemplateName: FormControl<string | null | undefined>,
		EnvironmentName: FormControl<string | null | undefined>,
		SolutionStackName: FormControl<string | null | undefined>,
		PlatformArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConfigurationOptionsMessageFormGroup() {
		return new FormGroup<DescribeConfigurationOptionsMessageFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined),
			TemplateName: new FormControl<string | null | undefined>(undefined),
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
			SolutionStackName: new FormControl<string | null | undefined>(undefined),
			PlatformArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result message containing all of the configuration settings for a specified solution stack or configuration template. */
	export interface DescribeConfigurationSettingsMessage {

		/** Required */
		ApplicationName: string;
		TemplateName?: string;
		EnvironmentName?: string;
	}

	/** Result message containing all of the configuration settings for a specified solution stack or configuration template. */
	export interface DescribeConfigurationSettingsMessageFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
		TemplateName: FormControl<string | null | undefined>,
		EnvironmentName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConfigurationSettingsMessageFormGroup() {
		return new FormGroup<DescribeConfigurationSettingsMessageFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateName: new FormControl<string | null | undefined>(undefined),
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** See the example below to learn how to create a request body. */
	export interface DescribeEnvironmentHealthRequest {
		EnvironmentName?: string;
		EnvironmentId?: string;
		AttributeNames?: Array<EnvironmentHealthAttribute>;
	}

	/** See the example below to learn how to create a request body. */
	export interface DescribeEnvironmentHealthRequestFormProperties {
		EnvironmentName: FormControl<string | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEnvironmentHealthRequestFormGroup() {
		return new FormGroup<DescribeEnvironmentHealthRequestFormProperties>({
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to list completed and failed managed actions. */
	export interface DescribeEnvironmentManagedActionHistoryRequest {
		EnvironmentId?: string;
		EnvironmentName?: string;
		NextToken?: string;
		MaxItems?: number | null;
	}

	/** Request to list completed and failed managed actions. */
	export interface DescribeEnvironmentManagedActionHistoryRequestFormProperties {
		EnvironmentId: FormControl<string | null | undefined>,
		EnvironmentName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateDescribeEnvironmentManagedActionHistoryRequestFormGroup() {
		return new FormGroup<DescribeEnvironmentManagedActionHistoryRequestFormProperties>({
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request to list an environment's upcoming and in-progress managed actions. */
	export interface DescribeEnvironmentManagedActionsRequest {
		EnvironmentName?: string;
		EnvironmentId?: string;
		Status?: ActionStatus;
	}

	/** Request to list an environment's upcoming and in-progress managed actions. */
	export interface DescribeEnvironmentManagedActionsRequestFormProperties {
		EnvironmentName: FormControl<string | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
		Status: FormControl<ActionStatus | null | undefined>,
	}
	export function CreateDescribeEnvironmentManagedActionsRequestFormGroup() {
		return new FormGroup<DescribeEnvironmentManagedActionsRequestFormProperties>({
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ActionStatus | null | undefined>(undefined),
		});

	}


	/** Request to describe the resources in an environment. */
	export interface DescribeEnvironmentResourcesMessage {
		EnvironmentId?: string;
		EnvironmentName?: string;
	}

	/** Request to describe the resources in an environment. */
	export interface DescribeEnvironmentResourcesMessageFormProperties {
		EnvironmentId: FormControl<string | null | undefined>,
		EnvironmentName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEnvironmentResourcesMessageFormGroup() {
		return new FormGroup<DescribeEnvironmentResourcesMessageFormProperties>({
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to describe one or more environments. */
	export interface DescribeEnvironmentsMessage {
		ApplicationName?: string;
		VersionLabel?: string;
		EnvironmentIds?: Array<string>;
		EnvironmentNames?: Array<string>;
		IncludeDeleted?: boolean | null;
		IncludedDeletedBackTo?: Date;
		MaxRecords?: number | null;
		NextToken?: string;
	}

	/** Request to describe one or more environments. */
	export interface DescribeEnvironmentsMessageFormProperties {
		ApplicationName: FormControl<string | null | undefined>,
		VersionLabel: FormControl<string | null | undefined>,
		IncludeDeleted: FormControl<boolean | null | undefined>,
		IncludedDeletedBackTo: FormControl<Date | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEnvironmentsMessageFormGroup() {
		return new FormGroup<DescribeEnvironmentsMessageFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined),
			VersionLabel: new FormControl<string | null | undefined>(undefined),
			IncludeDeleted: new FormControl<boolean | null | undefined>(undefined),
			IncludedDeletedBackTo: new FormControl<Date | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to retrieve a list of events for an environment. */
	export interface DescribeEventsMessage {
		ApplicationName?: string;
		VersionLabel?: string;
		TemplateName?: string;
		EnvironmentId?: string;
		EnvironmentName?: string;
		PlatformArn?: string;
		RequestId?: string;
		Severity?: EventSeverity;
		StartTime?: Date;
		EndTime?: Date;
		MaxRecords?: number | null;
		NextToken?: string;
	}

	/** Request to retrieve a list of events for an environment. */
	export interface DescribeEventsMessageFormProperties {
		ApplicationName: FormControl<string | null | undefined>,
		VersionLabel: FormControl<string | null | undefined>,
		TemplateName: FormControl<string | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
		EnvironmentName: FormControl<string | null | undefined>,
		PlatformArn: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Severity: FormControl<EventSeverity | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventsMessageFormGroup() {
		return new FormGroup<DescribeEventsMessageFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined),
			VersionLabel: new FormControl<string | null | undefined>(undefined),
			TemplateName: new FormControl<string | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
			PlatformArn: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<EventSeverity | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters for a call to <code>DescribeInstancesHealth</code>. */
	export interface DescribeInstancesHealthRequest {
		EnvironmentName?: string;
		EnvironmentId?: string;
		AttributeNames?: Array<InstancesHealthAttribute>;
		NextToken?: string;
	}

	/** Parameters for a call to <code>DescribeInstancesHealth</code>. */
	export interface DescribeInstancesHealthRequestFormProperties {
		EnvironmentName: FormControl<string | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInstancesHealthRequestFormGroup() {
		return new FormGroup<DescribeInstancesHealthRequestFormProperties>({
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePlatformVersionRequest {
		PlatformArn?: string;
	}
	export interface DescribePlatformVersionRequestFormProperties {
		PlatformArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribePlatformVersionRequestFormGroup() {
		return new FormGroup<DescribePlatformVersionRequestFormProperties>({
			PlatformArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to disassociate the operations role from an environment. */
	export interface DisassociateEnvironmentOperationsRoleMessage {

		/** Required */
		EnvironmentName: string;
	}

	/** Request to disassociate the operations role from an environment. */
	export interface DisassociateEnvironmentOperationsRoleMessageFormProperties {

		/** Required */
		EnvironmentName: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateEnvironmentOperationsRoleMessageFormGroup() {
		return new FormGroup<DisassociateEnvironmentOperationsRoleMessageFormProperties>({
			EnvironmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListPlatformBranchesRequest {
		Filters?: Array<SearchFilter>;
		MaxRecords?: number | null;
		NextToken?: string;
	}
	export interface ListPlatformBranchesRequestFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPlatformBranchesRequestFormGroup() {
		return new FormGroup<ListPlatformBranchesRequestFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPlatformVersionsRequest {
		Filters?: Array<PlatformFilter>;
		MaxRecords?: number | null;
		NextToken?: string;
	}
	export interface ListPlatformVersionsRequestFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPlatformVersionsRequestFormGroup() {
		return new FormGroup<ListPlatformVersionsRequestFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceMessage {

		/** Required */
		ResourceArn: string;
	}
	export interface ListTagsForResourceMessageFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceMessageFormGroup() {
		return new FormGroup<ListTagsForResourceMessageFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface RebuildEnvironmentMessage {
		EnvironmentId?: string;
		EnvironmentName?: string;
	}

	/** <p/> */
	export interface RebuildEnvironmentMessageFormProperties {
		EnvironmentId: FormControl<string | null | undefined>,
		EnvironmentName: FormControl<string | null | undefined>,
	}
	export function CreateRebuildEnvironmentMessageFormGroup() {
		return new FormGroup<RebuildEnvironmentMessageFormProperties>({
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to retrieve logs from an environment and store them in your Elastic Beanstalk storage bucket. */
	export interface RequestEnvironmentInfoMessage {
		EnvironmentId?: string;
		EnvironmentName?: string;

		/** Required */
		InfoType: EnvironmentInfoType;
	}

	/** Request to retrieve logs from an environment and store them in your Elastic Beanstalk storage bucket. */
	export interface RequestEnvironmentInfoMessageFormProperties {
		EnvironmentId: FormControl<string | null | undefined>,
		EnvironmentName: FormControl<string | null | undefined>,

		/** Required */
		InfoType: FormControl<EnvironmentInfoType | null | undefined>,
	}
	export function CreateRequestEnvironmentInfoMessageFormGroup() {
		return new FormGroup<RequestEnvironmentInfoMessageFormProperties>({
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
			InfoType: new FormControl<EnvironmentInfoType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface RestartAppServerMessage {
		EnvironmentId?: string;
		EnvironmentName?: string;
	}

	/** <p/> */
	export interface RestartAppServerMessageFormProperties {
		EnvironmentId: FormControl<string | null | undefined>,
		EnvironmentName: FormControl<string | null | undefined>,
	}
	export function CreateRestartAppServerMessageFormGroup() {
		return new FormGroup<RestartAppServerMessageFormProperties>({
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to download logs retrieved with <a>RequestEnvironmentInfo</a>. */
	export interface RetrieveEnvironmentInfoMessage {
		EnvironmentId?: string;
		EnvironmentName?: string;

		/** Required */
		InfoType: EnvironmentInfoType;
	}

	/** Request to download logs retrieved with <a>RequestEnvironmentInfo</a>. */
	export interface RetrieveEnvironmentInfoMessageFormProperties {
		EnvironmentId: FormControl<string | null | undefined>,
		EnvironmentName: FormControl<string | null | undefined>,

		/** Required */
		InfoType: FormControl<EnvironmentInfoType | null | undefined>,
	}
	export function CreateRetrieveEnvironmentInfoMessageFormGroup() {
		return new FormGroup<RetrieveEnvironmentInfoMessageFormProperties>({
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
			InfoType: new FormControl<EnvironmentInfoType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Swaps the CNAMEs of two environments. */
	export interface SwapEnvironmentCNAMEsMessage {
		SourceEnvironmentId?: string;
		SourceEnvironmentName?: string;
		DestinationEnvironmentId?: string;
		DestinationEnvironmentName?: string;
	}

	/** Swaps the CNAMEs of two environments. */
	export interface SwapEnvironmentCNAMEsMessageFormProperties {
		SourceEnvironmentId: FormControl<string | null | undefined>,
		SourceEnvironmentName: FormControl<string | null | undefined>,
		DestinationEnvironmentId: FormControl<string | null | undefined>,
		DestinationEnvironmentName: FormControl<string | null | undefined>,
	}
	export function CreateSwapEnvironmentCNAMEsMessageFormGroup() {
		return new FormGroup<SwapEnvironmentCNAMEsMessageFormProperties>({
			SourceEnvironmentId: new FormControl<string | null | undefined>(undefined),
			SourceEnvironmentName: new FormControl<string | null | undefined>(undefined),
			DestinationEnvironmentId: new FormControl<string | null | undefined>(undefined),
			DestinationEnvironmentName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to terminate an environment. */
	export interface TerminateEnvironmentMessage {
		EnvironmentId?: string;
		EnvironmentName?: string;
		TerminateResources?: boolean | null;
		ForceTerminate?: boolean | null;
	}

	/** Request to terminate an environment. */
	export interface TerminateEnvironmentMessageFormProperties {
		EnvironmentId: FormControl<string | null | undefined>,
		EnvironmentName: FormControl<string | null | undefined>,
		TerminateResources: FormControl<boolean | null | undefined>,
		ForceTerminate: FormControl<boolean | null | undefined>,
	}
	export function CreateTerminateEnvironmentMessageFormGroup() {
		return new FormGroup<TerminateEnvironmentMessageFormProperties>({
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
			TerminateResources: new FormControl<boolean | null | undefined>(undefined),
			ForceTerminate: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request to update an application. */
	export interface UpdateApplicationMessage {

		/** Required */
		ApplicationName: string;
		Description?: string;
	}

	/** Request to update an application. */
	export interface UpdateApplicationMessageFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationMessageFormGroup() {
		return new FormGroup<UpdateApplicationMessageFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateApplicationResourceLifecycleMessage {

		/** Required */
		ApplicationName: string;

		/** Required */
		ResourceLifecycleConfig: ApplicationResourceLifecycleConfig;
	}
	export interface UpdateApplicationResourceLifecycleMessageFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationResourceLifecycleMessageFormGroup() {
		return new FormGroup<UpdateApplicationResourceLifecycleMessageFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface UpdateApplicationVersionMessage {

		/** Required */
		ApplicationName: string;

		/** Required */
		VersionLabel: string;
		Description?: string;
	}

	/** <p/> */
	export interface UpdateApplicationVersionMessageFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		VersionLabel: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationVersionMessageFormGroup() {
		return new FormGroup<UpdateApplicationVersionMessageFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VersionLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result message containing the options for the specified solution stack. */
	export interface UpdateConfigurationTemplateMessage {

		/** Required */
		ApplicationName: string;

		/** Required */
		TemplateName: string;
		Description?: string;
		OptionSettings?: Array<ConfigurationOptionSetting>;
		OptionsToRemove?: Array<OptionSpecification>;
	}

	/** The result message containing the options for the specified solution stack. */
	export interface UpdateConfigurationTemplateMessageFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		TemplateName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfigurationTemplateMessageFormGroup() {
		return new FormGroup<UpdateConfigurationTemplateMessageFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to update an environment. */
	export interface UpdateEnvironmentMessage {
		ApplicationName?: string;
		EnvironmentId?: string;
		EnvironmentName?: string;
		GroupName?: string;
		Description?: string;
		Tier?: EnvironmentTier;
		VersionLabel?: string;
		TemplateName?: string;
		SolutionStackName?: string;
		PlatformArn?: string;
		OptionSettings?: Array<ConfigurationOptionSetting>;
		OptionsToRemove?: Array<OptionSpecification>;
	}

	/** Request to update an environment. */
	export interface UpdateEnvironmentMessageFormProperties {
		ApplicationName: FormControl<string | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
		EnvironmentName: FormControl<string | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		VersionLabel: FormControl<string | null | undefined>,
		TemplateName: FormControl<string | null | undefined>,
		SolutionStackName: FormControl<string | null | undefined>,
		PlatformArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEnvironmentMessageFormGroup() {
		return new FormGroup<UpdateEnvironmentMessageFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			VersionLabel: new FormControl<string | null | undefined>(undefined),
			TemplateName: new FormControl<string | null | undefined>(undefined),
			SolutionStackName: new FormControl<string | null | undefined>(undefined),
			PlatformArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTagsForResourceMessage {

		/** Required */
		ResourceArn: string;
		TagsToAdd?: Array<Tag>;
		TagsToRemove?: Array<string>;
	}
	export interface UpdateTagsForResourceMessageFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTagsForResourceMessageFormGroup() {
		return new FormGroup<UpdateTagsForResourceMessageFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of validation messages for a specified configuration template. */
	export interface ValidateConfigurationSettingsMessage {

		/** Required */
		ApplicationName: string;
		TemplateName?: string;
		EnvironmentName?: string;

		/** Required */
		OptionSettings: Array<ConfigurationOptionSetting>;
	}

	/** A list of validation messages for a specified configuration template. */
	export interface ValidateConfigurationSettingsMessageFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
		TemplateName: FormControl<string | null | undefined>,
		EnvironmentName: FormControl<string | null | undefined>,
	}
	export function CreateValidateConfigurationSettingsMessageFormGroup() {
		return new FormGroup<ValidateConfigurationSettingsMessageFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateName: new FormControl<string | null | undefined>(undefined),
			EnvironmentName: new FormControl<string | null | undefined>(undefined),
		});

	}

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
		GET_AbortEnvironmentUpdate(EnvironmentId: string | null | undefined, EnvironmentName: string | null | undefined, Action: GET_AbortEnvironmentUpdateAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
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
		GET_ApplyEnvironmentManagedAction(EnvironmentName: string | null | undefined, EnvironmentId: string | null | undefined, ActionId: string, Action: GET_ApplyEnvironmentManagedActionAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ApplyEnvironmentManagedAction?EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&ActionId=' + (ActionId == null ? '' : encodeURIComponent(ActionId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
		 * Get #Action=AssociateEnvironmentOperationsRole
		 * @param {string} EnvironmentName The name of the environment to which to set the operations role.
		 * @param {string} OperationsRole The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role.
		 * @return {void} Success
		 */
		GET_AssociateEnvironmentOperationsRole(EnvironmentName: string, OperationsRole: string, Action: GET_AssociateEnvironmentOperationsRoleAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AssociateEnvironmentOperationsRole?EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&OperationsRole=' + (OperationsRole == null ? '' : encodeURIComponent(OperationsRole)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks if the specified CNAME is available.
		 * Get #Action=CheckDNSAvailability
		 * @param {string} CNAMEPrefix The prefix used when this CNAME is reserved.
		 * @return {void} Success
		 */
		GET_CheckDNSAvailability(CNAMEPrefix: string, Action: GET_CheckDNSAvailabilityAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
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
		GET_ComposeEnvironments(ApplicationName: string | null | undefined, GroupName: string | null | undefined, VersionLabels: Array<string> | null | undefined, Action: GET_ComposeEnvironmentsAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ComposeEnvironments?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&GroupName=' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '&' + VersionLabels?.map(z => `VersionLabels=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
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
		GET_CreateApplication(ApplicationName: string, Description: string | null | undefined, ResourceLifecycleConfig: GET_CreateApplicationResourceLifecycleConfig | null | undefined, Tags: Array<Tag> | null | undefined, Action: GET_CreateApplicationAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateApplication?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&ResourceLifecycleConfig=' + ResourceLifecycleConfig + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
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
		GET_CreateApplicationVersion(ApplicationName: string, VersionLabel: string, Description: string | null | undefined, SourceBuildInformation: GET_CreateApplicationVersionSourceBuildInformation | null | undefined, SourceBundle: GET_CreateApplicationVersionSourceBundle | null | undefined, BuildConfiguration: GET_CreateApplicationVersionBuildConfiguration | null | undefined, AutoCreateApplication: boolean | null | undefined, Process: boolean | null | undefined, Tags: Array<Tag> | null | undefined, Action: GET_CreateApplicationVersionAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateApplicationVersion?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&VersionLabel=' + (VersionLabel == null ? '' : encodeURIComponent(VersionLabel)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&SourceBuildInformation=' + SourceBuildInformation + '&SourceBundle=' + SourceBundle + '&BuildConfiguration=' + BuildConfiguration + '&AutoCreateApplication=' + AutoCreateApplication + '&Process=' + Process + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
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
		GET_CreateConfigurationTemplate(ApplicationName: string, TemplateName: string, SolutionStackName: string | null | undefined, PlatformArn: string | null | undefined, SourceConfiguration: GET_CreateConfigurationTemplateSourceConfiguration | null | undefined, EnvironmentId: string | null | undefined, Description: string | null | undefined, OptionSettings: Array<ConfigurationOptionSetting> | null | undefined, Tags: Array<Tag> | null | undefined, Action: GET_CreateConfigurationTemplateAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateConfigurationTemplate?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&SolutionStackName=' + (SolutionStackName == null ? '' : encodeURIComponent(SolutionStackName)) + '&PlatformArn=' + (PlatformArn == null ? '' : encodeURIComponent(PlatformArn)) + '&SourceConfiguration=' + SourceConfiguration + '&EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&' + OptionSettings?.map(z => `OptionSettings=${z}`).join('&') + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
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
		GET_CreateEnvironment(ApplicationName: string, EnvironmentName: string | null | undefined, GroupName: string | null | undefined, Description: string | null | undefined, CNAMEPrefix: string | null | undefined, Tier: GET_CreateEnvironmentTier | null | undefined, Tags: Array<Tag> | null | undefined, VersionLabel: string | null | undefined, TemplateName: string | null | undefined, SolutionStackName: string | null | undefined, PlatformArn: string | null | undefined, OptionSettings: Array<ConfigurationOptionSetting> | null | undefined, OptionsToRemove: Array<OptionSpecification> | null | undefined, OperationsRole: string | null | undefined, Action: GET_CreateEnvironmentAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateEnvironment?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&GroupName=' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&CNAMEPrefix=' + (CNAMEPrefix == null ? '' : encodeURIComponent(CNAMEPrefix)) + '&Tier=' + Tier + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&VersionLabel=' + (VersionLabel == null ? '' : encodeURIComponent(VersionLabel)) + '&TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&SolutionStackName=' + (SolutionStackName == null ? '' : encodeURIComponent(SolutionStackName)) + '&PlatformArn=' + (PlatformArn == null ? '' : encodeURIComponent(PlatformArn)) + '&' + OptionSettings?.map(z => `OptionSettings=${z}`).join('&') + '&' + OptionsToRemove?.map(z => `OptionsToRemove=${z}`).join('&') + '&OperationsRole=' + (OperationsRole == null ? '' : encodeURIComponent(OperationsRole)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
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
		GET_CreatePlatformVersion(PlatformName: string, PlatformVersion: string, PlatformDefinitionBundle: GET_CreatePlatformVersionPlatformDefinitionBundle, EnvironmentName: string | null | undefined, OptionSettings: Array<ConfigurationOptionSetting> | null | undefined, Tags: Array<Tag> | null | undefined, Action: GET_CreatePlatformVersionAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreatePlatformVersion?PlatformName=' + (PlatformName == null ? '' : encodeURIComponent(PlatformName)) + '&PlatformVersion=' + (PlatformVersion == null ? '' : encodeURIComponent(PlatformVersion)) + '&PlatformDefinitionBundle=' + PlatformDefinitionBundle + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&' + OptionSettings?.map(z => `OptionSettings=${z}`).join('&') + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, <code>CreateStorageLocation</code> still returns the bucket name but does not create a new bucket.
		 * Get #Action=CreateStorageLocation
		 * @return {void} Success
		 */
		GET_CreateStorageLocation(Action: GET_CreateStorageLocationAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateStorageLocation?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, <code>CreateStorageLocation</code> still returns the bucket name but does not create a new bucket.
		 * Post #Action=CreateStorageLocation
		 * @return {void} Success
		 */
		POST_CreateStorageLocation(Action: GET_CreateStorageLocationAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=CreateStorageLocation?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.</p> <note> <p>You cannot delete an application that has a running environment.</p> </note>
		 * Get #Action=DeleteApplication
		 * @param {string} ApplicationName The name of the application to delete.
		 * @param {boolean} TerminateEnvByForce When set to true, running environments will be terminated before deleting the application.
		 * @return {void} Success
		 */
		GET_DeleteApplication(ApplicationName: string, TerminateEnvByForce: boolean | null | undefined, Action: GET_DeleteApplicationAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
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
		GET_DeleteApplicationVersion(ApplicationName: string, VersionLabel: string, DeleteSourceBundle: boolean | null | undefined, Action: GET_DeleteApplicationVersionAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteApplicationVersion?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&VersionLabel=' + (VersionLabel == null ? '' : encodeURIComponent(VersionLabel)) + '&DeleteSourceBundle=' + DeleteSourceBundle + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified configuration template.</p> <note> <p>When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment.</p> </note>
		 * Get #Action=DeleteConfigurationTemplate
		 * @param {string} ApplicationName The name of the application to delete the configuration template from.
		 * @param {string} TemplateName The name of the configuration template to delete.
		 * @return {void} Success
		 */
		GET_DeleteConfigurationTemplate(ApplicationName: string, TemplateName: string, Action: GET_DeleteConfigurationTemplateAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteConfigurationTemplate?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the draft configuration associated with the running environment.</p> <p>Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.</p>
		 * Get #Action=DeleteEnvironmentConfiguration
		 * @param {string} ApplicationName The name of the application the environment is associated with.
		 * @param {string} EnvironmentName The name of the environment to delete the draft configuration from.
		 * @return {void} Success
		 */
		GET_DeleteEnvironmentConfiguration(ApplicationName: string, EnvironmentName: string, Action: GET_DeleteEnvironmentConfigurationAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteEnvironmentConfiguration?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified version of a custom platform.
		 * Get #Action=DeletePlatformVersion
		 * @param {string} PlatformArn The ARN of the version of the custom platform.
		 * @return {void} Success
		 */
		GET_DeletePlatformVersion(PlatformArn: string | null | undefined, Action: GET_DeletePlatformVersionAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeletePlatformVersion?PlatformArn=' + (PlatformArn == null ? '' : encodeURIComponent(PlatformArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account.</p> <p>The result currently has one set of attributes—resource quotas.</p>
		 * Get #Action=DescribeAccountAttributes
		 * @return {void} Success
		 */
		GET_DescribeAccountAttributes(Action: GET_DescribeAccountAttributesAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAccountAttributes?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account.</p> <p>The result currently has one set of attributes—resource quotas.</p>
		 * Post #Action=DescribeAccountAttributes
		 * @return {void} Success
		 */
		POST_DescribeAccountAttributes(Action: GET_DescribeAccountAttributesAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
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
		GET_DescribeApplicationVersions(ApplicationName: string | null | undefined, VersionLabels: Array<string> | null | undefined, MaxRecords: number | null | undefined, NextToken: string | null | undefined, Action: GET_DescribeApplicationVersionsAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeApplicationVersions?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&' + VersionLabels?.map(z => `VersionLabels=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the descriptions of existing applications.
		 * Get #Action=DescribeApplications
		 * @param {Array<string>} ApplicationNames If specified, AWS Elastic Beanstalk restricts the returned descriptions to only include those with the specified names.
		 * @return {void} Success
		 */
		GET_DescribeApplications(ApplicationNames: Array<string> | null | undefined, Action: GET_DescribeApplicationsAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeApplications?' + ApplicationNames?.map(z => `ApplicationNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
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
		GET_DescribeConfigurationOptions(ApplicationName: string | null | undefined, TemplateName: string | null | undefined, EnvironmentName: string | null | undefined, SolutionStackName: string | null | undefined, PlatformArn: string | null | undefined, Options: Array<OptionSpecification> | null | undefined, Action: GET_DescribeConfigurationOptionsAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeConfigurationOptions?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&SolutionStackName=' + (SolutionStackName == null ? '' : encodeURIComponent(SolutionStackName)) + '&PlatformArn=' + (PlatformArn == null ? '' : encodeURIComponent(PlatformArn)) + '&' + Options?.map(z => `Options=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment.</p> <p>When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy.</p> <p>Related Topics</p> <ul> <li> <p> <a>DeleteEnvironmentConfiguration</a> </p> </li> </ul>
		 * Get #Action=DescribeConfigurationSettings
		 * @param {string} ApplicationName The application for the environment or configuration template.
		 * @param {string} TemplateName <p>The name of the configuration template to describe.</p> <p> Conditional: You must specify either this parameter or an EnvironmentName, but not both. If you specify both, AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. If you do not specify either, AWS Elastic Beanstalk returns a <code>MissingRequiredParameter</code> error. </p>
		 * @param {string} EnvironmentName <p>The name of the environment to describe.</p> <p> Condition: You must specify either this or a TemplateName, but not both. If you specify both, AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @return {void} Success
		 */
		GET_DescribeConfigurationSettings(ApplicationName: string, TemplateName: string | null | undefined, EnvironmentName: string | null | undefined, Action: GET_DescribeConfigurationSettingsAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
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
		GET_DescribeEnvironmentHealth(EnvironmentName: string | null | undefined, EnvironmentId: string | null | undefined, AttributeNames: Array<EnvironmentHealthAttribute> | null | undefined, Action: GET_DescribeEnvironmentHealthAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEnvironmentHealth?EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&' + AttributeNames?.map(z => `AttributeNames=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
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
		GET_DescribeEnvironmentManagedActionHistory(EnvironmentId: string | null | undefined, EnvironmentName: string | null | undefined, NextToken: string | null | undefined, MaxItems: number | null | undefined, Action: GET_DescribeEnvironmentManagedActionHistoryAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEnvironmentManagedActionHistory?EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists an environment's upcoming and in-progress managed actions.
		 * Get #Action=DescribeEnvironmentManagedActions
		 * @param {string} EnvironmentName The name of the target environment.
		 * @param {string} EnvironmentId The environment ID of the target environment.
		 * @param {ActionStatus} Status To show only actions with a particular status, specify a status.
		 * @return {void} Success
		 */
		GET_DescribeEnvironmentManagedActions(EnvironmentName: string | null | undefined, EnvironmentId: string | null | undefined, Status: ActionStatus | null | undefined, Action: GET_DescribeEnvironmentManagedActionsAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEnvironmentManagedActions?EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&Status=' + Status + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns AWS resources for this environment.
		 * Get #Action=DescribeEnvironmentResources
		 * @param {string} EnvironmentId <p>The ID of the environment to retrieve AWS resource usage data.</p> <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @param {string} EnvironmentName <p>The name of the environment to retrieve AWS resource usage data.</p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @return {void} Success
		 */
		GET_DescribeEnvironmentResources(EnvironmentId: string | null | undefined, EnvironmentName: string | null | undefined, Action: GET_DescribeEnvironmentResourcesAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
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
		GET_DescribeEnvironments(ApplicationName: string | null | undefined, VersionLabel: string | null | undefined, EnvironmentIds: Array<string> | null | undefined, EnvironmentNames: Array<string> | null | undefined, IncludeDeleted: boolean | null | undefined, IncludedDeletedBackTo: Date | null | undefined, MaxRecords: number | null | undefined, NextToken: string | null | undefined, Action: GET_DescribeEnvironmentsAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEnvironments?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&VersionLabel=' + (VersionLabel == null ? '' : encodeURIComponent(VersionLabel)) + '&' + EnvironmentIds?.map(z => `EnvironmentIds=${encodeURIComponent(z)}`).join('&') + '&' + EnvironmentNames?.map(z => `EnvironmentNames=${encodeURIComponent(z)}`).join('&') + '&IncludeDeleted=' + IncludeDeleted + '&IncludedDeletedBackTo=' + IncludedDeletedBackTo?.toISOString() + '&MaxRecords=' + MaxRecords + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
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
		 * @param {EventSeverity} Severity If specified, limits the events returned from this call to include only those with the specified severity or higher.
		 * @param {Date} StartTime If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that occur on or after this time.
		 * @param {Date} EndTime  If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that occur up to, but not including, the <code>EndTime</code>. 
		 * @param {number} MaxRecords Specifies the maximum number of events that can be returned, beginning with the most recent event.
		 * @param {string} NextToken Pagination token. If specified, the events return the next batch of results.
		 * @return {void} Success
		 */
		GET_DescribeEvents(ApplicationName: string | null | undefined, VersionLabel: string | null | undefined, TemplateName: string | null | undefined, EnvironmentId: string | null | undefined, EnvironmentName: string | null | undefined, PlatformArn: string | null | undefined, RequestId: string | null | undefined, Severity: EventSeverity | null | undefined, StartTime: Date | null | undefined, EndTime: Date | null | undefined, MaxRecords: number | null | undefined, NextToken: string | null | undefined, Action: GET_DescribeEventsAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEvents?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&VersionLabel=' + (VersionLabel == null ? '' : encodeURIComponent(VersionLabel)) + '&TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&PlatformArn=' + (PlatformArn == null ? '' : encodeURIComponent(PlatformArn)) + '&RequestId=' + (RequestId == null ? '' : encodeURIComponent(RequestId)) + '&Severity=' + Severity + '&StartTime=' + StartTime?.toISOString() + '&EndTime=' + EndTime?.toISOString() + '&MaxRecords=' + MaxRecords + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
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
		GET_DescribeInstancesHealth(EnvironmentName: string | null | undefined, EnvironmentId: string | null | undefined, AttributeNames: Array<InstancesHealthAttribute> | null | undefined, NextToken: string | null | undefined, Action: GET_DescribeInstancesHealthAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeInstancesHealth?EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&' + AttributeNames?.map(z => `AttributeNames=${z}`).join('&') + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of platform versions.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
		 * Get #Action=DescribePlatformVersion
		 * @param {string} PlatformArn The ARN of the platform version.
		 * @return {void} Success
		 */
		GET_DescribePlatformVersion(PlatformArn: string | null | undefined, Action: GET_DescribePlatformVersionAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribePlatformVersion?PlatformArn=' + (PlatformArn == null ? '' : encodeURIComponent(PlatformArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller's permissions for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
		 * Get #Action=DisassociateEnvironmentOperationsRole
		 * @param {string} EnvironmentName The name of the environment from which to disassociate the operations role.
		 * @return {void} Success
		 */
		GET_DisassociateEnvironmentOperationsRole(EnvironmentName: string, Action: GET_DisassociateEnvironmentOperationsRoleAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DisassociateEnvironmentOperationsRole?EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.
		 * Get #Action=ListAvailableSolutionStacks
		 * @return {void} Success
		 */
		GET_ListAvailableSolutionStacks(Action: GET_ListAvailableSolutionStacksAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListAvailableSolutionStacks?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.
		 * Post #Action=ListAvailableSolutionStacks
		 * @return {void} Success
		 */
		POST_ListAvailableSolutionStacks(Action: GET_ListAvailableSolutionStacksAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
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
		GET_ListPlatformBranches(Filters: Array<SearchFilter> | null | undefined, MaxRecords: number | null | undefined, NextToken: string | null | undefined, Action: GET_ListPlatformBranchesAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListPlatformBranches?' + Filters?.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the platform versions available for your account in an AWS Region. Provides summary information about each platform version. Compare to <a>DescribePlatformVersion</a>, which provides full details about a single platform version.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
		 * Get #Action=ListPlatformVersions
		 * @param {Array<PlatformFilter>} Filters Criteria for restricting the resulting list of platform versions. The filter is interpreted as a logical conjunction (AND) of the separate <code>PlatformFilter</code> terms.
		 * @param {number} MaxRecords The maximum number of platform version values returned in one call.
		 * @param {string} NextToken <p>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If no <code>NextToken</code> is specified, the first page is retrieved.</p>
		 * @return {void} Success
		 */
		GET_ListPlatformVersions(Filters: Array<PlatformFilter> | null | undefined, MaxRecords: number | null | undefined, NextToken: string | null | undefined, Action: GET_ListPlatformVersionsAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListPlatformVersions?' + Filters?.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p>
		 * Get #Action=ListTagsForResource
		 * @param {string} ResourceArn <p>The Amazon Resource Name (ARN) of the resouce for which a tag list is requested.</p> <p>Must be the ARN of an Elastic Beanstalk resource.</p>
		 * @return {void} Success
		 */
		GET_ListTagsForResource(ResourceArn: string, Action: GET_ListTagsForResourceAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListTagsForResource?ResourceArn=' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart.
		 * Get #Action=RebuildEnvironment
		 * @param {string} EnvironmentId <p>The ID of the environment to rebuild.</p> <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @param {string} EnvironmentName <p>The name of the environment to rebuild.</p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @return {void} Success
		 */
		GET_RebuildEnvironment(EnvironmentId: string | null | undefined, EnvironmentName: string | null | undefined, Action: GET_RebuildEnvironmentAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RebuildEnvironment?EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Initiates a request to compile the specified type of information of the deployed environment.</p> <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from the application server log files of every Amazon EC2 instance in your environment. </p> <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET containers do not support bundle logs. </p> <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p> <p>Related Topics</p> <ul> <li> <p> <a>RetrieveEnvironmentInfo</a> </p> </li> </ul>
		 * Get #Action=RequestEnvironmentInfo
		 * @param {string} EnvironmentId <p>The ID of the environment of the requested data.</p> <p>If no such environment is found, <code>RequestEnvironmentInfo</code> returns an <code>InvalidParameterValue</code> error. </p> <p>Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @param {string} EnvironmentName <p>The name of the environment of the requested data.</p> <p>If no such environment is found, <code>RequestEnvironmentInfo</code> returns an <code>InvalidParameterValue</code> error. </p> <p>Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @param {EnvironmentInfoType} InfoType The type of information to request.
		 * @return {void} Success
		 */
		GET_RequestEnvironmentInfo(EnvironmentId: string | null | undefined, EnvironmentName: string | null | undefined, InfoType: EnvironmentInfoType, Action: GET_RequestEnvironmentInfoAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RequestEnvironmentInfo?EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&InfoType=' + InfoType + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Causes the environment to restart the application container server running on each Amazon EC2 instance.
		 * Get #Action=RestartAppServer
		 * @param {string} EnvironmentId <p>The ID of the environment to restart the server for.</p> <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @param {string} EnvironmentName <p>The name of the environment to restart the server for.</p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @return {void} Success
		 */
		GET_RestartAppServer(EnvironmentId: string | null | undefined, EnvironmentName: string | null | undefined, Action: GET_RestartAppServerAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RestartAppServer?EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a> request.</p> <p>Related Topics</p> <ul> <li> <p> <a>RequestEnvironmentInfo</a> </p> </li> </ul>
		 * Get #Action=RetrieveEnvironmentInfo
		 * @param {string} EnvironmentId <p>The ID of the data's environment.</p> <p>If no such environment is found, returns an <code>InvalidParameterValue</code> error.</p> <p>Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error.</p>
		 * @param {string} EnvironmentName <p>The name of the data's environment.</p> <p> If no such environment is found, returns an <code>InvalidParameterValue</code> error. </p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
		 * @param {EnvironmentInfoType} InfoType The type of information to retrieve.
		 * @return {void} Success
		 */
		GET_RetrieveEnvironmentInfo(EnvironmentId: string | null | undefined, EnvironmentName: string | null | undefined, InfoType: EnvironmentInfoType, Action: GET_RetrieveEnvironmentInfoAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
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
		GET_SwapEnvironmentCNAMEs(SourceEnvironmentId: string | null | undefined, SourceEnvironmentName: string | null | undefined, DestinationEnvironmentId: string | null | undefined, DestinationEnvironmentName: string | null | undefined, Action: GET_SwapEnvironmentCNAMEsAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
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
		GET_TerminateEnvironment(EnvironmentId: string | null | undefined, EnvironmentName: string | null | undefined, TerminateResources: boolean | null | undefined, ForceTerminate: boolean | null | undefined, Action: GET_TerminateEnvironmentAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=TerminateEnvironment?EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&TerminateResources=' + TerminateResources + '&ForceTerminate=' + ForceTerminate + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the specified application to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear these properties, specify an empty string.</p> </note>
		 * Get #Action=UpdateApplication
		 * @param {string} ApplicationName The name of the application to update. If no such application is found, <code>UpdateApplication</code> returns an <code>InvalidParameterValue</code> error. 
		 * @param {string} Description <p>A new description for the application.</p> <p>Default: If not specified, AWS Elastic Beanstalk does not update the description.</p>
		 * @return {void} Success
		 */
		GET_UpdateApplication(ApplicationName: string, Description: string | null | undefined, Action: GET_UpdateApplicationAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateApplication?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies lifecycle settings for an application.
		 * Get #Action=UpdateApplicationResourceLifecycle
		 * @param {string} ApplicationName The name of the application.
		 * @param {GET_UpdateApplicationResourceLifecycleResourceLifecycleConfig} ResourceLifecycleConfig The lifecycle configuration.
		 * @return {void} Success
		 */
		GET_UpdateApplicationResourceLifecycle(ApplicationName: string, ResourceLifecycleConfig: GET_UpdateApplicationResourceLifecycleResourceLifecycleConfig, Action: GET_UpdateApplicationResourceLifecycleAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
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
		GET_UpdateApplicationVersion(ApplicationName: string, VersionLabel: string, Description: string | null | undefined, Action: GET_UpdateApplicationVersionAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
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
		GET_UpdateConfigurationTemplate(ApplicationName: string, TemplateName: string, Description: string | null | undefined, OptionSettings: Array<ConfigurationOptionSetting> | null | undefined, OptionsToRemove: Array<OptionSpecification> | null | undefined, Action: GET_UpdateConfigurationTemplateAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateConfigurationTemplate?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&' + OptionSettings?.map(z => `OptionSettings=${z}`).join('&') + '&' + OptionsToRemove?.map(z => `OptionsToRemove=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
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
		GET_UpdateEnvironment(ApplicationName: string | null | undefined, EnvironmentId: string | null | undefined, EnvironmentName: string | null | undefined, GroupName: string | null | undefined, Description: string | null | undefined, Tier: GET_UpdateEnvironmentTier | null | undefined, VersionLabel: string | null | undefined, TemplateName: string | null | undefined, SolutionStackName: string | null | undefined, PlatformArn: string | null | undefined, OptionSettings: Array<ConfigurationOptionSetting> | null | undefined, OptionsToRemove: Array<OptionSpecification> | null | undefined, Action: GET_UpdateEnvironmentAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateEnvironment?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&EnvironmentId=' + (EnvironmentId == null ? '' : encodeURIComponent(EnvironmentId)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&GroupName=' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&Tier=' + Tier + '&VersionLabel=' + (VersionLabel == null ? '' : encodeURIComponent(VersionLabel)) + '&TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&SolutionStackName=' + (SolutionStackName == null ? '' : encodeURIComponent(SolutionStackName)) + '&PlatformArn=' + (PlatformArn == null ? '' : encodeURIComponent(PlatformArn)) + '&' + OptionSettings?.map(z => `OptionSettings=${z}`).join('&') + '&' + OptionsToRemove?.map(z => `OptionsToRemove=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: <code>TagsToAdd</code> for tags to add or update, and <code>TagsToRemove</code>.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p> <p>If you create a custom IAM user policy to control permission to this operation, specify one of the following two virtual actions (or both) instead of the API operation name:</p> <dl> <dt>elasticbeanstalk:AddTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tags to add in the <code>TagsToAdd</code> parameter.</p> </dd> <dt>elasticbeanstalk:RemoveTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tag keys to remove in the <code>TagsToRemove</code> parameter.</p> </dd> </dl> <p>For details about creating a custom user policy, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#AWSHowTo.iam.policies">Creating a Custom User Policy</a>.</p>
		 * Get #Action=UpdateTagsForResource
		 * @param {string} ResourceArn <p>The Amazon Resource Name (ARN) of the resouce to be updated.</p> <p>Must be the ARN of an Elastic Beanstalk resource.</p>
		 * @param {Array<Tag>} TagsToAdd <p>A list of tags to add or update. If a key of an existing tag is added, the tag's value is updated.</p> <p>Specify at least one of these parameters: <code>TagsToAdd</code>, <code>TagsToRemove</code>.</p>
		 * @param {Array<string>} TagsToRemove <p>A list of tag keys to remove. If a tag key doesn't exist, it is silently ignored.</p> <p>Specify at least one of these parameters: <code>TagsToAdd</code>, <code>TagsToRemove</code>.</p>
		 * @return {void} Success
		 */
		GET_UpdateTagsForResource(ResourceArn: string, TagsToAdd: Array<Tag> | null | undefined, TagsToRemove: Array<string> | null | undefined, Action: GET_UpdateTagsForResourceAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateTagsForResource?ResourceArn=' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '&' + TagsToAdd?.map(z => `TagsToAdd=${z}`).join('&') + '&' + TagsToRemove?.map(z => `TagsToRemove=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
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
		GET_ValidateConfigurationSettings(ApplicationName: string, TemplateName: string | null | undefined, EnvironmentName: string | null | undefined, OptionSettings: Array<ConfigurationOptionSetting>, Action: GET_ValidateConfigurationSettingsAction, Version: GET_AbortEnvironmentUpdateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ValidateConfigurationSettings?ApplicationName=' + (ApplicationName == null ? '' : encodeURIComponent(ApplicationName)) + '&TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&EnvironmentName=' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)) + '&' + OptionSettings.map(z => `OptionSettings=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_AbortEnvironmentUpdateAction { AbortEnvironmentUpdate = 0 }

	export enum GET_AbortEnvironmentUpdateVersion { '2010-12-01' = 0 }

	export enum GET_ApplyEnvironmentManagedActionAction { ApplyEnvironmentManagedAction = 0 }

	export enum GET_AssociateEnvironmentOperationsRoleAction { AssociateEnvironmentOperationsRole = 0 }

	export enum GET_CheckDNSAvailabilityAction { CheckDNSAvailability = 0 }

	export enum GET_ComposeEnvironmentsAction { ComposeEnvironments = 0 }

	export interface GET_CreateApplicationResourceLifecycleConfig {
		ServiceRole?: string;
		VersionLifecycleConfig?: ApplicationVersionLifecycleConfig;
	}
	export interface GET_CreateApplicationResourceLifecycleConfigFormProperties {
		ServiceRole: FormControl<string | null | undefined>,
	}
	export function CreateGET_CreateApplicationResourceLifecycleConfigFormGroup() {
		return new FormGroup<GET_CreateApplicationResourceLifecycleConfigFormProperties>({
			ServiceRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GET_CreateApplicationAction { CreateApplication = 0 }

	export interface GET_CreateApplicationVersionSourceBuildInformation {

		/** Required */
		SourceType: SourceType;

		/** Required */
		SourceRepository: SourceRepository;

		/** Required */
		SourceLocation: string;
	}
	export interface GET_CreateApplicationVersionSourceBuildInformationFormProperties {

		/** Required */
		SourceType: FormControl<SourceType | null | undefined>,

		/** Required */
		SourceRepository: FormControl<SourceRepository | null | undefined>,

		/** Required */
		SourceLocation: FormControl<string | null | undefined>,
	}
	export function CreateGET_CreateApplicationVersionSourceBuildInformationFormGroup() {
		return new FormGroup<GET_CreateApplicationVersionSourceBuildInformationFormProperties>({
			SourceType: new FormControl<SourceType | null | undefined>(undefined, [Validators.required]),
			SourceRepository: new FormControl<SourceRepository | null | undefined>(undefined, [Validators.required]),
			SourceLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GET_CreateApplicationVersionSourceBundle {
		S3Bucket?: string;
		S3Key?: string;
	}
	export interface GET_CreateApplicationVersionSourceBundleFormProperties {
		S3Bucket: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
	}
	export function CreateGET_CreateApplicationVersionSourceBundleFormGroup() {
		return new FormGroup<GET_CreateApplicationVersionSourceBundleFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined),
			S3Key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_CreateApplicationVersionBuildConfiguration {
		ArtifactName?: string;

		/** Required */
		CodeBuildServiceRole: string;
		ComputeType?: ComputeType;

		/** Required */
		Image: string;
		TimeoutInMinutes?: number | null;
	}
	export interface GET_CreateApplicationVersionBuildConfigurationFormProperties {
		ArtifactName: FormControl<string | null | undefined>,

		/** Required */
		CodeBuildServiceRole: FormControl<string | null | undefined>,
		ComputeType: FormControl<ComputeType | null | undefined>,

		/** Required */
		Image: FormControl<string | null | undefined>,
		TimeoutInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateGET_CreateApplicationVersionBuildConfigurationFormGroup() {
		return new FormGroup<GET_CreateApplicationVersionBuildConfigurationFormProperties>({
			ArtifactName: new FormControl<string | null | undefined>(undefined),
			CodeBuildServiceRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComputeType: new FormControl<ComputeType | null | undefined>(undefined),
			Image: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GET_CreateApplicationVersionAction { CreateApplicationVersion = 0 }

	export interface GET_CreateConfigurationTemplateSourceConfiguration {
		ApplicationName?: string;
		TemplateName?: string;
	}
	export interface GET_CreateConfigurationTemplateSourceConfigurationFormProperties {
		ApplicationName: FormControl<string | null | undefined>,
		TemplateName: FormControl<string | null | undefined>,
	}
	export function CreateGET_CreateConfigurationTemplateSourceConfigurationFormGroup() {
		return new FormGroup<GET_CreateConfigurationTemplateSourceConfigurationFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined),
			TemplateName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GET_CreateConfigurationTemplateAction { CreateConfigurationTemplate = 0 }

	export interface GET_CreateEnvironmentTier {
		Name?: string;
		Type?: string;
		Version?: string;
	}
	export interface GET_CreateEnvironmentTierFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateGET_CreateEnvironmentTierFormGroup() {
		return new FormGroup<GET_CreateEnvironmentTierFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GET_CreateEnvironmentAction { CreateEnvironment = 0 }

	export interface GET_CreatePlatformVersionPlatformDefinitionBundle {
		S3Bucket?: string;
		S3Key?: string;
	}
	export interface GET_CreatePlatformVersionPlatformDefinitionBundleFormProperties {
		S3Bucket: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
	}
	export function CreateGET_CreatePlatformVersionPlatformDefinitionBundleFormGroup() {
		return new FormGroup<GET_CreatePlatformVersionPlatformDefinitionBundleFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined),
			S3Key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GET_CreatePlatformVersionAction { CreatePlatformVersion = 0 }

	export enum GET_CreateStorageLocationAction { CreateStorageLocation = 0 }

	export enum GET_DeleteApplicationAction { DeleteApplication = 0 }

	export enum GET_DeleteApplicationVersionAction { DeleteApplicationVersion = 0 }

	export enum GET_DeleteConfigurationTemplateAction { DeleteConfigurationTemplate = 0 }

	export enum GET_DeleteEnvironmentConfigurationAction { DeleteEnvironmentConfiguration = 0 }

	export enum GET_DeletePlatformVersionAction { DeletePlatformVersion = 0 }

	export enum GET_DescribeAccountAttributesAction { DescribeAccountAttributes = 0 }

	export enum GET_DescribeApplicationVersionsAction { DescribeApplicationVersions = 0 }

	export enum GET_DescribeApplicationsAction { DescribeApplications = 0 }

	export enum GET_DescribeConfigurationOptionsAction { DescribeConfigurationOptions = 0 }

	export enum GET_DescribeConfigurationSettingsAction { DescribeConfigurationSettings = 0 }

	export enum GET_DescribeEnvironmentHealthAction { DescribeEnvironmentHealth = 0 }

	export enum GET_DescribeEnvironmentManagedActionHistoryAction { DescribeEnvironmentManagedActionHistory = 0 }

	export enum GET_DescribeEnvironmentManagedActionsAction { DescribeEnvironmentManagedActions = 0 }

	export enum GET_DescribeEnvironmentResourcesAction { DescribeEnvironmentResources = 0 }

	export enum GET_DescribeEnvironmentsAction { DescribeEnvironments = 0 }

	export enum GET_DescribeEventsAction { DescribeEvents = 0 }

	export enum GET_DescribeInstancesHealthAction { DescribeInstancesHealth = 0 }

	export enum GET_DescribePlatformVersionAction { DescribePlatformVersion = 0 }

	export enum GET_DisassociateEnvironmentOperationsRoleAction { DisassociateEnvironmentOperationsRole = 0 }

	export enum GET_ListAvailableSolutionStacksAction { ListAvailableSolutionStacks = 0 }

	export enum GET_ListPlatformBranchesAction { ListPlatformBranches = 0 }

	export enum GET_ListPlatformVersionsAction { ListPlatformVersions = 0 }

	export enum GET_ListTagsForResourceAction { ListTagsForResource = 0 }

	export enum GET_RebuildEnvironmentAction { RebuildEnvironment = 0 }

	export enum GET_RequestEnvironmentInfoAction { RequestEnvironmentInfo = 0 }

	export enum GET_RestartAppServerAction { RestartAppServer = 0 }

	export enum GET_RetrieveEnvironmentInfoAction { RetrieveEnvironmentInfo = 0 }

	export enum GET_SwapEnvironmentCNAMEsAction { SwapEnvironmentCNAMEs = 0 }

	export enum GET_TerminateEnvironmentAction { TerminateEnvironment = 0 }

	export enum GET_UpdateApplicationAction { UpdateApplication = 0 }

	export interface GET_UpdateApplicationResourceLifecycleResourceLifecycleConfig {
		ServiceRole?: string;
		VersionLifecycleConfig?: ApplicationVersionLifecycleConfig;
	}
	export interface GET_UpdateApplicationResourceLifecycleResourceLifecycleConfigFormProperties {
		ServiceRole: FormControl<string | null | undefined>,
	}
	export function CreateGET_UpdateApplicationResourceLifecycleResourceLifecycleConfigFormGroup() {
		return new FormGroup<GET_UpdateApplicationResourceLifecycleResourceLifecycleConfigFormProperties>({
			ServiceRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GET_UpdateApplicationResourceLifecycleAction { UpdateApplicationResourceLifecycle = 0 }

	export enum GET_UpdateApplicationVersionAction { UpdateApplicationVersion = 0 }

	export enum GET_UpdateConfigurationTemplateAction { UpdateConfigurationTemplate = 0 }

	export interface GET_UpdateEnvironmentTier {
		Name?: string;
		Type?: string;
		Version?: string;
	}
	export interface GET_UpdateEnvironmentTierFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateGET_UpdateEnvironmentTierFormGroup() {
		return new FormGroup<GET_UpdateEnvironmentTierFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GET_UpdateEnvironmentAction { UpdateEnvironment = 0 }

	export enum GET_UpdateTagsForResourceAction { UpdateTagsForResource = 0 }

	export enum GET_ValidateConfigurationSettingsAction { ValidateConfigurationSettings = 0 }

}

