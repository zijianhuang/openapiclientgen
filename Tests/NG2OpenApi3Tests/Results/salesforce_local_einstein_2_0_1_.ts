import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ApiUsage {
		endsAt?: Date | null;
		id?: string | null;
		licenseId?: string | null;
		object?: string | null;
		organizationId?: string | null;
		planData?: Array<PlanData>;
		predictionsMax?: number | null;
		predictionsUsed?: number | null;
		startsAt?: Date | null;
	}
	export interface ApiUsageFormProperties {
		endsAt: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		licenseId: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		organizationId: FormControl<string | null | undefined>,
		predictionsMax: FormControl<number | null | undefined>,
		predictionsUsed: FormControl<number | null | undefined>,
		startsAt: FormControl<Date | null | undefined>,
	}
	export function CreateApiUsageFormGroup() {
		return new FormGroup<ApiUsageFormProperties>({
			endsAt: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			licenseId: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined),
			predictionsMax: new FormControl<number | null | undefined>(undefined),
			predictionsUsed: new FormControl<number | null | undefined>(undefined),
			startsAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PlanData {
		amount?: number | null;
		plan?: PlanDataPlan | null;
		source?: PlanDataSource | null;
	}
	export interface PlanDataFormProperties {
		amount: FormControl<number | null | undefined>,
		plan: FormControl<PlanDataPlan | null | undefined>,
		source: FormControl<PlanDataSource | null | undefined>,
	}
	export function CreatePlanDataFormGroup() {
		return new FormGroup<PlanDataFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			plan: new FormControl<PlanDataPlan | null | undefined>(undefined),
			source: new FormControl<PlanDataSource | null | undefined>(undefined),
		});

	}

	export enum PlanDataPlan { STARTER = 'STARTER', SFDC_1M_EDITION = 'SFDC_1M_EDITION', BRONZE = 'BRONZE', SILVER = 'SILVER', GOLD = 'GOLD', DATASET_DOWNLOAD = 'DATASET_DOWNLOAD' }

	export enum PlanDataSource { SALESFORCE = 'SALESFORCE', HEROKU = 'HEROKU', SF_AUTO_PROVISION = 'SF_AUTO_PROVISION', SF_AUTO_PROVISION_BOUND = 'SF_AUTO_PROVISION_BOUND' }

	export interface ApiUsageList {
		data?: Array<ApiUsage>;
		object?: string | null;
	}
	export interface ApiUsageListFormProperties {
		object: FormControl<string | null | undefined>,
	}
	export function CreateApiUsageListFormGroup() {
		return new FormGroup<ApiUsageListFormProperties>({
			object: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains additional attributes related to the task parameter. If the task parameter is table, the row and column IDs for the detected text are returned. If the task parameter is contact, the detected entity tags will be returned. */
	export interface Attributes {
		cellLocation?: CellLocation;
		language?: string | null;
		pageNumber?: string | null;
		tag?: string | null;
		value?: EntityObject;
	}

	/** Contains additional attributes related to the task parameter. If the task parameter is table, the row and column IDs for the detected text are returned. If the task parameter is contact, the detected entity tags will be returned. */
	export interface AttributesFormProperties {
		language: FormControl<string | null | undefined>,
		pageNumber: FormControl<string | null | undefined>,
		tag: FormControl<string | null | undefined>,
	}
	export function CreateAttributesFormGroup() {
		return new FormGroup<AttributesFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
			pageNumber: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CellLocation {

		/** Index of the column that contains the detected text. */
		colIndex?: number | null;

		/** Index of the row that contains the detected text. */
		rowIndex?: number | null;
	}
	export interface CellLocationFormProperties {

		/** Index of the column that contains the detected text. */
		colIndex: FormControl<number | null | undefined>,

		/** Index of the row that contains the detected text. */
		rowIndex: FormControl<number | null | undefined>,
	}
	export function CreateCellLocationFormGroup() {
		return new FormGroup<CellLocationFormProperties>({
			colIndex: new FormControl<number | null | undefined>(undefined),
			rowIndex: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EntityObject {
		boundingBox?: BoundingBox;
		entity?: string | null;
		text?: string | null;
	}
	export interface EntityObjectFormProperties {
		entity: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateEntityObjectFormGroup() {
		return new FormGroup<EntityObjectFormProperties>({
			entity: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BoundingBox {

		/** X-coordinate of the left side of the bounding box. The origin of the coordinate system is the top-left of the image. Number of pixels from the left edge of the image. */
		maxX?: number | null;

		/** Y-coordinate of the top of the bounding box. Number of pixels from the top edge of the image. */
		maxY?: number | null;

		/** X-coordinate of the right side of the bounding box. Number of pixels from the left edge of the image. */
		minX?: number | null;

		/** Y-coordinate of the bottom of the bounding box. Number of pixels from the top edge of the image. */
		minY?: number | null;
	}
	export interface BoundingBoxFormProperties {

		/** X-coordinate of the left side of the bounding box. The origin of the coordinate system is the top-left of the image. Number of pixels from the left edge of the image. */
		maxX: FormControl<number | null | undefined>,

		/** Y-coordinate of the top of the bounding box. Number of pixels from the top edge of the image. */
		maxY: FormControl<number | null | undefined>,

		/** X-coordinate of the right side of the bounding box. Number of pixels from the left edge of the image. */
		minX: FormControl<number | null | undefined>,

		/** Y-coordinate of the bottom of the bounding box. Number of pixels from the top edge of the image. */
		minY: FormControl<number | null | undefined>,
	}
	export function CreateBoundingBoxFormGroup() {
		return new FormGroup<BoundingBoxFormProperties>({
			maxX: new FormControl<number | null | undefined>(undefined),
			maxY: new FormControl<number | null | undefined>(undefined),
			minX: new FormControl<number | null | undefined>(undefined),
			minY: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Dataset {
		available?: boolean | null;

		/** Date and time that the dataset was created. */
		createdAt?: Date | null;

		/** Required */
		id: number;

		/** Contains the labels array that contains all the labels for the dataset. */
		labelSummary?: LabelSummary;

		/** Dataset language. */
		language?: string | null;

		/** Required */
		name: string;

		/** Number of duplicate images. This number includes duplicates in the .zip file from which the dataset was created plus the number of duplicate images from subsequent PUT calls to add images to the dataset. */
		numOfDuplicates?: number | null;

		/** Object returned; in this case, dataset. */
		object?: string | null;
		statusMsg?: string | null;

		/** Total number of examples in the dataset. */
		totalExamples?: number | null;

		/** Total number of labels in the dataset. */
		totalLabels?: number | null;
		type?: string | null;
		updatedAt?: Date | null;
	}
	export interface DatasetFormProperties {
		available: FormControl<boolean | null | undefined>,

		/** Date and time that the dataset was created. */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		id: FormControl<number | null | undefined>,

		/** Dataset language. */
		language: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Number of duplicate images. This number includes duplicates in the .zip file from which the dataset was created plus the number of duplicate images from subsequent PUT calls to add images to the dataset. */
		numOfDuplicates: FormControl<number | null | undefined>,

		/** Object returned; in this case, dataset. */
		object: FormControl<string | null | undefined>,
		statusMsg: FormControl<string | null | undefined>,

		/** Total number of examples in the dataset. */
		totalExamples: FormControl<number | null | undefined>,

		/** Total number of labels in the dataset. */
		totalLabels: FormControl<number | null | undefined>,
		type: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDatasetFormGroup() {
		return new FormGroup<DatasetFormProperties>({
			available: new FormControl<boolean | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numOfDuplicates: new FormControl<number | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			statusMsg: new FormControl<string | null | undefined>(undefined),
			totalExamples: new FormControl<number | null | undefined>(undefined),
			totalLabels: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains the labels array that contains all the labels for the dataset. */
	export interface LabelSummary {
		labels?: Array<Label>;
	}

	/** Contains the labels array that contains all the labels for the dataset. */
	export interface LabelSummaryFormProperties {
	}
	export function CreateLabelSummaryFormGroup() {
		return new FormGroup<LabelSummaryFormProperties>({
		});

	}


	/** Contains information about the label with which the example is associated. */
	export interface Label {

		/**
		 * ID of the dataset that the label belongs to.
		 * Required
		 */
		datasetId: number;

		/** ID of the label. */
		id?: number | null;

		/**
		 * Name of the label.
		 * Required
		 */
		name: string;

		/** Number of examples that have the label. */
		numExamples?: number | null;
	}

	/** Contains information about the label with which the example is associated. */
	export interface LabelFormProperties {

		/**
		 * ID of the dataset that the label belongs to.
		 * Required
		 */
		datasetId: FormControl<number | null | undefined>,

		/** ID of the label. */
		id: FormControl<number | null | undefined>,

		/**
		 * Name of the label.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Number of examples that have the label. */
		numExamples: FormControl<number | null | undefined>,
	}
	export function CreateLabelFormGroup() {
		return new FormGroup<LabelFormProperties>({
			datasetId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numExamples: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DatasetList {
		data?: Array<Dataset>;
		object?: string | null;
	}
	export interface DatasetListFormProperties {
		object: FormControl<string | null | undefined>,
	}
	export function CreateDatasetListFormGroup() {
		return new FormGroup<DatasetListFormProperties>({
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletionResponse {
		deletedObjectId?: string | null;
		id?: string | null;
		message?: string | null;
		object?: string | null;
		organizationId?: string | null;
		progress?: number | null;
		status?: DeletionResponseStatus | null;
		type?: DeletionResponseType | null;
	}
	export interface DeletionResponseFormProperties {
		deletedObjectId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		organizationId: FormControl<string | null | undefined>,
		progress: FormControl<number | null | undefined>,
		status: FormControl<DeletionResponseStatus | null | undefined>,
		type: FormControl<DeletionResponseType | null | undefined>,
	}
	export function CreateDeletionResponseFormGroup() {
		return new FormGroup<DeletionResponseFormProperties>({
			deletedObjectId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined),
			progress: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<DeletionResponseStatus | null | undefined>(undefined),
			type: new FormControl<DeletionResponseType | null | undefined>(undefined),
		});

	}

	export enum DeletionResponseStatus { QUEUED = 'QUEUED', RUNNING = 'RUNNING', SUCCEEDED_WAITING_FOR_CACHE_REMOVAL = 'SUCCEEDED_WAITING_FOR_CACHE_REMOVAL', SUCCEEDED = 'SUCCEEDED', KILLED = 'KILLED', FAILED = 'FAILED', RETRY = 'RETRY' }

	export enum DeletionResponseType { DATASET = 'DATASET', MODEL = 'MODEL' }


	/** label */
	export interface DetectionResult {
		boundingBox?: BoundingBox;

		/** Probability lable for the input. */
		label?: string | null;

		/** Probability value for the input. Values are between 0�1. */
		probability?: number | null;
	}

	/** label */
	export interface DetectionResultFormProperties {

		/** Probability lable for the input. */
		label: FormControl<string | null | undefined>,

		/** Probability value for the input. Values are between 0�1. */
		probability: FormControl<number | null | undefined>,
	}
	export function CreateDetectionResultFormGroup() {
		return new FormGroup<DetectionResultFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			probability: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Example {

		/** Date and time that the example was created. */
		createdAt?: Date | null;

		/**
		 * ID of the example.
		 * Required
		 */
		id: number;

		/** Contains information about the label with which the example is associated. */
		label?: Label;

		/** URL of the image in the dataset. This is a temporary URL that expires in 30 minutes. This URL can be used to display images that were uploaded to a dataset in a UI. */
		location?: string | null;

		/**
		 * Name of the example.
		 * Required
		 */
		name: string;

		/** Object returned; in this case, example. */
		object?: string | null;
	}
	export interface ExampleFormProperties {

		/** Date and time that the example was created. */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * ID of the example.
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/** URL of the image in the dataset. This is a temporary URL that expires in 30 minutes. This URL can be used to display images that were uploaded to a dataset in a UI. */
		location: FormControl<string | null | undefined>,

		/**
		 * Name of the example.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Object returned; in this case, example. */
		object: FormControl<string | null | undefined>,
	}
	export function CreateExampleFormGroup() {
		return new FormGroup<ExampleFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExampleList {
		data?: Array<Example>;
		object?: string | null;
	}
	export interface ExampleListFormProperties {
		object: FormControl<string | null | undefined>,
	}
	export function CreateExampleListFormGroup() {
		return new FormGroup<ExampleListFormProperties>({
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GenerateAccessTokenResponse {
		access_token?: string | null;
		expires_in?: string | null;
		refresh_token?: string | null;
		token_type?: string | null;
	}
	export interface GenerateAccessTokenResponseFormProperties {
		access_token: FormControl<string | null | undefined>,
		expires_in: FormControl<string | null | undefined>,
		refresh_token: FormControl<string | null | undefined>,
		token_type: FormControl<string | null | undefined>,
	}
	export function CreateGenerateAccessTokenResponseFormGroup() {
		return new FormGroup<GenerateAccessTokenResponseFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined),
			expires_in: new FormControl<string | null | undefined>(undefined),
			refresh_token: new FormControl<string | null | undefined>(undefined),
			token_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImageClassificationRequest {

		/**
		 * ID of the model that makes the prediction.
		 * Required
		 */
		modelId: string;

		/**
		 * Number of probabilities to return.
		 * Minimum: 1
		 */
		numResults?: number | null;

		/** The image contained in a base64 string. */
		sampleBase64Content?: string | null;

		/** String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response. */
		sampleId?: string | null;

		/** URL of the image file. */
		sampleLocation?: string | null;
	}
	export interface ImageClassificationRequestFormProperties {

		/**
		 * ID of the model that makes the prediction.
		 * Required
		 */
		modelId: FormControl<string | null | undefined>,

		/**
		 * Number of probabilities to return.
		 * Minimum: 1
		 */
		numResults: FormControl<number | null | undefined>,

		/** The image contained in a base64 string. */
		sampleBase64Content: FormControl<string | null | undefined>,

		/** String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response. */
		sampleId: FormControl<string | null | undefined>,

		/** URL of the image file. */
		sampleLocation: FormControl<string | null | undefined>,
	}
	export function CreateImageClassificationRequestFormGroup() {
		return new FormGroup<ImageClassificationRequestFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			sampleBase64Content: new FormControl<string | null | undefined>(undefined),
			sampleId: new FormControl<string | null | undefined>(undefined),
			sampleLocation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImageClassificationResponse {
		object?: string | null;
		probabilities?: Array<LabelResult>;

		/** Value passed in when the prediction call was made. Returned only if the sampleId request parameter is provided. */
		sampleId?: string | null;
	}
	export interface ImageClassificationResponseFormProperties {
		object: FormControl<string | null | undefined>,

		/** Value passed in when the prediction call was made. Returned only if the sampleId request parameter is provided. */
		sampleId: FormControl<string | null | undefined>,
	}
	export function CreateImageClassificationResponseFormGroup() {
		return new FormGroup<ImageClassificationResponseFormProperties>({
			object: new FormControl<string | null | undefined>(undefined),
			sampleId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** label */
	export interface LabelResult {

		/** Probability lable for the input. */
		label?: string | null;

		/** Probability value for the input. Values are between 0�1. */
		probability?: number | null;
	}

	/** label */
	export interface LabelResultFormProperties {

		/** Probability lable for the input. */
		label: FormControl<string | null | undefined>,

		/** Probability value for the input. Values are between 0�1. */
		probability: FormControl<number | null | undefined>,
	}
	export function CreateLabelResultFormGroup() {
		return new FormGroup<LabelResultFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			probability: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface IntentPredictRequest {

		/**
		 * Text for which you want to return an intent prediction.
		 * Required
		 */
		document: string;

		/**
		 * ID of the model that makes the prediction. The model must have been created from a dataset with a type of text-sentiment.
		 * Required
		 */
		modelId: string;

		/**
		 * Number of probabilities to return.
		 * Minimum: 1
		 */
		numResults?: number | null;

		/** String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response. */
		sampleId?: string | null;
	}
	export interface IntentPredictRequestFormProperties {

		/**
		 * Text for which you want to return an intent prediction.
		 * Required
		 */
		document: FormControl<string | null | undefined>,

		/**
		 * ID of the model that makes the prediction. The model must have been created from a dataset with a type of text-sentiment.
		 * Required
		 */
		modelId: FormControl<string | null | undefined>,

		/**
		 * Number of probabilities to return.
		 * Minimum: 1
		 */
		numResults: FormControl<number | null | undefined>,

		/** String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response. */
		sampleId: FormControl<string | null | undefined>,
	}
	export function CreateIntentPredictRequestFormGroup() {
		return new FormGroup<IntentPredictRequestFormProperties>({
			document: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			sampleId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IntentPredictResponse {
		object?: string | null;
		probabilities?: Array<LabelResult>;

		/** Value passed in when the prediction call was made. Returned only if the sampleId request parameter is provided. */
		sampleId?: string | null;
	}
	export interface IntentPredictResponseFormProperties {
		object: FormControl<string | null | undefined>,

		/** Value passed in when the prediction call was made. Returned only if the sampleId request parameter is provided. */
		sampleId: FormControl<string | null | undefined>,
	}
	export function CreateIntentPredictResponseFormGroup() {
		return new FormGroup<IntentPredictResponseFormProperties>({
			object: new FormControl<string | null | undefined>(undefined),
			sampleId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LearningCurve {

		/** Epoch to which the metrics correspond. */
		epoch?: string | null;

		/** Prediction results for the set of data used to test the model during training. */
		epochResults?: string | null;

		/** Model metrics values. */
		metricsData?: string | null;

		/** Object returned; in this case, learningcurve. */
		object?: string | null;
	}
	export interface LearningCurveFormProperties {

		/** Epoch to which the metrics correspond. */
		epoch: FormControl<string | null | undefined>,

		/** Prediction results for the set of data used to test the model during training. */
		epochResults: FormControl<string | null | undefined>,

		/** Model metrics values. */
		metricsData: FormControl<string | null | undefined>,

		/** Object returned; in this case, learningcurve. */
		object: FormControl<string | null | undefined>,
	}
	export function CreateLearningCurveFormGroup() {
		return new FormGroup<LearningCurveFormProperties>({
			epoch: new FormControl<string | null | undefined>(undefined),
			epochResults: new FormControl<string | null | undefined>(undefined),
			metricsData: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LearningCurveList {
		data?: Array<LearningCurve>;
		object?: string | null;
	}
	export interface LearningCurveListFormProperties {
		object: FormControl<string | null | undefined>,
	}
	export function CreateLearningCurveListFormGroup() {
		return new FormGroup<LearningCurveListFormProperties>({
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Metrics {
		algorithm?: string | null;

		/** Date and time that the model was created. */
		createdAt?: Date | null;

		/** Model Id */
		id?: string | null;
		language?: string | null;

		/** Model metrics values. */
		metricsData?: string | null;
		object?: string | null;
	}
	export interface MetricsFormProperties {
		algorithm: FormControl<string | null | undefined>,

		/** Date and time that the model was created. */
		createdAt: FormControl<Date | null | undefined>,

		/** Model Id */
		id: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,

		/** Model metrics values. */
		metricsData: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateMetricsFormGroup() {
		return new FormGroup<MetricsFormProperties>({
			algorithm: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			metricsData: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Model {

		/** Algorithm used to create the model. Returned only when the modelType is image-detection. */
		algorithm?: string | null;

		/** Date and time that the model was created. */
		createdAt?: Date | null;

		/**
		 * ID of the dataset trained to create the model.
		 * Required
		 */
		datasetId: number;

		/**
		 * Not available yet
		 * Required
		 */
		datasetVersionId: number;

		/** Reason the dataset training failed. Returned only if the training status is FAILED. */
		failureMsg?: string | null;

		/** Model language inherited from the dataset language. For image datasets, default is N/A. For text datasets, default is en_US. */
		language?: string | null;

		/**
		 * ID of the model. Contains letters and numbers.
		 * Required
		 */
		modelId: string;

		/** Type of data from which the model was created. */
		modelType?: string | null;

		/**
		 * Name of the model.
		 * Required
		 */
		name: string;

		/** Object returned; in this case, model. */
		object?: string | null;

		/**
		 * How far the dataset training has progressed. Values are between 0�1.
		 * Required
		 */
		progress: number;

		/**
		 * Status of the model.
		 * Required
		 */
		status: ModelStatus;

		/** Date and time that the model was last updated. */
		updatedAt?: Date | null;
	}
	export interface ModelFormProperties {

		/** Algorithm used to create the model. Returned only when the modelType is image-detection. */
		algorithm: FormControl<string | null | undefined>,

		/** Date and time that the model was created. */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * ID of the dataset trained to create the model.
		 * Required
		 */
		datasetId: FormControl<number | null | undefined>,

		/**
		 * Not available yet
		 * Required
		 */
		datasetVersionId: FormControl<number | null | undefined>,

		/** Reason the dataset training failed. Returned only if the training status is FAILED. */
		failureMsg: FormControl<string | null | undefined>,

		/** Model language inherited from the dataset language. For image datasets, default is N/A. For text datasets, default is en_US. */
		language: FormControl<string | null | undefined>,

		/**
		 * ID of the model. Contains letters and numbers.
		 * Required
		 */
		modelId: FormControl<string | null | undefined>,

		/** Type of data from which the model was created. */
		modelType: FormControl<string | null | undefined>,

		/**
		 * Name of the model.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Object returned; in this case, model. */
		object: FormControl<string | null | undefined>,

		/**
		 * How far the dataset training has progressed. Values are between 0�1.
		 * Required
		 */
		progress: FormControl<number | null | undefined>,

		/**
		 * Status of the model.
		 * Required
		 */
		status: FormControl<ModelStatus | null | undefined>,

		/** Date and time that the model was last updated. */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateModelFormGroup() {
		return new FormGroup<ModelFormProperties>({
			algorithm: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			datasetId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			datasetVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			failureMsg: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			object: new FormControl<string | null | undefined>(undefined),
			progress: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ModelStatus | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ModelStatus { QUEUED = 'QUEUED', RUNNING = 'RUNNING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', KILLED = 'KILLED', FAILED_WITH_RETRIES = 'FAILED_WITH_RETRIES' }

	export interface ModelList {
		data?: Array<Model>;
		object?: string | null;
	}
	export interface ModelListFormProperties {
		object: FormControl<string | null | undefined>,
	}
	export function CreateModelListFormGroup() {
		return new FormGroup<ModelListFormProperties>({
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OCRPredictResponse {
		object?: string | null;
		probabilities?: Array<OCRResult>;

		/** Same value as request parameter. Returned only if the sampleId request parameter is provided. */
		sampleId?: string | null;

		/** Same value as request parameter. Returns text if the request parameter isn't supplied. */
		task?: string | null;
	}
	export interface OCRPredictResponseFormProperties {
		object: FormControl<string | null | undefined>,

		/** Same value as request parameter. Returned only if the sampleId request parameter is provided. */
		sampleId: FormControl<string | null | undefined>,

		/** Same value as request parameter. Returns text if the request parameter isn't supplied. */
		task: FormControl<string | null | undefined>,
	}
	export function CreateOCRPredictResponseFormGroup() {
		return new FormGroup<OCRPredictResponseFormProperties>({
			object: new FormControl<string | null | undefined>(undefined),
			sampleId: new FormControl<string | null | undefined>(undefined),
			task: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Array of probabilities for the prediction. */
	export interface OCRResult {

		/** Contains additional attributes related to the task parameter. If the task parameter is table, the row and column IDs for the detected text are returned. If the task parameter is contact, the detected entity tags will be returned. */
		attributes?: Attributes;
		boundingBox?: BoundingBox;

		/** Content of the detected text. */
		label?: string | null;

		/** Probability value for the input. Values are between 0�1. */
		probability?: number | null;
	}

	/** Array of probabilities for the prediction. */
	export interface OCRResultFormProperties {

		/** Content of the detected text. */
		label: FormControl<string | null | undefined>,

		/** Probability value for the input. Values are between 0�1. */
		probability: FormControl<number | null | undefined>,
	}
	export function CreateOCRResultFormGroup() {
		return new FormGroup<OCRResultFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			probability: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ObjectDetectionRequest {

		/**
		 * ID of the model that makes the detection.
		 * Required
		 */
		modelId: string;

		/** The image contained in a base64 string. */
		sampleBase64Content?: string | null;

		/** String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response. */
		sampleId?: string | null;

		/** URL of the image file. */
		sampleLocation?: string | null;
	}
	export interface ObjectDetectionRequestFormProperties {

		/**
		 * ID of the model that makes the detection.
		 * Required
		 */
		modelId: FormControl<string | null | undefined>,

		/** The image contained in a base64 string. */
		sampleBase64Content: FormControl<string | null | undefined>,

		/** String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response. */
		sampleId: FormControl<string | null | undefined>,

		/** URL of the image file. */
		sampleLocation: FormControl<string | null | undefined>,
	}
	export function CreateObjectDetectionRequestFormGroup() {
		return new FormGroup<ObjectDetectionRequestFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sampleBase64Content: new FormControl<string | null | undefined>(undefined),
			sampleId: new FormControl<string | null | undefined>(undefined),
			sampleLocation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ObjectDetectionResponse {
		object?: string | null;
		probabilities?: Array<DetectionResult>;

		/** Value passed in when the prediction call was made. Returned only if the sampleId request parameter is provided. */
		sampleId?: string | null;
	}
	export interface ObjectDetectionResponseFormProperties {
		object: FormControl<string | null | undefined>,

		/** Value passed in when the prediction call was made. Returned only if the sampleId request parameter is provided. */
		sampleId: FormControl<string | null | undefined>,
	}
	export function CreateObjectDetectionResponseFormGroup() {
		return new FormGroup<ObjectDetectionResponseFormProperties>({
			object: new FormControl<string | null | undefined>(undefined),
			sampleId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PredictionErrorResponse {
		message?: string | null;
		object?: string | null;
	}
	export interface PredictionErrorResponseFormProperties {
		message: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreatePredictionErrorResponseFormGroup() {
		return new FormGroup<PredictionErrorResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SentimentPredictRequest {

		/**
		 * Text for which you want to return a sentiment prediction.
		 * Required
		 */
		document: string;

		/**
		 * ID of the model that makes the prediction. The model must have been created from a dataset with a type of text-sentiment.
		 * Required
		 */
		modelId: string;

		/**
		 * Number of probabilities to return.
		 * Minimum: 1
		 */
		numResults?: number | null;

		/** String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response. */
		sampleId?: string | null;
	}
	export interface SentimentPredictRequestFormProperties {

		/**
		 * Text for which you want to return a sentiment prediction.
		 * Required
		 */
		document: FormControl<string | null | undefined>,

		/**
		 * ID of the model that makes the prediction. The model must have been created from a dataset with a type of text-sentiment.
		 * Required
		 */
		modelId: FormControl<string | null | undefined>,

		/**
		 * Number of probabilities to return.
		 * Minimum: 1
		 */
		numResults: FormControl<number | null | undefined>,

		/** String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response. */
		sampleId: FormControl<string | null | undefined>,
	}
	export function CreateSentimentPredictRequestFormGroup() {
		return new FormGroup<SentimentPredictRequestFormProperties>({
			document: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			sampleId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SentimentPredictResponse {
		object?: string | null;
		probabilities?: Array<LabelResult>;

		/** Value passed in when the prediction call was made. Returned only if the sampleId request parameter is provided. */
		sampleId?: string | null;
	}
	export interface SentimentPredictResponseFormProperties {
		object: FormControl<string | null | undefined>,

		/** Value passed in when the prediction call was made. Returned only if the sampleId request parameter is provided. */
		sampleId: FormControl<string | null | undefined>,
	}
	export function CreateSentimentPredictResponseFormGroup() {
		return new FormGroup<SentimentPredictResponseFormProperties>({
			object: new FormControl<string | null | undefined>(undefined),
			sampleId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TrainResponse {

		/** Algorithm used to create the model. Returned only when the modelType is image-detection. */
		algorithm?: string | null;

		/** Date and time that the model was created. */
		createdAt?: Date | null;

		/**
		 * ID of the dataset trained to create the model.
		 * Required
		 */
		datasetId: number;

		/**
		 * Not available yet
		 * Required
		 */
		datasetVersionId: number;

		/** Number of epochs used during training. */
		epochs?: number | null;

		/** Reason the dataset training failed. Returned only if the training status is FAILED. */
		failureMsg?: string | null;

		/**
		 * Model language inherited from the dataset language. For image datasets, default is N/A. For text datasets, default is en_US.
		 * Required
		 */
		language: string;

		/** Learning rate used during training. */
		learningRate?: number | null;

		/**
		 * ID of the model. Contains letters and numbers.
		 * Required
		 */
		modelId: string;

		/** Type of data from which the model was created. */
		modelType?: string | null;

		/**
		 * Name of the model.
		 * Required
		 */
		name: string;

		/** Object returned; in this case, training. */
		object?: string | null;

		/**
		 * How far the dataset training has progressed. Values are between 0�1.
		 * Required
		 */
		progress: number;

		/** Where the training job is in the queue. This field appears in the response only if the status is QUEUED. */
		queuePosition?: number | null;

		/**
		 * Status of the model.
		 * Required
		 */
		status: ModelStatus;

		/** Training parameters passed into the request. */
		trainParams?: string | null;

		/** Returns null when you train a dataset. Training statistics are returned when the status is SUCCEEDED or FAILED. */
		trainStats?: string | null;

		/** Date and time that the model was last updated. */
		updatedAt?: Date | null;
	}
	export interface TrainResponseFormProperties {

		/** Algorithm used to create the model. Returned only when the modelType is image-detection. */
		algorithm: FormControl<string | null | undefined>,

		/** Date and time that the model was created. */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * ID of the dataset trained to create the model.
		 * Required
		 */
		datasetId: FormControl<number | null | undefined>,

		/**
		 * Not available yet
		 * Required
		 */
		datasetVersionId: FormControl<number | null | undefined>,

		/** Number of epochs used during training. */
		epochs: FormControl<number | null | undefined>,

		/** Reason the dataset training failed. Returned only if the training status is FAILED. */
		failureMsg: FormControl<string | null | undefined>,

		/**
		 * Model language inherited from the dataset language. For image datasets, default is N/A. For text datasets, default is en_US.
		 * Required
		 */
		language: FormControl<string | null | undefined>,

		/** Learning rate used during training. */
		learningRate: FormControl<number | null | undefined>,

		/**
		 * ID of the model. Contains letters and numbers.
		 * Required
		 */
		modelId: FormControl<string | null | undefined>,

		/** Type of data from which the model was created. */
		modelType: FormControl<string | null | undefined>,

		/**
		 * Name of the model.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Object returned; in this case, training. */
		object: FormControl<string | null | undefined>,

		/**
		 * How far the dataset training has progressed. Values are between 0�1.
		 * Required
		 */
		progress: FormControl<number | null | undefined>,

		/** Where the training job is in the queue. This field appears in the response only if the status is QUEUED. */
		queuePosition: FormControl<number | null | undefined>,

		/**
		 * Status of the model.
		 * Required
		 */
		status: FormControl<ModelStatus | null | undefined>,

		/** Training parameters passed into the request. */
		trainParams: FormControl<string | null | undefined>,

		/** Returns null when you train a dataset. Training statistics are returned when the status is SUCCEEDED or FAILED. */
		trainStats: FormControl<string | null | undefined>,

		/** Date and time that the model was last updated. */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateTrainResponseFormGroup() {
		return new FormGroup<TrainResponseFormProperties>({
			algorithm: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			datasetId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			datasetVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			epochs: new FormControl<number | null | undefined>(undefined),
			failureMsg: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			learningRate: new FormControl<number | null | undefined>(undefined),
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			object: new FormControl<string | null | undefined>(undefined),
			progress: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			queuePosition: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<ModelStatus | null | undefined>(undefined, [Validators.required]),
			trainParams: new FormControl<string | null | undefined>(undefined),
			trainStats: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** JSON that contains parameters that specify how the model is created */
	export interface V2LanguageTrainParams {

		/** Lets you specify the ratio of data used to train the dataset and the data used to test the model. */
		trainSplitRatio?: number | null;

		/** Lets you specify that feedback examples are included in the data to be trained to create the model. */
		withFeedback?: boolean | null;

		/** Lets you specify that a global dataset is used in addition to the specified dataset to create the model. */
		withGlobalDatasetId?: number | null;
	}

	/** JSON that contains parameters that specify how the model is created */
	export interface V2LanguageTrainParamsFormProperties {

		/** Lets you specify the ratio of data used to train the dataset and the data used to test the model. */
		trainSplitRatio: FormControl<number | null | undefined>,

		/** Lets you specify that feedback examples are included in the data to be trained to create the model. */
		withFeedback: FormControl<boolean | null | undefined>,

		/** Lets you specify that a global dataset is used in addition to the specified dataset to create the model. */
		withGlobalDatasetId: FormControl<number | null | undefined>,
	}
	export function CreateV2LanguageTrainParamsFormGroup() {
		return new FormGroup<V2LanguageTrainParamsFormProperties>({
			trainSplitRatio: new FormControl<number | null | undefined>(undefined),
			withFeedback: new FormControl<boolean | null | undefined>(undefined),
			withGlobalDatasetId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** JSON that contains parameters that specify how the model is created */
	export interface V2VisionTrainParams {

		/** Lets you specify the ratio of data used to train the dataset and the data used to test the model. */
		trainSplitRatio?: number | null;

		/** Lets you specify that feedback examples are included in the data to be trained to create the model. */
		withFeedback?: boolean | null;

		/** Lets you specify that a global dataset is used in addition to the specified dataset to create the model. */
		withGlobalDatasetId?: number | null;
	}

	/** JSON that contains parameters that specify how the model is created */
	export interface V2VisionTrainParamsFormProperties {

		/** Lets you specify the ratio of data used to train the dataset and the data used to test the model. */
		trainSplitRatio: FormControl<number | null | undefined>,

		/** Lets you specify that feedback examples are included in the data to be trained to create the model. */
		withFeedback: FormControl<boolean | null | undefined>,

		/** Lets you specify that a global dataset is used in addition to the specified dataset to create the model. */
		withGlobalDatasetId: FormControl<number | null | undefined>,
	}
	export function CreateV2VisionTrainParamsFormGroup() {
		return new FormGroup<V2VisionTrainParamsFormProperties>({
			trainSplitRatio: new FormControl<number | null | undefined>(undefined),
			withFeedback: new FormControl<boolean | null | undefined>(undefined),
			withGlobalDatasetId: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get API Isage
		 * Returns prediction usage on a monthly basis for the current calendar month and future months. Each apiusage object in the response corresponds to a calendar month in your plan.
		 * Get v2/apiusage
		 * @return {ApiUsageList} api usage
		 */
		GetApiUsagePlansV2(): Observable<ApiUsageList> {
			return this.http.get<ApiUsageList>(this.baseUri + 'v2/apiusage', {});
		}

		/**
		 * Get All Datasets
		 * Returns a list of datasets and their labels that were created by the current user. The response is sorted by dataset ID.
		 * Get v2/language/datasets
		 * @param {string} offset Index of the dataset from which you want to start paging
		 * @param {string} count Number of datsets to return. Maximum valid value is 25. If you specify a number greater than 25, the call returns 25 datasets.
		 * @param {boolean} global If true, returns all global datasets. Global datasets are public datasets that Salesforce provides.
		 * @return {DatasetList} Success
		 */
		ListDatasets(offset: string | null | undefined, count: string | null | undefined, global: boolean | null | undefined): Observable<DatasetList> {
			return this.http.get<DatasetList>(this.baseUri + 'v2/language/datasets?offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&count=' + (count == null ? '' : encodeURIComponent(count)) + '&global=' + global, {});
		}

		/**
		 * Delete a Dataset
		 * Deletes the specified dataset and associated labels and examples.
		 * Delete v2/language/datasets/{datasetId}
		 * @param {string} datasetId Dataset Id
		 * @return {DeletionResponse} Success
		 */
		DeleteDataset(datasetId: string): Observable<DeletionResponse> {
			return this.http.delete<DeletionResponse>(this.baseUri + 'v2/language/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)), {});
		}

		/**
		 * Get a Dataset
		 * Returns a single dataset.
		 * Get v2/language/datasets/{datasetId}
		 * @param {string} datasetId Dataset Id
		 * @return {Dataset} Success
		 */
		GetDataset(datasetId: string): Observable<Dataset> {
			return this.http.get<Dataset>(this.baseUri + 'v2/language/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)), {});
		}

		/**
		 * Get All Examples
		 * Returns all the examples for the specified dataset,
		 * Get v2/language/datasets/{datasetId}/examples
		 * @param {string} datasetId Dataset Id
		 * @param {string} offset Index of the example from which you want to start paging.
		 * @param {string} count Number of examples to return.
		 * @param {GetExamplesSource} source return examples that were created in the dataset as feedback
		 * @return {ExampleList} Success
		 */
		GetExamples(datasetId: string, offset: string | null | undefined, count: string | null | undefined, source: GetExamplesSource | null | undefined): Observable<ExampleList> {
			return this.http.get<ExampleList>(this.baseUri + 'v2/language/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/examples&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&count=' + (count == null ? '' : encodeURIComponent(count)) + '&source=' + source, {});
		}

		/**
		 * Get All Models
		 * Returns all models for the specified dataset.
		 * Get v2/language/datasets/{datasetId}/models
		 * @param {string} offset Index of the model from which you want to start paging.
		 * @param {string} count Number of models to return.
		 * @param {string} datasetId Dataset Id
		 * @return {ModelList} Success
		 */
		GetTrainedModels(offset: string | null | undefined, count: string | null | undefined, datasetId: string): Observable<ModelList> {
			return this.http.get<ModelList>(this.baseUri + 'v2/language/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/models?offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&count=' + (count == null ? '' : encodeURIComponent(count)), {});
		}

		/**
		 * Get Deletion Status
		 * Returns the status of a language dataset or model deletion. When you delete a dataset or model, the deletion may not occur immediately. Use this call to find out when the deletion is complete.
		 * Get v2/language/deletion/{id}
		 * @param {string} id Deletion Id
		 * @return {DeletionResponse} deletion status
		 */
		Get(id: string): Observable<DeletionResponse> {
			return this.http.get<DeletionResponse>(this.baseUri + 'v2/language/deletion/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Get All Examples for Label
		 * Returns all the examples for the specified label. Returns both uploaded examples and feedback examples.
		 * Get v2/language/examples
		 * @param {string} labelId Label Id
		 * @param {string} offset Index of the example from which you want to start paging.
		 * @param {string} count Number of examples to return.
		 * @return {ExampleList} Success
		 */
		GetExamplesByLabel(labelId: string | null | undefined, offset: string | null | undefined, count: string | null | undefined): Observable<ExampleList> {
			return this.http.get<ExampleList>(this.baseUri + 'v2/language/examples?labelId=' + (labelId == null ? '' : encodeURIComponent(labelId)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&count=' + (count == null ? '' : encodeURIComponent(count)), {});
		}

		/**
		 * Prediction for Intent
		 * Returns an intent prediction for the given string.
		 * Post v2/language/intent
		 * @return {IntentPredictResponse} Prediction Result
		 */
		IntentMultipart(requestBody: IntentPredictRequest): Observable<IntentPredictResponse> {
			return this.http.post<IntentPredictResponse>(this.baseUri + 'v2/language/intent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a Model
		 * Deletes the specified model.
		 * Delete v2/language/models/{modelId}
		 * @param {string} modelId Model Id
		 * @return {void} 
		 */
		DeleteModel(modelId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/language/models/' + (modelId == null ? '' : encodeURIComponent(modelId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Model Metrics
		 * Returns the metrics for a model
		 * Get v2/language/models/{modelId}
		 * @param {string} modelId Model Id
		 * @return {Metrics} Model Metrics
		 */
		GetTrainedModelMetrics(modelId: string): Observable<Metrics> {
			return this.http.get<Metrics>(this.baseUri + 'v2/language/models/' + (modelId == null ? '' : encodeURIComponent(modelId)), {});
		}

		/**
		 * Get Model Learning Curve
		 * Returns the metrics for each epoch in a model.
		 * Get v2/language/models/{modelId}/lc
		 * @param {string} modelId Model Id
		 * @param {string} offset Index of the epoch from which you want to start paging
		 * @param {string} count Number of epoch to return. Maximum valid value is 25.
		 * @return {LearningCurveList} Learning Curve
		 */
		GetTrainedModelLearningCurve(modelId: string, offset: string | null | undefined, count: string | null | undefined): Observable<LearningCurveList> {
			return this.http.get<LearningCurveList>(this.baseUri + 'v2/language/models/' + (modelId == null ? '' : encodeURIComponent(modelId)) + '/lc&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&count=' + (count == null ? '' : encodeURIComponent(count)), {});
		}

		/**
		 * Prediction for Sentiment
		 * Returns a sentiment prediction for the given string.
		 * Post v2/language/sentiment
		 * @return {SentimentPredictResponse} Prediction Result
		 */
		SentimentMultipart(requestBody: SentimentPredictRequest): Observable<SentimentPredictResponse> {
			return this.http.post<SentimentPredictResponse>(this.baseUri + 'v2/language/sentiment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Training Status
		 * Returns the status of a model's training process. Use the progress field to determine how far the training has progressed. When training completes successfully, the status is SUCCEEDED and the progress is 1.
		 * Get v2/language/train/{modelId}
		 * @param {string} modelId Model Id
		 * @return {TrainResponse} Training Status
		 */
		GetTrainStatusAndProgress(modelId: string): Observable<TrainResponse> {
			return this.http.get<TrainResponse>(this.baseUri + 'v2/language/train/' + (modelId == null ? '' : encodeURIComponent(modelId)), {});
		}

		/**
		 * Delete a Refresh Token
		 * Delete v2/oauth2/tokens/{token}
		 * @param {string} token the token to revoke
		 * @return {void} 
		 */
		RevokeRefreshTokenV2(token: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/oauth2/tokens/' + (token == null ? '' : encodeURIComponent(token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get All Datasets
		 * Returns a list of datasets and their labels that were created by the current user. The response is sorted by dataset ID.
		 * Get v2/vision/datasets
		 * @param {string} offset Index of the dataset from which you want to start paging
		 * @param {string} count Number of datsets to return. Maximum valid value is 25. If you specify a number greater than 25, the call returns 25 datasets.
		 * @param {boolean} global If true, returns all global datasets. Global datasets are public datasets that Salesforce provides.
		 * @return {DatasetList} Success
		 */
		ListDatasets_1(offset: string | null | undefined, count: string | null | undefined, global: boolean | null | undefined): Observable<DatasetList> {
			return this.http.get<DatasetList>(this.baseUri + 'v2/vision/datasets?offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&count=' + (count == null ? '' : encodeURIComponent(count)) + '&global=' + global, {});
		}

		/**
		 * Delete a Dataset
		 * Deletes the specified dataset and associated labels and examples.
		 * Delete v2/vision/datasets/{datasetId}
		 * @param {string} datasetId Dataset Id
		 * @return {void} 
		 */
		DeleteDataset_1(datasetId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/vision/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Dataset
		 * Returns a single dataset.
		 * Get v2/vision/datasets/{datasetId}
		 * @param {string} datasetId Dataset Id
		 * @return {Dataset} Success
		 */
		GetDataset_1(datasetId: string): Observable<Dataset> {
			return this.http.get<Dataset>(this.baseUri + 'v2/vision/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)), {});
		}

		/**
		 * Get All Examples
		 * Returns all the examples for the specified dataset. By default, returns examples created by uploading them from a .zip file.
		 * Get v2/vision/datasets/{datasetId}/examples
		 * @param {string} datasetId Dataset Id
		 * @param {string} offset Index of the example from which you want to start paging.
		 * @param {string} count Number of examples to return.
		 * @param {GetExamplesSource} source return examples that were created in the dataset as feedback
		 * @return {ExampleList} Success
		 */
		GetExamples_1(datasetId: string, offset: string | null | undefined, count: string | null | undefined, source: GetExamplesSource | null | undefined): Observable<ExampleList> {
			return this.http.get<ExampleList>(this.baseUri + 'v2/vision/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/examples&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&count=' + (count == null ? '' : encodeURIComponent(count)) + '&source=' + source, {});
		}

		/**
		 * Get All Models
		 * Returns all models for the specified dataset.
		 * Get v2/vision/datasets/{datasetId}/models
		 * @param {string} offset Index of the model from which you want to start paging.
		 * @param {string} count Number of models to return.
		 * @param {string} datasetId Dataset Id
		 * @return {ModelList} Success
		 */
		GetTrainedModels_1(offset: string | null | undefined, count: string | null | undefined, datasetId: string): Observable<ModelList> {
			return this.http.get<ModelList>(this.baseUri + 'v2/vision/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/models?offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&count=' + (count == null ? '' : encodeURIComponent(count)), {});
		}

		/**
		 * Get Deletion Status
		 * Returns the status of an image dataset or model deletion. When you delete a dataset or model, the deletion may not occur immediately. Use this call to find out when the deletion is complete.
		 * Get v2/vision/deletion/{id}
		 * @param {string} id Deletion Id
		 * @return {DeletionResponse} deletion status
		 */
		Get_1(id: string): Observable<DeletionResponse> {
			return this.http.get<DeletionResponse>(this.baseUri + 'v2/vision/deletion/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Detection with Image File
		 * Returns labels, probabilities, and bounding box coordinates for items detected in the specified local image file.
		 * Post v2/vision/detect
		 * @return {ObjectDetectionResponse} Detection Result
		 */
		DetectMultipart(requestBody: ObjectDetectionRequest): Observable<ObjectDetectionResponse> {
			return this.http.post<ObjectDetectionResponse>(this.baseUri + 'v2/vision/detect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get All Examples for Label
		 * Returns all the examples for the specified label. Returns both uploaded examples and feedback examples.
		 * Get v2/vision/examples
		 * @param {string} labelId Label Id
		 * @param {string} offset Index of the example from which you want to start paging.
		 * @param {string} count Number of examples to return.
		 * @return {ExampleList} Success
		 */
		GetExamplesByLabel_1(labelId: string | null | undefined, offset: string | null | undefined, count: string | null | undefined): Observable<ExampleList> {
			return this.http.get<ExampleList>(this.baseUri + 'v2/vision/examples?labelId=' + (labelId == null ? '' : encodeURIComponent(labelId)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&count=' + (count == null ? '' : encodeURIComponent(count)), {});
		}

		/**
		 * Delete a Model
		 * Deletes the specified model.
		 * Delete v2/vision/models/{modelId}
		 * @return {void} 
		 */
		DeleteModel_1(modelId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/vision/models/' + (modelId == null ? '' : encodeURIComponent(modelId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Model Metrics
		 * Returns the metrics for a model
		 * Get v2/vision/models/{modelId}
		 * @return {Metrics} Model Metrics
		 */
		GetTrainedModelMetrics_1(modelId: string): Observable<Metrics> {
			return this.http.get<Metrics>(this.baseUri + 'v2/vision/models/' + (modelId == null ? '' : encodeURIComponent(modelId)), {});
		}

		/**
		 * Get Model Learning Curve
		 * Returns the metrics for each epoch in a model.
		 * Get v2/vision/models/{modelId}/lc
		 * @param {string} offset Index of the epoch from which you want to start paging
		 * @param {string} count Number of epoch to return. Maximum valid value is 25.
		 * @return {LearningCurveList} Learning Curve
		 */
		GetTrainedModelLearningCurve_1(modelId: string, offset: string | null | undefined, count: string | null | undefined): Observable<LearningCurveList> {
			return this.http.get<LearningCurveList>(this.baseUri + 'v2/vision/models/' + (modelId == null ? '' : encodeURIComponent(modelId)) + '/lc&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&count=' + (count == null ? '' : encodeURIComponent(count)), {});
		}

		/**
		 * Make Prediction
		 * Returns a prediction from an image or multi-label model for the specified image.
		 * Post v2/vision/predict
		 * @return {ImageClassificationResponse} Prediction Result
		 */
		PredictMultipart(requestBody: ImageClassificationRequest): Observable<ImageClassificationResponse> {
			return this.http.post<ImageClassificationResponse>(this.baseUri + 'v2/vision/predict', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Training Status
		 * Returns the status of a model's training process. Use the progress field to determine how far the training has progressed. When training completes successfully, the status is SUCCEEDED and the progress is 1.
		 * Get v2/vision/train/{modelId}
		 * @return {TrainResponse} Training Status
		 */
		GetTrainStatusAndProgress_1(modelId: string): Observable<TrainResponse> {
			return this.http.get<TrainResponse>(this.baseUri + 'v2/vision/train/' + (modelId == null ? '' : encodeURIComponent(modelId)), {});
		}
	}

	export enum GetExamplesSource { all = 'all', feedback = 'feedback', upload = 'upload' }

}

