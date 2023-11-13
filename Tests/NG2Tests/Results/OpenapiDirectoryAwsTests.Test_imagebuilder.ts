import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CancelImageCreationResponse {
		requestId?: string | null;
		clientToken?: string | null;
		imageBuildVersionArn?: string | null;
	}

	export interface ServiceException {
	}

	export interface ClientException {
	}

	export interface ServiceUnavailableException {
	}

	export interface InvalidRequestException {
	}

	export interface IdempotentParameterMismatchException {
	}

	export interface ForbiddenException {
	}

	export interface CallRateLimitExceededException {
	}

	export interface ResourceInUseException {
	}

	export interface CreateComponentResponse {
		requestId?: string | null;
		clientToken?: string | null;
		componentBuildVersionArn?: string | null;
	}

	export interface InvalidVersionNumberException {
	}

	export interface InvalidParameterCombinationException {
	}

	export interface CreateDistributionConfigurationResponse {
		requestId?: string | null;
		clientToken?: string | null;
		distributionConfigurationArn?: string | null;
	}


	/**  Defines the settings for a specific Region.  */
	export interface Distribution {
		region: string;

		/** Define and configure the output AMIs of the pipeline. */
		amiDistributionConfiguration?: AmiDistributionConfiguration | null;
		licenseConfigurationArns?: Array<string> | null;
	}


	/**  Define and configure the output AMIs of the pipeline.  */
	export interface AmiDistributionConfiguration {
		name?: string | null;
		description?: string | null;
		amiTags?: TagMap | null;

		/** Describes the configuration for a launch permission. The launch permission modification request is sent to the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">EC2 ModifyImageAttribute</a> API on behalf of the user for each Region they have selected to distribute the AMI. */
		launchPermission?: LaunchPermissionConfiguration | null;
	}

	export interface TagMap {
	}


	/** Describes the configuration for a launch permission. The launch permission modification request is sent to the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">EC2 ModifyImageAttribute</a> API on behalf of the user for each Region they have selected to distribute the AMI. */
	export interface LaunchPermissionConfiguration {
		userIds?: Array<string> | null;
		userGroups?: Array<string> | null;
	}

	export interface ResourceAlreadyExistsException {
	}

	export interface CreateImageResponse {
		requestId?: string | null;
		clientToken?: string | null;
		imageBuildVersionArn?: string | null;
	}

	export interface CreateImagePipelineResponse {
		requestId?: string | null;
		clientToken?: string | null;
		imagePipelineArn?: string | null;
	}

	export enum PipelineExecutionStartCondition { EXPRESSION_MATCH_ONLY = 0, EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE = 1 }

	export interface CreateImageRecipeResponse {
		requestId?: string | null;
		clientToken?: string | null;
		imageRecipeArn?: string | null;
	}


	/**  Configuration details of the component.  */
	export interface ComponentConfiguration {
		componentArn: string;
	}


	/** Defines block device mappings for the instance used to configure your image. */
	export interface InstanceBlockDeviceMapping {
		deviceName?: string | null;

		/** Amazon EBS-specific block device mapping specifications. */
		ebs?: EbsInstanceBlockDeviceSpecification | null;
		virtualName?: string | null;
		noDevice?: string | null;
	}


	/** Amazon EBS-specific block device mapping specifications. */
	export interface EbsInstanceBlockDeviceSpecification {
		encrypted?: boolean | null;
		deleteOnTermination?: boolean | null;
		iops?: number | null;
		kmsKeyId?: string | null;
		snapshotId?: string | null;
		volumeSize?: number | null;
		volumeType?: EbsInstanceBlockDeviceSpecificationVolumeType | null;
	}

	export enum EbsInstanceBlockDeviceSpecificationVolumeType { standard = 0, io1 = 1, gp2 = 2, sc1 = 3, st1 = 4 }

	export interface CreateInfrastructureConfigurationResponse {
		requestId?: string | null;
		clientToken?: string | null;
		infrastructureConfigurationArn?: string | null;
	}


	/** Amazon S3 logging configuration. */
	export interface S3Logs {
		s3BucketName?: string | null;
		s3KeyPrefix?: string | null;
	}

	export interface DeleteComponentResponse {
		requestId?: string | null;
		componentBuildVersionArn?: string | null;
	}

	export interface ResourceDependencyException {
	}

	export interface DeleteDistributionConfigurationResponse {
		requestId?: string | null;
		distributionConfigurationArn?: string | null;
	}

	export interface DeleteImageResponse {
		requestId?: string | null;
		imageBuildVersionArn?: string | null;
	}

	export interface DeleteImagePipelineResponse {
		requestId?: string | null;
		imagePipelineArn?: string | null;
	}

	export interface DeleteImageRecipeResponse {
		requestId?: string | null;
		imageRecipeArn?: string | null;
	}

	export interface DeleteInfrastructureConfigurationResponse {
		requestId?: string | null;
		infrastructureConfigurationArn?: string | null;
	}

	export interface GetComponentResponse {
		requestId?: string | null;

		/** A detailed view of a component. */
		component?: Component | null;
	}


	/** A detailed view of a component. */
	export interface Component {
		arn?: string | null;
		name?: string | null;
		version?: string | null;
		description?: string | null;
		changeDescription?: string | null;
		type?: ComponentType | null;
		platform?: ComponentPlatform | null;
		supportedOsVersions?: Array<string> | null;
		owner?: string | null;
		data?: string | null;
		kmsKeyId?: string | null;
		encrypted?: boolean | null;
		dateCreated?: string | null;
		tags?: TagMap | null;
	}

	export enum ComponentType { BUILD = 0, TEST = 1 }

	export enum ComponentPlatform { Windows = 0, Linux = 1 }

	export interface GetComponentPolicyResponse {
		requestId?: string | null;
		policy?: string | null;
	}

	export interface ResourceNotFoundException {
	}

	export interface GetDistributionConfigurationResponse {
		requestId?: string | null;

		/** A distribution configuration. */
		distributionConfiguration?: DistributionConfiguration | null;
	}


	/** A distribution configuration. */
	export interface DistributionConfiguration {
		arn?: string | null;
		name?: string | null;
		description?: string | null;
		distributions?: Array<Distribution> | null;
		timeoutMinutes: number;
		dateCreated?: string | null;
		dateUpdated?: string | null;
		tags?: TagMap | null;
	}

	export interface GetImageResponse {
		requestId?: string | null;

		/** An image build version. */
		image?: Image | null;
	}


	/** An image build version. */
	export interface Image {
		arn?: string | null;
		name?: string | null;
		version?: string | null;
		platform?: ComponentPlatform | null;
		enhancedImageMetadataEnabled?: boolean | null;
		osVersion?: string | null;

		/** Image state shows the image status and the reason for that status. */
		state?: ImageState | null;

		/** An image recipe. */
		imageRecipe?: ImageRecipe | null;
		sourcePipelineName?: string | null;
		sourcePipelineArn?: string | null;

		/** Details of the infrastructure configuration. */
		infrastructureConfiguration?: InfrastructureConfiguration | null;

		/** A distribution configuration. */
		distributionConfiguration?: DistributionConfiguration | null;

		/** Image tests configuration. */
		imageTestsConfiguration?: ImageTestsConfiguration | null;
		dateCreated?: string | null;

		/** The resources produced by this image. */
		outputResources?: OutputResources | null;
		tags?: TagMap | null;
	}


	/**  Image state shows the image status and the reason for that status.  */
	export interface ImageState {
		status?: ImageStateStatus | null;
		reason?: string | null;
	}

	export enum ImageStateStatus { PENDING = 0, CREATING = 1, BUILDING = 2, TESTING = 3, DISTRIBUTING = 4, INTEGRATING = 5, AVAILABLE = 6, CANCELLED = 7, FAILED = 8, DEPRECATED = 9, DELETED = 10 }


	/** An image recipe. */
	export interface ImageRecipe {
		arn?: string | null;
		name?: string | null;
		description?: string | null;
		platform?: ComponentPlatform | null;
		owner?: string | null;
		version?: string | null;
		components?: Array<ComponentConfiguration> | null;
		parentImage?: string | null;
		blockDeviceMappings?: Array<InstanceBlockDeviceMapping> | null;
		dateCreated?: string | null;
		tags?: TagMap | null;
	}


	/** Details of the infrastructure configuration. */
	export interface InfrastructureConfiguration {
		arn?: string | null;
		name?: string | null;
		description?: string | null;
		instanceTypes?: Array<string> | null;
		instanceProfileName?: string | null;
		securityGroupIds?: Array<string> | null;
		subnetId?: string | null;

		/** Logging configuration defines where Image Builder uploads your logs. */
		logging?: Logging | null;
		keyPair?: string | null;
		terminateInstanceOnFailure?: boolean | null;
		snsTopicArn?: string | null;
		dateCreated?: string | null;
		dateUpdated?: string | null;
		tags?: TagMap | null;
	}


	/** Logging configuration defines where Image Builder uploads your logs. */
	export interface Logging {

		/** Amazon S3 logging configuration. */
		s3Logs?: S3Logs | null;
	}


	/** Image tests configuration. */
	export interface ImageTestsConfiguration {
		imageTestsEnabled?: boolean | null;
		timeoutMinutes?: number | null;
	}


	/** The resources produced by this image.  */
	export interface OutputResources {
		amis?: Array<Ami> | null;
	}


	/**  Details of an EC2 AMI.  */
	export interface Ami {
		region?: string | null;
		image?: string | null;
		name?: string | null;
		description?: string | null;

		/** Image state shows the image status and the reason for that status. */
		state?: ImageState | null;
	}

	export interface GetImagePipelineResponse {
		requestId?: string | null;

		/** Details of an image pipeline. */
		imagePipeline?: ImagePipeline | null;
	}


	/** Details of an image pipeline. */
	export interface ImagePipeline {
		arn?: string | null;
		name?: string | null;
		description?: string | null;
		platform?: ComponentPlatform | null;
		enhancedImageMetadataEnabled?: boolean | null;
		imageRecipeArn?: string | null;
		infrastructureConfigurationArn?: string | null;
		distributionConfigurationArn?: string | null;

		/** Image tests configuration. */
		imageTestsConfiguration?: ImageTestsConfiguration | null;

		/** A schedule configures how often and when a pipeline will automatically create a new image. */
		schedule?: Schedule | null;
		status?: ImagePipelineStatus | null;
		dateCreated?: string | null;
		dateUpdated?: string | null;
		dateLastRun?: string | null;
		dateNextRun?: string | null;
		tags?: TagMap | null;
	}


	/** A schedule configures how often and when a pipeline will automatically create a new image.  */
	export interface Schedule {
		scheduleExpression?: string | null;
		pipelineExecutionStartCondition?: PipelineExecutionStartCondition | null;
	}

	export enum ImagePipelineStatus { DISABLED = 0, ENABLED = 1 }

	export interface GetImagePolicyResponse {
		requestId?: string | null;
		policy?: string | null;
	}

	export interface GetImageRecipeResponse {
		requestId?: string | null;

		/** An image recipe. */
		imageRecipe?: ImageRecipe | null;
	}

	export interface GetImageRecipePolicyResponse {
		requestId?: string | null;
		policy?: string | null;
	}


	/** GetInfrastructureConfiguration response object.  */
	export interface GetInfrastructureConfigurationResponse {
		requestId?: string | null;

		/** Details of the infrastructure configuration. */
		infrastructureConfiguration?: InfrastructureConfiguration | null;
	}

	export interface ImportComponentResponse {
		requestId?: string | null;
		clientToken?: string | null;
		componentBuildVersionArn?: string | null;
	}

	export interface ListComponentBuildVersionsResponse {
		requestId?: string | null;
		componentSummaryList?: Array<ComponentSummary> | null;
		nextToken?: string | null;
	}


	/** A high-level summary of a component. */
	export interface ComponentSummary {
		arn?: string | null;
		name?: string | null;
		version?: string | null;
		platform?: ComponentPlatform | null;
		supportedOsVersions?: Array<string> | null;
		type?: ComponentType | null;
		owner?: string | null;
		description?: string | null;
		changeDescription?: string | null;
		dateCreated?: string | null;
		tags?: TagMap | null;
	}

	export interface InvalidPaginationTokenException {
	}

	export interface ListComponentsResponse {
		requestId?: string | null;
		componentVersionList?: Array<ComponentVersion> | null;
		nextToken?: string | null;
	}


	/** A high-level overview of a component semantic version. */
	export interface ComponentVersion {
		arn?: string | null;
		name?: string | null;
		version?: string | null;
		description?: string | null;
		platform?: ComponentPlatform | null;
		supportedOsVersions?: Array<string> | null;
		type?: ComponentType | null;
		owner?: string | null;
		dateCreated?: string | null;
	}


	/** A filter name and value pair that is used to return a more specific list of results from a list operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.  */
	export interface Filter {
		name?: string | null;
		values?: Array<string> | null;
	}

	export interface ListDistributionConfigurationsResponse {
		requestId?: string | null;
		distributionConfigurationSummaryList?: Array<DistributionConfigurationSummary> | null;
		nextToken?: string | null;
	}


	/** A high-level overview of a distribution configuration. */
	export interface DistributionConfigurationSummary {
		arn?: string | null;
		name?: string | null;
		description?: string | null;
		dateCreated?: string | null;
		dateUpdated?: string | null;
		tags?: TagMap | null;
	}

	export interface ListImageBuildVersionsResponse {
		requestId?: string | null;
		imageSummaryList?: Array<ImageSummary> | null;
		nextToken?: string | null;
	}


	/** An image summary. */
	export interface ImageSummary {
		arn?: string | null;
		name?: string | null;
		version?: string | null;
		platform?: ComponentPlatform | null;
		osVersion?: string | null;

		/** Image state shows the image status and the reason for that status. */
		state?: ImageState | null;
		owner?: string | null;
		dateCreated?: string | null;

		/** The resources produced by this image. */
		outputResources?: OutputResources | null;
		tags?: TagMap | null;
	}

	export interface ListImagePipelineImagesResponse {
		requestId?: string | null;
		imageSummaryList?: Array<ImageSummary> | null;
		nextToken?: string | null;
	}

	export interface ListImagePipelinesResponse {
		requestId?: string | null;
		imagePipelineList?: Array<ImagePipeline> | null;
		nextToken?: string | null;
	}

	export interface ListImageRecipesResponse {
		requestId?: string | null;
		imageRecipeSummaryList?: Array<ImageRecipeSummary> | null;
		nextToken?: string | null;
	}


	/** A summary of an image recipe. */
	export interface ImageRecipeSummary {
		arn?: string | null;
		name?: string | null;
		platform?: ComponentPlatform | null;
		owner?: string | null;
		parentImage?: string | null;
		dateCreated?: string | null;
		tags?: TagMap | null;
	}

	export interface ListImagesResponse {
		requestId?: string | null;
		imageVersionList?: Array<ImageVersion> | null;
		nextToken?: string | null;
	}


	/** An image semantic version. */
	export interface ImageVersion {
		arn?: string | null;
		name?: string | null;
		version?: string | null;
		platform?: ComponentPlatform | null;
		osVersion?: string | null;
		owner?: string | null;
		dateCreated?: string | null;
	}

	export interface ListInfrastructureConfigurationsResponse {
		requestId?: string | null;
		infrastructureConfigurationSummaryList?: Array<InfrastructureConfigurationSummary> | null;
		nextToken?: string | null;
	}


	/** The infrastructure used when building EC2 AMIs. */
	export interface InfrastructureConfigurationSummary {
		arn?: string | null;
		name?: string | null;
		description?: string | null;
		dateCreated?: string | null;
		dateUpdated?: string | null;
		tags?: TagMap | null;
	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap | null;
	}

	export interface InvalidParameterException {
	}

	export interface PutComponentPolicyResponse {
		requestId?: string | null;
		componentArn?: string | null;
	}

	export interface InvalidParameterValueException {
	}

	export interface PutImagePolicyResponse {
		requestId?: string | null;
		imageArn?: string | null;
	}

	export interface PutImageRecipePolicyResponse {
		requestId?: string | null;
		imageRecipeArn?: string | null;
	}

	export interface StartImagePipelineExecutionResponse {
		requestId?: string | null;
		clientToken?: string | null;
		imageBuildVersionArn?: string | null;
	}

	export interface TagResourceResponse {
	}

	export interface UntagResourceResponse {
	}

	export interface UpdateDistributionConfigurationResponse {
		requestId?: string | null;
		clientToken?: string | null;
		distributionConfigurationArn?: string | null;
	}

	export interface UpdateImagePipelineResponse {
		requestId?: string | null;
		clientToken?: string | null;
		imagePipelineArn?: string | null;
	}

	export interface UpdateInfrastructureConfigurationResponse {
		requestId?: string | null;
		clientToken?: string | null;
		infrastructureConfigurationArn?: string | null;
	}

	export interface CancelImageCreationRequest {
		imageBuildVersionArn: string;
		clientToken: string;
	}

	export enum Platform { Windows = 0, Linux = 1 }

	export enum ComponentFormat { SHELL = 0 }

	export interface CreateComponentRequest {
		name: string;
		semanticVersion: string;
		description?: string | null;
		changeDescription?: string | null;
		platform: ComponentPlatform;
		supportedOsVersions?: Array<string> | null;
		data?: string | null;
		uri?: string | null;
		kmsKeyId?: string | null;
		tags?: TagMap | null;
		clientToken: string;
	}

	export interface CreateDistributionConfigurationRequest {
		name: string;
		description?: string | null;
		distributions: Array<Distribution>;
		tags?: TagMap | null;
		clientToken: string;
	}

	export enum PipelineStatus { DISABLED = 0, ENABLED = 1 }

	export interface CreateImagePipelineRequest {
		name: string;
		description?: string | null;
		imageRecipeArn: string;
		infrastructureConfigurationArn: string;
		distributionConfigurationArn?: string | null;

		/** Image tests configuration. */
		imageTestsConfiguration?: ImageTestsConfiguration | null;
		enhancedImageMetadataEnabled?: boolean | null;

		/** A schedule configures how often and when a pipeline will automatically create a new image. */
		schedule?: Schedule | null;
		status?: ImagePipelineStatus | null;
		tags?: TagMap | null;
		clientToken: string;
	}

	export interface CreateImageRecipeRequest {
		name: string;
		description?: string | null;
		semanticVersion: string;
		components: Array<ComponentConfiguration>;
		parentImage: string;
		blockDeviceMappings?: Array<InstanceBlockDeviceMapping> | null;
		tags?: TagMap | null;
		clientToken: string;
	}

	export interface CreateImageRequest {
		imageRecipeArn: string;
		distributionConfigurationArn?: string | null;
		infrastructureConfigurationArn: string;

		/** Image tests configuration. */
		imageTestsConfiguration?: ImageTestsConfiguration | null;
		enhancedImageMetadataEnabled?: boolean | null;
		tags?: TagMap | null;
		clientToken: string;
	}

	export interface CreateInfrastructureConfigurationRequest {
		name: string;
		description?: string | null;
		instanceTypes?: Array<string> | null;
		instanceProfileName: string;
		securityGroupIds?: Array<string> | null;
		subnetId?: string | null;

		/** Logging configuration defines where Image Builder uploads your logs. */
		logging?: Logging | null;
		keyPair?: string | null;
		terminateInstanceOnFailure?: boolean | null;
		snsTopicArn?: string | null;
		tags?: TagMap | null;
		clientToken: string;
	}

	export interface DeleteComponentRequest {
	}

	export interface DeleteDistributionConfigurationRequest {
	}

	export interface DeleteImagePipelineRequest {
	}

	export interface DeleteImageRecipeRequest {
	}

	export interface DeleteImageRequest {
	}

	export interface DeleteInfrastructureConfigurationRequest {
	}

	export enum EbsVolumeType { standard = 0, io1 = 1, gp2 = 2, sc1 = 3, st1 = 4 }

	export interface GetComponentPolicyRequest {
	}

	export interface GetComponentRequest {
	}

	export interface GetDistributionConfigurationRequest {
	}

	export interface GetImagePipelineRequest {
	}

	export interface GetImagePolicyRequest {
	}

	export interface GetImageRecipePolicyRequest {
	}

	export interface GetImageRecipeRequest {
	}

	export interface GetImageRequest {
	}


	/**  GetInfrastructureConfiguration request object.  */
	export interface GetInfrastructureConfigurationRequest {
	}

	export enum ImageStatus { PENDING = 0, CREATING = 1, BUILDING = 2, TESTING = 3, DISTRIBUTING = 4, INTEGRATING = 5, AVAILABLE = 6, CANCELLED = 7, FAILED = 8, DEPRECATED = 9, DELETED = 10 }

	export interface ImportComponentRequest {
		name: string;
		semanticVersion: string;
		description?: string | null;
		changeDescription?: string | null;
		type: ComponentType;
		format: ComponentFormat;
		platform: ComponentPlatform;
		data?: string | null;
		uri?: string | null;
		kmsKeyId?: string | null;
		tags?: TagMap | null;
		clientToken: string;
	}

	export interface ListComponentBuildVersionsRequest {
		componentVersionArn: string;
		maxResults?: number | null;
		nextToken?: string | null;
	}

	export enum Ownership { Self = 0, Shared = 1, Amazon = 2 }

	export interface ListComponentsRequest {
		owner?: Ownership | null;
		filters?: Array<Filter> | null;
		maxResults?: number | null;
		nextToken?: string | null;
	}

	export interface ListDistributionConfigurationsRequest {
		filters?: Array<Filter> | null;
		maxResults?: number | null;
		nextToken?: string | null;
	}

	export interface ListImageBuildVersionsRequest {
		imageVersionArn: string;
		filters?: Array<Filter> | null;
		maxResults?: number | null;
		nextToken?: string | null;
	}

	export interface ListImagePipelineImagesRequest {
		imagePipelineArn: string;
		filters?: Array<Filter> | null;
		maxResults?: number | null;
		nextToken?: string | null;
	}

	export interface ListImagePipelinesRequest {
		filters?: Array<Filter> | null;
		maxResults?: number | null;
		nextToken?: string | null;
	}

	export interface ListImageRecipesRequest {
		owner?: Ownership | null;
		filters?: Array<Filter> | null;
		maxResults?: number | null;
		nextToken?: string | null;
	}

	export interface ListImagesRequest {
		owner?: Ownership | null;
		filters?: Array<Filter> | null;
		maxResults?: number | null;
		nextToken?: string | null;
	}

	export interface ListInfrastructureConfigurationsRequest {
		filters?: Array<Filter> | null;
		maxResults?: number | null;
		nextToken?: string | null;
	}

	export interface ListTagsForResourceRequest {
	}

	export interface PutComponentPolicyRequest {
		componentArn: string;
		policy: string;
	}

	export interface PutImagePolicyRequest {
		imageArn: string;
		policy: string;
	}

	export interface PutImageRecipePolicyRequest {
		imageRecipeArn: string;
		policy: string;
	}

	export interface StartImagePipelineExecutionRequest {
		imagePipelineArn: string;
		clientToken: string;
	}

	export interface TagResourceRequest {
		tags: TagMap;
	}

	export interface UntagResourceRequest {
	}

	export interface UpdateDistributionConfigurationRequest {
		distributionConfigurationArn: string;
		description?: string | null;
		distributions: Array<Distribution>;
		clientToken: string;
	}

	export interface UpdateImagePipelineRequest {
		imagePipelineArn: string;
		description?: string | null;
		imageRecipeArn: string;
		infrastructureConfigurationArn: string;
		distributionConfigurationArn?: string | null;

		/** Image tests configuration. */
		imageTestsConfiguration?: ImageTestsConfiguration | null;
		enhancedImageMetadataEnabled?: boolean | null;

		/** A schedule configures how often and when a pipeline will automatically create a new image. */
		schedule?: Schedule | null;
		status?: ImagePipelineStatus | null;
		clientToken: string;
	}

	export interface UpdateInfrastructureConfigurationRequest {
		infrastructureConfigurationArn: string;
		description?: string | null;
		instanceTypes?: Array<string> | null;
		instanceProfileName: string;
		securityGroupIds?: Array<string> | null;
		subnetId?: string | null;

		/** Logging configuration defines where Image Builder uploads your logs. */
		logging?: Logging | null;
		keyPair?: string | null;
		terminateInstanceOnFailure?: boolean | null;
		snsTopicArn?: string | null;
		clientToken: string;
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
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image/[a-z0-9-_]+/\d+\.\d+\.\d+/\d+$
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

	export interface CreateComponentPutBody {

		/**
		 * The name of the component.
		 * Required
		 * Pattern: ^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$
		 */
		name: string;

		/**
		 * The semantic version of the component. This version follows the semantic version syntax. For example, major.minor.patch. This could be versioned like software (2.0.1) or like a date (2019.12.01).
		 * Required
		 * Pattern: ^[0-9]+\.[0-9]+\.[0-9]+$
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
		supportedOsVersions?: Array<string> | null;

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
		tags?: {[id: string]: string } | null;

		/**
		 * The idempotency token of the component.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}

	export interface CreateDistributionConfigurationPutBody {

		/**
		 * The name of the distribution configuration.
		 * Required
		 * Pattern: ^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$
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
		tags?: {[id: string]: string } | null;

		/**
		 * The idempotency token of the distribution configuration.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}

	export interface CreateImagePutBody {

		/**
		 * The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.
		 * Required
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-recipe/[a-z0-9-_]+/\d+\.\d+\.\d+$
		 */
		imageRecipeArn: string;

		/**
		 * The Amazon Resource Name (ARN) of the distribution configuration that defines and configures the outputs of your pipeline.
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):distribution-configuration/[a-z0-9-_]+$
		 */
		distributionConfigurationArn?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the infrastructure configuration that defines the environment in which your image will be built and tested.
		 * Required
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):infrastructure-configuration/[a-z0-9-_]+$
		 */
		infrastructureConfigurationArn: string;

		/** Image tests configuration. */
		imageTestsConfiguration?: CreateImagePutBodyImageTestsConfiguration | null;

		/** Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. */
		enhancedImageMetadataEnabled?: boolean | null;

		/** The tags of the image. */
		tags?: {[id: string]: string } | null;

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}

	export interface CreateImagePutBodyImageTestsConfiguration {
		imageTestsEnabled?: boolean | null;
		timeoutMinutes?: number | null;
	}

	export interface CreateImagePipelinePutBody {

		/**
		 * The name of the image pipeline.
		 * Required
		 * Pattern: ^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$
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
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-recipe/[a-z0-9-_]+/\d+\.\d+\.\d+$
		 */
		imageRecipeArn: string;

		/**
		 * The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images created by this image pipeline.
		 * Required
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):infrastructure-configuration/[a-z0-9-_]+$
		 */
		infrastructureConfigurationArn: string;

		/**
		 * The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images created by this image pipeline.
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):distribution-configuration/[a-z0-9-_]+$
		 */
		distributionConfigurationArn?: string | null;

		/** Image tests configuration. */
		imageTestsConfiguration?: CreateImagePipelinePutBodyImageTestsConfiguration | null;

		/** Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. */
		enhancedImageMetadataEnabled?: boolean | null;

		/** A schedule configures how often and when a pipeline will automatically create a new image. */
		schedule?: CreateImagePipelinePutBodySchedule | null;

		/** The status of the image pipeline. */
		status?: ImagePipelineStatus | null;

		/** The tags of the image pipeline. */
		tags?: {[id: string]: string } | null;

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}

	export interface CreateImagePipelinePutBodyImageTestsConfiguration {
		imageTestsEnabled?: boolean | null;
		timeoutMinutes?: number | null;
	}

	export interface CreateImagePipelinePutBodySchedule {
		scheduleExpression?: string | null;
		pipelineExecutionStartCondition?: PipelineExecutionStartCondition | null;
	}

	export interface CreateImageRecipePutBody {

		/**
		 * The name of the image recipe.
		 * Required
		 * Pattern: ^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$
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
		 * Pattern: ^[0-9]+\.[0-9]+\.[0-9]+$
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
		blockDeviceMappings?: Array<InstanceBlockDeviceMapping> | null;

		/** The tags of the image recipe. */
		tags?: {[id: string]: string } | null;

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}

	export interface CreateInfrastructureConfigurationPutBody {

		/**
		 * The name of the infrastructure configuration.
		 * Required
		 * Pattern: ^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$
		 */
		name: string;

		/**
		 * The description of the infrastructure configuration.
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;

		/** The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability. */
		instanceTypes?: Array<string> | null;

		/**
		 * The instance profile to associate with the instance used to customize your EC2 AMI.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		instanceProfileName: string;

		/** The security group IDs to associate with the instance used to customize your EC2 AMI. */
		securityGroupIds?: Array<string> | null;

		/**
		 * The subnet ID in which to place the instance used to customize your EC2 AMI.
		 * Max length: 1024
		 * Min length: 1
		 */
		subnetId?: string | null;

		/** Logging configuration defines where Image Builder uploads your logs. */
		logging?: CreateInfrastructureConfigurationPutBodyLogging | null;

		/**
		 * The key pair of the infrastructure configuration. This can be used to log on to and debug the instance used to create your image.
		 * Max length: 1024
		 * Min length: 1
		 */
		keyPair?: string | null;

		/** The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails. */
		terminateInstanceOnFailure?: boolean | null;

		/**
		 * The SNS topic on which to send image build events.
		 * Pattern: ^arn:aws[^:]*:sns:[^:]+:\d{12}:[a-zA-Z0-9-_]{1,256}$
		 */
		snsTopicArn?: string | null;

		/** The tags of the infrastructure configuration. */
		tags?: {[id: string]: string } | null;

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}

	export interface CreateInfrastructureConfigurationPutBodyLogging {

		/** Amazon S3 logging configuration. */
		s3Logs?: S3Logs | null;
	}

	export interface ImportComponentPutBody {

		/**
		 * The name of the component.
		 * Required
		 * Pattern: ^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$
		 */
		name: string;

		/**
		 * The semantic version of the component. This version follows the semantic version syntax. For example, major.minor.patch. This could be versioned like software (2.0.1) or like a date (2019.12.01).
		 * Required
		 * Pattern: ^[0-9]+\.[0-9]+\.[0-9]+$
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
		tags?: {[id: string]: string } | null;

		/**
		 * The idempotency token of the component.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}

	export interface ListComponentBuildVersionsPostBody {

		/**
		 * The component version Amazon Resource Name (ARN) whose versions you want to list.
		 * Required
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):component/[a-z0-9-_]+/\d+\.\d+\.\d+$
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

	export interface ListComponentsPostBody {

		/** The owner defines which components you want to list. By default, this request will only show components owned by your account. You can use this field to specify if you want to view components owned by yourself, by Amazon, or those components that have been shared with you by other customers. */
		owner?: Ownership | null;

		/**
		 * The filters.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter> | null;

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

	export interface ListDistributionConfigurationsPostBody {

		/**
		 * The filters.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter> | null;

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

	export interface ListImageBuildVersionsPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the image whose build versions you want to retrieve.
		 * Required
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image/[a-z0-9-_]+/\d+\.\d+\.\d+$
		 */
		imageVersionArn: string;

		/**
		 * The filters.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter> | null;

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

	export interface ListImagePipelineImagesPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the image pipeline whose images you want to view.
		 * Required
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-pipeline/[a-z0-9-_]+$
		 */
		imagePipelineArn: string;

		/**
		 * The filters.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter> | null;

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

	export interface ListImagePipelinesPostBody {

		/**
		 * The filters.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter> | null;

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

	export interface ListImageRecipesPostBody {

		/** The owner defines which image recipes you want to list. By default, this request will only show image recipes owned by your account. You can use this field to specify if you want to view image recipes owned by yourself, by Amazon, or those image recipes that have been shared with you by other customers. */
		owner?: Ownership | null;

		/**
		 * The filters.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter> | null;

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

	export interface ListImagesPostBody {

		/** The owner defines which images you want to list. By default, this request will only show images owned by your account. You can use this field to specify if you want to view images owned by yourself, by Amazon, or those images that have been shared with you by other customers. */
		owner?: Ownership | null;

		/**
		 * The filters.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter> | null;

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

	export interface ListInfrastructureConfigurationsPostBody {

		/**
		 * The filters.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<Filter> | null;

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

	export interface TagResourcePostBody {

		/**
		 * The tags to apply to the resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}

	export interface PutComponentPolicyPutBody {

		/**
		 * The Amazon Resource Name (ARN) of the component that this policy should be applied to.
		 * Required
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):component/[a-z0-9-_]+/\d+\.\d+\.\d+/\d+$
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

	export interface PutImagePolicyPutBody {

		/**
		 * The Amazon Resource Name (ARN) of the image that this policy should be applied to.
		 * Required
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image/[a-z0-9-_]+/\d+\.\d+\.\d+/\d+$
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

	export interface PutImageRecipePolicyPutBody {

		/**
		 * The Amazon Resource Name (ARN) of the image recipe that this policy should be applied to.
		 * Required
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-recipe/[a-z0-9-_]+/\d+\.\d+\.\d+$
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

	export interface StartImagePipelineExecutionPutBody {

		/**
		 * The Amazon Resource Name (ARN) of the image pipeline that you want to manually invoke.
		 * Required
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-pipeline/[a-z0-9-_]+$
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

	export interface UpdateDistributionConfigurationPutBody {

		/**
		 * The Amazon Resource Name (ARN) of the distribution configuration that you want to update.
		 * Required
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):distribution-configuration/[a-z0-9-_]+$
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

	export interface UpdateImagePipelinePutBody {

		/**
		 * The Amazon Resource Name (ARN) of the image pipeline that you want to update.
		 * Required
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-pipeline/[a-z0-9-_]+$
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
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):image-recipe/[a-z0-9-_]+/\d+\.\d+\.\d+$
		 */
		imageRecipeArn: string;

		/**
		 * The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images updated by this image pipeline.
		 * Required
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):infrastructure-configuration/[a-z0-9-_]+$
		 */
		infrastructureConfigurationArn: string;

		/**
		 * The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images updated by this image pipeline.
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):distribution-configuration/[a-z0-9-_]+$
		 */
		distributionConfigurationArn?: string | null;

		/** Image tests configuration. */
		imageTestsConfiguration?: UpdateImagePipelinePutBodyImageTestsConfiguration | null;

		/** Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. */
		enhancedImageMetadataEnabled?: boolean | null;

		/** A schedule configures how often and when a pipeline will automatically create a new image. */
		schedule?: UpdateImagePipelinePutBodySchedule | null;

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

	export interface UpdateImagePipelinePutBodyImageTestsConfiguration {
		imageTestsEnabled?: boolean | null;
		timeoutMinutes?: number | null;
	}

	export interface UpdateImagePipelinePutBodySchedule {
		scheduleExpression?: string | null;
		pipelineExecutionStartCondition?: PipelineExecutionStartCondition | null;
	}

	export interface UpdateInfrastructureConfigurationPutBody {

		/**
		 * The Amazon Resource Name (ARN) of the infrastructure configuration that you want to update.
		 * Required
		 * Pattern: ^arn:aws[^:]*:imagebuilder:[^:]+:(?:\d{12}|aws):infrastructure-configuration/[a-z0-9-_]+$
		 */
		infrastructureConfigurationArn: string;

		/**
		 * The description of the infrastructure configuration.
		 * Max length: 1024
		 * Min length: 1
		 */
		description?: string | null;

		/** The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability. */
		instanceTypes?: Array<string> | null;

		/**
		 * The instance profile to associate with the instance used to customize your EC2 AMI.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		instanceProfileName: string;

		/** The security group IDs to associate with the instance used to customize your EC2 AMI. */
		securityGroupIds?: Array<string> | null;

		/**
		 * The subnet ID to place the instance used to customize your EC2 AMI in.
		 * Max length: 1024
		 * Min length: 1
		 */
		subnetId?: string | null;

		/** Logging configuration defines where Image Builder uploads your logs. */
		logging?: UpdateInfrastructureConfigurationPutBodyLogging | null;

		/**
		 * The key pair of the infrastructure configuration. This can be used to log on to and debug the instance used to create your image.
		 * Max length: 1024
		 * Min length: 1
		 */
		keyPair?: string | null;

		/** The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails. */
		terminateInstanceOnFailure?: boolean | null;

		/**
		 * The SNS topic on which to send image build events.
		 * Pattern: ^arn:aws[^:]*:sns:[^:]+:\d{12}:[a-zA-Z0-9-_]{1,256}$
		 */
		snsTopicArn?: string | null;

		/**
		 * The idempotency token used to make this request idempotent.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: string;
	}

	export interface UpdateInfrastructureConfigurationPutBodyLogging {

		/** Amazon S3 logging configuration. */
		s3Logs?: S3Logs | null;
	}

}

