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


	/** An object representing an Amazon ECR image layer. */
	export interface Layer {
		layerDigest?: string;
		layerAvailability?: LayerAvailability;
		layerSize?: number | null;
		mediaType?: string;
	}

	/** An object representing an Amazon ECR image layer. */
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

	export enum LayerAvailability { AVAILABLE = 0, UNAVAILABLE = 1 }


	/** An object representing an Amazon ECR image layer failure. */
	export interface LayerFailure {
		layerDigest?: string;
		failureCode?: LayerFailureCode;
		failureReason?: string;
	}

	/** An object representing an Amazon ECR image layer failure. */
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

	export enum LayerFailureCode { InvalidLayerDigest = 0, MissingLayerDigest = 1 }

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


	/** An object with identifying information for an image in an Amazon ECR repository. */
	export interface ImageIdentifier {
		imageDigest?: string;
		imageTag?: string;
	}

	/** An object with identifying information for an image in an Amazon ECR repository. */
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


	/** An object representing an Amazon ECR image failure. */
	export interface ImageFailure {
		imageId?: ImageIdentifier;
		failureCode?: ImageFailureCode;
		failureReason?: string;
	}

	/** An object representing an Amazon ECR image failure. */
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

	export enum ImageFailureCode { InvalidImageDigest = 0, InvalidImageTag = 1, ImageTagDoesNotMatchDigest = 2, ImageNotFound = 3, MissingDigestAndTag = 4, ImageReferencedByManifestList = 5, KmsError = 6 }


	/** Deletes specified images within a specified repository. Images are specified with either the <code>imageTag</code> or <code>imageDigest</code>. */
	export interface BatchDeleteImageRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;

		/** Required */
		imageIds: Array<ImageIdentifier>;
	}

	/** Deletes specified images within a specified repository. Images are specified with either the <code>imageTag</code> or <code>imageDigest</code>. */
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

	export interface BatchGetImageResponse {
		images?: Array<Image>;
		failures?: Array<ImageFailure>;
	}
	export interface BatchGetImageResponseFormProperties {
	}
	export function CreateBatchGetImageResponseFormGroup() {
		return new FormGroup<BatchGetImageResponseFormProperties>({
		});

	}


	/** An object representing an Amazon ECR image. */
	export interface Image {
		registryId?: string;
		repositoryName?: string;
		imageId?: ImageIdentifier;
		imageManifest?: string;
		imageManifestMediaType?: string;
	}

	/** An object representing an Amazon ECR image. */
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

	export interface BatchGetImageRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;

		/** Required */
		imageIds: Array<ImageIdentifier>;
		acceptedMediaTypes?: Array<string>;
	}
	export interface BatchGetImageRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetImageRequestFormGroup() {
		return new FormGroup<BatchGetImageRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchGetRepositoryScanningConfigurationResponse {
		scanningConfigurations?: Array<RepositoryScanningConfiguration>;
		failures?: Array<RepositoryScanningConfigurationFailure>;
	}
	export interface BatchGetRepositoryScanningConfigurationResponseFormProperties {
	}
	export function CreateBatchGetRepositoryScanningConfigurationResponseFormGroup() {
		return new FormGroup<BatchGetRepositoryScanningConfigurationResponseFormProperties>({
		});

	}


	/** The details of the scanning configuration for a repository. */
	export interface RepositoryScanningConfiguration {
		repositoryArn?: string;
		repositoryName?: string;
		scanOnPush?: boolean | null;
		scanFrequency?: ScanFrequency;
		appliedScanFilters?: Array<ScanningRepositoryFilter>;
	}

	/** The details of the scanning configuration for a repository. */
	export interface RepositoryScanningConfigurationFormProperties {
		repositoryArn: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		scanOnPush: FormControl<boolean | null | undefined>,
		scanFrequency: FormControl<ScanFrequency | null | undefined>,
	}
	export function CreateRepositoryScanningConfigurationFormGroup() {
		return new FormGroup<RepositoryScanningConfigurationFormProperties>({
			repositoryArn: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			scanOnPush: new FormControl<boolean | null | undefined>(undefined),
			scanFrequency: new FormControl<ScanFrequency | null | undefined>(undefined),
		});

	}

	export enum ScanFrequency { SCAN_ON_PUSH = 0, CONTINUOUS_SCAN = 1, MANUAL = 2 }


	/** The details of a scanning repository filter. For more information on how to use filters, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html#image-scanning-filters">Using filters</a> in the <i>Amazon Elastic Container Registry User Guide</i>. */
	export interface ScanningRepositoryFilter {

		/** Required */
		filter: string;

		/** Required */
		filterType: ScanningRepositoryFilterType;
	}

	/** The details of a scanning repository filter. For more information on how to use filters, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html#image-scanning-filters">Using filters</a> in the <i>Amazon Elastic Container Registry User Guide</i>. */
	export interface ScanningRepositoryFilterFormProperties {

		/** Required */
		filter: FormControl<string | null | undefined>,

		/** Required */
		filterType: FormControl<ScanningRepositoryFilterType | null | undefined>,
	}
	export function CreateScanningRepositoryFilterFormGroup() {
		return new FormGroup<ScanningRepositoryFilterFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filterType: new FormControl<ScanningRepositoryFilterType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ScanningRepositoryFilterType { WILDCARD = 0 }


	/** The details about any failures associated with the scanning configuration of a repository. */
	export interface RepositoryScanningConfigurationFailure {
		repositoryName?: string;
		failureCode?: ScanningConfigurationFailureCode;
		failureReason?: string;
	}

	/** The details about any failures associated with the scanning configuration of a repository. */
	export interface RepositoryScanningConfigurationFailureFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		failureCode: FormControl<ScanningConfigurationFailureCode | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateRepositoryScanningConfigurationFailureFormGroup() {
		return new FormGroup<RepositoryScanningConfigurationFailureFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			failureCode: new FormControl<ScanningConfigurationFailureCode | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScanningConfigurationFailureCode { REPOSITORY_NOT_FOUND = 0 }

	export interface BatchGetRepositoryScanningConfigurationRequest {

		/** Required */
		repositoryNames: Array<string>;
	}
	export interface BatchGetRepositoryScanningConfigurationRequestFormProperties {
	}
	export function CreateBatchGetRepositoryScanningConfigurationRequestFormGroup() {
		return new FormGroup<BatchGetRepositoryScanningConfigurationRequestFormProperties>({
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

	export interface KmsException {
	}
	export interface KmsExceptionFormProperties {
	}
	export function CreateKmsExceptionFormGroup() {
		return new FormGroup<KmsExceptionFormProperties>({
		});

	}

	export interface CreatePullThroughCacheRuleResponse {
		ecrRepositoryPrefix?: string;
		upstreamRegistryUrl?: string;
		createdAt?: Date;
		registryId?: string;
	}
	export interface CreatePullThroughCacheRuleResponseFormProperties {
		ecrRepositoryPrefix: FormControl<string | null | undefined>,
		upstreamRegistryUrl: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		registryId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePullThroughCacheRuleResponseFormGroup() {
		return new FormGroup<CreatePullThroughCacheRuleResponseFormProperties>({
			ecrRepositoryPrefix: new FormControl<string | null | undefined>(undefined),
			upstreamRegistryUrl: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			registryId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePullThroughCacheRuleRequest {

		/** Required */
		ecrRepositoryPrefix: string;

		/** Required */
		upstreamRegistryUrl: string;
		registryId?: string;
	}
	export interface CreatePullThroughCacheRuleRequestFormProperties {

		/** Required */
		ecrRepositoryPrefix: FormControl<string | null | undefined>,

		/** Required */
		upstreamRegistryUrl: FormControl<string | null | undefined>,
		registryId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePullThroughCacheRuleRequestFormGroup() {
		return new FormGroup<CreatePullThroughCacheRuleRequestFormProperties>({
			ecrRepositoryPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			upstreamRegistryUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			registryId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PullThroughCacheRuleAlreadyExistsException {
	}
	export interface PullThroughCacheRuleAlreadyExistsExceptionFormProperties {
	}
	export function CreatePullThroughCacheRuleAlreadyExistsExceptionFormGroup() {
		return new FormGroup<PullThroughCacheRuleAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface UnsupportedUpstreamRegistryException {
	}
	export interface UnsupportedUpstreamRegistryExceptionFormProperties {
	}
	export function CreateUnsupportedUpstreamRegistryExceptionFormGroup() {
		return new FormGroup<UnsupportedUpstreamRegistryExceptionFormProperties>({
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

	export interface CreateRepositoryResponse {
		repository?: Repository;
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
		imageTagMutability?: ImageTagMutability;

		/** The image scanning configuration for a repository. */
		imageScanningConfiguration?: ImageScanningConfiguration;
		encryptionConfiguration?: EncryptionConfiguration;
	}

	/** An object representing a repository. */
	export interface RepositoryFormProperties {
		repositoryArn: FormControl<string | null | undefined>,
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		repositoryUri: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		imageTagMutability: FormControl<ImageTagMutability | null | undefined>,
	}
	export function CreateRepositoryFormGroup() {
		return new FormGroup<RepositoryFormProperties>({
			repositoryArn: new FormControl<string | null | undefined>(undefined),
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			repositoryUri: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			imageTagMutability: new FormControl<ImageTagMutability | null | undefined>(undefined),
		});

	}

	export enum ImageTagMutability { MUTABLE = 0, IMMUTABLE = 1 }


	/** The image scanning configuration for a repository. */
	export interface ImageScanningConfiguration {
		scanOnPush?: boolean | null;
	}

	/** The image scanning configuration for a repository. */
	export interface ImageScanningConfigurationFormProperties {
		scanOnPush: FormControl<boolean | null | undefined>,
	}
	export function CreateImageScanningConfigurationFormGroup() {
		return new FormGroup<ImageScanningConfigurationFormProperties>({
			scanOnPush: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.</p> <p>By default, when no encryption configuration is set or the <code>AES256</code> encryption type is used, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts your data at rest using an AES-256 encryption algorithm. This does not require any action on your part.</p> <p>For more control over the encryption of the contents of your repository, you can use server-side encryption with Key Management Service key stored in Key Management Service (KMS) to encrypt your images. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html">Amazon ECR encryption at rest</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p> */
	export interface EncryptionConfiguration {

		/** Required */
		encryptionType: EncryptionType;
		kmsKey?: string;
	}

	/** <p>The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.</p> <p>By default, when no encryption configuration is set or the <code>AES256</code> encryption type is used, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts your data at rest using an AES-256 encryption algorithm. This does not require any action on your part.</p> <p>For more control over the encryption of the contents of your repository, you can use server-side encryption with Key Management Service key stored in Key Management Service (KMS) to encrypt your images. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html">Amazon ECR encryption at rest</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p> */
	export interface EncryptionConfigurationFormProperties {

		/** Required */
		encryptionType: FormControl<EncryptionType | null | undefined>,
		kmsKey: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionConfigurationFormGroup() {
		return new FormGroup<EncryptionConfigurationFormProperties>({
			encryptionType: new FormControl<EncryptionType | null | undefined>(undefined, [Validators.required]),
			kmsKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EncryptionType { AES256 = 0, KMS = 1 }

	export interface CreateRepositoryRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;
		tags?: Array<Tag>;
		imageTagMutability?: ImageTagMutability;
		imageScanningConfiguration?: ImageScanningConfiguration;
		encryptionConfiguration?: EncryptionConfiguration;
	}
	export interface CreateRepositoryRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
		imageTagMutability: FormControl<ImageTagMutability | null | undefined>,
	}
	export function CreateCreateRepositoryRequestFormGroup() {
		return new FormGroup<CreateRepositoryRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageTagMutability: new FormControl<ImageTagMutability | null | undefined>(undefined),
		});

	}


	/** The metadata to apply to a resource to help you categorize and organize them. Each tag consists of a key and a value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	/** The metadata to apply to a resource to help you categorize and organize them. Each tag consists of a key and a value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters. */
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

	export interface DeleteLifecyclePolicyResponse {
		registryId?: string;
		repositoryName?: string;
		lifecyclePolicyText?: string;
		lastEvaluatedAt?: Date;
	}
	export interface DeleteLifecyclePolicyResponseFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		lifecyclePolicyText: FormControl<string | null | undefined>,
		lastEvaluatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDeleteLifecyclePolicyResponseFormGroup() {
		return new FormGroup<DeleteLifecyclePolicyResponseFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			lifecyclePolicyText: new FormControl<string | null | undefined>(undefined),
			lastEvaluatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DeleteLifecyclePolicyRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;
	}
	export interface DeleteLifecyclePolicyRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLifecyclePolicyRequestFormGroup() {
		return new FormGroup<DeleteLifecyclePolicyRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LifecyclePolicyNotFoundException {
	}
	export interface LifecyclePolicyNotFoundExceptionFormProperties {
	}
	export function CreateLifecyclePolicyNotFoundExceptionFormGroup() {
		return new FormGroup<LifecyclePolicyNotFoundExceptionFormProperties>({
		});

	}

	export interface DeletePullThroughCacheRuleResponse {
		ecrRepositoryPrefix?: string;
		upstreamRegistryUrl?: string;
		createdAt?: Date;
		registryId?: string;
	}
	export interface DeletePullThroughCacheRuleResponseFormProperties {
		ecrRepositoryPrefix: FormControl<string | null | undefined>,
		upstreamRegistryUrl: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		registryId: FormControl<string | null | undefined>,
	}
	export function CreateDeletePullThroughCacheRuleResponseFormGroup() {
		return new FormGroup<DeletePullThroughCacheRuleResponseFormProperties>({
			ecrRepositoryPrefix: new FormControl<string | null | undefined>(undefined),
			upstreamRegistryUrl: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			registryId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletePullThroughCacheRuleRequest {

		/** Required */
		ecrRepositoryPrefix: string;
		registryId?: string;
	}
	export interface DeletePullThroughCacheRuleRequestFormProperties {

		/** Required */
		ecrRepositoryPrefix: FormControl<string | null | undefined>,
		registryId: FormControl<string | null | undefined>,
	}
	export function CreateDeletePullThroughCacheRuleRequestFormGroup() {
		return new FormGroup<DeletePullThroughCacheRuleRequestFormProperties>({
			ecrRepositoryPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			registryId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PullThroughCacheRuleNotFoundException {
	}
	export interface PullThroughCacheRuleNotFoundExceptionFormProperties {
	}
	export function CreatePullThroughCacheRuleNotFoundExceptionFormGroup() {
		return new FormGroup<PullThroughCacheRuleNotFoundExceptionFormProperties>({
		});

	}

	export interface DeleteRegistryPolicyResponse {
		registryId?: string;
		policyText?: string;
	}
	export interface DeleteRegistryPolicyResponseFormProperties {
		registryId: FormControl<string | null | undefined>,
		policyText: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRegistryPolicyResponseFormGroup() {
		return new FormGroup<DeleteRegistryPolicyResponseFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			policyText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteRegistryPolicyRequest {
	}
	export interface DeleteRegistryPolicyRequestFormProperties {
	}
	export function CreateDeleteRegistryPolicyRequestFormGroup() {
		return new FormGroup<DeleteRegistryPolicyRequestFormProperties>({
		});

	}

	export interface RegistryPolicyNotFoundException {
	}
	export interface RegistryPolicyNotFoundExceptionFormProperties {
	}
	export function CreateRegistryPolicyNotFoundExceptionFormGroup() {
		return new FormGroup<RegistryPolicyNotFoundExceptionFormProperties>({
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

	export interface DescribeImageReplicationStatusResponse {
		repositoryName?: string;

		/** An object with identifying information for an image in an Amazon ECR repository. */
		imageId?: ImageIdentifier;
		replicationStatuses?: Array<ImageReplicationStatus>;
	}
	export interface DescribeImageReplicationStatusResponseFormProperties {
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeImageReplicationStatusResponseFormGroup() {
		return new FormGroup<DescribeImageReplicationStatusResponseFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of the replication process for an image. */
	export interface ImageReplicationStatus {
		region?: string;
		registryId?: string;
		status?: ReplicationStatus;
		failureCode?: string;
	}

	/** The status of the replication process for an image. */
	export interface ImageReplicationStatusFormProperties {
		region: FormControl<string | null | undefined>,
		registryId: FormControl<string | null | undefined>,
		status: FormControl<ReplicationStatus | null | undefined>,
		failureCode: FormControl<string | null | undefined>,
	}
	export function CreateImageReplicationStatusFormGroup() {
		return new FormGroup<ImageReplicationStatusFormProperties>({
			region: new FormControl<string | null | undefined>(undefined),
			registryId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReplicationStatus | null | undefined>(undefined),
			failureCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReplicationStatus { IN_PROGRESS = 0, COMPLETE = 1, FAILED = 2 }

	export interface DescribeImageReplicationStatusRequest {

		/** Required */
		repositoryName: string;

		/**
		 * An object with identifying information for an image in an Amazon ECR repository.
		 * Required
		 */
		imageId: ImageIdentifier;
		registryId?: string;
	}
	export interface DescribeImageReplicationStatusRequestFormProperties {

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
		registryId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeImageReplicationStatusRequestFormGroup() {
		return new FormGroup<DescribeImageReplicationStatusRequestFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			registryId: new FormControl<string | null | undefined>(undefined),
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

	export interface DescribeImageScanFindingsResponse {
		registryId?: string;
		repositoryName?: string;

		/** An object with identifying information for an image in an Amazon ECR repository. */
		imageId?: ImageIdentifier;
		imageScanStatus?: ImageScanStatus;
		imageScanFindings?: ImageScanFindings;
		nextToken?: string;
	}
	export interface DescribeImageScanFindingsResponseFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeImageScanFindingsResponseFormGroup() {
		return new FormGroup<DescribeImageScanFindingsResponseFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The current status of an image scan. */
	export interface ImageScanStatus {
		status?: ScanStatus;
		description?: string;
	}

	/** The current status of an image scan. */
	export interface ImageScanStatusFormProperties {
		status: FormControl<ScanStatus | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateImageScanStatusFormGroup() {
		return new FormGroup<ImageScanStatusFormProperties>({
			status: new FormControl<ScanStatus | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScanStatus { IN_PROGRESS = 0, COMPLETE = 1, FAILED = 2, UNSUPPORTED_IMAGE = 3, ACTIVE = 4, PENDING = 5, SCAN_ELIGIBILITY_EXPIRED = 6, FINDINGS_UNAVAILABLE = 7 }


	/** The details of an image scan. */
	export interface ImageScanFindings {
		imageScanCompletedAt?: Date;
		vulnerabilitySourceUpdatedAt?: Date;
		findingSeverityCounts?: FindingSeverityCounts;
		findings?: Array<ImageScanFinding>;
		enhancedFindings?: Array<EnhancedImageScanFinding>;
	}

	/** The details of an image scan. */
	export interface ImageScanFindingsFormProperties {
		imageScanCompletedAt: FormControl<Date | null | undefined>,
		vulnerabilitySourceUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateImageScanFindingsFormGroup() {
		return new FormGroup<ImageScanFindingsFormProperties>({
			imageScanCompletedAt: new FormControl<Date | null | undefined>(undefined),
			vulnerabilitySourceUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface FindingSeverityCounts {
	}
	export interface FindingSeverityCountsFormProperties {
	}
	export function CreateFindingSeverityCountsFormGroup() {
		return new FormGroup<FindingSeverityCountsFormProperties>({
		});

	}


	/** Contains information about an image scan finding. */
	export interface ImageScanFinding {
		name?: string;
		description?: string;
		uri?: string;
		severity?: FindingSeverity;
		attributes?: Array<Attribute>;
	}

	/** Contains information about an image scan finding. */
	export interface ImageScanFindingFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
		severity: FormControl<FindingSeverity | null | undefined>,
	}
	export function CreateImageScanFindingFormGroup() {
		return new FormGroup<ImageScanFindingFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<FindingSeverity | null | undefined>(undefined),
		});

	}

	export enum FindingSeverity { INFORMATIONAL = 0, LOW = 1, MEDIUM = 2, HIGH = 3, CRITICAL = 4, UNDEFINED = 5 }


	/** This data type is used in the <a>ImageScanFinding</a> data type. */
	export interface Attribute {

		/** Required */
		key: string;
		value?: string;
	}

	/** This data type is used in the <a>ImageScanFinding</a> data type. */
	export interface AttributeFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateAttributeFormGroup() {
		return new FormGroup<AttributeFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of an enhanced image scan. This is returned when enhanced scanning is enabled for your private registry. */
	export interface EnhancedImageScanFinding {
		awsAccountId?: string;
		description?: string;
		findingArn?: string;
		firstObservedAt?: Date;
		lastObservedAt?: Date;
		packageVulnerabilityDetails?: PackageVulnerabilityDetails;
		remediation?: Remediation;
		resources?: Array<Resource>;
		score?: number | null;
		scoreDetails?: ScoreDetails;
		severity?: string;
		status?: string;
		title?: string;
		type?: string;
		updatedAt?: Date;
	}

	/** The details of an enhanced image scan. This is returned when enhanced scanning is enabled for your private registry. */
	export interface EnhancedImageScanFindingFormProperties {
		awsAccountId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		findingArn: FormControl<string | null | undefined>,
		firstObservedAt: FormControl<Date | null | undefined>,
		lastObservedAt: FormControl<Date | null | undefined>,
		score: FormControl<number | null | undefined>,
		severity: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateEnhancedImageScanFindingFormGroup() {
		return new FormGroup<EnhancedImageScanFindingFormProperties>({
			awsAccountId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			findingArn: new FormControl<string | null | undefined>(undefined),
			firstObservedAt: new FormControl<Date | null | undefined>(undefined),
			lastObservedAt: new FormControl<Date | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about a package vulnerability finding. */
	export interface PackageVulnerabilityDetails {
		cvss?: Array<CvssScore>;
		referenceUrls?: Array<string>;
		relatedVulnerabilities?: Array<string>;
		source?: string;
		sourceUrl?: string;
		vendorCreatedAt?: Date;
		vendorSeverity?: string;
		vendorUpdatedAt?: Date;
		vulnerabilityId?: string;
		vulnerablePackages?: Array<VulnerablePackage>;
	}

	/** Information about a package vulnerability finding. */
	export interface PackageVulnerabilityDetailsFormProperties {
		source: FormControl<string | null | undefined>,
		sourceUrl: FormControl<string | null | undefined>,
		vendorCreatedAt: FormControl<Date | null | undefined>,
		vendorSeverity: FormControl<string | null | undefined>,
		vendorUpdatedAt: FormControl<Date | null | undefined>,
		vulnerabilityId: FormControl<string | null | undefined>,
	}
	export function CreatePackageVulnerabilityDetailsFormGroup() {
		return new FormGroup<PackageVulnerabilityDetailsFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
			sourceUrl: new FormControl<string | null | undefined>(undefined),
			vendorCreatedAt: new FormControl<Date | null | undefined>(undefined),
			vendorSeverity: new FormControl<string | null | undefined>(undefined),
			vendorUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			vulnerabilityId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The CVSS score for a finding. */
	export interface CvssScore {
		baseScore?: number | null;
		scoringVector?: string;
		source?: string;
		version?: string;
	}

	/** The CVSS score for a finding. */
	export interface CvssScoreFormProperties {
		baseScore: FormControl<number | null | undefined>,
		scoringVector: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateCvssScoreFormGroup() {
		return new FormGroup<CvssScoreFormProperties>({
			baseScore: new FormControl<number | null | undefined>(undefined),
			scoringVector: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information on the vulnerable package identified by a finding. */
	export interface VulnerablePackage {
		arch?: string;
		epoch?: number | null;
		filePath?: string;
		name?: string;
		packageManager?: string;
		release?: string;
		sourceLayerHash?: string;
		version?: string;
	}

	/** Information on the vulnerable package identified by a finding. */
	export interface VulnerablePackageFormProperties {
		arch: FormControl<string | null | undefined>,
		epoch: FormControl<number | null | undefined>,
		filePath: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		packageManager: FormControl<string | null | undefined>,
		release: FormControl<string | null | undefined>,
		sourceLayerHash: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateVulnerablePackageFormGroup() {
		return new FormGroup<VulnerablePackageFormProperties>({
			arch: new FormControl<string | null | undefined>(undefined),
			epoch: new FormControl<number | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageManager: new FormControl<string | null | undefined>(undefined),
			release: new FormControl<string | null | undefined>(undefined),
			sourceLayerHash: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information on how to remediate a finding. */
	export interface Remediation {
		recommendation?: Recommendation;
	}

	/** Information on how to remediate a finding. */
	export interface RemediationFormProperties {
	}
	export function CreateRemediationFormGroup() {
		return new FormGroup<RemediationFormProperties>({
		});

	}


	/** Details about the recommended course of action to remediate the finding. */
	export interface Recommendation {
		url?: string;
		text?: string;
	}

	/** Details about the recommended course of action to remediate the finding. */
	export interface RecommendationFormProperties {
		url: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationFormGroup() {
		return new FormGroup<RecommendationFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the resource involved in a finding. */
	export interface Resource {
		details?: ResourceDetails;
		id?: string;
		tags?: Tags;
		type?: string;
	}

	/** Details about the resource involved in a finding. */
	export interface ResourceFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about the resource involved in the finding. */
	export interface ResourceDetails {
		awsEcrContainerImage?: AwsEcrContainerImageDetails;
	}

	/** Contains details about the resource involved in the finding. */
	export interface ResourceDetailsFormProperties {
	}
	export function CreateResourceDetailsFormGroup() {
		return new FormGroup<ResourceDetailsFormProperties>({
		});

	}


	/** The image details of the Amazon ECR container image. */
	export interface AwsEcrContainerImageDetails {
		architecture?: string;
		author?: string;
		imageHash?: string;
		imageTags?: Array<string>;
		platform?: string;
		pushedAt?: Date;
		registry?: string;
		repositoryName?: string;
	}

	/** The image details of the Amazon ECR container image. */
	export interface AwsEcrContainerImageDetailsFormProperties {
		architecture: FormControl<string | null | undefined>,
		author: FormControl<string | null | undefined>,
		imageHash: FormControl<string | null | undefined>,
		platform: FormControl<string | null | undefined>,
		pushedAt: FormControl<Date | null | undefined>,
		registry: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateAwsEcrContainerImageDetailsFormGroup() {
		return new FormGroup<AwsEcrContainerImageDetailsFormProperties>({
			architecture: new FormControl<string | null | undefined>(undefined),
			author: new FormControl<string | null | undefined>(undefined),
			imageHash: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<string | null | undefined>(undefined),
			pushedAt: new FormControl<Date | null | undefined>(undefined),
			registry: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tags {
	}
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}


	/** Information about the Amazon Inspector score given to a finding. */
	export interface ScoreDetails {
		cvss?: CvssScoreDetails;
	}

	/** Information about the Amazon Inspector score given to a finding. */
	export interface ScoreDetailsFormProperties {
	}
	export function CreateScoreDetailsFormGroup() {
		return new FormGroup<ScoreDetailsFormProperties>({
		});

	}


	/** Information about the CVSS score. */
	export interface CvssScoreDetails {
		adjustments?: Array<CvssScoreAdjustment>;
		score?: number | null;
		scoreSource?: string;
		scoringVector?: string;
		version?: string;
	}

	/** Information about the CVSS score. */
	export interface CvssScoreDetailsFormProperties {
		score: FormControl<number | null | undefined>,
		scoreSource: FormControl<string | null | undefined>,
		scoringVector: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateCvssScoreDetailsFormGroup() {
		return new FormGroup<CvssScoreDetailsFormProperties>({
			score: new FormControl<number | null | undefined>(undefined),
			scoreSource: new FormControl<string | null | undefined>(undefined),
			scoringVector: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details on adjustments Amazon Inspector made to the CVSS score for a finding. */
	export interface CvssScoreAdjustment {
		metric?: string;
		reason?: string;
	}

	/** Details on adjustments Amazon Inspector made to the CVSS score for a finding. */
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

	export interface DescribeImageScanFindingsRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;

		/**
		 * An object with identifying information for an image in an Amazon ECR repository.
		 * Required
		 */
		imageId: ImageIdentifier;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface DescribeImageScanFindingsRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeImageScanFindingsRequestFormGroup() {
		return new FormGroup<DescribeImageScanFindingsRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScanNotFoundException {
	}
	export interface ScanNotFoundExceptionFormProperties {
	}
	export function CreateScanNotFoundExceptionFormGroup() {
		return new FormGroup<ScanNotFoundExceptionFormProperties>({
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


	/** An object that describes an image returned by a <a>DescribeImages</a> operation. */
	export interface ImageDetail {
		registryId?: string;
		repositoryName?: string;
		imageDigest?: string;
		imageTags?: Array<string>;
		imageSizeInBytes?: number | null;
		imagePushedAt?: Date;
		imageScanStatus?: ImageScanStatus;
		imageScanFindingsSummary?: ImageScanFindingsSummary;
		imageManifestMediaType?: string;
		artifactMediaType?: string;
		lastRecordedPullTime?: Date;
	}

	/** An object that describes an image returned by a <a>DescribeImages</a> operation. */
	export interface ImageDetailFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		imageDigest: FormControl<string | null | undefined>,
		imageSizeInBytes: FormControl<number | null | undefined>,
		imagePushedAt: FormControl<Date | null | undefined>,
		imageManifestMediaType: FormControl<string | null | undefined>,
		artifactMediaType: FormControl<string | null | undefined>,
		lastRecordedPullTime: FormControl<Date | null | undefined>,
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
			lastRecordedPullTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A summary of the last completed image scan. */
	export interface ImageScanFindingsSummary {
		imageScanCompletedAt?: Date;
		vulnerabilitySourceUpdatedAt?: Date;
		findingSeverityCounts?: FindingSeverityCounts;
	}

	/** A summary of the last completed image scan. */
	export interface ImageScanFindingsSummaryFormProperties {
		imageScanCompletedAt: FormControl<Date | null | undefined>,
		vulnerabilitySourceUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateImageScanFindingsSummaryFormGroup() {
		return new FormGroup<ImageScanFindingsSummaryFormProperties>({
			imageScanCompletedAt: new FormControl<Date | null | undefined>(undefined),
			vulnerabilitySourceUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeImagesRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;
		imageIds?: Array<ImageIdentifier>;
		nextToken?: string;
		maxResults?: number | null;
		filter?: DescribeImagesFilter;
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


	/** An object representing a filter on a <a>DescribeImages</a> operation. */
	export interface DescribeImagesFilter {
		tagStatus?: TagStatus;
	}

	/** An object representing a filter on a <a>DescribeImages</a> operation. */
	export interface DescribeImagesFilterFormProperties {
		tagStatus: FormControl<TagStatus | null | undefined>,
	}
	export function CreateDescribeImagesFilterFormGroup() {
		return new FormGroup<DescribeImagesFilterFormProperties>({
			tagStatus: new FormControl<TagStatus | null | undefined>(undefined),
		});

	}

	export enum TagStatus { TAGGED = 0, UNTAGGED = 1, ANY = 2 }

	export interface DescribePullThroughCacheRulesResponse {
		pullThroughCacheRules?: Array<PullThroughCacheRule>;
		nextToken?: string;
	}
	export interface DescribePullThroughCacheRulesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePullThroughCacheRulesResponseFormGroup() {
		return new FormGroup<DescribePullThroughCacheRulesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of a pull through cache rule. */
	export interface PullThroughCacheRule {
		ecrRepositoryPrefix?: string;
		upstreamRegistryUrl?: string;
		createdAt?: Date;
		registryId?: string;
	}

	/** The details of a pull through cache rule. */
	export interface PullThroughCacheRuleFormProperties {
		ecrRepositoryPrefix: FormControl<string | null | undefined>,
		upstreamRegistryUrl: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		registryId: FormControl<string | null | undefined>,
	}
	export function CreatePullThroughCacheRuleFormGroup() {
		return new FormGroup<PullThroughCacheRuleFormProperties>({
			ecrRepositoryPrefix: new FormControl<string | null | undefined>(undefined),
			upstreamRegistryUrl: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			registryId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePullThroughCacheRulesRequest {
		registryId?: string;
		ecrRepositoryPrefixes?: Array<string>;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface DescribePullThroughCacheRulesRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribePullThroughCacheRulesRequestFormGroup() {
		return new FormGroup<DescribePullThroughCacheRulesRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeRegistryResponse {
		registryId?: string;
		replicationConfiguration?: ReplicationConfiguration;
	}
	export interface DescribeRegistryResponseFormProperties {
		registryId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRegistryResponseFormGroup() {
		return new FormGroup<DescribeRegistryResponseFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The replication configuration for a registry. */
	export interface ReplicationConfiguration {

		/** Required */
		rules: Array<ReplicationRule>;
	}

	/** The replication configuration for a registry. */
	export interface ReplicationConfigurationFormProperties {
	}
	export function CreateReplicationConfigurationFormGroup() {
		return new FormGroup<ReplicationConfigurationFormProperties>({
		});

	}


	/** An array of objects representing the replication destinations and repository filters for a replication configuration. */
	export interface ReplicationRule {

		/** Required */
		destinations: Array<ReplicationDestination>;
		repositoryFilters?: Array<RepositoryFilter>;
	}

	/** An array of objects representing the replication destinations and repository filters for a replication configuration. */
	export interface ReplicationRuleFormProperties {
	}
	export function CreateReplicationRuleFormGroup() {
		return new FormGroup<ReplicationRuleFormProperties>({
		});

	}


	/** An array of objects representing the destination for a replication rule. */
	export interface ReplicationDestination {

		/** Required */
		region: string;

		/** Required */
		registryId: string;
	}

	/** An array of objects representing the destination for a replication rule. */
	export interface ReplicationDestinationFormProperties {

		/** Required */
		region: FormControl<string | null | undefined>,

		/** Required */
		registryId: FormControl<string | null | undefined>,
	}
	export function CreateReplicationDestinationFormGroup() {
		return new FormGroup<ReplicationDestinationFormProperties>({
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			registryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The filter settings used with image replication. Specifying a repository filter to a replication rule provides a method for controlling which repositories in a private registry are replicated. If no repository filter is specified, all images in the repository are replicated. */
	export interface RepositoryFilter {

		/** Required */
		filter: string;

		/** Required */
		filterType: RepositoryFilterType;
	}

	/** The filter settings used with image replication. Specifying a repository filter to a replication rule provides a method for controlling which repositories in a private registry are replicated. If no repository filter is specified, all images in the repository are replicated. */
	export interface RepositoryFilterFormProperties {

		/** Required */
		filter: FormControl<string | null | undefined>,

		/** Required */
		filterType: FormControl<RepositoryFilterType | null | undefined>,
	}
	export function CreateRepositoryFilterFormGroup() {
		return new FormGroup<RepositoryFilterFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filterType: new FormControl<RepositoryFilterType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RepositoryFilterType { PREFIX_MATCH = 0 }

	export interface DescribeRegistryRequest {
	}
	export interface DescribeRegistryRequestFormProperties {
	}
	export function CreateDescribeRegistryRequestFormGroup() {
		return new FormGroup<DescribeRegistryRequestFormProperties>({
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
		authorizationData?: Array<AuthorizationData>;
	}
	export interface GetAuthorizationTokenResponseFormProperties {
	}
	export function CreateGetAuthorizationTokenResponseFormGroup() {
		return new FormGroup<GetAuthorizationTokenResponseFormProperties>({
		});

	}


	/** An object representing authorization data for an Amazon ECR registry. */
	export interface AuthorizationData {
		authorizationToken?: string;
		expiresAt?: Date;
		proxyEndpoint?: string;
	}

	/** An object representing authorization data for an Amazon ECR registry. */
	export interface AuthorizationDataFormProperties {
		authorizationToken: FormControl<string | null | undefined>,
		expiresAt: FormControl<Date | null | undefined>,
		proxyEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationDataFormGroup() {
		return new FormGroup<AuthorizationDataFormProperties>({
			authorizationToken: new FormControl<string | null | undefined>(undefined),
			expiresAt: new FormControl<Date | null | undefined>(undefined),
			proxyEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAuthorizationTokenRequest {
		registryIds?: Array<string>;
	}
	export interface GetAuthorizationTokenRequestFormProperties {
	}
	export function CreateGetAuthorizationTokenRequestFormGroup() {
		return new FormGroup<GetAuthorizationTokenRequestFormProperties>({
		});

	}

	export interface GetDownloadUrlForLayerResponse {
		downloadUrl?: string;
		layerDigest?: string;
	}
	export interface GetDownloadUrlForLayerResponseFormProperties {
		downloadUrl: FormControl<string | null | undefined>,
		layerDigest: FormControl<string | null | undefined>,
	}
	export function CreateGetDownloadUrlForLayerResponseFormGroup() {
		return new FormGroup<GetDownloadUrlForLayerResponseFormProperties>({
			downloadUrl: new FormControl<string | null | undefined>(undefined),
			layerDigest: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDownloadUrlForLayerRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;

		/** Required */
		layerDigest: string;
	}
	export interface GetDownloadUrlForLayerRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,

		/** Required */
		layerDigest: FormControl<string | null | undefined>,
	}
	export function CreateGetDownloadUrlForLayerRequestFormGroup() {
		return new FormGroup<GetDownloadUrlForLayerRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			layerDigest: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface LayerInaccessibleException {
	}
	export interface LayerInaccessibleExceptionFormProperties {
	}
	export function CreateLayerInaccessibleExceptionFormGroup() {
		return new FormGroup<LayerInaccessibleExceptionFormProperties>({
		});

	}

	export interface GetLifecyclePolicyResponse {
		registryId?: string;
		repositoryName?: string;
		lifecyclePolicyText?: string;
		lastEvaluatedAt?: Date;
	}
	export interface GetLifecyclePolicyResponseFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		lifecyclePolicyText: FormControl<string | null | undefined>,
		lastEvaluatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetLifecyclePolicyResponseFormGroup() {
		return new FormGroup<GetLifecyclePolicyResponseFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			lifecyclePolicyText: new FormControl<string | null | undefined>(undefined),
			lastEvaluatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetLifecyclePolicyRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;
	}
	export interface GetLifecyclePolicyRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateGetLifecyclePolicyRequestFormGroup() {
		return new FormGroup<GetLifecyclePolicyRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLifecyclePolicyPreviewResponse {
		registryId?: string;
		repositoryName?: string;
		lifecyclePolicyText?: string;
		status?: LifecyclePolicyPreviewStatus;
		nextToken?: string;
		previewResults?: Array<LifecyclePolicyPreviewResult>;
		summary?: LifecyclePolicyPreviewSummary;
	}
	export interface GetLifecyclePolicyPreviewResponseFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		lifecyclePolicyText: FormControl<string | null | undefined>,
		status: FormControl<LifecyclePolicyPreviewStatus | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetLifecyclePolicyPreviewResponseFormGroup() {
		return new FormGroup<GetLifecyclePolicyPreviewResponseFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			lifecyclePolicyText: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<LifecyclePolicyPreviewStatus | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LifecyclePolicyPreviewStatus { IN_PROGRESS = 0, COMPLETE = 1, EXPIRED = 2, FAILED = 3 }


	/** The result of the lifecycle policy preview. */
	export interface LifecyclePolicyPreviewResult {
		imageTags?: Array<string>;
		imageDigest?: string;
		imagePushedAt?: Date;
		action?: LifecyclePolicyRuleAction;
		appliedRulePriority?: number | null;
	}

	/** The result of the lifecycle policy preview. */
	export interface LifecyclePolicyPreviewResultFormProperties {
		imageDigest: FormControl<string | null | undefined>,
		imagePushedAt: FormControl<Date | null | undefined>,
		appliedRulePriority: FormControl<number | null | undefined>,
	}
	export function CreateLifecyclePolicyPreviewResultFormGroup() {
		return new FormGroup<LifecyclePolicyPreviewResultFormProperties>({
			imageDigest: new FormControl<string | null | undefined>(undefined),
			imagePushedAt: new FormControl<Date | null | undefined>(undefined),
			appliedRulePriority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The type of action to be taken. */
	export interface LifecyclePolicyRuleAction {
		type?: ImageActionType;
	}

	/** The type of action to be taken. */
	export interface LifecyclePolicyRuleActionFormProperties {
		type: FormControl<ImageActionType | null | undefined>,
	}
	export function CreateLifecyclePolicyRuleActionFormGroup() {
		return new FormGroup<LifecyclePolicyRuleActionFormProperties>({
			type: new FormControl<ImageActionType | null | undefined>(undefined),
		});

	}

	export enum ImageActionType { EXPIRE = 0 }


	/** The summary of the lifecycle policy preview request. */
	export interface LifecyclePolicyPreviewSummary {
		expiringImageTotalCount?: number | null;
	}

	/** The summary of the lifecycle policy preview request. */
	export interface LifecyclePolicyPreviewSummaryFormProperties {
		expiringImageTotalCount: FormControl<number | null | undefined>,
	}
	export function CreateLifecyclePolicyPreviewSummaryFormGroup() {
		return new FormGroup<LifecyclePolicyPreviewSummaryFormProperties>({
			expiringImageTotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetLifecyclePolicyPreviewRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;
		imageIds?: Array<ImageIdentifier>;
		nextToken?: string;
		maxResults?: number | null;
		filter?: LifecyclePolicyPreviewFilter;
	}
	export interface GetLifecyclePolicyPreviewRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetLifecyclePolicyPreviewRequestFormGroup() {
		return new FormGroup<GetLifecyclePolicyPreviewRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The filter for the lifecycle policy preview. */
	export interface LifecyclePolicyPreviewFilter {
		tagStatus?: TagStatus;
	}

	/** The filter for the lifecycle policy preview. */
	export interface LifecyclePolicyPreviewFilterFormProperties {
		tagStatus: FormControl<TagStatus | null | undefined>,
	}
	export function CreateLifecyclePolicyPreviewFilterFormGroup() {
		return new FormGroup<LifecyclePolicyPreviewFilterFormProperties>({
			tagStatus: new FormControl<TagStatus | null | undefined>(undefined),
		});

	}

	export interface LifecyclePolicyPreviewNotFoundException {
	}
	export interface LifecyclePolicyPreviewNotFoundExceptionFormProperties {
	}
	export function CreateLifecyclePolicyPreviewNotFoundExceptionFormGroup() {
		return new FormGroup<LifecyclePolicyPreviewNotFoundExceptionFormProperties>({
		});

	}

	export interface GetRegistryPolicyResponse {
		registryId?: string;
		policyText?: string;
	}
	export interface GetRegistryPolicyResponseFormProperties {
		registryId: FormControl<string | null | undefined>,
		policyText: FormControl<string | null | undefined>,
	}
	export function CreateGetRegistryPolicyResponseFormGroup() {
		return new FormGroup<GetRegistryPolicyResponseFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			policyText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRegistryPolicyRequest {
	}
	export interface GetRegistryPolicyRequestFormProperties {
	}
	export function CreateGetRegistryPolicyRequestFormGroup() {
		return new FormGroup<GetRegistryPolicyRequestFormProperties>({
		});

	}

	export interface GetRegistryScanningConfigurationResponse {
		registryId?: string;
		scanningConfiguration?: RegistryScanningConfiguration;
	}
	export interface GetRegistryScanningConfigurationResponseFormProperties {
		registryId: FormControl<string | null | undefined>,
	}
	export function CreateGetRegistryScanningConfigurationResponseFormGroup() {
		return new FormGroup<GetRegistryScanningConfigurationResponseFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The scanning configuration for a private registry. */
	export interface RegistryScanningConfiguration {
		scanType?: ScanType;
		rules?: Array<RegistryScanningRule>;
	}

	/** The scanning configuration for a private registry. */
	export interface RegistryScanningConfigurationFormProperties {
		scanType: FormControl<ScanType | null | undefined>,
	}
	export function CreateRegistryScanningConfigurationFormGroup() {
		return new FormGroup<RegistryScanningConfigurationFormProperties>({
			scanType: new FormControl<ScanType | null | undefined>(undefined),
		});

	}

	export enum ScanType { BASIC = 0, ENHANCED = 1 }


	/** The details of a scanning rule for a private registry. */
	export interface RegistryScanningRule {

		/** Required */
		scanFrequency: ScanFrequency;

		/** Required */
		repositoryFilters: Array<ScanningRepositoryFilter>;
	}

	/** The details of a scanning rule for a private registry. */
	export interface RegistryScanningRuleFormProperties {

		/** Required */
		scanFrequency: FormControl<ScanFrequency | null | undefined>,
	}
	export function CreateRegistryScanningRuleFormGroup() {
		return new FormGroup<RegistryScanningRuleFormProperties>({
			scanFrequency: new FormControl<ScanFrequency | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRegistryScanningConfigurationRequest {
	}
	export interface GetRegistryScanningConfigurationRequestFormProperties {
	}
	export function CreateGetRegistryScanningConfigurationRequestFormGroup() {
		return new FormGroup<GetRegistryScanningConfigurationRequestFormProperties>({
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

	export interface ListImagesResponse {
		imageIds?: Array<ImageIdentifier>;
		nextToken?: string;
	}
	export interface ListImagesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImagesResponseFormGroup() {
		return new FormGroup<ListImagesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImagesRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;
		nextToken?: string;
		maxResults?: number | null;
		filter?: ListImagesFilter;
	}
	export interface ListImagesRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListImagesRequestFormGroup() {
		return new FormGroup<ListImagesRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object representing a filter on a <a>ListImages</a> operation. */
	export interface ListImagesFilter {
		tagStatus?: TagStatus;
	}

	/** An object representing a filter on a <a>ListImages</a> operation. */
	export interface ListImagesFilterFormProperties {
		tagStatus: FormControl<TagStatus | null | undefined>,
	}
	export function CreateListImagesFilterFormGroup() {
		return new FormGroup<ListImagesFilterFormProperties>({
			tagStatus: new FormControl<TagStatus | null | undefined>(undefined),
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

	export interface PutImageScanningConfigurationResponse {
		registryId?: string;
		repositoryName?: string;
		imageScanningConfiguration?: ImageScanningConfiguration;
	}
	export interface PutImageScanningConfigurationResponseFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreatePutImageScanningConfigurationResponseFormGroup() {
		return new FormGroup<PutImageScanningConfigurationResponseFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutImageScanningConfigurationRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;

		/** Required */
		imageScanningConfiguration: ImageScanningConfiguration;
	}
	export interface PutImageScanningConfigurationRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreatePutImageScanningConfigurationRequestFormGroup() {
		return new FormGroup<PutImageScanningConfigurationRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutImageTagMutabilityResponse {
		registryId?: string;
		repositoryName?: string;
		imageTagMutability?: ImageTagMutability;
	}
	export interface PutImageTagMutabilityResponseFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		imageTagMutability: FormControl<ImageTagMutability | null | undefined>,
	}
	export function CreatePutImageTagMutabilityResponseFormGroup() {
		return new FormGroup<PutImageTagMutabilityResponseFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			imageTagMutability: new FormControl<ImageTagMutability | null | undefined>(undefined),
		});

	}

	export interface PutImageTagMutabilityRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;

		/** Required */
		imageTagMutability: ImageTagMutability;
	}
	export interface PutImageTagMutabilityRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,

		/** Required */
		imageTagMutability: FormControl<ImageTagMutability | null | undefined>,
	}
	export function CreatePutImageTagMutabilityRequestFormGroup() {
		return new FormGroup<PutImageTagMutabilityRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageTagMutability: new FormControl<ImageTagMutability | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutLifecyclePolicyResponse {
		registryId?: string;
		repositoryName?: string;
		lifecyclePolicyText?: string;
	}
	export interface PutLifecyclePolicyResponseFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		lifecyclePolicyText: FormControl<string | null | undefined>,
	}
	export function CreatePutLifecyclePolicyResponseFormGroup() {
		return new FormGroup<PutLifecyclePolicyResponseFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			lifecyclePolicyText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutLifecyclePolicyRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;

		/** Required */
		lifecyclePolicyText: string;
	}
	export interface PutLifecyclePolicyRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,

		/** Required */
		lifecyclePolicyText: FormControl<string | null | undefined>,
	}
	export function CreatePutLifecyclePolicyRequestFormGroup() {
		return new FormGroup<PutLifecyclePolicyRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lifecyclePolicyText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutRegistryPolicyResponse {
		registryId?: string;
		policyText?: string;
	}
	export interface PutRegistryPolicyResponseFormProperties {
		registryId: FormControl<string | null | undefined>,
		policyText: FormControl<string | null | undefined>,
	}
	export function CreatePutRegistryPolicyResponseFormGroup() {
		return new FormGroup<PutRegistryPolicyResponseFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			policyText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutRegistryPolicyRequest {

		/** Required */
		policyText: string;
	}
	export interface PutRegistryPolicyRequestFormProperties {

		/** Required */
		policyText: FormControl<string | null | undefined>,
	}
	export function CreatePutRegistryPolicyRequestFormGroup() {
		return new FormGroup<PutRegistryPolicyRequestFormProperties>({
			policyText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutRegistryScanningConfigurationResponse {
		registryScanningConfiguration?: RegistryScanningConfiguration;
	}
	export interface PutRegistryScanningConfigurationResponseFormProperties {
	}
	export function CreatePutRegistryScanningConfigurationResponseFormGroup() {
		return new FormGroup<PutRegistryScanningConfigurationResponseFormProperties>({
		});

	}

	export interface PutRegistryScanningConfigurationRequest {
		scanType?: ScanType;
		rules?: Array<RegistryScanningRule>;
	}
	export interface PutRegistryScanningConfigurationRequestFormProperties {
		scanType: FormControl<ScanType | null | undefined>,
	}
	export function CreatePutRegistryScanningConfigurationRequestFormGroup() {
		return new FormGroup<PutRegistryScanningConfigurationRequestFormProperties>({
			scanType: new FormControl<ScanType | null | undefined>(undefined),
		});

	}

	export interface PutReplicationConfigurationResponse {
		replicationConfiguration?: ReplicationConfiguration;
	}
	export interface PutReplicationConfigurationResponseFormProperties {
	}
	export function CreatePutReplicationConfigurationResponseFormGroup() {
		return new FormGroup<PutReplicationConfigurationResponseFormProperties>({
		});

	}

	export interface PutReplicationConfigurationRequest {

		/** Required */
		replicationConfiguration: ReplicationConfiguration;
	}
	export interface PutReplicationConfigurationRequestFormProperties {
	}
	export function CreatePutReplicationConfigurationRequestFormGroup() {
		return new FormGroup<PutReplicationConfigurationRequestFormProperties>({
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

	export interface StartImageScanResponse {
		registryId?: string;
		repositoryName?: string;

		/** An object with identifying information for an image in an Amazon ECR repository. */
		imageId?: ImageIdentifier;
		imageScanStatus?: ImageScanStatus;
	}
	export interface StartImageScanResponseFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateStartImageScanResponseFormGroup() {
		return new FormGroup<StartImageScanResponseFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartImageScanRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;

		/**
		 * An object with identifying information for an image in an Amazon ECR repository.
		 * Required
		 */
		imageId: ImageIdentifier;
	}
	export interface StartImageScanRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateStartImageScanRequestFormGroup() {
		return new FormGroup<StartImageScanRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UnsupportedImageTypeException {
	}
	export interface UnsupportedImageTypeExceptionFormProperties {
	}
	export function CreateUnsupportedImageTypeExceptionFormGroup() {
		return new FormGroup<UnsupportedImageTypeExceptionFormProperties>({
		});

	}

	export interface StartLifecyclePolicyPreviewResponse {
		registryId?: string;
		repositoryName?: string;
		lifecyclePolicyText?: string;
		status?: LifecyclePolicyPreviewStatus;
	}
	export interface StartLifecyclePolicyPreviewResponseFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		lifecyclePolicyText: FormControl<string | null | undefined>,
		status: FormControl<LifecyclePolicyPreviewStatus | null | undefined>,
	}
	export function CreateStartLifecyclePolicyPreviewResponseFormGroup() {
		return new FormGroup<StartLifecyclePolicyPreviewResponseFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			lifecyclePolicyText: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<LifecyclePolicyPreviewStatus | null | undefined>(undefined),
		});

	}

	export interface StartLifecyclePolicyPreviewRequest {
		registryId?: string;

		/** Required */
		repositoryName: string;
		lifecyclePolicyText?: string;
	}
	export interface StartLifecyclePolicyPreviewRequestFormProperties {
		registryId: FormControl<string | null | undefined>,

		/** Required */
		repositoryName: FormControl<string | null | undefined>,
		lifecyclePolicyText: FormControl<string | null | undefined>,
	}
	export function CreateStartLifecyclePolicyPreviewRequestFormGroup() {
		return new FormGroup<StartLifecyclePolicyPreviewRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lifecyclePolicyText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LifecyclePolicyPreviewInProgressException {
	}
	export interface LifecyclePolicyPreviewInProgressExceptionFormProperties {
	}
	export function CreateLifecyclePolicyPreviewInProgressExceptionFormGroup() {
		return new FormGroup<LifecyclePolicyPreviewInProgressExceptionFormProperties>({
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
		 * <p>Checks the availability of one or more image layers in a repository.</p> <p>When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability
		 * @return {BatchCheckLayerAvailabilityResponse} Success
		 */
		BatchCheckLayerAvailability(requestBody: BatchCheckLayerAvailabilityRequest): Observable<BatchCheckLayerAvailabilityResponse> {
			return this.http.post<BatchCheckLayerAvailabilityResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a list of specified images within a repository. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the image's digest in your request.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage
		 * @return {BatchDeleteImageResponse} Success
		 */
		BatchDeleteImage(requestBody: BatchDeleteImageRequest): Observable<BatchDeleteImageResponse> {
			return this.http.post<BatchDeleteImageResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets detailed information for an image. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>When an image is pulled, the BatchGetImage API is called once to retrieve the image manifest.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetImage
		 * @return {BatchGetImageResponse} Success
		 */
		BatchGetImage(requestBody: BatchGetImageRequest): Observable<BatchGetImageResponse> {
			return this.http.post<BatchGetImageResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetImage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the scanning configuration for one or more repositories.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration
		 * @return {BatchGetRepositoryScanningConfigurationResponse} Success
		 */
		BatchGetRepositoryScanningConfiguration(requestBody: BatchGetRepositoryScanningConfigurationRequest): Observable<BatchGetRepositoryScanningConfigurationResponse> {
			return this.http.post<BatchGetRepositoryScanningConfigurationResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Informs Amazon ECR that the image layer upload has completed for a specified registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once per each new image layer to verify that the upload has completed.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload
		 * @return {CompleteLayerUploadResponse} Success
		 */
		CompleteLayerUpload(requestBody: CompleteLayerUploadRequest): Observable<CompleteLayerUploadResponse> {
			return this.http.post<CompleteLayerUploadResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a pull through cache rule. A pull through cache rule provides a way to cache images from an external public registry in your Amazon ECR private registry.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule
		 * @return {CreatePullThroughCacheRuleResponse} Success
		 */
		CreatePullThroughCacheRule(requestBody: CreatePullThroughCacheRuleRequest): Observable<CreatePullThroughCacheRuleResponse> {
			return this.http.post<CreatePullThroughCacheRuleResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreateRepository
		 * @return {CreateRepositoryResponse} Success
		 */
		CreateRepository(requestBody: CreateRepositoryRequest): Observable<CreateRepositoryResponse> {
			return this.http.post<CreateRepositoryResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreateRepository', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the lifecycle policy associated with the specified repository.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy
		 * @return {DeleteLifecyclePolicyResponse} Success
		 */
		DeleteLifecyclePolicy(requestBody: DeleteLifecyclePolicyRequest): Observable<DeleteLifecyclePolicyResponse> {
			return this.http.post<DeleteLifecyclePolicyResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a pull through cache rule.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule
		 * @return {DeletePullThroughCacheRuleResponse} Success
		 */
		DeletePullThroughCacheRule(requestBody: DeletePullThroughCacheRuleRequest): Observable<DeletePullThroughCacheRuleResponse> {
			return this.http.post<DeletePullThroughCacheRuleResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the registry permissions policy.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy
		 * @return {DeleteRegistryPolicyResponse} Success
		 */
		DeleteRegistryPolicy(requestBody: DeleteRegistryPolicyRequest): Observable<DeleteRegistryPolicyResponse> {
			return this.http.post<DeleteRegistryPolicyResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a repository. If the repository contains images, you must either delete all images in the repository or use the <code>force</code> option to delete the repository.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepository
		 * @return {DeleteRepositoryResponse} Success
		 */
		DeleteRepository(requestBody: DeleteRepositoryRequest): Observable<DeleteRepositoryResponse> {
			return this.http.post<DeleteRepositoryResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepository', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the repository policy associated with the specified repository.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy
		 * @return {DeleteRepositoryPolicyResponse} Success
		 */
		DeleteRepositoryPolicy(requestBody: DeleteRepositoryPolicyRequest): Observable<DeleteRepositoryPolicyResponse> {
			return this.http.post<DeleteRepositoryPolicyResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the replication status for a specified image.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus
		 * @return {DescribeImageReplicationStatusResponse} Success
		 */
		DescribeImageReplicationStatus(requestBody: DescribeImageReplicationStatusRequest): Observable<DescribeImageReplicationStatusResponse> {
			return this.http.post<DescribeImageReplicationStatusResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the scan findings for the specified image.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeImageScanFindingsResponse} Success
		 */
		DescribeImageScanFindings(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeImageScanFindingsRequest): Observable<DescribeImageScanFindingsResponse> {
			return this.http.post<DescribeImageScanFindingsResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns metadata about the images in a repository.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size, so it may return a larger image size than the image sizes returned by <a>DescribeImages</a>.</p> </note>
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImages
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeImagesResponse} Success
		 */
		DescribeImages(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeImagesRequest): Observable<DescribeImagesResponse> {
			return this.http.post<DescribeImagesResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImages?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the pull through cache rules for a registry.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribePullThroughCacheRulesResponse} Success
		 */
		DescribePullThroughCacheRules(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribePullThroughCacheRulesRequest): Observable<DescribePullThroughCacheRulesResponse> {
			return this.http.post<DescribePullThroughCacheRulesResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the settings for a registry. The replication configuration for a repository can be created or updated with the <a>PutReplicationConfiguration</a> API action.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRegistry
		 * @return {DescribeRegistryResponse} Success
		 */
		DescribeRegistry(requestBody: DescribeRegistryRequest): Observable<DescribeRegistryResponse> {
			return this.http.post<DescribeRegistryResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRegistry', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes image repositories in a registry.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRepositories
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeRepositoriesResponse} Success
		 */
		DescribeRepositories(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeRepositoriesRequest): Observable<DescribeRepositoriesResponse> {
			return this.http.post<DescribeRepositoriesResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRepositories?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves an authorization token. An authorization token represents your IAM authentication credentials and can be used to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours.</p> <p>The <code>authorizationToken</code> returned is a base64 encoded string that can be decoded and used in a <code>docker login</code> command to authenticate to a registry. The CLI offers an <code>get-login-password</code> command that simplifies the login process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html#registry_auth">Registry authentication</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken
		 * @return {GetAuthorizationTokenResponse} Success
		 */
		GetAuthorizationToken(requestBody: GetAuthorizationTokenRequest): Observable<GetAuthorizationTokenResponse> {
			return this.http.post<GetAuthorizationTokenResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You can only get URLs for image layers that are referenced in an image.</p> <p>When an image is pulled, the GetDownloadUrlForLayer API is called once per image layer that is not already cached.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer
		 * @return {GetDownloadUrlForLayerResponse} Success
		 */
		GetDownloadUrlForLayer(requestBody: GetDownloadUrlForLayerRequest): Observable<GetDownloadUrlForLayerResponse> {
			return this.http.post<GetDownloadUrlForLayerResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the lifecycle policy for the specified repository.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy
		 * @return {GetLifecyclePolicyResponse} Success
		 */
		GetLifecyclePolicy(requestBody: GetLifecyclePolicyRequest): Observable<GetLifecyclePolicyResponse> {
			return this.http.post<GetLifecyclePolicyResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the results of the lifecycle policy preview request for the specified repository.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetLifecyclePolicyPreviewResponse} Success
		 */
		GetLifecyclePolicyPreview(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetLifecyclePolicyPreviewRequest): Observable<GetLifecyclePolicyPreviewResponse> {
			return this.http.post<GetLifecyclePolicyPreviewResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the permissions policy for a registry.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy
		 * @return {GetRegistryPolicyResponse} Success
		 */
		GetRegistryPolicy(requestBody: GetRegistryPolicyRequest): Observable<GetRegistryPolicyResponse> {
			return this.http.post<GetRegistryPolicyResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the scanning configuration for a registry.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration
		 * @return {GetRegistryScanningConfigurationResponse} Success
		 */
		GetRegistryScanningConfiguration(requestBody: GetRegistryScanningConfigurationRequest): Observable<GetRegistryScanningConfigurationResponse> {
			return this.http.post<GetRegistryScanningConfigurationResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the repository policy for the specified repository.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy
		 * @return {GetRepositoryPolicyResponse} Success
		 */
		GetRepositoryPolicy(requestBody: GetRepositoryPolicyRequest): Observable<GetRepositoryPolicyResponse> {
			return this.http.post<GetRepositoryPolicyResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once per image layer that has not already been uploaded. Whether or not an image layer has been uploaded is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload
		 * @return {InitiateLayerUploadResponse} Success
		 */
		InitiateLayerUpload(requestBody: InitiateLayerUploadRequest): Observable<InitiateLayerUploadResponse> {
			return this.http.post<InitiateLayerUploadResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all the image IDs for the specified repository.</p> <p>You can filter images based on whether or not they are tagged by using the <code>tagStatus</code> filter and specifying either <code>TAGGED</code>, <code>UNTAGGED</code> or <code>ANY</code>. For example, you can filter your results to return only <code>UNTAGGED</code> images and then pipe that result to a <a>BatchDeleteImage</a> operation to delete them. Or, you can filter your results to return only <code>TAGGED</code> images to list all of the tags in your repository.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListImages
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListImagesResponse} Success
		 */
		ListImages(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListImagesRequest): Observable<ListImagesResponse> {
			return this.http.post<ListImagesResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListImages?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the tags for an Amazon ECR resource.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates or updates the image manifest and tags associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImage
		 * @return {PutImageResponse} Success
		 */
		PutImage(requestBody: PutImageRequest): Observable<PutImageResponse> {
			return this.http.post<PutImageResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <important> <p>The <code>PutImageScanningConfiguration</code> API is being deprecated, in favor of specifying the image scanning configuration at the registry level. For more information, see <a>PutRegistryScanningConfiguration</a>.</p> </important> <p>Updates the image scanning configuration for the specified repository.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration
		 * @return {PutImageScanningConfigurationResponse} Success
		 */
		PutImageScanningConfiguration(requestBody: PutImageScanningConfigurationRequest): Observable<PutImageScanningConfigurationResponse> {
			return this.http.post<PutImageScanningConfigurationResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the image tag mutability settings for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html">Image tag mutability</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability
		 * @return {PutImageTagMutabilityResponse} Success
		 */
		PutImageTagMutability(requestBody: PutImageTagMutabilityRequest): Observable<PutImageTagMutabilityResponse> {
			return this.http.post<PutImageTagMutabilityResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates the lifecycle policy for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html">Lifecycle policy template</a>.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy
		 * @return {PutLifecyclePolicyResponse} Success
		 */
		PutLifecyclePolicy(requestBody: PutLifecyclePolicyRequest): Observable<PutLifecyclePolicyResponse> {
			return this.http.post<PutLifecyclePolicyResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates or updates the permissions policy for your registry.</p> <p>A registry policy is used to specify permissions for another Amazon Web Services account and is used when configuring cross-account replication. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html">Registry permissions</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy
		 * @return {PutRegistryPolicyResponse} Success
		 */
		PutRegistryPolicy(requestBody: PutRegistryPolicyRequest): Observable<PutRegistryPolicyResponse> {
			return this.http.post<PutRegistryPolicyResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates the scanning configuration for your private registry.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration
		 * @return {PutRegistryScanningConfigurationResponse} Success
		 */
		PutRegistryScanningConfiguration(requestBody: PutRegistryScanningConfigurationRequest): Observable<PutRegistryScanningConfigurationResponse> {
			return this.http.post<PutRegistryScanningConfigurationResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates or updates the replication configuration for a registry. The existing replication configuration for a repository can be retrieved with the <a>DescribeRegistry</a> API action. The first time the PutReplicationConfiguration API is called, a service-linked IAM role is created in your account for the replication process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html">Using service-linked roles for Amazon ECR</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p> <note> <p>When configuring cross-account replication, the destination account must grant the source account permission to replicate. This permission is controlled using a registry permissions policy. For more information, see <a>PutRegistryPolicy</a>.</p> </note>
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration
		 * @return {PutReplicationConfigurationResponse} Success
		 */
		PutReplicationConfiguration(requestBody: PutReplicationConfigurationRequest): Observable<PutReplicationConfigurationResponse> {
			return this.http.post<PutReplicationConfigurationResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Applies a repository policy to the specified repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy
		 * @return {SetRepositoryPolicyResponse} Success
		 */
		SetRepositoryPolicy(requestBody: SetRepositoryPolicyRequest): Observable<SetRepositoryPolicyResponse> {
			return this.http.post<SetRepositoryPolicyResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an image vulnerability scan. An image scan can only be started once per 24 hours on an individual image. This limit includes if an image was scanned on initial push. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html">Image scanning</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartImageScan
		 * @return {StartImageScanResponse} Success
		 */
		StartImageScan(requestBody: StartImageScanRequest): Observable<StartImageScanResponse> {
			return this.http.post<StartImageScanResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartImageScan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a preview of a lifecycle policy for the specified repository. This allows you to see the results before associating the lifecycle policy with the repository.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview
		 * @return {StartLifecyclePolicyPreviewResponse} Success
		 */
		StartLifecyclePolicyPreview(requestBody: StartLifecyclePolicyPreviewRequest): Observable<StartLifecyclePolicyPreviewResponse> {
			return this.http.post<StartLifecyclePolicyPreviewResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds specified tags to a resource with the specified ARN. Existing tags on a resource are not changed if they are not specified in the request parameters.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes specified tags from a resource.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API is called once per each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UploadLayerPart
		 * @return {UploadLayerPartResponse} Success
		 */
		UploadLayerPart(requestBody: UploadLayerPartRequest): Observable<UploadLayerPartResponse> {
			return this.http.post<UploadLayerPartResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UploadLayerPart', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum BatchCheckLayerAvailabilityX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability' = 0 }

	export enum BatchDeleteImageX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage' = 0 }

	export enum BatchGetImageX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.BatchGetImage' = 0 }

	export enum BatchGetRepositoryScanningConfigurationX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration' = 0 }

	export enum CompleteLayerUploadX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload' = 0 }

	export enum CreatePullThroughCacheRuleX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule' = 0 }

	export enum CreateRepositoryX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.CreateRepository' = 0 }

	export enum DeleteLifecyclePolicyX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy' = 0 }

	export enum DeletePullThroughCacheRuleX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule' = 0 }

	export enum DeleteRegistryPolicyX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy' = 0 }

	export enum DeleteRepositoryX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.DeleteRepository' = 0 }

	export enum DeleteRepositoryPolicyX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy' = 0 }

	export enum DescribeImageReplicationStatusX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus' = 0 }

	export enum DescribeImageScanFindingsX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings' = 0 }

	export enum DescribeImagesX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.DescribeImages' = 0 }

	export enum DescribePullThroughCacheRulesX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules' = 0 }

	export enum DescribeRegistryX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.DescribeRegistry' = 0 }

	export enum DescribeRepositoriesX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.DescribeRepositories' = 0 }

	export enum GetAuthorizationTokenX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken' = 0 }

	export enum GetDownloadUrlForLayerX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer' = 0 }

	export enum GetLifecyclePolicyX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy' = 0 }

	export enum GetLifecyclePolicyPreviewX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview' = 0 }

	export enum GetRegistryPolicyX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy' = 0 }

	export enum GetRegistryScanningConfigurationX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration' = 0 }

	export enum GetRepositoryPolicyX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy' = 0 }

	export enum InitiateLayerUploadX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload' = 0 }

	export enum ListImagesX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.ListImages' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.ListTagsForResource' = 0 }

	export enum PutImageX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.PutImage' = 0 }

	export enum PutImageScanningConfigurationX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration' = 0 }

	export enum PutImageTagMutabilityX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability' = 0 }

	export enum PutLifecyclePolicyX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy' = 0 }

	export enum PutRegistryPolicyX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy' = 0 }

	export enum PutRegistryScanningConfigurationX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration' = 0 }

	export enum PutReplicationConfigurationX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration' = 0 }

	export enum SetRepositoryPolicyX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy' = 0 }

	export enum StartImageScanX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.StartImageScan' = 0 }

	export enum StartLifecyclePolicyPreviewX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview' = 0 }

	export enum TagResourceX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.UntagResource' = 0 }

	export enum UploadLayerPartX_Amz_Target { 'AmazonEC2ContainerRegistry_V20150921.UploadLayerPart' = 0 }

}

