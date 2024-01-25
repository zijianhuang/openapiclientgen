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

	export enum CustomVisionErrorCode { NoError = 0, BadRequest = 1, BadRequestExceededBatchSize = 2, BadRequestNotSupported = 3, BadRequestInvalidIds = 4, BadRequestProjectName = 5, BadRequestProjectNameNotUnique = 6, BadRequestProjectDescription = 7, BadRequestProjectUnknownDomain = 8, BadRequestProjectUnknownClassification = 9, BadRequestProjectUnsupportedDomainTypeChange = 10, BadRequestProjectUnsupportedExportPlatform = 11, BadRequestIterationName = 12, BadRequestIterationNameNotUnique = 13, BadRequestIterationDescription = 14, BadRequestIterationIsNotTrained = 15, BadRequestWorkspaceCannotBeModified = 16, BadRequestWorkspaceNotDeletable = 17, BadRequestTagName = 18, BadRequestTagNameNotUnique = 19, BadRequestTagDescription = 20, BadRequestTagType = 21, BadRequestMultipleNegativeTag = 22, BadRequestImageTags = 23, BadRequestImageRegions = 24, BadRequestNegativeAndRegularTagOnSameImage = 25, BadRequestRequiredParamIsNull = 26, BadRequestIterationIsPublished = 27, BadRequestInvalidPublishName = 28, BadRequestInvalidPublishTarget = 29, BadRequestUnpublishFailed = 30, BadRequestSubscriptionApi = 31, BadRequestExceedProjectLimit = 32, BadRequestExceedIterationPerProjectLimit = 33, BadRequestExceedTagPerProjectLimit = 34, BadRequestExceedTagPerImageLimit = 35, BadRequestExceededQuota = 36, BadRequestCannotMigrateProjectWithName = 37, BadRequestNotLimitedTrial = 38, BadRequestImageBatch = 39, BadRequestImageStream = 40, BadRequestImageUrl = 41, BadRequestImageFormat = 42, BadRequestImageSizeBytes = 43, BadRequestImageExceededCount = 44, BadRequestTrainingNotNeeded = 45, BadRequestTrainingNotNeededButTrainingPipelineUpdated = 46, BadRequestTrainingValidationFailed = 47, BadRequestClassificationTrainingValidationFailed = 48, BadRequestMultiClassClassificationTrainingValidationFailed = 49, BadRequestMultiLabelClassificationTrainingValidationFailed = 50, BadRequestDetectionTrainingValidationFailed = 51, BadRequestTrainingAlreadyInProgress = 52, BadRequestDetectionTrainingNotAllowNegativeTag = 53, BadRequestInvalidEmailAddress = 54, BadRequestDomainNotSupportedForAdvancedTraining = 55, BadRequestExportPlatformNotSupportedForAdvancedTraining = 56, BadRequestReservedBudgetInHoursNotEnoughForAdvancedTraining = 57, BadRequestExportValidationFailed = 58, BadRequestExportAlreadyInProgress = 59, BadRequestPredictionIdsMissing = 60, BadRequestPredictionIdsExceededCount = 61, BadRequestPredictionTagsExceededCount = 62, BadRequestPredictionResultsExceededCount = 63, BadRequestPredictionInvalidApplicationName = 64, BadRequestPredictionInvalidQueryParameters = 65, BadRequestInvalid = 66, UnsupportedMediaType = 67, Forbidden = 68, ForbiddenUser = 69, ForbiddenUserResource = 70, ForbiddenUserSignupDisabled = 71, ForbiddenUserSignupAllowanceExceeded = 72, ForbiddenUserDoesNotExist = 73, ForbiddenUserDisabled = 74, ForbiddenUserInsufficientCapability = 75, ForbiddenDRModeEnabled = 76, ForbiddenInvalid = 77, NotFound = 78, NotFoundProject = 79, NotFoundProjectDefaultIteration = 80, NotFoundIteration = 81, NotFoundIterationPerformance = 82, NotFoundTag = 83, NotFoundImage = 84, NotFoundDomain = 85, NotFoundApimSubscription = 86, NotFoundInvalid = 87, Conflict = 88, ConflictInvalid = 89, ErrorUnknown = 90, ErrorProjectInvalidWorkspace = 91, ErrorProjectInvalidPipelineConfiguration = 92, ErrorProjectInvalidDomain = 93, ErrorProjectTrainingRequestFailed = 94, ErrorProjectExportRequestFailed = 95, ErrorFeaturizationServiceUnavailable = 96, ErrorFeaturizationQueueTimeout = 97, ErrorFeaturizationInvalidFeaturizer = 98, ErrorFeaturizationAugmentationUnavailable = 99, ErrorFeaturizationUnrecognizedJob = 100, ErrorFeaturizationAugmentationError = 101, ErrorExporterInvalidPlatform = 102, ErrorExporterInvalidFeaturizer = 103, ErrorExporterInvalidClassifier = 104, ErrorPredictionServiceUnavailable = 105, ErrorPredictionModelNotFound = 106, ErrorPredictionModelNotCached = 107, ErrorPrediction = 108, ErrorPredictionStorage = 109, ErrorRegionProposal = 110, ErrorInvalid = 111 }


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

