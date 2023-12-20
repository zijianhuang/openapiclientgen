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
		layerDigest?: string | null;
		layerAvailability?: LayerLayerAvailability | null;
		layerSize?: number | null;
		mediaType?: string | null;
	}

	/** An object representing an Amazon ECR image layer. */
	export interface LayerFormProperties {
		layerDigest: FormControl<string | null | undefined>,
		layerAvailability: FormControl<LayerLayerAvailability | null | undefined>,
		layerSize: FormControl<number | null | undefined>,
		mediaType: FormControl<string | null | undefined>,
	}
	export function CreateLayerFormGroup() {
		return new FormGroup<LayerFormProperties>({
			layerDigest: new FormControl<string | null | undefined>(undefined),
			layerAvailability: new FormControl<LayerLayerAvailability | null | undefined>(undefined),
			layerSize: new FormControl<number | null | undefined>(undefined),
			mediaType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LayerLayerAvailability { AVAILABLE = 0, UNAVAILABLE = 1 }


	/** An object representing an Amazon ECR image layer failure. */
	export interface LayerFailure {
		layerDigest?: string | null;
		failureCode?: LayerFailureFailureCode | null;
		failureReason?: string | null;
	}

	/** An object representing an Amazon ECR image layer failure. */
	export interface LayerFailureFormProperties {
		layerDigest: FormControl<string | null | undefined>,
		failureCode: FormControl<LayerFailureFailureCode | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateLayerFailureFormGroup() {
		return new FormGroup<LayerFailureFormProperties>({
			layerDigest: new FormControl<string | null | undefined>(undefined),
			failureCode: new FormControl<LayerFailureFailureCode | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LayerFailureFailureCode { InvalidLayerDigest = 0, MissingLayerDigest = 1 }

	export interface BatchCheckLayerAvailabilityRequest {
		registryId?: string | null;
		repositoryName: string;
		layerDigests: Array<string>;
	}
	export interface BatchCheckLayerAvailabilityRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateBatchCheckLayerAvailabilityRequestFormGroup() {
		return new FormGroup<BatchCheckLayerAvailabilityRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
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


	/** An object with identifying information for an Amazon ECR image. */
	export interface ImageIdentifier {
		imageDigest?: string | null;
		imageTag?: string | null;
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


	/** An object representing an Amazon ECR image failure. */
	export interface ImageFailure {

		/** An object with identifying information for an Amazon ECR image. */
		imageId?: ImageIdentifier;
		failureCode?: ImageFailureFailureCode | null;
		failureReason?: string | null;
	}

	/** An object representing an Amazon ECR image failure. */
	export interface ImageFailureFormProperties {
		failureCode: FormControl<ImageFailureFailureCode | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateImageFailureFormGroup() {
		return new FormGroup<ImageFailureFormProperties>({
			failureCode: new FormControl<ImageFailureFailureCode | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImageFailureFailureCode { InvalidImageDigest = 0, InvalidImageTag = 1, ImageTagDoesNotMatchDigest = 2, ImageNotFound = 3, MissingDigestAndTag = 4, ImageReferencedByManifestList = 5 }


	/** Deletes specified images within a specified repository. Images are specified with either the <code>imageTag</code> or <code>imageDigest</code>. */
	export interface BatchDeleteImageRequest {
		registryId?: string | null;
		repositoryName: string;
		imageIds: Array<ImageIdentifier>;
	}

	/** Deletes specified images within a specified repository. Images are specified with either the <code>imageTag</code> or <code>imageDigest</code>. */
	export interface BatchDeleteImageRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteImageRequestFormGroup() {
		return new FormGroup<BatchDeleteImageRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
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
		registryId?: string | null;
		repositoryName?: string | null;

		/** An object with identifying information for an Amazon ECR image. */
		imageId?: ImageIdentifier;
		imageManifest?: string | null;
		imageManifestMediaType?: string | null;
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
		registryId?: string | null;
		repositoryName: string;
		imageIds: Array<ImageIdentifier>;
		acceptedMediaTypes?: Array<string>;
	}
	export interface BatchGetImageRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetImageRequestFormGroup() {
		return new FormGroup<BatchGetImageRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CompleteLayerUploadResponse {
		registryId?: string | null;
		repositoryName?: string | null;
		uploadId?: string | null;
		layerDigest?: string | null;
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
		registryId?: string | null;
		repositoryName: string;
		uploadId: string;
		layerDigests: Array<string>;
	}
	export interface CompleteLayerUploadRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		uploadId: FormControl<string | null | undefined>,
	}
	export function CreateCompleteLayerUploadRequestFormGroup() {
		return new FormGroup<CompleteLayerUploadRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			uploadId: new FormControl<string | null | undefined>(undefined),
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

		/** An object representing a repository. */
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
		repositoryArn?: string | null;
		registryId?: string | null;
		repositoryName?: string | null;
		repositoryUri?: string | null;
		createdAt?: Date | null;
		imageTagMutability?: RepositoryImageTagMutability | null;

		/** The image scanning configuration for a repository. */
		imageScanningConfiguration?: ImageScanningConfiguration;
	}

	/** An object representing a repository. */
	export interface RepositoryFormProperties {
		repositoryArn: FormControl<string | null | undefined>,
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		repositoryUri: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		imageTagMutability: FormControl<RepositoryImageTagMutability | null | undefined>,
	}
	export function CreateRepositoryFormGroup() {
		return new FormGroup<RepositoryFormProperties>({
			repositoryArn: new FormControl<string | null | undefined>(undefined),
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			repositoryUri: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			imageTagMutability: new FormControl<RepositoryImageTagMutability | null | undefined>(undefined),
		});

	}

	export enum RepositoryImageTagMutability { MUTABLE = 0, IMMUTABLE = 1 }


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

	export interface CreateRepositoryRequest {
		repositoryName: string;
		tags?: Array<Tag>;
		imageTagMutability?: RepositoryImageTagMutability | null;

		/** The image scanning configuration for a repository. */
		imageScanningConfiguration?: ImageScanningConfiguration;
	}
	export interface CreateRepositoryRequestFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		imageTagMutability: FormControl<RepositoryImageTagMutability | null | undefined>,
	}
	export function CreateCreateRepositoryRequestFormGroup() {
		return new FormGroup<CreateRepositoryRequestFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			imageTagMutability: new FormControl<RepositoryImageTagMutability | null | undefined>(undefined),
		});

	}


	/** The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters. */
	export interface Tag {
		Key?: string | null;
		Value?: string | null;
	}

	/** The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters. */
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

	export interface DeleteLifecyclePolicyResponse {
		registryId?: string | null;
		repositoryName?: string | null;
		lifecyclePolicyText?: string | null;
		lastEvaluatedAt?: Date | null;
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
		registryId?: string | null;
		repositoryName: string;
	}
	export interface DeleteLifecyclePolicyRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLifecyclePolicyRequestFormGroup() {
		return new FormGroup<DeleteLifecyclePolicyRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
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

	export interface DeleteRepositoryResponse {

		/** An object representing a repository. */
		repository?: Repository;
	}
	export interface DeleteRepositoryResponseFormProperties {
	}
	export function CreateDeleteRepositoryResponseFormGroup() {
		return new FormGroup<DeleteRepositoryResponseFormProperties>({
		});

	}

	export interface DeleteRepositoryRequest {
		registryId?: string | null;
		repositoryName: string;
		force?: boolean | null;
	}
	export interface DeleteRepositoryRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		force: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteRepositoryRequestFormGroup() {
		return new FormGroup<DeleteRepositoryRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
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
		registryId?: string | null;
		repositoryName?: string | null;
		policyText?: string | null;
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
		registryId?: string | null;
		repositoryName: string;
	}
	export interface DeleteRepositoryPolicyRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRepositoryPolicyRequestFormGroup() {
		return new FormGroup<DeleteRepositoryPolicyRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
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

	export interface DescribeImageScanFindingsResponse {
		registryId?: string | null;
		repositoryName?: string | null;

		/** An object with identifying information for an Amazon ECR image. */
		imageId?: ImageIdentifier;

		/** The current status of an image scan. */
		imageScanStatus?: ImageScanStatus;

		/** The details of an image scan. */
		imageScanFindings?: ImageScanFindings;
		nextToken?: string | null;
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
		status?: ImageScanStatusStatus | null;
		description?: string | null;
	}

	/** The current status of an image scan. */
	export interface ImageScanStatusFormProperties {
		status: FormControl<ImageScanStatusStatus | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateImageScanStatusFormGroup() {
		return new FormGroup<ImageScanStatusFormProperties>({
			status: new FormControl<ImageScanStatusStatus | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImageScanStatusStatus { IN_PROGRESS = 0, COMPLETE = 1, FAILED = 2 }


	/** The details of an image scan. */
	export interface ImageScanFindings {
		imageScanCompletedAt?: Date | null;
		vulnerabilitySourceUpdatedAt?: Date | null;
		findings?: Array<ImageScanFinding>;
		findingSeverityCounts?: FindingSeverityCounts;
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


	/** Contains information about an image scan finding. */
	export interface ImageScanFinding {
		name?: string | null;
		description?: string | null;
		uri?: string | null;
		severity?: ImageScanFindingSeverity | null;
		attributes?: Array<Attribute>;
	}

	/** Contains information about an image scan finding. */
	export interface ImageScanFindingFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
		severity: FormControl<ImageScanFindingSeverity | null | undefined>,
	}
	export function CreateImageScanFindingFormGroup() {
		return new FormGroup<ImageScanFindingFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<ImageScanFindingSeverity | null | undefined>(undefined),
		});

	}

	export enum ImageScanFindingSeverity { INFORMATIONAL = 0, LOW = 1, MEDIUM = 2, HIGH = 3, CRITICAL = 4, UNDEFINED = 5 }


	/** This data type is used in the <a>ImageScanFinding</a> data type. */
	export interface Attribute {
		key: string;
		value?: string | null;
	}

	/** This data type is used in the <a>ImageScanFinding</a> data type. */
	export interface AttributeFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateAttributeFormGroup() {
		return new FormGroup<AttributeFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
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

	export interface DescribeImageScanFindingsRequest {
		registryId?: string | null;
		repositoryName: string;

		/**
		 * An object with identifying information for an Amazon ECR image.
		 * Required
		 */
		imageId: ImageIdentifier;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface DescribeImageScanFindingsRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeImageScanFindingsRequestFormGroup() {
		return new FormGroup<DescribeImageScanFindingsRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
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
		nextToken?: string | null;
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
		registryId?: string | null;
		repositoryName?: string | null;
		imageDigest?: string | null;
		imageTags?: Array<string>;
		imageSizeInBytes?: number | null;
		imagePushedAt?: Date | null;

		/** The current status of an image scan. */
		imageScanStatus?: ImageScanStatus;

		/** A summary of the last completed image scan. */
		imageScanFindingsSummary?: ImageScanFindingsSummary;
	}

	/** An object that describes an image returned by a <a>DescribeImages</a> operation. */
	export interface ImageDetailFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		imageDigest: FormControl<string | null | undefined>,
		imageSizeInBytes: FormControl<number | null | undefined>,
		imagePushedAt: FormControl<Date | null | undefined>,
	}
	export function CreateImageDetailFormGroup() {
		return new FormGroup<ImageDetailFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			imageDigest: new FormControl<string | null | undefined>(undefined),
			imageSizeInBytes: new FormControl<number | null | undefined>(undefined),
			imagePushedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A summary of the last completed image scan. */
	export interface ImageScanFindingsSummary {
		imageScanCompletedAt?: Date | null;
		vulnerabilitySourceUpdatedAt?: Date | null;
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
		registryId?: string | null;
		repositoryName: string;
		imageIds?: Array<ImageIdentifier>;
		nextToken?: string | null;
		maxResults?: number | null;

		/** An object representing a filter on a <a>DescribeImages</a> operation. */
		filter?: DescribeImagesFilter;
	}
	export interface DescribeImagesRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeImagesRequestFormGroup() {
		return new FormGroup<DescribeImagesRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object representing a filter on a <a>DescribeImages</a> operation. */
	export interface DescribeImagesFilter {
		tagStatus?: DescribeImagesFilterTagStatus | null;
	}

	/** An object representing a filter on a <a>DescribeImages</a> operation. */
	export interface DescribeImagesFilterFormProperties {
		tagStatus: FormControl<DescribeImagesFilterTagStatus | null | undefined>,
	}
	export function CreateDescribeImagesFilterFormGroup() {
		return new FormGroup<DescribeImagesFilterFormProperties>({
			tagStatus: new FormControl<DescribeImagesFilterTagStatus | null | undefined>(undefined),
		});

	}

	export enum DescribeImagesFilterTagStatus { TAGGED = 0, UNTAGGED = 1, ANY = 2 }

	export interface DescribeRepositoriesResponse {
		repositories?: Array<Repository>;
		nextToken?: string | null;
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
		registryId?: string | null;
		repositoryNames?: Array<string>;
		nextToken?: string | null;
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
		authorizationToken?: string | null;
		expiresAt?: Date | null;
		proxyEndpoint?: string | null;
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
		downloadUrl?: string | null;
		layerDigest?: string | null;
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
		registryId?: string | null;
		repositoryName: string;
		layerDigest: string;
	}
	export interface GetDownloadUrlForLayerRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		layerDigest: FormControl<string | null | undefined>,
	}
	export function CreateGetDownloadUrlForLayerRequestFormGroup() {
		return new FormGroup<GetDownloadUrlForLayerRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			layerDigest: new FormControl<string | null | undefined>(undefined),
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
		registryId?: string | null;
		repositoryName?: string | null;
		lifecyclePolicyText?: string | null;
		lastEvaluatedAt?: Date | null;
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
		registryId?: string | null;
		repositoryName: string;
	}
	export interface GetLifecyclePolicyRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateGetLifecyclePolicyRequestFormGroup() {
		return new FormGroup<GetLifecyclePolicyRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLifecyclePolicyPreviewResponse {
		registryId?: string | null;
		repositoryName?: string | null;
		lifecyclePolicyText?: string | null;
		status?: GetLifecyclePolicyPreviewResponseStatus | null;
		nextToken?: string | null;
		previewResults?: Array<LifecyclePolicyPreviewResult>;

		/** The summary of the lifecycle policy preview request. */
		summary?: LifecyclePolicyPreviewSummary;
	}
	export interface GetLifecyclePolicyPreviewResponseFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		lifecyclePolicyText: FormControl<string | null | undefined>,
		status: FormControl<GetLifecyclePolicyPreviewResponseStatus | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetLifecyclePolicyPreviewResponseFormGroup() {
		return new FormGroup<GetLifecyclePolicyPreviewResponseFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			lifecyclePolicyText: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GetLifecyclePolicyPreviewResponseStatus | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetLifecyclePolicyPreviewResponseStatus { IN_PROGRESS = 0, COMPLETE = 1, EXPIRED = 2, FAILED = 3 }


	/** The result of the lifecycle policy preview. */
	export interface LifecyclePolicyPreviewResult {
		imageTags?: Array<string>;
		imageDigest?: string | null;
		imagePushedAt?: Date | null;

		/** The type of action to be taken. */
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
		type?: LifecyclePolicyRuleActionType | null;
	}

	/** The type of action to be taken. */
	export interface LifecyclePolicyRuleActionFormProperties {
		type: FormControl<LifecyclePolicyRuleActionType | null | undefined>,
	}
	export function CreateLifecyclePolicyRuleActionFormGroup() {
		return new FormGroup<LifecyclePolicyRuleActionFormProperties>({
			type: new FormControl<LifecyclePolicyRuleActionType | null | undefined>(undefined),
		});

	}

	export enum LifecyclePolicyRuleActionType { EXPIRE = 0 }


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
		registryId?: string | null;
		repositoryName: string;
		imageIds?: Array<ImageIdentifier>;
		nextToken?: string | null;
		maxResults?: number | null;

		/** The filter for the lifecycle policy preview. */
		filter?: LifecyclePolicyPreviewFilter;
	}
	export interface GetLifecyclePolicyPreviewRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetLifecyclePolicyPreviewRequestFormGroup() {
		return new FormGroup<GetLifecyclePolicyPreviewRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The filter for the lifecycle policy preview. */
	export interface LifecyclePolicyPreviewFilter {
		tagStatus?: DescribeImagesFilterTagStatus | null;
	}

	/** The filter for the lifecycle policy preview. */
	export interface LifecyclePolicyPreviewFilterFormProperties {
		tagStatus: FormControl<DescribeImagesFilterTagStatus | null | undefined>,
	}
	export function CreateLifecyclePolicyPreviewFilterFormGroup() {
		return new FormGroup<LifecyclePolicyPreviewFilterFormProperties>({
			tagStatus: new FormControl<DescribeImagesFilterTagStatus | null | undefined>(undefined),
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

	export interface GetRepositoryPolicyResponse {
		registryId?: string | null;
		repositoryName?: string | null;
		policyText?: string | null;
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
		registryId?: string | null;
		repositoryName: string;
	}
	export interface GetRepositoryPolicyRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateGetRepositoryPolicyRequestFormGroup() {
		return new FormGroup<GetRepositoryPolicyRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InitiateLayerUploadResponse {
		uploadId?: string | null;
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
		registryId?: string | null;
		repositoryName: string;
	}
	export interface InitiateLayerUploadRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateInitiateLayerUploadRequestFormGroup() {
		return new FormGroup<InitiateLayerUploadRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImagesResponse {
		imageIds?: Array<ImageIdentifier>;
		nextToken?: string | null;
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
		registryId?: string | null;
		repositoryName: string;
		nextToken?: string | null;
		maxResults?: number | null;

		/** An object representing a filter on a <a>ListImages</a> operation. */
		filter?: ListImagesFilter;
	}
	export interface ListImagesRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListImagesRequestFormGroup() {
		return new FormGroup<ListImagesRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object representing a filter on a <a>ListImages</a> operation. */
	export interface ListImagesFilter {
		tagStatus?: DescribeImagesFilterTagStatus | null;
	}

	/** An object representing a filter on a <a>ListImages</a> operation. */
	export interface ListImagesFilterFormProperties {
		tagStatus: FormControl<DescribeImagesFilterTagStatus | null | undefined>,
	}
	export function CreateListImagesFilterFormGroup() {
		return new FormGroup<ListImagesFilterFormProperties>({
			tagStatus: new FormControl<DescribeImagesFilterTagStatus | null | undefined>(undefined),
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
		resourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutImageResponse {

		/** An object representing an Amazon ECR image. */
		image?: Image;
	}
	export interface PutImageResponseFormProperties {
	}
	export function CreatePutImageResponseFormGroup() {
		return new FormGroup<PutImageResponseFormProperties>({
		});

	}

	export interface PutImageRequest {
		registryId?: string | null;
		repositoryName: string;
		imageManifest: string;
		imageManifestMediaType?: string | null;
		imageTag?: string | null;
	}
	export interface PutImageRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		imageManifest: FormControl<string | null | undefined>,
		imageManifestMediaType: FormControl<string | null | undefined>,
		imageTag: FormControl<string | null | undefined>,
	}
	export function CreatePutImageRequestFormGroup() {
		return new FormGroup<PutImageRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			imageManifest: new FormControl<string | null | undefined>(undefined),
			imageManifestMediaType: new FormControl<string | null | undefined>(undefined),
			imageTag: new FormControl<string | null | undefined>(undefined),
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

	export interface PutImageScanningConfigurationResponse {
		registryId?: string | null;
		repositoryName?: string | null;

		/** The image scanning configuration for a repository. */
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
		registryId?: string | null;
		repositoryName: string;

		/**
		 * The image scanning configuration for a repository.
		 * Required
		 */
		imageScanningConfiguration: ImageScanningConfiguration;
	}
	export interface PutImageScanningConfigurationRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreatePutImageScanningConfigurationRequestFormGroup() {
		return new FormGroup<PutImageScanningConfigurationRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutImageTagMutabilityResponse {
		registryId?: string | null;
		repositoryName?: string | null;
		imageTagMutability?: RepositoryImageTagMutability | null;
	}
	export interface PutImageTagMutabilityResponseFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		imageTagMutability: FormControl<RepositoryImageTagMutability | null | undefined>,
	}
	export function CreatePutImageTagMutabilityResponseFormGroup() {
		return new FormGroup<PutImageTagMutabilityResponseFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			imageTagMutability: new FormControl<RepositoryImageTagMutability | null | undefined>(undefined),
		});

	}

	export interface PutImageTagMutabilityRequest {
		registryId?: string | null;
		repositoryName: string;
		imageTagMutability: RepositoryImageTagMutability;
	}
	export interface PutImageTagMutabilityRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		imageTagMutability: FormControl<RepositoryImageTagMutability | null | undefined>,
	}
	export function CreatePutImageTagMutabilityRequestFormGroup() {
		return new FormGroup<PutImageTagMutabilityRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			imageTagMutability: new FormControl<RepositoryImageTagMutability | null | undefined>(undefined),
		});

	}

	export interface PutLifecyclePolicyResponse {
		registryId?: string | null;
		repositoryName?: string | null;
		lifecyclePolicyText?: string | null;
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
		registryId?: string | null;
		repositoryName: string;
		lifecyclePolicyText: string;
	}
	export interface PutLifecyclePolicyRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		lifecyclePolicyText: FormControl<string | null | undefined>,
	}
	export function CreatePutLifecyclePolicyRequestFormGroup() {
		return new FormGroup<PutLifecyclePolicyRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			lifecyclePolicyText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetRepositoryPolicyResponse {
		registryId?: string | null;
		repositoryName?: string | null;
		policyText?: string | null;
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
		registryId?: string | null;
		repositoryName: string;
		policyText: string;
		force?: boolean | null;
	}
	export interface SetRepositoryPolicyRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		policyText: FormControl<string | null | undefined>,
		force: FormControl<boolean | null | undefined>,
	}
	export function CreateSetRepositoryPolicyRequestFormGroup() {
		return new FormGroup<SetRepositoryPolicyRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			policyText: new FormControl<string | null | undefined>(undefined),
			force: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StartImageScanResponse {
		registryId?: string | null;
		repositoryName?: string | null;

		/** An object with identifying information for an Amazon ECR image. */
		imageId?: ImageIdentifier;

		/** The current status of an image scan. */
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
		registryId?: string | null;
		repositoryName: string;

		/**
		 * An object with identifying information for an Amazon ECR image.
		 * Required
		 */
		imageId: ImageIdentifier;
	}
	export interface StartImageScanRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateStartImageScanRequestFormGroup() {
		return new FormGroup<StartImageScanRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
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
		registryId?: string | null;
		repositoryName?: string | null;
		lifecyclePolicyText?: string | null;
		status?: GetLifecyclePolicyPreviewResponseStatus | null;
	}
	export interface StartLifecyclePolicyPreviewResponseFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		lifecyclePolicyText: FormControl<string | null | undefined>,
		status: FormControl<GetLifecyclePolicyPreviewResponseStatus | null | undefined>,
	}
	export function CreateStartLifecyclePolicyPreviewResponseFormGroup() {
		return new FormGroup<StartLifecyclePolicyPreviewResponseFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			lifecyclePolicyText: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GetLifecyclePolicyPreviewResponseStatus | null | undefined>(undefined),
		});

	}

	export interface StartLifecyclePolicyPreviewRequest {
		registryId?: string | null;
		repositoryName: string;
		lifecyclePolicyText?: string | null;
	}
	export interface StartLifecyclePolicyPreviewRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		lifecyclePolicyText: FormControl<string | null | undefined>,
	}
	export function CreateStartLifecyclePolicyPreviewRequestFormGroup() {
		return new FormGroup<StartLifecyclePolicyPreviewRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
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
		resourceArn: string;
		tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
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
		resourceArn: string;
		tagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UploadLayerPartResponse {
		registryId?: string | null;
		repositoryName?: string | null;
		uploadId?: string | null;
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
		registryId?: string | null;
		repositoryName: string;
		uploadId: string;
		partFirstByte: number;
		partLastByte: number;
		layerPartBlob: string;
	}
	export interface UploadLayerPartRequestFormProperties {
		registryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		uploadId: FormControl<string | null | undefined>,
		partFirstByte: FormControl<number | null | undefined>,
		partLastByte: FormControl<number | null | undefined>,
		layerPartBlob: FormControl<string | null | undefined>,
	}
	export function CreateUploadLayerPartRequestFormGroup() {
		return new FormGroup<UploadLayerPartRequestFormProperties>({
			registryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			uploadId: new FormControl<string | null | undefined>(undefined),
			partFirstByte: new FormControl<number | null | undefined>(undefined),
			partLastByte: new FormControl<number | null | undefined>(undefined),
			layerPartBlob: new FormControl<string | null | undefined>(undefined),
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

	export enum ImageTagMutability { MUTABLE = 0, IMMUTABLE = 1 }

	export enum TagStatus { TAGGED = 0, UNTAGGED = 1, ANY = 2 }

	export enum FindingSeverity { INFORMATIONAL = 0, LOW = 1, MEDIUM = 2, HIGH = 3, CRITICAL = 4, UNDEFINED = 5 }

	export enum LifecyclePolicyPreviewStatus { IN_PROGRESS = 0, COMPLETE = 1, EXPIRED = 2, FAILED = 3 }

	export enum ImageActionType { EXPIRE = 0 }

	export enum ImageFailureCode { InvalidImageDigest = 0, InvalidImageTag = 1, ImageTagDoesNotMatchDigest = 2, ImageNotFound = 3, MissingDigestAndTag = 4, ImageReferencedByManifestList = 5 }

	export enum ScanStatus { IN_PROGRESS = 0, COMPLETE = 1, FAILED = 2 }

	export enum LayerAvailability { AVAILABLE = 0, UNAVAILABLE = 1 }

	export enum LayerFailureCode { InvalidLayerDigest = 0, MissingLayerDigest = 1 }

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
		 * <p>Informs Amazon ECR that the image layer upload has completed for a specified registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once per each new image layer to verify that the upload has completed.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload
		 * @return {CompleteLayerUploadResponse} Success
		 */
		CompleteLayerUpload(requestBody: CompleteLayerUploadRequest): Observable<CompleteLayerUploadResponse> {
			return this.http.post<CompleteLayerUploadResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR Repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
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
		 * <p>Retrieves an authorization token. An authorization token represents your IAM authentication credentials and can be used to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours.</p> <p>The <code>authorizationToken</code> returned is a base64 encoded string that can be decoded and used in a <code>docker login</code> command to authenticate to a registry. The AWS CLI offers an <code>get-login-password</code> command that simplifies the login process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html#registry_auth">Registry Authentication</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
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
		 * Updates the image scanning configuration for the specified repository.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration
		 * @return {PutImageScanningConfigurationResponse} Success
		 */
		PutImageScanningConfiguration(requestBody: PutImageScanningConfigurationRequest): Observable<PutImageScanningConfigurationResponse> {
			return this.http.post<PutImageScanningConfigurationResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the image tag mutability settings for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html">Image Tag Mutability</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability
		 * @return {PutImageTagMutabilityResponse} Success
		 */
		PutImageTagMutability(requestBody: PutImageTagMutabilityRequest): Observable<PutImageTagMutabilityResponse> {
			return this.http.post<PutImageTagMutabilityResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates the lifecycle policy for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html">Lifecycle Policy Template</a>.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy
		 * @return {PutLifecyclePolicyResponse} Success
		 */
		PutLifecyclePolicy(requestBody: PutLifecyclePolicyRequest): Observable<PutLifecyclePolicyResponse> {
			return this.http.post<PutLifecyclePolicyResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Applies a repository policy to the specified repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository Policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
		 * Post #X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy
		 * @return {SetRepositoryPolicyResponse} Success
		 */
		SetRepositoryPolicy(requestBody: SetRepositoryPolicyRequest): Observable<SetRepositoryPolicyResponse> {
			return this.http.post<SetRepositoryPolicyResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an image vulnerability scan. An image scan can only be started once per day on an individual image. This limit includes if an image was scanned on initial push. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html">Image Scanning</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
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

	export enum BatchCheckLayerAvailabilityX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_BatchCheckLayerAvailability = 0 }

	export enum BatchDeleteImageX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_BatchDeleteImage = 0 }

	export enum BatchGetImageX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_BatchGetImage = 0 }

	export enum CompleteLayerUploadX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_CompleteLayerUpload = 0 }

	export enum CreateRepositoryX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_CreateRepository = 0 }

	export enum DeleteLifecyclePolicyX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_DeleteLifecyclePolicy = 0 }

	export enum DeleteRepositoryX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_DeleteRepository = 0 }

	export enum DeleteRepositoryPolicyX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_DeleteRepositoryPolicy = 0 }

	export enum DescribeImageScanFindingsX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_DescribeImageScanFindings = 0 }

	export enum DescribeImagesX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_DescribeImages = 0 }

	export enum DescribeRepositoriesX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_DescribeRepositories = 0 }

	export enum GetAuthorizationTokenX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_GetAuthorizationToken = 0 }

	export enum GetDownloadUrlForLayerX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_GetDownloadUrlForLayer = 0 }

	export enum GetLifecyclePolicyX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_GetLifecyclePolicy = 0 }

	export enum GetLifecyclePolicyPreviewX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_GetLifecyclePolicyPreview = 0 }

	export enum GetRepositoryPolicyX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_GetRepositoryPolicy = 0 }

	export enum InitiateLayerUploadX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_InitiateLayerUpload = 0 }

	export enum ListImagesX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_ListImages = 0 }

	export enum ListTagsForResourceX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_ListTagsForResource = 0 }

	export enum PutImageX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_PutImage = 0 }

	export enum PutImageScanningConfigurationX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_PutImageScanningConfiguration = 0 }

	export enum PutImageTagMutabilityX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_PutImageTagMutability = 0 }

	export enum PutLifecyclePolicyX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_PutLifecyclePolicy = 0 }

	export enum SetRepositoryPolicyX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_SetRepositoryPolicy = 0 }

	export enum StartImageScanX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_StartImageScan = 0 }

	export enum StartLifecyclePolicyPreviewX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_StartLifecyclePolicyPreview = 0 }

	export enum TagResourceX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_UntagResource = 0 }

	export enum UploadLayerPartX_Amz_Target { AmazonEC2ContainerRegistry_V20150921_UploadLayerPart = 0 }

}

