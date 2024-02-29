import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Metadata common to all Datastore Admin operations. */
	export interface GoogleDatastoreAdminV1CommonMetadata {

		/** The time the operation ended, either successfully or otherwise. */
		endTime?: string | null;

		/** The client-assigned labels which were provided when the operation was created. May also include additional labels. */
		labels?: {[id: string]: string };

		/** The type of the operation. Can be used as a filter in ListOperationsRequest. */
		operationType?: GoogleDatastoreAdminV1CommonMetadataOperationType | null;

		/** The time that work began on the operation. */
		startTime?: string | null;

		/** The current state of the Operation. */
		state?: GoogleDatastoreAdminV1CommonMetadataState | null;
	}

	/** Metadata common to all Datastore Admin operations. */
	export interface GoogleDatastoreAdminV1CommonMetadataFormProperties {

		/** The time the operation ended, either successfully or otherwise. */
		endTime: FormControl<string | null | undefined>,

		/** The client-assigned labels which were provided when the operation was created. May also include additional labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The type of the operation. Can be used as a filter in ListOperationsRequest. */
		operationType: FormControl<GoogleDatastoreAdminV1CommonMetadataOperationType | null | undefined>,

		/** The time that work began on the operation. */
		startTime: FormControl<string | null | undefined>,

		/** The current state of the Operation. */
		state: FormControl<GoogleDatastoreAdminV1CommonMetadataState | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1CommonMetadataFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1CommonMetadataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			operationType: new FormControl<GoogleDatastoreAdminV1CommonMetadataOperationType | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleDatastoreAdminV1CommonMetadataState | null | undefined>(undefined),
		});

	}

	export enum GoogleDatastoreAdminV1CommonMetadataOperationType { OPERATION_TYPE_UNSPECIFIED = 'OPERATION_TYPE_UNSPECIFIED', EXPORT_ENTITIES = 'EXPORT_ENTITIES', IMPORT_ENTITIES = 'IMPORT_ENTITIES', CREATE_INDEX = 'CREATE_INDEX', DELETE_INDEX = 'DELETE_INDEX' }

	export enum GoogleDatastoreAdminV1CommonMetadataState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', INITIALIZING = 'INITIALIZING', PROCESSING = 'PROCESSING', CANCELLING = 'CANCELLING', FINALIZING = 'FINALIZING', SUCCESSFUL = 'SUCCESSFUL', FAILED = 'FAILED', CANCELLED = 'CANCELLED' }


	/** Metadata for Datastore to Firestore migration operations. The DatastoreFirestoreMigration operation is not started by the end-user via an explicit "creation" method. This is an intentional deviation from the LRO design pattern. This singleton resource can be accessed at: "projects/{project_id}/operations/datastore-firestore-migration" */
	export interface GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadata {

		/** The current state of migration from Cloud Datastore to Cloud Firestore in Datastore mode. */
		migrationState?: GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationState | null;

		/** The current step of migration from Cloud Datastore to Cloud Firestore in Datastore mode. */
		migrationStep?: GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationStep | null;
	}

	/** Metadata for Datastore to Firestore migration operations. The DatastoreFirestoreMigration operation is not started by the end-user via an explicit "creation" method. This is an intentional deviation from the LRO design pattern. This singleton resource can be accessed at: "projects/{project_id}/operations/datastore-firestore-migration" */
	export interface GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataFormProperties {

		/** The current state of migration from Cloud Datastore to Cloud Firestore in Datastore mode. */
		migrationState: FormControl<GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationState | null | undefined>,

		/** The current step of migration from Cloud Datastore to Cloud Firestore in Datastore mode. */
		migrationStep: FormControl<GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationStep | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataFormProperties>({
			migrationState: new FormControl<GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationState | null | undefined>(undefined),
			migrationStep: new FormControl<GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationStep | null | undefined>(undefined),
		});

	}

	export enum GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationState { MIGRATION_STATE_UNSPECIFIED = 'MIGRATION_STATE_UNSPECIFIED', RUNNING = 'RUNNING', PAUSED = 'PAUSED', COMPLETE = 'COMPLETE' }

	export enum GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationStep { MIGRATION_STEP_UNSPECIFIED = 'MIGRATION_STEP_UNSPECIFIED', PREPARE = 'PREPARE', START = 'START', APPLY_WRITES_SYNCHRONOUSLY = 'APPLY_WRITES_SYNCHRONOUSLY', COPY_AND_VERIFY = 'COPY_AND_VERIFY', REDIRECT_EVENTUALLY_CONSISTENT_READS = 'REDIRECT_EVENTUALLY_CONSISTENT_READS', REDIRECT_STRONGLY_CONSISTENT_READS = 'REDIRECT_STRONGLY_CONSISTENT_READS', REDIRECT_WRITES = 'REDIRECT_WRITES' }


	/** Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz'] */
	export interface GoogleDatastoreAdminV1EntityFilter {

		/** If empty, then this represents all kinds. */
		kinds?: Array<string>;

		/** An empty list represents all namespaces. This is the preferred usage for projects that don't use namespaces. An empty string element represents the default namespace. This should be used if the project has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique. */
		namespaceIds?: Array<string>;
	}

	/** Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz'] */
	export interface GoogleDatastoreAdminV1EntityFilterFormProperties {
	}
	export function CreateGoogleDatastoreAdminV1EntityFilterFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1EntityFilterFormProperties>({
		});

	}


	/** Metadata for ExportEntities operations. */
	export interface GoogleDatastoreAdminV1ExportEntitiesMetadata {

		/** Metadata common to all Datastore Admin operations. */
		common?: GoogleDatastoreAdminV1CommonMetadata;

		/** Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz'] */
		entityFilter?: GoogleDatastoreAdminV1EntityFilter;

		/** Location for the export metadata and data files. This will be the same value as the google.datastore.admin.v1.ExportEntitiesRequest.output_url_prefix field. The final output location is provided in google.datastore.admin.v1.ExportEntitiesResponse.output_url. */
		outputUrlPrefix?: string | null;

		/** Measures the progress of a particular metric. */
		progressBytes?: GoogleDatastoreAdminV1Progress;

		/** Measures the progress of a particular metric. */
		progressEntities?: GoogleDatastoreAdminV1Progress;
	}

	/** Metadata for ExportEntities operations. */
	export interface GoogleDatastoreAdminV1ExportEntitiesMetadataFormProperties {

		/** Location for the export metadata and data files. This will be the same value as the google.datastore.admin.v1.ExportEntitiesRequest.output_url_prefix field. The final output location is provided in google.datastore.admin.v1.ExportEntitiesResponse.output_url. */
		outputUrlPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1ExportEntitiesMetadataFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1ExportEntitiesMetadataFormProperties>({
			outputUrlPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Measures the progress of a particular metric. */
	export interface GoogleDatastoreAdminV1Progress {

		/** The amount of work that has been completed. Note that this may be greater than work_estimated. */
		workCompleted?: string | null;

		/** An estimate of how much work needs to be performed. May be zero if the work estimate is unavailable. */
		workEstimated?: string | null;
	}

	/** Measures the progress of a particular metric. */
	export interface GoogleDatastoreAdminV1ProgressFormProperties {

		/** The amount of work that has been completed. Note that this may be greater than work_estimated. */
		workCompleted: FormControl<string | null | undefined>,

		/** An estimate of how much work needs to be performed. May be zero if the work estimate is unavailable. */
		workEstimated: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1ProgressFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1ProgressFormProperties>({
			workCompleted: new FormControl<string | null | undefined>(undefined),
			workEstimated: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for google.datastore.admin.v1.DatastoreAdmin.ExportEntities. */
	export interface GoogleDatastoreAdminV1ExportEntitiesResponse {

		/** Location of the output metadata file. This can be used to begin an import into Cloud Datastore (this project or another project). See google.datastore.admin.v1.ImportEntitiesRequest.input_url. Only present if the operation completed successfully. */
		outputUrl?: string | null;
	}

	/** The response for google.datastore.admin.v1.DatastoreAdmin.ExportEntities. */
	export interface GoogleDatastoreAdminV1ExportEntitiesResponseFormProperties {

		/** Location of the output metadata file. This can be used to begin an import into Cloud Datastore (this project or another project). See google.datastore.admin.v1.ImportEntitiesRequest.input_url. Only present if the operation completed successfully. */
		outputUrl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1ExportEntitiesResponseFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1ExportEntitiesResponseFormProperties>({
			outputUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for ImportEntities operations. */
	export interface GoogleDatastoreAdminV1ImportEntitiesMetadata {

		/** Metadata common to all Datastore Admin operations. */
		common?: GoogleDatastoreAdminV1CommonMetadata;

		/** Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz'] */
		entityFilter?: GoogleDatastoreAdminV1EntityFilter;

		/** The location of the import metadata file. This will be the same value as the google.datastore.admin.v1.ExportEntitiesResponse.output_url field. */
		inputUrl?: string | null;

		/** Measures the progress of a particular metric. */
		progressBytes?: GoogleDatastoreAdminV1Progress;

		/** Measures the progress of a particular metric. */
		progressEntities?: GoogleDatastoreAdminV1Progress;
	}

	/** Metadata for ImportEntities operations. */
	export interface GoogleDatastoreAdminV1ImportEntitiesMetadataFormProperties {

		/** The location of the import metadata file. This will be the same value as the google.datastore.admin.v1.ExportEntitiesResponse.output_url field. */
		inputUrl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1ImportEntitiesMetadataFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1ImportEntitiesMetadataFormProperties>({
			inputUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for Index operations. */
	export interface GoogleDatastoreAdminV1IndexOperationMetadata {

		/** Metadata common to all Datastore Admin operations. */
		common?: GoogleDatastoreAdminV1CommonMetadata;

		/** The index resource ID that this operation is acting on. */
		indexId?: string | null;

		/** Measures the progress of a particular metric. */
		progressEntities?: GoogleDatastoreAdminV1Progress;
	}

	/** Metadata for Index operations. */
	export interface GoogleDatastoreAdminV1IndexOperationMetadataFormProperties {

		/** The index resource ID that this operation is acting on. */
		indexId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1IndexOperationMetadataFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1IndexOperationMetadataFormProperties>({
			indexId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event signifying the start of a new step in a [migration from Cloud Datastore to Cloud Firestore in Datastore mode](https://cloud.google.com/datastore/docs/upgrade-to-firestore). */
	export interface GoogleDatastoreAdminV1MigrationProgressEvent {

		/** Details for the `PREPARE` step. */
		prepareStepDetails?: GoogleDatastoreAdminV1PrepareStepDetails;

		/** Details for the `REDIRECT_WRITES` step. */
		redirectWritesStepDetails?: GoogleDatastoreAdminV1RedirectWritesStepDetails;

		/** The step that is starting. An event with step set to `START` indicates that the migration has been reverted back to the initial pre-migration state. */
		step?: GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationStep | null;
	}

	/** An event signifying the start of a new step in a [migration from Cloud Datastore to Cloud Firestore in Datastore mode](https://cloud.google.com/datastore/docs/upgrade-to-firestore). */
	export interface GoogleDatastoreAdminV1MigrationProgressEventFormProperties {

		/** The step that is starting. An event with step set to `START` indicates that the migration has been reverted back to the initial pre-migration state. */
		step: FormControl<GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationStep | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1MigrationProgressEventFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1MigrationProgressEventFormProperties>({
			step: new FormControl<GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationStep | null | undefined>(undefined),
		});

	}


	/** Details for the `PREPARE` step. */
	export interface GoogleDatastoreAdminV1PrepareStepDetails {

		/** The concurrency mode this database will use when it reaches the `REDIRECT_WRITES` step. */
		concurrencyMode?: GoogleDatastoreAdminV1PrepareStepDetailsConcurrencyMode | null;
	}

	/** Details for the `PREPARE` step. */
	export interface GoogleDatastoreAdminV1PrepareStepDetailsFormProperties {

		/** The concurrency mode this database will use when it reaches the `REDIRECT_WRITES` step. */
		concurrencyMode: FormControl<GoogleDatastoreAdminV1PrepareStepDetailsConcurrencyMode | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1PrepareStepDetailsFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1PrepareStepDetailsFormProperties>({
			concurrencyMode: new FormControl<GoogleDatastoreAdminV1PrepareStepDetailsConcurrencyMode | null | undefined>(undefined),
		});

	}

	export enum GoogleDatastoreAdminV1PrepareStepDetailsConcurrencyMode { CONCURRENCY_MODE_UNSPECIFIED = 'CONCURRENCY_MODE_UNSPECIFIED', PESSIMISTIC = 'PESSIMISTIC', OPTIMISTIC = 'OPTIMISTIC', OPTIMISTIC_WITH_ENTITY_GROUPS = 'OPTIMISTIC_WITH_ENTITY_GROUPS' }


	/** Details for the `REDIRECT_WRITES` step. */
	export interface GoogleDatastoreAdminV1RedirectWritesStepDetails {

		/** Ths concurrency mode for this database. */
		concurrencyMode?: GoogleDatastoreAdminV1PrepareStepDetailsConcurrencyMode | null;
	}

	/** Details for the `REDIRECT_WRITES` step. */
	export interface GoogleDatastoreAdminV1RedirectWritesStepDetailsFormProperties {

		/** Ths concurrency mode for this database. */
		concurrencyMode: FormControl<GoogleDatastoreAdminV1PrepareStepDetailsConcurrencyMode | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1RedirectWritesStepDetailsFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1RedirectWritesStepDetailsFormProperties>({
			concurrencyMode: new FormControl<GoogleDatastoreAdminV1PrepareStepDetailsConcurrencyMode | null | undefined>(undefined),
		});

	}


	/** An event signifying a change in state of a [migration from Cloud Datastore to Cloud Firestore in Datastore mode](https://cloud.google.com/datastore/docs/upgrade-to-firestore). */
	export interface GoogleDatastoreAdminV1MigrationStateEvent {

		/** The new state of the migration. */
		state?: GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationState | null;
	}

	/** An event signifying a change in state of a [migration from Cloud Datastore to Cloud Firestore in Datastore mode](https://cloud.google.com/datastore/docs/upgrade-to-firestore). */
	export interface GoogleDatastoreAdminV1MigrationStateEventFormProperties {

		/** The new state of the migration. */
		state: FormControl<GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationState | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1MigrationStateEventFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1MigrationStateEventFormProperties>({
			state: new FormControl<GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataMigrationState | null | undefined>(undefined),
		});

	}


	/** Metadata common to all Datastore Admin operations. */
	export interface GoogleDatastoreAdminV1beta1CommonMetadata {

		/** The time the operation ended, either successfully or otherwise. */
		endTime?: string | null;

		/** The client-assigned labels which were provided when the operation was created. May also include additional labels. */
		labels?: {[id: string]: string };

		/** The type of the operation. Can be used as a filter in ListOperationsRequest. */
		operationType?: GoogleDatastoreAdminV1beta1CommonMetadataOperationType | null;

		/** The time that work began on the operation. */
		startTime?: string | null;

		/** The current state of the Operation. */
		state?: GoogleDatastoreAdminV1CommonMetadataState | null;
	}

	/** Metadata common to all Datastore Admin operations. */
	export interface GoogleDatastoreAdminV1beta1CommonMetadataFormProperties {

		/** The time the operation ended, either successfully or otherwise. */
		endTime: FormControl<string | null | undefined>,

		/** The client-assigned labels which were provided when the operation was created. May also include additional labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The type of the operation. Can be used as a filter in ListOperationsRequest. */
		operationType: FormControl<GoogleDatastoreAdminV1beta1CommonMetadataOperationType | null | undefined>,

		/** The time that work began on the operation. */
		startTime: FormControl<string | null | undefined>,

		/** The current state of the Operation. */
		state: FormControl<GoogleDatastoreAdminV1CommonMetadataState | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1beta1CommonMetadataFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1beta1CommonMetadataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			operationType: new FormControl<GoogleDatastoreAdminV1beta1CommonMetadataOperationType | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleDatastoreAdminV1CommonMetadataState | null | undefined>(undefined),
		});

	}

	export enum GoogleDatastoreAdminV1beta1CommonMetadataOperationType { OPERATION_TYPE_UNSPECIFIED = 'OPERATION_TYPE_UNSPECIFIED', EXPORT_ENTITIES = 'EXPORT_ENTITIES', IMPORT_ENTITIES = 'IMPORT_ENTITIES' }


	/** Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz'] */
	export interface GoogleDatastoreAdminV1beta1EntityFilter {

		/** If empty, then this represents all kinds. */
		kinds?: Array<string>;

		/** An empty list represents all namespaces. This is the preferred usage for projects that don't use namespaces. An empty string element represents the default namespace. This should be used if the project has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique. */
		namespaceIds?: Array<string>;
	}

	/** Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz'] */
	export interface GoogleDatastoreAdminV1beta1EntityFilterFormProperties {
	}
	export function CreateGoogleDatastoreAdminV1beta1EntityFilterFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1beta1EntityFilterFormProperties>({
		});

	}


	/** Metadata for ExportEntities operations. */
	export interface GoogleDatastoreAdminV1beta1ExportEntitiesMetadata {

		/** Metadata common to all Datastore Admin operations. */
		common?: GoogleDatastoreAdminV1beta1CommonMetadata;

		/** Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz'] */
		entityFilter?: GoogleDatastoreAdminV1beta1EntityFilter;

		/** Location for the export metadata and data files. This will be the same value as the google.datastore.admin.v1beta1.ExportEntitiesRequest.output_url_prefix field. The final output location is provided in google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url. */
		outputUrlPrefix?: string | null;

		/** Measures the progress of a particular metric. */
		progressBytes?: GoogleDatastoreAdminV1beta1Progress;

		/** Measures the progress of a particular metric. */
		progressEntities?: GoogleDatastoreAdminV1beta1Progress;
	}

	/** Metadata for ExportEntities operations. */
	export interface GoogleDatastoreAdminV1beta1ExportEntitiesMetadataFormProperties {

		/** Location for the export metadata and data files. This will be the same value as the google.datastore.admin.v1beta1.ExportEntitiesRequest.output_url_prefix field. The final output location is provided in google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url. */
		outputUrlPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1beta1ExportEntitiesMetadataFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1beta1ExportEntitiesMetadataFormProperties>({
			outputUrlPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Measures the progress of a particular metric. */
	export interface GoogleDatastoreAdminV1beta1Progress {

		/** The amount of work that has been completed. Note that this may be greater than work_estimated. */
		workCompleted?: string | null;

		/** An estimate of how much work needs to be performed. May be zero if the work estimate is unavailable. */
		workEstimated?: string | null;
	}

	/** Measures the progress of a particular metric. */
	export interface GoogleDatastoreAdminV1beta1ProgressFormProperties {

		/** The amount of work that has been completed. Note that this may be greater than work_estimated. */
		workCompleted: FormControl<string | null | undefined>,

		/** An estimate of how much work needs to be performed. May be zero if the work estimate is unavailable. */
		workEstimated: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1beta1ProgressFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1beta1ProgressFormProperties>({
			workCompleted: new FormControl<string | null | undefined>(undefined),
			workEstimated: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities. */
	export interface GoogleDatastoreAdminV1beta1ExportEntitiesRequest {

		/** Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz'] */
		entityFilter?: GoogleDatastoreAdminV1beta1EntityFilter;

		/** Client-assigned labels. */
		labels?: {[id: string]: string };

		/** Location for the export metadata and data files. The full resource URL of the external storage location. Currently, only Google Cloud Storage is supported. So output_url_prefix should be of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Cloud Storage bucket and `NAMESPACE_PATH` is an optional Cloud Storage namespace path (this is not a Cloud Datastore namespace). For more information about Cloud Storage namespace paths, see [Object name considerations](https://cloud.google.com/storage/docs/naming#object-considerations). The resulting files will be nested deeper than the specified URL prefix. The final output URL will be provided in the google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url field. That value should be used for subsequent ImportEntities operations. By nesting the data files deeper, the same Cloud Storage bucket can be used in multiple ExportEntities operations without conflict. */
		outputUrlPrefix?: string | null;
	}

	/** The request for google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities. */
	export interface GoogleDatastoreAdminV1beta1ExportEntitiesRequestFormProperties {

		/** Client-assigned labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Location for the export metadata and data files. The full resource URL of the external storage location. Currently, only Google Cloud Storage is supported. So output_url_prefix should be of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Cloud Storage bucket and `NAMESPACE_PATH` is an optional Cloud Storage namespace path (this is not a Cloud Datastore namespace). For more information about Cloud Storage namespace paths, see [Object name considerations](https://cloud.google.com/storage/docs/naming#object-considerations). The resulting files will be nested deeper than the specified URL prefix. The final output URL will be provided in the google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url field. That value should be used for subsequent ImportEntities operations. By nesting the data files deeper, the same Cloud Storage bucket can be used in multiple ExportEntities operations without conflict. */
		outputUrlPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1beta1ExportEntitiesRequestFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1beta1ExportEntitiesRequestFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			outputUrlPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities. */
	export interface GoogleDatastoreAdminV1beta1ExportEntitiesResponse {

		/** Location of the output metadata file. This can be used to begin an import into Cloud Datastore (this project or another project). See google.datastore.admin.v1beta1.ImportEntitiesRequest.input_url. Only present if the operation completed successfully. */
		outputUrl?: string | null;
	}

	/** The response for google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities. */
	export interface GoogleDatastoreAdminV1beta1ExportEntitiesResponseFormProperties {

		/** Location of the output metadata file. This can be used to begin an import into Cloud Datastore (this project or another project). See google.datastore.admin.v1beta1.ImportEntitiesRequest.input_url. Only present if the operation completed successfully. */
		outputUrl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1beta1ExportEntitiesResponseFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1beta1ExportEntitiesResponseFormProperties>({
			outputUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for ImportEntities operations. */
	export interface GoogleDatastoreAdminV1beta1ImportEntitiesMetadata {

		/** Metadata common to all Datastore Admin operations. */
		common?: GoogleDatastoreAdminV1beta1CommonMetadata;

		/** Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz'] */
		entityFilter?: GoogleDatastoreAdminV1beta1EntityFilter;

		/** The location of the import metadata file. This will be the same value as the google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url field. */
		inputUrl?: string | null;

		/** Measures the progress of a particular metric. */
		progressBytes?: GoogleDatastoreAdminV1beta1Progress;

		/** Measures the progress of a particular metric. */
		progressEntities?: GoogleDatastoreAdminV1beta1Progress;
	}

	/** Metadata for ImportEntities operations. */
	export interface GoogleDatastoreAdminV1beta1ImportEntitiesMetadataFormProperties {

		/** The location of the import metadata file. This will be the same value as the google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url field. */
		inputUrl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1beta1ImportEntitiesMetadataFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1beta1ImportEntitiesMetadataFormProperties>({
			inputUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for google.datastore.admin.v1beta1.DatastoreAdmin.ImportEntities. */
	export interface GoogleDatastoreAdminV1beta1ImportEntitiesRequest {

		/** Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz'] */
		entityFilter?: GoogleDatastoreAdminV1beta1EntityFilter;

		/** The full resource URL of the external storage location. Currently, only Google Cloud Storage is supported. So input_url should be of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]/OVERALL_EXPORT_METADATA_FILE`, where `BUCKET_NAME` is the name of the Cloud Storage bucket, `NAMESPACE_PATH` is an optional Cloud Storage namespace path (this is not a Cloud Datastore namespace), and `OVERALL_EXPORT_METADATA_FILE` is the metadata file written by the ExportEntities operation. For more information about Cloud Storage namespace paths, see [Object name considerations](https://cloud.google.com/storage/docs/naming#object-considerations). For more information, see google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url. */
		inputUrl?: string | null;

		/** Client-assigned labels. */
		labels?: {[id: string]: string };
	}

	/** The request for google.datastore.admin.v1beta1.DatastoreAdmin.ImportEntities. */
	export interface GoogleDatastoreAdminV1beta1ImportEntitiesRequestFormProperties {

		/** The full resource URL of the external storage location. Currently, only Google Cloud Storage is supported. So input_url should be of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]/OVERALL_EXPORT_METADATA_FILE`, where `BUCKET_NAME` is the name of the Cloud Storage bucket, `NAMESPACE_PATH` is an optional Cloud Storage namespace path (this is not a Cloud Datastore namespace), and `OVERALL_EXPORT_METADATA_FILE` is the metadata file written by the ExportEntities operation. For more information about Cloud Storage namespace paths, see [Object name considerations](https://cloud.google.com/storage/docs/naming#object-considerations). For more information, see google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url. */
		inputUrl: FormControl<string | null | undefined>,

		/** Client-assigned labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleDatastoreAdminV1beta1ImportEntitiesRequestFormGroup() {
		return new FormGroup<GoogleDatastoreAdminV1beta1ImportEntitiesRequestFormProperties>({
			inputUrl: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
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
	export interface StatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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
		 * Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
		 * Post v1beta1/projects/{projectId}:export
		 * @param {string} projectId Project ID against which to make the request.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Datastore_projects_export(projectId: string, requestBody: GoogleDatastoreAdminV1beta1ExportEntitiesRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + ':export', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.
		 * Post v1beta1/projects/{projectId}:import
		 * @param {string} projectId Project ID against which to make the request.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Datastore_projects_import(projectId: string, requestBody: GoogleDatastoreAdminV1beta1ImportEntitiesRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + ':import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

