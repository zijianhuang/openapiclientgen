import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelImageCreationResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken?: string | null;
		imageBuildVersionArn?: string | null;
	}
	export interface CancelImageCreationResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
		imageBuildVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateCancelImageCreationResponseFormGroup() {
		return new FormGroup<CancelImageCreationResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36)]),
			imageBuildVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image/[a-z0-9-_]+/\d+\.\d+\.\d+/\d+$')]),
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

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken?: string | null;
		componentBuildVersionArn?: string | null;
	}
	export interface CreateComponentResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
		componentBuildVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateComponentResponseFormGroup() {
		return new FormGroup<CreateComponentResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36)]),
			componentBuildVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):component/[a-z0-9-_]+/\d+\.\d+\.\d+/\d+$')]),
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

	export interface CreateDistributionConfigurationResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken?: string | null;
		distributionConfigurationArn?: string | null;
	}
	export interface CreateDistributionConfigurationResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
		distributionConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDistributionConfigurationResponseFormGroup() {
		return new FormGroup<CreateDistributionConfigurationResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36)]),
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):distribution-configuration/[a-z0-9-_]+$')]),
		});

	}


	/**  Defines the settings for a specific Region.  */
	export interface Distribution {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		region: string;

		/** Define and configure the output AMIs of the pipeline. */
		amiDistributionConfiguration?: AmiDistributionConfiguration;
		licenseConfigurationArns?: Array<string>;
	}

	/**  Defines the settings for a specific Region.  */
	export interface DistributionFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		region: FormControl<string | null | undefined>,
	}
	export function CreateDistributionFormGroup() {
		return new FormGroup<DistributionFormProperties>({
			region: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/**  Define and configure the output AMIs of the pipeline.  */
	export interface AmiDistributionConfiguration {

		/**
		 * Max length: 127
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;
		amiTags?: TagMap;

		/** Describes the configuration for a launch permission. The launch permission modification request is sent to the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">EC2 ModifyImageAttribute</a> API on behalf of the user for each Region they have selected to distribute the AMI. */
		launchPermission?: LaunchPermissionConfiguration;
	}

	/**  Define and configure the output AMIs of the pipeline.  */
	export interface AmiDistributionConfigurationFormProperties {

		/**
		 * Max length: 127
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateAmiDistributionConfigurationFormGroup() {
		return new FormGroup<AmiDistributionConfigurationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(127), Validators.pattern('^[-_A-Za-z0-9{][-_A-Za-z0-9\s:{}]+[-_A-Za-z0-9}]$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
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


	/** Describes the configuration for a launch permission. The launch permission modification request is sent to the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">EC2 ModifyImageAttribute</a> API on behalf of the user for each Region they have selected to distribute the AMI. */
	export interface LaunchPermissionConfiguration {
		userIds?: Array<string>;
		userGroups?: Array<string>;
	}

	/** Describes the configuration for a launch permission. The launch permission modification request is sent to the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">EC2 ModifyImageAttribute</a> API on behalf of the user for each Region they have selected to distribute the AMI. */
	export interface LaunchPermissionConfigurationFormProperties {
	}
	export function CreateLaunchPermissionConfigurationFormGroup() {
		return new FormGroup<LaunchPermissionConfigurationFormProperties>({
		});

	}

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface CreateImageResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken?: string | null;
		imageBuildVersionArn?: string | null;
	}
	export interface CreateImageResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
		imageBuildVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateImageResponseFormGroup() {
		return new FormGroup<CreateImageResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36)]),
			imageBuildVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image/[a-z0-9-_]+/\d+\.\d+\.\d+/\d+$')]),
		});

	}

	export interface CreateImagePipelineResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken?: string | null;
		imagePipelineArn?: string | null;
	}
	export interface CreateImagePipelineResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
		imagePipelineArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateImagePipelineResponseFormGroup() {
		return new FormGroup<CreateImagePipelineResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36)]),
			imagePipelineArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-pipeline/[a-z0-9-_]+$')]),
		});

	}

	export enum PipelineExecutionStartCondition { EXPRESSION_MATCH_ONLY = 0, EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE = 1 }

	export interface CreateImageRecipeResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken?: string | null;
		imageRecipeArn?: string | null;
	}
	export interface CreateImageRecipeResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
		imageRecipeArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateImageRecipeResponseFormGroup() {
		return new FormGroup<CreateImageRecipeResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36)]),
			imageRecipeArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-recipe/[a-z0-9-_]+/\d+\.\d+\.\d+$')]),
		});

	}


	/**  Configuration details of the component.  */
	export interface ComponentConfiguration {

		/** Required */
		componentArn: string;
	}

	/**  Configuration details of the component.  */
	export interface ComponentConfigurationFormProperties {

		/** Required */
		componentArn: FormControl<string | null | undefined>,
	}
	export function CreateComponentConfigurationFormGroup() {
		return new FormGroup<ComponentConfigurationFormProperties>({
			componentArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):component/[a-z0-9-_]+/(?:(?:(\d+|x)\.(\d+|x)\.(\d+|x))|(?:\d+\.\d+\.\d+/\d+))$')]),
		});

	}


	/** Defines block device mappings for the instance used to configure your image. */
	export interface InstanceBlockDeviceMapping {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		deviceName?: string | null;

		/** Amazon EBS-specific block device mapping specifications. */
		ebs?: EbsInstanceBlockDeviceSpecification;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		virtualName?: string | null;

		/**
		 * Max length: 0
		 * Min length: 0
		 */
		noDevice?: string | null;
	}

	/** Defines block device mappings for the instance used to configure your image. */
	export interface InstanceBlockDeviceMappingFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		deviceName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		virtualName: FormControl<string | null | undefined>,

		/**
		 * Max length: 0
		 * Min length: 0
		 */
		noDevice: FormControl<string | null | undefined>,
	}
	export function CreateInstanceBlockDeviceMappingFormGroup() {
		return new FormGroup<InstanceBlockDeviceMappingFormProperties>({
			deviceName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			virtualName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			noDevice: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(0)]),
		});

	}


	/** Amazon EBS-specific block device mapping specifications. */
	export interface EbsInstanceBlockDeviceSpecification {
		encrypted?: boolean | null;
		deleteOnTermination?: boolean | null;

		/**
		 * Minimum: 100
		 * Maximum: 10000
		 */
		iops?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		kmsKeyId?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		snapshotId?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 16000
		 */
		volumeSize?: number | null;
		volumeType?: EbsInstanceBlockDeviceSpecificationVolumeType | null;
	}

	/** Amazon EBS-specific block device mapping specifications. */
	export interface EbsInstanceBlockDeviceSpecificationFormProperties {
		encrypted: FormControl<boolean | null | undefined>,
		deleteOnTermination: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 100
		 * Maximum: 10000
		 */
		iops: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		kmsKeyId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		snapshotId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 16000
		 */
		volumeSize: FormControl<number | null | undefined>,
		volumeType: FormControl<EbsInstanceBlockDeviceSpecificationVolumeType | null | undefined>,
	}
	export function CreateEbsInstanceBlockDeviceSpecificationFormGroup() {
		return new FormGroup<EbsInstanceBlockDeviceSpecificationFormProperties>({
			encrypted: new FormControl<boolean | null | undefined>(undefined),
			deleteOnTermination: new FormControl<boolean | null | undefined>(undefined),
			iops: new FormControl<number | null | undefined>(undefined, [Validators.min(100), Validators.max(10000)]),
			kmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			snapshotId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			volumeSize: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(16000)]),
			volumeType: new FormControl<EbsInstanceBlockDeviceSpecificationVolumeType | null | undefined>(undefined),
		});

	}

	export enum EbsInstanceBlockDeviceSpecificationVolumeType { standard = 0, io1 = 1, gp2 = 2, sc1 = 3, st1 = 4 }

	export interface CreateInfrastructureConfigurationResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken?: string | null;
		infrastructureConfigurationArn?: string | null;
	}
	export interface CreateInfrastructureConfigurationResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
		infrastructureConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateInfrastructureConfigurationResponseFormGroup() {
		return new FormGroup<CreateInfrastructureConfigurationResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36)]),
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):infrastructure-configuration/[a-z0-9-_]+$')]),
		});

	}


	/** Amazon S3 logging configuration. */
	export interface S3Logs {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		s3BucketName?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		s3KeyPrefix?: string | null;
	}

	/** Amazon S3 logging configuration. */
	export interface S3LogsFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		s3BucketName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		s3KeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateS3LogsFormGroup() {
		return new FormGroup<S3LogsFormProperties>({
			s3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			s3KeyPrefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface DeleteComponentResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;
		componentBuildVersionArn?: string | null;
	}
	export interface DeleteComponentResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,
		componentBuildVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteComponentResponseFormGroup() {
		return new FormGroup<DeleteComponentResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			componentBuildVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):component/[a-z0-9-_]+/\d+\.\d+\.\d+/\d+$')]),
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

	export interface DeleteDistributionConfigurationResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;
		distributionConfigurationArn?: string | null;
	}
	export interface DeleteDistributionConfigurationResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,
		distributionConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDistributionConfigurationResponseFormGroup() {
		return new FormGroup<DeleteDistributionConfigurationResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):distribution-configuration/[a-z0-9-_]+$')]),
		});

	}

	export interface DeleteImageResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;
		imageBuildVersionArn?: string | null;
	}
	export interface DeleteImageResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,
		imageBuildVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteImageResponseFormGroup() {
		return new FormGroup<DeleteImageResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			imageBuildVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image/[a-z0-9-_]+/\d+\.\d+\.\d+/\d+$')]),
		});

	}

	export interface DeleteImagePipelineResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;
		imagePipelineArn?: string | null;
	}
	export interface DeleteImagePipelineResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,
		imagePipelineArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteImagePipelineResponseFormGroup() {
		return new FormGroup<DeleteImagePipelineResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			imagePipelineArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-pipeline/[a-z0-9-_]+$')]),
		});

	}

	export interface DeleteImageRecipeResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;
		imageRecipeArn?: string | null;
	}
	export interface DeleteImageRecipeResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,
		imageRecipeArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteImageRecipeResponseFormGroup() {
		return new FormGroup<DeleteImageRecipeResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			imageRecipeArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-recipe/[a-z0-9-_]+/\d+\.\d+\.\d+$')]),
		});

	}

	export interface DeleteInfrastructureConfigurationResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;
		infrastructureConfigurationArn?: string | null;
	}
	export interface DeleteInfrastructureConfigurationResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,
		infrastructureConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteInfrastructureConfigurationResponseFormGroup() {
		return new FormGroup<DeleteInfrastructureConfigurationResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):infrastructure-configuration/[a-z0-9-_]+$')]),
		});

	}

	export interface GetComponentResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;

		/** A detailed view of a component. */
		component?: Component;
	}
	export interface GetComponentResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGetComponentResponseFormGroup() {
		return new FormGroup<GetComponentResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** A detailed view of a component. */
	export interface Component {
		arn?: string | null;
		name?: string | null;
		version?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		changeDescription?: string | null;
		type?: ComponentType | null;
		platform?: ComponentPlatform | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		supportedOsVersions?: Array<string>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		owner?: string | null;
		data?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		kmsKeyId?: string | null;
		encrypted?: boolean | null;
		dateCreated?: string | null;
		tags?: TagMap;
	}

	/** A detailed view of a component. */
	export interface ComponentFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		changeDescription: FormControl<string | null | undefined>,
		type: FormControl<ComponentType | null | undefined>,
		platform: FormControl<ComponentPlatform | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		owner: FormControl<string | null | undefined>,
		data: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		kmsKeyId: FormControl<string | null | undefined>,
		encrypted: FormControl<boolean | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
	}
	export function CreateComponentFormGroup() {
		return new FormGroup<ComponentFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):(?:image-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline)/[a-z0-9-_]+(?:/(?:(?:x|\d+)\.(?:x|\d+)\.(?:x|\d+))(?:/\d+)?)?$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]+\.[0-9]+\.[0-9]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			changeDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			type: new FormControl<ComponentType | null | undefined>(undefined),
			platform: new FormControl<ComponentPlatform | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			data: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			encrypted: new FormControl<boolean | null | undefined>(undefined),
			dateCreated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ComponentType { BUILD = 0, TEST = 1 }

	export enum ComponentPlatform { Windows = 0, Linux = 1 }

	export interface GetComponentPolicyResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;

		/**
		 * Max length: 30000
		 * Min length: 1
		 */
		policy?: string | null;
	}
	export interface GetComponentPolicyResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 30000
		 * Min length: 1
		 */
		policy: FormControl<string | null | undefined>,
	}
	export function CreateGetComponentPolicyResponseFormGroup() {
		return new FormGroup<GetComponentPolicyResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			policy: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(30000)]),
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

	export interface GetDistributionConfigurationResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;

		/** A distribution configuration. */
		distributionConfiguration?: DistributionConfiguration;
	}
	export interface GetDistributionConfigurationResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGetDistributionConfigurationResponseFormGroup() {
		return new FormGroup<GetDistributionConfigurationResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** A distribution configuration. */
	export interface DistributionConfiguration {
		arn?: string | null;
		name?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;
		distributions?: Array<Distribution>;

		/**
		 * Required
		 * Minimum: 30
		 * Maximum: 720
		 */
		timeoutMinutes: number;
		dateCreated?: string | null;
		dateUpdated?: string | null;
		tags?: TagMap;
	}

	/** A distribution configuration. */
	export interface DistributionConfigurationFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 30
		 * Maximum: 720
		 */
		timeoutMinutes: FormControl<number | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
		dateUpdated: FormControl<string | null | undefined>,
	}
	export function CreateDistributionConfigurationFormGroup() {
		return new FormGroup<DistributionConfigurationFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):(?:image-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline)/[a-z0-9-_]+(?:/(?:(?:x|\d+)\.(?:x|\d+)\.(?:x|\d+))(?:/\d+)?)?$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			timeoutMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(30), Validators.max(720)]),
			dateCreated: new FormControl<string | null | undefined>(undefined),
			dateUpdated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetImageResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;

		/** An image build version. */
		image?: Image;
	}
	export interface GetImageResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGetImageResponseFormGroup() {
		return new FormGroup<GetImageResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** An image build version. */
	export interface Image {
		arn?: string | null;
		name?: string | null;
		version?: string | null;
		platform?: ComponentPlatform | null;
		enhancedImageMetadataEnabled?: boolean | null;

		/** Min length: 1 */
		osVersion?: string | null;

		/** Image state shows the image status and the reason for that status. */
		state?: ImageState;

		/** An image recipe. */
		imageRecipe?: ImageRecipe;
		sourcePipelineName?: string | null;
		sourcePipelineArn?: string | null;

		/** Details of the infrastructure configuration. */
		infrastructureConfiguration?: InfrastructureConfiguration;

		/** A distribution configuration. */
		distributionConfiguration?: DistributionConfiguration;

		/** Image tests configuration. */
		imageTestsConfiguration?: ImageTestsConfiguration;
		dateCreated?: string | null;

		/** The resources produced by this image. */
		outputResources?: OutputResources;
		tags?: TagMap;
	}

	/** An image build version. */
	export interface ImageFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		platform: FormControl<ComponentPlatform | null | undefined>,
		enhancedImageMetadataEnabled: FormControl<boolean | null | undefined>,

		/** Min length: 1 */
		osVersion: FormControl<string | null | undefined>,
		sourcePipelineName: FormControl<string | null | undefined>,
		sourcePipelineArn: FormControl<string | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):(?:image-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline)/[a-z0-9-_]+(?:/(?:(?:x|\d+)\.(?:x|\d+)\.(?:x|\d+))(?:/\d+)?)?$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]+\.[0-9]+\.[0-9]+$')]),
			platform: new FormControl<ComponentPlatform | null | undefined>(undefined),
			enhancedImageMetadataEnabled: new FormControl<boolean | null | undefined>(undefined),
			osVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			sourcePipelineName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			sourcePipelineArn: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Image state shows the image status and the reason for that status.  */
	export interface ImageState {
		status?: ImageStateStatus | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		reason?: string | null;
	}

	/**  Image state shows the image status and the reason for that status.  */
	export interface ImageStateFormProperties {
		status: FormControl<ImageStateStatus | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateImageStateFormGroup() {
		return new FormGroup<ImageStateFormProperties>({
			status: new FormControl<ImageStateStatus | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export enum ImageStateStatus { PENDING = 0, CREATING = 1, BUILDING = 2, TESTING = 3, DISTRIBUTING = 4, INTEGRATING = 5, AVAILABLE = 6, CANCELLED = 7, FAILED = 8, DEPRECATED = 9, DELETED = 10 }


	/** An image recipe. */
	export interface ImageRecipe {
		arn?: string | null;
		name?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;
		platform?: ComponentPlatform | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		owner?: string | null;
		version?: string | null;

		/** Minimum items: 1 */
		components?: Array<ComponentConfiguration>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		parentImage?: string | null;
		blockDeviceMappings?: Array<InstanceBlockDeviceMapping>;
		dateCreated?: string | null;
		tags?: TagMap;
	}

	/** An image recipe. */
	export interface ImageRecipeFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
		platform: FormControl<ComponentPlatform | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		owner: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		parentImage: FormControl<string | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
	}
	export function CreateImageRecipeFormGroup() {
		return new FormGroup<ImageRecipeFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):(?:image-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline)/[a-z0-9-_]+(?:/(?:(?:x|\d+)\.(?:x|\d+)\.(?:x|\d+))(?:/\d+)?)?$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			platform: new FormControl<ComponentPlatform | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]+\.[0-9]+\.[0-9]+$')]),
			parentImage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			dateCreated: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of the infrastructure configuration. */
	export interface InfrastructureConfiguration {
		arn?: string | null;
		name?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;
		instanceTypes?: Array<string>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		instanceProfileName?: string | null;
		securityGroupIds?: Array<string>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		subnetId?: string | null;

		/** Logging configuration defines where Image Builder uploads your logs. */
		logging?: Logging;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		keyPair?: string | null;
		terminateInstanceOnFailure?: boolean | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		snsTopicArn?: string | null;
		dateCreated?: string | null;
		dateUpdated?: string | null;
		tags?: TagMap;
	}

	/** Details of the infrastructure configuration. */
	export interface InfrastructureConfigurationFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		instanceProfileName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		subnetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		keyPair: FormControl<string | null | undefined>,
		terminateInstanceOnFailure: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		snsTopicArn: FormControl<string | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
		dateUpdated: FormControl<string | null | undefined>,
	}
	export function CreateInfrastructureConfigurationFormGroup() {
		return new FormGroup<InfrastructureConfigurationFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):(?:image-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline)/[a-z0-9-_]+(?:/(?:(?:x|\d+)\.(?:x|\d+)\.(?:x|\d+))(?:/\d+)?)?$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			instanceProfileName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			subnetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			keyPair: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			terminateInstanceOnFailure: new FormControl<boolean | null | undefined>(undefined),
			snsTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			dateCreated: new FormControl<string | null | undefined>(undefined),
			dateUpdated: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Logging configuration defines where Image Builder uploads your logs. */
	export interface Logging {

		/** Amazon S3 logging configuration. */
		s3Logs?: S3Logs;
	}

	/** Logging configuration defines where Image Builder uploads your logs. */
	export interface LoggingFormProperties {
	}
	export function CreateLoggingFormGroup() {
		return new FormGroup<LoggingFormProperties>({
		});

	}


	/** Image tests configuration. */
	export interface ImageTestsConfiguration {
		imageTestsEnabled?: boolean | null;

		/**
		 * Minimum: 60
		 * Maximum: 1440
		 */
		timeoutMinutes?: number | null;
	}

	/** Image tests configuration. */
	export interface ImageTestsConfigurationFormProperties {
		imageTestsEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 60
		 * Maximum: 1440
		 */
		timeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateImageTestsConfigurationFormGroup() {
		return new FormGroup<ImageTestsConfigurationFormProperties>({
			imageTestsEnabled: new FormControl<boolean | null | undefined>(undefined),
			timeoutMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(1440)]),
		});

	}


	/** The resources produced by this image.  */
	export interface OutputResources {
		amis?: Array<Ami>;
	}

	/** The resources produced by this image.  */
	export interface OutputResourcesFormProperties {
	}
	export function CreateOutputResourcesFormGroup() {
		return new FormGroup<OutputResourcesFormProperties>({
		});

	}


	/**  Details of an EC2 AMI.  */
	export interface Ami {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		region?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		image?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;

		/** Image state shows the image status and the reason for that status. */
		state?: ImageState;
	}

	/**  Details of an EC2 AMI.  */
	export interface AmiFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		region: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		image: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateAmiFormGroup() {
		return new FormGroup<AmiFormProperties>({
			region: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			image: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface GetImagePipelineResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;

		/** Details of an image pipeline. */
		imagePipeline?: ImagePipeline;
	}
	export interface GetImagePipelineResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGetImagePipelineResponseFormGroup() {
		return new FormGroup<GetImagePipelineResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** Details of an image pipeline. */
	export interface ImagePipeline {
		arn?: string | null;
		name?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;
		platform?: ComponentPlatform | null;
		enhancedImageMetadataEnabled?: boolean | null;
		imageRecipeArn?: string | null;
		infrastructureConfigurationArn?: string | null;
		distributionConfigurationArn?: string | null;

		/** Image tests configuration. */
		imageTestsConfiguration?: ImageTestsConfiguration;

		/** A schedule configures how often and when a pipeline will automatically create a new image. */
		schedule?: Schedule;
		status?: ImagePipelineStatus | null;
		dateCreated?: string | null;
		dateUpdated?: string | null;
		dateLastRun?: string | null;
		dateNextRun?: string | null;
		tags?: TagMap;
	}

	/** Details of an image pipeline. */
	export interface ImagePipelineFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
		platform: FormControl<ComponentPlatform | null | undefined>,
		enhancedImageMetadataEnabled: FormControl<boolean | null | undefined>,
		imageRecipeArn: FormControl<string | null | undefined>,
		infrastructureConfigurationArn: FormControl<string | null | undefined>,
		distributionConfigurationArn: FormControl<string | null | undefined>,
		status: FormControl<ImagePipelineStatus | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
		dateUpdated: FormControl<string | null | undefined>,
		dateLastRun: FormControl<string | null | undefined>,
		dateNextRun: FormControl<string | null | undefined>,
	}
	export function CreateImagePipelineFormGroup() {
		return new FormGroup<ImagePipelineFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):(?:image-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline)/[a-z0-9-_]+(?:/(?:(?:x|\d+)\.(?:x|\d+)\.(?:x|\d+))(?:/\d+)?)?$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			platform: new FormControl<ComponentPlatform | null | undefined>(undefined),
			enhancedImageMetadataEnabled: new FormControl<boolean | null | undefined>(undefined),
			imageRecipeArn: new FormControl<string | null | undefined>(undefined),
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined),
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ImagePipelineStatus | null | undefined>(undefined),
			dateCreated: new FormControl<string | null | undefined>(undefined),
			dateUpdated: new FormControl<string | null | undefined>(undefined),
			dateLastRun: new FormControl<string | null | undefined>(undefined),
			dateNextRun: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A schedule configures how often and when a pipeline will automatically create a new image.  */
	export interface Schedule {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		scheduleExpression?: string | null;
		pipelineExecutionStartCondition?: PipelineExecutionStartCondition | null;
	}

	/** A schedule configures how often and when a pipeline will automatically create a new image.  */
	export interface ScheduleFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		scheduleExpression: FormControl<string | null | undefined>,
		pipelineExecutionStartCondition: FormControl<PipelineExecutionStartCondition | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			scheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			pipelineExecutionStartCondition: new FormControl<PipelineExecutionStartCondition | null | undefined>(undefined),
		});

	}

	export enum ImagePipelineStatus { DISABLED = 0, ENABLED = 1 }

	export interface GetImagePolicyResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;

		/**
		 * Max length: 30000
		 * Min length: 1
		 */
		policy?: string | null;
	}
	export interface GetImagePolicyResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 30000
		 * Min length: 1
		 */
		policy: FormControl<string | null | undefined>,
	}
	export function CreateGetImagePolicyResponseFormGroup() {
		return new FormGroup<GetImagePolicyResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			policy: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(30000)]),
		});

	}

	export interface GetImageRecipeResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;

		/** An image recipe. */
		imageRecipe?: ImageRecipe;
	}
	export interface GetImageRecipeResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGetImageRecipeResponseFormGroup() {
		return new FormGroup<GetImageRecipeResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface GetImageRecipePolicyResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;

		/**
		 * Max length: 30000
		 * Min length: 1
		 */
		policy?: string | null;
	}
	export interface GetImageRecipePolicyResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 30000
		 * Min length: 1
		 */
		policy: FormControl<string | null | undefined>,
	}
	export function CreateGetImageRecipePolicyResponseFormGroup() {
		return new FormGroup<GetImageRecipePolicyResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			policy: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(30000)]),
		});

	}


	/** GetInfrastructureConfiguration response object.  */
	export interface GetInfrastructureConfigurationResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;

		/** Details of the infrastructure configuration. */
		infrastructureConfiguration?: InfrastructureConfiguration;
	}

	/** GetInfrastructureConfiguration response object.  */
	export interface GetInfrastructureConfigurationResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGetInfrastructureConfigurationResponseFormGroup() {
		return new FormGroup<GetInfrastructureConfigurationResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ImportComponentResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken?: string | null;
		componentBuildVersionArn?: string | null;
	}
	export interface ImportComponentResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
		componentBuildVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateImportComponentResponseFormGroup() {
		return new FormGroup<ImportComponentResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36)]),
			componentBuildVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):component/[a-z0-9-_]+/\d+\.\d+\.\d+/\d+$')]),
		});

	}

	export interface ListComponentBuildVersionsResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;
		componentSummaryList?: Array<ComponentSummary>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListComponentBuildVersionsResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentBuildVersionsResponseFormGroup() {
		return new FormGroup<ListComponentBuildVersionsResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** A high-level summary of a component. */
	export interface ComponentSummary {
		arn?: string | null;
		name?: string | null;
		version?: string | null;
		platform?: ComponentPlatform | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		supportedOsVersions?: Array<string>;
		type?: ComponentType | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		owner?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		changeDescription?: string | null;
		dateCreated?: string | null;
		tags?: TagMap;
	}

	/** A high-level summary of a component. */
	export interface ComponentSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		platform: FormControl<ComponentPlatform | null | undefined>,
		type: FormControl<ComponentType | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		owner: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		changeDescription: FormControl<string | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
	}
	export function CreateComponentSummaryFormGroup() {
		return new FormGroup<ComponentSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):(?:image-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline)/[a-z0-9-_]+(?:/(?:(?:x|\d+)\.(?:x|\d+)\.(?:x|\d+))(?:/\d+)?)?$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]+\.[0-9]+\.[0-9]+$')]),
			platform: new FormControl<ComponentPlatform | null | undefined>(undefined),
			type: new FormControl<ComponentType | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			changeDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			dateCreated: new FormControl<string | null | undefined>(undefined),
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

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;
		componentVersionList?: Array<ComponentVersion>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListComponentsResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentsResponseFormGroup() {
		return new FormGroup<ListComponentsResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** A high-level overview of a component semantic version. */
	export interface ComponentVersion {
		arn?: string | null;
		name?: string | null;
		version?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;
		platform?: ComponentPlatform | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		supportedOsVersions?: Array<string>;
		type?: ComponentType | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		owner?: string | null;
		dateCreated?: string | null;
	}

	/** A high-level overview of a component semantic version. */
	export interface ComponentVersionFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
		platform: FormControl<ComponentPlatform | null | undefined>,
		type: FormControl<ComponentType | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		owner: FormControl<string | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
	}
	export function CreateComponentVersionFormGroup() {
		return new FormGroup<ComponentVersionFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):(?:image-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline)/[a-z0-9-_]+(?:/(?:(?:x|\d+)\.(?:x|\d+)\.(?:x|\d+))(?:/\d+)?)?$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]+\.[0-9]+\.[0-9]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			platform: new FormControl<ComponentPlatform | null | undefined>(undefined),
			type: new FormControl<ComponentType | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			dateCreated: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter name and value pair that is used to return a more specific list of results from a list operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.  */
	export interface Filter {
		name?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		values?: Array<string>;
	}

	/** A filter name and value pair that is used to return a more specific list of results from a list operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.  */
	export interface FilterFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z]{1,1024}$')]),
		});

	}

	export interface ListDistributionConfigurationsResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;
		distributionConfigurationSummaryList?: Array<DistributionConfigurationSummary>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListDistributionConfigurationsResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDistributionConfigurationsResponseFormGroup() {
		return new FormGroup<ListDistributionConfigurationsResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** A high-level overview of a distribution configuration. */
	export interface DistributionConfigurationSummary {
		arn?: string | null;
		name?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;
		dateCreated?: string | null;
		dateUpdated?: string | null;
		tags?: TagMap;
	}

	/** A high-level overview of a distribution configuration. */
	export interface DistributionConfigurationSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
		dateUpdated: FormControl<string | null | undefined>,
	}
	export function CreateDistributionConfigurationSummaryFormGroup() {
		return new FormGroup<DistributionConfigurationSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):(?:image-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline)/[a-z0-9-_]+(?:/(?:(?:x|\d+)\.(?:x|\d+)\.(?:x|\d+))(?:/\d+)?)?$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			dateCreated: new FormControl<string | null | undefined>(undefined),
			dateUpdated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImageBuildVersionsResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;
		imageSummaryList?: Array<ImageSummary>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListImageBuildVersionsResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImageBuildVersionsResponseFormGroup() {
		return new FormGroup<ListImageBuildVersionsResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** An image summary. */
	export interface ImageSummary {
		arn?: string | null;
		name?: string | null;
		version?: string | null;
		platform?: ComponentPlatform | null;

		/** Min length: 1 */
		osVersion?: string | null;

		/** Image state shows the image status and the reason for that status. */
		state?: ImageState;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		owner?: string | null;
		dateCreated?: string | null;

		/** The resources produced by this image. */
		outputResources?: OutputResources;
		tags?: TagMap;
	}

	/** An image summary. */
	export interface ImageSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		platform: FormControl<ComponentPlatform | null | undefined>,

		/** Min length: 1 */
		osVersion: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		owner: FormControl<string | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
	}
	export function CreateImageSummaryFormGroup() {
		return new FormGroup<ImageSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):(?:image-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline)/[a-z0-9-_]+(?:/(?:(?:x|\d+)\.(?:x|\d+)\.(?:x|\d+))(?:/\d+)?)?$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]+\.[0-9]+\.[0-9]+$')]),
			platform: new FormControl<ComponentPlatform | null | undefined>(undefined),
			osVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			dateCreated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImagePipelineImagesResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;
		imageSummaryList?: Array<ImageSummary>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListImagePipelineImagesResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImagePipelineImagesResponseFormGroup() {
		return new FormGroup<ListImagePipelineImagesResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListImagePipelinesResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;
		imagePipelineList?: Array<ImagePipeline>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListImagePipelinesResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImagePipelinesResponseFormGroup() {
		return new FormGroup<ListImagePipelinesResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListImageRecipesResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;
		imageRecipeSummaryList?: Array<ImageRecipeSummary>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListImageRecipesResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImageRecipesResponseFormGroup() {
		return new FormGroup<ListImageRecipesResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** A summary of an image recipe. */
	export interface ImageRecipeSummary {
		arn?: string | null;
		name?: string | null;
		platform?: ComponentPlatform | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		owner?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		parentImage?: string | null;
		dateCreated?: string | null;
		tags?: TagMap;
	}

	/** A summary of an image recipe. */
	export interface ImageRecipeSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		platform: FormControl<ComponentPlatform | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		owner: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		parentImage: FormControl<string | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
	}
	export function CreateImageRecipeSummaryFormGroup() {
		return new FormGroup<ImageRecipeSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):(?:image-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline)/[a-z0-9-_]+(?:/(?:(?:x|\d+)\.(?:x|\d+)\.(?:x|\d+))(?:/\d+)?)?$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			platform: new FormControl<ComponentPlatform | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			parentImage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			dateCreated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImagesResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;
		imageVersionList?: Array<ImageVersion>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListImagesResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImagesResponseFormGroup() {
		return new FormGroup<ListImagesResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** An image semantic version. */
	export interface ImageVersion {
		arn?: string | null;
		name?: string | null;
		version?: string | null;
		platform?: ComponentPlatform | null;

		/** Min length: 1 */
		osVersion?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		owner?: string | null;
		dateCreated?: string | null;
	}

	/** An image semantic version. */
	export interface ImageVersionFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		platform: FormControl<ComponentPlatform | null | undefined>,

		/** Min length: 1 */
		osVersion: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		owner: FormControl<string | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
	}
	export function CreateImageVersionFormGroup() {
		return new FormGroup<ImageVersionFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):(?:image-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline)/[a-z0-9-_]+(?:/(?:(?:x|\d+)\.(?:x|\d+)\.(?:x|\d+))(?:/\d+)?)?$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]+\.[0-9]+\.[0-9]+$')]),
			platform: new FormControl<ComponentPlatform | null | undefined>(undefined),
			osVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			dateCreated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInfrastructureConfigurationsResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;
		infrastructureConfigurationSummaryList?: Array<InfrastructureConfigurationSummary>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListInfrastructureConfigurationsResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInfrastructureConfigurationsResponseFormGroup() {
		return new FormGroup<ListInfrastructureConfigurationsResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** The infrastructure used when building EC2 AMIs. */
	export interface InfrastructureConfigurationSummary {
		arn?: string | null;
		name?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;
		dateCreated?: string | null;
		dateUpdated?: string | null;
		tags?: TagMap;
	}

	/** The infrastructure used when building EC2 AMIs. */
	export interface InfrastructureConfigurationSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
		dateCreated: FormControl<string | null | undefined>,
		dateUpdated: FormControl<string | null | undefined>,
	}
	export function CreateInfrastructureConfigurationSummaryFormGroup() {
		return new FormGroup<InfrastructureConfigurationSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):(?:image-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline)/[a-z0-9-_]+(?:/(?:(?:x|\d+)\.(?:x|\d+)\.(?:x|\d+))(?:/\d+)?)?$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			dateCreated: new FormControl<string | null | undefined>(undefined),
			dateUpdated: new FormControl<string | null | undefined>(undefined),
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

	export interface PutComponentPolicyResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;
		componentArn?: string | null;
	}
	export interface PutComponentPolicyResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,
		componentArn: FormControl<string | null | undefined>,
	}
	export function CreatePutComponentPolicyResponseFormGroup() {
		return new FormGroup<PutComponentPolicyResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			componentArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):component/[a-z0-9-_]+/\d+\.\d+\.\d+/\d+$')]),
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

	export interface PutImagePolicyResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;
		imageArn?: string | null;
	}
	export interface PutImagePolicyResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,
		imageArn: FormControl<string | null | undefined>,
	}
	export function CreatePutImagePolicyResponseFormGroup() {
		return new FormGroup<PutImagePolicyResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			imageArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image/[a-z0-9-_]+/\d+\.\d+\.\d+/\d+$')]),
		});

	}

	export interface PutImageRecipePolicyResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;
		imageRecipeArn?: string | null;
	}
	export interface PutImageRecipePolicyResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,
		imageRecipeArn: FormControl<string | null | undefined>,
	}
	export function CreatePutImageRecipePolicyResponseFormGroup() {
		return new FormGroup<PutImageRecipePolicyResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			imageRecipeArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-recipe/[a-z0-9-_]+/\d+\.\d+\.\d+$')]),
		});

	}

	export interface StartImagePipelineExecutionResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken?: string | null;
		imageBuildVersionArn?: string | null;
	}
	export interface StartImagePipelineExecutionResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
		imageBuildVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateStartImagePipelineExecutionResponseFormGroup() {
		return new FormGroup<StartImagePipelineExecutionResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36)]),
			imageBuildVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image/[a-z0-9-_]+/\d+\.\d+\.\d+/\d+$')]),
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

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken?: string | null;
		distributionConfigurationArn?: string | null;
	}
	export interface UpdateDistributionConfigurationResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
		distributionConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDistributionConfigurationResponseFormGroup() {
		return new FormGroup<UpdateDistributionConfigurationResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36)]),
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):distribution-configuration/[a-z0-9-_]+$')]),
		});

	}

	export interface UpdateImagePipelineResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken?: string | null;
		imagePipelineArn?: string | null;
	}
	export interface UpdateImagePipelineResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
		imagePipelineArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateImagePipelineResponseFormGroup() {
		return new FormGroup<UpdateImagePipelineResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36)]),
			imagePipelineArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-pipeline/[a-z0-9-_]+$')]),
		});

	}

	export interface UpdateInfrastructureConfigurationResponse {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken?: string | null;
		infrastructureConfigurationArn?: string | null;
	}
	export interface UpdateInfrastructureConfigurationResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
		infrastructureConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInfrastructureConfigurationResponseFormGroup() {
		return new FormGroup<UpdateInfrastructureConfigurationResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36)]),
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):infrastructure-configuration/[a-z0-9-_]+$')]),
		});

	}

	export interface CancelImageCreationRequest {

		/** Required */
		imageBuildVersionArn: string;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}
	export interface CancelImageCreationRequestFormProperties {

		/** Required */
		imageBuildVersionArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCancelImageCreationRequestFormGroup() {
		return new FormGroup<CancelImageCreationRequestFormProperties>({
			imageBuildVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image/[a-z0-9-_]+/\d+\.\d+\.\d+/\d+$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export enum Platform { Windows = 0, Linux = 1 }

	export enum ComponentFormat { SHELL = 0 }

	export interface CreateComponentRequest {

		/** Required */
		name: string;

		/** Required */
		semanticVersion: string;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		changeDescription?: string | null;

		/** Required */
		platform: ComponentPlatform;

		/**
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		supportedOsVersions?: Array<string>;

		/**
		 * Max length: 16000
		 * Min length: 1
		 */
		data?: string | null;
		uri?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		kmsKeyId?: string | null;
		tags?: TagMap;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}
	export interface CreateComponentRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		semanticVersion: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		changeDescription: FormControl<string | null | undefined>,

		/** Required */
		platform: FormControl<ComponentPlatform | null | undefined>,

		/**
		 * Max length: 16000
		 * Min length: 1
		 */
		data: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		kmsKeyId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateComponentRequestFormGroup() {
		return new FormGroup<CreateComponentRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			semanticVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]+\.[0-9]+\.[0-9]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			changeDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			platform: new FormControl<ComponentPlatform | null | undefined>(undefined, [Validators.required]),
			data: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(16000)]),
			uri: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface CreateDistributionConfigurationRequest {

		/** Required */
		name: string;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;

		/** Required */
		distributions: Array<Distribution>;
		tags?: TagMap;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}
	export interface CreateDistributionConfigurationRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateDistributionConfigurationRequestFormGroup() {
		return new FormGroup<CreateDistributionConfigurationRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export enum PipelineStatus { DISABLED = 0, ENABLED = 1 }

	export interface CreateImagePipelineRequest {

		/** Required */
		name: string;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;

		/** Required */
		imageRecipeArn: string;

		/** Required */
		infrastructureConfigurationArn: string;
		distributionConfigurationArn?: string | null;

		/** Image tests configuration. */
		imageTestsConfiguration?: ImageTestsConfiguration;
		enhancedImageMetadataEnabled?: boolean | null;

		/** A schedule configures how often and when a pipeline will automatically create a new image. */
		schedule?: Schedule;
		status?: ImagePipelineStatus | null;
		tags?: TagMap;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}
	export interface CreateImagePipelineRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		imageRecipeArn: FormControl<string | null | undefined>,

		/** Required */
		infrastructureConfigurationArn: FormControl<string | null | undefined>,
		distributionConfigurationArn: FormControl<string | null | undefined>,
		enhancedImageMetadataEnabled: FormControl<boolean | null | undefined>,
		status: FormControl<ImagePipelineStatus | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateImagePipelineRequestFormGroup() {
		return new FormGroup<CreateImagePipelineRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			imageRecipeArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-recipe/[a-z0-9-_]+/\d+\.\d+\.\d+$')]),
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):infrastructure-configuration/[a-z0-9-_]+$')]),
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):distribution-configuration/[a-z0-9-_]+$')]),
			enhancedImageMetadataEnabled: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<ImagePipelineStatus | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface CreateImageRecipeRequest {

		/** Required */
		name: string;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;

		/** Required */
		semanticVersion: string;

		/**
		 * Required
		 * Minimum items: 1
		 */
		components: Array<ComponentConfiguration>;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		parentImage: string;
		blockDeviceMappings?: Array<InstanceBlockDeviceMapping>;
		tags?: TagMap;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}
	export interface CreateImageRecipeRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		semanticVersion: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		parentImage: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateImageRecipeRequestFormGroup() {
		return new FormGroup<CreateImageRecipeRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			semanticVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]+\.[0-9]+\.[0-9]+$')]),
			parentImage: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface CreateImageRequest {

		/** Required */
		imageRecipeArn: string;
		distributionConfigurationArn?: string | null;

		/** Required */
		infrastructureConfigurationArn: string;

		/** Image tests configuration. */
		imageTestsConfiguration?: ImageTestsConfiguration;
		enhancedImageMetadataEnabled?: boolean | null;
		tags?: TagMap;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}
	export interface CreateImageRequestFormProperties {

		/** Required */
		imageRecipeArn: FormControl<string | null | undefined>,
		distributionConfigurationArn: FormControl<string | null | undefined>,

		/** Required */
		infrastructureConfigurationArn: FormControl<string | null | undefined>,
		enhancedImageMetadataEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateImageRequestFormGroup() {
		return new FormGroup<CreateImageRequestFormProperties>({
			imageRecipeArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-recipe/[a-z0-9-_]+/\d+\.\d+\.\d+$')]),
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):distribution-configuration/[a-z0-9-_]+$')]),
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):infrastructure-configuration/[a-z0-9-_]+$')]),
			enhancedImageMetadataEnabled: new FormControl<boolean | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface CreateInfrastructureConfigurationRequest {

		/** Required */
		name: string;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;
		instanceTypes?: Array<string>;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		instanceProfileName: string;
		securityGroupIds?: Array<string>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		subnetId?: string | null;

		/** Logging configuration defines where Image Builder uploads your logs. */
		logging?: Logging;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		keyPair?: string | null;
		terminateInstanceOnFailure?: boolean | null;
		snsTopicArn?: string | null;
		tags?: TagMap;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}
	export interface CreateInfrastructureConfigurationRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		instanceProfileName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		subnetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		keyPair: FormControl<string | null | undefined>,
		terminateInstanceOnFailure: FormControl<boolean | null | undefined>,
		snsTopicArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateInfrastructureConfigurationRequestFormGroup() {
		return new FormGroup<CreateInfrastructureConfigurationRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			instanceProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			subnetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			keyPair: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			terminateInstanceOnFailure: new FormControl<boolean | null | undefined>(undefined),
			snsTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:sns:[^:]+:\d{12}:[a-zA-Z0-9-_]{1,256}$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
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

	export enum EbsVolumeType { standard = 0, io1 = 1, gp2 = 2, sc1 = 3, st1 = 4 }

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


	/**  GetInfrastructureConfiguration request object.  */
	export interface GetInfrastructureConfigurationRequest {
	}

	/**  GetInfrastructureConfiguration request object.  */
	export interface GetInfrastructureConfigurationRequestFormProperties {
	}
	export function CreateGetInfrastructureConfigurationRequestFormGroup() {
		return new FormGroup<GetInfrastructureConfigurationRequestFormProperties>({
		});

	}

	export enum ImageStatus { PENDING = 0, CREATING = 1, BUILDING = 2, TESTING = 3, DISTRIBUTING = 4, INTEGRATING = 5, AVAILABLE = 6, CANCELLED = 7, FAILED = 8, DEPRECATED = 9, DELETED = 10 }

	export interface ImportComponentRequest {

		/** Required */
		name: string;

		/** Required */
		semanticVersion: string;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		changeDescription?: string | null;

		/** Required */
		type: ComponentType;

		/** Required */
		format: ComponentFormat;

		/** Required */
		platform: ComponentPlatform;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		data?: string | null;
		uri?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		kmsKeyId?: string | null;
		tags?: TagMap;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}
	export interface ImportComponentRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		semanticVersion: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		changeDescription: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<ComponentType | null | undefined>,

		/** Required */
		format: FormControl<ComponentFormat | null | undefined>,

		/** Required */
		platform: FormControl<ComponentPlatform | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		data: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		kmsKeyId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateImportComponentRequestFormGroup() {
		return new FormGroup<ImportComponentRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			semanticVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]+\.[0-9]+\.[0-9]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			changeDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			type: new FormControl<ComponentType | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<ComponentFormat | null | undefined>(undefined, [Validators.required]),
			platform: new FormControl<ComponentPlatform | null | undefined>(undefined, [Validators.required]),
			data: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			uri: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface ListComponentBuildVersionsRequest {

		/** Required */
		componentVersionArn: string;

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListComponentBuildVersionsRequestFormProperties {

		/** Required */
		componentVersionArn: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentBuildVersionsRequestFormGroup() {
		return new FormGroup<ListComponentBuildVersionsRequestFormProperties>({
			componentVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):component/[a-z0-9-_]+/\d+\.\d+\.\d+$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export enum Ownership { Self = 0, Shared = 1, Amazon = 2 }

	export interface ListComponentsRequest {
		owner?: Ownership | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListComponentsRequestFormProperties {
		owner: FormControl<Ownership | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentsRequestFormGroup() {
		return new FormGroup<ListComponentsRequestFormProperties>({
			owner: new FormControl<Ownership | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListDistributionConfigurationsRequest {

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListDistributionConfigurationsRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDistributionConfigurationsRequestFormGroup() {
		return new FormGroup<ListDistributionConfigurationsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListImageBuildVersionsRequest {

		/** Required */
		imageVersionArn: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListImageBuildVersionsRequestFormProperties {

		/** Required */
		imageVersionArn: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImageBuildVersionsRequestFormGroup() {
		return new FormGroup<ListImageBuildVersionsRequestFormProperties>({
			imageVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image/[a-z0-9-_]+/\d+\.\d+\.\d+$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListImagePipelineImagesRequest {

		/** Required */
		imagePipelineArn: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListImagePipelineImagesRequestFormProperties {

		/** Required */
		imagePipelineArn: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImagePipelineImagesRequestFormGroup() {
		return new FormGroup<ListImagePipelineImagesRequestFormProperties>({
			imagePipelineArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-pipeline/[a-z0-9-_]+$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListImagePipelinesRequest {

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListImagePipelinesRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImagePipelinesRequestFormGroup() {
		return new FormGroup<ListImagePipelinesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListImageRecipesRequest {
		owner?: Ownership | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListImageRecipesRequestFormProperties {
		owner: FormControl<Ownership | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImageRecipesRequestFormGroup() {
		return new FormGroup<ListImageRecipesRequestFormProperties>({
			owner: new FormControl<Ownership | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListImagesRequest {
		owner?: Ownership | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListImagesRequestFormProperties {
		owner: FormControl<Ownership | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImagesRequestFormGroup() {
		return new FormGroup<ListImagesRequestFormProperties>({
			owner: new FormControl<Ownership | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListInfrastructureConfigurationsRequest {

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter>;

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListInfrastructureConfigurationsRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInfrastructureConfigurationsRequestFormGroup() {
		return new FormGroup<ListInfrastructureConfigurationsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
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

	export interface PutComponentPolicyRequest {

		/** Required */
		componentArn: string;

		/**
		 * Required
		 * Max length: 30000
		 * Min length: 1
		 */
		policy: string;
	}
	export interface PutComponentPolicyRequestFormProperties {

		/** Required */
		componentArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 30000
		 * Min length: 1
		 */
		policy: FormControl<string | null | undefined>,
	}
	export function CreatePutComponentPolicyRequestFormGroup() {
		return new FormGroup<PutComponentPolicyRequestFormProperties>({
			componentArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):component/[a-z0-9-_]+/\d+\.\d+\.\d+/\d+$')]),
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(30000)]),
		});

	}

	export interface PutImagePolicyRequest {

		/** Required */
		imageArn: string;

		/**
		 * Required
		 * Max length: 30000
		 * Min length: 1
		 */
		policy: string;
	}
	export interface PutImagePolicyRequestFormProperties {

		/** Required */
		imageArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 30000
		 * Min length: 1
		 */
		policy: FormControl<string | null | undefined>,
	}
	export function CreatePutImagePolicyRequestFormGroup() {
		return new FormGroup<PutImagePolicyRequestFormProperties>({
			imageArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image/[a-z0-9-_]+/\d+\.\d+\.\d+/\d+$')]),
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(30000)]),
		});

	}

	export interface PutImageRecipePolicyRequest {

		/** Required */
		imageRecipeArn: string;

		/**
		 * Required
		 * Max length: 30000
		 * Min length: 1
		 */
		policy: string;
	}
	export interface PutImageRecipePolicyRequestFormProperties {

		/** Required */
		imageRecipeArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 30000
		 * Min length: 1
		 */
		policy: FormControl<string | null | undefined>,
	}
	export function CreatePutImageRecipePolicyRequestFormGroup() {
		return new FormGroup<PutImageRecipePolicyRequestFormProperties>({
			imageRecipeArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-recipe/[a-z0-9-_]+/\d+\.\d+\.\d+$')]),
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(30000)]),
		});

	}

	export interface StartImagePipelineExecutionRequest {

		/** Required */
		imagePipelineArn: string;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}
	export interface StartImagePipelineExecutionRequestFormProperties {

		/** Required */
		imagePipelineArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartImagePipelineExecutionRequestFormGroup() {
		return new FormGroup<StartImagePipelineExecutionRequestFormProperties>({
			imagePipelineArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-pipeline/[a-z0-9-_]+$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
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

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;

		/** Required */
		distributions: Array<Distribution>;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}
	export interface UpdateDistributionConfigurationRequestFormProperties {

		/** Required */
		distributionConfigurationArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDistributionConfigurationRequestFormGroup() {
		return new FormGroup<UpdateDistributionConfigurationRequestFormProperties>({
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):distribution-configuration/[a-z0-9-_]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface UpdateImagePipelineRequest {

		/** Required */
		imagePipelineArn: string;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;

		/** Required */
		imageRecipeArn: string;

		/** Required */
		infrastructureConfigurationArn: string;
		distributionConfigurationArn?: string | null;

		/** Image tests configuration. */
		imageTestsConfiguration?: ImageTestsConfiguration;
		enhancedImageMetadataEnabled?: boolean | null;

		/** A schedule configures how often and when a pipeline will automatically create a new image. */
		schedule?: Schedule;
		status?: ImagePipelineStatus | null;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}
	export interface UpdateImagePipelineRequestFormProperties {

		/** Required */
		imagePipelineArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		imageRecipeArn: FormControl<string | null | undefined>,

		/** Required */
		infrastructureConfigurationArn: FormControl<string | null | undefined>,
		distributionConfigurationArn: FormControl<string | null | undefined>,
		enhancedImageMetadataEnabled: FormControl<boolean | null | undefined>,
		status: FormControl<ImagePipelineStatus | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateImagePipelineRequestFormGroup() {
		return new FormGroup<UpdateImagePipelineRequestFormProperties>({
			imagePipelineArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-pipeline/[a-z0-9-_]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			imageRecipeArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-recipe/[a-z0-9-_]+/\d+\.\d+\.\d+$')]),
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):infrastructure-configuration/[a-z0-9-_]+$')]),
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):distribution-configuration/[a-z0-9-_]+$')]),
			enhancedImageMetadataEnabled: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<ImagePipelineStatus | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface UpdateInfrastructureConfigurationRequest {

		/** Required */
		infrastructureConfigurationArn: string;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;
		instanceTypes?: Array<string>;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		instanceProfileName: string;
		securityGroupIds?: Array<string>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		subnetId?: string | null;

		/** Logging configuration defines where Image Builder uploads your logs. */
		logging?: Logging;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		keyPair?: string | null;
		terminateInstanceOnFailure?: boolean | null;
		snsTopicArn?: string | null;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}
	export interface UpdateInfrastructureConfigurationRequestFormProperties {

		/** Required */
		infrastructureConfigurationArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		instanceProfileName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		subnetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		keyPair: FormControl<string | null | undefined>,
		terminateInstanceOnFailure: FormControl<boolean | null | undefined>,
		snsTopicArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInfrastructureConfigurationRequestFormGroup() {
		return new FormGroup<UpdateInfrastructureConfigurationRequestFormProperties>({
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):infrastructure-configuration/[a-z0-9-_]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			instanceProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			subnetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			keyPair: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			terminateInstanceOnFailure: new FormControl<boolean | null | undefined>(undefined),
			snsTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:sns:[^:]+:\d{12}:[a-zA-Z0-9-_]{1,256}$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
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
		 * Creates a new component that can be used to build, validate, test, and assess your image.
		 * Put CreateComponent
		 * @return {CreateComponentResponse} Success
		 */
		CreateComponent(requestBody: CreateComponentPutBody): Observable<CreateComponentResponse> {
			return this.http.put<CreateComponentResponse>(this.baseUri + 'CreateComponent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration.
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
		 * Deletes a distribution configuration.
		 * Delete DeleteDistributionConfiguration#distributionConfigurationArn
		 * @param {string} distributionConfigurationArn The Amazon Resource Name (ARN) of the distribution configuration to delete. 
		 * @return {DeleteDistributionConfigurationResponse} Success
		 */
		DeleteDistributionConfiguration(distributionConfigurationArn: string): Observable<DeleteDistributionConfigurationResponse> {
			return this.http.delete<DeleteDistributionConfigurationResponse>(this.baseUri + 'DeleteDistributionConfiguration#distributionConfigurationArn?distributionConfigurationArn=' + (distributionConfigurationArn == null ? '' : encodeURIComponent(distributionConfigurationArn)), {});
		}

		/**
		 * Deletes an image.
		 * Delete DeleteImage#imageBuildVersionArn
		 * @param {string} imageBuildVersionArn The Amazon Resource Name (ARN) of the image to delete. 
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
		 * @param {string} componentBuildVersionArn The Amazon Resource Name (ARN) of the component that you want to retrieve. Regex requires "/\d+$" suffix.
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
		 * @param {string} imageBuildVersionArn The Amazon Resource Name (ARN) of the image that you want to retrieve. 
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
		 * Imports a component and transforms its data into a component document.
		 * Put ImportComponent
		 * @return {ImportComponentResponse} Success
		 */
		ImportComponent(requestBody: ImportComponentPutBody): Observable<ImportComponentResponse> {
			return this.http.put<ImportComponentResponse>(this.baseUri + 'ImportComponent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of component build versions for the specified semantic version.
		 * Post ListComponentBuildVersions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListComponentBuildVersionsResponse} Success
		 */
		ListComponentBuildVersions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListComponentBuildVersionsPostBody): Observable<ListComponentBuildVersionsResponse> {
			return this.http.post<ListComponentBuildVersionsResponse>(this.baseUri + 'ListComponentBuildVersions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of component build versions for the specified semantic version.
		 * Post ListComponents
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListComponentsResponse} Success
		 */
		ListComponents(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListComponentsPostBody): Observable<ListComponentsResponse> {
			return this.http.post<ListComponentsResponse>(this.baseUri + 'ListComponents?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Returns a list of distribution configurations.
		 * Post ListImageBuildVersions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListImageBuildVersionsResponse} Success
		 */
		ListImageBuildVersions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListImageBuildVersionsPostBody): Observable<ListImageBuildVersionsResponse> {
			return this.http.post<ListImageBuildVersionsResponse>(this.baseUri + 'ListImageBuildVersions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Returns the list of image build versions for the specified semantic version.
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
		 * Applies a policy to a component. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutComponentPolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
		 * Put PutComponentPolicy
		 * @return {PutComponentPolicyResponse} Success
		 */
		PutComponentPolicy(requestBody: PutComponentPolicyPutBody): Observable<PutComponentPolicyResponse> {
			return this.http.put<PutComponentPolicyResponse>(this.baseUri + 'PutComponentPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Updates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.
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
		 * The Amazon Resource Name (ARN) of the image whose creation you want to cancel.
		 * Required
		 */
		imageBuildVersionArn: string;

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}
	export interface CancelImageCreationPutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the image whose creation you want to cancel.
		 * Required
		 */
		imageBuildVersionArn: FormControl<string | null | undefined>,

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCancelImageCreationPutBodyFormGroup() {
		return new FormGroup<CancelImageCreationPutBodyFormProperties>({
			imageBuildVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image/[a-z0-9-_]+/\d+\.\d+\.\d+/\d+$')]),
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
		 * The semantic version of the component. This version follows the semantic version syntax. For example, major.minor.patch. This could be versioned like software (2.0.1) or like a date (2019.12.01).
		 * Required
		 */
		semanticVersion: string;

		/**
		 * The description of the component. Describes the contents of the component.
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of this component.
		 * Max length: 1024
		 * Min length: 1
		 */
		changeDescription?: string | null;

		/**
		 * The platform of the component.
		 * Required
		 */
		platform: ComponentPlatform;

		/**
		 * The operating system (OS) version supported by the component. If the OS information is available, a prefix match is performed against the parent image OS version during image recipe creation.
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		supportedOsVersions?: Array<string>;

		/**
		 * The data of the component. Used to specify the data inline. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component.
		 * Max length: 16000
		 * Min length: 1
		 */
		data?: string | null;

		/** The uri of the component. Must be an S3 URL and the requester must have permission to access the S3 bucket. If you use S3, you can specify component content up to your service quota. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component. */
		uri?: string | null;

		/**
		 * The ID of the KMS key that should be used to encrypt this component.
		 * Max length: 1024
		 * Min length: 1
		 */
		kmsKeyId?: string | null;

		/** The tags of the component. */
		tags?: {[id: string]: string };

		/**
		 * The idempotency token of the component.
		 * Required
		 * Max length: 36
		 * Min length: 1
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
		 * The semantic version of the component. This version follows the semantic version syntax. For example, major.minor.patch. This could be versioned like software (2.0.1) or like a date (2019.12.01).
		 * Required
		 */
		semanticVersion: FormControl<string | null | undefined>,

		/**
		 * The description of the component. Describes the contents of the component.
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of this component.
		 * Max length: 1024
		 * Min length: 1
		 */
		changeDescription: FormControl<string | null | undefined>,

		/**
		 * The platform of the component.
		 * Required
		 */
		platform: FormControl<ComponentPlatform | null | undefined>,

		/**
		 * The data of the component. Used to specify the data inline. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component.
		 * Max length: 16000
		 * Min length: 1
		 */
		data: FormControl<string | null | undefined>,

		/** The uri of the component. Must be an S3 URL and the requester must have permission to access the S3 bucket. If you use S3, you can specify component content up to your service quota. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component. */
		uri: FormControl<string | null | undefined>,

		/**
		 * The ID of the KMS key that should be used to encrypt this component.
		 * Max length: 1024
		 * Min length: 1
		 */
		kmsKeyId: FormControl<string | null | undefined>,

		/** The tags of the component. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The idempotency token of the component.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateComponentPutBodyFormGroup() {
		return new FormGroup<CreateComponentPutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			semanticVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]+\.[0-9]+\.[0-9]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			changeDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			platform: new FormControl<ComponentPlatform | null | undefined>(undefined, [Validators.required]),
			data: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(16000)]),
			uri: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
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
		 * Max length: 1024
		 * Min length: 1
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
		 * Max length: 36
		 * Min length: 1
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
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/** The tags of the distribution configuration. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The idempotency token of the distribution configuration.
		 * Required
		 * Max length: 36
		 * Min length: 1
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

		/**
		 * The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.
		 * Required
		 */
		imageRecipeArn: string;

		/** The Amazon Resource Name (ARN) of the distribution configuration that defines and configures the outputs of your pipeline. */
		distributionConfigurationArn?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the infrastructure configuration that defines the environment in which your image will be built and tested.
		 * Required
		 */
		infrastructureConfigurationArn: string;

		/** Image tests configuration. */
		imageTestsConfiguration?: CreateImagePutBodyImageTestsConfiguration;

		/** Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. */
		enhancedImageMetadataEnabled?: boolean | null;

		/** The tags of the image. */
		tags?: {[id: string]: string };

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}
	export interface CreateImagePutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.
		 * Required
		 */
		imageRecipeArn: FormControl<string | null | undefined>,

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
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateImagePutBodyFormGroup() {
		return new FormGroup<CreateImagePutBodyFormProperties>({
			imageRecipeArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-recipe/[a-z0-9-_]+/\d+\.\d+\.\d+$')]),
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):distribution-configuration/[a-z0-9-_]+$')]),
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):infrastructure-configuration/[a-z0-9-_]+$')]),
			enhancedImageMetadataEnabled: new FormControl<boolean | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface CreateImagePutBodyImageTestsConfiguration {
		imageTestsEnabled?: boolean | null;

		/**
		 * Minimum: 60
		 * Maximum: 1440
		 */
		timeoutMinutes?: number | null;
	}
	export interface CreateImagePutBodyImageTestsConfigurationFormProperties {
		imageTestsEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 60
		 * Maximum: 1440
		 */
		timeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateCreateImagePutBodyImageTestsConfigurationFormGroup() {
		return new FormGroup<CreateImagePutBodyImageTestsConfigurationFormProperties>({
			imageTestsEnabled: new FormControl<boolean | null | undefined>(undefined),
			timeoutMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(1440)]),
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
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the image recipe that will be used to configure images created by this image pipeline.
		 * Required
		 */
		imageRecipeArn: string;

		/**
		 * The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images created by this image pipeline.
		 * Required
		 */
		infrastructureConfigurationArn: string;

		/** The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images created by this image pipeline. */
		distributionConfigurationArn?: string | null;

		/** Image tests configuration. */
		imageTestsConfiguration?: CreateImagePipelinePutBodyImageTestsConfiguration;

		/** Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. */
		enhancedImageMetadataEnabled?: boolean | null;

		/** A schedule configures how often and when a pipeline will automatically create a new image. */
		schedule?: CreateImagePipelinePutBodySchedule;

		/** The status of the image pipeline. */
		status?: ImagePipelineStatus | null;

		/** The tags of the image pipeline. */
		tags?: {[id: string]: string };

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}
	export interface CreateImagePipelinePutBodyFormProperties {

		/**
		 * The name of the image pipeline.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description of the image pipeline.
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the image recipe that will be used to configure images created by this image pipeline.
		 * Required
		 */
		imageRecipeArn: FormControl<string | null | undefined>,

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
		status: FormControl<ImagePipelineStatus | null | undefined>,

		/** The tags of the image pipeline. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateImagePipelinePutBodyFormGroup() {
		return new FormGroup<CreateImagePipelinePutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			imageRecipeArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-recipe/[a-z0-9-_]+/\d+\.\d+\.\d+$')]),
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):infrastructure-configuration/[a-z0-9-_]+$')]),
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):distribution-configuration/[a-z0-9-_]+$')]),
			enhancedImageMetadataEnabled: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<ImagePipelineStatus | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface CreateImagePipelinePutBodyImageTestsConfiguration {
		imageTestsEnabled?: boolean | null;

		/**
		 * Minimum: 60
		 * Maximum: 1440
		 */
		timeoutMinutes?: number | null;
	}
	export interface CreateImagePipelinePutBodyImageTestsConfigurationFormProperties {
		imageTestsEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 60
		 * Maximum: 1440
		 */
		timeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateCreateImagePipelinePutBodyImageTestsConfigurationFormGroup() {
		return new FormGroup<CreateImagePipelinePutBodyImageTestsConfigurationFormProperties>({
			imageTestsEnabled: new FormControl<boolean | null | undefined>(undefined),
			timeoutMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(1440)]),
		});

	}

	export interface CreateImagePipelinePutBodySchedule {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		scheduleExpression?: string | null;
		pipelineExecutionStartCondition?: PipelineExecutionStartCondition | null;
	}
	export interface CreateImagePipelinePutBodyScheduleFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		scheduleExpression: FormControl<string | null | undefined>,
		pipelineExecutionStartCondition: FormControl<PipelineExecutionStartCondition | null | undefined>,
	}
	export function CreateCreateImagePipelinePutBodyScheduleFormGroup() {
		return new FormGroup<CreateImagePipelinePutBodyScheduleFormProperties>({
			scheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			pipelineExecutionStartCondition: new FormControl<PipelineExecutionStartCondition | null | undefined>(undefined),
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
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * The semantic version of the image recipe.
		 * Required
		 */
		semanticVersion: string;

		/**
		 * The components of the image recipe.
		 * Required
		 * Minimum items: 1
		 */
		components: Array<ComponentConfiguration>;

		/**
		 * The parent image of the image recipe. The value of the string can be the ARN of the parent image or an AMI ID. The format for the ARN follows this example: <code>arn:aws:imagebuilder:us-west-2:aws:image/windows-server-2016-english-full-base-x86/2019.x.x</code>. The ARN ends with <code>/20xx.x.x</code>, which communicates to EC2 Image Builder that you want to use the latest AMI created in 20xx (year). You can provide the specific version that you want to use, or you can use a wildcard in all of the fields. If you enter an AMI ID for the string value, you must have access to the AMI, and the AMI must be in the same Region in which you are using Image Builder.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		parentImage: string;

		/** The block device mappings of the image recipe. */
		blockDeviceMappings?: Array<InstanceBlockDeviceMapping>;

		/** The tags of the image recipe. */
		tags?: {[id: string]: string };

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Max length: 36
		 * Min length: 1
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
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The semantic version of the image recipe.
		 * Required
		 */
		semanticVersion: FormControl<string | null | undefined>,

		/**
		 * The parent image of the image recipe. The value of the string can be the ARN of the parent image or an AMI ID. The format for the ARN follows this example: <code>arn:aws:imagebuilder:us-west-2:aws:image/windows-server-2016-english-full-base-x86/2019.x.x</code>. The ARN ends with <code>/20xx.x.x</code>, which communicates to EC2 Image Builder that you want to use the latest AMI created in 20xx (year). You can provide the specific version that you want to use, or you can use a wildcard in all of the fields. If you enter an AMI ID for the string value, you must have access to the AMI, and the AMI must be in the same Region in which you are using Image Builder.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		parentImage: FormControl<string | null | undefined>,

		/** The tags of the image recipe. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Max length: 36
		 * Min length: 1
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
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
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
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;

		/** The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability. */
		instanceTypes?: Array<string>;

		/**
		 * The instance profile to associate with the instance used to customize your EC2 AMI.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		instanceProfileName: string;

		/** The security group IDs to associate with the instance used to customize your EC2 AMI. */
		securityGroupIds?: Array<string>;

		/**
		 * The subnet ID in which to place the instance used to customize your EC2 AMI.
		 * Max length: 1024
		 * Min length: 1
		 */
		subnetId?: string | null;

		/** Logging configuration defines where Image Builder uploads your logs. */
		logging?: CreateInfrastructureConfigurationPutBodyLogging;

		/**
		 * The key pair of the infrastructure configuration. This can be used to log on to and debug the instance used to create your image.
		 * Max length: 1024
		 * Min length: 1
		 */
		keyPair?: string | null;

		/** The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails. */
		terminateInstanceOnFailure?: boolean | null;

		/** The SNS topic on which to send image build events. */
		snsTopicArn?: string | null;

		/** The tags of the infrastructure configuration. */
		tags?: {[id: string]: string };

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Max length: 36
		 * Min length: 1
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
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The instance profile to associate with the instance used to customize your EC2 AMI.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		instanceProfileName: FormControl<string | null | undefined>,

		/**
		 * The subnet ID in which to place the instance used to customize your EC2 AMI.
		 * Max length: 1024
		 * Min length: 1
		 */
		subnetId: FormControl<string | null | undefined>,

		/**
		 * The key pair of the infrastructure configuration. This can be used to log on to and debug the instance used to create your image.
		 * Max length: 1024
		 * Min length: 1
		 */
		keyPair: FormControl<string | null | undefined>,

		/** The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails. */
		terminateInstanceOnFailure: FormControl<boolean | null | undefined>,

		/** The SNS topic on which to send image build events. */
		snsTopicArn: FormControl<string | null | undefined>,

		/** The tags of the infrastructure configuration. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateInfrastructureConfigurationPutBodyFormGroup() {
		return new FormGroup<CreateInfrastructureConfigurationPutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			instanceProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			subnetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			keyPair: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			terminateInstanceOnFailure: new FormControl<boolean | null | undefined>(undefined),
			snsTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:sns:[^:]+:\d{12}:[a-zA-Z0-9-_]{1,256}$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface CreateInfrastructureConfigurationPutBodyLogging {

		/** Amazon S3 logging configuration. */
		s3Logs?: S3Logs;
	}
	export interface CreateInfrastructureConfigurationPutBodyLoggingFormProperties {
	}
	export function CreateCreateInfrastructureConfigurationPutBodyLoggingFormGroup() {
		return new FormGroup<CreateInfrastructureConfigurationPutBodyLoggingFormProperties>({
		});

	}

	export interface ImportComponentPutBody {

		/**
		 * The name of the component.
		 * Required
		 */
		name: string;

		/**
		 * The semantic version of the component. This version follows the semantic version syntax. For example, major.minor.patch. This could be versioned like software (2.0.1) or like a date (2019.12.01).
		 * Required
		 */
		semanticVersion: string;

		/**
		 * The description of the component. Describes the contents of the component.
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of this component.
		 * Max length: 1024
		 * Min length: 1
		 */
		changeDescription?: string | null;

		/**
		 * The type of the component denotes whether the component is used to build the image or only to test it.
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
		platform: ComponentPlatform;

		/**
		 * The data of the component. Used to specify the data inline. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component.
		 * Max length: 1024
		 * Min length: 1
		 */
		data?: string | null;

		/** The uri of the component. Must be an S3 URL and the requester must have permission to access the S3 bucket. If you use S3, you can specify component content up to your service quota. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component. */
		uri?: string | null;

		/**
		 * The ID of the KMS key that should be used to encrypt this component.
		 * Max length: 1024
		 * Min length: 1
		 */
		kmsKeyId?: string | null;

		/** The tags of the component. */
		tags?: {[id: string]: string };

		/**
		 * The idempotency token of the component.
		 * Required
		 * Max length: 36
		 * Min length: 1
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
		 * The semantic version of the component. This version follows the semantic version syntax. For example, major.minor.patch. This could be versioned like software (2.0.1) or like a date (2019.12.01).
		 * Required
		 */
		semanticVersion: FormControl<string | null | undefined>,

		/**
		 * The description of the component. Describes the contents of the component.
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of this component.
		 * Max length: 1024
		 * Min length: 1
		 */
		changeDescription: FormControl<string | null | undefined>,

		/**
		 * The type of the component denotes whether the component is used to build the image or only to test it.
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
		platform: FormControl<ComponentPlatform | null | undefined>,

		/**
		 * The data of the component. Used to specify the data inline. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component.
		 * Max length: 1024
		 * Min length: 1
		 */
		data: FormControl<string | null | undefined>,

		/** The uri of the component. Must be an S3 URL and the requester must have permission to access the S3 bucket. If you use S3, you can specify component content up to your service quota. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component. */
		uri: FormControl<string | null | undefined>,

		/**
		 * The ID of the KMS key that should be used to encrypt this component.
		 * Max length: 1024
		 * Min length: 1
		 */
		kmsKeyId: FormControl<string | null | undefined>,

		/** The tags of the component. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The idempotency token of the component.
		 * Required
		 * Max length: 36
		 * Min length: 1
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
			platform: new FormControl<ComponentPlatform | null | undefined>(undefined, [Validators.required]),
			data: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			uri: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
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
		 * Max length: 1024
		 * Min length: 1
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
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentBuildVersionsPostBodyFormGroup() {
		return new FormGroup<ListComponentBuildVersionsPostBodyFormProperties>({
			componentVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):component/[a-z0-9-_]+/\d+\.\d+\.\d+$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListComponentsPostBody {

		/** The owner defines which components you want to list. By default, this request will only show components owned by your account. You can use this field to specify if you want to view components owned by yourself, by Amazon, or those components that have been shared with you by other customers. */
		owner?: Ownership | null;

		/**
		 * The filters.
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
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListComponentsPostBodyFormProperties {

		/** The owner defines which components you want to list. By default, this request will only show components owned by your account. You can use this field to specify if you want to view components owned by yourself, by Amazon, or those components that have been shared with you by other customers. */
		owner: FormControl<Ownership | null | undefined>,

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentsPostBodyFormGroup() {
		return new FormGroup<ListComponentsPostBodyFormProperties>({
			owner: new FormControl<Ownership | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListDistributionConfigurationsPostBody {

		/**
		 * The filters.
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
		 * Max length: 1024
		 * Min length: 1
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
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDistributionConfigurationsPostBodyFormGroup() {
		return new FormGroup<ListDistributionConfigurationsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListImageBuildVersionsPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the image whose build versions you want to retrieve.
		 * Required
		 */
		imageVersionArn: string;

		/**
		 * The filters.
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
		 * Max length: 1024
		 * Min length: 1
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
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImageBuildVersionsPostBodyFormGroup() {
		return new FormGroup<ListImageBuildVersionsPostBodyFormProperties>({
			imageVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image/[a-z0-9-_]+/\d+\.\d+\.\d+$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListImagePipelineImagesPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the image pipeline whose images you want to view.
		 * Required
		 */
		imagePipelineArn: string;

		/**
		 * The filters.
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
		 * Max length: 1024
		 * Min length: 1
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
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImagePipelineImagesPostBodyFormGroup() {
		return new FormGroup<ListImagePipelineImagesPostBodyFormProperties>({
			imagePipelineArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-pipeline/[a-z0-9-_]+$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListImagePipelinesPostBody {

		/**
		 * The filters.
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
		 * Max length: 1024
		 * Min length: 1
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
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImagePipelinesPostBodyFormGroup() {
		return new FormGroup<ListImagePipelinesPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListImageRecipesPostBody {

		/** The owner defines which image recipes you want to list. By default, this request will only show image recipes owned by your account. You can use this field to specify if you want to view image recipes owned by yourself, by Amazon, or those image recipes that have been shared with you by other customers. */
		owner?: Ownership | null;

		/**
		 * The filters.
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
		 * Max length: 1024
		 * Min length: 1
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
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImageRecipesPostBodyFormGroup() {
		return new FormGroup<ListImageRecipesPostBodyFormProperties>({
			owner: new FormControl<Ownership | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListImagesPostBody {

		/** The owner defines which images you want to list. By default, this request will only show images owned by your account. You can use this field to specify if you want to view images owned by yourself, by Amazon, or those images that have been shared with you by other customers. */
		owner?: Ownership | null;

		/**
		 * The filters.
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
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListImagesPostBodyFormProperties {

		/** The owner defines which images you want to list. By default, this request will only show images owned by your account. You can use this field to specify if you want to view images owned by yourself, by Amazon, or those images that have been shared with you by other customers. */
		owner: FormControl<Ownership | null | undefined>,

		/**
		 * The maximum items to return in a request.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImagesPostBodyFormGroup() {
		return new FormGroup<ListImagesPostBodyFormProperties>({
			owner: new FormControl<Ownership | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListInfrastructureConfigurationsPostBody {

		/**
		 * The filters.
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
		 * Max length: 1024
		 * Min length: 1
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
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInfrastructureConfigurationsPostBodyFormGroup() {
		return new FormGroup<ListInfrastructureConfigurationsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
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

	export interface PutComponentPolicyPutBody {

		/**
		 * The Amazon Resource Name (ARN) of the component that this policy should be applied to.
		 * Required
		 */
		componentArn: string;

		/**
		 * The policy to apply.
		 * Required
		 * Max length: 30000
		 * Min length: 1
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
		 * Max length: 30000
		 * Min length: 1
		 */
		policy: FormControl<string | null | undefined>,
	}
	export function CreatePutComponentPolicyPutBodyFormGroup() {
		return new FormGroup<PutComponentPolicyPutBodyFormProperties>({
			componentArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):component/[a-z0-9-_]+/\d+\.\d+\.\d+/\d+$')]),
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
		 * Max length: 30000
		 * Min length: 1
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
		 * Max length: 30000
		 * Min length: 1
		 */
		policy: FormControl<string | null | undefined>,
	}
	export function CreatePutImagePolicyPutBodyFormGroup() {
		return new FormGroup<PutImagePolicyPutBodyFormProperties>({
			imageArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image/[a-z0-9-_]+/\d+\.\d+\.\d+/\d+$')]),
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
		 * Max length: 30000
		 * Min length: 1
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
		 * Max length: 30000
		 * Min length: 1
		 */
		policy: FormControl<string | null | undefined>,
	}
	export function CreatePutImageRecipePolicyPutBodyFormGroup() {
		return new FormGroup<PutImageRecipePolicyPutBodyFormProperties>({
			imageRecipeArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-recipe/[a-z0-9-_]+/\d+\.\d+\.\d+$')]),
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
		 * Max length: 36
		 * Min length: 1
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
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartImagePipelineExecutionPutBodyFormGroup() {
		return new FormGroup<StartImagePipelineExecutionPutBodyFormProperties>({
			imagePipelineArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-pipeline/[a-z0-9-_]+$')]),
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
		 * Max length: 1024
		 * Min length: 1
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
		 * Max length: 36
		 * Min length: 1
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
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The idempotency token of the distribution configuration.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDistributionConfigurationPutBodyFormGroup() {
		return new FormGroup<UpdateDistributionConfigurationPutBodyFormProperties>({
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):distribution-configuration/[a-z0-9-_]+$')]),
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
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the image recipe that will be used to configure images updated by this image pipeline.
		 * Required
		 */
		imageRecipeArn: string;

		/**
		 * The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images updated by this image pipeline.
		 * Required
		 */
		infrastructureConfigurationArn: string;

		/** The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images updated by this image pipeline. */
		distributionConfigurationArn?: string | null;

		/** Image tests configuration. */
		imageTestsConfiguration?: UpdateImagePipelinePutBodyImageTestsConfiguration;

		/** Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. */
		enhancedImageMetadataEnabled?: boolean | null;

		/** A schedule configures how often and when a pipeline will automatically create a new image. */
		schedule?: UpdateImagePipelinePutBodySchedule;

		/** The status of the image pipeline. */
		status?: ImagePipelineStatus | null;

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}
	export interface UpdateImagePipelinePutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the image pipeline that you want to update.
		 * Required
		 */
		imagePipelineArn: FormControl<string | null | undefined>,

		/**
		 * The description of the image pipeline.
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the image recipe that will be used to configure images updated by this image pipeline.
		 * Required
		 */
		imageRecipeArn: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images updated by this image pipeline.
		 * Required
		 */
		infrastructureConfigurationArn: FormControl<string | null | undefined>,

		/** The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images updated by this image pipeline. */
		distributionConfigurationArn: FormControl<string | null | undefined>,

		/** Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. */
		enhancedImageMetadataEnabled: FormControl<boolean | null | undefined>,

		/** The status of the image pipeline. */
		status: FormControl<ImagePipelineStatus | null | undefined>,

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateImagePipelinePutBodyFormGroup() {
		return new FormGroup<UpdateImagePipelinePutBodyFormProperties>({
			imagePipelineArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-pipeline/[a-z0-9-_]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			imageRecipeArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-recipe/[a-z0-9-_]+/\d+\.\d+\.\d+$')]),
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):infrastructure-configuration/[a-z0-9-_]+$')]),
			distributionConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):distribution-configuration/[a-z0-9-_]+$')]),
			enhancedImageMetadataEnabled: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<ImagePipelineStatus | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface UpdateImagePipelinePutBodyImageTestsConfiguration {
		imageTestsEnabled?: boolean | null;

		/**
		 * Minimum: 60
		 * Maximum: 1440
		 */
		timeoutMinutes?: number | null;
	}
	export interface UpdateImagePipelinePutBodyImageTestsConfigurationFormProperties {
		imageTestsEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 60
		 * Maximum: 1440
		 */
		timeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateUpdateImagePipelinePutBodyImageTestsConfigurationFormGroup() {
		return new FormGroup<UpdateImagePipelinePutBodyImageTestsConfigurationFormProperties>({
			imageTestsEnabled: new FormControl<boolean | null | undefined>(undefined),
			timeoutMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(1440)]),
		});

	}

	export interface UpdateImagePipelinePutBodySchedule {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		scheduleExpression?: string | null;
		pipelineExecutionStartCondition?: PipelineExecutionStartCondition | null;
	}
	export interface UpdateImagePipelinePutBodyScheduleFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		scheduleExpression: FormControl<string | null | undefined>,
		pipelineExecutionStartCondition: FormControl<PipelineExecutionStartCondition | null | undefined>,
	}
	export function CreateUpdateImagePipelinePutBodyScheduleFormGroup() {
		return new FormGroup<UpdateImagePipelinePutBodyScheduleFormProperties>({
			scheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			pipelineExecutionStartCondition: new FormControl<PipelineExecutionStartCondition | null | undefined>(undefined),
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
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;

		/** The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability. */
		instanceTypes?: Array<string>;

		/**
		 * The instance profile to associate with the instance used to customize your EC2 AMI.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		instanceProfileName: string;

		/** The security group IDs to associate with the instance used to customize your EC2 AMI. */
		securityGroupIds?: Array<string>;

		/**
		 * The subnet ID to place the instance used to customize your EC2 AMI in.
		 * Max length: 1024
		 * Min length: 1
		 */
		subnetId?: string | null;

		/** Logging configuration defines where Image Builder uploads your logs. */
		logging?: UpdateInfrastructureConfigurationPutBodyLogging;

		/**
		 * The key pair of the infrastructure configuration. This can be used to log on to and debug the instance used to create your image.
		 * Max length: 1024
		 * Min length: 1
		 */
		keyPair?: string | null;

		/** The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails. */
		terminateInstanceOnFailure?: boolean | null;

		/** The SNS topic on which to send image build events. */
		snsTopicArn?: string | null;

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}
	export interface UpdateInfrastructureConfigurationPutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the infrastructure configuration that you want to update.
		 * Required
		 */
		infrastructureConfigurationArn: FormControl<string | null | undefined>,

		/**
		 * The description of the infrastructure configuration.
		 * Max length: 1024
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The instance profile to associate with the instance used to customize your EC2 AMI.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		instanceProfileName: FormControl<string | null | undefined>,

		/**
		 * The subnet ID to place the instance used to customize your EC2 AMI in.
		 * Max length: 1024
		 * Min length: 1
		 */
		subnetId: FormControl<string | null | undefined>,

		/**
		 * The key pair of the infrastructure configuration. This can be used to log on to and debug the instance used to create your image.
		 * Max length: 1024
		 * Min length: 1
		 */
		keyPair: FormControl<string | null | undefined>,

		/** The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails. */
		terminateInstanceOnFailure: FormControl<boolean | null | undefined>,

		/** The SNS topic on which to send image build events. */
		snsTopicArn: FormControl<string | null | undefined>,

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInfrastructureConfigurationPutBodyFormGroup() {
		return new FormGroup<UpdateInfrastructureConfigurationPutBodyFormProperties>({
			infrastructureConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):infrastructure-configuration/[a-z0-9-_]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			instanceProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			subnetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			keyPair: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			terminateInstanceOnFailure: new FormControl<boolean | null | undefined>(undefined),
			snsTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:]*:sns:[^:]+:\d{12}:[a-zA-Z0-9-_]{1,256}$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface UpdateInfrastructureConfigurationPutBodyLogging {

		/** Amazon S3 logging configuration. */
		s3Logs?: S3Logs;
	}
	export interface UpdateInfrastructureConfigurationPutBodyLoggingFormProperties {
	}
	export function CreateUpdateInfrastructureConfigurationPutBodyLoggingFormGroup() {
		return new FormGroup<UpdateInfrastructureConfigurationPutBodyLoggingFormProperties>({
		});

	}

}

