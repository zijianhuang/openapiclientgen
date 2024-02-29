import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelImageCreationResponse {
		requestId?: string;
		clientToken?: string;
		imageBuildVersionArn?: string;
	}
	export interface CancelImageCreationResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		imageBuildVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateCancelImageCreationResponseFormGroup() {
		return new FormGroup<CancelImageCreationResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			imageBuildVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceException {
	}
	export interface ServiceExceptionFormProperties {
	}
	export function CreateServiceExceptionFormGroup() {
		return new FormGroup<ServiceExceptionFormProperties>({
		});

	}

	export interface ClientException {
	}
	export interface ClientExceptionFormProperties {
	}
	export function CreateClientExceptionFormGroup() {
		return new FormGroup<ClientExceptionFormProperties>({
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface IdempotentParameterMismatchException {
	}
	export interface IdempotentParameterMismatchExceptionFormProperties {
	}
	export function CreateIdempotentParameterMismatchExceptionFormGroup() {
		return new FormGroup<IdempotentParameterMismatchExceptionFormProperties>({
		});

	}

	export interface ForbiddenException {
	}
	export interface ForbiddenExceptionFormProperties {
	}
	export function CreateForbiddenExceptionFormGroup() {
		return new FormGroup<ForbiddenExceptionFormProperties>({
		});

	}

	export interface CallRateLimitExceededException {
	}
	export interface CallRateLimitExceededExceptionFormProperties {
	}
	export function CreateCallRateLimitExceededExceptionFormGroup() {
		return new FormGroup<CallRateLimitExceededExceptionFormProperties>({
		});

	}

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
		});

	}

	export interface CreateComponentResponse {
		requestId?: string;
		clientToken?: string;
		componentBuildVersionArn?: string;
	}
	export interface CreateComponentResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		componentBuildVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateComponentResponseFormGroup() {
		return new FormGroup<CreateComponentResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			componentBuildVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidVersionNumberException {
	}
	export interface InvalidVersionNumberExceptionFormProperties {
	}
	export function CreateInvalidVersionNumberExceptionFormGroup() {
		return new FormGroup<InvalidVersionNumberExceptionFormProperties>({
		});

	}

	export interface InvalidParameterCombinationException {
	}
	export interface InvalidParameterCombinationExceptionFormProperties {
	}
	export function CreateInvalidParameterCombinationExceptionFormGroup() {
		return new FormGroup<InvalidParameterCombinationExceptionFormProperties>({
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

	export interface CreateContainerRecipeResponse {
		requestId?: string;
		clientToken?: string;
		containerRecipeArn?: string;
	}
	export interface CreateContainerRecipeResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		containerRecipeArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateContainerRecipeResponseFormGroup() {
		return new FormGroup<CreateContainerRecipeResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			containerRecipeArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration details of the component. */
	export interface ComponentConfiguration {

		/** Required */
		componentArn: string;
		parameters?: Array<ComponentParameter>;
	}

	/** Configuration details of the component. */
	export interface ComponentConfigurationFormProperties {

		/** Required */
		componentArn: FormControl<string | null | undefined>,
	}
	export function CreateComponentConfigurationFormGroup() {
		return new FormGroup<ComponentConfigurationFormProperties>({
			componentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains a key/value pair that sets the named component parameter. */
	export interface ComponentParameter {

		/** Required */
		name: string;

		/** Required */
		value: Array<string>;
	}

	/** Contains a key/value pair that sets the named component parameter. */
	export interface ComponentParameterFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateComponentParameterFormGroup() {
		return new FormGroup<ComponentParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines block device mappings for the instance used to configure your image. */
	export interface InstanceBlockDeviceMapping {
		deviceName?: string;
		ebs?: EbsInstanceBlockDeviceSpecification;
		virtualName?: string;
		noDevice?: string;
	}

	/** Defines block device mappings for the instance used to configure your image. */
	export interface InstanceBlockDeviceMappingFormProperties {
		deviceName: FormControl<string | null | undefined>,
		virtualName: FormControl<string | null | undefined>,
		noDevice: FormControl<string | null | undefined>,
	}
	export function CreateInstanceBlockDeviceMappingFormGroup() {
		return new FormGroup<InstanceBlockDeviceMappingFormProperties>({
			deviceName: new FormControl<string | null | undefined>(undefined),
			virtualName: new FormControl<string | null | undefined>(undefined),
			noDevice: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Amazon EBS-specific block device mapping specifications. */
	export interface EbsInstanceBlockDeviceSpecification {
		encrypted?: boolean | null;
		deleteOnTermination?: boolean | null;
		iops?: number | null;
		kmsKeyId?: string;
		snapshotId?: string;
		volumeSize?: number | null;
		volumeType?: EbsVolumeType;
		throughput?: number | null;
	}

	/** Amazon EBS-specific block device mapping specifications. */
	export interface EbsInstanceBlockDeviceSpecificationFormProperties {
		encrypted: FormControl<boolean | null | undefined>,
		deleteOnTermination: FormControl<boolean | null | undefined>,
		iops: FormControl<number | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
		snapshotId: FormControl<string | null | undefined>,
		volumeSize: FormControl<number | null | undefined>,
		volumeType: FormControl<EbsVolumeType | null | undefined>,
		throughput: FormControl<number | null | undefined>,
	}
	export function CreateEbsInstanceBlockDeviceSpecificationFormGroup() {
		return new FormGroup<EbsInstanceBlockDeviceSpecificationFormProperties>({
			encrypted: new FormControl<boolean | null | undefined>(undefined),
			deleteOnTermination: new FormControl<boolean | null | undefined>(undefined),
			iops: new FormControl<number | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			snapshotId: new FormControl<string | null | undefined>(undefined),
			volumeSize: new FormControl<number | null | undefined>(undefined),
			volumeType: new FormControl<EbsVolumeType | null | undefined>(undefined),
			throughput: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EbsVolumeType { standard = 'standard', io1 = 'io1', io2 = 'io2', gp2 = 'gp2', gp3 = 'gp3', sc1 = 'sc1', st1 = 'st1' }

	export enum ContainerRepositoryService { ECR = 'ECR' }

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface CreateDistributionConfigurationResponse {
		requestId?: string;
		clientToken?: string;
		distributionConfigurationArn?: string;
	}
	export interface CreateDistributionConfigurationResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		distributionConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDistributionConfigurationResponseFormGroup() {
		return new FormGroup<CreateDistributionConfigurationResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the settings for a specific Region. */
	export interface Distribution {

		/** Required */
		region: string;
		amiDistributionConfiguration?: AmiDistributionConfiguration;
		containerDistributionConfiguration?: ContainerDistributionConfiguration;
		licenseConfigurationArns?: Array<string>;
		launchTemplateConfigurations?: Array<LaunchTemplateConfiguration>;
		s3ExportConfiguration?: S3ExportConfiguration;
		fastLaunchConfigurations?: Array<FastLaunchConfiguration>;
	}

	/** Defines the settings for a specific Region. */
	export interface DistributionFormProperties {

		/** Required */
		region: FormControl<string | null | undefined>,
	}
	export function CreateDistributionFormGroup() {
		return new FormGroup<DistributionFormProperties>({
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Define and configure the output AMIs of the pipeline. */
	export interface AmiDistributionConfiguration {
		name?: string;
		description?: string;
		targetAccountIds?: Array<string>;
		amiTags?: TagMap;
		kmsKeyId?: string;
		launchPermission?: LaunchPermissionConfiguration;
	}

	/** Define and configure the output AMIs of the pipeline. */
	export interface AmiDistributionConfigurationFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateAmiDistributionConfigurationFormGroup() {
		return new FormGroup<AmiDistributionConfigurationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
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


	/** Describes the configuration for a launch permission. The launch permission modification request is sent to the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">Amazon EC2 ModifyImageAttribute</a> API on behalf of the user for each Region they have selected to distribute the AMI. To make an AMI public, set the launch permission authorized accounts to <code>all</code>. See the examples for making an AMI public at <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">Amazon EC2 ModifyImageAttribute</a>. */
	export interface LaunchPermissionConfiguration {
		userIds?: Array<string>;
		userGroups?: Array<string>;
		organizationArns?: Array<string>;
		organizationalUnitArns?: Array<string>;
	}

	/** Describes the configuration for a launch permission. The launch permission modification request is sent to the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">Amazon EC2 ModifyImageAttribute</a> API on behalf of the user for each Region they have selected to distribute the AMI. To make an AMI public, set the launch permission authorized accounts to <code>all</code>. See the examples for making an AMI public at <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">Amazon EC2 ModifyImageAttribute</a>. */
	export interface LaunchPermissionConfigurationFormProperties {
	}
	export function CreateLaunchPermissionConfigurationFormGroup() {
		return new FormGroup<LaunchPermissionConfigurationFormProperties>({
		});

	}


	/** Container distribution settings for encryption, licensing, and sharing in a specific Region. */
	export interface ContainerDistributionConfiguration {
		description?: string;
		containerTags?: Array<string>;

		/** Required */
		targetRepository: TargetContainerRepository;
	}

	/** Container distribution settings for encryption, licensing, and sharing in a specific Region. */
	export interface ContainerDistributionConfigurationFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateContainerDistributionConfigurationFormGroup() {
		return new FormGroup<ContainerDistributionConfigurationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The container repository where the output container image is stored. */
	export interface TargetContainerRepository {

		/** Required */
		service: ContainerRepositoryService;

		/** Required */
		repositoryName: string;
	}

	/** The container repository where the output container image is stored. */
	export interface TargetContainerRepositoryFormProperties {

		/** Required */
		service: FormControl<ContainerRepositoryService | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateTargetContainerRepositoryFormGroup() {
		return new FormGroup<TargetContainerRepositoryFormProperties>({
			service: new FormControl<ContainerRepositoryService | null | undefined>(undefined, [Validators.required]),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Identifies an Amazon EC2 launch template to use for a specific account. */
	export interface LaunchTemplateConfiguration {

		/** Required */
		launchTemplateId: string;
		accountId?: string;
		setDefaultVersion?: boolean | null;
	}

	/** Identifies an Amazon EC2 launch template to use for a specific account. */
	export interface LaunchTemplateConfigurationFormProperties {

		/** Required */
		launchTemplateId: FormControl<string | null | undefined>,
		accountId: FormControl<string | null | undefined>,
		setDefaultVersion: FormControl<boolean | null | undefined>,
	}
	export function CreateLaunchTemplateConfigurationFormGroup() {
		return new FormGroup<LaunchTemplateConfigurationFormProperties>({
			launchTemplateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			accountId: new FormControl<string | null | undefined>(undefined),
			setDefaultVersion: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Properties that configure export from your build instance to a compatible file format for your VM. */
	export interface S3ExportConfiguration {

		/** Required */
		roleName: string;

		/** Required */
		diskImageFormat: DiskImageFormat;

		/** Required */
		s3Bucket: string;
		s3Prefix?: string;
	}

	/** Properties that configure export from your build instance to a compatible file format for your VM. */
	export interface S3ExportConfigurationFormProperties {

		/** Required */
		roleName: FormControl<string | null | undefined>,

		/** Required */
		diskImageFormat: FormControl<DiskImageFormat | null | undefined>,

		/** Required */
		s3Bucket: FormControl<string | null | undefined>,
		s3Prefix: FormControl<string | null | undefined>,
	}
	export function CreateS3ExportConfigurationFormGroup() {
		return new FormGroup<S3ExportConfigurationFormProperties>({
			roleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			diskImageFormat: new FormControl<DiskImageFormat | null | undefined>(undefined, [Validators.required]),
			s3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			s3Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DiskImageFormat { VMDK = 'VMDK', RAW = 'RAW', VHD = 'VHD' }


	/** Define and configure faster launching for output Windows AMIs. */
	export interface FastLaunchConfiguration {

		/** Required */
		enabled: boolean;
		snapshotConfiguration?: FastLaunchSnapshotConfiguration;
		maxParallelLaunches?: number | null;
		launchTemplate?: FastLaunchLaunchTemplateSpecification;
		accountId?: string;
	}

	/** Define and configure faster launching for output Windows AMIs. */
	export interface FastLaunchConfigurationFormProperties {

		/** Required */
		enabled: FormControl<boolean | null | undefined>,
		maxParallelLaunches: FormControl<number | null | undefined>,
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateFastLaunchConfigurationFormGroup() {
		return new FormGroup<FastLaunchConfigurationFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			maxParallelLaunches: new FormControl<number | null | undefined>(undefined),
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration settings for creating and managing pre-provisioned snapshots for a fast-launch enabled Windows AMI. */
	export interface FastLaunchSnapshotConfiguration {
		targetResourceCount?: number | null;
	}

	/** Configuration settings for creating and managing pre-provisioned snapshots for a fast-launch enabled Windows AMI. */
	export interface FastLaunchSnapshotConfigurationFormProperties {
		targetResourceCount: FormControl<number | null | undefined>,
	}
	export function CreateFastLaunchSnapshotConfigurationFormGroup() {
		return new FormGroup<FastLaunchSnapshotConfigurationFormProperties>({
			targetResourceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Identifies the launch template that the associated Windows AMI uses for launching an instance when faster launching is enabled.</p> <note> <p>You can specify either the <code>launchTemplateName</code> or the <code>launchTemplateId</code>, but not both.</p> </note> */
	export interface FastLaunchLaunchTemplateSpecification {
		launchTemplateId?: string;
		launchTemplateName?: string;
		launchTemplateVersion?: string;
	}

	/** <p>Identifies the launch template that the associated Windows AMI uses for launching an instance when faster launching is enabled.</p> <note> <p>You can specify either the <code>launchTemplateName</code> or the <code>launchTemplateId</code>, but not both.</p> </note> */
	export interface FastLaunchLaunchTemplateSpecificationFormProperties {
		launchTemplateId: FormControl<string | null | undefined>,
		launchTemplateName: FormControl<string | null | undefined>,
		launchTemplateVersion: FormControl<string | null | undefined>,
	}
	export function CreateFastLaunchLaunchTemplateSpecificationFormGroup() {
		return new FormGroup<FastLaunchLaunchTemplateSpecificationFormProperties>({
			launchTemplateId: new FormControl<string | null | undefined>(undefined),
			launchTemplateName: new FormControl<string | null | undefined>(undefined),
			launchTemplateVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateImageResponse {
		requestId?: string;
		clientToken?: string;
		imageBuildVersionArn?: string;
	}
	export interface CreateImageResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		imageBuildVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateImageResponseFormGroup() {
		return new FormGroup<CreateImageResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			imageBuildVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings that Image Builder uses to configure the ECR repository and the output container images that Amazon Inspector scans. */
	export interface EcrConfiguration {
		repositoryName?: string;
		containerTags?: Array<string>;
	}

	/** Settings that Image Builder uses to configure the ECR repository and the output container images that Amazon Inspector scans. */
	export interface EcrConfigurationFormProperties {
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateEcrConfigurationFormGroup() {
		return new FormGroup<EcrConfigurationFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateImagePipelineResponse {
		requestId?: string;
		clientToken?: string;
		imagePipelineArn?: string;
	}
	export interface CreateImagePipelineResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		imagePipelineArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateImagePipelineResponseFormGroup() {
		return new FormGroup<CreateImagePipelineResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			imagePipelineArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PipelineExecutionStartCondition { EXPRESSION_MATCH_ONLY = 'EXPRESSION_MATCH_ONLY', EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE = 'EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE' }

	export interface CreateImageRecipeResponse {
		requestId?: string;
		clientToken?: string;
		imageRecipeArn?: string;
	}
	export interface CreateImageRecipeResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		imageRecipeArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateImageRecipeResponseFormGroup() {
		return new FormGroup<CreateImageRecipeResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			imageRecipeArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains settings for the Systems Manager agent on your build instance. */
	export interface SystemsManagerAgent {
		uninstallAfterBuild?: boolean | null;
	}

	/** Contains settings for the Systems Manager agent on your build instance. */
	export interface SystemsManagerAgentFormProperties {
		uninstallAfterBuild: FormControl<boolean | null | undefined>,
	}
	export function CreateSystemsManagerAgentFormGroup() {
		return new FormGroup<SystemsManagerAgentFormProperties>({
			uninstallAfterBuild: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateInfrastructureConfigurationResponse {
		requestId?: string;
		clientToken?: string;
		infrastructureConfigurationArn?: string;
	}
	export interface CreateInfrastructureConfigurationResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		infrastructureConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateInfrastructureConfigurationResponseFormGroup() {
		return new FormGroup<CreateInfrastructureConfigurationResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Amazon S3 logging configuration. */
	export interface S3Logs {
		s3BucketName?: string;
		s3KeyPrefix?: string;
	}

	/** Amazon S3 logging configuration. */
	export interface S3LogsFormProperties {
		s3BucketName: FormControl<string | null | undefined>,
		s3KeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateS3LogsFormGroup() {
		return new FormGroup<S3LogsFormProperties>({
			s3BucketName: new FormControl<string | null | undefined>(undefined),
			s3KeyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteComponentResponse {
		requestId?: string;
		componentBuildVersionArn?: string;
	}
	export interface DeleteComponentResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		componentBuildVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteComponentResponseFormGroup() {
		return new FormGroup<DeleteComponentResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			componentBuildVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceDependencyException {
	}
	export interface ResourceDependencyExceptionFormProperties {
	}
	export function CreateResourceDependencyExceptionFormGroup() {
		return new FormGroup<ResourceDependencyExceptionFormProperties>({
		});

	}

	export interface DeleteContainerRecipeResponse {
		requestId?: string;
		containerRecipeArn?: string;
	}
	export interface DeleteContainerRecipeResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		containerRecipeArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteContainerRecipeResponseFormGroup() {
		return new FormGroup<DeleteContainerRecipeResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			containerRecipeArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteDistributionConfigurationResponse {
		requestId?: string;
		distributionConfigurationArn?: string;
	}
	export interface DeleteDistributionConfigurationResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		distributionConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDistributionConfigurationResponseFormGroup() {
		return new FormGroup<DeleteDistributionConfigurationResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteImageResponse {
		requestId?: string;
		imageBuildVersionArn?: string;
	}
	export interface DeleteImageResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		imageBuildVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteImageResponseFormGroup() {
		return new FormGroup<DeleteImageResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			imageBuildVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteImagePipelineResponse {
		requestId?: string;
		imagePipelineArn?: string;
	}
	export interface DeleteImagePipelineResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		imagePipelineArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteImagePipelineResponseFormGroup() {
		return new FormGroup<DeleteImagePipelineResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			imagePipelineArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteImageRecipeResponse {
		requestId?: string;
		imageRecipeArn?: string;
	}
	export interface DeleteImageRecipeResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		imageRecipeArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteImageRecipeResponseFormGroup() {
		return new FormGroup<DeleteImageRecipeResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			imageRecipeArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteInfrastructureConfigurationResponse {
		requestId?: string;
		infrastructureConfigurationArn?: string;
	}
	export interface DeleteInfrastructureConfigurationResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		infrastructureConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteInfrastructureConfigurationResponseFormGroup() {
		return new FormGroup<DeleteInfrastructureConfigurationResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetComponentResponse {
		requestId?: string;
		component?: Component;
	}
	export interface GetComponentResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGetComponentResponseFormGroup() {
		return new FormGroup<GetComponentResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A detailed view of a component. */
	export interface Component {
		arn?: string;
		name?: string;
		version?: string;
		description?: string;
		changeDescription?: string;
		type?: ComponentType;
		platform?: Platform;
		supportedOsVersions?: Array<string>;
		state?: ComponentState;
		parameters?: Array<ComponentParameterDetail>;
		owner?: string;
		data?: string;
		kmsKeyId?: string;
		encrypted?: boolean | null;
		dateCreated?: string;
		tags?: TagMap;
		publisher?: string;
		obfuscate?: boolean | null;
	}

	/** A detailed view of a component. */
	export interface ComponentFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		changeDescription: FormControl<string | null | undefined>,
		type: FormControl<ComponentType | null | undefined>,
		platform: FormControl<Platform | null | undefined>,
		owner: FormControl<string | null | undefined>,
		data: FormControl<string | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
		encrypted: FormControl<boolean | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
		publisher: FormControl<string | null | undefined>,
		obfuscate: FormControl<boolean | null | undefined>,
	}
	export function CreateComponentFormGroup() {
		return new FormGroup<ComponentFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			changeDescription: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ComponentType | null | undefined>(undefined),
			platform: new FormControl<Platform | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			encrypted: new FormControl<boolean | null | undefined>(undefined),
			dateCreated: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			obfuscate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ComponentType { BUILD = 'BUILD', TEST = 'TEST' }

	export enum Platform { Windows = 'Windows', Linux = 'Linux' }


	/** A group of fields that describe the current status of components that are no longer active. */
	export interface ComponentState {
		status?: ComponentStatus;
		reason?: string;
	}

	/** A group of fields that describe the current status of components that are no longer active. */
	export interface ComponentStateFormProperties {
		status: FormControl<ComponentStatus | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateComponentStateFormGroup() {
		return new FormGroup<ComponentStateFormProperties>({
			status: new FormControl<ComponentStatus | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ComponentStatus { DEPRECATED = 'DEPRECATED' }


	/** Defines a parameter that is used to provide configuration details for the component. */
	export interface ComponentParameterDetail {

		/** Required */
		name: string;

		/** Required */
		type: string;
		defaultValue?: Array<string>;
		description?: string;
	}

	/** Defines a parameter that is used to provide configuration details for the component. */
	export interface ComponentParameterDetailFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateComponentParameterDetailFormGroup() {
		return new FormGroup<ComponentParameterDetailFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetComponentPolicyResponse {
		requestId?: string;
		policy?: string;
	}
	export interface GetComponentPolicyResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		policy: FormControl<string | null | undefined>,
	}
	export function CreateGetComponentPolicyResponseFormGroup() {
		return new FormGroup<GetComponentPolicyResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			policy: new FormControl<string | null | undefined>(undefined),
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

	export interface GetContainerRecipeResponse {
		requestId?: string;
		containerRecipe?: ContainerRecipe;
	}
	export interface GetContainerRecipeResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGetContainerRecipeResponseFormGroup() {
		return new FormGroup<GetContainerRecipeResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A container recipe. */
	export interface ContainerRecipe {
		arn?: string;
		containerType?: ContainerType;
		name?: string;
		description?: string;
		platform?: Platform;
		owner?: string;
		version?: string;
		components?: Array<ComponentConfiguration>;
		instanceConfiguration?: InstanceConfiguration;
		dockerfileTemplateData?: string;
		kmsKeyId?: string;
		encrypted?: boolean | null;
		parentImage?: string;
		dateCreated?: string;
		tags?: TagMap;
		workingDirectory?: string;
		targetRepository?: TargetContainerRepository;
	}

	/** A container recipe. */
	export interface ContainerRecipeFormProperties {
		arn: FormControl<string | null | undefined>,
		containerType: FormControl<ContainerType | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		platform: FormControl<Platform | null | undefined>,
		owner: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		dockerfileTemplateData: FormControl<string | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
		encrypted: FormControl<boolean | null | undefined>,
		parentImage: FormControl<string | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
		workingDirectory: FormControl<string | null | undefined>,
	}
	export function CreateContainerRecipeFormGroup() {
		return new FormGroup<ContainerRecipeFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			containerType: new FormControl<ContainerType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<Platform | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			dockerfileTemplateData: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			encrypted: new FormControl<boolean | null | undefined>(undefined),
			parentImage: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<string | null | undefined>(undefined),
			workingDirectory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContainerType { DOCKER = 'DOCKER' }


	/** Defines a custom base AMI and block device mapping configurations of an instance used for building and testing container images. */
	export interface InstanceConfiguration {
		image?: string;
		blockDeviceMappings?: Array<InstanceBlockDeviceMapping>;
	}

	/** Defines a custom base AMI and block device mapping configurations of an instance used for building and testing container images. */
	export interface InstanceConfigurationFormProperties {
		image: FormControl<string | null | undefined>,
	}
	export function CreateInstanceConfigurationFormGroup() {
		return new FormGroup<InstanceConfigurationFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetContainerRecipePolicyResponse {
		requestId?: string;
		policy?: string;
	}
	export interface GetContainerRecipePolicyResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		policy: FormControl<string | null | undefined>,
	}
	export function CreateGetContainerRecipePolicyResponseFormGroup() {
		return new FormGroup<GetContainerRecipePolicyResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDistributionConfigurationResponse {
		requestId?: string;
		distributionConfiguration?: DistributionConfiguration;
	}
	export interface GetDistributionConfigurationResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGetDistributionConfigurationResponseFormGroup() {
		return new FormGroup<GetDistributionConfigurationResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A distribution configuration. */
	export interface DistributionConfiguration {
		arn?: string;
		name?: string;
		description?: string;
		distributions?: Array<Distribution>;

		/** Required */
		timeoutMinutes: number;
		dateCreated?: string;
		dateUpdated?: string;
		tags?: TagMap;
	}

	/** A distribution configuration. */
	export interface DistributionConfigurationFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		timeoutMinutes: FormControl<number | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
		dateUpdated: FormControl<string | null | undefined>,
	}
	export function CreateDistributionConfigurationFormGroup() {
		return new FormGroup<DistributionConfigurationFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			timeoutMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dateCreated: new FormControl<string | null | undefined>(undefined),
			dateUpdated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetImageResponse {
		requestId?: string;
		image?: Image;
	}
	export interface GetImageResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGetImageResponseFormGroup() {
		return new FormGroup<GetImageResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Image Builder image. You must specify exactly one recipe for the image – either a container recipe (<code>containerRecipe</code>), which creates a container image, or an image recipe (<code>imageRecipe</code>), which creates an AMI. */
	export interface Image {
		arn?: string;
		type?: ImageType;
		name?: string;
		version?: string;
		platform?: Platform;
		enhancedImageMetadataEnabled?: boolean | null;
		osVersion?: string;
		state?: ImageState;
		imageRecipe?: ImageRecipe;
		containerRecipe?: ContainerRecipe;
		sourcePipelineName?: string;
		sourcePipelineArn?: string;
		infrastructureConfiguration?: InfrastructureConfiguration;
		distributionConfiguration?: DistributionConfiguration;
		imageTestsConfiguration?: ImageTestsConfiguration;
		dateCreated?: string;
		outputResources?: OutputResources;
		tags?: TagMap;
		buildType?: BuildType;
		imageSource?: ImageSource;
		scanState?: ImageScanState;
		imageScanningConfiguration?: ImageScanningConfiguration;
	}

	/** An Image Builder image. You must specify exactly one recipe for the image – either a container recipe (<code>containerRecipe</code>), which creates a container image, or an image recipe (<code>imageRecipe</code>), which creates an AMI. */
	export interface ImageFormProperties {
		arn: FormControl<string | null | undefined>,
		type: FormControl<ImageType | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		platform: FormControl<Platform | null | undefined>,
		enhancedImageMetadataEnabled: FormControl<boolean | null | undefined>,
		osVersion: FormControl<string | null | undefined>,
		sourcePipelineName: FormControl<string | null | undefined>,
		sourcePipelineArn: FormControl<string | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
		buildType: FormControl<BuildType | null | undefined>,
		imageSource: FormControl<ImageSource | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ImageType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<Platform | null | undefined>(undefined),
			enhancedImageMetadataEnabled: new FormControl<boolean | null | undefined>(undefined),
			osVersion: new FormControl<string | null | undefined>(undefined),
			sourcePipelineName: new FormControl<string | null | undefined>(undefined),
			sourcePipelineArn: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<string | null | undefined>(undefined),
			buildType: new FormControl<BuildType | null | undefined>(undefined),
			imageSource: new FormControl<ImageSource | null | undefined>(undefined),
		});

	}

	export enum ImageType { AMI = 'AMI', DOCKER = 'DOCKER' }


	/** Image status and the reason for that status. */
	export interface ImageState {
		status?: ImageStatus;
		reason?: string;
	}

	/** Image status and the reason for that status. */
	export interface ImageStateFormProperties {
		status: FormControl<ImageStatus | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateImageStateFormGroup() {
		return new FormGroup<ImageStateFormProperties>({
			status: new FormControl<ImageStatus | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImageStatus { PENDING = 'PENDING', CREATING = 'CREATING', BUILDING = 'BUILDING', TESTING = 'TESTING', DISTRIBUTING = 'DISTRIBUTING', INTEGRATING = 'INTEGRATING', AVAILABLE = 'AVAILABLE', CANCELLED = 'CANCELLED', FAILED = 'FAILED', DEPRECATED = 'DEPRECATED', DELETED = 'DELETED' }


	/** An image recipe. */
	export interface ImageRecipe {
		arn?: string;
		type?: ImageType;
		name?: string;
		description?: string;
		platform?: Platform;
		owner?: string;
		version?: string;
		components?: Array<ComponentConfiguration>;
		parentImage?: string;
		blockDeviceMappings?: Array<InstanceBlockDeviceMapping>;
		dateCreated?: string;
		tags?: TagMap;
		workingDirectory?: string;
		additionalInstanceConfiguration?: AdditionalInstanceConfiguration;
	}

	/** An image recipe. */
	export interface ImageRecipeFormProperties {
		arn: FormControl<string | null | undefined>,
		type: FormControl<ImageType | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		platform: FormControl<Platform | null | undefined>,
		owner: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		parentImage: FormControl<string | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
		workingDirectory: FormControl<string | null | undefined>,
	}
	export function CreateImageRecipeFormGroup() {
		return new FormGroup<ImageRecipeFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ImageType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<Platform | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			parentImage: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<string | null | undefined>(undefined),
			workingDirectory: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>In addition to your infrastructure configuration, these settings provide an extra layer of control over your build instances. You can also specify commands to run on launch for all of your build instances.</p> <p>Image Builder does not automatically install the Systems Manager agent on Windows instances. If your base image includes the Systems Manager agent, then the AMI that you create will also include the agent. For Linux instances, if the base image does not already include the Systems Manager agent, Image Builder installs it. For Linux instances where Image Builder installs the Systems Manager agent, you can choose whether to keep it for the AMI that you create.</p> */
	export interface AdditionalInstanceConfiguration {
		systemsManagerAgent?: SystemsManagerAgent;
		userDataOverride?: string;
	}

	/** <p>In addition to your infrastructure configuration, these settings provide an extra layer of control over your build instances. You can also specify commands to run on launch for all of your build instances.</p> <p>Image Builder does not automatically install the Systems Manager agent on Windows instances. If your base image includes the Systems Manager agent, then the AMI that you create will also include the agent. For Linux instances, if the base image does not already include the Systems Manager agent, Image Builder installs it. For Linux instances where Image Builder installs the Systems Manager agent, you can choose whether to keep it for the AMI that you create.</p> */
	export interface AdditionalInstanceConfigurationFormProperties {
		userDataOverride: FormControl<string | null | undefined>,
	}
	export function CreateAdditionalInstanceConfigurationFormGroup() {
		return new FormGroup<AdditionalInstanceConfigurationFormProperties>({
			userDataOverride: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of the infrastructure configuration. */
	export interface InfrastructureConfiguration {
		arn?: string;
		name?: string;
		description?: string;
		instanceTypes?: Array<string>;
		instanceProfileName?: string;
		securityGroupIds?: Array<string>;
		subnetId?: string;
		logging?: Logging;
		keyPair?: string;
		terminateInstanceOnFailure?: boolean | null;
		snsTopicArn?: string;
		dateCreated?: string;
		dateUpdated?: string;
		resourceTags?: ResourceTagMap;
		instanceMetadataOptions?: InstanceMetadataOptions;
		tags?: TagMap;
	}

	/** Details of the infrastructure configuration. */
	export interface InfrastructureConfigurationFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		instanceProfileName: FormControl<string | null | undefined>,
		subnetId: FormControl<string | null | undefined>,
		keyPair: FormControl<string | null | undefined>,
		terminateInstanceOnFailure: FormControl<boolean | null | undefined>,
		snsTopicArn: FormControl<string | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
		dateUpdated: FormControl<string | null | undefined>,
	}
	export function CreateInfrastructureConfigurationFormGroup() {
		return new FormGroup<InfrastructureConfigurationFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			instanceProfileName: new FormControl<string | null | undefined>(undefined),
			subnetId: new FormControl<string | null | undefined>(undefined),
			keyPair: new FormControl<string | null | undefined>(undefined),
			terminateInstanceOnFailure: new FormControl<boolean | null | undefined>(undefined),
			snsTopicArn: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<string | null | undefined>(undefined),
			dateUpdated: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Logging configuration defines where Image Builder uploads your logs. */
	export interface Logging {
		s3Logs?: S3Logs;
	}

	/** Logging configuration defines where Image Builder uploads your logs. */
	export interface LoggingFormProperties {
	}
	export function CreateLoggingFormGroup() {
		return new FormGroup<LoggingFormProperties>({
		});

	}

	export interface ResourceTagMap {
	}
	export interface ResourceTagMapFormProperties {
	}
	export function CreateResourceTagMapFormGroup() {
		return new FormGroup<ResourceTagMapFormProperties>({
		});

	}


	/** The instance metadata options that apply to the HTTP requests that pipeline builds use to launch EC2 build and test instances. For more information about instance metadata options, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 User Guide</i> </i> for Linux instances, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i> for Windows instances. */
	export interface InstanceMetadataOptions {
		httpTokens?: string;
		httpPutResponseHopLimit?: number | null;
	}

	/** The instance metadata options that apply to the HTTP requests that pipeline builds use to launch EC2 build and test instances. For more information about instance metadata options, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 User Guide</i> </i> for Linux instances, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i> for Windows instances. */
	export interface InstanceMetadataOptionsFormProperties {
		httpTokens: FormControl<string | null | undefined>,
		httpPutResponseHopLimit: FormControl<number | null | undefined>,
	}
	export function CreateInstanceMetadataOptionsFormGroup() {
		return new FormGroup<InstanceMetadataOptionsFormProperties>({
			httpTokens: new FormControl<string | null | undefined>(undefined),
			httpPutResponseHopLimit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it. */
	export interface ImageTestsConfiguration {
		imageTestsEnabled?: boolean | null;
		timeoutMinutes?: number | null;
	}

	/** Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it. */
	export interface ImageTestsConfigurationFormProperties {
		imageTestsEnabled: FormControl<boolean | null | undefined>,
		timeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateImageTestsConfigurationFormGroup() {
		return new FormGroup<ImageTestsConfigurationFormProperties>({
			imageTestsEnabled: new FormControl<boolean | null | undefined>(undefined),
			timeoutMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The resources produced by this image. */
	export interface OutputResources {
		amis?: Array<Ami>;
		containers?: Array<Container>;
	}

	/** The resources produced by this image. */
	export interface OutputResourcesFormProperties {
	}
	export function CreateOutputResourcesFormGroup() {
		return new FormGroup<OutputResourcesFormProperties>({
		});

	}


	/** Details of an Amazon EC2 AMI. */
	export interface Ami {
		region?: string;
		image?: string;
		name?: string;
		description?: string;

		/** Image status and the reason for that status. */
		state?: ImageState;
		accountId?: string;
	}

	/** Details of an Amazon EC2 AMI. */
	export interface AmiFormProperties {
		region: FormControl<string | null | undefined>,
		image: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateAmiFormGroup() {
		return new FormGroup<AmiFormProperties>({
			region: new FormControl<string | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A container encapsulates the runtime environment for an application. */
	export interface Container {
		region?: string;
		imageUris?: Array<string>;
	}

	/** A container encapsulates the runtime environment for an application. */
	export interface ContainerFormProperties {
		region: FormControl<string | null | undefined>,
	}
	export function CreateContainerFormGroup() {
		return new FormGroup<ContainerFormProperties>({
			region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BuildType { USER_INITIATED = 'USER_INITIATED', SCHEDULED = 'SCHEDULED', IMPORT = 'IMPORT' }

	export enum ImageSource { AMAZON_MANAGED = 'AMAZON_MANAGED', AWS_MARKETPLACE = 'AWS_MARKETPLACE', IMPORTED = 'IMPORTED', CUSTOM = 'CUSTOM' }


	/** Shows the vulnerability scan status for a specific image, and the reason for that status. */
	export interface ImageScanState {
		status?: ImageScanStatus;
		reason?: string;
	}

	/** Shows the vulnerability scan status for a specific image, and the reason for that status. */
	export interface ImageScanStateFormProperties {
		status: FormControl<ImageScanStatus | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateImageScanStateFormGroup() {
		return new FormGroup<ImageScanStateFormProperties>({
			status: new FormControl<ImageScanStatus | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImageScanStatus { PENDING = 'PENDING', SCANNING = 'SCANNING', COLLECTING = 'COLLECTING', COMPLETED = 'COMPLETED', ABANDONED = 'ABANDONED', FAILED = 'FAILED', TIMED_OUT = 'TIMED_OUT' }


	/** Contains settings for Image Builder image resource and container image scans. */
	export interface ImageScanningConfiguration {
		imageScanningEnabled?: boolean | null;
		ecrConfiguration?: EcrConfiguration;
	}

	/** Contains settings for Image Builder image resource and container image scans. */
	export interface ImageScanningConfigurationFormProperties {
		imageScanningEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateImageScanningConfigurationFormGroup() {
		return new FormGroup<ImageScanningConfigurationFormProperties>({
			imageScanningEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetImagePipelineResponse {
		requestId?: string;
		imagePipeline?: ImagePipeline;
	}
	export interface GetImagePipelineResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGetImagePipelineResponseFormGroup() {
		return new FormGroup<GetImagePipelineResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of an image pipeline. */
	export interface ImagePipeline {
		arn?: string;
		name?: string;
		description?: string;
		platform?: Platform;
		enhancedImageMetadataEnabled?: boolean | null;
		imageRecipeArn?: string;
		containerRecipeArn?: string;
		infrastructureConfigurationArn?: string;
		distributionConfigurationArn?: string;
		imageTestsConfiguration?: ImageTestsConfiguration;
		schedule?: Schedule;
		status?: PipelineStatus;
		dateCreated?: string;
		dateUpdated?: string;
		dateLastRun?: string;
		dateNextRun?: string;
		tags?: TagMap;
		imageScanningConfiguration?: ImageScanningConfiguration;
	}

	/** Details of an image pipeline. */
	export interface ImagePipelineFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		platform: FormControl<Platform | null | undefined>,
		enhancedImageMetadataEnabled: FormControl<boolean | null | undefined>,
		imageRecipeArn: FormControl<string | null | undefined>,
		containerRecipeArn: FormControl<string | null | undefined>,
		infrastructureConfigurationArn: FormControl<string | null | undefined>,
		distributionConfigurationArn: FormControl<string | null | undefined>,
		status: FormControl<PipelineStatus | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
		dateUpdated: FormControl<string | null | undefined>,
		dateLastRun: FormControl<string | null | undefined>,
		dateNextRun: FormControl<string | null | undefined>,
	}
	export function CreateImagePipelineFormGroup() {
		return new FormGroup<ImagePipelineFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<Platform | null | undefined>(undefined),
			enhancedImageMetadataEnabled: new FormControl<boolean | null | undefined>(undefined),
			imageRecipeArn: new FormControl<string | null | undefined>(undefined),
			containerRecipeArn: new FormControl<string | null | undefined>(undefined),
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined),
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PipelineStatus | null | undefined>(undefined),
			dateCreated: new FormControl<string | null | undefined>(undefined),
			dateUpdated: new FormControl<string | null | undefined>(undefined),
			dateLastRun: new FormControl<string | null | undefined>(undefined),
			dateNextRun: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A schedule configures how often and when a pipeline will automatically create a new image. */
	export interface Schedule {
		scheduleExpression?: string;
		timezone?: string;
		pipelineExecutionStartCondition?: PipelineExecutionStartCondition;
	}

	/** A schedule configures how often and when a pipeline will automatically create a new image. */
	export interface ScheduleFormProperties {
		scheduleExpression: FormControl<string | null | undefined>,
		timezone: FormControl<string | null | undefined>,
		pipelineExecutionStartCondition: FormControl<PipelineExecutionStartCondition | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			scheduleExpression: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			pipelineExecutionStartCondition: new FormControl<PipelineExecutionStartCondition | null | undefined>(undefined),
		});

	}

	export enum PipelineStatus { DISABLED = 'DISABLED', ENABLED = 'ENABLED' }

	export interface GetImagePolicyResponse {
		requestId?: string;
		policy?: string;
	}
	export interface GetImagePolicyResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		policy: FormControl<string | null | undefined>,
	}
	export function CreateGetImagePolicyResponseFormGroup() {
		return new FormGroup<GetImagePolicyResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetImageRecipeResponse {
		requestId?: string;
		imageRecipe?: ImageRecipe;
	}
	export interface GetImageRecipeResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGetImageRecipeResponseFormGroup() {
		return new FormGroup<GetImageRecipeResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetImageRecipePolicyResponse {
		requestId?: string;
		policy?: string;
	}
	export interface GetImageRecipePolicyResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		policy: FormControl<string | null | undefined>,
	}
	export function CreateGetImageRecipePolicyResponseFormGroup() {
		return new FormGroup<GetImageRecipePolicyResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			policy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** GetInfrastructureConfiguration response object. */
	export interface GetInfrastructureConfigurationResponse {
		requestId?: string;
		infrastructureConfiguration?: InfrastructureConfiguration;
	}

	/** GetInfrastructureConfiguration response object. */
	export interface GetInfrastructureConfigurationResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGetInfrastructureConfigurationResponseFormGroup() {
		return new FormGroup<GetInfrastructureConfigurationResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetWorkflowExecutionResponse {
		requestId?: string;
		workflowBuildVersionArn?: string;
		workflowExecutionId?: string;
		imageBuildVersionArn?: string;
		type?: WorkflowType;
		status?: WorkflowExecutionStatus;
		message?: string;
		totalStepCount?: number | null;
		totalStepsSucceeded?: number | null;
		totalStepsFailed?: number | null;
		totalStepsSkipped?: number | null;
		startTime?: string;
		endTime?: string;
	}
	export interface GetWorkflowExecutionResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		workflowBuildVersionArn: FormControl<string | null | undefined>,
		workflowExecutionId: FormControl<string | null | undefined>,
		imageBuildVersionArn: FormControl<string | null | undefined>,
		type: FormControl<WorkflowType | null | undefined>,
		status: FormControl<WorkflowExecutionStatus | null | undefined>,
		message: FormControl<string | null | undefined>,
		totalStepCount: FormControl<number | null | undefined>,
		totalStepsSucceeded: FormControl<number | null | undefined>,
		totalStepsFailed: FormControl<number | null | undefined>,
		totalStepsSkipped: FormControl<number | null | undefined>,
		startTime: FormControl<string | null | undefined>,
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGetWorkflowExecutionResponseFormGroup() {
		return new FormGroup<GetWorkflowExecutionResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			workflowBuildVersionArn: new FormControl<string | null | undefined>(undefined),
			workflowExecutionId: new FormControl<string | null | undefined>(undefined),
			imageBuildVersionArn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<WorkflowType | null | undefined>(undefined),
			status: new FormControl<WorkflowExecutionStatus | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			totalStepCount: new FormControl<number | null | undefined>(undefined),
			totalStepsSucceeded: new FormControl<number | null | undefined>(undefined),
			totalStepsFailed: new FormControl<number | null | undefined>(undefined),
			totalStepsSkipped: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WorkflowType { BUILD = 'BUILD', TEST = 'TEST', DISTRIBUTION = 'DISTRIBUTION' }

	export enum WorkflowExecutionStatus { PENDING = 'PENDING', SKIPPED = 'SKIPPED', RUNNING = 'RUNNING', COMPLETED = 'COMPLETED', FAILED = 'FAILED', ROLLBACK_IN_PROGRESS = 'ROLLBACK_IN_PROGRESS', ROLLBACK_COMPLETED = 'ROLLBACK_COMPLETED' }

	export interface GetWorkflowStepExecutionResponse {
		requestId?: string;
		stepExecutionId?: string;
		workflowBuildVersionArn?: string;
		workflowExecutionId?: string;
		imageBuildVersionArn?: string;
		name?: string;
		description?: string;
		action?: string;
		status?: WorkflowStepExecutionStatus;
		rollbackStatus?: WorkflowStepExecutionRollbackStatus;
		message?: string;
		inputs?: string;
		outputs?: string;
		startTime?: string;
		endTime?: string;
		onFailure?: string;
		timeoutSeconds?: number | null;
	}
	export interface GetWorkflowStepExecutionResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		stepExecutionId: FormControl<string | null | undefined>,
		workflowBuildVersionArn: FormControl<string | null | undefined>,
		workflowExecutionId: FormControl<string | null | undefined>,
		imageBuildVersionArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		action: FormControl<string | null | undefined>,
		status: FormControl<WorkflowStepExecutionStatus | null | undefined>,
		rollbackStatus: FormControl<WorkflowStepExecutionRollbackStatus | null | undefined>,
		message: FormControl<string | null | undefined>,
		inputs: FormControl<string | null | undefined>,
		outputs: FormControl<string | null | undefined>,
		startTime: FormControl<string | null | undefined>,
		endTime: FormControl<string | null | undefined>,
		onFailure: FormControl<string | null | undefined>,
		timeoutSeconds: FormControl<number | null | undefined>,
	}
	export function CreateGetWorkflowStepExecutionResponseFormGroup() {
		return new FormGroup<GetWorkflowStepExecutionResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			stepExecutionId: new FormControl<string | null | undefined>(undefined),
			workflowBuildVersionArn: new FormControl<string | null | undefined>(undefined),
			workflowExecutionId: new FormControl<string | null | undefined>(undefined),
			imageBuildVersionArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			action: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<WorkflowStepExecutionStatus | null | undefined>(undefined),
			rollbackStatus: new FormControl<WorkflowStepExecutionRollbackStatus | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			inputs: new FormControl<string | null | undefined>(undefined),
			outputs: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			onFailure: new FormControl<string | null | undefined>(undefined),
			timeoutSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum WorkflowStepExecutionStatus { PENDING = 'PENDING', SKIPPED = 'SKIPPED', RUNNING = 'RUNNING', COMPLETED = 'COMPLETED', FAILED = 'FAILED' }

	export enum WorkflowStepExecutionRollbackStatus { RUNNING = 'RUNNING', COMPLETED = 'COMPLETED', SKIPPED = 'SKIPPED', FAILED = 'FAILED' }

	export interface ImportComponentResponse {
		requestId?: string;
		clientToken?: string;
		componentBuildVersionArn?: string;
	}
	export interface ImportComponentResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		componentBuildVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateImportComponentResponseFormGroup() {
		return new FormGroup<ImportComponentResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			componentBuildVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportVmImageResponse {
		requestId?: string;
		imageArn?: string;
		clientToken?: string;
	}
	export interface ImportVmImageResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		imageArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateImportVmImageResponseFormGroup() {
		return new FormGroup<ImportVmImageResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			imageArn: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListComponentBuildVersionsResponse {
		requestId?: string;
		componentSummaryList?: Array<ComponentSummary>;
		nextToken?: string;
	}
	export interface ListComponentBuildVersionsResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentBuildVersionsResponseFormGroup() {
		return new FormGroup<ListComponentBuildVersionsResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A high-level summary of a component. */
	export interface ComponentSummary {
		arn?: string;
		name?: string;
		version?: string;
		platform?: Platform;
		supportedOsVersions?: Array<string>;
		state?: ComponentState;
		type?: ComponentType;
		owner?: string;
		description?: string;
		changeDescription?: string;
		dateCreated?: string;
		tags?: TagMap;
		publisher?: string;
		obfuscate?: boolean | null;
	}

	/** A high-level summary of a component. */
	export interface ComponentSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		platform: FormControl<Platform | null | undefined>,
		type: FormControl<ComponentType | null | undefined>,
		owner: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		changeDescription: FormControl<string | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
		publisher: FormControl<string | null | undefined>,
		obfuscate: FormControl<boolean | null | undefined>,
	}
	export function CreateComponentSummaryFormGroup() {
		return new FormGroup<ComponentSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<Platform | null | undefined>(undefined),
			type: new FormControl<ComponentType | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			changeDescription: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			obfuscate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface InvalidPaginationTokenException {
	}
	export interface InvalidPaginationTokenExceptionFormProperties {
	}
	export function CreateInvalidPaginationTokenExceptionFormGroup() {
		return new FormGroup<InvalidPaginationTokenExceptionFormProperties>({
		});

	}

	export interface ListComponentsResponse {
		requestId?: string;
		componentVersionList?: Array<ComponentVersion>;
		nextToken?: string;
	}
	export interface ListComponentsResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentsResponseFormGroup() {
		return new FormGroup<ListComponentsResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The defining characteristics of a specific version of an Amazon Web Services TOE component. */
	export interface ComponentVersion {
		arn?: string;
		name?: string;
		version?: string;
		description?: string;
		platform?: Platform;
		supportedOsVersions?: Array<string>;
		type?: ComponentType;
		owner?: string;
		dateCreated?: string;
	}

	/** The defining characteristics of a specific version of an Amazon Web Services TOE component. */
	export interface ComponentVersionFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		platform: FormControl<Platform | null | undefined>,
		type: FormControl<ComponentType | null | undefined>,
		owner: FormControl<string | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
	}
	export function CreateComponentVersionFormGroup() {
		return new FormGroup<ComponentVersionFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<Platform | null | undefined>(undefined),
			type: new FormControl<ComponentType | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter name and value pair that is used to return a more specific list of results from a list operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs. */
	export interface Filter {
		name?: string;
		values?: Array<string>;
	}

	/** A filter name and value pair that is used to return a more specific list of results from a list operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs. */
	export interface FilterFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListContainerRecipesResponse {
		requestId?: string;
		containerRecipeSummaryList?: Array<ContainerRecipeSummary>;
		nextToken?: string;
	}
	export interface ListContainerRecipesResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListContainerRecipesResponseFormGroup() {
		return new FormGroup<ListContainerRecipesResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of a container recipe */
	export interface ContainerRecipeSummary {
		arn?: string;
		containerType?: ContainerType;
		name?: string;
		platform?: Platform;
		owner?: string;
		parentImage?: string;
		dateCreated?: string;
		tags?: TagMap;
	}

	/** A summary of a container recipe */
	export interface ContainerRecipeSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		containerType: FormControl<ContainerType | null | undefined>,
		name: FormControl<string | null | undefined>,
		platform: FormControl<Platform | null | undefined>,
		owner: FormControl<string | null | undefined>,
		parentImage: FormControl<string | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
	}
	export function CreateContainerRecipeSummaryFormGroup() {
		return new FormGroup<ContainerRecipeSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			containerType: new FormControl<ContainerType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<Platform | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			parentImage: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDistributionConfigurationsResponse {
		requestId?: string;
		distributionConfigurationSummaryList?: Array<DistributionConfigurationSummary>;
		nextToken?: string;
	}
	export interface ListDistributionConfigurationsResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDistributionConfigurationsResponseFormGroup() {
		return new FormGroup<ListDistributionConfigurationsResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A high-level overview of a distribution configuration. */
	export interface DistributionConfigurationSummary {
		arn?: string;
		name?: string;
		description?: string;
		dateCreated?: string;
		dateUpdated?: string;
		tags?: TagMap;
		regions?: Array<string>;
	}

	/** A high-level overview of a distribution configuration. */
	export interface DistributionConfigurationSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
		dateUpdated: FormControl<string | null | undefined>,
	}
	export function CreateDistributionConfigurationSummaryFormGroup() {
		return new FormGroup<DistributionConfigurationSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<string | null | undefined>(undefined),
			dateUpdated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImageBuildVersionsResponse {
		requestId?: string;
		imageSummaryList?: Array<ImageSummary>;
		nextToken?: string;
	}
	export interface ListImageBuildVersionsResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImageBuildVersionsResponseFormGroup() {
		return new FormGroup<ListImageBuildVersionsResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An image summary. */
	export interface ImageSummary {
		arn?: string;
		name?: string;
		type?: ImageType;
		version?: string;
		platform?: Platform;
		osVersion?: string;
		state?: ImageState;
		owner?: string;
		dateCreated?: string;
		outputResources?: OutputResources;
		tags?: TagMap;
		buildType?: BuildType;
		imageSource?: ImageSource;
	}

	/** An image summary. */
	export interface ImageSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<ImageType | null | undefined>,
		version: FormControl<string | null | undefined>,
		platform: FormControl<Platform | null | undefined>,
		osVersion: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
		buildType: FormControl<BuildType | null | undefined>,
		imageSource: FormControl<ImageSource | null | undefined>,
	}
	export function CreateImageSummaryFormGroup() {
		return new FormGroup<ImageSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ImageType | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<Platform | null | undefined>(undefined),
			osVersion: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<string | null | undefined>(undefined),
			buildType: new FormControl<BuildType | null | undefined>(undefined),
			imageSource: new FormControl<ImageSource | null | undefined>(undefined),
		});

	}

	export interface ListImagePackagesResponse {
		requestId?: string;
		imagePackageList?: Array<ImagePackage>;
		nextToken?: string;
	}
	export interface ListImagePackagesResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImagePackagesResponseFormGroup() {
		return new FormGroup<ListImagePackagesResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a package installed on an Image Builder image. */
	export interface ImagePackage {
		packageName?: string;
		packageVersion?: string;
	}

	/** Represents a package installed on an Image Builder image. */
	export interface ImagePackageFormProperties {
		packageName: FormControl<string | null | undefined>,
		packageVersion: FormControl<string | null | undefined>,
	}
	export function CreateImagePackageFormGroup() {
		return new FormGroup<ImagePackageFormProperties>({
			packageName: new FormControl<string | null | undefined>(undefined),
			packageVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImagePipelineImagesResponse {
		requestId?: string;
		imageSummaryList?: Array<ImageSummary>;
		nextToken?: string;
	}
	export interface ListImagePipelineImagesResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImagePipelineImagesResponseFormGroup() {
		return new FormGroup<ListImagePipelineImagesResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImagePipelinesResponse {
		requestId?: string;
		imagePipelineList?: Array<ImagePipeline>;
		nextToken?: string;
	}
	export interface ListImagePipelinesResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImagePipelinesResponseFormGroup() {
		return new FormGroup<ListImagePipelinesResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImageRecipesResponse {
		requestId?: string;
		imageRecipeSummaryList?: Array<ImageRecipeSummary>;
		nextToken?: string;
	}
	export interface ListImageRecipesResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImageRecipesResponseFormGroup() {
		return new FormGroup<ListImageRecipesResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of an image recipe. */
	export interface ImageRecipeSummary {
		arn?: string;
		name?: string;
		platform?: Platform;
		owner?: string;
		parentImage?: string;
		dateCreated?: string;
		tags?: TagMap;
	}

	/** A summary of an image recipe. */
	export interface ImageRecipeSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		platform: FormControl<Platform | null | undefined>,
		owner: FormControl<string | null | undefined>,
		parentImage: FormControl<string | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
	}
	export function CreateImageRecipeSummaryFormGroup() {
		return new FormGroup<ImageRecipeSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<Platform | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			parentImage: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImageScanFindingAggregationsResponse {
		requestId?: string;
		aggregationType?: string;
		responses?: Array<ImageScanFindingAggregation>;
		nextToken?: string;
	}
	export interface ListImageScanFindingAggregationsResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		aggregationType: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImageScanFindingAggregationsResponseFormGroup() {
		return new FormGroup<ListImageScanFindingAggregationsResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			aggregationType: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This returns exactly one type of aggregation, based on the filter that Image Builder applies in its API action. */
	export interface ImageScanFindingAggregation {
		accountAggregation?: AccountAggregation;
		imageAggregation?: ImageAggregation;
		imagePipelineAggregation?: ImagePipelineAggregation;
		vulnerabilityIdAggregation?: VulnerabilityIdAggregation;
	}

	/** This returns exactly one type of aggregation, based on the filter that Image Builder applies in its API action. */
	export interface ImageScanFindingAggregationFormProperties {
	}
	export function CreateImageScanFindingAggregationFormGroup() {
		return new FormGroup<ImageScanFindingAggregationFormProperties>({
		});

	}


	/** Contains counts of vulnerability findings from image scans that run when you create new Image Builder images, or build new versions of existing images. The vulnerability counts are grouped by severity level. The counts are aggregated across resources to create the final tally for the account that owns them. */
	export interface AccountAggregation {
		accountId?: string;
		severityCounts?: SeverityCounts;
	}

	/** Contains counts of vulnerability findings from image scans that run when you create new Image Builder images, or build new versions of existing images. The vulnerability counts are grouped by severity level. The counts are aggregated across resources to create the final tally for the account that owns them. */
	export interface AccountAggregationFormProperties {
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateAccountAggregationFormGroup() {
		return new FormGroup<AccountAggregationFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Includes counts by severity level for medium severity and higher level findings, plus a total for all of the findings for the specified filter. */
	export interface SeverityCounts {
		all?: number | null;
		critical?: number | null;
		high?: number | null;
		medium?: number | null;
	}

	/** Includes counts by severity level for medium severity and higher level findings, plus a total for all of the findings for the specified filter. */
	export interface SeverityCountsFormProperties {
		all: FormControl<number | null | undefined>,
		critical: FormControl<number | null | undefined>,
		high: FormControl<number | null | undefined>,
		medium: FormControl<number | null | undefined>,
	}
	export function CreateSeverityCountsFormGroup() {
		return new FormGroup<SeverityCountsFormProperties>({
			all: new FormControl<number | null | undefined>(undefined),
			critical: new FormControl<number | null | undefined>(undefined),
			high: new FormControl<number | null | undefined>(undefined),
			medium: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains vulnerability counts for a specific image. */
	export interface ImageAggregation {
		imageBuildVersionArn?: string;
		severityCounts?: SeverityCounts;
	}

	/** Contains vulnerability counts for a specific image. */
	export interface ImageAggregationFormProperties {
		imageBuildVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateImageAggregationFormGroup() {
		return new FormGroup<ImageAggregationFormProperties>({
			imageBuildVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains vulnerability counts for a specific image pipeline. */
	export interface ImagePipelineAggregation {
		imagePipelineArn?: string;
		severityCounts?: SeverityCounts;
	}

	/** Contains vulnerability counts for a specific image pipeline. */
	export interface ImagePipelineAggregationFormProperties {
		imagePipelineArn: FormControl<string | null | undefined>,
	}
	export function CreateImagePipelineAggregationFormGroup() {
		return new FormGroup<ImagePipelineAggregationFormProperties>({
			imagePipelineArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Includes counts of image and pipeline resource findings by vulnerability. */
	export interface VulnerabilityIdAggregation {
		vulnerabilityId?: string;
		severityCounts?: SeverityCounts;
	}

	/** Includes counts of image and pipeline resource findings by vulnerability. */
	export interface VulnerabilityIdAggregationFormProperties {
		vulnerabilityId: FormControl<string | null | undefined>,
	}
	export function CreateVulnerabilityIdAggregationFormGroup() {
		return new FormGroup<VulnerabilityIdAggregationFormProperties>({
			vulnerabilityId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImageScanFindingsResponse {
		requestId?: string;
		findings?: Array<ImageScanFinding>;
		nextToken?: string;
	}
	export interface ListImageScanFindingsResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImageScanFindingsResponseFormGroup() {
		return new FormGroup<ListImageScanFindingsResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about a vulnerability scan finding. */
	export interface ImageScanFinding {
		awsAccountId?: string;
		imageBuildVersionArn?: string;
		imagePipelineArn?: string;
		type?: string;
		description?: string;
		title?: string;
		remediation?: Remediation;
		severity?: string;
		firstObservedAt?: Date;
		updatedAt?: Date;
		inspectorScore?: number | null;
		inspectorScoreDetails?: InspectorScoreDetails;
		packageVulnerabilityDetails?: PackageVulnerabilityDetails;
		fixAvailable?: string;
	}

	/** Contains details about a vulnerability scan finding. */
	export interface ImageScanFindingFormProperties {
		awsAccountId: FormControl<string | null | undefined>,
		imageBuildVersionArn: FormControl<string | null | undefined>,
		imagePipelineArn: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		severity: FormControl<string | null | undefined>,
		firstObservedAt: FormControl<Date | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
		inspectorScore: FormControl<number | null | undefined>,
		fixAvailable: FormControl<string | null | undefined>,
	}
	export function CreateImageScanFindingFormGroup() {
		return new FormGroup<ImageScanFindingFormProperties>({
			awsAccountId: new FormControl<string | null | undefined>(undefined),
			imageBuildVersionArn: new FormControl<string | null | undefined>(undefined),
			imagePipelineArn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
			firstObservedAt: new FormControl<Date | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			inspectorScore: new FormControl<number | null | undefined>(undefined),
			fixAvailable: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about how to remediate a finding. */
	export interface Remediation {
		recommendation?: RemediationRecommendation;
	}

	/** Information about how to remediate a finding. */
	export interface RemediationFormProperties {
	}
	export function CreateRemediationFormGroup() {
		return new FormGroup<RemediationFormProperties>({
		});

	}


	/** Details about the recommended course of action to remediate the finding. */
	export interface RemediationRecommendation {
		text?: string;
		url?: string;
	}

	/** Details about the recommended course of action to remediate the finding. */
	export interface RemediationRecommendationFormProperties {
		text: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateRemediationRecommendationFormGroup() {
		return new FormGroup<RemediationRecommendationFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the factors that influenced the score that Amazon Inspector assigned for a finding. */
	export interface InspectorScoreDetails {
		adjustedCvss?: CvssScoreDetails;
	}

	/** Information about the factors that influenced the score that Amazon Inspector assigned for a finding. */
	export interface InspectorScoreDetailsFormProperties {
	}
	export function CreateInspectorScoreDetailsFormGroup() {
		return new FormGroup<InspectorScoreDetailsFormProperties>({
		});

	}


	/** Details about the source of the score, and the factors that determined the adjustments to create the final score. */
	export interface CvssScoreDetails {
		scoreSource?: string;
		cvssSource?: string;
		version?: string;
		score?: number | null;
		scoringVector?: string;
		adjustments?: Array<CvssScoreAdjustment>;
	}

	/** Details about the source of the score, and the factors that determined the adjustments to create the final score. */
	export interface CvssScoreDetailsFormProperties {
		scoreSource: FormControl<string | null | undefined>,
		cvssSource: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		score: FormControl<number | null | undefined>,
		scoringVector: FormControl<string | null | undefined>,
	}
	export function CreateCvssScoreDetailsFormGroup() {
		return new FormGroup<CvssScoreDetailsFormProperties>({
			scoreSource: new FormControl<string | null | undefined>(undefined),
			cvssSource: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			scoringVector: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about an adjustment that Amazon Inspector made to the CVSS score for a finding. */
	export interface CvssScoreAdjustment {
		metric?: string;
		reason?: string;
	}

	/** Details about an adjustment that Amazon Inspector made to the CVSS score for a finding. */
	export interface CvssScoreAdjustmentFormProperties {
		metric: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateCvssScoreAdjustmentFormGroup() {
		return new FormGroup<CvssScoreAdjustmentFormProperties>({
			metric: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about package vulnerability findings. */
	export interface PackageVulnerabilityDetails {

		/** Required */
		vulnerabilityId: string;
		vulnerablePackages?: Array<VulnerablePackage>;
		source?: string;
		cvss?: Array<CvssScore>;
		relatedVulnerabilities?: Array<string>;
		sourceUrl?: string;
		vendorSeverity?: string;
		vendorCreatedAt?: Date;
		vendorUpdatedAt?: Date;
		referenceUrls?: Array<string>;
	}

	/** Information about package vulnerability findings. */
	export interface PackageVulnerabilityDetailsFormProperties {

		/** Required */
		vulnerabilityId: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
		sourceUrl: FormControl<string | null | undefined>,
		vendorSeverity: FormControl<string | null | undefined>,
		vendorCreatedAt: FormControl<Date | null | undefined>,
		vendorUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreatePackageVulnerabilityDetailsFormGroup() {
		return new FormGroup<PackageVulnerabilityDetailsFormProperties>({
			vulnerabilityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<string | null | undefined>(undefined),
			sourceUrl: new FormControl<string | null | undefined>(undefined),
			vendorSeverity: new FormControl<string | null | undefined>(undefined),
			vendorCreatedAt: new FormControl<Date | null | undefined>(undefined),
			vendorUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about a vulnerable package that Amazon Inspector identifies in a finding. */
	export interface VulnerablePackage {
		name?: string;
		version?: string;
		sourceLayerHash?: string;
		epoch?: number | null;
		release?: string;
		arch?: string;
		packageManager?: string;
		filePath?: string;
		fixedInVersion?: string;
		remediation?: string;
	}

	/** Information about a vulnerable package that Amazon Inspector identifies in a finding. */
	export interface VulnerablePackageFormProperties {
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		sourceLayerHash: FormControl<string | null | undefined>,
		epoch: FormControl<number | null | undefined>,
		release: FormControl<string | null | undefined>,
		arch: FormControl<string | null | undefined>,
		packageManager: FormControl<string | null | undefined>,
		filePath: FormControl<string | null | undefined>,
		fixedInVersion: FormControl<string | null | undefined>,
		remediation: FormControl<string | null | undefined>,
	}
	export function CreateVulnerablePackageFormGroup() {
		return new FormGroup<VulnerablePackageFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			sourceLayerHash: new FormControl<string | null | undefined>(undefined),
			epoch: new FormControl<number | null | undefined>(undefined),
			release: new FormControl<string | null | undefined>(undefined),
			arch: new FormControl<string | null | undefined>(undefined),
			packageManager: new FormControl<string | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined),
			fixedInVersion: new FormControl<string | null | undefined>(undefined),
			remediation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Amazon Inspector generates a risk score for each finding. This score helps you to prioritize findings, to focus on the most critical findings and the most vulnerable resources. The score uses the Common Vulnerability Scoring System (CVSS) format. This format is a modification of the base CVSS score that the National Vulnerability Database (NVD) provides. For more information about severity levels, see <a href="https://docs.aws.amazon.com/inspector/latest/user/findings-understanding-severity.html">Severity levels for Amazon Inspector findings</a> in the <i>Amazon Inspector User Guide</i>. */
	export interface CvssScore {
		baseScore?: number | null;
		scoringVector?: string;
		version?: string;
		source?: string;
	}

	/** Amazon Inspector generates a risk score for each finding. This score helps you to prioritize findings, to focus on the most critical findings and the most vulnerable resources. The score uses the Common Vulnerability Scoring System (CVSS) format. This format is a modification of the base CVSS score that the National Vulnerability Database (NVD) provides. For more information about severity levels, see <a href="https://docs.aws.amazon.com/inspector/latest/user/findings-understanding-severity.html">Severity levels for Amazon Inspector findings</a> in the <i>Amazon Inspector User Guide</i>. */
	export interface CvssScoreFormProperties {
		baseScore: FormControl<number | null | undefined>,
		scoringVector: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
	}
	export function CreateCvssScoreFormGroup() {
		return new FormGroup<CvssScoreFormProperties>({
			baseScore: new FormControl<number | null | undefined>(undefined),
			scoringVector: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A name value pair that Image Builder applies to streamline results from the vulnerability scan findings list action. */
	export interface ImageScanFindingsFilter {
		name?: string;
		values?: Array<string>;
	}

	/** A name value pair that Image Builder applies to streamline results from the vulnerability scan findings list action. */
	export interface ImageScanFindingsFilterFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateImageScanFindingsFilterFormGroup() {
		return new FormGroup<ImageScanFindingsFilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImagesResponse {
		requestId?: string;
		imageVersionList?: Array<ImageVersion>;
		nextToken?: string;
	}
	export interface ListImagesResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImagesResponseFormGroup() {
		return new FormGroup<ListImagesResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The defining characteristics of a specific version of an Image Builder image. */
	export interface ImageVersion {
		arn?: string;
		name?: string;
		type?: ImageType;
		version?: string;
		platform?: Platform;
		osVersion?: string;
		owner?: string;
		dateCreated?: string;
		buildType?: BuildType;
		imageSource?: ImageSource;
	}

	/** The defining characteristics of a specific version of an Image Builder image. */
	export interface ImageVersionFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<ImageType | null | undefined>,
		version: FormControl<string | null | undefined>,
		platform: FormControl<Platform | null | undefined>,
		osVersion: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
		buildType: FormControl<BuildType | null | undefined>,
		imageSource: FormControl<ImageSource | null | undefined>,
	}
	export function CreateImageVersionFormGroup() {
		return new FormGroup<ImageVersionFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ImageType | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<Platform | null | undefined>(undefined),
			osVersion: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<string | null | undefined>(undefined),
			buildType: new FormControl<BuildType | null | undefined>(undefined),
			imageSource: new FormControl<ImageSource | null | undefined>(undefined),
		});

	}

	export interface ListInfrastructureConfigurationsResponse {
		requestId?: string;
		infrastructureConfigurationSummaryList?: Array<InfrastructureConfigurationSummary>;
		nextToken?: string;
	}
	export interface ListInfrastructureConfigurationsResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInfrastructureConfigurationsResponseFormGroup() {
		return new FormGroup<ListInfrastructureConfigurationsResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The infrastructure used when building Amazon EC2 AMIs. */
	export interface InfrastructureConfigurationSummary {
		arn?: string;
		name?: string;
		description?: string;
		dateCreated?: string;
		dateUpdated?: string;
		resourceTags?: ResourceTagMap;
		tags?: TagMap;
		instanceTypes?: Array<string>;
		instanceProfileName?: string;
	}

	/** The infrastructure used when building Amazon EC2 AMIs. */
	export interface InfrastructureConfigurationSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
		dateUpdated: FormControl<string | null | undefined>,
		instanceProfileName: FormControl<string | null | undefined>,
	}
	export function CreateInfrastructureConfigurationSummaryFormGroup() {
		return new FormGroup<InfrastructureConfigurationSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<string | null | undefined>(undefined),
			dateUpdated: new FormControl<string | null | undefined>(undefined),
			instanceProfileName: new FormControl<string | null | undefined>(undefined),
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

	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
		});

	}

	export interface ListWorkflowExecutionsResponse {
		requestId?: string;
		workflowExecutions?: Array<WorkflowExecutionMetadata>;
		imageBuildVersionArn?: string;
		message?: string;
		nextToken?: string;
	}
	export interface ListWorkflowExecutionsResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		imageBuildVersionArn: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkflowExecutionsResponseFormGroup() {
		return new FormGroup<ListWorkflowExecutionsResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			imageBuildVersionArn: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata that includes details and status from this runtime instance of the workflow. */
	export interface WorkflowExecutionMetadata {
		workflowBuildVersionArn?: string;
		workflowExecutionId?: string;
		type?: WorkflowType;
		status?: WorkflowExecutionStatus;
		message?: string;
		totalStepCount?: number | null;
		totalStepsSucceeded?: number | null;
		totalStepsFailed?: number | null;
		totalStepsSkipped?: number | null;
		startTime?: string;
		endTime?: string;
	}

	/** Metadata that includes details and status from this runtime instance of the workflow. */
	export interface WorkflowExecutionMetadataFormProperties {
		workflowBuildVersionArn: FormControl<string | null | undefined>,
		workflowExecutionId: FormControl<string | null | undefined>,
		type: FormControl<WorkflowType | null | undefined>,
		status: FormControl<WorkflowExecutionStatus | null | undefined>,
		message: FormControl<string | null | undefined>,
		totalStepCount: FormControl<number | null | undefined>,
		totalStepsSucceeded: FormControl<number | null | undefined>,
		totalStepsFailed: FormControl<number | null | undefined>,
		totalStepsSkipped: FormControl<number | null | undefined>,
		startTime: FormControl<string | null | undefined>,
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowExecutionMetadataFormGroup() {
		return new FormGroup<WorkflowExecutionMetadataFormProperties>({
			workflowBuildVersionArn: new FormControl<string | null | undefined>(undefined),
			workflowExecutionId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<WorkflowType | null | undefined>(undefined),
			status: new FormControl<WorkflowExecutionStatus | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			totalStepCount: new FormControl<number | null | undefined>(undefined),
			totalStepsSucceeded: new FormControl<number | null | undefined>(undefined),
			totalStepsFailed: new FormControl<number | null | undefined>(undefined),
			totalStepsSkipped: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListWorkflowStepExecutionsResponse {
		requestId?: string;
		steps?: Array<WorkflowStepMetadata>;
		workflowBuildVersionArn?: string;
		workflowExecutionId?: string;
		imageBuildVersionArn?: string;
		message?: string;
		nextToken?: string;
	}
	export interface ListWorkflowStepExecutionsResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		workflowBuildVersionArn: FormControl<string | null | undefined>,
		workflowExecutionId: FormControl<string | null | undefined>,
		imageBuildVersionArn: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkflowStepExecutionsResponseFormGroup() {
		return new FormGroup<ListWorkflowStepExecutionsResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			workflowBuildVersionArn: new FormControl<string | null | undefined>(undefined),
			workflowExecutionId: new FormControl<string | null | undefined>(undefined),
			imageBuildVersionArn: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Runtime details and status for the workflow step. */
	export interface WorkflowStepMetadata {
		stepExecutionId?: string;
		name?: string;
		description?: string;
		action?: string;
		status?: WorkflowStepExecutionStatus;
		rollbackStatus?: WorkflowStepExecutionRollbackStatus;
		message?: string;
		inputs?: string;
		outputs?: string;
		startTime?: string;
		endTime?: string;
	}

	/** Runtime details and status for the workflow step. */
	export interface WorkflowStepMetadataFormProperties {
		stepExecutionId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		action: FormControl<string | null | undefined>,
		status: FormControl<WorkflowStepExecutionStatus | null | undefined>,
		rollbackStatus: FormControl<WorkflowStepExecutionRollbackStatus | null | undefined>,
		message: FormControl<string | null | undefined>,
		inputs: FormControl<string | null | undefined>,
		outputs: FormControl<string | null | undefined>,
		startTime: FormControl<string | null | undefined>,
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowStepMetadataFormGroup() {
		return new FormGroup<WorkflowStepMetadataFormProperties>({
			stepExecutionId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			action: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<WorkflowStepExecutionStatus | null | undefined>(undefined),
			rollbackStatus: new FormControl<WorkflowStepExecutionRollbackStatus | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			inputs: new FormControl<string | null | undefined>(undefined),
			outputs: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutComponentPolicyResponse {
		requestId?: string;
		componentArn?: string;
	}
	export interface PutComponentPolicyResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		componentArn: FormControl<string | null | undefined>,
	}
	export function CreatePutComponentPolicyResponseFormGroup() {
		return new FormGroup<PutComponentPolicyResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			componentArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidParameterValueException {
	}
	export interface InvalidParameterValueExceptionFormProperties {
	}
	export function CreateInvalidParameterValueExceptionFormGroup() {
		return new FormGroup<InvalidParameterValueExceptionFormProperties>({
		});

	}

	export interface PutContainerRecipePolicyResponse {
		requestId?: string;
		containerRecipeArn?: string;
	}
	export interface PutContainerRecipePolicyResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		containerRecipeArn: FormControl<string | null | undefined>,
	}
	export function CreatePutContainerRecipePolicyResponseFormGroup() {
		return new FormGroup<PutContainerRecipePolicyResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			containerRecipeArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutImagePolicyResponse {
		requestId?: string;
		imageArn?: string;
	}
	export interface PutImagePolicyResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		imageArn: FormControl<string | null | undefined>,
	}
	export function CreatePutImagePolicyResponseFormGroup() {
		return new FormGroup<PutImagePolicyResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			imageArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutImageRecipePolicyResponse {
		requestId?: string;
		imageRecipeArn?: string;
	}
	export interface PutImageRecipePolicyResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		imageRecipeArn: FormControl<string | null | undefined>,
	}
	export function CreatePutImageRecipePolicyResponseFormGroup() {
		return new FormGroup<PutImageRecipePolicyResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			imageRecipeArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartImagePipelineExecutionResponse {
		requestId?: string;
		clientToken?: string;
		imageBuildVersionArn?: string;
	}
	export interface StartImagePipelineExecutionResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		imageBuildVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateStartImagePipelineExecutionResponseFormGroup() {
		return new FormGroup<StartImagePipelineExecutionResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			imageBuildVersionArn: new FormControl<string | null | undefined>(undefined),
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

	export interface UpdateDistributionConfigurationResponse {
		requestId?: string;
		clientToken?: string;
		distributionConfigurationArn?: string;
	}
	export interface UpdateDistributionConfigurationResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		distributionConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDistributionConfigurationResponseFormGroup() {
		return new FormGroup<UpdateDistributionConfigurationResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateImagePipelineResponse {
		requestId?: string;
		clientToken?: string;
		imagePipelineArn?: string;
	}
	export interface UpdateImagePipelineResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		imagePipelineArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateImagePipelineResponseFormGroup() {
		return new FormGroup<UpdateImagePipelineResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			imagePipelineArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateInfrastructureConfigurationResponse {
		requestId?: string;
		clientToken?: string;
		infrastructureConfigurationArn?: string;
	}
	export interface UpdateInfrastructureConfigurationResponseFormProperties {
		requestId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		infrastructureConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInfrastructureConfigurationResponseFormGroup() {
		return new FormGroup<UpdateInfrastructureConfigurationResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CancelImageCreationRequest {

		/** Required */
		imageBuildVersionArn: string;

		/** Required */
		clientToken: string;
	}
	export interface CancelImageCreationRequestFormProperties {

		/** Required */
		imageBuildVersionArn: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCancelImageCreationRequestFormGroup() {
		return new FormGroup<CancelImageCreationRequestFormProperties>({
			imageBuildVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ComponentFormat { SHELL = 'SHELL' }

	export interface CreateComponentRequest {

		/** Required */
		name: string;

		/** Required */
		semanticVersion: string;
		description?: string;
		changeDescription?: string;

		/** Required */
		platform: Platform;
		supportedOsVersions?: Array<string>;
		data?: string;
		uri?: string;
		kmsKeyId?: string;
		tags?: TagMap;

		/** Required */
		clientToken: string;
	}
	export interface CreateComponentRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		semanticVersion: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		changeDescription: FormControl<string | null | undefined>,

		/** Required */
		platform: FormControl<Platform | null | undefined>,
		data: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateComponentRequestFormGroup() {
		return new FormGroup<CreateComponentRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			semanticVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			changeDescription: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<Platform | null | undefined>(undefined, [Validators.required]),
			data: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateContainerRecipeRequest {

		/** Required */
		containerType: ContainerType;

		/** Required */
		name: string;
		description?: string;

		/** Required */
		semanticVersion: string;

		/** Required */
		components: Array<ComponentConfiguration>;
		instanceConfiguration?: InstanceConfiguration;
		dockerfileTemplateData?: string;
		dockerfileTemplateUri?: string;
		platformOverride?: Platform;
		imageOsVersionOverride?: string;

		/** Required */
		parentImage: string;
		tags?: TagMap;
		workingDirectory?: string;

		/** Required */
		targetRepository: TargetContainerRepository;
		kmsKeyId?: string;

		/** Required */
		clientToken: string;
	}
	export interface CreateContainerRecipeRequestFormProperties {

		/** Required */
		containerType: FormControl<ContainerType | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		semanticVersion: FormControl<string | null | undefined>,
		dockerfileTemplateData: FormControl<string | null | undefined>,
		dockerfileTemplateUri: FormControl<string | null | undefined>,
		platformOverride: FormControl<Platform | null | undefined>,
		imageOsVersionOverride: FormControl<string | null | undefined>,

		/** Required */
		parentImage: FormControl<string | null | undefined>,
		workingDirectory: FormControl<string | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateContainerRecipeRequestFormGroup() {
		return new FormGroup<CreateContainerRecipeRequestFormProperties>({
			containerType: new FormControl<ContainerType | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			semanticVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockerfileTemplateData: new FormControl<string | null | undefined>(undefined),
			dockerfileTemplateUri: new FormControl<string | null | undefined>(undefined),
			platformOverride: new FormControl<Platform | null | undefined>(undefined),
			imageOsVersionOverride: new FormControl<string | null | undefined>(undefined),
			parentImage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workingDirectory: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDistributionConfigurationRequest {

		/** Required */
		name: string;
		description?: string;

		/** Required */
		distributions: Array<Distribution>;
		tags?: TagMap;

		/** Required */
		clientToken: string;
	}
	export interface CreateDistributionConfigurationRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateDistributionConfigurationRequestFormGroup() {
		return new FormGroup<CreateDistributionConfigurationRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateImagePipelineRequest {

		/** Required */
		name: string;
		description?: string;
		imageRecipeArn?: string;
		containerRecipeArn?: string;

		/** Required */
		infrastructureConfigurationArn: string;
		distributionConfigurationArn?: string;
		imageTestsConfiguration?: ImageTestsConfiguration;
		enhancedImageMetadataEnabled?: boolean | null;
		schedule?: Schedule;
		status?: PipelineStatus;
		tags?: TagMap;

		/** Required */
		clientToken: string;
		imageScanningConfiguration?: ImageScanningConfiguration;
	}
	export interface CreateImagePipelineRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		imageRecipeArn: FormControl<string | null | undefined>,
		containerRecipeArn: FormControl<string | null | undefined>,

		/** Required */
		infrastructureConfigurationArn: FormControl<string | null | undefined>,
		distributionConfigurationArn: FormControl<string | null | undefined>,
		enhancedImageMetadataEnabled: FormControl<boolean | null | undefined>,
		status: FormControl<PipelineStatus | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateImagePipelineRequestFormGroup() {
		return new FormGroup<CreateImagePipelineRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			imageRecipeArn: new FormControl<string | null | undefined>(undefined),
			containerRecipeArn: new FormControl<string | null | undefined>(undefined),
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined),
			enhancedImageMetadataEnabled: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<PipelineStatus | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateImageRecipeRequest {

		/** Required */
		name: string;
		description?: string;

		/** Required */
		semanticVersion: string;

		/** Required */
		components: Array<ComponentConfiguration>;

		/** Required */
		parentImage: string;
		blockDeviceMappings?: Array<InstanceBlockDeviceMapping>;
		tags?: TagMap;
		workingDirectory?: string;
		additionalInstanceConfiguration?: AdditionalInstanceConfiguration;

		/** Required */
		clientToken: string;
	}
	export interface CreateImageRecipeRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		semanticVersion: FormControl<string | null | undefined>,

		/** Required */
		parentImage: FormControl<string | null | undefined>,
		workingDirectory: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateImageRecipeRequestFormGroup() {
		return new FormGroup<CreateImageRecipeRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			semanticVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parentImage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workingDirectory: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateImageRequest {
		imageRecipeArn?: string;
		containerRecipeArn?: string;
		distributionConfigurationArn?: string;

		/** Required */
		infrastructureConfigurationArn: string;
		imageTestsConfiguration?: ImageTestsConfiguration;
		enhancedImageMetadataEnabled?: boolean | null;
		tags?: TagMap;

		/** Required */
		clientToken: string;
		imageScanningConfiguration?: ImageScanningConfiguration;
	}
	export interface CreateImageRequestFormProperties {
		imageRecipeArn: FormControl<string | null | undefined>,
		containerRecipeArn: FormControl<string | null | undefined>,
		distributionConfigurationArn: FormControl<string | null | undefined>,

		/** Required */
		infrastructureConfigurationArn: FormControl<string | null | undefined>,
		enhancedImageMetadataEnabled: FormControl<boolean | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateImageRequestFormGroup() {
		return new FormGroup<CreateImageRequestFormProperties>({
			imageRecipeArn: new FormControl<string | null | undefined>(undefined),
			containerRecipeArn: new FormControl<string | null | undefined>(undefined),
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined),
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enhancedImageMetadataEnabled: new FormControl<boolean | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateInfrastructureConfigurationRequest {

		/** Required */
		name: string;
		description?: string;
		instanceTypes?: Array<string>;

		/** Required */
		instanceProfileName: string;
		securityGroupIds?: Array<string>;
		subnetId?: string;
		logging?: Logging;
		keyPair?: string;
		terminateInstanceOnFailure?: boolean | null;
		snsTopicArn?: string;
		resourceTags?: ResourceTagMap;
		instanceMetadataOptions?: InstanceMetadataOptions;
		tags?: TagMap;

		/** Required */
		clientToken: string;
	}
	export interface CreateInfrastructureConfigurationRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		instanceProfileName: FormControl<string | null | undefined>,
		subnetId: FormControl<string | null | undefined>,
		keyPair: FormControl<string | null | undefined>,
		terminateInstanceOnFailure: FormControl<boolean | null | undefined>,
		snsTopicArn: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateInfrastructureConfigurationRequestFormGroup() {
		return new FormGroup<CreateInfrastructureConfigurationRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			instanceProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subnetId: new FormControl<string | null | undefined>(undefined),
			keyPair: new FormControl<string | null | undefined>(undefined),
			terminateInstanceOnFailure: new FormControl<boolean | null | undefined>(undefined),
			snsTopicArn: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteComponentRequest {
	}
	export interface DeleteComponentRequestFormProperties {
	}
	export function CreateDeleteComponentRequestFormGroup() {
		return new FormGroup<DeleteComponentRequestFormProperties>({
		});

	}

	export interface DeleteContainerRecipeRequest {
	}
	export interface DeleteContainerRecipeRequestFormProperties {
	}
	export function CreateDeleteContainerRecipeRequestFormGroup() {
		return new FormGroup<DeleteContainerRecipeRequestFormProperties>({
		});

	}

	export interface DeleteDistributionConfigurationRequest {
	}
	export interface DeleteDistributionConfigurationRequestFormProperties {
	}
	export function CreateDeleteDistributionConfigurationRequestFormGroup() {
		return new FormGroup<DeleteDistributionConfigurationRequestFormProperties>({
		});

	}

	export interface DeleteImagePipelineRequest {
	}
	export interface DeleteImagePipelineRequestFormProperties {
	}
	export function CreateDeleteImagePipelineRequestFormGroup() {
		return new FormGroup<DeleteImagePipelineRequestFormProperties>({
		});

	}

	export interface DeleteImageRecipeRequest {
	}
	export interface DeleteImageRecipeRequestFormProperties {
	}
	export function CreateDeleteImageRecipeRequestFormGroup() {
		return new FormGroup<DeleteImageRecipeRequestFormProperties>({
		});

	}

	export interface DeleteImageRequest {
	}
	export interface DeleteImageRequestFormProperties {
	}
	export function CreateDeleteImageRequestFormGroup() {
		return new FormGroup<DeleteImageRequestFormProperties>({
		});

	}

	export interface DeleteInfrastructureConfigurationRequest {
	}
	export interface DeleteInfrastructureConfigurationRequestFormProperties {
	}
	export function CreateDeleteInfrastructureConfigurationRequestFormGroup() {
		return new FormGroup<DeleteInfrastructureConfigurationRequestFormProperties>({
		});

	}

	export interface GetComponentPolicyRequest {
	}
	export interface GetComponentPolicyRequestFormProperties {
	}
	export function CreateGetComponentPolicyRequestFormGroup() {
		return new FormGroup<GetComponentPolicyRequestFormProperties>({
		});

	}

	export interface GetComponentRequest {
	}
	export interface GetComponentRequestFormProperties {
	}
	export function CreateGetComponentRequestFormGroup() {
		return new FormGroup<GetComponentRequestFormProperties>({
		});

	}

	export interface GetContainerRecipePolicyRequest {
	}
	export interface GetContainerRecipePolicyRequestFormProperties {
	}
	export function CreateGetContainerRecipePolicyRequestFormGroup() {
		return new FormGroup<GetContainerRecipePolicyRequestFormProperties>({
		});

	}

	export interface GetContainerRecipeRequest {
	}
	export interface GetContainerRecipeRequestFormProperties {
	}
	export function CreateGetContainerRecipeRequestFormGroup() {
		return new FormGroup<GetContainerRecipeRequestFormProperties>({
		});

	}

	export interface GetDistributionConfigurationRequest {
	}
	export interface GetDistributionConfigurationRequestFormProperties {
	}
	export function CreateGetDistributionConfigurationRequestFormGroup() {
		return new FormGroup<GetDistributionConfigurationRequestFormProperties>({
		});

	}

	export interface GetImagePipelineRequest {
	}
	export interface GetImagePipelineRequestFormProperties {
	}
	export function CreateGetImagePipelineRequestFormGroup() {
		return new FormGroup<GetImagePipelineRequestFormProperties>({
		});

	}

	export interface GetImagePolicyRequest {
	}
	export interface GetImagePolicyRequestFormProperties {
	}
	export function CreateGetImagePolicyRequestFormGroup() {
		return new FormGroup<GetImagePolicyRequestFormProperties>({
		});

	}

	export interface GetImageRecipePolicyRequest {
	}
	export interface GetImageRecipePolicyRequestFormProperties {
	}
	export function CreateGetImageRecipePolicyRequestFormGroup() {
		return new FormGroup<GetImageRecipePolicyRequestFormProperties>({
		});

	}

	export interface GetImageRecipeRequest {
	}
	export interface GetImageRecipeRequestFormProperties {
	}
	export function CreateGetImageRecipeRequestFormGroup() {
		return new FormGroup<GetImageRecipeRequestFormProperties>({
		});

	}

	export interface GetImageRequest {
	}
	export interface GetImageRequestFormProperties {
	}
	export function CreateGetImageRequestFormGroup() {
		return new FormGroup<GetImageRequestFormProperties>({
		});

	}


	/** GetInfrastructureConfiguration request object. */
	export interface GetInfrastructureConfigurationRequest {
	}

	/** GetInfrastructureConfiguration request object. */
	export interface GetInfrastructureConfigurationRequestFormProperties {
	}
	export function CreateGetInfrastructureConfigurationRequestFormGroup() {
		return new FormGroup<GetInfrastructureConfigurationRequestFormProperties>({
		});

	}

	export interface GetWorkflowExecutionRequest {
	}
	export interface GetWorkflowExecutionRequestFormProperties {
	}
	export function CreateGetWorkflowExecutionRequestFormGroup() {
		return new FormGroup<GetWorkflowExecutionRequestFormProperties>({
		});

	}

	export interface GetWorkflowStepExecutionRequest {
	}
	export interface GetWorkflowStepExecutionRequestFormProperties {
	}
	export function CreateGetWorkflowStepExecutionRequestFormGroup() {
		return new FormGroup<GetWorkflowStepExecutionRequestFormProperties>({
		});

	}

	export interface ImportComponentRequest {

		/** Required */
		name: string;

		/** Required */
		semanticVersion: string;
		description?: string;
		changeDescription?: string;

		/** Required */
		type: ComponentType;

		/** Required */
		format: ComponentFormat;

		/** Required */
		platform: Platform;
		data?: string;
		uri?: string;
		kmsKeyId?: string;
		tags?: TagMap;

		/** Required */
		clientToken: string;
	}
	export interface ImportComponentRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		semanticVersion: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		changeDescription: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<ComponentType | null | undefined>,

		/** Required */
		format: FormControl<ComponentFormat | null | undefined>,

		/** Required */
		platform: FormControl<Platform | null | undefined>,
		data: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateImportComponentRequestFormGroup() {
		return new FormGroup<ImportComponentRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			semanticVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			changeDescription: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ComponentType | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<ComponentFormat | null | undefined>(undefined, [Validators.required]),
			platform: new FormControl<Platform | null | undefined>(undefined, [Validators.required]),
			data: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportVmImageRequest {

		/** Required */
		name: string;

		/** Required */
		semanticVersion: string;
		description?: string;

		/** Required */
		platform: Platform;
		osVersion?: string;

		/** Required */
		vmImportTaskId: string;
		tags?: TagMap;

		/** Required */
		clientToken: string;
	}
	export interface ImportVmImageRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		semanticVersion: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		platform: FormControl<Platform | null | undefined>,
		osVersion: FormControl<string | null | undefined>,

		/** Required */
		vmImportTaskId: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateImportVmImageRequestFormGroup() {
		return new FormGroup<ImportVmImageRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			semanticVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<Platform | null | undefined>(undefined, [Validators.required]),
			osVersion: new FormControl<string | null | undefined>(undefined),
			vmImportTaskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListComponentBuildVersionsRequest {

		/** Required */
		componentVersionArn: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListComponentBuildVersionsRequestFormProperties {

		/** Required */
		componentVersionArn: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentBuildVersionsRequestFormGroup() {
		return new FormGroup<ListComponentBuildVersionsRequestFormProperties>({
			componentVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Ownership { Self = 'Self', Shared = 'Shared', Amazon = 'Amazon', ThirdParty = 'ThirdParty' }

	export interface ListComponentsRequest {
		owner?: Ownership;
		filters?: Array<Filter>;
		byName?: boolean | null;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListComponentsRequestFormProperties {
		owner: FormControl<Ownership | null | undefined>,
		byName: FormControl<boolean | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentsRequestFormGroup() {
		return new FormGroup<ListComponentsRequestFormProperties>({
			owner: new FormControl<Ownership | null | undefined>(undefined),
			byName: new FormControl<boolean | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListContainerRecipesRequest {
		owner?: Ownership;
		filters?: Array<Filter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListContainerRecipesRequestFormProperties {
		owner: FormControl<Ownership | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListContainerRecipesRequestFormGroup() {
		return new FormGroup<ListContainerRecipesRequestFormProperties>({
			owner: new FormControl<Ownership | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDistributionConfigurationsRequest {
		filters?: Array<Filter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListDistributionConfigurationsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDistributionConfigurationsRequestFormGroup() {
		return new FormGroup<ListDistributionConfigurationsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImageBuildVersionsRequest {

		/** Required */
		imageVersionArn: string;
		filters?: Array<Filter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListImageBuildVersionsRequestFormProperties {

		/** Required */
		imageVersionArn: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImageBuildVersionsRequestFormGroup() {
		return new FormGroup<ListImageBuildVersionsRequestFormProperties>({
			imageVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImagePackagesRequest {

		/** Required */
		imageBuildVersionArn: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListImagePackagesRequestFormProperties {

		/** Required */
		imageBuildVersionArn: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImagePackagesRequestFormGroup() {
		return new FormGroup<ListImagePackagesRequestFormProperties>({
			imageBuildVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImagePipelineImagesRequest {

		/** Required */
		imagePipelineArn: string;
		filters?: Array<Filter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListImagePipelineImagesRequestFormProperties {

		/** Required */
		imagePipelineArn: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImagePipelineImagesRequestFormGroup() {
		return new FormGroup<ListImagePipelineImagesRequestFormProperties>({
			imagePipelineArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImagePipelinesRequest {
		filters?: Array<Filter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListImagePipelinesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImagePipelinesRequestFormGroup() {
		return new FormGroup<ListImagePipelinesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImageRecipesRequest {
		owner?: Ownership;
		filters?: Array<Filter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListImageRecipesRequestFormProperties {
		owner: FormControl<Ownership | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImageRecipesRequestFormGroup() {
		return new FormGroup<ListImageRecipesRequestFormProperties>({
			owner: new FormControl<Ownership | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImageScanFindingAggregationsRequest {

		/** A filter name and value pair that is used to return a more specific list of results from a list operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs. */
		filter?: Filter;
		nextToken?: string;
	}
	export interface ListImageScanFindingAggregationsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImageScanFindingAggregationsRequestFormGroup() {
		return new FormGroup<ListImageScanFindingAggregationsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImageScanFindingsRequest {
		filters?: Array<ImageScanFindingsFilter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListImageScanFindingsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImageScanFindingsRequestFormGroup() {
		return new FormGroup<ListImageScanFindingsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImagesRequest {
		owner?: Ownership;
		filters?: Array<Filter>;
		byName?: boolean | null;
		maxResults?: number | null;
		nextToken?: string;
		includeDeprecated?: boolean | null;
	}
	export interface ListImagesRequestFormProperties {
		owner: FormControl<Ownership | null | undefined>,
		byName: FormControl<boolean | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		includeDeprecated: FormControl<boolean | null | undefined>,
	}
	export function CreateListImagesRequestFormGroup() {
		return new FormGroup<ListImagesRequestFormProperties>({
			owner: new FormControl<Ownership | null | undefined>(undefined),
			byName: new FormControl<boolean | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			includeDeprecated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListInfrastructureConfigurationsRequest {
		filters?: Array<Filter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListInfrastructureConfigurationsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInfrastructureConfigurationsRequestFormGroup() {
		return new FormGroup<ListInfrastructureConfigurationsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
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

	export interface ListWorkflowExecutionsRequest {
		maxResults?: number | null;
		nextToken?: string;

		/** Required */
		imageBuildVersionArn: string;
	}
	export interface ListWorkflowExecutionsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		imageBuildVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateListWorkflowExecutionsRequestFormGroup() {
		return new FormGroup<ListWorkflowExecutionsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			imageBuildVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListWorkflowStepExecutionsRequest {
		maxResults?: number | null;
		nextToken?: string;

		/** Required */
		workflowExecutionId: string;
	}
	export interface ListWorkflowStepExecutionsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		workflowExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateListWorkflowStepExecutionsRequestFormGroup() {
		return new FormGroup<ListWorkflowStepExecutionsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			workflowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutComponentPolicyRequest {

		/** Required */
		componentArn: string;

		/** Required */
		policy: string;
	}
	export interface PutComponentPolicyRequestFormProperties {

		/** Required */
		componentArn: FormControl<string | null | undefined>,

		/** Required */
		policy: FormControl<string | null | undefined>,
	}
	export function CreatePutComponentPolicyRequestFormGroup() {
		return new FormGroup<PutComponentPolicyRequestFormProperties>({
			componentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutContainerRecipePolicyRequest {

		/** Required */
		containerRecipeArn: string;

		/** Required */
		policy: string;
	}
	export interface PutContainerRecipePolicyRequestFormProperties {

		/** Required */
		containerRecipeArn: FormControl<string | null | undefined>,

		/** Required */
		policy: FormControl<string | null | undefined>,
	}
	export function CreatePutContainerRecipePolicyRequestFormGroup() {
		return new FormGroup<PutContainerRecipePolicyRequestFormProperties>({
			containerRecipeArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutImagePolicyRequest {

		/** Required */
		imageArn: string;

		/** Required */
		policy: string;
	}
	export interface PutImagePolicyRequestFormProperties {

		/** Required */
		imageArn: FormControl<string | null | undefined>,

		/** Required */
		policy: FormControl<string | null | undefined>,
	}
	export function CreatePutImagePolicyRequestFormGroup() {
		return new FormGroup<PutImagePolicyRequestFormProperties>({
			imageArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutImageRecipePolicyRequest {

		/** Required */
		imageRecipeArn: string;

		/** Required */
		policy: string;
	}
	export interface PutImageRecipePolicyRequestFormProperties {

		/** Required */
		imageRecipeArn: FormControl<string | null | undefined>,

		/** Required */
		policy: FormControl<string | null | undefined>,
	}
	export function CreatePutImageRecipePolicyRequestFormGroup() {
		return new FormGroup<PutImageRecipePolicyRequestFormProperties>({
			imageRecipeArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartImagePipelineExecutionRequest {

		/** Required */
		imagePipelineArn: string;

		/** Required */
		clientToken: string;
	}
	export interface StartImagePipelineExecutionRequestFormProperties {

		/** Required */
		imagePipelineArn: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartImagePipelineExecutionRequestFormGroup() {
		return new FormGroup<StartImagePipelineExecutionRequestFormProperties>({
			imagePipelineArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

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

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateDistributionConfigurationRequest {

		/** Required */
		distributionConfigurationArn: string;
		description?: string;

		/** Required */
		distributions: Array<Distribution>;

		/** Required */
		clientToken: string;
	}
	export interface UpdateDistributionConfigurationRequestFormProperties {

		/** Required */
		distributionConfigurationArn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDistributionConfigurationRequestFormGroup() {
		return new FormGroup<UpdateDistributionConfigurationRequestFormProperties>({
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateImagePipelineRequest {

		/** Required */
		imagePipelineArn: string;
		description?: string;
		imageRecipeArn?: string;
		containerRecipeArn?: string;

		/** Required */
		infrastructureConfigurationArn: string;
		distributionConfigurationArn?: string;
		imageTestsConfiguration?: ImageTestsConfiguration;
		enhancedImageMetadataEnabled?: boolean | null;
		schedule?: Schedule;
		status?: PipelineStatus;

		/** Required */
		clientToken: string;
		imageScanningConfiguration?: ImageScanningConfiguration;
	}
	export interface UpdateImagePipelineRequestFormProperties {

		/** Required */
		imagePipelineArn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		imageRecipeArn: FormControl<string | null | undefined>,
		containerRecipeArn: FormControl<string | null | undefined>,

		/** Required */
		infrastructureConfigurationArn: FormControl<string | null | undefined>,
		distributionConfigurationArn: FormControl<string | null | undefined>,
		enhancedImageMetadataEnabled: FormControl<boolean | null | undefined>,
		status: FormControl<PipelineStatus | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateImagePipelineRequestFormGroup() {
		return new FormGroup<UpdateImagePipelineRequestFormProperties>({
			imagePipelineArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			imageRecipeArn: new FormControl<string | null | undefined>(undefined),
			containerRecipeArn: new FormControl<string | null | undefined>(undefined),
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined),
			enhancedImageMetadataEnabled: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<PipelineStatus | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateInfrastructureConfigurationRequest {

		/** Required */
		infrastructureConfigurationArn: string;
		description?: string;
		instanceTypes?: Array<string>;

		/** Required */
		instanceProfileName: string;
		securityGroupIds?: Array<string>;
		subnetId?: string;
		logging?: Logging;
		keyPair?: string;
		terminateInstanceOnFailure?: boolean | null;
		snsTopicArn?: string;

		/** Required */
		clientToken: string;
		resourceTags?: ResourceTagMap;
		instanceMetadataOptions?: InstanceMetadataOptions;
	}
	export interface UpdateInfrastructureConfigurationRequestFormProperties {

		/** Required */
		infrastructureConfigurationArn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		instanceProfileName: FormControl<string | null | undefined>,
		subnetId: FormControl<string | null | undefined>,
		keyPair: FormControl<string | null | undefined>,
		terminateInstanceOnFailure: FormControl<boolean | null | undefined>,
		snsTopicArn: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInfrastructureConfigurationRequestFormGroup() {
		return new FormGroup<UpdateInfrastructureConfigurationRequestFormProperties>({
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			instanceProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subnetId: new FormControl<string | null | undefined>(undefined),
			keyPair: new FormControl<string | null | undefined>(undefined),
			terminateInstanceOnFailure: new FormControl<boolean | null | undefined>(undefined),
			snsTopicArn: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state.
		 * Put CancelImageCreation
		 * @return {CancelImageCreationResponse} Success
		 */
		CancelImageCreation(requestBody: CancelImageCreationPutBody): Observable<CancelImageCreationResponse> {
			return this.http.put<CancelImageCreationResponse>(this.baseUri + 'CancelImageCreation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new component that can be used to build, validate, test, and assess your image. The component is based on a YAML document that you specify using exactly one of the following methods:</p> <ul> <li> <p>Inline, using the <code>data</code> property in the request body.</p> </li> <li> <p>A URL that points to a YAML document file stored in Amazon S3, using the <code>uri</code> property in the request body.</p> </li> </ul>
		 * Put CreateComponent
		 * @return {CreateComponentResponse} Success
		 */
		CreateComponent(requestBody: CreateComponentPutBody): Observable<CreateComponentResponse> {
			return this.http.put<CreateComponentResponse>(this.baseUri + 'CreateComponent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.
		 * Put CreateContainerRecipe
		 * @return {CreateContainerRecipeResponse} Success
		 */
		CreateContainerRecipe(requestBody: CreateContainerRecipePutBody): Observable<CreateContainerRecipeResponse> {
			return this.http.put<CreateContainerRecipeResponse>(this.baseUri + 'CreateContainerRecipe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
		 * Put CreateDistributionConfiguration
		 * @return {CreateDistributionConfigurationResponse} Success
		 */
		CreateDistributionConfiguration(requestBody: CreateDistributionConfigurationPutBody): Observable<CreateDistributionConfigurationResponse> {
			return this.http.put<CreateDistributionConfigurationResponse>(this.baseUri + 'CreateDistributionConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.
		 * Put CreateImage
		 * @return {CreateImageResponse} Success
		 */
		CreateImage(requestBody: CreateImagePutBody): Observable<CreateImageResponse> {
			return this.http.put<CreateImageResponse>(this.baseUri + 'CreateImage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.
		 * Put CreateImagePipeline
		 * @return {CreateImagePipelineResponse} Success
		 */
		CreateImagePipeline(requestBody: CreateImagePipelinePutBody): Observable<CreateImagePipelineResponse> {
			return this.http.put<CreateImagePipelineResponse>(this.baseUri + 'CreateImagePipeline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new image recipe. Image recipes define how images are configured, tested, and assessed.
		 * Put CreateImageRecipe
		 * @return {CreateImageRecipeResponse} Success
		 */
		CreateImageRecipe(requestBody: CreateImageRecipePutBody): Observable<CreateImageRecipeResponse> {
			return this.http.put<CreateImageRecipeResponse>(this.baseUri + 'CreateImageRecipe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
		 * Put CreateInfrastructureConfiguration
		 * @return {CreateInfrastructureConfigurationResponse} Success
		 */
		CreateInfrastructureConfiguration(requestBody: CreateInfrastructureConfigurationPutBody): Observable<CreateInfrastructureConfigurationResponse> {
			return this.http.put<CreateInfrastructureConfigurationResponse>(this.baseUri + 'CreateInfrastructureConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a component build version.
		 * Delete DeleteComponent#componentBuildVersionArn
		 * @param {string} componentBuildVersionArn The Amazon Resource Name (ARN) of the component build version to delete.
		 * @return {DeleteComponentResponse} Success
		 */
		DeleteComponent(componentBuildVersionArn: string): Observable<DeleteComponentResponse> {
			return this.http.delete<DeleteComponentResponse>(this.baseUri + 'DeleteComponent#componentBuildVersionArn?componentBuildVersionArn=' + (componentBuildVersionArn == null ? '' : encodeURIComponent(componentBuildVersionArn)), {});
		}

		/**
		 * Deletes a container recipe.
		 * Delete DeleteContainerRecipe#containerRecipeArn
		 * @param {string} containerRecipeArn The Amazon Resource Name (ARN) of the container recipe to delete.
		 * @return {DeleteContainerRecipeResponse} Success
		 */
		DeleteContainerRecipe(containerRecipeArn: string): Observable<DeleteContainerRecipeResponse> {
			return this.http.delete<DeleteContainerRecipeResponse>(this.baseUri + 'DeleteContainerRecipe#containerRecipeArn?containerRecipeArn=' + (containerRecipeArn == null ? '' : encodeURIComponent(containerRecipeArn)), {});
		}

		/**
		 * Deletes a distribution configuration.
		 * Delete DeleteDistributionConfiguration#distributionConfigurationArn
		 * @param {string} distributionConfigurationArn The Amazon Resource Name (ARN) of the distribution configuration to delete.
		 * @return {DeleteDistributionConfigurationResponse} Success
		 */
		DeleteDistributionConfiguration(distributionConfigurationArn: string): Observable<DeleteDistributionConfigurationResponse> {
			return this.http.delete<DeleteDistributionConfigurationResponse>(this.baseUri + 'DeleteDistributionConfiguration#distributionConfigurationArn?distributionConfigurationArn=' + (distributionConfigurationArn == null ? '' : encodeURIComponent(distributionConfigurationArn)), {});
		}

		/**
		 * <p>Deletes an Image Builder image resource. This does not delete any EC2 AMIs or ECR container images that are created during the image build process. You must clean those up separately, using the appropriate Amazon EC2 or Amazon ECR console actions, or API or CLI commands.</p> <ul> <li> <p>To deregister an EC2 Linux AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/deregister-ami.html">Deregister your Linux AMI</a> in the <i> <i>Amazon EC2 User Guide</i> </i>.</p> </li> <li> <p>To deregister an EC2 Windows AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/deregister-ami.html">Deregister your Windows AMI</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i>.</p> </li> <li> <p>To delete a container image from Amazon ECR, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/delete_image.html">Deleting an image</a> in the <i>Amazon ECR User Guide</i>.</p> </li> </ul>
		 * Delete DeleteImage#imageBuildVersionArn
		 * @param {string} imageBuildVersionArn The Amazon Resource Name (ARN) of the Image Builder image resource to delete.
		 * @return {DeleteImageResponse} Success
		 */
		DeleteImage(imageBuildVersionArn: string): Observable<DeleteImageResponse> {
			return this.http.delete<DeleteImageResponse>(this.baseUri + 'DeleteImage#imageBuildVersionArn?imageBuildVersionArn=' + (imageBuildVersionArn == null ? '' : encodeURIComponent(imageBuildVersionArn)), {});
		}

		/**
		 * Deletes an image pipeline.
		 * Delete DeleteImagePipeline#imagePipelineArn
		 * @param {string} imagePipelineArn The Amazon Resource Name (ARN) of the image pipeline to delete.
		 * @return {DeleteImagePipelineResponse} Success
		 */
		DeleteImagePipeline(imagePipelineArn: string): Observable<DeleteImagePipelineResponse> {
			return this.http.delete<DeleteImagePipelineResponse>(this.baseUri + 'DeleteImagePipeline#imagePipelineArn?imagePipelineArn=' + (imagePipelineArn == null ? '' : encodeURIComponent(imagePipelineArn)), {});
		}

		/**
		 * Deletes an image recipe.
		 * Delete DeleteImageRecipe#imageRecipeArn
		 * @param {string} imageRecipeArn The Amazon Resource Name (ARN) of the image recipe to delete.
		 * @return {DeleteImageRecipeResponse} Success
		 */
		DeleteImageRecipe(imageRecipeArn: string): Observable<DeleteImageRecipeResponse> {
			return this.http.delete<DeleteImageRecipeResponse>(this.baseUri + 'DeleteImageRecipe#imageRecipeArn?imageRecipeArn=' + (imageRecipeArn == null ? '' : encodeURIComponent(imageRecipeArn)), {});
		}

		/**
		 * Deletes an infrastructure configuration.
		 * Delete DeleteInfrastructureConfiguration#infrastructureConfigurationArn
		 * @param {string} infrastructureConfigurationArn The Amazon Resource Name (ARN) of the infrastructure configuration to delete.
		 * @return {DeleteInfrastructureConfigurationResponse} Success
		 */
		DeleteInfrastructureConfiguration(infrastructureConfigurationArn: string): Observable<DeleteInfrastructureConfigurationResponse> {
			return this.http.delete<DeleteInfrastructureConfigurationResponse>(this.baseUri + 'DeleteInfrastructureConfiguration#infrastructureConfigurationArn?infrastructureConfigurationArn=' + (infrastructureConfigurationArn == null ? '' : encodeURIComponent(infrastructureConfigurationArn)), {});
		}

		/**
		 * Gets a component object.
		 * Get GetComponent#componentBuildVersionArn
		 * @param {string} componentBuildVersionArn The Amazon Resource Name (ARN) of the component that you want to get. Regex requires the suffix <code>/\d+$</code>.
		 * @return {GetComponentResponse} Success
		 */
		GetComponent(componentBuildVersionArn: string): Observable<GetComponentResponse> {
			return this.http.get<GetComponentResponse>(this.baseUri + 'GetComponent#componentBuildVersionArn?componentBuildVersionArn=' + (componentBuildVersionArn == null ? '' : encodeURIComponent(componentBuildVersionArn)), {});
		}

		/**
		 * Gets a component policy.
		 * Get GetComponentPolicy#componentArn
		 * @param {string} componentArn The Amazon Resource Name (ARN) of the component whose policy you want to retrieve.
		 * @return {GetComponentPolicyResponse} Success
		 */
		GetComponentPolicy(componentArn: string): Observable<GetComponentPolicyResponse> {
			return this.http.get<GetComponentPolicyResponse>(this.baseUri + 'GetComponentPolicy#componentArn?componentArn=' + (componentArn == null ? '' : encodeURIComponent(componentArn)), {});
		}

		/**
		 * Retrieves a container recipe.
		 * Get GetContainerRecipe#containerRecipeArn
		 * @param {string} containerRecipeArn The Amazon Resource Name (ARN) of the container recipe to retrieve.
		 * @return {GetContainerRecipeResponse} Success
		 */
		GetContainerRecipe(containerRecipeArn: string): Observable<GetContainerRecipeResponse> {
			return this.http.get<GetContainerRecipeResponse>(this.baseUri + 'GetContainerRecipe#containerRecipeArn?containerRecipeArn=' + (containerRecipeArn == null ? '' : encodeURIComponent(containerRecipeArn)), {});
		}

		/**
		 * Retrieves the policy for a container recipe.
		 * Get GetContainerRecipePolicy#containerRecipeArn
		 * @param {string} containerRecipeArn The Amazon Resource Name (ARN) of the container recipe for the policy being requested.
		 * @return {GetContainerRecipePolicyResponse} Success
		 */
		GetContainerRecipePolicy(containerRecipeArn: string): Observable<GetContainerRecipePolicyResponse> {
			return this.http.get<GetContainerRecipePolicyResponse>(this.baseUri + 'GetContainerRecipePolicy#containerRecipeArn?containerRecipeArn=' + (containerRecipeArn == null ? '' : encodeURIComponent(containerRecipeArn)), {});
		}

		/**
		 * Gets a distribution configuration.
		 * Get GetDistributionConfiguration#distributionConfigurationArn
		 * @param {string} distributionConfigurationArn The Amazon Resource Name (ARN) of the distribution configuration that you want to retrieve.
		 * @return {GetDistributionConfigurationResponse} Success
		 */
		GetDistributionConfiguration(distributionConfigurationArn: string): Observable<GetDistributionConfigurationResponse> {
			return this.http.get<GetDistributionConfigurationResponse>(this.baseUri + 'GetDistributionConfiguration#distributionConfigurationArn?distributionConfigurationArn=' + (distributionConfigurationArn == null ? '' : encodeURIComponent(distributionConfigurationArn)), {});
		}

		/**
		 * Gets an image.
		 * Get GetImage#imageBuildVersionArn
		 * @param {string} imageBuildVersionArn The Amazon Resource Name (ARN) of the image that you want to get.
		 * @return {GetImageResponse} Success
		 */
		GetImage(imageBuildVersionArn: string): Observable<GetImageResponse> {
			return this.http.get<GetImageResponse>(this.baseUri + 'GetImage#imageBuildVersionArn?imageBuildVersionArn=' + (imageBuildVersionArn == null ? '' : encodeURIComponent(imageBuildVersionArn)), {});
		}

		/**
		 * Gets an image pipeline.
		 * Get GetImagePipeline#imagePipelineArn
		 * @param {string} imagePipelineArn The Amazon Resource Name (ARN) of the image pipeline that you want to retrieve.
		 * @return {GetImagePipelineResponse} Success
		 */
		GetImagePipeline(imagePipelineArn: string): Observable<GetImagePipelineResponse> {
			return this.http.get<GetImagePipelineResponse>(this.baseUri + 'GetImagePipeline#imagePipelineArn?imagePipelineArn=' + (imagePipelineArn == null ? '' : encodeURIComponent(imagePipelineArn)), {});
		}

		/**
		 * Gets an image policy.
		 * Get GetImagePolicy#imageArn
		 * @param {string} imageArn The Amazon Resource Name (ARN) of the image whose policy you want to retrieve.
		 * @return {GetImagePolicyResponse} Success
		 */
		GetImagePolicy(imageArn: string): Observable<GetImagePolicyResponse> {
			return this.http.get<GetImagePolicyResponse>(this.baseUri + 'GetImagePolicy#imageArn?imageArn=' + (imageArn == null ? '' : encodeURIComponent(imageArn)), {});
		}

		/**
		 * Gets an image recipe.
		 * Get GetImageRecipe#imageRecipeArn
		 * @param {string} imageRecipeArn The Amazon Resource Name (ARN) of the image recipe that you want to retrieve.
		 * @return {GetImageRecipeResponse} Success
		 */
		GetImageRecipe(imageRecipeArn: string): Observable<GetImageRecipeResponse> {
			return this.http.get<GetImageRecipeResponse>(this.baseUri + 'GetImageRecipe#imageRecipeArn?imageRecipeArn=' + (imageRecipeArn == null ? '' : encodeURIComponent(imageRecipeArn)), {});
		}

		/**
		 * Gets an image recipe policy.
		 * Get GetImageRecipePolicy#imageRecipeArn
		 * @param {string} imageRecipeArn The Amazon Resource Name (ARN) of the image recipe whose policy you want to retrieve.
		 * @return {GetImageRecipePolicyResponse} Success
		 */
		GetImageRecipePolicy(imageRecipeArn: string): Observable<GetImageRecipePolicyResponse> {
			return this.http.get<GetImageRecipePolicyResponse>(this.baseUri + 'GetImageRecipePolicy#imageRecipeArn?imageRecipeArn=' + (imageRecipeArn == null ? '' : encodeURIComponent(imageRecipeArn)), {});
		}

		/**
		 * Gets an infrastructure configuration.
		 * Get GetInfrastructureConfiguration#infrastructureConfigurationArn
		 * @param {string} infrastructureConfigurationArn The Amazon Resource Name (ARN) of the infrastructure configuration that you want to retrieve.
		 * @return {GetInfrastructureConfigurationResponse} Success
		 */
		GetInfrastructureConfiguration(infrastructureConfigurationArn: string): Observable<GetInfrastructureConfigurationResponse> {
			return this.http.get<GetInfrastructureConfigurationResponse>(this.baseUri + 'GetInfrastructureConfiguration#infrastructureConfigurationArn?infrastructureConfigurationArn=' + (infrastructureConfigurationArn == null ? '' : encodeURIComponent(infrastructureConfigurationArn)), {});
		}

		/**
		 * Get the runtime information that was logged for a specific runtime instance of the workflow.
		 * Get GetWorkflowExecution#workflowExecutionId
		 * @param {string} workflowExecutionId Use the unique identifier for a runtime instance of the workflow to get runtime details.
		 * @return {GetWorkflowExecutionResponse} Success
		 */
		GetWorkflowExecution(workflowExecutionId: string): Observable<GetWorkflowExecutionResponse> {
			return this.http.get<GetWorkflowExecutionResponse>(this.baseUri + 'GetWorkflowExecution#workflowExecutionId?workflowExecutionId=' + (workflowExecutionId == null ? '' : encodeURIComponent(workflowExecutionId)), {});
		}

		/**
		 * Get the runtime information that was logged for a specific runtime instance of the workflow step.
		 * Get GetWorkflowStepExecution#stepExecutionId
		 * @param {string} stepExecutionId Use the unique identifier for a specific runtime instance of the workflow step to get runtime details for that step.
		 * @return {GetWorkflowStepExecutionResponse} Success
		 */
		GetWorkflowStepExecution(stepExecutionId: string): Observable<GetWorkflowStepExecutionResponse> {
			return this.http.get<GetWorkflowStepExecutionResponse>(this.baseUri + 'GetWorkflowStepExecution#stepExecutionId?stepExecutionId=' + (stepExecutionId == null ? '' : encodeURIComponent(stepExecutionId)), {});
		}

		/**
		 * Imports a component and transforms its data into a component document.
		 * Put ImportComponent
		 * @return {ImportComponentResponse} Success
		 */
		ImportComponent(requestBody: ImportComponentPutBody): Observable<ImportComponentResponse> {
			return this.http.put<ImportComponentResponse>(this.baseUri + 'ImportComponent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>When you export your virtual machine (VM) from its virtualization environment, that process creates a set of one or more disk container files that act as snapshots of your VM’s environment, settings, and data. The Amazon EC2 API <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportImage.html">ImportImage</a> action uses those files to import your VM and create an AMI. To import using the CLI command, see <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/import-image.html">import-image</a> </p> <p>You can reference the task ID from the VM import to pull in the AMI that the import created as the base image for your Image Builder recipe.</p>
		 * Put ImportVmImage
		 * @return {ImportVmImageResponse} Success
		 */
		ImportVmImage(requestBody: ImportVmImagePutBody): Observable<ImportVmImageResponse> {
			return this.http.put<ImportVmImageResponse>(this.baseUri + 'ImportVmImage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the list of component build versions for the specified semantic version.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>
		 * Post ListComponentBuildVersions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListComponentBuildVersionsResponse} Success
		 */
		ListComponentBuildVersions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListComponentBuildVersionsPostBody): Observable<ListComponentBuildVersionsResponse> {
			return this.http.post<ListComponentBuildVersionsResponse>(this.baseUri + 'ListComponentBuildVersions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the list of components that can be filtered by name, or by using the listed <code>filters</code> to streamline results. Newly created components can take up to two minutes to appear in the ListComponents API Results.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>
		 * Post ListComponents
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListComponentsResponse} Success
		 */
		ListComponents(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListComponentsPostBody): Observable<ListComponentsResponse> {
			return this.http.post<ListComponentsResponse>(this.baseUri + 'ListComponents?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of container recipes.
		 * Post ListContainerRecipes
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListContainerRecipesResponse} Success
		 */
		ListContainerRecipes(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListContainerRecipesPostBody): Observable<ListContainerRecipesResponse> {
			return this.http.post<ListContainerRecipesResponse>(this.baseUri + 'ListContainerRecipes?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of distribution configurations.
		 * Post ListDistributionConfigurations
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDistributionConfigurationsResponse} Success
		 */
		ListDistributionConfigurations(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListDistributionConfigurationsPostBody): Observable<ListDistributionConfigurationsResponse> {
			return this.http.post<ListDistributionConfigurationsResponse>(this.baseUri + 'ListDistributionConfigurations?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of image build versions.
		 * Post ListImageBuildVersions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListImageBuildVersionsResponse} Success
		 */
		ListImageBuildVersions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListImageBuildVersionsPostBody): Observable<ListImageBuildVersionsResponse> {
			return this.http.post<ListImageBuildVersionsResponse>(this.baseUri + 'ListImageBuildVersions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the Packages that are associated with an Image Build Version, as determined by Amazon Web Services Systems Manager Inventory at build time.
		 * Post ListImagePackages
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListImagePackagesResponse} Success
		 */
		ListImagePackages(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListImagePackagesPostBody): Observable<ListImagePackagesResponse> {
			return this.http.post<ListImagePackagesResponse>(this.baseUri + 'ListImagePackages?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of images created by the specified pipeline.
		 * Post ListImagePipelineImages
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListImagePipelineImagesResponse} Success
		 */
		ListImagePipelineImages(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListImagePipelineImagesPostBody): Observable<ListImagePipelineImagesResponse> {
			return this.http.post<ListImagePipelineImagesResponse>(this.baseUri + 'ListImagePipelineImages?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of image pipelines.
		 * Post ListImagePipelines
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListImagePipelinesResponse} Success
		 */
		ListImagePipelines(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListImagePipelinesPostBody): Observable<ListImagePipelinesResponse> {
			return this.http.post<ListImagePipelinesResponse>(this.baseUri + 'ListImagePipelines?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of image recipes.
		 * Post ListImageRecipes
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListImageRecipesResponse} Success
		 */
		ListImageRecipes(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListImageRecipesPostBody): Observable<ListImageRecipesResponse> {
			return this.http.post<ListImageRecipesResponse>(this.baseUri + 'ListImageRecipes?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of image scan aggregations for your account. You can filter by the type of key that Image Builder uses to group results. For example, if you want to get a list of findings by severity level for one of your pipelines, you might specify your pipeline with the <code>imagePipelineArn</code> filter. If you don't specify a filter, Image Builder returns an aggregation for your account.</p> <p>To streamline results, you can use the following filters in your request:</p> <ul> <li> <p> <code>accountId</code> </p> </li> <li> <p> <code>imageBuildVersionArn</code> </p> </li> <li> <p> <code>imagePipelineArn</code> </p> </li> <li> <p> <code>vulnerabilityId</code> </p> </li> </ul>
		 * Post ListImageScanFindingAggregations
		 * @param {string} nextToken Pagination token
		 * @return {ListImageScanFindingAggregationsResponse} Success
		 */
		ListImageScanFindingAggregations(nextToken: string | null | undefined, requestBody: ListImageScanFindingAggregationsPostBody): Observable<ListImageScanFindingAggregationsResponse> {
			return this.http.post<ListImageScanFindingAggregationsResponse>(this.baseUri + 'ListImageScanFindingAggregations?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of image scan findings for your account.
		 * Post ListImageScanFindings
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListImageScanFindingsResponse} Success
		 */
		ListImageScanFindings(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListImageScanFindingsPostBody): Observable<ListImageScanFindingsResponse> {
			return this.http.post<ListImageScanFindingsResponse>(this.baseUri + 'ListImageScanFindings?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of images that you have access to. Newly created images can take up to two minutes to appear in the ListImages API Results.
		 * Post ListImages
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListImagesResponse} Success
		 */
		ListImages(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListImagesPostBody): Observable<ListImagesResponse> {
			return this.http.post<ListImagesResponse>(this.baseUri + 'ListImages?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of infrastructure configurations.
		 * Post ListInfrastructureConfigurations
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListInfrastructureConfigurationsResponse} Success
		 */
		ListInfrastructureConfigurations(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListInfrastructureConfigurationsPostBody): Observable<ListInfrastructureConfigurationsResponse> {
			return this.http.post<ListInfrastructureConfigurationsResponse>(this.baseUri + 'ListInfrastructureConfigurations?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of tags for the specified resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds a tag to a resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource that you want to tag.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of workflow runtime instance metadata objects for a specific image build version.
		 * Post ListWorkflowExecutions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListWorkflowExecutionsResponse} Success
		 */
		ListWorkflowExecutions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListWorkflowExecutionsPostBody): Observable<ListWorkflowExecutionsResponse> {
			return this.http.post<ListWorkflowExecutionsResponse>(this.baseUri + 'ListWorkflowExecutions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Shows runtime data for each step in a runtime instance of the workflow that you specify in the request.
		 * Post ListWorkflowStepExecutions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListWorkflowStepExecutionsResponse} Success
		 */
		ListWorkflowStepExecutions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListWorkflowStepExecutionsPostBody): Observable<ListWorkflowStepExecutionsResponse> {
			return this.http.post<ListWorkflowStepExecutionsResponse>(this.baseUri + 'ListWorkflowStepExecutions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Applies a policy to a component. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutComponentPolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
		 * Put PutComponentPolicy
		 * @return {PutComponentPolicyResponse} Success
		 */
		PutComponentPolicy(requestBody: PutComponentPolicyPutBody): Observable<PutComponentPolicyResponse> {
			return this.http.put<PutComponentPolicyResponse>(this.baseUri + 'PutComponentPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Applies a policy to a container image. We recommend that you call the RAM API CreateResourceShare (https://docs.aws.amazon.com//ram/latest/APIReference/API_CreateResourceShare.html) to share resources. If you call the Image Builder API <code>PutContainerImagePolicy</code>, you must also call the RAM API PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com//ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) in order for the resource to be visible to all principals with whom the resource is shared.
		 * Put PutContainerRecipePolicy
		 * @return {PutContainerRecipePolicyResponse} Success
		 */
		PutContainerRecipePolicy(requestBody: PutContainerRecipePolicyPutBody): Observable<PutContainerRecipePolicyResponse> {
			return this.http.put<PutContainerRecipePolicyResponse>(this.baseUri + 'PutContainerRecipePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Applies a policy to an image. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImagePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
		 * Put PutImagePolicy
		 * @return {PutImagePolicyResponse} Success
		 */
		PutImagePolicy(requestBody: PutImagePolicyPutBody): Observable<PutImagePolicyResponse> {
			return this.http.put<PutImagePolicyResponse>(this.baseUri + 'PutImagePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Applies a policy to an image recipe. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImageRecipePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
		 * Put PutImageRecipePolicy
		 * @return {PutImageRecipePolicyResponse} Success
		 */
		PutImageRecipePolicy(requestBody: PutImageRecipePolicyPutBody): Observable<PutImageRecipePolicyResponse> {
			return this.http.put<PutImageRecipePolicyResponse>(this.baseUri + 'PutImageRecipePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Manually triggers a pipeline to create an image.
		 * Put StartImagePipelineExecution
		 * @return {StartImagePipelineExecutionResponse} Success
		 */
		StartImagePipelineExecution(requestBody: StartImagePipelineExecutionPutBody): Observable<StartImagePipelineExecutionResponse> {
			return this.http.put<StartImagePipelineExecutionResponse>(this.baseUri + 'StartImagePipelineExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a tag from a resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource that you want to untag.
		 * @param {Array<string>} tagKeys The tag keys to remove from the resource.
		 *     Minimum items: 1    Maximum items: 50
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
		 * Put UpdateDistributionConfiguration
		 * @return {UpdateDistributionConfigurationResponse} Success
		 */
		UpdateDistributionConfiguration(requestBody: UpdateDistributionConfigurationPutBody): Observable<UpdateDistributionConfigurationResponse> {
			return this.http.put<UpdateDistributionConfigurationResponse>(this.baseUri + 'UpdateDistributionConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates an image pipeline. Image pipelines enable you to automate the creation and distribution of images.</p> <note> <p>UpdateImagePipeline does not support selective updates for the pipeline. You must specify all of the required properties in the update request, not just the properties that have changed.</p> </note>
		 * Put UpdateImagePipeline
		 * @return {UpdateImagePipelineResponse} Success
		 */
		UpdateImagePipeline(requestBody: UpdateImagePipelinePutBody): Observable<UpdateImagePipelineResponse> {
			return this.http.put<UpdateImagePipelineResponse>(this.baseUri + 'UpdateImagePipeline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
		 * Put UpdateInfrastructureConfiguration
		 * @return {UpdateInfrastructureConfigurationResponse} Success
		 */
		UpdateInfrastructureConfiguration(requestBody: UpdateInfrastructureConfigurationPutBody): Observable<UpdateInfrastructureConfigurationResponse> {
			return this.http.put<UpdateInfrastructureConfigurationResponse>(this.baseUri + 'UpdateInfrastructureConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CancelImageCreationPutBody {

		/**
		 * The Amazon Resource Name (ARN) of the image that you want to cancel creation for.
		 * Required
		 */
		imageBuildVersionArn: string;

		/**
		 * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a> in the <i>Amazon EC2 API Reference</i>.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: string;
	}
	export interface CancelImageCreationPutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the image that you want to cancel creation for.
		 * Required
		 */
		imageBuildVersionArn: FormControl<string | null | undefined>,

		/**
		 * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a> in the <i>Amazon EC2 API Reference</i>.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCancelImageCreationPutBodyFormGroup() {
		return new FormGroup<CancelImageCreationPutBodyFormProperties>({
			imageBuildVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image/[a-z0-9-_]+/[0-9]+\.[0-9]+\.[0-9]+/[0-9]+$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface CreateComponentPutBody {

		/**
		 * The name of the component.
		 * Required
		 */
		name: string;

		/**
		 * <p>The semantic version of the component. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> </note>
		 * Required
		 */
		semanticVersion: string;

		/**
		 * Describes the contents of the component.
		 * Min length: 1
		 * Max length: 1024
		 */
		description?: string | null;

		/**
		 * The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of this component.
		 * Min length: 1
		 * Max length: 1024
		 */
		changeDescription?: string | null;

		/**
		 * The operating system platform of the component.
		 * Required
		 */
		platform: Platform;

		/**
		 * The operating system (OS) version supported by the component. If the OS information is available, a prefix match is performed against the base image OS version during image recipe creation.
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		supportedOsVersions?: Array<string>;

		/**
		 * Component <code>data</code> contains inline YAML document content for the component. Alternatively, you can specify the <code>uri</code> of a YAML document file stored in Amazon S3. However, you cannot specify both properties.
		 * Min length: 1
		 * Max length: 16000
		 */
		data?: string | null;

		/** <p>The <code>uri</code> of a YAML component document file. This must be an S3 URL (<code>s3://bucket/key</code>), and the requester must have permission to access the S3 bucket it points to. If you use Amazon S3, you can specify component content up to your service quota.</p> <p>Alternatively, you can specify the YAML document inline, using the component <code>data</code> property. You cannot specify both properties.</p> */
		uri?: string | null;

		/**
		 * The ID of the KMS key that is used to encrypt this component.
		 * Min length: 1
		 * Max length: 1024
		 */
		kmsKeyId?: string | null;

		/** The tags that apply to the component. */
		tags?: {[id: string]: string };

		/**
		 * The idempotency token of the component.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: string;
	}
	export interface CreateComponentPutBodyFormProperties {

		/**
		 * The name of the component.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * <p>The semantic version of the component. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> </note>
		 * Required
		 */
		semanticVersion: FormControl<string | null | undefined>,

		/**
		 * Describes the contents of the component.
		 * Min length: 1
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of this component.
		 * Min length: 1
		 * Max length: 1024
		 */
		changeDescription: FormControl<string | null | undefined>,

		/**
		 * The operating system platform of the component.
		 * Required
		 */
		platform: FormControl<Platform | null | undefined>,

		/**
		 * Component <code>data</code> contains inline YAML document content for the component. Alternatively, you can specify the <code>uri</code> of a YAML document file stored in Amazon S3. However, you cannot specify both properties.
		 * Min length: 1
		 * Max length: 16000
		 */
		data: FormControl<string | null | undefined>,

		/** <p>The <code>uri</code> of a YAML component document file. This must be an S3 URL (<code>s3://bucket/key</code>), and the requester must have permission to access the S3 bucket it points to. If you use Amazon S3, you can specify component content up to your service quota.</p> <p>Alternatively, you can specify the YAML document inline, using the component <code>data</code> property. You cannot specify both properties.</p> */
		uri: FormControl<string | null | undefined>,

		/**
		 * The ID of the KMS key that is used to encrypt this component.
		 * Min length: 1
		 * Max length: 1024
		 */
		kmsKeyId: FormControl<string | null | undefined>,

		/** The tags that apply to the component. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The idempotency token of the component.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateComponentPutBodyFormGroup() {
		return new FormGroup<CreateComponentPutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			semanticVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]+\.[0-9]+\.[0-9]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			changeDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			platform: new FormControl<Platform | null | undefined>(undefined, [Validators.required]),
			data: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(16000), Validators.pattern('[^\x00]+')]),
			uri: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface CreateContainerRecipePutBody {

		/**
		 * The type of container to create.
		 * Required
		 */
		containerType: ContainerType;

		/**
		 * The name of the container recipe.
		 * Required
		 */
		name: string;

		/**
		 * The description of the container recipe.
		 * Min length: 1
		 * Max length: 1024
		 */
		description?: string | null;

		/**
		 * <p>The semantic version of the container recipe. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> </note>
		 * Required
		 */
		semanticVersion: string;

		/**
		 * Components for build and test that are included in the container recipe. Recipes require a minimum of one build component, and can have a maximum of 20 build and test components in any combination.
		 * Required
		 * Minimum items: 1
		 */
		components: Array<ComponentConfiguration>;

		/** Defines a custom base AMI and block device mapping configurations of an instance used for building and testing container images. */
		instanceConfiguration?: CreateContainerRecipePutBodyInstanceConfiguration;

		/**
		 * The Dockerfile template used to build your image as an inline data blob.
		 * Min length: 1
		 * Max length: 16000
		 */
		dockerfileTemplateData?: string | null;

		/** The Amazon S3 URI for the Dockerfile that will be used to build your container image. */
		dockerfileTemplateUri?: string | null;

		/** Specifies the operating system platform when you use a custom base image. */
		platformOverride?: Platform | null;

		/**
		 * Specifies the operating system version for the base image.
		 * Min length: 1
		 * Max length: 1024
		 */
		imageOsVersionOverride?: string | null;

		/**
		 * The base image for the container recipe.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		parentImage: string;

		/** Tags that are attached to the container recipe. */
		tags?: {[id: string]: string };

		/**
		 * The working directory for use during build and test workflows.
		 * Min length: 1
		 * Max length: 1024
		 */
		workingDirectory?: string | null;

		/**
		 * The container repository where the output container image is stored.
		 * Required
		 */
		targetRepository: CreateContainerRecipePutBodyTargetRepository;

		/**
		 * Identifies which KMS key is used to encrypt the container image.
		 * Min length: 1
		 * Max length: 1024
		 */
		kmsKeyId?: string | null;

		/**
		 * The client token used to make this request idempotent.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: string;
	}
	export interface CreateContainerRecipePutBodyFormProperties {

		/**
		 * The type of container to create.
		 * Required
		 */
		containerType: FormControl<ContainerType | null | undefined>,

		/**
		 * The name of the container recipe.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description of the container recipe.
		 * Min length: 1
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * <p>The semantic version of the container recipe. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> </note>
		 * Required
		 */
		semanticVersion: FormControl<string | null | undefined>,

		/**
		 * The Dockerfile template used to build your image as an inline data blob.
		 * Min length: 1
		 * Max length: 16000
		 */
		dockerfileTemplateData: FormControl<string | null | undefined>,

		/** The Amazon S3 URI for the Dockerfile that will be used to build your container image. */
		dockerfileTemplateUri: FormControl<string | null | undefined>,

		/** Specifies the operating system platform when you use a custom base image. */
		platformOverride: FormControl<Platform | null | undefined>,

		/**
		 * Specifies the operating system version for the base image.
		 * Min length: 1
		 * Max length: 1024
		 */
		imageOsVersionOverride: FormControl<string | null | undefined>,

		/**
		 * The base image for the container recipe.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		parentImage: FormControl<string | null | undefined>,

		/** Tags that are attached to the container recipe. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The working directory for use during build and test workflows.
		 * Min length: 1
		 * Max length: 1024
		 */
		workingDirectory: FormControl<string | null | undefined>,

		/**
		 * Identifies which KMS key is used to encrypt the container image.
		 * Min length: 1
		 * Max length: 1024
		 */
		kmsKeyId: FormControl<string | null | undefined>,

		/**
		 * The client token used to make this request idempotent.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateContainerRecipePutBodyFormGroup() {
		return new FormGroup<CreateContainerRecipePutBodyFormProperties>({
			containerType: new FormControl<ContainerType | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			semanticVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]+\.[0-9]+\.[0-9]+$')]),
			dockerfileTemplateData: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(16000), Validators.pattern('[^\x00]+')]),
			dockerfileTemplateUri: new FormControl<string | null | undefined>(undefined),
			platformOverride: new FormControl<Platform | null | undefined>(undefined),
			imageOsVersionOverride: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			parentImage: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			workingDirectory: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			kmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface CreateContainerRecipePutBodyInstanceConfiguration {
		image?: string;
		blockDeviceMappings?: Array<InstanceBlockDeviceMapping>;
	}
	export interface CreateContainerRecipePutBodyInstanceConfigurationFormProperties {
		image: FormControl<string | null | undefined>,
	}
	export function CreateCreateContainerRecipePutBodyInstanceConfigurationFormGroup() {
		return new FormGroup<CreateContainerRecipePutBodyInstanceConfigurationFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateContainerRecipePutBodyTargetRepository {
		service?: ContainerRepositoryService;
		repositoryName?: string;
	}
	export interface CreateContainerRecipePutBodyTargetRepositoryFormProperties {
		service: FormControl<ContainerRepositoryService | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateCreateContainerRecipePutBodyTargetRepositoryFormGroup() {
		return new FormGroup<CreateContainerRecipePutBodyTargetRepositoryFormProperties>({
			service: new FormControl<ContainerRepositoryService | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDistributionConfigurationPutBody {

		/**
		 * The name of the distribution configuration.
		 * Required
		 */
		name: string;

		/**
		 * The description of the distribution configuration.
		 * Min length: 1
		 * Max length: 1024
		 */
		description?: string | null;

		/**
		 * The distributions of the distribution configuration.
		 * Required
		 */
		distributions: Array<Distribution>;

		/** The tags of the distribution configuration. */
		tags?: {[id: string]: string };

		/**
		 * The idempotency token of the distribution configuration.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: string;
	}
	export interface CreateDistributionConfigurationPutBodyFormProperties {

		/**
		 * The name of the distribution configuration.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description of the distribution configuration.
		 * Min length: 1
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/** The tags of the distribution configuration. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The idempotency token of the distribution configuration.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateDistributionConfigurationPutBodyFormGroup() {
		return new FormGroup<CreateDistributionConfigurationPutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface CreateImagePutBody {

		/** The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed. */
		imageRecipeArn?: string | null;

		/** The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested. */
		containerRecipeArn?: string | null;

		/** The Amazon Resource Name (ARN) of the distribution configuration that defines and configures the outputs of your pipeline. */
		distributionConfigurationArn?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the infrastructure configuration that defines the environment in which your image will be built and tested.
		 * Required
		 */
		infrastructureConfigurationArn: string;

		/** Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it. */
		imageTestsConfiguration?: CreateImagePutBodyImageTestsConfiguration;

		/** Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. */
		enhancedImageMetadataEnabled?: boolean | null;

		/** The tags of the image. */
		tags?: {[id: string]: string };

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: string;

		/** Contains settings for Image Builder image resource and container image scans. */
		imageScanningConfiguration?: CreateImagePutBodyImageScanningConfiguration;
	}
	export interface CreateImagePutBodyFormProperties {

		/** The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed. */
		imageRecipeArn: FormControl<string | null | undefined>,

		/** The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested. */
		containerRecipeArn: FormControl<string | null | undefined>,

		/** The Amazon Resource Name (ARN) of the distribution configuration that defines and configures the outputs of your pipeline. */
		distributionConfigurationArn: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the infrastructure configuration that defines the environment in which your image will be built and tested.
		 * Required
		 */
		infrastructureConfigurationArn: FormControl<string | null | undefined>,

		/** Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. */
		enhancedImageMetadataEnabled: FormControl<boolean | null | undefined>,

		/** The tags of the image. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateImagePutBodyFormGroup() {
		return new FormGroup<CreateImagePutBodyFormProperties>({
			imageRecipeArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-recipe/[a-z0-9-_]+/[0-9]+\.[0-9]+\.[0-9]+$')]),
			containerRecipeArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):container-recipe/[a-z0-9-_]+/[0-9]+\.[0-9]+\.[0-9]+$')]),
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):distribution-configuration/[a-z0-9-_]+$')]),
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):infrastructure-configuration/[a-z0-9-_]+$')]),
			enhancedImageMetadataEnabled: new FormControl<boolean | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface CreateImagePutBodyImageTestsConfiguration {
		imageTestsEnabled?: boolean | null;
		timeoutMinutes?: number | null;
	}
	export interface CreateImagePutBodyImageTestsConfigurationFormProperties {
		imageTestsEnabled: FormControl<boolean | null | undefined>,
		timeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateCreateImagePutBodyImageTestsConfigurationFormGroup() {
		return new FormGroup<CreateImagePutBodyImageTestsConfigurationFormProperties>({
			imageTestsEnabled: new FormControl<boolean | null | undefined>(undefined),
			timeoutMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateImagePutBodyImageScanningConfiguration {
		imageScanningEnabled?: boolean | null;
		ecrConfiguration?: EcrConfiguration;
	}
	export interface CreateImagePutBodyImageScanningConfigurationFormProperties {
		imageScanningEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateImagePutBodyImageScanningConfigurationFormGroup() {
		return new FormGroup<CreateImagePutBodyImageScanningConfigurationFormProperties>({
			imageScanningEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateImagePipelinePutBody {

		/**
		 * The name of the image pipeline.
		 * Required
		 */
		name: string;

		/**
		 * The description of the image pipeline.
		 * Min length: 1
		 * Max length: 1024
		 */
		description?: string | null;

		/** The Amazon Resource Name (ARN) of the image recipe that will be used to configure images created by this image pipeline. */
		imageRecipeArn?: string | null;

		/** The Amazon Resource Name (ARN) of the container recipe that is used to configure images created by this container pipeline. */
		containerRecipeArn?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images created by this image pipeline.
		 * Required
		 */
		infrastructureConfigurationArn: string;

		/** The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images created by this image pipeline. */
		distributionConfigurationArn?: string | null;

		/** Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it. */
		imageTestsConfiguration?: CreateImagePipelinePutBodyImageTestsConfiguration;

		/** Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. */
		enhancedImageMetadataEnabled?: boolean | null;

		/** A schedule configures how often and when a pipeline will automatically create a new image. */
		schedule?: CreateImagePipelinePutBodySchedule;

		/** The status of the image pipeline. */
		status?: PipelineStatus | null;

		/** The tags of the image pipeline. */
		tags?: {[id: string]: string };

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: string;

		/** Contains settings for Image Builder image resource and container image scans. */
		imageScanningConfiguration?: CreateImagePipelinePutBodyImageScanningConfiguration;
	}
	export interface CreateImagePipelinePutBodyFormProperties {

		/**
		 * The name of the image pipeline.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description of the image pipeline.
		 * Min length: 1
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/** The Amazon Resource Name (ARN) of the image recipe that will be used to configure images created by this image pipeline. */
		imageRecipeArn: FormControl<string | null | undefined>,

		/** The Amazon Resource Name (ARN) of the container recipe that is used to configure images created by this container pipeline. */
		containerRecipeArn: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images created by this image pipeline.
		 * Required
		 */
		infrastructureConfigurationArn: FormControl<string | null | undefined>,

		/** The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images created by this image pipeline. */
		distributionConfigurationArn: FormControl<string | null | undefined>,

		/** Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. */
		enhancedImageMetadataEnabled: FormControl<boolean | null | undefined>,

		/** The status of the image pipeline. */
		status: FormControl<PipelineStatus | null | undefined>,

		/** The tags of the image pipeline. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateImagePipelinePutBodyFormGroup() {
		return new FormGroup<CreateImagePipelinePutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			imageRecipeArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-recipe/[a-z0-9-_]+/[0-9]+\.[0-9]+\.[0-9]+$')]),
			containerRecipeArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):container-recipe/[a-z0-9-_]+/[0-9]+\.[0-9]+\.[0-9]+$')]),
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):infrastructure-configuration/[a-z0-9-_]+$')]),
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):distribution-configuration/[a-z0-9-_]+$')]),
			enhancedImageMetadataEnabled: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<PipelineStatus | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface CreateImagePipelinePutBodyImageTestsConfiguration {
		imageTestsEnabled?: boolean | null;
		timeoutMinutes?: number | null;
	}
	export interface CreateImagePipelinePutBodyImageTestsConfigurationFormProperties {
		imageTestsEnabled: FormControl<boolean | null | undefined>,
		timeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateCreateImagePipelinePutBodyImageTestsConfigurationFormGroup() {
		return new FormGroup<CreateImagePipelinePutBodyImageTestsConfigurationFormProperties>({
			imageTestsEnabled: new FormControl<boolean | null | undefined>(undefined),
			timeoutMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateImagePipelinePutBodySchedule {
		scheduleExpression?: string;
		timezone?: string;
		pipelineExecutionStartCondition?: PipelineExecutionStartCondition;
	}
	export interface CreateImagePipelinePutBodyScheduleFormProperties {
		scheduleExpression: FormControl<string | null | undefined>,
		timezone: FormControl<string | null | undefined>,
		pipelineExecutionStartCondition: FormControl<PipelineExecutionStartCondition | null | undefined>,
	}
	export function CreateCreateImagePipelinePutBodyScheduleFormGroup() {
		return new FormGroup<CreateImagePipelinePutBodyScheduleFormProperties>({
			scheduleExpression: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			pipelineExecutionStartCondition: new FormControl<PipelineExecutionStartCondition | null | undefined>(undefined),
		});

	}

	export interface CreateImagePipelinePutBodyImageScanningConfiguration {
		imageScanningEnabled?: boolean | null;
		ecrConfiguration?: EcrConfiguration;
	}
	export interface CreateImagePipelinePutBodyImageScanningConfigurationFormProperties {
		imageScanningEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateImagePipelinePutBodyImageScanningConfigurationFormGroup() {
		return new FormGroup<CreateImagePipelinePutBodyImageScanningConfigurationFormProperties>({
			imageScanningEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateImageRecipePutBody {

		/**
		 * The name of the image recipe.
		 * Required
		 */
		name: string;

		/**
		 * The description of the image recipe.
		 * Min length: 1
		 * Max length: 1024
		 */
		description?: string | null;

		/**
		 * <p>The semantic version of the image recipe. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> </note>
		 * Required
		 */
		semanticVersion: string;

		/**
		 * The components included in the image recipe.
		 * Required
		 * Minimum items: 1
		 */
		components: Array<ComponentConfiguration>;

		/**
		 * The base image of the image recipe. The value of the string can be the ARN of the base image or an AMI ID. The format for the ARN follows this example: <code>arn:aws:imagebuilder:us-west-2:aws:image/windows-server-2016-english-full-base-x86/x.x.x</code>. You can provide the specific version that you want to use, or you can use a wildcard in all of the fields. If you enter an AMI ID for the string value, you must have access to the AMI, and the AMI must be in the same Region in which you are using Image Builder.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		parentImage: string;

		/** The block device mappings of the image recipe. */
		blockDeviceMappings?: Array<InstanceBlockDeviceMapping>;

		/** The tags of the image recipe. */
		tags?: {[id: string]: string };

		/**
		 * The working directory used during build and test workflows.
		 * Min length: 1
		 * Max length: 1024
		 */
		workingDirectory?: string | null;

		/** <p>In addition to your infrastructure configuration, these settings provide an extra layer of control over your build instances. You can also specify commands to run on launch for all of your build instances.</p> <p>Image Builder does not automatically install the Systems Manager agent on Windows instances. If your base image includes the Systems Manager agent, then the AMI that you create will also include the agent. For Linux instances, if the base image does not already include the Systems Manager agent, Image Builder installs it. For Linux instances where Image Builder installs the Systems Manager agent, you can choose whether to keep it for the AMI that you create.</p> */
		additionalInstanceConfiguration?: CreateImageRecipePutBodyAdditionalInstanceConfiguration;

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: string;
	}
	export interface CreateImageRecipePutBodyFormProperties {

		/**
		 * The name of the image recipe.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description of the image recipe.
		 * Min length: 1
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * <p>The semantic version of the image recipe. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> </note>
		 * Required
		 */
		semanticVersion: FormControl<string | null | undefined>,

		/**
		 * The base image of the image recipe. The value of the string can be the ARN of the base image or an AMI ID. The format for the ARN follows this example: <code>arn:aws:imagebuilder:us-west-2:aws:image/windows-server-2016-english-full-base-x86/x.x.x</code>. You can provide the specific version that you want to use, or you can use a wildcard in all of the fields. If you enter an AMI ID for the string value, you must have access to the AMI, and the AMI must be in the same Region in which you are using Image Builder.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		parentImage: FormControl<string | null | undefined>,

		/** The tags of the image recipe. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The working directory used during build and test workflows.
		 * Min length: 1
		 * Max length: 1024
		 */
		workingDirectory: FormControl<string | null | undefined>,

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateImageRecipePutBodyFormGroup() {
		return new FormGroup<CreateImageRecipePutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			semanticVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]+\.[0-9]+\.[0-9]+$')]),
			parentImage: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			workingDirectory: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface CreateImageRecipePutBodyAdditionalInstanceConfiguration {
		systemsManagerAgent?: SystemsManagerAgent;
		userDataOverride?: string;
	}
	export interface CreateImageRecipePutBodyAdditionalInstanceConfigurationFormProperties {
		userDataOverride: FormControl<string | null | undefined>,
	}
	export function CreateCreateImageRecipePutBodyAdditionalInstanceConfigurationFormGroup() {
		return new FormGroup<CreateImageRecipePutBodyAdditionalInstanceConfigurationFormProperties>({
			userDataOverride: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateInfrastructureConfigurationPutBody {

		/**
		 * The name of the infrastructure configuration.
		 * Required
		 */
		name: string;

		/**
		 * The description of the infrastructure configuration.
		 * Min length: 1
		 * Max length: 1024
		 */
		description?: string | null;

		/** The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability. */
		instanceTypes?: Array<string>;

		/**
		 * The instance profile to associate with the instance used to customize your Amazon EC2 AMI.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		instanceProfileName: string;

		/** The security group IDs to associate with the instance used to customize your Amazon EC2 AMI. */
		securityGroupIds?: Array<string>;

		/**
		 * The subnet ID in which to place the instance used to customize your Amazon EC2 AMI.
		 * Min length: 1
		 * Max length: 1024
		 */
		subnetId?: string | null;

		/** Logging configuration defines where Image Builder uploads your logs. */
		logging?: CreateInfrastructureConfigurationPutBodyLogging;

		/**
		 * The key pair of the infrastructure configuration. You can use this to log on to and debug the instance used to create your image.
		 * Min length: 1
		 * Max length: 1024
		 */
		keyPair?: string | null;

		/** The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails. */
		terminateInstanceOnFailure?: boolean | null;

		/** <p>The Amazon Resource Name (ARN) for the SNS topic to which we send image build event notifications.</p> <note> <p>EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys from other accounts. The key that is used to encrypt the SNS topic must reside in the account that the Image Builder service runs under.</p> </note> */
		snsTopicArn?: string | null;

		/** The tags attached to the resource created by Image Builder. */
		resourceTags?: {[id: string]: string };

		/** The instance metadata options that apply to the HTTP requests that pipeline builds use to launch EC2 build and test instances. For more information about instance metadata options, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 User Guide</i> </i> for Linux instances, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i> for Windows instances. */
		instanceMetadataOptions?: CreateInfrastructureConfigurationPutBodyInstanceMetadataOptions;

		/** The tags of the infrastructure configuration. */
		tags?: {[id: string]: string };

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: string;
	}
	export interface CreateInfrastructureConfigurationPutBodyFormProperties {

		/**
		 * The name of the infrastructure configuration.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description of the infrastructure configuration.
		 * Min length: 1
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The instance profile to associate with the instance used to customize your Amazon EC2 AMI.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		instanceProfileName: FormControl<string | null | undefined>,

		/**
		 * The subnet ID in which to place the instance used to customize your Amazon EC2 AMI.
		 * Min length: 1
		 * Max length: 1024
		 */
		subnetId: FormControl<string | null | undefined>,

		/**
		 * The key pair of the infrastructure configuration. You can use this to log on to and debug the instance used to create your image.
		 * Min length: 1
		 * Max length: 1024
		 */
		keyPair: FormControl<string | null | undefined>,

		/** The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails. */
		terminateInstanceOnFailure: FormControl<boolean | null | undefined>,

		/** <p>The Amazon Resource Name (ARN) for the SNS topic to which we send image build event notifications.</p> <note> <p>EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys from other accounts. The key that is used to encrypt the SNS topic must reside in the account that the Image Builder service runs under.</p> </note> */
		snsTopicArn: FormControl<string | null | undefined>,

		/** The tags attached to the resource created by Image Builder. */
		resourceTags: FormControl<{[id: string]: string } | null | undefined>,

		/** The tags of the infrastructure configuration. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateInfrastructureConfigurationPutBodyFormGroup() {
		return new FormGroup<CreateInfrastructureConfigurationPutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			instanceProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[\w+=,.@-]+$')]),
			subnetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			keyPair: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			terminateInstanceOnFailure: new FormControl<boolean | null | undefined>(undefined),
			snsTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:sns:[^:]+:[0-9]{12}:[a-zA-Z0-9-_]{1,256}$')]),
			resourceTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface CreateInfrastructureConfigurationPutBodyLogging {
		s3Logs?: S3Logs;
	}
	export interface CreateInfrastructureConfigurationPutBodyLoggingFormProperties {
	}
	export function CreateCreateInfrastructureConfigurationPutBodyLoggingFormGroup() {
		return new FormGroup<CreateInfrastructureConfigurationPutBodyLoggingFormProperties>({
		});

	}

	export interface CreateInfrastructureConfigurationPutBodyInstanceMetadataOptions {
		httpTokens?: string;
		httpPutResponseHopLimit?: number | null;
	}
	export interface CreateInfrastructureConfigurationPutBodyInstanceMetadataOptionsFormProperties {
		httpTokens: FormControl<string | null | undefined>,
		httpPutResponseHopLimit: FormControl<number | null | undefined>,
	}
	export function CreateCreateInfrastructureConfigurationPutBodyInstanceMetadataOptionsFormGroup() {
		return new FormGroup<CreateInfrastructureConfigurationPutBodyInstanceMetadataOptionsFormProperties>({
			httpTokens: new FormControl<string | null | undefined>(undefined),
			httpPutResponseHopLimit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ImportComponentPutBody {

		/**
		 * The name of the component.
		 * Required
		 */
		name: string;

		/**
		 * <p>The semantic version of the component. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>
		 * Required
		 */
		semanticVersion: string;

		/**
		 * The description of the component. Describes the contents of the component.
		 * Min length: 1
		 * Max length: 1024
		 */
		description?: string | null;

		/**
		 * The change description of the component. This description indicates the change that has been made in this version, or what makes this version different from other versions of this component.
		 * Min length: 1
		 * Max length: 1024
		 */
		changeDescription?: string | null;

		/**
		 * The type of the component denotes whether the component is used to build the image, or only to test it.
		 * Required
		 */
		type: ComponentType;

		/**
		 * The format of the resource that you want to import as a component.
		 * Required
		 */
		format: ComponentFormat;

		/**
		 * The platform of the component.
		 * Required
		 */
		platform: Platform;

		/**
		 * The data of the component. Used to specify the data inline. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component.
		 * Min length: 1
		 * Max length: 1024
		 */
		data?: string | null;

		/** The uri of the component. Must be an Amazon S3 URL and the requester must have permission to access the Amazon S3 bucket. If you use Amazon S3, you can specify component content up to your service quota. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component. */
		uri?: string | null;

		/**
		 * The ID of the KMS key that should be used to encrypt this component.
		 * Min length: 1
		 * Max length: 1024
		 */
		kmsKeyId?: string | null;

		/** The tags of the component. */
		tags?: {[id: string]: string };

		/**
		 * The idempotency token of the component.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: string;
	}
	export interface ImportComponentPutBodyFormProperties {

		/**
		 * The name of the component.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * <p>The semantic version of the component. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>
		 * Required
		 */
		semanticVersion: FormControl<string | null | undefined>,

		/**
		 * The description of the component. Describes the contents of the component.
		 * Min length: 1
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The change description of the component. This description indicates the change that has been made in this version, or what makes this version different from other versions of this component.
		 * Min length: 1
		 * Max length: 1024
		 */
		changeDescription: FormControl<string | null | undefined>,

		/**
		 * The type of the component denotes whether the component is used to build the image, or only to test it.
		 * Required
		 */
		type: FormControl<ComponentType | null | undefined>,

		/**
		 * The format of the resource that you want to import as a component.
		 * Required
		 */
		format: FormControl<ComponentFormat | null | undefined>,

		/**
		 * The platform of the component.
		 * Required
		 */
		platform: FormControl<Platform | null | undefined>,

		/**
		 * The data of the component. Used to specify the data inline. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component.
		 * Min length: 1
		 * Max length: 1024
		 */
		data: FormControl<string | null | undefined>,

		/** The uri of the component. Must be an Amazon S3 URL and the requester must have permission to access the Amazon S3 bucket. If you use Amazon S3, you can specify component content up to your service quota. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component. */
		uri: FormControl<string | null | undefined>,

		/**
		 * The ID of the KMS key that should be used to encrypt this component.
		 * Min length: 1
		 * Max length: 1024
		 */
		kmsKeyId: FormControl<string | null | undefined>,

		/** The tags of the component. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The idempotency token of the component.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateImportComponentPutBodyFormGroup() {
		return new FormGroup<ImportComponentPutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			semanticVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]+\.[0-9]+\.[0-9]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			changeDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			type: new FormControl<ComponentType | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<ComponentFormat | null | undefined>(undefined, [Validators.required]),
			platform: new FormControl<Platform | null | undefined>(undefined, [Validators.required]),
			data: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			uri: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface ImportVmImagePutBody {

		/**
		 * The name of the base image that is created by the import process.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		name: string;

		/**
		 * <p>The semantic version to attach to the base image that was created during the import process. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> </note>
		 * Required
		 */
		semanticVersion: string;

		/**
		 * The description for the base image that is created by the import process.
		 * Min length: 1
		 * Max length: 1024
		 */
		description?: string | null;

		/**
		 * The operating system platform for the imported VM.
		 * Required
		 */
		platform: Platform;

		/**
		 * The operating system version for the imported VM.
		 * Min length: 1
		 */
		osVersion?: string | null;

		/**
		 * The <code>importTaskId</code> (API) or <code>ImportTaskId</code> (CLI) from the Amazon EC2 VM import process. Image Builder retrieves information from the import process to pull in the AMI that is created from the VM source as the base image for your recipe.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		vmImportTaskId: string;

		/** Tags that are attached to the import resources. */
		tags?: {[id: string]: string };

		/**
		 * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a> in the <i>Amazon EC2 API Reference</i>.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: string;
	}
	export interface ImportVmImagePutBodyFormProperties {

		/**
		 * The name of the base image that is created by the import process.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * <p>The semantic version to attach to the base image that was created during the import process. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> </note>
		 * Required
		 */
		semanticVersion: FormControl<string | null | undefined>,

		/**
		 * The description for the base image that is created by the import process.
		 * Min length: 1
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The operating system platform for the imported VM.
		 * Required
		 */
		platform: FormControl<Platform | null | undefined>,

		/**
		 * The operating system version for the imported VM.
		 * Min length: 1
		 */
		osVersion: FormControl<string | null | undefined>,

		/**
		 * The <code>importTaskId</code> (API) or <code>ImportTaskId</code> (CLI) from the Amazon EC2 VM import process. Image Builder retrieves information from the import process to pull in the AMI that is created from the VM source as the base image for your recipe.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		vmImportTaskId: FormControl<string | null | undefined>,

		/** Tags that are attached to the import resources. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a> in the <i>Amazon EC2 API Reference</i>.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateImportVmImagePutBodyFormGroup() {
		return new FormGroup<ImportVmImagePutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			semanticVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]+\.[0-9]+\.[0-9]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			platform: new FormControl<Platform | null | undefined>(undefined, [Validators.required]),
			osVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			vmImportTaskId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface ListComponentBuildVersionsPostBody {

		/**
		 * The component version Amazon Resource Name (ARN) whose versions you want to list.
		 * Required
		 */
		componentVersionArn: string;

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken?: string | null;
	}
	export interface ListComponentBuildVersionsPostBodyFormProperties {

		/**
		 * The component version Amazon Resource Name (ARN) whose versions you want to list.
		 * Required
		 */
		componentVersionArn: FormControl<string | null | undefined>,

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentBuildVersionsPostBodyFormGroup() {
		return new FormGroup<ListComponentBuildVersionsPostBodyFormProperties>({
			componentVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):component/[a-z0-9-_]+/[0-9]+\.[0-9]+\.[0-9]+$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65535)]),
		});

	}

	export interface ListComponentsPostBody {

		/** Filters results based on the type of owner for the component. By default, this request returns a list of components that your account owns. To see results for other types of owners, you can specify components that Amazon manages, third party components, or components that other accounts have shared with you. */
		owner?: Ownership | null;

		/**
		 * <p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>description</code> </p> </li> <li> <p> <code>name</code> </p> </li> <li> <p> <code>platform</code> </p> </li> <li> <p> <code>supportedOsVersion</code> </p> </li> <li> <p> <code>type</code> </p> </li> <li> <p> <code>version</code> </p> </li> </ul>
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/** Returns the list of components for the specified name. */
		byName?: boolean | null;

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken?: string | null;
	}
	export interface ListComponentsPostBodyFormProperties {

		/** Filters results based on the type of owner for the component. By default, this request returns a list of components that your account owns. To see results for other types of owners, you can specify components that Amazon manages, third party components, or components that other accounts have shared with you. */
		owner: FormControl<Ownership | null | undefined>,

		/** Returns the list of components for the specified name. */
		byName: FormControl<boolean | null | undefined>,

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentsPostBodyFormGroup() {
		return new FormGroup<ListComponentsPostBodyFormProperties>({
			owner: new FormControl<Ownership | null | undefined>(undefined),
			byName: new FormControl<boolean | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65535)]),
		});

	}

	export interface ListContainerRecipesPostBody {

		/** Returns container recipes belonging to the specified owner, that have been shared with you. You can omit this field to return container recipes belonging to your account. */
		owner?: Ownership | null;

		/**
		 * <p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>containerType</code> </p> </li> <li> <p> <code>name</code> </p> </li> <li> <p> <code>parentImage</code> </p> </li> <li> <p> <code>platform</code> </p> </li> </ul>
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 1024
		 */
		nextToken?: string | null;
	}
	export interface ListContainerRecipesPostBodyFormProperties {

		/** Returns container recipes belonging to the specified owner, that have been shared with you. You can omit this field to return container recipes belonging to your account. */
		owner: FormControl<Ownership | null | undefined>,

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 1024
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListContainerRecipesPostBodyFormGroup() {
		return new FormGroup<ListContainerRecipesPostBodyFormProperties>({
			owner: new FormControl<Ownership | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListDistributionConfigurationsPostBody {

		/**
		 * You can filter on <code>name</code> to streamline results.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken?: string | null;
	}
	export interface ListDistributionConfigurationsPostBodyFormProperties {

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDistributionConfigurationsPostBodyFormGroup() {
		return new FormGroup<ListDistributionConfigurationsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65535)]),
		});

	}

	export interface ListImageBuildVersionsPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the image whose build versions you want to retrieve.
		 * Required
		 */
		imageVersionArn: string;

		/**
		 * <p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>name</code> </p> </li> <li> <p> <code>osVersion</code> </p> </li> <li> <p> <code>platform</code> </p> </li> <li> <p> <code>type</code> </p> </li> <li> <p> <code>version</code> </p> </li> </ul>
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken?: string | null;
	}
	export interface ListImageBuildVersionsPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the image whose build versions you want to retrieve.
		 * Required
		 */
		imageVersionArn: FormControl<string | null | undefined>,

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImageBuildVersionsPostBodyFormGroup() {
		return new FormGroup<ListImageBuildVersionsPostBodyFormProperties>({
			imageVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image/[a-z0-9-_]+/[0-9]+\.[0-9]+\.[0-9]+$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65535)]),
		});

	}

	export interface ListImagePackagesPostBody {

		/**
		 * Filter results for the ListImagePackages request by the Image Build Version ARN
		 * Required
		 */
		imageBuildVersionArn: string;

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken?: string | null;
	}
	export interface ListImagePackagesPostBodyFormProperties {

		/**
		 * Filter results for the ListImagePackages request by the Image Build Version ARN
		 * Required
		 */
		imageBuildVersionArn: FormControl<string | null | undefined>,

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImagePackagesPostBodyFormGroup() {
		return new FormGroup<ListImagePackagesPostBodyFormProperties>({
			imageBuildVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image/[a-z0-9-_]+/[0-9]+\.[0-9]+\.[0-9]+/[0-9]+$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65535)]),
		});

	}

	export interface ListImagePipelineImagesPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the image pipeline whose images you want to view.
		 * Required
		 */
		imagePipelineArn: string;

		/**
		 * <p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>name</code> </p> </li> <li> <p> <code>version</code> </p> </li> </ul>
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken?: string | null;
	}
	export interface ListImagePipelineImagesPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the image pipeline whose images you want to view.
		 * Required
		 */
		imagePipelineArn: FormControl<string | null | undefined>,

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImagePipelineImagesPostBodyFormGroup() {
		return new FormGroup<ListImagePipelineImagesPostBodyFormProperties>({
			imagePipelineArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-pipeline/[a-z0-9-_]+$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65535)]),
		});

	}

	export interface ListImagePipelinesPostBody {

		/**
		 * <p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>description</code> </p> </li> <li> <p> <code>distributionConfigurationArn</code> </p> </li> <li> <p> <code>imageRecipeArn</code> </p> </li> <li> <p> <code>infrastructureConfigurationArn</code> </p> </li> <li> <p> <code>name</code> </p> </li> <li> <p> <code>status</code> </p> </li> </ul>
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken?: string | null;
	}
	export interface ListImagePipelinesPostBodyFormProperties {

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImagePipelinesPostBodyFormGroup() {
		return new FormGroup<ListImagePipelinesPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65535)]),
		});

	}

	export interface ListImageRecipesPostBody {

		/** The owner defines which image recipes you want to list. By default, this request will only show image recipes owned by your account. You can use this field to specify if you want to view image recipes owned by yourself, by Amazon, or those image recipes that have been shared with you by other customers. */
		owner?: Ownership | null;

		/**
		 * <p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>name</code> </p> </li> <li> <p> <code>parentImage</code> </p> </li> <li> <p> <code>platform</code> </p> </li> </ul>
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken?: string | null;
	}
	export interface ListImageRecipesPostBodyFormProperties {

		/** The owner defines which image recipes you want to list. By default, this request will only show image recipes owned by your account. You can use this field to specify if you want to view image recipes owned by yourself, by Amazon, or those image recipes that have been shared with you by other customers. */
		owner: FormControl<Ownership | null | undefined>,

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImageRecipesPostBodyFormGroup() {
		return new FormGroup<ListImageRecipesPostBodyFormProperties>({
			owner: new FormControl<Ownership | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65535)]),
		});

	}

	export interface ListImageScanFindingAggregationsPostBody {

		/** A filter name and value pair that is used to return a more specific list of results from a list operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs. */
		filter?: ListImageScanFindingAggregationsPostBodyFilter;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken?: string | null;
	}
	export interface ListImageScanFindingAggregationsPostBodyFormProperties {

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImageScanFindingAggregationsPostBodyFormGroup() {
		return new FormGroup<ListImageScanFindingAggregationsPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65535)]),
		});

	}

	export interface ListImageScanFindingAggregationsPostBodyFilter {
		name?: string;
		values?: Array<string>;
	}
	export interface ListImageScanFindingAggregationsPostBodyFilterFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateListImageScanFindingAggregationsPostBodyFilterFormGroup() {
		return new FormGroup<ListImageScanFindingAggregationsPostBodyFilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImageScanFindingsPostBody {

		/**
		 * <p>An array of name value pairs that you can use to filter your results. You can use the following filters to streamline results:</p> <ul> <li> <p> <code>imageBuildVersionArn</code> </p> </li> <li> <p> <code>imagePipelineArn</code> </p> </li> <li> <p> <code>vulnerabilityId</code> </p> </li> <li> <p> <code>severity</code> </p> </li> </ul> <p>If you don't request a filter, then all findings in your account are listed.</p>
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<ImageScanFindingsFilter>;

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken?: string | null;
	}
	export interface ListImageScanFindingsPostBodyFormProperties {

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImageScanFindingsPostBodyFormGroup() {
		return new FormGroup<ListImageScanFindingsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65535)]),
		});

	}

	export interface ListImagesPostBody {

		/** The owner defines which images you want to list. By default, this request will only show images owned by your account. You can use this field to specify if you want to view images owned by yourself, by Amazon, or those images that have been shared with you by other customers. */
		owner?: Ownership | null;

		/**
		 * <p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>name</code> </p> </li> <li> <p> <code>osVersion</code> </p> </li> <li> <p> <code>platform</code> </p> </li> <li> <p> <code>type</code> </p> </li> <li> <p> <code>version</code> </p> </li> </ul>
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/** Requests a list of images with a specific recipe name. */
		byName?: boolean | null;

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken?: string | null;

		/** Includes deprecated images in the response list. */
		includeDeprecated?: boolean | null;
	}
	export interface ListImagesPostBodyFormProperties {

		/** The owner defines which images you want to list. By default, this request will only show images owned by your account. You can use this field to specify if you want to view images owned by yourself, by Amazon, or those images that have been shared with you by other customers. */
		owner: FormControl<Ownership | null | undefined>,

		/** Requests a list of images with a specific recipe name. */
		byName: FormControl<boolean | null | undefined>,

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken: FormControl<string | null | undefined>,

		/** Includes deprecated images in the response list. */
		includeDeprecated: FormControl<boolean | null | undefined>,
	}
	export function CreateListImagesPostBodyFormGroup() {
		return new FormGroup<ListImagesPostBodyFormProperties>({
			owner: new FormControl<Ownership | null | undefined>(undefined),
			byName: new FormControl<boolean | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65535)]),
			includeDeprecated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListInfrastructureConfigurationsPostBody {

		/**
		 * You can filter on <code>name</code> to streamline results.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken?: string | null;
	}
	export interface ListInfrastructureConfigurationsPostBodyFormProperties {

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInfrastructureConfigurationsPostBodyFormGroup() {
		return new FormGroup<ListInfrastructureConfigurationsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65535)]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to apply to the resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags to apply to the resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListWorkflowExecutionsPostBody {

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken?: string | null;

		/**
		 * List all workflow runtime instances for the specified image build version resource ARN.
		 * Required
		 */
		imageBuildVersionArn: string;
	}
	export interface ListWorkflowExecutionsPostBodyFormProperties {

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * List all workflow runtime instances for the specified image build version resource ARN.
		 * Required
		 */
		imageBuildVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateListWorkflowExecutionsPostBodyFormGroup() {
		return new FormGroup<ListWorkflowExecutionsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65535)]),
			imageBuildVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image/[a-z0-9-_]+/[0-9]+\.[0-9]+\.[0-9]+/[0-9]+$')]),
		});

	}

	export interface ListWorkflowStepExecutionsPostBody {

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken?: string | null;

		/**
		 * The unique identifier that Image Builder assigned to keep track of runtime details when it ran the workflow.
		 * Required
		 */
		workflowExecutionId: string;
	}
	export interface ListWorkflowStepExecutionsPostBodyFormProperties {

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Min length: 1
		 * Max length: 65535
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The unique identifier that Image Builder assigned to keep track of runtime details when it ran the workflow.
		 * Required
		 */
		workflowExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateListWorkflowStepExecutionsPostBodyFormGroup() {
		return new FormGroup<ListWorkflowStepExecutionsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65535)]),
			workflowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^wf-[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$')]),
		});

	}

	export interface PutComponentPolicyPutBody {

		/**
		 * The Amazon Resource Name (ARN) of the component that this policy should be applied to.
		 * Required
		 */
		componentArn: string;

		/**
		 * The policy to apply.
		 * Required
		 * Min length: 1
		 * Max length: 30000
		 */
		policy: string;
	}
	export interface PutComponentPolicyPutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the component that this policy should be applied to.
		 * Required
		 */
		componentArn: FormControl<string | null | undefined>,

		/**
		 * The policy to apply.
		 * Required
		 * Min length: 1
		 * Max length: 30000
		 */
		policy: FormControl<string | null | undefined>,
	}
	export function CreatePutComponentPolicyPutBodyFormGroup() {
		return new FormGroup<PutComponentPolicyPutBodyFormProperties>({
			componentArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):component/[a-z0-9-_]+/[0-9]+\.[0-9]+\.[0-9]+/[0-9]+$')]),
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(30000)]),
		});

	}

	export interface PutContainerRecipePolicyPutBody {

		/**
		 * The Amazon Resource Name (ARN) of the container recipe that this policy should be applied to.
		 * Required
		 */
		containerRecipeArn: string;

		/**
		 * The policy to apply to the container recipe.
		 * Required
		 * Min length: 1
		 * Max length: 30000
		 */
		policy: string;
	}
	export interface PutContainerRecipePolicyPutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the container recipe that this policy should be applied to.
		 * Required
		 */
		containerRecipeArn: FormControl<string | null | undefined>,

		/**
		 * The policy to apply to the container recipe.
		 * Required
		 * Min length: 1
		 * Max length: 30000
		 */
		policy: FormControl<string | null | undefined>,
	}
	export function CreatePutContainerRecipePolicyPutBodyFormGroup() {
		return new FormGroup<PutContainerRecipePolicyPutBodyFormProperties>({
			containerRecipeArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):container-recipe/[a-z0-9-_]+/[0-9]+\.[0-9]+\.[0-9]+$')]),
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(30000)]),
		});

	}

	export interface PutImagePolicyPutBody {

		/**
		 * The Amazon Resource Name (ARN) of the image that this policy should be applied to.
		 * Required
		 */
		imageArn: string;

		/**
		 * The policy to apply.
		 * Required
		 * Min length: 1
		 * Max length: 30000
		 */
		policy: string;
	}
	export interface PutImagePolicyPutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the image that this policy should be applied to.
		 * Required
		 */
		imageArn: FormControl<string | null | undefined>,

		/**
		 * The policy to apply.
		 * Required
		 * Min length: 1
		 * Max length: 30000
		 */
		policy: FormControl<string | null | undefined>,
	}
	export function CreatePutImagePolicyPutBodyFormGroup() {
		return new FormGroup<PutImagePolicyPutBodyFormProperties>({
			imageArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image/[a-z0-9-_]+/[0-9]+\.[0-9]+\.[0-9]+/[0-9]+$')]),
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(30000)]),
		});

	}

	export interface PutImageRecipePolicyPutBody {

		/**
		 * The Amazon Resource Name (ARN) of the image recipe that this policy should be applied to.
		 * Required
		 */
		imageRecipeArn: string;

		/**
		 * The policy to apply.
		 * Required
		 * Min length: 1
		 * Max length: 30000
		 */
		policy: string;
	}
	export interface PutImageRecipePolicyPutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the image recipe that this policy should be applied to.
		 * Required
		 */
		imageRecipeArn: FormControl<string | null | undefined>,

		/**
		 * The policy to apply.
		 * Required
		 * Min length: 1
		 * Max length: 30000
		 */
		policy: FormControl<string | null | undefined>,
	}
	export function CreatePutImageRecipePolicyPutBodyFormGroup() {
		return new FormGroup<PutImageRecipePolicyPutBodyFormProperties>({
			imageRecipeArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-recipe/[a-z0-9-_]+/[0-9]+\.[0-9]+\.[0-9]+$')]),
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(30000)]),
		});

	}

	export interface StartImagePipelineExecutionPutBody {

		/**
		 * The Amazon Resource Name (ARN) of the image pipeline that you want to manually invoke.
		 * Required
		 */
		imagePipelineArn: string;

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: string;
	}
	export interface StartImagePipelineExecutionPutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the image pipeline that you want to manually invoke.
		 * Required
		 */
		imagePipelineArn: FormControl<string | null | undefined>,

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartImagePipelineExecutionPutBodyFormGroup() {
		return new FormGroup<StartImagePipelineExecutionPutBodyFormProperties>({
			imagePipelineArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-pipeline/[a-z0-9-_]+$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface UpdateDistributionConfigurationPutBody {

		/**
		 * The Amazon Resource Name (ARN) of the distribution configuration that you want to update.
		 * Required
		 */
		distributionConfigurationArn: string;

		/**
		 * The description of the distribution configuration.
		 * Min length: 1
		 * Max length: 1024
		 */
		description?: string | null;

		/**
		 * The distributions of the distribution configuration.
		 * Required
		 */
		distributions: Array<Distribution>;

		/**
		 * The idempotency token of the distribution configuration.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: string;
	}
	export interface UpdateDistributionConfigurationPutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the distribution configuration that you want to update.
		 * Required
		 */
		distributionConfigurationArn: FormControl<string | null | undefined>,

		/**
		 * The description of the distribution configuration.
		 * Min length: 1
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The idempotency token of the distribution configuration.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDistributionConfigurationPutBodyFormGroup() {
		return new FormGroup<UpdateDistributionConfigurationPutBodyFormProperties>({
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):distribution-configuration/[a-z0-9-_]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface UpdateImagePipelinePutBody {

		/**
		 * The Amazon Resource Name (ARN) of the image pipeline that you want to update.
		 * Required
		 */
		imagePipelineArn: string;

		/**
		 * The description of the image pipeline.
		 * Min length: 1
		 * Max length: 1024
		 */
		description?: string | null;

		/** The Amazon Resource Name (ARN) of the image recipe that will be used to configure images updated by this image pipeline. */
		imageRecipeArn?: string | null;

		/** The Amazon Resource Name (ARN) of the container pipeline to update. */
		containerRecipeArn?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the infrastructure configuration that Image Builder uses to build images that this image pipeline has updated.
		 * Required
		 */
		infrastructureConfigurationArn: string;

		/** The Amazon Resource Name (ARN) of the distribution configuration that Image Builder uses to configure and distribute images that this image pipeline has updated. */
		distributionConfigurationArn?: string | null;

		/** Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it. */
		imageTestsConfiguration?: UpdateImagePipelinePutBodyImageTestsConfiguration;

		/** Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. */
		enhancedImageMetadataEnabled?: boolean | null;

		/** A schedule configures how often and when a pipeline will automatically create a new image. */
		schedule?: UpdateImagePipelinePutBodySchedule;

		/** The status of the image pipeline. */
		status?: PipelineStatus | null;

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: string;

		/** Contains settings for Image Builder image resource and container image scans. */
		imageScanningConfiguration?: UpdateImagePipelinePutBodyImageScanningConfiguration;
	}
	export interface UpdateImagePipelinePutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the image pipeline that you want to update.
		 * Required
		 */
		imagePipelineArn: FormControl<string | null | undefined>,

		/**
		 * The description of the image pipeline.
		 * Min length: 1
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/** The Amazon Resource Name (ARN) of the image recipe that will be used to configure images updated by this image pipeline. */
		imageRecipeArn: FormControl<string | null | undefined>,

		/** The Amazon Resource Name (ARN) of the container pipeline to update. */
		containerRecipeArn: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the infrastructure configuration that Image Builder uses to build images that this image pipeline has updated.
		 * Required
		 */
		infrastructureConfigurationArn: FormControl<string | null | undefined>,

		/** The Amazon Resource Name (ARN) of the distribution configuration that Image Builder uses to configure and distribute images that this image pipeline has updated. */
		distributionConfigurationArn: FormControl<string | null | undefined>,

		/** Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. */
		enhancedImageMetadataEnabled: FormControl<boolean | null | undefined>,

		/** The status of the image pipeline. */
		status: FormControl<PipelineStatus | null | undefined>,

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateImagePipelinePutBodyFormGroup() {
		return new FormGroup<UpdateImagePipelinePutBodyFormProperties>({
			imagePipelineArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-pipeline/[a-z0-9-_]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			imageRecipeArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-recipe/[a-z0-9-_]+/[0-9]+\.[0-9]+\.[0-9]+$')]),
			containerRecipeArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):container-recipe/[a-z0-9-_]+/[0-9]+\.[0-9]+\.[0-9]+$')]),
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):infrastructure-configuration/[a-z0-9-_]+$')]),
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):distribution-configuration/[a-z0-9-_]+$')]),
			enhancedImageMetadataEnabled: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<PipelineStatus | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface UpdateImagePipelinePutBodyImageTestsConfiguration {
		imageTestsEnabled?: boolean | null;
		timeoutMinutes?: number | null;
	}
	export interface UpdateImagePipelinePutBodyImageTestsConfigurationFormProperties {
		imageTestsEnabled: FormControl<boolean | null | undefined>,
		timeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateUpdateImagePipelinePutBodyImageTestsConfigurationFormGroup() {
		return new FormGroup<UpdateImagePipelinePutBodyImageTestsConfigurationFormProperties>({
			imageTestsEnabled: new FormControl<boolean | null | undefined>(undefined),
			timeoutMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateImagePipelinePutBodySchedule {
		scheduleExpression?: string;
		timezone?: string;
		pipelineExecutionStartCondition?: PipelineExecutionStartCondition;
	}
	export interface UpdateImagePipelinePutBodyScheduleFormProperties {
		scheduleExpression: FormControl<string | null | undefined>,
		timezone: FormControl<string | null | undefined>,
		pipelineExecutionStartCondition: FormControl<PipelineExecutionStartCondition | null | undefined>,
	}
	export function CreateUpdateImagePipelinePutBodyScheduleFormGroup() {
		return new FormGroup<UpdateImagePipelinePutBodyScheduleFormProperties>({
			scheduleExpression: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			pipelineExecutionStartCondition: new FormControl<PipelineExecutionStartCondition | null | undefined>(undefined),
		});

	}

	export interface UpdateImagePipelinePutBodyImageScanningConfiguration {
		imageScanningEnabled?: boolean | null;
		ecrConfiguration?: EcrConfiguration;
	}
	export interface UpdateImagePipelinePutBodyImageScanningConfigurationFormProperties {
		imageScanningEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateImagePipelinePutBodyImageScanningConfigurationFormGroup() {
		return new FormGroup<UpdateImagePipelinePutBodyImageScanningConfigurationFormProperties>({
			imageScanningEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateInfrastructureConfigurationPutBody {

		/**
		 * The Amazon Resource Name (ARN) of the infrastructure configuration that you want to update.
		 * Required
		 */
		infrastructureConfigurationArn: string;

		/**
		 * The description of the infrastructure configuration.
		 * Min length: 1
		 * Max length: 1024
		 */
		description?: string | null;

		/** The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability. */
		instanceTypes?: Array<string>;

		/**
		 * The instance profile to associate with the instance used to customize your Amazon EC2 AMI.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		instanceProfileName: string;

		/** The security group IDs to associate with the instance used to customize your Amazon EC2 AMI. */
		securityGroupIds?: Array<string>;

		/**
		 * The subnet ID to place the instance used to customize your Amazon EC2 AMI in.
		 * Min length: 1
		 * Max length: 1024
		 */
		subnetId?: string | null;

		/** Logging configuration defines where Image Builder uploads your logs. */
		logging?: UpdateInfrastructureConfigurationPutBodyLogging;

		/**
		 * The key pair of the infrastructure configuration. You can use this to log on to and debug the instance used to create your image.
		 * Min length: 1
		 * Max length: 1024
		 */
		keyPair?: string | null;

		/** The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails. */
		terminateInstanceOnFailure?: boolean | null;

		/** <p>The Amazon Resource Name (ARN) for the SNS topic to which we send image build event notifications.</p> <note> <p>EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys from other accounts. The key that is used to encrypt the SNS topic must reside in the account that the Image Builder service runs under.</p> </note> */
		snsTopicArn?: string | null;

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: string;

		/** The tags attached to the resource created by Image Builder. */
		resourceTags?: {[id: string]: string };

		/** The instance metadata options that apply to the HTTP requests that pipeline builds use to launch EC2 build and test instances. For more information about instance metadata options, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 User Guide</i> </i> for Linux instances, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i> for Windows instances. */
		instanceMetadataOptions?: UpdateInfrastructureConfigurationPutBodyInstanceMetadataOptions;
	}
	export interface UpdateInfrastructureConfigurationPutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the infrastructure configuration that you want to update.
		 * Required
		 */
		infrastructureConfigurationArn: FormControl<string | null | undefined>,

		/**
		 * The description of the infrastructure configuration.
		 * Min length: 1
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The instance profile to associate with the instance used to customize your Amazon EC2 AMI.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		instanceProfileName: FormControl<string | null | undefined>,

		/**
		 * The subnet ID to place the instance used to customize your Amazon EC2 AMI in.
		 * Min length: 1
		 * Max length: 1024
		 */
		subnetId: FormControl<string | null | undefined>,

		/**
		 * The key pair of the infrastructure configuration. You can use this to log on to and debug the instance used to create your image.
		 * Min length: 1
		 * Max length: 1024
		 */
		keyPair: FormControl<string | null | undefined>,

		/** The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails. */
		terminateInstanceOnFailure: FormControl<boolean | null | undefined>,

		/** <p>The Amazon Resource Name (ARN) for the SNS topic to which we send image build event notifications.</p> <note> <p>EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys from other accounts. The key that is used to encrypt the SNS topic must reside in the account that the Image Builder service runs under.</p> </note> */
		snsTopicArn: FormControl<string | null | undefined>,

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Min length: 1
		 * Max length: 36
		 */
		clientToken: FormControl<string | null | undefined>,

		/** The tags attached to the resource created by Image Builder. */
		resourceTags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpdateInfrastructureConfigurationPutBodyFormGroup() {
		return new FormGroup<UpdateInfrastructureConfigurationPutBodyFormProperties>({
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):infrastructure-configuration/[a-z0-9-_]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			instanceProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[\w+=,.@-]+$')]),
			subnetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			keyPair: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			terminateInstanceOnFailure: new FormControl<boolean | null | undefined>(undefined),
			snsTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:sns:[^:]+:[0-9]{12}:[a-zA-Z0-9-_]{1,256}$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
			resourceTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateInfrastructureConfigurationPutBodyLogging {
		s3Logs?: S3Logs;
	}
	export interface UpdateInfrastructureConfigurationPutBodyLoggingFormProperties {
	}
	export function CreateUpdateInfrastructureConfigurationPutBodyLoggingFormGroup() {
		return new FormGroup<UpdateInfrastructureConfigurationPutBodyLoggingFormProperties>({
		});

	}

	export interface UpdateInfrastructureConfigurationPutBodyInstanceMetadataOptions {
		httpTokens?: string;
		httpPutResponseHopLimit?: number | null;
	}
	export interface UpdateInfrastructureConfigurationPutBodyInstanceMetadataOptionsFormProperties {
		httpTokens: FormControl<string | null | undefined>,
		httpPutResponseHopLimit: FormControl<number | null | undefined>,
	}
	export function CreateUpdateInfrastructureConfigurationPutBodyInstanceMetadataOptionsFormGroup() {
		return new FormGroup<UpdateInfrastructureConfigurationPutBodyInstanceMetadataOptionsFormProperties>({
			httpTokens: new FormControl<string | null | undefined>(undefined),
			httpPutResponseHopLimit: new FormControl<number | null | undefined>(undefined),
		});

	}

}

