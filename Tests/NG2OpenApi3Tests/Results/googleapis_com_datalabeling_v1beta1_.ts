import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Metadata of a CreateInstruction operation. */
	export interface GoogleCloudDatalabelingV1alpha1CreateInstructionMetadata {

		/** Timestamp when create instruction request was created. */
		createTime?: string | null;

		/** The name of the created Instruction. projects/{project_id}/instructions/{instruction_id} */
		instruction?: string | null;

		/** Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
		partialFailures?: Array<GoogleRpcStatus>;
	}

	/** Metadata of a CreateInstruction operation. */
	export interface GoogleCloudDatalabelingV1alpha1CreateInstructionMetadataFormProperties {

		/** Timestamp when create instruction request was created. */
		createTime: FormControl<string | null | undefined>,

		/** The name of the created Instruction. projects/{project_id}/instructions/{instruction_id} */
		instruction: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1alpha1CreateInstructionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1alpha1CreateInstructionMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			instruction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatus {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleRpcStatusFormGroup() {
		return new FormGroup<GoogleRpcStatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata of an ExportData operation. */
	export interface GoogleCloudDatalabelingV1alpha1ExportDataOperationMetadata {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset?: string | null;

		/** Output only. Timestamp when export dataset request was created. */
		createTime?: string | null;

		/** Output only. The name of dataset to be exported. "projects/datasets/*" */
		dataset?: string | null;

		/** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
		partialFailures?: Array<GoogleRpcStatus>;
	}

	/** Metadata of an ExportData operation. */
	export interface GoogleCloudDatalabelingV1alpha1ExportDataOperationMetadataFormProperties {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset: FormControl<string | null | undefined>,

		/** Output only. Timestamp when export dataset request was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The name of dataset to be exported. "projects/datasets/*" */
		dataset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1alpha1ExportDataOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1alpha1ExportDataOperationMetadataFormProperties>({
			annotatedDataset: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			dataset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response used for ExportDataset longrunning operation. */
	export interface GoogleCloudDatalabelingV1alpha1ExportDataOperationResponse {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset?: string | null;

		/** Ouptut only. The name of dataset. "projects/datasets/*" */
		dataset?: string | null;

		/**
		 * Output only. Number of examples exported successfully.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exportCount?: number | null;

		/** Statistics about annotation specs. */
		labelStats?: GoogleCloudDatalabelingV1alpha1LabelStats;

		/** The configuration of output data. */
		outputConfig?: GoogleCloudDatalabelingV1alpha1OutputConfig;

		/**
		 * Output only. Total number of examples requested to export
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount?: number | null;
	}

	/** Response used for ExportDataset longrunning operation. */
	export interface GoogleCloudDatalabelingV1alpha1ExportDataOperationResponseFormProperties {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset: FormControl<string | null | undefined>,

		/** Ouptut only. The name of dataset. "projects/datasets/*" */
		dataset: FormControl<string | null | undefined>,

		/**
		 * Output only. Number of examples exported successfully.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exportCount: FormControl<number | null | undefined>,

		/**
		 * Output only. Total number of examples requested to export
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1alpha1ExportDataOperationResponseFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1alpha1ExportDataOperationResponseFormProperties>({
			annotatedDataset: new FormControl<string | null | undefined>(undefined),
			dataset: new FormControl<string | null | undefined>(undefined),
			exportCount: new FormControl<number | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Statistics about annotation specs. */
	export interface GoogleCloudDatalabelingV1alpha1LabelStats {

		/** Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations. */
		exampleCount?: {[id: string]: string };
	}

	/** Statistics about annotation specs. */
	export interface GoogleCloudDatalabelingV1alpha1LabelStatsFormProperties {

		/** Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations. */
		exampleCount: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1alpha1LabelStatsFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1alpha1LabelStatsFormProperties>({
			exampleCount: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The configuration of output data. */
	export interface GoogleCloudDatalabelingV1alpha1OutputConfig {

		/** Export destination of the data.Only gcs path is allowed in output_uri. */
		gcsDestination?: GoogleCloudDatalabelingV1alpha1GcsDestination;

		/** Export folder destination of the data. */
		gcsFolderDestination?: GoogleCloudDatalabelingV1alpha1GcsFolderDestination;
	}

	/** The configuration of output data. */
	export interface GoogleCloudDatalabelingV1alpha1OutputConfigFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1alpha1OutputConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1alpha1OutputConfigFormProperties>({
		});

	}


	/** Export destination of the data.Only gcs path is allowed in output_uri. */
	export interface GoogleCloudDatalabelingV1alpha1GcsDestination {

		/** Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported. */
		mimeType?: string | null;

		/** Required. The output uri of destination file. */
		outputUri?: string | null;
	}

	/** Export destination of the data.Only gcs path is allowed in output_uri. */
	export interface GoogleCloudDatalabelingV1alpha1GcsDestinationFormProperties {

		/** Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported. */
		mimeType: FormControl<string | null | undefined>,

		/** Required. The output uri of destination file. */
		outputUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1alpha1GcsDestinationFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1alpha1GcsDestinationFormProperties>({
			mimeType: new FormControl<string | null | undefined>(undefined),
			outputUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Export folder destination of the data. */
	export interface GoogleCloudDatalabelingV1alpha1GcsFolderDestination {

		/** Required. Cloud Storage directory to export data to. */
		outputFolderUri?: string | null;
	}

	/** Export folder destination of the data. */
	export interface GoogleCloudDatalabelingV1alpha1GcsFolderDestinationFormProperties {

		/** Required. Cloud Storage directory to export data to. */
		outputFolderUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1alpha1GcsFolderDestinationFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1alpha1GcsFolderDestinationFormProperties>({
			outputFolderUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for how human labeling task should be done. */
	export interface GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig {

		/** Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long. */
		annotatedDatasetDescription?: string | null;

		/** Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters . */
		annotatedDatasetDisplayName?: string | null;

		/** Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/ */
		contributorEmails?: Array<string>;

		/** Required. Instruction resource name. */
		instruction?: string | null;

		/** Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128}`. */
		labelGroup?: string | null;

		/** Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification. */
		languageCode?: string | null;

		/** Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds. */
		questionDuration?: string | null;

		/**
		 * Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replicaCount?: number | null;

		/** Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent. */
		userEmailAddress?: string | null;
	}

	/** Configuration for how human labeling task should be done. */
	export interface GoogleCloudDatalabelingV1alpha1HumanAnnotationConfigFormProperties {

		/** Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long. */
		annotatedDatasetDescription: FormControl<string | null | undefined>,

		/** Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters . */
		annotatedDatasetDisplayName: FormControl<string | null | undefined>,

		/** Required. Instruction resource name. */
		instruction: FormControl<string | null | undefined>,

		/** Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128}`. */
		labelGroup: FormControl<string | null | undefined>,

		/** Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification. */
		languageCode: FormControl<string | null | undefined>,

		/** Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds. */
		questionDuration: FormControl<string | null | undefined>,

		/**
		 * Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replicaCount: FormControl<number | null | undefined>,

		/** Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent. */
		userEmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1alpha1HumanAnnotationConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1alpha1HumanAnnotationConfigFormProperties>({
			annotatedDatasetDescription: new FormControl<string | null | undefined>(undefined),
			annotatedDatasetDisplayName: new FormControl<string | null | undefined>(undefined),
			instruction: new FormControl<string | null | undefined>(undefined),
			labelGroup: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			questionDuration: new FormControl<string | null | undefined>(undefined),
			replicaCount: new FormControl<number | null | undefined>(undefined),
			userEmailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata of an ImportData operation. */
	export interface GoogleCloudDatalabelingV1alpha1ImportDataOperationMetadata {

		/** Output only. Timestamp when import dataset request was created. */
		createTime?: string | null;

		/** Output only. The name of imported dataset. "projects/datasets/*" */
		dataset?: string | null;

		/** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
		partialFailures?: Array<GoogleRpcStatus>;
	}

	/** Metadata of an ImportData operation. */
	export interface GoogleCloudDatalabelingV1alpha1ImportDataOperationMetadataFormProperties {

		/** Output only. Timestamp when import dataset request was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The name of imported dataset. "projects/datasets/*" */
		dataset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1alpha1ImportDataOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1alpha1ImportDataOperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			dataset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response used for ImportData longrunning operation. */
	export interface GoogleCloudDatalabelingV1alpha1ImportDataOperationResponse {

		/** Ouptut only. The name of imported dataset. */
		dataset?: string | null;

		/**
		 * Output only. Number of examples imported successfully.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		importCount?: number | null;

		/**
		 * Output only. Total number of examples requested to import
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount?: number | null;
	}

	/** Response used for ImportData longrunning operation. */
	export interface GoogleCloudDatalabelingV1alpha1ImportDataOperationResponseFormProperties {

		/** Ouptut only. The name of imported dataset. */
		dataset: FormControl<string | null | undefined>,

		/**
		 * Output only. Number of examples imported successfully.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		importCount: FormControl<number | null | undefined>,

		/**
		 * Output only. Total number of examples requested to import
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1alpha1ImportDataOperationResponseFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1alpha1ImportDataOperationResponseFormProperties>({
			dataset: new FormControl<string | null | undefined>(undefined),
			importCount: new FormControl<number | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details of a LabelImageBoundingBox operation metadata. */
	export interface GoogleCloudDatalabelingV1alpha1LabelImageBoundingBoxOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelImageBoundingBox operation metadata. */
	export interface GoogleCloudDatalabelingV1alpha1LabelImageBoundingBoxOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1alpha1LabelImageBoundingBoxOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1alpha1LabelImageBoundingBoxOperationMetadataFormProperties>({
		});

	}


	/** Details of LabelImageBoundingPoly operation metadata. */
	export interface GoogleCloudDatalabelingV1alpha1LabelImageBoundingPolyOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
	}

	/** Details of LabelImageBoundingPoly operation metadata. */
	export interface GoogleCloudDatalabelingV1alpha1LabelImageBoundingPolyOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1alpha1LabelImageBoundingPolyOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1alpha1LabelImageBoundingPolyOperationMetadataFormProperties>({
		});

	}


	/** Metadata of a LabelImageClassification operation. */
	export interface GoogleCloudDatalabelingV1alpha1LabelImageClassificationOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
	}

	/** Metadata of a LabelImageClassification operation. */
	export interface GoogleCloudDatalabelingV1alpha1LabelImageClassificationOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1alpha1LabelImageClassificationOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1alpha1LabelImageClassificationOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelImageOrientedBoundingBox operation metadata. */
	export interface GoogleCloudDatalabelingV1alpha1LabelImageOrientedBoundingBoxOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelImageOrientedBoundingBox operation metadata. */
	export interface GoogleCloudDatalabelingV1alpha1LabelImageOrientedBoundingBoxOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1alpha1LabelImageOrientedBoundingBoxOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1alpha1LabelImageOrientedBoundingBoxOperationMetadataFormProperties>({
		});

	}


	/** Details of LabelImagePolyline operation metadata. */
	export interface GoogleCloudDatalabelingV1alpha1LabelImagePolylineOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
	}

	/** Details of LabelImagePolyline operation metadata. */
	export interface GoogleCloudDatalabelingV1alpha1LabelImagePolylineOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1alpha1LabelImagePolylineOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1alpha1LabelImagePolylineOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelImageSegmentation operation metadata. */
	export interface GoogleCloudDatalabelingV1alpha1LabelImageSegmentationOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelImageSegmentation operation metadata. */
	export interface GoogleCloudDatalabelingV1alpha1LabelImageSegmentationOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1alpha1LabelImageSegmentationOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1alpha1LabelImageSegmentationOperationMetadataFormProperties>({
		});

	}


	/** Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23 */
	export interface GoogleCloudDatalabelingV1alpha1LabelOperationMetadata {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset?: string | null;

		/** Output only. Timestamp when labeling request was created. */
		createTime?: string | null;

		/** Output only. The name of dataset to be labeled. "projects/datasets/*" */
		dataset?: string | null;

		/** Details of a LabelImageBoundingBox operation metadata. */
		imageBoundingBoxDetails?: GoogleCloudDatalabelingV1alpha1LabelImageBoundingBoxOperationMetadata;

		/** Details of LabelImageBoundingPoly operation metadata. */
		imageBoundingPolyDetails?: GoogleCloudDatalabelingV1alpha1LabelImageBoundingPolyOperationMetadata;

		/** Metadata of a LabelImageClassification operation. */
		imageClassificationDetails?: GoogleCloudDatalabelingV1alpha1LabelImageClassificationOperationMetadata;

		/** Details of a LabelImageOrientedBoundingBox operation metadata. */
		imageOrientedBoundingBoxDetails?: GoogleCloudDatalabelingV1alpha1LabelImageOrientedBoundingBoxOperationMetadata;

		/** Details of LabelImagePolyline operation metadata. */
		imagePolylineDetails?: GoogleCloudDatalabelingV1alpha1LabelImagePolylineOperationMetadata;

		/** Details of a LabelImageSegmentation operation metadata. */
		imageSegmentationDetails?: GoogleCloudDatalabelingV1alpha1LabelImageSegmentationOperationMetadata;

		/** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
		partialFailures?: Array<GoogleRpcStatus>;

		/**
		 * Output only. Progress of label operation. Range: [0, 100].
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		progressPercent?: number | null;

		/** Details of a LabelTextClassification operation metadata. */
		textClassificationDetails?: GoogleCloudDatalabelingV1alpha1LabelTextClassificationOperationMetadata;

		/** Details of a LabelTextEntityExtraction operation metadata. */
		textEntityExtractionDetails?: GoogleCloudDatalabelingV1alpha1LabelTextEntityExtractionOperationMetadata;

		/** Details of a LabelVideoClassification operation metadata. */
		videoClassificationDetails?: GoogleCloudDatalabelingV1alpha1LabelVideoClassificationOperationMetadata;

		/** Details of a LabelVideoEvent operation metadata. */
		videoEventDetails?: GoogleCloudDatalabelingV1alpha1LabelVideoEventOperationMetadata;

		/** Details of a LabelVideoObjectDetection operation metadata. */
		videoObjectDetectionDetails?: GoogleCloudDatalabelingV1alpha1LabelVideoObjectDetectionOperationMetadata;

		/** Details of a LabelVideoObjectTracking operation metadata. */
		videoObjectTrackingDetails?: GoogleCloudDatalabelingV1alpha1LabelVideoObjectTrackingOperationMetadata;
	}

	/** Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23 */
	export interface GoogleCloudDatalabelingV1alpha1LabelOperationMetadataFormProperties {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset: FormControl<string | null | undefined>,

		/** Output only. Timestamp when labeling request was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The name of dataset to be labeled. "projects/datasets/*" */
		dataset: FormControl<string | null | undefined>,

		/**
		 * Output only. Progress of label operation. Range: [0, 100].
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		progressPercent: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1alpha1LabelOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1alpha1LabelOperationMetadataFormProperties>({
			annotatedDataset: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			dataset: new FormControl<string | null | undefined>(undefined),
			progressPercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details of a LabelTextClassification operation metadata. */
	export interface GoogleCloudDatalabelingV1alpha1LabelTextClassificationOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelTextClassification operation metadata. */
	export interface GoogleCloudDatalabelingV1alpha1LabelTextClassificationOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1alpha1LabelTextClassificationOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1alpha1LabelTextClassificationOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelTextEntityExtraction operation metadata. */
	export interface GoogleCloudDatalabelingV1alpha1LabelTextEntityExtractionOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelTextEntityExtraction operation metadata. */
	export interface GoogleCloudDatalabelingV1alpha1LabelTextEntityExtractionOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1alpha1LabelTextEntityExtractionOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1alpha1LabelTextEntityExtractionOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelVideoClassification operation metadata. */
	export interface GoogleCloudDatalabelingV1alpha1LabelVideoClassificationOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelVideoClassification operation metadata. */
	export interface GoogleCloudDatalabelingV1alpha1LabelVideoClassificationOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1alpha1LabelVideoClassificationOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1alpha1LabelVideoClassificationOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelVideoEvent operation metadata. */
	export interface GoogleCloudDatalabelingV1alpha1LabelVideoEventOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelVideoEvent operation metadata. */
	export interface GoogleCloudDatalabelingV1alpha1LabelVideoEventOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1alpha1LabelVideoEventOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1alpha1LabelVideoEventOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelVideoObjectDetection operation metadata. */
	export interface GoogleCloudDatalabelingV1alpha1LabelVideoObjectDetectionOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelVideoObjectDetection operation metadata. */
	export interface GoogleCloudDatalabelingV1alpha1LabelVideoObjectDetectionOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1alpha1LabelVideoObjectDetectionOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1alpha1LabelVideoObjectDetectionOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelVideoObjectTracking operation metadata. */
	export interface GoogleCloudDatalabelingV1alpha1LabelVideoObjectTrackingOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelVideoObjectTracking operation metadata. */
	export interface GoogleCloudDatalabelingV1alpha1LabelVideoObjectTrackingOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1alpha1LabelVideoObjectTrackingOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1alpha1LabelVideoObjectTrackingOperationMetadataFormProperties>({
		});

	}


	/** AnnotatedDataset is a set holding annotations for data in a Dataset. Each labeling task will generate an AnnotatedDataset under the Dataset that the task is requested for. */
	export interface GoogleCloudDatalabelingV1beta1AnnotatedDataset {

		/** Output only. Source of the annotation. */
		annotationSource?: GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSource | null;

		/** Output only. Type of the annotation. It is specified when starting labeling task. */
		annotationType?: GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationType | null;

		/** Output only. The names of any related resources that are blocking changes to the annotated dataset. */
		blockingResources?: Array<string>;

		/** Output only. Number of examples that have annotation in the annotated dataset. */
		completedExampleCount?: string | null;

		/** Output only. Time the AnnotatedDataset was created. */
		createTime?: string | null;

		/** Output only. The description of the AnnotatedDataset. It is specified in HumanAnnotationConfig when user starts a labeling task. Maximum of 10000 characters. */
		description?: string | null;

		/** Output only. The display name of the AnnotatedDataset. It is specified in HumanAnnotationConfig when user starts a labeling task. Maximum of 64 characters. */
		displayName?: string | null;

		/** Output only. Number of examples in the annotated dataset. */
		exampleCount?: string | null;

		/** Statistics about annotation specs. */
		labelStats?: GoogleCloudDatalabelingV1beta1LabelStats;

		/** Metadata on AnnotatedDataset. */
		metadata?: GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata;

		/** Output only. AnnotatedDataset resource name in format of: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id} */
		name?: string | null;
	}

	/** AnnotatedDataset is a set holding annotations for data in a Dataset. Each labeling task will generate an AnnotatedDataset under the Dataset that the task is requested for. */
	export interface GoogleCloudDatalabelingV1beta1AnnotatedDatasetFormProperties {

		/** Output only. Source of the annotation. */
		annotationSource: FormControl<GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSource | null | undefined>,

		/** Output only. Type of the annotation. It is specified when starting labeling task. */
		annotationType: FormControl<GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationType | null | undefined>,

		/** Output only. Number of examples that have annotation in the annotated dataset. */
		completedExampleCount: FormControl<string | null | undefined>,

		/** Output only. Time the AnnotatedDataset was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The description of the AnnotatedDataset. It is specified in HumanAnnotationConfig when user starts a labeling task. Maximum of 10000 characters. */
		description: FormControl<string | null | undefined>,

		/** Output only. The display name of the AnnotatedDataset. It is specified in HumanAnnotationConfig when user starts a labeling task. Maximum of 64 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Number of examples in the annotated dataset. */
		exampleCount: FormControl<string | null | undefined>,

		/** Output only. AnnotatedDataset resource name in format of: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1AnnotatedDatasetFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1AnnotatedDatasetFormProperties>({
			annotationSource: new FormControl<GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSource | null | undefined>(undefined),
			annotationType: new FormControl<GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationType | null | undefined>(undefined),
			completedExampleCount: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			exampleCount: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSource { ANNOTATION_SOURCE_UNSPECIFIED = 'ANNOTATION_SOURCE_UNSPECIFIED', OPERATOR = 'OPERATOR' }

	export enum GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationType { ANNOTATION_TYPE_UNSPECIFIED = 'ANNOTATION_TYPE_UNSPECIFIED', IMAGE_CLASSIFICATION_ANNOTATION = 'IMAGE_CLASSIFICATION_ANNOTATION', IMAGE_BOUNDING_BOX_ANNOTATION = 'IMAGE_BOUNDING_BOX_ANNOTATION', IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION = 'IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION', IMAGE_BOUNDING_POLY_ANNOTATION = 'IMAGE_BOUNDING_POLY_ANNOTATION', IMAGE_POLYLINE_ANNOTATION = 'IMAGE_POLYLINE_ANNOTATION', IMAGE_SEGMENTATION_ANNOTATION = 'IMAGE_SEGMENTATION_ANNOTATION', VIDEO_SHOTS_CLASSIFICATION_ANNOTATION = 'VIDEO_SHOTS_CLASSIFICATION_ANNOTATION', VIDEO_OBJECT_TRACKING_ANNOTATION = 'VIDEO_OBJECT_TRACKING_ANNOTATION', VIDEO_OBJECT_DETECTION_ANNOTATION = 'VIDEO_OBJECT_DETECTION_ANNOTATION', VIDEO_EVENT_ANNOTATION = 'VIDEO_EVENT_ANNOTATION', TEXT_CLASSIFICATION_ANNOTATION = 'TEXT_CLASSIFICATION_ANNOTATION', TEXT_ENTITY_EXTRACTION_ANNOTATION = 'TEXT_ENTITY_EXTRACTION_ANNOTATION', GENERAL_CLASSIFICATION_ANNOTATION = 'GENERAL_CLASSIFICATION_ANNOTATION' }


	/** Statistics about annotation specs. */
	export interface GoogleCloudDatalabelingV1beta1LabelStats {

		/** Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations. */
		exampleCount?: {[id: string]: string };
	}

	/** Statistics about annotation specs. */
	export interface GoogleCloudDatalabelingV1beta1LabelStatsFormProperties {

		/** Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations. */
		exampleCount: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1LabelStatsFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1LabelStatsFormProperties>({
			exampleCount: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Metadata on AnnotatedDataset. */
	export interface GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata {

		/** Config for image bounding poly (and bounding box) human labeling task. */
		boundingPolyConfig?: GoogleCloudDatalabelingV1beta1BoundingPolyConfig;

		/** Config for video event human labeling task. */
		eventConfig?: GoogleCloudDatalabelingV1beta1EventConfig;

		/** Configuration for how human labeling task should be done. */
		humanAnnotationConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;

		/** Config for image classification human labeling task. */
		imageClassificationConfig?: GoogleCloudDatalabelingV1beta1ImageClassificationConfig;

		/** Config for video object detection human labeling task. Object detection will be conducted on the images extracted from the video, and those objects will be labeled with bounding boxes. User need to specify the number of images to be extracted per second as the extraction frame rate. */
		objectDetectionConfig?: GoogleCloudDatalabelingV1beta1ObjectDetectionConfig;

		/** Config for video object tracking human labeling task. */
		objectTrackingConfig?: GoogleCloudDatalabelingV1beta1ObjectTrackingConfig;

		/** Config for image polyline human labeling task. */
		polylineConfig?: GoogleCloudDatalabelingV1beta1PolylineConfig;

		/** Config for image segmentation */
		segmentationConfig?: GoogleCloudDatalabelingV1beta1SegmentationConfig;

		/** Config for text classification human labeling task. */
		textClassificationConfig?: GoogleCloudDatalabelingV1beta1TextClassificationConfig;

		/** Config for text entity extraction human labeling task. */
		textEntityExtractionConfig?: GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig;

		/** Config for video classification human labeling task. Currently two types of video classification are supported: 1. Assign labels on the entire video. 2. Split the video into multiple video clips based on camera shot, and assign labels on each video clip. */
		videoClassificationConfig?: GoogleCloudDatalabelingV1beta1VideoClassificationConfig;
	}

	/** Metadata on AnnotatedDataset. */
	export interface GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadataFormProperties>({
		});

	}


	/** Config for image bounding poly (and bounding box) human labeling task. */
	export interface GoogleCloudDatalabelingV1beta1BoundingPolyConfig {

		/** Required. Annotation spec set resource name. */
		annotationSpecSet?: string | null;

		/** Optional. Instruction message showed on contributors UI. */
		instructionMessage?: string | null;
	}

	/** Config for image bounding poly (and bounding box) human labeling task. */
	export interface GoogleCloudDatalabelingV1beta1BoundingPolyConfigFormProperties {

		/** Required. Annotation spec set resource name. */
		annotationSpecSet: FormControl<string | null | undefined>,

		/** Optional. Instruction message showed on contributors UI. */
		instructionMessage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1BoundingPolyConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1BoundingPolyConfigFormProperties>({
			annotationSpecSet: new FormControl<string | null | undefined>(undefined),
			instructionMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Config for video event human labeling task. */
	export interface GoogleCloudDatalabelingV1beta1EventConfig {

		/** Required. The list of annotation spec set resource name. Similar to video classification, we support selecting event from multiple AnnotationSpecSet at the same time. */
		annotationSpecSets?: Array<string>;

		/**
		 * Videos will be cut to smaller clips to make it easier for labelers to work on. Users can configure is field in seconds, if not set, default value is 60s.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		clipLength?: number | null;

		/**
		 * The overlap length between different video clips. Users can configure is field in seconds, if not set, default value is 1s.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		overlapLength?: number | null;
	}

	/** Config for video event human labeling task. */
	export interface GoogleCloudDatalabelingV1beta1EventConfigFormProperties {

		/**
		 * Videos will be cut to smaller clips to make it easier for labelers to work on. Users can configure is field in seconds, if not set, default value is 60s.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		clipLength: FormControl<number | null | undefined>,

		/**
		 * The overlap length between different video clips. Users can configure is field in seconds, if not set, default value is 1s.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		overlapLength: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1EventConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1EventConfigFormProperties>({
			clipLength: new FormControl<number | null | undefined>(undefined),
			overlapLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configuration for how human labeling task should be done. */
	export interface GoogleCloudDatalabelingV1beta1HumanAnnotationConfig {

		/** Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long. */
		annotatedDatasetDescription?: string | null;

		/** Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters . */
		annotatedDatasetDisplayName?: string | null;

		/** Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/ */
		contributorEmails?: Array<string>;

		/** Required. Instruction resource name. */
		instruction?: string | null;

		/** Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128}`. */
		labelGroup?: string | null;

		/** Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification. */
		languageCode?: string | null;

		/** Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds. */
		questionDuration?: string | null;

		/**
		 * Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replicaCount?: number | null;

		/** Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent. */
		userEmailAddress?: string | null;
	}

	/** Configuration for how human labeling task should be done. */
	export interface GoogleCloudDatalabelingV1beta1HumanAnnotationConfigFormProperties {

		/** Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long. */
		annotatedDatasetDescription: FormControl<string | null | undefined>,

		/** Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters . */
		annotatedDatasetDisplayName: FormControl<string | null | undefined>,

		/** Required. Instruction resource name. */
		instruction: FormControl<string | null | undefined>,

		/** Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128}`. */
		labelGroup: FormControl<string | null | undefined>,

		/** Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification. */
		languageCode: FormControl<string | null | undefined>,

		/** Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds. */
		questionDuration: FormControl<string | null | undefined>,

		/**
		 * Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replicaCount: FormControl<number | null | undefined>,

		/** Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent. */
		userEmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1HumanAnnotationConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1HumanAnnotationConfigFormProperties>({
			annotatedDatasetDescription: new FormControl<string | null | undefined>(undefined),
			annotatedDatasetDisplayName: new FormControl<string | null | undefined>(undefined),
			instruction: new FormControl<string | null | undefined>(undefined),
			labelGroup: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			questionDuration: new FormControl<string | null | undefined>(undefined),
			replicaCount: new FormControl<number | null | undefined>(undefined),
			userEmailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Config for image classification human labeling task. */
	export interface GoogleCloudDatalabelingV1beta1ImageClassificationConfig {

		/** Optional. If allow_multi_label is true, contributors are able to choose multiple labels for one image. */
		allowMultiLabel?: boolean | null;

		/** Required. Annotation spec set resource name. */
		annotationSpecSet?: string | null;

		/** Optional. The type of how to aggregate answers. */
		answerAggregationType?: GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationType | null;
	}

	/** Config for image classification human labeling task. */
	export interface GoogleCloudDatalabelingV1beta1ImageClassificationConfigFormProperties {

		/** Optional. If allow_multi_label is true, contributors are able to choose multiple labels for one image. */
		allowMultiLabel: FormControl<boolean | null | undefined>,

		/** Required. Annotation spec set resource name. */
		annotationSpecSet: FormControl<string | null | undefined>,

		/** Optional. The type of how to aggregate answers. */
		answerAggregationType: FormControl<GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationType | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ImageClassificationConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ImageClassificationConfigFormProperties>({
			allowMultiLabel: new FormControl<boolean | null | undefined>(undefined),
			annotationSpecSet: new FormControl<string | null | undefined>(undefined),
			answerAggregationType: new FormControl<GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationType { STRING_AGGREGATION_TYPE_UNSPECIFIED = 'STRING_AGGREGATION_TYPE_UNSPECIFIED', MAJORITY_VOTE = 'MAJORITY_VOTE', UNANIMOUS_VOTE = 'UNANIMOUS_VOTE', NO_AGGREGATION = 'NO_AGGREGATION' }


	/** Config for video object detection human labeling task. Object detection will be conducted on the images extracted from the video, and those objects will be labeled with bounding boxes. User need to specify the number of images to be extracted per second as the extraction frame rate. */
	export interface GoogleCloudDatalabelingV1beta1ObjectDetectionConfig {

		/** Required. Annotation spec set resource name. */
		annotationSpecSet?: string | null;

		/**
		 * Required. Number of frames per second to be extracted from the video.
		 * Type: double
		 */
		extractionFrameRate?: number | null;
	}

	/** Config for video object detection human labeling task. Object detection will be conducted on the images extracted from the video, and those objects will be labeled with bounding boxes. User need to specify the number of images to be extracted per second as the extraction frame rate. */
	export interface GoogleCloudDatalabelingV1beta1ObjectDetectionConfigFormProperties {

		/** Required. Annotation spec set resource name. */
		annotationSpecSet: FormControl<string | null | undefined>,

		/**
		 * Required. Number of frames per second to be extracted from the video.
		 * Type: double
		 */
		extractionFrameRate: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ObjectDetectionConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ObjectDetectionConfigFormProperties>({
			annotationSpecSet: new FormControl<string | null | undefined>(undefined),
			extractionFrameRate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Config for video object tracking human labeling task. */
	export interface GoogleCloudDatalabelingV1beta1ObjectTrackingConfig {

		/** Required. Annotation spec set resource name. */
		annotationSpecSet?: string | null;

		/**
		 * Videos will be cut to smaller clips to make it easier for labelers to work on. Users can configure is field in seconds, if not set, default value is 20s.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		clipLength?: number | null;

		/**
		 * The overlap length between different video clips. Users can configure is field in seconds, if not set, default value is 0.3s.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		overlapLength?: number | null;
	}

	/** Config for video object tracking human labeling task. */
	export interface GoogleCloudDatalabelingV1beta1ObjectTrackingConfigFormProperties {

		/** Required. Annotation spec set resource name. */
		annotationSpecSet: FormControl<string | null | undefined>,

		/**
		 * Videos will be cut to smaller clips to make it easier for labelers to work on. Users can configure is field in seconds, if not set, default value is 20s.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		clipLength: FormControl<number | null | undefined>,

		/**
		 * The overlap length between different video clips. Users can configure is field in seconds, if not set, default value is 0.3s.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		overlapLength: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ObjectTrackingConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ObjectTrackingConfigFormProperties>({
			annotationSpecSet: new FormControl<string | null | undefined>(undefined),
			clipLength: new FormControl<number | null | undefined>(undefined),
			overlapLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Config for image polyline human labeling task. */
	export interface GoogleCloudDatalabelingV1beta1PolylineConfig {

		/** Required. Annotation spec set resource name. */
		annotationSpecSet?: string | null;

		/** Optional. Instruction message showed on contributors UI. */
		instructionMessage?: string | null;
	}

	/** Config for image polyline human labeling task. */
	export interface GoogleCloudDatalabelingV1beta1PolylineConfigFormProperties {

		/** Required. Annotation spec set resource name. */
		annotationSpecSet: FormControl<string | null | undefined>,

		/** Optional. Instruction message showed on contributors UI. */
		instructionMessage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1PolylineConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1PolylineConfigFormProperties>({
			annotationSpecSet: new FormControl<string | null | undefined>(undefined),
			instructionMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Config for image segmentation */
	export interface GoogleCloudDatalabelingV1beta1SegmentationConfig {

		/** Required. Annotation spec set resource name. format: projects/{project_id}/annotationSpecSets/{annotation_spec_set_id} */
		annotationSpecSet?: string | null;

		/** Instruction message showed on labelers UI. */
		instructionMessage?: string | null;
	}

	/** Config for image segmentation */
	export interface GoogleCloudDatalabelingV1beta1SegmentationConfigFormProperties {

		/** Required. Annotation spec set resource name. format: projects/{project_id}/annotationSpecSets/{annotation_spec_set_id} */
		annotationSpecSet: FormControl<string | null | undefined>,

		/** Instruction message showed on labelers UI. */
		instructionMessage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1SegmentationConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1SegmentationConfigFormProperties>({
			annotationSpecSet: new FormControl<string | null | undefined>(undefined),
			instructionMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Config for text classification human labeling task. */
	export interface GoogleCloudDatalabelingV1beta1TextClassificationConfig {

		/** Optional. If allow_multi_label is true, contributors are able to choose multiple labels for one text segment. */
		allowMultiLabel?: boolean | null;

		/** Required. Annotation spec set resource name. */
		annotationSpecSet?: string | null;

		/** Config for setting up sentiments. */
		sentimentConfig?: GoogleCloudDatalabelingV1beta1SentimentConfig;
	}

	/** Config for text classification human labeling task. */
	export interface GoogleCloudDatalabelingV1beta1TextClassificationConfigFormProperties {

		/** Optional. If allow_multi_label is true, contributors are able to choose multiple labels for one text segment. */
		allowMultiLabel: FormControl<boolean | null | undefined>,

		/** Required. Annotation spec set resource name. */
		annotationSpecSet: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1TextClassificationConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1TextClassificationConfigFormProperties>({
			allowMultiLabel: new FormControl<boolean | null | undefined>(undefined),
			annotationSpecSet: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Config for setting up sentiments. */
	export interface GoogleCloudDatalabelingV1beta1SentimentConfig {

		/** If set to true, contributors will have the option to select sentiment of the label they selected, to mark it as negative or positive label. Default is false. */
		enableLabelSentimentSelection?: boolean | null;
	}

	/** Config for setting up sentiments. */
	export interface GoogleCloudDatalabelingV1beta1SentimentConfigFormProperties {

		/** If set to true, contributors will have the option to select sentiment of the label they selected, to mark it as negative or positive label. Default is false. */
		enableLabelSentimentSelection: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1SentimentConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1SentimentConfigFormProperties>({
			enableLabelSentimentSelection: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Config for text entity extraction human labeling task. */
	export interface GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig {

		/** Required. Annotation spec set resource name. */
		annotationSpecSet?: string | null;
	}

	/** Config for text entity extraction human labeling task. */
	export interface GoogleCloudDatalabelingV1beta1TextEntityExtractionConfigFormProperties {

		/** Required. Annotation spec set resource name. */
		annotationSpecSet: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1TextEntityExtractionConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1TextEntityExtractionConfigFormProperties>({
			annotationSpecSet: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Config for video classification human labeling task. Currently two types of video classification are supported: 1. Assign labels on the entire video. 2. Split the video into multiple video clips based on camera shot, and assign labels on each video clip. */
	export interface GoogleCloudDatalabelingV1beta1VideoClassificationConfig {

		/** Required. The list of annotation spec set configs. Since watching a video clip takes much longer time than an image, we support label with multiple AnnotationSpecSet at the same time. Labels in each AnnotationSpecSet will be shown in a group to contributors. Contributors can select one or more (depending on whether to allow multi label) from each group. */
		annotationSpecSetConfigs?: Array<GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig>;

		/** Optional. Option to apply shot detection on the video. */
		applyShotDetection?: boolean | null;
	}

	/** Config for video classification human labeling task. Currently two types of video classification are supported: 1. Assign labels on the entire video. 2. Split the video into multiple video clips based on camera shot, and assign labels on each video clip. */
	export interface GoogleCloudDatalabelingV1beta1VideoClassificationConfigFormProperties {

		/** Optional. Option to apply shot detection on the video. */
		applyShotDetection: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1VideoClassificationConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1VideoClassificationConfigFormProperties>({
			applyShotDetection: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Annotation spec set with the setting of allowing multi labels or not. */
	export interface GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig {

		/** Optional. If allow_multi_label is true, contributors are able to choose multiple labels from one annotation spec set. */
		allowMultiLabel?: boolean | null;

		/** Required. Annotation spec set resource name. */
		annotationSpecSet?: string | null;
	}

	/** Annotation spec set with the setting of allowing multi labels or not. */
	export interface GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfigFormProperties {

		/** Optional. If allow_multi_label is true, contributors are able to choose multiple labels from one annotation spec set. */
		allowMultiLabel: FormControl<boolean | null | undefined>,

		/** Required. Annotation spec set resource name. */
		annotationSpecSet: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1AnnotationSpecSetConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfigFormProperties>({
			allowMultiLabel: new FormControl<boolean | null | undefined>(undefined),
			annotationSpecSet: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Annotation for Example. Each example may have one or more annotations. For example in image classification problem, each image might have one or more labels. We call labels binded with this image an Annotation. */
	export interface GoogleCloudDatalabelingV1beta1Annotation {

		/** Additional information associated with the annotation. */
		annotationMetadata?: GoogleCloudDatalabelingV1beta1AnnotationMetadata;

		/** Output only. Sentiment for this annotation. */
		annotationSentiment?: GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentiment | null;

		/** Output only. The source of the annotation. */
		annotationSource?: GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSource | null;

		/** Annotation value for an example. */
		annotationValue?: GoogleCloudDatalabelingV1beta1AnnotationValue;

		/** Output only. Unique name of this annotation, format is: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset}/examples/{example_id}/annotations/{annotation_id} */
		name?: string | null;
	}

	/** Annotation for Example. Each example may have one or more annotations. For example in image classification problem, each image might have one or more labels. We call labels binded with this image an Annotation. */
	export interface GoogleCloudDatalabelingV1beta1AnnotationFormProperties {

		/** Output only. Sentiment for this annotation. */
		annotationSentiment: FormControl<GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentiment | null | undefined>,

		/** Output only. The source of the annotation. */
		annotationSource: FormControl<GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSource | null | undefined>,

		/** Output only. Unique name of this annotation, format is: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset}/examples/{example_id}/annotations/{annotation_id} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1AnnotationFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1AnnotationFormProperties>({
			annotationSentiment: new FormControl<GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentiment | null | undefined>(undefined),
			annotationSource: new FormControl<GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSource | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional information associated with the annotation. */
	export interface GoogleCloudDatalabelingV1beta1AnnotationMetadata {

		/** General information useful for labels coming from contributors. */
		operatorMetadata?: GoogleCloudDatalabelingV1beta1OperatorMetadata;
	}

	/** Additional information associated with the annotation. */
	export interface GoogleCloudDatalabelingV1beta1AnnotationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1AnnotationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1AnnotationMetadataFormProperties>({
		});

	}


	/** General information useful for labels coming from contributors. */
	export interface GoogleCloudDatalabelingV1beta1OperatorMetadata {

		/** Comments from contributors. */
		comments?: Array<string>;

		/**
		 * The total number of contributors that choose this label.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		labelVotes?: number | null;

		/**
		 * Confidence score corresponding to a label. For examle, if 3 contributors have answered the question and 2 of them agree on the final label, the confidence score will be 0.67 (2/3).
		 * Type: float
		 */
		score?: number | null;

		/**
		 * The total number of contributors that answer this question.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalVotes?: number | null;
	}

	/** General information useful for labels coming from contributors. */
	export interface GoogleCloudDatalabelingV1beta1OperatorMetadataFormProperties {

		/**
		 * The total number of contributors that choose this label.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		labelVotes: FormControl<number | null | undefined>,

		/**
		 * Confidence score corresponding to a label. For examle, if 3 contributors have answered the question and 2 of them agree on the final label, the confidence score will be 0.67 (2/3).
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,

		/**
		 * The total number of contributors that answer this question.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalVotes: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1OperatorMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1OperatorMetadataFormProperties>({
			labelVotes: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			totalVotes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentiment { ANNOTATION_SENTIMENT_UNSPECIFIED = 'ANNOTATION_SENTIMENT_UNSPECIFIED', NEGATIVE = 'NEGATIVE', POSITIVE = 'POSITIVE' }


	/** Annotation value for an example. */
	export interface GoogleCloudDatalabelingV1beta1AnnotationValue {

		/** Image bounding poly annotation. It represents a polygon including bounding box in the image. */
		imageBoundingPolyAnnotation?: GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation;

		/** Image classification annotation definition. */
		imageClassificationAnnotation?: GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation;

		/** A polyline for the image annotation. */
		imagePolylineAnnotation?: GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation;

		/** Image segmentation annotation. */
		imageSegmentationAnnotation?: GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation;

		/** Text classification annotation. */
		textClassificationAnnotation?: GoogleCloudDatalabelingV1beta1TextClassificationAnnotation;

		/** Text entity extraction annotation. */
		textEntityExtractionAnnotation?: GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation;

		/** Video classification annotation. */
		videoClassificationAnnotation?: GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation;

		/** Video event annotation. */
		videoEventAnnotation?: GoogleCloudDatalabelingV1beta1VideoEventAnnotation;

		/** Video object tracking annotation. */
		videoObjectTrackingAnnotation?: GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation;
	}

	/** Annotation value for an example. */
	export interface GoogleCloudDatalabelingV1beta1AnnotationValueFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1AnnotationValueFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1AnnotationValueFormProperties>({
		});

	}


	/** Image bounding poly annotation. It represents a polygon including bounding box in the image. */
	export interface GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation {

		/** Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`. */
		annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;

		/** A bounding polygon in the image. */
		boundingPoly?: GoogleCloudDatalabelingV1beta1BoundingPoly;

		/** Normalized bounding polygon. */
		normalizedBoundingPoly?: GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly;
	}

	/** Image bounding poly annotation. It represents a polygon including bounding box in the image. */
	export interface GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotationFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotationFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotationFormProperties>({
		});

	}


	/** Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`. */
	export interface GoogleCloudDatalabelingV1beta1AnnotationSpec {

		/** Optional. User-provided description of the annotation specification. The description can be up to 10,000 characters long. */
		description?: string | null;

		/** Required. The display name of the AnnotationSpec. Maximum of 64 characters. */
		displayName?: string | null;

		/**
		 * Output only. This is the integer index of the AnnotationSpec. The index for the whole AnnotationSpecSet is sequential starting from 0. For example, an AnnotationSpecSet with classes `dog` and `cat`, might contain one AnnotationSpec with `{ display_name: "dog", index: 0 }` and one AnnotationSpec with `{ display_name: "cat", index: 1 }`. This is especially useful for model training as it encodes the string labels into numeric values.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index?: number | null;
	}

	/** Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`. */
	export interface GoogleCloudDatalabelingV1beta1AnnotationSpecFormProperties {

		/** Optional. User-provided description of the annotation specification. The description can be up to 10,000 characters long. */
		description: FormControl<string | null | undefined>,

		/** Required. The display name of the AnnotationSpec. Maximum of 64 characters. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Output only. This is the integer index of the AnnotationSpec. The index for the whole AnnotationSpecSet is sequential starting from 0. For example, an AnnotationSpecSet with classes `dog` and `cat`, might contain one AnnotationSpec with `{ display_name: "dog", index: 0 }` and one AnnotationSpec with `{ display_name: "cat", index: 1 }`. This is especially useful for model training as it encodes the string labels into numeric values.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1AnnotationSpecFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1AnnotationSpecFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A bounding polygon in the image. */
	export interface GoogleCloudDatalabelingV1beta1BoundingPoly {

		/** The bounding polygon vertices. */
		vertices?: Array<GoogleCloudDatalabelingV1beta1Vertex>;
	}

	/** A bounding polygon in the image. */
	export interface GoogleCloudDatalabelingV1beta1BoundingPolyFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1BoundingPolyFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1BoundingPolyFormProperties>({
		});

	}


	/** A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image. */
	export interface GoogleCloudDatalabelingV1beta1Vertex {

		/**
		 * X coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		x?: number | null;

		/**
		 * Y coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		y?: number | null;
	}

	/** A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image. */
	export interface GoogleCloudDatalabelingV1beta1VertexFormProperties {

		/**
		 * X coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Y coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		y: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1VertexFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1VertexFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Normalized bounding polygon. */
	export interface GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly {

		/** The bounding polygon normalized vertices. */
		normalizedVertices?: Array<GoogleCloudDatalabelingV1beta1NormalizedVertex>;
	}

	/** Normalized bounding polygon. */
	export interface GoogleCloudDatalabelingV1beta1NormalizedBoundingPolyFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1NormalizedBoundingPolyFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1NormalizedBoundingPolyFormProperties>({
		});

	}


	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudDatalabelingV1beta1NormalizedVertex {

		/**
		 * X coordinate.
		 * Type: float
		 */
		x?: number | null;

		/**
		 * Y coordinate.
		 * Type: float
		 */
		y?: number | null;
	}

	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudDatalabelingV1beta1NormalizedVertexFormProperties {

		/**
		 * X coordinate.
		 * Type: float
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Y coordinate.
		 * Type: float
		 */
		y: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1NormalizedVertexFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1NormalizedVertexFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Image classification annotation definition. */
	export interface GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation {

		/** Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`. */
		annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
	}

	/** Image classification annotation definition. */
	export interface GoogleCloudDatalabelingV1beta1ImageClassificationAnnotationFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1ImageClassificationAnnotationFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ImageClassificationAnnotationFormProperties>({
		});

	}


	/** A polyline for the image annotation. */
	export interface GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation {

		/** Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`. */
		annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;

		/** Normalized polyline. */
		normalizedPolyline?: GoogleCloudDatalabelingV1beta1NormalizedPolyline;

		/** A line with multiple line segments. */
		polyline?: GoogleCloudDatalabelingV1beta1Polyline;
	}

	/** A polyline for the image annotation. */
	export interface GoogleCloudDatalabelingV1beta1ImagePolylineAnnotationFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1ImagePolylineAnnotationFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ImagePolylineAnnotationFormProperties>({
		});

	}


	/** Normalized polyline. */
	export interface GoogleCloudDatalabelingV1beta1NormalizedPolyline {

		/** The normalized polyline vertices. */
		normalizedVertices?: Array<GoogleCloudDatalabelingV1beta1NormalizedVertex>;
	}

	/** Normalized polyline. */
	export interface GoogleCloudDatalabelingV1beta1NormalizedPolylineFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1NormalizedPolylineFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1NormalizedPolylineFormProperties>({
		});

	}


	/** A line with multiple line segments. */
	export interface GoogleCloudDatalabelingV1beta1Polyline {

		/** The polyline vertices. */
		vertices?: Array<GoogleCloudDatalabelingV1beta1Vertex>;
	}

	/** A line with multiple line segments. */
	export interface GoogleCloudDatalabelingV1beta1PolylineFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1PolylineFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1PolylineFormProperties>({
		});

	}


	/** Image segmentation annotation. */
	export interface GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation {

		/** The mapping between rgb color and annotation spec. The key is the rgb color represented in format of rgb(0, 0, 0). The value is the AnnotationSpec. */
		annotationColors?: {[id: string]: GoogleCloudDatalabelingV1beta1AnnotationSpec };

		/** A byte string of a full image's color map. */
		imageBytes?: string | null;

		/** Image format. */
		mimeType?: string | null;
	}

	/** Image segmentation annotation. */
	export interface GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotationFormProperties {

		/** The mapping between rgb color and annotation spec. The key is the rgb color represented in format of rgb(0, 0, 0). The value is the AnnotationSpec. */
		annotationColors: FormControl<{[id: string]: GoogleCloudDatalabelingV1beta1AnnotationSpec } | null | undefined>,

		/** A byte string of a full image's color map. */
		imageBytes: FormControl<string | null | undefined>,

		/** Image format. */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ImageSegmentationAnnotationFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotationFormProperties>({
			annotationColors: new FormControl<{[id: string]: GoogleCloudDatalabelingV1beta1AnnotationSpec } | null | undefined>(undefined),
			imageBytes: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Text classification annotation. */
	export interface GoogleCloudDatalabelingV1beta1TextClassificationAnnotation {

		/** Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`. */
		annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
	}

	/** Text classification annotation. */
	export interface GoogleCloudDatalabelingV1beta1TextClassificationAnnotationFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1TextClassificationAnnotationFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1TextClassificationAnnotationFormProperties>({
		});

	}


	/** Text entity extraction annotation. */
	export interface GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation {

		/** Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`. */
		annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;

		/** Start and end position in a sequence (e.g. text segment). */
		sequentialSegment?: GoogleCloudDatalabelingV1beta1SequentialSegment;
	}

	/** Text entity extraction annotation. */
	export interface GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotationFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotationFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotationFormProperties>({
		});

	}


	/** Start and end position in a sequence (e.g. text segment). */
	export interface GoogleCloudDatalabelingV1beta1SequentialSegment {

		/**
		 * End position (exclusive).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end?: number | null;

		/**
		 * Start position (inclusive).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start?: number | null;
	}

	/** Start and end position in a sequence (e.g. text segment). */
	export interface GoogleCloudDatalabelingV1beta1SequentialSegmentFormProperties {

		/**
		 * End position (exclusive).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end: FormControl<number | null | undefined>,

		/**
		 * Start position (inclusive).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1SequentialSegmentFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1SequentialSegmentFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Video classification annotation. */
	export interface GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation {

		/** Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`. */
		annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;

		/** A time period inside of an example that has a time dimension (e.g. video). */
		timeSegment?: GoogleCloudDatalabelingV1beta1TimeSegment;
	}

	/** Video classification annotation. */
	export interface GoogleCloudDatalabelingV1beta1VideoClassificationAnnotationFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1VideoClassificationAnnotationFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1VideoClassificationAnnotationFormProperties>({
		});

	}


	/** A time period inside of an example that has a time dimension (e.g. video). */
	export interface GoogleCloudDatalabelingV1beta1TimeSegment {

		/** End of the time segment (exclusive), represented as the duration since the example start. */
		endTimeOffset?: string | null;

		/** Start of the time segment (inclusive), represented as the duration since the example start. */
		startTimeOffset?: string | null;
	}

	/** A time period inside of an example that has a time dimension (e.g. video). */
	export interface GoogleCloudDatalabelingV1beta1TimeSegmentFormProperties {

		/** End of the time segment (exclusive), represented as the duration since the example start. */
		endTimeOffset: FormControl<string | null | undefined>,

		/** Start of the time segment (inclusive), represented as the duration since the example start. */
		startTimeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1TimeSegmentFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1TimeSegmentFormProperties>({
			endTimeOffset: new FormControl<string | null | undefined>(undefined),
			startTimeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video event annotation. */
	export interface GoogleCloudDatalabelingV1beta1VideoEventAnnotation {

		/** Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`. */
		annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;

		/** A time period inside of an example that has a time dimension (e.g. video). */
		timeSegment?: GoogleCloudDatalabelingV1beta1TimeSegment;
	}

	/** Video event annotation. */
	export interface GoogleCloudDatalabelingV1beta1VideoEventAnnotationFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1VideoEventAnnotationFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1VideoEventAnnotationFormProperties>({
		});

	}


	/** Video object tracking annotation. */
	export interface GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation {

		/** Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`. */
		annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;

		/** The list of frames where this object track appears. */
		objectTrackingFrames?: Array<GoogleCloudDatalabelingV1beta1ObjectTrackingFrame>;

		/** A time period inside of an example that has a time dimension (e.g. video). */
		timeSegment?: GoogleCloudDatalabelingV1beta1TimeSegment;
	}

	/** Video object tracking annotation. */
	export interface GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotationFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotationFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotationFormProperties>({
		});

	}


	/** Video frame level annotation for object detection and tracking. */
	export interface GoogleCloudDatalabelingV1beta1ObjectTrackingFrame {

		/** A bounding polygon in the image. */
		boundingPoly?: GoogleCloudDatalabelingV1beta1BoundingPoly;

		/** Normalized bounding polygon. */
		normalizedBoundingPoly?: GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly;

		/** The time offset of this frame relative to the beginning of the video. */
		timeOffset?: string | null;
	}

	/** Video frame level annotation for object detection and tracking. */
	export interface GoogleCloudDatalabelingV1beta1ObjectTrackingFrameFormProperties {

		/** The time offset of this frame relative to the beginning of the video. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ObjectTrackingFrameFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ObjectTrackingFrameFormProperties>({
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An AnnotationSpecSet is a collection of label definitions. For example, in image classification tasks, you define a set of possible labels for images as an AnnotationSpecSet. An AnnotationSpecSet is immutable upon creation. */
	export interface GoogleCloudDatalabelingV1beta1AnnotationSpecSet {

		/** Required. The array of AnnotationSpecs that you define when you create the AnnotationSpecSet. These are the possible labels for the labeling task. */
		annotationSpecs?: Array<GoogleCloudDatalabelingV1beta1AnnotationSpec>;

		/** Output only. The names of any related resources that are blocking changes to the annotation spec set. */
		blockingResources?: Array<string>;

		/** Optional. User-provided description of the annotation specification set. The description can be up to 10,000 characters long. */
		description?: string | null;

		/** Required. The display name for AnnotationSpecSet that you define when you create it. Maximum of 64 characters. */
		displayName?: string | null;

		/** Output only. The AnnotationSpecSet resource name in the following format: "projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}" */
		name?: string | null;
	}

	/** An AnnotationSpecSet is a collection of label definitions. For example, in image classification tasks, you define a set of possible labels for images as an AnnotationSpecSet. An AnnotationSpecSet is immutable upon creation. */
	export interface GoogleCloudDatalabelingV1beta1AnnotationSpecSetFormProperties {

		/** Optional. User-provided description of the annotation specification set. The description can be up to 10,000 characters long. */
		description: FormControl<string | null | undefined>,

		/** Required. The display name for AnnotationSpecSet that you define when you create it. Maximum of 64 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The AnnotationSpecSet resource name in the following format: "projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}" */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1AnnotationSpecSetFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1AnnotationSpecSetFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Records a failed evaluation job run. */
	export interface GoogleCloudDatalabelingV1beta1Attempt {
		attemptTime?: string | null;

		/** Details of errors that occurred. */
		partialFailures?: Array<GoogleRpcStatus>;
	}

	/** Records a failed evaluation job run. */
	export interface GoogleCloudDatalabelingV1beta1AttemptFormProperties {
		attemptTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1AttemptFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1AttemptFormProperties>({
			attemptTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The BigQuery location for input data. If used in an EvaluationJob, this is where the service saves the prediction input and output sampled from the model version. */
	export interface GoogleCloudDatalabelingV1beta1BigQuerySource {

		/** Required. BigQuery URI to a table, up to 2,000 characters long. If you specify the URI of a table that does not exist, Data Labeling Service creates a table at the URI with the correct schema when you create your EvaluationJob. If you specify the URI of a table that already exists, it must have the [correct schema](/ml-engine/docs/continuous-evaluation/create-job#table-schema). Provide the table URI in the following format: "bq://{your_project_id}/ {your_dataset_name}/{your_table_name}" [Learn more](/ml-engine/docs/continuous-evaluation/create-job#table-schema). */
		inputUri?: string | null;
	}

	/** The BigQuery location for input data. If used in an EvaluationJob, this is where the service saves the prediction input and output sampled from the model version. */
	export interface GoogleCloudDatalabelingV1beta1BigQuerySourceFormProperties {

		/** Required. BigQuery URI to a table, up to 2,000 characters long. If you specify the URI of a table that does not exist, Data Labeling Service creates a table at the URI with the correct schema when you create your EvaluationJob. If you specify the URI of a table that already exists, it must have the [correct schema](/ml-engine/docs/continuous-evaluation/create-job#table-schema). Provide the table URI in the following format: "bq://{your_project_id}/ {your_dataset_name}/{your_table_name}" [Learn more](/ml-engine/docs/continuous-evaluation/create-job#table-schema). */
		inputUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1BigQuerySourceFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1BigQuerySourceFormProperties>({
			inputUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options regarding evaluation between bounding boxes. */
	export interface GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions {

		/**
		 * Minimum [intersection-over-union (IOU)](/vision/automl/object-detection/docs/evaluate#intersection-over-union) required for 2 bounding boxes to be considered a match. This must be a number between 0 and 1.
		 * Type: float
		 */
		iouThreshold?: number | null;
	}

	/** Options regarding evaluation between bounding boxes. */
	export interface GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptionsFormProperties {

		/**
		 * Minimum [intersection-over-union (IOU)](/vision/automl/object-detection/docs/evaluate#intersection-over-union) required for 2 bounding boxes to be considered a match. This must be a number between 0 and 1.
		 * Type: float
		 */
		iouThreshold: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptionsFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptionsFormProperties>({
			iouThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Metadata for classification annotations. */
	export interface GoogleCloudDatalabelingV1beta1ClassificationMetadata {

		/** Whether the classification task is multi-label or not. */
		isMultiLabel?: boolean | null;
	}

	/** Metadata for classification annotations. */
	export interface GoogleCloudDatalabelingV1beta1ClassificationMetadataFormProperties {

		/** Whether the classification task is multi-label or not. */
		isMultiLabel: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ClassificationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ClassificationMetadataFormProperties>({
			isMultiLabel: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Metrics calculated for a classification model. */
	export interface GoogleCloudDatalabelingV1beta1ClassificationMetrics {

		/** Confusion matrix of the model running the classification. Only applicable when the metrics entry aggregates multiple labels. Not applicable when the entry is for a single label. */
		confusionMatrix?: GoogleCloudDatalabelingV1beta1ConfusionMatrix;
		prCurve?: GoogleCloudDatalabelingV1beta1PrCurve;
	}

	/** Metrics calculated for a classification model. */
	export interface GoogleCloudDatalabelingV1beta1ClassificationMetricsFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1ClassificationMetricsFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ClassificationMetricsFormProperties>({
		});

	}


	/** Confusion matrix of the model running the classification. Only applicable when the metrics entry aggregates multiple labels. Not applicable when the entry is for a single label. */
	export interface GoogleCloudDatalabelingV1beta1ConfusionMatrix {
		row?: Array<GoogleCloudDatalabelingV1beta1Row>;
	}

	/** Confusion matrix of the model running the classification. Only applicable when the metrics entry aggregates multiple labels. Not applicable when the entry is for a single label. */
	export interface GoogleCloudDatalabelingV1beta1ConfusionMatrixFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1ConfusionMatrixFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ConfusionMatrixFormProperties>({
		});

	}


	/** A row in the confusion matrix. Each entry in this row has the same ground truth label. */
	export interface GoogleCloudDatalabelingV1beta1Row {

		/** Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`. */
		annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;

		/** A list of the confusion matrix entries. One entry for each possible predicted label. */
		entries?: Array<GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry>;
	}

	/** A row in the confusion matrix. Each entry in this row has the same ground truth label. */
	export interface GoogleCloudDatalabelingV1beta1RowFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1RowFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1RowFormProperties>({
		});

	}

	export interface GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry {

		/** Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`. */
		annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;

		/**
		 * Number of items predicted to have this label. (The ground truth label for these items is the `Row.annotationSpec` of this entry's parent.)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemCount?: number | null;
	}
	export interface GoogleCloudDatalabelingV1beta1ConfusionMatrixEntryFormProperties {

		/**
		 * Number of items predicted to have this label. (The ground truth label for these items is the `Row.annotationSpec` of this entry's parent.)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ConfusionMatrixEntryFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ConfusionMatrixEntryFormProperties>({
			itemCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudDatalabelingV1beta1PrCurve {

		/** Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`. */
		annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;

		/**
		 * Area under the precision-recall curve. Not to be confused with area under a receiver operating characteristic (ROC) curve.
		 * Type: float
		 */
		areaUnderCurve?: number | null;

		/** Entries that make up the precision-recall graph. Each entry is a "point" on the graph drawn for a different `confidence_threshold`. */
		confidenceMetricsEntries?: Array<GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry>;

		/**
		 * Mean average prcision of this curve.
		 * Type: float
		 */
		meanAveragePrecision?: number | null;
	}
	export interface GoogleCloudDatalabelingV1beta1PrCurveFormProperties {

		/**
		 * Area under the precision-recall curve. Not to be confused with area under a receiver operating characteristic (ROC) curve.
		 * Type: float
		 */
		areaUnderCurve: FormControl<number | null | undefined>,

		/**
		 * Mean average prcision of this curve.
		 * Type: float
		 */
		meanAveragePrecision: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1PrCurveFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1PrCurveFormProperties>({
			areaUnderCurve: new FormControl<number | null | undefined>(undefined),
			meanAveragePrecision: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry {

		/**
		 * Threshold used for this entry. For classification tasks, this is a classification threshold: a predicted label is categorized as positive or negative (in the context of this point on the PR curve) based on whether the label's score meets this threshold. For image object detection (bounding box) tasks, this is the [intersection-over-union (IOU)](/vision/automl/object-detection/docs/evaluate#intersection-over-union) threshold for the context of this point on the PR curve.
		 * Type: float
		 */
		confidenceThreshold?: number | null;

		/**
		 * Harmonic mean of recall and precision.
		 * Type: float
		 */
		f1Score?: number | null;

		/**
		 * The harmonic mean of recall_at1 and precision_at1.
		 * Type: float
		 */
		f1ScoreAt1?: number | null;

		/**
		 * The harmonic mean of recall_at5 and precision_at5.
		 * Type: float
		 */
		f1ScoreAt5?: number | null;

		/**
		 * Precision value.
		 * Type: float
		 */
		precision?: number | null;

		/**
		 * Precision value for entries with label that has highest score.
		 * Type: float
		 */
		precisionAt1?: number | null;

		/**
		 * Precision value for entries with label that has highest 5 scores.
		 * Type: float
		 */
		precisionAt5?: number | null;

		/**
		 * Recall value.
		 * Type: float
		 */
		recall?: number | null;

		/**
		 * Recall value for entries with label that has highest score.
		 * Type: float
		 */
		recallAt1?: number | null;

		/**
		 * Recall value for entries with label that has highest 5 scores.
		 * Type: float
		 */
		recallAt5?: number | null;
	}
	export interface GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntryFormProperties {

		/**
		 * Threshold used for this entry. For classification tasks, this is a classification threshold: a predicted label is categorized as positive or negative (in the context of this point on the PR curve) based on whether the label's score meets this threshold. For image object detection (bounding box) tasks, this is the [intersection-over-union (IOU)](/vision/automl/object-detection/docs/evaluate#intersection-over-union) threshold for the context of this point on the PR curve.
		 * Type: float
		 */
		confidenceThreshold: FormControl<number | null | undefined>,

		/**
		 * Harmonic mean of recall and precision.
		 * Type: float
		 */
		f1Score: FormControl<number | null | undefined>,

		/**
		 * The harmonic mean of recall_at1 and precision_at1.
		 * Type: float
		 */
		f1ScoreAt1: FormControl<number | null | undefined>,

		/**
		 * The harmonic mean of recall_at5 and precision_at5.
		 * Type: float
		 */
		f1ScoreAt5: FormControl<number | null | undefined>,

		/**
		 * Precision value.
		 * Type: float
		 */
		precision: FormControl<number | null | undefined>,

		/**
		 * Precision value for entries with label that has highest score.
		 * Type: float
		 */
		precisionAt1: FormControl<number | null | undefined>,

		/**
		 * Precision value for entries with label that has highest 5 scores.
		 * Type: float
		 */
		precisionAt5: FormControl<number | null | undefined>,

		/**
		 * Recall value.
		 * Type: float
		 */
		recall: FormControl<number | null | undefined>,

		/**
		 * Recall value for entries with label that has highest score.
		 * Type: float
		 */
		recallAt1: FormControl<number | null | undefined>,

		/**
		 * Recall value for entries with label that has highest 5 scores.
		 * Type: float
		 */
		recallAt5: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ConfidenceMetricsEntryFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntryFormProperties>({
			confidenceThreshold: new FormControl<number | null | undefined>(undefined),
			f1Score: new FormControl<number | null | undefined>(undefined),
			f1ScoreAt1: new FormControl<number | null | undefined>(undefined),
			f1ScoreAt5: new FormControl<number | null | undefined>(undefined),
			precision: new FormControl<number | null | undefined>(undefined),
			precisionAt1: new FormControl<number | null | undefined>(undefined),
			precisionAt5: new FormControl<number | null | undefined>(undefined),
			recall: new FormControl<number | null | undefined>(undefined),
			recallAt1: new FormControl<number | null | undefined>(undefined),
			recallAt5: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request message for CreateAnnotationSpecSet. */
	export interface GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest {

		/** An AnnotationSpecSet is a collection of label definitions. For example, in image classification tasks, you define a set of possible labels for images as an AnnotationSpecSet. An AnnotationSpecSet is immutable upon creation. */
		annotationSpecSet?: GoogleCloudDatalabelingV1beta1AnnotationSpecSet;
	}

	/** Request message for CreateAnnotationSpecSet. */
	export interface GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequestFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequestFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequestFormProperties>({
		});

	}


	/** Request message for CreateDataset. */
	export interface GoogleCloudDatalabelingV1beta1CreateDatasetRequest {

		/** Dataset is the resource to hold your data. You can request multiple labeling tasks for a dataset while each one will generate an AnnotatedDataset. */
		dataset?: GoogleCloudDatalabelingV1beta1Dataset;
	}

	/** Request message for CreateDataset. */
	export interface GoogleCloudDatalabelingV1beta1CreateDatasetRequestFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1CreateDatasetRequestFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1CreateDatasetRequestFormProperties>({
		});

	}


	/** Dataset is the resource to hold your data. You can request multiple labeling tasks for a dataset while each one will generate an AnnotatedDataset. */
	export interface GoogleCloudDatalabelingV1beta1Dataset {

		/** Output only. The names of any related resources that are blocking changes to the dataset. */
		blockingResources?: Array<string>;

		/** Output only. Time the dataset is created. */
		createTime?: string | null;

		/** Output only. The number of data items in the dataset. */
		dataItemCount?: string | null;

		/** Optional. User-provided description of the annotation specification set. The description can be up to 10000 characters long. */
		description?: string | null;

		/** Required. The display name of the dataset. Maximum of 64 characters. */
		displayName?: string | null;

		/** Output only. This is populated with the original input configs where ImportData is called. It is available only after the clients import data to this dataset. */
		inputConfigs?: Array<GoogleCloudDatalabelingV1beta1InputConfig>;

		/** Last time that the Dataset is migrated to AI Platform V2. If any of the AnnotatedDataset is migrated, the last_migration_time in Dataset is also updated. */
		lastMigrateTime?: string | null;

		/** Output only. Dataset resource name, format is: projects/{project_id}/datasets/{dataset_id} */
		name?: string | null;
	}

	/** Dataset is the resource to hold your data. You can request multiple labeling tasks for a dataset while each one will generate an AnnotatedDataset. */
	export interface GoogleCloudDatalabelingV1beta1DatasetFormProperties {

		/** Output only. Time the dataset is created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The number of data items in the dataset. */
		dataItemCount: FormControl<string | null | undefined>,

		/** Optional. User-provided description of the annotation specification set. The description can be up to 10000 characters long. */
		description: FormControl<string | null | undefined>,

		/** Required. The display name of the dataset. Maximum of 64 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Last time that the Dataset is migrated to AI Platform V2. If any of the AnnotatedDataset is migrated, the last_migration_time in Dataset is also updated. */
		lastMigrateTime: FormControl<string | null | undefined>,

		/** Output only. Dataset resource name, format is: projects/{project_id}/datasets/{dataset_id} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1DatasetFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1DatasetFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			dataItemCount: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			lastMigrateTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration of input data, including data type, location, etc. */
	export interface GoogleCloudDatalabelingV1beta1InputConfig {

		/** Optional. The type of annotation to be performed on this data. You must specify this field if you are using this InputConfig in an EvaluationJob. */
		annotationType?: GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationType | null;

		/** The BigQuery location for input data. If used in an EvaluationJob, this is where the service saves the prediction input and output sampled from the model version. */
		bigquerySource?: GoogleCloudDatalabelingV1beta1BigQuerySource;

		/** Metadata for classification annotations. */
		classificationMetadata?: GoogleCloudDatalabelingV1beta1ClassificationMetadata;

		/** Required. Data type must be specifed when user tries to import data. */
		dataType?: GoogleCloudDatalabelingV1beta1InputConfigDataType | null;

		/** Source of the Cloud Storage file to be imported. */
		gcsSource?: GoogleCloudDatalabelingV1beta1GcsSource;

		/** Metadata for the text. */
		textMetadata?: GoogleCloudDatalabelingV1beta1TextMetadata;
	}

	/** The configuration of input data, including data type, location, etc. */
	export interface GoogleCloudDatalabelingV1beta1InputConfigFormProperties {

		/** Optional. The type of annotation to be performed on this data. You must specify this field if you are using this InputConfig in an EvaluationJob. */
		annotationType: FormControl<GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationType | null | undefined>,

		/** Required. Data type must be specifed when user tries to import data. */
		dataType: FormControl<GoogleCloudDatalabelingV1beta1InputConfigDataType | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1InputConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1InputConfigFormProperties>({
			annotationType: new FormControl<GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationType | null | undefined>(undefined),
			dataType: new FormControl<GoogleCloudDatalabelingV1beta1InputConfigDataType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatalabelingV1beta1InputConfigDataType { DATA_TYPE_UNSPECIFIED = 'DATA_TYPE_UNSPECIFIED', IMAGE = 'IMAGE', VIDEO = 'VIDEO', TEXT = 'TEXT', GENERAL_DATA = 'GENERAL_DATA' }


	/** Source of the Cloud Storage file to be imported. */
	export interface GoogleCloudDatalabelingV1beta1GcsSource {

		/** Required. The input URI of source file. This must be a Cloud Storage path (`gs://...`). */
		inputUri?: string | null;

		/** Required. The format of the source file. Only "text/csv" is supported. */
		mimeType?: string | null;
	}

	/** Source of the Cloud Storage file to be imported. */
	export interface GoogleCloudDatalabelingV1beta1GcsSourceFormProperties {

		/** Required. The input URI of source file. This must be a Cloud Storage path (`gs://...`). */
		inputUri: FormControl<string | null | undefined>,

		/** Required. The format of the source file. Only "text/csv" is supported. */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1GcsSourceFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1GcsSourceFormProperties>({
			inputUri: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for the text. */
	export interface GoogleCloudDatalabelingV1beta1TextMetadata {

		/** The language of this text, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. */
		languageCode?: string | null;
	}

	/** Metadata for the text. */
	export interface GoogleCloudDatalabelingV1beta1TextMetadataFormProperties {

		/** The language of this text, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1TextMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1TextMetadataFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CreateEvaluationJob. */
	export interface GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest {

		/** Defines an evaluation job that runs periodically to generate Evaluations. [Creating an evaluation job](/ml-engine/docs/continuous-evaluation/create-job) is the starting point for using continuous evaluation. */
		job?: GoogleCloudDatalabelingV1beta1EvaluationJob;
	}

	/** Request message for CreateEvaluationJob. */
	export interface GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequestFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1CreateEvaluationJobRequestFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequestFormProperties>({
		});

	}


	/** Defines an evaluation job that runs periodically to generate Evaluations. [Creating an evaluation job](/ml-engine/docs/continuous-evaluation/create-job) is the starting point for using continuous evaluation. */
	export interface GoogleCloudDatalabelingV1beta1EvaluationJob {

		/** Required. Name of the AnnotationSpecSet describing all the labels that your machine learning model outputs. You must create this resource before you create an evaluation job and provide its name in the following format: "projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}" */
		annotationSpecSet?: string | null;

		/** Output only. Every time the evaluation job runs and an error occurs, the failed attempt is appended to this array. */
		attempts?: Array<GoogleCloudDatalabelingV1beta1Attempt>;

		/** Output only. Timestamp of when this evaluation job was created. */
		createTime?: string | null;

		/** Required. Description of the job. The description can be up to 25,000 characters long. */
		description?: string | null;

		/** Configures specific details of how a continuous evaluation job works. Provide this configuration when you create an EvaluationJob. */
		evaluationJobConfig?: GoogleCloudDatalabelingV1beta1EvaluationJobConfig;

		/** Required. Whether you want Data Labeling Service to provide ground truth labels for prediction input. If you want the service to assign human labelers to annotate your data, set this to `true`. If you want to provide your own ground truth labels in the evaluation job's BigQuery table, set this to `false`. */
		labelMissingGroundTruth?: boolean | null;

		/** Required. The [AI Platform Prediction model version](/ml-engine/docs/prediction-overview) to be evaluated. Prediction input and output is sampled from this model version. When creating an evaluation job, specify the model version in the following format: "projects/{project_id}/models/{model_name}/versions/{version_name}" There can only be one evaluation job per model version. */
		modelVersion?: string | null;

		/** Output only. After you create a job, Data Labeling Service assigns a name to the job with the following format: "projects/{project_id}/evaluationJobs/ {evaluation_job_id}" */
		name?: string | null;

		/** Required. Describes the interval at which the job runs. This interval must be at least 1 day, and it is rounded to the nearest day. For example, if you specify a 50-hour interval, the job runs every 2 days. You can provide the schedule in [crontab format](/scheduler/docs/configuring/cron-job-schedules) or in an [English-like format](/appengine/docs/standard/python/config/cronref#schedule_format). Regardless of what you specify, the job will run at 10:00 AM UTC. Only the interval from this schedule is used, not the specific time of day. */
		schedule?: string | null;

		/** Output only. Describes the current state of the job. */
		state?: GoogleCloudDatalabelingV1beta1EvaluationJobState | null;
	}

	/** Defines an evaluation job that runs periodically to generate Evaluations. [Creating an evaluation job](/ml-engine/docs/continuous-evaluation/create-job) is the starting point for using continuous evaluation. */
	export interface GoogleCloudDatalabelingV1beta1EvaluationJobFormProperties {

		/** Required. Name of the AnnotationSpecSet describing all the labels that your machine learning model outputs. You must create this resource before you create an evaluation job and provide its name in the following format: "projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}" */
		annotationSpecSet: FormControl<string | null | undefined>,

		/** Output only. Timestamp of when this evaluation job was created. */
		createTime: FormControl<string | null | undefined>,

		/** Required. Description of the job. The description can be up to 25,000 characters long. */
		description: FormControl<string | null | undefined>,

		/** Required. Whether you want Data Labeling Service to provide ground truth labels for prediction input. If you want the service to assign human labelers to annotate your data, set this to `true`. If you want to provide your own ground truth labels in the evaluation job's BigQuery table, set this to `false`. */
		labelMissingGroundTruth: FormControl<boolean | null | undefined>,

		/** Required. The [AI Platform Prediction model version](/ml-engine/docs/prediction-overview) to be evaluated. Prediction input and output is sampled from this model version. When creating an evaluation job, specify the model version in the following format: "projects/{project_id}/models/{model_name}/versions/{version_name}" There can only be one evaluation job per model version. */
		modelVersion: FormControl<string | null | undefined>,

		/** Output only. After you create a job, Data Labeling Service assigns a name to the job with the following format: "projects/{project_id}/evaluationJobs/ {evaluation_job_id}" */
		name: FormControl<string | null | undefined>,

		/** Required. Describes the interval at which the job runs. This interval must be at least 1 day, and it is rounded to the nearest day. For example, if you specify a 50-hour interval, the job runs every 2 days. You can provide the schedule in [crontab format](/scheduler/docs/configuring/cron-job-schedules) or in an [English-like format](/appengine/docs/standard/python/config/cronref#schedule_format). Regardless of what you specify, the job will run at 10:00 AM UTC. Only the interval from this schedule is used, not the specific time of day. */
		schedule: FormControl<string | null | undefined>,

		/** Output only. Describes the current state of the job. */
		state: FormControl<GoogleCloudDatalabelingV1beta1EvaluationJobState | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1EvaluationJobFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1EvaluationJobFormProperties>({
			annotationSpecSet: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labelMissingGroundTruth: new FormControl<boolean | null | undefined>(undefined),
			modelVersion: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			schedule: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDatalabelingV1beta1EvaluationJobState | null | undefined>(undefined),
		});

	}


	/** Configures specific details of how a continuous evaluation job works. Provide this configuration when you create an EvaluationJob. */
	export interface GoogleCloudDatalabelingV1beta1EvaluationJobConfig {

		/** Required. Prediction keys that tell Data Labeling Service where to find the data for evaluation in your BigQuery table. When the service samples prediction input and output from your model version and saves it to BigQuery, the data gets stored as JSON strings in the BigQuery table. These keys tell Data Labeling Service how to parse the JSON. You can provide the following entries in this field: * `data_json_key`: the data key for prediction input. You must provide either this key or `reference_json_key`. * `reference_json_key`: the data reference key for prediction input. You must provide either this key or `data_json_key`. * `label_json_key`: the label key for prediction output. Required. * `label_score_json_key`: the score key for prediction output. Required. * `bounding_box_json_key`: the bounding box key for prediction output. Required if your model version perform image object detection. Learn [how to configure prediction keys](/ml-engine/docs/continuous-evaluation/create-job#prediction-keys). */
		bigqueryImportKeys?: {[id: string]: string };

		/** Config for image bounding poly (and bounding box) human labeling task. */
		boundingPolyConfig?: GoogleCloudDatalabelingV1beta1BoundingPolyConfig;

		/** Configuration details used for calculating evaluation metrics and creating an Evaluation. */
		evaluationConfig?: GoogleCloudDatalabelingV1beta1EvaluationConfig;

		/** Provides details for how an evaluation job sends email alerts based on the results of a run. */
		evaluationJobAlertConfig?: GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig;

		/**
		 * Required. The maximum number of predictions to sample and save to BigQuery during each evaluation interval. This limit overrides `example_sample_percentage`: even if the service has not sampled enough predictions to fulfill `example_sample_perecentage` during an interval, it stops sampling predictions when it meets this limit.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exampleCount?: number | null;

		/**
		 * Required. Fraction of predictions to sample and save to BigQuery during each evaluation interval. For example, 0.1 means 10% of predictions served by your model version get saved to BigQuery.
		 * Type: double
		 */
		exampleSamplePercentage?: number | null;

		/** Configuration for how human labeling task should be done. */
		humanAnnotationConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;

		/** Config for image classification human labeling task. */
		imageClassificationConfig?: GoogleCloudDatalabelingV1beta1ImageClassificationConfig;

		/** The configuration of input data, including data type, location, etc. */
		inputConfig?: GoogleCloudDatalabelingV1beta1InputConfig;

		/** Config for text classification human labeling task. */
		textClassificationConfig?: GoogleCloudDatalabelingV1beta1TextClassificationConfig;
	}

	/** Configures specific details of how a continuous evaluation job works. Provide this configuration when you create an EvaluationJob. */
	export interface GoogleCloudDatalabelingV1beta1EvaluationJobConfigFormProperties {

		/** Required. Prediction keys that tell Data Labeling Service where to find the data for evaluation in your BigQuery table. When the service samples prediction input and output from your model version and saves it to BigQuery, the data gets stored as JSON strings in the BigQuery table. These keys tell Data Labeling Service how to parse the JSON. You can provide the following entries in this field: * `data_json_key`: the data key for prediction input. You must provide either this key or `reference_json_key`. * `reference_json_key`: the data reference key for prediction input. You must provide either this key or `data_json_key`. * `label_json_key`: the label key for prediction output. Required. * `label_score_json_key`: the score key for prediction output. Required. * `bounding_box_json_key`: the bounding box key for prediction output. Required if your model version perform image object detection. Learn [how to configure prediction keys](/ml-engine/docs/continuous-evaluation/create-job#prediction-keys). */
		bigqueryImportKeys: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Required. The maximum number of predictions to sample and save to BigQuery during each evaluation interval. This limit overrides `example_sample_percentage`: even if the service has not sampled enough predictions to fulfill `example_sample_perecentage` during an interval, it stops sampling predictions when it meets this limit.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exampleCount: FormControl<number | null | undefined>,

		/**
		 * Required. Fraction of predictions to sample and save to BigQuery during each evaluation interval. For example, 0.1 means 10% of predictions served by your model version get saved to BigQuery.
		 * Type: double
		 */
		exampleSamplePercentage: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1EvaluationJobConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1EvaluationJobConfigFormProperties>({
			bigqueryImportKeys: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			exampleCount: new FormControl<number | null | undefined>(undefined),
			exampleSamplePercentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configuration details used for calculating evaluation metrics and creating an Evaluation. */
	export interface GoogleCloudDatalabelingV1beta1EvaluationConfig {

		/** Options regarding evaluation between bounding boxes. */
		boundingBoxEvaluationOptions?: GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions;
	}

	/** Configuration details used for calculating evaluation metrics and creating an Evaluation. */
	export interface GoogleCloudDatalabelingV1beta1EvaluationConfigFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1EvaluationConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1EvaluationConfigFormProperties>({
		});

	}


	/** Provides details for how an evaluation job sends email alerts based on the results of a run. */
	export interface GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig {

		/** Required. An email address to send alerts to. */
		email?: string | null;

		/**
		 * Required. A number between 0 and 1 that describes a minimum mean average precision threshold. When the evaluation job runs, if it calculates that your model version's predictions from the recent interval have meanAveragePrecision below this threshold, then it sends an alert to your specified email.
		 * Type: double
		 */
		minAcceptableMeanAveragePrecision?: number | null;
	}

	/** Provides details for how an evaluation job sends email alerts based on the results of a run. */
	export interface GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfigFormProperties {

		/** Required. An email address to send alerts to. */
		email: FormControl<string | null | undefined>,

		/**
		 * Required. A number between 0 and 1 that describes a minimum mean average precision threshold. When the evaluation job runs, if it calculates that your model version's predictions from the recent interval have meanAveragePrecision below this threshold, then it sends an alert to your specified email.
		 * Type: double
		 */
		minAcceptableMeanAveragePrecision: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1EvaluationJobAlertConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfigFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			minAcceptableMeanAveragePrecision: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatalabelingV1beta1EvaluationJobState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', SCHEDULED = 'SCHEDULED', RUNNING = 'RUNNING', PAUSED = 'PAUSED', STOPPED = 'STOPPED' }


	/** Metadata of a CreateInstruction operation. */
	export interface GoogleCloudDatalabelingV1beta1CreateInstructionMetadata {

		/** Timestamp when create instruction request was created. */
		createTime?: string | null;

		/** The name of the created Instruction. projects/{project_id}/instructions/{instruction_id} */
		instruction?: string | null;

		/** Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
		partialFailures?: Array<GoogleRpcStatus>;
	}

	/** Metadata of a CreateInstruction operation. */
	export interface GoogleCloudDatalabelingV1beta1CreateInstructionMetadataFormProperties {

		/** Timestamp when create instruction request was created. */
		createTime: FormControl<string | null | undefined>,

		/** The name of the created Instruction. projects/{project_id}/instructions/{instruction_id} */
		instruction: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1CreateInstructionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1CreateInstructionMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			instruction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CreateInstruction. */
	export interface GoogleCloudDatalabelingV1beta1CreateInstructionRequest {

		/** Instruction of how to perform the labeling task for human operators. Currently only PDF instruction is supported. */
		instruction?: GoogleCloudDatalabelingV1beta1Instruction;
	}

	/** Request message for CreateInstruction. */
	export interface GoogleCloudDatalabelingV1beta1CreateInstructionRequestFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1CreateInstructionRequestFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1CreateInstructionRequestFormProperties>({
		});

	}


	/** Instruction of how to perform the labeling task for human operators. Currently only PDF instruction is supported. */
	export interface GoogleCloudDatalabelingV1beta1Instruction {

		/** Output only. The names of any related resources that are blocking changes to the instruction. */
		blockingResources?: Array<string>;

		/** Output only. Creation time of instruction. */
		createTime?: string | null;

		/** Deprecated: this instruction format is not supported any more. Instruction from a CSV file. */
		csvInstruction?: GoogleCloudDatalabelingV1beta1CsvInstruction;

		/** Required. The data type of this instruction. */
		dataType?: GoogleCloudDatalabelingV1beta1InputConfigDataType | null;

		/** Optional. User-provided description of the instruction. The description can be up to 10000 characters long. */
		description?: string | null;

		/** Required. The display name of the instruction. Maximum of 64 characters. */
		displayName?: string | null;

		/** Output only. Instruction resource name, format: projects/{project_id}/instructions/{instruction_id} */
		name?: string | null;

		/** Instruction from a PDF file. */
		pdfInstruction?: GoogleCloudDatalabelingV1beta1PdfInstruction;

		/** Output only. Last update time of instruction. */
		updateTime?: string | null;
	}

	/** Instruction of how to perform the labeling task for human operators. Currently only PDF instruction is supported. */
	export interface GoogleCloudDatalabelingV1beta1InstructionFormProperties {

		/** Output only. Creation time of instruction. */
		createTime: FormControl<string | null | undefined>,

		/** Required. The data type of this instruction. */
		dataType: FormControl<GoogleCloudDatalabelingV1beta1InputConfigDataType | null | undefined>,

		/** Optional. User-provided description of the instruction. The description can be up to 10000 characters long. */
		description: FormControl<string | null | undefined>,

		/** Required. The display name of the instruction. Maximum of 64 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Instruction resource name, format: projects/{project_id}/instructions/{instruction_id} */
		name: FormControl<string | null | undefined>,

		/** Output only. Last update time of instruction. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1InstructionFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1InstructionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<GoogleCloudDatalabelingV1beta1InputConfigDataType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deprecated: this instruction format is not supported any more. Instruction from a CSV file. */
	export interface GoogleCloudDatalabelingV1beta1CsvInstruction {

		/** CSV file for the instruction. Only gcs path is allowed. */
		gcsFileUri?: string | null;
	}

	/** Deprecated: this instruction format is not supported any more. Instruction from a CSV file. */
	export interface GoogleCloudDatalabelingV1beta1CsvInstructionFormProperties {

		/** CSV file for the instruction. Only gcs path is allowed. */
		gcsFileUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1CsvInstructionFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1CsvInstructionFormProperties>({
			gcsFileUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Instruction from a PDF file. */
	export interface GoogleCloudDatalabelingV1beta1PdfInstruction {

		/** PDF file for the instruction. Only gcs path is allowed. */
		gcsFileUri?: string | null;
	}

	/** Instruction from a PDF file. */
	export interface GoogleCloudDatalabelingV1beta1PdfInstructionFormProperties {

		/** PDF file for the instruction. Only gcs path is allowed. */
		gcsFileUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1PdfInstructionFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1PdfInstructionFormProperties>({
			gcsFileUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DataItem is a piece of data, without annotation. For example, an image. */
	export interface GoogleCloudDatalabelingV1beta1DataItem {

		/** Container of information about an image. */
		imagePayload?: GoogleCloudDatalabelingV1beta1ImagePayload;

		/** Output only. Name of the data item, in format of: projects/{project_id}/datasets/{dataset_id}/dataItems/{data_item_id} */
		name?: string | null;

		/** Container of information about a piece of text. */
		textPayload?: GoogleCloudDatalabelingV1beta1TextPayload;

		/** Container of information of a video. */
		videoPayload?: GoogleCloudDatalabelingV1beta1VideoPayload;
	}

	/** DataItem is a piece of data, without annotation. For example, an image. */
	export interface GoogleCloudDatalabelingV1beta1DataItemFormProperties {

		/** Output only. Name of the data item, in format of: projects/{project_id}/datasets/{dataset_id}/dataItems/{data_item_id} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1DataItemFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1DataItemFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container of information about an image. */
	export interface GoogleCloudDatalabelingV1beta1ImagePayload {

		/** A byte string of a thumbnail image. */
		imageThumbnail?: string | null;

		/** Image uri from the user bucket. */
		imageUri?: string | null;

		/** Image format. */
		mimeType?: string | null;

		/** Signed uri of the image file in the service bucket. */
		signedUri?: string | null;
	}

	/** Container of information about an image. */
	export interface GoogleCloudDatalabelingV1beta1ImagePayloadFormProperties {

		/** A byte string of a thumbnail image. */
		imageThumbnail: FormControl<string | null | undefined>,

		/** Image uri from the user bucket. */
		imageUri: FormControl<string | null | undefined>,

		/** Image format. */
		mimeType: FormControl<string | null | undefined>,

		/** Signed uri of the image file in the service bucket. */
		signedUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ImagePayloadFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ImagePayloadFormProperties>({
			imageThumbnail: new FormControl<string | null | undefined>(undefined),
			imageUri: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			signedUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container of information about a piece of text. */
	export interface GoogleCloudDatalabelingV1beta1TextPayload {

		/** Text content. */
		textContent?: string | null;
	}

	/** Container of information about a piece of text. */
	export interface GoogleCloudDatalabelingV1beta1TextPayloadFormProperties {

		/** Text content. */
		textContent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1TextPayloadFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1TextPayloadFormProperties>({
			textContent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container of information of a video. */
	export interface GoogleCloudDatalabelingV1beta1VideoPayload {

		/**
		 * FPS of the video.
		 * Type: float
		 */
		frameRate?: number | null;

		/** Video format. */
		mimeType?: string | null;

		/** Signed uri of the video file in the service bucket. */
		signedUri?: string | null;

		/** The list of video thumbnails. */
		videoThumbnails?: Array<GoogleCloudDatalabelingV1beta1VideoThumbnail>;

		/** Video uri from the user bucket. */
		videoUri?: string | null;
	}

	/** Container of information of a video. */
	export interface GoogleCloudDatalabelingV1beta1VideoPayloadFormProperties {

		/**
		 * FPS of the video.
		 * Type: float
		 */
		frameRate: FormControl<number | null | undefined>,

		/** Video format. */
		mimeType: FormControl<string | null | undefined>,

		/** Signed uri of the video file in the service bucket. */
		signedUri: FormControl<string | null | undefined>,

		/** Video uri from the user bucket. */
		videoUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1VideoPayloadFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1VideoPayloadFormProperties>({
			frameRate: new FormControl<number | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			signedUri: new FormControl<string | null | undefined>(undefined),
			videoUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container of information of a video thumbnail. */
	export interface GoogleCloudDatalabelingV1beta1VideoThumbnail {

		/** A byte string of the video frame. */
		thumbnail?: string | null;

		/** Time offset relative to the beginning of the video, corresponding to the video frame where the thumbnail has been extracted from. */
		timeOffset?: string | null;
	}

	/** Container of information of a video thumbnail. */
	export interface GoogleCloudDatalabelingV1beta1VideoThumbnailFormProperties {

		/** A byte string of the video frame. */
		thumbnail: FormControl<string | null | undefined>,

		/** Time offset relative to the beginning of the video, corresponding to the video frame where the thumbnail has been extracted from. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1VideoThumbnailFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1VideoThumbnailFormProperties>({
			thumbnail: new FormControl<string | null | undefined>(undefined),
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an evaluation between a machine learning model's predictions and ground truth labels. Created when an EvaluationJob runs successfully. */
	export interface GoogleCloudDatalabelingV1beta1Evaluation {

		/** Output only. Type of task that the model version being evaluated performs, as defined in the evaluationJobConfig.inputConfig.annotationType field of the evaluation job that created this evaluation. */
		annotationType?: GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationType | null;

		/** Configuration details used for calculating evaluation metrics and creating an Evaluation. */
		config?: GoogleCloudDatalabelingV1beta1EvaluationConfig;

		/** Output only. Timestamp for when this evaluation was created. */
		createTime?: string | null;

		/** Output only. The number of items in the ground truth dataset that were used for this evaluation. Only populated when the evaulation is for certain AnnotationTypes. */
		evaluatedItemCount?: string | null;

		/** Output only. Timestamp for when the evaluation job that created this evaluation ran. */
		evaluationJobRunTime?: string | null;
		evaluationMetrics?: GoogleCloudDatalabelingV1beta1EvaluationMetrics;

		/** Output only. Resource name of an evaluation. The name has the following format: "projects/{project_id}/datasets/{dataset_id}/evaluations/ {evaluation_id}' */
		name?: string | null;
	}

	/** Describes an evaluation between a machine learning model's predictions and ground truth labels. Created when an EvaluationJob runs successfully. */
	export interface GoogleCloudDatalabelingV1beta1EvaluationFormProperties {

		/** Output only. Type of task that the model version being evaluated performs, as defined in the evaluationJobConfig.inputConfig.annotationType field of the evaluation job that created this evaluation. */
		annotationType: FormControl<GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationType | null | undefined>,

		/** Output only. Timestamp for when this evaluation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The number of items in the ground truth dataset that were used for this evaluation. Only populated when the evaulation is for certain AnnotationTypes. */
		evaluatedItemCount: FormControl<string | null | undefined>,

		/** Output only. Timestamp for when the evaluation job that created this evaluation ran. */
		evaluationJobRunTime: FormControl<string | null | undefined>,

		/** Output only. Resource name of an evaluation. The name has the following format: "projects/{project_id}/datasets/{dataset_id}/evaluations/ {evaluation_id}' */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1EvaluationFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1EvaluationFormProperties>({
			annotationType: new FormControl<GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationType | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			evaluatedItemCount: new FormControl<string | null | undefined>(undefined),
			evaluationJobRunTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudDatalabelingV1beta1EvaluationMetrics {

		/** Metrics calculated for a classification model. */
		classificationMetrics?: GoogleCloudDatalabelingV1beta1ClassificationMetrics;

		/** Metrics calculated for an image object detection (bounding box) model. */
		objectDetectionMetrics?: GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics;
	}
	export interface GoogleCloudDatalabelingV1beta1EvaluationMetricsFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1EvaluationMetricsFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1EvaluationMetricsFormProperties>({
		});

	}


	/** Metrics calculated for an image object detection (bounding box) model. */
	export interface GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics {
		prCurve?: GoogleCloudDatalabelingV1beta1PrCurve;
	}

	/** Metrics calculated for an image object detection (bounding box) model. */
	export interface GoogleCloudDatalabelingV1beta1ObjectDetectionMetricsFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1ObjectDetectionMetricsFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ObjectDetectionMetricsFormProperties>({
		});

	}


	/** An Example is a piece of data and its annotation. For example, an image with label "house". */
	export interface GoogleCloudDatalabelingV1beta1Example {

		/** Output only. Annotations for the piece of data in Example. One piece of data can have multiple annotations. */
		annotations?: Array<GoogleCloudDatalabelingV1beta1Annotation>;

		/** Container of information about an image. */
		imagePayload?: GoogleCloudDatalabelingV1beta1ImagePayload;

		/** Output only. Name of the example, in format of: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}/examples/{example_id} */
		name?: string | null;

		/** Container of information about a piece of text. */
		textPayload?: GoogleCloudDatalabelingV1beta1TextPayload;

		/** Container of information of a video. */
		videoPayload?: GoogleCloudDatalabelingV1beta1VideoPayload;
	}

	/** An Example is a piece of data and its annotation. For example, an image with label "house". */
	export interface GoogleCloudDatalabelingV1beta1ExampleFormProperties {

		/** Output only. Name of the example, in format of: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}/examples/{example_id} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ExampleFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ExampleFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Example comparisons comparing ground truth output and predictions for a specific input. */
	export interface GoogleCloudDatalabelingV1beta1ExampleComparison {

		/** An Example is a piece of data and its annotation. For example, an image with label "house". */
		groundTruthExample?: GoogleCloudDatalabelingV1beta1Example;

		/** Predictions by the model for the input. */
		modelCreatedExamples?: Array<GoogleCloudDatalabelingV1beta1Example>;
	}

	/** Example comparisons comparing ground truth output and predictions for a specific input. */
	export interface GoogleCloudDatalabelingV1beta1ExampleComparisonFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1ExampleComparisonFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ExampleComparisonFormProperties>({
		});

	}


	/** Metadata of an ExportData operation. */
	export interface GoogleCloudDatalabelingV1beta1ExportDataOperationMetadata {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset?: string | null;

		/** Output only. Timestamp when export dataset request was created. */
		createTime?: string | null;

		/** Output only. The name of dataset to be exported. "projects/datasets/*" */
		dataset?: string | null;

		/** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
		partialFailures?: Array<GoogleRpcStatus>;
	}

	/** Metadata of an ExportData operation. */
	export interface GoogleCloudDatalabelingV1beta1ExportDataOperationMetadataFormProperties {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset: FormControl<string | null | undefined>,

		/** Output only. Timestamp when export dataset request was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The name of dataset to be exported. "projects/datasets/*" */
		dataset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ExportDataOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ExportDataOperationMetadataFormProperties>({
			annotatedDataset: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			dataset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response used for ExportDataset longrunning operation. */
	export interface GoogleCloudDatalabelingV1beta1ExportDataOperationResponse {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset?: string | null;

		/** Ouptut only. The name of dataset. "projects/datasets/*" */
		dataset?: string | null;

		/**
		 * Output only. Number of examples exported successfully.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exportCount?: number | null;

		/** Statistics about annotation specs. */
		labelStats?: GoogleCloudDatalabelingV1beta1LabelStats;

		/** The configuration of output data. */
		outputConfig?: GoogleCloudDatalabelingV1beta1OutputConfig;

		/**
		 * Output only. Total number of examples requested to export
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount?: number | null;
	}

	/** Response used for ExportDataset longrunning operation. */
	export interface GoogleCloudDatalabelingV1beta1ExportDataOperationResponseFormProperties {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset: FormControl<string | null | undefined>,

		/** Ouptut only. The name of dataset. "projects/datasets/*" */
		dataset: FormControl<string | null | undefined>,

		/**
		 * Output only. Number of examples exported successfully.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exportCount: FormControl<number | null | undefined>,

		/**
		 * Output only. Total number of examples requested to export
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ExportDataOperationResponseFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ExportDataOperationResponseFormProperties>({
			annotatedDataset: new FormControl<string | null | undefined>(undefined),
			dataset: new FormControl<string | null | undefined>(undefined),
			exportCount: new FormControl<number | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The configuration of output data. */
	export interface GoogleCloudDatalabelingV1beta1OutputConfig {

		/** Export destination of the data.Only gcs path is allowed in output_uri. */
		gcsDestination?: GoogleCloudDatalabelingV1beta1GcsDestination;

		/** Export folder destination of the data. */
		gcsFolderDestination?: GoogleCloudDatalabelingV1beta1GcsFolderDestination;
	}

	/** The configuration of output data. */
	export interface GoogleCloudDatalabelingV1beta1OutputConfigFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1OutputConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1OutputConfigFormProperties>({
		});

	}


	/** Export destination of the data.Only gcs path is allowed in output_uri. */
	export interface GoogleCloudDatalabelingV1beta1GcsDestination {

		/** Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported. */
		mimeType?: string | null;

		/** Required. The output uri of destination file. */
		outputUri?: string | null;
	}

	/** Export destination of the data.Only gcs path is allowed in output_uri. */
	export interface GoogleCloudDatalabelingV1beta1GcsDestinationFormProperties {

		/** Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported. */
		mimeType: FormControl<string | null | undefined>,

		/** Required. The output uri of destination file. */
		outputUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1GcsDestinationFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1GcsDestinationFormProperties>({
			mimeType: new FormControl<string | null | undefined>(undefined),
			outputUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Export folder destination of the data. */
	export interface GoogleCloudDatalabelingV1beta1GcsFolderDestination {

		/** Required. Cloud Storage directory to export data to. */
		outputFolderUri?: string | null;
	}

	/** Export folder destination of the data. */
	export interface GoogleCloudDatalabelingV1beta1GcsFolderDestinationFormProperties {

		/** Required. Cloud Storage directory to export data to. */
		outputFolderUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1GcsFolderDestinationFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1GcsFolderDestinationFormProperties>({
			outputFolderUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for ExportData API. */
	export interface GoogleCloudDatalabelingV1beta1ExportDataRequest {

		/** Required. Annotated dataset resource name. DataItem in Dataset and their annotations in specified annotated dataset will be exported. It's in format of projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id} */
		annotatedDataset?: string | null;

		/** Optional. Filter is not supported at this moment. */
		filter?: string | null;

		/** The configuration of output data. */
		outputConfig?: GoogleCloudDatalabelingV1beta1OutputConfig;

		/** Email of the user who started the export task and should be notified by email. If empty no notification will be sent. */
		userEmailAddress?: string | null;
	}

	/** Request message for ExportData API. */
	export interface GoogleCloudDatalabelingV1beta1ExportDataRequestFormProperties {

		/** Required. Annotated dataset resource name. DataItem in Dataset and their annotations in specified annotated dataset will be exported. It's in format of projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id} */
		annotatedDataset: FormControl<string | null | undefined>,

		/** Optional. Filter is not supported at this moment. */
		filter: FormControl<string | null | undefined>,

		/** Email of the user who started the export task and should be notified by email. If empty no notification will be sent. */
		userEmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ExportDataRequestFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ExportDataRequestFormProperties>({
			annotatedDataset: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			userEmailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A feedback message inside a feedback thread. */
	export interface GoogleCloudDatalabelingV1beta1FeedbackMessage {

		/** String content of the feedback. Maximum of 10000 characters. */
		body?: string | null;

		/** Create time. */
		createTime?: string | null;

		/** The image storing this feedback if the feedback is an image representing operator's comments. */
		image?: string | null;

		/** Name of the feedback message in a feedback thread. Format: 'project/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}/feedbackMessage/{feedback_message_id}' */
		name?: string | null;

		/** Metadata describing the feedback from the operator. */
		operatorFeedbackMetadata?: GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadata;

		/** Metadata describing the feedback from the labeling task requester. */
		requesterFeedbackMetadata?: GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadata;
	}

	/** A feedback message inside a feedback thread. */
	export interface GoogleCloudDatalabelingV1beta1FeedbackMessageFormProperties {

		/** String content of the feedback. Maximum of 10000 characters. */
		body: FormControl<string | null | undefined>,

		/** Create time. */
		createTime: FormControl<string | null | undefined>,

		/** The image storing this feedback if the feedback is an image representing operator's comments. */
		image: FormControl<string | null | undefined>,

		/** Name of the feedback message in a feedback thread. Format: 'project/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}/feedbackMessage/{feedback_message_id}' */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1FeedbackMessageFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1FeedbackMessageFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata describing the feedback from the operator. */
	export interface GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadata {
	}

	/** Metadata describing the feedback from the operator. */
	export interface GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1OperatorFeedbackMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadataFormProperties>({
		});

	}


	/** Metadata describing the feedback from the labeling task requester. */
	export interface GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadata {
	}

	/** Metadata describing the feedback from the labeling task requester. */
	export interface GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1RequesterFeedbackMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadataFormProperties>({
		});

	}


	/** A feedback thread of a certain labeling task on a certain annotated dataset. */
	export interface GoogleCloudDatalabelingV1beta1FeedbackThread {
		feedbackThreadMetadata?: GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata;

		/** Name of the feedback thread. Format: 'project/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}' */
		name?: string | null;
	}

	/** A feedback thread of a certain labeling task on a certain annotated dataset. */
	export interface GoogleCloudDatalabelingV1beta1FeedbackThreadFormProperties {

		/** Name of the feedback thread. Format: 'project/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}' */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1FeedbackThreadFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1FeedbackThreadFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata {

		/** When the thread is created */
		createTime?: string | null;

		/** When the thread is last updated. */
		lastUpdateTime?: string | null;
		status?: GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatus | null;

		/** An image thumbnail of this thread. */
		thumbnail?: string | null;
	}
	export interface GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataFormProperties {

		/** When the thread is created */
		createTime: FormControl<string | null | undefined>,

		/** When the thread is last updated. */
		lastUpdateTime: FormControl<string | null | undefined>,
		status: FormControl<GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatus | null | undefined>,

		/** An image thumbnail of this thread. */
		thumbnail: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1FeedbackThreadMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			lastUpdateTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatus | null | undefined>(undefined),
			thumbnail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatus { FEEDBACK_THREAD_STATUS_UNSPECIFIED = 'FEEDBACK_THREAD_STATUS_UNSPECIFIED', NEW = 'NEW', REPLIED = 'REPLIED' }


	/** Metadata of an ImportData operation. */
	export interface GoogleCloudDatalabelingV1beta1ImportDataOperationMetadata {

		/** Output only. Timestamp when import dataset request was created. */
		createTime?: string | null;

		/** Output only. The name of imported dataset. "projects/datasets/*" */
		dataset?: string | null;

		/** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
		partialFailures?: Array<GoogleRpcStatus>;
	}

	/** Metadata of an ImportData operation. */
	export interface GoogleCloudDatalabelingV1beta1ImportDataOperationMetadataFormProperties {

		/** Output only. Timestamp when import dataset request was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The name of imported dataset. "projects/datasets/*" */
		dataset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ImportDataOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ImportDataOperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			dataset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response used for ImportData longrunning operation. */
	export interface GoogleCloudDatalabelingV1beta1ImportDataOperationResponse {

		/** Ouptut only. The name of imported dataset. */
		dataset?: string | null;

		/**
		 * Output only. Number of examples imported successfully.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		importCount?: number | null;

		/**
		 * Output only. Total number of examples requested to import
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount?: number | null;
	}

	/** Response used for ImportData longrunning operation. */
	export interface GoogleCloudDatalabelingV1beta1ImportDataOperationResponseFormProperties {

		/** Ouptut only. The name of imported dataset. */
		dataset: FormControl<string | null | undefined>,

		/**
		 * Output only. Number of examples imported successfully.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		importCount: FormControl<number | null | undefined>,

		/**
		 * Output only. Total number of examples requested to import
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ImportDataOperationResponseFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ImportDataOperationResponseFormProperties>({
			dataset: new FormControl<string | null | undefined>(undefined),
			importCount: new FormControl<number | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request message for ImportData API. */
	export interface GoogleCloudDatalabelingV1beta1ImportDataRequest {

		/** The configuration of input data, including data type, location, etc. */
		inputConfig?: GoogleCloudDatalabelingV1beta1InputConfig;

		/** Email of the user who started the import task and should be notified by email. If empty no notification will be sent. */
		userEmailAddress?: string | null;
	}

	/** Request message for ImportData API. */
	export interface GoogleCloudDatalabelingV1beta1ImportDataRequestFormProperties {

		/** Email of the user who started the import task and should be notified by email. If empty no notification will be sent. */
		userEmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ImportDataRequestFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ImportDataRequestFormProperties>({
			userEmailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of a LabelImageBoundingBox operation metadata. */
	export interface GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
	}

	/** Details of a LabelImageBoundingBox operation metadata. */
	export interface GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadataFormProperties>({
		});

	}


	/** Details of LabelImageBoundingPoly operation metadata. */
	export interface GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
	}

	/** Details of LabelImageBoundingPoly operation metadata. */
	export interface GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadataFormProperties>({
		});

	}


	/** Metadata of a LabelImageClassification operation. */
	export interface GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
	}

	/** Metadata of a LabelImageClassification operation. */
	export interface GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelImageOrientedBoundingBox operation metadata. */
	export interface GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
	}

	/** Details of a LabelImageOrientedBoundingBox operation metadata. */
	export interface GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadataFormProperties>({
		});

	}


	/** Details of LabelImagePolyline operation metadata. */
	export interface GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
	}

	/** Details of LabelImagePolyline operation metadata. */
	export interface GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadataFormProperties>({
		});

	}


	/** Request message for starting an image labeling task. */
	export interface GoogleCloudDatalabelingV1beta1LabelImageRequest {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;

		/** Config for image bounding poly (and bounding box) human labeling task. */
		boundingPolyConfig?: GoogleCloudDatalabelingV1beta1BoundingPolyConfig;

		/** Required. The type of image labeling task. */
		feature?: GoogleCloudDatalabelingV1beta1LabelImageRequestFeature | null;

		/** Config for image classification human labeling task. */
		imageClassificationConfig?: GoogleCloudDatalabelingV1beta1ImageClassificationConfig;

		/** Config for image polyline human labeling task. */
		polylineConfig?: GoogleCloudDatalabelingV1beta1PolylineConfig;

		/** Config for image segmentation */
		segmentationConfig?: GoogleCloudDatalabelingV1beta1SegmentationConfig;
	}

	/** Request message for starting an image labeling task. */
	export interface GoogleCloudDatalabelingV1beta1LabelImageRequestFormProperties {

		/** Required. The type of image labeling task. */
		feature: FormControl<GoogleCloudDatalabelingV1beta1LabelImageRequestFeature | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1LabelImageRequestFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1LabelImageRequestFormProperties>({
			feature: new FormControl<GoogleCloudDatalabelingV1beta1LabelImageRequestFeature | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatalabelingV1beta1LabelImageRequestFeature { FEATURE_UNSPECIFIED = 'FEATURE_UNSPECIFIED', CLASSIFICATION = 'CLASSIFICATION', BOUNDING_BOX = 'BOUNDING_BOX', ORIENTED_BOUNDING_BOX = 'ORIENTED_BOUNDING_BOX', BOUNDING_POLY = 'BOUNDING_POLY', POLYLINE = 'POLYLINE', SEGMENTATION = 'SEGMENTATION' }


	/** Details of a LabelImageSegmentation operation metadata. */
	export interface GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
	}

	/** Details of a LabelImageSegmentation operation metadata. */
	export interface GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadataFormProperties>({
		});

	}


	/** Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23 */
	export interface GoogleCloudDatalabelingV1beta1LabelOperationMetadata {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset?: string | null;

		/** Output only. Timestamp when labeling request was created. */
		createTime?: string | null;

		/** Output only. The name of dataset to be labeled. "projects/datasets/*" */
		dataset?: string | null;

		/** Details of a LabelImageBoundingBox operation metadata. */
		imageBoundingBoxDetails?: GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadata;

		/** Details of LabelImageBoundingPoly operation metadata. */
		imageBoundingPolyDetails?: GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadata;

		/** Metadata of a LabelImageClassification operation. */
		imageClassificationDetails?: GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadata;

		/** Details of a LabelImageOrientedBoundingBox operation metadata. */
		imageOrientedBoundingBoxDetails?: GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadata;

		/** Details of LabelImagePolyline operation metadata. */
		imagePolylineDetails?: GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadata;

		/** Details of a LabelImageSegmentation operation metadata. */
		imageSegmentationDetails?: GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadata;

		/** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
		partialFailures?: Array<GoogleRpcStatus>;

		/**
		 * Output only. Progress of label operation. Range: [0, 100].
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		progressPercent?: number | null;

		/** Details of a LabelTextClassification operation metadata. */
		textClassificationDetails?: GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadata;

		/** Details of a LabelTextEntityExtraction operation metadata. */
		textEntityExtractionDetails?: GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadata;

		/** Details of a LabelVideoClassification operation metadata. */
		videoClassificationDetails?: GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadata;

		/** Details of a LabelVideoEvent operation metadata. */
		videoEventDetails?: GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadata;

		/** Details of a LabelVideoObjectDetection operation metadata. */
		videoObjectDetectionDetails?: GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadata;

		/** Details of a LabelVideoObjectTracking operation metadata. */
		videoObjectTrackingDetails?: GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadata;
	}

	/** Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23 */
	export interface GoogleCloudDatalabelingV1beta1LabelOperationMetadataFormProperties {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset: FormControl<string | null | undefined>,

		/** Output only. Timestamp when labeling request was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The name of dataset to be labeled. "projects/datasets/*" */
		dataset: FormControl<string | null | undefined>,

		/**
		 * Output only. Progress of label operation. Range: [0, 100].
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		progressPercent: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1LabelOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1LabelOperationMetadataFormProperties>({
			annotatedDataset: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			dataset: new FormControl<string | null | undefined>(undefined),
			progressPercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details of a LabelTextClassification operation metadata. */
	export interface GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
	}

	/** Details of a LabelTextClassification operation metadata. */
	export interface GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelTextEntityExtraction operation metadata. */
	export interface GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
	}

	/** Details of a LabelTextEntityExtraction operation metadata. */
	export interface GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelVideoClassification operation metadata. */
	export interface GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
	}

	/** Details of a LabelVideoClassification operation metadata. */
	export interface GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelVideoEvent operation metadata. */
	export interface GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
	}

	/** Details of a LabelVideoEvent operation metadata. */
	export interface GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelVideoObjectDetection operation metadata. */
	export interface GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
	}

	/** Details of a LabelVideoObjectDetection operation metadata. */
	export interface GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelVideoObjectTracking operation metadata. */
	export interface GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
	}

	/** Details of a LabelVideoObjectTracking operation metadata. */
	export interface GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadataFormProperties>({
		});

	}


	/** Request message for LabelText. */
	export interface GoogleCloudDatalabelingV1beta1LabelTextRequest {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;

		/** Required. The type of text labeling task. */
		feature?: GoogleCloudDatalabelingV1beta1LabelTextRequestFeature | null;

		/** Config for text classification human labeling task. */
		textClassificationConfig?: GoogleCloudDatalabelingV1beta1TextClassificationConfig;

		/** Config for text entity extraction human labeling task. */
		textEntityExtractionConfig?: GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig;
	}

	/** Request message for LabelText. */
	export interface GoogleCloudDatalabelingV1beta1LabelTextRequestFormProperties {

		/** Required. The type of text labeling task. */
		feature: FormControl<GoogleCloudDatalabelingV1beta1LabelTextRequestFeature | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1LabelTextRequestFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1LabelTextRequestFormProperties>({
			feature: new FormControl<GoogleCloudDatalabelingV1beta1LabelTextRequestFeature | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatalabelingV1beta1LabelTextRequestFeature { FEATURE_UNSPECIFIED = 'FEATURE_UNSPECIFIED', TEXT_CLASSIFICATION = 'TEXT_CLASSIFICATION', TEXT_ENTITY_EXTRACTION = 'TEXT_ENTITY_EXTRACTION' }


	/** Request message for LabelVideo. */
	export interface GoogleCloudDatalabelingV1beta1LabelVideoRequest {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;

		/** Config for video event human labeling task. */
		eventConfig?: GoogleCloudDatalabelingV1beta1EventConfig;

		/** Required. The type of video labeling task. */
		feature?: GoogleCloudDatalabelingV1beta1LabelVideoRequestFeature | null;

		/** Config for video object detection human labeling task. Object detection will be conducted on the images extracted from the video, and those objects will be labeled with bounding boxes. User need to specify the number of images to be extracted per second as the extraction frame rate. */
		objectDetectionConfig?: GoogleCloudDatalabelingV1beta1ObjectDetectionConfig;

		/** Config for video object tracking human labeling task. */
		objectTrackingConfig?: GoogleCloudDatalabelingV1beta1ObjectTrackingConfig;

		/** Config for video classification human labeling task. Currently two types of video classification are supported: 1. Assign labels on the entire video. 2. Split the video into multiple video clips based on camera shot, and assign labels on each video clip. */
		videoClassificationConfig?: GoogleCloudDatalabelingV1beta1VideoClassificationConfig;
	}

	/** Request message for LabelVideo. */
	export interface GoogleCloudDatalabelingV1beta1LabelVideoRequestFormProperties {

		/** Required. The type of video labeling task. */
		feature: FormControl<GoogleCloudDatalabelingV1beta1LabelVideoRequestFeature | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1LabelVideoRequestFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1LabelVideoRequestFormProperties>({
			feature: new FormControl<GoogleCloudDatalabelingV1beta1LabelVideoRequestFeature | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatalabelingV1beta1LabelVideoRequestFeature { FEATURE_UNSPECIFIED = 'FEATURE_UNSPECIFIED', CLASSIFICATION = 'CLASSIFICATION', OBJECT_DETECTION = 'OBJECT_DETECTION', OBJECT_TRACKING = 'OBJECT_TRACKING', EVENT = 'EVENT' }


	/** Results of listing annotated datasets for a dataset. */
	export interface GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse {

		/** The list of annotated datasets to return. */
		annotatedDatasets?: Array<GoogleCloudDatalabelingV1beta1AnnotatedDataset>;

		/** A token to retrieve next page of results. */
		nextPageToken?: string | null;
	}

	/** Results of listing annotated datasets for a dataset. */
	export interface GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponseFormProperties {

		/** A token to retrieve next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponseFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results of listing annotation spec set under a project. */
	export interface GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse {

		/** The list of annotation spec sets. */
		annotationSpecSets?: Array<GoogleCloudDatalabelingV1beta1AnnotationSpecSet>;

		/** A token to retrieve next page of results. */
		nextPageToken?: string | null;
	}

	/** Results of listing annotation spec set under a project. */
	export interface GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponseFormProperties {

		/** A token to retrieve next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponseFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results of listing data items in a dataset. */
	export interface GoogleCloudDatalabelingV1beta1ListDataItemsResponse {

		/** The list of data items to return. */
		dataItems?: Array<GoogleCloudDatalabelingV1beta1DataItem>;

		/** A token to retrieve next page of results. */
		nextPageToken?: string | null;
	}

	/** Results of listing data items in a dataset. */
	export interface GoogleCloudDatalabelingV1beta1ListDataItemsResponseFormProperties {

		/** A token to retrieve next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ListDataItemsResponseFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ListDataItemsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results of listing datasets within a project. */
	export interface GoogleCloudDatalabelingV1beta1ListDatasetsResponse {

		/** The list of datasets to return. */
		datasets?: Array<GoogleCloudDatalabelingV1beta1Dataset>;

		/** A token to retrieve next page of results. */
		nextPageToken?: string | null;
	}

	/** Results of listing datasets within a project. */
	export interface GoogleCloudDatalabelingV1beta1ListDatasetsResponseFormProperties {

		/** A token to retrieve next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ListDatasetsResponseFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ListDatasetsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results for listing evaluation jobs. */
	export interface GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse {

		/** The list of evaluation jobs to return. */
		evaluationJobs?: Array<GoogleCloudDatalabelingV1beta1EvaluationJob>;

		/** A token to retrieve next page of results. */
		nextPageToken?: string | null;
	}

	/** Results for listing evaluation jobs. */
	export interface GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponseFormProperties {

		/** A token to retrieve next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ListEvaluationJobsResponseFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results of listing Examples in and annotated dataset. */
	export interface GoogleCloudDatalabelingV1beta1ListExamplesResponse {

		/** The list of examples to return. */
		examples?: Array<GoogleCloudDatalabelingV1beta1Example>;

		/** A token to retrieve next page of results. */
		nextPageToken?: string | null;
	}

	/** Results of listing Examples in and annotated dataset. */
	export interface GoogleCloudDatalabelingV1beta1ListExamplesResponseFormProperties {

		/** A token to retrieve next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ListExamplesResponseFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ListExamplesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results for listing FeedbackMessages. */
	export interface GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse {

		/** The list of feedback messages to return. */
		feedbackMessages?: Array<GoogleCloudDatalabelingV1beta1FeedbackMessage>;

		/** A token to retrieve next page of results. */
		nextPageToken?: string | null;
	}

	/** Results for listing FeedbackMessages. */
	export interface GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponseFormProperties {

		/** A token to retrieve next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponseFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results for listing FeedbackThreads. */
	export interface GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse {

		/** The list of feedback threads to return. */
		feedbackThreads?: Array<GoogleCloudDatalabelingV1beta1FeedbackThread>;

		/** A token to retrieve next page of results. */
		nextPageToken?: string | null;
	}

	/** Results for listing FeedbackThreads. */
	export interface GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponseFormProperties {

		/** A token to retrieve next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponseFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results of listing instructions under a project. */
	export interface GoogleCloudDatalabelingV1beta1ListInstructionsResponse {

		/** The list of Instructions to return. */
		instructions?: Array<GoogleCloudDatalabelingV1beta1Instruction>;

		/** A token to retrieve next page of results. */
		nextPageToken?: string | null;
	}

	/** Results of listing instructions under a project. */
	export interface GoogleCloudDatalabelingV1beta1ListInstructionsResponseFormProperties {

		/** A token to retrieve next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1ListInstructionsResponseFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ListInstructionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for PauseEvaluationJob. */
	export interface GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequest {
	}

	/** Request message for PauseEvaluationJob. */
	export interface GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequestFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1PauseEvaluationJobRequestFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequestFormProperties>({
		});

	}


	/** Request message ResumeEvaluationJob. */
	export interface GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequest {
	}

	/** Request message ResumeEvaluationJob. */
	export interface GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequestFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequestFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequestFormProperties>({
		});

	}


	/** Results of searching evaluations. */
	export interface GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse {

		/** The list of evaluations matching the search. */
		evaluations?: Array<GoogleCloudDatalabelingV1beta1Evaluation>;

		/** A token to retrieve next page of results. */
		nextPageToken?: string | null;
	}

	/** Results of searching evaluations. */
	export interface GoogleCloudDatalabelingV1beta1SearchEvaluationsResponseFormProperties {

		/** A token to retrieve next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1SearchEvaluationsResponseFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1SearchEvaluationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message of SearchExampleComparisons. */
	export interface GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest {

		/**
		 * Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize?: number | null;

		/** Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken of the response to a previous search rquest. If you don't specify this field, the API call requests the first page of the search. */
		pageToken?: string | null;
	}

	/** Request message of SearchExampleComparisons. */
	export interface GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequestFormProperties {

		/**
		 * Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize: FormControl<number | null | undefined>,

		/** Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken of the response to a previous search rquest. If you don't specify this field, the API call requests the first page of the search. */
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequestFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequestFormProperties>({
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results of searching example comparisons. */
	export interface GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse {

		/** A list of example comparisons matching the search criteria. */
		exampleComparisons?: Array<GoogleCloudDatalabelingV1beta1ExampleComparison>;

		/** A token to retrieve next page of results. */
		nextPageToken?: string | null;
	}

	/** Results of searching example comparisons. */
	export interface GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponseFormProperties {

		/** A token to retrieve next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponseFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata of a CreateInstruction operation. */
	export interface GoogleCloudDatalabelingV1p1alpha1CreateInstructionMetadata {

		/** Timestamp when create instruction request was created. */
		createTime?: string | null;

		/** The name of the created Instruction. projects/{project_id}/instructions/{instruction_id} */
		instruction?: string | null;

		/** Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
		partialFailures?: Array<GoogleRpcStatus>;
	}

	/** Metadata of a CreateInstruction operation. */
	export interface GoogleCloudDatalabelingV1p1alpha1CreateInstructionMetadataFormProperties {

		/** Timestamp when create instruction request was created. */
		createTime: FormControl<string | null | undefined>,

		/** The name of the created Instruction. projects/{project_id}/instructions/{instruction_id} */
		instruction: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1CreateInstructionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1CreateInstructionMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			instruction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata of an ExportData operation. */
	export interface GoogleCloudDatalabelingV1p1alpha1ExportDataOperationMetadata {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset?: string | null;

		/** Output only. Timestamp when export dataset request was created. */
		createTime?: string | null;

		/** Output only. The name of dataset to be exported. "projects/datasets/*" */
		dataset?: string | null;

		/** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
		partialFailures?: Array<GoogleRpcStatus>;
	}

	/** Metadata of an ExportData operation. */
	export interface GoogleCloudDatalabelingV1p1alpha1ExportDataOperationMetadataFormProperties {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset: FormControl<string | null | undefined>,

		/** Output only. Timestamp when export dataset request was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The name of dataset to be exported. "projects/datasets/*" */
		dataset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1ExportDataOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1ExportDataOperationMetadataFormProperties>({
			annotatedDataset: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			dataset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response used for ExportDataset longrunning operation. */
	export interface GoogleCloudDatalabelingV1p1alpha1ExportDataOperationResponse {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset?: string | null;

		/** Ouptut only. The name of dataset. "projects/datasets/*" */
		dataset?: string | null;

		/**
		 * Output only. Number of examples exported successfully.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exportCount?: number | null;

		/** Statistics about annotation specs. */
		labelStats?: GoogleCloudDatalabelingV1p1alpha1LabelStats;

		/** The configuration of output data. */
		outputConfig?: GoogleCloudDatalabelingV1p1alpha1OutputConfig;

		/**
		 * Output only. Total number of examples requested to export
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount?: number | null;
	}

	/** Response used for ExportDataset longrunning operation. */
	export interface GoogleCloudDatalabelingV1p1alpha1ExportDataOperationResponseFormProperties {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset: FormControl<string | null | undefined>,

		/** Ouptut only. The name of dataset. "projects/datasets/*" */
		dataset: FormControl<string | null | undefined>,

		/**
		 * Output only. Number of examples exported successfully.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exportCount: FormControl<number | null | undefined>,

		/**
		 * Output only. Total number of examples requested to export
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1ExportDataOperationResponseFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1ExportDataOperationResponseFormProperties>({
			annotatedDataset: new FormControl<string | null | undefined>(undefined),
			dataset: new FormControl<string | null | undefined>(undefined),
			exportCount: new FormControl<number | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Statistics about annotation specs. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelStats {

		/** Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations. */
		exampleCount?: {[id: string]: string };
	}

	/** Statistics about annotation specs. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelStatsFormProperties {

		/** Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations. */
		exampleCount: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1LabelStatsFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1LabelStatsFormProperties>({
			exampleCount: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The configuration of output data. */
	export interface GoogleCloudDatalabelingV1p1alpha1OutputConfig {

		/** Export destination of the data.Only gcs path is allowed in output_uri. */
		gcsDestination?: GoogleCloudDatalabelingV1p1alpha1GcsDestination;

		/** Export folder destination of the data. */
		gcsFolderDestination?: GoogleCloudDatalabelingV1p1alpha1GcsFolderDestination;
	}

	/** The configuration of output data. */
	export interface GoogleCloudDatalabelingV1p1alpha1OutputConfigFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1OutputConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1OutputConfigFormProperties>({
		});

	}


	/** Export destination of the data.Only gcs path is allowed in output_uri. */
	export interface GoogleCloudDatalabelingV1p1alpha1GcsDestination {

		/** Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported. */
		mimeType?: string | null;

		/** Required. The output uri of destination file. */
		outputUri?: string | null;
	}

	/** Export destination of the data.Only gcs path is allowed in output_uri. */
	export interface GoogleCloudDatalabelingV1p1alpha1GcsDestinationFormProperties {

		/** Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported. */
		mimeType: FormControl<string | null | undefined>,

		/** Required. The output uri of destination file. */
		outputUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1GcsDestinationFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1GcsDestinationFormProperties>({
			mimeType: new FormControl<string | null | undefined>(undefined),
			outputUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Export folder destination of the data. */
	export interface GoogleCloudDatalabelingV1p1alpha1GcsFolderDestination {

		/** Required. Cloud Storage directory to export data to. */
		outputFolderUri?: string | null;
	}

	/** Export folder destination of the data. */
	export interface GoogleCloudDatalabelingV1p1alpha1GcsFolderDestinationFormProperties {

		/** Required. Cloud Storage directory to export data to. */
		outputFolderUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1GcsFolderDestinationFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1GcsFolderDestinationFormProperties>({
			outputFolderUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata of an GenerateAnalysisReport operation. */
	export interface GoogleCloudDatalabelingV1p1alpha1GenerateAnalysisReportOperationMetadata {

		/** Timestamp when generate report request was created. */
		createTime?: string | null;

		/** The name of the dataset for which the analysis report is generated. Format: "projects/datasets/*" */
		dataset?: string | null;
	}

	/** Metadata of an GenerateAnalysisReport operation. */
	export interface GoogleCloudDatalabelingV1p1alpha1GenerateAnalysisReportOperationMetadataFormProperties {

		/** Timestamp when generate report request was created. */
		createTime: FormControl<string | null | undefined>,

		/** The name of the dataset for which the analysis report is generated. Format: "projects/datasets/*" */
		dataset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1GenerateAnalysisReportOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1GenerateAnalysisReportOperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			dataset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for how human labeling task should be done. */
	export interface GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig {

		/** Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long. */
		annotatedDatasetDescription?: string | null;

		/** Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters . */
		annotatedDatasetDisplayName?: string | null;

		/** Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/ */
		contributorEmails?: Array<string>;

		/** Required. Instruction resource name. */
		instruction?: string | null;

		/** Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128}`. */
		labelGroup?: string | null;

		/** Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification. */
		languageCode?: string | null;

		/** Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds. */
		questionDuration?: string | null;

		/**
		 * Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replicaCount?: number | null;

		/** Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent. */
		userEmailAddress?: string | null;
	}

	/** Configuration for how human labeling task should be done. */
	export interface GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfigFormProperties {

		/** Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long. */
		annotatedDatasetDescription: FormControl<string | null | undefined>,

		/** Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters . */
		annotatedDatasetDisplayName: FormControl<string | null | undefined>,

		/** Required. Instruction resource name. */
		instruction: FormControl<string | null | undefined>,

		/** Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128}`. */
		labelGroup: FormControl<string | null | undefined>,

		/** Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification. */
		languageCode: FormControl<string | null | undefined>,

		/** Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds. */
		questionDuration: FormControl<string | null | undefined>,

		/**
		 * Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replicaCount: FormControl<number | null | undefined>,

		/** Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent. */
		userEmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfigFormProperties>({
			annotatedDatasetDescription: new FormControl<string | null | undefined>(undefined),
			annotatedDatasetDisplayName: new FormControl<string | null | undefined>(undefined),
			instruction: new FormControl<string | null | undefined>(undefined),
			labelGroup: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			questionDuration: new FormControl<string | null | undefined>(undefined),
			replicaCount: new FormControl<number | null | undefined>(undefined),
			userEmailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata of an ImportData operation. */
	export interface GoogleCloudDatalabelingV1p1alpha1ImportDataOperationMetadata {

		/** Output only. Timestamp when import dataset request was created. */
		createTime?: string | null;

		/** Output only. The name of imported dataset. "projects/datasets/*" */
		dataset?: string | null;

		/** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
		partialFailures?: Array<GoogleRpcStatus>;
	}

	/** Metadata of an ImportData operation. */
	export interface GoogleCloudDatalabelingV1p1alpha1ImportDataOperationMetadataFormProperties {

		/** Output only. Timestamp when import dataset request was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The name of imported dataset. "projects/datasets/*" */
		dataset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1ImportDataOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1ImportDataOperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			dataset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response used for ImportData longrunning operation. */
	export interface GoogleCloudDatalabelingV1p1alpha1ImportDataOperationResponse {

		/** Ouptut only. The name of imported dataset. */
		dataset?: string | null;

		/**
		 * Output only. Number of examples imported successfully.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		importCount?: number | null;

		/**
		 * Output only. Total number of examples requested to import
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount?: number | null;
	}

	/** Response used for ImportData longrunning operation. */
	export interface GoogleCloudDatalabelingV1p1alpha1ImportDataOperationResponseFormProperties {

		/** Ouptut only. The name of imported dataset. */
		dataset: FormControl<string | null | undefined>,

		/**
		 * Output only. Number of examples imported successfully.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		importCount: FormControl<number | null | undefined>,

		/**
		 * Output only. Total number of examples requested to import
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1ImportDataOperationResponseFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1ImportDataOperationResponseFormProperties>({
			dataset: new FormControl<string | null | undefined>(undefined),
			importCount: new FormControl<number | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details of a LabelImageBoundingBox operation metadata. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelImageBoundingBox operation metadata. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadataFormProperties>({
		});

	}


	/** Details of LabelImageBoundingPoly operation metadata. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
	}

	/** Details of LabelImageBoundingPoly operation metadata. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadataFormProperties>({
		});

	}


	/** Metadata of a LabelImageClassification operation. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
	}

	/** Metadata of a LabelImageClassification operation. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelImageOrientedBoundingBox operation metadata. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelImageOrientedBoundingBox operation metadata. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadataFormProperties>({
		});

	}


	/** Details of LabelImagePolyline operation metadata. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
	}

	/** Details of LabelImagePolyline operation metadata. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelImageSegmentation operation metadata. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelImageSegmentation operation metadata. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadataFormProperties>({
		});

	}


	/** Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23 */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelOperationMetadata {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset?: string | null;

		/** Output only. Timestamp when labeling request was created. */
		createTime?: string | null;

		/** Output only. The name of dataset to be labeled. "projects/datasets/*" */
		dataset?: string | null;

		/** Details of a LabelImageBoundingBox operation metadata. */
		imageBoundingBoxDetails?: GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadata;

		/** Details of LabelImageBoundingPoly operation metadata. */
		imageBoundingPolyDetails?: GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadata;

		/** Metadata of a LabelImageClassification operation. */
		imageClassificationDetails?: GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadata;

		/** Details of a LabelImageOrientedBoundingBox operation metadata. */
		imageOrientedBoundingBoxDetails?: GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadata;

		/** Details of LabelImagePolyline operation metadata. */
		imagePolylineDetails?: GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadata;

		/** Details of a LabelImageSegmentation operation metadata. */
		imageSegmentationDetails?: GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadata;

		/** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
		partialFailures?: Array<GoogleRpcStatus>;

		/**
		 * Output only. Progress of label operation. Range: [0, 100].
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		progressPercent?: number | null;

		/** Details of a LabelTextClassification operation metadata. */
		textClassificationDetails?: GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadata;

		/** Details of a LabelTextEntityExtraction operation metadata. */
		textEntityExtractionDetails?: GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadata;

		/** Details of a LabelVideoClassification operation metadata. */
		videoClassificationDetails?: GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadata;

		/** Details of a LabelVideoEvent operation metadata. */
		videoEventDetails?: GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadata;

		/** Details of a LabelVideoObjectDetection operation metadata. */
		videoObjectDetectionDetails?: GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadata;

		/** Details of a LabelVideoObjectTracking operation metadata. */
		videoObjectTrackingDetails?: GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadata;
	}

	/** Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23 */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelOperationMetadataFormProperties {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset: FormControl<string | null | undefined>,

		/** Output only. Timestamp when labeling request was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The name of dataset to be labeled. "projects/datasets/*" */
		dataset: FormControl<string | null | undefined>,

		/**
		 * Output only. Progress of label operation. Range: [0, 100].
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		progressPercent: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1LabelOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1LabelOperationMetadataFormProperties>({
			annotatedDataset: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			dataset: new FormControl<string | null | undefined>(undefined),
			progressPercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details of a LabelTextClassification operation metadata. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelTextClassification operation metadata. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelTextEntityExtraction operation metadata. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelTextEntityExtraction operation metadata. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelVideoClassification operation metadata. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelVideoClassification operation metadata. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelVideoEvent operation metadata. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelVideoEvent operation metadata. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelVideoObjectDetection operation metadata. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelVideoObjectDetection operation metadata. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelVideoObjectTracking operation metadata. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelVideoObjectTracking operation metadata. */
	export interface GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadataFormProperties>({
		});

	}


	/** Metadata of a CreateInstruction operation. */
	export interface GoogleCloudDatalabelingV1p2alpha1CreateInstructionMetadata {

		/** Timestamp when create instruction request was created. */
		createTime?: string | null;

		/** The name of the created Instruction. projects/{project_id}/instructions/{instruction_id} */
		instruction?: string | null;

		/** Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
		partialFailures?: Array<GoogleRpcStatus>;
	}

	/** Metadata of a CreateInstruction operation. */
	export interface GoogleCloudDatalabelingV1p2alpha1CreateInstructionMetadataFormProperties {

		/** Timestamp when create instruction request was created. */
		createTime: FormControl<string | null | undefined>,

		/** The name of the created Instruction. projects/{project_id}/instructions/{instruction_id} */
		instruction: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1p2alpha1CreateInstructionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p2alpha1CreateInstructionMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			instruction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata of an ExportData operation. */
	export interface GoogleCloudDatalabelingV1p2alpha1ExportDataOperationMetadata {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset?: string | null;

		/** Output only. Timestamp when export dataset request was created. */
		createTime?: string | null;

		/** Output only. The name of dataset to be exported. "projects/datasets/*" */
		dataset?: string | null;

		/** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
		partialFailures?: Array<GoogleRpcStatus>;
	}

	/** Metadata of an ExportData operation. */
	export interface GoogleCloudDatalabelingV1p2alpha1ExportDataOperationMetadataFormProperties {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset: FormControl<string | null | undefined>,

		/** Output only. Timestamp when export dataset request was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The name of dataset to be exported. "projects/datasets/*" */
		dataset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1p2alpha1ExportDataOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p2alpha1ExportDataOperationMetadataFormProperties>({
			annotatedDataset: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			dataset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response used for ExportDataset longrunning operation. */
	export interface GoogleCloudDatalabelingV1p2alpha1ExportDataOperationResponse {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset?: string | null;

		/** Ouptut only. The name of dataset. "projects/datasets/*" */
		dataset?: string | null;

		/**
		 * Output only. Number of examples exported successfully.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exportCount?: number | null;

		/** Statistics about annotation specs. */
		labelStats?: GoogleCloudDatalabelingV1p2alpha1LabelStats;

		/** The configuration of output data. */
		outputConfig?: GoogleCloudDatalabelingV1p2alpha1OutputConfig;

		/**
		 * Output only. Total number of examples requested to export
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount?: number | null;
	}

	/** Response used for ExportDataset longrunning operation. */
	export interface GoogleCloudDatalabelingV1p2alpha1ExportDataOperationResponseFormProperties {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset: FormControl<string | null | undefined>,

		/** Ouptut only. The name of dataset. "projects/datasets/*" */
		dataset: FormControl<string | null | undefined>,

		/**
		 * Output only. Number of examples exported successfully.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exportCount: FormControl<number | null | undefined>,

		/**
		 * Output only. Total number of examples requested to export
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1p2alpha1ExportDataOperationResponseFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p2alpha1ExportDataOperationResponseFormProperties>({
			annotatedDataset: new FormControl<string | null | undefined>(undefined),
			dataset: new FormControl<string | null | undefined>(undefined),
			exportCount: new FormControl<number | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Statistics about annotation specs. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelStats {

		/** Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations. */
		exampleCount?: {[id: string]: string };
	}

	/** Statistics about annotation specs. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelStatsFormProperties {

		/** Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations. */
		exampleCount: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1p2alpha1LabelStatsFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p2alpha1LabelStatsFormProperties>({
			exampleCount: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The configuration of output data. */
	export interface GoogleCloudDatalabelingV1p2alpha1OutputConfig {

		/** Export destination of the data.Only gcs path is allowed in output_uri. */
		gcsDestination?: GoogleCloudDatalabelingV1p2alpha1GcsDestination;

		/** Export folder destination of the data. */
		gcsFolderDestination?: GoogleCloudDatalabelingV1p2alpha1GcsFolderDestination;
	}

	/** The configuration of output data. */
	export interface GoogleCloudDatalabelingV1p2alpha1OutputConfigFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p2alpha1OutputConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p2alpha1OutputConfigFormProperties>({
		});

	}


	/** Export destination of the data.Only gcs path is allowed in output_uri. */
	export interface GoogleCloudDatalabelingV1p2alpha1GcsDestination {

		/** Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported. */
		mimeType?: string | null;

		/** Required. The output uri of destination file. */
		outputUri?: string | null;
	}

	/** Export destination of the data.Only gcs path is allowed in output_uri. */
	export interface GoogleCloudDatalabelingV1p2alpha1GcsDestinationFormProperties {

		/** Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported. */
		mimeType: FormControl<string | null | undefined>,

		/** Required. The output uri of destination file. */
		outputUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1p2alpha1GcsDestinationFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p2alpha1GcsDestinationFormProperties>({
			mimeType: new FormControl<string | null | undefined>(undefined),
			outputUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Export folder destination of the data. */
	export interface GoogleCloudDatalabelingV1p2alpha1GcsFolderDestination {

		/** Required. Cloud Storage directory to export data to. */
		outputFolderUri?: string | null;
	}

	/** Export folder destination of the data. */
	export interface GoogleCloudDatalabelingV1p2alpha1GcsFolderDestinationFormProperties {

		/** Required. Cloud Storage directory to export data to. */
		outputFolderUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1p2alpha1GcsFolderDestinationFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p2alpha1GcsFolderDestinationFormProperties>({
			outputFolderUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for how human labeling task should be done. */
	export interface GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig {

		/** Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long. */
		annotatedDatasetDescription?: string | null;

		/** Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters . */
		annotatedDatasetDisplayName?: string | null;

		/** Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/ */
		contributorEmails?: Array<string>;

		/** Required. Instruction resource name. */
		instruction?: string | null;

		/** Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128}`. */
		labelGroup?: string | null;

		/** Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification. */
		languageCode?: string | null;

		/** Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds. */
		questionDuration?: string | null;

		/**
		 * Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replicaCount?: number | null;

		/** Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent. */
		userEmailAddress?: string | null;
	}

	/** Configuration for how human labeling task should be done. */
	export interface GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfigFormProperties {

		/** Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long. */
		annotatedDatasetDescription: FormControl<string | null | undefined>,

		/** Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters . */
		annotatedDatasetDisplayName: FormControl<string | null | undefined>,

		/** Required. Instruction resource name. */
		instruction: FormControl<string | null | undefined>,

		/** Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128}`. */
		labelGroup: FormControl<string | null | undefined>,

		/** Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification. */
		languageCode: FormControl<string | null | undefined>,

		/** Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds. */
		questionDuration: FormControl<string | null | undefined>,

		/**
		 * Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replicaCount: FormControl<number | null | undefined>,

		/** Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent. */
		userEmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfigFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfigFormProperties>({
			annotatedDatasetDescription: new FormControl<string | null | undefined>(undefined),
			annotatedDatasetDisplayName: new FormControl<string | null | undefined>(undefined),
			instruction: new FormControl<string | null | undefined>(undefined),
			labelGroup: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			questionDuration: new FormControl<string | null | undefined>(undefined),
			replicaCount: new FormControl<number | null | undefined>(undefined),
			userEmailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata of an ImportData operation. */
	export interface GoogleCloudDatalabelingV1p2alpha1ImportDataOperationMetadata {

		/** Output only. Timestamp when import dataset request was created. */
		createTime?: string | null;

		/** Output only. The name of imported dataset. "projects/datasets/*" */
		dataset?: string | null;

		/** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
		partialFailures?: Array<GoogleRpcStatus>;
	}

	/** Metadata of an ImportData operation. */
	export interface GoogleCloudDatalabelingV1p2alpha1ImportDataOperationMetadataFormProperties {

		/** Output only. Timestamp when import dataset request was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The name of imported dataset. "projects/datasets/*" */
		dataset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1p2alpha1ImportDataOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p2alpha1ImportDataOperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			dataset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response used for ImportData longrunning operation. */
	export interface GoogleCloudDatalabelingV1p2alpha1ImportDataOperationResponse {

		/** Ouptut only. The name of imported dataset. */
		dataset?: string | null;

		/**
		 * Output only. Number of examples imported successfully.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		importCount?: number | null;

		/**
		 * Output only. Total number of examples requested to import
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount?: number | null;
	}

	/** Response used for ImportData longrunning operation. */
	export interface GoogleCloudDatalabelingV1p2alpha1ImportDataOperationResponseFormProperties {

		/** Ouptut only. The name of imported dataset. */
		dataset: FormControl<string | null | undefined>,

		/**
		 * Output only. Number of examples imported successfully.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		importCount: FormControl<number | null | undefined>,

		/**
		 * Output only. Total number of examples requested to import
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1p2alpha1ImportDataOperationResponseFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p2alpha1ImportDataOperationResponseFormProperties>({
			dataset: new FormControl<string | null | undefined>(undefined),
			importCount: new FormControl<number | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details of a LabelImageBoundingBox operation metadata. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingBoxOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelImageBoundingBox operation metadata. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingBoxOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p2alpha1LabelImageBoundingBoxOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingBoxOperationMetadataFormProperties>({
		});

	}


	/** Details of LabelImageBoundingPoly operation metadata. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingPolyOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
	}

	/** Details of LabelImageBoundingPoly operation metadata. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingPolyOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p2alpha1LabelImageBoundingPolyOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingPolyOperationMetadataFormProperties>({
		});

	}


	/** Metadata of a LabelImageClassification operation. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelImageClassificationOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
	}

	/** Metadata of a LabelImageClassification operation. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelImageClassificationOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p2alpha1LabelImageClassificationOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p2alpha1LabelImageClassificationOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelImageOrientedBoundingBox operation metadata. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelImageOrientedBoundingBoxOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelImageOrientedBoundingBox operation metadata. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelImageOrientedBoundingBoxOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p2alpha1LabelImageOrientedBoundingBoxOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p2alpha1LabelImageOrientedBoundingBoxOperationMetadataFormProperties>({
		});

	}


	/** Details of LabelImagePolyline operation metadata. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelImagePolylineOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
	}

	/** Details of LabelImagePolyline operation metadata. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelImagePolylineOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p2alpha1LabelImagePolylineOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p2alpha1LabelImagePolylineOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelImageSegmentation operation metadata. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelImageSegmentationOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelImageSegmentation operation metadata. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelImageSegmentationOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p2alpha1LabelImageSegmentationOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p2alpha1LabelImageSegmentationOperationMetadataFormProperties>({
		});

	}


	/** Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23 */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelOperationMetadata {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset?: string | null;

		/** Output only. Timestamp when labeling request was created. */
		createTime?: string | null;

		/** Output only. The name of dataset to be labeled. "projects/datasets/*" */
		dataset?: string | null;

		/** Details of a LabelImageBoundingBox operation metadata. */
		imageBoundingBoxDetails?: GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingBoxOperationMetadata;

		/** Details of LabelImageBoundingPoly operation metadata. */
		imageBoundingPolyDetails?: GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingPolyOperationMetadata;

		/** Metadata of a LabelImageClassification operation. */
		imageClassificationDetails?: GoogleCloudDatalabelingV1p2alpha1LabelImageClassificationOperationMetadata;

		/** Details of a LabelImageOrientedBoundingBox operation metadata. */
		imageOrientedBoundingBoxDetails?: GoogleCloudDatalabelingV1p2alpha1LabelImageOrientedBoundingBoxOperationMetadata;

		/** Details of LabelImagePolyline operation metadata. */
		imagePolylineDetails?: GoogleCloudDatalabelingV1p2alpha1LabelImagePolylineOperationMetadata;

		/** Details of a LabelImageSegmentation operation metadata. */
		imageSegmentationDetails?: GoogleCloudDatalabelingV1p2alpha1LabelImageSegmentationOperationMetadata;

		/** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
		partialFailures?: Array<GoogleRpcStatus>;

		/**
		 * Output only. Progress of label operation. Range: [0, 100].
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		progressPercent?: number | null;

		/** Details of a LabelTextClassification operation metadata. */
		textClassificationDetails?: GoogleCloudDatalabelingV1p2alpha1LabelTextClassificationOperationMetadata;

		/** Details of a LabelTextEntityExtraction operation metadata. */
		textEntityExtractionDetails?: GoogleCloudDatalabelingV1p2alpha1LabelTextEntityExtractionOperationMetadata;

		/** Details of a LabelVideoClassification operation metadata. */
		videoClassificationDetails?: GoogleCloudDatalabelingV1p2alpha1LabelVideoClassificationOperationMetadata;

		/** Details of a LabelVideoEvent operation metadata. */
		videoEventDetails?: GoogleCloudDatalabelingV1p2alpha1LabelVideoEventOperationMetadata;

		/** Details of a LabelVideoObjectDetection operation metadata. */
		videoObjectDetectionDetails?: GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectDetectionOperationMetadata;

		/** Details of a LabelVideoObjectTracking operation metadata. */
		videoObjectTrackingDetails?: GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectTrackingOperationMetadata;
	}

	/** Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23 */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelOperationMetadataFormProperties {

		/** Output only. The name of annotated dataset in format "projects/datasets/annotatedDatasets/*". */
		annotatedDataset: FormControl<string | null | undefined>,

		/** Output only. Timestamp when labeling request was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The name of dataset to be labeled. "projects/datasets/*" */
		dataset: FormControl<string | null | undefined>,

		/**
		 * Output only. Progress of label operation. Range: [0, 100].
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		progressPercent: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDatalabelingV1p2alpha1LabelOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p2alpha1LabelOperationMetadataFormProperties>({
			annotatedDataset: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			dataset: new FormControl<string | null | undefined>(undefined),
			progressPercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details of a LabelTextClassification operation metadata. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelTextClassificationOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelTextClassification operation metadata. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelTextClassificationOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p2alpha1LabelTextClassificationOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p2alpha1LabelTextClassificationOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelTextEntityExtraction operation metadata. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelTextEntityExtractionOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelTextEntityExtraction operation metadata. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelTextEntityExtractionOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p2alpha1LabelTextEntityExtractionOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p2alpha1LabelTextEntityExtractionOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelVideoClassification operation metadata. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelVideoClassificationOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelVideoClassification operation metadata. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelVideoClassificationOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p2alpha1LabelVideoClassificationOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p2alpha1LabelVideoClassificationOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelVideoEvent operation metadata. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelVideoEventOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelVideoEvent operation metadata. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelVideoEventOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p2alpha1LabelVideoEventOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p2alpha1LabelVideoEventOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelVideoObjectDetection operation metadata. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectDetectionOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelVideoObjectDetection operation metadata. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectDetectionOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p2alpha1LabelVideoObjectDetectionOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectDetectionOperationMetadataFormProperties>({
		});

	}


	/** Details of a LabelVideoObjectTracking operation metadata. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectTrackingOperationMetadata {

		/** Configuration for how human labeling task should be done. */
		basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
	}

	/** Details of a LabelVideoObjectTracking operation metadata. */
	export interface GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectTrackingOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDatalabelingV1p2alpha1LabelVideoObjectTrackingOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectTrackingOperationMetadataFormProperties>({
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<GoogleLongrunningOperation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleLongrunningListOperationsResponseFormGroup() {
		return new FormGroup<GoogleLongrunningListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleLongrunningOperationFormGroup() {
		return new FormGroup<GoogleLongrunningOperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmpty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmptyFormProperties {
	}
	export function CreateGoogleProtobufEmptyFormGroup() {
		return new FormGroup<GoogleProtobufEmptyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1beta1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Datalabeling_projects_operations_delete(name: string): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1beta1/{name}
		 * @param {string} name The name of the operation resource.
		 * @param {string} filter Optional. An expression for filtering Examples. Filter by annotation_spec.display_name is supported. Format "annotation_spec.display_name = {display_name}"
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Datalabeling_projects_operations_get(name: string, filter: string | null | undefined): Observable<GoogleLongrunningOperation> {
			return this.http.get<GoogleLongrunningOperation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.
		 * Patch v1beta1/{name}
		 * @param {string} name Output only. After you create a job, Data Labeling Service assigns a name to the job with the following format: "projects/{project_id}/evaluationJobs/ {evaluation_job_id}"
		 * @param {string} updateMask Optional. Mask for which fields to update. You can only provide the following fields: * `evaluationJobConfig.humanAnnotationConfig.instruction` * `evaluationJobConfig.exampleCount` * `evaluationJobConfig.exampleSamplePercentage` You can provide more than one of these fields by separating them with commas.
		 * @return {GoogleCloudDatalabelingV1beta1EvaluationJob} Successful response
		 */
		Datalabeling_projects_evaluationJobs_patch(name: string, updateMask: string | null | undefined, requestBody: GoogleCloudDatalabelingV1beta1EvaluationJob): Observable<GoogleCloudDatalabelingV1beta1EvaluationJob> {
			return this.http.patch<GoogleCloudDatalabelingV1beta1EvaluationJob>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1beta1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {GoogleLongrunningListOperationsResponse} Successful response
		 */
		Datalabeling_projects_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleLongrunningListOperationsResponse> {
			return this.http.get<GoogleLongrunningListOperationsResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Get v1beta1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Datalabeling_projects_operations_cancel(name: string): Observable<GoogleProtobufEmpty> {
			return this.http.get<GoogleProtobufEmpty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', {});
		}

		/**
		 * Exports data and annotations from dataset.
		 * Post v1beta1/{name}:exportData
		 * @param {string} name Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id}
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Datalabeling_projects_datasets_exportData(name: string, requestBody: GoogleCloudDatalabelingV1beta1ExportDataRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':exportData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.
		 * Post v1beta1/{name}:importData
		 * @param {string} name Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id}
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Datalabeling_projects_datasets_importData(name: string, requestBody: GoogleCloudDatalabelingV1beta1ImportDataRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':importData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.
		 * Post v1beta1/{name}:pause
		 * @param {string} name Required. Name of the evaluation job that is going to be paused. Format: "projects/{project_id}/evaluationJobs/{evaluation_job_id}"
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Datalabeling_projects_evaluationJobs_pause(name: string, requestBody: GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':pause', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.
		 * Post v1beta1/{name}:resume
		 * @param {string} name Required. Name of the evaluation job that is going to be resumed. Format: "projects/{project_id}/evaluationJobs/{evaluation_job_id}"
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Datalabeling_projects_evaluationJobs_resume(name: string, requestBody: GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':resume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists annotated datasets for a dataset. Pagination is supported.
		 * Get v1beta1/{parent}/annotatedDatasets
		 * @param {string} parent Required. Name of the dataset to list annotated datasets, format: projects/{project_id}/datasets/{dataset_id}
		 * @param {string} filter Optional. Filter is not supported at this moment.
		 * @param {number} pageSize Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A token identifying a page of results for the server to return. Typically obtained by ListAnnotatedDatasetsResponse.next_page_token of the previous [DataLabelingService.ListAnnotatedDatasets] call. Return first page if empty.
		 * @return {GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse} Successful response
		 */
		Datalabeling_projects_datasets_annotatedDatasets_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse> {
			return this.http.get<GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/annotatedDatasets&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists annotation spec sets for a project. Pagination is supported.
		 * Get v1beta1/{parent}/annotationSpecSets
		 * @param {string} parent Required. Parent of AnnotationSpecSet resource, format: projects/{project_id}
		 * @param {string} filter Optional. Filter is not supported at this moment.
		 * @param {number} pageSize Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A token identifying a page of results for the server to return. Typically obtained by ListAnnotationSpecSetsResponse.next_page_token of the previous [DataLabelingService.ListAnnotationSpecSets] call. Return first page if empty.
		 * @return {GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse} Successful response
		 */
		Datalabeling_projects_annotationSpecSets_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse> {
			return this.http.get<GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/annotationSpecSets&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an annotation spec set by providing a set of labels.
		 * Post v1beta1/{parent}/annotationSpecSets
		 * @param {string} parent Required. AnnotationSpecSet resource parent, format: projects/{project_id}
		 * @return {GoogleCloudDatalabelingV1beta1AnnotationSpecSet} Successful response
		 */
		Datalabeling_projects_annotationSpecSets_create(parent: string, requestBody: GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest): Observable<GoogleCloudDatalabelingV1beta1AnnotationSpecSet> {
			return this.http.post<GoogleCloudDatalabelingV1beta1AnnotationSpecSet>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/annotationSpecSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.
		 * Get v1beta1/{parent}/dataItems
		 * @param {string} parent Required. Name of the dataset to list data items, format: projects/{project_id}/datasets/{dataset_id}
		 * @param {string} filter Optional. Filter is not supported at this moment.
		 * @param {number} pageSize Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A token identifying a page of results for the server to return. Typically obtained by ListDataItemsResponse.next_page_token of the previous [DataLabelingService.ListDataItems] call. Return first page if empty.
		 * @return {GoogleCloudDatalabelingV1beta1ListDataItemsResponse} Successful response
		 */
		Datalabeling_projects_datasets_dataItems_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDatalabelingV1beta1ListDataItemsResponse> {
			return this.http.get<GoogleCloudDatalabelingV1beta1ListDataItemsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dataItems&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists datasets under a project. Pagination is supported.
		 * Get v1beta1/{parent}/datasets
		 * @param {string} parent Required. Dataset resource parent, format: projects/{project_id}
		 * @param {string} filter Optional. Filter on dataset is not supported at this moment.
		 * @param {number} pageSize Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A token identifying a page of results for the server to return. Typically obtained by ListDatasetsResponse.next_page_token of the previous [DataLabelingService.ListDatasets] call. Returns the first page if empty.
		 * @return {GoogleCloudDatalabelingV1beta1ListDatasetsResponse} Successful response
		 */
		Datalabeling_projects_datasets_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDatalabelingV1beta1ListDatasetsResponse> {
			return this.http.get<GoogleCloudDatalabelingV1beta1ListDatasetsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/datasets&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates dataset. If success return a Dataset resource.
		 * Post v1beta1/{parent}/datasets
		 * @param {string} parent Required. Dataset resource parent, format: projects/{project_id}
		 * @return {GoogleCloudDatalabelingV1beta1Dataset} Successful response
		 */
		Datalabeling_projects_datasets_create(parent: string, requestBody: GoogleCloudDatalabelingV1beta1CreateDatasetRequest): Observable<GoogleCloudDatalabelingV1beta1Dataset> {
			return this.http.post<GoogleCloudDatalabelingV1beta1Dataset>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/datasets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all evaluation jobs within a project with possible filters. Pagination is supported.
		 * Get v1beta1/{parent}/evaluationJobs
		 * @param {string} parent Required. Evaluation job resource parent. Format: "projects/{project_id}"
		 * @param {string} filter Optional. You can filter the jobs to list by model_id (also known as model_name, as described in EvaluationJob.modelVersion) or by evaluation job state (as described in EvaluationJob.state). To filter by both criteria, use the `AND` operator or the `OR` operator. For example, you can use the following string for your filter: "evaluation_job.model_id = {model_name} AND evaluation_job.state = {evaluation_job_state}"
		 * @param {number} pageSize Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken in the response to the previous request. The request returns the first page if this is empty.
		 * @return {GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse} Successful response
		 */
		Datalabeling_projects_evaluationJobs_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse> {
			return this.http.get<GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/evaluationJobs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an evaluation job.
		 * Post v1beta1/{parent}/evaluationJobs
		 * @param {string} parent Required. Evaluation job resource parent. Format: "projects/{project_id}"
		 * @return {GoogleCloudDatalabelingV1beta1EvaluationJob} Successful response
		 */
		Datalabeling_projects_evaluationJobs_create(parent: string, requestBody: GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest): Observable<GoogleCloudDatalabelingV1beta1EvaluationJob> {
			return this.http.post<GoogleCloudDatalabelingV1beta1EvaluationJob>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/evaluationJobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches evaluations within a project.
		 * Get v1beta1/{parent}/evaluations:search
		 * @param {string} parent Required. Evaluation search parent (project ID). Format: "projects/ {project_id}"
		 * @param {string} filter Optional. To search evaluations, you can filter by the following: * evaluation_job.evaluation_job_id (the last part of EvaluationJob.name) * evaluation_job.model_id (the {model_name} portion of EvaluationJob.modelVersion) * evaluation_job.evaluation_job_run_time_start (Minimum threshold for the evaluationJobRunTime that created the evaluation) * evaluation_job.evaluation_job_run_time_end (Maximum threshold for the evaluationJobRunTime that created the evaluation) * evaluation_job.job_state (EvaluationJob.state) * annotation_spec.display_name (the Evaluation contains a metric for the annotation spec with this displayName) To filter by multiple critiera, use the `AND` operator or the `OR` operator. The following examples shows a string that filters by several critiera: "evaluation_job.evaluation_job_id = {evaluation_job_id} AND evaluation_job.model_id = {model_name} AND evaluation_job.evaluation_job_run_time_start = {timestamp_1} AND evaluation_job.evaluation_job_run_time_end = {timestamp_2} AND annotation_spec.display_name = {display_name}"
		 * @param {number} pageSize Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken of the response to a previous search request. If you don't specify this field, the API call requests the first page of the search.
		 * @return {GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse} Successful response
		 */
		Datalabeling_projects_evaluations_search(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse> {
			return this.http.get<GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/evaluations:search&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Searches example comparisons from an evaluation. The return format is a list of example comparisons that show ground truth and prediction(s) for a single input. Search by providing an evaluation ID.
		 * Post v1beta1/{parent}/exampleComparisons:search
		 * @param {string} parent Required. Name of the Evaluation resource to search for example comparisons from. Format: "projects/{project_id}/datasets/{dataset_id}/evaluations/ {evaluation_id}"
		 * @return {GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse} Successful response
		 */
		Datalabeling_projects_datasets_evaluations_exampleComparisons_search(parent: string, requestBody: GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest): Observable<GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse> {
			return this.http.post<GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/exampleComparisons:search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists examples in an annotated dataset. Pagination is supported.
		 * Get v1beta1/{parent}/examples
		 * @param {string} parent Required. Example resource parent.
		 * @param {string} filter Optional. An expression for filtering Examples. For annotated datasets that have annotation spec set, filter by annotation_spec.display_name is supported. Format "annotation_spec.display_name = {display_name}"
		 * @param {number} pageSize Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A token identifying a page of results for the server to return. Typically obtained by ListExamplesResponse.next_page_token of the previous [DataLabelingService.ListExamples] call. Return first page if empty.
		 * @return {GoogleCloudDatalabelingV1beta1ListExamplesResponse} Successful response
		 */
		Datalabeling_projects_datasets_annotatedDatasets_examples_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDatalabelingV1beta1ListExamplesResponse> {
			return this.http.get<GoogleCloudDatalabelingV1beta1ListExamplesResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/examples&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List FeedbackMessages with pagination.
		 * Get v1beta1/{parent}/feedbackMessages
		 * @param {string} parent Required. FeedbackMessage resource parent. Format: "projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}"
		 * @param {number} pageSize Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A token identifying a page of results for the server to return. Typically obtained by ListFeedbackMessages.next_page_token of the previous [DataLabelingService.ListFeedbackMessages] call. Return first page if empty.
		 * @return {GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse} Successful response
		 */
		Datalabeling_projects_datasets_annotatedDatasets_feedbackThreads_feedbackMessages_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse> {
			return this.http.get<GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/feedbackMessages&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a FeedbackMessage object.
		 * Post v1beta1/{parent}/feedbackMessages
		 * @param {string} parent Required. FeedbackMessage resource parent, format: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Datalabeling_projects_datasets_annotatedDatasets_feedbackThreads_feedbackMessages_create(parent: string, requestBody: GoogleCloudDatalabelingV1beta1FeedbackMessage): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/feedbackMessages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List FeedbackThreads with pagination.
		 * Get v1beta1/{parent}/feedbackThreads
		 * @param {string} parent Required. FeedbackThread resource parent. Format: "projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}"
		 * @param {number} pageSize Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A token identifying a page of results for the server to return. Typically obtained by ListFeedbackThreads.next_page_token of the previous [DataLabelingService.ListFeedbackThreads] call. Return first page if empty.
		 * @return {GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse} Successful response
		 */
		Datalabeling_projects_datasets_annotatedDatasets_feedbackThreads_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse> {
			return this.http.get<GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/feedbackThreads&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts a labeling task for image. The type of image labeling task is configured by feature in the request.
		 * Post v1beta1/{parent}/image:label
		 * @param {string} parent Required. Name of the dataset to request labeling task, format: projects/{project_id}/datasets/{dataset_id}
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Datalabeling_projects_datasets_image_label(parent: string, requestBody: GoogleCloudDatalabelingV1beta1LabelImageRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/image:label', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists instructions for a project. Pagination is supported.
		 * Get v1beta1/{parent}/instructions
		 * @param {string} parent Required. Instruction resource parent, format: projects/{project_id}
		 * @param {string} filter Optional. Filter is not supported at this moment.
		 * @param {number} pageSize Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A token identifying a page of results for the server to return. Typically obtained by ListInstructionsResponse.next_page_token of the previous [DataLabelingService.ListInstructions] call. Return first page if empty.
		 * @return {GoogleCloudDatalabelingV1beta1ListInstructionsResponse} Successful response
		 */
		Datalabeling_projects_instructions_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDatalabelingV1beta1ListInstructionsResponse> {
			return this.http.get<GoogleCloudDatalabelingV1beta1ListInstructionsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instructions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an instruction for how data should be labeled.
		 * Post v1beta1/{parent}/instructions
		 * @param {string} parent Required. Instruction resource parent, format: projects/{project_id}
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Datalabeling_projects_instructions_create(parent: string, requestBody: GoogleCloudDatalabelingV1beta1CreateInstructionRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instructions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a labeling task for text. The type of text labeling task is configured by feature in the request.
		 * Post v1beta1/{parent}/text:label
		 * @param {string} parent Required. Name of the data set to request labeling task, format: projects/{project_id}/datasets/{dataset_id}
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Datalabeling_projects_datasets_text_label(parent: string, requestBody: GoogleCloudDatalabelingV1beta1LabelTextRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/text:label', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a labeling task for video. The type of video labeling task is configured by feature in the request.
		 * Post v1beta1/{parent}/video:label
		 * @param {string} parent Required. Name of the dataset to request labeling task, format: projects/{project_id}/datasets/{dataset_id}
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Datalabeling_projects_datasets_video_label(parent: string, requestBody: GoogleCloudDatalabelingV1beta1LabelVideoRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/video:label', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

