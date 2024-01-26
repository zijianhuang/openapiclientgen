import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Metadata of the auto-labeling documents operation. */
	export interface GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;

		/** The list of individual auto-labeling statuses of the dataset documents. */
		individualAutoLabelStatuses?: Array<GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataIndividualAutoLabelStatus>;

		/** Total number of the auto-labeling documents. */
		totalDocumentCount?: number | null;
	}

	/** Metadata of the auto-labeling documents operation. */
	export interface GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataFormProperties {

		/** Total number of the auto-labeling documents. */
		totalDocumentCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataFormProperties>({
			totalDocumentCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The common metadata for long running operations. */
	export interface GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata {

		/** The creation time of the operation. */
		createTime?: string | null;

		/** A related resource to this operation. */
		resource?: string | null;

		/** The state of the operation. */
		state?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataState | null;

		/** A message providing more details about the current state of processing. */
		stateMessage?: string | null;

		/** The last update time of the operation. */
		updateTime?: string | null;
	}

	/** The common metadata for long running operations. */
	export interface GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataFormProperties {

		/** The creation time of the operation. */
		createTime: FormControl<string | null | undefined>,

		/** A related resource to this operation. */
		resource: FormControl<string | null | undefined>,

		/** The state of the operation. */
		state: FormControl<GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataState | null | undefined>,

		/** A message providing more details about the current state of processing. */
		stateMessage: FormControl<string | null | undefined>,

		/** The last update time of the operation. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3CommonOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataState | null | undefined>(undefined),
			stateMessage: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataState { STATE_UNSPECIFIED = 0, RUNNING = 1, CANCELLING = 2, SUCCEEDED = 3, FAILED = 4, CANCELLED = 5 }


	/** The status of individual documents in the auto-labeling process. */
	export interface GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataIndividualAutoLabelStatus {

		/** Document Identifier. */
		documentId?: GoogleCloudDocumentaiUiv1beta3DocumentId;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;
	}

	/** The status of individual documents in the auto-labeling process. */
	export interface GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataIndividualAutoLabelStatusFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataIndividualAutoLabelStatusFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataIndividualAutoLabelStatusFormProperties>({
		});

	}


	/** Document Identifier. */
	export interface GoogleCloudDocumentaiUiv1beta3DocumentId {

		/** Identifies a document uniquely within the scope of a dataset in the user-managed Cloud Storage option. */
		gcsManagedDocId?: GoogleCloudDocumentaiUiv1beta3DocumentIdGCSManagedDocumentId;

		/** The revision reference specifies which revision on the document to read. */
		revisionRef?: GoogleCloudDocumentaiUiv1beta3RevisionRef;

		/** Identifies a document uniquely within the scope of a dataset in unmanaged option. */
		unmanagedDocId?: GoogleCloudDocumentaiUiv1beta3DocumentIdUnmanagedDocumentId;
	}

	/** Document Identifier. */
	export interface GoogleCloudDocumentaiUiv1beta3DocumentIdFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3DocumentIdFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3DocumentIdFormProperties>({
		});

	}


	/** Identifies a document uniquely within the scope of a dataset in the user-managed Cloud Storage option. */
	export interface GoogleCloudDocumentaiUiv1beta3DocumentIdGCSManagedDocumentId {

		/** Id of the document (indexed) managed by Content Warehouse. */
		cwDocId?: string | null;

		/** Required. The Cloud Storage URI where the actual document is stored. */
		gcsUri?: string | null;
	}

	/** Identifies a document uniquely within the scope of a dataset in the user-managed Cloud Storage option. */
	export interface GoogleCloudDocumentaiUiv1beta3DocumentIdGCSManagedDocumentIdFormProperties {

		/** Id of the document (indexed) managed by Content Warehouse. */
		cwDocId: FormControl<string | null | undefined>,

		/** Required. The Cloud Storage URI where the actual document is stored. */
		gcsUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3DocumentIdGCSManagedDocumentIdFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3DocumentIdGCSManagedDocumentIdFormProperties>({
			cwDocId: new FormControl<string | null | undefined>(undefined),
			gcsUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The revision reference specifies which revision on the document to read. */
	export interface GoogleCloudDocumentaiUiv1beta3RevisionRef {

		/** Reads the revision generated by the processor version. The format takes the full resource name of processor version. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}` */
		latestProcessorVersion?: string | null;

		/** Reads the revision by the predefined case. */
		revisionCase?: GoogleCloudDocumentaiUiv1beta3RevisionRefRevisionCase | null;

		/** Reads the revision given by the id. */
		revisionId?: string | null;
	}

	/** The revision reference specifies which revision on the document to read. */
	export interface GoogleCloudDocumentaiUiv1beta3RevisionRefFormProperties {

		/** Reads the revision generated by the processor version. The format takes the full resource name of processor version. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}` */
		latestProcessorVersion: FormControl<string | null | undefined>,

		/** Reads the revision by the predefined case. */
		revisionCase: FormControl<GoogleCloudDocumentaiUiv1beta3RevisionRefRevisionCase | null | undefined>,

		/** Reads the revision given by the id. */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3RevisionRefFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3RevisionRefFormProperties>({
			latestProcessorVersion: new FormControl<string | null | undefined>(undefined),
			revisionCase: new FormControl<GoogleCloudDocumentaiUiv1beta3RevisionRefRevisionCase | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDocumentaiUiv1beta3RevisionRefRevisionCase { REVISION_CASE_UNSPECIFIED = 0, LATEST_HUMAN_REVIEW = 1, LATEST_TIMESTAMP = 2, BASE_OCR_REVISION = 3 }


	/** Identifies a document uniquely within the scope of a dataset in unmanaged option. */
	export interface GoogleCloudDocumentaiUiv1beta3DocumentIdUnmanagedDocumentId {

		/** Required. The id of the document. */
		docId?: string | null;
	}

	/** Identifies a document uniquely within the scope of a dataset in unmanaged option. */
	export interface GoogleCloudDocumentaiUiv1beta3DocumentIdUnmanagedDocumentIdFormProperties {

		/** Required. The id of the document. */
		docId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3DocumentIdUnmanagedDocumentIdFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3DocumentIdUnmanagedDocumentIdFormProperties>({
			docId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatus {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
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


	/** The response proto of AutoLabelDocuments method. */
	export interface GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsResponse {
	}

	/** The response proto of AutoLabelDocuments method. */
	export interface GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsResponseFormProperties>({
		});

	}

	export interface GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;

		/** Total number of documents that failed to be deleted in storage. */
		errorDocumentCount?: number | null;

		/** The list of response details of each document. */
		individualBatchDeleteStatuses?: Array<GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatus>;

		/** Total number of documents deleting from dataset. */
		totalDocumentCount?: number | null;
	}
	export interface GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataFormProperties {

		/** Total number of documents that failed to be deleted in storage. */
		errorDocumentCount: FormControl<number | null | undefined>,

		/** Total number of documents deleting from dataset. */
		totalDocumentCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataFormProperties>({
			errorDocumentCount: new FormControl<number | null | undefined>(undefined),
			totalDocumentCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The status of each individual document in the batch delete process. */
	export interface GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatus {

		/** Document Identifier. */
		documentId?: GoogleCloudDocumentaiUiv1beta3DocumentId;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;
	}

	/** The status of each individual document in the batch delete process. */
	export interface GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatusFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatusFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatusFormProperties>({
		});

	}


	/** Response of the delete documents operation. */
	export interface GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsResponse {
	}

	/** Response of the delete documents operation. */
	export interface GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsResponseFormProperties>({
		});

	}

	export interface GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;

		/** The destination dataset split type. */
		destDatasetType?: GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataDestDatasetType | null;

		/** The destination dataset split type. */
		destSplitType?: GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataDestDatasetType | null;

		/** The list of response details of each document. */
		individualBatchMoveStatuses?: Array<GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataIndividualBatchMoveStatus>;
	}
	export interface GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataFormProperties {

		/** The destination dataset split type. */
		destDatasetType: FormControl<GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataDestDatasetType | null | undefined>,

		/** The destination dataset split type. */
		destSplitType: FormControl<GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataDestDatasetType | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataFormProperties>({
			destDatasetType: new FormControl<GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataDestDatasetType | null | undefined>(undefined),
			destSplitType: new FormControl<GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataDestDatasetType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataDestDatasetType { DATASET_SPLIT_TYPE_UNSPECIFIED = 0, DATASET_SPLIT_TRAIN = 1, DATASET_SPLIT_TEST = 2, DATASET_SPLIT_UNASSIGNED = 3 }


	/** The status of each individual document in the batch move process. */
	export interface GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataIndividualBatchMoveStatus {

		/** Document Identifier. */
		documentId?: GoogleCloudDocumentaiUiv1beta3DocumentId;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;
	}

	/** The status of each individual document in the batch move process. */
	export interface GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataIndividualBatchMoveStatusFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataIndividualBatchMoveStatusFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataIndividualBatchMoveStatusFormProperties>({
		});

	}


	/** Response of the batch move documents operation. */
	export interface GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsResponse {
	}

	/** Response of the batch move documents operation. */
	export interface GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsResponseFormProperties>({
		});

	}

	export interface GoogleCloudDocumentaiUiv1beta3BatchUpdateDocumentsMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;

		/** The list of response details of each document. */
		individualBatchUpdateStatuses?: Array<GoogleCloudDocumentaiUiv1beta3BatchUpdateDocumentsMetadataIndividualBatchUpdateStatus>;
	}
	export interface GoogleCloudDocumentaiUiv1beta3BatchUpdateDocumentsMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3BatchUpdateDocumentsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3BatchUpdateDocumentsMetadataFormProperties>({
		});

	}


	/** The status of each individual document in the batch update process. */
	export interface GoogleCloudDocumentaiUiv1beta3BatchUpdateDocumentsMetadataIndividualBatchUpdateStatus {

		/** Document Identifier. */
		documentId?: GoogleCloudDocumentaiUiv1beta3DocumentId;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;
	}

	/** The status of each individual document in the batch update process. */
	export interface GoogleCloudDocumentaiUiv1beta3BatchUpdateDocumentsMetadataIndividualBatchUpdateStatusFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3BatchUpdateDocumentsMetadataIndividualBatchUpdateStatusFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3BatchUpdateDocumentsMetadataIndividualBatchUpdateStatusFormProperties>({
		});

	}


	/** Response of the batch update documents operation. */
	export interface GoogleCloudDocumentaiUiv1beta3BatchUpdateDocumentsResponse {
	}

	/** Response of the batch update documents operation. */
	export interface GoogleCloudDocumentaiUiv1beta3BatchUpdateDocumentsResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3BatchUpdateDocumentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3BatchUpdateDocumentsResponseFormProperties>({
		});

	}


	/** The long-running operation metadata for the CreateLabelerPool method. */
	export interface GoogleCloudDocumentaiUiv1beta3CreateLabelerPoolOperationMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
	}

	/** The long-running operation metadata for the CreateLabelerPool method. */
	export interface GoogleCloudDocumentaiUiv1beta3CreateLabelerPoolOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3CreateLabelerPoolOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3CreateLabelerPoolOperationMetadataFormProperties>({
		});

	}


	/** The long-running operation metadata for DeleteLabelerPool. */
	export interface GoogleCloudDocumentaiUiv1beta3DeleteLabelerPoolOperationMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
	}

	/** The long-running operation metadata for DeleteLabelerPool. */
	export interface GoogleCloudDocumentaiUiv1beta3DeleteLabelerPoolOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3DeleteLabelerPoolOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3DeleteLabelerPoolOperationMetadataFormProperties>({
		});

	}


	/** The long-running operation metadata for the DeleteProcessor method. */
	export interface GoogleCloudDocumentaiUiv1beta3DeleteProcessorMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
	}

	/** The long-running operation metadata for the DeleteProcessor method. */
	export interface GoogleCloudDocumentaiUiv1beta3DeleteProcessorMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3DeleteProcessorMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3DeleteProcessorMetadataFormProperties>({
		});

	}


	/** The long-running operation metadata for the DeleteProcessorVersion method. */
	export interface GoogleCloudDocumentaiUiv1beta3DeleteProcessorVersionMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
	}

	/** The long-running operation metadata for the DeleteProcessorVersion method. */
	export interface GoogleCloudDocumentaiUiv1beta3DeleteProcessorVersionMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3DeleteProcessorVersionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3DeleteProcessorVersionMetadataFormProperties>({
		});

	}


	/** The long-running operation metadata for the DeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiUiv1beta3DeployProcessorVersionMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
	}

	/** The long-running operation metadata for the DeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiUiv1beta3DeployProcessorVersionMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3DeployProcessorVersionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3DeployProcessorVersionMetadataFormProperties>({
		});

	}


	/** Response message for the DeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiUiv1beta3DeployProcessorVersionResponse {
	}

	/** Response message for the DeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiUiv1beta3DeployProcessorVersionResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3DeployProcessorVersionResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3DeployProcessorVersionResponseFormProperties>({
		});

	}


	/** The long-running operation metadata for the DisableProcessor method. */
	export interface GoogleCloudDocumentaiUiv1beta3DisableProcessorMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
	}

	/** The long-running operation metadata for the DisableProcessor method. */
	export interface GoogleCloudDocumentaiUiv1beta3DisableProcessorMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3DisableProcessorMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3DisableProcessorMetadataFormProperties>({
		});

	}


	/** Response message for the DisableProcessor method. Intentionally empty proto for adding fields in future. */
	export interface GoogleCloudDocumentaiUiv1beta3DisableProcessorResponse {
	}

	/** Response message for the DisableProcessor method. Intentionally empty proto for adding fields in future. */
	export interface GoogleCloudDocumentaiUiv1beta3DisableProcessorResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3DisableProcessorResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3DisableProcessorResponseFormProperties>({
		});

	}


	/** The long-running operation metadata for the EnableProcessor method. */
	export interface GoogleCloudDocumentaiUiv1beta3EnableProcessorMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
	}

	/** The long-running operation metadata for the EnableProcessor method. */
	export interface GoogleCloudDocumentaiUiv1beta3EnableProcessorMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3EnableProcessorMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3EnableProcessorMetadataFormProperties>({
		});

	}


	/** Response message for the EnableProcessor method. Intentionally empty proto for adding fields in future. */
	export interface GoogleCloudDocumentaiUiv1beta3EnableProcessorResponse {
	}

	/** Response message for the EnableProcessor method. Intentionally empty proto for adding fields in future. */
	export interface GoogleCloudDocumentaiUiv1beta3EnableProcessorResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3EnableProcessorResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3EnableProcessorResponseFormProperties>({
		});

	}


	/** Metadata of the EvaluateProcessorVersion method. */
	export interface GoogleCloudDocumentaiUiv1beta3EvaluateProcessorVersionMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
	}

	/** Metadata of the EvaluateProcessorVersion method. */
	export interface GoogleCloudDocumentaiUiv1beta3EvaluateProcessorVersionMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3EvaluateProcessorVersionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3EvaluateProcessorVersionMetadataFormProperties>({
		});

	}


	/** Response of the EvaluateProcessorVersion method. */
	export interface GoogleCloudDocumentaiUiv1beta3EvaluateProcessorVersionResponse {

		/** The resource name of the created evaluation. */
		evaluation?: string | null;
	}

	/** Response of the EvaluateProcessorVersion method. */
	export interface GoogleCloudDocumentaiUiv1beta3EvaluateProcessorVersionResponseFormProperties {

		/** The resource name of the created evaluation. */
		evaluation: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3EvaluateProcessorVersionResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3EvaluateProcessorVersionResponseFormProperties>({
			evaluation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata of the batch export documents operation. */
	export interface GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;

		/** The list of response details of each document. */
		individualExportStatuses?: Array<GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataIndividualExportStatus>;

		/** The list of statistics for each dataset split type. */
		splitExportStats?: Array<GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSplitExportStat>;
	}

	/** Metadata of the batch export documents operation. */
	export interface GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataFormProperties>({
		});

	}


	/** The status of each individual document in the export process. */
	export interface GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataIndividualExportStatus {

		/** Document Identifier. */
		documentId?: GoogleCloudDocumentaiUiv1beta3DocumentId;

		/** The output_gcs_destination of the exported document if it was successful, otherwise empty. */
		outputGcsDestination?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;
	}

	/** The status of each individual document in the export process. */
	export interface GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataIndividualExportStatusFormProperties {

		/** The output_gcs_destination of the exported document if it was successful, otherwise empty. */
		outputGcsDestination: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataIndividualExportStatusFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataIndividualExportStatusFormProperties>({
			outputGcsDestination: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The statistic representing a dataset split type for this export. */
	export interface GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSplitExportStat {

		/** The dataset split type. */
		splitType?: GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataDestDatasetType | null;

		/** Total number of documents with the given dataset split type to be exported. */
		totalDocumentCount?: number | null;
	}

	/** The statistic representing a dataset split type for this export. */
	export interface GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSplitExportStatFormProperties {

		/** The dataset split type. */
		splitType: FormControl<GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataDestDatasetType | null | undefined>,

		/** Total number of documents with the given dataset split type to be exported. */
		totalDocumentCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSplitExportStatFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSplitExportStatFormProperties>({
			splitType: new FormControl<GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataDestDatasetType | null | undefined>(undefined),
			totalDocumentCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response proto of ExportDocuments method. */
	export interface GoogleCloudDocumentaiUiv1beta3ExportDocumentsResponse {
	}

	/** The response proto of ExportDocuments method. */
	export interface GoogleCloudDocumentaiUiv1beta3ExportDocumentsResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3ExportDocumentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3ExportDocumentsResponseFormProperties>({
		});

	}


	/** Metadata message associated with the ExportProcessorVersion operation. */
	export interface GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
	}

	/** Metadata message associated with the ExportProcessorVersion operation. */
	export interface GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3ExportProcessorVersionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionMetadataFormProperties>({
		});

	}


	/** Response message associated with the ExportProcessorVersion operation. */
	export interface GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionResponse {

		/** The Cloud Storage URI containing the output artifacts. */
		gcsUri?: string | null;
	}

	/** Response message associated with the ExportProcessorVersion operation. */
	export interface GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionResponseFormProperties {

		/** The Cloud Storage URI containing the output artifacts. */
		gcsUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3ExportProcessorVersionResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionResponseFormProperties>({
			gcsUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata of the import document operation. */
	export interface GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;

		/** Validation statuses of the batch documents import config. */
		importConfigValidationResults?: Array<GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataImportConfigValidationResult>;

		/** The list of response details of each document. */
		individualImportStatuses?: Array<GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataIndividualImportStatus>;

		/** Total number of the documents that are qualified for importing. */
		totalDocumentCount?: number | null;
	}

	/** Metadata of the import document operation. */
	export interface GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataFormProperties {

		/** Total number of the documents that are qualified for importing. */
		totalDocumentCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataFormProperties>({
			totalDocumentCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The validation status of each import config. Status is set to an error if there are no documents to import in the `import_config`, or `OK` if the operation will try to proceed with at least one document. */
	export interface GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataImportConfigValidationResult {

		/** The source Cloud Storage URI specified in the import config. */
		inputGcsSource?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;
	}

	/** The validation status of each import config. Status is set to an error if there are no documents to import in the `import_config`, or `OK` if the operation will try to proceed with at least one document. */
	export interface GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataImportConfigValidationResultFormProperties {

		/** The source Cloud Storage URI specified in the import config. */
		inputGcsSource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataImportConfigValidationResultFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataImportConfigValidationResultFormProperties>({
			inputGcsSource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of each individual document in the import process. */
	export interface GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataIndividualImportStatus {

		/** The source Cloud Storage URI of the document. */
		inputGcsSource?: string | null;

		/** Document Identifier. */
		outputDocumentId?: GoogleCloudDocumentaiUiv1beta3DocumentId;

		/** The output_gcs_destination of the processed document if it was successful, otherwise empty. */
		outputGcsDestination?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;
	}

	/** The status of each individual document in the import process. */
	export interface GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataIndividualImportStatusFormProperties {

		/** The source Cloud Storage URI of the document. */
		inputGcsSource: FormControl<string | null | undefined>,

		/** The output_gcs_destination of the processed document if it was successful, otherwise empty. */
		outputGcsDestination: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataIndividualImportStatusFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataIndividualImportStatusFormProperties>({
			inputGcsSource: new FormControl<string | null | undefined>(undefined),
			outputGcsDestination: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the import document operation. */
	export interface GoogleCloudDocumentaiUiv1beta3ImportDocumentsResponse {
	}

	/** Response of the import document operation. */
	export interface GoogleCloudDocumentaiUiv1beta3ImportDocumentsResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3ImportDocumentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3ImportDocumentsResponseFormProperties>({
		});

	}


	/** The long-running operation metadata for the ImportProcessorVersion method. */
	export interface GoogleCloudDocumentaiUiv1beta3ImportProcessorVersionMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
	}

	/** The long-running operation metadata for the ImportProcessorVersion method. */
	export interface GoogleCloudDocumentaiUiv1beta3ImportProcessorVersionMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3ImportProcessorVersionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3ImportProcessorVersionMetadataFormProperties>({
		});

	}


	/** The response message for the ImportProcessorVersion method. */
	export interface GoogleCloudDocumentaiUiv1beta3ImportProcessorVersionResponse {

		/** The destination processor version name. */
		processorVersion?: string | null;
	}

	/** The response message for the ImportProcessorVersion method. */
	export interface GoogleCloudDocumentaiUiv1beta3ImportProcessorVersionResponseFormProperties {

		/** The destination processor version name. */
		processorVersion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3ImportProcessorVersionResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3ImportProcessorVersionResponseFormProperties>({
			processorVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata proto of `ResyncDataset` method. */
	export interface GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;

		/** The list of dataset resync statuses. Not checked when ResyncDatasetRequest.dataset_documents is specified. */
		datasetResyncStatuses?: Array<GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatus>;

		/** The list of document resync statuses. The same document could have multiple `individual_document_resync_statuses` if it has multiple inconsistencies. */
		individualDocumentResyncStatuses?: Array<GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatus>;
	}

	/** The metadata proto of `ResyncDataset` method. */
	export interface GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataFormProperties>({
		});

	}


	/** Resync status against inconsistency types on the dataset level. */
	export interface GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatus {

		/** The type of the inconsistency of the dataset. */
		datasetInconsistencyType?: GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatusDatasetInconsistencyType | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;
	}

	/** Resync status against inconsistency types on the dataset level. */
	export interface GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatusFormProperties {

		/** The type of the inconsistency of the dataset. */
		datasetInconsistencyType: FormControl<GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatusDatasetInconsistencyType | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatusFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatusFormProperties>({
			datasetInconsistencyType: new FormControl<GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatusDatasetInconsistencyType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatusDatasetInconsistencyType { DATASET_INCONSISTENCY_TYPE_UNSPECIFIED = 0, DATASET_INCONSISTENCY_TYPE_NO_STORAGE_MARKER = 1 }


	/** Resync status for each document per inconsistency type. */
	export interface GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatus {

		/** Document Identifier. */
		documentId?: GoogleCloudDocumentaiUiv1beta3DocumentId;

		/** The type of document inconsistency. */
		documentInconsistencyType?: GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatusDocumentInconsistencyType | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;
	}

	/** Resync status for each document per inconsistency type. */
	export interface GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatusFormProperties {

		/** The type of document inconsistency. */
		documentInconsistencyType: FormControl<GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatusDocumentInconsistencyType | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatusFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatusFormProperties>({
			documentInconsistencyType: new FormControl<GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatusDocumentInconsistencyType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatusDocumentInconsistencyType { DOCUMENT_INCONSISTENCY_TYPE_UNSPECIFIED = 0, DOCUMENT_INCONSISTENCY_TYPE_INVALID_DOCPROTO = 1, DOCUMENT_INCONSISTENCY_TYPE_MISMATCHED_METADATA = 2, DOCUMENT_INCONSISTENCY_TYPE_NO_PAGE_IMAGE = 3 }


	/** The response proto of ResyncDataset method. */
	export interface GoogleCloudDocumentaiUiv1beta3ResyncDatasetResponse {
	}

	/** The response proto of ResyncDataset method. */
	export interface GoogleCloudDocumentaiUiv1beta3ResyncDatasetResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3ResyncDatasetResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3ResyncDatasetResponseFormProperties>({
		});

	}


	/** Metadata of the sample documents operation. */
	export interface GoogleCloudDocumentaiUiv1beta3SampleDocumentsMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
	}

	/** Metadata of the sample documents operation. */
	export interface GoogleCloudDocumentaiUiv1beta3SampleDocumentsMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3SampleDocumentsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3SampleDocumentsMetadataFormProperties>({
		});

	}


	/** Response of the sample documents operation. */
	export interface GoogleCloudDocumentaiUiv1beta3SampleDocumentsResponse {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		sampleTestStatus?: GoogleRpcStatus;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		sampleTrainingStatus?: GoogleRpcStatus;

		/** The result of the sampling process. */
		selectedDocuments?: Array<GoogleCloudDocumentaiUiv1beta3SampleDocumentsResponseSelectedDocument>;
	}

	/** Response of the sample documents operation. */
	export interface GoogleCloudDocumentaiUiv1beta3SampleDocumentsResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3SampleDocumentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3SampleDocumentsResponseFormProperties>({
		});

	}

	export interface GoogleCloudDocumentaiUiv1beta3SampleDocumentsResponseSelectedDocument {

		/** An internal identifier for document. */
		documentId?: string | null;
	}
	export interface GoogleCloudDocumentaiUiv1beta3SampleDocumentsResponseSelectedDocumentFormProperties {

		/** An internal identifier for document. */
		documentId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3SampleDocumentsResponseSelectedDocumentFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3SampleDocumentsResponseSelectedDocumentFormProperties>({
			documentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The long-running operation metadata for the SetDefaultProcessorVersion method. */
	export interface GoogleCloudDocumentaiUiv1beta3SetDefaultProcessorVersionMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
	}

	/** The long-running operation metadata for the SetDefaultProcessorVersion method. */
	export interface GoogleCloudDocumentaiUiv1beta3SetDefaultProcessorVersionMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3SetDefaultProcessorVersionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3SetDefaultProcessorVersionMetadataFormProperties>({
		});

	}


	/** Response message for the SetDefaultProcessorVersion method. */
	export interface GoogleCloudDocumentaiUiv1beta3SetDefaultProcessorVersionResponse {
	}

	/** Response message for the SetDefaultProcessorVersion method. */
	export interface GoogleCloudDocumentaiUiv1beta3SetDefaultProcessorVersionResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3SetDefaultProcessorVersionResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3SetDefaultProcessorVersionResponseFormProperties>({
		});

	}


	/** The metadata that represents a processor version being created. */
	export interface GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;

		/** The dataset validation information. This includes any and all errors with documents and the dataset. */
		testDatasetValidation?: GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadataDatasetValidation;

		/** The dataset validation information. This includes any and all errors with documents and the dataset. */
		trainingDatasetValidation?: GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadataDatasetValidation;
	}

	/** The metadata that represents a processor version being created. */
	export interface GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadataFormProperties>({
		});

	}


	/** The dataset validation information. This includes any and all errors with documents and the dataset. */
	export interface GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadataDatasetValidation {

		/** The total number of dataset errors. */
		datasetErrorCount?: number | null;

		/** Error information for the dataset as a whole. A maximum of 10 dataset errors will be returned. A single dataset error is terminal for training. */
		datasetErrors?: Array<GoogleRpcStatus>;

		/** The total number of document errors. */
		documentErrorCount?: number | null;

		/** Error information pertaining to specific documents. A maximum of 10 document errors will be returned. Any document with errors will not be used throughout training. */
		documentErrors?: Array<GoogleRpcStatus>;
	}

	/** The dataset validation information. This includes any and all errors with documents and the dataset. */
	export interface GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadataDatasetValidationFormProperties {

		/** The total number of dataset errors. */
		datasetErrorCount: FormControl<number | null | undefined>,

		/** The total number of document errors. */
		documentErrorCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadataDatasetValidationFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadataDatasetValidationFormProperties>({
			datasetErrorCount: new FormControl<number | null | undefined>(undefined),
			documentErrorCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response for TrainProcessorVersion. */
	export interface GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionResponse {

		/** The resource name of the processor version produced by training. */
		processorVersion?: string | null;
	}

	/** The response for TrainProcessorVersion. */
	export interface GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionResponseFormProperties {

		/** The resource name of the processor version produced by training. */
		processorVersion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3TrainProcessorVersionResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionResponseFormProperties>({
			processorVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The long-running operation metadata for the UndeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
	}

	/** The long-running operation metadata for the UndeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionMetadataFormProperties>({
		});

	}


	/** Response message for the UndeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionResponse {
	}

	/** Response message for the UndeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionResponseFormProperties>({
		});

	}

	export interface GoogleCloudDocumentaiUiv1beta3UpdateDatasetOperationMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
	}
	export interface GoogleCloudDocumentaiUiv1beta3UpdateDatasetOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3UpdateDatasetOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3UpdateDatasetOperationMetadataFormProperties>({
		});

	}


	/** The long-running operation metadata for updating the human review configuration. */
	export interface GoogleCloudDocumentaiUiv1beta3UpdateHumanReviewConfigMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
	}

	/** The long-running operation metadata for updating the human review configuration. */
	export interface GoogleCloudDocumentaiUiv1beta3UpdateHumanReviewConfigMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3UpdateHumanReviewConfigMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3UpdateHumanReviewConfigMetadataFormProperties>({
		});

	}


	/** The long-running operation metadata for UpdateLabelerPool. */
	export interface GoogleCloudDocumentaiUiv1beta3UpdateLabelerPoolOperationMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata;
	}

	/** The long-running operation metadata for UpdateLabelerPool. */
	export interface GoogleCloudDocumentaiUiv1beta3UpdateLabelerPoolOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiUiv1beta3UpdateLabelerPoolOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiUiv1beta3UpdateLabelerPoolOperationMetadataFormProperties>({
		});

	}


	/** The long-running operation metadata for BatchProcessDocuments. */
	export interface GoogleCloudDocumentaiV1BatchProcessMetadata {

		/** The creation time of the operation. */
		createTime?: string | null;

		/** The list of response details of each document. */
		individualProcessStatuses?: Array<GoogleCloudDocumentaiV1BatchProcessMetadataIndividualProcessStatus>;

		/** The state of the current batch processing. */
		state?: GoogleCloudDocumentaiV1BatchProcessMetadataState | null;

		/** A message providing more details about the current state of processing. For example, the error message if the operation is failed. */
		stateMessage?: string | null;

		/** The last update time of the operation. */
		updateTime?: string | null;
	}

	/** The long-running operation metadata for BatchProcessDocuments. */
	export interface GoogleCloudDocumentaiV1BatchProcessMetadataFormProperties {

		/** The creation time of the operation. */
		createTime: FormControl<string | null | undefined>,

		/** The state of the current batch processing. */
		state: FormControl<GoogleCloudDocumentaiV1BatchProcessMetadataState | null | undefined>,

		/** A message providing more details about the current state of processing. For example, the error message if the operation is failed. */
		stateMessage: FormControl<string | null | undefined>,

		/** The last update time of the operation. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1BatchProcessMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1BatchProcessMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDocumentaiV1BatchProcessMetadataState | null | undefined>(undefined),
			stateMessage: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of a each individual document in the batch process. */
	export interface GoogleCloudDocumentaiV1BatchProcessMetadataIndividualProcessStatus {

		/** The status of human review on a processed document. */
		humanReviewStatus?: GoogleCloudDocumentaiV1HumanReviewStatus;

		/** The source of the document, same as the input_gcs_source field in the request when the batch process started. */
		inputGcsSource?: string | null;

		/** The Cloud Storage output destination (in the request as DocumentOutputConfig.GcsOutputConfig.gcs_uri) of the processed document if it was successful, otherwise empty. */
		outputGcsDestination?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;
	}

	/** The status of a each individual document in the batch process. */
	export interface GoogleCloudDocumentaiV1BatchProcessMetadataIndividualProcessStatusFormProperties {

		/** The source of the document, same as the input_gcs_source field in the request when the batch process started. */
		inputGcsSource: FormControl<string | null | undefined>,

		/** The Cloud Storage output destination (in the request as DocumentOutputConfig.GcsOutputConfig.gcs_uri) of the processed document if it was successful, otherwise empty. */
		outputGcsDestination: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1BatchProcessMetadataIndividualProcessStatusFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1BatchProcessMetadataIndividualProcessStatusFormProperties>({
			inputGcsSource: new FormControl<string | null | undefined>(undefined),
			outputGcsDestination: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of human review on a processed document. */
	export interface GoogleCloudDocumentaiV1HumanReviewStatus {

		/** The name of the operation triggered by the processed document. This field is populated only when the state is `HUMAN_REVIEW_IN_PROGRESS`. It has the same response type and metadata as the long-running operation returned by ReviewDocument. */
		humanReviewOperation?: string | null;

		/** The state of human review on the processing request. */
		state?: GoogleCloudDocumentaiV1HumanReviewStatusState | null;

		/** A message providing more details about the human review state. */
		stateMessage?: string | null;
	}

	/** The status of human review on a processed document. */
	export interface GoogleCloudDocumentaiV1HumanReviewStatusFormProperties {

		/** The name of the operation triggered by the processed document. This field is populated only when the state is `HUMAN_REVIEW_IN_PROGRESS`. It has the same response type and metadata as the long-running operation returned by ReviewDocument. */
		humanReviewOperation: FormControl<string | null | undefined>,

		/** The state of human review on the processing request. */
		state: FormControl<GoogleCloudDocumentaiV1HumanReviewStatusState | null | undefined>,

		/** A message providing more details about the human review state. */
		stateMessage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1HumanReviewStatusFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1HumanReviewStatusFormProperties>({
			humanReviewOperation: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDocumentaiV1HumanReviewStatusState | null | undefined>(undefined),
			stateMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDocumentaiV1HumanReviewStatusState { STATE_UNSPECIFIED = 0, SKIPPED = 1, VALIDATION_PASSED = 2, IN_PROGRESS = 3, ERROR = 4 }

	export enum GoogleCloudDocumentaiV1BatchProcessMetadataState { STATE_UNSPECIFIED = 0, WAITING = 1, RUNNING = 2, SUCCEEDED = 3, CANCELLING = 4, CANCELLED = 5, FAILED = 6 }


	/** Response message for BatchProcessDocuments. */
	export interface GoogleCloudDocumentaiV1BatchProcessResponse {
	}

	/** Response message for BatchProcessDocuments. */
	export interface GoogleCloudDocumentaiV1BatchProcessResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1BatchProcessResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1BatchProcessResponseFormProperties>({
		});

	}


	/** The common metadata for long running operations. */
	export interface GoogleCloudDocumentaiV1CommonOperationMetadata {

		/** The creation time of the operation. */
		createTime?: string | null;

		/** A related resource to this operation. */
		resource?: string | null;

		/** The state of the operation. */
		state?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataState | null;

		/** A message providing more details about the current state of processing. */
		stateMessage?: string | null;

		/** The last update time of the operation. */
		updateTime?: string | null;
	}

	/** The common metadata for long running operations. */
	export interface GoogleCloudDocumentaiV1CommonOperationMetadataFormProperties {

		/** The creation time of the operation. */
		createTime: FormControl<string | null | undefined>,

		/** A related resource to this operation. */
		resource: FormControl<string | null | undefined>,

		/** The state of the operation. */
		state: FormControl<GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataState | null | undefined>,

		/** A message providing more details about the current state of processing. */
		stateMessage: FormControl<string | null | undefined>,

		/** The last update time of the operation. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1CommonOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1CommonOperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataState | null | undefined>(undefined),
			stateMessage: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The long-running operation metadata for the DeleteProcessor method. */
	export interface GoogleCloudDocumentaiV1DeleteProcessorMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1CommonOperationMetadata;
	}

	/** The long-running operation metadata for the DeleteProcessor method. */
	export interface GoogleCloudDocumentaiV1DeleteProcessorMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1DeleteProcessorMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1DeleteProcessorMetadataFormProperties>({
		});

	}


	/** The long-running operation metadata for the DeleteProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1DeleteProcessorVersionMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1CommonOperationMetadata;
	}

	/** The long-running operation metadata for the DeleteProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1DeleteProcessorVersionMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1DeleteProcessorVersionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1DeleteProcessorVersionMetadataFormProperties>({
		});

	}


	/** The long-running operation metadata for the DeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1DeployProcessorVersionMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1CommonOperationMetadata;
	}

	/** The long-running operation metadata for the DeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1DeployProcessorVersionMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1DeployProcessorVersionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1DeployProcessorVersionMetadataFormProperties>({
		});

	}


	/** Response message for the DeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1DeployProcessorVersionResponse {
	}

	/** Response message for the DeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1DeployProcessorVersionResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1DeployProcessorVersionResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1DeployProcessorVersionResponseFormProperties>({
		});

	}


	/** The long-running operation metadata for the DisableProcessor method. */
	export interface GoogleCloudDocumentaiV1DisableProcessorMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1CommonOperationMetadata;
	}

	/** The long-running operation metadata for the DisableProcessor method. */
	export interface GoogleCloudDocumentaiV1DisableProcessorMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1DisableProcessorMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1DisableProcessorMetadataFormProperties>({
		});

	}


	/** Response message for the DisableProcessor method. Intentionally empty proto for adding fields in future. */
	export interface GoogleCloudDocumentaiV1DisableProcessorResponse {
	}

	/** Response message for the DisableProcessor method. Intentionally empty proto for adding fields in future. */
	export interface GoogleCloudDocumentaiV1DisableProcessorResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1DisableProcessorResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1DisableProcessorResponseFormProperties>({
		});

	}


	/** The long-running operation metadata for the EnableProcessor method. */
	export interface GoogleCloudDocumentaiV1EnableProcessorMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1CommonOperationMetadata;
	}

	/** The long-running operation metadata for the EnableProcessor method. */
	export interface GoogleCloudDocumentaiV1EnableProcessorMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1EnableProcessorMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1EnableProcessorMetadataFormProperties>({
		});

	}


	/** Response message for the EnableProcessor method. Intentionally empty proto for adding fields in future. */
	export interface GoogleCloudDocumentaiV1EnableProcessorResponse {
	}

	/** Response message for the EnableProcessor method. Intentionally empty proto for adding fields in future. */
	export interface GoogleCloudDocumentaiV1EnableProcessorResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1EnableProcessorResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1EnableProcessorResponseFormProperties>({
		});

	}


	/** Metadata of the EvaluateProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1EvaluateProcessorVersionMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1CommonOperationMetadata;
	}

	/** Metadata of the EvaluateProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1EvaluateProcessorVersionMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1EvaluateProcessorVersionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1EvaluateProcessorVersionMetadataFormProperties>({
		});

	}


	/** Response of the EvaluateProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1EvaluateProcessorVersionResponse {

		/** The resource name of the created evaluation. */
		evaluation?: string | null;
	}

	/** Response of the EvaluateProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1EvaluateProcessorVersionResponseFormProperties {

		/** The resource name of the created evaluation. */
		evaluation: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1EvaluateProcessorVersionResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1EvaluateProcessorVersionResponseFormProperties>({
			evaluation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The long-running operation metadata for the ReviewDocument method. */
	export interface GoogleCloudDocumentaiV1ReviewDocumentOperationMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1CommonOperationMetadata;

		/** The Crowd Compute question ID. */
		questionId?: string | null;
	}

	/** The long-running operation metadata for the ReviewDocument method. */
	export interface GoogleCloudDocumentaiV1ReviewDocumentOperationMetadataFormProperties {

		/** The Crowd Compute question ID. */
		questionId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1ReviewDocumentOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1ReviewDocumentOperationMetadataFormProperties>({
			questionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the ReviewDocument method. */
	export interface GoogleCloudDocumentaiV1ReviewDocumentResponse {

		/** The Cloud Storage uri for the human reviewed document if the review is succeeded. */
		gcsDestination?: string | null;

		/** The reason why the review is rejected by reviewer. */
		rejectionReason?: string | null;

		/** The state of the review operation. */
		state?: GoogleCloudDocumentaiV1ReviewDocumentResponseState | null;
	}

	/** Response message for the ReviewDocument method. */
	export interface GoogleCloudDocumentaiV1ReviewDocumentResponseFormProperties {

		/** The Cloud Storage uri for the human reviewed document if the review is succeeded. */
		gcsDestination: FormControl<string | null | undefined>,

		/** The reason why the review is rejected by reviewer. */
		rejectionReason: FormControl<string | null | undefined>,

		/** The state of the review operation. */
		state: FormControl<GoogleCloudDocumentaiV1ReviewDocumentResponseState | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1ReviewDocumentResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1ReviewDocumentResponseFormProperties>({
			gcsDestination: new FormControl<string | null | undefined>(undefined),
			rejectionReason: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDocumentaiV1ReviewDocumentResponseState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDocumentaiV1ReviewDocumentResponseState { STATE_UNSPECIFIED = 0, REJECTED = 1, SUCCEEDED = 2 }


	/** The long-running operation metadata for the SetDefaultProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1SetDefaultProcessorVersionMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1CommonOperationMetadata;
	}

	/** The long-running operation metadata for the SetDefaultProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1SetDefaultProcessorVersionMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1SetDefaultProcessorVersionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1SetDefaultProcessorVersionMetadataFormProperties>({
		});

	}


	/** Response message for the SetDefaultProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1SetDefaultProcessorVersionResponse {
	}

	/** Response message for the SetDefaultProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1SetDefaultProcessorVersionResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1SetDefaultProcessorVersionResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1SetDefaultProcessorVersionResponseFormProperties>({
		});

	}


	/** The metadata that represents a processor version being created. */
	export interface GoogleCloudDocumentaiV1TrainProcessorVersionMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1CommonOperationMetadata;

		/** The dataset validation information. This includes any and all errors with documents and the dataset. */
		testDatasetValidation?: GoogleCloudDocumentaiV1TrainProcessorVersionMetadataDatasetValidation;

		/** The dataset validation information. This includes any and all errors with documents and the dataset. */
		trainingDatasetValidation?: GoogleCloudDocumentaiV1TrainProcessorVersionMetadataDatasetValidation;
	}

	/** The metadata that represents a processor version being created. */
	export interface GoogleCloudDocumentaiV1TrainProcessorVersionMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1TrainProcessorVersionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1TrainProcessorVersionMetadataFormProperties>({
		});

	}


	/** The dataset validation information. This includes any and all errors with documents and the dataset. */
	export interface GoogleCloudDocumentaiV1TrainProcessorVersionMetadataDatasetValidation {

		/** The total number of dataset errors. */
		datasetErrorCount?: number | null;

		/** Error information for the dataset as a whole. A maximum of 10 dataset errors will be returned. A single dataset error is terminal for training. */
		datasetErrors?: Array<GoogleRpcStatus>;

		/** The total number of document errors. */
		documentErrorCount?: number | null;

		/** Error information pertaining to specific documents. A maximum of 10 document errors will be returned. Any document with errors will not be used throughout training. */
		documentErrors?: Array<GoogleRpcStatus>;
	}

	/** The dataset validation information. This includes any and all errors with documents and the dataset. */
	export interface GoogleCloudDocumentaiV1TrainProcessorVersionMetadataDatasetValidationFormProperties {

		/** The total number of dataset errors. */
		datasetErrorCount: FormControl<number | null | undefined>,

		/** The total number of document errors. */
		documentErrorCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1TrainProcessorVersionMetadataDatasetValidationFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1TrainProcessorVersionMetadataDatasetValidationFormProperties>({
			datasetErrorCount: new FormControl<number | null | undefined>(undefined),
			documentErrorCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response for TrainProcessorVersion. */
	export interface GoogleCloudDocumentaiV1TrainProcessorVersionResponse {

		/** The resource name of the processor version produced by training. */
		processorVersion?: string | null;
	}

	/** The response for TrainProcessorVersion. */
	export interface GoogleCloudDocumentaiV1TrainProcessorVersionResponseFormProperties {

		/** The resource name of the processor version produced by training. */
		processorVersion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1TrainProcessorVersionResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1TrainProcessorVersionResponseFormProperties>({
			processorVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The long-running operation metadata for the UndeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1UndeployProcessorVersionMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1CommonOperationMetadata;
	}

	/** The long-running operation metadata for the UndeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1UndeployProcessorVersionMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1UndeployProcessorVersionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1UndeployProcessorVersionMetadataFormProperties>({
		});

	}


	/** Response message for the UndeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1UndeployProcessorVersionResponse {
	}

	/** Response message for the UndeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1UndeployProcessorVersionResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1UndeployProcessorVersionResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1UndeployProcessorVersionResponseFormProperties>({
		});

	}


	/** Encodes the detailed information of a barcode. */
	export interface GoogleCloudDocumentaiV1beta1Barcode {

		/** Format of a barcode. The supported formats are: - `CODE_128`: Code 128 type. - `CODE_39`: Code 39 type. - `CODE_93`: Code 93 type. - `CODABAR`: Codabar type. - `DATA_MATRIX`: 2D Data Matrix type. - `ITF`: ITF type. - `EAN_13`: EAN-13 type. - `EAN_8`: EAN-8 type. - `QR_CODE`: 2D QR code type. - `UPC_A`: UPC-A type. - `UPC_E`: UPC-E type. - `PDF417`: PDF417 type. - `AZTEC`: 2D Aztec code type. - `DATABAR`: GS1 DataBar code type. */
		format?: string | null;

		/** Raw value encoded in the barcode. For example: `'MEBKM:TITLE:Google;URL:https://www.google.com;;'`. */
		rawValue?: string | null;

		/** Value format describes the format of the value that a barcode encodes. The supported formats are: - `CONTACT_INFO`: Contact information. - `EMAIL`: Email address. - `ISBN`: ISBN identifier. - `PHONE`: Phone number. - `PRODUCT`: Product. - `SMS`: SMS message. - `TEXT`: Text string. - `URL`: URL address. - `WIFI`: Wifi information. - `GEO`: Geo-localization. - `CALENDAR_EVENT`: Calendar event. - `DRIVER_LICENSE`: Driver's license. */
		valueFormat?: string | null;
	}

	/** Encodes the detailed information of a barcode. */
	export interface GoogleCloudDocumentaiV1beta1BarcodeFormProperties {

		/** Format of a barcode. The supported formats are: - `CODE_128`: Code 128 type. - `CODE_39`: Code 39 type. - `CODE_93`: Code 93 type. - `CODABAR`: Codabar type. - `DATA_MATRIX`: 2D Data Matrix type. - `ITF`: ITF type. - `EAN_13`: EAN-13 type. - `EAN_8`: EAN-8 type. - `QR_CODE`: 2D QR code type. - `UPC_A`: UPC-A type. - `UPC_E`: UPC-E type. - `PDF417`: PDF417 type. - `AZTEC`: 2D Aztec code type. - `DATABAR`: GS1 DataBar code type. */
		format: FormControl<string | null | undefined>,

		/** Raw value encoded in the barcode. For example: `'MEBKM:TITLE:Google;URL:https://www.google.com;;'`. */
		rawValue: FormControl<string | null | undefined>,

		/** Value format describes the format of the value that a barcode encodes. The supported formats are: - `CONTACT_INFO`: Contact information. - `EMAIL`: Email address. - `ISBN`: ISBN identifier. - `PHONE`: Phone number. - `PRODUCT`: Product. - `SMS`: SMS message. - `TEXT`: Text string. - `URL`: URL address. - `WIFI`: Wifi information. - `GEO`: Geo-localization. - `CALENDAR_EVENT`: Calendar event. - `DRIVER_LICENSE`: Driver's license. */
		valueFormat: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1BarcodeFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1BarcodeFormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
			rawValue: new FormControl<string | null | undefined>(undefined),
			valueFormat: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to an batch document processing request. This is returned in the LRO Operation after the operation is complete. */
	export interface GoogleCloudDocumentaiV1beta1BatchProcessDocumentsResponse {

		/** Responses for each individual document. */
		responses?: Array<GoogleCloudDocumentaiV1beta1ProcessDocumentResponse>;
	}

	/** Response to an batch document processing request. This is returned in the LRO Operation after the operation is complete. */
	export interface GoogleCloudDocumentaiV1beta1BatchProcessDocumentsResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta1BatchProcessDocumentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1BatchProcessDocumentsResponseFormProperties>({
		});

	}


	/** Response to a single document processing request. */
	export interface GoogleCloudDocumentaiV1beta1ProcessDocumentResponse {

		/** The desired input location and metadata. */
		inputConfig?: GoogleCloudDocumentaiV1beta1InputConfig;

		/** The desired output location and metadata. */
		outputConfig?: GoogleCloudDocumentaiV1beta1OutputConfig;
	}

	/** Response to a single document processing request. */
	export interface GoogleCloudDocumentaiV1beta1ProcessDocumentResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta1ProcessDocumentResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1ProcessDocumentResponseFormProperties>({
		});

	}


	/** The desired input location and metadata. */
	export interface GoogleCloudDocumentaiV1beta1InputConfig {

		/** The Google Cloud Storage location where the input file will be read from. */
		gcsSource?: GoogleCloudDocumentaiV1beta1GcsSource;

		/** Required. Mimetype of the input. Current supported mimetypes are application/pdf, image/tiff, and image/gif. In addition, application/json type is supported for requests with ProcessDocumentRequest.automl_params field set. The JSON file needs to be in Document format. */
		mimeType?: string | null;
	}

	/** The desired input location and metadata. */
	export interface GoogleCloudDocumentaiV1beta1InputConfigFormProperties {

		/** Required. Mimetype of the input. Current supported mimetypes are application/pdf, image/tiff, and image/gif. In addition, application/json type is supported for requests with ProcessDocumentRequest.automl_params field set. The JSON file needs to be in Document format. */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1InputConfigFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1InputConfigFormProperties>({
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Google Cloud Storage location where the input file will be read from. */
	export interface GoogleCloudDocumentaiV1beta1GcsSource {
		uri?: string | null;
	}

	/** The Google Cloud Storage location where the input file will be read from. */
	export interface GoogleCloudDocumentaiV1beta1GcsSourceFormProperties {
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1GcsSourceFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1GcsSourceFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The desired output location and metadata. */
	export interface GoogleCloudDocumentaiV1beta1OutputConfig {

		/** The Google Cloud Storage location where the output file will be written to. */
		gcsDestination?: GoogleCloudDocumentaiV1beta1GcsDestination;

		/** The max number of pages to include into each output Document shard JSON on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 parsed pages will be produced. If `pages_per_shard` = 20, then 5 Document shard JSON files each containing 20 parsed pages will be written under the prefix OutputConfig.gcs_destination.uri and suffix pages-x-to-y.json where x and y are 1-indexed page numbers. Example GCS outputs with 157 pages and pages_per_shard = 50: pages-001-to-050.json pages-051-to-100.json pages-101-to-150.json pages-151-to-157.json */
		pagesPerShard?: number | null;
	}

	/** The desired output location and metadata. */
	export interface GoogleCloudDocumentaiV1beta1OutputConfigFormProperties {

		/** The max number of pages to include into each output Document shard JSON on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 parsed pages will be produced. If `pages_per_shard` = 20, then 5 Document shard JSON files each containing 20 parsed pages will be written under the prefix OutputConfig.gcs_destination.uri and suffix pages-x-to-y.json where x and y are 1-indexed page numbers. Example GCS outputs with 157 pages and pages_per_shard = 50: pages-001-to-050.json pages-051-to-100.json pages-101-to-150.json pages-151-to-157.json */
		pagesPerShard: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1OutputConfigFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1OutputConfigFormProperties>({
			pagesPerShard: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The Google Cloud Storage location where the output file will be written to. */
	export interface GoogleCloudDocumentaiV1beta1GcsDestination {
		uri?: string | null;
	}

	/** The Google Cloud Storage location where the output file will be written to. */
	export interface GoogleCloudDocumentaiV1beta1GcsDestinationFormProperties {
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1GcsDestinationFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1GcsDestinationFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A bounding polygon for the detected image annotation. */
	export interface GoogleCloudDocumentaiV1beta1BoundingPoly {

		/** The bounding polygon normalized vertices. */
		normalizedVertices?: Array<GoogleCloudDocumentaiV1beta1NormalizedVertex>;

		/** The bounding polygon vertices. */
		vertices?: Array<GoogleCloudDocumentaiV1beta1Vertex>;
	}

	/** A bounding polygon for the detected image annotation. */
	export interface GoogleCloudDocumentaiV1beta1BoundingPolyFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta1BoundingPolyFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1BoundingPolyFormProperties>({
		});

	}


	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudDocumentaiV1beta1NormalizedVertex {

		/** X coordinate. */
		x?: number | null;

		/** Y coordinate (starts from the top of the image). */
		y?: number | null;
	}

	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudDocumentaiV1beta1NormalizedVertexFormProperties {

		/** X coordinate. */
		x: FormControl<number | null | undefined>,

		/** Y coordinate (starts from the top of the image). */
		y: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1NormalizedVertexFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1NormalizedVertexFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image. */
	export interface GoogleCloudDocumentaiV1beta1Vertex {

		/** X coordinate. */
		x?: number | null;

		/** Y coordinate (starts from the top of the image). */
		y?: number | null;
	}

	/** A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image. */
	export interface GoogleCloudDocumentaiV1beta1VertexFormProperties {

		/** X coordinate. */
		x: FormControl<number | null | undefined>,

		/** Y coordinate (starts from the top of the image). */
		y: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1VertexFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1VertexFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality. */
	export interface GoogleCloudDocumentaiV1beta1Document {

		/** Optional. Inline document content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. */
		content?: string | null;

		/** A list of entities detected on Document.text. For document shards, entities in this list may cross shard boundaries. */
		entities?: Array<GoogleCloudDocumentaiV1beta1DocumentEntity>;

		/** Placeholder. Relationship among Document.entities. */
		entityRelations?: Array<GoogleCloudDocumentaiV1beta1DocumentEntityRelation>;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;

		/** An IANA published [media type (MIME type)](https://www.iana.org/assignments/media-types/media-types.xhtml). */
		mimeType?: string | null;

		/** Visual page layout for the Document. */
		pages?: Array<GoogleCloudDocumentaiV1beta1DocumentPage>;

		/** Placeholder. Revision history of this document. */
		revisions?: Array<GoogleCloudDocumentaiV1beta1DocumentRevision>;

		/** For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is. */
		shardInfo?: GoogleCloudDocumentaiV1beta1DocumentShardInfo;

		/** Optional. UTF-8 encoded text in reading order from the document. */
		text?: string | null;

		/** Placeholder. A list of text corrections made to Document.text. This is usually used for annotating corrections to OCR mistakes. Text changes for a given revision may not overlap with each other. */
		textChanges?: Array<GoogleCloudDocumentaiV1beta1DocumentTextChange>;

		/** Styles for the Document.text. */
		textStyles?: Array<GoogleCloudDocumentaiV1beta1DocumentStyle>;

		/** Optional. Currently supports Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. For more information, refer to [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris). */
		uri?: string | null;
	}

	/** Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality. */
	export interface GoogleCloudDocumentaiV1beta1DocumentFormProperties {

		/** Optional. Inline document content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. */
		content: FormControl<string | null | undefined>,

		/** An IANA published [media type (MIME type)](https://www.iana.org/assignments/media-types/media-types.xhtml). */
		mimeType: FormControl<string | null | undefined>,

		/** Optional. UTF-8 encoded text in reading order from the document. */
		text: FormControl<string | null | undefined>,

		/** Optional. Currently supports Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. For more information, refer to [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris). */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location. */
	export interface GoogleCloudDocumentaiV1beta1DocumentEntity {

		/** Optional. Confidence of detected Schema entity. Range `[0, 1]`. */
		confidence?: number | null;

		/** Optional. Canonical id. This will be a unique value in the entity list for this document. */
		id?: string | null;

		/** Optional. Deprecated. Use `id` field instead. */
		mentionId?: string | null;

		/** Optional. Text value of the entity e.g. `1600 Amphitheatre Pkwy`. */
		mentionText?: string | null;

		/** Parsed and normalized entity value. */
		normalizedValue?: GoogleCloudDocumentaiV1beta1DocumentEntityNormalizedValue;

		/** Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types. */
		pageAnchor?: GoogleCloudDocumentaiV1beta1DocumentPageAnchor;

		/** Optional. Entities can be nested to form a hierarchical data structure representing the content in the document. */
		properties?: Array<GoogleCloudDocumentaiV1beta1DocumentEntity>;

		/** Structure to identify provenance relationships between annotations in different revisions. */
		provenance?: GoogleCloudDocumentaiV1beta1DocumentProvenance;

		/** Optional. Whether the entity will be redacted for de-identification purposes. */
		redacted?: boolean | null;

		/** Text reference indexing into the Document.text. */
		textAnchor?: GoogleCloudDocumentaiV1beta1DocumentTextAnchor;

		/** Required. Entity type from a schema e.g. `Address`. */
		type?: string | null;
	}

	/** An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location. */
	export interface GoogleCloudDocumentaiV1beta1DocumentEntityFormProperties {

		/** Optional. Confidence of detected Schema entity. Range `[0, 1]`. */
		confidence: FormControl<number | null | undefined>,

		/** Optional. Canonical id. This will be a unique value in the entity list for this document. */
		id: FormControl<string | null | undefined>,

		/** Optional. Deprecated. Use `id` field instead. */
		mentionId: FormControl<string | null | undefined>,

		/** Optional. Text value of the entity e.g. `1600 Amphitheatre Pkwy`. */
		mentionText: FormControl<string | null | undefined>,

		/** Optional. Whether the entity will be redacted for de-identification purposes. */
		redacted: FormControl<boolean | null | undefined>,

		/** Required. Entity type from a schema e.g. `Address`. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentEntityFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentEntityFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			mentionId: new FormControl<string | null | undefined>(undefined),
			mentionText: new FormControl<string | null | undefined>(undefined),
			redacted: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parsed and normalized entity value. */
	export interface GoogleCloudDocumentaiV1beta1DocumentEntityNormalizedValue {

		/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
		addressValue?: GoogleTypePostalAddress;

		/** Boolean value. Can be used for entities with binary values, or for checkboxes. */
		booleanValue?: boolean | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		dateValue?: GoogleTypeDate;

		/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
		datetimeValue?: GoogleTypeDateTime;

		/** Float value. */
		floatValue?: number | null;

		/** Integer value. */
		integerValue?: number | null;

		/** Represents an amount of money with its currency type. */
		moneyValue?: GoogleTypeMoney;

		/** Optional. An optional field to store a normalized string. For some entity types, one of respective `structured_value` fields may also be populated. Also not all the types of `structured_value` will be normalized. For example, some processors may not generate `float` or `integer` normalized text by default. Below are sample formats mapped to structured values. - Money/Currency type (`money_value`) is in the ISO 4217 text format. - Date type (`date_value`) is in the ISO 8601 text format. - Datetime type (`datetime_value`) is in the ISO 8601 text format. */
		text?: string | null;
	}

	/** Parsed and normalized entity value. */
	export interface GoogleCloudDocumentaiV1beta1DocumentEntityNormalizedValueFormProperties {

		/** Boolean value. Can be used for entities with binary values, or for checkboxes. */
		booleanValue: FormControl<boolean | null | undefined>,

		/** Float value. */
		floatValue: FormControl<number | null | undefined>,

		/** Integer value. */
		integerValue: FormControl<number | null | undefined>,

		/** Optional. An optional field to store a normalized string. For some entity types, one of respective `structured_value` fields may also be populated. Also not all the types of `structured_value` will be normalized. For example, some processors may not generate `float` or `integer` normalized text by default. Below are sample formats mapped to structured values. - Money/Currency type (`money_value`) is in the ISO 4217 text format. - Date type (`date_value`) is in the ISO 8601 text format. - Datetime type (`datetime_value`) is in the ISO 8601 text format. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentEntityNormalizedValueFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentEntityNormalizedValueFormProperties>({
			booleanValue: new FormControl<boolean | null | undefined>(undefined),
			floatValue: new FormControl<number | null | undefined>(undefined),
			integerValue: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
	export interface GoogleTypePostalAddress {

		/** Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas). */
		addressLines?: Array<string>;

		/** Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated. */
		administrativeArea?: string | null;

		/** Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en". */
		languageCode?: string | null;

		/** Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines. */
		locality?: string | null;

		/** Optional. The name of the organization at the address. */
		organization?: string | null;

		/** Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.). */
		postalCode?: string | null;

		/** Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information. */
		recipients?: Array<string>;

		/** Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland. */
		regionCode?: string | null;

		/** The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions. */
		revision?: number | null;

		/** Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire). */
		sortingCode?: string | null;

		/** Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts. */
		sublocality?: string | null;
	}

	/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
	export interface GoogleTypePostalAddressFormProperties {

		/** Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated. */
		administrativeArea: FormControl<string | null | undefined>,

		/** Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en". */
		languageCode: FormControl<string | null | undefined>,

		/** Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines. */
		locality: FormControl<string | null | undefined>,

		/** Optional. The name of the organization at the address. */
		organization: FormControl<string | null | undefined>,

		/** Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.). */
		postalCode: FormControl<string | null | undefined>,

		/** Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland. */
		regionCode: FormControl<string | null | undefined>,

		/** The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions. */
		revision: FormControl<number | null | undefined>,

		/** Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire). */
		sortingCode: FormControl<string | null | undefined>,

		/** Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts. */
		sublocality: FormControl<string | null | undefined>,
	}
	export function CreateGoogleTypePostalAddressFormGroup() {
		return new FormGroup<GoogleTypePostalAddressFormProperties>({
			administrativeArea: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			organization: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
			sortingCode: new FormControl<string | null | undefined>(undefined),
			sublocality: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDate {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day?: number | null;

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month?: number | null;

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDateFormProperties {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day: FormControl<number | null | undefined>,

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month: FormControl<number | null | undefined>,

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year: FormControl<number | null | undefined>,
	}
	export function CreateGoogleTypeDateFormGroup() {
		return new FormGroup<GoogleTypeDateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
	export interface GoogleTypeDateTime {

		/** Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. */
		day?: number | null;

		/** Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
		hours?: number | null;

		/** Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0. */
		minutes?: number | null;

		/** Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month. */
		month?: number | null;

		/** Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0. */
		nanos?: number | null;

		/** Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds. */
		seconds?: number | null;

		/** Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones). */
		timeZone?: GoogleTypeTimeZone;

		/** UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. */
		utcOffset?: string | null;

		/** Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. */
		year?: number | null;
	}

	/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
	export interface GoogleTypeDateTimeFormProperties {

		/** Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. */
		day: FormControl<number | null | undefined>,

		/** Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
		hours: FormControl<number | null | undefined>,

		/** Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0. */
		minutes: FormControl<number | null | undefined>,

		/** Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month. */
		month: FormControl<number | null | undefined>,

		/** Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0. */
		nanos: FormControl<number | null | undefined>,

		/** Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds. */
		seconds: FormControl<number | null | undefined>,

		/** UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. */
		utcOffset: FormControl<string | null | undefined>,

		/** Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. */
		year: FormControl<number | null | undefined>,
	}
	export function CreateGoogleTypeDateTimeFormGroup() {
		return new FormGroup<GoogleTypeDateTimeFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			hours: new FormControl<number | null | undefined>(undefined),
			minutes: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
			utcOffset: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones). */
	export interface GoogleTypeTimeZone {

		/** IANA Time Zone Database time zone, e.g. "America/New_York". */
		id?: string | null;

		/** Optional. IANA Time Zone Database version number, e.g. "2019a". */
		version?: string | null;
	}

	/** Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones). */
	export interface GoogleTypeTimeZoneFormProperties {

		/** IANA Time Zone Database time zone, e.g. "America/New_York". */
		id: FormControl<string | null | undefined>,

		/** Optional. IANA Time Zone Database version number, e.g. "2019a". */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleTypeTimeZoneFormGroup() {
		return new FormGroup<GoogleTypeTimeZoneFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an amount of money with its currency type. */
	export interface GoogleTypeMoney {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode?: string | null;

		/** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
		nanos?: number | null;

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units?: string | null;
	}

	/** Represents an amount of money with its currency type. */
	export interface GoogleTypeMoneyFormProperties {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode: FormControl<string | null | undefined>,

		/** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
		nanos: FormControl<number | null | undefined>,

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units: FormControl<string | null | undefined>,
	}
	export function CreateGoogleTypeMoneyFormGroup() {
		return new FormGroup<GoogleTypeMoneyFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageAnchor {

		/** One or more references to visual page elements */
		pageRefs?: Array<GoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRef>;
	}

	/** Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageAnchorFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentPageAnchorFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentPageAnchorFormProperties>({
		});

	}


	/** Represents a weak reference to a page element within a document. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRef {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudDocumentaiV1beta1BoundingPoly;

		/** Optional. Confidence of detected page element, if applicable. Range `[0, 1]`. */
		confidence?: number | null;

		/** Optional. Deprecated. Use PageRef.bounding_poly instead. */
		layoutId?: string | null;

		/** Optional. The type of the layout element that is being referenced if any. */
		layoutType?: GoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRefLayoutType | null;

		/** Required. Index into the Document.pages element, for example using `Document.pages` to locate the related page element. This field is skipped when its value is the default `0`. See https://developers.google.com/protocol-buffers/docs/proto3#json. */
		page?: string | null;
	}

	/** Represents a weak reference to a page element within a document. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRefFormProperties {

		/** Optional. Confidence of detected page element, if applicable. Range `[0, 1]`. */
		confidence: FormControl<number | null | undefined>,

		/** Optional. Deprecated. Use PageRef.bounding_poly instead. */
		layoutId: FormControl<string | null | undefined>,

		/** Optional. The type of the layout element that is being referenced if any. */
		layoutType: FormControl<GoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRefLayoutType | null | undefined>,

		/** Required. Index into the Document.pages element, for example using `Document.pages` to locate the related page element. This field is skipped when its value is the default `0`. See https://developers.google.com/protocol-buffers/docs/proto3#json. */
		page: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRefFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRefFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			layoutId: new FormControl<string | null | undefined>(undefined),
			layoutType: new FormControl<GoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRefLayoutType | null | undefined>(undefined),
			page: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRefLayoutType { LAYOUT_TYPE_UNSPECIFIED = 0, BLOCK = 1, PARAGRAPH = 2, LINE = 3, TOKEN = 4, VISUAL_ELEMENT = 5, TABLE = 6, FORM_FIELD = 7 }


	/** Structure to identify provenance relationships between annotations in different revisions. */
	export interface GoogleCloudDocumentaiV1beta1DocumentProvenance {

		/** The Id of this operation. Needs to be unique within the scope of the revision. */
		id?: number | null;

		/** References to the original elements that are replaced. */
		parents?: Array<GoogleCloudDocumentaiV1beta1DocumentProvenanceParent>;

		/** The index of the revision that produced this element. */
		revision?: number | null;

		/** The type of provenance operation. */
		type?: GoogleCloudDocumentaiV1beta1DocumentProvenanceType | null;
	}

	/** Structure to identify provenance relationships between annotations in different revisions. */
	export interface GoogleCloudDocumentaiV1beta1DocumentProvenanceFormProperties {

		/** The Id of this operation. Needs to be unique within the scope of the revision. */
		id: FormControl<number | null | undefined>,

		/** The index of the revision that produced this element. */
		revision: FormControl<number | null | undefined>,

		/** The type of provenance operation. */
		type: FormControl<GoogleCloudDocumentaiV1beta1DocumentProvenanceType | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentProvenanceFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentProvenanceFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDocumentaiV1beta1DocumentProvenanceType | null | undefined>(undefined),
		});

	}


	/** The parent element the current element is based on. Used for referencing/aligning, removal and replacement operations. */
	export interface GoogleCloudDocumentaiV1beta1DocumentProvenanceParent {

		/** The id of the parent provenance. */
		id?: number | null;

		/** The index of the parent item in the corresponding item list (eg. list of entities, properties within entities, etc.) in the parent revision. */
		index?: number | null;

		/** The index of the index into current revision's parent_ids list. */
		revision?: number | null;
	}

	/** The parent element the current element is based on. Used for referencing/aligning, removal and replacement operations. */
	export interface GoogleCloudDocumentaiV1beta1DocumentProvenanceParentFormProperties {

		/** The id of the parent provenance. */
		id: FormControl<number | null | undefined>,

		/** The index of the parent item in the corresponding item list (eg. list of entities, properties within entities, etc.) in the parent revision. */
		index: FormControl<number | null | undefined>,

		/** The index of the index into current revision's parent_ids list. */
		revision: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentProvenanceParentFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentProvenanceParentFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDocumentaiV1beta1DocumentProvenanceType { OPERATION_TYPE_UNSPECIFIED = 0, ADD = 1, REMOVE = 2, UPDATE = 3, REPLACE = 4, EVAL_REQUESTED = 5, EVAL_APPROVED = 6, EVAL_SKIPPED = 7 }


	/** Text reference indexing into the Document.text. */
	export interface GoogleCloudDocumentaiV1beta1DocumentTextAnchor {

		/** Contains the content of the text span so that users do not have to look it up in the text_segments. It is always populated for formFields. */
		content?: string | null;

		/** The text segments from the Document.text. */
		textSegments?: Array<GoogleCloudDocumentaiV1beta1DocumentTextAnchorTextSegment>;
	}

	/** Text reference indexing into the Document.text. */
	export interface GoogleCloudDocumentaiV1beta1DocumentTextAnchorFormProperties {

		/** Contains the content of the text span so that users do not have to look it up in the text_segments. It is always populated for formFields. */
		content: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentTextAnchorFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentTextAnchorFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset */
	export interface GoogleCloudDocumentaiV1beta1DocumentTextAnchorTextSegment {

		/** TextSegment half open end UTF-8 char index in the Document.text. */
		endIndex?: string | null;

		/** TextSegment start UTF-8 char index in the Document.text. */
		startIndex?: string | null;
	}

	/** A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset */
	export interface GoogleCloudDocumentaiV1beta1DocumentTextAnchorTextSegmentFormProperties {

		/** TextSegment half open end UTF-8 char index in the Document.text. */
		endIndex: FormControl<string | null | undefined>,

		/** TextSegment start UTF-8 char index in the Document.text. */
		startIndex: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentTextAnchorTextSegmentFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentTextAnchorTextSegmentFormProperties>({
			endIndex: new FormControl<string | null | undefined>(undefined),
			startIndex: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Relationship between Entities. */
	export interface GoogleCloudDocumentaiV1beta1DocumentEntityRelation {

		/** Object entity id. */
		objectId?: string | null;

		/** Relationship description. */
		relation?: string | null;

		/** Subject entity id. */
		subjectId?: string | null;
	}

	/** Relationship between Entities. */
	export interface GoogleCloudDocumentaiV1beta1DocumentEntityRelationFormProperties {

		/** Object entity id. */
		objectId: FormControl<string | null | undefined>,

		/** Relationship description. */
		relation: FormControl<string | null | undefined>,

		/** Subject entity id. */
		subjectId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentEntityRelationFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentEntityRelationFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
			relation: new FormControl<string | null | undefined>(undefined),
			subjectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A page in a Document. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPage {

		/** A list of visually detected text blocks on the page. A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation. */
		blocks?: Array<GoogleCloudDocumentaiV1beta1DocumentPageBlock>;

		/** A list of detected barcodes. */
		detectedBarcodes?: Array<GoogleCloudDocumentaiV1beta1DocumentPageDetectedBarcode>;

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage>;

		/** Dimension for the page. */
		dimension?: GoogleCloudDocumentaiV1beta1DocumentPageDimension;

		/** A list of visually detected form fields on the page. */
		formFields?: Array<GoogleCloudDocumentaiV1beta1DocumentPageFormField>;

		/** Rendered image contents for this page. */
		image?: GoogleCloudDocumentaiV1beta1DocumentPageImage;

		/** Image quality scores for the page image. */
		imageQualityScores?: GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScores;

		/** Visual element describing a layout unit on a page. */
		layout?: GoogleCloudDocumentaiV1beta1DocumentPageLayout;

		/** A list of visually detected text lines on the page. A collection of tokens that a human would perceive as a line. */
		lines?: Array<GoogleCloudDocumentaiV1beta1DocumentPageLine>;

		/** 1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing. */
		pageNumber?: number | null;

		/** A list of visually detected text paragraphs on the page. A collection of lines that a human would perceive as a paragraph. */
		paragraphs?: Array<GoogleCloudDocumentaiV1beta1DocumentPageParagraph>;

		/** Structure to identify provenance relationships between annotations in different revisions. */
		provenance?: GoogleCloudDocumentaiV1beta1DocumentProvenance;

		/** A list of visually detected symbols on the page. */
		symbols?: Array<GoogleCloudDocumentaiV1beta1DocumentPageSymbol>;

		/** A list of visually detected tables on the page. */
		tables?: Array<GoogleCloudDocumentaiV1beta1DocumentPageTable>;

		/** A list of visually detected tokens on the page. */
		tokens?: Array<GoogleCloudDocumentaiV1beta1DocumentPageToken>;

		/** Transformation matrices that were applied to the original document image to produce Page.image. */
		transforms?: Array<GoogleCloudDocumentaiV1beta1DocumentPageMatrix>;

		/** A list of detected non-text visual elements e.g. checkbox, signature etc. on the page. */
		visualElements?: Array<GoogleCloudDocumentaiV1beta1DocumentPageVisualElement>;
	}

	/** A page in a Document. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageFormProperties {

		/** 1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing. */
		pageNumber: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentPageFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentPageFormProperties>({
			pageNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageBlock {

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage>;

		/** Visual element describing a layout unit on a page. */
		layout?: GoogleCloudDocumentaiV1beta1DocumentPageLayout;

		/** Structure to identify provenance relationships between annotations in different revisions. */
		provenance?: GoogleCloudDocumentaiV1beta1DocumentProvenance;
	}

	/** A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageBlockFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentPageBlockFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentPageBlockFormProperties>({
		});

	}


	/** Detected language for a structural component. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage {

		/** Confidence of detected language. Range `[0, 1]`. */
		confidence?: number | null;

		/** The [BCP-47 language code](https://www.unicode.org/reports/tr35/#Unicode_locale_identifier), such as `en-US` or `sr-Latn`. */
		languageCode?: string | null;
	}

	/** Detected language for a structural component. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguageFormProperties {

		/** Confidence of detected language. Range `[0, 1]`. */
		confidence: FormControl<number | null | undefined>,

		/** The [BCP-47 language code](https://www.unicode.org/reports/tr35/#Unicode_locale_identifier), such as `en-US` or `sr-Latn`. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguageFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguageFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Visual element describing a layout unit on a page. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageLayout {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudDocumentaiV1beta1BoundingPoly;

		/** Confidence of the current Layout within context of the object this layout is for. e.g. confidence can be for a single token, a table, a visual element, etc. depending on context. Range `[0, 1]`. */
		confidence?: number | null;

		/** Detected orientation for the Layout. */
		orientation?: GoogleCloudDocumentaiV1beta1DocumentPageLayoutOrientation | null;

		/** Text reference indexing into the Document.text. */
		textAnchor?: GoogleCloudDocumentaiV1beta1DocumentTextAnchor;
	}

	/** Visual element describing a layout unit on a page. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageLayoutFormProperties {

		/** Confidence of the current Layout within context of the object this layout is for. e.g. confidence can be for a single token, a table, a visual element, etc. depending on context. Range `[0, 1]`. */
		confidence: FormControl<number | null | undefined>,

		/** Detected orientation for the Layout. */
		orientation: FormControl<GoogleCloudDocumentaiV1beta1DocumentPageLayoutOrientation | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentPageLayoutFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentPageLayoutFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			orientation: new FormControl<GoogleCloudDocumentaiV1beta1DocumentPageLayoutOrientation | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDocumentaiV1beta1DocumentPageLayoutOrientation { ORIENTATION_UNSPECIFIED = 0, PAGE_UP = 1, PAGE_RIGHT = 2, PAGE_DOWN = 3, PAGE_LEFT = 4 }


	/** A detected barcode. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageDetectedBarcode {

		/** Encodes the detailed information of a barcode. */
		barcode?: GoogleCloudDocumentaiV1beta1Barcode;

		/** Visual element describing a layout unit on a page. */
		layout?: GoogleCloudDocumentaiV1beta1DocumentPageLayout;
	}

	/** A detected barcode. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageDetectedBarcodeFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentPageDetectedBarcodeFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentPageDetectedBarcodeFormProperties>({
		});

	}


	/** Dimension for the page. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageDimension {

		/** Page height. */
		height?: number | null;

		/** Dimension unit. */
		unit?: string | null;

		/** Page width. */
		width?: number | null;
	}

	/** Dimension for the page. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageDimensionFormProperties {

		/** Page height. */
		height: FormControl<number | null | undefined>,

		/** Dimension unit. */
		unit: FormControl<string | null | undefined>,

		/** Page width. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentPageDimensionFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentPageDimensionFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A form field detected on the page. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageFormField {

		/** Created for Labeling UI to export key text. If corrections were made to the text identified by the `field_name.text_anchor`, this field will contain the correction. */
		correctedKeyText?: string | null;

		/** Created for Labeling UI to export value text. If corrections were made to the text identified by the `field_value.text_anchor`, this field will contain the correction. */
		correctedValueText?: string | null;

		/** Visual element describing a layout unit on a page. */
		fieldName?: GoogleCloudDocumentaiV1beta1DocumentPageLayout;

		/** Visual element describing a layout unit on a page. */
		fieldValue?: GoogleCloudDocumentaiV1beta1DocumentPageLayout;

		/** A list of detected languages for name together with confidence. */
		nameDetectedLanguages?: Array<GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage>;

		/** Structure to identify provenance relationships between annotations in different revisions. */
		provenance?: GoogleCloudDocumentaiV1beta1DocumentProvenance;

		/** A list of detected languages for value together with confidence. */
		valueDetectedLanguages?: Array<GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage>;

		/** If the value is non-textual, this field represents the type. Current valid values are: - blank (this indicates the `field_value` is normal text) - `unfilled_checkbox` - `filled_checkbox` */
		valueType?: string | null;
	}

	/** A form field detected on the page. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageFormFieldFormProperties {

		/** Created for Labeling UI to export key text. If corrections were made to the text identified by the `field_name.text_anchor`, this field will contain the correction. */
		correctedKeyText: FormControl<string | null | undefined>,

		/** Created for Labeling UI to export value text. If corrections were made to the text identified by the `field_value.text_anchor`, this field will contain the correction. */
		correctedValueText: FormControl<string | null | undefined>,

		/** If the value is non-textual, this field represents the type. Current valid values are: - blank (this indicates the `field_value` is normal text) - `unfilled_checkbox` - `filled_checkbox` */
		valueType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentPageFormFieldFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentPageFormFieldFormProperties>({
			correctedKeyText: new FormControl<string | null | undefined>(undefined),
			correctedValueText: new FormControl<string | null | undefined>(undefined),
			valueType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Rendered image contents for this page. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageImage {

		/** Raw byte content of the image. */
		content?: string | null;

		/** Height of the image in pixels. */
		height?: number | null;

		/** Encoding [media type (MIME type)](https://www.iana.org/assignments/media-types/media-types.xhtml) for the image. */
		mimeType?: string | null;

		/** Width of the image in pixels. */
		width?: number | null;
	}

	/** Rendered image contents for this page. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageImageFormProperties {

		/** Raw byte content of the image. */
		content: FormControl<string | null | undefined>,

		/** Height of the image in pixels. */
		height: FormControl<number | null | undefined>,

		/** Encoding [media type (MIME type)](https://www.iana.org/assignments/media-types/media-types.xhtml) for the image. */
		mimeType: FormControl<string | null | undefined>,

		/** Width of the image in pixels. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentPageImageFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentPageImageFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Image quality scores for the page image. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScores {

		/** A list of detected defects. */
		detectedDefects?: Array<GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScoresDetectedDefect>;

		/** The overall quality score. Range `[0, 1]` where `1` is perfect quality. */
		qualityScore?: number | null;
	}

	/** Image quality scores for the page image. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScoresFormProperties {

		/** The overall quality score. Range `[0, 1]` where `1` is perfect quality. */
		qualityScore: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentPageImageQualityScoresFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScoresFormProperties>({
			qualityScore: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Image Quality Defects */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScoresDetectedDefect {

		/** Confidence of detected defect. Range `[0, 1]` where `1` indicates strong confidence that the defect exists. */
		confidence?: number | null;

		/** Name of the defect type. Supported values are: - `quality/defect_blurry` - `quality/defect_noisy` - `quality/defect_dark` - `quality/defect_faint` - `quality/defect_text_too_small` - `quality/defect_document_cutoff` - `quality/defect_text_cutoff` - `quality/defect_glare` */
		type?: string | null;
	}

	/** Image Quality Defects */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScoresDetectedDefectFormProperties {

		/** Confidence of detected defect. Range `[0, 1]` where `1` indicates strong confidence that the defect exists. */
		confidence: FormControl<number | null | undefined>,

		/** Name of the defect type. Supported values are: - `quality/defect_blurry` - `quality/defect_noisy` - `quality/defect_dark` - `quality/defect_faint` - `quality/defect_text_too_small` - `quality/defect_document_cutoff` - `quality/defect_text_cutoff` - `quality/defect_glare` */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentPageImageQualityScoresDetectedDefectFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScoresDetectedDefectFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageLine {

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage>;

		/** Visual element describing a layout unit on a page. */
		layout?: GoogleCloudDocumentaiV1beta1DocumentPageLayout;

		/** Structure to identify provenance relationships between annotations in different revisions. */
		provenance?: GoogleCloudDocumentaiV1beta1DocumentProvenance;
	}

	/** A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageLineFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentPageLineFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentPageLineFormProperties>({
		});

	}


	/** A collection of lines that a human would perceive as a paragraph. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageParagraph {

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage>;

		/** Visual element describing a layout unit on a page. */
		layout?: GoogleCloudDocumentaiV1beta1DocumentPageLayout;

		/** Structure to identify provenance relationships between annotations in different revisions. */
		provenance?: GoogleCloudDocumentaiV1beta1DocumentProvenance;
	}

	/** A collection of lines that a human would perceive as a paragraph. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageParagraphFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentPageParagraphFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentPageParagraphFormProperties>({
		});

	}


	/** A detected symbol. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageSymbol {

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage>;

		/** Visual element describing a layout unit on a page. */
		layout?: GoogleCloudDocumentaiV1beta1DocumentPageLayout;
	}

	/** A detected symbol. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageSymbolFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentPageSymbolFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentPageSymbolFormProperties>({
		});

	}


	/** A table representation similar to HTML table structure. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageTable {

		/** Body rows of the table. */
		bodyRows?: Array<GoogleCloudDocumentaiV1beta1DocumentPageTableTableRow>;

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage>;

		/** Header rows of the table. */
		headerRows?: Array<GoogleCloudDocumentaiV1beta1DocumentPageTableTableRow>;

		/** Visual element describing a layout unit on a page. */
		layout?: GoogleCloudDocumentaiV1beta1DocumentPageLayout;

		/** Structure to identify provenance relationships between annotations in different revisions. */
		provenance?: GoogleCloudDocumentaiV1beta1DocumentProvenance;
	}

	/** A table representation similar to HTML table structure. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageTableFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentPageTableFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentPageTableFormProperties>({
		});

	}


	/** A row of table cells. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageTableTableRow {

		/** Cells that make up this row. */
		cells?: Array<GoogleCloudDocumentaiV1beta1DocumentPageTableTableCell>;
	}

	/** A row of table cells. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageTableTableRowFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentPageTableTableRowFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentPageTableTableRowFormProperties>({
		});

	}


	/** A cell representation inside the table. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageTableTableCell {

		/** How many columns this cell spans. */
		colSpan?: number | null;

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage>;

		/** Visual element describing a layout unit on a page. */
		layout?: GoogleCloudDocumentaiV1beta1DocumentPageLayout;

		/** How many rows this cell spans. */
		rowSpan?: number | null;
	}

	/** A cell representation inside the table. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageTableTableCellFormProperties {

		/** How many columns this cell spans. */
		colSpan: FormControl<number | null | undefined>,

		/** How many rows this cell spans. */
		rowSpan: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentPageTableTableCellFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentPageTableTableCellFormProperties>({
			colSpan: new FormControl<number | null | undefined>(undefined),
			rowSpan: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A detected token. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageToken {

		/** Detected break at the end of a Token. */
		detectedBreak?: GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreak;

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage>;

		/** Visual element describing a layout unit on a page. */
		layout?: GoogleCloudDocumentaiV1beta1DocumentPageLayout;

		/** Structure to identify provenance relationships between annotations in different revisions. */
		provenance?: GoogleCloudDocumentaiV1beta1DocumentProvenance;

		/** Font and other text style attributes. */
		styleInfo?: GoogleCloudDocumentaiV1beta1DocumentPageTokenStyleInfo;
	}

	/** A detected token. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageTokenFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentPageTokenFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentPageTokenFormProperties>({
		});

	}


	/** Detected break at the end of a Token. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreak {

		/** Detected break type. */
		type?: GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreakType | null;
	}

	/** Detected break at the end of a Token. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreakFormProperties {

		/** Detected break type. */
		type: FormControl<GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreakType | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreakFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreakFormProperties>({
			type: new FormControl<GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreakType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreakType { TYPE_UNSPECIFIED = 0, SPACE = 1, WIDE_SPACE = 2, HYPHEN = 3 }


	/** Font and other text style attributes. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageTokenStyleInfo {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		backgroundColor?: GoogleTypeColor;

		/** Whether the text is bold (equivalent to font_weight is at least `700`). */
		bold?: boolean | null;

		/** Font size in points (`1` point is `¹⁄₇₂` inches). */
		fontSize?: number | null;

		/** Name or style of the font. */
		fontType?: string | null;

		/** TrueType weight on a scale `100` (thin) to `1000` (ultra-heavy). Normal is `400`, bold is `700`. */
		fontWeight?: number | null;

		/** Whether the text is handwritten. */
		handwritten?: boolean | null;

		/** Whether the text is italic. */
		italic?: boolean | null;

		/** Letter spacing in points. */
		letterSpacing?: number | null;

		/** Font size in pixels, equal to _unrounded font_size_ * _resolution_ ÷ `72.0`. */
		pixelFontSize?: number | null;

		/** Whether the text is in small caps. */
		smallcaps?: boolean | null;

		/** Whether the text is strikethrough. */
		strikeout?: boolean | null;

		/** Whether the text is a subscript. */
		subscript?: boolean | null;

		/** Whether the text is a superscript. */
		superscript?: boolean | null;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		textColor?: GoogleTypeColor;

		/** Whether the text is underlined. */
		underlined?: boolean | null;
	}

	/** Font and other text style attributes. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageTokenStyleInfoFormProperties {

		/** Whether the text is bold (equivalent to font_weight is at least `700`). */
		bold: FormControl<boolean | null | undefined>,

		/** Font size in points (`1` point is `¹⁄₇₂` inches). */
		fontSize: FormControl<number | null | undefined>,

		/** Name or style of the font. */
		fontType: FormControl<string | null | undefined>,

		/** TrueType weight on a scale `100` (thin) to `1000` (ultra-heavy). Normal is `400`, bold is `700`. */
		fontWeight: FormControl<number | null | undefined>,

		/** Whether the text is handwritten. */
		handwritten: FormControl<boolean | null | undefined>,

		/** Whether the text is italic. */
		italic: FormControl<boolean | null | undefined>,

		/** Letter spacing in points. */
		letterSpacing: FormControl<number | null | undefined>,

		/** Font size in pixels, equal to _unrounded font_size_ * _resolution_ ÷ `72.0`. */
		pixelFontSize: FormControl<number | null | undefined>,

		/** Whether the text is in small caps. */
		smallcaps: FormControl<boolean | null | undefined>,

		/** Whether the text is strikethrough. */
		strikeout: FormControl<boolean | null | undefined>,

		/** Whether the text is a subscript. */
		subscript: FormControl<boolean | null | undefined>,

		/** Whether the text is a superscript. */
		superscript: FormControl<boolean | null | undefined>,

		/** Whether the text is underlined. */
		underlined: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentPageTokenStyleInfoFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentPageTokenStyleInfoFormProperties>({
			bold: new FormControl<boolean | null | undefined>(undefined),
			fontSize: new FormControl<number | null | undefined>(undefined),
			fontType: new FormControl<string | null | undefined>(undefined),
			fontWeight: new FormControl<number | null | undefined>(undefined),
			handwritten: new FormControl<boolean | null | undefined>(undefined),
			italic: new FormControl<boolean | null | undefined>(undefined),
			letterSpacing: new FormControl<number | null | undefined>(undefined),
			pixelFontSize: new FormControl<number | null | undefined>(undefined),
			smallcaps: new FormControl<boolean | null | undefined>(undefined),
			strikeout: new FormControl<boolean | null | undefined>(undefined),
			subscript: new FormControl<boolean | null | undefined>(undefined),
			superscript: new FormControl<boolean | null | undefined>(undefined),
			underlined: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
	export interface GoogleTypeColor {

		/** The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0). */
		alpha?: number | null;

		/** The amount of blue in the color as a value in the interval [0, 1]. */
		blue?: number | null;

		/** The amount of green in the color as a value in the interval [0, 1]. */
		green?: number | null;

		/** The amount of red in the color as a value in the interval [0, 1]. */
		red?: number | null;
	}

	/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
	export interface GoogleTypeColorFormProperties {

		/** The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0). */
		alpha: FormControl<number | null | undefined>,

		/** The amount of blue in the color as a value in the interval [0, 1]. */
		blue: FormControl<number | null | undefined>,

		/** The amount of green in the color as a value in the interval [0, 1]. */
		green: FormControl<number | null | undefined>,

		/** The amount of red in the color as a value in the interval [0, 1]. */
		red: FormControl<number | null | undefined>,
	}
	export function CreateGoogleTypeColorFormGroup() {
		return new FormGroup<GoogleTypeColorFormProperties>({
			alpha: new FormControl<number | null | undefined>(undefined),
			blue: new FormControl<number | null | undefined>(undefined),
			green: new FormControl<number | null | undefined>(undefined),
			red: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageMatrix {

		/** Number of columns in the matrix. */
		cols?: number | null;

		/** The matrix data. */
		data?: string | null;

		/** Number of rows in the matrix. */
		rows?: number | null;

		/** This encodes information about what data type the matrix uses. For example, 0 (CV_8U) is an unsigned 8-bit image. For the full list of OpenCV primitive data types, please refer to https://docs.opencv.org/4.3.0/d1/d1b/group__core__hal__interface.html */
		type?: number | null;
	}

	/** Representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageMatrixFormProperties {

		/** Number of columns in the matrix. */
		cols: FormControl<number | null | undefined>,

		/** The matrix data. */
		data: FormControl<string | null | undefined>,

		/** Number of rows in the matrix. */
		rows: FormControl<number | null | undefined>,

		/** This encodes information about what data type the matrix uses. For example, 0 (CV_8U) is an unsigned 8-bit image. For the full list of OpenCV primitive data types, please refer to https://docs.opencv.org/4.3.0/d1/d1b/group__core__hal__interface.html */
		type: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentPageMatrixFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentPageMatrixFormProperties>({
			cols: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			rows: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Detected non-text visual elements e.g. checkbox, signature etc. on the page. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageVisualElement {

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage>;

		/** Visual element describing a layout unit on a page. */
		layout?: GoogleCloudDocumentaiV1beta1DocumentPageLayout;

		/** Type of the VisualElement. */
		type?: string | null;
	}

	/** Detected non-text visual elements e.g. checkbox, signature etc. on the page. */
	export interface GoogleCloudDocumentaiV1beta1DocumentPageVisualElementFormProperties {

		/** Type of the VisualElement. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentPageVisualElementFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentPageVisualElementFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains past or forward revisions of this document. */
	export interface GoogleCloudDocumentaiV1beta1DocumentRevision {

		/** If the change was made by a person specify the name or id of that person. */
		agent?: string | null;

		/** The time that the revision was created, internally generated by doc proto storage at the time of create. */
		createTime?: string | null;

		/** Human Review information of the document. */
		humanReview?: GoogleCloudDocumentaiV1beta1DocumentRevisionHumanReview;

		/** Id of the revision, internally generated by doc proto storage. Unique within the context of the document. */
		id?: string | null;

		/** The revisions that this revision is based on. This can include one or more parent (when documents are merged.) This field represents the index into the `revisions` field. */
		parent?: Array<number>;

		/** The revisions that this revision is based on. Must include all the ids that have anything to do with this revision - eg. there are `provenance.parent.revision` fields that index into this field. */
		parentIds?: Array<string>;

		/** If the annotation was made by processor identify the processor by its resource name. */
		processor?: string | null;
	}

	/** Contains past or forward revisions of this document. */
	export interface GoogleCloudDocumentaiV1beta1DocumentRevisionFormProperties {

		/** If the change was made by a person specify the name or id of that person. */
		agent: FormControl<string | null | undefined>,

		/** The time that the revision was created, internally generated by doc proto storage at the time of create. */
		createTime: FormControl<string | null | undefined>,

		/** Id of the revision, internally generated by doc proto storage. Unique within the context of the document. */
		id: FormControl<string | null | undefined>,

		/** If the annotation was made by processor identify the processor by its resource name. */
		processor: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentRevisionFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentRevisionFormProperties>({
			agent: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			processor: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Human Review information of the document. */
	export interface GoogleCloudDocumentaiV1beta1DocumentRevisionHumanReview {

		/** Human review state. e.g. `requested`, `succeeded`, `rejected`. */
		state?: string | null;

		/** A message providing more details about the current state of processing. For example, the rejection reason when the state is `rejected`. */
		stateMessage?: string | null;
	}

	/** Human Review information of the document. */
	export interface GoogleCloudDocumentaiV1beta1DocumentRevisionHumanReviewFormProperties {

		/** Human review state. e.g. `requested`, `succeeded`, `rejected`. */
		state: FormControl<string | null | undefined>,

		/** A message providing more details about the current state of processing. For example, the rejection reason when the state is `rejected`. */
		stateMessage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentRevisionHumanReviewFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentRevisionHumanReviewFormProperties>({
			state: new FormControl<string | null | undefined>(undefined),
			stateMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is. */
	export interface GoogleCloudDocumentaiV1beta1DocumentShardInfo {

		/** Total number of shards. */
		shardCount?: string | null;

		/** The 0-based index of this shard. */
		shardIndex?: string | null;

		/** The index of the first character in Document.text in the overall document global text. */
		textOffset?: string | null;
	}

	/** For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is. */
	export interface GoogleCloudDocumentaiV1beta1DocumentShardInfoFormProperties {

		/** Total number of shards. */
		shardCount: FormControl<string | null | undefined>,

		/** The 0-based index of this shard. */
		shardIndex: FormControl<string | null | undefined>,

		/** The index of the first character in Document.text in the overall document global text. */
		textOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentShardInfoFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentShardInfoFormProperties>({
			shardCount: new FormControl<string | null | undefined>(undefined),
			shardIndex: new FormControl<string | null | undefined>(undefined),
			textOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This message is used for text changes aka. OCR corrections. */
	export interface GoogleCloudDocumentaiV1beta1DocumentTextChange {

		/** The text that replaces the text identified in the `text_anchor`. */
		changedText?: string | null;

		/** The history of this annotation. */
		provenance?: Array<GoogleCloudDocumentaiV1beta1DocumentProvenance>;

		/** Text reference indexing into the Document.text. */
		textAnchor?: GoogleCloudDocumentaiV1beta1DocumentTextAnchor;
	}

	/** This message is used for text changes aka. OCR corrections. */
	export interface GoogleCloudDocumentaiV1beta1DocumentTextChangeFormProperties {

		/** The text that replaces the text identified in the `text_anchor`. */
		changedText: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentTextChangeFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentTextChangeFormProperties>({
			changedText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Annotation for common text style attributes. This adheres to CSS conventions as much as possible. */
	export interface GoogleCloudDocumentaiV1beta1DocumentStyle {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		backgroundColor?: GoogleTypeColor;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		color?: GoogleTypeColor;

		/** Font family such as `Arial`, `Times New Roman`. https://www.w3schools.com/cssref/pr_font_font-family.asp */
		fontFamily?: string | null;

		/** Font size with unit. */
		fontSize?: GoogleCloudDocumentaiV1beta1DocumentStyleFontSize;

		/** [Font weight](https://www.w3schools.com/cssref/pr_font_weight.asp). Possible values are `normal`, `bold`, `bolder`, and `lighter`. */
		fontWeight?: string | null;

		/** Text reference indexing into the Document.text. */
		textAnchor?: GoogleCloudDocumentaiV1beta1DocumentTextAnchor;

		/** [Text decoration](https://www.w3schools.com/cssref/pr_text_text-decoration.asp). Follows CSS standard. */
		textDecoration?: string | null;

		/** [Text style](https://www.w3schools.com/cssref/pr_font_font-style.asp). Possible values are `normal`, `italic`, and `oblique`. */
		textStyle?: string | null;
	}

	/** Annotation for common text style attributes. This adheres to CSS conventions as much as possible. */
	export interface GoogleCloudDocumentaiV1beta1DocumentStyleFormProperties {

		/** Font family such as `Arial`, `Times New Roman`. https://www.w3schools.com/cssref/pr_font_font-family.asp */
		fontFamily: FormControl<string | null | undefined>,

		/** [Font weight](https://www.w3schools.com/cssref/pr_font_weight.asp). Possible values are `normal`, `bold`, `bolder`, and `lighter`. */
		fontWeight: FormControl<string | null | undefined>,

		/** [Text decoration](https://www.w3schools.com/cssref/pr_text_text-decoration.asp). Follows CSS standard. */
		textDecoration: FormControl<string | null | undefined>,

		/** [Text style](https://www.w3schools.com/cssref/pr_font_font-style.asp). Possible values are `normal`, `italic`, and `oblique`. */
		textStyle: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentStyleFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentStyleFormProperties>({
			fontFamily: new FormControl<string | null | undefined>(undefined),
			fontWeight: new FormControl<string | null | undefined>(undefined),
			textDecoration: new FormControl<string | null | undefined>(undefined),
			textStyle: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Font size with unit. */
	export interface GoogleCloudDocumentaiV1beta1DocumentStyleFontSize {

		/** Font size for the text. */
		size?: number | null;

		/** Unit for the font size. Follows CSS naming (such as `in`, `px`, and `pt`). */
		unit?: string | null;
	}

	/** Font size with unit. */
	export interface GoogleCloudDocumentaiV1beta1DocumentStyleFontSizeFormProperties {

		/** Font size for the text. */
		size: FormControl<number | null | undefined>,

		/** Unit for the font size. Follows CSS naming (such as `in`, `px`, and `pt`). */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1DocumentStyleFontSizeFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1DocumentStyleFontSizeFormProperties>({
			size: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains metadata for the BatchProcessDocuments operation. */
	export interface GoogleCloudDocumentaiV1beta1OperationMetadata {

		/** The creation time of the operation. */
		createTime?: string | null;

		/** The state of the current batch processing. */
		state?: GoogleCloudDocumentaiV1beta1OperationMetadataState | null;

		/** A message providing more details about the current state of processing. */
		stateMessage?: string | null;

		/** The last update time of the operation. */
		updateTime?: string | null;
	}

	/** Contains metadata for the BatchProcessDocuments operation. */
	export interface GoogleCloudDocumentaiV1beta1OperationMetadataFormProperties {

		/** The creation time of the operation. */
		createTime: FormControl<string | null | undefined>,

		/** The state of the current batch processing. */
		state: FormControl<GoogleCloudDocumentaiV1beta1OperationMetadataState | null | undefined>,

		/** A message providing more details about the current state of processing. */
		stateMessage: FormControl<string | null | undefined>,

		/** The last update time of the operation. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta1OperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta1OperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDocumentaiV1beta1OperationMetadataState | null | undefined>(undefined),
			stateMessage: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDocumentaiV1beta1OperationMetadataState { STATE_UNSPECIFIED = 0, ACCEPTED = 1, WAITING = 2, RUNNING = 3, SUCCEEDED = 4, CANCELLED = 5, FAILED = 6 }


	/** Parameters to control AutoML model prediction behavior. */
	export interface GoogleCloudDocumentaiV1beta2AutoMlParams {

		/** Resource name of the AutoML model. Format: `projects/{project-id}/locations/{location-id}/models/{model-id}`. */
		model?: string | null;
	}

	/** Parameters to control AutoML model prediction behavior. */
	export interface GoogleCloudDocumentaiV1beta2AutoMlParamsFormProperties {

		/** Resource name of the AutoML model. Format: `projects/{project-id}/locations/{location-id}/models/{model-id}`. */
		model: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2AutoMlParamsFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2AutoMlParamsFormProperties>({
			model: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encodes the detailed information of a barcode. */
	export interface GoogleCloudDocumentaiV1beta2Barcode {

		/** Format of a barcode. The supported formats are: - `CODE_128`: Code 128 type. - `CODE_39`: Code 39 type. - `CODE_93`: Code 93 type. - `CODABAR`: Codabar type. - `DATA_MATRIX`: 2D Data Matrix type. - `ITF`: ITF type. - `EAN_13`: EAN-13 type. - `EAN_8`: EAN-8 type. - `QR_CODE`: 2D QR code type. - `UPC_A`: UPC-A type. - `UPC_E`: UPC-E type. - `PDF417`: PDF417 type. - `AZTEC`: 2D Aztec code type. - `DATABAR`: GS1 DataBar code type. */
		format?: string | null;

		/** Raw value encoded in the barcode. For example: `'MEBKM:TITLE:Google;URL:https://www.google.com;;'`. */
		rawValue?: string | null;

		/** Value format describes the format of the value that a barcode encodes. The supported formats are: - `CONTACT_INFO`: Contact information. - `EMAIL`: Email address. - `ISBN`: ISBN identifier. - `PHONE`: Phone number. - `PRODUCT`: Product. - `SMS`: SMS message. - `TEXT`: Text string. - `URL`: URL address. - `WIFI`: Wifi information. - `GEO`: Geo-localization. - `CALENDAR_EVENT`: Calendar event. - `DRIVER_LICENSE`: Driver's license. */
		valueFormat?: string | null;
	}

	/** Encodes the detailed information of a barcode. */
	export interface GoogleCloudDocumentaiV1beta2BarcodeFormProperties {

		/** Format of a barcode. The supported formats are: - `CODE_128`: Code 128 type. - `CODE_39`: Code 39 type. - `CODE_93`: Code 93 type. - `CODABAR`: Codabar type. - `DATA_MATRIX`: 2D Data Matrix type. - `ITF`: ITF type. - `EAN_13`: EAN-13 type. - `EAN_8`: EAN-8 type. - `QR_CODE`: 2D QR code type. - `UPC_A`: UPC-A type. - `UPC_E`: UPC-E type. - `PDF417`: PDF417 type. - `AZTEC`: 2D Aztec code type. - `DATABAR`: GS1 DataBar code type. */
		format: FormControl<string | null | undefined>,

		/** Raw value encoded in the barcode. For example: `'MEBKM:TITLE:Google;URL:https://www.google.com;;'`. */
		rawValue: FormControl<string | null | undefined>,

		/** Value format describes the format of the value that a barcode encodes. The supported formats are: - `CONTACT_INFO`: Contact information. - `EMAIL`: Email address. - `ISBN`: ISBN identifier. - `PHONE`: Phone number. - `PRODUCT`: Product. - `SMS`: SMS message. - `TEXT`: Text string. - `URL`: URL address. - `WIFI`: Wifi information. - `GEO`: Geo-localization. - `CALENDAR_EVENT`: Calendar event. - `DRIVER_LICENSE`: Driver's license. */
		valueFormat: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2BarcodeFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2BarcodeFormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
			rawValue: new FormControl<string | null | undefined>(undefined),
			valueFormat: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to batch process documents as an asynchronous operation. The output is written to Cloud Storage as JSON in the [Document] format. */
	export interface GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest {

		/** Required. Individual requests for each document. */
		requests?: Array<GoogleCloudDocumentaiV1beta2ProcessDocumentRequest>;
	}

	/** Request to batch process documents as an asynchronous operation. The output is written to Cloud Storage as JSON in the [Document] format. */
	export interface GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequestFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequestFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequestFormProperties>({
		});

	}


	/** Request to process one document. */
	export interface GoogleCloudDocumentaiV1beta2ProcessDocumentRequest {

		/** Parameters to control AutoML model prediction behavior. */
		automlParams?: GoogleCloudDocumentaiV1beta2AutoMlParams;

		/** Specifies a known document type for deeper structure detection. Valid values are currently "general" and "invoice". If not provided, "general"\ is used as default. If any other value is given, the request is rejected. */
		documentType?: string | null;

		/** Parameters to control entity extraction behavior. */
		entityExtractionParams?: GoogleCloudDocumentaiV1beta2EntityExtractionParams;

		/** Parameters to control form extraction behavior. */
		formExtractionParams?: GoogleCloudDocumentaiV1beta2FormExtractionParams;

		/** The desired input location and metadata. */
		inputConfig?: GoogleCloudDocumentaiV1beta2InputConfig;

		/** Parameters to control Optical Character Recognition (OCR) behavior. */
		ocrParams?: GoogleCloudDocumentaiV1beta2OcrParams;

		/** The desired output location and metadata. */
		outputConfig?: GoogleCloudDocumentaiV1beta2OutputConfig;

		/** Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no location is specified, a region will be chosen automatically. This field is only populated when used in ProcessDocument method. */
		parent?: string | null;

		/** Parameters to control table extraction behavior. */
		tableExtractionParams?: GoogleCloudDocumentaiV1beta2TableExtractionParams;
	}

	/** Request to process one document. */
	export interface GoogleCloudDocumentaiV1beta2ProcessDocumentRequestFormProperties {

		/** Specifies a known document type for deeper structure detection. Valid values are currently "general" and "invoice". If not provided, "general"\ is used as default. If any other value is given, the request is rejected. */
		documentType: FormControl<string | null | undefined>,

		/** Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no location is specified, a region will be chosen automatically. This field is only populated when used in ProcessDocument method. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2ProcessDocumentRequestFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2ProcessDocumentRequestFormProperties>({
			documentType: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters to control entity extraction behavior. */
	export interface GoogleCloudDocumentaiV1beta2EntityExtractionParams {

		/** Whether to enable entity extraction. */
		enabled?: boolean | null;

		/** Model version of the entity extraction. Default is "builtin/stable". Specify "builtin/latest" for the latest model. */
		modelVersion?: string | null;
	}

	/** Parameters to control entity extraction behavior. */
	export interface GoogleCloudDocumentaiV1beta2EntityExtractionParamsFormProperties {

		/** Whether to enable entity extraction. */
		enabled: FormControl<boolean | null | undefined>,

		/** Model version of the entity extraction. Default is "builtin/stable". Specify "builtin/latest" for the latest model. */
		modelVersion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2EntityExtractionParamsFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2EntityExtractionParamsFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			modelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters to control form extraction behavior. */
	export interface GoogleCloudDocumentaiV1beta2FormExtractionParams {

		/** Whether to enable form extraction. */
		enabled?: boolean | null;

		/** Reserved for future use. */
		keyValuePairHints?: Array<GoogleCloudDocumentaiV1beta2KeyValuePairHint>;

		/** Model version of the form extraction system. Default is "builtin/stable". Specify "builtin/latest" for the latest model. For custom form models, specify: "custom/{model_name}". Model name format is "bucket_name/path/to/modeldir" corresponding to "gs://bucket_name/path/to/modeldir" where annotated examples are stored. */
		modelVersion?: string | null;
	}

	/** Parameters to control form extraction behavior. */
	export interface GoogleCloudDocumentaiV1beta2FormExtractionParamsFormProperties {

		/** Whether to enable form extraction. */
		enabled: FormControl<boolean | null | undefined>,

		/** Model version of the form extraction system. Default is "builtin/stable". Specify "builtin/latest" for the latest model. For custom form models, specify: "custom/{model_name}". Model name format is "bucket_name/path/to/modeldir" corresponding to "gs://bucket_name/path/to/modeldir" where annotated examples are stored. */
		modelVersion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2FormExtractionParamsFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2FormExtractionParamsFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			modelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reserved for future use. */
	export interface GoogleCloudDocumentaiV1beta2KeyValuePairHint {

		/** The key text for the hint. */
		key?: string | null;

		/** Type of the value. This is case-insensitive, and could be one of: ADDRESS, LOCATION, ORGANIZATION, PERSON, PHONE_NUMBER, ID, NUMBER, EMAIL, PRICE, TERMS, DATE, NAME. Types not in this list will be ignored. */
		valueTypes?: Array<string>;
	}

	/** Reserved for future use. */
	export interface GoogleCloudDocumentaiV1beta2KeyValuePairHintFormProperties {

		/** The key text for the hint. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2KeyValuePairHintFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2KeyValuePairHintFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The desired input location and metadata. */
	export interface GoogleCloudDocumentaiV1beta2InputConfig {

		/** Content in bytes, represented as a stream of bytes. Note: As with all `bytes` fields, proto buffer messages use a pure binary representation, whereas JSON representations use base64. This field only works for synchronous ProcessDocument method. */
		contents?: string | null;

		/** The Google Cloud Storage location where the input file will be read from. */
		gcsSource?: GoogleCloudDocumentaiV1beta2GcsSource;

		/** Required. Mimetype of the input. Current supported mimetypes are application/pdf, image/tiff, and image/gif. In addition, application/json type is supported for requests with ProcessDocumentRequest.automl_params field set. The JSON file needs to be in Document format. */
		mimeType?: string | null;
	}

	/** The desired input location and metadata. */
	export interface GoogleCloudDocumentaiV1beta2InputConfigFormProperties {

		/** Content in bytes, represented as a stream of bytes. Note: As with all `bytes` fields, proto buffer messages use a pure binary representation, whereas JSON representations use base64. This field only works for synchronous ProcessDocument method. */
		contents: FormControl<string | null | undefined>,

		/** Required. Mimetype of the input. Current supported mimetypes are application/pdf, image/tiff, and image/gif. In addition, application/json type is supported for requests with ProcessDocumentRequest.automl_params field set. The JSON file needs to be in Document format. */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2InputConfigFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2InputConfigFormProperties>({
			contents: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Google Cloud Storage location where the input file will be read from. */
	export interface GoogleCloudDocumentaiV1beta2GcsSource {
		uri?: string | null;
	}

	/** The Google Cloud Storage location where the input file will be read from. */
	export interface GoogleCloudDocumentaiV1beta2GcsSourceFormProperties {
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2GcsSourceFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2GcsSourceFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters to control Optical Character Recognition (OCR) behavior. */
	export interface GoogleCloudDocumentaiV1beta2OcrParams {

		/** List of languages to use for OCR. In most cases, an empty value yields the best results since it enables automatic language detection. For languages based on the Latin alphabet, setting `language_hints` is not needed. In rare cases, when the language of the text in the image is known, setting a hint will help get better results (although it will be a significant hindrance if the hint is wrong). Document processing returns an error if one or more of the specified languages is not one of the supported languages. */
		languageHints?: Array<string>;
	}

	/** Parameters to control Optical Character Recognition (OCR) behavior. */
	export interface GoogleCloudDocumentaiV1beta2OcrParamsFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta2OcrParamsFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2OcrParamsFormProperties>({
		});

	}


	/** The desired output location and metadata. */
	export interface GoogleCloudDocumentaiV1beta2OutputConfig {

		/** The Google Cloud Storage location where the output file will be written to. */
		gcsDestination?: GoogleCloudDocumentaiV1beta2GcsDestination;

		/** The max number of pages to include into each output Document shard JSON on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 parsed pages will be produced. If `pages_per_shard` = 20, then 5 Document shard JSON files each containing 20 parsed pages will be written under the prefix OutputConfig.gcs_destination.uri and suffix pages-x-to-y.json where x and y are 1-indexed page numbers. Example GCS outputs with 157 pages and pages_per_shard = 50: pages-001-to-050.json pages-051-to-100.json pages-101-to-150.json pages-151-to-157.json */
		pagesPerShard?: number | null;
	}

	/** The desired output location and metadata. */
	export interface GoogleCloudDocumentaiV1beta2OutputConfigFormProperties {

		/** The max number of pages to include into each output Document shard JSON on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 parsed pages will be produced. If `pages_per_shard` = 20, then 5 Document shard JSON files each containing 20 parsed pages will be written under the prefix OutputConfig.gcs_destination.uri and suffix pages-x-to-y.json where x and y are 1-indexed page numbers. Example GCS outputs with 157 pages and pages_per_shard = 50: pages-001-to-050.json pages-051-to-100.json pages-101-to-150.json pages-151-to-157.json */
		pagesPerShard: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2OutputConfigFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2OutputConfigFormProperties>({
			pagesPerShard: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The Google Cloud Storage location where the output file will be written to. */
	export interface GoogleCloudDocumentaiV1beta2GcsDestination {
		uri?: string | null;
	}

	/** The Google Cloud Storage location where the output file will be written to. */
	export interface GoogleCloudDocumentaiV1beta2GcsDestinationFormProperties {
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2GcsDestinationFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2GcsDestinationFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters to control table extraction behavior. */
	export interface GoogleCloudDocumentaiV1beta2TableExtractionParams {

		/** Whether to enable table extraction. */
		enabled?: boolean | null;

		/** Optional. Reserved for future use. */
		headerHints?: Array<string>;

		/** Model version of the table extraction system. Default is "builtin/stable". Specify "builtin/latest" for the latest model. */
		modelVersion?: string | null;

		/** Optional. Table bounding box hints that can be provided to complex cases which our algorithm cannot locate the table(s) in. */
		tableBoundHints?: Array<GoogleCloudDocumentaiV1beta2TableBoundHint>;
	}

	/** Parameters to control table extraction behavior. */
	export interface GoogleCloudDocumentaiV1beta2TableExtractionParamsFormProperties {

		/** Whether to enable table extraction. */
		enabled: FormControl<boolean | null | undefined>,

		/** Model version of the table extraction system. Default is "builtin/stable". Specify "builtin/latest" for the latest model. */
		modelVersion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2TableExtractionParamsFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2TableExtractionParamsFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			modelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A hint for a table bounding box on the page for table parsing. */
	export interface GoogleCloudDocumentaiV1beta2TableBoundHint {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudDocumentaiV1beta2BoundingPoly;

		/** Optional. Page number for multi-paged inputs this hint applies to. If not provided, this hint will apply to all pages by default. This value is 1-based. */
		pageNumber?: number | null;
	}

	/** A hint for a table bounding box on the page for table parsing. */
	export interface GoogleCloudDocumentaiV1beta2TableBoundHintFormProperties {

		/** Optional. Page number for multi-paged inputs this hint applies to. If not provided, this hint will apply to all pages by default. This value is 1-based. */
		pageNumber: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2TableBoundHintFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2TableBoundHintFormProperties>({
			pageNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A bounding polygon for the detected image annotation. */
	export interface GoogleCloudDocumentaiV1beta2BoundingPoly {

		/** The bounding polygon normalized vertices. */
		normalizedVertices?: Array<GoogleCloudDocumentaiV1beta2NormalizedVertex>;

		/** The bounding polygon vertices. */
		vertices?: Array<GoogleCloudDocumentaiV1beta2Vertex>;
	}

	/** A bounding polygon for the detected image annotation. */
	export interface GoogleCloudDocumentaiV1beta2BoundingPolyFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta2BoundingPolyFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2BoundingPolyFormProperties>({
		});

	}


	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudDocumentaiV1beta2NormalizedVertex {

		/** X coordinate. */
		x?: number | null;

		/** Y coordinate (starts from the top of the image). */
		y?: number | null;
	}

	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudDocumentaiV1beta2NormalizedVertexFormProperties {

		/** X coordinate. */
		x: FormControl<number | null | undefined>,

		/** Y coordinate (starts from the top of the image). */
		y: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2NormalizedVertexFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2NormalizedVertexFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image. */
	export interface GoogleCloudDocumentaiV1beta2Vertex {

		/** X coordinate. */
		x?: number | null;

		/** Y coordinate (starts from the top of the image). */
		y?: number | null;
	}

	/** A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image. */
	export interface GoogleCloudDocumentaiV1beta2VertexFormProperties {

		/** X coordinate. */
		x: FormControl<number | null | undefined>,

		/** Y coordinate (starts from the top of the image). */
		y: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2VertexFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2VertexFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response to an batch document processing request. This is returned in the LRO Operation after the operation is complete. */
	export interface GoogleCloudDocumentaiV1beta2BatchProcessDocumentsResponse {

		/** Responses for each individual document. */
		responses?: Array<GoogleCloudDocumentaiV1beta2ProcessDocumentResponse>;
	}

	/** Response to an batch document processing request. This is returned in the LRO Operation after the operation is complete. */
	export interface GoogleCloudDocumentaiV1beta2BatchProcessDocumentsResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta2BatchProcessDocumentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2BatchProcessDocumentsResponseFormProperties>({
		});

	}


	/** Response to a single document processing request. */
	export interface GoogleCloudDocumentaiV1beta2ProcessDocumentResponse {

		/** The desired input location and metadata. */
		inputConfig?: GoogleCloudDocumentaiV1beta2InputConfig;

		/** The desired output location and metadata. */
		outputConfig?: GoogleCloudDocumentaiV1beta2OutputConfig;
	}

	/** Response to a single document processing request. */
	export interface GoogleCloudDocumentaiV1beta2ProcessDocumentResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta2ProcessDocumentResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2ProcessDocumentResponseFormProperties>({
		});

	}


	/** Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality. */
	export interface GoogleCloudDocumentaiV1beta2Document {

		/** Optional. Inline document content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. */
		content?: string | null;

		/** A list of entities detected on Document.text. For document shards, entities in this list may cross shard boundaries. */
		entities?: Array<GoogleCloudDocumentaiV1beta2DocumentEntity>;

		/** Placeholder. Relationship among Document.entities. */
		entityRelations?: Array<GoogleCloudDocumentaiV1beta2DocumentEntityRelation>;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;

		/** Labels for this document. */
		labels?: Array<GoogleCloudDocumentaiV1beta2DocumentLabel>;

		/** An IANA published [media type (MIME type)](https://www.iana.org/assignments/media-types/media-types.xhtml). */
		mimeType?: string | null;

		/** Visual page layout for the Document. */
		pages?: Array<GoogleCloudDocumentaiV1beta2DocumentPage>;

		/** Placeholder. Revision history of this document. */
		revisions?: Array<GoogleCloudDocumentaiV1beta2DocumentRevision>;

		/** For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is. */
		shardInfo?: GoogleCloudDocumentaiV1beta2DocumentShardInfo;

		/** Optional. UTF-8 encoded text in reading order from the document. */
		text?: string | null;

		/** Placeholder. A list of text corrections made to Document.text. This is usually used for annotating corrections to OCR mistakes. Text changes for a given revision may not overlap with each other. */
		textChanges?: Array<GoogleCloudDocumentaiV1beta2DocumentTextChange>;

		/** Styles for the Document.text. */
		textStyles?: Array<GoogleCloudDocumentaiV1beta2DocumentStyle>;

		/** Optional. Currently supports Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. For more information, refer to [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris). */
		uri?: string | null;
	}

	/** Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality. */
	export interface GoogleCloudDocumentaiV1beta2DocumentFormProperties {

		/** Optional. Inline document content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. */
		content: FormControl<string | null | undefined>,

		/** An IANA published [media type (MIME type)](https://www.iana.org/assignments/media-types/media-types.xhtml). */
		mimeType: FormControl<string | null | undefined>,

		/** Optional. UTF-8 encoded text in reading order from the document. */
		text: FormControl<string | null | undefined>,

		/** Optional. Currently supports Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. For more information, refer to [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris). */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location. */
	export interface GoogleCloudDocumentaiV1beta2DocumentEntity {

		/** Optional. Confidence of detected Schema entity. Range `[0, 1]`. */
		confidence?: number | null;

		/** Optional. Canonical id. This will be a unique value in the entity list for this document. */
		id?: string | null;

		/** Optional. Deprecated. Use `id` field instead. */
		mentionId?: string | null;

		/** Optional. Text value of the entity e.g. `1600 Amphitheatre Pkwy`. */
		mentionText?: string | null;

		/** Parsed and normalized entity value. */
		normalizedValue?: GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue;

		/** Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types. */
		pageAnchor?: GoogleCloudDocumentaiV1beta2DocumentPageAnchor;

		/** Optional. Entities can be nested to form a hierarchical data structure representing the content in the document. */
		properties?: Array<GoogleCloudDocumentaiV1beta2DocumentEntity>;

		/** Structure to identify provenance relationships between annotations in different revisions. */
		provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;

		/** Optional. Whether the entity will be redacted for de-identification purposes. */
		redacted?: boolean | null;

		/** Text reference indexing into the Document.text. */
		textAnchor?: GoogleCloudDocumentaiV1beta2DocumentTextAnchor;

		/** Required. Entity type from a schema e.g. `Address`. */
		type?: string | null;
	}

	/** An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location. */
	export interface GoogleCloudDocumentaiV1beta2DocumentEntityFormProperties {

		/** Optional. Confidence of detected Schema entity. Range `[0, 1]`. */
		confidence: FormControl<number | null | undefined>,

		/** Optional. Canonical id. This will be a unique value in the entity list for this document. */
		id: FormControl<string | null | undefined>,

		/** Optional. Deprecated. Use `id` field instead. */
		mentionId: FormControl<string | null | undefined>,

		/** Optional. Text value of the entity e.g. `1600 Amphitheatre Pkwy`. */
		mentionText: FormControl<string | null | undefined>,

		/** Optional. Whether the entity will be redacted for de-identification purposes. */
		redacted: FormControl<boolean | null | undefined>,

		/** Required. Entity type from a schema e.g. `Address`. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentEntityFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentEntityFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			mentionId: new FormControl<string | null | undefined>(undefined),
			mentionText: new FormControl<string | null | undefined>(undefined),
			redacted: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parsed and normalized entity value. */
	export interface GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue {

		/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
		addressValue?: GoogleTypePostalAddress;

		/** Boolean value. Can be used for entities with binary values, or for checkboxes. */
		booleanValue?: boolean | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		dateValue?: GoogleTypeDate;

		/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
		datetimeValue?: GoogleTypeDateTime;

		/** Float value. */
		floatValue?: number | null;

		/** Integer value. */
		integerValue?: number | null;

		/** Represents an amount of money with its currency type. */
		moneyValue?: GoogleTypeMoney;

		/** Optional. An optional field to store a normalized string. For some entity types, one of respective `structured_value` fields may also be populated. Also not all the types of `structured_value` will be normalized. For example, some processors may not generate `float` or `integer` normalized text by default. Below are sample formats mapped to structured values. - Money/Currency type (`money_value`) is in the ISO 4217 text format. - Date type (`date_value`) is in the ISO 8601 text format. - Datetime type (`datetime_value`) is in the ISO 8601 text format. */
		text?: string | null;
	}

	/** Parsed and normalized entity value. */
	export interface GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValueFormProperties {

		/** Boolean value. Can be used for entities with binary values, or for checkboxes. */
		booleanValue: FormControl<boolean | null | undefined>,

		/** Float value. */
		floatValue: FormControl<number | null | undefined>,

		/** Integer value. */
		integerValue: FormControl<number | null | undefined>,

		/** Optional. An optional field to store a normalized string. For some entity types, one of respective `structured_value` fields may also be populated. Also not all the types of `structured_value` will be normalized. For example, some processors may not generate `float` or `integer` normalized text by default. Below are sample formats mapped to structured values. - Money/Currency type (`money_value`) is in the ISO 4217 text format. - Date type (`date_value`) is in the ISO 8601 text format. - Datetime type (`datetime_value`) is in the ISO 8601 text format. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValueFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValueFormProperties>({
			booleanValue: new FormControl<boolean | null | undefined>(undefined),
			floatValue: new FormControl<number | null | undefined>(undefined),
			integerValue: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageAnchor {

		/** One or more references to visual page elements */
		pageRefs?: Array<GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef>;
	}

	/** Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageAnchorFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentPageAnchorFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentPageAnchorFormProperties>({
		});

	}


	/** Represents a weak reference to a page element within a document. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudDocumentaiV1beta2BoundingPoly;

		/** Optional. Confidence of detected page element, if applicable. Range `[0, 1]`. */
		confidence?: number | null;

		/** Optional. Deprecated. Use PageRef.bounding_poly instead. */
		layoutId?: string | null;

		/** Optional. The type of the layout element that is being referenced if any. */
		layoutType?: GoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRefLayoutType | null;

		/** Required. Index into the Document.pages element, for example using `Document.pages` to locate the related page element. This field is skipped when its value is the default `0`. See https://developers.google.com/protocol-buffers/docs/proto3#json. */
		page?: string | null;
	}

	/** Represents a weak reference to a page element within a document. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRefFormProperties {

		/** Optional. Confidence of detected page element, if applicable. Range `[0, 1]`. */
		confidence: FormControl<number | null | undefined>,

		/** Optional. Deprecated. Use PageRef.bounding_poly instead. */
		layoutId: FormControl<string | null | undefined>,

		/** Optional. The type of the layout element that is being referenced if any. */
		layoutType: FormControl<GoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRefLayoutType | null | undefined>,

		/** Required. Index into the Document.pages element, for example using `Document.pages` to locate the related page element. This field is skipped when its value is the default `0`. See https://developers.google.com/protocol-buffers/docs/proto3#json. */
		page: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRefFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRefFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			layoutId: new FormControl<string | null | undefined>(undefined),
			layoutType: new FormControl<GoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRefLayoutType | null | undefined>(undefined),
			page: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Structure to identify provenance relationships between annotations in different revisions. */
	export interface GoogleCloudDocumentaiV1beta2DocumentProvenance {

		/** The Id of this operation. Needs to be unique within the scope of the revision. */
		id?: number | null;

		/** References to the original elements that are replaced. */
		parents?: Array<GoogleCloudDocumentaiV1beta2DocumentProvenanceParent>;

		/** The index of the revision that produced this element. */
		revision?: number | null;

		/** The type of provenance operation. */
		type?: GoogleCloudDocumentaiV1beta1DocumentProvenanceType | null;
	}

	/** Structure to identify provenance relationships between annotations in different revisions. */
	export interface GoogleCloudDocumentaiV1beta2DocumentProvenanceFormProperties {

		/** The Id of this operation. Needs to be unique within the scope of the revision. */
		id: FormControl<number | null | undefined>,

		/** The index of the revision that produced this element. */
		revision: FormControl<number | null | undefined>,

		/** The type of provenance operation. */
		type: FormControl<GoogleCloudDocumentaiV1beta1DocumentProvenanceType | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentProvenanceFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentProvenanceFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDocumentaiV1beta1DocumentProvenanceType | null | undefined>(undefined),
		});

	}


	/** The parent element the current element is based on. Used for referencing/aligning, removal and replacement operations. */
	export interface GoogleCloudDocumentaiV1beta2DocumentProvenanceParent {

		/** The id of the parent provenance. */
		id?: number | null;

		/** The index of the parent item in the corresponding item list (eg. list of entities, properties within entities, etc.) in the parent revision. */
		index?: number | null;

		/** The index of the index into current revision's parent_ids list. */
		revision?: number | null;
	}

	/** The parent element the current element is based on. Used for referencing/aligning, removal and replacement operations. */
	export interface GoogleCloudDocumentaiV1beta2DocumentProvenanceParentFormProperties {

		/** The id of the parent provenance. */
		id: FormControl<number | null | undefined>,

		/** The index of the parent item in the corresponding item list (eg. list of entities, properties within entities, etc.) in the parent revision. */
		index: FormControl<number | null | undefined>,

		/** The index of the index into current revision's parent_ids list. */
		revision: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentProvenanceParentFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentProvenanceParentFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Text reference indexing into the Document.text. */
	export interface GoogleCloudDocumentaiV1beta2DocumentTextAnchor {

		/** Contains the content of the text span so that users do not have to look it up in the text_segments. It is always populated for formFields. */
		content?: string | null;

		/** The text segments from the Document.text. */
		textSegments?: Array<GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment>;
	}

	/** Text reference indexing into the Document.text. */
	export interface GoogleCloudDocumentaiV1beta2DocumentTextAnchorFormProperties {

		/** Contains the content of the text span so that users do not have to look it up in the text_segments. It is always populated for formFields. */
		content: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentTextAnchorFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentTextAnchorFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset */
	export interface GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment {

		/** TextSegment half open end UTF-8 char index in the Document.text. */
		endIndex?: string | null;

		/** TextSegment start UTF-8 char index in the Document.text. */
		startIndex?: string | null;
	}

	/** A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset */
	export interface GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegmentFormProperties {

		/** TextSegment half open end UTF-8 char index in the Document.text. */
		endIndex: FormControl<string | null | undefined>,

		/** TextSegment start UTF-8 char index in the Document.text. */
		startIndex: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegmentFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegmentFormProperties>({
			endIndex: new FormControl<string | null | undefined>(undefined),
			startIndex: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Relationship between Entities. */
	export interface GoogleCloudDocumentaiV1beta2DocumentEntityRelation {

		/** Object entity id. */
		objectId?: string | null;

		/** Relationship description. */
		relation?: string | null;

		/** Subject entity id. */
		subjectId?: string | null;
	}

	/** Relationship between Entities. */
	export interface GoogleCloudDocumentaiV1beta2DocumentEntityRelationFormProperties {

		/** Object entity id. */
		objectId: FormControl<string | null | undefined>,

		/** Relationship description. */
		relation: FormControl<string | null | undefined>,

		/** Subject entity id. */
		subjectId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentEntityRelationFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentEntityRelationFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
			relation: new FormControl<string | null | undefined>(undefined),
			subjectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Label attaches schema information and/or other metadata to segments within a Document. Multiple Labels on a single field can denote either different labels, different instances of the same label created at different times, or some combination of both. */
	export interface GoogleCloudDocumentaiV1beta2DocumentLabel {

		/** Label is generated AutoML model. This field stores the full resource name of the AutoML model. Format: `projects/{project-id}/locations/{location-id}/models/{model-id}` */
		automlModel?: string | null;

		/** Confidence score between 0 and 1 for label assignment. */
		confidence?: number | null;

		/** Name of the label. When the label is generated from AutoML Text Classification model, this field represents the name of the category. */
		name?: string | null;
	}

	/** Label attaches schema information and/or other metadata to segments within a Document. Multiple Labels on a single field can denote either different labels, different instances of the same label created at different times, or some combination of both. */
	export interface GoogleCloudDocumentaiV1beta2DocumentLabelFormProperties {

		/** Label is generated AutoML model. This field stores the full resource name of the AutoML model. Format: `projects/{project-id}/locations/{location-id}/models/{model-id}` */
		automlModel: FormControl<string | null | undefined>,

		/** Confidence score between 0 and 1 for label assignment. */
		confidence: FormControl<number | null | undefined>,

		/** Name of the label. When the label is generated from AutoML Text Classification model, this field represents the name of the category. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentLabelFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentLabelFormProperties>({
			automlModel: new FormControl<string | null | undefined>(undefined),
			confidence: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A page in a Document. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPage {

		/** A list of visually detected text blocks on the page. A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation. */
		blocks?: Array<GoogleCloudDocumentaiV1beta2DocumentPageBlock>;

		/** A list of detected barcodes. */
		detectedBarcodes?: Array<GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode>;

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage>;

		/** Dimension for the page. */
		dimension?: GoogleCloudDocumentaiV1beta2DocumentPageDimension;

		/** A list of visually detected form fields on the page. */
		formFields?: Array<GoogleCloudDocumentaiV1beta2DocumentPageFormField>;

		/** Rendered image contents for this page. */
		image?: GoogleCloudDocumentaiV1beta2DocumentPageImage;

		/** Image quality scores for the page image. */
		imageQualityScores?: GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores;

		/** Visual element describing a layout unit on a page. */
		layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;

		/** A list of visually detected text lines on the page. A collection of tokens that a human would perceive as a line. */
		lines?: Array<GoogleCloudDocumentaiV1beta2DocumentPageLine>;

		/** 1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing. */
		pageNumber?: number | null;

		/** A list of visually detected text paragraphs on the page. A collection of lines that a human would perceive as a paragraph. */
		paragraphs?: Array<GoogleCloudDocumentaiV1beta2DocumentPageParagraph>;

		/** Structure to identify provenance relationships between annotations in different revisions. */
		provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;

		/** A list of visually detected symbols on the page. */
		symbols?: Array<GoogleCloudDocumentaiV1beta2DocumentPageSymbol>;

		/** A list of visually detected tables on the page. */
		tables?: Array<GoogleCloudDocumentaiV1beta2DocumentPageTable>;

		/** A list of visually detected tokens on the page. */
		tokens?: Array<GoogleCloudDocumentaiV1beta2DocumentPageToken>;

		/** Transformation matrices that were applied to the original document image to produce Page.image. */
		transforms?: Array<GoogleCloudDocumentaiV1beta2DocumentPageMatrix>;

		/** A list of detected non-text visual elements e.g. checkbox, signature etc. on the page. */
		visualElements?: Array<GoogleCloudDocumentaiV1beta2DocumentPageVisualElement>;
	}

	/** A page in a Document. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageFormProperties {

		/** 1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing. */
		pageNumber: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentPageFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentPageFormProperties>({
			pageNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageBlock {

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage>;

		/** Visual element describing a layout unit on a page. */
		layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;

		/** Structure to identify provenance relationships between annotations in different revisions. */
		provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;
	}

	/** A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageBlockFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentPageBlockFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentPageBlockFormProperties>({
		});

	}


	/** Detected language for a structural component. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage {

		/** Confidence of detected language. Range `[0, 1]`. */
		confidence?: number | null;

		/** The [BCP-47 language code](https://www.unicode.org/reports/tr35/#Unicode_locale_identifier), such as `en-US` or `sr-Latn`. */
		languageCode?: string | null;
	}

	/** Detected language for a structural component. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguageFormProperties {

		/** Confidence of detected language. Range `[0, 1]`. */
		confidence: FormControl<number | null | undefined>,

		/** The [BCP-47 language code](https://www.unicode.org/reports/tr35/#Unicode_locale_identifier), such as `en-US` or `sr-Latn`. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguageFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguageFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Visual element describing a layout unit on a page. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageLayout {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudDocumentaiV1beta2BoundingPoly;

		/** Confidence of the current Layout within context of the object this layout is for. e.g. confidence can be for a single token, a table, a visual element, etc. depending on context. Range `[0, 1]`. */
		confidence?: number | null;

		/** Detected orientation for the Layout. */
		orientation?: GoogleCloudDocumentaiV1beta1DocumentPageLayoutOrientation | null;

		/** Text reference indexing into the Document.text. */
		textAnchor?: GoogleCloudDocumentaiV1beta2DocumentTextAnchor;
	}

	/** Visual element describing a layout unit on a page. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageLayoutFormProperties {

		/** Confidence of the current Layout within context of the object this layout is for. e.g. confidence can be for a single token, a table, a visual element, etc. depending on context. Range `[0, 1]`. */
		confidence: FormControl<number | null | undefined>,

		/** Detected orientation for the Layout. */
		orientation: FormControl<GoogleCloudDocumentaiV1beta1DocumentPageLayoutOrientation | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentPageLayoutFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentPageLayoutFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			orientation: new FormControl<GoogleCloudDocumentaiV1beta1DocumentPageLayoutOrientation | null | undefined>(undefined),
		});

	}


	/** A detected barcode. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode {

		/** Encodes the detailed information of a barcode. */
		barcode?: GoogleCloudDocumentaiV1beta2Barcode;

		/** Visual element describing a layout unit on a page. */
		layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;
	}

	/** A detected barcode. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcodeFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcodeFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcodeFormProperties>({
		});

	}


	/** Dimension for the page. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageDimension {

		/** Page height. */
		height?: number | null;

		/** Dimension unit. */
		unit?: string | null;

		/** Page width. */
		width?: number | null;
	}

	/** Dimension for the page. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageDimensionFormProperties {

		/** Page height. */
		height: FormControl<number | null | undefined>,

		/** Dimension unit. */
		unit: FormControl<string | null | undefined>,

		/** Page width. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentPageDimensionFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentPageDimensionFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A form field detected on the page. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageFormField {

		/** Created for Labeling UI to export key text. If corrections were made to the text identified by the `field_name.text_anchor`, this field will contain the correction. */
		correctedKeyText?: string | null;

		/** Created for Labeling UI to export value text. If corrections were made to the text identified by the `field_value.text_anchor`, this field will contain the correction. */
		correctedValueText?: string | null;

		/** Visual element describing a layout unit on a page. */
		fieldName?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;

		/** Visual element describing a layout unit on a page. */
		fieldValue?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;

		/** A list of detected languages for name together with confidence. */
		nameDetectedLanguages?: Array<GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage>;

		/** Structure to identify provenance relationships between annotations in different revisions. */
		provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;

		/** A list of detected languages for value together with confidence. */
		valueDetectedLanguages?: Array<GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage>;

		/** If the value is non-textual, this field represents the type. Current valid values are: - blank (this indicates the `field_value` is normal text) - `unfilled_checkbox` - `filled_checkbox` */
		valueType?: string | null;
	}

	/** A form field detected on the page. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageFormFieldFormProperties {

		/** Created for Labeling UI to export key text. If corrections were made to the text identified by the `field_name.text_anchor`, this field will contain the correction. */
		correctedKeyText: FormControl<string | null | undefined>,

		/** Created for Labeling UI to export value text. If corrections were made to the text identified by the `field_value.text_anchor`, this field will contain the correction. */
		correctedValueText: FormControl<string | null | undefined>,

		/** If the value is non-textual, this field represents the type. Current valid values are: - blank (this indicates the `field_value` is normal text) - `unfilled_checkbox` - `filled_checkbox` */
		valueType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentPageFormFieldFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentPageFormFieldFormProperties>({
			correctedKeyText: new FormControl<string | null | undefined>(undefined),
			correctedValueText: new FormControl<string | null | undefined>(undefined),
			valueType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Rendered image contents for this page. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageImage {

		/** Raw byte content of the image. */
		content?: string | null;

		/** Height of the image in pixels. */
		height?: number | null;

		/** Encoding [media type (MIME type)](https://www.iana.org/assignments/media-types/media-types.xhtml) for the image. */
		mimeType?: string | null;

		/** Width of the image in pixels. */
		width?: number | null;
	}

	/** Rendered image contents for this page. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageImageFormProperties {

		/** Raw byte content of the image. */
		content: FormControl<string | null | undefined>,

		/** Height of the image in pixels. */
		height: FormControl<number | null | undefined>,

		/** Encoding [media type (MIME type)](https://www.iana.org/assignments/media-types/media-types.xhtml) for the image. */
		mimeType: FormControl<string | null | undefined>,

		/** Width of the image in pixels. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentPageImageFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentPageImageFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Image quality scores for the page image. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores {

		/** A list of detected defects. */
		detectedDefects?: Array<GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect>;

		/** The overall quality score. Range `[0, 1]` where `1` is perfect quality. */
		qualityScore?: number | null;
	}

	/** Image quality scores for the page image. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresFormProperties {

		/** The overall quality score. Range `[0, 1]` where `1` is perfect quality. */
		qualityScore: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresFormProperties>({
			qualityScore: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Image Quality Defects */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect {

		/** Confidence of detected defect. Range `[0, 1]` where `1` indicates strong confidence that the defect exists. */
		confidence?: number | null;

		/** Name of the defect type. Supported values are: - `quality/defect_blurry` - `quality/defect_noisy` - `quality/defect_dark` - `quality/defect_faint` - `quality/defect_text_too_small` - `quality/defect_document_cutoff` - `quality/defect_text_cutoff` - `quality/defect_glare` */
		type?: string | null;
	}

	/** Image Quality Defects */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefectFormProperties {

		/** Confidence of detected defect. Range `[0, 1]` where `1` indicates strong confidence that the defect exists. */
		confidence: FormControl<number | null | undefined>,

		/** Name of the defect type. Supported values are: - `quality/defect_blurry` - `quality/defect_noisy` - `quality/defect_dark` - `quality/defect_faint` - `quality/defect_text_too_small` - `quality/defect_document_cutoff` - `quality/defect_text_cutoff` - `quality/defect_glare` */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefectFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefectFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageLine {

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage>;

		/** Visual element describing a layout unit on a page. */
		layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;

		/** Structure to identify provenance relationships between annotations in different revisions. */
		provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;
	}

	/** A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageLineFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentPageLineFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentPageLineFormProperties>({
		});

	}


	/** A collection of lines that a human would perceive as a paragraph. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageParagraph {

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage>;

		/** Visual element describing a layout unit on a page. */
		layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;

		/** Structure to identify provenance relationships between annotations in different revisions. */
		provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;
	}

	/** A collection of lines that a human would perceive as a paragraph. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageParagraphFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentPageParagraphFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentPageParagraphFormProperties>({
		});

	}


	/** A detected symbol. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageSymbol {

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage>;

		/** Visual element describing a layout unit on a page. */
		layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;
	}

	/** A detected symbol. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageSymbolFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentPageSymbolFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentPageSymbolFormProperties>({
		});

	}


	/** A table representation similar to HTML table structure. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageTable {

		/** Body rows of the table. */
		bodyRows?: Array<GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow>;

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage>;

		/** Header rows of the table. */
		headerRows?: Array<GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow>;

		/** Visual element describing a layout unit on a page. */
		layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;

		/** Structure to identify provenance relationships between annotations in different revisions. */
		provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;
	}

	/** A table representation similar to HTML table structure. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageTableFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentPageTableFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentPageTableFormProperties>({
		});

	}


	/** A row of table cells. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow {

		/** Cells that make up this row. */
		cells?: Array<GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell>;
	}

	/** A row of table cells. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageTableTableRowFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentPageTableTableRowFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentPageTableTableRowFormProperties>({
		});

	}


	/** A cell representation inside the table. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell {

		/** How many columns this cell spans. */
		colSpan?: number | null;

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage>;

		/** Visual element describing a layout unit on a page. */
		layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;

		/** How many rows this cell spans. */
		rowSpan?: number | null;
	}

	/** A cell representation inside the table. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageTableTableCellFormProperties {

		/** How many columns this cell spans. */
		colSpan: FormControl<number | null | undefined>,

		/** How many rows this cell spans. */
		rowSpan: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentPageTableTableCellFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentPageTableTableCellFormProperties>({
			colSpan: new FormControl<number | null | undefined>(undefined),
			rowSpan: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A detected token. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageToken {

		/** Detected break at the end of a Token. */
		detectedBreak?: GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak;

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage>;

		/** Visual element describing a layout unit on a page. */
		layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;

		/** Structure to identify provenance relationships between annotations in different revisions. */
		provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;

		/** Font and other text style attributes. */
		styleInfo?: GoogleCloudDocumentaiV1beta2DocumentPageTokenStyleInfo;
	}

	/** A detected token. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageTokenFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentPageTokenFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentPageTokenFormProperties>({
		});

	}


	/** Detected break at the end of a Token. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak {

		/** Detected break type. */
		type?: GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreakType | null;
	}

	/** Detected break at the end of a Token. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreakFormProperties {

		/** Detected break type. */
		type: FormControl<GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreakType | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreakFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreakFormProperties>({
			type: new FormControl<GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreakType | null | undefined>(undefined),
		});

	}


	/** Font and other text style attributes. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageTokenStyleInfo {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		backgroundColor?: GoogleTypeColor;

		/** Whether the text is bold (equivalent to font_weight is at least `700`). */
		bold?: boolean | null;

		/** Font size in points (`1` point is `¹⁄₇₂` inches). */
		fontSize?: number | null;

		/** Name or style of the font. */
		fontType?: string | null;

		/** TrueType weight on a scale `100` (thin) to `1000` (ultra-heavy). Normal is `400`, bold is `700`. */
		fontWeight?: number | null;

		/** Whether the text is handwritten. */
		handwritten?: boolean | null;

		/** Whether the text is italic. */
		italic?: boolean | null;

		/** Letter spacing in points. */
		letterSpacing?: number | null;

		/** Font size in pixels, equal to _unrounded font_size_ * _resolution_ ÷ `72.0`. */
		pixelFontSize?: number | null;

		/** Whether the text is in small caps. */
		smallcaps?: boolean | null;

		/** Whether the text is strikethrough. */
		strikeout?: boolean | null;

		/** Whether the text is a subscript. */
		subscript?: boolean | null;

		/** Whether the text is a superscript. */
		superscript?: boolean | null;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		textColor?: GoogleTypeColor;

		/** Whether the text is underlined. */
		underlined?: boolean | null;
	}

	/** Font and other text style attributes. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageTokenStyleInfoFormProperties {

		/** Whether the text is bold (equivalent to font_weight is at least `700`). */
		bold: FormControl<boolean | null | undefined>,

		/** Font size in points (`1` point is `¹⁄₇₂` inches). */
		fontSize: FormControl<number | null | undefined>,

		/** Name or style of the font. */
		fontType: FormControl<string | null | undefined>,

		/** TrueType weight on a scale `100` (thin) to `1000` (ultra-heavy). Normal is `400`, bold is `700`. */
		fontWeight: FormControl<number | null | undefined>,

		/** Whether the text is handwritten. */
		handwritten: FormControl<boolean | null | undefined>,

		/** Whether the text is italic. */
		italic: FormControl<boolean | null | undefined>,

		/** Letter spacing in points. */
		letterSpacing: FormControl<number | null | undefined>,

		/** Font size in pixels, equal to _unrounded font_size_ * _resolution_ ÷ `72.0`. */
		pixelFontSize: FormControl<number | null | undefined>,

		/** Whether the text is in small caps. */
		smallcaps: FormControl<boolean | null | undefined>,

		/** Whether the text is strikethrough. */
		strikeout: FormControl<boolean | null | undefined>,

		/** Whether the text is a subscript. */
		subscript: FormControl<boolean | null | undefined>,

		/** Whether the text is a superscript. */
		superscript: FormControl<boolean | null | undefined>,

		/** Whether the text is underlined. */
		underlined: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentPageTokenStyleInfoFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentPageTokenStyleInfoFormProperties>({
			bold: new FormControl<boolean | null | undefined>(undefined),
			fontSize: new FormControl<number | null | undefined>(undefined),
			fontType: new FormControl<string | null | undefined>(undefined),
			fontWeight: new FormControl<number | null | undefined>(undefined),
			handwritten: new FormControl<boolean | null | undefined>(undefined),
			italic: new FormControl<boolean | null | undefined>(undefined),
			letterSpacing: new FormControl<number | null | undefined>(undefined),
			pixelFontSize: new FormControl<number | null | undefined>(undefined),
			smallcaps: new FormControl<boolean | null | undefined>(undefined),
			strikeout: new FormControl<boolean | null | undefined>(undefined),
			subscript: new FormControl<boolean | null | undefined>(undefined),
			superscript: new FormControl<boolean | null | undefined>(undefined),
			underlined: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageMatrix {

		/** Number of columns in the matrix. */
		cols?: number | null;

		/** The matrix data. */
		data?: string | null;

		/** Number of rows in the matrix. */
		rows?: number | null;

		/** This encodes information about what data type the matrix uses. For example, 0 (CV_8U) is an unsigned 8-bit image. For the full list of OpenCV primitive data types, please refer to https://docs.opencv.org/4.3.0/d1/d1b/group__core__hal__interface.html */
		type?: number | null;
	}

	/** Representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageMatrixFormProperties {

		/** Number of columns in the matrix. */
		cols: FormControl<number | null | undefined>,

		/** The matrix data. */
		data: FormControl<string | null | undefined>,

		/** Number of rows in the matrix. */
		rows: FormControl<number | null | undefined>,

		/** This encodes information about what data type the matrix uses. For example, 0 (CV_8U) is an unsigned 8-bit image. For the full list of OpenCV primitive data types, please refer to https://docs.opencv.org/4.3.0/d1/d1b/group__core__hal__interface.html */
		type: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentPageMatrixFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentPageMatrixFormProperties>({
			cols: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			rows: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Detected non-text visual elements e.g. checkbox, signature etc. on the page. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageVisualElement {

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage>;

		/** Visual element describing a layout unit on a page. */
		layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;

		/** Type of the VisualElement. */
		type?: string | null;
	}

	/** Detected non-text visual elements e.g. checkbox, signature etc. on the page. */
	export interface GoogleCloudDocumentaiV1beta2DocumentPageVisualElementFormProperties {

		/** Type of the VisualElement. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentPageVisualElementFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentPageVisualElementFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains past or forward revisions of this document. */
	export interface GoogleCloudDocumentaiV1beta2DocumentRevision {

		/** If the change was made by a person specify the name or id of that person. */
		agent?: string | null;

		/** The time that the revision was created, internally generated by doc proto storage at the time of create. */
		createTime?: string | null;

		/** Human Review information of the document. */
		humanReview?: GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReview;

		/** Id of the revision, internally generated by doc proto storage. Unique within the context of the document. */
		id?: string | null;

		/** The revisions that this revision is based on. This can include one or more parent (when documents are merged.) This field represents the index into the `revisions` field. */
		parent?: Array<number>;

		/** The revisions that this revision is based on. Must include all the ids that have anything to do with this revision - eg. there are `provenance.parent.revision` fields that index into this field. */
		parentIds?: Array<string>;

		/** If the annotation was made by processor identify the processor by its resource name. */
		processor?: string | null;
	}

	/** Contains past or forward revisions of this document. */
	export interface GoogleCloudDocumentaiV1beta2DocumentRevisionFormProperties {

		/** If the change was made by a person specify the name or id of that person. */
		agent: FormControl<string | null | undefined>,

		/** The time that the revision was created, internally generated by doc proto storage at the time of create. */
		createTime: FormControl<string | null | undefined>,

		/** Id of the revision, internally generated by doc proto storage. Unique within the context of the document. */
		id: FormControl<string | null | undefined>,

		/** If the annotation was made by processor identify the processor by its resource name. */
		processor: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentRevisionFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentRevisionFormProperties>({
			agent: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			processor: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Human Review information of the document. */
	export interface GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReview {

		/** Human review state. e.g. `requested`, `succeeded`, `rejected`. */
		state?: string | null;

		/** A message providing more details about the current state of processing. For example, the rejection reason when the state is `rejected`. */
		stateMessage?: string | null;
	}

	/** Human Review information of the document. */
	export interface GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReviewFormProperties {

		/** Human review state. e.g. `requested`, `succeeded`, `rejected`. */
		state: FormControl<string | null | undefined>,

		/** A message providing more details about the current state of processing. For example, the rejection reason when the state is `rejected`. */
		stateMessage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentRevisionHumanReviewFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReviewFormProperties>({
			state: new FormControl<string | null | undefined>(undefined),
			stateMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is. */
	export interface GoogleCloudDocumentaiV1beta2DocumentShardInfo {

		/** Total number of shards. */
		shardCount?: string | null;

		/** The 0-based index of this shard. */
		shardIndex?: string | null;

		/** The index of the first character in Document.text in the overall document global text. */
		textOffset?: string | null;
	}

	/** For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is. */
	export interface GoogleCloudDocumentaiV1beta2DocumentShardInfoFormProperties {

		/** Total number of shards. */
		shardCount: FormControl<string | null | undefined>,

		/** The 0-based index of this shard. */
		shardIndex: FormControl<string | null | undefined>,

		/** The index of the first character in Document.text in the overall document global text. */
		textOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentShardInfoFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentShardInfoFormProperties>({
			shardCount: new FormControl<string | null | undefined>(undefined),
			shardIndex: new FormControl<string | null | undefined>(undefined),
			textOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This message is used for text changes aka. OCR corrections. */
	export interface GoogleCloudDocumentaiV1beta2DocumentTextChange {

		/** The text that replaces the text identified in the `text_anchor`. */
		changedText?: string | null;

		/** The history of this annotation. */
		provenance?: Array<GoogleCloudDocumentaiV1beta2DocumentProvenance>;

		/** Text reference indexing into the Document.text. */
		textAnchor?: GoogleCloudDocumentaiV1beta2DocumentTextAnchor;
	}

	/** This message is used for text changes aka. OCR corrections. */
	export interface GoogleCloudDocumentaiV1beta2DocumentTextChangeFormProperties {

		/** The text that replaces the text identified in the `text_anchor`. */
		changedText: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentTextChangeFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentTextChangeFormProperties>({
			changedText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Annotation for common text style attributes. This adheres to CSS conventions as much as possible. */
	export interface GoogleCloudDocumentaiV1beta2DocumentStyle {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		backgroundColor?: GoogleTypeColor;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		color?: GoogleTypeColor;

		/** Font family such as `Arial`, `Times New Roman`. https://www.w3schools.com/cssref/pr_font_font-family.asp */
		fontFamily?: string | null;

		/** Font size with unit. */
		fontSize?: GoogleCloudDocumentaiV1beta2DocumentStyleFontSize;

		/** [Font weight](https://www.w3schools.com/cssref/pr_font_weight.asp). Possible values are `normal`, `bold`, `bolder`, and `lighter`. */
		fontWeight?: string | null;

		/** Text reference indexing into the Document.text. */
		textAnchor?: GoogleCloudDocumentaiV1beta2DocumentTextAnchor;

		/** [Text decoration](https://www.w3schools.com/cssref/pr_text_text-decoration.asp). Follows CSS standard. */
		textDecoration?: string | null;

		/** [Text style](https://www.w3schools.com/cssref/pr_font_font-style.asp). Possible values are `normal`, `italic`, and `oblique`. */
		textStyle?: string | null;
	}

	/** Annotation for common text style attributes. This adheres to CSS conventions as much as possible. */
	export interface GoogleCloudDocumentaiV1beta2DocumentStyleFormProperties {

		/** Font family such as `Arial`, `Times New Roman`. https://www.w3schools.com/cssref/pr_font_font-family.asp */
		fontFamily: FormControl<string | null | undefined>,

		/** [Font weight](https://www.w3schools.com/cssref/pr_font_weight.asp). Possible values are `normal`, `bold`, `bolder`, and `lighter`. */
		fontWeight: FormControl<string | null | undefined>,

		/** [Text decoration](https://www.w3schools.com/cssref/pr_text_text-decoration.asp). Follows CSS standard. */
		textDecoration: FormControl<string | null | undefined>,

		/** [Text style](https://www.w3schools.com/cssref/pr_font_font-style.asp). Possible values are `normal`, `italic`, and `oblique`. */
		textStyle: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentStyleFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentStyleFormProperties>({
			fontFamily: new FormControl<string | null | undefined>(undefined),
			fontWeight: new FormControl<string | null | undefined>(undefined),
			textDecoration: new FormControl<string | null | undefined>(undefined),
			textStyle: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Font size with unit. */
	export interface GoogleCloudDocumentaiV1beta2DocumentStyleFontSize {

		/** Font size for the text. */
		size?: number | null;

		/** Unit for the font size. Follows CSS naming (such as `in`, `px`, and `pt`). */
		unit?: string | null;
	}

	/** Font size with unit. */
	export interface GoogleCloudDocumentaiV1beta2DocumentStyleFontSizeFormProperties {

		/** Font size for the text. */
		size: FormControl<number | null | undefined>,

		/** Unit for the font size. Follows CSS naming (such as `in`, `px`, and `pt`). */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2DocumentStyleFontSizeFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2DocumentStyleFontSizeFormProperties>({
			size: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains metadata for the BatchProcessDocuments operation. */
	export interface GoogleCloudDocumentaiV1beta2OperationMetadata {

		/** The creation time of the operation. */
		createTime?: string | null;

		/** The state of the current batch processing. */
		state?: GoogleCloudDocumentaiV1beta1OperationMetadataState | null;

		/** A message providing more details about the current state of processing. */
		stateMessage?: string | null;

		/** The last update time of the operation. */
		updateTime?: string | null;
	}

	/** Contains metadata for the BatchProcessDocuments operation. */
	export interface GoogleCloudDocumentaiV1beta2OperationMetadataFormProperties {

		/** The creation time of the operation. */
		createTime: FormControl<string | null | undefined>,

		/** The state of the current batch processing. */
		state: FormControl<GoogleCloudDocumentaiV1beta1OperationMetadataState | null | undefined>,

		/** A message providing more details about the current state of processing. */
		stateMessage: FormControl<string | null | undefined>,

		/** The last update time of the operation. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta2OperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta2OperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDocumentaiV1beta1OperationMetadataState | null | undefined>(undefined),
			stateMessage: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudDocumentaiV1beta3BatchDeleteDocumentsMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1beta3CommonOperationMetadata;

		/** Total number of documents that failed to be deleted in storage. */
		errorDocumentCount?: number | null;

		/** The list of response details of each document. */
		individualBatchDeleteStatuses?: Array<GoogleCloudDocumentaiV1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatus>;

		/** Total number of documents deleting from dataset. */
		totalDocumentCount?: number | null;
	}
	export interface GoogleCloudDocumentaiV1beta3BatchDeleteDocumentsMetadataFormProperties {

		/** Total number of documents that failed to be deleted in storage. */
		errorDocumentCount: FormControl<number | null | undefined>,

		/** Total number of documents deleting from dataset. */
		totalDocumentCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta3BatchDeleteDocumentsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3BatchDeleteDocumentsMetadataFormProperties>({
			errorDocumentCount: new FormControl<number | null | undefined>(undefined),
			totalDocumentCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The common metadata for long running operations. */
	export interface GoogleCloudDocumentaiV1beta3CommonOperationMetadata {

		/** The creation time of the operation. */
		createTime?: string | null;

		/** A related resource to this operation. */
		resource?: string | null;

		/** The state of the operation. */
		state?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataState | null;

		/** A message providing more details about the current state of processing. */
		stateMessage?: string | null;

		/** The last update time of the operation. */
		updateTime?: string | null;
	}

	/** The common metadata for long running operations. */
	export interface GoogleCloudDocumentaiV1beta3CommonOperationMetadataFormProperties {

		/** The creation time of the operation. */
		createTime: FormControl<string | null | undefined>,

		/** A related resource to this operation. */
		resource: FormControl<string | null | undefined>,

		/** The state of the operation. */
		state: FormControl<GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataState | null | undefined>,

		/** A message providing more details about the current state of processing. */
		stateMessage: FormControl<string | null | undefined>,

		/** The last update time of the operation. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta3CommonOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3CommonOperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataState | null | undefined>(undefined),
			stateMessage: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of each individual document in the batch delete process. */
	export interface GoogleCloudDocumentaiV1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatus {

		/** Document Identifier. */
		documentId?: GoogleCloudDocumentaiV1beta3DocumentId;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;
	}

	/** The status of each individual document in the batch delete process. */
	export interface GoogleCloudDocumentaiV1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatusFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatusFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatusFormProperties>({
		});

	}


	/** Document Identifier. */
	export interface GoogleCloudDocumentaiV1beta3DocumentId {

		/** Identifies a document uniquely within the scope of a dataset in the user-managed Cloud Storage option. */
		gcsManagedDocId?: GoogleCloudDocumentaiV1beta3DocumentIdGCSManagedDocumentId;

		/** The revision reference specifies which revision on the document to read. */
		revisionRef?: GoogleCloudDocumentaiV1beta3RevisionRef;

		/** Identifies a document uniquely within the scope of a dataset in unmanaged option. */
		unmanagedDocId?: GoogleCloudDocumentaiV1beta3DocumentIdUnmanagedDocumentId;
	}

	/** Document Identifier. */
	export interface GoogleCloudDocumentaiV1beta3DocumentIdFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3DocumentIdFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3DocumentIdFormProperties>({
		});

	}


	/** Identifies a document uniquely within the scope of a dataset in the user-managed Cloud Storage option. */
	export interface GoogleCloudDocumentaiV1beta3DocumentIdGCSManagedDocumentId {

		/** Id of the document (indexed) managed by Content Warehouse. */
		cwDocId?: string | null;

		/** Required. The Cloud Storage URI where the actual document is stored. */
		gcsUri?: string | null;
	}

	/** Identifies a document uniquely within the scope of a dataset in the user-managed Cloud Storage option. */
	export interface GoogleCloudDocumentaiV1beta3DocumentIdGCSManagedDocumentIdFormProperties {

		/** Id of the document (indexed) managed by Content Warehouse. */
		cwDocId: FormControl<string | null | undefined>,

		/** Required. The Cloud Storage URI where the actual document is stored. */
		gcsUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta3DocumentIdGCSManagedDocumentIdFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3DocumentIdGCSManagedDocumentIdFormProperties>({
			cwDocId: new FormControl<string | null | undefined>(undefined),
			gcsUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The revision reference specifies which revision on the document to read. */
	export interface GoogleCloudDocumentaiV1beta3RevisionRef {

		/** Reads the revision generated by the processor version. The format takes the full resource name of processor version. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}` */
		latestProcessorVersion?: string | null;

		/** Reads the revision by the predefined case. */
		revisionCase?: GoogleCloudDocumentaiUiv1beta3RevisionRefRevisionCase | null;

		/** Reads the revision given by the id. */
		revisionId?: string | null;
	}

	/** The revision reference specifies which revision on the document to read. */
	export interface GoogleCloudDocumentaiV1beta3RevisionRefFormProperties {

		/** Reads the revision generated by the processor version. The format takes the full resource name of processor version. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}` */
		latestProcessorVersion: FormControl<string | null | undefined>,

		/** Reads the revision by the predefined case. */
		revisionCase: FormControl<GoogleCloudDocumentaiUiv1beta3RevisionRefRevisionCase | null | undefined>,

		/** Reads the revision given by the id. */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta3RevisionRefFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3RevisionRefFormProperties>({
			latestProcessorVersion: new FormControl<string | null | undefined>(undefined),
			revisionCase: new FormControl<GoogleCloudDocumentaiUiv1beta3RevisionRefRevisionCase | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies a document uniquely within the scope of a dataset in unmanaged option. */
	export interface GoogleCloudDocumentaiV1beta3DocumentIdUnmanagedDocumentId {

		/** Required. The id of the document. */
		docId?: string | null;
	}

	/** Identifies a document uniquely within the scope of a dataset in unmanaged option. */
	export interface GoogleCloudDocumentaiV1beta3DocumentIdUnmanagedDocumentIdFormProperties {

		/** Required. The id of the document. */
		docId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta3DocumentIdUnmanagedDocumentIdFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3DocumentIdUnmanagedDocumentIdFormProperties>({
			docId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the delete documents operation. */
	export interface GoogleCloudDocumentaiV1beta3BatchDeleteDocumentsResponse {
	}

	/** Response of the delete documents operation. */
	export interface GoogleCloudDocumentaiV1beta3BatchDeleteDocumentsResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3BatchDeleteDocumentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3BatchDeleteDocumentsResponseFormProperties>({
		});

	}


	/** The long-running operation metadata for BatchProcessDocuments. */
	export interface GoogleCloudDocumentaiV1beta3BatchProcessMetadata {

		/** The creation time of the operation. */
		createTime?: string | null;

		/** The list of response details of each document. */
		individualProcessStatuses?: Array<GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatus>;

		/** The state of the current batch processing. */
		state?: GoogleCloudDocumentaiV1BatchProcessMetadataState | null;

		/** A message providing more details about the current state of processing. For example, the error message if the operation is failed. */
		stateMessage?: string | null;

		/** The last update time of the operation. */
		updateTime?: string | null;
	}

	/** The long-running operation metadata for BatchProcessDocuments. */
	export interface GoogleCloudDocumentaiV1beta3BatchProcessMetadataFormProperties {

		/** The creation time of the operation. */
		createTime: FormControl<string | null | undefined>,

		/** The state of the current batch processing. */
		state: FormControl<GoogleCloudDocumentaiV1BatchProcessMetadataState | null | undefined>,

		/** A message providing more details about the current state of processing. For example, the error message if the operation is failed. */
		stateMessage: FormControl<string | null | undefined>,

		/** The last update time of the operation. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta3BatchProcessMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3BatchProcessMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDocumentaiV1BatchProcessMetadataState | null | undefined>(undefined),
			stateMessage: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of a each individual document in the batch process. */
	export interface GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatus {

		/** The name of the operation triggered by the processed document. If the human review process isn't triggered, this field will be empty. It has the same response type and metadata as the long-running operation returned by the ReviewDocument method. */
		humanReviewOperation?: string | null;

		/** The status of human review on a processed document. */
		humanReviewStatus?: GoogleCloudDocumentaiV1beta3HumanReviewStatus;

		/** The source of the document, same as the input_gcs_source field in the request when the batch process started. */
		inputGcsSource?: string | null;

		/** The Cloud Storage output destination (in the request as DocumentOutputConfig.GcsOutputConfig.gcs_uri) of the processed document if it was successful, otherwise empty. */
		outputGcsDestination?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;
	}

	/** The status of a each individual document in the batch process. */
	export interface GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatusFormProperties {

		/** The name of the operation triggered by the processed document. If the human review process isn't triggered, this field will be empty. It has the same response type and metadata as the long-running operation returned by the ReviewDocument method. */
		humanReviewOperation: FormControl<string | null | undefined>,

		/** The source of the document, same as the input_gcs_source field in the request when the batch process started. */
		inputGcsSource: FormControl<string | null | undefined>,

		/** The Cloud Storage output destination (in the request as DocumentOutputConfig.GcsOutputConfig.gcs_uri) of the processed document if it was successful, otherwise empty. */
		outputGcsDestination: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatusFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatusFormProperties>({
			humanReviewOperation: new FormControl<string | null | undefined>(undefined),
			inputGcsSource: new FormControl<string | null | undefined>(undefined),
			outputGcsDestination: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of human review on a processed document. */
	export interface GoogleCloudDocumentaiV1beta3HumanReviewStatus {

		/** The name of the operation triggered by the processed document. This field is populated only when the state is `HUMAN_REVIEW_IN_PROGRESS`. It has the same response type and metadata as the long-running operation returned by ReviewDocument. */
		humanReviewOperation?: string | null;

		/** The state of human review on the processing request. */
		state?: GoogleCloudDocumentaiV1HumanReviewStatusState | null;

		/** A message providing more details about the human review state. */
		stateMessage?: string | null;
	}

	/** The status of human review on a processed document. */
	export interface GoogleCloudDocumentaiV1beta3HumanReviewStatusFormProperties {

		/** The name of the operation triggered by the processed document. This field is populated only when the state is `HUMAN_REVIEW_IN_PROGRESS`. It has the same response type and metadata as the long-running operation returned by ReviewDocument. */
		humanReviewOperation: FormControl<string | null | undefined>,

		/** The state of human review on the processing request. */
		state: FormControl<GoogleCloudDocumentaiV1HumanReviewStatusState | null | undefined>,

		/** A message providing more details about the human review state. */
		stateMessage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta3HumanReviewStatusFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3HumanReviewStatusFormProperties>({
			humanReviewOperation: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDocumentaiV1HumanReviewStatusState | null | undefined>(undefined),
			stateMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for BatchProcessDocuments. */
	export interface GoogleCloudDocumentaiV1beta3BatchProcessResponse {
	}

	/** Response message for BatchProcessDocuments. */
	export interface GoogleCloudDocumentaiV1beta3BatchProcessResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3BatchProcessResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3BatchProcessResponseFormProperties>({
		});

	}


	/** A singleton resource under a Processor which configures a collection of documents. */
	export interface GoogleCloudDocumentaiV1beta3Dataset {

		/** Configuration specific to the Document AI Warehouse-based implementation. */
		documentWarehouseConfig?: GoogleCloudDocumentaiV1beta3DatasetDocumentWarehouseConfig;

		/** Configuration specific to the Cloud Storage-based implementation. */
		gcsManagedConfig?: GoogleCloudDocumentaiV1beta3DatasetGCSManagedConfig;

		/** Dataset resource name. Format: `projects/{project}/locations/{location}/processors/{processor}/dataset` */
		name?: string | null;

		/** Configuration specific to spanner-based indexing. */
		spannerIndexingConfig?: GoogleCloudDocumentaiV1beta3DatasetSpannerIndexingConfig;

		/** Required. State of the dataset. Ignored when updating dataset. */
		state?: GoogleCloudDocumentaiV1beta3DatasetState | null;

		/** Configuration specific to an unmanaged dataset. */
		unmanagedDatasetConfig?: GoogleCloudDocumentaiV1beta3DatasetUnmanagedDatasetConfig;
	}

	/** A singleton resource under a Processor which configures a collection of documents. */
	export interface GoogleCloudDocumentaiV1beta3DatasetFormProperties {

		/** Dataset resource name. Format: `projects/{project}/locations/{location}/processors/{processor}/dataset` */
		name: FormControl<string | null | undefined>,

		/** Required. State of the dataset. Ignored when updating dataset. */
		state: FormControl<GoogleCloudDocumentaiV1beta3DatasetState | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta3DatasetFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3DatasetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDocumentaiV1beta3DatasetState | null | undefined>(undefined),
		});

	}


	/** Configuration specific to the Document AI Warehouse-based implementation. */
	export interface GoogleCloudDocumentaiV1beta3DatasetDocumentWarehouseConfig {

		/** Output only. The collection in Document AI Warehouse associated with the dataset. */
		collection?: string | null;

		/** Output only. The schema in Document AI Warehouse associated with the dataset. */
		schema?: string | null;
	}

	/** Configuration specific to the Document AI Warehouse-based implementation. */
	export interface GoogleCloudDocumentaiV1beta3DatasetDocumentWarehouseConfigFormProperties {

		/** Output only. The collection in Document AI Warehouse associated with the dataset. */
		collection: FormControl<string | null | undefined>,

		/** Output only. The schema in Document AI Warehouse associated with the dataset. */
		schema: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta3DatasetDocumentWarehouseConfigFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3DatasetDocumentWarehouseConfigFormProperties>({
			collection: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration specific to the Cloud Storage-based implementation. */
	export interface GoogleCloudDocumentaiV1beta3DatasetGCSManagedConfig {

		/** Specifies all documents on Cloud Storage with a common prefix. */
		gcsPrefix?: GoogleCloudDocumentaiV1beta3GcsPrefix;
	}

	/** Configuration specific to the Cloud Storage-based implementation. */
	export interface GoogleCloudDocumentaiV1beta3DatasetGCSManagedConfigFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3DatasetGCSManagedConfigFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3DatasetGCSManagedConfigFormProperties>({
		});

	}


	/** Specifies all documents on Cloud Storage with a common prefix. */
	export interface GoogleCloudDocumentaiV1beta3GcsPrefix {

		/** The URI prefix. */
		gcsUriPrefix?: string | null;
	}

	/** Specifies all documents on Cloud Storage with a common prefix. */
	export interface GoogleCloudDocumentaiV1beta3GcsPrefixFormProperties {

		/** The URI prefix. */
		gcsUriPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta3GcsPrefixFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3GcsPrefixFormProperties>({
			gcsUriPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration specific to spanner-based indexing. */
	export interface GoogleCloudDocumentaiV1beta3DatasetSpannerIndexingConfig {
	}

	/** Configuration specific to spanner-based indexing. */
	export interface GoogleCloudDocumentaiV1beta3DatasetSpannerIndexingConfigFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3DatasetSpannerIndexingConfigFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3DatasetSpannerIndexingConfigFormProperties>({
		});

	}

	export enum GoogleCloudDocumentaiV1beta3DatasetState { STATE_UNSPECIFIED = 0, UNINITIALIZED = 1, INITIALIZING = 2, INITIALIZED = 3 }


	/** Configuration specific to an unmanaged dataset. */
	export interface GoogleCloudDocumentaiV1beta3DatasetUnmanagedDatasetConfig {
	}

	/** Configuration specific to an unmanaged dataset. */
	export interface GoogleCloudDocumentaiV1beta3DatasetUnmanagedDatasetConfigFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3DatasetUnmanagedDatasetConfigFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3DatasetUnmanagedDatasetConfigFormProperties>({
		});

	}


	/** The long-running operation metadata for the DeleteProcessor method. */
	export interface GoogleCloudDocumentaiV1beta3DeleteProcessorMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
	}

	/** The long-running operation metadata for the DeleteProcessor method. */
	export interface GoogleCloudDocumentaiV1beta3DeleteProcessorMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3DeleteProcessorMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3DeleteProcessorMetadataFormProperties>({
		});

	}


	/** The long-running operation metadata for the DeleteProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1beta3DeleteProcessorVersionMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
	}

	/** The long-running operation metadata for the DeleteProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1beta3DeleteProcessorVersionMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3DeleteProcessorVersionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3DeleteProcessorVersionMetadataFormProperties>({
		});

	}


	/** The long-running operation metadata for the DeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1beta3DeployProcessorVersionMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
	}

	/** The long-running operation metadata for the DeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1beta3DeployProcessorVersionMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3DeployProcessorVersionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3DeployProcessorVersionMetadataFormProperties>({
		});

	}


	/** Response message for the DeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1beta3DeployProcessorVersionResponse {
	}

	/** Response message for the DeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1beta3DeployProcessorVersionResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3DeployProcessorVersionResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3DeployProcessorVersionResponseFormProperties>({
		});

	}


	/** The long-running operation metadata for the DisableProcessor method. */
	export interface GoogleCloudDocumentaiV1beta3DisableProcessorMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
	}

	/** The long-running operation metadata for the DisableProcessor method. */
	export interface GoogleCloudDocumentaiV1beta3DisableProcessorMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3DisableProcessorMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3DisableProcessorMetadataFormProperties>({
		});

	}


	/** Response message for the DisableProcessor method. Intentionally empty proto for adding fields in future. */
	export interface GoogleCloudDocumentaiV1beta3DisableProcessorResponse {
	}

	/** Response message for the DisableProcessor method. Intentionally empty proto for adding fields in future. */
	export interface GoogleCloudDocumentaiV1beta3DisableProcessorResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3DisableProcessorResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3DisableProcessorResponseFormProperties>({
		});

	}


	/** The long-running operation metadata for the EnableProcessor method. */
	export interface GoogleCloudDocumentaiV1beta3EnableProcessorMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
	}

	/** The long-running operation metadata for the EnableProcessor method. */
	export interface GoogleCloudDocumentaiV1beta3EnableProcessorMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3EnableProcessorMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3EnableProcessorMetadataFormProperties>({
		});

	}


	/** Response message for the EnableProcessor method. Intentionally empty proto for adding fields in future. */
	export interface GoogleCloudDocumentaiV1beta3EnableProcessorResponse {
	}

	/** Response message for the EnableProcessor method. Intentionally empty proto for adding fields in future. */
	export interface GoogleCloudDocumentaiV1beta3EnableProcessorResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3EnableProcessorResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3EnableProcessorResponseFormProperties>({
		});

	}


	/** Metadata of the EvaluateProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
	}

	/** Metadata of the EvaluateProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3EvaluateProcessorVersionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionMetadataFormProperties>({
		});

	}


	/** Response of the EvaluateProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionResponse {

		/** The resource name of the created evaluation. */
		evaluation?: string | null;
	}

	/** Response of the EvaluateProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionResponseFormProperties {

		/** The resource name of the created evaluation. */
		evaluation: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta3EvaluateProcessorVersionResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionResponseFormProperties>({
			evaluation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata of the import document operation. */
	export interface GoogleCloudDocumentaiV1beta3ImportDocumentsMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1beta3CommonOperationMetadata;

		/** Validation statuses of the batch documents import config. */
		importConfigValidationResults?: Array<GoogleCloudDocumentaiV1beta3ImportDocumentsMetadataImportConfigValidationResult>;

		/** The list of response details of each document. */
		individualImportStatuses?: Array<GoogleCloudDocumentaiV1beta3ImportDocumentsMetadataIndividualImportStatus>;

		/** Total number of the documents that are qualified for importing. */
		totalDocumentCount?: number | null;
	}

	/** Metadata of the import document operation. */
	export interface GoogleCloudDocumentaiV1beta3ImportDocumentsMetadataFormProperties {

		/** Total number of the documents that are qualified for importing. */
		totalDocumentCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta3ImportDocumentsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3ImportDocumentsMetadataFormProperties>({
			totalDocumentCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The validation status of each import config. Status is set to an error if there are no documents to import in the `import_config`, or `OK` if the operation will try to proceed with at least one document. */
	export interface GoogleCloudDocumentaiV1beta3ImportDocumentsMetadataImportConfigValidationResult {

		/** The source Cloud Storage URI specified in the import config. */
		inputGcsSource?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;
	}

	/** The validation status of each import config. Status is set to an error if there are no documents to import in the `import_config`, or `OK` if the operation will try to proceed with at least one document. */
	export interface GoogleCloudDocumentaiV1beta3ImportDocumentsMetadataImportConfigValidationResultFormProperties {

		/** The source Cloud Storage URI specified in the import config. */
		inputGcsSource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta3ImportDocumentsMetadataImportConfigValidationResultFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3ImportDocumentsMetadataImportConfigValidationResultFormProperties>({
			inputGcsSource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of each individual document in the import process. */
	export interface GoogleCloudDocumentaiV1beta3ImportDocumentsMetadataIndividualImportStatus {

		/** The source Cloud Storage URI of the document. */
		inputGcsSource?: string | null;

		/** Document Identifier. */
		outputDocumentId?: GoogleCloudDocumentaiV1beta3DocumentId;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;
	}

	/** The status of each individual document in the import process. */
	export interface GoogleCloudDocumentaiV1beta3ImportDocumentsMetadataIndividualImportStatusFormProperties {

		/** The source Cloud Storage URI of the document. */
		inputGcsSource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta3ImportDocumentsMetadataIndividualImportStatusFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3ImportDocumentsMetadataIndividualImportStatusFormProperties>({
			inputGcsSource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the import document operation. */
	export interface GoogleCloudDocumentaiV1beta3ImportDocumentsResponse {
	}

	/** Response of the import document operation. */
	export interface GoogleCloudDocumentaiV1beta3ImportDocumentsResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3ImportDocumentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3ImportDocumentsResponseFormProperties>({
		});

	}


	/** The long-running operation metadata for the ImportProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1beta3ImportProcessorVersionMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
	}

	/** The long-running operation metadata for the ImportProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1beta3ImportProcessorVersionMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3ImportProcessorVersionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3ImportProcessorVersionMetadataFormProperties>({
		});

	}


	/** The response message for the ImportProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1beta3ImportProcessorVersionResponse {

		/** The destination processor version name. */
		processorVersion?: string | null;
	}

	/** The response message for the ImportProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1beta3ImportProcessorVersionResponseFormProperties {

		/** The destination processor version name. */
		processorVersion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta3ImportProcessorVersionResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3ImportProcessorVersionResponseFormProperties>({
			processorVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The long-running operation metadata for the ReviewDocument method. */
	export interface GoogleCloudDocumentaiV1beta3ReviewDocumentOperationMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1beta3CommonOperationMetadata;

		/** The creation time of the operation. */
		createTime?: string | null;

		/** The Crowd Compute question ID. */
		questionId?: string | null;

		/** Used only when Operation.done is false. */
		state?: GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataState | null;

		/** A message providing more details about the current state of processing. For example, the error message if the operation is failed. */
		stateMessage?: string | null;

		/** The last update time of the operation. */
		updateTime?: string | null;
	}

	/** The long-running operation metadata for the ReviewDocument method. */
	export interface GoogleCloudDocumentaiV1beta3ReviewDocumentOperationMetadataFormProperties {

		/** The creation time of the operation. */
		createTime: FormControl<string | null | undefined>,

		/** The Crowd Compute question ID. */
		questionId: FormControl<string | null | undefined>,

		/** Used only when Operation.done is false. */
		state: FormControl<GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataState | null | undefined>,

		/** A message providing more details about the current state of processing. For example, the error message if the operation is failed. */
		stateMessage: FormControl<string | null | undefined>,

		/** The last update time of the operation. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta3ReviewDocumentOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3ReviewDocumentOperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			questionId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataState | null | undefined>(undefined),
			stateMessage: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the ReviewDocument method. */
	export interface GoogleCloudDocumentaiV1beta3ReviewDocumentResponse {

		/** The Cloud Storage uri for the human reviewed document if the review is succeeded. */
		gcsDestination?: string | null;

		/** The reason why the review is rejected by reviewer. */
		rejectionReason?: string | null;

		/** The state of the review operation. */
		state?: GoogleCloudDocumentaiV1ReviewDocumentResponseState | null;
	}

	/** Response message for the ReviewDocument method. */
	export interface GoogleCloudDocumentaiV1beta3ReviewDocumentResponseFormProperties {

		/** The Cloud Storage uri for the human reviewed document if the review is succeeded. */
		gcsDestination: FormControl<string | null | undefined>,

		/** The reason why the review is rejected by reviewer. */
		rejectionReason: FormControl<string | null | undefined>,

		/** The state of the review operation. */
		state: FormControl<GoogleCloudDocumentaiV1ReviewDocumentResponseState | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta3ReviewDocumentResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3ReviewDocumentResponseFormProperties>({
			gcsDestination: new FormControl<string | null | undefined>(undefined),
			rejectionReason: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDocumentaiV1ReviewDocumentResponseState | null | undefined>(undefined),
		});

	}


	/** The long-running operation metadata for the SetDefaultProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
	}

	/** The long-running operation metadata for the SetDefaultProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionMetadataFormProperties>({
		});

	}


	/** Response message for the SetDefaultProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionResponse {
	}

	/** Response message for the SetDefaultProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionResponseFormProperties>({
		});

	}


	/** The metadata that represents a processor version being created. */
	export interface GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1beta3CommonOperationMetadata;

		/** The dataset validation information. This includes any and all errors with documents and the dataset. */
		testDatasetValidation?: GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidation;

		/** The dataset validation information. This includes any and all errors with documents and the dataset. */
		trainingDatasetValidation?: GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidation;
	}

	/** The metadata that represents a processor version being created. */
	export interface GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataFormProperties>({
		});

	}


	/** The dataset validation information. This includes any and all errors with documents and the dataset. */
	export interface GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidation {

		/** The total number of dataset errors. */
		datasetErrorCount?: number | null;

		/** Error information for the dataset as a whole. A maximum of 10 dataset errors will be returned. A single dataset error is terminal for training. */
		datasetErrors?: Array<GoogleRpcStatus>;

		/** The total number of document errors. */
		documentErrorCount?: number | null;

		/** Error information pertaining to specific documents. A maximum of 10 document errors will be returned. Any document with errors will not be used throughout training. */
		documentErrors?: Array<GoogleRpcStatus>;
	}

	/** The dataset validation information. This includes any and all errors with documents and the dataset. */
	export interface GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidationFormProperties {

		/** The total number of dataset errors. */
		datasetErrorCount: FormControl<number | null | undefined>,

		/** The total number of document errors. */
		documentErrorCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidationFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidationFormProperties>({
			datasetErrorCount: new FormControl<number | null | undefined>(undefined),
			documentErrorCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response for TrainProcessorVersion. */
	export interface GoogleCloudDocumentaiV1beta3TrainProcessorVersionResponse {

		/** The resource name of the processor version produced by training. */
		processorVersion?: string | null;
	}

	/** The response for TrainProcessorVersion. */
	export interface GoogleCloudDocumentaiV1beta3TrainProcessorVersionResponseFormProperties {

		/** The resource name of the processor version produced by training. */
		processorVersion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDocumentaiV1beta3TrainProcessorVersionResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3TrainProcessorVersionResponseFormProperties>({
			processorVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The long-running operation metadata for the UndeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1beta3UndeployProcessorVersionMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
	}

	/** The long-running operation metadata for the UndeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1beta3UndeployProcessorVersionMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3UndeployProcessorVersionMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3UndeployProcessorVersionMetadataFormProperties>({
		});

	}


	/** Response message for the UndeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1beta3UndeployProcessorVersionResponse {
	}

	/** Response message for the UndeployProcessorVersion method. */
	export interface GoogleCloudDocumentaiV1beta3UndeployProcessorVersionResponseFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3UndeployProcessorVersionResponseFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3UndeployProcessorVersionResponseFormProperties>({
		});

	}

	export interface GoogleCloudDocumentaiV1beta3UpdateDatasetOperationMetadata {

		/** The common metadata for long running operations. */
		commonMetadata?: GoogleCloudDocumentaiV1beta3CommonOperationMetadata;
	}
	export interface GoogleCloudDocumentaiV1beta3UpdateDatasetOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDocumentaiV1beta3UpdateDatasetOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDocumentaiV1beta3UpdateDatasetOperationMetadataFormProperties>({
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
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1beta2/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Documentai_projects_operations_get(name: string): Observable<GoogleLongrunningOperation> {
			return this.http.get<GoogleLongrunningOperation>(this.baseUri + 'v1beta2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
		 * Post v1beta2/{parent}/documents:batchProcess
		 * @param {string} parent Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no location is specified, a region will be chosen automatically.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Documentai_projects_locations_documents_batchProcess(parent: string, requestBody: GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/documents:batchProcess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Processes a single document.
		 * Post v1beta2/{parent}/documents:process
		 * @param {string} parent Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no location is specified, a region will be chosen automatically. This field is only populated when used in ProcessDocument method.
		 * @return {GoogleCloudDocumentaiV1beta2Document} Successful response
		 */
		Documentai_projects_locations_documents_process(parent: string, requestBody: GoogleCloudDocumentaiV1beta2ProcessDocumentRequest): Observable<GoogleCloudDocumentaiV1beta2Document> {
			return this.http.post<GoogleCloudDocumentaiV1beta2Document>(this.baseUri + 'v1beta2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/documents:process', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

