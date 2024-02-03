import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchCheckLayerAvailabilityResponse {
		layers?: Array<Layer>;
		failures?: Array<LayerFailure>;
	}
	export interface BatchCheckLayerAvailabilityResponseFormProperties {
	}
	export function CreateBatchCheckLayerAvailabilityResponseFormGroup() {
		return new FormGroup<BatchCheckLayerAvailabilityResponseFormProperties>({
		});

	}


	/** An object that represents an Amazon ECR image layer. */
	export interface Layer {
		layerDigest?: string;
		layerAvailability?: LayerAvailability;
		layerSize?: number | null;
		mediaType?: string;
	}

	/** An object that represents an Amazon ECR image layer. */
	export interface LayerFormProperties {
		layerDigest: FormControl<string | null | undefined>,
		layerAvailability: FormControl<LayerAvailability | null | undefined>,
		layerSize: FormControl<number | null | undefined>,
		mediaType: FormControl<string | null | undefined>,
	}
	export function CreateLayerFormGroup() {
		return new FormGroup<LayerFormProperties>({
			layerDigest: new FormControl<string | null | undefined>(undefined),
			layerAvailability: new FormControl<LayerAvailability | null | undefined>(undefined),
			layerSize: new FormControl<number | null | undefined>(undefined),
			mediaType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LayerAvailability { AVAILABLE = 'AVAILABLE', UNAVAILABLE = 'UNAVAILABLE' }


	/** An object that represents an Amazon ECR image layer failure. */
	export interface LayerFailure {
		layerDigest?: string;
		failureCode?: LayerFailureCode;
		failureReason?: string;
	}

	/** An object that represents an Amazon ECR image layer failure. */
	export interface LayerFailureFormProperties {
		layerDigest: FormControl<string | null | undefined>,
		failureCode: FormControl<LayerFailureCode | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateLayerFailureFormGroup() {
		return new FormGroup<LayerFailureFormProperties>({
			layerDigest: new FormControl<string | null | undefined>(undefined),
			failureCode: new FormControl<LayerFailureCode | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LayerFailureCode { InvalidLayerDigest = 'InvalidLayerDigest', MissingLayerDigest = 'MissingLayerDigest' }

	export interface BatchCheckLayerAvailabilityRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;

		/** Required */
		layerDigests: Array<string>;
	}
	export interface BatchCheckLayerAvailabilityRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateBatchCheckLayerAvailabilityRequestFormGroup() {
		return new FormGroup<BatchCheckLayerAvailabilityRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RepositoryNotFoundException {
	}
	export interface RepositoryNotFoundExceptionFormProperties {
	}
	export function CreateRepositoryNotFoundExceptionFormGroup() {
		return new FormGroup<RepositoryNotFoundExceptionFormProperties>({
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

	export interface ServerException {
	}
	export interface ServerExceptionFormProperties {
	}
	export function CreateServerExceptionFormGroup() {
		return new FormGroup<ServerExceptionFormProperties>({
		});

	}

	export interface RegistryNotFoundException {
	}
	export interface RegistryNotFoundExceptionFormProperties {
	}
	export function CreateRegistryNotFoundExceptionFormGroup() {
		return new FormGroup<RegistryNotFoundExceptionFormProperties>({
		});

	}

	export interface UnsupportedCommandException {
	}
	export interface UnsupportedCommandExceptionFormProperties {
	}
	export function CreateUnsupportedCommandExceptionFormGroup() {
		return new FormGroup<UnsupportedCommandExceptionFormProperties>({
		});

	}

	export interface BatchDeleteImageResponse {
		imageIds?: Array<ImageIdentifier>;
		failures?: Array<ImageFailure>;
	}
	export interface BatchDeleteImageResponseFormProperties {
	}
	export function CreateBatchDeleteImageResponseFormGroup() {
		return new FormGroup<BatchDeleteImageResponseFormProperties>({
		});

	}


	/** An object with identifying information for an Amazon ECR image. */
	export interface ImageIdentifier {
		imageDigest?: string;
		imageTag?: string;
	}

	/** An object with identifying information for an Amazon ECR image. */
	export interface ImageIdentifierFormProperties {
		imageDigest: FormControl<string | null | undefined>,
		imageTag: FormControl<string | null | undefined>,
	}
	export function CreateImageIdentifierFormGroup() {
		return new FormGroup<ImageIdentifierFormProperties>({
			imageDigest: new FormControl<string | null | undefined>(undefined),
			imageTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents an Amazon ECR image failure. */
	export interface ImageFailure {
		imageId?: ImageIdentifier;
		failureCode?: ImageFailureCode;
		failureReason?: string;
	}

	/** An object that represents an Amazon ECR image failure. */
	export interface ImageFailureFormProperties {
		failureCode: FormControl<ImageFailureCode | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateImageFailureFormGroup() {
		return new FormGroup<ImageFailureFormProperties>({
			failureCode: new FormControl<ImageFailureCode | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImageFailureCode { InvalidImageDigest = 'InvalidImageDigest', InvalidImageTag = 'InvalidImageTag', ImageTagDoesNotMatchDigest = 'ImageTagDoesNotMatchDigest', ImageNotFound = 'ImageNotFound', MissingDigestAndTag = 'MissingDigestAndTag', ImageReferencedByManifestList = 'ImageReferencedByManifestList', KmsError = 'KmsError' }

	export interface BatchDeleteImageRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;

		/** Required */
		imageIds: Array<ImageIdentifier>;
	}
	export interface BatchDeleteImageRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteImageRequestFormGroup() {
		return new FormGroup<BatchDeleteImageRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CompleteLayerUploadResponse {
		registryId?: string;
		repositoryName?: string;
		uploadId?: string;
		layerDigest?: string;
	}
	export interface CompleteLayerUploadResponseFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		uploadId: FormControl<string | null | undefined>,
		layerDigest: FormControl<string | null | undefined>,
	}
	export function CreateCompleteLayerUploadResponseFormGroup() {
		return new FormGroup<CompleteLayerUploadResponseFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			uploadId: new FormControl<string | null | undefined>(undefined),
			layerDigest: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CompleteLayerUploadRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;

		/** Required */
		uploadId: string;

		/** Required */
		layerDigests: Array<string>;
	}
	export interface CompleteLayerUploadRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,

		/** Required */
		uploadId: FormControl<string | null | undefined>,
	}
	export function CreateCompleteLayerUploadRequestFormGroup() {
		return new FormGroup<CompleteLayerUploadRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uploadId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UploadNotFoundException {
	}
	export interface UploadNotFoundExceptionFormProperties {
	}
	export function CreateUploadNotFoundExceptionFormGroup() {
		return new FormGroup<UploadNotFoundExceptionFormProperties>({
		});

	}

	export interface InvalidLayerException {
	}
	export interface InvalidLayerExceptionFormProperties {
	}
	export function CreateInvalidLayerExceptionFormGroup() {
		return new FormGroup<InvalidLayerExceptionFormProperties>({
		});

	}

	export interface LayerPartTooSmallException {
	}
	export interface LayerPartTooSmallExceptionFormProperties {
	}
	export function CreateLayerPartTooSmallExceptionFormGroup() {
		return new FormGroup<LayerPartTooSmallExceptionFormProperties>({
		});

	}

	export interface LayerAlreadyExistsException {
	}
	export interface LayerAlreadyExistsExceptionFormProperties {
	}
	export function CreateLayerAlreadyExistsExceptionFormGroup() {
		return new FormGroup<LayerAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface EmptyUploadException {
	}
	export interface EmptyUploadExceptionFormProperties {
	}
	export function CreateEmptyUploadExceptionFormGroup() {
		return new FormGroup<EmptyUploadExceptionFormProperties>({
		});

	}

	export interface CreateRepositoryResponse {
		repository?: Repository;

		/** The catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery. */
		catalogData?: RepositoryCatalogData;
	}
	export interface CreateRepositoryResponseFormProperties {
	}
	export function CreateCreateRepositoryResponseFormGroup() {
		return new FormGroup<CreateRepositoryResponseFormProperties>({
		});

	}


	/** An object representing a repository. */
	export interface Repository {
		repositoryArn?: string;
		registryId?: string;
		repositoryName?: string;
		repositoryUri?: string;
		createdAt?: Date;
	}

	/** An object representing a repository. */
	export interface RepositoryFormProperties {
		repositoryArn: FormControl<string | null | undefined>,
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		repositoryUri: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateRepositoryFormGroup() {
		return new FormGroup<RepositoryFormProperties>({
			repositoryArn: new FormControl<string | null | undefined>(undefined),
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			repositoryUri: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery. */
	export interface RepositoryCatalogData {
		description?: string;
		architectures?: Array<string>;
		operatingSystems?: Array<string>;
		logoUrl?: string;
		aboutText?: string;
		usageText?: string;
		marketplaceCertified?: boolean | null;
	}

	/** The catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery. */
	export interface RepositoryCatalogDataFormProperties {
		description: FormControl<string | null | undefined>,
		logoUrl: FormControl<string | null | undefined>,
		aboutText: FormControl<string | null | undefined>,
		usageText: FormControl<string | null | undefined>,
		marketplaceCertified: FormControl<boolean | null | undefined>,
	}
	export function CreateRepositoryCatalogDataFormGroup() {
		return new FormGroup<RepositoryCatalogDataFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			logoUrl: new FormControl<string | null | undefined>(undefined),
			aboutText: new FormControl<string | null | undefined>(undefined),
			usageText: new FormControl<string | null | undefined>(undefined),
			marketplaceCertified: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateRepositoryRequest {

		/** Required */
		repositoryName: string;
		catalogData?: RepositoryCatalogDataInput;
		tags?: Array<Tag>;
	}
	export interface CreateRepositoryRequestFormProperties {

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateCreateRepositoryRequestFormGroup() {
		return new FormGroup<CreateRepositoryRequestFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that contains the catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery. */
	export interface RepositoryCatalogDataInput {
		description?: string;
		architectures?: Array<string>;
		operatingSystems?: Array<string>;
		logoImageBlob?: string;
		aboutText?: string;
		usageText?: string;
	}

	/** An object that contains the catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery. */
	export interface RepositoryCatalogDataInputFormProperties {
		description: FormControl<string | null | undefined>,
		logoImageBlob: FormControl<string | null | undefined>,
		aboutText: FormControl<string | null | undefined>,
		usageText: FormControl<string | null | undefined>,
	}
	export function CreateRepositoryCatalogDataInputFormGroup() {
		return new FormGroup<RepositoryCatalogDataInputFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			logoImageBlob: new FormControl<string | null | undefined>(undefined),
			aboutText: new FormControl<string | null | undefined>(undefined),
			usageText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define both. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	/** The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define both. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters. */
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

	export interface InvalidTagParameterException {
	}
	export interface InvalidTagParameterExceptionFormProperties {
	}
	export function CreateInvalidTagParameterExceptionFormGroup() {
		return new FormGroup<InvalidTagParameterExceptionFormProperties>({
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

	export interface RepositoryAlreadyExistsException {
	}
	export interface RepositoryAlreadyExistsExceptionFormProperties {
	}
	export function CreateRepositoryAlreadyExistsExceptionFormGroup() {
		return new FormGroup<RepositoryAlreadyExistsExceptionFormProperties>({
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

	export interface DeleteRepositoryResponse {
		repository?: Repository;
	}
	export interface DeleteRepositoryResponseFormProperties {
	}
	export function CreateDeleteRepositoryResponseFormGroup() {
		return new FormGroup<DeleteRepositoryResponseFormProperties>({
		});

	}

	export interface DeleteRepositoryRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;
		force?: boolean | null;
	}
	export interface DeleteRepositoryRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
		force: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteRepositoryRequestFormGroup() {
		return new FormGroup<DeleteRepositoryRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			force: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RepositoryNotEmptyException {
	}
	export interface RepositoryNotEmptyExceptionFormProperties {
	}
	export function CreateRepositoryNotEmptyExceptionFormGroup() {
		return new FormGroup<RepositoryNotEmptyExceptionFormProperties>({
		});

	}

	export interface DeleteRepositoryPolicyResponse {
		registryId?: string;
		repositoryName?: string;
		policyText?: string;
	}
	export interface DeleteRepositoryPolicyResponseFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		policyText: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRepositoryPolicyResponseFormGroup() {
		return new FormGroup<DeleteRepositoryPolicyResponseFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			policyText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteRepositoryPolicyRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;
	}
	export interface DeleteRepositoryPolicyRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRepositoryPolicyRequestFormGroup() {
		return new FormGroup<DeleteRepositoryPolicyRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RepositoryPolicyNotFoundException {
	}
	export interface RepositoryPolicyNotFoundExceptionFormProperties {
	}
	export function CreateRepositoryPolicyNotFoundExceptionFormGroup() {
		return new FormGroup<RepositoryPolicyNotFoundExceptionFormProperties>({
		});

	}

	export interface DescribeImageTagsResponse {
		imageTagDetails?: Array<ImageTagDetail>;
		nextToken?: string;
	}
	export interface DescribeImageTagsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeImageTagsResponseFormGroup() {
		return new FormGroup<DescribeImageTagsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents the image tag details for an image. */
	export interface ImageTagDetail {
		imageTag?: string;
		createdAt?: Date;
		imageDetail?: ReferencedImageDetail;
	}

	/** An object that represents the image tag details for an image. */
	export interface ImageTagDetailFormProperties {
		imageTag: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateImageTagDetailFormGroup() {
		return new FormGroup<ImageTagDetailFormProperties>({
			imageTag: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** An object that describes the image tag details that are returned by a <a>DescribeImageTags</a> action. */
	export interface ReferencedImageDetail {
		imageDigest?: string;
		imageSizeInBytes?: number | null;
		imagePushedAt?: Date;
		imageManifestMediaType?: string;
		artifactMediaType?: string;
	}

	/** An object that describes the image tag details that are returned by a <a>DescribeImageTags</a> action. */
	export interface ReferencedImageDetailFormProperties {
		imageDigest: FormControl<string | null | undefined>,
		imageSizeInBytes: FormControl<number | null | undefined>,
		imagePushedAt: FormControl<Date | null | undefined>,
		imageManifestMediaType: FormControl<string | null | undefined>,
		artifactMediaType: FormControl<string | null | undefined>,
	}
	export function CreateReferencedImageDetailFormGroup() {
		return new FormGroup<ReferencedImageDetailFormProperties>({
			imageDigest: new FormControl<string | null | undefined>(undefined),
			imageSizeInBytes: new FormControl<number | null | undefined>(undefined),
			imagePushedAt: new FormControl<Date | null | undefined>(undefined),
			imageManifestMediaType: new FormControl<string | null | undefined>(undefined),
			artifactMediaType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeImageTagsRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface DescribeImageTagsRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeImageTagsRequestFormGroup() {
		return new FormGroup<DescribeImageTagsRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeImagesResponse {
		imageDetails?: Array<ImageDetail>;
		nextToken?: string;
	}
	export interface DescribeImagesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeImagesResponseFormGroup() {
		return new FormGroup<DescribeImagesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that describes an image that's returned by a <a>DescribeImages</a> operation. */
	export interface ImageDetail {
		registryId?: string;
		repositoryName?: string;
		imageDigest?: string;
		imageTags?: Array<string>;
		imageSizeInBytes?: number | null;
		imagePushedAt?: Date;
		imageManifestMediaType?: string;
		artifactMediaType?: string;
	}

	/** An object that describes an image that's returned by a <a>DescribeImages</a> operation. */
	export interface ImageDetailFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		imageDigest: FormControl<string | null | undefined>,
		imageSizeInBytes: FormControl<number | null | undefined>,
		imagePushedAt: FormControl<Date | null | undefined>,
		imageManifestMediaType: FormControl<string | null | undefined>,
		artifactMediaType: FormControl<string | null | undefined>,
	}
	export function CreateImageDetailFormGroup() {
		return new FormGroup<ImageDetailFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			imageDigest: new FormControl<string | null | undefined>(undefined),
			imageSizeInBytes: new FormControl<number | null | undefined>(undefined),
			imagePushedAt: new FormControl<Date | null | undefined>(undefined),
			imageManifestMediaType: new FormControl<string | null | undefined>(undefined),
			artifactMediaType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeImagesRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;
		imageIds?: Array<ImageIdentifier>;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface DescribeImagesRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeImagesRequestFormGroup() {
		return new FormGroup<DescribeImagesRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ImageNotFoundException {
	}
	export interface ImageNotFoundExceptionFormProperties {
	}
	export function CreateImageNotFoundExceptionFormGroup() {
		return new FormGroup<ImageNotFoundExceptionFormProperties>({
		});

	}

	export interface DescribeRegistriesResponse {

		/** Required */
		registries: Array<Registry>;
		nextToken?: string;
	}
	export interface DescribeRegistriesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRegistriesResponseFormGroup() {
		return new FormGroup<DescribeRegistriesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of a public registry. */
	export interface Registry {

		/** Required */
		registryId: string;

		/** Required */
		registryArn: string;

		/** Required */
		registryUri: string;

		/** Required */
		verified: boolean;

		/** Required */
		aliases: Array<RegistryAlias>;
	}

	/** The details of a public registry. */
	export interface RegistryFormProperties {

		/** Required */
		registryId: FormControl<string | null | undefined>,

		/** Required */
		registryArn: FormControl<string | null | undefined>,

		/** Required */
		registryUri: FormControl<string | null | undefined>,

		/** Required */
		verified: FormControl<boolean | null | undefined>,
	}
	export function CreateRegistryFormGroup() {
		return new FormGroup<RegistryFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			registryArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			registryUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			verified: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object representing the aliases for a public registry. A public registry is given an alias when it's created. However, a custom alias can be set using the Amazon ECR console. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html">Registries</a> in the <i>Amazon Elastic Container Registry User Guide</i>. */
	export interface RegistryAlias {

		/** Required */
		name: string;

		/** Required */
		status: RegistryAliasStatus;

		/** Required */
		primaryRegistryAlias: boolean;

		/** Required */
		defaultRegistryAlias: boolean;
	}

	/** An object representing the aliases for a public registry. A public registry is given an alias when it's created. However, a custom alias can be set using the Amazon ECR console. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html">Registries</a> in the <i>Amazon Elastic Container Registry User Guide</i>. */
	export interface RegistryAliasFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<RegistryAliasStatus | null | undefined>,

		/** Required */
		primaryRegistryAlias: FormControl<boolean | null | undefined>,

		/** Required */
		defaultRegistryAlias: FormControl<boolean | null | undefined>,
	}
	export function CreateRegistryAliasFormGroup() {
		return new FormGroup<RegistryAliasFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<RegistryAliasStatus | null | undefined>(undefined, [Validators.required]),
			primaryRegistryAlias: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			defaultRegistryAlias: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RegistryAliasStatus { ACTIVE = 'ACTIVE', PENDING = 'PENDING', REJECTED = 'REJECTED' }

	export interface DescribeRegistriesRequest {
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface DescribeRegistriesRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeRegistriesRequestFormGroup() {
		return new FormGroup<DescribeRegistriesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeRepositoriesResponse {
		repositories?: Array<Repository>;
		nextToken?: string;
	}
	export interface DescribeRepositoriesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRepositoriesResponseFormGroup() {
		return new FormGroup<DescribeRepositoriesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRepositoriesRequest {
		registryId?: string;
		repositoryNames?: Array<string>;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface DescribeRepositoriesRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeRepositoriesRequestFormGroup() {
		return new FormGroup<DescribeRepositoriesRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAuthorizationTokenResponse {
		authorizationData?: AuthorizationData;
	}
	export interface GetAuthorizationTokenResponseFormProperties {
	}
	export function CreateGetAuthorizationTokenResponseFormGroup() {
		return new FormGroup<GetAuthorizationTokenResponseFormProperties>({
		});

	}


	/** An authorization token data object that corresponds to a public registry. */
	export interface AuthorizationData {
		authorizationToken?: string;
		expiresAt?: Date;
	}

	/** An authorization token data object that corresponds to a public registry. */
	export interface AuthorizationDataFormProperties {
		authorizationToken: FormControl<string | null | undefined>,
		expiresAt: FormControl<Date | null | undefined>,
	}
	export function CreateAuthorizationDataFormGroup() {
		return new FormGroup<AuthorizationDataFormProperties>({
			authorizationToken: new FormControl<string | null | undefined>(undefined),
			expiresAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetAuthorizationTokenRequest {
	}
	export interface GetAuthorizationTokenRequestFormProperties {
	}
	export function CreateGetAuthorizationTokenRequestFormGroup() {
		return new FormGroup<GetAuthorizationTokenRequestFormProperties>({
		});

	}

	export interface GetRegistryCatalogDataResponse {

		/** Required */
		registryCatalogData: RegistryCatalogData;
	}
	export interface GetRegistryCatalogDataResponseFormProperties {
	}
	export function CreateGetRegistryCatalogDataResponseFormGroup() {
		return new FormGroup<GetRegistryCatalogDataResponseFormProperties>({
		});

	}


	/** The metadata for a public registry. */
	export interface RegistryCatalogData {
		displayName?: string;
	}

	/** The metadata for a public registry. */
	export interface RegistryCatalogDataFormProperties {
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateRegistryCatalogDataFormGroup() {
		return new FormGroup<RegistryCatalogDataFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRegistryCatalogDataRequest {
	}
	export interface GetRegistryCatalogDataRequestFormProperties {
	}
	export function CreateGetRegistryCatalogDataRequestFormGroup() {
		return new FormGroup<GetRegistryCatalogDataRequestFormProperties>({
		});

	}

	export interface GetRepositoryCatalogDataResponse {
		catalogData?: RepositoryCatalogData;
	}
	export interface GetRepositoryCatalogDataResponseFormProperties {
	}
	export function CreateGetRepositoryCatalogDataResponseFormGroup() {
		return new FormGroup<GetRepositoryCatalogDataResponseFormProperties>({
		});

	}

	export interface GetRepositoryCatalogDataRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;
	}
	export interface GetRepositoryCatalogDataRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateGetRepositoryCatalogDataRequestFormGroup() {
		return new FormGroup<GetRepositoryCatalogDataRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RepositoryCatalogDataNotFoundException {
	}
	export interface RepositoryCatalogDataNotFoundExceptionFormProperties {
	}
	export function CreateRepositoryCatalogDataNotFoundExceptionFormGroup() {
		return new FormGroup<RepositoryCatalogDataNotFoundExceptionFormProperties>({
		});

	}

	export interface GetRepositoryPolicyResponse {
		registryId?: string;
		repositoryName?: string;
		policyText?: string;
	}
	export interface GetRepositoryPolicyResponseFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		policyText: FormControl<string | null | undefined>,
	}
	export function CreateGetRepositoryPolicyResponseFormGroup() {
		return new FormGroup<GetRepositoryPolicyResponseFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			policyText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRepositoryPolicyRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;
	}
	export interface GetRepositoryPolicyRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateGetRepositoryPolicyRequestFormGroup() {
		return new FormGroup<GetRepositoryPolicyRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InitiateLayerUploadResponse {
		uploadId?: string;
		partSize?: number | null;
	}
	export interface InitiateLayerUploadResponseFormProperties {
		uploadId: FormControl<string | null | undefined>,
		partSize: FormControl<number | null | undefined>,
	}
	export function CreateInitiateLayerUploadResponseFormGroup() {
		return new FormGroup<InitiateLayerUploadResponseFormProperties>({
			uploadId: new FormControl<string | null | undefined>(undefined),
			partSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InitiateLayerUploadRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;
	}
	export interface InitiateLayerUploadRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateInitiateLayerUploadRequestFormGroup() {
		return new FormGroup<InitiateLayerUploadRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		resourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutImageResponse {
		image?: Image;
	}
	export interface PutImageResponseFormProperties {
	}
	export function CreatePutImageResponseFormGroup() {
		return new FormGroup<PutImageResponseFormProperties>({
		});

	}


	/** An object that represents an Amazon ECR image. */
	export interface Image {
		registryId?: string;
		repositoryName?: string;
		imageId?: ImageIdentifier;
		imageManifest?: string;
		imageManifestMediaType?: string;
	}

	/** An object that represents an Amazon ECR image. */
	export interface ImageFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		imageManifest: FormControl<string | null | undefined>,
		imageManifestMediaType: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			imageManifest: new FormControl<string | null | undefined>(undefined),
			imageManifestMediaType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutImageRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;

		/** Required */
		imageManifest: string;
		imageManifestMediaType?: string;
		imageTag?: string;
		imageDigest?: string;
	}
	export interface PutImageRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,

		/** Required */
		imageManifest: FormControl<string | null | undefined>,
		imageManifestMediaType: FormControl<string | null | undefined>,
		imageTag: FormControl<string | null | undefined>,
		imageDigest: FormControl<string | null | undefined>,
	}
	export function CreatePutImageRequestFormGroup() {
		return new FormGroup<PutImageRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageManifest: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageManifestMediaType: new FormControl<string | null | undefined>(undefined),
			imageTag: new FormControl<string | null | undefined>(undefined),
			imageDigest: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImageAlreadyExistsException {
	}
	export interface ImageAlreadyExistsExceptionFormProperties {
	}
	export function CreateImageAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ImageAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface LayersNotFoundException {
	}
	export interface LayersNotFoundExceptionFormProperties {
	}
	export function CreateLayersNotFoundExceptionFormGroup() {
		return new FormGroup<LayersNotFoundExceptionFormProperties>({
		});

	}

	export interface ReferencedImagesNotFoundException {
	}
	export interface ReferencedImagesNotFoundExceptionFormProperties {
	}
	export function CreateReferencedImagesNotFoundExceptionFormGroup() {
		return new FormGroup<ReferencedImagesNotFoundExceptionFormProperties>({
		});

	}

	export interface ImageTagAlreadyExistsException {
	}
	export interface ImageTagAlreadyExistsExceptionFormProperties {
	}
	export function CreateImageTagAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ImageTagAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface ImageDigestDoesNotMatchException {
	}
	export interface ImageDigestDoesNotMatchExceptionFormProperties {
	}
	export function CreateImageDigestDoesNotMatchExceptionFormGroup() {
		return new FormGroup<ImageDigestDoesNotMatchExceptionFormProperties>({
		});

	}

	export interface PutRegistryCatalogDataResponse {

		/** Required */
		registryCatalogData: RegistryCatalogData;
	}
	export interface PutRegistryCatalogDataResponseFormProperties {
	}
	export function CreatePutRegistryCatalogDataResponseFormGroup() {
		return new FormGroup<PutRegistryCatalogDataResponseFormProperties>({
		});

	}

	export interface PutRegistryCatalogDataRequest {
		displayName?: string;
	}
	export interface PutRegistryCatalogDataRequestFormProperties {
		displayName: FormControl<string | null | undefined>,
	}
	export function CreatePutRegistryCatalogDataRequestFormGroup() {
		return new FormGroup<PutRegistryCatalogDataRequestFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutRepositoryCatalogDataResponse {
		catalogData?: RepositoryCatalogData;
	}
	export interface PutRepositoryCatalogDataResponseFormProperties {
	}
	export function CreatePutRepositoryCatalogDataResponseFormGroup() {
		return new FormGroup<PutRepositoryCatalogDataResponseFormProperties>({
		});

	}

	export interface PutRepositoryCatalogDataRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;

		/** Required */
		catalogData: RepositoryCatalogDataInput;
	}
	export interface PutRepositoryCatalogDataRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreatePutRepositoryCatalogDataRequestFormGroup() {
		return new FormGroup<PutRepositoryCatalogDataRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SetRepositoryPolicyResponse {
		registryId?: string;
		repositoryName?: string;
		policyText?: string;
	}
	export interface SetRepositoryPolicyResponseFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		policyText: FormControl<string | null | undefined>,
	}
	export function CreateSetRepositoryPolicyResponseFormGroup() {
		return new FormGroup<SetRepositoryPolicyResponseFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			policyText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetRepositoryPolicyRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;

		/** Required */
		policyText: string;
		force?: boolean | null;
	}
	export interface SetRepositoryPolicyRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,

		/** Required */
		policyText: FormControl<string | null | undefined>,
		force: FormControl<boolean | null | undefined>,
	}
	export function CreateSetRepositoryPolicyRequestFormGroup() {
		return new FormGroup<SetRepositoryPolicyRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			force: new FormControl<boolean | null | undefined>(undefined),
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

	export interface TagResourceRequest {

		/** Required */
		resourceArn: string;

		/** Required */
		tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UntagResourceRequest {

		/** Required */
		resourceArn: string;

		/** Required */
		tagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UploadLayerPartResponse {
		registryId?: string;
		repositoryName?: string;
		uploadId?: string;
		lastByteReceived?: number | null;
	}
	export interface UploadLayerPartResponseFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		uploadId: FormControl<string | null | undefined>,
		lastByteReceived: FormControl<number | null | undefined>,
	}
	export function CreateUploadLayerPartResponseFormGroup() {
		return new FormGroup<UploadLayerPartResponseFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			uploadId: new FormControl<string | null | undefined>(undefined),
			lastByteReceived: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UploadLayerPartRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;

		/** Required */
		uploadId: string;

		/** Required */
		partFirstByte: number;

		/** Required */
		partLastByte: number;

		/** Required */
		layerPartBlob: string;
	}
	export interface UploadLayerPartRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,

		/** Required */
		uploadId: FormControl<string | null | undefined>,

		/** Required */
		partFirstByte: FormControl<number | null | undefined>,

		/** Required */
		partLastByte: FormControl<number | null | undefined>,

		/** Required */
		layerPartBlob: FormControl<string | null | undefined>,
	}
	export function CreateUploadLayerPartRequestFormGroup() {
		return new FormGroup<UploadLayerPartRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uploadId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			partFirstByte: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			partLastByte: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			layerPartBlob: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidLayerPartException {
	}
	export interface InvalidLayerPartExceptionFormProperties {
	}
	export function CreateInvalidLayerPartExceptionFormGroup() {
		return new FormGroup<InvalidLayerPartExceptionFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Checks the availability of one or more image layers that are within a repository in a public registry. When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
		 * Post #X-Amz-Target=SpencerFrontendService.BatchCheckLayerAvailability
		 * @return {BatchCheckLayerAvailabilityResponse} Success
		 */
		BatchCheckLayerAvailability(requestBody: BatchCheckLayerAvailabilityRequest): Observable<BatchCheckLayerAvailabilityResponse> {
			return this.http.post<BatchCheckLayerAvailabilityResponse>(this.baseUri + '#X-Amz-Target=SpencerFrontendService.BatchCheckLayerAvailability', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a list of specified images that are within a repository in a public registry. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the digest of the image in your request.</p>
		 * Post #X-Amz-Target=SpencerFrontendService.BatchDeleteImage
		 * @return {BatchDeleteImageResponse} Success
		 */
		BatchDeleteImage(requestBody: BatchDeleteImageRequest): Observable<BatchDeleteImageResponse> {
			return this.http.post<BatchDeleteImageResponse>(this.baseUri + '#X-Amz-Target=SpencerFrontendService.BatchDeleteImage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Informs Amazon ECR that the image layer upload is complete for a specified public registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once for each new image layer to verify that the upload is complete.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
		 * Post #X-Amz-Target=SpencerFrontendService.CompleteLayerUpload
		 * @return {CompleteLayerUploadResponse} Success
		 */
		CompleteLayerUpload(requestBody: CompleteLayerUploadRequest): Observable<CompleteLayerUploadResponse> {
			return this.http.post<CompleteLayerUploadResponse>(this.baseUri + '#X-Amz-Target=SpencerFrontendService.CompleteLayerUpload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a repository in a public registry. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
		 * Post #X-Amz-Target=SpencerFrontendService.CreateRepository
		 * @return {CreateRepositoryResponse} Success
		 */
		CreateRepository(requestBody: CreateRepositoryRequest): Observable<CreateRepositoryResponse> {
			return this.http.post<CreateRepositoryResponse>(this.baseUri + '#X-Amz-Target=SpencerFrontendService.CreateRepository', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a repository in a public registry. If the repository contains images, you must either manually delete all images in the repository or use the <code>force</code> option. This option deletes all images on your behalf before deleting the repository.
		 * Post #X-Amz-Target=SpencerFrontendService.DeleteRepository
		 * @return {DeleteRepositoryResponse} Success
		 */
		DeleteRepository(requestBody: DeleteRepositoryRequest): Observable<DeleteRepositoryResponse> {
			return this.http.post<DeleteRepositoryResponse>(this.baseUri + '#X-Amz-Target=SpencerFrontendService.DeleteRepository', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the repository policy that's associated with the specified repository.
		 * Post #X-Amz-Target=SpencerFrontendService.DeleteRepositoryPolicy
		 * @return {DeleteRepositoryPolicyResponse} Success
		 */
		DeleteRepositoryPolicy(requestBody: DeleteRepositoryPolicyRequest): Observable<DeleteRepositoryPolicyResponse> {
			return this.http.post<DeleteRepositoryPolicyResponse>(this.baseUri + '#X-Amz-Target=SpencerFrontendService.DeleteRepositoryPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the image tag details for a repository in a public registry.
		 * Post #X-Amz-Target=SpencerFrontendService.DescribeImageTags
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeImageTagsResponse} Success
		 */
		DescribeImageTags(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeImageTagsRequest): Observable<DescribeImageTagsResponse> {
			return this.http.post<DescribeImageTagsResponse>(this.baseUri + '#X-Amz-Target=SpencerFrontendService.DescribeImageTags?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns metadata that's related to the images in a repository in a public registry.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size. Therefore, it might return a larger image size than the image sizes that are returned by <a>DescribeImages</a>.</p> </note>
		 * Post #X-Amz-Target=SpencerFrontendService.DescribeImages
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeImagesResponse} Success
		 */
		DescribeImages(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeImagesRequest): Observable<DescribeImagesResponse> {
			return this.http.post<DescribeImagesResponse>(this.baseUri + '#X-Amz-Target=SpencerFrontendService.DescribeImages?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns details for a public registry.
		 * Post #X-Amz-Target=SpencerFrontendService.DescribeRegistries
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeRegistriesResponse} Success
		 */
		DescribeRegistries(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeRegistriesRequest): Observable<DescribeRegistriesResponse> {
			return this.http.post<DescribeRegistriesResponse>(this.baseUri + '#X-Amz-Target=SpencerFrontendService.DescribeRegistries?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes repositories that are in a public registry.
		 * Post #X-Amz-Target=SpencerFrontendService.DescribeRepositories
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeRepositoriesResponse} Success
		 */
		DescribeRepositories(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeRepositoriesRequest): Observable<DescribeRepositoriesResponse> {
			return this.http.post<DescribeRepositoriesResponse>(this.baseUri + '#X-Amz-Target=SpencerFrontendService.DescribeRepositories?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves an authorization token. An authorization token represents your IAM authentication credentials. You can use it to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours. This API requires the <code>ecr-public:GetAuthorizationToken</code> and <code>sts:GetServiceBearerToken</code> permissions.
		 * Post #X-Amz-Target=SpencerFrontendService.GetAuthorizationToken
		 * @return {GetAuthorizationTokenResponse} Success
		 */
		GetAuthorizationToken(requestBody: GetAuthorizationTokenRequest): Observable<GetAuthorizationTokenResponse> {
			return this.http.post<GetAuthorizationTokenResponse>(this.baseUri + '#X-Amz-Target=SpencerFrontendService.GetAuthorizationToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves catalog metadata for a public registry.
		 * Post #X-Amz-Target=SpencerFrontendService.GetRegistryCatalogData
		 * @return {GetRegistryCatalogDataResponse} Success
		 */
		GetRegistryCatalogData(requestBody: GetRegistryCatalogDataRequest): Observable<GetRegistryCatalogDataResponse> {
			return this.http.post<GetRegistryCatalogDataResponse>(this.baseUri + '#X-Amz-Target=SpencerFrontendService.GetRegistryCatalogData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve catalog metadata for a repository in a public registry. This metadata is displayed publicly in the Amazon ECR Public Gallery.
		 * Post #X-Amz-Target=SpencerFrontendService.GetRepositoryCatalogData
		 * @return {GetRepositoryCatalogDataResponse} Success
		 */
		GetRepositoryCatalogData(requestBody: GetRepositoryCatalogDataRequest): Observable<GetRepositoryCatalogDataResponse> {
			return this.http.post<GetRepositoryCatalogDataResponse>(this.baseUri + '#X-Amz-Target=SpencerFrontendService.GetRepositoryCatalogData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the repository policy for the specified repository.
		 * Post #X-Amz-Target=SpencerFrontendService.GetRepositoryPolicy
		 * @return {GetRepositoryPolicyResponse} Success
		 */
		GetRepositoryPolicy(requestBody: GetRepositoryPolicyRequest): Observable<GetRepositoryPolicyResponse> {
			return this.http.post<GetRepositoryPolicyResponse>(this.baseUri + '#X-Amz-Target=SpencerFrontendService.GetRepositoryPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once for each image layer that hasn't already been uploaded. Whether an image layer uploads is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
		 * Post #X-Amz-Target=SpencerFrontendService.InitiateLayerUpload
		 * @return {InitiateLayerUploadResponse} Success
		 */
		InitiateLayerUpload(requestBody: InitiateLayerUploadRequest): Observable<InitiateLayerUploadResponse> {
			return this.http.post<InitiateLayerUploadResponse>(this.baseUri + '#X-Amz-Target=SpencerFrontendService.InitiateLayerUpload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the tags for an Amazon ECR Public resource.
		 * Post #X-Amz-Target=SpencerFrontendService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=SpencerFrontendService.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates or updates the image manifest and tags that are associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags that are associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
		 * Post #X-Amz-Target=SpencerFrontendService.PutImage
		 * @return {PutImageResponse} Success
		 */
		PutImage(requestBody: PutImageRequest): Observable<PutImageResponse> {
			return this.http.post<PutImageResponse>(this.baseUri + '#X-Amz-Target=SpencerFrontendService.PutImage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create or update the catalog data for a public registry.
		 * Post #X-Amz-Target=SpencerFrontendService.PutRegistryCatalogData
		 * @return {PutRegistryCatalogDataResponse} Success
		 */
		PutRegistryCatalogData(requestBody: PutRegistryCatalogDataRequest): Observable<PutRegistryCatalogDataResponse> {
			return this.http.post<PutRegistryCatalogDataResponse>(this.baseUri + '#X-Amz-Target=SpencerFrontendService.PutRegistryCatalogData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates the catalog data for a repository in a public registry.
		 * Post #X-Amz-Target=SpencerFrontendService.PutRepositoryCatalogData
		 * @return {PutRepositoryCatalogDataResponse} Success
		 */
		PutRepositoryCatalogData(requestBody: PutRepositoryCatalogDataRequest): Observable<PutRepositoryCatalogDataResponse> {
			return this.http.post<PutRepositoryCatalogDataResponse>(this.baseUri + '#X-Amz-Target=SpencerFrontendService.PutRepositoryCatalogData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Applies a repository policy to the specified public repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository Policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
		 * Post #X-Amz-Target=SpencerFrontendService.SetRepositoryPolicy
		 * @return {SetRepositoryPolicyResponse} Success
		 */
		SetRepositoryPolicy(requestBody: SetRepositoryPolicyRequest): Observable<SetRepositoryPolicyResponse> {
			return this.http.post<SetRepositoryPolicyResponse>(this.baseUri + '#X-Amz-Target=SpencerFrontendService.SetRepositoryPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.
		 * Post #X-Amz-Target=SpencerFrontendService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=SpencerFrontendService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes specified tags from a resource.
		 * Post #X-Amz-Target=SpencerFrontendService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=SpencerFrontendService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (about 20MB). The UploadLayerPart API is called once for each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
		 * Post #X-Amz-Target=SpencerFrontendService.UploadLayerPart
		 * @return {UploadLayerPartResponse} Success
		 */
		UploadLayerPart(requestBody: UploadLayerPartRequest): Observable<UploadLayerPartResponse> {
			return this.http.post<UploadLayerPartResponse>(this.baseUri + '#X-Amz-Target=SpencerFrontendService.UploadLayerPart', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum BatchCheckLayerAvailabilityX_Amz_Target { 'SpencerFrontendService.BatchCheckLayerAvailability' = 'SpencerFrontendService.BatchCheckLayerAvailability' }

	export enum BatchDeleteImageX_Amz_Target { 'SpencerFrontendService.BatchDeleteImage' = 'SpencerFrontendService.BatchDeleteImage' }

	export enum CompleteLayerUploadX_Amz_Target { 'SpencerFrontendService.CompleteLayerUpload' = 'SpencerFrontendService.CompleteLayerUpload' }

	export enum CreateRepositoryX_Amz_Target { 'SpencerFrontendService.CreateRepository' = 'SpencerFrontendService.CreateRepository' }

	export enum DeleteRepositoryX_Amz_Target { 'SpencerFrontendService.DeleteRepository' = 'SpencerFrontendService.DeleteRepository' }

	export enum DeleteRepositoryPolicyX_Amz_Target { 'SpencerFrontendService.DeleteRepositoryPolicy' = 'SpencerFrontendService.DeleteRepositoryPolicy' }

	export enum DescribeImageTagsX_Amz_Target { 'SpencerFrontendService.DescribeImageTags' = 'SpencerFrontendService.DescribeImageTags' }

	export enum DescribeImagesX_Amz_Target { 'SpencerFrontendService.DescribeImages' = 'SpencerFrontendService.DescribeImages' }

	export enum DescribeRegistriesX_Amz_Target { 'SpencerFrontendService.DescribeRegistries' = 'SpencerFrontendService.DescribeRegistries' }

	export enum DescribeRepositoriesX_Amz_Target { 'SpencerFrontendService.DescribeRepositories' = 'SpencerFrontendService.DescribeRepositories' }

	export enum GetAuthorizationTokenX_Amz_Target { 'SpencerFrontendService.GetAuthorizationToken' = 'SpencerFrontendService.GetAuthorizationToken' }

	export enum GetRegistryCatalogDataX_Amz_Target { 'SpencerFrontendService.GetRegistryCatalogData' = 'SpencerFrontendService.GetRegistryCatalogData' }

	export enum GetRepositoryCatalogDataX_Amz_Target { 'SpencerFrontendService.GetRepositoryCatalogData' = 'SpencerFrontendService.GetRepositoryCatalogData' }

	export enum GetRepositoryPolicyX_Amz_Target { 'SpencerFrontendService.GetRepositoryPolicy' = 'SpencerFrontendService.GetRepositoryPolicy' }

	export enum InitiateLayerUploadX_Amz_Target { 'SpencerFrontendService.InitiateLayerUpload' = 'SpencerFrontendService.InitiateLayerUpload' }

	export enum ListTagsForResourceX_Amz_Target { 'SpencerFrontendService.ListTagsForResource' = 'SpencerFrontendService.ListTagsForResource' }

	export enum PutImageX_Amz_Target { 'SpencerFrontendService.PutImage' = 'SpencerFrontendService.PutImage' }

	export enum PutRegistryCatalogDataX_Amz_Target { 'SpencerFrontendService.PutRegistryCatalogData' = 'SpencerFrontendService.PutRegistryCatalogData' }

	export enum PutRepositoryCatalogDataX_Amz_Target { 'SpencerFrontendService.PutRepositoryCatalogData' = 'SpencerFrontendService.PutRepositoryCatalogData' }

	export enum SetRepositoryPolicyX_Amz_Target { 'SpencerFrontendService.SetRepositoryPolicy' = 'SpencerFrontendService.SetRepositoryPolicy' }

	export enum TagResourceX_Amz_Target { 'SpencerFrontendService.TagResource' = 'SpencerFrontendService.TagResource' }

	export enum UntagResourceX_Amz_Target { 'SpencerFrontendService.UntagResource' = 'SpencerFrontendService.UntagResource' }

	export enum UploadLayerPartX_Amz_Target { 'SpencerFrontendService.UploadLayerPart' = 'SpencerFrontendService.UploadLayerPart' }

}

