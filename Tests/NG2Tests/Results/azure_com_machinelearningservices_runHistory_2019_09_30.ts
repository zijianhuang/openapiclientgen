import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Details of an Artifact. */
	export interface Artifact {

		/** The identifier of an Artifact. Format of ArtifactId - {Origin}/{Container}/{Path}. */
		artifactId?: string | null;

		/**
		 * The name of container. Artifacts can be grouped by container.
		 * Required
		 */
		container: string;

		/** The Date and Time at which the Artifact is created. The DateTime is in UTC. */
		createdTime?: Date | null;
		dataPath?: DataPath;

		/** The Etag of the Artifact. */
		etag?: string | null;

		/**
		 * The origin of the Artifact creation request. Available origins are 'ExperimentRun', 'LocalUpload', 'WebUpload', 'Dataset' and 'Unknown'.
		 * Required
		 */
		origin: string;

		/**
		 * The path to the Artifact in a container.
		 * Required
		 */
		path: string;
	}

	/** Details of an Artifact. */
	export interface ArtifactFormProperties {

		/** The identifier of an Artifact. Format of ArtifactId - {Origin}/{Container}/{Path}. */
		artifactId: FormControl<string | null | undefined>,

		/**
		 * The name of container. Artifacts can be grouped by container.
		 * Required
		 */
		container: FormControl<string | null | undefined>,

		/** The Date and Time at which the Artifact is created. The DateTime is in UTC. */
		createdTime: FormControl<Date | null | undefined>,

		/** The Etag of the Artifact. */
		etag: FormControl<string | null | undefined>,

		/**
		 * The origin of the Artifact creation request. Available origins are 'ExperimentRun', 'LocalUpload', 'WebUpload', 'Dataset' and 'Unknown'.
		 * Required
		 */
		origin: FormControl<string | null | undefined>,

		/**
		 * The path to the Artifact in a container.
		 * Required
		 */
		path: FormControl<string | null | undefined>,
	}
	export function CreateArtifactFormGroup() {
		return new FormGroup<ArtifactFormProperties>({
			artifactId: new FormControl<string | null | undefined>(undefined),
			container: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdTime: new FormControl<Date | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DataPath {
		dataStoreName?: string | null;
		relativePath?: string | null;
		sqlDataPath?: SqlDataPath;
	}
	export interface DataPathFormProperties {
		dataStoreName: FormControl<string | null | undefined>,
		relativePath: FormControl<string | null | undefined>,
	}
	export function CreateDataPathFormGroup() {
		return new FormGroup<DataPathFormProperties>({
			dataStoreName: new FormControl<string | null | undefined>(undefined),
			relativePath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SqlDataPath {
		sqlQuery?: string | null;
		sqlStoredProcedureName?: string | null;
		sqlStoredProcedureParams?: Array<StoredProcedureParameter>;
		sqlTableName?: string | null;
	}
	export interface SqlDataPathFormProperties {
		sqlQuery: FormControl<string | null | undefined>,
		sqlStoredProcedureName: FormControl<string | null | undefined>,
		sqlTableName: FormControl<string | null | undefined>,
	}
	export function CreateSqlDataPathFormGroup() {
		return new FormGroup<SqlDataPathFormProperties>({
			sqlQuery: new FormControl<string | null | undefined>(undefined),
			sqlStoredProcedureName: new FormControl<string | null | undefined>(undefined),
			sqlTableName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StoredProcedureParameter {
		name?: string | null;
		type?: StoredProcedureParameterType | null;
		value?: string | null;
	}
	export interface StoredProcedureParameterFormProperties {
		name: FormControl<string | null | undefined>,
		type: FormControl<StoredProcedureParameterType | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateStoredProcedureParameterFormGroup() {
		return new FormGroup<StoredProcedureParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<StoredProcedureParameterType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StoredProcedureParameterType { String = 'String', Int = 'Int', Decimal = 'Decimal', Guid = 'Guid', Boolean = 'Boolean', Date = 'Date' }


	/** Details of an Artifact Content Information. */
	export interface ArtifactContentInformation {

		/** The name of container. Artifacts can be grouped by container. */
		container?: string | null;

		/** The URI of the content. */
		contentUri?: string | null;

		/** The origin of the Artifact creation request. Available origins are 'ExperimentRun', 'LocalUpload', 'WebUpload', 'Dataset', 'ComputeRecord', 'Metric', and 'Unknown'. */
		origin?: string | null;

		/** The path to the Artifact in a container. */
		path?: string | null;
	}

	/** Details of an Artifact Content Information. */
	export interface ArtifactContentInformationFormProperties {

		/** The name of container. Artifacts can be grouped by container. */
		container: FormControl<string | null | undefined>,

		/** The URI of the content. */
		contentUri: FormControl<string | null | undefined>,

		/** The origin of the Artifact creation request. Available origins are 'ExperimentRun', 'LocalUpload', 'WebUpload', 'Dataset', 'ComputeRecord', 'Metric', and 'Unknown'. */
		origin: FormControl<string | null | undefined>,

		/** The path to the Artifact in a container. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateArtifactContentInformationFormGroup() {
		return new FormGroup<ArtifactContentInformationFormProperties>({
			container: new FormControl<string | null | undefined>(undefined),
			contentUri: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of an Artifact Path. */
	export interface ArtifactPath {

		/**
		 * The path to the Artifact in a container.
		 * Required
		 */
		path: string;
	}

	/** Details of an Artifact Path. */
	export interface ArtifactPathFormProperties {

		/**
		 * The path to the Artifact in a container.
		 * Required
		 */
		path: FormControl<string | null | undefined>,
	}
	export function CreateArtifactPathFormGroup() {
		return new FormGroup<ArtifactPathFormProperties>({
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains list of Artifact Paths. */
	export interface ArtifactPathList {

		/**
		 * List of Artifact Paths.
		 * Required
		 */
		paths: Array<ArtifactPath>;
	}

	/** Contains list of Artifact Paths. */
	export interface ArtifactPathListFormProperties {
	}
	export function CreateArtifactPathListFormGroup() {
		return new FormGroup<ArtifactPathListFormProperties>({
		});

	}


	/** Base event is the envelope used to post event data to the Event controller */
	export interface BaseEvent {
		data?: string | null;
		name?: string | null;
		timestamp?: Date | null;
	}

	/** Base event is the envelope used to post event data to the Event controller */
	export interface BaseEventFormProperties {
		data: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateBaseEventFormGroup() {
		return new FormGroup<BaseEventFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface BatchAddOrModifyRunRequest {
		runs?: Array<CreateRun>;
	}
	export interface BatchAddOrModifyRunRequestFormProperties {
	}
	export function CreateBatchAddOrModifyRunRequestFormGroup() {
		return new FormGroup<BatchAddOrModifyRunRequestFormProperties>({
		});

	}

	export interface CreateRun {
		cancelUri?: string | null;
		createdFrom?: CreatedFrom;
		dataContainerId?: string | null;
		description?: string | null;
		diagnosticsUri?: string | null;

		/** The end time of the run in UTC. */
		endTimeUtc?: Date | null;
		heartbeatEnabled?: boolean | null;
		hidden?: boolean | null;
		name?: string | null;
		options?: RunOptions;

		/** The parent of the run if the run is hierarchical; otherwise, Null. */
		parentRunId?: string | null;
		properties?: {[id: string]: string };
		runDefinition?: string | null;

		/** The identifier for the run. Run IDs must be less than 256 characters and contain only alphanumeric characters with dashes and underscores. */
		runId?: string | null;
		runType?: string | null;
		scriptName?: string | null;

		/** The start time of the run in UTC. */
		startTimeUtc?: Date | null;

		/** The status of the run. The Status string value maps to the RunStatus Enum. */
		status?: string | null;
		tags?: {[id: string]: string };
		target?: string | null;
	}
	export interface CreateRunFormProperties {
		cancelUri: FormControl<string | null | undefined>,
		dataContainerId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		diagnosticsUri: FormControl<string | null | undefined>,

		/** The end time of the run in UTC. */
		endTimeUtc: FormControl<Date | null | undefined>,
		heartbeatEnabled: FormControl<boolean | null | undefined>,
		hidden: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** The parent of the run if the run is hierarchical; otherwise, Null. */
		parentRunId: FormControl<string | null | undefined>,
		properties: FormControl<{[id: string]: string } | null | undefined>,
		runDefinition: FormControl<string | null | undefined>,

		/** The identifier for the run. Run IDs must be less than 256 characters and contain only alphanumeric characters with dashes and underscores. */
		runId: FormControl<string | null | undefined>,
		runType: FormControl<string | null | undefined>,
		scriptName: FormControl<string | null | undefined>,

		/** The start time of the run in UTC. */
		startTimeUtc: FormControl<Date | null | undefined>,

		/** The status of the run. The Status string value maps to the RunStatus Enum. */
		status: FormControl<string | null | undefined>,
		tags: FormControl<{[id: string]: string } | null | undefined>,
		target: FormControl<string | null | undefined>,
	}
	export function CreateCreateRunFormGroup() {
		return new FormGroup<CreateRunFormProperties>({
			cancelUri: new FormControl<string | null | undefined>(undefined),
			dataContainerId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			diagnosticsUri: new FormControl<string | null | undefined>(undefined),
			endTimeUtc: new FormControl<Date | null | undefined>(undefined),
			heartbeatEnabled: new FormControl<boolean | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentRunId: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			runDefinition: new FormControl<string | null | undefined>(undefined),
			runId: new FormControl<string | null | undefined>(undefined),
			runType: new FormControl<string | null | undefined>(undefined),
			scriptName: new FormControl<string | null | undefined>(undefined),
			startTimeUtc: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatedFrom {
		location?: string | null;
		locationType?: CreatedFromLocationType | null;
		type?: CreatedFromType | null;
	}
	export interface CreatedFromFormProperties {
		location: FormControl<string | null | undefined>,
		locationType: FormControl<CreatedFromLocationType | null | undefined>,
		type: FormControl<CreatedFromType | null | undefined>,
	}
	export function CreateCreatedFromFormGroup() {
		return new FormGroup<CreatedFromFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			locationType: new FormControl<CreatedFromLocationType | null | undefined>(undefined),
			type: new FormControl<CreatedFromType | null | undefined>(undefined),
		});

	}

	export enum CreatedFromLocationType { ArtifactId = 'ArtifactId' }

	export enum CreatedFromType { Notebook = 'Notebook' }

	export interface RunOptions {
		generateDataContainerIdIfNotSpecified?: boolean | null;
	}
	export interface RunOptionsFormProperties {
		generateDataContainerIdIfNotSpecified: FormControl<boolean | null | undefined>,
	}
	export function CreateRunOptionsFormGroup() {
		return new FormGroup<RunOptionsFormProperties>({
			generateDataContainerIdIfNotSpecified: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BatchAddOrModifyRunResult {
		errors?: {[id: string]: ErrorResponse };
		runs?: {[id: string]: Run };
	}
	export interface BatchAddOrModifyRunResultFormProperties {
		errors: FormControl<{[id: string]: ErrorResponse } | null | undefined>,
		runs: FormControl<{[id: string]: Run } | null | undefined>,
	}
	export function CreateBatchAddOrModifyRunResultFormGroup() {
		return new FormGroup<BatchAddOrModifyRunResultFormProperties>({
			errors: new FormControl<{[id: string]: ErrorResponse } | null | undefined>(undefined),
			runs: new FormControl<{[id: string]: Run } | null | undefined>(undefined),
		});

	}


	/** The error response. */
	export interface ErrorResponse {

		/** Dictionary containing correlation details for the error. */
		correlation?: {[id: string]: string };

		/** The hosting environment. */
		environment?: string | null;

		/** The root error. */
		error?: RootError;

		/** The Azure region. */
		location?: string | null;

		/** The time in UTC. */
		time?: Date | null;
	}

	/** The error response. */
	export interface ErrorResponseFormProperties {

		/** Dictionary containing correlation details for the error. */
		correlation: FormControl<{[id: string]: string } | null | undefined>,

		/** The hosting environment. */
		environment: FormControl<string | null | undefined>,

		/** The Azure region. */
		location: FormControl<string | null | undefined>,

		/** The time in UTC. */
		time: FormControl<Date | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			correlation: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			environment: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The root error. */
	export interface RootError {

		/** The service-defined error code. Supported error codes: ServiceError, UserError, ValidationError, AzureStorageError, TransientError, RequestThrottled. */
		code?: string | null;

		/** The related errors that occurred during the request. */
		details?: Array<ErrorDetails>;

		/** A nested structure of errors. */
		innerError?: InnerErrorResponse;

		/** A human-readable representation of the error. */
		message?: string | null;

		/** The target of the error (e.g., the name of the property in error). */
		target?: string | null;
	}

	/** The root error. */
	export interface RootErrorFormProperties {

		/** The service-defined error code. Supported error codes: ServiceError, UserError, ValidationError, AzureStorageError, TransientError, RequestThrottled. */
		code: FormControl<string | null | undefined>,

		/** A human-readable representation of the error. */
		message: FormControl<string | null | undefined>,

		/** The target of the error (e.g., the name of the property in error). */
		target: FormControl<string | null | undefined>,
	}
	export function CreateRootErrorFormGroup() {
		return new FormGroup<RootErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The error details. */
	export interface ErrorDetails {

		/** The error code. */
		code?: string | null;

		/** The error message. */
		message?: string | null;

		/** The target of the error (e.g., the name of the property in error). */
		target?: string | null;
	}

	/** The error details. */
	export interface ErrorDetailsFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,

		/** The target of the error (e.g., the name of the property in error). */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A nested structure of errors. */
	export interface InnerErrorResponse {

		/** The error code. */
		code?: string | null;

		/** A nested structure of errors. */
		innerError?: InnerErrorResponse;
	}

	/** A nested structure of errors. */
	export interface InnerErrorResponseFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,
	}
	export function CreateInnerErrorResponseFormGroup() {
		return new FormGroup<InnerErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The definition of a Run. */
	export interface Run {
		cancelUri?: string | null;
		createdBy?: CreatedBy;
		createdFrom?: CreatedFrom;

		/** The time the run was created in UTC. */
		createdUtc?: Date | null;
		dataContainerId?: string | null;
		description?: string | null;
		diagnosticsUri?: string | null;

		/** The end time of the run in UTC. */
		endTimeUtc?: Date | null;

		/** The error response. */
		error?: ErrorResponse;

		/** The Id of the experiment that created this run. */
		experimentId?: string | null;
		heartbeatEnabled?: boolean | null;
		hidden?: boolean | null;
		name?: string | null;
		options?: RunOptions;

		/** The parent of the run if the run is hierarchical; otherwise, Null. */
		parentRunId?: string | null;
		properties?: {[id: string]: string };

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		revision?: number | null;
		rootRunId?: string | null;
		runDefinition?: string | null;

		/** The identifier for the run. Run IDs must be less than 256 characters and contain only alphanumeric characters with dashes and underscores. */
		runId?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		runNumber?: number | null;
		runType?: string | null;
		scriptName?: string | null;

		/** The start time of the run in UTC. */
		startTimeUtc?: Date | null;

		/** The status of the run. The Status string value maps to the RunStatus Enum. */
		status?: string | null;
		tags?: {[id: string]: string };
		target?: string | null;

		/** A token used for authenticating a run. */
		token?: string | null;

		/** The Token expiration time in UTC. */
		tokenExpiryTimeUtc?: Date | null;

		/** The Id of the user that created the run. */
		userId?: string | null;

		/** A list of warnings that occurred during the run. */
		warnings?: Array<RunDetailsWarning>;
	}

	/** The definition of a Run. */
	export interface RunFormProperties {
		cancelUri: FormControl<string | null | undefined>,

		/** The time the run was created in UTC. */
		createdUtc: FormControl<Date | null | undefined>,
		dataContainerId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		diagnosticsUri: FormControl<string | null | undefined>,

		/** The end time of the run in UTC. */
		endTimeUtc: FormControl<Date | null | undefined>,

		/** The Id of the experiment that created this run. */
		experimentId: FormControl<string | null | undefined>,
		heartbeatEnabled: FormControl<boolean | null | undefined>,
		hidden: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** The parent of the run if the run is hierarchical; otherwise, Null. */
		parentRunId: FormControl<string | null | undefined>,
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		revision: FormControl<number | null | undefined>,
		rootRunId: FormControl<string | null | undefined>,
		runDefinition: FormControl<string | null | undefined>,

		/** The identifier for the run. Run IDs must be less than 256 characters and contain only alphanumeric characters with dashes and underscores. */
		runId: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		runNumber: FormControl<number | null | undefined>,
		runType: FormControl<string | null | undefined>,
		scriptName: FormControl<string | null | undefined>,

		/** The start time of the run in UTC. */
		startTimeUtc: FormControl<Date | null | undefined>,

		/** The status of the run. The Status string value maps to the RunStatus Enum. */
		status: FormControl<string | null | undefined>,
		tags: FormControl<{[id: string]: string } | null | undefined>,
		target: FormControl<string | null | undefined>,

		/** A token used for authenticating a run. */
		token: FormControl<string | null | undefined>,

		/** The Token expiration time in UTC. */
		tokenExpiryTimeUtc: FormControl<Date | null | undefined>,

		/** The Id of the user that created the run. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateRunFormGroup() {
		return new FormGroup<RunFormProperties>({
			cancelUri: new FormControl<string | null | undefined>(undefined),
			createdUtc: new FormControl<Date | null | undefined>(undefined),
			dataContainerId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			diagnosticsUri: new FormControl<string | null | undefined>(undefined),
			endTimeUtc: new FormControl<Date | null | undefined>(undefined),
			experimentId: new FormControl<string | null | undefined>(undefined),
			heartbeatEnabled: new FormControl<boolean | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentRunId: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
			rootRunId: new FormControl<string | null | undefined>(undefined),
			runDefinition: new FormControl<string | null | undefined>(undefined),
			runId: new FormControl<string | null | undefined>(undefined),
			runNumber: new FormControl<number | null | undefined>(undefined),
			runType: new FormControl<string | null | undefined>(undefined),
			scriptName: new FormControl<string | null | undefined>(undefined),
			startTimeUtc: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			tokenExpiryTimeUtc: new FormControl<Date | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatedBy {

		/**
		 * A user's full name or a service principal's app ID.
		 * This is PII and should never be logged.
		 */
		userName?: string | null;

		/**
		 * A user or service principal's object ID.
		 * This is PII and should never be logged.
		 */
		userObjectId?: string | null;

		/** A user or service principal's tenant ID. */
		userTenantId?: string | null;
	}
	export interface CreatedByFormProperties {

		/**
		 * A user's full name or a service principal's app ID.
		 * This is PII and should never be logged.
		 */
		userName: FormControl<string | null | undefined>,

		/**
		 * A user or service principal's object ID.
		 * This is PII and should never be logged.
		 */
		userObjectId: FormControl<string | null | undefined>,

		/** A user or service principal's tenant ID. */
		userTenantId: FormControl<string | null | undefined>,
	}
	export function CreateCreatedByFormGroup() {
		return new FormGroup<CreatedByFormProperties>({
			userName: new FormControl<string | null | undefined>(undefined),
			userObjectId: new FormControl<string | null | undefined>(undefined),
			userTenantId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RunDetailsWarning {
		message?: string | null;
		source?: string | null;
	}
	export interface RunDetailsWarningFormProperties {
		message: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
	}
	export function CreateRunDetailsWarningFormGroup() {
		return new FormGroup<RunDetailsWarningFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results of the Batch Artifact Content Information request. */
	export interface BatchArtifactContentInformationResult {

		/** Artifact Content Information details of the Artifact Ids requested. */
		artifactContentInformation?: {[id: string]: ArtifactContentInformation };

		/** Artifact details of the Artifact Ids requested. */
		artifacts?: {[id: string]: Artifact };

		/** Errors occurred while fetching the requested Artifact Ids. */
		errors?: {[id: string]: ErrorResponse };
	}

	/** Results of the Batch Artifact Content Information request. */
	export interface BatchArtifactContentInformationResultFormProperties {

		/** Artifact Content Information details of the Artifact Ids requested. */
		artifactContentInformation: FormControl<{[id: string]: ArtifactContentInformation } | null | undefined>,

		/** Artifact details of the Artifact Ids requested. */
		artifacts: FormControl<{[id: string]: Artifact } | null | undefined>,

		/** Errors occurred while fetching the requested Artifact Ids. */
		errors: FormControl<{[id: string]: ErrorResponse } | null | undefined>,
	}
	export function CreateBatchArtifactContentInformationResultFormGroup() {
		return new FormGroup<BatchArtifactContentInformationResultFormProperties>({
			artifactContentInformation: new FormControl<{[id: string]: ArtifactContentInformation } | null | undefined>(undefined),
			artifacts: new FormControl<{[id: string]: Artifact } | null | undefined>(undefined),
			errors: new FormControl<{[id: string]: ErrorResponse } | null | undefined>(undefined),
		});

	}

	export interface BatchEventCommand {
		events?: Array<BaseEvent>;
	}
	export interface BatchEventCommandFormProperties {
	}
	export function CreateBatchEventCommandFormGroup() {
		return new FormGroup<BatchEventCommandFormProperties>({
		});

	}

	export interface BatchEventCommandResult {
		errors?: Array<KeyValuePairBaseEventErrorResponse>;
	}
	export interface BatchEventCommandResultFormProperties {
	}
	export function CreateBatchEventCommandResultFormGroup() {
		return new FormGroup<BatchEventCommandResultFormProperties>({
		});

	}

	export interface KeyValuePairBaseEventErrorResponse {

		/** Base event is the envelope used to post event data to the Event controller */
		key?: BaseEvent;

		/** The error response. */
		value?: ErrorResponse;
	}
	export interface KeyValuePairBaseEventErrorResponseFormProperties {
	}
	export function CreateKeyValuePairBaseEventErrorResponseFormGroup() {
		return new FormGroup<KeyValuePairBaseEventErrorResponseFormProperties>({
		});

	}

	export interface BatchMetric {
		values?: Array<Metric>;
	}
	export interface BatchMetricFormProperties {
	}
	export function CreateBatchMetricFormGroup() {
		return new FormGroup<BatchMetricFormProperties>({
		});

	}

	export interface Metric {
		cells?: Array<string>;
		createdUtc?: Date | null;
		dataContainerId?: string | null;
		dataLocation?: string | null;
		description?: string | null;
		label?: string | null;
		metricId?: string | null;
		metricType?: string | null;
		name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numCells?: number | null;
		schema?: MetricSchema;
	}
	export interface MetricFormProperties {
		createdUtc: FormControl<Date | null | undefined>,
		dataContainerId: FormControl<string | null | undefined>,
		dataLocation: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		label: FormControl<string | null | undefined>,
		metricId: FormControl<string | null | undefined>,
		metricType: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numCells: FormControl<number | null | undefined>,
	}
	export function CreateMetricFormGroup() {
		return new FormGroup<MetricFormProperties>({
			createdUtc: new FormControl<Date | null | undefined>(undefined),
			dataContainerId: new FormControl<string | null | undefined>(undefined),
			dataLocation: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			metricId: new FormControl<string | null | undefined>(undefined),
			metricType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			numCells: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MetricSchema {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numProperties?: number | null;
		properties?: Array<MetricSchemaProperty>;
	}
	export interface MetricSchemaFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numProperties: FormControl<number | null | undefined>,
	}
	export function CreateMetricSchemaFormGroup() {
		return new FormGroup<MetricSchemaFormProperties>({
			numProperties: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MetricSchemaProperty {
		name?: string | null;
		propertyId?: string | null;
		type?: string | null;
	}
	export interface MetricSchemaPropertyFormProperties {
		name: FormControl<string | null | undefined>,
		propertyId: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateMetricSchemaPropertyFormGroup() {
		return new FormGroup<MetricSchemaPropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			propertyId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteTagsCommand {
		tags?: Array<string>;
	}
	export interface DeleteTagsCommandFormProperties {
	}
	export function CreateDeleteTagsCommandFormGroup() {
		return new FormGroup<DeleteTagsCommandFormProperties>({
		});

	}

	export interface Experiment {
		archivedTime?: Date | null;
		createdUtc?: Date | null;
		description?: string | null;
		experimentId?: string | null;
		latestCreatedRunCreatedUtc?: Date | null;
		latestCreatedRunId?: string | null;
		name?: string | null;
		tags?: {[id: string]: string };
	}
	export interface ExperimentFormProperties {
		archivedTime: FormControl<Date | null | undefined>,
		createdUtc: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		experimentId: FormControl<string | null | undefined>,
		latestCreatedRunCreatedUtc: FormControl<Date | null | undefined>,
		latestCreatedRunId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateExperimentFormGroup() {
		return new FormGroup<ExperimentFormProperties>({
			archivedTime: new FormControl<Date | null | undefined>(undefined),
			createdUtc: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			experimentId: new FormControl<string | null | undefined>(undefined),
			latestCreatedRunCreatedUtc: new FormControl<Date | null | undefined>(undefined),
			latestCreatedRunId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface ModifyExperiment {
		archive?: boolean | null;
		description?: string | null;
		tags?: {[id: string]: string };
	}
	export interface ModifyExperimentFormProperties {
		archive: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateModifyExperimentFormGroup() {
		return new FormGroup<ModifyExperimentFormProperties>({
			archive: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A paginated list of ArtifactContentInformations. */
	export interface PaginatedArtifactContentInformationList {

		/** The token used in retrieving the next page.  If null, there are no additional pages. */
		continuationToken?: string | null;

		/** The link to the next page constructed using the continuationToken.  If null, there are no additional pages. */
		nextLink?: string | null;

		/** An array of objects of type ArtifactContentInformation. */
		value?: Array<ArtifactContentInformation>;
	}

	/** A paginated list of ArtifactContentInformations. */
	export interface PaginatedArtifactContentInformationListFormProperties {

		/** The token used in retrieving the next page.  If null, there are no additional pages. */
		continuationToken: FormControl<string | null | undefined>,

		/** The link to the next page constructed using the continuationToken.  If null, there are no additional pages. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePaginatedArtifactContentInformationListFormGroup() {
		return new FormGroup<PaginatedArtifactContentInformationListFormProperties>({
			continuationToken: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A paginated list of Artifacts. */
	export interface PaginatedArtifactList {

		/** The token used in retrieving the next page.  If null, there are no additional pages. */
		continuationToken?: string | null;

		/** The link to the next page constructed using the continuationToken.  If null, there are no additional pages. */
		nextLink?: string | null;

		/** An array of objects of type Artifact. */
		value?: Array<Artifact>;
	}

	/** A paginated list of Artifacts. */
	export interface PaginatedArtifactListFormProperties {

		/** The token used in retrieving the next page.  If null, there are no additional pages. */
		continuationToken: FormControl<string | null | undefined>,

		/** The link to the next page constructed using the continuationToken.  If null, there are no additional pages. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePaginatedArtifactListFormGroup() {
		return new FormGroup<PaginatedArtifactListFormProperties>({
			continuationToken: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A paginated list of Experiments. */
	export interface PaginatedExperimentList {

		/** The token used in retrieving the next page.  If null, there are no additional pages. */
		continuationToken?: string | null;

		/** The link to the next page constructed using the continuationToken.  If null, there are no additional pages. */
		nextLink?: string | null;

		/** An array of objects of type Experiment. */
		value?: Array<Experiment>;
	}

	/** A paginated list of Experiments. */
	export interface PaginatedExperimentListFormProperties {

		/** The token used in retrieving the next page.  If null, there are no additional pages. */
		continuationToken: FormControl<string | null | undefined>,

		/** The link to the next page constructed using the continuationToken.  If null, there are no additional pages. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePaginatedExperimentListFormGroup() {
		return new FormGroup<PaginatedExperimentListFormProperties>({
			continuationToken: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A paginated list of Runs. */
	export interface PaginatedRunList {

		/** The token used in retrieving the next page.  If null, there are no additional pages. */
		continuationToken?: string | null;

		/** The link to the next page constructed using the continuationToken.  If null, there are no additional pages. */
		nextLink?: string | null;

		/** An array of objects of type Run. */
		value?: Array<Run>;
	}

	/** A paginated list of Runs. */
	export interface PaginatedRunListFormProperties {

		/** The token used in retrieving the next page.  If null, there are no additional pages. */
		continuationToken: FormControl<string | null | undefined>,

		/** The link to the next page constructed using the continuationToken.  If null, there are no additional pages. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePaginatedRunListFormGroup() {
		return new FormGroup<PaginatedRunListFormProperties>({
			continuationToken: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A paginated list of RunMetrics. */
	export interface PaginatedRunMetricList {

		/** The token used in retrieving the next page.  If null, there are no additional pages. */
		continuationToken?: string | null;

		/** The link to the next page constructed using the continuationToken.  If null, there are no additional pages. */
		nextLink?: string | null;

		/** An array of objects of type RunMetric. */
		value?: Array<RunMetric>;
	}

	/** A paginated list of RunMetrics. */
	export interface PaginatedRunMetricListFormProperties {

		/** The token used in retrieving the next page.  If null, there are no additional pages. */
		continuationToken: FormControl<string | null | undefined>,

		/** The link to the next page constructed using the continuationToken.  If null, there are no additional pages. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePaginatedRunMetricListFormGroup() {
		return new FormGroup<PaginatedRunMetricListFormProperties>({
			continuationToken: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RunMetric {
		cells?: Array<string>;
		createdUtc?: Date | null;
		dataContainerId?: string | null;
		dataLocation?: string | null;
		description?: string | null;
		label?: string | null;
		metricId?: string | null;
		metricType?: string | null;
		name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numCells?: number | null;
		runId?: string | null;
		schema?: MetricSchema;
	}
	export interface RunMetricFormProperties {
		createdUtc: FormControl<Date | null | undefined>,
		dataContainerId: FormControl<string | null | undefined>,
		dataLocation: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		label: FormControl<string | null | undefined>,
		metricId: FormControl<string | null | undefined>,
		metricType: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numCells: FormControl<number | null | undefined>,
		runId: FormControl<string | null | undefined>,
	}
	export function CreateRunMetricFormGroup() {
		return new FormGroup<RunMetricFormProperties>({
			createdUtc: new FormControl<Date | null | undefined>(undefined),
			dataContainerId: new FormControl<string | null | undefined>(undefined),
			dataLocation: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			metricId: new FormControl<string | null | undefined>(undefined),
			metricType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			numCells: new FormControl<number | null | undefined>(undefined),
			runId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The set of supported filters. */
	export interface QueryParams {

		/** The continuation token to use for getting the next set of resources. */
		continuationToken?: string | null;

		/**
		 * Allows for filtering the collection of resources.
		 * The expression specified is evaluated for each resource in the collection, and only items where the expression evaluates to true are included in the response.
		 * See https://docs.microsoft.com/en-us/azure/search/query-odata-filter-orderby-syntax for details on the expression syntax.
		 */
		filter?: string | null;

		/**
		 * The comma separated list of resource properties to use for sorting the requested resources.
		 * Optionally, can be followed by either 'asc' or 'desc'
		 */
		orderBy?: string | null;

		/**
		 * The maximum number of items in the resource collection to be included in the result.
		 * If not specified, all items are returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		top?: number | null;
	}

	/** The set of supported filters. */
	export interface QueryParamsFormProperties {

		/** The continuation token to use for getting the next set of resources. */
		continuationToken: FormControl<string | null | undefined>,

		/**
		 * Allows for filtering the collection of resources.
		 * The expression specified is evaluated for each resource in the collection, and only items where the expression evaluates to true are included in the response.
		 * See https://docs.microsoft.com/en-us/azure/search/query-odata-filter-orderby-syntax for details on the expression syntax.
		 */
		filter: FormControl<string | null | undefined>,

		/**
		 * The comma separated list of resource properties to use for sorting the requested resources.
		 * Optionally, can be followed by either 'asc' or 'desc'
		 */
		orderBy: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items in the resource collection to be included in the result.
		 * If not specified, all items are returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		top: FormControl<number | null | undefined>,
	}
	export function CreateQueryParamsFormGroup() {
		return new FormGroup<QueryParamsFormProperties>({
			continuationToken: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			orderBy: new FormControl<string | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The details of the run. */
	export interface RunDetails {

		/** The end time of the run in UTC. */
		endTimeUtc?: Date | null;

		/** The error response. */
		error?: ErrorResponse;
		logFiles?: {[id: string]: string };

		/** The parent of the run if the run is hierarchical. */
		parentRunId?: string | null;

		/** The properties dictionary for the run. Properties are immutable. */
		properties?: {[id: string]: string };

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		revision?: number | null;

		/** The run definition specification. */
		runDefinition?: string | null;

		/** The identifier for the run. */
		runId?: string | null;

		/** The start time of the run in UTC. */
		startTimeUtc?: Date | null;

		/** The status of the run. The Status string value maps to the RunStatus Enum. */
		status?: string | null;

		/** The tag dictionary for the run. Tags are mutable. */
		tags?: {[id: string]: string };

		/** The name of the compute target where the run is executed. */
		target?: string | null;

		/** A list of warnings that occurred during the run. */
		warnings?: Array<RunDetailsWarning>;
	}

	/** The details of the run. */
	export interface RunDetailsFormProperties {

		/** The end time of the run in UTC. */
		endTimeUtc: FormControl<Date | null | undefined>,
		logFiles: FormControl<{[id: string]: string } | null | undefined>,

		/** The parent of the run if the run is hierarchical. */
		parentRunId: FormControl<string | null | undefined>,

		/** The properties dictionary for the run. Properties are immutable. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		revision: FormControl<number | null | undefined>,

		/** The run definition specification. */
		runDefinition: FormControl<string | null | undefined>,

		/** The identifier for the run. */
		runId: FormControl<string | null | undefined>,

		/** The start time of the run in UTC. */
		startTimeUtc: FormControl<Date | null | undefined>,

		/** The status of the run. The Status string value maps to the RunStatus Enum. */
		status: FormControl<string | null | undefined>,

		/** The tag dictionary for the run. Tags are mutable. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The name of the compute target where the run is executed. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateRunDetailsFormGroup() {
		return new FormGroup<RunDetailsFormProperties>({
			endTimeUtc: new FormControl<Date | null | undefined>(undefined),
			logFiles: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			parentRunId: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
			runDefinition: new FormControl<string | null | undefined>(undefined),
			runId: new FormControl<string | null | undefined>(undefined),
			startTimeUtc: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get details of an Experiment.
		 * Get details of an Experiment with specific Experiment Id.
		 * Get history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experimentids/{experimentId}
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentId The identifier of the experiment.
		 * @return {Experiment} Success
		 */
		Experiments_GetById(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentId: string): Observable<Experiment> {
			return this.http.get<Experiment>(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experimentids/' + (experimentId == null ? '' : encodeURIComponent(experimentId)), {});
		}

		/**
		 * Update details of an Experiment.
		 * Update details of an Experiment with specific Experiment Id.
		 * Patch history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experimentids/{experimentId}
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentId The identifier of the experiment.
		 * @param {ModifyExperiment} requestBody Experiment details which needs to be updated.
		 * @return {Experiment} Success
		 */
		Experiments_Update(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentId: string, requestBody: ModifyExperiment): Observable<Experiment> {
			return this.http.patch<Experiment>(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experimentids/' + (experimentId == null ? '' : encodeURIComponent(experimentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete list of Tags in an Experiment.
		 * Delete list of Tags from a specific Experiment Id.
		 * Delete history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experimentids/{experimentId}/tags
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentId The identifier of the experiment.
		 * @return {Experiment} Success
		 */
		Experiments_DeleteTags(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentId: string): Observable<Experiment> {
			return this.http.delete<Experiment>(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experimentids/' + (experimentId == null ? '' : encodeURIComponent(experimentId)) + '/tags', {});
		}

		/**
		 * Get details of an Experiment.
		 * Get details of an Experiment with specific Experiment name.
		 * Get history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @return {Experiment} The details of the Experiment are returned successfully.
		 */
		Experiments_Get(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string): Observable<Experiment> {
			return this.http.get<Experiment>(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)), {});
		}

		/**
		 * Create an Experiment.
		 * Create a new Experiment.
		 * Post history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @return {Experiment} The Experiment is created successfully.
		 */
		Experiments_Create(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string): Observable<Experiment> {
			return this.http.post<Experiment>(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)), null, {});
		}

		/**
		 * Batch post event data.
		 * Post event data to a specific Run Id.
		 * Post history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/batch/events
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @param {BatchEventCommand} requestBody The batch of Event details.
		 * @return {BatchEventCommandResult} The batch of Events is posted successfully.
		 */
		Events_BatchPost(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string, requestBody: BatchEventCommand): Observable<BatchEventCommandResult> {
			return this.http.post<BatchEventCommandResult>(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/batch/events', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add or Modify a batch of Runs.
		 * Add or Modify a batch of Runs for a given experiment.
		 * Patch history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/batch/runs
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @param {BatchAddOrModifyRunRequest} requestBody The list of requested Run Additions/modifications in an Experiment.
		 * @return {BatchAddOrModifyRunResult} The Batch Runs are added/modified successfully.
		 */
		Runs_BatchAddOrModify(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string, requestBody: BatchAddOrModifyRunRequest): Observable<BatchAddOrModifyRunResult> {
			return this.http.patch<BatchAddOrModifyRunResult>(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/batch/runs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Metric details.
		 * Get Metric details for a specific Metric Id.
		 * Get history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/metrics/{metricId}
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @param {string} metricId The identifier for a Metric.
		 * @return {RunMetric} Success
		 */
		RunMetrics_Get(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string, metricId: string): Observable<RunMetric> {
			return this.http.get<RunMetric>(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/metrics/' + (metricId == null ? '' : encodeURIComponent(metricId)), {});
		}

		/**
		 * Get all Run Metrics for the specific Experiment.
		 * Get all Run Metrics for the specific Experiment with the specified query filters.
		 * Post history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/metrics:query
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @param {RunMetrics_GetByQueryMergeStrategyType} MergeStrategyType The type of merge strategy. Currently supported strategies are:
		 * None - all logged values are returned as individual metrics.
		 * MergeToVector - merges multiple values into a vector of values.
		 * Default - the system determines the behavior.
		 * @param {RunMetrics_GetByQueryMergeStrategyOptions} MergeStrategyOptions Controls behavior of the merge strategy in certain cases; e.g. when a metric is not merged.
		 * @param {string} MergeStrategySettings_Version The strategy settings version.
		 * @param {RunMetrics_GetByQueryMergeStrategySettings_SelectMetrics} MergeStrategySettings_SelectMetrics Defines how to select metrics when merging them together.
		 * @param {QueryParams} requestBody Query Parameters for data sorting and filtering.
		 * @return {PaginatedRunMetricList} The Run Metrics are returned successfully.
		 */
		RunMetrics_GetByQuery(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string, MergeStrategyType: RunMetrics_GetByQueryMergeStrategyType | null | undefined, MergeStrategyOptions: RunMetrics_GetByQueryMergeStrategyOptions | null | undefined, MergeStrategySettings_Version: string | null | undefined, MergeStrategySettings_SelectMetrics: RunMetrics_GetByQueryMergeStrategySettings_SelectMetrics | null | undefined, requestBody: QueryParams): Observable<PaginatedRunMetricList> {
			return this.http.post<PaginatedRunMetricList>(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/metrics:query&MergeStrategyType=' + MergeStrategyType + '&MergeStrategyOptions=' + MergeStrategyOptions + '&MergeStrategySettings_Version=' + (MergeStrategySettings_Version == null ? '' : encodeURIComponent(MergeStrategySettings_Version)) + '&MergeStrategySettings_SelectMetrics=' + MergeStrategySettings_SelectMetrics, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Run details.
		 * Get Run details of a specific Run Id.
		 * Get history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @param {string} runId The identifier of the Run.
		 * @return {Run} The details of the Run are returned successfully.
		 */
		Runs_Get(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string, runId: string): Observable<Run> {
			return this.http.get<Run>(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/runs/' + (runId == null ? '' : encodeURIComponent(runId)), {});
		}

		/**
		 * Add or Modify a Run.
		 * Add a new Run or Modify an existing Run.
		 * Patch history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @param {string} runId The identifier of the Run.
		 * @param {CreateRun} requestBody The requested Run parameter Additions/modifications.
		 * @return {Run} The Run is added/modified successfully.
		 */
		Runs_Patch(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string, runId: string, requestBody: CreateRun): Observable<Run> {
			return this.http.patch<Run>(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/runs/' + (runId == null ? '' : encodeURIComponent(runId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Artifacts in a container.
		 * Get Artifacts in container for a specific Run Id.
		 * Get history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/artifacts
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @param {string} runId The identifier of the Run.
		 * @param {string} continuationToken The Continuation Token.
		 * @return {PaginatedArtifactList} The Artifacts in Container are returned successfully.
		 */
		RunArtifacts_ListInContainer(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string, runId: string, continuationToken: string | null | undefined): Observable<PaginatedArtifactList> {
			return this.http.get<PaginatedArtifactList>(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/runs/' + (runId == null ? '' : encodeURIComponent(runId)) + '/artifacts&continuationToken=' + (continuationToken == null ? '' : encodeURIComponent(continuationToken)), {});
		}

		/**
		 * Get URI of an Artifact.
		 * Get URI of an Artifact for a specific Run Id.
		 * Get history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/artifacts/artifacturi
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @param {string} runId The identifier of the Run.
		 * @param {string} path The Artifact Path.
		 * @return {string} Success
		 */
		RunArtifacts_GetSasUri(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string, runId: string, path: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/runs/' + (runId == null ? '' : encodeURIComponent(runId)) + '/artifacts/artifacturi&path=' + (path == null ? '' : encodeURIComponent(path)), { responseType: 'text' });
		}

		/**
		 * Create a batch of empty Artifacts.
		 * Create a batch of empty Artifacts in a specific Run.
		 * Post history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/artifacts/batch/metadata
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @param {string} runId The identifier of the Run.
		 * @param {ArtifactPathList} requestBody The list of artifact paths.
		 * @return {BatchArtifactContentInformationResult} The Batch Artifacts are created successfully.
		 */
		RunArtifacts_BatchCreateEmptyArtifacts(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string, runId: string, requestBody: ArtifactPathList): Observable<BatchArtifactContentInformationResult> {
			return this.http.post<BatchArtifactContentInformationResult>(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/runs/' + (runId == null ? '' : encodeURIComponent(runId)) + '/artifacts/batch/metadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Artifact content information.
		 * Get Artifact content information for give Run Id.
		 * Get history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/artifacts/contentinfo
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @param {string} runId The identifier of the Run.
		 * @param {string} path The Artifact Path.
		 * @return {ArtifactContentInformation} The Artifact content information is returned successfully.
		 */
		RunArtifacts_GetContentInformation(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string, runId: string, path: string | null | undefined): Observable<ArtifactContentInformation> {
			return this.http.get<ArtifactContentInformation>(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/runs/' + (runId == null ? '' : encodeURIComponent(runId)) + '/artifacts/contentinfo&path=' + (path == null ? '' : encodeURIComponent(path)), {});
		}

		/**
		 * Get Artifact by Id.
		 * Get Artifact for a specific Id.
		 * Get history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/artifacts/metadata
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @param {string} runId The identifier of the Run.
		 * @param {string} path The Artifact Path.
		 * @return {Artifact} Success
		 */
		RunArtifacts_GetById(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string, runId: string, path: string | null | undefined): Observable<Artifact> {
			return this.http.get<Artifact>(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/runs/' + (runId == null ? '' : encodeURIComponent(runId)) + '/artifacts/metadata&path=' + (path == null ? '' : encodeURIComponent(path)), {});
		}

		/**
		 * Get Artifacts in the provided path.
		 * Get Artifacts in the provided path for a specific Run Id.
		 * Get history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/artifacts/path
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @param {string} runId The identifier of the Run.
		 * @param {string} path The Artifact Path.
		 * @param {string} continuationToken The Continuation Token.
		 * @return {PaginatedArtifactList} Success
		 */
		RunArtifacts_ListInPath(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string, runId: string, path: string | null | undefined, continuationToken: string | null | undefined): Observable<PaginatedArtifactList> {
			return this.http.get<PaginatedArtifactList>(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/runs/' + (runId == null ? '' : encodeURIComponent(runId)) + '/artifacts/path&path=' + (path == null ? '' : encodeURIComponent(path)) + '&continuationToken=' + (continuationToken == null ? '' : encodeURIComponent(continuationToken)), {});
		}

		/**
		 * Get SAS of an Artifact.
		 * Get SAS of an Artifact in the specified path.
		 * Get history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/artifacts/prefix/contentinfo
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @param {string} runId The identifier of the Run.
		 * @param {string} path The Artifact Path.
		 * @param {string} continuationToken The Continuation Token.
		 * @return {PaginatedArtifactContentInformationList} Success
		 */
		RunArtifacts_ListSasByPrefix(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string, runId: string, path: string | null | undefined, continuationToken: string | null | undefined): Observable<PaginatedArtifactContentInformationList> {
			return this.http.get<PaginatedArtifactContentInformationList>(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/runs/' + (runId == null ? '' : encodeURIComponent(runId)) + '/artifacts/prefix/contentinfo&path=' + (path == null ? '' : encodeURIComponent(path)) + '&continuationToken=' + (continuationToken == null ? '' : encodeURIComponent(continuationToken)), {});
		}

		/**
		 * Post Metrics to a Run.
		 * Post Metrics to a specific Run Id.
		 * Post history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/batch/metrics
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @param {string} runId The identifier for a run.
		 * @param {BatchMetric} requestBody Details of the Metrics which will be added to the Run Id.
		 * @return {void} The Run Metrics are posted successfully.
		 */
		RunMetrics_BatchPost(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string, runId: string, requestBody: BatchMetric): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/runs/' + (runId == null ? '' : encodeURIComponent(runId)) + '/batch/metrics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get details of all child runs.
		 * Get details of all child runs for the specified Run Id with the specified filters.
		 * Get history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/children
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @param {string} runId The identifier of the Run.
		 * @param {string} filter Allows for filtering the collection of resources.
		 * The expression specified is evaluated for each resource in the collection, and only items where the expression evaluates to true are included in the response.
		 * @param {string} continuationtoken The continuation token to use for getting the next set of resources.
		 * @param {Array<string>} orderby The list of resource properties to use for sorting the requested resources.
		 * @param {Runs_GetChildSortorder} sortorder The sort order of the returned resources. Not used, specify asc or desc after each property name in the OrderBy parameter.
		 * @param {number} top The maximum number of items in the resource collection to be included in the result.
		 * If not specified, all items are returned.
		 * @param {boolean} count Whether to include a count of the matching resources along with the resources returned in the response.
		 * @return {PaginatedRunList} The details of the child Runs are returned successfully.
		 */
		Runs_GetChild(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string, runId: string, filter: string | null | undefined, continuationtoken: string | null | undefined, orderby: Array<string> | null | undefined, sortorder: Runs_GetChildSortorder | null | undefined, top: number | null | undefined, count: boolean | null | undefined): Observable<PaginatedRunList> {
			return this.http.get<PaginatedRunList>(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/runs/' + (runId == null ? '' : encodeURIComponent(runId)) + '/children&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&continuationtoken=' + (continuationtoken == null ? '' : encodeURIComponent(continuationtoken)) + '&' + orderby?.map(z => `$orderby=${encodeURIComponent(z)}`).join('&') + '&sortorder=' + sortorder + '&top=' + top + '&count=' + count, {});
		}

		/**
		 * Get Run Details.
		 * Get Run Details for a specific Run Id.
		 * Get history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/details
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @param {string} runId The identifier of the Run.
		 * @return {RunDetails} The details of the Run are returned successfully.
		 */
		Runs_GetDetails(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string, runId: string): Observable<RunDetails> {
			return this.http.get<RunDetails>(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/runs/' + (runId == null ? '' : encodeURIComponent(runId)) + '/details', {});
		}

		/**
		 * Post event data.
		 * Post event data to a specific Run Id.
		 * Post history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/events
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @param {string} runId The identifier of the Run.
		 * @param {BaseEvent} requestBody The Event details.
		 * @return {void} The Event is posted successfully.
		 */
		Events_Post(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string, runId: string, requestBody: BaseEvent): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/runs/' + (runId == null ? '' : encodeURIComponent(runId)) + '/events', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post Metric to a Run.
		 * Post a Metric to a specific Run Id.
		 * Post history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/metrics
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @param {string} runId The identifier for a run.
		 * @param {Metric} requestBody Details of the metric which will be added to the Run Id.
		 * @return {void} The Run Metric is posted successfully.
		 */
		RunMetrics_Post(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string, runId: string, requestBody: Metric): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/runs/' + (runId == null ? '' : encodeURIComponent(runId)) + '/metrics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete list of Tags in a Run.
		 * Delete list of Tags from a specific Run Id.
		 * Delete history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs/{runId}/tags
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @param {string} runId The identifier of the Run.
		 * @return {Run} Success
		 */
		Runs_DeleteTags(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string, runId: string): Observable<Run> {
			return this.http.delete<Run>(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/runs/' + (runId == null ? '' : encodeURIComponent(runId)) + '/tags', {});
		}

		/**
		 * Get all Runs for a specific Experiment.
		 * Get all Runs for a specific Experiment with the specified query filters.
		 * Post history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runs:query
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @param {QueryParams} requestBody Query parameters for data sorting and filtering.
		 * @return {PaginatedRunList} Success
		 */
		Runs_GetByQuery(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string, requestBody: QueryParams): Observable<PaginatedRunList> {
			return this.http.post<PaginatedRunList>(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/runs:query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all Experiments in a specific workspace.
		 * Get all experiments in a specific workspace with the specified query filters.
		 * Post history/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments:query
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {QueryParams} requestBody Query parameters for data sorting and filtering.
		 * @return {PaginatedExperimentList} Success
		 */
		Experiments_GetByQuery(subscriptionId: string, resourceGroupName: string, workspaceName: string, requestBody: QueryParams): Observable<PaginatedExperimentList> {
			return this.http.post<PaginatedExperimentList>(this.baseUri + 'history/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments:query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum RunMetrics_GetByQueryMergeStrategyType { Default = 'Default', None = 'None', MergeToVector = 'MergeToVector' }

	export enum RunMetrics_GetByQueryMergeStrategyOptions { None = 'None', ReportUnmergedMetricsValues = 'ReportUnmergedMetricsValues' }

	export enum RunMetrics_GetByQueryMergeStrategySettings_SelectMetrics { SelectAll = 'SelectAll', SelectByFirstValueSchema = 'SelectByFirstValueSchema', SelectByFirstValueSchemaMergeNumericValues = 'SelectByFirstValueSchemaMergeNumericValues' }

	export enum Runs_GetChildSortorder { Asc = 'Asc', Desc = 'Desc' }

}

