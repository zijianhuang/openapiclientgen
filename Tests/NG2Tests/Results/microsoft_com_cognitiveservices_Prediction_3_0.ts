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
		 * Type: float
		 */
		height: number;

		/**
		 * Coordinate of the left boundary.
		 * Required
		 * Type: float
		 */
		left: number;

		/**
		 * Coordinate of the top boundary.
		 * Required
		 * Type: float
		 */
		top: number;

		/**
		 * Width.
		 * Required
		 * Type: float
		 */
		width: number;
	}

	/** Bounding box that defines a region of an image. */
	export interface BoundingBoxFormProperties {

		/**
		 * Height.
		 * Required
		 * Type: float
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Coordinate of the left boundary.
		 * Required
		 * Type: float
		 */
		left: FormControl<number | null | undefined>,

		/**
		 * Coordinate of the top boundary.
		 * Required
		 * Type: float
		 */
		top: FormControl<number | null | undefined>,

		/**
		 * Width.
		 * Required
		 * Type: float
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

	export enum CustomVisionErrorCode { NoError = 'NoError', BadRequest = 'BadRequest', BadRequestExceededBatchSize = 'BadRequestExceededBatchSize', BadRequestNotSupported = 'BadRequestNotSupported', BadRequestInvalidIds = 'BadRequestInvalidIds', BadRequestProjectName = 'BadRequestProjectName', BadRequestProjectNameNotUnique = 'BadRequestProjectNameNotUnique', BadRequestProjectDescription = 'BadRequestProjectDescription', BadRequestProjectUnknownDomain = 'BadRequestProjectUnknownDomain', BadRequestProjectUnknownClassification = 'BadRequestProjectUnknownClassification', BadRequestProjectUnsupportedDomainTypeChange = 'BadRequestProjectUnsupportedDomainTypeChange', BadRequestProjectUnsupportedExportPlatform = 'BadRequestProjectUnsupportedExportPlatform', BadRequestIterationName = 'BadRequestIterationName', BadRequestIterationNameNotUnique = 'BadRequestIterationNameNotUnique', BadRequestIterationDescription = 'BadRequestIterationDescription', BadRequestIterationIsNotTrained = 'BadRequestIterationIsNotTrained', BadRequestWorkspaceCannotBeModified = 'BadRequestWorkspaceCannotBeModified', BadRequestWorkspaceNotDeletable = 'BadRequestWorkspaceNotDeletable', BadRequestTagName = 'BadRequestTagName', BadRequestTagNameNotUnique = 'BadRequestTagNameNotUnique', BadRequestTagDescription = 'BadRequestTagDescription', BadRequestTagType = 'BadRequestTagType', BadRequestMultipleNegativeTag = 'BadRequestMultipleNegativeTag', BadRequestImageTags = 'BadRequestImageTags', BadRequestImageRegions = 'BadRequestImageRegions', BadRequestNegativeAndRegularTagOnSameImage = 'BadRequestNegativeAndRegularTagOnSameImage', BadRequestRequiredParamIsNull = 'BadRequestRequiredParamIsNull', BadRequestIterationIsPublished = 'BadRequestIterationIsPublished', BadRequestInvalidPublishName = 'BadRequestInvalidPublishName', BadRequestInvalidPublishTarget = 'BadRequestInvalidPublishTarget', BadRequestUnpublishFailed = 'BadRequestUnpublishFailed', BadRequestSubscriptionApi = 'BadRequestSubscriptionApi', BadRequestExceedProjectLimit = 'BadRequestExceedProjectLimit', BadRequestExceedIterationPerProjectLimit = 'BadRequestExceedIterationPerProjectLimit', BadRequestExceedTagPerProjectLimit = 'BadRequestExceedTagPerProjectLimit', BadRequestExceedTagPerImageLimit = 'BadRequestExceedTagPerImageLimit', BadRequestExceededQuota = 'BadRequestExceededQuota', BadRequestCannotMigrateProjectWithName = 'BadRequestCannotMigrateProjectWithName', BadRequestNotLimitedTrial = 'BadRequestNotLimitedTrial', BadRequestImageBatch = 'BadRequestImageBatch', BadRequestImageStream = 'BadRequestImageStream', BadRequestImageUrl = 'BadRequestImageUrl', BadRequestImageFormat = 'BadRequestImageFormat', BadRequestImageSizeBytes = 'BadRequestImageSizeBytes', BadRequestImageExceededCount = 'BadRequestImageExceededCount', BadRequestTrainingNotNeeded = 'BadRequestTrainingNotNeeded', BadRequestTrainingNotNeededButTrainingPipelineUpdated = 'BadRequestTrainingNotNeededButTrainingPipelineUpdated', BadRequestTrainingValidationFailed = 'BadRequestTrainingValidationFailed', BadRequestClassificationTrainingValidationFailed = 'BadRequestClassificationTrainingValidationFailed', BadRequestMultiClassClassificationTrainingValidationFailed = 'BadRequestMultiClassClassificationTrainingValidationFailed', BadRequestMultiLabelClassificationTrainingValidationFailed = 'BadRequestMultiLabelClassificationTrainingValidationFailed', BadRequestDetectionTrainingValidationFailed = 'BadRequestDetectionTrainingValidationFailed', BadRequestTrainingAlreadyInProgress = 'BadRequestTrainingAlreadyInProgress', BadRequestDetectionTrainingNotAllowNegativeTag = 'BadRequestDetectionTrainingNotAllowNegativeTag', BadRequestInvalidEmailAddress = 'BadRequestInvalidEmailAddress', BadRequestDomainNotSupportedForAdvancedTraining = 'BadRequestDomainNotSupportedForAdvancedTraining', BadRequestExportPlatformNotSupportedForAdvancedTraining = 'BadRequestExportPlatformNotSupportedForAdvancedTraining', BadRequestReservedBudgetInHoursNotEnoughForAdvancedTraining = 'BadRequestReservedBudgetInHoursNotEnoughForAdvancedTraining', BadRequestExportValidationFailed = 'BadRequestExportValidationFailed', BadRequestExportAlreadyInProgress = 'BadRequestExportAlreadyInProgress', BadRequestPredictionIdsMissing = 'BadRequestPredictionIdsMissing', BadRequestPredictionIdsExceededCount = 'BadRequestPredictionIdsExceededCount', BadRequestPredictionTagsExceededCount = 'BadRequestPredictionTagsExceededCount', BadRequestPredictionResultsExceededCount = 'BadRequestPredictionResultsExceededCount', BadRequestPredictionInvalidApplicationName = 'BadRequestPredictionInvalidApplicationName', BadRequestPredictionInvalidQueryParameters = 'BadRequestPredictionInvalidQueryParameters', BadRequestInvalid = 'BadRequestInvalid', UnsupportedMediaType = 'UnsupportedMediaType', Forbidden = 'Forbidden', ForbiddenUser = 'ForbiddenUser', ForbiddenUserResource = 'ForbiddenUserResource', ForbiddenUserSignupDisabled = 'ForbiddenUserSignupDisabled', ForbiddenUserSignupAllowanceExceeded = 'ForbiddenUserSignupAllowanceExceeded', ForbiddenUserDoesNotExist = 'ForbiddenUserDoesNotExist', ForbiddenUserDisabled = 'ForbiddenUserDisabled', ForbiddenUserInsufficientCapability = 'ForbiddenUserInsufficientCapability', ForbiddenDRModeEnabled = 'ForbiddenDRModeEnabled', ForbiddenInvalid = 'ForbiddenInvalid', NotFound = 'NotFound', NotFoundProject = 'NotFoundProject', NotFoundProjectDefaultIteration = 'NotFoundProjectDefaultIteration', NotFoundIteration = 'NotFoundIteration', NotFoundIterationPerformance = 'NotFoundIterationPerformance', NotFoundTag = 'NotFoundTag', NotFoundImage = 'NotFoundImage', NotFoundDomain = 'NotFoundDomain', NotFoundApimSubscription = 'NotFoundApimSubscription', NotFoundInvalid = 'NotFoundInvalid', Conflict = 'Conflict', ConflictInvalid = 'ConflictInvalid', ErrorUnknown = 'ErrorUnknown', ErrorProjectInvalidWorkspace = 'ErrorProjectInvalidWorkspace', ErrorProjectInvalidPipelineConfiguration = 'ErrorProjectInvalidPipelineConfiguration', ErrorProjectInvalidDomain = 'ErrorProjectInvalidDomain', ErrorProjectTrainingRequestFailed = 'ErrorProjectTrainingRequestFailed', ErrorProjectExportRequestFailed = 'ErrorProjectExportRequestFailed', ErrorFeaturizationServiceUnavailable = 'ErrorFeaturizationServiceUnavailable', ErrorFeaturizationQueueTimeout = 'ErrorFeaturizationQueueTimeout', ErrorFeaturizationInvalidFeaturizer = 'ErrorFeaturizationInvalidFeaturizer', ErrorFeaturizationAugmentationUnavailable = 'ErrorFeaturizationAugmentationUnavailable', ErrorFeaturizationUnrecognizedJob = 'ErrorFeaturizationUnrecognizedJob', ErrorFeaturizationAugmentationError = 'ErrorFeaturizationAugmentationError', ErrorExporterInvalidPlatform = 'ErrorExporterInvalidPlatform', ErrorExporterInvalidFeaturizer = 'ErrorExporterInvalidFeaturizer', ErrorExporterInvalidClassifier = 'ErrorExporterInvalidClassifier', ErrorPredictionServiceUnavailable = 'ErrorPredictionServiceUnavailable', ErrorPredictionModelNotFound = 'ErrorPredictionModelNotFound', ErrorPredictionModelNotCached = 'ErrorPredictionModelNotCached', ErrorPrediction = 'ErrorPrediction', ErrorPredictionStorage = 'ErrorPredictionStorage', ErrorRegionProposal = 'ErrorRegionProposal', ErrorInvalid = 'ErrorInvalid' }


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


	/** Prediction result. */
	export interface Prediction {

		/** Bounding box that defines a region of an image. */
		boundingBox?: BoundingBox;

		/**
		 * Probability of the tag.
		 * Type: float
		 */
		probability?: number | null;

		/** Id of the predicted tag. */
		tagId?: string | null;

		/** Name of the predicted tag. */
		tagName?: string | null;
	}

	/** Prediction result. */
	export interface PredictionFormProperties {

		/**
		 * Probability of the tag.
		 * Type: float
		 */
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Classify an image url and saves the result.
		 * Post {projectId}/classify/iterations/{publishedName}/url
		 * @param {string} projectId The project id.
		 * @param {string} publishedName Specifies the name of the model to evaluate against.
		 * @param {string} application Optional. Specifies the name of application using the endpoint.
		 * @param {ImageUrl} requestBody An ImageUrl that contains the url of the image to be evaluated.
		 * @return {ImagePrediction} OK
		 */
		ClassifyImageUrl(projectId: string, publishedName: string, application: string | null | undefined, requestBody: ImageUrl): Observable<ImagePrediction> {
			return this.http.post<ImagePrediction>(this.baseUri + (projectId == null ? '' : encodeURIComponent(projectId)) + '/classify/iterations/' + (publishedName == null ? '' : encodeURIComponent(publishedName)) + '/url&application=' + (application == null ? '' : encodeURIComponent(application)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Classify an image url without saving the result.
		 * Post {projectId}/classify/iterations/{publishedName}/url/nostore
		 * @param {string} projectId The project id.
		 * @param {string} publishedName Specifies the name of the model to evaluate against.
		 * @param {string} application Optional. Specifies the name of application using the endpoint.
		 * @param {ImageUrl} requestBody An {Iris.Web.Api.Models.ImageUrl} that contains the url of the image to be evaluated.
		 * @return {ImagePrediction} OK
		 */
		ClassifyImageUrlWithNoStore(projectId: string, publishedName: string, application: string | null | undefined, requestBody: ImageUrl): Observable<ImagePrediction> {
			return this.http.post<ImagePrediction>(this.baseUri + (projectId == null ? '' : encodeURIComponent(projectId)) + '/classify/iterations/' + (publishedName == null ? '' : encodeURIComponent(publishedName)) + '/url/nostore&application=' + (application == null ? '' : encodeURIComponent(application)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Detect objects in an image url and saves the result.
		 * Post {projectId}/detect/iterations/{publishedName}/url
		 * @param {string} projectId The project id.
		 * @param {string} publishedName Specifies the name of the model to evaluate against.
		 * @param {string} application Optional. Specifies the name of application using the endpoint.
		 * @param {ImageUrl} requestBody An ImageUrl that contains the url of the image to be evaluated.
		 * @return {ImagePrediction} OK
		 */
		DetectImageUrl(projectId: string, publishedName: string, application: string | null | undefined, requestBody: ImageUrl): Observable<ImagePrediction> {
			return this.http.post<ImagePrediction>(this.baseUri + (projectId == null ? '' : encodeURIComponent(projectId)) + '/detect/iterations/' + (publishedName == null ? '' : encodeURIComponent(publishedName)) + '/url&application=' + (application == null ? '' : encodeURIComponent(application)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Detect objects in an image url without saving the result.
		 * Post {projectId}/detect/iterations/{publishedName}/url/nostore
		 * @param {string} projectId The project id.
		 * @param {string} publishedName Specifies the name of the model to evaluate against.
		 * @param {string} application Optional. Specifies the name of application using the endpoint.
		 * @param {ImageUrl} requestBody An {Iris.Web.Api.Models.ImageUrl} that contains the url of the image to be evaluated.
		 * @return {ImagePrediction} OK
		 */
		DetectImageUrlWithNoStore(projectId: string, publishedName: string, application: string | null | undefined, requestBody: ImageUrl): Observable<ImagePrediction> {
			return this.http.post<ImagePrediction>(this.baseUri + (projectId == null ? '' : encodeURIComponent(projectId)) + '/detect/iterations/' + (publishedName == null ? '' : encodeURIComponent(publishedName)) + '/url/nostore&application=' + (application == null ? '' : encodeURIComponent(application)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

