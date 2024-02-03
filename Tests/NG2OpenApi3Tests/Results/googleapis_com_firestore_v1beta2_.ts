import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Metadata related to the create database operation. */
	export interface GoogleFirestoreAdminV1CreateDatabaseMetadata {
	}

	/** Metadata related to the create database operation. */
	export interface GoogleFirestoreAdminV1CreateDatabaseMetadataFormProperties {
	}
	export function CreateGoogleFirestoreAdminV1CreateDatabaseMetadataFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1CreateDatabaseMetadataFormProperties>({
		});

	}


	/** Metadata related to the delete database operation. */
	export interface GoogleFirestoreAdminV1DeleteDatabaseMetadata {
	}

	/** Metadata related to the delete database operation. */
	export interface GoogleFirestoreAdminV1DeleteDatabaseMetadataFormProperties {
	}
	export function CreateGoogleFirestoreAdminV1DeleteDatabaseMetadataFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1DeleteDatabaseMetadataFormProperties>({
		});

	}


	/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
	export interface GoogleFirestoreAdminV1Progress {

		/** The amount of work completed. */
		completedWork?: string | null;

		/** The amount of work estimated. */
		estimatedWork?: string | null;
	}

	/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
	export interface GoogleFirestoreAdminV1ProgressFormProperties {

		/** The amount of work completed. */
		completedWork: FormControl<string | null | undefined>,

		/** The amount of work estimated. */
		estimatedWork: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1ProgressFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1ProgressFormProperties>({
			completedWork: new FormControl<string | null | undefined>(undefined),
			estimatedWork: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for the long-running operation from the RestoreDatabase request. */
	export interface GoogleFirestoreAdminV1RestoreDatabaseMetadata {

		/** The name of the backup restoring from. */
		backup?: string | null;

		/** The name of the database being restored to. */
		database?: string | null;

		/** The time the restore finished, unset for ongoing restores. */
		endTime?: string | null;

		/** The operation state of the restore. */
		operationState?: GoogleFirestoreAdminV1RestoreDatabaseMetadataOperationState | null;

		/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
		progressPercentage?: GoogleFirestoreAdminV1Progress;

		/** The time the restore was started. */
		startTime?: string | null;
	}

	/** Metadata for the long-running operation from the RestoreDatabase request. */
	export interface GoogleFirestoreAdminV1RestoreDatabaseMetadataFormProperties {

		/** The name of the backup restoring from. */
		backup: FormControl<string | null | undefined>,

		/** The name of the database being restored to. */
		database: FormControl<string | null | undefined>,

		/** The time the restore finished, unset for ongoing restores. */
		endTime: FormControl<string | null | undefined>,

		/** The operation state of the restore. */
		operationState: FormControl<GoogleFirestoreAdminV1RestoreDatabaseMetadataOperationState | null | undefined>,

		/** The time the restore was started. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1RestoreDatabaseMetadataFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1RestoreDatabaseMetadataFormProperties>({
			backup: new FormControl<string | null | undefined>(undefined),
			database: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			operationState: new FormControl<GoogleFirestoreAdminV1RestoreDatabaseMetadataOperationState | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleFirestoreAdminV1RestoreDatabaseMetadataOperationState { OPERATION_STATE_UNSPECIFIED = 'OPERATION_STATE_UNSPECIFIED', INITIALIZING = 'INITIALIZING', PROCESSING = 'PROCESSING', CANCELLING = 'CANCELLING', FINALIZING = 'FINALIZING', SUCCESSFUL = 'SUCCESSFUL', FAILED = 'FAILED', CANCELLED = 'CANCELLED' }


	/** Metadata related to the update database operation. */
	export interface GoogleFirestoreAdminV1UpdateDatabaseMetadata {
	}

	/** Metadata related to the update database operation. */
	export interface GoogleFirestoreAdminV1UpdateDatabaseMetadataFormProperties {
	}
	export function CreateGoogleFirestoreAdminV1UpdateDatabaseMetadataFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1UpdateDatabaseMetadataFormProperties>({
		});

	}


	/** Metadata for google.longrunning.Operation results from FirestoreAdmin.ExportDocuments. */
	export interface GoogleFirestoreAdminV1beta2ExportDocumentsMetadata {

		/** Which collection ids are being exported. */
		collectionIds?: Array<string>;

		/** The time this operation completed. Will be unset if operation still in progress. */
		endTime?: string | null;

		/** The state of the export operation. */
		operationState?: GoogleFirestoreAdminV1RestoreDatabaseMetadataOperationState | null;

		/** Where the entities are being exported to. */
		outputUriPrefix?: string | null;

		/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
		progressBytes?: GoogleFirestoreAdminV1beta2Progress;

		/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
		progressDocuments?: GoogleFirestoreAdminV1beta2Progress;

		/** The time this operation started. */
		startTime?: string | null;
	}

	/** Metadata for google.longrunning.Operation results from FirestoreAdmin.ExportDocuments. */
	export interface GoogleFirestoreAdminV1beta2ExportDocumentsMetadataFormProperties {

		/** The time this operation completed. Will be unset if operation still in progress. */
		endTime: FormControl<string | null | undefined>,

		/** The state of the export operation. */
		operationState: FormControl<GoogleFirestoreAdminV1RestoreDatabaseMetadataOperationState | null | undefined>,

		/** Where the entities are being exported to. */
		outputUriPrefix: FormControl<string | null | undefined>,

		/** The time this operation started. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta2ExportDocumentsMetadataFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta2ExportDocumentsMetadataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			operationState: new FormControl<GoogleFirestoreAdminV1RestoreDatabaseMetadataOperationState | null | undefined>(undefined),
			outputUriPrefix: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
	export interface GoogleFirestoreAdminV1beta2Progress {

		/** The amount of work completed. */
		completedWork?: string | null;

		/** The amount of work estimated. */
		estimatedWork?: string | null;
	}

	/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
	export interface GoogleFirestoreAdminV1beta2ProgressFormProperties {

		/** The amount of work completed. */
		completedWork: FormControl<string | null | undefined>,

		/** The amount of work estimated. */
		estimatedWork: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta2ProgressFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta2ProgressFormProperties>({
			completedWork: new FormControl<string | null | undefined>(undefined),
			estimatedWork: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for FirestoreAdmin.ExportDocuments. */
	export interface GoogleFirestoreAdminV1beta2ExportDocumentsRequest {

		/** Which collection ids to export. Unspecified means all collections. */
		collectionIds?: Array<string>;

		/** The output URI. Currently only supports Google Cloud Storage URIs of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Google Cloud Storage bucket and `NAMESPACE_PATH` is an optional Google Cloud Storage namespace path. When choosing a name, be sure to consider Google Cloud Storage naming guidelines: https://cloud.google.com/storage/docs/naming. If the URI is a bucket (without a namespace path), a prefix will be generated based on the start time. */
		outputUriPrefix?: string | null;
	}

	/** The request for FirestoreAdmin.ExportDocuments. */
	export interface GoogleFirestoreAdminV1beta2ExportDocumentsRequestFormProperties {

		/** The output URI. Currently only supports Google Cloud Storage URIs of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Google Cloud Storage bucket and `NAMESPACE_PATH` is an optional Google Cloud Storage namespace path. When choosing a name, be sure to consider Google Cloud Storage naming guidelines: https://cloud.google.com/storage/docs/naming. If the URI is a bucket (without a namespace path), a prefix will be generated based on the start time. */
		outputUriPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta2ExportDocumentsRequestFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta2ExportDocumentsRequestFormProperties>({
			outputUriPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returned in the google.longrunning.Operation response field. */
	export interface GoogleFirestoreAdminV1beta2ExportDocumentsResponse {

		/** Location of the output files. This can be used to begin an import into Cloud Firestore (this project or another project) after the operation completes successfully. */
		outputUriPrefix?: string | null;
	}

	/** Returned in the google.longrunning.Operation response field. */
	export interface GoogleFirestoreAdminV1beta2ExportDocumentsResponseFormProperties {

		/** Location of the output files. This can be used to begin an import into Cloud Firestore (this project or another project) after the operation completes successfully. */
		outputUriPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta2ExportDocumentsResponseFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta2ExportDocumentsResponseFormProperties>({
			outputUriPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single field in the database. Fields are grouped by their "Collection Group", which represent all collections in the database with the same id. */
	export interface GoogleFirestoreAdminV1beta2Field {

		/** The index configuration for this field. */
		indexConfig?: GoogleFirestoreAdminV1beta2IndexConfig;

		/** A field name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` A field path may be a simple field name, e.g. `address` or a path to fields within map_value , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field. Field paths may be quoted using ` (backtick). The only character that needs to be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii symbolic characters. Examples: (Note: Comments here are written in markdown syntax, so there is an additional layer of backticks to represent a code block) `\`address.city\`` represents a field named `address.city`, not the map key `city` in the field `address`. `\`*\`` represents a field named `*`, not any field. A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration. */
		name?: string | null;
	}

	/** Represents a single field in the database. Fields are grouped by their "Collection Group", which represent all collections in the database with the same id. */
	export interface GoogleFirestoreAdminV1beta2FieldFormProperties {

		/** A field name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` A field path may be a simple field name, e.g. `address` or a path to fields within map_value , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field. Field paths may be quoted using ` (backtick). The only character that needs to be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii symbolic characters. Examples: (Note: Comments here are written in markdown syntax, so there is an additional layer of backticks to represent a code block) `\`address.city\`` represents a field named `address.city`, not the map key `city` in the field `address`. `\`*\`` represents a field named `*`, not any field. A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta2FieldFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta2FieldFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The index configuration for this field. */
	export interface GoogleFirestoreAdminV1beta2IndexConfig {

		/** Output only. Specifies the resource name of the `Field` from which this field's index configuration is set (when `uses_ancestor_config` is true), or from which it *would* be set if this field had no index configuration (when `uses_ancestor_config` is false). */
		ancestorField?: string | null;

		/** The indexes supported for this field. */
		indexes?: Array<GoogleFirestoreAdminV1beta2Index>;

		/** Output only When true, the `Field`'s index configuration is in the process of being reverted. Once complete, the index config will transition to the same state as the field specified by `ancestor_field`, at which point `uses_ancestor_config` will be `true` and `reverting` will be `false`. */
		reverting?: boolean | null;

		/** Output only. When true, the `Field`'s index configuration is set from the configuration specified by the `ancestor_field`. When false, the `Field`'s index configuration is defined explicitly. */
		usesAncestorConfig?: boolean | null;
	}

	/** The index configuration for this field. */
	export interface GoogleFirestoreAdminV1beta2IndexConfigFormProperties {

		/** Output only. Specifies the resource name of the `Field` from which this field's index configuration is set (when `uses_ancestor_config` is true), or from which it *would* be set if this field had no index configuration (when `uses_ancestor_config` is false). */
		ancestorField: FormControl<string | null | undefined>,

		/** Output only When true, the `Field`'s index configuration is in the process of being reverted. Once complete, the index config will transition to the same state as the field specified by `ancestor_field`, at which point `uses_ancestor_config` will be `true` and `reverting` will be `false`. */
		reverting: FormControl<boolean | null | undefined>,

		/** Output only. When true, the `Field`'s index configuration is set from the configuration specified by the `ancestor_field`. When false, the `Field`'s index configuration is defined explicitly. */
		usesAncestorConfig: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta2IndexConfigFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta2IndexConfigFormProperties>({
			ancestorField: new FormControl<string | null | undefined>(undefined),
			reverting: new FormControl<boolean | null | undefined>(undefined),
			usesAncestorConfig: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Cloud Firestore indexes enable simple and complex queries against documents in a database. */
	export interface GoogleFirestoreAdminV1beta2Index {

		/** The fields supported by this index. For composite indexes, this is always 2 or more fields. The last field entry is always for the field path `__name__`. If, on creation, `__name__` was not specified as the last field, it will be added automatically with the same direction as that of the last field defined. If the final field in a composite index is not directional, the `__name__` will be ordered ASCENDING (unless explicitly specified). For single field indexes, this will always be exactly one entry with a field path equal to the field path of the associated field. */
		fields?: Array<GoogleFirestoreAdminV1beta2IndexField>;

		/** Output only. A server defined name for this index. The form of this name for composite indexes will be: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{composite_index_id}` For single field indexes, this field will be empty. */
		name?: string | null;

		/** Indexes with a collection query scope specified allow queries against a collection that is the child of a specific document, specified at query time, and that has the same collection id. Indexes with a collection group query scope specified allow queries against all collections descended from a specific document, specified at query time, and that have the same collection id as this index. */
		queryScope?: GoogleFirestoreAdminV1beta2IndexQueryScope | null;

		/** Output only. The serving state of the index. */
		state?: GoogleFirestoreAdminV1beta2IndexState | null;
	}

	/** Cloud Firestore indexes enable simple and complex queries against documents in a database. */
	export interface GoogleFirestoreAdminV1beta2IndexFormProperties {

		/** Output only. A server defined name for this index. The form of this name for composite indexes will be: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{composite_index_id}` For single field indexes, this field will be empty. */
		name: FormControl<string | null | undefined>,

		/** Indexes with a collection query scope specified allow queries against a collection that is the child of a specific document, specified at query time, and that has the same collection id. Indexes with a collection group query scope specified allow queries against all collections descended from a specific document, specified at query time, and that have the same collection id as this index. */
		queryScope: FormControl<GoogleFirestoreAdminV1beta2IndexQueryScope | null | undefined>,

		/** Output only. The serving state of the index. */
		state: FormControl<GoogleFirestoreAdminV1beta2IndexState | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta2IndexFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta2IndexFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			queryScope: new FormControl<GoogleFirestoreAdminV1beta2IndexQueryScope | null | undefined>(undefined),
			state: new FormControl<GoogleFirestoreAdminV1beta2IndexState | null | undefined>(undefined),
		});

	}


	/** A field in an index. The field_path describes which field is indexed, the value_mode describes how the field value is indexed. */
	export interface GoogleFirestoreAdminV1beta2IndexField {

		/** Indicates that this field supports operations on `array_value`s. */
		arrayConfig?: GoogleFirestoreAdminV1beta2IndexFieldArrayConfig | null;

		/** Can be __name__. For single field indexes, this must match the name of the field or may be omitted. */
		fieldPath?: string | null;

		/** Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=. */
		order?: GoogleFirestoreAdminV1beta2IndexFieldOrder | null;
	}

	/** A field in an index. The field_path describes which field is indexed, the value_mode describes how the field value is indexed. */
	export interface GoogleFirestoreAdminV1beta2IndexFieldFormProperties {

		/** Indicates that this field supports operations on `array_value`s. */
		arrayConfig: FormControl<GoogleFirestoreAdminV1beta2IndexFieldArrayConfig | null | undefined>,

		/** Can be __name__. For single field indexes, this must match the name of the field or may be omitted. */
		fieldPath: FormControl<string | null | undefined>,

		/** Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=. */
		order: FormControl<GoogleFirestoreAdminV1beta2IndexFieldOrder | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta2IndexFieldFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta2IndexFieldFormProperties>({
			arrayConfig: new FormControl<GoogleFirestoreAdminV1beta2IndexFieldArrayConfig | null | undefined>(undefined),
			fieldPath: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<GoogleFirestoreAdminV1beta2IndexFieldOrder | null | undefined>(undefined),
		});

	}

	export enum GoogleFirestoreAdminV1beta2IndexFieldArrayConfig { ARRAY_CONFIG_UNSPECIFIED = 'ARRAY_CONFIG_UNSPECIFIED', CONTAINS = 'CONTAINS' }

	export enum GoogleFirestoreAdminV1beta2IndexFieldOrder { ORDER_UNSPECIFIED = 'ORDER_UNSPECIFIED', ASCENDING = 'ASCENDING', DESCENDING = 'DESCENDING' }

	export enum GoogleFirestoreAdminV1beta2IndexQueryScope { QUERY_SCOPE_UNSPECIFIED = 'QUERY_SCOPE_UNSPECIFIED', COLLECTION = 'COLLECTION', COLLECTION_GROUP = 'COLLECTION_GROUP' }

	export enum GoogleFirestoreAdminV1beta2IndexState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', READY = 'READY', NEEDS_REPAIR = 'NEEDS_REPAIR' }


	/** Metadata for google.longrunning.Operation results from FirestoreAdmin.UpdateField. */
	export interface GoogleFirestoreAdminV1beta2FieldOperationMetadata {

		/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
		bytesProgress?: GoogleFirestoreAdminV1beta2Progress;

		/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
		documentProgress?: GoogleFirestoreAdminV1beta2Progress;

		/** The time this operation completed. Will be unset if operation still in progress. */
		endTime?: string | null;

		/** The field resource that this operation is acting on. For example: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` */
		field?: string | null;

		/** A list of IndexConfigDelta, which describe the intent of this operation. */
		indexConfigDeltas?: Array<GoogleFirestoreAdminV1beta2IndexConfigDelta>;

		/** The time this operation started. */
		startTime?: string | null;

		/** The state of the operation. */
		state?: GoogleFirestoreAdminV1RestoreDatabaseMetadataOperationState | null;
	}

	/** Metadata for google.longrunning.Operation results from FirestoreAdmin.UpdateField. */
	export interface GoogleFirestoreAdminV1beta2FieldOperationMetadataFormProperties {

		/** The time this operation completed. Will be unset if operation still in progress. */
		endTime: FormControl<string | null | undefined>,

		/** The field resource that this operation is acting on. For example: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` */
		field: FormControl<string | null | undefined>,

		/** The time this operation started. */
		startTime: FormControl<string | null | undefined>,

		/** The state of the operation. */
		state: FormControl<GoogleFirestoreAdminV1RestoreDatabaseMetadataOperationState | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta2FieldOperationMetadataFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta2FieldOperationMetadataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleFirestoreAdminV1RestoreDatabaseMetadataOperationState | null | undefined>(undefined),
		});

	}


	/** Information about an index configuration change. */
	export interface GoogleFirestoreAdminV1beta2IndexConfigDelta {

		/** Specifies how the index is changing. */
		changeType?: GoogleFirestoreAdminV1beta2IndexConfigDeltaChangeType | null;

		/** Cloud Firestore indexes enable simple and complex queries against documents in a database. */
		index?: GoogleFirestoreAdminV1beta2Index;
	}

	/** Information about an index configuration change. */
	export interface GoogleFirestoreAdminV1beta2IndexConfigDeltaFormProperties {

		/** Specifies how the index is changing. */
		changeType: FormControl<GoogleFirestoreAdminV1beta2IndexConfigDeltaChangeType | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta2IndexConfigDeltaFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta2IndexConfigDeltaFormProperties>({
			changeType: new FormControl<GoogleFirestoreAdminV1beta2IndexConfigDeltaChangeType | null | undefined>(undefined),
		});

	}

	export enum GoogleFirestoreAdminV1beta2IndexConfigDeltaChangeType { CHANGE_TYPE_UNSPECIFIED = 'CHANGE_TYPE_UNSPECIFIED', ADD = 'ADD', REMOVE = 'REMOVE' }


	/** Metadata for google.longrunning.Operation results from FirestoreAdmin.ImportDocuments. */
	export interface GoogleFirestoreAdminV1beta2ImportDocumentsMetadata {

		/** Which collection ids are being imported. */
		collectionIds?: Array<string>;

		/** The time this operation completed. Will be unset if operation still in progress. */
		endTime?: string | null;

		/** The location of the documents being imported. */
		inputUriPrefix?: string | null;

		/** The state of the import operation. */
		operationState?: GoogleFirestoreAdminV1RestoreDatabaseMetadataOperationState | null;

		/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
		progressBytes?: GoogleFirestoreAdminV1beta2Progress;

		/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
		progressDocuments?: GoogleFirestoreAdminV1beta2Progress;

		/** The time this operation started. */
		startTime?: string | null;
	}

	/** Metadata for google.longrunning.Operation results from FirestoreAdmin.ImportDocuments. */
	export interface GoogleFirestoreAdminV1beta2ImportDocumentsMetadataFormProperties {

		/** The time this operation completed. Will be unset if operation still in progress. */
		endTime: FormControl<string | null | undefined>,

		/** The location of the documents being imported. */
		inputUriPrefix: FormControl<string | null | undefined>,

		/** The state of the import operation. */
		operationState: FormControl<GoogleFirestoreAdminV1RestoreDatabaseMetadataOperationState | null | undefined>,

		/** The time this operation started. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta2ImportDocumentsMetadataFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta2ImportDocumentsMetadataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			inputUriPrefix: new FormControl<string | null | undefined>(undefined),
			operationState: new FormControl<GoogleFirestoreAdminV1RestoreDatabaseMetadataOperationState | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for FirestoreAdmin.ImportDocuments. */
	export interface GoogleFirestoreAdminV1beta2ImportDocumentsRequest {

		/** Which collection ids to import. Unspecified means all collections included in the import. */
		collectionIds?: Array<string>;

		/** Location of the exported files. This must match the output_uri_prefix of an ExportDocumentsResponse from an export that has completed successfully. See: google.firestore.admin.v1beta2.ExportDocumentsResponse.output_uri_prefix. */
		inputUriPrefix?: string | null;
	}

	/** The request for FirestoreAdmin.ImportDocuments. */
	export interface GoogleFirestoreAdminV1beta2ImportDocumentsRequestFormProperties {

		/** Location of the exported files. This must match the output_uri_prefix of an ExportDocumentsResponse from an export that has completed successfully. See: google.firestore.admin.v1beta2.ExportDocumentsResponse.output_uri_prefix. */
		inputUriPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta2ImportDocumentsRequestFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta2ImportDocumentsRequestFormProperties>({
			inputUriPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for google.longrunning.Operation results from FirestoreAdmin.CreateIndex. */
	export interface GoogleFirestoreAdminV1beta2IndexOperationMetadata {

		/** The time this operation completed. Will be unset if operation still in progress. */
		endTime?: string | null;

		/** The index resource that this operation is acting on. For example: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}` */
		index?: string | null;

		/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
		progressBytes?: GoogleFirestoreAdminV1beta2Progress;

		/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
		progressDocuments?: GoogleFirestoreAdminV1beta2Progress;

		/** The time this operation started. */
		startTime?: string | null;

		/** The state of the operation. */
		state?: GoogleFirestoreAdminV1RestoreDatabaseMetadataOperationState | null;
	}

	/** Metadata for google.longrunning.Operation results from FirestoreAdmin.CreateIndex. */
	export interface GoogleFirestoreAdminV1beta2IndexOperationMetadataFormProperties {

		/** The time this operation completed. Will be unset if operation still in progress. */
		endTime: FormControl<string | null | undefined>,

		/** The index resource that this operation is acting on. For example: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}` */
		index: FormControl<string | null | undefined>,

		/** The time this operation started. */
		startTime: FormControl<string | null | undefined>,

		/** The state of the operation. */
		state: FormControl<GoogleFirestoreAdminV1RestoreDatabaseMetadataOperationState | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta2IndexOperationMetadataFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta2IndexOperationMetadataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleFirestoreAdminV1RestoreDatabaseMetadataOperationState | null | undefined>(undefined),
		});

	}


	/** The response for FirestoreAdmin.ListFields. */
	export interface GoogleFirestoreAdminV1beta2ListFieldsResponse {

		/** The requested fields. */
		fields?: Array<GoogleFirestoreAdminV1beta2Field>;

		/** A page token that may be used to request another page of results. If blank, this is the last page. */
		nextPageToken?: string | null;
	}

	/** The response for FirestoreAdmin.ListFields. */
	export interface GoogleFirestoreAdminV1beta2ListFieldsResponseFormProperties {

		/** A page token that may be used to request another page of results. If blank, this is the last page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta2ListFieldsResponseFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta2ListFieldsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for FirestoreAdmin.ListIndexes. */
	export interface GoogleFirestoreAdminV1beta2ListIndexesResponse {

		/** The requested indexes. */
		indexes?: Array<GoogleFirestoreAdminV1beta2Index>;

		/** A page token that may be used to request another page of results. If blank, this is the last page. */
		nextPageToken?: string | null;
	}

	/** The response for FirestoreAdmin.ListIndexes. */
	export interface GoogleFirestoreAdminV1beta2ListIndexesResponseFormProperties {

		/** A page token that may be used to request another page of results. If blank, this is the last page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta2ListIndexesResponseFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta2ListIndexesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

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


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a composite index.
		 * Delete v1beta2/{name}
		 * @param {string} name A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`
		 * @return {Empty} Successful response
		 */
		Firestore_projects_databases_collectionGroups_indexes_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets a composite index.
		 * Get v1beta2/{name}
		 * @param {string} name A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`
		 * @return {GoogleFirestoreAdminV1beta2Index} Successful response
		 */
		Firestore_projects_databases_collectionGroups_indexes_get(name: string): Observable<GoogleFirestoreAdminV1beta2Index> {
			return this.http.get<GoogleFirestoreAdminV1beta2Index>(this.baseUri + 'v1beta2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a field configuration. Currently, field updates apply only to single field index configuration. However, calls to FirestoreAdmin.UpdateField should provide a field mask to avoid changing any configuration that the caller isn't aware of. The field mask should be specified as: `{ paths: "index_config" }`. This call returns a google.longrunning.Operation which may be used to track the status of the field update. The metadata for the operation will be the type FieldOperationMetadata. To configure the default field settings for the database, use the special `Field` with resource name: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`.
		 * Patch v1beta2/{name}
		 * @param {string} name A field name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` A field path may be a simple field name, e.g. `address` or a path to fields within map_value , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field. Field paths may be quoted using ` (backtick). The only character that needs to be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii symbolic characters. Examples: (Note: Comments here are written in markdown syntax, so there is an additional layer of backticks to represent a code block) `\`address.city\`` represents a field named `address.city`, not the map key `city` in the field `address`. `\`*\`` represents a field named `*`, not any field. A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration.
		 * @param {string} updateMask A mask, relative to the field. If specified, only configuration specified by this field_mask will be updated in the field.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Firestore_projects_databases_collectionGroups_fields_patch(name: string, updateMask: string | null | undefined, requestBody: GoogleFirestoreAdminV1beta2Field): Observable<GoogleLongrunningOperation> {
			return this.http.patch<GoogleLongrunningOperation>(this.baseUri + 'v1beta2/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
		 * Post v1beta2/{name}:exportDocuments
		 * @param {string} name Database to export. Should be of the form: `projects/{project_id}/databases/{database_id}`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Firestore_projects_databases_exportDocuments(name: string, requestBody: GoogleFirestoreAdminV1beta2ExportDocumentsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta2/' + (name == null ? '' : encodeURIComponent(name)) + ':exportDocuments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
		 * Post v1beta2/{name}:importDocuments
		 * @param {string} name Database to import into. Should be of the form: `projects/{project_id}/databases/{database_id}`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Firestore_projects_databases_importDocuments(name: string, requestBody: GoogleFirestoreAdminV1beta2ImportDocumentsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta2/' + (name == null ? '' : encodeURIComponent(name)) + ':importDocuments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.
		 * Get v1beta2/{parent}/fields
		 * @param {string} parent A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
		 * @param {string} filter The filter to apply to list results. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.
		 * @param {number} pageSize The number of results to return.
		 * @param {string} pageToken A page token, returned from a previous call to FirestoreAdmin.ListFields, that may be used to get the next page of results.
		 * @return {GoogleFirestoreAdminV1beta2ListFieldsResponse} Successful response
		 */
		Firestore_projects_databases_collectionGroups_fields_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleFirestoreAdminV1beta2ListFieldsResponse> {
			return this.http.get<GoogleFirestoreAdminV1beta2ListFieldsResponse>(this.baseUri + 'v1beta2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fields&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists composite indexes.
		 * Get v1beta2/{parent}/indexes
		 * @param {string} parent A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
		 * @param {string} filter The filter to apply to list results.
		 * @param {number} pageSize The number of results to return.
		 * @param {string} pageToken A page token, returned from a previous call to FirestoreAdmin.ListIndexes, that may be used to get the next page of results.
		 * @return {GoogleFirestoreAdminV1beta2ListIndexesResponse} Successful response
		 */
		Firestore_projects_databases_collectionGroups_indexes_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleFirestoreAdminV1beta2ListIndexesResponse> {
			return this.http.get<GoogleFirestoreAdminV1beta2ListIndexesResponse>(this.baseUri + 'v1beta2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/indexes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.
		 * Post v1beta2/{parent}/indexes
		 * @param {string} parent A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Firestore_projects_databases_collectionGroups_indexes_create(parent: string, requestBody: GoogleFirestoreAdminV1beta2Index): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/indexes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

