import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Bounding box that defines a region of an image. */
	export interface BoundingBox {

		/**
		 * Height.
		 * Required
		 */
		height: number;

		/**
		 * Coordinate of the left boundary.
		 * Required
		 */
		left: number;

		/**
		 * Coordinate of the top boundary.
		 * Required
		 */
		top: number;

		/**
		 * Width.
		 * Required
		 */
		width: number;
	}

	/** Bounding box that defines a region of an image. */
	export interface BoundingBoxFormProperties {

		/**
		 * Height.
		 * Required
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Coordinate of the left boundary.
		 * Required
		 */
		left: FormControl<number | null | undefined>,

		/**
		 * Coordinate of the top boundary.
		 * Required
		 */
		top: FormControl<number | null | undefined>,

		/**
		 * Width.
		 * Required
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateBoundingBoxFormGroup() {
		return new FormGroup<BoundingBoxFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			left: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			top: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CustomVisionError {

		/**
		 * The error code.
		 * Required
		 */
		code: CustomVisionErrorCode;

		/**
		 * A message explaining the error reported by the service.
		 * Required
		 */
		message: string;
	}
	export interface CustomVisionErrorFormProperties {

		/**
		 * The error code.
		 * Required
		 */
		code: FormControl<CustomVisionErrorCode | null | undefined>,

		/**
		 * A message explaining the error reported by the service.
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateCustomVisionErrorFormGroup() {
		return new FormGroup<CustomVisionErrorFormProperties>({
			code: new FormControl<CustomVisionErrorCode | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CustomVisionErrorCode { NoError = 'NoError', BadRequest = 'BadRequest', BadRequestExceededBatchSize = 'BadRequestExceededBatchSize', BadRequestNotSupported = 'BadRequestNotSupported', BadRequestInvalidIds = 'BadRequestInvalidIds', BadRequestProjectName = 'BadRequestProjectName', BadRequestProjectNameNotUnique = 'BadRequestProjectNameNotUnique', BadRequestProjectDescription = 'BadRequestProjectDescription', BadRequestProjectUnknownDomain = 'BadRequestProjectUnknownDomain', BadRequestProjectUnknownClassification = 'BadRequestProjectUnknownClassification', BadRequestProjectUnsupportedDomainTypeChange = 'BadRequestProjectUnsupportedDomainTypeChange', BadRequestProjectUnsupportedExportPlatform = 'BadRequestProjectUnsupportedExportPlatform', BadRequestProjectImagePreprocessingSettings = 'BadRequestProjectImagePreprocessingSettings', BadRequestProjectDuplicated = 'BadRequestProjectDuplicated', BadRequestIterationName = 'BadRequestIterationName', BadRequestIterationNameNotUnique = 'BadRequestIterationNameNotUnique', BadRequestIterationDescription = 'BadRequestIterationDescription', BadRequestIterationIsNotTrained = 'BadRequestIterationIsNotTrained', BadRequestIterationValidationFailed = 'BadRequestIterationValidationFailed', BadRequestWorkspaceCannotBeModified = 'BadRequestWorkspaceCannotBeModified', BadRequestWorkspaceNotDeletable = 'BadRequestWorkspaceNotDeletable', BadRequestTagName = 'BadRequestTagName', BadRequestTagNameNotUnique = 'BadRequestTagNameNotUnique', BadRequestTagDescription = 'BadRequestTagDescription', BadRequestTagType = 'BadRequestTagType', BadRequestMultipleNegativeTag = 'BadRequestMultipleNegativeTag', BadRequestImageTags = 'BadRequestImageTags', BadRequestImageRegions = 'BadRequestImageRegions', BadRequestNegativeAndRegularTagOnSameImage = 'BadRequestNegativeAndRegularTagOnSameImage', BadRequestRequiredParamIsNull = 'BadRequestRequiredParamIsNull', BadRequestIterationIsPublished = 'BadRequestIterationIsPublished', BadRequestInvalidPublishName = 'BadRequestInvalidPublishName', BadRequestInvalidPublishTarget = 'BadRequestInvalidPublishTarget', BadRequestUnpublishFailed = 'BadRequestUnpublishFailed', BadRequestIterationNotPublished = 'BadRequestIterationNotPublished', BadRequestSubscriptionApi = 'BadRequestSubscriptionApi', BadRequestExceedProjectLimit = 'BadRequestExceedProjectLimit', BadRequestExceedIterationPerProjectLimit = 'BadRequestExceedIterationPerProjectLimit', BadRequestExceedTagPerProjectLimit = 'BadRequestExceedTagPerProjectLimit', BadRequestExceedTagPerImageLimit = 'BadRequestExceedTagPerImageLimit', BadRequestExceededQuota = 'BadRequestExceededQuota', BadRequestCannotMigrateProjectWithName = 'BadRequestCannotMigrateProjectWithName', BadRequestNotLimitedTrial = 'BadRequestNotLimitedTrial', BadRequestImageBatch = 'BadRequestImageBatch', BadRequestImageStream = 'BadRequestImageStream', BadRequestImageUrl = 'BadRequestImageUrl', BadRequestImageFormat = 'BadRequestImageFormat', BadRequestImageSizeBytes = 'BadRequestImageSizeBytes', BadRequestImageExceededCount = 'BadRequestImageExceededCount', BadRequestTrainingNotNeeded = 'BadRequestTrainingNotNeeded', BadRequestTrainingNotNeededButTrainingPipelineUpdated = 'BadRequestTrainingNotNeededButTrainingPipelineUpdated', BadRequestTrainingValidationFailed = 'BadRequestTrainingValidationFailed', BadRequestClassificationTrainingValidationFailed = 'BadRequestClassificationTrainingValidationFailed', BadRequestMultiClassClassificationTrainingValidationFailed = 'BadRequestMultiClassClassificationTrainingValidationFailed', BadRequestMultiLabelClassificationTrainingValidationFailed = 'BadRequestMultiLabelClassificationTrainingValidationFailed', BadRequestDetectionTrainingValidationFailed = 'BadRequestDetectionTrainingValidationFailed', BadRequestTrainingAlreadyInProgress = 'BadRequestTrainingAlreadyInProgress', BadRequestDetectionTrainingNotAllowNegativeTag = 'BadRequestDetectionTrainingNotAllowNegativeTag', BadRequestInvalidEmailAddress = 'BadRequestInvalidEmailAddress', BadRequestDomainNotSupportedForAdvancedTraining = 'BadRequestDomainNotSupportedForAdvancedTraining', BadRequestExportPlatformNotSupportedForAdvancedTraining = 'BadRequestExportPlatformNotSupportedForAdvancedTraining', BadRequestReservedBudgetInHoursNotEnoughForAdvancedTraining = 'BadRequestReservedBudgetInHoursNotEnoughForAdvancedTraining', BadRequestExportValidationFailed = 'BadRequestExportValidationFailed', BadRequestExportAlreadyInProgress = 'BadRequestExportAlreadyInProgress', BadRequestPredictionIdsMissing = 'BadRequestPredictionIdsMissing', BadRequestPredictionIdsExceededCount = 'BadRequestPredictionIdsExceededCount', BadRequestPredictionTagsExceededCount = 'BadRequestPredictionTagsExceededCount', BadRequestPredictionResultsExceededCount = 'BadRequestPredictionResultsExceededCount', BadRequestPredictionInvalidApplicationName = 'BadRequestPredictionInvalidApplicationName', BadRequestPredictionInvalidQueryParameters = 'BadRequestPredictionInvalidQueryParameters', BadRequestInvalidImportToken = 'BadRequestInvalidImportToken', BadRequestExportWhileTraining = 'BadRequestExportWhileTraining', BadRequestInvalid = 'BadRequestInvalid', UnsupportedMediaType = 'UnsupportedMediaType', Forbidden = 'Forbidden', ForbiddenUser = 'ForbiddenUser', ForbiddenUserResource = 'ForbiddenUserResource', ForbiddenUserSignupDisabled = 'ForbiddenUserSignupDisabled', ForbiddenUserSignupAllowanceExceeded = 'ForbiddenUserSignupAllowanceExceeded', ForbiddenUserDoesNotExist = 'ForbiddenUserDoesNotExist', ForbiddenUserDisabled = 'ForbiddenUserDisabled', ForbiddenUserInsufficientCapability = 'ForbiddenUserInsufficientCapability', ForbiddenDRModeEnabled = 'ForbiddenDRModeEnabled', ForbiddenInvalid = 'ForbiddenInvalid', NotFound = 'NotFound', NotFoundProject = 'NotFoundProject', NotFoundProjectDefaultIteration = 'NotFoundProjectDefaultIteration', NotFoundIteration = 'NotFoundIteration', NotFoundIterationPerformance = 'NotFoundIterationPerformance', NotFoundTag = 'NotFoundTag', NotFoundImage = 'NotFoundImage', NotFoundDomain = 'NotFoundDomain', NotFoundApimSubscription = 'NotFoundApimSubscription', NotFoundInvalid = 'NotFoundInvalid', Conflict = 'Conflict', ConflictInvalid = 'ConflictInvalid', ErrorUnknown = 'ErrorUnknown', ErrorIterationCopyFailed = 'ErrorIterationCopyFailed', ErrorPreparePerformanceMigrationFailed = 'ErrorPreparePerformanceMigrationFailed', ErrorProjectInvalidWorkspace = 'ErrorProjectInvalidWorkspace', ErrorProjectInvalidPipelineConfiguration = 'ErrorProjectInvalidPipelineConfiguration', ErrorProjectInvalidDomain = 'ErrorProjectInvalidDomain', ErrorProjectTrainingRequestFailed = 'ErrorProjectTrainingRequestFailed', ErrorProjectImportRequestFailed = 'ErrorProjectImportRequestFailed', ErrorProjectExportRequestFailed = 'ErrorProjectExportRequestFailed', ErrorFeaturizationServiceUnavailable = 'ErrorFeaturizationServiceUnavailable', ErrorFeaturizationQueueTimeout = 'ErrorFeaturizationQueueTimeout', ErrorFeaturizationInvalidFeaturizer = 'ErrorFeaturizationInvalidFeaturizer', ErrorFeaturizationAugmentationUnavailable = 'ErrorFeaturizationAugmentationUnavailable', ErrorFeaturizationUnrecognizedJob = 'ErrorFeaturizationUnrecognizedJob', ErrorFeaturizationAugmentationError = 'ErrorFeaturizationAugmentationError', ErrorExporterInvalidPlatform = 'ErrorExporterInvalidPlatform', ErrorExporterInvalidFeaturizer = 'ErrorExporterInvalidFeaturizer', ErrorExporterInvalidClassifier = 'ErrorExporterInvalidClassifier', ErrorPredictionServiceUnavailable = 'ErrorPredictionServiceUnavailable', ErrorPredictionModelNotFound = 'ErrorPredictionModelNotFound', ErrorPredictionModelNotCached = 'ErrorPredictionModelNotCached', ErrorPrediction = 'ErrorPrediction', ErrorPredictionStorage = 'ErrorPredictionStorage', ErrorRegionProposal = 'ErrorRegionProposal', ErrorInvalid = 'ErrorInvalid' }

	export interface Domain {
		enabled?: boolean | null;
		exportable?: boolean | null;
		id?: string | null;
		name?: string | null;
		type?: DomainType | null;
	}
	export interface DomainFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		exportable: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<DomainType | null | undefined>,
	}
	export function CreateDomainFormGroup() {
		return new FormGroup<DomainFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			exportable: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DomainType | null | undefined>(undefined),
		});

	}

	export enum DomainType { Classification = 'Classification', ObjectDetection = 'ObjectDetection' }

	export interface Export {

		/** URI used to download the model. */
		downloadUri?: string | null;

		/**
		 * Flavor of the export. These are specializations of the export platform.
		 * Docker platform has valid flavors: Linux, Windows, ARM.
		 * Tensorflow platform has valid flavors: TensorFlowNormal, TensorFlowLite.
		 * ONNX platform has valid flavors: ONNX10, ONNX12.
		 */
		flavor?: ExportFlavor | null;

		/** Indicates an updated version of the export package is available and should be re-exported for the latest changes. */
		newerVersionAvailable?: boolean | null;

		/** Platform of the export. */
		platform?: ExportPlatform | null;

		/** Status of the export. */
		status?: ExportStatus | null;
	}
	export interface ExportFormProperties {

		/** URI used to download the model. */
		downloadUri: FormControl<string | null | undefined>,

		/**
		 * Flavor of the export. These are specializations of the export platform.
		 * Docker platform has valid flavors: Linux, Windows, ARM.
		 * Tensorflow platform has valid flavors: TensorFlowNormal, TensorFlowLite.
		 * ONNX platform has valid flavors: ONNX10, ONNX12.
		 */
		flavor: FormControl<ExportFlavor | null | undefined>,

		/** Indicates an updated version of the export package is available and should be re-exported for the latest changes. */
		newerVersionAvailable: FormControl<boolean | null | undefined>,

		/** Platform of the export. */
		platform: FormControl<ExportPlatform | null | undefined>,

		/** Status of the export. */
		status: FormControl<ExportStatus | null | undefined>,
	}
	export function CreateExportFormGroup() {
		return new FormGroup<ExportFormProperties>({
			downloadUri: new FormControl<string | null | undefined>(undefined),
			flavor: new FormControl<ExportFlavor | null | undefined>(undefined),
			newerVersionAvailable: new FormControl<boolean | null | undefined>(undefined),
			platform: new FormControl<ExportPlatform | null | undefined>(undefined),
			status: new FormControl<ExportStatus | null | undefined>(undefined),
		});

	}

	export enum ExportFlavor { Linux = 'Linux', Windows = 'Windows', ONNX10 = 'ONNX10', ONNX12 = 'ONNX12', ARM = 'ARM', TensorFlowNormal = 'TensorFlowNormal', TensorFlowLite = 'TensorFlowLite' }

	export enum ExportPlatform { CoreML = 'CoreML', TensorFlow = 'TensorFlow', DockerFile = 'DockerFile', ONNX = 'ONNX', VAIDK = 'VAIDK' }

	export enum ExportStatus { Exporting = 'Exporting', Failed = 'Failed', Done = 'Done' }


	/** Image model to be sent as JSON. */
	export interface Image {

		/** Date the image was created. */
		created?: Date | null;

		/** Height of the image. */
		height?: number | null;

		/** Id of the image. */
		id?: string | null;

		/** The URI to the original uploaded image. */
		originalImageUri?: string | null;

		/** Regions associated with this image. */
		regions?: Array<ImageRegion>;

		/** The URI to the (resized) image used for training. */
		resizedImageUri?: string | null;

		/** Tags associated with this image. */
		tags?: Array<ImageTag>;

		/** The URI to the thumbnail of the original image. */
		thumbnailUri?: string | null;

		/** Width of the image. */
		width?: number | null;
	}

	/** Image model to be sent as JSON. */
	export interface ImageFormProperties {

		/** Date the image was created. */
		created: FormControl<Date | null | undefined>,

		/** Height of the image. */
		height: FormControl<number | null | undefined>,

		/** Id of the image. */
		id: FormControl<string | null | undefined>,

		/** The URI to the original uploaded image. */
		originalImageUri: FormControl<string | null | undefined>,

		/** The URI to the (resized) image used for training. */
		resizedImageUri: FormControl<string | null | undefined>,

		/** The URI to the thumbnail of the original image. */
		thumbnailUri: FormControl<string | null | undefined>,

		/** Width of the image. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			originalImageUri: new FormControl<string | null | undefined>(undefined),
			resizedImageUri: new FormControl<string | null | undefined>(undefined),
			thumbnailUri: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ImageRegion {
		created?: Date | null;

		/**
		 * Height.
		 * Required
		 */
		height: number;

		/**
		 * Coordinate of the left boundary.
		 * Required
		 */
		left: number;
		regionId?: string | null;

		/**
		 * Id of the tag associated with this region.
		 * Required
		 */
		tagId: string;
		tagName?: string | null;

		/**
		 * Coordinate of the top boundary.
		 * Required
		 */
		top: number;

		/**
		 * Width.
		 * Required
		 */
		width: number;
	}
	export interface ImageRegionFormProperties {
		created: FormControl<Date | null | undefined>,

		/**
		 * Height.
		 * Required
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Coordinate of the left boundary.
		 * Required
		 */
		left: FormControl<number | null | undefined>,
		regionId: FormControl<string | null | undefined>,

		/**
		 * Id of the tag associated with this region.
		 * Required
		 */
		tagId: FormControl<string | null | undefined>,
		tagName: FormControl<string | null | undefined>,

		/**
		 * Coordinate of the top boundary.
		 * Required
		 */
		top: FormControl<number | null | undefined>,

		/**
		 * Width.
		 * Required
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateImageRegionFormGroup() {
		return new FormGroup<ImageRegionFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			left: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			regionId: new FormControl<string | null | undefined>(undefined),
			tagId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tagName: new FormControl<string | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImageTag {
		created?: Date | null;
		tagId?: string | null;
		tagName?: string | null;
	}
	export interface ImageTagFormProperties {
		created: FormControl<Date | null | undefined>,
		tagId: FormControl<string | null | undefined>,
		tagName: FormControl<string | null | undefined>,
	}
	export function CreateImageTagFormGroup() {
		return new FormGroup<ImageTagFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			tagId: new FormControl<string | null | undefined>(undefined),
			tagName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImageCreateResult {

		/** Image model to be sent as JSON. */
		image?: Image;

		/** Source URL of the image. */
		sourceUrl?: string | null;

		/** Status of the image creation. */
		status?: ImageCreateResultStatus | null;
	}
	export interface ImageCreateResultFormProperties {

		/** Source URL of the image. */
		sourceUrl: FormControl<string | null | undefined>,

		/** Status of the image creation. */
		status: FormControl<ImageCreateResultStatus | null | undefined>,
	}
	export function CreateImageCreateResultFormGroup() {
		return new FormGroup<ImageCreateResultFormProperties>({
			sourceUrl: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ImageCreateResultStatus | null | undefined>(undefined),
		});

	}

	export enum ImageCreateResultStatus { OK = 'OK', OKDuplicate = 'OKDuplicate', ErrorSource = 'ErrorSource', ErrorImageFormat = 'ErrorImageFormat', ErrorImageSize = 'ErrorImageSize', ErrorStorage = 'ErrorStorage', ErrorLimitExceed = 'ErrorLimitExceed', ErrorTagLimitExceed = 'ErrorTagLimitExceed', ErrorRegionLimitExceed = 'ErrorRegionLimitExceed', ErrorUnknown = 'ErrorUnknown', ErrorNegativeAndRegularTagOnSameImage = 'ErrorNegativeAndRegularTagOnSameImage' }

	export interface ImageCreateSummary {

		/** List of the image creation results. */
		images?: Array<ImageCreateResult>;

		/** True if all of the images in the batch were created successfully, otherwise false. */
		isBatchSuccessful?: boolean | null;
	}
	export interface ImageCreateSummaryFormProperties {

		/** True if all of the images in the batch were created successfully, otherwise false. */
		isBatchSuccessful: FormControl<boolean | null | undefined>,
	}
	export function CreateImageCreateSummaryFormGroup() {
		return new FormGroup<ImageCreateSummaryFormProperties>({
			isBatchSuccessful: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ImageFileCreateBatch {
		images?: Array<ImageFileCreateEntry>;
		tagIds?: Array<string>;
	}
	export interface ImageFileCreateBatchFormProperties {
	}
	export function CreateImageFileCreateBatchFormGroup() {
		return new FormGroup<ImageFileCreateBatchFormProperties>({
		});

	}

	export interface ImageFileCreateEntry {
		contents?: string | null;
		name?: string | null;
		regions?: Array<Region>;
		tagIds?: Array<string>;
	}
	export interface ImageFileCreateEntryFormProperties {
		contents: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateImageFileCreateEntryFormGroup() {
		return new FormGroup<ImageFileCreateEntryFormProperties>({
			contents: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Region {

		/**
		 * Height.
		 * Required
		 */
		height: number;

		/**
		 * Coordinate of the left boundary.
		 * Required
		 */
		left: number;

		/**
		 * Id of the tag associated with this region.
		 * Required
		 */
		tagId: string;

		/**
		 * Coordinate of the top boundary.
		 * Required
		 */
		top: number;

		/**
		 * Width.
		 * Required
		 */
		width: number;
	}
	export interface RegionFormProperties {

		/**
		 * Height.
		 * Required
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Coordinate of the left boundary.
		 * Required
		 */
		left: FormControl<number | null | undefined>,

		/**
		 * Id of the tag associated with this region.
		 * Required
		 */
		tagId: FormControl<string | null | undefined>,

		/**
		 * Coordinate of the top boundary.
		 * Required
		 */
		top: FormControl<number | null | undefined>,

		/**
		 * Width.
		 * Required
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateRegionFormGroup() {
		return new FormGroup<RegionFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			left: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			tagId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			top: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImageIdCreateBatch {
		images?: Array<ImageIdCreateEntry>;
		tagIds?: Array<string>;
	}
	export interface ImageIdCreateBatchFormProperties {
	}
	export function CreateImageIdCreateBatchFormGroup() {
		return new FormGroup<ImageIdCreateBatchFormProperties>({
		});

	}

	export interface ImageIdCreateEntry {

		/** Id of the image. */
		id?: string | null;
		regions?: Array<Region>;
		tagIds?: Array<string>;
	}
	export interface ImageIdCreateEntryFormProperties {

		/** Id of the image. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateImageIdCreateEntryFormGroup() {
		return new FormGroup<ImageIdCreateEntryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Image performance model. */
	export interface ImagePerformance {
		created?: Date | null;
		height?: number | null;
		id?: string | null;
		imageUri?: string | null;
		predictions?: Array<Prediction>;
		regions?: Array<ImageRegion>;
		tags?: Array<ImageTag>;
		thumbnailUri?: string | null;
		width?: number | null;
	}

	/** Image performance model. */
	export interface ImagePerformanceFormProperties {
		created: FormControl<Date | null | undefined>,
		height: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		imageUri: FormControl<string | null | undefined>,
		thumbnailUri: FormControl<string | null | undefined>,
		width: FormControl<number | null | undefined>,
	}
	export function CreateImagePerformanceFormGroup() {
		return new FormGroup<ImagePerformanceFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			imageUri: new FormControl<string | null | undefined>(undefined),
			thumbnailUri: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Prediction result. */
	export interface Prediction {

		/** Bounding box that defines a region of an image. */
		boundingBox?: BoundingBox;

		/** Probability of the tag. */
		probability?: number | null;

		/** Id of the predicted tag. */
		tagId?: string | null;

		/** Name of the predicted tag. */
		tagName?: string | null;
	}

	/** Prediction result. */
	export interface PredictionFormProperties {

		/** Probability of the tag. */
		probability: FormControl<number | null | undefined>,

		/** Id of the predicted tag. */
		tagId: FormControl<string | null | undefined>,

		/** Name of the predicted tag. */
		tagName: FormControl<string | null | undefined>,
	}
	export function CreatePredictionFormGroup() {
		return new FormGroup<PredictionFormProperties>({
			probability: new FormControl<number | null | undefined>(undefined),
			tagId: new FormControl<string | null | undefined>(undefined),
			tagName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of an image prediction request. */
	export interface ImagePrediction {

		/** Date this prediction was created. */
		created?: Date | null;

		/** Prediction Id. */
		id?: string | null;

		/** Iteration Id. */
		iteration?: string | null;

		/** List of predictions. */
		predictions?: Array<Prediction>;

		/** Project Id. */
		project?: string | null;
	}

	/** Result of an image prediction request. */
	export interface ImagePredictionFormProperties {

		/** Date this prediction was created. */
		created: FormControl<Date | null | undefined>,

		/** Prediction Id. */
		id: FormControl<string | null | undefined>,

		/** Iteration Id. */
		iteration: FormControl<string | null | undefined>,

		/** Project Id. */
		project: FormControl<string | null | undefined>,
	}
	export function CreateImagePredictionFormGroup() {
		return new FormGroup<ImagePredictionFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			iteration: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents image preprocessing settings used by image augmentation. */
	export interface ImageProcessingSettings {

		/**
		 * Gets or sets enabled image transforms. The key corresponds to the transform name. If value is set to true, then correspondent transform is enabled. Otherwise this transform will not be used.
		 * Augmentation will be uniformly distributed among enabled transforms.
		 */
		augmentationMethods?: {[id: string]: boolean };
	}

	/** Represents image preprocessing settings used by image augmentation. */
	export interface ImageProcessingSettingsFormProperties {

		/**
		 * Gets or sets enabled image transforms. The key corresponds to the transform name. If value is set to true, then correspondent transform is enabled. Otherwise this transform will not be used.
		 * Augmentation will be uniformly distributed among enabled transforms.
		 */
		augmentationMethods: FormControl<{[id: string]: boolean } | null | undefined>,
	}
	export function CreateImageProcessingSettingsFormGroup() {
		return new FormGroup<ImageProcessingSettingsFormProperties>({
			augmentationMethods: new FormControl<{[id: string]: boolean } | null | undefined>(undefined),
		});

	}


	/** Batch of image region information to create. */
	export interface ImageRegionCreateBatch {
		regions?: Array<ImageRegionCreateEntry>;
	}

	/** Batch of image region information to create. */
	export interface ImageRegionCreateBatchFormProperties {
	}
	export function CreateImageRegionCreateBatchFormGroup() {
		return new FormGroup<ImageRegionCreateBatchFormProperties>({
		});

	}


	/** Entry associating a region to an image. */
	export interface ImageRegionCreateEntry {

		/**
		 * Height.
		 * Required
		 */
		height: number;

		/**
		 * Id of the image.
		 * Required
		 */
		imageId: string;

		/**
		 * Coordinate of the left boundary.
		 * Required
		 */
		left: number;

		/**
		 * Id of the tag associated with this region.
		 * Required
		 */
		tagId: string;

		/**
		 * Coordinate of the top boundary.
		 * Required
		 */
		top: number;

		/**
		 * Width.
		 * Required
		 */
		width: number;
	}

	/** Entry associating a region to an image. */
	export interface ImageRegionCreateEntryFormProperties {

		/**
		 * Height.
		 * Required
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Id of the image.
		 * Required
		 */
		imageId: FormControl<string | null | undefined>,

		/**
		 * Coordinate of the left boundary.
		 * Required
		 */
		left: FormControl<number | null | undefined>,

		/**
		 * Id of the tag associated with this region.
		 * Required
		 */
		tagId: FormControl<string | null | undefined>,

		/**
		 * Coordinate of the top boundary.
		 * Required
		 */
		top: FormControl<number | null | undefined>,

		/**
		 * Width.
		 * Required
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateImageRegionCreateEntryFormGroup() {
		return new FormGroup<ImageRegionCreateEntryFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			imageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			left: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			tagId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			top: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImageRegionCreateResult {
		created?: Date | null;

		/**
		 * Height.
		 * Required
		 */
		height: number;
		imageId?: string | null;

		/**
		 * Coordinate of the left boundary.
		 * Required
		 */
		left: number;
		regionId?: string | null;

		/**
		 * Id of the tag associated with this region.
		 * Required
		 */
		tagId: string;
		tagName?: string | null;

		/**
		 * Coordinate of the top boundary.
		 * Required
		 */
		top: number;

		/**
		 * Width.
		 * Required
		 */
		width: number;
	}
	export interface ImageRegionCreateResultFormProperties {
		created: FormControl<Date | null | undefined>,

		/**
		 * Height.
		 * Required
		 */
		height: FormControl<number | null | undefined>,
		imageId: FormControl<string | null | undefined>,

		/**
		 * Coordinate of the left boundary.
		 * Required
		 */
		left: FormControl<number | null | undefined>,
		regionId: FormControl<string | null | undefined>,

		/**
		 * Id of the tag associated with this region.
		 * Required
		 */
		tagId: FormControl<string | null | undefined>,
		tagName: FormControl<string | null | undefined>,

		/**
		 * Coordinate of the top boundary.
		 * Required
		 */
		top: FormControl<number | null | undefined>,

		/**
		 * Width.
		 * Required
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateImageRegionCreateResultFormGroup() {
		return new FormGroup<ImageRegionCreateResultFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			imageId: new FormControl<string | null | undefined>(undefined),
			left: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			regionId: new FormControl<string | null | undefined>(undefined),
			tagId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tagName: new FormControl<string | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImageRegionCreateSummary {
		created?: Array<ImageRegionCreateResult>;
		duplicated?: Array<ImageRegionCreateEntry>;
		exceeded?: Array<ImageRegionCreateEntry>;
	}
	export interface ImageRegionCreateSummaryFormProperties {
	}
	export function CreateImageRegionCreateSummaryFormGroup() {
		return new FormGroup<ImageRegionCreateSummaryFormProperties>({
		});

	}

	export interface ImageRegionProposal {
		imageId?: string | null;
		projectId?: string | null;
		proposals?: Array<RegionProposal>;
	}
	export interface ImageRegionProposalFormProperties {
		imageId: FormControl<string | null | undefined>,
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateImageRegionProposalFormGroup() {
		return new FormGroup<ImageRegionProposalFormProperties>({
			imageId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegionProposal {

		/** Bounding box that defines a region of an image. */
		boundingBox?: BoundingBox;
		confidence?: number | null;
	}
	export interface RegionProposalFormProperties {
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateRegionProposalFormGroup() {
		return new FormGroup<RegionProposalFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Batch of image tags. */
	export interface ImageTagCreateBatch {

		/** Image Tag entries to include in this batch. */
		tags?: Array<ImageTagCreateEntry>;
	}

	/** Batch of image tags. */
	export interface ImageTagCreateBatchFormProperties {
	}
	export function CreateImageTagCreateBatchFormGroup() {
		return new FormGroup<ImageTagCreateBatchFormProperties>({
		});

	}


	/** Entry associating a tag to an image. */
	export interface ImageTagCreateEntry {

		/** Id of the image. */
		imageId?: string | null;

		/** Id of the tag. */
		tagId?: string | null;
	}

	/** Entry associating a tag to an image. */
	export interface ImageTagCreateEntryFormProperties {

		/** Id of the image. */
		imageId: FormControl<string | null | undefined>,

		/** Id of the tag. */
		tagId: FormControl<string | null | undefined>,
	}
	export function CreateImageTagCreateEntryFormGroup() {
		return new FormGroup<ImageTagCreateEntryFormProperties>({
			imageId: new FormControl<string | null | undefined>(undefined),
			tagId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImageTagCreateSummary {
		created?: Array<ImageTagCreateEntry>;
		duplicated?: Array<ImageTagCreateEntry>;
		exceeded?: Array<ImageTagCreateEntry>;
	}
	export interface ImageTagCreateSummaryFormProperties {
	}
	export function CreateImageTagCreateSummaryFormGroup() {
		return new FormGroup<ImageTagCreateSummaryFormProperties>({
		});

	}


	/** Image url. */
	export interface ImageUrl {

		/**
		 * Url of the image.
		 * Required
		 */
		url: string;
	}

	/** Image url. */
	export interface ImageUrlFormProperties {

		/**
		 * Url of the image.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateImageUrlFormGroup() {
		return new FormGroup<ImageUrlFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImageUrlCreateBatch {
		images?: Array<ImageUrlCreateEntry>;
		tagIds?: Array<string>;
	}
	export interface ImageUrlCreateBatchFormProperties {
	}
	export function CreateImageUrlCreateBatchFormGroup() {
		return new FormGroup<ImageUrlCreateBatchFormProperties>({
		});

	}

	export interface ImageUrlCreateEntry {
		regions?: Array<Region>;
		tagIds?: Array<string>;

		/**
		 * Url of the image.
		 * Required
		 */
		url: string;
	}
	export interface ImageUrlCreateEntryFormProperties {

		/**
		 * Url of the image.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateImageUrlCreateEntryFormGroup() {
		return new FormGroup<ImageUrlCreateEntryFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Iteration model to be sent over JSON. */
	export interface Iteration {

		/** Gets the classification type of the project. */
		classificationType?: IterationClassificationType | null;

		/** Gets the time this iteration was completed. */
		created?: Date | null;

		/** Get or sets a guid of the domain the iteration has been trained on. */
		domainId?: string | null;

		/** Whether the iteration can be exported to another format for download. */
		exportable?: boolean | null;

		/** A set of platforms this iteration can export to. */
		exportableTo?: Array<ExportPlatform>;

		/** Gets the id of the iteration. */
		id?: string | null;

		/** Gets the time this iteration was last modified. */
		lastModified?: Date | null;

		/**
		 * Gets or sets the name of the iteration.
		 * Required
		 */
		name: string;

		/** Resource Provider Id this iteration was originally published to. */
		originalPublishResourceId?: string | null;

		/** Gets the project id of the iteration. */
		projectId?: string | null;

		/** Name of the published model. */
		publishName?: string | null;

		/** Gets the reserved advanced training budget for the iteration. */
		reservedBudgetInHours?: number | null;

		/** Gets the current iteration status. */
		status?: string | null;

		/** Gets the time this iteration was last modified. */
		trainedAt?: Date | null;

		/** Gets the training time for the iteration. */
		trainingTimeInMinutes?: number | null;

		/** Gets the training type of the iteration. */
		trainingType?: IterationTrainingType | null;
	}

	/** Iteration model to be sent over JSON. */
	export interface IterationFormProperties {

		/** Gets the classification type of the project. */
		classificationType: FormControl<IterationClassificationType | null | undefined>,

		/** Gets the time this iteration was completed. */
		created: FormControl<Date | null | undefined>,

		/** Get or sets a guid of the domain the iteration has been trained on. */
		domainId: FormControl<string | null | undefined>,

		/** Whether the iteration can be exported to another format for download. */
		exportable: FormControl<boolean | null | undefined>,

		/** Gets the id of the iteration. */
		id: FormControl<string | null | undefined>,

		/** Gets the time this iteration was last modified. */
		lastModified: FormControl<Date | null | undefined>,

		/**
		 * Gets or sets the name of the iteration.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Resource Provider Id this iteration was originally published to. */
		originalPublishResourceId: FormControl<string | null | undefined>,

		/** Gets the project id of the iteration. */
		projectId: FormControl<string | null | undefined>,

		/** Name of the published model. */
		publishName: FormControl<string | null | undefined>,

		/** Gets the reserved advanced training budget for the iteration. */
		reservedBudgetInHours: FormControl<number | null | undefined>,

		/** Gets the current iteration status. */
		status: FormControl<string | null | undefined>,

		/** Gets the time this iteration was last modified. */
		trainedAt: FormControl<Date | null | undefined>,

		/** Gets the training time for the iteration. */
		trainingTimeInMinutes: FormControl<number | null | undefined>,

		/** Gets the training type of the iteration. */
		trainingType: FormControl<IterationTrainingType | null | undefined>,
	}
	export function CreateIterationFormGroup() {
		return new FormGroup<IterationFormProperties>({
			classificationType: new FormControl<IterationClassificationType | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			domainId: new FormControl<string | null | undefined>(undefined),
			exportable: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			originalPublishResourceId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			publishName: new FormControl<string | null | undefined>(undefined),
			reservedBudgetInHours: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			trainedAt: new FormControl<Date | null | undefined>(undefined),
			trainingTimeInMinutes: new FormControl<number | null | undefined>(undefined),
			trainingType: new FormControl<IterationTrainingType | null | undefined>(undefined),
		});

	}

	export enum IterationClassificationType { Multiclass = 'Multiclass', Multilabel = 'Multilabel' }

	export enum IterationTrainingType { Regular = 'Regular', Advanced = 'Advanced' }


	/** Represents the detailed performance data for a trained iteration. */
	export interface IterationPerformance {

		/** Gets the average precision when applicable. */
		averagePrecision?: number | null;

		/** Gets the per-tag performance details for this iteration. */
		perTagPerformance?: Array<TagPerformance>;

		/** Gets the precision. */
		precision?: number | null;

		/** Gets the standard deviation for the precision. */
		precisionStdDeviation?: number | null;

		/** Gets the recall. */
		recall?: number | null;

		/** Gets the standard deviation for the recall. */
		recallStdDeviation?: number | null;
	}

	/** Represents the detailed performance data for a trained iteration. */
	export interface IterationPerformanceFormProperties {

		/** Gets the average precision when applicable. */
		averagePrecision: FormControl<number | null | undefined>,

		/** Gets the precision. */
		precision: FormControl<number | null | undefined>,

		/** Gets the standard deviation for the precision. */
		precisionStdDeviation: FormControl<number | null | undefined>,

		/** Gets the recall. */
		recall: FormControl<number | null | undefined>,

		/** Gets the standard deviation for the recall. */
		recallStdDeviation: FormControl<number | null | undefined>,
	}
	export function CreateIterationPerformanceFormGroup() {
		return new FormGroup<IterationPerformanceFormProperties>({
			averagePrecision: new FormControl<number | null | undefined>(undefined),
			precision: new FormControl<number | null | undefined>(undefined),
			precisionStdDeviation: new FormControl<number | null | undefined>(undefined),
			recall: new FormControl<number | null | undefined>(undefined),
			recallStdDeviation: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents performance data for a particular tag in a trained iteration. */
	export interface TagPerformance {

		/** Gets the average precision when applicable. */
		averagePrecision?: number | null;
		id?: string | null;
		name?: string | null;

		/** Gets the precision. */
		precision?: number | null;

		/** Gets the standard deviation for the precision. */
		precisionStdDeviation?: number | null;

		/** Gets the recall. */
		recall?: number | null;

		/** Gets the standard deviation for the recall. */
		recallStdDeviation?: number | null;
	}

	/** Represents performance data for a particular tag in a trained iteration. */
	export interface TagPerformanceFormProperties {

		/** Gets the average precision when applicable. */
		averagePrecision: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Gets the precision. */
		precision: FormControl<number | null | undefined>,

		/** Gets the standard deviation for the precision. */
		precisionStdDeviation: FormControl<number | null | undefined>,

		/** Gets the recall. */
		recall: FormControl<number | null | undefined>,

		/** Gets the standard deviation for the recall. */
		recallStdDeviation: FormControl<number | null | undefined>,
	}
	export function CreateTagPerformanceFormGroup() {
		return new FormGroup<TagPerformanceFormProperties>({
			averagePrecision: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			precision: new FormControl<number | null | undefined>(undefined),
			precisionStdDeviation: new FormControl<number | null | undefined>(undefined),
			recall: new FormControl<number | null | undefined>(undefined),
			recallStdDeviation: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Query result of the prediction images that were sent to your prediction endpoint. */
	export interface PredictionQueryResult {

		/** Result of an prediction request. */
		results?: Array<StoredImagePrediction>;
		token?: PredictionQueryToken;
	}

	/** Query result of the prediction images that were sent to your prediction endpoint. */
	export interface PredictionQueryResultFormProperties {
	}
	export function CreatePredictionQueryResultFormGroup() {
		return new FormGroup<PredictionQueryResultFormProperties>({
		});

	}


	/** Result of an image prediction request. */
	export interface StoredImagePrediction {

		/** Date this prediction was created. */
		created?: Date | null;

		/** Domain used for the prediction. */
		domain?: string | null;

		/** Prediction Id. */
		id?: string | null;

		/** Iteration Id. */
		iteration?: string | null;

		/** The URI to the original prediction image. */
		originalImageUri?: string | null;

		/** List of predictions. */
		predictions?: Array<Prediction>;

		/** Project Id. */
		project?: string | null;

		/** The URI to the (resized) prediction image. */
		resizedImageUri?: string | null;

		/** The URI to the thumbnail of the original prediction image. */
		thumbnailUri?: string | null;
	}

	/** Result of an image prediction request. */
	export interface StoredImagePredictionFormProperties {

		/** Date this prediction was created. */
		created: FormControl<Date | null | undefined>,

		/** Domain used for the prediction. */
		domain: FormControl<string | null | undefined>,

		/** Prediction Id. */
		id: FormControl<string | null | undefined>,

		/** Iteration Id. */
		iteration: FormControl<string | null | undefined>,

		/** The URI to the original prediction image. */
		originalImageUri: FormControl<string | null | undefined>,

		/** Project Id. */
		project: FormControl<string | null | undefined>,

		/** The URI to the (resized) prediction image. */
		resizedImageUri: FormControl<string | null | undefined>,

		/** The URI to the thumbnail of the original prediction image. */
		thumbnailUri: FormControl<string | null | undefined>,
	}
	export function CreateStoredImagePredictionFormGroup() {
		return new FormGroup<StoredImagePredictionFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			iteration: new FormControl<string | null | undefined>(undefined),
			originalImageUri: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			resizedImageUri: new FormControl<string | null | undefined>(undefined),
			thumbnailUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PredictionQueryToken {
		application?: string | null;
		continuation?: string | null;
		endTime?: Date | null;
		iterationId?: string | null;
		maxCount?: number | null;
		orderBy?: PredictionQueryTokenOrderBy | null;
		session?: string | null;
		startTime?: Date | null;
		tags?: Array<PredictionQueryTag>;
	}
	export interface PredictionQueryTokenFormProperties {
		application: FormControl<string | null | undefined>,
		continuation: FormControl<string | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		iterationId: FormControl<string | null | undefined>,
		maxCount: FormControl<number | null | undefined>,
		orderBy: FormControl<PredictionQueryTokenOrderBy | null | undefined>,
		session: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreatePredictionQueryTokenFormGroup() {
		return new FormGroup<PredictionQueryTokenFormProperties>({
			application: new FormControl<string | null | undefined>(undefined),
			continuation: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			iterationId: new FormControl<string | null | undefined>(undefined),
			maxCount: new FormControl<number | null | undefined>(undefined),
			orderBy: new FormControl<PredictionQueryTokenOrderBy | null | undefined>(undefined),
			session: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum PredictionQueryTokenOrderBy { Newest = 'Newest', Oldest = 'Oldest', Suggested = 'Suggested' }

	export interface PredictionQueryTag {
		id?: string | null;
		maxThreshold?: number | null;
		minThreshold?: number | null;
	}
	export interface PredictionQueryTagFormProperties {
		id: FormControl<string | null | undefined>,
		maxThreshold: FormControl<number | null | undefined>,
		minThreshold: FormControl<number | null | undefined>,
	}
	export function CreatePredictionQueryTagFormGroup() {
		return new FormGroup<PredictionQueryTagFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			maxThreshold: new FormControl<number | null | undefined>(undefined),
			minThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a project. */
	export interface Project {

		/** Gets the date this project was created. */
		created?: Date | null;

		/**
		 * Gets or sets the description of the project.
		 * Required
		 */
		description: string;

		/** Gets if the Disaster Recovery (DR) mode is on, indicating the project is temporarily read-only. */
		drModeEnabled?: boolean | null;

		/** Gets the project id. */
		id?: string | null;

		/** Gets the date this project was last modified. */
		lastModified?: Date | null;

		/**
		 * Gets or sets the name of the project.
		 * Required
		 */
		name: string;

		/**
		 * Represents settings associated with a project.
		 * Required
		 */
		settings: ProjectSettings;

		/** Gets the status of the project. */
		status?: ProjectStatus | null;

		/** Gets the thumbnail url representing the image. */
		thumbnailUri?: string | null;
	}

	/** Represents a project. */
	export interface ProjectFormProperties {

		/** Gets the date this project was created. */
		created: FormControl<Date | null | undefined>,

		/**
		 * Gets or sets the description of the project.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/** Gets if the Disaster Recovery (DR) mode is on, indicating the project is temporarily read-only. */
		drModeEnabled: FormControl<boolean | null | undefined>,

		/** Gets the project id. */
		id: FormControl<string | null | undefined>,

		/** Gets the date this project was last modified. */
		lastModified: FormControl<Date | null | undefined>,

		/**
		 * Gets or sets the name of the project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Gets the status of the project. */
		status: FormControl<ProjectStatus | null | undefined>,

		/** Gets the thumbnail url representing the image. */
		thumbnailUri: FormControl<string | null | undefined>,
	}
	export function CreateProjectFormGroup() {
		return new FormGroup<ProjectFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			drModeEnabled: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ProjectStatus | null | undefined>(undefined),
			thumbnailUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents settings associated with a project. */
	export interface ProjectSettings {

		/** Gets or sets the classification type of the project. */
		classificationType?: IterationClassificationType | null;

		/** Detection parameters in use, if any. */
		detectionParameters?: string | null;

		/** Gets or sets the id of the Domain to use with this project. */
		domainId?: string | null;

		/** Represents image preprocessing settings used by image augmentation. */
		imageProcessingSettings?: ImageProcessingSettings;

		/** A list of ExportPlatform that the trained model should be able to support. */
		targetExportPlatforms?: Array<ExportPlatform>;

		/** Indicates if negative set is being used. */
		useNegativeSet?: boolean | null;
	}

	/** Represents settings associated with a project. */
	export interface ProjectSettingsFormProperties {

		/** Gets or sets the classification type of the project. */
		classificationType: FormControl<IterationClassificationType | null | undefined>,

		/** Detection parameters in use, if any. */
		detectionParameters: FormControl<string | null | undefined>,

		/** Gets or sets the id of the Domain to use with this project. */
		domainId: FormControl<string | null | undefined>,

		/** Indicates if negative set is being used. */
		useNegativeSet: FormControl<boolean | null | undefined>,
	}
	export function CreateProjectSettingsFormGroup() {
		return new FormGroup<ProjectSettingsFormProperties>({
			classificationType: new FormControl<IterationClassificationType | null | undefined>(undefined),
			detectionParameters: new FormControl<string | null | undefined>(undefined),
			domainId: new FormControl<string | null | undefined>(undefined),
			useNegativeSet: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ProjectStatus { Succeeded = 'Succeeded', Importing = 'Importing', Failed = 'Failed' }


	/** Represents information about a project export. */
	export interface ProjectExport {

		/**
		 * Estimated time this project will take to import, can change based on network connectivity and load between
		 * source and destination regions.
		 */
		estimatedImportTimeInMS?: number | null;

		/** Count of images that will be exported. */
		imageCount?: number | null;

		/** Count of iterations that will be exported. */
		iterationCount?: number | null;

		/** Count of regions that will be exported. */
		regionCount?: number | null;

		/** Count of tags that will be exported. */
		tagCount?: number | null;

		/**
		 * Opaque token that should be passed to ImportProject to perform the import. This token grants access to import this
		 * project to all that have the token.
		 */
		token?: string | null;
	}

	/** Represents information about a project export. */
	export interface ProjectExportFormProperties {

		/**
		 * Estimated time this project will take to import, can change based on network connectivity and load between
		 * source and destination regions.
		 */
		estimatedImportTimeInMS: FormControl<number | null | undefined>,

		/** Count of images that will be exported. */
		imageCount: FormControl<number | null | undefined>,

		/** Count of iterations that will be exported. */
		iterationCount: FormControl<number | null | undefined>,

		/** Count of regions that will be exported. */
		regionCount: FormControl<number | null | undefined>,

		/** Count of tags that will be exported. */
		tagCount: FormControl<number | null | undefined>,

		/**
		 * Opaque token that should be passed to ImportProject to perform the import. This token grants access to import this
		 * project to all that have the token.
		 */
		token: FormControl<string | null | undefined>,
	}
	export function CreateProjectExportFormGroup() {
		return new FormGroup<ProjectExportFormProperties>({
			estimatedImportTimeInMS: new FormControl<number | null | undefined>(undefined),
			imageCount: new FormControl<number | null | undefined>(undefined),
			iterationCount: new FormControl<number | null | undefined>(undefined),
			regionCount: new FormControl<number | null | undefined>(undefined),
			tagCount: new FormControl<number | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of a suggested tags and regions request of the untagged image. */
	export interface StoredSuggestedTagAndRegion {

		/** Date this prediction was created. */
		created?: Date | null;

		/** Domain used for the prediction. */
		domain?: string | null;

		/** Height of the resized image. */
		height?: number | null;

		/** Prediction Id. */
		id?: string | null;

		/** Iteration Id. */
		iteration?: string | null;

		/** The URI to the original prediction image. */
		originalImageUri?: string | null;

		/** Uncertainty (entropy) of suggested tags or regions per image. */
		predictionUncertainty?: number | null;

		/** List of predictions. */
		predictions?: Array<Prediction>;

		/** Project Id. */
		project?: string | null;

		/** The URI to the (resized) prediction image. */
		resizedImageUri?: string | null;

		/** The URI to the thumbnail of the original prediction image. */
		thumbnailUri?: string | null;

		/** Width of the resized image. */
		width?: number | null;
	}

	/** Result of a suggested tags and regions request of the untagged image. */
	export interface StoredSuggestedTagAndRegionFormProperties {

		/** Date this prediction was created. */
		created: FormControl<Date | null | undefined>,

		/** Domain used for the prediction. */
		domain: FormControl<string | null | undefined>,

		/** Height of the resized image. */
		height: FormControl<number | null | undefined>,

		/** Prediction Id. */
		id: FormControl<string | null | undefined>,

		/** Iteration Id. */
		iteration: FormControl<string | null | undefined>,

		/** The URI to the original prediction image. */
		originalImageUri: FormControl<string | null | undefined>,

		/** Uncertainty (entropy) of suggested tags or regions per image. */
		predictionUncertainty: FormControl<number | null | undefined>,

		/** Project Id. */
		project: FormControl<string | null | undefined>,

		/** The URI to the (resized) prediction image. */
		resizedImageUri: FormControl<string | null | undefined>,

		/** The URI to the thumbnail of the original prediction image. */
		thumbnailUri: FormControl<string | null | undefined>,

		/** Width of the resized image. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateStoredSuggestedTagAndRegionFormGroup() {
		return new FormGroup<StoredSuggestedTagAndRegionFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			iteration: new FormControl<string | null | undefined>(undefined),
			originalImageUri: new FormControl<string | null | undefined>(undefined),
			predictionUncertainty: new FormControl<number | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			resizedImageUri: new FormControl<string | null | undefined>(undefined),
			thumbnailUri: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Result of a suggested tags and regions request. */
	export interface SuggestedTagAndRegion {

		/** Date this prediction was created. */
		created?: Date | null;

		/** Prediction Id. */
		id?: string | null;

		/** Iteration Id. */
		iteration?: string | null;

		/** Uncertainty (entropy) of suggested tags or regions per image. */
		predictionUncertainty?: number | null;

		/** List of predictions. */
		predictions?: Array<Prediction>;

		/** Project Id. */
		project?: string | null;
	}

	/** Result of a suggested tags and regions request. */
	export interface SuggestedTagAndRegionFormProperties {

		/** Date this prediction was created. */
		created: FormControl<Date | null | undefined>,

		/** Prediction Id. */
		id: FormControl<string | null | undefined>,

		/** Iteration Id. */
		iteration: FormControl<string | null | undefined>,

		/** Uncertainty (entropy) of suggested tags or regions per image. */
		predictionUncertainty: FormControl<number | null | undefined>,

		/** Project Id. */
		project: FormControl<string | null | undefined>,
	}
	export function CreateSuggestedTagAndRegionFormGroup() {
		return new FormGroup<SuggestedTagAndRegionFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			iteration: new FormControl<string | null | undefined>(undefined),
			predictionUncertainty: new FormControl<number | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The array of result images and token containing session and continuation Ids for the next query. */
	export interface SuggestedTagAndRegionQuery {

		/** Result of a suggested tags and regions request of the untagged image. */
		results?: Array<StoredSuggestedTagAndRegion>;

		/**
		 * Contains properties we need to fetch suggested tags for. For the first call, Session and continuation set to null.
		 * Then on subsequent calls, uses the session/continuation from the previous SuggestedTagAndRegionQuery result to fetch additional results.
		 */
		token?: SuggestedTagAndRegionQueryToken;
	}

	/** The array of result images and token containing session and continuation Ids for the next query. */
	export interface SuggestedTagAndRegionQueryFormProperties {
	}
	export function CreateSuggestedTagAndRegionQueryFormGroup() {
		return new FormGroup<SuggestedTagAndRegionQueryFormProperties>({
		});

	}


	/**
	 * Contains properties we need to fetch suggested tags for. For the first call, Session and continuation set to null.
	 * Then on subsequent calls, uses the session/continuation from the previous SuggestedTagAndRegionQuery result to fetch additional results.
	 */
	export interface SuggestedTagAndRegionQueryToken {

		/** Continuation Id for database pagination. Initially null but later used to paginate. */
		continuation?: string | null;

		/** Maximum number of results you want to be returned in the response. */
		maxCount?: number | null;

		/** SessionId for database query. Initially set to null but later used to paginate. */
		session?: string | null;

		/** OrderBy. Ordering mechanism for your results. */
		sortBy?: SuggestedTagAndRegionQueryTokenSortBy | null;

		/** Existing TagIds in project to filter suggested tags on. */
		tagIds?: Array<string>;

		/** Confidence threshold to filter suggested tags on. */
		threshold?: number | null;
	}

	/**
	 * Contains properties we need to fetch suggested tags for. For the first call, Session and continuation set to null.
	 * Then on subsequent calls, uses the session/continuation from the previous SuggestedTagAndRegionQuery result to fetch additional results.
	 */
	export interface SuggestedTagAndRegionQueryTokenFormProperties {

		/** Continuation Id for database pagination. Initially null but later used to paginate. */
		continuation: FormControl<string | null | undefined>,

		/** Maximum number of results you want to be returned in the response. */
		maxCount: FormControl<number | null | undefined>,

		/** SessionId for database query. Initially set to null but later used to paginate. */
		session: FormControl<string | null | undefined>,

		/** OrderBy. Ordering mechanism for your results. */
		sortBy: FormControl<SuggestedTagAndRegionQueryTokenSortBy | null | undefined>,

		/** Confidence threshold to filter suggested tags on. */
		threshold: FormControl<number | null | undefined>,
	}
	export function CreateSuggestedTagAndRegionQueryTokenFormGroup() {
		return new FormGroup<SuggestedTagAndRegionQueryTokenFormProperties>({
			continuation: new FormControl<string | null | undefined>(undefined),
			maxCount: new FormControl<number | null | undefined>(undefined),
			session: new FormControl<string | null | undefined>(undefined),
			sortBy: new FormControl<SuggestedTagAndRegionQueryTokenSortBy | null | undefined>(undefined),
			threshold: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SuggestedTagAndRegionQueryTokenSortBy { UncertaintyAscending = 'UncertaintyAscending', UncertaintyDescending = 'UncertaintyDescending' }


	/** Represents a Tag. */
	export interface Tag {

		/**
		 * Gets or sets the description of the tag.
		 * Required
		 */
		description: string;

		/** Gets the Tag ID. */
		id?: string | null;

		/** Gets the number of images with this tag. */
		imageCount?: number | null;

		/**
		 * Gets or sets the name of the tag.
		 * Required
		 */
		name: string;

		/**
		 * Gets or sets the type of the tag.
		 * Required
		 */
		type: TagType;
	}

	/** Represents a Tag. */
	export interface TagFormProperties {

		/**
		 * Gets or sets the description of the tag.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/** Gets the Tag ID. */
		id: FormControl<string | null | undefined>,

		/** Gets the number of images with this tag. */
		imageCount: FormControl<number | null | undefined>,

		/**
		 * Gets or sets the name of the tag.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Gets or sets the type of the tag.
		 * Required
		 */
		type: FormControl<TagType | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
			imageCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<TagType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TagType { Regular = 'Regular', Negative = 'Negative' }


	/** Model that query for counting of images whose suggested tags match given tags and their probability are greater than or equal to the given threshold. */
	export interface TagFilter {

		/** Existing TagIds in project to get suggested tags count for. */
		tagIds?: Array<string>;

		/** Confidence threshold to filter suggested tags on. */
		threshold?: number | null;
	}

	/** Model that query for counting of images whose suggested tags match given tags and their probability are greater than or equal to the given threshold. */
	export interface TagFilterFormProperties {

		/** Confidence threshold to filter suggested tags on. */
		threshold: FormControl<number | null | undefined>,
	}
	export function CreateTagFilterFormGroup() {
		return new FormGroup<TagFilterFormProperties>({
			threshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Parameters used for training. */
	export interface TrainingParameters {

		/** List of tags selected for this training session, other tags in the project will be ignored. */
		selectedTags?: Array<string>;
	}

	/** Parameters used for training. */
	export interface TrainingParametersFormProperties {
	}
	export function CreateTrainingParametersFormGroup() {
		return new FormGroup<TrainingParametersFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get a list of the available domains.
		 * Get domains
		 * @return {Array<Domain>} OK
		 */
		GetDomains(): Observable<Array<Domain>> {
			return this.http.get<Array<Domain>>(this.baseUri + 'domains', {});
		}

		/**
		 * Get information about a specific domain.
		 * Get domains/{domainId}
		 * @param {string} domainId The id of the domain to get information about.
		 * @return {Domain} OK
		 */
		GetDomain(domainId: string): Observable<Domain> {
			return this.http.get<Domain>(this.baseUri + 'domains/' + (domainId == null ? '' : encodeURIComponent(domainId)), {});
		}

		/**
		 * Get your projects.
		 * Get projects
		 * @return {Array<Project>} OK
		 */
		GetProjects(): Observable<Array<Project>> {
			return this.http.get<Array<Project>>(this.baseUri + 'projects', {});
		}

		/**
		 * Create a project.
		 * Post projects
		 * @param {string} name Name of the project.
		 * @param {string} description The description of the project.
		 * @param {string} domainId The id of the domain to use for this project. Defaults to General.
		 * @param {IterationClassificationType} classificationType The type of classifier to create for this project.
		 * @param {Array<ExportPlatform>} targetExportPlatforms List of platforms the trained model is intending exporting to.
		 * @return {Project} OK
		 */
		CreateProject(name: string, description: string | null | undefined, domainId: string | null | undefined, classificationType: IterationClassificationType | null | undefined, targetExportPlatforms: Array<ExportPlatform> | null | undefined): Observable<Project> {
			return this.http.post<Project>(this.baseUri + 'projects?name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&domainId=' + (domainId == null ? '' : encodeURIComponent(domainId)) + '&classificationType=' + classificationType + '&' + targetExportPlatforms?.map(z => `targetExportPlatforms=${z}`).join('&'), null, {});
		}

		/**
		 * Imports a project.
		 * Post projects/import
		 * @param {string} token Token generated from the export project call.
		 * @return {Project} OK
		 */
		ImportProject(token: string): Observable<Project> {
			return this.http.post<Project>(this.baseUri + 'projects/import?token=' + (token == null ? '' : encodeURIComponent(token)), null, {});
		}

		/**
		 * Get a specific project.
		 * Get projects/{projectId}
		 * @param {string} projectId The id of the project to get.
		 * @return {Project} OK
		 */
		GetProject(projectId: string): Observable<Project> {
			return this.http.get<Project>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)), {});
		}

		/**
		 * Delete a specific project.
		 * Delete projects/{projectId}
		 * @param {string} projectId The project id.
		 * @return {void} 
		 */
		DeleteProject(projectId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a specific project.
		 * Patch projects/{projectId}
		 * @param {string} projectId The id of the project to update.
		 * @param {Project} requestBody The updated project model.
		 * @return {Project} OK
		 */
		UpdateProject(projectId: string, requestBody: Project): Observable<Project> {
			return this.http.patch<Project>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Exports a project.
		 * Get projects/{projectId}/export
		 * @param {string} projectId The project id of the project to export.
		 * @return {ProjectExport} OK
		 */
		ExportProject(projectId: string): Observable<ProjectExport> {
			return this.http.get<ProjectExport>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/export', {});
		}

		/**
		 * Delete images from the set of training images.
		 * Delete projects/{projectId}/images
		 * @param {string} projectId The project id.
		 * @param {Array<string>} imageIds Ids of the images to be deleted. Limited to 256 images per batch.
		 * @param {boolean} allImages Flag to specify delete all images, specify this flag or a list of images. Using this flag will return a 202 response to indicate the images are being deleted.
		 * @param {boolean} allIterations Removes these images from all iterations, not just the current workspace. Using this flag will return a 202 response to indicate the images are being deleted.
		 * @return {void} 
		 */
		DeleteImages(projectId: string, imageIds: Array<string> | null | undefined, allImages: boolean | null | undefined, allIterations: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/images&' + imageIds?.map(z => `imageIds=${encodeURIComponent(z)}`).join('&') + '&allImages=' + allImages + '&allIterations=' + allIterations, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add the provided batch of images to the set of training images.
		 * This API accepts a batch of files, and optionally tags, to create images. There is a limit of 64 images and 20 tags.
		 * Post projects/{projectId}/images/files
		 * @param {string} projectId The project id.
		 * @param {ImageFileCreateBatch} requestBody The batch of image files to add. Limited to 64 images and 20 tags per batch.
		 * @return {ImageCreateSummary} OK
		 */
		CreateImagesFromFiles(projectId: string, requestBody: ImageFileCreateBatch): Observable<ImageCreateSummary> {
			return this.http.post<ImageCreateSummary>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/images/files', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get images by id for a given project iteration.
		 * This API will return a set of Images for the specified tags and optionally iteration. If no iteration is specified the
		 * current workspace is used.
		 * Get projects/{projectId}/images/id
		 * @param {string} projectId The project id.
		 * @param {Array<string>} imageIds The list of image ids to retrieve. Limited to 256.
		 * @param {string} iterationId The iteration id. Defaults to workspace.
		 * @return {Array<Image>} OK
		 */
		GetImagesByIds(projectId: string, imageIds: Array<string> | null | undefined, iterationId: string | null | undefined): Observable<Array<Image>> {
			return this.http.get<Array<Image>>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/images/id&' + imageIds?.map(z => `imageIds=${encodeURIComponent(z)}`).join('&') + '&iterationId=' + (iterationId == null ? '' : encodeURIComponent(iterationId)), {});
		}

		/**
		 * Add the specified predicted images to the set of training images.
		 * This API creates a batch of images from predicted images specified. There is a limit of 64 images and 20 tags.
		 * Post projects/{projectId}/images/predictions
		 * @param {string} projectId The project id.
		 * @param {ImageIdCreateBatch} requestBody Image and tag ids. Limited to 64 images and 20 tags per batch.
		 * @return {ImageCreateSummary} OK
		 */
		CreateImagesFromPredictions(projectId: string, requestBody: ImageIdCreateBatch): Observable<ImageCreateSummary> {
			return this.http.post<ImageCreateSummary>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/images/predictions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a set of image regions.
		 * This API accepts a batch of image regions, and optionally tags, to update existing images with region information.
		 * There is a limit of 64 entries in the batch.
		 * Post projects/{projectId}/images/regions
		 * @param {string} projectId The project id.
		 * @param {ImageRegionCreateBatch} requestBody Batch of image regions which include a tag and bounding box. Limited to 64.
		 * @return {ImageRegionCreateSummary} OK
		 */
		CreateImageRegions(projectId: string, requestBody: ImageRegionCreateBatch): Observable<ImageRegionCreateSummary> {
			return this.http.post<ImageRegionCreateSummary>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/images/regions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a set of image regions.
		 * Delete projects/{projectId}/images/regions
		 * @param {string} projectId The project id.
		 * @param {Array<string>} regionIds Regions to delete. Limited to 64.
		 * @return {void} 
		 */
		DeleteImageRegions(projectId: string, regionIds: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/images/regions&' + regionIds.map(z => `regionIds=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get untagged images whose suggested tags match given tags. Returns empty array if no images are found.
		 * This API will fetch untagged images filtered by suggested tags Ids. It returns an empty array if no images are found.
		 * Post projects/{projectId}/images/suggested
		 * @param {string} projectId The project id.
		 * @param {string} iterationId IterationId to use for the suggested tags and regions.
		 * @param {SuggestedTagAndRegionQueryToken} requestBody Contains properties we need to query suggested images.
		 * @return {SuggestedTagAndRegionQuery} OK
		 */
		QuerySuggestedImages(projectId: string, iterationId: string, requestBody: SuggestedTagAndRegionQueryToken): Observable<SuggestedTagAndRegionQuery> {
			return this.http.post<SuggestedTagAndRegionQuery>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/images/suggested&iterationId=' + (iterationId == null ? '' : encodeURIComponent(iterationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get count of images whose suggested tags match given tags and their probabilities are greater than or equal to the given threshold. Returns count as 0 if none found.
		 * This API takes in tagIds to get count of untagged images per suggested tags for a given threshold.
		 * Post projects/{projectId}/images/suggested/count
		 * @param {string} projectId The project id.
		 * @param {string} iterationId IterationId to use for the suggested tags and regions.
		 * @param {TagFilter} requestBody Model that contains tagIds, threshold and projectType to query by.
		 * @return {{[id: string]: number }} OK
		 */
		QuerySuggestedImageCount(projectId: string, iterationId: string, requestBody: TagFilter): Observable<{[id: string]: number }> {
			return this.http.post<{[id: string]: number }>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/images/suggested/count&iterationId=' + (iterationId == null ? '' : encodeURIComponent(iterationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get tagged images for a given project iteration.
		 * This API supports batching and range selection. By default it will only return first 50 images matching images.
		 * Use the {take} and {skip} parameters to control how many images to return in a given batch.
		 * The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
		 * "Cat" tags, then only images tagged with Dog and/or Cat will be returned
		 * Get projects/{projectId}/images/tagged
		 * @param {string} projectId The project id.
		 * @param {string} iterationId The iteration id. Defaults to workspace.
		 * @param {Array<string>} tagIds A list of tags ids to filter the images. Defaults to all tagged images when null. Limited to 20.
		 * @param {GetTaggedImagesOrderBy} orderBy The ordering. Defaults to newest.
		 * @param {number} take Maximum number of images to return. Defaults to 50, limited to 256.
		 * @param {number} skip Number of images to skip before beginning the image batch. Defaults to 0.
		 * @return {Array<Image>} OK
		 */
		GetTaggedImages(projectId: string, iterationId: string | null | undefined, tagIds: Array<string> | null | undefined, orderBy: GetTaggedImagesOrderBy | null | undefined, take: number | null | undefined, skip: number | null | undefined): Observable<Array<Image>> {
			return this.http.get<Array<Image>>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/images/tagged&iterationId=' + (iterationId == null ? '' : encodeURIComponent(iterationId)) + '&' + tagIds?.map(z => `tagIds=${encodeURIComponent(z)}`).join('&') + '&orderBy=' + orderBy + '&take=' + take + '&skip=' + skip, {});
		}

		/**
		 * Gets the number of images tagged with the provided {tagIds}.
		 * The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
		 * "Cat" tags, then only images tagged with Dog and/or Cat will be returned
		 * Get projects/{projectId}/images/tagged/count
		 * @param {string} projectId The project id.
		 * @param {string} iterationId The iteration id. Defaults to workspace.
		 * @param {Array<string>} tagIds A list of tags ids to filter the images to count. Defaults to all tags when null.
		 * @return {number} OK
		 */
		GetTaggedImageCount(projectId: string, iterationId: string | null | undefined, tagIds: Array<string> | null | undefined): Observable<number> {
			return this.http.get<number>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/images/tagged/count&iterationId=' + (iterationId == null ? '' : encodeURIComponent(iterationId)) + '&' + tagIds?.map(z => `tagIds=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Associate a set of images with a set of tags.
		 * Post projects/{projectId}/images/tags
		 * @param {string} projectId The project id.
		 * @param {ImageTagCreateBatch} requestBody Batch of image tags. Limited to 128 tags per batch.
		 * @return {ImageTagCreateSummary} OK
		 */
		CreateImageTags(projectId: string, requestBody: ImageTagCreateBatch): Observable<ImageTagCreateSummary> {
			return this.http.post<ImageTagCreateSummary>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/images/tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove a set of tags from a set of images.
		 * Delete projects/{projectId}/images/tags
		 * @param {string} projectId The project id.
		 * @param {Array<string>} imageIds Image ids. Limited to 64 images.
		 * @param {Array<string>} tagIds Tags to be deleted from the specified images. Limited to 20 tags.
		 * @return {void} 
		 */
		DeleteImageTags(projectId: string, imageIds: Array<string>, tagIds: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/images/tags&' + imageIds.map(z => `imageIds=${encodeURIComponent(z)}`).join('&') + '&' + tagIds.map(z => `tagIds=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get untagged images for a given project iteration.
		 * This API supports batching and range selection. By default it will only return first 50 images matching images.
		 * Use the {take} and {skip} parameters to control how many images to return in a given batch.
		 * Get projects/{projectId}/images/untagged
		 * @param {string} projectId The project id.
		 * @param {string} iterationId The iteration id. Defaults to workspace.
		 * @param {GetTaggedImagesOrderBy} orderBy The ordering. Defaults to newest.
		 * @param {number} take Maximum number of images to return. Defaults to 50, limited to 256.
		 * @param {number} skip Number of images to skip before beginning the image batch. Defaults to 0.
		 * @return {Array<Image>} OK
		 */
		GetUntaggedImages(projectId: string, iterationId: string | null | undefined, orderBy: GetTaggedImagesOrderBy | null | undefined, take: number | null | undefined, skip: number | null | undefined): Observable<Array<Image>> {
			return this.http.get<Array<Image>>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/images/untagged&iterationId=' + (iterationId == null ? '' : encodeURIComponent(iterationId)) + '&orderBy=' + orderBy + '&take=' + take + '&skip=' + skip, {});
		}

		/**
		 * Gets the number of untagged images.
		 * This API returns the images which have no tags for a given project and optionally an iteration. If no iteration is specified the
		 * current workspace is used.
		 * Get projects/{projectId}/images/untagged/count
		 * @param {string} projectId The project id.
		 * @param {string} iterationId The iteration id. Defaults to workspace.
		 * @return {number} OK
		 */
		GetUntaggedImageCount(projectId: string, iterationId: string | null | undefined): Observable<number> {
			return this.http.get<number>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/images/untagged/count&iterationId=' + (iterationId == null ? '' : encodeURIComponent(iterationId)), {});
		}

		/**
		 * Add the provided images urls to the set of training images.
		 * This API accepts a batch of urls, and optionally tags, to create images. There is a limit of 64 images and 20 tags.
		 * Post projects/{projectId}/images/urls
		 * @param {string} projectId The project id.
		 * @param {ImageUrlCreateBatch} requestBody Image urls and tag ids. Limited to 64 images and 20 tags per batch.
		 * @return {ImageCreateSummary} OK
		 */
		CreateImagesFromUrls(projectId: string, requestBody: ImageUrlCreateBatch): Observable<ImageCreateSummary> {
			return this.http.post<ImageCreateSummary>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/images/urls', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get region proposals for an image. Returns empty array if no proposals are found.
		 * This API will get region proposals for an image along with confidences for the region. It returns an empty array if no proposals are found.
		 * Post projects/{projectId}/images/{imageId}/regionproposals
		 * @param {string} projectId The project id.
		 * @param {string} imageId The image id.
		 * @return {ImageRegionProposal} OK
		 */
		GetImageRegionProposals(projectId: string, imageId: string): Observable<ImageRegionProposal> {
			return this.http.post<ImageRegionProposal>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/images/' + (imageId == null ? '' : encodeURIComponent(imageId)) + '/regionproposals', null, {});
		}

		/**
		 * Get iterations for the project.
		 * Get projects/{projectId}/iterations
		 * @param {string} projectId The project id.
		 * @return {Array<Iteration>} OK
		 */
		GetIterations(projectId: string): Observable<Array<Iteration>> {
			return this.http.get<Array<Iteration>>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/iterations', {});
		}

		/**
		 * Get a specific iteration.
		 * Get projects/{projectId}/iterations/{iterationId}
		 * @param {string} projectId The id of the project the iteration belongs to.
		 * @param {string} iterationId The id of the iteration to get.
		 * @return {Iteration} OK
		 */
		GetIteration(projectId: string, iterationId: string): Observable<Iteration> {
			return this.http.get<Iteration>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/iterations/' + (iterationId == null ? '' : encodeURIComponent(iterationId)), {});
		}

		/**
		 * Delete a specific iteration of a project.
		 * Delete projects/{projectId}/iterations/{iterationId}
		 * @param {string} projectId The project id.
		 * @param {string} iterationId The iteration id.
		 * @return {void} 
		 */
		DeleteIteration(projectId: string, iterationId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/iterations/' + (iterationId == null ? '' : encodeURIComponent(iterationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a specific iteration.
		 * Patch projects/{projectId}/iterations/{iterationId}
		 * @param {string} projectId Project id.
		 * @param {string} iterationId Iteration id.
		 * @param {Iteration} requestBody The updated iteration model.
		 * @return {Iteration} OK
		 */
		UpdateIteration(projectId: string, iterationId: string, requestBody: Iteration): Observable<Iteration> {
			return this.http.patch<Iteration>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/iterations/' + (iterationId == null ? '' : encodeURIComponent(iterationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the list of exports for a specific iteration.
		 * Get projects/{projectId}/iterations/{iterationId}/export
		 * @param {string} projectId The project id.
		 * @param {string} iterationId The iteration id.
		 * @return {Array<Export>} OK
		 */
		GetExports(projectId: string, iterationId: string): Observable<Array<Export>> {
			return this.http.get<Array<Export>>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/iterations/' + (iterationId == null ? '' : encodeURIComponent(iterationId)) + '/export', {});
		}

		/**
		 * Export a trained iteration.
		 * Post projects/{projectId}/iterations/{iterationId}/export
		 * @param {string} projectId The project id.
		 * @param {string} iterationId The iteration id.
		 * @param {ExportPlatform} platform The target platform.
		 * @param {ExportFlavor} flavor The flavor of the target platform.
		 * @return {Export} OK
		 */
		ExportIteration(projectId: string, iterationId: string, platform: ExportPlatform, flavor: ExportFlavor | null | undefined): Observable<Export> {
			return this.http.post<Export>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/iterations/' + (iterationId == null ? '' : encodeURIComponent(iterationId)) + '/export&platform=' + platform + '&flavor=' + flavor, null, {});
		}

		/**
		 * Get detailed performance information about an iteration.
		 * Get projects/{projectId}/iterations/{iterationId}/performance
		 * @param {string} projectId The id of the project the iteration belongs to.
		 * @param {string} iterationId The id of the iteration to get.
		 * @param {number} threshold The threshold used to determine true predictions.
		 * @param {number} overlapThreshold If applicable, the bounding box overlap threshold used to determine true predictions.
		 * @return {IterationPerformance} OK
		 */
		GetIterationPerformance(projectId: string, iterationId: string, threshold: number | null | undefined, overlapThreshold: number | null | undefined): Observable<IterationPerformance> {
			return this.http.get<IterationPerformance>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/iterations/' + (iterationId == null ? '' : encodeURIComponent(iterationId)) + '/performance&threshold=' + threshold + '&overlapThreshold=' + overlapThreshold, {});
		}

		/**
		 * Get image with its prediction for a given project iteration.
		 * This API supports batching and range selection. By default it will only return first 50 images matching images.
		 * Use the {take} and {skip} parameters to control how many images to return in a given batch.
		 * The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
		 * "Cat" tags, then only images tagged with Dog and/or Cat will be returned
		 * Get projects/{projectId}/iterations/{iterationId}/performance/images
		 * @param {string} projectId The project id.
		 * @param {string} iterationId The iteration id. Defaults to workspace.
		 * @param {Array<string>} tagIds A list of tags ids to filter the images. Defaults to all tagged images when null. Limited to 20.
		 * @param {GetTaggedImagesOrderBy} orderBy The ordering. Defaults to newest.
		 * @param {number} take Maximum number of images to return. Defaults to 50, limited to 256.
		 * @param {number} skip Number of images to skip before beginning the image batch. Defaults to 0.
		 * @return {Array<ImagePerformance>} OK
		 */
		GetImagePerformances(projectId: string, iterationId: string, tagIds: Array<string> | null | undefined, orderBy: GetTaggedImagesOrderBy | null | undefined, take: number | null | undefined, skip: number | null | undefined): Observable<Array<ImagePerformance>> {
			return this.http.get<Array<ImagePerformance>>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/iterations/' + (iterationId == null ? '' : encodeURIComponent(iterationId)) + '/performance/images&' + tagIds?.map(z => `tagIds=${encodeURIComponent(z)}`).join('&') + '&orderBy=' + orderBy + '&take=' + take + '&skip=' + skip, {});
		}

		/**
		 * Gets the number of images tagged with the provided {tagIds} that have prediction results from
		 * training for the provided iteration {iterationId}.
		 * The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
		 * "Cat" tags, then only images tagged with Dog and/or Cat will be returned
		 * Get projects/{projectId}/iterations/{iterationId}/performance/images/count
		 * @param {string} projectId The project id.
		 * @param {string} iterationId The iteration id. Defaults to workspace.
		 * @param {Array<string>} tagIds A list of tags ids to filter the images to count. Defaults to all tags when null.
		 * @return {number} OK
		 */
		GetImagePerformanceCount(projectId: string, iterationId: string, tagIds: Array<string> | null | undefined): Observable<number> {
			return this.http.get<number>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/iterations/' + (iterationId == null ? '' : encodeURIComponent(iterationId)) + '/performance/images/count&' + tagIds?.map(z => `tagIds=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Publish a specific iteration.
		 * Post projects/{projectId}/iterations/{iterationId}/publish
		 * @param {string} projectId The project id.
		 * @param {string} iterationId The iteration id.
		 * @param {string} publishName The name to give the published iteration.
		 * @param {string} predictionId The id of the prediction resource to publish to.
		 * @return {boolean} OK
		 */
		PublishIteration(projectId: string, iterationId: string, publishName: string, predictionId: string): Observable<boolean> {
			return this.http.post<boolean>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/iterations/' + (iterationId == null ? '' : encodeURIComponent(iterationId)) + '/publish&publishName=' + (publishName == null ? '' : encodeURIComponent(publishName)) + '&predictionId=' + (predictionId == null ? '' : encodeURIComponent(predictionId)), null, {});
		}

		/**
		 * Unpublish a specific iteration.
		 * Delete projects/{projectId}/iterations/{iterationId}/publish
		 * @param {string} projectId The project id.
		 * @param {string} iterationId The iteration id.
		 * @return {void} 
		 */
		UnpublishIteration(projectId: string, iterationId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/iterations/' + (iterationId == null ? '' : encodeURIComponent(iterationId)) + '/publish', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a set of predicted images and their associated prediction results.
		 * Delete projects/{projectId}/predictions
		 * @param {string} projectId The project id.
		 * @param {Array<string>} ids The prediction ids. Limited to 64.
		 * @return {void} 
		 */
		DeletePrediction(projectId: string, ids: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/predictions&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get images that were sent to your prediction endpoint.
		 * Post projects/{projectId}/predictions/query
		 * @param {string} projectId The project id.
		 * @param {PredictionQueryToken} requestBody Parameters used to query the predictions. Limited to combining 2 tags.
		 * @return {PredictionQueryResult} OK
		 */
		QueryPredictions(projectId: string, requestBody: PredictionQueryToken): Observable<PredictionQueryResult> {
			return this.http.post<PredictionQueryResult>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/predictions/query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Quick test an image url.
		 * Post projects/{projectId}/quicktest/url
		 * @param {string} projectId The project to evaluate against.
		 * @param {string} iterationId Optional. Specifies the id of a particular iteration to evaluate against.
		 *             The default iteration for the project will be used when not specified.
		 * @param {boolean} store Optional. Specifies whether or not to store the result of this prediction. The default is true, to store.
		 * @param {ImageUrl} requestBody An ImageUrl that contains the url of the image to be evaluated.
		 * @return {ImagePrediction} OK
		 */
		QuickTestImageUrl(projectId: string, iterationId: string | null | undefined, store: boolean | null | undefined, requestBody: ImageUrl): Observable<ImagePrediction> {
			return this.http.post<ImagePrediction>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/quicktest/url&iterationId=' + (iterationId == null ? '' : encodeURIComponent(iterationId)) + '&store=' + store, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the tags for a given project and iteration.
		 * Get projects/{projectId}/tags
		 * @param {string} projectId The project id.
		 * @param {string} iterationId The iteration id. Defaults to workspace.
		 * @return {Array<Tag>} OK
		 */
		GetTags(projectId: string, iterationId: string | null | undefined): Observable<Array<Tag>> {
			return this.http.get<Array<Tag>>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/tags&iterationId=' + (iterationId == null ? '' : encodeURIComponent(iterationId)), {});
		}

		/**
		 * Create a tag for the project.
		 * Post projects/{projectId}/tags
		 * @param {string} projectId The project id.
		 * @param {string} name The tag name.
		 * @param {string} description Optional description for the tag.
		 * @param {TagType} type Optional type for the tag.
		 * @return {Tag} OK
		 */
		CreateTag(projectId: string, name: string, description: string | null | undefined, type: TagType | null | undefined): Observable<Tag> {
			return this.http.post<Tag>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/tags&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&type=' + type, null, {});
		}

		/**
		 * Get information about a specific tag.
		 * Get projects/{projectId}/tags/{tagId}
		 * @param {string} projectId The project this tag belongs to.
		 * @param {string} tagId The tag id.
		 * @param {string} iterationId The iteration to retrieve this tag from. Optional, defaults to current training set.
		 * @return {Tag} OK
		 */
		GetTag(projectId: string, tagId: string, iterationId: string | null | undefined): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/tags/' + (tagId == null ? '' : encodeURIComponent(tagId)) + '&iterationId=' + (iterationId == null ? '' : encodeURIComponent(iterationId)), {});
		}

		/**
		 * Delete a tag from the project.
		 * Delete projects/{projectId}/tags/{tagId}
		 * @param {string} projectId The project id.
		 * @param {string} tagId Id of the tag to be deleted.
		 * @return {void} 
		 */
		DeleteTag(projectId: string, tagId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/tags/' + (tagId == null ? '' : encodeURIComponent(tagId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a tag.
		 * Patch projects/{projectId}/tags/{tagId}
		 * @param {string} projectId The project id.
		 * @param {string} tagId The id of the target tag.
		 * @param {Tag} requestBody The updated tag model.
		 * @return {Tag} OK
		 */
		UpdateTag(projectId: string, tagId: string, requestBody: Tag): Observable<Tag> {
			return this.http.patch<Tag>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/tags/' + (tagId == null ? '' : encodeURIComponent(tagId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Suggest tags and regions for an array/batch of untagged images. Returns empty array if no tags are found.
		 * This API will get suggested tags and regions for an array/batch of untagged images along with confidences for the tags. It returns an empty array if no tags are found.
		 * There is a limit of 64 images in the batch.
		 * Post projects/{projectId}/tagsandregions/suggestions
		 * @param {string} projectId The project id.
		 * @param {string} iterationId IterationId to use for tag and region suggestion.
		 * @param {Array<string>} imageIds Array of image ids tag suggestion are needed for. Use GetUntaggedImages API to get imageIds.
		 * @return {Array<SuggestedTagAndRegion>} OK
		 */
		SuggestTagsAndRegions(projectId: string, iterationId: string, imageIds: Array<string>): Observable<Array<SuggestedTagAndRegion>> {
			return this.http.post<Array<SuggestedTagAndRegion>>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/tagsandregions/suggestions&iterationId=' + (iterationId == null ? '' : encodeURIComponent(iterationId)) + '&' + imageIds.map(z => `imageIds=${encodeURIComponent(z)}`).join('&'), null, {});
		}

		/**
		 * Queues project for training.
		 * Post projects/{projectId}/train
		 * @param {string} projectId The project id.
		 * @param {IterationTrainingType} trainingType The type of training to use to train the project (default: Regular).
		 * @param {number} reservedBudgetInHours The number of hours reserved as budget for training (if applicable).
		 * @param {boolean} forceTrain Whether to force train even if dataset and configuration does not change (default: false).
		 * @param {string} notificationEmailAddress The email address to send notification to when training finishes (default: null).
		 * @param {TrainingParameters} requestBody Additional training parameters passed in to control how the project is trained.
		 * @return {Iteration} OK
		 */
		TrainProject(projectId: string, trainingType: IterationTrainingType | null | undefined, reservedBudgetInHours: number | null | undefined, forceTrain: boolean | null | undefined, notificationEmailAddress: string | null | undefined, requestBody: TrainingParameters): Observable<Iteration> {
			return this.http.post<Iteration>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/train&trainingType=' + trainingType + '&reservedBudgetInHours=' + reservedBudgetInHours + '&forceTrain=' + forceTrain + '&notificationEmailAddress=' + (notificationEmailAddress == null ? '' : encodeURIComponent(notificationEmailAddress)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum GetTaggedImagesOrderBy { Newest = 'Newest', Oldest = 'Oldest' }

}

